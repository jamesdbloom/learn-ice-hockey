# What is open

**Consolidated 11 September 2026**, from a file that had reached 17,485 lines and was ruled *"too long to be
useful"*. Everything before that date is preserved verbatim in
[`plan_archive_2026-09-11_pre_consolidation.md`](../reviews/plan_archive_2026-09-11_pre_consolidation.md);
this file carries **only what is still to do, and the guidance for doing it.**

⚠️ **Keep it this length.** A plan nobody reads is not a plan. When a row closes, move it to a review record
in the same commit as the work — ⚠️ **a row staged beside its own repair is a false claim**, and that shipped
into the gate twice on 11 September.

---

# The two owner priorities

**Set by the owner, above everything below.** They are related: the biggest undrawn sections are the most
rules-dense ones, because rule detail is not drawable.

## P1 — DIAGRAMS. The thing that improves readability most.

**Census re-run 11 September 2026** over `##` and `###` sections, summary layers excluded:

| | |
|---|---|
| teaching sections | **1,528** |
| carry a diagram | **247 (16%)** |
| carry none | **1,281** |

⚠️ **This supersedes the 4 September census, which measured 23% / 12% on a different definition and had a
boundary bug** — it treated only `###` as a boundary, so the last subsection of every `##` swallowed Common
Mistakes, Check yourself and Key Takeaways. `winger.md`'s *"Backchecking"* was reported at 7,579 words; it is
429. **Measure per SECTION, and count both heading levels, or the number is wrong.**

**Where the gap is worst — biggest undrawn section per document:**

| words | undrawn/total | document | the section |
|---|---|---|---|
| 10,515 | 54/62 | `foundation/rules_primer.md` | Body fouls |
| 7,947 | 35/51 | `foundation/rink_map_and_glossary.md` | 8. Glossary |
| 6,764 | 16/21 | `systems/special_teams.md` | Clearing, blocking, sticks and discipline |
| 5,754 | 26/31 | `technique/shooting.md` | How to create those shots |
| 5,550 | 26/36 | `systems/forechecking_systems.md` | What your book allows when you get there |
| 4,763 | 57/65 | `technique/body_contact_and_battles.md` | What actually gets called |
| 4,340 | 31/39 | `hockey-iq/risk_management.md` | 9. Never shoot the puck over the glass |
| 4,174 | 50/65 | `positions/goaltender.md` | The protection you have — and how it differs by book |
| 3,735 | 16/22 | `hockey-iq/time_and_space.md` | 6. How the rules create space |
| 3,396 | 29/35 | `systems/defending_the_rush.md` | The carve-outs, and how far they reach in each book |

⚠️ **READ THAT COLUMN OF SECTION TITLES.** *Body fouls · What your book allows · What actually gets called ·
The protection you have and how it differs by book · How the rules create space · The carve-outs.* **The
biggest undrawn sections are rules-survey prose.** They are undrawn because **there is nothing to draw** — a
list of what four books say is not a picture. **That is P2, and it is why the two priorities are one
problem.**

**So the diagram work splits in two, and only the first is a drawing job:**
1. **Sections that teach something spatial and lack a picture** — draw them.
2. **Sections that are rules surveys** — ⚠️ **do not commission a diagram. Cut the survey (P2). If what
   survives is spatial, it gets a picture then.**

**Before drawing anything:** `site/src/diagrams/*.mjs` is a shared area. **One module per agent**, and
re-check ownership between agents — four agents were once sent there in one round, each brief saying *"you
own exclusively"*, and a rebuild published six captions and a `describe` nobody had read. ⚠️ **A diagram
source change has a blast radius the diff does not show:** `forecheck-pinch` renders on
`/systems/forechecking_systems/` **and** `/systems/game_management/`. **Grep `dist` for the diagram id before
reviewing a caption.**

⚠️ **The owner does not want long captions.** The two longest of 198 are `forecheck-press` (3,435 chars) and
`forecheck-pinch` (3,102). At 390px the picture is 18% of the figure and one safety band runs 836px. **A
caption is not where a section's content goes.**

