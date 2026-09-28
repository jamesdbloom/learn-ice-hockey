# Tooling review — 28 September 2026: render with chrome-headless-shell, not the user's Chrome

**Scope.** `site/scripts/{build-diagrams,build-og,build-pdf,preview-diagrams}.mjs`, a new shared
`site/scripts/lib/chrome.mjs`, `site/package.json` (`setup:chrome`), `site/README.md`. No `content/` change.

**Why.** On macOS a headless run of `/Applications/Google Chrome.app` registers with LaunchServices as Google Chrome;
a build launches one per diagram, and while any is alive the Dock activates that windowless process instead of the
browser, so a build locked the owner out of their own Chrome. The four steps now resolve one binary in the order
`CHROME_PATH` → `chrome-headless-shell` (puppeteer / Playwright caches, newest first) → installed Chrome, with a
warning on macOS for the last.

**Written in a separate session; reviewed adversarially here before merge.** Reviewer (read-only, in the worktree):
- every path finds a browser; a missing shell falls back loudly; failures throw rather than pass silently;
- **the PNG cache cannot falsely reuse**: `chromeIdentity()` keys on binary path **and** `--version`, so a change of
  renderer forces one full re-render (measured: warm 204 reused / 0 rendered; `--no-cache` 0 / 204 in 51 s);
- 204 PNGs at exactly 2× manifest size; 49 OG cards 1200×630; a `.print` bundle rendered to 356 pages with
  `--no-pdf-header-footer` honoured by the shell;
- CI (`ci.yml`, `deploy.yml`, `ubuntu-latest`) never runs `setup:chrome` and keeps resolving
  `/usr/bin/google-chrome-stable` — unchanged.
No blocker, no major. Three minors, **all applied before commit**:
1. `setup:chrome` pinned to `@puppeteer/browsers@3.2.3` (it had run whatever npm served, with `-y`).
2. A `CHROME_PATH` that does not exist now warns instead of being silently skipped — tested.
3. `preview-diagrams` now throws if a PNG was not written (it could report success having written nothing — this
   repository's commonest silent pass); its comment no longer claims Chrome "exits 0" (the shell exits 1). Tested:
   10 of 10 written.
Deferred (not defects today): half-finished Playwright installs are not skipped (fails loudly via `--version`); no
`--no-sandbox` outside `build-pdf` would matter only if CI ever installs the shell; the macOS fallback warning prints
once per script.

**Verification on `main` after applying.** Full `npm run build` with the absolute npm binary, **`rc=0` through
`check:links`**: `build-diagrams` 204 rendered, `build-og` 49 cards, **`build-pdf: 8/8 PDF (121.5 MB) via
chrome-headless-shell`**, check-links clean. The owner's Chrome stayed usable throughout.

**What this could not have found.** Pixel-level differences between the shell's older headless renderer and full
Chrome (sizes and a visual spot check only); Intel/Rosetta Macs; Linux with the shell installed; the AppArmor
user-namespace question on Ubuntu 24.04 if the shell ever goes into CI.
