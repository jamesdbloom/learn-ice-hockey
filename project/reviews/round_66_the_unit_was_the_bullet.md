# Round 66 — the readability tier measured the wrong unit, twice

**Six agents in parallel: two splitting long paragraphs, two subdividing documents, two drawing
diagrams. Every one of them refuted part of its own brief, and between them they redirected the tier.**

⚠️ **EVERY FIGURE HERE IS MEASURED. Where a figure replaces one I got wrong, both are shown**, because
this round's subject is that my measurements were wrong in ways that survived being filed as lessons.

## What shipped, by file

⚠️ **`commit-gate` blocked because this record named four of the ten changed content files and
summarised the rest by count.** *"Being named in `OPEN_ITEMS.md` does not cure this; that file names
every document in the corpus in its censuses."* **The substantive case was `center.md`, which gained
three placements and 3,461 characters of newly voiced caption text without appearing here at all.**

| file | what changed |
|---|---|
| `foundation/rules_primer.md` | 5 paragraph splits |
| `off-the-ice/how_to_watch_hockey.md` | 1 paragraph split |
| `technique/body_contact_and_battles.md` | 3 paragraph splits |
| `positions/goaltender.md` | 1 paragraph split |
| `positions/defender.md` | 1 paragraph split |
| `foundation/on_ice_communication.md` | 5 headings added |
| `positions/switching_positions.md` | 2 headings added — ⚠️ **one of them a new `→` heading, see below** |
| `systems/offensive_zone_play.md` | 3 new diagrams placed, 1 borrowed |
| ⚠️ `positions/center.md` | **1 new diagram, 2 borrowed — 3,461 characters of newly voiced caption** |
| `foundation/rink_map_and_glossary.md` | 3 borrowed placements, **1 rules passage rewritten** |
| `systems/faceoffs.md` | ⚠️ **2 rule citations corrected** — `:266` and `:267` cited 76.4 for wording that is in 76.7(iv), with `:265` beside them correctly 76.4 and untouched |

## What shipped

| | |
|---|---|
| paragraphs split | **11** (5 + 6), all pure line-break moves — spoken text byte-identical |
| headings added | **7** (5 + 2) |
| new diagrams | **4** — `oz-cycle-rim`, `oz-cycle-reverse`, `oz-cross-the-road-yourself`, `centre-nz-deciding-from-the-middle` |
| diagram placements borrowed | **6** |
| defects found in files nobody was assigned | **5** |

---

## ⚠️ The finding that redirected the tier: the oversized unit is the BULLET

**Found by the agent sent to subdivide `switching_positions.md`, which refused the section it was sent
to and showed why.** **1,950 of that section's 3,195 words sit inside a single bullet** — one `-` item
plus four indented continuation paragraphs. **A heading at column 0 terminates a markdown list**, so
subdividing there would orphan the continuations from their parent.

**The same shape recurs everywhere it measured:** `What else is genuinely new` 916 of 1,596 in one
bullet; `Anyone → goaltender` 1,001 of 1,942 in two; `Common Mistakes` 752 of 1,650 in one;
`Key Takeaways` 633 of 1,418 in item 6.

**Censused corpus-wide: 244 bullets of 1,400+ characters. The largest is 15,845** — roughly 2,600 words
in one list item, at `offensive_zone_play.md:467`.

⚠️ **THIS IS WHY BOTH MY METRICS MISSED IT.** R1 counted **lines** — a bullet's continuations are
separate lines, so a 15,845-character bullet reads as several ordinary paragraphs. R3 counted
**sections** — a bullet lives inside one, so the section looks like the problem when the bullet is.
**Two metrics, two dispatches, and neither could see the largest reading unit in the corpus.**

---

## My R3 metric was wrong in every figure, and two agents proved it independently

| I briefed | true | |
|---|---|---|
| `on_ice_communication` 3,348 words/subsection | **962** | |
| corpus median 1,018 | **483–613** | (two agents, two trailer cuts, same conclusion) |
| *"3.3× the norm, worst in the corpus"* | **1.6×, 9th of 36** | |
| `Danger and coverage` 3,193 words | **819** | ⚠️ **its `####` child held 2,391 — the section I sent an agent to subdivide was already subdivided** |
| `switching_positions` Key Takeaways 2,796 | **1,418** | ⚠️ **97% too high** |

