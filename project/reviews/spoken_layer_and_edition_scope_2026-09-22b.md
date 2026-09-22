# The spoken layer, the edition question, and two tools that lied — 22 September 2026 (second round)

A continuous loop at up to seven concurrent agents on disjoint file sets, on top of `79bdfde`.

⚠️ **No cumulative defect total is stated.** What follows is what this round recorded; agents reported
others in passing that nobody tallied.

---

## Criticals

**1 · A repair created a permission.** `uk_rules.md` had been repaired earlier the same day to read
*"in the Elite League a first plain willing fight can leave you in the game, and the second cannot"* — a
softening stated as a flat two-step ladder **with rung one presented as safe**. Three limbs were
missing: 46.1's own words are *"**at least** a Major Penalty"* (a floor glossed as a ceiling); **Casebook
46.2 makes a fighting major *"after the original altercation has started"* an automatic game misconduct
on the FIRST major**; and IIHF 20.4's two-majors trigger is untouched.

⚠️ **Found by a `safety-reviewer` reading a `rules-verifier`'s repair — the second time in one day that
exact pairing caught a Critical.** An unsourced scope claim rode along: the Casebook never says whether
*"their 2nd Major Penalty"* is counted per game or per season, and its own discipline table counts
*"during the EIHL regular season"*. **The ambiguity is now named rather than resolved.**

**2 · A false negative existence claim, safety-adjacent.** `playing_without_the_puck.md:28` said
*"For an adult **no British document publishes an answer at all** — ask your league"* about
body-checking. The **IHUK NIHL Rules of Competition publish it**: *"NIHL · 3 x 20 minute periods ·
**Full ice, checking**"*. And `:191` said *"neither book states an age at all"* while the Junior RoC
publishes the whole U10–U19 table.

⚠️⚠️ **`:28` and `:191` were flatly inconsistent inside one document, four hundred lines apart.**
⚠️ **The direction is the unusual one — it made the corpus look LESS supported than it is**, and the
standing instruction was conservative, **which is exactly why no reviewer stopped on it**. The "ask" was
kept, scoped to competitions outside those regulations.

---

## The spoken layer — a defect class nothing was watching

**`nine (9)` speaks as "nine NINE"**, mishearable as ninety-nine. A numeric fact corrupted in the layer
that reaches a listener, while **every mechanical gate passes**: the Markdown is valid and the quotation
verbatim. **The corruption happens downstream of every checker.**

**55 sites repaired across 16 documents; corpus-wide zero verified by rendering all 39.** The only
residual render hits are journal `volume(issue)` citations — a different species, correctly left.

⚠️ **My census pattern was incomplete and an agent caught it.** `uk_rules.md` quoted *"at least one
Player (1) to be penalized"* — **the numeral DISPLACED one word from its spelled form**, invisible to an
adjacent-only pattern. A source-wide census of the displaced shape now returns zero.

⚠️ **The convention was disputed between two agents and settled by measurement**, not by picking a side:
close the quote **before** the numeral, **drop** it, resume after a short unquoted bridge. It is an
**elision at a quote boundary**, not a character removed from inside a quotation — and a render of the
pioneering file measured **zero** doubled numerals with `check_quote_drift` unchanged at
`clean=506 flagged=9`.

**Three other render-only defects were caught the same way, all passing every gate:** a bold/italic span
crossing that spoke **a literal asterisk** into a Key Takeaway; *"the 2026/27 60.1"* speaking as an
unparseable numeral run; and a **quoted rule heading's slash spoken as "or"**, which splitting cannot fix
because the substitution is not quote-scoped.

---

## Two tools that lied, and what it cost

**1 · I wrote a checker that was wrong in both directions, and deleted it.**
`scripts/check_emphasis.py` tested `**` parity per paragraph. An agent parsed every hit with the site's
own `mdast-util-from-markdown`: **four of five were false positives** — a trailer ending `…quote"**` is
an inner italic close plus the trailer's own close, and **"fixing" one would have injected a strong
marker with no opener.** A live agent had been briefed to run it and was messaged mid-task.

⚠️⚠️ **A second agent then found it had FALSE NEGATIVES TOO** — it scored `0` on two files each
containing a real defect of exactly the class it was built for. **A tool that over-reports wastes a
reviewer; one that under-reports on its own defect class is how you ship one.** I rewrote it with the
correct discriminator, **got 238 hits — worse than the original** — and **removed it**. `CLAUDE.md`
shows no diff and `git log --all` no trace: the add and removal cancelled.

