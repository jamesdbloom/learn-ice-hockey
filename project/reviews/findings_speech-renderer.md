# Findings — speech renderer

⚠️ **Moved out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, VERBATIM and unedited.** The plan had grown to
17,632 lines and 633 sections, which the owner called *"too long and out of control … hard for you and me to
understand"*. These sections are finished work: round narrative, censuses of closed rows, retractions and
post-mortems. **Nothing here was summarised or rewritten** — a tidying pass in this repository once removed a
correct fact, so the content was relocated by line range rather than retyped.

**The plan keeps a one-line index pointing here.** 10 section(s).

---

### ✅ CLOSED — `scripts/md_to_speech.py`: both renderer defects, fixed BETWEEN waves as the row required

⚠️ **The row said to do this between waves, and that is when it was done** — no agent was live, and the
tool was verified before the next wave was dispatched. Changing a shared tool mid-wave is the recorded
round-59 failure and it was not repeated.

**1. The arrow — fixed LABEL-AWARE, because one global rule cannot serve both uses.** Reading all 25
(as the row demanded rather than sweeping) showed they are **two different notations**:
- **22 `Read:` values are CONDITIONALS.** *"F1 standing near the red line doing nothing → 1-3-1 or 1-4"*
  became *"…doing nothing, 1-3-1 or 1-4"* — **heard as a list of two things, with the inference gone.**
  These were the defect. Now *"…doing nothing **means** 1-3-1 or 1-4"*.
- **3 `Priority:` values are RANKED CHAINS.** *"Quick-up → Up → Wheel → D-to-D"*. ⚠️ **A comma survives
  here** — the value already ends *"taking the first option genuinely available"* — **so the row's
  warning that "several survive and several do not" was exactly right.** Now *"then"*, which carries the
  ordering the arrow was drawn for.
