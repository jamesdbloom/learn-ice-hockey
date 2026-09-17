# `body_contact_and_battles.md`'s quote-drift count was stale — re-triaged and fixed

**Date:** 17 September 2026. Follow-on to
[`carha_census_2026-09-17.md`](carha_census_2026-09-17.md). Closes the
flag raised earlier today that this document's recorded "34→32, both
false positives" state (Workstream 2G, Update 4) no longer matched
`check_quote_drift.py`'s current output of 34 flagged.

## What happened

A fresh, full triage of all 34 flagged instances — reading each in
context and checking the named source file directly, rather than
trusting the prior round's count — found the opposite of what was
recorded: **29 of 34 were genuine, undisclosed drift**, not false
positives. The most likely explanation, checked against git history: two
later commits (`5460eed`, `09a7d40`) edited prose around existing
quotations and added new promoted claims (the Key focus rollout) without
applying the corpus's `[x]` disclosed-bracket convention to the
repositioned quotes — new drift, not the same false-positive pattern
recurring.

## Fixed

28 of the 29 were simple disclosure fixes — a silently-lowered
sentence-initial capital, given its `[x]` bracket, with the underlying
quotation itself already accurate and unchanged. Verified character-by-
character against nine different source files (`iihf_rules.txt`,
`usah_casebook.txt`, `hc.txt`, `ibc.txt`, `huh.txt`, `usah.txt`,
`nhl_rules.txt`, `iihf_rules_2026-27.txt`, `eiha_inhouse.txt`) before
each fix.

**One judgement call, made correctly by the fixing agent and confirmed
by an independent source-verifier pass**: the tool's remaining flag at
the "leave the players' or penalty bench" quotation is a wrong-source-
file false positive — the document's own text attributes it to USA
Hockey's Casebook Rule 629, Situation 1, which reads that exact sentence
verbatim with no continuation; the tool matched it against NHL Rule 70.1
instead, which shares the opening clause but continues "...or for the
purpose of starting an altercation." Extending the quote to match NHL
70.1 would have fabricated words into a Casebook citation. Correctly
left unfixed — the full NHL 70.1 wording, including the continuation,
is already quoted accurately elsewhere in the same document.

## Review found one real error in the fix itself, now corrected

The independent source-verifier pass found that one of the 28 "simple"
fixes wasn't simple: at the "hit the boards or goal posts with an arm, a
leg..." quotation, the fixing agent correctly added the disclosure
bracket but also "restored" an Oxford comma by matching against
`ibc.txt`'s wording. The document's own Sources footnote (already on
record, unchanged) states explicitly that this specific quotation is
attributed to a *different*, unarchived source — "Look Up Line," whose
own wording has no Oxford comma — and that "that is the form [this
section] quotes." Adding the comma silently swapped in another
organization's wording under an unchanged attribution. Fixed: comma
removed, bracket kept, now matching the source the citation actually
names.

## Also found, not fixed: a drift instance the tool cannot see by construction

The fixing agent noticed, while working, that the same "the
responsibility is always on the player..." phrase it was bracketing in
body prose also appears — with the identical undisclosed lowercase drift
— inside a `facts` block using plain quote marks rather than the
italicized `*"…"*` form `check_quote_drift.py`'s regex matches. The tool
cannot see this by construction. Not fixed here (outside this round's
scope); recorded in `OPEN_ITEMS.md` as a candidate for a future pass,
and as a note that this tool's blind spot for facts-block plain quotes
may recur elsewhere in the corpus.

## Gates

`check_links.py` (exit 0), `check_facts.py` (837 blocks, 5,622 facts,
all conform) — run after every fix, including the corrective one.
`check_quote_drift.py` on this file: 34 flagged → 6 (all six confirmed
false positives / correct judgement calls, independently re-verified by
a `source-verifier` pass, none touched this round).

## What this round could not have found

The source-verifier sampled 16 of the ~28 fix locations directly against
source text, not all of them — the remainder were largely repeated
phrases already confirmed elsewhere and judged lower-risk, not
individually re-derived. No other document was checked for the same
"later edit reintroduced undisclosed drift" pattern this file exhibited;
the two commits that likely caused it touched other files too. No
systematic search was run for the facts-block plain-quote blind spot
elsewhere in the corpus — only the one instance noticed incidentally in
this file is recorded.
