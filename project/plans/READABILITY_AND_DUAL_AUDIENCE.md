# Readability and dual-audience implementation plan

## Mission

Improve the public site for two readers without making either audience consume the
wrong material:

- a U10 player or parent who needs short, concrete, safe instructions;
- an adult recreational player who wants the reasoning, alternatives, rule-set
  differences, evidence, and tactical detail.

These are initial priority paths, not the whole audience definition. The model
must also accommodate players in the first ten years of playing, including older
youth, teenage beginners, adult beginners who are not in recreational leagues,
parents, and coaches. U10 is an age/applicability case; it is not a synonym for
beginner, safe, or a particular rulebook.

The corpus is deliberately large and has a real reference function. Its size is
not, by itself, a defect. The defect to solve is that beginner instruction,
advanced detail, source qualification, rules comparisons, facts blocks, summaries,
and audio are often presented in one linear path. The implementation must shorten the beginner path without deleting
safety-critical detail, honest disclosures, provenance, or a useful adult
reference layer.

The site should also make its highest-level hockey-IQ principles explicit. A
player who understands why a decision is right can transfer it to a new position,
system, opponent, or game state. The implementation must therefore extract the
small set of cross-scenario principles that guide the rest of the corpus, rather
than leaving them scattered across position and systems pages.

The authorial voice should be authoritative, direct, and useful. State the
principle and the action plainly. Use a reference or brief evidence note when it
supports the point, changes confidence, or helps the reader decide what applies.
Do not make the main teaching path narrate the project's research process with
repeated phrases such as “this could not be verified,” “no source was found,” or
“the corpus has not checked this” when that uncertainty does not change what the
reader should do. Such process noise weakens the authority and buries the value
of the lesson.

This is not permission to erase honest uncertainty. A disclosure stays when the
evidence quality, source disagreement, scope limit, or inability to verify is
material to how the reader should weigh or apply the claim. Make it concise,
reader-facing, and adjacent to the claim; move extended provenance, search
history, and verification detail to the Sources/reference layer. Never replace a
required safety, rule-set, age, league, or medical qualification with a vague
confidence statement.

This plan is for an implementation agent. It is not permission to make a blind
corpus-wide shortening pass.

## Working rules

1. Read `project/content_style_guide.md`, `project/review_process.md`, and the
   relevant `project/review_history.md` sections before editing.
2. Treat every finding below as a hypothesis. Re-read the current file and refute
   the premise before changing it; the worktree may have moved since this plan
   was written.
3. Do not remove a claim because it lacks a source. Source it, label its limit,
   or move it to an appropriate reference layer. Never remove an honest
   disclosure.
4. Do not compress a rule, contact instruction, equipment warning, medical
   statement, or age/league qualification without primary-source and
   `safety-reviewer` review.
5. Do not present a coaching choice as universal. Keep the system name, a
   realistic alternative, the changed job, and the instruction to ask the coach.
6. Preserve the facts layer, Common Mistakes, Key Takeaways, Sources, and audio
   contracts unless the owning renderer is deliberately changed and tested.
7. Use an authoritative voice: lead with the supported conclusion and practical
   consequence, attach evidence where it adds value, and keep process disclosures
   brief and out of the primary path unless they alter the reader's decision.
   Never strip a material honest disclosure merely to sound confident.
8. Do not add diagrams just to equalise document counts. Use diagrams for space,
   sequences for movement, demonstrations/video for body mechanics, and prose or
   checklists where visuals add little.
9. Do not touch `infra/`. Do not deploy or push. Ask before any destructive,
   outward-facing, or hard-to-reverse operation.
10. Keep file ownership disjoint between agents. Agents do not edit
   `project/plans/`, `project/reviews/`, `scripts/`, or shared diagram outputs.
   The coordinator owns shared-state writes and tool changes.

## Baseline to reproduce

Before editing, record the current state:

- word and line counts for all 38 `content/**/*.md` files;
- document, diagram-reference, diagram-manifest, facts-block, and podcast counts;
- per-document heading, section, facts-block, and diagram counts;
- caption length distribution and captions over the project's existing warning
  thresholds;
- which documents contain practical explanations, recognition cues, worked
  examples, drills, self-tests, checklists, or practice plans;
- current homepage, section hubs, document header, table of contents, search,
  previous/next, diagram, and audio behaviour at desktop and mobile widths;
- build and checker status before editing.

An earlier review measured a large corpus, 204 diagram entries, 331 diagram
references, and 37 audio episodes for 38 documents. These are historical context,
not the current baseline. The diagram-module count is not reliable and must not
be reused. Re-measure every value with a documented command, matching
`site/src/diagrams/*.mjs` explicitly if counting modules, and record
`git rev-parse HEAD`, `git status --short`, index state, and working-tree state
alongside the result in the baseline review record. Do not claim the baseline is
clean when it is not. The live homepage exposes a comprehensive catalogue and
has one primary start link. `language_and_glossary` has no podcast episode;
resolve that before any pathway tells a listener to use it.

Record the baseline in a review record or a coordinator scratchpad, not in
`content/`.

The baseline record must use one row per metric with: metric name, exact command,
source of truth, owner, timestamp and commit, interpretation, and the decision
the metric informs. Historical figures are context only and must not drive an
implementation decision without a fresh measurement.

## ⚠️ Three owner instructions given 14 September 2026

**Given directly by the owner, after the first release wave. They override anything below that
disagrees with them, and the third one reverses the style guide.**

### 1. Most pages open with the high-level principle that frames them

**A page should state, at the top, the principle its content sits inside** — so a reader has the
framework before the detail, and can judge what follows against it rather than accumulating it.

This is **not** the `## Key focus` layer and must not be merged with it. Key focus is *what to do*.
The principle is *the idea that makes the page's content make sense* — the thing that lets a reader
transfer it to a situation the page does not cover. A page may need both, and where it does the
principle comes first, because it frames the actions rather than summarising them.

- **Draw it from `content/foundation/core_principles.md`** where one of the seven fits, and link to
  it. Where none fits, say so rather than inventing one — ⚠️ **the index's own rejected-candidate log
  is longer than its accepted list, and that was the correct outcome.**
- ⚠️ **A principle at the top of a page is a claim in the most prominent position in the document,
  voiced, and often read alone.** It carries the same burden as any other claim: scope, owner, and
  the qualification its owner carries. **The cardinal rule applies with more force here, not less** —
  a page-opening principle is the single easiest place in this corpus to present a coaching choice
  as a law of hockey.
- **Not every page.** Reference material — the glossary, the rules primer's comparison sections —
  may have no framing principle, and forcing one produces a slogan. Say which pages have none and
  why.

### 2. Reduce the text. The target is the citation apparatus and low-level rule detail

**Cut length by keeping the important points and dropping low-level detail, especially detail about
specific rules.** This sharpens a rule the style guide already has — *"Prefer one sentence of
consequence to a paragraph of citation… Where four books agree, say so once and name one… That is
provenance theatre."*

⚠️ **This round measured that rule being broken, repeatedly, and the measurements are the brief:**

