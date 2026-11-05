# SG167: the IIHF no longer stated as always ejecting for checking from behind, a USA Hockey match scoped to reckless, and three scope fixes, on nine pages (4 November 2026)

**Files:**
- content/systems/forechecking_systems.md
- content/systems/special_teams.md
- content/systems/faceoffs.md
- content/positions/switching_positions.md
- content/positions/goaltender.md
- content/hockey-iq/risk_management.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/playing_without_the_puck.md
- content/foundation/language_and_glossary.md

## Source
These OPEN_ITEMS rows from the SG160–SG162 reviews, all harsh-only:
- the IIHF stated as flatly ejecting;
- special_teams :1114 "plan on a match" covering every USA Hockey trigger;
- glossary :532 unscoped;
- goaltender :1377 "lands high".

The owner chose on 4 November to "keep working on all items of the plan". One row in the cheaper direction was found by the rules-verifier and fixed in this wave.

## Basis (verified on disk by the authors and reviewers)
- **IIHF.** 43.2: "there is no option to award a minor penalty". 43.3: "The Referee, at their discretion, shall assess a major penalty and an automatic game misconduct penalty… and who recklessly endangers". The house form is "under the IIHF, plan on it" (owner, 28 Oct). No British book departs from Rule 43.
- **NHL and PWHL.** 43.2 has no minor; 43.5 makes the game misconduct mandatory.
- **Hockey Canada.** 7.5(a)/(e): minor plus game misconduct. 7.5(c): match. 7.6 supersedes (the off-head scope sits on Hockey Canada only, owner ruling 3 Nov).
- **CARHA.** 53(a) and 53(b).
- **USA Hockey.**
  - 608(b): "recklessly endangers… or causes them to go head first into the boards or goal frame".
  - Casebook 608 Situation 1: forceful at the boards, head first or reckless gives a major plus game misconduct, or a match.
  - 602(a): match for reckless endangerment.

## What changed
- **"Under the IIHF, plan on it" (prose) and "IIHF: plan on it" (facts) where a line stated the IIHF as flatly ejecting.**
  - forechecking :326, :345, :767, :824, KT9 (:1114)
  - special_teams :653, :1114
  - faceoffs :1231
  - switching :256, :296, :569, KT8
  - risk :831, :844
  - puck_support :587
  - playing_without_the_puck :809 ("in four books every call ejects you — under Britain's IIHF, plan on it"; the four are NHL, PWHL, Hockey Canada and CARHA) and :835
  - goaltender KT12 ("— plan on it")
- **Hockey Canada-only off-head scope** added where a line's flat claim lacked it: forechecking, and glossary KT12 (:532).
- **USA Hockey wording.**
  - special_teams :1114: the 602(a) match is now scoped "if reckless" (forceful or head first stays an ejection under 608(b)).
  - forechecking :811 and :345: "head first" is now "head first into the boards or goal frame" (608(b)'s text), and the Never line now has its verb.
- **goaltender facts :1377:** "a deliberate cross-check lands high" became "a deliberate cross-check hits head or neck" (7.6(b) Interpretation 2). It is at 300/300.
- **puck_support :587 (cheaper, pre-existing; found by the rules-verifier):** the USA Hockey clause omitted the reckless trigger. It now reads "a forceful one at the boards, a head-first or a reckless one".
- **Left alone, with reasons recorded by the authors:**
  - faceoffs :607 omits NHL/PWHL 43.1's "not aware" condition. Adding it would be hedging, and only 6 chars are free.
  - faceoffs :1231 has a bare "head first" (harsh).
  - glossary :420 "a cross-check to the head" is near-accurate.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (all 21 changed sites, 12 books incl. British) | 21 PASS, 0 FIX for the wave. No book dropped, "plan on it" never qualifies a mandatory ejection, no USA Hockey trigger detached, no match limb lost. One pre-existing cheaper omission (puck_support :587 reckless) was fixed in the reviewer's wording |
| safety-reviewer, also standing in for the content dimension (6 of 9 rendered) | 9 of 9 SHIP. "Plan on it" never reads as optional, voiced alone. No safety limb lost. Parentheses read cleanly. Optional tidies taken: "IIHF: plan on it" consistency, and the forechecking :811 verb |

### C11
- Two authoring agents (forechecking/special_teams/faceoffs; the other six) made every edit.
- The post-review edits are confined to the named findings and use the reviewers' wording: the punctuation, the :811 verb, and puck_support :587 (stricter).
- The coordinator wrote this record.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all nine files; spoken "Important." counts unchanged per file.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on all 21 sites |
| D2 Exceptions | IIHF 43.3 discretion; USA Hockey 608(a) floor and 608(b) triggers; Hockey Canada 7.6 supersession |
| D3 Divergence | Six-book checking-from-behind tallies, plus British books (no departure) |
| D4 Citation integrity | 43.2 dropped from pwtp :809 (its claim is carried in the same line); no new citation |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "No British book departs from Rule 43" (flattened, footers stripped) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | "Four books" at pwtp :809 checked against :835 |
| D9 Summary layer | Layer tests per claim; KTs in forechecking, switching, goaltender and glossary changed with their bodies |
| D10 Key-facts layer | 9 facts lines checked voiced alone; caps pass (two at 300/300) |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | 6 files rendered by the safety-reviewer; all by the authors |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs; no marker lost. No site-reviewer (declared) |

## What this method could not have found
- A flat IIHF ejection worded without "every book", "ejects" or "ends your game".
- Unchanged sibling lines in other files that omit USA Hockey's reckless trigger (only puck_support :587 was found, by chance).
- How a referee applies IIHF 43.3 to a non-reckless check from behind ("plan on it" is the owner's ruling).
