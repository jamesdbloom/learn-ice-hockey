# Round 34 — the diagram notation, rebuilt on IIHF §21.1

**Scope:** `site/scripts/lib/rink.mjs`, all 16 diagram spec modules, `site/src/diagrams/notation.mjs`,
`site/src/data/diagrams.json` (built), `content/reading-diagrams/reading_ice_hockey_diagrams.md`,
`project/content_style_guide.md`, `.claude/agents/diagram-reviewer.md`, `scripts/fetch_sources.sh`,
`sources/README.md`.

**Commissioned by the owner**, who compared the rendered page against §21.1 and found the symbols wrong. It is
recorded here rather than in `docs/plan/` because it changes `content/` and therefore needs a review record
under C8.

---

## 1 · What was wrong, and it was not a slip

The notation was a **hybrid of two published keys that disagree**: the **player axis** from IIHF
*International Symbols* §21.1, the **line symbols** from the Hockey Eastern Ontario NCCP handout. Both keys
are cited in `reading_ice_hockey_diagrams.md`, and the header of `rink.mjs` said in terms that *"neither is
the base"*. The hybrid is the defect.

⚠️ **The root cause is worth stating first, because it explains why this survived so long.**
`sources/iihf_coachdev_off_tactics.txt` — the extracted text — **contains none of the glyphs, only their
names.** So every check that had been run against the source could confirm the corpus used the right symbol
*names* while three of the marks it drew meant something else. The page even carried a verification note
saying both keys had been checked.

**Nothing short of rendering the PDF as an image could have caught this**, and `diagram-reviewer` caught it
by rendering **page 32 at 1200 dpi**.

---

## 2 · The axis was inverted, and the corpus argued for the inversion

§21.1's own column headers read **`TEAMS — OFFENSIVE / DEFENSIVE`**. The corpus read that axis as *"your team
versus theirs"*, stated it as **Key Takeaway 2** of the notation document, and defended it: *"the IIHF key is
written for a coach drawing both ends; these diagrams are drawn from your team's point of view."*

**The reasoning was sound and the premise was wrong.** Shape does carry the team, but the teams are identified
by **which way they are going**, not by whose side the reader is on.

**The fix keeps what the departure was protecting.** Shape, fill *and* colour had all encoded own/opposition
three times over, so decoupling costs nothing:

| Channel | Carries |
|---|---|
| **Shape** | circle = the team **in possession**; triangle = the team without the puck — §21.1's axis |
| **Fill + colour** | filled/home = the reader's own team; open/away = the opposition — this corpus's addition |

So a reader still knows which glyph is them, which was the whole reason for the original departure.

**Mechanism:** `rink.mjs` now **throws at build time** if a spec has an opposition player and no
`attacking: 'us' | 'opp'`. Defaulting it would have drawn half the corpus inverted in silence. **98 of 109
specs declare it; all 109 render.** 88 declarations were made by three parallel agents from each diagram's own
caption, each quoting the deciding words; five were spot-checked by hand and `diagram-reviewer` checked more,
including every `special_teams` power play and penalty kill — **no inversion.**

---

## 3 · Three glyphs were wrong. One took five attempts.

| Symbol | Was | Now |
|---|---|---|
| **Backward skating** | a tight **wave** — which is the key's *skate-and-stickhandle*, so an IIHF-trained reader took **every backward route for a puck carrier** | a row of **overlapping flattened arches** |
| **Backward crossover** | did not exist | a **zigzag**, full-length, no arrowhead |
| **Skate and stickhandle** | one hump then a straight line | a wave across the whole route |
| `pressure` | a line ending in **one bar**, which is in **neither** key — it is the Hockey Eastern Ontario checking-pressure mark, and §21.1's SUDDEN STOP is **two** bars | see §4; it is now the two-bar terminal |
| `stop` | labelled *"Stopping"*, the HEO name | **Sudden stop**, its name in the key |
| **Stop** (`//`) | never drawn | implemented |

**Five attempts on backward skating**, and the owner corrected each one:

1. a **wave** — the original defect
2. a **prolate cycloid** (connected coil) — closer, not the mark
3. **sideways C-cuts** `Ɔ Ɔ Ɔ` — right shape, wrong orientation. Owner: *"the c shapes need to be horizontal."*
4. **sparse** arches — three where the key packs four or five
5. **flattened elliptical arches** ✅ — `rx` 1.3× `ry`, overlapping into a scalloped chain

⚠️ **Two dead ends are recorded in `archPath` so nobody repeats them:** true semicircles overlapped by a
quarter put the crossings **high** and give spikes between the humps; pushing the sweep to 232° to make the
legs turn under gives **near-closed rings**. The mark needs an **ellipse** — the key's humps are wider than
they are tall.

**Three further defects were fixed by measuring rather than eyeballing:** the amplitude taper used **fixed
distances**, so on a short route — including the legend's own sample, the picture that *defines* the notation
— the pattern survived only in the first third; **neither backward mark carries an arrowhead in §21.1** and
both of mine did; and the stroke was too heavy for the arch radius, closing the overlaps into a blob.

---

## 4 · A safety defect I introduced, and the test that now governs departures

`pressure` was `{ line: 'plain', end: 'bar1' }` — **a line ending in one perpendicular bar, which is exactly
§21.1's SUDDEN STOP.** The corpus meant *"checking pressure"* and used it **twelve times, none with a label**,
so the glyph was the only signal.

I retargeted it to **forward skating**. ⚠️ **That created a safety defect**, and `diagram-reviewer` found it
with the repository's own rule quoted twenty lines above a violating route:

> *"if the tip finishes within 9 ft of the opponent — 2.9 glyph + 3.15 arrowhead + 2.9 glyph — the route may
> not carry an arrowhead at all. **A bar says arrive and contain; an arrowhead says keep going through.**"*

