# 12 September 2026 — the Rink Map diagram labels, and captions cut to 10–30 words

Two owner-reported defects on the Rink Map page, and one consequence of fixing the first.

## 1 · The named-areas map was unreadable

**Reported:** labels sat on the blue line; no telling which label belonged to which dot.

⚠️ **Neither was a placement failure. `point` is at x 25 and the blue line IS x 25** —
`rink.json`'s own note calls that anchor *"the blue-line end of the point"* — so those labels were
**anchored on the paint**, not drifting onto it. And nothing in the placer knew the painted lines
existed: it has a `reserve` mechanism for space the caller has already drawn into, and the vocabulary
overlay passed none.

The ambiguity was a **threshold**. `OFFSETS` places a label 4 ft from its point in the commonest case
and `LEADER_MIN` was **5.5**, so that placement drew **no leader at all** — right for a play diagram,
where a label sits beside the only glyph near it, wrong where eight named areas crowd 25 ft of centre
line.

Lowering it exposed a third defect that had been **invisible because the leaders were not drawn**:
leaders crossing each other. `leaderClear` tests a leader against boxes the caller passed, never
against another leader.

**All three are options defaulting to the old behaviour, set only by the `labels` branch — which
exactly one diagram uses.** Verified: `[PNG cache: 202 reused, 1 rendered]`.

## 2 · Then the owner asked for four changes to the labels themselves

| change | how |
|---|---|
| Plain English | hyphens out, side spelled out and moved to the front: `point:L` → *"left point"*, `top-of-circle:R` → *"right top of circle"* |
| Drop four labels | `behind-net`, `net-front`, `goalmouth`, `neutral-zone-mid`. **`crease` kept on the owner's explicit instruction** — it is a painted marking with a rule attached, not a nickname for a patch of ice |
| Slots become regions | the high and low slot are shaded polygons, **copied from `theHighSlot`/`theLowSlot` in the same module rather than re-derived** — `check_zones.py` compares polygons between diagrams, so inventing coordinates here would manufacture a disagreement about what the slot is |

⚠️ **DISPLAY ONLY. Every key stays in `rink.json`**, because the keys are anchors: `point` alone is
referenced in over a hundred places across eleven diagram modules, and its own `$comment` says
renaming it would move geometry.

⚠️ **A defect the first build shipped and the second caught: the two zone labels printed through each
other**, reading *"the high slcthe low slot"* — a label centred in a 15 ft region renders about 20 ft.
Staggered vertically rather than shrunk, because type small enough to fit is lost on a phone.

**Measured on the rendered SVG:** 22 labels (was 26), **zero hyphens, zero colons, zero labels
overlapping a painted line, zero leader-pair crossings**, 2 zone polygons.

## 3 · Captions cut to 10–30 words, and what that cost

**The owner asked for 10–30 words. The captions ran 143–368 — about 3,400 words going to ~300.**

⚠️⚠️ **A CAPTION IS NOT A CAPTION HERE. IT IS THE DIAGRAM, FOR ANYONE WHO CANNOT SEE IT.**
`md_to_speech.py:699` emits `"Diagram. " + caption`, and **`describe` is NOT voiced** — it reaches only
the SVG `<desc>`. `remark-corpus.mjs:251` states it: *"the only thing a listener or a screen-reader
user receives, so it is a claim."* **So a claim cut from a caption and not relocated is deleted from
the podcast.** The owner authorised moving displaced points into the body, which is what made the cut
safe.

**Ten of fourteen needed no body change** — every sentence was already in the prose, usually in the
subsection the diagram sits in.

**Four claims existed ONLY in a caption and were moved into `content/foundation/rink_map.md`:**

1. **§4** — the blue-line width hedge: *"reading that width as existing FOR the offside rule is this
   document's inference… the rules that set the width do not themselves say why."* **The body had
   stated it as flat fact.**
2. **§5** — ⚠️ **five captions each separately disclosed that the area they name is not painted on the
   ice, and the body said so for home plate only.** Now one sentence naming which §5 areas are real
   markings and which are vocabulary read off them.
3. **§5, The dots** — that the split is **not an equal half**, with the arithmetic, and the missing
   *"find out which system your team plays"* pointer that every other coaching choice in the document
   carries.
4. **§6** — *"nothing is painted to mark this split"* for strong side and weak side.

**The arithmetic was re-derived from `rink.json` rather than taken on trust:** blue line to goal line
64, dot 20 out from the goal line, goal line to end boards 11 → **44 ft above the dots, 31 ft below**
(below includes behind the net), and 44 + 31 = 75 = 64 + 11. ✓