⚠️ **"5 hits" was never the population; it was the tool's opinion of the population.** The false-negative
rate was never measured corpus-wide.

**2 · `check_quote_drift` silently loses coverage when a `*` moves.**
An agent refused to accept `clean` dropping 297→296 after a one-character fix, diffed the fragment list,
and found the casualty: a **USA Hockey 602(a) match-penalty quotation**. `check_quote_drift.py:224`
requires a literal `*` **adjacent** to the opening quote mark; `*("` breaks that adjacency and the
fragment **became invisible — not flagged, absent.** It added one space instead and reported it.
⚠️ **Any past edit that moved a `*` away from a quote mark did the same thing, and nothing watches that
number.**

**Two further facts about that tool, both new:** shortening a fragment can **re-point it at a different
occurrence** of the same phrase, producing phantom drift flags; and **a split unmasks drift the longer
fragment was hiding**, because the tool reports only the *first* difference per fragment. ⚠️ **So
`flagged` returning to baseline does not mean a file is clean.**

---

## The edition question — a corpus that knew the answer in one document and not in four

For an **Elite League** reader the IIHF edition question **is settled**: the Casebook's Preamble adopts
*"the official 2026 - 2027 IIHF Rulebook"* as the fallback, and it writes **no Rule 60, 76, 83 or
icing**. ⚠️ **`goaltender.md` had carried this independently and correctly all along**, while
`shooting.md` said the question *"is not settled by anything published"* — **false for that reader.**

**Censused: 32 British-context edition sites; 17 already correct; 15 repaired.** ⚠️ **Both halves survive
everywhere** — the EIHL answer settles the Elite League only, and elsewhere it genuinely is not settled,
because the In-House Rules contradict themselves between cover and Introduction.

⚠️ **One repaired site DECIDED A PENALTY TIER** — high-sticking's waist floor **narrows** what counts as
a high stick: a defence for the striker, **less protection for a crouching opponent**. It moves in the
dangerous direction, so the counterweight was attached **in the same breath** rather than four sentences
downstream.

---

## Emphasis: two defects, one cause, and a construct worth knowing

`faceoffs.md` and `playing_without_the_puck.md` each had a trailer whose outer italic closed early —
**21,632 characters rendering outside their trailers**, against ~1,190 in the case found earlier.

⚠️ **One cause, not two.** An `*` preceded by `(` is **right-flanking**, so CommonMark lets it **close**
the outer italic rather than open a nested one. The nested spans that work are preceded by a **space**.
**`(` is the whole difference.**

⚠️ **`(*"` is a RISK MARKER, NOT A DEFECT LIST.** 112 occurrences across 54 trailers; **trailers carry up
to eight and parse clean**. Only a parse decides. **No sweep was dispatched.**

---

## What was REFUTED — and it is most of what was investigated

- **Two of three reported Majors did not hold.** A proposed citation fix would have **narrowed a correct
  citation**: the IIHF prints the box-during-altercation tariff **twice**, at 70.4 and 70.6. And a
  "no Key Takeaway reaches §12" finding dissolved once the takeaways were isolated from the trailer —
  they run 28,609 characters and carry the material.
- **Three change-log rows reported as unexamined were already correct**, one in more depth than the brief.
- **The predicted two-agent contradiction was not there.** Two documents grew the same section the same
  day, blind to each other, and agreed on every tension.
- **A book-frame sweep came back clean**: 34 sites read, 3 changed, **"actually wrong" did not occur once.**
- **The slash convention needed no change** — season forms and standards numbers are already special-cased.

⚠️⚠️ **The line of the round, and it should govern every future diff:**
***"The agreement between two documents is not evidence; it is the thing most likely to be wrong
together."*** The agent that wrote it proved it on itself.

---

## Coordinator defects

⚠️ **My briefs were wrong repeatedly, and every one was caught by an agent rather than a checker:** a
proposed heading that would have shipped a **false** penalty claim; a rule number attributed to the wrong
book; a site list short by three; **two line numbers that identified nothing**; a **fabricated** defect
inferred from the shape of an earlier finding; a Hockey Canada citation (**1.6(a)** for **1.5(c)**) where
*"had I taken the brief's number I would have corrected a correct citation"*; and a checker that lied in
both directions.

