# W476: every IIHF women's-checking permission now carries the Women's NIHL ban in the same unit (18 November 2026)

**Content files changed:**
- foundation/uk_rules.md
- hockey-iq/playing_without_the_puck.md
- off-the-ice/conditioning_and_recovery.md
- off-the-ice/team_play_and_culture.md
- positions/center.md
- technique/body_contact_and_battles.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W475 (1), a census across the corpus following up a W475 safety Major.
- **Agents:** seven, one per group of documents, covering 18 documents in total.

## The defect
IIHF Rule 101.1 is the women's rule, and IIHF women's hockey is the base book for every women's game in Britain. 101.1 *permits* body checking "when there is a clear intention of playing the puck or attempting to 'gain possession'".

A unit that voices that permission without the Women's NIHL limb will be heard by a British women's player as her rule. The WNIHL Rules of Competition label both of their formats *"Full ice, non-checking"* (U16 and senior; `ihuk_wnihl_roc_layout.txt:173-174`), and In-House Section 11 ejects a woman for any major. So the permission is cheaper than her real rule.

## Units repaired (permission, no WNIHL limb in the unit)
| File | Unit | Added |
|---|---|---|
| playing_without_the_puck | facts :203 (voiced alone) | "and Britain's Women's NIHL bars it outright" (290/300) |
| playing_without_the_puck | :222 | "Britain's Women's NIHL, senior and U16, is non-checking altogether" |
| conditioning_and_recovery | :240 | opens "**Outside the WNIHL**, under the IIHF book itself…" |
| team_play_and_culture | :554 | "Under the IIHF book itself, women's hockey is restricted contact, not a blanket ban — but Britain's Women's NIHL, senior and U16, is non-checking, so do not check there at all." (safety rewording, see below) |
| center | facts :737 | "; Britain's WNIHL bars it" (298/300) |
| center | :753 | "— and Britain's Women's NIHL does not allow it at all, because it is non-checking" |
| body_contact_and_battles | Overview :43 | "though Britain's Women's NIHL is non-checking at both its levels" |
| body_contact_and_battles | facts :169, :171 | "and Britain's WNIHL is non-checking" |
| body_contact_and_battles | :240 | "Britain's WNIHL allows none" |
| uk_rules | :498 | "and the WNIHL's rules make its games non-checking" |

**Left alone, with reasons:**
- **Restrictions only:** the step/glide minor, the boards bar, holding ground.
- **Already scoped.** These units already named the WNIHL, or sat in the same chunk as a unit that did and was tied to it, as with offensive_zone_play :1195, where "Elsewhere" follows the WNIHL bullet in chunk 080.
- **Push-and-lean.** 101.1's pursuit clause, "possession of the puck remains the sole object" (bcb :172, CM :2060), is contact in a puck race, not checking. It stands even in a non-checking competition, so a WNIHL limb there would be false.
- **No edits needed:** time_and_space, language_and_glossary, offensive_zone_play, special_teams, faceoffs, defender, winger, puck_handling, game_management and defending_the_rush.

## Reviews
**safety-reviewer**
- One Major. team_play :554 first read "though the Women's NIHL *labels* its games non-checking", which made the ban sound nominal after a bold "not a blanket ban". It was reworded with the reviewer's text and confirmed in chunk 034.
- Conditioning :240's "Outside the WNIHL" was upheld. It opens chunk 020 before the permission, and chunk 019 ends with the explicit ban. An optional +11 words was declined.
- Four rulings were upheld:
  - push-and-lean is contact, not checking;
  - "runs 101.1 unamended" is still true, because Section 11 is a general ejection rule, not an amendment of 101.1;
  - faceoffs "at least a minor" is the right price in a WNIHL game too;
  - ozp :1195 is acceptable.
- The other 11 units were upheld.

**rules-verifier**
- All six WNIHL wordings are OK against the Rules of Competition.
- "Bars it outright" and "not at all" are the plain meaning of "non-checking", stated as a competition rule stricter than 101.1.
- "Senior and U16" is complete: every senior division (Elite, WNIHL1, WNIHL2) falls under the senior row.

**site-reviewer**
- Six pages checked at 400 light: 0 bare, untreated or panels; ⚠️ counts equal HEAD; 0 console errors; worst windows unchanged.

### C11
The coordinator wrote no content. The team_play rewording is the safety reviewer's text, applied by the author.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 18:16:42.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts made no change. check_callout_flow --bare = 0, and `--panels --file` = 0 on all six files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT in all six files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF 101.1; IHUK WNIHL Rules of Competition |
| D2 Exceptions | 101.1 pursuit push-and-lean |
| D3 Cross-book divergence | IIHF permission vs WNIHL ban |
| D4–D8 | not engaged |
| D9 Summary layer | census of every layer in 18 documents |
| D10 Key-facts | four facts lines voiced alone repaired |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | chunk adjacency measured for every "left alone" call |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan row From W476)
1. **"Both its levels"** (bcb :43) could be heard as two divisions. Optional fix: "at senior and U16, every division".
2. **Other British women's competitions**, such as BUIHA women's and junior girls' leagues, fall outside the WNIHL Rules of Competition. Check that no unit attaches the WNIHL limb to them. This is the "in Britain" scope-collision shape.
3. **Diagram captions** were out of scope and are unchecked for a 101.1 permission.
4. **Wording the sweep could not see:** a permission phrased without "101.1", "women" or "IIHF" would not have matched the lexical sweep.

## What this method could not have found
- An in-season IHUK bulletin changing the WNIHL format.
- Real synthesised audio.
