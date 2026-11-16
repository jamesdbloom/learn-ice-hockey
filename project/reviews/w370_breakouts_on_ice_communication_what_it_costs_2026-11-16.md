# W370: one "What it costs" section on breakouts and on_ice_communication (16 November 2026)

**Files:**
- content/systems/breakouts.md
- content/foundation/on_ice_communication.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave continues the owner's "What it costs" restructure. The design is in project/what_it_costs_design.md, and the 8 November priority puts readability first.

A census on 16 November found that 16 pages already carry a `## What it costs` section, so the plan row's "Next: forechecking_systems" pointer was stale. Four pages still had scattered "What it costs" paragraphs. Measured with `check_tactics_ratio --by-layer`, the two largest were:
- breakouts: 8 paragraphs, 49% of the page in rules-bearing units;
- on_ice_communication: 9 paragraphs, 54% rules-bearing.

## What changed

**A. breakouts.** This was a scoped restructure.
- **What moved.** Three hazards whose tariff was spread through coaching sections moved into a new `## What it costs` section (:1110) with three subsections:
  - interference and the net-front screen, including the whole 10,400-character "Screening the net front: what each book allows" subsection, whose heading and anchor are unchanged;
  - over the glass;
  - pinning.
- **What stayed.** These stay where the rule is the decision, following the game_management and risk_management precedent:
  - §1 clears: icing, no change after icing, the kill exemption and the major-penalty box;
  - the power-play icing paragraph;
  - the delayed penalty;
  - the delayed offside;
  - the trapezoid and freeze.
- **How it moved.** Every moved line is verbatim apart from four new or reworded sentences and the pointer edits.
- **Result.**
  - Body sections that gave up material shrank from 35,071 to 19,067 characters.
  - The section voices as 8 of 81 chunks, about 10%.
  - The D2 facts block went from 14 to 8 lines and the Wheel block from 14 to 11.

