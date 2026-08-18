# Round 32 — closing the DF45 residual, and what the residual was hiding

**Status: open.** No commit has been made from this round. HEAD is `f47eb67`; nothing pushed.

Round 31 was committed on the owner's decision with two items disclosed rather than closed:
**DF45**, a dozen lines written after the thirteenth `commit-gate` run that had had no reviewer
pass, and **DF44**, the reduction of the four-book penalty-ladder enumerations. This round
closes DF45 and scopes DF44. It found that the residual was not a dozen benign lines.

| | |
|---|---|
| Documents changed | 5 — `foundation/rules_primer.md`, `technique/body_contact_and_battles.md`, `technique/puck_handling.md`, `positions/winger.md`, `positions/defender.md` |
| Reviewer passes | `safety-reviewer` ×1 · `rules-verifier` ×1 · author render pass ×1 (see §4) |
| Dispatches lost to `529 Overloaded` | **4** — two of each, before either landed |
| Criticals | **5** |
| Majors | 4 |
| Minors | 5 |
| Author-introduced | **4 of the 5 criticals**, all written during round 31's closing hours |

---

## 1 · The five criticals, and why four of them are the author's

**CR38 · CRITICAL — the corrections were appended alongside the false clauses instead of
replacing them, and the false clause came first.** Round 31 corrected the scope of Hockey
Canada's ducking prohibition at `rules_primer.md:15`, `:776` and `:845`. It did not delete what
it was correcting. The result, in a single narrated paragraph at `:15`:

> "Keep yours up anyway — and **under Hockey Canada in junior or senior**, and near the boards
> under the IIHF book, **ducking out of a check is the version that can put *you* in the box.**"

…and then, sixty words later in the same paragraph:

> "…and ducking is both — **under Hockey Canada, whose Rule 8.7 prohibition on crouching to
> avoid a check carries no division scope at all**"

Two flatly contradictory scope statements on one rule, one sentence apart, and **the false one
is first and is the one phrased as the actionable takeaway.** A U13 or female Hockey Canada
player hears "junior or senior" and stops. `git show f47eb67~1` confirms the earlier text
carried the same false clause: round 31 deleted a comma from it and nothing else.

Rule 8.7's preamble (`hc.txt:7096-7099`) carries no division wording — *"Players may not crouch
down to avoid being bodychecked"* — while Interpretation 3 to 7.7(a) (`hc.txt:6392-6393`) opens
*"In Junior and Senior divisions"*. The asymmetry the corpus asserts is exactly what the book
does; the corpus simply said both things at once. **Fixed by replacing rather than
counterweighting, at all three sites.**

**This is a new failure shape and it deserves a name.** Every previous propagation defect in
this project was a correction that *did not travel*. This one travelled and then sat down next
to the error it was sent to remove. **A correction that coexists with what it corrects is worse
than no correction, because it reads as deliberate hedging** — and in a document read aloud one
sentence at a time, the reader gets whichever of the two arrives first.

**CR39 · CRITICAL — the correction never reached the primer's deepest treatment of the rule.**
`rules_primer.md:379` runs the full ducking apparatus and closes, in narration chunk 053,
*"Hockey Canada's is confined by its own words to junior and senior, so it does not reach Hockey
Canada minor or female hockey."* Heard aloud the referent of *"Hockey Canada's"* is the whole
apparatus, not the interpretation. Fixed by naming which half is confined and stating that
Rule 8.7 itself is not.

