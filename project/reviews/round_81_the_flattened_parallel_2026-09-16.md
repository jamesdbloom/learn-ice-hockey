# Round 81 — the flattened cross-book parallel, and a coordinator finding that was wrong

**Date:** 16 September 2026
**HEAD at dispatch:** `d415f73`
**Method:** six agents on disjoint file sets, dispatched from
[`../plans/OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md); coordinator working the
corpus-wide censuses and the primary sources between waves.

---

## 1. A new defect class, with one instance verified in the primary text

⚠️ **THE SHAPE: a fifth book joined to another book's rule by a connective —
*"likewise"*, *"the same"*, *"both books"*, *"all four books"*, *"as well"*,
*"too"* — where the two books DIVERGE.** The connective does the damage; the
citation is real and the rule number is right.

**Nothing mechanical in this repository sees it.** The Markdown is valid, both
rule numbers resolve, and `check_absolutes.py` scores penalty **tiers** and
**denials** — not whether two books actually say the same thing. It is the same
blind spot that let the over-scoped permissions of Workstream 2D through.

### The instance

`content/systems/faceoffs.md:882`, a `Rule:` fact — **voiced alone, with a 300 ms
break either side, to a listener with no surrounding context:**

> Rule: Freezing the puck away from the net is a minor in three books — USA Hockey
> 614(c) behind the goal line with the body *"entirely outside of the goal crease"*
> or outside its *"goalkeeper's privileged"* area, **CARHA 58(b) likewise**, Hockey
> Canada's Interpretation 3 to Rule 10.1(a), clause v

**`sources/carha.txt` Rule 58(b), verbatim:**

> *"A Minor penalty shall be assessed to any goalkeeper who **deliberately** falls
> on or gathers the puck into their body, or holds or places the puck against any
> part of the goal or boards **when the puck is behind the goal line and the
> goalkeeper's body is entirely outside the boundaries of the goal crease area.**"*

**`sources/usah.txt` Rule 614(c), verbatim:**

> *"A minor penalty for delay of game shall be assessed to a goalkeeper who falls
> on or gathers the puck into their body **and causes a stoppage of play** when:
> (1) The puck is behind the goal line and their body is entirely outside of the
> goal crease."*

**Four divergences, each read in the book rather than inferred:**

| # | Element | CARHA 58(b) | USA Hockey 614(c) |
|---|---|---|---|
| 1 | Intent | *"deliberately"* | **no intent word at all** |
| 2 | Consequence | no stoppage required | *"causes a stoppage of play"* |
| 3 | Privileged area | **concept absent** | a trigger in its own right |
| 4 | Triggers | one sentence, location-conditioned throughout | **four**, and (4) is unconditioned by location |

⚠️ **Divergence 1 was found only by reading the SIBLING clause.** **614(a), the
skater clause, DOES say *"deliberately"*.** So the omission in (c) is deliberate
drafting, not an extraction artefact — and **a repair that wrote *"deliberately"*
into the USA Hockey limb would have narrowed a penalty the book applies without
it.** The standing rule *"a quotation is not a verification until its parent has
been read"* now extends to **siblings**.

⚠️ **Divergence 3 rests on a negative search, so it carries its control.**
`grep -ci privileged sources/carha.txt` → **0**.
`grep -ci goalkeeper sources/carha.txt` → **173**. The file is intact and
greppable; the zero is real.

**Neither rule is a superset of the other**, so no single clause can state both
without naming both books.

### The inverse half, which no connective reveals

⚠️ **A book named in the GRANT and given no authority for the LIMIT.** This is the
**permissive** failure and the one that reaches a reader.

`content/systems/special_teams.md:322` names CARHA among the books that write no
trapezoid — **verified: `trapezoid` and `restricted area` both return 0 against
the same 173-hit control** — and then cites **only USA Hockey and Hockey Canada**
for *"not freeze it out there"*. ⚠️ **The limit as stated also looks over-scoped
for CARHA: 58(b) reaches only where *"the puck is behind the goal line"*, and a
corner is partly in front of it.** ⚠️ **CARHA Rule 61(a) is not the answer — it is
expressly *"any player except the goalkeeper"*.**

Routed by message to the agent holding that file rather than edited around, per
`CLAUDE.md`'s rule for a finding landing in another agent's file.

### What was checked and found CORRECT

`content/positions/goaltender.md:522` claims USA Hockey 614(c) *"has four
triggers, not one"*. **Read on disk: it does** — (1) behind the goal line, body
entirely outside the crease; (2) failure *"to play the puck with their stick when
provided the opportunity to do so prior to being pressured by an attacking
player"*; (3) puck outside the *"goalkeeper's privileged"* area; (4) holding or
placing the puck against the goal frame or boards, or intentionally dropping it on
the back of the netting. **Recorded here so no later pass spends a round on it.**

---

## 2. A coordinator finding that was WRONG, and why it is written down

It was filed this round that `scripts/check_chunk_tails.py` *"prints a premise its
own docstring retracts"* — its footer asks *"does this still tell the truth if the
listener stops here?"* while the top of the file retracts the belief that a chunk
is a separate audio file.

⚠️ **That was FALSE.** The docstring uses **that exact sentence on purpose**,
immediately after the retraction, framed as *"the one the corpus already asks of
every facts value, with the volume turned up."* It is the **standalone-reading
test**, which the docstring endorses. **The footer and the docstring agree.**

⚠️ **The failure mode is the one this project has a name for: the coordinator ran
the tool, read its OUTPUT, and filed a defect against a file it had not read — in
the same hour as it dispatched five briefs warning agents against exactly that.**
It was caught by reading twenty more lines of the source before acting.

**The residual is real and much smaller,** and is kept as an open row: the footer
is the only thing a reader sees who runs the tool without opening it, and on its
own *"stops here"* reads as the retracted premise.

⚠️ **The tool was NOT changed.** It is named in a live brief, and
`CLAUDE.md` requires a shared tool to change **between** waves, never during one.

---

## 3. A plan row that carried the false parallel for two rounds

Workstream 2E's CARHA row asserted that CARHA 58(b) was *"in the same shape as USA
Hockey 614(c)(1)"*. **It is not** — divergences 1, 2 and 4 above all sit inside
that claim. The row has been corrected in place with both books' operative
wording, and the correction says plainly that it was wrong.

⚠️ **This is the second time this session a *"both books say the same thing"*
premise has failed on an intent word.** The first was the same pair of rules,
caught while briefing an agent. **A brief that had shipped either version would
have produced a repair that added a word USA Hockey does not write.**

---

## 4. Worklists run corpus-wide this round

**No figures are quoted here. Run the command; it is its own owner.**

| Tool | Outcome |
|---|---|
| `check_leaders.py` | **Every leader line clean** — stops before the label in all of them. No plan row existed and none is opened. |
| `check_chunk_tails.py --prose` | **Run for the first time.** Body prose is no longer unscanned. Opened a triage row. |
| `check_caption_echo.py` | Hits triaged to the diagram agent, **less the ones whose prose block sits in a file another agent holds** — those two have to be judged together and were deferred. |
| `check_diagram_quotes.py` | Unchanged; its existing row already names the four worth reading first. |
| `check_plan_rows.py` | Open-row count rising, as expected. |

⚠️ **The `--prose` result carries a severity correction the plan already records
and this round did not re-derive:** a chunk boundary is a **300 ms seam inside one
continuous file**. `AudioPlayer.astro` plays **one file per document** from a
single `<audio>` element. **There is no next file, and no finding may rest on a
listener never reaching one.** These are **prosodic** findings. ⚠️ **What stays at
full severity is the ` ```facts ` line, which genuinely is voiced alone.**

---

## 5. Dimension coverage

| Dimension | This round |
|---|---|
| Rules claims / cross-book divergence | **The round's subject.** Primary text on disk, parent and sibling clauses read. |
| Citations / provenance | Partial — rule numbers resolved in the books; external refetching **not** attempted. |
| Cardinal rule, numeric ownership | Not covered by the coordinator; delegated. |
| Facts layer | Covered as severity, and as the cap constraint on every repair. |
| Safety | ⚠️ **In scope by consequence:** a flattened goalkeeper-freeze rule is a two-minute minor a reader walks into. |
| Speech layer | `--prose` run; the severity correction restated. |
| Diagrams / site | Delegated; **`check_zones.py` NOT run — it needs a ~6-minute diagram build.** |
| Print layer | Out of scope this round; closed in `d415f73`. |
| Commit gate | **Not yet run. No content was staged by the coordinator.** |

---

## 6. What this method could not have found

- ⚠️ **A divergence between two books where BOTH are wrongly stated in the same
  direction.** Every test here compared the corpus against one book and then the
  other. **A sentence that misreads both consistently reads as internally
  coherent** and no comparison surfaces it.
- **Anything in the 22 CARHA-naming documents no agent held this wave.** The census
  named them; it did not read them.
- ⚠️ **The books not on disk.** Every negative here is scoped to the extractions in
  `sources/`, with a positive control. **A league whose book is not in that
  directory cannot be checked at all, and the corpus's silence about it is not
  evidence either way.**
- **Whether the connectives list is the right list.** *"likewise"*, *"the same"*,
  *"as well"* were chosen from one instance. ⚠️ **A parallel asserted with no
  connective at all — two books in one citation list, joined by a comma — is
  invisible to this search and is probably the commoner form.**

---

## 7. ⚠️⚠️ The disclosure class: the "every one has been false" premise BROKE

**This is the most important result of the round, and it is not a defect.**

An agent tested **18 facts-layer absence-of-evidence claims against the primary
text. SEVENTEEN HELD.** One was false, at two sites. None was
could-not-establish.

⚠️ **The premise it broke was written in `CLAUDE.md` and in the plan, and it had
been carried into five briefs this session as settled fact, in bold, twice.**

⚠️ **It had also sat four lines above `CLAUDE.md`'s own *"a true disclosure is the
correct state and the commonest hit, most held when attacked"* — flatly
contradicting it — for weeks, and nobody read the paragraph as a whole.**
**A claim about a RATE goes stale exactly the way a number does, and nothing in
this project was watching it.** Both files now carry the retraction and no rate.

### Why most of them held

**A rulebook is a closed, searchable text**, so a negative about one can actually
be established. That is the bulk of the facts layer.

⚠️ **Two held ONLY because the agent used the technique the trap defeats.**
`crt6.pdf` held **only after `pdftoppm` rendered it** — the `.txt` is page
furniture — and the skate-definition and IIHF Situation-10.26 negatives held
**only after the sentence was read POSITIONALLY in each edition** rather than by
trusting a zero. ⚠️ **A worse method would have reported three false disclosures
that are not false**, which is a failure mode this project had not considered: the
disclosure work can manufacture defects as well as find them.

### The one that broke, and how it was found

`content/positions/center.md:613` (facts layer, voiced alone) and the body
paragraph below it: *"In British men's, mixed and junior hockey **no book states a
body-checking age**"*.

**Refuted by two documents already in `sources/`:** `ihuk_junior_roc.txt`'s format
table (U10 and U12 *"non-checking"*; U14 / U16 / U19s *"checking"*) and
`ihuk_u10_roc.txt`'s *"Bodychecking is NOT allowed in U10 matches."*

⚠️ **It was not found by attacking a search. It was found by ROUTING** —
`sources/README.md` had already written the answer down, under a heading saying so
in terms. **The corpus's own owner document, `uk_rules.md:15`, already carried the
answer too.** So this is a **propagation failure**, and it produces a flat
cross-document contradiction read aloud: one facts line says the answer is
published, another says no book states it.

⚠️ **The distinction that decides every repair in this class: the SCOPED form is
TRUE and stays; the UNSCOPED form is false.** *"Neither rule book sets a checking
age"* is correct — the rule books are silent. *"No book states a body-checking
age"* is wrong — the governing body publishes one. **Do not sweep the scoped form.**

### What this changes about how the backlog is worked

- ⚠️ **The seventeen HOLDS were attacked as SEARCHES and survived. None was checked
  against `sources/README.md` and the sibling documents** — the one method that has
  ever caught this class. **The agent did that routing check on exactly one claim,
  because the claim named British hockey, and said so against itself.**
- ⚠️ **The `no-X-exists` family — roughly 35 of the 70, the biggest block — is
  UNTESTED and no verdict is reported on any of it.** No network search was run.
  These are claims about the coaching and analytics literature, they have **no
  rulebook behind them**, and that is precisely why they have survived: **nobody
  can falsify them cheaply.**
- ⚠️ **Selection bias, stated plainly: 17 of 18 holding does not mean the class is
  clean. It means the ones checkable offline were the ones checked.**

---

## 8. Three coordinator errors this round, all caught by agents

⚠️ **Recorded because the pattern is the finding: every one was a case of stopping
one level short of the text, and every one was caught by an agent that had read
what the coordinator had not.**

1. ⚠️ **A brief was sent to the WRONG AGENT.** The CARHA finding for
   `faceoffs.md` went to the agent holding `body_contact_and_battles.md`,
   addressed as though it owned those files. **It refused to edit them and named
   it as the ownership-assertion failure `CLAUDE.md` records from round 59.**
   **The coordinator assumed an agent id from dispatch order.** Re-routed.
2. ⚠️ **`CARHA Rule 61(a)` was read, the goalkeeper seen excluded, and the sibling
   never opened. `61(b)` IS the goalkeeper clause** — *"A Minor penalty shall be
   assessed to a goalkeeper who deliberately holds the puck and… is causing an
   unnecessary stoppage of play"* — **and it carries no location condition.** So
   `special_teams.md:322` is **under-cited, not over-scoped**, and the proposed
   repair was wrong. ⚠️ **This is the sibling-clause failure recorded in §1 of this
   very record, committed in the same hour, by the person recording it.**
3. **A defect was filed against `check_chunk_tails.py` from its OUTPUT** without
   reading the source — see §2.

**The common shape: read the tool's output, or the sub-clause, and stop.** The
countermeasure that worked every time was an agent reading the primary text.

⚠️ **And one premise the coordinator gave an agent was actively dangerous.** The
age-token brief specified *"write the ages OUT rather than the boundary"*. Under
Hockey Canada Rule 7.3 the set above U13 is **open-ended** — *"and any other
divisions approved by a Member of Hockey Canada"* — **and the book contains no
`U15` token at all.** ⚠️ **Enumerating would have CAPPED an age-graded contact
rule.** The brief's own guard (*"check the book before you enumerate"*) fired, and
the agent substituted a noun head — *"above the U13 line"* — which leaves the set
untouched and is the document's own house phrasing. ⚠️ **That is `CLAUDE.md`'s
*"the brief's proposed wording is a brief, not a patch"* holding for the second
time on record.**

---

## 9. `rules_primer.md` — the quotation-drift pass

**106 flagged of 1,187 fragments.** Working tree change confined to that file, 28
lines.

| Shape | Found | Repaired | Read and LEFT |
|---|---|---|---|
| 3 — terminal `.`/`,` inside the quote where the source continues | **34** | **30** | 4 (false positives) |
| 1 — initial capital silently lowered | **67** | 0 | **67, deliberately** |
| 2 — initial capital raised | 0 | — | — |
| 4 — interior case | 5 | 0 | 5 |

**The 67 lowered initials were left on purpose, and it was the right call.** The
document already carries **96 disclosed `[x]` bracket insertions** alongside them,
so it mixes both conventions: repairing a fraction leaves it no more consistent,
and repairing all 67 is the sweep the method forbids. ⚠️ **Compounding it: given
the wrong-occurrence rate below, each of the 67 would need its own source read to
know which letter to bracket.**

**Six repairs restored dropped substance** rather than moving punctuation — among
them IIHF Table 16 Situation 6B, where the dropped words name **who** is penalised
(the paragraph's whole question), and USA Hockey 610(g), where *"or attempts to
delay the game in any manner"* is **a genuinely second trigger**.

⚠️ **One repair was made and then REVERTED, and the reasoning is the finding.** At
`:995` a qualifier was added restoring what both books put after *"enforced
exclusively…"*. It was backed out because **the same quotation appears at `:728`
and `:1139`** and both already end it the other way. **Adding it at one of three
sites would have manufactured a divergence; propagating it to all three is a
content decision, not a quote-drift one.** Left as an open finding.

### ⚠️ The tool MANUFACTURES attribution drift — and that is the stronger half

`CLAUDE.md` and the tool's docstring both say it *"cannot see attribution drift"*.
⚠️ **The more actionable half is that it INVENTS it: 8 of the 39 hits read were
matched against a book the corpus does not cite at that point**, and **in two cases
the matched clause was one the corpus explicitly contrasts AGAINST the clause it
is quoting.** Examples: `:434` cites **NHL 59.1**, the tool matched USA Hockey 609;
`:1173` cites **NHL 19.4**, the tool matched a CARHA **stop-play** rule.

⚠️ **The brief's own worked example was refuted for this file.** It claimed a
Hockey Canada 7.1(c)(iv) quotation hid *"or injury"*. **The corpus quotes
Interpretation 15 to Rule 10.6(f)(iii)(iv), which has no *"or injury"* in it** —
the *"or injury"* wording is **7.1(c)(ii)**, a different sentence, and the tool
matched that one. **Nothing was hidden, and the cited rule number is right.**

### Content findings raised, not acted on

- ⚠️ **`:894` — NHL Rule 6.1's escalation is missing.** The quotation now runs to
  the source's full stop, but the rule's next sentence — *"Should this protest
  continue, he may be assessed a misconduct penalty, and if it further continues,
  a game misconduct penalty shall be assessed"* — **is not in the document.** A
  player learns complaining costs two minutes and **not that it escalates to a
  game misconduct.** ⚠️ **It surfaced only because a repair forced the parent to be
  read — which is the argument for reading parents generally.**
- **`carha.txt` letters its rules `19(d)`, `65(g)(2)` where this corpus and the
  other books use `19.4`.** Not in `sources/README.md`, and **it is part of why a
  wrong-occurrence match looks plausible.**

---

## 10. The diagram pass — and a brief that pointed at the wrong hits

**Repaired: one caption.** `dz-strong-side-overload` at **41.2%, the
second-highest echo in the corpus**, cut to **13.5%**.

⚠️⚠️ **THE BRIEF NAMED THE TWO WEAKEST HITS IN THE AGENT'S OWN FILES.** The two it
named rank **32nd and 33rd of 34**; the agent's two files own **eight** of the 34,
including the one **the tool's docstring names by slug and by phrase as the
cuttable example.** ⚠️ **The coordinator read the tool's output tail, took the
first two lines mentioning its files, and briefed from those.** The agent found
the real one by running the tool itself.

**Every limb cut was verified still present in the prose block immediately above
the marker**, verbatim, and **nothing protected came out** — the negative-existence
disclosure, the frequency hedge, and the cardinal-rule tail all stay. `md_to_speech`
emits `"Diagram. " + caption` and nothing else, so **a listener had been hearing
four propositions twice in a row, the second time with nothing added.**

**Seven other hits in those files were read and LEFT**, each with its kind named —
region definition, disclosure propagation, safety limb, or picture content the
prose does not carry. **That is the tool working correctly.**

### ⚠️ A brief premise that reproduced the exact failure `CLAUDE.md` warns about

The brief said *"Only `rink_map_and_glossary.md` settles what a region is."*
⚠️ **That file has not existed since `fd9e903`** — it was split into `rink_map.md`
(regions) and `language_and_glossary.md` (vocabulary). ⚠️ **`CLAUDE.md` documents
this at length, in the same passage the brief drew the rest of its `check_zones`
warning from, and the coordinator copied the stale half.**

**Corpus-wide, verified by census:** **17** diagram modules and **4** scripts
(`check_disclosures`, `check_geometry`, `check_links`, `check_zones`) still name
the deleted file. ⚠️ **No `owner:` field carries the name, so `check_links.py` is
blind to every one.** ⚠️ **`CLAUDE.md` said *21* modules and the census found
*17* — the figure has been replaced with the command, because a count of a
shrinking backlog goes stale in the direction that flatters it.**

### ⚠️ A refutation from that agent that is itself WRONG — recorded so it is not propagated

The agent reported: *"'`boardArc` … was exported instead' — I cannot confirm.
`grep -r boardArc site/` returns nothing anywhere in the tree."*

⚠️ **That is false.** `site/src/diagrams/risk_management.mjs:148` has
`export function boardArc(sy, ex)`, and `site/src/diagrams/rules_primer.mjs:31`
imports it. **The export is real and in use.** The agent's grep must have failed;
the claim was not checked before being written into a report.

⚠️ **Recorded because "refute the brief" cuts both ways: an agent's refutation is
new work and has not been reviewed either.** This one would have sent a later
round to re-export a function that is already exported.

### Reported, not fixed

- ⚠️ **`site/scripts/lib/rink.mjs` gives no trim for a route terminating at a bare
  `G`**, so `glyphCovers` treats the goaltender glyph as covering nothing and a
  C-cut arch is drawn **through the letter**. Measured in the built SVG.
  ⚠️ **This affects every goaltender-owned route in the corpus, not one diagram.**
- **Two unlabelled zones are invisible to `check_zones`'s label pass** —
  `goalie-rim-stop-or-clear`'s trapezoid and `dz-collapsing-box`'s house. Compared
  by hand against `rink_map.md` instead.
- **26 caption-echo hits outside those files are unread**, including
  `the-goalmouth` at 42.9%, `the-slot` at 39.1% and `the-high-slot` at 25.0% —
  ⚠️ **which the docstring says are CORRECT BY CONSTRUCTION and must not be
  reworded.** The unread ones that matter are `six-on-five-shape` (26.1%) and
  `defend-squash-and-slide` (25.0%).
- `shooting.mjs`'s `shooting-breakaway-approach` (10.3%) was read for routing:
  **the overlap is entirely a negative-existence disclosure, which non-negotiable 4
  protects, and the caption carries two things the block does not.** Judged not
  cuttable — but the block is in another agent's file, so the call is theirs.

**Build discipline:** `build-diagrams.mjs` run with the absolute node binary,
**exit code captured without a pipe** so the shim could not mask it. The
intermediate run reported `PNG cache: 203 reused, 1 rendered` — **exactly one
diagram changed**, which is the confirmation the caption edit reached the build
product and nothing else did.

---

## 11. ⚠️ Interrupted by the weekly rate limit, not by completion

**Three agents died mid-round with an Opus `rate_limit` API error** (resets 20
September, 22:00 Europe/London). The session's model then switched to Sonnet 5
for the coordinator's own turns.

**Before deciding whether the work in progress was safe to keep**, every
affected file was checked for truncation: fence counts and `**` counts even in
all five, each file ending on a complete sentence with closing punctuation. Then
the full gate suite was re-run clean: `check_links`, `check_facts` (837 blocks /
5619 facts, unchanged), `check_absolutes`, `check_geometry`, `check_secrets`,
`check_tables --near`, `check_plan_rows`. **No truncation, no gate regression.**

**What each interrupted agent left behind, checked individually:**

- **`content/systems/faceoffs.md` and `content/systems/special_teams.md`** — this
  agent's CARHA repairs were **complete and correct** before it died. `:882` now
  names the divergence (*"CARHA 58(b) only where deliberate"*, 295/300 chars) and
  the extended treatment in the *quick rim* passage quotes CARHA 58(b) whole,
  states all three verified divergences, and **explicitly declines to resolve the
  `when`-clause ambiguity** — exactly as instructed. `:322` now cites **both**
  CARHA 58(b) and 61(b). `check_quote_drift.py` on `rules_primer.md` reproduced
  the other agent's exact before/after figures (1187→1216 clean, 106→76 flagged),
  confirming that pass's 30 repairs are intact.
- **`content/technique/body_contact_and_battles.md`** — the age-token recast was
  complete (reported and verified in §6 above). ⚠️ **But a SECOND task on this
  file — propagating the corrected British checking-age disclosure to every site —
  was left half-done.** Sites `:92`, `:107-121` and `:398` carried the fix; **three
  further sites at `:424`, `:468` and `:498` — the same `Rule:` fact repeated
  verbatim in three separate facts blocks — still read *"Britain publishes no
  body-checking age"*, contradicting the fixed sites in the same file.** The
  agent's last message before dying was *"Final coherence check — every Britain
  statement in the file, read together"* — it was in the middle of exactly the
  check that would have caught this.
  ⚠️ **Fixed by the coordinator.** All three replaced with *"Britain's age is in
  IHUK's Rules of Competition, not either rule book"* (295/300 chars — the first
  candidate tried, at 312 and 317 chars, both exceeded the cap and were rejected
  before writing).
- **`content/positions/goaltender.md`, `defender.md`, `center.md`, `winger.md`**
  — the `rules-verifier` dispatched across all four **died before editing any of
  them.** `git status` confirms zero changes. ⚠️ **Its last message was *"Now the
  style guide, and in parallel the CARHA counts"* — it had not yet begun the
  census this workstream needed.** One finding from that class had already
  reached `center.md` via a different agent (the disclosure tester); the
  coordinator applied it directly, the same way as the body_contact propagation
  gap above: both sites (`:613` facts, and the body sentence) now read *"the age
  comes from IHUK's Rules of Competition, not either rule book"* (279/300 chars).
  ⚠️ **`goaltender.md`, `defender.md` and `winger.md` remain entirely unattempted
  for this class.** Re-dispatch when quota allows.

⚠️ **The pattern across both coordinator interventions is the same: a
propagation check was interrupted one step before it would have caught the gap
itself.** Neither fix required new investigation — both used facts already
established and verified earlier in the round (the IHUK Rules of Competition
citations from §7). **The risk this section exists to name: an interrupted
agent's PARTIAL propagation is more dangerous than NO propagation, because some
sites now say the true thing and others still say the false thing, in the same
file, and nothing except a full re-read of every occurrence would find that.**
This was found by grepping the specific claim shape across every file the
interrupted agents had touched, not by trusting either agent's own "done" report
— **neither agent got the chance to file one.**

---

## 12. The `no-X-exists` literature disclosures — tested with search, 11 of 11 held

Following the facts-layer disclosure break in §7, the untested literature block
(claims about coaching/analytics studies rather than rulebooks — roughly 35 of
the 70 facts-layer disclosures, the biggest single block) was tested with actual
web search for the first time. **11 of 11 tested groups held, covering roughly 23
of the ~35 flagged lines** via testing a repeated pattern once for every instance
it covers. **Zero false.**

⚠️ **The strongest-evidenced disclosure in the corpus was confirmed in passing:**
`game_management.md:1037` already cites four real studies on penalty type and
rate (Gilbert & Trudel; McFaul et al.; Kirker, Tenenbaum & Mattson; Régnier et
al.) and explicitly says none of them measures *motive* — the specific thing the
disclosure disclaims. Valiquette's uncheckable percentages were confirmed by
**fetching the source PDF directly**: it shows the figures as slides with no
methodology, sample size, or coding rules published anywhere.

⚠️ **One genuine near-miss, flagged and NOT repaired.** `neutral_zone_systems.md`
and `defending_the_rush.md` disclaim that no public data classifies odd-man
rushes by the coaching-named cause (a blue-line turn-back, an E-W pass, a low
pinch). Real analytics work classifies rush **goals** by **zone of origin**
(defensive-zone exit vs. neutral-zone turnover vs. counter-attack) — a coarser
grain than the corpus's claim, and the headline percentages found could not be
traced to a named author, publication or methodology that would clear this
corpus's own evidentiary bar. **Close enough that a careless future restatement
could conflate the two.**

⚠️ **A caveat on method, stated by the testing agent against its own result:**
several holds leaned on a document's own Sources trailer as strong prior
evidence — already-cited, already-quoted text treated as reliable — **without
independently re-fetching the underlying study.** That is weaker than a
from-scratch verification, and it is named here so a future pass knows which
holds were checked at that lighter weight.

**12+ of the ~35 literature disclosures remain genuinely untested**, and the
agent was explicit: treat them as unknown, not as cleared by resemblance to a
tested neighbour. The 538 body-layer and 27 unvoiced disclosures — outside the
facts layer entirely — are untouched by either this pass or the earlier one.

⚠️ **Read together with §7, the picture is now: two different disclosure
sub-classes, tested by two different methods, both came back mostly clean** —
rulebook negatives (17/18) via primary-text search, literature negatives (11/11)
via web search. **The one confirmed false disclosure in either pass was a
propagation failure**, not a sourcing failure: a question the corpus had already
answered elsewhere, in a document nobody cross-checked against. That remains the
most likely shape for the next one, in both sub-classes.

---

## 13. Re-dispatched on Sonnet after the Opus quota stayed exhausted — both waves completed clean

Two agents were re-dispatched with an explicit Sonnet model override, since the
Opus weekly quota (resets 20 September) did not recover mid-session. Both
completed without incident; their file sets were disjoint from each other and
from the earlier, interrupted Opus agents.

### CARHA verification — `goaltender.md`, `defender.md`, `winger.md`

Independently re-derived the CARHA census (22 / 5 / 11) rather than trusting the
brief's figures, and found the brief's `winger.md` count of 15 was actually
`center.md`'s — corrected before use. Every CARHA parallel in `goaltender.md`
and `winger.md` was tested against `sources/carha.txt` and the matching book and
found **already correct** — including the wave-off/touch-condition parity at
CARHA 65(f)/(g)(2), the one-word-different goaltender rule at CARHA
Note 2/59(a) vs. Hockey Canada 7.10(d), and the peacemaker ejection at CARHA
37(d) (previously reported-not-verified, now confirmed).

`defender.md` had the genuine gap, the same shape as the already-fixed
`special_teams.md:322`: CARHA's freeze restriction was cited only via 58(b)
(conditioned on the puck being behind the goal line), with no citation for
CARHA's own location-free equivalent, 61(b) — *"deliberately holds the puck and
in the opinion of the Referee, is causing an unnecessary stoppage of
play"* (`sources/carha.txt:2938-2940`). Fixed at all four sites the claim
appears (facts block, body blockquote, Key Takeaways, Sources trailer); the new
`Rule:` fact measured 188/300 chars in a block now at 8/11 facts. No book was
removed from any list in either file.

Also run, per an added task: `check_quote_drift.py` on the same three files.
`goaltender.md` 29→24, `winger.md` 5 flagged both before and after but with
different content (2 genuine restorations replacing 2 that no longer flag,
since the fix count and false-positive count moved independently). Four
confirmed wrong-occurrence false positives — the tool matching Hockey Canada
Interpretation 3 clause iv (which continues) when the corpus correctly quotes
clause v (which genuinely ends there), twice, and a USA Hockey Rule 603
near-duplicate line once — none required a corpus edit.

**Five genuine meaning-changing restorations**, all confirmed by reading the
cited clause in full before touching anything: a Hockey Canada 8.3(a) snow rule
that had dropped *"in lieu of the Minor penalty or Penalty Shot"*, disguising
whether an awarded goal replaces or stacks with the other remedies; a Hockey
Canada 11.1(e) Note that had dropped a permission the parallel sentence two
clauses earlier already quotes in full; and, with real practical stakes, the
IIHF Rule 69 quotation in `winger.md` (two sites) that told a winger an on-ice
interference call was final when the rule itself says it is reviewable — the
same "enforced exclusively... but may be subject to Video Review or a Coach's
Challenge" qualifier flagged as an open, unresolved finding in `rules_primer.md`
in §10 above. Here it had a reader-facing consequence and was fixed; there it
was left as a cross-document propagation decision. Both calls are recorded so
neither reads as inconsistent with the other.

### Quote-drift wave two — `special_teams.md`, `faceoffs.md`, `defending_the_rush.md`, `zone_entries.md`

21 repairs across four files, all confirmed clean by whole-file diff. 18 were
punctuation repositioned outside the quote marks with nothing hidden — the
source's continuation in each case was an unrelated enumerated sub-clause, a
bare cross-reference, or a Note already quoted separately in the same passage.
Three restored genuine dropped substance: Hockey Canada 4.11(a)(i)'s
penalty-shot criterion had silently dropped *", or fouled by the goaltender"*
(cross-checked against `risk_management.md`, which already carries the clause
in full and was left untouched — not owned this wave); USA Hockey 406(a) had
dropped *"as a result of the infraction"*, a real scope qualifier
(`special_teams.md` already quotes the same clause in full — brought into
line); and IIHF Rule 83.1's on-side test, quoted as an explicit "reads in
full" block, had dropped its own closing clause, *"for the purpose of the
'off-side' rule"*.

Zero wrong-occurrence false positives in this wave — every ADDED-shape hit's
citation was checked against the primary source at the stated rule number and
matched correctly. All four documents already mix the `[x]`-disclosed
convention with bare lowered initials, so per the established precedent (first
applied to `rules_primer.md`), all CASE-shape hits were left uniformly rather
than partially swept.

### A transient facts-count discrepancy, explained rather than chased

Mid-round, `check_facts.py` reported 5620 facts where the previous commit's
gate run had shown 5619. This was not investigated as a live defect: both
agents were running concurrently, and `defender.md`'s new fact (the CARHA 61(b)
addition) landed between the two checks. Per the standing warning that a
checker run while agents are live proves nothing about a file mid-edit, the
number was left alone and re-verified only after both agents reported
complete — where it confirmed correctly at 5620, matching the one fact that was
actually added.

