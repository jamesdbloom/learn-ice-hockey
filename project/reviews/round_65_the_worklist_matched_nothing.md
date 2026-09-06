# Round 65 — the drawing wave, and a worklist that matched nothing

**Five agents, disjoint file ownership, dispatched in one message after round 64 shipped.** The owner's
instruction was *"most sections should have at least one diagram"*, narrowed by a second message:
*"I want to focus on diagrams of the ice rink not other diagrams."*

⚠️ **EVERY FIGURE BELOW IS MEASURED AGAINST THE TREE WITH `git show HEAD:` FOR THE BEFORE COLUMN.**
Round 64's record carried four separate figure defects; the discipline is stated here because it was
not kept there.

## What shipped

| document | markers | sections holding one |
|---|---|---|
| `off-the-ice/how_to_watch_hockey.md` | 11 → **24** | 6 → **12** |
| `positions/defender.md` | 3 → **11** | 3 → **9** |
| `foundation/rules_primer.md` | 4 → **9** | 4 → **8** |
| `systems/forechecking_systems.md` | 5 → **9** | 4 → **8** |
| `hockey-iq/risk_management.md` | 4 → **7** | 3 → **6** |
| `technique/puck_handling.md` | 3 → **4** | 3 → **4** |
| **these six** | **30 → 64** | **23 → 47** |

**Corpus markers 242 → 276 (+34). Registry 176 → 183 — seven new diagrams for thirty-four placements**,
because **twenty-seven placements borrowed an existing diagram by id at zero drawing cost.** One agent
drew nothing at all and placed thirteen borrows.

---

## ⚠️ The worklist I dispatched all five agents with matched nothing

**Caught by the first agent to report, against its own brief:** two of its three candidate sections
already carried diagrams.

**Cause: the census regex searched for `<!-- diagram: id -->` and `:::diagram{...}`. Neither form
exists in this corpus.** Markers are `![](diagram:id)`. **It matched 0 of the 255 markers then in the
tree**, so every section scored as undrawn and the "density" ranking was *words per existing diagram*
rather than *sections without one*.

**Corrected mid-flight to 969 genuinely-undrawn sections, not the 1,152 I claimed**, and all four
running agents were messaged and told to grep each row before drawing.

⚠️ **The per-document coverage census I had reported separately used the CORRECT regex and was
unaffected.** Two censuses, two regexes, one wrong, **and nothing compared them.**

⚠️ **One assertion would have caught it before dispatch:** `assert DIAG.search('![](diagram:x)')`.
**A pattern that has never matched a known positive has not been tested.**

**How much of the brief was wrong, by agent report:**

| agent | rows given | rows already drawn or refuted |
|---|---|---|
| `how_to_watch_hockey` | 3 | **2 already drawn** |
| `defender` | 4 | **3 wrong** — one already drawn, one at the wrong line, one correctly refused |
| `rules_primer` | 2 | **1 already drawn** (`icing-gaining-the-line`, six lines below), 1 refused |
| `forechecking_systems` | 3 | 0 already drawn, **2 refused on merit** |
| `risk_management` | 3 | **0 wrong** |

**The briefs were more defective than the corpus, again, and this time measurably: 6 of 15 rows.**

---

## The refusals, which are the better half

**Agents declined to draw far more often than they drew, and every refusal names a real trap.**

- ⚠️ **The broadcast frame** (`how_to_watch_hockey`) — the strongest new-diagram case in that file,
  refused because *"the frame's width is not measured anywhere; drawing it would put an invented number
  into the layer this corpus trusts most."*
- ⚠️ **Offside: The rule** (`rules_primer`) — refused because every mechanic in it is at skate-blade
  scale (*"both skates completely over the leading edge"*, the 12-inch line width) and **this notation
  has no skates and no facing.** A glyph is ~6 ft across on a sheet where the blue line is 1 ft.
  *"A picture would have to assert the one distinction it cannot draw."*
- ⚠️ **`centre-low-zone-collapse` as a borrow** — refused because the prose says the centre *"never
  fully commits"* and **the picture is the centre committing to the corner.** Picture-contradicts-prose.
- ⚠️ **`unmarked-but-unavailable`** — right concept, wrong geometry: the bullet is a winger drifting
  **wide**, the diagram is a player alone in the **high slot**. Named as the same trap as round 64's
  weak-side borrow.
