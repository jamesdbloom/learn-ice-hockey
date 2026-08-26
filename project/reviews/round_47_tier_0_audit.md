# Round 47 — half of Tier 0 was already done

**26 August 2026.** Scope: `project/plans/OPEN_ITEMS.md` Tier 0. No `content/` change.

Tier 0 is headed *"These outrank everything below."* Asked to work on it, I re-derived each of its
six items against the corpus before starting — this session's own lesson, applied to the plan
rather than to a claim inside it.

**Three of six were complete.** One of them was the item the tier called **"the single largest
unexploited gain in the project"**, and it had been done since **round 28 — seventeen rounds
earlier**, in a commit whose own record says so.

---

## The three

**Substance at the top.** Claimed: *"the corpus is currently the wrong way round. Prototype two
Overviews and look at them before committing to 36."*
Derived: **37 of 37 documents open with an `## Overview`.** Median 415 words, shortest 313 — real
summaries, not headings. Shipped in `c93b13f`, *"Put the summary at the top of every document, and
fix what that exposed."*

**Retrieval practice.** Claimed: *"`Check yourself` appears in **1 document of 36**. It stopped
because the diagram work started before it finished… Named here as the single largest unexploited
gain in the project."*
Derived: **36 of 37 documents, 278 numbered questions.** `round_28_summary_layers.md` states it
plainly in its own opening: *"`## Check yourself` retrieval layer was built out from a
one-document pilot to 36"*, and records a dedicated review pass over *"All 36 blocks, 277
questions, read in full."* The only document without one is `reading_ice_hockey_diagrams.md`,
which arrived on 31 July — **after** the rollout. That single document is all that remains.

**Entry paths.** Claimed: *"There is no entry path… Two or three named paths — your first game;
you have been put on defence and have never played there; you want to follow a game on television."*
Derived: `getting_started.md` carries **"Four routes in, when you have an hour rather than a
season"** — Route 1 *Your first game is this week*, Route 2 *You have been put on a position you
have never played*, Route 3 *You want to follow a game on television*, Route 4 *You play in
Britain*. **All three requested, plus one.**

## The one that is open, and the measurement that was hiding it

**The Key Takeaways.** The tier said **48,673 words, 9%**. Derived: **60,033 words, 9.5%** — low by
**23%**, the same shape as this tier's anchor figure being low by 18% until round 43.

**But the count was never the defect.** The style guide asks for *"Numbered, 5–10 items. Each one
standalone and memorable — this feeds the podcast's 'if you only remember N things' segment."* The
corpus **complies on count**: 33 of 37 sit at ten or fewer. It fails on **length** —
`body_contact_and_battles` averages **400 words per numbered takeaway**, `equipment` 384,
`rules_primer` 310.

**A 400-word takeaway is not a takeaway.** Stating the item as a word total let it read as a
volume problem, which is not actionable; stating it as words-per-item makes the defect and its fix
obvious. Same underlying observation, seventeen rounds of no progress between the two framings.

## Why this matters more than the three items

The direct answer to *"how do we apply the plan faster"* is not only tooling. **Work was queued
behind work already finished**, in the tier that outranks everything else, steered by numbers
nobody re-derived.

`check_counts.py`, committed an hour before this audit, would not have caught any of it — and says
so in its own docstring. *"N documents carry X"* is a count of a set defined by a sentence, and a
script cannot derive that set without being told what the sentence means. **These three needed a
reader, and the reader was seventeen rounds late.**

⚠️ The cheap defence is not a checker. It is that **an item claiming a corpus-wide absence should
carry the command that proves it** — `grep -rlc "^## Check yourself" content/ | wc -l` is four
seconds and would have retired the tier's headline item at any point since round 28.

---

## What this method could not have found

- **Whether the three completed items were done *well*.** I verified that 37 Overviews exist and
  are substantial, that 278 questions exist, and that four routes exist naming the three the plan
  asked for. **I did not read them.** An Overview can be 415 words and still bury the substance; a
  retrieval question can exist and be unanswerable from its own document — round 43 and 44 both
  named `## Check yourself` as a layer nobody has read, and it is still unread.
- **Whether the routes reach the right sections.** The item asked for paths *"each naming four or
  five documents **and which sections of them**."* I confirmed the routes exist; I did not check
  that their pointers resolve or that the sections they name are the right ones.
- **The remaining two items are unaudited.** *"Gaps the entry paths exposed"* and *"known open
  defects at corpus level"* were not re-derived here — the first is now actionable because the
  routes it depends on exist, and the second is a list of specific defects rather than a claim
  about the corpus.
- **Nothing here re-read Tier 0b through Tier 6.** If the top tier was a third stale, the tiers
  below it have had less scrutiny, not more.
