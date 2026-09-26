# The stale denominator, and the layer a grep cannot reach — 26 September 2026

**Ten content documents, six diagram modules, one source README.** ⚠️ **All ten are enumerated in the table below — an earlier draft of this record claimed ten and listed six, which is this round's own thesis committed by its own record: a closed count that does not enumerate its members. A commit gate blocked on it.** ⚠️ **Written after the final
`content/` edit and after the gate, per the ordering rule — an earlier draft of this record stopped
before the text that shipped, which is the failure this file's own ordering rule exists to prevent.**

---

## The thesis, and it held for every defect in the round

> **A verified quotation of an incomplete rule reads as a complete one.**

Every Critical and almost every Major here is a rule quoted **verbatim and drift-free**, stopping one
clause short of a mandatory or harsher tier. ⚠️⚠️ **`check_quote_drift.py` is STRUCTURALLY BLIND to
all of them** — it matches on alphanumerics and keeps the closest match, so a truncation simply scores
as a clean shorter quotation. **The characters inside the marks are real. That is the whole problem.**

⚠️ **Only the PERMISSIVE direction blocks.** An overstatement toward a harsher, simpler rule is wrong
and gets repaired, but it does not hold a commit. **Every blocking item in this round told a reader an
act was cheaper than it is.**

---

## The claim family: a count that was right when it was written

Every count defect is a **four-book frame on a six-book shelf**. ⚠️⚠️ **But the lesson is the opposite
of "raise four to six."** Widening is FALSE in places — CARHA writes no clipping rule, no crease-position
goal bar, and reaches boarding by conversion.

### The five shapes in which a CLOSED book count is CORRECT, all measured in this corpus

1. It **names its members in the same sentence**.
2. It is **provenance on a dated line**.
3. The **section is scoped by design and says so**.
4. It **disclaims its own reach** — *"it does not travel past those four"*.
5. **It is not a book count at all** — it counts fouls, source documents or answers.

⚠️ **A sixth was added this round: a SELF-DELIMITING count that enumerates its members immediately
after** — *"the other three books, set out next"*. **Checked, correct, and deliberately left alone.**

### ⚠️⚠️ AND A NEW SHAPE THAT HAS NO NUMERAL TO GO STALE

**A SELF-REFERENTIAL scope phrase** — *"no book checked here"*, *"every book checked for this
document"*, *"all five books this document uses"*. ⚠️ **Adding a book to a document silently
re-scopes these WITHOUT EDITING THEM**, and the direction is permissive: the phrase quietly promises
the reader that the newly added book was checked for THIS claim when it was checked for a different
one. **Six sites in one file; two were permissive over-claims, one a `Rule:` line voiced alone.**

✅ **The repair is to NAME THE BOOKS.** ⚠️ **Whenever a wave ADDS a book to a document, sweep that
document for self-referential scope phrases, not only for numerals. No checker looks for these.**

---

## What was repaired

| File | Defect | Direction |
|---|---|---|
| `foundation/language_and_glossary.md` | USA Hockey 607(b) at three sites; a top tier stated as a ceiling, repaired at five sites in four layers including one with **no lexical trace** | permissive |
| `systems/defending_the_rush.md` | *"awards a goal **only** under the NHL and the IIHF"* — **falsified by this same commit's own bullet eleven lines above**; CARHA 36(a)(3) found by reading, in nobody's brief; a facts line giving CARHA's ceiling as a **discretionary** major when 48(a) writes a match | **permissive, BLOCKING** |
| `systems/offensive_zone_play.md` | USA Hockey 608(a) quoted as *"a minor plus a misconduct"* — **half the rule**, the major rung vanished from Common Mistakes; 608(b)'s first limb dropped; the from-behind ceiling raised in all three layers | permissive |
| `technique/body_contact_and_battles.md` | 70 four-book sites audited, **63 correct**, one SHORT site repaired | mixed |
| `technique/passing_and_receiving.md` | six self-referential scope phrases, two permissive | permissive |
| `positions/switching_positions.md` | a closed *"all four books"* the file's own facts line priced at six; a Sources trailer promising CARHA was read for four rules while the body cites a fifth | scope |
| `systems/breakouts.md` | the delayed-offside count widened to six books after verifying the ACT in each; the *"in all four books nothing in the rule covers you"* spoken warning whose named scope excluded CARHA, **the book that protects the carrier least** | under-claim, spoken |
| `hockey-iq/puck_support_and_spacing.md` | a facts line concluding *"onside wherever you play"* from a four-book enumeration that never named the silent book; a CARHA Sources entry added, the document having had **zero** mentions of a book it now cites | scope |
| `off-the-ice/how_to_watch_hockey.md` | the offside 3/2/1 split propagated; no new external citation (the PWHL URL is byte-identical to its 29 existing uses in HEAD (33 staged, four further uses of the same URL)) | propagation |
| `systems/forechecking_systems.md` | the offside split propagated; ⚠️ **ships a known harsher-than-the-book absolute, see *Shipped knowingly*** | propagation |
| six diagram modules | the offside 3/2/1 split; a caption reading Hockey Canada 8.3 and CARHA 66(a) as barring *moving* but not *standing* | permissive |
| `sources/README.md` | **IIHF 83.1 changed between 2025/26 and 2026/27** — a third substantive change, found from an agent's declared uncertainty | provenance |

