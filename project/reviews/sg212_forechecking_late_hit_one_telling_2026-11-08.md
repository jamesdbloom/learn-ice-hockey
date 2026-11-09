# SG212: forechecking_systems tells the late-hit timing test once, in one book order, and measures Hockey Canada's arm-and-stick from the puck carrier (8 November 2026)

**Files:**
- content/systems/forechecking_systems.md
- project/plans/OPEN_ITEMS.md (SG212 leads)
- project/reviews/sg212_forechecking_late_hit_one_telling_2026-11-08.md

## Source
The SG210 site-reviewer found the late-hit timing test told four times, in different book orders. Problems it listed:
- **IIHF.** The immediate-vicinity condition was missing from "How late is too late".
- **USA Hockey at :631 and in Common Mistakes.** "Don't rely even on that test" could be heard as "distance doesn't matter".
- **Hockey Canada.** Its distance test was unattributed in the top Read line.

One authoring agent owned the page.

## What changed
- **One full telling, in What it costs.** It runs NHL 56.1 / PWHL 57.1, then IIHF 56.1, then Hockey Canada 8.3, then USA Hockey:
  - **NHL and PWHL:** *"immediately following"* loss of possession; a beat later is interference.
  - **IIHF:** a window of opportunity **and** the immediate vicinity. A late hit *"constitutes reckless endangerment"*. Its glossary deems a check on an unaware or unprepared opponent automatically reckless.
  - **Hockey Canada:** within an arm and a stick of the puck carrier at the instant the puck is released.
  - **USA Hockey:** its rulebook writes no window. 640(b) says *"not eligible to be body checked"*. Its Casebook's Standard of Play Situation 10 allows a finish only if all four conditions hold. The arm-and-stick distance is therefore necessary but not enough, and never *"one or two more strides after the puck is gone"*.
- **The three scenes.** The Read line, the body and Common Mistakes each keep:
  - the instruction: check at once or not at all, never a stride later;
  - "no book caps a late hit at a minor";
  - the USA Hockey limit.
- **The late-hit facts block** went from 9 lines to 7. It dropped the IIHF 56.5 two-condition line, which the body carries. Two USA Hockey lines merged into one 640(b) line that keeps the adult-men exception, Note 2 and 602(a). The merged-away line's disclosure — "the book does not say whether 640(g) reaches" adult men — now lives only in the body; the facts layer's "640(g) ejects if reckless" is therefore unqualified for adult men (the harsher direction; plan lead 3).

## Defects found by review and fixed
| Reviewer | Defect | Fix |
|---|---|---|
| rules-verifier | **FIX-cheaper.** Common Mistakes measured Hockey Canada's gap from the puck ("from you when it left"). 8.3 measures *"between the puck carrier and the player delivering the check"*, so the old wording allowed about a stick later. This was pre-existing in HEAD. | "if you were more than an arm and a stick length from the puck carrier when the puck left, you were late (8.3)" |
| rules-verifier | WORDING. The facts line credited the vulnerable-position "automatically reckless" to IIHF 56.1. It is the glossary. | Credit it to the glossary |
| rules-verifier | WORDING. "Where Note 2 makes it roughing" read as an adult-men substitute. Note 2 applies in every division. | "though 640 Note 2 still calls the same hit roughing in every division" in the body; "though Note 2 still calls it roughing" in facts |
| safety-reviewer | R1. The Read line and the body stated the gap without its direction ("necessary"), so a listener could take it as a distance to keep. | "being *within* an arm and a stick" |
| safety-reviewer | R2. The Casebook's own distance was credited to Hockey Canada in the facts line. | "within an arm and a stick" |

## Measured
- Prose words: +70 (22,235 → 22,305).
- Spoken characters: −105.
- Facts block: 9 → 7 rows. At 400px it is about 1,509px.
- Full tellings: 3 → 2. The second is the What it costs prose and its own facts block, in the same order.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All quotations verbatim. "No book caps a late hit at a minor" confirmed in all six books, including CARHA 66(a)/49(a)/48(a). One FIX-cheaper and three WORDING items, all applied in the reviewer's wording. |
| safety-reviewer | Nothing blocking. Every unit is stricter than HEAD. R1 and R2 applied in the reviewer's wording. N1–N3 recorded in the plan. |
| site-reviewer (local preview, before commit) | Nothing blocking, at desktop and 400px, light and dark. 143/143 ⚠️ appear as amber runs and none is bare. All 125 in-page anchors resolve. Common Mistakes links land clear of the sticky header. Clean console, no off-origin requests. |

### C11
- The authoring agent made the wave's edits.
- After both reviews, the coordinator applied the reviewers' exact wording:
  - rules items 4, 5 and 6: Note 2 at the body and in facts, the glossary credit, and the puck carrier;
  - safety R1 (Read line and body: "within") and R2 (Casebook line: "within an arm and a stick").
- The coordinator wrote the plan leads and this record.

### Checks after the last content edit
- check_facts exit 0.
- check_links --quiet exit 0.
- check_absolutes clean.
- check_marker_pairs: 0 LOST, 0 SPLIT HALF.
- Full `npm run build` (absolute binary) exit 0, including check:links (57 pages, all resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier: six rulebooks plus the USA Hockey Casebook |
| D2 Exceptions | 640(b) adult men and Note 2; Situation 10's four conditions; IIHF 56.5 |
| D3 Divergence | Time (NHL/PWHL), window and vicinity (IIHF), distance (Hockey Canada), conditions (USA Hockey Casebook) |
| D4 Citation integrity | Glossary vs 56.1 corrected |
| D5 Provenance | Quotations verbatim against sources/ (rules-verifier) |
| D6 Negative claims | "USA Hockey's rulebook writes no window" (640(b)); "no book caps a late hit at a minor" (six books) |
| D7 Cardinal rule | Each scene leads with the instruction |
| D8 Numeric ownership | Not engaged |
| D9 Summary layer | Common Mistakes changed and checked |
| D10 Key-facts layer | 9 → 7 lines; each traced; caps checked |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | Rendered; each facts line read voiced alone |
| D13 Folklore | Not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | site-reviewer on the local preview before commit |

## What this method could not have found
- **Siblings.** The same "measured from the puck" paraphrase may be on sibling pages: game_management ~:176/~:903 and mental_game ~:153. Recorded in the plan.
- **Other rules.** Rules that price the same act under another heading, such as charging or boarding, were not swept.
- **Execution.** Whether a check made "at once" at speed is still dangerous if done badly.
