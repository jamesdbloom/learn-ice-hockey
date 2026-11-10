# W241 and W242: playing_without_the_puck and shooting each get one "What it costs" section (10 November 2026)

**Files:**
- content/hockey-iq/playing_without_the_puck.md (W241)
- content/technique/shooting.md (W242)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The owner's "What it costs" method (8 November) and instruction-first rule (9 November). These are the next pages in the census order after zone_entries and risk_management. Two authors worked in parallel, one page each, from the shared brief (WIC_BRIEF.md) with lessons 1–17. Lesson 17 is the one W239 and W240 learned at the gate: USA Hockey 602(a) must stay in each reckless scene's own chunk.

For the first time, each author was required to render HEAD and the result and compare per-chunk counts of "six hundred and two", "six hundred and eight", "seven point five" and "fifty-three" for every scene. Both reported no scene losing a count. Several scenes gained 602(a).

## What changed
**playing_without_the_puck (W241).**
- **New section.** What it costs, before Common Mistakes, with three subsections: Where checking is barred; A pick; A hit from behind.
- **Prices left in place.** The clearing price and the no-contact screen price stay where they are, because there the price is the decision; their labels became "The price.". The goalie-contact and charge section also stays in place, because every tier there is mandatory and the price decides where a screener may stand.
- **Hockey Canada counterweight.** The author found three sites with the "off the head" carve-out and no counterweight (F831, P856, CM1021) and fixed them.

**shooting (W242).**
- **New section.** What it costs, with three subsections: The slap shot under CARHA; High sticks on the wind-up and follow-through (the whole high-stick subsection, with its facts block byte-identical); Contact with a goalie (Hockey Canada 8.5, charging, CARHA 52(b), match penalties, interference that injures, and the 43/48 sentence).
- **Unchanged.** All 25 facts blocks are unchanged as a set, and the penalty-shot material (including the USA Hockey 621(d) and CARHA 62(d) shoulder-height stop) and every quotation are verbatim. The W236 608(c) paragraph was only reordered, to lead with "Never drive a goalie into the net from behind.".
- **602(a) added at three scenes.** The wind-up, one-timer and net-front scenes gained USA Hockey 621(b) and 602(a) where HEAD had no tier, or only a pointer.

**Fixes from review, playing_without_the_puck:**
- **B1 (rules, with safety R1 agreeing; pre-existing and repeated in the new section).** Neither the checking-barred scene (P224) nor "Where checking is barred" gave Hockey Canada's price. Hockey Canada 7.3 (U13 and below, female hockey) is: 7.3(a) a minor; 7.3(b) a major and game misconduct on "the degree of violence of the impact", and mandatory if it injures; 7.3(c) a match for a deliberate attempt to injure or a deliberate injury. CARHA 49(a) was summarised as "penalises", which hid a mandatory major when intentional contact injures, and 30(a) makes that an ejection. Both are now stated at P224, :993, :995 and CM1025. The IIHF 101.1 tier is scoped "in women's hockey".
- **B2 (rules).** The British one-game ban (eih_dops Appendix C.1) had left the hit-from-behind scene. It is restored at :843: "and at an English or Welsh club outside the Elite League on at least a one-game ban as well". The safety reviewer judged its absence safe because F822 voiced it two chunks earlier; it was restored anyway, at the cost of one clause.
- **:1018 and F819.** "Plan on a match (602(a))" had attached to a head-first hit that was not reckless. It is now "if it is reckless", matching the scene. F819 is at 299/300 with every limb kept.
- **F818.** Uses the rules-verifier's 294-character line with "(Hockey Canada: if off the head; on it, a match if defenceless)".
- **:1009.** "That holds for a game misconduct from any foul, not a pick alone."
- **Pointer.** One redundant pointer in the What it costs intro was cut.

