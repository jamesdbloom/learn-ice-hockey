# Round 27 — the diagram layer

**Date:** 2026-07-30/31
**Scope:** 109 rink diagrams added across 20 documents; a rendering pipeline; a
sourced drill notation; and six prose corrections the diagram work exposed.

This is the corpus's first round to review a **non-prose layer**. Everything below
about how diagrams fail is new evidence, and it is the reason this record is longer
than the change looks.

---

## Why a diagram is harder to review than a sentence

A reader absorbs a picture in one glance and cannot tell a correct diagram from a
confident one. Three things followed from that this round, and all three cost real
defects:

1. **`scripts/check_geometry.py` passed 43 assertions while the rink was wrong.**
   It asserted `|blue_line ± 5|` for the neutral-zone dots and never the *sign*, so
   all four dots sat five feet inside the wrong zone on every diagram in the corpus.
   It read the coordinate table and never the drawing, so the crease rendered 2.5 ft
   deep against a stated 6 ft. It asserted the half-wall was level with the faceoff
   dot in *x* and never checked *y*, so "the boards" was 9.5 ft off the boards,
   inside the faceoff circle. **A green checker run said nothing about any of it.**
   It now asserts directions, re-derives the drawn crease, and binds named positions
   to the dimensions they name — 57 assertions.

2. **Every defect that survived to a reviewer was invisible in the source and
   obvious in the render.** A forechecker's arrow finishing 8° off an opponent's
   back; three forwards drawn at the same depth so a "2-1-2" was frozen as a 0-3-2;
   a label written through another label; an arrowhead rotated off its own line.
   None is visible in a spec. `diagram-reviewer`'s first non-negotiable — never
   approve a diagram you have not seen rendered — earned itself several times over.

3. **A caption is prose, and the most exposed prose in the corpus.**
   `md_to_speech.py` substitutes it inline, verbatim, mid-paragraph, with no figure
   framing. A listener gets the caption and nothing else. Two captions this round
   stated a rule in a form the owning section had been corrected to kill.

---

## The notation, and the failure that produced it

The first notation in this project was written from memory, honestly labelled as
unverified — *"nothing here has been verified against a governing body's published
symbol key"* — and then used anyway for a week.

`source-verifier` fetched and hashed the sheet it was eventually checked against,
found the *actual* IIHF key, and established that **three of five symbols meant
something else**, two of them dangerously:

| drawn | meant | the published key says |
|---|---|---|
| cross-ticks on a line | skating with the puck | **lateral crossovers** |
| line ending in one bar | a shot | **checking pressure** |
| dotted line | backward skating | (backward skating is a wave) |
| **X** | an opposition player | **a pylon** |

A forecheck diagram in that notation drew a shot where it meant *checking pressure*
and marked every opponent as a traffic cone.

**The lesson is not "verify sources".** The label was already there and was accurate.
The lesson is that *an honest disclosure is not a licence to proceed* — the corpus
had recorded its own uncertainty and then built on it anyway, which is the same
failure as not recording it, one step later.

**Neither key is "the base", and saying so in either direction is false** — a claim
this round made twice, in opposite directions, before settling it. Five of the eight
line symbols are common to both. `stop` takes the Hockey Eastern Ontario sheet's name
for a glyph the IIHF key names differently. `pressure` exists only in the HEO sheet.
`crossovers` is this project's own adaptation of the HEO glyph. The player axis is
IIHF §21.1's. Two departures are disclosed to the reader in
`rink_map_and_glossary.md` §"Reading the Diagrams". The notation is not called
"international" anywhere a reader sees: a body of that name publishes a key of that
name, and this is not it.

---

## The safety ruling, and a threshold that was refused

Two forechecking routes were referred to `safety-reviewer` after `diagram-reviewer`
graded them Critical. The ruling is on record and matters beyond these two diagrams.

**A still frame can depict arrival at a *place*. It cannot depict arrival at a
*person*.** The two facts that decide legality are the target's **facing** — and a
glyph has no facing — and what the arriving player does in the last two feet, which
is movement over time. Both books define the offence in the target's frame: legal is
*"from the front, diagonally from the front or straight from the side"*; the offence
is *"directly from behind, **or diagonally from behind**"*.

