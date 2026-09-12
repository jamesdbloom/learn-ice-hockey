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
 * Usage:  node scripts/build-diagrams.mjs [--no-png] [--no-cache]
 */

import {
  writeFileSync, readFileSync, mkdirSync, rmSync, renameSync,
  existsSync, statSync, readdirSync,
} from 'node:fs';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { DIAGRAMS } from '../src/diagrams/index.mjs';
import { playSvg, rinkSvg, legendSvg } from './lib/rink.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(HERE, '..', 'public', 'diagrams');
const MANIFEST = join(HERE, '..', 'src', 'data', 'diagrams.json');

// ⚠️ THE PNG CACHE. Measured on this registry: generating every SVG took 0.68 s and
// the whole build took 8 m 58 s, because each PNG is a COLD CHROME SUBPROCESS. So
// essentially the entire runtime was rasterising, and it was paid in full on every
// `npm run build` for a registry of which a typical edit changes one image.
// (No diagram COUNT is written anywhere in this file on purpose: the registry grows,
// and a count copied into a comment goes stale silently.)
//
// WHY A CONTENT HASH AND NOT AN MTIME. This repository has been burned repeatedly
// by mtime-shaped reasoning -- a fresh `dist` mtime that proved only that a build
// got past step 1, an Astro transform cache that made a verified caption edit
// unverified. An mtime answers "was this touched"; the question here is "would
// Chrome draw the same pixels", and only the bytes can answer that.
//
// WHY THE KEY IS COMPLETE. rasterise() is a pure function of exactly four things,
// and the key is the hash of all four:
//
//   the SVG TEXT        -- the only content input. A change to a diagram's spec,
//                          to rink.json, to rink.mjs, to the palette, to the
//                          notation, to the label placer, all arrive here. Anything
//                          that does NOT change this text cannot change the PNG.
//   the HTML WRAPPER    -- the <img> element and the page background, as TEXT.
//   the CHROME ARGV     -- including --force-device-scale-factor. ⚠️ Hashing the
//                          SVG alone would let someone change the scale factor from
//                          2 to 3 and have the cache serve every PNG at the old
//                          resolution. The flags are an input, so they are in the key.
//   the CHROME IDENTITY -- binary path plus `--version`, so a browser upgrade
//                          invalidates every entry.
//
// ⚠️ ONE ARGUMENT IS DELIBERATELY EXCLUDED, AND EXCLUDING IT IS LOAD-BEARING. The
// wrapper's FILE NAME now carries the pid (see rasterJob), so it differs on every
// run. Hashed, it would change every key on every run and the cache would never hit
// once -- a silent total loss of the feature, looking exactly like a working build.
// It is correct to exclude: the wrapper's name is not drawn, only its CONTENT is,
// and that content is hashed as `doc` above. So the key sees a fixed placeholder.
//
// What is NOT in the key at all: the system fonts Chrome resolves for the SVG's
// `-apple-system, Helvetica Neue, Arial, sans-serif` stack. The SVG references no
// external resource of any kind -- no @font-face, no xlink:href, no <image> -- so
// fonts are the only uncaptured input. Use --no-cache after a font change.
const CACHE = join(OUT_DIR, '.png-cache.json');
// Bump when the key's INGREDIENTS change, to invalidate keys computed the old way.
const CACHE_VERSION = 1;
const LOCK = join(OUT_DIR, '.build.lock');
// Stands in for the per-process wrapper path when hashing. Any fixed string works;
// it exists so the key is stable across runs.
const WRAPPER_TOKEN = 'file://<per-process wrapper>';

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

