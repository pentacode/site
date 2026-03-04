import { readFileSync, writeFileSync, mkdirSync, cpSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname, basename, relative, extname } from "path";

const ROOT = new URL("..", import.meta.url).pathname;
const HANDBUCH_DIR = join(ROOT, "handbuch");
const STEMPELUHR_DIR = join(ROOT, "stempeluhr");
const MA_APP_DIR = join(ROOT, "mitarbeiter-app");
const OUTPUT_DIR = join(ROOT, "starlight", "src", "content", "docs");
const PUBLIC_DIR = join(ROOT, "starlight", "public");

// Chapter-level pages (these get their order from sidebar config, not frontmatter)
const CHAPTER_DIRS = new Set([
  "anzeige",
  "berichte",
  "dashboard",
  "datenexport",
  "dienstplan",
  "einstellungen",
  "mitarbeiter",
  "planung",
  "probleme",
  "recruiting",
  "stempeluhr",
  "umsaetze",
  "zeiterfassung",
]);

// Redirect files to skip (handled in astro.config.mjs)
const REDIRECT_FILES = new Set([
  "handbuch/arbeitszeitblatt.md",
  "handbuch/mitarbeiter-app.md",
  "handbuch/stempeluhr/tagesuebersicht.md",
  "handbuch/stempeluhr/tablet-funktionen.md",
  "handbuch/stempeluhr/index.md",
  "handbuch/dienstplan/plan-ist-vergleich.md",
  "handbuch/mitarbeiter/neuer-mitarbeiter.md",
]);

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: content, raw: "" };

  const raw = match[1];
  const body = match[2];
  const frontmatter = {};

  // Simple YAML parsing for our known fields
  let currentKey = null;
  let inArray = false;
  let arrayValues = [];

  for (const line of raw.split("\n")) {
    if (inArray) {
      if (line.match(/^\s*-\s+/)) {
        arrayValues.push(line.replace(/^\s*-\s+/, "").trim());
        continue;
      } else {
        frontmatter[currentKey] = arrayValues;
        inArray = false;
        arrayValues = [];
      }
    }

    const kvMatch = line.match(/^(\w+):\s*(.*)$/);
    if (kvMatch) {
      currentKey = kvMatch[1];
      const value = kvMatch[2].trim();
      if (value === "" || value === "[]") {
        if (value === "[]") {
          frontmatter[currentKey] = [];
        }
        inArray = value === "";
        arrayValues = [];
      } else {
        frontmatter[currentKey] = value;
      }
    }
  }
  if (inArray && arrayValues.length > 0) {
    frontmatter[currentKey] = arrayValues;
  }

  return { frontmatter, body, raw };
}