**Nine of the twelve routes then finished within 9 ft of an opposing skater carrying an arrowhead**, five
within 2 ft, one aimed at an opponent's exact centre. The retired glyph had been doing load-bearing safety
work that *"checking pressure"* was only the surface name of: **it was the corpus's only terminating mark.**

**I rejected the body-check hook deliberately and that judgement was upheld** — pressure and angling are legal
in every division, a body check is not, and eleven of the twelve uses are penalty-kill or forecheck routes a
non-check reader also has to read. `pressure` now terminates in **two bars**, which is a mark the key contains.

### The test this produced

> **A departure from the key is acceptable when it collides with nothing in the key, and a defect when the key
> already uses that mark for something else.**

⚠️ **My own test then caught a second case I had cleared.** `crossovers` — the HEO lateral-crossover glyph,
kept because §21.1 has no equivalent — had a bar count of `max(2, …)`, and **both** corpus uses are short
enough to render **exactly two bars**, which is sudden stop. So the only lateral-crossover pictures in the
corpus were drawing a different key's symbol. Minimum raised to four; the glyph now passes the test.

---

## 5 · Labels

§21.1 numbers players 1–6 by position. **The corpus does not use that, and the reason is sound and
pre-existing:** its own most emphatic section says *"F1, F2 and F3 are roles set by order of arrival and not
people"*, so a numeral would author a position assignment the prose refuses to make. The glyph carries the
section's own label instead. The owner independently reached the same conclusion, calling §21.1's numbering
*"confusing and counter to what every coach I've ever known does"*.

**Settled with the owner:** `G`, `F1 F2 F3`, `D1 D2`, `C` coach, `A` assistant, empty for a new player.
Bare digits were rejected because shape now carries the team, so a bare `2` would be ambiguous between F2 and
D2 — and **105 glyphs already used the `F1`/`D1` form.**

### ⚠️ Open, and it is the owner's call

`C` = **coach** and `A` = **assistant** in the key. The corpus uses `C` for **centre** (36 glyphs) and
`A1`/`A2` for **attackers** (11). **But `pos: 'coach'` and `pos: 'assistant'` appear ZERO times in all 109
diagrams** — these are play diagrams, and §21.1 carries C and A because it is a *drill* key. So the collision
is **theoretical today**, and relabelling 36 centres would break the documented rule that a glyph carries its
section's vocabulary — the same rule that makes the numbering deviation right.

**Recommendation:** keep the section's vocabulary in play diagrams and reserve `C`/`A` for a drill diagram if
one is ever added. **Cheap now, expensive after new diagrams are drawn.**

---

## 6 · The documents that had to change with the code

`reading_ice_hockey_diagrams.md` **is** the definition, so a doc that disagrees with the renderer is a second
place for the notation to be wrong. Rewritten at every site that asserted the old axis — Overview, the main
explanation, the departure note that flatly contradicted the new rule, and Key Takeaway 1 — plus KT3 for the
new glyphs and the two bullets on `pressure` and `crossovers`.

⚠️ **Three defects were introduced into that document while fixing it, and all three were caught:**

- I changed a **correct** sentence (*"the IIHF key has no such symbol — one bar is half of a sudden stop"*)
  into a **false** one (*"in the IIHF key it is a sudden stop"*). Restored.
- *"Five of the eight line symbols agree in both keys"* listed **backward skating** among them — which cannot
  be true alongside the reason the glyph was changed. Corrected in the document and in `rink.mjs`.
- The documented faceoff carve-out was **false** (`faceoff-dzone-clean-loss` does the opposite by design), and
  the renderer's real extra rule — **any diagram with no opposition draws everyone as circles** — was
  undocumented. Both now stated.

**Four stale comments in `rink.mjs` still asserted the own/opposition axis**, one at the top of the notation
block. A future editor acting on any would flip every player's shape. All corrected, and the header now
records that **the block has been wrong twice in opposite directions** and says to read the PDF, not any
third-hand description.

**`sources/`:** the IIHF paper was cited by URL only. Fetched, extracted, registered in `sources/README.md`
and `scripts/fetch_sources.sh`, and correctly **gitignored for copyright** as that README requires.

---

## 7 · Dimensions

| | Dimension | Status |
|---|---|---|
| **D1** rules accuracy | n/a — no rules claim changed |
| **D4** citation integrity | ✅ the IIHF key is now on disk with its URL and sha256 registered; the HEO sheet remains cited but not on disk |
| **D5** provenance | ✅ the two keys are distinguished at every site; the HEO departure is labelled as such |
| **D7** cardinal rule | ✅ the `Convention:` hedges in diagram captions untouched |
| **D11** reader safety | ⚠️ **one defect introduced and fixed** — the `pressure` arrowheads (§4). `safety-reviewer` has **not** seen this workstream |
| **D12** read-aloud | ⚠️ captions are spoken verbatim; the notation key's caption and `describe` were rewritten. **Not heard** |
| **D14** structure | ✅ `check_links.py` clean; the legend's row collision fixed |
| **D15** rendered site | ✅ built and rendered repeatedly; the legend and two real diagrams eyeballed at 2.4–3× |

**Declared out of scope:** D2, D3, D6, D8, D9, D10, D13 — this workstream changes no rule claim, no number,
no summary layer and no facts block.

---

## 8 · What this round could not have found

- **`safety-reviewer` has never seen it.** The `pressure` defect was found by `diagram-reviewer` reading a rule
  the codebase states about itself. A safety defect in a *diagram's positions* — a player drawn where nobody
  would stand — is a different dimension and was not audited.
