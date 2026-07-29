/**
 * Resolves the commit the site was built from, so a deployed page can always be
 * traced back to the source that produced it.
 *
 * Until this existed, answering "is the live site running the latest content?"
 * meant cross-referencing GitHub Actions run history against local git log —
 * and getting it wrong was easy, because a *successful* deploy of an *old*
 * commit looks identical to an up-to-date one from the outside.
 *
 * Resolution order:
 *   1. GITHUB_SHA        — set by Actions; authoritative in CI
 *   2. git rev-parse     — local builds
 *   3. 'unknown'         — never throws; a missing stamp must not fail a build
 *
 * Exposed two ways, both written by this module's single result:
 *   - an HTML comment in every page's <head>  (view-source, no tooling needed)
 *   - /version.json                            (curl / uptime checks / scripts)
 */

import { execFileSync } from 'node:child_process';

/** Run a git command, returning null rather than throwing if git is unusable. */
function git(...args) {
  try {
    return execFileSync('git', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
  } catch {
    return null;
  }
}

function resolve() {
  const commit = process.env.GITHUB_SHA || git('rev-parse', 'HEAD') || 'unknown';

  const ref =
    process.env.GITHUB_REF_NAME || git('rev-parse', '--abbrev-ref', 'HEAD') || 'unknown';

  // Only meaningful locally: in CI the tree is a fresh checkout. `null` means
  // "not determined" and is rendered as absent rather than as a false clean.
  let dirty = null;
  if (!process.env.GITHUB_SHA) {
    const status = git('status', '--porcelain');
    if (status !== null) dirty = status.length > 0;
  }

  return {
    commit,
    short: commit === 'unknown' ? 'unknown' : commit.slice(0, 7),
    ref,
    // Committer date of the built commit — what the content actually dates from,
    // as distinct from when the build ran.
    commitDate: git('show', '-s', '--format=%cI', commit) || null,
    builtAt: new Date().toISOString(),
    runId: process.env.GITHUB_RUN_ID || null,
    ...(dirty === null ? {} : { dirty }),
  };
}

// Resolved once per build rather than per page: ~40 pages would otherwise mean
// ~160 git subprocesses, and builtAt would drift across the same build.
export const BUILD_VERSION = resolve();

/** The <head> comment. Kept on one line so `curl | grep build:` finds it whole. */
export const VERSION_COMMENT = [
  'build:',
  `commit=${BUILD_VERSION.commit}`,
  `ref=${BUILD_VERSION.ref}`,
  `built=${BUILD_VERSION.builtAt}`,
  BUILD_VERSION.runId ? `run=${BUILD_VERSION.runId}` : null,
  BUILD_VERSION.dirty ? 'dirty=true' : null,
]
  .filter(Boolean)
  .join(' ');
