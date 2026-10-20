# LO (20 October 2026): per-page leftover rows

Brief: scratchpad `lo_brief.md`. Five agents tested every row in OPEN_ITEMS' "Cross-file claim sweeps" and "Per file" lists against the current text.

| Agent | Files |
|---|---|
| lo-a | rules_primer, uk_rules |
| lo-b | body_contact, game_management, goaltender |
| lo-c | defender, winger, center, switching_positions, passing_and_receiving, risk_management |
| lo-d | eight systems pages |
| lo-e | puck_handling, shooting, glossary, rink_map, on_ice, equipment, conditioning, playing_without_the_puck, time_and_space |

Most rows were STALE, already fixed by earlier waves; each agent recorded the evidence. The live fixes are below.

Review: lo-aR (rules-verifier), lo-bR, lo-cR, lo-dR and lo-eR (safety-reviewers).

## Fixes

- **Board posture inherited from Body Contact, per the owner's KEEP/DEMOTE ruling.**
  - Demoted where the page only inherited it: on_ice_communication :108, defender KT10, switching_positions :434, passing_and_receiving facts :541 / body :553 / CM :831 / KT14, and the zone_entries §5 repetition.
  - "Never turn your back, never duck, head up" survives in every layer that carries board contact.
  - lo-cR found that passing's "stick and gloves up on the glass" fallback had become facts-only. The coordinator restored one body sentence: "Caught facing the wall and unable to turn, put your stick and gloves up on the glass to spread the impact — damage limitation, not a position to aim for."
- **body_contact :88/:89.** Four overlapping CARHA facts lines were merged into two.
  - **lo-bR MAJOR.** The merge dropped "other than with a stick", so accidental stick contact to the head read as a minor. It is a major under CARHA 62(b).
  - The coordinator restored it as "accidental non-stick head, face or neck contact is a minor (50(a))" and trimmed "CARHA-affiliated adult" to "CARHA adult" to stay within the 300 cap. The scope is unchanged.
- **Amber runs opening on a citation.** The hazard now leads at:
  - body_contact :618, :754, :1327, :1333, :1675, :1779, :1837;
  - game_management :919 (CARHA 49(a));
  - goaltender :674 (CARHA 61(b)).
  
  lo-bR confirmed that each claim is unchanged.
- **rules_primer.**
  - **:934, second faceoff violation.** It now gives USAH 613(d) and Hockey Canada.
    - lo-aR MAJOR: the first wording gave Hockey Canada's discretionary half only.
    - The coordinator added "but must give if the player who committed it then contacts the linesperson, or on a repeat violation on a Junior draw after an icing (6.5(b))", per hc.txt 6.2(e) paragraph 2 and 6.5(b).
  - **PWHL 80.5** is added to the disallowed-goal list.
  - **§10 table.** The USAH checking-from-behind cell gains "plan on the match if reckless (608(c), 602(a))".
  - **Markers.** lo-a removed two ⚠️ markers that sat on disagreements, not hazards. Following lo-aR, the coordinator moved both onto the paragraph's mandatory tariff and its instruction, so neither paragraph loses its spoken escalation. check_marker_pairs: 0 LOST.
- **shooting trailer.** The IIHF warm-up rule is now 86.6, not 5.6.
- **playing_without_the_puck :715.** "None in the IIHF" is now "the IIHF has no match but can eject (42.4)". lo-eR confirmed that neither IIHF book has a match penalty.
- **passing CM :838.** The rule now reads "In every book a kick means a deliberate one — USA Hockey adds a reckless one" (627(b)).
- **special_teams.**
  - 1-1-2 prevalence is reworded as an honest disclosure in the body.
  - The matching diagram caption (special_teams.mjs pk-nz-1-1-2) is changed by the coordinator. Diagrams were rebuilt, and check_absolutes certifies the caption layer.
  - A trailer provenance sentence on game-misconduct reporting is added; lo-dR verified it in all six books.
- **breakouts :650/:656.** The citation now reads "Hockey Canada 10.1". lo-dR notes that "10.1(i)" is equally valid and matches the corpus's "(ii)" style; a plan row is open for consistency.

## Files (`git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/on_ice_communication.md | +1/−1 |
| content/foundation/rules_primer.md | +5/−5 |
| content/hockey-iq/playing_without_the_puck.md | +1/−1 |
| content/positions/defender.md | +1/−1 |
| content/positions/goaltender.md | +1/−1 |
| content/positions/switching_positions.md | +1/−1 |
| content/systems/breakouts.md | +2/−2 |
| content/systems/game_management.md | +1/−1 |
| content/systems/special_teams.md | +2/−2 |
| content/systems/zone_entries.md | +2/−4 |
| content/technique/body_contact_and_battles.md | +9/−11 |
| content/technique/passing_and_receiving.md | +5/−5 |
| content/technique/shooting.md | +1/−1 |
| site/src/diagrams/special_teams.mjs | +3/−3 |

site/src/data/diagrams.json is rebuilt from the module.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | lo-aR (rules-verifier) on rules_primer; the safety-reviewers re-derived every changed tariff from sources/ |
| D2 exceptions | HC 6.2(e) and 6.5(b) mandatory limbs; CARHA 50(a) and 62(b) stick split; IIHF 42.4 |
| D3 divergence | per-book faceoff tiers |
| D4/D5 citations | quotations checked verbatim; the shooting trailer source corrected |
| D6 negatives | "no match in the IIHF" swept in both editions |
| D7 cardinal rule | the instruction leads every reordered amber run |
| D8 numeric | none |
| D9 summary layer | every posture demotion checked layer by layer (KT, CM, facts, body) |
| D10 facts | check_facts passes; body_contact :89 is at the cap |
| D11 safety | every reviewer: no CRITICAL or MAJOR after the fixes |
| D12 read-aloud | every changed unit rendered and heard alone |
| D13 folklore | out of scope |
| D14 structure | no headings changed |
| D15 site | diagrams rebuilt; full build after the final edit; --bare 0, --panels 0; the browser check is deferred to the site-reviewer row |

## What this method could not have found

- **Lexical blind spot.** A sibling copy of a claim that uses different words.
- **Pre-existing tariff gaps.** These sit inside long marker runs that no one has re-read clause by clause.
- **Listener perception.** How the amber and spoken escalation actually land with a listener.

## After the commit gate (BLOCK on C4/C11, rules_primer :934)

The coordinator's repair named "the taker" as the player whose contact with the linesperson makes Hockey Canada's minor mandatory. Hockey Canada 6.2(e) (hc.txt:4615-4619) names "the offending player". The repair is now "if the player who committed it then contacts the linesperson". The site was rebuilt after the edit.
