# SG92: SG91 carry-overs: 602(a) "meant to injure", the three-second hold, scope fixes (27 October 2026)

**Files:**
- content/systems/forechecking_systems.md
- content/systems/defending_the_rush.md
- content/positions/goaltender.md
- content/off-the-ice/conditioning_and_recovery.md
- content/hockey-iq/risk_management.md
- content/systems/defensive_zone_coverage.md
- content/technique/body_contact_and_battles.md
- content/positions/defender.md

## What changed and why

### 1. USA Hockey 602(a), every site in both files
602(a) gives a mandatory match to a player who "recklessly endangers **or attempts to injure**". Many sites named only "if reckless". The limb is now added at:
- forechecking :617, :625, :626;
- defending_the_rush :330, :334, :354, :423, :434, :462, :479, :566, :586, :1016.

Details:
- :617 now cites 602(a) for the match, in place of 640(h)'s discretionary "may".
- :479 names USA Hockey beside Hockey Canada for a board meant to injure.
- "That or meant to injure" became "reckless or meant to injure", so "that" can't be heard as "that pair".

### 2. The three-second hold, USA Hockey
"Pin the puck for help" instructions in body_contact (:1146, :1150, :1159) and defender (:209, :214, :227) gave no USA Hockey limit.
- 632(b) penalises any hold "causing a stoppage of play", with no time in the rule. The Casebook (Situations 4–6) makes three seconds the point at which the referee must stop play and penalise.
- The lines now read "it is a minor by three seconds" or "a hold that stops play is a minor, three seconds at the latest", so the figure is a deadline, not a safe window.

### 3. Goaltender
- The page had no Sources entry for the IHUK DOPS document that its facts lines cite. The new entry covers Section 5, C.1 (all five mandatory bans, including the slur), C.2's late-fight row and s.11, and keeps uk_rules' disclosures.
- "In every league" became "in every league or age group" (s.11).

### 4. Scope fixes
- **conditioning :29:** "fourteen flags in the UK guidance".
- **risk_management :318:** "In British women's and junior hockey, treat any major as an ejection". In-House Rule 101 says so for women; for juniors it is a reading of IIHF 201.1 through In-House Rule 201, hence "treat".
- **dzc facts :176:** "In IIHF women's hockey, and so British women's hockey, pin the puck…". It now opens with its scope rather than as a universal rule.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules (all 8 files) | rules-verifier | **SHIP, every hunk.** Verified 602(a), 603(b), 608, 625(a)(4), 640(b)/(e)/(g)/(h), Casebook 632 Situations 4–6, HC 7.2 and 8.3, CARHA 49(b), IIHF 101.1, 201.1 and 56.5, In-House Rules 101 and 201, DOPS §5, §11, C.1 and C.2, and ukcg's fourteen red flags. Optional: :625's "has lost the puck" was narrower than the rule. |
| Rules follow-up: the three-second threshold | rules-verifier | Three seconds is the Casebook's deadline, not a grace period; any hold that stops play is within 632(b). Recommended the deadline wording, which was applied. |
| Safety (all 8 files) | safety-reviewer | **MAJOR FIX:** forechecking :625's "a player who has lost the puck" is narrower than 625(a)(4) and 640(b), and permissive toward a player who has just passed or shot. Fixed to "a player without the puck". Minors were fixed too: "reckless or meant to injure"; the British women's limb on dzc :176; the DOPS slur. Rendered body_contact, defender and defending_the_rush; every new limb survives voiced alone, and no ⚠️ was lost. |

### C11
These post-review edits are confined to the findings above, and no reviewer has re-read them, so the commit gate reads them:
- forechecking :625 "without the puck";
- forechecking :617/:626 and defending_the_rush :462 "reckless or meant to injure", with ", nobody hurt" and "if hurt" rewordings to fit the cap;
- dzc :176 British limb;
- goaltender DOPS slur;
- the six three-second sites reworded as a deadline (defender :214 is now 197/200).

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules | rules-verifier, two passes, as above. |
| D4–D5 citations | Rule text from sources/; the DOPS URL matches sources/README. |
| D6 negative existence | n/a |
| D7 cardinal rule | n/a |
| D8 numeric ownership | "Three seconds" comes from the Casebook; the red-flag count from ukcg. |
| D9 summary layers | Layer tests by each fixing agent; the In short lines were updated with the facts and body. |
| D10 facts layer | Several Rule lines at 295–300/300. check_facts exits 0. |
| D11–D12 safety, read aloud | Three files rendered by safety-reviewer; post-review lines not re-rendered (declared). |
| D13 folklore | Out of scope. |
| D14 links | check_links passes. |
| D15 render | Site build after the last content edit (absolute npm, exit 0). |

## Carried to the plan
- risk_management :648, :664 and :692: IIHF hooking and tripping majors have the same British women's and junior ejection shape.
- forechecking :1041, :1047, KT8 and KT9 speak of ejection without the 602(a) match. They are incomplete, not false.
- The three-second rule applies to one player holding; two tied-up opponents are priced differently (Situation 4). The line errs harsh.

## What this method could not have found
- Other USA Hockey rules on holding the puck at the boards (Standard of Play bulletins).
- Other documents carrying the old reckless-only 602(a) limb or a "lost the puck" paraphrase.
