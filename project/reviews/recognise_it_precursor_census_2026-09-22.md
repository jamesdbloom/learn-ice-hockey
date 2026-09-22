# Does "Recognise it" material already exist? Mostly no — and the check that says so has a stated limit

**22 September 2026.** Answers the blocking question on the readability-layering row in
`project/plans/OPEN_ITEMS.md`: before adding a "Recognise it" layer, find out whether the
material already exists in body prose under other names. If it did, the work would be
**promoting a heading**; if it did not, the work is **writing**. The row said nothing should
be dispatched until this was answered.

**Answer: for the majority of the corpus it does not exist, in any form.** The work is writing,
and the cost estimate in the approved approach was optimistic.

## What was measured

Two passes over all 39 documents.

**Headings**, at every level, matching recognition vocabulary (`recognis*`, `how to tell`,
`how you know`, `reading the/a`, `spotting`, `the signals you`, `cues`):

| | Documents |
|---|---|
| **A. A `##`-level cue section already** | **5** |
| **B. Only `###`-level cue sections** | **6** |
| **C. No cue heading at any level** | **28** |

Group A, which are the models to follow:

- `systems/defensive_zone_coverage.md` — **`## How to Tell Which System Your Team Plays`**
- `systems/neutral_zone_systems.md` — `## Reading the neutral zone while you carry the puck`
- `getting-started/getting_started.md` — `## How to tell`
- `systems/forechecking_systems.md` — `## Reading the Opposition's Forecheck`
- `hockey-iq/scanning_and_anticipation.md` — `## Part 2 — Anticipation: reading the play`

**Prose**, for cue sentences with no heading. A broad pattern (17 alternations: *look for*,
*watch the*, *tells you*, *the moment*, *ask yourself* …) returned **530 lines across all 39
documents, none with zero** — which looked like the optimistic answer. ⚠️ **It was not.** A
random sample of 16, read in place, was roughly **4–5 genuine** and the rest false positives:
*"the only length the book recognises"* is rulebook prose, *"at the moment the puck reaches
them"* is technique timing, and several were penalty citations or `§` pointer fragments. A
high-precision pattern returns **49 corpus-wide**, and **15 of the 28 documents in group C have
zero**.

**Contiguity**, which decides promotable-versus-writable: grouping cue lines within six lines of
each other found **7 clusters of three or more, across 6 documents**. Reading them, at least one
is not a recognition block at all — `puck_support_and_spacing.md:596` is a *watching exercise*
(«Stop watching the puck… then look for these») teaching an observation drill, not a cue for when
a principle applies.

## Why gathering the scattered sentences would be the wrong repair

The genuine scattered cues are **welded to their instruction**, which is the correct state.
`positions/winger.md:148`: *"It is tempting to chase the puck into the corner when you see your
team battling there. In a collapse system, resist it."* Cue and instruction in one breath.

⚠️ **Extracting that into a separate "Recognise it" section would separate the cue from the
instruction** — which is precisely what the design spec forbids: *"Any condition needed to act
safely or legally must appear in the same visible and spoken unit as the instruction."* And each
layer is voiced alone with a 300 ms break either side, so the separation is worse in audio than
on the page. **A gathering pass would manufacture the defect the layer exists to prevent.**

## What this changes

- **Do not roll "Recognise it" to 39 documents.** For 28 of them it is new writing, and 15 have
  no precursor material at all.
- **Start from group A.** Five documents already do this well at `##` level;
  `defensive_zone_coverage.md`'s section is the best in the corpus and should be the named
  pattern — it asks the coach first, then gives five observable tells, and it serves the cardinal
  rule at the same time.
- **Promote group B's `###` sections to `##` only where the document teaches a decision** — a
  cheap, six-document win that needs no new prose.
- **For group C, write only where a cue is safety-relevant or where a coaching choice could be
  read as a law.** That is a much smaller set than 28 and has not been enumerated.

## ⚠️ What this method could not have found, and it matters

**The counts are lexical, and absence of a matched phrase is not absence of the material.**
`winger.md:148` above is genuine recognition prose and matches **none** of the high-precision
patterns — it says *"It is tempting to…"*, which no cue vocabulary would catch. So **49 is a
floor, not a census**, and group C's "zero" means "zero of the phrasings I searched for."

This is the corpus's own standing lesson applied to itself: *an empty extraction is not an
absence.* A document in group C with a zero count has **not** been shown to lack cue material;
it has been shown not to use cue vocabulary. **Before writing a new section into any group C
document, read it** — the material may be there in a phrasing nobody thought to grep for, and
writing a second copy would be the restatement defect this session has just made the
highest-priority focus.

Also not reached:

- **Whether the five group A sections are actually good**, beyond the two read in full here.
- **Whether `scanning_and_anticipation.md` needs the layer at all** — the whole document is
  recognition, and a "Recognise it" heading inside it may be meaningless.
- **The facts layer.** Cue material voiced in a ` ```facts ` line (`Position: Both wingers are
  already high — two outlets the moment you win the puck`) was counted as prose here and not
  analysed as its own layer.
