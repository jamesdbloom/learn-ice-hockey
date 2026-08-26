# Round 46 — two checkers for the two things that actually cost the time

**26 August 2026.** Scope: `scripts/check_counts.py` (new), `scripts/check_rule_scope.py` (new),
`CLAUDE.md`. No `content/` change.

---

## Why these two

Across rounds 42–45 `commit-gate` blocked about twenty times. Categorised:

- **~6 were content defects** — wrong rule numbers, a missing carve-out, a false legality claim.
- **~10 were counts, scope statements and stale numbers** in `project/` records and the plan.
- **The rest were propagation stopping partway.**

So the dominant cost was not reviewing the corpus. It was **claims about the work**, each caught by
a reader one gate pass at a time. Round 45 made the case unanswerable: *every* defect it was blocked
on was in the self-report, not the hockey — an inherited enumeration, a sweep described and not
performed, a method note reported as corrected, a header reported as corrected twice.

## `check_counts.py` — derive the corpus's own size, never type it

Ground truth from `content/`: documents, sections, words, hours. Every **live** project document is
then checked. `project/reviews/` is not scanned — a record describing the corpus as it was is
correct and must stay correct, and that boundary is what lets the script be strict elsewhere.

`--update` rewrites stale figures in place. **That is the speed half**: deriving and writing beats
typing and being caught two passes later.

⚠️ **Its first two versions were the defect they were built to prevent.** Version one matched a bare
`N documents` and produced **38 findings, every one a false positive** — the facts-block scope
(26 documents), subset counts, the Key Takeaways word total. Version two produced seven, of which
**four were quotations of superseded text**: a record must be able to quote a wrong number, and
`"this said 36 documents"` is the disclosure, not the defect.

It now matches only anchored phrasings that unambiguously mean the whole corpus, never a figure
inside quotation marks, and carries **twelve self-test assertions** — the five real defects that
blocked rounds 42–45, and the seven false-positive shapes the first two versions produced.

**It paid for itself before it shipped**, finding `OPEN_ITEMS.md:17` claiming 632,107 words when the
tree that shipped it held 632,592 — the same defect the gate blocked round 44 on twice.

⚠️ **And the gate tested it better than I did.** I ran its self-test, which asserts against synthetic
lines. `commit-gate` built a scratch tree, perturbed the live figure, and confirmed the checker still
caught it **after I had rewritten the sentence around the number** — which is the case its own
docstring warns about, since an unanchored claim is invisible to it. Twice, on two different
rewrites. Testing a tool on the input it will actually see is not the same as testing its patterns.

## `check_rule_scope.py` — a worklist, deliberately not a gate

For every rule number cited in three or more **self-contained** units — a facts line, a Common
Mistakes bullet, a Key Takeaways item — it reports the distinct sets of books named alongside it.
Body prose is excluded: a paragraph names its books once and carries the scope across several
sentences, so scanning it line by line invents divergence.

Current state: **274 rule numbers · 1,300 summary-layer citations · 107 with a mixed book scope**,
ranked by spread. NHL **63.2** leads — 49 units, 25 naming the NHL only.

That is the shape rounds 42–45 found five separate times, one per round, each by a human reading:
the airborne trail skate (18 sites), body checking (7), puck over the glass (11), the KHL
trapezoid (31 lines), delayed-offside clearing (10).

**It has no `--strict` and will not get one.** A site naming one book because it discusses one book
is correct, and no rule this script could apply distinguishes that from a dropped scope. A tool that
ranked these and then offered to fix them is precisely how round 44 manufactured a divergence that
did not exist.

Two design choices taken directly from this session's failures. A unit saying *"two books of the
four"* is treated as **full scope** — it has told the reader what it is about, and counting it as a
two-book site would manufacture divergence, which is round 44's worst defect in tool form. And a
line citing one rule three times is **one** site, not three.

---

## What these cannot do

- **`check_counts` only knows four quantities.** The eight-versus-nine Sources gap, the 29-versus-28
  KHL sites, *"five of the eleven"*, *"the ten below"* — none is a corpus size. They are counts of a
  set defined by a sentence, and a script cannot derive the set without being told what the sentence
  means. **Those still need a reader, and they were most of round 45's blocks.**
- **`check_rule_scope` cannot see a rule nobody cites by number.** Every sweep in this project that
  missed something missed it that way — `content-reviewer` reported *"zero documents carry the
  carve-out"* because its pattern read "out of play" and the corpus says "outside the playing area".
- **Agreement is not correctness.** Where every site names the same books and all of them are wrong,
  `check_rule_scope` is silent. **That is round 45's entire finding** — five sites agreed on a
  divergence that did not exist, and this tool would have shown a clean, consistent scope.
- **Neither checks a book.** A site naming four books may name the wrong four.
- **Neither addresses the third cost**, which is the serial review→repair→review loop. Running the
  four dimensions in parallel on frozen text is the remaining lever and it is not built here.
