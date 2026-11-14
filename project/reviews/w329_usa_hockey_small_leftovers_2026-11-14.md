# W329: the small USA Hockey hit-from-behind leftovers. Facts lines that could not take 620(b), shape-1d units, four goaltender/defender facts lines, and "puckless man" (14 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md
- content/systems/defending_the_rush.md
- content/positions/goaltender.md
- content/positions/defender.md
- content/positions/winger.md
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The source is the USA Hockey plan row, items (1b), (1b2) and (1d), logged by W325–W328. Three authors owned disjoint files:
- **G:** goaltender and defender.
- **H:** body_contact_and_battles, defending_the_rush and rules_primer.
- **I:** winger, forechecking_systems and shooting. Shooting was left unchanged.

The ruling and the shipped wording are W322's.

## What changed
- **620(b) head limb added where a closed list of USA Hockey ejecting conditions lacked it.**
  - body_contact facts :597, :762 and :1224.
  - rules_primer :534 and Common Mistakes :1149. In :1149, "if it is reckless" became "if the hit is reckless" so the condition stays on the hit.
  - winger facts :511 and body :854.
  - forechecking_systems :628 (found in the author's sweep), :985, and KT9 :1179 (90 → 99 words).
- **goaltender :1369.** "Any check from behind" became "checking from behind". HC 7.5 Interpretation 1 calls a stationary cross-check from behind cross-checking, and Interpretation 3 permits a low-speed pin. The infraction itself ejects in all four books named: HC 7.5(e), CARHA 53(a), and NHL/PWHL 43.2 and 43.5. This is the same point W328 fixed at defender :435.
- **goaltender :1368 and defender :120 (Risk).** "That head-down" became "a head-down", because voiced alone the line pointed at nothing.
- **"Boards or frame" became "boards or net"** at goaltender :1374, body_contact :762/:1224 and the rules_primer :1081 table cell.
- **defender :436.** A Hockey Canada head limb was added: a match if the player can't protect themselves or the hit is meant to injure (7.6(c), 7.7(c)). No line in the block carried one.
- **defending_the_rush.** "Puckless man" became "non-carrier" at :324, which is USA Hockey 625 Note's own term. It became "a player without the puck" or "a player" at :338, :929 and :933.
- **Judged correct and left as they were.**
  - shooting :506, "never a bare minor". USA Hockey 625(a)(8)'s minor yields to 607(d) Note 1, where deliberate contact with a goalie is charging, and to 608. Every other book's floor is higher.
  - goaltender :1382, which prices only the head-first drive.
  - defender :287. "Head first" there is anchored by "boards or post".
  - defending_the_rush :407. It states a sufficient condition, not a closed list.

## After review (coordinator applied reviewer wordings verbatim)
- **rules_primer :534.** Both reviewers found that chunk 063 opened with no book named, so USA Hockey's boarding floor and its 608/620 tiers reached a listener unscoped. The defect predates this wave. The paragraph now opens "Under USA Hockey, put a player dangerously into the boards…".
- **body_contact :1224 (rules-verifier).** "It ejects (608(b), 620(b))" cited 608(b) for the "forceful" limb, which only Casebook 608 Situation 1 carries. The line is now the rules-verifier's, ending "(Casebook 608, Sit. 1; 608(b), 620(b))" (295/300).
- **body_contact :762 (safety-reviewer).** The recompressed line had lost "starts at", so a middle case was priced at the floor. It is now the reviewer's 200/200 line: "USA Hockey, minor + misconduct or more, out if forceful at wall, head first into boards or net, careless to head, or reckless".
- **body_contact :634 (both reviewers; outside the diff, pre-existing).** "Runs from a minor plus a misconduct up to a mandatory major plus a game misconduct" read as a ceiling, but 608(c) makes a match mandatory. It now reads "…to at least a mandatory major … (608(b)), and a mandatory match for excessive force on a defenceless player (608(c))."
- **winger :854 (safety-reviewer).** After the new 620(b) clause, the next sentence's "makes that or a match mandatory" had head contact as its nearest antecedent. It now reads "makes a major and game misconduct, or a match, mandatory…".
- **Not applied; moved to the plan:**
  - winger :511 "helpless" (optional);
  - defender :436 floor pointer (over the cap);
  - defender KT2 "can" (owner's call on KT wording);
  - defending_the_rush :324 and :539;
  - body_contact :763 and :2051 "frame";
  - other gendered "man";
  - Casebook 620 Situation 4's mandatory match.

## Reviews
| Reviewer | Result |
|---|---|
| authors G, H, I | Plan items refuted or confirmed in the sources. Each file was swept by claim. Harness on changed ⚠️ units: 1:1, 0 asides. Renders show each new clause whole in its chunk. |
| rules-verifier | Nothing blocking. Checked against USA Hockey 602, 607, 608, 620 and 625; Casebook 608 Sit. 1 and 620 Sits. 1–4; HC 7.5–7.7 with Interpretations; CARHA 53; NHL and PWHL 43. Two WORDING items (rules_primer :534, body_contact :1224) were applied. Second opinions went to the plan. |
| safety-reviewer | Nothing blocking. Every hunk was voiced alone and compared with HEAD; no limb was lost. WORDING items at rules_primer :534, winger :854 and body_contact :762 and :634 were applied. 0 LOST; harness 7/7, 0 asides. |
| safety-reviewer narrow re-check | All five applied edits OK, in fresh renders. |

### C11
Authors G, H and I wrote the wave. Every change the coordinator made after review was a reviewer's wording, applied verbatim and then re-checked. The coordinator added one item to author H's brief mid-wave: the rules_primer :1081 table cell. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0), started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets and check_counts;
- check_marker_pairs on all seven files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | body_contact :1224 citation corrected |
| D5–D8 | not engaged |
| D9 Summary layer | forechecking KT9; rules_primer Common Mistakes :1149 |
| D10 Key-facts layer | the changed facts lines, each voiced alone |
| D11 Reader safety | safety-reviewer plus a narrow re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus the harness; no site-reviewer (text only, no caption changed) |

## What this method could not have found
- **Missed wordings.** Units that price the act in words the sweeps missed, and diagram captions.
- **Concurrent assessment.** Whether 608 and 620 are assessed together is still unsettled on disk. Every "ejects too" line assumes they are independent.
- **"Careless".** Casebook 620 Situation 3 frames the test as "intentional or reckless", so a referee may read "careless" more narrowly than the corpus does.
- **The ear.** Whether the clipped 198–300-character facts lines can be followed by ear needs the owner's listening pass.
