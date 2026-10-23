# SG44: sealing, pinning and leaning scoped by book; four small OZP/core_principles fixes (23 October 2026)

## What changed

**The claim:** "seal the wall / seal with your body" was told to readers without a limit. It can teach an illegal act under three rules:
- IIHF women's 101.1: no pinning along the boards.
- Hockey Canada 7.3: in non-checking divisions, an arm, shoulder or hip extended after angling is a check.
- CARHA 49(a): "intentionally bodies, pushes, shoves, stands in front of an opponent for the purpose of making contact, and/or does not avert body contact".

The first repair ("never a hip or a pin") was wrong in two ways:
- It clashed with the corpus's taught tactic, "pin the puck, not the player".
- It read as banning a legal hip check in checking leagues.

A second pass ("an arm or a skate is never allowed") was also wrong. NHL 54.2, IIHF 54.2, PWHL 55.2 and Hockey Canada 8.1 allow an arm strength move. Both were caught in review.

Final wording:

**`content/systems/forechecking_systems.md`**
- **:580 (facts):** "seal with position and pin the puck, not the player, where contact is allowed at all".
- **:610 (In short):** "seal the wall with position — a hip makes it a check — and keep arms and skates out".
- **:639:** "so under USA Hockey, leaning on the wall survives where body checking does not; where Hockey Canada bars checking, or under CARHA, never lean". This was previously general.
- **:661:** the list matches OZP :1156. New ⚠️ CARHA sentence: "In a CARHA league, keep only a spot you reached first, never lean to keep it, and give way rather than take contact you could avoid", quoting 49(a) verbatim.
- **:1043 (Common Mistakes):** reworded to the same vocabulary.
- **KT6:** "Seal the wall with position and pin the puck, not the player — a hip makes it a check, which your league may not allow; never hold with an arm or push off with a skate."

**`content/systems/offensive_zone_play.md`**
- **:924 (facts):** "seal the wall with position, pin the puck, not them".
- **:1156 (Common Mistakes):** "seal the wall with your position and pin the puck rather than the player".
- **KT8:** "seal the wall with position and pin the puck rather than the player, or angle the winger off". "Keep arms and skates out" now sits beside "hit only if your league allows checking".
- **:96:** "So at even strength a clean look from the slot is worth several times an unscreened point shot…". This restores the antecedent lost in SG43.
- **:166:** restores "51,308 shots". The owners table makes the sample size part of the fact.

**`content/technique/body_contact_and_battles.md`**
- **:296 (facts):** "Both leaning, both playing the puck, same direction is legal under USA Hockey and the IIHF; in a Hockey Canada non-checking division or under CARHA, keep it incidental and never lean". This previously implied leaning was legal everywhere but CARHA, including Hockey Canada non-checking.
- **:295:** the SG44 limb was reverted to HEAD, because the block's own Never line carries it.

**`content/foundation/core_principles.md`**
- **:37:** "These ideas hold for every position and level, and where your team's system or your league changes the answer, they say so and tell you to find out." Previously: "whatever system, position or league".
- **:115:** "The three to four percent of your ice time with the puck feels like hockey; the rest is where games are decided." This drops a 96% figure set at a precision the owner disclaims, and uses the owner's unit, ice time.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules | rules-verifier (three passes) | **Pass 1:** IIHF 101.1, HC 7.3 and CARHA 49(a) verbatim; the CARHA instruction was incomplete (49(a) also penalises not averting contact; 66(a) Note 2 stand-ground/shadow). **Pass 2:** "an arm… is never allowed" was WRONG (NHL/IIHF 54.2, PWHL 55.2, HC 8.1 strength move); "a hip makes it a check" VERIFIED for HC 7.3, USAH 604 Note 1, the IIHF glossary and PWHL 52.1; the :296 HC reading was unconfirmed (HC protects only "incidental contact"). **Pass 3:** all four repaired lines VERIFIED. The IIHF leaning permission is general (Appendix II "Competitive Contact … reasonably allowed to push and lean into each other provided that possession of the puck remains the sole object"), not women's-only. USAH Glossary and 604(c) Note confirmed. |
| Safety | safety-reviewer (three passes) | **Pass 1:** CLEAR, with a minor on CARHA averting. **Pass 2:** one major (body_contact :296 made leaning sound legal under HC non-checking), one minor (the KT6 arm claim), and a sibling gap at forechecking :639. **Pass 3:** CLEAR. body_contact :23 Key focus ("Under Hockey Canada or CARHA adult rules, never lean or body to keep a spot") stands, because HC 8.3 interference has no division scope. |
| Content | content-reviewer (two passes) | **Pass 1:** one major (the "never a pin" clash with "pin the puck, not the player") plus 6 minors (scoping "never a hip"; "hold" vs "a hold"; CARHA beyond the owner; :1043 wording; core_principles "they"; OZP :96 at even strength). **Pass 2:** one major (KT6 arm, the same as rules pass 2) and one minor (OZP :924 "never by pinning"). Both were fixed in the final round, and the rules-verifier and safety-reviewer checked the final text. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check-links: 56 pages. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on 4 files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the rules-verifier (three passes, list above) |
| D4–D5 citations | Checked: the CARHA 49(a) quotation is verbatim, with its close checked. The 51,308 figure matches the owners table. |
| D6 negative existence | Checked: Hockey Canada never uses "lean" (true negative, read in context) |
| D7 cardinal rule | Checked: the arm "never allowed" claim was converted from a false rule into an instruction |
| D8 numeric ownership | Checked: 51,308 and 3–4% are aligned to their owners |
| D9 summary layer | Checked: KT6, KT8, Common Mistakes, facts and Key focus are all consistent across the three pages |
| D10 facts | Checked: changed facts lines (fc :580 at 194/200, OZP :924 at 197/200, bc :296 at 182/200) read correctly voiced alone |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Partly: antecedents and list shape read by the reviewers. No SSML render. |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links and check_absolutes |
| D15 rendered site | Build passes. The new ⚠️ CARHA sentence leads a bold run (warn-inline shape). No visual pass. |

## What this method could not have found

- Unscoped leaning or sealing wording on other pages (defender, winger, rules_primer). This is now a plan row.
- How Hockey Canada referees judge mutual leaning (no casebook situation).
- Kicking-rule pricing of a skate push-off outside USA Hockey 627(a).
- The audio: no chunk render.