// Everything the rasterisation depends on, as data rather than as side effects, so
// that the cache key can hash the SAME values the run actually uses. Splitting this
// out is what makes the key complete by construction: a flag added below is a flag
// in the key, with nothing to remember.
//
// ⚠️ THE WRAPPER FILE NAME IS UNIQUE PER PROCESS AND PER DIAGRAM, AND THAT IS A FIX,
// NOT A TIDY-UP. It used to be one fixed path, `.raster.html`, for every diagram in
// every process. With two builds running -- which this cache makes CHEAP and therefore
// LIKELY -- process A could overwrite the wrapper with its own `<img src="X.svg">`
// between B writing `<img src="Y.svg">` and B's Chrome reading it. The result is
// Y.png containing a picture of X: a WRONG IMAGE UNDER A RIGHT FILENAME, exit 0, no
// warning. The `rmSync` below could also delete the file out from under the other
// process's Chrome, which at least fails loudly; the silent wrong-content case is the
// one that ships.
//
// It must still live in OUT_DIR, because the <img src> is RELATIVE and the wrapper has
// to sit beside the SVGs for it to resolve. So uniqueness goes in the name.
function rasterJob(svgPath, pngPath, width, height, seq) {
  // Wrap the SVG in a bare document at exactly its own size, so the PNG has no
  // margin and no scrollbar. Rendered at 2x for print and high-DPI screens.
  const html = join(OUT_DIR, `.raster.${process.pid}.${seq}.html`);
  const doc =
    `<html><body style="margin:0;background:#fff">` +
    `<img src="${svgPath.split('/').pop()}" width="${width}" height="${height}"></body></html>`;
  const args = [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=2',
    `--screenshot=${pngPath}`,
    `--window-size=${width},${height}`,
    `file://${html}`,
  ];
  // The argv as the CACHE KEY should see it: identical every run. See WRAPPER_TOKEN.
  const keyArgs = args.map((a) => (a === `file://${html}` ? WRAPPER_TOKEN : a));
  return { html, doc, args, keyArgs, pngPath };
}

function rasterise(chrome, job) {
  writeFileSync(job.html, job.doc);
  try {
    execFileSync(chrome, job.args, { stdio: 'ignore' });
  } finally {
    // `finally`, so a Chrome that throws does not leave its wrapper behind. With a
    // per-process name nobody else would collide with it, but it would still litter
    // a directory the operator reads.
    rmSync(job.html, { force: true });
  }
  // Chrome tags files it writes on macOS. Left in place, the quarantine flag makes
  // the artefact unopenable for the person who asked for it.
  try { execFileSync('xattr', ['-d', 'com.apple.quarantine', job.pngPath], { stdio: 'ignore' }); } catch { /* not macOS */ }
}

// ⚠️ ONE BUILD AT A TIME. The unique wrapper name above stops two builds corrupting
// each other's PNGs, but it does not make concurrency SAFE: two processes still write
// the same .svg, .png, manifest and cache paths. Two Chromes writing one PNG can tear
// it, and -- worse -- if the two trees differ at all, one process's cache entry can
// end up describing a PNG the other overwrote, which is a stale image reused forever
// after. So the second build refuses rather than racing.
//
// It exits NON-ZERO on purpose: `build:diagrams` is step 4 of an eleven-step
// `npm run build`, and a diagram build that quietly declined to run would hand the
// rest of the chain a half-built directory, which is the silent staleness every other
// guard in this file exists to prevent.
function acquireLock() {
  try {
    writeFileSync(LOCK, JSON.stringify({ pid: process.pid, started: new Date().toISOString() }), { flag: 'wx' });
    return true;
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
  }
  // A lock whose owner is gone is a crash, not a build. Take it over rather than
  // blocking a person who would have no way to know the file was stale.
  let holder = null;
  try { holder = JSON.parse(readFileSync(LOCK, 'utf8')); } catch { /* unreadable => treat as stale */ }
  const alive = (() => {
    if (!holder || typeof holder.pid !== 'number') return false;
    try { process.kill(holder.pid, 0); return true; } catch { return false; }
  })();
  if (!alive) {
    console.warn(`build-diagrams: removing a stale lock left by pid ${holder?.pid ?? 'unknown'}.`);
    rmSync(LOCK, { force: true });
    writeFileSync(LOCK, JSON.stringify({ pid: process.pid, started: new Date().toISOString() }), { flag: 'w' });
    return true;
  }
  console.error(
    `\nbuild-diagrams: ANOTHER BUILD IS RUNNING (pid ${holder.pid}, started ${holder.started}).\n` +
    `    Two builds write the same SVGs, PNGs, manifest and cache, so this one is\n` +
    `    refusing rather than racing it. Wait for that build to finish and re-run.\n` +
    `    If you are sure it is gone:  rm ${LOCK}\n`);
  return false;
}

function releaseLock() {
  try {
    const holder = JSON.parse(readFileSync(LOCK, 'utf8'));
    // Never delete a lock this process does not own -- that is how a "cleanup" ends
    // up clearing the way for the very race the lock prevents.
    if (holder && holder.pid === process.pid) rmSync(LOCK, { force: true });
  } catch { /* already gone, or unreadable: nothing safe to do */ }
}

