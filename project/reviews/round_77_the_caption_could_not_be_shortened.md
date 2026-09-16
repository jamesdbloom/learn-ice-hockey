# Round 77 — The captions could not be shortened, and the measurement of the tool was the defect

**15 September 2026.** Seven agents, ~220 captions across 28 modules in `site/src/diagrams/`.

The owner set the target: captions of **twenty-five to fifty words**, everywhere, with four things
that must survive the cut — every safety caveat, every rule scope, every hedge, and the deixis rule.
The `describe` field is exempt.

---

## The headline: the target was not reachable, and the reason is structural

| group | captions | words before → after | reached 25–50 |
|---|---|---|---|
| D — goaltender, neutral_zone_systems, forechecking_systems, defender | 32 | 9,553 → 6,714 (−30%) | 0 |
| E — defensive_zone_coverage, playing_without_the_puck, puck_support_and_spacing, defending_the_rush | 31 | 6,340 → 4,728 (−25%) | **1** |
| F — body_contact_and_battles, center, game_management, risk_management, rules_primer, winger | 29 | 10,275 → 6,155 (−40%) | 0 |

**One caption of 92 reached the target.** Group F's median went 336 → 191 words; its longest, 634 → 420.

⚠️⚠️ **THAT IS A THREE-GROUP FIGURE AND IT IS NOT WHAT SHIPPED. The corpus-wide outcome is in *THE HONEST CORPUS-WIDE HEADLINE* below — 188 of 204 captions changed, −37% of the caption layer, and the 25–50 band moving only 11 → 14.** ⚠️ **This pointer exists because TWO OTHER FILES COPIED the "one of 92" figure out of this line and shipped it unscoped — the readability plan, which is a DISPATCH document, and a new tool's docstring. A commit gate caught both.** **A headline without a pointer to its own correction is how a superseded figure travels.**

⚠️ **Three agents working on disjoint files reached the same diagnosis independently, which is the
finding.** A caption cannot be cut to fifty words while carrying a four-book rule scope, or a
safety limb that exists in no host body, or a hedge that must travel with the claim it qualifies.
**The compression is not the work. The routing is.**

### What is actually blocking it, measured

**Safety and rule blocks duplicated verbatim across captions, with no home in a body:**

- The **receiving-posture tail** (*never take contact on the wall with your back to the boards*, three
  prohibitions, the USA Hockey walking-speed line), ~120 words, **byte-identical in `forecheck-pinch`
  and `forecheck-press`**.
- The **604(a)/604(b)/7.3/IIHF 101.1 enumeration**, ~150 words, **identical across four captions** —
  `forecheck-122`, `-131`, `-pinch`, `-press`.
- A **short scope block**, ~90 words, identical across `forecheck-212`, `-212-stacked`,
  `-roles-rotate`, `-2-3-lock`.
- **`defender-step-up`'s charging block**, ~297 words of a 483-word caption, including the
  round-10-shape critical *"Two strides is a safe harbour in no book."*
- **`PINCH_CAVEATS`** in `risk_management.mjs` — ~135 words, *entirely* hedge, coaching choice and
  contact scope, shared by both pinch captions and docblocked *"THE ORDER OF THESE FOUR SENTENCES IS
  LOAD-BEARING."*

⚠️ **AND ROUTING IS NOT A MECHANICAL MOVE, BECAUSE THE BORROWING HOSTS DIFFER.** `how_to_watch_hockey.md`
hosts `forecheck-212` and `forecheck-122` and its prose beside the marker says the body-checking law
*"belongs to Forechecking Systems rather than here"* — **that host is relying on the caption.**
`skating.md` hosts `angle-into-the-corner` and **does not teach cases 2 and 3 at all**: its body names
*"the spread-the-load fallback"* and *"being hit from behind"* and points elsewhere, and its facts block
carries case 1, the duck prohibition and the parallel-skates posture but **NOT "never turn your back to
the boards."** So in `skating.md` that caption is the only voiced place a reader is told not to turn
their back. **Route into the owner AND check every borrowing host, or the cut silently removes the only
copy a reader meets.**

---

## ⚠️ The round's own defect: I measured a regex, not a tool

An agent reported that a `//` comment inside a `caption:` string run ends
`check_caption_negations.py`'s `CAPTION` regex, so the checker scans only a prefix — and asked,
honestly, whether other modules had the same. **I turned that question into a finding.** I lifted the
`CAPTION` pattern out of the script, ran it against raw `.mjs` source, and reported *"408 units, 22 seen
at 0%, 39 more under 90%, 23 of 28 modules affected, 81% of caption characters scanned"*, with
worst-case examples I could name and a paragraph about safety-critical captions going unchecked.

**Every figure was an artefact.** `captions()` at `scripts/check_caption_negations.py:111` calls
`strip_line_comments(f.read_text())` **before** matching. Measured through the tool's own pipeline:
**408 units, 308,981 characters scanned, against a full comment-stripped assembly of 309,027 — a
46-character delta from escaped-quote handling, and ZERO truncated units.** I also checked the one case
the whole-line rule leaves open, a trailing `//` on the same line as a string: **zero in the corpus.**

⚠️ **The fix had been written five days earlier, and its docstring is a better record of the defect than
my report was.** Dated 10 September 2026: *"55 caption/describe blocks in 27 modules carry inline `//`
lines… 50,801 characters — 12.4% of the layer — had NEVER been scanned, hiding 156 hit occurrences."*
It also records the constraint that makes the naive fix wrong — **WHOLE-LINE ONLY, because a caption
containing `https://` loses half its text to a naive strip, and this corpus's captions do carry URLs.**

**The transferable lesson: lifting a pattern out of a script tests the pattern, not the program. Every
guard the program applies before that line is silently discarded, and the result looks rigorous — real
regex, real corpus, real percentages, a severity breakdown.** The check that would have caught it was one
line at the call site, and I wrote two plan rows and a paragraph of consequence before running it.

⚠️ **It propagated before it was caught.** Group F read the claim, reported *"`check_caption_negations.py`
was blind to eight of my captions"*, and **relocated the inline comments in those captions from inside the
`caption:` run to above it** — to defeat a truncation that does not happen. The comments are dated and
still attached, so nothing is harmed; but eight load-bearing comments moved away from the clause they
protect for no reason, and **the next round must not infer from their position that inline comments in
caption runs are forbidden.**

---

## The cross-file check only the coordinator could run

With every agent finished, I extracted all 408 caption and `describe` units through the tool's own
`captions()` and grouped the safety families by sentence.

**"Never turn your back to the boards" appears at 28 sites in 22 distinct wordings; "never duck" at 24
sites in 19.** ⚠️ **Variation is not itself a defect — a caption written for a cycle, a breakout and a
shot block should not read identically.** What the census is for is finding the OUTLIER, and there is one.

### ⚠️ The narrowest statement of the prohibition in the corpus is in the layer that is heard alone

`content/systems/breakouts.md` states it twice, in two scopes:

- **Body, `:518`**, under *"Safety override:"* — *"…head up and chin off your chest — **never with your
  back to the boards, and never duck.** Puck protection never justifies that orientation"*.
- **Facts block, `:507`** — *"Never: Shield with your back to the boards, or duck. Get your skates
  parallel to the boards instead…"*.

Two differences, both running the same way. The facts line scopes the prohibition to **shielding**,
where the body prohibits the **orientation** — a listener receiving a pass, waiting on the wall or in a
battle is not shielding. And it distributes one *"Never:"* across *"Shield …, **or** duck"*, where the
body repeats the negation: *"never …, **and** never duck."*

⚠️ **`md_to_speech` voices each ` ```facts ` line in its own `<p>` with a 300 ms break either side, so the
narrower form is the one heard with no body sentence beside it to widen it.** This is the layer-test
failure `CLAUDE.md` describes: a document-level grep cannot see it, because the body and the block live
in the same file.

⚠️ **AND IT HAS ALREADY PROPAGATED OUT OF THE DOCUMENT.** `site/src/diagrams/breakouts.mjs:734` carries
the comment *"SAFETY. Not composed here: this is the owner's own wording, content/systems/breakouts.md:516"*
— and the wording it copied is **the facts-block form, not the body form**. So `breakout-winger-wall`
reads *"⚠️ Never shield with your back to the boards, or duck."* **Against 20-plus captions across eleven
modules stating the general form, and against its own sibling `breakout-against-1-3-1` in the same file
saying *"never your back to the boards and never duck"*, this one caption is the outlier — and it is the
one that borrowed from the facts block.**

**Pre-existing at HEAD in both files; today's wave did not cause it.** Reported to the agent that holds
`breakouts.md` rather than edited around, with the explicit instruction to refute it first — a
puck-protection section scoping its own facts line to shielding is an argument that has to be answered,
not assumed away.

---

## What the agents caught in themselves that no checker could

⚠️ **Group F's own repair script deleted a field it had been told not to touch.** Its block terminator
looked for a line ending `',`; the line `PINCH_CAVEATS,` does not, so the scan **ran past the end of the
caption and consumed the `describe` field on both pinch specs** — inlining a shared constant whose
docblock says it exists *"so the pair cannot drift apart"*. **`node --check` passed. Re-reading its own
caption text showed nothing.** It was found by a field-and-constant census against HEAD, not by reading;
the file was restored from HEAD and redone by hand, with `PINCH_CAVEATS` still a shared constant,
shortened inside the constant, sentence order unchanged.

⚠️ **Three agents caught regressions only a whole-file diff could see.** Group E had cut *"body between
the carrier and the middle of the ice"* from `rush-gap-and-angle`, leaving only *"on the inside"* — and the
`GAP_CARRIER` comment records that standing on the **boards** side is the error that diagram exists to make
unmistakable. It had also turned *"A picture would have to pick one, so it picks neither and leaves the read
with you"* into *"a picture that picked one would settle the read for you"*, **which reads as a benefit**.
Both restored. It further restored a bare *"35 feet out"* to *"35 feet from the goal line"*, an *"if both
sag"* condition, and a *"make it two on one"* whose antecedent a safety limb below depended on.

⚠️ **Group F caught four negation regressions in its own new text** by running the negation worklist over
it — worst, in `icing-gaining-the-line`, a compression that moved *"not a skate"* directly in front of
*"must make contact with the centre red line"* **and replaced a full stop with a semicolon**.

**Every one of these was found by the agent re-reading its own output, and none by a gate.** `CLAUDE.md`
says a repair is new text and new text has not been reviewed; this round is the evidence.

---

## Briefs refuted

**Sixteen corrections across the three groups.** The ones that would have changed the corpus:

- **`check_absolutes.py` does not ban "always/never/every/the most".** I put that claim in all seven
  caption briefs. It flags **unscoped self-refuting denials of a penalty tier** and understated ceilings,
  nothing else. **Three agents corrected me independently**, and one noted the consequence: a false-universal
  superlative *"would pass it silently"*.
- **Three caption counts were wrong** — `defender.mjs` has 3 not 4, `rules_primer.mjs` 4 not 5,
  `winger.mjs` 4 not 5. And `center.mjs` has 6 caption blocks of which **only 5 are exported**:
  `centre-crease-the-puck-decides` is deliberately excluded because `puck_handling.mjs` draws the same
  picture under a different owner. **The agent left it untouched rather than edit unreviewed dead spec.**
- **Three negative-existence disclosures I quoted do not exist in the files I attributed them to.** I
  lifted them from a round-53 archive row about `content/` claims. Grep returns zero. The agents found the
  real disclosures and kept them verbatim — including `rush-gap-and-angle`'s, which carries its own
  *"do not compress this back"* note recording that the short form **has already misstated the evidence in
  both directions**.
- **A pointer sentence I attributed to `game_management.md` is at `content/hockey-iq/risk_management.md:533`.**
- **`defensive_zone_coverage.mjs` declares TWO pairs, not three** — its own header says
  *"TWO PAIRS, NOT SIX SINGLETONS"*.

---

## ⚠️ The premise the whole wave rests on is still not true in several documents

The cuts assume *"the prose above the diagram is the text that describes it."* Agents reported, in their
own files, markers still arriving first with the describing prose below: **all six in
`body_contact_and_battles.md`** (`:187`, `:693`, `:1005`, `:1071`, `:1165`, `:1247`),
`defensive_zone_coverage.md` and `puck_support_and_spacing.md`, and sites in `goaltender.md`,
`neutral_zone_systems.md`, `defending_the_rush.md` and `defender.md`.

**Corpus-wide at the time of writing: 331 markers, 113 arriving with zero prose after their heading.**
⚠️ **That is a WORKLIST COUNT, not a defect count — an orientation diagram is expressly permitted to come
first, and the census says so itself.** The second marker pass is running now on four disjoint file sets,
under the owner's relaxed placement ruling: a marker MAY land immediately before a heading or a `---`,
because the gap is handled in CSS, and a formation diagram follows the prose **after the shape sentence**.

---

## Two constraints discovered that are not written down anywhere

⚠️ **`captionNodes()` in `site/src/plugins/remark-corpus.mjs` promotes from the FIRST ⚠️ to the END of the
caption, with no closing delimiter.** A glyph placed mid-caption ambers every non-hazard sentence after it.
Group F placed exactly one glyph per caption, positioned so everything following it is hazard or rule scope,
and removed later redundant glyphs already inside an amber run. **This is a real authoring constraint and it
is recorded nowhere in the style guide.**

⚠️ **The session scratchpad is shared across concurrent agents, and nothing warns you.** Group E's
word-counter was **silently overwritten by another agent mid-task and returned different numbers under a
different output format**; it re-ran everything under a private filename. **Every brief now tells agents to
namespace their scratch files.**

---

## What this round could not have found

**Whether any of it is true.** No agent verified a rule claim against `sources/` — three said so explicitly.
A `rules-verifier` pass on the walking-speed attributions, the checking-from-behind tariffs,
`defender-step-up`'s five-book negative existence claim, and the icing and privileged-area scopes is
running now.

**How any of it sounds.** `md_to_speech.py` was not run on a single new caption. Named risks: the em dash in
`goalie-angle-closes-wide`, the matched-dash pair around *"but never the middle"* in `nz-back-off`,
`forecheck-212`'s *"Two things the picture does not settle:"*, and `oz-low-to-high`'s
*"⚠️ At even strength… — but that caution is an even-strength one"*.

**Whether the amber runs look right.** Group F's glyph reasoning comes from reading `remark-corpus.mjs`,
not from looking at a rendered page.

**`rule69_clauses.mjs`'s docblock says `REFEREE_JUDGEMENT` is the hedge that must travel with ANY structural
reading of Rule 69, and lists three users.** `screen-the-goalie-sightline` makes the structural reading —
*"the sentence that actually disallows a goal requires the attacker to have entered the goal crease"* — and
contains no *"Referee"* or *"judgement"* string. **Pre-existing. A fourth user of the reading without the
hedge, reported and not repaired.**

**One cut is flagged for a second look by the agent that made it:** `support-distance-range` lost
*"on wider international ice check the rink first, because distances scale and angles do not."*

---

## The two worklists run over the finished caption layer

### `check_caption_negations.py` — 408 units, 393 hits, and the top band is six false positives of ONE shape

**6 "most suspicious", 6 "suspicious", 43 "worth a look."** I read all twelve in the top two bands.

⚠️ **All six top-band hits are the same construction, and none of them inverts:**

| caption | the sentence |
|---|---|
| `faceoff-dzone-alignment-other-circle` | "The alignment is a coaching choice, **not a rule** — find out what your team runs." |
| `faceoff-ozone-d-one-timer` | "All of it is a coaching choice and **not a rule of hockey** — find out what your team runs, and what the call is, before your first shift." |
| `nz-1-2-2-containment` | "Every neutral-zone structure is a coaching choice, **not a law** — find out which one your team plays." |
| `defend-squash-and-slide` | "Described publicly of Bruce Cassidy's Boston Bruins around 2018-19, **not a universal system** — find out which your team runs." |
| `oz-cycle-reverse` | "A still picture **cannot draw momentum** — read him as past and unable to stop, and call for it." |
| `entry-middle-drive` | "A still picture **cannot show effort** — read that arrow as full speed." |

**The negation is a PREDICATE NOMINAL — *not a rule*, *not a law*, *not a universal system* — or a
complete verb phrase — *cannot draw momentum*. It closes inside its own phrase, so the imperative after
the dash cannot be pulled under it.** ⚠️ **This is the corpus's cardinal-rule convention working exactly
as designed**, and it is also the tool's largest remaining false-positive family. The script's `RESOLVER`
recognises *so / but / because / which / who / whose / since / though / although*; it does not recognise
that `not a <noun>` has already terminated the scope. **Worth a row, NOT a `--strict`, and NOT a sweep.**

⚠️ **The docstring records that round 70 found EVERY cardinal-rule instruction in `site/src/diagrams/` is
introduced by "so", and that the one site with a bare imperative straight after a dash was the one that
inverted.** These six are bare imperatives straight after a dash. **They are safe for a reason the tool
cannot see, and that reason should be written down before someone "fixes" them into the "so" form.**

### ⚠️ And the negation scan found a defect it was not looking for

`faceoff-dzone-alignment-other-circle` also contains: *"⚠️ What counts as outside is **not the same in all
four books** — **the diagram above** carries that split."* **A four-book rule-scope pointer that resolves by
POSITION.** Found because the negation put it in the top band, not because anything tests for it.

### A deixis scan of all 408 units — 20 positional references, and the marker pass is live

