# W2 (20 October 2026): readability pages 15–18 — UK Rules, Rink Map, On-Ice Communication, Puck Handling

This is the next round of the owner's readability programme, page by page with the worst first. Four author agents (wa–wd) each owned one page. The brief is in the session scratchpad at `w2/brief.md`. It is the Z brief plus four lessons from the Z round:
- a known tool artefact with blockquotes;
- keep one strong run per amber warning;
- the cap of two 602(a) suspensions per document;
- add a ⚠️ only to a split half that states a hazard.

Every page had a safety-reviewer with a rules lens. UK Rules and Rink Map then needed further passes.

## Results (check_readability, before → after)

| Page | Longest sentence | Paragraphs > 1,200 | KTs > 60 words |
|---|---|---|---|
| uk_rules | 98 → 60 | 1 → 1 (the "Who governs what" blockquote: five real paragraphs of 264–485 chars, joined by the tool) | 13 → 5 (64–67). Two 93–124-word KTs were split, so there are now 25 KTs |
| rink_map | 100 → 61 (the IIHF dimensions list) | 3 → 0 | 8 → 4 (63–78; each carries a penalty limb) |
| on_ice_communication | 193 → 59 (a list sentence became two paragraphs) | 2 → 0 | 3 → 2 |
| puck_handling | 94 → 60 | 1 → 0 | 3 → 2 (74, 65) |

## Corrections found by review

**uk_rules**
- **MAJOR (waS).** KT22 scoped the medical-cover rule by place ("In England and Wales a rink must have…"). EIH R&R 33.1/33.5 apply to EIH-sanctioned competitions and fixtures. The fix is now in six layers, scoped to "an England Ice Hockey fixture": body :443/:445, "Does not cover", CM, Check yourself, and KT22. The body now says the rule sets nothing for a practice session, and that whether it reaches IHUK competitions in Scotland and Northern Ireland since the merger is unsettled.
- **MAJOR (waS).** KT4 had dropped the Elite League from the practice neck-guard rule, so it read as "unsettled" for Elite League clubs in Scotland and NI. It now says: "the Elite League's reaches every practice" (EIHL Casebook 9.12).
- **MAJOR (waS).** KT17 had lost the per-game-or-per-season caveat on the Elite League first-major fight softening. It now says: "count the season, since the League does not say".
- **MINORs (waS, waS2).**
  - KT18: sucker punch "(under 2026/27, one that injures)", keeping v1.1's "could cause" for In-House readers.
  - KT18: the Elite League instigator exception now excludes aggression and a second major, and "2+5+10" is spelled out.
  - KT18 and KT22 got their ⚠️ back.
  - CM: "nothing read here says".

**rink_map**
- **MAJOR (wbS).** The owner's 19 Oct CARHA 32(d) ruling had not been propagated. "At least a one-game suspension" is now at every CARHA major site. CARHA match sites use 34(a): "until the Chairman has dealt with your case".
- **MAJOR (wbR).** KT11 put save-then-cover in a takeaway about play behind the net. No book allows covering behind the goal line after a save: USAH Casebook 614(c) Situation 12, HC clause v, and CARHA 58(b) all forbid it. KT11 now says freezing behind the goal line is a minor in every book, even after a save. Save-then-cover is "out in front", under NHL/IIHF/PWHL, and under USA Hockey when pressured. Body :307 and CM :643 carry the same scope.
- **MAJOR (wbS2, introduced by the wbR fix).** The fix had added Hockey Canada to that permission. HC Interpretation 3 to 10.1(a) clauses ii and v point both ways, and goaltender.md :644/:1623 say "a reading, not a ruling". It now reads "Hockey Canada's book points both ways, so ask your league".
- **MINORs:**
  - KT10 restores the skate-on-crease exception (NHL 27.8, IIHF 27.7).
  - "In Britain outside the Elite League, expect theirs to come out" appears in KT10, Key focus and CM. The Elite League falls back to IIHF 27.7.
  - Body :303 trapezoid scope is now "outside the Elite League" (coordinator edit, upheld by wbS2).
  - CM charging tiers: "whenever the referee calls a major" for USA Hockey and CARHA.
  - KT16's CARHA suspension wording.
  - A "CARHA CARHA" typo.

