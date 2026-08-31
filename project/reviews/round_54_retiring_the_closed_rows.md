# Round 54 — retiring the closed rows, and what the plan actually measures

`CLAUDE.md` states the convention plainly: **`project/plans/` holds remaining work and no completed
items — when work closes it moves out to a review record.** Nine closed sections had accumulated in
`OPEN_ITEMS.md` across several rounds and were never moved. They are moved here verbatim.

⚠️ **And the measurement that prompted this was wrong first.** Asked how much of the plan remained,
I answered that the round-53 handover — **1,252 lines, about a third of the file** — was *"dead
weight"* and *"the cheapest real progress available"*.

**It is not.** Measured properly: the handover is mostly **live open rows**, and the genuinely
closed sections come to **240 lines, 6% of the file.** The retirable fraction was overstated more
than fivefold, in the same answer that reported the plan's own undercounts.

**What the plan actually holds after this retirement:** 39 open ⚠️ sections against 0 closed, in
~3,770 lines. The round-53 handover stays, because it is the work, not the record of the work.

---

### ✅ The four blockers are closed — and the briefs were wrong again, in three of four

All four MUST/SHOULD FIX items from the previous handover are repaired, each verified
against primary text on disk by an agent told to refute the brief first. **The instruction
earned its place again:**

| What the brief said | What the book says |
|---|---|
| *"All four Interpretations to Rule 10.1 were read and none is on point"* | ⚠️ Hockey Canada 10.1 has **twelve** Interpretations, and **Interpretation 5 is squarely on point** for 10.1(v) — *"Clarifications as it pertains to goaltenders shooting or batting the puck directly out of play"*. Its escapes are no-glass, a deflection, and dissimilar rink ends — **not intent.** |
| *"six bare `6.11(b)(ii)` references"* in the primer | **Seven.** Key Takeaway 1 carries two, not one. One tag-up sense, six stop-play. |
| `zone_entries.md` quotes Situation 83.34 *"verbatim twice"* | **One** body location carrying **two** quoted fragments. Both exact. |
| USA Hockey writes slew-footing *"outside the rule its puck-first relief sits in"* | **False** — the 639(a) Note and Casebook Situation 2 both sit **inside** Rule 639, as does slew-footing. The conclusion held; the premise did not. |

**What was fixed:** the after-the-whistle limb scoped to three books at all four over-reaching
sites (`risk_management.md` facts/body/KT5, `playing_without_the_puck.md`); Casebook 639
Situation 4 widened from *"the puck carrier"* back to the ruling's *"an opponent"*; the
`6.11(b)(ii)` ambiguity disambiguated at all seven sites using `zone_entries.md`'s existing
`(tag-up clause)` / `(stop-play clause)` convention — **not a new one**; the HC 10.1(v)
*"deliberate or not"* gloss re-cast as a reading in both files that carried it, **and the two
agents converged on materially identical wording independently**; and Sources trailers filled
across seven documents (HC 10.1, IIHF 63, IIHF 63.2(II), IIHF 57.4, USAH 639(a)+Note, USAH
603/610/618/631, NHL 56.4/56.5, IIHF 56.4/56.5, IIHF 20.3, USAH 624/636(f), HC 6.11, HC 8.7,
and the Situation Handbook itself).

---

### ✅ CLOSED: no new external link rot

Full external check run. **Every failure was already dead at baseline.** Two moved
403 → 429, which is rate limiting rather than rot. No citation newly broke.

---

---

### ✅ CLOSED: the bare-arrowhead routes — and the plan's own fix was wrong

The recommended repair (start the route at the glyph edge to recover the hidden 3.5 ft)
**recovers nothing**: the glyph is opaque and painted *after* the routes, so visible line is
`arc − glyph − arrowhead` whether the ink is drawn there or not. What trimming changes is
the **dash phase** — done as a `stroke-dashoffset`, needing no curve split and no
`wave`/`loops`/`zigzag` case.

**Measured: 50 of 59 pass routes phase-corrected; fused-to-arrowhead 37 → 30**; `check-arrivals`
0 hard / 7 advisory unchanged; all 80 arrow-ended skater routes still begin at 0.0000 ft
from an anchor. The alternative was **tested, not argued** — aligning to the arrowhead base
renders *nothing at all* on the worst route.

Corrected figures: glyph ink reaches **3.875 ft, not 3.5** (so every remainder in the plan
was 0.375 ft too generous); `winger-dz-reverse` is **2.85 ft, the third worst, not the
ninth**; **no route ever drew zero line** — the mechanism is **fusion** of a 1.4–1.8 ft
fragment to the arrowhead, not consumption; the `W` census is **31 glyphs across 17
diagrams**, not 23.

Two routes deliberately left: `pp-overload` r1 and `support-distance-range` r0 still render
as one unbroken segment. For the second, **the 12.21 ft gap IS the diagram's subject**, so
shortening it would destroy what it teaches; its `describe` dropped its promise of a
*"dashed"* route instead. `site-reviewer` is checking both at phone width, where the
judgement has never been made.

---

---

### ✅ CLOSED: the IIHF half of the neck-protector contrast is verified sound

IIHF 9.12, **identical in both editions**: *"For violation of this rule, after warning by
the Referee, a minor penalty shall be imposed."* So the corpus's *"no warning"* contrast is
right in all six documents that draw it.

⚠️ **NEW, and a trap for the next editor.** The 2025/26 book (v1.0, v1.1) carries
*"For violation of this rule in Junior Hockey ➔ Rule 102.7 … and ➔ Rule 202.7 …"*; the
**2026/27 book deletes that sentence.** `uk_rules.md:129` cites the routing and is
**correct**, because the In-House Rules adopt *"Version 1.1, published July 2025"* **by
name** — so v1.1 is the operative book for a British reader.

**A sweep updating the corpus to the 2026/27 IIHF book would BREAK a claim that is currently
right.**

⚠️ **And the In-House editions' Rule 9.12 differ by EXACTLY ONE TOKEN** — `SIHA` →
`IHUK/EIH/SIH`. Measured by whole-rule word diff: 594 → 602 chars, similarity 0.9899, one
`replace` opcode. A relayed figure of *"nine words"* travelled through two briefs before an
agent failed to reproduce it. **The mandate and all three enforcement bullets are word-for-
word identical between editions.** What is missing is a disclosure that a reader consulting 2026/27 will not find the
routing — an addition, not a correction.

#### The old row, retained for its unverified remainder

The In-House side is now verified end to end by four agents. **The IIHF side was carried on
trust and never re-grepped**, and the whole *"no warning"* contrast rests on it:

- `uk_rules.md:129` routes junior violations to **IIHF 202.7 / 102.7**
- the claim that **IIHF 9.12 gives a warning by the Referee first**, which is what makes the
  In-House *"no warning, straight to a 10-minute misconduct"* a contrast rather than a
  restatement

⚠️ **If IIHF 9.12 does not in fact warn first, the contrast the corpus draws in six
documents is wrong** — and it would be wrong in the *lax* direction for a reader who
concludes the In-House rule is merely the IIHF rule restated. Grep
`sources/iihf_rules_v1.1.txt` and `sources/iihf_rules_2026-27.txt` and quote the operative
words.

---

---

### ✅ CLOSED: the adoption-list-as-enforcement-list defect

Traced from two independent findings to **five documents and roughly twenty sites**, every
one verified against both In-House editions before writing. `uk_rules.md`'s body was already
right — its defect was a **propagation stop** at Common Mistakes and Key Takeaway 2.

Two findings nobody briefed, both from an agent reading the 2026-27 edition **end to end**:
the corpus was teaching a **deleted permission** (2025-26 Rule 9.8's *"refit it at once if
safe to do so"*; the 2026-27 edition replaces it with *"must immediately leave the ice"* plus
a misconduct under Rule 12), and **Rule 5.4 added neck laceration protection to the
pre-warm-up equipment check** for 2026-27.

⚠️ **Direction, stated once so it is never mis-read:** nothing here reduces anyone's
obligation. Two corrections make the scope **wider** (the Home Countries, not England and
Scotland; IHUK added); one makes a **named list** narrower without touching the mandate, and
every site carrying it now states in terms that university hockey is **not** a gap. In the
verifier's words: *there is no British player of any age, in any competition, in any of the
four home nations, whom this rule does not require to wear one.*

---

---

### ✅ CLOSED: the reader-only table layer strands no safety fact

19 of 46 tables are never narrated; **pointer coverage is exactly 1:1**, so no listener is
silently deprived. Audited for the real question — is any load-bearing safety fact stated
**only** there? **No.** Every one's content is duplicated in a narrated layer. The one
genuinely table-only grid is an xG data reference, which is the legitimate use. Combined
with the penalty-test probe (36 of 39 cited tokens present outside the table), **this is a
gap in access, not in safety.**

---

---

### ✅ MEASURED: does a counterweight in an adjacent `<p>` reach the listener?

Yes — at the one site measured. `defending_the_rush.md:365`'s bare boards-contact
imperative is **paragraph 8 of 22** in `systems__defending_the_rush/019.ssml`; the IIHF
101.1 rule and the non-check `Never:` are **paragraphs 9 and 10**. Same chunk,
consecutive, in that order. The Action-then-Never convention holds there.

**The method is the durable part**: chunk membership and `<p>` index are both cheap to
measure, so "is the counterweight in earshot" never needs assuming again. ⚠️ Measured at
**one** site — a block whose counterweight falls in the *next* chunk is a different case,
and the same measurement would show it.

---

---

