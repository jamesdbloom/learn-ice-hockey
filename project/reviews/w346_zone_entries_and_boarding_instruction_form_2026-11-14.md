# W346: the hit-from-behind instruction made unconditional in zone_entries, and boarding's "never" no longer scoped to a helpless player (14 November 2026)

**Files:**
- content/systems/zone_entries.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave works the W345 plan row. Its reviewers found two faults in W344's zone_entries form, "Never drive them into the boards or goal frame unable to protect themselves. If you do, ⚠️ **a match penalty is mandatory**…":
- the amber fell on the consequence only;
- the Hockey Canada 7.5(c) / CARHA 53(b) qualifier "unable to protect themselves" had moved onto the instruction, so "never" read as conditional.

body_contact_and_battles had the same scoped-instruction shape. Two authors worked one file each:
- **AI:** zone_entries.
- **AJ:** body_contact_and_battles.

## What changed
- **zone_entries :257, :866, :1170, :1204.** :866 was not briefed; it is a fourth copy found by claim. Each now reads "⚠️ **Never hit a turned <defenceman / retriever / player> from behind. If that hit drives them into the boards or goal frame when they cannot protect themselves, it is a mandatory match** under …", with the following USA Hockey 608(c) "boards or not" sentence and the 404(b)/403(b)/32(d) limbs byte-identical.
  - "Never" is unconditional, and the qualifier scopes only the match.
  - "If that hit" restores the from-behind condition both match rules need. The old form had dropped it.
  - The paragraph-opening sites :257 and :866 begin with a plain "So" so the glyph does not open the paragraph and turn into an amber panel. HEAD already rendered both as inline amber, so only the amber's extent moved, from the tariff to instruction plus tariff.
  - :257 no longer opens a spoken chunk on a "them" whose referent is in the chunk before.
- **body_contact_and_battles :704 and :741 (AJ).**
  - **The premise, corrected:** the brief called this a facts line; it is body text.
  - **The problem:** the section is about boarding in general. "Never put a player who cannot protect themselves into the boards" left a gap under USA Hockey 603, whose Note ("pushes, trips or body checks an opponent causing them to go dangerously into the boards") has no defencelessness condition. Dropping the qualifier altogether would have been false for a legal check along the boards in a checking league.
  - **The fix:** both sites now read "Never drive anyone dangerously into the boards, least of all a player who cannot protect themselves". At :741 the icing and third-man bans became their own sentence.

## Reviews
| Reviewer | Result |
|---|---|
| authors AI, AJ | Premises tested. AI found :866; AJ corrected the brief's "facts line" premise and read NHL/IIHF 41.1, Hockey Canada 7.2 and USA Hockey 603 before choosing the form. Harness, marker pairs, renders. |
| rules-verifier | All six units OK. Hockey Canada 7.5(c) (current hc.txt), CARHA 53(b) (2026) and USA Hockey 608(c) confirm the new zone_entries form is more faithful than HEAD (the from-behind condition restored). For boarding it checked NHL, PWHL and IIHF 41.1 ("defenseless"), Hockey Canada 7.2 ("unsuspecting"), USA Hockey 603 Note and CARHA 49 (no defencelessness condition), and the EIHL Casebook. USA Hockey Casebook 603 Situation 2 ("not eliminating a good, hard and clean check") confirms "dangerously" is the line between a legal check and boarding, so nothing legal is forbidden. Two optional wordings, not applied. |
| safety-reviewer | All six units OK. Corrected the coordinator's brief: HEAD :257/:866 were already inline amber. Judged "So" natural ("the conclusion drawn from" the preceding tariffs) and found no better non-glyph lead. "Least of all" carries "dangerously" onto the helpless-player limb, but the section's "In short" (:726) states the unconditional instruction, so that is not a defect. 0 LOST (50/50, 199/199). One optional wording ("send" for "drive"), logged. |

### C11
The wave was written by authors AI and AJ; no change was made after review. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on both files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | unchanged |
| D5–D8 | not engaged |
| D9 Summary layer | zone_entries Common Mistakes :1204; body_contact's "In short" :726 read |
| D10 Key-facts layer | not changed |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness (HEAD vs tree amber compared); no site-reviewer (text only) |

## What this method could not have found
- **Other documents.** The scoped-instruction shape in other documents, worded differently ("an unsuspecting player", "a player who isn't ready").
- **The rendered site.** How the lone "So" before an amber run looks in a browser. Judged from HTML structure only.
- **Other rules.** Other rules pricing a dangerous boards hit (roughing, interference, Hockey Canada 7.1) beyond those read.