function buildFrontmatter(fm, isChapterLevel) {
  const lines = ["---"];

  if (fm.title) {
    const title = fm.title.replace(/"/g, '\\"');
    lines.push(`title: "${title}"`);
  }

  if (fm.description) {
    const desc = fm.description.replace(/"/g, '\\"');
    lines.push(`description: "${desc}"`);
  }

  // Convert weight to sidebar order (only for non-chapter-level pages)
  if (fm.weight && !isChapterLevel) {
    lines.push(`sidebar:`);
    lines.push(`  order: ${fm.weight}`);
  }

  if (fm.icon) {
    lines.push(`icon: ${fm.icon}`);
  }

  if (fm.keywords && Array.isArray(fm.keywords) && fm.keywords.length > 0) {
    lines.push(`keywords:`);
    for (const kw of fm.keywords) {
      lines.push(`  - ${kw}`);
    }
  }

  if (fm.draft === "true") {
    lines.push(`draft: true`);
  }

  lines.push("---");
  return lines.join("\n");
}

function convertShortcodes(body) {
  let result = body;

  // Track which components are used
  const used = { Figure: false, Button: false, Key: false, Icon: false };

  // Step 1: Normalize multi-line shortcodes into single lines.
  // This handles cases like {% button icon =\n"rectangle-history" %}
  // and {% figure caption="long text\nthat wraps" %}
  result = result.replace(/\{%[\s\S]*?%\}/g, (match) => {
    return match.replace(/\n\s*/g, " ");
  });

  // Step 2: Convert {% figure caption="..." %} ... {% endfigure %}
  result = result.replace(
    /\{%\s*figure\s*(.*?)\s*%\}([\s\S]*?)\{%\s*endfigure\s*%\}/g,
    (match, attrs, content) => {
      used.Figure = true;
      const captionMatch = attrs.match(/caption\s*=\s*["']([^"']*)["']/);
      const classMatch = attrs.match(/extraClass\s*=\s*["']([^"']*)["']/);
      const caption = captionMatch ? captionMatch[1] : "";
      const extraClass = classMatch ? classMatch[1] : "";

      let props = "";
      if (caption) props += ` caption="${caption}"`;
      if (extraClass) props += ` class="${extraClass}"`;

      return `<Figure${props}>\n${content.trim()}\n</Figure>`;
    }
  );

  // Step 3: Convert {% icon "name" %} and {%icon "name"%} variants
  result = result.replace(/\{%\s*icon\s+["']([^"']+)["']\s*%\}/g, (match, name) => {
    used.Icon = true;
    return `<Icon name="${name}" />`;
  });

  // Step 4: Convert {% button ... %} and {%button ...%} variants
  result = result.replace(/\{%\s*button\s+([\s\S]*?)\s*%\}/g, (match, attrs) => {
    used.Button = true;
    const labelMatch = attrs.match(/label\s*=\s*["']([^"']*)["']/);
    const iconMatch = attrs.match(/(?:^|[,\s])icon\s*=\s*["']([^"']*)["']/);
    const iconRightMatch = attrs.match(/iconRight\s*=\s*["']([^"']*)["']/);
    const classMatch = attrs.match(/extraClass\s*=\s*["']([^"']*)["']/);

    const parts = [];
    if (labelMatch) parts.push(`label="${labelMatch[1]}"`);
    if (iconMatch) parts.push(`icon="${iconMatch[1]}"`);
    if (iconRightMatch) parts.push(`iconRight="${iconRightMatch[1]}"`);
    if (classMatch) parts.push(`class="${classMatch[1]}"`);

    return `<Button ${parts.join(" ")} />`;
  });

  // Step 5: Convert {% key "name" %}
  result = result.replace(/\{%\s*key\s+["']([^"']+)["'](?:\s*,\s*["']([^"']*)["'])?\s*%\}/g, (match, name, extraClass) => {
    used.Key = true;
    if (extraClass) {
      return `<Key class="${extraClass}">${name}</Key>`;
    }
    return `<Key>${name}</Key>`;
  });

  // Step 6: Convert other simple shortcodes
  result = result.replace(/\{%\s*br\s*%\}/g, "<br />");
  result = result.replace(/\{%\s*relref\s+["']([^"']+)["']\s*%\}/g, "$1");

  // Step 7: Fix internal links - strip /handbuch/ prefix
  result = result.replace(/\]\(\/handbuch\//g, "](/");
  result = result.replace(/\]\(\/site\/handbuch\//g, "](/");

  // Step 8: Make all <img> tags self-closing (MDX/JSX requirement)
  result = result.replace(/<img ([^>]*[^/])>/g, "<img $1 />");

  // Step 9: Escape < and <= comparison operators in text that MDX misinterprets as JSX
  // Match < or <= followed by a digit or space+digit, but NOT inside HTML tags
  result = result.replace(/(<)=(\s*\d)/g, "&le;$2");
  result = result.replace(/([^<\w])(<)(\d)/g, "$1&lt;$3");

  // Step 10: Escape literal curly braces that MDX would interpret as JSX expressions
  result = escapeJsxBraces(result);

  // Step 11: Detect <Icon ...> usage (Starlight built-in icons used directly in content)
  if (/<Icon\s/.test(result)) used.Icon = true;

  return { body: result, used };
}

function escapeJsxBraces(content) {
  const lines = content.split("\n");
  const result = [];

  for (const line of lines) {
    // Skip lines that are component tags or imports - don't escape those
    if (
      line.match(/^\s*<(Figure|Icon|Button|Key|img|br)\b/) ||
      line.match(/^\s*<\/(Figure|Icon|Button|Key)>/) ||
      line.match(/^\s*import\s/)
    ) {
      result.push(line);
      continue;
    }

    // Don't escape if there are no braces
    if (!line.includes("{") && !line.includes("}")) {
      result.push(line);
      continue;
    }

    // For other lines, escape { and } that appear outside of HTML/JSX tags
    let escaped = "";
    let inTag = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === "<" && !inTag) {
        inTag = true;
        escaped += ch;
      } else if (ch === ">" && inTag) {
        inTag = false;
        escaped += ch;
      } else if (ch === "{" && !inTag) {
        escaped += "\\{";
      } else if (ch === "}" && !inTag) {
        escaped += "\\}";
      } else {
        escaped += ch;
      }
    }
    result.push(escaped);
  }
  return result.join("\n");
}

function getImportPath(outputFile) {
  const rel = relative(dirname(outputFile), join(ROOT, "starlight", "src", "components"));
  return rel.startsWith(".") ? rel : `./${rel}`;
}

function processFile(inputPath, outputPath, relPath, isChapterLevel, publicRelDir) {
  const content = readFileSync(inputPath, "utf-8");
  const { frontmatter, body } = parseFrontmatter(content);

  // Skip redirect-only files
  if (frontmatter.redirect) {
    console.log(`  SKIP (redirect): ${relPath}`);
    return;
  }

  // Skip files with eleventyExcludeFromCollections
  if (frontmatter.eleventyExcludeFromCollections) {
    console.log(`  SKIP (excluded): ${relPath}`);
    return;
  }

  const newFrontmatter = buildFrontmatter(frontmatter, isChapterLevel);
  let { body: convertedBody, used } = convertShortcodes(body);

  // Rewrite relative image src to absolute public/ path
  if (publicRelDir) {
    convertedBody = absolutifyImageSrcs(convertedBody, publicRelDir);
  }

  // Build imports
  const importPath = getImportPath(outputPath);
  const imports = [];
  if (used.Figure) imports.push(`import Figure from "${importPath}/Figure.astro";`);
  if (used.Icon) imports.push(`import Icon from "${importPath}/Icon.astro";`);
  if (used.Button) imports.push(`import Button from "${importPath}/Button.astro";`);
  if (used.Key) imports.push(`import Key from "${importPath}/Key.astro";`);

  const importBlock = imports.length > 0 ? "\n" + imports.join("\n") + "\n" : "";

  const output = newFrontmatter + importBlock + "\n" + convertedBody.trimStart();

  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, output);
  console.log(`  OK: ${relPath} -> ${relative(OUTPUT_DIR, outputPath)}`);
}

// Copy co-located images to public/ (not alongside MDX — Astro doesn't serve them from src/content)
// publicRelDir: the URL path segment, e.g. "dienstplan" → images go to public/dienstplan/
function copyImages(srcDir, publicRelDir) {
  if (!existsSync(srcDir)) return;
  const imageExts = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif", ".svg"]);
  const destDir = join(PUBLIC_DIR, publicRelDir);

  for (const entry of readdirSync(srcDir)) {
    const srcPath = join(srcDir, entry);
    const stat = statSync(srcPath);
    if (stat.isFile() && imageExts.has(extname(entry).toLowerCase())) {
      mkdirSync(destDir, { recursive: true });
      cpSync(srcPath, join(destDir, entry));
    }
  }
}

// Rewrite relative img src="filename.webp" to absolute src="/publicRelDir/filename.webp"
function absolutifyImageSrcs(body, publicRelDir) {
  return body.replace(/src\s*=\s*["']([^/"'][^"']*)["']/g, (match, src) => {
    // Skip if already absolute or a URL
    if (src.startsWith("/") || src.startsWith("http")) return match;
    return `src="/${publicRelDir}/${src}"`;
  });
}

