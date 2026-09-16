# Worklist regeneration — 16 September 2026

Every worklist in `scripts/` was regenerated at `734d8b0` on a clean tree
immediately before the wave was dispatched, as `OPEN_ITEMS.md` Workstream 0
requires. This record is the **owner** of the figures below. Quote the command,
not the number — a figure copied out of its owner goes stale silently.

⚠️ **None of these is a gate and none should gain a `--strict`.** Every one of
them reports candidates. Only reading decides which candidates are defects, and
in this repository sweeping a worklist pattern has repeatedly "fixed" lines that
were correct.

⚠️ **Eight agents went live on disjoint files immediately after this run.** Six
hold content documents, one holds `site/src/diagrams/`. **Every figure below is
a picture of the tree as it was BEFORE those agents wrote.** Re-run before
acting on any hit in a held file.

## Ran clean

| Tool | Result |
|---|---|
| `check_plan_rows.py` | 0 open rows with quoted assertions; nothing quoted has gone stale |
| `check_leaders.py` | 628 leader lines across 186 diagrams — **628 clean**, zero hits |

⚠️ `check_leaders.py` estimates glyph widths rather than measuring them from the
font, so a clean run is weaker evidence than it looks. It is not proof that no
leader overlaps a label.

## `check_zones.py` — the largest finding in this run

204 diagrams · 54 labelled zones · 37 distinct labels. One invisible polygon
skipped (`fill:none` **and** `stroke:none` — a label anchor, nothing drawn).

**3 labels drawn as more than one region; 6 label pairs drawing overlapping ice
under different names.**

The one with the shape of the defect this tool was written for:

**`'the middle'` is drawn as four regions**, the largest 1.72× the smallest and
their centres up to 68 ft apart — 2,200 sq ft in `the-risk-map`, 1,936 in
`nz-back-off-at-the-line`, 1,276 in `rush-gap-and-angle`, 1,276 in
`show-one-shoulder-open-the-other`. The original high-slot defect was a band
drawn at 3.14× its owner's definition under a caption that described the correct
one, and it passed every gate.

⚠️ **The likeliest innocent explanation is that "the middle" is relative** — the
middle of the neutral zone is not the middle of the ice. That has not been
established either way by this run.

Also open: `'the house'` drawn twice 141 ft apart at identical area (almost
certainly a legitimate mirror); `'the house'` vs `'the middle'` sharing 83% of
the same ice; `'the slot'` vs `'your slot'` at 100% across five diagram pairs;
`'below the dots'` vs `'their end'` at 100%; and ⚠️ **`'old lane'` and
`'the shot lane'` both computing to 0.0 sq ft** — a degenerate polygon that
draws nothing or draws a line, which is a mechanism question rather than a
naming one.

⚠️ **This tool compares diagrams to each other, so a region drawn consistently
wrong everywhere is invisible to it.** Only `content/foundation/rink_map.md`
settles what a region is, and this run did not check the agreeing polygons
against it.

**Dispatched** to one agent owning `site/src/diagrams/` exclusively — exclusively
because diagram ids are borrowed across up to ten modules, so no smaller
partition of that directory is disjoint.

## `check_tables.py --near`

**3 dropped, 46 read aloud, 9 within one edit of being dropped.** Limits: 3
columns, 14 rows, 200 chars per cell. A table over any limit is dropped from the
audio entirely, silently, while every gate passes.

The tightest, re-derived today:

| Headroom | Site |
|---|---|
| **66 chars, 0 rows** | `foundation/rules_primer.md:815` — **the tightest in the corpus** |
| 5 chars, 11 rows | `hockey-iq/playing_without_the_puck.md:758` |
| 13 chars, 8 rows | `foundation/rink_map.md:493` |
| 15 chars, 9 rows | `hockey-iq/risk_management.md:98` |
| 15 chars, 4 rows | `hockey-iq/risk_management.md:470` |
| 16 chars, 4 rows | `technique/body_contact_and_battles.md:1338` |
| 21 chars, 10 rows | `getting-started/getting_started.md:150` |
| 43 chars, 2 rows | `technique/body_contact_and_battles.md:62` |
| 77 chars, 2 rows | `getting-started/getting_started.md:552` |

