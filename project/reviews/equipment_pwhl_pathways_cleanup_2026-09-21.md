# Three small closures: an equipment claim correction, a source added, a pathways.json cleanup

## Scope

```
content/off-the-ice/equipment.md
sources/README.md (plus three new, gitignored files under sources/: pwhl_rules.pdf, .txt, _layout.txt)
site/src/data/pathways.json
```

## 1. `equipment.md`'s programme-kit-newness claim — a grammar fix that became a claim fix

A prior commit-gate BLOCKed what was meant to be a one-word grammar repair to a broken Key Takeaways
sentence ("Kit a programme gives a child to keep is new, and is not what this is about"). The repair
changed the underlying claim — from asserting programme-issued kit *is* new, to declining to say — and
that put it in direct contradiction with a Common Mistakes sentence 400 words earlier in the same
document, which still flatly asserted the kit *is* new.

Investigating further found the Common Mistakes assertion was itself the real defect: an unsourced
overclaim. `content/getting-started/getting_started.md` §8 ("Keep two kinds of programme apart") had
already, deliberately, established the more careful position: *"No source consulted here says
programme kit is new, and The First Shift publishes nothing about keeping it either."* The only
support `equipment.md` offered for its "is new" claim — "NHL/NHLPA Learn to Play and The First Shift
both supply head-to-toe equipment" — demonstrates the kit is *issued*, not that it is *new*; a
programme could issue reconditioned gear and this sentence would still be true.

**Fix**: all four instances of the same overclaim in `equipment.md` were corrected (two more than
originally flagged — a body blockquote near line 526, and a "Kitting out a beginner on a budget"
sentence near line 546, in addition to the Common Mistakes and Key Takeaways sites), all now stating
the newness question as open and unresolved, consistent with `getting_started.md`, and pointing the
reader to ask the programme if it matters to them. The structural point every version was making —
that the used-helmet warning is about *unlogged impact history* (borrowed, hand-me-down, shared
loaner-pool gear), a different question from whether take-home kit happens to be new — is preserved
unchanged at all four sites.

**Independent review**: a fresh `safety-reviewer` pass (not the author of the fix) read all four
corrected locations in full context, cross-checked `getting_started.md` §8 directly, and confirmed:
- No overclaim remains, and no overcorrection into unwarranted suspicion in the other direction (none
  of the four sites implies programme kit is *likely* used or untrustworthy — all four stay neutral:
  "ask the programme," "unresolved question").
- The primary used-helmet/concussion safety warning is fully intact and undiluted at every site —
  none of the four edits touches, shortens, or relocates it; they only touch the separate, secondary
  clause about take-home kit newness.
- A corpus-wide grep for "Learn to Play" and "First Shift" found the claim exists only in `equipment.md`
  and `getting_started.md` — no other document repeats the old overclaim uncorrected.
- Mechanical checks (`check_links.py`, `check_facts.py`, `check_absolutes.py`) clean.

## 2. PWHL Official Rule Book added to `sources/README.md`'s inventory

`content/technique/body_contact_and_battles.md` quotes the PWHL Official Rule Book directly (Rule
52.1, on angling/body-checking) and names its URL in the document's own Sources trailer, but the
source was never on disk and had no entry in `sources/README.md` — a `rules-verifier` pass earlier
this session had to fetch the PDF live to verify the existing quote.

Fetched and saved: `sources/pwhl_rules.pdf` (19,772,272 bytes, 188pp; a first `curl` attempt silently
truncated at 10.7MB and had to be retried with `--retry-all-errors`), plus both a plain `pdftotext`
extraction and a `-layout` extraction (kept separately per this project's established convention for
PDFs with multi-column content — the front-matter officials roster is set in three newspaper columns
and the plain extraction reads down each column in sequence rather than across the row; `-layout`
reconstructs it correctly). Rule 52.1 itself extracts identically under both methods.

New `sources/README.md` row added, in the file's established format, disclosing: the truncated-download
incident, the column-interleaving divergence (the same species of fault already documented for
`hc.txt`/`nhl_rules.txt`), and that only Rule 52.1 has been read against this file so far — nothing
else in the 188 pages has been checked.

**Verification**: the corpus's existing quote in `body_contact_and_battles.md` (the "In the PWHL, a
form of Bodychecking is permitted..." passage plus the "opposite-directional force" clause) matches
`sources/pwhl_rules.txt`/`pwhl_rules_layout.txt` character-for-character (alphanumerics), confirming
the earlier live-fetch verification. This is a consistency check against a now-saved copy, not a fresh
rules verification — the underlying rule was already verified this session.

## 3. `pathways.json`'s `docs`-array-order inconsistency

The file's own `$comment` states `docs` array order "never" carries meaning, but three pathways'
`evidence` fields (`first-game`, `new-position`, `watch-and-learn`) described `docs[0]` as if its
position mattered ("opens with," "finishes on," "first, then"). Independently re-confirmed by reading
`site/src/pages/index.astro` directly: `docs` is never read anywhere in the render path (only `title`,
`blurb`, `effort`, `entry`, `status` are) — the `$comment`'s claim is genuinely true.

**Fix**: reworded all three evidence fields to describe document content, not array position. The
underlying facts each sentence carried were accurate and sourced from `getting_started.md`'s own route
text — they were simply misapplied to describe a field (`docs` order) that doesn't carry that meaning
in this file. `entry`, `docs`, and `status` fields themselves were not touched, only `evidence` text.
JSON validates; `check_links.py` clean.

## Dimension coverage (C3)

**D1–D3** — OUT OF SCOPE for items 2 and 3 (no new rules claim; item 2 is a consistency check against
an already-verified quote, item 3 touches only documentation prose in an unrendered field). **D6** —
CHECKED for item 1: no coaching choice presented as settled fact; the fix explicitly states an
unresolved question as unresolved rather than picking a side. **D9** — CHECKED for item 1: all four
sites in `equipment.md` now agree with each other and with `getting_started.md`; propagation confirmed
complete via corpus-wide grep. **D11** — CHECKED via a dedicated, independent `safety-reviewer` pass on
item 1 (the safety-relevant item); items 2 and 3 have no safety-relevant claim. **D14** — CHECKED via
`check_links.py`, clean throughout. Everything else — OUT OF SCOPE, no facts-block or diagram file
touched.

## What this record could not have found

The safety-reviewer did not re-verify the underlying primary-source citations already standing in
`equipment.md` (USA Hockey Rule 304, Hockey Canada Rule 3.6, etc.) — those were treated as already
verified by earlier rounds this session and were out of scope for this specific claim-correction
review. Nobody has read the PWHL rulebook beyond Rule 52.1 and the officials-roster front matter —
the README says so honestly. The `pathways.json` fix was verified against the render code as it exists
today; if `docs` is ever wired into a future search or related-links feature (which the file's own
`$comment` anticipates as a possibility), the array's order would need re-examining at that point, not
before.
