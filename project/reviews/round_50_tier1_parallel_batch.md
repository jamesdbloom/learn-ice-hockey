# Round 50 — *half the plan rows were wrong about themselves*

*Complete for Tier 1 batch 1. Eight authoring agents in parallel, four dimension reviewers across the whole batch. 27–28 August 2026.*

| | |
|---|---|
| Documents changed | **19** of 37 |
| Diff | +144 / −102 across 19 `content/` files; +750 / −124 including plan and record |
| Authoring agents | 8, run in parallel, one per file-group |
| Reviewers run | rules-verifier · safety-reviewer · content-reviewer · facts-reviewer (each across the whole batch) · site-reviewer · site-reviewer · safety-reviewer ×2 · commit-gate ×6 |
| Criticals found / fixed | 14 / 14 — CR1–4, GA1–4, GB1–3, plus SR-CR1–3 from the post-gate safety pass |
| Majors found / fixed | 25 / 25 |
| Plan rows with a **wrong premise** | **4 of 8 stale** (already fixed and never closed), **+1 mis-tiered** and **+1 whose stated defect was wrong** — see below; the tally is a count of rows that misdescribed themselves, not a single category |
| Date | 27–28 August 2026 |

---

## The brief

Tier 1 is described in the plan as *"the fastest work in the list — each has been verified, has an
identified remedy, and nothing blocks it."* The method here was to test that claim at scale:
dispatch one agent per **file** (not per item, so no two agents share a file), forbid them all from
touching shared state, and then review by **dimension across the whole batch** rather than per file.

The parallelisation was the owner's suggestion. It worked, and its most valuable output was not any
individual fix.

---

## The headline: the plan was wrong about itself, half the time

**Four of the eight rows worked had a wrong premise**, each found independently by a different agent:

| row | what the plan said | what was true |
|---|---|---|
| `offensive_zone_play.md:165` | a merge dropped three clauses, two still missing | **Round 36 restored both.** All clauses present in facts and body |
| `defending_the_rush.md:135` | a merge shed *"around"* and *"roughly"* | **Round 36 fixed it.** `:135` reads *"Roughly … around … roughly"* |
| Glossary — `Forecheck` homonym | unfixed | **Closed in round 37** |
| `zone_entries.md:174` | NHL 83.4's own-goal half is missing | **Already present** at three sites. The *real* gap was **book scope** — and nobody had recorded it |

**The cause is mechanical and worth stating precisely:** the planning text was copied forward from
`round_36_carried_findings.md` — the round's **pre-fix** document — instead of from its outcome. A
row therefore describes the defect as it was *found*, not as it was *left*.

Two rules now stand in `OPEN_ITEMS.md`: **close the row in the commit that closes the finding**, and
**link the review record rather than restating its text.** A third is addressed to whoever works
the tier next: **treat a row's description of what is wrong as a hypothesis, and verify the defect
still exists before fixing it.**

A fifth row was **mis-tiered** rather than stale: `backside coverage` sits in "known fix, named
location", but `terminology_source_audit.md:91` records that the IIHF section defining it has never
been located. The agent refused to write a definition it could not source, which is correct, and
the row belongs in Tier 4.

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | ✅ | rules-verifier | ~40 rule numbers across four books, body pass each |
| D2 | Rules travelling without exceptions | ✅ | rules-verifier · facts-reviewer | Where CR2 and CR3 were found |
| D3 | Rule-set divergence | ✅ | rules-verifier | Every cross-book quantifier attacked cell by cell |
| D4 | Citation integrity | ⚠️ partial | — | Rulebook citations verified. **No external citation refetched; `source-verifier` not run** |
| D5 | Provenance | ⚠️ partial | content-reviewer | *"hand-tracked"* found authored in a summary layer; external provenance unchecked |
| D6 | Negative existence claims | ✅ | rules-verifier · content-reviewer | Two strong negatives verified by exhaustive grep (below) |
| D7 | The cardinal rule | ✅ | content-reviewer | |
| D8 | Numeric ownership | ✅ | content-reviewer | Four owned numbers re-derived against their owners |
| D9 | The summary layer | ✅ | content-reviewer · safety-reviewer | |
| D10 | The key-facts layer | ✅ | facts-reviewer | Where CR2 and CR3 were found |
| D11 | Reader safety | ✅ | safety-reviewer | |
| D12 | Read-aloud integrity | ⚠️ partial | safety-reviewer | Judged by reading; `md_to_speech.py` not executed |
| D13 | Folklore | ✅ | content-reviewer | *"ten to fifteen draws"* identified as unsourced and repeated |
| D14 | Structure, style, cross-links | ✅ | content-reviewer | |
| D15 | The rendered site | ✅ | site-reviewer | Build clean; 8 pages × 2 viewports × 2 themes driven in headless Chrome over CDP (the extension refused localhost). **No criticals, no majors.** Zero console errors, zero horizontal overflow at 320 px, WCAG AA in both themes, the new `###` and its deep link land clear of the sticky header, all four merged Key Takeaways render as clean 10-item lists. **It also disproved a severity claim of mine — see GB2** |

