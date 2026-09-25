# The P1 layer wave, 25 September 2026

**The owner's complaint, verbatim:** Key focus, Overview and Key Takeaways read one after another feel
*"repetitive rather than reinforcing."*

Eight documents were re-aimed by one agent each, then reviewed by five `safety-reviewer`s, then repaired by six
`rules-verifier`s. This record exists because the review found something the re-aiming did not intend.

---

## The finding that governs the next wave

🔴 **THE SHORTENING IMPROVED READABILITY AND STRIPPED ESCALATIONS.** Four independent reviewers across five files
found one defect class, not six separate ones: **a layer was shortened, and a tariff escalation went with it.**
Every instance sits in a summary layer; three are in **Key focus** or a **Key Takeaway** — the layers voiced alone.

| file | layer | what the shortening removed |
|---|---|---|
| `passing_and_receiving.md` | KT13 | the `CARHA-affiliated` scope, replaced by a claim the document disclaims |
| `switching_positions.md` | body + facts + Common Mistakes | a permissive claim removed from **one** layer and left in **three** |
| `team_play_and_culture.md` | four layers | the peacemaker limb **scoped to one book of six** |
| `puck_handling.md` | **Key focus** | the holding escalation — Hockey Canada 8.1(b), CARHA 63(a) and 30(a) |
| `puck_handling.md` | KT10 | the IIHF's **absence** of a tier above the minor |
| `defender.md` | **Key focus** | that a slide that catches the puck carrier is a penalty |

⚠️ **Both effects are real and they came from the same edits.** The echo scores moved; so did the accuracy, in one
direction. The regression was visible only because C6 was run on **every** file rather than the two that looked
like they needed it.

## What the layer work actually fixed

In every document the cause was **one limb counted many times**, not diffuse wordiness.

- `practice_and_development.md` — the Overview paragraphs and Key Takeaways 1–4 **were the same sentences**.
- `conditioning_and_recovery.md` — the corpus's two worst pairs, 30.0% and 23.0%. ✅ Its Overview got **longer**:
  *"the Overview was a compressed Key Takeaways and the Key Takeaways were a compressed Common Mistakes."*
- `team_play_and_culture.md` — one ~60-word injured-player block stood near word-for-word in **four** layers.
- `scanning_and_anticipation.md` — the Overview was a **second kernel list**: its paragraphs 4–7 were compressed restatements of KT2, KT5, KT4 and KT9, one identical including its caveat, and **five layers** stated the goaltender counter-case. ✅ **Five scanning cues each had a ranked body section AND a facts line and appeared in NO summary layer** — the three free scanning moments, the backcheck inside-shoulder count, *"arrive in a lane with your feet, not by reaching"*, and the cost asymmetry that makes the guess/anticipation test actionable. ⚠️ **Its board-posture spinal limb sits in five layers of a document whose subject is not board contact; the agent correctly REFUSED to demote it without a coordinator-supplied carrier list.**
- `passing_and_receiving.md` — the wall-contact posture limb stood in **five layers of a document about passing**.
  ✅ The owner's own ruling applied exactly: *keep it where the document is about board contact, demote it where it
  was inherited.* Chunk 001 now opens *"Move it, then move yourself"* instead of *"Important. On the wall, the
  posture you take contact in…"*

⚠️ **The residual echo figures are inflated and must not be read as a floor.** `check_layer_echo.py` counts the
Sources trailer as part of "Key Takeaways" for 37 of 39 documents. Measured excluding the trailer, one file's real
duplication fell **11.8% → 1.3%**, not 17.7% → 10.3%.

## Three criticals, and in two of them the corpus already held the answer

1. **The peacemaker limb scoped to USA Hockey in four layers.** Every book writes it; **Hockey Canada 7.10(e)(ii)
   and CARHA 59(b) name the peacemaker in the rule text and both are mandatory**. ⚠️ `body_contact_and_battles.md`
   already said *"not a defence in any of the six rulebooks read here"* — **and KT10 pointed the listener at that
   very document while giving the narrow answer.**
2. **"The IIHF writes no such bar"** removed from one layer and standing in three. ✅ The reviewer found the IIHF's
   real answer is **5.3 — *"Such substitute shall not be permitted the privileges of the goalkeeper"*** — the
   safety half, not the paperwork half. ✅ And **Situation Handbook 8.9** keeps it from reading as absolute: a
   skater **dressed and listed** as a goalkeeper does get the privileges.
