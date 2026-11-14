# W327 set C: USA Hockey's head-contact limb and the missing USA Hockey prices in body_contact_and_battles, rules_primer, defending_the_rush and goaltender (14 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/foundation/rules_primer.md
- content/systems/defending_the_rush.md
- content/positions/goaltender.md
- project/plans/OPEN_ITEMS.md
- this record

W327's set D (defender, center, faceoffs, defensive_zone_coverage, language_and_glossary) was written in parallel. It is under separate review and is not in this commit.

## Source
The USA Hockey plan row, items (1a) and (1b), comes from the W326 census. That census is reproduced in project/reviews/w326_usa_hockey_floor_only_census_criticals_2026-11-14.md. The ruling and the shipped wording are W322's.

## What changed
- **body_contact_and_battles.**
  - Facts :765 (block at HARD_MAX): the USA Hockey tier line now ends "(Casebook Sit. 1), as is careless head contact (620(b))". "On a player along the boards facing the wall" became "at the boards", which both reviewers judged equal to or broader than Casebook 608 Situation 1, so the line is stricter, not cheaper.
  - :788, :1445 and Common Mistakes :2049 gained the 620(b) limb.
  - KT6 :2169 takes the shipped full form, replacing "starts at … ends your game when …".
- **rules_primer.**
  - :481 gained the 620(b) sentence.
  - The :1081 comparison-table cell (not voiced) gained the limb.
  - KT7 :1204 gained USA Hockey's price in the shipped form, where before it gave only 608(c) (census item 1b).
- **defending_the_rush.**
  - The W323 620(b) Rule line was added in the blocks at :321 and :410.
  - :945 and Common Mistakes :1099 gained the limb.
  - Common Mistakes :1087 gained USA Hockey's price, which it lacked (item 1b).
- **goaltender.**
  - :1628 and :1652 gained the 620(b) limb.
  - Common Mistakes :1700, the hit-from-behind price list, gained USA Hockey's price in the second person: "Under USA Hockey, even a light hit on your back is at least a minor plus a misconduct; it ends the hitter's game if …, and so does careless contact with your head or neck."

| Key Takeaway | Words before | Words after |
|---|---|---|
| body_contact KT6 | 85 | 106 |
| rules_primer KT7 | 70 | 118 |

## After review (coordinator applied reviewer wordings verbatim)
- **body_contact Key focus :31 and rules_primer Overview :35.** The author left these alone under the owner's rule and reported them. The safety-reviewer found both cheaper than the book as they stand: each already carried USA Hockey's ejecting tiers as a closed list with no head limb, so a careless hit from behind to the head sounded like a minor plus misconduct.
  - :31 now ends "…or is reckless, and so does careless contact with their head or neck."
  - :35 adds "Under USA Hockey, careless contact with their head or neck ends your game too." after "(602(a))."
  - Each completes a price list that was already in the layer. Neither adds a new rule to it. The owner may want to look at both.
- **goaltender :1652.** The new 620(b) sentence took over the "it" of the next sentence, so the Hockey Canada/CARHA match read as a price for head contact. That sentence now opens "…and CARHA (53(b)) the hit is a match".
- **defending_the_rush :1099.** Same pronoun drift. The 620(b) clause was folded into the USA Hockey sentence ("…multi-game suspension, and careless contact with their head or neck is a mandatory major plus a game misconduct there too (620(b))"), and the next sentence now opens "…cannot protect themselves, a hit from behind is".
- **rules_primer :1081 table** (rules-verifier and safety-reviewer, optional): the bare "head first" became "head first into boards or frame".
- **Not applied:** defending_the_rush :324 (bare "head first", 300/300). No exact fix fits without cutting a limb, so it is now a plan row.

## Reviews
| Reviewer | Result |
|---|---|
| author C | Brief premises verified. Harness on all 8 changed ⚠️ units, 1:1 with 0 asides. Renders show every new limb whole in its chunk. Lines that could not take the limb are listed. |
| rules-verifier | Nothing blocking. All 16 changed units are OK against USA Hockey 602, 608, 609 and 620; Casebook 608 Sit. 1, 609 and 620 Sits. 1–4; NHL and PWHL 43; IIHF 43 in both editions; HC 7.5; and CARHA 53. One optional WORDING, applied. Noted "head or neck" against 620(b)'s "head, face or neck" as a corpus-wide call (plan row). |
| safety-reviewer | Nothing blocking. Two WORDING items for pronoun drift and one optional item, all applied. Key focus :31 and Overview :35 ruled cheaper than the book, with fixes supplied and applied. KT6 and KT7 ear-tested OK. 0 LOST; harness 1:1, 0 asides. |
| safety-reviewer narrow re-check | All five applied edits OK. The Key focus/Overview additions read as part of their existing price lists, and the pronouns resolve. |

### C11
Author C wrote the wave. Every coordinator change after review was a reviewer's wording, applied verbatim and re-checked. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary), started after the final content edit to these files:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all four files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | 620(b) cited in the book's own words; no trailer changed |
| D5–D8 | not engaged |
| D9 Summary layer | KTs and Common Mistakes in all four files; Key focus :31 and Overview :35 (one clause each, reviewer-ruled) |
| D10 Key-facts layer | body_contact :765 and the defending_the_rush Rule lines, voiced alone |
| D11 Reader safety | safety-reviewer plus a narrow re-check |
| D12 Read-aloud | author and both reviewers rendered |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only) |

## What this method could not have found
- **Missed wordings.** Units pricing the act in words the sweeps missed, and diagram captions.
- **Pronoun drift beyond the next sentence.** Drift was checked only in the sentence or two after each insertion.
- **Concurrent assessment.** Whether 608 and 620 are assessed together is unsettled on disk.
- **The 106- and 118-word KTs.** Whether they hold for a real listener needs the owner's listening pass.
