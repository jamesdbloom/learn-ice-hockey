#!/usr/bin/env node
/**
 * Extracts per-document metadata from the corpus in ../content and writes
 * src/data/docs-meta.json.
 *
 * The corpus has no frontmatter — every document is plain markdown that opens
 * with an H1, a `> **Rule set:** / **Related:**` blockquote and an `## Overview`.
 * This script reads those conventions so the site can build titles, meta
 * descriptions, Open Graph tags and navigation without touching content/.
 *
 * It is deliberately strict: if a document does not follow the corpus
 * conventions, or if a file is missing from src/data/structure.json, the
 * script exits non-zero and the build stops.
 */

import { readFile, readdir, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(HERE, '..');
const CONTENT_ROOT = path.resolve(SITE_ROOT, '..', 'content');
const OUT_FILE = path.join(SITE_ROOT, 'src', 'data', 'docs-meta.json');
const STRUCTURE_FILE = path.join(SITE_ROOT, 'src', 'data', 'structure.json');

const MAX_DESCRIPTION = 185;

const errors = [];
const warnings = [];

/** Recursively collect markdown files under content/. */
async function collectMarkdown(dir, base = dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...(await collectMarkdown(full, base)));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      out.push(path.relative(base, full));
    }
  }
  return out.sort();
}

/** Strip inline markdown down to readable plain text. */
function toPlainText(md) {
  return md
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*\*([^*]+)\*\*\*/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(?<!\*)\*(?!\s)([^*]+?)\*/g, '$1')
    .replace(/[⚠️✅❌→←]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Trim to a sentence or word boundary under `max` characters. */
function truncate(text, max = MAX_DESCRIPTION) {
  if (text.length <= max) return text;
  const window = text.slice(0, max + 1);
  const sentenceEnd = Math.max(
    window.lastIndexOf('. '),
    window.lastIndexOf('? '),
    window.lastIndexOf('! '),
  );
  if (sentenceEnd > max * 0.5) return window.slice(0, sentenceEnd + 1).trim();
  const space = window.lastIndexOf(' ');
  return `${window.slice(0, space > 0 ? space : max).trim()}…`;
}

/** Group a markdown source into blank-line-separated blocks, ignoring tables. */
function blocks(source) {
  return source
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);
}