⚠️ **The fix lives in `render_facts`, not in `SYMBOLS`, and that is the point: a substitution good for
the conditionals is wrong for the chains and vice versa.** The **196** prose arrows — mostly link text and
tables — keep the comma they were written for. ⚠️ **An earlier version of this row said 137. Re-measured
twice, independently: 237 arrows in `content/`, of which 41 sit inside ` ```facts ` across 25 values
(labels `Read` 22, `Priority` 3), leaving 196 in prose.** `md_to_speech.py`'s comment and the round-71
record both carry 196; this row was the last place 137 survived.

**2. The flag — fixed, and it was wrong 126 times, not once.** `🇬🇧` rendered as *" For British readers, "*,
so it produced *"For British readers, The IIHF reaches the act by a different route."* Now a **full stop**,
which matches the house pattern this file already uses for ⚠ (*"Important. "*) and lets the sentence
start where it was written to start.

⚠️ **AN EARLIER VERSION OF THIS ROW SAID "every one of the 126 uses in `content/` is followed by a
capitalised sentence". THAT IS FALSE, and a commit gate refuted it by rendering the tree rather than
trusting the claim.** Measured **BEFORE the fix: 126 uses, of which 122 precede a capitalised word,
3 precede ⚠️ (which itself renders as "Important."), and ONE did not.** ⚠️ **AFTER the fix, recounted
live: 126 / 123 / 3 / ZERO.** ⚠️ **Both figures are correct and they are correct at different times —
which is exactly how a number copied out of its owner goes stale in silence. State the time, or state
nothing.** ⚠️ **The remaining ONE — `rules_primer.md:666` — used the
marker MID-SENTENCE as a connective**, where a full stop breaks the sentence in half. **The CONTENT was
fixed to honour the marker's contract; the renderer was not weakened to accommodate one site.**
**Verified in the rendered corpus: 126 uses, zero followed by a lowercase word, zero raw arrows left in
the speech.**

---

### ✅ CLOSED 3 September 2026 — `md_to_speech` HAD NO RULE FOR `@`

**Found 3 September 2026 by the agent restoring `getting_started.md`'s routing table — and it was found
ONLY because that repair made the corpus's ONLY email address audible for the first time.**

⚠️ **`@` is in no symbol table in `md_to_speech.py`** — verified independently by the coordinator, not taken
from the report. It reached the SSML **raw**, and `find_residue` reported `COMMERCIAL AT`. **A listener
would have heard "info-englandicehockey.com", or whatever the engine guessed.**

**The agent did the right thing twice:** it did not patch `scripts/` (coordinator-owned), and it rephrased
losslessly to *"the `info` mailbox at `englandicehockey.com`"*, which reads correctly aloud and clears the
residue.

✅ **DONE — `("@", " at ")` added to `SYMBOLS`, between waves with no agents live**, with the reason written
into the table beside the row. **Verified by probe, not assumed:** *"Write to editor at example.com for
details."* — no raw `@` survives, `find_residue` clean, and **`--self-test` still 260 assertions / 0
failures.**
**Any future email address hits this silently**, and the only reason this one did not ship is that a table
had been dropped from the audio and nobody had noticed either fault.

⚠️ **The general lesson, worth more than the fix: a defect in the SPEECH layer was invisible because a
DIFFERENT defect was hiding the text from the speech layer. Repairing one exposed the other.** There are
**11 dropped tables left**, and each is a region of the corpus the renderer has never been asked to read.

---

### 1b. ✅ RETRACTED — "32 swallowed headings" was a defect in the REVIEW HELPER, not in the audio

⚠️ **A terminology census reported that 32 section headings — including `faceoffs.md`'s **Key
Takeaways** and `zone_entries.md`'s **Common Mistakes** — were emitted inside the previous spoken
sentence, so a listener got no audible section break. I "verified" it independently and wrote it into
this plan as a live audio defect.**

⚠️ **BOTH OF US WERE WRONG, AND WE WERE WRONG THE SAME WAY: we both measured with
`md_to_speech.spoken_sentences`, and the bug was in that helper.**

**The audio was always correct.** Read straight out of the SSML:

```
<speak>
<break time="1000ms"/>
<p>Key Takeaways.</p>
<break time="450ms"/>
```

**Every heading sits in its own `<p>` behind a 1000 ms break.** Confirmed on both named cases.

**The real defect:** `spoken_sentences` split on `(?<=[.!?])\s+`. A sentence ending `.)` or `.)*` has
`)` before the whitespace, not a terminator — **so no split happened and the next heading came back
glued to the tail of the previous sentence.** Fixed to consume trailing closers; **32 hits → 0**, self-test
260 assertions clean.

⚠️⚠️ **THE LESSON, AND IT IS ABOUT THIS REPOSITORY'S TOOLING RATHER THAN ITS CORPUS.**
`spoken_sentences` was written **last round** to stop reviewers hand-rolling their own tag-strips —
after a hand-rolled one produced *"IIHF 's"* 79 times. **Within one round it had manufactured a
false finding in two independent reviews and got it into the plan.**

> **A shared helper that produces false positives is worse than no helper, because its output is
> trusted.** Every reviewer used it exactly as instructed and every one of them was misled.
> ⚠️ **And a coordinator "verifying" a finding with the same tool that produced it is not a second
> opinion.** The check that settled this was reading the raw SSML — the layer the helper abstracts.

---

### The measurement that made the split decidable, and it came from the renderer

The plan said the takeaway was **2,326 characters**. A correcting agent said **3,906**. Both are
markdown. **Rendered: 4,174 characters, about 4 minutes 48 seconds, and it was the ONLY takeaway in
the document that did not fit in one chunk.**

⚠️ **The agent then checked whether that mid-item split was itself a rendering defect — and it is
not.** Chunk 069 closes with **no** 300 ms break where 068 and 070 both have one: **the renderer
correctly signalling the item has not ended.** *"I nearly reported that as a finding and did not."*

**Split on the body's own seam**, giving 2,302 / 2,222 — both inside the range two existing items
already occupy, **each now in one chunk**, and the item is **longer in total than before**. Nothing
compressed, which is what three rounds of evidence says: *"every critical came from compressing."*

---

### ✅ CLOSED — 27 chunks were producing NO AUDIO, and the cause was NOT missing punctuation

**Found by census, not by any brief.** `md_to_speech.py` splits an over-long paragraph **only at a
sentence end**. A long semicolon or em-dash chain gives it nowhere legal to cut. Two agents tripped
over the symptom independently — a chunk opening mid-sentence, once **inside a verbatim IIHF
Situation Handbook quotation** — and one of them named the cause and said the census *"is a
one-command census and it is not run."* It has now been run.

⚠️ **27 chunks exceeded the SERVICE's hard limit of 3,000 billed characters**, the largest **3,493**,
in 8 documents. **SynthesizeSpeech refuses such a request, so those chunks produced no audio at
all** — and nothing said so: the renderer exited 0 and the report looked clean.

**Two renderer changes, both made:**

1. ⚠️ **The existing fallback had a trigger too narrow to do its job.** It read `len(groups) == 1`,
   so a paragraph that split into **two** groups with one still over the limit **never reached the
   fallback**. Widened to fire on any oversized group, and it now retries **only the offending
   group** — re-splitting the whole paragraph would cut mid-clause in the parts that split cleanly.
   **Every chunk now fits: max billed 2,852 against a limit of 3,000, zero over** —
   ⚠️ **A "cost" of 133 → 183 mid-sentence openers was recorded here and is RETRACTED
   — the metric counted verbalised section headings (*"one. Rink dimensions"*), and the
   genuine figure is zero both before and after.** See the round record. **And the
   diagnosis behind this whole row was then refuted: the cause was not missing
   punctuation.** The splitter tested one token at a time, so a group crept past the
   budget *inside* a sentence and could only be cut at the next boundary, by which
   point it was already oversized. It now packs whole sentences. **Rescues: 80 → 0.
   Oversized chunks: 24 → 0. No markdown change required for either.**
2. **`--report` gained two sections**, `SPLIT MID-CLAUSE` and `OVER THE SERVICE LIMIT`, the first
   listing every rescued paragraph **against its document**.

⚠️ **THE RESCUE IS NOT THE FIX, AND THE REPORT IS DELIBERATELY KEYED SO IT CANNOT HIDE ONE.** A
rescued paragraph still breaks mid-sentence for the listener. Had the fallback simply been widened,
the oversize list would have emptied and the source defect would have gone silent — so the fallback
**records every paragraph it rescues** and the report prints them. **Fix the source and the list
empties. Nothing else empties it.**

⚠️ **THE WORKLIST BELOW IS CLOSED AND ITS PREMISE WAS WRONG. Read this before acting on it.**
An agent instrumented `_split_paragraph` and found **every** rescued paragraph carried **8 to 21
legal sentence boundaries**. The splitter tested **one token at a time**, so a group crept past the
budget *inside* a sentence and could only be cut at the next boundary — by which point it was
already oversized. **Any `<p>` over the budget was guaranteed a rescue whatever its punctuation.**
Two changes fixed it in `scripts/`: `RE_SENTENCE_END` now accepts a closing quote (it could not see
`."`, while `RE_SENTENCE_TAIL` five lines away could), and `_assemble` packs **whole sentences**.
**Rescues 80 → 0, oversized chunks 24 → 0, 0 malformed XML, max billed 2,846 — no markdown change
required.** ⚠️ **Four agents were dispatched against the wrong diagnosis. Their punctuation work
stands on its own merits, but it is new unreviewed text written to solve a problem in the code.**

