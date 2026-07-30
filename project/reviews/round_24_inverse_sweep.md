# Round 24 — the inverse sweep

**Date:** 30 July 2026
**Scope:** rules the corpus states in **NHL-only terms** where the IIHF differs.

---

## Why this round exists

Rounds 20–23 found problems by grepping for `IIHF`. That finds claims which
*carry* a rule-set flag, and is structurally blind to the opposite defect.

Since round 21, all 36 documents carry a header telling British readers
*"Playing in Britain? The IIHF flags are yours."* **That makes the absence of a
flag a claim in itself** — an assertion that there is no divergence. Where it is
false, a British reader is taught the wrong rule with nothing to warn them.

Three separate reviewers named this gap in their own "what this method could
not have found" sections. This round is that.

---

## Method, and the narrowing that made it tractable

The corpus cites **98 distinct NHL rules across 391 citations**. Checking all of
them against the IIHF book would have been a week's work.

Mechanical narrowing first: of those 98, **60 already carry an IIHF
cross-reference somewhere in the corpus**, leaving **38 rules and 110
citations** with none anywhere. Those 38 were the worklist, split across two
`rules-verifier` agents working from IIHF v1.1 — the edition Britain adopts,
obtained in round 23.

**The narrowing has a hole, and the round proved it.** See "What this round
could not have found".

---

## Dimension coverage

| | Dimension | Status |
|---|---|---|
| D1–D3 | Rules accuracy, exceptions, cross-book divergence | `rules-verifier` ×2, the round's whole subject |
| D4 | Citation integrity | **Out of scope** — the diff adds no external URL; every quotation is rulebook text on disk, relocated by both agents and independently by `commit-gate` |
| D5 | Provenance | **Out of scope**, same reason. One provenance question was raised and withdrawn: USA Hockey's hand/arm wording is in Rule 623's own Note (`usah.txt:4383`), not only in the Standard of Play material |
| D6 | Negative existence claims | `rules-verifier` — and this round produced one of its own. *"Four skaters against four appears nowhere in the IIHF book"* was true of a literal string and false as a conclusion; deleted |
| D7 | Cardinal rule | Not separately run. The round adds rule statements rather than coaching choices — with one exception, *"a hand's width clear of the glove"*, which is this corpus's figure and is labelled as such |
| D8 | Numeric ownership | Not engaged — no number moved between documents |
| D9 | The summary layer | `safety-reviewer` found the stick-lift correction had reached the body and stopped at Key Takeaways, Common Mistakes and the net-front section. **`commit-gate` then found the same defect twice more** — Key Takeaway 10 and a facts block six lines from a corrected body paragraph — so this dimension took three passes |
| D10 | The key-facts layer | `safety-reviewer` swept the blocks it identified; it **missed one** (`body_contact_and_battles.md` §net front), found by `commit-gate`. `check_facts.py` passes, and cannot see this class |
| D11 | Reader safety | `safety-reviewer` — both criticals were handed to it by the sweep, and it found three defects in the fixes |
| D12 | Read-aloud integrity | `safety-reviewer` generated the narration and found the *"less than none"* inversion; `commit-gate` found two further sentences that only fail when heard |
| D13 | Folklore | Not engaged — no prevalence claim added |
| D14 | Structure, style, cross-links | `check_links.py`; `commit-gate` rendered the nested-bold string through the site's own micromark |
| D15 | The rendered site | **Not run as a browser pass.** `commit-gate` built the site and confirmed 6,530 links and 3,488 anchors resolve. It also measured the quick-reference table and found this round had grown the high-sticking cell to **913 characters against a 148–398 range** — so the ⚠️ prose was moved out of the table into a paragraph beneath it, bringing the cell to 398 and in line with its neighbours. **Introducing a defect and carrying it forward is not the same as disclosing a pre-existing one** |

---

## Criticals — three

**C1 · High-sticking has no waist-level floor in Britain, and the corpus said
it did.**

NHL 60.1: a high stick is one which *"contacts an opponent above the shoulders,
**provided their shoulders are at waist level or higher**."* IIHF 60.1 has no
such proviso — it tests a stick *"carried above the height of the opponent's
shoulders"*. **The divergence runs through 60.1 and 60.3: NHL 60.3 puts a
second waist floor on the blood double-minor that IIHF 60.3 lacks, while 60.2
alone is word-for-word identical in both books**, and USA Hockey 621 and Hockey Canada 9.5 carry no waist floor
either, so this is the NHL against everyone rather than the NHL against the
IIHF.

**The word "waist" appears once in the entire IIHF book, about pant padding.**