function walkDir(dir, callback, basePath = dir) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, callback, basePath);
    } else if (entry.endsWith(".md")) {
      callback(fullPath, relative(basePath, fullPath));
    }
  }
}

// Main migration
console.log("=== Migrating handbuch content ===\n");

walkDir(HANDBUCH_DIR, (inputPath, relPath) => {
  const relFromRoot = `handbuch/${relPath}`;

  // Skip known redirect files
  if (REDIRECT_FILES.has(relFromRoot)) {
    console.log(`  SKIP (redirect list): ${relFromRoot}`);
    return;
  }

  // Determine output path
  const parts = relPath.split("/");

  // Flatten leaf subdirectory indexes: chapter/subdir/index.md → chapter/subdir.mdx
  // This avoids autogenerate creating extra nested groups for single-page subdirs.
  let outputRelPath;
  if (parts.length === 3 && parts[2] === "index.md") {
    outputRelPath = `${parts[0]}/${parts[1]}.mdx`;
  } else {
    outputRelPath = relPath.replace(/\.md$/, ".mdx");
  }

  // Determine if this is a chapter-level page
  const isChapterLevel =
    (parts.length === 2 && parts[1] === "index.md" && CHAPTER_DIRS.has(parts[0])) ||
    (parts.length === 1 && parts[0] === "index.md");

  const outputPath = join(OUTPUT_DIR, outputRelPath);
  const inputDir = dirname(inputPath);
  // publicRelDir: URL path where images live, e.g. "dienstplan" or "mitarbeiter/vertrag"
  // dirname("dienstplan/index.md") = "dienstplan"
  // dirname("index.md") = "." — for the root index, use empty string
  const dirPart = dirname(relPath);
  const publicRelDir = dirPart === "." ? "" : dirPart;

  // Copy co-located images to public/<publicRelDir>/
  copyImages(inputDir, publicRelDir);

  processFile(inputPath, outputPath, relFromRoot, isChapterLevel, publicRelDir);
});

