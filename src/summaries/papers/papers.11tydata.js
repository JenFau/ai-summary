// ESM export — safe with "type": "module"
export default {
  eleventyComputed: {
    // e.g. /summaries/my-paper-slug/
    permalink: (data) => `summaries/${String(data.page.fileSlug).toLowerCase()}/index.html`,
    layout: (data) => data.layout || "summary.njk",
  },
};
