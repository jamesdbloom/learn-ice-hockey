# W332: USA Hockey's kicking rule reaches a slew-foot delivered with a kicking motion (14 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/hockey-iq/risk_management.md
- content/foundation/rules_primer.md
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The slew-foot plan row, item (6), was opened by a W330 rules-verifier. Two USA Hockey rules price the same act:
- **627(b), kicking.** A match "shall be assessed to any player or goalkeeper who kicks, attempts to kick or recklessly endangers an opponent by kicking" (listed under "Match Penalty (only)"). Casebook 627 Situation 3 adds: "Any kicking motion towards an opponent must be penalized as a match penalty", with or without contact.
- **639, slew-footing.** Note 4 defines slew-footing as using the leg or foot "to knock or kick an opponent's feet from under them". 639(b) sets a major plus a game misconduct as the minimum, and under 639(c) a match "may also be assessed".

No rule or Casebook Situation on disk reconciles the two. The corpus priced a USA Hockey slew-foot only under 639.

A read-only census (W332) verified this tension and found every unit that states a USA Hockey slew-foot price. It searched by claim, in all layers and in captions. Only four documents carry the price, and no caption does. The census also corrected the brief: not every slew-foot is a 627 kick, since 627 needs a deliberate kicking motion and Casebook 639 Situation 5 describes a sweep. So the new limb had to be conditional.

Four authors each took one file: P, Q, R and S.

## What changed
Each document gained a conditional limb, along the lines of "with a kicking motion, plan on a match (627(b); Casebook 627 Situation 3)". It sits beside the existing 639 floor and the 639(c)/602(a) reckless match, and replaces neither.

**Why "plan on" and not "is".** 627(b) says "shall". But 639 Note 4 itself counts a kick as slew-footing, at a lower floor. Whether the referee calls the act a 627 kick or a 639 sweep is therefore a judgement. "Plan on" is the corpus's convention for a mandatory tier that depends on how the referee characterises the act.

- **body_contact_and_battles**
  - :1849 What it costs (the primary site).
  - :1830 facts line, restructured to carry the limb (297/300).
  - :2071 Common Mistakes, which now gives USA Hockey's reckless match (602(a)) and its kicking match (627(b)). It had stated only the floor, while Hockey Canada and CARHA beside it got their ceilings.
  - :1173, a cross-reference from the kicking section.
  - :2184 trailer.
- **risk_management**
  - A new facts line at :755. The floor line would have left the limb heard as all four books.
  - :904 body, with ⚠️ on the bolded instruction.
  - :997 trailer.
- **rules_primer**
  - :484 is now three sentences. "If it is reckless" became "if a USA Hockey slew-foot is reckless", so "it" cannot drift onto the kick.
  - :1216 trailer.
  - An optional CARHA 48(c) limb was declined. CARHA's own Case Situation under 86(b) rules on "a kicking motion from behind" as a discretionary match, so the book has decided the overlap.
- **defending_the_rush**
  - :1017 facts. The block is at 14/14, so the limb went in by restructuring the book list to "Beyond the NHL, … PWHL 53.2 …, IIHF 52.2 …, USA Hockey 639 (at least that; plan on a match for a kick, 627(b)) …" (300/300). All five books are kept.
  - :1033 body.
  - :1179 and :1189 trailers.

## After review (coordinator applied reviewer wordings verbatim)
- **body_contact :1830 (safety-reviewer).** The line rendered as "plan on the match six hundred and twenty-seven, clause b gives…", which leads the listener the wrong way. It now reads "plan on the match that 627(b) gives any kick at an opponent". The safety-reviewer re-checked it in a fresh render: OK.
- **Not applied:** the rules-verifier's optional "the same" for defending_the_rush :1017's "at least that". The safety-reviewer judged the pointer sound in the render, and it is logged in the plan.

## Reviews
| Reviewer | Result |
|---|---|
| census (read-only) | Tension confirmed. No reconciling text on disk. The only general precedence sentence (Casebook 630 Situation 21) is not a penalty ruling. Four carrier documents; no captions. |
| authors P, Q, R, S | Premise re-verified in sources. Harness 1:1 on changed ⚠️ units. Each limb rendered whole in its chunk. |
| rules-verifier | Nothing blocking; 13 hunks OK. "Plan on" is right: "is" would overstate and anything weaker would understate a "shall"/"must". Also checked 627(a) push-off, 602(a) and 628, and the IIHF, NHL, Hockey Canada and CARHA kicking rules; none conflicts the way USA Hockey's do. Upheld declining CARHA 48(c). All trailer quotations verbatim. |
| safety-reviewer | Nothing blocking. No unconditional "a slew-foot is a match"; no limb lost; 0 LOST. One WORDING (:1830), applied. KT9 (body_contact), KT9 (risk_management) and KT8 (rules_primer) say only "ejects", so none understates. |
| safety-reviewer narrow re-check | :1830 OK in a fresh render. |

### C11
Authors P, Q, R and S wrote the wave. The coordinator's only content change after review was the safety-reviewer's wording at :1830, applied verbatim and re-checked. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0), started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all four files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0);
- check_quote_drift on risk_management (0 flagged).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier; census |
| D4 Citations | trailer quotations verified verbatim past their closing marks |
| D5–D8 | not engaged |
| D9 Summary layer | body_contact Common Mistakes :2071; KTs checked and left (they give no tier) |
| D10 Key-facts layer | risk_management :755, body_contact :1830, defending_the_rush :1017, each voiced alone |
| D11 Reader safety | safety-reviewer plus a narrow re-check |
| D12 Read-aloud | renders by the authors and the safety-reviewer |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links (the new :1173 anchor resolves) |
| D15 Rendered site | build plus harness; no site-reviewer (text only, no caption) |

## What this method could not have found
- **Rulings outside the books.** Whether a USA Hockey referee directive or bulletin settles 627 against 639. Nothing on disk does, so "plan on" is a conservative reading, not a ruling.
- **Missed wordings.** A unit pricing the act in words the census did not search for, such as "take their legs" or "hook a leg".
- **Kicks outside CARHA 86(b).** CARHA 86(b) reaches only a kick "from behind". A kick at the skates from the side or front falls to 48(c)'s mandatory match, and no unit voices that. It is logged in the plan.
- **Listening.** Whether the 297–300-character facts lines can be followed by ear needs the owner's listening pass.