⚠️⚠️ **ALL NINE ARE LISTED ABOVE BECAUSE THE FIRST DRAFT OF THIS RECORD LISTED
FIVE.** I read the `tail` of the tool's output and reported what was missing from
my own truncated view as missing from the corpus. **That single incomplete read
corrupted TWO briefs in this wave** — one was told `rules_primer.md:809` had
vanished (it is at `:815`, at zero rows, the tightest table in the corpus), and
one was told `getting_started.md:139` and `:541` had vanished (they are at `:150`
and `:552`). ⚠️ **Both agents re-derived and reported me, which is the "refute the
brief" instruction doing exactly the job it exists for.** ⚠️ **An absence found by
an incomplete read is not an absence** — the same shape as a zero grep on an
image-only PDF, which this repository has now recorded five times.

`CLAUDE.md`'s `body_contact_and_battles.md:55` **is** genuinely stale (now `:60`,
two rows spare), and so was its repair, which named `rules_primer.md:753`. Both
have been replaced with a pointer to the tool.

⚠️ **A dropped table is often correct** — a wide comparison table cannot be read
aloud and this corpus deliberately voices the substance inline instead. The tool
cannot tell you whether it does.

## `check_chunk_tails.py`

**301 facts values end a chunk. 47 GRANT something and are worth reading; 33 are
`Never:` prohibitions**, which stand alone safely and are not listed. Three were
printed as the worst cases, all three a `Rule.` value truncated mid-clause:

- `technique/puck_handling.md` chunk 028 of 61 — the free-hand fend-off rule,
  cut inside USA Hockey's Casebook clause.
- `technique/shooting.md` chunk 018 of 95 — the one-timer follow-through
  carve-out, cut inside the list of books that do not carry it.
- `technique/shooting.md` chunk 055 of 95 — the push-in relief, cut inside the
  quoted minor.

⚠️ **Ending a chunk is not itself a defect** — something ends every chunk. It is
a defect only where the value depends on what follows. ⚠️ **And the lever cuts
both ways: lengthening a block to fix one hit moves the boundary and can make a
different value chunk-terminal.**

Body prose was not scanned; `--prose` was not run this time. That is an absence
of measurement, not a clean result.

## `check_chunk_splits.py`

Four boundaries where a chunk ends on one thought and the next opens on
something a listener would not connect to it. The two worth reading first:

- `hockey-iq/playing_without_the_puck.md` 1→2 — ends *"Never turn your back to
  the wall, and never duck."*, opens on whether the reader may use their body at
  all. **A safety prohibition and its applicability condition, split across a
  break.**
- `systems/breakouts.md` 73→74 — ends on *"That clause is half of a five-clause
  Interpretation, though, and a goaltender told only that half has been told the
  rule wrong"*, and the other half opens the next chunk. **The document says in
  words that half the rule misleads, and the renderer then delivers exactly that
  half alone.**

Also `hockey-iq/risk_management.md` 41→42 and
`technique/body_contact_and_battles.md` 127→128.

## `check_pointers.py`

**5 spoken sentences point at a layer a listener cannot reach**, of 39 documents
scanned; 13 further table references suppressed because their document's tables
all read as prose.

⚠️ **4 of the 5 are in MIXED documents, where the tool cannot tell whether the
table the sentence means was voiced or dropped.** One such hit was checked by
hand previously and the table **was** voiced in full — the sentence was still
wrong, but about its own content, not about being a pointer. **Read the rendered
SSML, not the label.**

The one unambiguous hit: `hockey-iq/playing_without_the_puck.md` — *"Both
computations are set out in full in the written Notes on verification section"*,
pointing at a `## Notes on verification` section the renderer drops.

⚠️ **A pointer aimed at the SITE is legitimate**, because this corpus renders to
a web page too.

## `check_disclosures.py`