### Full gate suite, after both waves and the diagram rebuild

`check_links` (exit 0), `check_facts` (837 blocks / 5620 facts, all conform),
`check_absolutes` (39 documents + 408 caption/describe units, clean),
`check_geometry` (77 assertions, agrees with `rink_map.md`), `check_secrets`
(338 tracked files, no findings), `check_tables --near` (3 dropped, 46 read
aloud, 9 near a limit — unchanged), `check_plan_rows` (every quoted assertion
in an open row still appears in the file it names). `check_zones` was also run
against a fresh `build-diagrams.mjs` output (204/204 rendered, exit 0) following
the earlier diagram-caption wave; its worklist output (shared spans, mirrored
regions) shows nothing inconsistent with what that wave's own agent already
verified by hand.

---

## 14. A repair introduced the exact defect class it was fixing, in four places

`winger.md`'s restoration of the truncated "enforced exclusively... on-ice
judgement of the Referee(s)" clause (§13 above) quoted the fix as *"but may be
subject to a Video Review… or to a Coach's Challenge"*, framed as what *"both"*
books add. ⚠️ **It is not what both books add.** Read against the primary text:

- `sources/nhl_rules.txt:7144-7146` — *"...enforced exclusively in accordance
  with the on-ice judgement of the Referee(s), but may be subject to a Coach's
  Challenge (see Rule 38)."* **No Video Review.**