| Measured 14 September | |
|---|---|
| `rules_primer.md` `## Key focus` | **407 words**, of which the first paragraph was **~240 words of bold citation apparatus** — the full USA Hockey classification list, a verbatim quotation, 604(b), Hockey Canada's scope and the British answer, **before reaching the layer's second question** |
| `defensive_zone_coverage.md` | **+1,310 characters** and **four verbatim book quotations** for a rule its own sentence calls universal — **inside a document about defensive-zone coverage** |
| `breakouts.md` | **+1,716 characters**, the same two rule sentences quoted **twice each** |
| `neutral_zone_systems.md` | **+462 characters, ZERO verbatim quotations** — *"conditional and not universal… see Special Teams, which covers the conditions"* |
| `rules_primer.md` Key Takeaway 9 | **1,256 words in one list item — 18× the corpus median of 70, and 6.8 screen-heights at 375px** |
| `risk_management.md` `the-risk-map` figcaption | **634 words — 1,404px against a 279px figure it captions, 5× the height of the picture** |

**`neutral_zone_systems.md` is the standard. Two reviewers named it independently.**

⚠️ **AND THE CONSTRAINT THAT MAKES THIS HARD, because ignoring it produced this round's worst
defects.** Both pilots came out of the first wave **LONGER**, and the reason was not carelessness:

- **A required condition beats a length target.** A `safety-reviewer` pass blocked the release because
  a Key focus taught how checks are policed without saying whether the reader may check at all. **The
  repair grew that layer from 253 to 369 words and that was correct.**
- ⚠️ **Compression is how this corpus's worst defects have entered.** Round 38's criticals came from
  compressing under the guise of repair — *"a compression deleted a corrective instruction and an
  honest disclosure."* This round, an agent measured every Common Mistakes bullet in `rules_primer.md`
  for duplication and found the overlap was **scope qualifiers, not prose**, so shortening meant
  deleting a book name, a division carve-out or a disclosure. **It left them long and said so.**

**So the rule is: cut CITATION APPARATUS and RULE-LEVEL DETAIL, never a qualifier, a scope, a
counterweight or an honest disclosure.** The test for any cut: *does a reader who acts on what
remains do anything differently, or differently wrong?* If the answer is yes, it was not apparatus.
**Where a document cannot be shortened without losing a qualifier, leave it long and record why** —
that is a result, and this round produced several.

### 3. ⚠️ A diagram FOLLOWS the content it illustrates — this REVERSES the style guide

**Put the diagram after the prose that discusses it, in most cases.** A diagram that arrives first
arrives out of context: the reader has nothing to interpret it against and has to hold it in mind
until the explanation catches up.

**The exception, and it is a real one:** an **overview or summary diagram** that helps a reader
understand what follows **by seeing it first** — an orientation map, a notation key, a whole-ice
frame that the text then works through. **Those go first, because their job is to give the reader
the frame rather than to illustrate a point already made.**

⚠️ **This reverses `content_style_guide.md:1417`**, which currently records the opposite as the
owner's instruction — *"diagrams should be at the start of sections"*, on the reasoning that a
diagram arriving after the prose arrives too late. **The style guide must be updated or it becomes
false**, and the update must carry the reason, not just the new rule.

⚠️ **It also GENERALISES an owner instruction already on record.** `OPEN_ITEMS.md` carries a 12
September instruction that on the **positions pages** a diagram goes at the end of its section, with
the reason: those sections are named by zone-and-situation — a *job* — while the caption draws one
*instant* inside it, so a picture arriving first asserts that instant **is** the job. **That reasoning
was never specific to positions pages, and this instruction says so.**

**What this costs, measured, so nobody rediscovers it:**

- **Current state: 252 markers sit before a facts block, 2 after.** This is a large corpus-wide move,
  not a tidy-up.
- ⚠️ **Never insert a marker between items of a real ordered list** — it renumbers the list in the audio.
- ⚠️ **A caption that refers BACKWARD to prose is now the common case, and that is the point** — but a
  caption that refers *forward* to prose the move would strand is a defect. **Read the caption in its
  new position before moving the marker.**
- **Where two diagrams are a deliberate before/after pair, move BOTH together.**
- ⚠️ **A caption is voiced, and moving a marker moves the caption in the audio too.** Re-render and
  read the chunk; a caption that made sense arriving before its prose may not make sense arriving
  after it.

---

---

---

---

## ⚠️⚠️ THE TEXT-SIZE CENSUS, run 15 September 2026 — instruction 2 has a target, and it is not where anyone was looking

**Owner: `python3 scripts/check_readability_census.py words` and `... summary`. Prose layer only —
fenced blocks excluded, so ` ```facts ` words are NOT in these figures.**

⚠️ **NO TOTAL IS WRITTEN HERE. RUN `python3 scripts/check_readability_census.py words`.** What does not
move: **`rules_primer.md` is by far the largest document and roughly a tenth of the corpus — the one a
beginner reads first.**

### ⚠️ Roughly THREE-TENTHS of the corpus is in TWO sections — run `... summary` for today's figure

**Those words live in `Key Takeaways` and `Common Mistakes`.** Not in the teaching prose, not in the
rule citations instruction 2 names as its target — **in the two summary sections.**

⚠️ **The spread is the finding, not the average.** `switching_positions.md` is **39.4%**;
`neutral_zone_systems.md` is **7.2%** and `playing_without_the_puck.md` **10.4%**.

⚠️ **Which end is wrong has NOT been established and must not be assumed.** A 7% document may be
**under-summarised** — and `playing_without_the_puck.md` is **the only document in the corpus whose
Common Mistakes is LONGER than its Key Takeaways** — a shape, not a figure, so it survives a re-run. **Read both ends
before treating either as the target.**

### ⚠️⚠️ THE HAZARD, AND IT IS THE ONE THIS REPOSITORY EXISTS TO PREVENT

**These are the propagation destinations.** `CLAUDE.md`: *"Body → facts blocks → Common Mistakes → Key
Takeaways → every other document that repeats it… Every critical in round 10 was a correction that
reached the body and stopped."* **This round has now produced THREE more instances of that shape.**

⚠️ **And they are voiced standalone.** A Key Takeaway is its own chunk with a break either side — it is
where a safety counterweight survives being heard out of context. **An earlier round found a document
stating a hazard naked in the extraction layer precisely because the counterweight lived elsewhere.**

⚠️⚠️ **So a words-per-section table is the most dangerous measurement in this plan.** It ranks by size
the exact sections whose job is redundancy, and **cutting the biggest is indistinguishable, by any
tool here, from deleting the corpus's propagation.** Non-negotiable 3 and 4 both bite.

**The safe form of this work is CONSOLIDATION WITHIN A TAKEAWAY, not deletion of takeaways** — and the
faceoff round measured the shape it takes: **every repaired facts line SHRANK while GAINING a book,
because named books replaced five modal recitals.** ⚠️ **But that round also refuted the general
version: two lines GREW, because they already used named books and had nothing to trade.** **The law
is *"named books beat modal recitals"*, not *"repairs shrink."***

### ⚠️ And the citation apparatus, which is what instruction 2 actually names

**Owner: `python3 scripts/check_readability_census.py citations`.** A sentence counts when it carries a rule-number pattern —
`Rule 76`, `81.6`, `613(d)`, `76.7(iv)`.

⚠️ **NO FIGURE IS WRITTEN HERE. RUN `python3 scripts/check_readability_census.py citations`.** It has
been roughly **45%** on every run to date — but that number has moved four times in one session, and
the tool is its owner.

⚠️⚠️ **THE PER-DOCUMENT TABLE IS DELETED, and a gate is why.** It carried six figures, and by the time
it was staged **two were already wrong and the RANK ORDER had inverted** — `faceoffs.md`, the most
heavily edited file in this commit, had climbed above `body_contact_and_battles.md` **while the table
sat seven lines under a heading reading *"NO FIGURE IS WRITTEN HERE. RUN THE TOOL."*** ⚠️ **The section
contradicted itself as staged.**

**`python3 scripts/check_readability_census.py citations` prints the full ranking, sorted, every time.**

**What does not move, and is worth keeping:** the apparatus is **concentrated, not spread** —
`rules_primer.md` is far and away the highest and roughly ten times the share of the lowest; the
technique and reading-diagrams documents sit at the bottom; and ⚠️ **the two at the bottom are within a
TENTH OF A POINT of each other, so never name one of them "the thinnest" without re-running.**

⚠️ **THE DENOMINATOR IS NOT THE SAME ONE THE SECTION ABOVE USES, and a commit gate caught that
before it shipped.** The two censuses report **different totals**.
**Both were called "prose words" and neither said which.**

**Reconciled, exactly: the gap is 10,312 words, and it is the `##` and `###` heading text.**
`wordcount.py` treats those lines as section boundaries and does not count them; `citations.py` counts
them as body. ⚠️⚠️ **THE GAP IS EXACTLY 10,312 WORDS ON EVERY RUN, AND IT IS THE `##` AND `###` HEADING TEXT — that
identity is the thing that does not move.** ⚠️ **`check_readability_census.py reconcile` prints both
totals, the difference and the heading count, and says `reconciled: YES` or tells you to investigate.
Run it; never re-derive it by hand.**