`safety-reviewer` was asked for an angular threshold and **refused to invent one**,
which was the right answer. What it gave instead rests on renderer constants and
reproduces every decision the corpus had already made:

- `miss = d·sinθ` must exceed **2.9 ft** — the player-glyph radius.
- If the tip finishes within **9 ft** (2.9 glyph + 3.15 arrowhead + 2.9 glyph) the
  route may not carry an arrowhead at all; use the checking-pressure bar. *A bar
  says arrive and contain; an arrowhead says keep going through.*

Both are recorded in `.claude/agents/diagram-reviewer.md` **as drawing conventions,
not as rules of hockey**, with the false positive named: two players converging on a
loose puck trip the arithmetic while being entirely safe.

### The finding underneath it

`forecheck-131` was a checking-from-behind picture *in the committed repository* and
safe *in the working tree* — because an uncommitted change to `half-wall.y`, made for
a cosmetic reason in an unrelated file, swung the route by 24°. **Nothing in the spec
recorded that the diagram's safety depended on that number.** Revert it, or resolve a
merge toward the committed value, and the picture becomes illegal with no diff
touching the spec.

Both routes now pass under *both* coordinate values. The general form of the lesson:
**a safety property that depends on a number owned somewhere else must be pinned
where it is relied on, or it is not a property.**

---

## What the diagrams found in the prose

The most valuable output of the round was not a picture. Reading the corpus's numbers
rather than its sentences surfaced six defects, all fixed and propagated:

- **`rules_primer.md` §2 — "can cost you 120 feet"** does not survive arithmetic
  (89 ft). Underneath it, a second error nobody had spotted: the prose sent the draw
  *back to the point of origin*, where Rule 83.6 sends it to *"the face-off spot in
  the zone closest to"* it. That misreading is what made 120 ft look possible.
- **The same section's carry bullet** read as though the carrier causes the offside,
  which its own quoted carrier exemption rules out. **The diagram had drawn it
  correctly before the prose said it correctly** — the picture led the text.
- **`shooting.md`** derived two incompatible ratios from the same two figures,
  three hundred lines apart.
- **`rink_map_and_glossary.md`** described home plate pointing two ways in one entry,
  and said 40 ft where the geometry it owns gives 44. `breakouts.md` was wrong on the
  same distance *in the other direction*.
- **`special_teams.md`** said the +1 "chases", where its own bullets, facts block and
  counter all say chasing is the failure. Two position documents were **actively
  instructing a player to chase, two lines below a `Never:` fact forbidding it.**

---

## Dimensions covered

| Dimension | Agent | Outcome |
|---|---|---|
| Rules claims | `safety-reviewer` (Rule 43, four books) + direct grep of primary text (81.1, 83.6, USA Hockey 630(c)) | **`rules-verifier` did not run.** Its absence is how a false rule-set divergence reached this record — see below. |
| Citations / provenance | `source-verifier` | both keys fetched, hashed, transcribed |
| Diagram correctness | `diagram-reviewer` ×7, all 109 | 3 criticals, all fixed |
| Safety | `safety-reviewer` | 2 routes redrawn; arrival test recorded |
| Content / propagation | `content-reviewer` | 6 defects fixed and propagated |
| Facts blocks | `facts-reviewer` on the five blocks this round edited, plus `check_facts.py` | the script is the floor; it cannot see an omission, which is what every critical in round 20 was |
| Geometry | `check_geometry.py` | 57 assertions, pass |

**`site-reviewer` did run**, after the first draft of this record declared it out of
scope. It drove real Chrome over CDP — the extension refused `localhost` — and found
four defects nobody had computed:

- **The notation key was the least legible diagram on the site**, at 6.77 px on a
  phone. It is the only diagram authored in px against a 640 viewBox rather than in
  rink feet, so it scaled *down* as the column narrowed while every other diagram
  scaled up. The legend that decodes 111 other pictures was the smallest thing on
  the page.