- `sources/iihf_rules.txt:5513-5514` — *"...but may be subject to a Video
  Review: ➔ Rule 37... or to a Coach's Challenge ➔ Rule 38..."*

**The fix corrected one flattened parallel and committed a second, smaller one
in the same sentence** — presenting an IIHF-specific mechanism as something the
NHL text also states, which is the same defect class this entire round exists
to find (Workstream 2M). It was caught only because a later agent, told to
apply "the already-committed `winger.md` wording exactly," faithfully copied it
into three more documents — and two agents working the SAME clause independently
arrived at different, incompatible wordings: `center.md` and `shooting.md`
(technique cluster) correctly separated the books' wording (*"the NHL naming
only 'a Coach's Challenge', the IIHF naming 'a Video Review… or to a Coach's
Challenge' as well"*); `on_ice_communication.md`, `time_and_space.md` and
`playing_without_the_puck.md` (×2, hockey-iq cluster) copied the flawed
`winger.md` form. **Reading the two clusters' reports side by side is what
surfaced it — neither agent's own gate suite could, because the sentence is
syntactically valid and cites two real rule numbers.**

**Fixed at all five sites** (`winger.md` ×2, `on_ice_communication.md`,
`time_and_space.md`, `playing_without_the_puck.md` ×2) to the pattern already
independently arrived at by the technique-cluster agent, and applied the same
correction to `project/content_style_guide.md`'s own copy of the same clause —
found only because an agent flagged it as out-of-scope-but-worth-fixing rather
than silently ignoring it. `content/positions/goaltender.md:1015` and
`content/systems/special_teams.md:1033` already scoped the Video Review clause
to the IIHF correctly and needed no change.