⚠️ **AND THE WORST DOCUMENT ON MY OWN METRIC IS `rules_primer.md` (1,286–1,291) — THE ONE MY BRIEF HELD
UP AS THE EXEMPLAR OF GOOD STRUCTURE.** That sentence was produced by the bug it was meant to
illustrate.

**Two bugs.** I counted a child heading's words into its parent; and my Sources-trailer filter was
incomplete.

---

## ⚠️ The Sources trailer has now defeated five measurements, INCLUDING THE FIX FOR ITSELF

`T0-26` filed this after three occurrences and prescribed
`s.startswith("*") and s.count("](http") > 2`.

**Two agents found that filter wrong, independently, in this round.** The trailer's opener is not a
bullet, and entries carry two or fewer links. It hid ~1,277 words in one section and 1,371 in another,
and put **three trailer entries into an R1 brief as paragraphs** — including `skating.md:941` at 11,247
characters, **the largest candidate in that agent's list, and a pure provenance note.**

⚠️ **THE CORRECT TEST IS POSITION, NOT CONTENT: everything after the document's last `---`.** Verified
against all three cases — position catches all three, the content filter catches none.

---

## ⚠️ I inverted a geometry in a brief, and gave it to two agents

I wrote that *"below the hash marks"* is the larger, shallower region **containing** below-the-circles.
**It is the reverse**, and an agent re-derived it from the coordinates before acting.

**From `rink.json`:** goal line x=89; end-zone dot and hash marks x=69 (**20 ft** out); top of circle
x=54 (**35 ft** out). **So below-the-hash-marks is a SUBSET of below-the-circles — 15 ft deeper.**

**What that flips:** `offensive_zone_play.md:226` puts the *"fourth forward"* line at the hash marks
while seven other sites put it at the circles — so the owner is the **more permissive** site, leaving a
15-ft band the others already call a fourth forward. ⚠️ **Had an agent acted on my framing it would
have made the corpus MORE permissive on an odd-man-rush hazard.**

**And it corrected my diagnosis as well as my geometry:** `:218` is not the divergent site — **it
faithfully extracts `:226`, which contains both halves itself.** The defect is inside `:226`.
⚠️ **The corpus's picture of this already exists and is at the circles** — the built
`defender-three-depths` caption.

---

## Defects found in files nobody was assigned

- ⚠️ **A numbered list renumbers itself in audio.** A blockquote or indented continuation inside an item
  ends the list block, and `render_list` numbers from 1 — so `shooting.md`'s snap-shot sequence voices
  **First, Second, Third, Fourth, then "First, Release almost immediately"** for step 5. **Confirmed
  through the renderer.** Also at `zone_entries.md:456`. **Pre-existing, and the reason that agent
  refused to split any numbered item.**
- ⚠️ **`defensive_zone_coverage.md:297`** says the two landmarks *"vary by a few feet"*. **They are 15 ft
  apart** — in the sentence telling a reader to learn their team's version.
- **`rink_map_and_glossary.md:230`** assigned *"restraining lines"* to the centres' marks only; the NHL
  book uses it for the hash marks too and **its own index reads "Hash marks (restraining lines)"**.
  The corpus's faceoff owner already had it the second way, **so two documents disagreed in the one that
  owns rink vocabulary.** Rewritten; with `rules-verifier`.
- **`faceoffs.md:266-267`** attributes the centre's foot-position requirement to 76.4; the wording is in
  **76.7(iv)**. With `rules-verifier`.
- **The `→` in six headings voices as a comma** — *"Anyone, goaltender."* Direction survives only as
  word order.
- **The paragraph census cannot see hard-wrapped paragraphs.** 7 block units reach 1,600+ characters
  while no line does — including 3,839 characters across 42 wrapped lines. ⚠️ **That agent's first
  attempt at this returned 199 and was an artefact; the real figure is 7, and it said so.**

