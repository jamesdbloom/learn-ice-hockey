# The `goaltender.md` trapezoid CARHA gap, closed — and its propagation chain

**Date:** 17 September 2026. Closes Workstream 2E's deliberately-deferred
item: `goaltender.md`'s trapezoid section treated the trapezoid/centre-red-line
rules as a four-book question, silently omitting CARHA.

## What was added, verified against `sources/carha.txt` directly

- **CARHA has no trapezoid** — zero hits for "trapezoid," "restricted area,"
  "designated area," or "privileged area" anywhere in its rulebook, same
  shape as USA Hockey and Hockey Canada.
- **CARHA Rule 58(b)** restricts freezing behind the goal line (body
  entirely outside the crease) — structurally simpler than USA Hockey's
  614(c) (no four-trigger list, no "privileged area" concept), correctly
  NOT merged with it.
- **CARHA Rule 37(e)** — *"If a goalkeeper intentionally participates in
  the play in any manner beyond the centre red line, the goalie shall be
  assessed a Minor penalty"* — a fifth book agreeing with the corpus's
  existing "all four books carry it in the same operative words" claim,
  with no skate-position test of its own (unlike USA Hockey's and Hockey
  Canada's).

`goaltender.md`'s main trapezoid facts block (at the corpus's 11-fact hard
cap) was deliberately left untouched — this was a prose-only fix,
extending the trapezoid intro, the freeze-restriction paragraph, the
centre-red-line paragraph, the closing instruction, and the Sources
section.

## The propagation chain the review passes actually did

A `rules-verifier` pass confirmed the fix accurate, then found — per this
project's "check propagation, not just the point of correction" rule —
that the identical stale "four books" claim survived in `goaltender.md`'s
own Common Mistakes and Key Takeaways layers, and in `defender.md`
(a sibling document discussing the same rule).

Fixed in both:

- **`goaltender.md`**: Common Mistakes and Key Takeaway 7, both updated
  to "all five" with CARHA's citation added.
- **`defender.md`**: five separate locations, found across two more
  review passes as each fix surfaced the next stale instance in the same
  section — a facts-block line, a body-prose paragraph, another
  body-prose paragraph, a second facts-block line, and finally Key
  Takeaway 6 itself, which had asserted "all four books" two sentences
  before naming CARHA as "a third book" doing the identical thing in the
  same paragraph.

This is a direct demonstration of why this project's non-negotiable
process requires checking propagation as a distinct step rather than
trusting that the point of correction is the only place a stale claim
lives — three consecutive review passes each found one more instance the
previous pass's fix hadn't reached, all in two files, all for one rule.

## Also fixed in the same round: a real over-scoped-permission finding

A parallel corpus-wide census (Workstream 2D's long-deferred item, run to
completion for the first time — 166 non-banner hits read in full context
across 32 documents) found one genuine defect: `equipment.md`'s prominent
Key focus callout stated Britain's neck-guard penalty ("no warning before
an immediate 10-minute misconduct") as universal, when the same
document's own Key Takeaways correctly carves out the Elite League
(understood to play the unamended IIHF book, which warns first). Fixed
to match the pattern two sibling passages in the same document already
used correctly. 165 of 166 hits were confirmed correct — this corpus is,
per the census, "unusually careful about jurisdiction/age/league
scoping."

## Also closed in this round

- `defender.md`'s intent-word tension (Workstream 2I) — a facts-block
  line asserted a single uniform word ("intentionally") across all four
  books when USA Hockey actually uses "deliberately." Reworded to state
  the requirement generically rather than a specific word, avoiding
  contradiction with the document's own detailed treatment.
- Workstream 2K's bracket-convention decision — resolved as moot; the
  document is now consistent by construction (see the `bcb_quote_drift`
  review record).
- `check_quote_drift.py`'s docstring — added a bullet documenting the
  cross-book invented-drift failure mode found twice today.

## Gates

`check_links.py` (exit 0), `check_facts.py` (837 blocks, 5,622 facts, all
conform), `check_absolutes.py` (39 documents + 408 diagram units, clean)
— run after every fix in this round, across `goaltender.md`,
`defender.md`, and `equipment.md`.

## What this round could not have found

The over-scoped-permissions census used five fixed search patterns plus
a supplementary sweep for offside/line-change/penalty-duration claims —
a defect phrased with different vocabulary ("always," "universally," "no
matter where") would be invisible to it. No census checked whether a
"universal" claim in one document is contradicted by a narrower scope
stated only in a *different* document — each hit was checked against its
own document only. The CARHA propagation fixes were checked exhaustively
within `goaltender.md` and `defender.md` specifically; no sweep was run
for the same stale "four books" phrasing in any other document that
might discuss this rule. No document in this round was rendered through
`md_to_speech` or the site build.
