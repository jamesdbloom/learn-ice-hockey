# The second backlog wave

This record covers the fifth commit of the day (excluding the renderer fix, which landed separately).
Five agents ran in parallel: four closed specific Common-Mistakes/Key-Takeaways gaps found by an
earlier sweep, one continued that sweep on the remaining unchecked documents.

## Scope

```
content/foundation/uk_rules.md
content/systems/faceoffs.md
content/systems/neutral_zone_systems.md
content/systems/offensive_zone_play.md
project/plans/OPEN_ITEMS.md
```

## 1. Four content fixes, all self-refuted and independently verified

- `neutral_zone_systems.md` and `offensive_zone_play.md` — clean propagation of already-verified body/
  facts/Common-Mistakes content into Key Takeaways: the icing/line-change bar (Rule 81.4 and its
  cross-book divergence), Rule 69.7's rebound carve-out, and the high-stick crossbar-vs-shoulder
  divergence. All citations independently re-verified.
- `faceoffs.md` — closed the post-whistle-scrum draw-relocation gap, correctly distinguished from the
  pre-draw encroachment rule already stated in the same Key Takeaways item.
- `uk_rules.md` — the authoring agent refuted a wrong premise in its own brief (Key Takeaways item 4
  did not already mention SIHA, contrary to what the brief claimed) and avoided writing a dangling
  cross-reference as a result. It also surfaced, without resolving, a genuine interaction question:
  how does the women's-under-18 full-face rule interact with the BUIHA half-visor floor in the same
  item?

## 2. Safety review: one Major, one Minor, both fixed

A `safety-reviewer` traced the flagged uk_rules.md question into the primary source and found the
real gap was different from what was worried about. An ordinary BUIHA fixture has no under-18
population — the source states this directly — so the originally-feared misreading doesn't arise
there. But the *same* source carves out the one case where an under-18 player does appear: a BUIHA
team's challenge match against a non-BUIHA opponent, where that opponent's own under-18 player is
bound by the standard age-based full-face rule, not BUIHA's half-visor floor. Neither the body nor the
new Key Takeaways sentence disclosed this narrow but real carve-out.