## P2 — BIG PICTURE OVER TECHNICALITY. Some rules, not a rulebook.

**The owner's ruling:** the corpus should teach the game — where to be, what to do, what happens next — and
**may mention rules**, but must not read as a rules reference.

⚠️⚠️ **THE FIRST FIGURE IN THIS SECTION WAS WRONG AND WAS COMMITTED. Read this before quoting any number.**
It said *"16,523 citations, 13.9 per 1,000"*. **The counter matched any decimal** — `4.5` ft, `2.10×`,
`16.6%`, `1.7` m, version `1.1` — **35% of the figure was not a citation.** It also counted the **Sources
trailer**, which `md_to_speech` strips and which is exactly where homework-proving belongs. **Found by the
pilot agent, which could not reproduce the number by any of five methods.**

**CORRECTED, body only, requiring an explicit `Rule N` or `NNN(a)` form:**

| | |
|---|---|
| body words | **1,175,572** |
| rule citations | **10,575** |
| **density** | **9.0 per 1,000 — a rule number every ~110 words** |

⚠️ **MEASURE THE BODY, NOT THE FILE, AND REQUIRE THE WORD "RULE".** A bare `57.1` is indistinguishable from
a measurement.

### ⚠️ The corpus ranking is the WRONG comparison. Use the peer group.

The pilot's most useful finding. `team_play_and_culture.md` ranked **4th** corpus-wide, which reads as
unremarkable. **Against its own section it was an outlier by an order of magnitude:**

| off-the-ice | /1k |
|---|---|
| `team_play_and_culture.md` | **9.2** ⚠️ |
| `equipment.md` | **7.6** ⚠️ **next target** |
| `how_to_watch_hockey.md` | 3.4 |
| `conditioning_and_recovery.md` | 2.2 |
| `practice_and_development.md` | 1.5 |
| `mental_game.md` | 0.4 |

**A culture document at 9.2 beside a psychology document at 0.4 is the case. Brief the next twelve on their
peer group, not on the corpus rank.** Densest overall are `rules_primer.md` 14.7 (legitimately a reference),
`faceoffs.md` 14.2, `goaltender.md` 13.8, `body_contact_and_battles.md` 11.6.

### The test

**Does a player need this to play the next shift, or to not get hurt or ejected?** If yes, keep it,
compressed. If it is a four-book comparison, **move it to `rules_primer.md` and link.** If it is there to
prove the homework was done, **the Sources trailer already is that place.**

⚠️ **THE DUPLICATION IS THE UNLOCK.** The pilot's biggest wins were surveys `rules_primer.md` already holds
in more depth with the same quotations. ⚠️ **Verify the owner by READING the target section, not by trusting
a pointer** — and check the rule number exists elsewhere at all: **four numbers in the pilot document existed
NOWHERE else in the corpus**, so a link would have pointed at nothing and they were compressed in place.

### ⚠️ Three constraints the pilot discovered, which the first brief got wrong