- **Nobody has heard a caption.** They are emitted verbatim into the speech text.
- **62 of the 109 diagrams were audited but not viewed as pictures.** `diagram-reviewer` measured every
  `attacking` declaration and every route's arrival geometry, and viewed eight. **Measurement is exactly what
  did not catch the defects this project keeps finding.**
- **The HEO sheet is not on disk** — only its sha256 and this repository's transcription. Every *"the two keys
  diverge here"* claim rests on that transcription.
- **Whether the glyphs teach.** The IIHF-trained misread is gone. Whether a reader who has never seen either
  key extracts *"backwards"* from a row of arches faster than from a wave needs a reader who does not already
  know the answer.

---

## 9 · Three more glyph defects, found after this record was first written

The owner reported the body check and the skate-and-stickhandle arrowhead as still wrong — the
**second** report on each. Both had already been "fixed" once. This time the marks were **traced off
the rendered page** rather than judged by eye, by rendering page 32 at 1200 dpi to greyscale and
reading the centreline out column by column:

```
pdftoppm -f 32 -l 32 -r 1200 -gray -x 2500 -y 10580 -W 1300 -H 660 \
         sources/iihf_coachdev_off_tactics.pdf out
```

### 9.1 · BODY CHECK is not the mirror of BLOCKING, and this file's own header said it was

The header of `rink.mjs` read:

> *"(B) gives BLOCKING (SCREENING) = line ending in `(` and BODY CHECK = line ending in `)`."*

⚠️ **That sentence is false, and the renderer drew the mirror on the strength of it for two
revisions.** Measured centrelines:

| Mark | On the page |
|---|---|
| **BLOCKING** | **one** arc, `(`. Belly on the line's end; both tips ~41 px forward of it over a 167 px height |
| **BODY CHECK** | an **S**. Upper lobe bulges forward and its tip flicks back; lower lobe mirrors it. The lobes meet **exactly** on the line's end, and the mark has 180° rotational symmetry about that point |

So the screen is one arc and the check is two opposed ones. **One arc and two arcs, not left and
right.** Guessing symmetry is how three of the four earlier attempts at this glyph went wrong — a
smooth curve, a chevron, a brace, and then the mirror.

**The header sentence has been corrected in place with the measurement and a note that it was
wrong**, because it is the sentence a future editor will act on. That is the same failure mode §6
recorded for four stale axis comments: a description of the key is a second place for the key to be
wrong, and this one was load-bearing.

### 9.2 · The arrowhead was not at the end of the line, and both earlier fixes changed the wrong number

Reported twice. The first repair lengthened the straight run before the head; the second shrank the
head. **Neither addressed it**, because the defect was not the head's size or position:

- the wave was drawn to `L` **and** the tip was placed at `L`
- the wave carries `stroke-linecap="round"`, so its cap protrudes ~1 px **past** the tip

The straight rows never showed this because they use the `ahL` marker, whose `refX` of 8 in 10 puts
the tip **1.5 px beyond** the path end — the line ends underneath the head. The hand-drawn head on
the one curved row did not copy that offset.

On the page the head does not sit on the line at all — it **replaces** its last eighth. SKATE AND
STICKHANDLE runs x=178..1053; the head's base is at **x=926**, its tip at **x=1053**, and the wave's
last dark pixel is **x=925**. So the route now stops at the head's base, and the head's geometry is
taken from `ahL` so every row in the key terminates at the same x.

**And the first repair had made things worse in a way nobody would have noticed:** it pushed the
flat trailing run to 30% of the route, where the page has **no straight run whatever** between the
last crest and the head. Now 12%.

### 9.3 · The diagram renderer drew BLOCKING backwards from its own legend

`endCurve` put the tips on the line's end and the belly forward — `)` where the key and this file's
own legend draw `(`. `endHook` drew a single hook. **Both are rewritten in the route-local frame** so
they read the same whichever way a route runs.

**No diagram uses either glyph** — `blocking` appears twice in `site/src/diagrams/*.mjs` and both are
prose comments, `bodycheck` not at all. So this was dead code, which is *why* it drifted: nothing
rendered it, so nothing contradicted it. It is fixed now rather than when a diagram first needs it.

### 9.4 · One labelled exaggeration

The page's S bulges **21 px peak-to-peak on a 13.5 px stroke** — about 1.5 stroke widths — because
its mark is **12×** as tall as it is thick. At the legend's scale the mark is only **7.6×** as tall
as it is thick, and a faithful 1.5-stroke bulge on that aspect renders as a straight vertical bar,
**which is `suddenstop`**. The lobes are opened to ~3 stroke widths: the minimum that still reads as
two opposed curves.

That is a **departure**, recorded here and in the code, and it is here because the faithful version
**fails the collision test §4 set** — it collides with another mark in the same key.

### 9.5 · What §9 could not have found

- **The measurements are mine and were taken once.** They are reproducible from the command above,
  and `diagram-reviewer` has been asked to re-derive them independently rather than check my
  arithmetic.
- **The stroke-cap defect existed for as long as the hand-drawn head did** and every check ever run
  on this glyph passed, including two rounds of looking at it. It was found by measuring the source
  in pixels, which is the only method that has ever caught anything in this file.
- **Nothing here was viewed at 1× on a phone.** The marks were judged at 3.4× and on the built page
  at 2×. A 2 px lobe is not the same claim at 375 px wide.

---

## 10 · `diagram-reviewer` on §9 — the four changes hold, and six defects around them