**Fixed** by adding the carve-out to the body's BUIHA bullet, verified against
`sources/eiha_inhouse_2026-27.txt:660-669` directly. While fixing it, caught a self-introduced
quote-drift defect — the new quote ended with a period where the source sentence continues ("...apply
(see Rule 25).") — the exact "dangerous" drift shape this project's tooling exists to catch, since it
presents a continuing sentence as complete. Corrected by moving the period outside the quote marks.

⚠️ **The fix was incomplete, and a subsequent commit-gate caught it.** Only the body bullet was
updated — the Key Takeaways sentence added in the same diff still stated the old, overclaiming
wording ("binding on every player in a BUIHA game"), directly contradicting the body three paragraphs
above and reintroducing the exact defect the safety review had just closed, in the layer a listener is
most likely to hear alone. Fixed by carrying the same carve-out into the Key Takeaways sentence. A
targeted `rules-verifier` pass then independently re-verified every citation across all four files in
this wave (not just the corrected one) and found no other errors — D1/D2/D3 explicitly checked and
held, including two negative-existence claims (USA Hockey's absent post-icing substitution bar; USA
Hockey/Hockey Canada's absent rebound/loose-puck carve-out) attacked and confirmed rather than assumed.

Also found and fixed a Minor in `faceoffs.md`: "that outer edge," introduced with no preceding "outer
edge" noun phrase in the same Key Takeaways item, is an antecedent a listener can't resolve alone.
Reworded to "the outer edge of the circle," self-contained.

`neutral_zone_systems.md` and `offensive_zone_play.md`'s fixes were confirmed safe outright, with no
findings.

⚠️ **The fix recurred a THIRD time, found only on a subsequent commit-gate pass.** `uk_rules.md`'s
Common Mistakes bullet ("Playing English university hockey and reading past the half-visor minimum")
still carried the original overclaim — unchanged by either of the first two fixes, since the body and
Key Takeaways fixes were each treated as complete without a document-wide sweep for the same claim.
Fixed a third time, then an exhaustive corpus-wide grep for "BUIHA" was run (rather than assume this
was the last instance): found no fourth site within `uk_rules.md`, and one related-but-distinct
instance in `content/off-the-ice/equipment.md` (two sites, phrased narrower — "BUIHA players... need a
half visor... regardless of age" rather than uk_rules.md's original "every player in a BUIHA game" —
and already cross-referencing `uk_rules.md` as the owner document). Judged the `equipment.md` sites as
not the same defect and logged them separately in `project/plans/OPEN_ITEMS.md` rather than fixed here.

A further independent re-check then found the third fix existed only in the working tree and had never
been re-staged — the index still held the old, overclaiming Common Mistakes text. Corrected before any
commit. A final, fresh reviewer confirmed all three layers now state the carve-out consistently, no
fourth site exists anywhere in the staged file, both quotations verified character-for-character
against `sources/eiha_inhouse_2026-27.txt:660-673` one more time, and the working tree matches the
index. This single-sentence carve-out took four independent review passes to land correctly in every
layer it touched — recorded here as the clearest instance this session of why "propagation is checked
exhaustively" cannot mean "checked once."

## Dimension coverage (C3)

**D1-D3** — CHECKED. Rules-verifier pass (§2) independently verified every new citation across all
four files, including two negative-existence sub-claims. **D4** — OUT OF SCOPE, no new external
citation (every quotation traces to a `sources/` file already on disk). **D5** — CHECKED as part of
D1-D3, no misattribution found. **D6** — OUT OF SCOPE, no "no study/count exists" claim added. **D7**
— CHECKED, no cardinal-rule violation: every claim names its book and correctly scopes exceptions.
**D8** — OUT OF SCOPE, no new bare statistic. **D9** — CHECKED, exhaustively (the wave's entire
subject). **D10** — OUT OF SCOPE, no ` ```facts ``` ` block touched by this wave. **D11** — CHECKED,
via the safety-reviewer pass in §2, including the incomplete-fix correction. **D12** — CHECKED via
the faceoffs.md antecedent finding and fix. **D13** — OUT OF SCOPE, no folklore claim added. **D14**
— CHECKED via `check_links.py` (clean throughout). **D15** — OUT OF SCOPE, no `site/` or diagram file
touched.

## 3. The sweep continues: 10 more documents checked, 8 more genuine gaps found

Coverage moved from 18/39 to 28/39 documents. Five clean (`technique/skating.md`,
`off-the-ice/conditioning_and_recovery.md`, `positions/switching_positions.md`,
`foundation/rink_map.md`, `hockey-iq/scanning_and_anticipation.md`). Five with genuine findings, none
fixed in this wave:

- `off-the-ice/equipment.md` — three broken-stick rules (skating with one, disposing of one over the
  boards, a goaltender playing on with one) absent from Key Takeaways entirely.
- `off-the-ice/team_play_and_culture.md` — "sitting on the boards," explicitly flagged in the body as
  the one real, penalised, physically dangerous bench-culture rule, absent from Key Takeaways.
- `technique/puck_handling.md` — three rule-dense gaps: the can-opener/stick-between-the-legs rule;
  kicking an opponent (a match penalty in three of four books); grabbing a puck in your own crease.
- `technique/passing_and_receiving.md` — the same kicking-an-opponent gap (recurring identically in
  `puck_handling.md`), and high-stick contact with an opponent's head/face/neck — the longest Common
  Mistakes bullet in the document, entirely absent from Key Takeaways, flagged by the reviewer as the
  strongest safety finding of the whole sweep to date.
- `hockey-iq/playing_without_the_puck.md` — charging/bumping a goaltender in the crease (major plus
  game misconduct in all four books) absent from Key Takeaways, which covers only the sightline side
  of goaltender contact.

Six documents remain genuinely unchecked: `foundation/language_and_glossary.md`,
`foundation/core_principles.md`, `off-the-ice/how_to_watch_hockey.md`,
`off-the-ice/practice_and_development.md`, `hockey-iq/puck_support_and_spacing.md`, and
`getting-started/getting_started.md` (the reviewer could not locate this last one at the path given —
it sits under `content/getting-started/`, not `content/foundation/`).

## What this record could not have found

None of the four fixed files, nor the sweep's newly-found documents, were rendered through the actual
TTS pipeline. The eight new findings from this wave's sweep continuation are scoping only — none
fixed, none independently re-verified against primary source by a second reviewer. The sweep's own
stated bias (more alert to Common-Mistakes-has-it/Key-Takeaways-lacks-it than the reverse direction)
means a Key-Takeaways-only claim missing from Common Mistakes could exist unfound in any of the 28
documents checked so far. No cross-document check was run for whether the kicking-an-opponent gap
recurs in a third document beyond the two now confirmed.