⚠️ **The lesson: "match the already-committed wording exactly" is a propagation
instruction that inherits whatever defect the original commit carried.** A
brief that tells an agent to copy a fix rather than re-derive it from the
primary source removes the one check — reading the source — that would have
caught this. Two independent re-derivations (technique cluster) got it right;
one instructed copy (hockey-iq cluster) propagated the error three more times.

---

## 15. Third parallel wave — systems cluster, and a completeness gap closed

`offensive_zone_play.md`, `breakouts.md`, `neutral_zone_systems.md`,
`defensive_zone_coverage.md`, `game_management.md`, `forechecking_systems.md`:
24 shape-3 repairs total, all punctuation moved outside quote marks with
nothing hidden — confirmed against the primary source in every case, none a
wording change. `breakouts.md`'s 13 flagged hits were all case-only, left
uniformly per the established mixed-convention precedent. `defensive_zone_coverage.md`
was the single most-flagged file in the corpus at 26; no meaning-changing drift
was found there despite the volume.

Two confirmed wrong-occurrence false positives, both benign: `forechecking_systems.md`'s
IIHF "recklessly endangers" clause matched Rule 20.1/55.3's boilerplate instead
of the correctly-cited Rule 43.3, whose real sentence genuinely ends where
quoted; and the USA Hockey Casebook's "reckless endangerment" phrase matched an
unrelated Rule 640 roughing situation in two files, when the actual cited
clause, Rule 607(e), is a short, complete sentence.

