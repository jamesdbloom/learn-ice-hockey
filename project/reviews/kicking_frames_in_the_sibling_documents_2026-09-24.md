# The kicking frames in the sibling documents — 24 September 2026

Two documents carried the **four-book kicking frame** repaired in
`body_contact_and_battles.md` earlier the same day. ⚠️ **Neither was fixed by widening a count. In one
the correct figure was FIVE, not six; in the other the books split THREE WAYS and no count can say it.**

**Files:** `content/technique/passing_and_receiving.md` · `content/technique/puck_handling.md` ·
`content/foundation/on_ice_communication.md`.

⚠️ **THE THIRD FILE WAS MISSING FROM THIS LINE UNTIL A COMMIT GATE BLOCKED ON IT (C8), AND IT CARRIES
THE LARGEST SHARE OF THE DIFF — five hunks.** *"A record that does not name a file names no reviewers
for it, no findings for it and no declared gaps for it."* **Its material was in the plan, and the plan
is not a review record.**

---

## 🔴 The finding that justifies the commit — a goaltender told he is penalised for something his book exempts

**`passing_and_receiving.md:453` said the kick shot *"is a minor penalty in itself"* with NO exception.**

**CARHA Rule 68** (`carha.txt:3224-3226`) reads: *"A Minor penalty shall be assessed to any player,
**except a goalkeeper**, who uses a kick shot during the game."*

⚠️⚠️ **It told a CARHA goaltender he is penalised for an act his own book expressly exempts him from.**
✅ **The carve-out is restored, quoted verbatim, with the scope clause kept.** **Direction: the old text
was HARSH for goaltenders and PERMISSIVE for everyone else — see below.**

## ⚠️⚠️ And the chunk split was the worst available

**`:452` was the LAST sentence of chunk 032. `:453` was the FIRST rule line of chunk 033.**

⚠️ **So a listener heard *"barred in all four books"* as the final thing said before a break, then a
separate breath introducing a fifth book.** **A closed universe, stated and then left hanging across a
chunk boundary.**

⚠️⚠️ **THIS PASSAGE FIRST CLAIMED *"the repair folds the fifth book into the same breath — the closed
count no longer exists at any point in the audio."* THAT WAS HALF TRUE AND IT SHIPPED AS WHOLE.** The
closed count went, and a `safety-reviewer` then RENDERED the document and found **the boundary problem
TRANSFORMED, NOT REMOVED**: `:452` still ended chunk **032** with *"CARHA Rule 68 goes further and makes
the act itself a minor penalty"*, and `:453` still OPENED chunk **033** with the *"except a goalkeeper"*
carve-out. ⚠️ **A CARHA GOALTENDER HEARD THE PENALTY, THEN A BREAK, THEN THE EXCEPTION — for an act his
own book exempts him from by name.** **Direction HARSH; a legal option foregone.**

✅ **CLOSED BY A SECOND WAVE, AND BY DELETION RATHER THAN BY FOLDING.** `:452` is an **open**
enumeration — it never claimed to be all the books — so removing its CARHA clause stranded no
back-reference and created no false exclusivity. **CARHA 68 is now stated ONCE, at `:453`, complete with
its scope and its carve-out**, and `:452` fell from 291 to 222 characters. **Re-rendered: chunk 032 now
ends on the USA Hockey clause.** ⚠️ **The sanctioned repair was removing a RESTATEMENT, never a citation
or a tariff.**

⚠️ **THE LESSON, and it is why this correction is written out rather than swapped in silently: a repair
that removes a count does not automatically fix the boundary the count sat on. Only the renderer says
whether it did, and this record asserted the audio result WITHOUT RENDERING IT.**

⚠️ **The old `:452` was permissive in the dangerous direction:** voiced alone at the end of a chunk, it
told an adult rec player the worst outcome of a kick shot is a disallowed goal or a whistle.
**In a CARHA-affiliated league it is a minor penalty.**

---

## D1 · Rules accuracy — the books split three ways, and a count cannot express it

**THE KICK SHOT** (kicking your own stick blade at the puck):