**So the citation share is correct within its own base.** ⚠️ **Against the other base it is about half a
point higher, and quoting the two figures in one breath — which is what the commit message first
did — asserts a shared denominator that does not exist. That is [D8](../review_process.md), in a
round about D8.**

⚠️ **This measure ALSO OVER-ATTRIBUTES and the figure must never be quoted without saying so.** It counts
the **whole sentence**, so a sentence that teaches something and cites a rule in passing is counted
entirely as apparatus. ⚠️ **Whatever the tool prints is an UPPER BOUND on the target, not a measurement
of waste.**

⚠️ **What it does establish is DISTRIBUTION**, which is not sensitive to that flaw: the apparatus is
**concentrated**, from roughly 70% down to 6.6%. **`rules_primer.md` is the single largest object in
this plan** — around a tenth of the corpus, the document a beginner reads first, and it holds three of the five heaviest non-takeaway sections.

⚠️ **Non-negotiable 2 sets the floor and it does not move:** *"Rules come from primary rulebook text on
disk, grepped, with the wording quoted."* **The reduction is in how many times the corpus says it, and
in which layer — never in whether the claim is sourced.** A cut that leaves a rule stated and its
source removed is worse than no cut at all.

### The twenty heaviest sections

⚠️ **Fifteen of the twenty are `Key Takeaways`.** The five that are not are the ones worth reading
first, because they are ordinary prose that grew:

| Words | Section |
|---:|---|
| 11,299 | `foundation/language_and_glossary.md:231` — Glossary |
| 10,619 | `foundation/rules_primer.md:435` — Body fouls |
| 8,919 | `foundation/rules_primer.md:898` — 10. Rule Set Differences That Actually Matter |
| 8,497 | `systems/special_teams.md:621` — Clearing, blocking, sticks and discipline |
| 11,263 | `foundation/rules_primer.md:960` — Common Mistakes |

⚠️ **Three of the five are in `rules_primer.md`, and instruction 2 names *"low-level rule detail"* as
its target.** **That document is where this work starts.**

## ⚠️ THE OPENER CENSUS, run 15 September 2026 — instruction 1's nine documents, named

**Owner: `python3 scripts/check_readability_census.py openers`. Two earlier definitions of this
measure returned nothing useful and are recorded in the script so nobody re-runs them:**

- *"What does the document open with?"* → **all 39 answer `> **Rule set:**`**, the standing banner. The
  measure is blind.
- *"What is the first heading?"* → **all 39 answer `## Overview` or `## Key focus`.** Also blind.

⚠️ **Both look like clean results. Neither tells you anything.** The measure that works is **what the
Overview or Key focus section opens with**, and on that one the corpus splits 30 / 7 / 2.

### The nine that open with no framing sentence at all

**Seven open straight into a ` ```facts ` block** — which is the extraction layer, **voiced alone with
a 300 ms break either side**, arriving before the reader has been told what the document is about:

| Document | Line |
|---|---|
| `positions/center.md` | `:9` |
| `positions/goaltender.md` | `:11` |
| `positions/winger.md` | `:9` |
| `systems/breakouts.md` | `:14` |
| `systems/defensive_zone_coverage.md` | `:10` |
| `systems/neutral_zone_systems.md` | `:10` |
| `systems/offensive_zone_play.md` | `:10` |

**Two open on a diagram marker**, which instruction 3's exception may well permit — **both name
themselves as overviews and both need reading, not sweeping**:

| Document | Line | Marker |
|---|---|---|
| `positions/defender.md` | `:9` | `defender-pair-overview` |
| `systems/forechecking_systems.md` | `:10` | `forecheck-angling` |

⚠️ **`defender-pair-overview` is an orientation diagram by its own name — it is the likeliest member
of this list to be CORRECT as it stands.** `forecheck-angling` is not obviously one.

### ⚠️ What this census does NOT establish

**The other 30 open on prose. That is not the same as opening on the high-level principle that frames
the document**, which is what instruction 1 actually asks for. **A prose opener can still open on a
detail.** ⚠️ **No tool can tell the difference, and this census has not tried** — the 30 need reading,
and this list should not be quoted as *"30 already comply."*

**Three of the nine — `center.md`, `winger.md` and one further staged file — were being written by a
live agent when this ran.** Re-run before dispatching.

## ⚠️ A CONSTRAINT EVERY WAVE INHERITS: nine tables are one edit from silence

`python3 scripts/check_tables.py --near`, run 15 September 2026. **3 dropped, 46 read aloud, 9 of
those within one edit of being dropped.** Limits: 3 columns, 14 rows, 200 chars per cell.

⚠️ **The one that matters most to this plan is in the document this plan targets hardest:**

- **`foundation/rules_primer.md:809` — `Situation | Where the draw goes` — ZERO rows of headroom.**
  **Add one row and a listener loses the whole table, silently, with every gate passing.**
- **`hockey-iq/playing_without_the_puck.md:758` — FIVE characters of cell headroom.** One word.

The rest, for the waves that touch them: `rink_map.md:495`, `getting_started.md:139` and `:541`,
`risk_management.md:98` and `:470`, `body_contact_and_battles.md:60` and `:1336`.

⚠️ **This is a live trap for instruction 2 specifically.** Text reduction that moves prose *into* a
table, or that adds a qualifying row to preserve a scope the prose used to carry, **is exactly the
edit that drops one.** ⚠️ **And never shorten a cell by dropping a hedge, a citation or a scope flag
to get under the limit** — that trades an audible table for a false one.

⚠️ **`CLAUDE.md` names `body_contact_and_battles.md:55` as the zero-headroom table. It is not** — that
one is now at `:60` with two rows spare, and the table actually at zero is in `rules_primer.md`.
**Re-run the tool; do not quote this section either.**

---

## ⚠️ THE MARKER CENSUS, run 15 September 2026 — and it disagrees with this file

**Run by the coordinator, because a corpus-wide census is coordinator work.** ⚠️ **Owner: `python3 scripts/check_readability_census.py markers`.** Re-run it rather than quoting
this table once anything moves — and see *"the figures below went stale inside their own session"*
at the end of this block.

**Definition, stated because the number depends on it:** a marker is counted on the **old side** when
**zero non-blank prose lines** separate it from the heading above it — it is the first thing in its
section. Fenced blocks are skipped, so a ` ```facts ` block between heading and marker does not count
as prose.

