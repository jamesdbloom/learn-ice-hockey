# The P2 wave that found no P2 work and eleven P1 defects, 25 September 2026

**7 `content/` files** — `systems/special_teams.md`, `positions/goaltender.md`,
`foundation/uk_rules.md`, `technique/body_contact_and_battles.md`, `systems/offensive_zone_play.md`,
`systems/forechecking_systems.md`, `systems/faceoffs.md`. ⚠️ **No agent total is written here — an
earlier draft said *"eighteen"* and the wave kept going through four gate rounds after it. The
per-file coverage list below is the authority.** **Zero speculative edits** — every agent that could not
reproduce its brief's premise measured, refuted it, and stopped.

## The wave was dispatched on the wrong number, and the agents caught it

**The coordinator ranked eight documents by `check_callout_flow.py`'s DEFAULT census** — the
`classify()` figure CLAUDE.md documents as over-counting, because it files any paragraph opening
`**bold**` as "own paragraph" wherever its marker sits. ⚠️ **The same brief warned all eight agents
that the sibling `--stacks` over-counts.**

| | default census | **real panels** |
|---|---|---|
| eight briefed documents | **380** | **4** |
| corpus-wide | — | **58 of 1,598 marker-bearing lines** |

✅ **The marker-placement wave was already complete** — commits `dff5ae7`, `8a5ad1b`, `9dba344`.
⚠️ **Driving the default figure down requires DE-MARKING, which silently deletes spoken escalations
and no checker can see it.** **So that figure must never be a target. Track `--panels`.**

**Three agents validated `--panels` against the built HTML rather than trusting it.** `rules_primer`:
0 `callout-warning`, 386 `warn-inline`, 389 raw glyphs — the 3-glyph gap all inside `<svg><desc>`,
which has no visible rendering. `goaltender`: verified three ways, including `grep -c '^\s*[>]*\s*(⚠|❗|🚫)'`
returning 0, conclusive independent of the tool because `WARNING_RE` is anchored.
⚠️ **One agent's FIRST count said 9 untreated glyphs; it re-checked, found its own region matcher was
closing spans early, and corrected itself: *"No agent should be dispatched on my first number."***

## Both follow-up P2 findings were also measurement artefacts

- ❌ *"`rules_primer` is 4.6× the safe amber density"* — **it is 1.09×.** Raw counts across bodies
  differing by 4.5×. Normalised per 10k body characters: 5.9 against `uk_rules`' 5.4.
  **`body_contact_and_battles` is BELOW the reference.**
- ❌ *"a 13,757-character bullet voiced as ONE unit"* — **`MAX_BILLED_CHARS = 2800` splits it.**
  Measured: `rules_primer` 279 chunks, longest **2,814**. **A markdown line length is not a spoken unit.**

📌 **The reproducible density unit is `1,640 characters of body text between marks` (137,732 ÷ 84).**
CLAUDE.md's "~530 px" cannot be re-derived from `dist`, and its "83" is **84** in the built page.

## What the wave actually found — all P1, in files briefed for punctuation

**Two Criticals, both permissive and penalty-bearing, both in `special_teams.md`:**
- **CARHA Rule 58 runs all three tiers** — minor, penalty shot, awarded goal — under a section saying
  *"all four books"*. ⚠️ **The document already cited CARHA 58(b) at three sites. Nobody read 58(a) or
  58(c), immediately above and below it.** ⚠️⚠️ **AND THE COORDINATOR'S OWN CORRECTED FRAME WOULD HAVE
  SHIPPED A SECOND DEFECT: Note 1 to 58(c) reads flat, but the Rule 36(b) it points to CONDITIONS it —
  USA Hockey's condition, in CARHA's book.** *A Situation read to its own citation is read half.*
- **`:1054`, a `Rule:` line voiced alone** — *"Hockey Canada and USA Hockey write none"*, **false in
  both possible readings**, while the body and Common Mistakes both had it right.

**A Critical created by a repair, caught by the next agent:** `goaltender.md`'s net-front section told a
**PWHL** goaltender that the rows pricing her own crease contact belong to other books. **PWHL 66.1 and
its own Table 14 §6 carry the same eight rows** — and `:1340` had been corrected to *"all six books"* in
the same session, so the exclusion was inconsistent as well as wrong. Repaired in four layers.