1. ⚠️ **THE FACTS-LINE DESTINATION DOES NOT EXIST FOR OFF-ICE DOCUMENTS.** The style guide **excludes the six
   off-ice documents from ` ```facts ` blocks by name** — *"they are reference or off-ice material, and
   imperatives would misrepresent them."* `check_facts.py` covers **26 documents, not 37.** For those six the
   only destinations are **paraphrase in place** and **the trailer**.
2. ⚠️ **CUT THE ENUMERATION, KEEP THE INFERENCE.** The hardest passage was an ~800-word five-book survey that
   existed to prove *no book reliably protects your goalie* — which is the whole reason the convention
   matters. **The enumeration went; the load-bearing conclusion stayed.** ~230 words.
3. ⚠️ **RUN A REMOVED-QUOTATION-VS-CORPUS DIFF BEFORE FINISHING.** The pilot **broke non-negotiable 3 once**
   — it dropped *"[bench doors] must swing inward so they cannot be left protruding onto the ice"*, which a
   grep then showed existed **nowhere else in the corpus.** It restored it. ⚠️ **It surfaced only because the
   agent diffed removed quotations against the corpus rather than trusting its own hunks. Put that check in
   every brief.**

### ⚠️ What a compression costs, and who must see it

**A compression is new text, and it removes the hedging that made the original cautious.** The pilot said it
plainly: *"if the pre-existing text was wrong, my version is wrong more concisely and now reads as more
confident because the hedging quotations are gone."* **`rules-verifier` matters MORE after a compression pass
than before it**, and anything touching contact, technique, equipment or a penalty tier needs
`safety-reviewer`.

⚠️ **And density is a PROXY, not the ruling.** A document that discusses rules heavily **without numbering
them** scores zero and looks clean. **Read the next one before trusting its number.**

### ⚠️⚠️ THE HARD PILOT: measure the BODY, and the target is REPETITION as much as survey

`faceoffs.md` was dispatched as the hard case — second-densest in the corpus — with the instruction that the
most valuable finding would be **where the ruling does not apply**. It was.

**Split by layer, the headline dissolves:**

| layer | words | citations | /1k |
|---|---|---|---|
| Sources trailer | 6,306 (14%) | 321 (**29%**) | 50.9 |
| ` ```facts ` blocks | 6,766 | 230 | 34.0 |
| **body prose** | **31,992** | **538** | **16.8** |

⚠️ **The trailer is where the ruling says homework belongs; the facts layer is where it says the citation
belongs. The body was two points above corpus mean, not eight. The headline figure was mostly the file
OBEYING the ruling already.**

⚠️ **AND THE REAL DRIVER WAS NOT COMPARATIVE RULES WORK — IT WAS REPETITION.** One IHUK sentence quoted
**verbatim 12 times**; the same edition story (*2025/26 warned, 2026/27 ejects, IHUK settles it*) told at
**eight separate sites**, each time re-quoting the sources. **Deduplicated to 5 sites. Body 16.8 → 14.4,
corpus mean. 1,834 words cut.** ⚠️ **Look for repetition before looking for surveys.**

### ⚠️⚠️ WHERE THE RULING DOES NOT APPLY — read this before briefing any rules-heavy document

**Most of `faceoffs.md`'s density is EARNED, and compressing further would damage it.** The four-book cases
there are not a survey; **they are the instruction:**

- ⚠️ **A British centre who does exactly what the IIHF book says is in violation.** IIHF 76.7(IV) asks for
  *"at least the toe"*; IHUK requires *"the whole of their stick blades (not toe or heel)"*.
- ⚠️ **Four different answers to "where do I put my foot", and the wrong one ejects your centre** — NHL/IIHF
  permit a skate on the line, Hockey Canada counts it as encroachment, USA Hockey's Casebook says *"all
  sticks and all skates"*.
- Stick-down order: three answers across four books, deciding who shows their blade angle first.
- Kicking the puck back is legal in the NHL and a violation under the IIHF — **a technique a British reader
  must delete from their repertoire.**

⚠️ **The agent's own reason, which is the best statement of the limit anyone has given:** *"a faceoff is the
only moment in hockey where a TEAMMATE's positioning penalises YOU. The four-book comparison is how a reader
learns their winger can cost them the draw, and it cannot be compressed to one book without picking a book
for a reader you cannot see."*

✅ **AND THE DOCUMENT ALREADY HOLDS THE RIGHT PATTERN — copy it.** At *"The rule everybody gets wrong"* it
sets out all four books and then lands on: ***"The instruction that survives all four books is the short one:
keep your skates and your stick behind your own hash mark."*** **Set out the divergence, then land on what
survives it.** That is the model for every rules-heavy section.

### ⚠️ What is NOT the target

⚠️ **Non-negotiable 3 stands: never delete a claim merely because it is inconvenient.** ⚠️ **Non-negotiable 4
stands: an honest disclosure is not verbosity.** ⚠️ **THE RULE-SET FLAG IS NOT THE SURVEY.** *"Under USA
Hockey this is a minor"* earns its place — a reader penalised under the wrong book is the failure this
project exists to prevent. Three paragraphs comparing four books on a clause nobody will meet does not.

---

# Standing method guidance — read before dispatching

