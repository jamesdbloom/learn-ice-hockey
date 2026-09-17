# Principle-to-corpus matrix — full 39/39 coverage reached

**Date:** 17 September 2026. **Status:** the seven-principle matrix now
covers all 39 corpus documents (38 matrixed directly + `core_principles.md`
itself, self-audited against both known defect shapes rather than matrixed
against itself). This closes out the coverage half of Workstream 1A;
[`principle_matrix_draft_2026-09-17.md`](principle_matrix_draft_2026-09-17.md)
and [`principle_matrix_tranche2_2026-09-17.md`](principle_matrix_tranche2_2026-09-17.md)
cover the first 25. This record covers the final tranche: 5 hockey-iq
documents, 5 technique documents, and the three stragglers
(`defending_the_rush.md`, plus a full matrix — not just a spot-check — of
both pilots, `getting_started.md` and `rules_primer.md`).

**The transfer-audit acceptance condition is now fully met**: "at least
three contexts, including a position, a system, and a
technique/Hockey-IQ document" — position, system, technique and hockey-iq
are all covered, the last two for the first time in this tranche.

**Nothing in `content/` was edited by any of these three matrix-drafting
batches** — same standing rule as every prior tranche. Two real fixes this
tranche's findings triggered are tracked and authored separately (below).

---

## Major finding 1: `getting_started.md`'s beginner pointers for three principles lead nowhere, most seriously for boards-contact safety

`core_principles.md` sends a first-time reader to `getting_started.md` for
Principles 3, 4 and 7 ("New to this: [Getting Started]..."). Direct grep and
full reading confirm `getting_started.md` contains none of the three
principles' actual content: no off-puck-states material (P3), no
scanning/looking vocabulary (P4), and no boards-contact safety posture —
parallel skates, forearm and hip, chin off chest, never turn your back,
never duck (P7). Its own first-game reading route sends a beginner to *Body
Contact and Battles §1* (a legality question, Principle 2 territory), never
to §6, where the boards-safety material actually lives.

⚠️ **This is most serious for Principle 7**, which `core_principles.md`
itself treats as the one principle with no realistic alternative and no
system that changes it, and which this pointer is explicitly labelled
*"before a first session."* A genuine beginner following this document's own
signposting before ever stepping on the ice gets no boards-contact safety
content from the page telling them where to start.

By contrast, Principle 1's pointer to `getting_started.md#10-how-to-find-out-what-applies-to-you`
uses a specific section anchor and is accurate — showing the corpus can do
this correctly when the link is scoped, and that the three broken pointers
are bare document links rather than scoped anchors.

**Not fixed here.** This needs either new content in `getting_started.md`
(on the `switching_positions.md:53` honest-pointer model, or a full
passage) or re-pointing the three links at sections that already carry the
content — a real editorial choice, not a mechanical copy. **Whichever route
is chosen, the Principle 7 half needs `safety-reviewer` sign-off**, per
standing convention for contact-injury text. Tracked as a new
Workstream 1D row.

## Major finding 2: `defending_the_rush.md` is the corpus's richest Principle-6 "denial direction" evidence, and isn't cited

`core_principles.md` §6's already-shipped denial-direction sentence cites
`forechecking_systems.md` and `special_teams.md`. `defending_the_rush.md`'s
2-on-1, 1-on-2, 3-on-2 and 3-on-1 sections build the identical mechanism —
denying the shot or the pass on purpose, never both — more extensively and
more systematically than either currently-cited document, and the document
has zero link to or from `core_principles.md` anywhere. Not a wrong
statement, a citation-completeness gap: flag for whoever next revisits
Principle 6's citations.

The same document also has **no Principle-7 content at all**, despite
being thematically the closest systems document to a defenceman racing an
opponent to a loose puck near the boards under hybrid icing — a scenario
`rules_primer.md`'s icing section already handles correctly with the same
safety material. Flagged to `safety-reviewer` for a judgement on whether
this narrow gap needs filling, not asserted as a defect on its own.

## Confirmed clean: `body_contact_and_battles.md` already bidirectionally owns Principles 2 and 7

The technique-document batch's most load-bearing check — whether the
contact-safety document is a good *candidate* for Principle 7, as several
earlier tranches assumed by cross-reference — found it is not a candidate
at all, because the link already exists in both directions:
`body_contact_and_battles.md`'s own opening states *"Two of the seven ideas
in [Core Principles] govern this page"* and names both by section anchor;
`core_principles.md` §2 and §7 both name this document's specific sections
back. Nothing to draft or fix here. Worth recording precisely because two
earlier tranches described `defender.md`/`winger.md` as "near-verbatim"
Principle 7 matches without checking which document `core_principles.md`
itself designates as the owner — verbatim wording reuse is not the same as
being cited as the owning document, and a future wave should not conflate
the two.

