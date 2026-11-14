# W330: a USA Hockey price for the low hit into the back, 608(c)'s "reckless" restored, "goal frame" where the book says it, and gendered "man" in defending_the_rush (14 November 2026)

**Files:**
- content/systems/defending_the_rush.md
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The work comes from the items W329's reviewers and gate logged in the USA Hockey plan row. Two authors owned disjoint files:
- **J:** defending_the_rush.
- **K:** body_contact_and_battles and rules_primer.

Two read-only agents ran in parallel. Their results went to the plan only, and neither changed content:
- **A rules-verifier on the slew-foot row's item (4).** It found that CARHA's own Case Situation rules a kicking slew-foot under 86(b), so no CARHA site needs a limb. It also found a new item: USA Hockey 627(b) and Casebook 627 Situation 3 make any kicking motion a mandatory match. The corpus has not reconciled that with its 639 slew-foot price.
- **A facts-reviewer on the facts lines W325–W329 changed.** Its findings were dispatched as W331.

## What changed
- **defending_the_rush :539 → :539 + :540.**
  - **What was wrong.** The low-hit facts line gave USA Hockey only "reckless or meant to injure, a match". Voiced alone, a hit from behind that was not reckless sounded unpriced.
  - **The fix.** USA Hockey moved to its own Rule line, which carries:
    - the 608(a) floor;
    - the Casebook 608 Situation 1, 608(b) and 620(b) ejecting tier;
    - the 602(a) match.
  - :539 keeps the IIHF, Hockey Canada, CARHA, NHL and PWHL. The block went from 10 to 11 facts.
- **defending_the_rush: gendered "man".** It was replaced where it was not an established idiom:
  - "an opponent" at :317, :332, :870, :932 and :936. :936 now matches CARHA 66(a)(1)'s "an opponent who is not in possession of the puck".
  - "attacker" at :360, :364, :367, :581 and :597.

  Idioms are kept: "your man", "odd-man", "man-on-man", "first man back", "never the man", "late man".
- **body_contact :634 and :2051.** 608(c)'s condition is restored as "a reckless hit with excessive force on a vulnerable or defenceless player". It matches 608(c)'s "recklessly endangers … with excessive force … vulnerable or defenseless".
  - At :2051, "boards or frame" became "boards or the goal". Hockey Canada 7.5(c) says "goal frame" and CARHA 53(b) says "goal net", so the union term follows HC 7.5 Interpretation 1's own "the boards or the goal".
- **body_contact :763.** The Hockey Canada facts line now says "boards or goal frame" (7.5(c)). To make room, "and" became "+" twice (299/300).
- **rules_primer :1081.** The USA Hockey table cell now says "boards or goal frame", which is 608(b)'s term. This table is already dropped from speech for size.

## After review (coordinator applied reviewer wordings verbatim)
- **defending_the_rush :540.**
  - The author had cut "likely multi-game ban" to "likely a ban" to fit the cap.
    - The rules-verifier judged that acceptable.
    - The safety-reviewer judged it cheaper. USA Hockey's Standardized Discipline Policy recommends 6–10 games for a 602(a) match, and "a ban" can be heard as one game.
  - The safety-reviewer's line was applied (300/300): `Rule: USA Hockey: a hit from behind is at least a minor + misconduct (608(a)); forceful at boards, head first into boards or net, or careless head or neck contact, at least a major + game misconduct (Casebook 608 Sit. 1; 608(b), 620(b)); reckless or meant to injure, a match, likely multi-game ban (602(a))`.
  - The rules-verifier re-checked it and found it OK. The "USA Hockey:" colon scopes a book; it is not a condition, and every citation follows its limb in order.
  - The coordinator rendered it: chunk 030, with "+" voiced as "plus".
- **defending_the_rush :317 (rules-verifier).** "Veering into a player off the puck" became "veering into an opponent off the puck". Interference is against an opponent (NHL 56.1, CARHA 66(a)(1)). The rules-verifier re-checked it and found it OK.
- **Not applied, and moved to the plan:**
  - defending_the_rush :318, which lacks the Situation 1 / 608(b) tier at 294/300 (both reviewers: not cheaper);
  - Common Mistakes :1100, which has no 608(a) floor under "no cheap tier" (not cheaper);
  - USA Hockey 639 clipping, which prices a low hit at or below the knees as a minor (the line errs harsher).

## Reviews
| Reviewer | Result |
|---|---|
| authors J and K | Items confirmed in the sources. Harness on every changed ⚠️ unit: 1:1, 0 asides. Renders show each change whole in its chunk. |
| rules-verifier | Nothing blocking. Checked against USA Hockey 602(a), 608, 620 and the Standardized Discipline Policy; Casebook 608 Sit. 1; HC 7.5 and Interpretation 1; CARHA 53 and 66(a); NHL 43.2 and 56.1; PWHL 43.2. One WORDING item (:317), applied. |
| safety-reviewer | Nothing blocking. Every changed unit voiced alone and diffed against HEAD; no limb lost; every "man" replacement keeps the same referent. One WORDING item (:540), applied. 0 LOST; the warn-inline wrapper forms on every changed ⚠️ unit. |
| rules-verifier narrow re-check | Both applied edits OK. |

### C11
Authors J and K wrote the wave. Every coordinator change after review was a reviewer's wording, applied verbatim and re-checked. The coordinator chose the safety-reviewer's :540 over the rules-verifier's "keep", recorded why, and had the choice re-checked. The coordinator wrote the plan rows and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0), started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all three files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | :540's citations checked limb by limb |
| D5–D8 | not engaged |
| D9 Summary layer | body_contact Common Mistakes :2051 |
| D10 Key-facts layer | :317, :539, :540 and :763, each voiced alone. A facts-reviewer ran on the earlier waves' lines; its findings are W331. |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | renders by the authors, the safety-reviewer and the coordinator |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness; no site-reviewer (text only) |

## What this method could not have found
- **Other USA Hockey rules.** Rules that price the same acts were not swept: 603 boarding, 609 cross-checking, and 639 clipping beyond the note above.
- **Gendered pronouns.** "He", "him" and "his" in defending_the_rush, and gendered terms in other documents.
- **Concurrent assessment.** Whether 608 and 620 are assessed together is still unsettled on disk.
- **Listening.** Whether the 300-character :540 can be followed by ear needs the owner's listening pass.
