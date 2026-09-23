# Re-aiming wave 2: game management, forechecking, risk management, and a cross-check of what was promoted

**23 September 2026.** Four agents, disjoint files. Two edited, one could not, one was read-only
by design. Recorded here because three of the four found defects the wave itself had created or
would have created, and one found a class of defect no checker in this repository can see.

---

## What changed

| Document | Ratio before | after | Layer that moved |
|---|---|---|---|
| `content/systems/forechecking_systems.md` | 71% | — | Key focus **58% → 36%**, Key Takeaways **92% → 86%**, Common Mistakes 90% (unchanged) |
| `content/systems/game_management.md` | **67%** (brief said 73%) | 66% | Overview **67% → 24%**; Key focus 50% → 53% |
| `content/hockey-iq/risk_management.md` | **66%** (brief said 73%) | 66% | **NOT EDITED — see below** |

⚠️ **The document-level ratio barely moves, and that is the predicted result.** The reframe is that
the defect is ORDERING and RESTATEMENT COUNT, not proportion. `game_management`'s Overview fell 43
points because it had been doing the *instruction* layer's job — not because rules were removed.
Nothing was deleted from the corpus in either file.

---

## ⚠️ An agent could not edit, and its brief was an editing brief

The `risk_management.md` agent reported: *"`Edit` and `Write` are disabled in this session — the only
tools surfaced to me were `Read`, `Bash` and `SubagentHandback`."* A sibling agent in the same wave
edited its file without trouble, so this was intermittent rather than configured.

**The file is unchanged and its ratio is unmoved.** Its report is a set of sketches, and per the
standing rule a proposed wording is a brief and not a patch — written against a file its author read
but could not re-read in place. It said so itself and flagged it as the largest caveat on its own work.

**The lesson for dispatch:** an agent that cannot edit still produces a full review. The waste was
not the analysis, it was that nobody knew for ten minutes that the file was not being repaired. A
brief should ask the agent to report a tooling failure immediately rather than continue to completion.

---

## Two briefs carried a wrong figure, both in the direction that flatters the target

Both editing agents refuted their brief's headline number, independently:

- `game_management.md` — brief said **73%**, measured **67%**.
- `risk_management.md` — brief said **73%**, measured **66%**, and it was **not** the highest in
  hockey-iq: `playing_without_the_puck.md` is 67%.

⚠️ **In both cases the document figure was the wrong figure to dispatch on.** The by-layer spread is
what identifies the work, and neither brief carried it. `risk_management`'s real target is **Common
Mistakes at 77%**, where two bullets account for nearly all of it and one (`:815`) is ~1,100 words.
`game_management`'s was the Overview. A coordinator dispatching on a document-level ratio is
dispatching on a number that cannot locate the defect.

---

## Critical-adjacent: a quotation that was in neither book

`game_management.md:1091` attributed to NHL and IIHF 67.2(II):

> *"placed over the puck while it is on the ice in order to conceal it from or prevent an opponent
> from playing the puck"*

Flattened to alphanumerics that string is in **neither** `sources/nhl_rules.txt` nor
`sources/iihf_rules.txt`. The NHL writes *"places his hand over the puck…"*; the IIHF writes
*"place their hand over the puck…"*. **The quotation had been silently re-inflected to fit the
sentence.** Repaired by moving the inflected words outside the quote marks and quoting only the
fragment that is verbatim in both. `check_quote_drift` `notfound` 15 → 14, `clean` 354 → 355.

⚠️ **`check_quote_drift.py` scored it `notfound`, not flagged** — it cannot distinguish *"quotation
from a source not on disk"* from *"quotation that does not exist"*. That is a standing blind spot,
not a bug.

And the same clause in the body carried **the IIHF's wording under a joint NHL-and-IIHF
attribution**. Repaired with an inline disclosure rather than by picking a book. ⚠️ **This is the
attribution drift the tool's own docstring says it cannot see** — it keeps the closest match across
all sources, so a sentence credited to two books but carrying one book's wording scores clean.

---

## The cross-check: what promotion did to the position pages

A read-only agent compared the promoted layers of all five position documents against the documents
that **own** the tactics. It found no critical it could verify itself, and five majors. The shape is
consistent and it is the same one the previous wave found for landmarks:

⚠️ **A CONDITIONAL ASSIGNMENT COMPRESSED INTO AN UNCONDITIONAL ONE.**

- `center.md:36` states as the centre's base defensive-zone job the thing **the same document's
  Common Mistakes calls the mistake**. The owner gives the centre corner support and the high slot
  to the weak-side winger; this document's own Key Takeaway 2 says it correctly and conditionally
  (*"your defensive-zone job moves with the puck"*), and `winger.md:47` carries the owner's version.
  **The promoted Overview is the outlier, and the cold cross-page read did not catch the pair.**
- `goaltender.md:15` scopes the trapezoid permission to the NHL and IIHF, then gives the
  **instruction** — *"get out of the way and let your defenceman have it"* — unscoped. Under USA
  Hockey, Hockey Canada and CARHA there is no trapezoid at all, so a goaltender acting on it
  **concedes a retrieval they are entitled to make**, while their defenceman, who read
  `defender.md:168`, is expecting them to take it.
- `winger.md:23` (facts, voiced alone) states *"the red crease line, which counts as crease"* bare.
  Its owner says two books answer the other way; this document's own Key focus at `:11` has the
  qualifier. The **instruction** is safe either way — the defect is the bare rule assertion.

### Five prevalence claims, all introduced by promotion

`center.md:9`, `:36`, `winger.md:17`, `defender.md:11`, `switching_positions.md:11` each say
**"most teams"**. Every owner says no such count exists —
*"no published count of what teams actually run"*, *"nobody publishes a count… at any level"*,
*"no count of which of the three is commonest has been found"*. Where the owners do say "most", it
is **"most development programmes"** — a claim about teaching, not about what teams run.

**Each document's own lower layers are correctly hedged, which is how we know promotion introduced
it.** And `switching_positions.md`'s own last Common Mistakes bullet reads *"Repeating 'the centre
covers the most ice' or any similar positional claim **as though it were measured**. Most of what is
said about positions is craft. Say so."* — forty lines below its own Key focus doing exactly that.

⚠️ **The defect is the word, not the sentence.** Five files, five agents, no sweep.

---

## The renderer voices system names two different ways, and the naive fix is wrong

Found because the forechecking wave put all six system names in one breath. Measured:

```
'2-1-2, 1-2-2, 1-3-1 and 1-4' -> 'two one two, one two two, one three one and one-four'
```

Cause: `md_to_speech.py:2007`, the `formation` rule, is `(?<![\d-])(\d)-(\d)-(\d)(?![\d-])` —
**three digits only**. A two-part system name never reaches it.

⚠️ **AND A TWO-DIGIT FORMATION RULE WOULD BE A CORPUS-WIDE REGRESSION.** A census of every
two-digit hyphenated form in `content/` shows the current behaviour is **correct** for almost all of
them, because they are not formations:

```
'a 2-1 lead'     -> 'a two-one lead'          CORRECT
'7-9 players'    -> 'seven to nine players'   CORRECT
'a 4-1 becomes 9-1'                           scores
'3-4%', '2-5 min', '6-8 weeks', '1-2 practices', '0-0 shift'
```

**The digits cannot discriminate.** `1-4` (47 hits) and `2-3` (22) are usually systems; `2-1`, `3-1`,
`0-0`, `4-1`, `9-1` are scores; `7-9`, `6-8`, `2-5`, `1-2`, `3-6` are ranges; `3-4%` is a percentage.
A fix needs a per-occurrence census and a context discriminator, not a regex widening. **Not
attempted. Recorded as a plan row with the census as evidence.**

---

## What this wave could not have found

1. **Rules re-ordered as strings.** `game_management`'s agent moved roughly seventeen rule citations
   into more prominent positions **on the document's own authority**, verifying only the two it
   quoted. ⚠️ *"A rule that was already misstated is still misstated, now in a more prominent
   position."* That is the sharpest residual risk of this wave and it needs `rules-verifier`.
2. **The style guide was not read by one agent** — 261.5 KB, over the Read cap. Every house-style
   judgement it made came from `CLAUDE.md` and the layer table. The conflation table and the
   numeric-owners table were not consulted.
3. **The inverted test was never run.** The cross-check asked *"does the borrower match the owner"*.
   It did **not** ask *"which of the owner's limbs never reached the position page at all"* —
   `defensive_zone_coverage.md`'s collapsing box and strong-side overload appear in no promoted
   layer. ⚠️ **That inversion is the next round's highest-value pass and it is cheap.**
4. **`offensive_zone_play.md` was in the cross-check's brief and was not read.** The net-front and
   cycle half of `winger.md`'s and `center.md`'s Key focus — arrival timing, screening, where the
   shot comes from — **is unchecked against its owner by anybody.**
5. **A wrong premise shared by a position page AND its owner is invisible to this method.** The
   backcheck-lane taxonomy was taken entirely on the owner's word.
6. **A landmark phrase census was never run.** `"middle third of the neutral zone"` was caught only
   because someone happened to grep the exact phrase. *"Below the hash marks"*, *"inside the faceoff
   dots"*, *"the top of the circles"*, *"level with the opposing defenceman"* were checked by reading.

---

# Wave 3 — the repairs, their reviews, and the repairs the reviews caused

Written after the fact, because wave 3 only exists because wave 2's repairs were reviewed. **Nine
agents: five repairs, two independent reviews, one caption repair, one cross-document check.**

