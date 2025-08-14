// ESM export — paginates over your summaryTagList collection
export default {
  pagination: {
    data: "collections.summaryTagList",
    size: 1,
    alias: "tag",
  },
  permalink: "summaries/labels/{{ tag | slug }}/index.html",
  layout: "summary-tag.njk",
  eleventyComputed: {
    title: (data) => `Summaries tagged “${data.tag}”`,
  },
};
