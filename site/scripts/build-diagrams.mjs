/**
 * Render every diagram in the registry to SVG and PNG, and emit the manifest.
 *
 * WHY A MANIFEST. A diagram has a caption, and the caption is the only thing a
 * listener or a screen-reader user gets — so it teaches, and it carries the
 * section's hedges. That makes it a claim, and a claim that appears in more than
 * one file is a claim that will eventually disagree with itself. So the caption is
 * written once, in the diagram's spec, and everything else reads it from here:
 *
 *   the site        remark expands ![](diagram:<id>) using this manifest
 *   the EPUB        inlines the same SVG and the same caption
 *   the speech pass  md_to_speech.py resolves diagram:<id> to the caption text
 *
 * Content markdown therefore carries the *id and nothing else*. There is no alt
 * text to fall out of step with the picture, because there is no second copy.
 *
 * WHY BOTH SVG AND PNG. The site and the PDF take the SVG — the PDF is printed by
 * headless Chrome from the same HTML, so it stays vector. The EPUB takes the SVG
 * inline, with the PNG packaged as a fallback for readers whose SVG support is
 * poor or absent (Kindle conversions being the known case). The PNG is rendered
 * from the SVG rather than drawn separately, so the two cannot diverge.
 *
 * Usage:  node scripts/build-diagrams.mjs [--no-png]
 */

import { writeFileSync, mkdirSync, rmSync, existsSync, statSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DIAGRAMS } from '../src/diagrams/index.mjs';
import { playSvg, rinkSvg, legendSvg } from './lib/rink.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(HERE, '..', 'public', 'diagrams');
const MANIFEST = join(HERE, '..', 'src', 'data', 'diagrams.json');

// ⚠️ RACE GUARD. The diagram modules are read at IMPORT time, above, and the
// manifest is written ~6 minutes later. So a module edited DURING the build is
// baked in at its pre-edit state, and its mtime ends up EARLIER than the
// manifest's -- which means `check_absolutes.py`'s staleness check cannot see
// it either. Only the build knows.
//
// This bit twice in round 58. Two agents each rebuilt while others were still
// writing captions; one published 14 caption changes it had not authored, the
// other three. Both reported it unprompted, which is the only reason it is
// known. A third build ABORTED on a SyntaxError mid-write -- and aborting is
// the SAFER outcome, because completing absorbs the race silently.
const SRC_DIR = join(HERE, '..', 'src', 'diagrams');
const mtimesAtImport = Object.fromEntries(
  readdirSync(SRC_DIR).filter((f) => f.endsWith('.mjs'))
    .map((f) => [f, statSync(join(SRC_DIR, f)).mtimeMs]),
);

function warnIfSourcesMovedDuringBuild() {
  const moved = Object.entries(mtimesAtImport)
    .filter(([f, m]) => {
      try { return statSync(join(SRC_DIR, f)).mtimeMs !== m; } catch { return true; }
    })
    .map(([f]) => f);
  if (!moved.length) return false;
  console.error(
    `\nbuild-diagrams: ⚠️  ${moved.length} SOURCE MODULE(S) CHANGED WHILE THIS BUILD RAN:\n` +
    `    ${moved.join(', ')}\n` +
    `    Their captions were read BEFORE those edits, so the manifest just written\n` +
    `    does NOT contain them -- and their mtimes are now older than the manifest,\n` +
    `    so check_absolutes.py's staleness guard will NOT catch it either.\n` +
    `    ⚠️  REBUILD once nobody is writing to site/src/diagrams/.`,
  );
  return true;
}
// No per-diagram footer. It repeated on all 112 figures and, being SVG text
// rather than a link, pointed at a section the reader could not click through to.
// The notation is its own navigable section instead.
const FOOTER = null;

// Same discovery order as build-pdf.mjs. PNGs are a fallback artefact, so a
// missing Chrome is a warning rather than a build failure — but it is a *loud*
// warning, because an EPUB built without them silently loses its fallback.
function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
  ].filter(Boolean);
  return candidates.find((c) => existsSync(c)) ?? null;
}