### ✅ THE FULL RULEBOOK DIFF IS DONE — and it is much bigger than the nine rules previously compared

**468 rules in common: 396 identical, 9 casing-only, 63 with word-level differences.** The pipeline
was validated against the book's **own `SUMMARY OF CHANGES` table** — it found all eight rules the
IIHF lists, **plus more the publisher's summary does not**, consistent with its own caveat that
*"clarifications and other editorial changes have been made."*

⚠️ **What the normalisation had to defeat, recorded because it nearly produced false findings:** the
letter-spaced side tab (`S E CT I O N · P L AY I N G A R E A`) alone caused **22 false positives**; a
too-loose whitespace threshold caused **8 more**; and a hyphen wrap spanning a **page break**
(`imme-` / [break] / `diately`) made Rule 42.1 falsely appear to change.

**The changes that reach the corpus:**

| Rule | Change | Corpus impact |
|---|---|---|
| ⚠️ **60.1 / 60.3** | High-sticking now requires **contact** and carries the **waist floor** — the NHL's sentence word for word. v1.1 had neither | **Fixed this round** in `rules_primer.md` and `body_contact_and_battles.md` |
| ⚠️ **Rule 46** | **Rewritten and renumbered in full.** Every sub-number the corpus cites moves — instigator 46.3→46.10, aggressor 46.4→46.2, sucker-punch 46.5→46.13, third man in 46.7→46.14. ⚠️ **"Defender – Unwilling Combatant" (46.6) DELETED**, and the retaliation sentence with it. **Three claims contradicted on substance** | `uk_rules.md` ×4, `rules_primer.md:385`, `team_play_and_culture.md:287` |
| ⚠️ **Appendix IV: THREE major-penalty tables merged into one**; everything from Rule 22 onward shifts by **−2** | **Verified centrally by reading the whole blocks in both editions, not by grep.** v1.1 split the majors by *consequence* across three tables — **Table 5** majors *"without a game misconduct possible"* (its only row: *"Fighting (Defender – Unwilling combatant) 46.6"*), **Table 6** *"that result in an automatic game misconduct"*, **Table 7** *"that result in a game misconduct based on the Referee's judgement"* (Boarding 41.4, Charging 42.4, Elbowing 45.4, Interference 56.5, Tripping 57.4). **2026/27 merges all three into a single Table 5** with two tick columns, `MAJOR ONLY` and `MAJOR + GMP`. Content-verified mapping: **Rule 22 Misconduct 9→7**, **Rule 23 GM 10→8**, **Rule 24 PS 11→9**, **Rule 25 AG 12→10** (and 12.1→10.1), **Rule 27 GK 13→11**, **Rule 16 Minor 14→12**. | `rules_primer.md` ×5, `goaltender.md` ×4, `special_teams.md`, `game_management.md`, `uk_rules.md` — ⚠️ **the underlying rules are all textually identical, so the teaching stands and only the citation moves** |

⚠️ **A substantive loss inside that renumbering, and it is not a citation problem.** v1.1's Table 7 was
explicitly headed *"based on the Referee's judgement"*. **2026/27 carries no such framing** — a
boarding row simply shows ✓ in both columns, so the table no longer tells a reader that the second
tick is **discretionary rather than automatic**. Any corpus passage that leaned on v1.1's heading to
explain *why* the same offence can be a major with or without a game misconduct **loses its source
in the new edition** and must be re-grounded on the rule text rather than the table. **Census not yet
run for passages that do this.**

⚠️ **Do not remap these by arithmetic.** **v1.1 contains no Table 8 and 2026/27 contains no Table 6**
— both books skip a number. A remap computed as *"old minus two"* happens to be right here only
because the content mapping was checked row by row; the numbering itself is not a reliable index.
*(The coordinator opened this suspecting the row was wrong, on the reasoning that deleting one table
shifts later ones by one. **The row was right and the reasoning was wrong** — three tables became one.
Recorded because the near-miss is the same shape as the round's other premise failures, running the
other way.)*
| **83.1** offside | **ADDS** *"a 'skate' is to be considered **the blade of the skate only**"*, and now requires possession **"with their stick"** and **"both skates completely"** across | 12 documents; `rules_primer.md:209` is now incomplete |
| **79.1** hand pass | **GAINS** a deflection carve-out | `passing_and_receiving.md` |
| ⚠️ **102 / 202** | The **non-compliance escalation procedure is DELETED** from both the women's and men's junior sections, and the U18 *"strongly recommended"* mouthguard tier is gone | `equipment.md`, `uk_rules.md` — **safety** |
| **Rule 70** | Leaving the bench now carries explicit supplementary discipline **and coach liability** | `team_play_and_culture.md` — **safety** |
| **NEW Appendix VII** | ~11 pages of **pilot rules explicitly NOT in force** — *"concepts for potential future rule changes… they need to be tested more widely"* | ⚠️ **Restates rule text under existing numbers**, so any tool segmenting on rule numbers **must anchor to line starts** or it reads pilot text as the body rule |

⚠️ **Edition strings are mid-migration and the mixture is itself a finding: 42 citations read
*"IIHF Official Rule Book 2025/26"*, 7 *"Rulebook 2025/26"*, 3 *"2025"*, and 20 already say
2026/27.**

⚠️ **This does NOT establish that British hockey is on the 2026/27 book** — the IHUK 2026-27
Introduction still names *"Version 1.1, published July 2025"*. `uk_rules.md`'s disclosure stands.

**⬜ ⚠️ A NEW internal inconsistency in the IIHF book itself, found in passing.** The post-icing
substitution ban is written out **twice** and the two copies do not agree: **81.4** lists **four**
exceptions including *"a Player with a **broken skate**"*; **82.1** states the identical ban with
**only the NHL's three**. The NHL's two copies agree with each other. **Neither IIHF rule says which
governs.** ⚠️ **Eight documents state the fourth exception without saying the same book's 82.1 omits
it.**

**This outranks Tier 0.** Found 29 August 2026, at the very end of round 53, by an agent auditing
link *targets* rather than link *liveness* — it read the live IIHF hub, which announces the new
Rule Book. Both PDFs are now on disk as `sources/iihf_rules_2026-27.txt` and
`sources/iihf_situations_2026-27.txt` (clean extractions, 0 mojibake), and `fetch_sources.sh`
carries them as **additional** entries, not replacements.

⚠️ **The IIHF book is the base rule set at EVERY level of British hockey.** It is the primary book
for one of the corpus's two named audiences, and **the corpus's IIHF layer is 2025/26 across 13
documents.**

---

### ✅ The British FACEOFF question is settled — but not by the route I expected

The **IHUK In-House Rules 2026-27, Revision 1 (25 July 2026)** were obtained at the close of round
53 — named by an agent as *"the single highest-value thing outstanding"*, because the 2025-26
edition adopts the IIHF book **by name** and nothing on disk proved which edition British hockey is
actually played under. Now at `sources/eiha_inhouse_2026-27.txt`. **And it refuted the coordinator on the way:**

1. ⚠️ **It contradicts ITSELF on the IIHF edition, and the coordinator got this wrong.** Its cover
   says *"in conjunction with the **Current** IIHF Rule Book"*; its **Introduction** says *"adopt
   the latest IIHF Official Rule Book **(Version 1.1, published July 2025)**"* — **and that is the
   2025/26 book.** So this document is **NOT** evidence that British hockey is on the 2026/27 IIHF
   book. I asserted it was; the agent sent to act on it refuted me, and said the conclusion would
   otherwise have been fabricated into twelve places. **The edition question is still open and
   cannot be settled from this document** — it needs a Rule Bulletin, a later revision, or IHUK.
2. ⚠️ **But IHUK wrote the change into its own rules, which makes the edition question irrelevant
   for faceoffs.** The 2025-26 edition has **no Rule 76 section at all**; 2026-27 adds one: *"With
   the exception of face-offs following icings, the linesperson shall **immediately replace the
   centre for all violations**."* — the replacement regime and the post-icing exception in the
   British governing body's own words, **whichever IIHF book sits underneath.** That is a stronger
   result than the one I claimed.

It independently confirms the stick-order change too: *"**Either centre can now put their stick
down first** for a face-off"* — IHUK's own *"now"* flagging it as new. **That is a second British
change nobody was looking for**, and it bears on `center.md`'s stick-order material.

⚠️ **This clears the faceoff hedge and nothing else.** `uk_rules.md` is built end to end on the
**2025-26** In-House Rules and the **2025/26 v1.1** IIHF book, and says so at its line 34 — *"Every
IIHF rule quoted anywhere in these documents is verified against the IIHF Official Rule Book
2025/26 Version 1.1, July 2025"*. **That document is now a season behind on both of its books**, and
it is the corpus's dedicated British document.

---

## 625(b) in the positions documents — and a brief lead that was wrong again

Six sites repaired across `center.md` and `goaltender.md`, `+6/−6` lines, nothing restructured.

⚠️ **One of my two leads was wrong.** I told the agent `goaltender.md` *"states 625(b) as a flat
position bar in a `Rule:` fact"* and to check whether the blockquote was complete while the fact was
not. **The fact already carried both goal-voiding carve-outs, and so did the blockquote.** Had it
trusted me it would have rewritten correct text.

### The defect it found instead — a shape no brief had named

**Rule 625(b)'s ¶1 has THREE conditions**, and sites were naming **one**:

> *"…provided the puck is in the attacking zone, the attacking team has possession of the puck **and
> the goalkeeper is in contact with the crease**."*

