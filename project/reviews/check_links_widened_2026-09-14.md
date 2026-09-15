# `check_links.py` widened — and the masking it relied on had never worked

14 September 2026. A gate auditing a two-file `project/` diff reported that the standard
`check_links.py --quiet` run **passed without opening either staged file**, because the default root
was `content/`. Fixing that exposed a second, larger defect in the same tool.

---

## ⚠️ The finding: `mask_inline_code` was inert for every code span not starting at column 0

The function exists so that a link **quoted as an example** inside backticks is not checked as a real
link. It computed the backtick run length as:

```python
tick = len(line) - len(line[i:].lstrip("`"))
```

**That adds the column index to the run length.** A single backtick at column 2 was read as a
**triple**; the closing ``` ``` ``` was never found; and the function then **bailed and returned the
whole rest of the line unmasked**.

| | |
|---|---|
| Worked correctly for | a code span starting at column 0 |
| Which in this corpus is | almost never |

**Six of the thirteen broken `project/` links were this** — `` `[text](url)` ``, `` `See [Doc](path).` ``,
`` `[Name](other_doc.md)` ``, `` `[](…)` `` — all correctly written syntax examples, all reported as
dead targets.

⚠️ **The failure ran in the other direction too, and that half is worse: a REAL link sitting after a
code span on the same line was checked by accident rather than by design.** Nothing distinguished
those two cases in the output.

⚠️ **`content/` stayed clean throughout**, which is why this survived. The tool has been the gate on
every pull request for the life of the repository.

---

## What widening the default found immediately

**`README.md` — the repository's front page — carried two dead links.**
`content/foundation/rink_map_and_glossary.md` was split into `rink_map.md` and
`language_and_glossary.md` in commit `fd9e903`, and the front page was never updated. **No checker
had ever opened `README.md`.**

Fixing the links meant editing the Foundation table, which turned out to be wrong in a second way:
**README listed 35 of 39 documents and one that does not exist.** The table is now rebuilt in the
order `site/src/data/structure.json` holds — which README itself already named as the owner of the
reading order — and links **39 of 39**.

Also repaired: a `project/` link written `../hockey-iq/…` where the document sits two levels down; an
anchor that had lost an invisible character (below); and a quoted markdown fragment containing a
literal `(url)` placeholder, wrapped in backticks so it renders as the code it always was.

---

## The three changes to the tool

1. **Default roots are now `content/`, `project/`, `docs/` and the markdown at the repository root**
   — **run `python3 scripts/check_links.py` with no arguments; it prints the figures and it is their
   owner.** ⚠️ **This line carried "150 files and 4,339 links" and was wrong in the commit that
   contains it**, because the default counts every tracked markdown tree and this commit adds three
   review records to `project/reviews/`. **A figure that its own commit falsifies is the shape this
   repository documents more than any other.** For scale: it was **39 files** before the change. `*.local.md` is skipped, because the pattern
   is gitignored and a scratch note must not be able to fail a gate. **Positional invocation is
   unchanged**, so `check_links.py content` behaves exactly as the old default did.
2. **`mask_inline_code` fixed** to count the run from `i` rather than from the start of the line.
3. ⚠️ **A link whose target is a DIRECTORY now fails only under `content/`.** That is the only tree
   rendering to routed site pages, where a directory has no route and the reader gets a 404.
   Everywhere else the document is read in the repository, where a directory link renders a listing
   and is ordinary — `review_history.md` points at `../.claude/agents/` deliberately. **The old
   unconditional rule could not express this because the tool had only ever run over one tree.**

A fourth change was forced rather than chosen: `Corpus.links()` now snapshots before iterating.
`anchors_for()` parses a link *target* on demand and inserts it into the same dict, which raised
`dictionary changed size during iteration` the instant `project/` linked out to `content/`. **It
could not fire while every target was inside the only root.**

---

## Tested in both directions

A checker that passes everything is worse than none, so the new policy was tested for **failure**,
not only for silence: a directory link inside `content/` fails with the route explanation; the same
link outside `content/` is counted and tolerated; a missing target and a missing anchor still fail
anywhere; a bad path exits 2; `--list-anchors` is untouched.

---

## What this method could not have found

- **⚠️ **Whether the links point at the right thing** — and the figure is not written here, for the reason two paragraphs above: a count of this tool's own output is falsified by any commit that adds a markdown file, including this one.** The tool proves a target exists and an anchor
  resolves. It cannot tell a correct link from a plausible one aimed at the wrong document.
- ⚠️ **Whether any link was silently checked by accident and is now silently skipped.** The masking
  bug worked in both directions, and the corpus was clean before the fix and clean after it. **A link
  that was being checked only because the masking failed, and is now correctly masked, is invisible
  to both runs.** Nobody has diffed the two link sets.
- **The 13 other broken links this did not touch** — it found and cleared them, but it took a gate
  auditing an unrelated diff to make anyone run the tool over `project/` at all. **Nothing says how
  long they had been broken.**
- **`site/` and `infra/` markdown are still unchecked**, deliberately: `site/` is a build tree with
  `node_modules/`, and the repository-root expansion is files-only for that reason. **Whether any
  `site/*.md` carries a cross-link nobody has looked.**