**A regulation contradicted:** `uk_rules.md` KT9 told a coach *"your best shooter can take more than one
of the three"*. **NIHL 1 & 2 open a repeat only *"(AFTER the initial 3 shots have been taken)"*; the SNL
only *"after every full round of three"*.** Found because the In-House Appendix repeats its overtime
block **five times with one parenthetical differing**.

**An exposure-widener nobody had looked for:** IIHF **46.10**'s instigator criteria gained **"(or
season)"** — `or season` scores **0** in the old book — so a grudge from a fixture months ago can eject
you, and a final-five-minutes limb reaches **the coach**. The document said *"five clauses changed"*;
the agent replaced the count with *"several"*, because ⚠️ **a count it could not bound is not a count it
should write.**

**Plus:** NHL/IIHF/PWHL **69.2** is mandatory and unbounded where a ⚠️ line implied a bare minor;
**42.1**'s *"unnecessary contact… in every case"*; a false four-book tip frame in **four** layers where
the brief named two; the video-review bar stated without the Elite League in two summary layers; and a
`§` pointer aimed at a heading that had been renamed **to add the Elite League limb**.

## Method findings this round produced

1. ⚠️⚠️ **ADDING TEXT TO A LONG BULLET RE-CUTS EVERY CHUNK AFTER IT.** An insertion pushed a
   **mandatory ejection to a chunk head with no book named and no adult-league scope.** **Markers,
   spoken `"Important."` and paragraph counts were ALL UNCHANGED.** ✅ **Only a chunk-boundary diff
   against a baseline render finds it.** **The three marker measurements are necessary and NOT
   sufficient for any edit that adds length.**
2. ⚠️ **`carha.txt` SPLICES A PAGE FOOTER MID-WORD, and alphanumeric flattening does NOT defeat it** —
   the footer is itself alphanumerics. A correct quotation scores **NOT FOUND**. Recorded in
   `sources/README.md`; only the EIHL and USA Hockey Casebooks were listed before.
3. ⚠️ **`check_instruction_first.py` measures POSITION, not PRESENCE** — a bullet with no instruction at
   all scores clean by construction. **Six were found in one file and eight repaired.**
4. ⚠️ **A four-book frame that names no count and no book name** — *"under every book"*, *"whichever
   book you play under"* — **is invisible to every search for "four books" or for a book's name.**

## Every declared weakest negative that was tested came back REAL

*"I swept CARHA and not the other five"* → the shape in the NHL, IIHF and PWHL, one permissive ·
*"I diffed Rule 46 against Rule 46"* → a consequence moved out of Rule 46 returns a true negative ·
*"my counts are of the usual five, not every book on disk"* → the PWHL prints the rule ·
*"I checked the rule the brief named"* → CARHA had **four** rules where the file cited one.
**Two were defects in text the same agent had just shipped.**

## Coverage — D1 to D15
**D1** `rules-verifier` ×5, every limb re-derived from primary text; Appendix IV tables read **by eye and
positionally**, because a flattened read of a tick grid returns a false zero. **D2** no new external URL
in the diff; `sources/README.md` gained a verified extraction trap. **D3** no coaching choice as law.
**D4** layer test run per file, with what was already correct named. **D5** no numeric fact moved;
`check_counts.py --update` converged. **D6** the round's subject; four true negatives attacked, three
broke. **D7** see the per-file coverage list below, which supersedes any bare count; every repair moves
toward a stricter reading. **D8** the count that
could not be bounded was replaced, not guessed. **D9** every file re-rendered; chunk tails and chunk
**boundaries** both checked. **D10** claims chased across layers, not briefed lines. **D11/D12**
`check_links.py` and the build's `check-links` clean. **D13** built with the absolute npm binary;
`--panels` per file and `--bare` over `dist`; **5 bare glyphs, none in this diff**. **D14** nothing
stripped; disclosures attacked and upheld, incl. the `necklace` / `neck laceration` flattening trap.
**D15** ladder wording compared across sites after the agents finished.

