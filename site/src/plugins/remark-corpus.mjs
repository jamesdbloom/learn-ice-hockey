/**
 * remark-corpus — the corpus-specific markdown transforms.
 *
 * The documents in ../content are plain markdown written to a house style
 * (see project/content_style_guide.md). This plugin turns that style into
 * semantic structure the site can render properly:
 *
 *   1. Strips the leading H1 (the layout renders the title itself).
 *   2. Turns the opening `> **Rule set:** / **Related:**` blockquote into a
 *      document-header component, with the related links as chips.
 *   3. Reclassifies every other blockquote as a callout — `> **⚠️ …**` blocks
 *      carry rule-set warnings that change what a reader does, so they get
 *      their own treatment rather than generic quote styling.
 *   4. Splits the untitled footer into a collapsed `<details>` of sources and
 *      a visible verification-notes block.
 *   5. Wraps an explicit `## Notes on verification` section in the same
 *      verification-notes styling, keeping its heading (and its anchor).
 *   6. Rewrites relative `*.md` cross-links to site URLs, preserving anchors.
 */

import { visit } from 'unist-util-visit';

const WARNING_RE = /^\s*(⚠|❗|🚫)/u;
const VERIFY_RE = /^\s*(verification note|note on|methodology note)/i;
const NOTE_START_RE =
  /^\s*\**\s*(verification note|unverified|could not be verified|rules verified|note on|methodology note|correction|•)/i;
const SOURCES_RE = /^\s*Sources\s*[—–-]/;

/** Flatten an mdast subtree to plain text. */
function toText(node) {
  if (!node) return '';
  if (typeof node.value === 'string') return node.value;
  if (Array.isArray(node.children)) return node.children.map(toText).join('');
  return '';
}

/** A generic block wrapper. `blockquote` maps to an element wrapping block children. */
function wrapper(hName, properties, children) {
  return {
    type: 'blockquote',
    data: { hName, hProperties: properties },
    children,
  };
}

/** A generic inline-ish block (paragraph handler: element with inline children). */
function inline(hName, properties, children) {
  return {
    type: 'paragraph',
    data: { hName, hProperties: properties },
    children,
  };
}

/**
 * Resolve a relative markdown cross-link to a site URL.
 *
 * Links appear as `faceoffs.md`, `../systems/faceoffs.md` and, between siblings
 * in the same layer directory, a bare `rules_primer.md`.
 *
 * Resolution is by **basename**, which is unique across the whole corpus, so it
 * does not depend on knowing which file we are currently in — which matters
 * because the content-layer pipeline does not reliably expose the source path.
 * That is also why the directory part of the link is deliberately not trusted:
 * a sibling link carries no directory at all, and one layer directory's
 * document may be reached from another by any number of `../` steps.
 *
 * Anything that cannot be resolved is left untouched and caught by
 * scripts/check-links.mjs, which runs against the built HTML and fails the
 * build. That is what caught the layer-directory move: this function used to
 * carry a hardcoded `positions/` fallback, which silently stopped covering the
 * corpus the moment there were seven layer directories rather than one.
 */
const basenameIndexCache = new WeakMap();

function basenameIndex(knownIds) {
  let index = basenameIndexCache.get(knownIds);
  if (!index) {
    index = new Map();
    for (const id of knownIds) index.set(id.split('/').pop(), id);
    basenameIndexCache.set(knownIds, index);
  }
  return index;
}

export function resolveDocHref(href, knownIds) {
  if (!href) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return null; // absolute / protocol
  if (href.startsWith('/')) return null;
  if (href.startsWith('#')) return null;

  const hashAt = href.indexOf('#');
  const hash = hashAt === -1 ? '' : href.slice(hashAt);
  const filePath = hashAt === -1 ? href : href.slice(0, hashAt);
  if (!filePath.endsWith('.md')) return null;

  const segments = filePath.split('/').filter((s) => s && s !== '.' && s !== '..');
  if (segments.length === 0) return null;
  const asPath = segments.join('/').replace(/\.md$/, '');
  const base = segments[segments.length - 1].replace(/\.md$/, '');

  if (knownIds.has(asPath)) return `/${asPath}/${hash}`;

  const byBasename = basenameIndex(knownIds).get(base);
  if (byBasename) return `/${byBasename}/${hash}`;

  return null;
}

/** Detach `count` nodes starting at `from` and return them. */
function take(parentChildren, from, count) {
  return parentChildren.splice(from, count);
}