**The (now empty) worklist — was 80 paragraphs in 24 documents.** Get it from
`python3 scripts/md_to_speech.py --report | sed -n '/SPLIT MID-CLAUSE/,/documents\.$/p'`.
⚠️ **Do not copy a count out of here — run the command.** Leaders: `rules_primer` **29**
(dispatched), then `defending_the_rush`, `defensive_zone_coverage`, `body_contact_and_battles` **5**
each, `risk_management`, `defender`, `shooting` **4** each.

**The repair is PUNCTUATION** — a semicolon or em-dash chain becomes full stops. ⚠️ **Never split
inside a verbatim quotation.** The pattern that worked was to break the quotation into **verbatim
segments with attributions between them**, re-verifying every word against the primary text
flattened first — v1.1 hyphenates `pla- ne` across a wrap.

⚠️ **A coordinator heuristic that mapped these to files by string-matching was BADLY WRONG** — it
put 28 on `mental_game.md`, which has none, and missed that `rules_primer` had 29. It was replaced
by attribution inside the renderer. **Recorded because the wrong list was one dispatch away from
sending four agents to the wrong files.**

---

### ✅ CLOSED — constructs reaching the audio unhandled: now ZERO

⚠️ **Do not quote the old heading's figure.** It said 13; the number moved several times as
rounds both fixed and added constructs, and **it is now 0** — run
`python3 scripts/md_to_speech.py --report` and read `UNRECOGNISED CONSTRUCTS`, which prints
`(none)`. **The tool owns the count. This file must not.**