**Every measurement in §9 was independently re-derived from page 32 and reproduced**, including from a
crop 50 px offset from mine. The body-check S's 180° rotational symmetry was confirmed by prediction
(rotating the upper bulge about the junction predicts (952.5, 495); measured (952.5, 499)), and
`endCurve`'s corrected proportion came out at **0.500 against the page's 0.491**. The flat-mode
taper's legend-only scope was verified in the code rather than taken from my word: `flat` is passed
`true` at exactly one call site, inside `legendSvg`. **No arrowhead tip in any diagram moved.**

### 10.1 · ⚠️ CRITICAL — the notation document described a glyph the renderer does not draw

`reading_ice_hockey_diagrams.md` told the reader that *"a route to pressure an opponent is now just
**forward skating**"*. **It has not been forward skating since §4** — that retarget was reverted
precisely because it put arrowheads on nine of twelve routes finishing within 9 ft of an opponent.
The renderer draws `end: 'bars2'`.

So the document told the reader to read twelve pressure routes with the mark this corpus reserves for
**"keep going through him"**, while the picture printed inside the same document drew the mark that
means **"arrive and contain"** — and the `notation-key` caption stated the correct meaning. **The
document contradicted its own illustration on the one symbol whose whole purpose is a safety
distinction.**

`rink.mjs` carried the same stale claim **eight lines below the correct note**. Both fixed, and the
document now discloses plainly that pressure and sudden stop share one mark and are told apart by
where the route ends.

### 10.2 · MAJOR — the backward-skating fix had been applied to the legend only

§3 records *"the stroke was too heavy for the arch radius, closing the overlaps into a blob"* as
fixed. **It was fixed in `legendSvg` and nowhere else.** Stroke weight against arch height:

| | ratio |
|---|---|
| page 32 | 14 px / 77 px = **0.18** |
| legend | 1.45 / 5.2 = **0.28** |
| **diagrams** | 0.70 / 1.0 = **0.70** |

At four times the page's weight a 1 ft arch has a 0.3 ft opening and closes, so **the key showed open
scallops and all eleven diagram routes drew a chain of near-closed rings.** At 360 px the smooth wave
and the arch chain were separable only by close inspection — which is the exact failure the glyph was
rewritten to prevent. The `dip` was gated on `flat` too, so legend arches sat below the line and
diagram arches on it: **one function drawing one symbol two ways.**

Fixed with a single shared ratio, `ARCH_WEIGHT`, because the legend and a diagram render at different
scales and so cannot share an absolute width — only a proportion. The legend's rendered stroke moves
from a hand-tuned 1.45 px to a derived 1.35 px, so **the key the owner approved is unchanged to the
eye and is now the same number as the diagrams.**

### 10.3 · MAJOR — two player labels collided with §21.1, in the axis this workstream protects

- **`pp-spread-5on3` drew five own players as circles containing `1`–`5`.** §21.1's first block reads
  circle-1 GOALTENDER, circle-2 RIGHT DEFENSE, circle-3 LEFT DEFENSE, circle-4 RIGHT WING, circle-5
  CENTRE. §5 of this record says bare digits *"were rejected"*; they were in the corpus. The same
  picture also carries **pass-order badges** that are numerals, so one diagram ran two numbering
  systems and one of them was the key's. And it contradicted its own caption — *"what is fixed is the
  spacing, not who plays which spot"*. Relabelled `A1`–`A5`.
- **A bare `A` in a circle is §21.1's ASSISTANT**, and five glyphs across four diagrams used it. §5
  counted `A1`/`A2` at eleven and did not surface these. Relabelled.

⚠️ **§5's inventory was a third of what is in use** — it recorded 36 `C` and 11 `A1`/`A2` against
**37 distinct player identifiers** actually in the specs. The `C`-for-centre question remains the
owner's open call; the numeral and bare-`A` collisions did not need one, because no reading of the
key makes them right.

### 10.4 · MAJOR — three legend rows the diagram renderer could not draw, failing silently

`stopmark`, `pivot` and `droppuck` are defined in the legend and **not implemented in `playSvg`**:
`line: 'none'` and `line: 'pivot'` fall through to the plain quadratic, `end: 'slashes'` has no case,
and `dropTick` is honoured only inside `legendSvg`. **A diagram using any of the three drew a line
with an arrowhead — forward skating, which in this notation means "keep going through".**

The file already throws at build time on a missing `attacking`. It now throws here too, and the
throw is proved to fire. **All 109 diagrams still render, so nothing in the corpus was using them.**

### 10.5 · MAJOR — a fifth stale own/opposition comment, and an orphan

The player-glyph block still read **"Shape carries TEAM, not position"** followed by
*"circle — the reader's own team / triangle — the opposition"*, twenty-one lines above the correct
mapping. §6 of this record says four such comments were found and *"all corrected"*. **This is the
fifth**, and it is the one a future editor reads first; acting on it flips every glyph in the corpus.
A related comment began mid-quotation with no antecedent — a sentence that survived an earlier
rewrite with its opening clause deleted. Both repaired.

### 10.6 · The labelled departure survived, but its stated reason did not

§9.4 justified opening the body-check S's lobes on the ground that a faithful bulge *"renders as a
straight vertical bar, which is `suddenstop`"*. **Sudden stop is TWO bars** — this record says so in
§4, and the code says so correctly. A single near-vertical mark at a line end is the **Hockey Eastern
Ontario checking-pressure glyph**, which is in neither key this corpus follows.

So by this file's own test the faithful mark **collides with nothing and passes.** The exaggeration is
still right, but for a different reason: at the legend's aspect a 1.5-stroke bulge is a deviation
**narrower than the pen**, and thinning the stroke cannot help because the bulge is defined as a
multiple of it. **The note now says legibility, which is true, instead of collision, which was not.**

⚠️ And §3's own table carried the inversion in the other direction — *"`pressure` was a line ending
in one bar, which is exactly §21.1's SUDDEN STOP"*. Corrected above. **Two sections of this record
could not both have been right, and neither was checked against the other.**

