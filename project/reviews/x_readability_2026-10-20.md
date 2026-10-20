# X (20 October 2026): readability pages 5–7 — Equipment, Playing Without the Puck, Game Management

This round continues the owner's readability programme: page by page, worst first. Three author agents each owned one page (brief: session scratchpad `x/brief.md`, carrying the three MAJOR lessons from the V round). Each page then had its own safety-reviewer with a rules lens. The first review attempts failed on a network error and were re-dispatched. The coordinator applied the reviewers' minors in their own wording.

## Results (check_readability after its splitter fix, before → after)

| Page | Longest sentence | Paragraphs > 1,200 | KTs > 60 words |
|---|---|---|---|
| equipment | 106 → 60 | 0 → 0 | 4 → 0 |
| playing_without_the_puck | 129 → 90 (all remaining > 60 are in the unvoiced Notes; longest voiced 58) | 9 → 3 (all in the unvoiced Notes) | 2 → 1 (62, after a reviewer-requested clarification) |
| game_management | 118 → 60 | 1 → 0 | 2 → 1 (61, after a reviewer-requested clarification) |

## Changes, in brief

**equipment**
- KT2, KT3, KT6 and KT12 shortened. Two general limbs were dropped: KT2's "and keep the helmet on" and KT3's "Wear the helmet". Their penalty-bearing content is still carried (helmet removal before a fight or scrum and the USAH match in KT2; "if your helmet comes off, go to the bench" in KT6 and Key focus; "keep it on" in CM :813).
- Sentence splits.
- The kit-bag checklist, which had run together as one paragraph, is now bullets.
- The broken-stick quotation is shortened to its operative fragment (verbatim in NHL 53.2(iii) Note 2, IIHF 53.2(III) and PWHL 54.2(iii) Note 2).
- The body "retail error" note was removed; the disclosure stays in the Limitations trailer.
- A repeated flex sentence was cut.

**playing_without_the_puck**
- KT7 and KT11 shortened.
- About 15 voiced splits.
- The unvoiced Notes were split into list paragraphs for the site reader. No words were cut.

**game_management**
- KT10 and KT14 shortened. KT14 adds "forceful", which corrects HEAD's overbroad USA Hockey "must" (Casebook 608 Situation 1).
- Many splits.

## Review
- **x1S (equipment): CLEAR.** One MINOR, applied: "say it in the same words: no penalty is imposed".
  - Plan row: the :173 WNIHL quote can sound like an age-less half-visor permission.
- **x2S (playing_without_the_puck): CLEAR.** Two MINORs, applied:
  - KT11 "if it injures anyone" (CARHA 52(b) "an opponent");
  - Notes: "The USA Hockey Casebook situations do carry…", restoring the antecedent after the split.
- **x3S (game_management): CLEAR.** Three MINORs, applied:
  - KT14 "A late hit can cost a major". "More than a minor" undersold it, and every book can reach a major.
  - KT14 "Hit only if checking is allowed in your game".
  - :637 restores the search-method disclosure, "searched by rule number and by concept".

The reviewers re-verified against sources:
- USAH 615(c), 604, 607, 608 and the Casebook, 623, 639, 640;
- In-House 9.12 and 102;
- HC 3.6(e), 7.6, 7.7 with its Interpretations, 8.5;
- CARHA 49, 52, 86;
- NHL/IIHF/PWHL 43, 53.2 Note, 55.3, 57.4, 63.8, and the IIHF Late-hit and Vulnerable Position glossary entries.

No mandatory tier became "can", and no spoken "Important." was lost.

## Commit gate BLOCK and fixes

The first gate BLOCKED on C5 at playing_without_the_puck :949: a character changed inside a quotation with an unverifiable source. Fixed as above.

Also from the gate:
- game_management KT14 "A late hit can cost a major or more", because "a major" alone could sound like the ceiling;
- the equipment KT2/KT3 sentence in this record corrected;
- a plan row added for playing_without_the_puck ~:1124, "Situation 5 E, ⚠️ **And only one…**", a capitalised "And" after a comma with a mid-sentence glyph. That text predates this round.

 (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/hockey-iq/playing_without_the_puck.md | +53/−27 |
| content/off-the-ice/equipment.md | +19/−21 |
| content/systems/game_management.md | +18/−18 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | x1S, x2S and x3S re-derived every changed tariff from sources (listed above) |
| D2 exceptions | USAH 608(a) the only non-ejecting tier; Casebook 608 Situation 1 "forcefully" |
| D3 divergence | Out of scope (no change) |
| D4/D5 citations | The broken-stick fragment is verbatim in three books; the Heads Up Hockey quote is verified; the :949 quotation: the split had put a terminal period inside the closing mark of a quotation whose source is not on disk. The commit gate blocked on it (C5), and the period now sits outside the mark ("…in confined areas". It identifies…), so no character inside the quotation changes |
| D6 negatives | The game_management :637 search-method disclosure is restored |
| D7 cardinal rule | No change |
| D8 numeric ownership | No figures |
| D9 summary layer | Every changed KT checked limb by limb against HEAD; CM checked |
| D10 facts | No facts line changed; check_facts passes |
| D11 safety | x1S, x2S and x3S: CLEAR |
| D12 read-aloud | All three rendered by authors and reviewers; KTs and CM heard alone |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; links pass |
| D15 site | Full build after the final edit (rebuilt after the gate fixes); --bare 0; --panels 0; no site/ change |

## Gates (no pipes, after the final edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 3 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- Sibling documents repeating these KTs.
- Defects in unchanged text.
- How the loosened Notes list renders, and the new equipment checklist bullets, in a browser.
