# W341: USA Hockey's knee-drop exception given its momentum condition in risk_management, and defending_the_rush :539 made readable (14 November 2026)

**Files:**
- content/hockey-iq/risk_management.md
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works the W340 plan row and its commit-gate note. USA Hockey Casebook Rule 639 Situation 4 reads: "The only exception is when a player drops to their knees to block a shot and their momentum carries them into the player shooting the puck, causing them to fall." Two authors worked disjoint files:
- **P:** risk_management.
- **Q:** defending_the_rush.

## What changed
- **risk_management (P).** The exception was stated without its condition, which is slightly permissive, at three sites. Each now carries it:
  - **facts :670 (298/300):** "…unless you knelt to block a shot and momentum took you into the shooter (639, Situation 4)". Room came from "does not save" → "never saves" and "is tripping" → "is a trip"; no limb was dropped.
  - **body :696**.
  - **Sources trailer :998**.
- **defending_the_rush facts :539 (Q, then the safety-reviewer's wording), 299/300.** W340's "…and slid into the shooter" was slightly wider than the Casebook's momentum condition. The author's fit at the cap, "a slide felling anyone … a kneeling shot block's momentum took you", was correct but hard to follow aloud. The line now reads: "USA Hockey: sliding anyone down is a trip "regardless of who gains possession of the puck", unless you knelt to block a shot and momentum took you into the shooter (Casebook 639 Sit. 4); if reckless, a mandatory major + game misconduct (639(b)) — plan on a match and a likely multi-game ban (602(a))". This matches the sibling lines.

A corpus sweep of every 639 Situation 4 carrier finds no unit that still states the exception without its condition.

## After review
- **defending_the_rush :539 (safety-reviewer WORDING, readability).** The replacement keeps every limb: the quotation, the momentum-scoped exception, the citation, 639(b)'s mandatory major plus game misconduct, and 602(a)'s match and likely multi-game ban. "A reckless one" became "if reckless", which the reviewer judged clearer aloud. The rules-verifier re-checked it:
  - the semicolon puts "if reckless" on the trip;
  - 639(b) and 602(a) are confirmed;
  - 602(a) is Level 1 of the Standardized Discipline Policy (6–10 games), which supports "likely multi-game ban".
- **Not applied, logged in the plan:**
  - **"Anyone" versus "an opponent" (rules-verifier):** harmless.
  - **Two pre-existing provenance nits in risk_management:** a bolded **an opponent** inside a quotation, and the :998 trailer's "you" in its Situation 2 paraphrase.

## Reviews
| Reviewer | Result |
|---|---|
| authors P, Q | Premise confirmed in the Casebook, read across its page break. Layer tests: no other copy in either file. Renders read. |
| rules-verifier | All four units OK; "never saves a slide" confirmed against 639(a) Note and Situations 1–5. Re-check of the new :539: OK. |
| safety-reviewer | Three units OK; :539 WORDING (readability), with a lossless replacement, applied. Corpus propagation sweep clean. 0 LOST (53/53, 88/88). |

### C11
The wave was written by authors P and Q. The coordinator's only content change after review was the safety-reviewer's :539 line, applied verbatim and re-checked by the rules-verifier. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on both files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, with re-check |
| D4 Citations | Casebook quotation verbatim; the trailer's knee-drop paraphrase corrected (its Situation 2 paraphrase is unchanged and logged) |
| D5–D8 | not engaged |
| D9 Summary layer | not changed; the sweep found no summary layer carrying the exception |
| D10 Key-facts layer | risk_management :670 and defending_the_rush :539, each voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | renders by the authors and the safety-reviewer; :539 rewritten for the ear |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus checks; no site-reviewer (text only) |

## What this method could not have found
- **Other books.** A shot-block carve-out, or its absence, in other books. Only USA Hockey's Casebook was read.
- **Missed wordings.** A summary layer built on a wider shot-block exception that leaves no lexical trace.
- **Execution risk.** A legal kneeling block that slides into the shooter is still a body at a player's skates. No rulebook says how to go down.