`goaltender.md` gave only the goalkeeper-crease-contact condition, with the words *"but only
while"* — ⚠️ **presenting one of three as the whole limit.** That is not an omission, it is a
misdescription: a reader is told the stoppage turns on a single fact when it turns on three, and
`goaltender.md:459` stated the stoppage as *"a duty"* with no provisos at all.

**Both Key Takeaways were bare** — `center.md`'s and `goaltender.md`'s — which is the summary layer
failing while the body was right, for the fourth document this round.

**Cleared by reading, not by grep:** the Sources trailers (bibliographic, and they fail safe), a
625(a)(1) protective-screen blockquote, a 625(a)(8) passage, and both files' Common Mistakes, which
carry no 625(b) site at all.

### ⚠️ The gap it declared is the one that cost four attempts on another rule

> *"I read the Playing Rules text only. `sources/usah_casebook.txt` has **seventeen Rule 625
> situations**, and both files' Sources trailers cite Situations 7, 10 and 11 — I did not open them,
> so a Casebook carve-out **or a Casebook tightening** of any of the three limbs would have escaped
> me entirely."*

**That is precisely how Rule 614(c) was got wrong four times in one round** — the corpus's *"sole
exception"*, then *"no exception of any kind"*, then *"the one carve-out"*, each written by someone
who had read one book. **Dispatched: all seventeen situations, read in full, in both directions.**

---

## ✅ CLOSED, by measurement: the em-dash inversion class is at ZERO

The plan carried **"TIER 1 — 37 inverting instructions remain, in 17 documents"**, with three named
examples to *"take first"*. Two of the three are already repaired — `defending_the_rush.md` now reads
*"…own end boards. Take the puck, take the ice, or angle them off it **instead**"*, full stop and the
word the style guide requires; `goaltender.md`'s shot-block value likewise.

**Measured properly, the way the row itself instructs** — rendered to SSML and read from the emitted
`<p>` elements, because the row warns that *"a Markdown grep will miss them"*:

> `Never — … — <imperative>`, no negation and no *"instead"* in the tail: **0**

⚠️ **The third named example still carries a second em dash and is NOT a defect.**
`defensive_zone_coverage.md:472` reads *"Never: Block a shot from a screening position — you change
the direction of a puck your goalie never saw."* **The tail is declarative, not imperative**, so the
inversion mechanism cannot fire: a listener carries the negation into a *reason*, which is where it
belongs. **A sweep keyed on the second dash would have "fixed" it.**

**The row is closed as stale.** Its two weaker siblings stay open on purpose — the ~12
positive-imperative-then-dash instances the row deliberately did not sweep, and the `Read:` value
whose *label* is a negative pronoun, which needs a convention decision rather than a repair.

---

## ⚠️ USA Hockey 617(c)(4) and 625(b) do not state the same test

An agent repairing three `hockey-iq` documents flagged, as *"the highest-value thing left to
check"*, that **Rule 617(c)(4)** might narrow the defender-interference relief it had just written
into them — which would have made those repairs **over-permissive in the opposite direction**, the
failure this project has now committed twice.

**Verified centrally**, `sources/usah.txt`, Rule 617(c)(4):

> *"The puck entered the goal while an attacking player was positioned in the crease **(unless
> physically interfered with by a defending player causing them to be in the goal crease)** or
> interfering with the goalkeeper (see Rule 625(b) Interference)."*

**The repairs are sound.** 617(c)(4) carries the push-in relief in its own words, so the three
documents are correct.

⚠️ **But the two rules are not the same rule, and nobody had recorded it.** 617(c)(4) states the
crease-position bar with **only** the push-in relief and **cross-references 625(b) rather than
restating it** — so it never mentions 625(b) ¶2's two carve-outs, the puck-preceded limb and the
goalkeeper-out-of-the-crease limb. **A reader who looks up 617(c)(4) alone gets a stricter rule than
the book actually applies.** And 617(c)(4) adds a limb 625(b) does not have: *"or interfering with
the goalkeeper."*

**Open row.** Whether the corpus should carry 617(c)(4) at all, and how the two are reconciled, is a
question for the owner of the goal-disallowed material — not something to sweep into fifteen files.

---

## The KHL census: `content/` is clean at 42 of 42, and the defect is upstream of it

