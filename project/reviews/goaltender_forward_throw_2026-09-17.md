# `goaltender.md`'s forward-throw facts-block split, and a `shooting.md` batch

**Date:** 17 September 2026. Closes Workstream 2H's three named findings and
two of Workstream 3B's speech-layer worklist items.

## Workstream 2H: three findings, two already stale, one required real authoring

An agent dispatched to fix all three found two already resolved in an
earlier round (`d415f73`): the NHL 27.8 "(6')" elision and the "2014" vs
"2014-15" date both already matched their correct, verified form. The
third — USA Hockey Rule 618(c)'s Casebook definition of "forward" missing
from where the rule is cited — was real, and its `Freezing the puck` facts
block was at the corpus's 11-fact hard cap, exactly as flagged: this needed
a genuine section split, not a bare addition.

The agent split it: created a new `### Throwing the puck forward`
subsection with its own facts block, carrying the Casebook's cone
definition of "forward" (narrower than the plain-English reading) and the
closed-hand/open-hand distinction, moving the corresponding body content
there and updating a Key Takeaways cross-reference.

**A dedicated `safety-reviewer` pass then found a genuine Critical** in the
new block: one fact dropped the word "forward" from the barred act,
directly contradicting the fact immediately before it (which states
side/rear throws are expressly permitted) — read in sequence, a listener
would hear a flat contradiction. The same fact also dropped the
defending-zone condition on the hand-pass permission it granted. A second,
lower-severity finding: the body's caveat that the Casebook never states
whether the "forward" wedge extends past the end-zone dots existed only in
prose, not in any extraction layer.

Both fixed: "forward" restored to the barred-act fact: "propelling it
**forward** to a teammate"; the defending-zone condition added to the
hand-pass carve-out; the wedge's-far-edge caveat folded into the wedge
definition fact. A follow-up `safety-reviewer` pass confirmed both fixes
accurate against `sources/usah_casebook.txt` and `sources/usah.txt`,
confirmed the contradiction is resolved, confirmed no new contradiction
was introduced, and gave a clean go for commit.

**One Major left open, not introduced by this fix**: Common Mistakes and
Key Takeaways are silent on the USA Hockey-specific wedge/hand-pass
nuance entirely (not wrong, just absent) — flagged for a future pass in
`OPEN_ITEMS.md`.

## Workstream 3B: two speech-layer worklist items closed clean, one Major found and fixed

Three chunk-boundary/facts-truncation worklist items were dispatched in
parallel. Two closed as "correct as it stands, here is why" — both
reviewers actually ran the real TTS chunker (`md_to_speech.transform_document`)
rather than guessing at boundaries:

- `breakouts.md`'s "told only that half has been told the rule wrong"
  sentence is a general caution about incomplete rule communication in the
  world, not a self-referential claim about this corpus's own (continuous,
  single-file) audio — the worklist's premise didn't match what the
  sentence actually says. All five clauses of the underlying Hockey Canada
  Interpretation re-verified verbatim against `sources/hc_layout.txt`.
- `playing_without_the_puck.md`'s flagged boundary sits between two
  sentences that aren't actually a prohibition-and-qualifier pair — one is
  a universal safety instruction (never duck into board contact,
  correctly unhedged), the other a genuinely league-dependent question
  that already carries its own scope inline. Nothing to merge.

The third, broadened from three specific flagged facts (whose stale
indices didn't match anything in the current files) into a full read of
every `Rule:` fact in `puck_handling.md` and `shooting.md` (76 facts
total), found two real Major defects in `shooting.md`:

1. Two facts stated NHL/IIHF Rule 69.3 (crease contact voids a goal) as
   an unqualified absolute, when Rule 69.7's rebound/loose-puck exception
   — verified against `sources/nhl_rules.txt` and `sources/iihf_rules.txt`,
   including the NHL rule's own internal cross-reference, *"(refer to Rule
   69.7 for an exception)"* — lives only in the adjacent fact. Fixed both
   to signal the exception exists and point to it.
2. A shootout-procedure fact stated the NHL's no-repeat-shooters rule with
   no scope flag, when the same document's own body says British/IHUK
   rules allow repeats. Fixed to name the book and flag the divergence
   inline.

A `rules-verifier` pass confirmed all three fixes and their two adjacent
"payoff" facts accurate against primary text, with one non-blocking
tightening: "British and other rule sets" was pared to "British rule
sets" since no second book on disk was found to support the broader claim
(IIHF and USA Hockey's own shootout procedures both mirror the NHL's
no-repeat structure).

## Gates

`check_links.py` (exit 0), `check_facts.py` (838 blocks, 5,624 facts, all
conform), `check_absolutes.py` (39 documents + 408 diagram units, clean)
— run after every fix, across `goaltender.md` and `shooting.md`.

## What this round could not have found

Neither `breakouts.md` nor `playing_without_the_puck.md`'s closures were
verified via an actual rendered audio listen — both reviewers inferred
prosody from the chunker's text output and the `BREAK_PARAGRAPH` constant,
not a synthesized recording. The facts-truncation sweep covered `Rule:`
facts only in two documents, by design (the highest-risk fact type); the
same defect shape may exist in `Never:`/`Convention:`/`Key:` facts, or in
other documents, and was not swept. No corpus-wide search was run for the
same "incidental or otherwise" unqualified-absolute pattern that
`shooting.md` had, in case another document repeats it. The Common
Mistakes/Key Takeaways silence on `goaltender.md`'s USA Hockey forward-throw
nuance remains open, tracked separately.
