# Round 79 — the brief that omitted the adverse authority

**16 September 2026, after `d0b884e`.**

## The finding

A `rules-verifier` established that USA Hockey's Casebook **defines** the word
*"forward"* in Rule 618(c), and that the corpus did not carry the definition:

> **Situation 9** — *"Is a goalkeeper permitted to catch the puck and throw it (to
> the side or rear) directly to a teammate, who gains immediate possession,
> without incurring a stoppage of play? **Yes.** … provided the puck is not thrown
> 'forward.' **'Forward' is considered to be anywhere in between two imaginary
> lines, one at each goal post, extending to the nearest end zone face-off spot.**"*

So under USA Hockey the prohibited region is a **cone between the posts**, far
narrower than *"forward towards their opponent's goal"* reads, and a side or rear
throw is **expressly permitted with no stoppage at all**. A goaltender reading the
corpus's sentence was giving up a legal outlet.

**I briefed that as "a permission being restored."**

## ⚠️⚠️ What the brief left out, and why it mattered

**IIHF Situation Handbook, Situation 67.2** — verified by the coordinator as
verbatim in **both** the 2025/26 v1.1 and 2026/27 editions:

> *"The goalkeeper picks up the puck from the ice and throws it with the blocker
> hand right to a teammate positioned near the top of the circle along the boards.
> Is this deemed a penalty…?"*
> **ANSWER: *"This is deemed to be a minor penalty to the goalkeeper for handling
> the puck. Rule 67.3 (III)."***

⚠️⚠️ **The IIHF reads *"forward"* far wider than USA Hockey's cone. The play USA
Hockey's Casebook expressly permits, the IIHF prices at two minutes.**

⚠️ **`goaltender.md`'s primary audience is on the IIHF book.** Had the repair
followed my brief, it would have put a **USA-Hockey-scoped permission** into a
document read mostly by players for whom the same play is a penalty. **That is a
penalty-bearing defect, and the brief would have caused it.**

The agent found it because it went looking for **adverse authority** rather than
confirming the authority it was handed.

## The four-book split as it now stands, parents read end to end

| Book | Provision | Consequence |
|---|---|---|
| **NHL 67.3(iii)** | *"Throws the puck forward towards the opponent's net"* | **Delay-of-game minor** |
| **IIHF 67.3(III)** | same sentence, same Note; **Handbook 67.2** applies it to a blocker-hand throw to a teammate at the top of the circle | **Minor** |
| **USA Hockey 618(c)** | *"…throws it forward towards their opponent's goal and it is first played by a teammate"* | **Stoppage and a defensive-zone draw — no penalty.** Casebook Sit. 9 permits side/rear outright; Sit. 8 makes an open-handed bat an ordinary hand pass |
| **Hockey Canada** | no forward-throw clause; **Interpretation 6 to 10.2(a)** | *"the Referee will stop play, but no penalty will be assessed"* — **no direction test** |

⚠️ **The repair now runs the warning BOTH ways**, which is the shape this finding
forces: carrying the IIHF's two minutes into a USA Hockey game overstates that
book — **and carrying USA Hockey's side-and-rear permission the other way is the
more expensive mistake.**

## ⚠️⚠️ A CRITICAL IN THE REPAIR — the body got it and the extraction layer did not

