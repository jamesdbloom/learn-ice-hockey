# The summary-layer census was counting bibliographies — 16 September 2026

## The defect

`scripts/check_readability_census.py` bounds a section at the next `##` or `###`
heading. **The Sources trailer in this corpus has no heading.** So every
document's trailer is attributed to whichever section precedes it — which, in 37
of 39 documents, is `## Key Takeaways`.

`summary_share()` and `section_words()` both do this. Two documents differ only
because their trailer follows `## Notes on verification` instead.

Found by the agent holding `content/foundation/rules_primer.md`, which was
dispatched with a brief telling it that its Key Takeaways was 15,588 words and
"the largest single thing you could cut". It measured 5,156 and reported the
brief as inflated 3×. **The brief was mine, and the figure came from this
record's own baseline, which took it from the tool.**

## Measured

One row per document, computed by excluding everything from the trailer's
`*Sources` line onward. Commands are in this record's scratchpad derivation and
the identity is reproducible from the definition above.

| | Reported by the census | Actual |
|---|---:|---:|
| Corpus summary layer | **29.5%** | **12.2%** — ⚠️ the SHARE is the finding and is stable; the absolute totals drift with every content edit, so run `check_readability_census.py summary` rather than quoting them |
| `rules_primer.md` Key Takeaways | 15,588 | **5,077** |
| `body_contact_and_battles.md` Key Takeaways | 14,289 | **3,704** |
| `goaltender.md` Key Takeaways | 13,009 | **2,921** |

**195,639 words across all 39 documents are Sources trailers counted as a
summary section** — 17.8% of the corpus's prose words. The largest single
misattribution is `body_contact_and_battles.md` at 10,585 words; the smallest is
`reading_ice_hockey_diagrams.md` at 638. **Every document is affected. There is
no unaffected control.**

## What this invalidates

⚠️ **The rank order inverts.** `body_contact_and_battles.md` appears 2nd in the
census's *20 heaviest sections* table and is actually 3rd. More sharply: the
corrected per-document share puts `reading_ice_hockey_diagrams.md` (18.6%) and
`defending_the_rush.md` (17.2%) at the top, where the reported table put
`switching_positions.md` (39.4%) and `language_and_glossary.md` (37.9%). **The
document the plan names as the extreme high end is not the extreme high end.**

⚠️ **`READABILITY_AND_DUAL_AUDIENCE.md`'s heading *"Roughly THREE-TENTHS of the
corpus is in TWO sections"* is wrong by a factor of 2.4.** It is roughly
one-eighth. The section beneath it reasons at length from the false figure, and
its stated spread — `switching_positions.md` 39.4% against
`neutral_zone_systems.md` 7.2% — compares two numbers that are differently wrong,
because the two documents' trailers are different sizes.

⚠️ **And the warning attached to that figure was pointed at the wrong object.**
The plan says, correctly in principle: *"a words-per-section table is the most
dangerous measurement in this plan. It ranks by size the exact sections whose job
is redundancy, and cutting the biggest is indistinguishable, by any tool here,
from deleting the corpus's propagation."* **The hazard is real. But the thing
being ranked was, in majority, a bibliography** — so an agent dispatched at "the
biggest Key Takeaways in the corpus" was being sent at a Sources trailer that is
never voiced and sits behind a closed `<details>` on the site.

⚠️ **This record's own baseline
([`baseline_2026-09-16_workstream_0.md`](baseline_2026-09-16_workstream_0.md))
carries the wrong figures** in its summary-layer and heaviest-sections rows, and
they are now flagged there rather than silently corrected — the wrong figure is
part of the evidence.

## What it does NOT invalidate

- **The `words` totals.** Trailer words *are* words in the file; the per-document
  and corpus totals are right.
- **The citation-apparatus census.** It uses a different base and does not bound
  by section.
- **The marker and opener censuses.** Unrelated code paths.
- **The reconciliation identity.** `reconcile` compares two whole-document bases
  and is untouched by section attribution.
- **The direction of the finding about `rules_primer.md`.** It is still the
  corpus's largest Key Takeaways at 5,077, and still the largest document, and
  still the highest citation share. **The ranking survived; the magnitude did
  not** — which is exactly the failure mode `CLAUDE.md` describes when a figure
  is copied out of its owner, except that here the owner itself was wrong.

## ⚠️ FIXED — 16 September 2026, between waves

`TRAILER = re.compile(r"^\*Sources\b")` now closes the last section in
`wordcounts()` and detaches it in `summary_share()`. **The trailer is reported as
its own line — `(Sources trailer)` — rather than dropped**, so it stays visible
instead of vanishing into a different kind of silence.

**Corpus summary layer: 29.5% → 12.2%.** ⚠️ **Confirmed two ways** — the fixed
tool and an independent hand-computation written before the fix both give 12.2%.

**And the rank order corrected in the heaviest-sections table**: `rules_primer.md`
Key Takeaways is no longer in the top twenty at all, and five of the top ten
entries now read `(Sources trailer)` — which is the truth the old table was
hiding.

### ⚠️⚠️ THE FIX BROKE `reconcile`, AND `reconcile` CAUGHT IT

The first version put `continue` on the trailer line **before counting its
words**. ⚠️ **The `*Sources — retrieved …*` line is BODY TEXT.** Skipping it cost
**exactly 376 words corpus-wide** — 39 documents, one line each — and
`reconcile` went from `YES` to **`NO -- INVESTIGATE`**, with the difference at
10,722 against a heading count of 10,346.

**That is the reconciliation identity doing precisely the job it was written
for**, on the very commit that changed the function it guards. The regression was
found by running the check, not by reading the diff, and a backup copy of the
pre-fix tool established within one command that the breakage was **mine and not
pre-existing**.

⚠️ **The lesson for the next tool change here: take a copy of the tool first and
run the OLD one when a check fails.** Otherwise "was it already broken?" costs an
investigation instead of a comparison.

## The fix as originally deferred, and why

⚠️ **`scripts/` is shared state and five agents were live when this was found.**
`CLAUDE.md`: *"Change a tool between waves, not during one."* In round 59 a
coordinator added a classifier to `check_disclosures.py` mid-round and an agent
reported that it *"changed its own classification output between my first and
last run, with no edit of mine — no finding in any report should rest on that
tool's output today."*

**So the tool is unchanged and this record is the correction.** The fix is queued
as a plan row: bound a section at the trailer as well as at the next heading, and
report the trailer as its own line so it stays visible rather than vanishing.
It must land **between** waves, and every figure taken from the tool before it
lands must be re-derived after.

## What this method could not have found

This measured the tool against a definition I chose — everything from the
`*Sources` line onward — and that definition is itself unverified against the
renderer. If `md_to_speech` or the site bounds the trailer differently, the
corrected figures move again. I did not check either. I also did not audit the
census's other subcommands for the same class of bug beyond reasoning about which
code paths bound by section; `openers`, `markers` and `partition` were not tested
against a trailer-bearing document, only inspected. And the whole finding rests
on the trailer having no heading in *this* corpus — a document that grew a
`## Sources` heading would silently leave the affected set with nothing
announcing it.