---

## ⚠️⚠️ THE FINDING OF THE ROUND: A SPOKEN CAPTION CONTRADICTING ITS OWN HOST'S SPOKEN BODY

The `breakout-wheel` caption read Hockey Canada 8.3 and CARHA 66(a) as *"a bar on moving rather than
on standing"*. **Its host document says the OPPOSITE, twice, in bold** — *"Hockey Canada writes no
body-position permission anywhere at all"*.

⚠️⚠️ **Both are spoken. A listener was told opposite things about the same act by a page and the
picture on it.** **No layer test of the DOCUMENT finds this, because the caption does not live in the
document.** `check_caption_hosts.py` reports which documents speak a caption they do not own;
**nothing compares a caption's CLAIM against its host's.**

Both books write the bar flat — *"impedes the progress of an opponent, who is not in possession"* —
with **no movement element**; the *"run deliberate interference"* sentence is an ADDITIONAL
prohibition, and CARHA's stand-your-ground Note addresses **defending** players, which a breakout D2
is not. **If the forechecker is injured, HC 8.3(b)/(e) and CARHA 66(e) all escalate mandatorily.**

---

## Method findings that outlived the round

### ⚠️ A TRUE negative is the dangerous kind, and it produced most of this round

**A false negative leaves you uneasy and you search again. A true negative satisfies you and you
stop.** Worked examples measured here: `plane` scores **0 in both `carha.txt` and `usah.txt`** and both
zeros are TRUE — **USA Hockey 630(a)'s affirmative CONTACT requirement is the finding**, reachable
only by searching the ACT. ⚠️ **A brief saying "grep for the plane test" produces a clean-looking
near-total false negative across two books.**

⚠️⚠️ **THE PWHL PRINTS `off–side` WITH AN EN DASH AND NUMBERS OFFSIDE RULE 85, NOT 83.** `Off-side`
scores **1** in `pwhl_rules.txt` against 9 in the NHL's. **Look it up by HEADING; never derive a PWHL
number from an offset.**

### ⚠️⚠️ THE COORDINATOR'S SKETCHES WERE WRONG TWICE, AND AGENTS REFUSED BOTH

A brief proposed *"those four split two–two — and the PWHL drops it as the NHL does"*. ⚠️ **That
states a two–two split of FOUR books in the same sentence that names six, and omits CARHA, which is
on the KEEPS-IT side.** The agent wrote the sentence itself.

✅ **Specify the DEFECT and the CONSTRAINT; let the agent that has read the document write the
sentence.** **A sketch is a brief, never a patch.**

### ⚠️ Briefs were wrong more often than the corpus was

A relayed **CARHA 72(e)(2)** citation was wrong — (1) and (2) are the *nullify* triggers, the
stop-play sentence is unnumbered inside (e). ⚠️ **It had propagated SIX times through the plan before
an agent caught it.** A reviewer's *"silent on the IIHF"* was **"incomplete", not "silent"**, and
would have produced the wrong repair. One hypothesis was **partly refuted** — two layers had
*diverged in scope*, not contradicted, and a "fix the contradiction" repair would have been wrong.

### ⚠️⚠️ THE SHARED SCRATCHPAD EATS FLATTENED RULEBOOKS, NOT JUST SSML

**Two agents hit it the same day.** One swept a shared `flat/` directory and reported **0 for CARHA**
where the truth is **1** — the directory held 42 `.flat` files written by a sibling with a different
flattening method; its own loop had written 6. ⚠️ **The direction is the dangerous one: a sibling's
method produces a ZERO, and a zero stops the search.** ✅ **The cause is the COORDINATOR'S briefs —
*"use the scratchpad"* tells two agents to use one directory. Give every agent a NAMED subdirectory.**

