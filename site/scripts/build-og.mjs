/**
 * Render one 1200x630 Open Graph card per page, and emit the manifest.
 *
 * WHY. Every share of this site on Reddit, Discord, WhatsApp, Slack or iMessage
 * rendered as a bare text box: there was no `og:image` anywhere in the build,
 * and `twitter:card` was `summary` rather than `summary_large_image`. A corpus
 * that is mostly shared by one player sending another player a link was giving
 * that link no picture at all.
 *
 * WHY NOT A DEPENDENCY. The diagram pipeline already rasterises SVG through
 * headless Chrome (build-diagrams.mjs), and the rink drawing it uses is already
 * a module. So the card is HTML plus the real rink outline as a watermark, shot
 * by the same browser that shoots the diagrams. Nothing is added to
 * package.json, and the cards cannot drift away from the site's palette because
 * they read it from the same place the diagrams do.
 *
 * WHY ONE BROWSER. build-diagrams launches Chrome once per diagram, which is
 * fine at ~2.4s when the alternative is complexity. Here it is not fine: there
 * are 48 cards, and 48 launches is roughly two minutes added to a build that
 * already takes over two. So this drives a single instance over the DevTools
 * protocol using node's built-in WebSocket (node >= 22, which package.json
 * already requires). Same browser, same output, one startup.
 *
 * WHERE THE TEXT COMES FROM. docs-meta.json and structure.json — the same two
 * files nav.ts builds the site's navigation from. The card therefore says
 * exactly what the page says. No string is written here.
 *
 * Usage:  node scripts/build-og.mjs
 */

import { writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { execFileSync } from 'node:child_process';
import net from 'node:net';
import { tmpdir } from 'node:os';
import { mkdtempSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { rinkSvg } from './lib/rink.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(HERE, '..', 'public', 'og');
const MANIFEST = join(HERE, '..', 'src', 'data', 'og.json');

const meta = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'docs-meta.json'), 'utf8'));
const structure = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'structure.json'), 'utf8'));

const W = 1200;
const H = 630;

/* The site's own tokens, as global.css defines them for the light theme. The
   card is always light: a share preview is shown on someone else's background
   and cannot follow the reader's colour scheme. */
const INK = '#1b1c1e';
const PAPER = '#fbfbfa';
const ACCENT = '#0f5a8f';
const FAINT = '#5b5f66';
const RULE = '#e3e3e0';

const SITE_SHORT_TITLE = 'Learning to Play the Game';
const SITE_DESCRIPTION =
  'A documentation corpus for learning ice hockey: where to be, how to execute, how to read the play, and how five players work as one unit.';
const DOMAIN = 'learn-ice-hockey.com';

/* Same discovery order as build-diagrams.mjs and build-pdf.mjs. */
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

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/*
  Title size by length rather than by a fitting loop. The corpus's longest
  document title is "Risk Management and Decision-Making" and its longest layer
  title is "Systems and Situations"; the three steps below cover the observed
  range with room either side. A fitting loop would need a round trip to the
  browser per card to measure, for a result these three numbers already give.
*/
function titleSize(text) {
  if (text.length <= 22) return 86;
  if (text.length <= 38) return 68;
  return 54;
}