## Confirmed clean: no wrong-evidence-population risk found in either final batch

Both the hockey-iq and technique batches searched specifically for the
Iaboni (possession-time) and Berg (scanning) figures being restated,
merged, or silently applied to a goaltender. Neither found an instance in
their 10 combined documents beyond the propagation gap in finding 3 below,
which is a *missing qualifier*, not a *wrong population* — the figures
themselves are never misapplied.

---

## Fixed separately: Principle 4's exception hadn't propagated to its own evidence-owning document

The hockey-iq batch found that `core_principles.md`'s just-shipped Principle
4 goaltender exception (see `principle_matrix_tranche2_2026-09-17.md`) had
not reached `scanning_and_anticipation.md` — the document Principle 4 itself
names as holding "the research and the cue lists" — nor `time_and_space.md`,
both of which restate the unqualified universal claim in their own Key
focus, Overview and Key Takeaways layers, with the claim also naked in a
`facts` block in each. This is exactly the "correction reached one document
and stopped" shape this project's history returns to most often. **Fix
dispatched and in progress** as a separate authoring task, covering both
files plus an unrelated minor naming inconsistency (`playing_without_the_puck.md`
shortens "Cutting Edge Ice Academy" to "Edge Ice Academy" in one of its two
mentions) found in the same batch. Tracked as its own row; not yet
committed at the time this record was written.

---

## Minor findings, recorded for a future cleanup pass rather than fixed now

- `defending_the_rush.md`'s Related header omits `Body Contact and
  Battles.md` despite citing it repeatedly in body text.
- The rush-danger statistics `defending_the_rush.md` carries (8.15%
  per-shot goal likelihood, "almost triples," <3% of entries, 0.78 vs 0.57
  shots per entry) have no entry in the style guide's numeric-facts-owner
  table, unlike the same document's gap-control ladder. No divergent
  restatement found elsewhere — hygiene, not a live defect.
- `OPEN_ITEMS.md`'s Workstream 1D shorthand for `getting_started.md`'s
  opening section ("The principle") doesn't match the file's actual
  heading (`## Hockey is administered locally, but it sits on a national
  floor`) — reconcile next time that row is touched.
- An internal tension, independent of the corpus's prior rejection of an
  eighth principle: `defending_the_rush.md`'s own "Organising Idea"
  section states "be between the puck and your net, always, every
  attacker" unqualified, while the same document's own odd-man-rush
  section describes legitimate coached reasons a defenceman is
  deliberately not there (a pinch, an activation, a rotation). The fix
  Workstream 1G already specified for the corpus-wide version (scope to
  the defending state, name the alternative) would resolve this at
  document level too.

## What ships next

1. The hockey-iq propagation fix (in progress) — commit once its
   independent review clears.
2. `getting_started.md`'s three broken beginner pointers — a real
   authoring task, not a mechanical fix; needs `safety-reviewer` for the
   Principle 7 content.
3. Citing `defending_the_rush.md` in `core_principles.md` §6's evidence,
   and a judgement call on its Principle 7 gap.
4. The minor findings above, batched into a future hygiene pass.
5. **Not addressed by any of this**: the release's actual acceptance
   test — task-based usability testing with real human participants
   across six audience strata — remains unstarted. Full matrix coverage
   is necessary groundwork for that testing, not a substitute for it.

## What this method could not have found

Every batch in this tranche read its own assigned documents in full but
did not open the sibling documents its own documents cross-reference (the
hockey-iq batch didn't open `defending_the_rush.md`'s gap figures or
`goaltender.md`'s scanning material; the stragglers batch didn't open
`center.md`, `defender.md` or `body_contact_and_battles.md`'s full text to
verify claims `getting_started.md` makes about them). A claim consistent
within one document's own reading but wrong relative to an unread sibling
is invisible to this method by construction. No document in this tranche
was rendered through `md_to_speech`; no rule number was re-verified against
a primary rulebook PDF; no site build or diagram check was run. The
transfer-audit's document-type coverage is now complete, but that is
matrix coverage, not review clearance — every rule, safety, and numeric
claim identified as a candidate application text above still needs its
named reviewer before it becomes a live link in `content/`.
