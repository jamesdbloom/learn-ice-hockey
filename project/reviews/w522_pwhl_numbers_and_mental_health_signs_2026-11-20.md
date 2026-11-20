# W522: PWHL rule numbers, and the mental-health warning signs (20 November 2026)

## Scope

Three read-only verifiers ran first:
1. A census of every PWHL rule citation, prompted by the W521 commit gate finding "PWHL 76.2" cited for the face-off rule.
2. W521(2): USA Hockey 602(a) against 607(e) for a reckless charge.
3. W521(1): the sources behind mental_game §13's warning signs.

Three editing agents then worked from their findings.

## USA Hockey 602(a): filed for the owner, not changed

The rules-verifier ruled that "plan on a match (602(a))" is **harsh** for any act whose own rule writes a discretionary match ("may also be assessed"). Its evidence:
- **Casebook 607 Situation 4** is decisive for a reckless charge on a goalie: "the major plus game misconduct, or match penalty option would be the proper call".
- **Casebook 604 Situation 3, 608 Situation 1 and 634 Situation 4** read the same way.
- **The Summary of Penalties** lists 607(e) as a "Match Penalty Option".
- **The Standardized Discipline Policy** puts 607(e) at Level 2 and 602(a) at Level 1.
- **Against it:** Casebook 602 Situation 1, "the match penalty must be assessed".

About 260 lines across 30 files follow the convention. None is permissive, because the mandatory major and game misconduct sits beside it everywhere.

The convention dates from waves 58–61. It is now plan row W521(2), awaiting the owner. Nothing was edited.

## PWHL rule numbers

**The census.** It found no bare "PWHL X" carrying the NHL's number. The PWHL renumbers +1 from Rule 52 (Body Checking inserted) and +2 from 63, with sub-rule shifts below 52 too: 11.7+, 15.5–15.6, 46.14+, 47.2–47.5, 48.2–48.5, 51.3+.

The defects were all **shared-number forms**, where one number was attributed to "NHL, IIHF and PWHL":

| Site | Before | After |
|---|---|---|
| rules_primer :975 (table) | power-play team chooses (Rule 76.2) | NHL and IIHF (76.2), PWHL (78.2) |
| rules_primer :976 (table) | attacking team chooses the dot (Rule 81.2) | NHL and IIHF (81.2), PWHL (83.2) |
| rules_primer :455 | Spearing (Rule 62) | (Rule 62; PWHL 64) |
| rules_primer :457 | Holding the stick (Rule 54.2) | (Rule 54.2; PWHL 55.2) |
| language_and_glossary :318 | Faceoff procedure (Rule 76.4) | NHL and IIHF 76.4, PWHL 78.4 |
| faceoffs :993 | icing line change and timeout (81.4, 82.1; 87.1) | PWHL 83.4, 84.1; 89.1 |
| faceoffs :874 | "(NHL, IIHF and PWHL, Rules 87.1 and 89.1)" | each book's number named |
| faceoffs facts :1161 | (67.2, 69.2) | (67.2; PWHL 69.2) |
| winger :999 | "the NHL's, the IIHF's and the PWHL's (Rule 78.7)" | NHL and IIHF 76.7, PWHL 78.7 |
| winger :677 | hybrid icing (83.1) for all three | NHL and IIHF 81.1, PWHL 83.1 |
| defensive_zone_coverage :817 | "60.3 makes it a double minor" | NHL and IIHF 60.3, PWHL 61.3 |
| puck_handling :1162 (Sources) | "safe only below [52]" | sub-rules differ below 52 too; read every PWHL number in its own book |

Every number was checked against its heading and text in `pwhl_rules.txt`, `nhl_rules(_layout).txt` and `iihf_rules_2026-27.txt`.

**The :975 cell.** The first form pushed the cell to 204 characters, and `check_tables` dropped the whole table from the audio. It was reordered to about 194.

**Left, and filed as W522(3):**
- bare NHL-default numbers in paragraphs that do not name the PWHL;
- winger :1019's renumbering note.

## mental_game §13 warning signs

### Sources

- The cited Reardon et al. 2019 abstract lists no warning signs. The full text returns 403 and is not open access.
- The source-verifier found the signs in the **IOC Sport Mental Health Recognition Tool 1 (SMHRT-1)**: Gouttebarge et al., BJSM 2021;55:30–37, open access PMC7788187, built for athletes aged 16 and over.
- They are also in the **NHS** pages on depression and generalised anxiety disorder.
- The list is no longer credited to 2019.

### Changes

