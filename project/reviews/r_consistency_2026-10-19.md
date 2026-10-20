# R (19–20 October 2026): remaining consistency rows after the P round

Three author agents worked on disjoint files (brief: session scratchpad `r/brief.md`). The coordinator applied the reviewers' sketch fixes.

## Changes

- **EIH R&R 22.3: remaining sites aligned to "its scope and standing unsettled".** 22.3 names no competition (eih_rr.txt :999); only 22.2 says "EIH competitions" (:992).
  - Sites: rink_map :303; neutral_zone_systems :553/:569; center :394/:421; offensive_zone_play :820/:835; special_teams :354/:371/:1047/:1057.
  - The removed "suspended it for its own competitions" (rink_map) overstated the text.
- **Elite League claim narrowed to what was searched.** "Nothing the Elite League publishes switches [IIHF 27.7] off" → "nothing in the Elite League's Casebook…".
  - Corpus-wide, about 20 sites, plus the variant wordings at time_and_space :497 and puck_support :424.
  - The Casebook (eihl_casebook.txt) has no Rule 27 and falls back to the 2026-27 IIHF book (Preamble :206-208). It also refers to EIHL regulations not on disk.
  - The ambiguous "it adopts" became "the Casebook adopts" (rink_map, faceoffs, neutral_zone_systems).
- **faceoffs :949:** the PWHL clause keeps "not for the penalized team: 15.5". An interim "likely" was removed on the rules-verifier's advice, because 15.5 says "in all circumstances" and the flat reading is the conservative one.
- **body_contact:**
  - Key focus :31 and KT6 now say "a hit that **stays on the back** ends your game in every book here but USA Hockey and the IIHF". The reason: HC 7.6 "supersedes any other rules", and 7.6(a) is a minor for accidental head contact in minor/female hockey.
  - CM :1972 now reads "The NHL, PWHL and IIHF have no minor, and the IIHF's major, with an automatic game misconduct, is the referee's call — plan on it" (final wording; see "Commit gate BLOCK and fixes").
- **Board-posture mechanics demoted where inherited** (owner ruling of 23 September): defensive_zone_coverage (facts, CM, KT10) and forechecking_systems (two facts lines merged; CM).
  - "Never turn your back to the checker, never duck, keep your head up and your chin off your chest" is kept in every layer.
  - The mechanics (skates parallel, forearm and hip, never the point of the shoulder) stay in both bodies and in body_contact §6.
- **Refuted:** the "Glossary reason repeated" row. The hit-from-behind reason already appears at most once per document; the extra hits were late-hit Vulnerable Position quotations, which are a different act.

## Review

- **rR, rules-verifier: CLEAR.** Checked EIH 22.2/22.3/1.1, the EIHL Casebook (swept flattened; no Rule 1 or 27), PWHL 15.5/78.8/84.1, IIHF 43.2/43.3 (both editions), HC 7.5(a)/7.6, NHL/PWHL 43, and CARHA 53, and found no limb dropped in the trimmed facts lines.
  - MINORs: the "likely" hedge on faceoffs :949 (applied: removed); CARHA 53's Note on "stays on the back" (harsh direction, no change).
- **rS, safety-reviewer: CLEAR.** Nothing permissive, no tariff lost. The posture limbs survive in every layer. Four documents were rendered.
  - Three MINORs, all applied by the coordinator:
    - two un-narrowed Elite League facts lines;
    - the merged forechecking "Never:" lines now read "— keep your head up and your chin off your chest";
    - "the Casebook adopts".
  - These edits are confined to the findings and use the reviewer's own wording.

## Commit gate BLOCK and fixes

The first gate BLOCKED on C3/D9/C8. The corrected 22.3 and Elite League claims had not reached the **caption layer**:
- rink_map_and_glossary.mjs (rendered on rink_map, rules_primer, goaltender and how_to_watch_hockey) said the 22.3 suspension "covers only its own competitions";
- goaltender.mjs said "is written for its own competitions";
- both said "nothing the Elite League publishes";
- zone_entries.mjs carried "in its own competitions" too.

