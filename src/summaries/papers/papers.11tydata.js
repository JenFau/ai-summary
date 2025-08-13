// src/summaries/papers/papers.11tydata.js
export default {
  eleventyComputed: {
    permalink: (data) => {
      const slug = String(data.page.fileSlug || "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      return `summaries/${slug}/index.html`;
    },
    layout: (data) => data.layout || "summary.njk",
  },
};
