# What is open — consolidated

**As at 24 August 2026, after round 39.** This file is the single live list. The
round-by-round detail stays in [`round_36_carried_findings.md`](../reviews/round_36_carried_findings.md) and the
[review records](../reviews/round_39_ducking_division_scope.md); this is the index into them, grouped by the kind of work each
item actually needs.

Nothing here is a defect known to be shipping wrong that could simply be corrected. Each item
is open because it needs a decision, a source that is not on disk, a tool that does not exist,
or a structural change too large to fold into a repair.

---

## Tier 0 — The largest items

Detail: [`corpus_structure_measurements.md`](../reviews/corpus_structure_measurements.md).
These outrank everything below. The corpus is **37 documents and 632,107 words — 47.9 hours of
reading at 220 wpm** (whitespace split over the raw markdown of every file in `content/`,
measured 26 August 2026 **on the tree that shipped it**, not on the tree before its repairs —
the first version of this figure was HEAD's and was stale the moment it was written). ⚠️ **This read "532,518 words — 40.3 hours" until round 43**, a figure
the very file it cites supersedes two paragraphs above its own table: *"The corpus is 37
documents and 619,227 words."* Tier 0's argument is that forty hours is six books and a beginner
will bounce off it — **and the true figure is nearly forty-eight hours**, so the stale number was
understating the case for the work it introduces. Its
accuracy is not the open question: the owner has played for three and a half years and has read a
large part of it. What is open is **structure** — whether a reader can find the thing they need,
recall it, and act on it. Outside feedback is always worth having and is never finished; it is not
a blocker on any item here.

**⬜ Substance at the top.** A reader landing on a page should get a real summary in the first
screen and drop into detail as they need it. The corpus is currently the wrong way round.
Prototype two Overviews and look at them before committing to 36.

**⬜ Retrieval practice was piloted and never rolled out.** `Check yourself` appears in **1
document of 36**. It stopped because the diagram work started before it finished, not because it
was rejected. The corpus already holds the questions — every document ends with Key Takeaways and
Common Mistakes, both of which are assertions of exactly what a reader should be able to recall.
Named here as **the single largest unexploited gain in the project**.

**⬜ The Key Takeaways are not takeaways — corpus-wide.** **48,673 words: 9% of the corpus is its
own summary.** `equipment.md` 3,744 · `conditioning_and_recovery` 3,024 ·
`body_contact_and_battles` 2,711 · `mental_game` 2,592 · `getting_started` 2,444. A reader who
skips to the takeaways to save time reads a second document. **MA23 (Tier 2) is this same defect
in one file** — round 38 fixed `rules_primer.md` and found that every critical it sustained came
from compressing rather than splitting. **That finding should shape the corpus-wide pass, not be
rediscovered by it.**

**⬜ There is no entry path.** Thirty-six documents in a reading order, and no answer to *"I am
playing on Saturday and I have an hour."* A curriculum, not a triage. Two or three named paths —
*your first game*; *you have been put on defence and have never played there*; *you want to follow
a game on television* — each naming four or five documents **and which sections of them**.

**⬜ Gaps the entry paths exposed — content that does not exist.** Absences no review round finds,
because a reviewer checks what is written.

**⬜ Known open defects carried at corpus level.** Full-sheet diagrams render labels at ~7.5 px on
a phone (improved from 4.4 by a scroll box; still strained — a typography decision, not a diagram
fix). `special_teams.md`'s facts block is at its 8-fact cap with two independent hedges in one
292-character line; the style guide's own remedy applies — *"more than 8 and the section is
probably two sections."*

---

## Tier 0b — The owner-set priorities, and one live notation defect

Set by the owner on 19 August: **priority 1 was diagram notation, priority 2 readability**, both
ahead of everything else. Priority 1 is largely done; these are what it left, plus priority 2 in
full.

### Priority 1 residue

**✅ `pressure` no longer draws a glyph the IIHF key does not define.** It was
`{ line: 'plain', end: 'bar1' }` — one perpendicular bar, which **§21.1 does not define at all**;
two bars is its SUDDEN STOP, and one bar is the left half of that mark, so a reader trained on the
key saw half a sudden stop on a line meaning a player closing to pressure. It is now
`{ line: 'plain', end: 'bars2' }` across all **12** uses, and the one-bar terminal is not offered
anywhere. The cost is disclosed rather than hidden: a pressure route and a sudden stop now draw the
**same mark**, told apart by where the route finishes, and `reading_ice_hockey_diagrams.md` says so
to the reader. ⚠️ **The repair of the comments describing this was itself half-applied twice** —
see [`round_40_notation_axis_residue.md`](../reviews/round_40_notation_axis_residue.md).

⚠️ **This entry was wrong when first written**, and said one bar *was* SUDDEN STOP. It was salvaged
from a retired note and carried over without checking it against `rink.mjs`, which states the
opposite three lines from the definition. The tell was inside this tier — sudden stop is listed
below as **unimplemented and unused**, which cannot be true of a symbol the corpus already draws —
though **my reading of that tell was also wrong**: it is `stop`, not `pressure`, that draws it.
Two wrong claims about the same glyph, one written to explain the other. → **the plan's own rule
applies to the plan, and to the correction of the plan: a quotation is evidence, not
verification.**

**⬜ `content_style_guide.md:714` states a glyph wrongly, under an instruction not to re-derive
it.** It reads *"| Sudden stop | line ending in a perpendicular bar |"* — singular. §21.1's SUDDEN
STOP is **two** bars; one bar is the shape §21.1 does not define. It sits nine lines above
*"⚠️ The legend glyphs are settled — do not re-derive them"*, so an agent following the governing
document reads a wrong glyph and is told not to check it. **Fix the entry and the instruction
together** — the instruction is only safe if what it protects is right.

**⬜ `C` and `A` collide with the IIHF key, and the collision is theoretical.** The spec reserves
`C` = coach and `A` = assistant; the corpus uses `C` for centre (36 glyphs) and `A1`/`A2` for
attackers (11). But `pos: 'coach'` and `pos: 'assistant'` appear **zero times** in all 109 diagrams
— these are play diagrams, not drill diagrams, and the IIHF key carries C and A because it is a
*drill* key. ⚠️ **Relabelling 36 centres would break a documented corpus convention to resolve a
collision that cannot currently occur.** Decide deliberately.

**✅ The unimplemented-symbols list is resolved.** `stopmark` (§21.1's `//` STOP) and `backxover`
(its sawtooth BACKWARD CROSSOVER) are both implemented and both appear in the legend, so the two
genuine omissions are closed. **`bodycheck` was deliberately removed from the legend**: it is
implemented but **no diagram in the corpus uses it**, and advertising a body-check glyph without
saying who may legally deliver one is a contact instruction with no scope — body checking is
prohibited in USA Hockey 12U and below, all girls' and women's play and all non-check adult play
(604(a)), and at Hockey Canada U13 and below and in female hockey (7.3). `blocking`, `pivot`,
`droppuck`, `stopmark` and `backxover` are also implemented and unused; they keep their rows
because none is a contact glyph. The superseded entry read:
*"six IIHF symbols remain unimplemented — pivot, dropping the puck, sudden stop, blocking/screening,
body check, the cluster of pucks. None is currently used."* Checked against §21.1 and `rink.mjs`:

- **Sudden stop is implemented and used.** `stop: { line: 'plain', end: 'bars2' }` at `rink.mjs:504`
  renders two bars, which **is** §21.1's SUDDEN STOP, and it is used once
  (`defensive_zone_coverage.mjs:404`). *"None is currently used"* is false.
- **The cluster of pucks is not an IIHF symbol.** It appears nowhere in §21.1 — zero hits in
  `sources/iihf_coachdev_off_tactics.txt` — and belongs to the other key, at `rink.mjs:468`.
  Listing it as IIHF is a provenance error.
- **Two genuine §21.1 omissions are missing from the list:** **STOP** (`//`, which the corpus's
  `stop` does not draw — it draws two bars) and **BACKWARD CROSSOVER** (a sawtooth zigzag, where
  `crossovers` draws the other key's picket-on-a-line).

**⬜ Write the notation rule into the spec so it cannot drift again.** The owner asked for it in
`project/content_style_guide.md` **and** `.claude/agents/diagram-reviewer.md`. The rule to write is:

> Shape carries the **POSITION**, fill carries the **TEAM**. A circle is a forward, a triangle a
> defenceman, a goaltender a bare `G` with no enclosing shape, an `X` a pylon and never a player.
> **Open** is the reader's own team, **solid** the opposition. Monochrome throughout: colour
> carries nothing. Source: *"International Drill Symbols"*, the Hockey Eastern Ontario NCCP
> Development 1 handout — `sources/heo_intl_drill_symbols.pdf`, on disk and sha256-verified, whose
> rows read `● ○ Forward / Player` and `▲ △ Defender / Player`. **A player's shape therefore does
> not change when play turns** — a winger is a circle backchecking as well as attacking.

⚠️ **This is not the axis the owner specified on 19 August, and the divergence is deliberate.**
The 19 August instruction was *"notation is fixed by IIHF International Symbols §21.1 … shapes
carry the team on an offensive/defensive axis — circle attacking, triangle defending — never
own/opposition and never position."* That reading of §21.1 is **correct** — its columns genuinely
read `TEAMS / OFFENSIVE DEFENSIVE`, with the position carried by a numeral, 1 goaltender through 6
left wing. It was implemented, and it **produced the defect that reversed it**: a player's shape
changed between diagrams, so a winger was a circle in the breakout picture and a triangle in the
forecheck picture. §21.1 is also the only one of four published keys that works that way — USA
Hockey's 12U Practice Plan Manual legend defines no player symbols at all, Weiss Tech Hockey draws
both teams as circles, and the HEO sheet this corpus actually cites carries position in the shape.
And §21.1's numerals cannot be used here regardless: they would reinstate exactly the inference
that *"F1, F2 and F3 are roles set by order of arrival and not people"* spends fifty lines killing.
The revert is recorded as done in
[`corpus_structure_measurements.md`](../reviews/corpus_structure_measurements.md) — 511 glyphs
across 112 diagrams verified — and the reader-facing account is in
`content/reading-diagrams/reading_ice_hockey_diagrams.md`. **It has not been put back to the owner,
and it should be:** an owner instruction was overridden on an implementer's judgement, and the only
thing making that legitimate is that it is written down here rather than absorbed silently.

⚠️ **Do not take this entry on trust either — this axis has now been stated wrongly three times in
this repository, twice in opposite directions.** Both keys are on disk and **both are image-only**:
`pdftotext` on the HEO sheet returns its title and nothing else, and the IIHF `.txt` loses every
glyph. **Render the page and look.** That is how three glyphs stayed wrong through every check ever
run.

**✅ The `F1 F2 F3` / `D1 D2` collision is resolved by the axis above, and needs no owner decision.**
It was open only *because* shape carried the team: with shape saying nothing about position, a bare
`2` in a circle could have been either. Shape now carries the position, so a `2` in a circle is a
forward and a `2` in a triangle is a defenceman, and the label is unambiguous without the letter.
The corpus keeps the letters anyway — they match the vocabulary of the section beside the picture.

### Priority 2 — readability

**⬜ Sections that do not say where they are — and this is a safety item, not a readability one.**
The owner's example: *"in Carrying the Puck — Under Pressure under Defensive Zone, it is not clear
we are talking about Under Pressure in the Defensive Zone unless you scroll up."* Measured and worse
than described: `### Carrying the Puck — Under Pressure` appears **three times in `winger.md`**.
A reader hearing one of them aloud has no idea which end of the ice they are in.

**⬜ Ten live divergences the consolidation would otherwise silently pick a winner on.** These are
defects **now**. D1 alone: **"the slot" is two different shapes** — `shooting.md:26` bounds it by
the faceoff dots; the glossary, `breakouts.md` and everyone else bound it differently.

**⬜ The Overview triple-repeat.** A `facts` block, then prose restating it, then the sections
restating it again. The owner wants the Overview *"much more summarised, maybe only the facts."*
⚠️ **Do not simply delete the summary prose — the summary layer is a safety mechanism**, and this
corpus has already lost a correct fact to a tidying pass.

**⬜ "A Note on Language" — one page, not eight.** Eight of 37 documents carry it, 21,755 characters
total, but at 1,140–3,504 chars each **they have diverged** — so this is a **merge**, not
delete-seven-copies. ⚠️ Several copies may carry an honest disclosure the others lack.

**⬜ More diagrams, especially Positions.** *"One diagram is worth 1000 words."* **16 of 37
documents have zero diagram references**; Systems carries 9–10 each while Positions is thin.
⚠️ **The owner's constraint on Overview diagrams:** high-level only — full-ice concepts, or one to
two per zone, and no more. A single diagram carrying everything is worse, not clearer.

**⬜ Repeated labels inside one facts block.** Multiple `Rule:` facts read fine; multiple
`Position:` facts confuse. Suspected cause is Overview blocks summarising Position from several
sections below.

---

## Tier 1 — Content defects with a known fix and a named location

The fastest work in the list. Each has been verified, has an identified remedy, and nothing
blocks it.

| | Where | What | Source |
|---|---|---|---|
| ⬜ | `offensive_zone_play.md:165` | A merge dropped **three** clauses; one was restored, **two remain** — same defect, same remedy, and nothing forced the trim (each original line was ~125 characters). | plan §3.2 |
| ⬜ | `offensive_zone_play.md:171` | A `Convention:` fact says a role assignment *"is a coaching choice"*; the section body says arrival order decides it. **The fact contradicts its own section.** | plan §3.3 |
| ⬜ | `defending_the_rush.md:135` | A merge shed *"around"* and *"roughly"*, promoting a hedge to *"**one** stick length"* — reads as a measurement rather than an approximation. | plan §3.4 |
| ⬜ | `body_contact_and_battles.md:420-421` | Read-aloud minors in facts blocks: *"All four"* resolves only from a heading a listener never hears; *"the restricted form"* of 101.1 is undefined in the block. | plan §3.7 |
| ⬜ | Glossary, ~9 entries | `Forecheck` homonym; `Post` drops its owner's coaching-choice hedge; three entries out of alphabetical order; `one-touch`/`one-timer` collision; `Board battle`; backside coverage. | plan §4.1, §4.3 |
| ⬜ | Glossary, voice | **Six of the ten new entries close with a cross-link and four do not**; `Butterfly` uses inline *"— see [X]"* where others use a sentence-final *"See [X]."*; some are third person and some switch to second. | plan §4.3 |
| ⬜ | `"most goals are scored low"` | **Unsourced in its owner.** Label it or source it — do **not** delete it: a tidying pass already removed a *correct* fact from this corpus for looking unsupported. | plan §3 |
| ⬜ | `rules_primer.md:167` and `:185` — **round 45's first item, verified** | The rules owner states flat, in **three** layers, that on a delayed offside *"all players of the offending team clear the zone **at the same instant**"* — `:167` and `:185` in the body and **`:846` in its Key Takeaways, the layer the podcast speaks**. Fix all three or fix two of three. `zone_entries.md:156`/`:166`/`:986` and `winger.md:279`/`:612` all say *"three books of the four"*, because **Hockey Canada does not require simultaneity**: 6.11(b)(ii) nullifies the offside when *"all attacking players clear the attacking zone by making skate contact with the blue-line, so that the attacking zone is completely clear"* (`hc.txt:5413`) — no "at the same instant", where NHL 83.3(i) and USA Hockey 630(d)(2) both have one. **A live cross-document divergence of round 44's exact class, in the rules owner, that round 44 did not find** — the gate found it only because it sat beside something that changed. | round 44 |
| ⬜ | **Nine** documents cite Hockey Canada rules with **no HC rulebook in Sources** | `time_and_space.md` and `rink_map_and_glossary.md` quote Rule 6.11's preamble **verbatim**; `on_ice_communication.md`, `puck_support_and_spacing.md`, `how_to_watch_hockey.md`, `breakouts.md`, `switching_positions.md`, **`neutral_zone_systems.md`** cite 6.11; `forechecking_systems.md` cites 7.3, 6.11 and 8.3(b) with only coaching pages in Sources. ⚠️ **Round 44 created the gap in three of them** — `on_ice_communication.md`, `puck_support_and_spacing.md` and `how_to_watch_hockey.md` had no HC claim before it; the other six already cited the book. The claims are verified against `sources/hc.txt`; the citation is missing. **Not swept in round 44** — nine Sources blocks, nine formats, in a round where every sweep introduced a defect. The line already exists in `center.md` and can be copied. → `source-verifier`. | round 44 |
| ⬜ | `shooting.md` vs `offensive_zone_play.md:939` | **The named owner of shot-location value does not hold the figure that points at it.** The McCurdy/HockeyViz *"under 5% outside home plate"* lives only in `offensive_zone_play.md:60`; `shooting.md:760` gives 10–15% / 2–4% hedged as *"that source names no dataset"*. A reader following the pointer arrives at the **less** evidenced pair — and one site re-labels "home plate" as "perimeter", two different areas in the glossary. **Which is right cannot be told from the summary layer.** | round 44 |
| ⬜ | Crease rule-set divergence, 16 sites | `offensive_zone_play.md:485`/`:943` carry USA Hockey 625(b) and the IIHF loitering provision; ~16 summary-layer sites across 12 documents give NHL 69.1/69.3 flat. `special_teams.md:907` groups the IIHF **with the NHL**; `offensive_zone_play.md:943` groups it **with USA Hockey**. **→ `rules-verifier` on 625(b) and IIHF 69.1's final sentence before any sweep.** | round 44 |
| ⬜ | `risk_management.md:730` KT5 | The both-defencemen absolute survives inside a nine-item `never` list, where the hedge is deferred ~200 words. The other two sites in this document were fixed in round 44; **this one needs the list restructured, not a clause added.** | round 44 |
| ⬜ | `content_style_guide.md:496-510` | **The "full corpus" list enumerates 35 files**, omitting `uk_rules.md` and `reading_ice_hockey_diagrams.md`. It is the list a pipeline would glob, in the file that is the specification. | round 44 |
| ⬜ | NHL encroachment cited three ways | `on_ice_communication.md:273` cites **76.2**, six summary lines cite **76.6**, two cite **76.4**. `special_teams.md:1001`'s own source list calls 76.2 *"Face-off Locations"*. → `rules-verifier`, grep `^76\.` in `sources/nhl_rules.txt`. | round 44 |
| ⬜ | `faceoffs.md:849` | The Common Mistake drops the *"computed for this document"* label its own KT5 carries, and broadens "points percentage" to "team results". The style guide requires the label to travel. | round 44 |
| ⬜ | "Stay high" — a fourth sense | `winger.md:610` defines it as *"level with the opposing defenceman while they have the puck, and it expires the moment your team wins it"*; `breakouts.md:702` uses the control-breakout sense, i.e. after your team has it. The body at `breakouts.md:205` flags both senses; **the facts line does not, and facts lines are read alone.** | round 44 |
| ⬜ | Four documents at 11 Key Takeaways | `neutral_zone_systems.md`, `switching_positions.md`, `practice_and_development.md`, `scanning_and_anticipation.md`, against the style guide's 5–10. Round 43 recorded one of the four. | round 44 |
| ⬜ | `conditioning_and_recovery.md:528` | Common Mistakes carries the Copenhagen adduction exercise's *very-low-certainty* hedge but **not the retraction** its own Key Takeaway 4 and body both carry. A dropped qualification in the layer read first. | round 43 |
| ⬜ | `conditioning_and_recovery.md:524` | *"…in the study cited above"* — read aloud there is no "above", and the body's *"one study in fourteen semi-professional players"* hedge does not travel. | round 43 |
| ⬜ | `conditioning_and_recovery.md:553` | `Check yourself` Q1 points at *"§Concussion — …The absolute rule"*; round 41 renamed that heading to `### Concussion: the absolute rule`. **The reference degraded rather than broke, so no link checker can see it.** | round 43 |
| ⬜ | `defender.md:585` vs `conditioning_and_recovery.md:39` | **Two corpus computations of the same 2024-25 shift lengths that disagree** — 48.7/47.4 against 47.1/48.8 — and `defender.md` calls it *"the same calculation"*. Different populations, neither stated. Shift length is `conditioning_and_recovery.md`'s. | round 43 |
| ⬜ | `how_to_watch_hockey.md:580` · `mental_game.md:629` · `faceoffs.md:849` · `practice_and_development.md:555` | Four owned numbers restated in a summary layer **without their owner's qualifications** — the 44 ft to the dot, the 18% of variance (no CI, no 82%-unexplained), the 6% faceoff correlation (drops its *computed-for-this-document* label), and a single-game possession measurement generalised to *"a full game"*. | round 43 |
| ⬜ | `practice_and_development.md:608-620` | **Eleven Key Takeaways** against the style guide's 5–10. Every other document in scope is at 10 or fewer. | round 43 |
| ⬜ | `skating.md:888` | *"Almost every race you contest is decided within about three strides"* — unsourced, in a section whose point is that a **neighbouring** three-strides claim is *"positively contradicted by the biomechanics literature"*. The two are genuinely different and this one is not wrong; it needs a *coaching observation* label. | round 43 |
| ⬜ | `zone_entries.md:174` | NHL **83.4** stated truly, but without the half that favours the reader: 83.4's closing sentence gives an exception the document hands to the **defender** at `:908` and withholds from the attacker, who is told the puck cannot go in and given no cue to keep playing. **→ `rules-verifier` to adjudicate**, not an editorial call. | round 43 |
| ⬜ | `center.md:116` | An `Action:` states the weak-side collapse unconditionally; the body carries **two named exceptions** (`:135`, `:137`) and the document's own `Check yourself` Q2 demands the reader name them. A centre leaves the slot expecting a collapse that cannot come. | round 43 |
| ⬜ | `center.md` §Overview | **Four facts are not traceable to §Overview's own body** — the swing-breakout split, low-zone-collapse-vs-man, and "ten to fifteen" all live in sections further down. All true and correctly hedged, so per the style guide this is *a finding about the section*: the Overview body should name the alternatives it hedges against. | round 43 |
| ⬜ | `faceoffs.md` | **"Ten to fifteen draws a game matter" is now in a `center.md` Key Takeaway and appears nowhere in its named owner**, with no source or label anywhere in the corpus. Either source it in `faceoffs.md` or label it coaching craft. | round 43 |
| ⬜ | `center.md:356` | `Never: Take your body inside the blue paint` omits NHL **69.1**'s carve-out for an attacker *pushed* in by a defender. The body defers it to Rules Primer. Errs conservatively, but a reader shoved in and waved off will believe the corpus told them so. | round 43 |
| ⬜ | `defender.md:268` vs `:271` | Two thresholds in one block for the same decision — *"confident"* against *"certain"*. Inherited from the body (`:276`, `:280`), so **fix the body first**. | round 43 |
| ✅ | USA Hockey 614(b)/618(a) | Both read *"A **penalty shot/optional minor penalty**"* and the corpus stated the shot unconditionally. **Fixed:** `center.md` now cites Rule **406(a)**, under which the non-offending team *"may, prior to the penalty shot, elect that the minor … be assessed … in lieu of the penalty shot"*. ⚠️ **This entry first credited the election to a One Pass rule — which is a *Blind Hockey* rule** (`usah.txt:6559`, *"to give low-vision and completely blind players the best chance to track the puck"*), with the glossary gating on it sitting inside the Disabled Hockey chapter. Reading it as the general glossary would have hedged a correct claim on a condition that does not reach these readers. | round 43 |
| ⬜ | Hockey Canada 10.2(a)(v) | The new *"the puck's location decides, not the player's"* is an **NHL/IIHF/USA Hockey** rule. Hockey Canada locates the penalty shot by where the **infraction** occurs. Stated with book scope in the facts lines; reads as a law of hockey in prose. | round 43 |

---

## Tier 2 — Needs a decision, not an edit

These are open because someone has to choose, and the choice changes the shape of the work.

**⬜ MA23 — the ten-item cap versus the one-proposition rule.** The takeaways render correctly at
375 px, so what is open is editorial. Mid-item the numeral is ~800 px off-screen, so a reader in
the middle of a 347-word takeaway has no cue which one they are in. Three rounds of evidence say
**splitting beats compressing**: every critical came from compressing, and each repair wave *added*
words — 746 → 66–318 → 66–336 → 66–347. The spec caps the count at ten, not the length.

**⬜ MA24 — the same Table 6/7 material is stated four times across two documents.**
`uk_rules.md` §"A first major can end your game" plus `rules_primer.md` §4, §10 and Key
Takeaway 4 — four framings, four hedge placements, well over two thousand words. That is four
places for the next correction to fail to reach, and in round 37 it failed to reach three of
them twice. **Should `uk_rules.md` own it outright and the primer link?**

**⬜ §6c / MA21 / MA22 — `defending_the_rush.md` §Breakaways is over `HARD_MAX`.** The merge
that freed slots lost NHL 67.4's *"except a goalkeeper"* attachment, and a penalty-shot
trigger in the body reaches no fact at all. **The merge should be undone and the section
split** — that is structure, not editing.

**⬜ §7 — `hc.txt` was extracted without `-layout`.** Re-extracting would fix the interleaved
two-column tables and sidebar headings that make some Hockey Canada attributions rest on
inferred layout. **It would also shift every `hc.txt:NNNN` citation in the corpus.**

**⬜ §8b m4 — a dormant Google Analytics 4 bootstrap ships in the build.** Decide: remove, or
activate and disclose.

---

## Tier 3 — Tooling and verification gaps

**⬜ An advisory baseline for `check-arrivals` — deliberately NOT built yet.** `diagram-reviewer`
proposed an allowlist keyed by `diagram + owner + target + rule` so a **new** advisory is loud and
an accepted one silent. It is the right idea and it was held back for a stated reason: **an
allowlist entry is a written assertion that a human looked and accepted.** Writing seven of them
before anyone had rendered `dz-walk-down-man` and `nz-1-2-2-trap` would have put the repository's
own voice behind a review that had not happened — this corpus's signature failure. Both have since
been rendered and judged safe, so the blocker is gone. **When it is built: the reason string must
be mandatory (an entry without one is a hard failure, not a warning), and a changed target must
count as a new entry rather than a matched one.**

⚠️ **A tripwire worth knowing before anyone moves a route.** The thinnest non-goaltender margin
*above* the 9 ft gate is `dz-collapse-corner` at **9.43 ft**, ahead-of-tip — five inches of
clearance. Not a defect; the reason the build will suddenly fail if that route is nudged.

**⬜ Nobody has diffed the summary layers against each other — corpus-wide.** Round 43 read
each document's summary layer cold against **its own body** and found eight majors. Its
closing sentence names what that cannot reach: a claim stated one way in `defender.md`'s
takeaway and the opposite way in `center.md`'s, **where both match their own bodies**, is
invisible to it. The KHL finding surfaced only because two documents happened to be open at
once. **This is the highest-value move on the list and it is cheap** — the summary layers of
all 37 documents are 85,820 words across 74 sections — large, but a fraction of the corpus — and they are the layer the
podcast extracts.

Things no current check can see.

**⬜ §6b — no literal-asterisk check exists, and this has now shipped twice.** Commit
`f5f385f` fixed one; round 37's gate found another. It renders verbatim on the web page, the
markdown download, the EPUB and the PDF — and `md_to_speech.py` strips it, so **the speech
pipeline hides the defect rather than catching it.** Round 38 added a third instance
(an unmatched `**` from a merge), caught by reading, not by a tool.

**✅ The diagram arrival invariant is stated once and enforced.** Round 42 —
[`round_42_arrival_invariant.md`](../reviews/round_42_arrival_invariant.md).

It is now stated normatively in exactly one place, above `playSvg` in `rink.mjs`, and enforced
by `site/scripts/check-arrivals.mjs`, wired into `npm run build` **before** `build:diagrams` —
it reads the specs rather than the built artefact, so it fails before anything is regenerated
on disk. **Six copies of the rule existed, not the four the first consolidation pass found**:
two verbatim in `forechecking_systems.mjs`, a differently-scoped third in `rink.mjs`, two more
in `faceoffs.mjs` and `defensive_zone_coverage.mjs`, and a reader-facing sixth in
`reading_ice_hockey_diagrams.md` — plus an operative **angle** in `defending_the_rush.mjs` that
the invariant disclaims outright. All now point at `rink.mjs`; the case histories stay where
they are. **0 hard violations; 7 advisories, tabulated in the record.**

**What the enforcement found that no prose statement had:** an opposition arrowhead
finishing **8.94 ft from the reader's own centre** in `centre-backcheck-middle-lane` — three
lines below that spec's own comment saying an arrow from the driver *"that finished on the
centre would read as a check rather than a lane"*. The guard was written against the route
the author chose not to draw and never applied to the one they did. Fixed to 10.0 ft of
clearance; referred to `diagram-reviewer` to confirm the section's claim survives it.

⚠️ **This entry's predecessor under-named its own measurement.** It recorded seven
arrow-ended routes within 9 ft, of which three are backchecks — leaving four — and then
named three. The fourth was never listed, and only the enforced check surfaced it. **Third
consecutive round in which a record's arithmetic required a file its prose did not name.**

⚠️ **And the checker's own first run was wrong in the way this project keeps being wrong.**
It had no notion of *whose* route it was — routes carry no team field — so it treated
`team: 'opp'` as "the opponent" for every route. **22 of the 80 arrow-ended routes are
skated by the opposition**, and for those it measured against the owner's own teammates. It
reported `forecheck-212-stacked` as a hard failure (an opposing carrier 8.25 ft from his own
partner) and missed the real defect entirely. **One edit away from redrawing a correct
diagram to satisfy a broken test.** Ownership is now inferred from the route's start point,
and that inference was measured before being relied on. → the plan's standing rule, again:
**a tool's limits must be stressed before its output is treated as evidence.**

⚠️ **`reading_ice_hockey_diagrams.md:65` was listed above as one of the three incompatible
statements and is not one.** *"A route that closes on an opponent ends in the two-bar mark,
not an arrowhead"*, with no numbers, is the correct reader-facing projection of form (b) —
and omitting the geometry is what the invariant requires, not a divergence from it. **Left
unchanged**; rewriting a correct sentence because a planning note called it divergent is the
tidying failure non-negotiable 3 exists to prevent.

**⬜ But one real reader-facing mismatch follows from it.** That sentence carries **no
goaltender carve-out**, while three shipped diagrams draw an arrowhead finishing 7.8–8.6 ft
from a goaltender (`forecheck-212`, `nz-1-2-2-containment`, `entry-wide`) — advisory in the
checker on the grounds that every net-drive route finishes near him by construction. **Either
those three diagrams are wrong or that sentence is incomplete**, and the goaltender is the
one target both books protect unconditionally (USA Hockey Rule 607 Charging (d), 2025-29;
IIHF 42.1 CHARGING, both located on disk in round 42). This is a `content/` change and needs
its own review round. `diagram-reviewer` was asked whether any of the three reads as a skater
going through him.

**⬜ `faceoff-dzone-tie-up` — the instructive advisory, still open.** Two terminal tangents
pass 2.32 and 2.68 ft from the opposing centre's anchor, inside the file's own 2.9 ft floor,
because that spec's comment measures its clearance **to the puck** and never to the centre.
An unenforced invariant produces exactly that: the author checked the constraint, against
the wrong object. Referred to `diagram-reviewer`; not changed without that verdict.

⚠️ **Two naming drifts survive outside this commit, plus one open count.**
`breakouts.mjs:230` describes `carry` as *"skating with control of the puck"* — the Hockey
Eastern Ontario name, where the legend row, the notation caption and
`reading_ice_hockey_diagrams.md` all now use §21.1's *"skate and stickhandle"*. Not false, since
both keys draw the mark identically, but it is the last place using the other key's vocabulary.
⚠️ **Corrected in round 42: this one is inside `describe`, so it is READER-FACING** — alt text,
EPUB, PDF and speech all carry `describe` — and the entry above sits under a heading calling these
"naming drifts", which reads as comment-level. **It was deliberately not swept with the comment
fix.** Changing it trades a plain-English gloss that a screen-reader listener understands for the
key's jargon, and that is a judgement about accessibility, not about vocabulary consistency.
Decide it deliberately; do not let a terminology sweep make the call by default.
**✅ The shared-symbol count is settled and no longer contested.** `rink.mjs` said five line
symbols are common to both keys and the document told the reader four. Both pages were rendered at
300 dpi and compared: the drop pass is the same construction in both — wave, drop marker, straight
line, arrowhead — differing only in the wave's length. **Five is right.** The document now says
five and names the drop pass. The reason it had said four is the seventh half-application: the
corpus's own `droppuck` draws the marker and line **without** the leading wave, so it follows
neither key, and that was missing from `rink.mjs`'s CORPUS ADAPTATIONS list. Listing the drop pass
among the agreed marks would have obliged the document to disclose that — so the miscount and the
missing adaptation were **one defect**, and correcting the count alone would have made things
worse. Both are now fixed, and the departure is disclosed to the reader.

**✅ The stale glyph description is fixed** (round 42). `neutral_zone_systems.mjs:815` called
the backward-skating symbol *"a tight wave"* — the Hockey Eastern Ontario glyph, not the row of
overlapping arches the corpus draws (`backward: { line: 'loops' }`). Checked against `rink.mjs`
rather than recalled: `rink.mjs:482` records that the two keys were once claimed to agree here
and do not. It now names §21.1's BACKWARD SKATING and says what it used to say and why that
misdirects. The identical error in `special_teams.mjs`'s `pk-nz-1-3` **describe** was
reader-facing and was caught at the gate; this one was a comment, so it misled the next editor
rather than a reader — and in this corpus a wave means `carry`, so it pointed at the mark that
says the opposite of the one drawn.

**✅ The work above is done** — see the closed entry at the top of this tier. It specified
three things (state it once; add a build step failing on (b) and warning on (a); fix the
routes) and all three are done. Its one wrong assumption is worth keeping: it said **five**
routes needed repair. One of the five was a false positive of the check's own first version,
and the route that actually failed was not on the list.

**⬜ Johnston & Walter: "the one-bar mark is the only divergence" is probably false, and only
the book can settle it.** `reading_ice_hockey_diagrams.md` says nothing else in the document comes
from that book. But the project's own working record of a 166-page read of it says backward skating
there is a **wave** — which is the HEO glyph, and which in *this* corpus means *skate and
stickhandle* — and that the book uses no player shapes at all, only bare role letters. If that
record is right, there are three divergences and the document claims one. **It cannot be checked
from disk**: the copy is a DRM'd fixed-layout Kindle edition with no text layer, and Tier 4b's page
capture is the route. Until then the safe wording is *"the only divergence among the four symbols
listed here"*. → `source-verifier`, with the page images.

**⬜ The claims in the notation document that carry no number and name no source have never been
checked.** The cold read that found ten majors there checked counts, exclusivity claims and
attributions, and said plainly that it did **not** check the document's own reasoning — sentences
like *"a picket that does not say which way you are going is no use in a play diagram"* and *"the
two marks have to be told apart by where the route finishes rather than by their shape"*. Those read
as too obvious to source, which the style guide names as exactly the shape of a claim nobody has
checked.

**Why they survive, and how to attack them.** Every defect caught in round 40 was a claim that
**names a source** — a count, an attribution, an exclusivity claim. Those have an external referent,
so they can be checked, and sixteen of them were wrong. The unsourced reasoning has no referent, so
nothing in the pipeline can reach it: *"a picket that does not say which way you are going is no use
in a play diagram"*, *"a numeral would say F1 is the centre"*, *"an arrowhead reads as continuing
past the point the line ends at"*. They survive not because they are hidden but because they read as
**reasons for decisions already made** — and a reviewer checking a decision against a source never
questions the reason attached to it.

**The brief, therefore, is an inversion:** for each such sentence, ask what the diagrams would look
like if the opposite were true, and whether anyone has ever tested it. Most will hold. The ones that
do not will be conventions the corpus has been enforcing corpus-wide on the strength of a sentence
with no source — which is the same shape as the one-bar glyph, and that one reached 13 diagrams.
**Start with the arrowhead reason:** it is load-bearing for nine retargeted routes, and it is the
justification behind the arrival invariant recorded above.

⚠️ This entry is also a worked example of the thing it describes. It was first written summarising
what the cold read said it had *not* checked, and the framing above — which is the useful half — was
added only after it had been asserted, in a message to the gate, that it was already here. **The
claim came before the work.** That is the same failure as the sixteen, in the project's own notes.

**⬜ A defenceman's triangle cannot hold a two-character id at the corpus's text size, and the
fix costs legibility.** A circle offers 4.59 ft of interior; a triangle offers **1.11 ft of
half-width at the cap-top** against the 1.685 ft `D1` needs, so the sloping edges cut the letters —
42 spec entries (`D1` 22, `D2` 17, `A1`/`A3`/`A4` 1 each), 44 rendered instances, because several
diagrams appear on two pages. Round 40 made the text fit by dropping two-character triangle ids to
`fs 2.15` at `dy 1.32`, derived rather than chosen. **The cost is not engineered away:** that renders
`D1` at ~6.8 px on a 375 px phone against a forward's ~10 px, and the corpus already treats ~7.5 px
as strained. The alternatives are the owner's: enlarge the triangle (which worsens the boards
clearance the same round just fixed), or move to single-character ids (which breaks the `D1`/`D2`
vocabulary the sections use). **Decide deliberately.**

⚠️ Related and unfixed: **130 two-character ids sit on circles**, and the widest — `RW`, `LW`, `W2`
— measure 4.94 ft against 4.59 ft of usable interior, so they touch their own stroke. Milder than
the triangle case (touching, not cut) and left alone rather than shrinking 130 more glyphs, but it
is the same constraint and it should be settled with the same decision.

**⬜ The glyph halo erases faceoff hash marks and pinches the centre dot, in pictures that teach
off both.** Round 40 gave every player glyph a ~0.6 ft white ring so that an open glyph crossing a
solid one is not erased by it — the corpus is monochrome, so there is no hue to fall back on. It
works, and the long rink lines survive it (worst case a faceoff circle 21% → 28% hidden, a blue line
30% → 36%). **The wall was repaired** by repainting the boards above the halos and below the glyph
bodies. Two losses were not repaired, because the remedy means re-emitting marks the rink layer
owns, and that is an owner call:

- **13 faceoff hash marks go from partly visible to fully hidden** — `faceoff-dzone-alignment`,
  `-clean-loss`, `-tie-up`, `faceoff-goalie-pulled`, `faceoff-ozone-alignment`,
  `breakout-centre-swing`, `breakout-five-roles`, `support-in-a-line`, and `breakout-rim` loses the
  top of a mark that was fully visible before. `faceoff-dzone-alignment`'s caption teaches off them:
  *"the boards-side winger stands at the outer pair of hash marks"*, and those are the marks now
  gone. The other pair on the same circle survives, so the picture still shows hash marks.
- **The red faceoff dot is pinched to a sliver in all five faceoff diagrams** — 2% → 55% hidden,
  squeezed between the two centres' halos, in a picture whose caption says *"The centre is in the
  dot"*. Three others (`dump-and-the-trapezoid`, `dump-soft-area`, `nz-regroup-d-to-d`) take a dot
  from ~64% to ~97%, effectively erasing it.

**The remedy is ordering, not geometry, and it costs nothing:** the boards, hash marks and faceoff
dots are painted before the glyph layer, so re-emitting the other two after the halos and under the
glyph bodies — exactly as the boards now are — recovers both at no cost to the separation. Reverting
the halo instead is the wrong trade: it would restore three coordinate pairs' worth of overlap and
leave the class open, since which glyph lands on top depends on spec ordering.

**⬜ Label halos cut the boards in four diagrams, and the obvious fix trades one defect for
another.** Player labels carry their own white halo (`paint-order="stroke" stroke-width="0.9"`) and
are emitted after the glyph layer, so they paint over the repainted wall: `pp-1-3-1` 1.26 ft,
`dz-support-structure` 1.34 ft, `breakout-up` 1.01 ft (five breaks over ~3.6 ft of corner arc),
`breakout-wheel` 0.84 ft. **Pre-existing, not caused by the halo work** — but it is the same
reader-visible defect the boards repaint was meant to close, and worst in dark theme where the page
outside the rink and the boards ink are near-identical colours.

⚠️ **Do not "fix" it by emitting `boardsOutline()` a third time after the labels** — that puts the
wall line through the label text, which `rink.mjs` already warns about at the placer (*"text running
over the dasher is unreadable"*). These four are placement failures: the placer is supposed to keep
labels out of the boards band and did not. Fix the placement, or drop the halo only where a label
overlaps the band.

**⬜ "Walking an opponent out" is taught as universal and is not.** `body_contact_and_battles.md`
teaches a four-step net-front sequence whose third step is *"shoulder beneath their armpit, legs
driving, walking them out sideways"*, under that document's blanket scope claim that everything in
it *"applies in every league, including yours… The single exception is the section on delivering a
legal body check."* Boxing out and tying sticks are position-holding and legal everywhere. **Step 3
is different in kind:** it displaces a stationary opponent who does not have the puck, by overt
shoulder and torso action. USA Hockey's Declaration of Player Safety (`usah.txt:369-372`) permits
players *"SIMPLY MAINTAINING legally established body position"* in front of the goal, and Rule 604
Note 1 (`usah.txt:3541-3545`) makes *"overt hip, shoulder, forearm or torso action"* an illegal
body check in Competitive Contact categories; IIHF 101.1 (`iihf_rules_v1.1.txt:7506`) gives a
stationary player their ice. **Scope: most North American amateurs, all British women's and girls'
hockey, Hockey Canada U13-and-below and female hockey.** Propagated to
`defensive_zone_coverage.md:448` and `:458`. ⚠️ **Limit on the finding:** the USA Hockey Casebook is
not on disk (Tier 4), and a Casebook situation on the net-front walk-out could qualify or overturn
it. The fix is to split step 3 from the other three with a scope flag and to qualify §1's
"every league" sentence the way §5 already is.

**⬜ The `owns` → `covers` sweep is about 85% done, and both vocabularies are now live.** It
replaced the active forms and left `owned by`: 14 survivors across eight files —
`how_to_watch_hockey.md:598`, `mental_game.md:696`, `center.md:388` ×2 and `:596`,
`defender.md:197` and `:547`, `defensive_zone_coverage.md:597`, `faceoffs.md:722`,
`zone_entries.md:694`, `skating.md:721, 729, 731, 906`. The sharpest is `center.md:596` — a Key
Takeaway, the layer the podcast extracts, saying *"owned by"* three lines from the same document's
*"covers"*. Two consequences worth fixing together: `skating.md:729` explains the corpus's own
cross-linking policy to the reader (*"belong to skating but are owned by other documents, so they
are cross-linked rather than repeated here"*), which is the style-guide's internal-machinery
prohibition verbatim; and `defender.md` has **four** references to *"the owning document"* (`:160`,
`:202`, `:572`, `:607`) which, now that `owns` has been swept out of that file, is a term of art
with no referent on the page — two of them do not name the document in the same sentence at all.
⚠️ **Do not sweep the ordinary-English uses**: *"the weak-side defenceman owns the goalmouth"*,
*"the goalie owns the shooter"* are hockey, not the project idiom.

**⬜ A sweep that rewrites 78 ownership pointers is the moment to re-check what they point at.**
`content-reviewer` verified 7 of the 78 targets both ways and said so. `review_history.md` §3.7 is
why this matters: thirteen documents once pointed at `special_teams.md` for a rule it had never
mentioned. The other 71 are unchecked.

**⬜ Four verified rule-set divergences the corpus states as universal.** `rules-verifier` read all
four books for these in round 41; **the numbers below are verified against primary text**, so this
item needs writing, not researching. Each is in a ` ```facts ` line — the layer read aloud without
context — and each is right for the NHL and wrong or incomplete for somebody.

- **Faceoff encroachment ejects the centre — under the NHL and USA Hockey, not the IIHF.**
  `center.md`'s block says *"their encroachment ejects you, not them"* with no book. NHL 76.6
  (`nhl_rules.txt:8133-8136`) and USA Hockey 613(d) (`usah.txt:3953-3959`) both eject the centre;
  **IIHF 76.6** (`iihf_rules_v1.0.txt:6277-6278`) gives only *"a warning for a face-off violation"*,
  with the bench minor arriving at 76.7 on the second. It is a **three-way** split, not a binary,
  and `center.md`'s own banner tells British readers the IIHF flags are theirs. The body has it
  right; the block does not.
- **The shorthanded-icing carve-outs are not universal.** `defensive_zone_coverage.md:577` says
  *"two carve-outs apply under USA Hockey and the NHL"* and leaves a British reader to assume they
  are among them. **IIHF 81.6 has no major-penalty carve-out at all** — the NHL's third paragraph
  is simply absent (`iihf_rules_v1.0.txt:6709-6721`, confirmed unchanged in v1.1) — and **Hockey
  Canada 6.7(b)** (`hc.txt:5055-5057`) grants the exemption with no classification limit and no
  carve-out whatsoever. `faceoffs.md:923` already discloses the IIHF gap correctly and is the model.
- **"Cannot take a timeout" after icing is NHL and IIHF only, and Hockey Canada contradicts it
  outright.** NHL 87.1 (`nhl_rules.txt:9397-9400`) and IIHF 87.1 confirmed. **USA Hockey imposes
  neither restriction** — established by reading Rules 204, 624 and 636(f) in full rather than by a
  failed search. **Hockey Canada 6.7(d)(iii)** (`hc.txt:5117-5119`) *expressly permits* the time-out
  after an icing and bars only the substitution during it, and its no-change regime applies only to
  *"U18AAA, Junior, and at the option of the Member in Senior"* (`hc.txt:5089-5091`). Consequence is
  a forgone rest, not an injury — low priority, high certainty.
- **A quotation was silently repaired inside quotation marks.** `faceoffs.md:276` and `:294` quote
  NHL 76.7 as *"When at least two face-off violations…"*. The book reads **"When a least two"**
  (`nhl_rules.txt:8151`) — a typo in the NHL's own text. Substance is unaffected; the corpus's rule
  is that a quotation is verbatim or marked.

⚠️ **None of this is a deletion case.** Every divergence runs toward the corpus over-warning, so a
reader who obeys the text is safe and merely surprised. Non-negotiable 3's test is not met.

⚠️ **The USA Hockey Casebook is still not on disk**, so no official interpretation was checkable for
any of the four. That bears hardest on the USA Hockey time-out negative, which rests on rule text
alone.

**⬜ MA26 — a mis-splice that reads smoothly would still pass everything.** Round 37's CR15
was caught only because the join lost a space. A block landing in the wrong paragraph that
happens to read grammatically survives every pass now run.

**⬜ MA19 / §6d — the glossary does not read as a list.** `site-reviewer` saw it in Chrome:
the entry head and the bold *inside* an entry are **computationally identical** — same
weight, size, colour, family, display. Needs a CSS or plugin change.

**⬜ A review record credits a review that did not happen.** `round_35_readability.md:109` credits `rush-gap-and-angle`'s review to §14 of the round-34 record, where it appears nowhere. The diagram has since been properly reviewed, so the picture is fine — **the false credit is not.** A record claiming a review that did not happen is worse than one admitting a gap.

**⬜ MA20 / §8c — two diagrams have no accessible name.** (The round-37 record says *"two of 113"*; `diagrams.json` and the built SVGs both count **112**, so the denominator is stale — the finding itself stands.) Belongs to the diagram

**⬜ Site minors m5–m8.** No ToC scrollspy (**absent, not broken** — round 38's site pass confirmed
it again); one unnamed `<nav>` landmark; Pagefind uses the browser-default `<mark>`, bright yellow in
both themes, readable but not palette-aware; and **236 empty `<p></p>` in the built HTML**, measured
as having no visible spacing effect.

**⬜ Minor 9 — both quoted-placement lists in the review records are wrong.** Enumerating
`![](diagram:…)` against each manifest `owner` gives **six** quoted placements. A record that
miscounts is the thing `review_history.md` is reconstructed from.

**⬜ Diagrams for the three undiagrammed glossary sections** (§1, §4, §7), and the orphaned diagrams
page still needs linking.
workstream.

**⬜ MA25 — `rules_primer.md` §§7–9 have never been read by any reviewer.** ~170 lines
covering the crease, goaltender interference, screening, the trapezoid penalty, freezing the
puck and the faceoff spots. Comparison-table rows 722, 723, 725, 726, 733 and every USA Hockey
cell are likewise unverified. **In the sections that were read, findings ran at about one per
fifty lines.**

**⬜ The ducking proposition across the corpus.** Round 38's first critical was the scope error
commit `5b82c18` exists to remove, reintroduced. `body_contact_and_battles.md`, `skating.md`,
`winger.md`, `defender.md`, `zone_entries.md` and `puck_handling.md` all carry ducking or
head-contact material and **none was opened**. It is a proposition, not a string, so a grep
for the wording will not find it.

---

## Tier 4 — Evidence base

**⬜ A handling-the-puck row for `rules_primer.md` §10, written as a spec so the next round does
not compose it from memory.** The table has no row for it, and round 43 deliberately did **not**
add one: it would be a new multi-book claim in the corpus's densest summary table, in a commit
already four review rounds deep, with no reviewer on it — and §10's cells are exactly the shape
that generated this round's divergences. The divergence is already served in the body at `:399`
and in Common Mistakes at `:786`, so the table's silence is an omission rather than an error.

**The spec, verified against `sources/` in round 43 — compose the row from this, not from a
recollection of it:**

- **NHL and IIHF 67.2** — closing the hand on the puck is a **minor**. Not a faceoff violation in
  any book.
- **NHL and IIHF 63.2(v)** — deliberately falling on or gathering the puck into the body is a
  minor, with the NOTE's shot-blocker carve-out (*"if the puck is shot under him or becomes lodged
  in his clothing or equipment"*) and its sting (*"any use of the hands to make the puck unplayable
  should be penalized promptly"*).
- **USA Hockey 618(a)** — a closed hand not immediately dropped is a **stoppage and last-play
  faceoff**, not a penalty; the minor attaches to *picking the puck up off the ice*; **in the
  crease** it is a penalty shot or optional minor, and an **awarded goal** on an empty net.
- **USA Hockey 614(a)** — the body smother is still a minor there.
- **Hockey Canada 10.2(a)(iii)** — the closed hand is a minor only where the player *"by doing so,
  gains an advantage"*, expressly excluding an immediate drop.
- **The crease determinant, NHL and IIHF 63.6** — the **puck's** location decides, not the
  player's. **USA Hockey 614(b)** fixes the same moment (*"at the moment the infraction occurs"*)
  and offers the non-offending team an **optional minor** in lieu under **406(a)**; **Hockey Canada
  10.2(a)(v)** locates it by where the *infraction* occurs instead.

⚠️ **Do not credit the USA Hockey election to a "One Pass rule"** — that is a **Blind Hockey** rule
(`usah.txt:6559`) and the glossary gating on it sits in the Disabled Hockey chapter. Round 43
recorded it wrongly once and caught it at the gate.

**⬜ The facts-block count cap is deciding what readers are told, in 19 blocks.** Measured in
round 43 across all 26 documents, 773 blocks, 4,605 facts: **19 blocks sit at the hard maximum of
11 with zero headroom**, 17 more at 10, and **58 at the coaching cap of 8** — which can still take
a `Rule:` but not another `Action:`, `Read:` or `Never:`. **Length is not the binding constraint
anywhere**; the longest fact in the corpus is 298/300. It is the count.

Twice in round 43 the cap chose the content: a rule exception could only be added by merging two
`Read:` facts, and then only by deleting a `Never:`. **A cap must never evict a rulebook fact**,
and the pressure runs that way.

**The remedy is in the style guide already** — *"more than 8 and the section is probably two
sections"*. `center.md` §Faceoffs is the worked example and the place to start: it carries three
unrelated rules topics — handling the puck at a draw, encroachment and ejection, stick-placement
order — on top of five coaching facts, and **its body is already in those halves** (the
"Key principles by location" bullets, then the "So:" rules bullets). Split it into
`### Faceoffs — winning the draw` and `### Faceoffs — the rules that decide who takes it`.
⚠️ Until that is done, `center.md`'s two zone `Read:` facts are merged into one and the second
half has lost its verb. That is a real loss and it is recorded as one.

The at-max blocks, so the next round does not rediscover them: `center.md:316`, `:377`, `:437` ·
`defender.md:9`, `:65`, `:105` · `on_ice_communication.md:109` · `puck_support_and_spacing.md:376` ·
`goaltender.md:511`, `:919` · `breakouts.md:418` · `defending_the_rush.md:533` ·
`forechecking_systems.md:465` · `offensive_zone_play.md:689` · `special_teams.md:617` ·
`body_contact_and_battles.md:389`, `:421`, `:1012`, `:1060`.

**⬜ No USA Hockey Casebook is on disk, and every USA Hockey verdict in this corpus rests on rule
text alone.** `ls sources/ | grep -i case` is empty. USA Hockey's Casebook is the normal authority
for its interpretations, and `rules_primer.md:397` already discloses the gap for one claim —
*"its separate Casebook is not among the texts checked here"* — while the gap in fact applies to
every USA Hockey claim in the corpus. Round 43's `rules-verifier` named fetching it **the single
highest-value action for the next round**, and it was reached in that round for the crease and
faceoff questions specifically, where rule text alone left four verdicts unsupported by any
interpretation.

⚠️ **Hockey Canada files interpretations by rule number, so grepping the offence name misses
them.** Round 43 found HC Interpretation 5 to Rule 10.2(a)(v) — which rules on the exact
puck-in-the-crease fact pattern the round propagated — and the stick-lift head-contact clauses at
`hc.txt:7364` and `:7391`, both only by accident, from greps run for something else. **The
reliable method is reading Hockey Canada Sections 7, 8 and 9 end to end**, and nobody has.

**⬜ The stick lift is the corpus's most-recommended technique and its penalty exposure lives in
one document.** `body_contact_and_battles.md` carries *"far less penalty risk … but not none"* in
five layers; `defender.md` and `on_ice_communication.md` carry the below-the-bottom-hand
condition. Round 43 shipped, and then caught, a flat *"it is not a penalty"* in
`defensive_zone_coverage.md`. **Hockey Canada's own naming of the technique as a head-contact
route — the double minor for accidental head contact causing injury, and the major plus game
misconduct for a *"pitchfork action in lifting the stick"* — now appears in exactly one
document**, `defensive_zone_coverage.md:616`, added by the same commit that recorded this item.
It belongs in the technique's **owner**, `body_contact_and_battles.md`, and the placement
condition belongs at every site that recommends the lift.
⚠️ **This entry first said it appeared "nowhere in `content/`" and printed a grep to prove it.**
The grep returned the line the same commit had just added. A stated verification that returns
the opposite of its claim is non-negotiable 5 — caught at the gate, not by running the grep.

**⬜ No KHL rulebook is on disk, and at least 30 reader-facing sites assert a KHL rule without
one — 28 in `content/` and 2 in diagram captions.** `content/` mentions the **KHL on 31 lines
across 17 documents**. **Three lines carry the honest
disclosure, all in `defender.md`** — `:113`, `:131` (*"unverified here: no KHL rulebook was
available to check it against"*) and `:691` (*"on a claim we could not verify against a KHL
rulebook"*) — and the **other 28 state the KHL trapezoid flat, as verified fact**, in `on_ice_communication.md` ·
`rink_map_and_glossary.md` · `rules_primer.md` · `playing_without_the_puck.md` ·
`puck_support_and_spacing.md` · `time_and_space.md` · `how_to_watch_hockey.md` ·
`goaltender.md` · `breakouts.md` · `defensive_zone_coverage.md` · `faceoffs.md` ·
`forechecking_systems.md` · `neutral_zone_systems.md` · `offensive_zone_play.md` ·
`special_teams.md` · `zone_entries.md`.

⚠️ **AND `content/` IS NOT THE BOUNDARY.** Two more flat assertions live in diagram sources and
reach readers as caption text — alt text, EPUB, PDF and speech all carry it, which is this plan's
own round-42 finding three tiers above: `site/src/diagrams/rink_map_and_glossary.mjs:321`
(*"the NHL, the KHL and IIHF play have it"*) and `site/src/diagrams/zone_entries.mjs:657`
(*"it is the NHL, the KHL and the IIHF book"*), plus both as built captions in
`site/src/data/diagrams.json`. **A round that fixes 28 sites and stops at `content/` ships two
captions still asserting it.** The determinant was checked for the same gap and has none.

⚠️ **Round 43's reviewer reported this as "dropped in two documents."** It is sixteen. And the
first correction of it said two disclosure sites and 29 flat ones; the gate re-derived **three
and 28**. The count is recorded here so the next round starts from the real number — under-naming
a scope to the files someone happened to notice, and then miscounting the correction, are now
the fourth and fifth instances across three rounds.

**The repair is a source, not a sweep.** Propagating a hedge to 28 sites is the wrong fix;
fetching a KHL rulebook resolves all 28 at once, and *a 403 is not an absence*. Do **not**
sweep 28 reader-facing sites unreviewed across sixteen documents — that is exactly the
corpus-wide sweep that produced commit `239f70d`. Non-negotiable 4 protects `defender.md`'s
disclosure meanwhile; **nothing may be stripped to make the corpus look consistent.**

Cannot be closed by working harder on what is here.

- **⬜ `usah_case.txt` — the USA Hockey Casebook is not on disk and never has been.** The
  corpus discloses this honestly at `body_contact_and_battles.md:1112`. **That disclosure is
  correct and must not be stripped.** A casebook situation could qualify the USA Hockey half
  of several head-contact and ducking claims.
- **⬜ No NHL PDF in `sources/`.** Round 38 declined a reviewer's offer to resolve the Table 5
  asterisked-cell disclosure for exactly this reason — it could not be re-derived, so it
  stays a disclosure.
- **⬜ The EIHL Casebook** is not on disk and both foundation documents say so.
- **⬜ The NHL text extraction shreds table columns**, so anything resting on row/column
  position is inferred rather than seen.
- **⬜ ~290 citations corpus-wide remain unswept** by `source-verifier`.

---

## Tier 4b — The Johnston & Walter source

Working records:
`johnston_walter_findings.local.md` — **deliberately kept local** — fourteen chapters
already mapped against the corpus — and
[`johnston_walter_validation.md`](../reviews/johnston_walter_validation.md).

⚠️ **The findings file is deliberately untracked, and this is a decision to revisit, not an
oversight.** It carries **33 quoted passages of 40+ characters attributed to the book** with **zero
page citations**, and this repository is public with permanent history. Its own validation plan says
*"Record the agreement; do not import the phrasing."* Short quotation for criticism is defensible;
publishing it uncited and irreversibly is a different act. **To track it, do one of:** add page
locators to the 33 quotations, or paraphrase them and keep the findings. Either preserves everything
of value — which chapters agree with the corpus and where they diverge.

**⬜ Capture the pages the mapping points at, and run the validation checklist against them.**
The route is the Kindle app on Mac plus `screencapture`; page turns are automated.

**⬜ Carry the cross-cutting finding into anything the corpus takes from it** — the book's numbers
are **heuristics, not data**, and any claim sourced to it must say so.

---

## Tier 5 — Terminology and language

**⬜ The team-tactics terminology tranche.** Detail and the source audit:
[`terminology_source_audit.md`](../reviews/terminology_source_audit.md) (tracked — it holds the evidence).
The work, in its own order:

1. **Fetch the outstanding sources** for the four unsourced terms — recording URL, sha256, byte
   count and retrieval date for every PDF, as the corpus does everywhere else.
2. **Write the glossary entries** into `rink_map_and_glossary.md` §8, alphabetically, in the house
   one-or-two-sentence form, with bold cross-references and *"Not the same as"* wherever two terms
   are confusable — **which here is often**: *stretching the defence* vs *stretch pass* vs *wideman
   pass*; *sagging* the tactic vs *sagging zone* the system; *backside* the side of the ice vs
   *backside coverage* the tactic; *pass and follow* vs *give-and-go*.
3. **Then propagate** — the glossary is the worst place for a wrong definition, because every
   document that links to it inherits it.

⚠️ **That plan is stale in one place:** its §3 lists seven terms as having no glossary entry, but
**Outlet, Stretch pass and Walk the line** have since been added, as have **One-touch, Shoulder
check, Net drive and Attack triangle**. Re-derive the list before working from it.

⚠️ **Its own stated gate:** this needs `content-reviewer`, `facts-reviewer`, `source-verifier` and
`commit-gate`, with a record — not because the change is large but because a glossary propagates.
- **⬜ Nine Note-on-Language sections** need the pointer-and-trim. Nine, not eight —
  `neutral_zone_systems.md` uses lowercase *"A note on language"* and a case-sensitive grep
  misses it.
- **⬜ The "quiet ice" conflict**, to resolve rather than paper over.
- **⬜ Glossary diagrams** for §1, §4 and §7; and the orphaned diagrams page needs linking.
- **⬜ 26 passive `owned by`** survive the round-37 sweep, plus the bare-verb form at
  `getting_started.md:619` that `\bowns\b` cannot see.

---

## Tier 6 — Site visibility and reach

Detail, baselines and the verification behind every figure:
[`seo_baseline_and_analysis.md`](../reviews/seo_baseline_and_analysis.md).
**Technical SEO is done and verified** — canonicals, Open Graph tags, JSON-LD `Article`/`WebSite`
+ `BreadcrumbList`, sitemap, compression. Nothing there needs fixing. What follows is reach, not
plumbing.

⚠️ **Sequencing constraint, and it binds.** No `content/` or `site/` change while another agent
is working. Commit `239f70d` exists because a corpus-wide sweep raced a document-level edit and
clobbered it silently. Check `git status` and `git log -1` before starting any of these.

| | Item | Why it is worth doing |
|---|---|---|
| ⬜ **P1** | Push five striking-distance pages over the click threshold | ~1,200 impressions sitting at **positions 13–17**, just below where this site's own pages start converting at 1–3%. `neutral_zone_systems`, `equipment`, `conditioning_and_recovery` and two others. |
| ⬜ **P2** | Build out the concept and terminology surface | **The strategic finding: concepts win, rules lose.** Definition-shaped queries already show and none converts — *"what is the half wall in hockey"* at 19.6, *"forechecking"* at 27.3. This is where the corpus demonstrably beats NHL.com. |
| ⬜ **P3** | Section hub pages | `/technique/`, `/systems/`, `/positions/` and five others all **404** (verified). Building them creates ranking targets *and* lets `BaseHead.astro` emit a full breadcrumb trail instead of truncating to Home → document. |
| ⬜ **P4** | Open Graph images | **No `og:image` anywhere**, and `twitter:card` is `summary` not `summary_large_image`, so every share on Reddit, Discord, WhatsApp or Slack renders as a bare text box. The diagram pipeline can already generate 1200×630. |
| ⬜ **P5** | Attribution block | Content is **CC BY-NC 4.0**, so attribution is *required* — but the footer states the licence without giving anyone a snippet to paste. A "cite this page" block turns the licence into a backlink mechanism. |
| ⬜ **P6** | RSS/Atom feed | `/rss.xml` returns 404. Feeds are how a niche resource gets picked up passively. |
| ⬜ **P7** | The blog, and third-party links | `jamesdbloom_blog` is **private**, last pushed 2014; the repo's `index.html` is byte-identical to what is live, so the repo is genuinely the source of truth. |
| ⬜ **P8** | Outreach | UK clubs and learn-to-play programmes. **Owner sends**; preparation only here. No accounts to be created. |

**Explicitly deprioritised, with reasons** — the rules query cluster (position 40–80 against
NHL.com and Wikipedia is not a closable gap), and FAQ/HowTo structured data (dead as of May 2026).

**Honest expectation, recorded so it is not misremembered:** from a base of **8 clicks**, moving
~1,200 impressions from position 15 to 8–10 plausibly yields a few dozen clicks a month. An order
of magnitude on a very small number, compounding over months — not a switch. **Confounder:** the
northern-hemisphere season starts in September, so hockey queries rise regardless of anything
done here.

**Geography:** North America is **11×** the UK in impressions, and the en-GB/en-US spelling split
is measurably costing rank.

---

## A file that no longer exists

`docs/plan/state_of_play.local.md` was deleted on 23 August 2026. It was **never tracked**, so it
is not recoverable from git, and **three** records cite it — `round_31_the_primers_second_rules_pass.md:189`
and `:468` as *"finding N of the twelve outstanding items in…"*, and
`seo_baseline_and_analysis.md:665`, *"Bing Webmaster Tools was verified per `state_of_play` but not
opened here"*, which is staged in this same commit. Those citations are now permanently
unresolvable, so what it held is
recorded here:

- **The owner's diagram-notation spec** and the two decisions settled on 19 August — both folded
  into **Tier 0b**.
- **A live notation defect**: `pressure` is `{ line: 'plain', end: 'bar1' }` — one bar, which §21.1
  does not define at all — while the corpus means *"checking pressure"* by it. **13 uses.** Tier 0b.
  ⚠️ *(The retired note said one bar was §21.1's SUDDEN STOP. It is not; two bars is. That error was
  carried into this plan and corrected in Tier 0b — this summary of the note's contents is written
  as the note should have said it, not as it did.)*
- **Both owner-set priorities**, including ten live divergences. Tier 0b.
- **Environment facts** — the Chrome refusals, the DevTools route, the concurrent-build hazard —
  folded into the method notes below.

⚠️ **It was very nearly deleted on a wrong description.** It had been characterised as "the round
31–33 narrative"; reading it before deleting found the live defect above. **Read a file before
deleting it, especially one git cannot give back.**

---

## Method notes that cost real time — read before starting

### A caveat in one layer of one document is not propagated — it is anchored

Round 44 fixed the airborne-skate scope in `time_and_space.md` and thought it done. It was in
**eighteen sites across ten documents**, and the repair had reached the body and the `Action:` line
of one facts block while **skipping the `Rule:` line between them**. Round 43 had the same shape at
a section boundary and then a document boundary; round 44 found it at a *line* boundary inside a
single block.

**The corpus already knew the right wording.** `center.md:249` said *"two books of the four"*
before the round started, while `center.md:260` — the same document, one layer down — said
otherwise. So the fix was never a question of research; it was a question of sweep.

**Method that worked, and is cheap:** after fixing a claim, grep the corpus for the *rule number*
rather than the phrasing (`630(a)` here), subtract the sites that already carry the correction, and
read what is left. It found eleven more in one pass. Grepping the phrasing finds only the sites
that phrase it the way you do — which is the paraphrase trap `content-reviewer` caught itself in
this same round.

⚠️ **And check your own edit for the half-fix.** At `rink_map_and_glossary.md:155` round 44 changed
"three rule sets"→"four" in one clause and left the next clause naming one book, so the sentence
counted four and listed three — one line below a site the same edit got right.

### The corpus is 37 documents, and five live files said 36

Round 43 measured the summary layer and found the boundary wrong in the file every agent reads
first. **`content/` holds 37 documents in eight sections**; `CLAUDE.md` said *"36 documents in
seven sections"* in two places, `docs/README.md` and `site_build_specification.md` said 36, and
**this plan's own entry commissioning the next corpus-wide sweep said "all 36 documents"** — so
that sweep would have started from the wrong boundary, one commit after the note above was written
about exactly that.

The 37th, `reading-diagrams/reading_ice_hockey_diagrams.md`, arrived on **31 July 2026** in commit
`f2504ce`. The scope statements were never re-derived after it.

⚠️ **Worse, Tier 0's anchor figure was superseded by the file it cites.**
`corpus_structure_measurements.md` says *"The corpus is 37 documents and 619,227 words"* — and
then, twelve lines below, prints a table reading *"36 documents / 532,518 words / 40.3 hours"*.
Tier 0 quoted the table. Re-measured: **632,107 words, 47.9 hours at 220 wpm** (26 August, on the tree that shipped it). ⚠️ **This first read 630,873 / 47.8 h**, which was HEAD — the corpus before the repairs shipping alongside it. A dated figure in a method note is exactly what a later sweep quotes.
Tier 0's whole argument is that forty hours is six books and a beginner bounces off it — **the real
figure is nearly forty-eight**, so the stale number was understating the case for the work it
introduces.

**Historical review records keep their own counts and are correct as written** — round 21 through
round 33 describe a corpus that genuinely was 36 documents. Only live statements were changed.

### The checker set is chosen from memory, and `check_absolutes.py` is the one that gets forgotten

`scripts/` holds **six** local checkers: `check_absolutes.py`, `check_facts.py`,
`check_geometry.py`, `check_links.py`, `check_secrets.py`, plus
`site/scripts/check-arrivals.mjs`. (`check_external_links.py` is a seventh and is a network pass.)

Round 43 ran five of the six through six commit-gate passes and four reviewers, and
**`check_absolutes.py` was never run** — it was caught only when `.claude/hooks/git-guard.sh`
refused the commit. It found a real defect that everything else had cleared: a penalty tier capped
without naming the book that caps it, introduced by a repair.

**Run all six by name, from this list, not from recall.** CLAUDE.md's "Writing content" step names
three; the hook enforces two on `content/` commits; the gate asks for what the author reports. None
of those is the full set, and the gap between them is where this one lived.

### Record the boundary in the same sentence as the number

Round 43 ran two corpus-wide censuses twice, by deliberately different constructions, to find out
whether measuring twice is worth it. The answer is sharper than "yes":

| Figure | Second method | Result |
|---|---|---|
| Facts-block cap census | `check_facts.py`'s own parser, imported and driven directly, instead of a regex over ` ``` ` fences | **Exact agreement** — 773 blocks, 4,605 facts, 19 at max, 17 at 10, 58 at the coaching cap |
| KHL census | enumerate from the **git index** not a filesystem glob, match case-insensitively, classify by reading each line, and **do not restrict to `content/`** | Exact agreement on every number — **and a scope defect the first could not see** |

**Re-running the same question with a different tool confirmed the arithmetic and found nothing.
Changing the question's boundary found the defect.** Arithmetic has not been the failure mode in
this project; **scope has** — five times in round 43 alone: a record naming five of eleven files, a
reviewer reporting two documents where there were sixteen, a case-sensitive grep that missed every
sentence *beginning* "Lift the stick", a stick-lift fix that stopped at a section boundary inside
a document it had already fixed, and a KHL census that stopped at `content/` while two diagram
captions asserted the same thing.

**So the rule is not "count everything twice". It is: when a census is recorded as a number the
next round will act on, put the boundary in the same sentence as the number.** *"28 in `content/`"*
is checkable and survives contact with a different method. *"28 reader-facing sites"* is not, and
did not.

⚠️ Two corollaries the same round demonstrated. **A tool reporting success is not evidence** — a
patch in this round matched no string, printed success from a neighbouring edit, and left a
corrected ⚠️ sitting above an uncorrected declaration for two further gate passes. And **a number
at a line wrap is invisible to a naive grep**: `29 sites` split across a newline survived three
sweeps for `29`.


- **These extractions wrap lines mid-phrase and hyphenate across breaks.**
  `grep -c 'not covered by the playing rules'` returns **0** on all three IIHF files; the
  phrase spans `iihf_rules.txt:2182-2183`, split as `is not` / `covered`. IIHF 46.9 wraps
  `an auto-` at `:4188` onto `matic` on the next line. **Flatten newlines and de-hyphenate before any phrase search** — a negative
  multi-word grep here is not evidence of absence, and it nearly produced a false
  "fabricated quotation" finding.
- **`git checkout-index` does not materialise `node_modules`.** A site build in such a tree
  dies `MODULE_NOT_FOUND` **while the shell reports exit 0**. Symlink it, and read the log
  rather than the status.
- **A reviewer's quotation is evidence, not verification.** A reviewer supplied
  `2'+2'+5'+GMP` as IIHF 46.4's sanction; the book assigns 46.4 the same `2'+5'+GMP` as 46.3.
  Another flagged a quotation for a missing em-dash the book actually contains. Re-derive.
- **A script that reports a miss has not made the change.** Two false completion claims in
  one session came from reading the summary rather than the report.
- **Bound a Key Takeaways slice on the `---`, not on the next `##`.** The Sources block has no
  heading, so "until the next `##`" runs to end of file — that put a 66-word takeaway at 675
  and the wrong figure reached a review record.
- **Enumerated lists in these extractions are not uniformly formatted.** NHL 23.6's Physical
  Infractions Category puts seven roman numerals on their own line and the eighth,
  `(viii) Kneeing`, on one line with its label — so a regex keyed to the first seven silently
  returns **seven of eight**. Print the raw span before trusting a count derived from a pattern.
- ⚠️ **An isolated build tree that symlinks `node_modules` is not isolated for anything that
  writes there.** `npm run build` runs `clean:cache`, which `rmSync`s `node_modules/.astro` and
  `node_modules/.vite` — through the symlink that deletes the **owner's** caches, and a running
  dev server may want a restart. Regenerable, but say so when you do it.
- ⚠️ **`check_links.py` defaults to `content/` only.** `python3 scripts/check_links.py --quiet`
  returns 0 while saying **nothing** about `project/`, and `git-guard.sh` does not checker-gate a
  commit that stages no `content/` file — so a commit touching only `project/` passes both with no
  link ever checked. Run **`python3 scripts/check_links.py project`** explicitly, and diff the
  broken set against HEAD, because seven breakages there are pre-existing.
- `grep` here is `ugrep` and aborts on complex `-oE`; use Python.

### Environment facts that cost time to rediscover

Carried from a retired working note (deleted 23 August 2026; its live content is folded into this file).

- **The Chrome extension refuses every local address** — **21 refusals across five sessions**,
  *"Could not verify this site's safety category."* D15's sanctioned path is blocked. A site pass
  that relies on it returns **no rendered finding at all**; do not re-attempt `navigate` first.
- **But the page can be rendered.** Real Chrome `--headless=new` on an isolated `--user-data-dir`,
  driven over the DevTools Protocol from Node 22's built-in `WebSocket` — zero packages. Serve
  from `npm run preview` on `:4321` so root-relative CSS resolves. **A `file://` fallback is not a
  valid test.**
- ⚠️ **`site/dist/` goes stale silently, and a stale build is invisible to inspection.** Diff a
  staged-only sentence against the built HTML before trusting any measurement of it.
- ⚠️ **Do not `kill` a PID because `lsof` shows it on your dev port** — that killed the owner's
  actual Chrome once. Check what the process is first.
- ⚠️ **Never start a second `npm run build` while one is running.** Two concurrent trees wedged
  both for 3+ minutes at `build:diagrams`, which drives headless Chrome to rasterise SVGs; the two
  invocations contend and neither finishes.
- **`npm run build` takes over two minutes** (9 PDFs, 9 EPUBs) — background it; a foreground run
  has already blown a tool timeout mid-run.
- **`npm`/`node` are nvm lazy-load wrappers that fail silently and exit 0** non-interactively.
  `unset -f node npm` and put `~/.nvm/versions/node/v22.23.1/bin` on `PATH`. (This is the same
  root cause as the `MODULE_NOT_FOUND`-with-exit-0 trap above.)
- **A WalkMe extension is force-installed by policy on this machine** and injects a script into
  every page — it will contaminate any network check here.
- `sources/iihf_rules.txt` is byte-identical to `sources/iihf_rules_v1.1.txt`; `v1.0` differs.

---

## What the gate now asks that it did not before

**C11** — every reviewer pass satisfying C4–C6 must have read the file **at the content now
staged**; a clearance over superseded text is void. It exists because eleven of round 37's
seventeen criticals were introduced by the repair of a previous one.

**Its terminating rule** — a repair does *not* void a clearance when it is confined to the
finding, re-derived from primary text, and recorded. A repair that **moves, merges, splits or
renumbers** text, or touches a claim the finding did not name, **does**.
