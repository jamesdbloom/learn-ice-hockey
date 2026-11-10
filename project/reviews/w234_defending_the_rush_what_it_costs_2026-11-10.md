# W234: defending_the_rush gets one "What it costs" section; "Sit." voiced as "Situation" (10 November 2026)

**Files:**
- content/systems/defending_the_rush.md
- scripts/md_to_speech.py (the "Sit. N" rule plus a self-test case)
- project/plans/OPEN_ITEMS.md
- this record

## Source
- **Owner decision, 8 November 2026.** The readability method is structural: one "What it costs" section per page holds the penalty ladders, and body sections keep only the scene tier with a pointer.
- **Owner decision, 9 November 2026.** Instruction first in What it costs subsections.
- **Order.** defending_the_rush is the next page in the census order in reviews/census_restated_ladders_2026-11-08.md, with 15 sites; defender was already done. The lessons from the pilot (sg205) went into the brief.
- **Renderer row.** "Sit. 9" was voiced literally. The other half of the old row, "(i) voiced as clause one", was re-checked and refuted: IIHF 56.2 runs (I), (II), (III) and NHL 56.2 / PWHL 57.2 run (i), (ii), (iii), so all are roman and "clause one" is correct.

## What changed
1. **A new "## What it costs" section before Common Mistakes, with 10 subsections.** The subsections are:
   - Angling
   - Where checking is barred
   - Boarding
   - Interference on a backcheck
   - A hit from behind (the page's one ladder)
   - Charging
   - The far attacker's stick
   - A slide across the passing lane
   - The carve-outs (moved whole, anchor unchanged)
   - A puck in your own crease

   Each opens on a bold instruction, then the ⚠️ top tier, then any facts panel, then the ladder.
2. **Body scenes keep the instruction and the scene tier, then a pointer.** New scene sentences were added at Angle, backcheck, hounding, slide, breakaway and crease. Common Mistakes links were retargeted to #charging, #boarding and #a-slide-across-the-passing-lane, and KT9 was shortened.
3. **Duplicates dropped, each confirmed by the rules-verifier.** These were P266, P268, F238, F434, and the duplicated P358 and P262 sentences. Four facts lines (F336, F338, F467, F469) went back to the body because a 1–2 line block fails MIN_FACTS.
4. **Fixes from review:**
   - **Backcheck :336 (safety BLOCKING B1, rules FIX-cheaper).** The new "Hold the player instead and … a major and game misconduct if it injures" read as an instruction to hold and priced only injury. It became "**Never hold the player either** — holding is a penalty in every book: under Hockey Canada a minor, and a major and game misconduct if it injures; under CARHA a minor or, at the referee's discretion, a major and game misconduct, mandatory if it injures." Verified in all six books: NHL 54.2, IIHF 54.2, PWHL 55.2, USA Hockey 622(a), Hockey Canada 8.1, CARHA 63.
   - **KT9 (safety BLOCKING B2).** The demotion had left "(under Hockey Canada, while it stays off the head)" with no counterweight. That carve-out now carries "on the head it is head contact instead, a match if they cannot protect themselves" (Hockey Canada 7.6(c)/7.7(c), which supersede other rules). This was applied at all ten sites carrying the claim, the five the review named plus the hounding lead, the What it costs lead, Common Mistakes, F405 and KT9.
   - **PWHL angle (rules FIX-harsher, :254, :893, and a HEAD sentence at :893).** "Finishing the angle with your body risks your game" contradicted PWHL 52.1, which permits a same-direction body finish. It now reads "extend a hip or shoulder or step into her at the end of the angle".
   - **Hounding :412 and :254 (safety R2).** Added "mandatory on injury in Hockey Canada and CARHA, and a match if warranted in CARHA" (CARHA Casebook 49 Sit. 1).
   - **Boarding "What counts":** "Sending an opponent **dangerously** into the boards" (NHL, IIHF and PWHL 41.1, Hockey Canada 7.2(a), USA Hockey 603).
   - **Slide :543:** "on the violence of the hit" (Hockey Canada 8.7(b)).
   - **Angling lead :879:** "barred in their non-checking games".
5. **Renderer.** scripts/md_to_speech.py LEXICON gained "Sit. 1" … "Sit. 9" → "Situation N". The rule is digit-led and case-sensitive, so the verb "sit." is untouched, and an imperative "Sit." is too unless a digit follows it (none in content/). Self-test cases were added, and one old expectation that pinned the literal reading was updated: 307 assertions, 0 failures. The change was made between waves, after the W234 author finished and before any reviewer rendered.

## Measured
- **check_readability (measured after the final edit):** words 20,662 → 21,621 (moves plus scene tiers); long Key Takeaways 1 → 1 and KT max 90 → 67 (KT9 regained length when the safety fix restored its Hockey Canada head counterweight; the author's pre-fix figure of 60 is superseded); rule references 220 → 212; ⚠ 66 → 83.
- **Render:** 77 chunks either way.
  - The body before What it costs went from 70 chunks / 164k characters to 46 chunks / 108k.
  - Tariff words in that body fell from 1.96 to 0.68 per 1,000 characters.
  - What it costs is about 32.5% of the episode (plan row).
- **Markers:** check_marker_pairs 67 → 82 marked units, 0 LOST. There are 7 rekeyed openings and 2 split-half candidates, :943 and :972, both under marked leads (NOTE). `--panels` 0; `--bare` 0.
- **At 400px:** What it costs starts at 60% of the page, and the tallest panel is The carve-outs at 2,916px (plan row).

## Reviews
| Reviewer | Result |
|---|---|
| authoring agent | Restructured the page; wrote limb inventories before and after; reported the dropped duplicates, the KT9 demotion and every composed sentence. Applied the fixes, and carried the head counterweight to four sites beyond the brief. |
| rules-verifier | Angle and hounding main sentence CORRECT for four books (USA Hockey 604(d)/(e) and 602(a), Hockey Canada 7.3(b)/(e), CARHA 49(a) and 30(a), IIHF 101.1 major and GM). PWHL angle FIX-harsher. Backcheck CARHA FIX-cheaper. Slide WORDING. Breakaway, crease, boarding and the ten leads CORRECT. "What counts" WORDING. Dropped duplicates confirmed. |
| safety-reviewer (full page, rendered) | BLOCKING B1 (backcheck hold) and B2 (KT9 head carve-out). R1: head carve-out at other sites. R2: hounding scene. Each scene tier is in its scene's chunk; no permission ahead of its limit; pointers follow voiced tiers. |
| safety-reviewer (narrow re-check, rules and safety) | Nothing blocking. B1 is verified in all six books; the head counterweight is correct at all ten sites (naming only the match is safe); :893 matches PWHL 52.1; the other edits are upheld. F237 without the CARHA match limb is acceptable, since the limb is voiced in three places. |
| commit-gate | CLEAR. Notes applied before commit: the renderer row in OPEN_ITEMS closed (34 citations in 18 documents, not 22), and the "Sit." comment scoped to digit-led cases. |
| site-reviewer (Playwright Chromium; 400×860 and 1440×900, light and dark) | Nothing blocking. 0 warning panels, 0 bare glyphs, 0 literal `**`; anchors clear the header and the audio bar; no overflow; console clean; tactics-first overall (48 of 544 body lines carry tariff wording, against 100 of 122 in What it costs). RECOMMENDED items logged as plan rows: the heavy carve-outs subsection, paired pointers, tariffs still restated in scene paragraphs, four subsections without a panel, the "What it costs you:" label. |

### C11
- The author wrote the restructure and the fixes.
- The coordinator wrote the renderer rule, the self-test expectation, the plan row and this record.
- Every fix the author applied came from a reviewer's finding and was re-checked by the narrow re-check.

### Checks after the last content edit
- check_facts exit 0, run with no pipe.
- check_links --quiet exit 0.
- check_absolutes exit 0.
- check_marker_pairs: 0 LOST.
- md_to_speech --self-test: 307 / 0.
- Full `npm run build` (absolute binary) exit 0 after the final edit.
- check_callout_flow --bare 0 and --panels 0.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D4 Rules, exceptions, divergence, citations | rules-verifier plus the narrow re-check: USA Hockey 602, 603, 604, 616, 622, 637; Hockey Canada 4.12, 7.2, 7.3, 7.5, 7.6, 7.7, 8.1, 8.7; CARHA 30, 36, 49, 53, 58, 63, 83 and Casebook 49; IIHF 25, 41, 43, 44, 54, 57, 101; NHL and PWHL 41, 43, 52, 54, 55, 57, 58 |
| D5 Provenance | not engaged |
| D6 Negatives | "holding is a penalty in every book" verified in six books |
| D7 Cardinal rule | each subsection leads with the instruction |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | KT9 corrected; Common Mistakes links and the head carve-out corrected |
| D10 Key-facts layer | panels consolidated; four facts lines returned to the body; F405 rewritten at 299/300 |
| D11 Reader safety | safety-reviewer ×2, full page and rendered |
| D12 Read-aloud | rendered three times; every scene tier is in its scene's chunk; "Sit." now voices as "Situation" |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; anchors clicked |
| D15 Rendered site | site-reviewer on the final build |

## What this method could not have found
- An owner-parity mismatch with body_contact_and_battles, which was not read. Tightening What it costs needs that read.
- A counterweight that HEAD itself never had.
- Real phones and screen readers. The narration audio lags until it is rebuilt.
