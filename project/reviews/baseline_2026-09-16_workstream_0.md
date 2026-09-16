# Workstream 0 baseline — 16 September 2026

Derived fresh at this commit. Every figure below was produced by the command in
its own row, in this session. No figure is copied from the archive, from
`READABILITY_AND_DUAL_AUDIENCE.md`, or from `CLAUDE.md`. Historical figures in
those files are context and were not used.

## Repository state

| Metric | Command | Value |
|---|---|---|
| HEAD | `git rev-parse HEAD` | `734d8b0008406477da142c2374af6f4f2a66e29a` |
| Working tree | `git status --short` | empty — clean |
| Index vs tree, `content/` | `git diff --name-only content/` | empty — index matches tree |
| Branch tracking | `git status -sb` | `main...origin/main`, 0 ahead |

The working tree, the index and `HEAD` are the same revision. Nothing is
part-staged, so the trap `CLAUDE.md` describes — a commit passing every
mechanical gate while shipping a staged state nobody verified — is not live at
the moment of this baseline.

## Tool inventory

`ls scripts/*.py` returns 23 files. Every one is named in `CLAUDE.md`'s
repository-layout block, and `CLAUDE.md` names no script that is absent. The
inventory has not drifted since `check_caption_echo.py` was added on 15
September.

## Corpus size

| Metric | Command | Value |
|---|---|---|
| Documents | `find content -name '*.md' \| wc -l` | 39 |
| Directories | `ls content/` | 8 (`foundation`, `getting-started`, `hockey-iq`, `off-the-ice`, `positions`, `reading-diagrams`, `systems`, `technique`) |
| `core_principles.md` | `ls content/foundation/core_principles.md` | present, 6,335 prose words |
| Facts blocks | `python3 scripts/check_facts.py` | 834 blocks · 5,602 facts across 26 in-scope documents |
| Prose words | `check_readability_census.py words` | 1,097,372 (`##`/`###` lines not counted) |
| Words, counts base | `python3 scripts/check_counts.py` | 1,262,521 — a different base; see reconciliation below |
| Diagram modules | `ls site/src/diagrams/*.mjs \| wc -l` | 33 |
| Diagram manifest entries | `site/src/data/diagrams.json` | 204 |
| Built SVGs | `ls site/public/diagrams/*.svg \| wc -l` | 204 |
| Podcast episodes | `site/src/data/podcast.json` | 37 |

The document count is 39 and the directory count is 8; the site shows seven
sections because `structure.json` nests `reading-diagrams/` inside Foundation.
Both numbers are correct and neither was adjusted to match the other.

`check_counts.py` and the readability census report different word totals
because they use different bases. This baseline records both and does not quote
one as the other.

## Gate status at this commit

All six gates were run at `734d8b0` with a clean tree and no agent live. All
six pass.

| Gate | Result |
|---|---|
| `check_links.py --quiet` | exit 0, silent |
| `check_facts.py` | 26 documents · 834 blocks · 5,602 facts — all conform |
| `check_absolutes.py` | 39 documents + 408 caption/`describe` units — no unscoped denials |
| `check_geometry.py` | 77 assertions over 19 named positions — agrees with `rink_map.md` |
| `check_secrets.py` | 329 tracked files, no findings |
| `check_counts.py` | every live corpus-size figure matches the corpus |

Because the tree was clean and no agent was running, this is a run that counts
under `CLAUDE.md`'s rule that a checker pass while agents are live proves
nothing.

## Generated-artefact correspondence

| Artefact | mtime | Relation |
|---|---|---|
| newest `site/src/diagrams/*.mjs` | 16 Sep 00:21 | source |
| `site/src/data/diagrams.json` | 16 Sep 00:25 | newer than every source module |
| `site/dist/` | 16 Sep 00:27 | newer than the manifest |

The diagram manifest postdates every diagram source, so the caption layer that
`check_absolutes.py` reads is current rather than superseded. `dist/` postdates
the manifest.

⚠️ A fresh `dist/` mtime proves only that the build chain got past `clean:cache`,
which is step 1 of eleven. This baseline therefore records `dist/` as
*plausibly* current and **not** as a verified successful build. No release
decision may rest on that row until a build is run with the absolute npm binary
and both its exit code and `ls -ld site/dist` are checked.

⚠️ **A correction to this record's first draft.** It read that there are no
`.m4a` files under `site/public/audio/` and inferred that the 37 episodes
reference something other than m4a assets at that path. **That inference was
wrong.** `podcast.json`'s own `note` field says so: *"the audio itself is
gitignored and uploaded to the bucket out of band. Byte sizes and durations are
read from the encoded files and are what the podcast feed's `<enclosure>`
elements declare."* `.gitignore:42` excludes `site/public/audio/`, and `:46-47`
exclude `*.m4a` and `*.mp3`. **The absence is by design, and an absence in a
working tree is not an absence in the product** — the same shape of error as
reading an empty extraction as an empty source, which this repository has
recorded four times.

What remains genuinely open is narrower, and it does stand: the manifest's
`bytes` and `duration_s` were read from encoded files at **some past revision,
and nothing in this tree establishes which.** Workstream 3's audio-staleness row
rests on that unrecorded revision, not on missing files.

## Worklists, regenerated at this commit

### Markers — `check_readability_census.py markers`

331 markers across 32 documents; **28 arrive with zero prose after their
heading**. The corpus-wide move recorded in `round_77` has landed: 20 of the 32
documents now print `already complies`, including every positions page except
one marker each in `winger.md`, `goaltender.md` and `defender.md`.

The 28 remaining are concentrated, not spread:

| Document | All | Old side |
|---|---:|---:|
| `technique/body_contact_and_battles.md` | 8 | **8** |
| `foundation/rules_primer.md` | 9 | **6** |
| `foundation/rink_map.md` | 17 | **3** |
| `hockey-iq/risk_management.md` | 9 | 2 |
| nine further documents | — | 1 each |

`rink_map.md`'s three are the likeliest in the corpus to be correct as they
stand: an orientation map's job is to give the reader the frame first, which is
instruction 3's stated exception. These are candidates, not defects.

### Openers — `check_readability_census.py openers`

38 of 39 documents open their Overview/Key focus section on prose. **The
seven documents that opened straight into a ` ```facts ` block no longer do.**
One document still opens on a diagram marker:

- `positions/defender.md:9` — `defender-pair-overview`.

That is an orientation diagram by its own name and is the single likeliest
member of the original list of nine to be correct. It needs reading, not moving.

⚠️ Opening on prose is not the same as opening on the framing principle
instruction 1 asks for. No tool can tell the difference. This row must not be
quoted as "38 already comply."

### Citation apparatus — `check_readability_census.py citations`

Upper bound only: the measure counts the whole sentence, so a sentence that
teaches and cites in passing is counted entirely as apparatus. What it
establishes is distribution, and the distribution is concentrated:

| Document | Share |
|---|---:|
| `foundation/rules_primer.md` | **71.0%** (74,685 of 105,245 words; 1,064 of 2,112 sentences) |
| `positions/goaltender.md` | 60.6% |
| `systems/defensive_zone_coverage.md` | 59.5% |
| … | … |
| `hockey-iq/scanning_and_anticipation.md` | 21.4% |

`rules_primer.md` is the single largest object in this plan on every measure
taken: 104,897 prose words — roughly a tenth of the corpus — the highest
citation share, the largest Key Takeaways section, the largest Common Mistakes
section, and the document a beginner reads first.

### Summary layer — `check_readability_census.py summary`

Key Takeaways plus Common Mistakes is **323,264 of 1,097,372 words, 29.5%** of
the corpus. The spread is the finding: `switching_positions.md` 39.4% at one end,
`neutral_zone_systems.md` 7.1% and `playing_without_the_puck.md` 10.4% at the
other. Which end is wrong has not been established and must not be assumed.
These sections are the propagation destinations; ranking them by size ranks the
redundancy the corpus depends on.

### Tables — `check_tables.py --near`

**3 dropped, 46 read aloud, 9 of those within one edit of being dropped.**
Limits: 3 columns, 14 rows, 200 chars per cell. The tightest, re-derived today:

- `hockey-iq/playing_without_the_puck.md:758` — **5 characters** of cell
  headroom. One word.
- `hockey-iq/risk_management.md:98` and `:470` — 15 characters each.
- `technique/body_contact_and_battles.md:1336` — 16 characters.
- `technique/body_contact_and_battles.md:60` — 43 characters, 2 rows.

⚠️⚠️ **RETRACTED — THIS RECORD'S FIRST DRAFT GOT THIS WRONG, AND IT WAS THE
DANGEROUS DIRECTION.** It read that the zero-headroom table
`READABILITY_AND_DUAL_AUDIENCE.md` names at `rules_primer.md:809` *"does not
appear in today's `--near` output at all"* and that the corpus had moved
underneath that sentence.

**It does appear.** `Situation | Where the draw goes` sits at
**`rules_primer.md:815`** with **0 rows and 66 characters of headroom** — it is
**the tightest table in the corpus** and one added row silently costs a listener
the whole thing. The plan's line number was stale by six lines; its substance was
right.

**The cause was mine and it is instructive:** I read only the `tail` of the
`--near` output and reported the absence as a finding. ⚠️ **A grep that does not
cover the output is the same error as a grep that returns zero on an image-only
PDF** — and this repository has recorded that shape four times. It was caught by
an agent whose brief told it to re-derive rather than trust the figure, which is
the instruction working exactly as intended.

The table above is the authority for the rest; run `--near` for all of it.

### Plan rows — `check_plan_rows.py`

0 open rows with quoted assertions; every quoted assertion still appears in the
file it names. The consolidated queue quotes nothing that has gone stale.

## First-release file list and stop condition

Release one is the two pilots plus the principles index, exactly as
`OPEN_ITEMS.md` 1B states:

- `content/getting-started/getting_started.md`
- `content/foundation/rules_primer.md`
- `content/foundation/core_principles.md`

No corpus-wide shortening pass is opened by this baseline. Workstream 2 rows may
run alongside release one **only on files disjoint from those three**, which is
what `OPEN_ITEMS.md` permits.

Stop condition for the wave dispatched from this baseline: any agent that finds
its brief's premise false stops and reports rather than editing; any repair that
would remove a qualifier, a scope, a counterweight or an honest disclosure stops
and reports; any change to a shared tool, a generated artefact, or a file the
agent does not exclusively own stops and reports.

## What this method could not have found

This baseline measured the repository; it verified no hockey, rules, medical,
citation or diagram claim. It did not run a build, so the `dist/` row is a
plausibility statement and not a verified build. It did not open a browser, so
no rendered-page, keyboard-order or contrast statement is made. It did not play
or inspect any audio, so the correspondence between the 37 podcast episodes and
the current source revision is unestablished rather than sound. It did not read
the 28 remaining old-side markers in context, so it reports candidates and
cannot say how many are defects. It read no worklist hit for `check_pointers`,
`check_disclosures`, `check_zones`, `check_caption_echo`, `check_rule_scope`,
`check_chunk_splits`, `check_chunk_tails`, `check_leaders`,
`check_diagram_quotes`, `check_caption_negations` or `check_external_links` —
those were not run, and their silence here is an absence of measurement, not a
clean result.
