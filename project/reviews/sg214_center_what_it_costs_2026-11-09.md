# SG214: center gets one "What it costs" section; the faceoff ladder points to faceoffs.md; USA Hockey charging at any stride count; Hockey Canada and CARHA ejections restored at the dot and the crease (9 November 2026)

**Files:**
- content/positions/center.md
- project/plans/OPEN_ITEMS.md (follow-ups)
- project/reviews/sg214_center_what_it_costs_2026-11-09.md

## Source
This continues the owner's structural readability method (project/what_it_costs_design.md), in measured order. center was 63% rules-bearing, the highest position page not yet restructured. One authoring agent owned the page through SG214, 214b, 214c, 214d, 214e and 214f; the coordinator made SG214g (below). Two decisions by the owner shaped it:
- After SG214b, the page was longer than HEAD, and the owner chose "finish and ship it".
- On 9 November, the owner decided to keep restructuring pages.

## What changed
- **A new `## What it costs` section** sits before Common Mistakes, with ten subsections:
  1. Where checking is barred
  2. Charging
  3. The crease and the goal
  4. Contact with the goalie
  5. At the dot
  6. Holding the puck
  7. Icing on the kill
  8. After your own icing
  9. Body position on the backcheck
  10. A hit from behind
- **Coaching scenes** now lead with coaching. Each keeps its instruction and one consequence, and points on to What it costs.
- **Shares of the episode:**
  - crease section: 7.6% → 4.2%
  - faceoff section: 9.3% → 5.8%
  - At the dot: 4.3% → 1.6%
- **The faceoff ladder** now points to faceoffs.md (committed in e661dcc6). Each owner sentence was read for parity. The page keeps the three-book mandatory pre-drop minor at the dot.
- **The head-contact ladder for a helmet clash is stated in full once, at At the dot** (in What it costs). It covers:
  - USA Hockey 620(a), (b) and (c);
  - Hockey Canada 7.6(a), including the third-penalty Game Ejection, and 7.6(b), discretionary for violence and mandatory on injury;
  - Hockey Canada 7.7 Interpretation 2, 7.7(a) with the misconduct mandatory under (d), and 7.7(b).

  The head-butt ceiling in every book is beside it. The faceoff scene keeps:
  - the mandatory minor;
  - "a helmet clash is head contact however little force is behind it" (USA Hockey; Hockey Canada minor and female);
  - the Junior/Senior moderate and violent tiers;
  - ⚠️ "Lead with your helmet on purpose and it is head-butting, which can end your game in every book".

  Common Mistakes keeps a short complete version.
- **Charging.** "No stride count makes a run-up safe" now appears at Key focus, the Overview, the body at two sites, KT18 and the facts. Two reasons:
  - USA Hockey Casebook 607 Situation 3 and Standard of Play Situation 21 call accelerating through a check charging whatever the count.
  - The page had given USA Hockey a two-stride threshold.

## Measured, against HEAD
| | HEAD | shipped |
|---|---|---|
| Prose words | 18,708 | ≈18,700 (≈−0.1%) |
| Spoken billed characters | 166,279 | ≈168,700 (+1.5%) |
| Rules % | 63% | 63% |
| Long paragraphs | 1 | 0 |

**Why the spoken length rose:** every safety fix put a tier back at its scene.