- ⚠️ **"The three jobs, in general terms"** — refused because the section's own thesis is that *"what
  changes is where F2 and F3 stand"*, so **any diagram must place them and therefore either
  contradicts the section or duplicates `forecheck-212` twenty lines below.**
- **"When a simple pass is available"** — the highest-density row given to that agent, refused: its
  three arguments are a **speed** claim (no time axis), a **stick** claim (no stick symbol), and one
  needing the defence drawn twice. The drawable residue is `you-cannot-beat-two`, thirteen lines below.

---

## ⚠️ Orientation is not uniform, and reuse can invert it

**The `forechecking_systems` agent stopped and asked rather than borrowing.** Measured:

- `angling-your-route` — *"**The net being defended** is at the right."*
- every diagram in `forechecking_systems.md` — the **opposition's** net is at the right.

⚠️ **Borrowing it would have silently flipped which end of the ice the reader is looking at, mid-page,
with no caption saying so.** Decision: not reused.

⚠️ **This is now the corpus's highest-value reuse hazard, because reuse has become the dominant
strategy** — 27 of 34 placements this round. A borrowed diagram carries its own orientation, its own
fill convention and its own idea of who "you" are. **A diagram whose caption does not state its
orientation cannot warn a borrower.** Filed as `T0-20`.

Already observed alongside it: the fill convention **flips** between `entry-three-lanes` (unfilled =
attackers) and `rush-gap-and-angle` (unfilled = defenders). An agent placed those two adjacently and
wrote a sentence telling the reader — **the right handling, and it should not have been necessary.**

---

## ⚠️ A rules gap found by reading two books side by side

**A drawing agent set out to refute its own hypothesis about a caption and found this instead. I
verified it independently before recording it.**

IIHF Rule 69.1 carries a sentence between its disallowing sentence and its pushed-into-the-goalie
sentence:

> *"If an attacking Player is in the goal crease and does not leave immediately, the Referee has the
> possibility to stop the game and the subsequent 'face-off' shall take place at the nearest neutral
> zone face-off spot outside the attacking zone of the offending team."*

| | `does not leave immediately` |
|---|---|
| all three IIHF editions on disk | **1 each** |
| all three NHL extractions | **0 each** |
| `content/foundation/rules_primer.md` | **0** |

⚠️ **A net-front player under IIHF rules can be stopped and cost his team the zone — no goal, no
penalty — under a clause this corpus never states**, in the document that exists to flag IIHF
divergences for a British reader. **The agent correctly refused to write it: that is new rules text.**

⚠️ **Note the method.** It was found by reading the two books beside each other while checking
something else. **A grep for a divergence you do not know exists cannot find it** — which is exactly
why `check_rule_scope.py` is a worklist and not a gate.

---

## Two geometry defects no checker would have reported

Both found by the `risk_management` agent while drawing, both recorded in its module source:

- ⚠️ **A pass line passed 1.80 ft inside the glyph ink of the forechecker the picture says the pass
  gets around.** **Nothing would have caught it:** `check-arrivals.mjs` scopes itself to routes drawing
  a **player moving**, so a `pass` route is never measured against a glyph.
- A forward's anchor put him **14.3 ft from a 15 ft circle** — on the paint, under a `describe` saying
  he was clear of it.

⚠️ **And the `defender` agent rendered its own two diagrams and found what arithmetic had passed:** a
9.2 ft carry on a 5.0 lambda *"draws one hump plus an arrowhead and reads as a squiggle"*, and a 5 ft
pressure route drew **inside its own glyph**. **Both cleared every numeric check.** Round 64 recorded
that rendering beats arithmetic; this round it happened twice more.

---

## A relayed finding that was false, and the agent that refused it

⚠️ **I passed a finding from one agent to another without verifying it** — that `defender-three-depths`'
caption placed *"fourth forward"* one band deeper than `defender.md`'s prose.

**The receiving agent checked and refuted it.** `defender.md` says *"below the circles"* at all three
sites — body `:466`, facts, Common Mistakes `:737` — **and the caption agrees exactly. There is no
drift.**

**But it found a real divergence one level up:** `offensive_zone_play.md`, which `defender.md` names as
*"the authority on these three depths"*, is **inconsistent with itself** — its heading at `:226` reads
*"Below the circles — too deep"* while its `Risk:` fact at `:218` keys the fourth-forward consequence to
*"below the hash marks"*, the shallower region containing it. **`defender.md` cannot be made consistent
with an owner that is not consistent with itself.** Filed against `offensive_zone_play.md`.

