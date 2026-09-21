# `check_links.py` now verifies `pathways.json` anchors

## Scope

```
scripts/check_links.py
```

## What closed

`site/src/data/pathways.json`'s own `$comment` claimed its `entry.doc`/`entry.anchor` deep links are
"verified by `scripts/check_links.py` against the heading text in `content/`, so a reworded heading
fails the gate rather than rotting silently" — this was false. `check_links.py` only ever scanned
`content/**/*.md` and never opened `pathways.json` at all; every anchor in the file had been checked
manually, but nothing would catch a future reworded heading breaking one silently.

**Fix**: extended `check_links.py` with a new `check_pathways()` function that reads
`site/src/data/pathways.json` and, for every pathway entry with both `doc` and `anchor` fields
(regardless of `status: draft`/`reviewed` — a draft's anchor can still rot), resolves `doc` to its
`content/` file and confirms `anchor` matches a real heading slug in it. It reuses the checker's
existing `corpus.anchors_for()`/`slugify()`/`Slugger` machinery unchanged — no second slugification
implementation — and folds results into the same `Failure`/`check()` pipeline every other broken link
already fails on, so a broken pathway anchor now fails the gate exactly like a broken content link
(same exit code, same `--quiet` behaviour, no new CLI flag). `main()` passes the pathways path and
content root into `check()` unconditionally, so the check runs regardless of which `roots` a given
invocation scopes to. `{"layer": ...}`-only entries (no `doc`/`anchor`, e.g. `adult-detail`) are
correctly skipped.

## Verification

- `python3 scripts/check_links.py` and `--quiet`: clean, reporting "10 pathways.json deep links
  verified" — independently counted against the actual JSON (11 pathways total, 10 with both
  `doc`/`anchor`, 1 `layer`-only, matching exactly).
- Negative-case test on a scratch copy (never the real file): a broken anchor and a broken doc path
  were both caught, with correctly formatted failure messages naming the pathway id; the real
  `pathways.json` was confirmed untouched throughout and afterward.
- No behaviour change to any existing check: stashing just this file and re-running against HEAD
  produced identical file/link/cross-link/anchor/external/directory counts; the only delta is the
  additive pathway-anchor segment.
- `check_secrets.py` clean; `.gitignore` untouched.

`site/src/data/pathways.json`'s `$comment` claim is now genuinely true and needs no correction — the
hedge in its wording is no longer strictly necessary but removing it is a future, optional cleanup,
not required by this fix.

## Dimension coverage (C3)

Per `project/review_process.md` Part 3, this is a `scripts/`-only change touching no `content/` file:
C3–C8 and C11 (review-record depth for a content claim, rules/source/safety verification) do not
apply. **C1** — the checker itself re-verified working correctly, independently, by a commit-gate
dispatch (re-derived the count from the JSON, ran the negative-case test itself, confirmed no
regression to existing counts). **C9** — checked, clean.

## What this record could not have found

Whether `check_pathways()`'s best-effort line-number lookup (`pathway_id_line`) could mis-locate a
pathway in a pathological JSON layout (e.g. duplicate ids) — not constructed or tested, since the
current file has no duplicates. No dedicated test/self-test file exists for `check_links.py` to run
beyond the checker itself and the manual negative-case test performed here.