**These are the conventions that cost real time to learn. The archive carries the incidents.**

## The briefs are more defective than the corpus

⚠️ **Measured over round 74: four of the first five rows dispatched closed as REFUTED, not repaired — the
plan was wrong, not the corpus. The dispatcher's own briefs were wrong EIGHT times in three shapes:**

| shape | guard |
|---|---|
| **relayed a figure without re-deriving it** | re-derive every number before putting it in a brief |
| **relayed a citation ADDRESS** | a `grep -n` on a clause opener is not an address; quote and locate |
| **asserted a property of something not examined** | ⚠️ **a census scoped to EXCLUDE its subject cannot support a conclusion about its subject** |

**Every one was caught by the receiving agent, none by the dispatcher.** So: **give every agent the row as a
HYPOTHESIS and tell it to refute the brief before acting.** ⚠️ **And a REVIEWER'S REPORT is a brief too** — it
arrives looking like verified evidence, with file names and line numbers, which is what makes relaying it
unexamined dangerous. ⚠️ **The discipline is symmetric: re-derive a CORRECTION before accepting it.** One
agent's "correction" on 11 September was itself wrong.

**A row is a claim, and rows go stale.** Re-measure before briefing, even when a row says READY.

## What the coordinator does and does not do

- **Does:** plan and review writes, `sources/`, `scripts/`, censuses, the renderer, staging, committing.
  ⚠️ **A SHARED TOOL IS SHARED STATE — change it BETWEEN waves, never during one.**
- **Does:** answer what agents declare they could not reach. **That handover is usually the highest-value
  work available** — on 11 September it produced a rendered PDF figure that settled a safety question.
- **Does not:** review its own writing, or let a repair self-certify. ⚠️ **Two coordinator content edits in
  one commit drew the gate's ruling: *"a third goes to an agent."***
- ⚠️ **State what you DID, not why it was necessary.** An agent wrote a false reason for its own method into
  the corpus — *"read as page images because a text search cannot see them"*, when `pdftotext` reads them
  fine. **The conclusion was right and the stated method was wrong, and no checker can see that.**
  ⚠️ **And record the ACT, not only the finding** — a reviewer read a `sources/README.md` entry describing
  what a figure shows and still listed the render as unreached.

## Parallelism

**File ownership must be disjoint and stated — and stating it does not make it true.** Check who else holds a
file before writing *"you own X exclusively"*. When a finding lands in a file another agent holds, **message
that agent**. ⚠️ **Diff the WHOLE file at the end, not your own hunks** — that is how two mutually
contradictory sentences were caught, and how an agent found two defects in its own new text on 11 September.

⚠️ **Stage only what will not be edited again.** `SendMessage` to a finished agent RESUMES it.
`git diff --name-only content/` empty means index matches tree. **A checker pass while agents are live proves
nothing.**

## Build traps — each has produced a silent false pass

1. **The nvm shim is a zsh function.** Use `/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/{node,npm}`.
   `npm` is a shim too.
2. **`ls -ld site/dist` is not proof.** Step 1 of an eleven-step chain deletes `dist`, so a fresh mtime means
   only that step 1 ran. ⚠️ **Check the LAST step ran** — one `check-links:` line in the log — **and that
   `dist/sw.js` exists.** A build killed at `build:pdf` on 11 September left a fresh-mtime, 35-entry `dist`
   that `ls` called success.
3. **Astro caches the markdown transform.** `npm run build` runs `clean:cache` first; a caption verified
   without it is unverified.
4. **`build-diagrams.mjs` must run before `check_absolutes.py`** — that checker reads the build product and
   will refuse to certify a stale caption layer rather than pass on old text.
5. ⚠️ **If the commit's tree differs from the tree you built** — unstaged files in `site/` — **build a
   worktree reconstructed from the index** (`git worktree add --detach`, then `git diff --cached | git apply
   --index`). The gate blocks on this and is right to.

## The checkers

**Gates:** `check_links` · `check_facts` · `check_absolutes` · `check_geometry` · `check_secrets` ·
`check_counts` (`--update` last, after the final `content/` edit) · `check-arrivals`.

