# Round 40 — the notation axis residue, and the content pulled in with it

**24–25 August 2026.** Reviewers: `content-reviewer` ×3 (one a cold read), `diagram-reviewer`,
`safety-reviewer` ×2, `site-reviewer` ×3, `commit-gate` ×10.
Scope: the staged diff of the commit that completes the shape-carries-position revert.

---

## What the commit is

The axis revert itself — shape carries the **position**, fill carries the **team**, open own,
solid opposition, monochrome — had reached the renderer, the legend rows and
`reading_ice_hockey_diagrams.md` in an earlier session and stopped there. HEAD was still
shipping the superseded axis to readers: its `reading_ice_hockey_diagrams.md` said *"a circle
is your own team, a triangle is the opposition"* and its renderer picked shape from `opp` and
separated the teams by colour. This commit finishes it.

`winger.md` and `switching_positions.md` are here because three diagrams added by this commit
are owned by them, and a diagram cannot be reviewed against a section that is not in the
commit. Their own staged changes are two earlier, unreviewed sweeps — zone-prefixed headings,
and `owns` → `covers` — which is why two reviewers were pointed at them.

---

## The defect class this round is about

**A stale comment outlives the code it describes, and the next editor acts on the comment.**
`rink.mjs` had five such comments recorded in round 34, which declared them all corrected.
This round found **four more in the same file**, two of them added by the very sweep meant to
end them:

| Where | Said | Actually |
|---|---|---|
| `rink.mjs` `playSvg` | *"Shape carries POSSESSION"*, `filled own, open opposition` | shape = position; open own |
| `rink.mjs:403` | *"The player axis is (B)'s"* — (B) is IIHF | it is (A)'s, the HEO sheet |
| `rink.mjs:448` | *"fill for team (filled own, open opposition)"* | `opp ? ink : '#fff'` — inverted |
| `rink.mjs` legend | *"Shape carries possession … filled yours"* | rows below it rendered correctly |
| `faceoffs.mjs:98` | a defenceman *"is not a triangle"* because he is ours | `pos: 'D'` draws a triangle |
| `puck_support_and_spacing.mjs:93` | *"Open TRIANGLE = opposition"* | a **solid circle** — both channels inverted |
| ×3 modules | `pressure` is *"one bar"* | `end: 'bars2'` since the rewrite |

⚠️ **The repair of that last row was itself half-applied, in two files.** It corrected the count
to *"two bars"* and left the label *"Checking pressure"* standing beside it — asserting a two-bar
checking-pressure glyph **no published key has**. §21.1 has no pressure symbol at all and two bars
is its SUDDEN STOP; the HEO sheet's checking pressure is one bar, which this corpus does not
offer. So a pressure route and a sudden stop draw the same mark here and are separated by where
the route ends. Caught at the gate, after three review passes had read those lines.

The file's own warning — *"if you find a sixth, delete it rather than adding a warning beside
it"* — is now in the reviewer agent as a verdict table, because a warning beside a wrong line
is what let these survive.

**Two of the corrections in this commit were themselves wrong and were caught by review.**
That is the finding worth carrying:

- The replacement for `faceoffs.mjs:98` added the triangle's **x** half-width to a **y**
  coordinate and measured against the dasher when `x = 80` is on the corner arc. It concluded
  *"clears the boards by 1.98 ft"* over a glyph that was **through** them. It certified a
  collision as clearance — worse than the stale note it replaced, because it was confidently
  wrong rather than obviously old.
- That correction then went stale within the hour, when the boards fix removed the overlap it
  described. Caught before staging.

**Method that would have prevented both:** re-derive from the rendered artefact, not from
arithmetic. `<path d="M 80 -40.60 …">` settles the apex; a pixel scan settles the overlap.

### The auditor is not outside the class

Three of the round's instances were the **gate's**, not the author's, and the third is the one to
carry forward. Auditing the very fix described above, it set out to disprove a count and indexed
`DIAGRAMS` — an **array** — by diagram id. That yields `undefined`, an optional chain swallowed it,
and every lookup returned zero. It reported *"between them they contain zero two-character triangle
ids"* as a disproof, and the disproof was plausible enough to act on. Re-run without the optional
chain it throws `TypeError: Cannot read properties of undefined`.

**That is the goaltender deletion's failure mode exactly** — a silent `undefined` producing an
empty result that exits 0 — committed while auditing the repair for it, by the reviewer checking
the repair. The other two were a grep whose pattern could not match across a line break, and a
completeness claim made from a tool whose limits had not been stressed.

