# Callout flow, wave 1 — what eight agents found, and two defects in the method itself

**22 September 2026.** The owner's instruction, verbatim:

> *"too often callout-warning sections, it is like we're paranoid about players not using their
> judgement, we should reduce the number of these warnings as they break up the flow of the content
> too much, especially for example in the middle of the Key focus on the Core Principles page… If we
> have to have warnings we should ideally group them together as a single consolidated warning perhaps
> with multiple paragraphs and put them at the end of a section… Also we should try to keep the
> warnings as succinct as possible."*

And their correction when the first draft of the plan scoped it to one layer:

> *"this doesn't just impact Key focus it impacts all areas of content so consider everything"*

---

## ⚠️ The finding that changes how this work must be done — and no brief contained it

**Every ⚠️ marker is a SPOKEN escalation, and removing the last one from a paragraph deletes it.**

`scripts/md_to_speech.py:2778` computes `important = "⚠" in text` **per paragraph**; `:2784` then
prefixes the whole `<p>` with a spoken **`"Important. "`**. The glyph itself maps to `""` at `:313` —
it is silent. **So the marker's only effect in audio is that escalation.**

Three consequences, all measured this round:

1. **Stripping the last marker from a paragraph silently removes a spoken "Important." from the
   podcast.** No checker in this repository can see it.
2. **Stripping a marker from a paragraph that still holds another costs nothing in audio** — one
   prefix however many glyphs. One agent removed **29 inline markers at zero speech cost**, halving
   the amber runs a sighted reader meets while the listener heard no difference.
3. ⚠️ **A mid-paragraph marker is therefore strictly the WORST option**, and the pilot measured why:
   it labels the entire paragraph urgent *and* delivers the actual warning un-escalated. A listener
   heard `"Important. The principle. Almost every 'always do X' in hockey is really…"` — the escalation
   landing on a structural pseudo-heading while the hazard sat sixty words in. **Seven paragraphs in
   one document did this.**

**The standing rule this produces: a mid-paragraph ⚠️ has exactly two correct fixes — de-mark it, or
split it into its own paragraph. Leaving it inline is the one wrong answer.**

⚠️ **The verification method that follows from it, and every wave-2 brief must require it:** count
spoken `Important.` in the rendered SSML before and after. The drop must equal exactly the number of
paragraphs deliberately de-marked. **It is immune to both tool defects recorded below**, because
`md_to_speech` reads actual paragraph text rather than how a line begins.

---

## ⚠️⚠️ Two defects in `check_callout_flow.py` — the coordinator's tool, found by the agents using it

**The tool was written this round specifically to stop callout figures going stale in prose. Its
docstring says *"the figures now have an owner that prints them."* The owner was wrong.**

### 1. It UNDER-REPORTS by construction — roughly 293 paragraphs corpus-wide

`classify()` at `scripts/check_callout_flow.py:50` tests `stripped.startswith(("-", "*"))` **before**
it can reach the ordinary-paragraph case. **A paragraph opening `**Bold lead-in.**` starts with `*`**,
so every bold-opening paragraph carrying a marker is filed as a *list item* and dropped from the
flow-breaking population.

Measured: **293 bold-opening paragraphs misclassified, against 618 genuine list items.** In
`core_principles.md` the tool reported **8** where the real figure was about **25** — a 3× undercount
in the document the owner named. An italic-opening paragraph is swallowed the same way.

⚠️ **Every figure in every wave-1 brief was therefore a FLOOR, not a count**, and all four still-live
agents were told so mid-wave. **The tool was NOT changed during the wave** — a shared tool altered
under running agents is a documented failure here, where a checker once *"changed its own
classification output between my first and last run, with no edit of mine."* **The fix and a
re-measurement belong to wave 2.**

### 2. `--stacks`'s `[one blockquote]` label is not reliable

`stacks()` labels a run `[one blockquote]` when *every* marked line starts with `>`. **Two adjacent
blockquotes separated by a blank line score the same** — and that is two amber panels in a row, the
exact defect the label tells an agent to ignore. One agent caught it at `rules_primer.md:756-762` and
reported that it nearly skipped a genuine two-panel stack on the label's word.

**Fix: `stacks()` must track blank-line breaks between blockquotes.** Until it does, the label is a
hint and the raw lines are the answer.

---

## ⚠️ The pilot refuted the brief's central reading, and the owner's example was misdiagnosed

The brief — written by the coordinator — said `core_principles.md`'s Key focus *"promises seven ideas,
then delivers two full warnings BEFORE idea one."*

**Those two warnings ARE ideas one and two.** The layer carries all seven, in the order 2, 7, 1, 3, 4,
5, 6: `:17` is principle 2 (which book you are under), `:19` is principle 7 (how you meet the boards),
`:25` is principle 4 — word for word its own section heading. **Nothing was interrupting anything.**

⚠️ **Had the agent acted on the brief it would have moved or cut two of the seven promised ideas out
of the layer whose documented job is *"the instruction, plus the condition that makes it safe or
legal."*** The document's own Overview already states the design: *"Those two come first because being
penalised, ejected or hurt costs more than being out of position."*