⚠️⚠️ **And a measured pattern in my own censuses — the first regex is always too loose:**

| census | first pass | tightened |
|---|---:|---:|
| unpaired `**` | 157 | 5 |
| slash in quotations | 147 | ~2 |
| "ask which edition" | 54 | 15 |
| unavailability vs sibling | 269 | 0 |
| displaced numerals | 1,982 | 0 |

**Every one over-reported by 10–50×.** ⚠️ **A brief carrying the loose figure would have sent an agent to
"fix" 150 correct lines.** The habit that works is not a better regex — it is **look at the hits before
believing a count.**

---

## What this round could not have found

- **`playing_without_the_puck.md`'s false negative has NOT had a `safety-reviewer` pass.**
- **`passing_and_receiving.md` §Deception reaches no summary layer**, and its facts line is **absolute**
  (*"never at all in your own end"*) where its body says *"a bad habit"* — **and the facts line is the one
  voiced alone.**
- **IIHF 20.4 is absent from `body_contact_and_battles.md`** (13× in `uk_rules.md`) — the third
  counterweight to the EIHL fighting softening.
- **A cross-document count collision is live**: `center.md` says *"four books"* on the crease line,
  `rink_map.md` *"three of the four"*, `shooting.md` the un-widened form. Each true under its own scope.
- **`faceoffs.md`'s "read this before you act" front-matter blockquote is NOT SPOKEN** — a listener is
  covered only incidentally, via the body and facts layers.
- **Eight of the EIHL Casebook's 22 amended rules remain unexamined**, and its three version stamps
  disagree while its Preamble issues interpretations **by email in-season**.
- **The site was not built and `site-reviewer` did not run** — correctly, since no `site/` file changed;
  but the rendered page is unverified for everything changed here.

---

## Addendum — clearing the commit gate's five blocks

The gate returned **BLOCK** on C3, C6, C8, C10 and C11. **One was my own procedural error; four were
real, and three of the four found further defects when worked.**

### C8 / C3 — stale, and the fault was sequencing

I dispatched the gate and *then* wrote this record, so it audited a 25-file diff with **no review record
in it** and correctly blocked. The record existed before the verdict arrived. ⚠️ **The lesson is
ordering: write the record before dispatching the gate, not alongside it.**

### The gate caught a FALSE CLAIM IN THE PLAN, and that is its sharpest finding

`OPEN_ITEMS.md` said of the body-checking item *"**Handed to `safety-reviewer`**"* while the
coordinator's own brief said **no such pass had run**. The phrase was the reporting agent's *intention*,
carried into the plan as though it were a completed action.

⚠️⚠️ **A plan that records an intention as an action is worse than one that records nothing, because the
next reader treats it as coverage.** Corrected in place, with the mechanism named.

### C6 — the safety pass fully justified the block: four findings, two permissive

- **A checking permission over-generalised from two divisions to a whole league.** The text said *"the
  IHUK Rules of Competition for **the NIHL**"*; that document is titled *"National League Division 1 and
  2 Rules of Competition"*. ⚠️ **An adult in any other British competition reads a checking permission
  as theirs by resemblance** — the error the brief explicitly warned against.
- ⚠️⚠️ **THE FALSE CLAIM THE COMMIT EXISTS TO REMOVE WAS STILL LIVE IN KEY FOCUS** — *"For an adult
  nothing published settles it"*, **in the first layer a listener hears**, four hundred lines above the
  body that contradicts it. **Body ✓ / summary ✗ is the shape of every round-10 critical, and the repair
  had produced one.**
- **The women's limb gave a permission its own competition regulation narrows.** ⚠️ **The agent
  deliberately did not assert which is tighter** — *"non-checking"* is also the ordinary label for the
  hockey IIHF 101.1 governs — and **wrote around the ambiguity rather than resolving it.**
- **The Junior and WNIHL tables give OPPOSITE answers at U16**, and the document carried both without
  saying so.

⚠️ **The new facts line carries a caveat and an action only, no permission** — because voiced alone,
*"the NIHL is checking"* is the hazard.

### C11 — "correct text is not cleared text"

The gate re-derived every quotation in the unconfined additions and **they all held** — then blocked
anyway, because the repair touched claims the finding did not name. ⚠️ **That distinction is easy to
argue away precisely when the text checks out.** Working it found four more:

- **Rule 70.3 was stated without its limb.** The book assesses it to *"the **first or second** Player to
  leave the Players' bench **(or penalty box)**"* — **two** droppings, not one, and the sibling document
  already carried both. A tier stated more broadly than the rule writes it.
- **"A minority of its rules" was false — it is exactly half**, eleven of twenty-two. ⚠️ **The prior
  figure, "nine", was stale, overtaken by this round's own additions.** Replaced with a **self-checking**
  construction the reader can count off the same sentence.
- ⚠️ **A quotation altered in a way `check_quote_drift` CANNOT SEE**: the corpus wrote *"website"* where
  the source reads *"web site"*. **The tool matches on alphanumerics only, so both flatten identically**
  — confirmed empirically, 72 flagged / 1293 clean before and after. **The flattening that defeats the
  page-furniture splice also blinds it to every whitespace-only alteration.** A permanent coverage hole,
  not a bug to fix.
- **An edition label missing on a quotation that exists in only one edition.**

### C10 — and a trap I nearly walked into

Rebuilt with the absolute binary. ⚠️⚠️ **A fresh `dist/index.html` mtime appeared while `build-pdf.mjs`
was still running.** A fresh mtime proves only that the chain got past the Astro step. **I waited for the
process to exit** and confirmed it reached its **last** step — `check:links`, 53 pages, 11,471 links, all
resolving, exit 0 — with `dist` postdating every staged content edit.

✅ **The gate independently verified the diagrams half of C10** and agreed no rebuild was needed:
`diagrams.json` is newer than every diagram source, and `check_absolutes` covers all 408 caption units.
**`site-reviewer` then ran on the two pages whose edits exist only to change the render.**


---

## The content files this round changed — all 22, named

⚠️ **Added at the commit gate's request.** The body of this record covers several of these **by
class** — the 55 spoken-layer sites across 16 documents, the 32 censused edition sites — and the gate's
point stands: **a later reader auditing this commit should not have to infer file coverage from a class
description.**

- `content/foundation/rink_map.md`
- `content/foundation/rules_primer.md`
- `content/foundation/uk_rules.md`
- `content/getting-started/getting_started.md`
- `content/hockey-iq/playing_without_the_puck.md`
- `content/off-the-ice/conditioning_and_recovery.md`
- `content/off-the-ice/equipment.md`
- `content/off-the-ice/how_to_watch_hockey.md`
- `content/off-the-ice/team_play_and_culture.md`
- `content/positions/center.md`
- `content/positions/defender.md`
- `content/positions/goaltender.md`
- `content/positions/switching_positions.md`
- `content/systems/defensive_zone_coverage.md`
- `content/systems/faceoffs.md`
- `content/systems/forechecking_systems.md`
- `content/systems/game_management.md`
- `content/systems/neutral_zone_systems.md`
- `content/systems/special_teams.md`
- `content/systems/zone_entries.md`
- `content/technique/body_contact_and_battles.md`
- `content/technique/shooting.md`

⚠️ **Per-file evidence for the classes not named individually above** — the equipment citation
audit, the book-frame sweep, the kneeing and clipping rewrite — **is in `project/plans/OPEN_ITEMS.md`
with primary-source line references.** ⚠️ **Moving the closed `✅` sections out of the plan into this
record is a follow-up, not a precondition** — the gate ruled explicitly that the evidence is on disk and
staged either way.

---

## Third-pass repair: a Common Mistakes entry that contradicted its own facts block

⚠️ **This repair is recorded here because it is staged and was found after the addendum above was
written.** The commit gate blocked on exactly that — new text in `content/` with no entry in the record —
and it was right to.

**The finding.** A `safety-reviewer` pass over `content/technique/body_contact_and_battles.md` reported
that the document's **Common Mistakes** entry on division scope contradicted **its own facts block
1,150 lines above it**. The block at `:566` states Hockey Canada's head-contact position precisely —
that **7.6** and **7.7** both open by banning head contact outright, with 7.6 reaching minor and female
hockey and 7.7 Junior and Senior. The Common Mistakes entry framed the same material as *"the four
worst fouls"* being unscoped, a phrase that reads as a class claim about all four books and does not
survive the division structure the block had already got right.