⚠️ **COVERAGE PER FILE, because C3 makes silence the failure and a bare *"×5"* hid it:**
`special_teams` — `content-reviewer`, then `rules-verifier` ×2 · `goaltender` — `content-reviewer`,
`rules-verifier`, `safety-reviewer` ×2 · `uk_rules` — `content-reviewer`, `content-reviewer`,
`rules-verifier`, `safety-reviewer` · `body_contact_and_battles` — `content-reviewer`,
`safety-reviewer` ×2, `rules-verifier` · `offensive_zone_play` — `content-reviewer`,
`rules-verifier` ×2, `safety-reviewer`, and a `commit-gate` re-derivation of its CARHA 62(d) and
52(b)/54(c)/66(b) material from primary text. ⚠️⚠️ **THIS LINE READ *"NO `safety-reviewer` has read its
new contact material"* AND A FOURTH GATE BLOCKED ON IT — the reviewer HAD run, HAD found the round's
Critical, and the record narrated that eighty lines below while the coverage list still said
otherwise.** ⚠️ **The round-10 shape reproduced inside the record that documents it: the finding
reached the narrative and stopped before the list.** ⚠️ **Direction was the UNDERSTATING one — it made
the commit look LESS reviewed than it was — which is why nobody stopped on it.** · `forechecking_systems`
— `content-reviewer` only, **one terminator repair, no rules claim added** · `faceoffs` —
`content-reviewer` only, **one book added to an enumeration, verified in primary text.**
**Out of scope:** helmets, neck protectors, concussion, conditioning, equipment.

## Corrections to the coordinator's own briefs — six
1. A trailer entry claimed missing **was already there**. 2. *"body `:1346` names the PWHL"* — **it does
not**. 3. A chunk-headroom ordering **not reproducible**, and **KT13 was not the tightest chunk** — eight
were tighter, one at **five characters**. 4. *"six of seven Overview bullets carry an Elite League
limb"* — **three**. 5. A replacement sketch measured **240 against a 200-character cap** and would have
forced a caveat out. 6. ⚠️ **Six "instructions already in the document" relayed from another agent's
table — FIVE DO NOT EXIST VERBATIM.** ⚠️ **A carrier phrase in a brief is a claim like any other.**

## Open after this commit
- **USA Hockey's GLOSSARY defines defenceless as *"unaware, unprepared or unsuspecting of an impending
  body check AND/OR COMPETITIVE CONTACT"*** — wider than the preface form the corpus quotes. ⚠️ **The
  IIHF's carries a possession limb; state them alike and a British reader is told something false.**
  **Deliberately not repaired: it needs four layers, and that is a brief, not a patch.**
- **Four chunk heads open on a penalty tier with no book named** — 069, 073, 089, 183. **Pre-existing.**
- **Diff IIHF Rules 20, 22, 28 and 70 across editions** for fighting-keyed limbs.
- **`sources/hc.txt` is superseded**; only Rule 7.5 was diffed.
- **Superlatives unswept corpus-wide**; the three read are correctly scoped.
- **PWHL Table 14 read from a column-interleaved extraction** — render it with `pdftoppm` to confirm row order.

## What this round could not have found
**The method is good at a sentence that says too much and weak at one that says too little.** Every
defect was found because a heading or citation advertised the subject. ⚠️ ***"A paragraph that assumes
the old answer without naming it would have passed every search run."*** ⚠️ **And one agent nearly filed
a false critical: its grep of the Key Takeaways for *"from behind"* returned nothing when the layer
already carried the limb in the corpus's own words — *"into the back"*.** ***A layer test run on the
corpus's wording rather than the rulebook's manufactures a false gap.***

## The gate blocked this commit, and all three findings were real

⚠️⚠️ **THE CLOSED BOOK-COUNT RECURRED INSIDE THE COMMIT THAT REPAIRED IT, THREE TIMES**, after this
round had already filed it as its third Critical.

1. **`special_teams.md` used *"the five books"* for TWO DIFFERENT SETS, and this diff authored both.**
   `:745`/`:760`/`:770`/`:772` meant NHL + IIHF + USA Hockey + Hockey Canada + **CARHA**; `:1060` meant
   a set containing the **PWHL** and excluding CARHA. ⚠️ **Both facts lines, both voiced alone with a
   300 ms break either side. A listener hearing the phrase twice cannot resolve which five.**
2. **The PWHL prints every tier of the ladder the diff re-declared closed over *"all five books"*** —
   **65.2(v)** the minor (NHL 63.2(v) word for word), **65.6** the penalty shot, **69.5** the awarded
   goal **flat**.
3. **`offensive_zone_play.md` KT11, voiced alone** — *"two of the five have no crossbar at all"* while
   **PWHL 82.3** prints the contact-point test verbatim. **Permissive for a PWHL reader.**