**The real defect was presentation, not placement: three of the seven ideas were dressed as warnings
and four were not, with no signal that the marked ones were ideas.** The repair was to de-mark the
hedges and add one clause to the promise so the marked blocks read as ideas.

**The owner's perception was correct and their diagnosis of the cause was not** — which is exactly why
the method requires the agent that has read the document to write the sentence.

---

## The ratios — and they do not generalise

**This is the single most useful number for scoping wave 2, and it varies more than threefold.**

| document | callouts examined | real safety limbs | hedges wearing a marker | kept |
|---|---:|---:|---:|---:|
| `positions/goaltender.md` | 36 | **31 (86%)** | 5 | 31 |
| `technique/shooting.md` | 24 | **20 (83%)** | 4 | 20 |
| `foundation/rules_primer.md` | 45 | **32 (71%)** | 13 | 32 |
| `systems/offensive_zone_play.md` | 30 | **18 (60%)** | 12 | 18 |
| `foundation/core_principles.md` | 18 | **7 (39%)** | 11 | 7 |

⚠️ **A rules-dense or safety-dense document is mostly real limbs, and a principles document is mostly
hedges.** A wave-2 brief that assumes one ratio for all documents will either strip a rules document or
leave a principles document untouched.

⚠️ **NOT ONE WORD OF CONTENT WAS REMOVED IN ANY OF THE FIVE DOCUMENTS.** Every agent reported the same
shape independently: the work was marker removal and panel consolidation, and every de-marked sentence
survives verbatim and still reaches the listener. Three agents proved it mechanically — normalising the
glyph out of both versions yields byte-identical text, and `check_quote_drift` is unchanged in every
file.

### The four kinds of hedge, which did repeat across documents

1. **Scope qualifiers** — *"this reverses for the goaltender"*. Playing a position badly is not being
   hurt, ejected or penalised.
2. **Honest disclosures** — *"coaching reasoning rather than a measured result"*, *"one manual's
   silence is not a survey"*. ⚠️ **Non-negotiable 4 material: de-marking is NOT stripping, and every
   word stayed.** They were *louder* than the corpus's actual hazards, which devalued both.
3. **Terminology and tactical nuance.**
4. **Signposts and pseudo-headings** — `⚠️ **What to notice…**`, `⚠️ **And a second example…**`.
   **A marker on recurring structural furniture is never a warning**, and in speech it puts
   `"Important."` on the word *"What"*.

---

## What the agents refused to do, and were right to

- **`goaltender.md:839-845` and `:1049-1073` were left untouched.** Both are already one consolidated
  multi-paragraph warning at the END of their instruction block — **the exact shape this round is
  trying to produce.** Their high count is long rules exposition, not scattered warnings.
- **`shooting.md:501-515`** — six markers, but one blockquote, and every limb is a disallowed goal, a
  major, a game misconduct or a match penalty. *"The brief's 8 in that section resolves to three
  warning regions, not eight."*
- **`rules_primer.md:464-468`** — three consecutive limbs on head contact kept as three, because
  *"consolidating them would produce one 1,500-word panel and bury two of the three."*
- **`offensive_zone_play.md:852-854`** kept in place: moving them behind the following blockquote would
  put the price of a technique cue two screens after the cue. ⚠️ **This is the brief's own stated
  tension resolved correctly — a warning at a section end is read after the instruction it qualifies,
  and for a listener that can be too late.**
- **The pilot declined to consolidate `:17`+`:19`** — one `"Important."` for two unrelated hazards
  means the second arrives un-escalated inside a long paragraph, which is the mid-paragraph defect
  reintroduced under the banner of fixing it.

---

## Findings handed back, NOT fixed — these are wave-2 rows

1. **`rules_primer.md:822` has ZERO rows of headroom** under `check_tables.py --near` (66 chars spare).
   Any edit adding a row silently costs a listener the whole table.
2. **`offensive_zone_play.md:832` and `:921` carry USA Hockey's late-hit window twice** in
   near-identical words, one mid-subsection and one at the end — *"the single biggest remaining flow
   win in this document"*, but content surgery on safety text needing a `safety-reviewer`.
3. **`offensive_zone_play.md:598` and `:628` restate each other** — the same 607(c)/(d)/(e) ladder and
   Casebook situations twice within one section, thirty lines apart.
4. **The crease scope is now inconsistent across the corpus.** `rink_map.md` and `center.md` name CARHA
   as a fifth book; `shooting.md:14`/`:293` and `offensive_zone_play.md:613` still read *"three of the
   four"*. ⚠️ **`:613` is a `Never:` line at 197/200 characters — three characters of headroom** — and
   the diagram caption `oz-net-front-screen` carries the same three-book framing. **Whoever takes it
   must land all four layers in one pass**, and captions are shared constants in
   `site/src/diagrams/*.mjs`.
5. **IIHF section name, four sites.** That book has no *"Definitions"* section; it is **Appendix II —
   Definition, Terminology & Terms** (singular). `rules_primer.md` fixed **three** sites — the census
   found two and the agent found a third, *"and its Definitions add the instruction"*, which the census
   regex could not see. **`special_teams.md:660` and `:1201` remain**, and `:1201` is in the Sources
   trailer, so the fix must reach body and trailer both.