**The primary text, re-derived in this session rather than carried from the earlier pass.**
`sources/hc.txt:6234` is headed **Rule 7.6 Head Contact**: *"There is no type of legal contact to the
head, face, or neck. It is the players' responsibility to avoid making contact with an opponent's head,
face, or neck, at all times."* `sources/hc.txt:6307` is headed **Rule 7.7 Head Contact –
Junior/Senior**: *"There is no legal contact to the head, face, or neck. It is the players'
responsibility to avoid making contact with an opponent's head, face, or neck, at all times."*
⚠️ **The operative phrase *"at all times"* is verbatim in both**, and the two rules differ in the
division they name and in 7.7's supersession clause, not in whether contact is banned.

**What was changed.** The Common Mistakes entry was rewritten to name the four fouls individually
instead of grouping them behind a superlative, and to locate the division scope where it actually lives
— in the **body-checking** rules, Hockey Canada 7.3 and USA Hockey 604, and in none of the other four.
The instruction a reader acts on is unchanged: all four bind their division.

⚠️ **The two earlier repairs in this file were re-examined, not assumed.** Both were read again against
the staged text and **upheld** — no wording in either was altered by this pass.

⚠️ **What this pass could not have found.** It compared one Common Mistakes entry against one facts
block in one document, because that is where the contradiction was reported. **It did not census the
corpus for the same shape** — a summary-layer entry restating a body claim at lower precision, 1,000-plus
lines from the block that states it correctly. The layer test that finds the next one is not a grep for
the phrase; it is extracting every Common Mistakes entry that carries a rule number and reading it
against the facts block in the same document. **That census has not been run.**

---

## Fourth-pass repair: CARHA's crease section was named "Definitions" and the book calls it a Glossary

⚠️ **This is recorded because the commit gate blocked on its absence, and the gate was right.** The
repair was made **after** the third-pass section above was written — `content/foundation/rink_map.md`
at 21:22, the record at 21:23 — so the record was the last file touched in the session and still
omitted a content change made a minute earlier. **A later reader auditing this commit would have seen a
pass that ended at `body_contact_and_battles.md` and no trace of a provenance correction in another
document.** The failure is the coordinator's, and it is the same shape as the third pass's: new text in
`content/` with no entry in the record.

**The defect.** The document located CARHA's answer on the crease boundary in *"its Definitions"*.
**CARHA's book has no section of that name.** `sources/carha.txt:210` heads the section **GLOSSARY**.

**The primary text, read in this session.** The *Creases* entry sits at `carha.txt:270`, and its
operative sentence at `:273-274`: *"The lines which designate these areas are to be considered as part
of the creases."* The contrast the passage draws is also real — under *Rule 5. Goal Crease*
(`carha.txt:524`), Rule 5(c) at `:545` carries only the silent wording *"The goal crease area shall
include all the space outlined by the crease lines"*, which does not say which side the outline runs
along. So the passage's claim — that this book settles in its glossary what its rule leaves open — is
sound; only the section's **name** was wrong.

**Corrected at four sites, which is the point.** The wrong name had reached every layer that carries
it: the spoken **Key focus** (`:18`), the **body** (`:188`, immediately beside the quoted entry), the
**Common Mistakes** entry (`:570`) and the **Sources trailer** (`:645`). ⚠️ **A grep for the reported
occurrence would have found one and stopped.** `grep -ci definitions content/foundation/rink_map.md`
now returns 0, and no other document in `content/` names a CARHA section at all.

⚠️ **One correction to the gate's own report, recorded because the record should not carry it forward.**
The gate wrote that `git show HEAD:content/foundation/rink_map.md | grep -ci carha` *"returns
nothing"*, and concluded the whole CARHA passage was new text. **It returns 5.** CARHA was already
named in this document at HEAD — at `:271`, `:469`, `:568`, `:636` and in the trailer — on the change
zone, on angling and on body checking. What is genuinely new in this diff is the **crease-boundary**
passage specifically, and the word *Definitions*, which `git show HEAD` scores at **0**. **The gate's
conclusion stands and its supporting grep does not**, which is worth saying plainly: the block was
correct for a reason slightly narrower than the one given.

⚠️ **What this pass could not have found.** It checked whether *this* corpus names *this* book's
section correctly. **It did not census the corpus for the same defect in any other book** — every
"its Definitions", "its Glossary", "the Note to", "its Casebook" pointing at a named division of a
rulebook is the same class of claim, and a wrong one passes every mechanical gate because the
surrounding rule text is right. **That census has not been run.** It also did not touch the
un-widened *"three of the four"* crease framings in `shooting.md` and `offensive_zone_play.md`, which
now sit at a different scope from this document and from `center.md`.