### ✅ Chunk distance measured, and the DIRECTION is what decides it

The repaired caption's permission and its correction land in **the same chunk** — the repair works
spoken. A facts line and its book list landed **one chunk apart**, and that is **not** a defect here:
the claim is a **universal warning** with an unconditional instruction leading it, so a listener who
hears only the first chunk is warned MORE than the books require. ⚠️ **The same split under a
PERMISSIVE claim would have blocked. Record the direction, never just the distance.**

### ✅ Declared weakest negatives are the next brief, and this week they have been the next DEFECT

The IIHF 83.1 edition change was found **because an agent said it could not confirm 83.1 was
unchanged in 2026/27.** ⚠️ **Two agents independently named the SAME unread area as their most likely
next defect: CARHA's roughing (59), interference (66) and head contact (50), none read whole.** **Two
agents converging on one gap is the strongest available signal. Brief it by the ACT.**

---

## Process failures in this round, both the coordinator's

1. ⚠️ **Twelve files entered a contact-and-penalty diff with NO safety dimension declared.** A commit
   gate blocked on C6 and the pass was dispatched only then. **It found three Majors.** Its own
   declared gap — three contact documents it never opened — needed a **second** pass, which found the
   blocking item. ✅ **Silence on a dimension is the failure mode, and it cost two extra waves.**
2. ⚠️ **Two agents in one wave read DIFFERENT IIHF extractions** because their briefs named different
   files. **Five IIHF rule extractions sit on disk and only `sources/README.md` says which is
   canonical.** ✅ **Name the EDITION in the brief, not the filename.**

---

## What this round could not have found

- **A layer written ASSUMING the old answer without ever naming it.** This shape produced three of the
  round's Criticals and it leaves **no lexical trace** — no grep reaches it, and only a fresh reader of
  the whole document finds it. **It is not covered and it is not closed.**
- **Whether the diagrams DRAW what the corrected captions say.** Caption strings were read; no SVG was
  rendered and no page was opened.
- **Whether caption markers get any typographic treatment at all** — it is unknown whether captions
  pass through `remark-corpus.mjs`. A `site-reviewer` question, unanswered.
- **The `breakout-wheel` caption is 2,653 characters against a ~800-character budget.** ⚠️ **The remedy
  is to move the tariff into the host body and leave the caption the instruction — NOT to cut the
  correction. Do not brief this as a trim.**
- **A legal technique badly executed.** Everything here about dragging a trail skate at a closing blue
  line is legal in all six books, and none of that makes it safe with your head down.
- **The mechanical gates prove nothing about truth.** All six pass on every finding above.

---

## The second half of the round: what the commit gate's BLOCK bought

The first gate pass returned **BLOCK** on two coverage conditions — **C6**, no independent safety read
of `content/foundation/language_and_glossary.md`, and **C10**, no site build and no rendered review of
a diff that changes seven diagram files. ⚠️ **Both gaps were the coordinator's. Neither was a defect
in the text.** Closing them found a Critical, five Majors and two false sentences.

### 🔴 C6 — the file whose repairs were SELF-CERTIFIED

⚠️ **CLAUDE.md records this precedent against this project verbatim, and it reproduced exactly:** the
reviewer upheld every staged edit and then found a **Critical** beside them.

**Key Takeaway 12, voiced ALONE**, enumerated four books' *floors* for a two-handed shove on a
net-front player facing the net with their back turned, beside the goal frame — and stopped.
**Hockey Canada 7.5(c)** makes that a **mandatory match penalty** and *"names the cross-check and the
goal frame in one clause"*; USA Hockey 608(b)/(c) reach the same place. ⚠️ **A stick shove is not a
body check, so this reaches U13 and below, all girls' and women's play, and every adult non-check
league** — where the takeaway's other half does not apply at all.

⚠️⚠️ **And the document's BODY was correct because it DELEGATES the tiers. KT12 states tiers itself
and carries no delegation — so the one layer that speaks a tariff is the one layer the delegation does
not cover, and it is the layer voiced alone.**

Two Majors beside it: the commit's own repair reached Common Mistakes with three books and **KT11 with
two**, four sentences after KT11 tells the CARHA reader they are the audience; and **the INJURY route
to a mandatory ejection was missing from every layer** — Hockey Canada 8.5(b)'s third limb and CARHA
66(e) — ⚠️ **the route a forechecker actually meets, since a collision with a goalie who has come out
is graded interference far more often than charging.** ✅ **`rules_primer.md` already carried both
limbs: the glossary's enumeration was narrower than its own sibling.**

### ✅ C10 — and it settled a question recorded as unknown

