# The ungated stick-instruction critical, D15's fourth attempt, and the first commit of 20 September

This record consolidates Workstreams 118–126 of `project/plans/OPEN_ITEMS.md`, the only range in that
file not already covered by an existing review record. Everything from Workstream 92 through 117 is
covered by `boards_limb_and_red_flags_2026-09-19.md`, `shoulder_limb_propagation_2026-09-19.md` and
`quote_drift_and_closing_reviews_2026-09-19.md`; this file picks up where those left off and closes
with the day's first commit.

## 1. A commit-gate BLOCK, closed with a written record rather than more review

A `commit-gate` run found every mechanical check and rules claim sound (C1–C7, C9, C11 pass,
independently re-derived — a CARHA 39(b) Note 1 quotation spot-checked verbatim against primary text)
but failed C8: the only review record on disk was stale, explicitly stating a file was "not in this
diff at all" that by then was — `forechecking_systems.md`, plus `center.md`, `goaltender.md`,
`playing_without_the_puck.md` and further repairs to three more files, none named anywhere in
`project/reviews/`. `quote_drift_and_closing_reviews_2026-09-19.md` was written to close this,
covering Workstreams 92–117 in full. D15 remained the sole open condition afterward.

## 2. Two stale-claim investigations, both closed without edits

**`center.md:392`'s "blocking" verb** was checked against a claim that it should be changed to
"moving into" — confirmed correct as written: USA Hockey publishes no numbered stand-your-ground
rule, and Rule 625's own Note uses "block" as its own term ("a player uses their body ('pick' or
'block') to impede the progress of an opponent"). Changing it would have imported a distinction the
book doesn't draw. No repair needed.

**`special_teams.md` Key Takeaway 11** was checked against a claim it was missing the road-home
concept and had a "four vs five books" inconsistency — both premises were stale, already fixed by an
earlier commit (`61bb9cd`) that predated the brief.

A second pair of stale-claim threads (from Workstream 17) closed the same way: `skating.md`'s Key
Takeaway 1 already carries the delegation a plan row claimed it lacked (the comparison was inverted —
`core_principles.md`'s equivalent is the one with no inline pointer); and the "shock absorber" limb
claimed missing from `body_contact_and_battles.md` was landed three days earlier by commit `d0b884e`.
One genuine minor gap survived that check: USA Hockey's "both hands on the stick if possible"
instruction for boards contact is absent from the document's own extended, unsourced discussion of why
a locked arm breaks on impact — scoped, sketched, and left for a later round since the substance a
reader needs was already taught correctly without it.

## 3. A confirmed CRITICAL: an ungated stick instruction that strips at a chunk boundary

`body_contact_and_battles.md` — the corpus's owner document for board-contact technique — carried a
"Three pieces of rink-side advice" blockquote whose second item correctly self-gates to Case 3
("appears only as the fallback for a player who is already facing the wall") while its third item
carried no gate anywhere in its own sentence: *"USA Hockey teaches the opposite: get your stick and
gloves up and spread out on the glass, and it names failing to do so as the common error."*

Confirmed by rendering, not by reading Markdown: `md_to_speech.py` placed this sentence in its own
chunk (088), with the neighbouring myth's Case-3 gate sitting in the previous chunk (087) and not
carrying over. A listener hearing chunk 088 alone gets zero occurrences of "Case," "facing the wall,"
"cannot turn," or any other scope marker — a false general rule stated with confidence.

Source-verified directly: Case 2 (skating parallel to the boards) has no stick instruction anywhere in
USA Hockey's source (`ibc.txt:686-704`) — forearm and hip against the boards, low centre of gravity,
feet apart, knees bent, with a raised centre of gravity as that case's own named Common Error. A
separate USA Hockey drill for the same scenario (`ibc.txt:1539-1549`) instructs the opposite: "the
stick down." A reader taking the ungated blockquote as general advice would raise both hands to the
glass, abandon the forearm-and-hip presentation, and convert a manageable Case-2 contact into worse
geometry. The facts block, Common Mistakes and Key Takeaways versions of the same instruction all
already carried their own gate correctly — this was one ungated sentence in one container, the exact
shape (a blockquote spanning a chunk boundary) that had hidden a scope defect once before, in
`skating.md`.

**Fixed** by welding the gate into the instruction clause itself rather than trailing it as a separate
sentence, so no future chunk split can separate scope from instruction again: *"USA Hockey teaches the
opposite only for the one case where you are already facing the boards and cannot turn: get your stick
and gloves up and spread out on the glass, and it names failing to do so as the common error for that
case. Skating parallel to the boards is a different case, and USA Hockey's teaching points for it
carry no stick instruction at all — forearm and hip against the boards, feet apart, knees bent — with
standing too upright, not the shoulder, as the Common Error it names there."* Re-rendered and
confirmed the gate and instruction now share one `<p>` in chunk 088, with no boundary between them.
Propagation re-checked in all three other layers — none needed touching. A related tension in USA
Hockey's own source (a separate generic passage says "both hands on the stick if possible" with no
case scope) was deliberately left undisclosed, since the document cites neither passage and doesn't
currently contradict itself.

