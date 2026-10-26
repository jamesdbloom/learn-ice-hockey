# SG90: the extended-knee rung reaches the Rules Primer (26 October 2026)

**Files:** content/foundation/rules_primer.md (:479), content/technique/body_contact_and_battles.md (:620)

## What changed and why
SG89 added USA Hockey Casebook 628 Situation 1 to body_contact_and_battles. That passage says the major plus game misconduct *"should be assessed in all instances when the knee is extended for the purpose of delivering a check and when the contact is made to the knee of the opponent."* A sweep of every other page that cites 628 found one more place pricing USA Hockey kneeing without this rule: the Kneeing bullet in rules_primer's penalty list (:479). shooting.md mentions knees only for shot height, so it needed no change. The added sentence leads with the instruction, as body_contact :620 does:

"**Never extend your knee into theirs:** USA Hockey's Casebook wants the major and game misconduct for that in all instances (628, Situation 1)."

The coordinator changed the agent's "its Casebook" to "USA Hockey's Casebook" so the sentence still makes sense when read aloud on its own.

**Then widened, after the safety review.** "Never extend your knee into theirs" was narrower than the Casebook's first limb: *"A kneeing penalty should be assessed any time a player delivers a check with the knee extended or uses the knee to deliberately contact an opponent."* A first rewrite ("to make a check") was still narrow on purpose. The Casebook names the commonest case as a beaten player who *"extends the knee to impede the opponent"*. Both pages now open:

"**Never stick a knee out to hit or slow a player, least of all into their knee:** USA Hockey's Casebook calls any check delivered with the knee extended, or any deliberate knee contact, kneeing…"

The rest of each sentence is unchanged: the "in all instances" major-and-game-misconduct rung, and, at body_contact, the verbatim quotation. body_contact :620 carried the same narrow wording from SG89 (commit 2d4daec), so it is repaired here too.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules and safety, one sentence | rules-verifier (also briefed as safety reviewer) | **CONFIRMED** against usah_casebook.txt :14920–14957 and usah.txt 628 (:4584–4594). True heard alone. Not cheaper in place: the clause just before it in the same list item carries the match. 404(b) is not needed here: it is already at :29 and earlier in the same bullet. Notes for the plan: the bullet's "plan on a match (602(a))" has no "if reckless" condition, which errs harsh, and it cites 602(a) where the kneeing match is 628(c). Both follow the corpus-wide pattern the owner approved ("602(a) is enough"), so nothing was changed. |
| Safety, after the commit gate blocked on C6 (round 1) | safety-reviewer | FIX: the opening instruction was narrower than the Casebook. |
| Rules, round 2 (both files) | rules-verifier | CONFIRMED. The quotation is verbatim; "any check delivered with the knee extended" is the Casebook's first limb. |
| Safety, round 2 (both files) | safety-reviewer | FIX: "to make a check" was still narrower than every book's "contact" and the Casebook's "impede" case. Sketch applied: "to hit or slow a player" and "or any deliberate knee contact". |
| Commit gate (blocked) | commit-gate | rules_primer :479: inserting "or any deliberate knee contact" turned "it" in the rung clause to mean any deliberate knee contact, which drops the Casebook's two joined conditions (extended to deliver a check *and* contact to the knee). body_contact :620 is clear, because it quotes the rung verbatim. |
| Rules, round 3 (primer) | rules-verifier | CONFIRMED: "in all instances where a knee extended to make a check meets the opponent's knee" carries both conditions. |

### C11
The final wording is the round-2 safety sketch. At rules_primer the rung clause was then re-tied to "a knee extended to make a check" after the gate's finding; the round-3 rules-verifier CONFIRMED that wording.

## Dimensions
| Dim | Status |
|---|---|
| D1–D5 rules, citations | rules-verifier, as above |
| D6, D8, D13 | n/a / out of scope |
| D7 cardinal rule | Not affected |
| D9 summary layers | No facts line, Common Mistakes bullet or Key Takeaway in rules_primer prices kneeing (sweep by fixing agent) |
| D10 facts layer | No facts line changed |
| D11–D12 safety, read aloud | Two dedicated safety-reviewer rounds, with renders (primer chunk 050, body_contact chunk 051) |
| D14–D15 | check_links passes; site build with the absolute npm exits 0 |

### Mechanical checks
check_facts, check_links --quiet, check_absolutes and check_marker_pairs all exit 0.

## What this method could not have found
Kneeing prices worded without "knee" or "628", for example "a low hit". Also whether USA Hockey 639 (leg checking) gives a second, cheaper route for a knee that trips.
