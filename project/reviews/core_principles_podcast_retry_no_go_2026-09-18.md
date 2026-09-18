# `core_principles` podcast retry (v2) — NO-GO, 18 September 2026

**Verdict: NO-GO.** Second document in the same validation batch as
[the `rink_map` retry](rink_map_podcast_retry_no_go_2026-09-18.md), same fixed
prompt, same two-reviewer pass. **Result: worse than `rink_map`'s retry** — one
of the three literally-named constraint-9 patterns reappeared for this exact
document (the one it was named because of), not just new invention outside
the list.

## A disagreement between the two reviewers, reconciled here

`rules-verifier` flagged the transcript's EIHL Casebook mention and its "IIHF
Official Rule Book 2025/26, Version 1.1" citation as fabrications, checking
them only against `content/foundation/core_principles.md`'s own text (which
indeed says neither). `safety-reviewer`, reading the full 250-line
`prompt_constraints.md` the task brief didn't point either reviewer at
directly, found both are **explicit instructions in constraint 3** — the
generator is told in terms to name the EIHL Casebook, say it hasn't been
obtained, and to cite the working British edition as "IIHF Official Rule Book
2025/26, Version 1.1." **Both findings are retracted.** The generator is
compliant with an instruction from a legitimate source (the constraints
document is itself one of the three sources given to every notebook), not
inventing content from nothing. This is the second time in the same
validation batch a reviewer's finding needed correcting against the actual
constraints file rather than the base document alone — worth remembering for
every future podcast review brief: **check the transcript against all three
sources, not just source (1).**

## Confirmed: the named injury-response fabrication did not reappear

Both reviewers independently grepped `core_principles.md` for
concussion/spinal/injury-response content and read the full transcript.
The only injury content present — principle 7's boards-contact/spinal-injury
material — is genuinely in the source and is not misattributed or expanded
into an invented closing segment.

## Confirmed: the fabricated statistic pattern reappeared, three times, in the same episode this constraint was written to stop

`safety-reviewer` found three fresh invented numbers, none traceable to
`core_principles.md`:

- *"99% of the time, what they are actually saying is..."* — the source's
  cardinal-rule statement (principle 1) carries no percentage at all.
- *"30 miles an hour, steel on ice"* — no speed figure anywhere in the
  document.
- *"You do not need to be flying at 20 miles an hour on a breakaway"* —
  inserted as a contrast inside the single most tightly-worded, most
  safety-audited sentence in the document, which states only *"can occur at
  walking speed"* and whose owning constraint (7c) explicitly says the
  walking-speed figure "is not colour, it is the point." The direction of the
  invented contrast happens to be safety-correct (it reinforces "no speed is
  safe"), which limits real-world harm, but the number itself is fabricated,
  in the exact passage the constraints file singles out as needing the
  *least* embellishment.
- *"10 feet, 20 feet?... You are 15 feet away"* — the source states
  explicitly that no governing body issues a support-distance standard and
  that the corpus measures it by time instead. `core_principles.md` gives
  zero footage figures for puck support anywhere.

## New: a named safety prohibition dropped entirely, not merely under-detailed

The source names three boards-contact prohibitions in both body and Key
Takeaways: never turn your back, never duck (tuck the chin), and never take
contact on the point of the shoulder. The transcript announces *"the three
things you never do"* and then only ever states two — the shoulder-point
prohibition is never voiced, despite the episode's own promise to cover it.

## Disposition

- `foundation/core_principles` returned to `blocked`, failure count 2.
- Confirms the diagnosis from the `rink_map` retry record: naming specific
  fabrication instances narrows the target without closing the underlying
  behavior. This document's retry shows the failure can recur on the *exact*
  literal pattern named for it, not only drift to new, unnamed patterns.

## What this record could not establish

Whether the broadened constraint 9 (written after this transcript was
generated) would suppress these three fresh statistics — this transcript ran
under the old, narrower wording. That is untested.
