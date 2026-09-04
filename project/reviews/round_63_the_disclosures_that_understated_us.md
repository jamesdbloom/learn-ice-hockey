# Round 63 — the disclosures that understated us, and a brief of mine that caused one

**Started 3 September 2026, immediately after `381df60` was committed and pushed.**
**Owner's standing priority: readability, and diagrams above all else.**

---

## Dimension coverage — canonical numbering, `project/review_process.md:219-234`

| # | Dimension | Status |
|---|---|---|
| **D1** | Rules accuracy | **CHECKED** — USA Hockey 625(a)(4) and Casebook Standard-of-Play Situation 10 ¶2 added together, both quoted verbatim from `sources/`; all fifteen Rule 625 Casebook situations read to confirm none interprets clause (a)(4) |
| **D2** | Rules travelling without exceptions | ⚠️ **THE ROUND'S RECURRING SHAPE.** 625(a)(4) was added **with its counterweight in the same pass**, explicitly so the corpus does not swing from too strict to too loose |
| **D3** | Rule-set divergence | **CHECKED** — IIHF 101.1 women's scope and USA Hockey 604's competitive-contact scope added to one caption; ⚠️ **six MORE unscoped facts-layer sites found and FILED, one of them in the PERMISSIVE direction** |
| **D4** | Citation integrity | ✅ **CHECKED — and it found the round's worst defect, in the round's own repair. Seven URLs fetched, all 200. See *"The repair that inverted itself"* below.** **PREVIOUSLY: RE-OPENED AND DISPATCHED after `commit-gate` blocked.** **The round rewrote a PROVENANCE DETERMINATION with `source-verifier` unrun** — and provenance is *"the one dimension where every defect in this corpus's ~340 body-verified citations has been found."* ✅ **`source-verifier` RAN — seven fetches, all 200, and it found the round's own repair had inverted itself. See below.** **One citation WAS verified live by the gate: PMID 498402, `Can J Appl Sport Sci` 1979;4(1):56-9, both quoted strings verbatim in the abstract — `equipment.md` is clear.** One citation was fetched live (PubMed E-utilities, PMID 498402) and one re-queried (Crossref) by the repairing agent |
| **D5** | Provenance | ✅ **CHECKED AND FIXED. `source-verifier` ran — seven fetches, all HTTP 200 — and found the round's own repair had INVERTED itself.** The contradiction this row previously reported as *"filed, not fixed"* IS FIXED in the staged tree: the Clear Sight / Valiquette / royal-road bridge is deleted (zero occurrences of *"Valiquette"* across all three source pages), the figure is re-owned to Greg Revak, the original's *"or less"* ceiling is restored, and it is repaired at **five** sites across two documents — the fifth found by a corpus-wide census after the repair reported itself complete. **Six rows added to `project/verification/link_baseline.tsv`, carrying two false-negative traps.** See *"The repair that inverted itself"* and *"The handover paid for itself"* below. |
| **D6** | Negative existence claims | ✅ **THE ROUND'S HEADLINE — see below. 590 disclosures, 22 tested to a verdict, FOUR FALSE, all repaired.** |
| **D7** | The cardinal rule | **CHECKED** — every new caption carries the alternative and the find-out-what-your-team-plays instruction |
| **D8** | Numeric ownership | **CHECKED** — *"one of the two figures"* corrected to three against its owner |
| **D9** | The summary layer | ⚠️ **FAILED AND CAUGHT: `shooting.md`'s Overview and Key Takeaway 6 both stated a flat negative its own body refutes.** Round 10's shape |
| **D10** | The key-facts layer | **CHECKED** — 830 blocks conform. ⚠️ **NO FACT COUNT IS WRITTEN HERE. This row said 5,477, then 5,489, then 5,491 as the round's repairs added values — a figure copied out of its owner goes stale silently, which is the failure this project documents at length and which `commit-gate` caught here TWICE. The owner is `python3 scripts/check_facts.py`. RUN IT.** ⚠️ **The 11-value cap constrained work a FIFTH and SIXTH time; both filed, neither worked around** |
| **D11** | Reader safety | ✅ **CHECKED — and it found a MAJOR in text THIS ROUND WROTE. All ten rows of the restructured table read cold against all four rulebooks; nine sound, one new sentence heard as a permission. See below. PREVIOUSLY: RE-OPENED AND DISPATCHED. `commit-gate` blocked because this row said IN FLIGHT and the round finished anyway** — the safety review never completed on the restructured ten-row penalty table, and `diagrams.json` was rebuilt 13 minutes after this record was written. ⚠️ **That table is the corpus's most safety-critical, and TWO cell-shortening inversions had already been caught in it this session by the agents themselves** (a slashing cell that lost *"Non-aggressive"* and *"front"*; a roughing cell and its prose that both lost *"careless or reckless"*). **`safety-reviewer` RAN — twice more after this line was written, finding a Major and then three Criticals on the shipping text. All closed. See the D11 sections below.** **The earlier critical — the wall-as-second-defender counterweight reaching only a caption — WAS found by a completed review and IS repaired in all four layers plus the trailer.** |
| **D12** | Read-aloud integrity | ✅ **Tables 3 dropped → 2, 45 voiced → 46.** ⚠️ **And *"Never touch a facemask"* reaches a listener for the first time** |
| **D13** | Folklore | ✅ **An unsourced overtime guess DELETED** — contradicted by the very book the sentence cited |
| **D14** | Structure, cross-links | **CHECKED** — 50 pages, 10,093 links resolve |
| **D15** | The rendered site | ✅ **CHECKED — NO CRITICALS. 49 routes × 12 viewports × both themes in real headless Chrome. Zero console errors, zero off-origin requests, 5,527 fragment links with 0 broken, 0 WCAG AA contrast failures. Both filed diagram findings CLOSED. One Major (markup, pre-existing) and one stale figure in my own CSS comment. PREVIOUSLY: RE-OPENED AND DISPATCHED.** ✅ **`site-reviewer` RAN: 49 routes × 5 viewport/theme configurations, no criticals, no majors. See the D15 section below.** ⚠️ **Two filed findings only a browser closes: three of four new labels still cutting their markings after the halo narrowing, and the 360 px legibility failure where the one fact `five-on-six` exists to show was invisible.** ⚠️ **AND the CSS change ships with a comment that claimed *"Measured in a browser"* when no browser had been opened — corrected in place, with the falsifiers written in so the next reader can settle it in one pass.** **PREVIOUS STATUS: OPEN — no browser pass this round.** Last round's found six majors; **the CSS fix shipped here is verified by arithmetic only and its author said so** |

---

## ⚠️⚠️ THE ROUND'S OWN WORST DEFECT WAS MINE, AND TWO AGENTS SPLIT ON IT

**I briefed two agents with one sentence: *"WIDE ICE IS THE BRITISH READER'S RINK — IIHF 26–30 m against
NHL 85 ft."***

⚠️ **One agent refuted it from the books and refused to write it. The other propagated it into FIVE LAYERS
and a caption of `switching_positions.md`.** **Both were following the same brief.**

**The refutation:** **IIHF Rule 1.2 — *"60m long and 26m to 30m wide"*. 26 m = 85.30 ft.** ⚠️ **The IIHF
MINIMUM is fractionally WIDER than a full NHL sheet, so the IIHF book describes a RANGE from NHL width
upward — not a wide sheet.**

⚠️ **AND THE CORRECTING AGENT FOUND SOMETHING BETTER THAN THE REFUTATION: TWO BRITISH GOVERNING-BODY BOOKS
POINT THE OPPOSITE WAY.**

> **IHUK In-House Rules 2026-27, Rule 1** (`eiha_inhouse_2026-27.txt:69-78`): *"Rinks with a non-standard
> playing surface (**below 56 m × 26 m**) are authorised by the NGB for all levels of hockey."*
> **England Ice Hockey R&R 22.2** (`eih_rr.txt:992-996`): the same, *"may be approved by EIH to be used for
> all levels of hockey."*

⚠️ **56 m is short of the only length the IIHF gives, and 26 m is its MINIMUM width — so British rinks are
authorised UNDER the IIHF standard on BOTH dimensions.** **The owner already said so:
*"your working assumption should be that your rink is smaller than both."***

⚠️ **THE CONSEQUENCE, and it is a safety-adjacent inversion: a British reader in a 70 ft rec rink was being
told they are on wide ice and should rely LESS on the wall — when on their sheet the wall helps MORE.**
⚠️ **And the inverted advice sat in four layers immediately adjacent to the contact restrictions, so
*"rely less on the wall"* nudges a reader toward closing with the body instead — which on their sheet is
the penalised act.**

⚠️ **`time_and_space.md:474` ALREADY CARRIED THIS CORRECTLY, with the same In-House Rules quote.**
***"Your file was the outlier, not the pattern."***

**Found by GREPPING THE FINISHED FILE, not by trusting either agent's report.** ⚠️ **This is CLAUDE.md's
*"check for contradictions between agents afterwards"* rule paying off — and it is worse than the recorded
instance, where two individually-correct sentences contradicted. Here one agent's output was FALSE, and it
was false because I told it so.**

**Third defect this session traceable to a premise I asserted**, after the CARHA overtime claim and a facts
line I nearly had "repaired" that was already correct.

---

## ⚠️ CRITICAL — the round wrote the counterweight and stopped at the caption

**`switching_positions.md:178` (facts, VOICED ALONE) and `:188` (body):** *"Angle your body so the inside
lane is shut and the only route runs toward the boards, **where the wall becomes a second defender**."*

⚠️ **A converting forward — any age, any league — is taught to steer a carrier into the wall, with the wall
NAMED AS A SECOND DEFENDER, and nothing in the section says the contact may not be available to them.**

⚠️ ***"The round's OWN NEW CAPTION identifies this hazard and writes the counterweight — 'The angle is yours
everywhere. The contact is not' — and the counterweight landed in the caption and NOWHERE ELSE."***

**Verified as a census, not an impression.** ⚠️ **`defending_the_rush.md` OWNS this instruction and carries
the counterweight in ALL FOUR layers** — facts `:200` and `:554`, body `:211`/`:212`/`:389`, Common Mistakes
`:835`, Key Takeaways `:909`. **`forechecking_systems.md` carries it plus a pre-takeaways banner.**
⚠️ **TWO documents state *"the wall becomes a second defender"* in a spoken facts line with NO counterweight:
`switching_positions.md:178` and `defender.md:348`.**

**Scope: USA Hockey 12U and below, all girls'/women's, all non-check adult; Hockey Canada U13 and below and
all female hockey; British women under IIHF 101.1; most adult rec.** **The section text is PRE-EXISTING —
this round added only the two embeds.**

## ⚠️ MY BRIEF'S PREMISE WAS WRONG, AND IT WOULD HAVE BLOCKED A FIX

**I briefed that *"Never touch a facemask"* has no `Never:` line because *"the block is at `HARD_MAX`"*.**
⚠️ ***"THE BRIEF'S PREMISE IS WRONG AND I CHECKED IT. That is true only of the block at line 1290. The
section has an UNCAPPED SIBLING three headings later — the block at 1359, 'The habits that keep you out of
the box', at SIX facts with FIVE SLOTS of headroom, already carrying two `Never:` lines."***

⚠️ **So the 11-cap did NOT block this one. I asserted a constraint that was not there, and had the agent
believed me the safety line would have stayed unwritten.** **USA Hockey 622(b) is a major plus a game
misconduct; 622(c) a match penalty; Hockey Canada files it under 7.1 Attempt to Injure.**

## ⚠️ MAJOR — a scope repair left an instruction with no support for the reader most likely to need it

**`corner-escape-routes`' caption was correctly scoped this round to women's hockey (IIHF 101.1) and to
non-check categories (USA Hockey 604).** ⚠️ **But that left *"pin the puck, not the player"* with NO LEGAL
SUPPORT FOR A BODY-CHECKING-LEAGUE READER — the one reader most likely to pin a player.**

⚠️ **And the corpus already holds the rule that reaches everyone.** **USA Hockey 622 Note is unscoped by
classification: *"wrapping one or both arms around the opponent along the boards in a manner that pins them
against the boards and prevents them from playing the puck or skating."*** ⚠️ **`winger.md:363` SAYS THIS IN
TERMS: *"Do not hear the boards-pinning prohibition as a women's-hockey rule only."*** **The caption did not
use it.**

**A correct scoping repair can create a gap. Scope the rule, then check who is left outside it.**

---

## ⚠️ NINE MAJORS IN FOUR NEW DIAGRAMS — and one exposes a whole class

**`diagram-reviewer` rendered all four, magnified them, and downscaled to 360 px phone width.** ⚠️ **It also
snapshotted the artefacts because a build was running when it started, then confirmed all four SVGs
BYTE-IDENTICAL afterwards — so its findings are against the shipping files.**

### ⚠️ THE CLASS: a clearance computed on the SPINE, not on the drawn WAVE

**Both new `switching_positions` routes terminate ON the faceoff-circle arc.** ⚠️ **A `carry` route draws a
WAVE, and its ink sits several feet either side of the spine. Both clearances were derived from the
endpoint and the chord.**

⚠️ ***"Endpoint arithmetic on a wave route is not a clearance. This is the same class as the two-shot-bundle
defect the authors already found by looking — IT SURVIVED BECAUSE ONLY THE OTHER ROUTE WAS LOOKED AT."***

**The number to satisfy is the wave's outer ink envelope, not the endpoint.** ⚠️ **The module comment claims
the route *"grazes the arc by about a tenth of a foot"*; the render shows it riding ALONG the arc for its
last third, crossing and re-crossing.**

### ⚠️ AND THE DISHONEST SENTENCE WAS IN THE FILE I DID NOT SEND IT TO