6. **`goaltender.md` Key Takeaways has no puck-off-the-mask / say-something item** — present in four
   layers including Key focus, absent from the kernel. A gap in one summary layer, not a body-only
   caveat.
7. **Two speech-layer expansions at `rules_primer.md:762`**, both pre-existing: `pre-2014` speaks as
   *"the pre-twenty fourteen wording"* and `six feet (6')` as *"six feet (six feet)"*.
8. **`shooting.md:803` names only the IIHF where Common Mistakes `:831` names the IIHF and the NHL**,
   on the same rule number — a layer divergence a listener cannot reconcile.

---

## ⚠️ What this wave could not have found — and every agent said a version of the same thing

**It searched for the MARKER, so a hazard nobody ever marked is invisible to it by construction.**

One agent put it exactly: *"I read ⚠️-bearing paragraphs and decided whether they deserved the glyph;
I never once read an unmarked paragraph and asked whether it needed one."* Another: de-marking *"by
definition never surfaces one."* And the inverse — **a paragraph that should be a panel and is not** —
is the failure the corpus is most likely to contain, because `remark-corpus.mjs` carries a measurement
of **155 warnings rendering as plain prose against 104 inside panels.**

**That is wave 2's real scope, and it is the opposite of this round's.**

Also unreached:

- **The rendered page.** Between them the agents removed well over a hundred amber `.warn-inline` runs
  and converted panels to prose, and **not one of them opened a browser.** A de-marking that is right
  for audio could flatten a visual hierarchy a sighted reader depends on. ⚠️ **`site-reviewer` must
  confirm before this pattern reaches thirteen more documents.**
- **Whether the retained warnings are TRUE.** Every agent judged a callout's *shape*, not its
  correctness: *"a confidently-worded misstatement of Rule 69 passes that test exactly as a correct one
  does."* No rulebook claim was re-verified except the CARHA and IIHF sites named above.
- **Whether the de-marked disclosures are true.** Eleven were preserved verbatim and none was tested.
  `check_disclosures.py` was not run, and this project's own method note says the rotten ones are those
  **answered elsewhere in this repository since they were written**.
- **Whether the new marker counts are RIGHT.** One agent: *"I halved a number nobody has established a
  target for. The owner's complaint was qualitative; only a listening pass answers it."*
- **Cross-document sole-carrier risk.** Each agent held one or two files. **Nobody checked whether a
  de-marked limb is the corpus's only escalation for that hazard.**

---

# Addendum — the coordinator's two corrections were themselves wrong, and a 🔴 the wave found by accident

## 🔴 CRITICAL — `md_to_speech.py:3257` silently deletes the header blockquote from the audio, in all 39 documents

Found by the `faceoffs.md` agent while refuting its own brief; verified by the coordinator by rendering.

```python
if block.kind == "quote":
    if "rule set:" in classify_text.lower()[:40]:
        report.dropped["header-blockquote"] += 1
        continue
```

**Every document in the corpus opens with a `> **Rule set:**` blockquote — `grep -rl '^> \*\*Rule set:' content/ | wc -l` returns 39.** The drop is **whole-block, not line-scoped**, so anything else living in that blockquote never reaches a listener.

⚠️ **A census of what is stranded there found three documents carrying a marked header line whose text is restated nowhere below. One of them is the worst possible case.**

**`content/off-the-ice/conditioning_and_recovery.md:9` is the corpus's ONLY statement that it is not medical advice:**

> *"⚠️ **This document covers injury and health. It is a hockey document, not medical advice.** Nothing here diagnoses, treats or rehabilitates anything. Where it says 'see a professional', that is the actual instruction, not a disclaimer."*

**Proven absent from the audio.** `md_to_speech.py --only conditioning_and_recovery` renders 53 chunks and 118,318 characters; `"not medical advice"` scores **0** in the SSML while `"see a doctor"` scores 1. **A listener hears an entire document on groin injury, concussion and return to play with no scope disclaimer whatsoever.**

⚠️ **This is non-negotiable 4 — "never strip an honest disclosure" — being violated by the RENDERER rather than by an editor.** No checker sees it. `check_disclosures.py` renders through `md_to_speech`, so it inherits the same blindness. The other two stranded lines are `goaltender.md` (*"the IIHF flags below are not decoration"*) and `faceoffs.md` (*"Before you act on any IIHF flag below, find out which book is yours"*) — both orientation rather than hazard, and both lower-stakes.

**This is a row for whoever owns `md_to_speech.py`, and the fix is not obvious:** the drop exists because the `Rule set:` boilerplate is page furniture that would be tedious read aloud. **The block now carries non-furniture too.** Either the drop becomes line-scoped, or the disclosure moves out of the header.

---

## ⚠️ Coordinator correction 1 was wrong: there are THREE moves, not two

The coordinator broadcast mid-wave that *"'reduce the count' cannot be done by tidying markers within a paragraph — only by emptying a line completely, which is exactly the costly case."*

**False, and the pilot proved it on its own output.** `check_callout_flow.classify()` returns `"own paragraph"` **only when the line STARTS with the marker** (`scripts/check_callout_flow.py:47`). So:

| | move | census count | audio |
|---|---|---|---|
| 1 | **Keep the marker** — real limb | unchanged | unchanged |
| 2 | **Move the marker off the paragraph OPENING onto the hazard clause** | **drops** | **unchanged** |
| 3 | **Strip the last marker** — hedge only | drops | **loses the spoken `"Important."`** |

⚠️ **Move 2 is free, and the coordinator's correction foreclosed it.** It is the right answer wherever a marker sits on structural furniture — `⚠️ **What to notice.**`, `⚠️ **And a second example…**` — because the pseudo-heading is never the hazard while the paragraph often is. **It also repairs a real defect rather than merely hiding one:** a marker at a paragraph's head puts the spoken escalation on the word *"What"*.

**The `uk_rules.md` agent used it five times and measured zero audio difference across all five**, rendering before and after into separate named directories and diffing the de-tagged SSML.

⚠️ **And `important = "⚠" in text` is POSITION-INDEPENDENT** — a marker in a paragraph's last sentence still hoists `"Important."` to the FRONT of that paragraph. So a mid-paragraph marker is quiet emphasis on the page and a klaxon in the ear, **and nothing in either layer can see the divergence.**

**Blockquotes get the prefix too**, verified independently: converting a blockquote to prose costs an escalation if it was the only carrier.

## ⚠️ Coordinator correction 2 was wrong: the prescribed carrier test is vacuous in 13 of 39 documents

The coordinator told every agent to *"check that the limb is carried in that section's ` ```facts ` block."*

**13 of the 39 documents have no facts block at all**, including **`rules_primer.md`, `uk_rules.md` and `core_principles.md`** — three of the four most penalty-dense documents in the corpus, and **all three were live in this wave under that instruction.** Also `rink_map.md`, `equipment.md`, `getting_started.md`, `conditioning_and_recovery.md`.

⚠️ **A vacuous test is worse than no test, because it reads two ways and the dangerous one is available:** *"nothing is carried, keep every marker"* or *"the test is empty, de-mark freely."* In `uk_rules.md` — the corpus's densest British-competition scope material, with **no second rung at all** — the second reading would have been serious.

**The fallback, for a document with no facts block:**
1. **Does the de-marking remove any WORDS?** If not, only the spoken `"Important."` is at stake.
2. **Then it is purely the hurt/ejected/penalised test**, unchanged.
3. **As a substitute for the facts layer: is the limb restated in a NEIGHBOURING paragraph that keeps its marker?**

⚠️ **That third test caught a real regression.** The `uk_rules.md` agent de-marked a bare signpost at `:249`, which removed the run's only escalation — and underneath it found that `:253`, a competition scope limit carrying an **automatic game misconduct**, had **never carried a marker at all.** It moved the escalation onto the limb that actually bites. **That run now has escalation it did not have before the wave.**

---

## The panel measurement, which is better than the census and nobody was asked for it

The `uk_rules.md` agent measured the BUILT page rather than the source, and it reframes the defect:

> **34 amber warning panels holding 5,471 words — 21% of the page body. Largest: 633 words.**

`remark-corpus.mjs:615` wraps the **entire paragraph** in `<aside class="callout callout-warning">` when its text begins with the glyph. **So a 633-word rulebook exegesis and a 32-word warning render in identical amber.**

⚠️ **The defect is therefore not "32 hedges". It is ~26 genuine limbs attached to 150-to-650-word paragraphs.** That is the style guide's own *"if every callout is amber, none is"* at corpus-worst scale, and **it means the remedy is overwhelmingly placement and splitting, not removal** — which is what the owner asked for and what the census alone would not have told anyone.

After that agent's edit: **26 panels, 3,806 words, 15% of body.** ⚠️ **Those after-figures were modelled against the existing `dist`, validated 34/34 against it, but never rendered by Astro** — a build with `clean:cache` is the only thing that settles them, and no agent would run one mid-wave.

---

## What the addendum could not have found

**The header-blockquote census probed whether a marked header sentence's text appears below. It cannot find a header sentence that is PARAPHRASED below rather than repeated**, so the "3 of 39" is an upper bound on the problem and possibly an overcount — only reading each decides. **And it only examined MARKED header lines.** An unmarked disclosure stranded in a header blockquote — a provenance note, an edition caveat — is invisible to it, and there are 39 header blockquotes.

---

# Addendum 2 — the tool fixed, the corpus re-measured, and a third coordinator error

**Run after all eight agents finished, which is the only point at which a shared tool may change here.**

## The true figures, now that `classify()` is right

| | reported during the wave | **true, after the fix** |
|---|---:|---:|
| flow-breaking callouts (post-repair) | 371 | **668** |
| stacks of 2+ | 82 | **131** |
| callouts held in stacks | 57% | **58% (388 of 668)** |
| stacks that are **separate panels** | 53 | **111** |
| stacks that are **one blockquote** | 30 | **21** |

⚠️ **The bug was hiding 297 callouts — 44% of the population — and it hid them in the direction that
flattered the wave.** The corpus figure *after* eight documents were repaired is nearly double what the
tool reported *before* they were touched.