| Book | Rule | What it does |
|---|---|---|
| NHL | 49.2 | **no goal** |
| IIHF | 49.2 | **no goal**, same sentence |
| Hockey Canada | 6.10(c) | **no goal** |
| PWHL | 49.2 | **no goal**, the NHL's sentence |
| USA Hockey | 627(c) | **immediate stoppage of play** |
| **CARHA** | **68** | **A MINOR PENALTY ON THE ACT ITSELF**, *"except a goalkeeper"* |

**KICKING THE MAN** is a different act and the frames must not contaminate each other: **five match
penalties** (NHL 49.3, USA Hockey 627(b), Hockey Canada 7.1(c)(iii), PWHL 49.3, CARHA 48(c)) and the
**IIHF** at a discretionary major plus automatic game misconduct. ✅ **`matchpenalty` flattened scores 0
in BOTH IIHF editions, and its own ladder at Rule 15.1 enumerates no match penalty — so major plus
automatic GM genuinely IS the top of the IIHF scale.**

## ⚠️ Each document's frame, established from the document rather than assumed

- **`puck_handling.md` declares FOUR at `:296`** — *"None of the four rulebooks read for this — NHL,
  IIHF, USA Hockey, Hockey Canada"*. ⚠️ **`grep -n "PWHL"` returns ZERO; CARHA is read on 11 lines,
  27 occurrences, and cited by rule number.** ✅ **So the correct figure is FIVE, and a brief calling for
  six would have added a book the document does not read.**
- **`passing_and_receiving.md` declares NO count.** Its frame is at `:3-4` — *"Written to NHL rules.
  Where IIHF, USA Hockey or typical rec-league rules differ… it is flagged inline."* **`PWHL` scores 0;
  CARHA appears on 7 lines, 15 occurrences.** ✅ **Four working books with CARHA named wherever it bites.**

⚠️⚠️ **AN EARLIER DRAFT OF THIS RECORD SAID *"read 8×"* AND *"scores 6"*. NEITHER REPRODUCES BY ANY GREP
FORM** — a `commit-gate` re-measured and got 26/11 and 16/8. **The conclusion was unaffected (CARHA read,
PWHL absent), but they were measured figures in an evidence file, and this project's record is that a
figure in an evidence file gets quoted into the next brief as settled fact.** ⚠️ **The coordinator
relayed both to the gate as established.** ✅ **Both forms are now given, because *"scores N"* does not
say whether it counts lines or occurrences — which is the census-population failure this project records
for callout counts, one file over.**

## ⚠️⚠️ A SITE FOUND AND DELIBERATELY LEFT — widening it would STRAND A BACK-REFERENCE

**`passing_and_receiving.md:470`** — *"all four books outlaw the kick-shot"* — **names the four
immediately after the phrase, and 470 characters later IN THE SAME CHUNK comes *"A fifth book goes
further than any of those four."*** ⚠️ **The words *"those four"* are a back-reference: widening the
count would strand it and make the next sentence false.** **Self-correcting inside one breath. Left.**

## 🛑 A LANDMINE MARKED FOR THE NEXT WAVE — the HAND-PASS frames must STAY four

`passing_and_receiving.md` carries *"all four books decide it by the puck, never by your skates"* and
*"the answer is the same in all four books."* ⚠️⚠️ **THESE ARE TRUE AND MUST NOT BE WIDENED.**
**CARHA Rule 61(d) words it the Hockey Canada way and publishes NO interpretation correcting it to the
puck** — *"unless the player directs the puck to a teammate in the neutral or attacking zone."*
**Hockey Canada's identical-looking 10.2(a)(i) is rescued by its Note 1 to Interpretation 1. CARHA has
no such note.** ⚠️ **A six-book swap there would assert a PUCK-LOCATION test for a book whose only text
locates the RECEIVER.**

## ⚠️ Extraction trap

**`usah.txt` breaks the kick-shot clause as *"a very dangerous / shot."*** — **a raw grep for
`very dangerous shot` returns 0; an alphanumeric flatten returns 1.** **The corpus's quotation is real;
the grep is what lies.** ✅ **CARHA 48(c) is line-broken as `oppos-/ing` for the same reason.**