3. **A scope caveat replaced by a claim the document disclaims.** KT13 carried a CARHA tariff with no
   `CARHA-affiliated` scope — rendered chunk 061 contained **no occurrence of "affiliated"** — and in its place
   *"the book most adult rec players meet"*, which the same document disclaims two bullets earlier.

## Defects in rulebooks, not in the corpus

- **Hockey Canada Interpretation 6 prints under `Rule 7.10 (d)`** while its own text names the peacemaker, which is
  **7.10(e)(ii)**. Both extractions print it identically, so it is the book's. ✅ **The scope holds either way,
  because 7.10(d) carries its own Note 1 requiring a fighting penalty.**
- **PWHL Reference Table 11 row (vi)** still lists *"Playing puck in restricted area"* **and cites Rule 1.8** — the
  rule that abolishes the area, restated independently at 27.8.
- **CARHA cross-references a "Rule 86(d)"** that does not exist; Rule 86 has three clauses.

⚠️ **All three are recorded so nobody "corrects" the corpus toward the book's own error.**

## What the reviewers broke that they had been told was settled

- ✅ **A declared true negative, closed.** A sweep of the whole IIHF book for `MATCH PENALTY`, `deliberately injur`
  and `attempt to injure` returns **zero — the IIHF has no match-penalty category at all**, so there is no
  NHL-21.1 analogue. *"In most of them the minor is not the ceiling"* holds at **both** scopes: 4 of 5 wide, 3 of
  5 narrow.
- ✅ **The EIHL check nobody had run.** Its preamble defaults unamended rules to the IIHF book; its Rule 5
  amendments cover 5.1, 5.2, 5.4 and 5.6 — **not 5.3**. The British claim holds. ⚠️ It then bounded itself: that
  clears two rules and nothing else.
- ✅ **A worry that was unfounded.** The `puck_handling.md` agent flagged that it had verified the fend-off repair
  without opening a rulebook. The reviewer opened them: **USA Hockey 622's Note makes a free hand on an opponent's
  *stick* holding, Rule 622 contains no fend-off permission at all, and NHL 56.1 expressly says *"or his stick."***
  The corpus was right.

## The method lesson

✅ **"Sweep for the sentence you are about to destroy, before you destroy it."** A repaired book-list left two
stale carriers, one of them phrased *"neither North American governing body's book"* — **sharing almost no lexical
material with the repaired version**, so a string search would never have found it. It was found only because the
agent grepped the old phrase **before** overwriting it. ⚠️ *"An agent that repaired the file first and swept second
would have found nothing."*

## Coverage — D1 to D15

Checked against [`review_process.md`](../review_process.md) label for label.

| | Dimension | This wave |
|---|---|---|
| **D1** | Rules accuracy | `rules-verifier` ×6, every limb re-derived from primary text |
| **D2** | Rules travelling without exceptions | CARHA 62(a)'s situation book, IIHF 12.1's three-rung ladder, Hockey Canada Interpretation 15's match limb all restored |
| **D3** | Rule-set divergence | the wave's dominant finding — three criticals, all book-scope |
| **D4** | Citation integrity | no citation added or changed except where named; every new quotation read past its closing mark |
| **D5** | Provenance | two rulebook-internal defects recorded as the books', not the corpus's |
| **D6** | Negative existence claims | *"Rule 62 is CARHA's whole answer"* refuted by 48(h); the IIHF match-penalty negative closed by sweep |
| **D7** | The cardinal rule | the owner's Key-focus register enforced; a tariff ladder refused entry twice |
| **D8** | Numeric ownership | an unsourced prevalence superlative cut at **three** sites, in a document that disclaims it |
| **D9** | The summary layer | **the wave's own regression** — six escalations stripped, all repaired |
| **D10** | The key-facts layer | `check_facts.py` clean; two lines repaired by exact-length substitution with no caveat traded |
| **D11** | Reader safety | `safety-reviewer` ×5, covering **all eight** files. The first four covered six — `team_play_and_culture`, `passing_and_receiving`, `defender`, `puck_handling`, `switching_positions`, `conditioning_and_recovery` (the last two twice) — and found three criticals and ten majors. ⚠️ **`scanning_and_anticipation` and `practice_and_development` had NO safety pass until a `commit-gate` blocked on C6.** ✅ **A fifth `safety-reviewer` was then dispatched and read BOTH of those files in one pass: no critical, no major, and no stripped escalation of the kind found in the other six.** ⚠️ **Two earlier drafts of this row were wrong in the same direction. The first said *"×4 on five files"* and UNDERCOUNTED, hiding which two files were uncovered. The second named the fifth reviewer but said neither which files it read nor what it found — a third `commit-gate` could not evaluate C6 from it and said so: *"Either the row is stale or one file is still uncovered — and I cannot tell which from the record."* **A coverage claim that does not name its files and its result is not a coverage claim.** |
| **D12** | Read-aloud integrity | every repair render-verified; a duplicate found **only** by rendering; chunk 061 confirmed to carry the restored scope |
| **D13** | Folklore | *"the book most adult rec players meet"* removed corpus-wide from this file |
| **D14** | Structure, style, cross-links | all six gates rc=0 with **zero agents live** |
| **D15** | The rendered site | ✅ **DONE, and the row that said otherwise was FALSE.** It read *"NOT DONE… the wave is prose-only and touches no `site/`, CSS or diagram code"* — **written when that was true, and left standing after gate rounds 3-4 added `site/src/diagrams/puck_handling.mjs` and its build product `site/src/data/diagrams.json` to the diff.** ⚠️⚠️ **A FALSE OUT-OF-SCOPE DECLARATION IS WORSE THAN SILENCE — it tells the next reader the site was untouched, and this record's own cascade table contradicted it four sections below.** 🔴 **A fourth `commit-gate` BLOCKED on it: *"The record contradicts itself on the one dimension it declares undone."* **Full site build with the absolute npm binary, exit 0, reaching `check:links` (the last of eleven steps): 53 pages, 11,577 internal links. `build-diagrams.mjs` run with `diagrams.json`'s sha verified changed. `check-arrivals` 0 hard / 8 advisory. `site-reviewer` on `/technique/puck_handling/` and `/positions/center/`, the caption's two hosts.** |

