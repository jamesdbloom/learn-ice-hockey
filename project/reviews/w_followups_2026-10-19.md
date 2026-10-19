# Wave W (19 October 2026): follow-ups after IS. Echo fixes, captions, plan rows closed

## Changes

| File | Change |
|---|---|
| neutral_zone_systems | In-short :130 rewritten with the F1/F2/D2 roles (dropped a clause verbatim from :144). In-short :762 rewritten as a set play: "never creep before the drop" (it had been identical to the facts Action line and KT10). |
| defending_the_rush | In-short :50 rewritten (it echoed the facts Priority line) |
| faceoffs | In-short :155 and :379 rewritten. The strong-side definition had been spoken four times in one section. |
| goaltender | In-short :758 rewritten: "Stay in your net for a 50-50 puck, and if you do play the puck, commit and call…". The original sentence was restored to the body, where it sat in HEAD. |
| skating | In-short :53 cut to "Bend until your knees cover your toes." |
| playing_without_the_puck | In-short :189 rewritten (dropped a clause verbatim from the facts Goal line) |
| rules_primer | Body :893 trimmed of the clause its In-short states, with "in the offender's end" restored. In-short :871: "Stay in your crease…" (CARHA 37(c) penalises leaving the crease during a fight). |
| uk_rules | Guide sentence at :95 that restated its In-short removed (the quotation is untouched) |
| breakouts | :593, :604 and :888 scoped to "this guide's standard low zone collapse" |
| switching_positions | Blank line added before the `forcing-them-outside` marker (it was rendering inside a list item) |
| site/src/diagrams/puck_support_and_spacing.mjs | `support-a-battle-from-outside`: the caption's first half trimmed from 128 to 85 words to describe the picture, not repeat the prose. The ⚠️ tail is byte-identical. Explicit title "Supporting a wall battle from open ice" added and a stale comment fixed. diagrams.json rebuilt. |
| site comments and .claude/agents/site-reviewer.md | "No analytics / zero off-origin requests" claims corrected: production loads the Google Analytics tag (PUBLIC_GA_ID). |

## Plan rows closed without edits

- **HC airborne skate (raised by an IS rules-verifier):** the corpus was already right. The HC 6.11 preamble uses only skates in contact with the ice, and Interpretation 3 to 6.11(a) rules one skate above the line OFFSIDE (hc.txt:5381, :5477).
- **Slew-foot intent limb in siblings:** no sibling prices an HC or CARHA slew-foot.
- **puck_handling `you-cannot-beat-two` and `the-last-player-back` captions:** both depict the carrier, and "neither prohibition" correctly counts two.

## Echo census (report only, scratch wE)

- 447 In-short lines; 302 sit directly above a facts block.
- About 11 near-verbatim and about 25 strong partial echoes. The near-verbatim cases are fixed above. The partial echoes mostly carry safety limbs, so they were left on purpose.
- check_layer_echo cannot see the In-short layer.
- Owner design question recorded in the plan: In-short plus facts block in about 300 sections.

## Review

- **safety-reviewer on every content edit: CLEAR.** Three MINORs, all applied: the rules_primer :871 crease wording, the goaltender "play the puck" wording, and the rules_primer :893 antecedent.
- **diagram-reviewer on the caption: CLEAR.** The geometry was measured: the support player is 5.03 m from the pinned teammate, and the marking opponent is goal side. The ⚠️ tail is byte-identical.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules_primer :871 checked against CARHA 37(c), NHL 27.6, USAH Casebook 615 Sit. 26 and HC 7.10 Interp. 1. The HC 6.11 airborne question was settled at source. |
| D2–D6 | No rule claims changed beyond the above |
| D7 cardinal rule | breakouts scoped as this guide's standard |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Echo between the In-short and facts layers reduced |
| D10 facts | breakouts :593 within cap; check_facts passes |
| D11 safety | safety-reviewer CLEAR |
| D12 read-aloud | The echo census rendered faceoffs |
| D13 folklore | Out of scope |
| D14 structure | One marker blank line |
| D15 site | Full build after the last edit; --bare 0; the diagram rebuilt and reviewed |

## Gates (no pipes)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts all pass.
- marker_pairs: 0 LOST.

## What this method could not have found

- Echoes in different words from the line they repeat.
- Lines that echo layers the census did not compare.
- How the trimmed caption sounds in its spoken chunk.
