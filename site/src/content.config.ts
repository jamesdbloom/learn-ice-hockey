import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The corpus itself, loaded in place from ../content. Nothing is copied or
 * written back — content/ is the source of truth and is never modified by the
 * site build.
 *
 * The documents carry no frontmatter (the corpus predates the site), so the
 * schema is empty: titles, descriptions and related links come from
 * src/data/docs-meta.json, produced by scripts/extract-meta.mjs.
 *
 * Entry ids match the path under content/ without the extension, e.g.
 * `faceoffs` and `positions/center`, which become /faceoffs/ and
 * /positions/center/.
 */
const docs = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: '../content',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
});

export const collections = { docs };