**I briefed the reviewer to check whether the CAPTIONS were honest about the pair differing by more than one
thing.** ⚠️ ***"They are — both say 'his route is different because the defenceman moved, not as well as
it.' The dishonest sentence is the BODY PROSE"*** — `switching_positions.md:191`, *"**Only the defenceman
moves.**"*

⚠️ ***"The brief pointed me at the wrong file."*** **This is the shape graded MAJOR last round, and the
captions are the correct side of it.**

### The other seven

- ⚠️ **`getting-beaten-wide`'s caption says *"It is to the goal"* and its `describe` says *"finishing in
  front of the net"* — the route STOPS 15 ft short with a large empty band of ice before the crease.** **And
  the section makes no claim about where he goes, so the "to the goal" claim is AUTHORED.**
- ⚠️ **The pair teaches the WRONG VARIABLE.** **Side by side at reading size the dominant mark is the ROUTE —
  out to the boards in one, down and in to the middle in the other — while the defenceman's 18 ft shift is
  the least salient change on the page.** ⚠️ ***"A reader taking the pair at a glance concludes 'forcing
  outside sends him out; beaten wide sends him in' — the OPPOSITE of what the word 'wide' means. The
  captions do the corrective work in prose, but A PICTURE IS ABSORBED BEFORE ITS CAPTION."***
- **`describe` narrates a segment that is not drawn** — *"swings wide of where the defenceman is standing"*,
  when the carrier starts 11 ft PAST him. ⚠️ **`describe` is the alt text and the speech layer: a listener
  is given a manoeuvre the sighted reader cannot find.**
- ⚠️ **`five-on-six` labels the clearer `C`, which means A CENTRE** — 40 corpus uses of `id: 'C'`, all centre
  roles. **The section says nothing about who clears and the diagram's own `describe` says *"one own
  player"*.** **Should be `F`.**
- ⚠️ **The third outcome is drawn in PASS notation for what the section calls a BLIND CLEAR.** **All three
  are fates of ONE act, and the section's headline is *"every clear is a shot."*** ⚠️ ***"Picking the pass
  glyph makes the third outcome a different DECISION rather than a different RESULT — and tells a listener
  the defender passed to the opposition ON PURPOSE."***
- ⚠️ **`six-on-five-one-point-stays` DROPS the *"not the line itself"* hedge its sibling 100 lines above
  carries — and its LABEL, *"stays at the line"*, asserts the retracted definition.** **`rink.json`'s own
  comment says the captions must carry it.**
- ⚠️ **At 360 px the one fact `five-on-six` exists to show is INVISIBLE: both ends carry an identical pale
  crease tint and the only mark distinguishing "your goalie is in" from "their net is empty" is a `G` glyph
  that is an unreadable smudge.** **The no-G convention is correct; the SCALE defeats it.**

### ⚠️ THREE OF FOUR LABELS STILL CUT THEIR MARKINGS AFTER THE HALO NARROWING

**The blue line strikes through *"wrong side now"* and *"pinches to keep it in"*; a faceoff arc strikes
*"still goal-side"*.** ⚠️ **The narrowing from 0.9 ft to a font-size fraction restored 23,791 px corpus-wide
and did NOT resolve these.** **A leader line also strikes a `k`.**

### And the comment figures do not reproduce — again

**Claimed 9.3° between the shot routes: it is 8.52°. Claimed 12 ft apart at centre ice: 10.6 ft.**
⚠️ **Both overstated 10–15%, and both are the LOAD-BEARING JUSTIFICATION for the fix they document.**
**Twelfth and thirteenth wrong comment numbers this session.**

---

## ⚠️ D6 — four false disclosures, and one was caused by a plan row of mine

**590 disclosure lines across 36 of 37 documents. All 68 facts-layer lines read, all 186 `unchecked`-class
lines read, 22 tested to a verdict against primary text, a rendered PDF, a fetched paper, a live URL or a
database.** ⚠️ **Every negative carries a positive control; none reported bare.**

⚠️ **NO CRITICAL — and the direction is the tell: both false VOICED disclosures UNDERSTATE what the corpus
can support, which is round 59's finding repeating, and is the opposite of the failure every other
convention here guards against.**

### ⚠️ M1 — my own brief asserted the wrong premise, and an agent applied it faithfully

**`rules_primer.md:144` said CARHA *"declines to set"* an overtime format, then GUESSED one.**
**CARHA Section Seven sets it precisely: 5-minute 4-on-4 sudden victory in round robin; 5-minute 5-on-5 plus
a best-of-3 shootout, then sudden death, in semi-finals and finals.** ⚠️ **The unsourced guess —
*"three to five minutes, 4-on-4 or 3-on-3, sometimes a three-shooter shootout"* — was contradicted by the
book the sentence itself cited. This book runs 4-on-4 and 5-on-5 and NEVER 3-on-3.**

⚠️ ***"`OPEN_ITEMS.md:2143` (round 59) PRESCRIBED this repair and asserted the wrong premise in the brief.
An agent applied it faithfully."*** **VOICED — 13 of 16 twelve-word runs reach the listener.**

**The repair ADDED evidence as well as removing a falsehood: CARHA Rule 85(a) sources the previously
unsupported *"ties may simply stand"* clause.** ✅ **And the siblings were checked — `trapezoid` 0,
`restricted area` 0, `video review` 0 — the overtime claim was the only one generalised from the Glossary.**

### M2–M4

- **`shooting.md:16` and `:892`, BOTH VOICED** — *"no study prices the gap"* where the body says movement
  **is** priced in one narrow case and sight is not priced at all.
- **`shooting.md:483`** — *"the two numbers"* is not exhaustive; a third sits in a sibling this document
  links to two sentences later.
- **`equipment.md:834`** — *"Crossref does not index it, so it could be neither confirmed nor refuted"*.
  ⚠️ **PubMed indexes it, PMID 498402, and the abstract confirms the description verbatim.** ⚠️ **The same
  sentence says it searched PubMed for a different query: the falsifier was one query away in a database
  already in use.** **Repaired to carry the lesson — ONE DATABASE IS NOT THE LITERATURE.**

---

## ⚠️ AN EIGHTH GREP TRAP, AND IT RUNS OPPOSITE TO THE OTHER SEVEN

**`sources/README.md` records six false-NEGATIVE classes; a seventh (quotation marks inside a phrase) was
found this session. This one MANUFACTURES EVIDENCE.**

⚠️ **Searching for the call *"eat it"* returns a hit that is really *"**Repeat it** four more times."***
⚠️ ***"A reviewer who had stopped at the hit count would have reported a TRUE disclosure as FALSE"*** — and
then "corrected" a sound claim into a wrong one.

---

## ⚠️ A SILENT FALSE PASS IN THE TOOLING

**`check_pointers.py` — and everything speech-backed — HALTS on an unresolved diagram id. It does not skip
and continue: it raises and exits WITHOUT SAYING HOW FAR IT GOT.**

⚠️ **While this round's new ids were unbuilt, every such run reported on a TRUNCATED corpus and its clean
output meant nothing past the halt.** **Confirmed fixed after the rebuild: 37 of 37 documents scanned.**

**Standing rule now: after ANY new diagram id is authored, `build-diagrams.mjs` runs BEFORE any
speech-backed checker, and a clean run from before that rebuild is not evidence.**

---

## What was actually FIXED — recorded, because a findings list is not a review record

⚠️ **`commit-gate` blocked because this file listed two criticals and nineteen majors and recorded NOT ONE
FIX.** ***"I verified several were repaired… The record does not say so, so it cannot later be read as
evidence of what shipped."***

**Repaired and verified in the staged tree:**

| finding | fix |
|---|---|
| **CRITICAL** — wall-as-second-defender with no contact counterweight | all four layers + Sources trailer, with USA Hockey 604(a)/(c), Hockey Canada 7.3(a) and IIHF 101.1 quoted |
| **CRITICAL** — the width premise inverted for British readers | six layers, made CONDITIONAL on sheet width; two British governing-body books quoted |
| routes cleared on the SPINE, ink 1.5 ft inside the paint for 46% of the route | **both replaced by ONE SHARED route constant** — which also closed four other majors, because the pair now differs only in the defenceman it exists to isolate |
| caption said the route finished in front of the net; it stopped 15 ft short | route gone, caption rewritten |
| `describe` narrated a segment never drawn | rewritten to the route actually drawn |
| *"Only the defenceman moves"* was false | now literally true |
| clearer labelled `C`, which means a centre in 40 other diagrams | `F` |
| third outcome drawn in PASS notation for a blind clear | all three drawn as `shot`; *"back across the zone"* → *"up-ice and across"* |
| *"stays at the line"* asserted the retracted point definition | `holds the point`, hedge restored to caption and `describe` |
| 360 px: the one fact the diagram exists to show was invisible | **a LABEL on the guarded net** — a glyph scale-up was refused because `ARRIVAL.glyph = 2.9` is quoted by the arrival invariant and every clearance comment in every module |
| four incompatible senses of *"box"* | `Never:` split, `Convention:` added naming the borrowing; the fifth defender's job **FOUND in a sibling document, not invented** |
| *"Never a two-minute foul in any book"* inverted | *"No book prices this at two minutes; three of the four eject you"* |
| roughing cell and prose both lost *"careless or reckless"* | restored, with USA Hockey 640 Note 2 quoted |
| Hockey Canada 8.6(a)'s operative wording lost in the conversion | restored |
| table 16 chars from silence | ⚠️ **FINAL STATE AS SHIPPED: 16 chars and 4 rows of headroom, and ON the near-limit worklist.** The restructure did take it to 44 — then the safety repairs spent it, deliberately, to buy a counterweight into a voiced cell (see below). **`check_tables.py --near` on the staged tree, pasted not restated: `content/technique/body_contact_and_battles.md:1304 [16 chars and 4 rows of headroom]`** |
| *"most-called penalty in the NHL"* | scoped to *"the most-called of the seven counted in §9"* |
| four false disclosures | all four repaired; CARHA's real format added, PubMed record added, the sight/movement split restored in both summary layers |
| 81.4's exceptions stated bare | added — ⚠️ **and correctly scoped: the goaltender exception belongs to the team that PULLED its own, not the team that ICED it** |

**Deliberately NOT fixed, and filed:** ⚠️ **`rink.mjs:439` — every one of ~399 leader lines in the corpus is
drawn THROUGH its own label** (a shared renderer touching all 144 diagrams, deferred exactly as round 62's
halo fix was, until it can be its own reviewed change) · **`beaten wide`, struck by the blue line and
unfixable from the spec, with the arithmetic written into the module so nobody "repairs" it** · **the
93 unconditional tab stops, which are markup and need a client script with a stated fail-safe direction.**

---

## What this method could not have found

⚠️ **`commit-gate` blocked because this section was missing. It is the most valuable part of a record and it
was the part not written.**

- **The 568 disclosures not tested.** 22 of 590 were graded. ⚠️ ***"The 568 untested are exactly the
  population in which the last two rounds each found more."*** **And 77 lines the tool classes `rulebook`
  contain no rule number at all and are real absence claims hidden from `--unchecked` — nobody has
  enumerated them.**
- **Anything wrong that is stated CONSISTENTLY everywhere.** ⚠️ **Both of the content review's best findings
  came from the corpus DISAGREEING WITH ITSELF.** ***"A claim that is uniformly wrong across all
  thirty-seven documents produces no diff, no census outlier and no layer mismatch, and my method returns
  clean on it every time."***
- **A hazard whose counterweight was never written anywhere.** ⚠️ **The safety critical was caught only
  because the round wrote the counterweight in ONE place and its absence elsewhere could be diffed. Had it
  never been written, there would have been nothing to diff against.**
- **Whether the pictures are GOOD.** Every reviewer read the section before looking at the diagram, which is
  the wrong order for that question and the right order for every other one. ⚠️ **And nobody asked a coach
  whether the drawn 6-on-5 pinch assignment or the corner-escape angle is what one would actually teach.**
- **Relocated text.** ⚠️ **Most of what ships here MOVED rather than changed — so a defect that was in a
  table cell yesterday is now a defect in a paragraph, and reads to a diff-based reviewer as unchanged.**
- **The extractions themselves.** Every rules claim was verified against `sources/` on disk. **Nobody
  re-extracted a PDF, so a bad extraction is invisible and looks like a clean verbatim match.**
- **The other 143 diagrams.** ⚠️ **Only four were rendered and looked at, and every render-only defect this
  round was invisible to every checker.**

---

## CLOSED — the four incompatible senses of "box", carried over from the diagram round

**Filed OPEN in the plan on 3 September 2026 by the agent drawing `game_management.md`'s diagrams, which
owned the file and deliberately declined to fix it: *"it is a coaching claim I have no source for."*** ⚠️ **That
refusal was correct and is why the fix is right — a diagram author would have picked a shape and asserted it.**

**`:339` read *"Play a tight box or diamond in the slot"*** with parenthetical definitions that were the
**penalty-kill** ones — **four** players — inside a passage about **5-on-6**, where the reader has **five**
skaters and the section never said what the fifth does. ⚠️ **A sibling caption already warned about exactly this
collision — *"Same word, different thing"* — and had sat there unactioned while the file it described was
edited in the same round.**

**The repair does not invent a shape.** It says the words are borrowed, that the count does not come with them,
that this document does not settle where the fifth skater stands, and it points at the one five-man answer a
sibling document *does* name — the collapsing box — **explicitly as one option and not as the shape**, which is
[the cardinal rule](../content_style_guide.md). A `Convention:` fact carries the same in the extraction layer.

⚠️ **And it closes a trap the plan row did not see: Box+1 is a five-man shape in the same sibling document, so a
reader hunting for the missing fifth player would land on it — and its fifth player is the only one who chases
the puck, which is the first thing that bullet tells you not to do.** **Named and warned off explicitly.**

---