function rasterise(chrome, svgPath, pngPath, width, height) {
  // Wrap the SVG in a bare document at exactly its own size, so the PNG has no
  // margin and no scrollbar. Rendered at 2x for print and high-DPI screens.
  const html = join(OUT_DIR, '.raster.html');
  writeFileSync(
    html,
    `<html><body style="margin:0;background:#fff">` +
      `<img src="${svgPath.split('/').pop()}" width="${width}" height="${height}"></body></html>`
  );
  execFileSync(chrome, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=2',
    `--screenshot=${pngPath}`,
    `--window-size=${width},${height}`,
    `file://${html}`,
  ], { stdio: 'ignore' });
  rmSync(html, { force: true });
  // Chrome tags files it writes on macOS. Left in place, the quarantine flag makes
  // the artefact unopenable for the person who asked for it.
  try { execFileSync('xattr', ['-d', 'com.apple.quarantine', pngPath], { stdio: 'ignore' }); } catch { /* not macOS */ }
}

function main() {
  const noPng = process.argv.includes('--no-png');
  mkdirSync(OUT_DIR, { recursive: true });
  const chrome = noPng ? null : findChrome();
  if (!noPng && !chrome) {
    console.warn('build-diagrams: no Chrome found — SVGs only, EPUB will have no raster fallback.\n' +
                 '                Set CHROME_PATH to build them.');
  }

  const seen = new Set();
  const manifest = {};
  for (const d of DIAGRAMS) {
    if (seen.has(d.id)) throw new Error(`duplicate diagram id: ${d.id}`);
    seen.add(d.id);
    if (!d.caption) throw new Error(`${d.id}: no caption. The caption is what a listener gets; it is not optional.`);
    if (!d.owner) throw new Error(`${d.id}: no owner. Name the content document whose prose this diagram must agree with.`);

    const width = d.width ?? 900;
    const spec = { ...d, footer: FOOTER };
    const svg =
      d.kind === 'legend' ? legendSvg(width)
      // caption/describe are passed for the same reason playSvg carries them: the
      // site hides the <figcaption> from assistive technology on the assumption the
      // SVG's <title> repeats it. Omitting them here did not degrade the name, it
      // removed it — the two rink maps rendered as unlabelled graphics.
      : d.kind === 'rink' ? rinkSvg({ half: d.half ?? false, labels: d.labels ?? false, width, ns: d.id, footer: FOOTER,
                                      caption: d.caption, describe: d.describe })
      : playSvg(spec, { half: d.half ?? true, width });

    const svgPath = join(OUT_DIR, `${d.id}.svg`);
    writeFileSync(svgPath, svg);

    const h = Number(/height="(\d+)"/.exec(svg)?.[1] ?? Math.round(width * 0.9));
    if (chrome) rasterise(chrome, svgPath, join(OUT_DIR, `${d.id}.png`), width, h);

    manifest[d.id] = {
      id: d.id,
      owner: d.owner,
      caption: d.caption,
      describe: d.describe ?? null,
      // The legend is authored in px against a 640 viewBox rather than in rink feet,
      // so it renders SMALLER as the column narrows while every other diagram renders
      // larger. It is the key that decodes all the others, so it must never be the
      // least readable thing on the page: mark it wide and let it hold its own width.
      half: d.kind === 'legend' ? false : (d.half ?? (d.kind === 'rink' ? false : true)),
      svg: `/diagrams/${d.id}.svg`,
      png: chrome ? `/diagrams/${d.id}.png` : null,
      width, height: h,
    };
  }

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`build-diagrams: ${Object.keys(manifest).length} diagram(s)` +
              `${chrome ? ' with PNG fallbacks' : ' (SVG only)'} -> public/diagrams/`);
  // Warn AFTER writing, not before: a partial public/diagrams/ is worse than a
  // manifest that is one edit behind, and the operator needs both facts.
  warnIfSourcesMovedDuringBuild();
}

main();
