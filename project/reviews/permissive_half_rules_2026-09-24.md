# The half-rule round — permissive claims found by searching the act, 24 September 2026

**22 `content/` files, +343 −215.** Eleven repair agents, six reviewers, one commit.

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
