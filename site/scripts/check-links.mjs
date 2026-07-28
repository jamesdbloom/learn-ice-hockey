#!/usr/bin/env node
/**
 * check-links — internal link integrity for the built site.
 *
 * The corpus contains well over a thousand relative markdown cross-links
 * (`faceoffs.md`, `positions/center.md`, `../faceoffs.md`) plus deep links to
 * headings. All of them resolve on disk; the whole point of this check is to
 * prove they still resolve as URLs after rendering.
 *
 * It runs against dist/ rather than against the markdown, so it validates the
 * end result: the rewriting, the routing, the anchors and the navigation, all
 * at once. Anything broken exits non-zero and fails the build.
 *
 * Checked:
 *   - every internal href resolves to an emitted page or asset
 *   - every fragment (#anchor) exists as an id on the target page
 *   - every <img src> and <link href>/<script src> asset exists
 *   - no leftover `.md` links
 *
 * Not checked: external http(s) URLs. Those rot too, but they need the network
 * and belong in a scheduled job, not in the build (build spec §5.4).
 */

import { readdir, readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { parse } from 'node-html-parser';

const distArg = process.argv[2] ?? 'dist';
const DIST = path.resolve(process.cwd(), distArg);

if (!existsSync(DIST)) {
  console.error(`check-links: no build output at ${DIST}. Run "astro build" first.`);
  process.exit(1);
}

/** All files under dist, as paths relative to dist with forward slashes. */
async function walk(dir, base = dir, out = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, base, out);
    else out.push(path.relative(base, full).split(path.sep).join('/'));
  }
  return out;
}

const files = await walk(DIST);
const fileSet = new Set(files);
const htmlFiles = files.filter((f) => f.endsWith('.html'));

/** Map "/faceoffs/" -> "faceoffs/index.html" for every emitted page. */
function urlPathToFile(urlPath) {
  const clean = decodeURIComponent(urlPath).replace(/^\/+/, '');
  const candidates = clean === '' ? ['index.html'] : [];
  if (clean !== '') {
    candidates.push(clean);
    candidates.push(clean.endsWith('/') ? `${clean}index.html` : `${clean}/index.html`);
    candidates.push(`${clean.replace(/\/$/, '')}.html`);
  }
  for (const c of candidates) {
    if (fileSet.has(c) && statSync(path.join(DIST, c)).isFile()) return c;
  }
  return null;
}

/** id attributes present on a given emitted HTML file. */
const idCache = new Map();
async function idsFor(file) {
  if (idCache.has(file)) return idCache.get(file);
  const html = await readFile(path.join(DIST, file), 'utf8');
  const root = parse(html);
  const ids = new Set();
  for (const el of root.querySelectorAll('[id]')) ids.add(el.getAttribute('id'));
  for (const el of root.querySelectorAll('a[name]')) ids.add(el.getAttribute('name'));
  idCache.set(file, ids);
  return ids;
}

const problems = [];
let linkCount = 0;
let anchorCount = 0;
let assetCount = 0;
let externalCount = 0;
/** Links inside the rendered corpus body — the cross-links written in the markdown. */
let corpusLinkCount = 0;
let corpusAnchorCount = 0;

const isExternal = (href) => /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(href) || /^(mailto|tel):/i.test(href);

for (const file of htmlFiles) {
  const html = await readFile(path.join(DIST, file), 'utf8');
  const root = parse(html);
  const selfIds = await idsFor(file);
  const pageUrl = `/${file.replace(/index\.html$/, '')}`;

  const report = (href, message) => {
    problems.push(`${pageUrl}  →  ${href}\n      ${message}`);
  };

  // ------------------------------------------------------------- <a href>
  const corpusAnchors = new Set(root.querySelectorAll('.prose a[href], .doc-header a[href]'));

  for (const anchor of root.querySelectorAll('a[href]')) {
    const href = anchor.getAttribute('href');
    if (!href) continue;

    if (isExternal(href)) {
      externalCount += 1;
      continue;
    }

    linkCount += 1;
    const fromCorpus = corpusAnchors.has(anchor);
    if (fromCorpus) {
      corpusLinkCount += 1;
      if (href.includes('#')) corpusAnchorCount += 1;
    }

    if (/\.md(?:[#?]|$)/i.test(href)) {
      report(href, 'unrewritten markdown link — this would 404 on the live site');
      continue;
    }

    // Same-page fragment.
    if (href.startsWith('#')) {
      anchorCount += 1;
      const id = decodeURIComponent(href.slice(1));
      if (id && !selfIds.has(id)) report(href, `no element with id="${id}" on this page`);
      continue;
    }

    const [target, fragment] = href.split('#');
    const resolvedPath = target.startsWith('/')
      ? target
      : `/${path.posix.normalize(path.posix.join(path.posix.dirname(pageUrl), target))}`;

    const targetFile = urlPathToFile(resolvedPath.split('?')[0]);
    if (!targetFile) {
      report(href, `resolves to ${resolvedPath}, which is not in the build output`);
      continue;
    }

    if (fragment) {
      anchorCount += 1;
      const ids = await idsFor(targetFile);
      if (!ids.has(decodeURIComponent(fragment))) {
        report(href, `${resolvedPath} exists but has no element with id="${fragment}"`);
      }
    }
  }

  // --------------------------------------------------------------- assets
  const assetSelectors = [
    ['img[src]', 'src'],
    ['script[src]', 'src'],
    ['link[href]', 'href'],
    ['source[src]', 'src'],
    ['audio[src]', 'src'],
  ];
  for (const [selector, attr] of assetSelectors) {
    for (const el of root.querySelectorAll(selector)) {
      const value = el.getAttribute(attr);
      if (!value || isExternal(value) || value.startsWith('data:')) continue;
      if (el.tagName === 'LINK') {
        const rel = (el.getAttribute('rel') || '').toLowerCase();
        // canonical/alternate point at pages on other origins or at routes.
        if (rel.includes('canonical') || rel.includes('alternate')) continue;
      }
      assetCount += 1;
      const resolved = value.startsWith('/')
        ? value
        : `/${path.posix.normalize(path.posix.join(path.posix.dirname(pageUrl), value))}`;
      if (!urlPathToFile(resolved.split('#')[0].split('?')[0])) {
        report(value, `asset not found in the build output (${resolved})`);
      }
    }
  }
}

const summary =
  `check-links: ${htmlFiles.length} pages · ` +
  `${linkCount} internal links checked (${anchorCount} with anchors), of which ` +
  `${corpusLinkCount} are corpus cross-links from the markdown (${corpusAnchorCount} with anchors) · ` +
  `${assetCount} assets · ${externalCount} external links skipped`;

if (problems.length) {
  console.error(`\n${summary}`);
  console.error(`\n${problems.length} broken internal link(s):\n`);
  for (const p of problems) console.error(`  ✗ ${p}\n`);
  process.exit(1);
}

console.log(`${summary} — all internal links and anchors resolve.`);
