// Render the Getting Better drill diagrams for review: writes out/<id>.svg for each drill,
// out/drills.json, and (with --png) out/png/<id>.png via headless Chrome so a reviewer can
// look at them. The ONE source is site/src/drills/ (the modules the site builds from); the
// review-era copies that used to live in drills/ and lib/ here were deleted on 28 Oct 2026.
// Usage (from repo root):  node project/getting_better_drafts/build.mjs [--png] [--only <file.mjs>]
import { readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, '..', '..', 'site', 'src', 'drills');
const OUT = join(HERE, 'out');
const args = process.argv.slice(2);
const png = args.includes('--png');
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const CHROME = '/Users/uk45004860/.cache/puppeteer/chrome-headless-shell/mac_arm-154.0.8037.57/chrome-headless-shell-mac-arm64/chrome-headless-shell';

mkdirSync(join(OUT, 'png'), { recursive: true });
const files = readdirSync(SRC).filter((f) => f.endsWith('.mjs') && (!only || f === only)).sort();
const all = [];
for (const f of files) {
  const mod = await import(pathToFileURL(join(SRC, f)).href + `?t=${Date.now()}`);
  for (const d of mod.default) {
    if (!d.id || !d.svg || !d.card) throw new Error(`${f}: drill missing id/svg/card`);
    writeFileSync(join(OUT, `${d.id}.svg`), d.svg);
    all.push({ ...d, file: f });
    if (png) {
      const html = join(OUT, 'png', `${d.id}.html`);
      writeFileSync(html, `<!doctype html><html><body style="margin:0;background:#fff">${d.svg}</body></html>`);
      const m = d.svg.match(/width="(\d+(?:\.\d+)?)" height="(\d+(?:\.\d+)?)"/);
      execFileSync(CHROME, ['--headless', '--disable-gpu', '--hide-scrollbars', `--window-size=${Math.ceil(m[1])},${Math.ceil(m[2])}`, `--screenshot=${join(OUT, 'png', `${d.id}.png`)}`, html], { stdio: 'ignore' });
    }
  }
}
if (!only) writeFileSync(join(OUT, 'drills.json'), JSON.stringify(all.map(({ svg, ...rest }) => rest), null, 1));
console.log(`${all.length} drills from ${files.length} file(s)${png ? ', PNGs in out/png' : ''}`);