## ⚠️⚠️ FOUR FIGURES IN THIS RECORD WERE WRONG, AND A COMMIT GATE CAUGHT ALL FOUR

**Measured against the STAGED BYTES, then re-measured by the coordinator — the gate's numbers reproduce
exactly.** ⚠️ **They are corrected in place above. They are listed here because the corrections
themselves are the evidence.**

| the record said | the truth |
|---|---|
| `kickshot` flattened scores **1** in `usah.txt` | **3** — ⚠️ **and the project's own plan table already said 3, so this record contradicted the repository** |
| `puck_handling`: CARHA on 11 lines, **26** occurrences | **27** |
| `passing_and_receiving`: CARHA on **8** lines, **16** occurrences | **7 lines, 15** — ⚠️ **the second wave's deletion at `:452` removed one of each** |
| `puck_handling`: markers 19 paragraphs / **45** glyphs, *"unchanged"* | 19 paragraphs ✓, **46 glyphs** — the new trailer note added one |

⚠️⚠️ **THE `kickshot` = 1 IS THE ONE WITH TEETH: IT WAS USED TO ARGUE A TRUE NEGATIVE.** A figure that
under-reports a search makes an absence look established. ⚠️ **`usah.txt` breaks the word across a line
as `"kick / shot,"`, so the RAW and FLATTENED counts differ — this record reported one and labelled it
the other.**

⚠️ **AND THE ORDERING RULE PASSED IN LETTER WHILE FAILING IN SUBSTANCE.** This record's mtime was newer
than the newest staged `content/` file, so the *"record written last"* check cleared — **but its figures
were measured before the final wave.** ***"It satisfies the rule in form and not in substance. This is
the exact failure the record itself corrects two paragraphs earlier."***

✅ **THE LESSON IS NOT *"re-measure"* — IT IS THAT AN MTIME CHECK CANNOT SEE A STALE FIGURE.** **Only
re-deriving each number against the bytes that will ship can.**

## Invariants held

**`passing_and_receiving`:** `⚠️` markers **21 → 21**, spoken `"Important."` **22 → 22**, chunks **60 →
60**. **`puck_handling`:** markers **19 paragraphs; glyphs 45 → 46**, the one added in the Sources trailer; spoken count identical
paragraph by paragraph. ✅ **No citation, tariff or scope clause traded for room — `:453` GAINED a
carve-out and kept its scope verbatim.**
**Gates unpiped:** `check_facts.py` 0 · `check_links.py --quiet` 0 · `check_absolutes.py` 0.
⚠️ **`check_quote_drift.py` flagged a quotation one agent had just created** — it closed a CARHA quote
at *"kicks an opposing player."* where the source continues *"shall be assessed a Match penalty."*
**Repaired before reporting; the tool caught this one, having been blind to the same shape earlier the
same day** — the difference is where the continuation falls relative to the matched span.

---

## The third carrier — `on_ice_communication.md`, and the count was short in FOUR layers

**The same naked CARHA tariff stood at `:97` (facts), `:563` (Common Mistakes) and `:631` (Key Takeaway)
— all three voiced alone. The body at `:119` was already correct.** ⚠️ **A document grep cleared this
file, because the correct copy lives in it.**

⚠️⚠️ **AND A SECOND DEFECT WAS FOUND IN THE SAME HUNKS: `:119` read *"two of the five books stop or
penalise that, three more disallow the goal"* — ARITHMETICALLY SELF-DEFEATING BEFORE THE PWHL IS RAISED,
since two plus three exhausts the five-book set.** **The truth is TWO reach the act (USA Hockey 627(c) a
stoppage, CARHA 68 a minor) and FOUR disallow the goal (NHL 49.2, IIHF 49.2, Hockey Canada 6.10(c),
PWHL 49.2).** ✅ **Repaired in four layers, and the PWHL installed as this document's sixth book.**

### ⚠️ THE SEARCH TABLE THAT EXPLAINS WHY THE COUNT WAS SHORT
| flattened pattern | NHL | IIHF | USA Hockey | Hockey Canada | **PWHL** |
|---|---|---|---|---|---|
| `kickshot` | 0 | 0 | **3** | 0 | **0** |
| `bladeofhisownstick` | 2 | 0 | 0 | 0 | **0** |
| `bladeoftheirownstick` | 0 | 2 | 0 | 0 | **0** |
| `bladeofherownstick` | 0 | 0 | 0 | 0 | **2** |