**Worklists — none has a `--strict` and none should gain one:** `check_external_links` · `check_rule_scope` ·
`check_pointers` · `check_chunk_splits` · `check_caption_negations` · `check_zones` · `check_tables` ·
`check_disclosures` · `check_diagram_quotes` · `check_chunk_tails` · `check_leaders` · `check_plan_rows`.
**`ls scripts/*.py` is the authority; this list goes stale.**

⚠️ **They are the floor. None can check whether anything is TRUE.** And three blind spots are known:
**nothing detects a PARTIAL QUOTATION** (Hockey Canada 7.3 was quoted in three places with the same half
dropped every time); **nothing checks a METHOD claim**; and **`check_caption_negations` covers captions, so
the `49f1dc6` inversion shape in PROSE has no check** — three instances were found by hand in one round.

## Sources

⚠️ **Read a source's entry in [`sources/README.md`](../../sources/README.md) before concluding anything about
what it contains.** An empty extraction is not an absence. An image-only PDF is ungreppable, not
unverifiable — render it with `pdftoppm`.

⚠️ **A healthy text layer is not a complete document.** `ibc.txt` sits at a reassuring 3.2% text-to-PDF
ratio, so every reviewer greps it and stops — while **Fig. 6 is a drawing of the boards posture the corpus
argues about.** Four times the answer has been in page images nobody rendered.

⚠️ **A source can be accurately quoted, correctly cited, and still wrong, because the BOOK IT DESCRIBES has
moved.** `ibc.txt` is built on the 2007-09 rulebook and relayed a 12-and-Under checking age that current Rule
604(a) prohibits. **The tell is the source's date, and `sources/README.md` does not carry dates for every
entry.**

---

# Open rows

**Grouped by theme. Detail for anything carried over is in the archive** —
[`plan_archive_2026-09-11_pre_consolidation.md`](../reviews/plan_archive_2026-09-11_pre_consolidation.md).

## Safety and rules — the highest-consequence group

- ⚠️ **USA Hockey's own speed caveat is in NEITHER boards document.** `ibc.txt:1498-1499` — *"The speed at
  which the players hit the boards must be managed"* — in the same lettered list the corpus quotes twice
  from. **The corpus now teaches that angling in is a safety skill because a limb meets the boards instead
  of your helmet; a reader can take that as licence to arrive faster.** Deliberately not written: the manual
  addresses a coach managing a drill, not a player choosing a speed. **Decide, then propagate to BOTH
  documents or neither.**
- **The route limb reached four documents and stops there.** `defending_the_rush.md`,
  `neutral_zone_systems.md` and the position files all teach gap and pursuit routes. **Whether any teaches a
  converging close without the limb is unchecked.** Next dispatch.
- **The shoulder limb is absent from ELEVEN posture-teaching captions** across nine modules, present in
  eight others. ⚠️ **Do not sweep — each turns on whether the caption teaches the posture as a full
  instruction or only gestures at it.** One module per agent.
- **The caption names THREE prohibitions and explains TWO.** USA Hockey names no injury for the shoulder tip
  and none may be invented. Either stop counting, or move the shoulder tip out of the triple.
- **CRT6, the 21-day bar and the British checking age** — carried from round 73; see the archive.

## Corpus-wide censuses nobody has run

- **18 rulebook-absence claims, never tested** — all phrase censuses.
- **12 facts-layer absence claims in six documents, none tested.**
- **73 absence-of-evidence disclosures in `rules_primer.md` alone**, 62 of them book-scoped negatives, none
  attacked. **The largest concentration in the corpus.**
- ⚠️ **"Nobody has counted recreational-league calls"** — upheld against `sources/` and `content/`, but **no
  web search was run**. Record it as *not falsified by the repository*, never as held.
- **Summary layers read aloud standalone:** 31 Common Mistakes and 31 Key Takeaways sections have never been.
  Seven documents were done on 10 September and produced six majors.

## Numbers and ownership

