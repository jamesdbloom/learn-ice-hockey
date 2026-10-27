# SG107: hit-from-behind-to-the-head sweep, switching KT8, glossary "Sealing" (27 October 2026)

**Files:**
- content/positions/switching_positions.md
- content/foundation/language_and_glossary.md
- project/plans/OPEN_ITEMS.md

## What changed and why
1. **The claim swept.** How the corpus prices a hit from behind that reaches the head under the IIHF, NHL and PWHL. Owner ruling, 19 October: the harsher of Rule 43 and Rule 48. One agent swept content/ for the act in several wordings.
   - About 30 sites state the owner's form, and about 25 "every book but USA Hockey" sites are scoped off the head. All were correct, and none was rewritten.
   - Verified in passing: the PWHL head-contact match is 48.4, not 48.5. No site miscites it.
2. **switching_positions KT8 (:634).**
   - "Even off the head" became "Kept off the head". The old wording implied a head hit always ejects; under HC 7.6(a) it can be a minor.
   - The USA Hockey clause had attached "plan on a match" to all three triggers. USA Hockey makes the match mandatory only when reckless (602(a), 608(c)); forceful-along-the-boards and head-first carry a major plus game misconduct (608(b), Casebook 608 Situation 1). Now: "…and there too if it is forceful along the boards or sends them head first; if it is reckless, plan on a match and a likely multi-game suspension." This matches rules_primer :1058 and glossary :292.
3. **Glossary "Sealing" (:202).** The definition widened from the two-player forecheck sense only. The glossary's own lines :24, :404, :490 and :522, body_contact :483, and several diagram labels ("seals D1") use it for one player holding the wall lane. The new definition:
   - covers both senses;
   - says "with your position, not your body — never push or pin them into the boards" (the owner definition at body_contact :483; HC 7.3 Interpretation 1);
   - adds the IIHF women's "hold only ice you reached first" (101.1) and CARHA's duty to avert contact (49(a); worded as core_principles KT10).
4. **Plan.** The row saying the DOPS points ladder "is stated nowhere" was stale and is removed. uk_rules :415 has carried it since SG79 (bd48adc), and every limb was re-verified against Appendices D, E, G and K.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules | rules-verifier | KT8 "Kept off the head" and "ends your game in every book but USA Hockey's" CONFIRMED book by book. NHL/PWHL 43.2/43.5; IIHF 43.2/43.3 in both editions: discretion decides whether Rule 43 is called, not the price. HC 7.5(a)/(e) and CARHA 53(a) also checked. USA Hockey match scope INCOMPLETE, fixed as above. Sealing: holding a lane by position is legal in every book (HC 7.3 Interpretation 1, USAH 604(c) Note, IIHF/PWHL "hold their ground", CARHA 66(a) Note 2). INCOMPLETE on pin/lean and CARHA 49(a), fixed. |
| Safety | safety-reviewer | KT8 SHIP (rendered: no act cheaper; "Important." kept). Sealing FIX (minor): "hold that lane" added an instruction without the CARHA and IIHF-women's limbs; fixed with the reviewer's sketch. check_marker_pairs 0 LOST on both files. |

### C11
The coordinator applied both reviewers' sketches after the reviews. The commit gate reads them:
- **KT8:** the USA Hockey clause above.
- **Sealing:** "…hold that lane with your position, not your body — never push or pin them into the boards. In IIHF women's hockey hold only ice you reached first, and in a CARHA league find out before you rely on holding it, because failing to avoid contact is a penalty there."

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 | rules-verifier, as above; British books were searched for Rule 43 departures (none). |
| D4–D5 | Quotations are in the reviewers' reports. |
| D6 | n/a |
| D7 | Sealing remains a technique definition, not a law. |
| D8 | n/a |
| D9 | The sweep was by claim across every layer; KT8 now matches switching facts :254, body :294 and CM :567. |
| D10 | No facts lines changed. |
| D11–D12 | KT8 rendered and read alone. The glossary was not rendered (declared). |
| D13 | n/a |
| D14 | check_links passes. |
| D15 | Full site build with the absolute npm after the last edit. |

### Mechanical checks
check_facts, check_links --quiet, check_absolutes and check_counts --update all exit 0. check_marker_pairs: 0 LOST.

## What this method could not have found
- A site pricing the act in wording the sweep did not use.
- Diagram captions and podcast scripts, which were not swept.
- forechecking_systems :68 ("Sealing also means contact against the boards") is looser than the owner definition but defers to the rulebook. A later look could make it "can mean".
- How CARHA referees reconcile 49(a) with 66(a) Note 2.
