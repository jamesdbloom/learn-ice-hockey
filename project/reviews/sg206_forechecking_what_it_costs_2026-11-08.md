# SG206: forechecking_systems gets one "What it costs" section, and its "What your book allows" rules section is folded into it (8 November 2026)

**Files:**
- content/systems/forechecking_systems.md
- project/reviews/sg206_forechecking_what_it_costs_2026-11-08.md

## Source
This is the second page of the owner's structural readability method (`project/what_it_costs_design.md`). One authoring agent owned the page through three waves (SG206, SG206b and SG206c). After the final reviews, the coordinator applied the reviewers' exact wording; see C11.

## The owner decision this page produced
The first wave (SG206) only moved the scattered "What it costs" paragraphs. The result was not more readable:
- prose went up 0.8%;
- spoken length fell 3.9%, and only because facts lines were deleted;
- ⚠ markers went from 101 to 107.

The safety reviewer said so plainly, and the owner chose to go further: fold the whole "What your book allows when you get there" rules section into What it costs, keeping only its coaching in the body, and choose later pages by measured gain rather than census order. That decision is now in the design.

## What changed
- **New section.** A `## What it costs` section now sits before Common Mistakes. It has seven subsections:
  - A hit from behind
  - Charging
  - Where checking is barred or limited
  - The seal, the arm and the skate
  - Missing the next game
  - Late, sideways and third-man hits
  - Contact with the goalie
- **Each subsection** opens with an instruction-first lead, then its page-specific book bullets, then a pointer to the owner page for ladders the owner carries at the same tier and scope. Owner parity was checked by reading body_contact_and_battles.md's own sentences, including PWHL 43 against the PWHL text.
- **"What your book allows when you get there"** is now 13 coaching paragraphs. Each leads with what to do and keeps its top tier in the same chunk. Its share of the episode is 6.8%, down from 12.3%.
- **Facts.** Four new small blocks under What it costs trace to their subsections:
  - Where checking is barred
  - The seal, the arm and the skate
  - Missing the next game
  - Late hits

  The A hit from behind block gained a Hockey Canada head-contact counterweight.
- **The pointer refrain** was cut to one pointer per body section.

## Measured (check_readability and the render, against HEAD)
| | HEAD | shipped |
|---|---|---|
| prose words | 22,578 | ≈21,975 (−2.7%) |
| spoken billed characters | 191,737 | ≈184,772 (−3.6%) |
| ⚠ in prose | 101 | 90 |
| "What your book allows" share | 12.3% | 6.8% |
| What it costs share | none | 12.0% |

The shipped figures were measured before the coordinator's final eight-line wording edits, which added a few dozen characters to facts lines.

## Defects found by review, in order
1. **SG206.**
   - Safety BLOCKED twice:
     - the checking-barred body had no Hockey Canada or PWHL tier;
     - Hockey Canada's "off the head" was voiced three times in the facts layer with no counterweight.
   - Facts BLOCKED: CARHA's no-checking limb had left the facts layer while "more than two strides in CARHA 52" stayed.
   - Rules: a Sit. 5 incidental-contact permission had lost its conditions; "each limb" had no antecedent; the Hockey Canada and CARHA charging bullet was missing.
2. **SG206b.**
   - Facts BLOCKED on :604: USA Hockey non-check "wall battle" stood without its limit.
   - Rules found two dropped limits:
     - USA Hockey "steer yes" lost Standard of Play Situation 7's limit;
     - the IIHF women's bullet lost its boards limit.
   - Safety found that :639 had dropped IIHF 56.1's unconditional "constitutes reckless endangerment", and that the deliberate-turn facts line lacked "never rely on it".