## The critical, and it was the dispatcher's

`winger.md:40` carried the *hound the puck* alternative **without the safety limb its owner attaches
to the same sentence.** The coordinator's brief quoted `defending_the_rush.md:330` and **stopped at
*"That is a legitimate system with its own logic"*.** The owner's sentence continues:

> *"**What it never means is finishing into the back of a player skating at their own end boards.**"*

NHL 43.2 — *"There is no provision for a minor penalty for checking from behind"* — and IIHF 43.2,
verified on disk. **The floor is a major plus a game misconduct.**

⚠️ **And it was worse than the review found:** the repairing agent discovered `winger.md`'s own
**Backchecking section states no hounding alternative at all**, so `:40` was the *only* place a
winger was told to pressure the carrier all the way in. Repaired in two limbs — `:40` names the
system and carries the owner's limb, and a **`Never:` line was added to the Backchecking facts
block** so it is voiced alone where the chase actually lives.

**THE LESSON, and it is new: a brief's QUOTED EVIDENCE is a sketch, exactly as its proposed wording
is.** Choosing where to end a quotation is an editorial judgement about a sentence you have not read
in context — **and the natural stopping point is after the clause that makes your point, which is
where safety carve-outs live.** Give the line reference and let the agent read it.

## What the reviews found in the repairs

Wave 2's `winger.md` repair left the document **disagreeing with itself in three ways**: two crease-
line book counts by layer, three charging-audit scopes, and the net-front split present in four
layers while four others still stated the superseded instruction — **including both facts blocks,
which are voiced alone.** The Sources trailer **positively denied** readings the body now rested on.

`center.md:27` **lost the word *"computed from"*** — turning the corpus's own calculation into
something that reads as an NHL publication. ⚠️ **`git diff` proves HEAD had it right: the repair
introduced it.** The cleanest evidence in this project for *a repair is new text*.

**A partial propagation is worse than none**, because the layers disagree and each looks internally
plausible. Every brief must now name **every** layer a claim lives in, and every report must say
which layers it reached.

## `content/systems/zone_entries.md` — the worst-measured layer in the corpus

Named here because a commit gate blocked on this file being absent from the record. **32 changed
lines, all Key Takeaways, all carrying rules claims.**

**Dispatched as the corpus's worst layer: Key Takeaways 98% rules-bearing, 1,769 of 1,813 words.**

⚠️ **That figure was substantially an ARTEFACT and the agent refuted it against its own brief.**
`check_tactics_ratio.py` scored each takeaway as one unit, and **KT2's only rules-bearing token was
the string `0.08`** — 132 words of Tulsky analytics counted as rulebook tiering. *"Of the original
1,813 words, only KT6 (44 words) scored non-rules — **the 98% was 1 unit out of 11, not a word-level
truth.**"* The real shape was three takeaways carrying 57% of the layer. **The tool is fixed in this
commit; the document re-measures at 60%, not 64%.**

**What changed:** all eleven Key Takeaways re-ordered to lead with the instruction; **two demoted**
(KT4 389→~240 words, KT11 387→~250) after grepping and reading a carrier for **every** tariff — in
body prose, facts blocks **and** Common Mistakes. Seven Common Mistakes bullets re-ordered; **two
already led with the instruction and were left alone.** Nothing stripped from that layer.
⚠️ One bullet had *"Take the puck"* as the **final two words of a 200-word tariff**; another had
*"Hold at the line"* as the last clause of ~400 words.

**What was kept in every demotion:** the instruction, the ejection warning, the scope limits and
every honest disclosure — including *"the IIHF answers the same play in two directions"* and
*"unresolved in the IIHF's own text."*

**Two self-caught overstatements**, both found by re-reading new text against the sources:
- *"Put a skate on the line — **all five of you**"* — wrong; only attackers **in the zone** must tag,
  and it need not be five.
- *"**Only** the NHL and the IIHF stop play because you are *about* to hit him"* — ⚠️ **the original's
  *"of the four"* had been dropped, turning a scoped claim into a false universal. PWHL 85.3 carries
  that trigger verbatim.** `check_absolutes.py` passed on it in both states.

**Book scope tested against the 42 on disk:** the tag-up *"all four books"* became the count-free
form and is **better supported, not merely scoped** — CARHA and PWHL 85.3 both write the skate-contact
test, so it is six books, not four. ⚠️ **PWHL RENUMBERS: off-side is Rule 85, icing is Rule 83. Any
future sweep keyed on 81/83 misses the PWHL silently.**

**Reported, not acted on:** KT10 ends with a cardinal-rule disclosure about **defending** entries
inside a takeaway about **forechecking and angling** — honest, so non-negotiable 3 says do not delete
it, but it is in the wrong takeaway and reads as a stray voiced alone. **Relocate, do not cut.**

---

## The inverted test, run for the first time

Never before asked in this project: *which of the OWNER's limbs never arrived?*

- `defensive_zone_coverage.md:106`'s **collapsing box**, **strong-side overload** and **Box+1**
  score **zero across all five position pages, in every layer.** The four `overload` hits that exist
  are *forechecking* overloads — **a reader who greps finds the wrong thing.**
- `defending_the_rush.md`'s four named backchecking systems appear **nowhere** in `content/positions/`
  — while that document tells readers that not knowing which of the four they run is a mistake.
  `winger.md:40` carried the **substance** of one faithfully and **never named it**.

⚠️ **A new defect class: the tactic propagated and the vocabulary did not.** Substance checks pass,
layer tests pass, owner-agreement passes — **and the reader still cannot ask their bench the question
the corpus keeps telling them to ask.** That is step 3 of the cardinal rule defeated by a missing
noun.

## A tool that ranked the queue was wrong

`check_tactics_ratio.py`'s `RULE_CITE` matched **every decimal**. A 132-word Tulsky analytics
takeaway scored as rulebook tiering because it contained `0.08`; the layer reported **98%**
rules-bearing on **1 unit out of 11**. Measured: 166 of 13,495 units, 1.5% of corpus words.

⚠️ **The naive repair is wrong in the other direction — `81.4` IS a rule number.** Fixed with a
discriminator (a rule number never starts `0.`, never carries a `%` or a unit), verified in both
directions, and **applied between waves, not during one.** Corpus re-measures 64%; `zone_entries`
60%, not 64%.

## Eleven self-caught overstatements, and one ran the other way

Every agent that shortened a tariff caught itself, unprompted, by re-reading its new text against the
file. Ten ran **harsher and simpler than the source**; one was a **softening**. The mechanism was
finally named:

> *"I carried the BODY's unscoped phrasing into a summary layer. **The body may phrase a claim
> loosely because its surrounding prose scopes it; a summary layer inherits the words and not the
> surroundings.**"*

⚠️ **So promotion and demotion both carry this risk, in opposite directions, and no checker sees
either.** `check_absolutes` passed on both versions of every one of them.

## Three coordinator errors caught by agents who checked

1. **The near-cap census.** The brief named two `center.md` blocks at `MAX_COACHING_FACTS`; `--near`
   reports **six**, and `:21` — the Overview block the brief asked the agent to edit — is one.
   *"Had I planned to add a facts line there I would have written one that failed the gate."*
2. **The caption framing.** The brief implied a reversal; the agent checked the drawn routes and
   found **the diagram shows the drive, not the screen**, so the caption was correct for the picture
   and wrong only in being unscoped. *"Had I taken the brief's framing at face value I would have
   mistaught the route the diagram actually draws."*
3. **The ordering reframe, applied where it did not belong.** Two documents were briefed as
   tariff-first; agents read all 22 and all 6 bullets respectively and found the shape **already
   correct**. They swept nothing.

## What this wave could not have found

- **Nobody has diffed the new net-front, cycle and royal-road passages of `center.md`, `winger.md`
  and `offensive_zone_play.md` against EACH OTHER.** All three were rewritten today, about the same
  two players in the same six feet of ice. **This is the highest residual risk and it is the first
  thing to run.**
- **No `rules-verifier` or `safety-reviewer` has seen any of the new prose.** Every repair is new
  text; the hounding limb in particular reaches an ejection.
- **A tactic universally true for a position and absent from the WHOLE corpus is invisible here** —
  there is no document to diff against. *"Somebody who plays the position, reading the Key focus
  cold, is the only instrument that finds the rest."*
- **Two line-break splices were found by accident** (Hockey Canada's crease Glossary line, the PWHL
  reference-table row). **Flatten to alphanumerics before concluding a book is silent** — and both
  were found because an agent doubted a zero, not because a tool reported one.

---

# Wave 4 — clearing the commit gate's BLOCK

The gate blocked on C3, C4, C6, C7, C8, C10 and C11. **All of it was correct and none was argued
down.** Nineteen further agents ran: three repairs, a `rules-verifier`, three `safety-reviewer`
sweeps, a cross-document diff, two caption repairs, and the repairs those produced.

## The two criticals, both created by this wave, both caught before commit

**1. A compression deleted one book's tier and left an exception clause pointing at it.**
`defending_the_rush.md` KT7 lost the IIHF's slew-footing tier — grep confirmed it then appeared
nowhere in the document — while *"The IIHF is the exception… no match penalty anywhere"* survived two
sentences later **in the same spoken takeaway**. That clause is about **tripping**. A listener who
has just heard three books' slew-footing tariffs hears that their book is the lenient one.
`sources/iihf_rules_2026-27.txt:4541-4558` contains only 52.1, 52.2 and 52.3 — **no lesser tier.**
⚠️ Scope: every British reader at every level.