**Nothing blocked on rendering.** ✅ **Captions DO get warning treatment** — measured live in the DOM,
`span.warn-inline` with amber, a left bar and a tint, through a **caption-specific path** that exists
because an earlier review found a spinal-injury warning rendering as the faintest text on its page.
⚠️⚠️ **Two agents had declined to add a caption marker on the belief this might not work, and the
48-character bold-run rule that governs body prose does not apply to captions at all.**

⚠️ **The consequence nobody had named: the split is at the FIRST glyph and runs to the end**, so 80%
of one caption is a single amber block and its second, third and fourth markers escalate nothing.
✅ **The remedy costs no words — the caption's closing sentence is tactics, not a warning, and moving
it before the first glyph shortens the amber run.**

**Measured rather than suspected:** 204 captions, median 713 characters, **92 over the 800 budget**.
The longest caption here is 5th corpus-wide; this round grew an existing outlier by 33% rather than
creating one. **A length problem, not a layout problem.**

---

## ⚠️⚠️ THE ROUND'S THESIS, SHARPENED TWICE

It began as *"a verified quotation of an incomplete rule reads as a complete one."* Two findings
widened it:

1. ⚠️ **A TRUE quotation can carry a FALSE sentence around it.** An agent killed mid-task by a rate
   limit left five edited sites in a staged file. A `rules-verifier` found **all eight of its
   quotations verbatim-correct — and two of the surrounding sentences false, both permissive.**
   `check_quote_drift` compares characters inside the marks and has nothing to say about the claim
   they are embedded in.
2. ⚠️ **A PARAPHRASE is invisible to every gate.** The *Checking from behind* anchor section — the
   destination four other sites route readers to for the tiers — rendered 608(b) as reaching
   *"the boards"* and dropped *"or goal frame"*. **No characters to compare, so no tool could see it.**
   ⚠️ **A clean `check_quote_drift` run is no evidence that a document's paraphrases are complete.**

### ⚠️⚠️ AND PROXIMITY CAN MAKE AN OMISSION WORSE — a shape not previously recorded here

The agent that repaired the anchor first argued the omission was mitigated by a correct goal-frame
sentence two clauses earlier. **It then rendered the audio and retracted:**

> ***"A listener who has just been told the IIHF names the frame, and is then told USA Hockey's limb
> reaches 'the boards', has been handed a CONTRAST, not a cure — the proximity made the omission read
> as DELIBERATE."***

**Both sentences sit in one chunk, 874 characters apart, heard in one breath.** ⚠️ **The standing
advice here is to measure whether a correction reaches a listener IN TIME. This is the inverse case:
co-location is what made it dangerous.**

---

## The search traps, and one is the best recorded this week

⚠️⚠️ **`iihf_rules_v1.1.txt` LINE-BREAKS THE WORD AS `cross-` / `checking`, so a regex for
`cross[- ]?check` SCORES ZERO ON THAT BOOK** while the flattened phrase scores 1. **A verifier who
swept for the label and got a zero would have CONFIRMED the false absolute.** ✅ **It was broken only
by reading Rule 43.1's SCOPE paragraph rather than its penalty clauses.**

⚠️ **The renderer expands figures**: a citation is spoken as *"six hundred and eight, clause b"*, so
grepping rendered SSML for a rule number returns a false negative. **Search the words around it.**

⚠️ **A fourth silent false pass joined this repository's collection:** `nohup … &` inside a
backgrounded call reports **the wrapper shell's** exit, not the build's — and because step 1 of the
chain deletes `dist`, **mid-build and failed-build look identical.** ✅ **The check is three facts:
`pgrep` the chain, confirm the log reached the LAST step, and confirm `dist` postdates every staged
file.** **The generalisation: in this environment, never accept an exit code as evidence that a thing
happened. Verify the artefact.**

---

## ⚠️ The coordinator's own error rate, stated plainly

**Five wrong premises handed to agents in this round**, every one caught by the agent rather than by
the coordinator: two proposed wordings that would have shipped defects (one stating a two–two split of
four books in a sentence naming six, and omitting the book on the other side); a citation —
**CARHA 72(e)(2), correctly 72(e)** — that **propagated six times** through the plan before an agent
caught it; a pre-existing label collision briefed as new, disproved with `git show HEAD:`; and a
Sources trailer briefed as a Key Takeaway.