function card({ eyebrow, title, description }) {
  /* The real rink, drawn by the same module the diagrams use, sitting low and
     pale behind the text. It is decoration here and carries no information, so
     it is not described anywhere — the card's alt text is the title. */
  const rink = rinkSvg({ half: false, labels: false, width: 760, ns: 'og' });

  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${W}px;height:${H}px}
  body{
    background:${PAPER};color:${INK};
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",
                "Liberation Sans","DejaVu Sans",Arial,sans-serif;
    position:relative;overflow:hidden;
  }
  .rink{position:absolute;right:-150px;bottom:-120px;opacity:.10;pointer-events:none}
  .bar{position:absolute;left:0;top:0;bottom:0;width:14px;background:${ACCENT}}
  .pad{position:relative;padding:70px 78px 0 92px;height:100%;display:flex;flex-direction:column}
  .eyebrow{
    font-size:24px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;
    color:${ACCENT};margin-bottom:26px;
  }
  h1{font-size:${titleSize(title)}px;line-height:1.08;font-weight:800;letter-spacing:-.02em;max-width:19ch}
  .desc{
    margin-top:26px;font-size:27px;line-height:1.42;color:${FAINT};max-width:34ch;
    display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;
  }
  .foot{
    margin-top:auto;margin-bottom:52px;padding-top:24px;border-top:1px solid ${RULE};
    display:flex;justify-content:space-between;align-items:baseline;
    font-size:23px;color:${FAINT};
  }
  .foot .site{font-weight:700;color:${INK}}
  </style></head><body>
  <div class="rink">${rink}</div>
  <div class="bar"></div>
  <div class="pad">
    <div class="eyebrow">${esc(eyebrow)}</div>
    <h1>${esc(title)}</h1>
    <div class="desc">${esc(description)}</div>
    <div class="foot"><span class="site">${DOMAIN}</span><span>CC BY-NC 4.0</span></div>
  </div>
  </body></html>`;
}

/** Every page that gets a card, with the text it should carry. */
function targets() {
  const out = [];

  out.push({
    key: 'index',
    path: '/',
    eyebrow: SITE_SHORT_TITLE,
    title: 'Ice hockey — learning to play the game',
    description: SITE_DESCRIPTION,
  });

  for (const layer of structure.layers) {
    out.push({
      key: layer.id,
      path: `/${layer.id}/`,
      eyebrow: 'Section',
      title: layer.title,
      description: layer.blurb,
    });
    for (const id of layer.docs) {
      const m = meta.docs[id];
      if (!m) throw new Error(`build-og: "${id}" is in structure.json but not docs-meta.json.`);
      out.push({
        key: id.replace(/\//g, '__'),
        path: `/${id}/`,
        eyebrow: layer.title,
        title: m.title,
        description: m.description,
      });
    }
  }

  out.push({
    key: 'search',
    path: '/search/',
    eyebrow: SITE_SHORT_TITLE,
    title: 'Search',
    description: `Full-text search across all ${Object.keys(meta.docs).length} documents.`,
  });
  out.push({
    key: 'downloads',
    path: '/downloads/',
    eyebrow: SITE_SHORT_TITLE,
    title: 'Downloads',
    description: 'The whole corpus as EPUB, PDF and Markdown, for reading offline.',
  });

  return out;
}

/* ------------------------------------------------------------ the browser -- */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitPort(port) {
  for (let i = 0; i < 200; i++) {
    const ok = await new Promise((r) => {
      const s = net.connect(port, '127.0.0.1');
      s.on('connect', () => { s.destroy(); r(true); });
      s.on('error', () => r(false));
    });
    if (ok) return true;
    await sleep(100);
  }
  return false;
}

async function connect(chromePath) {
  const port = 9500 + Math.floor(Math.random() * 400);
  // Not under public/: anything left there is copied verbatim into dist/, and a
  // Chrome profile is tens of megabytes of cache and cookies that would ship.
  const profile = mkdtempSync(join(tmpdir(), 'og-chrome-'));
  const proc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    '--no-first-run', '--no-default-browser-check',
    '--disable-extensions', '--disable-gpu', '--hide-scrollbars',
    'about:blank',
  ], { stdio: 'ignore' });

  if (!(await waitPort(port))) {
    proc.kill();
    throw new Error('build-og: Chrome did not open a debugging port.');
  }

  const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
  const page = list.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res);
    ws.addEventListener('error', rej);
  });

  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) {
      const { res, rej } = pending.get(m.id);
      pending.delete(m.id);
      m.error ? rej(new Error(`${m.error.message}`)) : res(m.result);
    }
  });
  const send = (method, params = {}) =>
    new Promise((res, rej) => {
      const i = ++id;
      pending.set(i, { res, rej });
      ws.send(JSON.stringify({ id: i, method, params }));
    });

  return {
    send,
    close() {
      try { ws.close(); } catch { /* already gone */ }
      proc.kill();
      // Chrome writes to its profile as it exits, so a removal issued in the same
      // tick loses the race and throws ENOTEMPTY. The directory is in the system
      // temp dir; failing to remove it is untidy, not a build failure.
      try { rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }); }
      catch { /* the OS will reap it */ }
    },
  };
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const list = targets();

  const chrome = findChrome();
  if (!chrome) {
    /*
      Loud, and not fatal — the same call build-diagrams makes about its PNG
      fallbacks. An empty manifest means BaseHead emits no og:image at all,
      which is the state this site was already in. A manifest naming files that
      were never rendered would be worse: every share would fetch a 404.
    */
    console.warn('build-og: no Chrome found — no Open Graph cards rendered.\n' +
                 '          Shares will fall back to a text-only preview. Set CHROME_PATH to build them.');
    writeFileSync(MANIFEST, JSON.stringify({}, null, 2) + '\n');
    return;
  }

  const browser = await connect(chrome);
  const manifest = {};

  try {
    await browser.send('Page.enable');
    await browser.send('Emulation.setDeviceMetricsOverride', {
      width: W, height: H, deviceScaleFactor: 1, mobile: false,
    });
    const { frameTree } = await browser.send('Page.getFrameTree');
    const frameId = frameTree.frame.id;

    for (const t of list) {
      await browser.send('Page.setDocumentContent', { frameId, html: card(t) });
      // One frame for layout and webfont-free text metrics to settle. The card
      // loads no external resource, so there is nothing else to wait for.
      await sleep(30);
      const shot = await browser.send('Page.captureScreenshot', {
        format: 'png',
        clip: { x: 0, y: 0, width: W, height: H, scale: 1 },
        captureBeyondViewport: true,
      });
      writeFileSync(join(OUT_DIR, `${t.key}.png`), Buffer.from(shot.data, 'base64'));
      manifest[t.path] = {
        image: `/og/${t.key}.png`,
        width: W,
        height: H,
        // The alt text is the card's own title. The rink behind it is
        // decoration; describing it would describe the wallpaper, not the card.
        alt: t.title,
      };
    }
  } finally {
    browser.close();
  }

  // Chrome tags files it writes on macOS; left in place the quarantine flag
  // makes the artefact unopenable. Same treatment build-diagrams gives its PNGs.
  try {
    execFileSync('xattr', ['-dr', 'com.apple.quarantine', OUT_DIR], { stdio: 'ignore' });
  } catch { /* not macOS */ }

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`build-og: ${Object.keys(manifest).length} Open Graph card(s) ${W}x${H} -> public/og/`);
}

await main();