### 10.7 · Also fixed

- Three pre-draw faceoff diagrams (`faceoff-ozone-alignment`, `faceoff-neutral-zone`,
  `faceoff-goalie-pulled`) relied on the circles-mean-your-team convention with no local caveat,
  while the adjacent `faceoff-dzone-clean-loss` inverts it. Two others already carried it; these
  three now do.
- A caption asserting *"the shapes name positions"* — the retired axis, surviving in the channel the
  speech pipeline reads verbatim. §6 swept the code comments and not the captions.
- *"A run of row of overlapping flattened arches"* — a duplicated word in Key Takeaway 3 of the
  document that defines the notation, spoken verbatim.
- *"the IIHF key draws it as a row of separate C-cuts"* in the same document: the C-cut description
  was superseded by the flattened-arch finding and left behind.

### 10.8 · Open, and not closed by §10

- **Five of twelve `pressure` routes are shorter than 2.3× the mark that terminates them** — 4.7 ft
  to 9.1 ft carrying a 4 ft bar plus a second bar 1.4 ft back — so the glyph renders as a blob, and
  `forecheck-131`'s is half-hidden behind a player. The count is right in the source and unreadable
  in the picture. **Not fixed: it needs a route-length or a mark-size decision, not a bug fix.**
- **Six bar-ended arrivals now sit at 5.0–6.1 ft, four of them aimed within 2° of an opponent's
  centre**, where §4 recorded the two accepted arrivals at ~7 ft. Three carry the arriving-player
  obligation in their captions; **`faceoff-dzone-clean-loss`'s two do not.** `safety-reviewer` has
  still never seen this workstream.
- **The arrival rule as stated in the code carries no aim-point exemption**, and six correct pictures
  trip it — routes finishing near a goaltender with the net as the aim point, and routes whose
  terminal tangent points away. A future reader of that comment will "fix" them.
- **The `notation-key` caption names eight of thirteen rows.** The caption is all a listener gets.
- **71 of 109 diagrams have still not been viewed as pictures.** The reviewer viewed 36 and audited
  all 109 numerically; round 34 reported 62 unviewed and the number is now 71 by that reviewer's own
  count. **Measurement is what failed to catch every defect in §§9–10.**
- **Nothing has been heard, and nothing was checked in dark theme.** The legend paints its own white
  background; the diagrams do not.

---

## 11 · A viewing pass — and a defect I nearly authored by measuring

§10.8 left *"71 of 109 diagrams have still not been viewed as pictures"* open. This section is a
partial close: **28 diagrams viewed as pictures** by the author, at 1.6–1.8× — the two foundation
sheets, the hockey-IQ and puck-support sets, and the seven arch-bearing rush and defending diagrams.
It does not close the item. It also does not double the reviewer's 36, because the overlap between
the two sets was not tracked.

⚠️ **First, the contact sheets I built before this were blank and I did not notice**, because
`diagrams.json`'s `svg` field is a **path**, not markup — `/diagrams/<id>.svg`. Ten sheets were
generated from it and none was ever opened. A verification artefact nobody looks at is worse than
none, because its existence is mistaken for coverage.

### 11.1 · The finding I withdrew

A sweep of all 109 found **nine diagrams drawing the puck 2.1–2.8 ft from a player glyph's centre,
inside its 2.9 ft radius.** From the geometry that is a dark 1.1 ft disc laid over white lettering,
and I had it written up as a legibility defect across nine pictures.

**Then I rendered three of them at 1.8× and it is not a defect.** The puck reads as the puck at the
carrier's feet, which is exactly what it means, and every label stays legible — the deepest case,
`support-distance-range`'s `C`, is unambiguous. **The measurement was right and the conclusion was
wrong**, and had I acted on it I would have moved the puck away from the stick in nine correct
diagrams to satisfy a number.

*Measurement is what failed to catch every defect in §§9–10. This is the same lesson from the other
side: it also invents defects that are not there.* An earlier finding in §10's report — that
`support-distance-range`'s glyph "renders black" — came from reading a 12-up contact sheet rather
than the picture, and is likewise withdrawn.

### 11.2 · What the pass actually found

- **35 of 109 diagrams render at 4.5–5.5 px per foot against the 73 that render at 9.0.** Nineteen
  are at exactly **half scale**, including all ten breakout diagrams and all six rush diagrams. The
  cause is that label font sizes are constants **in rink feet** — 2.6, 3, 3.2 — with **no
  compensation for `half`**, so a full-rink picture showing twice the ice in the same column renders
  its text at half the size. `support-angles` and `pk-nz-1-1-2` are the worst cases and the reviewer
  had flagged the second as a one-off; it is systemic.
  **Not fixed.** It is a restyle of 36 pictures whose label placer works in feet, so enlarging text
  risks collisions that only a per-diagram look would catch. It needs a decision, not a patch.
- **`defensive-zone-support`** — `D1` sits on the crease and goal-line strokes and partly behind the
  `G` glyph; both labels are degraded. The one genuine glyph-collision case found by looking.
- **`rink-map-full`** crowds 16+ position labels into its right end zone at a third the linear scale
  of `rink-map-end-zone`, which teaches the same vocabulary legibly. Duplicated effort where the
  crowded copy adds nothing.

### 11.3 · What §11 confirmed rather than found

The shape/fill axis reads correctly in every picture viewed, including the cases most likely to be
wrong: **our own goaltender drawn as a filled circle** where our team has possession
(`offside-faceoff-location`), **no-opposition diagrams drawing everyone as circles**
(`the-point-and-the-half-wall`), and **the opposition as circles where they carry**
(`stick-in-lane-body-net-side`, `layer-not-converge`). The relabelled glyphs render as intended.
Backward skating and skate-and-stickhandle are now distinguishable at diagram scale.

