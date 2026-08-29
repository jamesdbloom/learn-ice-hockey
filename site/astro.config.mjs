// @ts-check
import { defineConfig } from 'astro/config';
import { unified, rehypeHeadingIds } from '@astrojs/markdown-remark';
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
  // Decision D1 in the build spec: learn-ice-hockey.com.
  site: 'https://learn-ice-hockey.com',
  trailingSlash: 'always',
  build: { format: 'directory' },

  markdown: {
    // The remark/rehype processor rather than Astro 7's default, because the
    // corpus transforms are written against mdast/hast.
    //
    // `rehypeHeadingIds` is listed explicitly, and it has to come first.
    // Astro appends its own copy *after* every user rehype plugin
    // (createMarkdownProcessor in @astrojs/markdown-remark), so rehypeCorpus
    // used to run against headings that had no `id` yet — its permalink step
    // was gated on `node.properties.id` and therefore never fired once, on any
    // page. Naming the plugin here assigns the ids before rehypeCorpus visits.
    // Astro's appended copy then finds every id already set and leaves it
    // alone, so the GitHub-compatible slugs the corpus's `file.md#anchor`
    // links were written against are unchanged.
    processor: unified({
      remarkPlugins: [[remarkCorpus, { knownIds }]],
      rehypePlugins: [rehypeHeadingIds, rehypeCorpus],
      // The corpus already uses real em dashes and typographic quotes; leave
      // its punctuation alone.
      smartypants: false,
      gfm: true,
    }),
  },

  devToolbar: { enabled: false },
});
