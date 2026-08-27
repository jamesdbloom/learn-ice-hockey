# Round 48 — the measurement was the defect, twice, in opposite directions

**27 August 2026.** Scope: `project/plans/OPEN_ITEMS.md` Tier 0, `project/reviews/round_47_tier_0_audit.md`.
No `content/` change. This round exists to correct a number this project derived, checked,
committed and **pushed**, and which was wrong.

---

## What happened

Tier 0 carried, for seventeen rounds: *"**48,673 words: 9% of the corpus is its own summary.**"*

Round 47 re-derived it as **60,033 words, 9.5%**, and recorded the old figure as 23% low.

Both are wrong. The Key Takeaways layer is **25,632 words, 4.1% of the corpus**.

**The cause.** My extraction took everything between `## Key Takeaways` and the next `## ` heading.
In **36 of 37 documents** the Sources block and the disclosure footer sit inside that span —
separated from the last takeaway by a `---` rule, not by a heading. So **34,401 words of citations,
URLs and provenance notes were counted as takeaways.** The original 48,673 was itself nearly
double the truth, by what looks like the same fault.

**How it was caught.** Not by a checker. By reading the text behind the number: `body_contact_and_battles`
appeared to have a **1,954-word takeaway 10**, which is absurd enough to force an inspection. It is
about 200 words of takeaway and 1,750 words of Sources footer.

⚠️ **A figure merely wrong rather than absurd would have shipped**, and this one did ship — the
error was live in `main` for an hour.

---

## Why this is the session's own lesson, failed

This session's record is a sequence of reviewers catching claims that were asserted rather than
derived: an eight-site enumeration that was ten, a sweep described and not performed, a header
reported as corrected twice when the edit had silently not applied. Out of it came two committed
notes:

- *"A tool reporting success is not evidence"* — `OPEN_ITEMS.md`, from round 43.
- *"Put the boundary in the same sentence as the number"* — from round 44.

And `scripts/check_counts.py`, built in round 46 specifically so corpus figures are derived rather
than typed, whose own docstring says it **cannot** see this class: *"N documents carry X" is a count
of a set defined by a sentence, and a script cannot derive the set without being told what the
sentence means.*

**Round 47 then produced a headline figure from a parser nobody had stressed**, in a record whose
own closing line reads *"an item claiming a corpus-wide absence should carry the command that
proves it."* The command was written. The command was wrong.

**The rule that would have caught it:** when a derived number is surprising, read the text it came
from before recording it. 9.5% of a 632,000-word corpus being its own summary layer *was*
surprising, and nobody looked.

---

## What survives, and it is better than what it replaced

The reframing holds and gets sharper. **The volume was never the defect.** 4.1% of a corpus being
its summary layer is reasonable, and the median document has **59 words per numbered takeaway**,
which is a takeaway.

**Four documents of thirty-seven** have Key Takeaways that are essays:

| document | words | items | words per "takeaway" |
|---|---|---|---|
| `foundation/rules_primer` | 2,494 | 10 | **249** |
| `technique/body_contact_and_battles` | 2,135 | 10 | **213** |
| `reading-diagrams/reading_ice_hockey_diagrams` | 742 | 5 | **148** |
| `systems/defending_the_rush` | 1,164 | 10 | **116** |

That is a materially different job from the one Tier 0 has described since it was written. **Not a
corpus-wide pass — four documents, one at a time.** The corrected number makes the work smaller and
the defect sharper, which is the opposite of what a correction usually does and the reason it was
worth stopping to make.

---

## What this method could not have found

- **Whether the four documents' takeaways are *wrong*, as opposed to long.** Length is measurable;
  whether a 249-word item is doing necessary work is not, and `rules_primer` is the corpus's
  densest rules document — its takeaways may be long for a reason. That is `content-reviewer`'s
  question and it has not been asked.
- **Whether the other 33 are *good*.** A 59-word takeaway can be forgettable, wrong, or a
  restatement of a body sentence nobody needed twice. This measured shape, not quality.
- **Every other number derived by span-extraction in this project.** The same `## X` … next-`##`
  pattern is how the summary-layer census in round 44 was built (85,820 words across 74 sections).
  **Re-derived here: 51,978 words, not 85,820** — inflated by 34,403 words of footer, the same
  fault to within two words of the Key Takeaways inflation, which is what a systematic parser
  fault looks like. Corrected in the plan. **No other span-derived figure in `project/` has been
  re-derived**, and the same pattern would inflate any of them.
- **The `## Check yourself` layer is still unread**, by round 43, round 44, round 47 and this one.
  Four rounds have named it and none has opened it.
