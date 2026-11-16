# W379: rules_primer's Hockey Canada and CARHA cross-check tiers completed, KT5 tightened, and the unvoiced trailer amber removed from rules_primer and equipment (16 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/off-the-ice/equipment.md
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

**Other content files in the tree are not part of this commit.** The modified files in faceoffs, center, winger, goaltender, shooting, passing_and_receiving, rink_map, forechecking_systems and body_contact_and_battles belong to W380, which is in review. They are unstaged.

## Source
The W378 carry-overs (record `w378_rules_primer_head_claim_trailers_and_equipment_match_2026-11-16.md`), rows (1), (4), (6) and (7). W379 also ran a read-only corpus census (row (2) and (3)), which briefed W380.

## What changed

### rules_primer
- **KT5 :1206.** The two "Under Hockey Canada" sentences are joined (the safety reviewer's W378 sketch): "…Under Hockey Canada it must if it injures in minor and female hockey; in Junior and Senior, if it is highly violent or any foul or illegal hit sends a head into the glass, ice or boards and injures it; and at every level a cross-check above the shoulders must, injury or not." KT5 goes from 131 to 129 words by `wc`. Every tier in the W378 table is kept, and the concussion limb is byte-identical.
- **Overview :31 and Common Mistakes :1154.** "So must a cross-check above the shoulders at every **Hockey Canada** level, injury or not." The book scope is now in the sentence itself (a W378 commit-gate note).
- **:442, the cross-checking item.** It ends "…mandatory under USA Hockey when reckless and under Hockey Canada and CARHA when it injures". Before this, heard alone, it implied Hockey Canada's major is discretionary. The rules are HC 9.2(b)¶2 and CARHA 54(c).
- **Common Mistakes :1142, the "rides up" bullet.** It adds: "Under Hockey Canada and CARHA, a cross-check that injures is a mandatory major and game misconduct at any height, and a match penalty if you meant to injure (Hockey Canada 9.2(c), CARHA 54(d))." Before this, an accidental ride-up that injures was unpriced for Hockey Canada and CARHA, while USA Hockey had a match tier.
  - The match clause is the safety reviewer's Minor 1.
  - "At any height" holds in both books. CARHA 54(c) has no height condition, and its definition reads "at any height". Hockey Canada covers every height through 9.2(b)¶2, 7.6(b)¶3, 7.7(b)¶2, 9.5 Interpretation v and 7.6(b)¶2.
- **KT8 :1212.** An accidental head contact is now "**at least** a head-contact minor" (was "still"), so the minor reads as a floor.
- **Sources trailer :1222–:1256.** 21 glyphs removed, glyph only (scripted byte compare). The trailer is unvoiced: the render produced 133 chunks and none of 21 trailer phrases appears in them.
  - **Location on the page.** The site reviewer found that 7 of the 21 sit in the visible `aside.verification-notes` (Scope of two negatives, Edition note, In-House note), not in the collapsed `details.sources`.
  - **Not voiced.** All 21 are provenance, search or scope notes, and the safety reviewer traced each hazard-like note to an emphasised body carrier: Rule 604 at :509/:536/:801/:1085, and IIHF fighting at :530/:382/:1090.

### equipment
- **Sources trailer :901, :905, :927, :960.** 7 glyphs removed, glyph only. The trailer is unvoiced: the render produced 66 chunks; trailer phrases scored 0 and body control phrases scored 1.
- **:901 correction.** USA Hockey's Summary of Penalties files 615(c) under **three** headings, not two: "Match Penalty Option", "Match Penalty (only)" and "Game Misconduct Penalty" (usah.txt :5315/:5339/:5371, entries :5323/:5347/:5378). This was a safety-reviewer finding outside its dimension, verified by the author and the rules reviewer.

### Census (no edit)
A rules-verifier swept content/ (excluding rules_primer) for Hockey Canada head-contact tiers and CARHA-only match suspensions.
- No Key Takeaway is wrong.
- 16 head-contact sites and 6 suspension sites are ranked.
- It found a sixth tier missing from the ground truth: 9.5 Interpretation 2 items iv–vi, a negligent, reckless or forceful stick to the head that injures, mandatory major plus game misconduct in Junior and Senior.
- It briefed W380.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** all six sites OK. Optional notes: <br>• the KT8 injury tier; <br>• "a push can still be called a cross-check" (HC 9.2 Interpretation 1; the current wording is stricter, not permissive); <br>• :442's other mandatory triggers are carried by the continuation paragraphs :444/:446. <br>**Second read:** :1142 and the equipment :901 correction OK. |
| safety-reviewer | **First read:** no Critical, no Major. <br>• **Minor 1:** :1142 lacked the HC/CARHA match tier beside USA Hockey's. Applied with the reviewer's text. <br>• **Minor 2:** KT8's injury tier is optional, because the act is accidental and nothing a player does changes. Not applied. <br>• **Minor 3:** equipment :901's three headings. Applied. <br>Both trailers upheld. <br>**Second read:** CLEAR. |

### C11
The coordinator wrote no content.
- **KT5 join:** the W378 safety reviewer's sketch.
- **Scope words, :442 and :1142 first sentence, KT8, trailer removals:** the author's, read and cleared by both reviewers.
- **Post-review edits:** the reviewers' exact text, re-read by both.

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 20:24:44, newer than rules_primer.md (20:23:52) and equipment.md (20:23:54).
- check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets: pass.
- check_callout_flow --bare: 0.
- check_marker_pairs: rules_primer has 11 LOST and equipment has 4 LOST. Every LOST is a trailer unit, named in each author's report, and each is unvoiced by render. Both files have 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier (two reads) against HC 7.5(b), 7.6, 7.7, 9.2 and its Interpretations, 9.5 and its Interpretations, CARHA 54 and its definition, USAH 609 and the 615 Summary |
| D4 Citations | HC 9.2(c) and CARHA 54(d) added, verified |
| D8 Counts | "at any height", "at every Hockey Canada level", three Summary headings |
| D9 Summary layer | KT5, KT8, Overview and CM read voiced alone (render chunks 003, 043, 121, 124, 131) |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | rendered; trailers confirmed unvoiced |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 20:24:44 build (below) |
| D5–D7, D10, D13 | not engaged |

**D15.** The site-reviewer covered rules_primer and equipment in Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.

| Page | worst 400px | 1440px |
|---|---|---|
| rules_primer | 46.6% → 43.9% | 38.9% → 38.9% |
| equipment | 46.3% → 46.3% | 28.9% → 28.9% |

- No window is over 50%.
- Both trailers show 0 warn-inline when opened. warn-inline counts fell 244 → 223 and 84 → 77, which match the glyphs removed.
- The KT5 concussion amber forms, and equipment :813's amber runs are unchanged.
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll.

## Found, not fixed (plan rows)
- rules_primer KT8 does not state the Hockey Canada injury tier for an accidental head contact (7.6(b)¶2). Both reviewers judged it optional.
- rules_primer :1142 "Below the shoulders, a push is still a cross-check" is stricter than HC 9.2 Interpretation 1. The rules-verifier offered "can still be called a cross-check".
- rules_primer :1142's amber run is 338 characters (about 10 lines at 400px), the longest among the changed units. Its worst window is 39.7%.
- rules_primer :29 states USA Hockey's match suspension and Hockey Canada's game-misconduct suspension, but not HC 4.10(a) (census, low).

## What this method could not have found
- Other books' rules pricing an injuring cross-check under other names, for example roughing.
- Sibling pages carrying the cross-check tier. This wave's census (which briefed W380) covered head contact and suspension; cross-checking was not censused.
- Real devices.
