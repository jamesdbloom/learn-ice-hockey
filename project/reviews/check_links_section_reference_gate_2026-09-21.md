# `check_links.py` now verifies `§N` cross-document section references

## Scope

```
scripts/check_links.py
```

## What closed

This corpus has an established house-style pattern for pointing at a numbered section of another
document without a deep anchor — `[text](doc.md), §N`. `check_links.py` already verified the
markdown-link half resolves, but had no way to check the plain-text `§N` half against the target
document's actual current section numbering. If a target document's sections were ever renumbered,
every reference could go stale silently.

**Fix**: added a new gate check that, for every `[text](doc.md), §N` reference found anywhere
`check_links.py` scans (`content/`, `project/`, `docs/`, root `.md`), resolves the link exactly like
an ordinary cross-link, then confirms the target document actually has a `## N. ...` heading. Reuses
the existing corpus/link-parsing machinery; folds into the same `Failure`/`check()` pipeline as every
other broken-link check (same exit code, same `--quiet` behaviour, no new CLI flag).

**Classified as a gate, not a worklist**: "does the target have a `## N. ...` heading" is a mechanical
yes/no fact with no legitimate ambiguous case — unlike a worklist tool such as `check_rule_scope.py`,
where a divergent hit is often correct on inspection. No `--strict` needed because there's nothing to
strict-ify; it's binary.

## The count, corrected twice before it was trusted

The original finding (from an earlier rules-verifier pass) estimated "13 uses across 4 files." A
coordinator recount before this fix found 22 across 7 files. **The actual, tested count is 30**,
found only by building the check and testing it against itself rather than trusting any grep:
- 26 in the files already known, all targeting `body_contact_and_battles.md`.
- +1 in `README.md`, targeting `project/site_build_specification.md` §5 — outside `content/`,
  which is why a `content/`-only grep never found it.
- +3 found only by deliberately cross-checking the new regex's hit count against a looser multiline
  grep: one line-wrapped instance in `content/technique/puck_handling.md` (the link ends one physical
  line, `§6` starts the next), and two in `project/reviews/round_81_the_flattened_parallel_2026-09-16.md`.
  Handling the line-wrapped case required real logic (peeking at the next physical line, bounded so it
  doesn't cross a paragraph break), not just a wider regex.
- 4 near-miss grep hits were checked and correctly rejected: two table-cell coincidences in
  `project/pilots/README.md` (a `§12` starting a markdown-table cell, not a section reference) and one
  code-span example in a review record (the exact pattern quoted verbatim inside backticks, correctly
  not a live reference).

This is exactly the kind of count this corpus's own history warns goes stale the moment it's quoted
rather than reproduced — logged here with the method, not as a number to copy forward blind.

## Verification

- Full corpus: `30 §N section references verified`, 0 failures. All other counts (4621 links, 10
  pathway anchors, etc.) unchanged from a `git stash` baseline run of the pre-change file — confirming
  no regression to any existing check.
- `--quiet`, `content`-only, `project`-only, `docs`-only, and `--list-anchors` all still work.
- Runtime ~1.3s for the full corpus.
- **Negative-case test**, on a scratch copy only, never a real content file: renamed a real section
  heading in a scratch copy, added a scratch citer file pointing at the old number. The gate correctly
  failed with a message naming the citing file:line, the target document, and the missing section
  number, plus a list of sections that DO exist — matching the style of the tool's other failure
  messages.
- Two real bugs were caught and fixed by the implementing agent against itself before reporting
  done: an off-by-one in the line-wrap lookahead, and a dead-code branch from calling `.start()` on an
  anchored regex match (always 0) — both caught because the multiline instances weren't appearing, or
  reported the wrong line number, in test output, not by a second reviewer.

## Dimension coverage (C3)

Per `project/review_process.md` Part 3, this is a `scripts/`-only change touching no `content/` file:
C3–C8 and C11 do not apply. **C1** — the checker's own correctness independently re-verifiable by
running it, re-running the negative-case test, and diffing against a stashed baseline; a commit-gate
dispatch does this before staging. **C9** — to be checked by that same gate.

## What this record could not have found

Whether a pathological case (a document with duplicate `## N.` headings, or a `§N` reference to a
document that itself has no numbered sections at all rather than a missing specific number) produces
a sensible failure message — only the single renumbered-heading case was tested. No dedicated
test/self-test file exists for `check_links.py` beyond running it against the real corpus and one
constructed negative case.
