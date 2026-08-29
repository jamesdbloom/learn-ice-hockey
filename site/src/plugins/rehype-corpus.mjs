/**
 * rehype-corpus — HTML-level fixes for the corpus.
 *
 *   1. Wraps every table in its own horizontally scrollable, focusable region.
 *      The corpus is full of wide four-way rule comparisons; the page body must
 *      never scroll sideways because of them.
 *   2. Adds a permalink to every h2/h3/h4 so headings stay deep-linkable by hand.
 *      This only works because astro.config.mjs names `rehypeHeadingIds` ahead
 *      of this plugin. Astro appends its own copy of that plugin *after* every
 *      user rehype plugin, so for as long as it was left implicit this step ran
 *      against headings with no `id` and silently produced nothing: a `grep -r
 *      heading-anchor dist` across 36 pages that all had `<h3 id=...>` returned
 *      zero. If the ordering in astro.config.mjs is ever undone, this feature
 *      dies again without an error.
 *
 *      The anchor is deliberately empty: its "#" comes from `.heading-anchor`'s
 *      ::after in global.css. Astro's appended second pass of rehypeHeadingIds
 *      re-derives each heading's *text* by walking its descendant text nodes,
 *      and that text is what the on-page table of contents renders. A literal
 *      "#" child here would append a stray hash to all 41 h4, 7 h3 and 12 h2
 *      entries of every contents list on the site.
 *   3. Marks external links so they can be styled and opened safely.
 */

import { visit } from 'unist-util-visit';

const el = (tagName, properties, children = []) => ({
  type: 'element',
  tagName,
  properties,
  children,
});

function textOf(node) {
  if (node.type === 'text') return node.value;
  if (node.children) return node.children.map(textOf).join('');
  return '';
}

export default function rehypeCorpus() {
  return function transformer(tree) {
    visit(tree, 'element', (node, index, parent) => {
      if (!parent || index === undefined) return;

      // ------------------------------------------------ scrollable tables
      if (node.tagName === 'table') {
        if (parent.type === 'element' && parent.properties?.className?.includes?.('table-scroll')) {
          return;
        }
        const wrapped = el(
          'div',
          {
            className: ['table-scroll'],
            tabindex: '0',
            role: 'region',
            'aria-label': 'Table, scrollable horizontally',
          },
          [node],
        );
        parent.children[index] = wrapped;
        return [visit.SKIP, index + 1];
      }

      // ----------------------------------------------- heading permalinks
      if (/^h[234]$/.test(node.tagName) && node.properties?.id) {
        const id = node.properties.id;
        const already = node.children.some(
          (c) => c.type === 'element' && c.properties?.className?.includes?.('heading-anchor'),
        );
        if (!already) {
          node.children.push(
            el(
              'a',
              {
                className: ['heading-anchor'],
                href: `#${id}`,
                'aria-label': `Link to section: ${textOf(node).trim()}`,
              },
              // No text child — see the note at the top of this file.
              [],
            ),
          );
        }
      }

      // -------------------------------------------------- external links
      if (node.tagName === 'a' && typeof node.properties?.href === 'string') {
        const href = node.properties.href;
        if (/^https?:\/\//i.test(href)) {
          node.properties.rel = 'noopener noreferrer';
          node.properties.target = '_blank';
          node.properties.className = [
            ...(Array.isArray(node.properties.className) ? node.properties.className : []),
            'external',
          ];
        }
      }
    });
  };
}