// Migrate top-level stempeluhr
console.log("\n=== Migrating stempeluhr ===\n");
if (existsSync(STEMPELUHR_DIR)) {
  const stempeluhrOut = join(OUTPUT_DIR, "stempeluhr");
  mkdirSync(stempeluhrOut, { recursive: true });

  const stempeluhrIndex = join(STEMPELUHR_DIR, "index.md");
  if (existsSync(stempeluhrIndex)) {
    processFile(stempeluhrIndex, join(stempeluhrOut, "index.mdx"), "stempeluhr/index.md", true, "stempeluhr");
  }
  copyImages(STEMPELUHR_DIR, "stempeluhr");
}

// Migrate top-level mitarbeiter-app
console.log("\n=== Migrating mitarbeiter-app ===\n");
if (existsSync(MA_APP_DIR)) {
  const maAppOut = join(OUTPUT_DIR, "mitarbeiter-app");
  mkdirSync(maAppOut, { recursive: true });

  const maAppIndex = join(MA_APP_DIR, "index.md");
  if (existsSync(maAppIndex)) {
    processFile(maAppIndex, join(maAppOut, "index.mdx"), "mitarbeiter-app/index.md", true, "mitarbeiter-app");
  }
  copyImages(MA_APP_DIR, "mitarbeiter-app");
}

// Copy uploads to public
console.log("\n=== Copying uploads ===\n");
const uploadsDir = join(ROOT, "assets", "uploads");
if (existsSync(uploadsDir)) {
  const publicUploads = join(PUBLIC_DIR, "uploads");
  mkdirSync(publicUploads, { recursive: true });
  cpSync(uploadsDir, publicUploads, { recursive: true });
  console.log(`  Copied assets/uploads -> starlight/public/uploads`);
}

console.log("\n=== Migration complete ===");