⚠️ **The repair refuted the brief's wording.** It said *"the floor is an ejection"*; **52.2 is framed
*"shall, at their discretion, assess"***, so there is no lesser **tier** but the assessment is
discretionary. The agent wrote *"no tier below an ejection"* — **the distinction the document's own
facts line already drew.**

**2. New technique shipped with two-fifths of its posture limb.** `center.md`'s net-front section
parks a player **still, six to eight feet out, eyes deliberately off the defender**, on a path edged
by a steel post. It said *"head up"*; it did **not** say *"chin off your chest"* or *"never duck"* —
**and ducking is the reflex that section provokes.** The mechanism USA Hockey names is a **flexed
neck**, not a lowered gaze. The owner carried the limb in **all four** layers; this file had it in
**one**, and its two `Never: Duck…` lines were both in **boards** sections.

## The sweeps, and two of three returned nothing

- **`rules-verifier`** — 143 tool calls, 60+ rule clusters, **no criticals**. Every penalty tier at
  or above its book's real floor.
- **Species sweep** — the KT7 shape **did not repeat**.
- **Posture sweep** — found the gap **twice more**, and both were **pre-existing**: `shooting.md`
  scored **0 of 4 layers** (flattened census over 949 lines returned 0 for every posture phrase),
  and `zone_entries.md` had the limb **eleven times, every one scoped to the wall** while the block
  sent a player driving to the net.

⚠️ **Every major found in the sweeps ran in the SOFTENING direction** — telling a reader their book
is cheaper than it is. That is the inverse of what every convention here guards against, which is
why no reviewer had stopped on them.

## The diagnosis that sharpened the method

A brief said `zone_entries.md`'s checking-from-behind *"ceiling stops at major plus game
misconduct."* **Half wrong.** USA Hockey's match penalty was already there in four places; **Hockey
Canada's was missing.**

> *"So the defect was an **ASYMMETRY**, not a flat ceiling: a reader was shown USA Hockey priced to
> its match penalty and Hockey Canada priced only to its major, and would reasonably conclude
> **Hockey Canada is the cheaper book for exactly the hit this document teaches.**"*

**A flat ceiling misinforms nobody in particular. An asymmetry tells a reader their own book is
lenient.** Tested across five further documents: **two were defects, three were clean.**

## What the coordinator got wrong, and it is a pattern not a list

⚠️⚠️ **EVERY HAND-COPIED FIGURE IN EVERY BRIEF THIS WAVE WAS WRONG.**

- a near-cap census named **two** blocks at the coaching cap; `--near` reported **six**, **including
  the block the brief told the agent to edit**
- a `shooting.md` block census was wrong in **both directions** — it recommended the tighter block
  as the roomier one
- character measurements of 292/289/282 measured **266/263/293**, stale **within the same session**
- a KT word count of 288 measured **369**
- a layer map called the Common Mistakes bullet the body; **the body was the one layer already
  correct**
- **a fabricated rule number**: *"PWHL 63.2(viii)"* — **PWHL Rule 63 is SLASHING**; delay of game is
  Rule 65. The NHL's number, carried into a PWHL sentence
- **a truncated quotation** that stopped exactly at a safety clause, producing critical #1 of wave 3
- *"the floor is an ejection"*, where the book says *"at their discretion"*
- **KT4 named as a checking-from-behind bullet** — it is the delayed-offside tag-up and carries no
  tariff

⚠️ **And the wave's own "sharpest residual risk" — *"roughly seventeen relocated citations"* — was
FALSE.** Counted: **16 of 18 identical, one gained, one lost two in a rewritten paragraph.** It was
**re-ordering inside units, not relocation between them.** It originated in an agent's loose
description of its own diff, was inherited by a verifier, relayed by the coordinator, and killed by
one count.

**The standing rule now recorded: a brief names the layers to CHECK and the TOOL to run. It does not
assert what the tool would say.**

## Twenty-plus self-caught overstatements, and the mechanism is named

Every agent that shortened a tariff caught itself. The count is no longer the point; the mechanism
is:

> *"The body may phrase a claim loosely because its surrounding prose scopes it; **a summary layer
> inherits the words and not the surroundings.**"*

**So promotion and demotion both carry the risk, in opposite directions, and no checker sees
either.** Notable instances: a repair that **contradicted a corpus limb quoted at seventeen sites**
(*"an arm or a shoulder"* against *"never the tip of your shoulder"*); a penalty ladder **one rung
short** that `check_absolutes` cannot see by design; **attribution drift manufactured in new text**,
putting USA Hockey's definitional wording into the NHL's mouth; and a repair of a softening that
**introduced a softening**.

## What this wave could not have found