**Fixes from review, shooting:**
- **Crease scene :528 (safety R1, then the narrow re-check).** The crease scene's chunk had lost Hockey Canada 7.4(c)'s mandatory match, while USA Hockey's match stayed. The first fix put it mid-list, where the CARHA item that followed could be heard as a CARHA match. Applying 7.4(c) to a goalie is also a reading: 8.5 is Hockey Canada's special goalie rule, and its match is for an attempt to injure. The final text, the re-check's own sentence, reads: "a major plus a game misconduct, mandatory under Hockey Canada (8.5(b)), under CARHA in the crease or whenever it injures (52(b)), under USA Hockey when reckless (607(b), below), and in the NHL, PWHL and Elite League when a major for it injures the face or head; under Hockey Canada, plan on a match too if they cannot defend themselves (7.4(c))".
- **Tips :268 (safety R2, pre-existing gap).** Gained "under USA Hockey a reckless one is a mandatory major and game misconduct (621(b))".
- **Slap shot :159.** "A slap shot there is a minor, and a major that ends your game if it injures (79(a), 30(a)); a fake is a minor too (79(b))." Before, "it is a minor" could be heard as describing the fake.
- **Net front :304.** Three dashes were split into two sentences, and a back-to-back pointer was removed.
- **Smaller wordings.** "Even with nobody hurt" (8.5(b)); "NHL and PWHL 42.4"; and :924's "harsher of 43 and 48" is now labelled "that is a reading, because IIHF 48.1 says it supersedes other head-hit rules while 43.1 claims any hit from behind".
- **Hockey Canada "harsher of" clause at :912.** Left as written, pending the corpus-wide ruling (plan row). Both reviewers rule it safe, because it can only price higher.

## Measured (check_readability --file; HEAD via READABILITY_CONTENT_DIR)
| | playing_without_the_puck HEAD → after | shooting HEAD → after |
|---|---|---|
| prose words | 21,754 → 22,554 | 17,769 → 18,297 |
| longest sentence | 68 → 73 | 72 → 97 |
| long paragraphs | 1 → 2 | 0 → 0 |
| longest paragraph (chars) | 1,270 → 1,350 | 1,003 → 987 |
| long Key Takeaways | 1 → 1 | 0 → 0 |
| KT max | 66 → 66 | 60 → 60 |
| rule references | 272 → 290 | 126 → 139 |
| ⚠ | 40 → 45 | 47 → 51 |

Other measurements:
- **check_marker_pairs:** playing_without_the_puck 42 → 46 and shooting 59 → 63 marked units, with 0 LOST on both. The one split-half candidate (shooting :924) was ruled acceptable by two reviewers: its HEAD marker was on the 608(b) clause, which stays marked at the scene.
- **`--panels` and `--bare`:** 0 on both pages.
- **Where What it costs starts at 400px:** 76.9% down playing_without_the_puck and 80.2% down shooting.

Both pages grew, and shooting's longest sentence rose from 72 to 97 words, because mandatory tiers were added at scenes (plan row).