Closed by handling the last four, each verified in context before it was touched:

- **The IIHF's `➔` cross-reference marker**, which the corpus keeps inside verbatim quotations
  — *"in violation of ➔ Rule 63.8 – Delaying the Game or ➔ Rule 81 – Icing"*. **Dropped, not
  voiced:** it is punctuation, not a word; *"arrow"* is noise, and *"see"* would put a word into
  a quotation the book does not contain.
- **The USA Hockey Casebook's own sub-clause form**, `630(d.3)`, which voiced as *"six hundred
  and thirty(d.3)"* — the parenthetical reaching a listener as raw characters. Now *"clause d
  point three"*, so it can be written down and looked up. ⚠️ **The corpus quotes that form
  because the Casebook cites a clause the printed rule does not contain** — the book's error,
  recorded rather than repaired, and it must stay quotable.

**Both are self-tested**, along with the ordinary lettered clause beside them, so a future
widening of that pattern cannot silently break `624(b)`.


`md_to_speech.py --dry-run --report` → **13 unrecognised constructs**, meaning they reach the SSML
with no spoken form:

- **`➔`**, the IIHF's cross-reference arrow — ×4, inside **verbatim rule quotations this round added**
  (*"in violation of ➔ Rule 63.8 – Delaying the Game or ➔ Rule 81 – Icing"*). ⚠️ **Quoting the books
  more faithfully increased this count.** The right rendering is probably *"see Rule 63.8"*, or
  dropping the glyph — **but it sits inside a quotation, so changing it changes a quotation.** That is
  a decision, not a sweep.
- **`(d.3)`** ×2 — a rule sub-clause form the citation rules do not cover.
- **`●` `○` `▲`** ×3 — drop-sheet glyphs in a passage that is *about* what the glyphs mean, so a
  listener gets the least of it exactly where it matters most.

**Precedent for how to fix it:** the `parenthesised-minutes` rule added this round shows the shape —
a narrow rule, ordered before the general one, discriminating on context, **with self-test cases**.
Re-run `--self-test` for the current count — a figure written here goes stale the moment the next rule lands, and four of them did in this round alone.

---

### T0-P42 ⚠️ MID-PARAGRAPH `⚠️` MARKERS ARE DROPPED SILENTLY IN AUDIO — corpus-wide

Measured by the reviewer through the renderer: the `⚠️` marker is voiced (as *"Important."*) **only at
the head of a bullet**. **The four mid-paragraph `⚠️`s in one bullet — including the one on the Casebook
escalation — do not exist in audio at all.**

⚠️ **So every emphasis this corpus places with a mid-paragraph ⚠️ is invisible to a listener.** That is
a corpus-wide layout finding, not a local one, and **no checker looks for it.** Needs a census: how many
safety flags rely on a marker the listener never hears?

---

### T0-P42 — ⚠️ CORRECTED: markers are NOT dropped. 875 COLLAPSE into an earlier one

