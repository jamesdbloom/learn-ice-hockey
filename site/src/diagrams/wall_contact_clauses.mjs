/**
 * Caption clauses for contact at the boards.
 *
 * A caption clause that appears in more than one diagram is imported, never
 * retyped — the same reason `rule69_clauses.mjs` exists. This one had already
 * drifted before it was promoted.
 *
 * ---------------------------------------------------------------------------
 * WHY THIS FILE EXISTS, MEASURED RATHER THAN ASSERTED
 * ---------------------------------------------------------------------------
 * A census of the BUILD PRODUCT (`site/src/data/diagrams.json`, 204 units) on
 * 22 September 2026 found 24 captions carrying the wall-posture limb and only
 * 11 of them carrying the shoulder clause. Thirteen captions told a listener
 * "forearm and hip, head up and chin off your chest" and said nothing about the
 * shoulder at all.
 *
 * ⚠️ COUNT THE BUILD PRODUCT, NEVER THE SOURCE. A line-based
 * `grep -n 'point of your shoulder' site/src/diagrams/*.mjs` under-reports,
 * because the phrase is split across string-concatenation boundaries in at
 * least two captions — `offensive_zone_play.mjs` records one such near-miss at
 * its `oz-cycle-rim` caption. The census that scoped this repair was run with
 * `node -e` over `diagrams.json`.
 *
 * ---------------------------------------------------------------------------
 * WHY THE CLAUSE IS OWED WHEREVER THE POSTURE IS PRESCRIBED
 * ---------------------------------------------------------------------------
 * `content/technique/body_contact_and_battles.md` section 6 records "take the
 * wall on your shoulder" as folklore players and coaches "say constantly". A
 * caption that names the forearm and the hip and stops has not met that
 * folklore; it has merely failed to mention it, and a listener hearing the
 * caption voiced alone takes the positive prescription as the whole answer.
 *
 * USA HOCKEY'S OWN WORDING, ALL FOUR SENTENCES RE-READ THIS SESSION:
 *   sources/ibc.txt:1453  "Never hit the boards or glass with the tip of your
 *                          shoulder - it can cause injury"   (absolute, narrow)
 *   sources/ibc.txt:692   "Avoid hitting the boards with the shoulder"
 *                          (soft, broad; printed under the objective for a
 *                          player "checked while skating parallel to the
 *                          boards", which is this whole family of pictures)
 *   sources/ibc.txt:1537  "No shoulder contact on the boards, if possible"
 *   sources/huh.txt:647   the same sentence again, in Heads Up Hockey
 *
 * `body_contact_and_battles.md` reads those together and resolves them: "the
 * tip never, on any approach, and along your side the shoulder is not the
 * surface you are meeting the wall with, if you can help it. Forearm and hip."
 *
 * ⚠️ THE UNRECONCILED DRILL SENTENCE DOES NOT REOPEN THIS. Section 6 also
 * records USA Hockey's *Partner's Bump Along the Boards* teaching point, "turn
 * the far shoulder toward the boards", and declines to resolve it — but what it
 * declines to resolve is WHICH SHOULDER TURNS TOWARD THE CHECKER, not whether
 * the tip is ruled out. A caption comment in `breakouts.mjs` cited that
 * unresolved sentence as grounds for dropping this clause; it was wrong, and
 * dropping the clause deleted the one flat "never" USA Hockey writes here.
 *
 * ⚠️ HEDGE ORDER IS LOAD-BEARING: absolute first, hedge second. "not on the
 * point of your shoulder" is the narrow absolute; "not the whole shoulder if
 * you can help it" is the broad hedge. Reversed, the hedge attaches backwards
 * and a listener hears that the tip is negotiable. And it is "not", never
 * "never", for the whole shoulder — USA Hockey writes exactly one "never" here
 * and it is the tip.
 *
 * ⚠️ PLACE IT AFTER THE POSTURE, NEVER AFTER A PROHIBITION. The clause must
 * follow "forearm and hip … chin off your chest". Appended instead to "never
 * turn your back to anyone coming at you", its "if you can help it" attaches backwards to
 * an absolute. Three captions were restructured rather than have it appended
 * there.
 */

/**
 * The clause itself, bare, for mid-sentence use, between the forearm-and-hip
 * instruction and "head up and chin off your chest" — the placement
 * `content/positions/defender.md` uses in its retrieval paragraph ("forearm and
 * hip to the wall — never the point of your shoulder, and not the whole
 * shoulder if you can help it — head up and chin off your chest"). This used to
 * cite `breakouts.md` Key Takeaway 6; that takeaway is now about rims and
 * reverses, and breakouts' posture takeaway (KT3) no longer carries the shoulder
 * clause at all. Grep the quoted words rather than trusting a takeaway number.
 */
export const SHOULDER_NOT_THE_SURFACE =
  'not on the point of your shoulder, and not the whole shoulder if you can help it';

/**
 * The same clause as an appended tail, which is the form the caption layer had
 * already settled on: 9 of the 11 captions that carried it used these exact
 * characters, after "chin off your chest". Carries its own full stop.
 *
 * ⚠️ TWO CAPTIONS DELIBERATELY DO NOT USE IT, and neither is drift to be swept:
 * `angle-into-the-corner` (`body_contact_and_battles.mjs`) places the clause
 * mid-sentence, as its owner `body_contact_and_battles.md` does in its wall
 * bullet ("forearm and hip to it — not the point of your shoulder, not the whole
 * shoulder if you can help it"), and `scan-before-a-wall-reception`
 * (`scanning_and_anticipation.mjs`) opens with "— not on" rather than "— and
 * not on" because its preceding clause already runs on an "and". Both were
 * composed with the sources read and are left alone.
 */
export const SHOULDER_TAIL = ' — and ' + SHOULDER_NOT_THE_SURFACE + '.';

/**
 * The SHORT receiving posture, for captions that send a player to the wall in a
 * diagram whose subject is NOT board contact: `breakout-rim`, `breakout-reverse`,
 * `breakout-against-1-3-1` (breakouts.mjs), `forecheck-pinch` and
 * `forecheck-press` (forechecking_systems.mjs), and `puck-on-the-far-side` and
 * `the-last-player-back` (puck_handling.mjs).
 *
 * ⚠️ WHY SHORT. Owner ruling, 23 September 2026: the full posture is a key point
 * where the page is ABOUT board contact and too much detail where it was merely
 * inherited. These seven captions sit under sections about breaking out,
 * forechecking and puck protection, and every host that teaches wall play
 * carries the full mechanics in its own body or ```facts block beside the
 * marker. This replaced `WALL_POSTURE_INSTEAD` ("Get your skates parallel to the
 * wall instead, forearm and hip into it, head up and chin off your chest" +
 * SHOULDER_TAIL) on 22 October 2026.
 *
 * ⚠️ IT IS THE SG14 SHORT FORM, NOT A NEW ONE: "forearm and hip, never the point
 * of your shoulder", head up and chin off your chest. NEVER "side-on" — a
 * listener can hear that as leading with the shoulder.
 *
 * ⚠️ ORDER IS LOAD-BEARING: head up first, the shoulder negation LAST. Put "never
 * the point of your shoulder" before "head up" and the negation can carry across
 * the comma onto it, which is the inversion commit 49f1dc6 repaired.
 *
 * Reached as: "… and never duck. " + this. Carries its own full stop.
 */
export const WALL_POSTURE_SHORT =
  'Head up, chin off your chest, and take any contact on your forearm and hip, ' +
  'never the point of your shoulder.';