**B. on_ice_communication.** This was a full restructure followed by a tightening pass.
- **What moved.** All 9 scattered "What it costs" paragraphs and 7 more tariff paragraphs moved, along with two whole rules subsections: "Moving a screener" (h4 → h3, anchor unchanged) and "Where your goalie may play the puck". They form 8 subsections: kicking; over the glass and after the whistle; icing and the kill; pinning; moving a screener; line changes; faceoff violations; and the goalie.
- **Facts blocks.** The two blocks that had been at HARD_MAX 14 now hold 9 and 12 lines.
- **Unchanged text.** :545 (Hockey Canada after the whistle, shipped in W369) moved byte-identical. After review, its opening "is a misconduct" became "can be a misconduct" (see Reviews).
- **Tightening (owner's "keep the section tight").**
  - The section went from 7,672 to 6,230 words.
  - Its share of the audio fell from 38.8% to 34.1% of spoken characters; it is now 17 of 55 chunks.
  - Every cut limb is still voiced: either by a facts line on this page, or by an owner page whose sentence the author quoted and the safety reviewer re-read. The owners are rules_primer, faceoffs and goaltender.
  - Two details now survive only by implication on this page: "the NHL and Hockey Canada write no crease stoppage", and the USA Hockey Casebook 613 Situations 9–10 citation, which remains in the unvoiced trailer.

| Measure | breakouts HEAD → after | on_ice_communication HEAD → after |
|---|---|---|
| prose words | 21,418 → 21,678 | 15,965 → 15,147 |
| tactics ratio | 49% → 49% | 54% → 53% |
| spoken chunks | 80 → 81 | 58 → 55 |
| check_marker_pairs | 0 LOST, 0 SPLIT | 0 LOST, 0 SPLIT |
| amber panels | 0 | 0 |

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier, breakouts | Items 1–4 and 5a OK, checked against all six books. They include "drifting across is interference in every book" and the mandatory injury major+GM under HC 8.3(b) and CARHA 66(e)+30(a). **WRONG (context):** "The IIHF writes the same rule" at :1168 pointed at nothing once moved. The reviewer's replacement was applied. |
| safety-reviewer, breakouts | CLEAR, with three Minors applied verbatim: the IIHF "surrounding" limb restored beside the bench exception at :514; the 56.1 proviso added to the NHL/PWHL screen permission at :184; a tier added to the pinning lead. A mechanical diff confirmed no limb was lost. |
| safety-reviewer, breakouts final read | All four post-review edits CLEAR. The :307 "What it costs." label was left in place, because dropping it would open the paragraph on ⚠️ and make an amber panel. |
| rules-verifier, on_ice_communication | **WRONG items, all fixed with the reviewer's text:** <br>• USA Hockey "is a misconduct" became "can be": 610(c) also writes a minor "including after a stoppage of play". <br>• The line-change lead overstated, and USA Hockey 204(b) has three limbs. <br>• The faceoff lead omitted PWHL 78.6, HC 6.2(d) and CARHA 57(a). <br>• :616 "no whistle is coming" was false under USA Hockey 625(b) for a stick held in the crease. <br>Confirmed: kicking "five of six" (the IIHF is the discretionary one), pinning, icing, "in no book is moving a screener only a two-minute risk", and the red-line minor in all six books. |
| safety-reviewer, on_ice_communication | **Major 1:** :616 ended the defender's subsection on "it's legal, no whistle". The "hold your ground, don't move them" counterweight had been cut. **Major 2:** the screener lead had no tier and no ⚠️. Minors: the :659 antecedent was stranded; the goalie lead had no tier; the CM pointer landed on the wrong section; "five of six" did not name the sixth book. All applied verbatim. |
| safety-reviewer, final read | Every unit CLEAR except a **Major in the coordinator's merge at :616.** The safety and rules texts had been joined into one amber run, which paired the defender's instruction with an attacker's stick limb. It did not say whose stick, dropped 625(b)'s conditions, and hinted at a whistle that a defender's push actually cancels. The fix was the safety reviewer's replacement: the amber stays on the defender's instruction, and 625(b) becomes its own sentence. |
| rules-verifier, final read | It corrected the replacement's 625(b) sentence. It added "skates through", replaced "your goalie is in the crease" with "your goalie is touching the crease" to match the rule's "in contact with the crease", and added "and then a goal counts". **It retracted its own earlier note:** PWHL 1.8 and 27.8 switch the trapezoid off, so the PWHL came back out of the trapezoid minor in four units (:405, the goalie lead, facts :645 and :143). Facts :319 now cites all six books. |

### C11
The coordinator wrote no content, with one exception that a reviewer caught. That was the :616 merge, which joined two reviewers' texts and was ruled a Major in the final read. It was replaced by the safety reviewer's text, with the rules-verifier's corrected 625(b) sentence. Every other post-review edit is a reviewer's exact text.

## Checks after the last content edit
- The full `npm run build` (absolute binary) exited 0 and ran through check-links. `dist/index.html` is dated 17:26:05, and `find content site/src/diagrams site/src/data -newer` returns nothing.
- These all pass: check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets.
- check_counts --update: no change.
- check_callout_flow --bare: 0. --panels --file: 0 on both pages.
- check_caption_pairs: 0 violations.
- check_tables: nothing for either page.
- check_marker_pairs: 0 LOST and 0 SPLIT on both pages. Two on_ice_communication units are "no longer present by key": the rewritten screen paragraph, which is still marked, and HEAD :335, which was cut. That claim is now carried by facts :590 and the rules_primer :847 owner.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every new or reworded sentence on both pages, plus a final read |
| D4 Citations | rule text quoted from sources/, including PWHL 1.8/27.8/65.2(viii), USAH 204(b)/610(c)/625(b), HC 6.2(d) and CARHA 57(a) |
| D8 Counts | "every book", "five of the six", "in no book", "every book here but IIHF 2025/26", re-derived |
| D9 Summary layer | Common Mistakes and Key Takeaways unchanged except the CM kicking pointer |
| D10 Key-facts layer | moved facts lines are verbatim; :143, :319 and :645 changed by the reviewer's text |
| D11 Reader safety | full-page safety-reviewer on both pages, plus final reads |
| D12 Read-aloud | both stems rendered, with chunk distance from instruction to tier measured: 0 in every body scene |
| D14 Links | check_links, the build's check-links, and in-page and cross-page links clicked in a browser |
| D15 Rendered site | site-reviewer on the 17:26 build (below) |
| D5–D7, D13 | not engaged |

**D15 detail.** Playwright Chromium, 400×812 DPR 2 and 1440×900, light and dark.
- `#what-it-costs` and every subsection heading render as siblings. The h4→h3 screener heading takes the sibling style.
- Every in-page link and fresh deep link lands its heading unobstructed under the sticky header: 20 body links, the 1440 ToC and the 400 "On this page" disclosure.
- The rules_primer `#screening-is-legal-outside-the-crease` and `#video-review` links land on the right h3.
- Every subsection glyph forms span.warn-inline.
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll.
- Worst 400px window: on_ice_communication 46.7%, unchanged and outside the section (the section peaks at 36.3%); breakouts 38.5%, with no prior figure on record. No window is over 50%.

## Found, not fixed (plan rows)
- **defensive_zone_coverage :850** links "the IIHF's and the PWHL's glass rule" to `breakouts.md#off-the-glass-and-out`. That still resolves, but the full IIHF treatment is now at `#over-the-glass`, so retarget the link.
- **breakouts :307** still opens "**What it costs.**" and then points to What it costs. Dropping the label makes a panel, so a reword would be new text.
- **breakouts** still restates the icing no-change split about five times (§1, Off the glass, press, power play, 6-on-5). This was not in scope.
- **on_ice_communication screener subsection** is still about 7 of 17 section chunks. :608/:610 restate USA Hockey 640/604 and HC 7.3 checking ladders that body_contact_and_battles owns. Each carries a mandatory or match tier, so it is a candidate for a per-limb layer test, not a sweep.
- **on_ice_communication :624** line-change distances omit CARHA's 10 ft (6(b)/(e)).
- **Still without a section:** team_play_and_culture (5 paragraphs) and neutral_zone_systems (4).
- **Moved-text referents.** Only the clauses the reviewers named were traced. The final reads found none beyond those fixed.

## What this method could not have found
- A moved clause whose meaning changed but which left no lexical trace.
- Owner-page sentences that are themselves wrong.
- How a listener hears the 17-chunk section run.
- Real devices and other browsers.
