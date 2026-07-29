#!/usr/bin/env node
/**
 * Phase 7 — generate the downloadable forms of the corpus into dist/downloads/.
 *
 * Runs inside `npm run build`, after Astro has rendered the site, so every push
 * to main regenerates these and the deploy syncs them. There is no separate
 * "publish the downloads" step and there must not be one: a download that is
 * regenerated on a different cadence from the site is a download that silently
 * goes stale, and this corpus corrects itself often.
 *
 * What it emits
 * -------------
 *   downloads/markdown/<id>.md          per-document source
 *   downloads/<layer>.epub              one per layer
 *   downloads/learn-ice-hockey.epub     the whole corpus
 *   downloads/manifest.json             what exists, with sizes — the /downloads page reads this
 *
 * Where the content comes from
 * ----------------------------
 * EPUB chapters are extracted from the **rendered HTML in dist/**, not
 * re-rendered from markdown. Build spec §10.3: "the site already renders HTML.
 * Prefer that over a second markdown pipeline." The corpus's facts blocks and
 * rule-set callouts come from two custom plugins; a parallel renderer would
 * drift from them without anyone noticing.
 *
 * Cross-links
 * -----------
 * §10.3 is explicit that internal links must become internal anchors, "not dead
 * links to a website the reader cannot reach — a reader who downloaded this is
 * by definition offline". Links to documents inside the same EPUB are rewritten
 * to chapter files; links to documents outside it are rewritten to absolute
 * https:// URLs, which is the honest fallback.
 *
 * Determinism
 * -----------
 * Zip entries carry a fixed mtime, so an unchanged corpus produces byte-identical
 * archives. Without that, every build would upload every EPUB and invalidate it.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';
import { buildEpub } from './lib/epub.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE = join(HERE, '..');
const ROOT = join(SITE, '..');
const DIST = join(SITE, 'dist');
const OUT = join(DIST, 'downloads');
const SITE_URL = 'https://learn-ice-hockey.com';

// Fixed so archives are reproducible. Not "now".
const MTIME = new Date('2026-01-01T00:00:00Z');
const MODIFIED = '2026-01-01T00:00:00Z';

const structure = JSON.parse(readFileSync(join(SITE, 'src/data/structure.json'), 'utf8'));
const meta = JSON.parse(readFileSync(join(SITE, 'src/data/docs-meta.json'), 'utf8'));

const slugOf = (id) => `${id}/`; // content id is already section/name
const chapterFileOf = (id) => `${id.replace(/\//g, '__')}.xhtml`;

/** Pull the <article> out of a rendered page and make it XHTML-safe. */
function extractArticle(id) {
  const htmlPath = join(DIST, id, 'index.html');
  if (!existsSync(htmlPath)) return null;
  const root = parse(readFileSync(htmlPath, 'utf8'));
  const article = root.querySelector('article');
  if (!article) return null;

  // Drop things that only make sense on the web.
  for (const sel of ['script', 'noscript', '.no-print', '[data-download-only]']) {
    article.querySelectorAll(sel).forEach((n) => n.remove());
  }
  return article;
}

/**
 * Rewrite internal hrefs. `inBundle` is the set of doc ids present in this EPUB.
 */
function rewriteLinks(article, inBundle) {
  for (const a of article.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    if (!href || !href.startsWith('/')) continue;

    const [path, frag] = href.split('#');
    const id = path.replace(/^\/|\/$/g, '');

    if (inBundle.has(id)) {
      a.setAttribute('href', chapterFileOf(id) + (frag ? `#${frag}` : ''));
    } else if (path === '/' || path === '') {
      a.setAttribute('href', SITE_URL + '/');
    } else {
      // Outside this bundle — an absolute URL is honest; a relative one would 404.
      a.setAttribute('href', SITE_URL + href);
    }
  }
}

/**
 * HTML allows valueless attributes — `<article data-pagefind-body>`,
 * `<details open>` — and XML does not. Rewrite them through the parser rather
 * than by regex over the serialised string: the first attempt at this patched
 * the text and produced 36 of 37 chapters that no strict EPUB reader would
 * open, because `data-pagefind-body` is on every single page.
 */
function normaliseAttributes(article) {
  const walk = (node) => {
    if (node.nodeType === 1) {
      const attrs = node.attributes ?? {};
      for (const [name, value] of Object.entries(attrs)) {
        if (value === null || value === undefined) node.setAttribute(name, '');
      }
      // Re-serialise every attribute with an explicit quoted value.
      node.rawAttrs = Object.entries(attrs)
        .map(([n, v]) => `${n}="${String(v ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;')}"`)
        .join(' ');
    }
    for (const child of node.childNodes ?? []) walk(child);
  };
  walk(article);
}