**633 disclosure lines across 38 of the 39 documents; 114 carry a scoping
phrase.**

| Cut | Figures |
|---|---|
| by layer | body 536, **facts 70**, unvoiced 27 |
| by kind | rulebook 419, scoped 30, unchecked 184 |
| by pattern | no-X-exists 296, no-provision 210, was-not-found 90, labelled-unverified 62, nobody-does-X 46, appears-nowhere 43, nowhere-in-book 31, not-in-source 6, no-book-does-X 6, returned-404-or-zero 3 |

⚠️ **The 70 in the ` ```facts ` layer are the worst case**: voiced alone, with a
300 ms break either side, to a listener with no surrounding context.

⚠️ **The `unchecked` count of 184 is an upper bound, not a worklist.** A reviewer
who read all 58 facts-layer lines in an earlier run classified ~15 as genuinely
unverifiable where the tool reported 31; the gap is disclosures that state the
search they ran in wording no pattern anticipated. There is no fixed vocabulary
for scoping a claim, which is the whole reason the class is hard.

⚠️ **The `scoped` flag is a hint, not a verdict.** A scoped disclosure can still
be false and an unscoped one can be true.

⚠️ **Every false disclosure found to date ran the same direction — it made the
corpus look LESS supported than it is.** That is the opposite of the failure
every other convention in this repository guards against, and exactly why no
reviewer stopped on them. **Correcting a false disclosure is not stripping it;
it is replacing an absence claim with the source.** Never remove a true one.

**This is a standing backlog, not a wave.** 633 lines cannot be tested in one
round and nothing here proposes to.

## `check_caption_echo.py`

Hits where a caption repeats the prose block directly above it. The top five all
sit at 10.3–10.9% overlap: `defender-three-depths`, `forecheck-angling`,
`goalie-playing-the-angle`, `dz-walk-down-zone`, `shooting-breakaway-approach`.

⚠️ **Three kinds of overlap are CORRECT and the tool cannot tell them apart from
the fourth:** a region definition must match its owner word for word, a
disclosure voiced in two layers is propagation, and a repeated safety limb is
repeated on purpose. **Only narrative restatement is cuttable.**

## `check_caption_negations.py`

12 hits across 5 diagrams — `never-both-defencemen-to-the-puck`,
`pinch-centre-below-the-goal-line`, `pinch-centre-high`, `the-risk-map`,
`icing-the-race-and-the-dot`. ⚠️ **Most hits are correct sentences and this
pattern must not be swept.** Read each and ask what the *inverted* reading says.

## `check_diagram_quotes.py`

1,791 quoted spans of ≥24 characters checked in diagram-source comments; **1,036
not found in any content document.** Eighteen were printed. Several are plainly
benign — a comment describing what the picture does or does not draw
(`"the mirror is not drawn here, but it works the same way"`,
`"are not drawn here either"`). Others quote reasoning that may have moved out of
the content document underneath the comment, which is the case worth reading:
`rules_primer.mjs:91`, `shooting.mjs:517`, `rule69_clauses.mjs:95`,
`risk_management.mjs:587`.

**Not triaged this run.** That is an absence of measurement.

## Not run

`check_external_links.py` (network) and `check_readability_census.py --prose`
were not run. `check_absolutes.py`, `check_geometry.py`, `check_secrets.py`,
`check_counts.py`, `check_links.py` and `check_facts.py` are gates and are
recorded in
[`baseline_2026-09-16_workstream_0.md`](baseline_2026-09-16_workstream_0.md),
not here.

## What this method could not have found

This run executed tools; it read the surrounding prose for none of the hits
except where quoted above, so it reports candidates and cannot say how many are
defects. It verified no hockey, rules, medical or citation claim. It did not
build the site or the diagrams, so `check_zones` and `check_caption_echo` read
build products rather than sources, and a source edited after the last build is
invisible to both. It did not open a browser or play any audio. It did not test
a single one of the 633 disclosures. And because eight agents went live
immediately afterwards, **every figure here is already historical** — the tree it
measured is gone.