**The charging-strides CARHA completeness gap, recorded earlier in this round
as a low-priority finding, was closed.** CARHA Rule 52's Note —
*"[i]f more than two steps or strides are taken, it shall be considered a
charge"* (`sources/carha.txt:2556`) — matches USA Hockey 607's threshold
exactly and was added at all 8 layered occurrences across two documents (facts,
body, Common Mistakes, Key Takeaways in each), with *"three of the four
books"* corrected to *"four of the five books"* everywhere that framing
appeared and a scope qualifier attached at each mention. ⚠️ **This is a genuine
content addition, not a mechanical drift repair, and it was made carefully:
verified against primary text first, checked against the char cap (290/300 and
243/300, comfortable room), and propagated through every layer of both owning
documents.** ⚠️ **It was NOT propagated to three sibling documents that discuss
the same comparison** (`switching_positions.md:293`, `body_contact_and_battles.md`,
`defending_the_rush.md`) — a new, smaller completeness gap opened by closing
the first one, recorded as an open plan row rather than chased further this
round.

---

## 16. Final state

Three parallel Sonnet-model agents plus coordinator corrections closed this
round's active work: 39 more drifted quotations repaired across ten documents
in the first parallel dispatch of the day and thirty across the earlier two
waves (§9, §13, §15 combined); one flattened-parallel defect found and fixed
(`defender.md`); one flattened-parallel defect introduced by a repair and
caught and fixed in five places plus the style guide (§14); one disclosure
class tested and found mostly sound (§7, §12); one completeness gap closed and
one opened in its place (§15). Full gate suite clean: `check_links` (0),
`check_facts` (837 blocks / 5620 facts), `check_absolutes` (39 documents + 408
caption units), `check_geometry`, `check_secrets` (338 files), `check_tables
--near` (3 dropped, 46 read aloud, 9 near a limit, unchanged), `check_plan_rows`
(every quoted assertion verified).