A mechanical hedge test over every `KHL` line in `content/` — 42 sites across 17 files, 34 body and
8 in ` ```facts ` — returned **zero bare**. The corpus convention holds everywhere a reader meets it.
`grep -ril "KHL" sources/` and `grep -ril "kontinental" sources/` both return **zero files across all
22 books**, so the disclosure is not only present but correct.

⚠️ **The defect is entirely outside `content/`, and one instance is the cause of the rest.**

### `project/content_style_guide.md` recorded this defect and committed it, in the same file

Line 80's facts bullet read *"applies in the **NHL (since 2005-06), the KHL, and IIHF play (since the
unified 2021-22 rulebook)**"* — the KHL flat, both dates asserted as fact.

**The same file, at line 683, tabulates it as a known propagated defect**: *"The KHL plays a
trapezoid | **1 document, 5 sites** | **16 documents, 28 sites**, several of them `Rule:` facts."*
And four lines above the bullet, the file warns: *"Entries here are headed 'do not contradict', so
writers propagate them without checking… **Treat this list as a source that needs auditing, not as
ground truth.**"*

⚠️ **The round that repaired the seventeen content documents never reached the bullet that seeded
them.** Every writer reads this file in full, because `CLAUDE.md` says to. **A writer working to spec
reproduces the defect, and that is exactly what the caption layer is.**

**Fixed**, with the evidence attached: the KHL hedged to the IIHF's own 2021 announcement — *"a
governing body's aside rather than a KHL rule"* — and both dates marked absent from every book on
disk. ⚠️ **`2005` returns zero in both NHL extractions with every four-digit year enumerated, and
`2021` returns zero in both IIHF editions.** The bullet now also records why it existed.

### Two spoken captions stated it flat, each contradicting its own owner within six lines

`site/src/data/diagrams.json` lines 984 and 1226. **Both are voiced** —
`md_to_speech.py` emits `"Diagram. " + caption`.

⚠️ **The listening order makes each wrong in a different way.** In `rink_map_and_glossary.md` the
diagram sits **six lines before** the hedge, so the listener hears the flat claim first. In
`zone_entries.md` it sits **immediately after** the hedge — so the listener hears the qualification
and then hears it contradicted, **with the flat version last.**

Both captions already hedged a *different* claim in the same sentence (England and Wales *"genuinely
unsettled"*), **which is what makes this a defect rather than a house-style gap: the author knew how
to hedge, and did, for the neighbouring clause.** Both fixed to their owners' wording; JSON
revalidated.

### A negative that was right for the wrong reason

`neutral_zone_systems.md` says the NHL book *"sets out the rules as they stand, not their history."*
⚠️ **The book dates rules when it wants to** — 9.7 *"Beginning with the 2013-2014 season"*, 9.6, 28.6.
**The disclosure is correct and its stated reason is false**, and the true version is stronger: the
book dates a handful and **does not date this one.** Dispatched.

### And two rule defects found on the way, one contradicting the corpus's own owner

**NHL 46.16's exception is dropped in two layers** — *"EXCEPT WHEN A MATCH PENALTY IS BEING IMPOSED
IN THE ORIGINAL ALTERCATION"* — in a bullet list that carries the IIHF's equivalent exception in full
two lines later. **The document knows the exception exists and omits it only on the NHL side.**

**NHL 46.11 is understated by a ten-minute misconduct** and its escalation. ⚠️ **`rules_primer.md:397`
has it right.** Two documents, one rule, different answers — **and the owner of the fighting material
is the one that is wrong.**

---

## The Casebook read that 614(c) needed and never got — run on 625 before it was needed

All **seventeen** Rule 625 situations read **line by line rather than by grep**, which turned out to
be necessary rather than cautious.

### ⚠️ A new way a grep lies, and it is the worst one yet

**`pdftotext` drops running heads INLINE**, so Situation 12's holding reads:

> *"an attacking player was illegally **CASEBOOK** in the crease"*

— the page furniture spliced **between subject and verb**. Situation 7's holding is split by a full
furniture block. ⚠️ **Both return zero to a whole-sentence search**, and no amount of flattening or
de-hyphenation recovers them, because the inserted text is *inside* the sentence. **Only reading
does.** Added to the style guide's list of ways a grep lies.

### ✅ The answer to the question that was asked

> *"**Yes — the seventeen situations leave the corpus's statement of 625(b) SOUND.** ¶2's flatness,
> the 'whoever scored' reach, the three carve-outs, ¶1's three conditions, the crease-area Note and
> Situation 10's two-directional effect are all correctly stated somewhere in the corpus, and every
> USA-Hockey-attributed quotation is verbatim. **Unlike 614(c), this did not need a fourth attempt.**"*

**78 crease-shaped verbatim quotations matched a USA Hockey volume character-for-character. None
failed.** And the *"USA Hockey writes no goaltender-vision provision"* negative was **attacked rather
than confirmed** — whole-volume concept counts on flattened text: `screen` **2** (Rule 625(a)(1) and
a sled-hockey pushers' rule, exactly as the corpus states), `screening` **0**, `sightline` **0**,
`line of sight` **0**, and every one of 27 `vision` hits individually checked and found to be
*provision*, *supervision*, *division*, *peripheral vision* or blind-hockey *low-vision*.

### ⚠️ What it found instead: a carve-out that INVERTS, absent from every layer of every document

**Casebook Situation 9** — eleven sites tell a reader the goalkeeper-out carve-out lets them precede
the puck into the crease. **All eleven stop there.**

> *"…**However, if the goalkeeper is attempting to return to the goal crease and there is any
> interference by the attacking player who prevents the goalkeeper from making a play, then the goal
> must be disallowed and an interference penalty shall be assessed.**"*

⚠️ **`grep` for *"attempting to return"*, *"returning to the crease"* and *"scrambling back"* across
`content/` returns ZERO.** A net-front forward acting on eleven standalone-voiced facts lines
**loses the goal and takes two minutes.** Dispatched.

### The count defect, in the shape that made 614(c) wrong four times

Five Sources trailers say the Casebook has **ten** Rule 625 situations, or *"Situations 1–14"*.
**There are seventeen**, mechanically counted, no gaps. ⚠️ **Two files carry BOTH figures** — the
corrected one in the body and *"1–14"* in their own trailers.

⚠️ **But the negative built on that count is SOUND**, verified across all seventeen. **So the
sentences must not be deleted — correcting the number strengthens them**, because they were written
by someone who had read fewer situations than exist and reached the right answer anyway.

### Three qualifications the corpus states on the wrong axis or not at all

- **Situation 10's axis is duration plus interference**, applied to *stick and skates alike* — the
  corpus recasts it as **stick versus body**, which puts a *held* stick, an express ¶1 trigger, on
  the wrong side.
- **"Mandatory" and "makes it a duty"** stated flat, against a Casebook whose Situation 10 answers
  ***"No"*** to *"every time"*. ⚠️ **A goaltender told it is a duty will appeal for a whistle that is
  not coming.**
- **Two facts lines carry ¶1's trigger with none of its three provisos.**

### And a tension it declined to resolve, correctly

**Situation 8's reasoning inserts *"intentionally"***, a word absent from ¶2 and in tension with
Situation 10's *"no alternative but to disallow."* ⚠️ **No situation reconciles them, and the agent
said so rather than choosing.**

---

## ⚠️ Two layers are never voiced at all — and that changes what "we disclosed it" means

An agent repairing NHL Rule 46 found, while checking whether a qualifier reached a listener, that
`scripts/md_to_speech.py:426` sets `DROP_SECTION_HEADINGS = ("notes on verification",)` **and that
the Sources trailer is dropped too.**

**Verified centrally** by rendering the whole corpus and searching the emitted SSML:

| Probe | In any spoken chunk? |
|---|---|
| `Rulebooks:` | **No** |
| `Rules (primary)` | **No** |
| `read on 29 August` | **No** |
| `link baseline` | **No** |

**Zero hits out of ~5 million spoken characters. All 37 documents carry a Sources trailer; none of
it is voiced.** On the site it is additionally a **closed `<details>`**.

⚠️ **The agent's own framing is the finding.** My brief said a qualifier parked there was *"adequate
on the page and inadequate read aloud."* It corrected me: **for a listener those qualifiers do not
exist.** Not weak — absent.

**This is not a defect in itself** — a bibliography belongs in a trailer. **The defect is a
substantive limit on a claim that lives ONLY there.** In one document the agent found **three** such
sites, including a **`Rule:`-labelled fact** asserting a date with a citation that does not carry it.
⚠️ **The corpus's integrity story is its "could not verify" labels. If a label is page-only, a
listener hears the claim as settled.**

Recorded in the style guide, and a corpus-wide census dispatched.

### Three brief errors it caught on the way

- **I cited "Rule 28.6" for a dated NHL rule. There is no Rule 28.6 in the extraction** — the
  *"prior to the 2015-2016 season"* text is at **Rule 64.3**, and it dates a **memorandum**, not a
  rule change. The agent wrote the weaker, true characterisation.
- **I conflated two censuses.** The ten sites carrying *"in no rulebook held here"* are **trapezoid**
  adoption-date sites; the **two-line pass** date is a separate claim, bare at most of its sites.
- **I said a Sources trailer carried no source. It already labelled both dates as secondary history.**
  The fix stood; the premise did not.

### And it corrected a claim I had already propagated to two agents

I wrote that Hockey Canada **10.1(ii) is "the only limb containing the word 'throws'"**. ⚠️ **10.1(vi)
contains it too** — *"deliberately drops or **throws** the puck onto the top or back of the goal
netting."* **The load-bearing point survives in a narrower form:** (ii) is the only limb reaching a
puck **thrown out of the playing surface**. Correction sent to the live agent holding five of the
affected files.

### A renderer fact two agents hit independently

**A bare parenthetical `(ii)`, `(v)`, `(vi)` does not expand in audio** — it is read as a literal
*"(v)"*. **The expansion is keyed on the rule number**, so `10.1(v)` renders as *"ten point one,
clause five"*. Both agents caught it in their own new text by reading the SSML, and both rewrote to
full rule numbers.

---

## The 10.1(ii) repair found better evidence than the brief had

Twelve sites repaired across five files. ⚠️ **And the agent found textual corroboration that replaces
the Glossary inference the whole finding rested on** — Hockey Canada's own cross-reference,
`hc_layout.txt:3675`, **Rule 6.3(e)(i) Note 1**:

> *"Notwithstanding the previous, Referees must penalize **any player of either team** who
> deliberately shoots, bats, or throws the puck outside the playing surface, as per Rule 10.1 (ii) –
> Delay of Game."*

**That is the general face-off-location rule, it points directly at 10.1(ii), and it carries no
goaltender exclusion — while sitting one rule away from 6.4(a), which does.** The claim no longer
depends on reading the Glossary against the rule's silence.

It also flattened the corpus of express exclusions: Hockey Canada writes *"excluding the
goaltender"* at 6.1 Note 2, 6.2, 6.4(a), the hybrid-icing rule and 10.2 — **and not at 10.1(ii)** —
and there are **zero** occurrences of *"defending zone"* anywhere in Rule 10.1.

### Four brief errors, and one it caught before my correction reached it

- ⚠️ **It found the *"only limb containing 'throws'"* error independently**, before my correction
  arrived, and wrote every repair as *"the only limb to reach a puck thrown out of the playing
  surface"*. **Two agents converged on the same narrower wording without coordination.**
- **My site list was short by four**, and ⚠️ **three of the four were in the Sources layer — which a
  body grep and a facts grep both miss.** One was self-contradictory inside a single Sources entry:
  *"whose skater limb 10.1(ii)"* immediately followed by the verbatim *"a player who deliberately…"*
  quotation.
- I capitalised *"EXCLUDING THE GOALTENDER"*; the source is lowercase.
- **I missed 6.4(a)'s own Note 1**, which routes a deliberate clearance to 10.1(ii) — and which three
  of its files already quoted correctly.

### All three facts blocks were at the cap, and none was trimmed

Every one of the three ` ```facts ` sites sat at `HARD_MAX = 11`, so no fact could be added. Each was
repaired **in place**, one landing at **294/300** after tightening its own head clause rather than
shedding a citation. **No hedge, citation or scope flag was traded for room.**

**And it fixed three pre-existing audio defects it was not sent for** — bare `(iii)`, `(ii)` and
`(iii)'s` clause markers in `risk_management.md` that had been reading aloud as literal *"(iii)"*.

### A checker flag that was the documented race, not a finding

The agent reported `check_secrets.py` flagging `uk_rules.md:543` as an `aws-account-id`. ⚠️ **Re-run
centrally on a quiet read: `233 tracked files, no findings`**, and line 543 is ordinary prose with no
twelve-digit run. **A live agent was mid-write in that file.** This is exactly the checker/agent race
`CLAUDE.md` documents in both directions — **and the correct handling was the agent's: it reported
the flag and did not act on it.** To be re-run clean before any commit.

---

## ⚠️ The brief's central finding was refuted — and writing it would have fabricated a negative

I dispatched a passage stating that **the NHL and USA Hockey publish no interpretive default** for
whether a bare-*"player"* rule reaches a goaltender. The agent re-derived all four before writing,
as instructed, and **refuted two of the four rows.**

**NHL Rule 5.1** (`sources/nhl_rules.txt:1050`) and **IIHF Rule 5.1** (`iihf_rules_v1.1.txt:880`,
identical in `iihf_rules_2026-27.txt:933`) publish one, in the same words:

> *"For the purposes of these playing rules, any reference to **'player' shall refer to both skaters
> and goalkeepers**. Any reference to 'goalkeeper' shall mean that the section of the rule is
> specific to goalkeepers."*

**Verified centrally in all three files.** So the true finding is the **opposite shape**: **three of
the four books publish an inclusive default — NHL 5.1, IIHF 5.1 and Hockey Canada's Glossary — and
USA Hockey alone publishes none.**

⚠️ **The cause is precise and worth keeping.** The earlier verifier searched each book's **glossary**
and concluded no default existed. **The NHL's and the IIHF's live in Rule 5, not the glossary.**
Writing my brief as given would have put into the corpus **a negative existence claim that a single
grep falsifies** — the exact failure this project's non-negotiable 1 exists to prevent, arrived at
by searching the wrong apparatus rather than by carelessness.

**And the brief's "third convention: a distinct noun" reading was unnecessary.** IIHF 5.1 itself
splits *"Player"* into *"skaters and goalkeepers"*, which is **why** the book writes *"skater"*. What
I had labelled an inference is stated in the book.

### Four more brief errors, all counts

NHL Glossary has **13** entries, not twelve. USA Hockey express exclusions: **8**, not 9. NHL
*"including the goalkeeper"*: **5**, not 7; *"except the goalkeeper"*: **3**, not 5. ⚠️ **And "the
corpus states this nowhere" is false** — the Hockey Canada convention is already in `rules_primer.md`
§7 and Common Mistakes, and at `goaltender.md:883`.

