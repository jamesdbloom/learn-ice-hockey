# The half-rule round — permissive claims found by searching the act, 24 September 2026

**Four commits over two days.** The first was 22 `content/` files, +343 −215; the sections below
record each subsequent commit under its own heading with its own file list.
⚠️ **This line said *"one commit"* while the file already documented three — a header that went
stale because a blocking gate always starts another wave, which is the same mechanism this record
diagnoses for itself under "The gate blocked this commit once".**

## Files in this commit

`content/foundation/` — `language_and_glossary.md` (new glossary entry carrying a six-book paraphrase) ·
`rules_primer.md` (the false late-hit absolute; the privileged-area half-rule; IIHF Situation 67.8) ·
`uk_rules.md` (KT10, the ambulance takeaway's missing escalation)
`content/hockey-iq/` — `playing_without_the_puck.md` (KT11 chunk overflow; the CARHA 30(a) counterweight) ·
`risk_management.md` (the owner's own four/five-book count, and its worked example)
`content/off-the-ice/` — `equipment.md` (KT1's inverted escalation) · `mental_game.md` (the late-hit
absolute and a mis-targeted cross-link)
`content/positions/` — `center.md` and `winger.md` (the IIHF match-penalty half-claim; KT8 chunk overflow;
attribution drift) · `defender.md` (Key focus tariff; the bare-negative facts line; KT2/KT3 length) ·
`goaltender.md` (the freeze exclusion; CARHA 61(b)) · `switching_positions.md` (reversed antecedent; the
book list)
`content/systems/` — `breakouts.md` (a verb of art voiced alone) · `defending_the_rush.md` ·
`defensive_zone_coverage.md` (the centre-fly carve-out; §Clearing the Zone) · `faceoffs.md` (the freeze
facts line; Key Takeaway re-ordering) · `forechecking_systems.md` (the NHL permission without its
counterweight) · `game_management.md` (the three safety Criticals; the late-hit window) ·
`offensive_zone_play.md` (KT10 chunk overflow; the pinch facts block) · `special_teams.md` (the
zone-scoped limb in a kill document) · `zone_entries.md`
`content/technique/` — `body_contact_and_battles.md` (the owner document: the Vulnerable Position override,
the section heading, KT8's missing marker)
Plus `sources/README.md` (the IIHF Section 11 entry) and `project/plans/OPEN_ITEMS.md`, which carries the
per-wave detail for every file above.

⚠️ **`site/package-lock.json` is deliberately EXCLUDED** — a local `npm install` stripped `libc`
metadata from optional platform deps, which would strip Linux constraints from the lockfile.

The round began as P1 tactics re-aiming and turned into something else within the first wave. Every
significant defect it found has one shape: **a verified quotation of an incomplete answer, reading as a
complete one, in a layer voiced alone, in the permissive direction.**

---

## What was wrong, and why

### The zone-scoped limb stated alone

The corpus taught NHL/IIHF **63.2(iii)** — the puck put *directly* out of play *from the defending zone* —
and, at fifteen sites across eight documents, only that limb. **63.2(ii)** turns on intent, has **no zone
limit**, reaches after a stoppage, and names leg, foot and arm as well as hand and stick. A deliberate
flip-out from the red line is a minor in **every book on disk** — NHL and IIHF 63.2(ii), PWHL 65.2(ii),
USA Hockey 610(c), Hockey Canada 10.1(ii), CARHA 75(b).

A listener hearing only (iii) hears *"your own end"* and can read the blue line as a safe harbour.

### "CARHA writes no late-hit rule"

True about the label; false about the act. `latehit`, `releasedthepuck`, `lossofpossession`, `vulnerable`
and `finishingthecheck` all score **0** in `carha.txt`, and the zeros reproduce. **CARHA does not need a
late-hit rule because it penalises the body check itself**: Rule 49(a) prices *"intentionally bodies…
and/or does not avert body contact"* with no possession, timing or vulnerability condition, and the book's
own Case Situation answers *"Player 'Bodychecks' an opponent at centre ice"* with a minor or major, stating
no fact about the puck. Rule 52(a)'s Note makes more than two strides a charge. Rule 53(a) reaches a hit
from behind *"anywhere on the ice"*, and Rule 27(b) removes *"play had moved on"* as a defence across the
whole penalty section.

The corpus told a CARHA reader there was *"nothing there to read as permission"* and left him with no idea
Rule 49 exists.

### The USA Hockey window collapsed into a distance

Four layers of `game_management.md`, including its opening chunk and two voiced-alone lines, said Hockey
Canada and USA Hockey *"both measure it at an arm and a stick length."* Hockey Canada's distance is the
whole definition. USA Hockey's test is **avoidability** (640(b)); the Casebook distance is **one of four**
conditions. The corpus's own owner document said so — *"only under Hockey Canada does the gap decide it on
its own"* — and this document contradicted it.

### The privileged area as a safe harbour

`rules_primer.md` presented USA Hockey 614(c) as the book's single freeze restriction. **610(a)** reaches a
freeze along the boards or goal frame anywhere; **610(b)** carries no location condition at all; **618(c)**
prices an unpressured hold after a warning. Two of the three reach *inside* the privileged area.

### CARHA head contact, and an exemption that does not run to it

The new CARHA late-hit text quoted **49(c)** — *"Where… accidental contact has taken place, no penalty
shall be assessed"* — as its floor. **Rule 50(a) prices accidental head, face or neck contact as a minor**,
so 49(c) does not save a late hit that catches the head. A check finished on a player who has just released
the puck rides up more often than one on a squared-up carrier, because the target is turned and unset.

⚠️ 49(c) carries **no scoping words** — *"no penalty shall be assessed"*, not *"no penalty under this
rule"* — so the two clauses are in genuine textual tension and **CARHA prints no sentence resolving it**.
The corpus now states the conservative reading **as a reading**.

### Rules the corpus did not have

**CARHA 61(b)** (`grep -c` was 0), **CARHA 74(b)** (0 corpus-wide), **USA Hockey 632(b)** (0 corpus-wide) —
*"any player(s), including a goalkeeper, who holds or freezes the puck along the boards or goal frame in
any manner"*, with no location, crease, deliberateness or warning condition. **IIHF Situation 67.8**, the
cleanest unpressured-freeze authority on disk, in the book British hockey runs on, while the corpus said
only Hockey Canada and USA Hockey publish a pressure test.

---

## The spoken layer: two failure modes no checker can see

`md_to_speech.py` sets `important = "⚠" in text` **per paragraph**.

**1. Units that outgrew the chunker.** The budget is ~2,400–2,600 characters. Once a takeaway splits, only
the half holding the first marker speaks *"Important."* — and in three of four documents measured, the
unmarked half carried the injury instruction. `winger.md` KT8 lost the escalation on *"head up, and never
duck"*. `offensive_zone_play.md` KT10 stranded *"driving into their back is checking from behind"*.
`playing_without_the_puck.md` KT11's silent half was this round's own CARHA 30(a) ejection counterweight.
A `switching_positions.md` body bullet of ~7,000 characters spans three chunks, two of which carry markers
in source and speak nothing.

**2. Markers that were never written.** `body_contact_and_battles.md` KT8 — *"nobody moves and somebody
phones"* — carried no glyph at all, while every other injury-bearing takeaway in that file had one; it was
found by rendering the file and repaired with one glyph and no words changed.
`uk_rules.md` KT10, the British reader's ambulance takeaway, rendered alone in its chunk with no
escalation. `equipment.md` had **inverted** its own: a provenance caution and a penalty-scope note both
spoke *"Important."* while the second-hand-helmet instruction spoke none.

Repairs were one glyph and zero words where the document's own convention supported it, and takeaways were
shortened by removing **rule enumeration that already lived two layers down** — never an instruction.

---

## What was refused, and why that matters

- **`conditioning_and_recovery.md` was left alone.** Its concussion treatment is unmarked in all five
  layers — a uniform editorial position where the marker means *"caution about the evidence"*, not
  *"hazard"*. One glyph would have made the corpus's owner document for that hazard escalate in one layer
  of five. The agent declared the resulting cross-document debt against itself.
- **CARHA 56 and 59(c) were verified and left out** of a paragraph already carrying thirteen rule
  citations — neither changes the ceiling.
- **`body_contact_and_battles.md` KT6's +54 words were kept** against a proposal to cut them: without them
  the takeaway names five acts and then says four bind every division, and a listener cannot tell which is
  the exception.
- **Seven restatements of the cross-goalmouth prohibition were kept**, each doing a different job. What
  actually repeats is the *rider*, at five sites — a different finding from the one that was briefed.
- **A facts-only fix was refused** where the body carried the same four-book frame: *"a facts-only edit
  would be the round-10 failure in reverse."*

---

## Corrections to this project's own record

- **`check_facts.py --near` DOES report block fullness** (`7/8 coaching, 11 total`). The coordinator told
  eight agents otherwise. ⚠️ It reports the **coaching** count; the **total** cap still needs counting by
  hand, which is how a block reached `HARD_MAX` unnoticed.
- **A brief error can survive the agent that refutes it.** *"Only 53(b) is mandatory"* was briefed, caught,
  corrected against the injury limb, reported — and still shipped wrong, because CARHA 53(a) carries a game
  misconduct in **both** of its discretionary pairs.
- **A refutation is a claim like any other.** One agent reported that `rules_primer.md` lacked the
  Situation 23 treatment. It has it, at `:471`, quoting both limbs. Recording that would have sent someone
  to fix a correct file.
- **Today's own wave made a line worse.** `winger.md:472` read *"five of the six add a match penalty"* in
  HEAD — a positive count. An uncommitted edit rewrote it to *"every book but the IIHF's"*, which a
  verifier then found permissive in effect. ⚠️ **There is no tool for this; it surfaced by one agent
  reading `git diff`.**

---

## Coverage — D1 to D15

| | Dimension | State |
|---|---|---|
| D1 | Cardinal rule | ✅ every new summary bullet names the system, an alternative and the ask-your-team step |
| D2 | Rules claims | ✅ `rules-verifier` ×6, all six books plus the British layer; every quotation read past its closing mark |
| D3 | Citations refetched | ⚠️ **No `source-verifier` ran — but the stronger, reproducible statement is that there was nothing to refetch: ZERO new URLs and ZERO new `[text](url)` markup enter the corpus in this diff.** Every `http` in an added line also appears in a removed line of the same rewrite. All new trailer material is additional rule numbers and quotations under citations already present, each located in on-disk primary text by two independent audits. ⚠️ **An earlier draft said *"~20 new trailer entries"* and then *"12"*; neither is reproducible, and the figure is gone rather than corrected again.** |
| D4 | Safety | ✅ full-diff review, 3 Criticals found and closed, plus a second pass on the CARHA ladder. ⚠️ **Stated plainly: the closing repairs POST-DATE that review. No fresh `safety-reviewer` read them.** They were re-derived from primary text by the repairing agent and then independently by two `commit-gate` runs, which located every new quotation in the books — but that is verification of the text, not a safety reading of it. |
| D5 | Summary layers | ✅ layer test on every repaired document, named layer by layer |
| D6 | Numeric ownership | ✅ three checks, all pass; one textbook restatement confirmed carrying its owner's label |
| D7 | Negative existence claims | ✅ attacked, not assumed; all upheld, one rewritten to avoid an unsearched negative |
| D8 | Qualifications travelling | ✅ the `--near`, `53(a)` and HEAD-vs-tree corrections above |
| D9 | Folklore | ✅ the centre-covers-more-ice claim verified in its corrected form |
| D10 | House style | ✅ `content-reviewer` on the full diff |
| D11 | Facts layer | ✅ full review; 313 facts read in two files, ~185 in the rest |
| D12 | Propagation | ✅ and the inverse asked — which layer was written assuming the old answer |
| D13 | Spoken rendering | ✅ eleven documents rendered; both failure modes above found this way |
| D14 | Mechanical gates | ✅ all six, unpiped; build clean and verified to cover the diff |
| D15 | Site rendering | ⚠️ **STRUCTURAL ONLY — visual check unavailable.** A `site-reviewer` ran and **could not see a rendered pixel**: the Chrome extension blocked every navigation with *"Could not verify this site's safety category"*, an extension-side outage. It refused to write CLEAR, correctly. What IS established: all three new markers emit `span.warn-inline` wrapping glyph + `<strong>`; **zero `.callout-warning` inside any Key Takeaway `<li>` on all three pages**, so the sibling-mismatch defect is structurally impossible; and the coordinator confirmed `.prose li` sets only margins, with no `li span` selector anywhere, so `.warn-inline`'s base rule applies unopposed. **Untested: whether the amber paints on screen, how a 116-character bold run wraps inside a numbered list at phone width, dark theme, console.** |

---

## Open, and named so it can be tested

1. **IIHF Rules 41, 43, 48 and 69 can each price a charge on a goaltender, and 43.3 and 48.3 carry an
   *automatic* game misconduct where 42.4 does not.** The corpus's charging ladder may be a half-answer in
   the permissive direction. This is the CARHA 52(b) shape.
2. **The chunk-overflow class is unsized.** Two coordinator grep censuses mis-measured it; neither mirrors
   the renderer. What settles it is a tool that renders each document and reports every marker falling
   outside its unit's first chunk — **paired with a per-document convention count, both halves or neither**,
   because a zero-marker layer is a stop, not a finding.
3. **`uk_rules.md` KT2's escalation is an accident of the chunker** — it is marked only because it shares a
   chunk with KT1. Any edit lengthening KT1 strips it silently.
4. **Facts blocks are sitting at `HARD_MAX`, and one repair was already forced to drop a citation for
   want of room.** ⚠️ **No count is written here — it was wrong in the first draft of this record, which
   said "four" and then listed five. Run `check_facts.py --near` and read the `total` column.** Confirmed
   at 14/14 in the files this round touched: `defensive_zone_coverage.md:692` and `faceoffs.md:902`.
   ⚠️ **`--near` reports the coaching count in its header line; the total cap has to be read off the same
   row, and a block can be full while nothing looks near a limit.**
5. **Six bare glyphs across four pages** (`check_callout_flow --bare`). ⚠️ **At least one was CREATED by
   this wave, and it is a doubled-glyph artefact**: in `playing_without_the_puck.md` a new passage opens
   `⚠️⚠️ **But do not read…**`, and the **first** glyph falls outside the wrapper — state 3, no bold, no
   bar, no tint — while the second forms the `warn-inline` run. **Cosmetic, not an escalation loss**: the
   instruction is still amber-bolded and the spoken `"Important."` is per-paragraph and unaffected.
   `rink_map.md` is not in this diff, so its two are not this round's. And
   ⚠️ **at least one is not a content defect at all.** `equipment.md`'s is a **table-of-contents link**
   whose target heading is itself inside a full `aside.callout-warning`, so no escalation is lost and the
   two can never share a viewport. **Run the same ancestor-chain query on the other four before anyone
   treats six as a repair backlog.**
6. **`equipment.md`, `uk_rules.md` and `conditioning_and_recovery.md` carry no ` ```facts ` blocks at all.**
7. **CARHA Rules 28, 31 and 33 unread**; Rule 31 defines what a match penalty costs, and the corpus quotes
   that tier at four sites without ever quoting the rule that defines it.
8. **The act taught without naming it** — *"get a whistle"*, *"buy a stoppage"*, *"let him go"* — is
   invisible to every sweep run this round. That is the `kickshot` failure one level up.

---

## What this round could not have found

Every method here was a search for an **act** across books that are text on disk. It says nothing about
whether a legally-timed check thrown by a player who has never been taught to hit still injures someone,
and nothing about what a referee in an adult recreational league actually calls. The corpus's scope
sentences are the only guard on the second, and they are a scope, not evidence.


---

# Follow-up: the route changes the discretion (same day, second commit)

The round closed with an open item against itself, and testing it broke. Two agents had independently
flagged that IIHF Rules 41, 43, 48 and 69 can each price a charge on a goaltender, and that **43.3 and
48.3 carry an automatic game misconduct where 42.4 does not.**

**The tariff worry was refuted; the discretion claim was not.** Nothing in the IIHF book exceeds a major
plus a game misconduct — established structurally rather than by enumeration: the book has **no match
penalty and no gross misconduct at all**, Rule 23.1 defines a game misconduct as *"the suspension of a
Player for the balance of the game"*, and Rule 28's Supplementary Discipline is expressly out-of-game. So
the committed ceiling sentence stands.

**What was incomplete is the framing clause.** Both files said the IIHF *"leaves charging a goaltender to
the referee"*. That is true of Rule 42 and false of the same physical act delivered from behind: **43.2
writes *"there is no option to award a minor penalty"***, and **43.1 names the goal frame itself** — a
goaltender square to the shooter has his back to his own net by definition. A corpus-wide census found
**not one sentence in `content/` connecting checking from behind to a goaltender**; the corpus carries
43.2 well in six documents, always about a skater at the boards.

Repaired in both files at four layers each, with the disclosure that this is *"a reading of how the book
is assembled rather than a sentence the IIHF prints"* — naming Rule 5.1 and 43.1's goal frame, and
carrying both counter-facts: Appendix II defines a vulnerable position for *"a skater"*, and the Situation
Handbook prints **no Situation under Rule 43 at all.**

## Corrections to the coordinator's own briefs, all caught by the agents

⚠️ **Six coordinator errors across this round, and five share one mechanism: a source relayed or truncated
rather than quoted whole.**

- **IIHF Rule 48 does NOT remove the minor.** 48.2 is a minor rung. A brief implied otherwise; an agent
  read 48.2 and rewrote its own draft before the correction arrived, then reported the near-miss against
  itself. **Only Rule 43 removes the choice.**
- **IIHF 43.3 was truncated at both ends**, dropping *"The Referee, at their discretion,"* and *"and who
  recklessly endangers the fouled Player"* — harsher in both directions. The shipped text quotes only the
  word *"automatic"* and attaches it to the game misconduct, never the major.
- **`sources/README.md` was misrelayed twice in one sentence**: it records **57.3** (tripping) as the bare
  major, not 101.1, and attributes *"in all cases"* to the **British** overlay, not the IIHF. The README
  was right both times.
- Three figures that did not reproduce — a `--near` capability, a trailer-entry count, and a
  `check_secrets` total.

## What the follow-up also settled

- **IIHF Sections 11 and 12 read end to end**: nothing in any category exceeds major plus game misconduct,
  so the ceiling needs no category qualification. **101.1 is a two-rung choice, not a bare major**, and its
  automatic game misconduct is in the rule's own text.
- **The Situation Handbook is silent on this act under every rule number**, not only Rule 43 — swept whole
  in both editions. The gap is neutral, not adverse.
- ⚠️ **`check_quote_drift.py` scored two truncations clean in one day**, including the coordinator's. It
  keeps the closest match, so a quotation cut at a clause boundary reads as a shorter valid one.

## Open after this commit

1. **`shooting.md` is the highest-exposure, lowest-coverage document in the corpus on this claim** — 27
   goalie-charging mentions, and zero occurrences of Rule 43, Rule 48, checking from behind or head
   contact anywhere in the file. It teaches net-front work.
2. **`goaltender.md:1121` and `:1119`, `special_teams.md:1086`** — three facts lines, voiced alone, that
   state the discretionary framing; `special_teams.md`'s names itself *"the British answer"*.
3. ⚠️ **`body_contact_and_battles.md` owns both the correct sentence (`:591`) and the defective one
   (`:1208`), 620 lines apart in the same file.** The cheapest repair in the corpus.
4. **Six sites name the mandatory books and leave the IIHF out**, so it appears only on the discretionary
   side. No sentence is false; the defect is the contrast structure.
5. **`body_contact_and_battles.md:591` says 42.4's game misconduct is not automatic** — true for adult
   men's IIHF hockey, **false for juniors under 201.1 and for British women's hockey under the In-House
   Rules' Rule 101.** Permissive, in a layer voiced alone.
6. **Whether IIHF 201.1 reaches a British U16 boy is genuinely unresolved on the documents on disk** — the
   In-House Rules note that junior categories are *"unisex and not classified as 'Mens'"*.
7. **The ceiling rests on a lexical negative attacked from one direction.** Test: sweep the IIHF book for
   `expulsion|expelled|disqualif|eject|banned` and read every hit, and establish whether anything in the
   IIHF Disciplinary Code — **not on disk** — bites during the game rather than after it.
8. **Rule 43's text was not diffed between editions**, only the tables.


---

# Third commit, same round: the route changes the discretion — and the corrections needed correcting

The second commit told a reader the IIHF leaves running a goaltender to the referee. That is the
**charging** rule's answer. The same physical act delivered **from behind** is IIHF Rule 43, where **43.2
writes *"there is no option to award a minor penalty"*** and 43.1 names *"the goal frame"* by name. A
corpus-wide census found **not one sentence in `content/` connecting checking from behind to a
goaltender** — the corpus carried 43.2 well in six documents, always about a skater turned to the boards.

Carried into nine files. Then a `safety-reviewer` **blocked the commit** on one Critical and five Majors,
and every one of them was repaired and re-verified against primary text before this commit.

## The coordinator's briefs were the defect, eleven times

This is the round's real finding and it is about the dispatcher, not the corpus. **Five of eleven errors
share one mechanism: a source relayed or truncated instead of quoted whole.** The agents caught all of
them by opening the book.

- **IIHF 48.2 keeps a minor.** A brief implied Rule 48 removes it. Only Rule 43 does.
- **IIHF 43.3 was truncated at both ends**, dropping *"The Referee, at their discretion,"* and *"and who
  recklessly endangers the fouled Player"* — harsher in both directions.
- **IIHF 43.1 has a fourth limb** — the intentional-turn carve-out — omitted from every brief that claimed
  to quote it *"whole"*. The extraction splices page furniture through the middle of that sentence.
- **USA Hockey 608(c) has no location condition**, and its Note expressly covers **open ice**. A brief
  grouped it with two clauses that genuinely are location-keyed. That reached a Key Takeaway voiced alone.
- ⚠️ **The correction to that error was itself a half-rule.** Hockey Canada **7.5(c)** has a *second*
  paragraph — *"deliberately attempts to or deliberately injures an opponent by checking them from
  behind"* — and **CARHA 53(a)** ends *"A Match penalty could also be assessed under this rule."* Neither
  carries a location. **So none of the three books confines its match penalty to the boards**, and a
  repair written to the corrected brief alone would have left the permissive implication standing for two
  books while fixing it for one.
- **`sources/README.md` was misrelayed twice in one sentence** — it names **57.3** as the bare major, not
  101.1, and attributes *"in all cases"* to the **British** overlay, not the IIHF.

## Defect shapes this round named that the project had not

- **The unbooked pronoun.** *"here, where no minor exists"*, *"the referee has no minor to award"* — no
  wrong word, no book named, inside a six-book paragraph. One rendered chunk **opened** on *"NHL Rule
  forty-three point one"*, so a listener met the NHL first and heard the unbooked claim as the NHL's.
  ⚠️ **No grep finds this: the defective sentence contains no distinguishing string.**
- **A rule inferred from the geometry of the rink.** *"A goaltender square to the shooter has their back
  to their own net"*, therefore Rule 43. But *from behind* is the **checker's position relative to the
  checked player's body** — 43.1 requires *"contact is made on the back part of the body"*. The inference
  contradicted a verbatim quotation **inside the same sentence**, and it was already committed at two
  sites nobody had been pointed at.
- **A paragraph merged by a missing blockquote separator**, which swallowed a new escalation entirely —
  found by rendering, invisible to every checker.
- **A takeaway that outgrew the chunker at 2,800 billed characters**, orphaning its closing instruction
  into the next takeaway's chunk.

## What was verified rather than assumed

Six books read for the checking-from-behind act: **NHL, IIHF and PWHL foreclose the minor; USA Hockey,
Hockey Canada and CARHA write one and none lets it stand alone.** USA Hockey's is the only rung in the six
that leaves the player on the ice — a *misconduct*, pro-rated by period length outside adult hockey.
**PWHL Rule 43 is the NHL's, word for word in the feminine** — the renumbering that would have hidden it
starts at Rule 52. The **USA Hockey Casebook** strengthens 608(c): the match is available *"regardless of
whether or not board contact is made."*

## Open

1. ⚠️ **Nobody has asked what else each book uses to price a hit on a goaltender's back.** USA Hockey
   602(a) and 607(b)/(e), Hockey Canada 8.5(b), CARHA 49(a) are each reachable on the identical act. Four
   separate agents named this against their own work. **Sweep the act, not the rule number.**
2. **IIHF 43.1 is quoted truncated at *"in any manner"* in three documents** and in full in six. The
   corpus is inconsistent with itself on one quotation.
3. **A paraphrase of the geometry inference would still pass** — a sweep keyed on *net*, *behind*,
   *facing* finds the sentence, not the idea. **Test: `unable to (protect|defend|brace|see)` near Rule 43.**
4. ⚠️ **`goaltender.md` KT13 has ~13 characters of chunk headroom** and is now a rules appendix rather
   than a kernel. **It needs re-aiming, and anyone attempting it must know the margin.**
5. **Hockey Canada writes no rule saying whether 7.5 or 8.5 governs a goaltender hit from behind.** The
   document does not claim to resolve it, and was not made to.
6. **No `source-verifier` and no `site-reviewer` has run on this wave.** The browser tooling was blocked
   by an extension-side outage.


## The gate blocked this commit once, and the block was right

A `commit-gate` returned **BLOCK** on the third wave. Its findings, all now repaired:

**The Critical's repair had reached one layer of one file.** Three passages the commit *added* still drew
an exclusivity — Hockey Canada 7.5(c) and CARHA 53(b) carry the boards condition *"but USA Hockey
doesn't"*. That is false: **7.5(c) has a second paragraph with no location**, and **CARHA 53(a) ends *"A
Match penalty could also be assessed under this rule"***, reaching a hit from behind *"anywhere on the
ice"*. So none of the books confines its match penalty to the boards. The claim had been mis-stated by
three writers in succession, each inheriting a coordinator brief that named only the first paragraph.

**A wrong sub-letter in a Key Takeaway voiced alone** — the location-free CARHA limb is 53(a), not 53(b).

**A dead citation was about to ship.** The Hockey Canada URL added in this wave returns **404**; the URL
the rest of the corpus uses returns a 30 MB PDF. A second divergent USA Hockey URL returns 403. Both
outliers were this commit's own — measured at one occurrence each against 37 for the working form.
⚠️ **`check_links.py` is internal-only and cannot see either.**

**And the record's own figures were wrong**: the 43.1 truncation was in **four** files, not three, and
**this wave created all four**. It is now at **zero** corpus-wide, and the geometry inference likewise.

## What the repairs then found that nobody had asked for

Each repair agent swept its own file rather than the lines named, and each found more:

- **`special_teams.md` had six carriers, not the four the gate could see** — a diff audit cannot find a
  defect in text the diff does not touch. Two of the six were pre-existing.
- **`shooting.md` enumerated the NHL's and PWHL's Rule 43 ladder and skipped 43.4**, the match penalty —
  then closed on a ceiling sentence. Scoped to the IIHF and so not false, but *"read aloud it tells an
  NHL/PWHL reader the worst available is a major."*
- **An attribution drift the gate had not named**: *"into the boards or goal frame"* credited to both
  Hockey Canada and CARHA. Those are Hockey Canada's words; **CARHA writes *"goal net"***. ⚠️
  `check_quote_drift.py` cannot see this — it keeps the closest match across all sources, so a claim
  carrying another book's wording scores clean.

## Corrections to the coordinator's briefs, this wave

Twelve across the round, and the pattern did not change: **a source relayed or truncated rather than
quoted whole.** New this wave:

- **Hockey Canada 7.5(c) has two paragraphs**; briefs named one, twice — the second time while correcting
  the first.
- **CARHA's location-free match limb is 53(a)**, not 53(b).
- **The doubled glyph was not created by this wave** — it is at HEAD.
- **The built slugs use underscores**, so the page URLs in a site-review brief 404'd.

## Verified by reading, not by inference

**Hockey Canada Interpretation 1 to Rule 7.5(a)** — flagged by an agent that saw the question and not the
answer — does **not** contradict the location-free limb: the test is whether the checker is *in motion*.
⚠️ **But Interpretation 2 is the exact opposite of the IIHF's carve-out**: where IIHF 43.1 excuses a hit
on a player who intentionally turns into it, Hockey Canada assesses it anyway and puts the onus on the
checker. **The corpus carries both sides** — three files each. Checked, and recorded as a clear.

## The site review, on the second attempt

The extension outage did not reproduce, so **C10 is CLEAR on visual evidence**: all three treatments land
together, **zero warning panels inside any Key Takeaways list on any of the four marker pages**, and the
longest takeaway is the second-tallest item in a list that already has taller ones. Dark theme measured at
roughly 8:1. No console errors, no off-origin requests, no horizontal scroll at 396px.

⚠️ **It also found the sibling-mismatch defect the owner complained about does exist on the site — in
Common Mistakes, not Key Takeaways**, where one bullet renders as a full panel among plain siblings with
the bullet marker stranded in the margin. Pre-existing, in a file this commit does not touch.

## Still open

1. **Nobody has swept the ACT across all six books.** Every agent this wave verified the rule it was
   named — 608, 7.5, 53, 43 — and four declared, independently, that they never asked what *else* each
   book uses to price a hit from behind. USA Hockey 602(a) and CARHA 48(a) are quoted elsewhere in the
   corpus as reaching the same conduct and appear in none of the repaired units.
2. **No layer test on the four trailer-repaired documents' summary layers.** This wave rewrote body text
   about penalty tiers in four files and read no Key focus, Common Mistakes or Key Takeaway in them.
3. **Hockey Canada Interpretation 3** permits *"pinning a player to the boards at low speed and with
   minimal impact… even if contact is initiated from behind"*. Unchecked against the corpus.
4. **A bare-glyph audit rooted at `<main>` cannot see the page header, the footer, `<details>` disclosures
   or diagram captions.** The one bare glyph found was in a sidebar ToC and fell inside `<main>` by luck.
5. **The renderer expands `i.e.` and `etc.` inside quotation marks**, so a listener hears a paraphrase
   presented as verbatim. Corpus-wide, not introduced here.


---

# Fourth commit, 25 September 2026: "no match penalty" read as leniency in the book Britain plays under

**9 `content/` files.** Five repair agents, three read-only verifiers, one coordinator correcting itself twice.

## Files in this commit

`content/hockey-iq/playing_without_the_puck.md` (the claim in seven places across five layers; Hockey
Canada 7.5(c)'s second paragraph, absent from the document entirely; the IIHF counterweight) ·
`content/positions/goaltender.md` (the Rule 608 Note truncation; PWHL Rule 42 provenance) ·
`content/positions/center.md`, `winger.md` (carried from the previous wave) ·
`content/systems/special_teams.md` (the PWHL attribution; the antecedent drift at the facts line; a
trailer contradicting its own body; an unscoped superlative) · `content/systems/forechecking_systems.md`,
`content/systems/zone_entries.md` · `content/technique/shooting.md`,
`content/technique/body_contact_and_battles.md` (the IIHF's position restored to the facts and takeaway
layers) · plus `project/plans/OPEN_ITEMS.md` and `project/verification/link_baseline.tsv`.

## The finding: a true sentence that leaves a false impression

**"Every book but the IIHF reaches a match penalty for checking from behind" is TRUE.** Verified three
times independently: `matchpenalt`, `grossmisconduct`, `expelled` and `expulsion` all score **0** across
the whole IIHF book in **both** editions, and the one bare `match` is `iihf_rules_v1.1.txt:108`,
*"doping and match-fixing."* **43.4 is headed `DISCIPLINARY MEASURES`.**

**What the sentence leaves a reader believing is false.** IIHF **43.2** removes the minor outright —
*"there is no option to award a minor penalty"* — so there is **no lower floor**. **43.3**'s major carries
an automatic game misconduct; **Rule 20.4** prices that as *"ruled off the ice for the balance of the
game"*, a substitute permitted after five minutes; and **Appendix IV Table 6** lists Checking from Behind
43.3 among *"majors that result in an automatic game misconduct"*. **NHL 21.1** writes a match penalty as
*"the suspension of a player for the balance of the game"*, substitute after five minutes. **The same
on-ice outcome.** In the 2026/27 merged Table 5 the act is ticked under `MAJOR + GMP` and **blank** under
`MAJOR ONLY` — there is no major-without-ejection route for it.

**So the corpus told a British reader — the largest IIHF audience here — that his book was the one that
did not reach the harshest tier, for the act most likely to paralyse an opponent.**

## The worst instance had no lexical signature at all

`special_teams.md:635`, a `Rule:` line **voiced alone**: *"…Boards or goal frame is the likeliest
ejection, never the only one; **only the IIHF writes none**."* **The antecedent of *"none"* opens as
*"match penalty"* and sits adjacent to *"ejection"*.** Voiced alone a listener hears *"only the IIHF
writes no ejection."*

⚠️ **This is the recorded "qualifier that changes jobs" failure happening INSIDE ONE SENTENCE rather than
between layers.** *"none"*, *"ejection"* and *"match penalty"* are ordinary words: **no grep, no layer
test, no `check_layer_echo`, no `check_facts_antecedents` and no quote checker can see a pronoun whose
referent moved mid-sentence.** `check_facts_antecedents.py`'s own docstring discriminates against the
within-line case.

## A defect class this project had not named: the unscoped superlative

**A coordinator put *"it is the strictest book here"* into three briefs. Two agents refuted it from the
books and declined to write it; one wrote it.** **NHL 43.5** and **PWHL 43.5** both read *"A game
misconduct penalty **must** be assessed anytime a major penalty is applied for checking from behind"* —
**at least three of the six books eject on any such major.**

⚠️ **`check_absolutes.py` passed it cleanly before and after the fix**, because that checker reads for
absolute **denials** and tier **caps**, and a superlative is neither. ⚠️ **A ranking claim across six
books is invisible to every mechanical gate in this repository.**

⚠️ **And the refutation was 300 lines up in the file the agent was editing** — `:641` already said of the
NHL *"a major at 43.3 and a **mandatory** game misconduct at 43.5"*. The agent's own words: ***"I took a
superlative from a brief and did not test it against text I had in front of me — the 'refute the brief'
instruction failing at the one place it was cheapest to obey."***

✅ **The discriminator, and the corpus already gets it right three times: SCOPE THE SUPERLATIVE TO A NAMED
QUESTION AND A NAMED BOOK SET.** `rules_primer.md:802` — *"**On the narrow question of** moving before the
referee has told you to, Hockey Canada is the strictest **of the four**"*. `uk_rules.md:201` — *"USA
Hockey uses the same one-finger test, **so it is not uniquely strict**"*.

## Corrections to the coordinator's own briefs, all caught by agents

1. **"NHL 43.4 is missing from the trailer"** — it was already there, and had been before the round started.
2. **"The IIHF's major is automatic"** — **false.** 43.3 opens *"The Referee, **at their discretion**, shall
   assess a major penalty and an automatic game misconduct penalty."* **The discretion attaches to whether
   the major is called; only the game misconduct is automatic.** ⚠️ **The file briefed already said so in
   its own chunk 064 — the wording would have made the document contradict itself two sections apart.**
3. **"The strictest book here"** — refuted above, and it reached the corpus before it was caught.
4. **"The 404/403 URLs were replaced by this diff"** — they were replaced in an earlier commit.
5. **"The rulebook references the Disciplinary Code five times"** — it is **22**.

⚠️ **Every one was replacement WORDING rather than a wrong premise.** *"Refute the brief"* has always been
aimed at premises; **three of these five were sentences the coordinator wrote for text it had not read the
context of**, which is the one thing the dispatch method exists to prevent.

## What the agents caught in their own new text, unprompted

- A first body ordering that **recreated the defect at a chunk boundary** — chunk 072 ending on Hockey
  Canada 7.5(c)'s boards limb with the correcting second paragraph opening 073. Reordered so the harsher
  half survives whichever way the chunker splits.
- *"word for word the on-ice outcome the NHL writes into a match penalty"* — **only *"for the balance of
  the game"* is shared.** Changed to *"the same on-ice outcome."*
- An unbounded *"no British book amends Rule 43"* written having checked four. The agent swept all fifteen
  British sources, **found the absolute held**, and **still** replaced it with the scoped form.
- A new facts line listing **NHL 43.4 alongside three mandatory match penalties** without marking it
  *"may assess"* — an overstatement in the harsher direction, caught and marked.
- A Key Takeaway where the agent **declined** to write *"ends your night"*, because KT6's subject is
  boarding and head contact and **IIHF 41.4/42.4 leave the game misconduct to the referee** — 2026/27
  Table 5 ticks `MAJOR ONLY` for both. **A sweep would have made it false.**

## Two negatives declared by their own authors, then tested

- **The IIHF's "no match penalty" negative** — a `source-verifier` confirmed it live and then refuted its
  own reach: *"I confirmed the PHRASE is absent; I did not confirm the IIHF has no functionally equivalent
  ejection under another name."* **Tested: it has one, and it is the finding above.**
- **The British overlay** — a `safety-reviewer` declared *"the grep that would find it does not exist,
  because the defective sentence is the one that does not mention Britain."* **Tested across all ten
  British documents: `frombehind` 0, `checkingfrombehind` 0, `matchpenalt` 0. The claim is UPHELD.** The
  In-House Rules' Section 6 Physical Fouls carries only the fighting provision; **the EIHL Casebook has no
  Rule 43 at all.** Three candidate divergences were found and each **rejected on reading** — two are
  routing specifications for 43.4's own Proper Authority, not tiers.

## Provenance

A `source-verifier` refetched **all six** external URLs added by the diff: **six 200s, no redirect, no
cookie wall, no soft-404, six genuine PDF byte streams confirmed with `file`.** Eleven load-bearing
quotations were located in the **live publisher documents** and checked for attribution; **ten were correct
and one was not** — `special_teams.md:641` attributed the NHL's wording of Rule 43.4 jointly to the PWHL,
whose book is written in the feminine and does not contain that string. **The tariff was right; the
provenance was manufactured.** ⚠️ **`check_quote_drift.py` scores it clean and always will, because it
keeps the closest match across all sources.** Second recorded instance of that blind spot.

**Three of the on-disk extractions were proved byte-identical to the live documents** (USA Hockey by MD5,
NHL by extraction, IIHF by the ratio `sources/README.md` predicts).

⚠️ **And Hockey Canada has republished the rulebook behind an UNCHANGED URL** — same edition string, same
167 pages, live 200, `ModDate` 10 September 2026. **Only the byte count moved.** 23 differing line-groups,
at least one substantive rule text. ✅ **Rule 7.5 is byte-identical, so this round is unaffected.** ⚠️ **A
`source-verifier` that reports "200, live" has checked reachability, not currency.**

## Coverage — D1 to D15

**D1 rules accuracy** — `rules-verifier` ×3, every limb re-derived from primary text on disk; Appendix IV
tables read **by eye and positionally**, because a flattened read of a tick grid returns a false zero.
**D2 citations/provenance** — `source-verifier`, six URLs live-refetched, eleven quotations body-verified.
**D3 cardinal rule** — no coaching choice presented as law; the tactical limbs name the book and the scope.
**D4 summary layers** — layer test run per file by each agent, with what was already correct named.
**D5 numeric ownership** — no numeric fact moved; `check_counts.py --update` converged.
**D6 negative existence claims** — the round's whole subject; two true negatives attacked, one broke.
**D7 safety** — `safety-reviewer` ×2; every repair moves toward a stricter reading, none toward cheaper.
**D8 qualification loss** — the superlative, the "automatic" slip and the "word for word" overstatement
were all D8 and all are recorded above rather than quietly fixed.
**D9 spoken layer** — all five files re-rendered; chunk tails checked per paragraph, not in aggregate.
**D10 propagation** — the claim chased across every layer of every carrier, not the briefed lines.
**D11 house style / D12 links** — `check_links.py` and the site build's `check-links` both clean.
**D13 site rendering** — built with the absolute npm binary; `--panels` per file and `--bare` over `dist`;
the moved marker forms its inline amber wrapper and adds no bare glyph.
**D14 disclosure integrity** — nothing stripped; one trailer disclosure *corrected* rather than deleted,
keeping its honest scope limit.
**D15 cross-agent contradiction** — the ladder wording compared across all four `special_teams.md` sites
after the agents finished; consistent.

**Declared out of scope:** helmets, neck protectors, concussion, conditioning and equipment — none of that
material is in these nine files and none was audited.

## Open after this commit

- **The IIHF Disciplinary Code is not on disk** and the rulebook routes Rule 43 into it **22 times**. The
  highest-value fetch outstanding. **Nothing here claims to have read it.**
- **Three British documents that would carry a tariff are unreachable** — the EIHL `Gamebook section: EIHL
  DOPS`, the **EIH Rule Book** and its *"automatic fines and/or sanctions"* schedule (**which is precisely a
  tier**), and the `DOPS Rules and Procedures`.
- **Superlatives are unswept corpus-wide.** Three read, all correctly scoped; the rest unread.
- **`sources/hc.txt` is superseded** — re-extraction shifts every `hc.txt:NNNN` citation in `project/`.
- **The same "the IIHF writes no match penalty, so the ceiling is X" shape appears for other acts** —
  charging, boarding, head contact, kicking. ⚠️ **An agent checked all five and did NOT sweep them, because
  the answer genuinely differs by act and a sweep would have made two of them false.**

## What this round could not have found

**The method is good at a sentence that says too much and weak at one that says too little.** Every defect
here was found because a heading or a citation advertised the subject. ⚠️ ***"A paragraph that assumes the
IIHF ceiling without naming it — built on the old answer, mentioning neither 'match penalty' nor '43' —
would have passed every grep run in this round."***

⚠️ **And one agent nearly filed a false critical**: its grep of the Key Takeaways for *"from behind"*
returned nothing and it was about to add a bullet. **The layer already carried the limb, in the corpus's
own words — *"into the back"*.** ***"A layer test run on the corpus's wording rather than the rulebook's
wording manufactures a false gap."***

## The gate blocked this commit too, and the block was right

⚠️ **A `commit-gate` returned BLOCK on two deleted sentence terminators** — a quote-drift repair earlier
in the round removed a terminal period and supplied nothing in its place, twice, in
`playing_without_the_puck.md`. **Each left a run-on across a tariff statement and its counterweight, in a
document that is voiced aloud.**

- **`:337`** — USA Hockey **601(d)(7)** reads *"…during a stoppage of play when done in protest of an
  official's decision."* and **the source sentence ends there**, so the period inside the quote marks was
  correct and should never have been removed. **Restored.**
- **`:882`** — here the removal was **right**: NHL **69.2** continues *"…and whether or not a goal is
  scored, the attacking player will receive a penalty…"*, so the old form was a truncation with an added
  period. **But no terminator was put outside the marks**, fusing a tariff and a ⚠️ counterweight into one
  spoken breath. **Period added outside the emphasis.**

⚠️⚠️ **THE LESSON IS THAT A QUOTE-DRIFT REPAIR IS NOT A PUNCTUATION EDIT — IT CAN COST A SENTENCE
BOUNDARY, AND A SENTENCE BOUNDARY IS A BREATH.** `check_quote_drift.py` reports the drift and cannot see
what removing it does to the sentence around it, and **no other checker in this repository looks for a
missing terminator.** ⚠️ **The gate found these by scanning for a quotation mark followed directly by a
capital or a marker — a pattern worth reusing, not a tool that exists.**

### One non-blocking finding accepted, because its direction was permissive
The gate also flagged that this diff re-glossed **CARHA 54(b)** from *"above your shoulders"* to *"reaches
one into your mask"*. **At `goaltender.md:1141` that is sound — the rule is quoted verbatim in the same
sentence.** ⚠️ **At `:1547` it is a Key Takeaway, VOICED ALONE, with no quotation to anchor it — and the
book's region is *"above the normal height of the opponent's shoulders"*.** **A cross-check at shoulder
height that never reaches the mask is still 54(b), so the gloss understated the rule in the permissive
direction, in a passage telling a goaltender what protects him. Restored to the book's region.**

⚠️ **All three repairs were made by the COORDINATOR after the gate, which is the self-certification
CLAUDE.md warns against** — so they were re-gated rather than certified here.