### ⚠️ THE COORDINATOR'S CLEARING BRIEF CARRIED THREE MORE ERRORS, ALL CAUGHT
- **A wrong citation:** *"PWHL 65.2(vii) — deliberately falling on the puck"*. **That string is at
  `:5835` inside 65.9 *Infractions*; 65.2(vii) is the GOALKEEPER limb.** The skater's minor is
  **65.2(v)**.
- ⚠️⚠️ **A SECOND FALSE SUPERLATIVE: *"the PWHL is the stricter column here."*** **NHL 67.5 is equally
  flat** (`nhl_rules.txt:7040-7042`) and IIHF 67.5 materially identical — **the PWHL is TIED at the
  strict end; only USA Hockey 614(b) and CARHA's Rule 36(b) condition it.** ⚠️ **The agent had already
  written *"the strictest book here"* into the file before catching it.** **That is the second false
  superlative this coordinator's briefing produced tonight; the first reached the corpus.**
- **A propagation that was wrong in both halves:** the faceoff material carries **two** claims that both
  said *"three of the five"*, and they move in **opposite** directions. **PWHL 78.7 is discretionary on
  physical contact at the dot** (joining the NHL and IIHF) **and MANDATORY on a second violation**
  (joining USA Hockey). Corrected to *"automatic in four of the six books and a judgement call in the
  other two."*

### ✅ AND THE OLD LINE WAS WRONG AS WELL AS AMBIGUOUS
*"CARHA is silent"* — **CARHA is not silent on the net front.** `carha.txt:3106+` **66(b)** bars a
position inside the crease. **What CARHA lacks is a SCREENING/VISION rule**, verified by sweeping the
act not the label: `screen` 0, `sightline` 0, `obscur` 0, `goalkeepersview` 0, `impairsthegoalkeeper` 0
— and ⚠️ **`view` scores 6, ALL SIX the word *"review"*.**

### 📌 Mechanics worth keeping
⚠️ **THE PWHL RENUMBERS, so a rule-number search returns a TRUE NEGATIVE on a rule that exists:**
rebound carve-out NHL 69.7 → **PWHL 71.7**; abandoned puck NHL/IIHF 72.3 → **PWHL 74.3**; icing NHL 81
→ **PWHL 83**. ⚠️ **And PWHL Rule 69 is *Handling Puck*, stopping at 69.6.**
⚠️ **ADDING A BOOK CAN FALSIFY A SUPERLATIVE YOU NEVER TOUCHED** — `offensive_zone_play.md:502`'s
*"the most explicit of the three"* would have shipped false, because **PWHL 37.5 prints that
parenthetical word for word.** **After changing any count, sweep the file for `most`, `only`, `alone`,
`strictest`.**
📌 **For the crossbar test cite PWHL 82.3, not 37.5** — 37.5 is the *Video Review* rule; **82.3 is the
playing rule and the direct counterpart to NHL 80.3.** The gate briefed 37.5; the agent found better.

### 🔴 AND THE LARGEST THING THIS WAVE FOUND IS OPEN
**A sweep of ONE file found ~75 closed-count sites. Eleven were repaired; the rest are unchecked**,
most in a goaltender-interference cluster in a document that already cites PWHL 71.1, 71.3 and 71.7.
✅ **The model is in the same file — `:1151` scopes it as *"the five books it covers"*.**

## The gate blocked a SECOND time, and three of its four findings were created by the first repair

⚠️⚠️ **THE ROUND'S OWN METHOD FINDING WAS REPRODUCED BY THE ROUND, AND THE COORDINATOR CERTIFIED IT
CLEAN ON A MEASUREMENT TAKEN AGAINST THE WRONG BASELINE.**

**B-3, the worst.** The agents measured chunk heads **against the staged file, not HEAD** — so *"139 →
139"* compared the file to itself and was vacuous. ⚠️ **Against HEAD it is 134 → 139.**
- ⚠️⚠️ **Chunk 119 (835 chars, VOICED ALONE) was NEWLY CREATED and opened a complete ladder — minor plus
  misconduct / major plus game misconduct / match penalty — WITH NO BOOK NAMED ANYWHERE IN THE BREATH**,
  pointing at *"Note 1 above"*, **a breath the listener can no longer consult.** At HEAD that text sat
  **2,116 characters inside a chunk that names USA Hockey.**
