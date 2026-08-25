# Round 42 — the diagram arrival invariant, stated once and enforced

**25 August 2026.** Reviewers: `diagram-reviewer` ×2, `safety-reviewer`, `commit-gate` ×2. Scope: the diagram
layer only — **eleven files, all named**:

`site/scripts/check-arrivals.mjs` (new) · `site/scripts/lib/rink.mjs` ·
`site/package.json` · `site/src/data/diagrams.json` (build artefact, tracked because
`md_to_speech.py` reads it) · and six diagram sources —
`positions.mjs` · `forechecking_systems.mjs` · `faceoffs.mjs` ·
`defensive_zone_coverage.mjs` · `defending_the_rush.mjs` · `neutral_zone_systems.mjs`.

**No file in `content/` was changed by this work.** The `OPEN_ITEMS.md` closure for this item
rides in the *next* commit, alongside round 43's content work, because the plan file carries
both rounds' edits and could not be split cleanly — so at this commit HEAD's plan still lists
the item as open.

⚠️ **The first draft of this record named five of the eleven.** It omitted `faceoffs.mjs`,
`defensive_zone_coverage.mjs`, `defending_the_rush.mjs`, `neutral_zone_systems.mjs` and
`diagrams.json` — **three of them** files whose whole purpose in this commit is the consolidation
the record describes (`neutral_zone_systems.mjs` is the backward-skating glyph rename, unrelated
to the invariant, and `diagrams.json` is a regenerated artefact). Caught at the gate — and
**"three" read "four" until the gate's third pass**, a miscount inside the very paragraph whose
subject is a scope count getting it wrong. **Fourth consecutive round in which a record's scope
covered the files someone happened to notice.**

Closes the `OPEN_ITEMS.md` Tier 2 item *"The diagram arrival invariant is stated three
incompatible ways and enforced by nothing."* That item specified the work as: state the
invariant once, normatively; add a check that fails the build on (b) and warns on (a) for
arrow-ended routes only; then fix the routes. All three are done. What it did not
anticipate is most of what follows.

---

## What the invariant is

A route that finishes on or near an opposing player is a claim about **contact**, not
about drawing. An arrowhead reads as continuing past the point the line ends at; the
two-bar terminal reads as arriving and stopping there. For routes owned by a **skater**:

- **(a) TANGENT — advisory.** The extended terminal tangent must clear an opposing
  skater's anchor by more than 2.9 ft, the player-glyph radius.
- **(b) ARROWHEAD — hard; the build fails.** A tip finishing within 9 ft of an opposing
  skater who lies *ahead of it* may not carry an arrowhead at all.

**These are drawing conventions, not rules of hockey**, and the distinction is
load-bearing. 9 ft is 2.9 glyph + 3.15 arrowhead + 2.9 glyph — the distance at which the
drawn marks collide. The books partition the circle at the target's shoulder line and a
glyph has no facing, so no rulebook distance translates into this test. Nothing here may
be rendered into a body-scale phrase for a reader; *"within a stick's reach"* was tried
once and was wrong.

It is now stated in exactly one place — above `playSvg` in `rink.mjs` — and imported, not
restated, by the checker. **Six copies existed, not four** — two verbatim in `forechecking_systems.mjs`, a
differently-scoped third in `rink.mjs`, two more in `faceoffs.mjs` and
`defensive_zone_coverage.mjs`, and a reader-facing sixth in `reading_ice_hockey_diagrams.md`,
plus an operative **angle** in `defending_the_rush.mjs` that the invariant disclaims. All now
point at `rink.mjs`. The first consolidation pass found four of the six.

---

## The defect the enforcement found

**CRITICAL — an opposition arrowhead finishing inside the threshold of the reader's own centre.**
`positions.mjs`, `centre-backcheck-middle-lane` (owner `content/positions/center.md`). The
middle-lane driver's route tip sat **8.94 ft** from the centre's anchor with the centre
ahead of it — inside the 9 ft at which the drawn marks may collide.

What makes it the round's finding rather than one of its findings: **the spec states the
rule three lines above the route that breaks it.**

> the centre is drawn already inside him rather than arrowed there, because "get to the
> inside" is a state, not a movement, and an arrow from the driver that finished on the
> centre would read as a check rather than a lane.

The guard was written against the route the author chose **not** to draw, and never
applied to the one they did. This is the same shape as round 41's headline — a rule
correctly stated in one layer and contradicted in the layer beside it — and it survived
for as long as the invariant was prose in **five files** and enforced in none — six copies
across five files, plus the angular criterion in a sixth.

