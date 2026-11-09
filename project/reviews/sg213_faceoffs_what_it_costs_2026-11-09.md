# SG213: faceoffs gets one "What it costs" section; the panels shrink and two USA Hockey ejections are restored at their scenes (9 November 2026)

**Files:**
- content/systems/faceoffs.md
- project/plans/OPEN_ITEMS.md (follow-ups)
- project/reviews/sg213_faceoffs_what_it_costs_2026-11-09.md

## Source
This is the owner's structural readability method (project/what_it_costs_design.md). Faceoffs was chosen by measured order: 75% of it was rules-bearing, the highest of any systems page.

One authoring agent owned the page through SG213, 213b, 213c and 213d. The safety reviewer judged the early waves "not meaningfully more readable for a listener". The owner (9 November) chose to keep doing full restructures anyway.

## What changed
- **What it costs.** A new `## What it costs` section sits before Common Mistakes, with nine subsections:
  - Contact before the drop
  - Your head at the dot
  - Your stick on theirs, and your hand on the puck
  - A skate at the man
  - Going through the other centre
  - A hit on the player fetching a rim
  - Freezing the puck and shooting it out
  - Losing your centre, and the bench minor
  - The penalty box, time-outs and line changes

  Each subsection opens with a spoken lead (the instruction plus the top tier). Each ladder is told once.
- **Body scenes.** Each scene keeps its instruction and one consequence, then a pointer to What it costs.
- **Facts.** Facts lines went from 319 to 292. The tallest panel went from 13 rows to 8.
- **Restatement cuts.**
  - The British In-House "the centre is replaced, except after an icing" claim is now told in full once, at the Violations blockquote. Its verbatim quotation went from 5 copies to 1; other scenes keep a short "(except on a draw after an icing)".
  - The pre-drop contact minor is given in full in Contact before the drop. At each scene it is "mandatory under USA Hockey, Hockey Canada and CARHA".

## Measured, against HEAD
| | HEAD | shipped |
|---|---|---|
| Prose words | 22,730 | ≈23,550 (+3.6%) |
| Spoken billed characters | 219,095 | ≈216,980 (−1.0%) |
| Rules % | 75% | 76% |
| Facts lines | 319 | 292 |
| Amber panels | 1 | 0 |

Prose rose because the safety and facts fixes put tiers back at their scenes.

## Defects found by review, all repaired
1. **SG213 safety BLOCKs.**
   - USA Hockey 627(a): a non-kicking skate push-off is a mandatory major and game misconduct. It had moved off "Using your feet", which still taught "open your skate as a backstop".
   - USA Hockey 620(b): "carelessly" contacting the head is a mandatory major and game misconduct. It had moved off "Getting low".
2. **SG213 facts BLOCKs.**
   - A moved line, "they permit contact only in the course of playing the puck", became a false permission under CARHA, whose 49(a) bars body contact. It is now split into two complete facts.
   - "The minor is the taker's" was cheaper for a CARHA winger.
   - About 12 facts lines had lost their tier or pointed at deleted neighbours. All are repaired.
3. **SG213 rules FIX-cheaper.** Shooting the puck out on purpose is a delay penalty in every book, not only the NHL and IIHF: USA Hockey 610(c), Hockey Canada 10.1(ii), PWHL 65.2(ii), CARHA 75(b).
4. **Hockey Canada early movement.** 6.5(a) is a Junior post-icing clause. The page had cited it as the general rule, and now says "plan on removal, except a warning on a Junior post-icing draw".
5. **SG213c rules FIX-cheaper.**
   - CARHA charges shooting it out to the player (75(b)), not to the bench.
   - ":170 just a faceoff" was cheaper. A defender or goalie who freezes it on purpose can take a minor in every book: 610(a), 10.1(i) and 74(b), and 63.2(i)/65.2(i) for a goalie outside the crease.
   - The PWHL also has the faceoff no-penalty note (65.2(iii), 87.1).
6. **SG213d rules FIX-cheaper.** The IIHF empty penalty box must be filled "immediately" (68.2, 20.3), not "before it expires".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier ×3 | SG213: R-A shooting out, R-B HC early movement, wording. SG213c: CARHA 75(b), :170, PWHL note. SG213d: :1268 IIHF immediately, plus five wordings. All applied. |
| safety-reviewer ×2 | SG213: BLOCK ×2 (627(a), 620(b)) and R1–R4; verdict "not meaningfully more readable". SG213c: CLEAR; R-1 :170, R-2 holding "at least", R-3 KT4 "go round", KT2 instruction. All applied. |
| facts-reviewer | SG213: BLOCK ×2 (:1100, :708) and R1–R12. All applied. |
| site-reviewer (local preview, before commit; ran on the 09:09 build, before the coordinator's six text-only SG213d edits — the final 09:20 build was then checked mechanically: 119/119 ⚠️ in warn-inline, 0 bare, 0 panels) | Nothing blocking. Desktop and 400px, light and dark. 119/119 ⚠️ in warn-inline, 0 bare. All 227 desktop and 89 phone in-page links land clear. Essentials works. No overflow. Clean console. RECOMMENDED: "Using your feet" and "Getting low" panels still open on Rule rows (plan). |

### C11
- The authoring agent made SG213 through SG213d.
- The coordinator applied the SG213d rules-verifier's exact wording to:
  - :154 (Never line);
  - :755 ("a contact minor can follow (76.7)");
  - :1147 (books named; "which allows a major");
  - :1217 and :1224 (CARHA 55(a) "also gives a goalie a minor for shooting or batting it out");
  - :1268 ("(IIHF: immediately)").
- The coordinator wrote the briefs and this record.

### Checks after the last content edit
- check_facts exit 0, no pipe.
- check_links --quiet exit 0.
- check_absolutes clean.
- check_marker_pairs 0 LOST; six SPLIT HALF UNMARKED candidates (:348, :661, :945, :1117, :1210, :1224) — the four penalty-bearing ones read by the commit gate as legitimate halves of split paragraphs; :945 and :1210 are pointer paragraphs.
- Full `npm run build` (absolute binary) exit 0 after the last edit, including check:links (57 pages, all resolve). The built page carries the final wording.
- check_callout_flow --bare: 0 on the page.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3, all six books plus the British layers |
| D2 Exceptions | 63.2(iii) Note / 85.1 / 87.1 faceoff exemption; "unless checked" (HC 10.1(i), CARHA 74(b)); Junior post-icing warning (6.5(a)); after-icing exception |
| D3 Divergence | pre-drop minor discretionary (NHL/IIHF/PWHL) vs mandatory (USA Hockey/HC/CARHA); In-House vs EIHL |
| D4 Citation integrity | each pass |
| D5 Provenance | quotations verbatim against sources/ |
| D6 Negative claims | no faceoff exemption in USA Hockey/HC/CARHA; HC names early movement only at 6.5(a); IIHF has no match penalty |
| D7 Cardinal rule | each scene and lead opens with the instruction |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | KT2 and KT4 reworded and restored; Common Mistakes layer-tested |
| D10 Key-facts layer | facts-reviewer; traces and caps |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | rendered every wave; changed units read voiced alone |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | site-reviewer on the local preview before commit |

## What this method could not have found
- **Whether officials treat a deliberate shot straight off the draw as exempt under NHL/IIHF/PWHL 85.1.**
- **A limb the page never carried.**
- **Real phones and screen readers.**