---

## What this round has not done

- **Nothing has been listened to.** 11 splits and 7 headings change the voiced layer, and the numbered-list
  defect above was found by rendering — but no audio has been heard.
- **No diagram drawn this round has been rendered by a reviewer.** One agent rasterised its own in
  isolation; the other verified geometry arithmetically and says plainly that a route bowing through a
  player is invisible to that method.
- ⚠️ **Two agents split paragraphs whose four-book rule comparisons they did not verify.** One says so
  directly: *"I did not verify one rule number, quotation or book scope against primary text — including
  the four-book comparisons at `rules_primer.md:160` and `:687` that I cut in half."*

---

## ⚠️ A defect this round FILED and then ADDED an instance of — AND IT HAPPENED TWICE

**`commit-gate` caught it.** `T0-33` records that the `→` in six headings voices as a comma —
*"Anyone, goaltender."* — and this record described the set as pre-existing.

⚠️ **Five were pre-existing. This round added the sixth.** `### Goaltender → skater` in
`switching_positions.md` is new, and it voices as *"Goaltender, skater."*

⚠️ **Direction is load-bearing at exactly that heading**, more than at the five it joins: the section is
about going **back the other way**, and it sits immediately after `Anyone → goaltender`. A listener
hears two headings that differ only in word order.

**The agent that added it checked the five existing headings and matched them deliberately, which was
the right instinct — consistency with a house pattern.** ⚠️ **But the pattern is the defect, and the
same commit files it.** A round that files a defect should not be quietly adding an instance of it, and
nothing in the dispatch told that agent the pattern was under question.

**Also corrected from the same gate:**

- ⚠️ **`rink_map_and_glossary.md` said *"the toe of the blade"* unqualified.** NHL 76.7(iv) says *"the
  toe of the blade of **his skates**"* — and **four lines later the same rule says *"the toe of the
  blade of **the stick**"***. Unqualified, *"the blade"* defaults to the stick in hockey usage, **which
  would tell a centre the opposite of 76.4's requirement to place the stick in the white area.** One
  word, now fixed.
- `T0-36` said `below the hash marks` returns three hits; it is **four** — three IIHF Situation Handbook
  editions of the same passage plus the drill cone. Corrected.

---

## The two reviewers the gate required, and what they found

### ⚠️ `safety-reviewer`: TWO CRITICALS, both created by this round, both the round-10 shape

**The counterweight was written into the new captions and stopped one layer short of the facts block —
the layer voiced alone with a 300 ms break either side.**

| | |
|---|---|
| ⚠️ **`offensive_zone_play.md` §4** | The block tells a listener a checker is **sealing them against the boards** and to *"cut back up the wall"*, **with no posture at all**. ⚠️ **Seven layers of that document carry the counterweight; the facts block of the section that states the hazard did not.** |
| ⚠️ **`center.md` neutral zone** | A carrier told to take the middle lane **at pace**, with no head-up line — while the same document's Common Mistakes explains exactly why (*"the middle third is where open-ice contact happens"*). |

**Both fixed with a `Never:` line in the corpus's own propagated wording** (152 and 144 chars), and
**both re-read whole after the edit.**

**Three majors, all fixed:**

- ⚠️ **`faceoff-dzone-alignment` made a SUFFICIENCY claim the rule does not support** — *"behind your
  own hash mark and you are legal in all four books."* **NHL and IIHF 76.7(iii): *"Any physical contact
  with an opponent prior to the puck being dropped"* is a violation in its own right**, and the remedy
  falls on your **centre**, thrown out of the dot. ⚠️ **The corpus already knew this at
  `winger.md:672` — so the caption contradicted the corpus in the voiced layer, INSIDE `winger.md`
  itself, where both are read aloud.**
- ⚠️ **`pp-131` placed the reader ON the crease line** — *"on the edge of the blue paint"*. **IIHF Rule
  1.7: *"The marked line belongs to the Goal Crease."*** And `center.md:380`, in the same voiced
  document, says *"off the red crease line, not on it."* **Its `describe` field was already correct;
  only the caption was wrong.**