## ⚠️ THE REPAIR THAT INVERTED ITSELF — D5, found only because `commit-gate` refused to let the round finish

⚠️ **This round rewrote a PROVENANCE DETERMINATION with `source-verifier` unrun. `commit-gate` blocked on
exactly that. The verifier then found the repair had landed on the wrong half of its own argument** — and it
found it by leaving the disk, which is the part that matters: **the brief said no source existed anywhere on
disk. That was true. It was ONE FETCH AWAY.**

**What the round believed:** the corpus carried two RIVAL attributions for *"point shots score ~3% with
traffic, ~1% without"* — a HockeyViz shot-location map, and Clear Sight Analytics — and *"those cannot both be
true."* The round ruled out the map, correctly, because the map has no traffic variable.

**What seven fetches showed:** ⚠️ **they were never rivals. Both attributions are Greg Revak's, in two
publications of one article, and the later one asserts them JOINTLY** — McCurdy's map *"combined with other
data such as Clear Sight Analytics."* ⚠️ ***"Such as" names an EXAMPLE, not a source.***

⚠️ **That reframing INVERTS which limb is weak, and the round had eliminated the strong one.** The repair left
**Clear Sight standing as the survivor** — but:

| limb | support |
|---|---|
| **the map** | a real, public, retrievable artefact. Downloaded and **viewed**, not inferred from markup: 484×589, title burned into the image, contours at 15/10/5%. **It simply cannot carry a traffic split.** |
| **Clear Sight** | **one sentence, in the 2024 republication, behind *"such as"* — and ABSENT from Revak's own 2020 printing of the identical numbers.** No dataset, date or publication is ever named. |

⚠️ **AND THE CORPUS INVENTED A BRIDGE NOBODY WROTE.** `offensive_zone_play.md:61` called Clear Sight *"the
proprietary tracking behind Steve Valiquette's royal-road percentages."* ***"Valiquette" appears ZERO times
across all three pages*** — raw HTML as well as stripped text. **That bridge is the corpus's own construction,
and it is what dragged a point-shot figure into the royal-road provenance chain, where it does not belong.**
⚠️ **`:891` is the sentence that performed the merge, and it had never been named by anyone.**

**And the first printing carries no attribution at all** — *"Clear Sight" 0, "Valiquette" 0, "royal road" 0,
"HockeyViz" 0, "McCurdy" 0.* **The figure is Revak's, printed bare on 20 September 2020 and retro-credited by
him four years later.** ⚠️ **His Part 1, two days earlier, openly credits McCurdy for a *1–3% LOCATION range*.
Part 2's 3% and 1% are that range's two ENDPOINTS, relabelled as a traffic split.** The verifier was careful
that this coincidence **is not proof he derived one from the other**, and the corpus must be equally careful.

**Also recovered:** the original reads ***"1% or less"***. **The corpus drops *"or less"*, turning a ceiling
into a point estimate.**

**Dispatched as a set of four — `offensive_zone_play.md:61`, `:891`, `:988` and `shooting.md:483` —** because
`:988` inherits `:61`'s attribution by pointer and `shooting.md:483` was deliberately aligned with `:61`.
⚠️ **`:988` was found by the verifier, not by the round: a third carrier nobody had named.**

**The model to match was already in the corpus:** `shooting.md:399` and `:412`, verified verbatim today —
*"Greg Revak's readings off a shot-location map he credits to HockeyViz (Micah Blake McCurdy), **given as
ranges rather than as computed values**."*

**Six baseline rows applied to `project/verification/link_baseline.tsv`, with two traps recorded in them:**
⚠️ **the EV map's title exists ONLY inside the PNG — *"2007-2017"* has 0 occurrences in the page HTML, so a
grep-based verification of it returns a FALSE NEGATIVE**; and ⚠️ **the pre-existing row for Revak's Part 1
records 34,081 bytes against 171,489 today, a 5× difference, so that earlier fetch may have been a STUB
without the article body — any negative result taken from it is unsafe.** **That is the ninth false-zero
class recorded this session, and the second that runs by fetching too little rather than by grepping wrong.**

---

## ⚠️ D11 — THE RESTRUCTURED TABLE HELD, AND THE PROSE AROUND IT DID NOT

**`safety-reviewer` read all ten rows cold out of the renderer and traced every quoted string and rule number
into `sources/`. Nine rows SOUND. ⚠️ The Major is in NEW PROSE this round wrote.**

**First, the good news, because it is the point of the restructure:** ⚠️ ***"No third instance of the
cut-a-hedge-to-fit failure. Every clause that left the ten cells lands in a layer a listener reaches."***
**Twelve relocated clauses were accounted for individually** — the automatic minor, the USA Hockey 623 /
Hockey Canada 8.2 hookable-stick rule, *"Non-aggressive"* and *"front"* of the shin pads (**the earlier
inversion confirmed repaired**), USA Hockey 634's dropped let-out, Hockey Canada 9.3's two verbatim quotes,
the Casebook situations, the cross-check tier ladder, the slew-footing ladder. **And the table went from
16 chars of headroom to 44 chars and 4 rows.** ⚠️ **THAT WAS TRUE AT THE RESTRUCTURE AND IS NOT THE STATE THAT SHIPS — the later safety repairs spent it back down to 16, on purpose. See *"the approved trade"* below, and the corrected fixes-table row above.**

### ⚠️ MAJOR — a rule EXPLANATION heard cold becomes a PERMISSION

**`body_contact_and_battles.md:1323`, written this round:** *"So it is not the hands or arms in a check that
make it roughing — it is carelessness or recklessness with them."*

⚠️ **The rule claim is CORRECT and the sentence it replaced was WRONG** — USA Hockey 640 Note 2 does read
*"in a careless or reckless manner while delivering a check"*, and the old text made hands-in-a-check
roughing per se. ⚠️ **THE DEFECT IS THE MISSING RIDER.** Voiced alone it is heard as: *hands and arms in a
check are fine unless you are careless.* **Hands and forearms are not a legal contact surface for a body
check in any of the four books, carelessness or not** — USA Hockey's Glossary writes *"only with the trunk of
the body (hips and shoulders)"*, and the IIHF Glossary is quoted to the same effect **at `:427` of this very
file**. A reader acting on it delivers an illegal check and reaches elbowing, illegal body checking or head
contact, **none of which turn on the roughing threshold.**

⚠️ **The counterweight EXISTS in this document — body `:423`, facts `:411`, Key Takeaway 5 — and is 900 lines
upstream, absent from §12's own facts block and from the sentence's own paragraph.** ⚠️ **§12 is headed
*"Playing Physical Without Taking Penalties"*, which advertises the penalty sheet and not the contact
surface — so nothing in the heading tells a reviewer to look for it.**

⚠️ **AND THE REVIEWER SAYS PLAINLY IT FOUND THIS BY ACCIDENT: *"I found the roughing Major because I ran a
census the brief did not ask for and it collided with §5."***

### Four Minors, all with the same shape: a qualification that reached one layer

| minor | layers |
|---|---|
| *"The operative sub-sections are 640(b) and 640(c)"* — ⚠️ **Note 2 has THREE limbs, and NOTHING carries the first**, the careless-hands limb the preceding sentence just introduced. Flagging (b)'s adult-male carve-out next to an exhaustive-sounding list can leave a US adult-male reader thinking part of 640 does not reach them. **The rider exists at facts `:486` and in `game_management.md:771` — with the hedge that it is *"a reading rather than the book's words"*, which the repair must keep.** | facts ✓ §5 · body ✗ §12 |
| slashing and holding rows scope a let-out by **trailing citation alone** — heard cold that reads as attribution, not as a limit. ⚠️ **The hooking row in the same table does it right: *"in the NHL and IIHF only."*** | facts ✓ · cell ✗ |
| the NHL/IIHF **`trip or fall`** vs **`trip and fall`** split left the cell and did not land in the new prose | facts ✓ only |
| the facemask hazard | body ✓ facts ✓ · Common Mistakes ✗ KT ✗ — **a net improvement on HEAD, recorded as a gap** |

### ⚠️ And the caption layer could not be certified at all

**`check_absolutes.py` exited 2** — `diagrams.json` stale, so **the voiced caption layer is UNCERTIFIED for a
document that has diagrams.** ⚠️ **Traced to the coordinator: a COMMENT-ONLY edit to a diagram module, no
geometry changed, invalidates the whole caption certification because the detector is mtime-based.** Filed
with the fixed gate order in the plan. **The reviewer correctly refused to treat prose-clean as a pass.**

**Also upheld on re-verification:** the `⚠️` glyph is **silently dropped by the renderer**, and in all four
cells using it the following sentence stands on its own force (*"is no defence"*, *"No fall required"*,
*"No book prices this"*, *"No stride count"*) — **nothing lost, checked for this file only.**

---

## What the REVIEWERS said they could not have found — the next round's scope

**Kept separate from my own list above, because these come from the methods that actually ran.**

**From D11 (safety), the sharpest thing anyone said this round:**

⚠️ ***"My clause-accounting is good at catching material that left a cell and landed nowhere. It is
STRUCTURALLY BLIND to material that was NEVER in the cell at HEAD and should be."*** **The whole restructure
was audited against its PREDECESSOR, not against the rulebooks' full treatment of each infraction.**
⚠️ ***"Nine of the ten rows are compressed definitions, and a definition that was always incomplete looks
identical to one that is correctly complete under this method."*** **That is a standing hole in every
diff-based review this project runs, and it is not closed.**

- **The rows were read aloud by a person, not synthesised.** *"Prosody effects I cannot predict — where a TTS
  voice places the caesura in 'No book prices this at two minutes; three of the four eject you' — are
  unverified."* ⚠️ **Nobody has ever listened to this corpus through the actual voice.**
- **Charging strides, slew-footing tiers and the 640 carve-out were censused corpus-wide; hooking, holding,
  high-sticking and interference were NOT.** Four infractions in the restructured table have no cross-document
  check behind them.
- **The standing one, and it outranks every rule finding here:** ⚠️ ***"No rulebook grep tells you that a
  legal technique executed badly at speed still hurts somebody. Every row in this table is a RULE, and a
  reader who satisfies all ten can still put a player into the boards."***

**From D5 (provenance):**

- **It established who first PRINTED the 3%/1%, not whether it is TRUE.** *"No page I reached shows a
  measurement, a sample, a season, a league or a method behind it, and it remains unreplicated."*
- **An older printing cannot be ruled out** — only that Revak's own 2024 republication points back to his
  2020 newsletter.
- ⚠️ **A new, unexamined question was opened rather than closed: the EV map's lowest printed contour is 5%,
  read visually and not OCR'd — so *"the map cannot by itself support any figure below 5% at all"*, which
  puts a question mark over the 1–3% range in `shooting.md:399` that nobody has looked at.**

---

## The handover paid for itself — the census the agent could not run found a fifth carrier

**The D5 repair agent ended with a declared gap: *"I was scoped to two files and did not grep `content/`
corpus-wide… If a third document restates the pair with the old attribution, this correction has reached the
body and stopped — which is the round-10 failure mode. **Somebody should run that census.**"***

**CLAUDE.md says answering exactly that kind of declared gap *"is usually the highest-value work
available."* It was.**

**The census result at document level is CLEAN:** the 3%/1% pair lives in only `offensive_zone_play.md` and
`shooting.md`, both of which the agent held and repaired. **No third document carries it.** (Corpus totals
across all 37: `Clear Sight` 14, `Valiquette` 43, `royal road` 78 — but the point-shot pair only 6, all in
those two files.)

⚠️ **THE FAILURE WAS INSIDE ONE OF THE REPAIRED FILES. `offensive_zone_play.md:394`:**

> *"Even at a **3% conversion rate with traffic**, the shot generates chaos in the home-plate area…"*

**Bare. No attribution. Asserted as an established measured fact, ~330 lines downstream of the `:61` the
agent had just spent the round qualifying.**

⚠️ **Why every sweep missed it, which is the transferable part: it says *"conversion rate"* rather than
*"of the time"*, AND it carries no attribution at all — so neither an attribution grep (`Clear Sight`,
`Valiquette`) nor a phrasing grep (`3% of the time`) reaches it.** **It was found only by regexing `3%`
within 60 characters of `traffic` across all of `content/`.**

⚠️ **This is the round-10 shape surviving INSIDE a document whose four other carriers were correctly
repaired — so "did the correction reach the other documents?" is the wrong question to stop on. The right one
is "did it reach every sentence that USES the number, including the ones that never credited it."**

**Returned to the agent that owns the file, with an explicit instruction to REFUSE if it judges the sentence
sound** — *"Even at…"* may already read as a concession rather than an assertion, and that is a legitimate
outcome. **The coordinator does not repair another agent's file from outside, and a reflex edit here would
put unhedged new prose into a passage the coordinator has not read in full.**

**Also confirmed NOT part of this defect:** `special_teams.md:259` carries the royal-road **15.50%** figure
on a genuinely different and checkable chain — **Alan Wells' analysis of Ryan Stimson's Passing Project data,
via NHL.com** — not Clear Sight, and untouched.

### The fifth carrier was repaired, and it was ambiguous as well as unhedged

**The agent did NOT refuse, and gave a better reason than the brief had.** ⚠️ **The `"Even at…"`
construction is a concession about MAGNITUDE, not about PROVENANCE** — *"it tells a listener the number is
low, which is precisely the thing the sentence then argues past. It says nothing about the number being
uncertain."*

⚠️ **AND THE CENSUS SURFACED A SECOND REASON NEITHER OF US HAD: `offensive_zone_play.md` now carries TWO
DIFFERENT 3%s** — Boyle's distant-shot baseline at `:135`, which **is** genuinely Valiquette's tracking, and
Revak's point-shot-with-traffic rate at `:61`. **`:891` exists specifically to keep them apart.** So a bare
*"3% conversion rate with traffic"* at `:394` was **ambiguous between them** for any reader who had met both.
**Hedging it would not have been enough; it had to be named.**