**Mechanical checks:** `check_links.py` ☑ · `check_facts.py` ☑ · `check_absolutes.py` ☑ ·
`check_geometry.py` ☑ · `check_secrets.py` ☑ · `check_counts.py --update` ☑ ·
`check_counts.py --update` re-run as the **last** step after the final `content/` edit ☑ · `npm run build` ☑ (exit 0) · `check-arrivals.mjs` ☑ (0 hard, 7 pre-existing advisories) ·
`check_external_links.py` ☐

---

## Findings

### Critical

**CR1 · `positions/center.md` — a crease fact that read as a permission, with no instruction.**
The new NHL 69.1 material ended its facts block on *"if a defender pushes, shoves or fouls you into
the goalie, that is not contact you initiated"*, with the limit stated abstractly afterwards. Read
aloud with no context that is a licence to stay in the crease — where a goal is voided by
positioning alone and the player is standing in the path of a goaltender's lateral push. **The body
and the Key Takeaway both carried the instruction; the facts layer did not.** Rewritten
instruction-first as a `Never:`.

**CR2 · `systems/defending_the_rush.md` and `hockey-iq/risk_management.md` — slew-footing was
framed corpus-wide as a Hockey Canada rule, and Hockey Canada is the most lenient of the four
books on it.** `grep -rn "slew" content/` returned it in exactly two facts blocks, both citing
Hockey Canada rule numbers. **NHL 52.2 — *"Any player who is guilty of slew-footing shall be
assessed a match penalty"*, mandatory, no lower tier, no discretion — appeared in no facts block
anywhere in the corpus.** It is the harshest tier discussed in either document and the act a
backchecker chasing from behind is closest to committing. Added to both, with the IIHF and USA
Hockey tiers beside it.

**CR3 · Both documents stated *"With your goalie pulled, ANY foul denying the chance is an awarded
goal"*.** False in two of the four books: **USA Hockey 616(b)** awards it only via the *"fouled
from behind provisions"*, and **Hockey Canada 4.12(a)** routes through 4.11(a)(i), whose criteria
include *"tripped or fouled from behind."* The word *ANY* was load-bearing. Split into two scoped
facts in both documents, and the four-book split written into `risk_management`'s body.

**CR4 · `systems/defending_the_rush.md` KT6 contradicted the body added in the same edit.** The
takeaway asserted a deliberate-injury match penalty under the NHL, USA Hockey **and Hockey
Canada** — while the body three paragraphs earlier showed Hockey Canada's 7.1(c) is expressly
residual (*"not otherwise covered within the playing rules"*) and 8.6(c) bars a match penalty for
tripping outright. Rewritten to match its own body.

### Major — the propagation gaps, found by following the change outward

- **`positions/winger.md` never received the 69.1 correction** — and the winger is the net-front
  player more often than anyone. Its net-front paragraph was word-for-word the pre-edit `center.md`
  text. Propagated.
- **`center.md` pointed at `rules_primer.md` for *"the full rule"***, which carries **NHL 69.1
  only**. USA Hockey does not run 69.1's premise: **625(b)** is a flat position rule — *"No goal may
  be scored with an attacking player in the goal crease unless the puck has preceded the player(s)
  into the goal crease"* — with **no reasonable-effort proviso**. Verified and added.
- **`systems/neutral_zone_systems.md` explicitly attributed *"certain"* to `defender.md`**, which
  this same batch changed to *"confident"*. A cross-reference that had become false about its own
  target.