export default function remarkCorpus(options = {}) {
  const knownIds = new Set(options.knownIds ?? []);

  return function transformer(tree) {
    const children = tree.children;

    // ---------------------------------------------------------------- links
    visit(tree, 'link', (node) => {
      const resolved = resolveDocHref(node.url, knownIds);
      if (resolved) node.url = resolved;
    });

    // ------------------------------------------------------------------ H1
    const h1 = children.findIndex((n) => n.type === 'heading' && n.depth === 1);
    if (h1 !== -1) children.splice(h1, 1);

    // -------------------------------------------------------- doc header
    const headerIdx = children.findIndex(
      (n) => n.type === 'blockquote' && /^\s*Rule set:/.test(toText(n)),
    );
    if (headerIdx !== -1) {
      const bq = children[headerIdx];
      const parts = [];
      let relatedNav = null;

      for (const child of bq.children) {
        const text = toText(child);
        if (/^\s*Related:/.test(text)) {
          const links = [];
          visit(child, 'link', (link) => {
            link.data = link.data || {};
            link.data.hProperties = { ...(link.data.hProperties || {}), class: 'chip' };
            links.push(link);
          });
          relatedNav = inline('nav', { class: 'doc-header-related', 'aria-label': 'Related documents' }, [
            inline('span', { class: 'doc-header-label' }, [{ type: 'text', value: 'Related' }]),
            ...links,
          ]);
        } else if (/^\s*Rule set:/.test(text)) {
          child.data = { ...(child.data || {}), hProperties: { class: 'doc-header-ruleset' } };
          parts.push(child);
        } else {
          const cls = WARNING_RE.test(text) ? 'doc-header-note is-warning' : 'doc-header-note';
          child.data = { ...(child.data || {}), hProperties: { class: cls } };
          parts.push(child);
        }
      }

      children[headerIdx] = wrapper('div', { class: 'doc-header' }, [
        ...parts,
        ...(relatedNav ? [relatedNav] : []),
      ]);
    }

    // --------------------------------------------------------- callouts
    // Every remaining blockquote is a callout, not a quotation. Warnings are
    // load-bearing (they change what a reader does), so they are typed.
    visit(tree, 'blockquote', (node) => {
      if (node.data?.hName) return; // already transformed above
      const text = toText(node.children[0] ?? node);
      let kind = 'note';
      if (WARNING_RE.test(text)) kind = 'warning';
      else if (VERIFY_RE.test(text)) kind = 'verify';
      node.data = {
        ...(node.data || {}),
        hName: 'aside',
        hProperties: { class: `callout callout-${kind}` },
      };
    });

    // ------------------------------------- explicit "Notes on verification"
    const notesHeading = children.findIndex(
      (n) => n.type === 'heading' && n.depth === 2 && /^notes on verification$/i.test(toText(n)),
    );
    if (notesHeading !== -1) {
      let end = notesHeading + 1;
      while (
        end < children.length &&
        !(children[end].type === 'heading' && children[end].depth <= 2) &&
        children[end].type !== 'thematicBreak'
      ) {
        end += 1;
      }
      const section = take(children, notesHeading, end - notesHeading);
      children.splice(
        notesHeading,
        0,
        wrapper('aside', { class: 'verification-notes' }, section),
      );
    }

    // ------------------------------------------------------------- footer
    const sourcesIdx = children.findIndex(
      (n) => n.type === 'paragraph' && SOURCES_RE.test(toText(n)),
    );
    if (sourcesIdx !== -1) {
      const footer = children.slice(sourcesIdx);
      children.length = sourcesIdx;

      // Drop the `---` that introduces the footer; the components have their own rule.
      while (children.length && children[children.length - 1].type === 'thematicBreak') {
        children.pop();
      }

      // The first paragraph is `*Sources — retrieved <date>:*`; keep the date as
      // part of the summary rather than as a stray line inside the disclosure.
      const heading = footer.shift();
      const headingText = toText(heading).replace(/[:*]\s*$/, '').trim();

      const sources = [];
      const notes = [];
      let inNote = false;
      for (const node of footer) {
        const text = toText(node).trim();
        if (NOTE_START_RE.test(text)) {
          inNote = true;
        } else if (inNote && (node.type === 'list' || /^\s*•/.test(text))) {
          // continuation of a note (bullet list under an "Unverified:" lead-in)
        } else {
          inNote = false;
        }
        (inNote ? notes : sources).push(node);
      }

      if (sources.length) {
        children.push(
          wrapper('details', { class: 'sources' }, [
            inline('summary', { class: 'sources-summary' }, [
              { type: 'text', value: headingText || 'Sources' },
            ]),
            wrapper('div', { class: 'sources-body' }, sources),
          ]),
        );
      }

      if (notes.length) {
        children.push(
          wrapper('aside', { class: 'verification-notes' }, [
            inline('p', { class: 'verification-notes-title' }, [
              { type: 'text', value: 'Verification notes' },
            ]),
            ...notes,
          ]),
        );
      }
    }
  };
}
