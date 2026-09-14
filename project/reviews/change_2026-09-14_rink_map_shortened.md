# 14 September 2026 — the Rink Map's rule-carrying prose cut, and the criticals the cut exposed

**The owner's report:** *"too long and too wordy with too much focus on rules… takes much too long to
read to be useful."* And separately: restore the penalty content the earlier 10–30 word caption limit
had stripped from two diagrams.

## What changed

| | before | after | delta |
|---|---|---|---|
| **Whole file** (`wc -w`) | 21,290 | **19,174** | **−2,116 / −9.9%** |
| §3 The lines and markings | 6,395 | **4,868** | **−1,527 / −24%** |
| §1 Rink dimensions | 2,523 | **2,158** | −365 |
| §5 Named areas of the ice | 2,469 | **2,333** | −136 |
| §7 Positions and shorthand | 1,082 | **1,193** | **+111** — the Critical repair lives here |
| Common Mistakes | 765 | **675** | −90 |
| **Rules density** | — | — | ⚠️ **RETRACTED. Two classifications gave 51%→41% and 55%→47%; neither is reproducible from a method written down at the time.** The defensible statement is the commit message's: **2,672 of the 2,681 words cut came out of lines carrying a rule citation.** |

⚠️ **EVERY "AFTER" FIGURE IN THIS TABLE WAS WRONG UNTIL THE NINETEENTH GATE PASS.** The originals
(§3 4,484, §1 2,131, Key Takeaways 1,215→958, rule-citing lines 8,708→5,727) were measured **mid-flight,
before adversarial review put ~565 words back**, and were never re-measured. **They have been re-derived
here from `git show HEAD:` against the staged tree by one method**, and §7 is now shown **growing**, which
is the honest shape of this change: the compression took words out of §3 and the repairs put them into §7,
where the goaltender-freezing Critical lives.

⚠️ **The owner asked for rules density to fall, not for length to fall — and the page was already BELOW
the corpus median (21,290 against 25,064).** Every word cut came out of rule-carrying prose; §4, §6, the
§5 vocabulary entries and *"What the extra width actually changes"* are untouched.

**What went:** four-book enumeration where the books agree; rule numbers in prose the Sources trailer
already carries; the same fact said twice. The Rule 69 goaltender-interference block went ≈800 → ≈300
words because **`rules_primer.md` owns it and the material is live in 15 documents** — `rink_map.md` is
not its owner.

## ⚠️⚠️ CRITICAL — a flat "never" in a voiced caption, caught by the agent that wrote it

**`the-trapezoid`'s caption ended: England Ice Hockey 22.3's suspension *"frees where a goaltender may
play the puck and never where they may freeze it."*** ⚠️ **`md_to_speech.py:699` emits
`"Diagram. " + caption` and never voices `describe`, so that is the whole diagram for a listener.**

**The body treats two carve-outs as inseparable from that exact sentence** — *"Both carve-outs travel
with that, or you produce a goaltender who will not cover a rebound."* Verified in
`sources/iihf_rules_v1.1.txt`: **63.2(VI)**'s Note — *"If a goalkeeper comes out of their goal crease to
'cut down the angle' on a shot and after making the save covers the puck, this shall be legal"* — and
**63.2(VII)**, which excepts a goalkeeper *"actually being checked by an opponent"*.

⚠️ **The failure mode is a goaltender who hesitates to smother a rebound, in the highest-collision ice
on the sheet.** The caption now carries both and **ends on the instruction: *"Cover the rebound."***

⚠️ **The writing agent flagged this against its own work and asked for a second reader. It was right to.**

## ⚠️ The "sole exception" error — the FIFTH in this corpus, and it was in the BODY

`rules-verifier` found *"the sole exception is a goaltender keeping skate contact with the crease"*
**false**. The IIHF Situation Handbook publishes at least two more, **in both the 2025/26 and 2026/27
editions**, and I verified both myself:

- **Situation 27.6** — a puck stopped *on* the goal line is not in the restricted area at all:
  *"the puck must be over the goal line to be considered to be in the restricted area."*
- **Situation 27.9** — a puck that deflects off the glass into a retreating goaltender draws nothing:
  *"the goalkeeper must **play** the puck to be penalized."*

⚠️ **The error originated in the BODY at `:238` and the caption inherited it — propagation ran the wrong
way, and it predates this change.** Corrected at four sites, including a *"Check yourself"* question
whose premise was false. ⚠️ **Fifth instance of a "sole exception" written from the playing rules
without the Situation Handbook. That is a pattern, not an incident.**

## Two Majors, and the reviewers disagreed on one

**`safety-reviewer`** said the surviving screen sentence — *"A clean screen… is left alone by all four
books"* — had lost the *"this is a reading of the rule's structure"* label the cut removed, leaving an
unhedged four-book negative claim.

⚠️ **`rules-verifier` had better evidence and it went the other way: the claim needs no inference.**
**NHL Reference Table 14** and **IIHF Appendix IV Table 16** answer ***"Goal is allowed"*** for a player
who plants himself outside the crease and obstructs the goaltender's vision — **Situations 5C and 5E**,
against **5D**'s identical fact pattern *inside* the crease, which is disallowed. USA Hockey has no
provision reaching a screen on a goaltender at all (its 625(a)(1) *"protective screen"* is a screen on a
**checker**); Hockey Canada 8.5 requires *"actual physical contact"*.

**So the sentence was sourced rather than re-hedged.** The safety reviewer read 69.1's body text; the
rules verifier read the worked situations. **The tables settle what the structure only implied.**