The lesson is not that the gate is unreliable. It caught nineteen defects the author did not, and
named its own three unprompted. It is that **no position in the process is outside the failure
class**, so the defence cannot be a more careful reader — it has to be structural. Both structural
fixes this round produced say the same thing in different registers: replace a restatement with a
pointer (*"read the rows in `legendSvg`"*, `DIAGRAMS.filter(d => d.puck).length`), and where the
claim is a reason rather than a number, **state it with the means to check it** — the two-character
id note now carries the diagram, both content files, and the greps with their expected answers.
That last move generalises furthest, and it is the one the next round should apply to the unsourced
reasoning.

⚠️ **Every repair in this commit was itself half-applied at least once**, and each was caught by a
gate pass rather than by the review that preceded it. They are enumerated in the list above and in
the commit's own ⚠️ comments; **this paragraph deliberately does not carry a total**, because a
total here is a bare count restated in prose — the exact failure this section is about, and the
first draft of this paragraph carried one. What the stale halves were: a **count** (most often), a
**name or attribution**, a spliced paragraph whose fragment no longer attached to anything, a
missing entry in the adaptations list, and an **exclusivity claim** — *"the only line symbol here
that is"* — which was false and which made the corpus look **more** faithful to its sources than it
is. That last direction is the one non-negotiables 4 and 5 exist to prevent.

Two of them were causally linked: the missing `droppuck` adaptation was *why* the document
miscounted the shared symbols, so correcting the count alone would have made the document worse —
it would have told a reader both keys agree on a symbol, directly above a legend showing a third
version.

**The generator, named:** every one of the seven is *a claim about a source, restated in a second
place, where the second place is prose.* The only structural fix applied here replaces a
restatement with a pointer — `rink.mjs` no longer summarises the key split as a count and instead
says *"read the rows in `legendSvg`"*, because **a count goes stale silently and a name does not.**
Every remaining prose description of a glyph — in a `describe`, a caption, or the notation document
— is still a restatement that can go stale, and there are dozens. That is a corpus-level item,
larger than this commit, and it is the real finding of this round.

---

## Reader-facing defects found and fixed

**The faceoff captions taught a flip the renderer no longer performs.** Six captions said
*"the circles here mean your team rather than possession"*; one said *"**the shapes have
flipped** … they won the draw, so they are the circles now and your five are the triangles."*
Under the settled axis nothing flips. The caveat is unnecessary at a faceoff and was deleted;
the flip sentence was replaced with what the picture draws. Already built into
`diagrams.json`, so it was shipping.

**The axis correction stopped one line short of the provenance.** The Sources block still read
*"§21.1 … — the player-glyph axis"* — naming the one source that says the reverse, in the line
another document would quote as *where the axis comes from*. The correction had reached the
Overview, the body and the Key Takeaways. This is the pointer-propagation shape the style guide
records.

**Two new wall-play captions carried none of their section's safety override.** `winger-dz-rim`
and `winger-dz-reverse` teach a puck battle on the boards with a checker arriving; the rim
caption asserted body-between-puck-and-checker *"is the whole of the protection"*, which its own
section contradicts at `winger.md:107` (*"Never your back to the wall, never duck"*). The
reverse caption reproduced the puck-protection set — the exact material
`puck_handling.md:368` says the boards rule overrides — and dropped the qualifier. **A third
diagram added in the same commit carried the override correctly**, so the convention was known
and applied to one of three. Both now end on override wording identical to the third diagram's, verified through
`md_to_speech.py` to reach the spoken output. ⚠️ The first version of this repair was **not**
identical — it dropped *"from behind"*, the term the rule and the USA Hockey quotation both turn
on — and this record claimed identity before it was true. Caught at the gate.

**`winger.md:25` rendered a safety sentence as an `<h2>`.** A paragraph line abutting `---` is
a CommonMark setext heading. The corpus's boards-safety carry-forward sentence became a heading,
entered the table of contents, took a permalink, and removed the section rule — while
`md_to_speech.py`, whose heading regex is ATX-only, still read it as a paragraph. **The two
channels disagreed.** Reproduced with the site's own `micromark`, fixed with a blank line, and
re-verified: 9 H2s, all legitimate. Neither checker can see this class.

**The heading rename orphaned nine of its own cross-references.** The sweep renamed
`### Carrying the Puck — Under Pressure` to `### Defensive Zone: …` and updated no reference to
it: three lost their zone prefix entirely, four kept an em dash where the heading now has a
colon. 11 of 12 now resolve; the twelfth points at a bold paragraph label and is pre-existing.