**Out of scope, declared:** the podcast pipeline; `infra/`.
⚠️⚠️ **THIS LINE SAID *"diagrams and captions"* AND THAT BECAME FALSE MID-ROUND.** Gate rounds 3-4 found a diagram **caption** carrying a rules claim at odds with the markdown it is voiced into, and repairing it put `site/src/diagrams/puck_handling.mjs` and `site/src/data/diagrams.json` in the diff. **Both are named in the staged file list below.** ⚠️ **A scope declaration is a claim about the diff, and a diff grows — re-read every "out of scope" line against `git diff --cached --name-only` before the record is written.**

## Open after this commit

- 🔴 **`how_to_watch_hockey.md:429`** carries the same paraphrased trapezoid sentence. Top of the next brief.
- **~20 two-and-three-book trapezoid enumerations across 15 files.** `goaltender.md` is already at four books and
  is the model. Most are scopes, not exclusivities — but two read as closed sets voiced alone.
- ⚠️ **The shape no grep reaches:** a trapezoid carrier that names no books at all.
- **`shooting.md`** says CARHA 62(a) is *"a different offence rather than a lower rung"*, which CARHA's Situation 1
  refutes. Harsh direction; **in a committed file**.
- **`forechecking_systems.md`** renders IIHF 43.3 flat where the rule says *"at their discretion"* — and the
  document's own Sources trailer states the discretion correctly, so the file contradicts itself between layers.
- ⚠️ **`crt6.txt` needs a `pdftoppm` read.** The CRT6 ten and the British fourteen have been verified for presence
  and internal consistency, **never against primary text**.
- ⚠️ **The EIHL Casebook is unchecked for Rules 27, 41, 42, 46, 47 and 69** — the contact-foul rules this corpus
  most relies on the IIHF book for.

## What this wave could not have found

**A claim every layer agrees on, that is wrong.** The reviewers' method is cross-layer consistency plus a rulebook
confirmation, and one said so plainly: *"I am blind where every layer agrees and they are all agreeing on
something wrong."* Both criticals found in `team_play_and_culture.md` and `switching_positions.md` were found
because a **sibling document disagreed**. Where no sibling disagrees, nothing in this wave would have seen it.


---

## The gate blocked three times, and every block found something the one before it missed

⚠️ **The first `commit-gate` on this diff BLOCKED on C6 (two files with no safety pass) and C8 (one of those files
named nowhere in this record). Both were mine.** ✅ **An earlier draft of the D11 row said *"×4 on five files"* and
**undercounted** — it hid which two files were actually uncovered. Corrected above.**

