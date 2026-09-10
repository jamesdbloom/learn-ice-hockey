# Round 72 — the plan was denying its own evidence, and the caption layer had never been swept

**The owner reset the priority mid-session:** *"Have we finished all the readability work and adding new
diagrams… that's highest priority so we should be focusing on that"*, and *"we need to condense the plan as
it's got too long and out of control so it is hard for you and me to understand."*

⚠️ **The honest answer to the first question was NO, and the coordinator had been working the wrong tier.**
Measured at the moment the question arrived: **198 captions · 293,565 raw characters · 66 over 1,500 · zero
new diagrams in three rounds.** The directive *"we don't want long captions"* had been set on 8 September;
since then the count over 1,500 had moved from 68 to 66.

⚠️ **The plan carried SIX competing top-priority headings** — two different sections both called `TIER 0-A`,
plus `TIER 0`, `TIER 0-D`, `TIER 0-R` and a restatement. **That did not cause the coordinator's drift — it
read them and chose wrong — but the file could not correct it either.**

# The measurement that set the work: SPOKEN cost, not character count

**198 captions are 293,565 raw characters and 478,983 SPOKEN characters**, because a caption embedded in
seven documents is voiced seven times. ⚠️ **Ranking by raw length ranks the wrong things.** The 22 captions
dispatched carried **32% of all spoken caption text**.

**Result: ~31,800 spoken characters removed.**

| set | spoken before → after |
|---|---|
| net-front / shot-block / angling | 30,388 → **18,478** |
| rules primer / faceoffs | 30,565 → **20,860** |
| the-call / trapezoid / screen / oz-net-front / breakout-reverse | 32,382 → **26,594** |
| forecheck / rush | 34,675 → **30,836** |
| special teams / risk | 7,375 → **−581 only** |

⚠️ **The last row is the honest one.** That agent cut almost nothing and **refused to pad the number**: four
of its five captions were already at their floor, and what remained was hedges, scoped statistics and
picture-limitation disclosures. **It spent its time finding defects instead, and found four.**

# ⚠️⚠️ SEVERABILITY RUNS BACKWARDS — a host's PROSE can depend on its CAPTION

**Found by the first agent to finish, broadcast mid-wave to the other four, and it then caught a cut in
flight.**

`how_to_watch_hockey.md:242` — *"the captions say so themselves… **its caption sets out how the four rule
books differ** on whether touching the line counts."* ⚠️ **The document DELEGATES to the caption.** A
per-host coverage table shows that material as duplicated and safe to cut; cutting it breaks the host's own
sentence.

**Three more instances found within the hour:**
- `how_to_watch_hockey.md:182` — *"the shot-blocking technique **in it** belongs to Special Teams"*
- `how_to_watch_hockey.md:417` — *"**whose caption carries the NHL and IIHF dimensions**"*
- ⚠️ **`how_to_watch_hockey.md:106`** — *"Two forwards are below **the top of the circles** in the first
  picture… and that count is what the two names record."* **An agent had already cut "at the top of the
  circles" from `forecheck-212` as duplicated. It is the reference line the host's count depends on, with no
  other way for a listener to check it. RESTORED.**

⚠️ **THE TEST, and no coverage table can perform it: before cutting, grep the hosts for prose that POINTS AT
the caption** — *"the caption"*, *"the diagram explains"*, *"as the picture shows"*. **If a host leans on a
caption for a fact, that fact is load-bearing however well duplicated it looks.**

# ⚠️⚠️ THE CAPTION LAYER HAD NEVER BEEN SWEPT FOR NEGATION INVERSION

**Five agents, five captions each, found roughly ONE PRE-EXISTING INVERSION PER CAPTION — by hand,
incidentally, while doing something else.** All had shipped. The worst:

- `oz-net-front-screen` — *"the six feet is the depth and not the half-width, and 'three feet out from the
  goal line' is inside the paint"* → ⚠️ **"three feet out is NOT inside the paint": a screener told a foot
  in the crease is legal, in the caption whose subject IS the crease.**
- `screen-the-goalie-sightline` — *"necessary and not sufficient: NHL Rule 69.1 reaches…"* → ⚠️ **"69.1 does
  not reach positioning"** — a false rule statement in the permissive direction.
- `forecheck-pinch` — *"The weak-side defenceman does not join in, and holding the middle is what makes a
  failed pinch a two-on-one"* → **"does not hold the middle"**, on the sentence separating a two-on-one from
  a breakaway.
- `rush-backcheck-lanes` — *"you cannot defend anything from behind, and the aim is their inside hip"* →
  **"do not aim at their inside hip"**.
- `breakout-reverse` — *"is never past you to begin with, and beats it"* → **the containing forechecker does
  not beat the reverse**, deleting the cardinal-rule counterweight.

