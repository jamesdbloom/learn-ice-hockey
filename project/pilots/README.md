# Pilots

Proposals produced to test a convention before committing the corpus to it.
**Nothing here has been applied to `content/`.**

| File | Tests | Outcome |
|---|---|---|
| [`keyfacts_pilot_defender.md`](keyfacts_pilot_defender.md) | §12 key-fact blocks on a positional document | 143 facts across 27 headings, 24 blocks recommended |
| [`keyfacts_pilot_breakouts.md`](keyfacts_pilot_breakouts.md) | §12 key-fact blocks on a systems document with named options and counters | 77 facts across 14 sections, 10 blocks recommended |

Both were run against
[§12 of the build specification](../site_build_specification.md), and the
findings are summarised there under **12.7 What the pilot found** — read that
first. These files are the working detail: every proposed fact, the source line
it was extracted from, and a per-document *Problems found* section listing what
could not be extracted without inventing.

**Why they are kept.** They are the input to Phase 4c. Regenerating them costs
real tokens, and the *Problems found* sections are the more valuable half —
they record which sections resist the format and why, including the facts each
agent was tempted to write and rejected as unsupported.

**Treat them as drafts, not decisions.** They were produced against the first
draft of §12, before the level moved from `##` to `###` and before
`Convention:`, `Read:` and `Countered by:` were added to the label set. Blocks
proposed at `##` level for documents that have subsections will need
re-cutting.
