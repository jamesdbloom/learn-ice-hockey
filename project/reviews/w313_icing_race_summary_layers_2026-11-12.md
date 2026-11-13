# W313: the icing and offside racer named in the summary layers of body_contact_and_battles and forechecking_systems (12 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md (KT6 :2167)
- content/systems/forechecking_systems.md (Common Mistakes :1109, KT9 :1175)
- content/systems/defending_the_rush.md (:237 facts; :252 and :921 after the commit gate)
- content/positions/switching_positions.md (:583, :686 Sources trailer; after the commit gate)
- project/plans/OPEN_ITEMS.md
- this record

## Source
This round works the W312 plan row:
- (1) none of body_contact's 15 KTs named the icing or offside racer;
- (2) a sweep for chase scenes with no "race the puck, not the player" limb;
- (4) a paraphrase sweep for the rejected "weighing stops" claim;
- (5) forechecking_systems' summary layers;
- (6) whether CARHA readers are told their own boarding and charging rules.

The rule is the same one used in W311 and W312: NHL, IIHF and PWHL 41.1 and Hockey Canada 7.2 make unnecessary contact with a player playing the puck on an obvious icing or offside play boarding into the boards, and say it should be treated as charging otherwise.

## What changed
**body_contact KT6.** "Numbers showing, puck gone, or only the head open? Do not hit: take the puck." became "**Numbers showing, puck gone, only the head open, or racing for an icing or offside puck? Do not hit: take the puck.**"
- The author chose KT6 over the sketched KT12 because KT6's lead already lists the no-hit triggers.
- The wording "racing for … puck" is the safety-reviewer's; it matches body :741.
- The ⚠️ that follows, "A hit from behind ends your game…", is unchanged and names its own act. A listener who hears it as the price of an icing hit would be over-pricing the hit, not under-pricing it.

**forechecking_systems.** The author's first pass judged that the document never teaches an icing race. The safety-reviewer disagreed. :989 tells the forechecker "On a puck you flipped out of your own end, or a play the linesperson has an arm up for, take the puck or the ice", and the facts line :975 carries it. Common Mistakes and the KTs covered only a turned back.
- **Common Mistakes "Forechecking a dump-in…" (:1109)** gains a final sentence: "On a puck you iced, or with the linesperson's arm up, do not hit the player playing it: take the puck or the ice."
- **KT9 (:1175)** gains "On a puck you iced, or with the linesperson's arm up, do not hit the player playing it." On re-check, the safety-reviewer found the sentence could be heard as USA Hockey-only when it came last, straight after "Under USA Hockey it is at least…". The coordinator applied its exact reorder verbatim: the new sentence now comes straight after the bold lead, and "Take the puck or the ice, never a player's back" serves both cases. It is not placed mid-sentence, where "That is checking from behind" would point at the icing hit. KT9 is 90 words by `wc -w` on the line, including the list number.

**defending_the_rush :237 (facts, voiced alone).** "…name the icing or offside race as boarding, where nobody is defenceless" became "…, even where nobody is defenceless". The old wording asserted that the racer is never defenceless; the clause simply has no defenceless element. The author reported this and the coordinator made the edit.

**Negatives:**
- **Chase sweep, item 2.** center's icing section teaches the dump. Its dump-and-chase is from past the red line, which is not icing. defender never sends the D to chase as the hitter. zone_entries already carries the clause and "play the puck, not the player".
- **CARHA, item 6.** CARHA has no icing race at all: icing is automatic (65(a)). Any intentional contact is a penalty (49(a)), and :1024 prices it. Nothing is priced as free.
- **Paraphrase sweep, item 4.** No paraphrase of "weighing stops" was found anywhere in content.

**Markers:** no ⚠️ added or removed. Marked units: body_contact 198, forechecking 91, defending 88. 0 LOST.