⚠️ **This sentence said "four files" until the gate blocked on it — the third time in this
commit that a correction reached some copies and stopped.** Four is the discredited count: it is
what the first consolidation pass found, twenty-five lines below an enumeration in this same
record that says six.

Fixed by pulling the tip from `dx: 29` to `dx: 27`, clearing the centre by 10.0 ft.
Shortened rather than terminated in bars: bars mean arrive-and-stop, and the point of the
middle-lane driver is that he is still coming.

**`diagram-reviewer` rendered it and came back with something better.** The 2 ft was below the
threshold of visibility (~9.5 CSS px at 900, ~3.8 at 360) — but the route *never* depicted
arrival into the slot in either version, ending at x 39 with `high-slot` at 69. What it found
instead was a MAJOR nobody had looked for: **the driver was drawn 2 ft AHEAD of the puck
carrier**, while the section is about *"the forward filling the middle of the ice **behind**
them, arriving late"* and the reader-facing `describe` said *"behind him"*. His anchor also
straddled the blue line with the puck outside it, so the route read offside-adjacent. **I had
moved the tip; the start was the free variable.** `DRIVER` is now (16, 2) — 8 ft behind the
carrier, 9 ft outside the blue line, route 23.1 ft and crossing the line, which is the arrival
the old stub could not show at any length. Re-rendered at 900 px and 360 px and confirmed,
including that the label plate knocks out cleanly where it crosses the centre-ice arc.

---

## Two of my own tools were wrong before either was right

Recorded at length because it is the round's actual lesson, and because it is the second
consecutive round in which the instrument produced defects while auditing for them.

**1. The check had no notion of whose route it was, and a quarter of the corpus was
measured against the wrong team.** Routes carry no team field. The first version treated
`team: 'opp'` as "the opponent" for *every* route — true only of routes the reader's own
players skate. **22 of the 80 arrow-ended routes are skated by the opposition**: every
rush carrier, every forecheck retrieval, every zone entry driven at the reader's defence.
For those, the check measured a route against its owner's own **teammates**, and never
against the players it can actually run through.

It therefore reported one hard failure — `forecheck-212-stacked`, the opposing carrier
finishing 8.25 ft from **D2, his own partner, the man he is carrying the puck to** — and
missed the real one entirely. **I was one edit away from redrawing a correct diagram to
satisfy a broken test.** What stopped it was reading the spec before acting on the output,
and noticing the route started on an opposition player.

Ownership is now inferred from the player a route starts on. That inference was **measured
before it was relied on**: all 80 arrow-ended routes begin exactly on an anchor (0.00 ft)
and the smallest next-nearest player is **5.66 ft** away, so no route can resolve the wrong
way. ⚠️ That licence first read *"at least 8.9 ft away"*. 8.9 is the fourth smallest, not the
smallest. The conclusion survives; the arithmetic behind it did not.

**2. Form (a) has no bound on reach, and I nearly invented one.** A tangent is a ray and a
ray crosses the rink, so (a) meets anchors no reader would ever follow a line to — it
fired on two `carry` routes aiming at a goaltender from **38 and 48 ft** short of him.
The tempting fix was a beyond-the-tip ratio of about 1.5, which separates the real findings
(0.63–1.38) from the spurious ones (2.11, 2.53). **That number would have been fitted to
the cases already known, not derived from anything**, and it would have looked exactly as
principled as the 9 ft that is derived. Rejected. Form (a) is instead scoped to skaters for
a stated reason — a directional test cannot discriminate on a player who stands where every
offensive route already points — which removes both spurious hits without inventing a
threshold. The unbounded reach is disclosed in the invariant and the checker prints the
beyond-distance so a human can dismiss a distant one.

Neither prior statement of (a) carried a bound either. This is a pre-existing hole that
writing the rule down exposed rather than one enforcement introduced.

---

## What is now measured, and what is left standing

**0 hard violations. 7 advisories, all deliberately not failed:**

| Rule | Diagram | Measure |
|---|---|---|
| b-G | `forecheck-212` | arrowhead 7.81 ft from the opposing goaltender |
| b-G | `nz-1-2-2-containment` | arrowhead 7.81 ft |
| b-G | `entry-wide` | arrowhead 8.60 ft |
| a | `nz-1-2-2-trap` | tangent **0.91 ft** from the reader's own F2 — the tightest in the corpus |
| a | `faceoff-dzone-tie-up` ×2 | tangent 2.32 / 2.68 ft from the opposing centre |
| a | `dz-walk-down-man` | tangent 2.06 ft from the reader's own D, 28 ft beyond the tip |

