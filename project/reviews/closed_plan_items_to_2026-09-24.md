# Closed plan items, archived 24 September 2026

**What this is.** `project/plans/OPEN_ITEMS.md` says plainly that it holds **no completed items** —
*"when work closes it moves out to a review record."* It had stopped doing that. The file reached
**15,429 lines**, and the owner's verdict was that *"a plan that long is too hard to work with"*.

**This file is where the closed items went.** Every section below was marked ✅ or 🟢 in the plan and
is moved here VERBATIM — not summarised, not trimmed. ⚠️ **These are evidence.** Several record a
finding that was later found to be wrong, or a figure that went stale; that history is the point of
keeping them, and nothing here has been tidied to read better in hindsight.

**100 sections, 3134 lines.**

⚠️ **A section was moved on the strength of its TITLE marker only, and a `##` section containing any
still-open `###` child was LEFT IN THE PLAN.** So this archive is conservative by construction: an
item wrongly left open costs a reader some time, an item wrongly archived costs the record.

---

### ✅ AND THE COORDINATOR RAN THE SIBLING CENSUS THE REVIEWER COULD NOT — IT COMES BACK CLEAN

The reviewer declared: *"the propagation failure at `:966` may have siblings I never looked for."*
**Censused corpus-wide: every other `Rule 66` site states a DIFFERENT LIMB** — 66(a) Note 2 (standing
your ground / shadowing), 66(b)'s crease-standing bar and goal disallowance, 66(a)(1) interference —
**none of which needs a charging tariff.** ✅ **The `:966` shape is unique to `forechecking_systems.md`
and is dispatched.**

⚠️ **Worth recording as a POSITIVE example of the discipline: a mechanical flag returned ~20 hits and
almost all were correct.** **Reading them was the whole job, and sweeping them would have inserted a
charging tariff into a dozen paragraphs about standing your ground.**


### ✅✅ A STRONGER GATE THAN THE THREE MEASUREMENTS — found by the first agent to run this wave

**`md_to_speech` prints a BILLED CHARACTER COUNT. For a pure marker-move it must be BYTE-IDENTICAL
before and after.** The first wave agent reported *"1 documents, 100 chunks, 223,497 billed
characters"* on **both** runs and called it *"the strongest available proof that nothing was added,
lost or reworded for a listener."* **It is.**

⚠️ **The three measurements prove no escalation was DELETED. The identical billed-character count
proves the spoken layer is UNCHANGED, full stop** — no rewording, no reflow, no chunk boundary moved.
**Use it as the primary gate for any placement wave, with the three measurements as the diagnosis when
it does NOT match.**

⚠️ **It only holds for a pure MOVE.** A wave that also rewords will legitimately differ, and then the
three measurements are the gate.


### ✅ FIRST RESULT — and the lane rule did its job in both directions

`systems/game_management.md`: **15 panels → 2**, markers **47 → 47**, spoken *"Important."* **49 → 49**,
SSML byte-identical. **13 panels removed in one pass**; 14 insertions / 14 deletions, every marker
moved **within its own line**.

✅ **Two were the DOUBLE-FURNITURE shape** — an amber aside nested inside a grey blockquote.
✅ **Three were SIBLING MISMATCHES** — a bullet rendering as a full panel beside plain-prose bullets in
the same list, **which is the owner's original complaint**.
✅ **Two panels were KEPT, each with its hazard named** — the empty-net pivot (a reader who misses it
concedes a goal outright) and the *"put it down means down where you are"* boundary.

✅ **LANE RULE HONOURED: no permissive penalty-bearing defect found, nothing repaired, and TWO scope
nits reported instead of chased** — a British-scope/competition-regulation collision at `:728` (the
recorded shape where a grep for `EIHL` cannot find it, **because the defective paragraph never says
EIHL**), and an untested absence-of-provision claim about the In-House Rules at `:851`.

⚠️ **The agent also declared the limit of a placement wave honestly:** *"'2 panels' is the checker's
prediction of the page, not an observation of it"* — no build was run. **The coordinator builds once
at the end of the wave, not per agent.**


### ✅ FOUR MID-RANK DOCUMENTS — 20 → 7 TARIFF-FIRST, 19 insertions / 19 deletions

| document | before | after |
|---|---|---|
| `getting_started` | 5/26 (19%) | **1/26 (3%)** ⚠️ **the first document a new reader meets** |
| `on_ice_communication` | 5/32 | **2/32** |
| `special_teams` | 5/47 | **0/47** |
| `breakouts` | 5/26 | **4/26** |

⚠️ **Rules-bearing words UP in all four (+41, +14, +6, +63) — the EIGHTH independent report.**
***"I did not strip anything to move a number, and the ratio should not be used to judge this wave."***
**Every change is a re-ordering: 19 insertions against 19 deletions.**


### ✅ AND IT VERIFIED A RULE AGAINST PRIMARY TEXT RATHER THAN THE DOCUMENT
`nhl_rules.txt:9053` — *"he must wait for the next stoppage of play before returning… He cannot
change 'on the fly.' If he does, a bench minor penalty shall be assessed"*. ⚠️ **It then replaced the
document's *"sudden death"* with the rule's own *"regular-season overtime"*.**


### ✅ FIVE HITS LEFT THAT ARE FALSE POSITIVES OF THE REPAIR ITSELF
*"Take your ice early…"*, *"Once your goalie has gone off… wait for the next stoppage"*, *"Never aim
a clearance at the players' bench…"* — **imperatives that score only because the instruction cannot
be stated without naming the book it is scoped to.** ⚠️ ***"I did not remove a book name to clear a
hit; that would trade a scope disclosure for a number."*** **Non-negotiable 4, applied unprompted.**
✅ **And `getting_started` KT6 left deliberately** — *"If you play in Britain, your rulebook is the
IIHF's"* — **the document's thesis, same reasoning as `uk_rules.md` KT1.**


### ✅ It applied the name-the-books standard where it was already re-ordering
`on_ice_communication` KT14's *"All four rulebooks bar a goalie…"* now **names** the four.
⚠️ **And it reported two stale tallies it did NOT rewrite because they were outside its edits** —
`breakouts.md`'s *"Of the four books here it is the NHL's alone"* and *"interference under all four
books"*. ✅ **While confirming `special_teams`'s *"three books of the five"* IS sound, because that
document's five-book universe is the declared one.**


### ✅ `scripts/check_instruction_first.py` — written 23 September, and it DOES see it

**The test:** skip the bold name that opens a Common Mistakes or Key Takeaways unit, then read the
**first sentence of the body**. If that sentence carries a rule citation, a book name or penalty
vocabulary, the unit **LEADS WITH A TARIFF**. Otherwise it leads with an instruction.

**Corpus baseline, 23 September: 215 of 1,225 enumerated units lead with a tariff (17%).**

**And it detects the repair the ratio missed, measured HEAD against the working tree:**

| document | tariff-first at HEAD | now | ratio said |
|---|---|---|---|
| `shooting` | **4** | **1** | 85% → 86% (*went UP*) |
| `goaltender` | **9** | **6** | 85% → 82% |
| `offensive_zone_play` | **4** | **3** | 83% → 82% (*words went UP*) |

⚠️⚠️ **ITS FIRST VERSION WAS WRONG AND WAS CAUGHT BY READING `--show` BEFORE TRUSTING THE NUMBER.**
A bold instruction ends `.**`, so a bare `(?<=[.!?])\s+` lookbehind sees `*` before the space and
does not split — **the "first sentence" swallowed the instruction AND the tariff behind it, and
FOUR OF SEVEN hits were false positives reading as tariff-first on units that led with an
instruction.** **A tool measured before it was believed.**

⚠️ **WORKLIST, NOT A GATE, AND THE TARGET IS NOT ZERO.** A rule that IS the tactic, a unit whose
subject is a book divergence a player must look up, and a safety limb that must be heard first are
**all correct** leading with a rule. **A high count is a CANDIDATE FOR READING. Never sweep it.**
⚠️ **And it measures POSITION, NOT CRAFT** — *"I tested whether the instruction is now FIRST, not
whether it is RIGHT… A hockey-literate human reading the repaired bullets aloud is the only test
available, and it has not been run."*

---


## ✅ KEY FOCUS RE-AIMED — 8 systems documents, 6 CUT and 15 ADDED


### ✅ EVERY CUT WAS PROVED BY A CARRIER COUNT FIRST
The back-to-the-boards bullet cut from `breakouts.md` is carried **~15 times in that file** — nine
facts lines, five body sections, Common Mistakes and three Key Takeaways, each enumerated.
**`forechecking_systems.md`'s and `zone_entries.md`'s likewise.** ⚠️ **And `zone_entries.md`'s
delayed-offside bullet was KEPT against the trend:** *"removing a safety limb from the top layer for
tidiness is the wrong trade."*


## ✅ THE UNSCOPED ABSOLUTE HOLDS — tested across six books and eight British documents

