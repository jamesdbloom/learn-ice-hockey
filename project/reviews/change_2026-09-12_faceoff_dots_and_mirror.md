# 12 September 2026 — the faceoff dots: what changes at the other circle, and what does not

**The owner's report:** *"players most often get confused [at the end-zone dots] about where to stand,
which direction to move the puck in and where to move to after the faceoff."*

## The premise was refuted, and the refutation is the finding

The brief asked for the **left and right** dots drawn and explained. ⚠️ **A `content-reviewer` refused
the framing and was right: *"left"/"right" is not a stable reference frame at all* — which circle is on
your left depends on which net you are defending and which way you are facing, while boards-side and
inside are stable at both.** The page's silence on left/right was **deliberate**; what was missing was
any statement of *why*.

**Corroborated independently by a second reviewer:** `rink_map.md`'s own list of how players name
faceoff spots gives *"our end / their end"*, *"bench side / far side"* and *"strong-side dot /
weak-side dot"* — and **never lists left or right**.

## ⚠️ And the paragraph written to say so overclaimed, in a way its own document refutes

It read *"neither this document nor most coaches ever say 'the left dot' or 'the right dot.'"*

- ⚠️ **`faceoffs.md:720`, thirty-three lines later and untouched by the change: *"the right-shot D on
  the **left boards**."***
- ⚠️ **`offensive_zone_play.md:1012`: *"usually a left shot on the **right circle**."***
- And *"most coaches"* is unsourced folklore in a corpus that labels exactly this kind of
  generalisation as *"coaching craft"* or *"an observation, not a count"*.

**Rewritten to keep the argument and drop the claim**: left and right are not banned, they need a fixed
reference agreed first, and at a draw it usually is not.

## What the three reviews found

| dimension | outcome |
|---|---|
| **`facts-reviewer`** | **2 Majors, both fixed.** |
| **`content-reviewer`** | **1 Major (above), fixed.** Cardinal rule **clean** — no new law-of-hockey assertion. Cross-references at `:722`/`:766` resolve to a heading that exists verbatim. |
| **`diagram-reviewer`** | **1 Major, fixed.** Mirror math **verified correct**. |

### The facts-layer Majors — a coaching choice reaching the spoken layer

⚠️⚠️ **The new `Action:` line asserted *"the slot D holds the net front"* as settled, in the layer a
listener hears ALONE with a 300 ms break either side.** `defensive_zone_coverage.md:96` states plainly
that it is not: *"under **man-on-man** the net front belongs to whoever's check went there, under a
**collapsing box** both defencemen are inside the house together, and under a **strong-side overload**
some coaches put **both** defencemen low."* ⚠️ **The block's existing `Convention:` hedge was scoped to
the WINGERS ONLY, so nothing covered what this change added — it put an unhedged, system-specific role
assignment into the audible layer for the first time.** Non-negotiable 7. The `Convention:` now covers
the whole alignment.

**Second Major:** the line flattened the body's *"the corner **or** half-wall"* to *"the corner"*, and
dropped *"and blocks the lane"* — ⚠️ **while the adjacent fact in the same block preserves its own
either/or correctly**, so the block was inconsistent about its own standard. Both restored.

### The diagram Major — a shaded zone asserted without its caveat

`faceoff-dzone-alignment-other-circle` draws the same no-skate faceoff circle as its twin and asserted
the same thing about it **with none of the twin's four-book warning**. ⚠️ **`dzoneCleanLoss` and
`dzoneTieUp` omit that warning too and were NOT a precedent — they draw no shaded zone, so they make no
claim needing one.** A reader meeting this picture alone — deep link, search result, one figure read by
a screen reader — got an absolute-sounding rule. Caveat added.

**Verified correct, and worth recording as such:** the reviewer traced `resolve()`'s `sided` flip to the
rendered SVG and confirmed **every one of the five offsets is its twin's magnitude with only `dy`
negated** — the correct transform, no side-swap. ⚠️ **A side-swap would have taught a player to stand
on the wrong side of the ice at one of the two circles, which is the exact defect the diagram exists to
prevent.** It also **upheld the judgement call not to mirror the slot D or the goaltender**, having
searched both documents for any faceoff-specific shading and found none.

## Two process findings

⚠️ **A self-reported diligence figure was wrong again.** The writing agent said it checked *"all 18
occurrences"* of "strong side". The real count is **25 before the change and 33 after**. Its
substantive fix held — the reviewer walked every occurrence itself and confirmed the disambiguation is
correctly placed — but the figure was not what it claimed.