- **Chunk 116** opened *"What **it** does write… at Rule 66(b)"* — antecedent-free pronoun, bare rule
  number, **and CARHA's adult-league scope nowhere in the chunk.**
- **112/113/114** likewise promoted to heads with unresolved antecedents.
✅ **All repaired by naming the book — and CARHA's scope — in the opening sentence, then re-deriving the
diff against a HEAD render. Tree still 139 chunks; no new head created.** ✅ **A sweep of all 139 heads
for penalty vocabulary with no book name returned two hits, both non-defects.**
⚠️⚠️ **THE COORDINATOR BRIEFED CHUNK 119 AS "PRE-EXISTING". IT WAS NOT.** **A relayed measurement is a
claim like any other, and this one certified as safe the exact defect the round had written into the
plan two hours earlier.**

**B-1 — the previous repair's own defect, surviving one site over.** `:753`/`:754` correctly said *"five
of the six"* **and named CARHA's different test**; `:878` said *"six books"* and flattened CARHA into the
count. **CARHA 61(b) has no crease element, no pressure element, and an explicit referee-opinion
element.** ⚠️ **Direction: harsher and simpler.** ✅ **Repaired by substitution** — and ⚠️ **the agent
reverted its own first attempt, which had dropped Hockey Canada's *"after a warning"* to fit the 300-char
cap: the same harsher-and-simpler direction as the defect it was sent to fix.**

**B-2 — the round-10 shape inside a bullet the same edit had touched.** Body `:1012` was corrected to
name the PWHL as discretionary; **Common Mistakes `:1162` was not.** The correction reached the body and
stopped.

**B-4 — the review record predated the file it certified by 3m19s.** ⚠️ **The coordinator reported
02:54; that was `OPEN_ITEMS.md`'s mtime, not the record's.** **Fourth recorded instance of the ordering
failure, caught by a gate checking the file rather than the claim about it.**

### ✅ A sweep the coordinator then ran, on an agent's declared negative
**All 24 *"six books"* / *"of the six"* sites in `special_teams.md`.** ✅ **Every `Rule:` facts line
making a six-count names its books in the same voiced-alone breath** — `:662`, `:720`, `:745`, `:878`,
`:965`, `:1012`. **The remainder are body prose and Common Mistakes with the enumeration in the same
paragraph. A worklist, not a defect list.**

### ⚠️ THE COORDINATOR'S OWN ERROR RATE THIS ROUND, STATED BECAUSE IT IS THE METHOD'S MAIN RISK
**Nine briefed premises were refuted by the agents or the gates:** a trailer entry claimed missing that
was present · a body line said to name the PWHL that does not · a chunk-headroom table not reproducible,
with **KT13 named as tightest when eight chunks were tighter, one at five characters** · *"six of seven
Overview bullets"* when it was three · a replacement sketch at **240 against a 200-char cap** · **six
carrier phrases of which five do not exist verbatim** · a citation naming the **goalkeeper** limb for a
**skater's** minor · **two false superlatives** (*"the strictest book here"*, refuted by NHL 43.5 one
clause away, **which reached the corpus**; *"the PWHL is the stricter column"*, refuted by NHL 67.5 being
equally flat) · and **two relayed measurements** — the chunk baseline and the record's mtime.
⚠️⚠️ **THE PATTERN IS CONSISTENT: THE PREMISES HELD; THE MEASUREMENTS AND THE ADJECTIVES DID NOT.**
✅ **Every one was caught by an agent or a gate going to the source. That is the method working — but a
coordinator that relays a figure instead of deriving it is the method's single largest failure mode, and
it produced four of the nine.**

## The third gate blocked on C6, and C6 found a CRITICAL the diff had created

⚠️⚠️ **A `commit-gate` refused to let its own re-derivation substitute for a `safety-reviewer`** — *"a
`commit-gate` re-derivation is not a `safety-reviewer`, and C6 admits no exceptions"* — **and the
`safety-reviewer` it forced then found an INVERTED RULES CLAIM IN FOUR LAYERS, all four created by this
diff.** `git show HEAD:` and `HEAD~5` score **0** for every phrasing; the tree scored **4**.