- **The dark-mode footer failed contrast at 2.82:1** — it sits outside the white ice
  rect, so it painted grey on near-black.
- **Captions scrolled out of view**, because the `figcaption` was inside the
  overflow box.
- **`.diagram-source` had no CSS rule at all** and rendered a raw file path at full
  body weight.

All four fixed. It also *verified* things previously only asserted: zero duplicate
ids across 112 figures (118 marker refs, 111 clip paths, all resolving inside their
own SVG), no page-level horizontal scroll at 320/360/390, and a 52-page print PDF in
which no diagram splits or touches a page edge.

**Still open, and honestly stated:** full-sheet labels are 7.53 px after the fix —
better than 4.4, still strained without pinch-zoom — and half-sheet labels are
7.0–8.95 px at 320 px. That is a corpus-wide typography decision, not a diagram one.

---

## What this round could not have found

- **Whether any diagram teaches faster than the prose alone.** Every reviewer said
  the same thing independently: they knew the answer before they looked at the
  picture, which is the one thing that disqualifies them from judging it. It needs a
  reader who does not.
- **Whether a coach would recognise the systems.** Every position traces to a
  sentence in its owning document. "The section says so" is not "a bench would draw
  it that way."
- **Whether the published keys say what the renderer's header says they say.**
  `source-verifier` verified this once, for one file, at one moment. 109 diagrams
  now inherit that transcription.
- **The 5 px phone rendering**, the dark theme, and whether a screen reader announces
  a caption twice — once from `<title>` and once from `<figcaption>`.
- **Whether two arrows with no numbers convey a shared time base.** One Major this
  round rested on assuming they do.


---

## The rest of the change, and why it is here

### The corpus stopped narrating itself

`CLAUDE.md` non-negotiable 6 and a new style-guide section: **content documents
contain facts about ice hockey, not the story of how the corpus was built.** No
change history, no review rounds, no script names, no ownership notes addressed to
other documents.

The rule spends as many words on what it does *not* touch, because the failure mode
is obvious and severe: "strip project talk" and "strip honest disclosure" look
identical from a distance, and the second would destroy the thing this project is
actually for. "Could not be verified", "single-source", "no study was found",
provenance, retrieval dates, scope — all stay, and removing them is non-negotiable 4.

A sweep applied it to all 36 documents. The check that mattered was the count of
disclosure phrases before and after: `unverified` 25→24, `no study` 18→18,
`retrieved` 69→69, `Verification note` 6→6, `Caveats and known gaps` 1→1. The single
removed `unverified` was review narration about claims since verified. **Nothing was
stripped.** Change histories *of the outside world* — a retracted study, a superseded
standard, a helpline that changed number — were correctly kept: those are facts about
the evidence, and a reader wants them.

Two judgements it made rather than defaulting: it left ~110 outward pointers of the
form "[Faceoffs] owns that figure", because those are addressed to the reader and do
a job for them; and it rescued two reader-facing facts out of a deleted note rather
than losing them with their wrapper.

### One club's variant was being taught as a system

`special_teams.md` said the wedge +1 "chases the puck around the perimeter". Its own
bullets, facts block and stated counter all said the opposite, so it was corrected to
"pressures whoever has the puck, working straight outward from the net".

`source-verifier` then refetched all five cited sources and found the correction was
**sourced to the wrong one of them**. "Straight outward from the net" is Sound Of
Hockey describing *the 2021-22 Seattle Kraken specifically*. Broad Street Hockey has
the +1 roaming; The Coaches Site calls him a sweeper across the top of the zone and
never uses the word "chase" at all. The *deleted* sentence was not an invention
either — it is Blue Seat Blogs, from the same Sources line.

So four cited sources describe the +1's route four different ways, and the section
had stated one of them flatly — twice, in opposite directions, in one day.

**The lesson is the one this round keeps producing: being right that a sentence is
wrong is not the same as being right about what replaces it.** The route is now a
coaching choice carrying all three published readings. What every source agrees on —
the triangle, the pressure, the handover, and that following the puck round breaks
the shape — is stated flat.