⚠️ **NO COUNT IS WRITTEN HERE. RUN `python3 scripts/check_readability_census.py markers`.** ⚠️ **It was 286 before the positions pages moved and is lower now — a gate caught this file still printing the pre-move figure.**

⚠️ **This file says 284 and elsewhere says *"252 markers sit before a facts block, 2 after"*, which is
a THIRD measure of a different thing.** I am not reconciling them by picking one: **the definition
above is stated so the figure can be re-derived, and the two older figures should be read as what they
are — counts of something else, or counts taken before the corpus moved underneath them.** ⚠️ **A
number copied out of its owner goes stale silently.** The owner is the script.

### ⚠️⚠️ THESE FIGURES WENT STALE THREE TIMES IN ONE SESSION — so read the command, not the numbers

`CLAUDE.md` says a number copied out of its owner goes stale silently. **This section proved it on its
own figures, three times, in a single day.**

| measured | prose words | markers on the old side |
|---|---|---:|
| first run | the lowest | 286 |
| after one repair agent | +320 | 286 |
| after eight agents | +7,587 more | 286 |
| after the reviews and repairs | **+13,832 more** | 286 |
| **after the positions-page move** | — | ⚠️ **fell sharply — RUN THE TOOL** |

⚠️ **The totals themselves are deliberately absent** — a gate caught this very table carrying a drift
ledger that had itself gone stale while recording drift. **Run the tool.**

⚠️ **The marker count did not move at all while the word count moved 7,587.** **The two measures decay
at completely different rates**, so one refresh policy for this whole section was wrong from the start.

⚠️⚠️ **SO NO FIGURE IS PRINTED BELOW ANY MORE. RUN THE TOOL:**

```bash
python3 scripts/check_readability_census.py all
```

**What is kept here is only what does NOT move:** the definitions, the reconciliation identity, the four
documents that already comply, and the hazards. ⚠️ **The reconciliation held through every run — the two
bases differ by exactly the `##` and `###` heading text, and `check_readability_census.py reconcile`
prints `reconciled: YES` or tells you to investigate.**

### ⚠️ FOUR DOCUMENTS ALREADY COMPLY, and one of them is the largest diagram user in the corpus

`how_to_watch_hockey.md` carries **24 markers and not one on the old side.** So does
`practice_and_development.md` (4), and the two single-marker documents.

⚠️ **That changes what this work is.** It is not a corpus-wide convention being introduced against the
grain — **the corpus already contains a worked, 24-marker demonstration of the target state.** **Read
`how_to_watch_hockey.md` before moving a single marker elsewhere, and make the rest look like it.**

### ⚠️ The census counts CANDIDATES, not defects

The owner's instruction has a real exception — **an overview or orientation diagram goes first,
because its job is to give the reader the frame.** `rink_map.md` shows 17 of 17 on the old side and is
the likeliest place for that exception to be the correct answer, not the defect;
`reading_ice_hockey_diagrams.md`'s single marker is a **notation key**, which is the exception by
definition.

⚠️ **A sweep over this table would be exactly the failure this repository keeps recording.** In an
earlier round two lines matched a pattern and were not defects — they stated a rule's scope rather
than its tension — and *"a sweep would have fixed them."* **Only reading decides.**

| Document | Markers | On the old side | |
|---|---:|---:|---|
| `positions/winger.md` | 27 | **27** |
| `off-the-ice/how_to_watch_hockey.md` | 24 | **0** | ✅ **already complies**
| `positions/goaltender.md` | 20 | **20** |
| `foundation/rink_map.md` | 17 | **17** |
| `positions/center.md` | 16 | **16** |
| `systems/offensive_zone_play.md` | 16 | **15** |
| `systems/zone_entries.md` | 16 | **16** |
| `positions/defender.md` | 15 | **15** |
| `systems/game_management.md` | 15 | **8** |
| `systems/neutral_zone_systems.md` | 13 | **12** |
| `systems/special_teams.md` | 12 | **12** |
| `systems/faceoffs.md` | 11 | **11** |
| `systems/forechecking_systems.md` | 11 | **11** |
| `systems/breakouts.md` | 10 | **10** |
| `foundation/rules_primer.md` | 9 | **9** |
| `hockey-iq/playing_without_the_puck.md` | 9 | **9** |
| `hockey-iq/risk_management.md` | 9 | **8** |
| `systems/defending_the_rush.md` | 9 | **9** |
| `technique/body_contact_and_battles.md` | 8 | **8** |
| `technique/passing_and_receiving.md` | 8 | **8** |
| `hockey-iq/puck_support_and_spacing.md` | 8 | **8** |
| `hockey-iq/time_and_space.md` | 8 | **6** |
| `systems/defensive_zone_coverage.md` | 8 | **8** |
| `positions/switching_positions.md` | 6 | **6** |
| `technique/puck_handling.md` | 5 | **3** |
| `technique/shooting.md` | 5 | **5** |
| `hockey-iq/scanning_and_anticipation.md` | 5 | **4** |
| `off-the-ice/practice_and_development.md` | 4 | **0** | ✅ **already complies**
| `foundation/on_ice_communication.md` | 3 | **3** |
| `technique/skating.md` | 2 | **2** |
| `reading-diagrams/reading_ice_hockey_diagrams.md` | 1 | **0** | ✅ **already complies**
| `getting-started/getting_started.md` | 1 | **0** | ✅ **already complies**

### Ownership note for the waves

⚠️ ⚠️⚠️ **THE FIVE POSITIONS PAGES HAVE NOW BEEN MOVED — 84 markers, 73 moved, 11 left — so every
per-file figure in this section that predates that wave is stale.** **`center.md` and
`switching_positions.md` now print `<- already complies`.** **Run the tool.**

---

## ⚠️ WAVE 1 OWNERSHIP — the partition, stated so it can be checked

`CLAUDE.md`: ⚠️ ***"File ownership must be disjoint, and it must be stated. AND STATING IT DOES NOT
MAKE IT TRUE — the coordinator is the one who gets this wrong."*** In an earlier round **four agents
were sent to one directory, each brief saying *"You own EXCLUSIVELY"*.** They did not, and an agent's
rebuild published six captions it had never read, under its own clean checker run.

**So this partition is computed, not asserted.** `python3 scripts/check_readability_census.py partition` generates it by
least-loaded assignment, and **asserts that no file appears twice before printing** — the assertion
is in the code, not in this sentence.

⚠️⚠️ **THE PARTITION TABLE IS DELETED, and a gate is why.** It was staged carrying per-file counts for
the five positions files **that the same commit had just moved** — `winger.md` listed at 27 when it was
1, `center.md` at 16 when it was 0. ⚠️ **That table is what the next wave's agents get dispatched from**,
and it sat six lines under this file's own sentence *"this partition is computed, not asserted… Run the
tool."* **The tool had not been re-run after the move.**

```bash
python3 scripts/check_readability_census.py partition --groups 10
```

