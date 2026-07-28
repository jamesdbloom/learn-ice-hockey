// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import { readFileSync } from 'node:fs';

import remarkCorpus from './src/plugins/remark-corpus.mjs';
import rehypeCorpus from './src/plugins/rehype-corpus.mjs';

/**
 * The corpus lives in ../content and is never written to by this build.
 * docs-meta.json is produced from it by scripts/extract-meta.mjs (npm run
 * prepare:meta), which runs before dev and build.
 */
let meta;
try {
  meta = JSON.parse(readFileSync(new URL('./src/data/docs-meta.json', import.meta.url), 'utf8'));
} catch {
  throw new Error(
    'src/data/docs-meta.json is missing. Run "npm run prepare:meta" (npm run dev and npm run build do this for you).',
  );
}
const knownIds = Object.keys(meta.docs);

export default defineConfig({
  // Canonical URLs, Open Graph tags and the sitemap are built from this.
  // Set it to the real domain once decision D1 in the build spec is made.
  site: 'https://example.invalid',
  trailingSlash: 'always',
  build: { format: 'directory' },

  markdown: {
    // The remark/rehype processor rather than Astro 7's default, because the
    // corpus transforms are written against mdast/hast. Astro's own
    // rehypeHeadingIds runs first and assigns GitHub-compatible heading ids —
    // which is exactly what the corpus's `file.md#anchor` links were written
    // against, so those anchors keep working unchanged.
    processor: unified({
      remarkPlugins: [[remarkCorpus, { knownIds }]],
      rehypePlugins: [rehypeCorpus],
      // The corpus already uses real em dashes and typographic quotes; leave
      // its punctuation alone.
      smartypants: false,
      gfm: true,
    }),
  },

  devToolbar: { enabled: false },
});