That correction then reached the body and stopped, in the same commit that renumbers
the cardinal rule. `commit-gate` caught it: the owner's *own facts block*, twelve
lines above the new hedge, still carried the flat claim, along with eight other
sites and the style guide's "do not contradict" list. Nine places, propagated on the
second attempt.

### Smaller, and recorded so they are not mistaken for accidents

- `robots.txt` declared the sitemap as a relative path. The protocol requires an
  absolute URL, and Search Console would likely not have followed it.
- **Diagram generation was not in the build chain.** The rendered SVGs existed only
  because the script had been run by hand; a clean CI checkout would have failed at
  the first diagram reference. It now runs before the Astro build, and the commit
  was tested by deleting every generated artefact and rebuilding from source.
- `site/public/diagrams/` is gitignored — 18 MB of derived output that a build
  reproduces exactly. The manifest *is* committed, because the speech transform
  reads captions from it outside the site build.

### Verified at the gate, and one thing found while verifying

`commit-gate` blocked on a rules claim added late and unreviewed: that **USA Hockey
Rule 630(c)** words the post-offside faceoff location differently from NHL 83.6.
Confirmed against `sources/usah.txt`, verbatim: *"the face-off will take place at the
nearest last play face-off location where the pass or shot originated."*

Two things the same grep settled. For a **carried** offside USA Hockey says *"the
nearest neutral zone face-off spot"* — materially the NHL's answer, so the divergence
sits exactly where the section places it. And USA Hockey's third case, the
*intentional* offside, draws *"at the nearest end zone face-off spot in the defending
zone of the offending team"* — **the same outcome NHL 83.6(iv) gives** (*"If deemed to
be an intentional off-side – face-off spot in the offending team's end zone"*), and
one `rules_primer.md` already carries correctly. No divergence, nothing to add.

**A draft of this paragraph claimed that third case as a divergence NHL 83.6 lacked.
It was false in both halves**, and it was written at the end of this round inside a
sentence explaining why a rules claim should not be written at the end of a round.
The record is next round's scope, so a wrong reason here would have sent a future
round to add a rule-set flag that does not exist — the exact propagation route this
round was convened to close. `commit-gate` caught it by opening the book.

**Why this paragraph survives its own correction:** the hazard is not writing an
unverified claim, which everybody knows to avoid. It is writing one *inside a passage
about being careful*, where the surrounding caution reads as evidence.
### Two findings carried forward, deliberately not fixed here

**1 · `winger.md`'s penalty-kill block says only "block shots".** `facts-reviewer`
graded this Critical and it is: the body imports the full technique inline —
*"on your feet, square to the shooter, head out of the lane and hands tucked behind
your shin pads"* — plus the pointer to when **not** to block. The block reduces all
of it to two words. A winger who takes the facts layer, or hears it read aloud, is
told to block shots with no technique and no exceptions, and the parts the corpus
names as unprotected are feet, hands and face. `defender.md` carries the full
treatment in its own shot-blocking block; `winger.md` is the only exposed one.

**It is not this change's doing** — the diff does not touch that fact — and it wants
`safety-reviewer`, not a same-commit patch. Folding an unrelated safety fix into a
commit that tells a clean story about one role would muddy both. **Next round, first
item.**

**2 · `special_teams.md`'s facts block is full, and it shows.** At 8/8 coaching facts
it now carries two logically independent hedges in one 292-character `Convention:`
line — NHL prevalence and the +1's route — because there is no ninth slot. The owner
document is therefore *less* discoverable on this point than its own dependents,
which give the route a dedicated `Options:` line each. The route hedge is present and
the same block's `Action:` independently tells the reader the route is coached, so
nothing here gets anyone hurt; it is a clarity inversion, not a safety gap.

The style guide's own remedy applies — *"more than 8 and the section is probably two
sections"* — and every way of freeing a slot costs something real (evicting
`Countered by:` loses a label the site surfaces; merging `Technique:` and `Key:`
demotes the handover). **That the fix has no cheap form is the evidence the section
is over-full.** Splitting it is a content decision, not a commit blocker.
