# W327 set D: USA Hockey's head-contact limb in defender, center, faceoffs and defensive_zone_coverage, and a USA Hockey price for the screener shove in language_and_glossary (14 November 2026)

**Files:**
- content/positions/defender.md
- content/positions/center.md
- content/systems/faceoffs.md
- content/systems/defensive_zone_coverage.md
- content/foundation/language_and_glossary.md
- project/plans/OPEN_ITEMS.md
- this record

Set C of W327 was committed separately.

## Source
The work comes from the USA Hockey plan row, items (1a) and (1b), which were taken from the W326 census. The census is reproduced in project/reviews/w326_usa_hockey_floor_only_census_criticals_2026-11-14.md. The ruling and the shipped wording are W322's.

## What changed
- **The 620(b) head limb, beside a Hockey Canada head limb.** Where "head first" stood beside the limb, it now says "head first into the boards or net".
  - **defender:** :298, :459, :837, :946 and Common Mistakes :1013. The facts line :818 was recompressed to carry the limb, because :817 is at 300/300 in a block at HARD_MAX.
  - **center:**
    - Facts :684: "head first into boards or net". "No NHL, IIHF or PWHL minor" became "IIHF, no minor", which is safe because the line still says it "ejects under the NHL, PWHL, CARHA and Hockey Canada".
    - Facts :685, and a new W323 Rule line at :879.
    - Body :701, :783, :874 and :884.
    - Common Mistakes :901 and :910.
    - KT6 :977.
  - **faceoffs:** :590 and :1209 (in the shipped form), facts :1215 (300/300), :1222, and Common Mistakes :1319, where "if the hit is reckless" stops the reckless clause drifting onto head contact.
  - **defensive_zone_coverage:**
    - New W323 Rule line at :167.
    - :180, :488 and :753.
    - Common Mistakes :859 ("if the hit is reckless").
    - KT4 :927.
  - **Sources trailers:** 620(b) is quoted verbatim in defender's and center's.
- **language_and_glossary (item 1b, no USA Hockey price at all).** :292, :294, :430, Common Mistakes :507 and KT12 :540 now give USA Hockey's price for a hit or shove from behind.
  - The 608 tiers are conditional on the shove being called checking from behind. Casebook 609 Situation 2 rules that a stick to the back "but not use enough force to be considered a check from behind … should still be considered a cross-checking violation".

| Key Takeaway | Before | After |
|---|---|---|
| center KT6 | 125 | 137 |
| defensive_zone_coverage KT4 | 119 | 129 |
| language_and_glossary KT12 | 81 | 146 (wc) |

## After review (coordinator applied reviewer wordings verbatim)
- **defender :818.** The rules-verifier and the safety-reviewer each found the recompressed line unscoped. It opened "A slide from behind to the head is head contact.", which names no book and pulls NHL, PWHL and IIHF readers toward a cheaper rule. The rules-verifier also found "unless violence is minimal" could be heard as a condition on the advice.
  - It now reads: `Rule: Under Hockey Canada a slide from behind to the head is head contact (7.6; 7.7 unless violence is minimal) — plan on 7.5's minor and game misconduct anyway, a mandatory match if they can't protect themselves or you meant to injure; USA Hockey, at least a major and game misconduct if careless (620(b))` (300/300). This is the safety-reviewer's wording. It fixes both findings.
- **language_and_glossary :507 and KT12 :540 (rules-verifier).** The 620(b) limb was a clause coordinate with "Called checking from behind under USA Hockey", so it could be heard as conditional on a 608 call. Two book passages say it is not:
  - 620's Note covers the stick, and a cross-check is a check delivered with the stick (Casebook 609 Situation 1).
  - Casebook 621 Situation 1 sends a stick to the head during a check to the Head Contact rule.

  A shaft shove to the neck called as a cross-check would then have sounded like a 609(a) minor. The limb is now its own sentence: "Under USA Hockey, careless contact with their head or neck ends your game too, whether or not it is called checking from behind (620(b))." The rules-verifier warned against writing "however it is called", because a stick to the head outside a check is high-sticking.
- **language_and_glossary :430 (rules-verifier, optional).** It now reads "…or is reckless (608); a lighter shove to the back stays cross-checking (Casebook 609, Sit. 2). Under USA Hockey, careless contact with their head or neck ends your game either way (620(b))."
- **language_and_glossary :292 (safety-reviewer).** After the split, 602(a) had lost its book. It now reads "For any reckless hit under USA Hockey, plan on a match".
- **center KT6 :977 (safety-reviewer, optional).** "USA Hockey's floor is a minor and a misconduct, and it ends" made "it" point at "the floor". It now reads "Under USA Hockey a hit from behind is at least a minor and a misconduct, and it ends".
- **Not applied, and moved to the plan:**
  - defender :435, a facts line outside the diff and outside the census: no 620(b) limb, and a bare "head first".
  - defender :817 "boards or frame".
  - defensive_zone_coverage KT4's scope parenthesis.

## Reviews
| Reviewer | Result |
|---|---|
| author D | Brief premises verified, including Casebook 609 Situations 1 and 2. Harness on every changed ⚠️ unit: 1:1, 0 asides. Renders show each new clause whole in its chunk. |
| rules-verifier | Nothing blocking. Checked against USA Hockey 602, 608, 609, 620 and 621; Casebook 608 Sit. 1, 609 Sits. 1–2, 620 Sits. 1–4 and 621 Sit. 1; NHL and PWHL 43; IIHF 43 (both editions); HC 7.5–7.7; and CARHA 53. center :684 is OK. Three WORDING items were given (defender :818, glossary :507/:540, and the optional :430), and all were applied. |
| safety-reviewer | Nothing blocking. center :684 is OK. The glossary conditional is right for the 608 limbs. WORDING items at defender :818 and glossary :292, plus the optional center KT6, were all applied. 0 LOST; harness 1:1, 0 asides; renders read. Follow-ups outside the diff were logged. |
| safety-reviewer narrow re-check | All five applied edits are OK. |

### C11
Author D wrote the wave. Every coordinator change after review was a reviewer's wording, applied verbatim and re-checked. The coordinator chose between the two reviewers' fixes for defender :818 and recorded why. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These were run after a full `npm run build` (absolute binary) that started after the final content edit to these files:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all five files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier |
| D4 Citations | 620(b) quoted verbatim in two Sources trailers; Casebook 609 Sit. 2 cited |
| D5–D8 | not engaged |
| D9 Summary layer | KTs and Common Mistakes in all five files |
| D10 Key-facts layer | defender :818, center :684/:685/:879, faceoffs :1215 and defensive_zone_coverage :167, each voiced alone |
| D11 Reader safety | safety-reviewer plus a narrow re-check |
| D12 Read-aloud | the author and both reviewers rendered the files |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only) |

## What this method could not have found
- **Missed units.** A unit that prices the act in words the sweeps missed would have passed, and diagram captions were not checked. The harness found an untreated glyph in a defensive_zone_coverage caption (`site/src/diagrams/defensive_zone_coverage.mjs:424`), which is outside this wave.
- **Other rules.** Whether a USA Hockey referee would call a screener shove 608, 609, 620 or 640 roughing was not swept beyond 620 and 621.
- **Concurrent assessment.** Whether 608 and 620 are assessed together is unsettled on disk.
- **The 146-word KT12.** Whether it can be followed by ear needs the owner's listening pass.