⚠️⚠️ **And the shape distribution inverted.** The old labelling said 30 of 83 stacks were a single
consolidated blockquote — the correct state. The truth is **21 of 131**. **Five in six stacks are
genuinely separate amber panels in a row**, which is exactly the owner's complaint and considerably
worse than anything reported during the wave.

## ⚠️ A third coordinator error, caused by trusting the tool

The coordinator told the `goaltender.md` agent, in writing:

> *"The largest run in the corpus is in your file at `:1049-1071` — and the tool labels it
> `[one blockquote]`, NOT nine separate boxes… I am telling you what it actually is: one long
> unbroken warning region."*

**It has blank lines at `:1052` and `:1056`. It is three panels, not one region.** The agent left it
untouched, correctly on the information it had, and said so: *"Both already do exactly what the owner
asked for… I moved nothing there, deliberately."* **The premise was the coordinator's and it was
false.**

⚠️ **That is three briefs in one wave whose premises the tool or the coordinator got wrong** — the
pilot's Key focus reading, the two-moves table, and this. **The instruction that saved every one of
them was "refute the brief before acting on it."** `goaltender.md:1049-1071` goes back on the list.

## What the tool now carries

- `classify()` tests emphasis (`**Bold.**`, `*Italic*`) as a **paragraph**, and a list bullet now
  requires `-`/`*`/`+` **followed by a space**.
- `stacks()` tracks **blank lines inside a run** and downgrades the label when it finds one.
- **`--markers`** prints markers per line: **1,507 marker-bearing lines, 639 carrying more than one.**
  ⚠️ **Those 639 are where de-marking is FREE** — the paragraph keeps its spoken `"Important."`. A line
  at exactly one marker loses the escalation. **Nothing made that distinction visible before, which is
  why the coordinator's two-moves table was wrong.** One line carries **34** markers.
- The docstring records the three moves, both limits on move 2, the position-independence of
  `important`, and the 13-documents-with-no-facts-block caveat.

## ⚠️ A fourth stranded header disclosure, found by widening the census to UNMARKED lines

The first census probed only *marked* header lines. Widened to every non-boilerplate header paragraph:

**`content/reading-diagrams/reading_ice_hockey_diagrams.md`** strands a **contact-legality** limb:

> *"**No symbol on this page tells you what your league permits.** Some routes here finish on an
> opponent, and the mark at the end of one says where the route stops — never whether you may make
> contact when you get there… under USA Hockey Rule 604(a) body checking is prohibited in 12 & under,
> all girls' and women's classifications and all non-check adult classifications, and Hockey Canada
> Rule 7.3 penalises it at U13 and below…"*

⚠️ **This is the same class as the medical disclaimer and it is a diagrams document whose routes
finish on opponents.** A listener is shown routes that end on a player with no statement that whether
they may make contact there depends on their age group and book. **It is in the dropped header block.**

**Four documents now strand header content**: `conditioning_and_recovery.md` (medical scope —
🔴 critical), `reading_ice_hockey_diagrams.md` (contact legality), `goaltender.md` and `faceoffs.md`
(both orientation, lower stakes).

---

# Addendum 3 — `center.md` and `winger.md`, and a coordinator claim that did not reproduce

**Written after a commit gate BLOCKED on C3/C8: these two files were in the staged diff and named nowhere
in this record.** `grep -c winger` on this file returned **0**. The one file in the change carrying new
rule text, new citations and a changed safety-layer facts line had no review record at all.

## ⚠️ First, the claim the coordinator made to the gate, and it was false

The coordinator's brief asserted: *"NO WORD OF CONTENT WAS REMOVED in any of the nine documents."*

**This record says FIVE** (see *"NOT ONE WORD OF CONTENT WAS REMOVED IN ANY OF THE FIVE DOCUMENTS"*
above), and five was correct. **The escalation from five to nine was the coordinator's**, and the gate
disproved it by normalising the glyph and `> ` prefixes out of both versions and diffing at word level:

| file | words at HEAD → staged | what actually happened |
|---|---:|---|
| `systems/faceoffs.md` | 57,819 → **57,672** (−147) | header blockquote **rewritten**, four paragraphs merged, prose re-derived |
| `positions/winger.md` | 29,097 → **29,231** (+134) | **new rulebook text**, three new citations, a changed `Rule:` line |
| `foundation/rules_primer.md` | 112,219 → 112,228 | *"Definitions appendix"* → *"Appendix II, Definition, Terminology & Terms"* ×3 |

The other six are byte-identical after normalisation, exactly as their agents reported.

⚠️ **The lesson is the one this project keeps recording: a correctly scoped claim loses its scope when
it is relayed.** The record said five and meant five; the brief said nine because nine files were
staged. **It is the same shape as quoting a round-13 defect snapshot as a twenty-round total**, and it
happened in a brief written by the person who had just written the record.

## `positions/winger.md` — a whole penalty tier propagated in

