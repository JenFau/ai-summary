/** All blog posts as a collection. */
export const getAllPosts = collection => {
  return collection.getFilteredByGlob('./src/posts/**/*.md').reverse();
};

/** All relevant pages as a collection for sitemap.xml */
export const showInSitemap = collection => {
  return collection.getFilteredByGlob('./src/**/*.{md,njk}');
};

/** All tags from all posts as a collection - excluding custom collections */
/** All tags from all posts as a collection – excluding custom collections and deduped case-insensitively */
/** All tags, case-insensitive de-duplication, excluding Eleventy’s utility tags */
export const tagList = (collection) => {
  const byLower = new Map(); // lowercased -> canonical casing
  collection.getAll().forEach((item) => {
    const tags = item.data.tags || [];
    tags
      .filter((t) => !['all', 'posts', 'docs'].includes(t))
      .forEach((t) => {
        const k = String(t).toLowerCase();
        if (!byLower.has(k)) byLower.set(k, t); // keep first-seen casing
      });
  });
  return Array.from(byLower.values()).sort((a, b) => a.localeCompare(b));
};