**It prints the groups and asserts no file appears twice before printing.** ⚠️ **Generate it at dispatch
time and paste it into the briefs, never into this file** — a partition committed to a plan is a
partition that goes stale the moment anyone moves a marker, which is precisely what this wave did.

⚠️ **Re-generate before dispatching rather than reading this table.** Three of these files were being
written by a live agent when the census ran, and **a partition of a tree that has moved is a partition
of nothing.**

⚠️ **`rink_map.md` (group 03) is the one to brief differently.** All 17 of its markers are on the old
side and it is the document most likely to be **correct as it stands** — an orientation map's job is
to give the reader the frame first. **Brief that group to expect to move few or none.**

## Target information architecture

Implement the following conceptual layers. Exact component names may differ, but
the distinction must remain visible in both HTML and audio decisions:

1. **Core principles:** the small, prioritised set of cross-scenario ideas that
   guide decisions throughout hockey. Explain each in plain language before
   introducing position-specific or system-specific detail.
2. **Key focus:** the simple principle and the immediate action that works for
   beginners and experienced players alike.
3. **Simple summary:** a short recap of the key focus points, including any
   condition that must not be separated from the instruction.
4. **Recognise it:** the visual, positional, or game cue that tells the reader
   when the principle applies.
5. **Understand it:** a clear explanation and a small number of worked examples,
   written for passive reading and listening rather than classroom testing.
6. **If your team differs:** named system alternatives and local rule-set scope.
7. **Go deeper:** detailed evidence, rule comparisons, edge cases, provenance,
   and technical full-ice application.

Do not hide a safety warning, medical restriction, rule exception, applicability
condition, or honest evidence limit merely to make a page look short. Any
condition needed to act safely or legally must appear in the same visible and
spoken unit as the instruction. Only rationale, further examples, provenance,
and non-essential technical detail may be deferred.

### Speech contract

Use explicit Markdown headings or a reviewed metadata marker for the layers; do
not rely on CSS `details`, visual collapse, or a table of contents to define the
audio order. The speech renderer must emit the source in this order: Core
principle/Key focus, Simple summary, Recognition cues, explanation and worked
examples, then deeper detail. A collapsed visual section is still spoken unless
the renderer's behaviour is deliberately changed and tested. For each pilot,
save the extracted spoken units and verify that every required condition remains
in the same unit as its instruction. Audio duration and content metadata must
refer to that same generated revision.

The local NotebookLM generation, batching, download, conversion, retry, and
provenance workflow is specified separately in
`project/plans/PODCAST_AUTOMATION_LOCAL.md`; this readability plan owns only the
audio learning contract and whether pilot audio is current.

## Phase 1: build the learning model before rewriting prose

### Deliverables

- Inventory the corpus for recurring decision principles, then reduce the list to
  a small, prioritised set. The inventory must read all 38 documents and record
  each candidate's exact file, section, wording, and surrounding qualifiers.
  Classify each candidate as `fundamental-principle`, `rule-dependent`,
  `safety-constraint`, `system-convention`, `local-practice`, or
  `evidence-backed-observation`. Do not invent principles from memory or promote
  a coaching preference to a universal law. For each candidate record its owning
  document, evidence, exceptions, realistic alternatives, and the decisions it
  changes. Keep a rejected-candidate log explaining why a candidate was narrowed,
  excluded, or left as a local choice.
- Create a principles index or landing page that presents each accepted principle
  in the same format: plain-language statement, why it matters, what to notice,
  what to do, one worked example, and links to beginner and deeper applications.
  The first screen must be readable by a U10 player or parent; adult detail comes
  after the principle, not before it.
- Store the index as the single source of truth in
  `content/foundation/core_principles.md`, add it exactly once to
  `site/src/data/structure.json`, and give it a stable document ID and normal
  generated route. The coordinator owns the index's metadata, route, and audio
  decision; content agents may propose principle evidence but may not create a
  competing copy in site data.
- Tag or link relevant sections, summaries, and diagrams to the principle they
  teach. A principle link must not replace the local safety, rule-set, or system
  qualification.
- Build a principle-to-corpus matrix covering every position, system, technique,
  Hockey-IQ, practice, and relevant off-ice explanation. Each row records the
  application, why the principle matters there, the scope qualifier, the link to
  the principle, and an explicit `not applicable` reason where appropriate.
  Complete the matrix for each release scope; do not treat a three-context sample
  as proof of corpus coverage.
- Define and review the metadata schema before populating it. In release one,
  populate only the two pilot documents and the principles index; leave all other
  documents explicitly unclassified rather than inferring labels. Later waves
  may classify the remaining documents with the same review requirements.
  Never turn metadata into an unreviewed factual layer.
  At minimum distinguish:
  `readerAudience`, `skillLevel`, `contentType`, `prerequisites`,
  `readingMinutes`, `audioMinutes`, `ageApplicability`, `leagueApplicability`,
  `contactScope`, `supervisionRequired`, `parentRequired`, `safetyCritical`,
  and `audioMode`, plus per-field `owner`, `reviewer`, `status`, `evidence`, and
  `revalidateAfter` where a field concerns age, league, safety, supervision, or
  audio availability.
- Use controlled values such as `u10-player`, `u10-parent`, `youth-player`,
  `adult-beginner`, `adult-rec`, `coach`, `all-players`; `foundation`,
  `developing`, `detailed`,
  `reference`; and `lesson`, `rules`, `glossary`, `reference`. Do not create
  `u10-safe` as a general label.
- Require a separate `scopeClass` metadata value from the classification above.
  A principle cannot enter the index without its scope class, owner, evidence or
  disclosure, exceptions, realistic alternatives, and required coach/league
  wording where applicable.
- A U10 label describes the intended reader or age applicability only after a
  named safety reviewer verifies the exact jurisdiction, contact rules,
  equipment assumptions, and supervision context. Where the league is unknown,
  say to ask the coach or association. Do not infer safety from an existing
  drill or from adult material.
- Make the homepage offer explicit entry points: U10/player-parent, adult
  beginner, adult recreational detail, changing position, and watch-and-learn.
  Keep a route for readers who want the complete reference.
- Make “Core principles” a first-class entry point on the homepage and in the
  beginner pathways, while retaining the complete document catalogue for readers
  who prefer reference navigation.
- Promote the four routes already in
  `content/getting-started/getting_started.md:31-108` into first-class
  navigation or pathway data rather than leaving them buried in one long page.
- Add pathway-aware next steps and prerequisites. Do not rely on the global
  document order or `PrevNext` alone.
- Define the pathway contract before implementing it: stable pathway IDs, ordered
  document/principle IDs, audience labels, prerequisites, URL/deep-link format,
  no-JavaScript fallback, persistence/return-to-catalogue behaviour, search
  ranking, and keyboard interaction.
- Add filters or labels to hubs and search so a U10 reader is not shown advanced
  systems with the same visual priority as a first-session lesson.

### Files likely involved

`site/src/pages/index.astro`, `site/src/data/structure.json`,
`site/src/data/nav.ts`, `site/src/content.config.ts`,
`site/scripts/extract-meta.mjs`, document layout/header components, hub/search
components, and a new maintained metadata manifest if that is safer than
frontmatter. Keep the source-of-truth decision documented in the implementation
PR/review record.

The principles index also requires a normal Markdown source, a structure entry,
generated metadata, stable links, and an explicit audio mode. If it has no episode
in the first release, all audio-facing pointers must call it a reading-only
reference; do not imply that the listener can hear it.