| Change | Before | After |
|---|---|---|
| Lead-in disclosure | none | The list follows SMHRT-1 (ages 16 and over) and the NHS (adults). The hockey framing is the guide's own. A younger player should tell a parent, coach or doctor. |
| Sign 3 | sleep or appetite | sleep, appetite or weight |
| Sign 5 | "the clearest signal in the list, because a genuine hockey problem stays in the rink" | "A drop in how you play that you cannot explain and that does not lift, or problems that have spread into work, study, relationships or family life" |
| New red-flag bullet (SMHRT-1's "seek immediate help" tier) | none | Overwhelming hopelessness, dramatic weight change, behaviour wildly out of character, or a sudden first-ever fear with sweating or breathlessness: get help straight away. The last "could be a panic attack or another medical problem, not nerves". |
| §5 :289 | racing heart and quick breathing framed as nerves | That kind of episode "is not nerves to relabel: get it checked by a doctor straight away, or call your emergency number if it is happening now" |
| Common Mistakes :700 | none | Carries the same-day tier |
| KT1 and Overview :45 | none | "and straight away if it is so overwhelming you cannot function" |
| :672 | rink-only problems routed away from the GP | "or you are not sure it is only a hockey problem, start with your GP or the clinical one" |
| Sources trailer | Reardon only | Quotes SMHRT-1, its red flags, and both NHS pages. Reardon is scoped to the prevalence and physical-health points. |

**Why sign 5 changed.** The old clause told a player whose trouble shows only at the rink that it is not a mental-health problem. SMHRT-1 counts a drop in sport performance as a sign in its own right.

The crisis lines are unchanged, and no sign was deleted.

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| safety-reviewer, first pass | none | 1: the list said it "follows" SMHRT-1 but dropped the red-flag tier | 4 | Repaired |
| safety-reviewer, second pass | none | 1: KT1 and the Overview still said "lasts for weeks" for overwhelming hopelessness | — | Repaired |

**Quotations.** All quotations were checked character for character against SMHRT-1 (supp003, lines 54–60, in the scratchpad) and the stripped NHS pages.

**Rendering.** Chunks 015, 034, 035 and 038 were rendered. The §5 counterweight and the §13 red flags each sit in the same chunk as their instruction and the emergency numbers.

**Separate finding:** the renderer voices helpline numbers as cardinals ("one hundred and sixteen one hundred and twenty-three"), and "24/7" as "twenty-four or seven". Filed as W522(1), a `scripts/` change for between waves.

**C11.** The last repairs were not re-read:
- the KT1 and Overview clause;
- the §5 route;
- the PWHL numbers.

Each is confined to its finding and either follows the reviewer's sketch or was checked against the source by its agent. The PWHL numbers had their census as review.

## Rows

- **Closed:** W521(1).
- **New:**
  - W522(1): the renderer voices helpline numbers as cardinals.
  - W522(2): no youth route to help.
  - W522(3): bare NHL-default rule numbers.
  - W522(4): the emergency-number route for a panic-like episode.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 7 files, 0 lost, 0 split.
- `project/verification/link_baseline.tsv`: rows added for SMHRT-1 (PMC) and the two NHS pages; the BJSM 403 re-observed.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: PWHL numbers against the PWHL, NHL and IIHF texts; USA Hockey 602/607 ruled (no edit). |
| D2 exceptions | Covered: USA Hockey 608(c), 627(b) and 602(a) attempt to injure, where "plan on a match" is right. |
| D3 cross-book divergence | Covered: PWHL renumbering. |
| D4/D5 citations | Covered: SMHRT-1 and the NHS fetched and quoted; Reardon scoped; baseline rows added. |
| D6 negative existence | Covered: Reardon's abstract has no sign list; the timing markers and "dread" are found in no source and are disclosed as the guide's framing. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Covered: the red-flag tier tested in §13, Common Mistakes, KT1 and the Overview. |
| D10 facts layer | Covered: faceoffs :1161 within cap. |
| D11 reader safety | Covered: two safety-reviewer passes. |
| D12 read-aloud integrity | Covered for mental_game (rendered). PWHL edits were judged by reading. The `check_tables` headroom was preserved. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: `check_links`; the §5 to §13 anchor. |
| D15 rendered site | Structural only. Chrome not connected. |

## What this method could not have found

- **PWHL citations far from the word "PWHL"**, or numbers in diagram captions.
- **Whether elite-athlete and adult tools fit younger or recreational readers.**
- **Whether "call your emergency number" is the right route for a first panic-like episode.**
- **How the new sentences sound through the production TTS engine.**
- **Reviewer transcripts**, which are not on disk; this record summarises them.