---

## 17. Corpus-wide quotation-drift sweep — final wave, and completion

Two more parallel agents closed out the remaining ten documents.

**Contact cluster** (`body_contact_and_battles.md`, `switching_positions.md`,
`defending_the_rush.md`): refuted a brief premise outright —
`switching_positions.md:293` was reported as the charging-strides comparison;
it is actually the goalkeeper's-equipment comparison and already correctly
cites CARHA, so there was nothing to propagate there. Two more confirmed
wrong-occurrence false positives in `body_contact_and_battles.md` (a CARHA
clause matched to an earlier, unrelated occurrence of similar wording in the
same book; a USA Hockey Casebook situation matched to an NHL rule with a
similar but longer sentence).

⚠️ **One genuine meaning-changing repair:** `switching_positions.md` had
dropped IIHF 101.1's condition — *"provided that 'possession of the puck'
remains the sole object of the two (2) Players"* — leaving a conditional
permission (two players may push and lean into each other) read as
unconditional. Restored to match the wording already correct in
`rules_primer.md`. Verified against `sources/iihf_rules.txt:7494-7497`.

The CARHA-52 charging-strides propagation was completed: `body_contact_and_battles.md`
already had CARHA Rule 52 in its Sources trailer from an earlier round and
needed only body/facts propagation; `defending_the_rush.md` had never cited
CARHA at all despite running the identical stride comparison in four layers,
and gained the citation in all four plus a new Sources-trailer bibliography
entry. The coordinator then fixed a stale cross-reference this propagation
left behind: `forechecking_systems.md:217` pointed readers to
`body_contact_and_battles.md` as *"the four-book comparison"*, now corrected
to *"five-book."*