### Acceptance criteria

- A new U10 reader can identify the next three actions without opening the full
  catalogue, in a named task test recorded by the site reviewer.
- A new reader can reach the core principles before advanced systems and can state
  what each principle means in practical terms without reading a long reference
  page. An adult reader can follow each principle to multiple full-ice
  applications and technical explanations.
- The pilot defines and meets a low-effort budget: maximum primary-path readable
  words, listening minutes, headings, clicks, and vertical distance to the first
  actionable instruction. The measurement states whether figures, facts,
  warnings, and glossary links count. HTML and audio budgets are measured
  separately, not inferred from one another.
- Unless a documented safety requirement makes it impossible, the first-release
  default target is no more than 600 primary-path words, 5 minutes of audio, five
  primary-path headings, three clicks from the homepage, and one viewport or 200
  words before the first actionable instruction. Required warnings and
  applicability conditions are included, not excluded to meet the target; any
  exception requires a written reason.
- The site reviewer runs one navigation task for each required entry point:
  U10/player-parent, adult beginner, adult recreational detail, changing
  position, watch-and-learn, and complete reference. The complete catalogue,
  search, hub filters, and adult-depth links remain discoverable.
- An adult reader can reach detailed material without a beginner route becoming
  the only route.
- The two pilot documents and principles index have explicit audience,
  applicability, level, and content-type decisions. All other documents are
  explicitly marked unclassified or outside release-one scope.
- The principle-to-corpus matrix is complete for the release scope, and every
  changed practice, position, system, and technique section either links its
  principle with a rationale and qualifier or records why no principle applies.
- Existing links and document IDs remain stable unless a redirect is added.
- Metadata has an owner and reviewer status. It does not assert a hockey fact,
  rule, safety claim, age applicability, league applicability, or prevalence
  claim that is not reviewed. `readingMinutes` and `audioMinutes` use documented
  separate measurements: rendered readable-word count divided by the chosen
  reading rate, and actual audio duration respectively.
- The first release is bounded to the metadata schema, homepage/pathway routing,
  a principles index containing only reviewed principles, and no more than two
  pilot documents. Do not begin the full-corpus rewrite,
  quiz system, practice-plan catalogue, or audio redesign until that release
  passes review and has a recorded go/no-go decision.
- The primary pilot path is fully understandable without answering, clicking to
  reveal an answer, or performing an activity. Optional exercises remain visibly
  and audibly optional.
- A fresh content review confirms that the primary path uses direct,
  authoritative teaching language: supported conclusions and actions come first,
  useful evidence is attached where it matters, and verification-process history
  is absent unless it changes the reader's decision. Every retained uncertainty
  is concise, reader-facing, materially relevant, and preserved in the required
  spoken/summary layers.

## Phase 2: create a short primary path inside long documents

Do not rewrite every page at once. The first release pilots only these two
documents:

- `content/getting-started/getting_started.md`, for the U10/parent and adult
  beginner entry path;
- `content/foundation/rules_primer.md`, for shared principles plus unavoidable
  rule-set depth.

The principles index is a separate site/content deliverable in this release. Its
principles must be derived from the corpus and reviewed before publication. Do
not choose a fixed number or write a slogan list merely to fill a page.

After a separate go/no-go review, later waves may pilot
`content/positions/goaltender.md`, `content/technique/body_contact_and_battles.md`,
and `content/off-the-ice/practice_and_development.md`.

For each pilot:

1. Re-read the full surrounding section and re-derive every rule, safety,
   medical, age, and evidence claim from its primary source. Existing prose is a
   hypothesis, not evidence.
2. Write a one-screen **Key focus** opening with the simple principles and
   immediate actions that work for both audiences.
3. Add a short **Simple summary** and **Recognition cues**. Do not make readers
   answer questions, complete an exercise, or prove comprehension.
4. Add one or two clearly labelled **worked examples** where they make the
   principle concrete. Explain the cue, the action, and the consequence.
5. Keep the minimum explanation and every condition needed to act safely or
   legally in the same visible and spoken unit as the instruction.
6. Put rationale, detailed rule comparisons, research methodology, edition
   archaeology, and non-essential alternatives under clearly named deeper
   sections or linked reference documents.
7. Rewrite in an authoritative voice: say what the reader should understand and
   do before explaining why. Add evidence or a reference when it materially
   supports the instruction; do not lead with research history or the fact that
   an agent searched for a source.
8. Keep material uncertainty adjacent to the claim in one concise reader-facing
   disclosure. Move extended source provenance, search history, and verification
   mechanics to the Sources/reference layer. Do not remove a disclosure when it
   changes how the reader should weigh or apply the claim.
9. Make Common Mistakes and Key Takeaways short, memorable, and actionable;
   retain their corrective counterweights and scope qualifiers.
10. Compare the facts block with the new body and summaries independently. The
   facts layer is a separate spoken layer, not a reason to assume body coverage.
11. Build a propagation matrix for each changed principle: body, facts or an
   explicit no-facts decision, Common Mistakes, Key Takeaways, diagrams/captions,
   sibling documents, source trailer, and spoken output. No row may be marked
   complete from a document-level grep alone.
12. Measure the new primary path in readable words, headings, key principles,
    and separate reading/audio time. Report what was reduced and what was
    deliberately retained.

Do not make self-tests, interactive quizzes, scenario cards, or practice cards a
default pattern. They may be proposed later only where a reviewer demonstrates
that passive explanation cannot communicate the concept, and they require their
own accessibility and audio treatment.

For each accepted core principle, run a transfer audit across at least three
contexts, such as a position page, a team-system page, and a technique or
hockey-IQ page. Confirm that the principle remains true at that level of
generality, identify where it needs a scope qualifier, and show how the player's
action changes. If it does not survive that audit, narrow it or leave it as a
local coaching choice. The index must not flatten meaningful differences between
systems, rulebooks, ages, or leagues.

### Candidate treatments by content family

- `rules_primer.md`: short first-game rules path plus optional rule-set
  reference. Keep every safety-bearing divergence and edition scope.
- `rink_map.md`: simple labelled orientation map and unfamiliar-rink checklist
  first; exact dimensions and source discussion later.
- `language_and_glossary.md`: short lookup definitions first; detailed
  distinctions and evidence in expandable/reference content. Add missing
  headwords only after checking all usages and the owning document.
- `uk_rules.md`: “before your first British game” checklist first; governance,
  amendment history, and edition comparison later.
- `on_ice_communication.md`: compact starter call set first; detailed
  multi-book screener/legal material later.
- `center.md`, `winger.md`, `defender.md`: retain the shared zone/situation
  skeleton but lead each situation with recognise/do/avoid. Avoid repeating
  full rule explanations across positions.
- `goaltender.md`: keep core technique, communication, and safety in the main
  route; make long rule comparisons an optional reference layer.
- `body_contact_and_battles.md`: safe pre-contact principles and recognition
  cues first; detailed jurisdictional penalties later.
- `shooting.md`, `puck_handling.md`, `skating.md`,
  `passing_and_receiving.md`: mechanics and simple execution cues before
  research and legal detours; leave optional drills secondary.
- `playing_without_the_puck.md`, `risk_management.md`, `time_and_space.md`,
  `scanning_and_anticipation.md`, `puck_support_and_spacing.md`: one decision
  model and one worked example first; avoid teaching several equivalent models
  at the same prominence.