⚠️ **`check_absolutes.py` refused to certify the caption layer** — it detected the diagram module was
newer than `diagrams.json` and **exited 2 rather than passing on stale text**. The rebuild is the
coordinator's; after it, exit 0.

## Gates

`check_absolutes` 0 · `check_links` 0 · `check_facts` 0 · `check_geometry` 0 · `check_counts` 0 ·
`check_secrets` 0 · `check-arrivals` 0 · `check_zones` 0. Build `[189 reused, 14 rendered]` — exactly
the fourteen whose captions changed, the caption living in the SVG `<desc>`.

## ⚠️ `rules-verifier`: the hedge was RIGHT, and moving it exposed a self-contradiction

`commit-gate` blocked on C4 — a claim relocated from a caption into the body with nobody re-deriving
it. It was right to, and the verification found more than the claim.

**The negative existence claim is TRUE, and it was attacked properly rather than spot-checked.** The
verifier read the width-setting rule in all four books, the offside rule in all four books, and the one
USA Hockey Casebook situation that discusses the width's legal effect. **None states a reason for the
width.** NHL 1.5 (`nhl_rules.txt:773`) *"lines, twelve inches (12") in width"*; IIHF 1.5
(`iihf_rules_v1.1.txt:579`, **word-for-word identical in the 2026/27 edition**) *"lines, 30cm in
width"*; Hockey Canada 1.3(b) *"30.48 cm (12 in.)"*; USA Hockey *"twelve inches (12") wide"*. All
dimension, no rationale.

⚠️⚠️ **BUT THE SAME DOCUMENT ALREADY STATED THE CAUSE AS FACT.** `rink_map.md:151` read: *"the width
is not decorative — **it exists because** offside is judged against the whole line."* The relocated
hedge at `:300` says that exact inference is *"this document's inference"* and unsupported. ⚠️ **A
listener heard a fact in §3 and was told in §4 that the fact is unproven.**

**The hedge was the correct half, so `:151` was the line that moved.** It now states the consequence,
which IS verified — USA Hockey Casebook Rule 630 Situation 1 has the width belonging to the neutral
zone until the puck completely crosses, then to the attacking zone — without the causal claim no book
makes: *"that width does work: offside is judged against the whole line, so the puck must cross all of
it before the zone changes hands."*

⚠️ **This defect is a CONSEQUENCE OF THE CAPTION CUT, and it could not have existed before it.** The
hedge lived in a caption and the flat claim lived in the body; nothing put them in the same document
until now. **Shortening the captions did not create the contradiction — it revealed one that had been
split across two layers.**

**Propagation checked and clean:** `grep -rn 'not decorative'` and a broader
`width.*because.*offside` both return **exit 1, no matches** anywhere in `content/`. The contradiction
was local.

**Also confirmed by the same pass, against primary text rather than `rink.json`:** the offside half in
all four books (*"completely crosses"* for the puck; skate contact with the line, not full clearance,
for the player), the four width figures, and **the §5 arithmetic re-derived from NHL Rules 1.5 and 1.9
directly** — 64 ft blue line, 20 ft dots, 11 ft goal line to end boards → 44 and 31. ⚠️ **I and the
gate had both derived it from `rink.json`, which is one level removed; this is the first check against
the books.**

**One minor acted on:** `:300` said *"a foot wide"* with no IIHF figure at the point of use. For a
document whose British readers are on the metric book, that is now *"a foot wide, 30 cm under the IIHF
book"*.

## 4 · Two more owner reports, and an experiment that had to be thrown away

**"Don't put dots into existing marks."** Every label carried a grey marker dot, including on the
painted red faceoff dots, the neutral dots and the crease — a marker announcing *"a point is here"*
about features the ice already draws, and on the two red dots, ink over the very thing being named.

⚠️ **`placeLabels`'s signature had promised per-entry control since it was written — `dot?:boolean` on
each entry — and only the function-level option was ever read.** Now honoured. Dotless where the ice
already marks it: `crease`, `neutral-dot`, `faceoff-dot`, `centre-ice`, `centre-point`, `blue-line`,
`goal-line`. ⚠️ **PAINTED is the test, not "visible":** the boards, the corner and the half-wall are
obvious physical things, but nothing on them says WHERE along them the anchor is, so they keep a dot.
`top-of-circle` keeps one because the circle is painted and the top of it is not.

**"The bumper label overlaps the faceoff circle."** True — it sat on the lower circle's arc.

⚠️⚠️ **THE FIRST FIX WAS PRINCIPLED AND MADE THINGS WORSE, AND IS RECORDED BECAUSE OF THAT.** The
straight painted lines were already reserved against the placer; a faceoff circle is painted too, so
the apparently correct move was to reserve the arcs as well — reject any label box that straddles a
ring, while allowing inside and outside. It fixed `bumper`. **It also shrank the feasible space so far
that the greedy placer put `left boards` and `left corner` INSIDE the lower circle, `right boards`
inside the upper one, and threw both half-wall labels to the far side of the picture.** One label
fixed, five broken. **Reverted.**

**The fix that worked is smaller than the rule that failed:** the `the high slot` zone label, centred,
reached x 71.7 and denied `bumper` (anchor x 71) the only position that clears the arc. Nudging that
label 5 ft left — still inside its own region — freed it. **The region carries the meaning; the
centring does not.**

**Final state, measured on the rendered SVG:** 22 labels · **zero on a painted line** · **16 leaders,
zero crossings** · `bumper` clear of both circles. Six labels' boxes technically straddle a ring, and
⚠️ **two of them are `right top of circle` and `left top of circle`, whose anchor IS the circle** — the
box test over-reports, and the render is the authority.

## C10: the browser review failed once, then ran and cleared the diagram

⚠️ **THIS SECTION SAID "C10 IS NOT CLEARED" AND WAS LEFT SAYING SO AFTER IT WAS. `commit-gate` BLOCKED
ON EXACTLY THAT — the second time this session it has blocked on a record of mine that had stopped
being true.** The first attempt is kept below because it is the evidence for how the second was
briefed.

**The second run cleared it.** Chrome recovered — the earlier outage had blocked navigation even to an
external control domain, so it was the extension, not the site. `site-reviewer` then ran the **full
four-cell matrix, 1440 and 375 px in light and dark, with screenshots**, and reported on the
named-areas diagram:

- **22 labels**, counted in the rendered SVG and by eye in both themes and widths.
- **The dotless labels still read as belonging to their features — *"Nothing floats."*** The neutral
  and faceoff dots are the rink's own painted red dots; the crease, blue line and goal line use dashed
  leaders into real paint.
- **The high/low slot stagger reads as two distinct labelled regions, not one block** — and is
  *clearer* at 375 px than at 1440, because the half-sheet viewBox scales the diagram up on a phone.
- ⚠️ **`bumper` does not overlap either faceoff circle at any viewport or theme. The regression is
  gone.**
- **`crease`** sits legibly between the low-slot wash and the crease paint.
- **Captions read complete rather than truncated** at 23–30 words.
- ⚠️ **It RETRACTED its own suspected mobile finding** after checking that all 22 labels are present
  and legible at 375 px — it had suspected the half-sheet viewBox hid the left-hand ones.

**16 leaders, zero crossings**, re-derived by segment intersection over all 120 pairs.

⚠️ **What it found that is NOT this change, and is NOT fixed here:** anchor links do not scroll,
site-wide. Recorded in `OPEN_ITEMS` as **reproduced, not confirmed** — I re-derived it (target at
offsetTop 44,095, `scrollY` 0; `scrollIntoView({behavior:'instant'})` works and every smooth scroll
does not) but **smooth-scroll animation is precisely what an automation harness interferes with**, and
that session also produced blank screenshots at depth. **A human opening the URL in a normal window
settles it.**

### The first attempt, kept for the record: the browser review could not run

`site-reviewer` was dispatched and **Chrome was unavailable** — every navigation returned
*"Could not verify this site's safety category"*, including to an external control domain, so it read
as an extension outage rather than a site block. It stopped after three attempts per its brief and said
so plainly: *"I have zero screenshots… That is a materially weaker form of evidence than my role
normally provides."* **Reported as a gap, not a pass.**

**What it established statically, which is still worth having:**
- ⚠️ **The diagram is theme-invariant BY CONSTRUCTION.** The rink SVG contains **zero** `var(--…)`
  references and paints its ice as a literal `fill="#ffffff"`, per a documented decision in
  `global.css`. **So the shaded regions' contrast cannot differ between light and dark — there is no
  theme-dependent code path to regress.** That answers the contrast question without a screenshot.
- The named-areas map is a plain `diagram`, **not `diagram--full`**, so it scales to width rather than
  using the horizontal-scroll container — right for a single zoomed end.
- The redirect returns 200 with a meta-refresh to the new URL and is **correctly excluded from
  `sitemap.xml`**.
- 14 captions at 23–30 words; the page's three other figures are long-form diagrams **not owned by this
  document** and correctly untouched.
- Its one unconfirmed Major — the `crease` label over the low-slot wash — was raised against **the
  build before the marker-dot and bumper changes**, and the coordinator has since viewed the render
  directly.

**Still unverified by anyone: the page at 375 px, either theme in a browser, the console, the theme
toggle, and the scroll affordance in use.** The coordinator has looked at the diagram PNG, which is a
real check of the picture and **not** a check of the page.

## ⚠️ `safety-reviewer`: no Critical — and one Major that CONFLICTS WITH THE OWNER'S INSTRUCTION

`commit-gate` blocked because this dimension had never been run and was never declared out of scope.
It has now run over both changes.

**Its plain answer to the question put to it:** *"No, neither change puts a reader into a penalty, a
collision, or an injury they would not otherwise have met."* **No Critical.**

**It re-verified the four-book faceoff divergence against primary text itself** — NHL 76.7(i)/(ii)
(`nhl_rules_layout.txt:6900-6946`), IIHF 76.7(I)/(II) in **both** editions, Hockey Canada's Glossary
`ENCROACHMENT` entry (`hc_layout.txt:560-569`), USA Hockey Casebook 613 Situation 8
(`usah_casebook.txt:12533-12539`) — and confirmed all four match what the two diagrams claim.

### The Major: the caption cuts dropped penalty content from the layer a listener hears

⚠️ **The trapezoid caption used to carry the delay-of-game minor and its skate-contact exception, the
USA Hockey / Hockey Canada *"no trapezoid but still restricted"* divergence, and England Ice Hockey's
*"not currently enforced"* caveat — which frees where a goaltender may PLAY the puck and never where
they may FREEZE it.** The crease caption carried that **three of the four books count the red boundary
line as crease** and that the instruction is *"keep your skates off the red line, not merely out of the
blue paint."*

**Both are now bare geometry.**

⚠️ **It does NOT meet the Critical bar and the reviewer said so explicitly:** body, Common Mistakes and
Key Takeaways all carry the full content and **were not touched by this diff** — `git diff` shows five
hunks in `rink_map.md`, none inside Common Mistakes or Key Takeaways. The loss is **caption-only**.

### ⚠️ AND FIXING IT WOULD BREAK THE OWNER'S EXPLICIT INSTRUCTION

The owner asked for **10–30 words**. `the-trapezoid` is at **29** and `the-goal-crease` at **30**.
**There is no room for the caveat clause the reviewer suggests.** The two goals are in direct conflict:

- **Keep 10–30 words** — the page reads as the owner asked, and a listener meeting only that diagram
  gets geometry without the penalty that attaches to it.
- **Add the clause** — the caption layer is complete, and the captions run past the limit he set.

**This is the owner's call and is recorded here unresolved rather than decided quietly.** The body,
Common Mistakes and Key Takeaways carry everything either way; what is at stake is the reader who meets
**one diagram alone** — a deep link, a search result, a single figure read aloud.

### A second, smaller one, judged adequate

The new faceoff diagram's caption points at *"the diagram above"* for the book-by-book breakdown rather
than naming which book says what. ⚠️ **The reviewer judged the substantive warning survives in
isolation** — a reader gets *"the books diverge, do not assume"* even without the twin — **unlike the
rink-map case above, where the top-line fact itself is gone.** Optional.

## Files in this change

`content/foundation/rink_map.md` · `site/scripts/lib/rink.mjs` ·
`site/src/diagrams/rink_map_and_glossary.mjs` · `site/src/data/diagrams.json` (build product) ·
`site/scripts/build-diagrams.mjs` (one line: plumbing `zones` through to `rinkSvg`) · this record.

⚠️ **`build-diagrams.mjs` was missing from an earlier draft of this list and `commit-gate` caught it.**
A one-line plumbing change is exactly the kind that goes unnamed, and C8 asks for the files in the
diff, not the interesting ones.

## ⚠️ What this change could not have found

- **Nobody has heard the shortened captions.** Every judgement about what a listener loses was made on
  paper, against the body prose. The cut is 90%, and the case it cannot test is a listener who had the
  caption as their only route to a diagram and now gets a body sentence in a different place in the
  episode.
- **No `rules-verifier` re-checked the citations that MOVED.** The rule numbers relocated from captions
  into the body were verified as *"a straight subset of, or literal quote from, existing body prose"* —
  not re-derived against `sources/`. **If one was wrong before, it is wrong in a second place now.**
- ⚠️ **This bullet used to read *"nobody has viewed the rendered page in a browser"* and was left
  saying so after the second run cleared it.** See the C10 section above — four cells, with
  screenshots. **Caught by `commit-gate`.** What remains unverified is the page on a real device,
  in a browser other than Chrome, and under a screen reader.
- **A deep link.** The captions were shortened on the assumption a reader meets the caption beside the
  body. That holds for a linear read and for the podcast; it does not hold for someone who lands on a
  single diagram from a search result.
