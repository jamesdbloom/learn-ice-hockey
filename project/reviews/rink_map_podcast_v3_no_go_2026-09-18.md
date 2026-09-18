# `rink_map` podcast v3 — NO-GO, 18 September 2026

**Verdict: NO-GO**, failure count 3. But the reason has changed, and the change
is the most important thing in this record.

## The headline: the failure mode has shifted from ADDITION to TRANSMISSION

v1 and v2 failed by *adding* — plausible invented content layered on top of a
largely faithful rendering. v3's dominant failure is different: **six rules that
`rink_map.md` states correctly come out of the episode wrong.**

| | v1 (17 Sep) | v2 (18 Sep) | **v3** |
|---|---|---|---|
| Invented whole segments with false provenance | 1 | 0 | **0** |
| Invented cross-book rule comparisons | 1 | 1 | **0** |
| Invented player/history narratives | 1 | 1 | **1 (same item)** |
| Invented statistics/dimensions | 1 | 0 | **1** |
| Invented rationales for real rules | — | — | **1** |
| Hedge resolved / scope broadened | 1 | 1 | **1 (softer)** |
| **Misstatements of rules the source states correctly** | 2 | 1 | **6** |

⚠️ **This is a worse class to ship than invention, and the reason is a review-method
problem, not just a content one.** A fabrication is detectable by a reviewer
reading the source document alone. A misstatement of a rule the source states
correctly **is not** — it looks sourced, it concerns a real rule, and only a grep
of the primary rulebook catches it. **Four of these six required primary text to
settle. None would have been caught by comparing transcript to source.**

## The six transmission errors

1. **The NHL/IIHF centre-red-line rule erased, its test reassigned to the
   trapezoid.** NHL 27.7 / IIHF 27.6 restrict a goaltender past the centre red
   line, judged on puck position — the direct counterpart of USA Hockey 407(c)
   and Hockey Canada 4.13(c), which judge it on skates. The episode instead
   pairs the amateur centre-line rule against the *professional trapezoid*
   rule, leaving a listener believing NHL/IIHF goalies face no centre-line
   restriction. ⚠️ **This is the exact error the 18 September record retracted
   as the review's own mistake and warned against repeating — now made
   independently by the generator, from a source that states it correctly.**
2. **USA Hockey's crease goal-bar given a condition it does not have.** Rule
   625(b) is a flat position bar with two carve-outs; the episode adds "and
   interfering with the goalie", making the rule sound more permissive than it
   is.
3. **CARHA Rule 49(a) relabelled.** It is Boarding and Body Contact; the
   episode calls it an interference call, inverting the book's architecture
   (interference is Rule 66, the rule that *grants* the ground). Also drops
   49(c)'s accidental-contact carve-out and broadens CARHA's scope from
   "CARHA-affiliated adult leagues" to "adult rec hockey in Canada".
4. **Hockey Canada's silence converted into a prohibition** — twice, with a
   whole segment built on it: "you can't even brace for an oncoming skater."
   The source says only that Hockey Canada writes no equivalent permission.
5. **USA Hockey 607(c)'s tiers garbled** — the two are minor+misconduct or
   major+game misconduct, not "a major penalty or a misconduct". The
   accidental-contact carve-out at 607(d) Note 1 is dropped.
6. **A fabricated universal ejection**: "hitting a goalie outside the crease
   will get you thrown out entirely no matter where you were playing." No book
   imposes this. The source's position is that a goaltender is never "fair
   game" but *can* be legally checked outside the privileged area.

Errors 2, 4 and 6 run in the **over-cautious** direction, so a listener acting
on them plays more carefully rather than less — real mitigation, but they are
still wrong rules stated as fact.

## What the prompt tightening demonstrably fixed

- **The invented four-book faceoff-encroachment comparison that defined v2 is
  entirely gone**, replaced by a faithful rendering of the source's single
  encroachment sentence. Confirmed against NHL 76.6.
- No fabricated safety/injury segment; no fabricated IIHF edition history.
- The open-list checking caveat, a v1 defect, is carried.
- The source's two subtlest passages — the IIHF Situation Handbook carve-outs
  and the freeze-versus-play distinction — were carried correctly and at
  length. **The failure is not comprehension.**

## What did not fix, and what that now implies

**The Brodeur trapezoid-origin story recurred — same player, same rule, same
causal claim — under the tightest constraint wording yet.** It is the literal
worked example constraint 10 was written around. That is three consecutive
generations inventing a rule's history on this one document.

⚠️ **The evidence no longer supports treating this as a wording problem.** Three
successive rewrites of the constraint, each more general and more explicit than
the last, have not suppressed it.

Also still present: an invented speed figure ("25 or 30 miles per hour"), an
invented rationale for the USA Hockey/Hockey Canada skate-contact offside rule,
the England→"British"/"UK" scope broadening with the source's operative "ask
your league" instruction absent entirely, and the cardinal-rule failure — a low
zone collapse presented as the system, with the source's "a coaching choice
rather than a law… find out which system your team plays" nowhere in the
episode.

## The finding to carry forward

**Not "tighten constraint 10 again."** The next round's review needs to be a
**rulebook pass, not a source-comparison pass** — that is the only method that
would have found six of this episode's ten major defects. This raises the
standing review cost per episode permanently, and it should be priced in before
any decision to scale generation.

## What this record could not establish

Whether the episode's *emphasis* is proportionate — the Brodeur segment is the
longest single passage in the episode and the trapezoid's actual British status
is among the shortest, and no grep sees that. Whether a listener retains
"highly ambiguous" sixty seconds later when told there is "a permission slip to
go for a walk into the deep corners" — an audio-sequencing question needing
someone who has listened rather than read. And whether the six misstatements
share a single upstream cause; they were found one at a time and no pattern
among them was sought.
