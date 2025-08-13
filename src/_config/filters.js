import {toISOString, formatDate} from './filters/dates.js';
import {markdownFormat} from './filters/markdown-format.js';
import {shuffleArray} from './filters/sort-random.js';
import {sortAlphabetically} from './filters/sort-alphabetic.js';
import {splitlines} from './filters/splitlines.js';
import {striptags} from './filters/striptags.js';
import {slugifyString} from './filters/slugify.js';

export default {
  toISOString,
  formatDate,
  markdownFormat,
  splitlines,
  striptags,
  shuffleArray,
  sortAlphabetically,
  slugifyString
};

// Normalise a Nunjucks-style `| date` filter to your existing formatting.
// Uses en-GB by default and supports Date|string|number.
export function date(value, locale = 'en-GB', options = { day: '2-digit', month: 'short', year: 'numeric' }) {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString(locale, options);
}