### 🔴 The seventh stripped escalation — found because the gate was told to assume one existed
**`switching_positions.md` KT6 had a tariff ladder DELETED rather than re-ordered**, leaving only *"the books do
not price any of that the same way."* ⚠️ **Common Mistakes still carried it — but a pointer is not a correction
for a listener, and KT6 only pointed.**
✅ **Repaired by RE-ORDERING: the staged instruction — *"If his numbers are toward you it is not available at
all"* — kept its lead, and the ladder landed behind it.** **NHL and IIHF 43.2 provide none at all · USA Hockey
608(a), Hockey Canada 7.5(a) and CARHA 53(a) each carry a misconduct or game misconduct · Hockey Canada 7.5(c) and
CARHA 53(b) reach a match penalty.**
✅ **KT4 regained both its losses: the INSTRUMENT (*"the IHUK In-House Rules 2026-27, whose Rule 76…"*, replacing a
bare *"In Britain"*) and USA Hockey's divergence (613(d) is *"proper position"*, not contact).**

### ✅ The casebook gap this repository has failed on three times — closed
**USA Hockey Casebook Rule 608 Situation 1 REINFORCES the claim rather than carving it out**, enumerating the
minor-plus-misconduct floor and the mandatory escalations with **no bare minor anywhere**. **IIHF Situation
Handbook, Rule 43: `No situation.`** — verbatim, in both editions.
⚠️ **One permissive Interpretation the corpus does not carry was found — Hockey Canada Interpretation 3 to 7.5(a),
permitting marginal-contact pinning at low speed.** ✅ **Ruled NOT to falsify KT6: it governs whether the
infraction exists, not the tariff — and it is expressly subject to Rule 7.3, so unavailable in the divisions where
checking is barred.** 🔴 **It must not be used as grounds to soften KT6.**

### ✅ Two agent judgements that went against their briefs, both right
- **A briefed *"free fix"* — moving a `⚠️` out of a `**strong**` run — was REFUTED and reverted.**
  `remark-corpus.mjs`'s `toText` **recurses into the strong node**, so at a paragraph's start the `**` is stripped
  before the anchored test and the panel forms regardless. `--panels --file` returns the same one panel on both
  versions. ⚠️⚠️ **CLAUDE.md's "fourth state" is a MID-PARAGRAPH rule, and this record is the first place that
  distinction is written down.**
- **The gate's *"voiced alone"* grading was corrected: right at paragraph level, WRONG at chunk level.** Neither
  KT4 nor KT6 is its own chunk.

### ✅ And the listener question was answered on the right test
**KT6 sits in a 2,555-character shared chunk and is 10.9× its smallest sibling.** ✅ **Ruled RETAINABLE, on the
ground that matters:** *"retention of the ladder is not the safety test — retention of the BEHAVIOUR is"*, and the
instruction is stated **four times around the ladder, three of them before it.** *"A listener who loses every rule
number still leaves with the correct act and the correct next step."*

### ⚠️ Open rows from the second gate round
- **EIHL Casebook Rule 41 makes a game misconduct MANDATORY on a boarding major causing face or head injury**,
  where IIHF 41.4 leaves it discretionary. **Absent from every layer — uniformly, so nothing contradicts.** ✅ **And
  the useful half of that check: the EIHL has NO Rule 43 and the In-House Rules amend neither act, so a British
  EIH/SIHA reader gets the IIHF answer, which KT6 already states.**
- **KT6 is now the document's longest takeaway by an order of magnitude.** ⚠️ **Not a finding that the ladder
  should be cut — it is the thing a gate caught being stripped once.**
- **KT6 narrows Hockey Canada 7.5(c) and CARHA 53(b) to *"the boards"*; both books write *"or goal frame"* / *"or
  goal net"*.** Conservative direction; Common Mistakes carries it correctly.
- **A `check_quote_drift` flag on the USA Hockey onus quotation is a TOOL FALSE POSITIVE** — it matched **608's**
  Note, which continues *"in danger of potential injury"*; the document attributes it to **603**, whose Note ends
  *"…in danger."* **The corpus is right and the tool matched the wrong rule.**
- ⚠️ **The four IHUK Rules of Competition were NOT checked for a boarding or checking-from-behind amendment.**
  *"A true negative in one IHUK document is exactly the kind that stops a search — that is my weakest negative."*

---

## A third gate round, and a NEW defect shape the whole wave was blind to

🔴 **THE SHORTENING STRIPS *SCOPES* AS WELL AS ESCALATIONS, AND EVERY TEST RUN IN THIS WAVE IS BLIND TO IT.**
Four safety reads, two gates and the coordinator all checked whether a paragraph **lost its marker** or a tariff
**lost its ladder**. ⚠️ **Two defects passed every one of those tests: the marker survived, the instruction
survived, and the LIMIT is what went.**

