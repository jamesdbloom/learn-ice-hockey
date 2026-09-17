# Four fixes the completed principle matrix required, all reviewed and applied

**Date:** 17 September 2026. Follow-on to
[`principle_matrix_complete_2026-09-17.md`](principle_matrix_complete_2026-09-17.md).
Four disjoint authoring tasks, each independently reviewed before commit per
the standing rule that a repair cannot self-certify.

## 1. Principle 4's goaltender exception propagated to its evidence-owning documents

`scanning_and_anticipation.md` (Principle 4's own "Deeper" reading, holding
the Berg et al. 2025 evidence) and `time_and_space.md` both restated the
unqualified "look before it arrives is free" claim in multiple layers
without the goaltender exception `core_principles.md` now carries. Fixed in
both files' Key focus, Overview, `facts` blocks and Key Takeaways — the
authoring agent found two more instances than its brief named, via the
project's layer-test convention.

**Review found:** no Critical. One Major — the same round's separate naming
fix (below) had been scoped to one file when the same defect existed in two
more. One Minor — `time_and_space.md`'s Key focus sentence, run through the
actual TTS chunker (`md_to_speech.py`), produced an isolated fragment with
no antecedent ("Not if you are the goaltender —"). Both fixed: rewritten as
"This reverses for the goaltender: tracking a live shot, they buy nothing by
looking away from it." One further Minor, informational only — the
authoring agent's self-correction of the brief's `goaltender.md` line number
was itself wrong (the quotation is at line 27, as the original brief said,
not line 67); no content was affected since no document cites the line
number, corrected here for the record.

## 2. A naming drift ("Edge Ice Academy" vs "Cutting Edge Ice Academy") fixed across all four documents that carry it

Found first in `playing_without_the_puck.md` (fixed), then found by the
reviewer to also exist, unfixed, in `shooting.md:586` and
`zone_entries.md:889,897` — the same coaching-source citation, same
shortened name. All four now read "Cutting Edge Ice Academy," matching the
name in the source's own footer and `time_and_space.md`'s pre-existing,
correct sourcing note. `skating.md` was already correct and untouched.

## 3. `getting_started.md` given the content its own beginner pointers promise

Principle 3, 4 and 7 pointers in `core_principles.md` send a first-time
reader to `getting_started.md`, which contained none of the three
principles' content. Added: a combined P3/P4 passage (Section 9, honest
pointer to `playing_without_the_puck.md`/`scanning_and_anticipation.md`,
no restated figures) and a P7 boards-safety passage propagated to Section 7,
Common Mistakes and Key Takeaways.

**Safety review found one Critical**: the Key Takeaways layer dropped "head
up and chin off your chest" and the non-checking-scope clause that the
other two layers correctly carried — the exact "correction reached the body
and stopped" shape this project's history returns to most. **Fixed**,
extending Key Takeaways item 10 to carry both. One Major, not fixed here on
the reviewer's own recommendation given the existing forward pointer: the
document still doesn't teach "go in on an angle" (the safest of the three
boards-contact cases) or "not on the point of your shoulder" — tracked in
`OPEN_ITEMS.md` for a future pass rather than expanded now. One Minor
(missing ⚠️ markers relative to this document's own convention for
comparable-stakes items) — fixed. A second, independent content review
found no Critical/Major and two further Minors — a pronoun-antecedent
ambiguity ("and its limits") and an inconsistent verb-to-noun compression
("never a duck" against the document's own "never duck" elsewhere) — both
fixed. That review also flagged, as a gap rather than a defect, that the new
P3/P4 content reaches no summary layer at all (unlike P7's full
propagation) — recorded for a future pass, not fixed here, since it is new
content that was never asked to reach the summary layer rather than a
correction that failed to.

## 4. `defending_the_rush.md` cited as Principle 6's clearest full-situation example

Added to `core_principles.md` §6's existing denial-direction citation
(alongside `forechecking_systems.md` and `special_teams.md`): the 2-on-1
"take away the pass, give up the shot" mechanism, quoted verbatim from
`defending_the_rush.md:26` and preserving the source's own hedge (a
coaching choice with a named alternative). Also added `core_principles.md`
and `body_contact_and_battles.md` to `defending_the_rush.md`'s Related
header, the latter justified by four existing body citations.

**Review found no Critical or Major.** Two informational notes, not fixed:
the paragraph's three citations now carry uneven amounts of hedging (not
introduced by this edit, but now more visible with a third citation
present); and the `core_principles.md` link is a reciprocal backlink rather
than body-justified the way `body_contact_and_battles.md`'s is — a real
distinction, not a defect, recorded for precision.

## Gates

`check_links.py` (exit 0), `check_facts.py` (5,621 facts, all conform),
`check_absolutes.py` (39 documents + 408 diagram units, clean),
`check_secrets.py` (342 tracked files, clean) — run after every fix above,
across all eight touched files.

## What this round could not have found

None of the four fixes were rendered through the full site build or a
browser. No rule number was touched or re-verified in this round. The
`getting_started.md` Major (missing angle-evasion and shoulder-point
content) and the P3/P4 summary-layer gap were deliberately left for a
future pass rather than expanded under review pressure — both are recorded
in `OPEN_ITEMS.md`. No reviewer in this round re-verified the Berg et al. or
Iaboni et al. source papers themselves; all four checks were against this
corpus's own existing, previously-verified citations.