**The off-wing caption miscounted its section's options and invented a fifth.** It listed the
four correctly, then named *"the fourth, straight up the wall"* — not among them — and gave it a
priority (*"the one you take when none of these is on"*) the section does not. It reinstated a
wall play as the fallback three lines before warning about the wall. **Two reviewers then
disagreed about which option is genuinely undrawn**, and the spec comment that would settle it
cites coordinates the spec does not produce. The caption now names none and says the section
ranks none.

---

## What only a rendered page could find

`site-reviewer` ran three times and produced four criticals. None was reachable from the source,
and every mechanical check was green throughout.

**1 · Monochrome made an open glyph vanish into a solid one.** With teams no longer separated by
hue, an open triangle crossing a solid circle was *erased* by it — same ink, nothing to fall back
on. Measured at 0.746 ft of overlap in `dz-strong-side-overload`, whose caption says *"all five
defenders shift to the puck side"* while one of the five had its corner bitten off. Three such
pairs. Fixed with a white halo under every outline — the class, not the three, because which glyph
lands on top depends on the order players happen to appear in a spec. The cost was then measured
rather than assumed: a faceoff circle goes 21% → 28% hidden, a blue line 30% → 36%, and **519 glyph
pairs** were enumerated to confirm no separation region lies where the repair paints.

**2 · The puck was fused to its carrier in all three new diagrams** — 0.125 ft of white, which is
0.95 px at desktop and **0.42 px on a phone**, so it rendered as a lollipop. The spec's own comment
had called 0.125 ft *"any white at all"* and treated that as settled. The arithmetic was right and
the conclusion was wrong, because nothing converted feet into pixels at the width a reader holds.

**3 · Two-character ids were cut by the triangle's sloping edges** — 42 spec entries, 44 rendered
instances. A circle offers 4.59 ft of interior; a triangle offers 1.11 ft of half-width at the
cap-top against the 1.685 ft `D1` needs. Directly caused by the axis revert: these were circles.

**4 · And then the repair for (1) deleted every goaltender in the corpus.** This is the most
valuable thing the round produced and it belongs in `review_history.md`:

> The `pos: 'G'` branch returned a bare **string** out of a map whose every other branch returned
> `{ halo, body }`. The layer-order repair consumed that map twice — once for halos, once for
> bodies — so both properties were `undefined`, and `Array.join` renders `undefined` as the empty
> string. **104 goaltenders vanished from 92 diagrams. Exit 0. `check_links`, `check_facts`,
> `check_geometry` and `check_secrets` all passed. `npm run build` succeeded.** Meanwhile 87
> captions and `describe` texts went on naming a goaltender who was not drawn — and `describe` is
> the accessible name, so a screen-reader user was told about a player a sighted reader could at
> least see was missing.

The branch now falls through to the shared return, and the join **throws** if any entry is not
`{ halo, body }`. Silent was the defect; the string return was only the trigger. That is a
structural fix rather than a repair, and it is the second of the two this round produced — the
other being *"read the rows in `legendSvg`"* in place of a count.

---

## The boards overlap — a rendering defect the revert caused

Nine player glyphs across seven diagrams were drawn **through the boards ink**. The two triangle
cases are new: a wall defenceman was a 2.9 ft circle under the old axis and is a triangle
reaching 4.4 ft under this one. `breakout-reverse`'s D1 was over by 0.67 ft and visible.

Fixed by `stroke-linejoin="round"` on the triangle path (0.8 ft of miter → 0.4), plus a **0.3 ft
`dy` on the one glyph that still did not clear** — `breakout-reverse`'s D1. Every triangle in the
corpus now clears the boards; `check_geometry.py` re-run and the table still agrees with its owner.

⚠️ **The first attempt moved the corpus-wide datum instead, and that was the wrong instrument.**
`rink.json`'s `half-wall` was changed 38.5 → 38.2, which worked and cost far more than it fixed:
**that value is restated in 54 comments across ten diagram modules**, six of which this commit was
not otherwise touching, and every one of them became false the moment it moved. Exactly **one**
glyph in the corpus is a triangle sitting on that datum with no `dy` — the other two half-wall
triangles are 5 ft and 13 ft off it — so the whole cost bought one glyph. Reverted, and the fix put
on the glyph. **A datum restated in 54 places is not a knob to turn**, and the warning now sits in
`rink.json` beside the value so the next person meets it before doing the same thing.