### B1 — this record's own method lesson, failing one file over
`switching_positions.md` said *"the angle is yours **everywhere**"*, and the diff **deleted the CARHA inversion
that immediately followed it**. `carha.txt` Rule 49(a) assesses a minor or major to a player who *"**stands in
front of an opponent for the purpose of making contact, and/or does not avert body contact with an opponent**"* —
so under CARHA the angle is **not** yours, and CARHA is the one adult recreational book on the shelf.

⚠️⚠️ **The same commit repaired that identical string in `defender.md` at THREE sites.** *"So the wave recognised
the overstatement, fixed it in one file, and in the other deleted the sentence that was doing the same work."*
**That is this record's own lesson — *sweep for the sentence you are about to destroy, before you destroy it* —
failing one file over.**
⚠️ **Compounding: *"find out which book your league runs, by name"* survived but had CHANGED JOBS**, migrating onto
the check-tariff ladder and leaving the angling permission naked.
✅ **Repaired at all four carriers, following the sibling's move — DELETE THE UNIVERSAL QUANTIFIER, do not add a
caveat — plus a new `Rule:` fact carrying CARHA 49(a), because the `Technique:` line is voiced alone and a `Rule:`
sibling is a different chunk-paragraph.**

### B2 — a three-book enumeration cut to one, where the deleted clause was the sole carrier
**Key focus went from *"under the NHL, the IIHF and USA Hockey"* to *"under the NHL book"*, and the IIHF was then
attached to the disputing rule NOWHERE in a spoken layer.** ⚠️ **This corpus's primary reader plays the IIHF book.**
✅ **Repaired at FOUR layers, not the one briefed. The IIHF now reaches four spoken chunks.**
✅ **And the agent improved on the brief twice:** it replaced a policy-preamble citation with **USA Hockey Rule
601(a)(1)**, the actual playing rule; and found a **fifth book** — **CARHA 46(a)**, mandatory, bare act — then
confirmed Hockey Canada is the sole exception of five.

### ✅ A defect that was audible and invisible in the markdown
The agent's own first draft wrote four rule numbers as a comma-run. **Spoken, the NHL's and IIHF's are identical
strings read back to back** — a stutter — and a Key Takeaway carried *"a bare list of four numbers, two identical,
detached from the books they belong to"*, which is the rules-appendix register the owner's instruction excludes.
✅ **Found by rendering and listening back, not by reading the markdown.** The Overview now says *"the IIHF's
**identically worded** 39.2(I)"*, turning the duplication into the point; the takeaway carries book names and no
rule numbers.

## Two coordinator checks, both clean for this commit

- 🔴 **`pwhl_rules.txt` Rule 63.2 is *SLASHING*.** The puck-over-glass clause is **65.2(iii)**. ✅ **`defender.md`
  names *"the NHL's 63.2(iii), and the IIHF's version of it"* — NHL and IIHF only, so nothing is wrong today.**
  ⚠️ **Recorded as a trap: widening that line to the PWHL under 63.2 would point a PWHL reader at the slashing
  rule and drop 65.2(iii)'s own *"except where there is no glass"* carve-out.**
- ⚠️ **The disputing claim survives NHL-only in `mental_game.md` at three sites including a Key Takeaway, and in
  `rules_primer.md`.** **Both committed and unmodified — open rows.** ✅ **`team_play_and_culture.md` is now the
  model to copy.**

---

## Gate rounds 3 and 4 — the count cascade, and what the blocking gates were actually for

**The third `commit-gate` BLOCKED on two defects the first two missed, and both were the stripped-scope shape round 2
had just invented a name for.** What followed was not two repairs. It was a **cascade**: every repair exposed a
carrier the repair before it had not reached.

| wave | what it found | who found it |
|---|---|---|
| gate 3 | an ambulance criterion narrowed; a five-book list closed at *"all four"* | `commit-gate` |
| safety | ⚠️ **the gate and the coordinator had named the WRONG LAYER** — the defect was the Overview, and the Key focus they named was already correct | `safety-reviewer`, by diffing against HEAD |
| census | the same undercount surviving in a **self-test item**, which *grades* the reader | coordinator census |
| rules | a **fourth** stale site — *"USA Hockey alone"* conditions the awarded goal, and CARHA conditions it too | `rules-verifier` |
| diagram | a **seventh** carrier: a diagram **caption**, invisible to any grep of `content/` | `diagram-reviewer`, by rendering audio |
| rules | `center.md` is a **six**-book section, not four; the PWHL belongs in one host and not the other | `rules-verifier` |
| diagram | the caption is voiced into a five-book host **and** a six-book host, so **no count is true in both** | `diagram-reviewer` |
| rules | the sole-carrier gap **survived the wave meant to close it** | `rules-verifier` |