## Defects found by review, all repaired
0. **Commit gate BLOCK (first gate on this record).** The restructure had dropped two head-contact tiers that HEAD carried, both in the cheaper direction:
   - the USA Hockey 620(a) mandatory floor of at least a minor plus a misconduct (from CM :893 and the scene);
   - the Hockey Canada 7.6 preamble's "must be penalized as Head Contact", which the page now gave as "can also be".

   The coordinator had filed both as plan follow-ups. The gate ruled that a regression this diff introduced cannot ship as a follow-up. The SG214e and SG214f re-reviews then found more dropped tiers, all repaired:
   - Hockey Canada 7.7(a) moderate, with its mandatory misconduct;
   - the 7.6(a) third-penalty ejection;
   - the 7.6(b) discretionary tier;
   - facts :512 and :513 on the old wording;
   - the CM head-butt match tiers;
   - the IIHF head-butt price at :795;
   - the faceoff scene, 19 chunks from the full ladder, saying nothing for Hockey Canada Junior/Senior or on the deliberate helmet. Both are now at the scene.

   **Second commit gate BLOCK.** The same shape, in another rule. The restructure had dropped USA Hockey 608(a)'s floor for checking from behind, "a minor plus a misconduct … or a major plus a game misconduct, shall be assessed". Common Mistakes said "ends your game in every book but USA Hockey … and under USA Hockey too if …" with no ordinary-case price, whereas HEAD:824 had "at least a minor and a misconduct". Repaired in SG214g:
   - the floor is restored at body :695 and CM :892 and :901;
   - a new facts line gives 608(a), (b) and (c), plus the Casebook 608(a) Situation 1 boards trigger;
   - KT6, voiced alone and unchanged from HEAD, gets the same floor. The claim was briefed, not the line.

   **What went into this repair:**
   - the facts line :678 stays as it was, because it is at its cap;
   - a safety-reviewer checked it and found nothing blocking;
   - R1 (KT6) and R2 (the boards trigger) were applied.

   **The EIHL Casebook Rule 47 example was cut by this diff.** HEAD:817's Common Mistakes named it: a helmet forced against the opponent's is a head-butting double minor. It was cut when the bullet was shortened. Its substance is still on the page:
   - :528: "Lead with your helmet on purpose and it is head-butting, which can end your game in every book";
   - :795: the IIHF double minor;
   - the Sources note: it still cites the Casebook.

   The Elite League-specific example itself is not restored (plan row).
1. **SG214 safety, four BLOCKs.** Each moved an ejection or a scene's facts tier off the scene:
   - **USA Hockey 620(b)**, careless head contact, which is a mandatory major and game misconduct: it had left the dot.
   - **CARHA 52(b)**, charging a goalie in the crease, which is mandatory: it had left the crease and Common Mistakes.
   - **The crease facts block** had no penalty for touching the goalie.
   - **The backcheck facts block** had no tier.
2. **SG214 facts, four BLOCKs.**
   - The backcheck "never finish into their back" had disappeared from the facts layer.
   - Kill icing had lost USA Hockey 624(b)(1)'s age floor.
   - The crease had lost its goalie-contact tier.
   - Handling had lost the crease penalty shot.
3. **SG214 rules, FIX-cheaper.**
   - The USA Hockey charging threshold was wrong (Casebook 607 Situation 3).
   - CM :891 had dropped its top tier.