**My own mid-task correction also carried a wrong citation.** I gave the injured-player exclusion as
*"6.1 Note 2"*; it is **Rule 2.4(b) Note 2** — and it is **wrapped across lines, so it does not
appear in a single-line grep of `hc.txt`**, which is how it was miscounted in the first place.

### A self-catch worth recording

Its first draft of the practical instruction read *"assume the rule reaches your goalie and ask"* —
**one half**. ⚠️ **That is right for a duty and wrong for a licence**: it would tell a goaltender that
a bare-*"player"* **permission** extends to them. Repaired to state both directions before shipping.

### And the phantom that fired twice

**Two separate agents reported `check_secrets.py` failing on `uk_rules.md`** — at line 543 and at
line 551. **Re-run centrally on a quiet tree: `233 tracked files, no findings`, exit 0, and no
twelve-digit run anywhere in the file.** Both agents were reading while that file was being written.
⚠️ **The same phantom, twice, on the same file, at two different line numbers** — and both agents
did the right thing: reported it and did not act.

---

## Casebook Situation 9 propagated — and the brief was wrong in four places

⚠️ **I said "eleven sites". There were 28.** The layer test found the carve-out in **six Key
Takeaways**, **one Common Mistakes bullet** and **four Sources trailers** that my brief named none of
— **and that no facts grep reaches.** All 28 now carry the inversion; the test re-runs at zero gaps.

**Three more:**
- **The count-undercount claim was wrong for `shooting.md`** — its *"Situations 1 to 15"* is **Rule
  621**, not Rule 625, and its trailer carries no Rule 625 count at all. ⚠️ **And `center.md`,
  `winger.md` and `goaltender.md` already said "seventeen" — a prior round had fixed them.** Only
  three trailers were genuinely short.
- **`goaltender.md`'s *"makes it a duty"* is a `Rule:` fact, not a `Never:` value**, and my brief
  missed two further sites for that finding.
- ⚠️ **I said `Never:` had 108 characters of headroom. It had 8.** `MAX_LEN = 200` is relaxed to
  **300 for `Rule:` and `Convention:` only** — a `Never:` is capped at 200, and I briefed it wrong.

### A cap that could not be met, reported rather than forced

**`goaltender.md`'s freeze fact is 294/300 in a block at 11**, and Situation 10's gloss needs ~60
characters it has not got. **It still reads *"makes it a duty"*.** The body now carries the full
gloss. ⚠️ **Fixing the facts layer needs the section split the style guide describes, and the agent
declined to attempt it with other agents live** — which is the right call.

Three other cap decisions were made and **flagged for review rather than buried**, including one
where a clause was dropped to fit and **the very next fact in the same block states it in full and
verbatim.**

### ⚠️ The handover that generated the next task

> *"I verified Situation 9 and 10 against the USA Hockey Casebook only. I did not check whether the
> IIHF, NHL or Hockey Canada books write an equivalent inversion, so **the corpus now states a limit
> for one book of four and is silent on the other three — a reader under the IIHF (every British
> reader) learns nothing here.** That silence may itself be a defect."*

**That is the style guide's *"worse than a bare omission"* shape**, arrived at by a correct repair.
Dispatched: all four books, both IIHF editions, and the supplementary volumes — ⚠️ **because Rule
614(c) was got wrong four times in one round by people who read only the playing rules, and
Situation 9 itself lives in a casebook.**

### And it corrected the corpus's own duplication

`time_and_space.md` carries **the same 295-character `Rule:` fact in two different blocks, both at
`HARD_MAX`** — which is why its facts layer was the hardest of the eight to correct. Recorded, not
resolved.

---

## The Rule 5.1 census: the corpus never tells a goaltender the delay-of-game rule binds them

The census that only existed because a brief was refuted found the defect the refutation predicted.

### ⚠️ Finding 1 — and it is not an inference

**NHL 63.2 drafts each limb with deliberate precision about who it reaches:** (i) *"any player,
**including the goalkeeper**"*; (v) *"a player **other than the goalkeeper**"*; and **(ii) and (iii)
bare *"any player"*** — which under Rule 5.1 reaches the goaltender.

⚠️ **Both books say so in their own goalkeeper tables.** Verified centrally:

> **NHL Table 11, Summary of Goalkeeper Penalties, item (viii): *"Deliberately shoots or bats puck
> out of play — Rule 63"***

**IIHF Table 13 carries the same entry naming 63.2(II) outright.** So this is the book's own
classification, not a reading of Rule 5.1.

**Proven absent from `goaltender.md`** on a flattened copy: `out of play`, `over the glass`,
`outside the playing`, `shoots or bats`, `63.2(ii`, `into the crowd`, `over the boards` — **all
zero.** The document covers **five** delay-of-game routes in detail and not this one.

⚠️ **The goaltender is permanently inside 63.2(iii)'s fact pattern** — they are always in their
defending zone — **and I verified that limb carries no deliberateness element at all**, unlike (ii).
**The corpus teaches Rule 63.2 to defencemen across eight documents and not to the one player who
cannot leave the zone.**

### The two limits that stop the repair becoming a new defect

**The rule reaches a goalie's CLEAR, not their SAVE.** **IIHF Situation 63.29**, identical in both
Handbook editions: a stick save deflecting over the glass is **no penalty** — *"The goalkeeper was
simply making a save and did not 'shoot' the puck over the glass."* **USA Hockey Casebook Rule 610
Situation 5** answers the same way for a batted rebound.

⚠️ **The agent found both limits itself and put them in its own report**, unprompted, under the
heading *"so it is not over-repaired"*. **That is the discipline this round has been trying to
install, applied by an agent to its own finding.**

### ⚠️ Finding 3 is the one that indicts the method

`risk_management.md:321` reasons this correctly **for Hockey Canada** — *"It says 'a player', and
Hockey Canada's Glossary defines that term to include you"*. **No equivalent sentence exists
anywhere for NHL/IIHF 63.2(iii), which is the STRICTER provision**, since 10.1(ii) requires
deliberateness and 63.2(iii) does not.

**The corpus generalised the reasoning to the book where it matters less.** That is the same defect
class the Hockey Canada round found, one book over — **and it existed because the Hockey Canada
finding was repaired without asking whether the other three books had it too.**

### The unreached item, which is a safety question

NHL **43.1, 48.1, 51.1–55.1, 57.1, 59.1, 60.1, 61.1** are all bare-*"player"* with zero goalkeeper
mentions, so under 5.1 they reach the goalie **as offender**. ⚠️ **`goaltender.md` contains zero
occurrences of `slash`, `high-stick` or `roughing`.**

> *"A goaltender who cross-checks or slashes an attacker in the crease is committing a penalty under
> a rule the corpus never tells them binds them."*

**Dispatched — with an instruction NOT to sweep eleven rules into one document**, because a single
short passage plus a pointer is the better answer and the agent should say which it chose.

### And two clean sweeps, stated because a clean result is a result

**Inverse direction — a goalkeeper-specific rule stated as reaching skaters: zero defects** across
all 37 documents. **Overstatement of Rule 5.1 — *"every rule applies identically"*: zero defects.**
Both were swept for explicitly; neither exists.

---

## ⚠️ The four-book question came back with the polarity REVERSED — and that is worse

The repairing agent feared the IIHF had **no** counterpart to USA Hockey's Situation 9, so that the
corpus stated a limit for one book of four and was silent on the reader's own. **The opposite is
true, and it makes the silence a misstatement rather than an omission.**

**NHL Rule 69.4 ¶4** (`nhl_rules.txt:7231`) and **IIHF Rule 69.4 ¶4** (`iihf_rules_v1.1.txt:5587` —
**word for word in v1.0, v1.1 and 2026/27**):

> *"When a goalkeeper has played the puck outside of their goal crease and is then **prevented from
> returning** to their goal crease area due to the **deliberate actions** of an attacking Player,
> such Player **may be penalized** for 'Goalkeeper interference'."*

⚠️ **`grep` for *"prevented from returning"* across `content/` returns ZERO**, as do thirteen concept
probes. `rules_primer.md` covers Rule 69.4 — **but only its first two paragraphs.**

**So the corpus states a returning-goalkeeper limit at ~28 sites for the one book its British reader
is NOT under, and never says the British reader's own book writes one too.** A reader taught *"the
goalie is out, so the crease is free"* can take a **goalkeeper-interference minor under their own
rule set.**

### ⚠️ The thresholds run in opposite directions and must not be blended

| | Trigger | Goal | Penalty |
|---|---|---|---|
| **USA Hockey** Casebook 625 Sit. 9 | *"any interference"* | *"must be disallowed"* | *"shall be assessed"* |
| **NHL / IIHF** 69.4 ¶4 | *"deliberate actions"* | not stated in the clause | *"may be penalized"* |

**USA Hockey's is mandatory and reaches any interference; the other two are permissive and require
deliberateness.** A repair that borrows one book's wording for the other manufactures a defect.

### Why the NHL has no carve-out — structural, not an omission

**NHL 69.1:** *"This rule is based on the premise that an attacking player's position, whether inside
or outside the crease, should not, by itself, determine whether a goal should be allowed."* **There
is no positional prohibition to carve out of.** Reference Table 14 §1.A is the exact inverse of USA
Hockey 625(b): attacker in the crease, goalkeeper in it, puck enters — ***"Goal is allowed. This is a
good goal."***