### 11.4 · Still open

- **81 diagrams have not been viewed by the author**, and the reviewer's 36 overlap this set by an
  untracked amount. The honest figure is *"most of the corpus has been looked at by somebody once"*.
- Everything in §10.8 stands: the short `pressure` routes, the six close bar-ended arrivals,
  the aim-point exemption missing from the code comment, the `notation-key` caption naming eight
  rows of thirteen, dark theme, and audio.

---

## 12 · The axis was reverted. §2 of this record was wrong, and the owner was right.

⚠️ **§2 of this record — "The axis was inverted, and the corpus argued for the inversion" — is itself
the inversion.** The owner queried it on the symptom: *"it still seems odd that forwards are shown as
triangles when they are doing defensive"*, and asked for the norm to be checked. It was, and the
corpus's own cited source settles it against §2.

### 12.1 · The sheet the corpus had been citing for rounds without holding

`sources/heo_intl_drill_symbols.pdf` — **"International Drill Symbols"**, the Hockey Eastern Ontario
NCCP Development 1 handout. Fetched, **sha256 and byte length match the figure the corpus already
recorded** (`d0cfeca1…`, 309,926 bytes), so it is the document the Sources note names. It reads:

```
©      Coach
G      Goaltender
● ○    Forward / Player
▲ △    Defender / Player
○ △    Player position at the end of the repetition   (dotted)
X      Pylon
```

**Shape is the POSITION. The filled/open pair in each row is the TEAM.** Exactly what the owner
described, on a sheet that calls itself *International*.

⚠️ **The `.txt` extraction is 30 bytes — the title and nothing else.** The sheet is a scan; every
glyph and every label is image-only. **This is the second key in this workstream that defeats text
extraction**, and it is the same trap §1 recorded for the IIHF PDF. Registered in `sources/README.md`
with that warning attached, and in `scripts/fetch_sources.sh`.

### 12.2 · What the survey actually found