**Independently confirmed sound** by a fresh reviewer per this project's own rule against a repair
reviewing its own writing: text match exact, the Case-2 source claim re-verified independently
(finding the repair's phrasing even closer to source than it had claimed — USA Hockey's own Common
Error opens "Standing too upright…"), rendering re-confirmed with no break inserted, all four layers
re-checked, all five mechanical checkers re-run clean. One pre-existing, non-blocking observation: USA
Hockey's source actually lists two Common Errors for this case and the document refers to "a" Common
Error, singular — under-counts one, doesn't invert the gate, not actioned. `body_contact_and_battles.md`
had four independent passes by the end of this cycle: safety-reviewer repair → independent
safety-reviewer review → independent content-reviewer review → this critical found and fixed →
independently confirmed sound.

## 4. A completeness gap re-verified current, correctly left unfixed

An older finding (Workstream 14) — that `body_contact_and_battles.md`'s Rule 69.4 road-home limb
reaches body prose but never Key Takeaways item 9, and that `zone_entries.md` doesn't carry the limb
at all — was re-checked against the file's state after the day's other edits and confirmed to survive
unchanged. Reasoned explicitly as a completeness gap rather than a safety hazard: *"Nobody is
physically endangered by not knowing this… a reader who only hears Key Takeaways is not at risk of
injury or of executing an unsafe technique — they are at risk of being surprised by an interference
call in a specific, relatively uncommon situation."* Correctly held rather than treated as an exception
to the hold-new-edits-until-the-commit-lands discipline. Facts-layer headroom was checked in advance
and found tight (every candidate `Rule:` line within 6 characters of its cap) — flagged as a
constraint for whoever executed the fix. This gap, and its `zone_entries.md` half, were closed the
next day by Workstreams 127–131 (see `de_counting_and_road_home_2026-09-20.md`).

## 5. D15 finally satisfied, on the fourth attempt

The user fixed the Chrome extension's categorisation-service outage directly. The coordinator
confirmed it working in its own tab before dispatching the full review, a lesson from an earlier
attempt whose fix in one session hadn't transferred to another. A full four-cell matrix (mobile/desktop
× light/dark), real screenshots throughout, ran on two representative documents, with the theme toggle
actually clicked and its persistence checked across reload and navigation; five more pages spot-checked
in both themes. A rebuild caught something real — one file had an unstaged edit made after the last
build — and the reviewer rebuilt fresh and confirmed the newer edit was present before testing began.
The exact safety-critical fix from §3 rendered as a visually distinct, correctly styled panel in both
themes. Console and network were clean, including confirming no third-party requests fire locally.

One Major finding, flagged as non-blocking: `/404` without a trailing slash serves Astro's raw
framework error page locally instead of the branded 404, a preview-server/build-config interaction
(`trailingSlash: 'always'` intercepting before the custom fallback) rather than a content defect — the
custom page serves correctly with a trailing slash. This sits on the production-CloudFront boundary
this project's own CLAUDE.md names as untestable locally, and remains open at the end of this session
(see `project/plans/OPEN_ITEMS.md`'s open-items list). A tool fault was also found and documented for
future browser-review attempts: the browser automation's `resize_window` only reliably applies
immediately after tab creation, before any navigation.

D15 was ruled satisfied on the evidence gathered, explicitly not by label but by reading the reasoning
behind it.

## 6. Committed: `a9856df`

The final gate re-derived every one of C1–C11 plus D15 against the fully staged diff, independent of
any prior report. Verdict: CLEAR. 41 files staged by explicit name (no `git add -A`), all six
mechanical gates re-run clean on the staged tree immediately before commit, `git diff --name-only`
empty both before and after.

Committed as `a9856df0b7b60898dad9fb70f044b44984d8a33c` — "Stop the boards owner teaching an ungated
stick instruction, and correct two rule-scope understatements" — 7,974 insertions, 246 deletions. No
Claude/Anthropic/AI/co-author reference anywhere in the message, verified by grep before committing.
Not pushed at the time — `main` deploys to production on push, and that needed the user's own
explicit go-ahead separately from the review verdict. (It was later pushed, along with the second
commit `835850b`, confirmed via `git log origin/main` during the third commit's review cycle the same
day.)

This closes Workstreams 92 through 126 in full, across four review records: the three dated
2026-09-19 named above, and this one.

## What this record could not have found

Everything each individual workstream's own "what this method could not have found" already disclosed
stands — in particular: no corpus-wide sweep was run for other unqualified case-scoped instructions
inside blockquotes elsewhere in this document or the other 38; the fix's resilience against a future
chunk split was not stress-tested against edits made after it landed; whether the `/404` behaviour is
also live in production (as opposed to only the local preview server) was never confirmed, since
nobody with access to the deployed CloudFront distribution checked it this session.
