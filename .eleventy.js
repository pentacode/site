const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const EleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { minify: cleanHtml } = require("html-minifier-terser");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { getTOC } = require("./_lib/toc");

const isProduction = process.env.NODE_ENV === 'production';

async function minifyHtml(source, output_path) {
    if (!output_path.endsWith(".html") || !isProduction) return source;

    const result = await cleanHtml(source, {
        collapseBooleanAttributes: true,
        collapseWhitespace: false,
        collapseInlineTagWhitespace: true,
        continueOnParseError: true,
        decodeEntities: true,
        keepClosingSlash: true,
        minifyCSS: true,
        quoteCharacter: `"`,
        removeComments: true,
        removeAttributeQuotes: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true
    });

    console.log(`MINIFY ${output_path}`, source.length, `→`, result.length, `(${((1 - (result.length / source.length)) * 100).toFixed(2)}% reduction)`);

    return result;
}

function orderByDate(collection) {
    return collection.sort((a, b) => (b.publishDate || b.date) - (a.publishDate || a.date));
}

function excludeDrafts(collection) {
    return collection.filter((item) => !item.draft);
}

module.exports = (config) => {
    function outdent(str) {
        const lines = str.split("\n");
        const minLeadingWhitespace = lines.reduce((min, line) => Math.min(min, Math.max(0, line.search(/[^\s]/))), 0);
        return lines.map((line) => line.slice(minLeadingWhitespace)).join("\n");
    }

    config.setLibrary(
        "md",
        markdownIt({
            html: true,
            linkify: true,
        }).use(markdownItAnchor).use(markdownItFootnote)
    );

    const md = markdownIt({ html: true, linkify: true });

    config.setFrontMatterParsingOptions({
        excerpt: (file) => {
            const text = md.render(file.content).replace(/(<([^>]+)>)/gi, "");
            file.excerpt = text.split(" ").slice(0, 50).join(" ");
        },
    });

    config.addFilter('markdownify', (str) => {
        return md.renderInline(str);
    });

    config.addFilter("plainify", function (string) {
        const text = md.render(string).replace(/(<([^>]+)>)/gi, "").trim();
        return text;
    });

    config.addPlugin(EleventyNavigationPlugin);

    config.addPlugin(EleventyRenderPlugin);

    config.addPlugin(pluginRss);

    const html = (...args) => outdent(String.raw(...args)).trim();

    config.addPassthroughCopy("assets/**/*");
    config.addPassthroughCopy("admin/config.yml");
    config.addPassthroughCopy("admin/*.css");

    // Old paths
    config.addPassthroughCopy({ "./assets": "/" });

    config.setTemplateFormats(["html", "md", "njk", "png", "jpg", "gif", "webp"]);

    config.addNunjucksShortcode(
        "img",
        ({ src, title = "", alt = "" }) => html` <img src="${src}" title="${title}" alt="${alt}" /> `
    );

    config.addPairedNunjucksShortcode(
        "figure",
        (content, { caption = "", extraClass = "" } = {}) =>
            html` <figure class="${extraClass}">${content} ${caption ? html`<figcaption>${caption}</figcaption>` : ""}</figure> `
    );

    config.addNunjucksShortcode("relref", (ref) => ref);
    config.addNunjucksShortcode("key", (key, extraClass = "") => html`<span class="key ${extraClass}">${key}</span>`);
    config.addNunjucksShortcode("icon", (icon) => html`<i class="fas fa-${icon}"></i>`);
    config.addNunjucksShortcode("button", ({ label = "", icon = "", iconRight = "", extraClass = "" }) => html`<span class="fake-button ${extraClass}">${icon ? html`<i class="fas fa-${icon}"></i>` : ''} ${label ? label : ''} ${iconRight ? html`<i class="fas fa-${iconRight}"></i>` : ''}</span>`);
    config.addNunjucksShortcode("param", (param) => html`<strong>[REPLACE_ME ${param}]</strong>`);
    config.addNunjucksShortcode("br", () => html`<br />`);
    config.addNunjucksShortcode(
        "iframe",
        ({ src, width, height }) => html`
            <iframe
                src="${src}"
                width="${width}"
                height="${height}"
                frameborder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowfullscreen
            ></iframe>
        `
    );
    config.addNunjucksShortcode(
        "youtube",
        (videoId) => html`
            <iframe src="https://www.youtube.com/embed/${videoId}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" allowfullscreen title="YouTube Video"></iframe>
        `
    );
    config.addPairedNunjucksShortcode("note", (content) => content);
    config.addPairedNunjucksShortcode("blockquote", (content) => html`<blockquote>${content}</blockquote>`);
    config.addPairedNunjucksShortcode("colored", (content, color) => html`<span class="${color}">${content}</span>`);

    config.addFilter("jsonify", (val) => JSON.stringify(val, null, 4));
    config.addFilter("startsWith", (str = "", searchString = "") => str.startsWith(searchString));
    config.addFilter("toc", getTOC);
    config.addFilter("nextInSection", function (items) {
        return items.find((item) => item.order === this.ctx.eleventyNavigation.order + 1);
    });
    config.addFilter("prevInSection", function (items) {
        return items.find((item) => item.order === this.ctx.eleventyNavigation.order - 1);
    });

    config.addFilter("formatDate", (date) => (date ? new Date(date).toLocaleDateString("de-DE", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : ""));
    config.addFilter("orderByDate", orderByDate);
    config.addFilter("sortByWeight", (collection) => collection.sort((a, b) => b.weight - a.weight));
    config.addFilter("excludeDrafts", excludeDrafts);
    config.addFilter("getNewestCollectionItemPublishDate", (collection) => new Date(Math.max(...collection.map(item => { return item.publishDate }))));
    config.addFilter("getRelatedByMagazinCategories", (collection, magazinCategories, itemKey) => {
        orderByDate(collection);

        const related = excludeDrafts(collection).filter((item) => item.magazinCategories.some((category) => magazinCategories.includes(category)) && item.key !== itemKey);

        return related.slice(0, 3);
    });

    config.addFilter("filterByMagazinCategory", (collection, magazinCategory) => {
        orderByDate(collection);

        const filtered = excludeDrafts(collection).filter((item) => item.magazinCategories.includes(magazinCategory));

        return filtered;
    });

    config.addTransform("htmlmin", minifyHtml);

    return {
        markdownTemplateEngine: "njk",
    };
};