**Hockey Canada has the positional bar and writes neither the carve-out nor the inversion** — its
Rule 8.5 conditions only on **where the puck is**, verified across all four Interpretations, all 25
occurrences of *"goal crease"* in a flattened read, and nine concept probes. ⚠️ **The agent said
plainly that no Hockey Canada casebook is on disk, so those negatives rest on one volume — and
refused to call them verified.**

### Two clean results, and a false positive a sweep would have damaged

**All 39 goalkeeper-out carve-out statements across 14 files attribute it to USA Hockey 625(b) and
nothing else** — read individually, not pattern-matched. **`rules_primer.md:598`'s Hockey Canada
negative is correct and verified.**

⚠️ **`risk_management.md:574` is a FALSE POSITIVE** — *"when your own goalie is out of the net"* is a
**pulled-goalie** sentence with nothing to do with 625(b).

### A wrong number, isolated to one file

`defensive_zone_coverage.md` attributes to **IIHF 69.3** a sentence that is in **69.1**, in both its
body and its Sources trailer. ⚠️ **The quotation is verbatim and the claim is TRUE** — the NHL writes
no counterpart — **and eleven other sites cite it correctly as 69.1.**

### ⚠️ And the agent caught a race in its own measurement

Its first layer test scored `rules_primer.md` at **limit = 0**; minutes later, with nothing changed
by it, **limit = 4**. A live agent wrote between the two runs. **It downgraded three of its own
findings to "candidates at a timestamp" rather than reporting them as findings** — the discipline
CLAUDE.md asks for, applied unprompted to its own output.

---

## ⚠️ I over-claimed the provenance, and the agent refused to write it that way

My brief ranked **NHL/IIHF 63.2(iii)** first — the strict-liability defending-zone limb — and said:

> *"And this is not an inference. Both books say so in their own goalkeeper tables."*

**Verified centrally: the tables corroborate limb (ii), not limb (iii).**

> `nhl_rules_layout.txt:8440` — *"(viii) **Deliberately** shoots or bats puck out of play — Rule 63"*
> `iihf_rules_v1.1.txt:9024` — the same row, naming ***63.2 (II)*** outright

⚠️ **Nothing in either table, or in any situation held on disk, states 63.2(iii) of a goalkeeper.**
**63.2(iii) reaches the goaltender through Rule 5.1's definition alone.** The agent wrote it that
way and labelled the asymmetry in the body and in a caveat, and said why:

> *"Writing it as 'both books say so' would have been **a fabricated provenance on the stronger half
> of the finding**."*

**That is exactly right, and it is the sharpest thing said in this round.** I attached the strongest
available evidence to the strongest available claim **without checking that they were the same
claim** — and the two differ precisely on the word *"deliberately"*, which is the whole reason (iii)
matters more than (ii).

### And my grep produced a false absence I had the sense to hedge

I told the agent I could not verify that **NHL 27.1** puts a goalkeeper's minor on a teammate, and
**not to write it unless it checked.** It checked. **The rule says it verbatim** — my search string
failed because the sentence **wraps mid-phrase**, and because the IIHF writes *"penalty **box**"*
where the NHL writes *"penalty **bench**"*, so one phrase could not match either book.

⚠️ **The hedge is what saved it.** Had I asserted the absence instead of flagging it, the corpus
would have lost a true consequence — **a goalkeeper's minor is served by a teammate.**

### Four findings the brief did not have — one of them live and dangerous

- ⚠️ **A safety defect in the very text I sent it to add to.** *The safe outlets* option 4 read
  **"Off the glass and out. Never wrong when you are in trouble."** — **an absolute over the exact
  act 63.2(iii) penalises.** Corrected in body and fact.
- **USA Hockey has no defending-zone limb at all.** 610(c) is deliberate-only and names goalkeepers
  expressly. **So an accidental clear out of the rink from your own end is two minutes under the
  NHL and the IIHF and no penalty under USA Hockey** — a divergence reaching most North American
  rec and youth readers.
- **Hockey Canada writes an express goaltender limb, 10.1(v)** — *"A goaltender who shoots or bats
  the puck directly out of the playing surface, **with their stick**"* — no zone restriction, stick
  only, and ⚠️ **carrying no "deliberately" where siblings (i), (ii), (iv) and (vi) each do**, while
  the rule's chapeau supplies the word for the rule as a whole. **Nothing on disk resolves whether
  the chapeau governs. Carried as an open question, not resolved.**
- **The stick-and-body-foul passage got a published anchor instead of eleven citations.** Both
  goalkeeper tables already list one skater foul against goalies — the blocker punch — and **the
  books diverge**: **NHL 51.3** a match penalty for *"an attempt to or to deliberately injure"*;
  **IIHF 51.3** a major plus an automatic game misconduct where the action is *"likely to result in
  injury"*. ⚠️ **Likely-to-injure, not intending-to** — a materially lower bar in the British
  reader's book.

### An anchor that constrains a better heading

`getting_started.md` links to `#icing--you-are-the-one-who-can-wave-it-off`. **That framing is now
half the story** — a goalie can *cause* an icing too — **but renaming the heading breaks the link.**
Left alone, and flagged: it needs a coordinated two-file edit, which is exactly the case the
anchor-checking rule exists for.

---

## ⚠️ Twice in two agents, I attached ONE book's evidence to TWO books

The second instance, and the agent caught it the same way the first did:

> *"The coordinator's 69.4 blockquote is **the IIHF's wording presented as both books'**. The NHL
> writes *'outside of **his** crease… returning to **his** crease area… penalized for goalkeeper
> interference'* — no quotation marks, no *'goal'*. The IIHF writes *'their goal crease'* and
> *"'Goalkeeper interference'"*. **I wrote each book in its own words and removed four 'word for
> word' phrasings that would have asserted a false NHL↔IIHF equivalence.**"*

**One agent refused to write "both books say so" when only one did. The next refused to write "word
for word" when the words differ.** ⚠️ **Both errors were mine, both were in the provenance rather
than the substance, and both would have been invisible to every checker.**

### Seven more brief errors, and the shape is now legible

- **`rink_map_and_glossary.md` has no ` ```facts ` layer** — it is a glossary, out of scope. I
  briefed a facts site that cannot exist.
- **`risk_management.md` has no site at all** — I sent it to a file that never cites Rule 625.
- **`rules_primer.md` did not say *"Situations 1–14"*. It said *"ten"*.** Only
  `body_contact_and_battles.md` carried 1–14.
- **The count was 13 sites, not 14.**
- **Eleven correct 69.1 sites — I counted eleven, it counted 14.**
- ⚠️ **`defensive_zone_coverage.md` carried the 69.3→69.1 error in THREE layers, not two** — the
  ` ```facts ` line **no document grep in my brief reached**.
- ⚠️ **Both books carry a reciprocal FIFTH paragraph I never mentioned**: the **goalkeeper** may be
  penalised for deliberately interfering from outside the crease. **The rule runs both ways and my
  brief gave one direction.**

### The cap resolved the way the style guide prescribes

`special_teams.md`'s block was at **11/11** with the flat bar at 244 chars and the inversion needing
~117. **Rather than trim a scope flag, the agent split the section on the seam its body already
used** — checking first that **no inbound anchor links to either heading**. Six facts in the first
block, nine in the new one, **all three coaching facts extracted from imperatives already in that
body** rather than invented.

### And a race it caught in its own checker run

`check_facts.py` moved **803/5021 → 804/5033 under it, with no edit of its own in between** — a live
agent was writing `goaltender.md` six seconds earlier. **It said so and scoped its clean result to
its own eight files.**

### Two renderer notes, both pre-existing

`md_to_speech.py` renders `🇬🇧 **The …**` as *"For British readers, **The** …"* — a capital mid-
sentence, corpus-wide. And the deliberate `(d.3)`/`(e.1)` plus two `➔` glyphs inside verbatim IIHF
quotations remain the only unrecognised constructs.

---

## Round 54 — coverage, by dimension and by file

⚠️ **This section exists because the first gate pass blocked on C8 and C3: seven staged files were
named nowhere in this record, the largest new safety block was absent from it, and no dimension was
declared.** Silence on a dimension is the failure mode, and this record was silent on most of them.

### Every staged `content/` file, and what changed in it

