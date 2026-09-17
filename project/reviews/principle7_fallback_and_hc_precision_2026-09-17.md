# A Principle-7 Critical fixed, plus a rules-precision fix propagated to three documents

**Date:** 17 September 2026. Follow-on to the dedicated `rules-verifier` and
`facts-reviewer` passes over `content/foundation/core_principles.md` run to
close Workstream 1A's last open item (reviewer clearance of the seven
principles' own wording).

## Critical, found and fixed: Principle 7's "no time to turn" fallback was silent in its two most-isolated layers

`facts-reviewer` found that Principle 7's boards-contact fallback
instruction — spread the load (stick and gloves on the glass, arms out)
for when a player is already facing the wall with no time to angle in or
turn their skates — existed in the Principle 7 body and the Common
Mistakes bullet, but was absent from the Key focus and Key Takeaway 8,
the two layers most likely to be read or heard in isolation in a
corpus that is read aloud with no surrounding context. Fixed in both.

A follow-up `safety-reviewer` pass caught that the fix's first version
dropped the body text's explicit hierarchy framing — "that is damage
limitation rather than the posture to aim for" — risking a listener
treating the fallback as equal to the preferred technique rather than a
last resort. Fixed by appending the same framing to both new clauses.
Re-verified clean: the instruction, its conditional trigger ("already
facing it, no time to turn"), and its inferior-to-turning status now all
survive in every layer.

## A rules-precision fix, propagated to three documents after being independently missed twice

A `rules-verifier` pass over `core_principles.md`'s own rule claims found
one overstatement: the document's Sources trailer said Hockey Canada
"writes no such sentence anywhere in its book" for the NHL/IIHF/USA
Hockey "stand your ground" interference exemption. Hockey Canada's Rule
8.1 (Holding) does contain a narrower body-position permission — for
arm-blocking specifically, conditioned on already having position —
verified directly against two independent extractions of the primary
text (`sources/hc_layout.txt` and `sources/hc.txt`, which agree word for
word). This doesn't undermine the substantive claim (Hockey Canada has
no equivalent to the broader interference exemption), but the phrasing
was imprecise. Fixed in both the Sources trailer and the body prose,
which had stated the same claim without qualification and needed to
match.

A follow-up check then found the identical, pre-correction overstatement
still live, word for word, in two sibling documents making the same
claim: `content/foundation/rink_map.md` (Key Takeaways) and
`content/foundation/on_ice_communication.md` (inside a `facts` block,
where it is voiced alone in the audio layer). Both fixed to match the
corrected wording. A subsequent review of those two fixes found:

- **`rink_map.md`'s new Rule 8.1 detail wasn't backed by its own Sources
  trailer** — the document's consolidated Hockey Canada citation didn't
  list Rule 8.1 among the rules checked, even though the document now
  asserts what it says. Fixed by adding a dated citation.
- **`on_ice_communication.md`'s compressed fact line dropped the
  precondition** ("provided they have body position") that makes Rule
  8.1 narrower than a plain arm-blocking permission — a real risk in a
  layer voiced alone in audio, since a listener hearing only the fact
  could take it as an unconditional permission. Fixed within the 300-char
  `Rule:` cap by trading a stylistic aside (the IIHF's pronoun difference)
  for the substantive precondition.

## Also fixed: the same imprecision in two further documents

The same review found the identical underlying fact stated with the same
imprecision (naming Rule 8.1 without saying what it permits) in
`content/hockey-iq/playing_without_the_puck.md` and
`content/systems/breakouts.md`'s first of two mentions (its second
mention already stated Rule 8.1's full, correct wording — the most
precise version of this fact anywhere in the corpus, and the model both
fixes followed). Fixed in both, then independently re-verified against
both extractions of the primary text (`sources/hc_layout.txt` and
`sources/hc.txt`, which agree word for word) — accurate, non-contradictory
with each document's surrounding prose, and grammatically clean in both
locations. This closes the propagation of this fix across every document
where the check found it stated.

## Gates

`check_links.py` (exit 0), `check_facts.py` (837 blocks, 5,622 facts, all
conform), `check_absolutes.py` (39 documents + 408 diagram units, clean)
— run after every fix above.

## What this round could not have found

No TTS rendering was run for any of the affected passages. Neither
review pass ran an exhaustive corpus-wide search for every document
touching "Hockey Canada" and "body position" — both sampled from a
grep and read the highest-relevance hits, which is how the two further
gaps below (`playing_without_the_puck.md`, `breakouts.md`) were found
without being chased to completion. No primary source outside Hockey
Canada's Rule 8.1 was freshly re-verified in this round; the NHL, IIHF,
USA Hockey and CARHA citations in the same passages were reviewed in
earlier rounds this session and are unchanged here.
