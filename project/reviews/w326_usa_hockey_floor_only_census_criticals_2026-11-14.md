# W326: USA Hockey hit-from-behind prices that stopped at the floor, in six documents, from a corpus census (14 November 2026)

**Files:**
- content/hockey-iq/risk_management.md
- content/positions/switching_positions.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/playing_without_the_puck.md
- content/systems/forechecking_systems.md
- content/technique/shooting.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **USA Hockey plan row, item (1).**
- **The census.** A read-only safety-reviewer census at HEAD 7272b25a covered every content document except the five already worked in W322–W325. Its findings are reproduced at the end of this record so they outlive the session scratchpad.
- **The ruling and the shipped wording** carry over from W322: project/reviews/w322_usa_hockey_hit_from_behind_tiers_2026-11-14.md.

## What changed
Two authors worked disjoint sets of files.
- **A:** risk_management, switching_positions, puck_support_and_spacing.
- **B:** playing_without_the_puck, forechecking_systems, shooting.

### Shape 1: floor-only prices, every census site
Each now gives the floor, the ejecting conditions and the head limb in one spoken unit. The shipped form is "even a light one is at least a minor plus a misconduct; it ends your game if it is forceful at the boards, drives them head first into the boards or net, or is reckless, and so does careless contact with their head or neck"; for a goalie, "into the net or boards".
- **Softeners gone.** "Can end it", "can also end your game", "need not end your game", "lowest call" and "starts at" understated the Casebook's "must be called"; all are replaced.
- **risk_management:**
  - facts :840 and :842 (:842 rewritten so it stands alone);
  - body ⚠️ leads :855 and :907 (chunk 061 no longer ends on the floor);
  - Common Mistakes :924;
  - KT11 :989.
- **switching_positions:** facts :244 and :245.
- **puck_support_and_spacing:** facts :601 and :602; body :627, where "a mandatory match in some" now names Hockey Canada, CARHA and USA Hockey 608(c).
- **playing_without_the_puck:** Common Mistakes :1047.
- **forechecking_systems:** body :972.
- **shooting:** body ⚠️ :534 (a goalie, chunk 036) and Common Mistakes :945.

Census site left unchanged: playing_without_the_puck :820 (facts, graded Minor) was judged correct as scoped by author B and both reviewers: its minor plus misconduct is limited to "an open-ice push or light pinch" (Casebook 608 Situation 1's own price for those two cases), and :821 gives the ejecting tiers.

### Shape 2: the 620(b) head limb, where it fits
- **New Rule lines (W323 form):** risk :843, puck :603, forechecking :320 and :702.
- **Appended to existing lines:** playing_without_the_puck :823 and forechecking :751 and :979.
- **Added to body units:** playing_without_the_puck :847 and :1022; forechecking :339, :712 and :765; switching :270, :607 and KT8.
- **Sources trailers:** 620(b) added to the trailers of risk_management, switching_positions and puck_support_and_spacing, quoted verbatim.

### Could not take the limb
shooting :506 is at 298/300 and its block is at HARD_MAX. This is now a plan row.

### Key Takeaway lengths
| Key Takeaway | Before | After |
|---|---|---|
| risk_management KT11 | 94 | 130 |
| switching_positions KT8 | 141 | 151 |

## After review (coordinator applied reviewer wordings verbatim)
- **switching_positions :244 / :245 — BLOCKING (safety-reviewer A).**
  - The author's squeeze of :244 removed USA Hockey's floor from the facts block, and :245 did not carry it either. So no line in the block gave a light hit's price or the 620(b) limb. :244 had also lost its subject ("a hit ejects in each book").
  - :245 now reads `Rule: USA Hockey: a hit from behind, diagonal included, is at least a minor and misconduct (608(a)); reckless, forceful at the boards, or head first into boards or net, at least a major and game misconduct (608(b); Casebook Sit. 1), as is careless head contact (620(b)); reckless, plan on a match (602(a))` (299/300).
  - :244 now reads "a hit from behind ejects".
  - The rules-verifier offered a different :245 that kept "likely multi-game ban" but carried no 620(b). The safety version was chosen because the block otherwise has no head limb. The suspension limb stays in body :270, Common Mistakes and KT8.
  - A narrow re-check confirmed the block resolved.
- **risk_management KT11 (safety-reviewer A).** "it is a match in several" now pointed back at head contact; it now reads "a hit from behind is a match in several".
- **puck_support_and_spacing :602 (safety-reviewer A).** A bare "head first" sat beside the 620(b) line; it now reads "head first into boards or net".
- **forechecking_systems :979 (safety-reviewer B, optional).** The same separation was applied there, at 299/300.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer (census) | 36 documents split into 17,062 spoken units. Act wordings and the floor phrase were swept, every hit was read, and eight documents were rendered. Findings are below. |
| authors A and B | Brief premises verified in usah.txt and the Casebook. Harness run on every changed ⚠️ unit (A: 9/9; B: 11/11; 0 asides). Renders show each changed sentence whole in its chunk. |
| rules-verifier (both sets) | Nothing blocking. Every changed claim and the three trailer quotations match 608, 620, 602(a), the Standardized Discipline Policy, 404(b), Casebook 608 Sit. 1, 620 Sits. 1–4, HC 7.5, CARHA 53 and IIHF 43. One WORDING item (switching :245), superseded by the safety-reviewer's block fix. |
| safety-reviewer (set A) | One BLOCKING (switching :244/:245) and two WORDING items, all applied; a narrow re-check found all three OK. 0 LOST; harness 1:1, 0 asides. |
| safety-reviewer (set B) | Nothing blocking. One optional WORDING item (forechecking :979), applied. shooting :506 is logged as a Major gap. 0 LOST; harness 1:1, 0 asides; each chunk that ends near a change ends safely. |

### C11
The W326 authors wrote the wave. Every coordinator change after review was a reviewer's wording applied verbatim. The coordinator chose between two reviewers' fixes for switching :245, recorded why, and had the choice re-checked. The coordinator wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all six files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | 620(b) added to three Sources trailers, verbatim |
| D5–D8 | not engaged |
| D9 Summary layer | KTs and Common Mistakes in all six files |
| D10 Key-facts layer | 14 facts lines, voiced alone, checked by the rules-verifier and both safety-reviewers |
| D11 Reader safety | safety-reviewer ×2, plus a census and a narrow re-check |
| D12 Read-aloud | authors and both safety-reviewers rendered the changed files |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only) |

