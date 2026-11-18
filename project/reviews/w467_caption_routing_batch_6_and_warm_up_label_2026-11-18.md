# W467: caption routing batch 6 — nine OZP, game-management, neutral-zone and defender captions under 150 words; "meets the charging rules" corrected; warm-up physiology labelled (18 November 2026)

**Files changed**
- **Content:**
  - positions/defender.md (one word, :509)
  - off-the-ice/conditioning_and_recovery.md (one sentence, :353)
- **Diagrams:**
  - site/src/diagrams/offensive_zone_play.mjs
  - site/src/diagrams/game_management.mjs
  - site/src/diagrams/neutral_zone_systems.mjs
  - site/src/diagrams/defender.mjs
  - site/src/data/diagrams.json (rebuilt)
- **Also:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:**
  - From W465 (5): the next caption batches.
  - From W466 (3): the conditioning page's unsourced warm-up physiology.
- **Authors:** five agents, one per file. The coordinator built once, at the end.

## Captions
| id | words: HEAD → now | amber at 400 |
|---|---|---|
| oz-cycle-reverse | 188 → 147 | 36.2% |
| oz-cycle-rim | 162 → 136 | 39.5% |
| oz-net-front-screen | 180 → 149 | 10.4% (HEAD 27%) |
| six-on-five-one-point-stays | 175 → 142 | 14.7% (HEAD 28%) |
| five-on-six-clear-three-outcomes | 185 → 148 | 5.8% |
| nz-stand-up-at-the-line | 171 → 148 | 0 |
| nz-back-off-at-the-line | 171 → 145 | 0 |
| defender-step-up | 187 → 150 | 12.4% |
| defender-holding-the-line | 185 → 136 | 0 |

**Cut:** restatement the host already voices beside the marker. Each cut was layer-tested per host with md_to_speech.

**Kept:**
- every posture, charging, no-hit, find-out and coaching-choice limb;
- every 81.4, IIHF broken-skate and HC 6.7(d) limb;
- the 625(b)/69.1 zone cost and REFEREE_JUDGEMENT;
- the carry-in figure, with both of its owner's qualifiers ("roughly", "more than a decade old"), checked against zone_entries.md :32.

**Amber:** in five captions the glyph moved onto the closing instruction.
- oz-net-front-screen: the amber is now "Keep your feet out of the blue paint, and off the crease line at its edge" only.
- six-on-five: the amber is now the body-checking hazard only.

**Negation seams closed:**
- defender-step-up: "safe harbour in no book." had been a colon, which could flip into the permissive reading.
- nz-stand-up: "finishes into the carrier. That is deliberate:".
- oz-cycle-reverse: split the sentence that started "cannot draw momentum".
- five-on-six: the IIHF 82.1 clause.

### Review fixes
1. **defender-step-up: "a step-up meets the charging rules".**
   - Rules WRONG and diagram Major, found independently. "Meets" can be heard as "complies with".
   - The caption now reads "runs into the charging rules".
   - The identical phrase in content at **defender.md :509**, a pre-existing defect, is fixed the same way. Its amber run still forms.
2. **five-on-six: "Its goalie exception is for a pulled goalie, not yours".**
   - Rules WRONG. "Its" referred back to IIHF 82.1, and "not yours" was ambiguous.
   - Now: "Rule 81.4's goalie exception lets a team put back its own pulled goalie, and yours is in your net."

## Content: conditioning_and_recovery :353
- **Before:** "Raising muscle temperature increases the speed of contraction and relaxation, increases nerve conduction speed and reduces muscle stiffness."
- **Now:** "The usual physiological explanation is that raising muscle temperature speeds contraction, relaxation and nerve conduction and reduces muscle stiffness."
- **The practical sentence is unchanged.**
- **Search:**
  - No source on disk: `sources/*.txt` was flattened and swept for muscletemperature, nerveconduction, stiffness and similar terms.
  - None in the abstracts of the page's own Sources list, read via Europe PMC.
  - Two fetches failed (PMIDs 41981827 and 41574355), so those two papers are unchecked.
- **Wording:** the author wrote, then withdrew, a "not one the studies cited here measure" clause, because that negative was checked against abstracts only.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | net-front OK (69.1 zone-cost quote verified; NHL 1.7 depth). nz figure OK against its owner. 81.4/82.1/HC 6.7(d) OK. **Two WRONG**, fixed with its text: step-up "meets", five-on-six "Its…not yours". |
| safety-reviewer | CLEAR: 6 glyph captions say "Important." ×1 per voiced copy across 6 hosts; every charging and no-hit limb is kept. The center host's lost "three feet out" is not a safety loss, because the next center unit voices the red-line rule. Both oz-cycle captions keep the full wall limb, since WALL_POSTURE_SHORT drops "skates parallel". The :353 label is upheld. |
| diagram-reviewer | 6 BETTER, 2 Minor, 1 Major (all fixed). Pictures match: the net-front F is drawn about 9.6 ft off the goal line, consistent with "about eight feet" plus the drawn-depth disclosure. |
| site-reviewer | 7 pages at 400 light/dark on the 16:12:35 build. 0 bare/untreated/panels; ⚠️ counts equal HEAD; 0 console errors; every worst window unchanged. defender :509's amber forms. |

### C11
The coordinator wrote no content or caption text.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 16:12:35. The newest source is neutral_zone_systems.mjs at 16:12:01.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes (certifies), check_geometry and check_secrets pass.
  - check_counts: no change.
  - check_callout_flow --bare: 0. `--panels --file`: 0 on both content files.
- **Marker pairs:** check_marker_pairs: 0 LOST, 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL/IIHF 81.4, IIHF 82.1, HC 6.7(d), NHL 1.7, IIHF 69.1, USAH 625(b) |
| D2 Exceptions | 81.4 exceptions; IIHF broken skate |
| D3 Cross-book divergence | the 81.4/82.1 split and HC categories kept |
| D4 Citation integrity | "Rule" dropped from two citations; numbers kept |
| D5 Provenance | the warm-up mechanism is labelled; the carry-in figure's provenance is kept |
| D6 Negative existence | an unverified negative clause was withdrawn by the author |
| D7 Cardinal rule | coaching-choice disclosures kept |
| D8 Numeric ownership | carry-in figure checked against its owner, zone_entries.md |
| D9 Summary layer | caption vs host layer test; defender.md :509 propagated |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | "meets"/"Its" ambiguities fixed; seams closed |
| D13 Folklore | warm-up physiology labelled |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W467)
1. **oz-net-front-screen:** the center host no longer carries "three feet out is inside the paint". The reviewers judged this acceptable; restore it if wanted.
2. **Crease depth by position:** whether "about eight feet off the goal line" clears the crease arc for a screener standing off-centre, inside the dots. This is a geometry check for rink_map.md.
3. **oz-cycle-rim / oz-cycle-reverse:** the wall-battle limb is voiced three times across chunks 021–022. If one copy goes, it should be the prose copy in chunk 022, and only after a layer test.
4. **Captions still ≥150 words:** 30, after this batch's 9.

## What this method could not have found
- Whether the shorter captions teach faster.
- Real synthesised audio.
- The full text of the two papers whose fetches failed.