3. **SG206c.**
   - Safety BLOCKED: the 625(a)(4) facts line had lost its 602(a) match limb and was voiced as an interference minor alone.
   - Rules (all applied in the reviewer's wording):
     - Hockey Canada Interpretation 3 had dropped "accidental";
     - the IIHF 101.1 facts line did not tell a WNIHL player that the league bars checking, and "ejects her" pointed at the wrong player;
     - the Situation 7 steer lacked "while reaching for the puck" and the "impede" limb;
     - the 56.1 proviso attaches to lengthening a path, not to body position itself;
     - body :221's "harsher of the two" was stated as fact, not as a reading.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier ×3 | SG206: owner parity holds; WORDING items and the charging bullet. SG206b: two dropped limits. SG206c: no error that penalises a reader more than the page warns; eight exact wordings |
| safety-reviewer ×3 | SG206 BLOCK ×2, and the verdict that it was "not meaningfully more readable". SG206b: no blockers; R1–R3. SG206c: B1 (625(a)(4)), R-a ("her") |
| facts-reviewer ×2 | SG206 BLOCK (CARHA). SG206b BLOCK (:604), plus traceability R-A to R-D. Not re-run after SG206c: the facts lines changed since (:605, :609, :614, :1002, :1004) were checked by the SG206c rules and safety passes and re-derived by the commit gate |

### C11
- The authoring agent made every edit through SG206c.
- The coordinator applied the final rules-verifier's exact replacement wording, which also closes the final safety review's B1 and R-a:
  - :221 (a reading, not fact);
  - :589 (the 56.1 proviso attaches to lengthening a path);
  - :605 (Glossary cited);
  - :609 (HC Interpretation 3, accidental);
  - :614 ("reckless, a match (602(a))");
  - :629 (the Situation 7 conditions);
  - :1002 (WNIHL bars checking; "ejects");
  - :1004 (602(a)).
- The coordinator wrote the briefs and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe; 35 blocks, 226 facts).
- check_links --quiet and check_absolutes: exit 0.
- check_marker_pairs: 0 LOST. The 9 split-half candidates were read by the safety reviewer.
- check_callout_flow --panels: 0 panels on the page.
- Full `npm run build` (absolute binary) after the last content edit: exit 0, including check:links (57 pages, all internal links and anchors resolve). check_callout_flow --bare: see below.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3, every reworded line and new facts line checked against the books |
| D2 Exceptions | 56.1 provisos, Sit. 7, Sit. 5, 69.4, 7.5 Interp. 3, 604(c) Note, 640(b), the deliberate turn |
| D3 Divergence | six books across every subsection, plus British In-House §11 and the WNIHL |
| D4 Citation integrity | checked by each rules pass |
| D5 Provenance | quotations verbatim, verified against sources/ |
| D6 Negative claims | "IIHF has no match penalty" (0 hits); no CARHA checking division; no deliberate-turn carve-out in USA Hockey or CARHA |
| D7 Cardinal rule | every coaching paragraph and lead opens with the instruction |
| D8 Numeric ownership | ladders point to body_contact_and_battles, with parity read |
| D9 Summary layer | Key Takeaways unchanged. Common Mistakes :1078/:1089 and Check-yourself :1122: pointers re-aimed, no claim changed. All checked voiced alone |
| D10 Key-facts layer | facts-reviewer ×2; four new blocks |
| D11 Reader safety | safety-reviewer ×3, full listener reads |
| D12 Read-aloud | rendered every wave; chunk shares measured |
| D13 Folklore | none |
| D14 Structure, links | check_links and the build; no inbound link used a removed anchor |
| D15 Rendered site | Built HTML: 0 panels, 0 bare glyphs, check:links clean. The Chrome extension refuses every local origin, so no pre-commit look is possible. The owner chose post-deploy review for the pilot (sg205 record), and the design scopes a site-reviewer to the first pilot page (what_it_costs_design.md); this page has the same section shape the pilot verified live. A production site-reviewer runs straight after deploy |

## What this method could not have found
- **A counterweight that HEAD never had.**
- **Owner parity on every qualifier of every owner sentence.**
- **Within-page restatement.** The checking-from-behind ladder is still voiced about nine times before What it costs, and "while it stays off the head" seven times. This is the next readability lever, and it is in the plan.
- **How the page looks.** That will be checked live after deploy.