## What this method could not have found
- **Units the census could not see.** A unit pricing the act in words that avoid "behind", "608", "back" and "misconduct" would have been missed, and so would diagram captions.
- **603 and 609.** USA Hockey 603 boarding and 609 cross-checking may also price a hit from behind; the lists of ejecting conditions do not name them (plan row).
- **Concurrent assessment.** Whether 608 and 620 are assessed together is unsettled on disk.
- **Listening.** Whether the 295–300-character facts lines can be followed at speaking pace needs a human listening pass.

## The census (safety-reviewer, read-only, HEAD 7272b25a)

Shape 1 = priced at 608(a)'s floor with no 608(b)/Casebook ejecting condition in the same spoken unit.
Shape 2 = tiers present, a Hockey Canada head limb beside them, no 620(b) head limb.

## Shape 1 (floor-only)
- risk_management :840 facts (CRITICAL; ends "USA Hockey: at least a minor and a misconduct (608(a))"; tiers at :842 separate line; also shape 2; at cap)
- risk_management :988 KT11 (CRITICAL; "USA Hockey starts at a minor and a misconduct and can end it too" — no condition; "can" understates the Casebook "must"; no 620(b))
- risk_management :923 Common Mistakes (CRITICAL; "USA Hockey starts at a minor and a misconduct but can also end your game"; no 620(b))
- risk_management :854 body ⚠️ lead (MAJOR; "...every book here except USA Hockey, so never price it at USA Hockey's minor plus misconduct (608(a))" — last paragraph of chunk 061, USA tiers :856 open chunk 062)
- risk_management :906 body ⚠️ (MINOR; same sentence, tiers :908 same chunk)
- switching_positions :244 facts (CRITICAL; "...but USA Hockey: floor a minor and misconduct"; tiers :245 separate line; at cap; HC head limb present)
- puck_support_and_spacing :601 facts (CRITICAL; ends "USA Hockey: at least a minor and a misconduct (608(a))"; tiers :602 separate; 286 chars)
- puck_support_and_spacing :626 body (MAJOR; "Under USA Hockey a mild one need not end your game but is still at least a minor and a misconduct (608(a))" — no ejecting tier anywhere in chunk 027; also "a mandatory match in some" names no book)
- playing_without_the_puck :1047 Common Mistakes (CRITICAL; "USA Hockey starts at a minor and a misconduct, and every book but the IIHF's can make it a match"; no 620(b))
- playing_without_the_puck :820 facts (MINOR; "USA Hockey keeps a minor plus misconduct for an open-ice push or light pinch (Casebook 608, Sit. 1)"; tiers :821; at cap)
- forechecking_systems :970 body What it costs (MAJOR; "USA Hockey starts at a minor and a misconduct", only 608(c) in unit; tiers in chunk 063)
- shooting :534 body ⚠️ goalie (MAJOR; "USA Hockey's lowest call is a minor plus a misconduct (608(a))"; 608(b) head first into goal frame opens chunk 037 at :538)

## Shape 2 (no 620(b) beside a Hockey Canada head limb)
- body_contact_and_battles: Key focus :31 (Major), CM :2049+:2051 (Major), KT6 :2169 (Major)
- risk_management: :840, :923, :988 (above); :854/:856, :906/:908 body (Minor)
- rules_primer: Overview :35 (Major); body :473 (Minor)
- defending_the_rush: :402 (Minor), :941/:943 (Minor), CM :1097 (Major)
- forechecking_systems: facts :319, :700 (at cap), :977 (Major); body :336, :710, :763, :970 (Minor)
- defender: facts :817 (at cap) (Major); body :298, :459, :831, :946 (Minor)
- center: facts :684, :877 (at cap) (Major); body :701, :783, :874, :883 (Minor); CM :898, :907 (Major); KT6 :976 (Major)
- goaltender: :1652 body list (Minor)
- faceoffs: body :590, :1209, :1222 (Minor); CM :1319 (Major)
- playing_without_the_puck: :820, :1047 (above); :845/:847 (Minor)
- defensive_zone_coverage: facts :166 (Major); body :179, :487 (Minor); CM :858 (Major); KT4 :926 (Major)
- switching_positions: :244 (above); body :270 (Minor); CM :607 (Major); KT8 :674 (Major)
- shooting: facts :506 (Major); :534 (above); CM :945 (Major)
- puck_support_and_spacing: :601, :626 (above)

## Adjacent (not graded)
- No USA price at all where other books priced: rules_primer Key focus :19, KT7 :1204 (608(c) only); language_and_glossary :292, :430, :507, KT12 :540; goaltender CM :1699; defending_the_rush CM :1085
- body_contact :743 boarding (603) at the floor alone ("the floor there is a minor plus a misconduct")
- Diagram captions not swept.
