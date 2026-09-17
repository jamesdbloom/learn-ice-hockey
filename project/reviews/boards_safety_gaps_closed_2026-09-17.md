# Two boards-safety gaps closed, per the safety-reviewer's own judgement call

**Date:** 17 September 2026. Follow-on to
[`matrix_followup_fixes_2026-09-17.md`](matrix_followup_fixes_2026-09-17.md),
which deferred these two items pending a safety-reviewer decision.

## The judgement call

Asked whether `getting_started.md`'s boards-safety gap (no angle-evasion
technique, no explicit shoulder-point prohibition) needed filling or whether
its existing forward pointer sufficed, and whether `defending_the_rush.md`
needed its own boards-safety content given it recommends the exact tactic
("forcing dump-ins") that creates a loose-puck-race-at-the-boards scenario:
**fill both, narrowly.** For `getting_started.md`: add the two missing
instructions to all three layers, reusing already-verified wording, angle
evasion stated first per the source documents' own Case 1/Case 2 ordering —
do not import the full technique treatment. For `defending_the_rush.md`: one
pointer sentence at the point the hazard is created, not a technique
restatement.

## What was added

**`getting_started.md`** — Section 7, Common Mistakes, and Key Takeaway 10
all now state angle-evasion first ("go in on an angle rather than straight
at the wall") ahead of the brace posture, and an explicit "not the point of
your shoulder" prohibition, reusing wording already verified in
`core_principles.md` §7 and `body_contact_and_battles.md` §6. Key Takeaway
10 also gained the forward link to `body_contact_and_battles.md#6-receiving-a-hit-safely`
that the other two layers already carried. Separately, a Common Mistakes
bullet was added pointing to the off-puck/scanning material, closing the
summary-layer gap flagged in the prior round's content review.

**`defending_the_rush.md`** — one sentence added where the document
recommends forcing dump-ins, naming the retrieval hazard it creates and
pointing to `body_contact_and_battles.md#6`.

## Review

**Safety review: no Critical, no Major.** All content verified word-for-word
against its source documents; nothing dropped or garbled in a way that
would make an instruction read as complete while missing an element. Both
edits confirmed to read safely as standalone spoken sentences. Two Minors,
both fixed:

1. The new scanning bullet in `getting_started.md`'s Common Mistakes had
   been inserted between two safety-critical bullets (boards, neck guard),
   splitting a five-bullet run of contact/equipment safety content that the
   reviewer's own brief had asked it to watch for. Moved to the end of the
   list, after the checking-category bullet, restoring the contiguous run.
2. `defending_the_rush.md`'s facts block (voiced alone in audio, with no
   surrounding prose) still stated only the bare "force dump-ins" tactic
   with no reference to the retrieval hazard the new prose sentence two
   lines below it now names. Added a `Key:` fact stating the hazard and
   pointing to Body Contact and Battles, matching the corpus's
   plain-text-name convention for cross-referencing inside a facts block.

## Gates

`check_links.py` (exit 0), `check_facts.py` (837 blocks, 5,622 facts — one
new fact added, all conform), `check_absolutes.py` (39 documents + 408
diagram units, clean).

## What this round could not have found

No TTS rendering of the final state was run — the safety reviewer's
"reads safely aloud" assessment was an eye-read of sentence structure, not a
played-back check. No corpus-wide sweep was run for other documents that
might benefit from the same angle-first/shoulder-prohibition ordering; this
was scoped to the two files the prior judgement call named. The safety
reviewer explicitly did not re-verify the underlying USA Hockey source
quotations from scratch, relying instead on this corpus's own already-cited
wording in `core_principles.md` and `body_contact_and_battles.md`.
