# W331: the facts-reviewer's findings on the W325–W329 facts lines. Two closed lists that understated USA Hockey, citations on the wrong limb, "a hit from behind" widening "checking from behind", and facts limbs their own body did not carry (14 November 2026)

**Files:**
- content/positions/goaltender.md
- content/technique/shooting.md
- content/positions/center.md
- content/positions/defender.md
- content/hockey-iq/puck_support_and_spacing.md
- content/positions/switching_positions.md
- content/systems/defending_the_rush.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
A facts-reviewer, run read-only during W330, reviewed the facts lines W325–W329 had changed (the 41 lines that waves W325–W329 changed). Those waves had covered D10 only by voicing each line alone. Three authors worked its findings, each on disjoint files:
- **L:** goaltender and shooting.
- **M:** center, defender, puck_support_and_spacing and switching_positions.
- **N:** defending_the_rush and body_contact_and_battles.

N was dispatched after W330 was committed and those two files were free.

## What changed
- **goaltender :1370 (MAJOR, 300/300).**
  - **The defect.** The line priced a reckless hit on a turned back at a major and game misconduct. It gave a match only under 608(c). It had no 602(a) ("A match penalty shall be assessed to any player … who recklessly endangers"), and its own body bullet says "if it is reckless, plan on a match … (602(a))".
  - **Now.** The line reads "at least a major and game misconduct if forceful at the boards or head first into boards or net (608), or careless head or neck contact (620(b)); expect a match if reckless (602(a)), always with excess force on the defenceless (608(c)), likely a multi-game ban". "Either", which pointed at the line above, is gone.
- **shooting :507 (MAJOR, 293/300).** A closed list of USA Hockey ejecting conditions for a hit into a goalie's back had dropped Casebook 608 Sit. 1's forceful-at-the-boards limb. The line now:
  - leads with the instruction, "Never hit a goalie's back in USA Hockey";
  - carries the forceful limb;
  - adds 602(a);
  - keeps "goal frame" and "head, face or neck".
- **puck_support_and_spacing :601.** The line cited 608(b) for "forceful", which only the Casebook carries; it now cites (608). "Head first" now says "into boards or net", and the "USA Hockey:" colon is gone.
- **switching_positions.**
  - :244: "a hit from behind ejects" became "checking from behind ejects", following HC 7.5 Interpretation 1 and Casebook 609 Sit. 2.
  - :245: "checking from behind", and "Casebook Sit. 1" now names its rule, "Casebook 608".
- **center.**
  - :685 now says "checking from behind" and "at least a major and game misconduct", and names "Casebook 608".
  - A new :686 gives the 602(a) match for a reckless check and 608(c)'s mandatory match. Each line names USA Hockey.
  - Body :702 gains 602(a), "if the hit is reckless, plan on a match …".
- **Facts limbs now carried by their owning section's body** (true facts that the body did not state):
  - defender :460: the Hockey Canada 7.6(c)/7.7(c) match.
  - defending_the_rush :336: the shipped 608 tiers and 620(b).
  - defending_the_rush :403: 620(b).
  - body_contact :634: 620(b).
  - body_contact :1237: 608(b) head first or reckless, and 620(b).

## After review (coordinator applied reviewer wordings verbatim)
- **puck_support :601 (safety-reviewer, optional).** Without "anyway", "(on the head, plan on it)" let "it" drift onto head contact. It now reads "(head hits: plan on ejection)", the form shooting :506 uses (299/300). The rules-verifier re-checked it: OK, a planning instruction that errs harsher, scoped by its parenthesis.
- **center :686 (safety-reviewer, optional).** Heard alone, the 608(c) clause lost "from behind" and "reckless". It now reads "…and the match is mandatory for one with excessive force on a vulnerable or defenceless player (608(c))", where "one" picks up "a reckless check from behind". Re-checked: OK.
- **body_contact :1237: suggestion reverted.**
  - The safety-reviewer suggested moving the new USA Hockey sentence before "Same contact, same wall, opposite answers — so play the puck." so the paragraph would end on the instruction. The coordinator applied it.
  - The rules-verifier's re-check found that the move put "same contact … opposite answers" straight after a reckless, head-first hit. A listener would then hear Hockey Canada as answering that hit leniently, which is false and in the permissive direction.
  - The coordinator restored the order both reviewers had passed. No new wording was written.
- **Not applied (plan):**
  - center KT6 :978 and Options :681 still say "a hit from behind";
  - the "even a light hit from behind" floor at three sites;
  - 608(c) sites that drop "reckless";
  - switching :244's bare "head first";
  - risk_management :840, the owner's call;
  - goaltender :1370's structural point.

## Reviews
| Reviewer | Result |
|---|---|
| facts-reviewer (read-only, before the wave) | 2 MAJOR, 6 minor; nothing critical. |
| authors L, M, N | Findings confirmed in the sources. M corrected two file paths in the dispatch. Renders show each change whole in its chunk. |
| rules-verifier | Nothing blocking; all 13 hunks OK. Ruled that "expect/plan on a match if reckless (602(a))" holds as planning while "must" would overstate: 608(b) and Casebook 608 Sit. 1(3) price a reckless check from behind at major + GM or a match, and only 608(c) is unconditional. |
| safety-reviewer | Nothing blocking. Every changed unit voiced alone and compared with HEAD; no limb lost. Three optional wordings given, two kept. 0 LOST; harness clean. |
| rules-verifier narrow re-check | :601 and :686 OK; the :1237 move WORDING, resolved by reverting it. |

### C11
Authors L, M and N wrote the wave. Every coordinator change after review was a reviewer's wording applied verbatim and re-checked, or the revert of one such change back to text both reviewers had passed. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
A full `npm run build` (absolute binary, exit 0) ran after the final content edit, followed by:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all eight files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | puck_support :601 and switching :245 corrected |
| D5–D8 | not engaged |
| D9 Summary layer | not changed in this wave; center KT6 logged |
| D10 Key-facts layer | facts-reviewer findings, and every changed line voiced alone by both reviewers |
| D11 Reader safety | safety-reviewer, plus a narrow re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness; no site-reviewer (text only) |

## What this method could not have found
- **Old layers.** Summary layers in these files still built on the old "reckless = major and game misconduct only" answer were not layer-tested. Center KT6 surfaced only by grep.
- **Other USA Hockey rules.** 603 and 609 were not swept for the same acts.
- **Concurrent assessment.** Whether 608 and 620 are assessed together is still unsettled on disk.
- **Listening.** The 293–300-character lines need the owner's listening pass.