**CR40 · CRITICAL — a ` ```facts ` line in the owner document mis-scoped the ducker *and*
capped the penalty at a minor, while a sibling passage 55 lines away stated it correctly.**
`body_contact_and_battles.md:455` read *"Hockey Canada junior and senior only — ducking to avoid
a check draws the checker no Head Contact penalty and the ducker a possible Clipping Minor"*.
Both halves wrong: the division scope belongs to the checker's amnesty, and the ducker's ceiling
is not a minor. `hc.txt:7108-7110` makes a major plus game misconduct **mandatory** where the
duck injures; 8.7(c) reaches a match penalty for an *attempt* to injure alone. **And each facts
line narrates as its own paragraph with a 300ms break**, so a listener heard "the ceiling is two
minutes" as a complete, authoritative sentence. `:510` of the same document already had the
correct, unscoped position — **the owner document contradicted itself across 55 lines.**

**CR41 · CRITICAL — the closing clause a listener retains had the technique's two safety
conditions stripped.** `rules_primer.md:768` ended *"Control their stick instead of their body —
a stick lift, taken below their bottom hand."* The primer's own owner site at `:348` carries
both conditions and names the danger: *"lifted up rather than sideways"*, and USA Hockey's
Standard of Play singling out *"hard slashes to the upper portion of the stick (just below the
hands) of an opponent, with no attempt to legally play the puck"* for strict enforcement
(`usah.txt:749-751`) — **the same few inches of shaft the cue aims at.** `:768` kept the
placement and dropped both. It also arrived eight words after *"If a pushing motion is used, a
penalty may not be necessary"*, so the paragraph ended on two consecutive permissions. Fixed,
and the same condition added to `body_contact_and_battles.md:788`, `:816` and `defender.md:187`.

**CR42 · CRITICAL — a string replacement left an ungrammatical sentence that corrupted a book
scope.** `winger.md:112`, written during round 31's fend-off sweep, read:

> "Under the NHL and IIHF, **and** Rule 54.2 permits using your arm in a strength move to block
> an opponent *provided you have body position*."

Not a sentence, and the surviving scope phrase restricted to two books a permission that
**three** books write in near-identical words — NHL 54.2 (`nhl_rules.txt:6190-6192`), IIHF 54.2
(`iihf_rules.txt:4602-4603`) and **Hockey Canada 8.1** (`hc.txt:6721-6723`). It landed in the
sentence immediately after one casting Hockey Canada as the restrictive book, so the combined
effect told a Hockey Canada player they lacked a permission Rule 8.1 gives them. **The corpus
already knew the right answer** — `puck_handling.md:934` states it explicitly — so this was a
propagation failure against a sibling.

**This is the third garbled sentence produced this way in two rounds** (`"45.4-adjacent 45.4…
no: 45.3 major"`, `"but on different terms, and not the same terms:"`, and this). All three
came from patching a sentence with a string replacement instead of rewriting the passage. The
passage was rewritten whole, and it now closes with something a USA Hockey reader can act on,
since that book gives them no permission at all — indeed `usah.txt:387-388` expressly forbids
using *"a hand or arm to hold **or block** the opponent"*, which is stronger than the corpus's
"writes none" and is a better sentence to quote.

---

## 2 · Majors

**MA94 · the round-31 commit message overstated what the change did.** It states the change
*"drops 'or a tie-up', which appears in no rulebook and means a faceoff scramble elsewhere in
this corpus."* It was dropped from the facts line at `:816` and **left in the body sentence 26
lines below**, inside the legality claim — where it was swept under a condition written for a
*stick lift* (*"when the **lift** is taken below their bottom hand"*) that a tie-up cannot
satisfy. Now gone from both. **The commit message as committed claims more than was done, and
that is on the record permanently**; this entry is the correction, since the history cannot be
rewritten.

**MA95 · `puck_handling.md:864` stated the fend-off permission unhedged**, in the one layer of
that document that did not carry the scope — *"Fending off a stick is legal"*, for all four
books, where it is written in two. Fixed.

**MA96 · a ceiling claim on an ejection-capable infraction — the exact shape of the commit one
before HEAD.** `puck_handling.md:934` read *"grabbing, pulling or tugging is a holding minor
everywhere"*. True as a floor in all four books; false as a ceiling, which is how it reads.
Hockey Canada 8.1(b) is a mandatory major plus game misconduct on injury (`hc.txt:6738-6740`);
USA Hockey 622(b) and (c) reach a major plus game misconduct and a match penalty
(`usah.txt:4354-4358`). **Commit `0bb1c24` is titled *"Stop telling a high-sticked player their
ceiling is a double minor."* The same defect was live one commit later, in a different
document.** Fixed in both sites.

