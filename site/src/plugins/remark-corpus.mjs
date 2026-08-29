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

import { readFileSync } from 'node:fs';
import { SKIP, visit } from 'unist-util-visit';
import { fromMarkdown } from 'mdast-util-from-markdown';

const WARNING_RE = /^\s*(⚠|❗|🚫)/u;
// The same glyphs where they *end* a text run — `… is not yours. ⚠️ **…**` — which
// is how most of the corpus's warnings are actually written. The variation
// selector is part of ⚠️ and must be swallowed with it, or it is left behind
// outside the wrapper and renders as a stray box.
const WARNING_TAIL_RE = /(⚠|❗|🚫)\uFE0F?\s*$/u;
// `**2. ⚠️ …**` — a warning in a hand-numbered list carries the ordinal inside
// the bold run, so the glyph does not open it. It is still a warning, and the
// one in rules_primer.md's faceoff-violation list went unmarked for exactly
// that reason.
const WARNING_LEAD_RE = /^\s*(\d+[.)]\s*)?(⚠|❗|🚫)/u;
const VERIFY_RE = /^\s*(verification note|note on|methodology note)/i;
// ⚠️ A trailer paragraph that is NOT matched here is filed as a *source*, which both
// HIDES it inside the collapsed <details> and REORDERS it ahead of the visible notes.
// That buried six documents' ⚠️ safety notes and left `faceoffs.md`'s visible note
// pointing at an "edition note that follows it" which the reorder had moved above it,
// inside the closed box. Leads must therefore be listed here BEFORE they are used in
// content — and the optional warning glyph matters, because these paragraphs open
// `⚠️ **Edition note — …`, where the glyph stops the bold run from starting the line.
const NOTE_START_RE =
  /^\s*(?:[⚠❗🚫]\uFE0F?\s*)?\**\s*(verification note|unverified|could not be verified|rules verified|note on|notes on|methodology note|correction|in-house note|edition note|provenance|•)/iu;
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

let diagrams = null;
function diagramManifest() {
  if (diagrams) return diagrams;
  try {
    diagrams = JSON.parse(
      readFileSync(new URL('../data/diagrams.json', import.meta.url), 'utf8'));
  } catch {
    diagrams = {};
  }
  return diagrams;
}