**Remaining tail cluster** (`language_and_glossary.md`, `getting_started.md`,
`equipment.md`, `team_play_and_culture.md`, `conditioning_and_recovery.md`,
`skating.md`, `how_to_watch_hockey.md`): two repairs, both confirmed
non-substantive restorations of dropped clauses already covered by
surrounding prose, except one — the England Ice Hockey insurance quote in
`getting_started.md`, which had silently dropped the minimum-eligibility
clause. Safety-adjacent content (`equipment.md`'s helmet/mask/throat-protector
quotations, `conditioning_and_recovery.md`'s and `skating.md`'s body-checking
and boards-angle instructions) was checked closely per the brief's specific
flag and found accurate in every case — no truncated safety qualifier found
anywhere in this batch.

**Every document in `content/` has now been run through `check_quote_drift.py`
at least once this round.** The corpus-wide sweep begun with `rules_primer.md`
at the start of this round is substantially complete: no known unrepaired or
unexamined shape-3 (meaning-changing) hit remains. What is left, corpus-wide,
is overwhelmingly CASE-shape drift in documents that already mix the
disclosed-bracket and bare-lowered conventions — left deliberately uniform in
every document where it was found, per the precedent this round established
with `rules_primer.md`'s first pass.

---

## 18. Chunk-tails prose triage — corpus-wide closure