- ⚠️⚠️ **FOLKLORE, NOT A WORDING PROBLEM: the corpus teaches "walking the line" in at least THREE documents
  and has NO SOURCE for it anywhere.** Found 11 September 2026. One manoeuvre — a point player sliding
  sideways along the offensive blue line — was stated **seven times in three magnitudes and three units**:
  *"one or two steps"* (`shooting.md`), *"two or three strides"* (`offensive_zone_play.md`), *"three metres"*
  and *"two or three metres"* (`special_teams.md`, contradicting itself in two facts lines **both voiced
  alone**). ⚠️ **`grep` over all 60 files in `sources/` returns ZERO. The IIHF coach-development material's
  two candidate passages give no distance. Two of the documents' own cited articles were FETCHED and give
  none either** — one of them naming drills called *"Blue Line Shuffles"* and *"Lateral Blue Line Series"*
  without a figure anywhere on the page.

  **All seven repaired** by replacing the count with a **stop condition** labelled as craft — *"go until the
  blocker has to move their feet"*, *"keep going until a killer turns their head"*. ⚠️ **But the repair
  replaced a fabricated precision with UNSOURCED CRAFT that is honestly labelled and still unsourced.** The
  agent said it plainly: *"no search I ran could have told me it was wrong rather than merely unsupported."*
  **The upstream question stands and is the real row: a technique taught in three documents with no source
  is the folklore-propagation shape, and the style guide has no numeric-owner row for it — a row that owned
  the ABSENCE of a number is what would have stopped this.**

  ⚠️ **Two jobs, one action, and the SITE LAYER HAD ALREADY DRAWN THE DISTINCTION** — `pp-131`'s caption
  describes walking the line with no distance (the distribution job, changing passing lanes) while
  `shooting-lane-and-the-step` carries the owner's *"one or two steps"* (the shooting job, beating one
  blocker). **The prose was the only layer carrying metres.**

- **`special_teams.md:377` — *"a missed pinch puts you two strides deeper than a missed hold does"*.** Same
  species, reported not fixed. Nothing in `sources/` fixes it. **May be defensible as a rough comparative
  rather than a measurement** — needs `safety-reviewer`, since it is the argument for not pinching with one
  defenceman back.



- ⚠️ **No figure in the §9 penalty table can be verified from this repository.** No script, no cached JSON —
  `grep` for `2967` / `gamecenter` returns only prose. **Two agents ruled on what those figures support;
  neither could check they are right.** If the raw pull exists, breaking out the residual 28.6% would settle
  a question that is currently unanswerable.
- **The aggregation repair tripled the copies of `71.4%`** across borrower sites. Each carries its
  qualifications, so not a defect — but a number copied out of its owner goes stale silently. **Decide
  whether the figure-carrying form earns three sites.**
- **The IIHF and Hockey Canada exclude HOOKING from their stick categories too**, so a second of the seven
  also fails to sort. ⚠️ **Would strengthen the ruling — but the corpus calls hooking a stick foul elsewhere.
  Propagate or leave; do not do half.**

## Diagrams — the describe layer

- ⚠️⚠️ **"THE FIX REACHED THE COMMENT AND STOPPED BEFORE THE STRING A LISTENER HEARS." Found TWICE in one
  module on 11 September 2026, both times by an agent sweeping numerically rather than reading.**
  - `oz-low-to-high` told a screen-reader user the defenceman carries the puck **ten feet** along the blue
    line. The geometry draws **fourteen** — `point.y 20` to `dy 6`. The module's own comment already said so.
  - `oz-rotation-one-pass-later` said F2 is **five feet off the boards**. He is at y 33.5 against a dasher at
    42.5 — **nine**. Its comment already said so too, and named the cause: *"true only while half-wall.y was
    33"*.
  ⚠️ **`describe` is the ONLY access a blind reader has to the picture**, and `longDesc` serves them
  `describe + caption` — so a stale figure there is an accessibility defect, not a tidiness one.

