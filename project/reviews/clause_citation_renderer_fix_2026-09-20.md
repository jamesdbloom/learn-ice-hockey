# The clause-dropping renderer defect, fixed

This closes Workstream 102 (originally found in an earlier round, confirmed still live earlier today
by rendering the pipeline directly). `scripts/md_to_speech.py`'s citation regexes each captured only a
single clause marker per bracket pair — `640(b)` rendered correctly, but a list or range packed into
one bracket did not: `640(b, c, d, e or f)` and `640(b–f)` matched no citation rule and fell through to
generic bracket-stripping, where brackets are silent in this renderer. The clause letters and the
joining word were not garbled — they were simply absent from the audio. The original finding named 34
sites across 11 documents; **that count was itself stale, in the direction this project's own
convention warns against.** A general-pattern recount (below) found more, at every stage this fix
passed through hands today — first re-narrowed to the five literal known shapes, then partially
recounted by a commit-gate to 43 across 12. Neither figure is written here as final: run the tool.

## The fix

Widened the first-clause capture group in all three citation rules (`rule-citation`,
`bare-clause-citation`, `usa-clause-citation`) to also match a comma/"and"/"or"/dash-joined list inside
one bracket, and added `_expand_clause_list`, which turns the captured content into fully-spoken form —
"clause b, clause c, clause d, clause e or clause f" / "clause b to clause f" — repeating "clause"
before every item, matching the convention this renderer already uses for the separate-bracket form.
A single-token bracket takes exactly the code path it always did.

## Verification

- All five known corpus patterns tested directly against the notation pipeline: correct.
- `--self-test`: 260 assertions, 2 failures — both pre-existing (confirmed via `git stash` that the
  same two failures, with identical messages, exist before this change). Zero new regressions.
- Rendered the real pipeline for all 15 documents a general-pattern regex (`\d{2,3}\((?:token)(?:\s*
  (?:,|and|or|dash)\s*(?:token))+\)`, matching exactly what the widened citation rules now accept)
  finds the shape in, and grepped every resulting `.ssml` for a raw digit immediately followed by
  `(` — the strongest signal of an unrendered citation. **Zero survivors, corpus-wide, across all 15
  documents.** This is the count and the check that actually settles the question — not the 34, and
  not the 43 a partial recount found first. **No count is written here as authoritative; the check
  above is reproducible and should be re-run rather than this line re-quoted.**

## What was found but not fixed

Two sites, both in `content/systems/offensive_zone_play.md`, use a bare `(b, c, d, e or f)` bracket
with no rule number attached — an elliptical back-reference to a number stated earlier in the same
sentence. This is a structurally different problem: a stateless per-match regex cannot safely infer
which earlier number a bare bracket refers back to without risking a wrong attribution in a denser
sentence. Not fixed here. The likely correct remedy is a content edit restating the number explicitly,
since the source sentence already names it a few words earlier — logged as a new, narrow open item.

## What this record could not have found

No listening test was performed on the actual synthesized audio (Polly or equivalent) — verification
was against the shipped SSML markup and the pipeline's own self-test, not against rendered sound. The
corpus-wide count covers only the five known corpus shapes named in the original Workstream 102
finding; a sentence structure this session did not anticipate could still exist unfound. The bare-
bracket back-reference pattern was found only by a targeted follow-up grep after the primary fix was
confirmed — no systematic sweep for other elliptical-reference shapes was run.
