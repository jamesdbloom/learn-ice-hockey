# Readability and dual-audience — the baseline, measured

**Commit:** `c8ab508` — *"Cut the rink map's rule-carrying prose, and stop a caption telling a
goaltender never to freeze the puck"*, 2026-09-14 10:10:20 +0100.
**Working tree at measurement:** `git status --short` empty. `git diff --cached --name-only` empty.
`git diff --name-only content/` empty. **The tree was clean and the index matched it** — stated
because [`READABILITY_AND_DUAL_AUDIENCE.md`](../plans/READABILITY_AND_DUAL_AUDIENCE.md) requires it
and forbids claiming it when it is not.
**Measured by:** the coordinator, 14 September 2026, with five read-only agents live. Every agent in
that wave was read-only, so no checker in this record raced a writer.

This is the record the plan's *"Baseline to reproduce"* section demands: one row per metric, with the
exact command, the source of truth, the owner, and **the decision the metric informs**. Historical
figures quoted in the plan are marked as such and are not used to drive anything.

---

## The two findings that change the plan

### 1. ⚠️ The five-minute audio budget cannot be met by the pipeline that exists

The plan's first-release target is *"5 minutes of audio"* per pilot. **Every published episode is
between 48.0 and 72.1 minutes.** There is no short episode anywhere in the corpus to shorten toward.

Worse, **episode length is very nearly independent of document length**:

| | |
|---|---|
| Pearson r (document words, episode minutes) | **0.301**, n=37 |
| Shortest document, 4,194 words (`reading_ice_hockey_diagrams`) | **53.4 min** |
| Longest document, 94,831 words (`rules_primer`) | **67.9 min** |

A document **22× longer** yields an episode **1.27× longer**. That is the signature of a generator
that is not reading the document aloud: these are NotebookLM Audio Overviews, a conversation *about*
the source, not a rendering *of* it. **So shortening a pilot's primary path will not shorten its
episode**, and an `audioMinutes` field populated from `podcast.json` describes the conversation, not
the reading.

**Decision this informs:** the audio half of the pilot budget is not achievable as a duration target
in release one. Either (a) the budget is restated as *"the required conditions occur in the same
spoken unit as their instruction, measured on the `md_to_speech` extraction"* — a contract the corpus
can actually hold — or (b) a short-form audio path is a separate deliverable with its own plan. The
plan itself already separates the generation workflow into
[`PODCAST_AUTOMATION_LOCAL.md`](../plans/PODCAST_AUTOMATION_LOCAL.md) and says this plan *"owns only
the audio learning contract and whether pilot audio is current"* — which is consistent with (a).
**This is a question for the owner, recorded here rather than decided by the coordinator.**

### 2. ⚠️ Neither pilot document has a facts layer

`check_facts.py` reports **26 in-scope documents**. The other **12 have no ` ```facts ` block at
all** — and **both pilots are among the 12**:

```
0 blocks: getting_started, rules_primer, rink_map, uk_rules, language_and_glossary,
          reading_ice_hockey_diagrams, and all six of off-the-ice/
```

Phase 2 step 10 says to *"compare the facts block with the new body and summaries independently"* and
step 11 requires a propagation row for *"facts or an explicit no-facts decision"*. **For both pilots
the answer is the explicit no-facts decision, and it is the pre-existing state of the corpus, not a
choice this work gets to make silently.** A pilot rewrite must not introduce a facts block into a
document that has never had one without that being a reviewed decision in its own right — it adds a
spoken layer, and `check_facts.py`'s in-scope count would move from 26.

---

## Corpus scale

| Metric | Value | Command | Source of truth | Informs |
|---|---|---|---|---|
| Documents | **38** | `find content -name '*.md' \| wc -l` | the filesystem | scope of "unclassified" marking in release one |
| Directories | **8** | `find content -mindepth 1 -maxdepth 1 -type d \| wc -l` | the filesystem | ⚠️ the site shows **7** sections; both are right — `structure.json` groups `reading-diagrams/` inside Foundation. Do not reconcile them. |
| Words | **1,204,836** | `python3 scripts/check_counts.py` | **`check_counts.py` is the owner of this figure** | any corpus-size sentence in `content/` |
| Words (`wc -w`) | 1,207,078 | `find content -name '*.md' -print0 \| xargs -0 cat \| wc -w` | — | context only; **`wc -w` is NOT the owner** and the 2,242-word gap is its different definition of a word, not drift |
| Characters | 7,154,278 | `… \| wc -c` | the filesystem | rough transfer/scale sense only |
| Lines | 32,257 | `… \| wc -l` | the filesystem | ⚠️ lines are a poor proxy here — `rules_primer.md:1081` is a **single 32,067-character line** |
| Reading time | **91.3 hours at 220 wpm** | `python3 scripts/check_counts.py` | `check_counts.py` | the gap against 37.2 h of audio, below |

## The audio layer

| Metric | Value | Command | Informs |
|---|---|---|---|
| Episodes | **37** for 38 documents | `site/src/data/podcast.json` → `episodes` | the missing one is the whole of row below |
| Document with no episode | **`foundation/language_and_glossary`** | set difference of `docs-meta.json` `docs` against episode `doc_id`s | ⚠️ **the plan forbids any pathway linking it as a listening destination until this is resolved or the destination is labelled reading-only.** Confirmed, not assumed. |
| Total audio | **37.2 hours** | sum of `duration_s`/60 | against 91.3 h of reading — the episode is not a reading of the document |
| Mean episode | **60.3 min** | as above | there is no short-form precedent in this corpus |
| Range | **48.0 – 72.1 min** | as above | the 5-minute budget, finding 1 |

## Structure per document

Full per-document table of lines, words, `##`/`###` counts, ` ```facts ` blocks and diagram
references was measured at this commit and is reproducible with the loop in
`for f in $(find content -name '*.md'|sort)`. The load-bearing figures:

| Metric | Value | Command |
|---|---|---|
| ` ```facts ` blocks | **830** across **26** documents | `grep -rc '^```facts' content --include='*.md'` — cross-checks against `check_facts.py`'s own "830 blocks" |
| Facts | **5,547** | `python3 scripts/check_facts.py` |
| Diagram references in `content/` | **331** | `grep -rho '!\[\](diagram:[^)]*)' content --include='*.md' \| wc -l` |
| Distinct diagrams referenced | **204** | same, `\| sort -u \| wc -l` |
| Entries in `site/src/data/diagrams.json` | **204** | `json.load` — **agrees exactly with the reference count; no orphan, no dangling reference** |
| Caption/`describe` units scanned | **408** | `python3 scripts/check_absolutes.py` — i.e. 204 × 2 |
| Diagram **modules** | **33** | `ls site/src/diagrams/*.mjs \| wc -l` |

⚠️ **The plan says "An earlier review measured a large corpus, 204 diagram entries, 331 diagram
references, and 37 audio episodes for 38 documents… These are historical context, not the current
baseline."** All four have now been re-measured and **all four still hold**. The plan also says *"The
diagram-module count is not reliable and must not be reused"* — it is now measured at **33** by
matching `site/src/diagrams/*.mjs` explicitly, as the plan requires.

Documents with **no diagram at all**: `team_play_and_culture`, `mental_game`, `equipment`,
`conditioning_and_recovery`, `uk_rules`, `language_and_glossary`. `getting_started` has **1**;
`skating` has **2**. This confirms the plan's Phase 3 observation that *"skating, passing, shooting,
equipment, and beginner procedures have few or no diagrams"* — ⚠️ **and it is not on its own a defect.
The plan explicitly forbids filling those gaps with top-down rink plans.**

## Gate status at baseline

Every gate was run at `c8ab508` on the clean tree. **All pass.**

| Gate | Result |
|---|---|
| `check_links.py --quiet` | exit 0, silent |
| `check_facts.py` | `26 in-scope documents · 830 blocks · 5547 facts` — conform |
| `check_absolutes.py` | `38 documents + 408 diagram caption/describe units scanned` — clean |
| `check_geometry.py` | `77 assertions over 19 named positions` — agrees with `rink_map.md` |
| `check_secrets.py` | `312 tracked files, no findings` |
| `check_counts.py` | `38 documents · 8 sections · 1,204,836 words · 91.3 hours` — every live figure matches |

**This is the "before" state. Any gate failure after this point belongs to this work.**

## What this baseline could not have found

- **Whether any of it is true.** These are counts. No gate here reads a sentence for correctness, and
  a clean `check_facts.py` says the 5,547 facts are *well-formed*, not right.
- **The rendered page.** Nothing here ran the site build or opened a browser, so the homepage entry
  points, the current click-distance from the homepage to a first action, and mobile behaviour are
  unmeasured by the coordinator — they are in flight with a separate reviewer and are **not** claimed
  here.
- **The primary-path word count of either pilot**, which is a rendered-readable-word measurement,
  not `wc -w`, and is in flight separately.
- **Whether the 12 facts-less documents are correctly facts-less.** That the state is pre-existing is
  established; that it is right is not.
- **Anything about `md_to_speech`'s unit behaviour**, which decides whether a condition can be
  separated from its instruction. In flight separately.