A `safety-reviewer` read the repair and found that **`goaltender.md`'s
` ```facts ` block carries neither half of what the body now says.**

The body establishes that the IIHF counts **a throw to a teammate at the top of
the circle along the boards** as *"forward"* — ⚠️ **the throw a British
goaltender would consider LATERAL and therefore safe.** The facts line, voiced
alone with a 300 ms break either side, says only *"throwing it forward are all
minors (NHL and IIHF 67.3)"*, **which a listener matches to a throw at the
opponent's net, not a throw up the wall.**

⚠️ **And the edit made the other direction worse.** The newly inserted clause
*"only they make the throw a penalty"* is, read alone, **a permission-flavoured
statement to every USA Hockey and Hockey Canada listener — followed by nothing
saying what the act DOES cost them.** Under USA Hockey 618(c) it is a stoppage
and **a defensive-zone draw against you**; under Hockey Canada's Interpretation 6
it stops play on **any** glove throw, with no direction test. **The body carries
both. The block carries neither.**

⚠️⚠️ **This is round 10's failure — a correction that reached the body and
stopped — with a permission-without-consequence added on top, in the one layer
that is heard alone.** *"Not a penalty"* must never be the terminal clause of a
spoken unit.

**Constraint on the repair:** the IIHF's *width* must be in the extraction layer,
citing Situation 67.2 and noting it is identical across the three editions held;
and the USA Hockey and Hockey Canada **consequence** must travel with the
carve-out in the same breath. ⚠️ **If both will not fit one `Rule:` line, that is
a finding about the block, not a licence to drop one — split it.**

## ⚠️ The exposure the safety pass declared unchecked, now closed

It ended by naming what it had not done: *"I did not check the England Ice Hockey
Rules & Regulations or the SIHA In-House Rules for a local amendment to 67.3, and
a British goaltender's exposure is the IIHF book AS AMENDED LOCALLY. If either
amends 67.3, the Critical above is understated."*

**Checked by the coordinator, with positive controls, flattened:**

| File | `67.3` | `67` | `throw` | control |
|---|---:|---:|---:|---|
| `eiha_inhouse_2026-27.txt` | 0 | 0 | 0 | `Rule 9` = 6 ✓ |
| `eiha_inhouse.txt` (2025-26) | 0 | 0 | 0 | `Rule 9` = 6 ✓ |
| `eih_rr.txt` | 0 | 0 | 0 | `Rule` = 88, `IIHF` = 33 ✓ |

⚠️ **The first control run on `eih_rr.txt` used `Rule 9` and returned ZERO — a
broken probe, not an absence.** It was replaced before the result was trusted.
**That is the discipline the three source traps exist to enforce, applied to the
check rather than to the corpus.**

**No British document amends IIHF 67.3. The critical is correctly scoped, not
understated.**

## ⚠️ A computation the agent DECLINED to make, and was right to

Whether *"the top of the circle along the boards"* lies outside USA Hockey's two
lines from the posts to the end-zone faceoff spots is a geometry question
`rink_map.md` could settle.

**The agent refused to assert it**, on the ground that **the unsafe direction of
being wrong is telling a USA Hockey goaltender a wall throw is permitted.** It
left the two rulings side by side instead.

That is the correct treatment of an unresolved question, and it names precisely
where the answer would land if anyone does the work.

## Also corrected

- **`defender.md:20` is true of all four books**, so the agent changed `:143`
  instead — the fact whose *exclusivity implication* was the wrong impression.
  ⚠️ **My brief had pointed at the wrong line**, and the agent verified all four
  books' wording before choosing. It also made the matching **body** change so the
  fact stays *extracted*, not authored.
- `goaltender.md:550`'s elided quotation now uses the corpus's ellipsis form, and
  its date now matches the owner `rink_map.md`.
- **Rule 618 was cited in the body and absent from the Sources trailer entirely.**
  Now recorded, including the running-head splice as a how-to-read-the-source note.

## ⚠️⚠️ SUPERSEDED — this section describes an intermediate state, not the final one

**A commit gate found that this file gave THREE different accounts of the same
block, all true of different moments, with nothing saying so.** This section is
the earliest and **reads as the final state, which it is not.** It is kept
because it records why the repair was deferred at that point, not because it
describes the tree.

**The final state, verified in the working tree:** the section **was** split; the
rules block is at **11 of 11** and the new tactical block at **6**. The section
below headed *"The repair of the critical"* describes an intermediate state
(10/11 and 4/11) reached before the last repair added facts to both.

⚠️ **The lesson is the round's own, in its own record: a sentence describing a
state decays exactly like a figure does, and nothing in a document connects an
earlier paragraph to a later one that supersedes it.**

## What could not be repaired at the time, and why it was a plan row rather than a half-fix

**The `Freezing` facts block is at 11 of 11 — the hard cap.** The definition and
the permission could not be added to the extraction layer, and `:377` had 33
characters. **The agent did not trim a hedge and did not split the section**,
because the seam is real authoring rather than a correctness pass.

⚠️ **No checker can see this omission.** `check_facts` passes on a block at exactly
the cap. Only a `facts-reviewer` reading the block against its section body would
find it.

## What this method could not have found

**Books, not practice.** Whether an official in a USA Hockey rec game actually
lets a goalie throw sideways to a winger, or whistles it from habit, is unknowable
from this repository — and a goaltender acting on Situation 9 is acting on a
Casebook no referee may have read recently.

⚠️ **The NHL has no obtainable casebook**, so *"forward"* is **undefined** under
the NHL book. The IIHF Handbook is the only interpretive evidence and it ranks
itself below the Rulebook. **A reader under the NHL book has nothing but the bare
words.**


## ⚠️⚠️ A SEVERITY MODEL THE COORDINATOR HAD WRONG ALL ROUND

The agent repairing the critical pointed out, and the style guide confirms at
`content_style_guide.md:2054`:

> **A CHUNK IS NOT A FILE.** `AudioPlayer.astro` sets one `src` and plays it from a
> single `<audio>` element — **one file per document, no playlist, no per-chunk
> player.** `md_to_speech.py` chunks only to fit **Polly's per-request limits**,
> with a manifest so the pipeline can **concatenate**. So a chunk boundary is a
> **seam inside one continuous file** — the listener hears the next value after the
> ordinary 300 ms break. ⚠️ **"No argument may rest on a listener 'never reaching
> the next file'; there is no next file."**

⚠️ **The coordinator framed chunk boundaries as material a listener never reaches,
repeatedly, in briefs and in plan rows across this whole round.** That framing is
wrong and has been corrected in `OPEN_ITEMS.md`, with the distinction stated:

- **A chunk boundary is a PROSODIC risk** — a qualification arriving after a seam
  rather than inside the sentence. Real, worth repairing, **not a lost limb.**
- ⚠️ **A ` ```facts ` line or a Key Takeaway voiced ALONE with a 300 ms break
  either side IS a lost limb** — the facts blocks are inline in the single track,
  **which is exactly why their isolation matters.** Every facts-layer finding in
  this round stands at full severity.