- `getting_started.md`, `equipment.md`, `conditioning_and_recovery.md`,
  `practice_and_development.md`, `how_to_watch_hockey.md`,
  `team_play_and_culture.md`, `mental_game.md`: put the immediate action,
  checklist, routine, or plan before governance, physiology, statistics, and
  research detail.

These are review targets, not permission to apply blanket edits. Every changed
content file needs a fresh reading of the surrounding section and its summary
layers.

## Phase 3: use the right teaching mechanism

### Diagrams

Diagrams are not decoration, repetition, or a way to make a long page feel
illustrated. Keep one only when the picture gives the reader spatial, visual, or
comparative information more quickly and accurately than prose alone. A diagram
that merely repeats a paragraph, shows an obvious location, or needs a long
caption to explain its meaning is a candidate for consolidation, replacement,
or retirement.

For every diagram in the first-release pilots and principles index, record the
one learner question it answers, the
visual information it adds beyond adjacent prose, its audience and prerequisites,
whether it shows a location/relationship/sequence/choice/action, the first thing
a beginner should notice, all Markdown hosts, and whether it remains useful when
its caption is reduced to its essential point. Check it at 375px, desktop width,
and in the spoken description without the image.

For each pilot, create a diagram progression map where diagrams are used:
overview first, then notation/vocabulary, then relationship or choice, then a
concrete worked example, with adult detail last. Each figure records its host
section, prerequisite, first-notice cue, and why prose, video, or demonstration
would not serve that point better. Do not require a diagram for a concept that
has no useful visual model.

Score diagrams by learner value, not by existence. In the first release, retain
high-value diagrams, combine near-duplicates, redraw ambiguous diagrams, and
retire low-value ones only within those pilots and the principles index. Check
every host, inbound link, generated asset, caption, description, facts/summary
reference, and audio consequence before retirement. Defer the corpus-wide
diagram census to a later release. Retirement is a content/design change: record
why the picture added no unique value and have the content, facts, safety, and
site reviewers inspect the resulting page.

Audit and improve the remaining diagrams in this order:

1. Safety-critical geometry: offside skate/blue-line contact, faceoff
   encroachment, icing timing, crease boundaries, and goalkeeper restricted
   areas. If the image cannot prove the distinction, use blade-level close-ups,
   two-panel comparisons, or a sequence. State exactly what the picture does and
   does not establish.
2. Beginner orientation: one clean rink map and a minimal notation key before
   isolated overlapping-area diagrams.
3. Action sequences: two-to-four labelled frames for pivots, scanning,
   receiving, support arrival, coverage handoffs, regrouping, and recovery.
   Label `before/after`, `choice A/choice B`, or `step 1/step 2` explicitly so
   adjacent alternatives are not mistaken for a sequence.
4. Adult detail: show recognition cues and breakdown/recovery, not only ideal
   formations. A static formation is insufficient where the lesson is timing or
   role transfer.

Current coverage is concentrated in rink maps and systems, while skating,
passing, shooting, equipment, and beginner procedures have few or no diagrams.
Do not fill those gaps with top-down rink plans when a coach demonstration,
photo sequence, short video, or body-position illustration is the correct medium.

### Rink-map value audit

Treat the diagrams in `content/foundation/rink_map.md` as a later, separately
bounded value audit, not as evidence that more diagrams are needed in release
one. Identify the single clean
orientation map a new player needs. Classify each additional vocabulary or area
diagram as essential because it shows a boundary or relationship the overview
cannot, useful as an isolated close-up because overlapping areas make the
overview unreadable, useful only as adult/reference detail, or redundant/too
obvious to justify its own figure.

Do not shade overlapping regions merely to add emphasis. Do not invent an extent
for an unbounded term. Preserve owning geometry and all safety/rule qualifications.
The likely treatment for low-value rink-map figures is a smaller set of
high-value diagrams plus a concise vocabulary key, not a larger set of equally
weighted pictures. Validate that a beginner can orient on the first map before
encountering detailed close-ups.

Review captions as learner-facing and spoken content. They are currently often
paragraphs rather than captions. Each diagram should have:

- a concise first teaching sentence naming the visual takeaway in concrete
  language and including every condition needed to act safely or legally;
- optional detail separated from the first two, never packed into the opening
  sentence;
- accessible `describe` text that matches the actual image;
- a clear indication when the image is a frozen moment rather than movement.

Use a caption budget as a design target: normally one short sentence, or two
short sentences only when the second is required to complete the safe/legal
instruction. The first sentence must stand alone for a U10 reader hearing it
alone. Measure caption length and exceptions rather than imposing a blind
character limit. Several rulebooks, alternatives, rationale, or provenance
belong beside the diagram as deeper explanation. Never move a required condition
to a later sentence, collapsed element, tooltip, source note, or visual-only
description.

Keep `caption` and `describe` deliberately different: `caption` explains the
teaching point and what to notice; `describe` states what is visibly drawn,
including players, puck, lines, arrows, regions, labels, orientation, and whether
the frame is static. Neither may claim the image proves something it cannot show.
Plan-view glyphs do not prove skate contact, facing, head position, timing, force,
or legality; use a close-up, sequence, demonstration, or explicit limitation.

For every changed diagram spec, enumerate every Markdown host, read the caption
in each host's surrounding context, and review the generated `caption`,
`describe`, SVG, and spoken extraction. A caption that is correct at its owner
can still be misleading when borrowed elsewhere.

The diagram acceptance checklist must also cover accessible name, description
accuracy, caption independence, host voice, focus order, scroll announcement,
contrast, print/PDF output, reduced-motion behaviour if motion is introduced,
and removal of orphaned generated assets and manifest entries when a diagram is
retired.

Do not change a caption in `site/src/data/diagrams.json` by hand if it is a build
product. Edit the owning `site/src/diagrams/*.mjs`, rebuild diagrams, and inspect
the generated output. Shared diagram tools and output directories are
coordinator-owned and must not be edited concurrently.

### Techniques beyond diagrams

The primary teaching style is explanation for passive reading and listening. Use
these patterns in this order:

- **Progressive disclosure:** Key focus, Simple summary, Recognition cues,
  Understand it, Team/rule variation, Go deeper.
- **Clear explanations:** one principle per paragraph, concrete verbs, defined
  terms on first use, and the action before the rationale.
- **Recognition cues:** what the player can see, hear, or feel before acting,
  especially on adult system pages where a static formation is not enough.
- **Worked examples:** one successful and, only where useful, one failed decision;
  explain the cue, action, and consequence rather than asking the reader to solve
  it.
- **Short summaries:** repeat the key principles in plain language. Summaries are
  for recall, not a second technical essay; choose omissions by consequence,
  prioritising safety, penalties, applicability, then instructional value.
- **Short checklists:** first session, equipment, bench/change, warm-up,
  concussion response, game-day preparation, and “what to ask your coach.” A
  checklist must remain explanatory and must not omit its safety conditions.
- **Glossary links:** short first-use definitions with role-specific examples;
  preserve “you may hear this differently” scope notes.
- **Optional activities:** existing drills, practice plans, scenarios, or
  self-tests are secondary material, not the default page structure. Add or
  restructure them only when the activity is genuinely useful, age- and
  supervision-appropriate, reviewed by a coach/safety reviewer, and accessible
  to readers who skip it.