| Key | Player axis |
|---|---|
| **HEO *International Drill Symbols*** (this corpus's cited source) | **shape = position**, fill = team |
| **IIHF §21.1** | **shape = team** (OFFENSIVE / DEFENSIVE columns), position = the numeral inside, 1 goaltender … 6 left wing |
| **Weiss Tech Hockey, *Key to Diagrams*** | both teams circles; **fill = team**; position not encoded |
| **USA Hockey 12U Practice Plan Manual, p.2 *Legend*** | **no player symbols at all** — line marks only |

**There is no single norm.** But of the four, only §21.1 puts the team in the shape, and three carry
the team in fill or colour. **My reading of §21.1 was correct and I generalised it to "the standard"
from one key**, against the key the corpus actually cites, which I had never read because it was not
on disk — §8 of this record listed that gap and the gap is what the error rode in on.

*(Two incidental findings: USA Hockey's legend draws forward-skating-with-puck as a **dashed** line,
which is *passing* in both other keys; and its `Stop` is a free-standing `//` with no line. A fifth
set of meanings for marks this corpus draws.)*

### 12.3 · The defect that exposed it

Under shape-carries-possession, **a player's shape changed between diagrams** — a winger was a circle
on the breakout and a triangle on the forecheck. The owner met that as *"odd"* and it is worse than
odd: it teaches that a shape is a situation, in a corpus whose diagrams are read one at a time.
**Shape now follows the player, not the moment.**

### 12.4 · What changed

- **Shape from `pos`**: `F` → circle, `D` → triangle, `G` → **a bare letter with no enclosing shape**
  (both keys draw it that way, and any shape collides — a circle says forward, a triangle says
  defenceman). A first attempt outlined the letter to encode the team and blobbed at render size;
  the letter is now plain, because which net a goaltender stands in settles whose they are.
- **Fill from team, monochrome**: **own team open, opposition solid**. The key prints both variants
  of every row and does not say which team is the reader's, so the assignment is this corpus's and is
  labelled as such. Colour is gone from the player glyphs entirely — the encoding now survives
  greyscale print, photocopying and red-green colour blindness, which no colour scheme does.
- **`spec.attacking` is retired and all 98 declarations deleted.** It existed only to choose circle
  versus triangle. Leaving 98 inert declarations would have been a fourth class of stale metadata in
  a file whose header warns about exactly that. The build-time throw that required it is gone too.
- **`pos` is live again.** The header had documented it as *"inert except for `pylon`"* and told
  editors that comments justifying a `pos: 'D'` as "a triangle, because he's a D" were stale. That
  instruction is now itself reversed: `pos` decides the shape.
- Header, legend, the `notation-key` caption and `describe`, and
  `reading_ice_hockey_diagrams.md` — Overview, the players section, the departures list and Key
  Takeaway 1 — all rewritten. The departures list is three, not four: two of the old four described
  possession-shape edge cases that no longer exist.

### 12.5 · What §12 could not have found, and one warning

- **The IIHF divergence is now sharper, not softer.** These diagrams use §21.1 for the *line*
  symbols and the HEO sheet for the *player* symbols. A reader who meets a real IIHF diagram will
  read its triangles as defencemen and be wrong. That is stated in the document body and in Key
  Takeaway 1, and it is the largest single risk the notation carries.
- **Only four of 109 diagrams have been viewed since the change.** The axis is correct in those four;
  the other 105 are unviewed under the new scheme, and `check_geometry.py` cannot see a shape.
- **Nothing has been heard**, and the `describe` text — the whole of what a screen-reader user gets —
  was rewritten without being read aloud.
- **Contrast has not been measured.** Solid ink glyphs with white lettering sit on a white rink with
  red and blue markings; the opposition glyph is now the darkest object in the picture, which was not
  true before.

---

## 13 · Priority 1 closed — the legibility items, and a build that lied

### 13.1 · Full-sheet type now compensates for the scale it renders at

35 of 109 diagrams render at **4.5–5.5 px per foot against the 73 at 9.0**, because a full rink holds
twice the ice in the same column. `global.css` already refuses to shrink the geometry to fit and is
right to — a glyph's 2.9 ft radius is a real dimension, quoted by the arrival rule that decides
whether a route may carry an arrowhead.

**But a label's font size asserts nothing about the ice.** So the type scales and the geometry does
not: `TXT = 1.7` on full-sheet diagrams, applied to floating labels, zone labels and route badges.
Player letters are deliberately excluded — they sit inside a glyph and would overflow it. Full-sheet
labels go from 2.8 ft to 4.76, zone labels from 3.2 to 5.44.

### 13.2 · Two defects the change surfaced

- **A temporal dead zone.** `TXT` was declared after two of its four uses, so any full-sheet diagram
  with a **zone label** threw `Cannot access 'TXT' before initialization`. Declaration lifted to the
  top of `playSvg`.
- ⚠️ **And I read a build's exit code off the wrong command.** The rebuild ran as
  `node build-diagrams.mjs >/dev/null 2>&1; echo "rebuild exit=$?"` — and I then `tail`ed a
  *different* line of the output and took "exit=0" from the shell rather than from the build. For a
  stretch I believed a build was succeeding while it was throwing, and "verified" scaled output
  against **stale SVGs on disk**: `breakout-wheel.svg` still read `font-size="2.8"` while the
  renderer produced `4.76`. This is the project's own recorded trap — *"piping through `tail`
  returns tail's exit code"* — in a new costume. Builds are now run with the log written to a file
  and the exit code echoed from the build itself.

### 13.3 · Zone labels were never in the placer's reserve list

Zone labels are drawn at their polygon centroid, independently of `placeLabels`, so the placer never
knew they were there. At 3.2 ft they rarely clashed; at 5.44 ft *"owns the pass"* landed on top of
*"the passing lane"* in `rush-2-on-1`. Their boxes are now collected and reserved. **This was a
latent defect the scaling exposed rather than caused.**

### 13.4 · Terminal bars scale to the route they end

Five of twelve `pressure` routes are under 9 ft and carried a fixed 4 ft bar pair — nearly as wide as
the route was long. **Lengthening the routes was not an option**: it would carry the arrival closer
to an opponent, which is exactly what the 9 ft rule forbids. So the glyph gives way and the geometry
does not — `barHalf` clamps to `len × 0.30` between 1.2 and 2.0 ft, with the second bar's setback
scaled likewise so the pair cannot merge.

### 13.5 · Verified

`501` skater glyphs across `109` diagrams: circle count equals forwards, triangle count equals
defence, open equals own team, solid equals opposition — in **every** diagram. All four checkers
clean. Eight diagrams viewed as pictures after the change.

### 13.6 · Left open, deliberately

- **`defensive-zone-support`**: `D1` sits on the crease and goal-line strokes, partly behind the `G`.
  A position change, not a notation fix — it belongs to whoever owns that section's geometry.
- **`rink-map-full`** crowds 16+ labels into its right end zone at a third the linear scale of
  `rink-map-end-zone`, which teaches the same vocabulary legibly. The question is whether the
  crowded copy earns its place at all.
- **101 of 109 diagrams still have not been viewed** under the finished notation.

---

## 14 · `diagram-reviewer` on the first priority-2 diagrams — and a landmine in its own brief

Three new diagrams (`winger-dz-rim`, `winger-dz-reverse`, `off-wing-open-to-the-ice`) and four
quoted placements. **The reviewer independently re-rendered `sources/heo_intl_drill_symbols.pdf`
rather than trusting the brief it was given** — which is the only reason this review is not itself a
defect, because the brief was wrong.

### 14.1 · ⚠️ CRITICAL, and it is not in a diagram

**`.claude/agents/diagram-reviewer.md` still instructed the reverted axis.** Its bullet read *"Shape
carries the team on an offensive/defensive axis — a circle is the team in possession… Shape is not
'our team versus theirs' and it is not position."* That is §2's inversion. §12 reverted the code, the
data and the documents **and did not reach the agent that polices them.**

A reviewer following it would have flagged **every correct diagram in the corpus** and "fixed" 501
glyphs back into the inversion — and the file's own escalating warnings about how often this bullet
has been wrong would have made the flip look authoritative. Rewritten, with the failure recorded in
the bullet itself and an instruction to render the one-page source rather than trust any prose
description, this one included.

### 14.2 · The root cause it came from

`rink.mjs` still carried, twenty lines below the corrected axis block: *"Before you edit a spec:
`pos` is **inert** except for `'pylon'`. Shape follows possession, never position and never team.
Comments justifying a `pos: 'D'` as 'a triangle, because he's a D' are stale."*

**Every clause of that is now false, and it is the paragraph an editor reads last** — after meeting
the correct one first, which is exactly the order that makes a stale instruction win. Corrected.

The same reasoning was baked into the **data**: `rink.json`'s `half-wall.$comment` justified the
coordinate with *"the opposition glyph is 3.6 ft from centre to apex"*. That is now true of
**defencemen only** — a forward's circle carries 3.275 ft and clears the dasher from the half-wall's
own y. Corrected; `check_geometry.py` still passes its 58 assertions.

### 14.3 · The bow sign — a picture that drew the opposite of its own comment

`bow` offsets the control point along `(-dy/len, dx/len)`. On a route with `dy = 0` heading `-x`,
that perpendicular points at the **middle of the ice**, so `bow: 6` sagged the rim **3 ft off the
wall**. The emitted path was `M 69 -38.5 Q 50 -32.5 31 -38.5`.

⚠️ **The source comment said "bowed into the boards so the rim hugs the wall", and the `describe` —
the only spatial text a screen-reader user gets — said "bowed hard into the wall so it hugs it".
Both were false of the drawing, and I wrote both.** A rim that leaves the wall is a pass through your
own zone, which is the one thing the owning section tells you not to do. `bow: -6`; control point now
at y = −42 against boards at 42.5.

### 14.4 · The puck was inside the glyph in all three, and my arithmetic said otherwise

A circle carries 3.275 ft of ink and the puck 1.1, so 4.375 ft is the least separation that leaves
any white. The three diagrams had **3.1, 3.1 and 2.5 ft** — the last drawing the puck entirely inside
the player.

⚠️ **The comment claimed "2.5 ft out from his centre leaves 0.775 ft of white… and still sits 1.5 ft
inside the dasher". The separation was 3.1 ft, not 2.5; there was no white; and it was 1.3 ft inside
the dasher, not 1.5. Every figure in the sentence was wrong**, and wrong in the direction that made
the picture sound better than it was. All three now at 4.50 ft, measured off the emitted SVG.

**Which side of the body the puck is on is the single spatial fact those three diagrams exist to
assert.** It was not legible in any of them.

### 14.5 · Five geometry comments reasoning about triangles for players drawn as circles

The largest group. Every one reasoned from the opposition-is-a-triangle model — *"his apex reaches
33.4"*, *"this centroid is at x = 60"*, *"an opposition triangle carries 4.4 ft of ink"* — for players
declared `pos: 'F'`, which the reverted renderer draws as **circles**. One comment justified a
player's position with a constraint that does not exist, and that position is what broke §14.6.
Another stated a 12.6 ft distance that is 14.21, for a player it called a circle and the renderer
draws as a triangle.

**In every case the number was computed from a formula rather than read off the output**, and two used
the anchor node's `y` where the player's own offset applied. All rewritten.

### 14.6 · The diagram did not draw the thing it exists to draw

`off-wing-open-to-the-ice`'s claim is *"get a step or two off the boards — that separation is what
leaves you able to…"*. The winger stood 6.5 ft from the dasher and **the forechecker stood 6.0 ft —
half a foot closer to the boards than the player the picture says is off them.** `describe` called
him "tight to the boards". He was not. The forechecker is a circle and clears the dasher from the
half-wall's own y, so he is now hard against the wall and the winger a clear 4 ft inside him.

### 14.7 · Also fixed

- **A puck carrier's route was drawn as a plain line**, which in this notation is *forward skating
  without the puck*. Now `carry`. Lengthened from 13.4 ft to 17.9 ft first, because at `lambda` 5.0
  and with the taper zeroing ~3.7 ft of amplitude, the short route rendered under two humps — and
  `rink.mjs` warns in terms that one hump does not read as a wave.
- **The caption claimed four options and the picture drew three.** The section does list four, so the
  caption was faithful to the prose and unfaithful to the drawing. It now says which three are drawn
  and which is not, and so does `describe`.
- **A quoted caption's referent did not exist in the host.** `unmarked-but-unavailable` says "the most
  common failure of **the three**", pointing at a numbered list in its owner. Quoted into
  `passing_and_receiving.md`, which has four bullets and no list of three, a listener got a numeral
  bound to nothing — and the caption is the SVG's accessible name, so it travels. Made
  self-contained, which fixes it in the owner too.
- **A gloss named two bullets the picture does not draw.** `support-angles` was introduced as "the
  second and third together"; bullet 2 is timing and bullet 3 is a target blade and a voice, and the
  diagram draws neither. It now claims the spatial half, and says timing is what no still frame holds.
- **"It is the same skill" overstated the angling quote.** The diagram shows a defenceman travelling
  **backward**; §2's four managed things all assume skating forward. Same *principle*, and the
  difference is now named.
- **"Chin off your chest" had been dropped** from the off-wing caption, which kept "head up". The chin
  is the operative correction for the exact mechanism the caption names. Restored.
- **The diagram sat two paragraphs before the prose that sets it up**, so a reader met two
  catastrophic-injury prohibitions before any of the attribution the section gives them. Moved.

### 14.8 · Upheld

Every arrowhead in the three diagrams clears the arrival rule, re-derived from the emitted SVG rather
than from my comments: the closest is the carry route at **21.5 ft** after lengthening (12.8 ft
before), against a 9 ft threshold, with the terminal tangent exactly perpendicular to the bearing to
the forechecker. The safety prohibitions in the off-wing caption were **not** softened.

### 14.9 · Open

- **`bow`'s sign is unverified everywhere else.** Two other routes carry `bow: 6` and were not
  evaluated. Nothing tests that a bowed route stays on the side of its chord the author intended, and
  after §14.3 something should.
- **The stale-triangle reasoning is a pattern, not an incident.** It was checked only in the three
  files reviewed. `grep -n "triangle\|centroid\|apex" site/src/diagrams/*.mjs` corpus-wide is the
  obvious next sweep and has not been run.
- **A circled `C` is indistinguishable from the key's `© Coach`**, at 18 glyphs corpus-wide. Known,
  pre-existing, and not in the notation document's departures list.
- **No build-time assertion exists that two glyphs' ink does not overlap, or that a glyph does not
  cross the dasher.** Either would have caught §§14.4 and 14.5 mechanically.
- `unmarked-but-unavailable` was reviewed from source and **not viewed as a picture**; §11 records a
  finding withdrawn precisely because measurement invented it.