### ⚠️ THE METHOD CORRECTION — a layer test that clears the BLOCK does not clear the PROSE BESIDE IT

**The ` ```facts ` block four lines above `:394` already read *"Even at a **low** conversion rate with
traffic"* — no number at all.** ⚠️ **So the extraction layer was ALREADY CLEAN and the BODY was the unhedged
one.** **That is the inverse of this corpus's usual failure**, and it is exactly why the agent's layer test
came back clean: **it was testing a block four lines above the defect.**

⚠️ **CLAUDE.md's propagation rule says "Body ✓ does not imply block ✓." This round found the converse is also
true and is NOT written down anywhere: BLOCK ✓ DOES NOT IMPLY BODY ✓, and a layer test is blind to it by
construction.**

### The declared gap was closed, and closing it corrected the tool first

**The agent ended: *"The census I ran keys on the PERCENT SIGN. A restatement that spelled the figure out —
'three per cent', 'one in thirty' — would not have matched."*** **Run, corpus-wide, over spelled-out
percentages, ratio forms and multipliers near *traffic* / *screen* / *point shot*.**

⚠️ **It returned ZERO, and the zero was NOT YET EARNED.** **A positive control of six synthetic carriers
caught one MISS: *"one in thirty"* failed, because the denominator alternation ran one-to-ten and `\d+` does
not match a spelled number.** **Widened, all six controls pass, and the corpus returns one hit —
`playing_without_the_puck.md:911`, *"14 in 2026/27 — whose screen"* — a rulebook edition and an unrelated
sense of "screen". A FALSE POSITIVE.**

**So the census is closed and the figure has no spelled-out, ratio or multiplier carrier anywhere in the
corpus.** ⚠️ **Recorded because the zero produced by the FIRST regex and the zero produced by the SECOND are
indistinguishable in the output, and only the control tells them apart. That is the ninth false-zero class
this session and the first caught BEFORE it was believed rather than after.**

---

## D15 — the browser pass, and the CSS change survived every falsifier written against it

⚠️ **The Chrome extension was BLOCKED for the third round running (categorisation-service failure, 3 calls
across 2 origins). The pass ran on real headless Chrome over CDP instead** — viewport by
`Emulation.setDeviceMetricsOverride`, theme by `setEmulatedMedia`, no iframe artefact. ⚠️ **So the dimension
was checked, but NOT through the tool the review process nominally uses, and the reviewer says plainly:
*"If CDP and the extension would disagree, I could not see it."***

**The CSS fix was written with a predicted overflow table and three named falsifiers. All seven predictions
reproduced BYTE-FOR-BYTE at 320/375/768/960/1248/1280/1440, and the band edges landed too — 1007→639,
1008→640, 1287→639, 1288→640.** **None of the three falsifiers fired.** ⚠️ **The 640 px floor below 60rem is
intact, so the 5.1 px phone-label regression was NOT reintroduced — which was the whole reason the fix is a
media query rather than an unconditional `min(640px, 100%)`.** **And the reviewer proved the rule does real
work by re-injecting the old floor at runtime: 48 px of overflow returned at 960, 8 px at 1280.**

⚠️ **Writing the falsifiers into the comment is what made this checkable in one pass. That convention is
earning its keep and should be kept.**

### The one Major is markup, predates the round, and must NOT be fixed by reverting

**94 unconditional tab stops announce `role="region" … "scrollable horizontally"` whether or not the box
scrolls.** ⚠️ **The round-63 media query made 45 of them dead in two narrow bands (960 and 1248–1287) that
were previously live — its author flagged that exact risk and was right.** **But the media query fixes
HIDDEN CONTENT, which is the worse defect. Filed with the JS fix and an explicit note that a fail-safe
direction has to be chosen.** ⚠️ **And it is a MARKUP finding, not a heard one — nobody has put a screen
reader on this site.**

### Both diagram findings CLOSED, and one of my rows was wrong about the mechanism

- **The 360 px `five-on-six` legibility failure is closed.** The added label reads: the `G` glyph sits in its
  tinted crease with *"your goaltender"* beneath it in full-size type, and the far crease shows the same tint
  with no glyph. **Residual, honestly stated: at 360 px the two ends are never in view simultaneously, so the
  comparison still needs a scroll — the label fixed IDENTIFICATION, not SIMULTANEITY, and the caption and
  `<desc>` both carry the fact.**
- **Two of the three labels I filed as colliding NO LONGER EXIST** — the row was stale.
- ⚠️ **And my row credited a fix to SHORTENING, which is geometrically impossible here: `holds the point` is
  `text-anchor="middle"` at `x=25.00`, and x=25 is the blue line's own x, so the line strikes the centre of
  the word at ANY length.** **Corrected in the plan, because the row as written would have sent the next
  round to shorten it again.**

**Three collisions still ship and all three were read at high magnification — all legible, halo working.**
**A sweep found 261 label/marking overlaps across 136 SVGs: overlap is the normal condition and the halo is
the accepted mitigation.** ⚠️ **Four were opened by eye. 257 are unread.**

### Two things stated plainly that are true of THIS BUILD only

- ⚠️ **`dist/analytics.js` is a GA4 bootstrap. It is loaded by 0 of 49 pages and its measurement-id gate is
  absent everywhere, consistent with the measured zero off-origin requests — but *"this site sends nothing to
  third parties"* is true OF THIS BUILD, and the opt-in path is one environment variable away.**
- **`/systems/faceoffs` without a trailing slash 404s locally.** Expected — `astro preview` does not run the
  CloudFront rewrite. ⚠️ **The reviewer explicitly declines to claim it passes in production.**

---

## The safety Major was repaired, and the repair refuted five things in the brief that sent it

**All five fixes landed. The facemask material now reaches FIVE layers** (body ×2, facts, a new Common
Mistakes bullet placed beside the helmet-removal one and explicitly distinguished from it, and a new clause
in Key Takeaway 10) — **up from three, and from one table cell at HEAD.**

**The counterweight the repair used is STRONGER than the one I supplied.** USA Hockey writes it **twice**,
word-identical, in the **Glossary** and in the **Declaration of Player Safety, Fair Play & Respect**:
*"The use of the hands, forearm, stick or elbow in delivering a body check is unacceptable and not within the
guidelines of a legal body check."* **And Hockey Canada's head-contact clause corroborates it from the other
side** — *"raises their stick, hands, forearm, shoulder, or elbow… penalize… for Head Contact, rather than for
roughing"* — **which is precisely the point the Major was about: the roughing threshold is not the question.**

⚠️ **The rider was verified to land in the SAME SPOKEN CHUNK as the hazardous sentence (chunk 126), not merely
somewhere after it.** **That is the distinction the whole defect turned on.**

### ⚠️ FIVE BRIEF CLAIMS REFUTED — and one of them would have made the corpus contradict itself

| I said | the truth |
|---|---|
| hands/forearms excluded from a legal check in **ANY of the four books** | ⚠️ **TWO of four say it in terms.** The NHL writes no positive definition; Hockey Canada prohibits rather than defines. **Wrong in either direction is a safety defect** |
| Hockey Canada writes **no** *"fend off"* permission | ⚠️ **HC 8.1 writes a comparable one IN THE RULE.** *`"fend off"` absent is a PHRASE absence, not a PERMISSION absence* — and a bare *"only"* would have **contradicted `puck_handling.md:990` and `winger.md:114`**, which both say all four books write it |
| the operative sub-sections are **640(b) and (c)** | correct as far as it went — **the brief itself missed 640(d)** |
| add a `Rule:` value to **§12's block** | ⚠️ **not executable — that block is at HARD_MAX, 11 values.** The agent declined to mangle it and used §12's other block with a matching body bullet |
| `rules_primer.md:856` carries a live false negative on *"fend off"* | ⚠️ **STALE AND MIS-NUMBERED. The passage is `:892` and was ALREADY correctly scoped.** Row closed |

### One incompleteness accepted on the record, and the reasoning is right

**facts `:1293` sits at EXACTLY 300 chars and says *"Hockey Canada 8.1 blocks a stick, not holds"* — true,
but silent on the arm strength move.** **Every variant that fits the cap required dropping either *"never to
push off and create space"* or *"not holds"* — BOTH PROHIBITIONS.** ⚠️ ***"Trading a prohibition for a
permission is the wrong direction in a safety repair."*** **Left as is, full picture in the body. That is the
correct call and it is why the cap must never be worked around by deletion.**

### ⚠️ AND THE REPAIR COST HEADROOM ON THE CORPUS'S MOST SAFETY-CRITICAL TABLE

**The §12 table's headroom fell from 44 chars to 23 at this point in the round, and to 16 by the end of it** (still 4 rows spare, still voiced — `check_tables`
unchanged at 2 dropped / 46 read aloud). ⚠️ **But 23 chars is close, and this is the table whose sibling at
`:60` already sits at ZERO rows of headroom.** ⚠️ **The next ordinary edit to either could silently cost a
listener the whole thing — which is the exact failure `check_tables.py` was written for.**
**Filed. Run `check_tables.py --near` before any future edit in this file.**

---

## ⚠️⚠️ THE REPAIR OF THE MAJOR INTRODUCED A WORSE ONE — a divergence that does not exist

**The fresh `safety-reviewer` on the repaired text confirmed the original Major was FIXED** — the rider lands
**inside the same spoken chunk (126)** as the hazardous sentence, not merely after it, and the permission
reading is closed. **It then found two new Majors, one of them created by the repair.**

### The chain, because the chain is the finding

1. **My brief asserted Hockey Canada writes no *"fend off"* permission** — reasoning from a phrase count to a
   legal conclusion.
2. **The repairing agent correctly REFUTED that** and found Hockey Canada 8.1's arm strength move.
3. ⚠️ **It then OVER-CORRECTED into *"Hockey Canada 8.1 writes something different again"* — presenting a
   shared rule as a national divergence.**

**Verified independently by the coordinator, `str.count` with positive controls:**

| book | `"strength move"` | control `"penalty"` |
|---|---|---|
| NHL | **1** | 1451 |
| IIHF v1.1 (**the British book**) | **1** | 1215 |
| IIHF 2026-27 | **1** | 1289 |
| Hockey Canada | **1** | 1230 |
| USA Hockey | **0** | 570 |
| USA Hockey Casebook | **0** | 1892 |

**NHL 54.2, IIHF 54.2 (both editions) and Hockey Canada 8.1 carry the sentence WORD FOR WORD, pronouns
aside. Only USA Hockey writes none.**

⚠️ **THE HAZARD: a reader under the NHL or IIHF — which is EVERY BRITISH READER — is told a permission their
own book grants them is another country's rule, and is told not to carry it across.** **They give up legal
body position in a battle and reach for the alternatives, the stick and the body, which are the penalisable
ones.**

⚠️ **AND THE SECOND-ORDER COST IS WORSE THAN THE FIRST: a fabricated divergence inside a passage whose whole
thesis is "the books differ here" teaches the reader to DISCOUNT THE REAL DIVERGENCES this document is built
on.**

**It contradicted THREE sibling documents, all of which already had it right** — `puck_handling.md:990`
(*"in NHL and IIHF 54.2's own words"*), `winger.md:114` (*"word for word in all three"*),
`rules_primer.md:427` (*"three books of four"*). ⚠️ **The corpus disagreed with itself in four places, and
the three that were RIGHT were the ones nobody had touched.**

### MAJOR 2 — the counterweight reached the prose and not the voiced cell

**`:1311`, the Roughing row, is the COMPRESSED FORM of the exact sentence the repair was dispatched to fix,
and the fix did not reach it.** ⚠️ **The row is voiced in spoken chunk 119; the counterweight lives in chunks
126–127 — several minutes of audio later.** **Heard alone, chunk 119 licenses the original Major verbatim.**

⚠️ **THE REVIEWER FOUND IT ONLY BY DUMPING ALL 184 CHUNKS AND READING THE TABLE'S OWN CHUNK: *"the
Roughing-row Major only fell because I dumped all 184 chunks and read the table's own chunk instead of
trusting the section."*** **A section-level read would have missed it, and did — twice.**

### What the reviewer UPHELD, which matters as much

- **The scope correction is right, and verified in BOTH directions.** USA Hockey states the hands/forearms
  exclusion **three** times, not twice — so the corpus's *"twice over"* is **conservative**, not wrong. The
  NHL genuinely writes no positive definition (`trunk of the body` 0, `legal body check` 0, and all six
  `forearm` hits are elbow-pad dimensions and penalty signals). Hockey Canada prohibits rather than defines.
  **"Two books of the four" holds.**
- **`facts:1293` should stay at 300/300 exactly as it is** — and the reviewer gave a BETTER reason than the
  repairing agent had: it is symmetrically silent about the strength move **for all four books**, so unlike
  `:1308` and `:1327` **it creates no false contrast.**
- Hockey Canada writes *facial protector*, not *facemask* — **so the corpus's attribution is a correct
  translation, not an inference.**
- **The tripping disclosure was ATTACKED, not assumed:** the IIHF Situation Handbook's only Rule 57 situation
  has the fouled player actually fall, so it does not reach the stumble case. *"Neither book says which
  governs"* holds.

---

## ⚠️ THE REVIEWER'S OWN NEGATIVE FINDING WAS A FALSE NEGATIVE — caught by the agent it was sent to

**`safety-reviewer` filed a Minor saying the NHL and IIHF write NO facemask-grab offence, so a British reader
gets no price at all, and proposed adding: *"neither the NHL nor the IIHF writes a facemask rule of its
own."*** ⚠️ **The repairing agent refused it and was right. Verified independently by the coordinator:**

| book | *"grabbing hold of a face mask"* | control |
|---|---|---|
| **NHL 75.2(ii)** | ✅ *"guilty of unsportsmanlike conduct including, but not limited to hair-pulling, biting, **grabbing hold of a face mask**, etc."* | `penalty` 1451 |
| **IIHF 75.2(II)**, BOTH editions | ✅ *"hair-pulling, **grabbing hold of a face mask**, banging with a stick…"* | 1215 / 1289 |

**The NHL's index confirms it: *"Grabbing face mask … 75.2, Table 6"*, and both books route a serious one to
Rule 21.**

⚠️ **THE OFFENCE EXISTS. It simply is not a DEDICATED facemask rule — it sits inside the unsportsmanlike
conduct list.** **The reviewer searched for facemask terms, found the 13-of-18 hits that are goaltender
equipment, and read the absence of a dedicated rule as the absence of an offence.**

⚠️ **THAT IS THE SAME ERROR CLASS FOR THE THIRD TIME IN ONE ROUND** — after my *"Hockey Canada writes no fend
off"* and the `rules_primer.md:892` row. **Each time: a search for a NAME returned nothing, and the absence
of the name was read as the absence of the THING.**

⚠️ **AND THIS ONE WOULD HAVE SHIPPED A FALSE NEGATIVE INTO SAFETY TEXT.** **The document ends on *"Never
touch a facemask."* The proposed clause would have told every British reader that their own book is silent
on precisely that — a hazard the corpus exists to close.** **`rules_primer.md:427` already had it right.**

**A second refutation from the same agent, same shape:** the brief (mine, carried from the reviewer) said the
phrase *"fend off"* is NHL and IIHF **only**. ⚠️ **USA Hockey's Casebook uses it verbatim — Standard of Play
Situation 6, count 1 against a 1892 control** — and `puck_handling.md:990` already said so, calling it *"the
NHL's own phrase"*. **The word *"only"* was dropped from both `:1308` and `:1327` rather than written in.**

**Net: `check_facts` 830 blocks / 5,491 facts **at the time of that run — see D10: this figure moves with every repair, so run `check_facts.py` rather than quoting this line**, all gates pass, and the §12 table still reads aloud at 16
chars of headroom — the approved trade, bought deliberately to put the counterweight in the voiced cell.**

⚠️ **THE STANDING LESSON, now earned three times in one round: NEVER CONCLUDE A RULE IS ABSENT FROM A
STRING SEARCH. Search by concept, then confirm the wording. A negative from a reviewer is not safer than a
negative from a dispatcher — this round, the reviewer's was the one that would have shipped.**

---

## Coverage of every staged path — written because `commit-gate` blocked on files this record never named

⚠️ **The gate found THREE staged content files and FIVE staged `site/src/**` files mentioned NOWHERE in this
record.** ⚠️ **`skating.md` was the one that bit: it adds a new body paragraph AND an entirely new `Rules`
Sources trailer carrying two fresh rulebook quotations and a negative claim — and no reviewer named it.**
**The gate verified the two quotations itself and said plainly: *"my check is a gate check, not a review."***
**`rules-verifier` has been dispatched on `skating.md`, `breakouts.md` and `risk_management.md` to close it.**

| staged path | covered by |
|---|---|
| `body_contact_and_battles.md` | D11 ×2 (`safety-reviewer`), then `commit-gate` C11 re-derivation of every quotation + a 186-chunk renderer read |
| `offensive_zone_play.md`, `shooting.md` | D5 (`source-verifier`, 7 fetches) + coordinator census |
| `rules_primer.md`, `equipment.md`, `forechecking_systems.md`, `game_management.md`, `puck_handling.md` | earlier round-63 review waves, recorded above |
| ⚠️ `defender.md` | ⚠️ **NOT those waves — its boarding text is the REPAIR of the critical they found, so it postdates them. Aligned with the corrected sibling, then `safety-reviewer`ed (TWO CRITICALS), then repaired again. See *"The sixth block"* below.** |
| ⚠️ `defending_the_rush.md` | ⚠️ **THE OWNER, and it still stated the uncorrected claims while both its satellites had been fixed. `commit-gate` established it is STAGED with `:212` on a MODIFIED line, so C7 reaches it. Repair dispatched.** |
| ⚠️ `switching_positions.md` **and its two new captions** | ⚠️ **NOT COVERED BY THOSE WAVES — the passage at issue is the REPAIR of the critical they found, so it did not exist when they ran. The row that credited them CERTIFIED REVIEW OF TEXT THAT DID NOT YET EXIST.** `rules-verifier` and `safety-reviewer` dispatched on it after `commit-gate`'s fourth block. |
| ⚠️ `skating.md`, `breakouts.md`, `risk_management.md` | **WERE UNCOVERED — `rules-verifier` dispatched** |
| `site/src/diagrams/switching_positions.mjs`, `body_contact_and_battles.mjs`, `game_management.mjs`, `index.mjs` | ✅ **RE-REVIEW DONE.** `diagram-reviewer` rendered and viewed both repaired diagrams at 1800 px and 360 px, found **three Majors**, all repaired — see *"The diagram repair refuted EIGHT things"* below. ⚠️ **The caption layer was then repaired AGAIN after `commit-gate`'s third block; that repair is with `rules-verifier` and `safety-reviewer`.** |
| `site/src/styles/global.css` | D15 browser pass verified the rule; **the later edit is COMMENT-ONLY — see below** |
| `site/src/data/diagrams.json` | build product. ⚠️ **The staged copy is 02:59:57 — regenerated TWICE more since, after the caption repairs. The earlier "byte-identical at 00:42" note described a superseded file.** Verified independently by the gate: all three changed modules re-imported and compared, **9 caption/`describe` units, 0 mismatches**, and `check_absolutes` certifies 288 units against it. |
| `project/**` | coordinator; not corpus content |

### C11 evidence for `global.css`, because the gate could not evaluate it and said so

⚠️ **The gate wrote: *"I cannot determine whether the 00:36 edit was comment-only… A condition I could not
evaluate is a condition that failed."* That is the right call and the evidence it needed is this:**

⚠️⚠️ **RETRACTED. THE EVIDENCE I GAVE THE GATE WAS ITSELF A FALSE PASS, AND `site-reviewer` CAUGHT IT.**

**I ran this and reported IDENTICAL:**
```
git show HEAD:site/src/styles/global.css | sed -n '/@media (min-width: 60rem)/,/^}/p' | head -8
git show :site/src/styles/global.css     | sed -n '/@media (min-width: 60rem)/,/^}/p' | head -8
  -> IDENTICAL
```
⚠️ **`sed` prints EVERY matching range, and `head -8` truncated both to the FIRST block — which was
unchanged. The rule at issue is a SEVENTH block sixty lines further down that I never compared.**

**Measured properly:** `@media (min-width: 60rem)` occurs **6 times in HEAD and 7 in the index**;
`figure.diagram--full .diagram-scroll svg` occurs at `:2019` and `:2147` in HEAD, and at `:2019`, **`:2082`**
and `:2211` in the index. ⚠️ **THE MEDIA QUERY IS NEW IN THIS COMMIT. The file is NOT comment-only.**

**C11 is satisfied anyway — but for a different reason than I gave.** `site-reviewer` refused the premise,
tested the rule from scratch in a real browser, and **every one of the seven predicted column widths
reproduced exactly** (320→640, 375→640, 960→592, 1008→640, 1248→600, 1280→632, 1440→792), with zero overflow
at 960/1248/1280 and the 640 floor intact below 60rem. **The rule is verified. My evidence for it was not.**

⚠️ **THE TRANSFERABLE LESSON: `diff` said IDENTICAL and it was telling the truth about the wrong two things.**
**A `sed` range plus `head` is a silent truncation, and it produced a confident false pass that I then wrote
into a review record and handed to two agents as an established fact.** ⚠️ **`grep -c` would have caught it
in one line — the counts differ, 6 against 7. When comparing "did X change", COUNT THE OCCURRENCES FIRST;
never compare the first match of a pattern that can match more than once.**

### ⚠️ And the gate caught a false negative in its own grep, which is a NEW class

**It searched both IIHF books for `grabbing hold of a face mask`, got ZERO, and nearly blocked on it.**
⚠️ **The phrase is there — LINE-WRAPPED between `face` and `mask`.** *"Had I stopped at the string search I
would have blocked on a false negative — the exact trap the record documents three times."*

⚠️ **This is a DIFFERENT book from the `fend off` wrap already recorded at Casebook 18431, so the existing
note does not cover it. → `sources/README.md` must gain the line-wrap class.** **Before reporting any phrase
absent from an extraction: collapse whitespace (`re.sub(r'\s+',' ',text)`) and search a short distinctive
fragment, never the full phrase.**

---

## D1 — `rules-verifier` on the three files the gate found uncovered

**`breakouts.md` CLEAR** (terminology repair, no rulebook claim; both cross-references verified against
their targets, and `special_teams.md:178` already carried the same warning from the other side, so the two
documents now agree rather than conflict). **`risk_management.md` CLEAR** (the 2→3 enumeration is right:
one Sportlogiq figure plus two computed from the play-by-play feed; the 10–15% / 2–4% pair is correctly
excluded because the sentence scopes itself to share-of-goals figures).

**`skating.md` NOT CLEAR — three defects in one sentence of the new trailer, and all three run in the
direction nobody stops on.**

| the trailer said | the books say |
|---|---|
| Appendix VI's infographics *"are images and do not extract as text"* | ⚠️ **FALSE.** Six positive controls fire (`Width = 2600 to 3000` ×3, `ALL MEASUREMENTS IN CM` ×14…), and a 170 dpi render of book page 222 matches the extraction. ⚠️ **`rink_map_and_glossary.md` — the owner `skating.md` itself names — QUOTES that text at `:51`, `:65` and `:763`. The document said its own owner could not have done what it did.** |
| IIHF 1.9 gives the neutral-zone spots *"a width-dependent placement in terms"* | ⚠️ **BACKWARDS.** The clause FIXES the spacing at 14.0 m and requires symmetry. **The NHL prints the identical construction at 44 ft in a SINGLE-WIDTH book** — a clause that appears verbatim in a one-width book cannot evidence width-dependence. |
| *"nothing is claimed here about the slot changing size with the sheet"* | ⚠️ **The appendix settles it.** The chain `(800) 700 / 700 (800)` puts the end-zone spots **7.00 m either side of the long axis on every legal width**; only the residual to the boards varies. **A wider rink adds its width OUTSIDE the circles, not inside them — the slot does not widen.** |

**The half of the claim that HELD:** IIHF Rule 1.9's *prose* really does not position the end-zone spots —
attacked three ways, including that `End-Zone Face-off Spot` appears **exactly once** in the whole book, in
the naming sentence. **The NHL's 1.9 does position them.** That asymmetry is real and is kept.

### ⚠️ AND A WIDTH RANGE IS NOT AN INTERNATIONAL PROPERTY

**USA Hockey 102(a) recommends 185–200 ft × 85–**100 ft**; Hockey Canada 1.2(a) the same.** ⚠️ **100 ft is
fifteen feet wider than an NHL rink and wider than ANY legal IIHF sheet.** **So the two North American
amateur books — the ones most readers actually play under — set a WIDER range than the IIHF.**
**Both word it as a *recommendation* where the IIHF states an official size with deviations requiring
approval; that distinction is kept, not flattened.**

**Corpus census (mine, after the repair, closing the agent's declared gap): `100 ft` appears NOWHERE in the
corpus except the three new lines in `skating.md`.** ⚠️ **And `defending_the_rush.md:212` carries the SAME
uncorrected framing — repair dispatched, because shipping it would leave the corpus contradicting itself
inside the round that fixed it.** **`rink_map_and_glossary.md`, the owner, carries neither rule; filed
against the owner.**

### The repair caught two defects in its own draft before shipping them

⚠️ **It first cited `usahockey.com/playingrules` — which this corpus already records as a hard 404,
re-checked 1 September 2026 (`getting_started.md:557`).** **Removed.** **And it first glossed Hockey
Canada's `30.48m(100 ft.)` spacing as *"the book's own"* — then found no Hockey Canada PDF exists in
`sources/` to render, so it could not know. Gloss removed, quotation left verbatim as printed.**

**A number it deliberately did NOT resolve:** the drawing's half-width reads `1250 to 1500` where half of
`2600 to 3000` is 1300 to 1500. ⚠️ **2 × 1250 = 2500 ≠ 2600. Carried into the trailer as unresolved rather
than papered over, with a note that the 700/700 chain does not depend on it.** **The IIHF Rink Guideline
that might settle it is referenced at Rule 1.10 and is NOT in `sources/`.**

**Trailer confirmed to reach ZERO spoken characters through the real renderer** — so everything a listener
needs is in the body, which is where the fix went.

### The parallel site was aligned, and the repair found a disclosure ITS OWN EDIT had falsified

**`defending_the_rush.md:212` now carries the same substance as `skating.md:549`, in its own wording** —
*"A width range is not an international peculiarity, and wide ice is not a foreign thing… What separates
them is force rather than width… So how much the wall is worth to you is a question about the building you
are standing in, not about which country's book you play under."*

**Both protected passages verified BYTE-IDENTICAL in the word-diff:** Hockey Canada's Interpretation 1 to
Rule 7.3(a) (the safety counterweight that was a critical earlier this round) and the British counterweight.

### ⚠️ THE CATCH THAT MATTERS: an edit can FALSIFY A DISCLOSURE, and no checker sees it

**That document's Sources trailer read: *"Hockey Canada and USA Hockey were not read for dimensions, and
nothing here is a claim about what either specifies."*** ⚠️ **TRUE WHEN WRITTEN. FALSE THE MOMENT THE EDIT
LANDED** — the repair's whole content is a claim about what both specify.

**The agent found it and narrowed the disclosure rather than deleting it**, recording the 4 September read
with both rules quoted and the limit that survives: *"Neither book was read here for any dimension other
than width."*

⚠️ **THIS IS A NEW FAILURE SHAPE FOR THE RECORD.** Non-negotiable 4 says never STRIP an honest disclosure;
round 59 established that disclosures must be TESTED. **This is a third thing: a disclosure that was honest
when written and is made false by a later edit to the same file.** ⚠️ **`check_disclosures.py` cannot see it
— it reports the claim, not whether the document still earns it — and no other gate looks at trailers at
all.** ⚠️ **Every scope disclosure in the corpus is exposed to this, and the more thorough a repair is, the
more likely it is to invalidate one.**
**→ Standing rule for any repair that adds a source: RE-READ THE FILE'S OWN TRAILER before finishing.**

### Two more self-caught drafts, and one brief quotation corrected

- ⚠️ **The renderer caught a stutter in its own first draft.** Quoting USA Hockey's *"eighty-five (85') to
  one hundred feet (100') wide"* voices as ***"eighty-five (eighty-five feet) to one hundred feet (one
  hundred feet) wide"*** — the parenthetical expansions duplicate the words they gloss. **Body now uses
  plain figures; the verbatim quote lives in the unvoiced trailer.** **A form that is correct on the page
  and broken in the ear.**
- ⚠️ **My brief mis-quoted Hockey Canada.** I passed through `30.48m (100 ft.)`; **both extractions read
  `30.48m(100 ft.)` with NO SPACE — a PDF kerning artefact.** **The agent quoted what is printed and flagged
  the artefact rather than silently inserting a space into a verbatim quotation.**

---

## D15 — the browser pass on a build that finally covered the tree

**No criticals. No majors. 49 routes × five viewport/theme configurations = 245 page-loads, in real headless
Chrome over CDP.** ⚠️ **The Chrome extension was blocked for the FOURTH round running** (*"Could not verify
this site's safety category"*), so the dimension was checked but **not through the tool the review process
nominally uses**, and the reviewer says plainly that CDP and the extension could disagree.

**Zero across every sweep:** console errors, warnings, uncaught exceptions, failed loads, responses ≥400,
and requests to any host but `localhost`. **830 facts panels render; 0 `language-facts` blocks leak; 447
callouts carry glyph + border + tint, so meaning is never colour-alone.** **Contrast passes 4.5:1 on 18
element classes × 2 themes**, lowest 5.03. **No-flash verified empirically** — eight samples at 60 ms from
navigation, all dark, with OS light and storage dark.

⚠️ **It verified the anchors with its OWN parser rather than trusting the build: 10,388 internal hrefs,
5,531 with a fragment, 0 broken — matching `check:links`'s independent count of 5,531 exactly. Two parsers,
one number.**

**The media query reproduced in a browser at every width the comment predicts** — 320→640, 375→640, 960→592,
1008→640, 1248→600, 1280→632, 1440→792, zero overflow at 960/1248/1280, and **0 of 45** `diagram--full`
figures inside a narrower container. **The corrected count of 45 holds.**

### ⚠️ AND IT REFUTED TWO OF MY PREMISES

- ⚠️ **`global.css` is NOT comment-only** — retracted and corrected above. **The reviewer refused the premise
  and tested the rule from scratch.**
- ⚠️ **The §12 table is TWO columns, not three.** The 3-column table is `:60`. ⚠️ **And a THIRD table exists
  on the rendered page that no `startswith('|')` source scan can see: a 4-column table inside an
  `<aside class="callout-note">`.** **`check_tables.py` documents that it cannot see tables inside
  blockquotes; the CALLOUT case is undocumented and uncensused.**

**The table itself passes:** 375 fits entirely, 320 scrolls inside its own container with document overflow
0, **zero cells clipped at any width**, and the new ⚠️ high-sticking cell renders with the full amber
treatment.

**Two false positives the reviewer produced and reported against itself:** a JS `.focus()` showing
`outline-style: none` because it does not trigger `:focus-visible` (real `Tab` shows the ring), and a nav
anchor measured before diagram layout settled.

⚠️ **AND IT CAUGHT THE TREE MOVING UNDER IT — the same shape that blocked this commit once already.**
`git diff --name-only content/` was empty when it started and was not when it finished: `skating.md` and
`defending_the_rush.md` were written mid-pass by other agents. **Its review covers the staged tree exactly
and remains valid for it — but a full rebuild was required before the gate could see the same tree, and that
is why one was run.**

---

## The diagram repair refuted EIGHT things, including the reviewer that dispatched it

**All three Majors repaired. The caption is now instantaneous and matches its `describe`; the rules block is
in the SECTION with all four books quoted from primary text; the clearance figures are re-derived against
total ink.**

⚠️ **AND IT REFUTED THE REVIEWER'S OWN CORRECTION, IN THE SAME DIRECTION THE REVIEWER WAS CORRECTING.**
The reviewer replaced a stroke-only clearance with *"1.06 ft to the hash mark's painted edge"* — **that
figure is the ARROWHEAD ALONE. The route STROKE is nearer: 0.86 ft to the hash centreline, 0.71 ft to the
paint.** ⚠️ **A correction for "stroke instead of total ink" under-counted by measuring the head instead of
total ink. Fourth measurement of that quantity, third wrong one, and BOTH figures are now recorded in the
module with the trap named.**

**Seven more, all verified against the built SVG or the primary text:**

| brief said | measured |
|---|---|
| arrowhead 3.4 ft long | **3.15 ft** along the terminal tangent; 3.4 is the tip-to-barb diagonal |
| *"~7 ft, so a 4–5 char label would clear"* | **7.0 ft is EXACT** (`2 × (29 − 25.5)`), and on `placeLabels`' own metric five characters is **7.84 ft and IS struck**. ⚠️ **The original *"five or more"* was accidentally RIGHT; only its mechanism was wrong** |
| section says *"one instant"* | **zero occurrences in the markdown** — that is caption 1's phrase |
| goaltender clearance 42.59 ft | **42.54** exact; the module's stated 42.1 re-derives from nothing |
| terminal tangent (0.985, 0.174) | ⚠️ **there are TWO terminal tangents and the brief named the less relevant one.** The head is drawn along the BASE CURVE's, **(0.981, 0.196)** |
| puck start-tangent offset 5.23 | tangent is **(0.845, 0.535)**, offset **5.56** — the stated pair was doubly wrong |
| *"put the claim in body AND facts block"* | ⚠️ **NOT AVAILABLE — that block is 11/11 against `HARD_MAX`.** Body only, and flagged |

### ⚠️ AND IT FOUND WHAT NEITHER OF US HAD: the drawn route fails its own board rule

**It reimplemented `wavePath` + `arrowHead` in Python and reproduced the built SVG EXACTLY — 163 points,
identical triangle — then re-ran the module's sweep with the head counted.** **Nothing past x = 65 against
the arc plus 4 ft off boards, where the module claimed x = 68.**

⚠️ **The route as drawn sits 3.65 ft off the dasher against its own stated 4 ft rule.** **The corridor is
5.5 ft at the dot line and the board rule leaves 1.5 ft for a 3.0 ft head — so every admissible alternative
buys hash clearance by giving up arc clearance, and the only endpoint satisfying both clears the paint by
0.11 ft, which is WORSE to the eye.** ⚠️ **NOTHING DOMINATES WHAT IS DRAWN, so it was not moved — recorded
in the module rather than left silent, with the real remedy named as the wave amplitude in `rink.mjs`, which
this module does not own.**

**That is the correct handling of a defect you cannot fix: measure it, prove no available option is better,
write it down where the next editor will hit it, and name the owner of the real fix.**

---

## ⚠️⚠️ THE THIRD GATE BLOCK — a SECOND fabricated divergence, written after the lesson about the first

**`commit-gate` blocked a third time on new text, and this is the round's most important finding.**

**The claim, in the BODY at `switching_positions.md:193` and in the `forcing-them-outside` CAPTION, VOICED
IN TWO SEPARATE CHUNKS:** *"Hockey Canada 7.2 writes **unsuspecting** where those two write
**defenseless**."*

| Hockey Canada | wording |
|---|---|
| **Rule 7.2(a), the clause that ASSESSES THE MINOR** | *"checks or pushes a **defenseless** opponent…"* — ⚠️ **NHL/IIHF 41.1 word for word.** The only occurrence of `defenseless opponent` in the book |
| the **unnumbered definition** | *"…an **unsuspecting** opponent…"* — and it also reaches defencelessness: *"The duty is on the Player applying the check to ensure their opponent is not in a defenseless position."* |
| the **Glossary** | *"**defenseless or unsuspecting**"* — **wider, not narrower** |

⚠️ **THE SAFETY INVERSION: a Hockey Canada reader was told, twice, in a passage about riding a carrier into
the boards and immediately after *"only while they can see you coming"*, that their book's protection turns
on the opponent not seeing it coming. 7.2(a) reaches a defenceless opponent regardless.**

### The chain is the finding

**This is the SECOND fabricated divergence of the round.** The first was the arm strength move. ⚠️ **The
lesson about it is written at length in THIS FILE — and this defect was authored by the repair dispatched
AFTER that passage existed.**

⚠️ **BOTH were written by a repair agent adding a BOOK COMPARISON THE FINDING NEVER ASKED FOR.** The finding
was *"a caption outclaims its section."* The repair answered with a four-book boarding comparison — **scope
no review had covered, which is exactly why C11's terminating rule voided the clearance.**

**→ A REPAIR THAT ADDS A FOUR-BOOK COMPARISON IS A RULES CLAIM AND NEEDS `rules-verifier`, EVERY TIME.**

### ⚠️ AND THE REPAIR SHARPENED THE FINDING RATHER THAN JUST FIXING IT

**The gate cited `defender.md:789` — staged in this same commit — as the correct statement of the
distinction.** ⚠️ **The repairing agent checked and found it is in that document's SOURCES TRAILER, a layer
that is NEVER VOICED.**

⚠️ **So the corpus's one correct statement of this distinction lived in the only layer no listener reaches,
while BOTH wrong statements were spoken.** **That is worse than the gate's version of the finding, and it was
found by refusing to take the gate's framing.**

**Two more refutations:** the caption is **666 words, not the 602 I briefed** (measured two ways, both by
regex and by importing the module); and its own first draft was **withdrawn mid-repair** for manufacturing
caption/prose drift — *"the body does not make that claim"* — which is the style guide's caption rule 2,
refused by the author before any reviewer saw it.

⚠️ **It also caught a CHUNK BOUNDARY landing immediately after its new sentence, opening the next spoken
chunk with the dangling anaphors *"That word…"* and *"the same Rule 7.2 definition…"*. Both rewritten to name
Hockey Canada explicitly, and re-rendered to confirm.** **`md_to_speech` splits by length, so any edit can
re-cut the chunks around it — a correction can strand the sentence after it.**

### The gate's own statement of what it could not have found — the sentence that should shape round 64

⚠️ ***"I found the Hockey Canada defect only because two staged files disagreed with each other; a
single-document version of the same error, with no sibling to contradict it, would have passed every
condition here."***

**Self-contradiction is currently this corpus's most reliable detector for fabricated divergence. An error
made ONCE, in a document with no sibling, has NO detector at all.**

---

## ⚠️ THE FOURTH GATE BLOCK — the round's own lesson, not applied to the text it was written about

**`commit-gate` blocked a fourth time. B2 is the one that matters, and it is a process failure, not a
content one.**

⚠️ ***"The record itself writes the governing rule — 'A REPAIR THAT ADDS A FOUR-BOOK COMPARISON IS A RULES
CLAIM AND NEEDS `rules-verifier`, EVERY TIME' — and it was not applied to the text that lesson was written
about."***

**The whole "Forcing them outside" passage is NEW this round** — both bullets replaced, a third added, five
new facts values, a new Common Mistakes bullet, and two diagrams that **do not exist in HEAD at all**. **It
was written by repair agents. Two successive versions shipped a fabricated rule-set divergence. No
`rules-verifier` and no `safety-reviewer` has ever covered it.**

⚠️ **C11's terminating rule does not save it: the last repair QUALIFIES — confined to the finding,
re-derived from primary text, recorded — but there is NO CLEARANCE FOR IT TO PRESERVE.** **Both dispatched.**

### B1 — the repaired caption states a four-book test one book does not require

**The caption glosses boarding, in all four books, as *"a check or push on a defenceless opponent, violently
or dangerously into the boards."*** ⚠️ **USA Hockey 603's BASE sentence has no defencelessness element** —
*"Boarding is the action where a player pushes, trips or body checks an opponent causing them to go
dangerously into the boards"* — **and its *"This includes"* list is ILLUSTRATIVE, not exhaustive.**

⚠️ **`rules_primer.md:418`, STAGED IN THIS SAME COMMIT, says so in terms: *"which catches a fully aware
opponent."*** **Third time this round the corpus has caught itself only by disagreeing with itself.**

⚠️ **AND THE DIRECTION IS THE DANGEROUS ONE. This does not merely fail to correct the known
`defending_the_rush.md:20` defect — HEARD COLD IT CORROBORATES IT.** **A reader who checks a fully aware
opponent dangerously into the boards is now told in THREE voiced places that it is permitted.** **The
round-64 row must name three carriers, not two.**

**The body at `:193` is safer — it says USA Hockey 603 *"reaches"* the accelerating clause, which is
inclusive and true — but it still picks the narrowest limb as USA Hockey's contribution and does not carry
`:418`'s correction.** ⚠️ **So the CAPTION OUTCLAIMS THE BODY BY COMPRESSING IT**, which is a failure mode
nobody had named: **compression alone can turn a true inclusive statement into a false exhaustive one.**

### B3 — my coverage table certified review of text that did not exist

**Fixed.** It credited `switching_positions.md` to *"earlier round-63 review waves"* — **but the passage at
issue is the REPAIR of the critical those waves found, so it postdates them.** ⚠️ **A coverage table is the
one artefact whose whole job is to say who checked what, and mine asserted a review of text that had not
been written when the review ran.**

**Also fixed: the `diagrams.json` row described a file superseded twice over, and the diagram re-review row
still said *"dispatched"* when it had completed and found three Majors.**

⚠️ **AND THE FACT COUNT WENT STALE FOR THE THIRD TIME — 5,477 → 5,489 → 5,491 as the round's own repairs
added values. NO COUNT IS WRITTEN IN THIS RECORD ANY MORE; the owner is `check_facts.py` and the record now
says so.** **Exactly the failure CLAUDE.md documents at length, committed inside the record that documents
it, twice, and caught by the gate both times.**

### What the gate verified so the reviewers need not repeat it

**All sixteen quotations in the passage re-derived from `sources/` and ALL HOLD** — HC 7.2 lead / 7.2(a) /
duty clause / glossary in both extractions, NHL 41.1, IIHF 41.1, USAH 603, 604(a), 604(c), HC 7.3 and 7.3(a),
IIHF 101.1, IIHF 1.2, NHL 1.2, IHUK Rule 1, EIH 22.2, NHL 25.1, NHL 57.4, IIHF 25.1, IIHF 24.8, USAH 616(a)
and 616(b), HC 4.11(a)(i), HC 4.12(a). **Both constructed divergences tested independently and BOTH ARE
REAL.**

⚠️ **AND THE GATE NAMED ITS OWN LIMIT PRECISELY: *"I can tell you the passage quotes its books correctly; I
cannot tell you it REASONS about them correctly — and both of this round's fabricated divergences were
reasoning failures sitting on top of correct quotations."***

---

## ⚠️⚠️⚠️ D11 ON THE REPAIRED PASSAGE — A CRITICAL, AND THE PATTERN IS THE FINDING

**`safety-reviewer` on the passage `commit-gate` said no reviewer had ever seen. It was right to block.**

### ⚠️ THE PATTERN, WHICH MATTERS MORE THAN ANY ONE FIX

**The module's own comment records that version 1 and version 2 of this caption each shipped a FABRICATED
RULE-SET DIVERGENCE.** ⚠️ **Version 3 corrected that by asserting a SHARED STANDARD — and shipped a
FABRICATED CONVERGENCE.**

⚠️ ***"Same defect, opposite sign."*** **The comment's closing instruction — *"do not put a rule-set CONTRAST
back in here without checking the clause that imposes the penalty"* — needs its converse written beside it:
DO NOT ASSERT A SHARED CLAUSE WITHOUT CHECKING ALL FOUR BASE SENTENCES.**

### CRITICAL — the caption DEFINES boarding as requiring a defenceless opponent

**Voiced, chunk 21:** *"…is boarding in all four books: **a check or push on a defenceless opponent**,
violently or dangerously into the boards."* ⚠️ **The colon makes it a DEFINITION, not an example.**

**It is wrong in all four books, and the disproof is one clause the round had not looked at:**

⚠️ **NHL 41.1, IIHF 41.1 and Hockey Canada 7.2's preamble ALL carry, verbatim:** *"Any unnecessary contact
with a Player playing the puck on an obvious **"icing" or "off-side" play** which results in that Player
hitting or impacting the boards is "boarding" and must be penalized as such."* **A player skating flat out at
a puck on an icing race is not, in any ordinary hearing, someone *"who cannot protect themselves"* — and all
three name that exact case as boarding.** **USA Hockey reaches it separately at 624(d).**

**And USA Hockey 603's base sentence asks no defencelessness question at all.**

⚠️ **ALL FOUR PUT THE ONUS ON THE CHECKER, AND THE CAPTION DROPS IT.** NHL 41.1: *"The onus is on the player
applying the check to ensure his opponent is not in a defenseless position and if so, he must avoid or
minimize contact."*

### CRITICAL — a checking-classification reader is given NO limit in any summary layer

**The facts block, Common Mistakes and Key Takeaway 6 state ONLY the classification bans.** ⚠️ **A reader in
a checking classification hears that none of them is them — and then hears nothing.** **Body ✓, facts ✗,
Common Mistakes ✗, Key Takeaways ✗. That is the round-10 critical shape exactly.**

⚠️ **AND IT VOIDS THE EARLIER RULING. A previous gate accepted the empty facts block because
`defending_the_rush.md` owns the material in six layers. That owner states the limit WRONGLY at `:20`,
`:197`, `:213`, `:376`, `:390`, `:839` and Key Takeaway 4.** ⚠️ ***"Delegating a safety limit to a document
that will tell the reader the limit only applies to opponents who cannot see you coming is not delegation,
it is a redirect to the defect."*** **This passage points at that document EIGHT times.**

**On the 11/11 cap, the reviewer did NOT ask for a caveat to be dropped:** two of the eleven carry one idea
(`:182` the wall's value varies with width, `:183` do not assume yours is wide) and merging them inside the
300-char qualified cap frees a slot. ⚠️ **If that merge is unacceptable, then the 11-fact ceiling on this
section IS the finding, and the section changes, not the warning.**

### CRITICAL — USA Hockey 604(a)'s list is stated as exhaustive, and FIVE siblings already know better

⚠️ **604(a)'s very next sentence: *"A local governing body may prohibit body checking in any classification…"*
and 604(b): *"Any time a team from a Competitive Contact category plays a team from a Body Checking
category, body checking shall be prohibited."*** **Absent from EVERY layer of this passage.**

⚠️ **`center.md:603`, `defender.md:216`/`:229`, `defensive_zone_coverage.md:478`, `offensive_zone_play.md:791`
/`:835` and `body_contact_and_battles.md:50`/`:52`/`:80`/`:81` all carry the floor-not-a-ceiling clause, two
of them in their facts blocks. A NEW document in `content/positions/` dropped a convention nine sibling
sites already keep.**

### Majors

- **`:193`'s *"USA Hockey 603 **reaches** [accelerating through the check…]"*** presents an item from an
  illustrative *"This includes"* list as the rule's scope. ⚠️ **Contradicts `rules_primer.md:418`, staged in
  the same commit.**
- ⚠️ **CHECKING FROM BEHIND APPEARS IN NO LAYER** — in a passage whose entire subject is the delivering side.
  **USA Hockey 608 reaches contact *"directly from behind, or diagonally from behind… or directly into the
  boards"*, with 608(b) a major plus game misconduct where a player is caused to go head first.** ⚠️ **A
  steered carrier is very often shielding the puck with his back partly turned when the defender arrives —
  and this document teaches the RECEIVING side of that collision superbly at `:451`, and the delivering side
  not at all.**
- **The chunk 18/19 boundary splits the narrowing from its counterweight.** Chunk 18 states the
  *"defenseless opponent"* formula THREE times and ends on *"wider than the operative clause, not
  narrower"*; the onus duty and the USA Hockey clause open chunk 19, minutes later.

### Upheld, and not to be trimmed

**The *"unsuspecting is not a softer standard"* passage is CORRECT** — the previous repair's fix holds.
**Steering-is-legal is upheld** against USA Hockey 604's Note (*"Competitive Contact hockey does not mean
'no contact'"*). **IIHF 101.1, HC 7.3/7.3(a), NHL 25.1 all verbatim.** ⚠️ **And `:451` / Key Takeaway 9 —
*"never your back to the wall, and never duck"* — is named the best safety writing in the document.**

---

## The passage took FIVE versions. The shape of the failures is the record.

| version | what it shipped |
|---|---|
| **v1** | a fabricated rule-set **DIVERGENCE** (the arm strength move) |
| **v2** | a fabricated **DIVERGENCE** again (Hockey Canada *"unsuspecting"*) |
| **v3** | a fabricated **CONVERGENCE** — *"same defect, opposite sign"* |
| **v4** | ⚠️ **NO fabrication of either kind.** Every quotation verbatim. Propagation gaps and one omission |
| **v5** | those closed; the only defects found were ones the repair **caught in its own draft** |

⚠️ **THE CURVE IS THE FINDING. Each review found real defects and none was invented — but the KIND changed:
invention → propagation → self-caught. That is what convergence looks like here, and it took five passes and
three separate reviewer dimensions to get there.**

### What v5 fixed, and one fix that is structural rather than positional

**CARHA 49(a) — an affirmative duty to AVERT contact, the inverse of the angling permission this passage
teaches — reached exactly ONE spoken layer.** ⚠️ **The Sources trailer carried it, and the trailer renders
to ZERO spoken characters.** **Now in three chunks: body, Common Mistakes, Key Takeaway 6.**

⚠️ **IIHF 101.1's grant and bar are now ONE SENTENCE.** The corpus had quoted *"Players are allowed to hold
their ground"* and not the next sentence — *"Any move by a Player to step or glide into an opposing Player
will be assessed at least a minor penalty for an 'illegal hit'."* ⚠️ **The repair's FIRST draft put them in
adjacent sentences and the splitter separated them into chunks 20 and 21 — the same defect. Fusing them into
one sentence makes the fix DURABLE: the splitter cannot cut inside a sentence.** **A positional fix would
have survived only until the next edit re-cut the chunks.**

**Hockey Canada 7.5 was absent from the whole document** (`grep -c "7\.5"` returned **0**) while every other
limb named Hockey Canada. **7.5(a) is a minor PLUS a game misconduct — no bare minor — and 7.5(c) reaches a
MATCH PENALTY on the corpus's own described fact pattern**, the preamble naming it exactly: *"a player along
the boards, with their head down looking for the puck… is hit from behind and driven head-first into the
boards."*

**And `:202` no longer nominates a defective owner.** It said `defending_the_rush.md` *"owns all four
books"* — true for penalty-shot rules, false for contact limits, and **a listener hears no scope**. ⚠️ **The
document it nominated instructs the opposite as a voiced `Action:` fact.** ***"The residual pointing IS
unsafe… worse than a stale link."*** **Narrowed to the subject it actually owns.**

### ⚠️ AND MY BRIEF'S FIGURES WERE WRONG FOUR WAYS, ALL UNDERSTATED

**Facts headroom (excluding label): `:179` is 292/300 (8 free, I said ~4) · `:181` 218/300 (82, I said 72) ·
`:182` 261/300 (39, I said 33) · `:183` 230/300 (70, I said 62).** ⚠️ **I also attributed `:179`'s "~4
chars" to the wrong line — the 4-char line is `:184`.** **Chunk numbers were off by one throughout, and Key
Takeaway 6 is `:520`, not `:512`.**

⚠️ **The 2,756-character chunk measurement matched EXACTLY, so the offset was in numbering only — which is
why a figure that reproduces is not evidence that the label attached to it is right.**

**The repair also caught a regression in its OWN work:** trimming a facts line to fit, it dropped *"in its
base sentence"*, **over-broadening a claim about USA Hockey 603 — whose ONUS sentence does say *"vulnerable
or defenseless opponent"*.** **Restored by trimming elsewhere in the same line.**

---

## ⚠️⚠️ THE FIFTH GATE BLOCK — I fixed one satellite and left the other saying the opposite

**`commit-gate` blocked a fifth time, and this one is a COORDINATION failure, not a content one.**

**The round-63 critical named TWO sites** — `switching_positions.md` and **`defender.md:348`** — as stating
*"the wall becomes a second defender"* with no counterweight. **Both were repaired. Only ONE was then put
through five review cycles.** ⚠️ **So this commit stages two documents that contradict each other, in the
permissive direction, on a safety rule.**

| `switching_positions.md` (v5, five review cycles) | `defender.md` **AS IT STOOD AT THE FIFTH BLOCK** (repaired once, reviewed by nobody) — ⚠️ **NONE OF THE THREE QUOTATIONS BELOW IS IN THE STAGED FILE ANY MORE; this column records the state the gate blocked, not what ships. See *"The sixth block"*.** |
|---|---|
| *"Defenceless is not the whole test"* | ⚠️ *"pushing a **defenceless** opponent into the boards is boarding in all four books"* — **the fabricated convergence, in a `Rule:` fact voiced alone** |
| the pointer to `defending_the_rush.md` for contact limits **REMOVED** on a reviewer's verdict that it *"IS unsafe… worse than a stale link"* | ⚠️ *"[Defending the Rush] **owns the full four-book comparison**"* — **a NEW pointer at the known defect** |
| *"…the claim there rests on the absence of a prohibition rather than on anything either book grants, **and that is an inference**"* | ⚠️ *"Steering a carrier to the boards with your route is legal in **every book**"* — **an inference labelled `Rule:`** |

⚠️ **AND THE SAME HALF-PROPAGATION: in `defender.md` the counterweight reached facts, body and the Sources
trailer — but NOT Common Mistakes, NOT Key Takeaway 2, and NOT the SECOND voiced facts block at `:671`.**
⚠️ **This record claimed at `:263` that the critical was fixed *"in all four layers + Sources trailer."*
TRUE OF ONE DOCUMENT. NOT TRUE OF THE OTHER THE SAME CRITICAL NAMED.**

⚠️ **AND MY COVERAGE TABLE MADE THE IDENTICAL ERROR TWICE.** The gate's fourth block caught it crediting
`switching_positions.md` to reviews that predated the text; **I fixed that row and left `defender.md`
sitting in the row beside it, credited to the very waves that PRODUCED the finding its text repairs.**
***"That is B3 verbatim, fixed for one row and left standing in another."***

### The transferable lesson, and it is CLAUDE.md's own rule

**CLAUDE.md says: *"check for contradictions between agents afterwards"*, and records that it was caught once
only because an agent diffed a whole file instead of trusting its own hunks.** ⚠️ **This is the same failure
at ROUND scale rather than file scale: when a finding names two sites, repairing one and reviewing it
thoroughly makes the corpus MORE inconsistent, not less, until the other is brought into line.**

**→ STANDING: when a finding names N sites, the repair is not done until all N are aligned AND the alignment
is checked by diffing them against each other. A review cycle spent on one of N raises the contradiction
risk for the other N−1.**

### What the gate cleared, and verified independently rather than taking from this record

**All sixteen load-bearing quotations in the v5 text re-derived from `sources/`** — CARHA 49(a) verbatim
including *"and/or does not avert body contact"*; Hockey Canada 7.5 preamble (ii), 7.5(a) *"A Minor penalty
and a Game Misconduct penalty"*, 7.5(c) *"A Match penalty"* (⚠️ **`grep -c "7\.5"` on that file is now 5,
against 0 before**); USA Hockey 603/603(a)/604(a)/(b)/(c)/608; NHL and IIHF 41.1, 43.2; IIHF 101.1 in full;
IHUK Rule 101 correctly located under *"Section 11 — Women's Ice Hockey"*.

⚠️ **THE GRANT-AND-BAR FUSION VERIFIED DURABLE IN THE RENDERED OUTPUT: chunk `020.ssml` carries the grant and
the step-or-glide bar in ONE SENTENCE, in ONE CHUNK. The splitter cannot cut it.**

**And it confirmed no spoken chunk carries the classification bans with no limit** — reaching that from the
rendered output rather than a string match, after I told it my own probe on the same question had been
wrong once.

---

## ⚠️⚠️ THE SIXTH GATE BLOCK — my scoping decision rested on a factual error

**I decided after the fifth block that boarding needed one corpus-wide round and that
`defending_the_rush.md` should WAIT, on the ground that it was *"pre-existing, outside this diff."***

⚠️ **THAT WAS FALSE, AND THE GATE CHECKED IT: the file is STAGED, with three hunks, and `:212` is a MODIFIED
LINE carrying *"Steering somebody there with your route is legal in every book."*** **C7 says *"every other
document that repeats the claim"* — this one repeats it and is in the index.** ⚠️ **A deferral I justified by
a property of the diff, without reading the diff.**

**So the commit was shipping two documents saying *"defenceless is not the whole test"* and their own OWNER
saying the convergence — `:213` in the body, and `:197`/`:202` IN THE VOICED `facts` LAYER, spoken alone with
a 300 ms break either side.** ⚠️ **That is the fifth block's defect, one file over, and my scoping decision
would have shipped it.**

**And it found a THIRD carrier I had not connected: `skating.md:549`, NEW text in this diff, points readers at
that document for exactly this material.** ⚠️ **I told the gate *"this commit no longer points at it for
contact limits from either file."* True of those two files. FALSE OF THE COMMIT — a third staged file
reintroduces the pointer a reviewer called *"worse than a stale link."*** **Both repairs dispatched.**

### The record was wrong about the file with the largest safety change in the diff

⚠️ **The comparison table at `:1299` quoted three strings from `defender.md` — *"legal in every book"*,
*"owns the full four-book comparison"*, the defenceless convergence — and the gate grepped all three:
NONE IS IN THE STAGED FILE.** **The record described a version that no longer existed.** **And the coverage
row still credited it to *"earlier round-63 review waves"* — the very waves that produced the finding its
text repairs.** ⚠️ ***"B3 verbatim, fixed for one row and left standing in another"*** **— and I had already
been told that once, about a different row, and fixed only that row.** **Both corrected.**

### C11 applied honestly: the last `defender.md` repair EXCEEDED its finding

**The gate's verdict, and it is right: the repair went beyond the two Criticals — it MERGED two `Technique:`
facts, ADDED two `Rule:` and one `Never:`, rewrote Common Mistakes and Key Takeaway 2, and inserted a NEW
RINK-WIDTH PARAGRAPH that no finding named.** ⚠️ **A merge and a new claim both void the clearance.**
**Its quotations were all re-derived and hold — including the corrected *"reasonably lean into each other"* —
but *quoted correctly* is not *reviewed*.**

### What the gate confirmed, and it is the thing the round was for

**It diffed the two siblings on all five axes and they now AGREE:** the defencelessness test, the angling
permission and its inference hedge, the Hockey Canada scope list, leaning under the 604(c) Note, and where
each points for tiers (**both now `rules_primer.md`**). **The `defending_the_rush.md` pointer is gone from
both.**

**Two residual gaps, neither a contradiction:** `defender.md` never mentions CARHA, so a beer-league reader
gets the permission with no hint their own book reverses it; and `defender.md:708` wobbles inside one
sentence, saying the inference *"does not reach women's play"* and then that *"the steer stays legal"* there.
**Both filed.**

### ⚠️ AND THE GATE NAMED THE HOLE THAT NO TOOL IN THIS REPOSITORY CLOSES

⚠️ ***"Only `:212` is on a `+` line; the three worst statements are context. I read them because you named the
file, not because the diff showed them to me. A DEFECT THAT IS CONTEXT IN EVERY HUNK OF EVERY COMMIT IS
INVISIBLE TO THIS GATE FOR EVER."***

**That is the strongest argument in the whole round for the corpus-wide boarding census, and it is why the
census is filed as a round rather than as a row.**

---

## The owner document was repaired, and the four documents now agree

**`commit-gate`'s seventh run verified this by diffing the STAGED BLOBS on all six axes, not by trusting the
record:**

| axis | state across `defending_the_rush.md`, `defender.md`, `switching_positions.md`, `skating.md` |
|---|---|
| icing-race book count | **three books + USA Hockey separately at 624(d)**, consistently |
| angling permission | **two of four, in terms**; NHL/IIHF labelled an inference or silence in all three |
| defencelessness test | *"not the whole test"* everywhere |
| tiers pointer | **`rules_primer.md`** in all four |
| `defending_the_rush.md` pointers | survive only for gap distances and backchecking — **not contact limits** |

**Measured in `content/` after the repair: `only while they can see you coming` = 0 ·
`permitted only against a player who can see you coming` = 0 · `legal in every book` = 1, and that one is
`puck_handling.md:921` — a different claim, pre-existing, now filed.**

### What the repairs did, and what they REFUSED

**`defending_the_rush.md`** — the *"legal in every book"* claim hedged to two-of-four with the NHL/IIHF
position labelled an inference; the defencelessness convergence corrected at `:20`, `:197`, `:202-203`,
`:213-214`, `:377-378`, `:391`, `:840`, `:910`; the *"can see you coming"* narrowing removed from all seven
sites; the Hockey Canada *bump* condition added to the facts layer, which its own body had flagged as
material while the facts block granting the permission omitted it.

**Refused, with reasons** — and the refusals are the better part of the report:
- ⚠️ **The §Angle facts block could not carry a checking-from-behind limb.** The block is at `HARD_MAX` 11 and
  ⚠️ **the §Angle BODY contains *"from behind"* zero times — so a fact there would violate *extract, never
  author*, which the style guide ranks above completeness.** **The document already carries a dedicated
  four-book checking-from-behind facts block at `:347-350`, and the §1-on-1 block now carries the limb.**
- ⚠️ **Both fixes the reviewer proposed OVERRAN THEIR CAPS** — 222 against a 200 ceiling, and 332 against 300.
  **I relayed both without measuring them.**
- ⚠️ **Hockey Canada's third scope limb was left truncated in BOTH `defending_the_rush.md:198` and
  `switching_positions.md:179`, deliberately.** `:179` is at **exactly 300/300** and the shortest honest form
  costs +26. ***"Fixing only one manufactures a divergence between two documents that currently agree."***
  **Two files that agree and are both slightly incomplete beat two that disagree.**

**And it refuted my framing:** I told it *"both siblings carry this and the owner does not."* ⚠️ **The owner
held a dedicated checking-from-behind block all along; what it lacked was the limb in the two blocks that
TEACH THE RIDE.** **The hazard was real; my description of it was not.**

### `defender.md` — the misattribution my own "correction" caused

**`:361` said *"its **Glossary** defines that engagement as leaning and nothing more"* and quoted the
PREFACE's wording.** ⚠️ **The real Glossary entry is BROADER — *"use competitive contact"*, explicitly
including play *"in front of the goal or along the boards"*, which is exactly the situation the passage is
about.** **Repaired to quote the Glossary and to rest the limit on the *sole objective* condition and the
604(c) Note's own closing sentence rather than on a false exclusivity claim.**

⚠️ **`switching_positions.md:179` was CHECKED AND LEFT ALONE, correctly** — the 604(c) Note opens *"Legal
competitive contact **(see Glossary)**"* and the **Competitive Contact** glossary entry is where *"lean into
each other"* lives, so the Note incorporates it by cross-reference.

### ⚠️ THREE CLAIMS IN THE OWNER REPAIR EXCEED ANY FINDING

**`commit-gate` re-derived all three and they quote correctly — *"but quoted correctly is not reviewed."***
- `:202` a NEW `Key:`: *"How much the boards help depends on how wide your sheet is…"*
- `:558` a NEW `Rule:` in **§Breakaways**, a section the boarding repair had no reason to enter — Hockey
  Canada 7.3's second limb, *"when a player leaves their skating lane to make contact"*. ⚠️ **And it
  truncates HC's scope, at 269/300 with ~31 chars of headroom — a THIRD site of a class already filed twice.**
- `:382` the `Never:` extended with *"or finish a steer on a carrier's numbers anywhere."*

**`safety-reviewer` dispatched on the text that ships.**

---

## ⚠️ D11 ON THE SHIPPING TEXT — three CRITICALS, and the one a grep would have cleared

**`safety-reviewer` read both files end to end through the renderer — 81 and 78 chunks — after the last
repairs. All three Criticals are now closed, plus a Major.**

### 1 · Hockey Canada 7.3's scope truncated in the layer that DEFINES the permission

**`defending_the_rush.md:198` and `:558` dropped the third limb — *"and any other divisions approved by a
Member of Hockey Canada"*.** ⚠️ **`:198` is the line that defines *"checking league"* for the ride taught at
`:197`, `:214`, `:377` and `:391`.** **A U15, U18 or adult player in a Member-approved non-check division
heard the rule named, heard it stop at U13, and concluded the bar was not theirs.**
⚠️ **The same document states the limb CORRECTLY at `:351`, `:352`, `:353`, `:354`, `:361` and `:914`** —
self-inconsistency, which is what makes it a defect rather than a convention.
⚠️ **And `:558` RETRO-SCOPED ITS NEIGHBOUR: fact `:557` states the same preamble with NO scope, so one wrong
scope spoken aloud governed two facts.**
**It reached a THIRD document — `switching_positions.md:179` (at exactly 300/300) and `:520`.** **All five
sites closed; a corpus sweep now returns zero.**

### 2 · The floor-not-a-ceiling caveat was absent from ALL FOUR layers of the document that teaches the ride

⚠️ **Measured: *"local governing body"*, *"604(b)"* and *"Competitive Contact team plays"* each appeared
ZERO times in `defending_the_rush.md`. `defender.md` carried them EIGHT times.** **The document that teaches
riding a carrier into the boards four times was the one that never said USA Hockey's classification list is
a floor.** **Now in facts, body, Common Mistakes and Key Takeaway 4.**

### 3 · ⚠️ THE FINDING A DOCUMENT-LEVEL GREP WOULD HAVE CLEARED

**`defender.md`'s gap-control facts block taught *"force them outside, where the wall becomes a second
defender"* and then gave only limits — boarding tiers, the from-behind bar.** ⚠️ **Every one of those is a
limit ON A PERMITTED ACT. Nothing in the block said the ride is barred outright in most classifications.**
**Body ✓, Common Mistakes ✓, Key Takeaway ✓, facts ✗ — the round-10 shape.**

⚠️ ***"A document grep would have CLEARED that file: `604(a)` appears in it eight times, just never in the
block that teaches the instruction."*** **That is the single best argument in this round for reading rather
than searching, and it came from the reviewer's own account of its method.**

### What the repairs REFUTED — including my own arithmetic

- ⚠️ **MY BRIEF'S OWN FIX WOULD HAVE FAILED THE CHECKER.** I gave a `Key:` merge as *"255/300"*. **`Key:` is
  not in `QUALIFIED`; its cap is 200. Fifty-five over.** ⚠️ ***"The brief committed the exact error it warned
  about two paragraphs earlier."*** **The agent wrote a 193-char merge keeping both the safety counterweight
  and the width point.**
- **The MAJOR needed a BODY edit I had not asked for:** *"607 and 7.4 carry no division clause"* appeared
  **nowhere** in `defending_the_rush.md`, so extracting it into a fact would have violated *extract, never
  author*. ⚠️ **Adding it also MADE `defender.md:407` TRUE — that line asserts this document *"carries this
  rule in full"*, and it did not.**
- **The renderer caught a defect the agent introduced:** an elided verb, *"a local governing body …
  prohibit body checking"*, ungrammatical read aloud. Fixed before finishing.
- **My `:180` premise was FALSE** — that line carries no scope at all. **And my *"25 times corpus-wide"*
  figure was 41.**

### Upheld, with reasons, so nobody re-derives them

**`:382`'s *"anywhere, which is checking from behind"* is OVER-INCLUSIVE under NHL 43.1 and IIHF 43.1 (both
carry an awareness element) and exactly right under USAH 608 and HC 7.5.** **Left as written: the direction
is conservative and *"anywhere"* is independently supported by NHL 43.3 and HC 7.5(a).**
**`:558`'s *"needs no deliberate hit at all"* survives attack — the preamble's chapeau requires *"the
deliberate use of the body"*, not a deliberate HIT.**
**USA Hockey 603(a)'s *"Rolling"* carve-out is correctly ABSENT from both files.**