Coordinator census, confirming the renderer's own table (`md_to_speech.py:313` maps `⚠` → `""`):

- markers at the **head** of a unit, voiced as *"Important."*: **355**
- markers **mid-unit**, dropped silently: **1,569**
- documents containing at least one: **36 of 37**

⚠️ **So more than four fifths of this corpus's emphasis markers do not exist for a listener** — including,
as the reviewer found, the one placed on a Casebook escalation carrying *"serious and possibly life
altering injury"*. **No checker looks for this.** The question for the next round is not the count but
**how many mid-unit markers carry a SAFETY flag whose sentence would otherwise read as ordinary prose.**

---

### T0-P46 ⚠️ CORRECTED — the list is NOT dropped; it is UNNORMALISED. My measurement was the defect

**Found by an agent, verified by the coordinator through the real renderer:**

```
Rule six hundred and forty(b        ← "Rule 640(b, c, d, e or f)"  — bracket raw, c/d/e/f LOST
six hundred and forty, clause g     ← bare "640(g)"                — correct
six hundred and forty, clause h     ← bare "640(h)"                — correct
```

⚠️ **A listener hears the rule number and ONE clause letter; the rest of the enumeration does not exist.**
In `breakouts.md` that string carries the escalation route — *"any actions falling under Rule 640(b, c,
d, e or f)"* — so **the sub-sections that make the escalation reachable are the part dropped.**

⚠️⚠️ **THIS IS A DOCUMENTED RECURRENCE, IN THE SAME FUNCTION, AND THE CODE SAYS SO.**
`scripts/md_to_speech.py:788`, in `_rule_citation`:

> *"⚠️ THE THIRD CODE PATH. `_bare_clause` and `_usa_clause_citation` gained clause-tail handling first;
> this one — the form WITH the word 'Rule' — was missed, so `Rule 8.1(c)/(d)` still dropped its second
> clause while `8.1(c)/(d)` did not. **Found by a self-test, not by reading.**"*

**The "Rule"-prefixed path lagged the bare path once for `/`-separated clauses. It lags again for
comma-separated lists.** The fix then was per-separator; **the lesson is that the two paths need the same
clause grammar, not another patch for another separator.**

**Measured exposure:** `Rule NNN(x, y[ or z])` → **17 occurrences across 7 documents**.
`Rule NNN(a.N)` (USA Hockey's dotted form) → **0 in `content/`** — the agent that hit it routed around it
in its own text, so the corpus does not currently carry that variant.

⚠️ **COORDINATOR GROUND, AND STRICTLY BETWEEN WAVES.** `scripts/` is shared state; round 59's lesson is
that a tool changed mid-wave made an agent report *"no finding in any report should rest on that tool's
output today."* **Three agents are live. This waits.**
⚠️ **And when it is fixed: add a self-test, because that is what found it last time.**

---

### T0-P46 — the citation bug has a FOURTH code path, and it was nearly the first live instance

`scripts/md_to_speech.py`'s `rule-citation` rule (~:1683) has `c1` alternatives
`[ivxIVX]{1,6}|[a-z]|\d{1,2}` — ⚠️ **missing the `[a-z]\.\d` alternative that `_usa_clause_citation`
(:1115) has.** So **`Rule 625(a.1)` voices as *"Rule six hundred and twenty-five(a.1)"*** — raw
characters reaching the listener — while the bare `625(a.1)` voices correctly.

⚠️ **This is the FOURTH code path of the bug the file's own comment at :788 documents for the first
three.** **Census: `Rules? \d{2,3}\([a-z]\.\d\)` returns 0 in `content/` and 0 in `site/src/diagrams/`,
with a positive control run** — so the zero is real, **and the agent's first draft would have been the
first live instance.** It rewrote to the bare form rather than ship it. **One-alternative fix, coordinator, between waves.**

**And T0-P82 resolved:** the *"nine places"* comment should read **five** — 3 fixed + 2 out of scope.
*"Nine"* came from the superseded self-account the plan itself declares wrong two paragraphs later.