⚠️⚠️ **THE STYLE GUIDE RECORDS THIS HAPPENING BEFORE, AND SAYS SO IN TERMS:**
`scripts/check_chunk_tails.py` was *"designed, built and dispatched against on the
belief that a chunk-terminal value's qualification 'opened the next file'"* —
**after** the correct account had already been written from two agents' findings,
**by the person working from it.** ***"Wrong about why, right about what — for the
third time in this guide, which is why the fact is now stated as two file paths
rather than as a principle."***

**This round is the fourth time.** The defects found under the wrong model were
real; the reason given for them was not.

## The repair of the critical, and its own self-catch

⚠️ **The counts in this paragraph are the INTERMEDIATE state.** A later repair
added a fact to each block; **the final state is 11 and 6**, recorded in
[`round_80_the_facts_layer_gap_2026-09-16.md`](round_80_the_facts_layer_gap_2026-09-16.md).

The section was split on the seam the body already used, taking the rules block
from 11/11 to 10/11 and creating a 4/11 tactical block. Both limbs now reach the
extraction layer, and **no fact ends a spoken unit on *"not a penalty"***.

⚠️ **The repairing agent's FIRST insertion moved a chunk boundary so that the
scope fence and the IIHF ruling it fences landed on opposite sides of it** — it
created the separation its own brief had asked it to check for. **It caught that by
re-running the chunker AFTER editing rather than before**, and fixed it by folding
both into one sentence, which a chunker cannot split.

⚠️ **It also refuted two brief premises, one of them a measurement.**
`check_facts.py` measures **the value after the label**, so the line had **8
characters of headroom, not 2**. The conclusion held; the figure did not.

## What no one has checked

⚠️ **`site/src/diagrams/goaltender.mjs` was not opened.** If any caption states the
forward-throw rule or the side/rear permission, it still carries the pre-repair
framing — **and no census over `content/` can see it.**