`body_contact_and_battles.md` told the reader in terms that *"a player bent
below waist height is not protected"*, in a comparison table whose adjacent rows
flag charging and cross-checking against the IIHF — so the bare row read as an
affirmative statement of no divergence. A British player who catches a crouching
opponent above the shoulders takes a minor with no defence; a double minor if
blood is drawn; and under In-House Rules 101/201 a major ends a junior's or a
women's below-Adult game. **The corpus was more permissive than the reader's own
book.** Fixed in the facts block, the table and `rules_primer.md`.

**C2 · The stick lift was taught as penalty-free, at exactly the place the IIHF
penalises it.**

IIHF 55.1 carries a sentence the NHL's does not, and its placement is the whole
point — it sits **before** the stick-to-stick carve-out, qualifying it:

> *"Hooking is the act of using the stick in a manner that enables a Player to
> restrain an opponent. **If the stick goes against the opponent's hands / or
> near the opponent's hands, it shall be penalized as "hooking".** When a Player
> is checking another in such a way that there is only stick-to-stick contact,
> such action is not to be penalized as "hooking"."*

The corpus calls the stick lift *"the highest-value defensive skill most
amateurs never learn"*, instructed the reader to place the blade *"right above
their bottom hand"*, and said it takes the puck *"without a penalty risk … It is
stick-on-stick, which Rule 55.1 explicitly protects."* Under the IIHF book that
protection does not extend to a stick at or near the hands, so the corpus was
teaching a British player to draw a hooking minor while telling them the
technique was safe. §3 carried **no IIHF reference at all** in a document with
62 of them.

Fixed: the technique now specifies *below their bottom hand, a hand's width
clear of the glove*, identically in all four places it appears; the "without a
penalty risk" claim is corrected to "far less penalty risk" in the body **and**
in Common Mistakes and Key Takeaways; and USA Hockey Rule 623's own hands clause
is carried alongside the IIHF sentence. The first pass got each of those
partly wrong — see the safety findings below.

**C3 · IIHF's escalation tiers trigger on recklessness, not injury — not yet
fixed.** NHL Rule 57 (tripping) has **no major penalty at all**; IIHF 57.3 and
57.4 give the referee a major, and a major plus game misconduct, for a trip that
*"recklessly endangers the fouled Player"*. Hooking and interference run the
same way: NHL 55.3 and 56.5 require an **injury**, IIHF 55.3 and 56.5 require
only reckless endangerment. So a British player can be ejected for a foul the
corpus prices as a minor, with nobody hurt. **Carried forward — see below.**

---

## Major — the coincidental-minors 4-on-4 is NHL-only

NHL 19.1: *"Both teams will therefore play four skaters against four skaters for
the duration of the minor penalties."* IIHF 19.1 has no such provision. It
requires the opposite: *"**Immediate substitution shall be made** for an Equal
Number of Minor Penalties or Coincidental Minor Penalties of Equal Duration."*

The IIHF casebook says so three separate times — *"Since the penalties are coincidental,
the penalties are not served on the clock and **the teams are playing 5 – 5**."*

Nine places taught the coincidental-minors 4-on-4 as the rule, including a whole
tactical subsection in `game_management.md` premised on it. Flagged in the
bodies, the facts blocks and the quick-reference.

**The tactical material stands, and the first correction over-reached.** Britain
does reach 4-on-4 at the same stoppage by other routes — a minor to one team
against a major to the other — which IIHF Appendix IV, Table 15 shows at
examples 18, 19, 20 and 32 under a heading reading *"All Penalties assessed at
the same stoppage."* Only this trigger differs. See the safety findings below.

---

## The finding about the method, which outlives this round

`special_teams.md` **cited IIHF 19.1 in its Sources**, and correctly recorded a
numbering difference at 19.4 — and still got 19.1's substance wrong.

**So "carries an IIHF citation" and "was actually compared" are different
properties.** The mechanical narrowing that made this round tractable excluded
60 rules on precisely that basis. Those 60 are **not cleared**, and the one
rule that proves it was excluded from this round's worklist by the same test it
fails.

---

## Genuinely equivalent — 29 of 38, recorded so nobody re-checks them

The useful negative result. Both agents read each rule in full in both books,
body pass, and most are verbatim identical:

**Batch A (14):** 15.1 delayed penalty · 49.2 kicking (all four deflection
clauses) · 56.1 interference (every clause the corpus quotes bar Possession) ·
56.2 all eight clauses · 59.1/59.2 cross-checking · 67.2 handling the puck ·
67.4 penalty shot in the crease · 69.7 rebounds and loose pucks · 74.1/74.2 too
many men · 75.2(iv) sitting on the boards · 79.2 hand pass · 81.3 icing and the
goalkeeper · 39/39.2 abuse of officials · 57.1 tripping definition.