**on_ice_communication** (wcS: CLEAR; MINORs applied by the coordinator)
- KT13 and the matching CM: under NHL/IIHF the icing exemption "lasts while you are a skater short and ends the instant the penalty that evens the numbers expires, even if your player is still in the box". Before, it implied the exemption lasts until the player returns.
- KT12 and CM: IIHF kicking is "at the referee's discretion"; a kick shot "stops play under USA Hockey".
- :317: "above the cross-checking major" (chunk antecedent), and 609(c) "may" is set beside 602(a) "shall".

**puck_handling** (wdS: CLEAR; MINORs applied by the coordinator)
- KT3: "In a non-checking game, bumping or driving into them is a penalty".
- :351: "gather it in inside your crease and it is the shot" (NHL 63.6: outside the crease it is a minor).
- KT6: "pass back to a teammate behind you".
- 602(a) suspension count: two 602(a) sites. A third "likely multi-game suspension" is tied to 627(b), not to 602(a), and was already in HEAD.

**Rules re-verified at source across the passes:**
- EIH R&R 22.3, 24.3, 33.1–33.9; EIHL Casebook 9.12, 46; In-House Introduction, 9.12, Section 6, 76, 101; IHUK RoCs
- IIHF v1.1 and 2026/27: 20.4, 27.7, 42, 46, 49.3, 59, 60, 63.2, 63.6, 70, 76, 81.6, 101.1
- NHL and PWHL equivalents
- USAH 602(a), 604, 607, 609, 614(c) with Casebook Situations 5–14, 622(b), 627
- HC 7.1(c), 7.3, 8.1, 8.3, 8.5, 9.2, 10.1 Interpretation 3, 10.2
- CARHA 30, 32, 34, 48, 49, 52, 53, 54, 58, 66, 68, 79
- ukcg.txt (UK concussion guidance)

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/foundation/on_ice_communication.md | +20/−14 |
| content/foundation/rink_map.md | +39/−36 |
| content/foundation/uk_rules.md | +34/−32 |
| content/technique/puck_handling.md | +25/−23 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | safety-reviewers with a rules lens on every page; a rules-verifier (wbR) on rink_map's new text; re-review passes waS2 and wbS2 |
| D2 exceptions | the skate-on-crease exception; HC clause ii vs v; the USAH pressured-cover condition; 32(d) accidental high stick; the IIHF 46.13 injury condition |
| D3 divergence | per-book tiers for icing exemption, kicking, charging the goalie, sucker punch |
| D4/D5 citations | no character changed inside a quotation; EIH, EIHL and CARHA quotations checked |
| D6 negatives | "nothing read here" for Elite League and practice medical cover (no source on disk) |
| D7 cardinal rule | no change |
| D8 numeric ownership | 602(a) count checked per file |
| D9 summary layer | layer tests for medical cover (six sites), the Elite League practice neck guard, save-then-cover, and the CARHA suspension |
| D10 facts | no facts line changed; check_facts passes |
| D11 safety | every page CLEAR after its fixes |
| D12 read-aloud | all four rendered by authors and reviewers; KTs and CM heard alone |
| D13 folklore | out of scope |
| D14 structure | no headings changed; rink_map definitions and dimensions unchanged (checked by script); check_geometry passes |
| D15 site | full build after the final edit; --bare 0; --panels 0. The browser look of the new list items in rink_map and the split KTs is deferred to the "Site-reviewer pass due" plan row |

## Gates (no pipes, after the final edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 4 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- **Sibling documents.** The changed claims also appear elsewhere: goaltender.md (save-then-cover, trapezoid), equipment.md and conditioning_and_recovery.md (the neck guard and medical cover). This becomes a plan row.
- **Missing sources.** No Elite League, SNL or NI competition documents on medical cover are on disk.