**Three overlaps remain and are not fixable here.** The faceoff wingers' circles at y 38.97
overlap the corner arc by 0.125 ft. They predate the revert, rounding a join does nothing to a
circle, and `HASH` cannot be lowered because it is derived from Rule 76.7 — a smaller value puts
a skate inside the faceoff circle. Recorded in the code at the point of use.

⚠️ **`check_geometry.py` is structurally blind to this**: it checks the coordinate table, not
glyph ink. It passed cleanly throughout.

---

## Corrected figures

- **511 shaped glyphs**, not 501: 328 circles + 183 triangles across 112 diagrams. The corpus
  draws **615** player glyphs in all; the other 104 are goaltenders, which carry no shape.
- `content_style_guide.md:713` describes sudden stop as *"line ending in a perpendicular bar"*,
  singular. §21.1's is **two**. The document is right and the style guide's table is not —
  carried to `OPEN_ITEMS.md`, unfixed here.

---

## Carried out of this commit, unfixed

- **The same two sweeps are half-applied.** `center.md` and `defender.md` carry the zone-prefixed
  headings and the `covers` vocabulary in the **working tree**, unstaged; HEAD has neither. This
  commit ships one quarter of a heading rename. **If the rename orphaned nine references in
  `winger.md`, nobody has yet asked how many it orphaned in those two** — and that should be
  asked before they are staged, not after.
- **`owns` → `covers` is half done**: the sweep replaced the active form and left ~20 passive
  `owned by`. `winger.md` now says *covers* at :221 and *owned by* at :613, of one document.
- **Summary-layer gaps in `winger.md`, pre-existing.** IIHF women's Rule 101.1 (pin the puck, not
  the player — verified at `iihf_rules.txt:7503`) and the USA Hockey free-hand divergence (Rule
  622, `usah.txt:4343`) are both in the body and the facts block and in **neither** summary.
- **A ⚠️ inside a diagram caption can never fire the speech pipeline's importance callout.**
  `md_to_speech.py:1637` tests the raw paragraph, which for a diagram is `![](diagram:…)`; the
  caption is substituted later and the glyph then deleted by `SYMBOLS`. This is the first ⚠️ in
  any caption in the corpus, so the defect has never had a chance to show.
- **The unsourced catastrophic-injury prevalence claim** exists in three inconsistent forms
  across four files, attached to two different behaviours, none sourced. Tator's *Spinal Injuries
  Due To Hockey* is not on disk. Converged the two in `winger.md` onto the owner's wording;
  the corpus-wide reconciliation and the sourcing remain open.

---

## What these methods could not have found

- **§21.1 was eventually opened — by the gate, not by the reviewers who used it.** Three passes
  reasoned about the IIHF key from `rink.mjs`'s own comments, which is the trust this project says
  not to extend. `commit-gate` rendered p.32 and confirmed every §21.1 claim in this commit: the
  `TEAMS / OFFENSIVE DEFENSIVE` columns, the numerals 1–6, the `//` STOP, the two-bar SUDDEN STOP,
  the arch-shaped BACKWARD SKATING, the zigzag BACKWARD CROSSOVER, `X` PYLON, `G` GOALTENDER, and
  the circled `C`/`A`. It also confirmed the negative: **no lateral-crossover symbol.** That the
  verification landed at the gate rather than in the review is itself the finding.
- **Everything below the notation was checked in a browser only after the gate blocked on C10.**
  For nine passes "no browser" was carried as a *disclosure* when C10 makes it a *condition*. The
  three rendered passes then produced four criticals in one sitting, none of which any amount of
  reading the source would have found. What remains unchecked is narrower but real: Chrome only,
  headless only, no screen reader run (only `<title>`/`<desc>` markup inspected), no print or EPUB
  rendering, and no real device — the "small but readable" verdict on a 6.8 px `D1` is a judgement
  about an emulated raster.
- **The caption layer has no mechanical gate at all.** Neither `check_facts.py` nor
  `check_links.py` reads captions. The safety omission was found only because a brief pointed at
  those two diagrams; **six other diagram modules are staged in this commit, their captions
  unread against their sections' safety overrides.**
- **The setext scan was completed at the gate**, over all 37 markdown files in the staged tree:
  zero further candidates. The finding stands as a class no checker covers — nothing stops the
  next one — but the corpus is clean of it today.
- **Cross-checking a claim against sibling documents is not verification.** Seventeen rule
  citations pass through `winger.md` and `switching_positions.md`; consistency across the corpus
  would confirm a shared error just as readily as a shared truth.
- **A legal technique badly executed is still dangerous.** Nothing here establishes how a
  fourteen-year-old actually meets the wall making a reverse.