- **`oz-cross-the-road-yourself`** named the **absence** of defenders and then said nothing about seeing
  them. ⚠️ **Absent from every layer of that section** — body, facts, caption, Common Mistakes, Key
  Takeaways.

⚠️ **The reviewer's own closing point is the one to keep:** it found the `center.md` gap **only because
the new caption told it the counterweight belonged there**, and the `oz-cross-the-road` gap only because
a sibling caption in the same round carried the line it lacked. ***"A round that had written NEITHER
caption would have left both gaps and I would have reported nothing."***

### `site-reviewer`: the pictures are sound; the page they sit on is not

**All four new diagrams rendered, all four viewport × theme cells, all 38 markers on three pages
verified as figures.** The author's flagged risk cleared: **the rim route clears the checker's disc by
2.59 ft**, and in the reverse frame the checker sits **1.30 ft** from where the rim route would have
run — so the pair is internally consistent about why the wrong read is a turnover.

⚠️ **But at 375 px the two full-sheet centre diagrams hide the players their captions are about.** 54%
of the picture is on screen; **both wingers are off it**, while the caption's central claim is that a
winger is a pass away on each side. **No scroll position shows the carrier and both wingers together.**
Filed as `T0-D4` — a design decision, and one that bears directly on the owner's diagram priority:
**adding diagrams does not help if the teaching point lives in the off-screen 46%.**

⚠️ **And the rim/reverse pair is never on one screen** — 970 px figures on a 900 px viewport. **The
checker moves 4.24 ft while the disc drawn for him is 5.8 ft across, so the two positions overlap if
superimposed.** *"The thing the section teaches is the smallest visible difference in the pair."*
Filed as `T0-D5`.

**One defect fixed from it:** the puck was drawn **6.50 ft and 6.10 ft BEHIND** the carrier in both new
centre diagrams, against a house convention of **2.83–4.00 ft and LEADING**, measured across eight
figures on the same pages. **It read as a loose puck the centre is skating after, while both captions
turn on him carrying it.** Both now lead at ~3.4 ft.

⚠️ **Two pieces of reviewer discipline worth recording**, because both are the behaviour this repository
depends on: it **retracted its own first finding before reporting it** (*"no routes drawn"* — its filter
looked for `marker-end` and the carries are polylines with separate arrowheads), and it **refuted its
own hypothesis** about the scrollbar cue rather than filing it as a defect, concluding that **this
environment cannot distinguish "the cue fails" from "headless suppresses it."**

---

## Dimension coverage

⚠️ **`commit-gate` blocked because this record carried no coverage statement. Silence on a dimension is
the failure mode, and a record with no statement is silence on all fifteen.**