4. **SG214b/c safety BLOCK.** Hockey Canada 7.6(b) makes a head-contact minor that injures a mandatory major and game misconduct in minor and female hockey. The page stated the USA Hockey clash ejection and dropped this one.
5. **SG214b/c rules, FIX-cheaper.** USA Hockey 608(c), a mandatory match for a reckless, excessive-force hit from behind on a defenceless player, had been dropped from CM :891 and :900.
6. **Wording repairs from review:**
   - **Penalty-kill icing facts line:** voiced alone, it had dropped the on-ice-strength condition.
   - **Head-butt sentence:** Hockey Canada was missing.
   - **Icing exception:** the "one each" limit was missing.
   - **Hockey Canada body position:** "writes no body-position grant" was too broad, because 8.1 allows a strength move with body position.
   - **"Drive your helmet into theirs"** could be heard as permitting a light, deliberate nudge. It now reads "Put".
   - **Facts :513:** "as does Hockey Canada" could be heard as Hockey Canada adding a misconduct, which 7.6(d) forbids.
   - **CM :893:** "if careless" became "if careless or worse", and "the referee's choice elsewhere" was added so NHL/IIHF/PWHL listeners do not hear "no minor in my book".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier ×5 | SG214: 2 FIX-cheaper (:743 charging, :891). SG214b/c: 2 FIX-cheaper (:891 and :900, 608(c)); PWHL 78.4 is the right five-second citation (faceoffs.md follow-up). SG214d: all CORRECT; wording at :528 and :513 applied. SG214e: 3 FIX-cheaper (USA Hockey "beyond pure accident" taken from Casebook 620 Sit. 2, a fallen-player case; 7.6(b) violence tier; 7.7(a)), facts :512/:513; 7.7 Interp. 1 does not reach a helmet clash. SG214f: :795 CORRECT (IIHF 47 re-read directly; IIHF has no match penalty); :513 and :893 WORDING applied. The reviewers differed on USA Hockey "however little force" (SG214e: the conservative reading; SG214f: harsher than Casebook Sit. 2). The second gate ruled it is supported by Casebook 620 Situation 1 itself ("The only thing that matters is whether there was contact… Injury can result with even minimal force"). Situation 2 is an accident exemption for fallen players getting up, not a force threshold. It is kept on that ground. |