**MA97 · `rules_primer.md:15` was missing the one never-negotiable element the injury mechanism
turns on.** Three of the four boards-contact elements were present; *"chin off your chest"* was
not. They are not the same instruction — a player can have their eyes up with the chin tucked,
and the owner document's mechanism quote from USA Hockey's *Heads Up Hockey* is specifically
about the chin: *"when the head is flexed (chin toward the chest), this normal curve is removed,
and the cervical spine becomes straight"*, and the injury *"can occur at walking speed"*.
**All four elements now verified present at all four primer restatements** (`:15`, `:379`,
`:776`, `:845`).

---

## 3 · Minors, and one provenance finding

- **MI79 · `:1003`'s abbreviation was ambiguous heard alone.** *"USA Hockey writes none"* can be
  heard as "USA Hockey has no holding rule", which is false — Rule 622 runs to a match penalty.
  Expanded to *"writes no fend-off permission"*, matching `:304` and `:860`.
- **MI80 · `:1031` had dropped an operative condition** — USA Hockey's clause reaches placing
  the stick *"for the purpose of impeding progress"*, not any placement. Restored as *"to impede
  them"*. Over-warned rather than under-warned, so no reader was exposed.
- **MI81 · two body restatements lacked the divergence flag** (`body_contact_and_battles.md:315`,
  `:871`). Both attributed correctly by rule number, so incomplete rather than wrong; flagged
  anyway because `:871` sits inside an ordered technique list a reader executes.
- **MI82 · four `body_contact_and_battles.md` sites omit NHL/IIHF 54.2's release grace.**
  `grep -c '54\.2'` on that file returns **0** — it never mentions the rule. So it says flatly
  *"may not hold their stick"* where 54.2 permits defending against an opponent's stick provided
  you *"immediately release"* it, which `rules_primer.md:771` does carry. **Recorded, not
  fixed** — the direction is conservative, and adding a fifth scope note to those lines feeds
  exactly the growth DF44 exists to reverse. It belongs in DF44's pass, where the whole set can
  be shortened at once rather than lengthened again.
- **MI83 · provenance drift in `puck_handling.md`'s Sources block, both halves fixed.** It said
  the Hockey Canada rulebook was *"checked only for the 'between the skates' myth"*, while the
  body now makes two substantive Rule 8.1 claims; and it labelled the IIHF book **Version 1.0,
  May 2025** where the file on disk is **v1.1, July 2025**.

**And a finding about the two IIHF editions that is worth more than the label.** Both are on
disk and they differ by **1,603 substantive diff lines**. I checked the rules the corpus
actually cites — 42.2, 43.2, 44.1, 48.1, 48.3, 55.1, 56.1 — and **all seven are substantively
identical**; the one apparent difference at 56.1 is a page-number artefact and a line break, not
rule text. So `puck_handling.md`'s relabel to v1.1 is verified. **`body_contact_and_battles.md` was relabelled to v1.1 on the first `commit-gate` run's ruling.** The earlier decision here — to leave it at v1.0 as the conservative choice — was **wrong**, and the gate's reasoning is recorded at §3a: `md5 sources/iihf_rules.txt` equals `md5 sources/iihf_rules_v1.1.txt`, three sibling documents already said v1.1, and that entry's own parenthetical claims it read *"the edition used as the baseline throughout this guide"* — so the label asserted the wrong document had been read. An edition label states which document was read; it does not assert that every cited rule was diffed across editions. Both claims are now stated separately, and **DF46 is closed**: the label now reads v1.1, and the same parenthetical states in terms that Rules 42, 43, 44, 46, 48, 55 and 56 were compared across the two editions and are substantively identical, while **Rules 100, 101 and 200–202 were not compared**. That is the honest pair — the correct edition named, and the limit of the comparison disclosed — where the earlier version substituted a false statement for a missing hedge.