// One exec per RUN, not per diagram (~0.04 s measured). A null return disables the
// cache for the whole run rather than guessing at an identity: a browser we cannot
// identify is one whose upgrade we could not detect, and a full rebuild is the safe
// answer to that, not a silent reuse.
function chromeIdentity(chrome) {
  try {
    const v = execFileSync(chrome, ['--version'], {
      encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return v ? `${chrome}\u0000${v}` : null;
  } catch { return null; }
}

function pngKey(identity, job, svg) {
  return createHash('sha256')
    .update(`build-diagrams png cache v${CACHE_VERSION}\n`)
    .update(`${identity}\n`)
    .update(`${job.doc}\n`)
    // ⚠️ keyArgs, NOT args. `args` carries the per-process wrapper path, which
    // changes every run; hashing it makes every key unique per run and the cache
    // never hits once. That is not hypothetical -- it was written that way, and the
    // symptom was a build that looked completely normal while reporting "0 reused"
    // on every single run.
    .update(`${job.keyArgs.join('\u0000')}\n`)
    .update(svg)
    .digest('hex');
}

// A missing, unreadable or malformed cache means REBUILD EVERYTHING. It must never
// mean "crash" and it must never mean "skip" -- so every failure path here returns
// an empty map, which is indistinguishable from a cold cache.
function loadCache() {
  try {
    const raw = JSON.parse(readFileSync(CACHE, 'utf8'));
    if (!raw || raw.version !== CACHE_VERSION) return {};
    if (typeof raw.keys !== 'object' || raw.keys === null || Array.isArray(raw.keys)) return {};
    return raw.keys;
  } catch { return {}; }
}

// Written via a temp file and renamed, so an interrupted build leaves the previous
// cache intact rather than a truncated one. A write failure is a warning, never a
// build failure: the artefacts are already on disk and correct.
function saveCache(keys) {
  const tmp = `${CACHE}.tmp`;
  try {
    writeFileSync(tmp, JSON.stringify({ version: CACHE_VERSION, keys }) + '\n');
    renameSync(tmp, CACHE);
  } catch (e) {
    console.warn(`build-diagrams: could not write the PNG cache (${e.message}). ` +
                 `The artefacts are fine; the next build will simply be a full one.`);
    try { rmSync(tmp, { force: true }); } catch { /* nothing to clean up */ }
  }
}

function main() {
  const noPng = process.argv.includes('--no-png');
  const noCache = process.argv.includes('--no-cache');
  mkdirSync(OUT_DIR, { recursive: true });
  // Locked even for --no-png: that mode still writes every SVG and the manifest, which
  // a concurrent full build is also writing.
  if (!acquireLock()) { process.exitCode = 2; return; }
  const chrome = noPng ? null : findChrome();
  if (!noPng && !chrome) {
    console.warn('build-diagrams: no Chrome found — SVGs only, EPUB will have no raster fallback.\n' +
                 '                Set CHROME_PATH to build them.');
  }

  const identity = chrome ? chromeIdentity(chrome) : null;
  if (chrome && !identity) {
    console.warn('build-diagrams: Chrome would not report --version, so the PNG cache is off ' +
                 'for this run and every image will be re-rendered.');
  }
  // ⚠️ --no-png NEVER TOUCHES THE CACHE, in either direction. It renders no PNGs, so
  // it has nothing truthful to record; writing entries here would assert that images
  // exist which this run never made.
  const cacheOn = Boolean(chrome) && Boolean(identity);
  // --no-cache forces a full re-render but still WRITES the result, so the run after
  // a forced one is warm again.
  const oldKeys = cacheOn && !noCache ? loadCache() : {};
  const newKeys = {};
  let reused = 0;
  let rendered = 0;

  const seen = new Set();
  const manifest = {};
  let seq = 0;
  for (const d of DIAGRAMS) {
    if (seen.has(d.id)) throw new Error(`duplicate diagram id: ${d.id}`);
    seen.add(d.id);
    if (!d.caption) throw new Error(`${d.id}: no caption. The caption is what a listener gets; it is not optional.`);
    if (!d.owner) throw new Error(`${d.id}: no owner. Name the content document whose prose this diagram must agree with.`);

    const width = d.width ?? 900;
    const spec = { ...d, footer: FOOTER };
    const svg =
      d.kind === 'legend' ? legendSvg(width, spec)
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
    if (chrome) {
      const pngPath = join(OUT_DIR, `${d.id}.png`);
      const job = rasterJob(svgPath, pngPath, width, h, seq++);
      const key = cacheOn ? pngKey(identity, job, svg) : null;
      // ⚠️ BOTH HALVES. A matching hash with a MISSING file must re-render -- the cache
      // records what was drawn, not what survived, and public/diagrams/ is gitignored
      // and routinely deleted out from under it.
      if (key && oldKeys[d.id] === key && existsSync(pngPath)) {
        reused += 1;
      } else {
        rasterise(chrome, job);
        rendered += 1;
      }
      // Record only what is actually on disk now, so a Chrome that exits 0 without
      // writing cannot poison the next run into skipping a PNG that never existed.
      if (key && existsSync(pngPath)) newKeys[d.id] = key;
    }

    manifest[d.id] = {
      id: d.id,
      owner: d.owner,
      caption: d.caption,
      describe: d.describe ?? null,
      // ⚠️ `title` is the ACCESSIBLE NAME and it was absent from this manifest, so nothing
      // downstream could audit it — `check_absolutes.py` reads captions from here and could
      // not see names at all. `site-reviewer` hit that gap and drew a wrong intermediate
      // conclusion from it before measuring the sources directly.
      title: d.title ?? null,
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

  // Saved HERE, before the describe assertion below can return early. Every PNG that
  // is going to be written has been written by this point, so the cache describes
  // public/diagrams/ accurately even on the run that exits 1.
  if (cacheOn) saveCache(newKeys);

  // ⚠️ THE `describe`/`caption` JOIN IS A SPOKEN SEAM, AND ONE UNSTATED HABIT KEEPS IT SAFE.
  //
  // `lib/rink.mjs` longDesc() emits `${describe} ${caption}` as the SVG's single <desc>,
  // and remark-corpus.mjs marks the <figcaption> aria-hidden on the ground that <desc>
  // carries the same words. So for a screen-reader user the <desc> IS the caption, and
  // describe and caption are announced as ONE continuous utterance joined by one space.
  //
  // A round-70 sweep of all 198 pairs found ZERO defects at that seam — but for a reason
  // nothing enforced: every `describe` happens to end in terminal punctuation, so the join
  // produces a sentence boundary rather than a run-on. ⚠️ A `describe` edited to end without
  // it would FUSE its last sentence to the caption's first, silently, and no gate would see
  // it — which is how a negation ending a describe could invert an instruction opening a
  // caption while both fields are individually correct.
  //
  // So the habit is now an invariant. This is a build-time assertion rather than a worklist
  // because the failure is silent, the fix is one character, and there is no legitimate
  // reason for a describe to end mid-sentence.
  const unterminated = Object.values(manifest)
    .filter((d) => d.describe && !/[.!?:;)"'\u201d\u2019]\s*$/.test(d.describe))
    .map((d) => d.id);
  if (unterminated.length) {
    console.error(
      `\nbuild-diagrams: ${unterminated.length} describe(s) do not end in terminal punctuation.\n` +
      `  The <desc> emitted for screen readers is \`describe + " " + caption\`, so an\n` +
      `  unterminated describe FUSES into the caption's first sentence as one utterance.\n` +
      unterminated.map((id) => `      ${id}`).join('\n') + '\n');
    process.exitCode = 1;
    return;
  }

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  // The cache tally is reported rather than assumed: a cache nobody can see working
  // is a cache nobody can tell from a broken one.
  const cacheNote =
    !chrome ? ''
    : !cacheOn ? ' [PNG cache off: all rendered]'
    : ` [PNG cache: ${reused} reused, ${rendered} rendered${noCache ? ', forced' : ''}]`;
  console.log(`build-diagrams: ${Object.keys(manifest).length} diagram(s)` +
              `${chrome ? ' with PNG fallbacks' : ' (SVG only)'} -> public/diagrams/` + cacheNote);
  // Warn AFTER writing, not before: a partial public/diagrams/ is worse than a
  // manifest that is one edit behind, and the operator needs both facts.
  warnIfSourcesMovedDuringBuild();
}

// The lock is released on every exit path main() can take by itself: the describe
// assertion's early return, a thrown duplicate-id, a Chrome that fails.
//
// ⚠️ NO SIGNAL HANDLER HERE, DELIBERATELY. main() is synchronous from end to end, so a
// `process.on('SIGTERM')` handler could not run until the work it was meant to
// interrupt had already finished -- it would read as protection while providing none.
// A hard `kill` therefore leaves the lock behind, and what recovers from that is
// acquireLock()'s stale-pid takeover, which is the mechanism that has to work anyway.
try {
  main();
} finally {
  releaseLock();
}
