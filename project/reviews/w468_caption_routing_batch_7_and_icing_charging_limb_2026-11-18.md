# W468: caption routing batch 7 — eight rules-primer, risk, scanning and time-and-space captions under 150 words; the icing caption gains its charging half; cross-ice leads with the owner's own example (18 November 2026)

**Files changed**
- Diagrams:
  - site/src/diagrams/rules_primer.mjs
  - site/src/diagrams/risk_management.mjs
  - site/src/diagrams/scanning_and_anticipation.mjs
  - site/src/diagrams/time_and_space.mjs
  - site/src/data/diagrams.json (rebuilt)
- Also: project/plans/OPEN_ITEMS.md and this record
- No `content/` file changed.

## Source
- **Plan rows:**
  - From W467 (4): next caption batches.
  - The W467 gate's note: verify "leaving your feet to hit is charging in all six".
- **Authors:** four agents, one per module. The coordinator built once.

## Captions
| id | words: HEAD → now | amber at 400 |
|---|---|---|
| icing-the-race-and-the-dot | 183 → 148 | 40.1% |
| offside-faceoff-location | 189 → 148 | 0 |
| cross-ice-in-your-own-end | 180 → 150 | 28.9% (HEAD 44%) |
| pinch-centre-below-the-goal-line | 152 → 145 | ~31–35% |
| lane-jump-guess | 173 → 129 | 0 |
| scan-before-a-wall-reception | 191 → 149 | 8.4% |
| deny-the-reception | 159 → 148 | 0 |
| show-one-shoulder-open-the-other | 185 → 145 | 0 |

**Cut:** restatement the host voices beside the marker, checked with a per-host layer test.

**Kept:**
- every posture limb;
- the race-is-no-licence-to-hit and boarding limbs;
- the 83.6/83.7 limbs;
- every find-out and coaching-choice limb;
- the last-player-back limb in lane-jump.

**Wording changes:**
- **cross-ice** now leads with the owner's worked example, "Never pass across the front of your own net." It keeps the designed-breakout alternative.
- Its ⚠️ moved off "No contact is drawn" onto the posture instruction.
- **lane-jump-guess:** "it IS the right play" became "it CAN be", which is more cautious coaching advice.

### Fixes from review
1. **icing: the charging half was missing.** This was already in HEAD and was permissive; the diagram-reviewer found it. NHL 41.1, IIHF 2026/27 41.1, PWHL 41.1 and Hockey Canada 7.2 all read *"…which results in that player hitting or impacting the boards is 'boarding'… In other instances where there is no contact with the boards, it should be treated as 'charging.'"* The caption said only "boarding if they hit the boards". It now says "boarding if they hit the boards, charging if not".
   - **Coordinator sweep of the prose:** rules_primer :353, bcb :737, winger :663 and FS :977 already carry the charging half. bcb :1590/:1599 and dtr :439 describe the boards case only, as protection for the player being hit, so they are not permissive.
2. **cross-ice: "made only into an empty middle".** The diagram-reviewer rated this Major: it turned HEAD's condition into a pass target. It now reads "made only when the middle is empty". The safety reviewer's "Skates parallel to the wall" was added inline; WALL_POSTURE_SHORT drops it, and the shared constant is untouched.
3. **deny-the-reception: lead cut.** The diagram-reviewer rated this WORSE, because "Drawn as one instance:" pointed at nothing straight after "Diagram.". It now opens "Deny the reception, not the pass." The author kept "The read is the same wherever the pass goes", refuting the reviewer's proposal to cut it: it is a different claim from the closing line.

### Rules read: "leaving your feet to hit is charging in all six" (defender-step-up)
**TRUE.** No change was needed. The claim is not repeated in defender.md.
- NHL and PWHL 42.1: "jumps into".
- IIHF 42.1: "jumps to check an opponent".
- USA Hockey 607 Note: "leaving one's feet (jumping)". Its Casebook 607 Situation 1 says a charging penalty "must be called".
- Hockey Canada 7.4(i): "Jumps to check an opponent", before contact (Interpretation 1).
- CARHA 52(a): "runs or jumps into".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All OK: the hybrid tie clause in NHL 81.1, IIHF, PWHL 83.1 and HC 6.7(e)(iv); USA Hockey 624 is not hybrid, which the caption's "ask which icing" covers; 624(d); 83.6/83.7, which PWHL prints word for word at 85.6/85.7. The "leaving your feet" read is above. |
| safety-reviewer | CLEAR. The four glyph captions say "Important." ×1 per voiced copy across 7 hosts. The W468b confirmation of all three fixes is CLEAR. show-one-shoulder's cut "fake nothing" warning is voiced by the host in the same chunk; restoring it (+22 words) was declined. |
| diagram-reviewer | 6 BETTER or NO WORSE, 1 Major, 1 WORSE, plus a pre-existing permissive gap. All three were fixed as above. All 8 PNGs match. |
| site-reviewer | 7 pages at 400 light/dark, on the 16:27:58 build. 0 bare, untreated or panels; ⚠️ counts equal HEAD; 0 console errors; every worst window unchanged where a baseline exists. |

### C11
The coordinator wrote no caption text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 16:27:58; the newest .mjs is 16:27:07.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass.
  - check_counts: no change.
  - check_caption_pairs: no violation.
  - check_callout_flow --bare: 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL/IIHF/PWHL 41.1, HC 7.2, 81.1/83.1, HC 6.7(e)(iv), USAH 624(d), 83.6/83.7 and 85.6/85.7, and charging in six books |
| D2 Exceptions | the icing tie clause; the 83.7 deliberate case |
| D3 Cross-book divergence | USA Hockey runs no hybrid icing; the boarding/charging clause is the same in four books |
| D4 Citation integrity | rule numbers dropped from voiced text where a book name carries the scope |
| D5 Provenance | not engaged |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | cross-ice "Never" lead keeps its alternative; lane-jump "can be" |
| D8 Numeric ownership | the 89 ft arithmetic is in the host chunk |
| D9 Summary layer | caption vs host layer test; icing-clause prose sweep |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | dangling "one instance" fixed; negation seams closed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W468)
1. **lane-jump-guess** allows an own-zone jump when the read is far better than even, while the host's facts line says "Never: Jump … in your own zone". This tension predates the wave.
2. **scan-before-a-wall-reception.** The puck_handling host does not define "half-wall" until chunk 051, but the caption is voiced at 037. Restoring "level with the dot" costs +3 words, which would take the caption over 150.
3. **pinch-centre-below-the-goal-line.** The amber from the shared PINCH_CAVEATS constant sits on a disclosure rather than an instruction.
4. **22 captions** are still at or above 150 words.

## What this method could not have found
- Whether shorter captions teach faster.
- Real synthesised audio of the new strings.
- CARHA and IHUK icing-contact clauses: the caption names neither.