### The defect
*"A tip between your own shoulders and the crossbar is a goal under the NHL, the IIHF, Hockey Canada
and the PWHL and no goal under USA Hockey and CARHA."* ⚠️⚠️ **Exactly backwards.**
**The crossbar is 4 ft and an adult's shoulder is higher, so that band is ABOVE the crossbar and BELOW
the shoulders.** **IIHF Situation 80.9 asks that exact fact pattern twice and answers *"No, as the
attacking player contacted the puck with the stick above the level of the crossbar, the goal cannot
count."*** **NHL 80.3 and PWHL 82.3 print the same crossbar test.** **USA Hockey 621(d) and CARHA 62(d)
cap at the shoulder, so the band is outside their rules and the goal stands.**
⚠️ **The mechanism: a claim about STICK HEIGHT re-described as a claim about CONTACT HEIGHT, which
reverses it.** **Both underlying claims are true; they are about different things.** ⚠️ **The document
already contradicted itself — `:502` states it correctly three sentences earlier, and BOTH summary
layers OPEN correctly and then invert in their own closing line.**

### ⚠️ AND THE REVIEWER'S PROPOSED CORRECTION WAS ALSO WRONG — it declared the gap against itself
> *"I did NOT open Hockey Canada 6.9(b) or PWHL 82.3's operative text. If either writes the crossbar
> test differently, then the 'four books' half of my correction is wrong."*

✅ **The coordinator tested it and it was live; a `rules-verifier` then found the limb NEITHER the corpus
NOR the reviewer had opened.** **Hockey Canada Interpretation 4 to Rule 6.9:** *"The puck, however, hits
the butt-end of the stick **below the level of the shoulder** and goes into the goal. **GOAL.** The
determining factor is the height at which the puck makes contact with the stick."*
⚠️⚠️ **So Hockey Canada's INTERPRETATION layer measures against the SHOULDER where 6.9(b) prints the
CROSSBAR, and 6.9(b) bars a goal only *"as the result of High-Sticking the Puck"*, which 6.9(a) defines
as above the SHOULDERS.** ✅ **The book prints both and reconciles neither. The agent SAID SO and shipped
the conservative reading rather than resolving a tension the book leaves open — so Hockey Canada belongs
in NEITHER column, and the proposed four-two split would have been wrong too.**

### ✅ Two negatives attacked rather than trusted
**`crossbar` is NOT zero in the shoulder books** — `usah` 4, `usah_casebook` 8, `carha` 5 — **and every
hit was read**: goal-frame dimensions, a goal judge's sightline, a puck deflecting out of play. ⚠️
**CARHA's five were line-broken as `cross bar`, which is why a raw grep returned 0.** **The negative is
real: neither book runs a crossbar test on a high stick.**
**And the coordinator tested the agent's own weakest negative** — USA Hockey's scoring rule allows a goal
*"propelled into the goal by the stick of an attacking player **provided it was done in accordance with
rule 621 High Sticks**."* ✅ **It adds no independent height condition; it defers to the shoulder test.
The band is genuinely untouched in that book.**

### ⚠️ AND THE REPAIR CREATED A CONTRADICTION THE AGENT CAUGHT IN ITSELF
Both summary layers **open** by listing Hockey Canada flatly among the crossbar books, while its new
closings say Hockey Canada settles neither. ✅ **It reconciled by ADDING precision to the openings,
never by shortening them** — and it caught a **silently lowered capital** in its own draft quotation and
replaced it with the complete source sentence.

### 📌 The other blocker: an attribution defect no tool can see
**`special_teams.md:1004` cited PWHL Rule 78.7 for a sentence that lives in 78.4 *Procedure – Centers*.**
⚠️ **The tell was in the corpus's own words — *"where a CENTRE commits"* is 78.4's language; 78.7 is
written about the TEAM.** **Substance and tier correct; locus wrong.** ⚠️ **`check_quote_drift.py` is
documented blind to attribution drift — second instance this week.**
✅ **Repaired by keeping 78.7 and quoting ITS own sentence**, because 78.4 would have muddied the
paragraph's contrast with USA Hockey 613(d)'s *individual* penalty. ⚠️ **The agent declined 78.7's other
mandatory sentence because the book carries a typo there — *"When a least two face–off violations"* —
and silently correcting it is the drift class this repository tracks.**
✅ **And the coordinator closed its declared negative: PWHL Rule 63 *Delaying the Game* carries ZERO
faceoff mentions in its body pass, so *"at Rule 78.7"* is not a half-answer.**