**The finding:** `winger.md` omitted the **match-penalty tier for charging a goaltender** that
`center.md` carried, in **both** the body (`:485` against `center.md:441`) and the ` ```facts ` block
(`:464` against `center.md:410`). It stopped at the game-misconduct tier. ⚠️ **The document that
omitted it is the one whose own words make its reader *"the player who stands at the net front more
than anyone."***

**The primary text, located independently twice** — by the agent before copying, and again by the
commit gate:

- **NHL 42.4** — `sources/nhl_rules.txt:5455`: *"if, in his judgment, the player attempted to or
  deliberately injured his opponent by charging"*
- **USA Hockey 607(e)** and **Hockey Canada 7.4(c)** — located verbatim in the flattened extractions
- **The IIHF negative**, tested with a positive control: `match penalt` scores **0** across all seven
  IIHF extractions on disk while `major penalt` scores **155–162**. ⚠️ **A control is what makes a zero
  mean something**, and this one has one.

`check_quote_drift.py` on `winger.md` goes clean **213 → 216**, flagged **0 → 0**.

⚠️ **C4 was still not satisfied and the gate was right to say so: the agent that wrote the text
verified it.** A `safety-reviewer` pass was dispatched afterwards, because this is contact material and
a match penalty, and C6 has no small-change exception.

⚠️ **One book away from biting, raised by the gate and handed on:** this document **names CARHA eleven
times** and writes *"four books of the five"* in its own faceoff sections, so a four-book scope is
inconsistent with the book set the document itself uses. The gate read **CARHA Rule 52** in full —
there is **no match penalty for charging**, so the new sentence is not wrong, **but CARHA 52(b) is a
MANDATORY *"Major penalty and a Game Misconduct… to any player who charges a goalkeeper while the
goalkeeper is within the goal crease"***, which sits awkwardly beside the neighbouring claim that
*"Hockey Canada's is only the one that is mandatory."*

⚠️ **The new `Rule:` line measures 296 of 300.** Four characters of headroom, and it is voiced alone.
**A CARHA qualification cannot be added later without evicting something** — which is the eviction
hazard `check_facts.py --near` exists for.

## `positions/center.md` and `winger.md` — the structural repairs

Both documents' crease subsections were **eight and six separate amber panels**, not the one-blockquote
regions the tool's label claimed. Consolidated to **2** and **1 panel + 1 prose paragraph**, with the
shared passage's spoken `Important.` count aligned at **5 and 5** (it was aligned at 6 and 6 before),
and a literal character-level diff showing 8 of 11 lines byte-identical — the three that differ being
deliberate per-position divergences.

**Two spoken pointers aimed at headings that do not exist, both repaired:**
- `winger.md` Check yourself Q2 pointed at *"§A Note on Language"* — that heading returns **0** in the
  file. Retargeted to `§Overview`. **A listener heard a pointer to nothing.**
- `center.md:373` pointed at *"§The crease is the one line you don't cross"*, **and said it was above
  when the real section is below.** Retargeted to `§Keep your body out of the crease` (`:396`).

⚠️⚠️ **AND THAT REPAIR REACHED ONE SITE AND STOPPED, WHICH THE GATE CAUGHT.** The same dead heading
name survived in `center.md`'s Sources trailer. **The gate reported two instances; there were THREE**
(`:773`, `:775`, `:787`) — the third sits past the display cut on a long line, so a `grep` that prints
the match looks like it found them all. **All three retargeted by the coordinator; a corpus-wide grep
for the dead name now returns 0.**

⚠️ **`check_links.py` cannot see any of these**, because a prose `§Section name` reference is not a
`file.md#anchor` link. **That is why C1 passed over a dangling pointer in every layer it lived in**,
and it is a standing gap, not a one-off.

## Dimensions, for these two files

- **D2 rules** — the three charging citations re-derived from primary text **twice, by different
  readers**. The IIHF negative controlled. `safety-reviewer` dispatched for the contact judgement.
- **D7 propagation** — ⚠️ **HALF REPAIRED IN THIS COMMIT, HALF STILL OPEN.**
  ⚠️⚠️ **CORRECTED 23 September 2026 by a commit gate: an earlier version of this entry read *"NOT
  SATISFIED… appears in no Common Mistakes bullet and no Key Takeaway in either"*, and that was FALSE
  of the tree it shipped with.** The gate measured it: `center.md` and `winger.md` each go **0 → 1**
  Common Mistakes bullet in this diff — *"Arriving into the goaltender…"* — and it re-derived all six
  books to confirm the bullet's content is right.
  **A record that denies a fix shipping in the same commit corrupts the evidence**, and
  `review_history.md` is partly reconstructed from these files. **That is why this is written out
  rather than quietly amended.**
  ✅ **Common Mistakes: repaired in both documents.**
  🔴 **Key Takeaways: STILL OPEN.** The gate tested the numbered takeaways directly — `center.md`
  KT8 and `winger.md` KT8 cover the crease and screening limb only. **A listener who hears only Key
  Takeaways learns to screen outside the paint and never learns that arriving into the goaltender is
  an ejection.** A reader who takes only the summary layer learns to keep their body out of the
  paint and never learns that arriving into the goaltender is an ejection in all four books and a match
  penalty in three.
- **D8 scope** — the CARHA question above, open.
- **D1, D5, D9, D11** — **not checked for these two files.** Declared, not silently omitted.

## ⚠️ What this addendum could not have found