---

## 3a · The first `commit-gate` run, `facts-reviewer`, and a recurrence I have to own

**The gate blocked, and its central finding was that the ducking correction reached five sites
and stopped at four more** — `body_contact_and_battles.md:462` and `:1099`, `zone_entries.md:312`
(a **sixth** document, which this diff had not touched), and `rules_primer.md:726`, the primer's
own comparison table. All fixed. It also found **three defects inside the CR41 fix**, including
`rules_primer.md:768` carrying **13 `**` markers with one unclosed**, so the production page
rendered literal asterisks; a dropped *"with no attempt to legally play the puck"* from a USA
Hockey quotation — and a stick lift **is** an attempt to play the puck, so that was the limb that
decides the case; and a claim that a shaft is a cross-check *"at any height"* in the other three
books, false for USA Hockey, whose Rule 609 carries a blade-on-ice element this corpus states
correctly at `body_contact_and_battles.md:813-814`.

⚠️ **CR43 · CRITICAL — the append-instead-of-replace failure recurred inside the fix for it.**
CR38 named this shape, called it new, and said it was *"fixed by replacing rather than
counterweighting, at all three sites."* At `body_contact_and_battles.md:1099` the fix **added**
the correct statement at one clause and **left the false one standing sixty words later**:
*"8.7(a) makes that a Minor penalty — so in a Hockey Canada junior or senior game…"* Both the
mis-scope and the minor cap survived, in the summary layer, in the paragraph the document itself
calls *"the part to hold on to"*. **The defect this round exists to document was committed again
by the person documenting it, in the same session, one hour after naming it.** Now replaced.

**The lesson is narrower and harder than CR38 stated it.** Replacing the clause you searched for
is not the same as replacing the claim. A false claim appears more than once per paragraph in
this corpus routinely, and a string replacement matches the first instance. **The check is not
"did I replace it" but "does `grep` for the false proposition still return anything" — and it
must be a grep for the *proposition*, not for the *string* that was edited.**

**CR44 · CRITICAL — the `:455` rewrite evicted the exception the line it replaced had carried.**
The pre-existing facts line ended *"…but not where the head is low as the result of a legitimate
hockey play"*. The rewrite spent its 275 of 300 characters on a three-tier penalty ladder and
the hedge was what got trimmed. Verified against `hc.txt`: Interpretation 3 to 7.7(a) ends *"This
interpretation does not apply to a player who is in a vulnerable position as the result of a
legitimate hockey play (e.g. shooting, making or receiving a pass, etc.)."* So a checker learned
that a low head forfeits head-contact protection, with nothing to say that a player low
**because they are shooting or receiving a pass** is not ducking and the checker still answers
for the head. **A head-contact fact, where the cost is an injury and an ejection.** Fixed by
splitting into two facts lines — the compression was the cause, so the fix had to add a line
rather than rewrite one.

**CR45 · CRITICAL — a three-book permission stated with one book, in the block this round
rewrote to fix exactly that.** `puck_handling.md:374` gives the arm-block strength move as *"(NHL
Rule 54.2)"* alone. It is in **three** books (NHL 54.2, IIHF 54.2, Hockey Canada 8.1) and in
**none** of USA Hockey's — where Rule 622's Note names *"using a free arm/hand to restrain or
impede the opponent's progress"* as holding. It sits **one line below** `:373`, which this round
edited to add a two-book scope. A single-book citation is not heard as a scope limit; that is the
entire premise of the commit at HEAD.

**MA98 · a ceiling claim in a line this round rewrote.** `puck_handling.md:373` said holding is
*"a holding minor"* — the floor, not the ceiling, and its own Key Takeaway 7 already said so
after this round fixed it. Split into two lines. **Third instance this session of the
`0bb1c24` shape.**