Three more agents covered the remaining 20 documents (66 + 57 + 56 = 179
hits), followed by a direct coordinator check of `technique/shooting.md`
(13 hits, missed by an oversight in how the three waves' file lists were
split). **Zero further fixes across all 192 hits** — every one was already
self-contained on a full read: a proviso already inside the same quoted
sentence, a list-intro sentence followed immediately by its list, or a
topic-closing line followed by an unrelated new section/heading.

Each agent specifically re-tested for the one confirmed defect shape from the
earlier waves — a "no automatic consequence" claim whose real scope is
narrower than it reads alone — and found no further instance anywhere in
these 20 documents.

**Combined total across all five waves this round: roughly 450 chunk-terminal
prose grants read in full surrounding context, across every document in the
corpus except ten very small ones (31 hits, ~8% of the corpus-wide count,
genuinely unexamined and left as an explicitly low-priority tail).** Six
genuine fixes were found, all in the first 257 hits reviewed; the following
192 produced zero. **The declining yield is itself informative**: it says the
corpus's chunk-tail-adjacent prose is now in materially better shape than it
was at the start of this round, and further passes over the same class should
expect a low hit rate rather than treat every future run as starting from
scratch.

⚠️ **A propagation gap remains open and was not chased**: `body_contact_and_battles.md:301`
and `:593`, both `Rule:` facts, state Hockey Canada's *"triggers no automatic
suspension"* without the caveat already folded into the fixed body-prose
instance at `:311`. Facts-block char caps need checking before any fix.