### 🔴 The finding that matters most — a quiz item taught a reader to wait on a spine
**`conditioning_and_recovery.md`'s self-test asked *"which two look exactly like ordinary concussion symptoms — and
what is the difference that turns one into an ambulance call?"*, in the SINGULAR.** **Read from CRT6's rendered
page, at least five overlap and they differ in kind:** severity-or-worsening (headache) · worsening (confusion,
agitation) · **repetition, not worsening (vomiting)** · 🔴 **NOTHING AT ALL — neck pain or tenderness.**
> ***"A reader drilled by that question learns to hunt for a threshold on every overlapping pair. Applied to neck
> pain — the highest-consequence flag, because it is the spine — they search for a severity bar that does not exist
> AND THEY WAIT."***
⚠️⚠️ **A self-test is the only layer that GRADES the reader, and no checker in this repository knows it exists.**
**It had no column in any layer-test table used this round.**

### 🔴 The mechanism behind the whole cascade: a count is a claim, and it decays
**One caption carried THREE DIFFERENT BOOK COUNTS IN ONE DAY.** The resolution was not a better count:
> ***"A count is falsified by the next book added; a universal is not."***
✅ **The caption now carries none** — *"in every book"*, which is already this corpus's form in that exact layer.
⚠️ **And a sketch of *"in every book read for this"* was REFUSED by the agent on non-negotiable 6** — *"a caption is
content, and a reader who had never heard of this project does not need to know which books we read."*

### ⚠️ Two rulebook-reading lessons, both earned the hard way
1. ⚠️⚠️ **A NOTE THAT POINTS IS NOT THE RULE.** CARHA 58(c) Note 1 reads *"a goal is awarded"* and looks flat — then
   says *"See Rule 36(b)"*, which carries the *"obvious and imminent goal"* condition. **The corpus had built a false
   exclusivity on the flat-looking half.** **Reading past the closing mark meant reading past a POINTER.**
2. ⚠️ **The plain extraction splits Hockey Canada's 1.5(c) label from its body**, printing a bare `1.5 (c)` with
   `Rule 1.6` between it and its text. **Only the `_layout` twin shows they belong together.**

### 🔴 Thirty-two coordinator claims failed measurement this round, and the agents caught every one
**Four were fabrications. Two were carrier lists relayed as complete and short by three sites each. Two were wrong
rule numbers — PWHL 69.4 for 65.6, and USA Hockey 618(a) for the Note to 625(b). One named the wrong LAYER and would
have damaged correct text. One prescribed a repair that would have left two downstream references dangling.**
⚠️⚠️ **THE LOOPHOLE IN *"BRIEF A CLAIM, NEVER A LINE"*: I briefed a CARRIER TABLE, which is a list of lines wearing a
claim's clothes.** ✅ **What worked was requiring a CHUNK-BY-CHUNK count sweep instead of a site list.**

### ⚠️ And a ruling is scoped to the document it was reasoned about
**The decline-to-add-the-PWHL ruling was correct for `puck_handling.md` (`grep -c PWHL` = 0) and was carried by a
caption into `center.md`, which names the PWHL in two facts lines, a body paragraph and its trailer.** **The agent
flagged the gap against itself rather than shipping it.** ⚠️ **Captions inherit rulings they were never tested
against.**

### ✅ Standing rules this round produced
- **A chunk number is only valid against a named render.** One agent's numbers went stale within the hour because the
  documents were edited under it between renders (`center` 101 → 102 → 103).
- **After repairing a claim, ask not only *"did the fix reach every layer?"* but *"which layer was written assuming
  the old answer?"*** **Found three times: a facts line TRUE when written and made FALSE by its neighbour's repair; a
  Sources trailer saying a limb was *"not restated here"*, made false by the sentence that restated it; and a
  self-test built on a count.**
- **`check_caption_hosts.py --rule-like` had NEVER been run corpus-wide.** It now has: **204 diagrams, 87 multi-host,
  76 rule-like pairs**, and **seven more four-book captions in six modules, none verified.**

### 🔴 What this round could not have found
- **Whether *"in every book"* is true.** The agent read two books of six itself and inherited four, and **did not
  check the IHUK In-House Rules or the EIHL Casebook**, which are on the shelf and amend other things this corpus
  covers. **The corpus's existing *"every book"* usages carry the same exposure.**