**Second Major, fixed in the same sentence:** the cut left the **USA Hockey** returning-goaltender
warning standing while dropping the **NHL/IIHF** one, so an NHL reader lost a caveat a USA Hockey reader
kept. Rule 69.4 is back in prose.

## The two captions

**`the-trapezoid` 29 → 187 words** and **`the-goal-crease` 30 → 82**, both deliberate exceptions to the
owner's 10–30 limit, on his instruction. **The other twelve are untouched at 23–29.**
`the-goal-crease` was **verified correct in all four books** — IIHF 1.7 *"The marked line belongs to the
Goal Crease"*, USA Hockey's Note to 625(b) *"(including crease lines)"* plus Casebook *The Rink*
Situation 4, Hockey Canada's Glossary — **and the NHL genuinely never says.**

## ⚠️ `commit-gate` blocked this three times over, and all three were the coordinator's

**1 · The headline fix missed its own last site — on a line this diff rewrote.** `:248`, the **IIHF**
paragraph, still read *"it carries the same sole exception in terms"* — ⚠️ **the one book for which this
change's own finding establishes two further exceptions, and the British reader's book.** ⚠️ **And it is
voiced ALONE**: `md_to_speech` puts it in its own chunk, where a listener hears *"the same sole
exception"* **with no antecedent**. `check_absolutes` passes on it. **Body ✓ implying every layer ✓,
inside the very change that fixed it everywhere else.** Scoped.

**2 · A reviewer's citation numbers were pasted in verbatim, and one of them is wrong.** The sentence
described a player who **plants himself** outside the crease and cited *"Situations 5C and 5E"*.
⚠️ **I read NHL Table 14 myself: 5C is *"skates in front of the goalkeeper… **remains in motion**"*;
5E is *"**plants himself** on the crease line or outside"*; 5D is the same planting done INSIDE the
crease, and is DISALLOWED.** Both 5C and 5E are allowed — but **5C is the motion case, and the sentence
was written around 5E's wording while carrying the report's bundled pair.** ⚠️ **This is the failure
CLAUDE.md names outright: *"THE BRIEF'S PROPOSED WORDING IS A BRIEF, NOT A PATCH."* I took a citation
from a report instead of opening the book.** Now cites **5E**, contrasted with **5D**.

**3 · *"All four books"* kept its evidence for two of them.** The tables reach **only** the NHL and the
IIHF. The deleted text had carried the other two inline — *"USA Hockey writes no goaltender-vision
provision at all, in its playing rules or its Casebook, and Hockey Canada's two references to the
goaltender's view both reach only a player standing in the crease."* ⚠️ **Without it the page asserted a
four-book negative with in-body support for two, the rest living only in the Sources trailer — a layer
the listener never hears.** Restored inline.

### The gate's ruling on the disagreement I resolved myself

**It upheld the call and then improved on it.** Sourcing to the tables rather than restoring the hedge
was right, and `rules-verifier` was right against `safety-reviewer` — ⚠️ **because a hedge saying "this
is inference" becomes FALSE once it stops being inference.** But ⚠️ **`safety-reviewer` was pointing at
a real hole and mislocated it: the defect was never the missing inference label, it was the missing USA
Hockey and Hockey Canada evidence.** Both reviewers were partly right and neither had the whole of it.

### Recorded, not fixed here

⚠️ **The unscoped *"sole exception"* survives in SIX other documents' speech layers** —
`defensive_zone_coverage` says it of **IIHF 27.7 specifically**, plus `time_and_space`,
`neutral_zone_systems`, `forechecking_systems` (twice) and `defender`. **Out of this diff; a plan row.**
⚠️ **The second entry that stood here — the IIHF 27.7/27.8 misnumbering — IS NOW FIXED IN THIS CHANGE
AND NO LONGER BELONGS IN THIS SECTION.** It read that `:234` cited *"IIHF Rules 27.7"* having lost the
note that the IIHF's own **27.8** is a different rule. The staged body at **`:238`** (the line number in
the original entry was also wrong) now carries: *"Both answers misnumber it 'Rule 27.8'; the IIHF's
restricted area is 27.7."* Verified in both editions — `iihf_rules_v1.1.txt:2633/2649` and
`iihf_rules_2026-27.txt:2684/2700` — and the Situation Handbook's own answers at
`iihf_situations_v1.1.txt:2524` and `:2569`. **Kept visible rather than deleted, because "recorded, not
fixed" turning into "fixed" is the outcome these sections exist to track.**

## Coverage, stated rather than left silent

