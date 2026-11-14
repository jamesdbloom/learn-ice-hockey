# W342: forechecking_systems, USA Hockey 608(c)'s match split out from the boards-or-net frame (14 November 2026)

**Files:**
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The W338 plan row logged that the boards-frame 608(c) phrasing might recur outside defensive_zone_coverage. A coordinator grep found it at forechecking_systems :972. USA Hockey 608(c) (usah.txt:3729–3732) reads: "A match penalty shall be assessed for checking from behind in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position". It has no boards or goal-frame condition. Hockey Canada 7.5(c) ("from behind into the boards or goal frame, in such a way that the player is unable to protect or defend themselves") and CARHA 53(b) ("into the boards or goal net…") do have one. One author, R, owned the file.

## What changed
At four units the USA Hockey match was framed by "into the boards or goal frame on a player who cannot protect themselves". Some also dropped "vulnerable or defenceless". Each is now split out, using the reviewed defensive_zone_coverage :751 form:
- **:972 (What it costs, inside the ⚠️ run):** "…Hockey Canada and CARHA must make it a match. USA Hockey must for a reckless one with excessive force on a vulnerable or defenceless player, boards or not (608(c)). A hit meant to injure is a match in every book but the IIHF. …"
- **:339 (2-1-2 body) and :765 (control-setup body):** the same split; :765 already carried the condition.
- **:981 (facts Rule, 277 → 291/300):** "defenceless" became "vulnerable or defenceless".

Other carriers in the file (:628, :985, :1186) already stated 608(c) without a boards frame. No summary layer carries the claim.

## Reviews
| Reviewer | Result |
|---|---|
| author R | Brief confirmed; found three more units than briefed. Layer test across all 608(c) and "excessive force" sites. Render read. |
| rules-verifier | All four units OK. 608(c) and Casebook 608 Situation 1 ("A match penalty must be assessed in all instances…"; "regardless of whether or not board contact is made") support "boards or not". Hockey Canada 7.5(c) from the current hc.txt; CARHA 53(b) from carha_2026.txt. The citation pairing at :981 is correct. Optional verb fill-in ("makes it a match") not applied. |
| safety-reviewer | All four units OK; every edit is in the harsher direction. The :972 warn-inline wrapper still covers the whole run (harness). The antecedents of "does"/"must" sit in the same spoken chunk. 0 LOST (92/92). |

**Note for future reviewers (rules-verifier):** the USA Hockey Casebook's own Summary of Penalties table lists 608(c) under "Match Penalty Option". That disagrees with 608(c)'s "shall … in all instances" and Situation 1's "must". The rule text and the Situation are operative, so "mandatory match" stands.

### C11
Author R wrote the wave; no change was made after review. The coordinator wrote the plan row, including the corpus census of the same shape in ten other documents, and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | :981 citation pairing checked |
| D5–D8 | not engaged |
| D9 Summary layer | none carries the claim (author sweep) |
| D10 Key-facts layer | :981, voiced alone (safety-reviewer) |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | renders by the author and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness; no site-reviewer (text only) |

## What this method could not have found
- **Other documents.** The same shape there: logged in the plan as a census with candidate lines, not yet worked.
- **Missed wordings.** A USA Hockey match price worded without "608(c)" or "excessive force".
- **Later amendments.** A later Casebook update to 608(c); only the books on disk were read.