⚠️⚠️ **Two censuses run by the coordinator were wrong, BOTH over-reporting.** A single-probe sweep for
`recklessly endangers` flagged a line that had just been repaired **and the file the repairing agents
were using as their exemplar of the correct wording**. A six-probe rerun still flagged two correct
sites. ✅ **A census over prose that states one claim in six wordings cannot be made precise by adding
probes. It is a pointer, and every hit must be read.**

✅ **The instruction that caught all of it is the one this repository already names: give every agent
the brief as a hypothesis and require it to refute the brief before acting.** **It has now earned its
place five more times in one round.**

---

## ⚠️⚠️ FOUR AGENTS INDEPENDENTLY NAMED THE SAME NEXT DEFECT

Each, unprompted, declared its weakest negative to be the same thing: **it verified the rule it was
given and never asked what OTHER rule family in each book prices the same act.** Named candidates:
**CARHA roughing (59), interference (66) and head contact (50); NHL 59 and 41; IIHF 59 and 41; USA
Hockey 602(a) and its Casebook; Hockey Canada 7.6(b)/7.7(b)**, which make a cross-check above shoulder
height a mandatory major plus game misconduct *"whether or not injury results"*.

⚠️ **Four independent agents converging on one gap is the strongest signal this method produces.**
**The next brief is that sweep, written by the ACT and never by a rule number** — and the sharpest
statement of it came from an agent auditing itself:

> ***"Brief a claim, never a line — surviving one level up: I generalised from a line to a RULE
> NUMBER, and stopped there."***

---

## Shipped knowingly, and why

