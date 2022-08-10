module.exports = {
  eleventyNavigation: {
    key: (data) => {
      const urlParts = data.page.url.split("/");
      // Taking all but first and last leaves us with the page path
      const pathDirs = urlParts.slice(1, urlParts.length - 1);
      const path = `/${pathDirs.join("/")}`;
      return data.key || path;
    },
    title: (data) => data.title,
    parent: (data) => {
      if (data.page.url === "/") {
        return undefined;
      }

      // Get URL directory fragments
      const urlParts = data.page.url.split("/");
      // Taking all but first and last two leaves us with the parent directory path
      const parentDirs = urlParts.slice(1, urlParts.length - 2);
      const parent = `/${parentDirs.join("/")}`;

      // If no specific parent specified, try to automatically use fallback
      return data.parent || parent;
    },
    section: (data) => data.page.url.split("/")[1],
    subsection: (data) => data.page.url.split("/")[2],
    order: (data) => data.order || data.weight,
    icon: (data) => data.icon,
    description: (data) => data.description,
    excerpt: (data) => data.page.excerpt,
    cover: (data) =>
      !data.cover
        ? undefined
        : data.cover.startsWith("http") || data.cover.startsWith("/")
          ? data.cover
          : `${data.page.url}/${data.cover}`,
    date: (data) => data.date,
    hero_title: (data) => data.hero_title,
    hero_subtitle: (data) => data.hero_subtitle,
    hero_text: (data) => data.hero_text,
    url: (data) => data.page.url,
    anchors: (data) => data.anchors || data.page.anchors,
  },
  currentYear: new Date().getFullYear(),
};