| File | What changed |
|---|---|
| `foundation/rules_primer.md` | 625(b) limbs; the four-books-and-"a player" passage (NHL 5.1, IIHF 5.1, HC Glossary, USA Hockey's silence); HC 10.1(ii); the NHL/IIHF 69.4 ¶4 owner passage; Casebook count ten → seventeen |
| `foundation/rink_map_and_glossary.md` | 625(b) carve-outs in two glossary entries and the crease body; Situation 9; 69.4 ¶4 |
| `foundation/on_ice_communication.md` | 625(b) Sources; Situation 9; **records the NHL/IIHF *"behind"* vs *"surrounding"* divergence** |
| `foundation/uk_rules.md` | ⚠️ **NEW medical-cover section** — EIH R&R Section 33, the emergency number, the trained-personnel exception, and the England-and-Wales scope |
| `getting-started/getting_started.md` | superseded In-House edition retired; a false edition-adoption note corrected |
| `hockey-iq/playing_without_the_puck.md` · `scanning_and_anticipation.md` · `time_and_space.md` | 625(b) carve-outs across body, facts, Key Takeaways, Sources; `time_and_space` also **a wrong live fact** — a rink named as permitted that the 2026-27 rules dropped |
| `hockey-iq/risk_management.md` | HC 10.1(ii) goaltender reach; 6.4(a)'s *"excluding the goaltender"*; three pre-existing bare roman clause markers fixed |
| `off-the-ice/conditioning_and_recovery.md` | In-House citation edition (the Rule 100.1 **claim** was correct and untouched) |
| `off-the-ice/team_play_and_culture.md` | 625(b); Situation 9 |
| `positions/center.md` · `winger.md` | 625(b) carve-outs and Key Takeaways; HC 8.5(c)'s predicate; the Rule 8.5 locator |
| `positions/goaltender.md` | six waves — trapezoid/freezing, the Casebook, the red-line reversal, the altercation section, 63.2(vi), and **the new delay-of-game section** |
| `positions/switching_positions.md` | HC 10.1(ii); In-House edition |
| `systems/breakouts.md` · `forechecking_systems.md` · `zone_entries.md` | In-House edition retired; HC 10.1(ii); IIHF 101.1's truncated disjunct; 43.3 predicates |
| `systems/defensive_zone_coverage.md` | 625(b); Situation 9; **IIHF 69.3 → 69.1 in three layers** |
| `systems/game_management.md` | HC 10.1(ii); IIHF 56.5's second condition; 8.3(c)'s predicate; Situation Handbook naming |
| `systems/neutral_zone_systems.md` | the bare 2004-05 date qualified at three sites; *"not their history"* corrected |
| `systems/offensive_zone_play.md` | 625(b) across facts, Common Mistakes and Key Takeaways |
| `systems/special_teams.md` | 625(b); Situation 9; **a section split at the cap**; 63.2(vi)'s NOTE |
| `technique/body_contact_and_battles.md` | NHL 46.16's exception; 46.11's full tier; the boards superlative; Casebook count |
| `technique/passing_and_receiving.md` | the 1998 date labelled; 60.1 punctuation |
| `technique/shooting.md` | the high-sticking Critical and its section split; 625(b); 9.5(a)'s *"no injury has resulted"* |

### `scripts/md_to_speech.py` — three functional changes

1. ⚠️ **Emergency numbers.** `999`/`111`/`112`/`911` were voiced as **quantities** — in a
   mental-health crisis callout. Now spoken as digits, with a guard so *"pooling 112 effect sizes"*
   stays a quantity. **Self-test 146 → 152.**
2. **Drill-symbol glyphs** `●○▲△` given spoken forms, in the passage that teaches what they mean.
3. **`--report` now NAMES the verification paragraphs it deletes from the audio**, with document and
   opening words. ⚠️ **A paragraph is dropped when it STARTS with a marker, so *"Unverified: X"* is
   deleted while *"This is unverified, but X"* is spoken — and nothing warned an author which side
   of that line they were on.**

### Dimensions

| | |
|---|---|
| **Rules claims** | ✅ `rules-verifier` ×4 — the KHL/adoption-date census, the Hockey Canada Glossary test, the Rule 5.1 census, the four-book 69.4 question |
| **Facts layer** | ✅ `facts-reviewer` — the dropped-layer census across all 37 documents |
| **Citations / provenance** | ✅ `source-verifier` — **14 URLs fetched, 17 quoted strings located, ZERO not present, NO misattribution.** CRT6's **attribution** verified from the served file's own BMJ stamp plus Crossref and Europe PMC; ⚠️ **its BODY remains unverifiable** — image-only, no OCR, BJSM 403. **16 rows applied to `link_baseline.tsv`.** |
| **Content review** | ⚠️ **NOT RUN this round.** Repairs were reviewed by the agents that made them and by the gate |
| **Safety** | ⚠️ **NOT RUN this round.** Four hand-offs are outstanding and named in the plan |
| **Site render** | ⚠️ **NOT RUN.** A new `####` in `zone_entries.md` and two new `###` in `special_teams.md` and `shooting.md` change the sidebar and page contents, and no browser has seen them |
| **Diagrams** | Out of scope — no diagram source changed; `check-arrivals` 0 hard / 7 pre-existing advisories |
| **Commit gate** | ✅ run, **BLOCKED**, four corpus defects and three process defects; all being addressed |

### ⚠️ What this round could not have found

**A claim that is wrong while positively stated.** Every census this round searched for an
**absence** — a missing limb, a missing carve-out, a missing scope. The negative-existence census
said it plainly: *"had it said 'USA Hockey restricts goalies only beyond the red line' I would never
have looked."*

**Anything in the ~30 documents' worth of unchanged text.** Every sweep was scoped to changed lines
or to a named rule. A claim already wrong and not touched this round is invisible to all of it.

**Whether the repairs are right.** ⚠️ **A repair is new text and new text has not been reviewed.**
The gate found four defects **introduced by this round's own repairs** — a false cross-book
equivalence, a USA Hockey ruling imported as an NHL/IIHF limit, a severed referent, and contrary
authority truncated mid-quotation.

**How any of it is officiated.** Every finding is a reading of rulebook text on disk.

**The rendered page and the spoken audio as a whole.** Individual values were read as SSML; **no
document was listened to end to end, and no browser was opened.**

---

## The four gate blockers, repaired — and a lead the agent correctly refused to act on

All four verified against `sources/` before editing, and for once **the brief held**: *"I found no
error in the brief."*

### ⚠️ The self-catch is the finding

While re-reading its own repair for **B1** — the defect where one book's wording was attributed to
two — its first lead-in read *"only the first is yours under the NHL and the IIHF"*, **crediting an
IIHF Situation Handbook answer to the NHL.**

> **The exact defect B1 exists to prevent, written by the repair for B1.**

It caught it in its own audio pass and rewrote it to *"the first is the IIHF's own, and the second is
USA Hockey's alone."* ⚠️ **Fourth instance of this shape in one round, and the only one caught by its
own author.**

### What the repairs did

**B1** — each book now quoted in its own words, with both divergences shown (*"no glass"* / *"no
**protective** glass"*; *"**behind**"* / *"**surrounding**"*), and the *"wider"* reading hedged as
*"a reading of the wording, and no published interpretation of it is held here"*. The bench-glass
sentence is no longer attributed to the NOTE — it is in the **body** of (iii).

**B2** — the rebound bullet retitled *"USA Hockey excuses… The NHL and the IIHF do not"*, keeping the
Casebook ruling and naming **610(c)'s *"deliberately"*** as what it turns on.

**B4** — the full 63.29 answer now runs, with a disclosure in the register the file already uses for
Hockey Canada 10.1(v): the Handbook cites *"Rule 63.2"* **without a limb**, the neighbouring 63.2(II)
**does** carry *"deliberate"*, nothing held here says which it means — **so take the answer and not
the argument.**

**And it found a live instance of B1's shape while propagating**: Common Mistakes and a Key Takeaway
were **attributing the IIHF's Situation Handbook to the NHL.**

### ⚠️ The lead it declined — and it is real

**IIHF Situation 63.28**, the line immediately above 63.29 in both editions, applies **63.2(III) by
name**:

> *"The Red defensive player breaks its stick… the player scoops the puck with the glove causing it
> to sail over the glass behind the players' bench. What is the call?* **Minor penalty for delay of
> game.** *This would be considered shooting or batting the puck with the hand resulting in the puck
> leaving the playing surface.* **Rule 63.2 (III).**"*

**It said: *"new material on a disputed point and belongs to a reviewer, not to me."* That was the
right call.**

⚠️ **Read centrally, 63.28 SHARPENS the tension rather than settling it.** Its subject is a
**skater**, not a goalkeeper, and the act is a **deliberate scoop to clear** — so it is consistent
with 63.29's *"the save cannot be seen as falling under this criteria"*. **The pair supports exactly
what the corpus now says: the rule reaches a deliberate clear, not a save.**

**But 63.28 applies (III) by name to an act the Handbook plainly treats as deliberate**, which is
further evidence that the Handbook reads a deliberateness element into a limb whose **text has
none** — and the corpus's textual reading now stands against **two** Handbook situations, not one.
**Open row: whether the disclosure should name 63.28 as well.**

---

## ⚠️ One false positive, three appearances, and it cost the corpus a primary URL

`check_secrets.py`'s `aws-account-id` rule matches any 12-digit run. The Sport and Recreation
Alliance serves the UK concussion guidance as
`…-november-2024-update-<12 digits>.pdf`, where the digits are a `ddmmyyhhmmss` CMS upload stamp.
⚠️ **The literal stamp is not reproduced here** — see the row in `project/verification/link_baseline.tsv`,
where it sits inside a URL and is therefore exempt. Writing it in prose is what created findings 4 and 5.

**It appeared three times before it was understood:**

1. ⚠️ **Twice as a PHANTOM** — two separate agents reported `check_secrets.py` failing on
   `uk_rules.md`, **at two different line numbers**, while that file was being written. Re-run
   centrally on a quiet tree both times: **no findings, and no twelve-digit run in the file.** They
   were reading a file mid-write. **Both agents did the right thing: reported it and did not act.**
2. ⚠️ **Once as a real cost.** A `source-verifier` hit it, and **cited the SRA landing page instead
   of the PDF to dodge it** — so the corpus lost its direct primary URL to a scanner false positive.
   It said so in its report, which is the only reason this is recoverable.
3. **Once as a genuine failure — mine.** Adding the verified row to `link_baseline.tsv` put the
   stamp into a tracked file and the checker failed, correctly by its own rule.

**Fixed by the mechanism the checker itself prescribes** — *"add a narrow ignore to the rule… do not
widen ALLOWLIST to a whole file"* — ignoring a 12-digit run **only when `http` appears earlier on the
same line.**

⚠️ **Scoped to a URL rather than to the file on purpose:** a real account id pasted into a link
baseline row would still be a real leak, and no bare credential carries a scheme. **Proved by probe**: a bare twelve-digit run in prose still trips it, and so does one in an
`aws_account_id = …` assignment. **Only the URL form is exempt.**

**The lesson is not about this rule.** A scanner false positive that nobody chases does not stay
inert — **it changed what a verifier was willing to cite.**

### ⚠️ And documenting it created two more

Writing the section above — the one explaining the false positive — **put the literal stamp and two
probe values into a tracked file in prose, and `check_secrets.py` failed twice more.** Findings four
and five of the same rule, caused by the record of findings one through three.

**The ignore does not cover them, and should not.** It is scoped to a 12-digit run **inside a URL**;
in prose there is no scheme, so the rule fires exactly as designed. **Fixed by not reproducing the
digits** — the literal stamp lives in `link_baseline.tsv`, inside a URL, where it belongs and where
it is exempt.

**Recorded because the shape recurs**: a narrow ignore is correct precisely *because* it does not
generalise, and the cost of that is that documentation of the exempt case is not itself exempt.
`check_secrets` is now **234 tracked files, no findings, exit 0.**


---

## The provenance pass, written into the record

⚠️ **This section exists because the second gate pass blocked on C5.** I had the verifier's account
and the record did not — its dimension table still read *"IN FLIGHT"*, which the gate correctly
called *"the strongest evidence in the repository that C5 was NOT met."* **An account in a
conversation is not a record.**

**Scope:** the network half of `uk_rules.md`'s medical section. The England Ice Hockey *Rules &
Regulations* half was verified separately by the gate against `sources/eih_rr.txt` and was not
re-derived.

**Result: 14 URLs fetched, 17 quoted strings located in rendered body or extracted PDF text, ZERO
not located, ONE unverifiable by tooling. No misattribution anywhere.** The verifier's own summary:
*"the first section I have checked where the provenance handling was already correct at every point
the brief flagged as a trap."*

- **The UK Concussion Guidelines, November 2024** — the 999 sentence, the 111 sentence and *"If a
  neck injury is suspected, the player should only be moved by Healthcare Professionals with
  appropriate training"* all located. ⚠️ **That last is the guidance's OWN instruction, in its own
  removal-from-play section — not a restatement.** The British source for the trained-personnel
  exception is real.
- **The edition trap held both ways.** All four quoted sentences plus the authorship sentence are
  **verbatim in the April 2023 edition too**, so the corpus's *"nothing here turns on which one you
  open"* is upheld rather than merely repeated.
- ⚠️ **The authorship handling was singled out as correct** — the corpus quotes the restaters *as
  restaters* and then gives the document's own account, located on **page 27 of both editions**.
- **CRT6's attribution is VERIFIED**, from a 505-byte BMJ stamp text layer in the EIH-served file,
  corroborated by Crossref and Europe PMC (PMID 37316201). ⚠️ **Its body is two pages of image with
  no OCR available and BJSM returns 403 — unreachable, not absent.** Every CRT6 *content* quotation
  elsewhere in the corpus is therefore **unverified in this session and must not be touched.**
- **Four disclosures re-checked and upheld**, including *"the word helmet does not appear in the
  guidance at all"* — **0 occurrences across all three PDFs**, with no equipment-removal guidance of
  any kind.

⚠️ **A trap worth keeping:** the SRA's PDF links are `../files/…` under a `<base href>` pointing at
the site root, **so resolving them page-relative returns a false 404** — the shape that manufactures
a dead-link report.

---

## ⚠️ My 63.28 framing was wrong, and the gate was right to say so

I recorded that the corpus's textual *"no deliberateness element"* reading *"now stands against **two**
Handbook situations, not one."*

**It stands against one.** Re-read: **Situation 63.28's answer contains no deliberateness reasoning
at all** — *"Minor penalty for delay of game. This would be considered shooting or batting the puck
with the hand resulting in the puck leaving the playing surface. Rule 63.2 (III)."* **Applying a
rule to facts that happen to be deliberate does not make deliberateness an element**; the Handbook
finds the conduct inside the limb on the limb's own *"shoots or bats"* language.

**Only 63.29 reasons *"Rule 63.2. talks about deliberate"*.** That one is genuinely in tension;
63.28 is **neutral, arguably mildly supportive.**

⚠️ **Recording it as the second of two would have handed the next agent a stale premise** — the
shape the plan's own G1a exists to stop. **The row stays; its wording is corrected.**

---

## ⚠️ A new shape: two facts, each literally true, misleading as a pair

The fourth wave chasing the 63.2 retraction found **six sites no brief and no gate census had
named**, and one of them is a shape this corpus has not recorded before.

**`defender.md:73` states the NHL's bench line as *"behind"*. `:74` then said the IIHF *"carries the
same minor and the same carve-outs"*.**

> **Each is literally true. The pair, voiced alone in the extraction layer, hands a British
> defenceman the NHL's bench line.**

⚠️ **Neither fact is false, so no check that reads a fact against its source can find this.** It is
only visible by reading the two consecutively as a listener hears them — which is what the extraction
layer does by design.

### The other five, and what found them

- **`switching_positions.md:482` (Sources)** — a **fourth** site in a file the brief said had two.
- **`risk_management.md:286`** and **`playing_without_the_puck.md:301`** — layer-test finds: each
  scoped *"behind"* correctly to the NHL, and **the block never carried the IIHF's wider word at
  all.**
- **`risk_management.md:610`** and **`playing_without_the_puck.md:856`** — census finds at a
  **different rule**: NHL/IIHF 67.2(III) claimed *"in the same terms"* and *"identical wording"*,
  quoting *"with his hand"* — **the NHL's words, attributed to both.** The IIHF writes *"they pick…
  with their hand"*.
- **`defender.md:710` (Sources)** — said IIHF 59.1 was *"the same sentence"* while **`:205` in the
  same file correctly says the IIHF writes *"act"* for the NHL's *"action"*.** ⚠️ **A Sources layer
  contradicting its own body.**

### ✅ A stated clearance, which is what was asked for

**`defender.md:93` was verified sound and left alone.** Its *"materially identical words, with one
addition"* is **scoped by its own em-dash clause to the operative limb**, where *"protective"*
genuinely is the only difference — and the bench divergence is stated in full later in the same
paragraph, with both words, the side-glass reading and the hedge.

### A trade made knowingly, and named

All four affected blocks were at `HARD_MAX`, so every repair had to fit inside an existing fact. One
dropped `defender.md:74`'s quotation of *"except where there is no protective glass"* — ⚠️ **the
HARMLESS divergence — to make room for the material one.** Not a hedge, citation or scope flag, and
the body still carries it. **Reported rather than buried.**

### And its own output failed the audio read

Two first drafts dropped the word *"Situation"* for room and rendered as **"(sixty-three point two
four)"** — **a bare number with no label, in its own `<p>`.** Restored and re-rendered.

### ⚠️ The limitation it declared is the next census

> *"A misattribution with **no marker word**. My census grepped for phrasings — 'in the same terms',
> 'word for word', 'materially identical'. **A document that quotes the NHL's text and cites 'NHL and
> IIHF 63.2' with no sameness claim at all would pass invisibly.**"*

It named `risk_management.md:598` as having exactly that shape, and cleared it **only because it
quotes nothing** — *"a sibling with a quotation attached would have looked the same to my grep."*
**That is the seventh sweep of this class, and the first to say what the eighth must look for.**

---

## ⚠️ I registered a source and did not fetch it — the CARHA defect, one round later

Round 53 recorded, as trap 8 in the style guide: **"Registration is not existence, and existence is
not content."** It was written because `carha.txt` had a row in `sources/README.md` **and** a row in
`scripts/fetch_sources.sh` while **no such file was on disk.**

**I did exactly that again with CRT6, in the commit that extends the trap.** I added the README row
and the `fetch_sources.sh` entry — with the warning about its image pages attached — **and never
fetched the file.** An agent following the README row found nothing there and had to re-fetch it
itself.

**Now on disk** (6,313,749 bytes, `%PDF` magic, gitignored by `sources/*` as designed).

### Both byte figures were right, and that is the useful part

The agent reported **505 bytes** where I had recorded **~1,535**. Measured on the same file:
**`pdftotext -layout` yields 1,535 and plain `pdftotext` yields 505.** ⚠️ **Both are BMJ stamp and
page furniture. Both contain zero content** — `grep -ci "helmet|remember|red flag"` returns **0**
either way.

**So the trap is worse than recorded**: it is not one misleading extraction but **two, of different
sizes, from the same file, by the two commands this project routinely uses.** README now says so.

### And the fetch itself needed the trap the project already knows

⚠️ **A plain `curl` gets nothing.** It needed a browser user-agent **and** an
`englandicehockey.com` referer — which is precisely what `CLAUDE.md` says about USA Hockey's PDFs
and what `sources/README.md` records for `iihf.com`. **The agent worked that out independently.**

### One more stale disclosure this created

**`uk_rules.md`'s edition note still says CRT6 *"could not be read for this document… unreachable,
not absent"*** — while **three other lines of the same file** now quote the helmet instruction and
record that the pages *"were rendered and read by eye on 31 August 2026"*.

⚠️ **A stale disclosure that makes the corpus look LESS evidenced than it is.** The corpus's honesty
labels have to be maintained in both directions, and this is the first instance in this session of
one going stale by becoming **too pessimistic**.