The agent that did this work **read `center.md:750–796` and `winger.md:602–700` through `cut`**, and
declared it: *"Several Key Takeaways and Common Mistakes bullets in both files are longer than that, so
I have not read the tails."* ⚠️ **Given that the open D7 finding is *a penalty tier missing from the
summary layer*, the summary layer is precisely where coverage was worst.** A contradiction could be
sitting in a bullet tail nobody has read.

**And nobody censused these two files for OTHER duplicated passages.** The missing penalty tier was
found inside the one shared passage somebody happened to point at. **A systematic duplicate-passage
diff across the position documents has never been run**, and the same question — *who else is missing
this tier?* — is open for `goaltender.md`, `offensive_zone_play.md`, `rules_primer.md`, `rink_map.md`
and `language_and_glossary.md`.

---

# Addendum 4 — the rendered measurement, and a regression the wave created

**A `site-reviewer` pass could NOT clear C10.** The Chrome extension refused every page-acting call
against localhost with *"Could not verify this site's safety category"* — seven attempts, two URLs,
both `navigate` and `screenshot`. The extension was alive (`tabs_context_mcp`, `tabs_create_mcp`,
`resize_window` all worked); the gate is specific to localhost. ⚠️ **So no page in this round has been
seen by anyone, no screenshot exists, and every visual question is still open.**

⚠️ **A tab was left open at `https://localhost:4321/foundation/uk_rules/` because `tabs_close_mcp` hit
the same gate.**

**What it could do instead was measure the REAL Astro output in `site/dist` rather than model it.**

## ✅ The headline model HELD

The `uk_rules.md` after-figures, never rendered by Astro until now:

| | claimed | **measured in `dist`** |
|---|---:|---:|
| warning panels | 26 | **26** |
| words inside them | 3,806 | **3,803** |
| share of body | 15% | **14.6%** |

**A clean confirmation** — the three-word gap is tokenisation. ⚠️ **The BEFORE figures (34 / 5,471 /
21%) remain unconfirmed**, because that needs a rebuild of the prior state.

## ⚠️⚠️ CORRECTION — "THE CONSOLIDATION CREATED WALLS" IS FALSE. DATED FROM GIT, 23 September 2026.

**This section, and Addendum 4's heading *"a regression the wave created"*, assert that the callout
wave built the 2,868-word amber block on `positions/goaltender.md`. IT DID NOT.**

Largest consecutive blockquote run in `content/positions/goaltender.md`:

| ref | |
|---|---:|
| `79bdfde` — **before** the callout wave | **16,406 chars / 2,887 words** |
| `5737fb0` — the callout wave, as pushed | **16,406 chars / 2,887 words** |
| the following diff | 16,578 / 2,917 |

**Byte-identical across the wave. The wall predates it.** The later diff grew it by 30 words.

⚠️ **How the false claim got here, because that is the reusable part:** the wave *measured* the walls
for the first time — nobody had ever counted them — and a record written in the same breath as the
measurement attributed them to the work that found them. **Finding a defect and causing it are
different things, and a review record is the one place that distinction must hold**, because
`review_history.md` is reconstructed from these files.

⚠️⚠️ **AND THE DISAGREEMENT WAS ONLY RESOLVED BECAUSE A REVIEWER REFUSED TO SETTLE IT.** A
`site-reviewer` that had actually driven a browser over the page wrote: *"I cannot adjudicate
'pre-existing' vs 'a regression the wave created' from a browser. That is a git question, and the
review record and the coordinator disagree about it… Whoever resolves that disagreement should do it
from git, not from me."* **It was right to refuse, and it named the only tool that could answer.**
⚠️ **The coordinator had asserted "pre-existing" to a commit gate WITHOUT having checked, and was
right by luck until this measurement.**

## ⚠️ The original section, retained — its "created" framing is WRONG, see above. The MEASUREMENTS hold.

The brief worried one panel *"may now be a single amber block of roughly 10,000 characters."*
**That understated it.**

| page | largest single amber panel |
|---|---|
| `positions/goaltender` | **2,868 words / 16,012 characters** |
| `technique/shooting` | 2,096 w / 11,862 ch |
| `systems/offensive_zone_play` | 2,013 w / 11,440 ch |
| `foundation/rules_primer` | 1,966 w / 11,157 ch |
| `positions/winger` | 1,592 w / 8,959 ch |
| `positions/center` | 1,455 w / 8,242 ch |

**Seven panels are at or above ~8,900 characters.** ⚠️ **2,868 words inside one tinted block is not
"a consolidated warning… as succinct as possible." It is the owner's complaint converted from MANY
INTERRUPTIONS into ONE UNSKIPPABLE WALL**, and this round created it.

⚠️ **Nobody has seen any of them.** The reviewer declined to file the visual verdict for exactly that
reason, and was right to. **`/positions/goaltender/` must be looked at before this pattern reaches
thirteen more documents.**

## 🔴 The style guide's own test is STILL FAILING

> *"if every callout is amber, none is"* — `project/content_style_guide.md:1116`

Amber as a share of **all** callouts on the page:

`core_principles` **8/8 = 100%** · `goaltender` 97% · `uk_rules` 93% · `faceoffs` 89% ·
`rules_primer` 89% · `shooting` 79% · `center` 67% · `offensive_zone_play` 60% · `winger` 50%