⚠️⚠️ **THE NHL WRITES *his*, THE IIHF *their*, THE PWHL *her*. A SWEEP PINNED TO ONE BOOK'S PRONOUN
RETURNS A TRUE-LOOKING ZERO FOR TWO OTHERS** — and Hockey Canada is reachable by none of them, needing
*"kicks another object"* (`hc.txt:5352`). **That is how the count got to three.**

## Two edits made AFTER the reviewers, under C11's terminating rule

**Both were named by a reviewer, both are confined to the finding, both were re-derived from primary
text, and both are recorded here — which is what C11 requires of an edit that lands after clearance.**

1. **`:119` *"what **neither** does"* → *"what none of the three does"*.** The edit had changed the
   subject from two books to three and left the pronoun. ⚠️ **A copy defect, not a rules defect — the
   rule stated was right either way** (NHL 49, IIHF 49 and PWHL 49 each stop at the goal bar; none blows
   a whistle for the act).
2. **`:119` *"The other four books"* → *"The other four — the NHL, the IIHF, Hockey Canada and the PWHL
   —"*.** ⚠️ **THE DIFF CREATED THIS ONE: the removed line said *"the other three"*.** The paragraph is
   now a six-book frame carrying **two different four-book sets** — the opener's NHL/IIHF/HC/**USA
   Hockey** and this one's NHL/IIHF/HC/**PWHL**. **Nothing was false** — CARHA 69 and PWHL 49.2 both
   permit kicking the puck, so the opener is true of its four and of the other two — **but it was a
   comprehension hazard in the sentence a reader meets first.** ✅ **Naming the set costs nothing and
   removes the collision.**

✅ **Invariants unmoved by both: 60 glyphs / 22 marker-bearing paragraphs / 224 paragraphs, identical at
HEAD and in the index.**

## D1–D15 — COVERAGE, as C3 requires

⚠️ **This section exists because a commit gate blocked on its absence: *"D2–D15 are neither checked nor
declared out of scope in writing. Silence on a dimension is the failure mode the condition exists for."***

- **D1 rules accuracy** — ✅ **CHECKED.** A `rules-verifier` re-derived every claim in the third file's
  staged bytes against primary text in the body pass, swept the ACT in **eleven flattened wordings across
  all 42 sources**, and **confirmed the PWHL renumbering by listing rule headings 46–59 in both books**
  rather than by assertion: the PWHL inserts *Body Checking* as its own Rule 52, so **Rule 49 keeps its
  number.** The first two files were verified in earlier waves, recorded above.
- **D2–D5, D7, D9–D14** — **OUT OF SCOPE.** This diff changes no diagram, no geometry, no numeric owner,
  no external citation, no cross-document link and no heading. `check_geometry.py`, `check_links.py`,
  `check_counts.py` and `check_absolutes.py` all pass.
- **D6 safety** — ✅ **CHECKED.** A `safety-reviewer` read the staged bytes and rendered them: **no
  falsehood, no eviction, no lost spoken escalation, no overshoot.** It tested the overshoot risk
  specifically — **USA Hockey 627 has NO goalkeeper carve-out**, 627(a)/(b) read *"any player **or
  goalkeeper**"* — and confirmed the carve-out is bound to *"CARHA Rule 68"* by name **inside the same
  clause** at all three sites, so no unit reads as a licence for a skater.
- **D8 provenance and qualification** — ✅ **CHECKED**, and it is where this record itself failed: **four
  of its own figures were wrong** (see above).
- **D15 rendered page** — ⚠️ **NOT CHECKED, AND DECLARED.** **No site build ran this round.** The diff
  touches no `site/` file, no diagram source and no heading, so no build product is stale by it; but the
  one glyph added to `puck_handling.md`'s trailer is asserted to form a `warn-inline` wrapper **from the
  plugin's rule, not from `site/dist`.** **`check_callout_flow.py --bare --file` on the next build settles
  it.**

