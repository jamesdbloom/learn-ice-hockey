/**
 * Render one diagrams module to SVG + PNG so a human (or an agent) can look at it.
 *
 * `diagram-reviewer`'s first non-negotiable is "never approve a diagram you have
 * not seen rendered" — and the same applies to writing one. Every defect that has
 * survived to this point in this project was invisible in the source and obvious
 * in the picture: a forechecker's arrow pointing at an opponent, three forwards at
 * the same depth in a formation defined by depth, a label written through another
 * label, an arrowhead rotated off its own line.
 *
 * This is a preview tool, not the build. It writes outside the repo and touches no
 * manifest, so several can run at once without racing each other.
 *
 *   node scripts/preview-diagrams.mjs src/diagrams/breakouts.mjs /some/out/dir
 */

import { writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

import { playSvg, rinkSvg, legendSvg } from './lib/rink.mjs';

const FOOTER = null;

const [modPath, outDir] = process.argv.slice(2);
if (!modPath || !outDir) {
  console.error('usage: node scripts/preview-diagrams.mjs <diagrams-module> <out-dir>');
  process.exit(2);
}

const chrome = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome-stable', '/usr/bin/google-chrome', '/usr/bin/chromium',
].filter(Boolean).find((c) => existsSync(c));

const specs = (await import(pathToFileURL(resolve(modPath)).href)).default;
mkdirSync(outDir, { recursive: true });

for (const d of specs) {
  const width = d.width ?? 900;
  // The same three-way branch build-diagrams.mjs uses, and it must stay the same
  // three. Without the `legend` arm the notation key — the one diagram that defines
  // every symbol every other diagram uses — fell through to playSvg and previewed as
  // an empty half-sheet, so a reviewer could tick "rendered and viewed" on a blank
  // rink. A preview tool that silently draws nothing is worse than one that crashes.
  const svg =
    d.kind === 'legend' ? legendSvg(width)
    : d.kind === 'rink' ? rinkSvg({ half: d.half ?? false, labels: d.labels ?? false, width, ns: d.id, footer: FOOTER })
    : playSvg({ ...d, footer: FOOTER }, { half: d.half ?? true, width });
  const svgPath = join(outDir, `${d.id}.svg`);
  writeFileSync(svgPath, svg);

  if (chrome) {
    const h = Number(/height="(\d+)"/.exec(svg)?.[1] ?? Math.round(width * 0.9));
    // Caption underneath, because the caption is half the artefact — it is what a
    // listener gets, and it has to be judged as prose, not skimmed as a title.
    const html = join(outDir, `.${d.id}.html`);
    writeFileSync(html,
      `<html><body style="margin:0;background:#fff;font:14px/1.45 -apple-system,Helvetica,Arial">` +
      `<div style="width:${width}px">${svg}` +
      `<p style="padding:8px 4px;color:#444">${d.caption ?? '<b>NO CAPTION</b>'}</p></div></body></html>`);
    execFileSync(chrome, ['--headless', '--disable-gpu', '--hide-scrollbars',
      `--screenshot=${join(outDir, `${d.id}.png`)}`,
      `--window-size=${width},${h + 190}`, `file://${html}`], { stdio: 'ignore' });
    rmSync(html, { force: true });
    try { execFileSync('xattr', ['-d', 'com.apple.quarantine', join(outDir, `${d.id}.png`)], { stdio: 'ignore' }); } catch {}
  }
}
console.log(`preview: ${specs.length} diagram(s) -> ${outDir}${chrome ? '' : ' (SVG only, no Chrome)'}`);
