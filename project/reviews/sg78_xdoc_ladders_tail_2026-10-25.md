# SG78: Inherited penalty ladders cut, final tail (25 October 2026)

**Files changed:**
- content/systems/special_teams.md
- content/systems/faceoffs.md
- content/systems/game_management.md
- content/hockey-iq/time_and_space.md
- content/technique/passing_and_receiving.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/scanning_and_anticipation.md
- content/foundation/rink_map.md
- content/positions/switching_positions.md
- content/getting-started/getting_started.md
- content/hockey-iq/risk_management.md
- content/technique/shooting.md
- content/systems/zone_entries.md
- project/plans/OPEN_ITEMS.md

## What changed and why

This is the third and final wave of the cross-document census (SG76 and SG77 were the first two). The remaining pages repeated multi-book tariffs they had inherited from another page. Each copy is cut to an instruction-first line that:
- keeps every ejection or mandatory-match limb voiced alone in its layer;
- links to body_contact_and_battles' owner sections.

Faceoffs grew by 49 words. Its Common Mistakes bullet is the page's only carrier of the checking-from-behind price, so it gained the head scope and the missing limbs. Shooting and zone_entries carry follow-ups from the SG77 gate:
- shooting's long goalie paragraph is split into three;
- the CARHA 52(b) injury limb and 32(d) are added to the zone_entries facts lines.

Net: about 2,790 words removed. The census-driven cuts across all three waves total about 12,200 words.

A consistent formula was settled and verified this wave: "a call for it that stays off the head ends your game in every book but USA Hockey". It holds for the IIHF because 43.2 removes the minor and 43.3, a major plus an automatic game misconduct, is Rule 43's only penalty. The referee's discretion decides whether the foul is called, not what it costs. Every "plan on a match (602(a))" now carries the owner's "likely multi-game suspension".

## Reviews

| Dimension | Reviewer | Result |
|---|---|---|
| Rules A (special_teams, faceoffs, game_management, shooting, zone_entries) | rules-verifier, two passes | **First pass:** faceoffs :1227 WRONG (cheaper): "in a checking game" scope, and "can end" where HC 7.3(b) and CARHA 49(a) make injury an ejection. special_teams goalie lines lacked the multi-game suspension. "Never cheaper than a charge" was harsher-simpler for CARHA in the crease. game_management dropped the HC 7.6(b) injury tier. Ruled that IIHF "ends your game" is VERIFIED. **Re-check:** all VERIFIED. |
| Rules B (eight foundation and hockey-IQ pages) | rules-verifier, two passes | **First pass:** no cheaper drift. Surviving propagation miss: switching_positions KT8 (voiced alone, untouched by the wave) had no head scope. Minor completions: 7.7(c), CARHA 48(a), NHL/PWHL 42.5. **Re-check:** all VERIFIED. |
| Safety | safety-reviewer, two passes | **First pass:** 3 majors, 4 minors. M1: faceoffs injury "can end". M2: special_teams goalie-from-behind lines carried no ejection and dropped USAH 608(b) head-first. M3: switching_positions lost the USAH reckless trigger. getting_started CLEAR. **Re-review:** CLEAR. |

### C11 coordinator edits after review

Each edit applies the reviewer's own finding in the reviewer's terms:
- **zone_entries :416:** the opening clause was tightened so CARHA 32(d) fits the 300 cap. The ban was then moved beside CARHA at :416 and :776, per the rules-verifier's optional note that it could be heard as applying to Hockey Canada.
- **special_teams :1103:** the multi-game suspension was added, and "for checking or charging one" was trimmed to fit. The rules-verifier VERIFIED it against USAH 607(c).

### CARHA match ruling

All reviewers ruled, from the text, that 32(d) does not attach to a match. The pages put 34(a) on matches and 32(d) on majors only. The owner's 19 October wording names "match", so this remains an owner-decision row.

## Commit-gate notes

The commit gate cleared this change. It made two notes:
- The safety-reviewer's "zone_entries :776" example was stale: after the split, that line is :777 and carries the match and the USAH reckless limbs, so it is dropped here.
- The special_teams :1103 trim lost the body-check half of 607(c). That is recorded as a plan row.

## Mechanical checks

- check_facts (no pipe), check_links, check_absolutes, check_geometry, check_secrets and check_counts all exit 0.
- check_marker_pairs: 0 LOST, 0 SPLIT HALF across all 13 files.
- Full npm build after the last edit exits 0. `check_callout_flow --bare` reports 0.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1–D3 | Two rules-verifiers, two passes each |
| D4–D5 | No new external citation |
| D6 | "The IIHF writes no match penalty" re-swept: 0 in both rulebooks, the EIHL Casebook, the In-House Rules and the Disciplinary Regulations |
| D7 | Instruction-first; no coaching choice stated as a rule |
| D8 | No figures |
| D9 | Per-limb layer tests by the agents. A lexical census by rules-verifier B found the KT8 miss. KTs outside the diff were otherwise not re-read; this is declared. |
| D10 | Facts lines changed on ten pages. Each was verified by a rules-verifier, read voiced alone by the safety-reviewer, and checked with `--near` first. No separate facts-reviewer ran. |
| D11 | CLEAR |
| D12 | All 13 pages rendered and read de-tagged |
| D13 | None |
| D14 | check_links exit 0 |
| D15 | Build exit 0, bare 0, no rendering source changed |

## What this method could not have found

- Units outside the diff that still carry a soft or bare limb.
- Whether body_contact's owner sections voice every limb these pages now hand off to them.
- Whether Hockey Canada's 8.5(b) game misconduct carries its own automatic suspension. It was not checked.
- Listener-chunk distances beyond the units the safety-reviewer read.