⚠️ **I told the agent to verify rather than act, and that instruction is the only reason this did not
become a wrong edit.** Relaying a report as a finding is the defect; the instruction was the guard.

---

## One prose repair, made because the section could not be drawn without settling it

`defender.md` read *"one defender on each side of the **center line**"* in the body and *"centre line"*
in its facts block. ⚠️ **In this corpus the centre line is the red line at centre ice, and under that
reading the sentence is FALSE** — two defencemen at their own blue line are both on the same side of
it. It means the lengthwise middle, which is how `faceoff-neutral-zone`'s caption already phrases the
identical arrangement. **Both changed to *"each side of the middle"*.**

---

## What this round has not done — CORRECTED

⚠️ **THIS SECTION WAS WRITTEN BEFORE THE REVIEW PASS AND LEFT STANDING AFTER IT.** It said *"No
`diagram-reviewer` pass"*, *"nobody has compared any picture to the section it now sits under"* and
*"Nobody has listened to any of it"* — while a later section of this same record describes four
reviewers running. **`commit-gate` blocked on it: one of the two was stale and a reader could not tell
which.** The superseded claims are corrected here rather than deleted, because what they said was true
of the drawing wave and became false during the review pass.

**What HAS since been done:** `diagram-reviewer` rendered and viewed all 7 new diagrams and compared
them to their sections; `rules-verifier` re-derived every new caption's rule claims; `content-reviewer`
read the whole `content/` diff and all 24 caption pairs embedded by it; `safety-reviewer` found the
round's critical.

**What genuinely remains undone:**

- ⚠️ **Nobody has listened to any of it.** 34 new placements, and the audio layer has been reasoned
  about but never heard.
- ⚠️ **`content-reviewer` read 24 of ~183 caption pairs**, and checked borrowed captions against their
  **hosts**, not their **owners**. It found one owner defect (M2) only because it happened to open one
  owner. **Five more borrowed-caption owners were never opened. That is the next round's highest-yield
  scope, and it is named by the reviewer that found the gap.**
- **`defender.md`'s six borrowed captions total ~10,900 characters**, all written for other documents,
  and the page has not been read end to end.

---

## Dimension coverage

⚠️ **`commit-gate` blocked because this record named no dimension at all. Silence on a dimension is the
failure mode, and a record with no coverage statement is silence on all fifteen.**