| dimension | state |
|---|---|
| **D1 Cardinal rule** | ✅ `facts-reviewer` — *"No cardinal-rule violation in the set"* across the five changed facts lines |
| **D2 Rules in primary text** | ✅ `rules-verifier` on the restraining-lines rewrite, the 76.4 misattribution and the landmark negative; `commit-gate` independently re-derived six quotations |
| **D3 Citations** | ⚪ **OUT OF SCOPE — the diff adds ZERO URLs.** Verified by `commit-gate`, not asserted |
| **D4 Facts layer** | ✅ `facts-reviewer` — 5 blocks, 41 facts read whole against their own section bodies. **2 criticals, 5 majors** |
| **D5 Safety** | ✅ `safety-reviewer` — **2 criticals, 3 majors**, all fixed |
| **D6 Numeric ownership** | ⚠️ **PARTIAL.** `facts-reviewer` found `offensive_zone_play.md:146` overstating the section that owns the hazard; fixed. **But no `content-reviewer` ran, and 3,461 characters of caption entered `center.md`'s spoken layer** — whether every figure still carries its owner's qualifications in that context is unchecked |
| **D7 Negative existence claims** | ⚠️ **PARTIAL, and it FAILED.** `facts-reviewer` found *"the middle third is where open-ice contact happens"* unsourced in **four** places, against a corpus note disclaiming exactly that kind of ranking. Filed as `T0-40`, **not deleted** |
| **D8 Qualifications travelling** | ⚠️ **FAILED and fixed.** Both `safety-reviewer` criticals are this dimension — a counterweight that reached the caption and stopped at the facts block |
| **D9 Summary layer** | ✅ Three `Never:` lines and two corrected citations, all traced to their own sections — **and two were found NOT traceable and rewritten** |
| **D10 House style** | ✅ `facts-reviewer` — label choice, placement and read-aloud form checked on all five |
| **D11 Diagrams teach the section** | ✅ `diagram-reviewer` earlier in the round; `site-reviewer` rendered all four new ones |
| **D12 The spoken layer** | ⚠️ **PARTIAL — reasoned and rendered, never HEARD.** The spliced caption was caught by rendering, not listening. ⚠️ **`facts-reviewer` notes `76.7(iv)` may voice as a word rather than "four" and nobody has checked** |
| **D13 Provenance** | ⚠️ **NOT DECLARED OUT OF SCOPE, and it is not.** ⚠️ **`pp-131` is newly placed in two documents, so its Matt Cane 56% figure and its qualifications are newly voiced in documents that did not carry them, and no `source-verifier` ran.** Filed |
| **D14 Mechanical** | ✅ links, facts (830 blocks), absolutes, geometry, secrets, leaders, counts, tables |
| **D15 The rendered site** | ✅ `site-reviewer`, 12 of 12 viewport × theme cells |

⚠️ **Two dimensions are declared FAILED rather than passed** — D7 and D8 — and one, **D13, is declared
not-covered rather than out of scope**, because the borrow moved a sourced figure into two documents
nobody checked.

---

## ⚠️ The second instance of the same thing, which this record missed

**`commit-gate`, third run:** *"your record already has a section headed 'A defect this round FILED and
then ADDED an instance of' — for the `→` headings. It happened twice, and the record notes it once."*

**The second:** `T0-40` files *"the middle third is where open-ice contact happens"* as an unsourced
claim standing in multiple places — **and the same diff added another instance of it**, unhedged, in a
facts block voiced alone with a 300 ms break either side. **Counted by the gate: `center.md` carries the
phrase twice at HEAD and three times in the index.**

⚠️ **Non-negotiable 3 protects an EXISTING unsourced claim from deletion. It does not license writing a
new one.** The clause is dropped from the added line — its head-up half is sourced and is the part that
matters — and the corpus is back to its pre-existing sites, which stay.

⚠️ **Both instances were invisible for the same reason: they looked like the house style.** The agent
that added the sixth `→` heading **checked the five existing ones and matched them deliberately, as
consistency.** The agent that wrote the safety line reached for the corpus's own familiar phrasing.
**A round that identifies a pattern is the round most likely to reproduce it**, and filed as `T0-41`.

## The repair that stopped at the clause instead of the claim

**Also caught by the third gate.** `facts-reviewer` found `offensive_zone_play.md:146` overstating the
section that owns its hazard — *"the walkout past the post **is where** players get driven into the goal
frame"* against §8's *"you **can still be** driven"*. **I fixed the facts line and left the identical
sentence in the caption**, live in the manifest, the SVG and the built page.

⚠️ **The comment four lines above that sentence, written by me earlier in the same round, reads
"Presence is not correctness." It was about this caption.**

**Both layers now carry the owner's hedge.**

## What the gate resolved AGAINST a reviewer, with evidence

⚠️ **`facts-reviewer` called the merged prohibition-plus-technique line a structural defect forced by a
full block. `commit-gate` refuted it**: the corpus merges the two in at least a dozen `Never:` lines —
`on_ice_communication.md:81`, `passing_and_receiving.md:479`, `scanning_and_anticipation.md:136`,
`puck_support_and_spacing.md:307`, `breakouts.md:518`. *"`facts-reviewer` is right that two lines are
cleaner; it is wrong that one is a defect."*

**The block capacity is still worth recording. It is not what caused the ambiguity — careless wording
was.** `T0-38` corrected to say so.