**MA99 · `puck_handling.md:378` had no antecedent heard alone** — *"IIHF wording is substantively
identical…"* to what? The preceding narrated line is `Key: The infraction is holding, not
interference`, so it attached to the wrong thing. Named explicitly.

**MA100 · the fend-off scope named Hockey Canada at two of five sites.** `:1003`, `winger.md:95`
and `puck_handling.md:373` gave NHL/IIHF/USA Hockey and left a Hockey Canada reader unassigned
after hearing a permission stated. All five now consistent.

**MA101 · the facts layer said more than its own sections, in both directions.** `:304`/`:860`
carried a Hockey Canada clause their bodies did not, and the stick-lift direction was in three
facts lines whose bodies lacked it. **Style-guide propagation order is body → facts; mine ran
backwards, which is how a facts line ends up unsourceable to its own section.** Bodies updated
rather than facts cut.

**And one deferral the reviewer examined and upheld.** MI82 — NHL/IIHF 54.2's release grace
absent from `body_contact_and_battles.md`, which never cites 54.2 at all — is **defensible**: the
lines quote the prohibition's own words, the omission cannot penalise a reader, and in two books
of four the grace does not exist, so the conservative version is the *correct* one for most North
American readers. The requirement 54.2 actually imposes is already in the block unlabelled, as
`puck_handling.md:376`'s `Never: Hang onto an opponent's stick after fending it off`.

**Also corrected: my own character counts.** `:304`/`:860` are **231** not 235, `:1031` is **169**
not 167. `check_facts.py` measures `len(value)` after the label. Stale figures are this project's
signature defect and I produced three more in a brief.

## 3b · Coverage statement — D1–D15, every dimension checked or declared

The first `commit-gate` run of this round **blocked on C3** because this record covered four
dimensions and left nine silent. Silence on a dimension is the failure mode, so here is the
full table. Round 9's lesson is that a diff editing a Sources block with no `source-verifier`
and five ` ```facts ` lines with no `facts-reviewer` is not reviewed, whatever else ran.

| | Dimension | Status |
|---|---|---|
| D1 | Rules claims vs primary text | **Checked** — `rules-verifier`, plus the gate re-derived HC 8.7, Interp 3 to 7.7(a), HC 8.1 and the four-book fend-off asymmetry independently |
| D2 | Cross-book divergence | **Checked** — same two passes |
| D3 | Stated exceptions are real | **Checked** — `rules-verifier` |
| D4 | Citations refetched | **NOT CHECKED — declared out of scope.** No `source-verifier` ran. The added/removed URL sets are byte-identical, so no external citation was added or changed; but this diff edits two Sources blocks and the IIHF edition label, which is D4/D5 territory. **DF47.** |
| D5 | Provenance | **Partly checked, by the gate not by a reviewer.** The IIHF v1.0 → v1.1 relabel was forced by the gate and is verified by md5 (`iihf_rules.txt` == `iihf_rules_v1.1.txt`). `puck_handling.md`'s Hockey Canada and NHL entries are unverified. **DF47.** |
| D6 | Cardinal rule — coaching choice as law | **Checked** — the fend-off, arm-block and stick-lift claims are all now book-scoped |
| D7 | Numeric ownership | **Not applicable, declared** — this diff changes no number owned by another document |
| D8 | Summary layer keeps its owner's qualifications | **Checked, and it failed twice** — MA96's ceiling claim and MI79's abbreviation; both fixed |
| D9 | Propagation across layers | **Checked, and it failed four times** — the gate found the ducking correction stopped at `bcab:462`, `:1099`, `zone_entries.md:312` and `rules_primer.md:726`. **No `content-reviewer` ran; D9 is the dimension that owns those and it was found by the gate instead.** |
| D10 | The ` ```facts ` layer | **NOT CHECKED by its reviewer.** This diff edits five facts lines and no `facts-reviewer` ran. `check_facts.py` passes, and it cannot see whether a line is true. **DF48.** |
| D11 | Reader safety | **Checked** — `safety-reviewer` |
| D12 | Read-aloud integrity | **Partly checked** — the safety pass listened to 9 of 1,548 chunks; the `**`-rendering defect the gate found at `:768` proves the author's own render pass did not examine the edited line |
| D13 | Folklore and house style | **Not checked** — no `content-reviewer`. **DF48.** |
| D14 | Markdown and rendering integrity | **Checked only by the gate, and it failed twice** — 13 `**` markers with one unclosed at `:768`, and a stray quotation mark at `bcab:315` attaching an editorial clause to the NHL rulebook. Both fixed. |
| D15 | The rendered site | **Author-only, which satisfies nothing** — see §4 |