/** Void elements must be self-closed, and bare ampersands escaped. */
function toXhtml(html) {
  return html
    .replace(/<(br|hr|img|meta|link|source|col|wbr)((?:[^>"']|"[^"]*"|'[^']*')*?)\s*\/?>/gi,
             (_, tag, attrs) => `<${tag}${attrs.replace(/\s+$/, '')}/>`)
    .replace(/&nbsp;/g, '&#160;')
    .replace(/&(?!(?:[a-zA-Z][a-zA-Z0-9]*|#[0-9]+|#x[0-9a-fA-F]+);)/g, '&amp;');
}

function chapterFor(id, inBundle) {
  const article = extractArticle(id);
  if (!article) return null;
  rewriteLinks(article, inBundle);
  normaliseAttributes(article);
  const title = meta.docs?.[id]?.title ?? id;
  return { file: chapterFileOf(id), title, body: toXhtml(article.toString()) };
}

function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function main() {
  if (!existsSync(DIST)) {
    console.error('build-downloads: dist/ not found — run after `astro build`.');
    process.exit(2);
  }
  mkdirSync(join(OUT, 'markdown'), { recursive: true });

  const allIds = structure.layers.flatMap((l) => l.docs);
  const manifest = { generated: MODIFIED, markdown: [], epub: [] };

  // ---- per-document markdown ------------------------------------------------
  for (const id of allIds) {
    const src = join(ROOT, 'content', `${id}.md`);
    if (!existsSync(src)) {
      console.error(`build-downloads: missing source ${src}`);
      process.exit(1);
    }
    const body = readFileSync(src, 'utf8');
    const header =
      `<!-- ${meta.docs?.[id]?.title ?? id}\n` +
      `     From the Learn Ice Hockey corpus — ${SITE_URL}/${id}/\n` +
      `     CC BY-NC 4.0. Not affiliated with the NHL, IIHF, USA Hockey or Hockey Canada. -->\n\n`;
    const name = `${id.replace(/\//g, '__')}.md`;
    writeFileSync(join(OUT, 'markdown', name), header + body);
    manifest.markdown.push({ id, file: `markdown/${name}`, bytes: Buffer.byteLength(header + body) });
  }

  // ---- one EPUB per layer ---------------------------------------------------
  let built = 0;
  for (const layer of structure.layers) {
    const inBundle = new Set(layer.docs);
    const chapters = layer.docs.map((id) => chapterFor(id, inBundle)).filter(Boolean);
    if (chapters.length !== layer.docs.length) {
      console.error(`build-downloads: could not extract every chapter for layer ${layer.id}`);
      process.exit(1);
    }
    const buf = buildEpub({
      title: `Learn Ice Hockey — ${layer.title}`,
      subtitle: layer.blurb,
      identifier: `urn:learn-ice-hockey:layer:${layer.id}`,
      modified: MODIFIED,
      mtime: MTIME,
      chapters,
    });
    const file = `${layer.id}.epub`;
    writeFileSync(join(OUT, file), buf);
    manifest.epub.push({ id: layer.id, title: layer.title, file, bytes: buf.length,
                         size: humanSize(buf.length), docs: layer.docs.length });
    built++;
  }

  // ---- the whole corpus -----------------------------------------------------
  {
    const inBundle = new Set(allIds);
    const chapters = allIds.map((id) => chapterFor(id, inBundle)).filter(Boolean);
    const buf = buildEpub({
      title: 'Learn Ice Hockey — the complete corpus',
      subtitle: 'Everything, in corpus reading order.',
      identifier: 'urn:learn-ice-hockey:complete',
      modified: MODIFIED,
      mtime: MTIME,
      chapters,
    });
    writeFileSync(join(OUT, 'learn-ice-hockey.epub'), buf);
    manifest.epub.unshift({ id: 'complete', title: 'The complete corpus',
      file: 'learn-ice-hockey.epub', bytes: buf.length, size: humanSize(buf.length),
      docs: chapters.length });
    built++;
  }

  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));

  const total = manifest.epub.reduce((n, e) => n + e.bytes, 0);
  console.log(
    `build-downloads: ${manifest.markdown.length} markdown, ${built} EPUB ` +
    `(${humanSize(total)} total) -> dist/downloads/`
  );
}

main();
