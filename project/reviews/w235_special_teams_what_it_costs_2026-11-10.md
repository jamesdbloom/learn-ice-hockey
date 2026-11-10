# W235: special_teams gets one "What it costs" section; the USA Hockey 608(c) mandatory match joins the "must give a match" list (10 November 2026)

**Files:**
- content/systems/special_teams.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **Owner decisions.** The "What it costs" readability method (8 November 2026) and instruction-first (9 November 2026).
- **Page.** special_teams is the next page in the census order after defending_the_rush, with 14 sites.
- **Brief.** The shared brief (scratchpad WIC_BRIEF.md) carried the pilot's lessons and W234's: a carve-out keeps its counterweight; a new scene sentence leads with the prohibition; no back-to-back pointers; no full tariff restated before a pointer.
- **Strength rules left alone.** 4-on-4, minor against major, 19.3 and the goalie freeze are not penalty ladders, so they stayed where they were.

## What changed
1. **A new "## What it costs" section before Common Mistakes, with five subsections:**
   - A fight
   - A hit from behind
   - Over the glass
   - A smothered puck
   - Contact with their goalie (the former goalie-contact section)

   Each subsection opens on a bold instruction, then the ⚠️ top tier, then a facts panel where one exists, then the ladder. Body scenes keep their tier and gained a pointer. Four Common Mistakes links were retargeted, and nothing else links to the removed anchors.
