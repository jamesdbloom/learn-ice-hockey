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
 *   4. Adds `table-scroll--tall` to the wide comparison tables, which is the
 *      only thing that makes global.css's sticky column header apply. See the
 *      note on `columnsOf` below for why the trigger is the column count.
 */

import { visit } from 'unist-util-visit';

const el = (tagName, properties, children = []) => ({
  type: 'element',
  tagName,
  properties,
  children,
});

/**
 * Header cells in a table's first header row, colspans counted.
 *
 * This decides whether the wrapper gets `table-scroll--tall`, which is what
 * gives global.css's `thead th { position: sticky; top: 0 }` a scrollport to
 * stick to. Before this existed the modifier was emitted by nothing: the
 * string `table-scroll--tall` appeared in the built site exactly once, in the
 * CSS bundle, and on 0 of 47 table wrappers. The sticky header had never
 * applied to anything.
 *
 * WHY COLUMN COUNT, AND WHY FIVE. Measured across all 47 tables in the built
 * site, at 375x812 and 1440x900:
 *
 *   - Two tables have five or more columns: rules_primer S10 "Rule Set
 *     Differences That Actually Matter" (6 columns) and
 *     defensive_zone_coverage "Comparison Table" (6). They overflow their
 *     wrapper by 513px and 545px at 375 - the two largest on the site, ahead
 *     of the next widest (340px) - and they are the ONLY two that still
 *     overflow at 1440, by 67px and 99px.
 *
 *     ⚠️ THE SENTENCE THAT USED TO FOLLOW THAT WAS FALSE, and is corrected
 *     here rather than deleted, because the cut it defends is still right.
 *     It read: "A reader is scrolled away from the row header on these and on
 *     nothing else." True at 1440. FALSE AT 375, where a browser sweep found
 *     TWELVE further tables that are taller than the viewport AND overflow
 *     horizontally - risk_management (2,325px, 66px over), equipment (2,034px,
 *     40px), switching_positions (1,768px, 111px), forechecking_systems,
 *     getting_started x2, goaltender, body_contact_and_battles, rules_primer,
 *     rink_map_and_glossary. On those a reader IS scrolled away from the
 *     column header.
 *
 *     What they do NOT lose is the ROW label, which is sticky globally on
 *     `td:first-child` and works on all 47. So the loss is the column header
 *     only, which is milder - and widening the cut to catch them re-opens the
 *     clipping regression the fourth bullet below correctly argues against.
 *     THE CUT STANDS; the claim of total coverage does not.
 *   - Height alone is the wrong trigger. The second-tallest table on a phone
 *     is body_contact_and_battles "What actually gets called" at 7,233px, and
 *     it has two columns and zero overflow: nothing about it is ambiguous, and
 *     capping it would have bought a nested scroller for no reader benefit.
 *   - Four columns is the wrong cut. It would add rink_map_and_glossary's IIHF
 *     table (863px at 375) and getting_started S4 (674px), which exceed the
 *     cap by 295px and 106px - clipping a table to save a tenth of a screen is
 *     the regression the modifier was made opt-in to avoid.
 *
 * No height condition is needed here, and deliberately so: `max-height` is
 * self-limiting, so a short wide table keeps its natural height and never
 * becomes a scroller. The height question is asked once, in CSS, where the
 * viewport is actually known - which is not here.
 */
/**
 * Every `tr` in a table, across `thead`/`tbody`/`tfoot` or directly on the
 * table. Deliberately not a `visit` -- a nested table's rows must not be
 * treated as this table's rows.
 */
function tableRows(table) {
  const rows = [];
  for (const section of table.children ?? []) {
    if (section.type !== 'element') continue;
    if (section.tagName === 'tr') rows.push(section);
    else if (['thead', 'tbody', 'tfoot'].includes(section.tagName)) {
      for (const r of section.children ?? []) {
        if (r.type === 'element' && r.tagName === 'tr') rows.push(r);
      }
    }
  }
  return rows;
}

function columnsOf(table) {
  let row = null;
  visit(table, 'element', (n) => {
    if (!row && n.tagName === 'tr') row = n;
  });
  if (!row) return 0;
  return row.children
    .filter((c) => c.type === 'element' && (c.tagName === 'th' || c.tagName === 'td'))
    .reduce((n, c) => n + (Number(c.properties?.colSpan) || 1), 0);
}

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
        const tall = columnsOf(node) >= 5;
        const wrapped = el(
          'div',
          {
            className: tall ? ['table-scroll', 'table-scroll--tall'] : ['table-scroll'],
            tabindex: '0',
            role: 'region',
            // The label has to match what the region actually does. `--tall`
            // height-caps the wrapper, which makes it a scrollport on both
            // axes, and telling a screen-reader user it scrolls horizontally
            // when it also scrolls vertically is the same defect as not
            // telling them at all.
            'aria-label': tall
              ? 'Table, scrollable horizontally and vertically'
              : 'Table, scrollable horizontally',
          },
          [node],
        );
        // ------------------------------------------- sticky row labels
        // ⚠️ Only for `--tall`, and only because a CSS-only fix DOES NOT EXIST.
        //
        // `.table-scroll td:first-child` is `position: sticky; left: 0`, which
        // pins the label on the HORIZONTAL axis. That was assumed to be the
        // whole job. It is not: on §10 of `rules_primer`, nine rows are taller
        // than the wrapper's cap and eight are taller than a 375x812 phone
        // viewport -- the largest is 2,156px. The cell inherits
        // `vertical-align: top`, so its text sits at the row's top; scroll ~40px
        // down inside a 1,724px row and the LABEL IS ABOVE THE SCROLLPORT while
        // the cell box is still pinned. A reader then sees an empty white box
        // 114px wide -- 30% of a phone screen -- beside prescriptive text about
        // crouching to avoid a check, with no idea which rule the row is about.
        // That is the exact failure `--tall` was added to prevent.
        //
        // Sticky cannot fix it, because sticky moves a BOX within its
        // containing block and this box already fills the row. So the label's
        // CONTENT needs its own sticky wrapper, which needs markup -- hence
        // doing it here rather than in `global.css`.
        //
        // Not applied to non-tall tables: their wrapper has no height cap, so
        // there is no vertical scrollport for a label to stick inside, and the
        // span would be inert markup on every table in the corpus.
        if (tall) {
          for (const row of tableRows(node)) {
            const first = row.children?.find(
              (c) => c.type === 'element' && (c.tagName === 'td' || c.tagName === 'th'),
            );
            // `th` row-headers are left alone: they are already short labels in
            // a header context, and wrapping them would nest a sticky span
            // inside the sticky corner cell, which fights on both axes.
            if (!first || first.tagName !== 'td' || !first.children?.length) continue;
            first.children = [el('span', { className: ['row-label'] }, first.children)];
          }
        }

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