⚠️ **An earlier draft of this table printed nine rows and two wrong numbers.** It listed
`forecheck-212` at 0.54 ft and `nz-1-2-2-containment` at 0.83 ft and called them the tightest
clearances in the corpus. Both were artefacts of the chord bug below; on the drawn curves they
are 5.03 and 3.85 ft and are not findings at all. The genuinely tightest, `nz-1-2-2-trap`, was
under-reported at 2.02 against a true 0.91. **The two numbers this record led with were the
two that do not exist.**

**Two of those advisories are routes the check could not previously see at all.**
`dz-walk-down-man` and `nz-1-2-2-trap` are skated by the OPPOSITION, and their tangents pass
2.06 and 0.91 ft from the **reader's own** defenceman and F2. Before ownership was modelled
those two routes were measured against the opposition's own players and were silently clean.
The report now prints the route's owner on every line and names the target from the reader's
point of view rather than the route owner's.

Three backchecks (`rush-3-on-2-default`, `rush-backcheck-lanes` ×2) finish within 9 ft of an
opponent and are correctly **not** flagged: the opponent trails the tip, so the arrow points
away from him. The bare-distance form flagged all three, which is why it was the wrong form.

**The goaltender is advisory, not hard, and the asymmetry is a judgement I may have got
wrong.** Every net-drive route finishes near the goaltender by construction, so failing the
build there would forbid drawing a net drive at all. But he is the one target every book
protects unconditionally — USA Hockey **Rule 607 Charging (d)**, 2025-29, *"A goalkeeper is
NOT 'fair game' because they are outside the privileged area. A penalty for interference or
charging should be called in every case where an opposing player makes unnecessary contact
with a goalkeeper"*; **IIHF 42.1 CHARGING** carries the same rule in different words — *"A goalkeeper is not 'fair game' **just** because they are outside the **goal crease area**"* — not, as an earlier draft said, the same sentence. Both quotations were
located in `sources/usah.txt:3683` and `sources/iihf_rules.txt:3942` in this session, and
the rule numbers checked against the enclosing headings rather than recalled. Excluding him
outright — which the first version did — would have silently dropped three findings that
the checker's own header cites as its reason for existing. **`diagram-reviewer` rendered all
three and confirmed advisory is right:** measured on the true terminal tangent they clear the
glyph by 4.94, 5.59 and 7.52 ft. Two finish *behind the goal line* with the frame between tip
and goaltender; the third crosses the top of the crease to the far post. None reads as a skater
going through him.

⚠️ **`faceoff-dzone-tie-up` is NOT a defect, and this record said it was.** It read: *"that
spec's comment measures its terminal clearance to the PUCK and never to the opposing centre …
An unenforced invariant produces exactly that: the author checked the constraint, against the
wrong object."* **The puck is the right object.** Rendered and measured: both routes are two
players converging on a loose puck at a draw — the W route passes 1.53 ft from the faceoff dot
and the D route 0.61 ft, they stop 10.0 and 12.6 ft short of the opposing centre, and the
reader's **own** centre stands between both arrowheads and him. It is the declared
false-positive class. Telling the next editor that a correct diagram was authored carelessly
is the exact accident this round's own checker header records itself nearly causing with
`forecheck-212-stacked` — committed, in the record that names it.

---

## One plan claim corrected, and one left alone

**The plan under-named its own measurement.** `OPEN_ITEMS.md` recorded *"seven arrow-ended
routes finish within 9 ft of an opponent"*, of which *"three are backchecks"* — leaving
four — and then named three. The fourth was never listed. This is the third consecutive
round in which a record's own arithmetic required a file its prose did not name.

**The reader-facing form was called divergent and is not.**
`reading_ice_hockey_diagrams.md:65` says *"A route that closes on an opponent ends in the
two-bar mark, not an arrowhead"*, with no numbers. The plan listed it as one of the three
incompatible statements. Read against the invariant it is the correct reader-facing
projection of (b), and its omission of the geometry is exactly what the invariant requires.
**Not changed.** Deleting or rewriting a correct sentence because a planning note called it
divergent is the tidying failure non-negotiable 3 exists to prevent.

One genuine mismatch does follow from it and is **left open, not fixed**: that sentence has
no goaltender carve-out, while three shipped diagrams draw an arrowhead finishing 7.8–8.6 ft
from a goaltender. Either the diagrams are wrong or the sentence is incomplete. It is a
`content/` change and gets a review round of its own.

---

## The safety dimension, which was nearly declared out of scope on the wrong ground

The first commit attempt declared `safety-reviewer` out of scope because **no `content/` file
is touched**. `commit-gate` blocked partly on that and ruled the test wrong: **the gate keys on
claims, not directories.** A diagram change that moves a player ten feet and rewrites
reader-facing alt text about a backchecking situation is a safety question wherever it lives.
It was right, and the review was run rather than asserted.

