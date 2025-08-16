// ESM
import slugify from "slugify";
const makeSlug = (s) => slugify(String(s || ""), { lower: true, strict: true });

export default {
  eleventyComputed: {
    urlSlug: (data) => makeSlug(data.slug ?? data.page.fileSlug ?? data.title),
    permalink: (data) => `videos/${data.urlSlug}/index.html`,
    layout: (data) => data.layout || "video.njk",
  },
};
