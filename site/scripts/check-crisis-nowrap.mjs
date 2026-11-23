#!/usr/bin/env node
/**
 * check-crisis-nowrap — the crisis box's phone numbers must not break across lines.
 *
 * src/plugins/remark-corpus.mjs wraps every phone number in the mental-game crisis
 * callout in `<span class="nowrap">`, so "116 123" or "1-866-277-3553" is never split
 * over two lines on a phone. It finds the box by its OPENING SENTENCE, through
 * `CRISIS_RE` ("If you are thinking about harming yourself … suicide"). Reword that
 * sentence and the regex stops matching, the spans disappear, and nothing else in the
 * build notices: the page still renders, every link still resolves, and a number can
 * break across a line again in the one box where a reader may be dialling it.
 *
 * So this reads the BUILT page and asserts the outcome, not the mechanism: the callout
 * on the mental_game page that opens with the crisis sentence must carry at least MIN_NOWRAP
 * `class="nowrap"` spans. It also fails if the page or the callout cannot be found,
 * because a check that passes when its target has vanished is the silent failure it
 * exists to stop.
 *
 * MIN_NOWRAP is a floor, not the count: the box listed 9 numbers on 23 November 2026,
 * and the floor is set below that so editing one line out of the box does not fail the
 * build. If the box legitimately loses numbers below the floor, lower it here and say
 * why.
 *
 * Run by check-links.mjs (the last step of `npm run build`), or standalone:
 *   node scripts/check-crisis-nowrap.mjs dist
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';

export const CRISIS_PAGE = 'off-the-ice/mental_game/index.html';
export const MIN_NOWRAP = 7;

/** Returns a list of problems; empty means the guard holds. */
export function checkCrisisNowrap(dist) {
  const file = path.join(dist, CRISIS_PAGE);
  if (!existsSync(file)) {
    return [`crisis-nowrap: ${CRISIS_PAGE} is not in the build output, so the crisis callout's ` +
      `phone numbers could not be checked. If the page moved, update CRISIS_PAGE in ` +
      `scripts/check-crisis-nowrap.mjs.`];
  }
  const root = parse(readFileSync(file, 'utf8'));
  // Find THE box, not every box that mentions the subject: "suicide" also appears in
  // body prose and could appear in another note. The box is the callout that OPENS with
  // the crisis sentence; failing that, the callout that already carries the wrappers.
  const asides = root.querySelectorAll('aside.callout');
  const opening = (el) => /^If you are thinking about harming yourself\b/i
    .test(el.textContent.trim());
  const box = asides.find(opening) || asides.find((el) => el.querySelector('span.nowrap'));
  if (!box) {
    return [`crisis-nowrap: no crisis callout on ${CRISIS_PAGE} — no <aside class="callout"> ` +
      `opens "If you are thinking about harming yourself", and none carries a ` +
      `<span class="nowrap">. The box has been removed or reworded; if reworded, its phone ` +
      `numbers are no longer wrapped (CRISIS_RE in src/plugins/remark-corpus.mjs) and this ` +
      `check's opening test needs updating too.`];
  }
  const callouts = [box];
  const problems = [];
  for (const box of callouts) {
    const n = box.querySelectorAll('span.nowrap').length;
    if (n < MIN_NOWRAP) {
      const opening = box.textContent.trim().replace(/\s+/g, ' ').slice(0, 90);
      problems.push(
        `crisis-nowrap: the crisis callout on ${CRISIS_PAGE} has ${n} <span class="nowrap"> ` +
        `phone-number wrapper(s); at least ${MIN_NOWRAP} are required. Its phone numbers can ` +
        `now break across lines on a phone. The usual cause is that the box's opening sentence ` +
        `was reworded and no longer matches CRISIS_RE in src/plugins/remark-corpus.mjs ` +
        `(box opens: "${opening}…").`);
    }
  }
  return problems;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const dist = path.resolve(process.cwd(), process.argv[2] ?? 'dist');
  const problems = checkCrisisNowrap(dist);
  if (problems.length) {
    for (const p of problems) console.error(`  ✗ ${p}`);
    process.exit(1);
  }
  console.log(`crisis-nowrap: ${CRISIS_PAGE} crisis callout keeps its phone numbers on one line.`);
}