⚠️ **`core_principles.md` has no non-amber callout at all**, and it is the document the owner named.
**The de-marking reduced the COUNT; the MONOCULTURE the style guide names is intact.** And `shooting`
(19.7% of body in amber) and `faceoffs` (18.8%) now carry a **higher** amber share than the page the
round was measured on.

## ⚠️⚠️ CORRECTION — THIS SECTION SHIPPED A FALSE FIGURE, AND THE REVIEWS DIRECTORY IS EVIDENCE

**Corrected 23 September 2026 by a commit gate that RENDERED both states instead of counting glyphs.**

**This section said *"101 spoken units lost their escalation"*. THE TRUE FIGURE IS 44.**

⚠️ **The error is the one this project's own conventions warn about: it counted the wrong thing.**
`md_to_speech.py:2778` computes `important = "⚠" in text` **per paragraph, as a BOOLEAN**, and `:2784`
emits **one** spoken `"Important. "` however many glyphs the paragraph holds. **101 is NET GLYPHS.
44 is paragraphs that lost their last one** — which is the only number that means anything to a
listener. **The measure is PARAGRAPHS, not glyphs, and this section's own text three paragraphs above
already said so** (*"one prefix however many glyphs"*), which is what makes it a self-contradiction
rather than a slip.

**Renderer-derived, HEAD against the staged tree:** `core_principles` **24 → 12**; across all fifteen
changed files **980 → 936**.

⚠️⚠️ **AND THE CONSEQUENCE WAS WORSE THAN A WRONG NUMBER.** A `safety-reviewer` was dispatched at
`:19` and `:177` — the two paragraphs this section named — **cleared them correctly, reported "12
spoken `Important.`", and the coordinator relayed that to the owner as *"12 before and after."*** It
was 12 **after**. **Before was 24.** **This document lost half its spoken escalations and twelve
paragraphs went unexamined**, because the brief pointed at the two that were fine.

**Ten of the twelve are epistemic hedges and correctly de-marked. Two are not**, per the gate:
`:71`'s *"if you cannot name your competition, you do not yet know what is legal for you"* — **the
corpus's only statement that this hazard has no on-ice cue** — and the *"Look before the puck reaches
you"* paragraph with its goaltender exception. **A fresh `safety-reviewer` has the list of twelve.**

⚠️ **The standing lesson: a figure about a SPOKEN layer must be derived from the RENDERER.** Glyph
counts, grep counts and diff counts all measure something adjacent and none of them measures what a
listener hears.

---

## ⚠️ The original section, retained — its 101 figure is WRONG, see above

Net glyphs removed, `HEAD` → working tree: `core_principles` 37→**15**, `offensive_zone_play`
127→**86**, `rules_primer` 395→382, `faceoffs` 159→152, `goaltender` 272→266, `uk_rules` 92→87,
`shooting` 143→138, `center` 108→106, **`winger` 58→58**.

**101 net.** Since `md_to_speech.py:2778` makes the glyph the sole trigger for a spoken
`"Important."`, **101 spoken units lost their escalation** — a content and audio change made in the
name of rendering.

✅ **Two clearances worth having.** ⚠️ **The ` ```facts ` layer was NOT touched — 9 glyphs at HEAD, 9
now, across all nine documents.** The layer the style guide calls most load-bearing, voiced alone with
300 ms breaks either side, is intact. And many removals are correct by design: an epistemic hedge
losing amber is the point.

⚠️ **The ones to look at again are PHYSICAL-TECHNIQUE instructions that lost the glyph in both
layers** — `core_principles.md:19` and `:177`, the *"spread the load: stick and gloves up on the glass,
arms out"* damage-limitation instruction, now unmarked in prose and no longer `"Important."` aloud.
**That is a `safety-reviewer` judgement and has not been made.**

## ⚠️ Two premises refuted, one of them the coordinator's again

1. **"Eight agents changed how warnings render across nine documents" is false.** On
   `positions/winger` **nothing changed** — 58 glyphs before, 58 after, 54 bold-warning runs before and
   after. On `positions/center`, two glyphs. **The callout sweep did not reach two of the five priority
   pages**; `winger.md`'s change in this diff is the propagated penalty tier, not callout work. The
   aggregate is real but concentrated in `offensive_zone_play` (−41) and `core_principles` (−22).
2. **A near-miss critical, recorded because the near-miss IS the finding.** The reviewer almost filed
   that the boards instruction *"Never turn your back… and never duck"* had been deleted. **It has
   not** — it survives at `core_principles.md:19`, `:177` (with its glyph) and `:210`. The first grep
   searched *"to the boards"* against a source reading *"to the wall"*. ⚠️ **A phrase-grep across a
   reworded paragraph manufactures a false deletion report**, which is the same shape as this round's
   `kickshot` false negative.

## What this addendum could not have found

**Everything visual.** No layout, no 400px overflow, no contrast in either theme, no focus rings, no
console errors, no audio player. ⚠️ **And the owner's actual question — "does the content read calmer
now?" — is STILL UNANSWERED by anyone in this round.** The measurements point two ways: fewer
interruptions, but bigger walls and an unchanged amber monoculture.