**Four dimensions remain open and are deferred in writing: D4, D5, D10, D13** (DF47, DF48).
They are the reason this round should not be treated as closed by its own author.

## 4 · The render pass — C10's review half, closed rather than declared stale

Round 31's `site-reviewer` could not render anything: the Chrome extension refuses `localhost`
as an unverified safety category, over seven attempts on two hostnames. It correctly reported
every viewport and theme cell as **unchecked** rather than inferring appearance from HTML, and
recommended C10 stay stale.

**It has now been rendered**, in real headless Chrome over the DevTools Protocol from a
dependency-free harness, on a fresh build. All four cells of every changed page:

| Page | Overflow | Console | ⚠️ glyphs (in callouts) | Largest list item |
|---|---|---|---|---|
| `rules_primer` | **0** | clean | 46 (**10**) | **7,276** |
| `body_contact_and_battles` | **0** | clean | 6 (**5**) | 4,283 |
| `puck_handling` | **0** | clean | 2 (**2**) | 2,058 |
| `winger` | **0** | clean | 0 | 730 |

Also confirmed rendered: `#common-mistakes` unique and resolving, one `<h1>` per page, both
themes applying their own palette, no `src=` off-origin.

**Two findings that only a rendered page produces.**

**The unstyled-warning gap is milder than HTML analysis suggested, and the thirteenth gate's
ruling to accept it is now right on evidence.** On screen the ⚠️ is a clear yellow triangle
followed immediately by bold text, and it *does* function as a visual break inside the prose.
Not a panel; not invisible either.

**But the density is a real readability problem and this is the first time anyone has seen it.**
At 375px the Hooking bullet runs roughly **two and a half full phone screens of unbroken
prose**, three separate ⚠️ warnings inside one continuous run, no paragraph break anywhere.
Nothing is broken — clean wrapping, no overflow. ⚠️ **An earlier version of this section also claimed "correct nested emphasis", and that claim is withdrawn.** The first `commit-gate` run of this round found `rules_primer.md:768` carrying **13 `**` markers, one unclosed**, so the page rendered literal asterisks and the emphasis landed on the wrong clause — in a line this render pass had supposedly examined. Either the pass predated the CR41 edit or it did not look. **Non-negotiable 5: the claim asserted a verification that did not happen, and the render pass was the author's own, which satisfies nothing for C10's review half.** It is simply a wall.
**That is DF44's case made visually rather than as a character count, and it is the stronger
argument: 2,483 characters is an abstraction; two and a half screens is what the reader meets.**

**And the render localises DF44 to one file.** The siblings write their warnings as blocks, so
the plugin styles **7 of 8** across the three, against the primer's **10 of 46** — and the
primer's largest list item is 70% longer than any sibling's. So both things the site pass raised
are properties of `rules_primer.md` alone, not of the corpus's house style. **DF44 needs no
corpus-wide sweep, and the fix pattern already exists in the three documents next to it.**

---

## 5 · Two reviewer findings that were wrong, and one tooling trap

