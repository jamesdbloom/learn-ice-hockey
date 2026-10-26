# SG91a: goaltender, forechecking and defending the rush (26 October 2026)

**Files:**
- content/positions/goaltender.md
- content/systems/forechecking_systems.md
- content/systems/defending_the_rush.md

## What changed and why

### goaltender
- **USA Hockey Casebook 607 Sit. 4 facts line.** An SG82 trim had dropped "or match". It now reads "driving through, major and game misconduct or match — expect a match and a likely multi-game ban (602(a))" (299/300). Source: usah_casebook.txt :11673–11700, "the major plus game misconduct, or match penalty option would be the proper call".
- **The IIHF 63.29 line.** "63.2(iii)" became "63.2(III)", the IIHF book's own case.
- **Late-fight ban, IHUK DOPS.** The fight section priced a British fight at IIHF 46.1 alone. That left out the mandatory one-game ban for a late fight: C.1, and C.2's "Last 5 minutes, OT & or End of game — Mandatory 1 game plus any other penalties". Added:
  - a body sentence at the end of the Fighting bullet;
  - a facts Rule line (236 characters), scoped like its owner, uk_rules.md#fighting (England or Wales, outside the Elite League; one game in every other league or age group, s.11).

### forechecking_systems
- USA Hockey 602(a) reaches a hit that "recklessly endangers **or attempts to injure**". The "or meant to injure" limb was added at :250, :265, :327, :346, :659, :811 and :862.
- :625 and :626 sit at 299/300 and 297/300 and were left as they are. The section body at :673 carries the limb.

### defending_the_rush
- :457 and :471: "Force them wide and keep forcing" became "keep steering them wide with your route". The old wording read as a body-contact instruction to non-checking readers.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules (all three files) | rules-verifier | **SHIP, every hunk.** Casebook 607 Sit. 4 and 602(a) verified verbatim. IIHF 63.2 (III) is upper case in both editions, and Situation 63.29 is confirmed. DOPS: "OT" and "End of game" appear only in C.2, so the line must keep citing C.1 and C.2 together (it does). "At least" is supported by "plus any other penalties". "Every league or age group" is from C.1 and s.11 verbatim. "Outside the Elite League" is not stated in DOPS; it copies the owner page, and that silence is disclosed there. Forechecking: 602(a), 607, 608 and 640 confirmed. :625 and :626 do not under-price any good-faith reader. defending_the_rush: a tactic, not a rule claim. |
| Safety (all three files) | safety-reviewer | **SHIP, every hunk.** Every tariff edit widens a trigger or adds a ban. Goaltender was rendered (131 chunks) and the new fight lines were read as voiced (chunks 076, 077). The "steering" wording is a safety improvement. Ruled acceptable: forechecking :625/:626 reckless-only at the cap (minor); "a fight ejects you under the IIHF" errs harsh for NIHL, SNL and BUIHA but harms no reader, and adding the exception would worsen a Key Takeaway voiced alone. |

### Non-blocking notes carried to the plan
- **The "attempts to injure" limb** is still missing at forechecking :617, :625 and :626 and at defending_the_rush :434, :462 and :1016. If it is ever fixed, treat it as one claim across both documents.
- **forechecking :250 and :862** say a reckless charge "is a match" (602(a) "shall"). 607(e) says "may also", and the body says "Plan on". This errs harsh. Optional.
- **goaltender's Sources trailer** does not name the IHUK DOPS document, though two facts lines cite it.
- **goaltender :731 and :734** still use the lower-case "63.2(iii)" beside the corrected :733.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | rules-verifier against usah, usah_casebook, both IIHF editions and their situations, eih_dops (+layout), eihl_casebook and eiha_inhouse. |
| D4–D5 citations | Casebook 607 Sit. 4 and 602(a) quoted verbatim; DOPS C.1, C.2 and s.11 read. |
| D6 negative existence | "Outside the Elite League" rests on DOPS silence, and the owner page discloses this. |
| D7 cardinal rule | "Steering them wide" is a tactic, stated as one. |
| D8 numeric ownership | The late-fight ban follows its owner, uk_rules#fighting. |
| D9 summary layers | Goaltender CM and KT10 were read. They are unchanged and do not contradict. Forechecking CM, KT and In short cite no 602(a). |
| D10 facts layer | check_facts exits 0. The goaltender fight block is 13/14. |
| D11–D12 safety, read aloud | Goaltender was rendered. Forechecking and defending_the_rush were not rendered (declared). |
| D13 folklore | Out of scope. |
| D14 structure, links | check_links passes; the anchor uk_rules.md#fighting resolves. |
| D15 render | Site build after the last edit (see the commit gate). |

## What this method could not have found
- Other rules pricing a goalie's fight in CARHA, Hockey Canada or USA Hockey; those lines were not changed.
- Whether DOPS reaches Elite League fixtures, and whether SIHA or Northern Ireland have their own late-fight ban (not on disk).
- A USA Hockey match stated without citing 602(a) in forechecking.