The coordinator rewrote all three captions to "nothing in the Elite League's Casebook switches it off" and to scope and standing "unsettled". A grep finds no other caption carrying the old wording. The diagrams were rebuilt (site/src/data/diagrams.json) and check_absolutes certified the caption layer.

**A rules-verifier (cR) on the captions: 1 and 3 CLEAR.**
- goaltender's "England Ice Hockey's "not currently enforced" are unsettled" did not parse when voiced. It is reworded to "whether England Ice Hockey's rule calling it not currently enforced still stands, and where, is unsettled".
- zone_entries' "nothing published settles" was wider than the search. It now reads "that rule's scope and standing are unsettled".

**body_contact CM ~:1972:** the gate suggested restoring the IIHF's no-minor. cR then found that "the IIHF's major is the referee's call" dropped 43.3's automatic game misconduct, which understates an ejection (permissive). It now reads "The NHL, PWHL and IIHF have no minor, and the IIHF's major, with an automatic game misconduct, is the referee's call — plan on it" (IIHF 43.2/43.3, both editions).

**special_teams :1047:** dropped "not the NHL's 27.8." to fit the cap; :1044 still carries "NHL 27.8, IIHF 27.7".

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/on_ice_communication.md | +4/−4 |
| content/foundation/rink_map.md | +1/−1 |
| content/foundation/rules_primer.md | +1/−1 |
| content/hockey-iq/puck_support_and_spacing.md | +2/−2 |
| content/hockey-iq/time_and_space.md | +2/−2 |
| content/positions/center.md | +2/−2 |
| content/positions/defender.md | +2/−2 |
| content/positions/goaltender.md | +1/−1 |
| content/systems/breakouts.md | +1/−1 |
| content/systems/defensive_zone_coverage.md | +5/−5 |
| content/systems/faceoffs.md | +3/−3 |
| content/systems/forechecking_systems.md | +3/−5 |
| content/systems/neutral_zone_systems.md | +2/−2 |
| content/systems/offensive_zone_play.md | +2/−2 |
| content/systems/special_teams.md | +4/−4 |
| content/technique/body_contact_and_battles.md | +3/−3 |
| site/src/diagrams/rink_map_and_glossary.mjs, goaltender.mjs, zone_entries.mjs (captions) and site/src/data/diagrams.json (build product) | caption repairs |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rR (all claims above, by source); rS re-derived EIHL Casebook, 22.2/22.3, PWHL 15.5/84.1, HC 7.5/7.6, IIHF 43 |
| D2 exceptions | HC 7.6 supersession; PWHL 15.5 vs 84.1 |
| D3 divergence | PWHL 15.5 (penalised team may not change) |
| D4/D5 citations | 22.3 quotations verbatim; Casebook Preamble |
| D6 negatives | "Nothing in the Casebook" scoped to the document searched |
| D7 cardinal rule | "Plan on" for readings |
| D8 numeric ownership | No figures |
| D9 summary layer | Claims fixed in every content layer and, after the gate, in the caption layer (three diagrams); posture layer test in a table (r3) |
| D10 facts | check_facts passes; the forechecking block went from 8 to 7 coaching facts |
| D11 safety | rS CLEAR |
| D12 read-aloud | body_contact, dzc, forechecking and faceoffs rendered by rS; authors rendered all their files |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; links pass |
| D15 site | Full build after the final content edit (diagrams rebuilt, then dist 00:08 after the final edit at 00:07:41); --bare 0; --panels 0 |

## Gates (no pipes, after the final content edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 16 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- **EIHL documents not on disk.** Regulations or bulletins that touch the restricted area. Any later EIH/IHUK document on 22.3.
- **PWHL interpretation.** Any PWHL casebook resolving 15.5 against 84.1.
- **Diagram captions** still voice the full posture mechanics in forechecking (plan row). The 22.3 caption sweep was a grep for the old phrases.
- **Paraphrases** of the narrowed claims that lack the swept phrases.