| dimension | state |
|---|---|
| **D1 Cardinal rule** | ✅ `content-reviewer` — forechecking systems, the lock, the press, pinching and the cross-ice pass all checked as coaching territory |
| **D2 Rules in primary text** | ✅ `rules-verifier` — all 7 new captions re-derived from `sources/`, plus `faceoff-where-the-draw-goes` limb by limb; `commit-gate` independently re-derived 604(b), 607 Note, 607(a) and Casebook 607 Sit. 3 |
| **D3 Citations** | ⚪ **OUT OF SCOPE — the staged diff adds ZERO URLs.** Verified by `commit-gate`, not asserted |
| **D4 Facts layer** | ✅ `check_facts` 830 blocks / **5,500** facts (⚠️ 5,498 in an earlier draft — the two lines the facts SPLIT added; the record's own "every figure measured" claim did not survive its own repair); `content-reviewer` read the one changed value and traced it to its section. ⚠️ **The 830-block corpus was NOT re-read** |
| **D5 Safety** | ⚠️ ✅ `safety-reviewer` — **1 critical, 2 majors, all fixed.** See above |
| **D6 Numeric ownership** | ✅ `content-reviewer` — the gap ladder's provenance limit (M5) is exactly this dimension, and was fixed |
| **D7 Negative existence claims** | ⚠️ **PARTIAL.** One attacked (the cross-ice rulebook absolute — **it did not hold**); `content-reviewer` states plainly it did not attack the other three in the changed files. **1 for 1 is the base rate** |
| **D8 Qualifications travelling** | ✅ M2 and M5 are both this dimension. M5 fixed; **M2 deferred with its reason recorded** |
| **D9 Summary layer** | ✅ One `Rule:` line added to `forechecking_systems.md`, traced to its own section's prose |
| **D10 House style** | ✅ `content-reviewer` — m3 (documents narrating themselves) is this dimension; four sites named |
| **D11 Diagrams teach the section** | ✅ `diagram-reviewer`, rendered. 1 major (orientation), 3 minors, all fixed |
| **D12 The spoken layer** | ⚠️ **PARTIAL — reasoned, never heard.** The 604(b) agent measured chunk splits through `_split_paragraph`; `commit-gate` rendered both broken captions through the real renderer and that is how the fragments were caught. **No audio has been listened to** |
| **D13 Provenance** | ⚪ **OUT OF SCOPE — no new external source is cited in this diff.** `source-verifier` not run, and `content-reviewer` declares the same |
| **D14 Mechanical** | ✅ links, facts, absolutes (366 caption units certified), geometry, secrets, counts, leaders (559 clean), 276 markers all resolving, none in a fence, all blank-line separated |
| **D15 The rendered site** | ✅ **DONE — all four viewport × theme cells, 36 page loads, real Chrome over CDP.** No critical, 3 majors. One of them found a defect no checker can see. See below |

---

## ⚠️ My repairs broke two captions, and I had already filed the lesson that would have prevented it

**`commit-gate` blocked on two defects, both created by this round's own repairs, both live in the
built page.**

**(1) `defender-step-up` — the repair for this round's CRITICAL shipped a subject-less fragment and
deleted the claim it belonged to.** A line-index replacement cut too far, leaving:

> *"Two strides is a safe harbour in no book. **carries a division clause, where the body-checking
> rules that restrict themselves say so in terms.**"*

Rendered through the real renderer, the listener heard that fragment **as its own unit between 300 ms
breaks** — and *"charging binds every division, checking league or not"* **was gone from the caption
entirely**. ⚠️ **So the repair for a critical about a counterweight missing from the voiced layer
removed a different counterweight from the same voiced layer.**

**(2) `rush-gap-and-angle` — the provenance insert left the old tail stranded:** *"…coaching convention
rather than measurement. **attacker's skill.** What no still picture can show…"*

**Both fixed. A scripted scan of all 366 caption/`describe` units for a lower-case sentence start
returns exactly these two and nothing else** — independently matching `commit-gate`'s own count, and
confirming neither is pre-existing house style.

⚠️ **THE LESSON WAS ALREADY IN THE PLAN, FILED BY ME, TWO ROUNDS EARLIER:** *"a line in this repository
is not read until it is read whole… match on an anchor **and re-read the whole line afterwards** — or
edit by line index rather than by string prefix."* **I edited by line index and did not re-read the
result.** The half of the lesson I wrote down is the half I followed.

⚠️ **And the mechanical gates cannot see this class at all.** `check_facts` measures length and prefix;
`check_absolutes` scans for absolute denials; `check_leaders` reads geometry. **A caption that is
grammatical nonsense passes every one of them.** The two-line detector used above — a full stop
followed by a lower-case word — found both in a second and is worth keeping.

- **Filed as a worklist candidate**, not a gate: quotations, rule numbers and mid-sentence
  parentheticals legitimately produce lower-case starts, so it needs reading, not sweeping.

**Also fixed from the same block: `how_to_watch_hockey.md:226` still said *"on the paint"*** — I had
corrected the caption and stated I was holding the prose until `safety-reviewer` released `content/`,
and then never went back. **The paragraph introducing the corrected caption carried the defect the
caption fix names.**

---

## `site-reviewer`: a defect no checker in this repository can see

**Build 18:46, all four viewport × theme cells on nine pages (36 page loads), plus static analysis of
all 49 built pages.** The MCP extension's `navigate` was blocked three times again, so everything came
from headless Chrome over CDP and it said so per claim.

### ⚠️ M1 — the index and the working tree disagreed, and a commit would have shipped the defect

`content/off-the-ice/how_to_watch_hockey.md` was `MM`. **The index held *"already on the paint"*; the
tree held *"already on the blue line"*.** I had fixed the prose **after** staging the file and never
re-staged.

⚠️ **NOTHING COULD HAVE CAUGHT THIS.** `check_facts` and `check_links` read the working tree. `dist` was
built from the working tree. **Every one of the four reviewers read the working tree.** The reviewer
found it by running `git status` during teardown, and said so: *"this is the one thing in this report
that my method would normally have missed entirely."*

**CLAUDE.md states the rule** — *stage only what will not be edited again* — **and I broke it in the
narrowest possible way: a one-line correction to a file already in the index.** Re-staged.

### M2 — the caption warning mechanism is inline at block lengths

`.warn-inline` was written for the **prose** pass, where it wraps a mid-sentence run and must stay
inline. `remark-corpus.mjs` reused it for captions — *"one mechanism, not a second one"* — **right about
the colour, wrong about the box.**

With `display: inline` and the default `box-decoration-break: slice`, the amber ground paints **per line
box**: ragged right edge, unpainted page between lines, and the 3px left border drawn **once** at the
first line box instead of down the run.

**Measured over 49 caption warning runs on 11 pages, both themes, both viewports: median 16 line boxes
at 375px, worst 62. 94% span more than five lines.** The worst is `forcing-them-outside` — **2,981 amber
characters, 1,338px tall on an 812px viewport, in a 2,143px figure whose drawing is 296px. The picture
is 14% of its own figure.**

**Fixed**, scoped to `figcaption` only. ⚠️ **The scoping rests on a structural fact I verified before
changing anything and `commit-gate` then confirmed independently: 73 of 73 caption warn runs are
trailing, one per caption.** A block is correct there; in prose it would break the sentence it sits
inside.

### M3 — the borrowed voice, deferred with its measurement

**24 of 24 diagrams on `how_to_watch_hockey.md` are borrowed, and captions are 25.8% of the rendered
page text.** The reviewer read it end to end: **2 captions covered by a prose handover, 2 partially, and
20 addressing the reader as a player on the ice with nothing to catch it.**

⚠️ **And the two "covered" ones are not covered on the path that matters.** The handover is a **body
sentence**; the figcaption is `aria-hidden="true"` and the SVG `<desc>` carries `describe + caption`. **A
screen-reader user gets the player-voiced caption inside the image description with the prose handover
nowhere near it.** The only signal that a caption is not at home is a `Diagram from X` line at **12.8px
in muted italic — the least prominent element in the figure.**

**Deferred, not hidden.** It is a rewrite of 20 captions or a change to how borrowed captions are framed,
and neither belongs in a round already at its third gate.

### The goaltender labels — answered against my own fix

I labelled the two adjacent goaltenders `your net` / `their net`. **The reviewer measured the result and
it does not do what I wanted:** the two labels sit at **the same relative position in both drawings**
(relY **0.555** in both), in the same 20px grey type. *"A reader who reads the label learns the right
thing. A reader who looks still sees one end twice. The label fixes the ambiguity; it does not fix the
at-a-glance problem, because it is not a salient difference, it is a legible one."*

⚠️ **The class of fix that would work is positional or chromatic, not lexical. Filed.**

### What it confirmed

**All 276 rendered figcaptions match `diagrams.json` verbatim — zero mismatches, zero unmapped.** Its own
fragment scan over 366 units returned **4 hits, all four false** (quoted shouts and questions). Zero
console errors across 36 page loads; zero off-origin requests; no page-level horizontal scroll at 375px
or 320px; every overflowing diagram scrollable and keyboard-reachable; contrast AA in both themes; the
theme toggle exercised rather than emulated, including persistence across navigation.

⚠️ **And it recorded a near-miss against itself:** it nearly filed a theme-toggle label defect that was
**its own profile contamination** — `localStorage.theme` persisted from an earlier test. *"Precisely the
shape of finding that a reviewer using one long-lived browser profile will manufacture."*

---

## The caption-warning fix, looked at rather than argued for

**`commit-gate` blocked the CSS change on a principle worth keeping: *"the success criterion of this
change is itself visual, and nothing visual about it has been observed."* Every measurement I held was
of the DEFECT; none was of the FIX.** It was right, and a browser pass settled it.

**Verdict: better, clearly — not merely different.** Measured on the shipped build, all four viewport ×
theme cells, with the old rule re-inlined at runtime to produce a faithful before:

| at 375px, 16 runs | before | after |
|---|---|---|
| line boxes | median 24, **max 62** | **1, every one** |
| ragged right spread | median 211px, max 316px | **0** |
| unpainted page between lines | median 41px | **0** |
| left border | one 3px tick at the first line | **full height** |

⚠️ **The gate's specific worry — "a wall of amber that dominates a figure whose drawing is already only
14% of it" — does not materialise, and the measurement says why.** `--warn-bg` against the page is
**1.06:1**; as a colour wash it is nearly invisible, and what makes the panel read is the text colour,
the glyph and the border edge. **Drawing share of figure goes 13.8% → 13.1%** — the 14% was a
pre-existing consequence of a 4,195-character caption, and the fix costs **0.7 percentage points**.

### ⚠️ The finding nobody asked for, and the best argument for the change

**The split gap went −18.4px → +12.0px.** Negative means the amber previously began **on the same line
box as the description's last line**:

> *"…so find out which yours plays. ▌⚠️ The angle is yours everywhere…"*

**So the transition from muted picture-description into a body-checking and boarding safety warning had
no visible break at all**, and the 3px bar marking it was a lone tick mid-paragraph. **That matters more
than the raggedness did**, and neither I nor the reviewer that filed the original defect had noticed it.

**Regression sweep, on this build:** 2,244 prose `.warn-inline` runs **all still inline — zero
regressions**, so the `figcaption` scoping holds. 112 caption instances all block, all exactly one client
rect. `hscroll = 0` on every page in every cell including 320px. Contrast **5.71 light / 8.29 dark**,
AA, and not carried by colour alone. **The "73 of 73 trailing" premise re-verified against the shipped
build: 73 trailing, 0 non-trailing, 0 captions with more than one warn span.**

**One minor fixed from it:** the panel's bottom edge sat **5.6px** above the "Diagram from …" source
line against **12px** above the panel — asymmetric, because the rule set `margin-top` and no
`margin-bottom`. Now symmetric.

**One observation handed on, not CSS:** `forcing-them-outside` now shows **two ⚠️ glyphs inside one
panel** — the split takes the first and a second sits mid-run. Inline it read as a fresh mark; inside a
single panel it reads oddly. **That is a content question, not a styling one.**

⚠️ **And the reviewer flagged what looked like another agent live in `content/`** — two documents went
`MM` during its session. **It was me**, editing after the build started. **The 23:04 build does carry
those edits** (25 × 604(b) on the forechecking page, the Hockey Canada third limb 7 times, and
*"bumps, shoves and pushes"* present), **verified after the fact rather than assumed** — but the
reviewer was right to raise it, and right that it could not tell from where it stood.

---

## ⚠️ The propagation gap moved outward twice, and my own plan predicted it both times

**Gate run 3** found 604(b) reaching the caption layer of `forechecking_systems.md` while five units in
that same document still answered with a closed division enumeration. **Gate run 4 found the identical
shape one layer further out:** two captions I had edited are **hosted by documents whose own layers
carried no 604(b) anywhere.**

| document | hosts | its own layers said |
|---|---|---|
| `game_management.md` | `forecheck-212`, `forecheck-pinch` | the closed list **three times** — `Rule:` fact `:806`, prose `:823`, Common Mistakes `:1066` |
| `on_ice_communication.md` | `the-call-and-who-can-see-it` | the closed list at `:255`, via 604(c) |

⚠️ **`game_management.md`'s Common Mistakes bullet is the NEAR-TWIN of the one I fixed in
`forechecking_systems.md` this round** — *"Going looking for a hit before finding out whether you may
throw one."* **I fixed one and did not look for the other.**

⚠️ **AND MY OWN PLAN HAD THE UNTICKED BOX, BOTH TIMES:** *"And check `content/` for the same gap…
'Given that captions and body text mirror each other here, it is likely and unchecked.'"* **I wrote
that, shipped a caption fix, was blocked for not checking, fixed one document, and was blocked again
for not checking the next two.**

**Now closed:** `game_management.md` 3 mentions, `on_ice_communication.md` 1, `forechecking_systems.md`
9, `body_contact_and_battles.md` 4, `switching_positions.md` 4.

⚠️ **One deliberately NOT fixed, and the reason is the round's other lesson.**
`switching_positions.md:179` states the closed list. **I tried to add a second `Rule:` line and the
block went to 12 against `HARD_MAX` 11**; the line itself is at **298 of 300**. Adding 604(b) means
compressing a line carrying four scope limbs and a 604(c) Note citation — **which is exactly what shed
two Hockey Canada limbs earlier in this round.** Reverted and filed as a re-draft-the-block task. **The
document carries 604(b) at three other sites, so this is a layer-test hit, not a document one.**

**The generalisation, which is the useful part:** a caption is quoted into documents that do not own it,
so **editing a caption propagates a claim into every document that hosts it** — and those documents'
own layers are not in the diff, are not read by `content-reviewer`, and are invisible to a gate auditing
a diff. ⚠️ **`commit-gate` names the residue: 63 sites across 16 documents cite 604(a) without 604(b),
and only the three documents given a 604(b)-carrying caption were checked.**