⚠️ **CARHA was not searched** for a goalkeeper forward-throw or handling clause.
The new fact says *"Neither USA Hockey nor Hockey Canada"* and makes no CARHA
claim, **but the surrounding body framing speaks of "all four books."**

⚠️ **The wedge is stated legally, not geometrically.** The repair tells a reader
*which test governs*; it does not tell them *how much* of what feels lateral is
inside it. **That needs `rink_map.md` to own the measurement.**


## ⚠️ The coordinator's error rate, measured rather than asserted

**Every repair brief in this round was refuted in part by the agent it was sent
to.** Counted from the reports, not estimated:

| Brief | Premises refuted | Would it have caused a defect? |
|---|---|---|
| Goaltender "forward" definition | adverse authority omitted | ⚠️ **YES** — a USA-Hockey-scoped permission into an IIHF-book document |
| Split repair | 6, incl. two wrong line targets | ⚠️ **YES** — *"fix both"* would have added an intent word USA Hockey does not write |
| Facts/safety repair | 4 | ⚠️ **YES** — *"split into two and hit the ceiling"* gives **12** from a block at 10/11: a **gate breach** |
| Systems propagation | 4 | No — but two would have produced edits to correct text |
| `defender.md` criticals | 5, incl. the `Rule:`-cap rule | ⚠️ **YES** — a new `Rule:` fact would have failed the gate |

⚠️⚠️ **Three of five briefs contained an instruction that would have introduced a
defect or failed a gate.** `CLAUDE.md`'s *"the briefs are more defective than the
corpus"* is not a historical note; it is this round's measurement.

**The instruction that caught all of them is one sentence:** *"Refute the brief
before acting on it."* ⚠️ **And this round extended it** — the goaltender agent
found the IIHF ruling not by doubting a premise but by **going to look for
authority the brief did not carry.** *"Refute the brief"* now has to mean
**adverse authority too**, not only stale premises.

## ⚠️ Two corrections the coordinator made to its own model

**1 · A chunk is not a file.** Recorded above. The coordinator framed chunk
boundaries as material a listener never reaches, repeatedly, across the whole
round. **The style guide says otherwise at `:2054` and records a tool having been
built on the same wrong belief** — *"Wrong about why, right about what, for the
third time in this guide."* **This round is the fourth.**

**2 · A figure beside the words "this is the run that counts."** The round record
carried a gate table reading *"5,609 facts · 329 tracked files"* under exactly
that sentence, after the repair had moved both. ⚠️ **A commit gate caught it.**
**Four figures in this round went stale beside the sentence asserting their
authority** — that table, two commit-message counts, and a plan row's *"no build
run"* written after a build had run.

⚠️ **The pattern is not carelessness. It is that a measurement and the claim about
its freshness are written at the same moment and decay at different rates.** The
only defence that has worked here is **deleting the number and naming the
command** — which is what `CLAUDE.md` already prescribes, and which the
coordinator kept not doing.

## What the round could not reach

⚠️ **`site/src/diagrams/goaltender.mjs` has never been opened this round.** If a
caption states the forward-throw rule or the side-or-rear permission, it carries
the pre-repair framing — **and no census over `content/` can see it.**

⚠️ **This paragraph said nobody had looked at the printed output since the
print-layer fix, and cited the CSS as *"29 properties, braces balanced, typo
gone."* Both halves were superseded.** The measurement was re-run and is recorded
in [`round_80b_principles_and_print_2026-09-16.md`](round_80b_principles_and_print_2026-09-16.md)
— and ⚠️ **the CSS check it cites is precisely the one that missed two further
defects in that block**, a truncated `--font-body` and a selector outranked by
`:root[data-theme='dark']`. **Counting declaration-shaped lines cannot see
either.**

⚠️ **`content/systems/faceoffs.md` carries the same back-of-net omission**, one
document over, unfixed.

⚠️ **633 disclosures remain untested**, 70 of them in the ` ```facts ` layer.
**Every one tested to date has been false, and every one ran the same
direction — it made the corpus look LESS supported than it is.**