- **Audio chapters:** section timestamps, verbal signposting, and explicit
  warnings when a listener needs the picture. Every actionable permission,
  safety limit, rule-set scope, medical restriction, and honest evidence limit
  must occur in the same spoken unit as the instruction. Audio is a companion,
  not a reason to put a required condition in a visual-only disclosure.

Any new drill, progression, scenario, or practice plan requires a named coach or
safety review covering age, contact rules, equipment, rink size, staffing,
supervision, and the “do not attempt without…” condition. Existing presence in a
document is not evidence that an activity is safe for U10.

## Phase 4: browser, audio, and accessibility validation

After the pilot, inspect the real site at desktop and mobile widths. Check:

- homepage pathway clarity;
- whether beginner and detail labels are understandable without project jargon;
- long-page navigation and whether the TOC prioritises rather than overwhelms;
- facts blocks, tables, diagrams, warnings, summaries, and optional activities;
- horizontal diagram scrolling, keyboard reachability, focus names, and contrast;
- whether captions remain readable beside the image;
- audio section signposting and what a listener hears without a screen;
- search and related links for pathway consistency.

Use a named task script, not a general impression. For the first release, use at
least one U10 player/parent pair, one older-youth or teenage-beginner reviewer,
one adult beginner, one adult recreational player, one experienced reference
reader, and one coach. Proxy reviewers must be labelled as proxies; a parent or
coach is not evidence of a child's comprehension. This is qualitative evidence,
not a population claim. Give each reviewer the same tasks:

1. Find the first three actions before a first session without using search.
2. Explain one core principle and name one recognition cue after reading only the
   key-focus and summary layer.
3. Find the adult technical explanation and a rule/system qualification.
4. Listen to the pilot's opening and identify the same principle and every
   required safety/legal condition.

Pass only if every stratum completes tasks 1 and 2 without more than one prompt,
can reach task 3, and no reviewer makes an unsafe interpretation. Add a novel,
unpublished situation to the review and score principle recognition, action,
rationale, and handling of system/rule variation; this is a reviewer test, not a
public quiz. Record the script, expected answers, prompts, time limits, outcomes,
confusion, unsafe interpretations, and unresolved issues. Test at 375px,
768px, and desktop width, including keyboard focus and a screen-reader pass over
facts, warnings, diagrams, and disclosures. These tests are not a substitute for
rules or safety review.

Before any pathway links `language_and_glossary`, either provide a reviewed audio
episode or label the destination and every audio-facing pointer explicitly as a
reading-only glossary. Do not leave this as an implementation-time choice.

## Execution waves and ownership

Use separate agents for disjoint file sets. Suggested waves for the bounded first
release:

1. Coordinator: baseline, metadata design, shared site components, and plan/review
   records.
2. Agent A: `getting_started.md` content only.
3. Agent B: `rules_primer.md` content only.
4. Coordinator: metadata, homepage/pathway, shared renderer, and navigation only.
5. Agent C: `content/foundation/core_principles.md` only, after the coordinator
   approves its source-of-truth schema. Its principles are reviewed as claims,
   not treated as slogans.
6. Fresh reviewers: rules/source, content, facts, safety, and rendered site. No
   author self-certification.
7. Coordinator: final staged-tree audit and `commit-gate` review. The review
   record maps every changed source and generated output to C3-C11, including
   metadata, principles, captions, audio, routing, and propagation.

Later releases may use disjoint foundation, positions, systems, technique/IQ,
off-the-ice, and diagram-source waves, but only after the first release's go/no-go
record. No checker, renderer, diagram build, audio render, or site build may run
while an agent is editing its inputs. Use a unique private scratch directory per
agent. Do not change shared tools during a live wave. Do not stage until an agent
is permanently finished; re-check that the index and working tree match.

Before each wave, check `git status`, ownership, and current HEAD. Before staging,
ensure no file is `MM` or being edited by a live agent. Re-read complete changed
files, not only hunks, to catch contradictions between individually correct
sentences. If site inputs differ from the staged tree, reconstruct and build the
staged tree in isolation before the gate.

## Required verification

For content changes, run all applicable gates after all agents finish and after
the final content edit:

```bash
python3 scripts/check_links.py --quiet
python3 scripts/check_facts.py
python3 scripts/check_absolutes.py
python3 scripts/check_geometry.py
python3 scripts/check_secrets.py
python3 scripts/check_counts.py
```

Run the worklists and read every hit rather than sweeping them:

```bash
python3 scripts/check_external_links.py
python3 scripts/check_rule_scope.py
python3 scripts/check_pointers.py
python3 scripts/check_chunk_splits.py
python3 scripts/check_caption_negations.py
python3 scripts/check_zones.py
python3 scripts/check_tables.py
python3 scripts/check_disclosures.py
python3 scripts/check_diagram_quotes.py
python3 scripts/check_chunk_tails.py
python3 scripts/check_leaders.py
python3 scripts/check_plan_rows.py
```

If any `site/src/diagrams/*.mjs` changes, run the diagram build before
`check_absolutes.py`; inspect the generated captions and SVGs. Use the absolute
Node/npm binaries documented in `CLAUDE.md`; verify the real exit code and fresh
`site/dist` output. The full build must clear Astro caches. Do not run concurrent
diagram builds.

Every substantive content change requires a review record under
`project/reviews/` naming changed files, measurements, reviewers, findings,
fixes, coverage, and **what the method could not have found**. The commit gate
must review the text now staged, not an earlier version. The record must include
a C3–C11 coverage table mapping each changed file and generated output to
`rules-verifier`, `source-verifier`, `content-reviewer`, `facts-reviewer`,
`safety-reviewer`, and `site-reviewer`, or explicitly mark a dimension out of
scope with its reason. It must include the propagation matrix for each changed
principle and confirm that the audio output was checked where applicable.

## Definition of done

- A beginner can choose a relevant path and reach an actionable first lesson
  without browsing all 38 documents.
- The site has a reviewed core-principles entry point. Each principle is stated
  plainly first, followed by a short summary, recognition cues, and worked
  applications; adult readers can continue to deeper full-ice and technical
  material.
- Adult readers can reach preserved depth without the beginner path carrying all
  rule, evidence, and historical detail.
- Long documents have measured learner paths and explicit deeper/reference
  boundaries; no blanket word-count target was applied.
- Diagrams are added only where spatial information is useful, and safety-critical
  geometry is not delegated to captions when the picture cannot show it.
- Physical skills use an appropriate medium such as demonstration, sequence,
  drill, or video, not just a top-down route diagram.
- Existing facts, safety warnings, honest disclosures, and rule-set qualifiers
  remain correct and are present in every required spoken/summary layer.
- Every retained diagram has a recorded learner question and unique visual value;
  every retired or consolidated diagram has a recorded reason and host/link
  audit. Captions and descriptions are concise, accurate, accessible, and
  understandable without hidden prose.
- Pathways, metadata, progressive sections, diagrams, audio, keyboard behaviour,
  and mobile layout pass browser inspection. Optional activities are not a
  completion dependency for the first release.
- Real coach/player feedback has been recorded, with unresolved questions kept
  visible rather than converted into confident claims.
- All applicable mechanical gates pass; fresh adversarial review is recorded; no
  deploy or push occurs without explicit approval.

## Known limits

The initial review was source- and structure-based. It did not establish that a
U10 player can understand a diagram, that a particular drill works on ice, that
an adult rec player prefers a given information architecture, or that the audio
is comfortable to hear end to end. Those are validation tasks for the
implementation, not assumptions to encode as facts.