## What the two reviewers found, and why neither blocked

**Both stated plainly that these staged bytes MAY SHIP.**

⚠️ **One defect the edit itself introduced, now fixed:** the body had changed two books to three and left
*"what **neither** does"* — **`neither` governs two.** *"The rule stated is right, so this is a copy
defect, not a rules defect, and it is not permissive."* ✅ Now *"what none of the three does"*.

⚠️ **A MAJOR filed rather than blocked, and it is an inference, not an assertion.** This commit installs
CARHA and the PWHL as this document's fifth and sixth books **for the harmless act** — while the
kicking-an-**opponent** tariff stays enumerated over four books in every voiced layer. **So a CARHA
adult-rec reader now hears his book named three times for a minor he is EXEMPT from, and never once for
CARHA 48(c)'s MANDATORY match penalty** — *"A player who attempts to kick or deliberately kicks an
opposing player **shall be assessed** a Match penalty."* **PWHL 49.3 is the same, and lives in this file
only in the Sources trailer, which the renderer does not voice.**
✅ **Not a regression — HEAD said four books too — and nothing false ships, because every unit enumerates
inline and states no closed count.** ⚠️ **But the reader's available inference is the permissive one, and
this project's own rule is that a book's silence is not a grant.** **Open row.**
⚠️ **The fix must be an ADDITION: `:95` has four characters of headroom and its block is at 8/8 coaching
facts, so forcing it into an existing line is the eviction failure already on record here.**

---

## What this method could not have found

- ✅ **A relayed claim nobody re-derived — NOW CLOSED.** One agent declared it: *"I took the brief's line
  numbers for Hockey Canada 7.1(c)(iii) and did NOT open them."* ✅ **A `commit-gate` opened it.** The
  chapeau reads *"A Match penalty will be assessed to any player or team official who deliberately
  attempts to or deliberately injures an opponent, official, team official or spectator in any manner not
  otherwise covered within the playing rules"*, with `iii. Attempting to kick or deliberately kicking an
  opponent.` ⚠️ **The corpus truncates the chapeau at *"an opponent"* with NO terminal period inside the
  quote marks — an honest truncation that does not change the meaning for this act.** ✅ **Verified; it no
  longer blocks.**
  ⚠️⚠️ **THE SHAPE IS WORTH KEEPING: an agent declared a relayed claim it had not opened, that declaration
  went into this record as an open gap, and the NEXT reader closed it.** ✅ **That is what *"what this
  method could not have found"* is for — it is the next brief, and here it was the next check.**
- **A second rule pricing the kick shot under another name.** `kickshot` flattened scores **3** in
  `usah.txt` and **0** in the NHL, Hockey Canada and both IIHF editions — ⚠️ **and those zeros are TRUE
  negatives on a label. Those books describe the act without naming it.**
- **`puck_handling.md:296`'s negative existence claim** — *"None of the four rulebooks reserves the space
  between your feet"* — in a document that reads CARHA. **A sweep found nothing in CARHA, but extending
  a negative is a new claim and it was left.**
- **Another four-book frame on a PENALTY-SHOT claim** in `puck_handling.md`'s chunk 067 — *"all four run
  it from the ice up to the top of the goal frame"*. **Unverified, untouched.**
- **The British layer on kicking.** ⚠️ **Neither agent searched `eihl_casebook.txt`, the In-House Rules
  or the four IHUK Rules of Competition** — and `passing_and_receiving.md` tells a British reader *"that
  is the British reader's book at every level."* ✅ **A separate review the same day searched all eight
  and found NO departure, but that was for `body_contact_and_battles.md`'s claim, not this one.**
- **Whether `iihf_rules_2026-27.txt` renumbers Rule 49.** Only `matchpenalty` = 0 was confirmed in it.
- ⚠️⚠️ **AND THE OPEN ROW ABOVE IS TWO FILES, NOT ONE — a re-gate found the same shape in the other
  direction.** **`passing_and_receiving.md`'s CARHA 48(c) REACHED THE BODY AND STOPPED.** The commit adds
  it new at `:464` and widens that unit's frame from *"all four books"* to *"every one of these books"* —
  **and the claim reaches NONE of the three summary layers**: `:448` (facts, **voiced alone**), `:785`
  (Common Mistakes) and `:850` (Key Takeaway, **voiced alone**) all name three books plus the IIHF, with
  **CARHA absent**. ⚠️ **`puck_handling.md` propagated the identical claim to ALL FIVE layers in this same
  commit, so the asymmetry is internal to the commit.** ✅ **Not a blocker: all three units are untouched
  by the diff, were equally incomplete at HEAD, are open enumerations rather than exclusivity claims —
  and CARHA 48(c) is a MATCH penalty, the same tier as the books they do name, so a CARHA reader applying
  the enumerated answer gets the right one. Nothing is understated.**
- ⚠️⚠️ **THE TWO STAGED FILES NOW DISAGREE ON THE BOOK SET, INSIDE ONE COMMIT.**
  `on_ice_communication.md` is a **six**-book frame; `passing_and_receiving.md` has **zero** PWHL
  mentions and stays at its declared four-to-five. Its `:452` — **a ` ```facts ` line, VOICED ALONE** —
  says the kick shot *"costs you the goal under NHL and IIHF 49.2 and Hockey Canada 6.10(c)"*, **three
  books, PWHL absent**; and `:470` attributes the good-goal limb to *"the NHL's and the IIHF's"* when
  **PWHL 49.2(iii) carries it too.** ⚠️ **Direction permissive: a PWHL reader is not told her kick-shot
  goal is waved off.** ✅ **Mild, and NOT false — both are enumerations, not exclusivity claims, and that
  file's declared frame at `:3-4` is four working books.** ⚠️ **But it is the recorded shape of a repair
  that reached one file and stopped, and widening a document's declared frame is a scope change that
  needs its own wave, not a bolt-on at commit time.** **OPEN ROW.**
