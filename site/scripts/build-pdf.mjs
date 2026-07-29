#!/usr/bin/env node
/**
 * Phase 7 — PDF, printed by headless Chrome over the site's own print CSS.
 *
 * Why Chrome and not Paged.js or WeasyPrint
 * -----------------------------------------
 * Both of those are real answers and both add surface: Paged.js wants
 * puppeteer and a ~150 MB Chromium download, WeasyPrint wants a Python
 * toolchain plus cairo and pango system packages. Chrome is already on every
 * developer machine here and preinstalled on ubuntu-latest runners, and
 * `--print-to-pdf` renders the *same* stylesheet a reader gets from Cmd-P. One
 * print path, not two.
 *
 * Fail-soft, deliberately
 * -----------------------
 * If no Chrome binary is found this logs and exits 0. A missing PDF is a
 * missing nice-to-have; a failed build stops the site deploying, and the
 * corpus correcting itself matters more than the PDFs. Set PDF_REQUIRED=1 to
 * make it a hard failure instead — the CI job that cares can opt in.
 *
 * Print bundles come from build-downloads.mjs, which already extracts and
 * link-rewrites the rendered articles. This script only drives the printer.
 */

import { existsSync, readdirSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const DIST = join(HERE, '..', 'dist');
const PRINT_DIR = join(HERE, '..', '.print');
const OUT_DIR = join(DIST, 'downloads');

const CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/snap/bin/chromium',
].filter(Boolean);

function findChrome() {
  for (const p of CANDIDATES) if (existsSync(p)) return p;
  try {
    return execFileSync('which', ['google-chrome'], { encoding: 'utf8' }).trim() || null;
  } catch {
    return null;
  }
}

const human = (b) =>
  b < 1024 * 1024 ? `${(b / 1024).toFixed(0)} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`;

function main() {
  const required = process.env.PDF_REQUIRED === '1';

  if (!existsSync(PRINT_DIR)) {
    console.log('build-pdf: no print bundles — run build:downloads first. Skipping.');
    process.exit(required ? 1 : 0);
  }

  const chrome = findChrome();
  if (!chrome) {
    const msg =
      'build-pdf: no Chrome or Chromium found — skipping PDF generation.\n' +
      '           Set CHROME_PATH to build them, or PDF_REQUIRED=1 to make this fatal.';
    console.log(msg);
    process.exit(required ? 1 : 0);
  }

  const pages = readdirSync(PRINT_DIR).filter((f) => f.endsWith('.html')).sort();
  if (!pages.length) {
    console.log('build-pdf: print directory is empty. Skipping.');
    process.exit(required ? 1 : 0);
  }

  let built = 0;
  let bytes = 0;
  const failures = [];

  for (const page of pages) {
    const name = basename(page, '.html');
    const out = join(OUT_DIR, `${name}.pdf`);
    try {
      execFileSync(
        chrome,
        [
          '--headless=new',
          '--disable-gpu',
          '--no-sandbox',                 // required on CI runners
          '--no-pdf-header-footer',       // the corpus supplies its own furniture
          '--run-all-compositor-stages-before-draw',
          '--virtual-time-budget=20000',  // let fonts and layout settle
          `--print-to-pdf=${out}`,
          `file://${join(PRINT_DIR, page)}`,
        ],
        { stdio: 'pipe', timeout: 180000 }
      );
      if (!existsSync(out)) throw new Error('chrome exited cleanly but wrote no file');
      built++;
      bytes += statSync(out).size;
    } catch (err) {
      failures.push(`${name}: ${String(err.message).split('\n')[0]}`);
    }
  }

  if (failures.length) {
    console.log(`build-pdf: ${failures.length} of ${pages.length} failed:`);
    for (const f of failures) console.log(`           ${f}`);
    if (required) process.exit(1);
  }

  console.log(
    `build-pdf: ${built}/${pages.length} PDF (${human(bytes)}) via ${basename(chrome)}`
  );
}

main();