⚠️ **The curly-apostrophe trap caught the coordinator IN AN EDIT, not in a grep.** The first attempt to
fix the overclaiming sentence failed its anchor assertion because the file carries `That’s` and the
patch typed `That's`. **It had to be extracted with a regex rather than typed.** This is the trap
written into five briefs today, and it does not only cause false absences — it silently breaks patches.

## C10: the browser saw it, at all four cells

`commit-gate` blocked on one ground — **a new diagram nobody had looked at.** Chrome failed twice
(blocking control URLs too), the owner reauthenticated, and `site-reviewer` then ran
`/systems/faceoffs/` at **1440 and 375, light and dark, with screenshots**.

**The pair reads as a mirror.** Its words: *"The mirror is immediately legible: same shapes, same
colours, same labels, flipped top-to-bottom… while 'slot D' and the goaltender 'G' stay in the same
physical position in both — exactly the teaching point. **No effort is required to see it as a flip.**"*

**The new paragraph lands in the right place** — directly after the mirror's caption, *"exactly where a
reader has just seen the mirror and needs the terminology explained."* No layout collision. **No
console errors.** Dark theme correct around a theme-invariant white figure, as designed.

### ⚠️ MAJOR, PRE-EXISTING AND NOW DOUBLED: the boards-side D triangle crosses the boards line

**Confirmed visible in BOTH diagrams, at ALL FOUR viewport/theme cells.** The triangle's apex *"punches
through the boards line"* in the twin and does the same, mirrored, in the new one. ⚠️ **It is a fixed
offset in the diagram generator that does not account for the boards arc's radius at that point** —
`site/src/diagrams/faceoffs.mjs`'s own comments already record it as open and unresolved.

⚠️ **NOT INTRODUCED HERE — the twin is already in production carrying it.** This change **doubles the
surface a fix must touch**, from one diagram to two. It is cosmetic, not a correctness or safety
defect, and fixing it properly means fixing both and re-reviewing both. **Recorded as a plan row and
shipped rather than fixed, deliberately.**

⚠️ **The reviewer proved the finding was not an artifact of its own workaround.** The blank-capture
trap forced it to hide DOM siblings so the figure sat near scroll-position 0 — **so it also took one
capture by ordinary short-distance scrolling with nothing hidden, and saw the same overlap.**

**One reported defect it could NOT reproduce:** the *"slot D"* label clipping a background circle, which
`diagram-reviewer` had found in the source. It looked at all four cells and saw the label *"sitting in
clear whitespace"*. ⚠️ **It reported that as unconfirmed either way rather than as a refutation** — it
may be fixed, or reproduce only under a condition it did not hit.

**Minor it did find:** `boards-side D` is the only one of the four labels with **no leader line**,
relying on proximity. Readable at 375, but the weakest of the four.

## Recorded late: the `:830` relabel, which no record named

⚠️ **`commit-gate` found this and cleared it itself rather than block.** `faceoffs.md:830`'s
board-side variation play was relabelled *"strong-side winger → weak-side hash mark"* →
*"boards-side winger → inside hash mark"*, and **no review record mentioned it** —
`grep -rn "inside hash mark" project/` returned nothing.

**It is geometry-preserving:** at an end-zone circle the draw side IS the boards side, and that
circle's weak-side hash mark IS its inside one. Both replacement terms are already defined roles
in the same document (`:701`, `:751`). ⚠️ **It was verified against the document's internal
vocabulary, NOT against the coaching sources the play is attributed to** — no `source-verifier`
ran, correctly, because this diff adds no citation or quoted string.

## What this change could not have found

- **No coach has read it.** Every judgement about whether the alignment is realistic hockey was made
  against this corpus's own prose, not against outside practice. The diagram reviewer said so plainly:
  it could confirm internal consistency, not that a slot D staying centred is what a coach would teach.
- ⚠️ **This bullet used to read *"no browser has seen the new diagram"* and was left saying so after
  one had.** `site-reviewer` ran all four cells — see the C10 section above. **`commit-gate` caught
  the contradiction; it is the THIRD time in this session a record of mine stopped being true, and
  the exact defect it blocked me on twice.** What remains unseen is every OTHER diagram on that
  page, and the page on a real device rather than a simulated 375 px viewport.
  Two pre-existing glyph/boards overlaps are now **inherited into a second diagram**, doubling the
  surface a future fix must touch.
- **The facts review covered two blocks**, not the document; the prose review covered the diff, not the
  1,154 lines around it. Neither re-verified a single rule citation, correctly — the change touches none.
