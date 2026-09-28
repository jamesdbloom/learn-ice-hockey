/**
 * Find the Chrome binary every headless build step drives.
 *
 * `chrome-headless-shell` first, the full browser only as a fallback. On macOS a
 * headless run of `/Applications/Google Chrome.app` still registers with
 * LaunchServices as "Google Chrome", and a build launches one per diagram. While
 * any of them is alive, clicking Chrome in the Dock activates that windowless
 * process instead of opening the browser, so the build locks the person out of
 * their own Chrome. The shell is a bare executable, not an app bundle, so it never
 * touches the Dock or the real browser's profile.
 *
 * Install it once with `npm run setup:chrome`.
 */

import { existsSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join } from 'node:path';

const HOME = homedir();

const FULL_BROWSERS = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/snap/bin/chromium',
];

// Version-ish numbers in a directory name, for newest-first ordering:
// `mac_arm-154.0.8037.57` -> [154, 0, 8037, 57]; `chromium_headless_shell-1223` -> [1223].
const numbers = (name) => (name.match(/\d+/g) ?? []).map(Number);
function newestFirst(a, b) {
  const x = numbers(a), y = numbers(b);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    if ((x[i] ?? 0) !== (y[i] ?? 0)) return (y[i] ?? 0) - (x[i] ?? 0);
  }
  return 0;
}

// <root>/<version dir>/chrome-headless-shell-<platform>/chrome-headless-shell,
// the layout both @puppeteer/browsers and Playwright install.
function headlessShells(root, prefix) {
  let versions;
  try { versions = readdirSync(root).filter((d) => d.startsWith(prefix)); } catch { return []; }
  const found = [];
  for (const v of versions.sort(newestFirst)) {
    let platforms;
    try { platforms = readdirSync(join(root, v)).filter((d) => d.startsWith('chrome-headless-shell-')); } catch { continue; }
    for (const p of platforms) found.push(join(root, v, p, 'chrome-headless-shell'));
  }
  return found;
}

function candidates() {
  return [
    process.env.CHROME_PATH,
    ...headlessShells(join(HOME, '.cache', 'puppeteer', 'chrome-headless-shell'), ''),
    ...headlessShells(join(HOME, 'Library', 'Caches', 'ms-playwright'), 'chromium_headless_shell-'),
    ...headlessShells(join(HOME, '.cache', 'ms-playwright'), 'chromium_headless_shell-'),
    ...FULL_BROWSERS,
  ].filter(Boolean);
}

let warned = false;

/** The binary to run, or null when there is none. */
export function findChrome() {
  // A CHROME_PATH that points nowhere used to be skipped without a word, and the
  // build quietly rendered with some other browser. Say so.
  if (process.env.CHROME_PATH && !existsSync(process.env.CHROME_PATH)) {
    console.warn(`chrome: CHROME_PATH is set to ${process.env.CHROME_PATH}, which does not exist; ignoring it.`);
  }
  let chrome = candidates().find((c) => existsSync(c)) ?? null;
  if (!chrome) {
    try { chrome = execFileSync('which', ['google-chrome'], { encoding: 'utf8' }).trim() || null; } catch { /* none */ }
  }
  if (chrome && process.platform === 'darwin' && chrome.includes('.app/') && !process.env.CHROME_PATH && !warned) {
    warned = true;
    console.warn(
      `chrome: no chrome-headless-shell found, so falling back to ${chrome}.\n` +
      '        While this build runs, clicking Chrome in the Dock will not open your browser.\n' +
      '        Run `npm run setup:chrome` once to stop that.');
  }
  return chrome;
}
