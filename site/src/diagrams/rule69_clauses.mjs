/**
 * Shared Rule 69 caption clauses.
 *
 * ⚠️ THIS FILE EXPORTS STRINGS, NOT DIAGRAMS. It is deliberately absent from
 * `index.mjs`: nothing here is a spec, and adding it to `DIAGRAMS` would put a
 * bare object into the registry. `build-diagrams.mjs` and `check_absolutes.py`
 * only `stat()` the `.mjs` files in this directory — neither imports them all —
 * so a non-spec module here is inert to both.
 *
 * ---------------------------------------------------------------------------
 * Why this exists
 * ---------------------------------------------------------------------------
 * Four captions in four modules teach the goaltender-interference line, and
 * every one of them had been hand-copied:
 *
 *   oz-net-front-screen             offensive_zone_play.mjs
 *   screen-the-goalie-sightline     playing_without_the_puck.mjs
 *   winger-offensive-zone-patches   positions.mjs
 *   entry-wide                      zone_entries.mjs
 *
 * They had already drifted: three carried the referee-judgement hedge and the
 * fourth carried neither hedge, stating the rule flat with no book and no rule
 * number, until it was repaired. That is the shape of commit 9e2e344, "a crease
 * rule told wrong in twelve documents" — n hand-written copies of one rule, each
 * corrected separately or not at all.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ Why the fix is NOT to delete the copies
 * ---------------------------------------------------------------------------
 * `md_to_speech.py:663` emits `"Diagram. " + entry["caption"]` and nothing else.
 * `describe` is never voiced. There is no cross-caption reference mechanism in
 * speech, and a listener meets each diagram in isolation with no way to glance
 * back at a neighbouring one. Centralising by REMOVAL would delete a safety
 * counterweight from three listeners' ears while leaving the page unchanged, so
 * the site would look fine and the audio would be the thing that got worse.
 *
 * So all four still SAY it. What is centralised is the text, not the telling: a
 * correction here reaches four captions in one edit, and each listener still
 * hears the whole clause.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ Settled ground. Do not reopen or re-word.
 * ---------------------------------------------------------------------------
 * Rule 69.1 does not contradict its own appendix. Clause (1) sits under "Goals
 * should be disallowed only if" — a CEILING on when a goal may be disallowed,
 * not a direction to disallow one — and every provision that voids a goal for
 * position names the crease. 69.4, the rule for outside the crease, reaches
 * CONTACT only. That is a reading of the rule's STRUCTURE and neither book says
 * it in terms, which is why `REFEREE_JUDGEMENT` travels with it everywhere.
 *
 * ---------------------------------------------------------------------------
 * ⚠️ These constants were extracted BYTE-IDENTICAL from the four captions.
 * ---------------------------------------------------------------------------
 * They were lifted by longest-common-substring over the four assembled caption
 * strings, not retyped, and the refactor was verified by dumping every caption
 * in `DIAGRAMS` before and after and diffing: zero rendered bytes changed.
 * Anyone editing a string here is changing four captions at once and owes the
 * same check. Note the typographic apostrophes (’) — this corpus uses them, and
 * a straight quote here is a silent one-byte caption change in two diagrams.
 *
 * The joining words are NOT here on purpose. Each caption keeps its own lead-in
 * ("So keep your feet out of the blue paint, and off ", "; ", " — ") because
 * those differ per diagram and folding them in would have forced a rendered
 * change. Nothing below begins or ends with a space.
 *
 * ⚠️ NOT centralised, and must not be without a safety-reviewer: the 1,187-char
 * counterweight shared by `forecheck-122` and `forecheck-131`. It is that
 * reviewer's remedy for two Critical gradings, and the symmetry with this file
 * is not a reason to touch it.
 */

/**
 * The crease LINE is part of the crease — so "outside the paint" means clear of
 * the line too, not standing on it. Used by all four captions.
 *
 * Sourced in the owning documents; three books agree, which is why all three are
 * named. Reached as: "…keep your feet out of the paint, and off " + this.
 */
export const CREASE_LINE_IS_THE_CREASE =
  'the crease line at its edge, which the IIHF, USA Hockey and Hockey Canada all ' +
  'count as part of the crease';

/**
 * The hedge that must travel with any structural reading of Rule 69, because the
 * structural reading is ours and the referee's discretion is the books' own.
 *
 * Used by `oz-net-front-screen`, `winger-offensive-zone-patches`, `entry-wide`.
 * Reached as: "…rather than anything either book states in terms, and " + this,
 * or "…states in terms; " + this. Ends the sentence, so it carries its own stop.
 */
export const REFEREE_JUDGEMENT =
  'both add that Rule 69 is enforced exclusively in accordance with the on-ice ' +
  'judgement of the Referee(s).';

/**
 * The reference-table citation: the books' OWN worked examples putting a
 * vision-obstructing attacker outside the crease on the allowed side.
 *
 * ⚠️ This is the most stale-prone string in the four captions, because it
 * carries an edition renumbering (IIHF Appendix IV Table 16 in 2025/26 became
 * Table 14 in 2026/27). It was hand-copied into two captions. When the next
 * edition moves it again, this is the one place to change.
 *
 * Used by `oz-net-front-screen`, `screen-the-goalie-sightline`. Reached as:
 * "Both books’ own reference tables agree, " + this, and "…apply exactly that
 * line, " + this. Carries no terminal stop — the caller supplies it.
 */
export const TABLES_ALLOW_OUTSIDE =
  'allowing the goal where an attacker plants himself outside the crease and ' +
  'obstructs the goalie’s vision (NHL Table 14, and IIHF 2025/26 Appendix IV ' +
  'Table 16, renumbered Table 14 in 2026/27, at Situation 5E)';

/**
 * What the tables' disallowed rows have in common — the sentence that stops a
 * reader concluding the test is whether the screener was moving.
 *
 * Used by `oz-net-front-screen`, `screen-the-goalie-sightline`, in both cases
 * immediately after `TABLES_ALLOW_OUTSIDE` but joined differently (" — " and
 * "; "), which is why it is a separate constant.
 */
export const DISALLOWED_ROWS_SHARE_THE_CREASE =
  'what the disallowed rows have in common is the attacker being inside the ' +
  'crease, not whether he is moving.';
