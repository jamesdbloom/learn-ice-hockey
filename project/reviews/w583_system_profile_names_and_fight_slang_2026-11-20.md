# W582–W583: system-profile facts lines name their system, "when it goes up" becomes "a fight or scuffle", and Goal lines state aims rather than guarantees (20 November 2026)

## W582 census (content-reviewer, read-only)

The census looked at system-profile facts lines labelled `Countered by:`, `Position:`, `Goal:` and `Targets:` (39, 237, 178 and 23 lines). Each is voiced alone with its label.

**Result:** 58 lines name their system only in the heading. They are 30 of the 39 `Countered by:` lines, 26 `Goal:`/`Position:` lines in system blocks, and 2 pointer or subjectless lines elsewhere. The table is at `scratchpad/w582/defects.tsv`. About 45 OPTIONAL rows, where the formation is evident without its name, are in `census_ok.tsv` and were not applied.

**Lines that were wrong when heard alone, not merely unnamed:**
- nz :164: "Do not stop the attack" sounded like a universal instruction.
- nz :451: "you cannot be beaten wide" is true only when backing off.
- dtr :733/:766: "Deny the zone entirely" and "Nothing gets behind you" contradicted each other.
- special_teams :432: true only at 5-on-3.
- breakouts :376: no subject at all.

**Second opinions (both confirmed as defects):**
- team_play KT11 and KT12: the slang "when it goes up" is undefined anywhere in the corpus, and these Key Takeaways carry an ejection tariff.
- special_teams KT4: "before it reaches your zone", where "it" landed on "the penalty".

## W583 edits (four agents; brief `scratchpad/w583_common.md`)

**System names.** All 58 rows were applied, plus the nz Read lines :424 and :452, which agents found to be opposite instructions with no subject, and dtr :436 ("Steer the carrier").
- Twin lines were kept matched: forechecking :468 with nz :272, and nz :423 with zone_entries :1096.
- About 12 sketches were reworded to keep each claim's scope. Examples:
  - dtr :469: "the defender not taking the puck".
  - breakouts :547: "As a winger, by default on the strong-side wall…".
  - nz :137: "the side the 1-2-2 is forcing".

**team_play.** "When it goes up" became "a fight or scuffle" at all seven sites: :42, :268, :270, :474, :660, KT11 and KT12. "Scuffle" keeps the "any altercation" scope that four books price. No tariff word changed. A corpus grep found no other document using the slang.

**special_teams KT4:** "Kill the penalty before the power play reaches your zone."

**Aims, not guarantees (the safety-reviewer's optional finding, applied).** Six Goal lines had become outcome claims and now state aims:
- dtr :733 "Stand up to deny the zone entirely…"
- dtr :766 "Back off so nothing gets behind you…"
- nz :164 "The trap aims to funnel the attack to a wall and kill it at the red line rather than stop it…"
- nz :423 and ze :1096 "…aims to…"
- nz :451 "…so pure speed alone should not beat you wide"
- nz :239, and its body twin :257: "the one built to take the puck back rather than wait for a mistake"
- nz :456 (body): "Pure speed alone should not beat you wide"

No ⚠️ was added, removed or moved.

## Review

**safety-reviewer, with content check.** It read 65 lines across 10 files.
- No rule changed and nothing safety-relevant was narrowed.
- "A fight or scuffle" errs strict and fits the "any altercation" scope.
- Every renamed subject is correct.
- One optional pattern (Goal lines as guaranteed outcomes) was applied as above, together with the body twins.

## Rows

**Closed:** the W580 `Countered by:`/`Goal:`/`Position:` census row, and the team_play and special_teams near-misses.

**Still open:**
- About 45 OPTIONAL system-profile rows.
- `Risk:` and `Options:` lines outside system blocks (about 490).
- Homonym collisions (overload, 1-3-1, box, +1).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_links --quiet`: run after this record was written.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w583.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost in every file.

## What this method could not have found

- **Audio.** Not rendered.
- **Whether a listener who knows the jargon** ("the fox", "middles") needs these names at all.
- **The unread label classes.**
