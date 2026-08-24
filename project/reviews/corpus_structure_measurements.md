# What would most improve this corpus

> **Detail, not the live list.** The open items from this file now live in
> [`OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md) **Tier 0** —
> the largest items in the project. Keep this file for the measurement, the reasoning, and
> §3's withdrawn item, which is instructive about how a false premise survived.


*Measurements taken 16 August 2026, after review rounds 28 and 29.*

---

## STATUS AT 21 AUGUST 2026 — priorities 1 and 2

**The owner reordered this list.** Diagram notation became priority 1 and readability priority 2, both
ahead of everything below. Priority 1 is closed. Priority 2 is part-done and one item is blocked on a
decision only the owner can make.

| Item | Status | Evidence |
|---|---|---|
| **P1 · Diagram notation** | **DONE** | Axis reverted to the corpus's own cited source — shape is the position, fill the team, monochrome. 511 glyphs across 112 diagrams verified: circle count = forwards, triangle = defence, open = own, solid = opposition, in every diagram. `sources/heo_intl_drill_symbols.pdf` on disk and sha256-verified. Records: `project/reviews/round_34_diagram_notation.md` §§1–14 |
| **P2 · Sections self-contained** | **PART** | 44 duplicate H3s fixed, none remain. But the criterion was wrong: the owner's complaint was about *context*, not duplication. 36 aspect-without-subject headings identified, **11 fixed**, ~9 remain in files staged for the pending commit |
| **P2 · Overview repetition** | **PART** | Measured: `defender.md` restated **11 of 11** facts verbatim, `goaltender.md` 8 of 8, `center.md` 7 of 8. **5 of 9** Overviews compressed. The other four untouched |
| **P2 · More diagrams** | **PART** | 109 → **112**; documents referencing none 16 → **13**. Three authored, four quoted. Most of the remaining 13 are genuinely non-spatial |
| **P2 · Facts-label clarity** | **PART** | 31 blocks carried 2+ `Position:` facts; **29 remain**. The rest need per-block judgement between `Position:` and `Options:` |
| **P2 · "A Note on Language"** | ❌ **BLOCKED ON THE OWNER** | Still in **8** documents. `content_style_guide.md:434` *requires* the repetition — "documents must stand alone when read aloud" — because a listener starting mid-corpus has no glossary. Consolidating is a **spec change**, not a tidy-up |

### The pre-existing list, re-measured today

| § | Item | Status |
|---|---|---|
| 0 | Substance at the top | **DONE** |
| 1 | Retrieval practice | **DONE** (36 of 37) |
| 2 | Compress Key Takeaways | **ONE OUTLIER** — `body_contact_and_battles` is 10 takeaways / **2,135 words**. The plan measured 1,706 on 16 Aug; safety work has since *added* to it |
| 3 | `rules-verifier` over `rules_primer.md` | **10 of 22 applied, 12 outstanding** |
| 4 / 4b | Entry paths | **NOT STARTED** — five new documents |
| 5 | Reader test | **NOT DONE, and cannot be done here** |

**The corpus is 37 documents and 619,227 words.** That number has not moved. Everything since
16 August has been correctness work, and two documents are *longer* than they were.

⚠️ **Twenty instances of one defect were found in this stretch**, across eight `safety-reviewer`
passes and sixteen `commit-gate` runs — six of them written inside a fix for the pattern itself. The
last, instance twenty, **withheld from a reader a defence their own rulebook grants them in words**.
The full record is `project/reviews/round_33_wave_a_findings.md` §§1–27. **Read §27 before editing any
penalty-tier claim.**

## The measurement that reframes everything else

```
36 documents          532,518 words          40.3 hours of reading at 220 wpm
mean document         14,392 words           ~65 minutes each
```

**Forty hours is six full-length books.** That is the accuracy work of twenty-seven
review rounds, and it is also the reason a beginner will bounce off it. Nobody
learning to play a sport reads six books first.

Every proposal below is judged against one question: *does it make the corpus's
existing accuracy reach a reader who has ninety minutes before Saturday?* Adding
more correct words scores zero.

---

## 0 · Put the substance at the top — the first step

**The proposal:** a reader landing on a page gets a real summary in the first
screen, and drops into detail only as they need it. Correct, and the corpus is
currently the wrong way round.

**Do not move Key Takeaways up.** Two things break:

- **The retrieval practice dies.** `Check yourself` says in terms: *"Producing an
  answer and getting it wrong is worth more than recognising a right one, which is
  what the Key Takeaways **below** give you."* Put the answers above the questions
  and the exercise is decoration.
- **Moving bloat does not fix bloat.** A 3,744-word "summary" at the top of
  `equipment.md` is worse than at the bottom — the reader hits a wall before
  reaching any content.

**The slot already exists.** Every document has an `## Overview`, mean 232 words,
already first, already required by the build, already feeding the nav descriptions
and search snippets. It is doing the wrong job: orientation prose rather than
substance.

The structure is inverted, and the ratio shows it:

```
                            Overview   Key Takeaways   ratio
body_contact_and_battles         133           2,711    20.4x
equipment                        203           3,744    18.4x
mental_game                      158           2,592    16.4x
conditioning_and_recovery        187           3,024    16.2x
time_and_space                    84           1,053    12.5x
```

The thin thing is at the top; the substantive thing is at the bottom, past 14,000
words the reader has not read.

**The change:** rewrite the Overview from *"this document is about X"* to *"here are
the things that matter and what to do about them"* — same ~200 words, real content.
Then compress Key Takeaways (§2) so the bottom is a recall aid rather than a second
document. A reader landing cold then gets substance in the first screen, detail on
demand, and a recall layer that still works at the end.

**Why this is step 0 rather than step 2.** It is the thing you want in place *before*
the reader test (§5). Testing the current structure would mostly rediscover that the
summary is in the wrong place, which is already known — and would spend the one
scarce resource in this plan, a reader who does not know hockey, on a question
already answered.

**Risks specific to this one:**

- An Overview written to be read *first* cannot use terms the body defines later. A
  takeaway saying "the half-wall is 44 ft from the point" works at the end and is
  noise at the top. Every rewritten Overview needs reading as though the reader has
  seen nothing else — which is exactly the discipline nobody in this project can
  apply to themselves, and an argument for prototyping one before doing 36.
- Overviews feed `docs-meta.json`, which feeds nav descriptions, search snippets and
  Open Graph tags. A change here is reader-facing in four places, not one.
- The compression half is where hedges die. Every dropped clause checked against
  non-negotiable 4 before it goes.

**Prototype first.** `equipment.md` at 18.4x is the extreme case; `time_and_space.md`
at 12.5x with an 84-word Overview is the thinnest. Do one of each, look at them, then
decide whether 36 is worth it.

---

## 1 · Retrieval practice was piloted and never rolled out

**`Check yourself` appears in 1 document of 36.**

It went into `breakouts.md` as a pilot and stopped there. It is the single largest
unexploited gain in the project, and the reason is not that it was rejected — it is
that the diagram work started before it was finished.

Why it matters more than it looks: **the corpus already has the questions.** Every
document ends with Key Takeaways and Common Mistakes, both of which are assertions
of exactly the things a reader should be able to recall. Turning "the point and the
half-wall are 44 ft apart" into "how far apart are the point and the half-wall?" is
extraction, not authoring — the same discipline the facts blocks already follow, and
one the corpus has proved it can do without inventing.

The catch, and it is a real one: **a wrong question teaches a wrong answer with more
force than a wrong sentence**, because the reader supplies the answer themselves and
therefore believes it. Every block needs the same gate a diagram gets.

**Estimated shape:** 5–8 questions per document, extracted from Key Takeaways and
facts blocks, sited before Key Takeaways. Mechanical enough to batch by document,
risky enough to need per-document review.

---

## 2 · The Key Takeaways are not takeaways

```
48,673 words of Key Takeaways — 9% of the corpus is its own summary
equipment.md              3,744 words
conditioning_and_recovery 3,024
body_contact_and_battles  2,711
mental_game               2,592
getting_started           2,444
```

**`equipment.md`'s summary is longer than most magazine features.** A reader who
skips to the takeaways to save time reads 3,744 words. That layer exists to be the
thing you read when you have not read the document, and at this length it is a
second document.

Round 26 flagged this — items up to 201 words — and deferred it. It is still the
cheapest large win available: the content is already written and already verified.
The work is compression, and compression carries a specific danger this corpus knows
well: **a hedge is usually the first thing a shortening pass drops**, and the hedges
are load-bearing.

**Target:** ≤ 25 words per item, ≤ 10 items. Every dropped clause checked against
non-negotiable 4 before it goes.

---

## 3 · ~~Eleven documents have no facts layer~~ — WRONG, and instructive

**This item was based on a false premise and is withdrawn.** It said eleven
documents were missing a facts layer. They are excluded from it by specification,
and the spec names them:

> *"**Applies only to the 26 documents that teach how to play** — Positions,
> Systems, Technique, Hockey IQ, and `on_ice_communication.md`. Not Getting
> Started, not the glossary, not the rules primer, not the six off-ice documents:
> they are reference or off-ice material, and imperatives would misrepresent
> them."* — `content_style_guide.md` §Key facts blocks

`check_facts.py` enforces it: a well-formed block inserted into `rules_primer.md`
produces `has 1 facts block(s) but is NOT in scope`, exit 1, and `git-guard.sh`
blocks any commit that stages `content/` and fails it. The work was uncommittable
by construction.

The reason survives contact with the text, too. The label set is closed and every
label is a coaching stance — `Position:` means *"Where you are."* The glossary says
*"the slot is the area in front of the net"*, which is where the **slot** is, not
where **you** are. **There is no label meaning "definition"**, so the glossary is
not merely out of scope, it is unwritable without inventing a label the guide
forbids.

**What was right underneath it.** 33,796 words in the two largest foundation
documents have no scannable, audio-extractable layer. That reach problem is real.
The fix is a **specification change** — a new block type with its own labels
(`Term:` / `Where:` / `Why:`), a decision recorded in `docs/`, a scope change in
`check_facts.py`, and review — not an agent bolting coaching imperatives onto
reference material. That is a proposal, not a task.

**A better use of the same effort, offered by the agent that refused:** the corpus
already carries **494 `Rule:` facts** across the 26 teaching documents, concentrated
on the primer's own topics — icing 59, crease 47, offside 28, trapezoid 17. The
primer's Overview *delegates* to those documents by name. So a facts layer there
would be a **third** restatement of already-extracted material, and the guide warns
that a third restatement is one more place a correction can fail to reach. What the
primer actually wants is a **`rules-verifier` pass**: 21,097 words of rules claims,
the material most likely to be consulted under time pressure, and nobody has run one
over it this round.

**The generalisable lesson, which is why this section is kept rather than deleted:**
I measured an absence and read it as an omission. The measurement was correct and the
inference was wrong, because I did not check whether the absence was specified. An
agent refused, tested the premise, and produced the citation in four tool calls. That
is the process working — and it is worth noticing that the refusal came from the one
agent whose brief made it read the specification first.

---

## 4 · There is no entry path

Thirty-six documents in a reading order, and no answer to *"I am playing on
Saturday and I have an hour."*

The reading order is a curriculum. It is not a triage. What is missing is small and
cheap: two or three named paths — *your first game*, *you have been put on defence
and have never played there*, *you want to follow a game on television* — each
naming four or five documents and, more importantly, **which sections of them**.

This is the only item here that adds words rather than removing them, and it is
justified only because it is the thing that makes the other 532,000 reachable.

---

## 4b · Gaps the entry paths exposed — content that does not exist

Building four one-hour routes surfaced what the corpus cannot be pointed *at*. These
are absences, which no review round finds, because a reviewer checks what is written.

1. **There is no women's-hockey entry path, because there are no sections to link
   to.** The rules are real and specific — IIHF 101.1 checking restriction, 102.1
   full-face, the In-House Rules half-visor-from-18 clause, WNIHL registration,
   Adult-from-14 age banding — and **every one lives as an inline flag inside a
   section about something else.** A fifth route was attempted and abandoned for want
   of anything to point at. For a corpus written for British readers, where the
   women's game runs on the same IIHF book, this is the clearest structural gap in
   the project.
2. **Nothing describes a first organised *game* end to end.** `getting_started` §7
   covers a first practice or drop-in. Arriving for a game — team sheet, warm-up,
   lineups, intermissions, handshake line — exists nowhere as a sequence.
3. **No British equivalent of "What actually gets called at rec level."** That
   238-word section is the best value in the corpus for a first-timer and it is
   written to North American rec hockey. A British beginner has the amendments and no
   enforcement-culture triage.
4. **No route for a spectator at a live game**, in particular a parent watching a
   child. The nearest material is framed as a comparison with television, not a guide.
5. **Injury response is unreachable inside an hour.** The material is sound and spread
   across three documents. It was the highest-stakes thing cut from the first-game
   route, on budget alone.
6. **`faceoffs.md` has no short entry** — ~4,500 words for a centre who needs the
   procedure before Saturday.

**What did not earn a place, which is its own finding.** `special_teams.md` is 22,000
words and contributed two sections. `zone_entries.md` §1 was displaced entirely by a
248-word version elsewhere. `on_ice_communication.md`, expected to be central, has a
6,268-word core call list that presupposes a taught breakout. Length and value are
close to unrelated in this corpus.

---

## 5 · Nobody who does not already know hockey has read any of it

Every reviewer this round said the same thing independently, unprompted, in the
section where they were asked what their method could not find:

> *"I already knew the answer before I looked, which is exactly the disqualification."*

Twenty-seven rounds have established that the corpus is **accurate**. Not one has
established that it **teaches**. Those are different properties and no amount of
adversarial review closes the gap, because every reviewer here is a reader who
already has the answer.

**This is the highest-value thing on the list and the only one that cannot be done
by an agent.** One person who has never played, one document, one hour, watched
rather than surveyed. What they skip, what they reread, where they stop — that data
does not exist anywhere in the project and would redirect several of the items above.

---

## 6 · Known open defects, carried from this round

- **Full-sheet diagrams render labels at ~7.5 px on a phone.** Improved from 4.4 by
  giving them a scroll box; still strained. A corpus-wide typography decision, not a
  diagram fix.
- **`special_teams.md`'s facts block is at its 8-fact cap**, carrying two independent
  hedges in one 292-character line, so the owner is less discoverable on the +1's
  route than its own dependents. The style guide's own remedy applies: *"more than 8
  and the section is probably two sections."*
- **`positions/center.md` says `block shooting lanes`** with no shot-blocking
  technique anywhere in the document. Under a second safety opinion at time of
  writing.
- **`rules-verifier` has not run** against the ~40 rule quotations the narration
  sweep reflowed but did not alter.

---

## What I would do, in order

1. **Substance at the top (§0)** — prototype two Overviews, look at them, then decide
   whether to do 36. This goes first because the reader test should meet the structure
   you intend rather than the one you already know is inverted.
2. **The reader test (§5).** The only item that can invalidate the others, and the
   only one no agent here can do. One afternoon, one person who has never played.
3. **`rules-verifier` over `rules_primer.md` (§3)** — 21,097 words of rules claims
   with no rules pass this round. Replaces the withdrawn facts-block item.
4. **Compress the Key Takeaways (§2)**, with the hedge check. Note §3's withdrawal
   removes the reason to defer this — the takeaway bloat is not a symptom of a
   missing facts layer, because that layer was never meant to be there.
5. **Retrieval practice (§1)**, rolled out per document with review.
6. **Entry paths (§4).**

Note what is not on this list: **more documents, more diagrams, more review rounds.**
The corpus's problem is no longer that it is wrong. It is that it is 40 hours long
and nobody has watched a beginner try to use it.