- **KT6 named Hockey Canada as the source of the harshest slew-footing consequence** when it is the
  most lenient; **KT4 used Hockey Canada's *bump, push or shove* threshold** where the IIHF's is
  lower — *"any move by a Player to step or glide into an opposing Player will be assessed at least
  a minor"* (101.1) — **which is the women's-hockey illegal-hit rule, not a general British one.** The
  first repair generalised it to "every British reader"; the fifth gate audit caught that and it is
  now scoped in both the takeaway and this record. **The record had propagated the error rather than
  catching it**, which is the argument for the gate re-reading the record and not only the diff.
- **`center.md` KT6 still said *"the ten to fifteen"*** after the body and facts were softened to
  *"the few"* — a correction that reached two layers and stopped.
- **`practice_and_development.md` dropped the qualification its owner bolds**: 1:12 is the
  **women's Olympic per-game average**, not a men's number, and not a single-game figure.
- **`conditioning_and_recovery.md`'s Common Mistakes inverted its own body** — *"it is the single
  lab number that is a poor predictor"*, where *"it"* resolves to *aerobic fitness*, asserting the
  opposite of the clause before it.
- **Safety scope**: `defending_the_rush` KT7 said Hockey Canada bars checking *"at U13"*, dropping
  **"and below"** — a U11 reader could have concluded checking was permitted at their level. And
  KT4's *"below adult"* needed stating as **the 14th birthday**, not 18, per In-House Rule 100.1.

### What went right, and it is the point of the round

**Every cross-book quantifier in the batch verified.** `rules-verifier` attacked seven of them cell
by cell and reported: *"None of the seven is manufactured. That is a different result from the
earlier rounds you flagged."* Two strong negatives were confirmed by exhaustive grep rather than
assumed — **`match penalty` occurs zero times in 663 KB of the IIHF book**, and **USA Hockey never
writes *deliberately injures* anywhere in its book**.

Three agents also declined to over-reach, which is the behaviour the briefs asked for and did not
get earlier in the week:

- The `skating.md` agent searched the document's Sources, all 37 corpus files, everything in
  `sources/`, and refetched three external pages before concluding the three-strides claim is
  genuinely unsourced — then **labelled it rather than deleting it** (non-negotiable 3), and stated
  in the label how it differs from the neighbouring claim the literature *contradicts*.
- The `center.md` agent chose to add supporting sentences to §Overview rather than move four
  untraceable facts out, because moving them would in practice have **deleted the cardinal-rule
  hedges from the most-read block in the document**.
- The `zone_entries.md` agent **caught and removed its own manufactured quantifier mid-edit** — it
  had written *"clear the zone and tag up in all four"*, which is false under USA Hockey below the
  630(d) classifications, where no tag-up exists.

### Structural change

**`defending_the_rush.md` §Breakaways was split.** Its block sat at **11 facts — the hard
ceiling** — while its body had gained three four-book divergences that could not be represented.
The style guide is explicit that *a cap must never evict a rulebook fact*. Now `### Breakaways`
(5 facts, what to do) and `### The carve-outs, and how far they reach in each book` (**11**, the hard
ceiling, with zero headroom — GA1's restoration and GB1's split both landed there after this
sentence was first written, and it said 9 until the gate re-derived it).
`project/reviews/` was grepped for the heading first, per the rule round 49 added after a split
silently regressed round 33's CR52.

### The gate block — and a rule error in the direction that matters

`commit-gate` blocked the staged batch and found four things the four dimension reviewers had not.