export default function remarkCorpus(options = {}) {
  const knownIds = new Set(options.knownIds ?? []);

  return function transformer(tree, file) {
    const children = tree.children;

    // ------------------------------------------------------------ diagrams
    //
    // Content writes `![](diagram:<id>)` and nothing else — no alt text. The
    // caption is a teaching sentence carrying the section's hedges, and it is the
    // only thing a listener or a screen-reader user receives, so it is a claim.
    // A claim written in two files eventually disagrees with itself, so it lives
    // once in the diagram's spec and is read from the manifest here.
    //
    // The SVG is inlined rather than linked. That keeps it themable and printable
    // as vector, and it is also the only form the EPUB can take without image
    // manifest entries. Its internal ids are content-hashed by the renderer, so
    // several diagrams on one page do not collide.
    //
    // An unresolved id throws. A diagram that silently renders as nothing is the
    // failure this corpus is least able to see: the page still looks finished.
    visit(tree, 'image', (node, index, parent) => {
      if (!node.url?.startsWith('diagram:') || !parent || index === undefined) return;
      const id = node.url.slice('diagram:'.length);
      const d = diagramManifest()[id];
      if (!d) {
        throw new Error(
          `unknown diagram id "${id}". Run "node scripts/build-diagrams.mjs" — ` +
          `and if it is still unknown, the reference is to a diagram that does not exist.`);
      }
      let svg = '';
      try {
        svg = readFileSync(new URL(`../../public${d.svg}`, import.meta.url), 'utf8');
      } catch {
        throw new Error(`diagram "${id}" is in the manifest but ${d.svg} is missing.`);
      }
      // A caption is written for the document that owns the diagram, and says
      // things like "the section" and "this document" meaning that one. The first
      // time a diagram was referenced from anywhere else, those phrases silently
      // re-pointed at the host — and the figcaption is emitted verbatim, so a
      // listener heard a claim about a method the host document never states.
      // Rather than forbid cross-references (they are how a reader finds the
      // diagram that already exists instead of one being drawn twice), say where
      // the picture comes from whenever it is not at home.
      const here = String(file?.data?.astro?.frontmatter?.__id ?? file?.path ?? '');
      const away = d.owner && here && !here.includes(d.owner.replace(/^content\//, '').replace(/\.md$/, ''));
      // The SVG goes in its own box so a wide diagram can scroll without dragging its
      // caption out of view — the caption is the teaching sentence, and a reader who
      // scrolls the picture must not lose it.
      //
      // The figcaption is aria-hidden because the SVG's <title> already carries the same
      // words: without this a screen reader announces the caption twice, once as the
      // image's name and once as the caption. The <desc> is deliberately kept — it is
      // the only spatial description a non-sighted reader gets, and the obvious fix of
      // hiding the whole SVG would throw it away.
      const kids = [
        wrapper('div', { className: ['diagram-scroll'] }, [{ type: 'html', value: svg }]),
        wrapper('figcaption', { 'aria-hidden': 'true' }, [{ type: 'text', value: d.caption }]),
      ];
      if (away) {
        kids.push(wrapper('p', { className: ['diagram-source'] },
          [{ type: 'text', value: `Diagram from ${d.owner.replace(/^content\/[^/]+\//, '').replace(/\.md$/, '').replace(/_/g, ' ')}` }]));
      }
      // A full-sheet diagram is 204 rink-feet wide against a half sheet's 104, so at
      // the same column width every mark in it renders at half the size — labels land
      // around 5 px on a phone. Scaling the glyphs up to compensate would draw players
      // bigger than players are, so instead the figure is marked and the stylesheet
      // gives it a minimum width and lets it scroll inside its own box. The geometry
      // is the thing this corpus asserts; legibility is the thing CSS can fix.
      const cls = ['diagram'];
      if (d.half === false) cls.push('diagram--full');
      parent.children[index] = wrapper('figure', { className: cls }, kids);
    });

    // ----------------------------------------------------------- key facts
    //
    // ```facts blocks are structure, not code. Left alone they reach Astro's
    // default Shiki highlighter and render as an unreadable dark code block —
    // which is exactly what shipped, in 763 places, because "valid markdown
    // that renders readably" was assumed rather than looked at.
    //
    // Each line is `Label: value`. That is a definition list, so emit one and
    // let CSS do the rest. Anything unparseable is kept verbatim as its own
    // row rather than dropped, because silently losing a fact is worse than
    // showing an ugly one.
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'facts' || !parent || index === undefined) return;

      const rows = [];
      for (const line of node.value.split('\n')) {
        if (!line.trim()) continue;
        const m = /^([A-Z][A-Za-z ]*?):\s+(.+)$/.exec(line);
        rows.push(
          inline('dt', { class: 'facts__label' }, [
            { type: 'text', value: m ? m[1] : '' },
          ]),
        );
        // The value is parsed as inline markdown, not kept as a raw text node.
        // Emitting it verbatim shipped literal asterisks to the reader in five
        // places — one of them inside a match-penalty rule, where `*whether or
        // not an injury occurs*` rendered as punctuation noise. The house style
        // uses emphasis in facts values, so the fix belongs here and not in the
        // content. Anything that fails to parse falls back to the raw text,
        // because losing a fact is worse than showing an ugly one.
        const raw = m ? m[2] : line.trim();
        let valueChildren;
        try {
          const first = fromMarkdown(raw).children[0];
          valueChildren =
            first && first.type === 'paragraph' && first.children.length
              ? first.children
              : [{ type: 'text', value: raw }];
        } catch {
          valueChildren = [{ type: 'text', value: raw }];
        }
        rows.push(inline('dd', { class: 'facts__value' }, valueChildren));
      }
      if (!rows.length) return;

      parent.children[index] = wrapper('dl', { class: 'facts' }, rows);
    });

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
      // Typed by *any* block inside it, not just the first. A callout whose
      // opening line is a neutral note and whose second paragraph warns you
      // about a penalty is a warning — reading only the first child gave the
      // warning a neutral panel, which is the one case where the styling
      // matters most.
      const warns = (node.children ?? []).some((c) => WARNING_RE.test(toText(c)));
      if (WARNING_RE.test(text) || warns) kind = 'warning';
      else if (VERIFY_RE.test(text)) kind = 'verify';
      node.data = {
        ...(node.data || {}),
        hName: 'aside',
        hProperties: { class: `callout callout-${kind}` },
      };
    });

    // ------------------------------------ warnings written as bare paragraphs
    // A warning is load-bearing whichever syntax it arrives in. Some are
    // written as blockquotes and were promoted above; others are written as
    // plain paragraphs opening with ⚠️.
    //
    // This comment used to justify that split by asserting that "a blockquote
    // does not reach the speech layer — md_to_speech.py drops the quoted form,
    // so a penalty warning written as `> ⚠️ …` is never read aloud."
    // THAT IS FALSE against the current script, and was measured false on
    // 2026-08-29: rendering body_contact_and_battles puts §5's blockquote
    // restriction into 025.ssml verbatim ("This section applies only in leagues
    // that permit body checking…"). `render_quote` converts blockquotes; only
    // header blockquotes matching "rule set:" in their first 40 chars are
    // dropped. A future author acting on the old claim would have restructured
    // safety warnings to escape a speech-layer problem that does not exist.
    //
    // The site used to style only the blockquote form. That split the corpus
    // almost exactly in half — a browser pass found 31 warning glyphs inside
    // styled callouts and 31 in unstyled `<p>`, across 16 documents — so the
    // warning telling a reader that kicking is a match penalty rendered as
    // ordinary prose directly above a routine facts block rendered as a
    // coloured panel. Choosing the speech layer should not cost the visual one.
    //
    // This pass reaches every warning that *begins* a block. The ones that do
    // not are handled by the inline pass below, which is where the majority of
    // them turned out to live.
    // Recursive, not just top level: warnings also sit inside list items and
    // inside sections built by the transforms above. Skip any paragraph that is
    // already the child of a callout, or it would be wrapped twice.
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || index === null || node.data?.hName) return;
      if (!WARNING_RE.test(toText(node))) return;
      const parentClass = parent.data?.hProperties?.class ?? '';
      if (typeof parentClass === 'string' && parentClass.includes('callout')) return;
      parent.children[index] = wrapper('aside', { class: 'callout callout-warning' }, [node]);
      return [SKIP, index + 1];
    });

    // ------------------------------------ warnings written mid-sentence
    //
    // The two passes above only reach a warning that *starts* a block. Counted in
    // the built HTML, most do not. Two cache-free builds of the same content
    // state, before and after this pass, found 259 warning glyphs rendered
    // site-wide: 104 of them inside a callout and 155 with no more weight than
    // the prose around them. The unstyled 155 were 81 in paragraphs, 65 in list
    // items, 3 in table cells and 6 in diagram captions. That is a snapshot of
    // one day's corpus, not a fixed figure — it moves whenever a document is
    // written — but the proportion is the point and it is not close.
    //
    // They are written that way because they cannot easily be written any other
    // way: a warning inside a list item cannot be lifted into a blockquote
    // without fragmenting the list, and one qualifying the sentence before it
    // would lose that sentence if it were moved.
    //
    // So the warning is marked where it stands rather than moved. That is a
    // rendering change and nothing else — the count of warnings in content/ does
    // not move, only their weight on the page. The alternative was a content
    // edit across about thirty documents to satisfy the stylesheet, which is
    // the wrong way round.
    //
    // Two shapes are wrapped, and the bold run goes inside the wrapper with the
    // glyph, because the glyph alone is not the warning — the sentence is:
    //
    //   a. `**⚠️ …**`      — a strong run whose own text opens with the glyph.
    //   b. `⚠️ **…**`      — a bare glyph immediately followed by a strong run.
    //
    // Anything already inside a warning-coloured container is left alone.
    // `.callout-warning > p:first-child strong` already colours those, and
    // wrapping them again would draw a second mark inside the first. A warning
    // inside a *note* callout is not skipped: that panel is not warning-coloured,
    // so the glyph in it is as unmarked as one in open prose.
    //
    // What this leaves: on the same build, 12 glyphs stay unmarked. Six are
    // diagram captions, which come from the diagram manifest and not from this
    // markdown at all; one is a table-of-contents entry, which should stay
    // plain; and five are a bare glyph mid-paragraph with no bold run after it
    // (`… not with you. ⚠️ Under **Hockey Canada Rule 6.11(b)(ii)** …`). Marking
    // those would mean guessing where the warning ends, and a wrapper that
    // guesses wrong emphasises the wrong sentence. They are a content-shape
    // question: bolding the warning sentence in the document brings them in.
    const markInlineWarnings = (node, suppressed) => {
      const kids = node.children;
      if (!Array.isArray(kids)) return;
      const raw = node.data?.hProperties?.class ?? '';
      const cls = Array.isArray(raw) ? raw.join(' ') : String(raw);
      const inWarning = suppressed || /callout-warning|is-warning|warn-inline/.test(cls);

      if (!inWarning) {
        // Backwards, so a splice cannot disturb an index not yet visited.
        for (let i = kids.length - 1; i >= 0; i -= 1) {
          if (kids[i].type !== 'strong') continue;
          const strong = kids[i];
          if (WARNING_LEAD_RE.test(toText(strong))) {
            kids[i] = inline('span', { class: 'warn-inline' }, [strong]);
            continue;
          }
          const prev = i > 0 ? kids[i - 1] : null;
          if (prev?.type !== 'text' || !WARNING_TAIL_RE.test(prev.value)) continue;
          const at = prev.value.search(WARNING_TAIL_RE);
          const head = prev.value.slice(0, at);
          const glyph = prev.value.slice(at);
          const marked = inline('span', { class: 'warn-inline' }, [
            { type: 'text', value: glyph },
            strong,
          ]);
          kids.splice(i - 1, 2, ...(head ? [{ type: 'text', value: head }, marked] : [marked]));
        }
      }

      for (const child of node.children) markInlineWarnings(child, inWarning);
    };
    markInlineWarnings(tree, false);

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