**`defender.md`'s *"the cross-checking and hooking rules reach you in any league"* — VERIFIED and left
unchanged.** ⚠️ **Every book carries BOTH rules and NEITHER is conditioned on body-checking
classification:** NHL 59.1/55.1, IIHF 59.1/55.1, USA Hockey 609/623 (⚠️ **read in full rather than
trusting the corpus's own line**), Hockey Canada 9.2/8.2, CARHA 54/64, **PWHL 60.1/56.1**.
⚠️ **PWHL cross-checking is Rule 60 and was findable only via the EN-DASHED `Cross–checking` form —
a straight-hyphen grep returns a false zero, and it did on the first attempt.**
✅ **The British layer REINFORCES rather than amends** — no IHUK RoC mentions either foul, and the
In-House Rules push stricter.
⚠️ **Its honest residual, declared rather than papered over:** *"'any league' is still a universal
over books not on disk. I tested six books plus eight British documents, not 'any league'… **the
absolute is now TESTED, not PROVED.**"* **It judged a hedge would be the paranoia the owner named.**


### ✅ AND IT PARTIALLY REFUTED THE AGENT BEFORE IT
`winger.md`'s shot bullet was called *"my most contestable addition"* by its author. ⚠️ **The reviewer
judged the JUDGEMENT sound and found the defect in a sentence the author did NOT flag:** the bullet
opened *"**Most wingers pass up good shots rather than take bad ones**"* — **an unsourced claim about
a MEASURED population, stated flatly, two lines under a sibling bullet that correctly labels its own
claim *"coaching craft rather than a counted ranking"*. Every gate passed it.**
✅ **Repaired by SUBSTITUTION, not hedging** — the paragraph got no longer — **and re-ordered so the
caveat that changes what a player does begins at WORD 35 instead of word 67, inside the sixty-word
rule.**

---


## ✅ KEY FOCUS RE-AIMED — 10 technique / hockey-iq documents, 41 → 69 BULLETS

**24 ADDITIONS against 2 CUTS.** ⚠️⚠️ **THE DEFECT WAS ABSENCE, NOT EXCESS, AND THE EXAMPLES ARE
DAMNING:**
- ⚠️ **`body_contact_and_battles.md`'s Key focus said NOTHING A PLAYER DOES TO WIN A PUCK** — on the
  corpus's battle document.
- ⚠️ **`risk_management.md` OWNS the owner's own worked example — *"never pass the puck, or skate it,
  across the front of your own goal"* — AND ITS KEY FOCUS DID NOT STATE IT.**
- **`time_and_space.md`'s was entirely OFFENSIVE**, though half the document is about taking time and
  space away. **`playing_without_the_puck.md` barely described playing without the puck.**


### ✅ IT PROVED ITS ONE SAFETY CUT BY RENDERING, NOT BY GREPPING
The warm-up-shots-at-your-own-goalie bullet was cut — ⚠️ ***"It is a safety claim, so I did not cut it
on the bar alone: I proved the carrier by RENDERING."*** Real run, 104 chunks, and the de-tagged SSML
voices it from the §How to Practise facts block with two further `Rule:` lines. **A listener still
hears it.**


## ✅ KEY FOCUS RE-AIMED UNDER THE NEW BAR — 12 foundation / off-ice / getting-started documents

**12 ADDITIONS against 3 CUTS and 4 DEMOTIONS.** ⚠️⚠️ **THE AUDIT'S WARNING HELD FOR THE SECOND TIME:
*"the additions were the larger half of the work."*** **Every addition lifted from its own document's
body with the section named — no invention.**


### ✅ ITS RULING ON LOOK-UP INSTRUCTIONS, and it should stand
> *"**Yes, and it is often the strongest point on the page — but only when the look-up IS the action,
> not a substitute for one.** The test: would a reader who does nothing but this bullet be better
> off? *'Ask your league which book you are under'* passes… *'Find out what your team plays'* as a
> trailing hedge on a tactic FAILS — the tactic is the point and the look-up is its qualification."*
⚠️ **Corollary, on record: `uk_rules.md` measures 100% rules-bearing in Key focus and `rules_primer.md`
96% AFTER the work, and both are correct. DO NOT DRIVE EITHER DOWN.**


### ✅ THE CONCUSSION DEMOTION KEPT EVERY ACTION
Only the **enumeration** and the list-versus-list comparison moved (~330 → ~150 words). **All ten red
flags still named, the spinal-injury limb, the helmet, the three hours, the medical clearance, and
the 🇬🇧 flag that the British list and the 21-day floor differ.** **The sixty-word rule holds.**
⚠️ **One marker count fell — 32→31 in `team_play_and_culture.md` — and it is the WHOLE DEMOTED UNIT
LEAVING, not a de-marking. *"No paragraph anywhere lost its last marker while surviving."***


### ✅ `body_contact_and_battles.md` — AND IT FOUND THE INVERSE SHAPE ITSELF

⚠️⚠️ **THE BODY QUOTED 52(b) IN FULL, SECOND LIMB INCLUDED — SO A GREP FOR THE QUOTATION WOULD HAVE
CLEARED IT.** The defect was the **frame around the quotation**: *"And if CARHA is your book, **the
crease is where it stops being the referee's call**"*, stated as the takeaway **immediately before a
quotation that contradicts it.** ⚠️ **This is the layer written ASSUMING the old answer, found by an
agent asking that question rather than by any sweep** — and no tool in this repository can see it.

⚠️ **It also found the four-book shape in a SECOND section nobody had pointed at.** §5's charging
ladder asserts the act is *"not capped at a minor **in any book**"* and enumerates four — **while
CARHA, the only MANDATORY one and the harshest of the five on that act, was absent**, in a section
that cites CARHA Rule 52 for its stride count three paragraphs earlier. **Understating a mandatory
ejection.**


### ✅ `playing_without_the_puck.md` + `zone_entries.md` — A FALSE TAKEAWAY AND A FALSE "AGREE"

⚠️⚠️ **KT11 WAS FALSE, NOT MERELY NARROW, AND IT IS VOICED ALONE.** It read *"Hockey Canada adds a
further mandatory tier **of its own** where the contact injures."* ⚠️ ***"Of its own" asserts CARHA
has no injury tier. CARHA has TWO*** — 52(b)'s second limb and 52(a)'s *"If injury results"*. **Told a
CARHA reader that injuring someone with a charge is not separately mandatory.** ✅ **The repair made
the takeaway SHORTER — 2,064 → 1,869 chars.** The agent wrote a longer one first and cut it: *"a
takeaway is a kernel, not an appendix."*

⚠️ **The body at `:646` quoted 52(b) IN FULL and then passed straight over the half after the "or"** —
the second time in one round that a complete quotation sat under a frame that ignored it. ⚠️ **And the
SOURCES TRAILER described Rule 52 by its crease limb only: the provenance layer was itself written on
the narrow answer.**

⚠️⚠️ **A SEPARATE DEFECT FOUND WHILE AUDITING — `zone_entries.md:327`, a facts line voiced alone.**
It ended *"Hockey Canada 8.5(b) makes charging an automatic major plus game misconduct, **and CARHA
52(b) and PWHL 42.1 agree**."* ⚠️ **Voiced alone, "agree" attaches to the nearest antecedent — the
automatic ejection — and PWHL 42.1 is EXPRESSLY discretionary** (*"A minor, major or a major and a
game misconduct"*). ⚠️ **CARHA genuinely does agree, which makes the wrong reading MORE natural, not
less.** Rewritten to say what each book says; 294 → 275 chars, so it also left the near-cap list.

✅ **AND ITS CORPUS SWEEP CLOSES THE CLAIM RATHER THAN OPENING A WAVE.** Every other carrier already
holds the two-limb form. ⚠️ **Read that with one qualification the agent declared itself: it swept a
tree THREE OTHER AGENTS WERE WRITING**, so `goaltender.md` scored clean because it was being repaired
at that moment. **Re-sweep after the round.**


### ✅ `goaltender.md` — AND THE BRIEF NAMED FOUR SITES WHERE THERE WERE SEVEN

⚠️⚠️ **THE SEVENTH IS THE "BUILT ON THE OLD ANSWER" SHAPE, AND NO GREP COULD REACH IT.** `:1122`'s
closing comparison read *"Hockey Canada and CARHA are the two that write a mandatory floor… and
**Hockey Canada's is the one that follows you out of your crease**."* ⚠️ **It never cites 52(b), so it
survives every search for the rule number — and it is FALSE on the second limb.** ⚠️⚠️ **It sits
THREE SENTENCES after the body correction the brief itself cited as already correct, in the same
paragraph.** Now: *"Hockey Canada's follows you out of your crease unconditionally where CARHA's does
so only once the charge injures."*

⚠️ **And `:1088` held TWO naked forms in a single parenthetical, not the one the brief named.**

✅ **THE LISTENER GAP IS CLOSED, AND THAT IS THE MEASUREMENT THAT MATTERS.** The naked form used to be
in chunk 134 with its correction 4, 68 and 76 chunks later. **The facts line now carries both limbs in
its OWN chunk** (134; Common Mistakes 207, KT13 215), so **no layer depends on a listener reaching a
later one.**

✅ Also closed: the *"nothing domestic alters"* scope (the EIHL does), the *"All four books"* frame at
`:1084` — **with its verified second half preserved and stated separately** — the `:1040` `Key:` line,
Hockey Canada's misrouted Interpretation 2 pointer, the NHL/EIHL *"in all but a word"* precision, and
the Situation 4 bullets **re-ordered to lead with the act and close on the rung**, every quoted string
byte-for-byte intact.

✅ **It made room by SUBSTITUTION rather than eviction** — cut the lead-in's duplication of the
quote's own wording, tightened a scope, and spent the saving on the *"it does not soften 52(b)"*
counterweight, which now lives in the facts layer and not only the body. **280/300.**


### ✅ `center.md` + `shooting.md` — A QUOTATION CUT MID-SENTENCE, AND A FALSE MANDATORY

⚠️⚠️ **`center.md:724` STOPPED THE CARHA QUOTATION MID-SOURCE-SENTENCE — at *"within the goal
crease"*, WITH A CLOSING QUOTE MARK AND NO ELLIPSIS.** ⚠️ **The half-rule presented as a whole one,
in the permissive direction**, telling a centre the mandatory tier ends at the crease line.
`check_quote_drift.py` cannot see this: the characters quoted are verbatim.

⚠️ **`shooting.md:498` was FALSE, not merely narrow.** Its tail read *"8.5(b) even on violence alone"*
under the verb *"make it mandatory"* — **Hockey Canada's violence route is at the referee's
discretion** (`hc.txt:7004`), and **the document's own body callout said so correctly.** A summary
layer contradicting its own body.

⚠️ **`center.md:441` was wrong in BOTH DIRECTIONS AT ONCE** — too wide for CARHA (outside the crease
without injury it is 52(a), discretionary) and too narrow (it hid the injury limb). **The repair also
removed an attachment ambiguity** that made a listener read Hockey Canada as crease-limited.

✅ **THE SHAPE, STATED BY THE AGENT AND TRUE OF ALL FOUR FILES THIS ROUND:** *"The full two-limb text
was present in the body and the Sources trailer the whole time. What carried the naked half was the
facts line, Common Mistakes and the Key Takeaway — **the three layers voiced alone.**"*

✅ **The "every book" claim was TESTED and HOLDS.** 42 files on disk; every book pricing a charge on a
goalkeeper in the crease reaches major plus game misconduct, and **no book on disk prices it lower.**
✅ And `shooting.md:295`'s *"CARHA 52(b) Note"* citation was **verified correct** — the Note sits at
(b)'s sub-indent, not Rule 52's.


### ✅ THE OVER-THE-GLASS UNITS — REVIEWED AND SOUND. A clean result, recorded as evidence.

**The owner's own worked example** (*"never put it over the glass from your own zone"*) shipped as a new
Common Mistakes bullet and Key Takeaway 12, **self-certified**, and a third gate blocked on that. A
`safety-reviewer` has now read both. **Verdict: no criticals, no majors, nothing blocking.**

✅ **Every claim re-derived from primary text**: NHL 63.2(ii)/(iii), IIHF 63.2(II)/(III), PWHL
65.2(ii)/(iii), USA Hockey 610(c) + 631(d), Hockey Canada 10.1(ii) + 10.1(v), CARHA 55(a) + 75(b).
✅ **"All six" is the correct set** — `ls sources/*.txt` checked for a seventh book pricing the act.
✅ **The competition-scope trap re-run independently** across the EIHL Casebook, both In-House Rules,
`eih_rr` and all four IHUK ROCs: **no amendment of 63.2 anywhere**, so *"the IIHF's is the version a
British player is under"* **holds, and holds for an EIHL reader too.**

✅ **THE STRICT-LIABILITY / DELIBERATE SPLIT IS DRAWN THE SAFE WAY IN BOTH UNITS.** Neither presents
the deliberate-only version as universal — **that is the reading that gets a player penalised.** Where
they err, they err toward over-caution.
✅ **Neither unit pushes a player into a worse play.** Both state the alternative in the same breath,
so the instruction is *where to put it*, not *don't*. ⚠️ **The reviewer specifically looked for the
owner's cardinal counter-example — a puck taken across the front of the reader's own net to obey the
rule — and it is NOT reachable from either wording.**
✅ **NO OVERSTATEMENT.** Every modal checked: no *shall*, *must*, *automatic* or *any player*.
⚠️ **That is notable against this project's record that summarising a tariff reliably produces a
harsher, simpler rule. It did not happen here.**
✅ **Both self-contained in their chunks** — the bullet opens chunk 083 with all its scoping inside it;
**KT12 is the ONLY unit in chunk 091.**

**Two minors dispatched** — KT12's goaltender limb carried only by the words *"for a skater"* (the one
permissive wording in either unit, in the chunk voiced alone, and the sibling bullet already solves it
in three words), and *"the other three books **on disk**"*, which is the project narrating itself
aloud (non-negotiable 6). **A third — CARHA's league scope — was judged benign and deliberately NOT
forced in**, because all three non-strict books give a skater the same answer, so mis-attributing among
them changes nothing a player does.


### ✅ THE TWO MINORS — CLOSED, and the agent refused the coordinator's sketch for a good reason

✅ **KT12's goaltender limb** now names the strict-liability limb explicitly. ⚠️ **The agent declined
the brief's suggested wording** (*"Hockey Canada and CARHA reach the goaltender alone"*) because **bare
"reach the goaltender alone" is ambiguous about WHICH limb reaches him** — a listener could attach it
to the *deliberate* limb in the next clause, **false in the restrictive direction.** It tied the clause
to the strict-liability limb by echoing the takeaway's own earlier framing instead. **Third time this
round an agent has improved on a coordinator's replacement text rather than its premise.**

✅ ***"on disk"* removed from the Common Mistakes bullet** (non-negotiable 6, spoken aloud).
⚠️ **A second `on disk` at `:965` was found and deliberately LEFT** — the agent de-tagged **all 92
rendered chunks** and got **zero hits** for that section, so `## Notes on verification` is **dropped
entirely by the renderer.** That makes it **unvoiced provenance about extraction method — non-negotiable
4 material, not non-negotiable 6.** ✅ **Measured, not assumed, and the right call.**

✅ **The CARHA league scope was deliberately NOT added** to KT12, by both the reviewer and the repairing
agent independently: it would lengthen a chunk to close a mis-read that **costs a player nothing**, and
both units already close the one mis-read that does. **"Readable beats defendable" applied correctly —
changing nothing as a considered call, not an omission.**

⚠️ **Do not carry "chunk 091 is 603 chars" into a later brief — it is now 707.**


### ✅ RESOLVED, NOT A DEFECT — the NHL 42.1 quotation that scores 0 flattened

An agent flagged, honestly and outside its scope, that *"A minor, major or a major and a game
misconduct shall be imposed on a player who charges a goalkeeper while the goalkeeper is within his
goal crease"* returns **0** on a flattened sweep of `nhl_rules.txt` while being carried at three sites,
and asked for a `rules-verifier`. ✅ **Checked by the coordinator: the quotation is EXACT.** The
sentence is split by a page-furniture block:

```
A minor, major or a major and a game misconduct shall be
NATIONAL HOCKEY LEAGUE / Previous Page / 73 / Table of Contents
OFFICIAL RULES 2025-2026 / Next Page / SECTION 6 - PHYSICAL INFRACTIONS
imposed on a player who charges a goalkeeper while the goalkeeper
is within his goal crease.
```

Its three fragments each score **1**, in order, and reconstruct the sentence verbatim. **Do not re-file
this.** ⚠️ **The agent's instinct — *"it may be an extraction gap rather than a misquotation"* — was
right, and flagging rather than "repairing" was the correct call.** A `rules-verifier` earlier in the
round reached the same conclusion independently.


### ✅ THE `shooting.md` CRITICAL — CLOSED, and it exposed a TOOL BLIND SPOT

✅ 4 sites repaired; chunk 055 is now **self-contained** — the full two-limb quotation, the
crease-limb scope, the CARHA-affiliated scope and *"anywhere on the ice"* all land **before** the
chunk's closing instruction.

⚠️⚠️ **AND A THIRD SITE THE BRIEF DID NOT NAME: `shooting.md:293`, a facts line voiced alone.** It
read *"mandatory under Hockey Canada 8.5(b) and CARHA 52(b), and where such a foul injures"* — and
***"such a foul"* refers back to crease charging**, so the line reads as crease-keyed for CARHA.
**Same defect shape, a pronoun doing the damage instead of a truncation.**

⚠️⚠️⚠️ **`check_quote_drift.py` IS NOT A NET FOR THE TRUNCATED QUOTATION — MEASURED, AND THE
COORDINATOR'S BRIEF ASSERTED THE OPPOSITE.** Two instances of one shape: it FLAGGED
`goaltender.md:1090` and was **BLIND to `shooting.md:472`**. It matches on alphanumerics and keeps the
**closest** match, so a truncation scores as a clean **shorter** quotation; `ADDED '.'` fires only when
the continuation falls inside the matched span. ⚠️ **A clean run is evidence the characters inside a
quotation are real, NOT that the quotation is complete.** Recorded in `CLAUDE.md`.


### ✅ COORDINATOR DECISION — the `:293` trade is ACCEPTED

The agent had **3 characters** of headroom, measured nine rewrites (cheapest correct one 305), and
bought room by **removing the NHL/PWHL 42.1 quotation** *"[a] minor, major or a major and a game
misconduct"*, leaving *discretionary* to carry it. **It flagged the trade rather than making it
silently, which is the right behaviour.**

✅ **Accepted, and the reasoning is the rule for next time: what was traded was REDUNDANT EVIDENCE, not
a caveat, a scope or a disclosure.** That quotation survives **three more times in the same document**
(`:472`, `:839`, `:923`) and the sibling facts line `:498` states the same claim without it.
⚠️ **The alternative — a 14th facts line — would leave the block at `HARD_MAX` 14 and block every
future propagation into it**, which is the eviction failure this project has already been bitten by.
**A block at its ceiling is a liability, not a full shelf.**

⚠️ **This decision is the coordinator's and has not been reviewed.** The agent said plainly *"a
facts-reviewer reading that block aloud might disagree."* **Hand `shooting.md`'s block to a
`facts-reviewer` before this is treated as settled.**


### ✅ THE CEILING CLAIM — 7 sites repaired, and the brief was REFUTED on the better ground

✅ **CARHA 48(a) confirmed verbatim**, and the claim had a **third carrier the brief did not name** —
`playing_without_the_puck.md:634`, a facts line reading *"Not every book has a match tier, so check the
one you play under"*: **literally true, and vague enough to be heard as excluding CARHA.** The agent
briefed itself on the claim rather than the two lines it was given.

⚠️⚠️ **AND IT REFUTED THE BRIEF'S REASONING ON THE SECOND ITEM.** I asked whether adding CARHA 53(a)'s
*"A Match penalty could also be assessed under this rule"* merely **duplicated** 53(b) two sentences
later. **It does not.** 53(a)'s act is *"anywhere on the ice"*; **53(b)'s match penalty requires
*"into the boards or goal net"***. So the omitted sentence is **the only route to a match penalty for
the OPEN-ICE version of the hit** — in a paragraph that explicitly teaches open-ice pressure on a
turned defenceman. **A better reason to add it than the one I gave.**

✅ **CHUNK DISTANCE MEASURED FOR ALL SEVEN REPAIRS AND IT IS ZERO** — every correction lands in the
same chunk as the claim it corrects, each self-contained. **`zone_entries` Common Mistakes (chunk 083)
is the LAST sentence of its chunk**, so nothing follows to qualify it; it had to be complete alone,
and is. ✅ **Repaired by SUBSTITUTION, not by trading a caveat**: `zone_entries:224` dropped *"at the
referee's discretion"* (recoverable from *"a Minor or a Major"*) and compressed a clause, landing
295/300 with **every original limb kept**. ✅ `check_facts.py` **blocked a first attempt at 349/300** —
the gate doing its job.

✅ **Coordinator handover answered:** the new `⚠️` at `zone_entries:228` is **mid-paragraph, so it
renders as PROSE and not an amber panel**, while still speaking its escalation. `--panels --file` puts
that document at 6.


### ✅ THE EXEMPLARY SHAPE — use this as the template when repairing a ceiling claim

`playing_without_the_puck.md:478`, `:500`, `:886`, `:965`: ***"USA Hockey writes no tier above the
minor INSIDE Rule 625 ITSELF — and it still reaches one, FROM OUTSIDE THE RULE, by two routes"***
(640(g), 640(h)), **with the Summary of Penalties appendix read as a cross-check.** ⚠️ **It scopes the
negative to the rule and then answers the book-level question separately.** That is the form every
ceiling claim in this corpus should take.


### ✅ AND A LARGE BODY OF THE ROUND'S WORK WAS RE-VERIFIED AND UPHELD

CARHA 52(a)/(b) and its Note, 53(a)/(b) and its Note, all four paragraphs of 66(b), 72(e)(2) and its
Note, 75(b) · Hockey Canada 7.4 with all three Interpretations, 8.5 preamble and (a)–(e), 10.1 ·
USA Hockey 610, 631, Casebook 607 Situations 4 and 5 · NHL 42.4/42.5 · PWHL 42.1–42.5 · EIHL Casebook
Rule 42. ✅ **The delay-of-game *"all six books"* claim was tested book by book and HOLDS.**
✅ **The repairing agent's catch of Hockey Canada's own mis-pointer was independently confirmed.**


### ✅ CLOSED — `--panels` now agrees with the built site on every file

Three successive wrong answers; see `project/reviews/safety_criticals_and_book_scope_2026-09-23.md`,
section *"`--panels` WAS WRONG THREE TIMES"*. **No figure is repeated here** — run the tool.
⚠️ **Validate it PER FILE against `site/dist` after any change to it; a total can agree by
cancellation, which is this tool's entire history.**

---


### ✅ WHAT THE FIRST SLICE FOUND — the proof this is worth doing

`body_contact_and_battles.md` §"The cross-check problem": **CARHA Rule 54 writes tiers the ladder had
no bullet for**, including **54(c), a MANDATORY major plus game misconduct for crosschecking a
goalkeeper in the crease** — ⚠️ **precisely the act that section is about.** Permissive for a CARHA
reader at the net front. Five sites repaired, three verified correctly scoped and left.

⚠️ **Key Takeaway 3 was INTERNALLY INCONSISTENT** — three clauses earlier it already said *"a fifth
book on disk, CARHA Rule 62(b)"*, then reverted to a four-book frame for the cross-check. **A document
can carry both frames in one spoken unit.**
✅ **Two repairs came out SHORTER and WIDER**: *"one book's wording, absent from the other three"* →
*"USA Hockey Rule 609's wording, absent from every other book here"*. **Naming the book beats counting
the books.**


### ✅ SLICE 2 — 212 SITES SWEPT, 5 REPAIRED. THE 2.4% RATE IS THE POINT.

**The discriminator works, and the number proves this shape needs READING, not sweeping.** Of 212
candidate sites in `body_contact_and_battles.md`, **207 were correct as scoped** and were left with
reasons recorded.

| Defect | Shape | Direction |
|---|---|---|
| Slew-footing: *"a defence to slew-footing in no book"* | False universal — **CARHA 86(b)'s Note** | ⚠️ **CONSERVATIVE** — the corpus was HARSHER than CARHA |
| §6 stride count: *"only two of them count strides"* | **Contradicted its own next three sentences**, which name THREE | count |
| Box-out lift | Negative stated over three books; **NHL and PWHL 48.1(i) write the exact words** | 🔴 permissive |
| High-sticking: CARHA *"starts above it… no minor rung beneath it"* | **CARHA 62(a) IS a minor** — the opponent's waist, no contact required | 🔴 permissive |
| Key Takeaway 5: *"Only two of the four books"* | Count → naming; **arithmetic also wrong** (*"the other three"* vs two of four) | count |

⚠️ **THE SLEW-FOOTING ONE RAN CONSERVATIVE, AND THAT IS WORTH NOTING.** Every other tariff defect this
week ran permissive. **A false universal can be wrong in the safe direction and still be false** — and
voiced alone it is still a claim about books the corpus had not read.

✅ **AND THE COUNTS WERE DELETED, NOT CORRECTED**, per the discriminator — *"the enumeration does the
work"*. ✅ **`--panels` 47 → 47, unmoved**: the one marker added sits mid-paragraph, so it speaks
*"Important."* without rendering amber. **P2 was not damaged by a P1-adjacent wave.**


### ✅ RESOLVED by the coordinator — a question the agent declared it could not answer

It flagged that **no CARHA `-layout` extraction exists on disk**, so it could not tell whether 86(b)'s
Note is typographically attached to 86(a) — *"if it is, my repair is over-cautious rather than wrong."*

✅ **Answered by rendering the refetched PDF with `pdftotext -layout`: the Note is printed UNDER (b)**,
indented one space deeper than (b)'s own text. **So scoping the universal was correct.**
⚠️ **And the agent's caution was right for a second reason it had already written in: the Note's
SUBSTANCE is tripping, not slew-footing** — it says *"the **tripping** shall be ignored"* and describes
*"falling or sliding along the ice"*, which is **86(a)'s** limb. **The repair says exactly that
(*"which is not the act 86(b) describes"*) and `:1567` still states plainly that playing the puck first
is not a defence. No reader is told they have a defence they do not have.**

⚠️ **NOTE FOR THE NEXT AGENT: a CARHA `-layout` extraction is NOT on disk and the PDF is NOT either.**
The coordinator refetched it to a scratchpad for the provenance check. **If indentation ever decides a
question again, refetch and render — do not conclude from the plain extraction.**


### ✅ AND THE AGENT CAUGHT ITS OWN ANTECEDENT DEFECT MID-REPAIR

It first wrote *"That fifth book's stride count…"* into a new facts line and **noticed the
demonstrative pointed at a line that now came AFTER it**. It rewrote by substitution, naming CARHA
directly. ⚠️ **Adding a line can break a neighbour's antecedent** — `check_facts_antecedents.py`
returned 0 for both files afterwards.


### ✅ CLOSED — a holding tariff understated, found while auditing something else

`sources/carha.txt:3006-3015`, **Rule 63(b)**: *"A Major penalty shall be assessed to any player who
injures an opponent by 'holding'."* **Mandatory.**

⚠️ **The ` ```facts ` line at `puck_handling.md:436` already carried 63(b) correctly, with its
scope. Two SPOKEN layers did not** — Key focus `:16` (chunk 001) and Common Mistakes `:948` (chunk
058) both said *"CARHA leaves a major to the referee for holding of any kind"*, **inside an explicit
*"a minor is not the ceiling"* enumeration that credits Hockey Canada with a mandatory major and gives
CARHA only the discretionary limb.** ⚠️ **A CARHA reader was told their ceiling is discretionary when
on injury it is mandatory — the same species as commit `f624f6d`.** ✅ Repaired at both sites with the
CARHA-affiliated scope attached.


### ✅ REFUTED — the coordinator's own plan row on CARHA 54(c)

The row predicted a propagated crease-only cross-check tariff. **A census found the corpus never
states CARHA's cross-check tariff at all**, so there was nothing to repair. ✅ **And every cross-check
claim in `puck_handling.md` was verified CORRECT** — they are DEFINITION claims (force vs no force),
not tariff claims, and the definitional universal was tested against a book neither brief named
(**PWHL 60.1**, the same base definition). ⚠️ **Definition and tariff are different questions about
the same word, and a brief that conflates them sends an agent to audit the wrong sentences.**

---


## ✅ THE TTS TIER IS NOT A BLOCKER — OWNER DECISION, 24 September 2026

**The owner's instruction, verbatim, on being shown the full-corpus credit cost:**

> *"Yes but when we need it I'll upgrade my elevenlab account"*

**So the measured requirement — ~545,000 credits for 37 Style B episodes — is a COST TO BE PAID AT THE
RIGHT MOMENT, not a constraint on the plan.** ⚠️ **Do not design around Creator's 100,000/month
allowance, and do not propose a cheaper engine on price grounds** — the engine choice was made on
quality after a five-engine comparison and is not reopened by cost.

**What this does and does not unblock:**
- ✅ **P3 is no longer gated on credits.** It remains gated on **P1 and P2 progress**, which is the
  owner's stated priority order and unchanged.
- ⚠️ **Testing continues on the first chunk** until the upgrade happens — the owner's earlier
  instruction, *"for now for any testing we can just use the first chunk of the podcast that fits into
  the API quote"*, still governs.
- ⚠️ **The seam question is now LOWER stakes, and the reason is technical:** a paid tier unlocks
  **PCM**, which removes the mp3 frame-padding at every stitch join. **The seam risk measured on
  Creator is the WORST case** — if it is inaudible on mp3 it cannot appear on PCM. **So the two-chunk
  seam test is only worth its ~3,200 credits if the corpus is going to be generated on Creator.**
- ⚠️ **It does NOT unblock the ear test.** Nobody has listened to a single second of Style B output,
  and the chosen settings (Speed 1.00 / Stability 0.35 / Similarity 0.75 / Style 0.20 / Speaker boost
  ON) remain **chosen and unheard**. That is a human step and it is in
  `project/plans/PODCAST_MANUAL_STEPS.md`.

**Measured, for whoever sizes the upgrade** — from the defender exemplar and the observed billing
ratio, both in `project/podcast_style_b_script_standard.md`: **~14,740 credits per episode**, **~545,000
for 37**, worst case ~745,600 if the billing discount does not hold at volume. ⚠️ **The synthesiser's
content-hash cache means a re-run of unchanged chunks costs nothing, so the exposure is ONE-TIME, not
per-iteration.**

---


### ✅ The Major is repaired across four layers, and the economy is the model
`center.md` now leads: *"Take the angle with your feet and get inside him — **body between him and
your net, stick in the passing lane rather than on his body**, and get to the spot ahead of him
rather than stepping into him. **Take the ice, not the body.**"*
⚠️⚠️ **ONE INSTRUCTION CLOSED BOTH THE MAJOR AND MINOR 2** — *"get to the spot ahead of him rather
than stepping into him"* **is** what IIHF 101.1's *"obliged to skate around the stationary Player"*
requires. **And the quotations were NOT moved:** *"moving the 101.1 quotations up would have meant a
restructure of a 633-word paragraph, with a real chance of dropping a limb. **The caveat that changes
what a player does is now early; the tariff that does not is still late.**"* **It landed in the first
45 words — inside the sixty-word rule.**


### ✅ A BLOCK AT 8/8 COACHING FACTS, SOLVED BY THE EXEMPTION RATHER THAN BY EVICTION
⚠️ **`--near` showed the target block was AT CAP — 8/8.** **A coaching fact could not be added, so a
`Rule:` line was**, which is exempt from `MAX_COACHING_FACTS`. **Now 9 total / 8 coaching, new line
274/300 with 26 chars headroom, absent from `--near`.** **That is the documented escape hatch used
correctly for the first time this round.**


### ✅ The flagged generalisation is SAFE, and its author misdiagnosed its own DIRECTION
An agent flagged its own *"whatever your division's contact status"* as *"the permissive direction,
which is the more dangerous one."* ⚠️ **It is not.** *"It generalises an instruction that **RESTRICTS
the reader's own contact**. A reader who follows it in a checking division declines contact they were
entitled to take — a competitive cost, never a penalty or an injury. **Nothing in the new wording
grants a permission.**"*

✅ **And the claim is TRUE in every book, with primary-source endorsement nobody expected:**
**USA Hockey's Glossary names *Angling* as *"A legal defensive skill"*** (`usah.txt:5965-5968`), and
`:274-276` says *"Competitive contact is encouraged in **all age classifications**"*.
**Hockey Canada Interpretation 1 to 7.3(a)**: *"A player may steer or direct an opposing player into
the boards, without actually touching or body-checking them. **This is acceptable.**"*
⚠️⚠️ **And Hockey Canada's own body-check definition makes it a check only *"when a player extends an
arm, shoulder, or hip after angling"* — which *"with your feet"* EXCLUDES. The corpus lands on the
right side of that book's own dividing line.** **15 source files consulted, both IIHF editions.**


### ✅ CLEARED BY THE COORDINATOR
1. **C8 — the record named 8 of 33 staged files**, and Part 2's *"roughly 120 sites across 20
   documents"* **never enumerated the 20**. ⚠️ **Twelve staged files were named NOWHERE in the
   1,032-line record.** **The convention already existed** — the wave-5 section carries *"Files in
   WAVE 5's commit, each named"*. **Now added for wave 8, with the reviewer covering each file.**
2. 🔴🔴 **`CLAUDE.md`: I REPAIRED ONE STALE FIGURE AND LEFT TWO STANDING IN THE SAME SENTENCE.**
   The gate measured them: *"~1,100 words"* → **428**, *"~1,050 words"* → **290** — ⚠️ **and
   `shooting.md` is in this very diff.** **All three replaced with the pointer the sentence already
   gave.** ⚠️⚠️ **This is the FOURTH time this file has shipped a stale figure, and the first time
   the failure was "repaired one item in a list and left the rest" — which is now recorded there.**
3. 🔴 **`scripts/check_callout_flow.py` DOCUMENTED A FIX IT DID NOT PERFORM.** `renders_as_panel()`
   was defined, called **nowhere**, under a comment reading ***"CONSEQUENCE THIS FIXES: the default
   count OVER-REPORTED…"***. ⚠️ **A shared tool asserting a correction it does not apply will mislead
   the next agent.** **Now wired as `--panels` (271 panels of 1,524 marker-bearing lines), with the
   default left on `classify()` deliberately** — it answers a different question, its docstring
   records a 3× undercount from a wrong branch order, **and every figure in `project/` was measured
   with it, so changing the default would silently invalidate them.**
4. 🔴 **`sources/README.md`: MY OWN EDIT BROKE THE TABLE.** Blank lines terminated the row, dropping
   the renumbering block and the extraction traps out as loose paragraphs and **orphaning the
   source-link cell as inline text.** Merged into one cell; **verified the row's structure now
   matches HEAD's exactly (5 cells both sides — a pre-existing `grep … | sort | uniq -c` code span
   carries literal pipes).**


### ✅ AND WHAT THE GATE VERIFIED RATHER THAN ACCEPTED
It **re-derived six PWHL citations from primary text and all six held**, including the renumbering
table from the PWHL TOC. ⚠️ **It tried to REFUTE the `PWHL 84.1` citation and FAILED** — the
substitution bar is at 83.4 **and also inside 84.1**, with the three exceptions matching NHL 81.4
word for word, **and it confirmed IIHF 81.4 adds the broken-skate limb its own 82.1 omits.** **Ten
carrier tariffs spot-checked in `goaltender.md`, none lost. All three named disclosures survive.**

---


### ✅ TIER 3 — CORRECT, FLAGGED SO NOBODY "REPAIRS" THEM
- **`equipment.md:143`** — *"No other book on disk writes a jewellery rule"*, **naming all six books,
  both British documents AND the five search terms.** ⚠️ ***"The best-constructed negative in the
  sweep. Do not touch it."***
- **`center.md:806`** — *"USA Hockey and Hockey Canada were not reached for this carve-out"* —
  ⚠️ **an HONEST DISCLOSURE OF SCOPE, not a count of the world. Non-negotiable 4.**
- **`rules_primer.md:1014`** — already names the PWHL's *"Not applicable"* at 71.5. ⚠️ **The corpus
  getting the divergence trap RIGHT. The model for how to state a split.**
- **`risk_management.md:680`** — *"It is not a rule only they have."* ⚠️ **A well-made distinction
  between a sentence only two books PRINT and a rule only two books HAVE. Add a book; do not rewrite.**
- **`faceoffs.md:512`/`:1250`** — the PWHL *"renumbers… its Rule 69.2"* for **Handling Puck**, and
  *"a rule-number search alone would have missed the PWHL"*. **Both right.**


### ✅ A 299/300 LINE SPLIT RATHER THAN COMPRESSED
`on_ice_communication.md`'s facts `Rule:` line sat at **299/300**. ⚠️ **Adding the PWHL would have
EVICTED the CARHA stand-your-ground caveat** — the exact eviction failure this project records.
**It SPLIT the line in two instead**, preserving both and dropping it off `--near` entirely (block
12 facts / 1 coaching, well under 3/8/14). **The right answer, and not the obvious one.**


### ✅ THE DIFF THAT SETTLES IT — and it refuted the brief's own characterisation
NHL Rule 69 vs PWHL Rule 71, **diffed token by token with pronouns normalised**:
**69.1 ≡ 71.1, 69.2 ≡ 71.2, 69.3 ≡ 71.3, 69.4 ≡ 71.4, 69.6 ≡ 71.6, 69.7 ≡ 71.7 — identical.** Every
phrase this corpus quotes is present verbatim in the feminine.
⚠️ **My brief said Rule 71 "mirrors 69 clause for clause". THAT IS WRONG, and the divergences are
real:**

| | NHL | PWHL |
|---|---|---|
| 69.5 / **71.5** | *"Coach's Challenge – Refer to Rule 38."* | ⚠️ ***"Coach's Challenge — Not applicable."*** |
| 69.1 closing | *"may be subject to a Coach's Challenge"* | *"Central Situation Room Review"* |
| 69.7 cross-ref | *"(see Rule 63 – Delaying the Game)"* | *"(see Rule 65.7 – Awarded Goal)"* |

**The corpus records NONE of the three.**
⚠️⚠️ **AND PWHL RULE 69 IS A REAL, DIFFERENT RULE — *Handling Puck*.** So a "Rule 69" citation at the
PWHL does not merely miss; **it lands on the hand-pass rule.**
✅ **No inverse defect: the corpus nowhere puts NHL wording in the PWHL's mouth**, and all four
existing *"the PWHL renumbers 69 to 71"* statements are **CORRECT**.


### ✅ AND IT UPHELD THE THINGS THAT MATTERED MOST
**The Rule 69.3 reversal did NOT ship** — verified in all four layers, and the reviewer explained why
two readings correctly coexist: **NHL 69.3 carries BOTH limbs**, goalie-establishing (¶2) and
attacker-initiating (¶1), and the file states each with the right actor. **The honest disclosure at
`:612` survived** (*"still my reading rather than a quoted interpretation"*) with its IIHF
counterweight. **The netting distinction survived and is accurate** across NHL 67.3(iv), 85.6, 85.2
and USA Hockey Casebook 610 Situation 8. **Every tariff spot-checked held** — neck protector (IIHF
9.12 plus the British no-warning 10-minute misconduct), mask certification, privileged area, 640(f)–(h),
Hockey Canada 11.1's *"You do not get one free minor first"*, and IIHF Situation 63.29.
✅ **AND THE FRONT LAYERS STILL MAP** — Key focus is six ideas, **none numbered, none referring to the
takeaway list by count**, and all six land in the new 18. **No dangling reference to the old 21.**

⚠️ **Its declared limit is the honest half: ~20 bullets were re-ordered and it re-derived maybe eight.
*"A tariff that was already wrong at HEAD and was merely moved is still wrong."*** And it did not
render — *"`:1134` is the one I would most want to hear in isolation and I am reasoning about it from
the text, not from the SSML."*

---


### ✅ AND WHAT IT RE-VERIFIED AGAINST ME
⚠️ **The marker census reproduces EXACTLY and independently** — 87→82, 289→288, 145→144 glyphs;
48/48, 145/145, 55/55 paragraphs; unchanged in all ten other files. ⚠️ **And it was verified AT THE
SSML, not inferred:** both rendered documents emit `"Important."` on the moved-marker paragraphs.
**No taught technique in the new text is a penalty** — every contact instruction introduced is the
legal act or a prohibition on the illegal one, with **no hands/forearm/elbow-as-delivered-check
language anywhere**; the *"forearm and hip"* references are all about **receiving** board contact.
✅ **`body_contact_and_battles.md`'s demotion is fully propagated and is an IMPROVEMENT** — the
operative *"until you have it, do not hit anyone"* now **carries** the ⚠ where before it did not.

⚠️ **Its declared limits, which are the next round's scope:** it did **not re-grep the NHL or USA
Hockey sources**, so every NHL/USAH tariff in this diff is **carried, not re-verified**; it stayed
inside the diff, so a hazard the rewrite created **by propagation elsewhere** is unlooked-at — *"the
five books pointer is the visible edge of that class"*; and its omission pass worked by listing the
**old** text's caveats and hunting each, so it is **structurally blind to a hazard that was in
neither version.** It found *"never duck"* only because the brief named the pattern.

⚠️ **A brief error to record: I told it the diff held 15 content files. It holds 13** — the other two
are `project/`. **It counted rather than believing me, and said so.**

---


### ✅ AND THE INSTRUMENT THAT DOES WORK, proved on five documents
`"Important."` count **and placement**, before and after: getting_started 11→11, conditioning 6→6,
equipment 53→53, practice 8→8, team_play 28→28 — ⚠️ **with placement hits 1, 2, 5, 3, 3 also
unchanged, confirming the escalation still lands within 400 characters of each hazard string.**
⚠️ **A count can hold while an escalation migrates to the wrong sentence. Check placement too.**

⚠️ **AND A MECHANISM CONSTRAINT worth knowing before moving any marker: the inline amber pass at
`remark-corpus.mjs:729-765` requires the glyph to PRECEDE A `strong` NODE.** Marker before plain prose
gives **neither** a panel nor an inline amber run — just a bare glyph.

---


### ✅ REFUTED — everything C10 predicted about overflow

Measured in the DOM on five target pages: **no caption overflows its figure**
(`capRect.bottom > figRect.bottom` **false everywhere**); **none is clipped**; **the figure still
sits with its diagram** — worst drawing-to-figure ratio **52%**, and `oz-net-front-screen` is **59%
drawing**. ⚠️ **The *"the picture is 14% of its own figure"* extrapolation DOES NOT REPRODUCE —
nothing came close.** No horizontal body scroll. `.warn-inline` promotion verified working (four
instances, correct amber). **Dark mode does not break the hard-coded SVG fills** — the white rink
extends past every label, checked specifically at labels above the goal line.

⚠️ **So the C10 wording — *"overflow and clipping"* — was the wrong hypothesis. The rendered defect
is BULK, and it runs in BOTH directions.**


### ✅ PRIORITY 2 CONFIRMED VISUALLY — and `equipment` is worse than `core_principles` was

All nine untouched pages carry exactly one `callout-warning` among plain paragraphs in Key focus.
`off-the-ice/equipment`: `521 P · 440 P · [warning] 1330 ASIDE · 217 P · 340 P` — ⚠️ **the panel runs
a full viewport on its own, between four short plain siblings.** *"It reads exactly the way the owner
objected to, and arguably worse than `core_principles` did, because here the panel is 2.5–6× the
length of every sibling AS WELL AS being the only one in a box."*

Worst others: `body_contact_and_battles` (a 1,393-char panel **first**), `rules_primer` (**three
different block types among five siblings**).

✅ **AND THE REPAIR WORKS WHERE IT WAS APPLIED:** `core_principles` Key focus is eight plain
paragraphs, markers rendering as **inline** amber clauses mid-sentence. **p3 at 693 chars is visibly
longer but reads as the same kind of object.** *"My answer: yes, they read as siblings. I would not
touch it."*

---


### ✅ AND IT REFUSED A TEMPTING COMPRESSION THAT WOULD HAVE BEEN WRONG

> *"*'USA Hockey and Hockey Canada bar the freeze on a retrieval, not on a save'* **fits comfortably
> and is WRONG in the direction this wave keeps catching** — it asserts the books **do not** bar it
> on a save, where the original is carefully neutral (*'a different case… the carve-outs run the
> other way'*). Kept the neutral construction and paid the characters."*

⚠️ **A compression that FITS is not thereby correct.** The fit is what makes it tempting.

**One residual judgement it flagged rather than hid:** *"the USA Hockey and Hockey Canada freezing
clauses"* could at its widest be read as **every** freezing clause in those books rather than the two
the pointer covered. It accepted that because the sentence's second half carries the limiting scope
(*"outside the crease"*) and the tighter phrasing does not fit the cap. **If a reviewer disagrees,
the fix needs characters bought from elsewhere in the line.**

⚠️ **And it declared the substance UNVERIFIED:** it repaired the pointer and **took the two `Rule:`
lines above it as given** — *"the claim that the carve-outs reverse for a cover-after-a-save is
inherited, not checked, and it points at `goaltender.md`, a file another agent edited today."*
**Worth confirming the two documents still agree.**

---


### ✅ A NON-FINDING CHECKED SO NOBODY RE-FILES IT — and the distinction is the point

KT12 says *"None of USA Hockey, Hockey Canada, CARHA or the PWHL enforces a trapezoid — **the first
three never write one** and the PWHL abolishes its own in terms."*

⚠️ **Tested rather than assumed, because a zero from a LABEL is not an absence of the RULE:**
`carha.txt`, `usah.txt`, `usah_casebook.txt` and `hc.txt` all score **0** for *trapezoid*,
*restricted area* **and** *designated area* — the single `hc.txt` hit is **5.4(b), where a GOAL
JUDGE stands.**

⚠️⚠️ **So KT12's *"never write one"* is correct PRECISELY WHERE `:541`'s *"writes no"* was not.**
For those three books the word genuinely is absent; the PWHL **uses** it to abolish the thing.
***"The two sentences now say different things on purpose."*** **Do not "harmonise" them.**


### ✅ And the repair caught itself WIDENING scope

The `:603` fix first read *"so **a puck** behind your net is yours"* — ⚠️ **which widened what the
demonstrative had held.** The block is about rims and retrievals; *"a puck"* would have covered **a
puck under an opponent or being played by a forechecker.** Tightened to *"a loose puck"*, re-rendered.

⚠️ **NOTE THE MEASUREMENT: the substitution came out SHORTER than the pointer — 170/200 against
171.**

⚠️⚠️ **AND THIS LINE ONCE READ *"naming the thing has beaten pointing at it EVERY TIME it was tried
this wave"* — AN ABSOLUTE WRITTEN FROM A RUN OF SUCCESSES, AND IT WAS REFUTED WITHIN THE HOUR.**
Repairing `zone_entries.md:699`, substitution **COST 5 characters** (194 → 199). The agent
diagnosed why, and the diagnosis is the useful part:

> *"This line carried **TWO pointers at the same antecedent**, not one — *'Those clauses'* AND
> *'in both books'*. Naming the books resolves both, but two book names cost 28 chars against 13…
> **The discriminator for whether substitution is free looks like it is HOW MANY POINTERS THE LINE
> CARRIES.**"*

**So: substitution is usually free for ONE pointer and usually costs for TWO. Measure it; do not
assume it, and do not write "every time" into this file again.**

---


### ✅ AND THE REPAIR REFUTED ITS OWN FIRST DRAFT, TWICE

- ⚠️ **The FACEOFF consequence is NOT division-scoped.** Rule **6.3(e)(i)** applies in every
  division; only the line-change denial is Junior & Senior. The first draft would have implied both
  were.
- ⚠️ **The USA Hockey parallel is HALF FALSE.** It holds on the penalty (610(c) is deliberate-only)
  and **breaks on the consequence** — there is no line-change denial anywhere in that book. *"as
  under USA Hockey"* was **removed rather than repaired.**
- ⚠️ **A SOFTENING in the pre-existing text:** *"no strict over-the-glass minor"* was unscoped, but
  **HC 10.1(v)** — *"A goaltender who shoots or bats the puck directly out of the playing surface"* —
  **carries no deliberateness word.** The denial is **skater-only**. Now scoped.
- **Extras found that the brief did not carry:** Interpretation 1 Example 1 extends 6.4(a) to a
  defending-zone clear that reaches the neutral zone and goes straight out (*"No change would be
  permitted"*); Example 2, if it deflects off a teammate, *"A line change would be permitted."*

**Still open, declared:** the agent's facts line drops 6.4(a)'s *"excluding the goaltender"* for
8 characters of headroom — ⚠️ **voiced alone, a listener could carry it to their goalie.** And
`defender.md:84` is a ~3,000-character bullet covering the NHL and IIHF exhaustively that **never
mentions USA Hockey or Hockey Canada** — left deliberately (a fourth restatement is the propagation
risk) **but a reader who reads only it comes away thinking two books are the whole story.**

---


### ✅ REPAIRED — AND THE COORDINATOR'S FRAMING WAS REFUTED, WHICH SAVED THE DIAGRAM

⚠️⚠️ **THE CAPTION WAS CORRECT FOR THE PICTURE.** The brief called it *"the unsplit instruction"* and
implied a reversal. The agent checked the drawn routes first:

> *"**The drawn play is the DRIVE, not the screen.** The diagram places `LW` in his own left faceoff
> circle with a bowed skate route to the side of the net. Under the repaired split that is *'driving
> in from the wall or your circle'* — the job whose arrival **does** coincide with the release. So
> the old sentence was **correct for the picture** and wrong only in being **unscoped**… **Had I
> taken the brief's framing at face value and moved the caption to 'planted before the release', I
> would have mistaught the route the diagram actually draws.**"*

**The repair was a SCOPE CLAUSE, not a reversal.** ⚠️ **This is the third time in this wave that
leaving the wording to the agent that read the material prevented a coordinator-caused defect** —
and the brief did leave the call, deliberately, which is why it was caught. The agent also wrote a
comment above the caption recording **why it was NOT reversed**, so a future editor does not
"complete" the repair by breaking the picture.

Swept the rest of `positions.mjs`: **no other caption states arrival timing.** Build ran with the
absolute binary, exit 0, 204 diagrams; `check_absolutes` certified **408 caption/describe units**
against the fresh build.

⚠️ **`site/src/data/diagrams.json` IS MODIFIED and must be staged WITH `positions.mjs`, or the site
ships the old caption.** The build product is not optional here.

⚠️ **STILL OPEN — the other ~200 diagrams.** `systems.mjs`, `technique.mjs` and the rest were out of
scope. `check_caption_hosts.py --rule-like` is the way to find any other caption stating net-front
arrival timing.

⚠️ **AND TODAY'S REPAIR CREATED A TWO-DOCUMENT WORDING DIVERGENCE:** `winger.md:9`/`:665` say
*"rather than before it"*; `offensive_zone_play.md:526` says *"rather than **well** before it"* —
looser. The caption matched its **host**, deliberately, and reported rather than resolved it.
**Routed to the agent holding `winger.md`.** ⚠️ **The build is MANDATORY** — `check_absolutes.py` reads captions from the build product,
so a caption edit without `node site/scripts/build-diagrams.mjs` is unchecked by construction, and
**`node`/`npm` are nvm zsh FUNCTIONS whose shim run exits 127 while the wrapper reports 0.** Use
`/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/node`.

⚠️ **STANDING LESSON: A CONTENT REPAIR IS NOT PROPAGATED UNTIL THE CAPTIONS HAVE BEEN CHECKED.**
Add the caption layer to the propagation chain in `CLAUDE.md`'s "Writing content" step 5 — it
currently reads *body → facts blocks → Common Mistakes → Key Takeaways → every other document*, and
**the caption layer is not in it.**

---


### ✅ What holds — and most of it does

Verified against the books on disk: **Hockey Canada's Glossary** (`grep -ci '^ *GLOSSARY' sources/hc.txt`
= 2, `DEFINITIONS` = 0), **CARHA's Glossary** (same shape), **USA Hockey's Glossary**, and the **NHL's
Glossary of Terms**. The corpus names all four correctly.


### ✅ What passed, and two findings the reviewer RETRACTED against itself

Facts blocks render as labelled panels, not code blocks. **5,995 in-page fragment links across all 39
pages, 0 broken.** Contrast AA in both themes. No console errors, no off-origin requests, no horizontal
overflow at 396 px, theme toggle persists, search works.

⚠️ **It retracted two of its own findings after re-measuring** — a reported 200 broken anchors was a
path bug in its own script, and a "skip link stays off-screen" was measured mid-transition. **Both
retractions are in the record.** `/systems/faceoffs` 404ing without a trailing slash is expected under
`trailingSlash:'always'` plus the CloudFront rewrite and is **not** a production defect.

---


### ✅ THE FOURTEEN ARE IDENTIFIED — give the next brief this list, not "go look"

**Extracted 23 September 2026 by rendering HEAD and the tree and diffing marker-bearing paragraphs.**
⚠️ **This is the method that made the `core_principles` pass work, and a vague brief is what made an
earlier one fail** — it was sent to two paragraphs that were fine and twelve went unexamined.

**`technique/shooting.md` — 8 paragraphs:**
1. *"How height actually works — read this once, and read the caveat with it…"*
2. *"And the IIHF book argues with itself about whether a high stick needs contact too — between its
   two editions…"*
3. *"And do not read the windup and follow-through carve-out as a ceiling on what a high stick costs
   in the NHL and IIHF books…"*
4. *"And a fifth book on disk has no minor rung above the shoulders at all — the harshest floor of
   any of them — and it is an adult…"*
5. *"And note where the carve-out stops, because it stops in exactly the situation the mechanics below
   tell you to abort in…"*
6. *"And 69.4's precondition — a goalkeeper who has already played the puck — is not the edge of the
   law on standing in his way…"*
7. *"One man's word for his own proprietary data — treat with care…"* (Valiquette)
8. *"And the pre-game warm-up is inside the rules, so shooting on the opposition's goalie is not a grey
   area…"*

**`foundation/rules_primer.md` — 6 paragraphs:**
1. *"The other two books are shorter, and the fourth trigger — the whistle that arrives before
   contact…"*
2. *"Read that citation carefully if you go to look it up, because Hockey Canada's Rule 6.11(b)…"*
3. *"One more thing decides where the draw goes… which infraction gets called when two collide"*
4. *"What the book does not say is what icing does in the meantime…"*
5. *"That 'only if' is a ceiling and not a direction…"*
6. *"Cite 27.8 for the penalty and never for the dimensions…"*

⚠️ **NUMBERS 5 AND 6 IN `rules_primer.md` WERE ALREADY JUDGED AND UPHELD** by the agent that
de-marked them — *"the correction runs in the PERMISSIVE direction… a reader who misses it screens
LESS"*, and *"the marker was protecting a citation practice aimed at the next writer, not the player"*.
**Do not re-litigate them without new evidence; read the rest.**

⚠️⚠️ **DO NOT PRE-JUDGE THE OTHERS FROM THESE ONE-LINE EXCERPTS — INCLUDING FROM ANY RANKING A
COORDINATOR ADDS HERE.** Several carry penalty tiers and carve-out boundaries and several are clearly
epistemic, **but the excerpt is the first 125 characters and the verdict is in the clause the marker
actually sat on.** Render, read each whole, and apply the hurt/ejected/penalised test.

- [ ] 🔴 **`shooting.md` (−8) and `rules_primer.md` (−6) are the queue.** Together they are **14 of the
  41** and neither has had a safety pass. **Dispatch with the same method that worked on
  `core_principles`: render HEAD and the tree, diff the spoken prefixes, list the paragraphs, judge
  each.**
- [ ] **Then `center.md` (−5) and `winger.md` (−4).**

⚠️ **What the `core_principles` pass established, and it should set the expectation: TEN of its twelve
were correctly de-marked** — epistemic and tactical hedges, which is the point of the work. **One was a
critical.** **Do not expect, or force, a high restore rate.**

⚠️⚠️ **AND IT DECLINED THE TWELFTH ON PRINCIPLE, WHICH IS THE PART TO COPY.** The goaltender
reversal of *"look before the puck reaches you"* lost its escalation in three layers at once, and it
refused to restore it: *"Restoring an escalation here would mean asserting an injury hazard the
document does not claim and I did not source, which is the fabricated-warning failure."* **The
corpus's own consequence for that one is *"what costs the goal"* — performance, not injury.**
⚠️ **It flagged that its judgement flips if `positions/goaltender.md` treats losing sight of a live
puck as an injury hazard — and it deliberately did not open that file because a sibling held an
adjacent one. That check is open.**

✅ **The restore form: MID-PARAGRAPH.** `:71`'s marker went back on its final clause, so the paragraph
speaks `"Important."` again **and creates no amber panel** — the 8/8 amber ratio the owner objected to
is unchanged. `remark-corpus.mjs` has **two** glyph regexes and only the anchored `WARNING_RE` at
`:617`/`:620` builds an `<aside>`; `WARNING_TAIL_RE` at `:749` wraps an inline run.

---


### ✅ C6 CLEARED, AND THE SAFETY PASS EARNED THE BLOCK — four findings, two permissive

⚠️ **The commit gate was right to block on this, and I was wrong to think the repair was complete.**

- **A · A checking permission over-generalised from two divisions to a whole league.** The staged text
  said *"the IHUK Rules of Competition for **the NIHL** set the adult format as 'Full ice, checking'"*.
  ⚠️ **That document is titled *"National League Division 1 and 2 Rules of Competition"*** — it governs
  **NIHL 1 and NIHL 2**. Written as *"the NIHL"*, an adult in any other British competition reads a
  checking permission as theirs **by resemblance** — the exact error the brief warned about.
- **B · THE FALSE CLAIM THE COMMIT EXISTS TO REMOVE WAS STILL LIVE IN KEY FOCUS.** `:12` still read
  *"For an adult **nothing published settles it**"* — ⚠️ **in the first layer a listener hears, four
  hundred lines above the body that now contradicts it.** **Body ✓ / summary ✗ is the shape of every
  round-10 critical**, and the repair had produced it.
- **C · The women's limb gave a permission its own competition regulation narrows.** After the repair
  the document said *"non-checking"* at `:28` and *"101.1 permits bodychecking"* at `:191`. ⚠️ **The
  agent deliberately did NOT assert which is tighter** — *"non-checking"* is also the ordinary label for
  the hockey 101.1 governs, and `sources/README.md`'s *"TIGHTER than IIHF 101.1"* is an editorial
  reading it could not settle from primary text. **It wrote around the ambiguity rather than resolving
  it.**
- **D · The two IHUK tables give OPPOSITE answers at U16** — Junior *"Full ice, checking"*, WNIHL
  *"Full ice, non-checking"* — and the document carried both without saying so. **A sixteen-year-old had
  no way to tell which was hers.**

⚠️ **The new facts line carries a CAVEAT AND AN ACTION ONLY, no permission** — because a facts line is
voiced alone and *"the NIHL is checking"* heard alone is the hazard.


### ✅ BOTH EMPHASIS DEFECTS FIXED — and they had ONE cause, which is a named, greppable construct

**Parse clean in both files**, verified with the site's own `mdast-util-from-markdown`:
`faceoffs.md:1244` outer emphasis now spans 0–8261 (was 0–**1889**); `playing_without_the_puck.md:966`
spans 0–24040 (was 0–**8779**). **Literal asterisks 2 → 0 in each. Block counts unchanged.** Audio
re-rendered and **byte-identical**.

⚠️ **THE AGENT REFUTED HALF MY RESTATEMENT, AND THE CORRECTION IS THE VALUABLE PART.** I described the
second defect as *"`*English Ice Hockey Association***` plus a stray `.*`"*. **Those were downstream
symptoms.** The parser put the break **thousands of characters earlier**, and the cause was the **same
construct as the first file**:

> **An `*` preceded by `(` is RIGHT-FLANKING, so CommonMark lets it CLOSE the trailer's outer italic
> rather than open a nested one.** The nested `*"…"*` spans that work in the same paragraph are each
> preceded by a **space**, which makes them left-flanking only. ⚠️ **`(` is the whole difference.**

**Scale: 21,632 characters rendering outside their trailer across the two**, against ~1,190 in the
`how_to_watch_hockey.md` case.


### ✅ THE DOUBLED-NUMERAL CLASS IS CLOSED — 55 spoken sites repaired, corpus-wide zero verified

Two waves: 28 sites across twelve documents, then 27 across the remaining four. **I rendered all 39
documents myself afterwards: ZERO genuine doubled numerals.** The only residual render hits are
**journal `volume(issue)` citations** — `J Strength Cond Res 21(1)` speaking as *"twenty-one(one)"* —
correctly identified as a **different species** and left alone.

⚠️ **MY CENSUS PATTERN WAS NECESSARY BUT NOT SUFFICIENT, and an agent caught it.** `uk_rules.md:265`
quoted IIHF 46.2 as *"at least two (2) Players with at least one Player (1) to be penalized"* — **the
second numeral is DISPLACED one word from its spelled form**, so it renders *"at least one Player one"*
and **my adjacent-only pattern could not see it**. Repaired. **I then censused the displaced shape
source-wide: now ZERO.**


### ✅ THE PREDICTED TWO-AGENT CONTRADICTION WAS NOT THERE — and the negative is worth as much as a find

Two documents grew a §*"Leaving the bench or the box during an altercation"* the same day, written by
agents blind to each other. **Diffed side by side and voiced alone: they agree on every tension** — both
price IIHF **70.3** (bench → game misconduct) and the box tariff as separate doors; both carry that the
EIHL suspension is scoped to *"to join an altercation"* while IIHF 70.1 is wider, so **the penalty can
land where the suspension does not**; both state the direction as lighter in-game / heavier in
suspension; and **neither** asserts the unsourced *"of the game"* reading of the Casebook's 2nd-major
note. **The wrong *"minor plus a game misconduct either way"* is gone from both.**

⚠️⚠️ **THE METHODOLOGICAL LINE OF THE ROUND, and it should govern every future diff:**
***"The agreement between two documents is not evidence; it is the thing most likely to be wrong
together."*** The agent broke that symmetry on the rule numbers, the EIHL heading and the In-House
negative — **and not on the Casebook tariffs, the instigator compositions, the DOPS ladder, or the USA
Hockey and Hockey Canada halves**, which it read for internal consistency only, against no book.


### ✅ CORPUS CENSUS — sections whose topic never reaches their own Key Takeaways: THREE

Prompted by MAJ-4. ⚠️ **A word-overlap measure was useless** — 373 sections, floor 32%, inflated by
common English. **A heading-term test discriminates:** only **three** sections corpus-wide have no
heading term appearing anywhere in their document's Key Takeaways —
`team_play_and_culture.md:385` *Handling Conflict*, `offensive_zone_play.md:385` *5. Low-to-High*,
`passing_and_receiving.md:629` *Deception*.

⚠️ **A heading term is a proxy, not the thing** — a section can be well covered under different words.
**Three candidates to read, not three defects.**


### ✅ THE HIGH-STICKING EDITION CHANGE IS REAL AND THE CORPUS ALREADY HANDLED IT WELL

IIHF **2025/26**: *"A 'high stick' is one which is **carried above** the height of the opponent's
shoulders."* **2026/27**: *"one which **contacts** an opponent above the shoulders, **provided their
shoulders are at waist level or higher**"* — **identical to the NHL's sentence.** And 60.3's
double-minor limb keyed to *"carries or holds any part of their stick above the shoulders"* was
**deleted**, replaced by *"(above the height of the opponent's waist)"*.

✅ **The corpus was NOT stranded:** `shooting.md:167` already set out the edition split in full, and
every identity claim checked out — **including the three easiest to get wrong**: that 60.2 is
word-for-word in all three books, that 60.4 is identical between the IIHF editions, and that the
2026/27 60.3 parenthetical is the NHL's own wording.


### ✅ THE BOOK-FRAME SWEEP CAME BACK OVERWHELMINGLY CLEAN — and that is the finding

**28 sites read in `center.md`, 6 in `neutral_zone_systems.md`. Changed 3. Correctly scoped as-is: 31.**
⚠️ **Outcome "actually wrong, changes what a reader should do" DID NOT OCCUR ONCE.** In every case
tested, the absent book **agrees**.

⚠️ **Two near-misses that would each have produced a FALSE finding, and both are method lessons:**
1. **Hockey Canada's Rule 1.6(a) does NOT say the line is crease** — it carries the same silent wording
   as the NHL. The claim rests **entirely on the Glossary entry**. *"Had I stopped at the rule text I
   would have reported the corpus wrong."*
2. A flattened search for `linesofthecrease` returned **0 in CARHA** — because CARHA writes *"considered
   **as** part of the crease**s**"*, plural, with an extra word. ⚠️ **Only a looser token caught it. A
   tighter search would have manufactured a "CARHA is silent" finding.**

⚠️ **`neutral_zone_systems.md` got ZERO edits, deliberately**, and the reasoning is worth keeping: the
agent **measured the spoken distance** from each charging claim to the nearest `CARHA` utterance —
**8,447 characters at the closest** — and concluded no listener can collide them. **Five widenings for
no behavioural change were declined.**

⚠️ **Do not let a future sweep conflate two different "fours":** `center.md:683` and `:787` say *"none of
the four regulations"*, meaning **the four IHUK Rules of Competition**, not the four rulebooks.


### ✅ CLOSED — the EIHL Casebook amends NEITHER Rule 44 NOR Rule 50

Established three ways, not by rule-number grep: the **contents list and body pass enumerated in full**
(it writes 5, 6, 7, 9, 10, 11, 12, 28, 30, 36, 37, 38, 41, 42 Charging, 42 Elbowing *(its own typo for
45)*, 46, 47, 63, 64, 69, 77, 84, 86 — **no 44, no 50**); a **concept sweep** (`knee` 0, `clip` 0,
`lowhit` 0, `thigh` 0); and ⚠️ **a CONTROL PHRASE validating the cleaning first** — see the new form-feed
trap in `sources/README.md`.

**So IIHF 44 and 50 stand for an EIHL reader**, and both are **character-identical across the two IIHF
editions**, so the British edition question does not bite on either foul. Every British competition
document was searched and is silent; the only `clip` hits are **helmet J-clips**.

⚠️ **A positive finding that runs TOWARD the corpus:** **IIHF Situation Handbook, Situation 44.1** —
identical in both editions — rules that a player *"skating backwards and lowers the body in an attempt
to make a hip check… so low that contact is in the area of A16's knees"* is **clipping**. ⚠️ **A hip
check — a technique a reader may believe is traditional — is the illustration the rule is written
against**, in a document whose §5 and §7 both teach getting low. **Now in the document; needs
`safety-reviewer`.** Rule 50 prints *"No situation."* — an explicitly published absence, now stated
rather than left as silence.


### ✅ C6/C11 CLEARED — and the safety pass found the contradiction it was sent to find

**The load-bearing one (M1):** `body_contact_and_battles.md:496` and Key Takeaway 5 stated the contact
envelope as **SUFFICIENT** — *"a check that satisfies it does not offend the other three"* — while the
new §5 paragraph says the opposite in terms: *"under that book a check that satisfies every other part
of the envelope is still kneeing if your knee is what arrives."*

⚠️ **A reader who plays the envelope was told by one layer that they are inside a standard offending no
book, and by another that Hockey Canada ejects them.** Fixed with a limiting clause in both.

**M2:** the new kneeing `Rule:` line **carried the tariff but never the definition** — voiced alone it
said what kneeing *costs* and never what it *is*, and *"its own foul"* pointed at a contrast the
listener heard in a separate `<p>`. Fixed by substitution at 290/300 chars, **without spending the
block's last free line** (it was 13/14, 6/8 coaching).

✅ **Over-statement check passed:** the false *"no book prices at a bare minor"* framing — the
coordinator's brief error — **did not ship anywhere.** The text says *"two of the books write no bare
minor"* and names the NHL and IIHF as starting at one.

✅ **A corpus-wide layer test on "get low" found no clipping exposure**: twelve facts-layer hits, every
one an own-stance instruction, and §9's contact instruction is at **armpit** height, above the hips in
every book.

⚠️ **The pass's own caveat, which I am carrying rather than burying:** *"M1's insertions are a scope
limitation on a sufficiency claim, which is exactly the species of sentence this document has got wrong
before. They need another pair of eyes."*



### ✅ THE MAGNITUDE SWEEP WAS RUN AS A CLASS — one genuine find, and an EXEMPLAR to repair toward

Run 22 September over **headings + the five fixed summary layers + the facts layer**, corpus-wide, for
proportion/ranking/causal-magnitude language. **75 hits.**

⚠️ **MOST ARE FALSE POSITIVES AND THE PATTERN IS WORTH KNOWING BEFORE ANYONE RE-RUNS THIS.** The
dominant shape is **"the worst case is X"** — a *scoped consequence* claim, not a magnitude, and
correct. The next commonest is a **correctly attributed** superlative (*"USA Hockey calls keeping your
head up 'the single most important thing'"* — attributed, and the corpus elsewhere scopes it explicitly
as ranking the habit rather than the moment). **Do not sweep this pattern.**

**🔴 THE ONE GENUINE FIND — `off-the-ice/equipment.md:401`:**
> `### The three coverage gaps that cause the most injuries`

**A bare unsourced causal ranking, in a HEADING, voiced alone with a 700 ms break either side** — the
same shape as the two repaired in `body_contact_and_battles.md` today. ⚠️ **It has two echoes in
`Check yourself` (`:753`, `:755`), one of which is the section pointer**, so a repair must retarget
both and the anchor. **Nothing found in the section sources a ranking of gaps by injuries caused.**

**✅ THE EXEMPLAR — `systems/defending_the_rush.md`.** Its *"five causes account for nearly all of
them"* scores on the pattern and is **correct**, because it carries the disclosure **in all four
layers**: *"coaching emphasis, not a counted ranking, because no public data classifies odd-man rushes
by the play that created them."* ⚠️ **This is what the equipment heading should be repaired TOWARD** —
the corpus already knows how to state a ranking honestly; one document just did not.

**Still open from earlier today:** `body_contact_and_battles.md:1716` — *"Assuming the four worst
fouls…"*, with nothing in the document ranking fouls by severity.

- [x] ✅ **DONE — `equipment.md:401`**, by the `content-reviewer` dispatched to that file. The heading is
      now `### Three gaps between pieces of kit, and how to close each one`, with a labelling lead-in
      carrying the disclosure (*"fitting-guide emphasis rather than a counted ranking"*) instead of the
      ranking, and **both `Check yourself` echoes retargeted**. ⚠️ **That agent also found TWO MORE
      instances of the same defect in the same section** that this row never named — `:405`'s *"the most
      common way"* and Key Takeaway 6's *"The three gaps that hurt people"*.
- [x] ✅ **DONE — `body_contact_and_battles.md:1716`**, by the `rules-verifier` dispatched for the EIHL
      clipping and kneeing work. *"Assuming the **four worst fouls** are…"* → the four named outright,
      with **every citation in the bullet untouched**. `grep -c 'four worst fouls'`: **1 at HEAD, 0
      staged.**

⚠️⚠️ **THE PARAGRAPH BELOW WAS TRUE WHEN WRITTEN AND FALSE WITHIN THE HOUR, AND IT SHIPPED AS FACT INTO
A PENDING COMMIT.** It says neither file was touched. **Both were** — the coordinator wrote this note
while both files were staged and it expected not to touch them, **then dispatched agents into those very
files** and never came back to correct it. **The commit gate caught it by reading the index rather than
the plan.**

⚠️ **This is the *"Handed to `safety-reviewer`"* defect WITH THE SIGN REVERSED.** Last pass the plan
recorded an **intention as an action**; this pass it recorded an **action as a non-action**, and left
both rows open. ⚠️ **Committing it would have written a false statement into the defect record and
guaranteed the next round re-dispatched finished work** — the *"rediscovered rather than read"* failure
the one-plan rule exists to prevent.

⚠️ **The lesson is not "be careful". It is that a plan note asserting what WILL or WILL NOT happen goes
stale the moment the next dispatch is made, and nothing connects the two edits.** A row should record
what IS, and be re-read before the gate.

**Superseded text, kept because the record is the point:** *"Both are in files that were STAGED for the
pending commit, so neither was touched — editing a
staged file while the commit gate audits it creates exactly the index/tree divergence no checker and no
hook can see. **Dispatch these after the commit lands.**



### ✅ NARROWED — the `equipment.md` sticks bullet is VERIFIED

The standing row says two-thirds of that file is unexamined and *"the sticks bullet alone asserts four
different shaft caps across four books and not one has been verified."* **A sample verified all four
verbatim:** HC 3.3(b) 1.60 m / 63 in., **no height exception**; NHL 10.1 63″ with an exception to 65″
for *"players 6'6" tall or more"* by written approval; IIHF 10.1 1.63 m, exception 1.65 m for *"Players
2.0m tall or more"*; USAH 301(b) a flat 65″, no condition. **The derived claim that a 64-inch stick is
legal under the IIHF and USA Hockey and illegal under Hockey Canada and — without approval — the NHL
holds arithmetically.**

⚠️ **This licenses NO inference about the rest**: skates, sharpening, flex, curve, lie, goalie gear,
certification, maintenance and prices remain unexamined after three passes.


### ✅ CLOSED — the faceoff table is no longer the SOLE CARRIER of anything

Repaired by **voicing the substance inline**, not by shrinking the table. ⚠️ **Headroom deliberately
left at ZERO rows** — buying headroom means shortening a cell, which is the round-58 failure. **What
changed is the COST of the drop**, confirmed in the agent's own SSML render: six previously table-only
phrases now reach a listener in prose. **The table is still one row from dropping and is no longer the
only place anything lives.**

⚠️ **One correction to the earlier reviewer's list:** `Officials erred` was **half** voiced — the icing
limb was already at `:362`; only the offside limb was table-only.

**The finding that mattered most — a second sentence neither book's row had room for.** NHL 80.2 and
IIHF 80.2 both continue: *"If the attacking team is at fault and the play is stopped while the puck is
in the attacking zone, the ensuing face-off must be **moved to the nearest face-off spot in the neutral
zone**."* ⚠️ **A reader batting a puck down above the shoulders in the offensive zone LOSES THE ZONE
OUTRIGHT**, and neither the table nor any other layer said so.

**Two Hockey Canada divergences that were in NO layer at all:**
- ⚠️ **HC 6.3(b) decides the two-violation case on a DIFFERENT TEST** — *"the face-off spot in the same
  zone that is nearest to where stoppage of play occurred, excluding centre ice"*: **nearest spot, not
  least territorial advantage.**
- **HC 6.3(a) DOES write the icing-error rule** (centre ice). The corpus had attributed that remedy to
  NHL/IIHF/USA Hockey only.

✅ **A negative attacked rather than assumed:** the offside-error remedy really is USA Hockey's alone —
flattened searches for `erredincalling`, `shallhaveerred`, `erredinstoppingplay` and two more across
four books return only the icing clause; Hockey Canada's eight `erred` hits are all
`deferred`/`referred`. **The search scope was written into the document so the next reader sees the
shape of the hole.**

⚠️ **Deliberately NOT resolved:** neither book defines *"least territorial advantage"*. Voiced as a
plain-English gloss and **labelled as a reading of the words, not as either book's ruling.**


### ✅ CLOSED — offside is now a SIX-book comparison, CARHA marked silent

All six re-derived. **PWHL 85.1 carries the NHL's plane sentence verbatim** plus two 2025-26
clarifications the IIHF book lacks. **CARHA 72(c) Note 1 uses *"own side"* and never defines it;
`grep -ni "plane" carha.txt` returns ZERO for the whole book.** Reported as **silence — not resolved
into a permission or a prohibition**, in all four places touched.

⚠️ **The agent caught its own contradiction by reading the block whole rather than trusting its hunk:**
its first Key focus wording put a six-book bullet under a lead-in reading *"Four habits then hold under
all four books"* — **voiced alone, a listener would hear "four books" and then six.** Reworded so the
four-book lead-in stays true and the extra books are added rather than substituted.


### ✅ FOUR DISCLOSURES TESTED AND ALL UPHELD

Against the standing worry that the corpus's absence-claims go untested: Rowland's abstract *"carries
none of these numbers"* (**zero statistics — confirmed**); the USA Hockey handbook *"states no method,
no number of players and no definition of a puck touch"* (`video` 0, `tracked` 0, `sample` 0,
`methodolog` 0 in the 44 KB extraction); Czyż *"only its abstract could be obtained"* (*"This is a
preview of subscription content"*); and the rec-league page described as *"promoting a youth roller
programme it is trying to launch"* (*"we're working to launch"*, *"We need your support"*).

⚠️ **This is the second systematic disclosure test to come back overwhelmingly clean.** The corpus's
absence-claims are in good shape; **the rotten subset remains the one whose question has since been
answered ELSEWHERE IN THIS REPOSITORY and nobody propagated it.**



### ✅ REFUTED — the `check_layer_echo` docstring's CRT6 example is STALE as a defect claim

The docstring cites `conditioning_and_recovery.md` Overview carrying **six of CRT6's ten** red flags
against Key focus's ten. **Counted today: Key focus 10 · Overview 6 · body 10 · Common Mistakes complete
for what it claims · Key Takeaways 10.**

⚠️ **The Overview six is a LABELLED ABRIDGEMENT WITH A POINTER, not a truncation** — it names its own
denominator (*"Those are six of CRT6's ten — the six least likely to look like an emergency at the
rink"*) and points at the layer holding all ten. **Do not "repair" it.**

- [ ] Update the docstring: the measurement is accurate, the finding is not. Between waves, with the
      `--near` fix.



### ✅ CLOSED — the IHUK Coaching Regulations are on disk, and the answer is a NEGATIVE

**Two separate agents named this document's absence as the highest-value thing they could not reach.**
Fetched 22 September 2026 from the **`2026/09`** path (the `2026/08` one also returns 200 with an older
358,330-byte revision). Now `sources/ihuk_coaching_regs.txt` + `_layout`, 15pp, 5.0% text ratio, real
text layer, registered in `fetch_sources.sh` and `sources/README.md`.

**What it settles.** §9 is scoped in terms to *"junior and senior teams, including **practices**, games,
camps, and hockey schools"*. §9.3 makes a neck guard mandatory for the **coach's own** on-ice PPE. The
coach's duty toward **players** reads *"Coaches must ensure players wear approved **helmets and face
protection, sticks, and gloves**"*.

⚠️ **THE NECK GUARD IS ABSENT FROM THE PLAYER LIST** — in the one document whose scope explicitly
reaches training. **So it does NOT extend the player mandate to practice. The corpus's cautious
training disclosure STANDS, and is now a SEARCHED NEGATIVE rather than a gap.**

⚠️ **The asymmetry is the finding. Do not let anyone write it up as a duty the document does not
create, and do not let anyone read it as a permission.** Under safety review 22 Sep.

⚠️ **Side effect: `ls sources/*.txt` is now 42.** Two stale counts were corrected — `CLAUDE.md` said
*"the directory holds thirty-eight"* and `.claude/agents/rules-verifier.md` asserted 40 as current.
**Both now point at the command instead of carrying a figure.**


### ✅ SETTLED — the podcast chunk count is NOT load-bearing

`reading_ice_hockey_diagrams.md` went **11 → 12 chunks** (20,645 → 21,205 billed chars) from new prose
defining the `pivot` glyph. Pure **length** split — `md_to_speech.py:58` sets `MAX_BILLED_CHARS = 2800`
and the Overview chunk was already at the ceiling; no heading was promoted.

**Checked before deciding:** `podcast_queue.py` never mentions chunks, and neither does
`PODCAST_MANUAL_STEPS.md`. The queue derives from `structure.json` page order, one episode per
document. **Nothing depends on the count, so the pivot sentence stays.** The alternative was re-opening
an undefined symbol in the notation key.


### ✅ THE FACTS-LAYER TRAILER GAPS — 9 documents, and the remedy was NEVER a new URL

⭐⭐ **THE BEST DECISION IN THE REPORT WAS A REFUSAL TO WRITE A FILE.** The agent declined to add rows
to `project/verification/link_baseline.tsv`: *"I fetched zero external URLs this session… I added no
URL to any file and observed no URL's status, so **writing rows there would have been a FABRICATED
OBSERVATION**."* **That is non-negotiable 1 applied to a verification record rather than to prose.**

⭐ **AND THE SHAPE OF THE FIX WAS NOT WHAT THE CENSUS IMPLIED:** *"In EVERY case the BOOK was already
listed with a live URL; what was missing was the PROVISION. So the remedy was **never a new trailer
entry** — it was extending the existing book entry with the rule number and its operative wording."*
**No URL was invented because none was needed.** **≈5.0 KB added across nine trailers, appended to
entries a reader already reaches rather than scattered.**

⭐ **The census's hint column held on all 12 sites** — *"no `IIHF 407(c)`-style mis-assignment in my
set"* — **and ZERO parse artefacts against a predicted ~1 in 12.** ⚠️ **But it warned against
extrapolating: *"my hit rate is a sample of ONE agent's files and should not be extrapolated to the
rest"* — 36 HARD sites remain unexamined.**
⚠️ **TWO SITES WERE RICHER THAN THE CENSUS RECORDED:** `breakouts.md:814` cites **NHL 15.3 and its
list of Rules 47, 58, 60, 62**, not just "NHL 47"; and `puck_handling.md:430` contrasts **IIHF 21.1
against NHL 21.1** — **and NHL 21.1 was ALSO absent from that trailer, which the census missed.**
✅ **One SOFT case correctly left nearly alone** (+67 chars): *"the reader test was already satisfied
— 15.3 itself names the four rules."*
✅ **Both census false positives upheld**, and `neutral_zone_systems.md`'s trailer **already carried
USA Hockey 630(a) verbatim**, so only 614(c) was genuinely open there.

#### ✅ COORDINATOR CLOSED THE ONE CHECK IT COULD NOT — the cross-trailer contradiction

Its declared gap: *"Four of my nine documents now describe USA Hockey 614(c) or 636(f) in their own
words… **I did not diff the four descriptions against each other, and two individually correct
trailer sentences can disagree.** That is the check I could not close."*
✅ **RUN THIS ROUND. 614(c) appears across 19 documents and 636(f) across 14. Every description
agrees in substance** — 614(c) consistently bars a goalie freezing outside the *"goalkeeper's
privileged"* area or behind the goal line with the body clear of the crease; 636(f) consistently
attaches **no icing condition** to a **sixty-second** time-out. **Zero sentences assert the
opposite of another. NO CONTRADICTION.**
- [ ] ⚠️ **ONE INCOMPLETENESS FOUND WHILE CHECKING, and it is the floor/ceiling shape again:
      *"636(f) gives NO TIMEOUT AT ALL IN A CURFEW GAME"* is carried by only THREE of the ~10 sites
      that state 636(f)'s no-icing-condition.** **The rest state the permission without the
      exception.** **Not a contradiction — a limb that reached three sites and stopped.**

#### 🟠 Two glosses routed, neither repaired

- [ ] **`passing_and_receiving.md:267` writes *"require[s] the BLADE to be in contact with the
      ice"*. USA Hockey **630(a) says *"SKATE contact"***. **Hockey Canada 6.11 is the book that
      words it as contact with the ice surface.** ⚠️ ***"The gloss is defensible but it is a gloss,
      and the facts layer is voiced alone."***
- [ ] **`passing_and_receiving.md:268` describes icing without NHL 81.1's *"equal or superior in
      numerical strength"* qualifier** — ⚠️ **a short-handed team may ice freely.** **The line's job
      is contrast with off-side so it may be deliberate scope; the qualifier is now in the trailer.**
- [ ] ⚠️ **Editions not re-checked: every quotation was verified against USA Hockey 2025-29, NHL
      2025-26 and IIHF 2025/26 on disk. *"I did NOT re-check any of these provisions against the
      IIHF 2026/27 rulebook or the Hockey Canada 2026-2028 book, and my added trailer text claims no
      such check."***



**Consolidated again 22 September 2026.** A long parallel round appended closed findings, lessons and
brief-error records straight into this file as they landed, which is the defect this file's own rule
exists to prevent. **117 closed sections moved out** to
[`plan_archive_2026-09-22_consolidation.md`](../reviews/plan_archive_2026-09-22_consolidation.md),
verbatim. A section stayed here only if it carries an unchecked row or its heading signals open work.
**Nothing was deleted, and no open row was touched.**


### ✅ FIXED — the Hockey Canada undercount in the owner document, and what checking it turned up

`body_contact_and_battles.md:750` said Rule 7.5 *"lists the **two** scenarios… and **both** are about
a player who has turned or bent."* **The rule lists four**, introduced as *"situations such as the
following"*, and **items (iii) and (iv) are about the CHECKER's action** — an elbow or forearm driven
into a back, feet kicked or pulled out — **with no turn or bend by the victim at all.** Repaired: the
passage now names all four, says *"four is a floor, not a count"*, separates the two kinds, and ends
*"Do not read the rule as reaching only the player who has put themself in a bad position."* Rule 7.5
added inline. Every quoted fragment verbatim from `sources/hc.txt`.

⚠️ **This is the OWNER document.** Five documents route readers here rather than restating the list —
`passing_and_receiving.md`, `switching_positions.md`, `skating.md`, `winger.md`, `zone_entries.md`.
**Nothing in a sibling is now wrong, but every one of them has been pointing readers at a passage that
made Hockey Canada's rule sound narrower than it is, for as long as the sentence existed.** ⚠️ **Any
agent that read `:750` today and carried "both are about a player who has turned or bent" into a brief
carried a false premise from the corpus itself.**

⚠️⚠️ **THE AGENT'S OWN NEGATIVE WAS FALSE, AND THE COORDINATOR CAUGHT IT — the same class, one layer
up.** It reported *"Items iii and iv appear **nowhere else in `content/`** — the corpus had never
carried them."* ⚠️ **`rules_primer.md:451` has carried item (iii) all along**: *"Its Rule 7.5 also
names a player who 'swings the elbow and forearm into the opponent's back with the intent of throwing
the opponent into the boards' among the situations referees are told to enforce strictly."*

**So the corpus contained the refutation of its own owner document's framing, in a sibling, and
nobody noticed.** That is this project's standing lesson — *the answer was already written down
somewhere in this repository* — arriving for the third time today, and this time inside a repair
agent's report rather than in the corpus.

- [ ] **Check the other three books for enumerated scenario lists this file may mischaracterise the
      same way.** Only Hockey Canada 7.5 was verified. **USA Hockey 608, NHL 43 and IIHF 43 were not
      re-read for scenario lists**, and the same defect could sit elsewhere in this file unexamined.
- [ ] **Check the five routing documents' POINTER TEXT, not just their claims.** The repair grepped
      for the defective framing, **not for sentences summarising what a reader will find here.** ⚠️ **A
      sibling saying "see the owner for the turn-and-bend cases" would not match that grep and would
      now be narrower than the passage it points at.**


### ✅ `man/zone line` — removed at source rather than defined

**Confirmed by rendering**, not inferred: the renderer speaks it as *"the **man or zone** line"*, in
its own `<p>` with a 300 ms break either side, so *"the man"* and *"the zone line"* are genuinely
available as two readings.

⚠️ **The agent declined to add a glossary entry and substituted the term away instead** — *"naming
the thing is shorter than pointing at it, and it removes the speech ambiguity at source instead of
repairing it downstream."* Its second reason is the one to keep: **a `Man/zone line` entry would be a
SECOND definition site for something the `Hybrid` entry already defines, and the two would have to be
kept word-for-word in step forever.**

- [ ] **`man/zone line` now survives only in `winger.md` ×3.** ⚠️ **Each use is immediately
      enumerated, which is what makes it safe — so if anyone ever shortens one of those three
      sentences, the ambiguity returns with nothing to catch it.** A plan row, not an edit.


### ✅ Settled from primary text, not handed on

The Hockey Canada *"player"* definition question was **settled** rather than deferred, and the same
answer found for CARHA, **whose glossary nobody had reached.** ⚠️ **The residual is honestly
recorded: neither glossary's proviso is tested by a case, no HC or CARHA casebook is on disk, and
`sources/usah_casebook.txt` was not searched.** The corpus now tells a goaltender he is **inside** the
rule — *"the reading that does not get him penalised by surprise."*

- [ ] ⚠️ **`hockey-iq/risk_management.md` is the next file to check** — `special_teams.md:719`
      explicitly defers to it as carrying these books in full, and the same skater/goaltender
      flattening could sit there, in `positions/goaltender.md` or in `rules_primer.md`. **Not checked.**
- [ ] **Three pre-existing `check_facts_antecedents` hits in `special_teams.md`**, handed on and not
      acted on: `:262` (*"**That ranking**…"*), `:708` (*"**That exclusion** is not a permission for
      your goalie…"* — the preceding line is about smothering, so voiced alone it points at nothing),
      `:1056` (*"**That area** is not the crease…"*).
- [ ] **`(63.2(iii)/(III))` renders as *"sixty-three point two, clause three or clause three"*** —
      pre-existing, cosmetic, confusing aloud.


### ✅ The CRT6 repair — accepted in principle, and improved on its own brief

**Both recommendations accepted, one specific rejected with better reasoning.** The agent kept the two
least-guessable flags (**bilateral weakness/numbness**, **increasingly restless/agitated/combative**)
and dropped **loss of consciousness** — but **rejected dropping *repeated vomiting*, dropping
*seizure* instead**: a convulsing player produces an ambulance call from any bystander, whereas *"the
common lay reading of vomiting after a head knock is 'he's concussed, take him home', which is the
wrong action, and the discriminator — **repeated** — is the part people do not know."*

The footnote became a **route a listener can act on**: *"the Concussion section of this document gives
all ten in CRT6's own wording"* — no *"above"*, no *"below"*. And it added *"not the six that matter
most"*, because **a listener hearing six of ten will otherwise assume they are the severe six.**

- [ ] ⚠️ **NEW ROW, raised by that agent:** if `skating.md`, `body_contact_and_battles.md` or
      `uk_rules.md` carries its own partial red-flag précis, **it may now name a DIFFERENT six** — and
      a listener moving between episodes would hear two selections with no explanation. **A layer
      test across every document mentioning red flags has not been run.**
- [ ] **The guessability argument is unmeasured judgement** — the agent's and the reviewer's alike.
      *"Nothing on disk ranks concussion red flags by lay recognisability."* **If such evidence
      exists, the selection should be redone against it rather than against two agents' intuitions.**


### ✅ THE REVERSE CROSS-REFERENCE CENSUS — 108 asymmetries, and ALMOST ALL ARE CORRECT

⚠️ **THE BRIEF'S MOTIVATING EXAMPLE WAS ALREADY CLOSED — IN THE TREE ONLY.** `defender.md:5` now
carries the Forechecking Systems link, **added uncommitted today**. ⚠️ **A commit that does not stage
`defender.md` ships the corpus with the gap still open.** **Staging note, not a finding.**

⭐ **THE HEADLINE IS A NEGATIVE, AND IT IS THE OPPOSITE OF THE OUTBOUND AUDIT: ELEVEN INBOUND
POINTERS AT `forechecking_systems.md` WERE OPENED AT BOTH ENDS AND ALL ELEVEN HOLD** — including
`core_principles.md:57`, whose wording matches **including the qualification** (*"a recommendation
for your league rather than a claim about what most teams play"*).
**Census: 22 outbound / 27 inbound / 16 reciprocated / 11 unreturned — and it judges exactly ONE of
the eleven a gap**, giving a per-document reason for the other ten (entry documents route outward by
design; `switching_positions` is an aggregator whose return direction *"would put 18 links in 18
headers"*; two are one-clause asides carrying no shared claim).

#### 🟠 M1 — 30 documents embed diagrams and do not link the document that teaches the symbol key

`grep -rl '!\[\](diagram:' content/` → **32**; `grep -rl 'reading_ice_hockey_diagrams.md' content/`
→ **2**, neither a systems or positions document. ⚠️ **And the key document says in terms that
*"that pairing is this guide's own convention, not a universal one"*** — circle/triangle,
open/solid. **A reader landing from search meets a glyph with no route to the key and no warning the
convention is house-specific.** **No Astro component supplies the link** — verified, the only
`site/src/` hits are code comments and `structure.json`.
- [ ] ⚠️ **`site-reviewer` COULD MAKE THIS A NON-FINDING** if the rendered nav already gives a route.
      **Ask before dispatching content edits.** Suggested scope if real: the eight **multi-player
      system** documents, **not** the technique documents whose diagrams are single-player mechanics.
- [ ] ⚠️ **AND IF IT IS ACTED ON, A SECOND PROBLEM SURFACES:** `reading_ice_hockey_diagrams.md` has
      **no body sections at all** between `## Overview` (`:28`) and `## Common Mistakes` (`:224`) —
      **a ~200-line Overview**, unreviewed this round. **If 29 documents start routing readers there,
      its state becomes load-bearing.**

#### 🟠 M2 — a one-way pair, and the shared term is VOICED UNDEFINED

`puck_support_and_spacing.md` links `forechecking_systems.md` **three times, all load-bearing**; the
return is **zero**. ⚠️ **The clean control: of the two documents `:382` names as co-stating the
pressure-count rule, `forechecking_systems.md` links back to one and not the other.**
⚠️ **The consequence is in the layer that matters:** `forechecking_systems.md:60` is a `Goal:` line
**voiced alone** using *"released above the puck"* — **and the term is undefined anywhere in that
document** (`:60` and `:70` only, neither defining it). **It is defined at
`puck_support_and_spacing.md:259` and in the glossary — and a listener cannot follow a
cross-reference.** ⚠️ **Run `check_facts.py --near` on that block first; the census did not.**

#### 🟠 M3 — the only systems document omitting `defensive_zone_coverage.md`, and it omits it AT THE SEAM

`neutral_zone_systems.md` links **every** systems sibling except DZC; DZC links it **six times**.
⚠️ **The omission is specific, not a document that simply does not cross-link** — the same section
correctly points at `defending_the_rush.md`, `defender.md` and `forechecking_systems.md`.
**The seam: `:353-355` instructs *"Take the late man. A trailing attacker arriving unmarked into the
high slot…"* — and the high slot and who covers it are DZC's owned material.** ⚠️ **Do NOT
reciprocate the other five inbound links — those are DZC borrowing from NZS, which is the correct
one-way shape.**

#### ⭐ A clean re-verification, and two ownership spot-checks that HELD

✅ **Corpus-wide, there is NOT A SINGLE Markdown cross-reference inside any ` ```facts ` block** —
every facts line extracted from all 39 documents, tested for `](*.md`: **zero hits.**
**Seven facts lines name a sibling in prose without a link; six judged correct** because each states
its substance first. ⚠️ **The one flagged is `defending_the_rush.md:45`** — *"decide your posture on
the way in. See Body Contact and Battles"* — **where the substance is thin and the SAFETY content is
behind a pointer a listener cannot follow.** `safety-reviewer`.
**D8 spot-checks, both held:** the goal-location figures carry the **2,498-goals-with-coordinates**
filter at **all three** borrowing sites; and the tight-gap figure — ⚠️ **the one the census expected
to be wrong** — is right, with `zone_entries.md:798` explicitly saying it *"is not part of that owned
scale"* and its facts line carrying the same attribution.

#### ⚠️ The blind spot it named, and it is structural

- [ ] ⚠️⚠️ **A PAIR OF DOCUMENTS SHARING LOAD-BEARING MATERIAL WHERE *NEITHER* LINKS THE OTHER IS
      INVISIBLE TO A LINK GRAPH BY CONSTRUCTION.** *"There is no asymmetry to detect, no pointer to
      test, and no string to grep… the only thing that finds it is reading two documents side by
      side and noticing they teach the same thing."* **M2 was findable only because one side happened
      to say out loud that it shares the vocabulary.**
- [ ] ⚠️ **It judged "shared load-bearing material" from 6 documents read as prose out of 39.**
      *"A pair where the shared material sits in a section I never opened scores as 'correct
      asymmetry' in my table, and that is a guess dressed as a judgement. The table's REASONS are
      checkable; its COMPLETENESS is not."*
- [ ] ⚠️ **The inbound-pointer test was run on ONE document.** *"The base rate is unknown and my
      sample is not random — I chose the pointers that named a specific claim, which are exactly the
      ones an author was most likely to have checked."*
- [ ] **Summary layers of 38 documents unread this round** — *"round 10's criticals all lived in
      Common Mistakes and Key Takeaways."*
- [ ] **`forechecking_systems.md:954` — the corpus's ONLY forward *"Takeaway N"* pointer in spoken
      prose.** **Takeaway 8 does hold it**, so nothing is stranded for a linear reader — ⚠️ **but if
      the podcast's "if you only remember N things" segment ever takes a subset, it dangles.**
      **Naming the substance instead removes the dependency.** Flag, not a defect.


### ✅ THE TIER CEILINGS — repaired, and MY BRIEF WOULD HAVE SHIPPED A HALF-RULE

⚠️⚠️ **MY SLASHING CITATIONS WERE NHL-ONLY, AND THE CORPUS BULLET IS WRITTEN FOR "NHL AND IIHF"
JOINTLY. THE TWO BOOKS DIVERGE.** **Coordinator-verified this round:**

| | NHL | IIHF 2026/27 |
|---|---|---|
| **61.3** | Major | **MAJOR PENALTY AND GAME MISCONDUCT PENALTY** |
| **61.4** | **MATCH** | Penalty shot |
| **61.5** | Game misconduct | Awarded goal |

⚠️ **And `match penalty` occurs ZERO times in the IIHF's whole Rule 61.** **The IIHF writes no
injury-triggered mandatory major and no match penalty for slashing at all** — identical across the
2025/26, v1.1 and 2026/27 extractions.
⚠️⚠️ ***"Pasting the brief's NHL text under 'NHL and IIHF' would have shipped a HALF-RULE to every
British reader — the exact failure the brief itself warned about in the other direction."***
**The agent caught it by reading both books rather than accepting the citation list.**

#### ⭐ It removed the dependency rather than measuring it

**Three agents today have named the same untested assumption — whether a listener RETAINS a scoping
line while the next is spoken.** ⚠️ **This one designed around it: the new `center.md:90` `Rule:`
line *"names its own scope, so it does not rely on `:89` being retained, which is the census's
declared open question about `defender.md:228`."*** ***"I removed the dependency rather than
measuring it — so the question is still open for the census's other acquittals."***

#### ⭐ And it declined to fill the facts layer just because it could

**`goaltender.md`'s slashing floor lived ONLY in a Common Mistakes bullet, so the ceiling was paired
there.** ***"I did NOT manufacture a facts line stating a price no facts line stated"*** — and the
adjacent block already carries its own ceiling at 294/300.
⚠️ **It also left the MATCH penalties out of `center.md:90` deliberately:** *"including them puts it
at 298/300 and ONE EDIT FROM EVICTION. They are carried at `:638`, `:678`, `:760` and in the
trailer. **The limb the reader cannot control — mandatory on injury — is the one in the facts
layer.**"*

#### ⭐ A distinction nobody had drawn, now in the provenance paragraph

⚠️ **THE TWO MANDATORY LIMBS ARE NOT THE SAME LIMB.** **Hockey Canada's trigger is INJURY; USA
Hockey's is RECKLESS ENDANGERMENT — and USA Hockey writes no injury limb into Rule 604 at all.**
**Recorded at `center.md:786`.**

#### ⭐ Found by it, not in the brief — an antecedent across a CHUNK BOUNDARY

**The blockquote under `goaltender.md:562` opened *"all three of those books restrict the freeze
instead"*** — ⚠️ **pointing at a heading the listener heard in a DIFFERENT CHUNK (047 vs 049).**
**Fixed by substitution, not by pointing.** ⚠️ **That is a new sub-shape: an antecedent that is fine
on the page, fine in its own chunk, and dangling across the boundary between two.**
**And the `:562` heading itself took the LOW-CHURN fix** — *"describes what those books do, asserts
nothing about other books, and makes NO COUNT CLAIM about how many books lack a trapezoid"*,
explicitly avoiding the *"you checked four books and this corpus holds thirty-eight"* trap.

#### ⚠️ Open

- [ ] **A corpus-wide sweep for the shape *"is a minor"* / *"is two minutes"* with no escalation
      nearby HAS NOT BEEN RUN** — the floor/ceiling census covered dangerous acts, not this phrasing.
      ⚠️ **And the class is invisible to `check_absolutes.py` by construction.**
- [ ] ⚠️ **A declared uncertainty worth someone's time: *"whether the IIHF's ABSENCE of a slashing
      match penalty is real or an artefact of my reading Rule 61 alone — a match penalty for
      deliberate injury may live in the IIHF's general Rule 23/28 machinery. I stated only what Rule
      61 does and does not write."*** **Correctly scoped; worth closing.**
- [ ] **Pre-existing `check_quote_drift` flags left untouched and named: `center.md:650`/`:786`, and
      16 in `goaltender.md`.** ✅ **Clean-fragment counts rose 382→385 and 873→880 with FLAGGED
      COUNTS UNCHANGED — so all ten new quotations are verbatim.**


### ✅ THE HEADING CENSUS — all 39 documents rendered, all 1,794 voiced headings read alone

⭐ **METHOD WORTH KEEPING: it did not guess which lines are headings — it matched THE RENDERER'S OWN
EMISSION SHAPE** (`<break 1000ms|700ms/><p>…</p><break 450ms/>`, `md_to_speech.py:3117-3128`,
**`BREAK_SUBSECTION` 700 ms for `###` AND `####`**), and read each document's named
`<layer>__<stem>/` subdirectory, never the shared root.

⚠️ **THE HEADLINE IS A NEGATIVE AND IT MATTERS: *"Most headings are correct and that is the headline
result."*** ~1,700 of 1,794 name a topic and assert nothing. ⭐ **And the corpus ALREADY uses the
correct device in many places** — `skating.md` *"Which way to pivot — a coaching default, not a
law"*; `defensive_zone_coverage.md` *"Most defensive-zone breakdowns are not effort problems —
coaching consensus, not a counted figure"*; `uk_rules.md` *"The trapezoid may not be enforced"*.
***"These are what the four I repaired should have looked like."***

#### Repaired

- **`uk_rules.md` — FOUR MORE In-House tariffs asserted as the British answer in the heading layer**,
  the `:132` class found four more times in the same document ⚠️ **and in two of the four the
  document's OWN BODY NAMES AN OPPOSITE BRITISH ANSWER** (video review — *"the two British answers
  are opposite ones"*; embellishment — *"⚠️ The Elite League does not"*). **Plus `:304`'s *"neither
  rule book"*, which names no pair voiced alone.** ⭐ **Five `§` pointers updated with them.**
- **`offensive_zone_play.md:97` — a superlative that SHED ITS OWNER'S QUALIFICATION.** *"The
  Highest-Value Pass Type Measured"* — ⚠️ **the body states 15.50% with its scope (volunteer-tracked,
  51,308 shots, 5v5) and says IN TERMS *"carry that qualification wherever you quote the figure"*.**
  ***"That is D8 committed in the heading of the section that defines the rule."***
- **`goaltender.md:529` — the trapezoid named as *the* rule** in a document whose next heading says
  two of four books do not have one, **and whose own facts block carries England Ice Hockey's *"not
  currently enforced"*.** **Two anchors in `getting_started.md` updated.**
- **`center.md:395` — a coaching instruction shaped as a rule NOBODY'S BOOK WRITES.** *"The crease is
  the one line you don't cross"* — ⚠️ ***"No book makes crossing the crease line an offence in
  itself; what varies is what it costs."***
- **`neutral_zone_systems.md:183` — one document's hedge missing from another's identical claim.**
  *"1-3-1 — the modern standard"* against `special_teams.md`'s *"widely described as the modern
  default"*. **Matched to the corpus's own hedged form.**

#### ⭐ The decision NOT to fix seven headings, and why it is the right one

**`risk_management.md`'s seven numbered *"Never…"* headings are absolutes voiced alone — and the
document's own `:158` says *"The other seven are coaching conventions."*** ⚠️ ***"A partial fix is
worse than none here: seven headings need ONE CONSISTENT TREATMENT, and picking two would leave the
document stating the same class of claim two ways."*** ✅ **And it identified the two that must NOT
be swept: item 7 (charging, four books by number) and item 9 (the over-the-glass minor, priced and
zoned inside the heading) are already correct.** **Dispatched as one pass.**

#### 🟠 Handed over, all now dispatched

- **`defending_the_rush.md:446` — `### **TAKE AWAY THE PASS. GIVE UP THE SHOT.**`** voiced alone, in
  capitals — ⚠️ **while `:444`, TWO LINES ABOVE, says *"There is more than one legitimate way to play
  it… which of the two you play is a decision for your team"*, and the NEXT heading is *"The
  realistic alternative."*** ⚠️ ***"Do not delete the emphasis; it is the section's spine."***
- ✅ **CLOSED 22 Sep — `body_contact_and_battles.md` *"This one rule prevents most of it."*** The
  diagnosis was right and the defect was **larger** than the row recorded: there was no citation to
  shed, because **the section's own prose twice refuses the proportion** — it scopes *Heads Up
  Hockey*'s superlative to *"the habit, not the moment"*, and it attacks USA Hockey's *"almost all"*
  on the ground that the paper credited (Tator, CJNS 11:34–41) is a **six-patient case series** that
  does not carry the quantifier. **A fabricated magnitude, non-negotiable 1, in a head-and-spine
  section.** Replaced with a **mechanism** claim drawn from the section's own first numbered reason;
  **all six inbound anchors rewritten in the same pass**, slug computed with `check_links.slugify()`
  rather than guessed. ⚠️ **The coordinator's line number was one off and the agent found it by
  content** — as briefed.
  ⚠️ **Residual, NOT closed:** the new heading advertises the instruction and **not** the IIHF 48.1
  carve-out that runs *against* the reader. *"An unadvertised exception is how omissions survive."*
- **`body_contact_and_battles.md:212` *"Angling — Legal in Every League"* on a TWO-BOOK warrant**, and
  **`faceoffs.md`'s *"under the NHL and IIHF books"* — the TOO-NARROW direction.** **Both to
  `rules-verifier`.**
- **`zone_entries.md:414` reported UNVERIFIED, deliberately** — *"I could not establish whether a
  realistic alternative exists, and I did not go to a source."*

#### ⚠️ Its own blind spot, and it is the larger half

- [ ] ⚠️⚠️ ***"It read every heading and ALMOST NO BODY. A heading that is individually
      unobjectionable but states the OPPOSITE of its own section's prose would have passed me — and
      that is the larger half of the risk."*** **No wave covers that.**
- [ ] ⚠️ **The same defect ONE LAYER DOWN is untested: *"` ```facts ` values, body list items and
      blockquote paragraphs are each voiced alone with 300 ms either side, and I read NONE of them.
      A bare In-House tariff in a `Never:` line is the same defect in a layer with more of them."***
- [ ] ⚠️ **Every rule claim in its repairs was verified against each document's OWN BODY** — *"which
      is the method CLAUDE.md warns propagates defects. **If `uk_rules.md`'s body is wrong about the
      EIHL Casebook, my headings are now confidently wrong in the same direction.**"*
- [ ] **And the audio assumption nobody has tested, now named by THREE agents independently:**
      *"whether a listener RETAINS a scoping heading while the next unit is spoken. At least five of
      my acquittals rest on it."*


### ✅ THE BRITISH BANDS — closed, and the limit was located precisely rather than argued about

⭐ **THE DECISIVE EVIDENCE WAS UNEXPECTED AND IT NAILS THE DEFECT SHAPE:** `center.md`'s **Sources
trailer ALREADY carried the four bands**, added earlier today — *"junior U10 and U12 non-checking,
U14 upward checking; NIHL Division 1 and 2 checking; WNIHL non-checking."* ⚠️⚠️ **The trailer is NOT
A SPOKEN LAYER.** **So the bands existed in `center.md` in a layer the listener never hears, under a
spoken layer that said *"ask your league."*** ***"A cross-reference is exactly what a listener cannot
follow. That is the limit, precisely located."***

**Bands verified in the `-layout` twins, primary text:** Junior RoC U10 cross-ice non-checking, **U12
full ice NON-checking, U14/U16/U19 checking**; **U10 RoC independently corroborates** (*"Bodychecking
is NOT allowed in U10 matches"*); **NIHL RoC scoped by its own title to Division 1 and 2 ONLY, not
NIHL National**; ⚠️ **WNIHL FULL ICE NON-CHECKING AT EVERY AGE — *"the row a reader is least likely
to guess."***
⭐ **It handled the column trap correctly and honestly:** *"The flat extraction DOES pair correctly
here, **by ordinal luck** — the two column blocks happen to be the same length and in the same
order. **That is not a safe general result and I did not rely on it.**"*

#### ⭐⭐ IT FOUND THE BRITISH "RULE, NOT A HEDGE" SENTENCE — the property the wave turns on

**IIHF Appendix II Glossary, *Competitive Contact*** (`iihf_rules_v1.1.txt:8089-8091`, **character-
identical in 2026/27**): *"Body contact between two or more Players who are in the immediate
vicinity of the puck and who are trying to gain possession… **reasonably allowed to push and lean
into each other** provided that possession of the puck remains the sole object of the contact."*
⚠️ **So a British non-checking game STILL LEGALLY PUTS YOU INTO THE WALL — and that is rule text, so
the sentence cannot be read as "so you don't need the posture."** **Now in both documents' bodies.**

#### 🔴 A NEW DISCLOSURE CREATED — and it is the most important thing found

⚠️⚠️ **NONE OF THE FOUR IHUK REGULATIONS PRICES A BREACH OF ITS OWN BAND.** Each searched whole and
flattened; **outside eligibility prose the only hits are the format-table cells themselves.** **The
Junior RoC's Appendix D has a §4 *Penalties* and writes NOTHING about body checking.** **And the
IIHF book has no non-check classification to write a penalty under.**
> ***"So what an official actually calls a check in a British U12 game is not published in anything
> on disk."***
**Written into both documents: *"Treat the band as the instruction and the price as unsettled."***
⚠️ **AN HONEST DISCLOSURE CREATED, NOT REMOVED. It must not be softened — and no repair may imply a
British price no document publishes.**

**Negatives attacked rather than assumed:** `eiha_inhouse_2026-27` and `eih_rr` return **0** for
`bodycheck|bodychecking|noncheck|competitivecontact|bodycontact`; **both IIHF editions return 0 for
`noncheck` — the IIHF has NO non-check classification at all, and 101.1 is a women's-hockey
PERMISSION, not an age ban**; **the EIHL Casebook, footers deleted before flattening, returns 0 for
`check|checking|bodycheck|rule604|u18|u20`** — written as *"covered by none of them — ask"*, ⚠️
**never as "the EIHL is a checking league."**
⭐ **It verified the OWNER's row while there: `body_contact_and_battles.md:74`'s British row matches
primary text EXACTLY, including the narrow *"Division 1 and 2"* scope. No correction owed.**
⭐ **And a draft failed its own voiced-alone test and was fixed BY SUBSTITUTION:** *"The British
**bands** are in IHUK's…"* — *"`bands` is a short abstract noun pointer with no antecedent a
listener has, the exact `check_facts_antecedents.py` shape."*

#### 🔴 SAFETY HAND-OFF — the floor stated as the whole price. DISPATCHED.

**Every `faceoffs.md` site prices an illegal check as *"a minor on him"* and stops.** ⚠️ **Hockey
Canada 7.3(c): a major and game misconduct *"MUST be assessed"* if the check INJURES — mandatory,
not discretionary.** **USA Hockey 604(d) for reckless endangerment, 604(e) a match penalty.**
✅ **`center.md:638` already carries it correctly and is the model.** ⚠️ **`faceoffs.md:886` is now
14/14 total and 8/8 coaching — AT `HARD_MAX` IN BOTH DIMENSIONS — and the agent deliberately did NOT
evict anything to fit it.** ✅ **`check_facts` verified clean by the coordinator: 850 blocks, 5,786
facts, all conform. The 306-char overflow is resolved.**
- [ ] ⚠️ **AND THE CLASS IS DISPATCHED AS A CORPUS-WIDE CENSUS:** *"A penalty tier stated as a floor
      with the ceiling omitted is **invisible to every checker in `scripts/`**, and I looked for it
      in two rules in two documents."* **Same family as the other two tool-blind classes found
      today — a rule quoted accurately but incompletely, and a list extracted eight of nine.**

#### 🟠 THE TRAILER AUDIT — the shape is NOT exhausted, and it has now been found FIVE TIMES IN ONE FILE

**138 (book, rule) pairs extracted from `faceoffs.md` outside the trailer and tested against it.
THREE MORE GAPS beyond the two already known:** **IIHF 27.7** (0 trailer occurrences), **IIHF 68.2**
(cited **3×** in body, 0 in trailer), and **England Ice Hockey R&R Rule 22.3** — ⚠️ ***"England Ice
Hockey appeared NOWHERE in the trailer."*** **All fixed.**
⚠️ **A NEAR-MISS WORTH KNOWING: the trailer's one *"Rules & Regulations"* hit is the IIHF's web page,
not England's — *"a near-miss that would read as coverage."***
⭐ **The four IHUK URLs were taken from `fetch_sources.sh` and `uk_rules.md`, NOT invented** — *"my
first draft contained a guessed `icehockeyuk.co.uk` URL; I removed it before it reached the file."*
- [ ] ⚠️ **`source-verifier` JOB ACROSS THE WHOLE CORPUS: *"the pattern is a rule number that enters
      via a facts block and NEVER REACHES THE TRAILER, and it has now been found five times in one
      file."*** **`center.md`'s trailer was not systematically audited.**

#### ✅ And the source-table phantom did NOT recur

⚠️ **It ran the diff command the agent file specifies and *"it printed exactly the five `_layout`
twins the file predicts and nothing else."*** ***"Reporting this because five consecutive verifiers
have filed the phantom."*** **The reconciliation written into `rules-verifier.md` this round is
holding.**

#### ⚠️ Declared unreached

- [ ] **Whether the on-disk IHUK regulations are CURRENT.** *"The Junior RoC says 'Leagues to be
      reviewed each summer'; nothing on disk records a revision number or a published date for any
      of the four, unlike the In-House Rules. **A band could have moved and this method would not
      see it.**"*
- [ ] **NIHL National, BUIHA and Scottish domestic hockey outside the junior structure get NO ROW** —
      four regulations are on disk and IHUK runs more competitions than four. **The sentences are
      scoped to the four and say so.**
- [ ] **`body_contact_and_battles.md:74`'s PWHL, CARHA and IIHF-women's rows were not checked**, and
      both books are on disk.


### ✅ THE CAPTION LAYER — 13 captions repaired, and MY CENSUS UNDER-SCOPED IT

⚠️⚠️ **MY 13-MODULES / 8-WITH-CLAUSE FIGURE WAS A LINE-BASED GREP, AND THE PHRASE IS SPLIT ACROSS
STRING-CONCATENATION BOUNDARIES.** ⚠️ **`offensive_zone_play.mjs:1022-1028` ALREADY RECORDS EXACTLY
WHY THAT UNDER-REPORTS.** **Recounted against the BUILD PRODUCT — which is what a listener and a
screen reader actually receive: 24 captions carried the posture limb, 11 carried the shoulder
clause, 13 did not.** **`skating.mjs` was a FALSE POSITIVE (comment only, no caption), and
`positions.mjs`'s `off-wing-open-to-the-ice` plus THREE more `breakouts.mjs` captions were MISSED.**
**So the repair was 13 captions across 10 modules, not 2 across 1.**
✅ **All 24 now carry it — verified post-build: *"posture-limb captions: 24, with shoulder clause:
24, missing: none."*** ⚠️ **Fourth coordinator census today measured too small. A grep over
concatenated source is not a census of the rendered text.**

#### ⭐ ASKED WHICH IT JUDGED NOT OWED, IT ANSWERED "NONE" AND SHOWED BOTH EXCLUSION ARGUMENTS FAILING

*"Rather than my inventing a discriminator to look selective."*
- *"The host prose carries it densely"* — **every host except `goaltender.md` does, 4–17 lines each.
  But a caption is VOICED ALONE, and the 11 captions that ALREADY carried the clause sit in those
  same dense documents — so the corpus had already rejected this argument ELEVEN TIMES.**
- *"The caption points at the host's override"* — **three say the override *"outranks every word of
  it"*. That asserts PRIORITY, not incompleteness — it never tells a listener there is more to
  come, and each then gives a COMPLETE-SOUNDING positive prescription.**
⚠️ **The governing fact: `body_contact_and_battles.md` §6 records *"take the wall on your shoulder"*
as folklore players and coaches *"say constantly"*. A caption that names the forearm and the hip and
stops HAS NOT MET THAT FOLKLORE.**

#### ⭐⭐ THREE CAPTIONS NEEDED RESTRUCTURING, AND IT COMMITTED THE WARNED-OF DEFECT AND CAUGHT IT

**`loose-puck-who-goes`, `cross-ice-in-your-own-end` and `entry-delay-curl` all END ON ABSOLUTES**
(*"never turn your back to the wall or duck"*), **so appending the hedge makes *"if you can help
it"* ATTACH BACKWARDS TO AN ABSOLUTE.** ⚠️ ***"My first pass on `risk_management.mjs` did exactly
that; I caught it on re-read"*** and moved the clause to KT6's mid-sentence slot.
**A fourth needed its own treatment: `the-call-and-who-can-see-it`'s comment requires the posture and
both absolutes to stay in ONE SENTENCE so no chunk boundary can split them** — one em dash became a
semicolon, **every word preserved**, and it verified through the real renderer that the whole limb
lands in a **single unbroken chunk**. **Now 2,660 chars against `MAX_BILLED_CHARS` 2,800.**

#### ⭐ The shared constant — scoped deliberately, and two sites REFUSED

New `site/src/diagrams/wall_contact_clauses.mjs` exports three constants. ⚠️ **`SHOULDER_TAIL` is
the settled form, not a new one — *"9 of the 11 existing captions already used these exact
characters."*** ⚠️ **It did NOT flatten `breakout-winger-wall` or `breakout-against-1-3-1` onto the
full constant:** their leads are load-bearing (*"Puck protection never justifies it"*; *"Body open
to the ice… forearm and hip into contact if it comes"* **for a winger posted up where contact may
not arrive**) **and were reasoned out in an earlier round.** ***"Flattening reviewed safety text to
satisfy a refactor is the wrong trade"*** — **and the module comment says so.**
⭐ **It migrated 6 already-correct sites onto the constant so they cannot drift, and PROVED it was
text-neutral: the build-product diff shows exactly the 13 intended captions changed and not one of
those 6.**

#### ⭐ `forecheck-131` — the safety numbers IMPROVED rather than traded

**My suggested fix was NOT AVAILABLE and the cap is why:** the old chord already ran at `d = 11.41
ft`, `miss = 3.28 ft` against a **2.9 ft floor** — **any extension toward the winger drops `miss`
below it.** **Moving the origin was out too: `LINE3_WALL` is one of the flat line of three, and
staggering them *"destroys the thing being taught."***
**So the endpoint moved ONTO the wall** — *"which is what 'arriving at the wall' means literally"*:

| | was | now |
|---|---|---|
| chord | **4.72 ft** (under a 5.80 ft glyph) | **7.43 ft** |
| `θ` | 16.7° | **47.7°** |
| `miss` | 3.28 ft (floor 2.9) | **7.40 ft** |

⚠️ **`d` falls 1.4 ft; the clearance that actually decides legality MORE THAN DOUBLES.** **Measured
against committed `rink.json`, with the working tree confirmed unmodified — *"the check the cap
exists to force."*** **Rendered at 360 px and looked at: the route is now clearly visible.**
- [ ] ⚠️ **BUT IT CHANGED GEOMETRY A `safety-reviewer` SET, and it says so: *"it should go back to
      `safety-reviewer`, not be taken as settled because a checker passed."***

#### 🟠 NOT FIXED, and the refusal is right — a DESIGN-LEVEL legibility limit

**`breakout-reverse` at 360 px: the whole play occupies the left ~20% of the frame, *"D1"* and
*"F1"* are illegible, and ROUTE 2 — THE REVERSE PASS, THE SUBJECT — IS OCCLUDED.**
⚠️ **This is ARITHMETIC, NOT TASTE: `half: false` is a 204-ft viewBox, so at 360 px it is 1.76
px/ft. A 5.8 ft glyph is 10 px and the 11 ft D1–F1 separation is 19 px. NO PER-DIAGRAM TWEAK
RECOVERS THAT.**
⚠️ **It stopped because the file header ARGUES FOR `half: false` EXPLICITLY** — *"the empty ice is
the thing the reader is breaking out into"* — *"flipping it would contradict a documented design
decision, change what 9 diagrams teach, and falsify captions."*
- [ ] **Owner's options: `half: true` for the OPTION diagrams while one full-sheet diagram
      establishes context, or a RENDERER-LEVEL MINIMUM LABEL SIZE in `site/scripts/lib/rink.mjs`.**
      ⚠️ ***"The header's trade-off appears never to have been tested at phone width."***

#### 🔴 GATE-BLOCKING, ROUTED

- [ ] **`check_facts.py` FAILS: `faceoffs.md:886` — a `Rule:` fact at 306 chars, over 300.**
      ⚠️ **It REPRODUCES on a second run, so it is NOT the write-race.** **Routed to the live holder
      with the substitution-not-eviction constraint and the warning not to trim the *"incidental
      board contact stays legal"* limb, which is a rule and not a hedge.**
- [ ] ⚠️ **Build-product provenance, again: its rebuild published `forecheck-131`'s caption and
      `winger-offensive-zone-patches`'s caption and describe — someone else's uncommitted work.**
      *"I am relying on your item 5 that both were verified this round — my clean run is NOT a
      review of them."* ✅ **They were, by the four-caption review.**

#### ⚠️ The cost question nobody has asked

- [ ] ***"Several of these limbs now run 300+ characters inside captions already over 1,200, and at
      least one is approaching a renderer limit. NOBODY HAS ASKED RECENTLY WHETHER THE SAFETY LIMB
      BELONGS IN EVERY CAPTION OR WHETHER THE CAPTION LAYER IS NOW CARRYING A DOCUMENT'S WORTH OF
      REPEATED INSTRUCTION."*** ⚠️ **And repetition is a CORRECTNESS risk here — 24 captions is 24
      places a future correction must reach.**


### ✅ THE THIRD MAN IN — APPLIED. And the "sub-gap" was REFUTED by the bracket convention.

**Both edits applied.** Common Mistakes gained a bullet **between *"Retaliating after the whistle"*
and *"Coming off the bench"*** — the briefed ordering, *don't hit back → don't skate over → don't
come off the bench* — carrying NHL 46.16, IIHF 46.14 with **both exceptions and their differing
size**, USA Hockey 615(a)'s glove-drop minor and instigator game misconduct, and the attempted-punch
Note. Key Takeaway 10 gained the gloves clause's **price**.
**Layer state for the third-man hazard: ✓✓✗✗ → ✓✓✓✓.**

#### ⭐⭐ THE SUB-GAP DOES NOT EXIST — and the reason is the funniest failure of the day

⚠️⚠️ **`ibc.txt:1454`'s *"Check over your shoulder to see where your opponent is"* IS ALREADY IN §6,
VERBATIM, AT `:808`** — inside the *"Do not turn your back"* subsection, **attributed to USA Hockey
and framed explicitly as a safety instruction**, closing *"Knowing pressure is coming is what
converts the situation into Case 1 or Case 2."*
⚠️ **IT IS NINE OF NINE, NOT EIGHT.** **The grep missed it because the corpus prints it with the
disclosed-insertion bracket — `[c]heck`, not `Check`.**
⚠️⚠️ **THAT IS THE SAME CLASS OF ERROR AS THE `fighting` / `[Ff]ight` ONE I HAD JUST FLAGGED IN MY
OWN BRIEF — IN THE SENTENCE NEXT TO IT.** **Twice in one brief, by two different parties, on the
same trap: a grep whose surface excludes the corpus's own conventions.**
⭐ **The agent declined to write the proposed Case 1 sentence: it would have been a near-verbatim
duplicate 24 lines away in the same section** — **and `:808` is arguably the BETTER host, because it
is the paragraph about the checker arriving behind you, which is the fact pattern the point is
for.**
⚠️ **So the corpus's shoulder-glance census stands corrected: it teaches the glance seven times as
an information read AND ONCE, at `:808`, as a safety instruction.** **The "zero times" line in the
row above is WRONG and this supersedes it.**

#### ⭐ The KT10 split — DECLINED, on a measurement I did not have

**KT10 is 3,555 chars after the addition. KT1 is 4,207 and KT9 is 5,609.** ⚠️ **So KT10 is BELOW the
median of this document's long takeaways, and splitting it would create a KT11 that no other
takeaway's length justifies** — **and an archive references this file's KT10 by number.**
*"Length here is a DOCUMENT-WIDE pre-existing issue, not a KT10 one, and it is not mine to fix in
one takeaway."* **Correct, and it converts my vague "ear test" row into a scoped one.**

#### ✅ The EIHL dependency, recorded precisely — and one half is NOT what I assumed

1. **Key Takeaway 10 `:1818`** — *"…they are not your book."* ⚠️ **The ONLY occurrence of that phrase
   in the file.**
2. **Common Mistakes `:1730`** (renumbered by the insert) — ⚠️ **does NOT use that wording.** It
   scopes by **naming each book explicitly** (*"Under USA Hockey the same act is a match penalty…
   Hockey Canada makes it a Gross Misconduct"*). **Functionally equivalent — but a trim that
   collapsed those to one generic sentence would break the decline.**

#### 🟠 Propagation checked — one real gap, and it is in the rules-overview document

- [ ] **`rules_primer.md` carries NO third-man limb.** Its Fighting entry `:467` and its cross-book
      table row `:932` **cover the major, the instigator and the aggressor — and stop.** ⚠️ **A
      gap, not a contradiction.** **It is the corpus's rules-overview document, and a reader who
      reads only it learns the instigator and aggressor tiers and not the one that catches a
      bystander.**
- ✅ **`risk_management.md` and `team_play_and_culture.md`: no third-man content at all — nothing to
  duplicate.** ✅ **`center.md`'s "third player" hits are NHL/IIHF 67.2 FACEOFF clauses, unrelated.**
- [ ] ⚠️ **Its own declared incompleteness, and it is the shape it just repaired:** *"I checked NHL,
      IIHF and USA Hockey. **I did not check Hockey Canada, CARHA, PWHL or the IHUK In-House Rules
      for a third-man provision**, so if any of them prices it differently my new bullet is
      correct-but-incomplete for those readers — the same shape as the defect it repairs."*

#### ⚠️ A BUILD-GATE CONDITION THAT IS THE COORDINATOR'S AND MUST BE LAST

**The agent reported `check_absolutes.py` exiting 2 —** *"12 diagram source(s) are newer than the
built diagrams.json… the voiced caption layer is uncertified… this blocks the commit gate."*
✅ **Re-checked by the coordinator: it now PASSES, and no `site/src/diagrams/*.mjs` is newer than
`site/src/data/diagrams.json` — the live caption agent rebuilt in the interval.**
⚠️⚠️ **BUT THAT STATE IS NOT FINAL AND MUST NOT BE TREATED AS THE GATE RUN.** **A caption agent is
still editing those modules.** **`node site/scripts/build-diagrams.mjs` with the ABSOLUTE binary
(~6 min) must run AFTER it finishes and BEFORE `check_absolutes.py`, or the caption layer is
uncertified by construction** — **and round 58 rewrote ten-plus captions with every clean
`check_absolutes` run covering the superseded text.**


### ✅ THE CAPTION LAYER — 2 repaired, and the SHOULDER QUESTION IS DEFINITIVELY CLOSED

#### ✅✅ §6 ALREADY SETTLED THE SHOULDER QUESTION IN TERMS, AND THE AGENT READ IT RATHER THAN TAKING EITHER BRIEF

**`body_contact_and_battles.md:789`:** the *"turn the far shoulder toward the boards"* sentence is a
**drill teaching point**, *"far"* is **never defined**, it appears **once**, and the document states
in its own words: *"[w]hat the drill sentence asks for is recorded here and not resolved, because
the manual does not settle it. **The instruction this document gives you is the one above: skates
parallel, forearm and hip.**"*
⚠️ **So the corpus had ALREADY recorded-not-resolved it, exactly as the convention requires — and
three parties today (an agent, the coordinator twice) treated it as an open question.**
**ELEVENTH TIME the answer was already written down in this repository.**
⭐ **The agent propagated NO shoulder clause into either caption, and recorded why in the source
comments: *"a caption cannot hedge an unresolved question, and §6's own instruction is the unhedged
half."***

⚠️ **TWO MORE COORDINATOR FIGURES WRONG:** I said **15** modules carry the limb vocabulary — it is
**17**; I said `--rule-like` reports **74** pairs — it is **76**. **Neither changed a judgement, and
the agent reported both anyway, *"because a figure copied out of its owner goes stale."***

#### The two repairs, and the host census that decided them

⭐ **THE DECISIVE HALF WAS THE HOST CENSUS, NOT THE CAPTION CENSUS.** `goaltender.md` carries **0**
of the limb vocabulary (it has *"chin off your chest"* 3× and nothing else) **and hosts
`breakout-rim`, `breakout-reverse`, `breakout-d-to-d`, `net-front-walk-out-direction` and
`the-trapezoid`.** **A caption spoken into a host with none of the limb is the sole carrier for that
listener.** `breakout-rim` and `breakout-reverse` repaired, **wording matched word-for-word to a
sibling limb in the same file so the two cannot drift**, and **shared-constant check run first** —
`grep -ln` returned `breakouts.mjs` only.
⭐ **Nine caption families judged NOT owed, with reasons** — the arriving-player captions *"already
carry the CORRECT limb for him"* and adding the receiving limb *"would address the wrong person"*;
the four dump captions have hosts at 56 and 15 limb hits and *"a limb would double them and become
exactly the sixth restatement"*.
⭐ **The build reported `202 reused, 2 rendered` — confirming the build product covers the new text
and not superseded text.** The absolute node binary was used before `check_absolutes.py`.

#### 🔴 PROCESS MAJOR — THE REBUILD PUBLISHED TWO CAPTIONS NOBODY HAD READ, AND ONE IS THE COORDINATOR'S

⚠️⚠️ **`site/src/data/diagrams.json` IS SHARED STATE.** Two modules carried uncommitted edits when
the agent built, so **four** caption/describe units changed in the build product and **only two were
its own.** Its own words: ***"This is round 59's pattern exactly: mechanically checked, reviewed by
nobody. Do not let my clean run stand as review of those two."***
- **`forecheck-131` IS THE COORDINATOR'S OWN M5 REPAIR.** ⚠️ **I wrote it, I rebuilt it, and I let a
  clean `check_absolutes` run stand over it. That is the self-certification CLAUDE.md forbids the
  coordinator by name.**
- **`winger-offensive-zone-patches`** from an earlier wave, replacing a flat high-slot **ownership**
  claim with *"no position owns that layer, so find out who fills it in yours"*, citing
  `offensive_zone_play.md:406`/`:243`/`:754` and `winger.md:430`.
- [ ] ✅ **DISPATCHED: a fresh `diagram-reviewer` on ALL FOUR units**, including the instruction that
      **a comment citing evidence is still the author's assertion**, and that a caption naming an
      alternative **the drawing does not show** may now disagree with its own image.

#### 🟠 Open from the caption wave

- [ ] 🔴 **`goalie-fifty-fifty-puck` (sole host `goaltender.md`) sends a goaltender into the corner
      to race a forechecker and ends *"if you do commit, commit."*** ⚠️ **Neither the caption nor
      `goaltender.md` gives ANY contact guidance for a goalie who arrives there.** ⭐ **The agent
      DELIBERATELY DID NOT REPAIR IT: *"the corpus has no sourced goaltender board-contact posture
      anywhere, and the skater limb is written for skaters in §6. Writing one into a caption would
      author a claim the corpus does not make."*** **A CONTENT GAP NEEDING A SOURCE, not a caption
      edit.** **That restraint is the correct call and the row should not be closed by inventing
      one.**
- [ ] ⚠️ **THE `describe` LAYER WAS NOT REVIEWED AT ALL.** *"`describe` is what a screen reader gets
      for the picture itself, and a wall play described without the limb is the same defect one
      layer down."* **408 caption/describe units exist; only captions were censused.**
- [ ] **Host coverage was judged by VOCABULARY COUNT, not by reading each host's prose in place** —
      *"a host could carry the limb in a section a reader of that marker never reaches."* **A layer
      test per host would decide; none was run.**
- [ ] **`check_zones` reports `'the middle'` at 2200 / 1936 / 1276 sq ft across four diagrams with
      centres 40–68 ft apart.** Pre-existing, untouched — ⚠️ *"it is not obviously all mirroring."*
      **The high-slot precedent: a band once drawn at 3.14× its owner's definition passed every
      gate.** Handed to the review agent.
- [ ] **Notation asymmetry:** `breakout-reverse` discloses that a banked puck is drawn as a pass
      *"because the drill notation has no symbol for a banked puck"*; **`breakout-rim` does not.**
      **Left alone — whether the reader needs it twice is the owner's judgement.**


### ✅ `center.md` — the Critical repaired, and the SHOULDER QUESTION IS SETTLED IN THE SOURCE

⭐⭐ **THE CENSUS NEGATIVE WAS RE-RUN AGAINST THE PRE-EDIT FILE AND HELD — AND GOT STRONGER.**
The agent ran the full vocabulary against `git show HEAD:content/positions/center.md`, **facts lines
separated from prose**. ⚠️ **True search surface: ~110 lines, not one — the census understated it by
TWO ORDERS OF MAGNITUDE**, the same undercount species measured in `faceoffs.md`. **But the finding
was unchanged:** `back to the wall`, `duck`, `chin off your chest`, `forearm`, `parallel to the
boards`, `shoulder tip` — **zero in every layer.** The only other near-hits are the **delivering**
side (*"never finish a backcheck into somebody's back"*), **the opposite duty.**
⭐ **And the "describes the geometry and stops" shape was present IN THE FACTS LAYER** — `:82`
*"reverse it back against the flow **to a defenceman arriving behind you**"*, `:83` *"a rim beats
pressure that is **sealing you in**"*, `:94` *"with a forechecker already on you"*. **Three
sentences naming a forechecker arriving behind the reader, and nothing about surviving it.**

⭐ **Two blocks at 7/8 and 6/8 needed three slots. It merged `Options:`+`Read:` and
`Action:`+`Priority:` — buying three, trading no caveat.** Both now 8/8.
⭐ **It DECLINED a sixth layer** (Check yourself), citing `check_layer_echo.py` — center scores
**20.1 / 18.2 / 14.1**, *below* `defender.md` (23.7 / 23.3 / 19.6). *"A sixth restatement buys
nothing and is one more place a correction can fail to reach."*
⭐ **AND IT CAUGHT ITSELF LEAVING A PROHIBITION WITH NO ALTERNATIVE** — its first draft said *"your
back is never an option"* and stopped. **Repaired from `ibc.txt:675`: get your stick and gloves up
and spread on the glass, to cushion the blow and spread the force.** ⚠️ **That is the same Critical
shape found in `breakouts.md` this morning, caught by the author this time.**

#### ✅✅ THE SHOULDER CONTRADICTION IS RESOLVED — by going to the source, not by argument

**`sources/huh.txt:642, 647`, the *"Taking A Check"* checklist:** ***"Skates parallel to the
boards"*** and ***"No shoulder contact on the boards, if possible."***
⚠️ **That is the corpus's limb VERBATIM, in USA Hockey's own words, in the section about RECEIVING a
check.** With `ibc.txt:1453` (*"Never hit the boards or glass with the tip of your shoulder"*) and
`ibc.txt`'s *"Avoid hitting the boards with the shoulder"* under a heading about being *"checked
while skating parallel to the boards"*, **the corpus's posture IS the source's posture and its
hedging IS the source's hedging** — *"never… the tip"* and *"if possible"* are two different
strengths and both were preserved. **So *"turn the far shoulder toward the boards"* is almost
certainly not a contradiction.** **Routed to the live caption agent; the `safety-reviewer` reading
§6 owns the final word.**
⚠️ **AND THE MECHANISM'S SCOPE IS SPLIT, which is easy to get wrong: the WALKING-SPEED claim belongs
to the DUCKING / head-down prohibition, NOT to the turned back.** ⚠️ **`huh.txt` names the GOAL POST
alongside the boards** — relevant to anything drawn behind the net.

#### 🟠 OPEN from this wave

- [ ] **A THIRD SITE, outside the repair:** `center.md` §Faceoffs `:440`/`:454` tells the centre to
      *"win it back to your defenders, ideally the **boards-side** one for a quick rim out"* —
      ⚠️ **the centre deliberately sends the puck to a teammate who will retrieve it ON THE WALL WITH
      THE FORECHECK BEHIND THEM.** **That is the faceoffs/defender hazard seen from the other end,
      and neither layer says anything about it.**
- [ ] ⚠️ **THE SECOND LIMB HAS A COMPLICATION NOBODY HAD NAMED, and it is the key to that wave:**
      `center.md` **does** answer *"may you check at all"* for the **delivering** side (11 `Rule:`
      facts). It says nothing for the **receiving** side. ⚠️ **But incidental board contact happens
      in EVERY classification, so the posture is right for all readers** — *"the sentence has to say
      'this contact may itself be an offence where you play' without implying 'so you don't need the
      posture.'"* **That is the sentence to get right, and it is corpus-wide, not center-specific.**
- [ ] **`center.md` pre-existing quote drift, 2 hits, neither the agent's:** IIHF 101.1 quoted with
      an added terminal period where the source **continues** *"If two (2)…"*, and the source's
      **curly** apostrophes rendered straight. **Owner: whoever takes the checking-scope wave.**
- [ ] ⚠️ **STAGING: `center.md` now mixes THREE agents' uncommitted work** — a low-zone-collapse
      hybrid propagation, a swing-breakout/centre-fly propagation, and this repair. **The agent
      verified it clobbered nothing, but the file's staged state is not one agent's review.**


### ✅ THE `body_contact_and_battles.md` WAVE — and the best find is an INVERSION

⚠️⚠️ **THE BRIEF'S FRAMING WAS REFUTED AND THE AGENT FOUND THE DANGEROUS HALF THE BRIEF MISSED.**
I framed head-butting as an EIHL peculiarity. ⚠️ **`hc.txt:5957`, Hockey Canada Interpretation 1 to
Rule 7.1(a), enumerates the same helmet-push** — *"helmet-to-helmet or facial-protector-to-facial-
protector contact, without the use of excessive force."* **Writing it up as EIHL-distinctive would
have reproduced today's attribution failure exactly.**
⚠️🔴 **THE REAL HAZARD: USA HOCKEY HAS NO DOUBLE-MINOR TIER AT ALL.** `usah.txt:4284`, **Rule
619(a)**: *"A major plus a game misconduct penalty shall be assessed for head-butting an opponent"*,
with 619(b) adding a match penalty for reckless endangerment. ⚠️ **A reader who learns "head-to-head
push is four minutes" and plays under USA Hockey is EJECTED — and a USA Hockey game misconduct
carries into the next game (404(b)).**

⚠️ **The warm-up section's core divergence is the same shape, pointing the other way:** USA Hockey
502(b), Hockey Canada 2.2(j) (*penalty served at the start of the game — the team opens
short-handed*) and CARHA 27(b) all **penalise** warm-up contact, while **IIHF Rule 5.6 — the book
most British readers are under — says *"No penalties are to be assessed but a report of the incident
must be submitted to the Proper Authorities."*** ⚠️ **The document frames it as *"a change of route,
not a discount"*, because supplementary discipline has no five-minute ceiling.** **The agent's own
judgement: *"voiced alone, 'no penalties are to be assessed' would have been the single most
dangerous sentence available here."***

⭐ **THE RENDER FOUND FIVE INVERTED OR DANGLING FACTS LINES THAT `check_facts_antecedents.py`
RETURNED ZERO HITS ON** — *"The IIHF defines **it** as…"*, *"gives **the same tier** two
examples"*, *"the EIHL reaches **a fake**"*. **The tool could not see any of them. This is the pass
that earned its keep.**
⭐ **The `HARD_MAX` constraint held with NO SPLIT NEEDED:** the 2nd-major hedge went in **in place**
by substituting *"not the IIHF's 2+5+game misconduct"* for a longer clause — **and the substitution
is MORE robust, because IIHF 46's tiers are identical across editions while its NUMBERS are not.**

- [ ] 🔴 **DISPATCHED: a fresh `safety-reviewer` on the ~90 new lines.** ⚠️ **The author flagged
      itself: *"I wrote ~90 lines of new safety text and then reviewed it myself, which is the one
      thing this project's method forbids"*, and named its own weakest sentence — the composed
      closing instruction *"keep your feet, keep your gloves on, keep your head out of theirs"*,
      **coaching craft it wrote, not sourced wording.**
- [ ] ✅ **`sources/README.md` CORRECTED — it was SELF-CONTRADICTORY.** It said the Rule 9 sections
      *"(9.5 and 9.12) HAVE BEEN READ"* and listed **9.12 among those NOT read, in the same
      sentence.** ⚠️ **An agent acting on the "not read" half re-read 9.12 from scratch — the routing
      failure that file exists to prevent, caused by that file.** **Replaced with a pointer to
      `uk_rules.md`, which owns the read-scope claim, because a list goes stale and a pointer does
      not.**


### ✅ BREAKOUTS + SPECIAL TEAMS — all seven repaired, and THREE MORE of the same class found

⭐ **THE 8/8 PROBLEM WAS SOLVED BY SUBSTITUTION, AND THE METHOD IS REUSABLE.** Both blocks sat at
**8/8 coaching with 0 `Rule:` lines**, so no tenth line was possible. **Reverse:** a `Technique:` and
a `Key:` merged into one 194-char line, freeing a slot. **Rim:** `Position:` folded into `Read:` —
**the `Action:` line already named the far-side winger, so nothing was lost.** ⚠️ **No caveat traded.
Both blocks are still 8/8.**

⭐ **TWO WORDING CHOICES THAT ONLY THE RENDER COULD HAVE SETTLED:**
**(1)** The first draft opened `Never: Take the contact…` — ⚠️ **voiced alone that risks INVERTING
INTO AN INSTRUCTION.** The prohibition now leads: *"Never — Your back to the boards on a reverse,
and never duck — take the contact…"*, confirmed in SSML.
**(2)** It names the play (`on a reverse` / `on a rim`) rather than *"on this play"*, ⚠️ **which
would be a dangling antecedent for a listener hearing the line alone.**

⭐ **THE FACTS CRITICAL WAS FIXED IN THE RIGHT ORDER: the body did not state it, so the agent WROTE
THE BODY SENTENCE FIRST AND EXTRACTED FROM IT.** *Extract, never author* — honoured. Every
delay-of-game citation located in primary text this session, with **CARHA scoped *"in
CARHA-affiliated adult leagues only"***.

**The five rule-scope defects, all verified in primary text:** IIHF 81.4's **fourth** exception
quoted from two editions; **USA Hockey 624(b)(1)** moved into **its own `Rule:` line** so it is
voiced as its own unit — ⚠️ **a `Rule:` line does not count against `MAX_COACHING_FACTS`, which is
why it fitted** — with the body now stating the below-Youth-15 consequence; `special_teams.md` KT3
rewritten to **name the books**, having verified **USA Hockey attaches NONE of the three** (636(f)
gives a time-out at any stoppage with no icing carve-out; 624(a) has **no choice-of-dot clause**) and
**Hockey Canada writes only the no-change bar** and **positively permits the time-out**; the dangling
antecedent and the Senior-option ambiguity both fixed by substitution; the CARHA scope flag restored.

#### ⭐ THREE MORE DEFECTS OF THE SAME CLASS, FOUND BECAUSE IT WENT LOOKING

- **`breakouts.md` §1 block** — *"That no-change bar is not universal…"*, the same dangling
  antecedent, **listed by `check_facts_antecedents.py`**. Fixed by substitution.
- **`breakouts.md` 6-on-5 block** — *"That freeze does not strand your goaltender…"*, same shape.
- ⚠️ **`special_teams.md` faceoff block** — *"Never: Fire a loose puck the length of the ice while on
  the power play — you hand the kill the dot and freeze your own tired unit"* was **UNSCOPED AND
  VOICED ALONE — KT3's defect reproduced in the extraction layer.** **And `special_teams.md` KT10
  and `breakouts.md` KT10 carried the same unscoped dot-choice clause.** All three now scoped.

#### 🟠 OPEN — two judgements it deliberately left, and one it called bigger than its brief

- [ ] **Does the posture limb belong in Common Mistakes BY NAME for the reverse and the rim?** The
      bullet *"Running a control breakout with nobody moving"* carries it **generically, for a posted
      winger**. ⚠️ **It declined to add a fourth restatement** — the style guide's own *"a third
      restatement is one more place for a correction to fail to reach"*. **A layer test decides.**
- [ ] 🔴 ⚠️ **A SECOND SAFETY LIMB, AND IT IS ARGUABLY WORSE THAN THE ONE JUST REPAIRED.** In its own
      words: *"The posture limb I added is about **receiving** contact, which is level-independent —
      but **a reader under a non-checking classification is still not told that the forechecker
      arriving behind them should not be hitting them.**"* ⚠️ **The posture limb answers *"how do I
      take this hit"*. It does NOT answer *"should this hit be happening at all"* — and a young or
      recreational player taught only the posture has been quietly told the contact is normal.**
      **Routed into the live corpus-wide census as a SECOND, SEPARATELY-REPORTED COLUMN**, with the
      warning that it is more likely than the first to produce false positives and that a section
      routing to the contact-status owner may be correct as it stands.
- [ ] **The major-arising-5-on-4 carve-out was deliberately left out** — *"rare, and adding it would
      have pushed the KT past readability for no safety gain."* **Recorded as a decision, not an
      omission.**

#### ⚠️ Bounds, and a staging warning

- [ ] **KT6's posture limb is a CORPUS-WIDE safety constant**, and it checked only its own two
      sections — **`defender.md`, `body_contact_and_battles.md` and `playing_without_the_puck.md`
      were all held by live agents.** **The census now running covers this.**
- [ ] **Free-text rule paraphrases elsewhere in §§1–7 and 9–10 of both files were NOT re-verified.**
- [ ] ⚠️ **STAGING: both files were already `M` at session start, so their diffs contain
      pre-existing work that is NOT this pass's** — named examples: the `Related:` line gaining a
      Special Teams link, and a `Position:`/`Action:` → `Convention:` relabel in the winger block.
      **Do not attribute those to this pass.**
- [ ] **It did NOT run `check_counts.py --update`** — correctly, as coordinator-owned shared state
      with agents live.


### ✅ THE 9.5 SCOPE REPAIR — it was a FOUR-OF-SIX repair, and the sixth was a different defect

⚠️⚠️ **EVERY LINE NUMBER IN THE COORDINATOR'S BRIEF WAS WRONG. THE SUBSTANCE WAS RIGHT.**
Both sentences I attributed to `:129` are on **`:120`** — and **`:129` is the MOUTHGUARD bullet.**
⚠️ **The agent's own words: *"Had I pasted against `:129` I would have edited the wrong rule."***
**This is the *"the brief's proposed wording is a brief, not a patch"* rule earning its place for the
second time today, and the first time it was an ADDRESS rather than a sentence.** **Line numbers in
a brief are hints to search from, never addresses.**

⚠️ **AND THE BRIEF MISSED THE BIGGER HOLE.** `equipment.md:119` — the **Home Countries (In-House
Rules)** bullet, *the bullet a non-EIHL British reader actually reads* — **carried no 9.5 ladder at
all, in any form.** **Fixing only my four named sites *"would have left the ladder appearing
exclusively inside Elite League bullets."*** **Repaired across SIX voiced layers, all verified in
de-tagged SSML (73 chunks).**
**Also repaired in passing: three bare `9.5`s the renderer voiced as *"nine point five"* with no
*"Rule"*.** A listener now always hears *"Rule nine point five."*

#### 🟠 The propagation check answered — (a) clean, (b) NOT clean, (c) a stale disclosure

**(a)** The 9.5 mis-attribution **does not appear** in `rules_primer.md` or
`playing_without_the_puck.md` — neither carries the ladder at all.
**(b)** ⚠️ **The *"not automatic"* boarding/charging/elbowing claim SURVIVED IN BOTH**, and was
repaired at five sites: `rules_primer.md:419` (listing boarding 41.4, charging 42.4 and elbowing
45.4 under IIHF Table 7's *"based on the Referee's judgement"*, **under a heading reading *"under the
book British hockey runs on"* — all three are the ones the EIHL takes out of the referee's hands**),
`:450`, `:451` (which said in terms the game misconduct is *"a judgement call"*), `:454`, and
`playing_without_the_puck.md:631`. ⚠️ **`playing_without_the_puck.md:935` and its `Rule:` fact at
`:618` both said Hockey Canada 8.5(b) is *"the only one"* to remove discretion** — scoped to *"those
four rulebooks"* with the EIHL added.
⚠️ **Two of its own drafts were caught by its own diff and its own SSML** — `:454` left *"a lower
threshold than intent"* dangling, and the first `:935` draft **interrupted *"it will be assessed…
not may"* and read wrong aloud.**

**(c)** ⭐ **A STALE DISCLOSURE WHOSE OWN QUESTION WAS ANSWERED IN THIS REPOSITORY.**
`rules_primer.md` asserted **in two places** that *"the EIHL's own Casebook has not been read here, so
the Elite League entry rests on no source read for this document."* ⚠️ **False as of today** — and
**the disclosure's own question is answered by the Casebook's scope paragraph** (`:109-111`).
⚠️ **This is the `sources/README.md` species named in CLAUDE.md: a negative answered elsewhere in
the repository that nobody propagated to it.** **The disclosure was made ACCURATE, NOT REMOVED** —
it still says the Casebook is read only for the provisions cited. **And `rules_primer.md` gained a
Sources trailer entry for a book it now quotes four times and previously cited nowhere.**

#### 🔴 ROUTED — the same defect, in the document `equipment.md` POINTS AT

- [ ] **`uk_rules.md:146` frames the 9.5 escalation as the EIHL's**, and **nothing in the document
      says it is IIHF 9.5, unamended, and therefore every British player's** — a grep for
      `Delay of Game`, `third time` and `escalation` returns that one line. ⚠️ **A British reader
      sent there from `equipment.md` AS THE OWNER finds it attributed to the Elite League or
      absent.** **Routed to the live holder, with the `:119`-shaped structural warning attached.**
- [ ] **A DISCLOSED omission that may no longer be the right call:** `uk_rules.md:391` says only four
      Casebook rules are reported, **so Rules 41, 42 and 42-elbowing were read and deliberately not
      reported.** **Honest and disclosed — but safety-relevant in the British OWNER document, and
      `body_contact_and_battles.md:568` now carries it.** Routed.
- [ ] **Provenance for `source-verifier`:** the download is labelled *"Version 1.1 (8 September
      2026)"* and `uk_rules.md:391` repeats it, ⚠️ **but `grep -o "SECTION [A-Z] VERSION [0-9.]*
      [0-9]*" … | sort -u` returns EXACTLY ONE stamp: `SECTION D VERSION 1.0 010826`.** **So a claim
      of an end-to-end read of "Version 1.1" needs the caveat that the body read is footered 1.0.**
      **The other two trailers now flag it.**

#### ⚠️ The bound that matters most, in the agent's own words

- [ ] ⚠️ **ITS PROPAGATION PASS WAS A GREP FOR THE DEFECT'S *VOCABULARY*.** *"A sentence saying
      **'in Britain the worst you face for a neck guard is ten minutes'** states the same error and
      matches none of my patterns."* ⚠️ **That is the `kickshot` failure in its propagation form,
      and it applies to EVERY propagation grep run today.**
- [ ] **It read 3 documents and grepped 2; 36 were not opened.**
- [ ] ⚠️ **Its own new text is unreviewed, and it named the weakest claim itself:**
      `rules_primer.md:419` now asserts the EIHL displaces a *discretionary* IIHF tier — **it
      verified the game misconduct is mandatory on a face/head injury, but NOT that the EIHL's
      boarding/charging/elbowing MAJOR thresholds are otherwise the IIHF's**, which the Casebook's
      scope paragraph implies but does not say rule by rule.


### ✅ THE TWO FACTS-LAYER REPAIRS — done, and BOTH BLOCKS ARE NOW CLOSED AT HARD_MAX

**Corpus 5,739 → 5,742 facts. Six exact-string replacements, every one asserting a unique match.**

#### The fighting block — split, and TWO deliberate deviations from the coordinator's sketch

⭐ **Both deviations were made after reading the SSML, and both are right.**
**(1)** The draft opened *"An EIHL instigator penalty is not ten minutes late in a game"* — ⚠️ **voiced
alone that parses momentarily as *"ten minutes late"*.** The safety point now leads instead.
**(2)** It **dropped the quotation marks** around the timing limb: ⚠️ **the verbatim *"in the final
five (5) minutes"* renders as *"in the final five (five) minutes"* in the SSML — a stutter that
costs more than the verbatim buys**, with the penalty quantum beside it still quoted word for word
and the sibling already paraphrasing the identical limb the same way.
⚠️ **THE BLOCK IS NOW 14/14 — `HARD_MAX`, CLOSED TO ANY FURTHER FACT, `Rule:` INCLUDED.** 10 `Rule:`
+ 4 coaching, **so the coaching cap is not what binds.** **Any future rulebook fact for this section
requires SPLITTING THE SECTION, not evicting a fact.**

#### ✅ COORDINATOR CLOSED THE ONE CLAIM THE AGENT HANDED ON — and the answer is STRONGER than assumed

The agent flagged that it carried the 2026/27 attribution to the **46.10** comparison *"on the
strength of the Preamble the body quotes, which is a structural inference, not a located sentence"*
— **the one claim it would hand on. Measured this round:**
- **`iihf_rules_2026-27.txt:4254` — `46.10. INSTIGATOR`**: *"shall be assessed an instigating minor
  penalty, a major penalty for fighting and **an automatic game misconduct**."*
- **`iihf_rules_v1.1.txt` — the SAME TIER IS `46.3. INSTIGATOR / INITIATOR`**: *"a minor penalty
  (Instigator / Initiator) plus a major penalty ("Fighting") and **an automatic game misconduct
  penalty (2'+5'+GMP)**."*

⚠️ **SO THE SUBSTANCE IS IDENTICAL IN BOTH EDITIONS AND ONLY THE RULE NUMBER MOVED (46.3 → 46.10).**
**The published sentence is TRUE AS WRITTEN and merely narrower than it needs to be** — the EIHL's
departure from the IIHF is **edition-independent**, and it is the *number* that travels badly, not
the tier. **Not a defect. Recorded as a refinement available to the next wave, not dispatched.**
*(Incidental: 2026/27 adds *"(or season)"* to the instigator criteria where v1.1 says only
*"in the game"*. Unused by the corpus.)*

#### The goaltender block — split into THREE, because two would have cost a hedge

⚠️ **My brief predicted 13/14 and was wrong: it assumed a two-way split, and the two-way split could
only be had by dropping a limb.** The agent's reasoning: *"the three criteria plus the
addition-not-replacement point plus the review limb is 370+ characters as one line and 600+ as two,
and **I will not trim a hedge to make a cap**."*
⭐ **AND IT CAUGHT ITSELF RESOLVING THE TENSION:** its first draft read *"so IIHF 69.7 still allows
incidental contact and the goal"* — ⚠️ **which reads as a RESOLUTION** — and it replaced it with the
body's own *"is not repealed"* formulation, **for exactly the reason the `safety-reviewer` gave.**
**The conservative default is carried as *"assume neither reading, ask"*.**
⚠️ **This block is ALSO 14/14 — closed.** 13 `Rule:` + 1 coaching.

- [ ] ⚠️ **TWO BLOCKS IN TWO DIFFERENT DOCUMENTS ARE NOW AT `HARD_MAX` ON THE SAME DAY.** Neither can
      take another fact. **The next correction that needs to reach either section has nowhere to go
      but a section split** — **and a block at cap evicting a rulebook fact is precisely the failure
      `check_facts.py --near` was written for.** Flag this before the next content wave.

#### The `Never:` label question — flagged, NOT changed, and the reasoning improved the answer

The agent was asked to flag rather than decide `:107`, and came back with a stronger position than
"be cautious": ⚠️ **`:106` is ALSO a `Never:` on the same kind of instruction, and the two are a
deliberate PAIR** — both guards against a specific wrong inference about what binds the reader.
**Relabelling one alone *"would break the pair and leave the block asserting that one of two
identical acts is a hard constraint and the other is not."*** **It is `content-reviewer`'s call, and
it is a call about BOTH lines or neither.**

#### ⚠️ Two gaps the agent declared against itself

- [ ] ⚠️ **IT DID NOT RUN THE WHOLE-FILE DIFF, AND SAID SO PLAINLY.** *"Both files were already `M`
      at session start… a diff against `HEAD` is dominated by other agents' work that I must not
      judge or touch, and I could not separate mine from theirs without a baseline I do not have."*
      Its substitute — unique-match asserts plus re-reading the five-line neighbourhood — **proves it
      changed only what it intended; it does NOT prove another agent has not written something into
      these files that contradicts its new facts.** ⚠️ **THE CONTRADICTION CHECK IS THE
      COORDINATOR'S AND IS OWED BEFORE STAGING.**
- [ ] ⚠️ **A LEAD IT FOUND ONLY WHILE WRITING ITS OWN REPORT, and it marked it unverified:** the
      Casebook's *"2nd Major Penalty"* is **not scoped — in-game or across the season is not
      stated** — and the body at `:1561` flags this **in terms**, while *"neither block carries
      it."* ⚠️ **Its own account of why: *"I read the body looking for the limb I had been told was
      missing."*** **Treat as a lead, not a defect: it has read the body sentence but not tested
      whether any fact covers it.**
- [ ] **Neither repair opened the Casebook.** *"If `:1047`, `:1049` or `:1561` misquote it, I
      propagated the misquote faithfully."* **`rules-verifier` owns that.**


### ✅ THE POINTER MINORS — all three confirmed, and TWO WERE WORSE THAN RELAYED

#### m2 — the call register: fixed by ADDING the call, not by cutting it

*"I've got F1"* was **nowhere in `on_ice_communication.md`** — `grep -n "F1\|F2\|F3"` returned
**zero hits across the whole file.** ⚠️ **The count lived at ONE line only** (`:630`), stated in no
other layer — not the facts blocks, not Common Mistakes, not the sixteen Key Takeaways — **which is
why it was safely movable**, and the agent checked that before choosing.
**Chosen fix: label, don't delete** (non-negotiable 1 — the claim is unsourced, not contradicted),
**and the register already teaches the same *"I've got &lt;assignment&gt;"* family in prose at
`:395`.** F1/F2/F3 are now **defined on first use in that document**, per the stand-alone rule.
⚠️ **The render caught the agent's own first draft: it wrote *"and "I'm high" ABOVE claims…"* — a
LAYER POINTER A LISTENER CANNOT FOLLOW — and rewrote it.**

✅ **COORDINATOR VERIFIED THE COUNT THIS ROUND, because the agent named it as its own blind spot**
(*"if a sixteenth undocumented call is taught in the goaltender or faceoff sections, the count I
just moved is still wrong, and I would not have seen it"*). **Measured: 15 daggered entries in the
file, and the list at `:632` names exactly those fifteen — `turn, eat it, with you, outlet, net
front, sag / collapse, odd man, I'm high, I've got F1, my man / I've got him, pick him up / take the
middle, I've got the pass / take the shooter, I've got first player off, stay, next shift`.
Consistent. No sixteenth.** ⚠️ **Bound: this checks calls that CARRY A DAGGER. An undocumented call
taught with no dagger is invisible to it.**

- [ ] ⚠️ **COST TO RECORD: that block is now at 8/8 non-`Rule:` facts, ZERO headroom.** It passes
      (the gate trips at *more* than 8) **but the next line added there fails or evicts.**
      `facts-reviewer` should also decide whether the new `Action:` line duplicates the block's
      existing `Key: The player who can see it makes the call`.
- [ ] **A NEW daggered disclosure and a MOVED disclosure count are both new `check_disclosures.py`
      hits, attacked by nobody but their author.** ⚠️ **Its own words: *"that is an absence I looked
      for, not an absence I proved."*** ⚠️ **And the round-59 direction applies — if this class is
      attacked from the other side, the right answer might be a CITATION rather than a dagger.**

#### m1 — the dump enumeration: the relay UNDERSTATED it in two ways, both verified

1. ⚠️ **The defect was in the FACTS LAYER too**, not only the body. `:638` read *"Options: Three
   kinds of dump…"* — **voiced alone with a 300 ms break either side, so the wrong enumeration was
   reaching the listener naked.** ⚠️ **A document-level grep for the body sentence would have
   cleared it.**
2. ⚠️ **The rest of the corpus ALREADY AGREED with `zone_entries.md`, so `forechecking_systems.md`
   was the SOLE DIVERGENT COPY** — `winger.md:222`, `winger.md:699` (*"Name three of **the five**
   kinds of dump-in"*), `zone_entries.md:1110`, `offensive_zone_play.md:778`. **Nothing else in
   `content/` says "three kinds of dump".**

**`zone_entries.md` was checked for over-splitting and is NOT over-split** — §2 places the puck to
*die* so your chaser wins a race to a stationary puck; §3 puts it down the wall past a committed
defender **and you collect it yourself**, *"a possession play, not a surrender"*. **Different read,
different technique, different outcome.** ⚠️ **And the old wording was wrong on its own terms as
well as conflated: the chip goes DOWN THE WALL, not *"into the corner"*.** **No edit to
`zone_entries.md` — the target was right.**

#### m4 — the one-way link, added deliberately rather than decoratively

`grep -n "forechecking_systems" content/positions/defender.md` → **zero, header included**, against
four siblings that carry it. ⚠️ **The agent established WHAT the reader would be sent for before
linking:** `defender.md`'s two pinch sections teach *who* pinches and *that only one does*, and
stop; `forechecking_systems.md` §"When to pinch" carries the **timing test** and the **book-by-book
limits on what you may do to the winger once you reach the wall.** **That second half is a penalty
exposure a defenceman meets more than anyone — which is what makes the link worth making.**
⚠️ **Attribution careful: *"carries the coaching test most teams use"*, NOT "the rule", and NO BOOK
COUNT written into it.**
⭐ **THE MIRROR-DEFECT CHECK WAS RUN, BOTH DIRECTIONS.** The link is about pinch *timing* and *wall
legality*, **not** the weak-side defenceman; and `forechecking_systems.md:333` **agrees** with
`defender.md:532`. **No contradiction created either way.**

#### 🟠 A Major found in passing, and it is the round-10 shape again

**`defender.md:536` — a "Key considerations" summary paragraph repeated a safety comparison BARE**,
100 lines after its owner: *"An offensive-zone pinch is safer than a neutral-zone pinch because your
forwards are still in the zone behind you."* ⚠️ **The owning sentence at `:429` — and its facts line
at `:419` — both carry the qualification: *"Read what that compares, though: rushes coming back at
you, NOT what the two plays do to a body."*** ⚠️ **Read alone, the summary tells a defenceman a
pinch is the safer play full stop.** **The existing qualification was propagated VERBATIM rather
than a new one written.** **`safety-reviewer` hand-off: new text touching a pinch, a penalty and an
injury comparison.**

#### ⚠️ The blind spot worth acting on — a REVERSE census nobody has run

- [ ] ⚠️ **The audit checked the direction it pointed: which documents `forechecking_systems.md`
      points at falsely. NOBODY HAS RUN THE REVERSE** — *"which documents does it FAIL to point at,
      and which documents point at IT for something it does not hold?"* ⚠️ **The `defender.md` gap
      existed for exactly that reason and was found by an audit of a DIFFERENT file. There is no
      reason to think it is the only one.** **A corpus-wide census of `Related:` headers against the
      material actually shared would find the rest.**
- [ ] ⚠️ **The five-way divergence was proved confined by grepping THE CORPUS'S OWN NAMES for the
      plays.** *"A document that describes the same conflation without using any of those words is
      invisible to that method"* — **the `kickshot` failure in miniature.**
- [ ] ⚠️ **`project/content_style_guide.md` EXCEEDS THE READ TOOL'S SIZE CAP** (2,804 lines, 260 KB)
      and was read only in the sections judged relevant. **That is a standing constraint on every
      agent, not this one's failing, and it is not written down anywhere else.**


### ✅ THE 2-1-2 CARDINAL-RULE FLAG WAS A FALSE POSITIVE — and reading it found a real Major

⚠️ **The flag — that `forechecking_systems.md` presents only one F3/D arrangement for the 2-1-2 —
DOES NOT HOLD.** The corpus already names the alternative **in four layers**: body `:294`
(*"**Which side F3 sits on is a genuine coaching split, so find out which your team runs**"*, naming
weak-side default against the strong-side stacked variant and what each buys), the facts layer
`:278` as a `Convention:`, Common Mistakes `:885` (*"Know which you are running before you decide
someone is out of position"*), and the `forecheck-212` **caption**, which names three details as
coaching choices — **plus a second diagram, `forecheck-212-stacked`, that draws the alternative.**
⚠️ **The external site's arrangement is the corpus's own default plus its named press variant. It
was never a missing variant.** **Tenth time today the answer was already written down.**

**The both-defencemen half is handled too, and the section is exemplary** — `:591-617` names a real
alternative without inventing it (*"a five-man rotation or … a standing green light … That is a real
system, not a mistake; it just is not the one this document assumes. Ask which yours is"*), gives
**three** arrangements for the vacated point, and carries the hedge into Key Takeaway 6 and Common
Mistakes. **Siblings checked and adequate:** 1-2-2, 1-3-1, 2-3 / left-wing lock, 1-4, full press.

#### 🟠 THE REAL FINDING — an internal contradiction between two sections, repaired

`### The three jobs, in general terms` stated F3's job as taking away **the middle of the ice**,
unscoped — while `### 1-3-1` in the **same document** assigns the middle to **a defenceman** and
puts F3 **on a wall** (`:390`, *"conventionally F2, F3 and one defenceman, with the defenceman in
the middle as the read-maker and the two forwards on the walls"*), as does the `forecheck-131`
caption.
⚠️ **The facts line `:148` is the dangerous half: voiced ALONE with a 300 ms break either side, a
listener gets "F3 takes away the middle" as F3's job FULL STOP.** The nearest hedge (`:151`) does
not reach the claim. **Repaired in both layers**, scoped to the system, no fact evicted, no `Rule:`
line touched. **Evidence was the document's OWN prose and caption — nothing imported from the
external site or from memory.**

#### 🔴 OPEN — the pointer-both-ways check was NOT run, and the agent said so plainly

- [ ] ⚠️ **`forechecking_systems.md` tells the reader that `neutral_zone_systems.md`,
      `offensive_zone_play.md`, `center.md`, `winger.md` and `defender.md` carry the variants —
      and NOBODY HAS CONFIRMED THEY DO.** ⚠️ **A pointer can propagate an arrangement outward from
      a document that never states it**, which is the dangling-"covered over there" failure in its
      outbound form. **Files are now free; dispatch it.**
- [ ] ⚠️ **IS THE 1-3-1 "conventionally F2, F3 and one defenceman" SUPPORTED BY ANY SOURCE ON
      DISK?** The agent verified it **only against the document's own caption, which shares its
      wording and may share its origin.** ⚠️ **That is not corroboration, it is the same claim
      twice** — and it is now load-bearing, because the repair above scopes F3's job to it.
      **Possible folklore. Attack it.**
- [ ] **Not read line by line:** `forechecking_systems.md:621-881` (Off a Dump-In, The Trapezoid,
      Choosing a Forecheck by Game State, Reading the Opposition's Forecheck) — **grepped only**,
      so *"a bare arrangement statement phrased without the words I searched for would have
      survived."*
- [ ] **`facts-reviewer`:** `:148` is now a longer `Position:` line — **read it voiced alone.**
      **`site-reviewer` / caption owner:** the `forecheck-212` and `forecheck-131` captions were
      read as evidence and **neither was edited**; the 1-3-1 caption is consistent with the repair.


### ✅ `equipment.md` — the neck-protection tier now reaches four voiced layers, and an attribution was caught in passing

**Both relayed defects confirmed against primary text before acting.** Casebook 9.5 (`:255-272`)
opens by listing *"neck laceration protection not being properly worn"* among the things officials
respond to, then sets the ladder: warning → penalties under Rule 12 → *"If the Player refuses, they
shall be assessed a minor penalty for 'Delay of Game' and if they return to the ice without making
the change, they shall be issued a misconduct penalty. Should this happen a third time, the Player
shall be issued a game misconduct penalty."*

⭐ **THREE THINGS THE BRIEF DID NOT CARRY, AND THEY MATTER:**
1. ⚠️ **The 9.5 ladder is the IIHF's OWN wording, verbatim** (`iihf_rules_v1.1.txt:1225-1231`).
   **The EIHL's contribution is the OPENING EXAMPLE LIST**, adapted from IIHF **202.7** — the
   Casebook **adds `no mouth guard` and `neck laceration protection not being properly worn`** and
   re-hosts it under 9.5, **which is what routes neck protection onto this escalation instead of
   202.7's flat ten-minute misconduct.** Flattened, that phrase returns **0** in
   `iihf_rules_v1.1`, `iihf_rules_2026-27`, `iihf_situations_v1.1` and `eiha_inhouse_2026-27`, and
   **1** in both EIHL extractions. **A genuinely EIHL-only construction.**
2. ⚠️ **THE ESCALATION IS CONDITIONAL, NOT AUTOMATIC** — rungs two to four are triggered by
   *refusing* and by *returning to the ice without making the change*, **not by a bare third
   violation.** *"A third offence is a game misconduct"* flat **would have been an overstatement**,
   and the agent said so rather than writing it.
3. ⚠️ **The Casebook prints 9.5 and 9.12 SIDE BY SIDE WITH NO SENTENCE RECONCILING THEM.** Disclosed
   rather than ordered by invention; the reader is given the safe reading and told it is a reading.

**Why the defect survived, and it is instructive: `equipment.md` ALREADY CARRIED the 9.5 ladder —
attached to the MOUTHGUARD bullet.** The text was in the file, on the wrong item. **A document grep
for the ladder would have cleared this file.**

**The mouthguard self-contradiction:** the **lead** was repaired, not the substance —
*"mandatory for every skater, with no cage exemption"* / *"excuses no skater"* / *"Goalkeepers are
the one exception the Casebook does write"*.

⚠️ **`equipment.md` HAS NO ` ```facts ` BLOCK AT ALL** (0 fences; `check_facts.py` reports 26
in-scope documents and this is not one), so its voiced layers are Key focus / Overview / Common
Mistakes / Check yourself / Key Takeaways. **The tier now reaches four of them**, verified through
the real renderer (72 chunks, de-tagged SSML read). ⚠️ **`:20` Key focus had the word *"only"*
before *"minor"* — voiced alone that read as a CEILING. Deleted.**

#### ⭐ An attribution drift caught inside a hunk the agent was already editing

Key Takeaway 5's quotation *"If a neck guard comes off during play, the player must leave the ice
and cannot retrieve it"* is the **IHUK In-House Rules** (`eiha_inhouse_2026-27.txt:278`), **not the
Casebook** — flattened it returns **0** in both EIHL extractions. It sat immediately after the
Casebook clause and **read as the Casebook's**. ⚠️ **The agent's own insertion would have made it
worse.** `equipment.md:712` already attributed it correctly, **so this was layer-local attribution
drift — the exact class `check_quote_drift.py` is blind to, because it keeps the closest match
across ALL sources.**

- [ ] 🔴 **`safety-reviewer` REQUIRED BEFORE COMMIT — the agent asked for it by name.** It is
      protective equipment **and** a penalty tier that ends a player's game. Two specific questions
      it raised about its own text: **(a)** whether the conditional framing (*refuses* / *returns
      unchanged*) is the right balance between accuracy and a listener hearing one sentence;
      **(b)** whether *"the safe reading is 9.12 for turning up without one and 9.5 for being told
      and not fixing it"* **is too confident given the Casebook reconciles nothing.**
- [ ] **`uk_rules.md` should be checked for the same stop-at-9.12 defect** — and `:410` carries the
      In-House neck-guard rule, making it the natural host for the 9.5 ladder in full. **It is also
      the file `equipment.md:120` now sends readers to.**
- [ ] **`goaltender.md`:** the **throat-protector sentence is printed TWICE in the Casebook**, at
      9.5(4) and 9.12 (`:317-320`, `:383-384`), identical but for *"of material"* / *"of a
      material"* — **a document quoting one should cite which.** Also: the goalkeeper mouthguard is
      **recommended, not mandatory**.
- [ ] ⚠️ **The agent's own bound: it read the Rule 9 sections and the five summary layers, so
      A STOP-AT-RUNG-ONE DEFECT OF THE IDENTICAL SHAPE MAY SIT IN THE HELMET, FACIAL-PROTECTION OR
      JEWELLERY BULLETS**, which were not compared against Casebook 9.5 clause by clause.
- [ ] **4 `check_quote_drift` hits in `equipment.md` are PRE-EXISTING and none is the agent's** —
      lines 113, 446 (×2) and 711, `hc.txt`/`iihf_rules.txt` case-and-terminal-period drift.
      Reported, not repaired; outside its brief.


### ✅ CASEBOOK WAVE 2 — goalkeeper, equipment and game operations; `goaltender.md` repaired

⚠️⚠️ **THE BRIEF WAS SHORT IN THE AGENT'S OWN SUBJECT AREA, AND THAT IS A NEW SHAPE.** It named
Rule 11 (Goalkeepers Equipment) and Rule 12 (Illegal Equipment) as the equipment sections. **The
substantive equipment rule is Rule 9 (`:254-341`), which the brief did not name at all** — while
**11.9, 12.4 and 12.5 are one sentence each and all three say the same administrative thing**
(*"EIHL Hockey Operations is the determining body where reference is made to the IIHF"*).
**An agent working the brief's list literally would have read three administrative stubs and missed
the substantive rule, including its two goalkeeper carve-outs.** ⚠️ **A brief can be short in
exactly the area it was written to cover.** Ninth relayed-list defect today.
**Rule 64 (Diving) also carries a goaltender passage and sat outside both ranges.**

#### 🔴 THE HIGHEST-VALUE FINDING — EIHL Rule 69 is a REAL divergence, and it is an ATTACKER hazard

`:770-778`, identical in the plain twin at `eihl_casebook.txt:742-749`, headed **"EIHL Addition to
the IIHF Rule Book"** — three criteria for goaltender interference, of which criterion 3 reads:

> *"Was the contact made inside (or outside) of the crease? **Contact in the blue paint area calls
> for disallowing a goal.**"*

⚠️ **On its face it carries NO incidental-contact carve-out.** IIHF 69.7 lets a goal stand on
incidental contact in a rebound or loose-puck scramble; **the Casebook does not repeat that, and
does not say whether criteria 1 and 2 qualify criterion 3.** **So a net drive that is legal under
IIHF 69.7 may kill the goal in the EIHL.**
⚠️⚠️ **THE AGENT DELIBERATELY DID NOT WRITE THAT 69.7 IS REPEALED** — the section is headed an
*Addition*, not a replacement. It wrote that the two must be read together and that a reader should
ask their officials. **That restraint is correct and must be preserved: do not resolve an ambiguity
the book leaves open.** ⚠️ **Routed to the live holder of `body_contact_and_battles.md`, because it
is a consequence for the ATTACKER, not the goalie.** Also needs `safety-reviewer`.

#### Confirmed, quoted and written into `goaltender.md`

- **Rules 37 and 38 — the EIHL KEEPS video review and the coach's challenge**, which the IHUK
  In-House Rules delete for EIH and SIHA competition (`:444-469`, `:476-488`); 38.5 allows a
  challenge *"at any time"*, 37.3 limits review *"to the scope of the technology available"*, and
  37.7 says *"In EIHL events Goal Judges are not required."* ⚠️ **The corpus's passage was CORRECTLY
  SCOPED to EIH and SIHA and was not wrong** — but it sat with no EIHL limb beside it and a caveat
  saying the Casebook had never been read, **leaving a reader to generalise.**
- **Rule 64** (`:743-767`) — a goaltender-specific embellishment passage naming two forms, and DOPS
  *"has the ability to fine players … regardless of the call at ice level"*. **Extends the corpus's
  existing 64.1 claim; does not contradict it.**
- **Rule 84.4** (`:942-950`) — an EIHL amendment letting the shooting team's goaltender remain in
  their end zone, with a **NO goal and a misconduct** if the shooting side distracts the defending
  goaltender. ⚠️⚠️ **THE AGENT DRAFTED *"you take ten minutes"*, CAUGHT ITSELF, AND REPLACED IT —
  the Casebook does not say WHICH member of the shooting team takes the misconduct.** The document
  now says so and warns the reader not to assume it is theirs. **A self-caught fabrication.**
- **Rule 10.5** (`:343-354`) — *"EIHL - No request for measurement of a player's stick will be
  allowed"*; 10.6 and 10.7 both *"EIHL - N/A"*. **So in the EIHL an illegal paddle cannot be called
  by measurement request at all** — bears on `goaltender.md`'s paddle-length material.

#### ⭐ A SECOND STALE DISCLOSURE FOUND ONLY BY A LAYER TEST — the method working as designed

The caveat saying *"The EIHL Casebook has not been read"* was rewritten. ⚠️ **A SECOND COPY of the
same claim — *"the League runs its own Casebook that nobody here has read"* — sat at `:548` in the
trapezoid passage, and the RENDERED SSML surfaced it. A grep for the caveat's wording would not
have found it.** ⚠️ **The disclosure was NOT stripped: it was replaced with what was actually
searched and what is still not covered.**

#### Negatives EARNED, not assumed — both extractions, flattened and de-hyphenated

`trapezoid` · `restrictedarea` · `freez` · `fallingonthepuck` · `brokenstick` · `creasearea` ·
`paddle` · `icing` · `shorthanded` · `leavehiscrease` · `rule24` · `27.5` — **all zero.**
`altercation` scores 23, **all Rule 46 fighting with no goalkeeper mention, verified by reading
`:510-674`.** ⚠️ **One `27.6` hit in the layout file is a FLATTEN ARTEFACT across a line break, not
a citation — there is no Rule 27 in the book.** **21 quotations independently re-verified against
both extractions and the rendered document: 0 failures.**

#### 🟠 OPEN, routed or unresolved

- [ ] **`equipment.md:129` CONTRADICTS ITSELF INSIDE ONE BULLET** — headed *"mandatory, and with no
      way out of it"* and *"the Casebook excuses nobody"*, then two sentences later correctly states
      *"Goalkeepers are the single exception"* with the right quote (`:276-287`). **The substance is
      right; the BOLD LEAD is the defect, and it is the limb most likely to be quoted onward — or
      voiced alone in a facts line, where the correction never reaches the listener.** ⚠️ **Routed
      to the live holder of `equipment.md`.**
- [ ] ⚠️ **THE BOOK'S OWN NUMBERING ERROR: it prints "RULE 42" TWICE** — `:500` Charging and `:505`
      Elbowing. **Elbowing is Rule 45.** **Record it, do not repair it**, per this repository's
      convention for a source's own error. **A reader quoting "EIHL Rule 42" for elbowing to an
      official would be quoting charging.** Routed to the holder of `body_contact_and_battles.md`.
- [ ] ⚠️ **THE VERSION DISAGREEMENT NOW HAS A SHARPER EDGE, and it is `source-verifier`'s call.**
      `uk_rules.md` and `equipment.md` both cite the book as *"Version 1.1 of 8 September 2026"* —
      **defensible, since the front-page version table (`:5-6`) and the filename agree** — **but
      every page footer of the body text they quote reads `SECTION D VERSION 1.0 010826`.** So the
      citation and the quoted pages name different versions.
- [ ] **The resolving warm-up sentence appears TWICE and the two copies DIFFER.** Rule 86.6
      (`:992-993`) carries the *"if they see the offence take place"* limb; **the Preamble copy at
      `:120-122` does NOT, and reads as unlimited.** ⚠️ **A reader quoting the Preamble version
      states a broader authority than the rule does.**
- [ ] **Could not be settled either way:** whether EIHL goaltender-interference calls fall within
      the coach's-challenge scope. **Rule 38 does not enumerate challengeable situations and defers
      to the IIHF**, and 37.3's *"technology available"* caveat means the answer may vary by arena.
      **Written into the document as an open question rather than resolved** — correct handling.
- [ ] ⚠️ **A BOUND ON BOTH CASEBOOK WAVES: the text extractions were read, the PDF PAGES WERE NOT
      RENDERED.** `pdftoppm` was not run. **Any table, figure or sidebar that is an IMAGE in the PDF
      returns zero from both extractions and looks exactly like an absence** — and the 690 KB / 46 KB
      ratio does not by itself exclude one. ⚠️ **Every negative above inherits this bound.** This is
      the `crt6.txt` failure shape, and it has been filed four times in this repository.


### ✅ CASEBOOK WAVE 1 — teams, uniforms, discipline, Section 11 read; `uk_rules.md` repaired

**Read line by line:** `:1-136` (version table, contents, Preamble) · `:138-359` (Rules 5, 6, 7, 9,
10 — every subsection the contents names) · `:376-405` (Rule 28, Rule 30.1 opening) · `:600-709`
(Rule 46 *Fines and Suspensions*, *Automatic Supplementary Discipline (DOPS)*, Rule 47, Rule 63.5) ·
`:995-1008` (Section 11).

⚠️ **THE BRIEF'S HEADLINE AND ITS LINE RANGES DISAGREED, AND THE AGENT CAUGHT IT.** The brief said
"TEAMS / UNIFORMS / **DISCIPLINE** / WOMEN'S HOCKEY" — **and the ranges it gave excluded every line
of the discipline material**: Rule 28 at `:378`, Rule 46 *Fines and Suspensions* at `:605`, DOPS at
`:653`, all inside the 342–1002 gap assigned to nobody. It read them rather than return with the
named section unread. **Eighth relayed-list defect today, and a new shape: the brief contradicted
itself.**

**Confirmed verbatim, with the quoted fragments located:** the Preamble's supersession sentence
(`:109-112`); Casebook 9.12's scope, warm-ups-and-practice extension and warning-then-minor tier
(`:327-335`); the *"must not be modified or alternated"* clause at 9.5 (`:317-321`); and
`equipment.md:129`'s mouth-guard requirement (`:276-287`).

**BOTH STANDING NEGATIVES HOLD, measured in both extractions flattened:** `rule27` · `restrictedarea`
· `trapezoid` · `check` · `checking` · `bodycheck` · `bodychecking` all **0**; `chinstrap` · `cm` ·
`certif` all **0**.

#### ⭐ Section 11 — the negative did not break, it STRENGTHENED

The section is two lines in its entirety: *"**Section 11 - Women's Ice Hockey** / Not applicable to
EIHL Competition"* (`:1002-1003`, confirmed against PDF page 27). **And IIHF Section 11 is where
Rule 101.1 *Illegal hit in women's hockey* lives** (`iihf_rules_2026-27.txt:7591-7593`) — **the only
place the IIHF book restricts checking at all**, as `uk_rules.md:395` already says. So the one IIHF
section carrying a checking restriction is the one the Casebook marks not applicable. ⚠️ **The agent
recorded this as evidence and explicitly did NOT overstate it as the EIHL "disapplying" a
restriction that never reached a men's league.** Correct restraint.

#### 🟠 The defect found was exactly the class predicted — an EIHL claim resting on IIHF text alone

`uk_rules.md:146` argued EIHL warm-up equipment was *"already covered for every player by the IIHF
book itself"*, citing **IIHF 9.5 and IIHF 5.6**. ⚠️ **The Casebook writes its OWN 9.5 (`:259-325`)
and its OWN 5.6 (`:169-205`), and neither carries either sentence** — Casebook 5.6 is the centre-red-
line-in-warm-up and 40-to-20-minute clock; Casebook 9.5 is mouth guard, visor, jewellery, neck
protection and refusal escalation. **Under the Preamble's "replace or… supersede", that construction
is unsafe.** **Reader-facing conclusion unchanged** — Casebook 9.12 names warm-ups itself — **so this
is a sourcing repair, not a safety correction.** Repaired.

**All three read-scope statements widened TOGETHER in one edit** (`:391`, `:547`, `:553` — line
numbers verified by the agent, not trusted from the brief). ⚠️ **The honest disclosure was NARROWED,
NOT DELETED**, per non-negotiable 4: *"nothing outside Rules 9 and 86.6"* became *"outside Rules 9,
86.6 and Section 11"*, and the Section 11 text is now quoted where it does work.

#### 🔴 OPEN — a second, HARSHER enforcement tier the corpus does not carry. SAFETY-RELEVANT.

- [ ] **Casebook 9.5 (`:261-274`) names *"neck laceration protection not being properly worn"* among
      the things it covers and sets a tier the corpus does not report:** warning → penalties under
      Rule 12 → refusal is a **minor for Delay of Game** → returning unchanged is a **misconduct** →
      third time a **game misconduct**. **The corpus reports only 9.12's warning-then-minor.**
      ⚠️ **Confirmed-but-INCOMPLETE, and it is protective equipment** — a reader told the cost is a
      minor does not know a third refusal ends their game. **Owner: `equipment.md`, and it must be
      seen by `safety-reviewer`.** ⚠️ **NOT dispatched in this round** — the owner asked to stop
      after the Casebook wave and commit; this is the first row of the next one.
- [ ] **Casebook Rule 28 (`:378-388`):** *"Where there is reference to 'The Proper Authorities'
      within the IIHF Rulebook, this shall refer to the EIHL Department of Player Safety (DOPS) and
      EIHL Hockey Operations."* **Bears on every corpus sentence saying "the proper authorities" for
      EIHL play.** Census not run.
- [ ] **Casebook 9.5 Facial Protection (`:289-305`):** *"All Players must wear, as a minimum a
      visor"*, fixed so it cannot be flipped up, and a cracked or broken visor means leaving the ice
      immediately. ⚠️⚠️ **EXTRACTION TRAP — AND THE REMEDY THIS ROW FIRST GAVE WAS WRONG, TWICE
      OVER.** A page footer carrying a page number is spliced **mid-sentence** into this clause.
      Measured on 22 September 2026 for *"along the sides so that it cannot be flipped up"*:
      **raw 0 · whitespace-stripped 0 · alphanumerics-only 0 · footer-lines-deleted 1.**
      ⚠️ **This row said *"flatten before asserting absence"*. An agent corrected it to
      *"alphanumerics-only, or delete the footer"*. The coordinator then MEASURED it and
      ALPHANUMERICS-ONLY RETURNS 0 TOO.** **Stripping whitespace does not remove a footer, and
      neither does stripping to alphanumerics — THE FOOTER IS ALPHANUMERICS.**
      ⚠️ **The only remedy that works is DELETING THE RUNNING-HEADER AND PAGE-NUMBER LINES.**
      ⚠️ **Three parties in sequence gave a remedy that does not work, each more confident than the
      last, and none of the first two ran it. RUN IT BEFORE WRITING IT.**
- [ ] **Casebook 5.6(1) (`:171-176`)** makes crossing the red line in warm-up to initiate a gathering
      a suspension/fine matter **and fines the Head Coach** — bears on
      `project/reviews/after_whistle_cluster_attribution_2026-09-22.md`.

#### ⚠️ What the method could not reach — and it is a live sourcing hole

- [ ] **The Casebook points OUTWARD TWICE at documents nobody here has read:** *"EIHL Roster
      Regulations"* (`:156`) and *"Gamebook section: EIHL DOPS"* (`:386`). ⚠️ **So any corpus claim
      about EIHL rosters or supplementary discipline is STILL sourced to a document nobody has
      read** — the Casebook narrowed that hole, it did not close it.
- [ ] **The Preamble says updates are issued in-season by email and website with an *"effective of"*
      date (`:114-118`). Nothing on disk can detect one.** Combined with the three disagreeing
      version stamps, **the copy on disk may already be superseded.**
- [ ] ⚠️ **`.claude/agents/rules-verifier.md` is short again — the SIXTH recurrence.** `ls
      sources/*.txt` now returns **40**; the two `eihl_casebook` twins are on disk, registered, and
      named nowhere in that file. **Coordinator's file; fixed this round.**


### ✅ TWO NEGATIVES THE CORPUS DEPENDS ON, RE-TESTED against the newly arrived British document

Searched the Casebook flattened: `chin strap` **0** · `chinstrap` **0** · `cm` **0** · `certif` **0**.

⚠️ **So *"only the two British documents attach the 2.5 cm"* and *"no British certification mark
exists to check for"* BOTH SURVIVE the arrival of a new British source.** ⚠️ **This is the right
reflex and it should be standard: when a new source lands, RE-TEST the negatives that could have
been falsified by it.**

- [ ] ⚠️ **Casebook Section 11 (women's hockey) is the next dispatch.** `equipment.md:690` makes a
      British women's visor claim from In-House Rule 102 and says in terms it is *"a reading nothing
      published actually confirms"* — ⚠️ **and the Casebook has a women's section nobody has
      opened.**
- [ ] **Casebook 9.5 read but NOT written in** — mouth guards for all EIHL players, minimum a visor
      covering *"the eyes and nose in its entirety"* fixed so it *"cannot be flipped up"*, cracked
      visor means leaving the ice, jewellery banned, and a **minor → misconduct → game misconduct**
      escalation for refusing to change non-conforming equipment. **Owner undecided between
      `equipment.md` and `uk_rules.md`.**


### ✅ Closed this session

- **`link_baseline.tsv` — 30 rows written** (28 refreshed, 2 added) from the `skating.md` audit, plus
  4 from the IHUK Rules of Competition earlier. ⚠️ **Every note records what was LOCATED, and the
  unreachable one states in terms that the citation is UNVERIFIED, NOT DOUBTED.** ⚠️ **No note treats
  a byte count as a fingerprint** — and the PubMed row records that **5,567 is a shared wall page
  served for multiple URLs**, not a signature.

- **CLOSED — the flat breakout-trip claim in `switching_positions.md`, THREE sites not one** (facts
  line, body bullet, and the pointer sentence above the diagram). Wording taken verbatim from the
  agreed four-document form; **full system names repeated, no demonstratives.** ⚠️ **Full-label,
  full-file sweep run: all 17 blocks, 129 facts, read individually — no other flat system claim.**
  ⚠️ **`:87` was checked and CLEARED**: unscoped in itself, but a dedicated `Convention:` two lines
  down names the system and its alternatives, **and it survives being voiced alone** — the corpus's
  accepted pattern.

- **CLOSED — the boards-pin summary-layer gap in `puck_handling.md`.** ⚠️ **Both limbs carried, each
  SCOPE-FIRST**, rather than the safer-looking "USA Hockey only, point at the body" — because dropping
  the IIHF limb *"would have re-created, one layer up, the exact defect I had just repaired in the
  body."* Framed as **a limit on the opponent, not an instruction to the reader**: *"Assuming that
  being pinned on the wall is always your own mistake."* ⚠️ **It wrote NO numeral for the book total,
  deliberately — *"a count that is never written cannot drift"*** — after two counts went stale in
  that file today.

- **CLOSED — the `goaltender.md` `notfound` bucket, all 46 classified, 5 lines repaired.** One
  manufactured quotation, two terminal periods moved outside the marks where the source continues,
  and a silently-lowered capital fixed **in both places it appeared.** ⚠️ **Provenance checked on
  every external source, and TWO suspicions of the agent's own were REFUTED** — a suspected `cover[]`
  typo (a disclosed deletion) and a suspected description drift on a named coach (the page's own
  intro says what the document says). **No attribution drift found.**

- **CLOSED — the IHUK portfolio claim in `uk_rules.md`, all five layers** (Key focus, Overview, body,
  Common Mistakes, Key Takeaways), each rendered and **read de-tagged in the SSML**, each
  self-contained voiced alone with no dangling antecedent. ⚠️ **Two self-caught errors repaired
  before verification** — an In-House scope over-read, and a pre-existing *"The same document"* that
  became ambiguous once four documents were named above it. **Nothing deleted; every exclusion
  written as "not settled by these documents", never "different there".**

- ⚠️ **`CLAUDE.md` updated between waves** with two failure classes neither previously recorded:
  **a zero from a LABEL is not an absence of the RULE**, and **"you checked four books and this
  corpus holds ten."** Plus the `md_to_speech --only` bare-stem id, the **SSML-written-to-files**
  false pass, the `<sub alias>` grep artefact, and **`timeout` not existing on macOS.**

- **CLOSED — the kick-shot defect this session introduced.** Repaired in **four layers**; the facts
  block was **SPLIT rather than evicted** (11 of `HARD_MAX` 14 → two lines at 243/300 and 293/300),
  so no rule number, penalty or caveat was traded away. ⚠️ **The CARHA scope caveat is now IN the
  facts line** — it had lived only in the Sources trailer, **which a listener never hears.**
  ⚠️ **A second error was found that nobody had briefed:** the document cited the deflect-off-own-
  stick permission as **IIHF 49.2(II)**; it is **49.2(III)** — and the v1.1 extraction interleaves
  page furniture between the clause label and its text, **which is very likely how the wrong numeral
  was picked up.** The 2026/27 extraction is clean and settles it.
- ⚠️ **THE COORDINATOR'S SWEEP TABLE WAS WRONG IN A SECOND DIRECTION TOO.** It reported `usah`
  scoring **0** on `kickshot`. **It scores 3** — the plain extraction breaks the word across a line
  as `"kick / shot,"`. **So the same table was wrong about a book HAVING the term as well as about
  books lacking it.**
- ⚠️⚠️ **AND THE CORPUS ALREADY HELD THE REFUTATION.** `passing_and_receiving.md:445` carried the
  correct framing **before** the defect was written into `on_ice_communication.md`. **The propagation
  ran the wrong way: a sibling's correct text was overwritten in another file by a brief that had not
  read it.** A routing finding about the brief, not about either document.

- **CLOSED — the British period-length prose gap.** One paragraph at `rules_primer.md:88`, written in
  `:366`'s established register rather than as a new pattern, **plus a correction to the `:937` table
  row that today's earlier repair had got half-right.** ⚠️ **It added a scope limb nobody asked for,
  because `sources/README.md:1489` insists on it** — the four RoC are *"the leagues IHUK runs itself
  and nothing beyond them"*, so EIHL, NIHL National, SNL, BUIHA and Scottish competitions are not
  settled by them. **Two further source facts carried that the brief had not:** the U16/U19 asterisk
  resolves to *"the same format all season"*, and **the U10 RoC publishes no period length at all** —
  only ice-slot durations — *"so I said that rather than implying silence."*
- **PROPAGATION JUDGEMENT — split verdict, and both halves reasoned.** The **60-second buzzer**
  belongs in this document and is **already half-here**: `:366` states the buzzer and *"left where it
  is"* but **stops before the consequence** (*"Deliberate movement = warning, then minor penalty"*).
  ⚠️ **Not written — it is a second defect in a different section, and `uk_rules.md:295` already
  carries it in full, so the reader following the existing link gets it.** Recommended as its own row
  aimed at `:366` or §1. The **line-sheet breach** does **not** belong: it is roster administration
  with no section to attach to, and `uk_rules.md:296` owns it correctly.

- **CLOSED — the `uk_rules.md` U12 safety review.** One Critical and one Major found and fixed across
  five sites; the Rule Bulletin scope disclosure **independently re-verified** as scope rather than
  hedge, and confirmed **reaching a listener** in rendered chunk 035 where before it reached one
  nowhere. ⚠️ **The neck-laceration-protector caveat was re-checked and is the best-layered safety
  caveat in the file** — five layers, each survivable read alone, each naming the penalty, anchored
  to **IIHF 9.12** rather than to any IHUK bulletin, so the bulletin gap does not touch it.

- **CLOSED — CARHA 55(a) Note 1 and the USA Hockey kick-shot proviso.** ⚠️ **The layer test found a
  gap the brief had not:** facts `risk_management:325` carried *"writes no deliberateness word"*
  **voiced alone** with the deflection escape nowhere in the block, and at **296/300** nothing could
  be added to it — so a **new 13th `Rule:` line** (block was 12 of `HARD_MAX` 14) now carries the
  escape for both books, self-contained at 270/300. ⚠️ **`special_teams.md:719` and `:941` ALREADY
  carried Note 1's exemption** — *"the sibling is the evidence that it was an omission rather than a
  position."* All three enrichments applied and verified verbatim.
- **The bracketing judgement: LEAVE IT, and the coordinator's premise was wrong.** The brief said an
  inconsistency had been *created today*. ⚠️ **It had not — the pattern is identical in both files
  and both instances in each**, four occurrences, and both treatments are corpus-wide house style.
  **Bracketing the bare pair would make these two documents diverge from every other document for no
  reader benefit.**

- **CLOSED — the two repaired "As IIHF" rows REVIEWED AND UPHELD.** Every quotation and every
  hyphenation re-verified in the `_layout` twins; the WNIHL permission qualification is carried; the
  *"no amendment to Rule 77 / Rule 83"* claim confirmed **by indexing every rule-number heading in
  the In-House Rules rather than searching for a string.** ⚠️ **The read-as-a-listener test passes:**
  `:285` is voiced as its own `<p>` and **the sanction sits in the same breath as the difference**,
  so it cannot dangle. **And the document's imperative layer is safe as-is for a U12 reader** —
  *"get out, and get out cleanly"* is the same action Appendix D requires; **only the sanction for
  failing differs.** Checked specifically rather than assumed.

- **CLOSED — the U12 penalty mechanism and the bulletin scope gap in `uk_rules.md`.** Three edits:
  the invented short-handedness mechanism replaced with Appendix D's own words and two flagged
  unknowns; the Common Mistakes heading rewritten (it asserted the same unstated position); and a
  **scope** disclosure added to the body. ⚠️ **No U12 penalty-duration arithmetic exists elsewhere in
  the corpus** — `risk_management.md`'s 21.1% prices an **NHL** minor and is not in tension.
  Dispatched to `safety-reviewer`: it is new text in a children's-hockey passage.

- **CLOSED — the `rules_primer.md:920` table propagation.** The two-limb Casebook repair had reached
  the body and stopped at the table — **round 10's critical pattern exactly.** Cell now carries the
  reason in full. **The other four tables read cell by cell: none touches Rule 204 or Rule 74, so no
  same elision.**

- **CLOSED — the IIHF 43.3 inversion in `defending_the_rush.md`, and it was WORSE than briefed.**
  ⚠️ **The same inversion was also in the BODY at `:376`, where it was stated as an explicit
  contrast** — *"mandatory under NHL 43.3 … and under IIHF 43.3 at the referee's discretion"* — so a
  prose reader came away with the inversion spelled out rather than implied. **The brief located only
  the facts line.** Both repaired; `:365` now 287/300 with nothing evicted. **Layer test run per
  layer:** Common Mistakes `:873` and Key Takeaway 8 `:940` were **already correct**. Confirmed
  through the real renderer that the repaired line is voiced in its own `<p>`.

- **CLOSED — the after-the-whistle / delay-of-game / abuse-of-officials cluster**, ~100 quotations
  across two documents, **zero wrong-book attributions**; the twin-sentence trap navigated correctly
  in both places; three negative existence claims **attacked** and upheld, one of them by searching
  **the volume the claim did not name**. Two real findings dispatched (CARHA 55(a) Note 1; USA Hockey
  627(c)'s second proviso). Record:
  [`after_whistle_cluster_attribution_2026-09-22.md`](../reviews/after_whistle_cluster_attribution_2026-09-22.md).
  ⚠️ **The coordinator's cluster list was wrong at its boundary** — USA Hockey 616 and HC 10.2(a)(iii)
  are different four-book contrasts. **~30 quotations in the penalty-shot and hand-on-puck clusters
  are the next brief.**

- **CLOSED — `body_contact_and_battles.md:778`, the unscoped penalty tier.** Repaired with one
  qualifier (*"under the NHL and IIHF, and never a bare minor under USA Hockey or Hockey Canada"*),
  nothing evicted. ⚠️ **The layer test showed the BODY was the only layer out of step** — `:765`
  (facts), `:1621` (Common Mistakes) and `:1736` (Key Takeaways) were already correct, **the inverse
  of the round-10 shape.** The round-10 critical itself was **re-tested by layer rather than by
  grep**: the checking-legality caveat is present in the facts block of **every** section that
  teaches a hit and survives being voiced alone. Record:
  [`body_contact_attribution_2026-09-22.md`](../reviews/body_contact_attribution_2026-09-22.md).

- **CLOSED — the `body_contact_and_battles.md` attribution audit**, the corpus's owner document for
  checking from behind, **which nobody had opened this session**. ⚠️ **Zero misattributions across
  1,193 fragments.** Four negative existence claims attacked and held, including *"the IIHF writes no
  match penalty anywhere"* (`grep -ci "match penalty"` = **0** in both editions) and *"the NHL has no
  positive definition of a body check"* (**zero** `check` occurrences in its glossary block). Three
  substantive gaps found and dispatched. Record:
  [`body_contact_attribution_2026-09-22.md`](../reviews/body_contact_attribution_2026-09-22.md).

- **CLOSED — the `rules_primer.md` attribution sample.** 47 claims, eight rulebooks, **zero
  misattributions**; one real defect found and repaired (a deleted word inside a CARHA quotation).
  ⚠️ **It also VERIFIED an unreviewed hunk another agent had left in the file** — the too-many-men
  rewrite — confirming the Casebook ruling and 204(b) verbatim, while honestly flagging that the
  printed sentence **is genuinely ambiguous** and the edit claims only the defensible half. ⚠️ **And
  it closed a safety question rather than leaving it to be re-opened:** `:459`'s *"the NHL is the
  outlier"* is true as written and correctly qualified at `:36` and `:995`. Record:
  [`rules_primer_attribution_2026-09-22.md`](../reviews/rules_primer_attribution_2026-09-22.md).

- **CLOSED — the `Shoots`/`Shooting` undisclosed inflection, 4 sites across 2 documents**, plus the
  `tak[ing]` terminal-period elision at `risk_management.md:675`. **Both files' remaining `notfound`
  fragments swept for the same defect: none found.**

- **`link_baseline.tsv` — 22 rows written (21 refreshed in place, 1 added), all `content/`-free.**
  ⚠️ **The agent corrected its OWN undercount on handback — 22 URLs fetched, not the 15 it first
  reported** — having omitted four `purehockey.com` paths, two BNQ pages, the Hockey Canada safety
  manual and a Discount Hockey page. **No malformed rows; `check_secrets` and `check_links` clean.**

- **CLOSED — the `equipment.md` `notfound` bucket, all 66 distinct fragments classified**, 26
  verified against primary sources this session, **one real provenance defect found and repaired**.
  ⚠️ **Provenance spot-checks that PASSED are worth recording too:** the Marcoux tape claim is
  correctly framed as a goalie coach's own statement rather than a study; the concussion material is
  prominently flagged as **retailer-sourced rather than research**; the *"extremely good at
  preventing skull fractures"* claim is flagged as **unmeasured by anything cited**. **The document
  is already doing the provenance job on itself.**

- **CLOSED — the `risk_management.md` `notfound` bucket, all 24 classified.** 4 URLs refetched
  (HTTP 200, fragments verbatim); the `:365` CARHA paragraph **upheld in full**, including its
  negative existence claim, which was **tested** rather than trusted; Hockey Canada Interpretation 4
  confirmed to have exactly three items, none mentioning height. Record:
  [`risk_management_notfound_2026-09-22.md`](../reviews/risk_management_notfound_2026-09-22.md).
- **`link_baseline.tsv` — 3 rows refreshed, 1 added, and a HYPOTHESIS REFUTED on the way.** The
  prior byte counts were ~4× smaller; the coordinator's first explanation was the gzip-transfer-size
  artefact documented on the AU row today. ⚠️ **Tested and refuted** — compressed 146,996 vs
  uncompressed 145,466, both ~146k. **The cause is NOT determined and is NOT invented in the note**;
  two fetches minutes apart also differed by 1,530 bytes. **Byte count is not a tripwire on these
  hosts.**

- **CLOSED by REFUTATION — the IIHF 43.3 "discretion limb".** ⚠️⚠️ **The brief was wrong in the
  DANGEROUS direction and would have softened a mandatory-tier claim.** A `safety-reviewer` censused
  every IIHF major-penalty clause: **21 read *may assess*, only four read *shall assess* — and 43.3
  is one of the four.** *"At their discretion"* is boilerplate carried across the book; **`shall` is
  the distinguishing word.** Inserting the discretion limb bare would have told a British reader the
  checking-from-behind major is as optional as the boarding major. ⚠️ **The document already teaches
  this frame three bullets below at `:450` — the fifth time today the answer was already written down
  in the repository.** Record:
  [`iihf_43_discretion_refuted_2026-09-22.md`](../reviews/iihf_43_discretion_refuted_2026-09-22.md).
- **CLOSED — `rules_primer.md:114`, and it was SHARPER than the brief said.** The coordinator relayed
  the both-on-the-ice limb as *"near-tautological"*. It is **conjunctive** and it is the other half
  of the Casebook's own test, which the document's ellipsis had elided. Replaced with the unellipsed
  quotation — a limb added, provenance improved, nothing softened.
- ⚠️ **A DECOY recorded, not edited:** `rules_primer.md:104` (*"USA Hockey Rule 204(b) writes no
  distance at all"*) is **correct**, but `sources/usah.txt:7310` carries a *"within 10 feet of the
  players' bench"* rule with the same competitive-advantage limb — **in the Disabled (sled) Hockey
  section.** A future reviewer grepping for a distance will land on it and "refute" a correct line.

- **CLOSED — the two `special_teams.md` rules findings, by REFUTATION.** Both were already repaired;
  the row had been written against HEAD. The agent verified the underlying rule premise anyway and
  **counted the books itself**: USA Hockey 610(c), Hockey Canada 10.1(ii) and CARHA 75(b) are each
  deliberate-only. It then found and repaired **two different defects** — an Overview clause that
  voiced alone told a USA Hockey goalie a deliberate flip-out is free, and a Key Takeaway attributing
  the British answer to the wrong IIHF edition. ⚠️ **Coordinator census run on its handover: NO other
  document makes the edition claim, and `faceoffs.md:480` had independently reached the same
  edition-independent framing.** Record:
  [`special_teams_rules_round_2026-09-22.md`](../reviews/special_teams_rules_round_2026-09-22.md).

- **CLOSED — both `passing_and_receiving.md` rows, on measurement.** `:183` is 183/200 and the
  inversion risk is gone **structurally** — *"instead"* sits after a sentence boundary, so the
  prohibition closes before the correction opens. `:290`'s `Risk:` line is present at 169/200.
  ⚠️ **The brief's third item was REFUTED: the passer's duty was already FOUR layers deep**, and
  acting on the brief would have duplicated two safety limbs. The one layer genuinely missing was
  `## Key focus`, repaired **into the same paragraph** so the condition shares the instruction's
  spoken `<p>`. Record:
  [`passer_duty_key_focus_2026-09-22.md`](../reviews/passer_duty_key_focus_2026-09-22.md).

- **CLOSED — the four `skating.md` quote drifts.** All four repaired to the corpus's bracket form;
  `check_quote_drift.py` on that file now reads **clean=36 flagged=0**. ⚠️ **Listener cost measured
  and is ZERO** — `md_to_speech.py` strips the brackets, re-rendered and confirmed. Record:
  [`quote_drift_skating_2026-09-22.md`](../reviews/quote_drift_skating_2026-09-22.md).
  ⚠️ **The agent flagged three lines in that file as not its own (`:23`, `:170`, `:848`) and asked
  for an owner before staging. They belong to the earlier `skating.md` negative-existence-claim wave
  this session, which has its own closed row — accounted for and reviewed.** The flag was right to
  raise; the answer is that they are owned.

- **CLOSED — `goaltender.md`'s net-front unary and the five-arrangement refutation (was 🔴).**
  `:513` now reads as a `Convention:` naming the coaching choice, the low-zone-collapse answer, the
  man-on-man/hybrid answer, **and** that it can as easily be a forward. The six sites are repaired.
  ⚠️ **KEEP THE TWO LESSONS — they outlive the row.** (1) The coordinator's counter-argument
  (*"the hybrid answer IS the man-on-man answer"*) was **refuted against the owner**:
  `defensive_zone_coverage.md:106` enumerates **five** arrangements and gives the hybrid its own
  entry — man-SHAPED, not man-IDENTICAL, because the hybrid restricts the pool to the low three.
  (2) ⚠️ **A UNARY IS STRUCTURALLY INVISIBLE TO THE CENSUS**, which keys on a contrast construction.
  It was found by an agent grepping its own file for `defenceman's job` **after** reading the
  context — by judgement, not by any pattern.

- **CLOSED — the `winger.md` hybrid dividing-line contradiction (was 🔴🔴).** All FIVE sites now
  hedge: `:15`, `:23`, `:125`, `:723` and `:724` each name the alternatives (dots / hash marks / tops
  of the circles) or point at the team's own line, and `:142` carries the full explanation.
  ⚠️ **`grep` confirms the flat *"only below the hash marks"* commitment is gone CORPUS-WIDE**, not
  merely in this file. Matches both owners — `language_and_glossary.md:303` and
  `defensive_zone_coverage.md:779`.
  ⚠️ **Keep the lesson, which outlives the row:** the contradiction was created INSIDE ONE AGENT'S
  OWN WORK, in one edit — hedged where it was thinking about the figure, propagated flat where it was
  thinking about something else. **A whole-file diff at the end is what catches that; the hunks
  never will.**

- **The caption layer carried the claim the prose had just been repaired of.** One agent, all of
  `site/src/diagrams/*.mjs`. **11 of 12 captions were correct**; the twelfth contradicted its own
  host two lines above the marker, in both `caption` and `describe`. Rebuilt and re-certified —
  `check_absolutes.py` now passes over **408** caption/describe units. Record:
  [`caption_layer_high_slot_2026-09-22.md`](../reviews/caption_layer_high_slot_2026-09-22.md).
- **Three Criticals/Majors verified repaired and closed:** `special_teams.md:939` now carries the
  *"never from a screening position"* limb (183/200, nothing evicted); `passing_and_receiving.md:203`
  now cites **Hockey Canada 7.5** with its verbatim wording and the non-entitlement sentence, and the
  licence phrasing is **gone corpus-wide**; `body_contact_and_battles.md:750` now says **four**
  situations, carries the rule number, and records that the list is expressly non-exhaustive.

- **The low-zone-collapse rotation, scoped across all three positions** — `center.md`, `defender.md`
  and `winger.md`, three disjoint agents. **Closed the `center.md:108` CRITICAL goalmouth unary and
  the `center.md:23` vs `:735` MAJOR self-contradiction.** The three-way diff both agents asked for
  was run by the coordinator and is **clean — the scope clause is byte-identical in all three.**
  Record: [`positions_rotation_scope_2026-09-22.md`](../reviews/positions_rotation_scope_2026-09-22.md).
  ⚠️ **Agreement is not correctness**: the claim is a system description with no primary source on
  disk, so it is now propagated identically across three documents on the strength of the corpus's
  own consistency alone.

- **`link_baseline.tsv` AU row updated.** ⚠️ **The byte delta was an ENCODING artefact, not content**:
  `curl --compressed` returns 30,474 today and gzip of today's body is 30,475, so the baseline's
  30,533 was a **gzip transfer size**. A prior verifier's explanation (*"added script/banner
  payload"*) was **fabricated** — its conclusion was right and its reason was invented. The row now
  records the trap. ⚠️ **Other rows may carry the same artefact; not audited.**
- **The date question is SETTLED.** `git log -S"ranked by none of them"` dates the claim to
  **`84671fb`, 2 September 2026**; the AU list has existed since **22 April 2026** (Wayback) and by
  its own metadata since **24 March**. ⚠️ **So it was WRONG WHEN WRITTEN — not link rot, not drift.**
- **The `sources/` extraction question is DECIDED: do not do it.** `skating.md` cites **eleven-plus**
  live coaching pages and exactly none is on disk. Making one the exception *"makes the absence of the
  other ten look like a judgement rather than a convention."*
- [ ] ⚠️ **But the gate found a real corpus-wide hole underneath it:** `check_quote_drift.py`'s own
      docstring says it **cannot check a quotation whose source is not on disk** — so **every
      quotation from every coaching web page in this corpus is outside the one tool built to catch
      drift.** Two cheap candidates, neither for this commit: a `quoted_string`/`read_date` column in
      `link_baseline.tsv`, or recording the Wayback timestamp beside each cited URL.
- [x] **CLOSED 22 Sep — `skating.md:848` quote drift.** The quotation now runs to the source
      sentence's own end (*"a multi-year process that requires dedicated, specialized coaching."*),
      so the terminal period is the source's. `check_quote_drift.py` on this file no longer flags it.
      ⚠️ **Found by `check_plan_rows.py`, which flagged the ROW's quote as no longer reading as
      written** — the intended signal, working. **The row was stale, not the corpus.**
- [x] **CLOSED — all four repaired to the bracket form**; `check_quote_drift.py` on that file is
      **clean=36 flagged=0**, listener cost measured at **zero** (the renderer strips brackets).
      ⚠️ **But the corpus-wide `CASE` row governs: the 20 September house-style decision STANDS and
      those 314 must NOT be swept.** These four were repaired before that decision was found — the
      repair is harmless and internally consistent, **and it is NOT a precedent.**



### ✅ CLOSED 22 September — `skating.md`'s refuted negative existence claim, and what it exposed

The Critical is repaired at `:23`, `:62` and **`:170`** — the third being a **second instance of the
same class the repairing agent found itself** (*"nobody has ranked skating faults by size"*, which
would have re-created the refuted claim one section below the fix under different wording).
Verified by the coordinator in the working tree. Scepticism kept, overstatement gone: *"nobody has
counted skating faults by frequency"* and *"coaching emphasis rather than a counted finding"* both
survive, and the rank is now carried as **"a rank asserted, not a rank counted."**

⚠️ **The detail that matters most is how ordinary the failure was.** The refuting sentence is the
**first bullet of a four-item list this document had already quoted twice** — `:220` cites that
list's *"The Toe Flick"* item and `:258` its *"Swinging the Arms Side-to-Side"* item. **It was not a
source nobody had read. It was the first line of a list the document had already mined, twice.**

The youth-scope objection was considered and **deliberately not used to discount the source**: the
list introduces itself as *"these common skating mistakes"*, so the youth clause scopes the
population rather than the subject — and the document already admits Cutting Edge's two lists while
disclosing that both are *"written about young players."* **Admitting a youth-scoped source when it
is silent on ranking and excluding one when it states a rank is selecting on the answer.**

- [x] ⚠️ **Sweep run 22 September: the phrasing class is now EMPTY in `content/`** — no
      *"ranked by none"* / *"named by none"* / *"counted by none"* survives. But the sweep was run
      **after** the repair, so it cannot say whether others existed before. ⚠️ **And a broader
      negative-existence regex returns 57 hits that are almost entirely ordinary prose
      (*"not one of them is a single word"*, *"attack the space between two defenders, not one of
      them"*), which is precisely why `check_disclosures.py` uses narrow patterns — a wider net here
      is not a better tool, it is an unreadable one.** The finding stands as a caution, not a
      tool change.
- [ ] 🔴 **`check_disclosures.py`'s pattern gap is real and unclosed.** ⚠️ **The old
      wording *"ranked by none of them"* matched none of the tool's patterns, so the summary-layer
      copy of a refuted disclosure was on no worklist while the body copy was.** A negative existence
      claim phrased as *"…by none of them"*, *"named by none"*, *"ranked by no one"* escapes it
      entirely. **A corpus-wide sweep for that phrasing has not been run, and the tool cannot be the
      thing that finds them.** Coordinator work, between waves.
- [ ] **Re-read the other cited coaching pages.** Only Athletes Untapped was refetched. Cutting Edge,
      Prodigy Hockey, NTC Hockey, How To Hockey and the Hockey Institute were taken on the document's
      own characterisation. ⚠️ **The failure mode that produced this defect — a cited page whose
      first bullet nobody re-read — is not excluded for any of them.**
- [ ] ⚠️ **Nothing records when this page's mistakes list was last read.** The trailer dates only the
      *timeframes* refetch (2 September 2026), so it cannot be established whether the claim was true
      when written and drifted, or was wrong from the start. **Record read-dates per page, not per
      source.**




---

# Second pass, 24 September 2026 — sections verified DONE by audit, not marked ✅

**These were NOT marked closed.** Three agents audited the plan by line range and classified every
section against the working tree. ⚠️ **Each verdict below was RE-VERIFIED INDEPENDENTLY by the
coordinator with its own grep before the cut** — eight strings confirmed gone, five confirmed
present — because a DONE verdict resting on someone else's zero is the true-negative trap this
repository keeps recording.

⚠️⚠️ **AND THE AUDIT NAMED ITS OWN LIMIT, WHICH QUALIFIES EVERY LINE BELOW:** *"a grep proves a
string is gone — not that the claim was repaired correctly. The replacement text is new text
nobody in this audit reviewed. A DONE verdict here is 'the named defect is no longer on the page',
never 'the page is now right.'"*

⚠️ **Two `##` parents had their rows archived but their HEADINGS LEFT IN THE PLAN**, because their
`###` children are still open and cutting the parent would reparent live work.

---

### 🔴🔴 THE POST-GATE SAFETY REVIEW — TWO CRITICALS AND TWO MAJORS, EVERY ONE PERMISSIVE

**Dispatched because a re-gate blocked: the post-gate repairs had had no reviewer at all.** Every
finding is in the direction that tells a reader an act is cheaper than it is.

| # | Site | Defect |
|---|---|---|
| CRIT | `winger.md:492` body + `:471` facts (voiced alone) | *"CARHA … **Rule 52 writes none into charging at all**"* — **false**: `carha.txt` **48(a)** gives a Match penalty for deliberately injuring *"in any manner"*. And **Rule 34 is match-penalty PROCEDURE, not a grant**, so citing it points the reader away from the rule that prices the act. |
| CRIT | `center.md:441` facts + `:792` KT8 | The 48(a) repair **reached the body at `:472` and STOPPED.** Both layers voiced alone still carry the pre-repair book list. **The round-10 shape verbatim.** |
| MAJ | `playing_without_the_puck.md:646` | *"so **no other book read carries an injury tier there**"* — **false**: CARHA **66(e)**, inside the goalkeeper-interference rule, mandatory. ⚠️ **The identical defect the gate caught in `shooting.md` hours earlier, in a file the gate did not name.** Plus the negative **splits chunks 063/064**, arriving detached from what it negates. |
| MAJ | `playing_without_the_puck.md:878`, `:951`, `:634` | *"a major plus a game misconduct is **the ceiling**"* for the IIHF — omits **42.5 supplementary discipline** and **23.2**'s mandatory report. ⚠️ **The IIHF is the BRITISH reader's book.** |

⚠️⚠️ **THE CROSS-FILE CONTRADICTION WAS CREATED INSIDE THIS ROUND.** `playing_without_the_puck.md` and
`center.md` name 48(a) as CARHA's route; **`winger.md` denies it exists.** Two agents, one round, two
individually-sourced and mutually contradictory sentences — **the shape this repository has recorded
before, reproduced under a coordinator that knew about it.**

⚠️ **AND THE 42.5 GAP IS PROVABLY PROPAGATION, NOT JUDGEMENT:** `center.md:472` and `winger.md:492`
**both carry** *"with supplementary discipline beyond it under 42.5"*, written in the same round.
**Only `playing_without_the_puck.md` dropped it — in the two layers voiced alone.**

✅ **Upheld under attack, and worth recording so nobody "fixes" them:** CARHA 48(a) is **not** an
over-read (*"in any manner"* is the rule's own language, the NHL writes the twin at 21.1, and the
corpus's conditionals *"a charge is one manner"* were checked **de-tagged** and do read as
conditionals voiced alone); the IIHF **genuinely has no match penalty** (0 across **all seven**
extractions flattened, confirmed structurally against Section 04's rule sequence); CARHA 53(a)/(b)
both limbs verbatim; `winger.md:476`'s *"CARHA writes none either"* on goaltender vision (`screen`
scores 0 flattened; all 22 `vision|view|sight` hits are rink dimensions, eye protection or
procedure).

⚠️ **One correction to the coordinator's framing:** 53(a) is **not** the only CARHA route to a match
penalty for the open-ice hit — **48(a) reaches it too, on intent.** Neither file claims exclusivity,
so nothing on the page was wrong; **the brief's framing was.**

### ⚠️⚠️ AND IT CORRECTS A MIS-SCOPED REMEDY THIS ROUND HAS LEANED ON TWICE

**FLATTENING TO ALPHANUMERICS DOES NOT DEFEAT PAGE FURNITURE.** It defeats **hyphenation** and
**newlines** — cases where characters are REMOVED or wrapped. **Page furniture INSERTS alphanumerics
into the middle of the phrase** (*"NATIONALHOCKEYLEAGUE73TABLEOFCONTENTS…"*), so a contiguous flattened
search still fails.

⚠️ **The coordinator briefed "flatten to alphanumerics" as the general remedy for a quotation that
greps to zero. It is not.** Three distinct causes, three different signatures:

| Cause | What it does | Defeated by |
|---|---|---|
| **newline** (CARHA 66(e)) | wraps the phrase | flatten |
| **hyphenation** (USA Hockey `"kick / shot,"`) | splits a WORD | flatten |
| **page furniture** (NHL 42.1) | **inserts text INTO the phrase** | ⚠️ **search FRAGMENTS and check order** |

⚠️ **So a zero from a flattened search is still not an absence.** **Search two or three short fragments
of the sentence separately and confirm they appear in order** — that is what settles it, and it is what
`check_quote_drift.py`'s own NOT-FOUND list needs before any hit on it is believed.


### 🔴🔴 CRITICAL — THE ROUND'S OWN DEFECT SURVIVED IN A FILE THE ROUND EDITED

`technique/shooting.md:472` quotes CARHA 52(b) **cut at `crease`, closed with a terminal period INSIDE
the quote marks** — *"…while the goalkeeper is within the goal crease."* — where the book continues
*"or who injures an opponent as a result of a charge."* ⚠️ **It reaches the reader as a complete
sentence of the book.**

⚠️⚠️ **THE WAVE REPAIRED THREE SITES IN THAT FILE AND MISSED A FOURTH** — body `:521`, facts `:498`
and Key Takeaway `:899` were all fixed; `:472` and Common Mistakes `:839` were not.

⚠️ **CHUNK DISTANCE MEASURED, and it removes the "corrects itself later" defence:** the false
sentence is **chunk 055**, the first corrected statement **chunk 062 — seven chunks later** — and
chunk 055 **ends on the instruction it governs**. ⚠️ **The reviewer sized this correctly ONLY BECAUSE
IT RENDERED.** It read the other four files as text and says so.


### 🔴🔴 MAJOR — A RULE NUMBER'S SILENCE READ AS THE BOOK'S ANSWER TO THE ACT

`hockey-iq/playing_without_the_puck.md:878` (Common Mistakes) and `:951` (Key Takeaway), **both voiced
alone**: *"Not every book carries that tier — the IIHF's Rule 42 and CARHA's Rule 52 stop at the major
and the game misconduct."*

⚠️ **Scoped to Rule 52 it is true. The framing sentence is not.** `carha.txt:2389-2392` **Rule 48(a)**
assesses a **Match penalty** to any player who *"deliberately injures or attempts to injure an
opponent … **in any manner**"* — which reaches a charge, exactly as NHL 42.4 and Hockey Canada 8.5(c)
do. **A reader is told their book's ceiling is a major plus a game misconduct when it is a match
penalty. Permissive.** ✅ **The IIHF half HOLDS** — `match penalty` returns 0 in both extractions.

⚠️ **PRE-EXISTING TEXT that two reviews and a repair wave all passed over**, and `:951` sits
immediately before this wave's own addition.

⚠️⚠️ **THIS IS THE ROUND'S FOUNDING FAILURE MODE, RECURRING AT A DIFFERENT RULE NUMBER**, and the
reviewer named why nothing catches it: ***"There is no tool that says 'this book prices this act
somewhere else too.' I checked Rule 48 only because the charging ceiling claim was in front of me.
A negative I never ran is the most dangerous place a search can end."***

⚠️ **THE SEARCHABLE SHAPE IS THE CEILING CLAIM ITSELF** — *"stops at"*, *"not every book carries that
tier"*, *"the worst that happens"*, *"caps at"*, *"goes no further than"*. **Each names one rule number
and asserts a book-level limit. Sweep the corpus for the SHAPE, then read every hit.**


### 🔴 OPEN — THREE VERIFIED DEFECTS IN `goaltender.md`, none requiring a deletion

**A `rules-verifier` re-derived the re-ordered Situation 4 bullets and the round's new CARHA, Hockey
Canada, NHL, PWHL, IIHF and EIHL text against ten books.** ✅ **The structural rewrite is SOUND** —
the top rung's **conjunction survived as a conjunction** (*"it needs both halves rather than either
one"*), severity still ascends, and every quoted string is byte-for-byte. **That was the highest risk
in the diff and it did not bite.** Three defects stand:

| # | Site | Defect | Direction |
|---|---|---|---|
| 1 | `:1104` facts, **voiced alone** | *"anywhere on the ice"* is quoted onto **Hockey Canada 8.5(b)**. The phrase is in **Rule 8.5's PREAMBLE** (`hc.txt:6981-7023`) and is about *unnecessary contact* priced under the whole rule, **whose floor at 8.5(a) is a MINOR**. The substantive claim is true and provable from clause (b) alone — the charging limb has no location condition — but the quotation marks put the mandatory tier where the book puts a minor. `:1122`'s body form, crediting *"8.5's protection"*, is **correct as written**. | citation |
| 2 | `:1100` facts, **voiced alone** | Situation 4's three rungs given **without the book's own scope** — it asks its question *"for charging a goalkeeper while in their crease or privileged area."* Outside it the reader is on 607(d)'s unnecessary-contact sentence instead. The body carries the scope at `:1114`; the spoken line does not. | permissive **to the goalie** — asking for a rung they do not have |
| 3 | `:1090` | CARHA 66(b)'s push-in relief **cut at a comma with a period inside the quote marks**; the source continues *", the goal shall be allowed."* ⚠️ **Meaning is preserved** — the lead-in says *"giving the goal back where"* — so it is quote integrity, not safety. **Extend by four words.** | hygiene |

⚠️ **THE COORDINATOR BRIEFED DEFECT 3 AT `:1120`. IT IS AT `:1090`, AND `:1120` IS CLEAN.** A line
number is a figure and this one was carried from a gate report unmeasured — **the second time in one
round the coordinator shipped an unverified figure out of a subagent's report into a brief.**

✅ **Verified sound in passing, each attacked rather than assumed:** USA Hockey writes **no bare
minor** at any limb of 607 (checked against the rule AND the Summary of Penalties); Situation 4 is the
**only** tier guidance under Rule 607, so *"publishes three rungs"* is complete; 8.5(d) removes the
misconduct rung, verbatim; the *"neither book has a privileged area"* claim holds **as a concept and
not only as a label** — the verifier read NHL and IIHF 42.1 in full precisely because a label search
returning zero is the true-negative trap; and the IHUK In-House Rules contain **no charging provision
at all**, every `charg` hit being *"in charge of the bench"*.

⚠️ **Declared not reached:** the four IHUK Rules of Competition and their `_layout` twins were not
searched for a goaltender-charging departure, and `iihf_situations_v1.1.txt` was not searched for a
Situation qualifying Rule 42.


### 🔴 OPEN — the "four books" frame, and TWO reviewers converged on it independently

`goaltender.md:1084` — *"All four books … but Hockey Canada is the only one that writes a mandatory
penalty on the attacker into that clause itself."* **CARHA is a fifth that does** (Rule 66(b), two
mandatory minors on an attacker who fails to avoid the goalkeeper). ⚠️ **The second half of the
sentence SURVIVES** — no other book sends the referee after the defenceman — so this is a half-repair,
not a rewrite.

`goaltender.md:1040` (facts `Key:` line, voiced alone) and `:1090` route the reader to *"the four
books"* to find which their league runs. **CARHA writes its own crease-position rule and its own
push-in relief** (`carha.txt:3142-3162`), and this document itself calls CARHA *"the one an adult rec
goaltender is likeliest to be under"*. ⚠️ **Do not write "five" — `ls sources/*.txt | wc -l` returns
42 and the PWHL carries the provision too.** Dropping the count is probably the repair.


### 🔴 OPEN — a scope defect no grep can find

`goaltender.md:1121` calls the IIHF book *"one nothing domestic alters"*. **The EIHL Casebook alters
it**, as the same document states correctly four paragraphs later. ⚠️ **A grep for `EIHL` cannot find
this, because the defective clause is the one that does not mention the EIHL.** Dispatched 24 Sep.


### 🔴 OPEN — the better long-term carrier, named by the agent and outside its brief

`systems/offensive_zone_play.md:829` is a facts line **enumerating the books that BAN body checking**
— USA Hockey 604(a), Hockey Canada 7.3 — **with CARHA absent**, while `:825` says *"where your league
permits body checking — take the player"*. ⚠️ **A CARHA reader hears the list of books that ban it,
does not hear their own, and concludes they are permitted.** **Permissive.** It has 9 characters of
headroom.

⚠️ **The agent also declared: `offensive_zone_play.md` carries NO checking-division limb anywhere** —
18 CARHA sites, zero counterweight — **so this file is the weakest carrier in the corpus for that
claim.**


## 🔴🔴 `check_instruction_first.py` HAS A STRUCTURAL FALSE POSITIVE IN THE KEY TAKEAWAYS LAYER

⚠️⚠️ **FOUND BY THE AGENT USING IT, AGAINST ITS OWN RESULT. THE FIX IS PENDING AND MUST WAIT FOR A
QUIET TREE — three agents are live and were told to measure before/after with the current build.**
**Changing a shared tool mid-wave would make their two measurements incomparable.**

**The bug:** the tool skips the bold name that opens a unit, with the comment *"the NAME is not the
instruction and must be skipped"*. ⚠️ **That is TRUE for Common Mistakes, where the name is the
MISCONCEPTION — and FALSE for Key Takeaways, where the name IS THE TAKEAWAY.**

**KT6 is literally named *"Never duck or crouch to avoid a check"* and KT10 *"Find out which rule set
you are playing under before your first shift"*. BOTH SCORE TARIFF-FIRST.** ⚠️ **Six of ten Key
Takeaways hits in `rules_primer.md` are this artefact, and *"prepending an instruction to these would
add a restatement of the name one clause below it."***

**THE FIX: read the bold name for the `## Key Takeaways` layer only. Apply it between waves, then
re-baseline the corpus figure — the current 17% is inflated.**

---


## 🔴 NEW 23 September — A MAJOR FOUND WHILE ANSWERING THE MARKER QUESTION: CARHA 55(a) IS IN NO LAYER

**`grep -c "Rule 55"` on `goaltender.md` returns 0.** **CARHA Rule 55(a)** (`carha.txt:2621-2631`):
*"A Minor penalty shall be assessed to any goalkeeper who shoots or bats the puck out of the playing
surface with their stick."*

⚠️⚠️ **IT IS STRICTER THAN THE THREE BOOKS THE SECTION PUTS IN "THE STRICT COLUMN": no deliberateness
element, NO ZONE RESTRICTION AT ALL — unlike NHL 63.2(iii) / IIHF 63.2(III) / PWHL 65.2(iii), all
limited to the defending zone — and the goalkeeper is named in terms.** **So a CARHA goalie who lifts
a clear out of the rink FROM THE NEUTRAL ZONE takes two minutes, while the document tells them that
outside the NHL/IIHF/PWHL the offence needs deliberateness.** Missing from **body ✗ · facts ✗ ·
Common Mistakes ✗ · Key Takeaways ✗**, in a document that names CARHA at seven sites and in four
trailer entries.
✅ **The INSTRUCTION is already safe in every book** — *"Keep it **along** the glass"* holds under
CARHA too — **so nothing a reader DOES changes. The defect is scope.** Dispatched.

### ⚠️⚠️ HOW IT WAS FOUND, AND WHY THAT MATTERS MORE THAN THE FINDING
> ***"The CARHA omission was found by a BOOK CENSUS, not by reading. There is no tool that says 'your
> sentence names five books and the directory holds forty-two.' I checked CARHA against this one
> section because the section enumerates books explicitly. **The same omission almost certainly exists
> elsewhere in this document and across the corpus, and I did not look** — `carha.txt` and
> `pwhl_rules.txt` are the two books most likely to be missing from an enumeration, because they were
> added late."***

**That is the next wave, and it is a different population from the exclusivity sweep: not *"NHL and
IIHF only"* but ANY EXPLICIT BOOK ENUMERATION, tested against the late-added books.**

### 🔴 And a Minor, the cheapest repair in the file
**KT13 carries ZERO markers where its HEAD counterpart had one** on *"Two books take the top tier out
of the referee's hands"*. **Content intact; the spoken escalation is gone.** ⚠️ **Graded Minor
because the penalty falls on the OPPONENT, not the reader — nothing a goaltender does with their body
changes on hearing it.** ⚠️ **Restore ONE marker MID-ITEM: `WARNING_RE` is anchored, so it adds no
amber panel and costs nothing visually while restoring the spoken `"Important."`.**

---


## 🔴🔴 NEW 23 September — THE PATTERN IS NOT ABOUT RULE 69 AT ALL

⚠️⚠️ **A repair agent found *"the NHL's and the IIHF's only"* on a COMPLETELY DIFFERENT RULE.**
**`on_ice_communication.md:322`** said *"That five feet is the NHL's and the IIHF's **only**."*
**Wrong.** `pwhl_rules.txt:6464` — **PWHL Rule 76.1, headed *"Too Many Women on the Ice"*** — carries
*"the player or players leaving the ice shall be within five feet (5') of her players' bench and out
of the play before the change is made"*, the NHL 74.1 sentence in the feminine.

⚠️⚠️ **WHAT DEFEATS AN ORDINARY SWEEP: the rule has a DIFFERENT NUMBER (76.1 vs 74.1) AND A DIFFERENT
NAME. A search keyed on the NHL's name or number finds nothing** — the `kickshot` failure, reproduced
on a rule name. **Corpus-wide sweep dispatched for the STRING, across every rule.**

### ⚠️ THE TRAP THAT RUNS THE OTHER WAY, and it was hit live
`on_ice_communication.md` said *"**Both books also add** that Rule 69… may be subject to a **Coach's
Challenge**."* ⚠️ **Sweeping "two → three" there would have STATED A UNIFORMITY THAT DOES NOT EXIST**
— **PWHL 71.5 reads *"Coach's Challenge — Not applicable"***. Rewritten to keep the shared half and
name the split. **So every hit needs checking for whether the books agree on the WHOLE SENTENCE, not
just on having the rule.**

### 🔴 Overstatements it caught in its own text
- It wrote *"the same rule in the feminine"* in **four places**, then caught that **71.5 genuinely
  diverges**. ⚠️ **In the two lines voiced ALONE it narrowed to *"the same crease keying in the
  feminine"* — exactly what it had verified — while letting the body keep the broader phrasing
  because the divergence is disclosed in the same section. A per-layer decision, not a global one.**
- It nearly wrote that a PWHL search for *"69.4"* lands on Handling Puck. ⚠️ **It does not — PWHL
  Rule 69 has only 69.1, so that search finds NOTHING.** Accurate only for *"Rule 69"* whole.
- ⚠️ **Markers balanced +2/−2, +1/−1, +2/−2 across three files — no spoken escalation added or lost.**

---


## 🔴🔴 OPEN — CARHA 52(b) HAS TWO LIMBS AND THE CORPUS STATES ONE. Found 24 September 2026.

`sources/carha.txt:2559-2562`: *"A Major penalty and a Game Misconduct shall be assessed to any player
who charges a goalkeeper while the goalkeeper is **within the goal crease or who injures an opponent
as a result of a charge.**"* **Two limbs joined by "or"; the second has NO crease condition** and
reaches a charge anywhere on the ice.

**Direction: PERMISSIVE.** It tells a skater the mandatory major-plus-game-misconduct stops at the
crease line, so running a goaltender outside the paint looks cheaper than CARHA prices it. It also
under-arms the goaltender, who will not describe the act that triggers the ejection.

✅ **The corpus already owns the correct sentence, in two places** — `goaltender.md:1121` in the body,
and `winger.md:470` as a facts line: *"both in the crease and for any charge that injures an
opponent"*. **So this is a PROPAGATION failure, not a knowledge failure**, which is the strongest
diagnosis available and the one that says a sweep would have been wrong: the right words were already
written.

| Row | File | Status |
|---|---|---|
| 52b-1 | `positions/goaltender.md` — **SEVEN** sites, not the four briefed | ✅ **CLOSED 24 Sep** |
| 52b-2 | `technique/body_contact_and_battles.md` — 4 sites | ✅ **CLOSED 24 Sep** |
| 52b-3 | `positions/center.md`, `technique/shooting.md` — 6 sites | ✅ **CLOSED 24 Sep** |
| 52b-4 | `systems/zone_entries.md`, `hockey-iq/playing_without_the_puck.md` — 4 lines | ✅ **CLOSED 24 Sep** |
| 52b-5 | `positions/winger.md:470` — **already correct, left alone.** Verify no other layer in that file contradicts it | OPEN |

⚠️ **Chunk distance was MEASURED and it removes the *"it corrects itself later"* defence.** In
`goaltender.md` the facts line is chunk **134** and the body correction chunk **138**; the Common
Mistakes bullet is **206** and the takeaway **214** — **68 and 76 chunks after the correction.** For a
listener the uncorrected form is the last word on the subject.


## 🔴🔴 NEW 23 September — THE PWHL IS SILENTLY EXCLUDED IN 13 PLACES ACROSS 9 DOCUMENTS

A `rules-verifier` swept **all 39 documents**. ⚠️ **The corpus scopes goalkeeper interference to
*"the NHL and the IIHF only"* where the PWHL carries the same clauses TOKEN-FOR-TOKEN.**

### 🔴 THE 13 SITES — and TWO have a penalty consequence
`rules_primer.md:1014`, **`:1015`**; `winger.md:544`, `:556`; `on_ice_communication.md:269`, `:284`;
`scanning_and_anticipation.md:334`, `:349`; `time_and_space.md:271`, `:464`;
`special_teams.md:1048`; `offensive_zone_play.md:456`, `:634`. Plus two lower-severity closed counts
at `center.md:449` and `body_contact_and_battles.md:1169`.

⚠️⚠️ **`rules_primer.md:1015` and `forechecking_systems.md:906` both tell a reader what contact with a
goaltender OUTSIDE the crease is permitted, and scope that permission to two books. PWHL 71.2 prices
getting it wrong at a *"minor or major, as the Referee deems appropriate"* and 71.4 says the
goalkeeper *"is not 'fair game'"*. THE UNDER-SCOPING RUNS TOWARD A READER THINKING THEY ARE OUTSIDE A
RESTRICTION THAT IN FACT BINDS THEM.**

### 🔴🔴 AND TODAY'S OWN REPAIR LEFT RESIDUE — IN THE WORST LAYER
**`winger.md` now states THREE MUTUALLY EXCLUSIVE SCOPES IN ONE FILE.** `:458`/`:459`/`:474`/`:738`
were corrected today to *"NHL, PWHL and IIHF"*; **`:544` and `:556` still say *"NHL and IIHF only"*.**
⚠️ **`:544` is a ` ```facts ` `Rule:` line — voiced ALONE, in its own `<p>` with a 300 ms break
either side, with NONE of `:474`'s correction audible.** **A repair that reaches four layers and
stops is this project's oldest recorded failure, reproduced inside a single wave.**
`offensive_zone_play.md` has the same shape: `:736` and `:1164` treat the PWHL as a book worth
checking while `:456` and `:634` close the universe at four.

### ⚠️ A PROSE AMBIGUITY THAT ONLY EXISTS WHEN SPOKEN
**`forechecking_systems.md:906`** — *"Under the NHL and the IIHF only incidental contact is
permitted"* parses as *"under [NHL and IIHF] only, incidental contact…"* (**false**) or *"under NHL
and IIHF, only incidental contact…"* (**true, intended**). ⚠️ **Read aloud there is no comma, and a
listener gets the false one.**

### ⚠️ A TOOL THAT GIVES A FALSE SIGNAL IN BOTH DIRECTIONS, on exactly these rows
**`check_quote_drift.py` scores the Table 14 rows NOT FOUND for the NHL *and* the PWHL**, because the
result column interleaves mid-phrase. `sources/README.md` records it. ⚠️ **The verifier confirmed
them POSITIONALLY, BY EYE, in `pwhl_rules_layout.txt` — the plain extraction and flattening both
fail.** **A future verifier trusting that tool on these rows gets a false signal either way.**

### ⚠️ The distinction it drew that keeps this from becoming a sweep
**Sentences of the form *"Neither USA Hockey nor Hockey Canada reaches…"* are CORRECT-AS-WRITTEN
throughout and were flagged nowhere** — they are negatives about two **named** books, not counts.
⚠️ **And a further ~17 sites are CONFIRMED-BUT-INCOMPLETE rather than wrong** — a `(NHL and IIHF
Rule 69.x)` citation is short, not false. **Listed so nobody re-finds them; judgement, not a sweep.**



---

# Third pass, 24 September 2026 — the 4104–8214 band

**Audited by six parallel read-only agents over disjoint sub-ranges.** ⚠️ **Located by HEADING TEXT,
never by line number** — the plan moved three times during the audit (12,317 → 12,367 → 12,299), and
the audit said so itself: *"this is the coordinator's own 'stage only what will not be edited again'
rule biting on the plan file itself."*

⚠️ **SIX CANDIDATES WERE EXCLUDED FROM THE CUT AFTER THE COORDINATOR CHECKED THEM:**
- **Four** are `##` parents whose `###` children are *lesson* records — *"SIX MORE COORDINATOR
  PREMISES REFUTED BY MEASUREMENT"*, *"THE GENERAL LESSON, AND IT IS NOT 'QUOTE MORE'"*. **Those are
  standing guidance; cutting the parent would take them with it.**
- **One** — *"PROMOTION INVENTED FIVE PREVALENCE CLAIMS"* — was reported DONE on `grep "most teams"`
  → 0. ⚠️ **The coordinator re-ran it and got 3**, including `center.md:244` *"most teams run more
  than one"*, **which is the very class the row tracks.** It is PARTLY done, not done.
- **One** was an ambiguous anchor matching three headings.

⚠️⚠️ **THE AUDIT'S OWN LIMIT GOVERNS EVERY LINE BELOW:** *"Whether any repair is CORRECT, only
whether it LANDED. Not one rulebook was reopened. A repair that propagated a WRONG ladder to all
four layers scores DONE here."*

---

### 3 🔴 CARHA IS A FIFTH BOOK SETTLING THE CREASE LINE — AND THE ANSWER WAS ALREADY IN THIS REPOSITORY

`carha.txt:270-274`, Glossary: *"The lines which designate these areas are to be considered as part
of the creases."* **PWHL 1.7 does not carry it (confirmed, 0 hits).**

⚠️⚠️ **This is the coordinator file's own recorded pattern verbatim: the answer was already written
down here — it is in the grep table of the review record for this very commit — and nobody
propagated it.** The corpus's count-free form (*"every book that settles the question in its rule
text or glossary"*) absorbs it without change; the enumerations do not.

**Direction is SAFE** — CARHA agrees with the conservative *"stay off the line"* reading — **so this
is completeness, not a hazard.**


## ⚠️ AND THE `Action:` vs `Convention:` DISPUTE — two reviewers disagreed, and the tie-break is the layer

A `facts-reviewer` judged `offensive_zone_play.md:520`'s `Action:` label correct (*"it carries 'this
is what to do', not 'this is a law'"*). A `content-reviewer` said it must be `Convention:`. **The
repairing agent sided with the content-reviewer and showed its working:**

`content_style_guide.md:905-909` is unconditional and has **no `Action:` carve-out**: *"Where the
body hedges… the fact takes `Convention:`, **and that hedge is not optional.**"* And:

> *"The facts line is voiced **alone**… A listener hears a bare imperative split with **nothing
> marking it as a choice their team may make differently** — which is the shape non-negotiable 7
> exists to stop. The reviewer's argument would also **read the guide's sentence out of existence for
> every hedged imperative in the corpus.**"*

⚠️ **The label is judged by what a LISTENER hearing the line alone can tell — not by what the label
means to an editor reading the file.**

---


## 🔴 `winger.md` KT8 — 959 WORDS, 3× ITS NEXT LARGEST SIBLING, WITH SIX CARRIERS PROVEN

Now **959 words** (931 at HEAD; **+21 from this repair, all of it the required CARHA limb and the
corrected provenance**). ⚠️ **Its siblings in the same list run 31–320 words, median ~88.**

**Limbs with a carrier proven elsewhere in the document — safe demotion candidates:**
- Situation 5 E / the reference-table answer — `:458` facts + §Net-front body
- The 69.4 no-contact penalty limb — §Net-front body
- The crease-line four-book list — `:24` facts + §Net-front body
- USA Hockey's stick-counts-as-you limb — `:462` facts + §Net-front blockquote
- Hockey Canada Interpretations 1 and 2 — `:465`/`:466` + blockquote
- The six-book charging tier — the two new split `Rule:` lines + blockquote

⚠️ **NOT verified sole-carrier-safe — that needs the per-limb layer test.** ⚠️ **Dispatch on the
UNIT (`winger.md` KT8), not the document.**

**Open and untested, raised by the agent against its own new text:** the new disclosure says
*"nothing here says whether the other four write it"* — **honest but untested, and CARHA breaking
that way once suggests it is worth attacking.**

---


## ⚠️ AND THE SHOOTING REPAIR CAUGHT ITSELF CONTRADICTING A LIMB QUOTED AT SEVENTEEN SITES

> *"I wrote *'meet a goal post with an arm or a **shoulder** first'* — **which contradicts the
> corpus's own shoulder prohibition** (*'Never hit the boards or glass with the tip of your
> shoulder'*, quoted at seventeen sites). The source says *'an arm, a leg, or anything but your head
> first.'* Changed to **'an arm or a leg first'** in all three places."*

⚠️ **A repair written from a source can still contradict a standing corpus limb, because the source
does not know what the corpus already says.** Caught by re-reading against the corpus, not the book.

**It also caught a false ABSENCE claim in its own text:** *"reaches a match penalty in two books"* —
⚠️ **false. `sources/nhl_rules.txt:5455` has NHL 42.4 (discretionary) and `sources/hc.txt:6097` has
Hockey Canada 7.4(c) (MANDATORY).** Only the IIHF and CARHA lack one. **It removed the count
entirely rather than correcting it**, which is the right instinct — a count of books goes stale as
`sources/` grows.

⚠️ **AND THE MAJOR WAS IN A SECOND BLOCK NOBODY NAMED.** `shooting.md:291`
(*"Contact with the goaltender at the net front"*) carries the same charging ladder and stops at the
same rung. **Two blocks, one brief, one named.**

---


## ⚠️ THE 69.7 CARVE-OUT — LANDED IN THREE LAYERS, AND THE BRIEF WAS WRONG TWICE

✅ Repaired in `center.md` body, facts and KT8, with the EIHL counterweight so the instruction is not
softened. **Refuted in the brief:**

1. ⚠️ **The signposting is NHL-ONLY.** *"(refer to Rule 69.7 for an exception)"* is the NHL's;
   **the IIHF's 69.3 carries no cross-reference to 69.7** — its pointer is to Appendix IV's table.
   The exception applies in both books; the signpost does not.
2. ⚠️ **"IIHF 69.7 is word-identical" — materially identical, not word-identical.** It writes
   *"the goal crease"* where the NHL writes *"the crease"*.

**And it caught itself over-scoping the counterweight twice:** *"Do not carry that comfort into a
**British rink**"* — ⚠️ **it had verified one British league, not British hockey** — then softened
again to *"Assume it does not survive into the EIHL"*, because **the Casebook writes a flat
criterion rather than expressly repealing 69.7, so the inference is the agent's and not the book's.**

⚠️ **HIGHEST-VALUE FOLLOW-UP, declared:** **USA Hockey 625(b) and Hockey Canada 8.5 were NOT reached
for a rebound/loose-puck carve-out.** If either writes one, the corpus's NHL/IIHF-only scoping is
understated. **And `winger.md` and `offensive_zone_play.md` teach the same net-front rebound and
almost certainly carry the same flat claim.**

---


### ⚠️ THE TWELFTH OVERSTATEMENT, AND IT RAN THE SOFT WAY — a true quotation with a false consequence

`defender.md:68` quoted Hockey Canada 10.1(ii) **accurately** and concluded an accidental
over-the-glass *"costs you the faceoff rather than two minutes."*

**`sources/hc.txt:4848-4852`, Rule 6.4(a) Junior & Senior:** *"…no penalty will be assessed, **but
the defending team may not make a line change.**"*

⚠️ **That is exactly the currency a tired defender flipping it out is trying to buy — the line told
them the play was cheap.** And `risk_management.md`, **edited in the same commit**, stated it
correctly. ✅ **Repaired**, 292/300, verified against primary text rather than against the sibling.


## 🔴 NEW — THE `winger.md` REPAIR CREATED THREE LAYER DIVERGENCES IN ONE FILE

A repair is new text, and this one is measured proof. After today's pass the document states:

- **TWO counts of the crease-line books** — four (incl. CARHA) at `:22`, `:666`, KT8; **three at
  `:470`, `:541`, `:554`.** Four is right, verified in primary text at `iihf_rules.txt:631`,
  `usah.txt:4509`, `hc.txt:961`, `carha.txt:270–274`.
- **THREE scopes for the charging audit** — six at `:467`, `:668`, KT8; **five** in the body
  blockquote `:488`; **four** in the Sources trailer `:754`. Six is right, verified.
- **The net-front split in four layers and its CONTRADICTION in four others** — `:22`, `:427`,
  `:437`, `:451`, **including both facts blocks, which are voiced alone.** ⚠️ **The owning section
  still states the pre-repair instruction while the summary layers state the corrected one.**

⚠️ **AND THE SOURCES TRAILER NOW DENIES THE BODY.** The PWHL is cited five times in the document and
appears **zero times** in the trailer; CARHA is cited for Rule 52(b) and its Glossary while `:748`
still reads *"CARHA was read for those four clauses only"* and names 57(a)–(d). **A trailer that
positively denies the reading the body rests on is the state that makes a later reviewer suspect
fabrication.** Fix is **provenance, not deletion**.

**Standing lesson: a partial propagation is worse than none**, because the layers now disagree and
each looks internally plausible. **Every repair brief must name EVERY layer the claim lives in, and
the agent must report which layers it reached.**

---


## 🔴 NEW — THE ABSENCE TEST NOBODY CAN AUTOMATE, RUN ONCE AND IT FOUND THREE

A reviewer compared `center.md`'s offensive-zone sections against `offensive_zone_play.md`'s section
headings — **a comparison no agent had ever run.** Absent from every layer of `center.md`:

- ⚠️ **The ROYAL ROAD. `grep -c "royal road" content/positions/center.md` returns 0** — while
  `offensive_zone_play.md:12` leads its Key focus with it and `:145` calls it *"the highest-value
  pass type measured, roughly double the next one"*. **The centre in the slot is both its primary
  receiver and, from behind the net, its primary maker.**
- **CYCLING** — the word appears once, in a facts line, undefined. `center.md:315–338` covers exactly
  that situation and teaches none of the owner's cycle reads. ⚠️ **The asymmetry is the tell: this
  document DOES teach rim-vs-reverse in the DEFENSIVE zone (`:99`, `:105`).** The corpus gives the
  centre the read where the puck is going out and withholds it where the puck is being held in.
- **NET-FRONT** — the owner splits Screening / Tips / Rebounds into three taught skills;
  `center.md:392` gives 45 words, followed by ~47 lines of crease law.

⚠️ **THE FIX IS ADDITIVE. Do not cut the crease law to make room** — it is the safety layer.

⚠️⚠️ **AND THE LIMIT OF THE METHOD, stated by the reviewer and it is the honest one:** *"It cannot
find a tactic that is universally true for a position and **absent from the whole corpus** — nothing
in this repository would flag it, because there is no document to diff against. **Somebody who plays
the position, reading the Key focus cold, is the only instrument that finds the rest.**"*

---


## 🔴 NEW 23 September 2026 — THE CAPTION LAYER DID NOT GET THE REPAIR, AND A CENSUS FOUND IT

⚠️ **A repair reached four layers of `winger.md` and TWO layers of `offensive_zone_play.md`, and
stopped at the diagram caption — which is SPOKEN INTO its host document.** A listener gets the
repaired body and then the superseded instruction.

`site/src/diagrams/positions.mjs:619`, caption for `winger-offensive-zone-patches`
(owner `content/positions/winger.md`):

> *"…and tip-ins live, so **time the crash to arrive as the shot is taken rather than before it**."*

**That is the unsplit instruction the wave was repairing.** Verified a **single site and not a
shared constant** — `grep -rn "time the crash to arrive" site/src/diagrams/*.mjs` returns one line
and nothing imports it.

⚠️ **THE AGENT THAT MADE THE REPAIR PREDICTED THIS EXACTLY and could not check it:** *"a caption
stating arrival timing into a host document is invisible to everything I did."* **It was right, and
the census it asked for found the hit on the first pass.**

⚠️ **THE METHOD THAT FOUND IT, because it generalises:** search the **built** captions in
`site/src/data/diagrams.json` — not the `.mjs` sources and not `content/` — for the claim's
vocabulary, and read every hit against its `owner`. 204 diagrams, 20 hits on arrival/net-front
wording, one genuine defect. ⚠️ **`check_caption_hosts.py` cannot do this for you**: it reports
where a caption is spoken into a document that does not own it, and this caption **is** in its
owner. **No tool in this repository sees a caption that contradicts its own host.**


## 🔴🔴 NEW 23 September 2026 — TWO DOCUMENTS TAUGHT OPPOSITE NET-FRONT TIMING, AND ONE CONTRADICTED ITSELF IN A SINGLE SENTENCE

**The largest content finding of the wave.** Not a qualification lost in transit — **a flat
disagreement between two documents about what a player should do.**

- `content/systems/offensive_zone_play.md:526` — *"you have to be there, deliberately, **before the
  shot**, or you lose that race by default"*; `:34` — *"you win the race for a rebound by deciding
  to be there before the shot, not by reacting after it."*
- `content/positions/winger.md` stated the **opposite** as a universal in **three** layers — Key
  focus *"Arrive as the puck is released, not before"*, Overview *"Arrive early and a defender has
  time to tie you up"*, Common Mistakes *"Arriving at the net front too early."*

⚠️⚠️ **AND `winger.md`'s KEY FOCUS CONTRADICTED ITSELF IN ONE SENTENCE** — it told the reader to
*"take the goaltender's eyes"*, which requires being **planted**, and to arrive as the puck is
released, **which makes that screen impossible.** A reader could not act on the sentence.

**Repaired in `winger.md` across four layers** by splitting two jobs that had been collapsed:
**planted before the release if the net front is your assignment; arriving with the release if you
are driving in from the wall or your own circle.**

⚠️⚠️ **THE SPLIT IS UNSOURCED CRAFT AND ITS AUTHOR SAID SO:** *"No source in this repository states
this distinction in those terms. **If the split is wrong, it is wrong in BOTH documents now.**"*
**Two agents are now testing it** — one on `offensive_zone_play.md` with authority to refute it, one
reviewing `winger.md`. **Neither may propagate it without deciding it is right.**

⚠️ **Why no checker could see this:** both sentences are plausible English, both are internally
consistent, and they live in different files. `check_layer_echo` looks for restatement, not
contradiction. **The only thing that found it was an agent told to read the OWNER document.**

**Still open:** whether `offensive_zone_play.md` needs the same split.

---


## ⚠️ NEW — "YOU CHECKED FOUR BOOKS" FAILED IN BOTH DIRECTIONS IN ONE FILE

Found unprompted in `winger.md`, and the two errors run opposite ways:

- **CARHA was MISSING from the crease-line list in two layers.** Facts `:461` said *"three books
  count that line as crease"*; KT8 named *"the IIHF, USA Hockey and Hockey Canada"* — ⚠️ **while the
  Common Mistakes bullet in the SAME FILE named four, including CARHA.** The document contradicted
  itself. Corrected to four, CARHA's Glossary entry *Creases* cited.
- **The PWHL was MISSING from the charging-ejection scope.** `sources/pwhl_rules.txt:4473` prints the
  NHL's sentence word for word. Two layers said *"in every book"* and named five; both now name six
  **and say six**, so the claim is self-verifying within the sentence rather than resting on an
  unstated set.

⚠️ **THE REPAIR FORM IS THE LESSON: make the sentence carry its own count.** *"In every book"* plus a
list of five is unfalsifiable by a reader and goes stale silently as `sources/` grows. A census
confirms the corpus mostly uses the **count-free** form already — *"every book that settles the
question in its rule text or glossary"* (`rink_map.md:18`/`:638`, `special_teams.md:1151`) — **which
is the pattern to copy.**

---


## ⚠️ NEW — `winger.md` KT8 GOT LONGER, AND THAT WAS THE RIGHT CALL

KT8 is the **~1,300-word crease-law unit voiced aloud as ONE block** that CLAUDE.md names as the
corpus's worst offender. This wave **added a seventh clause to it**, correcting two book-scope
errors inside it.

⚠️ **The agent declined to demote it in the same pass and was right:** *"doing it in the same pass as
a scope correction would have been the sweep this project warns against."* Demoting it needs a
**per-limb carrier test** — several limbs may be the only place a tariff lives outside its own
section.

**Row: KT8 demotion, with the carrier list supplied.** ⚠️ **Not one agent for the whole takeaway.**

---


## 🔴 NEW 23 September 2026 — THE PWHL IS A FIFTH TRAPEZOID BOOK AND `goaltender.md` NEVER NAMES IT

Found while repairing the trapezoid scope, **deliberately not acted on**, and the agent's reasoning
for not acting is the right one: adding a fourth book to one paragraph would leave the document's
own *"all five books"* and *"all four books"* arithmetic unreconciled in every other paragraph —
**a half-done propagation.**

Verified in primary text (rule numbers, not pages — `sources/README.md` records an eleven-stale
running-header dating trap in this file):

- **PWHL Rule 1.8** — *"No restricted Goalkeeper's Area, which will be known as a 'trapezoid' will
  be enforced."* (`sources/pwhl_rules.txt:871`)
- **PWHL Rule 27.8** — *"The PWHL does not apply a restricted area for goalkeepers."* (`:3044`)

⚠️ **And the PWHL contradicts itself the way the IIHF does:** **65.2(viii)** — ⚠️ **NOT 63.2(viii): the PWHL RENUMBERS, and its Rule 63 is SLASHING. 63.2(viii) is the NHL's number and is correct everywhere it appears for the NHL. This line carried the NHL's number into a PWHL sentence, and an agent caught it before it shipped a citation pointing at a slashing rule** — still carries the
NHL's inherited *"plays the puck outside of the designated area behind the net"* clause, and
**Table 11 row (vi)** still lists *"Playing puck in restricted area"*. **The operative rules abolish
it; the delay-of-game list and the summary table are stale furniture.**

⚠️ **`grep -c PWHL content/positions/goaltender.md` returns 0, while NINE other documents name it**
and `rules_primer.md:23` already counts it in scope (*"which makes six"*).

**Row — one scoped pass, not a side-effect:** `goaltender.md`, `breakouts.md:949`/`:973`/`:1047`,
`defender.md:168`, `rules_primer.md`, and the style guide's owner rows.

---


## ⚠️ NEW — AND THE PWHL BREAKS AN "NHL AND IIHF" FRAMING FOR OVER-THE-GLASS TOO

`sources/pwhl_rules.txt:5330` — **Rule 65.2(iii)**, *"Shooting or batting the puck (with the hand or
with the stick) over the glass from the defending zone"* — **is the strict over-the-glass minor.**

⚠️ **So the corpus-wide "the NHL and IIHF" framing for this rule is a four-book scope stated in a
directory holding 42.** `defender.md`'s own sentences are **affirmative rather than denials**, so
nothing there is wrong — ⚠️ **but any sibling that writes "only the NHL and IIHF" IS.** Census the
corpus for the denial form. This is CLAUDE.md's *"you checked four books and this corpus holds ten"*,
live again.

---


## ⚠️ NEW 23 September 2026 — TWO OWNERS LEAD WITH DIFFERENT PLAYERS FOR THE HIGH SLOT

Found by the `center.md` repair agent, which explicitly said it was **reporting rather than
resolving** because it owned neither file. ⚠️ **The cross-check method could not have found this:
it asks "does the borrower match the owner", so where two OWNERS disagree it has no test.**

- `content/foundation/rink_map.md:629` — *"under the low zone collapse assumed here the goalmouth
  belongs to the weak-side defenceman and **the high slot to the centre**, or to the weak-side
  winger covering down for them"*
- `content/systems/defensive_zone_coverage.md:150` — **Centre | Low support, strong side**;
  `:152` — **Weak-side winger | …collapsing into the high slot when the centre goes low**

**They reconcile** — the centre has it by default, the winger fills when the centre goes low — and
`rink_map.md` hedges correctly (*"who owns each is a coaching choice rather than a law"*). **But
they LEAD with different players, and a reader who meets only one gets a different default.**

**Row:** one agent, both files, decide which leads and make the other point at it. Not a critical;
neither statement is false. ⚠️ **Do not "fix" this by deleting a hedge** — `rink_map.md:629`'s
coaching-choice flag is non-negotiable 7 done correctly.

---


## 🔴 A STALE COUNT IN THE CORPUS'S MOST SAFETY-CRITICAL RULE — CHECKING FROM BEHIND

**Found 22 September 2026 by the `playing_without_the_puck.md` agent, which verified it and then
DELIBERATELY DID NOT FIX IT** — correctly, because it had not read the operative text closely enough to
write the tier language. **That restraint is the finding's provenance and it is the right call.**

`content/hockey-iq/playing_without_the_puck.md:721`, `:874` and **Key Takeaway 10 (`:935`)** all say
**three of the four books** reach a match penalty for checking from behind, naming USA Hockey 608(c),
Hockey Canada 7.5(c) and NHL 43.4.

**Two more books reach it:**
- **CARHA Rule 53(a)** — *"A Match penalty could also be assessed under this rule."*
- **PWHL 43.4** is headed *"Match Penalty"* (`pwhl_rules.txt:403`, `:4518`)
- **IIHF Rule 43 does NOT** — 43.3 is major + game misconduct, 43.4 is *"DISCIPLINARY MEASURES"*

**So five books, not three.** ⚠️ **The count is UNDERSTATED, which is safe in direction** — nobody is
hurt by being told fewer books punish it — **but it is the same staleness mechanism that produced two
criticals today, sitting in the rule this corpus treats as its most safety-critical.**

- [ ] **`rules-verifier` + `safety-reviewer` on those three sites.** Read PWHL 43.4 and CARHA 53(a)
  operative text in full. **Count-free repair.**

---


## ⚠️ CARHA'S MANDATORY EJECTION IS KEYED TO THE CREASE — the repair that would have over-promised

**The `goaltender.md` agent caught this and every earlier repair today missed it.** CARHA 52(b)'s
mandatory major + game misconduct applies *"while the goalkeeper is **within the goal crease**"*.
**Hockey Canada 8.5(b) has no such limit and 8.5 protects the goaltender *"anywhere on the ice"*.**
Outside the crease CARHA's Note puts the tier back in the referee's hands, under *"A goalkeeper is NOT
'fair game' just because they are outside the goal crease area."*

⚠️⚠️ **"A repair that had simply bolted CARHA on as a second Hockey Canada would have over-promised
protection to a goaltender who gets run at the top of the circles."** — the agent's own words.
**Every layer it wrote carries the crease limit.**

- [ ] ⚠️ **Check the OTHER CARHA repairs made today for the same over-promise** — `winger.md`,
  `center.md`, `shooting.md`, `rules_primer.md`. **They were written before this limit was known.**

---


## ⚠️ A FALSE ZERO THAT FLATTENING CANNOT REPAIR — SCOPE UNKNOWN

**Full detail in [`sources/README.md`](../../sources/README.md), recorded 22 September 2026 after two
agents hit it independently on the same rule.**

`grep -ci "on the crease line"` returns **0** in all four NHL and PWHL extractions **and stays 0 when
flattened**. The phrase is there — `nhl_rules_layout.txt:9286-9290`, Reference Table 14 row E — but the
result column interleaves **inside** the sentence: *"plants himself on | **Goal is allowed.** | the
crease line or outside the goal crease…"*

⚠️⚠️ **THE INTRUDER IS CONTENT, NOT PAGE FURNITURE, SO NO NORMALISATION REMOVES IT.** This is why it
is different from the splice already recorded in `sources/README.md`, and why
**`scripts/check_quote_drift.py` cannot see past it either** — two verbatim, correct quotations of row
E both score **NOT FOUND**. **A `notfound` on a table-row quotation is not evidence of drift.**

- [ ] ⚠️ **THE SCOPE IS UNKNOWN AND THAT IS THE ROW.** Row E is the row we happened to look at **by
  eye**. **If the interleave is general to Reference Table 14, or to the IIHF's Appendix IV Table 16,
  then other situation-row claims in this corpus may rest on greps that returned a FALSE ZERO** — and
  no tool on disk would say so. **Census the `_layout` extractions of both tables row by row.**
- [ ] **Consider whether `check_quote_drift.py` should say so in its own docstring.** It currently
  names alphanumeric-only matching as the thing that DEFEATS splices; that is true of page furniture
  and false of two-column tables. **A tool that documents a limit it does not have is worse than one
  that documents nothing.**

---


### 📌 THE EIHL COVERAGE FIGURE WAS WRONG IN BOTH DIRECTIONS

`uk_rules.md` said *"only a **minority** of its rules are reported here"*. ⚠️ **It is exactly half** —
**eleven of the Casebook's twenty-two rule numbers.** The previous figure, *"nine"*, was **stale**,
overtaken by this round's own additions.

✅ **Replaced with a SELF-CHECKING construction** the reader can count off the same sentence, which also
agrees with `rules_primer.md`'s independently-derived *"twenty-two rule numbers"*. ⚠️ **A number copied
out of its owner goes stale silently; one the sentence lets you verify does not.**

⚠️ **And an edition label was missing on a quotation that exists in only ONE edition** — *"the standard
penalty for a Player engaged in a fight"* is **2026/27 only**, quoted one paragraph below a
characterisation of the **2025/26** 46.1, under an Overview saying every Rule 46 number in the document
is the 2025/26 book's.



### 🔴 NEW — THE SLASH DEFECT WAS LIVE IN TWO FILES AND VERIFIED IN THE RENDER

Both files quoted the Casebook heading *"Leaving the Player **/** Penalty Bench (Also see Rule 70)"*.
`md_to_speech.py:355` rewrites `/` → `" or "` **globally**, so a listener heard
*"Leaving the Player **or** Penalty Bench"* — **a quotation the Casebook does not contain, inside quote
marks, in the layer read aloud.**

⚠️ **Splitting the quote does NOT help here** — unlike the doubled numeral, **the substitution is not
quote-scoped.** Repaired in both by replacing the quotation with a faithful description and keeping the
exact string only in the **unvoiced** Sources trailer. `check_quote_drift`'s `notfound` fell by one in
each file.


### 🔴 NEW — A QUOTATION CREDITED TO THE NHL THAT THE NHL DOES NOT PRINT

`faceoffs.md:459` said IIHF 76.7 *"carries the escalation **in the NHL's own terms**"* and then quoted
*"When **two (2)** 'face-off' violations…"*. **That string is the IIHF's.** The NHL prints *"When **a
least two** face-off violations…"* (`nhl_rules.txt:8151-8153`) — ⚠️ **including the NHL's own slip,
"a least" for "at least"** — with `face-off` unquoted.

**So *"in the NHL's own terms"* was FALSE.** Repaired by quoting NHL 76.7's actual sentence alongside,
with the slip flagged as the book's. ⚠️ **The substantive claim — two violations by one team on one draw
is a bench minor in all three books — was correct and is unchanged.**

✅ **And the Rule 76 edition check came back clean:** the numbering is **identical** across NHL, IIHF
v1.1 and IIHF 2026/27 (76.4 CENTERS, 76.6 OTHER PLAYERS, 76.7 VIOLATIONS); **no 76.x citation in the
document is mis-cited**; and the edition split is already disclosed at **six** layers. ⚠️ **v1.1's
Rule 76 contains the word "eject" ZERO times** — the corpus's trap note about that was verified.


### 🔴🔴 CRITICAL — A REPAIR CREATED A PERMISSION, AND THE SAFETY PASS OVER IT CAUGHT THAT

**Second time today that a `safety-reviewer` reading a `rules-verifier`'s repair has found a Critical.**

`uk_rules.md` had been repaired to read *"in the Elite League a first plain willing fight can leave you
in the game, and the second cannot."* ⚠️ **A softening stated as a flat two-step ladder with rung one
presented as safe.** A reader hears *"my first fight won't end my game"* and takes it.

**Three limbs the paragraph omitted, all in the same Casebook Rule 46 it was quoting:**
1. **46.1's own words are *"at least a Major Penalty"*** — ⚠️ **the corpus quoted the words and then
   glossed the floor as a ceiling.**
2. ⚠️⚠️ **Casebook 46.2 Altercation, never quoted anywhere in the corpus:** *"A game misconduct penalty
   shall be imposed on any player who is assessed a major penalty for fighting **after the original
   altercation has started**."* **So a fighting major that is not the original altercation is an
   automatic game misconduct ON THE FIRST MAJOR.** Stop-at-rung-one, in the permission direction.
3. **IIHF 20.4's two-majors trigger is untouched by the Casebook.**

⚠️ **And an unsourced scope claim rode along:** the Casebook says *"Note for their 2nd Major Penalty"*
and **never says whether that second is counted in the game or across the season** — yet the Key
Takeaway asserted *"of the game"*. Its own supplementary-discipline table counts majors *"during the
EIHL regular season"*, **so the season reading is live.** Repaired by **naming the ambiguity** and
telling the reader to read it the stricter way and ask the League. ⚠️ **It must stay unresolved.**


### 🔴 NEW — TWO DOCUMENTS NOW OWN THE SAME SECTION, WRITTEN BLIND TO EACH OTHER

`body_contact_and_battles.md` and `uk_rules.md` **both** carry a §*"Leaving the bench or the box during
an altercation"*, both written today, **by two agents who could not see each other's work.**

⚠️ **This is the exact defect this repository has recorded before** — individually-correct, flatly
contradictory sentences, caught only by diffing whole files. The safety reviewer named it and could not
fix it: *"I could only read one of them as a snapshot. Someone should diff them after all agents
finish."* **Dispatched 22 Sep, all agents in both files finished first.**

**The specific tensions:** whether both price IIHF **70.3** (bench → game misconduct, **no minor**) and
**70.4** (box → minor + game misconduct) as *separate doors*; whether both carry that the EIHL suspension
is scoped to *"to join an altercation"* while **IIHF 70.1 is wider**, so **the penalty can land where the
suspension does not**; and whether the Critical above reached the sibling.


### ⚠️ A PRE-EXISTING CLAIM MADE SELF-CONTRADICTORY BY A NEW REPAIR — and the mechanism is general

`uk_rules.md` carried *"Leaving the bench or box during an altercation is still a minor plus a game
misconduct either way"* — ⚠️ **wrong for the BENCH in both editions**: IIHF **70.3** gives a game
misconduct with **no minor**; **70.4** gives minor + game misconduct for the **box**.

⚠️⚠️ **Eight lines earlier, the new text now said *"either a 20 (Game Misconduct) penalty or 2 + 20"*.
Two sentences in one section, each defensible alone, flatly contradictory read aloud.** The new text did
not create the error — **it made an existing one visible and load-bearing.**

**The general lesson: adding correct detail can break a neighbouring summary that was getting away with
being loose.** Nothing mechanical reports that.


### 🔴🔴 EIHL RULE 46 REFUTED TWO NEGATIVE EXISTENCE CLAIMS — including one the corpus said it had checked

Taking Rule 46 first was the right call and it paid immediately.

**1 · A negative the corpus explicitly claimed to have verified.** `uk_rules.md` said of bench-leaving:
*"Nothing domestic amends it, **and that negative was looked for rather than assumed**."* ⚠️ **EIHL
Casebook Rule 46, FINES AND SUSPENSIONS (2) attaches an automatic minimum of THREE GAMES**, and
cross-references Rule 70 by name. The in-game penalty is unchanged, so nobody was told the wrong thing
to *do* — **but they were told no British document adds to it, and one does.**

**2 · Key Takeaway 7 said the EIHL softening did not exist.** It read *"The only domestic softening is
the plain willing fight, in NIHL, SNL and BUIHA Varsity."* ⚠️ **The EIHL is a SECOND softening, by a
different mechanism**: Casebook 46.1 holds the automatic game misconduct back to a player's **second**
fighting major, where IIHF 46.1 makes it the standard penalty on the first.

⚠️⚠️ **DIRECTION, AND IT IS EASY TO INVERT: two of these make the EIHL LIGHTER IN-GAME than the IIHF
book and HEAVIER IN SUSPENSION.** The instigator tariff is minor + major + ten-minute misconduct where
IIHF 46.10 gives an automatic game misconduct — but the final five minutes add a game, and the coach is
exposed. **It is both stricter and more lenient, on different axes. Do not let anyone flatten that.**

**Also found and written in:** a Casebook minor the IIHF book has **no limb for at all** — an
unsportsmanlike minor for a player in an altercation *"[who] does not have his sweater properly tied
down"* — and automatic suspensions keyed to a **season COUNT** of fighting majors (10th → one game;
14th → two per additional), reset for the play-offs.

**Under `safety-reviewer` now.** ⚠️ **Propagation to `body_contact_and_battles.md` dispatched** — it
prices fighting and bench-leaving across four books and was named as the highest-value follow-up.


### 🔴🔴 THE REAL DEFECT THE DISPATCH FOUND — a closed four-book field asserted TWO LINES from a six-book one, in the same block

Five statements asserted a **closed field of four books** on the airborne trail skate. In **both** files
that assertion sat **inside the same ` ```facts ` block**, two lines from a line naming five or six:

- `center.md:262` *"…not the NHL, USA Hockey, Hockey Canada, CARHA or the PWHL"* → `:264` *"two books
  of the four"*
- `neutral_zone_systems.md:48` *"two books of the four require contact"* → `:50` *"neither do the IIHF,
  USA Hockey, Hockey Canada or CARHA books"*

⚠️ **Each facts line is voiced ALONE with 300 ms either side. A listener hears the field is six, then
hears it is four, in adjacent utterances.**

⚠️ **Why it is worse than arithmetic:** the trail-skate drag is a **taught technique**, and a CARHA
beer-leaguer told *"the NHL and IIHF let you lift it, two of the four don't"* is invited to place their
own book in the permissive group **by resemblance** — which the owner document warns against in terms.
**Repaired in 8 lines across both files, every count scoped to the offside rule, CARHA kept as silent.**


### 🔴🔴 NEW — A CAPTION SPEAKS A FIFTH BOOK INTO A SECTION WHOSE OWN FACTS LINE SAYS FOUR

`center.md:415` embeds `![](diagram:oz-net-front-screen)`, whose caption is **owned by
`offensive_zone_play.md`**. Heard in the render of `center.md`: *"One rec book is stricter again: the
CARHA Hockey Official Rule Book, Rule 66(b), bars an attacking player from standing in the goal
crease…"*

⚠️ **Thirteen lines above it, `center.md:402` is voiced alone as *"three of the four books count that
line as part of the crease"*.** ⚠️⚠️ **The CARHA string appears NOWHERE in `content/` — it reaches the
listener only through the caption layer.**

**This is `check_caption_hosts.py`'s failure mode, live and audible.** ⚠️ **Caption text is a shared
constant** — editing it to fix this host would silently rewrite every caption importing it. The fix
belongs in `center.md`'s frame, not the caption.


### ⚠️ A RENDER CAUGHT TWO DEFECTS EVERY CHECKER PASSED — in the agent's OWN first edit

Found only because it rendered **twice**, before and after:

1. `center.md:759` — a bold/italic span crossing (`**…never defines its *"own side"** of the line`)
   rendered **a literal asterisk spoken into a Key Takeaway**. ⚠️ **`check_links`, `check_facts`,
   `check_absolutes` and `check_quote_drift` all passed it.**
2. A Key Takeaway opening *"Two books turn a habit…"* — a **bare count voiced alone in the
   most-extracted layer**. Substituted the names, which was **shorter than pointing at them**, as the
   standing guidance predicts.

⚠️ **The lesson is dispatchable: an agent that renders only AFTER editing cannot catch a defect it
introduced in the rendering itself. Render before and after.**