- **The inverse-propagation shape that leaves NO LEXICAL TRACE.** Reported independently by three agents. *"A layer
  that never states the count can still be built on it, and there is no lexical trace to grep for."*
- **`center.md` genuinely mixes four-, five- and six-book counts across its OTHER sections.** Two agents censused
  them; **neither ruled on any**, and several are probably correct because they concern different acts.
- **Whether any of it is usable under pressure.** *"Only a human reading it aloud at a rink can say that."*

---

## Gate round 4's repair wave — and the test that finally caught the undetectable shape

**The fourth `commit-gate` BLOCKED on four conditions and one rules defect. A `safety-reviewer` then returned no
criticals and five majors. Repairing those five produced two more nobody had briefed.**

### 🔴 Two quantifiers this wave wrote, both false
**A Key Takeaway's *"a match penalty under Hockey Canada 7.5(c) and CARHA 53(b)"* — two named citations — had become
*"an ejection in every book that prices it, and a match penalty in two."*** **The first agent to open the NHL, IIHF
and PWHL books for these files read all six:**
- ***"an ejection in EVERY book"*** — contradicted by **USA Hockey Casebook Rule 608 Situation 1**, which says the
  minor plus misconduct **must** be assessed for a minimal-contact pinch against the boards. **A misconduct is not an
  ejection.**
- ***"a match penalty in TWO"*** — **five of six write one.** The IIHF is the only book on disk with **no match
  penalty anywhere**. What got compressed into "two" is that two reach it *on the bare act*.
⚠️⚠️ **A GENERALISATION REPLACED TWO CORRECT CITATIONS AND NOBODY VERIFIED IT.** ✅ **Restored to named books and
propagated to the two other carriers.** **The old text was harsher-than-true in both limbs — the safe direction, which
is why nothing stopped on it.**

### 🔴 The wave's own repair left the false claim in both spoken layers
`grep -c "USA Hockey alone conditions"` — **HEAD 3, staged tree 2.** The wave fixed the facts line and left the
identical claim in **Common Mistakes and a Key Takeaway voiced alone**, while *the same diff's body* said *"CARHA
looks flat here and is not."* ⚠️ **The document stated the right thing in prose and the wrong thing in both extraction
layers.** **Round 10, reproduced inside one file by a repair.**

### ✅ THE TEST THAT WORKS, and it found a head-injury major on first use
**Four agents independently named the undetectable shape — *a layer built on the old answer that never repeats the
phrase*. One turned it into an instruction:**
> ***"Read the summary layers AS IF THE BODY DID NOT EXIST, asking of each bullet not 'does it repeat a corrected
> claim' but 'WHICH OLD ANSWER WAS THIS SENTENCE WRITTEN AGAINST?'"***

**Applied once, it found a permissive head-injury claim: two facts lines voiced alone and a Common Mistakes bullet
written against *"only the IIHF reduces your protection when your head is down."*** 🔴 **Never true of the NHL —
48.1(ii) weighs *"whether the opponent put himself in a vulnerable position by assuming a posture that made head
contact unavoidable"*, and PWHL 48.3(i) uses the same clause to cut a major to a minor.** ✅ **What IS distinctive to
the IIHF is a FLAT exculpation, where the others merely weigh.** **Repaired at all three sites.**
⚠️⚠️ **THE OWNER DOCUMENT WAS NOT CHECKED AND IS NOT IN THIS DIFF.** `body_contact_and_battles.md` carries the same
claim at two sites. **They may be correct as scoped — a sweep would damage them.** **Top row for the next round.**

### ⚠️ Every agent that caught its own error caught it in the same direction
**A truncated quotation · an unsearched negative · attribution drift · a dropped election clause · an over-reaching
instruction · *"none of which"* attaching to six books where it was true of three.** ⚠️ **Every one erred toward a
SIMPLER, TIDIER sentence** — the direction this repository already records for summarising a tariff, now observed
across five independent agents in one round.

### ✅ What the coordinator got wrong, and what caught it
**Thirty-two claims failed measurement. Four were fabrications; two were carrier lists relayed as complete; two were
wrong rule numbers; one named the wrong LAYER; one prescribed a repair that would have dangled two references; one
was an "error" log entry that was itself wrong and would have damaged correct text.**
⚠️⚠️ **THE LOOPHOLE IN *"BRIEF A CLAIM, NEVER A LINE"*: a carrier TABLE is a list of lines wearing a claim's
clothes.** ✅ **What worked was demanding a CHUNK-BY-CHUNK sweep rather than a site list — and requiring every agent
to refute its brief before acting on it.** **Every single one of these was caught by an agent, not by a checker.**