## After the commit gate
The gate BLOCKED on C7. The :237 repair had been made to one line, not to the claim: "where nobody is defenceless" still stood in defending_the_rush :252 (⚠️ body, the paragraph :237 summarises) and :921, and switching_positions :583 said "name a case where nobody is defenceless". That left the document's facts layer and its body disagreeing. The coordinator applied the same narrowing everywhere it appeared:
- defending :252: "name the race for an iced or offside puck as boarding, even where nobody is defenceless" ("iced" became "iced or offside", matching :237 and the clause's "obvious 'icing' or 'off-side' play").
- defending :921: "…, even where nobody is defenceless;".
- switching :583: "name a case that needs no defenceless opponent:", followed by the verbatim 41.1 quotation.
- switching :686 (Sources trailer, not voiced): "a case needing no defenceless opponent".

A corpus-wide grep now finds no unqualified "nobody/no one/not defenceless" claim. A narrow safety-reviewer re-check passed all four sites:
- each is true against 41.1 and HC 7.2, and none is cheaper than the book;
- "or offside" is correct;
- the harness shows 1 warn-inline per glyph and 0 asides on :252, :921 and :583;
- the voiced sites sit in chunks 013, 051 and 046.

The gate ruled that C4 needs no separate rules-verifier for the narrowing. :252's added "or offside" was re-derived by the gate from NHL, IIHF and PWHL 41.1 and HC 7.2, which all read "obvious 'icing' or 'off-side' play".

## Reviews
| Reviewer | Result |
|---|---|
| W313 author | Two passes; the sweeps and negatives above |
| safety-reviewer (post-gate) | Narrow re-check of defending :252/:921 and switching :583/:686: all four OK — true against 41.1 and HC 7.2, none cheaper, "or offside" correct, harness 1 warn-inline per glyph and 0 asides. |
| safety-reviewer | First pass: KT6 OK, with an optional wording that was applied. :237 is exact against all four books ("even where nobody is defenceless") and safe voiced alone; the harness shows KT6 at 1 warn-inline and 0 asides. **Disagreed** with the forechecking premise (above) and called the gap a D11 critical by the layer rule. Narrow re-check of the forechecking text: the Common Mistakes sentence is OK. KT9 needed a reorder so it could not be heard as USA Hockey-only; its exact text was applied verbatim. KT6 is OK at 85 words (`wc -w`). Nothing is cheaper than the book: all three new sentences forbid the hit outright, where the book prices only unnecessary contact. |

No rules-verifier was run. The changes add no rule sentence: KT6 and both forechecking sentences are instructions ("do not hit … take the puck"), and :237 removes an assertion without adding one. The safety-reviewer checked :237 against the four rulebook texts.

### C11
The author wrote KT6 and the forechecking sentences. The coordinator made the :237 edit, using the author's suggested wording, and applied the safety-reviewer's KT9 reorder verbatim. The coordinator wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit: check_facts, check_links --quiet, check_absolutes, check_secrets, and check_marker_pairs and check_callout_flow --panels / --bare on all four content files (body_contact, forechecking, defending_the_rush, switching_positions).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | no new rule sentence; the safety-reviewer read NHL/IIHF/PWHL 41.1 and HC 7.2 for :237; CARHA 49, 52 and 65(a) were read by the author |
| D4 Citations | not engaged |
| D5–D8 | not engaged |
| D9 Summary layer | body_contact KT6; forechecking Common Mistakes and KT9 |
| D10 Key-facts layer | defending :237, voiced alone and cleared by the safety-reviewer; no facts-reviewer was run (the gate ruled this acceptable) |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | body_contact chunk 198; forechecking 077 and 081; defending 011, 013, 051; switching 046 |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on KT6; no site-reviewer was run (text only) |

## What this method could not have found
- Chase scenes worded without the swept terms ("go get it", "beat them to it").
- Whether each "chip past the flat line" in forechecking_systems is played from behind the red line, i.e. whether it is an icing race.
- How KT6 (85 words) and KT9 (90 words) sound aloud. That needs an ear test; both are over the 60-word guideline.
- Summary layers of center, defender and zone_entries for the same limb (the safety-reviewer did not re-read them).