- ✅ **THE DANGEROUS-PLAY ROUTE IS NOW CLOSED, NOT OPEN.** A re-gate swept all seven relevant books
  flattened for `dangerousplay`, `dangerousshot`, `verydangerous`, `illegaluseofstick`, `kickingthestick`,
  `kicksthestick`, `kickingtheblade` and `propellingthepuckbykicking`. **No book has a general
  dangerous-play rule.** The only `verydangerous` outside USA Hockey is **Hockey Canada 8.7(b)
  Interpretation 2, on CLIPPING** — unrelated; `kickingtheblade` = 2 in the NHL/IIHF/PWHL is the goal-bar
  sentence and its video-review twin. ⚠️ **So the closed count at `:97` is SAFE, and this row is closed
  rather than carried.** **The sentence below records the gap as it stood before that sweep.**
- ⚠️ **The exclusivity claim rests on a sweep for KICKING VOCABULARY.** *"A book could price this act
  under a rule that never uses the word 'kick' at all… USA Hockey's own text calls it 'a very dangerous
  shot' — **if another book has a standing dangerous-play minor, that book reaches the act and my sweep
  scored it zero**."* **`dangerousplay`, `unsportsmanlike`, `illegaluseofstick` were swept in NO book.**
- ✅ **THE BRITISH LAYER IS NOW SEARCHED, AND IT IS A CLEAN NEGATIVE.** All nine British files score
  `kick` = **0 flattened** — `eihl_casebook.txt` and its `_layout` twin (flattened, because that book's
  page-furniture splice defeats a raw phrase search), both In-House editions, `eih_rr.txt`, all four IHUK
  Rules of Competition and `ihuk_coaching_regs.txt`. **No British competition document, including the
  superseding EIHL Casebook, departs on this act.** ⚠️ **What was NOT tested is whether the Casebook
  changes anything about disallowed goals GENERALLY, which could reach a kick-shot goal by another door.**
- **An adjacent IIHF ruling found and deliberately not used:** `iihf_situations_2026-27.txt` **Situation
  10.26**, in the 2026/27 handbook and **neither 2025/26 edition** — a player kicking a **lost** stick at
  the puck, goal disallowed on intent. ⚠️ **A DIFFERENT ACT** — propelling a lost stick, not kicking the
  blade of one you hold — **running the same direction. It contradicts nothing and the diff does not need
  it.**