### ✅ New tooling, and why it is a script rather than a note
**`scripts/check_marker_pairs.py`** names every paragraph that carried a `⚠️` in HEAD and carries none now — the
check CLAUDE.md says no tool can do. ⚠️ **It exists because an aggregate delta hides a loss in BOTH directions: the
recorded case was 79 → 77 explained away as a merge, and this round `team_play_and_culture.md` ROSE 24 → 33 while
every paragraph kept its own marker.** **A rise is the more flattering direction not to look at.**
✅ **Run across all nine content files this round: ZERO paragraphs lost a marker.**

---

## Gate round 5 — the shelf test, and what it is not

**The fifth `commit-gate` BLOCKED on two sentences and named the method that found them.**

### ✅ THE SHELF TEST
🔴 **Does a book count match the shelf the document ITSELF declares?**
**`passing_and_receiving.md` declares five books four times and carried *"a penalty shot in all four books"*.
`defender.md` declares six and carried *"the onus is on the player delivering the check in all four books"*.**
⚠️ **Both were lines that DO NOT MENTION the missing book, so no grep for a book name could reach them.**

⚠️⚠️ **AND THE TEST SAYS "CHECK THE COUNT", NOT "RAISE THE COUNT" — this is the half that keeps it safe.**
**On `defender.md` the obvious repair would have been a falsehood: CARHA writes NO onus sentence at all
(`grep -ci onus` = 1, and that hit is equipment maintenance). It reaches the duty from the other end at 49(a).**
✅ **The line reads *five of the six, plus CARHA 49(a)* — not six.**
**Counts tested and correctly LEFT ALONE across three files:** four ACTS not four books · comparatives among named
books · a section on checking permission by classification where the four are right by design · trailer provenance
describing what was read on a named date. ***"A mixed count really is not evidence on its own."***

### 🔴 THE TEST'S OWN BLIND SPOT, NAMED BY THE AGENT THAT USED IT BEST
> ***"My census matched the literal strings `four books`, `all four`, `of the four`. A caption that states a
> four-book shelf by ENUMERATING FOUR BOOKS AND NEVER WRITING A NUMBER would score ZERO against me. That is a TRUE
> NEGATIVE, which is the kind that stops a search. Given that the corpus's shelf grew from four to six,
> ENUMERATION-WITHOUT-A-NUMBER is the LIKELIEST REMAINING SHAPE, and finding it needs a per-caption read — NOT A
> GREP."***

### 🔴 THE CAPTION LAYER IS WHERE COUNTS GO TO SURVIVE
**Two four-book counts were found ONLY by rendering audio, after every markdown site was repaired.** **One was the
LAST surviving four-book charging count for its document.** ⚠️ **A `content/` grep cannot see either.**
**`check_caption_hosts.py --rule-like`, never run corpus-wide before this round, now reports 204 diagrams, 87
multi-host, 76 rule-like pairs — and five live four-book captions remain, none verified.** ⚠️ **The instruction is
DO NOT SWEEP THEM: *"'four' may be correct-as-scoped in some of them."***
⚠️⚠️ **AND A COUNT-FREE CAPTION IS NOT A HOUSE STYLE — IT IS THE ANSWER TO A MULTI-HOST COLLISION.** One caption
went count-free because it is voiced into a five-book host AND a six-book host; another KEPT its count because it has
ONE host whose own shelf is six. **The question is the caption's hosts, not its wording.**

### ⚠️ EVERY SELF-CAUGHT DEFECT THIS ROUND RAN ONE WAY
**A reversed rule (*"duty not to avert"* for *"does not avert"*) · a permissive elision collapsing CARHA's *"steps or
strides"* into USA Hockey's *"strides"* · a tariff summary dropping two of a rule's three conditions · an appositive
naming the wrong two books · a false negative on a term the book DOES use, broken across a line.**
⚠️ **Every one erred toward a SIMPLER, TIDIER sentence, and every one was caught by its own author on re-reading —
not by a checker.**

### ✅ AND ONE WAS CAUGHT BY REFUSING THE BRIEF
**A gate inferred a rendering rule from CLAUDE.md, briefed a repair for CORRECT text, and an agent refused it —
proving in source AND across 80 instances in `site/dist` that `WARNING_LEAD_RE` wraps a strong run whose own text
opens with the glyph, wherever it sits.** ✅ **CLAUDE.md was wrong and is corrected.** ⚠️ **Its own *"63 of 76
wrapped"* figure had been right all along; the explanation printed beside it was not, which is why nobody questioned
it.**