| dimension | status |
|---|---|
| `rules-verifier` | **Ran.** The screen claim, both captions, the four-book crease-line split. Findings above. |
| `safety-reviewer` | **Ran.** Found the Critical. Findings above. |
| `content-reviewer` | **RUN, after the sixteenth gate pass, and it was the right call to treat the gap as a block.** It confirmed the body-versus-summary contradiction on the privileged area, found a **second** one nobody had seen — `:502` contradicts its own section's position table at `:498` eleven lines earlier — and found *"excuses playing, never freezing"* deleted from Key Takeaway 7 **and from the `the-trapezoid` caption**. ⚠️ **It also refuted three premises of its own brief, including the compression figure this record carried.** D7 (cardinal rule) and D13 (folklore) checked and clean: no coaching choice was promoted to a law, and both standing folklore risks kept their labels. |
| `facts-reviewer` | **Moot, and said so rather than left silent: the diff contains ZERO ` ```facts ` hunks.** This document has no facts blocks, correctly — `content_style_guide.md:749-754` puts reference documents out of scope. |
| `rules-verifier` | **RUN.** All four gate findings CONFIRMED against primary text, plus all five non-blocking items. Found **nine rule citations deleted from the body with no replacement** (`63.2(i)`, `63.2(vii)`, `69.1`, `69.3`, `8.3`, `8.3(a)`, `10.1`, `22.5`, `22.50`) and **did not recommend deleting anything** — the surviving claims are true, the evidence under them thinned. ⚠️ **Refuted two premises of its brief** (614(c) is not cited at `:205` nor in Common Mistakes) **and one of its own standing instructions** (the IIHF −2 appendix shift starts at Table 9, renumbers no rule). |
| `safety-reviewer` | **RUN.** Upheld both briefed findings and raised a **second Critical the brief never asked about**: *"not a hittable player"* overstates every book cited for it — USA Hockey Casebook 607 Situation 5 says a goalkeeper **can be legally checked** outside the privileged area. ⚠️ **The harm runs toward the goaltender**, who enters the corner unbraced. Also corrected itself in the report: the deliberate-contact limb of 607(d) Note 1 was never in a voiced layer, even at HEAD. |
| `site-reviewer` | **Run, on the rebuilt page, and it found a third markdown defect — a corpus-wide one.** Reported **PARTIAL**: the extension failed roughly fifteen minutes in, so the 375px viewport, the light theme, the theme toggle, the console and the network capture were **never reached** and are a gap, not a pass. What it did complete it completed on the **built HTML**, which is the right artefact for a build defect. ⚠️ **It also refuted this record's own caption premise — see below.** |

**Dimensions declared rather than left silent — ⚠️ the sixteenth gate pass blocked because three of these
were merely absent, and "very likely out of scope" is not a declaration:**

| Dimension | Status |
|---|---|
| **D4 — citations refetched** | ⚠️ **THE PREMISE THIS WAS ORIGINALLY DECLARED ON IS NOW FALSE, AND THE REPAIR IN THIS CHANGE IS WHAT FALSIFIED IT.** The trailer WAS byte-identical — until the F4 repair amended the Situation Handbook entry from *"Situation 80.9 only"* to *"Situations 27.6, 27.9 and 80.9 only"*. Measured: **24,854 → 25,182 bytes, one line, the International paragraph.** **No URL was added or changed**, so nothing needed refetching; the added text is a pointer to two Situations in books already cited, verified against the **on-disk extractions of both Handbook editions** by the repairing agent and **re-derived independently by `commit-gate`**. ⚠️ **So the substance is covered by D1/D3 (`rules-verifier` and the gate's own primary-text pass), NOT by D4, and `source-verifier` was not run.** That is a reasoned scope decision; the byte-identity claim that used to carry it is retracted. |
| **D5 — provenance** | **IN SCOPE and a defect was found: the skates-test routing.** The cut left `407(c)` and `4.13(c)` carrying a test neither contains, and deleted the disclosure saying so. Repaired, and the repair corrected the brief — ⚠️ **Hockey Canada states it in playing-rule text at Rule 8.3(a)(ii)**, which `rules-verifier` had denied. |
| **D6 — negative existence claims** | **IN SCOPE — this diff edited four of them (`:83`, `:84`, `:96`, `:246`) and `check_disclosures.py` returns 11 hits in this file.** `content-reviewer` re-attacked **six** against primary text and **upheld all six**: the KHL rulebook's absence (52 source files, zero KHL in any form), the NHL's 2005-06 date, the 50 ft neutral zone (`fifty feet`/`50 feet`/`(50')` — zero hits in two extractions), USA Hockey's goaltender-vision silence (zero genuine `vision` hits in the Casebook), and Hockey Canada's two view references (**exactly two, both crease-keyed**). Two more (`:83`, `:84`) it declared **not attackable from this repository** and passed to `source-verifier` rather than claiming. |

**Files in this change:** `content/foundation/rink_map.md` · `site/src/diagrams/rink_map_and_glossary.mjs` ·
`site/src/data/diagrams.json` (build product) · this record · ⚠️ **`project/plans/OPEN_ITEMS.md`, whose
**FIVE** hunks, not two, all written by the coordinator and none by any agent:
(1) the anchor-scroll row rewritten from "reproduced, not confirmed" to the confirmed click evidence;
(2) a row recording that `READABILITY_AND_DUAL_AUDIENCE.md` is tracked — ⚠️ **now superseded: it was
committed in `933ea01` while this change was in review, so it is no longer a staging hazard**;
(3) the `zone_entries.md:1011` *"not a hittable player"* row; (4) the Sources-trailer emphasis row and
its 16-page census; and (5) ⚠️ **the 44-line podcast-staleness row, which the gate correctly refused to
certify because it could not tell from the diff who wrote it.** It is the coordinator's own measurement,
taken while agents were live, and it is described in full under *What the coordinator measured* below.**

## ⚠️ Two markdown defects that reached the BUILT PAGE, and no gate could see them

⚠️⚠️ **`:185` shipped a literal `**` into `dist/`.** The repair for Ground 3 left an unclosed bold
opener — **15 markers on one line, an odd number** — so under CommonMark the whole span degrades to
literal asterisks, and the built HTML contained `**A clean screen`. ⚠️ **Every mechanical gate passed on
it, because none of them parses markdown.** `commit-gate` caught it by running the site's own parser and
by reading `dist/`. **This is C11's "repair applied to half a sentence": textually correct, structurally
broken, and nobody read the result.**

⚠️ **`:326` — the cut broke a numeric aside and it is voiced.** *"26.8% … within two stick-lengths of
the net — about 10.5 feet and 51.6% within twenty feet"*: the em-dash aside never closed, so **heard
aloud the pair reads as "about 10.5 feet and 51.6%"** — two owned figures, one made ambiguous on the
only layer a listener gets. Closed.

## ⚠️⚠️ A THIRD markdown defect — corpus-wide, live now, and NOT this change's

`site-reviewer` went looking for more of the two defects above and found a different one, on 16 pages.
**Every Sources trailer in this corpus mis-parses its own emphasis.** Census over the rendered article text
of `site/dist/**/index.html`: **39 literal `*` characters across 16 pages, every one inside a Sources
trailer.**

⚠️ **The counts are EVEN and the source reads fine.** `rink_map.md:631` carries **298 asterisks — an even
number** — and still leaks two. **So the "odd marker count" method that caught `:185` cannot find this**,
and neither can any gate here.

The cause is CommonMark's delimiter-run rule. Each trailer is one outer `*…*` paragraph containing nested
`*"…"*` quotes; where a nested quote opens straight after a bracket — `(*"no penalty should be assessed"*` —
the `*` sits between two punctuation characters, is therefore **both left- and right-flanking**, and matches
the **outer paragraph's opener as a closer**. Italics end early, the prose after inherits emphasis, and the
orphaned partner renders as a literal `*`. ⚠️ **Three of four hits per page are silent** — only the fourth
leaves a visible character — **so the visible count understates it: this page shows 2 stray asterisks but 4
mis-scoped quotes.**

**Deliberately not fixed here, and the reason is scope, not convenience.** ⚠️ **The original wording said
the trailer was byte-identical in `HEAD` and in this change's index. That was true when written and the F4
repair later falsified it** — one line of the International paragraph changed, 24,854 → 25,182 bytes.
**The deferral survives the correction on the measurement that actually matters:** the page still renders
**exactly 2 stray asterisks, in the same two positions, both in the USA Hockey paragraph** — which this
change never opened — so it neither introduced nor repaired any instance of the defect. 15 of the 16
affected pages remain untouched by it. It is a `site/` rendering fix across the whole corpus, needing its own rebuild and
its own review. **Row opened in `OPEN_ITEMS.md` under Site, with both candidate fixes and the census.**

## ⚠️ This record's "two long captions" was wrong. There are five, and three are not this page's

This record said above that two captions were deliberately expanded against twelve short ones. Measured from
the built `<figcaption>`s, **twelve sit at 23–29 words and FIVE are over the band**, not two — and three of
the five are **longer** than either of the two named here, up to **382 words**:

| Caption | Words | Defined in | Owned by |
|---|---|---|---|
| The goal crease | 82 | `rink_map_and_glossary.mjs` | this page — deliberate |
| The trapezoid | 187 | `rink_map_and_glossary.mjs` | this page — deliberate |
| Icing gaining the line | 187 | `rules_primer.mjs` | **another page** |
| Defensive-zone draw alignment | 279 | `faceoffs.mjs` | **another page** |
| The roles rotate mid-shift | 382 | `forechecking_systems.mjs` | **another page** |

⚠️ **The bottom three are BORROWED diagrams** — embedded here, defined and primarily used elsewhere. **A
caption is one shared string**, so shortening them to satisfy this page rewrites three other documents', and
the two longest each carry an inline ⚠️ rule-divergence warning that **has nowhere else to live for a
listener**, `md_to_speech.py` voicing the caption and not the `describe`. **A design decision for the owner,
recorded as a row rather than taken here.**

**The correction matters beyond the number:** the two-caption framing was the coordinator's, it went into the
agent's brief as settled fact, and **the agent that measured refused it.** That is the method working —
[the briefs are more defective than the corpus](../../CLAUDE.md).

## ⚠️⚠️ THE SIXTEENTH GATE PASS BLOCKED, AND IT FOUND WHAT FIFTEEN PASSES OF MECHANICAL WORK DID NOT

Passes one to fifteen argued about markers, staging, coverage and captions. The sixteenth read the
compression **hunk by hunk against the primary books** and found that **the cut altered four rules claims**.
⚠️ **Every earlier pass had been looking at the wrong layer.** The defects were never in the machinery; they
were in what the shortened sentences now assert.

**All four verified independently against the rulebook text on disk before any agent was briefed**, because a
gate's report is a brief and briefs here are more defective than the corpus.

**B1 — a CRITICAL, ranked by what a reader would DO.** The staged §7 sentence said Hockey Canada and USA
Hockey *"both key theirs on **pressure** instead"*. `sources/hc.txt:7495-7510`, Interpretation 3 to Rule
10.1(a), has five limbs: (i) and (iii) key on pressure **inside** the crease; (iv) and (v) key on **nothing
at all outside it**. Limb v, verbatim:

> *"When a goaltender leaves their crease, they will not be allowed to freeze the puck. If they do, they will
> be assessed a Minor penalty. **No warning will be issued.**"*

**Flat, unconditional, and outside the crease is the case the section is about.** The text HEAD carried was
correct and the compression replaced it, also dropping the Hockey Canada citation, the words *"no warning"*,
and USA Hockey 614(c) — which the file still cites at `:205` and in Common Mistakes, **so the document now
contradicts itself.** A goaltender who acts on the staged sentence freezes an uncontested puck behind the net
and takes two minutes with no warning.

**B2 — a repair that was not confined to its finding.** The Ground-2 fix was supposed to replace a bundled
*"5C and 5E"* citation with 5E alone. But 5E's wording is *"plants himself **on the crease line** or outside
the goal crease"*, and that phrase entered the body inside a sentence asserting the screen is *"left alone by
all four books"* — against **four retained sites in the same document** that say the opposite, one of them a
blockquote **one paragraph above** ending *"do not plan a screen on the line under the IIHF book."*
⚠️ **The finding was a citation number; the repair changed which fact pattern the sentence asserts.** That is
C11's terminating rule: a repair touching a claim the finding did not name voids the review.

**B3 — a regression against a warning written for this file.** `sources/README.md:137` carries a capitalised
instruction to name the goalkeeper-interference table explicitly, because **Table 16 is Rule 69 in 2025/26
and Rule 84 Overtime in 2026/27**, where Rule 69 is Table 14 — so a bare *"Table 16"* against the current
book **resolves successfully, to the wrong rule**. Confirmed in both extractions. HEAD stated the
qualification; the cut deleted it and the new sentence reintroduced a bare *"Table 16"*. ⚠️ **The README even
records that this file already stated it correctly.**

**B4 — a scope qualifier deleted from the body while the summary layer kept it.** The staged text says the
strip behind the net *"also sits inside the goalkeeper's privileged area under USA Hockey"*, where the
section's own *"Where:"* defines that strip as full rink width. `usah.txt:3694` Note 2 bounds the area by
lines from the faceoff spots **perpendicular to the end boards**, so its corners are outside. Retained Key
Takeaway 12 still says *"but not the corners"*. **Body and summary layer now disagree — the round-10 shape,
inverted.** The same hunk deleted 607(d) Note 1 from **both** the body and Common Mistakes, leaving a penalty
rule travelling in two layers with its carve-out in neither.

**B5 — and the reason none of this was caught: `content-reviewer` had never run.** The record had declared
that a gap, honestly. ⚠️ **A gap is not a declaration of scope, and C3 requires "checked OR explicitly
declared out of scope."** D8, D9 and D12 were unevaluated over **exactly the hunks where B1, B2 and B4
live** — and B1 and B4 are body-versus-summary contradictions, which is D9's definition. **The dimension
that was left silent is the dimension the defects were in.** That is this project's stated failure mode
occurring exactly as written down.

### What the gate cleared, having attacked it rather than accepted it

- **The two markdown repairs are real and are in the INDEX, not merely the working tree** — byte-diff of
  `git show :content/foundation/rink_map.md` against the tree, identical. In `dist/`: **0 literal `**`**,
  `<strong>` 527/527, `<em>` 238/238 (superseded from 502/502 and 223/223 by the repair rounds; re-run, still balanced), the aside rendering `— about 10.5 feet — and 51.6%`. All 53 added
  lines re-checked for marker parity: **0 flagged.**
- **Deferring the corpus-wide Sources-trailer defect is CORRECT and does not block.** ⚠️ **THE EVIDENCE THAT
  ORIGINALLY CARRIED THIS RULING IS RETRACTED, AND THIS WAS THE FIFTH AND LAST SITE STILL ASSERTING IT.**
  The ruling was made on trailer-to-EOF being byte-identical; the F4 repair then amended one line of it, and
  **the figures stated here were wrong independently of that.** Measured: **HEAD 28,710 bytes / 28,425
  characters → index 29,038 / 28,747, +328 bytes, 17 lines both sides.** The passage had claimed
  *"14 lines and 24,605 characters both sides"* — **not byte-identical, not 14 lines, and neither side
  24,605.** ⚠️ **Four sites were corrected and this one missed, while the bullet immediately above carries a
  supersession marker — so a reader had no signal it was stale.** Found by `commit-gate` on the nineteenth
  pass **by measuring rather than by reasoning about the correction.**
  **The ruling survives on evidence that holds:** the rebuilt page renders **exactly 2 stray asterisks, both
  inside the USA Hockey paragraph, which is byte-identical to HEAD** — the only trailer line this change
  touched is the International one. Pulling 16 pages of rendering into a content-compression commit remains
  the unreviewable mixed commit the gate exists to prevent.
- **C10 build half:** `diagrams.json` newer than the `.mjs`, `dist` newer than both and newer than the
  content file, `sw.js` present, and **both captions reconstructed from the `.mjs` string literals match
  `diagrams.json` exactly** — the build product is not stale.

## THE REPAIRS, AND THE FOUR THINGS THE REPAIRING AGENT REFUSED

The agent that wrote the repairs was given the defects and the constraints, **not the wording** — the
sibling documents that already state these claims correctly were named as models instead. It refuted four
things, and **one of them was its own first draft.**

⚠️⚠️ **IT CAUGHT ITSELF SHIPPING A HALF-RULE.** Its Critical-1 replacement quoted Hockey Canada's clause v
flat — *"no warning"* — which, **heard alone, produces a goaltender who will not cover a rebound after a
cut-the-angle save.** Clause ii of the same Interpretation permits exactly that, and `goaltender.md:507`
records that which clause governs is unsettled. **This is the round-73 failure exactly** — the one where a
coordinator's replacement text contradicted the document two paragraphs above — except that this time the
agent caught it in its own work before anyone else read it.

**It refuted `rules-verifier`, and it was right.** The brief said neither USA Hockey 407(c) nor Hockey Canada
4.13(c) contains the skates test, so both must route to a Casebook or an Interpretation. But **Hockey Canada
states it in playing-rule text**, at `sources/hc.txt:6837` — **Rule 8.3(a)(ii)**, *"plays the puck with their
skates over the centre red line."* Verified independently by the coordinator. **HEAD had this right and the
brief did not; the agent restored HEAD's routing rather than the brief's.**

**It refused this record's instruction that Key Takeaway 12 was correct.** The brief said the body should move
to match the takeaway. The agent read the takeaway's closing sentence, found it carried **the same
*"not a hittable player"* overstatement** that Casebook 607 Situation 5 contradicts, and corrected **both** —
because correcting the body alone would have left two mutually contradictory sentences in one document.

**It narrowed the privileged-area finding.** Behind the net *is* inside the privileged area, so 607(c) does
reach a check there. The defect was never that — it was that the sentence's antecedent is the **full-width**
strip, whose corners fall outside Note 2's 44 ft bound. **The overstatement only bites in the corners.**

### What the repairs cost, and what they bought

**HEAD 21,290 → 19,174 words: 2,116 words removed, 9.9% below HEAD.** The compression stands.

⚠️ **THIS FIGURE WAS WRONG TWICE BEFORE, AND BOTH TIMES FOR THE SAME REASON.** The first was measured
mid-flight and never re-measured after content was restored. The second — *"19,037 / 10.6%"* — compared
`wc -w` on HEAD against Python's `.split()` on the tree: **two methods, a 36-word gap, and a figure nobody
could reproduce.** `commit-gate` caught it by counting the index itself. **Every figure in this record is now
`wc -w`, and the method is stated because that is what made the error findable.**

Repairs across both rounds added words back, and the agents said which could not be done cheaply:
**Critical 1** (the *"no warning"* quotation and clause ii's carve-out *are* the repair), **Major 6** (a
routing pointer is irreducibly three citations), and the second round's **F3**, where carrying Hockey Canada's
warning step *and* distinguishing it from USA Hockey's test cost 20 words. **F2 gave four back.**

**The speech layer was re-rendered after every edit and the agent read every chunk tail by eye.**
⚠️ **THE CHUNK COUNT IN THIS RECORD WAS WRONG THREE TIMES.** The repairing agent reported *"43 became 45"*;
the plan's podcast row said *"43"*; the true figure for the staged text is **44**, rendered by the
coordinator and independently by `commit-gate`. **No conclusion rested on it — but a verification that
names the wrong artefact is not a verification, and the gate was right to say so.** The measured outcome:

- The permission, its crease-line qualification and the instruction are now **all in chunk 013**.
- *"No warning"* is now in **033 — the same chunk as the position-table row G it used to contradict**, and
  that row's *"location or pressure"* now agrees with the paragraph.
- *"Cut down the angle"* travels with *"no warning"* in **both** 033 and 041, so the half-rule cannot be heard.
- *"Can be legally checked"* and the corners bound are together in **029**, and again in **043** with KT12.
- The caption change reaches a listener — chunk **018** carries it.

⚠️ **`check_absolutes` now covers 408 caption units against the rebuilt `diagrams.json`, because
`build-diagrams.mjs` ran BEFORE it.** That ordering is the one round 58 got wrong.

### Reported outside its ownership, and deliberately not swept

**`language_and_glossary.md:335` — the named OWNER of *privileged area* — and `zone_entries.md:1011` both
still say a goaltender out of the crease is *"not a hittable player"* in all four books.** Both now diverge
from the corrected Rink Map and both contradict `usah_casebook.txt:11716`. ⚠️ **The owner must be decided
first and `zone_entries` follows it** — which is why neither was touched here. Row open in `OPEN_ITEMS.md`.

Also reported: `check_chunk_splits.py` flags a `goaltender.md` boundary that **cuts clause v from clause ii of
the same Interpretation** — the identical half-rule the agent had just caught in its own draft, sitting
unrepaired in another document.

## THE SECOND REPAIR ROUND — all five, because the record named only two

`commit-gate`'s seventeenth pass blocked on five findings. The record previously described **F2 and F3
only**, which would have left a reader reconstructing this change — and `review_history.md` is built from
these records — **unaware that the Sources trailer was edited at all.**

**F1 — the In-House Rules edition scope.** *"All fixtures"* is a **2026-27 change**: `eiha_inhouse.txt:74`
reads *"all EIH and SIHA fixtures"* against `eiha_inhouse_2026-27.txt:78`'s *"all fixtures"*. `:18` and
`:113` now carry *"from 2026-27"*, Key Takeaway 9 names the edition, and `:75` records what the 2025-26
edition confined the rule to. ⚠️ **Two corrections to the finding, both against the coordinator.** The
repairing agent established that HEAD's `:120` and HEAD's Key Takeaway 9 were **already bare** — not
regressions — and `commit-gate` then established that **HEAD's `:18` already carried *"from 2026-27"* and
never lost it.** So the gate's framing was wrong, the agent's refutation of it was half wrong, and the
repair is right anyway: all four sites now carry the edition. **The fix was worth making; the story told
about it was wrong twice.**

**F2 — the *"verbatim"* dangler.** ⚠️ **This one was the coordinator's error in a different way: it was
listed to the gate as already repaired when it had never been put in a writer's brief at all.**
`nhl_rules.txt:8170` reads *"Encroachment **by any player** into the area between the hash marks **on the
outer edges of the face-off circle** prior to the puck being dropped"* — the compression had deleted the
quotation and left the word *"verbatim"* asserting that the corpus's own paraphrase was the rule's exact
wording. Claim dropped rather than quotation restored, **−4 words**; the paraphrase stands because the
sentence two lines above already places the hash marks at the outer edge.

**F3 — the in-crease limb, and a repair that had exceeded its finding.** The Critical-1 fix had flattened
Hockey Canada's in-crease test into USA Hockey's shape. `hc.txt:7502` clause iii is a Minor **"after one
warning"**, crease-only. **The warning step is not decoration — *"No warning will be issued"* in the
out-of-crease limb only lands as a contrast because the in-crease case has one.** +20 words, and the agent
said plainly it could not carry the warning step and distinguish the two books for less.

**F4 — the Handbook's misnumbered pointer, and an unprompted repair that mattered more.** Situations 27.6
and 27.9 both answer *"Rule 27.8"* while the IIHF's restricted area is **27.7**; `:238` now says so in 12
spoken words. ⚠️ **The agent also found, unprompted, that the body cited those two Situations while the
Sources trailer read *"Situation 80.9 ONLY"* — a body citation with no trailer entry behind it.** It
amended the trailer (+51 words, unvoiced). ⚠️⚠️ **THAT AMENDMENT IS WHAT FALSIFIED THIS RECORD'S OWN
BYTE-IDENTITY EVIDENCE**, on which D4's scope declaration and the corpus-wide trailer deferral both rested.
**A repair invalidating the verification that licensed another decision is a failure mode this record had
not seen before, and it is written down here so the next round looks for it.**

**F5 — D4, D5 and D6 declared.** In the coverage table above, with evidence rather than assertion.

**And the agent refuted an instruction of the coordinator's, correctly.** It had been told *"the
out-of-crease repair is correct — do not disturb it."* That sentence read *"out of the crease neither of
them asks about pressure at all."* **USA Hockey 610(b) does ask about pressure and is not crease-limited**
(`usah.txt:3764`); what is location-only is 614(c)(1) and (3). Reworded. ⚠️ **This is the second time in
this change that a writing agent has found the defect in the brief rather than in the corpus.**

## ⚠️⚠️ THE SAFETY ROUND — the repair commissioned to remove a hazard had introduced a worse one

`safety-reviewer` read §7 and returned **NOT SAFE TO SHIP**, with **two Criticals running in opposite
directions**. It was right, and this is the most important finding in the change.

**CRITICAL — the NHL/IIHF half was flat, and both books write the carve-out expressly.** The passage said
it is *"a delay-of-game minor to freeze the puck outside the crease"* under both books, attributing the
save-then-cover permission **only to Hockey Canada**. Both books write it:

> `nhl_rules.txt:6709-6711`, Rule 63.2(vi) NOTE — *"If a goalkeeper comes out of his crease to 'cut down the
> angle' on a shot and after making the save covers the puck, **this shall be legal**."*
> `iihf_rules_v1.1.txt:5166-5167`, 63.2(VI) — the same words.

⚠️ **THE HAZARD IS THE ONE THE REPAIR EXISTED TO REMOVE, RUNNING BACKWARDS.** A goaltender who has come
out, cut the angle, made the save and has the puck under the glove **outside the crease** was being told to
expect a minor for covering it — so they hesitate, or open the glove, in the highest-collision ice on the
sheet, doing something both their books allow. ⚠️ **The earlier repair did not introduce the flat clause —
it AMPLIFIED it, by building an explicit three-way contrast that made the omission read as a finding.**

⚠️⚠️ **AND THE PAGE CONTRADICTED ITSELF INSIDE THIS COMMIT.** The `the-trapezoid` caption — restored
earlier in this same change precisely because it had lost its penalty content — says the save-then-cover is
legal, and is voiced in chunk 018. The body said the opposite, in chunk 033. **Two spoken units of one
page, in one change, disagreeing about whether an act is punishable. No checker can see that. Neither the
commit gate nor the coordinator caught it; a safety reviewer reading the SIBLING CLAUSE did.**

**CRITICAL — the USA Hockey clause named geography plus pressure as the whole test.** `usah_casebook.txt`
Rule 614(c) **Situation 6** answers **"Yes, minor"** on that exact geography where the goalie **raced an
attacker to a loose puck and fell on it**: *"The goalkeeper has an obligation to play the puck with their
stick… This action would not be considered to be within the 'act of playing goal.'"* The operative limb is
**save, not fetch**, and it was absent. ⚠️ **This answered the previous agent's question against its own
work: its instinct to worry was right, its diagnosis of why was wrong.**

Also repaired: **trigger (4)** (goal frame/boards/netting) has neither a pressure nor a geographic limb, so
*"the test is opportunity-before-pressure again"* asserted one remaining test where **two** remain; the
`:498` G row, voiced as its own unit with the hesitation half and none of the counterweight; the pronoun
*"there"*, which `safety-reviewer` judged **does not survive being heard** and which carried the entire
scope; and the `clause ii` → `second clause` propagation the previous round had left in Key Takeaway 8.

### ⚠️ The repairing agent introduced a defect, caught it, and reported it against itself

Its first version of the G cell ran to **234 characters against `TABLE_MAX_CELL_CHARS` of 200** — and the
re-render **replaced the entire six-position table** with *"It does not read well aloud, so it is not
narrated."* **A listener would have lost C, LW, RW, LD, RD and G outright, and ALL FIVE GATES PASSED on that
version.** That is round 58's failure exactly.

⚠️ **The coordinator's brief caused it**, by relaying *"`check_tables --near` reports nothing for this file,
so the table has headroom."* **Reporting nothing on `--near` does not mean headroom — the cell had 33
characters.** Rewritten to 187. **The table now appears on `--near` at 13 characters of headroom**, which is
the honest price of the owner pointer, and a row is open on it.

### What the agent refuted

- **The coordinator's hypothesis that Critical 1 could be fixed while SHORTENING. It cannot.** Hockey
  Canada's hedge **is** Hockey Canada's carve-out; deleting it deletes the permission the Critical exists to
  restore for one of the four books. Compressed instead.
- ***"USA Hockey does not go that far"* was itself false** and is gone — USA Hockey reaches the same
  save-then-cover through **Casebook Situation 8**. **Three of the four books resolve the pair expressly.**
- **The chunk baseline moved.** 44 → **45**: the paragraph grew past a split boundary, which put the G row
  and the body paragraph into **different chunks** — which is why the shorter, self-sufficient G cell was
  right rather than attaching a counterweight to it.

### The propagation census the agent could not run, run by the coordinator

It declared it had not checked whether three sibling documents carried the same flat NHL/IIHF claim, and
called that the obvious next brief. **Run: they do not.** **Fourteen documents carry the cut-the-angle
carve-out**, `rules_primer.md` and `language_and_glossary.md` among them; `how_to_watch_hockey.md` makes no
63.2 claim at all. ⚠️ **The flat claim was unique to `rink_map.md`.** Handover closed.

### Cost

**HEAD 21,290 → 19,346 by `wc -w`: 1,944 words, 9.1% below HEAD**, from 9.9% before the safety round. **The
repairs bought accuracy back at a visible price and that price is stated rather than absorbed.** Verified
after: **45 chunks, `clause ii` gone from all of them, the position table still narrated with all six
positions present.**

## What the coordinator measured, so the plan hunks in this diff have an owner

⚠️ **`commit-gate` refused to certify a 44-line hunk in `OPEN_ITEMS.md` because it could not tell from the
diff whether it was this session's work or another agent's landing under this message. That refusal was
correct** — HEAD moved to `933ea01` *"Plan layered learning and local podcast automation"* mid-review, and a
diff does not carry authorship. **The hunk is the coordinator's, and this is what produced it.**

It began as a check that the renamed page had a redirect. It does: `/foundation/rink_map_and_glossary/` →
`/foundation/rink_map/`, verified in `dist/`.

**The audio layer turned out to be behind the corpus on 35 of 38 episodes.** Method: re-render every document
with `md_to_speech.py --out <scratch>` (**9 seconds for the whole corpus**) and compare the **per-chunk
`sha256` each manifest already stores** against the fresh render.

⚠️ **An mtime comparison was run FIRST and was WRONG.** It reported 36 documents; two of those
(`on_ice_communication`, `positions__center`) render **byte-identical spoken text**. **16 source files share a
single `12 Sep 08:01` timestamp**, so one sweep inflated the signal. **The hash comparison is exact and there
is no reason to ever guess this again.**

| | documents | billed characters |
|---|---|---|
| Spoken text identical — do not re-bill | 2 | — |
| Spoken text changed | **35** | |
| — full re-synthesis | | **6,027,392** |
| — only chunks whose hash changed | | **1,974,258 (32%)** |

⚠️ **WHETHER A DELTA RUN IS POSSIBLE IS UNVERIFIED AND THE ANSWER IS NOT IN THIS REPOSITORY.** The manifests
address chunks individually, but **the TTS step is not here** — `md_to_speech.py` stops at SSML,
`build_podcast_audio.py` encodes existing **masters**, and nothing in the repo turns SSML into a master.
**So 32% is a property of the data, not a demonstrated capability of the pipeline.**

**The feed's addressing is correct and must not be "fixed":** 37 items, one rink-map episode, title updated to
*"Rink Map"* while the **GUID and enclosure keep the old slug** — changing those re-downloads the episode for
every subscriber.

**Nothing in this change ships any of that.** It is recorded in `OPEN_ITEMS.md` as an open row, and it is in
this diff only because the plan file is.

## What this change could not have found

- ⚠️ **The compression verified that a NAMED OWNER holds each claim, not that the claim is TRUE.** In the
  writing agent's own words: *"If a claim is wrong in both `rink_map.md` and its owner, I have now made
  it shorter and left it wrong."* **It opened no rulebook** — every quotation moved was copied
  byte-for-byte, so a misattribution would have travelled intact.
- ⚠️ **The Sources trailer is 4,403 words — 23% of the page — and is essentially untouched: HEAD's 4,352 plus the 51 words the F4 repair added to the Situation Handbook entry, and nothing else.** ⚠️ **METHOD, because `commit-gate` could not reproduce these absolutes: `wc -w` over the span from the `*Sources — retrieved` marker to EOF.** Counting the same span with Python's `str.split()` gives **4,342 → 4,392, delta 50** — internally consistent, one word apart on the delta, and the gap is the same Unicode-whitespace artefact that produced this record's earlier 19,037-vs-19,073 error. **The delta is the claim; the absolutes depend on which counter you use, so the counter is now named.** It is the biggest
  block left and the honest lever if the owner wants it shorter still. **Not cut, because that is
  non-negotiable 4 territory and his call.**
- **Eleven documents link into this page.** `check_links.py` passes so no anchor broke, but a sibling
  whose sentence promises *"see the crease section for the four-book split"* now points at a shorter
  treatment, and **nothing mechanical tests whether a pointer's promise still matches what it points at.**
- ⚠️ **A browser saw the top of the page and then the extension died.** The **375px viewport, the light
  theme, the theme toggle, the console and the network capture were never reached** — recorded as a gap.
  Deep screenshots on this page also reproduced the known blank-capture trap (`visibilityState: "hidden"`),
  so the Sources defect above rests on the **built HTML**, not on a picture of it.
- **No coach has read any of it.**
