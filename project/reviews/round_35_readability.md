# Round 35 — readability: self-contained sections, Overview compression, more diagrams

**Scope.** The owner's priority-2 items, in their words: *"A Note on Language"* repeated across
documents; the Overview that *"first contains Facts, then slightly more detailed content repeating the
Facts, then we go into detail that also repeats"*; sections that do not say where they are
(*"in Carrying the Puck — Under Pressure under Defensive Zone, it is not clear we are talking about
Under Pressure in the Defensive Zone unless you scroll up"*); and *"more diagrams … ideally every
section should have 1 or 2"*, later extended to *"increasing the number of diagrams as that materially
helps readability"*.

**This record exists because the thirteenth gate blocked without it.** The heading, diagram and
facts-compression hunks were staged inside the round-33 safety commit and were covered by no record.
The gate's words: *"a readability/diagram workstream riding inside a safety-and-rules commit, with a
second agent's round-34 work live in the tree. Commit `239f70d` exists because two agents raced."*

---

## 1 · Sections that do not say where they are

**Measured, not assumed:** seven documents repeated an H3 title within themselves. The three position
documents each repeated three titles **once per zone** — which is precisely the owner's example.

| Document | Repeated | Fixed |
|---|---|---|
| `winger.md`, `center.md`, `defender.md` | `Carrying the Puck — Free Space`, `— Under Pressure`, `Pressuring an Opponent with the Puck` | 12 headings each, prefixed with their zone |
| `rules_primer.md` | `The rule` ×2 | `Offside: The rule`, `Icing: The rule` |
| `body_contact_and_battles.md` | `Technique` ×2 | prefixed with the parent skill |
| `offensive_zone_play.md` | `What it is` ×2 | prefixed with the system |
| `defensive_zone_coverage.md` | `What it concedes` ×2 | prefixed with the system |

**44 headings.** The zone-first form (`### Defensive Zone: Carrying the Puck — Under Pressure`) was
chosen over appending because a listener hears the zone before the situation, which is the same
problem the owner raised and the podcast's version of it.

⚠️ **A renamed heading breaks every `file.md#anchor` pointing at it.** No inbound anchor links existed
— checked before renaming — and the gate independently verified **3,745 anchors** against the built
tree afterwards. *That is a fact that had to be established, not one the rename made safe.*

⚠️ **What ships and what does not.** This record covers a sweep of **44 headings**, but only the
**6** in `rules_primer.md`, `body_contact_and_battles.md` and `offensive_zone_play.md` ride in the
commit this record enters — those three files carry round-33 rules work in the same hunks and cannot
be separated at file granularity. The other **38**, in `winger.md`, `center.md`, `defender.md` and
`defensive_zone_coverage.md`, remain in the working tree, as do three of §2's four Overview rewrites — `goaltender.md`'s shipped with round 36 — and §3's new
diagrams. So *"no repeated H3 heading remains anywhere in the corpus"* is true of the working tree and
**false of the commit this record enters**, where four documents still repeat 29 headings between
them. It is stated here rather than left for a reader of the history to discover.

---

## 2 · The Overview repeats its own facts block

The owner's diagnosis was exact and it measures worse than "repetitive". Counting facts lines with a
**six-word run repeated verbatim** in the Overview prose beneath them:

| Document | Verbatim overlap |
|---|---|
| `defender.md` | **11 of 11** |
| `goaltender.md` | **8 of 8** |
| `center.md` | 7 of 8 |
| `winger.md` | 2 of 9 — but two whole paragraphs were word-for-word |

Four Overviews rewritten so the prose carries **only what a facts block cannot**: the reason a fact
bites, the ordering logic, the memorable formulation, and one safety line worth repeating.

| | Prose before | after |
|---|---|---|
| `winger.md` | 384 | **201** |
| `goaltender.md` | 354 | **249** |
| `center.md` (restating paragraphs) | 351 | **186** |
| `defender.md` (restating paragraphs) | 267 | **179** |

**What was deliberately not touched:** `center.md`'s closing blockquote — the Lignell 2018 folklore
correction with its *"never measured"* labels — and `defender.md`'s trapezoid section, a cross-book
divergence with quoted rule text and a safety reversal (*"a defenceman who sprints into that corner
out of NHL habit is racing his own goalie"*). Those are the honest-disclosure and rules material the
corpus exists for, and compressing them would have been non-negotiable 4.

⚠️ **Scope correction.** An earlier estimate of *"18,227 words across 37 Overviews"* was wrong: only
**nine** Overviews carry both a facts block and prose, totalling 3,519 words. The rest have no facts
block to restate.

⚠️ **A file was broken doing this and restored.** The first attempt anchored on a phrase that also
opens a fact line in `goaltender.md`, so the slice began **inside the facts block** and deleted its
closing fence and several sections — five broken links. `check_links.py` caught it; the method did
not. Reverted and redone anchored on document *structure*, with the slice asserted to contain no fence
and no heading before writing.

---

## 3 · More diagrams

**109 → 112**, and documents referencing none **16 → 13**.

⚠️ **An earlier figure of "20 of 37 documents have no diagram" was wrong** — it came from a grep that
also mislabelled `defending_the_rush.md` as having none when it owns six. Recomputed from the built
manifest: 16, and **zero** built diagrams were unreferenced.

**Three new**, all drawn from claims the owning section already makes:

- **`winger-dz-rim`** / **`winger-dz-reverse`** — a pair, because that section teaches a *choice*
  between two plays that beat opposite mistakes, and one frame cannot hold two checker positions.
- **`off-wing-open-to-the-ice`** — `switching_positions.md`'s first diagram.

**Four quoted placements**, which the remark plugin auto-attributes: `rush-gap-and-angle` into the
angling section, `unmarked-but-unavailable` and `support-angles` into passing, `support-triangle` into
offensive-zone play. **Quoting rather than redrawing** follows the diagram module's own rule that
overlaps are drawn once.

`diagram-reviewer` reviewed all seven and found **eight defects**, all recorded and fixed in
§14 of `round_34_diagram_notation.md` — including a route bowed the opposite way from its own comment,
a puck drawn inside the player glyph in all three, and a puck carrier's route drawn as skating
*without* the puck.

---

## 4 · Facts labels: several `Position:` facts in one block

The owner: *"multiple Rules where they can be applied together and are separate is easy to read but
multiple Position facts is confusing."* **31 blocks** carried two or more.

Two merged where the several facts were genuinely **one** concept, and in both the body was checked to
carry every clause first:

- `defending_the_rush.md` — one gap measured at three stages became one line. All three distances and
  the poke-check reasoning survive in the body bullets and Key Takeaway 2.
- `offensive_zone_play.md` — below / level / above the puck became one line naming the three roles,
  **and `support-triangle` is now quoted beside it**, which is the owner's own suggested shape. Each
  role's reasoning survives verbatim in the body.

**29 remain**, and they are not all the same defect: some are four *definitions of rink vocabulary*,
some are four *places space is found*. `Position:` means "where you are"; `Options:` means
"alternatives, where more than one is legitimate". Deciding which label each wants is per-block
judgement and has not been done.

---

## 5 · Not started, and one is blocked on the owner

- **"A Note on Language" still appears in 8 documents.** ⚠️ **Blocked on a specification decision.**
  `content_style_guide.md:434` requires *"Define every hockey term the first time it appears, even if
  another document defines it. Documents must stand alone when read aloud."* **The repetition is the
  specification**, and the reason is the podcast: a listener who starts mid-corpus has no glossary.
  Consolidating is a spec change, not a tidy-up, and it changes what every document may assume.
- **Five Overviews** with facts-block overlap are uncompressed, `offensive_zone_play.md` among them.
- **13 documents still reference no diagram.** Most of the remainder are genuinely non-spatial —
  equipment, the mental game, conditioning, practice — and a diagram there would be decoration.

---

## 6 · What this round could not have found

- **Nobody has read it.** Every claim above is about repetition measured mechanically. Whether the
  compressed Overviews *teach* better, or merely shorter, needs a reader who does not already know the
  material. The plan's own §5 says this is the one item no agent here can do.
- **Nothing has been heard.** The Overviews are read aloud, and compression changes rhythm as well as
  length. `md_to_speech.py` has not been run this round.
- **`content-reviewer` has not seen any of it.** The heading renames, the four Overview rewrites and
  the facts merges are house-style and summary-layer changes — D7, D9 and D14 — and that is the agent
  those dimensions belong to.
- **The six-word-run overlap test is crude.** It finds verbatim restatement and is blind to the same
  claim rewritten in different words, which is the commoner and less honest form of the same problem.

---

## 7 · `content-reviewer` on the staged hunks — and a claim of mine that was simply false

The fifteenth gate blocked under C3 because D7, D9 and D14 were declared *unchecked* for these hunks
rather than checked. This is that check. **No criticals. Three majors, and the first is the important
one.**

### 7.1 · ⚠️ The facts merge dropped a proposition, and the diagram I added does not carry it

§4 recorded the `offensive_zone_play.md` merge as safe because *"each role's reasoning survives
verbatim in the body"* and because `support-triangle` was quoted beside it. **Both halves were wrong.**

Three clauses did not survive the merge: *attack the net from behind*, *in the inside lane rather than
flat on the boards*, and ***the first line of defence if you lose it***. A corpus-wide grep for that
last proposition returns **one** hit — a single body bullet. Not a facts block, not a Common Mistake,
not a Key Takeaway, anywhere in 37 documents.

⚠️ **And the diagram does not carry it.** `support-triangle`'s caption is about *passing-lane
separation* — *"no single defender can be in both lanes"* — and never uses the words below, level or
above, never names an outlet or a shooting option, and says nothing about losing the puck. **It is
drawn for a different document's argument.** The meaning did not move to the picture; it left.

**Nothing forced the trim.** The block held **7 of 8**, and each original line was ~125 characters
against a 200 limit. The style guide's rule is explicit — *"where a fact runs long, split it into two
complete facts rather than trimming it — under pressure the thing that gets trimmed is always the
caveat"* — and there was no pressure. **Split, and the defensive job restored as its own line.**

### 7.2 · ⚠️ A quoted caption whose antecedent does not exist in the host

`support-triangle` is written as **the second of a pair**: *"The same three teammates with one of them
pulled off the line into the middle"*, and its `describe` reads *"the opposition forward stands where
he stood in the previous diagram."* At home that resolves — `support-in-a-line` sits four lines above
it. Quoted into `offensive_zone_play.md` there is no line diagram and no prose about three players in
a line; the nearest preceding figure is seventy-five lines away and unrelated.

**The caption is the SVG's accessible name and the only thing `md_to_speech.py` emits** — it writes
`"Diagram. " + caption` and has **no `owner` handling at all**, so the "Diagram from …" attribution
the site renders never reaches a listener. The plugin's authors anticipated the general class and
patched it with that attribution line; **an attribution line cannot fix deixis.**

**The placement is withdrawn.** It existed to carry the meaning §7.1's merge dropped, and it does not
carry it, so both halves are reverted rather than patched.

### 7.3 · A corpus-wide sweep, and it narrows to one

Every caption was swept for deixis — *the same*, *the previous*, *has not moved*, *this time*,
*again*, *as above*. **41 captions matched**, but a caption's deixis only breaks when the diagram is
**quoted outside its owner**, and only three are: `support-triangle`, `support-angles` and
`breakout-d-to-d`. Reading those three, only `support-triangle` is genuinely anaphoric — the other two
open self-containedly (*"One instance of the three support angles…"*, *"D-to-D: the pass across to
your partner…"*). **One defect, now removed.** The other 38 resolve at home.

### 7.4 · The cardinal-rule hedge lived in prose only

The below/level/above shape is hedged in a **blockquote above the heading**, and the facts block's two
`Convention:` lines both hedge something else. The style guide names this failure in terms — *"A
restriction that lives in prose does not exist… the layer exists so a reader can skip the prose"* —
and the **sibling document does it correctly**, carrying `Convention: Rotation rules are a coaching
choice…` right under the same proposition. A reader following that document's pointer to "the full
treatment" arrived at the *less* hedged one. Pre-existing, aggravated by the merge, now fixed with the
hedge in the block.

### 7.5 · Minors fixed

- *"in open ice"* had survived the gap merge only in the body and the takeaway; restored to the facts
  line, and *"as they cross"* given its antecedent.
- **A new bolded claim in new words:** *"An angle cannot be taken from a standstill."* Every other
  instance in the corpus — four of them, including the caption that paragraph introduces — attaches
  "standstill" to the **gap**. Aligned to the existing formulation rather than adding a second.
- **An authored characterisation:** *"the four things below assume you are skating forward at them."*
  The section says no such thing, and its second point, *"momentum back toward your own net"*, is
  satisfied by skating backwards by definition. Reworded to what the section supports.

### 7.6 · Upheld

The two `Risk:` disclosures in the royal-road block — *"attributed but uncheckable"* and *"published
descriptions disagree… kept for being the more conservative instruction, not the better supported
one"* — survived the rename untouched. No `Convention:` fact was removed from any staged file (counts
0 / 9 / 6 / 12, unchanged). §1's claim that no inbound anchor pointed at a renamed heading was
independently re-derived, not taken on trust.

### 7.7 · Open, and handed on

- **`facts-reviewer` has not seen the two merged blocks**, nor the 29 remaining multi-`Position:`
  blocks §4 left undecided.
- **The reviewer never looked at a picture.** Every statement about the two quoted diagrams is about
  the words in their specs. Round 34 found eight defects in seven diagrams by rendering them.
- **`md_to_speech.py` was read, not run.** Every claim about what a listener hears is inferred from
  source.
- ⚠️ **The rename criterion does not match the complaint it answers.** The sweep fixed *duplicate*
  H3s; the owner's complaint was about *context*. `rules_primer.md` still carries `### The
  consequences`, `### The full wave-off list`, `### Where the faceoff goes` and `### Practical
  consequences` — all failing the read-aloud test, all untouched because they happen not to repeat.
  **A literal-string grep cannot see that class**, and finishing the sweep means reading headings, not
  matching them.
