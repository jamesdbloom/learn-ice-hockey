/**
 * rehype-corpus — HTML-level fixes for the corpus.
 *
 *   1. Wraps every table in its own horizontally scrollable, focusable region.
 *      The corpus is full of wide four-way rule comparisons; the page body must
 *      never scroll sideways because of them.
 *   2. Adds a permalink to every h2/h3 so headings stay deep-linkable by hand.
 *      (Astro's rehypeHeadingIds has already assigned GitHub-compatible ids,
 *      which is what the corpus's `file.md#heading` links were written against.)
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
      if (/^h[23]$/.test(node.tagName) && node.properties?.id) {
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
              [{ type: 'text', value: '#' }],
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