⚠️ **`content/systems/forechecking_systems.md` ships a ` ```facts ` line, voiced alone, calling
CARHA 30(a) an absolute — *"any CARHA major is an ejection"* — when its Note carves out the accidental
high stick.** **The direction is HARSHER than the book: a reader is told an ejection is certain where
one case is not.** **Nothing is understated, no reader is endangered, and the permissive rule that
governs blocking is not engaged.** ✅ **A repair is new text and would need a reader; opening another
wave to make a safe sentence safer is how a round stops converging.** **Recorded as an open row with
its sibling in `zone_entries.md`.**

⚠️ **`language_and_glossary.md`'s Key Takeaway 11 is 2,807 characters, over `MAX_BILLED_CHARS`.**
Pre-existing, found while measuring its neighbour's headroom. **It will split and nobody has checked
where.**

---

## What this round still could not find

- **A layer written ASSUMING the old answer without ever naming it.** Three of this round's Criticals
  were that shape. It leaves **no lexical trace**, no grep reaches it, and only a fresh reader of a
  whole document finds one. **Not covered, not closed.**
- **A claim stated without its rule number.** One agent swept its file for this and came back clean —
  ⚠️ **and declared the limit: its sentence splitter is crude against 3,000-character paragraphs, and
  its backstop pass was bounded by the literal phrase *"from behind"*, so *"a hit into their numbers"*
  would escape every pass.**
- **Whether a screen reader announces a 3,258-character SVG `<desc>` usefully.** The whole
  accessibility argument for hiding the duplicate caption rests on it, and it is untested.
- **The six remaining documents carrying the one-limb 608(b).** Two were repaired here; the rest are an
  open row, and `goaltender.md` is the one to send first.
- **The mechanical gates prove nothing about truth.** All six pass on every finding above, and passed
  on the two false sentences a rules verifier had to read to catch.

---

## Dimension coverage — D1–D15, declared

⚠️ **A commit gate blocked this round on C3 twice: first because no coverage statement existed, then
because the statement's LABELS were mis-keyed against the table at
[`review_process.md`](../review_process.md).** ⚠️⚠️ **The mis-keying was not pedantry: it named safety
as D6, and D6 is NEGATIVE EXISTENCE CLAIMS — the dimension this diff leans on hardest. Its label had
been consumed, so the dimension appeared nowhere. `review_history.md` is reconstructed from these
records, so a wrong label here is the wrong-owner routing failure committed inside the next round's
scope.** **This is the corrected statement, keyed against the table itself.**

**CHECKED:**
- **D1 Rules accuracy · D2 Rules travelling without exceptions · D3 Rule-set divergence** — a
  `rules-verifier` pass, plus **independent re-derivation from `sources/` by three successive commit
  gates**. The last re-derived **~45 strings across six books**, each located in the book it is
  credited to, and read **past its closing mark**.
- **D5 Provenance** — covered by that same re-derivation: every new quotation attributes a string to a
  named book, and all ~45 were located **in the book credited, none in a sibling**. ⚠️ **An earlier
  draft declared D5 out of scope; a gate corrected it — the work was done, the declaration understated
  it.**
- **D6 Negative existence claims** — **the round's own subject alongside D8.** Tested rather than
  accepted: `matchpenalt` = 0 across **both** IIHF editions (and the Situation Handbook independently
  says major-plus-game-misconduct is *"the only option"*); `plane` = 0 in `carha.txt` with Rule 72 and
  both Notes read whole; the British shelf swept **twice, by a label sweep AND an act sweep**, for an
  on-side determination. ⚠️⚠️ **And the round's standing lesson is here: a TRUE negative is the
  dangerous kind, because it satisfies you and you stop.**
- **D8 Numeric ownership** — **the round's subject.** The five shapes in which a closed book count is
  CORRECT, plus a sixth (self-delimiting) and a new failure shape (the self-referential scope phrase,
  which has no numeral to go stale).
- **D9 The summary layer** — the KT12 **Critical**, the KT11 Major, and a repair wave that reached
  three further sites the brief never named, **two of them in Common Mistakes**.
- **D10 The key-facts layer** — a `facts-reviewer` read the new lines as a layer — ⚠️ **27 facts lines are TOUCHED and 24 are substantially new; the three residuals are real book additions (PWHL 85.3, CARHA 72(e), and `breakouts.md`'s six-book two-line-pass line), not typos, and a gate re-derived all three independently and found them exact**. One blocking
  defect, two Majors, traceability clean 24 of 24. ⚠️ **This was the gate's reason for blocking, and
  it was right: every earlier facts-layer defect this round was found by a reviewer looking for
  something else.**
- **D11 Reader safety** — **three** `safety-reviewer` passes, none by the author: one on the twelve
  previously unreviewed files, one on the three contact documents the first declared out of scope, and
  one on the file whose repairs had been self-certified. **Between them: one Critical and six Majors.**
- **D12 Read-aloud integrity** — chunk distance measured through `md_to_speech` for four separate
  claims, and every facts-layer finding judged as voiced alone. ⚠️ **The direction rule was established
  here: a universal warning split from its book list is safe; the same split under a permissive claim
  blocks.**
- **D14 Structure, style, terminology, cross-links** — its mechanical floor, `check_links.py`, passes,
  and the build's own `check-links.mjs` over `site/dist` reported 11,585 internal links and anchors resolving ⚠️ **(a different population from `check_links.py`'s 2,972 markdown cross-links — name the tool when quoting either)**.
  ⚠️ **PROSE STYLE was not reviewed — see the declaration below.**
- **D15 The rendered site** — a `site-reviewer` across two widths and both themes, plus built-HTML
  verification that the final edit's own text is present in `site/dist`.

**DECLARED OUT OF SCOPE, with reasons:**
- **D4 Citation integrity.** ⚠️ **No `source-verifier` ran.** A gate diffed the distinct URL set across
  all of `content/` between HEAD and the index: **zero new external URLs, zero removed.** Every new
  quotation is from **local primary text**, which D1–D3 covered. **A link-rot pass is an open row, not
  a gap in this diff.**
- **D7 The cardinal rule.** Covered **only** for the facts layer, where the `facts-reviewer` ran a
  cardinal-rule pass and found it clean. ⚠️ **The body prose was NOT swept for a coaching choice
  presented as a law of hockey.** The diff adds tariffs and book scopes rather than tactics, so the
  exposure is low — **but this is a declaration, not a clearance.**
- **D13 Folklore.** Every new sentence carries a book and a rule number, so there is no unsourced
  received wisdom in the added text. **Not separately swept.**

⚠️⚠️ **D4, D7 and D13 are the honest position, NOT a pass. A reader of this record should treat them
as UNEXAMINED for this diff.** ⚠️ **And the commit gate is not a dimension** — an earlier draft filed
it as D15, displacing the rendered site. **It is the C1–C11 gate, and it ran four times, blocking
three.**

---

## The third gate pass, and what reading the facts layer as a layer found

⚠️⚠️ **A NEW DEFECT SHAPE, AND IT DESERVES ITS NAME: THE SHARED-PREDICATE FLATTENING.**

A facts line ran *"for deliberate injury"* as **one predicate over four books**. Exact for three.
⚠️ **False for USA Hockey, whose threshold is LOWER** — Rule 602 is headed *"Attempt to Injure **or
Recklessly Endanger** an Opponent"*. **Voiced alone it told a USA Hockey reader that a
reckless-but-not-deliberate trip cannot reach a match penalty. It can, twice over.**

⚠️⚠️ **The citation was right, the quotation was right, the tier was right, and the PREDICATE was
wrong. No checker can see that.** ⚠️ **The line had THREE characters of headroom, so compression is
what produced it** — and the document's own body drew the distinction correctly two sentences later.
**Repaired by SPLITTING into two lines; three in-place rewrites were measured at 316, 321 and 336
characters against a 300 cap, so the split was necessary, not a preference.**

**Two further Majors from the same pass**, both the round's own thesis one rule over: **Hockey Canada
7.5(c) has TWO paragraphs**, the second a mandatory match penalty with **no boards or goal-frame
condition**, and facts lines carried only the first — ⚠️ **conspicuous, because neighbouring lines say
USA Hockey 608(c) *"asks for no boards"*, presenting Hockey Canada by contrast as a book that keeps
it.** And a line pairing Hockey Canada with CARHA on slew-footing where **Hockey Canada expressly bars
the alternatives (8.8(b), 8.8(e)) and CARHA does not** — CARHA 86(a) ejects through an ordinary foot
trip with no match at all.

### ⚠️⚠️ THE REVIEWER'S OWN SKETCH CONTAINED THE DEFECT ITS FINDING REPORTED

**The coordinator relayed it verbatim. The agent refused it:**

> ***"It ends 'Hockey Canada 8.8(c) and CARHA 86(b) eject only by a match' — the exact clause finding
> 3 says is wrong for CARHA. Written as briefed it would have shipped the finding unrepaired."***

⚠️⚠️ **A REVIEWER THAT FINDS A DEFECT CAN STILL REPRODUCE IT IN ITS OWN PROPOSED FIX.** ✅ **This is
the strongest case yet for *"specify the DEFECT and the CONSTRAINT; let the agent that has read the
document write the sentence"* — and the third time in this round that a supplied wording would have
shipped a defect.**

**Applying *"brief a claim, never a line"*, that agent then found the same false exclusivity at THREE
MORE sites the brief never named — two of them in Common Mistakes — and a fourth instance of the
shared-predicate defect in a Common Mistakes unit voiced alone.**

### Chunk measurements taken on the coordinator

- The split lines land in **chunks 052 and 053**. ⚠️ **The agent flagged the risk that a listener
  would hear the book map without its qualifier.** ✅ **Measured: it does not arise. The first line
  says *"Tripping's ceiling above the minor differs by book"* and then ENUMERATES ITS MEMBERS — no
  completeness claim — so the absent book is silence, not a permissive grant, and its entry opens the
  next chunk.**
- A repaired caption's permission and its correction land in **the same chunk**.
- ⚠️ **A universal warning split from its book list is SAFE; the same split under a PERMISSIVE claim
  would block. Record the direction, never just the distance.**

### ⚠️ Two more coordinator relay errors, both caught by agents

A brief said a line had **12 characters** spare; it had **7** — *"a brief sized to 12 would have
produced a line at 301."* And CARHA 53(a)'s match limb was relayed as a second mandatory route; it is
**discretionary** (*"could also be assessed"*), and the agent wrote *"allows one"* rather than
overstating it. **Total this round: seven wrong coordinator premises, every one caught by the agent
rather than the coordinator.**

### ✅ A declared gap closed by measurement rather than left open

An agent worried that *"wherever you play"* was a universal over a shelf it had not enumerated.
**Swept: no British competition document writes an on-side determination, none defines *"own side"*,
and `plane` scores zero across the whole British shelf.** The only hits are a U12 appendix, and
reading them rather than counting them shows it removes the **stoppage** — *"Play does not stop…
Reds OUT!"* — **not the test.** ⚠️ **A competition regulation that changes what happens when a rule
is broken does not amend the rule's test, and both live under the same heading, so no count can tell
them apart.**

---

## The fourth gate pass, and the finding that took a corpus-wide sweep

The third gate **blocked on C7**, and the defect it found could not have surfaced from reading the
diff: `content/foundation/language_and_glossary.md`'s **Offside** entry still said *"onside **under
NHL and IIHF rules only** … **two books of the four**"* — while **this same commit repaired that exact
sentence in SIX sibling documents**.

⚠️⚠️ **THE SEVENTH IS THE VOCABULARY OWNER.** It is the entry a reader looks the word up in, and it
was about to ship disagreeing with six siblings in the same commit. ⚠️ **Direction is harsher, not
permissive** — a PWHL reader is told to keep the blade down when she need not — **so it blocked on the
gate condition, not on danger.**

### ⚠️⚠️ THE LESSON, AND IT IS NEW: OWNERSHIP OF A WAVE IS PER-CLAIM, NOT PER-FILE

**That file had already been repaired THREE times in this round and read in full by a
`safety-reviewer`.** It was in the commit for the goaltender and 607(b) work. ⚠️ **The offside sweep
honestly never included it, because this record's own row for the file covers a different claim.**

✅ **So a file can be simultaneously: in the commit, heavily reviewed, and entirely unswept for the
thing that is wrong with it.** ⚠️ **The remedy stated earlier in this record — *"whenever a wave ADDS
a book to a document, sweep that document for self-referential scope phrases"* — is necessary and was
not sufficient, because it is scoped to the documents the wave TOUCHED. The offside claim's carrier
list was never enumerated corpus-wide.**

**Repaired by NAMING the books, not counting them** — NHL and IIHF 83.1, PWHL 85.1, the
contact-required pair, and CARHA 72(c) settling it neither way — closing on *"keep the blade down and
you are onside in every book"*, an instruction that had previously only been implied. **A PWHL Sources
entry was added; the file cited no PWHL source while already making five PWHL body claims.**

### 🔴 OPEN — the same residue at four sites OUTSIDE this commit

`rules_primer.md:947`, `rink_map.md:164`, `zone_entries.md:141`, `time_and_space.md:446`
(*"legal under all four rule sets"*). ⚠️ **One open row, not four future discoveries.**

---

## Two method findings from the closing wave

### ✅ THE PARAGRAPH-PAIRING CHECK DETECTS A MERGE, WHICH NOTHING ELSE SEES

An agent's insertion landed with no blank line after it and **silently merged** its new paragraph into
the one above. ⚠️ **The signature is unmistakable once known: paragraph count UNCHANGED, marked count
+1, and NO new key.** **It found its own defect and fixed it.**

✅ **So the check is not only a spoken-`"Important."` guard — and this repository already records that
a merge can fuse a claim with its counterweight.** **Run it after any insertion near a paragraph
boundary, not only after a marker change.**

### ⚠️⚠️ FLATTENING MANUFACTURES FALSE POSITIVES, NOT ONLY CURES FALSE NEGATIVES

Sweeping the British shelf for the offside **act** rather than the rule number returned three
non-zero hits. All three were read; all three are irrelevant. ⚠️ **One matched because flattening
FUSED A WORD BOUNDARY: *"emergency action **plan** (**EAP**)"* → `…planeap…`, which contains
`plane`.**

✅ **This repository records flattening as the remedy for the line-break false negative. It is also a
source of false positives across word and bracket boundaries, and the only cure is reading every
hit.** ✅ **No British competition document writes an on-side determination — now confirmed by two
independent methods, a label sweep and an act sweep.**

---

## Verification taken on the coordinator in the closing wave

- **Chunk distance, `language_and_glossary` Offside entry:** all four parts — the permissive books,
  the contact-required pair, CARHA's silence and **the instruction** — land in **chunk 028**. One
  breath, no split.
- **Chunk distance, the split tripping lines:** chunks **052** and **053**. ⚠️ **Not a defect: the
  first line enumerates its members and claims no completeness, so the absent book is silence rather
  than a grant.** **A third gate independently upheld this and said it would have blocked had the line
  opened *"in all six books"*.**
- **Build verified beyond mtimes:** `site/dist` postdates every staged file **and the built page for
  the last-edited document contains the repair's own text**, so the build covered the final edit
  rather than merely starting after it.
- **Markers:** `check_marker_pairs.py` across the staged files — **LOST MARKER = 0**. Two markers
  added this round both form `warn-inline` in `site/dist`, verified in built HTML. Bare glyphs
  **5 corpus-wide, all pre-existing in HEAD**.

---

## ⚠️ The coordinator's error count, final

**Eight wrong premises handed to agents in this round; every one caught by the agent or the gate, none
by the coordinator.** Two proposed wordings that would have shipped defects, and **a third sketch
written by the reviewer that found the defect it reproduced.** A citation wrong and propagated **six
times** through the plan. A pre-existing label collision briefed as new. A Sources trailer briefed as
a Key Takeaway. A character-headroom figure of 12 where the truth was 7. A build asserted fresh when
four staged files postdated it. A URL-use count of 32 where the truth was 29.

⚠️⚠️ **Two coordinator censuses over-reported, both in the flattering direction**, one of them
flagging the very file an agent was using as its exemplar of correct wording.

✅ **The single instruction that caught all of it: give every agent the brief as a hypothesis and
require it to refute the brief before acting on it.** ⚠️ **And its corollary, earned three times this
round: a supplied wording is a sketch to be checked, never a string to paste — even when the reviewer
that wrote it is the one who found the defect.**