**A `rules-verifier` finding was wrong, and it matters that it is recorded.** It concluded that
`check_facts.py`'s 200-character ceiling *"is not what was binding"* on `:1031`, reasoning that
`:304` and `:860` pass at 235 characters. Those are `Rule:` lines.
`scripts/check_facts.py:75-76` reads `MAX_LEN, MAX_LEN_QUALIFIED = 200, 300` with
`QUALIFIED = {"Rule", "Convention"}` — so `Action:` lines get 200 and `Rule:` lines get 300.
`:1031` is an `Action:` line. **The 200 ceiling was binding, the shortening was correct, and the
reviewer conflated two budgets.** This is the second instance on record (with round 31's DF25b)
of a reviewer finding that needed the same check an author's claim does.

**A tooling trap that produced a false negative in the author's own verification.**
`grep -ci 'fend'` returns **126** in `usah.txt` — it matches *de**fend***, *o**ffen**d*,
*de**fen**sive*. Worse, the obvious guard `grep -oiE '(^|[^a-z])fend'` returns **0 in all four
books**, because the rulebooks use curly quotes and the `grep` on this machine is **`ugrep`**,
which handles the multibyte class differently. **A cleverer pattern "proved" the permission
exists nowhere.** The `rules-verifier` pass independently hit the same trap from the other side:
`\bfend\b` in `iihf_rules.txt` returns three matches, two of which are line-wrapped fragments of
*defending*. **Print the matches; never conclude a negative existence claim from a count.**

**And a build failure the author caused and misdiagnosed twice.** Two `npm run build` trees were
started concurrently and both wedged at `build:diagrams`, which drives headless Chrome to
rasterise SVGs; the two invocations contend and neither finishes. The failure disguises itself,
because the build's first step is `clean:cache`, which `rmSync`s `dist` — **so a stalled build
leaves no `dist` at all, which reads as "the build never ran."** The first diagnosis was a race
and was right; it was then retracted as wrong; the retraction was itself wrong.
`ps -eo pid,etime,command | grep "npm run build"` — two PIDs with different `etime` — settles it
in seconds and should have been the first command, not the tenth.

---

## What this round could not have found

- **Whether the same append-instead-of-replace defect (CR38) exists elsewhere.** It was found in
  three sites because the brief pointed at those three. The `safety-reviewer` pass listened to
  **9 of 1,548** narration chunks. A contradiction of the same shape — a correction sitting next
  to what it corrects — could be in any of the other 1,539, and no mechanical check can see it,
  because both sentences are individually well-formed and one of them is true.
- **The thirty-one documents nobody opened.** This round read five. `body_contact_and_battles.md`
  has still had no document-level review of its own, and this round edited it in nine places.
- **Whether the corpus's *silences* are right.** Both passes checked claims that are on the page.
  MI82 was found only because `rules_primer.md:771` happened to cite Rule 54.2; a carve-out
  absent from every site would be invisible. The `rules-verifier` pass's own recommendation is
  the fix: a **rule-first** sweep — read Rules 54, 56 and 8.1 end to end, then ask what the
  corpus fails to say — which is the inverse of every pass run so far.
- **Column-order defects in the PDF extractions.** One was hit and flagged: Hockey Canada's
  *"vulnerable position… legitimate hockey play"* sentence is verbatim at `hc.txt:6402-6404`, but
  the extraction interleaves the "Rule 7.8" and "Kneeing" headings around it, so whether it
  qualifies Interpretation 3 or Interpretation 2 of 7.7(a) cannot be settled from the text alone.
  Reading order and the singular *"This interpretation"* both favour Interpretation 3. **Only a
  page-image comparison closes it**, and there may be others that read plausibly enough that
  nobody noticed.
- **Whether any of this is safe as coached.** Every technique claim upheld here is legal in the
  books that were checked. No grep tells you that a legal stick lift taken hard at the wrong
  instant still breaks a finger, or that a player who has correctly got their skates parallel to
  the boards can still be hurt badly by a checker who has read none of this.
- **The USA Hockey Casebook and the IIHF Disciplinary Code are still not on disk.** Every
  "USA Hockey writes no fend-off permission" claim rests on the Playing Rules and the Standard of
  Play preface alone. `body_contact_and_battles.md:1003`'s bare *"writes none"* is the most
  exposed phrasing of it and would be the one to soften if the Casebook is never obtained.