## Reviews
| Reviewer | Result |
|---|---|
| authoring agents ×2 | Restructured each page. Wrote before and after limb inventories, with no limb lost. Rendered HEAD and the result and compared per-chunk rule counts per scene. Applied both fix passes and verified every new quotation in the source. |
| rules-verifier (playing_without_the_puck) | **B1:** Hockey Canada 7.3 and CARHA 49(a) prices missing. **B2:** the British ban left the scene. **WORDING:** :1018, F818, IIHF 101.1 scope, :1009. 604(d), 8.3(b), 66(e), 625, the pick ladder, the next-game rules, Casebook 608 Sit. 1 and the British limb are CORRECT. "Harsher of" is safe here. |
| safety-reviewer (playing_without_the_puck, rendered against HEAD) | Nothing blocking. **R1:** the same Hockey Canada and CARHA gap. **R2:** "if reckless" at :1018. The protected text is byte-identical. Every Hockey Canada carve-out now has its counterweight. Leaving goalie contact in place is right. |
| rules-verifier (shooting) | Nothing blocking. "No book caps a high stick to a person at a minor" was swept across every book and is true. 621(b), 602(a), 60.4, 62(b) with 30(a), 8.5(b) for interference that injures, and the moved paragraphs are CORRECT. **WORDING:** :159, :304 dashes, "even with nobody hurt", PWHL 42.4, and labelling :924 as a reading. |
| safety-reviewer (shooting, rendered against HEAD) | Nothing blocking, with three scenes stronger than HEAD. **R1:** 7.4(c) back at the crease scene. **R2:** the tips 621(b). **R3:** the net-front dashes and pointer. CARHA 52(a) living only in What it costs is safe, because 52(b)'s injury limb covers it at the scene. |
| safety-reviewer (narrow re-check of both fix passes, rules and safety) | Nothing blocking. Hockey Canada 7.3 and its scope, CARHA 49(a), the British ban (eih_dops), F819, F818, :268, :159, :304 and PWHL 42.4 (read: word for word the NHL's) are CORRECT. **WORDING:** the :528 mid-list misparse and the 7.4(c)-for-a-goalie reading. The coordinator applied the re-check's sentence verbatim, plus its two optional tightenings ("or a deliberate injury" at :995, "with a hit" at CM1025). |
| site-reviewer (both pages; Playwright Chromium at 400 and 1440, light and dark) | Nothing blocking. Every subsection is `P > STRONG` then `span.warn-inline`. There are 0 panels, 0 bare glyphs, 0 glyphs inside strong runs and 0 literal `**`. Every pointer lands clear in both audio states. The old high-stick anchor is linked nowhere in dist. The console is clean and there is one h1. **RECOMMENDED:** amber asymmetries and the tall high-sticks subsection (plan row). |

### C11
The authors wrote both restructures and both fix passes. The coordinator applied three wordings verbatim from the narrow re-check: shooting :528, playing_without_the_puck :995 and CM1025. The coordinator also wrote the plan row and this record. The site review ran on the build before those three edits. The final build was checked mechanically for the new strings and for bare glyphs.

### Checks after the last content edit
- check_facts exit 0 (no pipe).
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs 0 LOST.
- Full `npm run build` (absolute binary) exit 0 after the final edit, with the edited strings present in dist.
- check_callout_flow --bare 0 on both pages.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules | NHL 21, 42, 43, 48, 56, 60; PWHL 21, 42, 43, 57, 61; IIHF 5.1, 42, 43, 48, 56, 60, 101; USA Hockey 602, 604, 607, 608, 621, 625, 640, 404, 403 and Casebook 608 Sit. 1 and 621; Hockey Canada 4.8, 7.3–7.7, 8.3, 8.5, 9.5; CARHA 30, 32, 48, 49, 52, 53, 62, 66, 79; EIHL Casebook 42; IHUK DOPS Appendix C.1 |
| D5 Provenance | not engaged |
| D6 Negatives | "No book caps a high stick to a person at a minor" (swept, true); "no tier inside 625" (true) |
| D7 Cardinal rule | every subsection and scene leads with the instruction |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | CM1025 and CM1043 corrected; KT3 and F199 checked and not built on the old gap |
| D10 Key-facts layer | F818, F819 and F831 rewritten, each checked voiced alone; shooting's 25 blocks unchanged |
| D11 Reader safety | safety-reviewer ×3, rendered against HEAD |
| D12 Read-aloud | per-chunk rule counts compared between HEAD and the result for every scene |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; pointers clicked; the old anchor is gone from dist |
| D15 Rendered site | site-reviewer; the final build was checked mechanically |

## What this method could not have found
- Another rule in some book that prices these acts under a heading nobody searched.
- Scenes that were already missing a mandatory tier at HEAD. Comparing against HEAD finds losses, not old gaps; two (Hockey Canada 7.3 and the tips 621(b)) were found only by reading the rules in full.
- Whether Hockey Canada 7.4(c) reaches a goalie, which is a reading either way, and how Hockey Canada would resolve "harsher of" against "supersedes" (plan row).
- Real phones and screen readers. The narration audio lags until it is rebuilt.
