/**
 * Most adjustments must be made in `./src/_config/*`
 *
 * Hint VS Code for eleventyConfig autocompletion.
 * © Henry Desroches - https://gist.github.com/xdesro/69583b25d281d055cd12b144381123bf
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig -
 * @returns {Object} -
 */

// register dotenv for process.env.* variables to pickup
import dotenv from 'dotenv';
dotenv.config();

// add yaml support
import yaml from 'js-yaml';

// third-party
import slugify from 'slugify';

//  config import
import { getAllPosts, showInSitemap, tagList } from './src/_config/collections.js';
import events from './src/_config/events.js';
import filters from './src/_config/filters.js';
import plugins from './src/_config/plugins.js';
import shortcodes from './src/_config/shortcodes.js';

export default async function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets/**/*.{css,js,svg,png,jpeg}');
  eleventyConfig.addWatchTarget('./src/_includes/**/*.{webc}');

  // --------------------- layout aliases
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('tags', 'tags.njk');

  // --------------------- Collections (template’s originals)
  eleventyConfig.addCollection('allPosts', getAllPosts);
  eleventyConfig.addCollection('showInSitemap', showInSitemap);
  eleventyConfig.addCollection('tagList', tagList);

  // ======================================================================
  // Collections: unified, repeatable pattern per content type
  // ======================================================================

  /**
   * Register a content type with:
   *  - {typeName}:          collection name used in templates (e.g. "papers")
   *  - {typeName}TagList:   tag list collection for that type (e.g. "papersTagList")
   *  - {folderPath}:        folder containing the markdown files (relative to src/)
   *
   * Adds:
   *   collections[typeName]       -> all items sorted newest first
   *   collections[`${typeName}TagList`] -> unique, case-safe tag list for that type
   */
  function registerContentType(typeName, folderPath) {
    // All items for this content type (newest first)
    eleventyConfig.addCollection(typeName, (collectionApi) => {
      return collectionApi
        .getFilteredByGlob(`./src/${folderPath}/*.md`)
        .sort((a, b) => b.date - a.date);
    });

    // Tag list for this content type (case-insensitive, exclude utility tags)
    eleventyConfig.addCollection(`${typeName}TagList`, (collectionApi) => {
      const byLower = new Map();
      collectionApi.getFilteredByGlob(`./src/${folderPath}/*.md`).forEach((item) => {
        const tags = Array.isArray(item.data.tags)
          ? item.data.tags
          : item.data.tags ? [item.data.tags] : [];
        for (const tag of tags) {
          const t = String(tag);
          if (['all', 'posts', 'docs'].includes(t)) continue;
          const key = t.toLowerCase();
          if (!byLower.has(key)) byLower.set(key, t);
        }
      });
      return [...byLower.values()].sort((a, b) => a.localeCompare(b));
    });
  }

  // --- Register your content types here (repeatable for future types) ---
  registerContentType('papers', 'summaries/papers');
  registerContentType('videos', 'summaries/videos');

  // ---- Temporary compatibility aliases (safe to remove once templates updated)
  // Alias: `collections.summaries` -> papers
  try {
    eleventyConfig.addCollection('summaries', (api) => {
      // mirrors `papers`
      return api.getFilteredByGlob('./src/summaries/papers/*.md').sort((a, b) => b.date - a.date);
    });
  } catch (_) {
    // ignore if already defined
  }
  // Alias: `collections.summaryTagList` -> papersTagList
  try {
    eleventyConfig.addCollection('summaryTagList', (api) => {
      const byLower = new Map();
      api.getFilteredByGlob('./src/summaries/papers/*.md').forEach((item) => {
        const tags = Array.isArray(item.data.tags)
          ? item.data.tags
          : item.data.tags ? [item.data.tags] : [];
        for (const tag of tags) {
          const t = String(tag);
          if (['all', 'posts', 'docs'].includes(t)) continue;
          const key = t.toLowerCase();
          if (!byLower.has(key)) byLower.set(key, t);
        }
      });
      return [...byLower.values()].sort((a, b) => a.localeCompare(b));
    });
  } catch (_) {
    // ignore if already defined
  }

  // ---------------------  Plugins
  eleventyConfig.addPlugin(plugins.htmlConfig);
  eleventyConfig.addPlugin(plugins.cssConfig);
  eleventyConfig.addPlugin(plugins.jsConfig);
  eleventyConfig.addPlugin(plugins.drafts);

  eleventyConfig.addPlugin(plugins.EleventyRenderPlugin);
  eleventyConfig.addPlugin(plugins.rss);
  eleventyConfig.addPlugin(plugins.syntaxHighlight);

  eleventyConfig.addPlugin(plugins.webc, {
    components: ['./src/_includes/webc/*.webc'],
    useTransform: true
  });

  eleventyConfig.addPlugin(plugins.eleventyImageTransformPlugin, {
    formats: ['webp', 'jpeg'],
    widths: ['auto'],
    htmlOptions: {
      imgAttributes: {
        loading: 'lazy',
        decoding: 'async',
        sizes: 'auto'
      },
      pictureAttributes: {}
    }
  });

  // ---------------------  bundle
  eleventyConfig.addBundle('css', { hoist: true });

  // 	--------------------- Library and Data
  eleventyConfig.setLibrary('md', plugins.markdownLib);
  eleventyConfig.addDataExtension('yaml', contents => yaml.load(contents));

  // --------------------- Filters
  eleventyConfig.addFilter('toIsoString', filters.toISOString);
  eleventyConfig.addFilter('formatDate', filters.formatDate);
  eleventyConfig.addFilter('markdownFormat', filters.markdownFormat);
  eleventyConfig.addFilter('splitlines', filters.splitlines);
  eleventyConfig.addFilter('striptags', filters.striptags);
  eleventyConfig.addFilter('shuffle', filters.shuffleArray);
  eleventyConfig.addFilter('alphabetic', filters.sortAlphabetically);
  eleventyConfig.addFilter('slugify', filters.slugifyString);

  // Slug helper used in summary templates
  eleventyConfig.addFilter('slug', (input) =>
    slugify(input, { lower: true, strict: true })
  );

  // --------------------- Shortcodes
  eleventyConfig.addShortcode('svg', shortcodes.svgShortcode);
  eleventyConfig.addShortcode('image', shortcodes.imageShortcode);
  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  // --------------------- Events ---------------------
  if (process.env.ELEVENTY_RUN_MODE === 'serve') {
    eleventyConfig.on('eleventy.after', events.svgToJpeg);
  }

  // --------------------- Passthrough File Copy

  // -- same path
  ['src/assets/fonts/', 'src/assets/images/template', 'src/assets/og-images'].forEach(path =>
    eleventyConfig.addPassthroughCopy(path)
  );

  eleventyConfig.addPassthroughCopy({
    // -- to root
    'src/assets/images/favicon/*': '/',

    // -- node_modules
    'node_modules/lite-youtube-embed/src/lite-yt-embed.{css,js}': `assets/components/`
  });

  // --------------------- general config
  return {
    markdownTemplateEngine: 'njk',

    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
}