**GA1 · The §Breakaways split deleted a penalty rule from the facts layer.** The old fact carried
two limbs; the split kept the first, expanded it correctly into two scoped facts, and **dropped the
second** — NHL **67.4** (covering a puck in your own crease is a penalty shot, goalkeeper excepted),
**63.6** (the puck's position decides, not yours) and **67.5** (net empty, awarded goal). It
survived only in the body. `risk_management.md` still carried it, so the corpus was inconsistent
between two documents *in the same commit*. Worse, the split had created exactly the room needed —
the new block was at 9 of 11 — and round 36 had authorised the split *because* the two facts wanted
to be two facts. Restored, unmerged.

**GA2 · I stated a rule backwards, in the direction that under-warns.** Both `center.md` and
`winger.md` said USA Hockey's crease rule is *"stricter still"* because its push-in relief carries
**no reasonable-effort proviso**. That is the wrong inference: 625(b) reads *"if the attacking
player has been physically interfered with by the actions of a defending player that causes them to
be in the goal crease, **play shall not be stopped and any legal goal scored shall be allowed**."*
The missing proviso makes the relief **broader**, not the rule harsher. The truth is that 625(b)
cuts both ways — a **stricter** base rule (a flat position bar, against the NHL's impairment test)
with **broader** relief. Corrected in both files and in the facts line.

**GA3 · Two repairs applied to half a sentence.** A duplicated clause survived in KT7 despite my
having checked for it — my check counted the phrase, and the duplicate differed in punctuation. And
a `**` nested inside `**` swallowed a whole sentence into bold.

**GA4 · A fifth plan row with a wrong premise.** `OPEN_ITEMS.md` said *"ten to fifteen draws a game
matter" appears nowhere in its named owner* — it appears at `faceoffs.md:17`, `:52` and `:62`. The
**real** defect was that the figure is unsourced *everywhere*, in five sites across two documents.
Labelled at the owner as a coaching estimate rather than a count; the restatements now point there.
**That takes the wrong-premise rate to five of nine.**

Also fixed from the gate's non-blocking list: *"what the books write is that they fall violently to
the ice"* was true of two books, not four; and a `risk_management.md` fact said *"every book"* while
naming three.

**The pattern across GA1–GA3 is one thing.** Every one is a *repair* that went wrong — a split that
dropped a fact, an inference stated backwards, a fix applied to half a sentence. The dimension
reviewers checked the authoring agents' work; nobody was checking mine until the gate did.

### The second gate block — and the count that matters

The gate blocked again. Three findings were repairs of mine that had gone wrong, and one was a
repair that reached one of the two documents carrying the defect.

**GB1 · The slew-footing ejection claim was false for Hockey Canada — twice.** *"All four books
eject you"* — but **8.8(a) is a double minor, which does not eject**; 8.8(b) and (e) bar the major
and the game misconduct outright, and only 8.8(c)'s match ejects, discretionary on violence and
mandatory only on injury. The fact contradicted the clause after it in the same sentence, and
contradicted this document's own body and KT6, both of which correctly call Hockey Canada the
outlier. **Then the repair for it manufactured the same claim again** — *"the other three books
grade it lower and each still ejects you at its floor"*, where Hockey Canada is one of the three.
**And the fix reached `defending_the_rush.md` and not `risk_management.md`**, which still said
*"every one of the four books ejects you"*.

**GB2 · The nested `**` — and a claim I made about it that was wrong.** `**U13 and below**` sat
inside an open bold run. I asserted, and wrote into this record, that markdown pairs greedily so
those three words *"render plain"* — the exact words the round's safety Major was about. **That was
inferred from Markdown semantics and asserted as though observed. It is false in both renderers
this project actually uses.**

`site-reviewer` measured it in the built site: Astro renders through remark/micromark, which nests
`<strong>` properly rather than pairing greedily, and injected the defective markup alongside the
fixed markup under the site's own CSS — *"identical colour, identical text, identical line breaks"*.
I then tested `md_to_speech.py`'s `RE_BOLD`, which is non-greedy: it yields `USA Hockey 604(a) bars
it … at U13 and below, throughout female hockey.` — **every word present, zero stray asterisks.**

**The fix is still right and stays; the severity I attached to it was invented.** The real defect
class is smaller and typographic: because `.prose strong` is `font-weight: 650` with no nested-strong
rule, a nested run is **visually indistinguishable from its surroundings** — the emphasis is lost,
not the words. A corpus-wide sweep finds **8 such spans**, of which `site-reviewer` independently
confirmed one (`rink_map_and_glossary.md:151`, *"two books of the four"*), and **none is in this
diff**. Recorded as a deferred item, not a safety finding.

Fixing the nesting I also introduced a typo — *"a Member has **intentionally** approved"* — caught
on the next pass.

**The transferable point is the one this project already has a non-negotiable for:** *never claim
to have verified something you did not verify.* I reasoned about a renderer instead of running it,
in a record whose purpose is to be trusted by the next round. D15 exists precisely to catch that,
and it did — one audit later than it should have.

**GB3 · The "ten to fifteen" label reached two of the owner's three sites.** `:52` and `:62` were
labelled; **`:17`, the first statement of the figure, was not** — while `center.md` had been
rewritten in the same diff to stop restating it and point there instead. The route was built and
the destination left unlabelled.

**The count, stated plainly: eleven false cross-book generalisations across rounds 49 and 50.**
Every one was caught by a reviewer or the gate; **not one was caught by the author re-reading the
sentence.** Two were manufactured inside the repair for a previous one.

**What finally worked is mechanical, and it is now a procedure in `OPEN_ITEMS.md`:** grep the added
lines of the diff for quantifier tokens (`all four`, `every book`, `no book`, `three of the four`,
`the other three`, …) and verify each named cell individually against `sources/`. Run on this diff
it returned five hits — two verified true (`all four rulebooks` for leaving your feet: NHL 42.1,
IIHF 42.1, USA Hockey 607, Hockey Canada 7.4, checked cell by cell), one true negative, and **two
false**, both of which are the finding above. The sweep found in seconds what four dimension
reviewers, two gate audits and repeated careful re-reading had not.

### The third and fourth gate blocks — and content nobody reviewed

**Third block.** Three findings, all mine.

**GC1 · The slew-footing facts were propagated to `risk_management.md` with no body sentence in
their own section.** *"Extract, never author"* requires a fact to trace to **its own section**, not
merely to the corpus. A listener would have got a four-book penalty-tier table with no statement of
what the offence is. Fixed properly rather than by moving the facts: the section is a numbered list
of *"fouls that are not priced as minors"*, so slew-footing was added as **item 4**, defining the
act and walking all four books.

**GC2 · The record's closing section still said *"the site was never built… D15 is absent"***,
contradicting its own D15 ✅ row — written before `site-reviewer` ran and never updated when it did.
**In the one section this project treats as the next round's scope.**

**GC3 · A fact count of 9 that ships at 11.** Written before two later repairs landed in that block.

**Fourth block.** Four findings, and the important one is provenance.

**GD1 · The Sources notes were never updated.** Both documents enumerate, rule by rule, which
primary text they quote. This diff added **twelve** new rule numbers to `defending_the_rush.md` and
**nine** to `risk_management.md` — including NHL 52.2 and Hockey Canada 8.8 quoted verbatim — and
touched neither list. `risk_management.md` had **no USA Hockey rules entry at all** while quoting
616(b) and 639. The style guide tells the next round to build on these lists, so an incomplete one
misleads directly. **The first repair of this got it wrong in both directions** — it listed three rules `defending_the_rush.md` does not use (USA Hockey 617(b)(2)/617(c)(8), Hockey Canada 6.11(b), cross-contaminated from `zone_entries.md`), and left four IIHF rules `risk_management.md` cites unlisted (24.8, 25.3, 52.2, 57.3) while adding a USA Hockey 602(a) it never uses. Both notes were then checked **in both directions** — every rule listed is used, every rule used is listed — and both are now complete.

**GD2 · `check_counts.py` failed on a staged file, by one word.** `--update` ran, then `content/`
was edited again, and the figure moved. CLAUDE.md warns about exactly this ordering; the record
meanwhile asserted the checker ☑. **The round's own transferable point failing inside the record
that states it.**

**GD3 · Two wordings the gate caught in my new prose.** Hockey Canada 8.8 writes *"upper body
backward"*, not *"chest"*; and 4.11(a)(i)'s criterion is *"tripped or fouled from behind, **or
fouled by the goaltender**"* — the truncation hid a route that exists.

### ⚠️ Content in this commit that no reviewer has seen

**`risk_management.md` item 4 — roughly 150 words of four-book penalty and ejection prose — was
authored after `safety-reviewer`, `rules-verifier`, `content-reviewer` and `facts-reviewer` had all
finished.** It exists because the third gate block required it. It has been verified cell by cell
against `sources/` by `commit-gate` (twice) and by the author, and `facts-reviewer`'s traceability
rule is satisfied — but **no reviewing agent has read it as prose**, and it sits in the section a
backchecker reads about fouls that end games. The same is true, less extensively, of the corrected
625(b) passages in `center.md` and `winger.md` and of the Sources-note additions.

**That is the structural cost of repairing under a gate**: each block produces new writing, and the
reviewers have already finished. It is disclosed here rather than left for the next round to find.

### The fifth gate block — a scope error the record helped hide

**GE1 · A women's-hockey rule stated as the general British rule.** KT4's repair read *"Under the
IIHF book the line is lower: any move to step or glide into an opponent is at least a minor
(101.1), so Hockey Canada's test is not the one a British player is under."* **IIHF 101.1 sits
under `RULE 101 WOMEN'S HOCKEY – SPECIFIC PLAYING RULES` and is headed `ILLEGAL HIT IN WOMEN'S
HOCKEY`.** The clause is women's-hockey-only. The takeaway generalised it to every British player,
used it to override Hockey Canada's steering allowance, and then contradicted itself two sentences
later by scoping 101.1 correctly. It also contradicted this document's own body at `:342` and
twenty-plus sites across eight documents, all of which write *"IIHF women's Rule 101.1"*.

**And the record carried the same error** — its Major list said *"which is the test every British
reader is under."* So the record propagated the defect rather than catching it. **That is the
argument for the gate re-reading the record and not only the diff**, and it is why the gate found
this on the fifth pass rather than the first.

**GE2 · The Sources repair was wrong in both directions.** It listed three rules
`defending_the_rush.md` does not use — USA Hockey 617(b)(2), 617(c)(8) and Hockey Canada 6.11(b),
cross-contaminated from `zone_entries.md` — while leaving four IIHF rules `risk_management.md`
cites unlisted (24.8, 25.3, 52.2, 57.3), including a **verbatim quotation** of 25.3 added in this
diff, and adding a USA Hockey 602(a) that document never uses. A Sources note that over-lists is a
false provenance claim; one that under-lists makes a quotation untraceable. Both are now checked
**both ways**.

**GE3 · The "chest" correction reached the prose and stopped at the facts block.** Two body
passages were fixed; `defending_the_rush.md`'s facts line still read *"pushing their chest back"*.
The books write *"upper body backward"*. `check_facts.py` cannot see a wrong paraphrase.

### The sixth gate block, and the safety pass it forced — the most valuable thing in the round

The sixth audit blocked on substance, which was the pre-set condition for stopping and reporting
rather than repairing again. Two findings: the *"chest"* correction had reached two files and
stopped one short — in `rules_primer.md`, the corpus's own rules reference, where it narrows a
**match-penalty** offence — and `risk_management.md` item 4 contained *"the one act no puck-first
carve-out reaches"*, which its sibling document contradicts on the page, since Hockey Canada 8.6
excludes **both** 8.7 Clipping and 8.8 Slew-Footing.

**The gate's real finding was not either defect. It was that ~150 words of safety prose had been
committed to by nobody.** So `safety-reviewer` was run over the three passages authored after every
dimension reviewer had finished. **It returned 3 criticals and 5 majors.** Every one verified
against primary text before acting on it.

**SR-CR1 · The uniqueness fix reached the body and stopped at the facts line**, so lines 540 and
541 of the same block contradicted each other — and `md_to_speech.py` emits each fact as its own
paragraph, so a listener hears both with no way to reconcile them. A reader concluding the
puck-first carve-out covers a low slide takes someone's legs out below the hips believing they are
protected. They are not, in any of the four books.

**SR-CR2 · `winger.md`'s "get out of the crease" instruction existed in one prose sentence and in
no facts, Common Mistakes or Key Takeaways layer** — in the document that says in its own words
that the winger is *"the net-front player more often than anyone."* This is the
`body_contact_and_battles` §5 shape exactly.

**SR-CR3 · Item 4 was 150 words of tariffs with no statement of harm**, in a section framed as
cost-benefit, ending on *"does not eject."* It quoted **Hockey Canada 8.8's** definition — the one
book of four whose definition omits the violence — while **NHL and IIHF 52.1 both end on *"fall
violently to the ice."*** The harm is now the item's opening, and *"most lenient"* is corrected to
*"the one that starts lowest"*, because Hockey Canada's **ceiling** is a match penalty, above the
IIHF's.

**Three cross-book errors, all verified:** *"reads the same way for a British player"* was false —
**IIHF 69.1 carries a sentence the NHL's does not** (a player who *"does not leave immediately"* can
have play stopped for a neutral-zone draw; `grep` returns 1 hit in the IIHF book and **0** in the
NHL's). My *"broader relief"* framing **under-warned**: USA Hockey **617(c)(4)** disallows the goal
on two limbs — *positioned in the crease* **and** *"interfering with the goalkeeper"* — and the
push-in parenthetical is written into the first only, while **625(a)(8)** remains a minor. And
**Hockey Canada was absent from both crease passages entirely**, though its **Interpretation 2 to
8.5(a)** is the strongest support for "get out" in any book: it penalises **you** for not trying.

The block went to 12 facts, so `### Slew-footing: the one the carve-outs never reach` was split off
— `project/reviews/` grepped for the heading first, per the rule round 49 added.

**What this vindicates.** Every defect above is in content written *under gate pressure, after the
reviewers had gone*. The authoring agents' work has not produced a single blocking finding across
six audits. **The parallel authoring was safe; the serial repair-under-gate was not**, and the fix
is not to try harder but to re-review after repairing — which is what finally found these.

### Deferred

- **Nested-bold spans: 8 corpus-wide, none in this diff.** They do not drop words in either renderer
  (verified), but `.prose strong` is `font-weight: 650` with no nested-strong rule, so the inner
  emphasis is invisible. Either unnest them, or decide typographically — `.prose strong strong`
  could carry a heavier weight. That is an owner call, not a defect fix.
- **Two render paths remain unchecked, and they are the ones where the dropped-word premise could
  still be true:** the 9 EPUBs from `build-downloads.mjs`, which may use a different Markdown path,
  and the TTS audio itself. `md_to_speech.py`'s regex was tested here in isolation; the pipeline
  end-to-end was not run.
- **`dist/analytics.js` ships a Google Analytics 4 bootstrap.** Inert locally — `PUBLIC_GA_ID` is
  unset and referenced nowhere in the repo — but the capability is wired, and if that variable is
  set in the production build the site will load `googletagmanager.com`. Worth an explicit decision
  by whoever owns `infra/`.
- **The ToC has no scrollspy** — no `IntersectionObserver`, no `aria-current`. An absent feature
  rather than a regression, recorded so it is not re-found as a bug.

- **~23 further read-aloud `above`/`below` references in `conditioning_and_recovery.md`**, found by
  the agent and deliberately left: fixing them is a document-wide rewrite needing its own round.
- **`sources/` no longer holds most of what the style guide says it holds.** The guide names
  `tulsky.txt`, `berg.txt`, `hockeyscan.txt`, `huh.txt`, `bvhs.txt`, `pass.txt` and others as
  present; **none is.** This directly weakens the guide's own instruction to *"check the working
  directory"* before writing a negative existence claim — an absence found there is much weaker
  evidence than the guide implies.
- **`neutral_zone_systems.md`'s IIHF metric rink distances are unverifiable** — they exist only in
  an image-only appendix, and 18.5 m ≠ the 19.51 m conversion of the NHL figure tabulated elsewhere.
- **NHL Table 10 and IIHF Table 12** both still label the empty-net awarded goal *"fouling from
  behind"*, against their own operative rules. The document's reading is right; the tables are what
  a referee glances at.

---

## What this round could not have found

**No external citation was refetched.** D4 and D5 remain partial and `source-verifier` was not run —
so every rulebook claim here was re-derived from `sources/`, but the Berg scanning figures, the
Macnamara CI, the Keshen goaltender study and the retracted Copenhagen review are cited and
unrefetched. **Provenance is where this corpus's citation defects have historically been** — the
right fact credited to the wrong author — and it is untested this round.

*(This paragraph originally read "the site was never built… D15 is absent." That was written before
`site-reviewer` ran and was not updated when it did — the same half-repair shape as GA3 and GB1, in
the one section this project treats as the next round's scope. The gate caught it. D15 is ✅ and the
build is clean.)*

**Every reviewer looked where the brief pointed.** `content-reviewer` said so explicitly: six of
nineteen changed files were named in its brief, and it found defects in three of the thirteen that
were not — including this round's only content Critical. **`defending_the_rush.md` received the
largest edit in the batch and was reviewed only because one reviewer read the whole diff anyway.**
The next round should **scope by diff size, not by brief**.

**Parallel authoring outran review capacity.** Eight agents produced nineteen changed files in one
pass; four reviewers then found four criticals in them. The gate held — but the ratio is the thing
to watch, and it is the argument for keeping the cross-cutting sweeps single-owner.

**Nobody checked the sentences this round did not touch.** Four of eight plan rows turned out to
describe already-fixed defects, which means the *unworked* rows are equally likely to be wrong in
either direction — including rows describing defects that are real and worse than recorded.