| safety-reviewer ×6 | SG214: BLOCK ×4. SG214b/c: BLOCK X1 (Hockey Canada 7.6(b)) plus R-a/b/c. SG214d: CLEAR; R1 Junior/Senior and R2 "Drive" applied. SG214e: BLOCK ×3 (7.7(a), 7.6(a) third-penalty ejection, facts :513) and R1–R4. SG214f: CLEAR, all seven closed; R1 (scene tiers) and R2 ("the referee's choice elsewhere") applied. SG214g: CLEAR; R1 (KT6 floor) and R2 (the Casebook boards trigger in the new facts line) applied. |
| facts-reviewer ×2 | SG214: BLOCK ×4 plus R1–R5. SG214b/c: no blockers; R-1 to R-4 applied. |
| commit-gate | First run: BLOCK (C4/C6/C11, the dropped 620(a) floor and 7.6 "must"; also the plan line wrongly said localhost works). Second run: BLOCK (C6/C11, the dropped 608(a) floor in Common Mistakes; the Dimensions counts were stale; the EIHL example was described as never named when this diff had cut it). Third run: content passed, including a layer-vs-HEAD sweep of every Common Mistakes bullet, Key Takeaway and facts line, which found no other dropped floor. BLOCK on C8 only (the stale facts count, a rules review claimed for :679, the ×5 header); all three fixed in this record. |
| site-reviewer (local preview, before commit; ran on the 10:00 build, before SG214e/f's text-only edits — the final build was checked mechanically: 90/90 ⚠️ in warn-inline, 0 bare, 0 panels) | Nothing blocking. 400px and 1440px, light and dark, in Playwright Chromium (the Chrome extension refused localhost again). 89/89 ⚠️ in warn-inline, 0 bare. 64 in-page links and the 5 faceoffs.md cross-links land clear of the sticky header. Essentials works. No overflow. Clean console. RECOMMENDED: each What it costs subsection opens with its all-Rule facts panel before the instruction sentence (plan, corpus-wide). |

### C11
- The authoring agent made the edits for SG214 through SG214d.
- After the SG214d reviews, the coordinator applied the reviewers' wording:
  - :528: "and so is one that injures in Hockey Canada minor and female hockey (7.6(b))" (rules);
  - :893: "Put your helmet into theirs on purpose" (safety R2);
  - :513: "if intentional or careless" (rules);
  - :793: the Junior/Senior clause "in Junior and Senior 7.7 applies instead, and a high degree of violence there is a major and game misconduct (7.7(b))", which is the safety R1 sketch narrowed to the 7.7(b) limb that the rules-verifier verified this wave.
- The authoring agent made SG214e and SG214f.
- After the SG214f reviews, the coordinator applied the reviewers' wording:
  - :513: the rules-verifier's replacement, verbatim (288 characters);
  - :893: "if careless or worse" (rules) and "the referee's choice elsewhere" (safety R2);
  - :528: safety R1. The head-butt sentence is the reviewer's sketch, which the reviewer verified book by book. The Junior/Senior clause gives 7.7's moderate and violent tiers in the words the rules-verifier verified at :793, rather than the sketch's looser "a harder one adds at least a misconduct".
- SG214g, by the coordinator, after the second gate:
  - the 608(a) floor at :695, :892 and :901, re-derived from usah.txt:3721-3723;
  - the new :679 Rule line;
  - after the safety pass, that reviewer's R1 (KT6) and R2 ("forceful at the boards (Casebook)").
- The coordinator wrote the briefs and this record.

### Checks after the last content edit
- check_facts exit 0 (34 blocks, 217 facts), no pipe, re-run after SG214g; :513 at 288/300.
- check_links --quiet exit 0.
- check_absolutes clean.
- check_marker_pairs: 0 LOST; 2 split-half candidates read by the reviewers.
- Full `npm run build` (absolute binary) exit 0 after the last edit, including check:links (57 pages, all resolve). The built page carries the final wording.
- check_callout_flow --bare: 0; --panels: 0; 90/90 ⚠️ in `<main>` inside warn-inline.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×5; the commit gate re-derived the head-contact and 608 tiers |
| D2 Exceptions | Casebook 620 Sit. 2 accidental-contact exemption (not carried to the dot); 7.7 Interp. 1 and 2; 7.6(d) no misconduct; 69.7 rebound carve-out; 69.1 proviso; 625(b) relief; Hockey Canada 8.5 passive crease; 624(b)(1) levels; 7.6/7.7 scope; Casebook 607 Situation 3 |
| D3 Divergence | Pre-drop minor discretionary (NHL/IIHF/PWHL) vs mandatory (USA Hockey/Hockey Canada/CARHA); charging thresholds by book |
| D4 Citation integrity | each pass |
| D5 Provenance | quotations verbatim against sources/ |
| D6 Negative claims | Hockey Canada interference writes no body-position grant (narrowed); 7.7 has no general injury clause; USA Hockey 625 has no major tier |
| D7 Cardinal rule | coaching sections lead with what to do |
| D8 Numeric ownership | the faceoff ladder points to its owner, faceoffs.md, with parity read |
| D9 Summary layer | Key Takeaways and Common Mistakes layer-tested by safety ×6; KT6 repaired as a claim, not a line |
| D10 Key-facts layer | facts-reviewer ×2; :512 and :513 checked by rules (SG214e/f) and safety; :679 (SG214g) checked by safety only, plus the third commit gate's re-derivation from usah.txt 608 and Casebook 608 Sit. 1 (no rules-verifier ran on SG214g) |
| D11 Reader safety | safety-reviewer ×6 |
| D12 Read-aloud | rendered every wave; changed units read voiced alone |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; the build; cross-links into faceoffs.md |
| D15 Rendered site | site-reviewer before commit (Playwright Chromium) |

## What this method could not have found
- **Other rules that price the same acts.** For example, roughing at the dot under Hockey Canada 7.7, or IIHF/NHL 48 for a pre-drop clash.
- **The faceoffs.md owner sentences on head contact.** They were not compared with the new :793 ladder, and faceoffs.md may carry the same "beyond pure accident" premise and the 7.6(b) gap. Recorded in the plan.
- **The EIHL Casebook Rule 47 head-push.** This diff cut it (see Defects). Whether to restore it is a plan row.
- **Siblings.** Sibling pages may carry the same "every book but USA Hockey" wording with no 608(a) floor. Only center.md was swept.
- **A counterweight HEAD never had.**
- **Real phones and screen readers.** In addition, the narration audio lags the new text until it is rebuilt.