**Batch B (15):** 26.1 delayed penalty · 41.1 boarding (including the
icing/offside clause) · 45.1 elbowing · 61.1 slashing (verbatim) · 80.1
high-sticking the puck (verbatim) · 80.3 disallowed goal (verbatim) · 5.1
roster · 86.3 choice of ends · 38.2 coach's challenge · 85.1 puck out of bounds
· 12.2 gloves (verbatim) · 71.1 premature substitution · 8.1 injured player ·
69.4 contact outside the crease · 78.5 disallowed goals.

Neither the In-House Rules nor the EIH *Rules & Regulations* amend any of them,
so the IIHF position is the operative British rule unamended.

---

## What `safety-reviewer` found in the fixes — three of my own

Both criticals were handed to safety review because they are penalty
consequences on contact technique. It found that **the fixes introduced three
new defects**, and the pattern is by now familiar.

**I over-corrected the 4-on-4, and asserted something false.** I wrote that it
*"arises only from penalties at different stoppages"* and that *"the phrase
'four skaters against four' appears nowhere in the IIHF book."* The second is a
true statement about a literal string that implies a false conclusion — the
IIHF writes it `4-4`, `4 – 4` and `4 on 4`, repeatedly. **IIHF Appendix IV,
Table 15 is headed "All Penalties assessed at the same stoppage" and shows
"Teams play 4-4" at examples 18, 19, 20 and 32** — a minor to one team against a
major to the other does it. What is NHL-only is the *coincidental-minors*
trigger, and that is all the sources support. Narrowed everywhere.

The cause is worth naming: I read Rule 19.1 and the casebook, drew a conclusion,
and did not read the tables. Any IIHF flag written the same way — from rule text
without the appendices — could carry the same defect.

**I grounded the high-sticking argument on a rule that is identical in both
books.** The corrected text cited IIHF 60.2 alongside 60.1. **NHL 60.2 and IIHF
60.2 are word for word the same sentence.** A coach arguing the point at the
bench on that ground gets refuted from the referee's own book. The divergence is
in **60.1 alone** — *itself wrong, see below: NHL 60.3 carries a second waist
floor.* Also corrected: the waist floor is not "NHL versus IIHF" — it
is absent from **USA Hockey 621 and Hockey Canada 9.5** as well, so the flag was
scoped to Britain when it applies to almost every reader.

**The stick-lift fix left three incompatible placements in one section.** The
facts line said "a clear gap *above* their bottom hand", the body said "*below*
the bottom hand", and the paragraph headed **"How to do it"** — the one a player
rehearses — was untouched and still said *"right above their bottom hand"*,
which is precisely where IIHF 55.1 penalises. All five instances now read
consistently on *below their bottom hand* — it took three passes, and the gate
caught a garbled repair each time.
`safety-reviewer` also confirmed that is not a compromise — the fulcrum is the
opponent's top hand, so a contact point further down the shaft has the longer
lever arm.

**And the correction reached the body and stopped — four times, across three gate runs.** Key Takeaway 3 still said
the lift *"carries almost no penalty risk"*; Common Mistakes still called it
*"the lowest-risk defensive skill in the game"*; and the **net-front section**,
500 lines later, still said a stick lift *"costs you nothing"* and is *"entirely
legal"* — describing the highest-risk application of the technique, in traffic,
where the bottom hand is easiest to catch. All corrected.

**A fourth and fifth instance surfaced later**, both found by `commit-gate`: Key
Takeaway 10 still promised the net-front lift came *"without the two minutes"*,
and a facts block six lines above a corrected body paragraph still said the
tie-up was achieved *"legally"*, unqualified. `defender.md` — a document outside
this round's worklist entirely — carried the same claim in both its body and its
facts layer.

**Two more scope corrections:** USA Hockey Rule 623 has its own hands clause —
*"a stick placed on the hand/arm that takes away the ability for the opponent to
pass or shoot"* — which is arguably wider than the IIHF's and is defined by the
stick lift's own purpose. And a read-aloud inversion: *"less than none under the
IIHF book"* is not parseable, and the nearest reading a listener constructs is
*safer*.

---

**And the fix for the 60.2 error introduced a 60.3 error.** `commit-gate`
caught it: the corrected text asserted the divergence was "in 60.1 alone", but
**NHL 60.3 carries a second waist floor** — the double minor for drawing blood
applies to contact *"above the height of the opponent's waist"* — and IIHF 60.3
has none. A coach arguing "60.1 alone" is refuted from 60.3, which is exactly
the failure the 60.2 correction was made to prevent. **Twice in one change, the
same defect: grounding the argument on a rule that does not support it.** The
lesson is narrow and practical — when a divergence is found in one clause of a
rule, read the whole rule, not the clause and its neighbour.