**No criticals. No majors.** Stated positively for the record, because a silent dimension is
the failure mode: there is no way for a reader acting on this diagram, its caption or its
`describe` to be injured, to injure someone, to be ejected, or to be taught a technique any of
the four books penalise. The diagram contains exactly one route, it belongs to the **attacking**
driver and points at his own attacking net; no defender is drawn moving at anyone, and the
`bodycheck` glyph is not used.

It rendered the shipped SVG (hash-matched against `site/public/diagrams/`) and confirmed the
change is a strict improvement on every contact axis: tip-to-centre 8.94 → **10.00 ft**, tangent
miss of the near defenceman 4.49 → 4.85 ft, and `centre-backcheck-middle-lane` now absent from
the advisory list entirely. It also confirmed the section's three load-bearing claims survive —
the driver is now **8 ft behind** the carrier where he had been 2 ft ahead, and the centre is
29 ft goal-side of his man (up from 19) and still 6 ft goal-side of the route's tip.

**One minor landed on my own comment, and it is the round's recurring shape.** The `describe`
read *"a route showing him arriving late"* with no destination, while the comment above it
defended that as *"true of the zone entry rather than of the slot"* — **a word the reader never
hears.** A comment asserting a reading the reader-facing text does not carry is the same
self-justification the block was written to correct. The qualifier is now in the text:
*"crossing the blue line late, behind the play."*

**Two minors recorded and not acted on**, with reasons. The caption carries the coaching-choice
hedge but not the body-checking scope (USA Hockey 604(a)) — left alone because the reviewer
checked the **audio ordering** rather than assuming it: `md_to_speech.py` reads the ` ```facts `
block first, so a listener hears 604(a) and the checking-from-behind rule four sentences before
the caption. Caveat before claim. And the `describe` uses "right" for two different axes
(image-right for the net, image-top for the wide carrier) — pre-existing, untouched here, and
`site-reviewer`'s to judge for a reader who cannot see the picture.

⚠️ **One scope observation it made that belongs on the record.** The owning section cites only
USA Hockey 604(a)'s blanket prohibition. IIHF **Rule 101.1** is materially different — *"In
Women's Hockey 'bodychecking' is allowed when there is a clear intention of playing the puck or
attempting to 'gain possession' of the puck"* — so a British female reader is **not** under a
blanket ban. Citing the stricter book is conservative and therefore safe, and
`team_play_and_culture.md:462` already carries the divergence. Not a defect; recorded so it is
not rediscovered as one.

---

## Mechanical state

`check_links.py` · `check_facts.py` (26 documents, 773 blocks, 4601 facts) ·
`check_secrets.py` (213 tracked files) · `check_geometry.py` (58 assertions, 19 named
positions) — **all pass**. `check-arrivals.mjs` exits 0. It is wired into `npm run build`
immediately **before** `build:diagrams` — it reads the specs, not the built artefact, so it
fails before anything is regenerated on disk.

---

## What this method could not have found

- **It tests straight segments and terminal tangents, not drawn curves.** A route whose
  bow carries it through a player while both endpoints and the tangent clear him is
  invisible to it. That defect has happened in this corpus and only an eye caught it. Every
  route above is bowed.
- **I rendered nothing myself.** Every render behind this record is `diagram-reviewer`'s:
  six diagrams at 900 px and 360 px, on white only. **`site-reviewer` was not run**, no page
  was viewed in a browser, and **dark theme was not checked at all**. 104 of the 112 diagrams
  have still not been looked at by anyone this round; they were screened numerically, which
  cannot see a label collision or a clipped glyph.
- **The advisory baseline does not exist.** `diagram-reviewer` proposed an allowlist so a new
  advisory is loud and an accepted one silent. It was deliberately not built: an entry asserts
  that a human looked and accepted, and writing seven before two of them had been rendered
  would put the repository's own voice behind a review that had not happened. Both have since
  been rendered and judged, so the blocker is gone — recorded in `OPEN_ITEMS.md` with the
  conditions.
- **It says nothing about whether a route is tactically right.** It cannot tell a correct
  forecheck from an incorrect one; it can only tell whether an arrowhead lands on a body.
- **The 9 ft and 2.9 ft constants were not re-derived here.** They are inherited from the
  renderer's glyph sizes as previously recorded. If `PLAYER_R` or the arrowhead length ever
  changes, the invariant silently becomes wrong — and nothing checks that the constants in
  `ARRIVAL` still match the shapes actually drawn.
- **No `content/` document was read for this round.** Whether `center.md`'s backchecking
  section still matches its picture is the `diagram-reviewer`'s question, and it was
  outstanding when this was written.