⚠️ **NOTHING MECHANICAL LOOKED AT THIS LAYER.** `check_chunk_tails.py` inspects chunk tails; `check_facts.py`
reads the ` ```facts ` layer. **Neither reads captions — and a caption is voiced as an "Important. Diagram."
block, the loudest unit after facts.**

**So `scripts/check_caption_negations.py` was written.** A worklist, no `--strict`, ever. First run:
**391 caption/`describe` strings across 31 modules · 499 occurrences · 6 in its `suspicious` band · 68 worth a
look.** It reads the `.mjs` **sources**, not `diagrams.json`, because the build product goes stale the moment
a caption is edited.

⚠️ **Its own top-ranked hit is a FALSE POSITIVE and is recorded in the tool as a worked cleared example** —
`angle-into-the-corner`'s *"in every league, checking or not, get your skates parallel"*, where the negation
sits inside a fixed parenthetical scope phrase and never governs the clause. **A sweep would have "fixed"
it.** A second cleared example is recorded too: a `safety-reviewer` ruled the four-way-shared *"…is not
allowed at all, **so** find out which book you are under"* **NOT a defect**, because *"so"* marks a
consequence — and because carrying the negation forward there makes a listener **more** cautious, not less.
⚠️ **Round 70 had already found that EVERY cardinal-rule instruction in `site/src/diagrams/` is introduced
by "so", and that the one site with a bare imperative after a dash was the one that inverted.**

# The plan: 17,632 → 15,220 lines, and the markers were the defect

**692 finished sections and rows relocated VERBATIM into 13 records.** ⚠️ **Nothing summarised or retyped —
every move was by exact line match, so corruption was structurally impossible rather than merely unlikely.**
A tidying pass in this repository has already destroyed a correct fact.

⚠️ **A 13% cut, not the 80% the coordinator predicted.** Two premises were refuted:
1. **At section level the plan is 82% LIVE WORK.** Of 629 sections: 303 KEEP, 126 standing method notes, 25
   load-bearing measurements, 60 SPLIT — and only **115 MOVE**.
2. **The bulk was in four tables that are huge in ROW COUNT and one line per row.**

⚠️⚠️ **THE REAL FINDING IS THAT THE STATUS MARKERS LIED.**
- **Tier 1: 697 rows. 434 were finished work.** Markers ran 428 ⬜ / 80 ✅ — **~62% finished, and the marker
  was right about a quarter of it.**
- **A section headed *"none of these is closed"* was FALSE BY 196 OF ITS 436 ROWS** — 116 already closed
  (many self-marked ✅ CLOSED **inside** it) and 80 method post-mortems that were never corpus work.

⚠️ **AND THE SHAPE THAT SHOULD CHANGE HOW THE REST IS READ: of 9 rows whose body merely OBSERVES a defect
with no repair sentence, SEVEN were already fixed in the tree.** Repair work continued after the rows were
written and nobody closed them. **34 rows were therefore left UNKNOWN rather than forced to OPEN — the "no
fix sentence" shape is untrustworthy in BOTH directions.**

**Two verified samples, and they disagree in a useful way:** one table returned **50 of 50 substantive claims
HELD**; another returned **10 of 30**. ⚠️ **What failed in the first was never the substance — it was
METADATA, stale in roughly a third and ALWAYS UNDERSTATING SCOPE** (198 diagrams recorded as 127; 28 source
files as 26; 609 occurrences as 346). **Trust what a row SAYS. Re-measure every number it QUOTES.**

# ⚠️⚠️⚠️ THE PLAN WAS DENYING ITS OWN EVIDENCE BASE

**Four rows told agents `sources/usah_casebook.txt` was not on disk. It is — 1,055,619 bytes**, with a full
`sources/README.md` entry. **One row printed `ls sources/ | grep -i case` as PROOF the directory was empty**,
under a filename (`usah_case.txt`) that has never existed — ⚠️ **while other rows in the same file quote the
real file BY LINE NUMBER.** Same for **`sources/bvhs.txt`** (75,150 bytes) and **`sources/nhl_rules_2024-25.pdf`**
(12.7 MB).

⚠️ **`CLAUDE.md` ALREADY NAMES THE CONSEQUENCE: four separate reports have filed *"this source cannot be
verified"* when the answer was written down all along.** ⚠️ **A row like that does not merely waste a wave —
it converts a CHECKABLE claim into an UNVERIFIABLE one, and the corpus then hedges something it could have
confirmed.** That is the direction every false disclosure in round 59 ran.

**All four corrected, and a standing banner now heads the plan carrying the measured hold rate.** The useful
half of the `bvhs` row was kept: its extraction ratio is **1.18%** — 75 KB from a 6.3 MB PDF — which
`sources/README.md`'s own rule calls images, **so an empty grep there proves nothing and it needs
`pdftoppm`.** The acquisition is closed; **the reading never happened, and the ratio is why.**

# ⚠️ A COMMENT IS NOT A MEASUREMENT — three instances in one wave

1. **`body_contact_and_battles.mjs` asserted *"`goaltender.md` carries neither 608(b) nor 7.5(c) ANYWHERE"*
   and, in capitals, *"NOTHING IT LEANS ON MAY LIVE IN A HOST DOCUMENT'S SURROUNDING PROSE."*** ⚠️ **All
   seventeen phrases the coordinator's brief called absent are PRESENT** — `608(b)` four times, `7.5(c)`
   four times, `edges are gone` at `defender.md:253` **inside the very subsection hosting the marker.** The
   migration the brief demanded **had already been done**, in `a7871c7` and `35bddbb`.
   ⚠️ **A stale assertion in a CODE COMMENT became a plan row, became a brief, became an agent's
   instructions — and its PRINCIPLE produced the longest caption in the corpus.** A caption forbidden to
   lean on its host must restate everything, in every host, forever. **The agent rewrote the comment as well
   as the caption; leaving it would have re-manufactured the same brief next round.**
2. **`risk_management.mjs` quotes a pinch definition *"from the same section"* that is not in
   `risk_management.md` at all** — it is `offensive_zone_play.md:817`'s, worded differently. An agent nearly
   cut a caption's definition on that basis.
3. **`global.css` asserts *"`scrollbar-color` covers Firefox, the `::-webkit-scrollbar` block covers Chrome
   and Safari."*** Chrome honours the standard property and ignores the webkit block. ⚠️ **Measured before
   filing, which DOWNGRADED it: both paths set the same colours, so nothing is mis-coloured — the only
   casualty is an explicit height. A dead block and a false comment, not a broken scrollbar.**

⚠️ **THE GENERAL FORM: a comment stating a fact about ANOTHER file goes stale the moment that file is
edited, silently, because no checker reads comments.** The corpus knew this about plan rows and review
records. **It now knows it about `scripts/` and `site/src/` comments.**

# Rules findings, and two briefs refuted

⚠️ **`special_teams.md` put the reader IN the crease.** Its facts value and body said the net-front player
lives *"at the edge of the blue paint"* — **and the edge of the paint IS the red crease line.** IIHF 1.7:
*"The marked line belongs to the Goal Crease."* USA Hockey's 625(b) Note and **Casebook 103 Situation 4**
(*"Is the two inch red line… considered part of the goal crease? **Yes.**"*). Hockey Canada's **Glossary**:
*"The lines of the crease are considered part of the crease."* CARHA agrees. ⚠️ **The caption had been
corrected in an earlier round and the OWNING SECTION never was** — a correction that reached the picture and
stopped.
⚠️ **AND THE AGENT CAUGHT ITSELF BEFORE SHIPPING A FALSE SENTENCE: the NHL is SILENT, not contrary** — no
Glossary entry for Goal Crease at all — **and NHL Table 14 Situation 5E and IIHF Appendix IV Situation 5E
both rule "Goal is allowed" for an attacker planted ON the crease line.** So the IIHF's rulebook and its own
appendix pull against each other, and a flat *"the line is the crease, so you lose the goal"* would have been
**false and retractable.** The tension is now recorded rather than resolved.

⚠️ **A "silence" claim refuted by a Glossary.** The coordinator sent `rules-verifier` at the corpus's
most-hosted caption (voiced **seven** times), alleging it converted Hockey Canada's silence into a holding.
**Hockey Canada's Glossary DEFINES encroachment as standing *"with a skate inside the face-off circle, **on
the face-off circle**, or in the area between the hash marks."*** ⚠️ **The coordinator had read Rule 6.2 and
stopped — the exact recorded failure of not reading a book's definitions before writing a "writes no"
sentence.** The caption was right; no change was made.

⚠️ **A penalty repair that never travelled, and the brief about it was wrong in four ways.** A Tier 1 row
claimed *"Repaired at all three sites."* ⚠️ **The coordinator's brief then claimed the sibling file "teaches
the opposite" and "tells a reader an act is not penalised". BOTH FALSE** — the sentences said the *converse
clause* is unwritten, which is **literally true of USA Hockey's rule text**; the minor comes from **614(a)**
applied generically, exactly as the Casebook's own *"Rule References 614(a and b)"* shows. **The real defect
was a four-word advisory, *"so do not assume it"*, erring in the OVER-punitive direction.** *"Delete it as
false"* would have been the wrong repair.

⚠️ **And that agent found a worse defect in a file it did not own:** `defending_the_rush.md` says Hockey
Canada and USA Hockey *"each reach the same minor by published interpretation."* **False for Hockey Canada** —
its only Interpretation on this ground is the **inverse permutation** (puck inside, player outside), ruled a
minor *because the puck was scooped out first.* ⚠️ **So the corpus tells a reader Hockey Canada reaches a
minor where it has ruled nothing, while 10.2(a)(v) read on its face could still get them the PENALTY SHOT —
the UNDER-penalising direction.** ⚠️ **The corpus held THREE positions on Hockey Canada across FOUR files.**

# What this round could not have found

**Nobody has heard the audio.** Every read-aloud judgement here is a reading of the renderer's rules.

**No caption was seen rendered BY THE AGENTS THAT WROTE THEM.** Five were forbidden to build, so
`diagrams.json` was stale throughout their work and **`check_absolutes.py` could not certify the caption
layer until the coordinator rebuilt.** Two named that as their largest gap.

⚠️⚠️ **AN EARLIER VERSION OF THIS PARAGRAPH THEN SAID "None of the 22 shortened captions has been seen on
a page, at phone width, or in either theme." THAT WAS TRUE WHEN WRITTEN AND FALSE BY THE TIME IT SHIPPED.**
A `site-reviewer` ran afterwards and measured **726 figure renders** — 242 figures at three viewports —
finding **0 captions too thin, 0 truncated, 0 blank figures**, with the 21 shortened captions landing
between **943 and 3,109 characters**. Its section sits **above this one in this same file.**

⚠️ **A commit gate caught the contradiction: "A future round scoping from that residual will redo finished
work — the round's own thesis, uncaught by its seven corrections."** ⚠️ **This is the
counted-list-with-stale-enumeration shape, in the residuals section of the record whose subject is stale
claims.** It survived because it errs toward **under**-claiming, which is the direction no reviewer stops
on — the same direction as every false disclosure round 59 found.

**The honest residual is narrower:** the renders were **Chrome only** — no Firefox, no WebKit, no real
device — **8 of 21 captions were read in full and 6 seen at all four matrix cells**; the other 13 passed
mechanical truncation and thinness tests only, **so a caption that is complete but now WRONG about its own
picture would have passed.** And one agent flagged that `the-call`'s new length leaves a **+89-character
margin** against the renderer's split point (not the ~50 first reported), calculated from source and never
run through `transform_document`.

**Whether the shortened captions still teach.** Every agent said the same thing independently: they read the
host documents before cutting, **which is precisely the state that disqualifies them from judging it.** It
needs a reader who does not already know the answer.

**The other 62 negation hits.** Six of 68 were read. **The rest have not been.**

**37 of 129 triaged units were classified on the body's own statement, not independently verified** — at the
measured hold rates, several will reclassify.

**And the thing no rulebook grep answers:** every rule in this round verifies, and a legal technique
delivered badly still injures somebody.


---

# ⚠️ Corrections to this record, made after a commit gate re-derived its figures

**Every one is the same shape, and it is the shape this record is ABOUT.**

1. ⚠️ **The plan's own line counts were wrong HERE and in the brief that produced them: the real move is
   `17,632 → 15,220`, not `17,543 → 15,201`.** ⚠️ **Committed inside the record that names *"metadata stale
   in roughly a third, always UNDERSTATING scope"* as the round's finding.** The 13 `findings_*.md` headers
   repeated it and are corrected too.
2. **"22 captions across 10 modules" → 21 caption/`describe` units across 12 modules**, measured from the
   build product and the staged file list.
3. ⚠️ **"6 ranked MOST SUSPICIOUS" — the tool prints NOTHING in that band.** Those six are in the band
   labelled **`suspicious`**. **Anyone following this record would have looked for a heading that does not
   exist.**
4. **"All four files now say 'price the penalty shot under Hockey Canada'" is not true as stated.** Only
   `defending_the_rush.md` uses that phrasing; the others say *"so price the shot there"* and *"so do not
   assume the softer half of the rule under it"*. ⚠️ **They agree in SUBSTANCE, which is what matters — but
   asserting verbatim uniformity tells the next gate to check the wrong thing.**
5. ⚠️⚠️ **THE CREASE-LINE FINDING WAS NOT NEW, and this record framed it as reaching only one caption.**
   `content/foundation/rink_map_and_glossary.md:355` already read *"the red boundary line counts as crease
   under the IIHF, USA Hockey and Hockey Canada, and the NHL never says either way"*, and
   `site/src/diagrams/rule69_clauses.mjs:80` carried it as well — **both untouched by this round, last
   changed in `84671fb`.** ⚠️ **A statement about the corpus's state, made without grepping the corpus —
   which is precisely *"the plan was denying its own evidence base"* committed by the record about it.**
6. ⚠️ **AND THE PROPAGATION STOPPED ONE DOCUMENT SHORT.** `offensive_zone_play.md:435` — a `Position:`
   value **voiced alone** — read *"At the edge of the blue paint… roughly six to eight feet out"*, with
   `:454` repeating it in the summary. **The crease arc radius is 6 ft, so "six feet out" at the midline IS
   the arc — the red line.** `special_teams.md` was changed away from that exact phrase today for that
   exact reason, and the caption keeps the range only because it pairs it with the counterweight **in the
   same voiced unit**; the facts value's counterweight was **89 lines away in a different block.** ⚠️ **"A
   correction that reached the picture and stopped" — this time it reached the picture, reached
   `special_teams.md`, and stopped.** Both sites now carry *"and with both feet off the red crease line
   itself"*.
   ⚠️ **`defensive_zone_coverage.md:99` was checked and deliberately LEFT: it describes where the OPPOSING
   scorer stands, seen from the defending team's view. A threat description is not an instruction, and a
   sweep would have "fixed" it.**
7. **Two directly-implicated worklists were not run and were not in the state line** — `check_diagram_quotes.py`
   (21 captions rewritten) and `check_plan_rows.py` (the plan restructured). ⚠️ **`CLAUDE.md`'s rule is to run
   the checks FROM THE LIST, NOT FROM MEMORY**, and this round wrote a new tool into that list while
   forgetting to run two others already on it.

---

# The three reviewers the gate demanded, and what they found

⚠️ **The gate BLOCKED on provenance, not on fact: *"No factual defect found in the staged text."*** Its
point was that the coordinator had repaired rules claims and reviewed them personally. **It was right, and
the three reviewers then found ten things.**

## `safety-reviewer` — NO CRITICAL, NO MAJOR

On 21 shortened captions and five rules-bearing documents. ⚠️ **It verified the two worst-case cuts in the
RENDERED SPEECH rather than by grep:** `shot-block-get-close` lost *"Never turn your back, never turn
sideways and never lift a leg"* — **sound, because the technique those bounded was cut with them**, and in
both hosts the prohibitions open the very next voiced chunk. `net-front-walk-out-direction` was halved and
its scope gate survives **inside the caption**. `the-call-and-who-can-see-it` keeps its instruction verbatim.

## `rules-verifier` — every citation confirmed, and four findings, two of them the coordinator's

⚠️ **F1 — THE REPAIR DID NOT REACH THE CAPTION LAYER OF ITS OWN DOCUMENT.** `oz-net-front-screen` still
**opened** with *"at the edge of the blue paint"* — the phrase removed from `offensive_zone_play.md` as
critical — and closed with the counterweight, so **one voiced block told the reader to stand on the line
and then told them not to.** ⚠️ **And `oz-post-shot-shape`'s `describe` carried the phrase NAKED.**

⚠️⚠️ **AN EARLIER VERSION OF THIS PARAGRAPH SAID "BOTH FIXED". ONLY ONE WAS.** The caption opening was
repaired; **the `describe` — the half a reviewer graded NAKED — was not**, and this record certified it
anyway. A commit gate caught it in the staged diff, in the build product and in the published HTML.

⚠️ **HOW IT HAPPENED, because the mechanism is the finding:** the replacement list contained a pair that
replaced a string with itself, and **the verification grep searched for `edge of the blue paint` while the
source splits it across two lines** — `'…at the edge ' + 'of the blue paint…'`. **The grep returned zero and
the zero was believed.** ⚠️ **`CLAUDE.md` states the rule in terms — *flatten whitespace before believing any
zero* — and this round put that warning into THREE separate briefs before falling into it.**

⚠️ **The gate's own words: *"It certified a repair it did not make… the round's own thesis is 'a claim about
a source made without re-reading the source' — and the source, this time, was its own diff."*** Had the gate
inherited the brief instead of grepping the tree, **the string this round removed corpus-wide as critical
would have shipped under a record saying it had been removed.**

**Now fixed, and verified by a FLATTENED search that joins adjacent string concatenations before looking:
zero live strings carry the phrase.**

⚠️ **F2 — THE COORDINATOR'S OWN REPAIR WAS INTERNALLY INCONSISTENT.** It wrote *"roughly six to eight feet
out, and with both feet off the red crease line itself"*. **NHL 1.7 and Hockey Canada 1.5(b) both put the
crease arc at a SIX-FOOT radius from the midpoint of the goal line** — so **the range's lower bound IS the
line the same sentence forbids.** The arithmetic was in the brief and was not followed through. Both sites
now say the arc reaches six *"so live at the far end of that range"*.

⚠️ **F3 — A USA HOCKEY CASEBOOK SENTENCE ATTRIBUTED TO THE NHL AS RULE TEXT**, pre-existing, in the
paragraph above a repair. *"[T]he location of the puck at the instant it is covered or held is the
determining factor"* returns **0 in both NHL extractions and 2 in `usah_casebook.txt`.** The NHL's
equivalent says *"significant factor"*. ⚠️ **Substance identical, attribution wrong — a correct quotation
under a wrong source, which passes every check anyone runs.** Fixed.

⚠️ **F4 — AND IT CORRECTED THE BRIEF.** **IIHF Rule 1.7 has a SECOND paragraph the corpus did not carry:**
*"The Goal Crease Area includes all of the space outlined by the crease lines"* — **the NHL's formulation
word for word**, in the very rule the document was contrasting the IIHF *against*. ⚠️ **So the "the two
books pull against each other" framing was stated more absolutely than the text supports.** The document
now carries the marking-versus-area split and names the reading under which they do not conflict —
**labelled as this document's reading, not either book's.**

**Also corrected:** the coordinator's *"the NHL is SILENT"* is right about the **definition** and wrong
about the **book** — Table 14 Situation 5E is the NHL speaking to the line, and it runs the other way. The
facts value and the Sources trailer are now scoped to *Rule 1.7* rather than to the NHL as a whole.

## `site-reviewer` — PASS on all three sections

⚠️ **The finding it existed to catch was NOT found: 0 captions too thin, 0 truncated, 0 blank figures**,
across **726 figure renders** (242 figures × 3 viewports). The 21 shortened captions land between **943 and
3,109 characters**. A sentence-level diff flagged 35 of 145 removed sentences as possibly load-bearing;
**on reading, every one was a rephrasing, not a loss.**

**The feed verified:** `xmllint` clean · 37 items · **37 CDATA descriptions · 37 `https` anchors · 0
non-https** · `itunes:email` **exactly once** and character-correct · category nesting well-formed.
⚠️ **And an email-leak sweep over the whole of `dist`: the owner's personal address returns ZERO.** The
only addresses present are the new alias, England Ice Hockey's published contact quoted from its own
regulations, and **15 third-party addresses inside Pagefind's vendored UI translation credits** — not
repository data, but worth knowing in a public repo.

**Deep links re-measured, not eyeballed:** `scroll-padding-top` 128px on document pages / 72px on index
pages; headings land at 128 with the player bottom at 113 — **15px clear**; `elementFromPoint` returns the
heading in every case.

# Left deliberately, and recorded rather than swept

- **`risk_management.md:658` never names the price under Hockey Canada.** Its neighbour at `:656` does, so
  the document delivers the substance across two paragraphs. **An asymmetry, not a contradiction.**
- **"inside the paint" is not the same proposition as "part of the crease."** The books say the line is part
  of the **crease**; Hockey Canada 1.5(b) says the *interior colouring* is blue, and ⚠️ **USA Hockey
  Casebook 103 Situation 5 says in terms that a rink may shade only a truncated crease while the red line
  still governs.** The corpus uses the two interchangeably throughout. **A house-style question, and
  Situation 5 is the authority that makes "red crease line" the right phrasing.**
- **No ToC scrollspy exists** — verified as absent from the codebase, not a regression.

# ⚠️ A COMMENT IS NOT A MEASUREMENT — a FOURTH instance, created by this round's own repair

Fixing the caption left **four comments in three modules quoting the old text as current**, including one
citing a line number for a string that no longer exists. **All four annotated with what the sites now say.**
⚠️ **The geometry in those comments is correct and was left untouched; only the quotations went stale.**
**That is the whole shape: a comment quoting another file is a claim about that file, and it goes stale
silently because no checker reads comments.**

---

# `facts-reviewer` — run after a second gate block, and it found the round's only CRITICAL

⚠️ **A gate blocked because NINE facts values changed across five documents and this dimension had not
run.** Its words: *"`check_facts.py` passing is not coverage — it cannot see what a value now implies.
Silence on a dimension is the failure mode, and it is silent here."*

⚠️ **The brief said eight values. There were NINE** — it had missed an `Action:` rewrite at
`special_teams.md:985`, reviewed and found clean.

## ⚠️⚠️ CRITICAL — two adjacent facts values contradicted each other, voiced 300 ms apart

`content/systems/defensive_zone_coverage.md:594` and `:595`.

**`:594`** said all four books make the **puck's** location the test for the penalty shot — under which a
puck outside the paint is a minor and **never** the shot. **`:595`** said that under Hockey Canada you
should **price the shot**. ⚠️ **Both cannot be true, and a listener gets them back to back.**

**The body reconciles them; the block did not.** ⚠️ **`:594` had shed the qualifier that made its universal
claim true: Hockey Canada 4.11(a)(v) reaches its HAND limb only** — *"picks up the puck from the ice with
their hand while the puck is in the goal crease"*, verified on disk — while 10.2(a)(v) locates *"the
infraction"*, not the puck. **Restored, at 282/300.**

⚠️ **This is the same defect class as the `:982`/`:983` collision a gate caught in `special_teams.md`, in a
different file, and no other pass found it.**

## The provenance limit three values had shed

**M1.** Three `Rule:` values asserted Hockey Canada rules it *"nowhere"* / *"in no ruling at all"*.
⚠️ **The body scopes that precisely — *"no Hockey Canada equivalent is held here, and no Hockey Canada
casebook is held here to look in"*** — and `sources/` holds `hc.txt` and `hc_layout.txt` and **no Hockey
Canada casebook.**

⚠️ **A bare "Hockey Canada rules it nowhere", heard alone, is an absolute claim about a governing body's
entire published corpus, made from one volume.** All three now read *"no Hockey Canada rule or
Interpretation held here covers it"* — **a claim about what was checked, not about what the book
contains.** ⚠️ **It is the direction this project guards hardest against: sounding more certain than the
evidence.**

**M2** — one value dropped half its condition (*"and you were inside it"*), stating the general case where
the body states a two-part conditional, **in a block whose neighbours cover the opposite case.** Restored.
**M3** — *"so price the shot there"* abutting *"nowhere"* left *"there"* with no clean referent, and could
be heard as *"in the paint"*. Fixed in all sites.

## M4 — the value dropped the datum its own body flags as easy to get wrong

`offensive_zone_play.md:435`, a `Position:` value **voiced alone**, said *"six to eight feet out"* and
**never said out from WHAT.** ⚠️ **Taken from the crease edge instead of the goal line that is 12–14 feet
out, and the screen is destroyed.** The body anticipates exactly this misreading and warns about it in
terms — *"Note the geometry, because it is easy to get wrong"* — and **the facts layer exists so a reader
can skip the body.** Now *"from the goal line"*.

## M5 — the new value omitted what a crease foot actually costs a POWER PLAY

`special_teams.md`'s new `Rule:` told the reader the line is inside the crease under three books and
stopped. ⚠️ **In a power-play section the expensive outcome is not a disallowed goal — it is the whistle
that ends the zone time.** USA Hockey 625(b), verified on disk: a face-off *"at the nearest neutral zone
face-off spot"* whenever an attacker stands in or skates through the crease with the puck in the attacking
zone, their team in possession and the goalie touching the crease — **three conditions that routinely hold
on a power play.** A second `Rule:` value added at 289/300; **the block is 10/11 total and 8/8 coaching,
and `Rule:` is exempt from the coaching cap.**

## ⚠️⚠️ AND IT CAUGHT THE FIFTH INDEX/TREE DIVERGENCE OF THE SESSION

`content/systems/special_teams.md` was **`MM`**. ⚠️ **The repairs a gate had just demanded existed only in
the working tree.** **A commit of that index would have shipped the exact collision the gate blocked on**,
while every mechanical check passed — because the checkers read the tree and `git-guard.sh` gates on the
checkers. ⚠️ **Found by a reviewer. No checker can see it, and this is the fifth time in one session.**

## ⚠️ A SECOND FALSE ZERO, produced by the coordinator and caught before it mattered

A grep for USA Hockey's 625(b) sentence returned **nothing** — because the extraction hyphenates it across
a line break as **`face- off`**. ⚠️ **The rule was verified before being quoted.** But that is **two false
zeroes from unflattened greps in one session, both the coordinator's**, after *"flatten whitespace before
believing any zero"* went into three separate briefs the same day. ⚠️ **Knowing the rule is not the same as
running the search that way.**

# Dimensions — coverage for this change

| # | dimension | this round |
|---|---|---|
| **D1–D3** | rules accuracy, exceptions, rule-set divergence | ✓ **`rules-verifier`** on five `content/` files; **three gates** re-derived every citation independently from `sources/`. ⚠️ **A gate then found a caption compression had dropped NHL 27.8's written exception** — restored. |
| **D4** | citation integrity | ⚠️ **OUT OF SCOPE, and here is the reason:** the staged `content/` diff introduces **no new external URL** — added and removed URL sets are identical, verified by a gate. No link-rot surface was created. |
| **D5** | provenance | ✓ **and it failed once before it held.** A USA Hockey Casebook sentence was attributed to *"the sentence the NHL prints as rule text"* — **0 hits in both NHL extractions, 2 in `usah_casebook.txt`.** Corrected. |
| **D6** | negative existence claims | ✓ **M1 above is exactly this dimension** — three values rescoped from an absolute about a governing body to a claim about what was checked. |
| **D7** | the cardinal rule | ⚠️ **PARTIAL. No `content-reviewer` ran.** `facts-reviewer` flagged one `Rule:` value opening with an imperative and judged it rule-compelled under 625(b). **Nobody swept for coaching-choice-as-law this round.** |
| **D8** | numeric ownership | ✓ **M4 above.** ⚠️ **And the coordinator's own plan figures were wrong** — 17,632→15,220, not 17,543→15,201 — inside the record that names stale metadata as the round's finding. |
| **D9** | the summary layer | ✓ propagation checked into Common Mistakes and Key Takeaways on every content repair; ⚠️ **one repair reached the picture and stopped, and was caught by a gate.** |
| **D10** | the key-facts layer | ✓ **`facts-reviewer`, this section.** ⚠️ **Scope declared: 6 of 26 documents, 62 of ~889 blocks.** A targeted review of the changed values, not a corpus sweep. |
| **D11** | reader safety | ✓ **`safety-reviewer`: NO CRITICAL, NO MAJOR** on 21 captions and five content files, verified in rendered speech. ⚠️ **18 of 21 captions were not individually named.** |
| **D12** | read-aloud integrity | ✓ **the round's largest single finding.** ~15 pre-existing inversions repaired; **a new worklist tool built** for a layer nothing mechanical had ever swept. ⚠️ **63 of 68 hits remain unread.** |
| **D13** | folklore | ⚠️ **NOT CHECKED, and declared so rather than assumed clear.** No `content-reviewer` ran. ⚠️ **Round 71 declared this out of scope and a blocking defect turned out to be exactly its shape** — that is why it is named here rather than omitted. |
| **D14** | structure, style, terminology | **PARTIAL.** `check_links` 0 across 10,241 links and 5,573 anchors; `check_tables`, `check_chunk_splits` and the new `check_caption_negations` run and read. **No terminology pass.** |
| **D15** | the rendered site | ✓ **`site-reviewer`: PASS**, 726 figure renders, 0 captions too thin, feed verified well-formed with 37 https anchors. ⚠️ **Chrome only — no Firefox, no WebKit, no real device.** |

⚠️ **Reviewers run: `safety-reviewer`, `rules-verifier`, `site-reviewer`, `facts-reviewer`, and `commit-gate`
five times. NOT run: `content-reviewer`, `source-verifier`, `diagram-reviewer` on the compressed captions.**

# Also left deliberately, and recorded rather than swept

- **`icing-gaining-the-line` dropped the shorthanded-icing paragraph** — NHL 81.6's major carve-out and USA
  Hockey 624(b)(1)'s classification limit. ⚠️ **Verified severable before accepting it: all four hosts carry
  81.6 and 624(b)(1)**, and the caption keeps *"for a team equal or superior in numerical strength"*, so it
  asserts no bare exemption.
- ⚠️ **`site/src/diagrams/offensive_zone_play.mjs:626` carries `label: 'edge of the paint'`** — it reaches
  `diagrams.json` and renders. **Pre-existing, last changed in `f2504ce`, outside this diff. A row, not a
  fix, because a label is not a sentence and the change wants its own review.**
- **`oz-net-front-screen`'s *"That reads the rule's structure rather than anything either book states in
  terms"* now follows a statement the books DO make in terms** (Situation 5E). ⚠️ **Referent drift from a
  compression — it hedges something directly printed. Understatement, not overstatement.**


---

# ⚠️ Recorded after the gate cleared — the icing-disclosure restoration

A caption compression stripped an honest disclosure from `icing-the-race-and-the-dot`: *"though not the
whole rule: the IIHF adds a paragraph for when there is no race at all"*, leaving *"IIHF Rule 81.1 in the
same words"* standing alone. **Non-negotiable 4: an honest disclosure is not a length saving.** Restored,
and verified against `sources/iihf_rules.txt` — the no-race paragraph is real.

⚠️ **A gate noted the restoration itself was on no record, which is C11's third leg unmet.** It is now.

**And one cut was verified severable and deliberately LEFT:** `icing-gaining-the-line` dropped the
shorthanded-icing paragraph — NHL 81.6's major carve-out and USA Hockey 624(b)(1)'s classification limit.
⚠️ **Checked before accepting: all four hosts carry 81.6 and 624(b)(1)**, and the caption keeps *"for a
team equal or superior in numerical strength"*, so it asserts no bare exemption.