- ⚠️ **THE REPAIR WAS BETTER THAN THE SPECIFICATION, and the reasoning generalises.** The brief said make the
  string say fourteen. The agent refused: **no layer of the owner fixes a distance** — §5 says only *"walks
  the puck toward the middle"*, §11 **deliberately refuses** a number (*"go until the blocker has to move"*).
  So fourteen is illustrative, and a flat *"fourteen feet"* would have been **an unhedged measurement in the
  one layer that reaches a blind reader**. It now states no distance: *"carries the puck in along the blue
  line, stopping short of the middle of the ice."* ⚠️ **If the owner fixes no distance, the `describe` states
  none.**

- ⚠️⚠️ **NEXT WAVE, SCOPED AND READY: 166 distance claims sit in `describe` strings across 27 modules, and
  only two modules have ever been checked.** ⚠️ **But there is a cheap high-yield probe**, because both stale
  strings had their correction already written in a neighbouring comment: **36 sites across 17 modules carry
  a comment recording a numeric correction.** Grep shape:
  `//.*\b(said|read|was true only|never reached|stale|should say|actually)\b.*\b\d+\b` near `ft|feet|\.y`.
  **For each, ask only: does the `describe` still state the OLD number?** Densest: `body_contact_and_battles`
  (6), `offensive_zone_play` (4, two now fixed), `positions` (4), `breakouts` (3), `defending_the_rush` (3).
  ⚠️ **ONE MODULE PER AGENT** — four agents were once sent to this tree in one round each believing it owned
  the files exclusively, and a rebuild published six captions nobody had read.

- **Reported, geometry, not fixed:** `puck: { at: 'half-wall:right', dx: 1, dy: 3.5 }` at
  `offensive_zone_play.mjs:305, 415, 528` resolves to **(70, 42.0)** with a glyph radius of 1.1 against a
  dasher at 42.5 — **the puck is drawn 0.6 ft outside the playing surface** in three units, merging with the
  boards line. Visible in a render. **Geometry, so the agent stopped rather than moved it.**

- **`special_teams.mjs:191`** justifies its drawn ten feet as *"the section's own three metres"*. ⚠️ **The
  section no longer says three metres** — it was repaired to a stop condition. The drawing is fine as a scale
  choice; **the justification must be re-anchored** to the pattern `shooting-lane-and-the-step` already uses
  (*"take the move from those words and not the distance from the picture"*).

## Tools

- ⚠️ **Should `check_absolutes` see the *"legal in every league"* shape?** The phrase was TRUE once its
  definition was attached, so a tool flagging it would flag a correct sentence — and a tool that ranked these
  and offered fixes is how round 44 manufactured a divergence that did not exist.
- **`md_to_speech.py` does not expand a multi-clause citation** — `640(b, c, d, e or f)`.
- **Bare roman-numeral clause markers are voiced as raw letters.** Eleven sit in one paragraph of
  `risk_management.md`. ⚠️ **Census first; a bare `(I)` may not be a clause marker.**

## Site

- **The `/reading-diagrams/` redirect paints a full-screen WHITE interstitial**, dark theme included. Nothing
  links to it and there is no back-button trap, so it fires only for a bookmark or a trimmed URL. Accepted;
  if fixed, match the `theme-init` background and ⚠️ **do not add a delay or a "click here"**.
- **`dist/analytics.js` ships a GA4 bootstrap** into a site whose posture is no third parties. Referenced by
  zero pages and inert — one meta tag from live. **A decision, not a defect.**
- **The `.table-scroll` horizontal cue is clear in light and hard to see in dark.** `figure.diagram--full` was
  deliberately given an always-drawn scrollbar for this reason; `.table-scroll` never got the same treatment.
- **The AudioPlayer degrades to a dead `0:00 / 0:00` control with no message** when its source 404s.

## Podcast — COMPLETE

✅ **Published to Spotify and Apple Podcasts.** The feed, the per-section `.m3u` playlists, the downloads
page, the CDN invalidation and the episode metadata are all done and live. **The 3,796-line tier is in the
archive.** ⚠️ **One thing remains:** the Apple Podcasts show URL is not on `/downloads/` — the Subscribe
block links the feed and Spotify only. **Add it, with a `link_baseline.tsv` row so `link-check.yml` notices
if it dies.**