function extract(id, source) {
  const lines = source.split('\n');

  // --- Title: the single H1 on the first line -----------------------------
  const h1 = lines.find((l) => /^#\s+\S/.test(l));
  if (!h1) errors.push(`${id}: no H1 heading found`);
  const title = h1 ? h1.replace(/^#\s+/, '').trim() : id;

  // --- Header blockquote --------------------------------------------------
  const headerBlock = blocks(source).find((b) => /^>\s*\*\*Rule set:\*\*/.test(b));
  if (!headerBlock) errors.push(`${id}: no "> **Rule set:**" header blockquote`);
  const headerText = headerBlock
    ? headerBlock
        .split('\n')
        .map((l) => l.replace(/^>\s?/, ''))
        .join('\n')
    : '';

  const relatedLine = headerText
    .split(/\n\s*\n/)
    .find((p) => /^\*\*Related:\*\*/.test(p.trim()));
  const related = [];
  if (relatedLine) {
    const re = /\[([^\]]+)\]\(([^)]+)\)/g;
    let m;
    while ((m = re.exec(relatedLine)) !== null) {
      related.push({ text: m[1], href: m[2] });
    }
  } else {
    warnings.push(`${id}: header blockquote has no "**Related:**" line`);
  }

  // --- Description: first paragraph of the Overview -----------------------
  const overviewIdx = lines.findIndex((l) => /^##\s+Overview\s*$/i.test(l));
  let description = '';
  if (overviewIdx === -1) {
    warnings.push(`${id}: no "## Overview" section — falling back to first paragraph`);
  }
  const after = lines.slice(overviewIdx === -1 ? 1 : overviewIdx + 1);
  //
  // The ``` exclusion is load-bearing. Every teaching section now opens with a
  // ```facts block, so on most documents the first block after `## Overview` is
  // that fence — and without this the extractor took it as the description,
  // putting "``facts Key: You are the engine of your line…" into the card
  // tiles, the meta description and the Open Graph tags.
  //
  const paragraph = blocks(after.join('\n')).find(
    (b) =>
      !b.startsWith('#') &&
      !b.startsWith('>') &&
      !b.startsWith('|') &&
      !b.startsWith('---') &&
      !b.startsWith('```'),
  );
  if (paragraph) description = truncate(toPlainText(paragraph));
  if (!description) errors.push(`${id}: could not derive a description`);

  // --- Structural sanity checks on the document footer --------------------
  const all = blocks(source);
  const sourcesIdx = all.findIndex((b) => /^\*Sources\s*[—-]/.test(b));
  if (sourcesIdx === -1) warnings.push(`${id}: no "*Sources — retrieved …*" footer paragraph`);

  const hasCommonMistakes = /^##\s+Common Mistakes\s*$/im.test(source);
  const hasKeyTakeaways = /^##\s+Key Takeaways\s*$/im.test(source);
  if (!hasCommonMistakes) warnings.push(`${id}: no "## Common Mistakes" section`);
  if (!hasKeyTakeaways) warnings.push(`${id}: no "## Key Takeaways" section`);

  // Mirror the footer split performed by src/plugins/remark-corpus.mjs, and
  // warn if it would file a citation under "verification notes" or leave a
  // document with no citations at all.
  if (sourcesIdx !== -1) {
    const NOTE_START =
      /^\s*\**\s*(verification note|unverified|could not be verified|rules verified|note on|methodology note|correction|•)/i;
    const CITATION = /^\*[^*:]{1,70}:\s*\[/;
    let inNote = false;
    let citations = 0;
    let misfiled = 0;
    for (const block of all.slice(sourcesIdx + 1)) {
      if (NOTE_START.test(block)) inNote = true;
      else if (inNote && (block.startsWith('- ') || /^\s*\**\s*•/.test(block))) {
        /* continuation of the note */
      } else inNote = false;

      if (CITATION.test(block)) {
        if (inNote) misfiled += 1;
        else citations += 1;
      }
    }
    if (misfiled) {
      warnings.push(
        `${id}: ${misfiled} citation paragraph(s) will render inside the verification notes ` +
          `block rather than under Sources`,
      );
    }
    if (!citations) warnings.push(`${id}: no citation paragraphs found under Sources`);
  }

  return { id, title, description, related };
}

async function main() {
  if (!existsSync(CONTENT_ROOT)) {
    console.error(`extract-meta: content directory not found at ${CONTENT_ROOT}`);
    process.exit(1);
  }

  const files = await collectMarkdown(CONTENT_ROOT);
  const docs = {};

  for (const rel of files) {
    const id = rel.replace(/\.md$/, '').split(path.sep).join('/');
    const source = await readFile(path.join(CONTENT_ROOT, rel), 'utf8');
    docs[id] = extract(id, source);
  }

  // --- Cross-check against the declared reading order ---------------------
  const structure = JSON.parse(await readFile(STRUCTURE_FILE, 'utf8'));
  const declared = structure.layers.flatMap((l) => l.docs);
  const seen = new Set();
  for (const id of declared) {
    if (seen.has(id)) errors.push(`structure.json: "${id}" is listed more than once`);
    seen.add(id);
    if (!docs[id]) errors.push(`structure.json: "${id}" has no matching file in content/`);
  }
  for (const id of Object.keys(docs)) {
    if (!seen.has(id)) {
      errors.push(`content/${id}.md is not listed in src/data/structure.json — add it to a layer`);
    }
  }

  for (const w of warnings) console.warn(`  warn  ${w}`);
  if (errors.length) {
    for (const e of errors) console.error(`  ERROR ${e}`);
    console.error(`\nextract-meta: ${errors.length} error(s). Aborting.`);
    process.exit(1);
  }

  await mkdir(path.dirname(OUT_FILE), { recursive: true });
  await writeFile(
    OUT_FILE,
    `${JSON.stringify(
      {
        generated: 'by scripts/extract-meta.mjs — do not edit',
        count: Object.keys(docs).length,
        docs,
      },
      null,
      2,
    )}\n`,
  );

  console.log(
    `extract-meta: ${Object.keys(docs).length} documents, ${warnings.length} warning(s) → src/data/docs-meta.json`,
  );
}

await main();