- **The 32 unexamined diagram modules.** Two net-front captions were found by accident in two
  different files. A route-endpoint census is the method — the coordinator's attempt to script it
  **failed** (it could not resolve `rink.json`'s structure) and the only real measurements are two
  agents' hand-resolved tables. **Unrun.**
- **Whether five restatements of one ladder in `defensive_zone_coverage.md` is now itself the
  defect.** The repairing agent raised it against its own work: *"the right repair may well be to
  DELETE three of those restatements."*
- **Whether Hockey Canada 7.5(c) is narrowed outside Section 7.** All four of Rule 7.5's
  Interpretations were read and **none touches (c)** — but branch supplements and separate casebook
  volumes were not.
- **`winger-high-then-down-the-wall`**, left unrepaired on a symmetric application of the retraction
  test, and flagged by its agent as needing a second reader.
- **Whether any of it teaches someone to play.** Every gate here checks that the rules are true.

---

# Coverage statement — WAVE 4 (superseded by the wave-5 statement at the end of this record)

⚠️ **This table was written after wave 4 and four of its cells were STALE within hours.** A commit
gate caught the record contradicting itself: this table says D10/D12, D13–D14 and D15 were **NOT
CHECKED**, while the wave-5 narrative below describes a `content-reviewer`, a `facts-reviewer` and a
browser pass all running. **Both statements cannot be true.** The table is kept because archives are
evidence; **the live statement is at the end of this record.**

Written because a commit gate blocked on **C3**: the record named the dimensions it had covered and
was **silent** on the rest. ⚠️ **Silence on a dimension is the named failure mode**, and this was the
round-9 shape — a real review, aimed at what a reviewer can check, mute on what it could not.

| Dimension | Status |
|---|---|
| **D1–D3** rules accuracy, exceptions, cross-book divergence | ✅ **CHECKED.** `rules-verifier`, 143 tool calls, 60+ clusters. Then **independently re-derived** by the commit gate from `sources/` rather than from the report — every quotation held verbatim. |
| **D4–D5** citation integrity, provenance | ✅ **DECLARED OUT OF SCOPE, on measurement.** The diff adds **no new external source.** Every URL in the added lines is byte-identical to one in the removed lines, with one exception: the PWHL rulebook PDF, which is cited at HEAD in **three** `content/` files and which this diff adds to a fourth. Its extraction is on disk (`sources/pwhl_rules.txt`, 502 KB, fetched 21 September) and documented in `sources/README.md`, **including the eleven-page stale-running-header trap** — which the staged citation correctly avoids by dating from the title page. **No `source-verifier` run. Nothing was refetched.** |
| **D6–D9** cardinal rule, summary layers, numeric ownership, negative existence claims | ⚠️ **PARTIALLY CHECKED, AND THE GAP IS REAL.** A cross-document diff covered the net-front, cycle and royal-road passages across three documents. Disclosures were attacked per document by their own agents. **But no `content-reviewer` ran over the diff as a whole** — and **D8 is where the gate found its blocking defect**, which is the evidence that this gap bites. |
| **D10 / D12** the ` ```facts ` layer | ⚠️ **NOT CHECKED BY A REVIEWER.** The diff adds or rewrites roughly **thirty** facts lines, **each voiced alone with a 300 ms break either side.** Every authoring agent rendered its own and read it back as an isolated utterance, and `check_facts`, `check_facts_antecedents` and `--near` all pass — **but an author reading their own line is not a review.** |
| **D11** reader safety | ✅ **CHECKED, three times.** Two criticals found **and repaired in this diff**; a species sweep returned **no repeat**; a posture sweep found **two further pre-existing gaps**, both repaired. |
| **D13–D14** folklore, house style | ⚠️ **NOT CHECKED.** No `content-reviewer`. |
| **D15** rendered site | ❌ **NOT CHECKED — and the gate ruled it required here, on shape rather than principle.** Two captions each gained a **multi-sentence safety limb appended to an already-long caption**, and captions render inside diagram figures where **overflow and clipping** are the D15 failure. A clean eleven-step build is not a browser pass. |

⚠️ **The honest summary: this wave was strong on D1–D3 and D11 and thin on the layers that decide
whether the corpus READS well — which is precisely what the re-aiming is for.** The gate's closing
line is the one to keep:

> *"I checked that the claims are true. **I did not check whether any of it teaches someone to
> play** — which is the thing the whole re-aiming is for, and the thing no condition in C1–C11 asks
> about."*

---

# Wave 5 — clearing the second BLOCK, and what a browser found that nothing else could

The gate blocked again on **C3** (no coverage statement), **C7/D8** (a numeric promotion) and **C10**
(no browser pass). Sixteen further agents ran.

## C7/D8 was a FALSE PREMISE, and the coordinator confirmed it by truncating the evidence

The gate reported that `center.md` promoted *"went negative in 2016-17"* while its owner *"declines
to name the season"* and that *"nothing on disk verifies which of the eleven seasons went negative."*

**Both false.** `faceoffs.md:70` — the owner's **computation-bearing** layer — reads: *"In 2016-17
the relationship was actually **negative (r = −0.24)**, and in 2025-26 it was essentially zero
(r = +0.03)."* The season is named **with its coefficient**, and has been since `8087c1a`.

⚠️⚠️ **The coordinator then "verified" the false premise with `grep -n '2016' … | cut -c1-230` — and
`2016-17` sits BEYOND character 230 on that line.** It saw three lines opening *"the eleven completed
seasons from 2015-16…"*, concluded the hits were all 2015-16, and wrote that into a brief as fact.

**The evidence was truncated and the truncation was asserted as the content.** ⚠️ **Had the agent
complied instead of checking, it would have REMOVED a correct season identifier and replaced it with
a hedge vaguer than the owner's own evidence supports.**

**RULE: `cut` and `head` are DISPLAY choices, not measurements. Grep for the string you are testing
for, never a prefix of it.**

The agent found the real defect where the gate was looking: `center.md:27`'s compound verb attached
*"went negative"* to *"team faceoff percentage"* — **a percentage that cannot be negative.**

## What a browser found, and what it refuted

**C10's hypothesis — *"overflow and clipping"* — was WRONG.** Measured in the DOM: no caption
overflows its figure, none is clipped, worst drawing-to-figure ratio **52%**, no horizontal scroll,
`.warn-inline` promotion verified working, dark mode intact. ⚠️ **The *"the picture is 14% of its own
figure"* extrapolation does not reproduce.**

**The real defect is BULK, and it runs both ways.** `oz-net-front-screen` was **2,643 characters with
ZERO child elements** — one text node, no break, no marker — rendering **453 px, 59% of the
viewport**, the only long caption on either host page with no amber break while five comparable ones
had one. *"The callout looks authored; the caption looks like something that failed to get
formatted."* And two pages away, a **364-word amber panel filling half the viewport** fails the
owner's standard from the opposite direction.

⚠️ **Repaired — and the repairing agent REFUTED the proposed split with numbers:** the seam suggested
would have opened the panel **on a permission** (*"normally legal… you should do it constantly"*) at
**304 words**, within reach of the 364-word panel the same review condemned. *"Splitting there would
have traded a grey wall for the amber wall the brief warned about, one paragraph after warning about
it."* Split at the hazard instead: grey **2,641 → 1,567**, amber **203 words**.

## Two owner corrections, both accepted

- **The GA4 bootstrap is NOT a finding.** A meta-tag-gated script that returns immediately when the
  tag is absent is how analytics is enabled in production only. ⚠️ **A reviewer flagged it and the
  coordinator relayed it without checking the deployment intent.**
- **`resize_window` DOES resize the window — the page viewport does not follow.** Retested directly:
  two resizes reported success while `innerWidth`, `visualViewport.width` and every media query
  stayed pinned. One reviewer saw it frozen at 1200, the coordinator at 200 — **different constants,
  same decoupling.** ✅ **And the accident proved something: at a 200 px viewport, NARROWER THAN ANY
  PHONE, there is no body-level horizontal overflow** — all 54 over-wide elements are SVG internals
  inside the diagram's `overflow-x: auto` container.

## The dispatching error this wave finally named

A `content-reviewer` measured the three takeaways **the project itself calls the corpus's worst**:
`shooting.md` KT6 **1,153 → 1,153**, `offensive_zone_play.md` KT5 **1,038 → 1,038** and KT10
**739 → 739** — all untouched, two in files this wave edited — while `winger.md` KT8 **grew**.

⚠️ **The coordinator dispatched on DOCUMENTS. Agents re-aimed what their briefs named and left the
named worst cases alone.** **RULE: a re-aiming brief names the UNIT — `<file> KT<n>` — and its word
count.**

Carrier censuses now exist for the next wave, run at limb granularity, with the **single-carrier**
limbs named so a demotion does not touch them.

## The coordinator's error rate, stated plainly

**Nine hand-copied censuses wrong in one wave**: a near-cap list of two where `--near` reported six
**including the block the brief told the agent to edit**; a block census wrong in **both** directions;
character measurements stale **within the same session**; a word count out by 81; a layer map naming
the Common Mistakes bullet as the body; a site list of five where there were eight; a **fabricated
rule number** (PWHL 63.2(viii) — Rule 63 is Slashing); a **truncated quotation** that stopped at a
safety clause; and **a supplied wording that measured 273 characters against a 200-char cap, annotated
with the OLD line's figure.**

⚠️ **That last one is round 73's failure verbatim, committed in a brief that quoted round 73's
warning.** **RULE: if a brief supplies wording, it must MEASURE THE STRING IT SUPPLIES.**

## What agents caught in their own work, which is what actually held the line

Twenty-plus self-caught overstatements, in **three** directions — harsher than the source, softer
than the source, and **over-claiming the corpus's own ignorance**. The last is new: an agent nearly
wrote *"or what share of programmes teach it"* and pulled it, because *"it would have made the corpus
look better-sourced about its own ignorance than my evidence supported."*

Also self-caught: a repair that **contradicted a corpus limb quoted at seventeen sites**; a
**disclosure silently narrowed to buy characters**; a caption clause that **widened the scope the
demonstrative had held**; and a claim this record itself made — *"naming the thing has beaten pointing
at it every time"* — **refuted within the hour** by a line carrying **two** pointers, where
substitution cost five characters. ⚠️ **Free for one pointer, costly for two. Measure it.**

## What this wave could not have found

- **The phone.** `resize_window` cannot drive the viewport, so **both 375 px cells are unmeasured**
  and the caption-height arithmetic is neither confirmed nor refuted.
- **The desktop ToC rail**, gated at 1248 px, above the frozen viewport.
- **Nine untouched pages still carry the shape the owner objected to** — one amber panel among plain
  Key focus paragraphs. `off-the-ice/equipment` is **worse than `core_principles` ever was**.
- **A body that has always carried a limb its block never had.** A `facts-reviewer` named this against
  itself: *"the inverse would have passed me in every one of the 36 blocks."* **Invisible to a
  diff-based method by construction, and never audited.**
- **Whether any of it teaches someone to play.** Every condition in C1–C11 checks that the claims are
  true. None asks the owner's actual question.

---

# Coverage statement — WAVE 5, the live one

⚠️ **Written because a commit gate found the wave-4 table stale in four cells and contradicting its
own record.** This supersedes it. ⚠️ **A coverage statement written mid-wave goes stale the moment
the next reviewer runs — it is the last thing to write, not the first.**

| Dimension | Status |
|---|---|
| **D1–D3** rules accuracy, exceptions, cross-book divergence | ✅ **CHECKED**, three ways: a `rules-verifier` over the changed passages (143 tool calls); a second `rules-verifier` that settled the airborne trail skate from six books; and **independent re-derivation by two commit gates**, which re-read the quotations from `sources/` rather than from any report. ⚠️ **The per-cluster greps are recorded below, not summarised.** |
| **D4–D5** citation integrity, provenance | ⚠️ **PARTIAL — one defect found and repaired, and it is the reason this cell is no longer "out of scope".** The earlier declaration (the diff adds no new external source) was verified and stands. **But a third gate found `zone_entries.md:311` attributing a quotation to *Heads Up Hockey* that is in *Introduction To Body Contact*** — `huh.txt` 0 hits, `ibc.txt` 1, flattened. Repaired. ⚠️ **`check_quote_drift.py` cannot see attribution drift; its own docstring says so.** **No external URL was refetched.** |
| **D6–D9** cardinal rule, summary layers, numeric ownership, negative existence | ✅ **CHECKED** by a `content-reviewer` over the diff, plus a cross-document diff of three documents' net-front passages. **Six majors found, all repaired.** ⚠️ **Its own declared limit: it read the diff TRUNCATED to 330–400 characters, against paragraphs that run 1,000–3,000** — *"for most changed paragraphs I read the opening clause and nothing else."* **Whole-paragraph reads of six documents remain undone.** |
| **D10 / D12** the ` ```facts ` layer | ✅ **CHECKED** by a `facts-reviewer`: **54 added or rewritten facts lines across 36 blocks in 11 documents**, each read aloud in isolation. **Seven majors, all repaired.** ⚠️ **Its own blind spot, stated against itself: *"a body that has always carried a limb its block never had would have passed me in every one of the 36 blocks."*** |
| **D11** reader safety | ✅ **CHECKED, four sweeps.** Two criticals found **and repaired in this commit**; a species sweep returned **no repeat**; a posture sweep found **two pre-existing gaps**, both repaired. |
| **D13–D14** folklore, house style | ✅ **CHECKED** by the same `content-reviewer`. An unsourced prevalence quantifier was bounded **at its owner**; *"stay high"* was disambiguated in four places. |
| **D15** rendered site | ⚠️ **HALF CHECKED, and the missing half is a TOOLING limit, not a judgement.** A `site-reviewer` ran in Chrome at **1200 px, light and dark, ten pages, console clean**. It **refuted** the gate's overflow hypothesis and found a real defect (bulk), now repaired. ⚠️ **BOTH 375 px cells are UNREACHED: `resize_window` resizes the OS window but the page viewport does not follow** — retested directly, two resizes reporting success while `innerWidth`, `visualViewport` and every media query stayed pinned. ⚠️ **The desktop ToC rail (gated at 1248 px) is also untested.** ✅ **Best available substitute: at a 200 px viewport — narrower than any phone — there is NO body-level horizontal overflow.** |

## The greps, recorded — C4 asks for these and the wave-4 record only summarised them

Re-derived from `sources/` by a `rules-verifier` and/or a commit gate, with file and line:

| claim | source | verdict |
|---|---|---|
| IIHF slew-footing has no lesser tier | `iihf_rules_2026-27.txt:4541-4558` — Rule 52 holds only 52.1, 52.2, 52.3 | ✅ |
| NHL slew-footing is a mandatory match | `nhl_rules.txt:6046-6047` | ✅ |
| USA Hockey slew-footing minimum | `usah.txt:5068-5069` | ✅ |
| Hockey Canada 8.8(a)–(c) ladder | `hc.txt:7132-7141` | ✅ |
| HC 7.5(a)/(b)/(c)/(d)/(e), incl. the match penalty | `hc.txt:6160-6200`; all four Interpretations scoped to **7.5(a)**, none narrows (c) | ✅ |
| HC 6.4(a) line-change denial, Junior & Senior | `hc.txt:4848-4852` | ✅ |
| HC 8.5(b) charging a goaltender | `hc.txt:7009-7010`; 8.5(c) at `:7020-7021` | ✅ |
| NHL 69.3 signposts 69.7; 69.7 text | `nhl_rules_layout.txt:6085-6100`, `:6142-6146` | ✅ |
| IIHF 69.7 — materially, not word, identical | `iihf_rules_v1.1.txt:5608-5612` | ✅ |
| EIHL Casebook writes the crease test flat, and supersedes | `eihl_casebook.txt:742-750`, preamble `:205-206` | ✅ |
| PWHL abolishes the trapezoid | `pwhl_rules.txt:871` (1.8), `:3043-3044` (27.8) | ✅ |
| PWHL's stale trapezoid furniture | **65.2(viii)**, `pwhl_rules_layout.txt:5218-5220`; table at `:8929` ⚠️ **Rule 63 is SLASHING** | ✅ |
| PWHL charging a goaltender + match penalty | `pwhl_rules.txt:4471-4473` (42.1), `:4486-4488` (42.4) | ✅ |
| PWHL/CARHA: goalie not *"fair game"* | `pwhl_rules.txt:4474`, `:6129`; `carha.txt:2564` | ⚠️ **four-book count SHORT — repaired** |
| USA Hockey 607(a)–(e), incl. **607(e)** match penalty | `usah.txt:3663-3700` | ✅ |
| Offside — airborne trail skate, six books | NHL `nhl_rules.txt:8808-8821`; IIHF both editions; **PWHL 85.1** `pwhl_rules.txt:7329-7345`; USAH 630(a) `usah.txt:4658-4690`; HC 6.11 `hc.txt:5370-5377` + Interp. 3 `:5475-5477`; **CARHA silent** `carha.txt:3344-3373` | ✅ |
| IIHF Situation 83.29 — the exact fact pattern | `iihf_situations_v1.1.txt:7931-7941`; 2026/27 `:7997-8002` ⚠️ **answer split across a page break** | ✅ |
| USA Hockey Casebook 630 Sit. 7 and 8 | `usah_casebook.txt:15236-15245`, `:15267-15274` | ✅ |
| Crease line — four books settle it | IIHF `iihf_rules.txt:631`; USAH `usah.txt:4509`; HC Glossary ⚠️ **flattened only**; CARHA `carha.txt:270-274` | ✅ |
| PWHL 1.7 does **not** settle the crease line | copies the NHL's ambiguous wording | ✅ |
| PWHL 69.2(ii) prints a concealment clause | `pwhl_rules.txt:5919-5926` | ⚠️ **falsified an absolute — repaired** |
| Posture limbs | `huh.txt:220-229`; `ibc.txt:1388-1391` ⚠️ **the longer sentence is `ibc`, NOT `huh`** | ⚠️ **misattributed — repaired** |
| CARHA 53(a) checking from behind | not a bare minor | ✅ |
| IHUK In-House Rule 101 / Rule 1 / 100.1 | `eiha_inhouse_2026-27.txt:72-76`, `:445`, `:448-452` | ✅ |

⚠️ **Traps recorded with them, because each produced a false result once:** the PWHL's **eleven
stale-running-header pages** (cite rule numbers, never pages); Hockey Canada's crease Glossary line
and the PWHL reference-table row, **findable only flattened**; the USA Hockey extraction splicing
**`Playing Rules` / `CASEBOOK` page furniture through the middle of a sentence**, which puts a
correct quotation into `check_quote_drift`'s `notfound`; and **two separate cases of a grep WINDOW
being the defect** — a gate's `-B2 -A2` missing a Hockey Canada sentence and nearly filing a false
critical, and the coordinator's `cut -c1-230` truncating the evidence for a season identifier and
then asserting the truncation.

## Files in WAVE 5's commit (`23c33de`), each named — NOT this one

⚠ **Labelled 23 September after a commit gate read this list as the current manifest and found it
naming thirteen files that were not staged.** It is wave 5's, kept because an archive is evidence.
**Wave 7's files are named in its own section below.**

`content/`: `risk_management`, `center`, `defender`, `goaltender`, `switching_positions`, `winger`,
**`breakouts`**, `defending_the_rush`, `defensive_zone_coverage`, `forechecking_systems`,
`game_management`, `offensive_zone_play`, `zone_entries`, `shooting`.

⚠️ **`content/systems/breakouts.md` — named here because the last gate found it named nowhere.** Its
edit removes *"taught by most development programmes"* from a `Convention:` facts line and the body
blockquote. **After the edit the phrase appears nowhere in `content/`.** ⚠️ **Non-negotiable 3
requires a cut be recorded, so: the quantifier was UNSOURCED** — `grep -ril "swing breakout"
sources/` returns zero, a flattened sweep of all 42 books found no supporting text, and the
document's own Sources trailer has no development-programme entry and does not list the claim in its
*"Not independently verifiable"* paragraph. ⚠️ **It was an OUTLIER INSIDE ITS OWN DOCUMENT: seven
other lines in `breakouts.md` state the same thing with no quantifier.** *"Conventional"* and
*"assumed throughout"* were kept; only the quantifier went. **Nothing was denied — no "no count
exists" form was authored, deliberately.**

`site/`: **`src/diagrams/offensive_zone_play.mjs`** (the `oz-net-front-screen` caption split — grey
2,641 → 1,567, amber 203 words), **`src/diagrams/positions.mjs`** and **`src/diagrams/zone_entries.mjs`**
⚠️ **both of which ADD multi-sentence cervical-spine posture limbs to captions**
(`winger-offensive-zone-patches`, `entry-wide`), each verified against `huh.txt` and `ibc.txt` by its
author and each spoken into its host; and **`src/data/diagrams.json`**, the build product, in sync
(all three strings verified present after a full eleven-step build).

`scripts/check_tactics_ratio.py` — the `RULE_CITE` fix (a bare decimal is not a rule citation).
`project/plans/OPEN_ITEMS.md` — rows added, **eleven resolved sections moved out to this record**.

---

# Wave 6 — the third BLOCK, and a count that was short by two

The gate blocked on C3, C4, C5/D5, C7/D3 and C8. **Four were record failures and one was content.**
⚠️ **It also confirmed its own earlier C7/D8 block had been a false premise**, and disclosed that it
had nearly filed a fresh false critical the same way: *"a `grep -B2 -A2` on Hockey Canada 8.5(b)
returned only its third paragraph… my grep window, not the corpus, was the defect, **which is the
second time in three audits that my own evidence-gathering has been the weakest link in my report.**"*

## The content defects, both verified independently before repair

**A quotation attributed to the wrong manual.** `zone_entries.md:311` credited USA Hockey's *Heads
Up Hockey Program Guide* with *"an arm, a leg, or anything but your head first"*. Flattened:
`huh.txt` **0 hits**, `ibc.txt` **1**. The Guide carries only the shorter *"hit the boards with
anything but your head first"*; the sentence naming **goal posts** is ***Introduction To Body
Contact***, printed under a section headed **`HEADS UP HOCKEY / Basic Principles of Heads Up
Hockey`** — ⚠️ **which is exactly how the two manuals got merged.** The first two quotations in that
sentence **are** the Guide's, so three quotes ended up under one attribution.

⚠️ **The proof it was an outlier and not a house convention was in the same commit:
`technique/shooting.md:948` credits `ibc` by name and URL, quotes it verbatim, and carries the
2007-09 edition caveat.** Repaired at three sites on that model. ⚠️ **`check_quote_drift.py` cannot
see attribution drift — its own docstring says so.**

**A book count short by two, in the direction that misleads the corpus's own audience.**
`zone_entries.md` carried **three different scope vocabularies** for one cluster — *"any of the four
books"* (KT10), *"every book here"* (Common Mistakes), *"all four books"* (`:333`).

⚠️ **The gate showed the four-book count was short. The repairing agent then swept EVERY source for
flattened `fairgame` and found ALL SIX rule sets write it** — NHL, IIHF, **USA Hockey 607(d)**,
**Hockey Canada 8.5** plus Interpretation 2 to 8.3(a)(i), **CARHA 52(b) Note** (`carha.txt:2564`) and
**PWHL 42.1 and 71.4** (`pwhl_rules.txt:4474`, `:6129`). Each hit read in context; `hc.txt:148`
(*"a safe and fair game for all participants"*) excluded as a false positive.

⚠️ **The direction is this record's own sharpest species: a CARHA or PWHL reader heard the
goaltender's protection enumerated across four books that were not theirs, and the available
inference was that in their league a goalie out of his crease IS fair game. CARHA is the adult rec
book and this corpus is largely written for adult rec players.**

Repaired at **eight** sites — ⚠️ **two of which the gate had not listed** (`:701`, a facts line
voiced alone carrying a four-book *"all say"*; `:721`, a body *"all four say it in terms"*). ⚠️ **And
it did NOT sweep**: `:311`, `:1035`, `:1135` and `:225` were deliberately left, because their
*"four books"* belongs to the **crease-line** and **delayed-offside** clusters where the count is
correct. **The gate was explicit that *"the four books"* is a correct convention at roughly 120 sites
and that CLAUDE.md forbids sweeping it.**

⚠️ **Dating trap avoided: PWHL Rule 42 sits on page 74, one of the eleven pages `sources/README.md`
records as carrying the stale `2024 – 2025` header. The agent cited the rule number and stated no
edition.**

## Two overstatements caught in the repair's own text — one contradicted its own citation

> *"I first wrote `:324` as **`Rule: No book here scopes this to the crease`** — and **the very next
> clause of the same line quotes USA Hockey 607(c) as reaching a check 'within the goal crease or
> privileged area'. My own sentence contradicted its own citation**, voiced alone with a 300 ms break
> either side."*

The second was a dangling pointer (*"CARHA 52(b) and PWHL 42.1 reach it too"*) in a facts line.
**Both ran toward a harsher, simpler rule than the book writes.** ⚠️ **And two of its own `Rule:`
lines went over the 300-char cap; `--near` caught both and they were repaired by SUBSTITUTION, not by
dropping a caveat.**

## The measurement that proves no drift was introduced

```
check_quote_drift.py content/systems/zone_entries.md
  before: clean 262 · flagged 13 · notfound 27
  after:  clean 264 · flagged 13 · notfound 27
```
⚠️ **`clean` rose by exactly two — the two new verbatim quotations located in source — while flagged
and notfound did not move at all.** All 13 flagged remain the pre-existing sentence-initial-capital
cases.

## The restatement worry, judged by someone who was not its author

The previous author flagged five layers naming six books within ~200 lines and said *"I am the author
of that text and cannot answer it."* A fresh reader did:

> *"It is **two questions, not one**, and only the second is worth acting on. By the layer test they
> mostly do different jobs — `:156` is the mechanism with verbatim rule text, `:139` is the kernel,
> `:1111` is the takeaway. **`:34` and `:190` are the duplicated pair**… `:34` is an Overview
> restating the body, **which is precisely row P2 of `corpus_structure_measurements.md`.** Separately,
> **the CARHA 'settles nothing' clause is restated at `:34`, `:139` and `:190` — three places a
> correction has to reach. Two would do**, and `:139`, the kernel voiced alone, is the one that must
> keep it. **I would not cut `:156`: it is the only site carrying the operative wording.**"*

## One inference put on the record rather than hidden

*"Every book here prices a penalty separately from the goal"* is **explicit** for NHL, IIHF, USA
Hockey and Hockey Canada. ⚠️ **For CARHA it is an INFERENCE** — 52(b)'s Note calls a penalty and
never conditions on a goal, so nothing ties the two, **but the book does not say "separately" in
terms.** The clause actually attributed to CARHA and PWHL is the narrow verified one. **Someone may
want to tighten the umbrella.**

## What wave 6 could not have found

- **Three further `Introduction To Body Contact` quotations** at `:496` and in the trailer were **not**
  re-verified against `huh.txt` for the same merge failure — and the corpus's own note *"which the
  Program Guide carries too"* is itself an untested attribution claim.
- **Whether `:311`'s *"each of the four books"* for the CREASE LINE is short the same way.** Nobody
  checked whether CARHA or the PWHL write a crease-line rule.
- ⚠️ **The same attribution-merge class could sit at any of the ~120 corpus sites the gate flagged,
  and the agent was forbidden from looking.** Nothing mechanical can find it.
- **`ibc.txt`'s figures are image-only**; its *Basic Principles* heading was read from the text layer,
  not confirmed with `pdftoppm`.

---

# Wave 7 — the owner's two complaints, finished

Two things the owner said in their own words, both now done.

## "Why are there two after the first point in Key focus — that makes no sense"

**Nine pages carried that shape. Nine are repaired. Every panel was a real hazard, so none was
deleted as a hedge.**

⚠⚠ **BUT "none cut" IS FALSE AS FIRST WRITTEN, AND THE COMMIT GATE CAUGHT IT.** Total ⚠ glyphs
fell in three files — `offensive_zone_play.md` 87→82, `body_contact_and_battles.md` 289→288,
`shooting.md` 145→144 — and `body_contact_and_battles.md:19` went from two markers to one, losing
the one at its opening.

⚠ **The safety consequence is nil, and it is MEASURED rather than argued.** `md_to_speech.py:2778`
computes `important = "⚠" in text` as a **per-paragraph boolean**, so one surviving marker is all a
spoken `"Important."` needs. The count of **paragraphs carrying at least one marker** is **identical**
across all three files — 48/48, 145/145, 55/55. **No spoken escalation was lost.**

⚠ **The lesson is the claim, not the edit.** *"None cut"* was a summary of intent, and a one-command
glyph census refuted it. **A repair that reports itself is not a repair that was checked** — and this
is the layer where a wrong self-report is invisible, because stripping the last marker from a
paragraph silently deletes a spoken escalation and no checker in this repository can see it.

```
getting_started · conditioning_and_recovery · equipment · practice_and_development
team_play_and_culture · body_contact_and_battles · passing_and_receiving
scanning_and_anticipation · rules_primer            9 panels -> 0
```

Spoken `"Important."` identical in all nine (11/6/53/8/28 and 138/22/12/169), **with placement
checked as well as count.** ⚠️ **Three of the five in one batch were ONLY boxed — no length problem —
so they are now genuine siblings with zero content change.**

### ⚠️ The tool could not see the repair, and BOTH diagnoses of why were wrong

`remark-corpus.mjs:617` applies the anchored regex to **`toText(node)`** — the **flattened** text:
- **`**⚠️ Looking…**`** → flattening drops the `**`, marker first → **PANELS.** A raw-line regex says
  it does not.
- **`**Bold.** ⚠️ **Hazard.**`** → not first after flattening → **inline.** `classify()` says
  *"own paragraph"*.

⚠️⚠️ **An agent's first census used the raw-line form and reported the worst-shaped of its four pages
as already clean — it caught itself by rebuilding against the real AST. THE COORDINATOR MADE THE
MIRROR-IMAGE ERROR AND TOLD IT TO USE THE RAW-LINE FORM.**

**`classify()` was not changed** — it answers a different question and its docstring records a 3×
undercount from getting its branch order wrong once already. **`renders_as_panel()` was added beside
it**, mirroring the plugin, with both failing cases documented in the source.

**Two measurement limits found while verifying:** a **fixed-width placement window cannot certify a
paragraph longer than the window** (a 0→0 score on a 1,096-char item was a window artefact, verified
directly in the SSML instead); and ⚠️ **the glyph must precede a `strong` node or you get neither a
panel nor an inline run — just a bare glyph.** All nine pass, and one agent's verdict on its own
four: *"luck confirmed, not design."*

## "Tactics and strategy should be overwhelmingly the largest amount of content"

**All three takeaways this project names as the corpus's worst are done**, dispatched on the UNIT
after the last wave diagnosed that naming documents was why they kept being missed:

| unit | before | after |
|---|---|---|
| `shooting.md` KT6 | **1,155 words** | **250** |
| `offensive_zone_play.md` KT5 | **1,038** | **354** |
| `offensive_zone_play.md` KT10 | **739** | **506** |

`shooting.md`'s ten takeaways together: **2,777 → 1,872 words.** Every demoted limb had a carrier
**opened and read**, not grepped. `check_layer_echo` on `shooting.md`: **7.3%**, against the 20.1%
duplicate benchmark.

### ⚠️ Both "single carrier — do not move" warnings the coordinator relayed were FALSE
**IIHF 1.7** is carried twice in the body, including the rule-text-vs-table contradiction said to
live only in KT5. **NHL 41.1 and USA Hockey 622** — ⚠️ **`### The defenceman's pinch` IS a body
section**, carrying both with operative wording. **The agent kept them anyway, so nothing rested on
the error.**

### ⚠️ And "re-order first" was refuted for one unit, with reasons
> *"KT6's shape was different: the instruction was already FIRST, and the remaining ~1,000 words were
> a four-book ladder with two further instructions **stranded in the middle and at the end**.
> Re-ordering alone would have moved two sentences and left a 1,100-word rules appendix."*

### ⚠️ Two refusals, both right
> *"KT10 at 506 is its floor without a loss… **a shorter takeaway that has lost the
> defenceless-player limb is a worse document. I am reporting that rather than forcing the number
> down.**"*

> *"CARHA writes no goaltender incidental-contact permission at all. **Claiming it grants one would
> have been unsafe in the permissive direction.**"*

## The propagations, and a stale premise

⚠️ **`rink_map.md`, the crease-line OWNER, had ALREADY propagated CARHA and the PWHL at all four of
its sites** — with the Glossary quotation, the `Rule 5(c)` contrast, the PWHL's table copy and the
*"binds CARHA-affiliated adult leagues rather than rec hockey in general"* scope clause. **The
coordinator's *"nobody propagated it"* was wrong for the owner.** The real gap was in
`language_and_glossary.md`, which the brief never named.

⚠️ **Six fair-game sites, not four — and *"the render is what found `rink:637`; the grep did not."***

**Unasked and verified:** `privileged area` appears in **`usah.txt` and `usah_casebook.txt` only**
across all 42 books, so the corpus's *"no counterpart in the NHL, IIHF or Hockey Canada"*
**understated its own finding.** Widened to count-free.

⚠️ **`shooting.md` carried ZERO mentions of the PWHL while thirteen sibling documents already did.**
A propagation gap, not a new claim. **Six sites repaired in that file; no other file touched, no
other cluster touched.**

## Self-caught overstatements, now in five directions

Harsher than the source; softer than the source; over-claiming the corpus's own ignorance; **a
silently lowered capital — the exact drift `check_quote_drift.py` exists for**; and ⚠️ **a sentence
that would have made a file disagree with itself two hundred lines apart** (*"the adult-rec book"*
against `rink_map.md:188`'s own *"binds CARHA-affiliated adult leagues rather than rec hockey in
general"*).

**And a universal quantifier DROPPED rather than completed**, because `sources/` holds five IHUK
Regulations of Competition that say nothing on the point — *"'in every book' would have over-claimed."*

## What wave 7 could not have found

- **Whether the body carriers are themselves correct.** Limbs were proved to exist and their wording
  read; only the six-book charging cluster and PWHL 71.4 were re-derived from primary text. ⚠️ **A
  defect already in `shooting.md:469`–`:518` survives untouched and is now the SOLE home of material
  that used to be stated twice.**
- **Whether a listener still meets the crease law early enough.** The takeaway was the last thing
  heard; the material now lives earlier. **Better for a reader, untested for a listener who stops
  halfway.**
- **Whether the inline amber run is LEGIBLE.** The strong-adjacency check proves the run is
  *produced*, not that it *reads*. ⚠️ **Nine Key focus sections that carried a boxed panel this
  morning now carry an inline tint, and nobody has opened a browser on them.**
- **Still open and named:** `shooting.md` KT4 at **835 words**, now that document's longest; its Key
  focus layer restating KT6's ladder a **third** time; and the **stick-in-crease** cluster —
  *"a goal-costing limb, and nobody has asked whether CARHA Rule 5 or PWHL 69/Table 14 reaches an
  attacker's stick in the crease."*

---

# Wave 8 — the tactics re-aiming, and the defect it uncovered underneath

Two jobs ran in this wave and they pulled against each other. Both are recorded here because the
tension between them is the wave's most useful finding.

## Part 1 — the re-aiming, six documents

| document | Key Takeaways | Common Mistakes |
|---|---|---|
| `forechecking_systems` | 2,130 → **1,221** words (81%→63%) | 3,339 → **2,305** (90%→86%) |
| `defending_the_rush` | 2,441 → **1,544** (81%→63%) | 2,381 → **2,069** (80%→77%) |
| `defensive_zone_coverage` | 1,787 → **1,536** (76%→72%) | 2,674 → **1,909** (88%→83%) |
| `zone_entries` | 1,845 → **1,606** | 2,173 → **1,988** |
| `winger` KT8 | **956 → 248** | untouched — already instruction-led |
| `goaltender` | **21 units → 18** | 20 bullets re-ordered |

⚠️ **THE RATIO BARELY MOVED AND THAT IS THE CORRECT OUTCOME.** `goaltender` did not move **at all**
(84%/76% before and after) against a 21→18 consolidation. **Driving it down there would have meant
cutting crease law, the trapezoid and goalkeeper interference — which for that position ARE the
tactics.** `check_layer_echo` Common Mistakes → Key Takeaways now **6.4%–12.6%** across the six,
against the **20.1%** this project calls a duplicate signature.

⚠️ **And the brief's central premise was refuted twice, in opposite ways.** In
`forechecking_systems` *"lead with the instruction"* was **already true** — the real defect was
**restatement count**, with one ladder in **four** layers and Rule 7.3 scoring **six** hits. In
`goaltender` **three bullets had NO instruction anywhere** — pure tariff — so an instruction had to be
**written**, which is new text and a different risk class.

## Part 2 — what the re-aiming exposed: 26 exclusivity claims, all wrong

A sweep of all 39 documents found the corpus scoping rules to *"the NHL and the IIHF only"* in 26
places. ⚠️ **The PWHL carries every one.** USA Hockey, Hockey Canada and CARHA score 0 on essentially
all of them, **so the substantive contrast is sound — it is the word "only" that is false, and it is
false in one direction every time.**

⚠️⚠️ **THE MECHANISM: the PWHL renumbers from Rule 52 onward by a VARYING offset.** NHL 41/43/44/48/50
identical; **52 Body Checking inserted**; then 55→56, 57→58, 60→61, 61→63, 63→65, **69→71**, 70→72,
74→76, 76→78, 81→83, 83→85, 86→88, 87→89 — **while 9.6, 10.4 and 27 keep their numbers.**
**So a rule-number search finds the PWHL for contact fouls, misses it for everything else, AND a
renumber-aware search skips the three that did not move.** ⚠️ **PWHL Rule 69 is a real, different
rule — *Handling Puck* — so a stray "Rule 69" citation lands on the wrong rule rather than missing.**

**Roughly 120 sites repaired across 24 documents**, each verified against primary text, with four
Sources trailers created and three stale provenance disclosures repaired.

## The second defect class, found underneath

⚠️⚠️ **A two-limb pattern the corpus read wrong.** `team_play_and_culture.md` said *"only two of them
let a referee do anything about it on the spot."* **Hockey Canada 2.2(i)** — the rule that **names**
the own-half breach — has the referee ***"report the violation"***; **2.2(j) is a separate, GENERAL
power.** **CARHA is built identically (16(h) reports, 27(b) is general).** The corpus cited the
general clause as though it were the specific rule. **The specific rule reports in five of six books.**
⚠️ **This is probably corpus-wide: any sentence citing HC 2.2(j) or CARHA 27(b) as *the* rule for a
specific warm-up act is making the same error.**

## ⚠️ THE TENSION BETWEEN THE TWO JOBS, named by the agent that caused it

> *"Every repair I made ADDED words to layers the owner has called rules-heavy… **A correctness pass
> is structurally unable to notice that it is working against the tactics ratio**, and mine did."*

**A re-aiming wave and a correctness wave pull opposite directions on the same layers, so running
them in sequence means the second silently undoes part of the first.** ⚠️ **The mitigation applied:
add a book name and a rule number, never a paragraph — and several agents made lines SHORTER while
repairing them.** **Nothing measures this. `check_tactics_ratio --by-layer` must be re-run on the
corrected documents before the re-aiming is called done.**

---

# Coverage statement — WAVE 8, the live one

⚠️ **Supersedes wave 5's and wave 7's. Written after every agent finished and every file was staged
— a coverage statement written mid-wave goes stale the moment the next reviewer runs.**

| Dimension | Status |
|---|---|
| **D1–D3** rules accuracy, exceptions, cross-book divergence | ✅ **CHECKED**, and this wave's centre of gravity. A `rules-verifier` on `shooting.md` KT6; a corpus-wide `rules-verifier` sweep for PWHL Rule 69 scope; a second corpus-wide sweep for exclusivity across **every** rule, verifying **26 sites individually**; a `rules-verifier` on the goalie-mask citation across all 39 documents. ⚠️ **Divergences NAMED rather than flattened: PWHL 71.5 *"Coach's Challenge — Not applicable"*, PWHL 84.1's missing broken-skate exception, PWHL 72.3 reaching the penalty bench, the PWHL's omission of the thrown-stick penalty, and PWHL 65.2(viii) contradicting its own Rule 1.8.** |
| **D4–D5** citation integrity, provenance | ✅ **CHECKED, and four defects repaired.** ⚠️ **`winger.md` cited the PWHL 18 times with NO trailer entry; `time_and_space.md` 6 times and `center.md` 5 times, likewise.** Four trailers created, three stale disclosures repaired (`offensive_zone_play:1164`, `faceoffs:1252`, `defender:141`). ⚠️ **`sources/README.md` said *"Nothing beyond Rule 52.1 has been read"* while ~30 PWHL rules were read in one day — updated with the enumerated list and the renumbering table.** **No external URL refetched.** |
| **D6–D9** cardinal rule, summary layers, numeric ownership, negative existence | ✅ **CHECKED** by the re-aiming agents against their own text plus a `content-reviewer`-equivalent diff pass. ⚠️ **Four false counts were CREATED during repair and caught by their authors**, including *"three books here write it and two do not"* in a six-book document. ⚠️ **Non-negotiable 6 caught once** — an agent narrating project history into a Sources trailer. |
| **D10 / D12** the ` ```facts ` layer | ✅ **CHECKED.** ⚠️ **Three blocks SPLIT rather than a citation evicted** (299/300, 298/300, 297/300). **Every author measured its own strings; lines landed at 308, 321 and exactly 300/300 and were caught by measuring, not by the checker.** `check_facts.py --near` run before editing in every brief. |
| **D11** safety | ✅ **CHECKED** by two `safety-reviewer` runs. **One major (KT10 ordering) and four in `goaltender.md`, all repaired.** ⚠️ **A pre-existing softening found and fixed: charging described as *"a bare minor"* in three books where NHL 42.3/42.4, IIHF 42.3/42.4 and HC 7.4(b)/(c) all tier above it.** |
| **D13** the spoken layer | ✅ **CHECKED, and it found defects nothing else could.** A sole carrier proved MISSING from every spoken chunk by rendering (a document grep would have cleared it). A prose ambiguity confirmed **by ear** — *"Under the NHL and the IIHF only incidental contact is permitted"*, no comma. ⚠️ **Two renderer defects found: `/` voices as *"or"*, so `NHL/IIHF` becomes *"NHL **or** IIHF"*; and `2.2(i)` voices as *"clause one"* — a roman numeral.** |
| **D14** diagrams / captions | ⚠️ **OUT OF SCOPE, declared.** No `site/src/diagrams/*.mjs` or `diagrams.json` edit. ⚠️ **One finding reported and NOT actioned: caption `entry-trail-skate-drag` names only the NHL and IIHF where its host document now reaches six books.** |
| **D11 (re-run)** safety, after the merge voided the clearance | ✅ **CHECKED AGAIN.** ⚠️ **The 21→18 merge MOVED and RENUMBERED every unit from HEAD KT13 on, so C11 voided the first clearance and the merged units were re-read.** **Three spoken `"Important."` paragraphs were lost (133→130) and all three are accounted for: TWO ARE MERGES that carried every safety limb into the merged unit — including the head-and-neck board-contact hazard, still speaking — and ONE was a genuine marker removal, restored mid-item.** ⚠️ **Answered by rendering BOTH trees: the staged file, and HEAD via a detached `git worktree`, then diffing the spoken paragraphs. Nothing else could have answered it.** **One Major found while looking: CARHA Rule 55 was in NO layer, repaired across five layers plus the trailer.** |
| **D15** the rendered page | 🔴 **NOT CHECKED — C10 IS OPEN.** The Chrome extension refused **seven times** with a safety-category error across three URL forms and two ports. **The static half is done** (0 panels remaining, all 14 moved glyphs tinted, contrast 5.71 light / 8.29 dark) ⚠️ **but the light-theme band computes at ~1.08 against the page, and `.warn-inline` paints per line box with its 3px border on the FIRST LINE ONLY. Nobody has seen these pages.** |

⚠️⚠️ **C10 IS RECORDED AS EXPLICITLY NOT CHECKED, AND IT MAY NOT BE READ AS PASSED.** A retry ran the
one diagnostic that settles the cause: ***`navigate https://example.com/` is refused with the
identical error.*** **So the extension's safety-category classifier fails closed on EVERY URL — this
was never a localhost problem, and no change of URL form, port or hostname reaches it.** The block
covers **every** tool call that touches a tab, including `wait` and `tabs_close_mcp`, so **there is no
partial mode.** ⚠️ **The first attempt spent itself on URL variants; that is the wrong lead and must
not be repeated — one call to `https://example.com/` is the whole gate.** **Environment verified
green: `dist` fresh, server up on 4321, the page returns 200 and its HTML carries the 9 `warn-inline`
runs the static pass predicted.** **Nothing in two sessions has looked at a rendered pixel.**

**Mechanical gates, run after every agent finished and every file was staged:** `check_links` 0 ·
`check_facts` 850 blocks / 5,836 facts conform · `check_absolutes` 0 · `check_geometry` 0 ·
`check_secrets` 0 · `check_counts` every live figure matches · **build exit 0, full eleven-step chain,
`check-links` 53 pages / 11,544 internal links all resolving.**

## What wave 8 could not have found

- ⚠️⚠️ **A CLAIM THAT NAMES NO BOOK AND CARRIES NO COUNT.** Two agents named this independently:
  *"a sentence reading 'under Rule 63.6 you get a minor' is silently NHL-and-IIHF-shaped and scores
  nothing on any grep I ran."* **Every sweep this wave matched on *"only"* or an explicit count.
  Nobody knows how many uncounted claims there are.**
- ⚠️ **THE INVERSE: a sentence that NAMES the PWHL and is WRONG about it.** `check_quote_drift.py`
  keeps the closest match across all sources, **so a clause credited to the PWHL but carrying the
  NHL's wording scores CLEAN — and these two books are word-identical over much of the repaired
  text, which is exactly where that check is blindest.**
- **Whether the PWHL's TARIFFS match where its DEFINITIONS do.** Definitional clauses were verified;
  **penalty ladders were not walked.** One agent widened a sentence and left *"both run a ladder"*
  standing — caught, but **it cannot certify the others.**
- **~85 closed counts in four files, ~25 in one more, and ~145 *"both books"* sites corpus-wide, all
  unread.** ⚠️ **`body_contact_and_battles.md` carries ~25 four-book constructions while its own line
  23 declares a SIX-book universe.**
- **The British layer.** Four IHUK RoCs, the EIHL Casebook, the EIHA In-House Rules and the coaching
  regs were **not** searched for a departure on any rule repaired here. ⚠️ **The EIHL preamble makes
  it SUPERSEDING, so an EIHL claim sourced to the IIHF alone is unverified.**
- **Whether six books in one sentence is past what a listener can hold.** ⚠️ **Nobody asked the
  editorial question, and every repair in this wave made those sentences longer.**

## Files in WAVE 8's commit, each named with the reviewer that covers it

⚠️ **Added after a commit gate found this section missing and measured the gap: the wave-8 record
named 8 of 33 staged files, and Part 2's *"roughly 120 sites across 20 documents"* never enumerated
the documents — ⚠ **and the true figure is 24: 24 content files carry added PWHL lines, 4 carry none.
A stale count inside the section written to repair a stale count, caught by the re-gate.**
the 20.** **Twelve staged files were named nowhere in the whole record.** The convention exists — the
wave-5 section carries *"Files in WAVE 5's commit, each named"* — and wave 8 did not follow it.

**`content/` — the re-aiming (Part 1), D6–D9 + D11 + D13:**
`getting-started/getting_started.md` · `off-the-ice/conditioning_and_recovery.md` ·
`off-the-ice/equipment.md` · `off-the-ice/practice_and_development.md` ·
`off-the-ice/team_play_and_culture.md` · `technique/body_contact_and_battles.md` ·
`technique/passing_and_receiving.md` · `hockey-iq/scanning_and_anticipation.md` ·
`foundation/rules_primer.md` — **the nine Key focus marker relocations**, verified with the site's own
flattened-and-anchored test and at the SSML.
`positions/goaltender.md` (21 KT → 18) · `positions/winger.md` (KT8 956→248) ·
`systems/forechecking_systems.md` · `systems/defending_the_rush.md` ·
`systems/defensive_zone_coverage.md` · `systems/zone_entries.md` ·
`systems/offensive_zone_play.md` · `technique/shooting.md` — **back-layer re-aiming**, each with a
per-limb carrier proof; `goaltender.md` additionally with a **citation multiset diff against HEAD**.

**`content/` — the exclusivity repair (Part 2), D1–D5:**
`foundation/rules_primer.md` · `foundation/on_ice_communication.md` ·
`foundation/language_and_glossary.md` · `foundation/rink_map.md` · `positions/defender.md` ·
`positions/center.md` · `positions/winger.md` · `positions/goaltender.md` ·
`hockey-iq/risk_management.md` · `hockey-iq/time_and_space.md` ·
`hockey-iq/puck_support_and_spacing.md` · `hockey-iq/scanning_and_anticipation.md` ·
`systems/faceoffs.md` · `systems/game_management.md` · `systems/special_teams.md` ·
`systems/defending_the_rush.md` · `systems/defensive_zone_coverage.md` ·
`systems/offensive_zone_play.md` · `systems/forechecking_systems.md` · `systems/zone_entries.md` ·
`technique/shooting.md` · `technique/body_contact_and_battles.md` ·
`off-the-ice/equipment.md` · `off-the-ice/team_play_and_culture.md` — **each site re-derived from
`sources/pwhl_rules.txt`**, by four repair agents plus two corpus-wide `rules-verifier` sweeps.

**Non-`content/`:**
- `scripts/check_callout_flow.py` — `renders_as_panel()` added **and wired as `--panels`**.
  ⚠️ **The gate found the first version documented a fix it did not perform: the function existed and
  was called nowhere, under a comment reading *"CONSEQUENCE THIS FIXES"*.** **The default still runs
  through `classify()` deliberately** — it answers a different question, its docstring records a 3×
  undercount from a wrong branch order, and every figure in `project/` was measured with it.
  **`--panels` reports 271 of 1,526 marker-bearing lines.**
- `sources/README.md` — the PWHL entry, stale in the flattering direction (*"Nothing beyond Rule 52.1
  has been read"* against ~30 rules read in one day). ⚠️ **The gate found my edit had BROKEN THE TABLE
  ROW with blank lines, orphaning the source-link cell; merged back into one cell, and the row's
  structure now matches HEAD's exactly — ⚠ **7 pipe-delimited fields both sides, not the "5 cells"
  first recorded here** — from a pre-existing code span carrying
  literal pipes).**
- `CLAUDE.md` — ⚠️ **the gate found my repair had replaced ONE stale word count and left TWO standing
  in the same sentence** (measured the same day at 428 and 290 against *"~1,100"* and *"~1,050"*).
  **All three replaced with the pointer the sentence already gave.**
- `project/plans/OPEN_ITEMS.md`, `project/reviews/tactics_over_rules_wave_2_2026-09-23.md` — the plan
  and this record.
