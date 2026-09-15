# The diagram placement rule, reversed — 14 September 2026

A record of a **rule change and its evidence**, not of a corpus edit. **No file under `content/`
changed.** What changed is [`content_style_guide.md`](../content_style_guide.md)'s placement rule and
the rows in [`OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md) that will drive the work it unblocks.

---

## What the owner instructed, and what it supersedes

> *"diagrams should follow the content discussing them in most cases as putting the diagram first is
> out of context and hard for the reader to understand, the exception being where we can present an
> overview or summary diagram that help the reader to understand the text by seeing it first."*

This supersedes an earlier owner instruction — *"diagrams should be at the start of sections"* — and
the whole style-guide subsection written to implement it. ⚠️ **The superseded rule is kept with its
history rather than deleted**, because the corpus was moved to comply with it and a reader of the
style guide needs to know why it looks the way it does.

**Neither instruction was careless.** *"At the head of the unit"* optimised for **finding** the
picture; this one optimises for **understanding** it.

---

## The census, and every figure in it re-derived by a commit gate

| | Measured | Gate |
|---|---|---|
| diagram markers (`![](diagram:slug)`) | **331** | ✅ |
| immediately after a heading | **239** | ✅ |
| not immediately after a heading | **92** | ✅ |
| heading → diagram → ` ```facts ` block | **178** | ✅ |
| after prose | **29** | ✅ |
| after another marker | **58** | ✅ |
| after a list / after a closed fence | **3 / 2** | ✅ |
| immediately **before** a facts block | **209** | ✅ |

58 + 29 + 3 + 2 = 92. **Eight figures, eight independent matches.**

⚠️ **The "after prose" figure needs its definition stated or it flatters the corpus.** An earlier
census in `OPEN_ITEMS.md` recorded *"after prose: 90 (28%)"* on 325 markers — and 90 = 325 − 235, so
that census's *"after prose"* meant *"not directly under a heading"*. On today's corpus the same
definition gives 92. **The older measurement is not wrong, it is differently defined**, and a gate
checked that characterisation specifically rather than taking it.

---

## The sub-question that would have blocked 239 moves

**Does the marker go above or below the ` ```facts ` block?** 209 sat immediately before one, and
moving a diagram below the prose usually moves it below the block too.

**Settled by measurement: no facts line in the corpus refers to a diagram.** All 5,552 lines scanned
with `\b(diagram|picture|figure|the image)\b` — **exactly 30 hits, all read, all false positives.**
So there is nothing to strand, and the backward-reference constraint does not arise between those two
layers. **The marker goes below the block.**

⚠️ **The first published version of that enumeration described 25 of the 30 and a gate blocked on
it.** It gave two kinds — *"figure"* as a statistic, *"picture"* as a mental one — and missed a
third: **"figure" as a drill shape**, at `puck_handling.md:882` and `:884` and `skating.md:165`,
`:480` and `:769`. **Five of thirty — 17% of the sole published evidence for moving 209 markers,
mis-described in the governing document that carries it.** The ruling survived; its support was
inaccurate, in exactly the shape the gate spec names.

⚠️ **This is a coordinator's ruling on the owner's principle, not a second owner instruction**, and it
falls if the scan is wrong.

---

## ⚠️ Two figures were published with no derivation and BOTH were removed

*"125 matched a picture-ish word"* (style guide) and *"a corpus-wide sweep for exemption statements
(58 of them)"* (plan). **Neither recorded the pattern that produced it**, so neither could be
re-derived: a gate's broad picture-ish pattern returned **64**, not 125, and its exemption sweep
returned **94**, not 58.

**Neither figure was load-bearing and both are gone.** ⚠️ **The point is where they were written: the
two documents that own this repository's *"a number copied out of its owner goes stale silently"*
doctrine, one of them in the row that states it.** A figure with no recorded method is not a
measurement, it is a recollection.

---

## The constraints that survive the reversal, and why this cannot be swept

All three were found by doing the moves in the **other** direction, and they cut the same way in
either one:

- **Never between items of a real ordered list** — it renumbers the list in the audio.
- **A before/after or side-by-side pair moves together** — splitting breaks *"beside it"*.
- ⚠️ **A caption that refers to prose the move would strand stays where it is, and says so.**

⚠️ **The worked exception is itself a pair, and the first draft named only half of it** —
`rink_map.md` stacks `rink-map-neutral-zone` **and** `rink-map-end-zone-markings`, with prose opening
*"The sheet is drawn here in **two** pictures"*. Naming one would have contradicted the pair
constraint three paragraphs below it.

⚠️ **AN EARLIER VERSION OF THIS PARAGRAPH WAS WRONG IN BOTH ITS DIRECTION AND ITS METHOD**, and a
`content-reviewer` caught both. It read: *"47 of the 331 captions open with backward-referring
language and are the leave-it candidates."*

**The direction was inverted.** Under the SUPERSEDED rule — markers moving UP — a backward-referring
caption was the one that stranded. **Under the new rule it is the safest kind**, because its referent
stays above it. **The leave-it candidates in this direction are FORWARD-referring captions.**

**The method was unrecorded, which is the failure this record spends a section on.** The pattern was
`\b(above|earlier|previous|described|drawn here|as set out|the section|discussed)\b` over the first
400 characters, counted **per marker** rather than per caption — which is why the reviewer's
per-caption run returned a different figure and could not reproduce 47. Both are right: **47 of 331
markers, 29 of 204 captions.** A count with no stated unit is not a measurement either.

**Re-measured in the direction that now matters**, with the pattern recorded:
`\b(below|following|the next (one|diagram|picture)|everything below|what follows|coming up)\b` over
the first 400 characters returns **26 of 204 captions**. ⚠️ **Most are FALSE POSITIVES and a pattern
cannot tell them apart** — *"below the goal line"*, *"below the dots"*, *"coming up the far side"*
are spatial, not deictic. **Three look genuine on reading:** `forecheck-angling` (*"The skill
everything below assumes"*), `drill-execution-no-opponent` and `lane-jump-anticipation` (each *"the
next one"*).

**So the leave-it list is small and must be produced by reading, not by pattern.** Neither figure is
a work list; both are starting points.

---

## A collateral fix in the same file, and a measurement that closed it

`content_style_guide.md` read *"All 37 documents carry a Sources trailer"* against a 39-document
corpus. Measured: **34 documents end in an italic trailer paragraph, 5 in a bulleted italic list, 0
with neither.** So every document carries one.

The harder half — *"none of it is voiced"* — had been measured over 37 and the line was left claiming
only that. **A commit gate then closed it**, rendering all 39 through `md_to_speech.py --report`: the
renderer drops `sources-section` **39 times, once per document**, and no trailer's opening words
appear in any spoken chunk.

⚠️ **Its first attempt was a silent false pass** — CLI invoked positionally, exit 2 on all 39, no
output, and a grep that reported *"0 documents"*. **Same shape as the nvm trap in `CLAUDE.md`:
nothing in the output said "did not run."**

---

## ⚠️ A scope conflict between two governing documents, named rather than resolved

[`review_process.md:350`](../review_process.md) says: *"C3–C8 and C11 govern claims. They do not
govern … a commit that touches no file under `content/`."* **This change touches no `content/`
file, so on the repository's literal text C8 does not apply.** The brief overrode it on the ground
that a governing document is a force multiplier in both directions, and the gate applied the stricter
reading — **which is how this record came to exist at all.**

**The two documents disagree as written, and the next gate will land on the other side of it.** That
is an open row, not something to settle inside a review record.

---

---

## The `content-reviewer` pass, and the seven Majors it returned

**No Critical.** This is `project/`; nobody can be hurt, penalised or taught a wrong rule by it. The
reviewer said where it looked, so the nil return has a scope: a coaching choice stated as law, an
unscoped absolute, an unowned figure, a claim of verification not performed. ⚠️ **It named one item
that could BECOME critical — M2 below — because it would ship false sentences into a voiced corpus.**

**It refuted no premise of the brief.** The owner instruction, the superseded instruction, the
heading change, the ruling, the 30-hit evidence, the 32-document scope and the `rink_map.md` worked
exception all verified. ⚠️ **It found the further error the brief told it to assume — in a different
figure than the brief pointed at.**

### ⚠️ M1 — the rule did not decide the common case, and its tie-break had no input for ~96% of markers

The reviewer applied the rule to three real sections. It decided one and **abstained on two**, and
the abstention was structural: the tie-break's operational half was *"if the prose refers backward to
it"*, and **a corpus-wide scan found only 9–14 genuine deictic references in 331 sections.** *"A test
that abstains on the common case is not a test."*

**Repaired by replacing the test with one that has input on every marker:** is the caption's subject
the section's TITLE (overview, goes first) or ONE POINT inside it (goes after that point)? That
decides all three of the reviewer's cases. Also repaired: *"unit"* is now defined, *"after the
prose"* is disambiguated to the FIRST teaching passage rather than the end of the unit, and landing
immediately before the next heading is ruled out explicitly — **101 of 286 markers sat there before
the previous pass and 6 of 331 do now, and the default as written drove it back up.**

### ⚠️⚠️ M2 — the one constraint the reversal needs was missing, and ten live sites invert without it

The three inherited constraints were correctly generalised. **Nothing covered body prose pointing AT
the marker.** The reviewer verified ten sites verbatim across four documents, of which the sharpest
is `passing_and_receiving.md:589` — *"The first of the two pictures at the head of this section"* —
**which states the superseded rule in prose.**

⚠️ **This record had named the shape in its own *"could not have found"* section. That was not
enough: the style guide is the agent's only specification, so an agent working to spec would have
shipped ten false sentences.** A fourth constraint now carries the ten sites and the scan.

**And a negative worth keeping:** the `forecheck-212` chain cross-references *"the 2-1-2 above"* and
is NOT at risk, because every marker moves inside its own section and document order is preserved.

### ⚠️ M3 — the 58 was right and its description was wrong for 13 of them

*"58 preceded by another marker, i.e. the second or third picture of a block that a heading still
opens."* **45 are chained from a heading; 13 are chained from PROSE**, and those 13 are already
compliant. ⚠️ **This is the SECOND enumeration in this section to be right about its total and wrong
about its parts** — the first was the 30-hit facts scan, where five drill-shape hits were filed as
the wrong kind, caught by a commit gate. **Count, then describe each member; a total that checks out
is not evidence the description holds.** The guide now carries the split and the real job size: **284
candidates, 47 already compliant.**

### M4, M6 and four Minors — figures narrowed to what was measured

- **M4:** *"the two layers do not refer to each other at all"* was a bidirectional claim on a
  one-directional measurement. Captions → facts blocks was never measured and the reviewer could not
  cleanly separate caption strings from author comments. **Narrowed.**
- **M6:** *"the number that matters is 29"* — 4 of those follow a **bold pseudo-heading**, not
  explanatory prose. **25.**
- **A line number cited for `DROP_SECTION_HEADINGS` was stale** — in the paragraph that teaches
  exactly that failure. Now cited by constant name.
- ⚠️ **A diagram-hosting figure had gone stale for the THIRD time in one line** (*"82 of 198"*, and
  *"75 of 195"* before it, each *"re-derived against this commit"*; today **87 of 204**). **Replaced
  with its derivation.**
- **A 112-caption census figure** is left with its date rather than updated, because the findings
  under it record that census and re-pointing them at 204 captions would claim coverage nobody has.

### M5 — a live plan row contradicting the new rule, invisible to every checker

`OPEN_ITEMS.md:29` asked for a positions-page carve-out that **is now the general rule**, cited a
line number that has moved to a different section, and carried *"252 markers before a facts block"*
against a re-derived **209**. The reviewer called it *"the row most likely to reach the agent doing
the moves."* Superseded in place, keeping the reasoning — which **generalises into the new subject
test and was made here first**, before the owner's instruction existed.

⚠️ **Its dead pointer is written as inline code, so no version of `check_links.py` can ever see it
— backticked spans are masked deliberately.** Only an agent finds this class.

### On keeping the superseded rule

**Keep it, and move it.** The reviewer's objection was placement, not principle: a reader met 25
lines of history before the 12 lines of specification, so *"an agent skimming for its instructions
reads the superseded direction first, at length, in bold."* **The section is now operative rule
first, history last under its own heading.** Nothing deleted.

## What this method could not have found

- ⚠️ **The body-sentence gap is now CLOSED as a constraint and OPEN as a work list.** A
  `content-reviewer` scanned for deictic prose pointing at markers and verified ten sites, which are
  named in the style guide's fourth constraint. **But its scan found 25 candidate lines and it
  confirmed only 9–14 by reading** — nobody has read the rest, and a pattern cannot separate a
  spatial *"below the goal line"* from a deictic *"everything below"*.
- ⚠️ **The CAPTION direction is still unmeasured by reading.** 204 captions; a forward-reference
  pattern returns 26 and **most are spatial false positives**, with three genuine on inspection. The
  reviewer's own words: it found the breaking class *"by pattern, not by reading"*, judged perhaps
  six of 57 hits genuine by eye, **and did not read the other 51.**
- ⚠️⚠️ **THE RENDERER HAS NOT BEEN RUN, AND MOVING 284 MARKERS MOVES 284 CAPTION BLOCKS ACROSS
  SPEECH-CHUNK BOUNDARIES.** `check_chunk_splits.py` and `check_chunk_tails.py` exist and neither was
  run. **The shingle-probe argument in the style guide asserts the DIRECTION of that effect without
  measuring it** — it claims separating a caption from the facts lines can only reduce repetition
  risk. **Nobody has shown that.** This is the largest untested assumption behind the whole move.
- **Whether the reversal is right.** The owner's instruction is quoted, not verified. No checker, no
  grep and no gate can settle whether diagrams-after-prose is better for a reader, and **no reader
  has been tested.**
- **Anything already wrong in these two files** before this change — including 13 other broken links
  in `project/` that a gate found while checking this one, and the 1,400 lines of style guide nobody
  read.

---

## THE POSITIONS PAGES — 84 markers moved on the owner's instruction, 15 September 2026

**The owner asked why the diagrams on the positions pages arrive before the text. The answer was that
nothing had been moved: the rule was reversed in `content_style_guide.md:1430`, and the markers were
untouched.** **Three agents, disjoint file sets, 84 markers.**

| Document | Markers | Moved | Left |
|---|---:|---:|---:|
| `winger.md` | 27 | 26 | 1 |
| `goaltender.md` | 20 | 12 | **8** |
| `center.md` | 16 | **16** | 0 |
| `defender.md` | 15 | 13 | 2 |
| `switching_positions.md` | 6 | **6** | 0 |
| **total** | **84** | **73** | **11** |

**Corpus-wide the old side falls from 286 to 213.** `center.md` and `switching_positions.md` now read
*"already complies"* alongside `how_to_watch_hockey.md`.

### ⚠️ The verification is the part worth keeping

**All three agents proved the moves were PURE**, and each did it differently:

- **`winger.md`** — billed characters **160,399 → 160,399, identical**; `git diff -U0` filtered to **52
  added and 52 removed lines, every one a bare `![](diagram:…)` marker.**
- **`center.md`/`defender.md`** — billed characters identical in both, **plus a spoken-sentence multiset
  compared before and after: 0 added, 0 removed — a pure permutation.** Whole-file diff: 29 markers out,
  the same 29 back, **not one word of prose, fact, citation or caption altered**, and the fragile
  material byte-identical.
- **`goaltender.md`/`switching_positions.md`** — goaltender **186 chunks and 452,168 characters before
  and after, identical**; switching **150,642 → 150,608**, ⚠️ **a 34-character delta that is EXACTLY
  2 × the 17 characters of a `<speak>…</speak>` wrapper.**

⚠️ **One agent baselined against HEAD first and got a false 6,439-character delta**, because HEAD is
stale by the day's CARHA and faceoff work. **It re-baselined against the STAGED text.** ⚠️ **Baseline a
move against the index, not against HEAD, in any session that has already edited the file.**

### ⚠️ THE FOUR "INCONSISTENCIES" ARE THE RULE WORKING — do not sweep them

**A cross-document check found four diagrams placed differently in different documents.** ⚠️ **All four
are correct, and each was reasoned by the agent that left it:**

| Diagram | Placement | Why the difference is right |
|---|---|---|
| `defender-pair-overview` | HEAD in `defender.md`, moved in `switching_positions.md` | **Overview in one** — the caption's subject is `## Overview`'s own title — **illustration in the other**, where it draws bullet 2 only |
| `faceoff-dzone-alignment` | moved in `center.md` and `winger.md`, HEAD in `defender.md` | ⚠️ **`defender.md`'s faceoff section is one colon lead-in plus three bullets — every placement fails.** After the lead-in is still at head; after a bullet splits the list; after the last strands it before the next heading |
| `net-front-walk-out-direction` | moved in `defender.md`, HEAD in `goaltender.md` | In `goaltender.md` the caption **spans bullets 1 and 5**, so it covers the whole unit |
| `winger-high-then-down-the-wall` | HEAD in `winger.md`, moved in `switching_positions.md` | The caption **is** the winger section's title and draws **both ends of a move, not an instant**; in the sibling a sentence already points at it |

> ⚠️ ***"Same caption, different sections, different answers — that is the rule working, not an
> inconsistency."*** **A future reviewer running this check will see four hits. They are not defects.**

### ⚠️ A deviation, flagged by its agent and UPHELD by the coordinator

**`goalie-depth-failure-modes` now sits immediately before a `---`, which style-guide rule 3 forbids.**
The agent moved it anyway and asked for a ruling. ⚠️ **Its reasoning: rule 3's escape hatch says leave
such a marker at the head *because the caption is about the whole unit* — and here that premise is
FALSE.** The caption is about the final paragraph only.

**Upheld.** ⚠️ **Leaving it would open *"Depth is the fundamental decision"* with a picture of two
positions you must never play from — which is exactly the owner's complaint.** ⚠️⚠️ **And the general
lesson: rule 3's fallback is conditioned on a premise the rule itself does not check. This agent tested
the premise instead of assuming it, and that is what the fallback needs to say.**

### ⚠️ Why `goaltender.md` kept eight

**Two are genuine orientation diagrams** — `goalie-playing-the-angle`, whose shaded wedge *defines* what
an angle is, and `the-trapezoid`, a shaded region with dimensions. **One is an overview.** ⚠️ **The
other five were left under rule 3's end-of-unit fallback, and in each the premise HELD** — including
`goalie-safe-outlets`, where the caption itself says *"three of your **five** options"* and names the
other two, **and where a real ORDERED list blocks any mid-list placement.**

### Other corrections

- **A stale pointer in the style guide, found by an agent and fixed by the coordinator:**
  `content_style_guide.md:1488` cited `switching_positions.md:218` as a body-prose-points-at-marker
  site. ⚠️ **`:218` is now a rules bullet; the live sentence is at `:226`.**
- **A brief claim refuted:** I predicted `switching_positions.md`'s diagrams would be comparative and
  that the pair rule would apply to all of them. ⚠️ **Only one pair exists;** the other four are
  independent single-situation diagrams in four different sections.

### ⚠️ What none of this could establish

⚠️ **SUPERSEDED — see *"D15 DISCHARGED"* below. This paragraph is left standing as the state of
knowledge at the time, and because the diagnosis it rests on was wrong.**

⚠️⚠️ **NOBODY HAS SEEN THE RENDERED PAGE.** Three agents say so independently: *"I have not seen what 29
relocated SVGs do to page rhythm"*; *"whether the site's own layout treats a diagram between a paragraph
and a bullet list differently from one at a section head"*; *"five dump-in markers stacked between a
bullet list and the next paragraph… may look very different on a rendered page."* **D15 is undischarged
and this wave is the largest visual change in the corpus's history.**

**And none of them saw a built SVG** — captions were read as text. *"A caption that now reads backward
onto prose that contradicts the drawing would look fine to me."*

## ⚠️ D1–D15 for the marker wave — written because a gate found FOURTEEN DIMENSIONS SILENT

**C3 accepts only *checked* or *explicitly declared out of scope*. This record named D15 and nothing
else.** ⚠️ **Most cells below read *out of scope*, and that is the correct answer for a proven-pure
permutation of image markers — but it has to be WRITTEN.**

| # | Dimension | State | Why |
|---|---|---|---|
| **D1** | Rules claims | ⬜ **OUT OF SCOPE** | **No rule claim was touched.** Each agent proved it: marker multiset byte-identical between HEAD and index in all five files; every changed line a bare `![](diagram:…)`. **A gate verified this independently.** |
| **D2** | Exceptions travelling with rules | ⬜ **OUT OF SCOPE** | Same proof. **No prose moved.** |
| **D3** | Citations refetched | ⬜ **OUT OF SCOPE** | **Zero external URLs touched.** |
| **D4** | Numeric ownership | ⚠️ **CHECKED — and it FAILED here** | ⚠️ **The plan was staged carrying `286` and a partition table whose per-file counts the same commit had invalidated.** **Both deleted; the section prints the command.** |
| **D5** | Safety | ⬜ **OUT OF SCOPE** | No safety claim, caveat or counterweight moved. ⚠️ **One placement was judged ON safety grounds and upheld** — see the `goalie-depth-failure-modes` deviation. |
| **D6** | Negative existence claims | ⬜ **OUT OF SCOPE** | None touched. |
| **D7** | The cardinal rule | ⬜ **OUT OF SCOPE** | No instruction changed. |
| **D8** | Figures without their owner's qualifications | ⚠️ **CHECKED — FAILED TWICE** | The plan figures above, **and the commit message asserting both *"73 moved"* and *"No marker is moved here"* two paragraphs apart.** Both corrected. |
| **D9** | The summary layer | ⬜ **OUT OF SCOPE** | No Common Mistakes or Key Takeaway line moved. |
| **D10** | The ` ```facts ` layer | ✅ **CHECKED** | **No marker landed inside a fence**; fences balanced; `check_facts.py` clean at 834 blocks / 5,601 facts, with the `HARD_MAX` blocks byte-identical. |
| **D11** | Propagation | ⚠️ **CHECKED — and it is the wave's own shape** | ⚠️ **The four cross-document differences ARE the propagation question**, and all four resolve as correct. **Recorded above so nobody sweeps them.** |
| **D12** | Cross-document consistency | ✅ **CHECKED** | The same four. **A check no single agent could run; the coordinator ran it.** |
| **D13** | Folklore | ⬜ **OUT OF SCOPE** | Nothing authored. |
| **D14** | House style | ⚠️ **PARTIAL** | The style guide's own reversal is what this wave implements. ⚠️ **An agent found a stale pointer in it — `:1488` cited `switching_positions.md:218`; the live sentence is `:226` — verified and fixed.** ⚠️ **And rule 3's fallback is conditioned on a premise the rule does not check; that is recorded and not yet written into the guide.** |
| **D15** | The rendered page | ⚠️ **IN PROGRESS, and the standing diagnosis was WRONG TWICE** | ⚠️⚠️ **First *"the browser refuses localhost"*; then *"it refuses every URL, so no workaround can work."* BOTH WRONG.** **This repository records a round-53 agent that hit the same refusal and got through** — *"it fell back to **headless CDP** with a fresh incognito context per observation… every visual claim is from a screenshot it looked at"* — **and Chrome-over-CDP is already in this build, driving the OG-card step.** ⚠️ ***"D15 is not blocked by physics; it is blocked by nobody having tried the fallback that worked last time."*** **A `site-reviewer` is running with that path named.** |

⚠️ **Nothing is silent. D4, D8 and D14 record failures rather than passes, and D15 records a diagnosis
this round got wrong twice before the repository's own archive corrected it.**

---

## ⚠️⚠️ D15 DISCHARGED — after being declared impossible twice, by me

**The standing diagnosis was wrong twice.** First *"the Chrome extension refuses localhost"*, which sent
several rounds hunting for a localhost workaround. Then, after I tested four navigations including the
production HTTPS site, *"it refuses EVERY URL, so no workaround can work."*

⚠️⚠️ **A commit gate refuted the second one with this repository's own archive.**
`closed_plan_rows_archive.md`, round 53:

> *"Chrome-through-the-extension was refused three times; **it fell back to headless CDP with a fresh
> incognito context per observation so `localStorage` never leaks** — and every visual claim is from a
> screenshot it looked at."*

⚠️ **And Chrome-over-CDP is ALREADY IN THIS BUILD**, driving the OG-card step — 48 cards in 4.1 seconds.
***"D15 is not blocked by physics; it is blocked by nobody having tried the fallback that worked last
time."***

**A `site-reviewer` then reached it**, using the launcher pattern in `site/scripts/build-og.mjs` with a
fresh throwaway profile per run. **Every visual claim below is from an image it opened.**

### ⚠️ THE ANSWER TO THE OWNER'S QUESTION — the pages scan BETTER

**This is the strongest result of the review, and it is the point of the whole wave.** Having displaced
the diagrams, **nearly every section now opens with the ` ```facts ` panel** — `Position:`, `Action:`,
`Rule:`, `Never:`. **22 of 27 sections on `winger`; 24 of 28 on `center`.**

> *"A reader arriving at a section meets the densest possible statement of its subject rather than a
> picture they cannot yet interpret."*

**The intended rhythm, measured on the page:** `H3 → facts panel → "Where to be:" → "What to do:" →
diagram → caption`, **where the diagram's own label restates the prose line directly above it.**

### The four questions answered

1. **Stacked markers work, two of three.** Figure spacing is a uniform **32 px** above and below on
   every page, **identical on the model page.** The five dump-ins work because **each caption
   self-numbers** and a bullet list above names all five in order; the three neutral-zone structures
   work because a callout above names exactly those three. ⚠️ **The goaltender trio was the weak one —
   and that became MAJOR 1, now repaired.**
2. **A diagram after a bullet list reads as orphaned when its anchor item is not the adjacent one.**
   Both cases became MAJOR 2, now repaired.
3. ⚠️ **The `goalie-depth-failure-modes` deviation is UPHELD ON THE PAGE.** The gap to the `<hr>`
   measures **40 px — LARGER than the standard 32** — *"the diagram is not crowded into the break"* —
   and the caption echoes the paragraph above it explicitly.
4. ⚠️ **The result MATCHES THE MODEL.** `how_to_watch_hockey` measures **24 markers, 0 at a section
   head, 7 adjacent runs including two 3-runs.** ***"The model page was already doing what the positions
   pages now do — stacking is its existing idiom, not something introduced here."***

### ⚠️ It corrected my count, and refuted two of its own findings before filing

⚠️ **It reported SEVEN at a section head for `goaltender.md`, and a collapse of 65 → 10.** ⚠️⚠️ **THAT
FIGURE IS STRUCK, because nobody can reproduce it.** The committed census tool prints **8**; this
record's own table prints **8**; an independent `awk` over any heading depth prints **8**; and
simulating the DOM rule — treating a ` ```facts ` block as an intervening element, which the tool does
not — **also prints 8.** **The collapse is 65 → 11.**

⚠️ **The reconciliation may exist and the record does not state it, which is the whole failure.** ***This
round's own lesson, applied to itself: the rule must travel with the number or the number is noise.***
**The tool is the owner. Run it.**

⚠️ **Two would-be findings it killed itself:**
- **Dark-on-dark diagram labels.** Pixel-sampling the full-resolution capture: **the diagram band is 75%
  pure white.** ***"My impression came from a downscaled thumbnail."***
- **A missing focus ring.** ⚠️ ***"An artefact of calling `.focus()` programmatically, which does not
  match `:focus-visible`."*** **Dispatching real Tab keydowns gives `2px solid rgb(15,90,143)` on all
  six first stops.**

### Everything else it checked and cleared

**No console errors and no off-origin requests on any page.** All **407** fragment links from the four
positions pages resolve. Pagefind indexed, 39 fragments. ⚠️ **Contrast passes AA in both themes, and
dark is uniformly HIGHER than light.** At 320 px `document.scrollWidth === innerWidth`; the ten
full-sheet diagrams scroll inside `role="region"` containers with the body never scrolling. **0 images
without `alt`, 0 article SVGs without a `<title>`**, and every `<figcaption>` is `aria-hidden="true"`
with the text carried by the SVG's `role="img"` — **a deliberate de-duplication, correctly done, and the
same on the model page.**

### ⚠️ The handover it could not reach, and the coordinator's answer

*"I did not render any of these captions through `md_to_speech`, so I cannot say whether the five
self-numbering dump-in captions survive as a coherent sequence when heard one unit at a time."*

⚠️ **Checked: they do, and by design.** **Each caption names its own subject BEFORE the ordinal** — *"The
hard rim — the first of five distinct dump-ins"*, *"The soft area dump — the second of five…"* — **so a
listener hearing any one alone gets both the name and the position.** **They do not depend on the bullet
list having been heard.** They fall across two chunks, 1–3 and 4–5. **Not a defect.**

### What it could not reach

**One headless Chrome at `deviceScaleFactor` 2. No Safari, no Firefox, no real device, no touch** — so
whether the ten horizontally-scrollable containers are *discoverable by a thumb* is unknown. **No screen
reader**, so a 200-word `<desc>` on a `role="img"` is verified as markup and not as sound. **Dark mode
and 375 px were reached on `winger` only.** ⚠️ **And it reviewed the artefact, not the process:** *"a
regression in `index:search`, `check:links` or the caption promotion step would be invisible to me."*
