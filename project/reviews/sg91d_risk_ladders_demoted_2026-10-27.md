# SG91d: risk_management's charging and slew-foot ladders demoted (27 October 2026)

**Files:**
- content/hockey-iq/risk_management.md

## What changed and why
- **Charging (owner direction: rules are background; restated ladders are a propagation risk).**
  - The "What it costs" heading, its intro and five book-by-book bullets became one paragraph that leads with the instruction. It now points to body_contact_and_battles#four-fouls-no-division-is-exempt-from for each book's tiers.
  - Kept limbs:
    - a charge can end your game in every book;
    - injury makes the ejection mandatory under HC 7.4(b) and CARHA 52(a), and under NHL/PWHL 42.5 and EIHL Casebook 42 once a major is called for a face or head injury;
    - CARHA 32(d);
    - HC 7.4(c), a match even with nobody hurt;
    - USA Hockey 607 has no bare minor, 607(b) is mandatory if reckless, and 602(a) brings a match and a likely multi-game ban;
    - the page's one 404(b)/403(b) statement;
    - a charge meant to injure is a mandatory match in every book that writes a match penalty (the IIHF writes none; 42.4 is discretionary).
- **Slew-foot.**
  - The facts block went from 13 lines to 7, and five bullets plus two paragraphs became two paragraphs.
  - Kept:
    - NHL 52.2 and PWHL 53.2 mandatory matches;
    - IIHF 52.2;
    - USAH 639(b) and 639(c)/602(a);
    - HC 8.8(c);
    - CARHA 86(b) and 48(a);
    - HC Appendix D Note 1, with its disclosure;
    - the 8.6 carve-out.
  - CARHA 48(c) and HC 7.1(c)(iii) were dropped. CARHA's own casebook files the slew-foot under 86(b), and 7.1(c) excludes acts covered elsewhere. The owner section in body_contact still carries both.
- **IIHF citation case.** The IIHF 63.2 limbs split to the upper case: (II), (V) and (VII). 67.2(I) is now beside NHL 67.2(i).
- **Facts :843.** The USA Hockey 602(a) clause was moved to the end so that "a likely multi-game suspension" attaches to it alone.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules | rules-verifier | **SHIP.** Every kept limb was verified against NHL, PWHL, both IIHF editions, the EIHL Casebook, the In-House Rules, USAH, HC and CARHA. "Four of the six books eject you at the floor" holds. The dropped 48(c)/7.1(c)(iii) limbs leave no reader under-priced. Optional sketches: "once a major is called", "every book that writes a match penalty", "Each book's charging tiers", and restore "from behind" at :752. All four were taken. |
| Safety | safety-reviewer | **FIX (critical).** The slew facts line had lost Hockey Canada's ejecting floor (7.5(a)) for taking the feet from behind and pushing into the boards. Heard next to "8.8 starts at a double minor", the floor sounded like a double minor. The repair names 7.5(a) and CARHA 53(a)/(b). Rendered (67 chunks). No paragraph lost its last ⚠️, and the merges join limbs of one hazard. Minor: "even with nobody hurt". |
| Safety, narrow re-review | safety-reviewer | **SHIP, all four post-review units.** "CARHA likewise (53(a), (b))" verified at carha_2026.txt :2604–2625. Rendered again (chunks 015, 018, 052–054). Optional: open the slew lines as a condition ("If you take their feet…"), and restore "a major" in the charging facts line. Both were taken. |

### C11
The fixing agent applied the narrow re-review's two optional fixes after that review:
- the slew facts line (~:746) and body sentence (~:752) now open "If you take their feet from behind…";
- the charging facts line (~:298) gained "(a major, face or head)". To fit 300 characters, its opening changed from "Stay on your skates —" to "Stay on your feet:".

No reviewer has re-read these, so the commit gate reads them.

### For the plan
- CARHA 53 has no preamble naming the kick-and-push act. "CARHA likewise" reads it under 53(a)'s "intentionally pushes… from behind, anywhere on the ice".
- For a British women's player, "IIHF may give a major and game misconduct (42.4)" is mildly permissive, because the In-House Rule 101 major always ejects in women's hockey. HEAD had the same sentence.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules, exceptions, cross-book | rules-verifier on every limb; safety-reviewer re-checked 7.5 and 53. |
| D4–D5 citations | Rule text quoted from sources/. |
| D6 negative existence | "The IIHF writes no match penalty" was verified by a census of both editions. |
| D7 cardinal rule | The paragraphs lead with the instruction. |
| D8 numeric ownership | 404(b) is stated once per page, per the owner's ruling. |
| D9 summary layers | KT5, KT9, KT11, CM :875 and Check yourself were read, and they agree. |
| D10 facts layer | Slew block 7 lines; charging line 299/300. check_facts exits 0. |
| D11–D12 safety, read aloud | Rendered twice. The final word-level edits were not re-rendered (declared). |
| D13 folklore | Out of scope. |
| D14 structure, links | Both new anchors resolve; check_links passes. |
| D15 render | Site build after the last edit. |

## What this method could not have found
- Other rules a referee could use for the same acts, such as roughing, kneeing or CARHA 32(a).
- Summary layers in other documents built on the risk page's old ladders.