2. **One duplicate dropped.** Facts :1133 (USA Hockey, a reckless hit from behind on a goalie) was removed. Its limbs live in :1101 and :1109; this was confirmed by the rules-verifier and the safety-reviewer. KT8 was kept whole, which the safety-reviewer upheld.
3. **Fixes from review:**
   - **Fight scene (safety BLOCKING B1).** When the instigator limb moved out of the scene, the new "is also an automatic game misconduct" in the last five minutes came to imply that an earlier fight does not eject. The bullet now reads "In Britain, under the In-House Rules, whoever starts a fight takes an automatic game misconduct whenever it happens…". That is verified against IIHF 2026/27 46.10, which applies through the In-House Rules. The one-game ban covers "then or at the end of the game", from DOPS C.2 (layout :469). The limb shares a chunk with "Do not fight".
   - **USA Hockey 608(c) (rules FIX-harsher, also safety R1; pre-existing).** The closed list "Hockey Canada and CARHA must give a match" omitted USA Hockey 608(c): "A match penalty shall be assessed for checking from behind in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position."
     - Added at :1109, :1111 and CM :1250.
     - The two facts lines at their cap (:657 at 296/300, :1104 at 284/300) could not take it without cutting a limb. New facts lines follow each instead (at :657 the 608(b) and next-game lines moved into the What it costs hit block, and the 608(c) line now follows :657): "Rule: USA Hockey 608(c) must give a match for … boards or not, goalie or skater". Both blocks stay within MAX_COACHING_FACTS and HARD_MAX.
   - **Hockey Canada head counterweight.** On the head it is head contact instead. After three gate rounds (below), all four sites (:1099, :1109, :1111, CM :1250) carry one clause, supplied by a rules-verifier and applied verbatim: "a major and game misconduct that can be given if it is violent and must be if they are hurt, but in Junior and Senior must be if it is very violent or their head is injured hitting the glass, ice or boards".
     - Minor and female hockey, 7.6(b): "may" for violence, "must" if injured.
     - Junior and Senior, 7.7(b), which supersedes the other head rules: "will" for a high degree of violence, or a head injury from the glass, ice or boards after an illegal hit. 7.7(a) is a minor plus misconduct otherwise.
     - This matches the owner, body_contact_and_battles :714 and :800.
     - Facts :659 and the goalie head line remain match-only at their caps, which was ruled acceptable.
   - **First commit gate BLOCK (the coordinator's own edit).** After the narrow re-check, the coordinator inserted "it is violent or" at four sites without re-reading 7.6(b). At :1109 that put "mandatory" on the violence limb, and the other three stated a discretionary tier as flat fact. A narrow rules-verifier then checked a coordinator correction against sources/hc_layout.txt :4908-4998. It found "possibly if it is violent" CHEAPER for Junior and Senior, where 7.7(b) is mandatory, and supplied the wording above, applied verbatim.
   - **Smaller fixes:**
     - The fight lead now names the one-game ban at clubs in England or Wales outside the Elite League.
     - "No glass, no penalty" gains "— a deliberate one is still the minor" (safety R3).
     - The Common Mistakes net-front bullet gains a second link, to A hit from behind.
     - The Key line now reads "can decide".
     - :1109 now reads "the harsher of checking from behind and goaltender interference".

## Measured (check_readability --file; HEAD via READABILITY_CONTENT_DIR)
| | HEAD | after |
|---|---|---|
| prose words | 22,305 | 22,986 |
| longest sentence | 87 | 129 |
| long paragraphs | 1 | 4 |
| long Key Takeaways | 2 | 2 |
| KT max | 75 | 75 |
| rule references | 74 | 77 |
| ⚠ | 49 | 53 |

- **Readability cost of accuracy:** the division-split Hockey Canada head clause lengthened four sentences, which is why long paragraphs went 1 → 4 and the longest sentence 87 → 129. Splitting those sentences is a plan row; the clause's content must not be shortened.
- **Render:** 84 chunks, and What it costs is about 11% of the characters.
- **Markers:** check_marker_pairs 56 → 59 marked units, 0 LOST; `--panels` 0; `--bare` 0.
- **400px layout:** What it costs runs from 78.3% to 87.7% of the page, and its tallest subsection is Contact with their goalie at 6,093px (plan row).

## Reviews
| Reviewer | Result |
|---|---|
| authoring agent | Restructured the page and wrote limb inventories before and after; no limb was lost. Added the Hockey Canada head counterweight at three sites and scene tiers at the fight, :1098 and smothering. Applied the fixes; where the cap blocked an in-line addition, it added a facts line instead of cutting a limb. |
| rules-verifier | Restructure sound; nothing cheaper. Over-the-glass, smothered-puck, the :1064 charge and the goalie lead are CORRECT in all six books. FIX-harsher: the head tier and 608(c) (item 8, found by reading all of USA Hockey 608). WORDING: the fight lead. The dropped duplicate is confirmed. |
| safety-reviewer (full page, rendered) | BLOCKING B1, the fight instigator limb. R1 608(c), R2 a pre-existing facts carve-out, R3 the glass permission ahead of its limit. KT8, the duplicate drop and the fight lead's "can" are upheld. |
| safety-reviewer (narrow re-check, rules and safety) | Nothing blocking. Verified: the instigator limb (IIHF 46.10 through the In-House Rules); the DOPS "end of game" limb (C.2 layout :469); 608(c), with "goalie or skater" fair; both blocks within caps. RECOMMENDED: "violent or hurt" for the Junior/Senior 7.7(b) trigger, applied in its wording. |
| commit-gate (first run) | BLOCK: the coordinator's post-review Hockey Canada head-tier wording overstated 7.6(b) ("mandatory … if it is violent"). Everything else passed: lost limbs, 608(c), the instigator limb, the measured table, timing, and the strength rules unchanged. Non-blocking: the record should state that at :657 the 608(c) line followed the 608(b) line, which moved with the game-misconduct line into the What it costs hit block. |
| commit-gate (second run) | BLOCK: the injury limb "must be if they are hurt" was stated for all of Hockey Canada; Junior and Senior 7.7 has no general injury limb (harsher than the book there). Everything else passed. |
| rules-verifier (narrow, final head-tier clause) | One division-split clause for all four sites, checked against hc_layout.txt :4908-4998 and the owner text; applied verbatim. |
| rules-verifier (narrow, the head tier) | :1109 acceptable. "Possibly if it is violent" was cheaper for Junior and Senior (7.7(b) mandatory for high violence); wording supplied and applied verbatim. |
| site-reviewer (Playwright Chromium, 400 and 1440, light and dark) | Nothing blocking. 0 warning panels, 0 bare glyphs, 0 literal `**`. Anchors clear the header and the audio bar. No overflow; console clean. Tactics first (the power play at 3%, What it costs at 78%). RECOMMENDED: the goalie subsection's weight, a leftover body Rule panel and consecutive cross-references are plan rows. |

### C11
- The author wrote the restructure and the fixes.
- The coordinator applied the narrow re-check's "violent or they are hurt" recommendation at four prose sites WITHOUT re-reading Hockey Canada 7.6(b). The commit gate blocked it as harsher than the book (7.6(b) violence is discretionary). The coordinator's first correction was then found cheaper for Junior and Senior by a narrow rules-verifier, whose exact wording is now in place. The coordinator also wrote the plan row and this record.
- The site review ran on the build before the fix pass. The fix-pass edits are sentence-level inside existing units plus two new facts lines. The final build was checked mechanically: bare 0, panels 0, and links resolve.

### Checks after the last content edit
- check_facts exit 0, run with no pipe.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs 0 LOST.
- Full `npm run build` (absolute binary) exit 0 after the final edit.
- check_callout_flow --bare 0 and --panels 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules, exceptions, divergence, citations | rules-verifier plus the narrow re-check: IIHF 46.10, 63; NHL 63, 67; PWHL 65, 69; USA Hockey 608, 610, 614; Hockey Canada 7.5, 7.6, 7.7, 8.5, 10.1, 10.2; CARHA 53, 55, 58, 75; the In-House Rules Section 6; DOPS C.1/C.2 |
| D5 Provenance | not engaged |
| D6 Negatives | "no other must-give-a-match list in the file", grepped |
| D7 Cardinal rule | each subsection leads with the instruction |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | KT8 upheld whole; Common Mistakes corrected (608(c), head tier, links) |
| D10 Key-facts layer | two new 608(c) lines; :1133 dropped as a duplicate; caps respected |
| D11 Reader safety | safety-reviewer ×2, full page and rendered |
| D12 Read-aloud | rendered three times; the fight limb shares a chunk with its instruction |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; anchors clicked |
| D15 Rendered site | site-reviewer on the restructure build; the final build checked mechanically |

## What this method could not have found
- The same closed "must give a match" list without 608(c), and the head tier, in other documents. This is a corpus-wide plan row.
- Full owner parity with body_contact_and_battles beyond the Hockey Canada head clause (the final rules-verifier read the owner's :714/:800 for that clause only).
- Real phones and screen readers. The narration audio lags until it is rebuilt.