**Six are in CAPTIONS, the layer read aloud to a listener who hears one unit with no context:**
`faceoff-dzone-alignment-other-circle` (*"the diagram above"*), `drive-the-net-after` (*"a beat later"*),
`practice-the-line-and-one-rep` (*"The next picture is…"*), `practice-small-area-in-one-zone` (*"…in the
last picture"*), `lane-jump-anticipation` (*"the next one is the guess"*), and
`forecheck-roles-rotate` (*"the label **beside it**"* — ⚠️ **a false positive: that refers to a label inside
the same picture, not to a neighbouring diagram**).

**Fourteen are in `describe` fields**, which become the SVG `<desc>` on a `role="img"`:
`rush-3-on-2-alternative`, `dz-walk-down-man`, `faceoff-dzone-alignment-other-circle`,
`faceoff-dzone-clean-loss`, `six-on-five-one-point-stays`, `nz-back-off-at-the-line`,
`oz-rotation-one-pass-later`, `oz-cycle-reverse`, `drive-the-net-after`,
`drill-decision-one-defender`, `support-triangle`, `lane-jump-guess`, and two others.

⚠️⚠️ **THE HALF-REPAIR THAT READS AS DONE. Today's caption wave removed the neighbour-pointers from the
CAPTIONS of the paired diagrams and replaced them with naming — the 3-on-2 pair, the stand-up/back-off pair,
the collapse and walk-down pairs. It did not touch a single `describe` field, because `describe` was exempt
from the length target and every agent read that as exempt from the wave.** So those pairs now resolve **by
name in the spoken layer and by POSITION in the screen-reader layer**, and a marker move breaks the second
while leaving the first sound. **An exemption from one rule was read as an exemption from all of them.**

**Three of the four live marker agents hold files containing these**, and each was sent its own list with the
instruction to report rather than edit — the `.mjs` files are outside their ownership and a build was reading
them. ⚠️ **`practice_and_development.md` and `scanning_and_anticipation.md` carry caption-level positional
references and are in NO agent's set**, because the census showed them with zero markers arriving first. **A
document excluded from a marker wave is not thereby safe from one — it is merely unwatched.**

---

## The second marker pass — 85 markers moved, and the audio question answered

Four agents, disjoint file sets, under the owner's relaxed placement ruling.

| agent | files | zero-prose markers before → after | moved |
|---|---|---|---|
| M1 | rink_map, on_ice_communication, goaltender, defender | 28 → 5 | 23 |
| M2 | special_teams, offensive_zone_play, zone_entries, neutral_zone_systems, forechecking_systems | 25 → 1 | 24 |
| M3 | breakouts, faceoffs, defensive_zone_coverage, playing_without_the_puck, puck_support_and_spacing | 27 → 2 | 25 |
| M4 | passing_and_receiving, puck_handling, shooting, time_and_space, defending_the_rush | 15 → 2 | 13 |

**Corpus marker total unchanged at 331 in every agent's before/after**, so nothing was dropped or
duplicated.

#### ⚠️ THE ACCOUNTING ABOVE IS THE AGENTS' AND IT DOES NOT MATCH THE DIFF — corrected by the commit gate

**The table says 85 markers across 19 documents. The staged diff relocates markers in TWENTY-FOUR.** The
gate blocked partly on this and it was right to. Three separate things account for the gap, and only one
of them is innocent:

1. **Diff lines are not markers.** Runs of consecutive markers move as a block, so one fix relocates two
   or three lines. Counting `+` marker lines in the diff gives 162 against the agents' 85. **Both numbers
   are correct and they measure different things** — ⚠️ **which is exactly the trap this repository keeps
   falling into, and this record fell into it too.**
2. ⚠️ **FOUR DOCUMENTS ARE IN NO AGENT'S FILE LIST AND NO REVIEW RECORD NAMES THEM:**
   `rules_primer.md` (3 lines), `risk_management.md` (6), `scanning_and_anticipation.md` (4),
   `game_management.md` (7). **They were moved earlier in this session, before a context compaction, and
   the attribution is lost.** Verified mechanically: **equal insertions and deletions, and ZERO
   non-marker, non-blank changed lines in all four** — so they are marker relocations and nothing else.
   ⚠️ **But "the diff is clean" is not "somebody read it."** A `content-reviewer` was sent specifically to
   be the reader they never had.
3. **`skating.md` shows two marker lines** purely because the safety repair inserted a paragraph above
   them. Not a move.

⚠️ **The lesson is the one this file already records twice: a figure copied out of its owner goes stale,
and an agent's self-report is not a measurement of the diff.** The agents counted what they moved; nobody
counted what was staged until the gate did. **Marker conservation was independently confirmed — 0 added,
0 removed, across all 24 documents.** `check_links.py` exit 0 and `check_facts.py` — 26 documents, 834 blocks, 5,602 facts, all
conform — after each agent's last edit.

⚠️ **Almost no new prose was written in 85 moves.** M1: one word, `above` → `below`. M4: a five-word
deletion. M2 and M3: none at all. **No agent needed a bridging or shape sentence**, because every move
landed after prose the document already had — which is itself evidence that the prose was there all
along and only the marker was in the wrong place.

### ⚠️ ANSWERED: does a marker landing immediately before a heading survive being READ ALOUD?

**Every one of the four agents ended on this, independently, as the thing it could not reach.** M1 put it
best: *"the CSS gap the owner's ruling relies on is purely visual — **it does nothing in audio**. The
relaxed rule's evidence was a `site-reviewer` measuring PIXELS, not a listener."* **Nineteen markers now
land immediately before a heading or a `---`.**

**Measured through the real renderer, on `neutral_zone_systems.md` — the answer is yes, and for two
reasons neither the ruling nor the CSS knows about:**

1. **`md_to_speech` marks a heading with a 700 ms break, and nothing else in the document uses that
   duration.** All 23 occurrences precede a heading. The scale: **300 ms between facts lines, 450 ms
   after a heading, 700 ms before one, 1000 ms at a section break.** ⚠️ **So the owner's requirement —
   *"so that it is clear the next item is a header"* — is satisfied in the spoken layer independently of
   `global.css`, by a margin of 2.3× the ordinary inter-unit break.**
2. **The renderer prefixes every caption with the word "Diagram."** so a caption self-identifies as a
   picture and cannot be heard as the section's opening prose.

**The worst case in the corpus, tested:** `nz-back-off-at-the-line` now sits immediately before the
heading *"Standing up at the line"* — a caption about backing off, voiced directly before a heading about
the opposite option. The rendered sequence is: the framing sentence, *"Diagram. Standing up at your own
blue line: …"*, *"Diagram. Backing off at your own blue line, the answer standing up gives the other
way: …"*, 700 ms, *"Standing up at the line."*

⚠️ **It holds, and it holds BECAUSE OF THE CAPTION WAVE.** Each caption names its own subject in its
opening clause — *"Backing off at your own blue line"* — which is exactly the naming that replaced the
positional pointers this morning. **Had the captions still read *"the same instant as the diagram beside
it"*, this placement would have been unintelligible in audio.** The two workstreams turn out to depend
on each other in a direction nobody planned.

### The breakouts safety line — confirmed, widened, and a hazard I would have shipped

The agent holding `breakouts.md` confirmed the facts-line finding and refuted half my reasoning:

- **My point 1 held, for a reason I had not found:** the block **already** carries a separate
  *"Never: Receive the puck with your chest to the boards"*, so it was not relying on the shield line for
  the general orientation — **it genuinely scoped that line to shielding**, and the body's
  *"Puck protection never justifies that orientation"* had no counterpart in the block at all.
- **My point 2 was right for the wrong reason.** I said *"Never: X, or Y"* fails to distribute. It
  distributes fine. ⚠️ **The real hazard is that heard aloud, *"or duck"* parses as a permitted
  ALTERNATIVE — "shield…, or duck" — rather than as a second prohibition.** Repeating the negation
  removes the ambiguity. **That is a better diagnosis than mine and it changes what the fix has to do.**

⚠️ **AND IT NEARLY SHIPPED A SECOND DEFECT WHILE FIXING THE FIRST.** Its first draft used an em dash:
*"…and never duck — puck protection never justifies it"*. **`md_to_speech.py` rewrites the `Never:` label
as `"Never — "`, so that sentence would have been voiced with TWO em dashes, and the second reads as
closing a parenthetical the label opened** — a listener hears *"puck protection never justifies it"* as
the main clause. It replaced both the dash and the semicolon with full stops. **Found by reading the
renderer, not by running a checker; no tool in this repository would have reported it.**

The caption `breakout-winger-wall` has been widened to match, with the reasoning and the full-stop
constraint recorded in the comment above it, and the comment's stale line-number citation replaced with
a description of the line so the next marker move cannot invalidate it.

### Refutations from the marker wave

- ⚠️ **MY DEIXIS ROUTING WAS KEYED ON THE WRONG DOCUMENT, and an agent caught it.** I sent each agent the
  positional references whose captions its files OWN. `nz-back-off-at-the-line` is owned by
  `neutral_zone_systems.md` and **hosted as a borrow in `defending_the_rush.md`** — so the agent holding
  `defending_the_rush.md` needed the warning and did not get it. It found the hit itself and reported:
  *"A scan keyed on owner document cannot see that a positional pointer has been carried into a second
  document's layout."* **No harm resulted — both agents kept the pair adjacent — but the routing was
  wrong, and a borrowed caption is exactly the case the deixis rule exists for.**
- **A prior agent's named cases were 1-for-2.** `puck_support_and_spacing.md:82/:84` were reported as
  markers at section heads; they already had five prose units above them and were compliant.
  `defensive_zone_coverage.md:31` and `:171/:173` were real and are fixed.
- **`rink_map.md` §5 is written as `### <area>` → `**Where:**` → `**Why it matters:**`, and the
  `**Where:**` line IS the shape sentence** in the owner's formation ruling — the same slot as
  `**The shape:**` in the style guide's worked example. ⚠️ **Thirteen moves rest on that reading and it
  is not written down anywhere.** The agent flagged it: on a glossary-shaped document the style guide's
  *"caption subject == section title → overview → goes first"* test **degenerates**, because every
  `### <named area>` section trivially satisfies it, and applied literally it would have left all fifteen
  markers where they were. **This belongs in the style guide as a worked case, or thirteen moves are
  unjustified.**

### Left deliberately, with reasons on record

**Ten markers were left.** The orientation cases: `defender-pair-overview` (the heading is literally
`## Overview` and the caption is the document's thesis), `oz-home-plate`, `rink-map-end-zone`,
`strong-side-and-weak-side`, `breakout-five-roles`, `faceoff-where-the-draw-goes`, and the style guide's
own worked exception at `rink_map.md:119/:121`, whose prose reads *"The sheet is drawn **here** in **two**
pictures"* — moving either would break the pair and the pointer at once.

⚠️ **One was left for a STRUCTURAL reason worth its own row:** `goaltender.md`'s `the-trapezoid` sits in a
section that runs heading → marker → facts block → **a single 29-line blockquote** → two italic lines →
next heading. **A marker cannot enter the blockquote without fracturing it into two quotes, so the only
alternative position is after everything — the placement the ruling explicitly rejects.** The fix is to
break up the blockquote, which is a content change well outside a marker pass.

### What the marker wave could not reach

**Nobody has seen a rendered page.** Nineteen markers now sit immediately before a heading or `---`, and
that state is legal only because `global.css` ships the `:has(+ h2/h3/h4/hr)` rules. **Every agent read
the ruling that says those rules exist; none saw them applied.** A `site-reviewer` pass is the missing
dimension, and it is now the highest-value work available.

**Whether a caption now duplicates the paragraph directly above it.** Every move deliberately placed a
caption next to the prose it summarises. ⚠️ **M3 named three — `breakout-up`, `breakout-rim`,
`dz-box-plus-one` — that "restate their lead paragraph almost verbatim."** That is the next round's work
and it is the other half of the 25–50 word target: **a caption that repeats the prose above it can be cut
to nothing without loss, and those are the captions where the target is actually reachable.**

**Whether a figure may sit between list items.** Four markers ended at the end of their unit rather than
beside the bullet they illustrate, because no agent would split a list. **Three of the four have a better
home one bullet earlier if the renderer tolerates it, and nobody tested whether it does.**

---

## ⚠️ The routing pass found a CRITICAL, and refuted two thirds of the brief that sent it

The caption wave's blocker is safety material with no home in a body. The first routing target was
`angle-into-the-corner` → `content/technique/skating.md`, briefed from the caption agent's report that
`skating.md` taught neither case 2 nor case 3 and carried no *"never turn your back to the boards."*

**Two of the three claims were wrong.** ⚠️ **Both would have produced an unnecessary edit, and one would
have duplicated material already present in four layers** — the failure a previous round committed when
it ordered a propagation into a file where it was already done in five.

- **REFUTED — case 3 is not caption-only.** *"Spread the load, stick and gloves up on the glass"* is in
  **all four layers** of `skating.md` already. It lives in **§Falling and Getting Up, not §Arriving at
  the boards** — *"which is why a heading-led scan missed it."* Facts at `:574`, body at `:590`, Common
  Mistakes at `:855`, and Key Takeaway 10: *"Falling flat: chin in, hands in. Hitting a wall: head up,
  arms out."*
- **REFUTED — it was not absent from every layer.** Key Takeaway 1 already read *"take it on your forearm
  and hip — not the point of your shoulder, **and never your back**."*

### ⚠️⚠️ And the third claim held in a WORSE shape than the brief described — round 10 inverted

**"Never turn your back to the boards" was present in exactly ONE of four layers — a SUMMARY layer — and
absent from the body, the facts block and Common Mistakes.**

> **The document's Key Takeaway was asserting a safety instruction the document never taught.**

⚠️ **Round 10's signature failure is a correction that reaches the body and stops before the summary
layers. This is that failure running backwards**, and no convention in this repository was watching for
it. A listener to §Arriving at the boards heard the angle, the duck prohibition, the cervical-spine
mechanism, the walking-speed risk and the parallel-skates posture — **and was never told about the
back.** The agent rated it critical on its own scale, and it is the strongest argument yet for the layer
test: a document-level grep sees "never your back" in the file and reports the hazard covered.

**Repaired in three layers** — facts (191 chars against the 200 cap; the block was at
`MAX_COACHING_FACTS` 8 and stayed there), a new body paragraph, and the Common Mistakes fault name and
its instruction tail. **Nothing was removed; no hedge, disclosure or attribution was touched.**

### ⚠️ What it declined to write, and why that is the better outcome

It located *"Even a light hit from behind could inflict a severe head or neck injury"* **verbatim** in
`sources/ibc.txt`, coaches' section 5, and confirmed it is addressed **to the player delivering the
hit** — exactly as the owner document already frames it. **It did not carry it into `skating.md`**,
because a separate agent is verifying that attribution and the walking-speed claim, and `skating.md:109`
already carries the latter with its existing attribution.

**Two things it found in the source and deliberately did NOT use, to avoid manufacturing support:**

- *"Player 'X' should be reminded to try to stay square to the offensive player and to move in and play
  the body (**do not turn your back**)"* — ⚠️ **this is addressed to the CHECKER in a puck-protection
  drill, not to the player meeting the wall.** It is not a source for the instruction it added, and it
  refused to cite it as one. **That is the discipline this corpus is built on: a string that matches is
  not a source that supports.**
- **USA Hockey's "Checked Into The Boards" objective is *"to protect the body when being checked while
  FACING the boards"* — so USA Hockey publishes a position for facing the wall and nowhere prints
  "never turn your back" as its own sentence.** `skating.md:105`'s Sources trailer already discloses
  this. **The instruction is therefore framed in both files as a MECHANISM argument, not as a USA Hockey
  quotation, and it kept it that way.**

### What this unlocks, measured

`angle-into-the-corner` is **403 words**: the geometry-and-case-1 half is **176**, the safety half from
*"⚠️ How you meet the wall"* is **227**, of which **173** run from *"Never take that contact"* to the end.
**Those 227 words are now carried in all four layers of BOTH host documents** — `body_contact_and_battles.md`
§6 already carried every one of them. ⚠️ **So the caption's safety half is now fully redundant and can be
cut, leaving ~176 words — still over target, but a caption about a drawn line rather than a caption doing
a body's job.** That is what routing buys, and it is the shape the remaining four routing targets should
follow.

**Second question answered:** `shot-block-get-close`'s *"Either commit fully and take the shot, or get out
of the lane"* **is** carried by `body_contact_and_battles.md` in two layers — facts `:1279` and body
`:1289`. ⚠️ **Common Mistakes `:1534` carries only the screen half, not the commit-or-clear half.** Minor,
flagged and deliberately not acted on: *"it was outside the brief and I did not want to make an unreviewed
second change."* `defender.md`'s copy remains unverified — it was held by another agent.

### What it could not reach

*"Hazards in `skating.md` whose section headings do not advertise them. I found case 3 already present
only because I grepped for its CONTENT rather than its heading; a hazard with neither an advertising
heading nor a distinctive phrase would have passed me exactly as the back-turn gap passed twenty rounds."*

It also did not re-derive the walking-speed or cervical-flexion attributions, taking them on the owner
document's cited authority as instructed — **so if the verification pass finds a problem, `skating.md:109`,
`:118` and Key Takeaway 1 carry them and its own edits do not.**

---

## The gates and worklists after everything landed

**Build clean, exit 0 — and it re-rendered exactly ONE PNG** (203 of 204 cached), which is independent
confirmation that the `breakout-winger-wall` widening touched nothing else.

| gate | result |
|---|---|
| `check_links.py --quiet` | exit 0 |
| `check_facts.py` | 26 documents · 834 blocks · **5,602 facts**, all conform |
| `check_absolutes.py` | 39 documents **+ 408 diagram caption/describe units** scanned, no unscoped denials — ⚠️ **the caption layer is CERTIFIED against a build made after the last `.mjs` edit**, which it had been refusing to do all day |
| `check_geometry.py` | 77 assertions over 19 named positions, agrees with `rink_map.md` |
| `check_secrets.py` | 325 tracked files, no findings |
| `check_caption_negations.py` | 408 units, 393 hits, top band read — **six false positives of one shape** (above) |
| `check_pointers.py` | no substantive hits; 13 table references suppressed as read-aloud |
| `check_tables.py --near` | **3 dropped, 46 read aloud, 9 near a limit** |
| `check_zones.py` | 204 diagrams · 54 labelled zones · 37 distinct labels |

⚠️ **`check_tables.py`'s figures are now 3 dropped / 46 read aloud, against the "20 dropped against 26
read aloud" that `CLAUDE.md` carried as a stale sentence from the day the tool was introduced.** The
corpus was repaired underneath that line and the line took credit for none of it. **`CLAUDE.md` already
says to run the tool rather than quote it; this is the measurement that proves why.**

### ⚠️ Did the marker wave break the audio chunking? No — measured against HEAD

`check_chunk_splits.py` reports **3 split pairs** — a prohibition ending a chunk with its remedy opening
the next — at `playing_without_the_puck.md 1->2`, `risk_management.md 41->42` and `breakouts.md 73->74`.
**Moving 85 markers changes where chunks break, so these had to be tested against the pre-wave tree
rather than assumed.**

**Extracted HEAD's `content/` with `git archive` and ran the same scan: the SAME three pairs, in the same
documents, on the same sentences.** ⚠️ **The wave created none and removed none.** (The boundary numbers
shift by one in `risk_management.md`, which is the marker moves, not a new split.)

⚠️ **And it improved the layer measurably: total chunk boundaries fell from 2,970 to 2,960.** A marker
moved out of a section head stops starting a chunk of its own and merges into the one already running —
**ten fewer times a listener is handed a caption as an isolated unit.** Nobody predicted this and no rule
required it; it is a side effect of putting the picture after the prose.

**The three surviving pairs are pre-existing worklist items, not this round's work.** The
`playing_without_the_puck.md` one is the sharpest: a chunk ends *"Never turn your back to the wall, and
never duck"* and the next opens *"When the other team has the puck, whether you may use your body at all
is a question about your league"* — ⚠️ **and the prohibition is deliberately scope-independent, so a
league-scope sentence opening the next chunk is exactly the shape that could be heard as qualifying it.**
The prohibition ends the chunk, which is the safe half. **Own row; not opened by this round.**

---

## The rules verification — every claim confirmed, and five completeness defects found beside them

The dimension all three caption groups declared out of reach. Eleven books opened, flattened and
de-hyphenated working copies built before any negative was asserted, **occurrence counts rather than
`grep -c`**, and `grep -E` rather than BRE *"because `.` is a wildcard and manufactures false hits."*

**Nothing was contradicted. No deletion is recommended. Nothing found would penalise or hurt a reader
who acted on a caption.**

### CONFIRMED — the walking-speed claim, and the attribution does NOT run the wrong way

**`walking speed` occurs EXACTLY ONCE in `huh.txt`** and zero times in `usah.txt`,
`usah_casebook.txt`, `ibc.txt`, the NHL books, the Hockey Canada books, both IIHF editions and
`carha.txt`. The sentence, from *Heads Up Hockey*'s *"How spinal injuries happen in hockey"*:

> *"A player doesn't have to be going at full speed for this to happen — it can occur at walking speed."*

⚠️ **The antecedent of *"this"* is the cervical-spine injury described in the preceding five sentences —
the TUCKED CHIN, head-down, head-on collision with the boards or a goal post. It is NOT the hit from
behind**, whose warning is a separate passage sixteen pages later. **All three caption forms attach it to
the head-down mechanism, which is where the book puts it.** Equating *ducking* with *head-down* is the
book's own equation: the passage concludes *"So that's the basis for Rule One of Heads Up Hockey: Heads
Up — Don't Duck!"*

**So the ambiguity I flagged is real in form and harmless in substance** — both limbs of the conjoined
sentence are USA Hockey's, so even the wide reading of *"USA Hockey warns that"* is true.

⚠️ **THE GREPPABILITY TRAP, AND IT IS THE KIND THAT MANUFACTURES A FABRICATION REPORT:**
`grep "light hit from behind" huh.txt` returns **zero** — the phrase wraps after *"Even a light hit"*.
**It is present and verbatim, in TWO USA Hockey publications** (`ibc.txt:1566-1572` and
`huh.txt:719-725`). *"A verifier who greps and stops reports fabrication."*

**Two precision points, neither a falsity:** the two limbs come from **two different USA Hockey
publications**, and the walking-speed limb appears **zero times in the Playing Rules or the Casebook** —
*"a listener hearing 'USA Hockey warns' in a spoken caption will reasonably take it to mean the
rulebook. It does not."* And `huh.txt` is itself restating **Tator et al., Can J Neurol Sci 11:34-41**,
cited immediately under the sentence. **The corpus cites the guide as a restater, which is the correct
posture.**

⚠️ **Of the three caption forms, only `forecheck-pinch`/`-press` is COMPLETE** — it carries the mechanism,
the contact condition (*"head-down, head-on contact with the boards or a goal post"*) and the book's own
verb. The other two drop the contact condition, **which the book makes constitutive.** A compression
loss, not an error.

### ⚠️ CONFIRMED — "Two strides is a safe harbour in no book", attacked in both directions

**The single most exposed claim in the caption layer: a negative existence claim across five rulebooks,
stated in exactly one place.** It survives.

| book | the only thresholds that exist |
|---|---|
| **Hockey Canada 7.4(ii)** | *"Builds up speed by taking **two or more** strides immediately prior to making contact."* |
| **USA Hockey 607 Note** | *"takes **more than two** strides **or travels an excessive distance**…"* |
| **CARHA 52(a) Note** | *"If **more than two** steps or strides are taken, it shall be considered a charge."* |
| **IIHF 42.1** | *"**multiple strides** … **and / or** travels an excessive distance"* |
| **NHL 42.1** | *"as a result of **distance traveled**"* |

⚠️ **Hockey Canada is the direct refutation of a two-stride safe harbour — two strides IS charging
there.** And each of the three books writing *"more than two"* carries a second, independent limb that
reaches a check with no strides in it. ⚠️ **`stride`/`strides` occurs ZERO times in the entire NHL
rulebook** (anchored, occurrence-counted, over the whole 907 KB `-layout` extraction), so the caption's
*"NHL Rule 42.1, no number at all"* is exact.

**Two casebook rulings settle it**, and one is a strengthening citation the caption does not carry:

> **IIHF Situation Handbook 42.1** — *"True or False? Charging can only be applied if a player skates
> three or more strides… **ANSWER False** – there is no mention of the number of strides required."*

⚠️ **The verifier noted how it found that: *"I found it because I was attacking a negative existence
claim, not because the method surfaces omissions."*** The caption argues from rule text alone while an
official interpretation answers the question in terms.

### The tariffs, the icing scopes and the privileged area — all confirmed verbatim

604(a), 604(b), HC 7.3, IIHF 101.1, NHL/IIHF 43.2/43.3/43.5, NHL/IIHF/HC 41.1 and 7.2 *"word for word"*
(**the only difference across the three is the capitalisation of "Player"**), USA Hockey 624(d), NHL/IIHF
81.1/81.2/81.3, USA Hockey 624 Note, HC 6.7(d) and 6.7(e), USA Hockey 607(c)/(d)/(e), 607(d) Note 2,
614(c)(1) and 614(c)(3).

⚠️ **The privileged-area NEGATIVE EXISTENCE CLAIM was attacked rather than confirmed.** Occurrence counts
of `/privileg[a-z]*/i` across five books — NHL 6, IIHF v1.1 5, IIHF 2026/27 5, Hockey Canada 6, CARHA 7 —
**and all 29 were read.** Every one is *"the privileges of the goalkeeper"* or *"the privilege(s) of the
Captain"*; **not one is a region of ice.** Then the CONSTRUCTION was searched independently
(`/perpendicular/`), and every hit is stick-blade curvature or faceoff restraining lines. **Confirmed.**

⚠️ **`trapezoid` occurs 0 times in `usah.txt` and 0 in `usah_casebook.txt`; `restricted area` 0 times in
`usah.txt`.** The caption's *"USA Hockey marks nowhere at all"* is confirmed.

**Edition currency:** every IIHF rule cited — 41.1, 42.1, 42.2, 42.3, 43.1, 43.2, 43.3, 81.1, 81.2, 81.3,
81.4, 87.1, 101.1 — **diffed across 2025/26 v1.1 and 2026/27 on flattened text and substantively
identical.** The diffs that fire are hyphenation and running-header artefacts, *"precisely the failure
`sources/README.md` records."*

### ⚠️ Five completeness defects found beside the confirmations

1. ⚠️ **`angle-into-the-corner`'s *"arms out as a shock absorber"* is UNSOURCED AND CONTRADICTED BY THE
   ONLY PICTURE ON DISK.** The clauses either side of it are verbatim USA Hockey IBC. This one is not.
   **`sources/README.md` says the IBC text layer is not the document, so the verifier rendered
   `ibc.pdf` page 24 at 130 dpi and read Fig. 6 *Protecting Yourself Along The Boards* by eye: both arms
   are BENT AT THE ELBOW**, gloves up at about shoulder height — not extended. **A listener hearing
   "arms out" alone, with a 300 ms break either side, could take it as straight-armed, which is a wrist
   and shoulder loading posture USA Hockey's own illustration does not teach.** Handed to
   `safety-reviewer`.
2. ⚠️ **Six `forechecking_systems` captions say *"the seal against the boards is not available to you"*,
   which is HARDER than either book.** USA Hockey **604(c) Note**: competitive contact *"most often
   occurs when two players are physically engaged… in front of the goal or **along the boards**."*
   Hockey Canada **7.3 Interpretation 1**: *"the defender has the right to **close off the boards**…
   This is legal."* **Errs toward less contact so nobody is hurt or penalised — but two of three books
   publish a carve-out in exactly the non-checking divisions the caption addresses.**
3. ⚠️ **IIHF 81.4 has a FOURTH exception the NHL does not: *"a Player with a broken skate."*** The
   caption's *"but read which ones"* invites the listener to treat its three-item list as exhaustive,
   and under the IIHF it is not. **Mild direction of risk** — a reader declines a substitution they were
   entitled to.
4. ⚠️ **Hockey Canada 6.7(d)(iii) is the OPPOSITE of NHL/IIHF 87.1 on timeouts after icing** — *"Either
   team is permitted to take their time-out… following an icing."* The caption scopes its claim to the
   NHL and IIHF so it is not wrong, **but a Hockey Canada reader hearing "unable to take a time-out at
   all" is hearing a rule that does not apply to them.**
5. ⚠️ **USA Hockey's Glossary defines a DIFFERENT, LARGER shape with a confusingly similar name,
   immediately adjacent:** *"Goalkeeper's Warm-Up Area — the area including the Goalkeeper's Privileged
   Area **extended to include the area formed by a line from each end zone face-off spot to where the
   goal line meets the side boards**."* **That one DOES reach the corners.** The caption's *"but not the
   corners"* is correct about the privileged area; **a reader who looks it up meets both entries
   adjacent.**

### ⚠️ And a gap for one of the corpus's two named audiences

**Nine captions tell the reader to find out which book they are under and then enumerate USA Hockey,
Hockey Canada and the IIHF. The caption layer mentions IHUK 0 times, NIHL 0 times, EIHA 0 times.** For a
British reader **the answer is published and is on this disk**: `ihuk_junior_roc_layout.txt:152-157`
gives the age-group table (U12 full ice **non-checking**; U14 and above **checking**) and
`ihuk_u10_roc.txt:123` says *"Bodychecking is NOT allowed in U10 matches."*

⚠️ **Read the `_layout` extraction ONLY — `sources/README.md` records that plain `pdftotext` reads that
table COLUMN BY COLUMN, so a proximity grep pairs the wrong age with the wrong format.**

**The caption layer is NOT systematically blind to Britain** — the trapezoid captions reach England Ice
Hockey **Rule 22.3**, verified verbatim: *"Goalkeepers' Restricted Area is not currently enforced to
allow ice rinks the necessary time to make the changes to implement this rule."* **The body-checking
captions simply do not reach it.**

### ⚠️ My brief named four rule numbers that are not in the voiced caption layer — reconciled

I briefed **622, 54.1, 8.1(a)** and **603** as cited "somewhere in the caption layer." The verifier found
**zero occurrences of all four**. ⚠️ **It was right, and the reason is this round's own work:** group F
cut the four-book holding/pinning passage out of `corner-escape-routes` that morning. I relayed the
numbers from its report **without noticing they described the text it had REMOVED.**

**Checked, because a lost four-book scope would be a defect:** at HEAD the caption layer carried
`622`×5, `622(a)`×3, `54.1`×3, `8.1(a)`×2, `604 Note 1`×1; the remaining raw-file occurrences are **in
comments, not in voiced caption text.** ⚠️ **`corner-escape-routes` is hosted ONLY by
`body_contact_and_battles.md`, and that document carries all four in its own body and facts layers —
`604 Note 1` at `:427` as a `Rule:` line.** **No scope left the corpus. The cut was safe, and group F's
claim that the host already carried it holds.**

### What the verification could not reach

*"I verified that each caption's rule text matches the book. **I did not verify that the rule is the
right rule to cite for the play the diagram draws.** A caption could quote 604(a) perfectly while the
picture shows a situation 604(a) does not govern; nothing I did would see that, because I never looked
at a diagram."*

*"**I could not detect a rule that is missing.** My method is 'take a claim, find it in a book.' A
caption that teaches a technique whose governing rule it never mentions — the commonest defect class in
this corpus — is invisible to it."*

*"**I could not check the captions against each other.** Four wordings of one claim exist because four
agents wrote them. I verified each against the books independently; I did not test whether a listener
meeting two of them in one session hears a contradiction. **The corpus has already shipped exactly that
defect once.**"*

**Two negatives rest on absence in an extraction**, defended with flattened copies, occurrence counts,
`grep -E`, `\b` anchoring, reading every hit and a positive control in each book's own house word — but
*"USA Hockey attaches no substitution restriction to an icing"* and *"privileged area appears in no other
book"* are named as **the two claims most likely to be wrong**, and neither can be proved by grep.
`hc.txt`, `carha.txt` and `eih_rr.txt` were trusted without independent re-extraction.

---

## The browser review — the ruling holds, measured by ablation, and my list was nine short

**Chrome 152 headless over the DevTools Protocol.** ⚠️ **The Chrome MCP extension refused every
navigation to localhost — *"Could not verify this site's safety category"* — across five attempts on
both `localhost` and `127.0.0.1` and both ports.** CDP gives real layout, computed styles, key events
and screenshots; what it costs is a windowed profile's scrollbars, extensions and user styles.

**Build passed and the chain reached its eleventh step** — `check:links`: 53 pages, 10,708 internal
links, 5,710 with anchors, all resolve. **All 49 pages, all 331 figures, in four cells** (1440×900 and
375×812 × light and dark).

### Every heading-adjacent figure matched a rule. None fell back.

**44 px before an `h3` or an `hr`, 40 px before an `h4`, byte-identical in all four cells** (the rules
are in `rem` and the root stays 16 px at 375). ⚠️ **Only the `p:empty` variants fire; the bare
`h* + figure` variants match nothing, exactly as the CSS comment predicted.**

⚠️ **It proved CAUSATION rather than reporting `matches()` — it removed the four `margin-bottom`
declarations from the live stylesheet and re-measured:**

| rule | with | ablated | **what the rule buys** |
|---|---|---|---|
| `:has(+ … h3)` | 44 | 32 | **+12 px** |
| `:has(+ … h4)` | 40 | 32 | **+8 px** |
| `:has(+ … hr)` | 44 | **40** | **+4 px** |

Baselines: figure → paragraph **32 px**, ordinary paragraph → h3 **32 px**, and inside a figure,
diagram → caption **9.6 px**.

### ⚠️ MY LIST WAS NINE SHORT — 28 heading-adjacent figures, not 19

**Five `hr` cases, not two. Three `h4` cases, not one.** The nine I missed:
`playing_without_the_puck` ×2, `risk_management`, `how_to_watch_hockey` ×2,
`practice_and_development` ×2, `defensive_zone_coverage`, `faceoffs`. **All measured, all matched,
all 44/40.**

⚠️ **The cause is mine and it is the session's recurring one: I ran the scan over a HARDCODED list of
the fourteen documents I believed the wave had touched, and I ran it before the fourth marker agent
had finished.** So it excluded that agent's five files entirely, plus three documents no agent
touched. **A census keyed on "the files I think changed" rather than on the corpus is not a census** —
and this is the third time this session a measurement of mine has been scoped to the wrong set.

### Is the heading unmistakably a heading? Yes — and the gap is the WEAKEST cue

- **h3 is 19.2 px / 700 in near-black (16.5:1); the caption is 14.4 px / 400 in muted grey (6.2:1);
  body prose is 17 px near-black.** The caption is visibly a caption.
- ⚠️ **The ASYMMETRY does the work.** For the `h4` cases: **40 px above the heading, 8 px below** it to
  the list, or **20 px below** to a facts panel. **Nothing reads 40-above/8-below as a continuation of
  what precedes it.**
- ⚠️ **The strongest cases are the ones with a ⚠️ in the caption.** `forecheck-pinch`'s warning renders
  as an amber panel with a left border — **a hard visual edge to the figure**, so the heading below
  cannot be read as caption continuation. Proved by outlining the figure and the heading in the DOM to
  show the panel is *inside* the figure.

**The `####` case I flagged as most at risk is fine, and the hard case holds.** `nz-back-off-at-the-line`
before *"Standing up at the line"* works on the page for the same reason it works in audio, **plus one
cue audio does not have**: the caption *forward-declares* the other option — *"Backing off at your own
blue line, the answer standing up gives the other way"* — and closes on *"Neither answer is the correct
one."* **A reader reaching the heading has just been told it is coming.**

**The `---` cases work:** the rule sits 44 px below the figure and 44 px above the `h2`, exactly
symmetric on all five. **The caption's own internal spacing is 9.6 px, so 44 px is 4.6× anything inside
the figure.**

### ⚠️ Not a lost warning — checked because it looked like one

**All 331 figcaptions carry `aria-hidden="true"`, and 97 of them contain a ⚠️ warning.** The SVG is
`role="img"` with `<title>` + `<desc>`, and **the `<desc>` carries the caption INCLUDING the ⚠️ text
verbatim** — 3,944 characters on `forecheck-pinch`, ending on the USA Hockey walking-speed sentence.
**De-duplication, not suppression.**

### Everything else it cleared

**Zero console messages of any kind** across six pages with `Runtime` and `Log` enabled — zero
exceptions, zero failed loads. **Zero off-origin requests.** **Zero horizontal body overflow on any of
the 49 pages in any of the four cells.** Nine of the 28 heading-adjacent figures are full-sheet; at
375 all 94 full-sheet figures scroll inside their own `role="region"` container, none overflows its
parent, **and the moved markers inside them keep the full 44/40 px gap.** Tabbed in and **ArrowRight ×5
scrolled `scrollLeft` 0 → 200.** Contrast worst values: light 6.2:1 caption, 16.47:1 headings; dark
7.82:1 and 14.74:1 — **no failure in either theme, and dark is higher.** Theme toggle persisted across
a navigation. 14 Tab stops, every one `:focus-visible` with a 2 px accent outline.

⚠️ **The `p:empty` invariant was re-verified as the CSS comment asks:** the current build has **662
literal `<p></p>`, exactly 2 × 331 figures, zero non-figure-adjacent.** `:empty` is still unambiguous.

### Findings, and what was done about them

1. ⚠️ **NO RULE EXISTED FOR `h5` OR `h6`, AND THE FAILURE WOULD HAVE BEEN SILENT.** Not a live defect —
   all 331 figures were probed and none lands there. **But a future marker move into that position
   falls back to the 32 px baseline, which is EXACTLY figure-followed-by-paragraph spacing, and nothing
   would report it** — `check_readability_census` would still say pass. **That is precisely the failure
   the four marker agents each named, parked one heading level deeper than any of them looked.**
   **FIXED:** `h5` and `h6` rules added at `global.css`, with the reasoning in a comment above them.
2. **The `:has(+ hr)` rule buys four pixels and is close to a no-op** — `hr` already carries
   `margin-top: 40px`, so collapse gives 40 without it. **It happens not to matter**, because the
   symmetric 44/44 reads correctly as a divider. **Recorded in the stylesheet as the value to raise if
   an `hr` ever needs to belong to the next section**, so the next person does not raise the h-level
   ones instead.
3. **`:has(+ h2)` is entirely unexercised** — zero figures are followed by an `h2`, because an `h2` in
   this corpus is always preceded by an `hr`. **Correct by inspection, never rendered.** Recorded.
4. **Deep links land in the wrong place and then correct.** At 0.4 s after `readyState:complete` the
   target is **16,266 px below the viewport**; by 3 s it is correctly parked at `top: 127.5`, clear of
   the 56 px sticky header. Same on two other pages and at 375. **The end state is right; on these very
   long pages (57k–94k px) a reader on a slow device sees a visible late jump.** Own row.

### ⚠️ MY BRIEF CONTAINED A CONTRADICTION, AND IT MADE A READ-ONLY AGENT WRITE A TRACKED FILE

I told it *"do not run `build-diagrams.mjs`, it takes six minutes"* **and** *"run the full
`npm run build`"*. ⚠️ **`build:diagrams` is step 4 of that eleven-step chain.** So its build re-ran it
and rewrote `site/src/data/diagrams.json`, which is tracked.

**The agent caught this itself and reported it in full**, including the reasoning that matters:
*"if any `.mjs` was edited between your build and 20:35:23, my run published those captions, and the
next `check_absolutes.py` will certify text I never read. **That is round 59 verbatim.**"*

**Verified by the coordinator rather than taken on trust:** no `.mjs` is newer than the regenerated
`diagrams.json`; the widened `breakout-winger-wall` caption is present in the build product; and
`check_absolutes` certifies 408 units. **The regeneration is consistent and nothing was published
unread.**

⚠️ **But the lesson is the brief, not the outcome. A "read-only" instruction that also says "run the
build" is not a read-only instruction**, because in this repository the build writes a tracked file. **I
wrote both sentences in the same brief and did not notice, in a round whose own review record already
contains two other briefs of mine that were wrong.**

### What the browser review could not reach

**Any browser that is not Chrome 152** — ⚠️ *"Safari's `:has()` on a sibling combinator is the specific
risk here, and Firefox's margin-collapse through a `display:none` element is the other."* **Real devices
and real touch scrolling** on the nine full-sheet containers. **A real screen reader** actually reading
the `<desc>` confirmed only in markup. **The production CloudFront rewrite**, so `/systems/faceoffs`
without a trailing slash is untested where it matters. **Root font sizes other than 16 px** — every one
of these gaps is in `rem`.

**And the gap it named as the largest:** *"I measured that the reader can tell a heading from a caption.
**I did not read a single caption for whether what it says is true**, and three of the nineteen are
captions about body contact."*

---

## ⚠️ The commit gate BLOCKED, and the review it forced found a defect this diff had INTRODUCED

**Verdict: BLOCK.** The mechanical half was clean — `check_secrets` 327 files no findings, `infra/` entirely
absent, `.gitignore` not staged, no half-staged divergence, **0 markers added and 0 removed across all 24
documents**, and `site/dist/technique/skating/index.html` contains the new paragraph, **proving the build
post-dated the last content edit and completed past `build:pdf` and `check:links`** rather than being a
shim false pass.

**The block was about who READ the text.**

- **C6 — no safety review had covered ~220 rewritten captions**, in a layer that is contact, technique,
  injury and penalty material by definition. The gate measured what fell, in **occurrences** against an
  overall text fall of ~5%: **`never` −16, `penalt-` −14, `depends` −8, `game misconduct` −3,
  `match penalty` −3, `"two minutes"` −3, `"coaching choice"` −3, `"a major"` −2, `ejection` −1,
  `suspension` −1, `"not a law"` −1, `"ask your coach"` −1.** *"Every one of those removals may be sound
  deduplication… nothing in the record evaluates a single one of them as a safety question."*
- **C6 — `facts-reviewer` had seen neither of the two changed ` ```facts ` blocks.** *"`check_facts.py`
  passing is the floor, not the review."*
- **C11 — three repairs self-certified.** The `skating.md` critical, the `breakouts.md` facts line and the
  `breakout-winger-wall` caption were each written by the agent that found the defect and read by nobody.
  ⚠️ **This record's own principle, quoted back at it: *"a repair is new text and new text has not been
  reviewed."***
- **C8 — the marker accounting did not match the diff**, and four documents had no owner.

### ⚠️ MAJOR — `breakouts.md`'s widened safety line lost the object of "parallel", and this diff caused it

The rewritten fact reads **`Shield with skates parallel and forearm and hip to the wall`**. ⚠️ ***"to the
wall" attaches to "forearm and hip", leaving "skates parallel" with nothing to be parallel TO.*** Heard
alone with a 300 ms break either side, **the natural reading is "parallel to each other"** — a different
instruction that does not protect anyone. The point of the technique is that the blades run *along* the
wall so the impact travels down the side.

⚠️ **The census that makes it a finding rather than a nit: of all 5,602 fact lines in the corpus, 18 say
"skates parallel" and SEVENTEEN attach the object** — `to the wall` or `to the boards` — across eleven
documents. **The eighteenth is this line, and it became bare in today's edit.** The document's own body
says *"skates parallel **to the boards**"*, and so did the pre-edit fact.

**It is a length-cap casualty:** restoring the object takes the line to **202 characters against a 200
cap**, so the line has to be restructured rather than patched. **Dispatched for repair to an agent that
wrote neither the original nor the review.**

### ⚠️ MAJOR — `skating.md`'s new line asserts a scope whose evidence is absent from the document

The new fact says the turn is dangerous *"at any speed, in any league, checking or not"* and gives two
consequences. ⚠️ **The owner document gives THREE — the third being that the turn CONVERTS THE COLLISION
INTO A HIT FROM BEHIND, and the owner says why that one is load-bearing: *"the warning is written to cover
the light hit, so a slow checker is not the safe case."* That warning IS the evidence for "at any
speed."** `skating.md` carries it in **no** layer; its only occurrence is a pointer telling the reader to
go and read the other document. **So the fact does not over-assert relative to its own body — which means
under non-negotiable 1 the repair belongs to the BODY first.**

⚠️ **AND THE SHARPER HALF: the `Risk:` fact immediately above it carries the WALKING SPEED claim, which is
scoped to the head-down collision and NOT to the turn — a restriction the owner states explicitly, in
terms.** **A listener hearing the two back to back merges them and reaches the right conclusion by an
attribution the owner spends a sentence forbidding.** The block is now at **8 of `MAX_COACHING_FACTS` 8,
zero headroom**, so the consequence cannot simply be added.

### ⚠️ And the correction reached one line and stopped — five siblings survive

The rewrite's rationale — that heard aloud *"Never: X, **or** Y"* parses as a permitted **alternative**
rather than a second prohibition — was applied to one fact. **The identical construction survives in five
others, one of them in the same document.** The acute case is
`playing_without_the_puck.md`'s **`Never: Turn your back to the wall, or duck`** — about forty characters,
**no positive instruction after it**, so nothing disambiguates the *or*.

⚠️ **The reviewer refused to call it a finding, and was right to: *"I have not read its owning section, and
I will not report a finding I did not verify against the section text."*** **Routed to the repair agent
that owns the file, to verify first and only then repair.** ⚠️ **The corpus holds BOTH forms — nine facts
already use the fixed construction — so either the rationale is right and five lines are still defective,
or it is wrong and the edit was cosmetic. That question is now open and it was not open before.**

### Two of my premises refuted, and one of them changes the repair

- **`skating.md`'s block was at SEVEN facts before the edit, not at the cap of eight.** My brief said it
  was at the cap and stayed there. The conclusion — that nothing was traded out — was right **for the
  wrong reason**, and the consequence matters: **the block is now AT the cap with zero headroom**, which
  is precisely what makes the second Major hard to fix.
- ⚠️ **The em-dash collision I briefed as a hazard is the HOUSE NORM, not a defect. 386 of the corpus's
  576 `Never:` facts contain an em dash.** Rendered through the real `md_to_speech.render_facts`:
  `breakouts.md`'s line comes out with **no em dash at all** — the author's swap of dash-and-semicolon for
  full stops worked — and `skating.md`'s second dash **opens a trailing extension rather than closing the
  parenthetical the label opens**, so the negation still reaches the verb. **Not a finding.**

### What it cleared, plainly

**The cardinal rule holds on both lines** — neither is labelled `Rule:`, neither is a rulebook claim, and
`skating.md`'s *"checking or not"* explicitly disavows rule dependence, matching the owner's own
*"at any speed and in any league"* and the house phrasing elsewhere. **It cannot be heard as stating a
rule and carries no attribution, so the Sources-trailer disclosure is not breached.** **Traceability holds
on both.** **No contradiction or gap between the two `Never:` lines in the breakouts block** — one bans
chest-to-boards for a tactical reason, the other back-to-boards for a safety reason, with the positive
answer between and after them. **Nothing was deleted**; every element of the superseded line survives and
the *"Puck protection never justifies it"* override was added.

**And the motivation for the `skating.md` addition checks out independently:** before this diff the
document said *"never your back"* in exactly one place — **Key Takeaway 1, as a four-word fragment inside
the forearm-and-hip clause.** Body, block and Common Mistakes had nothing.

### What the facts review could not reach

*"Whether `body_contact_and_battles.md` is right. I verified both lines AGAINST it as the owner… **I did
not re-verify the USA Hockey material behind it against `sources/`. The one quotation I leaned on I read
in the corpus, NOT in the primary PDF. If that quotation is itself wrong, my Major above inherits the
error.**"* — the repair agent was instructed to verify it in `sources/` before relying on it.

*"An omission whose section body gives no hint it is there… **for `skating.md` the missing consequence was
findable ONLY because I went to the owner document and diffed the three consequences against the two.** A
safety point that lives in neither document would have passed me."*

---

## ⚠️⚠️ THE REAL BLIND SPOT, FOUND ON THE SECOND ATTEMPT — and it is not the one I reported

Earlier today I reported that `check_caption_negations.py` was blind to text after a `//` comment,
measured it, wrote two plan rows about it, and then **retracted the whole thing** when I found
`strip_line_comments()` at the call site. That retraction stands: **that** defect was fixed on
10 September and does not exist.

⚠️ **A content reviewer, sent to read twenty unattributed marker moves, found a DIFFERENT blind spot in
the same function — and this one is real.** It found it because the brief told it to extract captions
with that helper, and it checked the helper's output against the build product instead of trusting it.

**`captions()` assembled a caption from quoted string literals only.** Measured against
`site/src/data/diagrams.json`, **and reproduced independently by me before acting:**

| unit | the helper saw |
|---|---|
| `oz-net-front-screen` caption | **6%** — 2,336 characters invisible |
| `entry-vs-standing-up` describe | 24% |
| `entry-wide` caption | 36% |
| `pinch-centre-high` caption | 44% |
| `pinch-centre-below-the-goal-line` caption | 52% |
| `screen-the-goalie-sightline` caption | 61% |

**10 of 408 units short. 6,624 characters that the negation sweep had NEVER seen.**

### ⚠️ Three separate causes, and the second is the one nobody would guess

1. **An interpolated shared constant ended the run.** ⚠️ **A shared constant is used precisely BECAUSE
   the text is load-bearing, so the invisible text was SELECTED FOR IMPORTANCE.** `PINCH_CAVEATS` in
   `risk_management.mjs` is docblocked *"the sentences both captions must carry, written once so the
   pair cannot drift apart"* — it holds a cardinal-rule hedge and a body-checking scope, **and it
   contains *"no contact is drawn: the pinching defenceman's route ends in two bars"* — a negation, a
   bare colon and a tail. That is the tool's own `SHAPE` pattern, sitting in a constant the tool could
   not read.**
2. ⚠️⚠️ **A DOUBLE-QUOTED STRING ENDED THE RUN, AND THAT IS THE HOUSE STYLE FOR APOSTROPHES.** This
   corpus writes `"the goaltender's eyes"` in double quotes *because* the text contains an apostrophe.
   **So the string most likely to be double-quoted is the one carrying possessive prose about a
   person** — and `oz-net-front-screen`'s caption was seen at 6% for this reason alone, stopping dead at
   its first apostrophe-bearing clause. **This cause was not in the reviewer's report; I found it while
   fixing the first.**
3. **`export const` declarations were unmatched** — `rule69_clauses.mjs` exports the Rule 69 hedges that
   several captions interpolate, so every one resolved to nothing.

### Fixed, and verified against the build product rather than declared

`CAPTION`, `PIECE` and a new `CONST_DECL` now accept both quote styles and resolve constants
recursively across **all** modules (a constant may be imported from a sibling). **Re-measured: 408 units
compared, ZERO short, ZERO characters invisible.** The sweep went from **408 units / 393 occurrences** to
**410 units / 402 occurrences.** ⚠️ **The nine newly-visible occurrences all land in the lowest band —
no new high-severity hit was hiding — but that is a result, not an assumption, and it could not have
been stated before the fix.** `check_caption_echo.py` imports the same helper and inherits the fix.

⚠️ **EVERY MEASUREMENT I TOOK TODAY THROUGH THAT HELPER WAS SHORT BY THESE 6,624 CHARACTERS** — the
20-hit deixis scan, the cross-file safety-phrase census, and the caption-echo worklist. **So was the
safety review of the compressed captions, which used the same extractor.** None of their conclusions is
known to be wrong; **all of them were drawn from 98% of the layer while reporting as if from all of
it.**

⚠️ **AND THE SHAPE OF MY ORIGINAL ERROR IS NOW CLEAR. I claimed a blind spot that did not exist, in the
right function, for the wrong reason — and then, having been wrong once, I did not go back and ask
whether the function had a DIFFERENT hole.** A retraction closed the question instead of reopening it.
**The reviewer that found it was not looking for a tool defect at all.**

---

## The safety review of the compressed caption layer — four Majors, and one refutation of me

⚠️ **It diffed all 205 current captions per-`id` against the same extractor run over `HEAD`**, then
layer-tested seven host documents with a script rather than a grep, and rendered both `md_to_speech` and
`pdftoppm` output rather than reasoning from text.

### Major 1 — `shot-block-get-close` states a hazard with no remedy, and the sentence inverts

*"Nothing in the picture is the technique, and the technique is the half that hurts you."* At HEAD that
sentence **continued** into the technique itself — *"padded surfaces square to the puck, shin guards
front-on, head up and out of the shot lane, hands behind your body…"*. **The list was cut and the
warning kept.**

⚠️ **Heard alone the caption says the technique is what hurts you, never says what it is, and points
nowhere — and three sentences later instructs *"Either commit fully and take the shot or get out of the
lane."*** ⚠️ **The corpus's own negation tool reports this as a hit THAT DID NOT EXIST AT HEAD.** Both
hosts carry the remedy in full, **but in `body_contact_and_battles.md` the caption is voiced BEFORE
it.**

### Major 2 — `net-front-walk-out-direction`: the discounting half kept, the counterweight cut

Now ends *"caution drawn from that hazard rather than a rule anyone writes."* ⚠️ **Seven occurrences of
that clause exist across `content/` and the diagram sources. SIX attach the counterweight in the same
sentence or the next. This caption is now the only naked one** — and what it discounts is USA Hockey
608(b) (major plus game misconduct) and Hockey Canada 7.5(c) (a match penalty). **The tariff is in all
four layers of all three hosts, but in two of the three the caption is voiced BEFORE it.**

### Major 3 — `angle-into-the-corner` lost a sourced Teaching Point and its scope

The cut removed *"Turn your skates parallel if at all possible, because that third case is damage
limitation rather than the position to aim for."* ⚠️ **`sources/ibc.txt:672` is that sentence's source
and it is the FIRST Teaching Point of the very section case 3 describes** — verified by me. **So case 3
now reads as a technique to adopt rather than what is left when turning has already failed.**

### Major 4 — and the `skating.md` repair inherited an attribution its owner explicitly refuses

Covered under the facts review below; both reviewers reached it independently from different evidence.

### ⚠️ It refuted a finding I had already written into the plan and this record

I recorded that *"arms out as a shock absorber"* was unsourced and contradicted by USA Hockey's Fig. 6.
⚠️ **The phrase is verbatim USA Hockey in TWO publications** — `ibc.txt:1482`, `huh.txt:569-570` — from
the *Hitting the Boards* drill, **not the Contact Confidence page whose figure was rendered**, and
`body_contact_and_battles.md:740` already reconciles it by glossing the arms as a shock absorber **that
bends and gives** rather than a locked strut. **I verified both quotations myself. The row is retracted
in `OPEN_ITEMS.md`.**

⚠️⚠️ **THE LESSON IS SHARPER THAN "SOMEONE WAS WRONG." The verifier did everything right — it rendered
an image-only PDF rather than trusting a grep, which is exactly what `sources/README.md` demands, and
its reading of the figure was CORRECT. Then it bounded a phrase by the page it had rendered.** *"Not on
the page I looked at"* is not *"not in the book"* — this repository's oldest rule, reached by a new
route, and one that only appears once you start rendering figures.

### What it cleared, by name

**`breakouts.md`'s facts line — *"cleanest thing in the diff"***: no em dash inside the sentence, agrees
with `breakout-winger-wall`, and the document propagates the counterweight to eleven further voiced
units. **`dz-walk-down-man`, `getting-beaten-wide`, `goalie-safe-outlets`, `goalie-rim-stop-or-clear`,
`corner-escape-routes`, `scan-before-a-wall-reception`, `the-last-player-back`,
`inside-lane-longer-route`, `breakout-wheel`, `pk-box`, `pk-diamond`, `pk-nz-1-1-2`, `pk-nz-1-3`,
`pp-spread-5on3`, the faceoff family, `defender-three-depths`, `dz-the-house`** — all checked
individually; token losses are merged sentences, tactical rather than safety `never`s, or rule detail
whose loss errs toward caution. **Three of them GAINED safety material.**

⚠️ **And a systematic check worth keeping: every current caption was tested for contact-instruction
language carrying no league scope. FOUR hits, all four unscoped at HEAD too, all four prohibitive rather
than instructional. No caption now teaches contact without scope that did not already.**

### What it could not reach, in its own words

*"**Hazards in the ~120 captions with no safety-token change.** My worklist was token-driven, which is
exactly the weakness the round-20 reviewer named: *structurally weak at catching one that says too
little.* **A caption that was already silent on a hazard stayed silent and never appeared in my
diff.**"*

---

## The twenty unattributed marker moves — nineteen sound, one wrong, and the reader found the tool defect

A `content-reviewer` was sent to be the reader those four documents never had. **It read all twenty
relocations and the whole enclosing section for each**, plus 440 lines of the *staged* style guide.

⚠️ **It verified my mechanical claims rather than trusting them:** per-file numstat equal, **zero changed
non-blank lines that are not markers**, marker multiset byte-identical to `HEAD` per file, distribution
3/6/4/7 matching exactly, every marker blank-line-fenced, none inside a blockquote or list. ⚠️ **Then it
went further than I had: it rendered BOTH trees through `md_to_speech` and compared billed characters —
identical in all four documents (185,795 / 88,942 / 555,817 / 215,700). Independent proof that nothing
but order changed.**

**`rules_primer.md`, `risk_management.md` and `scanning_and_anticipation.md` ship.** Several moves are
strict improvements: `risk_management.md:533`'s *"Those two pictures are the same picture twice"* went
from true-at-a-distance to **true-adjacent**, and the two captions now share a chunk where HEAD split
them across two.

### ⚠️ Major — `game_management.md`'s 6-on-5 marker was behind everything it explained, and the move INVERTED a working pointer

The section's shape sentence names the formation word-for-word as the caption does. **The marker sat six
bullets of tactical detail below it**, which the style guide's formation rule rejects in terms —
*"not at the end of the section, which puts the picture behind everything it explains."*

⚠️⚠️ **And the prose points at it. Line 298 ends *"The principles matter more than the diagram:"*.** The
reviewer rendered both trees and measured the consequence:

| | HEAD | staged |
|---|---|---|
| *"principles matter more than the diagram"* | chunk **029** | chunk **028** |
| `six-on-five-shape` caption | chunk **028** | chunk **029** |

**At HEAD the pointer came AFTER the diagram — it pointed backwards at something the listener had just
heard, and it was correct. The move inverted it into a forward reference across a chunk boundary**, and
the nearest diagram the listener has actually heard on reaching *"the diagram"* is `faceoff-goalie-pulled`
— **a faceoff alignment, not the shape.** A pointer resolving to the wrong picture.

⚠️ **FIXED, and by a route neither option in the report proposed.** Moving the marker above the bullets
would have split the colon from the list it introduces; rewording the pointer would have written new
prose. **Splitting the paragraph at its own existing sentence boundary does both jobs and writes no new
words:** shape sentence → marker → *"The principles matter more than the diagram:"* → bullets.
**Verified in the renderer: the caption and the pointer now sit in the SAME chunk, so it points backwards
at the picture just heard, and the colon is adjacent to its list again.** `six-on-five-one-point-stays`
is untouched and still follows `six-on-five-shape` in document order, so its `describe`'s *"the same
6-on-5 shape as the previous diagram"* holds.

### ⚠️ And it caught its own method failing

*"My deixis regex required a sentence to end in `.`, `!` or `?`. It **missed** `game_management.md:298` —
*'The principles matter more than the diagram:'* — **which is Major 1. I found that by reading, not by
grepping.**"* ⚠️ **Any pointer ending in a colon or a dash, or naming the picture's CONTENT rather than
its position — *"the shaded band"*, *"the two players marked"* — is invisible to every scan run this
round, including mine.** **And it read four of the twenty-five changed `content/` documents. The same
class of pointer may have been inverted by the other ~65 relocations.**

⚠️ **It also retracted a finding mid-review rather than shipping it:** it had compared trees with
`check_chunk_splits.py --content`, then discovered **that tool ignores all arguments** — its comparison
was two runs against the same tree. *"I am not reporting it."* **The SSML comparison, which does honour
`--content`, is what it reported instead.**

---

## The facts repairs — both Majors fixed, and the repair agent caught a staging divergence I had created

**`breakouts.md:507`** restructured to **197 characters** against the 200 cap, restoring the object of
*"parallel"* and the *"instead"* its five siblings keep: *"Get your skates parallel to the boards
instead, forearm and hip to it…"* ⚠️ **`forearm and hip to it` buys exactly the characters that
`to the boards` costs.** Nothing dropped. **And it corrected my arithmetic — the naive restore is 201
characters, not 202.** It also found **14 capital-initial `Skates parallel instead` facts the lowercase
census cannot see, four of them object-less in the same way**, and reported rather than touched them.

**`skating.md`** repaired body-first per non-negotiable 1: the new paragraph now carries the third
consequence — the turn converts the contact into a hit from behind — with the USA Hockey sentence
attributed **to the checker** and named to both publications, **and an explicit block stating that the
walking-speed finding is of the head-down collision and not of the turn.** ⚠️ **The facts block was
REORDERED, not extended** — it stays at 8 of 8, the two prohibitions are now adjacent, and the
walking-speed `Risk:` line sits after the duck prohibition it belongs to. Propagated to Common Mistakes
and Key Takeaway 1.

⚠️ **It verified the USA Hockey quotation in the primary extractions rather than relaying it** — and
confirmed the wrap trap first-hand: *"the raw grep fails in both because of line wrapping, as the brief
warned."* **It read `sources/README.md` before quoting**, used the plain `huh.txt` rather than its
`-layout` twin as that file requires, and noted that `ibc.txt` is built on the 2007-09 rulebook so any
*rule* it states may be superseded — *"this is a safety statement, not a rule, and it is corroborated in
`huh.txt`."*

**`playing_without_the_puck.md:285`** — the suspected critical — **confirmed and repaired**: it read the
owning section and found **the body already used the fixed form** *"never your back to the wall, never
duck"*, **so the fact had diverged from its own prose.** ⚠️ **And it declined to add more: it did NOT
import the two-injuries gloss from `switching_positions.md`, because that document's body does not carry
the hit-from-behind consequence and the fact would have over-asserted relative to it.** **Three more
`or duck` facts survive outside its ownership, reported not touched.**

### ⚠️ And the divergence no checker can see — which I created

*"**All three of my files show `MM`.** They were staged before I started, so the index holds the
pre-repair version of every one of them… **a commit now would ship the defects.**"*

⚠️ **I staged those files, then dispatched an agent to edit them.** `CLAUDE.md` says in terms: *stage a
file only when its agent is finished AND will not be resumed — in practice immediately before the gate*,
because **`check_facts.py` and `check_links.py` read the WORKING TREE and `git-guard.sh` gates on those
same checkers, so a commit can pass every mechanical gate while shipping a staged state nobody
verified.** **The only defence is not creating the divergence, and I created it.** Re-staged;
`git diff --name-only content/` is empty again.

---

## The caption repairs — and the repair agent refuted two of the three findings it was given

⚠️ **It built a HEAD mirror and ran TODAY'S tool against it rather than comparing against a figure in a
report.** That is the right method and it caught me relaying an untested claim.

**REFUTED — `shot-block-get-close`'s negation hit did NOT "not exist at HEAD".** The safety review said
the tool reported it as new; I passed that on as corroboration. **It exists at HEAD, in the same bucket.**
*"The comma seam was never the thing the shortening created."* ⚠️ **The finding is still real on its own
merits — a hazard with the remedy deleted from behind it — and it was repaired on those.** But the
corroboration was false, and it was false because **the comparison had never been run against HEAD with
the current tool.** I fixed that tool an hour earlier, which makes every figure in an older report
non-comparable — **and I said so in the brief, which is the only reason it checked.**

**REFUTED — `angle-into-the-corner` did not lose its case-3 scope.** *"The third is what is left when
turning is already impossible"* was present and untouched. **What was actually lost was the first
Teaching Point and the ranking.** Repaired those; **left the scope sentence alone and recorded in a
comment that it never left, so nobody goes looking for it.**

**CONFIRMED, and extended:** the seven-occurrences-six-attached count is exact, with all six sites named;
**both citations verified in the books** — `usah.txt:3724-3727` for 608(b) and `hc_layout.txt:4853-4856`
for 7.5(c). ⚠️ **And "the caption is voiced before the remedy" holds in BOTH hosts, not one** — both put
the marker under the heading and above the facts block.

**And it independently confirmed the "arms out" retraction** by reading both primary extractions itself.

### The repairs

| caption | HEAD | after shortening | now |
|---|---|---|---|
| `shot-block-get-close` | 518 | 314 | **348** |
| `net-front-walk-out-direction` | 539 | 285 | **357** |
| `angle-into-the-corner` | 513 | 403 | **434** |

⚠️ **All three went UP, and that is the correct direction.** The owner's 25–50 target does not outrank a
safety caveat, and this is what the round has been establishing all day: **the caption layer cannot be
compressed further until the material is routed into bodies.**

**Judgement calls it made and declared:** it scoped the restored technique `On your feet:` — **new text,
not restored** — because §11 warns the hands-behind-the-shin-pads form *"belongs to a block taken on the
ice, and the two are not interchangeable"* and the picture draws a standing blocker. It deliberately did
**not** restore the NHL/IIHF *"no minor at all"* limb, because it is a negation and a third and fourth
book in a sentence that takes no count. And it put the Teaching Point **before** the fallback, *"which is
the manual's own order"* at `ibc.txt:672-676`.

⚠️ **It found a comment that had been ASSERTING A PROPERTY ITS OWN STRING NO LONGER HAD** since the
15 September shortening, and re-anchored it. **Nothing in this repository checks that a comment still
describes the text beneath it.**

**Verification:** `node --check` clean; **field-diff against the staged pre-edit version gives
`total leaf diffs: 3, by field: {"caption": 3}`** — no `describe` consumed, which is the failure a repair
script produced earlier today; negation tool **16 → 15**, the shot-block hit gone and no new hits.

### ⚠️ And a stale build product that nearly certified superseded text

The agent reported a build had run concurrently at **21:40:52**, after its last write at 21:39:29, and
reasoned the product was therefore in sync — while noting honestly that *"whoever ran it had not read
what it published, which is the round-59 pattern."*

⚠️ **Checked, and it was NOT in sync: the source file's mtime is 21:42:43, LATER than that build.** The
agent's own reasoning was correct about the write it knew of and wrong about the file, because it
finished editing after it measured. **`find site/src/diagrams -name '*.mjs' -newer site/src/data/diagrams.json`
returned the file.** A `check_absolutes` run at that moment would have certified superseded captions and
passed.

⚠️ **This is the second time today that a build nobody deliberately ran has published text nobody read,
and the second time the `-newer` check is the only thing that caught it.** Rebuilt deliberately.
**`CLAUDE.md`'s rule — `build-diagrams.mjs` must run BEFORE `check_absolutes.py`, and the coordinator
owns the build — exists for exactly this, and it needs the mtime check beside it every time.**

### What it could not reach

*"I checked the negation seams with the tool and by reading; **I did not check PROSODY**, and the module's
own history says the tail that inverted was 'a bare noun-phrase list of postures' — **which is exactly the
shape I just added to `shot-block-get-close`.** That needs a `safety-reviewer` on the rendered audio, not
another read of the string."*

**It also handed back a confirmed layer gap it could not fix:** `body_contact_and_battles.md:701`'s case-3
facts line carries neither *"cannot turn"* nor the damage-limitation framing that its own body at `:730`
carries — ⚠️ **and the facts layer is the loudest voiced one.** And `skating.md:119` hosts the same caption
while its section hands off explicitly (*"Everything after the route you pick into the boards is contact,
not skating"*), **so for that reader the caption is the only inline carrier of cases 2 and 3.**

---

## The render check of the repairs — the feared defect did not reproduce, and a different one did

⚠️ **The Chrome MCP extension refused `localhost` again** — *"Could not verify this site's safety
category"* — so this was headless Chrome 152 over CDP with a dependency-free client. **Second consecutive
review to hit it. It is a row.**

### The worry that did NOT reproduce, and why

The agent that restored `shot-block-get-close`'s posture list flagged its own work: *"the module's own
history says the tail that inverted was 'a bare noun-phrase list of postures' — which is exactly the
shape I just added."* **Read on the page at both widths in both themes, it holds.**

> *"On your feet: padded surfaces square to the puck, shin guards front-on, head up and out of the shot
> lane, feet on the ice, hands behind your body with the backs of the gloves out."*

⚠️ **The colon is what saves it — it announces a list before the list arrives, so each comma lands as a
separator rather than a clause join, and every item is a noun plus one modifier of near-identical
shape.** *"The module's history was about a bare list with no governing colon; this one has one.
Different shape, and the worry does not reproduce."* **Record the distinction: it is the governing colon,
not the list, that decides whether this construction is safe.**

### ⚠️ MAJOR — the amber band opens on a footnote and closes on the warning

Measured extents, identical on every host page, so the plugin is deterministic:

| caption | words | amber words | amber % | verdict |
|---|---|---|---|---|
| `shot-block-get-close` | 348 | 247 | **71%** | **defective** |
| `net-front-walk-out-direction` | 357 | 284 | 80% | passes |
| `angle-into-the-corner` | 434 | 258 | 59% | passes |

**The mechanism is correct everywhere** — amber opens exactly at the glyph and runs to the last
character, `--warn` `rgb(154,74,6)` on `rgb(253,243,231)` with a 3 px left border, inverting properly in
dark.

⚠️ **But in `shot-block-get-close` the glyph sits ahead of five sentences, ~75 words, of pure
drawing-convention prose** — *"Take the ten feet from those words and not off the picture. The marker is
drawn about fourteen feet out, because at ten the two markers would touch and read as a collision…"* —
**all promoted to amber.** That is the plugin author's own stated failure mode, from the comment above
`captionNodes()`: *"Everything before the glyph stays muted caption prose — that half is describing the
picture, and promoting it too would flatten the distinction this fixes."*

⚠️⚠️ **AND THE EMPHASIS IS INVERTED END TO END. The glyph opens on the caption's WEAKEST sentence — a
provenance caveat, *"coaching craft rather than a measured finding"* — while the sentence a reader could
be hurt by, *"the one thing you cannot do is stand half in the way with your eyes closed"*, is ~200 words
further down, in the last two lines of the band.** Dispatched for repair to an agent that wrote neither
the caption nor the review.

**Two further observations in the same caption, both handed to that agent as judgement calls:** a topic
non-sequitur (*"posture checklist → odd-man-rush assignment → back to deflection risk. It connects to
neither neighbour"*), and **247 unbroken words in a single paragraph — 12 lines at 1440 px, 27 at
375 px.** *"Nothing is broken, but it is a wall."* ⚠️ **Explicitly NOT to be solved by cutting safety
material** — that is the routing work, and it is out of a caption editor's scope.

### The gap rules — and the h5/h6 additions are live

| case | computed | measured |
|---|---|---|
| figure → `h3` | 44 px | **44** |
| figure → `hr` | 44 px | **44** |
| figure → `h4` | 40 px | **40** |

**My edit broke nothing.** ⚠️ **And it synthesised the untestable cases in the DOM rather than declaring
them unverifiable** — injecting a `figure.diagram` plus heading into `.prose` and reading computed style,
through both the adjacent and the `p:empty` variant:

**`h2` 52 · `h3` 44 · `h4` 40 · `h5` 40 · `h6` 40 · `hr` 44 · `p` 32 — identical through both variants.**
**The `h5` and `h6` rules fire, and the silent 32 px fallback I was guarding against does not happen.**

⚠️ **Independent evidence that no selector was malformed — which was the real risk of my edit: the
production minifier MERGED the `h4`, `h5` and `h6` rules into one declaration block in the built
stylesheet. A parser that had choked on a selector could not have done that.**

⚠️ **AND IT FOUND SOMETHING I DID NOT KNOW ABOUT MY OWN RULES: every real occurrence in the corpus goes
through the `p:empty` variant — `viaEmpty: true` on all eleven live cases.** So the **bare-adjacency half
of every level** is as unexercised as `h5` was, and the stylesheet's comment flagged only `h2`.
**Recorded in `global.css` beside the rules.**

### The moved marker — pass, with a number

`game_management.md`: the figure sits between the shape sentence and the colon sentence, symmetric at
32 px above and below. **Figure → *"The principles matter more than the diagram:"* is 32 px; colon →
`<ul>` is 18 px.** ⚠️ **The colon binds to its list 1.8× more tightly than to the figure above it**, so
it does not orphan, and *"the diagram"* has the six-on-five figure immediately above with nothing
intervening. **Both readings land.**

### Cleared

**Zero console messages of any kind**, zero exceptions, across every page in both themes. **Zero
off-origin requests from the site** — the single non-localhost request was an enterprise browser
extension injecting into the page, not something the site asked for. **No body-level horizontal scroll at
1440, 375 or 320 px.** Theme toggle exercised for real and persists across a navigation. Deep link lands
clear of the sticky header. One `<h1>` per page, skip link, full landmarks, no `<img>` without `alt`.

### What it could not reach

⚠️ **Search is declared UNVERIFIED rather than passed, and the reasoning is the point:** it drove the
input with a synthetic `input` event and got no result links back in 2.5 s — *"that is as likely my
synthetic event missing the component's listener as it is a real failure. I could not distinguish the two
without the extension, and I am declaring it UNVERIFIED rather than passed."* **An earlier review
reported search working via the extension, so this is a tooling gap, not a regression — but it is
untested today.**

**No browser but Chrome 152, no real device, no real screen reader, and the production CloudFront rewrite
layer untested** — so clean-URL behaviour and real 404 routing remain unverified where they matter.

⚠️ **And the largest, in its own words:** *"I checked that `shot-block-get-close`'s amber band contains
picture-description rather than hazard. I did NOT check whether 'ten feet', 'fourteen feet out',
'twenty-two degrees off parallel', USA Hockey 604/608(b) or Hockey Canada 7.5(c) are correctly stated…
**a caption rendering in perfect amber says nothing whatever about whether it is right.**"*

### ⚠️ `notation.mjs` MADE THE ROUND'S LARGEST SINGLE VOICED-LAYER CUT AND THIS RECORD NEVER NAMED IT

**Caught by the commit gate, which noticed the file appears nowhere in 1,300 lines of record.**
`notation-key` **cut its entire line-symbol legend out of the spoken caption.** The gate checked it and
it is safe: **the diagram is hosted only by `reading_ice_hockey_diagrams.md`, whose own Key Takeaway
voices the full legend — confirmed present in the rendered audio.**

⚠️ **Recorded because a future reader reconstructing this round from this file would not find it.** The
seven caption agents reported per-group and this record was assembled from their reports; **a module
whose agent summarised it in one line disappears from the history entirely.** *"One line in the record
would close it."* This is that line.

### The amber repair — one glyph, no words, and the audio checked by mechanism

**`shot-block-get-close`'s glyph moved from the provenance caveat to *"The technique is the half that
hurts you."*** ⚠️ **No word was cut, added or reordered — the caption strings are character-identical
once the glyph is removed, 348 words before and after.**

**Verified by the coordinator in the BUILT HTML, not inferred:** 348 words total, **201 muted, 147 amber
(42%, was 247 at 71%)**, opening exactly at the technique sentence and closing on the coaching-choice
line, **with the muted half ending on *"Nothing in the picture is the technique"*** — which hands off
into the amber cleanly. All five drawing-convention sentences are muted, as the plugin intends.

⚠️ **AND IT CHECKED THE AUDIO BY MECHANISM RATHER THAN ASSUMING.** `md_to_speech`'s `SYMBOLS` deletes
`⚠` and the variation selector, and the *"Important."* prefix comes from
`_diagram_caption_is_important`, which is **presence-based (`"⚠" in caption`), not position-based.** One
glyph before, one after — **so the spoken output is byte-identical and the amber band is a purely visual
device that does not exist in audio at all.** **That is the check that makes a glyph move safe, and it is
not obvious.**

**The negation worklist is identical before and after** — same 15 occurrences in the same ranks — because
*"the tool's separators are `,` `—` `:`, not the glyph."*

### Two judgement calls it made, both argued from in-file precedent rather than taste

**The provenance caveat stays muted.** It qualifies *"far safer"*, which sits muted two sentences
earlier, and ⚠️ **a hedge rendered louder than the claim it hedges is the wrong way round.** The decisive
argument is the precedent: **`angle-into-the-corner`, which the browser review measured as PASSING, puts
its provenance caveat in the muted half and opens amber on *"How you meet the wall once you are there is
the half no picture can draw."*** ⚠️ **That is the convention, stated: what the picture teaches stays
muted; the half no picture can draw goes amber.** `net-front-walk-out-direction` mutes its
coaching-choice line the same way.

**The two-on-one sentence stays put**, and the reasoning is better than the non-sequitur reading it was
sent to fix: it and *"And from in front of your own goaltender…"* are **the caption's two situational
don'ts in the same parallel construction**, grouped the same way by the host's *"When not to block"*
section. ⚠️ **Moving it below the "eyes closed" warning would bury that warning mid-band and stand the
two-on-one next to *"How much your team blocks at all is a coaching choice"*, where a listener could hear
the coaching choice as scoping it away.**

⚠️ **But it found the real cause of the bad reading and handed it back rather than fixing it: the caption
states the two-on-one as an ASSIGNMENT where the host prices it as a PROHIBITION — `Never: Block the shot
on a 2-on-1`. So the "do not block" is left implicit, and that is probably what made it read as a
non-sequitur.** A rewording, not a placement, and therefore out of a glyph-move's scope.

### The open question it left, stated precisely

*"The muted half, now 201 words and carrying the caption's headline instruction in the faintest text on
the page — **'Blocking from ten feet away is far safer… where a deflection is a goal' remains muted** —
and only a browser can say whether that is right."*

⚠️ **I judge it correct under the convention its own precedent establishes: that sentence is what the
picture DRAWS, so it belongs in the descriptive half; the amber is for the half no picture can draw.**
**But that is the coordinator reasoning from a convention, not a reader looking at a page, and it is
recorded as a question rather than settled.**

---

## ⚠️ The strongest evidence in this round, and the gate produced it, not the waves

The gate answered non-negotiable 4 by a method nobody else used: **it rendered HEAD and the staged tree
through `md_to_speech` and diffed the WHOLE SPOKEN CORPUS.**

**Billed characters fell 2.3% — 6,690,997 → 6,535,450 — while the safety layer held flat or ROSE:**

| phrase | HEAD | staged |
|---|---|---|
| `chin off your chest` | 190 | **190** |
| `head up` | 360 | **360** |
| `forearm and hip` | 146 | **146** |
| `skates parallel` | 155 | **155** |
| `duck` | 157 | **157** |
| `find out which` | 258 | **258** |
| `concussion` | 90 | **90** |
| `hit from behind` | 131 | **138** ⬆ |
| `head first` | 125 | **127** ⬆ |

⚠️ **`never` fell 0.5% against a 2.3% corpus cut — proportionally UP.** **The safety and disclosure layers
were preserved at a higher rate than the corpus average, and two of them grew.**

⚠️ **This is what the earlier token-delta worklist could not tell anyone.** That measurement counted the
CAPTION SOURCE and showed `never` −16, `penalt-` −14, and it was right — **but the caption layer is not
what a listener hears; the whole rendered corpus is.** **A phrase deduplicated out of a caption and
already present in its host's body is a loss in one measurement and no loss at all in the other.** **The
denominator was the finding.**

**And it checked where the cut material went rather than trusting the totals:** `shot-block-get-close`'s
equipment condition and named blocking alternatives are carried by **both** hosts in body and facts.
`notation-key` cut its entire line-symbol legend from the spoken caption — **and its only host's own Key
Takeaway voices the full legend, confirmed present in the rendered audio.**

### It also re-derived what it was told rather than accepting it

**The `angle-into-the-corner` retraction was checked independently** — *"a retraction is the one thing a
record can get wrong in the unsafe direction"* — and confirmed verbatim at `ibc.txt:1482` and
`huh.txt:569`. **The `skating.md` quotation was confirmed present in BOTH books it credits**, so the
provenance holds as written. **Four captions gaining new rule citations were each checked against
primary text:** CARHA 66(a) Note 2 verbatim; NHL 21.1 genuinely needs no injury and names no foul; NHL
56.1 and IIHF 56.1 both carry the *"allowed the ice they are standing on"* clause.

**And it proved the glyph-move audio claim rather than reading the code:** it rendered both trees and
diffed — **the spoken caption is byte-identical across the move.**

### ⚠️ The condition it held the commit on, and it is quoting this record back at itself

**C6: the `On your feet:` posture list is new safety-technique text that no `safety-reviewer` has cleared
at any version.** The gate would not overturn it by reading the string, because **this record says twice
that it should not be** — that the scoping clause was *"new text, not restored"*, and that the list is
*"exactly the shape"* as the tail that once inverted in this module, needing *"a `safety-reviewer` on the
rendered audio, not another read of the string."*

⚠️ **I had been treating that sentence as a declared limitation. It is an unmet condition, and the gate
was right to read it that way.** **A "what this method could not have found" line is not a disclaimer —
it is the next round's scope, and when it names a specific reviewer and a specific surface, it is a
requirement.**

**The gate measured the residual risk rather than asserting it:** the list matches its host at all three
layers, the `On your feet:` scoping is exactly what the host insists on and preserves the hazard it
guards, and the named inversion hazard is mechanically absent — a governing colon, no negation to invert,
and no negation-tool hit. ⚠️ **But mechanically absent is not heard, and the surface at risk is the one
where the colon does not exist.**

---

## The listener — CLEAN, and it answered the question the page could not

**Verdict: nothing critical, nothing major.** The gate's C6 condition is met.

⚠️ **THE DECISIVE FACT IS ONE THE TRANSCRIPT I SENT COULD NOT SHOW: the caption is not the end of its
chunk, and in BOTH hosts the scope is restated within seconds, in the facts layer, in the OTHER
direction.**

- `body_contact_and_battles` chunk **130** runs caption → *"The key facts for this section."* → four
  items → ***"Position. Head up and out of the shot lane, feet on the ice, hands behind your body with
  the backs of the gloves out — tucked in behind your shin pads is the going-down form, not a standing
  one."*** **Same chunk, ~30 s after the caption ends.**
- `defender` chunk **063**, *before* the caption, already voiced ***"Stay on your feet if you can, hands
  behind your body. If you go down… hands behind your shin pads."*** Again in 066, again in Key
  Takeaway 9.

**So the compact leading scope (*"On your feet:"*) and the explicit trailing scope (*"…is the going-down
form, not a standing one"*) are adjacent in each host. Triple-delivered.**

### The five questions

**1 · The list survives as one unit.** ⚠️ **Four of its five items are SCOPE-INVARIANT** — *padded
surfaces square to the puck*, *shin guards front-on*, *head up and out of the shot lane*, *feet on the
ice* are true standing and down — **so detachment is harmless for four of five: each detaches into
exactly its intended meaning and none inverts.** ⚠️ ***"feet on the ice"* detaching is safety-POSITIVE**,
because it is also the clipping cue — USA Hockey 639 Note 2, *"deliberately leaving the feet or lowering
the body for the purpose of making contact at or below the knees"*.

⚠️ **And it tested one I had not named:** if *"out of the shot lane"* detached from *head*, it would tell
a blocker to leave the lane — **a genuine inversion.** It does not: the governing noun is one word ahead,
and the caption has already said *"Read the blocker as one body in the lane"* thirty words earlier.

**2 · *"On your feet:"* is heard as scope, and THE MISPARSE IS SELF-CANCELLING.** The imperative reading
needs the phrase to stand alone; it is followed immediately by a bare noun phrase with no verb to attach
to, and the prepositional reading is the only parse that makes the next 28 words a sentence. ⚠️ **More
decisively: a listener who takes the imperative still does the safe thing.** *"Get on your feet"* points
at the posture the corpus wants. **The failure I feared — scope vanishes, standing-only technique goes
universal — requires the listener to hear an order to stand and THEN apply the list while on the ice.
Those are contradictory states. The misparse cannot produce the harm it would have to produce.**

**3 · The two-on-one is Minor, and LOWER than my plan row implies.** It delivers the prohibition **by
reassignment** — *"your goaltender has the shooter"* says in terms that the shot belongs to someone else.
⚠️ **And the axis matters: what the host's `Never:` protects against is A GOAL, not an injury. The
injury-and-ejection exposure attaches to THE SLIDE, and this caption teaches no slide — its list says
"feet on the ice", the protected side of Casebook 639 Situation 4.** Propagated in every layer of both
hosts, verified item by item. **The plan row stands, at lower severity.**

**4 · Nothing inverts.** *"Either"* opens a disjunction a listener holds open, so *"commit fully"* is
never heard as a bare imperative — it arrives already marked as one of two branches. **Both branches are
about lane occupancy, not body position; nothing says go down.** The negative tail has a finite governing
verb close to its object, *"the one thing you cannot do is stand half in the way"* — **the structural
opposite of the bare-noun-phrase inversion this module's history names.**
⚠️ **And an argument for keeping the sentence that nobody had made: `defender.md` has NO version of it.**
It gives the prohibition and stops. **For a defender-only listener the caption is the only place they are
told what to do instead. Cutting it for length would remove a remedy, not a flourish.**

**5 · The drift window, measured rather than estimated.** 347 words, no internal break, ~2 min 20 s at
150 wpm. **A 75-word, 30-second run of pure notation sits between the announcement and the technique** —
the technique lands at ~84 s, on the far side of it. ⚠️ **But it is not single-delivery**, per the chunk
analysis above. **A structural note, not a finding.**

### ⚠️ Minor it found in text THIS DIFF ADDS — a comment that misquotes the document it cites

The scope comment read: *`defender.md scopes it the same way: "hands behind your body while you are up
and behind your shin pads ON THE WAY DOWN"`*. **`content/positions/defender.md:667` actually says
"ONCE YOU ARE DOWN."**

⚠️ ***On the way down* is a TRANSITION — a player still partly upright. *Once you are down* is a STATE.
And the distinction is the whole point of the paragraph, because reaching behind the shin pads while
still upright is precisely the fold-forward-at-the-waist the corpus forbids.** **A misquotation inside
the comment written to prevent that exact error.**

**It reached no listener and no reader — *"it is a trap for the next agent who pastes from the
comment."*** **Corrected, with the reason recorded beside it.** ⚠️ **The transferable rule: verify a
quotation even when it is only going into a comment. A comment is how these files transmit reasoning
between rounds, and a wrong one is worse than none, because it carries the authority of a citation.**

**Two further minors, both recorded as rows and neither blocking:** the scope marker leads a list whose
only scoped item trails it by 25 words (**if ever touched, the fix is ORDERING, not more words**), and
`content/off-the-ice/mental_game.md:403` states the hand position without saying **behind what** — the
only place in the corpus that does. **Found by luck, not by method, and not pursued.**

### What it could not reach

*"I read SSML and reasoned about how a voice will render a colon, a comma and an *either*. **I did not
hear the audio.** A TTS engine that renders `On your feet:` with a long terminal fall, or clips the colon
to a comma, would shift my answer to question 2 — and a synthesis pass is the only way to know."*

⚠️ **And the sentence this whole round should end on:** *"a correctly scoped, correctly heard standing
block is still a player putting their shins in front of a puck — **no rulebook grep and no prosody
analysis tells you what that costs.**"*

---

## ⚠️⚠️ THE FOURTH BLOCK — the cardinal rule was never checked over the caption layer, and it is MY ROUTING FAILURE

**C3/D7.** ~205 captions were rewritten and **nobody covered the corpus's most common failure mode on
them.** The gate called it *"the round-9/round-10 shape exactly: the round looked hard in several places
and never looked here."*

⚠️⚠️ **AND THE HAND-OFF EXISTED. The `safety-reviewer` FOUND an instance, classified it correctly, and
routed it in writing** — *"Cardinal-rule matter rather than a hazard — passing to `content-reviewer`"* —
**and I never dispatched it.** It sat in a minors list under three Majors while I chased the Majors.

**`CLAUDE.md` names this class in terms: *"The defect is ROUTING, NOT DILIGENCE."*** ⚠️ **Every agent did
its job. The coordinator did not read a hand-off in its own inbox.** That is the fourth distinct routing
failure recorded against me today, and the only one where **the correct next step was written out for me
by the agent that found it.**

### The confirmed instance

`center.mjs :: centre-nz-arrive-behind-the-puck`, single host `content/positions/center.md`.

**HEAD:** *"Which of the three carries, and how strictly the wide lanes are held, are coaching choices
that vary a great deal."*
**Staged:** no hedge of any kind — and it still asserts the arrangement: *"The winger carries wide; the
centre is in the middle lane level with the puck or slightly behind it."*

**Verified by me:** the caption is 86 words and carries no *coaching choice*, no *varies*, no *find out*,
no *ask*. The lines around the marker in the host carry no hedge either.

⚠️ **Two reports disagree about the host and the disagreement is instructive:** the gate read the
enclosing section and found *"nothing in that section hedges who carries or how strictly the wide lanes
are held"*; the safety reviewer said the host carries the disclaimer *"but in a different section from
the figure."* **Both can be true — carried elsewhere, absent where the figure is — and that is exactly
the distinction a layer test exists to make.** Routed to `content-reviewer` to settle.

### ⚠️ How the gate found it, and why the method matters more than the finding

**It rebuilt HEAD's `diagrams.json` and diffed hedges per caption id across all 204 units.** Two captions
lost every hedge; **it then read both and reported one as a FALSE POSITIVE** — `support-triangle` keeps
*"It is not a formation you set up, it is a shape you keep while everything moves"*, which hedges
perfectly without using any of the tokens.

⚠️ **That is the lesson: a hedge-token diff is a CANDIDATE LIST. A caption can lose the words "coaching
choice" and still hedge in other words, and it can keep them while hedging the wrong claim. Only reading
decides.** **The same tool that found the real one also produced a false one at a 50% rate on a
two-item list.**

### ⚠️ And the gate ran two checks nobody asked it for

**It rendered `skating.md` through `md_to_speech`** and confirmed the new paragraph is **chunk 7, one
unit** — *"turning away from the wall feels like protecting yourself"* and *"It is the opposite, three
times over"* are in the same chunk, **with no boundary between hazard and correction.** That is the
`check_chunk_splits` failure mode, tested rather than assumed.

**And it audited `forcing-them-outside`** — the largest safety-token loss in the whole diff (major, match
penalty, game misconduct) — **which this record names ZERO times.** Its single host carries all of it,
**and the tariff is voiced at chunk 19, BEFORE the caption at chunk 26.** Not a defect. ⚠️ **But it is
the second module the gate had to name because this record did not.**

### Two corrections to this record, from the gate

- **This record says `skating.md`'s facts block was *"REORDERED, not extended — it stays at 8 of 8."*
  Against HEAD the net is a PURE INSERTION, 7 → 8, with no line moved or removed.** ⚠️ **The record
  UNDERSTATES what happened, and the truth is the safer shape** — nothing was displaced to make room.
- **The record does not name `project/content_style_guide.md` as a changed file**, though a reviewer
  demonstrably read 440 lines of the staged version. A naming nit, recorded.

### What the gate could not reach, and it is the round's standing scope

*"I am blind to anything already wrong in these files before today — **including the ~120 captions with
no token change at all, where a caption that was already silent on a hazard stayed silent and never
appeared in any diff, mine or the safety reviewer's.**"*

*"I read SSML and chunk boundaries; **nobody has heard this audio**, and `scripts/build_podcast_audio.py`
exists unrun."*

*"**A claim can be correctly propagated, correctly quoted and correctly scoped while its source is
wrong** — I checked two books, not the research behind them."*

---

## ⚠️ THE FIFTH BLOCK — a wrong REASON, which no screen in this round could see

**C4.** `zone_entries.mjs :: entry-three-lanes` now states the wrong reason for being onside.

**Staged:** *"…the two wide players are already on the blue line at speed and the puck is still a stride
short of **it** — that order is the point, and they are onside because **it** has not completely
crossed."*
**HEAD:** *"…onside because the puck has not yet completely crossed, **which is exactly what the
trail-skate drag is for**"* — the clause naming the skate mechanism was cut by compression.

⚠️ **Heard alone, the sentence says players standing ON the line are onside BECAUSE THE PUCK has not
crossed. That is the condition that makes a player who HAS completely crossed offside.** What keeps
these two onside is their own skates.

⚠️⚠️ **AND THE HOST SAYS SO, IN THE PARAGRAPH DIRECTLY ABOVE THE MARKER.**
`content/off-the-ice/how_to_watch_hockey.md:226`: *"…the wide players onside because a skate is still on
the line — **which is the stronger reason of the two, since a skate on or behind the line keeps you
onside whatever the puck does.**"* **The compression kept the reason the corpus labels WEAKER and
deleted the one it labels STRONGER.** And *"it"* now has two referents in one sentence — the blue line,
then the puck.

⚠️⚠️ **WHY EVERY SCREEN IN THIS ROUND MISSED IT, and this is the transferable part:**

- **`check_caption_negations.py` cannot see it** — it is not a negation.
- **The deixis screen cannot see it** — it is not a positional pointer.
- **The safety review's worklist cannot see it** — it carries no safety token, so it never entered the
  token-driven diff.
- **The cardinal-rule sweep cannot see it** — no hedge was lost.
- **`check_absolutes`, `check_facts`, `check_links` cannot see it** — nothing is unscoped, malformed or
  broken.

⚠️ **It is a sentence that is well-formed, correctly hedged, tonally right, and WRONG. Nothing in this
repository detects that class, and the only thing that found it was a reader comparing the caption
against the prose beside it.** **Routed to `rules-verifier` against NHL 83.1 / USA Hockey 630(a) /
Hockey Canada 6.11 before any repair — because the corpus's own two statements disagree and a repair
written from either one would be guessing.**

**Two further blocking items, both routed:** `inside-lane-longer-route`'s four-book obstruction rule
flattened to a universal with no book named (`rules-verifier`), and `net-front-walk-out-direction`'s
IIHF limb — *"neither the NHL's book nor the IIHF's writes a minor for checking from behind at all"* —
cut from a three-host caption (`safety-reviewer`). ⚠️ **That limb is the one that speaks to a British
reader, and this corpus names British readers as one of its two audiences.**

### Two corrections to the diff, both mine

⚠️ **I SEEDED A NEW REFERENCE TO THE DELETED DOCUMENT, IN A TOOL THIS DIFF CREATES.**
`scripts/check_caption_echo.py`'s docstring named `rink_map_and_glossary.md`. **339 pre-existing
references are inherited; a fresh one in a brand-new tool is the hazard being SEEDED, not
propagated.** Corrected.

⚠️ **AND A REPAIR COMMENT ATTRIBUTED THE AMBER-BAND SPLIT TO `global.css`. It is
`captionNodes()` at `site/src/plugins/remark-corpus.mjs:320-332`; `global.css` only STYLES the span.**
**The substance was right and the citation was wrong, which is the more dangerous combination: a later
agent greps `global.css`, finds only colours, and concludes the split is not real.** Corrected, with
that reasoning recorded beside it.

### The three non-blocking repairs

**All three findings held; nothing refuted.** Captions went **112 → 125**, **117 → 162**, **165 → 210**.
⚠️ **Longer again, and correct again** — the target does not outrank a scope, a hedge or a conclusion.

- **`oz-low-to-high`** gained a ⚠️ in this diff that HEAD did not have, putting picture-description in
  the hazard band. The agent judged *"Only worth doing when the net front is occupied"* to be **tactical
  scope, not hazard**, moved it out with the description, and **kept** the glyph on the precedent of
  `oz-royal-road` in the same file, whose band carries a *sourcing* qualification rather than an injury.
  **And it restored the dangling comparative's conclusion verbatim** — *"so it is no argument against a
  point shot there"* — which is the clause the whole sentence existed for.
- ⚠️ **`entry-middle-drive`'s cut limb turned out to be SOLE-CARRIER material.** Its single host
  `zone_entries.md` returns **zero hits** for `goalmouth`, `contact in front`, `in front of the
  goaltender`, `net drive` or `last few feet` **anywhere in the document**. So the scope that keeps the
  picture away from goalmouth contact existed **only** in the caption. **Restored in full, verbatim.**
  The head-up hazard, by contrast, **is** richly carried by the host — *"the layer test finds
  candidates; only reading decides"* applied correctly in both directions.
- **`skating-pivot-toward-the-boards`** — named nowhere in any record until the gate found it. Restored
  *"pivot late"* (HEAD called it *"the more universal half of the instruction"*, and the host says the
  same at `:563`) and the four-book divergence hedge *"they do not grade it the same way"*, **verbatim,
  recoverable from three independent places** — HEAD's caption, the host's facts block, the host's body.
  ⚠️ **It restored the hedge WITHOUT any book-by-book grading detail**, because the host points at the
  Rules Primer for the tiers and inventing them would be the failure this whole round exists to prevent.
  **HEAD had two glyphs in that caption; it now has one.**

### C6 cleared — and the marker wave had already fixed what the caption wave broke

**No critical.** ⚠️ **The cut limb was TRUE, verified verbatim this session:** `nhl_rules.txt:5473`
*"There is no provision for a minor penalty for checking from behind"*, and IIHF 43.2 in **both**
editions — *"there is no option to award a minor penalty."* **So compression removed a fact, not an
error.** The two surviving citations also hold verbatim: USA Hockey 608(b) and Hockey Canada 7.5(c).

⚠️⚠️ **THE DIRECTION OF RISK RUNS THE SAFE WAY, AND THE REASONING IS WORTH KEEPING.** The IIHF has
**no minor AND no match penalty** — 43.3 is major plus automatic game misconduct, 43.4 supplementary
discipline. **So the caption's two named tariffs BRACKET the IIHF's own ceiling and at the top exceed
it**, and its headline *"the worst version of it is priced, and never at two minutes"* is true under the
IIHF **a fortiori**. ⚠️ **The British reader's error mode is DISMISSAL — "those are the American and
Canadian rules, not mine" — not risk-taking.** That is why it is not a critical, and the caption's
operative instruction (*"Never walk anybody across the front of your own net"*) is book-agnostic and
correctly unscoped.

⚠️⚠️ **AND THE MARKER WAVE HAD ALREADY REPAIRED WHAT THE CAPTION WAVE BROKE, WITHOUT ANYONE NOTICING.**
In `goaltender.md` at HEAD the marker sat at `:1096` — **before** the facts block and before the body
bullet that carries *"the NHL and IIHF write no minor for checking from behind at all (43.2 in both)"*.
**The staged diff moved it to `:1114`, after both.** So a British listener who previously met the
two-book caption **before** their own book's position now hears their own book's position **twice
first.** **Two workstreams that were never coordinated, and the second one fixed the first one's
casualty by accident. Nobody planned it and nobody had noticed until a reviewer read the chunks.**

**Per host:** `goaltender.md` clean, all four layers. `body_contact_and_battles.md` clean — §5 gives the
full four-book ladder far earlier, and §9's own body carries the IIHF position. ⚠️ **`defender.md` is
the one where the British listener waits ~1,100 rendered words, about seven minutes** — recorded as a
row, with the constraint that **the fix belongs in the host and NOT in a three-host caption.**

⚠️ **One finding beyond the brief: USA Hockey 608(b) is DISJUNCTIVE and the corpus states only its
second limb**, in the caption and in two hosts' facts lines. **A narrower trigger than the rule has,
which is the dangerous direction — mitigated only because the operative instruction is an absolute
prohibition, so a narrowed trigger cannot license the act.** Row written.

⚠️ **And a dependency nobody has written down: two hosts were cleared because a tariff fact lands in the
chunk immediately before or after the caption.** *"If the chunker changes, the adjacency that makes
`goaltender.md` clean and `defender.md` merely late changes with it, and nothing in the corpus records
that dependency."* **`md_to_speech`'s chunk boundaries are load-bearing for safety conclusions and are
treated as incidental.**

### Both rules claims REFUTED — and my brief carried two wrong rule numbers

⚠️ **I supplied `USA Hockey 632` and `Hockey Canada 9.1` as the interference rules. `usah.txt:4762` — Rule
632 is *"Puck in Motion or Out of Sight."* `hc_layout.txt:5725` — Rule 9.1 is *"Butt-Ending."* Interference
is USA Hockey **625** and Hockey Canada **8.3**.** **The agent caught both rather than inheriting them, and
said so plainly.** That is the fifth wrong premise I have put in a brief today.

#### `entry-three-lanes` — REFUTED, and Hockey Canada rules the drawn case in terms

**The operative test is a RELATION, and all four books agree on it: the SKATES decide, and the puck's
complete crossing is the CLOCK — the instant at which the skates are read. Neither alone.**

⚠️ **The decisive ruling, `hc_layout.txt:4277-4279`, Hockey Canada 6.11(a) Interpretation 4:**
> *"A player has **both skates over the blue-line, but the puck is still on the blue-line**. **Potential
> OFF-SIDE**, but not until the puck completely crosses the blue-line."*

**So the puck not having crossed does NOT confer onside status — it leaves the question UNASKED, and
Hockey Canada names that state *Potential OFF-SIDE*.** ⚠️ **The caption offers, as the reason two players
are acquitted, the condition that will CONVICT a player who has fully crossed.** Interpretation 1 decides
the drawn case on the other ground: one skate on the line at the instant the puck crosses, **ON-SIDE**.

⚠️ **The host sentence the caption contradicts was VERIFIED CORRECT against all four books** — *"a skate on
or behind the line keeps you onside whatever the puck does"* is the NHL/IIHF on-side sentence and Hockey
Canada Note 1 restated. **The corpus's prose was right and its caption was wrong.**

**Two divergences found in passing, both real:**
- ⚠️ **NHL and IIHF judge a vertical PLANE** — *"if a player's skate has yet to break the 'plane'… he is
  deemed to be on-side"* — **while USA Hockey 630(a) and Hockey Canada 6.11 require ICE CONTACT, and HC
  Interpretation 3 rules a raised skate OFF-SIDE.** **This confirms `how_to_watch_hockey.md:226`'s
  *"offside in two books of the four"* verbatim.**
- ⚠️ **`grep -o arises sources/nhl_rules.txt | wc -l` returns ZERO, with a working positive control. The
  *"question of an off-side never arises"* sentence is IIHF and Hockey Canada, NOT the NHL.** A trap for
  anyone restoring this caption from memory.

**Consequence class: rules/whistle, not injury** — a reader loses a zone entry. ⚠️ **The verifier declined
to hand it to `safety-reviewer` on exactly that ground, rather than escalating by reflex.**

#### `inside-lane-longer-route` — REFUTED IN BOTH DIRECTIONS, and it contradicts itself in one sentence

**(a) It forbids more than any of the five books.** USA Hockey's Standard of Play uses **the caption's own
phrase**: *"A skater can use their **body position while maintaining their skating lane, to force an
opponent to take a less direct route to the puck**, so long as they **do not use a hand or arm to hold or
block**."* ⚠️ **The limb names HAND or ARM, to HOLD or BLOCK — not the stick, not the skates, and the verb
is not *obstruct*.** NHL 56.1: *"allowed the ice he is standing on… **always entitled to use his body
position to lengthen an opponent's path to the puck**."* ⚠️ **Hockey Canada 8.1 flatly contradicts the
caption: *"permitted to use their arm in a strength move, by blocking their opponent"*.**

⚠️⚠️ **AND THE CAPTION CONTRADICTS ITSELF INSIDE ONE VOICED SENTENCE: its own preceding clause says the arc
leaves him "the less direct way round" — which IS the skates obstructing a route, and is what USA Hockey
permits BY NAME — and its closing clause then forbids it.**

**(b) It states the permission UNCONDITIONED, and that is the penalty-bearing half.** ⚠️ **USA Hockey
625(a)(4) is a MINOR for *"a defending player who changes their skating lane or foot speed in an effort to
play the body of an opponent who is no longer in control of the puck"* — and the diagram draws an ARCING
route into an opponent's lane.** HEAD's deleted sentence was the corpus's handle on USA Hockey's
*"entitled to the ice they occupy so long as they maintain their skating speed"*, **and USA Hockey supplies
the counterweight in its very next bullet, *"entitled to stand their ground."* Both limbs are in the book;
the flattened caption carries neither.**

⚠️ **Direction, stated: over-forbidding costs the reader ice and technique all five books grant — no
penalty risk. UNDER-conditioning is what gets someone penalised, and it is the half to fix first.**

⚠️ **A scope subtlety the verifier stated rather than glossed:** USA Hockey Casebook Situation 6 scopes its
fend-off permission to *"a player who is in control of the puck"* — **so in this diagram's LOOSE-PUCK race
that Situation does not apply**, while NHL/IIHF 56.1's free-hand permission and Situations 5 and 7 do.
**Getting that right is the difference between a correct citation and a plausible one.**

### The repair — and it refuted the VERIFIER, which is the layer that had been refuting everyone else

⚠️⚠️ **THE VERIFIER'S CENTRAL CLAIM ON CLAIM 2(a) WAS WRONG, AND IT MATTERS.** It said of *"stick, arm,
hand and skates may not obstruct"*: *"It does not name the stick, does not name the skates, and the verb
is not obstruct."* **That is true of the one bullet it read.** ⚠️ **USA Hockey has a SECOND bullet, at
`usah.txt:423-426`, that names all three and uses that verb:**

> *"Two skaters who use competitive contact for position as they skate to a loose puck are within their
> rights to do so, **unless one uses their stick, arm, or skates to obstruct** the opponent's ability to
> skate to the puck."*

**So the caption's limb list was NOT fabricated — it is the owner document's own `Never:` line, sourced
from there.** ⚠️ **The real defect is narrower than briefed and survives: that bullet forbids the
INSTRUMENT, ONE book writes it, and the same book permits the POSITION — and the caption stated it flat,
unattributed and universal, so it contradicted its own preceding clause.** Repaired as *"the other limit
is the instrument: **under that book**…"*.

⚠️ **This is the fourth layer in one chain to correct the layer above it — brief → verifier → repair —
and the repair agent was right both times it disagreed.** **A verification is new text too.**

**Three further corrections it made rather than inherited:**
- **USA Hockey 630(a) names BOTH *"the position of the player's skates AND the position of the puck"* as
  determining factors** — it does **not** make the skates alone decisive the way NHL 83.1 does. **The
  brief's "skates decide, full stop" was too strong for that book**, and the repair accommodates it.
- **USA Hockey 625(a)(4) is at `usah.txt:4469-4471`, not `:4472-4474`** — a three-line drift in a
  citation I passed on.
- **NHL 56.1 carries a proviso the brief omitted**: *"provided his stick is not utilized… his free hand
  is not used and he does not take advantage of his body position to deliver an otherwise illegal
  check."*

### What was written

**`entry-three-lanes`**, 138 words, **zero glyphs** — matching `dump-flip-over-trap`, the file's other
rules-only caption. **The ground is now the skate, with the puck's crossing as the instant of judgement,
and the convicting case is stated POSITIVELY so no negation can carry:** *"the skates decide, and the
puck completely crossing fixes the instant at which they are read. So a player with both skates fully
over the line when the puck crosses is offside however far behind him the puck was, and a skate on or
behind the line keeps you onside whatever the puck does."* **Every ambiguous *"it"* is now a noun.**

**`inside-lane-longer-route`**, 296 words, one glyph, everything after it rules text. ⚠️ **It put the
CONDITIONED PERMISSION FIRST — the penalty-bearing direction — then the limit, both attributed**, and
restored *"Stopping does not cost you your ice"* on NHL 56.1's absence of a speed condition.

⚠️ **And it checked something nobody had: at 1,551 characters the caption is under `md_to_speech`'s
`MAX_BILLED_CHARS` of 2,800, so it voices as ONE UNBROKEN CHUNK — which means the condition cannot be
split from the permission by a chunk boundary.** **That is the right test for a caption whose two halves
must be heard together, and no earlier repair in this round applied it.**

**Deliberately not claimed:** no stride count, distance, or airborne-skate divergence in
`entry-three-lanes` — *"that divergence is verified but already carried by `entry-trail-skate-drag` in the
same file and by the host paragraph, and restating it in a third voiced unit adds nothing."* No Casebook
Situations 5/6/7, because Situation 6 is scoped to a player in control of the puck and this is a
loose-puck race.

### ⚠️ A concurrent-edit alarm, investigated and cleared

The agent reported a negation hit vanishing from `icing-the-race-and-the-dot` between its baseline and
its after-run, *"with no edit of mine"*, and flagged a possible live agent in a file it did not own.

**Checked: `rules_primer.mjs` mtime is 20:03, hours before that run; `git diff --name-only` is empty for
it; and the hit is present now.** ⚠️ **No concurrent edit occurred.** The most likely cause is that the
agent's own new low-signal hit shifted band membership in the tool's ranked output. **Recording it
because the agent was RIGHT to report it rather than assume — a vanished hit with no edit is exactly the
shape `CLAUDE.md` says to treat as a race — and because the answer was one `stat` away.**

---

## ⚠️⚠️ THE SIXTH BLOCK — I stated a region definition FROM MEMORY, in the style guide, in a code fence

**C7.** The *"WORKED CASE — A GLOSSARY DOCUMENT HAS A SHAPE SENTENCE TOO"* section I wrote presented
`rink_map.md` §5 as:

> `**Where:** between the tops of the circles and the top of the faceoff dots, …`

**The owner, `content/foundation/rink_map.md:312`, says:**

> *"**Where:** the upper part of the slot — from the **level of** the **faceoff dots** up to the **top of
> the circles**."*

⚠️ ***"the top of the faceoff dots"* is a boundary NO OWNER WRITES.** `special_teams.md:92` agrees with
the owner and not with me.

⚠️⚠️ **AND THE FIRST REPAIR OF THIS PARAGRAPH CARRIED THE SAME DEFECT AGAIN — a seventh block, on text
written to clear the sixth.** It added that the paraphrase was *"a LOWER boundary"*, **a directional
relation derived from memory, in the sentence that exists to say never to do that, and INVERTED.** In
this corpus *"top"* is away from the net — `rink_map.md:302` runs the slot *"from the top of the circles
**down** to the goalmouth"* — and an NHL faceoff spot is *"two feet (2') in diameter"*
(`sources/nhl_rules.txt:862`). ⚠️ **So the top of a dot is a foot TOWARD the blue line: a HIGHER
boundary, making the paraphrase one foot SHORTER, not longer. I had it exactly backwards.**

⚠️ **The comparison is DELETED rather than corrected.** *"A boundary no owner writes"* is true, is
checkable by grep, and requires no derivation. **THE FIX FOR A DERIVED CLAIM IS USUALLY TO STOP DERIVING,
NOT TO DERIVE IT BETTER** — and a repair that reaches for a second derived fact to explain the first is
the shape to watch for.

### ⚠️ Three things made it worse than an ordinary slip

1. **It is inside a CODE FENCE**, which the next agent reads as a quotation of the owner rather than as
   prose.
2. **The trailing `…` signalled TRUNCATION, not paraphrase** — so nothing marked it as approximate.
3. ⚠️⚠️ **It is the high slot: THE region in this repository with a recorded drift history. A band
   labelled "the high slot" was once drawn at 3.14× the area its owner defines, in two diagrams, under
   captions matching the owner's words, and it passed every gate.** `check_zones.py` exists because of
   that. `CLAUDE.md` says only the rink map settles what a region is. **And the style guide had just
   become a second place stating its bounds.**

⚠️ **This is non-negotiable 2 — *never state a rule from memory* — committed by the coordinator, in the
specification, inside the section that exists to teach people how to handle owned definitions.** **Fixed
by pasting the owner's line verbatim, with the reasoning recorded beside it so the next editor does not
"improve" it back.**

⚠️ **And note what did NOT catch it. No `content/` file was wrong, so `check_links`, `check_facts` and
`check_counts` were all correct to pass. `check_zones.py` compares diagrams to each other and cannot see
prose. The only thing that could find it was a reader comparing the style guide to the document it
claimed to quote — and that reader was the commit gate, on the sixth pass.**

### The gate's own verification of the chain

⚠️ **It re-derived the repair agent's refutation of the rules-verifier and confirmed the repair agent was
right** — `usah.txt:423-426` does name stick, arm and skates with the verb *obstruct*. **And it added the
detail that settles the repair's shape: that bullet sits under the BODY CHECKING CATEGORY heading in the
Declaration preface, NOT as a numbered rule — *"which is exactly why the caption's 'under that book'
scoping is the right repair and a rule number would have been wrong."***

⚠️ **It also caught a word choice that was not an accident: `entry-three-lanes` says "trail-skate
DRAG", not "trail skate" — and drag implies ice contact, which keeps the sentence true under USA
Hockey's and Hockey Canada's ICE-CONTACT test as well as the NHL/IIHF PLANE test.** **One word carrying a
four-book divergence.**

**Checks it ran that nobody asked for:** **180 markers moved and the multiset is byte-identical**; every
marker in the corpus is blank-line fenced, none indented, none between list items, none inside a
blockquote; and **every positional pointer in `content/` still resolves after the moves** — it located
the nearest markers for all nine survivors individually.

### Two non-blocking items, both actioned

- ⚠️ **Two faceoff captions lost the same cross-league instruction and only the POINTER was recorded.**
  `faceoff-dzone-alignment` (**seven hosts**) dropped *"Do not carry one book's answer into another
  league."* **The earlier row recorded the dangling pointer the deletion created, not the deletion —
  two different defects, and fixing the pointer would have left a seven-host caption still missing the
  instruction.** Row written.
- **`_constants()` was being called inside the per-module loop**, rebuilding the whole table 31 times.
  Hoisted, with a comment saying why it is global rather than module-scoped.

### ⚠️ And an aggregate the record should not hide

**The caption layer still ships net safety-token losses against HEAD in the final state:** `never` −15,
`penalt-` −14, `depends` −11, `from behind` −6, `game misconduct` −2, `match penalty` −2, `a major` −2,
`ask your coach` −2, `boarding` −1, `suspension` −1.

⚠️ **The per-caption safety clearance covers these as merged sentences and caution-erring cuts, and the
gate explicitly declined to overturn it. But the aggregate did not return to parity, and this record
should say so rather than let the corpus-wide audio measurement — which showed the SPOKEN layer holding
flat or rising — stand as if it answered the caption-layer question. Both measurements are true and they
answer different questions.**

---

## ⚠️ THE SEVENTH BLOCK — both findings in the text written to clear the sixth

**C11 applied to the coordinator: the repair is new text, and the new text carried the defect.**

### 1 · The repair of a memory-derived definition derived a SECOND fact from memory, and inverted it

My correction added that *"the top of the faceoff dots"* is **"a LOWER boundary"** than the owner's
*"level of the faceoff dots"*. ⚠️ **Re-derived from primary text: it is HIGHER.** In this corpus *"top"*
is away from the net — `rink_map.md:302` runs the slot *"from the top of the circles **down** to the
goalmouth"* — and an NHL faceoff spot is *"two feet (2') in diameter"* (`sources/nhl_rules.txt:862`), so
**the top of a dot is a foot toward the blue line, making the paraphrase one foot SHORTER, not longer.**

⚠️⚠️ **I derived a geometric relation from memory inside the sentence that exists to say never to do
that — and then, having been caught doing it once, did it again in the fix.** **Deleted rather than
corrected:** *"a boundary no owner writes"* is true, checkable by grep, and needs no derivation.
**THE FIX FOR A DERIVED CLAIM IS USUALLY TO STOP DERIVING, NOT TO DERIVE IT BETTER.** Corrected in both
files that carried it.

### 2 · A figure with four right numbers and one wrong one

The style guide read *"212 captions, ~52,000 words, median 238, longest 765, shortest 23."* ⚠️ **Measured
at HEAD: 204 captions, 52,136 words, median 238.5, longest 765, shortest 23. Four of the five were
exact and the COUNT was eight high** — and `diagrams.json` has never held 212, so it was not a stale-but-
real measurement. ⚠️ **A wrong number sitting among four right ones is the hardest kind to notice, and
the only thing that finds it is recomputing all five.**

### ⚠️ THE HONEST CORPUS-WIDE HEADLINE, which this record did not carry

**"One caption of 92" was correctly scoped to groups D/E/F and it is not what shipped.** Measured across
the whole diff, HEAD build product against the final one:

| | HEAD | now |
|---|---|---|
| captions | 204 | 204 |
| **changed** | — | **188** |
| total caption words | 52,136 | **32,902** (−37%) |
| median | 238.5 | **134.5** |
| longest | 765 | **556** |
| **in the owner's 25–50 band** | **11** | **14** |
| **still over 50 words** | — | **189 of 204** |

⚠️ **Three of the 188 rewritten captions landed in band. The corpus moved from eleven to fourteen.**
**That is the number this round should be quoted by, and it belongs beside the −37% rather than behind
it.** **Both are true: the layer is a third shorter and the target was not reached, because the thing
standing in the way was never length — it was four-book rule scope and sole-carrier safety limbs, which
is what the routing rows exist to move.**

### ⚠️ A THIRD truncation-class blind spot in the same tool — found by the gate, fixed

**Five caption units carry RAW `\uXXXX` ESCAPES in source** — `forecheck-212`, `-212-stacked`,
`forecheck-122`, `forecheck-131`, `the-trapezoid` — **so every source-reading worklist was scanning the
seven characters `—` where an em dash ships.** ⚠️ **Two of those units have a NEGATION FOLLOWED BY
`—` in their body-checking scope sentence, which is precisely the shape `SHAPE` exists to surface,
and the tool could not see it because the separator was spelled out rather than present.**

**Fixed with a two-step unescape** — ⚠️ **`unicode_escape` is latin-1-based, so a literal em dash already
in the file is mangled to mojibake unless it round-trips through latin-1 first; the two-step is
deliberate and commented.** **`check_absolutes.py` is unaffected — it reads the resolved JSON. This tool
reads SOURCE on purpose, because the JSON goes stale the moment a caption is edited, which is exactly
why it and not that one has to do the unescaping.**

⚠️ **Verified against the build product: 408 units compared, ZERO short, ZERO carrying a literal `\u`.**
**That is the third distinct way this one function was silently truncating its input** — inline comments
(fixed 10 September, before this round), interpolated constants and double-quoted strings (fixed today),
and now escape sequences. ⚠️ **Each was invisible, each was found by a different agent doing something
else, and none was found by looking for it.**

### Three corrections to this record itself, from the gate

- ⚠️ **The *"gates and worklists after everything landed"* table is superseded by this record's own later
  sections.** It reports `check_caption_negations` at **408 units / 393 hits**; after the constants and
  quote fixes it was **410 / 402**; it is now **410 / 404**. **A reader takes a table titled *after
  everything landed* as the final state, and it was written before three rounds of repairs.**
- **The 408-versus-410 gap is fully explained and belongs in one line:** `centre-crease-the-puck-decides`
  (`center.mjs:777`) is **defined in source, deliberately never built, and documented as such** — its
  caption and describe are the two extra units. **Without this line the next reader re-derives it, as
  the gate just did.**
- ⚠️ **My "343 references to a deleted document" row was OVERSTATED and is corrected to 279.** The 343
  splits into **279 `rink_map_and_glossary.md`** (the document — deleted, the real rot), **33
  `rink_map_and_glossary.mjs`** (the DIAGRAM MODULE, which **exists**, kept the legacy name through the
  split, and whose `owner:` field correctly points at `content/foundation/rink_map.md`), and **30 bare**.
  **A third of what I counted as rot is a correctly-wired file with an old name, and a blind rename
  would have broken it** — which is what the row already said not to do, for a reason I had not yet
  measured.

---

## ⚠️ THE EIGHTH BLOCK — both defects contradicted by this very record, shipping in the same commit

**Both in `project/`, which has no mechanical gate at all.** `check_links.py` covers `content/`; **nothing
checks whether a claim in the specification is true.** ⚠️ **All four defects in the last three blocks
were in `project/`, and every one was found by reading.**

### 1 · The superseded headline shipped unscoped in two places, one of them a DISPATCH document

*"One caption of 92 reached 25–50 words"* — correctly scoped to groups D, E and F — was copied into
**`READABILITY_AND_DUAL_AUDIENCE.md:250`**, under the heading *"What executing these produced, so nobody
re-runs a finished wave"*, as *"the one result that changes this plan's own strategy"*; and into
**`scripts/check_caption_echo.py:12`**, a new tracked tool's docstring. ⚠️ **`grep -n '92'` on the plan
returns ONE line: no denominator, no group list, nothing telling a dispatcher what 92 counts.**

⚠️⚠️ **And this record, in the same commit, says *"'One caption of 92' was correctly scoped to groups
D/E/F and it is not what shipped."*** **The corpus-wide truth: 188 of 204 captions changed, 52,136 →
32,902 words (−37%), median 238.5 → 134.5, band 11 → 14, 189 of 204 still over 50.**

⚠️ **This is D8 — a figure copied out of its owner, shedding the qualification — committed by the
coordinator in the file that had just spent a section learning *"a number copied out of its owner goes
stale silently."*** **Both sites now carry the corpus figure, and this record's headline now carries a
pointer to its own correction, which is what would have stopped the copy.**

### 2 · A standing row asserted a dimension was uncovered when it had been covered, over a list a third short

`OPEN_ITEMS.md` opened with *"⚠️⚠️ THE SITE HAS NOT BEEN LOOKED AT… not one saw them applied"* — **and a
`site-reviewer` had done exactly that**, in Chrome 152 over CDP, across all 49 pages and 331 figures in
four cells, **proving causation by ablating the four `margin-bottom` declarations out of the live
stylesheet.**

⚠️ **And its list said NINETEEN markers. Measured directly: TWENTY-EIGHT, across 18 documents.** The
nineteen came from my census keyed to *"the fourteen documents I believed the wave had touched"*, run
before the fourth marker agent finished. **The nine it missed are exactly the nine this record already
names at its correction — and all nine were measured by the reviewer, all matching, none falling back to
32 px.**

⚠️⚠️ **So the standing row told the next wave to run a review that had already run, over a list missing a
third of its cases.** ***"`CLAUDE.md`'s 'the briefs are more defective than the corpus', manufactured
live."*** **Rewritten: what is open is not *has anyone looked* but *in what* — Chrome 152 only, with
Safari's `:has()` on a sibling combinator and Firefox's margin-collapse named as the two risks, plus no
real device, no screen reader, no root font size but 16 px, and not the production CloudFront rewrite.**

### Three further corrections, two of them counts deleted rather than fixed

- ⚠️ **The style guide's `40 px` measurement is stale IN THIS COMMIT.** It cites a reviewer measuring
  `goalie-depth-failure-modes` before an `hr` at *"40 px, LARGER than the universal 32 px figure
  margin"* — **and the CSS in this same diff raises that case to 44 px, as its own comment says.** The
  conclusion holds a fortiori; the number does not. **Marked as the measurement it was.**
- ⚠️ **Two relayed counts in the glossary worked case could not be derived by anyone and are DELETED.**
  It said an agent *"moved thirteen markers"* and that the subject test *"would leave all fifteen
  markers"* where they were. **Measured: `rink_map.md` holds 17 markers, unchanged between HEAD and this
  commit, and 16 sections carry a `**Where:**` line. Neither count is any of those numbers** — and the
  argument needs none of them, because it is about the subject test degenerating on a glossary, which is
  true of every marker in the document. ⚠️ **Third figure this round removed rather than repaired, and
  every one was incidental to the point it sat inside.**
- **A fourth truncation class in `check_caption_negations.py`, half closed.** ⚠️ **`consts.get(ident, "")`
  silently dropped an unresolvable constant to the empty string** — the same silent-prefix failure as the
  three already fixed. **It now prints to stderr and says the caption is being scanned short.** ⚠️ **The
  other half is open and recorded in the code: `CAPTION`'s alternation is `STR | [A-Z][A-Z0-9_]*`, so a
  LOWERCASE identifier, a backtick TEMPLATE LITERAL or a FUNCTION CALL inside a `caption:` run still ends
  the match.** **Neither is exercised today — 408 units compared against the build product, zero short —
  and a build-product comparison is the only thing that has ever caught this class.**

⚠️ **And the first version of that fix DID NOT PARSE, because its docstring names `\uXXXX` escapes and
Python tried to decode them. It is a raw string now, and says so.** **A docstring about escape sequences
was broken by an escape sequence.**