The same gate run also found the technique correction had reached three of four
places and left the paragraph headed *"Where it becomes a penalty"* still saying
*"Lifting under the hands"*, two lines below the corrected instruction; a facts
line garbled by an overlapping edit; a Key Takeaway that no longer parsed; and a
stranded final clause re-asserting the protection its own paragraph had just
withdrawn — which, read aloud, gives the listener the reassurance last.

**It also caught three files staged that belong to another agent's round.**
`git add content/` swept in `uk_rules.md`, `getting_started.md` and
`equipment.md` from a concurrent In-House-Rules attribution change whose own
record was untracked. Committing them here would have shipped another round's
conclusions with no review record and misfiled them in the history
`review_history.md` is rebuilt from. **Stage by name; `content/` is not a name.**

**Four overlapping-edit artefacts in one section, across three gate runs.** Each
time, a scripted replacement was applied over text a previous replacement had
already changed, leaving duplicated predicates — *"catching a glove and catching
a glove"*, *"yank the stick down or across"* twice with different consequences.
The mechanical checkers pass all of them, because they validate labels and
citations rather than sentences. Round 22's record already says to treat
scripted edits to prose as prohibited; this round is the evidence for why, and
the rule should be read as covering repairs to earlier repairs.

---

## Carried forward

- **`defending_the_rush.md` says of a stick lift "This is legal"**, unqualified.
  It survives only because the placement it states is *their blade*, which is
  nowhere near the hands, so IIHF 55.1 does not bite. But it is an unqualified
  legality claim of exactly the shape this round corrected in five other places.
- **`defensive_zone_coverage.md` and `goaltender.md` instruct a net-front stick
  lift with no hands caution.** Neither makes a legality or placement claim, so
  the corrected claim did propagate correctly — but the net front is where the
  bottom hand is easiest to catch.
- **`special_teams.md`'s Sources still cite IIHF v1.0** while this round's new
  claims come from v1.1 and its appendices. This diff increased the weight
  resting on that citation.

- **C3, the recklessness-not-injury escalation tiers.** Ejection consequence on
  contact technique, unflagged in `puck_handling.md`,
  `body_contact_and_battles.md`, `forechecking_systems.md` and
  `offensive_zone_play.md`. Needs a `safety-reviewer` pass of its own.
- **The IIHF penalty-shot carve-out**: a goalie fouling a breakaway **from the
  front** earns a penalty shot under IIHF 24.8, where the NHL requires the foul
  to come from behind. `defending_the_rush.md` already flags this correctly and
  is the model; `risk_management.md` enumerates all four criteria without it.
- **Rule numbers that do not survive translation.** NHL 57.3 → IIHF 24.8; NHL
  67.4 → IIHF 63.6; NHL 46.16 → IIHF 46.7; NHL 39.2's clause letters shift by
  one. A British reader looking up the cited number finds a different rule.
- **The 60 excluded rules** — see the method finding above.
- **Three stale edition citations** to IIHF v1.0 — `puck_handling.md`,
  `special_teams.md` and `body_contact_and_battles.md`, the last being the file
  carrying the most new IIHF text in this round. All five rules cited were
  diffed between v1.0 and v1.1 and are **identical**, so nothing false is
  asserted; it is an attribution gap.
- **Adjacent, outside scope:** IIHF 8.1 penalises feigning injury where the NHL
  reaches it through Rule 64; IIHF 12.3 requires 1.5 cm of elbow-pad covering
  against the NHL's ½ inch.

---

## What this round could not have found

- **Divergences in rules the corpus states without a rule number.** The worklist
  was built from explicit NHL citations. A claim taught in prose alone is
  invisible to it — and that is where a coaching claim most often hides. Had the
  4-on-4 been asserted bare rather than with "Rule 19.1", this round would have
  missed it.
- **The 60 rules excluded by the narrowing.** Not cleared, and the method
  finding above is the proof.
- **Divergences where the IIHF is silent rather than different.** Text was
  compared against text. Where the IIHF has no counterpart and the practice is
  carried by officiating custom, a casebook entry or a league bulletin, "no IIHF
  rule" reads as "no divergence".
- **Enforcement standards behind identical text.** Charging and interference
  differ between leagues largely in how they are called, which leaves no textual
  trace.
- **The EIHL Casebook and any EIH/SIHA Rule Bulletin**, still unobtained.
- **Whether "below their bottom hand, a hand's width clear of the glove" is
  how anyone teaches it.** That is this corpus's wording, not a rulebook's.
  `safety-reviewer` confirmed it is legal in all four books and that the
  mechanics favour it — the fulcrum is the opponent's top hand, so a contact
  point further down the shaft has the longer lever arm — but **no coaching
  source is cited for it**, and "a hand's width" is this corpus's figure, not a
  standard. The IIHF does not define "near the opponent's hands" and the
  Situation Handbook does not test it. Treat the distance as a caution, not a
  measurement — and note that hedge currently lives only here, where no reader
  will see it.
