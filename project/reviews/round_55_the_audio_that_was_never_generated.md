# Round 55 — the audio that was never generated

**Status: COMPLETE for the work committed under it.** Every agent dispatched in this
round has landed and its result is recorded below; all fifteen dimensions are answered
and *"what this round could not have found"* is written.

⚠️ **Complete is not the same as clean.** The rows this round opened rather than closed
are in [`project/plans/OPEN_ITEMS.md`](../plans/OPEN_ITEMS.md), and two findings are
recorded here as deliberately unresolved rather than fixed — the reading of IIHF 48.1's
*"in the direction of the Player"*, which nothing on disk settles, and the unmarked
warning glyphs, whose cause is now established and whose disposal is a design decision.
**Neither should be read as closed.**

---

## The finding this round is named for

**27 chunks of the corpus produced no audio at all, and nothing said so.**

`md_to_speech.py` splits an over-long paragraph **only at a sentence end**. A long
semicolon or em-dash chain gives it nowhere legal to cut. There was already a
fallback for that — and its trigger was `len(groups) == 1`, so a paragraph that
split into **two** groups with one of them still over the limit **never reached it**.
Those chunks shipped oversized. AWS Polly's `SynthesizeSpeech` refuses any request
over **3,000 billed characters**; the largest chunk was **3,493**.

The renderer exited 0. The report looked clean. `check_links.py`, `check_facts.py`,
`check_absolutes.py` and `check_geometry.py` all passed — **none of them renders
anything**, so none of them could see it. It would have surfaced at synthesis time,
against an AWS bill, or not at all.

### How it was found — and it was not found by looking for it

Two agents, working different directories and unaware of each other, hit the
*symptom* and reported it as an anaphor defect: a chunk opening on a fragment. One
of them declined that diagnosis and named the cause instead —

> *"Neither was on the flag list, because neither is an anaphor: the renderer had
> split an over-long unit and the chunk opened mid-sentence. **These two bullets are
> the real defect. The anaphors are a symptom.**"*

— and then declared what it could not do: *"Nobody has measured how many units in the
corpus exceed the renderer's split budget. **That is a one-command census and it is
not run.**"* It was run, and it returned 27.

⚠️ **The lesson is the handover, not the bug.** Both agents were dispatched to fix
anaphors. Neither was asked about chunk length. The finding came from the sentence
every report is required to end with.

### What was changed

1. **The fallback trigger was widened** to fire on any oversized group, and it now
   retries **only the offending group** — re-splitting the whole paragraph would cut
   mid-clause in the parts that split cleanly, and those parts are not the problem.
   **Every chunk now fits: max billed 2,852 against a limit of 3,000, zero over.**

   ⚠️ **THAT SENTENCE STATED ONE SIDE OF A TRADE, THE COST WAS THEN MEASURED WITH A
   BROKEN METRIC, AND THE DIAGNOSIS BEHIND ALL OF IT WAS THEN REFUTED. All three steps
   are kept here, because the middle one is the instructive part.**

   The first draft said only *"every chunk now fits"*, which ignores that a rescue
   **is** a mid-sentence break. So the cost was measured — *"mid-sentence chunk openers
   went 133 → 183"* — and written into this record and into the plan.

   ⚠️ **That figure was almost entirely an artefact.** It counted any chunk whose first
   character was lower-case, and this corpus **verbalises its numbered section
   headings**: *"one. Rink dimensions"*, *"two. The full-rink map"*. Re-measured with
   ordinals excluded, **120 of the flagged chunks were headings rendering perfectly,
   and the genuine count is 3 — all three of which are also verbalised headings**
   (*"four on four…"*, *"three on two:"*, *"one three one spread."*). **The real number
   is zero, and it was zero before.** The comparison was internally consistent, so its
   direction was real; **the magnitude was noise, published as measurement.**

   ⚠️ **The lesson is one this project keeps paying for: a metric whose output nobody
   has read is not a measurement.** I sampled it only after a third change forced a
   re-run — and an agent, working from the same contaminated shape, reported *"44 → 56
   in my ten files"* and attributed 12 to its own repairs. **Neither of us was
   measuring what we thought we were.**

2. ⚠️ **The rescue is not the fix, and the report is keyed so it cannot hide one.**
   Widening the fallback alone would have emptied the oversize list and taken the
   source defect silent with it. So the fallback **records every paragraph it
   rescues**, and `--report` prints them against their documents under
   `SPLIT MID-CLAUSE`. **80 paragraphs in 24 documents.** A listener still hears a
   break placed mid-sentence in every one. **Fix the source and the list empties;
   nothing else empties it.**
3. `POLLY_BILLED_LIMIT` and `POLLY_TOTAL_LIMIT` are now named separately from
   `MAX_BILLED_CHARS` — **the service's refusal threshold is not the same fact as our
   own budget**, and conflating them is what let a chunk sit between the two.

⚠️ **A coordinator attempt to map those 80 paragraphs to files by string-matching was
BADLY WRONG** — it put 28 on `mental_game.md`, which has none, and missed that
`rules_primer.md` had 29. It was thrown away and replaced by attribution inside the
renderer. **It was one dispatch away from sending four agents to the wrong files.**

---

## The diagnosis was wrong, and an agent refuted it with instrumentation

⚠️ **This is the round's best piece of work and it was done by an agent sent to do
something else.**

The brief said: *"A long semicolon or em-dash chain gives the splitter nowhere legal to
cut."* It was dispatched to `rules_primer.md`, which held **29 of the 80** rescued
paragraphs, and told to fix them with punctuation.

**It cleared 1 of 29, and reported that the one cleared by accident.** Then, instead of
grinding on, it **instrumented `_split_paragraph`** and dumped every atom with its break
flag for all 29 groups. **Every one carried 8 to 21 legal sentence boundaries.** The
splitter had places to cut and was not using them.

It proved the brief false in both directions: adding full stops to a rescued paragraph
moved the chunk lengths (3,362 → 2,893; 3,266 → 2,969) and **cleared nothing**; and the
single paragraph that did clear cleared because an unrelated citation edit had lengthened
it into the narrow window where a break happens to land.

### The real mechanism

`_assemble` tested **one token at a time**:

```python
candidate = current + [token]
if current and breakable and _exceeds_limits(<p> + candidate + </p>):
```

So `current` crept past the budget **inside a sentence**, and the cut could only fire at
the next breakable atom — by which point the group it emitted was **already oversized**.
Two details compounded it, both found by the same agent:

- `RE_SENTENCE_END.split` leaves an **empty final piece** when a token ends `". "`, so
  the breakable atom was frequently a **zero-length token**. `current + ['']` can never
  trip a size test. **And that empty piece then set `prev_ended = False`, marking the
  real next token unbreakable.**
- `RE_SENTENCE_END` was `(?<=[.!?…])\s+`, which **cannot see a sentence ending in a
  closing quote.** `He said "keep the stick down." The next sentence follows.` split
  **nowhere**. ⚠️ **`RE_SENTENCE_TAIL`, five lines below, already accepted trailing
  closers — the two regexes disagreed about what ends a sentence.** In a corpus built on
  quoted rulebook text, a large share of sentence ends were invisible.

**Stated exactly: any `<p>` over the budget was guaranteed a rescue whatever its
punctuation.** `rules_primer.md` holds 31 such units, the largest **10,349 spoken
characters in a single bullet**.

### The fix, and the verification

Two changes: `RE_SENTENCE_END` gained two fixed-width lookbehind branches so a closing
quote stays with its sentence; and `_assemble` now **groups tokens into sentence units
first and packs whole sentences**, so the test asks the only question that matters —
*does the next whole sentence still fit?*

⚠️ **The agent proposed the second one, measured it, and did not apply it, because
`scripts/` was not its file.** That is the ownership rule working exactly as intended.

**Verified independently by the coordinator after applying both**, not taken on trust:

| | before | after |
|---|---|---|
| paragraphs rescued mid-clause | 80 | **0** |
| chunks over the service limit | 24 | **0** |
| malformed XML | — | **0 of 2,092** |
| max billed characters | 3,493 | **2,846** |

**No markdown change was required for any of it.**

### The verification that mattered: splitting must not change content

Counts prove the chunks fit. They do not prove the words survived. So the corpus was
rendered twice — current code, then with **only `_assemble`** reverted — and the
**concatenated spoken text of every document** compared.

**24 of 37 documents byte-identical.** Of the 13 that differed:

- **11 were whitespace, and all in the new code's favour.** The old splitter cut between
  a token and its following punctuation, and each group is trimmed independently, so it
  emitted *"eight point three, clause b **'s** first sentence"*, *"Interpretation five
  **,**"*, *"the two (two **)** Players"*. **The new code does not, because it never cuts
  inside a sentence.** That is a small audio-quality defect nobody had reported, fixed as
  a side effect.
- **2 were not the renderer at all.** `how_to_watch_hockey.md` and `skating.md` changed
  **between the two renders**, because the agent that owns `content/technique/` and
  `content/off-the-ice/` was live and editing them. Both changes were its anaphor
  repairs landing correctly: *"Two important caveats."* → *"Two important caveats **about
  zone starts**."*, and *"Two apparent conflicts **with the boards section above**"* →
  *"…**between falling to the ice and arriving at the boards**"*, replacing a
  print-position pointer that means nothing aloud.

⚠️ **That second bullet is the warning, not the reassurance.** A content-equality check
run while writers are live **cannot distinguish a renderer bug from a concurrent edit**,
and it took reading both diffs to tell them apart. **The comparison is only conclusive
because the two exceptions were in files owned by a known live agent and were both
obviously its work.** On a quiet tree it would have been proof; here it is proof plus a
judgement, and the judgement is recorded rather than hidden.

Total spoken characters: 4,548,060 → 4,548,000, the difference being the removed spurious
spaces and those two edits.

⚠️ **So the worklist this round created — "80 paragraphs need punctuation" — was mostly
wrong, and four agents were dispatched against it.** Their punctuation work stands on its
merits (a 763-character spoken sentence is bad prose regardless) but **it was not the fix,
and it is new unreviewed text written to solve a problem that was in the code.**

⚠️ **The `SPLIT MID-CLAUSE` report section stays.** It now reports nothing, which is the
correct state, and it is the thing that will notice if a genuinely unbreakable paragraph
is ever written.

---

## The audio was more confident than the page, at 17 points

`SYMBOLS` maps `†` to `""`. All 17 daggers in the corpus are in
`on_ice_communication.md`, marking *"no published coaching source documents this as a
spoken call"* — and **two voiced sentences tell the listener to look for a mark they
will never hear**: *"Calls marked with a dagger **()** below…"*. Each of the fifteen
marked calls is then voiced with no marker at all.

⚠️ **The direction of harm is precisely what non-negotiable 4 exists to prevent.**

⚠️ **This was NOT fixed in the renderer, and the decision is the point.** A glyph's
meaning belongs to the document, not to a global symbol table; hardcoding
*"undocumented as a spoken call"* would be wrong the first time any document used a
dagger as a footnote. **The repair is content-side.** Recorded here rather than
patched because the tempting fix is the wrong one.

---

## Other renderer defects, found by the reader-only-layer audit

| | Status |
|---|---|
| **`render_facts` dropped `⚠️` with nothing replacing it**, while `render_paragraph` and `render_list` both said *"Important."* for the same glyph. Ten facts values carry it and **every one is a rule-set divergence or a penalty** — dropped in the layer the style guide calls most load-bearing, and the only layer voiced entirely alone. | **FIXED** |
| **A markdown table inside a blockquote bypassed `render_table`** and flattened to an unlabelled comma stream — column heads once, then 21 numbers with nothing saying which column any was in. The corpus's only blockquoted table is the net-front penalty-enrichment table that **refutes the cross-checking folklore**. An earlier fix here had stripped the separator row and a comment called the result *"the least-bad reading available"*. ⚠️ **It was not.** Now routed through `render_table`: narrow tables get prose mode with the head re-announced per cell, wide ones get an honest pointer, and **both are now visible to the tables-as-prose / tables-as-pointer counters, which could not see them at all.** | **FIXED** |
| **A long uncommaed digit run voiced as a quantity** — the NHL game-ID range `2024020001–2024020400` became *"two thousand and twenty-four **million** twenty thousand and one to…"*. Censused first: **every** such run in `content/` is an identifier (game IDs, PMIDs, DOI fragments, archive timestamps, URL segments, ddmmyyyy dates) and **not one is a quantity**, because this corpus writes large quantities with thousands separators — which the pattern excludes. That exclusion is what keeps the rule safe, and it is self-tested in both directions. | **FIXED** |
| **`--report` undercounted dropped Sources sections: 35, not 37.** In two documents the trailer sits **inside** the already-skipped `## Notes on verification`, so the section-skip's `continue` fired before the sources check. Output was identical; only the count was wrong — **and the two it could not see are exactly the two where the trailer is buried**, which is where an author would least expect it. | **FIXED** |
| **Feet and inches reached the listener raw.** A `6'4"` goaltender voiced as *"six'four""*, and `65"` simply lost its unit. Also: **a range whose unit is the inch mark lost its "to"** — `38–44"` was *"thirty-eight forty-four inches"* while `38–44 inches` was already correct. ⚠️ **The inch mark was a unit nowhere.** The guard is the hard part: a straight quote after a digit is an inch mark **or a closing quotation mark**, and this corpus has both. A quote-parity count was written, tested, and **thrown away** — it has to decide whether the quote after `19` in *"I've got 19", "you take 7"* is an inch mark in order to count it, which is the question being asked, and it turned `7` into *"seven inches"*. Replaced by a left-to-right open/close scan. Four corpus sentences that must **not** gain inches are self-tested. | **FIXED** |
| **A URL path voices its slashes as *"or"*** — `api-web.nhle.com/v1/gamecenter/{id}/play-by-play` becomes *"api-web.nhle.com **or** v one **or** gamecenter…"*. Not fixed: `/` → *" or "* is right in ordinary prose (*and/or*), and a global change is riskier than the defect. **Whether a URL should be voiced at all is the better question.** | **OPEN** |

---

## Half-rules found by agents verifying their own repairs

⚠️ **Both of these were found by an agent that had gone to the primary text to check a
sentence it was rewriting for a different reason.** Neither was in any brief.

**NHL 39.2(iii) — a discretion carve-out dropped at both of its sites.** The corpus listed
banging the boards with a stick as a penalised act. The rule continues: *"If this is done
in order to get the attention of the on-ice officials for a legitimate reason (i.e.
serious injury, illness, etc.), then discretion must be exercised by the Referees."*
`mental_game.md` quoted the clause **verbatim without it**. So the corpus told a player
that hammering the boards is a penalty, in a document about composure, and omitted that
the one time you would actually do it — a teammate is hurt — is the exception the rule
writes in. **Added at both sites; grepped corpus-wide, so propagation is complete.**

**USA Hockey Casebook Rule 625, Situation 10 — the corpus kept the relief and dropped the
restriction.** It carried *"momentarily places their stick and/or skates in the goal
crease"* is not a stoppage, and not the sentence after it: *"However, if a goal is scored
while an attacking player has their stick and/or skates in the opponent's goal crease
while the goalkeeper is in the crease, the Referee shall have no alternative but to
disallow the goal."* ⚠️ **A phrase grep returns ZERO on that sentence** — it was found only
by a whitespace-flattened read. Repaired at four sites across three documents.

⚠️ **The coordinator dispatched Situation 10 as a "low-severity omitted relief"**, reasoning
that omitting a relief only makes a reader more cautious. **The corpus had kept the relief
and dropped the restriction — the opposite error, and the one that costs a reader a goal.**
The reasoning was plausible and wrong: *"an omitted relief is safe" is only true if the
relief is the part that is missing*, and nothing in the brief had established which half
was gone.

⚠️ **The finding agent said plainly that no method it ran would have surfaced this** — a
brief happened to point at that situation. **The same shape may sit in any Casebook
situation the corpus quotes half of, and nobody has censused that.**

---

## A rule dated from a blog is now dated from two editions of primary text

`body_contact_and_battles.md` asserted NHL Rule 60.1 was *"rewritten for 2025-26"*,
and the corpus's rule-change history for it was **Scouting The Refs, a blog** —
`CLAUDE.md` non-negotiable 2. Only one NHL edition was on disk and the book dates no
rule.

⚠️ **The claim was true.** Non-negotiable 3 forbids deleting a claim for being
unsourced, and this is why. Two editions settle it:

| | 2024-2025 | 2025-2026 |
|---|---|---|
| **60.1** | *"A 'high stick' is one which is **carried above** the height of the opponent's shoulders."* | *"…one which **contacts** an opponent above the shoulders, **provided their shoulders are at waist level or higher**."* |
| **60.3** | *"When a player **carries or holds** any part of his stick above the shoulders and makes contact with his opponent's neck, face or head so that injury results"* | *"When a player makes contact with his stick on an opponent's neck, face or head **(above the height of the opponent's waist)** so that injury results"* |
| **60.2** | identical | identical |

Both quotations were re-verified by the coordinator, in both extraction views,
after the fetch. **The whole waist floor is new in 2025-26** — and **IIHF 2025/26
v1.1's 60.1 is word for word the NHL's superseded sentence**, which is why the two
books diverge and why the British reader is on the older test.

**The edition is registered** in `scripts/fetch_sources.sh` and `sources/README.md`,
and **fetched** — 12.7 MB, both extraction views present. ⚠️ **It was added to
`DUAL_EXTRACT` deliberately**: `nhl_rules.txt` is the *plain* extraction, and
extracting the two editions by different methods would make every diff between them
an artefact of the method rather than of the rewrite, which is the one thing this
file is held for.

⚠️ **Registering and not fetching is the CARHA defect, and it repeated once already
this round** — CRT6 was registered in `README.md` and `fetch_sources.sh` and never
fetched, in the very commit that extended the trap warning about it. The fetch was
run here before the row was called done.

⚠️ **What it does NOT establish, written into both files so it cannot drift:** it
dates the **first edition carrying the change**, nothing more. The NHL book has no
rule-change summary, and no edition earlier than 2024-2025 has been consulted, so how
long the older wording stood is **not established**. A brief this round cited
*"Rule 28.6"* for a dated NHL rule; there is no Rule 28.6, it is **64.3**, and it
dates a **memorandum**. Check what a date is dating.

---

## The style guide under-recorded a printed-rulebook error by an order of magnitude

`content_style_guide.md` recorded the USA Hockey mis-lettering as
*"USA Hockey Casebook | signal index"*. ⚠️ **Wrong twice over: it is not confined to
the signal index, and it is not confined to the Casebook.** The Casebook cites
`610(h)` at **ten separate Rule References**, uses `610(g)` to mean body-lettered
`610(f)`, and **the Summary of Penalties in the Playing Rules volume itself** uses
`610(e)` for body `610(d)`. **From (d) onward the reference layer is one letter ahead
of the rule text, in both volumes** — verified by reading Rule 610 letter-by-letter in
each.

So it is not a typo in an index; it is a systematic offset, and a citation anywhere in
that apparatus resolves to the wrong clause or to none. The table row and a new
paragraph now say so, with the instruction to **cite the body lettering and name the
Casebook's own number as the Casebook's** so a reader holding the book can find the
page.

⚠️ **The lead-in count was corrected in the same edit.** It read *"Five are known"*,
which the widened row now contradicts — one of those five covers more than a dozen bad
citations. It now says **"Five are recorded below… that is a row count, not an error
count."** ⚠️ **This is the fourth figure in this project replaced because a count went
stale inside the file that owned it.**

---

## Plan rows retired by measurement, not by work

- **IIHF 81.4 vs 82.1.** ⚠️ **The section's own heading was an overstatement.** The
  book does **not** contradict itself: neither rule contains *"only"* or *"solely"* in
  any edition, each is a prohibition followed by *"However, a team shall be
  permitted to…"*, and **a prohibition plus a non-exhaustive permission cannot
  contradict a wider permission in the same book.** 82.1's silence is an omission. **No
  document should ever be edited to say otherwise — it would make the corpus less
  accurate than it is.**
- **Its propagation half is closed.** The row carried *"Eleven documents teach the
  fourth exception. Five carry the caveat, six do not"* — **stale, and left here after
  the work closed.** Re-censused unit by unit rather than document by document:
  **twelve** documents, across body, facts, table rows, glossary entries, Common
  Mistakes and Key Takeaways, **and every one carries the caveat. No site is wrong.**
  The inverse sweep found **zero** unqualified sameness claims, which also closes
  *"five sites say it does"* elsewhere in the plan.
- ⚠️ **Two errors inside that plan section were corrected.** It said Appendix VII 84.7
  reproduces the four-item list *"so the clause is live"* — **Appendix VII is expressly
  not in force**, by its own preamble (*"concepts for potential future rule changes…
  they need to be tested more widely"*), and `faceoffs.md` already handles it
  correctly. And it said IIHF 63.8 *"gives exactly 82.1's three"* — true of its **first
  paragraph only**; the second gives just two, dropping the pulled-goalkeeper limb.
  **A third list in the same book that nothing in the corpus mentions.**

⚠️ **A measurement left in the plan after its work closes reads as live, and the next
round spends an agent refuting it. It cost one this round.**

---

## The reviewers were the right call, and they found what repair passes cannot

**A very large amount of new text was written this round** — 201 lines across ten files by one
agent, 87 units by another, 52 by a third, 29 by a fourth — and **every one of those agents ended
by saying its own new text had not been reviewed.** Several caught defects in their own writing on
re-reading, so the rate was demonstrably not zero. Three read-only reviewers were dispatched instead
of more repair.

### CRITICAL — an unscoped instruction to hit

`body_contact_and_battles.md` §5's late-hit block. Its lead value:

> `Action: Check the puck carrier, and check them now — the moment they have passed or shot, the check is late`

⚠️ **No value in that block carried a checking-league scope.** Voiced alone with a 300 ms break
either side, that is a bare instruction to deliver a body check, given to a listener who may be in a
12U, girls'/women's or non-check adult league. **The restriction is in the document and stops before
this block** — the §5 blockquote has it, and **three of the four blocks that teach how to deliver
contact** have it. ⚠️ **(§5 holds EIGHT facts blocks. The other four are PROHIBITION blocks whose
fouls bind every division, and scoping those to checking leagues would be a defect, not a fix. The
brief said "three of five" and the repairing agent measured it.)**

**This is the round-10 shape exactly: a correction that reached everything except one block.** And
it survived every mechanical gate, because no checker can see it.

### MAJOR — a permission stated without the condition that limits it

**NHL and IIHF Rule 69.4's *"in the act of playing the puck"* condition** was dropped at four
attacker-facing sites while the goaltender's own document stated it correctly. As written, those
sites grant a **general** permission to contact any goaltender outside their crease. The rule grants
it **only while they are playing the puck** — and the same rule says *"The appropriate penalty
should be assessed **in every case** where an attacking player makes unnecessary contact with the
goalkeeper."*

⚠️ **USA Hockey and Hockey Canada write no such permission at all, which makes an unqualified
statement wider still for those readers.**

### MAJOR — a CRT6 number vagued in the two layers most likely to be heard alone

CRT6: *"Be left alone initially (**at least for the first 3 hours**)."* The corpus body and Common
Mistakes carry the number; **the Overview and the Key Takeaway say *"the first few hours"***. A
reader who hears only the Key Takeaway and stays ninety minutes is inside the window CRT6 draws.

⚠️ **Read by rendering the PDF with `pdftoppm`, because `crt6.txt` is 1,535 bytes of furniture** —
the trap that has now produced false negatives for two agents and a coordinator.

### WRONG — a rule number in a `Rule:` value

`shooting.md` said *"**625(b)**'s push-in relief is written into the first limb alone"*. ⚠️ **USA
Hockey 625(b) has no two-limb structure at all** — its bar is a single position bar and its relief
applies to the whole of it. **The two limbs are 617(c)(4)'s, and so is the parenthetical.** Three
sibling sites had it right; one did not.

### OVERSTATED — a uniqueness claim the coordinator drafted

⚠️ **I wrote this sentence and sent it to an agent, which wrote it in.** It said Hockey Canada is
*"the only one that still makes a penalty on the attacker mandatory"*. **Both other books carry
mandatory-form language** — NHL and IIHF 69.3: *"In all such cases, whether or not a goal is scored,
the attacking player **will receive**…"*. The route is two steps: fail the reasonable-effort proviso,
and the first sentence bites. ⚠️ **The direction of the error is towards false safety, for the
British reader.** The other two clauses of the sentence were checked across all four books plus the
476-page USA Hockey Casebook and are **genuinely unique**.

### What the verification UPHELD, which is a result

The IIHF match-penalty negative was **attacked four independent ways** — string search across three
editions, a substring count, a rule-heading enumeration of the whole penalty-types section, and a
concept search on `expelled` / `remainder of the game` / `ordered to the dressing room`. **It holds.**
Rule 21 in the NHL is *Match Penalties*; **Rule 21 in the IIHF is *Dangerous Actions*, and there is
no match tier in the book.** Situation 5E, Situation 63.24, the Hockey Canada 4.8 cluster, USA Hockey
610(g) and 204(a), NHL 81.6, IIHF 55.1's hands sentence and the 617(c)(4)/625(a)(8) limitation at all
four sites were each confirmed verbatim. ⚠️ **A sweep over any of them would have damaged correct
text.**

---

## Three uniqueness claims, three different answers — and the third is the interesting one

`goaltender.md` carried three *"the only one of the four books"* claims. **All three were attacked.
They did not resolve the same way, and that is the point.**

| | Verdict |
|---|---|
| *"Hockey Canada is the one book that addresses the attacker who lands on you"* | **WRONG.** All four address it in terms. |
| *"…the only one that makes a penalty on the attacker mandatory"* | **OVERSTATED.** NHL and IIHF 69.3 both write *"will receive"*. Narrowed to *"into that clause itself"*. |
| *"NHL 69.1 is the only one of the four that can take a goal off the board for an attacker's positioning outside the crease"* | **HOLDS** — and was missing the ground that makes it true. |

⚠️ **The third is the one worth reading twice, because a sweep would have destroyed it.** Two claims
of that exact shape in that exact document had just been found defective. **The obvious move was to
narrow the third too, and it would have been wrong.**

What settled it was reading rather than pattern-matching: NHL 69.1(1) and IIHF 69.1(I) both name
**positioning** as a ground with **no crease line** on it; Hockey Canada 8.5 defines the foul as
impeding the goaltender *"by actual physical contact"*, and a concept search over every
goal-disallowance formula in that book reaches nothing outside the crease without contact.

⚠️ **And the USA Hockey trap was real — the claim survived it, but only just, and the corpus had
been asserting the conclusion without the reasoning.** 617(c)(4)'s second limb **is not
crease-confined**, and the Casebook applies it outside one, at Rule 625 Situation 13, to a player
*"not in the goal crease area as the rulebook defines it"*. **So USA Hockey CAN take a goal off the
board outside the crease — it just requires contact**, because 625(a)(8) is the book's only
definition of the foul and the playing rules contain **no vision or screening provision at all**.
The adverse authority is now named on the page rather than left for the next verifier to rediscover.

**A flat internal contradiction was found in the same file while checking it.** `:1001` read
*"Nothing outside the crease voids a goal under either."* ⚠️ **That contradicts two other lines in
the same document**, both correct: Hockey Canada's Interpretation 1 to 8.5(a) disallows a goal for
contact *"regardless of whether the contact occurs inside or outside of the goal crease"*, and USA
Hockey's 617(c)(4) second limb does the same. ⚠️ **This is the class `CLAUDE.md` warns about — two
sentences each defensible in isolation and flatly contradictory in one document — and no checker can
see it.** It was found only because someone read the section around the line they were sent to.

**Two defects the agent caught in its own new text**, neither visible to any checker: a first draft
saying *"neither of the other two books writes a ground that works without contact"* — **false**,
both have one *inside* the crease; and a citation written as `(I)` which **renders as the pronoun
"I"** — *"the IIHF's I is the same clause"* — found only by running the renderer.

---

## `check_rule_scope.py` after the new citations — run, and deliberately not acted on

An agent introduced **NHL 56.2(iii), 56.4, 56.5 and Hockey Canada 8.3(e)** as new citations and
declared it had not measured whether their book scope now diverges from other sites citing them. The
worklist was run.

**It reports what it is designed to report and nothing more:** single-book spreads at sites that
discuss a single book — `game_management.md`'s new NHL limb naming the NHL, `forechecking_systems.md`
naming the NHL for an NHL clause. ⚠️ **No action taken, deliberately.** The tool's own caveat is that
*"a site naming one book because it discusses one book is correct"*, and this project records that
**round 44 manufactured a divergence that did not exist** by ranking these and offering to fix them.

**Recorded so the next round knows it was run and knows why nothing followed** — a silence here is
indistinguishable from an omission, and that is the failure this record exists to prevent.

---

## The staged state was proven wrong, not merely suspected

`CLAUDE.md` warns that a commit can pass every mechanical gate while shipping a staged state nobody
verified. **This round it was demonstrated with a concrete defect**, by a verifier that thought to
diff the index against the tree:

| | `content/positions/switching_positions.md` |
|---|---|
| **index (what a commit would ship)** | *"under NHL and IIHF rules **(81.4, 87.1)** a defensive-zone draw with no line change and no time-out"* |
| **working tree (correct)** | *"a defensive-zone draw **(81.2)** with no line change **(81.4)** and no time-out **(87.1)**"* |

**Rule 81.2 is the draw-location rule; 81.4 is the line change.** The staged version attributes the
draw to the wrong rule. Confirmed by the coordinator with `git show :<path>`.

⚠️ **`check_facts.py` and `check_links.py` read the WORKING TREE, and `git-guard.sh` gates on those
same checkers — so every gate would have passed and the wrong line would have shipped.** The
verifier checked **one** file of the 35 modified. **The rest are unchecked, and the only defence is
re-staging everything on a quiet tree before the gate.**

---

## A trap that defeats this project's own prescribed remedy

Everywhere this project says to build a de-hyphenated, form-feed-stripped, **whitespace-flattened**
copy before asserting an absence. ⚠️ **That does not work on a running head injected mid-sentence,
and the guide said it did.**

`sources/usah.txt:1629`, USA Hockey Rule 204(a):

```
lineup on the ice or changing players, the Referee shall warn            Teams
the offending team.
```

**Flattening collapses whitespace. The injected running head is a word.** Measured on the flattened
file: the true sentence returns **0** hits, the corrupted one returns **1**. ⚠️ **So a verifier who
did everything correctly would still have reported a verbatim corpus quotation as fabricated.**

**What survives it is reading a line range** — locate the rule's heading, then `sed -n 'START,ENDp'`.
**Do not search a passage you have not located.** The style guide's trap 9 now says so.

---

## A repair fabricated a number, and the round nearly shipped it

⚠️ **This is the one finding in this record that breaks non-negotiable 1, and it was created by a
repair made this round, not found in old text.**

`on_ice_communication.md`'s end note said, at HEAD, *"these entries **are** corroborated in the
sources and carry no dagger."* A repair rewrote it to ***"three of the calls above are corroborated
in the sources, and carry no dagger on the page."*** **The list that follows names roughly
twenty-six calls.** The repair also introduced a new print-only deictic (*"on the page"*) into a
sentence that is voiced.

**Restored to a count-free form.** ⚠️ **Note what the fix is: not a corrected number — no number at
all.** The list counts itself and cannot go stale; a figure beside it can, and this project has now
replaced four such figures for exactly that reason.

⚠️ **The mechanism is worth more than the instance.** The agent was repairing a *pointer* — turning
*"marked † above"* into something a listener could use — and reached for a quantifier to do it.
**Nothing in the brief asked for a count, and no checker can see one that is wrong.** A repair pass
is a writing pass, and writing invents.

---

## Coordinator briefs that were wrong, again — and they were all ONE mistake

⚠️ **Seven brief errors this round. Every single one was a figure or a claim taken from an agent's
report and passed on as if the coordinator had measured it.** Not one came from misreading a
rulebook, and not one came from reasoning badly about hockey. **They came from relaying.**

| Relayed | Actually |
|---|---|
| *"`not currently enforced` occurs ONCE in the corpus"* | **53 times, across 20 documents**, 16 in voiced `Rule:` facts |
| *"the block has 6 facts, 5 coaching, three slots free"* | **11 facts, at `HARD_MAX`** — *"had I written to the brief I would have blown the cap"* |
| *"NHL 57.3's delayed-call limb reaches no facts block anywhere"* | **It reaches one at `defending_the_rush.md:546`, and did so in HEAD.** A split was nearly performed on a five-wave file to fix a hazard that did not exist |
| *"three of §5's five teaching blocks carry the scope"* | §5 holds **eight** blocks; four teach delivery, four are prohibitions **that must not be scoped** |
| *"the players' bench dimensions are voiced nowhere"* | Quoted verbatim in a voiced bullet |
| *"the 15 ft circle radius is an unreachable IIHF figure"* | **15 ft is the NHL's**; the IIHF's 4.50 m is voiced |
| A drafted replacement sentence citing Rule 69.3's *"reasonable effort"* proviso | **69.3 has no such proviso** — it is in 69.1 — and the draft implied Hockey Canada has none, when Interpretation 2 writes one |

⚠️ **THE PROCEDURAL LESSON, and it is the coordinator's to act on rather than the agents':** a
reviewer counting facts while reading for hazards is not running `check_facts.py`. An auditor citing
one example of a phrase is not running a census. **Both report honestly and both are describing what
they saw, not what is there** — and every one of these reports declared its own coverage plainly.
**The error was entirely in the relay.**

⚠️ **The coordinator has the tooling to check every one of these in a single command**, and did so
after the fact each time. **The rule going forward: never put a COUNT or a "reaches no layer"
claim into a brief without running it first.** Quote the finding; measure the figure.

⚠️ **And note what saved every one of them: the standing instruction to treat the brief as a
hypothesis and refute it before acting.** Seven times an agent measured first and found the brief
wrong. **That instruction is doing more work than any checker in this repository.**

## Coordinator briefs that were wrong, again

Recorded because the count is the point, not the individual errors.

- **A brief called USA Hockey Casebook Situation 10 a low-severity *omitted relief***,
  reasoning that omitting a relief only makes a reader more cautious. ⚠️ **It has a
  second sentence running the opposite way** — *"if a goal is scored while an attacking
  player has their stick and/or skates in the opponent's goal crease while the
  goalkeeper is in the crease, the Referee shall have no alternative but to disallow
  the goal"* — and **the corpus had carried the relief and dropped the restriction.**
  The opposite error, and the one that costs a reader a goal. **"An omitted relief is
  safe" is only true if the relief is the part that is missing, and nothing in the
  brief had established that.**
- **A brief said a block carried *"the relief and not the second half"* of NHL 69.1.**
  It carried **neither**.
- **A brief sent an agent to split a block in `rules_primer.md`.** That file has **no
  facts blocks at all** and the style guide excludes it by name; the block described
  was in `body_contact_and_battles.md`.
- **A brief said the cross-checking match tier might be a body gap.** It is a
  **propagation** gap — the body states it in full for all four books.
- ⚠️ **AND THEN DID IT AGAIN, ON A SAFETY CRITICAL.** Routing the boards-safety critical, a brief
  said the target block held *"6 facts, 5 coaching, three coaching slots free — nothing evicted."*
  **It held 11, at `HARD_MAX`.** The agent measured before writing and said it plainly: *"Had I
  written to the brief I would have blown the cap."* It split the section instead, which is what the
  style guide prescribes. ⚠️ **Same mechanism as the row above and the same round: a figure taken
  from a reviewer's report and passed on as if measured.** A reviewer counting facts while reading
  for hazards is not running `check_facts.py`, and the coordinator is the one who can.
- ⚠️ **A brief RELAYED THREE FIGURES FROM A REVIEW WITHOUT MEASURING ANY OF THEM, and all three were
  wrong.** Sent to close the never-voiced-layer gap, it asserted that *"`not currently enforced`
  occurs ONCE in the corpus"* — it occurs **53 times across 20 documents, 16 of them in voiced
  `Rule:` facts.** It asserted the players'-bench dimensions were voiced nowhere; they are quoted
  verbatim in a voiced bullet. It asserted a 15 ft circle radius was an unreachable **IIHF** figure;
  **15 ft is the NHL's**, and the IIHF's 4.50 m is voiced in a blockquote. ⚠️ **The underlying
  finding survived — `rules_primer.md` alone lacked the British trapezoid layer — but the brief
  described a corpus-wide silence where there was a single-document gap**, and an agent working
  faster would have propagated a paragraph into twenty documents that already had it. **The audit
  that produced those figures had declared its own coverage honestly; the coordinator relayed its
  examples as measurements.**
- ⚠️ **A SECOND coordinator-drafted replacement was refused, on different grounds.** Repairing the
  `Never:` inversion in `special_teams.md`, I supplied *"all four books cost you the goal for it"*.
  ⚠️ **That is contradicted two lines above it, in the same block**, by a fact reading *"Hockey
  Canada 8.5 is not flat — a teammate's goal from outside the crease stands if the net-front player
  stays passive."* The agent used *"risks the goal"* instead — **the form a sibling document already
  uses** — and said why. **I had read the block and still drafted a sentence its own neighbour
  refutes.**
- ⚠️ **A coordinator-drafted REPLACEMENT SENTENCE carried two errors, and the agent refused to paste
  it.** Having had one uniqueness claim found overstated, I drafted the narrowing myself and sent it
  as suggested wording. It said the NHL and IIHF *"get there only if you fail their reasonable-effort
  proviso"* under **Rule 69.3**. ⚠️ **Rule 69.3 contains no such proviso in either book** — it is in
  **69.1**, and 69.4 has a different one. And the contrast implied **Hockey Canada's** penalty is
  unconditional; **Interpretation 2 writes an effort proviso too**. The agent read all of Rule 69 in
  both books, rejected the draft, and wrote a narrowing that rests on neither error. **A brief that
  arrives as finished wording is more dangerous than one that arrives as a question**, because the
  work of checking it looks already done.
- **A brief said the checking-league scope reached *"three of §5's five teaching blocks"*.** §5
  holds **eight** facts blocks. Only **four** teach how to deliver contact; three carried the
  scope and the repair was the fourth. ⚠️ **The other four are PROHIBITION blocks whose fouls bind
  every division — the agent said plainly that adding a checking-league scope to any of them would
  be a defect, not a fix.** A coordinator working from the wrong denominator would have "completed"
  the propagation by scoping four blocks that must not be scoped, **and it would have read as
  thoroughness.**
- ⚠️ **The `rules-verifier` instruction table was wrong for the third consecutive
  count** — 14, then 22, now **24 files on disk**. `sources/README.md` is accurate and
  outranks it. Two agents independently globbed the directory rather than trusting it,
  which is the behaviour the brief asks for and it worked both times.

---

## An operational hazard nobody had recorded

⚠️ **The session scratchpad is shared between concurrent agents, and it was silently
clobbered.** An agent's `before.txt` and `ssml/` output were overwritten by another
agent writing the same filenames. **It noticed only because a diff of its own four
documents returned chunk openers from a document it does not own.**

**Every agent doing a before/after render comparison is exposed to this.** Briefs now
say: render into a private subdirectory with a name nobody else will pick.

---

## What the browser found that nothing else could

**Two Majors, both in `site/`, both fixed and both verified in the built output.**

**The scroll cue was wiped by a CSS shorthand.** `.callout .table-scroll { background: transparent }`
— and `background` is the **shorthand**, so it reset `background-image` and destroyed four gradient
layers, two of which are the horizontal-scroll cue. Measured at 375px: the corpus's **only**
blockquoted table had **46% of its width off screen with zero cue layers**, while the two tables on
the same page that are not in a callout had four each. ⚠️ **The one table that most needed the cue
was the only one without it** — and the paragraph beneath it argues from the two columns a phone
reader could not see. The comment on `.table-scroll` records in capitals why the cue exists, naming
an earlier table that *"SCROLLED SILENTLY"* and left a reader with `"Typical rec / beer le"`.

**Fixed by making the fade colour a variable** rather than by the obvious one-word change: a bare
`background-color: transparent` would have restored the cue but left it fading from the *page's*
colour on a *tinted* callout. `--table-fade` now defaults to the page and is overridden per callout
kind, so **both intents survive — the cue and the tint.**

**Six warnings rendered as ordinary black prose**, five of them rule-scope caveats, three paragraphs
from identical warnings that got the full amber treatment. The plugin matched two shapes and these
were a third: `⚠️ word **bold**`, with a word intervening. ⚠️ **The plugin's own comment argued this
case was unmarkable because *"marking those would mean guessing where the warning ends"* — and gave
as its example a sentence that HAS a bold run after it.** That reasoning does not survive contact
with the shape the plugin already handles, which ends its wrapper at the close of the strong run.
Extending guesses nothing new.

⚠️ **My first version of that fix excluded any full stop between glyph and bold — and RULE NUMBERS
CONTAIN FULL STOPS.** It silently failed on `⚠️ 76.7 carries the same escalation and **no such
carve-out**`, which is exactly the kind of sentence the shape exists to catch. Now excluded only on
a period followed by whitespace.

⚠️ **PARTIAL, and stated as partial.** The named case is verified fixed in the built HTML. **Four
glyphs remain unmarked that match the regex in isolation and do not fire in the build**, all in
paragraphs carrying several bold runs. The cause is not established, and I stopped rather than keep
guessing at a rendering-emphasis defect. **15 further glyphs are correctly left** — no bold run at
all, which the plugin documents as a content-shape question.

⚠️ **And the review's best moment was a RETRACTION.** It measured in-page anchors failing completely
— five separate links leaving `scrollY` at 0 for five seconds — and then proved the cause was the
environment, not the site: the tab never composites, so `scroll-behavior: smooth` never runs. Setting
`scroll-behavior: auto` landed at **17,973 for a target at 18,045**, exactly the 72px scroll-padding
offsetting the 56px sticky header. **It said so in terms: *"it would have been a fabricated
Critical."***

---

## A negative that described its own search, not the book

⚠️ **This is the round's clearest example of a defect class the corpus warns about in its own style
guide, found because an agent declined to widen a scope it could not justify.**

`body_contact_and_battles.md` said no head-down carve-out exists *"anywhere in Hockey Canada's rules
**for minor and female hockey**"*. An agent repairing the surrounding text propagated that scope
rather than widening it, and then flagged what it could not settle: **was the division limit a
property of the book, or an artefact of whatever the original search happened to look at?**

**Verdict: ARTEFACT. Hockey Canada writes no head-down carve-out in ANY division.**

**The method is the evidence, and it is why this is now settled rather than merely re-asserted.**
Rules 7.2, 7.4, 7.5, 7.6, 7.7 and 8.7 read **whole, with every Interpretation**, by line range in the
`-layout` extraction; fifteen formulations attacked across both extractions and flattened copies of
each; and **a complete census of all 47 occurrences of *"Junior"* in the book, read line by line.**

⚠️ **And the book runs the OPPOSITE way.** *"head down"* appears **exactly once in the entire Hockey
Canada rulebook** — in Checking from Behind, describing *"a player along the boards, with their head
down looking for the puck… hit from behind and driven head-first into the boards"*, a scenario
Referees are told to **strictly enforce**. Under that book a head-down opponent is an **aggravating
circumstance for the checker in every division.**

⚠️ **So the narrow scope was not merely imprecise — it invited the inference a reader must not
draw**: that a Canadian junior or senior checker has an IIHF-style amnesty. **Widening the negative
makes the corpus safer, not just more accurate**, which is the opposite of the direction a
scope-narrowing usually runs.

**The same pass found a safety defect in the extraction layer.** IIHF 48.1's carve-out has **four**
conditions — skating **with the puck**, **head down**, **in the direction of the Player**, and no
upward motion. The facts value carried **two of them**, and the two it dropped include the direction
limb. ⚠️ **That limb is what excludes the blind-side and lateral hit.** Voiced alone, the value told
a checker that a square hit on **any** head-down skater is exempt. **It is not.**

⚠️ **Note what a checker could see here: nothing.** The value was well-formed, inside its length cap,
correctly labelled, traceable to its section, and cited a real rule accurately. **It simply stopped
after two of four conditions.**

---

## The corpus ranked things by danger, and nothing on disk ranks anything by danger

**Attacked by concept FOUR times independently**, by four different agents, across `huh.txt`,
`ibc.txt`, `usah.txt`, `carha.txt`, `ukcg.txt`, `usah_casebook.txt`, `nhl_rules.txt`,
`iihf_rules.txt` and `hc.txt` — flattened and de-hyphenated, on
`most dangerous | more dangerous | highest.risk | most serious | greatest danger | leading cause |
most common | majority of injur`. ⚠️ **Zero.** **The one frequency claim *Heads Up Hockey* makes runs
the other way** — *"concussions are not the most common form of injury"* — and the only supportable
superlative in any safety source ranks a **posture and a collision geometry**, credited to Tator et
al., not a situation.

**Roughly two dozen sites repaired**, across a dozen documents and three voiced diagram captions.
**The corpus had already invented the honest form itself** — *"coaching emphasis, not a counted
ranking"* — so every repair matched an existing idiom instead of inventing one.

⚠️ **THE FINDING IS NOT THE COUNT. It is that a sweep would have been a disaster.** A superlative
census over three directories alone returns **~120 sites, of which ten were danger rankings.** The
rest rank prevalence, usefulness or expense, or are relative inside one defined situation. **Four
distinctions cleared roughly a dozen candidates**, and each was found by reading, not by pattern:

- **A relative claim inside one defined situation**, usually hedged — *"the most dangerous attacker
  is usually not the puck carrier"* compares two attackers on one rush.
- **A claim whose OWNER states its basis** — *"the most dangerous ice on the rink"* is **scoring**
  danger, which the corpus HAS measured (slot 10–15% against perimeter 2–4%). **Refuted as a
  candidate.**
- **A claim the corpus MEASURES** — one is computed off the NHL play-by-play feed and scoped to a
  possession.
- **A priority statement, not an empirical ranking** — the whole *"X outranks Y"* family.

⚠️ **And one where a claim STRONGER than its body is correct and must stay:** *"the most damaging
thing you can do"* strengthens a **prohibition on moving a spine-injured player**. Weakening it to
match the body would be the defect.

### Two things this class taught that generalise

⚠️ **A repair to a claim can invert a safety rule by ADJACENCY.** An agent declined to redistribute a
fact because moving the NHL limb into the only fact with room would have placed *"a game misconduct
only on injury"* directly after *"driving into their back is a major with no minor option"* — **where
that rule's game misconduct is automatic and not injury-conditioned.** The words would each have been
true and the neighbourhood would have taught the opposite. **No checker can see that.**

⚠️ **Two mutually exclusive superlatives were found inside ONE document** — a defensive-zone draw
after your own icing called *"the single most dangerous draw in hockey"*, and a defensive-zone draw
shorthanded called *"the most dangerous faceoff in hockey"*. **Both cannot be true.** Invisible to any
single-site check, and to every checker.

### The half that is not closed, and it is the larger one

Every pass was **phrase-anchored**. Three agents independently declared the same hole:

> *"A danger ranking phrased **without the word 'dangerous'** — 'nothing costs you more', 'there is
> no worse place to lose it', 'the one turnover that beats you' — **matched nothing I ran and would
> still be standing.**"*

⚠️ **And the MIRROR was never run at all: a hazard that SHOULD be ranked and is not, presented as one
option among equals.** That direction is worse — an unsourced superlative makes a reader
over-cautious about one thing; **a levelled hazard makes them under-cautious about the one that
actually hurts them**, and it reads as balanced prose. ⚠️ **Every one of this round's two dozen
repairs moved in the levelling direction.** Each was individually justified. **Nobody has read the
results back to ask whether an option now sits beside a materially worse one with nothing
distinguishing them.**

---

## The diagram captions: a voiced layer no `content/` audit can reach

**112 captions, all read in full.** ⚠️ **They come from `site/src/diagrams/*.mjs`, not from the
markdown, so every corpus-wide census this round — and there were six — saw a clean corpus while this
layer went unexamined.**

**The honest headline is that it is in good shape**: no caption states a coaching choice as a law,
thirty-plus name their system *and* a realistic alternative, and every rule claim checked verified
against primary text. **That clearance is recorded so the next round does not re-read them.**

**Four defects, and the pattern is that captions shed qualifications their prose keeps:**

| | |
|---|---|
| **A number wrong by TWOFOLD** | *"about 100 feet apart"* for two defencemen between the blue lines. The rink's owner says **blue line to blue line is 50 ft**; the diagram's own coordinates are 50 units apart; the picture draws 36. ⚠️ **NOT fixed by the auditor — the caption AGREES with its prose, so fixing one side alone creates the drift this round exists to close.** Routed to the prose owner. |
| **The KHL trapezoid stated flat, twice** | while **all ten** prose sites carry *"no KHL rulebook was available to check it against"* verbatim. The captions were the only sites that shed it. |
| **Two qualifications dropped at once** | an even-strength scope **and** an *"among the"* hedge, in the one document that carries that scope as its own facts line. |
| **An unsourced superlative in a caption's OPENING clause** | the first thing voiced. |

⚠️ **Three of the four were found by an audit; the other three caption defects this round were found
by RENDERING for an unrelated reason.** One played a superlative the corpus had just retracted
**immediately before the corrected prose**.

⚠️ **The auditor's own largest gap, stated plainly: *"the whole premise is that these are voiced, and
I never ran the renderer."*** It read 112 captions and viewed 3 rendered pictures. **A caption that
describes a route the picture does not draw would survive in 109 cases — and the 100-feet error is
proof the failure mode is live**, because it was caught only by suspecting the arithmetic and then
looking.

---

## Dimensions — every one checked or declared out of scope

**Silence on a dimension is the failure mode, so each of the fifteen is answered here.**

| | Dimension | This round |
|---|---|---|
| **D1** | Rules accuracy | ✅ `rules-verifier`, ten items, each quoted from primary text. **One WRONG (a rule number), one OVERSTATED.** A rule dated from a blog is now dated from two editions. |
| **D2** | Rules travelling without exceptions | ✅ **Two half-rules found** — Rule 69.4's *"in the act of playing the puck"* condition at five sites, and a Casebook situation carried in its relief half with the restriction dropped. |
| **D3** | Rule-set divergence | ✅ The IIHF match-penalty negative attacked four ways and **upheld**; the IIHF's own table renumbering between editions found; USA Hockey's push-in relief scoped to one limb. |
| **D4** | Citation integrity | ✅ **DONE, and it closed a gap rather than finding one.** 45 URLs re-fetched by hand plus a machine sweep of all 674 baseline rows; 40 quotations located in rendered body text. **The NHL 2024-25 PDF is byte-identical to disk by SHA-256**, both Rule 60 quotations verbatim, and the *"the NHL book dates no rule"* negative upheld (`[Rr]ule [Cc]hange` returns 0 in both editions). CRT6 **read by eye from rendered pages**, closing a baseline note that said its quotations were unverifiable without OCR. The retracted Copenhagen paper's label is **accurate and intact**. ⚠️ **`check_external_links.py` was WRONG in both directions on three rows** — it reported a redirect-hijacked link as *"recovered"*. Baseline updated. |
| **D5** | Provenance | ✅ *"One book's wording attributed to two"* attacked repeatedly. **The 69.1/69.4 near-identical sentence pair was located, attributed, and found correct at all ten corpus sites** — and a proposed "fix" to the style guide was refused. |
| **D6** | Negative existence claims | ✅ Several attacked; **most upheld**, which is the result. One refused outright: a brief asked for a bare negative about three books' in-game counters and **all four books count.** |
| **D7** | The cardinal rule | ✅ Trapezoid-conditioned claims stated generally, at four units in one block. **`content-reviewer` found them; one had been repaired and its siblings had not.** |
| **D8** | Numeric ownership | ✅ **A repair fabricated a count.** Gap-control distances found stated bare, without their owner's hedge, at two layers. Four figures in `project/` replaced by pointers. |
| **D9** | The summary layer | ✅ **Measured: 992 items, ~440,000 characters, 112 over 900.** Recorded as a decision, not swept. |
| **D10** | The key-facts layer | ✅ Two omission passes. **36 of 56 blocks at `HARD_MAX` read; 17 read by nobody and named.** |
| **D11** | Reader safety | ✅ `safety-reviewer`. **One CRITICAL** (an unscoped instruction to hit), a CRT6 figure vagued in two spoken-alone layers, and a censused sweep across all three voiced layers finding no recurrence. |
| **D12** | Read-aloud integrity | ✅ **The round's centre.** Chunks producing no audio; the `Never:` inversion censused to two; anaphors across every directory; a marker deleted from the audio while two voiced sentences pointed at it. |
| **D13** | Folklore | ⚠️ **DECLARED OUT OF SCOPE, with a reason.** One instance was found and hedged — *"distributed practice is one of the better-supported principles in the learning literature"*, stated bare by the document the style guide names as **owner** while three borrowers hedged it. The precondition check changed the answer: a motor-learning literature exists, and it partly **contradicts** the claim (massed practice better for a discrete skill). **No systematic pass ran, and the scoping is deliberate** — this round's `content/` changes were repairs to existing claims and renderer-driven rewording, not new teaching material, so the surface on which new folklore could have entered is narrow. ⚠️ **That is an argument about exposure, not a clearance**, and the one instance found was in exactly the place the argument predicts it would not be. |
| **D14** | Structure, style, terminology, cross-links | ✅ `content-reviewer`, plus `check_links.py` throughout. A Key Takeaways count over spec was merged back within spec, losslessly. |
| **D15** | The rendered site | ✅ **DONE.** Build passed, 14 of 48 pages opened across both themes and 320/375/1440 widths, console and network clean, contrast measured and **AA in both themes on every pair**. **Two Majors, both in `site/` and both now fixed** — see below. ⚠️ **It also RETRACTED a Critical it had measured**: in-page anchors appeared completely broken, and it proved the cause was the environment (the tab never composites, so `scroll-behavior: smooth` never runs) by setting `scroll-behavior: auto` and landing at 17,973 for a target at 18,045 — exactly the 72px scroll-padding offsetting the 56px sticky header. **It said plainly that it would have been a fabricated Critical.** |

⚠️ **D13 is the one dimension scoped out, and it is scoped out with an argument rather than in
silence. D4 and D15 both closed after this table was first written.** ⚠️ **What follows was written
while they were outstanding** — nothing in this record describes the page, and several
changes were made *specifically to serve the audio* with the page as the thing that might have
suffered.

---

## What this round could not have found

- **Nobody has listened to any of it.** Every finding above is from reading SSML.
  A table read as fourteen `<p>` blocks with the head repeated per cell may be
  unlistenable although nothing was dropped, and **unlistenable is not the same as
  absent** — no method here can tell them apart.
- **A construct the renderer gets WRONG rather than DROPS is counted as a success.**
  `--report` lists the unrecognised ones; there are thousands of `bare-number` and
  `rule-citation` firings and only a handful have ever been inspected. The game-ID
  defect was found **by accident**, while an agent was reading one chunk for an
  unrelated reason.
- **The checkers cannot see any of this.** None of them renders anything. A defect
  that lives between the markdown and the audio is invisible to every gate this
  project has, and this round found five.
- **The tree moved throughout.** Every count here is a snapshot; the facts total moved
  5,041 → 5,049 during a single agent's session and the hard-cap population moved
  55 → 56. **A checker pass while agents are live proves nothing.** The only run that
  counts is the one after every agent has finished and every file is staged.


---

## The commit gate blocked, and three of its four findings were defects this round CREATED

The gate ran on the staged diff and returned **BLOCK**. It is worth recording that it did
not block on anything the round set out to fix — it blocked on **new damage the round did
while fixing other things**, plus a coverage gap.

### C5 — a caption repair introduced a provenance defect, in a voiced layer

`site/src/diagrams/playing_without_the_puck.mjs` was rewritten this round to remove an
unsourced superlative. The replacement said a turned back and a dropped chin *"are the two
postures USA Hockey ties to almost all on-ice cervical spine injuries."*

**USA Hockey names one.** `sources/huh.txt:225-227`: *"almost all on-ice cervical spine
injuries have been due to the head being slightly flexed (head down) while making head-on
contact with the boards or goal post."* The turned back is a **different** sentence making a
**different** claim — *"Even a light hit from behind could inflict a severe head or neck
injury"* (`ibc.txt:1570`, `huh.txt:721`).

⚠️ **This is not a loose paraphrase. The corpus deliberately holds the two apart** as *"two
prohibitions against two different injuries"* at five sites. The caption collapsed that
distinction **and** attached an epidemiological finding to a hazard the study does not cover.

**Repaired**: the statistic is now attributed to the head-down posture alone and scoped to
head-on contact; the turned back keeps its own warning in its own sentence.

⚠️ **The lesson is bigger than the caption.** The caption wave's own note said *"nobody has
read the results back."* Captions are **voiced**, and they live outside `content/`, so no
corpus grep reaches them. **A repair is new text, and new text has not been reviewed** — that
rule was written in this file and then broken in this file.

### C9 — the secrets detector was narrowed past its own rationale

The staged change added `|https?://\S*[0-9]{12}` to the `aws-account-id` ignore, arguing it
was safe because *"the ignore requires `http` earlier on the same line, which no bare
credential has."* **That reasoning is wrong**, and the gate demonstrated it: an account id in
this repository would most naturally appear **inside** a URL, so the pattern silently ignored
`https://123456789012.dkr.ecr.eu-west-2.amazonaws.com/...` — an ECR registry, precisely the
shape this public, AWS-deploying repository would leak. (The id shown here is AWS's own
documentation placeholder, which `check_secrets.py` ignores by value; writing a realistic one
into this record made the checker fire, which is the guard working.)

**Measured before narrowing** rather than guessed: with the ignore removed, the checker
returns **two** findings, both the same Sport and Recreation Alliance PDF whose filename ends
in a `ddmmyyhhmmss` upload stamp. So the blanket ignore was buying two lines.

**Repaired**: scoped to that host and that filename shape. Re-verified — the ECR URL, an IAM
ARN and a bare assignment now all **flag**; the PDF is still ignored; `check_secrets.py`
passes on 236 tracked files.

### C8 — the review record's status header contradicted its own body

This file opened *"Status: OPEN… must not be read as complete until that line is removed"*
while its body was finished. **The C8 artefact cannot both be the evidence of review and
instruct the reader not to treat it as complete.** Header resolved, with the two deliberately
unresolved findings named so that *complete* is not read as *clean*.

### C11/C4 — coverage the gate could not establish

22 staged `content/` files carry new or rewritten rule claims that no reviewer output names —
notably a reclassification of Hockey Canada 10.1(ii) in `risk_management.md` and an entirely
new ` ```facts ` block in `center.md`. ⚠️ **The gate sampled ~15 claims and every one
verified**, so this is *coverage not established*, not *defects found*. A read-only
`rules-verifier` was dispatched over exactly those files.

### What the gate got right that the dispatcher got wrong

- The brief said **37** content files were staged; it is **36**.
- The brief described the boarding-onus balance as NHL and IIHF only, with USA Hockey 603 the
  outlier. **Hockey Canada 7.2 carries it too** — under the `Rule 7.2 / Boarding` heading, not
  under `7.2 (a)`, which is why an anchored grep misses it. **The corpus gets this right; the
  brief did not.** Had the gate taken the brief as the spec it would have flagged correct text.
- The commit message asserted NHL 69.4 permits incidental contact *"only while that goaltender
  is playing the puck"* and called that **the** condition. The rule has **two**: the goalkeeper
  must be in the act of playing the puck **and** the attacker must have made a reasonable
  effort to avoid contact. **All five corpus sites carry both limbs**; only the message was
  wrong. Corrected before committing.

**That is now the ninth and tenth time this round a relayed fragment has been wrong, against
zero occasions on which the corpus was wrong in the way a brief claimed.** The finding of
round 53 holds and has strengthened: **the briefs are more defective than the corpus.**


---

## A CRITICAL the brief did not know about, and a tension resolved in the corpus's favour

### The critical

`forechecking_systems.md:547` carried, **voiced alone**:

> `Rule: Where a player deliberately turns their back into a check the two books read
> differently — NHL 43.1: "no penalty shall be assessed"; IIHF 43.1: …`

Heard alone, that teaches a listener that **a player who turns their back into a check may be
hit.** ⚠️ **Under Hockey Canada the checker is penalised anyway.** `sources/hc.txt`, Rule 7.5
Interpretation 2, verbatim: *"Question: What penalty is assessed when a player, who is about to
be checked, turns and, as a result, creates contact with the back? Answer: The appropriate
penalty for Checking from Behind will be assessed to the player delivering the check. The
responsibility is always on the player delivering the check to avoid making contact with the
back."* USA Hockey Rule 608 (Note) states the onus and writes no turn provision at all.

⚠️ **The phrase *"the two books"* also implied a closed universe of two.** Repaired at `:547`,
in the body at `:561`, and in the Sources trailer, with the operative wording quoted. The
USA Hockey absence is labelled as **a search result, not a fact** — a flattened proximity
search on `turn`/`turning`/`no penalty`/`from behind` — because a provision worded without any
of those stems would have escaped it.

**Neither the plan nor the dispatcher knew this existed.** The brief was about a different
value three lines away.

### The tension, and it resolves the corpus's way

The repairing agent could not open `body_contact_and_battles.md` under its file ownership, and
ended by asking whether that document's `:536` is wrong:

> `Never: Rely on that balance — it is written into the boarding rules, the two books that
> state an onus for checking from behind attach no "however"…`

It had found **three** books attaching a *however* (NHL 41.1, IIHF 41.1, HC 7.2) and flagged the
line as possibly understating. **Checked by the coordinator across all four books:**

- The three *howevers* attach to the **BOARDING** onus. NHL 41.1: *"The onus is on the player
  applying the check… **However**, in determining whether such contact could have been
  avoided…"*
- The **checking-from-behind** onus is a different rule, and exactly **two** books state one:
  **USA Hockey 608 (Note)** — *"The onus is on the player delivering the check to not hit from
  behind."* — and **Hockey Canada 7.5 Interpretation 2**. ⚠️ **Neither attaches a however.**
- IIHF states no *"onus is on"* for checking from behind at all; its only such phrase is
  equipment, Rule 65.1.

**So `:536` is correct as written, and precisely so** — it distinguishes the boarding onus
(balanced) from the checking-from-behind onus (unbalanced), which is the distinction the
reporting agent had collapsed. **Nothing changed.**

⚠️ **This is the value of the handover, and the reason the rule exists.** An agent that had
"fixed" the tension it reported would have damaged a correct line in a document it was told not
to touch. It reported instead, and the report was right to be uncertain rather than wrong to be
raised.

### Reported and deliberately not acted on

- The repairing agent found the leniency clause is carried by **three** books, not the NHL alone
  (IIHF 41.1 *"This balance must be considered by the Referees"*; HC 7.2 with *"may be
  considered"*; **USA Hockey 603 attaches none**). It **did not widen the citation**, reasoning
  that adding two books to a *leniency* value makes the leniency louder, and that an NHL-only
  citation errs safe for a USA Hockey or England reader. **Recorded as a judgement, not a defect.**
- `forechecking_systems.md:597` matches the naked-leniency *pattern* but states Hockey Canada
  7.3(a)'s express exception to a ban — the rule's **scope**, not its tension. **The round-53
  false-positive shape. A sweep would have "fixed" it.**


---

## A propagation alarm that was already answered — censused, nothing changed

A `rules-verifier` pass found that **Hockey Canada Rule 6.11's preamble requires skate contact
too** — *"Only the player's skate(s) that are in physical contact with the ice surface will be
used in determining an off-side"* (verified in **both** `hc.txt` and `hc_layout.txt`) — alongside
USA Hockey 630(a). It flagged this as a corpus-wide propagation risk: *"If any sibling document
still says 'USA Hockey is the exception,' it is now wrong."*

**Censused across all 37 documents. It is not wrong anywhere.** Every site that states the
airborne-trail-skate divergence already names both books and already says **two of the four**:

- `rink_map_and_glossary.md` — twice, once quoting 6.11's preamble verbatim and adding its
  Interpretation 3, once stating *"two books of the four"* outright.
- `on_ice_communication.md` — twice, in the facts layer and the body.
- `rules_primer.md` — the one that could have failed, and it is the most carefully handled of
  all. ⚠️ **Its bullet ends *"offside under USA Hockey"*, and body list items are voiced ALONE,
  one `<p>` each — so the Hockey Canada correction in the following bullet is a separate
  utterance.** The document solves this **inside** the first bullet: *"read the next bullet
  before you assume that is the only book it applies to"*, and the next opens *"Hockey Canada
  Rule 6.11 reaches the same result by different words, so the split is two books against two —
  not one against three."*

⚠️ **The apparent hits in the census were Sources trailers** — which name a rule under its own
book's heading, correctly — **and the DELAYED-OFFSIDE CLEARING test, which is a different
question with a different answer** (IIHF 83.3(I): *"'3D' judgement is not used in this
situation"*). **A sweep on this pattern would have damaged correct text in both classes.**

**Nothing was changed. Recorded because the negative is the finding**, and because it is the
fifth time this round a relayed concern proved already handled in the corpus.


---

## Two majors in `center.md` — and ONE OF THEM WAS CREATED BY THIS ROUND

Both items in the coordinator's brief were **refuted**: the British post-icing gap was already
closed in HEAD at three layers, and the 69.3 defect is in `goaltender.md`, not this file. The
reviewer found two majors of its own instead.

### 1 · A flat universal that is false in the two books most readers play under

`Rule: There is no minor-penalty option for checking from behind — it is a major with an
automatic game misconduct (NHL Rules 43.2–43.5, IIHF Rules 43.2–43.3)`

True under NHL 43.2 (*"There is no provision for a minor penalty for checking from behind"*)
and IIHF 43.2. ⚠️ **False under USA Hockey 608(a)** (*"A minor plus a misconduct penalty, or a
major plus a game misconduct penalty, shall be assessed"*) **and Hockey Canada 7.5(a)**.

⚠️ **And it was AUTHORED, not extracted.** A grep of the whole document for `43.2`, `43.5` and
*"from behind"* found no sentence in the section the value could have come from. **The
traceability pass that "keeps coming back clean" did not, here.** Split into two values, the
four-book structure added to the body first.

### 2 · A value added in THIS ROUND'S STAGED DIFF that contradicted its own block

`Never: Take your body inside the blue paint… and being shoved in relieves your position only,
never playing the puck or touching the goalie there`

The trailing clause is **USA-Hockey-specific** (617(c)(4), 625(a)(8)) and was stated with **no
book attached**. ⚠️ **Under NHL/IIHF 69.1 it inverts**: that rule relieves the *contact*, not
the position — contact caused by a defender *"will not be deemed contact initiated by the
attacking player"*. **So, voiced alone, it told an NHL/IIHF reader that being cross-checked into
the goalie is never excused — and it flatly contradicted `:384` in its own block, which states
the carve-out correctly.**

⚠️ **This is the cross-agent contradiction `CLAUDE.md` warns about, in the exact predicted
shape: two individually-defensible sentences, contradictory when read aloud, in one block.** It
was caught only because the reviewer **diffed the whole file rather than trusting its own
hunks.** The same edit had also evicted USA Hockey's push-in relief to make room; both restored
in one scoped 193-character value.

### The handover, answered by the coordinator

The reviewer flagged its own repair for checking: it asserted **IIHF 43.3's major is
discretionary where the NHL's is mandatory**, and said that if it had this backwards the fact
would understate the NHL floor. **Verified across all three books:**

- **NHL 43.3:** *"Any player who cross-checks, pushes or charges an opponent from behind who is
  unable to protect or defend himself, **shall be assessed** a major penalty."* — mandatory.
- **IIHF 43.3, v1.1 and 2026/27 identically:** *"The Referee, **at their discretion**, shall
  assess a major penalty and an automatic game misconduct penalty… and who **recklessly
  endangers** the fouled Player."* — discretionary, and separately conditioned.

**The reviewer had it right.** ⚠️ **And a further check that could have made the value
over-strict came back clean:** NHL 43.3's *"unable to protect or defend himself"* is **not an
extra condition** — **43.1 defines** a check from behind as one where the player *"is not aware
of the impending hit, **therefore** unable to protect or defend himself"*. So the major is
mandatory for a check from behind as the book defines it, and the value's *"mandatory under NHL
43.3"* is exact rather than approximate.


---

## `risk_management.md` — six repairs, and a brief error that travelled through two agents

Six of the seven items landed. **The one that did not is the most instructive error of the
round, because it shows the failure propagating.**

### The two that would have misled a listener

**An inverted subject.** Casebook 639 Situation 2 was rendered as *"a poke or hook check that
**loses the puck** and then trips."* In the source the one losing the puck is the **carrier**,
and the carrier **falls**: *"If the player loses the puck as a result of a poke check or hook
check and then falls, this is not a penalty unless…"* ⚠️ **The corpus phrasing read as the
CHECKER failing to win the puck and then tripping — which would be a penalty, the exact opposite
of what the Situation holds — and the next clause used *"the player"* for the carrier.** Rewritten
so both limits survive and the referents are explicit.

**A count that defeated its own sentence's purpose.** *"not the four Casebook situations under
616, not the four under 639"* — **639 has five.** The 616 count of four is right, so only half
the sentence was wrong. ⚠️ **The negative claim itself was re-verified independently by reading
all nine situations rather than searching them, and it survives** — none joins 639(a)'s Note to
Rule 616.

### A cardinal-rule violation nobody had flagged

`:247`'s block carried *"the coached default is a standing block"* on a 2-on-1, while the body at
`:257` says plainly that some teams coach a timed slide across the lane **as the method itself**.
⚠️ **One system's answer, stated as the answer, in the layer that is voiced alone.** The block had
room (8/11, 5/8 non-`Rule:`), so a `Convention:` naming both was added.

### The brief error, and how it travelled

My brief said `:606` *"promises a casebook and never names it"* and *"omits the operative
qualification."* ⚠️ **Both halves are false.** Line **608** names *"Situation 1 to Rule 618"*,
quotes the continuous-motion test, and lists **all four** ways to lose it — holding it for any
length of time, taking one or two strides, throwing it away from the stick, faking the drop. The
Sources trailer already cites it. And *"knock it straight down where you stand"* **is** the
continuous-motion test stated operationally.

⚠️ **Acting on this item would have duplicated material already present.** The premise appears to
have come from a grep that stopped at line 606 — two lines short.

⚠️ **This is the shape to learn from: the error originated in a `rules-verifier` report, was
relayed by the coordinator into a brief WITHOUT being re-measured, and was caught only by the
third agent in the chain.** The standing rule — *never put a count or a "reaches no layer" claim
into a brief without running it first* — was written in this very round and then broken by the
person who wrote it. **A finding from a trusted agent is still a claim.**

### Two handovers worth more than the repairs

- ⚠️ **The crease's vertical extent has no owner.** Both NHL quotations verify verbatim, but
  `rink_map_and_glossary.md` — the named owner of crease dimensions — **does not hold the figure
  at all.** The borrower is not diverging from its owner; the owner is silent.
- ⚠️ **Bare roman-numeral clause markers are voiced as raw letters.** The renderer expands
  `63.2(II)` correctly but leaves a bare `(II)` alone; eleven sit in one paragraph. **Reported,
  deliberately not swept** — eleven substitutions in one dense paragraph is the shape that
  manufactures a defect.


---

## The 69.3 defect was worse than reported, and the brief undercounted again

The value dropped **three** things, not the two the brief named. Beyond *"significant"* and the
duration limb, it said *"vision-obstructing"* alone — ⚠️ **but NHL/IIHF 69.3's test is
CONJUNCTIVE:** an attacker must establish a significant position *"so as to obstruct the
goalkeeper's vision **and** impair his ability to defend his goal"*, and the rule then defines
the position as the body *"within the goal crease for more than an instantaneous period of
time."* All three omissions ran in the **over-strict** direction: voiced alone, the value told a
goaltender that any vision-obstructing crease presence kills the goal.

**The brief also missed the more important half.** It cited only the NHL. ⚠️ **Both IIHF editions
carry the identical definition** — verified byte-identical on `diff` between 2025/26 v1.1 and
2026/27 — **and the IIHF is the British reader's book.**

**And it said "all six 69.3 values corpus-wide". There are seven.** The two missed are both in
`goaltender.md` itself and neither concerns this limb, so the substantive claim — that this file
was the only value missing *both* — is confirmed.

⚠️ **The agent named exactly how it got lucky, and it matters more than the fix:** *"I found the
missing 'impair' limb only because I had the primary paragraph open to check the duration limb.
Had the brief named only 'significant', I would very likely have restored that word and left the
conjunctive limb broken. The omission pass found a second omission by accident, not by method."*

**It also inverted the prescribed method and said so:** it built its hedge list from the rule
text rather than from the section's body, so **an omission whose source is a caveat the body
states but no rulebook paragraph does — a coaching hedge, a rule-set flag, a "find out which
book your league runs" — would have passed it untouched.**


---

## The gate blocked a SECOND time, on the failure this project names as its worst

Both findings are propagation. **The repair reached one document and stopped** — which
`CLAUDE.md` records as the cause of *every* critical in round 10.

### 1 · A repair that stopped one block short of itself

`center.md`'s flat universal — *"There is no minor-penalty option for checking from behind"*,
false under **USA Hockey 608(a)** and **Hockey Canada 7.5(a)** — was split into rule-set-scoped
values. ⚠️ **The identical sentence remained staged, unchanged, at three more sites:**
`forechecking_systems.md` twice and `defending_the_rush.md` once, plus a flat prose statement in
`getting_started.md` — **the beginner document, where a reader has least context to catch it.**

⚠️ **One of those sites is in the VERY FACTS BLOCK repaired earlier the same day**, three lines
from the deliberate-turn value that now names Hockey Canada 7.5 Interpretation 2. **An agent was
inside that block and did not carry the finding across.**

⚠️ **`check_rule_scope.py` shows the split exactly** — those sites carry `{IIHF, NHL}` while six
other documents carry all four books. **The worklist WAS run this round, but scoped to the newly
introduced 56.x / 8.3(e) citations, so 43.2 was never looked at.** A worklist run on the wrong
subset is indistinguishable from one not run.

### 2 · Three of four classifications dropped, in the direction that misleads the likely listener

`puck_support_and_spacing.md` carried, voiced alone:
*"grants the shorthanded exemption only from Youth 15-Only and above, below which a shorthanded
team **CANNOT ice the puck at all**"*.

**USA Hockey 624(b)(1) reads *"(For all Youth 15-Only and above, Girls 16U and above, High School
and Adult classifications only)"*.** ⚠️ **So it tells an ADULT rec player — who HAS the exemption
— that they cannot ice the puck shorthanded**, and carries an absolute while doing it.

⚠️ **Censused across all fifteen `624(b)(1)` sites: this was the ONLY short one.** The house form
already existed in twelve other documents.

### Where the coordinator's brief was wrong again

I told the gate that **14 staged files were in nobody's assignment**. ⚠️ **Measured: the two
review records between them name 33 of the 36 staged content files. The uncovered set is THREE**
— `puck_support_and_spacing.md`, `puck_handling.md`, `practice_and_development.md`. I had
relayed the `rules-verifier`'s count without measuring it, which is the same mistake, again,
and the third time today a number reached a brief unmeasured.

**Two of the three then cleared on inspection:** `practice_and_development.md`'s new citations
have C5 evidence on disk (Lee & Genovese 1989 PMID 2489826; Panchuk et al. 2013 PMID 24175450,
*"quoted sentence verbatim in abstract"*, `isOpenAccess=N`), and its change replaces an unhedged
folklore claim with *"coaching guidance, not a measured finding."* `puck_handling.md` is anaphor
repairs plus two corrections that move text **toward** the sources. **The finding was in the
third.**

### The gate recorded a false finding it nearly raised

`risk_management.md`'s *"four cumulative conditions … (NHL Rule 57.3)"* looked wrong to it,
because the NHL book also enumerates four criteria at 24.8 and 57.3's opening sentence writes
*"could have obtained possession and control"*. **Reading 57.3 to its end refuted it** — the rule
prints all four criteria itself, including *"clearly would have obtained possession and control"*
and the puck-first rider. ⚠️ **The corpus was right, and the gate said so rather than filing it.**

### CRT6, and a false negative waiting for the next reader

The gate read `sources/crt6.pdf` **by eye** because `sources/crt6.txt` is **1,535 bytes of header
with no body** — so any grep of that extraction is a false negative. The *"Remember"* box has
five bullets, the Red Flags box ten, and the helmet, movement and spinal-injury instructions are
verbatim. ⚠️ **The provenance repair holds: the helmet instruction is CRT6's, not USA Hockey's —
`huh.txt` contains no helmet instruction at all.** `link_baseline.tsv`'s row said *"BODY
quotations NOT verifiable without OCR"*; **updated to record what was actually read, and to warn
that the `.txt` has no body.**


---

## Two censuses that found nothing, recorded because the negative is the result

### "your book" in the voiced layer — 26 sites, 0 defects

A repair to `getting_started.md` first read *"Under your book, checking from behind has no
minor-penalty option."* ⚠️ **Rendered, a `<p>` voiced alone with 300 ms either side leaves *"your
book"* unanchored** — the listener cannot know which book. **Caught by rendering, not by reading**,
and rewritten to name the IIHF inside the clause.

Censused corpus-wide for the same shape in the summary layer (facts values, list items,
blockquotes — each voiced alone): **26 sites, none defective.** Every one either names the book
in the same sentence (*"Your book is the IIHF Rule Book"*, *"IIHF — your book in Britain"*,
*"Under the IIHF book… that is the book you play under in Britain"*) or uses *"check your book"*
as an **instruction to go and find out**, which needs no antecedent. ⚠️ **A sweep on this pattern
would have damaged 26 correct sites.**

### The back-pointers in `body_contact_and_battles.md`'s British block — voiced, so not dangling

Two `Rule:` values there point backwards at a table — *"the USA Hockey and Hockey Canada rows
above are not yours"* and *"the age bandings above do not transfer"*. Both are voiced alone, so
the question is whether a listener ever heard the rows.

**Tested through the real renderer, not guessed.** `report.tables_as_pointer` names only the
tables at lines **1020** and **1223**; the checking table these values reference **renders as
prose** — its content is present in the spoken text. **The listener hears the rows. Not a
defect.**

⚠️ **`check_pointers.py` reports one hit in this file anyway** — *"Everything in the table above
is North American…"* — **because the file contains other tables that DO render as pointers.**
That is precisely the false-positive mode its own docstring documents: *"It cannot tell a
dangling pointer from a satisfied one."* **Read every hit; this one is correct text.**


---

## The brief that would have shipped a WRONG RULE, caught by the agent it was given to

I briefed NHL 69.3's third paragraph as *"a **mandatory minor** on the reader… whether or not a
goal is scored"*, quoting the rule's own closing sentence. ⚠️ **That is wrong for the
goal-scored case, and THREE primary sources say so:**

| Source | Facts | Result |
|---|---|---|
| **NHL Table 14 Situation D** | attacker *"refuses to give ground at the time a goal is scored"* | *"Goal is disallowed. **A minor penalty is not assessed (loss of goal only).**"* |
| **IIHF Appendix IV Situation 6 D** | identical | identical wording |
| **IIHF Situation Handbook 69.2** | identical | *"**No goal – no penalty.** The attacking player must give ground…"* |

The minor lands in the **no-goal** case (Table 14 Situation B), and even there it is qualified by
the referee's judgement of *"the degree of contact and degree of resistance… and whether the
goalkeeper was truly trying to establish a position."*

⚠️ **69.3 refers to Table 14 in terms, so the table is incorporated, not extraneous. The rule
text and its own table do not agree, and nothing on disk resolves it.** The agent wrote the
conflict **as a conflict** and marked it unresolved rather than picking a side — and noted the
instruction is safe either way: **give ground; one reading costs the goal, the other two minutes.**

### ⚠️ The method that found it, and it defeats a flattened grep

**NHL Table 14 is a TWO-COLUMN table. Flattening splices the columns** — *"not assessed (loss
of"* / *"goal only)"* — so a whitespace-flattened search reads it **wrongly**. It has to be read
**by column slice**. ⚠️ **This is a tenth way a grep lies, and it is not in the style guide's
list.** Every other item on that list concerns text that a flattening *repairs*; this one is text
that flattening *creates*.

### And a second paragraph was missing that the brief never mentioned

**69.3 ¶2:** a goalkeeper who *"in the act of establishing his position"* initiates contact with
an attacker in the crease, impairing their ability to defend, **voids the goal — the goalie made
the contact and the attacker still loses it.** IIHF Situation Handbook 69.6 confirms it holds
**even if the attacker vacates immediately.**

### Two overstatements the agent wrote and removed on re-read

*"the one place in Rule 69 that reaches you personally"* — 69.2 and 69.4 also do. *"the one
place where the rule text and the reference table do not agree"* — it had not audited every
situation. Both softened; *"prints that paragraph word for word"* was downgraded to *"in the same
terms"*, because the penalty wording differs. ⚠️ **Self-caught, on re-reading its own new text —
which is the discipline this round has otherwise had to learn from the gate.**

### One of its findings was itself wrong

It reported that the agent definition's source table lists **26** files while `ls sources/*.txt`
returns **25**, and called the table stale. ⚠️ **Measured: `ls sources/*.txt` returns 26.** An
earlier `rules-verifier` independently measured the same thing and reported *"26 files on disk,
table names 26. No discrepancy."* **The table is correct and the finding is a miscount** —
recorded because it is the same failure the round is about, arriving from the other direction.


---

## `shooting.md` — the brief was refuted on the thing that decides the method

I briefed it as *"body ✓, block ✗ — the layer-test shape"*, so the repair would be extraction.

⚠️ **Refuted. The BODY carried the same over-strict rule.** It quoted 69.3 as disallowing the
goal where an attacker *"establishes a significant position within the goal crease"* — **and
stopped the quotation exactly where the rule's two limbs begin.** The rule continues *"**so as
to obstruct the goalkeeper's vision and impair his ability to defend his goal**, and a goal is
scored…"*

**So this was never extraction. It needed authoring first**, and an agent that had trusted the
brief would have "extracted" a defect from a defect.

⚠️ **And it was in FIVE places in that one file** — body ×2, the facts block, Common Mistakes and
a Key Takeaway. **A document-level grep for `69.3` would have CLEARED this file: the string was
present five times.** Only reading each one decided it.

**A second error inside the same bullet:** the body asserted that reference-table Situation 6B
*"say[s] the same thing in plainer words"* as 69.3's significant-position test. **It does not.**
6B is *Crowding the Goalkeeper* — the **goalkeeper** initiates contact to establish position and
the attacker will not vacate; no goal is scored; the result is a **penalty**. Different rule,
different actor, different consequence.

### A corpus-wide layer test on 69.3 — run, and mostly noise

Every site mentioning `69.3`, `instantaneous` or `substantial portion` was extracted and scored
for the three components. ⚠️ **35 sites flagged; almost all are correct text.** The flags fall
into classes a sweep would have destroyed:

- Sites about 69.3's **other paragraphs** — the contact ground, the give-ground paragraph, the
  Table 14 penalty question. **Different paragraphs, correctly stated.**
- **Sources trailers**, which cite rule numbers without restating tests.
- **Outright false positives** — `conditioning_and_recovery.md`'s *"instantaneous"* is the
  **phosphocreatine system**.

⚠️ **This is the style guide's own warning demonstrated: a layer test finds candidates; only
reading decides.** **One** genuine candidate survived reading — `playing_without_the_puck.md`,
which carries **both limbs** and lacks only the duration gloss. Routed.

### Reported and NOT acted on — an ownership finding that is a real cross-book gap

⚠️ **The crease LINE belongs to the crease under two of the four books, and the corpus never
draws the consequence.** **IIHF Rule 1.7:** *"The marked line belongs to the Goal Crease."*
**USA Hockey 625(b) Note:** the crease area *"shall include all the space outlined by the
semi-circular crease lines **(including crease lines)**"*. **NHL 1.7 says only *"outlined by"***.

Several documents tell the reader a screen planted *"on the crease line"* is allowed. ⚠️ **Under
the IIHF that player is IN the crease by the IIHF's own Rule 1 — while the IIHF's own Table 16
Situation 5 E ALLOWS the goal.** An unflagged internal tension in the British reader's book.

**The finding agent refused to write it**, correctly: crease geometry is owned by
`rink_map_and_glossary.md`, and restating it in a technique document would be an ownership
defect. **Routed to the owner.**


---

## A better measurement found a defect that looking had not

The plan row said `faceoffs.md` had *"eight rule citations living only in facts blocks."* A first
re-measurement said **2 of 42**. ⚠️ **Both were wrong, and the second was wrong in an
instructive way: it measured PRESENCE-IN-DOCUMENT.** A rule number sitting in a distant section
scored as resolved.

Re-run as **traceability-to-section** — every rule token in every `Rule:` value across all 33
blocks, matched against **that block's own section prose**, Sources trailer and the block itself
excluded:

| | pre-repair | post-repair |
|---|---|---|
| tokens examined | 189 | 189 |
| trace to their **own** section | 183 | **185** |
| elsewhere in the document, not the section | 4 | 4 |
| **in no prose anywhere** | **4** | **0** |

⚠️ **Two of the four "nowhere" tokens were a SECOND, INDEPENDENT instance of the defect the
brief described, which nobody had found by reading.** `6.7(d)` and `6.7(d)(iii)` asserted Hockey
Canada's post-icing position from a value whose rule number appeared **once in the entire file —
inside the facts block** — and was absent from the Sources trailer. The claim is true; the
load-bearing half is that **below U18AAA / Junior / Senior-at-the-Member's-option there is no
icing freeze at all**, so the *"you can change, they cannot"* edge the whole section is built on
**does not exist for most Canadian minor hockey.**

⚠️ **The four remaining "elsewhere" tokens were read individually and are citation-form only** —
a section writing *"Rules 76.3 to 76.7"* as a range where the block cites `76.6`. **Not defects.
A sweep would have damaged them.**

### Both grants were two-part rules, and the books split on the second part

USA Hockey **627(c)**'s permission and its goal proviso are **one sentence**; Hockey Canada
**6.10(a)** is followed immediately by **6.10(b)**. Writing the grant in without the proviso
would have reproduced the defect the style guide names — and the split lands on a play the
document teaches: **NHL 49.2(ii)–(iii)** and **IIHF 49.2(II)–(III)** make a kicked puck
deflecting off a stick a **good goal**, while **Hockey Canada 6.10(b)** and **USA Hockey Casebook
627(c) Situations 4 and 5** answer **no goal**. So under the two North American books an
offensive-zone kick-back that gets tipped in is not a goal — **which takes the tip play off the
menu behind it.**

### Two self-catches, both from diffing the whole file rather than trusting hunks

A bare `\n\n` **broke a bullet list** and would have split the technique list in two on the
site — invisible to every checker, since markdown remains valid. And a first draft read *"the
team that iced changes exactly as you do"*, which **over-reads**: Hockey Canada still penalises a
late change everywhere.

### A trap in the agent definition itself

Two separate agents reported the `rules-verifier` source table as **stale**, naming
`hc2628.txt`, `usah_case.txt` and `usah_rules.txt` as phantom entries. ⚠️ **Measured: those three
strings appear ONLY inside the file's own warning that they are wrong** — *"not `usah_case.txt`,
which does not exist and never has"*. **The table names all 26 files on disk and nothing else;
`ls sources/*.txt` returns 26, and no file on disk is unnamed.** **The warning about stale
filenames is being read as the table.** Recorded because it has now cost two agents a false
finding each, and the fix is presentational, not factual.


---

## The crease line — three books of four, and the third was invisible to a rules search

I briefed this as *"two of the four books"*, with Hockey Canada *"not reported either way"*.
⚠️ **It is three.**

- **IIHF Rule 1.7:** *"The marked line belongs to the Goal Crease."* Identical in 2025/26 v1.1
  and 2026/27.
- **USA Hockey 625(b) Note:** the crease area *"shall include all the space outlined by the
  semi-circular crease lines **(including crease lines)**"* — **and its Casebook answers the
  question in terms**, which nobody knew: *"Is the two inch red line outlining the goal crease
  considered to be a part of the goal crease? **Yes.**"* (The Rink, Situation 4, Rule 103(b).)
- ⚠️ **HOCKEY CANADA — and this is the one that matters methodologically. Its GLOSSARY says
  *"The lines of the crease are considered part of the crease."* Its RULE TEXT DOES NOT** — Rule
  1.5(c) uses the NHL's looser *"will include the space outlined by the crease lines"*. **A
  verifier reading only the numbered rules would have reported Hockey Canada as silent.**
- ⚠️ **And `hc_layout.txt` SPLICES A MEDICAL-NOTE COLUMN into the middle of that Glossary
  sentence** — the documented two-column trap. **Only the plain extraction reads it correctly.**
  So the finding required the right book, the right section *and* the right extraction.

**The NHL negative was attacked rather than assumed** and holds: *"crease line"* returns four
hits, *"belongs"* two (both penalty-shot boilerplate), and **the NHL Glossary contains the string
*"crease"* ZERO times.** The NHL also **references no companion case book or situation handbook
at all** (0 hits, against USA Hockey's 5 and the IIHF's 3) — so the shape of the hole is that
nothing in the book addresses it except one reference table.

⚠️ **The IIHF tension is real and unresolved.** Rule 1.7 puts the line in the crease, while its
own **Appendix IV Situation 5 E** allows the goal where an attacker *"plants themself **on the
crease line** or outside the goal crease"*. Both IIHF Situation Handbooks were searched flattened
for *"crease line"*, *"marked line"*, *"belongs"*, *"part of the crease"* — **zero hits in
either.** Written into the corpus **as a tension, with no side picked.**

**And one instruction works in all four books without resolving any of it:** *keep your skates
off the red line, not merely out of the blue.*

⚠️ **This is a penalty consequence, not geometry.** Under **USA Hockey 625(b)** a skate on the
line voids your teammate's goal on position alone, whoever scored; under **Hockey Canada 8.5** a
screen on the line obstructs the goaltender's *"view or movements"* by definition. **A reader who
carries the reference-table phrase *"on the crease line or outside the goal crease"* out of the
NHL/IIHF material and into a USA Hockey or Hockey Canada game loses goals.**

### An inference the agent refused to draw, and was right to

`goaltender.md` says *"The blue paint. The crease lines are painted for you."* Under the IIHF,
skate contact with the **line** is *arguably* skate contact with the **crease** — which would
reach the trapezoid exception. ⚠️ **No book states it, and getting it wrong costs a goaltender
two minutes. Recorded as an open question, not written anywhere.**


---

## A missing rule paragraph found BY A REPAIR, not by any review

The brief asked for one thing: add 69.3's duration gloss to a value in
`playing_without_the_puck.md`. It also insisted on a scope flag — that the value must say it is
talking about the **no-contact** ground, since 69.3's *first* paragraph disallows the goal for
**any** contact.

⚠️ **Writing that flag made a hole visible: 69.3's first paragraph existed NOWHERE in the
document** — not in the body, not in any facts value. *"If an attacking player initiates contact
with a goalkeeper, incidental or otherwise, while the goalkeeper is in his goal crease, and a
goal is scored, the goal will be disallowed."* **The document taught 69.4 (outside the crease)
and 69.3's position ground, and left the strictest of the three unstated.** Added to the body
with its own printed exception (69.7), plus a value.

⚠️ **The agent named the mechanism precisely, and it is the most useful sentence in the report:**
*"Had I written the value without that flag — which is what the brief literally asked for — I
would have shipped a clean-looking fix and never noticed that 69.3's strictest paragraph was
absent. **The omission was found by a repair, not by the review.**"*

**Three more defects surfaced in the same block once it was read as voiced:**
- A `Key:` value said *"positioning alone, from outside it, can still take the goal off the
  board"* — **false under USA Hockey and Hockey Canada**, and **the value two lines above it in
  the same block says so.** Scoped.
- 69.4's *"only while the goalkeeper is in the act of playing the puck"* **flattened away 69.7**,
  which permits incidental contact *"whether inside or outside the crease"* in a rebound or
  loose-puck scramble. Split rather than trimmed.
- The same flattening had reached **Common Mistakes**. Propagated.

**The split also RECOVERED two hedges the single value had lost** — the IIHF Rule 75 route for a
glove across the eyes applies *"if witnessed by the Referee(s)"*, and is **IIHF-only**.

⚠️ **And the Sources trailer's scope statements were already stale before this work** — *"read
for Situations 63.19, 63.24, 63.28 and 63.3 only"* while the body cited 69.3 and 75.4. Corrected
to what was actually read. **A scope statement is a claim too.**

### The brief's inherited warning did NOT apply, and saying so is the result

I passed on `shooting.md`'s lesson — *"check the body, it may carry the same defect"*. **Here it
did not:** the body already carried the duration as a paraphrase, so this was genuine extraction.
**The warning was right to pass on and right to discard after checking.**


---

## The primer was clean on the hypothesis, and carried a different gap

**Predicted defect absent.** `rules_primer.md` did not state the bare mandatory minor; it already
carried the 69.3-versus-table conflict **in more detail than either document pointing at it**,
and picked no side.

**The real gap was the adjacent paragraph.** The document stated 69.3's **third** paragraph (give
ground or lose the goal) and **omitted its second entirely** — the limb where the goal comes off
**even if you give ground immediately** (*"Even though the attacking player vacates his position
immediately, the contact impairs the goalkeeper's ability to defend his goal"* → *"Goal is
disallowed"*). ⚠️ **As written, the natural inference was that giving ground saves the goal. It
does not.** `offensive_zone_play.md` already carried this limb; **the primer both other documents
point at for "the full comparison" did not.**

### The chunk-tail class appeared again, and was caught by rendering

⚠️ **The first render put *"Giving ground does not save that goal"* at the END of a voiced
chunk**, with the duty to give ground arriving only in the next one. **A listener hearing that
chunk alone could conclude giving ground is pointless** — against a goaltender leaning into them.
The counterweight was moved inside the same chunk and re-rendered; it now closes on *"None of
that makes giving ground optional."*

**This is the second independent instance of the chunk-terminal class in one round**, found the
same way both times: **by rendering, not by reading.** It is why `scripts/check_chunk_tails.py`
now exists.

### Two negatives attacked properly

**IIHF Tables 5, 6 and 7 read in full — Rule 69 appears in none**, and IIHF **20.5** names exactly
that set: *"A list of the infractions that can result in a major penalty being assessed can be
found in Tables 5, 6 and 7."* **So the document's table set is the right one, and the negative is
about the right universe.**

**And the source table was clean:** *"26 files on disk, 26 named. No discrepancy this round —
first time in five."*


---

## The gate blocked a THIRD time, and both findings were this round's own repairs

### 1 · The 69.3 repair reached four documents and stopped one site short — in the OWNER

The conjunctive-test repair landed in `shooting.md` (5 sites), `playing_without_the_puck.md`,
`goaltender.md` and `offensive_zone_play.md`. ⚠️ **`rules_primer.md` was edited heavily in the
same diff ON THIS VERY RULE — and still quoted the test up to *"vision"*, dropping *"and impair
his ability to defend his goal."*** So **the owner document, which two others point at for *"the
full comparison"*, became the one place in the corpus stating the test MORE STRICTLY than the
book.** Same failure as the second block, different rule.

⚠️ **The repairing agent then found a site the GATE had not named** — Common Mistakes at `:862`
listed *"establishing a significant position inside the crease"* as illegal per se, the same
defect in a different layer. **It widened the search past the brief rather than working to it.**
Both IIHF editions carry the second limb identically, so it does not turn on the reader's edition.

### 2 · The "table cannot repeal a rule" clash was NOT the editorial decision I recorded

I had filed it as a decision between two defensible positions. ⚠️ **The gate showed
`goaltender.md` is simply WRONG on provenance:** the value names both books and then says *"Rule
69.3's own text mandates one"* — **but only the NHL writes *"a minor penalty"*. The IIHF writes
*"the appropriate penalty."*** So the value carries one book's wording as both books', **and
picks a side against the owner, for the British reader, in a value voiced alone.**

⚠️ **And the gate distinguished it from the two sites that use the same phrase PROTECTIVELY** —
`rules_primer.md:862` and `shooting.md:436`, which stop a reader leaning on a reference table in
their own favour. **Those are correct.** So what I recorded as one unresolved decision was
really **one wrong site and two right ones**, and a sweep would have damaged the two.

### 3 · The honest structural finding: the repairs were AUTHORED, and nobody had read them

The gate applied the terminating rule rather than blocking reflexively, and judged that the
post-block-2 work went **beyond its findings into new claim text** — `shooting.md` *"needed
authoring first"* at five sites, `playing_without_the_puck.md` gained a whole body paragraph its
finding never named, `rink_map_and_glossary.md` gained a three-book claim. ⚠️ **It sampled ~20
claims out of a 6,450-line diff, found the two defects above, and said plainly that two is a
LOWER BOUND, not a total.** Two read-only reviewers were dispatched over the authored set.

### What the gate verified rather than trusting

It re-tested the secrets fix by **exercising the rule object directly**: the ECR URL flags, a
bare 12-digit run flags, the same stamp on any other host flags, and only the one
host-plus-filename shape is ignored. It read **Table 14 by column slice** and confirmed the
corpus is right — 6C is silent on penalty, 6D says none is assessed — and confirmed
`rules_primer.md` states the conflict without picking a side. And it caught that a zero-hit grep
for 69.2's *"(minor or major, as the Referee deems appropriate)"* was **the line-wrap trap, not
an absence.**


---

## The provenance defect repaired, and the census it asked for — clean

The `goaltender.md` value that attributed the NHL's *"a minor penalty"* to both books now reads:

> `Rule: An attacker who will not give ground after your contact may still be penalised — at 6D,
> NHL Table 14 and IIHF 2025/26 Table 16 both answer "a minor penalty is not assessed (loss of
> goal only)", but NHL 69.3 mandates a minor; IIHF 69.3 writes "the appropriate penalty", which
> may be no penalty at all`

⚠️ **And *"a table cannot repeal a rule"* is gone from it** — because once the books are
separated the assertion is **at best NHL-only**, and on the NHL side it is **the very reading the
owner declines to make.**

⚠️ **The body carried the same defect**, saying *"the disagreement is in both books… 69.3 is the
one that governs"* — **so the value traced to a DEFECTIVE sentence rather than to none, and had
to be corrected first.** That is the third time in this round that a block defect turned out to
have a body defect underneath it (`shooting.md`, `playing_without_the_puck.md`, here). ⚠️ **"Body
✓ does not imply block ✓" has a converse this round kept meeting: block ✗ does not imply body ✓.**

**Two renderer catches, neither visible on the page:** a first repair ended *"…which can carry
none"* — *none of what?*, ambiguous standing alone — and the renderer produced *"at six D NHL
Table fourteen"* as a run-on until a comma was added, paid for by *"The attacker"* → *"An
attacker"* to stay under the cap.

### The census the agent flagged as one it should have run

It ended by saying `grep -n "appropriate penalty" content/` corpus-wide *"would be the cheap next
check; I did not run it as a report basis, and I should have."* **Run: it is clean.** Every site
distinguishing the two books does so correctly — including `goaltender.md`'s neighbouring value,
which reads *"a minor at NHL Reference Table 14, 'the appropriate penalty' and no cap at IIHF
2025/26 Table 16"*, and `offensive_zone_play.md`, which states the IIHF prints the give-ground
paragraph *"in the same terms but with 'the appropriate penalty' where the NHL writes a minor."*
**No further instance of the flattening exists.**

### An honest limit the agent stated and I am not closing

*"The IIHF book accommodates its own table"* is a statement about **textual consistency**, not a
prediction about what a referee does. ⚠️ **Read aloud in a goaltender's document it sits one
inference away from *"in Britain they get nothing"*, and nothing on disk settles whether that
inference is sound.** The owner's framing was kept rather than sharpened. **The hazard is not
closed, and saying so is the honest disposal.**


---

## The bench-glass critical — and two corrections to the brief that changed the repair

`rink_map_and_glossary.md` told a British reader, of the delay-of-game minor: *"The rule carries
its own exception, and on a British sheet it is the one to know… its side glass stops in front of
the players' benches."*

⚠️ **The very next sentences of the rule quoted close that case.** IIHF 63.2(III): *"**When the
puck is shot over the protective glass surrounding the Players' bench, the penalty will be
assessed.** Note: When the puck is shot into the Players' bench, the penalty will not apply."*
**So the document pointed a reader at the one place the rule expressly penalises — and called it
"the one to know".** It also **contradicted its own declared owner**: `rules_primer.md` states it
correctly and says in terms *"do not read the bench as somewhere to aim."*

### The brief was wrong twice, and both corrections improved the repair

1. ⚠️ **I implied the "no glass at the bench" premise was unsourced. It is not.** IIHF Situation
   Handbook **63.24**: *"When the puck is shot **directly** into the Players' Bench (where there
   is no glass), no penalty is to be assessed."* **The premise is sound; the USE was wrong** —
   the exemption is gated on the puck going *directly in*. **Deleting the fact would have
   breached non-negotiable 3.** It was left where its owner states it.
2. ⚠️ **I said 63.2(III) "presupposes the opposite" of glass being absent. It does not, quite.**
   **Rule 3.1** requires glass *behind* the bench; **63.24** says there is none *in front* of it.
   **Glass *surrounding* a bench and no glass *in front of* it are consistent.** The repair quotes
   the rule and draws no inference either way — **asserting my version would have been authoring
   in the other direction.**

**And a third carve-out neither the corpus nor the brief had:** a puck out of the playing area
*"directly off a 'face-off'"*, in the same Note. Now carried.

### The census that followed — clean

**Every other site in the corpus discussing the bench carve-out states it correctly**, either by
gating on *"directly"*, by stating that over the glass is penalised, or both. `faceoffs.md` is
exact: *"the IIHF Handbook exempts only one shot straight in, not one clearing the glass into
it."* ⚠️ **The apparent hits in the census that name no penalty are a DIFFERENT rule** — 82.2(V)'s
improper line change — **and a sweep would have damaged them.** The misreading was unique to one
file.

### A renderer note, not a defect

`63.2(III)` and `63.2(iii)` voice **identically** as *"sixty-three point two, clause three"*.
Accurate — they are the same clause number in both books — but where the corpus cites both in one
sentence the listener hears the same string twice and it sounds like a stutter.


---

## The checking-from-behind confinement — and a repair that refused the fix it was offered

`rules_primer.md` led with *"in three books of four it ends your game"*. ⚠️ **The tier claim is
TRUE and was confirmed in all four books.** The defect was placement: **the count was the lead
sentence and the qualification arrived four hundred words later**, in a document heard one chunk
at a time.

⚠️ **The repairing agent refused to write *"all four eject"*, and was right: that is FALSE.** USA
Hockey's two Casebook minor situations are real. It wrote instead: *"Three of the four books eject
you at every tier they write, and the fourth ejects you too for a forceful check along the boards
or a reckless one anywhere."*

### A defect nobody had briefed: an authored inference the Casebook contradicts

The document read the USA Hockey minor as *"covering the pushes that do not put anyone into the
boards."* ⚠️ **The Casebook's second minor situation is expressly one where board contact IS
made** — *"minimal body contact… this 'pinch' against the boards."* **It is FORCE, not the wall,
that separates the tiers.** Replaced with the Casebook's own two situations and three mandatory
instances, quoted.

⚠️ **And instance (1) is wider than any brief weighted it:** *"In every instance where a player
**forcefully** checks an opponent who is **standing along the boards**"* mandates the ejection
**with no reckless-endangerment finding and no head-first contact** — materially wider than
608(b), which was all the document had.

### Two negatives attacked rather than assumed

**The IIHF Situation Handbook prints, in terms, `RULE 43 CHECKING FROM BEHIND / No situation.`**
in both editions — *the book stating the absence*, not a grep missing it. And **IIHF Rule 43 is
textually unchanged between 2025/26 and 2026/27**, line-anchored to avoid the Appendix VII pilot
rules, so the passage carries no edition-currency risk.

⚠️ **A limit it stated on its own conclusion:** neither the NHL nor the IIHF publishes a casebook
reaching Rule 43 — the NHL has no public handbook at all, and the IIHF's says *"No situation."*
**So the symmetry between USA Hockey's Casebook and Hockey Canada's Interpretations rests on the
two books that publish interpretations. If the NHL's internal handbook confines its Rule 43 the
way USA Hockey's confines 608, nothing on disk could reveal it.**

### The agent source table — both reports of staleness were wrong, and it WAS stale

Two agents reported the `rules-verifier` table stale by matching the three phantom filenames
inside **the file's own warning that they are wrong**. A third reported it omits
`nhl_rules_layout.txt` and `hc_layout.txt` — ⚠️ **also wrong; both are in it.**

**Measured properly, diffing the table's own ROWS against `ls`: it named 22 of 26.** The four
missing were `crt6.txt`, `ukcg.txt`, and **both NHL 2024-25 files registered this round**. The
2024-25 rows are now added, **marked as dating evidence only and never as authority for what a
rule says now**; `crt6.txt` and `ukcg.txt` are documented as deliberately absent, being medical
guidance rather than rulebooks — **with the warning that `crt6.txt` is 1,535 bytes of page
furniture, so any grep of it is a false negative.** ⚠️ **And the file now says plainly that `ls`
returning more rows than the table is EXPECTED**, so the next agent does not report the same
false finding a fourth time.


---

## The checker I built to find a defect class was itself broken, and reported the corpus clean

`scripts/check_chunk_tails.py` was written this round because a value was found **granting** a
permission as the terminal utterance of an audio chunk, with its carve-outs opening the next
file. It reported **23 chunk-terminal values, 0 of them grants** — and I published that figure,
and several agents cited it back to me as evidence their repairs were safe.

⚠️ **It was an artefact.** The renderer emits a label as *"Rule. "* — a word and a **full stop** —
so the tool's sentence split severed every label from its value, and the "last sentence" of a
chunk began mid-value. **Every label except `Never:` was invisible**, because `Never` renders with
an **em dash** and does not split. The tool was reporting the one label it could see and calling
the corpus clean.

**Found by an agent that imported the module and disbelieved its output**, then read the tails by
hand — after noticing that a `Rule: … permit the goal …` value it had just written was
chunk-terminal and unreported.

**Fixed. True figures: 243 chunk-terminal values, 29 of which grant something, across 19
documents.** Every earlier citation of *"0 grants"* in this round's records is void, including
the ones in reports above.

⚠️ **Three lessons, and the third is the one that generalises:**
1. **A new checker is new code, and new code has not been reviewed** — the same rule this project
   applies to a repair. I wrote it, ran it, saw a clean result and believed it.
2. ⚠️ **A clean result from a new tool is the LEAST trustworthy kind**, because nothing
   distinguishes *"nothing to find"* from *"cannot see"*. I did test that it would have caught the
   original defect — but I tested the **regexes** against a string, not the **pipeline** against a
   rendered chunk, and the bug was in the pipeline.
3. **The `Never:` em dash saved the tool from returning literally zero** — which would have been
   obviously wrong and investigated immediately. **A partially-working checker is more dangerous
   than a broken one.**


## The checker now has a test, and the test was proved able to fail

⚠️ **Adding a self-test was not enough, and the first attempt was theatre.** It re-implemented the
splitting logic inside the test, so reverting the fix in `main()` would have left it passing.
**A test that reimplements what it tests would have passed against both original bugs** — which is
precisely how the broken version shipped.

**Refactored so `main()` and `self_test()` call ONE function, `last_spoken_unit()`.** Counts
unchanged at 243/29 across the refactor, confirming no behaviour change.

**Then the test was proved able to fail**, rather than assumed to be: with the label-rejoin
disabled, `--self-test` exits **1** with two named failures, **and the tool reverts to reporting
"22 facts values, 0 GRANT"** — almost exactly the false-clean figure it originally gave.

⚠️ **That is the demonstration that matters. The original result was not "nothing to find"; it was
"cannot see", and the two are indistinguishable from the output alone.** The self-test now
carries both bugs as named cases, with the reason each was invisible to reading the source:
**both are about what the RENDERER emits, not about what this file does.**


## A SECOND bug in the same checker, the same shape, found the same way

`check_chunk_tails.py` ranks a chunk-terminal value by whether it **grants** something, because
a grant's conditions are what the next chunk carries. ⚠️ **The `GRANTS` pattern was written for
grants phrased as PERMISSIONS and was blind to grants phrased as RELIEFS** — a carve-out saying an
act is *not* the thing that costs you.

**The live proof case**, found by an agent reading the tails by hand:

> `Rule: Being pushed, shoved or fouled into the goalie is not contact you initiated, "provided
> the attacking player has made a reasonable effort to avoid such contact" (NHL and IIHF Rule 69.1)`

**Chunk-terminal, a relief clause — the dangerous shape the tool exists to rank — and it matched
none of the pattern's words.** Widened; **29 grants became 34.**

⚠️ **That is two bugs in one small tool, both of which made it UNDER-report, both found by agents
rather than by me, and neither reachable by reading the source** — the first was about what the
renderer emits, the second about how the corpus phrases a permission.

### The meta-lesson, which nearly bit again in the fix

I added a self-test for the relief shape and then tried to prove it could fail, by writing a
probe copy with the relief words removed. ⚠️ **The probe reported PASS, and I almost recorded
"the test cannot fail".** It was a **no-op**: the string I replaced spans a line break in the
source, so nothing changed and the test ran against the unmodified pattern.

**Caught only by checking WHAT was matching rather than trusting the exit code.** Redone
correctly, the test fails with exit 1 as it should.

⚠️ **A passing test proves nothing until you have watched it fail.** That is now true of both
bugs: disabling the label-rejoin drops the tool to *"22 values, 0 grants"* and fails two named
assertions; removing the relief words fails the third.


## Hockey Canada's GLOSSARY held a rule its RULE TEXT did not — twice in one day

**First**, the crease line: the Glossary says *"The lines of the crease are considered part of the
crease"* while Rule 1.5(c) uses the NHL's looser *"outlined by"*. **Second**, faceoff
encroachment: the Glossary's **ENCROACHMENT** entry reads *"…stands with a skate inside the
face-off circle, **on the face-off circle**, or in the area between the hash marks. **It is
acceptable for the player's stick to be inside the face-off circle but not in the area between
the hash marks.**"*

⚠️ **Two consequences the corpus did not have, both from the Glossary and neither in Rule 6.2(a):**
1. **Hockey Canada is a THIRD answer on the stick**, not a flat no — stick in the circle yes,
   between the hash marks no. The NHL and IIHF permit both; USA Hockey forbids both.
2. ⚠️ **Hockey Canada counts a skate *"on the face-off circle"* as encroachment, where NHL and
   IIHF 76.7 expressly permit skate contact with the line.** The corpus's Common Mistakes read
   *"Both skates outside the line; touching the line is fine"* — **wrong under that book, and it
   costs the reader's centre.**

⚠️ **A verifier reading only the numbered rules would report Hockey Canada silent on both.** That
is now a named search habit: **for Hockey Canada, read the Glossary as well as the rule.**

### The census that followed — clean, with its own limit stated

All **76** Glossary entries were parsed and checked against the corpus. ⚠️ **The running head
`HOCKEYCANADA.CA` is injected MID-ENTRY** and had to be stripped first — grep trap 9, in the
exact place the trap was designed for. **Result: one entry whose distinctive wording appears
nowhere — `GAME`, a definitional entry with no rule content.** The Glossary is otherwise covered.

⚠️ **My method's limit, stated because I criticised the same weakness elsewhere today:** it tests
whether distinctive words appear **anywhere** in `content/` — presence, not
traceability-to-section. **It is an upper bound on coverage, not a proof of it.**

## Three more corrections to my briefs, all caught before shipping

1. ⚠️ **"52.2 is the only rule on the `shall, at their discretion` frame" is only true when scoped
   to MAJORS.** The frame occurs **14 times** in the IIHF book — **10 minors, 3 double-minors, 1
   major.** Unscoped, my claim was wrong.
2. ⚠️ **The `at their discretion, shall assess` group is THREE rules, not two** — 43.3, 58.3 **and
   62.3 spearing**, which I omitted.
3. ⚠️ **My `may assess` list was missing 60.4**, so the count is **eleven, not ten**.

**And a corroboration the agent refused to use**, correctly: slew-footing sits in v1.1's **Table
6** (*"majors that result in an automatic game misconduct"*) — ⚠️ **but 51.3 is in Table 6 too and
is a `may`, so Table 6 membership certifies the game misconduct is automatic GIVEN the major, not
that the major is compelled.** It kept that out of the corpus rather than let it read as support.


---

# THE DIMENSIONS, ANSWERED FOR THE WORK ADDED AFTER THE FIRST TABLE

⚠️ **The dimension table earlier in this file and its *"what this round could not have found"*
were both written BEFORE the post-block work existed.** A commit gate blocked on exactly that:
**silence on a dimension is the failure mode, and every dimension below was silent for this
material.** This section answers them for the work added after gate block 3.

| # | Dimension | Status for the post-block work |
|---|---|---|
| D1 | **Rules claims against primary text** | ⚠️ **Covered by a read-only `rules-verifier` dispatched on the fourteen files** after the gate named the gap. Before that, coverage was **a gate SAMPLING ~18 claims, all correct** — and the gate said in terms that a sample is not coverage. |
| D2 | **Exceptions and carve-outs** | ⚠️ **One CONFIRMED DEFECT, found by the gate:** `shooting.md` carried 69.7's **limit with no relief**, in a block where no relief value follows. **Not a hazard — the omitted limb runs in the reader's favour — but it is the class this round names twice**, and the corpus states its own rule against it in another document: *"The paragraph after that is relief, so never carry the limit without it."* **Routed.** |
| D3 | **Cross-book divergence** | The post-block work is *mostly* divergence: 69.7 (four books), kicking (four, with **USA Hockey's two limbs kept apart — 627(a) major+GM, 627(b) match**), IIHF 52.2's unique frame, and the faceoff stick question's **three** answers. ⚠️ **Re-verified by the gate from primary text; a dedicated verifier now covers it.** |
| D4 | **Provenance** | ⚠️ **The gate re-derived NHL 69.7, IIHF 69.7, 78.5(ix)/(IX), NHL/IIHF 49.3, USAH 627(a)(b)(c), HC 7.1(c)(iii), NHL/IIHF 52.2, the HC Glossary ENCROACHMENT entry, USAH Casebook 613 Sit. 8, NHL 63.2(iii) vs IIHF 63.2(III), IIHF Situation 63.24, NHL 56.2/56.4/56.5, HC 8.3, and `huh.txt`'s cervical wording — and reports EVERY ONE matches the corpus as written.** |
| D5 | **Safety** | ⚠️ **Covered by a read-only `safety-reviewer` dispatched after the gate found D11's row predated the material.** The new text is almost entirely ejection-tier: kicking, slew-footing, 69.7's push-in, a checking-classification bar, and a stick/skate divergence that costs a team its centre. |
| D6 | **The facts layer** | `check_facts.py` conforms at 813 blocks / 5130 facts. ⚠️ **Structural conformance is not correctness** — the layer reviewers are the coverage, not the checker. |
| D7 | **Cardinal rule** | No coaching choice added as a law. Two agents reported their `Convention:` values carry the body's hedge; one added a `Convention:` **because** a block stated one system's answer as the answer. |
| D8 | **Numbers carrying their owner's qualification** | ⚠️ **No new numeric claim was added in the post-block work.** The corrections were modal (`may`/`shall`), structural (limbs), and scope (books). |
| D9 | **Negative existence claims** | Several attacked and **upheld**: the IIHF writes no match penalty (zero hits across four IIHF files); USA Hockey Rule 613 writes no icing exception (all twelve Casebook situations read); Rule 52 has no lesser tier; both IIHF Situation Handbooks publish nothing on 69.7. |
| D10 | **Contradiction between documents** | ⚠️ **One found and fixed:** `forechecking_systems.md` and `defending_the_rush.md` had held **opposite** answers on the checking-from-behind ejection floor. **And one AVOIDED:** a pointer crediting `goaltender.md` with a USA Hockey limb **it does not hold** was caught before it propagated. |
| D11 | **Contact, technique, equipment, penalties** | See D5. ⚠️ **This row was previously answered for material that no longer resembles what is staged.** |
| D12 | **The rendered site** | ⚠️ **NOT re-run for the post-block work.** `npm run build` passes (50 pages, 9,668 links, all resolve) and `site-reviewer` ran earlier — **but new headings were added by section splits in `faceoffs.md`, `shooting.md` and `offensive_zone_play.md`, and nobody has looked at them in a browser.** **Declared open, not claimed.** |
| D13 | **Diagram captions** | ⚠️ **Scoped OUT with an argument, not in silence:** the post-block work touched no `site/src/diagrams/*.mjs`. **The caption layer was repaired earlier this round and IS covered above.** |
| D14 | **The audio layer** | ⚠️ **Every repairing agent rendered its file and read changed values back as SSML.** **Nobody has LISTENED to any of it.** Five defects this round lived only between the markdown and the audio; that gap is unchanged. |
| D15 | **Mechanical gates** | All pass on the quiet staged tree, re-run independently by the gate: links, facts, absolutes, geometry, secrets (237 files), counts, pointers, rule-scope, chunk-tails, `md_to_speech --self-test` **178/0**, `check_chunk_tails --self-test` **6/0**, arrivals 0 hard. |

## What THIS work could not have found

- ⚠️ **The reviewers are scoped to the DIFF.** A defect already in these fourteen files and untouched by this work is invisible to all of it — which is how the two gate findings in block 3 surfaced at all, by colliding with something the diff changed.
- ⚠️ **Sampling is not coverage, and both gates said so about themselves.** Block 3's gate sampled ~20 claims and found two defects, calling two a lower bound. Block 4's sampled ~two dozen out of a **7,200-line diff** and said the same. **Neither number is a total.**
- ⚠️ **Nobody has listened to the audio.** Every repair was verified as **rendered SSML**, not as sound. **This round found five defects that exist only in that gap**, including one where a fix moved a chunk boundary and separated a limit from its permission.
- **The new headings have not been seen in a browser.** Three section splits landed; `check_links` proves the anchors resolve, not that the page reads.
- ⚠️ **`scripts/check_pointers.py` still has NO self-test**, where `check_chunk_tails.py` now has one that has been watched failing. **This round's own lesson is that a clean result from a new tool is the least trustworthy kind — and that tool under-reported twice.**


## Both new worklists now have self-tests, and both were watched failing

The gate's non-blocking note was that **`check_pointers.py` shipped this round with no
self-test**, where `check_chunk_tails.py` now has one. ⚠️ **That matters because
`check_chunk_tails.py` shipped reporting the corpus CLEAN and was wrong twice over** — and a
worklist cannot ship a wrong claim, but it can **hide** one, which is exactly what happened.

`check_pointers.py` now has five assertions exercising **the real `POINTERS` patterns and the
real suppression rule**, not a reimplementation of them — the mistake that made the first
`check_chunk_tails.py` test theatre.

⚠️ **Both halves were proved able to fail, not assumed to be:**
- Breaking the trailer pattern → *"expected 'the Sources trailer', got None"*, exit 1.
- Making a trailer pointer classify as a **table** reference → the suppression-rule assertion
  fires: *"…would be SUPPRESSED in any document whose tables read as prose"*, exit 1.

⚠️ **The second is the important one.** The suppression rule is the half most likely to hide a
real hit: it silences a table reference in any document whose tables all render as prose. If a
Sources-trailer pointer were ever classified as a table reference, it would vanish silently in
exactly the documents where it matters. **Nothing else in the tool would report it.**

**The standing rule this round earned, now demonstrated three times:** *a passing test proves
nothing until you have watched it fail.*


## The per-hazard facts-layer census across all 37 documents — one real finding in eight candidates

A safety reviewer ended by naming the sweep nobody had run: *"a facts-layer census of all 37
documents per hazard… a propagation gap of the same shape almost certainly exists for at least
one of those."* **Run for boarding, kicking, slew-footing, 69.7 and the checking-classification
bar.**

**Two hazards came back completely clean:** every facts layer that mentions **slew-footing** or
**body-checking** already carries its limit. That is a real result and it is the first time
either has been established corpus-wide.

⚠️ **Eight candidates surfaced and SEVEN were false positives — this is the census that proves
why these sweeps must be read, never actioned:**
- `skating.md`'s "boarding" hit is a **slide board**, a training aid.
- `defender.md` and `winger.md` hit because they **quote IIHF 101.1's prohibition** — they carry
  the limit; my *limit pattern* failed to match `101.1`.
- `zone_entries.md`'s six hits are all **prohibitions** — *"Never: Take contact with your back to
  the boards"* — the correct text, not an instruction to board.
- `game_management.md`'s 69.7 hit is *"screens, rebounds and scrambles"* in a Risk value about
  collapsing to the net front.
- `scanning_and_anticipation.md`'s kicking hit is *"the puck **kicks** off the way the pad was
  facing"*.

**The one real finding:** ⚠️ **`on_ice_communication.md` teaches *"kick it to your stick and
reset"* as an `Action:` value — voiced alone — and a whole-file search for `49.3`, `627` and
`7.1(c)` returns ZERO.** Same defect as the three technique documents repaired earlier today.
**Routed, with the judgement left open as to whether a communication document should carry the
full four-book scale or a short limit plus a pointer.**

## The paragraph-count verification tested the coordinator's caveat and beat it

I flagged that the NHL's three-paragraph structure was **inferred from `pdftotext -layout`
indentation rather than PDF markup**, and told the agent to test it. **It found stronger
evidence than the brief had:**

1. ⚠️ **The relief begins MID-PHYSICAL-LINE** — `nhl_rules_layout.txt:6150` reads
   `"         assessed. If, however, in the opinion of the Referee, the attacking"`. **`-layout`
   preserves horizontal position, so a paragraph break cannot start mid-line. The relief being
   inside paragraph two is DIRECTLY OBSERVED, not inferred.**
2. It validated the convention across **273 paragraph-opening lines**, and noticed the indent
   baseline **shifts between pages** (6/11 on one, 8/12 on the next) — ⚠️ **so it is a RELATIVE
   first-line indent that survives a margin change: a typographic property, not an extraction
   artefact.**

**It also found a sixth site the brief did not have: NHL 69.3 has FIVE paragraphs, not four.**

⚠️ **And it chose the right unit.** Rather than correcting the count, it adopted `special_teams.md`'s
**"limbs"** — true of both books — and stated the paragraph split once as a fact *about* the
books rather than as load-bearing structure. **The corpus is converging on "limbs" independently:
`offensive_zone_play.md` was corrected the same way by a different agent while this one worked.**

**It stated the residue precisely:** *"'The NHL prints three' rests on the indent convention for
two openings; only 'the relief runs on inside the second' is directly observed. If the convention
were wrong at exactly those two lines, the count would be wrong and the relief claim would still
stand."*


## The documented checker race, confirmed exactly as written

⚠️ **`check_facts.py` reported `defending_the_rush.md:191 — Rule: fact is 306 chars, over 300`.**
**Two separate agents saw it, both checked it persisted across repeated runs, and both declined
to repair it** because the file showed `MM` with a live agent inside. One noted the corpus fact
count moving between its own runs (5130 → 5131 → 5134) as the reason to distrust the reading.

**Re-run after the agents finished: the corpus conforms. Nothing was repaired.**

⚠️ **This is `CLAUDE.md`'s rule vindicated in full: *"a checker FAILURE on a file showing `MM` is
not yet a finding — re-run before acting, and never 'repair' another agent's half-written
line."*** Both agents followed it, and had either "fixed" the line it would have clobbered work
in flight.

## A brief premise that would have MANUFACTURED a divergence

I briefed that USA Hockey 613(b)'s 15-foot standoff was *"a limb with no NHL or IIHF
counterpart"*. ⚠️ **False in all three other books:** NHL 76.6 writes *"come within fifteen feet
(15') of the players facing-off"*; IIHF 76.6 writes *"within 4.5m"* in both editions; Hockey
Canada 6.2(a) writes *"at least 4.57 m (15 ft.)"*.

⚠️ **And the document ALREADY STATED the NHL's fifteen feet at two of its own lines.** The agent
said plainly: *"Had I written it, I would have contradicted this document's own line 266/280 and
manufactured a four-book divergence that does not exist."* **It wrote the opposite into the page
— that the standoff *"is not a USA Hockey peculiarity, and it travels with you"*.**

**The underlying point survived:** the word *"only"* in *"613(b) says only that…"* was false and
hid the first of its two sentences. **Widened, not cut.**

### A tenth way a grep lies — a SLED HOCKEY rule that shadows the one you want

⚠️ **`usah.txt:7381-7392` is the sled hockey adaptation of face-off procedures.** It repeats
613(b) **almost word for word**, so a flattened grep for *"No other player shall be allowed to
enter"* returns **two hits** — but it says *"approximately arm's length apart"* and adds
***"Players are not allowed to move during the face-off procedure once they are set"***, which is
**the opposite of what USA Hockey's own Casebook Situation 7 answers.** ⚠️ **Quoting the wrong
hit would have produced a stand-still rule the book contradicts.** The body pass for 613(b) is
`:3939-3943`.

## A self-inflicted chunk-terminal defect, created and closed inside one repair

An agent's own prose additions made a **discretionary** penalty value the last utterance of an
audio file, with its **mandatory** exception opening the next. It proved this by rendering the
indexed pre-edit file into an isolated tree and comparing — **pre**: chunk 032 ended on safe
prose; **post**: it ended on the permission.

⚠️ **It did not shorten the repair. It folded the exception into the same value** — the style
guide's remedy — at 287 of 300 characters. **This is now the third time in one round that a
repair created this class and the same technique closed it.**


## The false negative was MANUFACTURED by an extraction trap, and the trap is corpus-wide

`puck_handling.md` asserted *"USA Hockey writes no fend-off permission"* and *"the phrase 'fend
off' appears nowhere in USA Hockey's rulebook"*. ⚠️ **USA Hockey writes it, in its Casebook,
using that exact phrase** — Standard of Play Situation 6, with Situation 7 extending it.

⚠️ **The disclosure was DOUBLY scoped wrong, and the second half is the general lesson.** It
said the claim was *"rechecked against Rule 622 and the whole of that book"* — the wrong
**volume** (playing rules, not Casebook), **and a phrase search that could not have succeeded
even in the right volume**, because *"fend off"* **falls across a line break** at
`usah_casebook.txt:18431/18432`.

⚠️ **The same break occurs in the other two books that carry the phrase** — `nhl_rules.txt:6310`
and `iihf_rules_v1.1.txt:4717`. **So a phrase search for `"fend off"` returns nothing in three
of the four books, and only a whitespace-flattened copy finds any of them.** The negative
existence claim was not merely unverified; **it was produced by a search that was guaranteed to
fail.**

⚠️ **RETRACTED — AND THE RETRACTION IS THE POINT.** This section originally recorded: *"Hockey
Canada is now the one book of four writing no free-hand permission — **zero hits for `fend` and
`free hand`** across both extractions."*

⚠️ **That was FALSE, and it was manufactured by exactly the trap this section is named after.**
It is a **phrase search**, and it cannot match Hockey Canada's wording. **Hockey Canada Rule 8.1
writes the permission twice**, verbatim: *"A player is permitted to **use their arm in a strength
move, by blocking their opponent**, provided they have body position and are not using their
hands in a holding manner"*, and *"**While players are permitted to block an opponent's stick
with their hands, arms, or body**, they are not permitted to hold an opponent's stick."*

⚠️ **AND MY OWN CORRECTION OF IT WAS ALSO WRONG — corrected here, because it is the most
instructive part.** I wrote *"Measured on re-check: `fend` IS present in `hc.txt`, so the claim
was false on both terms."* ⚠️ **It is not.** Whole-word `fend` in `hc.txt` is **ZERO**. My 249
"matches" were **substring hits inside other words** — *offending* ×139, *defending* ×93,
*defend* ×10, *offender* ×4. `free hand` and `free arm` are genuinely **0** in both extractions.

**So the chain runs:**
1. The original repair's **OBSERVATION was correct** — those terms really do return nothing.
2. Its **INFERENCE was wrong** — Hockey Canada writes the permission in **different words**:
   *"use their arm in a strength move"*, *"block an opponent's stick with their hands, arms, or
   body"*.
3. ⚠️ **My correction of it was wrong in the OPPOSITE direction**, from a substring match I did
   not anchor.

⚠️ **The repairing agent caught this and said what it would have cost:** *"Had I rebutted the
earlier pass on the brief's ground, I would have propagated a false measurement — and the corpus
sentence I wrote would have claimed a word appears that does not."*

**Three passes over one negative, and the true finding is narrower than any of them stated: the
terms are absent AND the permission is present.** ⚠️ **A zero-hit count is evidence about
VOCABULARY, never about CONTENT — and an unanchored substring count is not even that.**

**So all four books write a free-hand permission, each on its own conditions** — and *"two books
of four"* became *"three"* when it should have become **four**.

⚠️ **I wrote this error into the paragraph documenting the error.** A commit gate caught it by
declining to trust the record's own search and reading Hockey Canada 8.1 itself — and said so:
*"That single decision is what produced finding 2."* **The lesson is not that phrase searches are
weak; it is that writing one down as evidence launders it into a fact, and the next reader
inherits it.**

## A renderer defect in THREE code paths, found by a self-test rather than by reading

`622(b)/(c)` voiced as *"six hundred and twenty-two, clause b"* — ⚠️ **and then nothing, because
brackets are silent, so the second clause letter simply vanished.**

**Fixed, with the semantics right:** ⚠️ **a SLASH is *"or"*, not *"and another"*.** `622(b)/(c)`
is one rule offering two clauses; `608(a), (b) and (c)` is a list of three. **Voicing the slash
as a comma would turn an alternative into an enumeration.**

⚠️ **And the fix was incomplete until a self-test caught it.** `_bare_clause` and
`_usa_clause_citation` were patched; **`_rule_citation` — the form WITH the word "Rule" — was
missed**, so `Rule 8.1(c)/(d)` still dropped its second clause while the bare `8.1(c)/(d)` did
not. **I did not find that by reading the code. The test I had just written failed on it.** Two
assertions added; 180 now pass, and `Rules 2026-27` is still guarded against the edition-year
defect that once hit 104 sites.

## A judgement handed back rather than taken silently

The `on_ice_communication.md` repair **declined to add the kicking penalty to Common Mistakes and
Key Takeaways**, and said why: *"the caveat is owed wherever the act is TAUGHT"*, kicking is
taught in exactly two units there, and *"adding a kicking penalty to a list of COMMUNICATION
failures would misfile it."* **It flagged the judgement for overruling rather than making it
quietly.** ⚠️ **It also found, by rendering, that its first fix had not covered a BODY BULLET —
which is voiced alone too. The extraction layer is not only the ` ```facts ` block.**


## The USA Hockey 608 census, run corpus-wide — closed, with both "gaps" false positives

An agent ended by naming the census it had not run: *"any other document pricing checking from
behind at USA Hockey's minor is still wrong and I did not census for it."* **Run across all nine
citing documents.**

**Seven carry the Casebook confinement. The two that do not are both correct:**
- ⚠️ **`defender.md` mentions Rule 608 by TITLE ONLY**, in a list of rules a shove is reachable
  under — and its Sources trailer says so in terms: *"Rules 603, 608 and 640 were read for their
  titles only… which is the whole of what is claimed of them."* **An honest, correctly scoped
  disclosure. A sweep would have added a tier claim the document deliberately does not make.**
- **`offensive_zone_play.md` states the tier STRUCTURE** — *"608(a) do write a minor, but never a
  bare one"* — and cites **608(b)** for the major on a hit into the goal frame. **It points UP,
  not down. No specific hit is priced at the minor.**

**So the propagation is complete and the census is closed.**

## Two more brief errors of mine, both caught before they reached the page

1. ⚠️ **I wrote that all four books *"name the obvious-icing or offside race in terms"*. FALSE of
   USA Hockey** — its boarding rule (603) carries **no icing clause at all**. It reaches only the
   **icing** half, from its own **icing** rule at **624(d)**, and **never calls it boarding**.
   **The agent refused to paste my wording and used the phrasing `body_contact_and_battles.md`
   had already established, so the two documents now agree rather than diverge.**
2. ⚠️ **I said a block *"sits at exactly 11"*. It sat at 8.** The agent added the value it needed
   rather than rewording under a constraint that did not exist.

## A second naked ride permission, 180 lines from the one briefed

`defending_the_rush.md` had **two** board-riding permissions. The brief named one. ⚠️ **The other
sat in a section whose body and facts block carried NO limit of any kind — not the league bar,
not boarding.** The distinction that makes it survivable is Hockey Canada's **Interpretation 1 to
7.3(a)**: *"A player may **steer or direct** an opposing player into the boards, **without
actually touching or body-checking them**. This is acceptable."* **Steering is legal everywhere;
riding is not** — and that is now the sentence in both sections.

⚠️ **The agent also repaired two checker failures its OWN first draft raised** — a 306-character
`Rule:` value trimmed to 284 *"without dropping a book or altering a quotation"*, and a
`check_absolutes` hit on *"no book caps it at a minor"*, **a denial naming no book**, rewritten to
name all four in the same sentence. **It did not work around either.**

## A residual gap recorded rather than papered over

`center.md`'s §Backchecking block is at **both** caps — 11 values and 8 non-`Rule:`. The
correction travels in the same value, but ⚠️ **Situation 1's three instances — the CRITERION —
could not be added to that block.** They live in the body, a new Common Mistakes bullet and Key
Takeaway 5. **The agent stated the consequence plainly: *"If a listener hears only block 044,
they hear 'USA Hockey's Casebook takes even that minor off this hit' and not what replaces
it."*** Both merge candidates were tested and both fail the caps. **This is a section-split
decision, and it is on the plan rather than hidden.**


## The IIHF paragraph count — refined, and the distinction matters

An agent refused to give the IIHF an ordinal at 69.4 and gave **stronger grounds than any brief
had**: ⚠️ **the extraction's blank lines demonstrably do NOT track paragraph breaks.** IIHF
69.4's own first sentence is split across `iihf_rules_v1.1.txt:5574` and `:5580` by injected page
furniture — `TABLE OF CONTENTS`, a form feed and a running header, `OTHER INFRACTIONS` — **with
blank lines on both sides of it.** So a blank line there is not evidence of a break, and the
absence of one at `:5587` is not evidence against one.

⚠️ **Coordinator check, because this threatened a claim now written into several documents: does
it also defeat the "IIHF prints FOUR paragraphs" claim at 69.7?**

**No — and the difference is the whole point.** 69.7's region (`:5608`–`:5621`) contains **no
page furniture at all**: its blanks at `:5612`, `:5615` and `:5618` each follow a completed
sentence, with nothing injected between them. **So the 69.7 four-paragraph claim is supportable
and the 69.4 ordinal was correctly refused.**

**The generalisation "blank lines in this file are not paragraph markers" is right as a caution
and wrong as a rule.** ⚠️ **The test is not whether the file has blank lines; it is whether page
furniture contaminates the specific region.** That is now the check to run before trusting any
IIHF paragraph ordinal.

**And the agent chose the better word.** It wrote **"clause"** rather than "paragraph" — true
under every reading of both books, matching the value's own later words *"Hockey Canada writes no
such clause"*. ⚠️ **Where the corpus needs a count it now says "limbs"; where it locates a
provision it says "clause". Neither makes a typographic claim.**

### ⚠️ A TRAP IN THE SHARED SCRATCHPAD that nearly produced a false finding

**A stale SSML render in the session scratchpad showed `rules_primer` chunk 115 still saying
*"its fourth paragraph"* — from a render taken BEFORE that file was repaired.** The agent nearly
reported it as a live defect and caught it only by reading the markdown directly.

⚠️ **Any agent grepping rendered output in the shared scratchpad will hit the same trap.**
Renders are timestamped artefacts of a tree that has since moved. **Read `content/`, not a
render, to establish what the corpus currently says.**

### An open consistency question the file-scoped agents cannot settle

**"clause" versus "paragraph" now differs between documents**, because each agent chose for its
own file. **That is a corpus-wide consistency question and needs a census, not a file-scoped
repair.**


---

# THE DIMENSIONS, ANSWERED A THIRD TIME — for the work added after the second table

⚠️ **A commit gate blocked on this, correctly and for the second time.** The second table
explicitly covers *"the work added after the first table"* — and it **predates the staged
state**, citing `md_to_speech --self-test` at **178** (now 180) and **5130** facts (now 5138),
and stating *"`check_pointers.py` still has NO self-test"* (it now has five assertions). **A
dimension table goes stale the moment work continues past it, and silence on a dimension is the
failure mode.**

| # | Dimension | Status for the work added after the second table |
|---|---|---|
| D1 | **Rules claims against primary text** | ⚠️ **The gate re-derived ~two dozen provisions itself** and confirmed the paragraph-ordinal corrections, the kicking scale, 69.7, 69.4 and the IIHF adjudication. ⚠️ **But it found TWO defects by doing so**, so this is *defects found*, not *coverage established*. A `rules-verifier` is repairing them. |
| D2 | **Exceptions and carve-outs** | ⚠️ **One CONFIRMED and CORRECTED: the fend-off permission exists in ALL FOUR books, not three.** Hockey Canada 8.1 writes it twice. The corpus said three, and the coordinator's own record said Hockey Canada was the exception. **Both wrong; both retracted.** |
| D3 | **Cross-book divergence** | ⚠️ **The central failure of this stretch.** A four-book picture was stated as three-of-four **twice** — once in `content/`, once in the review record — and both rested on a **phrase search that could not match the fourth book's wording**. |
| D4 | **Provenance** | The paragraph-ordinal work rests on `pdftotext -layout` first-line indents, **hardened across 273 openings and two PDF editions**, with the mid-line signature directly observed. ⚠️ **The IIHF half is refused where page furniture contaminates the region and accepted where it does not** — verified independently by the gate. |
| D5 | **Safety** | ⚠️ **A read-only `safety-reviewer` is running over the ten files.** Before it, this stretch had **none**. |
| D6 | **The facts layer** | `check_facts` conforms at 813 blocks / 5138 facts. ⚠️ **Structural conformance is not correctness** — Key Takeaway 7 of `puck_handling.md` conformed perfectly while stating a false count. |
| D7 | **Cardinal rule** | No coaching choice added as a law. The steer/ride distinction is sourced to Hockey Canada's own Interpretation, not asserted. |
| D8 | **Numbers with their owner's qualification** | ⚠️ **One open, NOT blocking but named:** a diagram caption carries *"close to half of all NHL goals came from the inner slot"* with the sample scope but **without the owner's re-derivability caveat**. |
| D9 | **Negative existence claims** | ⚠️ **THE FAILING DIMENSION.** Three false negatives this round, all from **phrase searches**: *"fend off"* crosses a line break in three books; *"zero hits for `fend`"* was false in the fourth. **Every negative in this stretch needs re-attacking by concept.** |
| D10 | **Contradiction between documents** | ⚠️ **Two found by the gate:** `winger.md` carrying a negative two siblings had already retracted, and a Key Takeaway contradicting its own body **twice in the same file**. |
| D11 | **Contact, technique, penalties** | See D5. |
| D12 | **The rendered site** | ⚠️ **STILL OPEN, and now larger.** The section splits in `faceoffs.md`, `shooting.md` and `offensive_zone_play.md` have never been opened in a browser, and the plugin change now produces **588 `warn-inline` spans** site-wide that nobody has looked at. **Declared, not claimed.** |
| D13 | **Diagram captions** | ⚠️ **One finding, not blocking:** the `offensive_zone_play.mjs` caption sheds a qualification its owner carries. **The caption layer is voiced and no `content/` grep reaches it.** |
| D14 | **The audio layer** | ⚠️ **STILL OPEN. Every repair was verified as rendered SSML; nobody has LISTENED.** Five defects this round lived only in that gap, and a sixth — a stale render in the shared scratchpad — nearly produced a false finding. |
| D15 | **Mechanical gates** | All pass, re-run independently by the gate. **Self-tests: `md_to_speech` 180/0, `check_chunk_tails` 6/0, `check_pointers` 5/0 — 191 assertions, every one watched failing before being trusted.** |

## What THIS stretch could not have found

- ⚠️ **The gate found both content defects only because the diff collided with them.** It says so: *"A defect already present in these files and untouched by this change is invisible to me."*
- ⚠️ **~35 paragraph ordinals remain unchecked**, in a class that produced **four** wrong ordinals from the nine examined.
- ⚠️ **Every other negative-existence claim in the corpus is now suspect**, because the failure mode is proven and cheap to repeat: a phrase search that cannot match the wording, written into the record, becomes a fact the next reader inherits.
- **Nobody has listened to any audio, and nobody has opened the new headings in a browser.**


## The safety pass block 5 required — one critical, and seven files clean

⚠️ **Seven of ten files came back with NO findings at any tier**, stated per file as a real
result: `on_ice_communication.md`, `center.md`, `zone_entries.md`, `rules_primer.md`,
`offensive_zone_play.md`, `playing_without_the_puck.md`, `faceoffs.md`.

### The critical: a permission that lost its league limit while its twin kept it

`defending_the_rush.md`'s **first** ride permission carries only the **boarding** limit. Its
**second**, 176 lines later, carries *"Never: Ride an opponent into the boards in any non-check
adult or youth league."* ⚠️ **The first section is the copy that lost it** — so a reader in
non-check adult, USA Hockey Competitive Contact or any women's or girls' hockey is told to ride a
carrier wide, **and told the one condition is that the carrier can see them coming. It cannot: in
their book the ride IS the offence.**

⚠️ **Established by RENDERING, not reading.** The permission is voiced in **chunk 9 of 71**; the
non-check scope is not voiced until **chunk 22** — thirteen audio files later. **And the
mitigation was stated rather than hidden: the overview's general statement is voiced in chunk 1**,
eight files earlier, which is why this is a layer gap and not a silent corpus.

⚠️ **A precision that stops the repair over-reaching:** USA Hockey's **Note to 604(c) expressly
names ANGLING as legal competitive contact** — *"a player has established an angle… and closes
the gap."* **So a pure angle is legal there.** What is not is riding once the contact moves the
carrier off the puck; under **IIHF 101.1** the bar is lower still, *"any move… to step or glide
into an opposing Player."* **The fix must locate the line, not ban the angle.**

### A minor it graded honestly rather than inflating

A chunk-terminal `Options:` value chases a beaten carrier; its counterweight opens the next audio
file. ⚠️ **Graded Minor, not Critical, and the reasoning is the useful part: the act granted is
the LEGAL version, and the limit prohibits a DIFFERENT act.** But it is a chase from behind at
the defender's own net — where NHL 57.3 and IIHF 24.8 put a **penalty shot**.

### A coaching caution it refused to dress up as a rule

`shooting.md` tells a point shooter to *"shoot through your own net-front teammate's legs —
deliberately"*. ⚠️ **The reviewer said plainly it had NO rule, standard or study for this and
would not invent one.** No book penalises it. **But it is the only instruction in scope aiming a
shot at a teammate's body, and the corpus attaches a cue to the comparable act elsewhere** —
*"Shoot to be missed… **say it first**."* **Routed as: attach the existing cue, or report and
change nothing. Do not add an unsourced hazard claim.**

### Negatives re-attacked BY CONCEPT, and upheld

*"Neither USA Hockey nor Hockey Canada writes a provision about screening a goaltender"* —
searched both books for obstruct/vision/sight/view/screen near goalkeeper. **USA Hockey's only
hit is a *"protective screen"* set on a checker; Hockey Canada's two hits both reach a player
STANDING IN THE CREASE — which the corpus already says in both cases.** And *"the IIHF writes no
match penalty"* was confirmed as a **whole-book count of zero**, not a phrase artefact.


## The ride repair — and the limb that states the line better than any brief did

The first ride permission now carries its own league scope, **with the angle left unscoped**, so
a reader in a Competitive Contact league is not told their legal angle is barred.

⚠️ **The agent found a limb no brief had, and it is the cleanest statement of the boundary in any
of the four books.** Hockey Canada's definition opening **Rule 7.3**: body-checking *"results
when a player makes deliberate contact with an opposing player with opposite-directional force,
**when a player leaves their skating lane to make contact**, or when a player **extends an arm,
shoulder, or hip after angling an opponent**."* **That is the angle/ride line written from the
prohibition side** — where USA Hockey's Note to 604(c) writes it from the permission side
(*"a player has established an angle… and closes the gap"*). **Both are now in the body.**

⚠️ **And it refused a formulation the brief would have allowed.** It declined to state IIHF 101.1
as *"bars body checking"*, because **101.1 PERMITS bodychecking *"when there is a clear intention
of playing the puck"*** and prohibits the step-in and the boards use specifically. **Stating it
as a checking ban would have been wrong** — so the value says what 101.1 says: *"the angle is
still yours, the contact is not."*

**It corrected the brief's measurement too:** the audio gap is **ten** files, not thirteen.

### The chunk boundary moved, and it fell the safe way round — judged by rendering

⚠️ **The lever cut both ways exactly as the tool's docstring warns:** the flagged tail moved from
chunk 013 to 014, and a new `--prose` hit appeared at chunk 010. **The agent judged it by
rendering rather than from the list, and declined to repair it** — because *"the sentence
stranded is the UNRESTRICTED permission, it carries its own scope in its own words, and the
RESTRICTED act now opens the next file with its limit in its first sentence."*

**Every other prose hit in the file was confirmed pre-existing and merely shifted by one index.**


## The cardinal-rule census — clean, and my own pattern was the only thing that failed

An agent found a **Major nobody briefed**: `special_teams.md`'s shot-blocking section carried
**no coaching-choice hedge at all**, while four siblings carry it and three voice it. ⚠️ **The
document is scrupulous about the cardinal rule in nine other places — formations, the bumper, the
wedge+1's route, shot-volume philosophy, danger-by-location — and omitted it in the ONE section
that puts a body in front of a puck.** Repaired in body, facts and Key Takeaway.

It then named the highest-value follow-up: *"If the blocking hedge was missing from the PK owner,
the presumption should be that others are missing from theirs, and nobody has run that census."*

**Run, across gap control, forecheck assignment, bumper coverage, D-holding-the-line and
net-front assignment. Every document teaching them hedges them.**

⚠️ **The three apparent gaps were MY OWN false positives, and from the failure this round has
recorded four times.** My pattern searched for *"coaching choice"*, *"ask your coach"*, *"find
out which"*. `game_management.md` writes *"**is a system choice, so find out yours**"* — the same
hedge in different words. **A phrase-shaped census, run by the person who spent the day recording
that phrase-shaped censuses manufacture false negatives.**

**The corpus was right; the search was wrong. Again.**

## Two more brief errors, both refuted before they cost anything

1. ⚠️ **I claimed a corpus-wide grep found no counterweight to the through-the-legs shot. False.**
   `offensive_zone_play.md` carries it on the **identical fact pattern** — *"Shoot for a tip —
   low, hard, along the ice, through the screen, at the tipper's stick, **and say who you are
   shooting at**"* — with a **height cue as well as a communication cue**, plus the reciprocal
   half telling the tipper to shout for it. ⚠️ **And I nominated the WEAKER model:** the agent
   used the identical-pattern one instead and said so rather than reporting a match it had not
   made.
2. **I said `special_teams.md` had "three blocks at the cap". Measured: FIVE at 11**, plus two at
   the 8 non-`Rule:` cap. The shot-blocking block was at **5** — there was room all along.

### Two refusals worth keeping

⚠️ **It would not write a hazard claim it could not source**, and **self-caught a draft that
insinuated one** — an earlier wording ended *"…rather than finding out when it arrives"*, cut
before finishing because *"it insinuates a hazard claim without making one."*

⚠️ **And it avoided a word for a reason no brief would have caught:** `on_ice_communication.md`
establishes that a goaltender's call of *"shot"* means *"I have the shooter"*, and says in terms
that a team using it as a warning should pick a different word. **So the new cue says *"say who
you are shooting at"* — naming the teammate, never the act.**

### A near-miss it reported so nobody else re-finds it

`defender.md` says *"hands and head **behind your body**"* where two siblings say *"head out of
the lane, hands tucked"*. **These look divergent and are not:** `defender.md`'s is scoped to
*"if you go down"* — a dropped block — and the others are general. ⚠️ **A consistency sweep would
have "corrected" one of them.**


## The paragraph-ordinal class, continued — 7 of 17 wrong, and all of them one claim

**17 locators exist in the three files audited; all 17 were checked. Seven were wrong and they
were the SAME claim** — *"69.4's fourth paragraph"* — in `rink_map_and_glossary.md` ×3,
`defensive_zone_coverage.md` ×2 and `team_play_and_culture.md` ×2.

⚠️ **The NHL clause is the THIRD paragraph, and there is no counting convention that makes it
fourth** — even counting the *"Refer also to Reference Tables"* stub.

⚠️ **For the IIHF the ordinal fails DIFFERENTLY AND WORSE, and this is what vindicates the rename
remedy.** The 2026/27 book's Rule 69.4 region is **furniture-free**, so its blank lines are
trustworthy there — and they show the returning-goalkeeper sentence **running directly on from
the "However, incidental contact" sentence with no break.** **So in the IIHF the clause does not
open ANY paragraph; it sits mid-block. A CORRECTED ORDINAL WOULD HAVE BEEN WRONG TOO.**

**All seven repaired by RENAMING, not renumbering** — *"69.4's returning-goalkeeper clause"*.
**Nothing deleted: the quoted wording and the *"may be penalized"* hedge survive at every site.**

⚠️ **And the corpus already contained the right answer.** `rules_primer.md` says *"69.4's third
paragraph"* and correctly identifies the second as carrying both the *"not fair game"*
restriction and the *"in the act of playing the puck"* permission — **both verified.** **One file
right, six wrong.**

### A side effect it caused, and read rather than swept

Shortening a file **moved a chunk boundary and newly exposed three prose tails.** ⚠️ **It read all
three rather than repairing on the tool's word.** Two were not defects — a grant carrying its own
condition inline, and a glossary list. **The third was:** *"The trapezoid is the marked area
behind each net inside which the goaltender is allowed to play the puck"* — **a naked permission
whose limit sat six paragraphs later.** Folded into the same sentence, citing **27.8 for the
penalty only and never for dimensions**, per the known stale-dimension trap.

### The limit of the method, stated by the agent that used it

⚠️ *"Indent analysis recovers TYPOGRAPHIC paragraphing, not the publisher's intent. Where the PDF
uses vertical space rather than a first-line indent — **which is how the whole IIHF book is set**
— the method has no signal at all."* **It could not detect a break the extractor dropped in both
IIHF editions.** ⚠️ **Which is the strongest argument for the rename: a named clause makes no
typographic claim either way.**

---

## RETRACTION — the chunk-boundary defect class was mine, not the corpus's

**I invented a defect class on an unverified premise, built a tool around it, and
dispatched agents against it. The premise was false.**

What I asserted, in briefs and in `scripts/check_chunk_tails.py`'s own docstring: that a
` ```facts ` value ending an audio chunk was hazardous *because its qualification opened the
**next file**, which a listener might never reach*.

What is actually true, verified this session:

- `site/src/components/AudioPlayer.astro:11` — `const src = ${AUDIO_BASE}/${id}.mp3`, and
  line 24 is a single `<audio controls preload="none" src={src}>`. **One file per document.**
  No playlist, no per-chunk player, no chunk iteration anywhere in the component.
- `scripts/md_to_speech.py:4-6` — chunking exists "to fit **Polly's per-request limits**, with
  a manifest per document so the audio pipeline can synthesise and **concatenate**."

**A chunk boundary is a seam inside one continuous file.** The listener hears the next value
after the ordinary 300 ms break, exactly as they hear every other adjacent value.

**Two agents re-verified this independently before acting on the correction** rather than
swapping one unverified premise for another — both quoted the same two files back. One of them
found a third fact that kills the argument separately: **`###` headings do not create chunks
at all.** `md_to_speech.py:2451` opens a new `Chunk` only at `block.level == 2`; everything
else is size-driven packing at `<p>` boundaries against `MAX_BILLED_CHARS = 2800`. So a `###`
section split could never have moved a boundary on purpose, which was the remedy I had
proposed to one of them.

### What survives the retraction, and what does not

**Does not survive:** "chunk-terminal" as an independent defect class, and every severity
ranking that rested on it. `scripts/check_chunk_tails.py`'s premise is wrong as written.

**Survives untouched:** the ordinary test, which is the one that was doing the work all along
— **every facts value is voiced ALONE, in its own `<p>` with a 300 ms break either side, so it
must tell the truth alone at any position in the block.** That is true in the middle of a block
just as much as at a seam.

**And the retraction cost nothing, because the re-ranking was done on the ordinary test:**

- The `forechecking_systems.md` goaltender-contact value and the `risk_management.md`
  closed-hand pair both **failed the standalone test independently** and were repaired on that
  ground. The agent stated which ground each repair now rests on and used no "next file"
  framing.
- The `goaltender.md` section split was **correctly abandoned.** Told to re-judge on the block
  being at `HARD_MAX` and on section coherence alone, the agent found the body has **no seam**
  — it returns to attacker-on-you material twice after liability material — and that splitting
  would have cut a ~6,000-character paragraph between a claim and its counterweight. It
  reported: *"It is the defect shape, manufactured by the repair."* **It declined to split and
  found a Critical instead** — NHL/IIHF 64.1's second limb, dropped.

**The lesson is the one this repository keeps relearning, applied to me.** I wrote a brief from
an assumption about a file I had not opened, and the assumption was checkable in two greps.
The corpus was not wrong about chunk boundaries; *I* was. **This is the fourth figure or premise
in this project's own coordination documents to be replaced after being asserted flatly.**

## The renderer voiced numeric ranges as compound numbers — found by census, fixed in `scripts/`

`'30-35 seconds'` rendered as **"thirty-thirty-five seconds"**. Also `'7-9 players'` →
"seven-nine players", `'130-155 degrees'` → "one hundred and thirty-one hundred and fifty-five
degrees".

**Cause.** `_UNITS_ALT` holds only abbreviations (`s`, `min`, `m`, `%`). A range with a
**spelled-out** unit therefore matched no range rule at all and fell through to `bare-number`
twice. The en-dash spelling was rescued by a *different* rule, `numeric-range`, which accepts
`–` and not `-`; the hyphen spelling was not. That asymmetry is why it survived: the corpus
writes en dashes nearly everywhere.

**Why the obvious fix was wrong.** Widening `numeric-range` to accept a hyphen catches every
broken case — and destroys the corpus's citation backbone. Measured before deciding:
`2025-26 edition` and its siblings appear **over a hundred times** and would have voiced as
"two thousand and twenty-five to twenty-six". `1-2-2` (123), `1-3-1` (146) and `2-1-2` (112)
are forechecking system names; `50-50 puck` and `2-1` scores are the same shape.

**The fix** is a new rule, `range-with-spelled-unit`, requiring a spelled-out unit from a
deliberately short list — which is precisely what keeps seasons, formations and scores out.

**Two of the eight broken sites are the corpus's own text** (`game_management.md:91`, an
`Action:` value, and `:494`, a `Convention:` value — both voiced alone). **Five of the eight are
inside quotations** — Pagé's thesis, USA Hockey's Parent Handbook, an ASHL FAQ, a Hockey Canada
FAQ. **That is the whole reason this had to be fixed in the renderer**: a content-side fix would
have meant editing a quotation to work around a rendering bug.

### Two documentation defects found in the same file, and one of my own

- `_range_with_unit`'s docstring and the `range-with-unit-tight` example both advertised
  `'95-114 deg' -> 'ninety-five to one hundred and fourteen degrees'`. **The code has never done
  that**, and `deg` occurs **zero** times in `content/` — the corpus writes `95-114°`, which does
  work. The documentation asserted behaviour the code lacked, for a string the corpus never
  writes. Corrected to the true example.
- ⚠️ **I then wrote the same kind of false comment myself.** My new handler carries a
  `len(low) == 4 and len(high) == 2` guard commented as protecting season identifiers. **It does
  not, because it is unreachable:** `season-range` sits at rule index 17 and consumes `2025-26`
  before `range-with-spelled-unit` at index 32 can see it. **Rule ORDER is what protects
  seasons.** Established by sabotage, not by reading: adding `editions?` to the unit list *and*
  disabling the guard still renders `2025-26 edition` correctly. The guard is kept as a second
  line should the order ever change, and is now **documented as unreachable** so nobody reads it
  as the thing that works.

### The self-test, and proving it could fail

180 → **188 assertions, 0 failures.** Every new assertion was then attacked:

- **Probe A** — remove `seconds` from the unit list: **1 failure**, the expected one. The fix
  assertions discriminate.
- **Probe B** — add `editions?` to the unit list and disable the guard: **0 failures.** This is
  the finding above; the season row is a canary for rule *order*, not a test of the guard.
- **Probe C** — rename the `season-range` rule: **0 failures, and it was a no-op.** A `Rule`'s
  name is a label; the pattern still runs. ⚠️ **Recorded because it is the same shape as the
  probe that fooled me earlier in this round** — a sabotage that does not sabotage, read as
  evidence of robustness.
- **Probe D** — make `season-range`'s pattern genuinely unmatchable: **3 failures.** The canary
  fires. The claim in the comment is now measured rather than asserted.

**The rule that earned its place: check WHAT matched, never the exit code.** Probe C and Probe B
both returned "0 failures" and meant two completely different things.

## Open rows this wave produced

- ⚠️ **`content/foundation/rules_primer.md:856` states a false negative.** It says *"fend off …
  appears nowhere in that book"* of USA Hockey. It appears in USA Hockey's **Casebook**, Standard
  of Play Situation 6 (`usah_casebook.txt:18431`), in the same words the NHL uses. **Two sibling
  documents already carry the repaired scope and contradict line 856 outright** —
  `puck_handling.md:439` and `winger.md:114`. This is a remnant, not a fresh error. **Do not
  delete it — correct the scope** to "its playing-rules volume", as the siblings do. The
  practical instruction it carries survives; only the absence sentence is wrong.
- ⚠️ **The corpus's cervical-spine quantifier is attributed to a six-patient case series.**
  USA Hockey's *Heads Up Hockey* guide credits *"almost all on-ice cervical spine injuries"* to
  Tator et al., Can J Neurol Sci 1984;11:34–41 — **PMID 6704792, pubType `Case Reports`**, six
  patients at one Toronto unit, of whom five had the flexed-neck mechanism. Five of six cannot
  carry "almost all", and one unit is not "a wide range of hockey players". **USA Hockey printed
  the wrong one of two same-year Tator papers**; the one matching its characterisation is the
  national survey, Can Med Assoc J 1984;130:875–880 (PMID 6704840). **The safety instruction is
  not in doubt and must not be softened** — head up, chin off the chest, never duck. What is
  wrong is the quantifier's cited primary. **Six documents inherit it, and two narrate "almost
  all" in the corpus's own voice rather than as USA Hockey's words.**
- **`practice_and_development.md:628`** credits *"no benefit with unrelated pairs"* to Metcalfe
  (2017), a review whose page carries no full text and in which the string does not appear. The
  primary is Huelser & Metcalfe (2012), *Mem Cognit* 40:514–527, PMID 22161209, which carries it
  verbatim.
- ⚠️ **Diagram captions are SPOKEN, and no grep over `content/` reaches them.**
  `md_to_speech.py:594` loads `site/src/data/diagrams.json` and line 632 emits
  `"Diagram. " + entry["caption"]`. A caption is therefore a voiced layer with all the
  standalone hazards of a facts value. **`site/src/data/diagrams.json` is generated but tracked**
  — hand-editing it is silently reverted by `build-diagrams.mjs`.
- **`limb` is used 346 times in rulebook context across 26 documents and is defined nowhere** —
  no glossary entry, no inline gloss. Its ordinary sense is live in the same corpus
  (*"Lower limb injuries…"*). Read aloud, *"Rule 69.7 runs to four limbs"* is not a sentence a
  listener parses. **A brief this round asserted `limb` was "established in two documents"; it is
  the corpus's dominant unit.** Any plan written on that assumption mis-scopes by an order of
  magnitude.
- **The inverse census nobody has run:** prohibition-then-exception, the grant-and-limit shape
  with its halves swapped. A corpus carrying the prohibition and dropping the exception teaches
  that a legal goal does not count. The sentences are already extracted.
- **56 paragraph-layout sites sit on rules nobody opened.** All 8 known-wrong ordinals were
  found among the 129 that *were* opened; the base rate in the other 56 is unknown.
- **PWHL Rule 52.1 is cited in `body_contact_and_battles.md` and there is no PWHL rulebook on
  disk.** Unconfirmed, not contradicted, and **not removed** — that would be non-negotiable 3.
- **`body_contact_and_battles.md`'s Section 3 block is now at `HARD_MAX` (11) with no headroom.**

### ⚠️ The retraction is worse than "I did not check": the plan already said so

`OPEN_ITEMS.md` carries a **TIER 1** row headed **"POSITION IN A CHUNK IS IRRELEVANT for a facts
value or a list item"**, and it says exactly what I later contradicted:

> *"`md_to_speech.py` emits one `<p>` per paragraph, per list item and per blockquote, and a
> ` ```facts ` value is voiced with a 300 ms break either side. **So a facts value or a list item
> is voiced alone wherever it sits** — the chunk boundary is irrelevant to it, and 'a listener who
> pauses does not resume on a chunk boundary.'"*

The row records that **two independent agents, working different halves of the corpus, ended
their reports by declaring the same hole** — which the plan itself calls *"the strongest signal
this file has for a real dimension."*

**I then built `check_chunk_tails.py` on the opposite premise.** Not from an unchecked assumption
about a file I had not opened — from an assumption that a standing TIER 1 row in the plan I was
working from already refuted. The two greps would have caught it; so would reading the plan row
whose subject was the thing I was building.

⚠️ **And that same row had already recorded the shape of the mistake I was about to make.** Its
own worked example — `goaltender.md`'s three bullets, repaired as chunk-openers when they were
not chunk-opening and needed the repair anyway — is annotated: **"The brief was wrong about why
and right about what, which is the round's recurring shape."** That sentence describes
`check_chunk_tails.py` precisely, and it was written before the tool existed.

**What this changes about the finding above:** nothing about the repairs, which all rest on the
standalone test. Everything about the claim that any of this was *new*. **The corpus knew. The
plan said so. The coordinator did not read it.**

The generalisable lesson is narrower and more useful than "check your premises": **a plan row that
already covers the dimension you are about to tool for is the first thing to read, and the
dispatcher is the one person who never re-reads the plan because he believes he wrote it.**

---

## A fabricated quotation, found by fetching the primary rather than the restater

`practice_and_development.md` attributed *"no benefit with unrelated pairs"* to Metcalfe (2017),
*Annual Review of Psychology* 68:465–489. The brief assumed the quotation was right and only the
attribution wrong. **It was the reverse: the quotation is manufactured.**

The string appears in **neither** source. Metcalfe 2017's served page is abstract and reference
list only — 46,566 characters stripped, `unrelat` count **zero**. And it is absent from
**70,055 characters of Huelser & Metcalfe's full text**, fetched as a real 12-page PDF via
Unpaywall. This was not a fetch artefact; the whole primary was read.

The real wording, located in both the abstract and the Discussion: *"no benefit was derived from
generating an error when the cue and target were unrelated."*

**Two further defects in the same three sentences, neither in the brief:**
- The body claimed the result was *"replicated twice."* The paper supports **one** replication.
  The second candidate is Kornell et al.'s *related*-materials benefit, which is a different
  finding.
- Metcalfe 2017 was cited as *"source for the relatedness boundary"*. It is a **restater**; the
  primary is Huelser & Metcalfe 2012 (PMID 22161209). ⚠️ **Same second author restating her own
  earlier finding in a review** — the exact trap the style guide names.

Metcalfe 2017 was **not deleted**: it is a genuine restater, and the disclosure about what its
page actually serves is now on the record. Non-negotiable 3 held.

⚠️ **A cookie-wall tell that was benign.** The Springer URL resolved with
`?error=cookies_not_supported`, which is normally proof of a wall. Here the body was the genuine
article — correct title, authors, running heads, full Method and Results. **Confirmed by CONTENT,
not by status code or URL shape.** A URL-pattern rule would have recorded a false "unreachable".

## The Tator quantifier: no paper on the table carries it

The brief proposed swapping the citation from the six-patient case series (PMID 6704792,
`pubTypeList` = `["Journal Article", "Case Reports"]`) to the national survey (PMID 6704840).
**The agent refused, correctly.** The survey matches the *population* description but not the
quantifier — its own words are *"**Many** of the players had suffered a burst fracture…"*. The
2016 registry (PMID 26247551) reports 78.9% cervical share and 64.2% boards impact, **neither of
which is head-flexion**.

**So "almost all" is USA Hockey's characterisation and nothing else, and no paper sets head-down
against every other posture.** Had the brief been executed as written it would have swapped one
wrong provenance for another. **The corpus now says exactly that, and the safety instruction is
untouched.**

⚠️ **And the most exposed instance was in a file nobody had been given.** `skating.md` carries the
quantifier in a ` ```facts ` value — the only facts value in the corpus carrying it — plus twice
more in body prose. A facts value is voiced alone and cannot borrow attribution from a neighbour.
Dispatched separately.

## Two agents contradicted each other on a checkable fact, and the coordinator settled it

One agent located the *Heads Up Hockey* passage verbatim in `sources/huh.txt`. Another reported
the phrase *"wide range of hockey players"* **returns zero** from that file and treated the
quotation as doubtful.

**Both measured correctly. One inferred wrongly.** Literal grep returns 0; a whitespace-flattened
search returns the sentence complete and verbatim, along with *"it can occur at walking speed"*
and the full Tator credit line. **The extraction breaks the line mid-phrase with no hyphen** —
the second line-break trap, documented in `sources/README.md` earlier in this same round, and it
caught an agent within the hour.

## ⚠️ The coordinator relayed a line number without verifying it, and it was wrong

In a hand-off message I passed on `usah.txt:7468` as the location of the sled-hockey
*"within 10 feet of the players' bench"* text. **It is not there.** 7468 is
*"UNIQUE RULES FOR SLED HOCKEY – POINTS OF EMPHASIS"* (Teeing/Ramming). The sentence is at
**`sources/usah.txt:7310`**, under the sled discipline's own *"Section 2 Teams / Substitution of
Players"*.

**The substance was right and the pointer landed on a different sled passage that looks
confirmatory** — which is the worst shape a wrong pointer can have, because a verifier who
follows it finds sled-hockey text and stops. Consistent with the documented `splitlines()` /
form-feed offset. **I relayed a number I had not opened, in a message whose entire purpose was to
warn an agent against trusting phrase greps.**

## The trapezoid prevalence claim: 12 sites, 5 formulations, 0 sources

Briefed as a two-site divergence between `zone_entries.md` and `rink_map_and_glossary.md`. It is
**twelve sites in five incompatible formulations**, two of them under the **`Rule:`** label, which
the style guide reserves for a rulebook rule and nothing else.

- *"outside Britain"* ×2 · *"North American"* ×2 · **no geographic scope at all** ×5 ·
  book-and-prevalence merged ×3
- ⚠️ *"outside Britain"* is **self-contradicting**: Britain has the trapezoid *because Britain runs
  the IIHF book*, and that book is the base rule set across the IIHF's membership. The formulation
  asserts that Swedish, Finnish and German rec hockey has no trapezoid.
- **Nothing on disk counts leagues.** What is sourceable is the book position: NHL yes (1.8, 27.8,
  63.2(viii)); IIHF yes (1.8, 27.7); **USA Hockey no** (Rule 610(a)–(g) read in full); **Hockey
  Canada no** (Rule 10.1's thirteen clauses read in full).
- ⚠️ **The counterweight that was nearly shipped one-sided.** "No trapezoid" is not "no
  restriction", and naming one book's restriction alone implies the other frees the goalie.
  USA Hockey **614(c)** bars freezing outside the privileged area; **Hockey Canada Interpretation 3
  to 10.1(a) clause v** is stronger — *"they will not be allowed to freeze the puck… a Minor
  penalty. No warning will be issued."* The agent caught this **in its own draft** and repaired it
  before shipping.

**The residue is labelled, not deleted:** the league-level prevalence is a question about leagues
rather than about books, and the corpus now says it has no count for it.

⚠️ **The generalisable finding, which is bigger than the trapezoid:** this census worked because
`trapezoid` is a distinctive word. **The same *"most rec leagues…"* shape almost certainly recurs
for glass height, rink dimensions, no-touch icing and body-checking age bands, where the sites
share no distinctive term.** A census keyed on *"most … leagues/associations/rinks"*, read rather
than swept, is the obvious next scope and nobody has run it.

---

## ⚠️ The brief that would have FABRICATED a rule, and the agent that refused it

I briefed an agent that `goaltender.md` *"tells a goaltender their five cannot change, in exactly the
situation the rule's first exception is written for"* — reasoning that its two 6-on-5 passages were
the icing-substitution case and needed 81.4's exceptions.

**That reasoning inverts.** Verified at `nhl_rules_layout.txt:5771-5797` and `:7315-7330`:

| Provision | Exceptions |
|---|---|
| **81.4** Line Change on Icing | **three** — pulled goalie returning, injured player, strength-changing penalty. **IIHF adds a fourth: *"a Player with a broken skate."*** |
| **63.8 ¶1** displaced goal post | the same three |
| ⚠️ **63.8 ¶2** goalie freezes a puck shot in from beyond centre | **only TWO** — *"to replace an injured player, or when a penalty has been assessed which affects the on-ice strength of either team."* |

**Both of `goaltender.md`'s 6-on-5 passages cite 63.8, whose ¶2 omits the extra-attacker limb — and
omits it coherently**, because the restricted team is the goaltender's own team, which by definition
has not pulled its goalie. The exception I wanted added is absent from that paragraph *by design*.

The agent's own words: **"Had I taken the brief on trust I would have written a carve-out that exists
in no book."** That is non-negotiable 1 — fabrication — and it is **strictly worse than the omission
it was sent to repair.**

**What saved it was a single sentence in the brief**, included as routine caution rather than from
any suspicion: *"Check whether 63.8 and 81.4 interact here or are separate provisions before you
write anything — do not assume they are the same rule."* ⚠️ **The instruction that caught this was
generic. The reasoning that created it was specific and confident.**

### The clean negative, and why it had to be run immediately

The agent named the follow-up as the highest-value thing it had not done: **any document "fixed" by
copying 81.4's three exceptions onto a 63.8 statement has now invented one**, and three agents were
live holding 81.4 briefs from me.

**Run corpus-wide: CLEAN.** Nine documents carry 63.8 (`goaltender.md` 7 sites, `rules_primer.md` 4,
`faceoffs.md` 4, `team_play_and_culture.md` 3, `risk_management.md` 3, `game_management.md` 3,
`special_teams.md` 3, `defender.md` 2, `how_to_watch_hockey.md` 1). **No site attaches the
extra-attacker limb to 63.8.**

⚠️ **One line required reading rather than grepping.** `game_management.md:159` contains both `63.8`
and *"replace a goalkeeper who had been pulled for an extra attacker"* — and is **correct**: it
attributes the three exceptions to **Rule 82.1** and **IIHF 81.4**, and mentions 63.8 only because it
sits inside IIHF 82.1's own cross-reference text (*"in violation of ➔ Rule 63.8 – Delaying the Game
or ➔ Rule 81 – Icing"*). **A co-occurrence grep flags it; only reading clears it.** A sweep would
have "fixed" one of the most carefully written paragraphs in the corpus.

The correction was sent to all three live agents with the two-exception set, the load-bearing phrase
**"in that paragraph"**, and an instruction to verify `center.md:595` before copying it — **because I
had recommended it as the model, and I had not opened it.**

## A stale TIER 1 row, and an agent that reported "already correct" as a result

The 625(b) carve-out row was dispatched to two agents as eight defective summary layers. One ran the
layer test and found the carve-outs **already complete in all four of its files** — facts, body and
summary — landed by an earlier commit. **The row was stale, not wrong when written.**

⚠️ **The agent reported that rather than manufacturing an edit to match its brief**, which is the
behaviour that matters: a brief describing work already done is an invitation to change correct text.
It also declined to add Casebook Situation 10 to two files carrying **neither** limb, correctly
distinguishing *"carries half a situation"* (a defect) from *"does not discuss it"* (not one).

**Real defects did exist at both of its sites, narrower than briefed, and were repaired** — including
a `Key:` value at exactly 200/200 in a block at 11/11, where it freed a slot by **merging two clauses
of one rule**, one of which stated no consequence at all when voiced alone. That merge is a repair in
its own right, not just room-making.

### The model I recommended unverified — checked, and correct by luck

I told three agents to copy `center.md:595` as the model for 81.4's exceptions, **without having
opened it.** Having now read it, it is correct and is a good model:

> `Rule: After your own icing a healthy skater cannot change under NHL and IIHF rules (81.4) — the
> exceptions are injury, a pulled goalie returning and a strength-changing penalty, plus a broken
> skate under the IIHF that its own 82.1 omits; USA Hockey restricts nothing`

It cites **81.4** rather than 63.8; carries all three exceptions plus the IIHF's fourth **scoped to
the IIHF**; states the 82.1 divergence rather than silently resolving the standing open question;
and scopes USA Hockey. *"A healthy skater cannot change"* is the neat move — every exception is a
non-healthy or special case, so the qualifier does the work of the list.

⚠️ **Recorded because the outcome does not excuse the method.** In the same round in which I told
agents that a brief is a hypothesis and that relayed facts must be re-verified, I recommended a
specific line to three agents as a model on the strength of another agent's one-line description of
it. **It happened to be right.** The instruction to them to verify it before copying was the only
thing standing between that and propagating a bad model into four documents at once.

---

## Coverage of the staged set — which record covers which file

36 `content/` files are staged. **Six are not named in the narrative above**, and this section
exists so that nobody has to infer their coverage:

- **`time_and_space.md`** and **`breakouts.md`** *were* edited this round and belong here. Both took
  the trapezoid repair (book-level fact, both counterweights, labelled residue). `time_and_space.md`
  additionally took USA Hockey 625(b)'s carve-outs into its facts layer at two sites — a **pure
  layer defect**, body ✓ / facts ✗, since its body already quoted ¶3 in full. Its "Getting open"
  block was at 11, so two 69.1 values that are halves of one provision were **merged** to free a
  slot, and the 625(b) statement was then **split** so nothing was compressed away. In its §6 block
  the Hockey Canada limb *was* compressed to the view test — **the one deliberate compression in the
  round**, flagged by its author as wanting a second reader, and recorded here rather than left in a
  report. `breakouts.md` additionally took 81.4's exceptions, and gained a `Rule:` value in a section
  whose heading advertises *when to clear* while the hazard is *what clearing costs you*, which is
  the "heading advertises nothing" class this project keeps naming.
  ⚠️ **And its author introduced a defect while writing that repair and caught it on re-read**: the
  first draft said *"Get it out over the glass"*, which is the delay-of-game minor the same document
  warns about three lines earlier. **A repair pass manufacturing the defect it is repairing is the
  shape to watch for.**
- **`uk_rules.md`**, **`equipment.md`**, **`neutral_zone_systems.md`** and
  **`passing_and_receiving.md`** carry **no round-55 edit**. Their staged diffs are round-54 work
  that was never committed, and they are covered by
  [`round_54_retiring_the_closed_rows.md`](round_54_retiring_the_closed_rows.md), which is staged in
  the same commit.

⚠️ **The general point, which is worth more than the list.** A commit can be gated on "a review
record exists" and still ship files no record covers, because the gate checks for a record and not
for a mapping. **The check that catches it is mechanical and takes one line** — for each staged
`content/` file, is its basename named in a staged record? It found six here. Nothing else in the
gate would have.

---

## Two criticals the record did not carry — entered here because a commit message is not a record

A commit gate found both of these described in the proposed commit message and **absent from
`project/reviews/`**. That is a real gap and not a formality: the message explains a commit, the
record is what the next round reads. `76.5` appeared nowhere in either staged record, and
`body_contact_and_battles.md` was named eight times without once being named for this repair.

### CRITICAL — a catch-the-puck permission that is switched off at the draw

```
BLOCK      content/systems/faceoffs.md  §"Closing your hand on the puck is a penalty…"
FACT       Rule: Everyone on the ice may catch a puck out of the air, provided they "immediately
           place it or knock it down to the ice" (NHL and IIHF Rule 67.2)
DEFECT     dropped exception — and NOT IN THE BRIEF; found by applying the layer test to a block
           the agent had been sent to read for a different reason
EVIDENCE   The value is the FIRST in its block; the exception is the SECOND. Voiced alone with a
           300 ms break either side, it tells a centre they may catch the puck at a face-off.
           NHL/IIHF 76.5: the two players taking the draw "are not permitted to play the puck with
           their hand … until such time as a third player (from either team) has at least touched
           the puck." Doing so is a minor under 67.2. Verified verbatim in both books.
FIX        Rule: Everyone on the ice may catch a puck out of the air, provided they "immediately
           place it or knock it down to the ice" — but not the two takers, not until a third player
           has touched the puck (NHL and IIHF Rules 67.2, 76.5)  [221 chars, cap 300]
```

⚠️ **The agent's first attempt flattened it the other way** — *"Everyone on the ice **except the two
takers** may catch…"* — which denies the takers a permission 76.5 gives back the moment a third
player touches the puck. **It caught this itself and shipped the temporal limit instead.** Recorded
because the first repair was wrong in the opposite direction to the defect, which is the shape that
survives review by looking like a fix.

### CRITICAL — a permission to bodycheck, stated without either of its two provisos

```
BLOCK      content/technique/body_contact_and_battles.md  §3 facts block
FACT       Rule: IIHF women's rules allow bodychecking where there is clear intention of playing
           the puck (IIHF Rule 101.1) — two players may push and lean into each other
DEFECT     dropped limits — IIHF 101.1 grants in TWO sentences, each carrying its own limit, and
           the value took the first half of each and dropped the second half of each
EVIDENCE   iihf_rules_v1.1.txt, Rule 101.1, verified in BOTH editions (textually identical):
           "'bodychecking' is allowed when there is a clear intention of playing the puck … WITH
           THE EXCEPTION FROM THE SITUATION DESCRIBED IN THIS RULE. If two (2) Players are in
           pursuit of the puck, they are reasonably allowed to push and lean into each other
           PROVIDED THAT 'possession of the puck' remains the sole object of the two (2) Players."
           Voiced alone it is a bare permission to bodycheck and to lean on an opponent. It is the
           operative rule for every woman playing in Britain, and the dropped proviso is the whole
           test separating a legal lean from an illegal hit.
PENALTY    101.1: "will be assessed one of a: (I) Minor penalty (2') (II) Major penalty (5') and
           automatic game misconduct penalty" — mandatory, not discretionary. And IHUK In-House
           Rule 101: a Major "will, IN ALL CASES, also receive an additional Game Misconduct
           Penalty and be ejected" — no discretion, no age scope.
LAYERS     "sole object" measured BEFORE: body 6 / facts 0 corpus-wide. AFTER: facts 1.
FIX        Split into two values, each carrying its limit in the same sentence as its permission.
```

⚠️ **The agent declined to name the excepted situation**, and its reasoning is worth keeping: the
book says *"the exception from **the situation** described in this rule"* — **singular, and
grammatically broken**. Rendering it plural is an interpretation; enumerating the candidates would
assert an exhaustiveness the rule does not state. The block already carries all three as separate
values.

⚠️ **A second defect the brief did not contain, found in the same pass.** A value read *"You are
entitled to the ice you occupy while maintaining skating speed and body position (USA Hockey; NHL
Rule 56.1)"* — attaching USA Hockey's speed condition to an NHL rule that has none and that
**expressly protects a stationary player** (*"is allowed the ice he is standing on … and is not
required to move"*). Voiced alone it taught that **stopping forfeits your ice** — the opposite of
NHL 56.1, of IIHF 101.1's hold-your-ground provision, and of this corpus's own
`playing_without_the_puck.md`. **It also misrepresented USA Hockey**, whose very next bullet
entitles a skater to stand their ground. Split one value per book.

---

## The gate was right about the defect and wrong about its direction — and the coordinator relayed the error

A commit gate blocked on a gloss this round introduced: **"free to get back"** / **"not blocked from
returning"**, attached to USA Hockey 625(b)'s goalkeeper-out carve-out. `git log -S` confirms both
phrases are **new to the corpus in this diff**. Neither is in any rulebook. 625(b)
(`usah.txt:4501-4507`) says only *"or the goalkeeper is out of the goal crease area."* The gloss
derives from **Casebook Rule 625 Situation 9** (`usah_casebook.txt:14672-14684`), and it appeared
under the **`Rule:`** label, which the style guide reserves for rulebook text — so it read as
quotation.

**The gate said the compressed sites "state a broader relief than the Casebook gives." That is
backwards, and I repeated it in the brief.**

Situation 9 disallows the goal **only** where there is interference **by the attacking player**:

> *"if the goalkeeper is attempting to return to the goal crease and there is any interference **by
> the attacking player** who prevents the goalkeeper from making a play, then the goal must be
> disallowed and an interference penalty shall be assessed."*

The gloss makes validity turn on whether the goalkeeper could return **for any reason at all**. So a
goalkeeper impeded **by their own defenceman**, by a pile-up, or by a rebound leaves the goal
**GOOD** under the Casebook and **VOID** under the gloss. The gloss is therefore a **narrower relief
and a broader bar**, and the reader's error is believing a legitimate goal was waved off — the
opposite of what the gate predicted and of what I passed on.

⚠️ **The gloss also dropped a penalty.** Situation 9 assesses an **interference minor** as well as
voiding the goal. That consequence was absent from all five compressed sites.

**Resolution:** the carve-out is now stated in 625(b)'s own words, and the Casebook narrowing travels
only as an explicitly attributed statement carrying its agency limb. Both phrases are gone.

### What the census missed, found by the agent sent to fix what the census found

- ⚠️ **A SECOND instance of the Hockey Canada 8.5 defect**, in `defensive_zone_coverage.md`, dropping
  **three of four** conditions exactly as `time_and_space.md` did. **The gate named only one file.**
- ⚠️ **Two further sites of the gloss**, in `offensive_zone_play.md` (uncited — a *fifth* uncited
  site, not four) and `playing_without_the_puck.md` (cited, no agency limb). **Nine documents, not
  seven.**

### One legitimate non-repair, worth recording so nobody "fixes" it

`rules_primer.md`, `goaltender.md` and `shooting.md` quote 625(b) **verbatim without the limb** in
their **body** layers, and were correctly left untouched: each states Situation 9 in the very next
sentence of the same blockquote, and **body prose is voiced continuously**, so the qualification is
never separated from the quotation. **Adding the gloss there would have been the defect.**

Likewise `winger.md` and `scanning_and_anticipation.md` state the carve-out **plainly** because the
*immediately adjacent value* already carries Situation 9 in full, and that value opens by taking it
back — *"That goalkeeper-out carve-out is not the free pass it reads as."* Flagging the earlier value
would have made the later one incoherent.

⚠️ **So of nine sites, three body sites and two facts sites were correctly left alone, and a sweep
would have damaged all five.**

### And the repair needed its own second pass

The agent's first draft of the `goaltender.md` value ended *"Casebook Situation 9 gives the goal back
if they stopped you returning."* **To a goalkeeper hearing that alone, "gives the goal back" reads at
least as plausibly as allowing the attackers' goal** — the opposite of the ruling. It was caught by
re-reading its own hunk rather than trusting the edit. **A repair is new text, and new text has not
been reviewed.**

---

## A citation that was not merely incomplete — it was the one limb that fails the taught case

A commit gate raised this as **non-blocking**: *"`breakouts.md` cites 614(c) for one of its four
limbs. Not wrong, but narrower than the rule."* **That description is too kind, and the agent sent
to close it found why.**

**USA Hockey 614(c)** has four triggers (`usah.txt:4001-4029`). The corpus cited **limb (3)**:

> "(3) The puck is outside the boundaries of the 'goalkeeper's privileged' area."

The scenario the document teaches is **a rim behind the net**. And the Casebook settles what that
area covers — `usah_casebook.txt:12911-12916`, **Situation 14**:

> *"Does the goalkeeper's Privileged Area include the area behind the goal line? **Yes.** … The
> goalkeeper's Privileged Area extends to the closer end boards."*

**So a goalkeeper freezing a rim directly behind the net is INSIDE the privileged area, and limb (3)
does not reach them.** Limb **(1)** does — *"The puck is behind the goal line and their body is
entirely outside of the goal crease."* Situation 12 confirms the consequence is mandatory:
*"a minor penalty for delaying the game **must** be assessed."*

⚠️ **The conclusion the document drew was right and the limb supporting it was the wrong one. A
reader following the corpus's own reasoning would have concluded the behind-the-net freeze was
fine.** That is a worse failure than an incomplete citation, because it is checkable and it checks
out backwards: a reader who looks up limb (3) finds it does not apply and concludes there is no
penalty.

**This is a new defect class for this project's records: a citation that is verifiable, accurate as
a quotation, attached to the correct rule number — and load-bearing on the wrong limb.** No checker
can see it. `check_rule_scope.py` compares book scope between units and would pass this. It was
found only by reading all four limbs and then reading the Casebook to learn what one of them meant.

The agent also carried **Situations 7 and 11**, which run the other way, so the document does not
now overstate. And it declined to put limbs (2) and (4) in the extraction layer, because neither
changes a rim decision — **the correct application of "do not pad a value with limbs it does not
need"**, which is the same discipline as not trading a hedge for room, pointing the other way.

⚠️ **Three further sites still cite limb (3) alone**, all in the ` ```facts ` layer where each is
voiced alone: `on_ice_communication.md`, `time_and_space.md`, `faceoffs.md`. Dispatched. Six sites
were checked and found **already complete** — `goaltender.md` (the owner, which says *"four
triggers, not one"*), `defender.md` ×2, `center.md`, `rules_primer.md`, `special_teams.md`,
`offensive_zone_play.md`. **Not a sweep.**

## The propagation the round kept finding after it thought it was done

Three separate agents, each sent to fix a named defect, each returned with **more sites of that same
defect than the brief named**:

- the "free to get back" gloss: briefed as 7 documents, **is 9**
- Hockey Canada 8.5's dropped conditions: briefed as 1 file, **is 2**
- IIHF 101.1's missing exception limb: briefed as 1 file, **is at least 5** —
  `game_management.md` (four layers, including its Sources trailer), `forechecking_systems.md`,
  `offensive_zone_play.md` ×2 including **a blockquote of the rule itself**,
  `defending_the_rush.md`
- NHL/IIHF 81.4's injured-player limb: briefed as 7 documents, **four more had it absent from the
  entire file**

⚠️ **In every case the census that produced the brief had run a grep, and the agent that found the
extras had read the file.** The pattern is not that the censuses were careless; it is that **a
census keyed on one phrasing finds one phrasing**, and each of these defects is a *missing* half,
which by definition leaves no distinctive string to search for.

**The generalisable rule: you cannot grep for an absence. You can only grep for the presence of the
half that survived, and then read.**

---

## The audio found three defects that no checker and no reading would have

An agent repairing four sites caught **three defects in its own drafts**, and it names how it caught
each. Two were invisible to every mechanical gate, and one was invisible to reading the source at
all.

1. **A doubled full stop** from an insertion colliding with the following sentence. Caught by
   re-reading. No checker looks for this.
2. ⚠️ **A broken referent, found ONLY in the rendered audio.** The insertion sat *between* the hazard
   and the sentence *"That's the real cost — you've cleared the puck and kept your tired players on
   the ice."* Read aloud, **"the real cost" then attached to the injury exception** rather than to
   the hazard. On the page it looks fine. **This is the class the corpus's whole audio discipline
   exists for, and it was created by a repair.**
3. ⚠️ **A false sentence.** A first draft read *"you lose the faceoff and the change, though injury
   is an exception."* **Injury is not an exception to losing the faceoff** — only to losing the
   change. Voiced alone that sentence is simply untrue. Final wording binds the exception to the
   right half: *"you lose the faceoff, and cannot change except for an injured player."*

It also rejected the shortest available tail, *"bar injury"*, because the same passage uses
*"the substitution **bar**"* as a noun and **the collision is audible**. That is a consideration
available only to someone who has listened.

⚠️ **Every agent this round that ran the renderer found something with it. Every agent that did not
run it said so honestly and found less.** The renderer is not a verification step at the end; it is
a reading of a layer the page cannot show.

## Three confirmations, and one refusal to fabricate

- **The 63.8 fabrication hazard is now checked FOUR times independently and is clean.** No site in
  the corpus attaches 81.4's extra-attacker limb to a 63.8 statement. `risk_management.md`'s ¶2 site
  now uses the load-bearing wording *"whose only exceptions in that paragraph are…"* and its body
  states affirmatively that the extra-attacker limb *"found elsewhere in 63.8 and in Rule 81.4 is
  absent here, because the team being restricted is the goaltender's own."* ⚠️ **That "elsewhere in
  63.8" was itself verified** — ¶1 (displaced goal post) does carry three, in both books.
- **A brief of mine was refuted and no edit was manufactured.** I listed `faceoffs.md` as carrying
  the 614(c) limb defect. It does not: its scenario is a rim dying in the **corner**, which is
  genuinely outside the privileged area, so **limb (3) is the correct limb there** — and the
  adjacent value already supplies the limb-(1) guard conjunctively (*"inside the privileged area
  **and in front of the goal line**"*), tracking Casebook Situation 12 word for word. **Read, judged,
  left alone.**
- ⚠️ **A fabrication declined.** `risk_management.md`'s Key Takeaways cites **Hockey Canada Rule
  6.4(a)** for a no-change consequence. 6.4(a) is *puck out of play* — a different rule from 6.7(d),
  and **its printed text carries no exception list at all.** Copying 6.7(d)'s injury exception onto
  it would have been exactly the 63.8 error in a different rule. The agent wrote nothing and left it
  open. **Unresolved, and correctly so.**

## Concurrency held, and was verified rather than assumed

Two agents edited `on_ice_communication.md` and `time_and_space.md` in the same window. Both sets of
edits survive: 614(c)(1) and the 625(b) crease rewrite coexist in each file, confirmed by grep after
both finished. The mechanism was each agent re-reading immediately before writing — **not luck, but
not a guarantee either**, as the second agent said plainly: *"the reverse is not guaranteed."*

Also verified in the source rather than assumed: `playing_without_the_puck.md`'s new pair sits at
lines 526 and 527, **B immediately after A**, so the goalkeeper-out carve-out is never voiced without
the retraction that follows it. The whole safety of that shape rests on the ordering, and the agent
that built it said it could not check the ordering.

---

## The quotation sweep, run properly on four documents — 231 quotations, 2 defective

An agent ran the character-by-character sweep across four files: **231 italic quotations of six words
or more**, 200 matched mechanically against flattened primaries, **31 hand-adjudicated**.

- **222 located verbatim.**
- **2 defective**, both **unmarked truncations presented as complete sentences with a substituted
  full stop**:
  - `winger.md` — *"No time-out shall be granted to the defensive team following an icing."* NHL 87.1
    continues *"…**, following the goalkeeper causing a stoppage of play from a shoot-in from beyond
    the center red line, or when a defending player accidentally**…"*. Materially benign — the
    dropped limbs do not change the icing proposition — **but a reader who checks it finds a sentence
    that does not end where the corpus says it ends.** Repaired to a marked elision.
  - `defender.md` — a quotation of IIHF Situation 63.28 cut before *"…**resulting in the puck leaving
    the playing surface**"*. The dropped clause is the operative condition. Repaired.
- **6 not verifiable** — web sources with no primary on disk (two skating-load figures, two
  coaching-site phrases, a USA Hockey ADM page, Bruyere). **Not fetched, and recorded as unverified
  rather than assumed sound.**
- **1 false positive** — the corpus's own voice in quotation marks.

⚠️ **The 22 mechanical misses that turned out fine are the useful part of this result.** Every one was
an extraction artefact, not a corpus defect: **PDF page-break furniture interpolated inside the quoted
span** (*"…block a 338 USA Hockey Casebook 2025-29.indd 338 2/14/25 9:24 AM Casebook – Playing Rules
shot and their momentum…"*), **running headers spliced mid-sentence** (*"the minor penalty for SECTION
· OHTER INFRACTIONS delay of game"* — note the typo is the book's), mismatched curly/straight quote
pairs in the IIHF extraction, and legitimate **marked** elisions and bracketed insertions.

**So the sweep's raw output is roughly 10% false-positive, and every one of those needs a human read.
It is a worklist, not a gate, and it must never gain a `--strict`.**

## Three findings the round produced by reading what a brief asserted

- ⚠️ **My brief said `winger.md`'s body already carried "the boards or a goal post". It did not** —
  only its Common Mistakes did. **Acting on my brief would have shipped the facts ✓ / body ✗
  divergence the same brief warned against.** The agent read the file. This is now the fifth time
  this round a brief has been wrong about a file's contents in a way that would have created a defect.
- **Two sites were judged NOT defects and left alone**, on the distinction the brief itself supplied
  but did not apply: `puck_support_and_spacing.md` and `switching_positions.md` name **no object**,
  which is less specific but not divergent, and two further sites name the wall inside **explicitly
  wall-scoped scenarios** (*"Wherever a switch sends you to the wall"*) — **scenario scope, not an
  exhaustive mechanism claim.**
- ⚠️ **One honest disclosure worth keeping.** `puck_support_and_spacing.md` carries the post only in
  its **Sources trailer**, which the renderer strips — so that document has **zero mentions of the
  post in the voiced layer**. The agent judged that acceptable *only because no voiced sentence in it
  names the wall as exhaustive either*, and said so rather than editing.

## Handed back, and correctly

**`defender.md`'s Key Takeaways carry the boards-safety override nowhere.** Not "names the wall only"
— **absent**, from the summary layer of the position the hazard belongs to. Its own body calls it
*"One thing overrides all of it"* and *"this hazard is squarely yours"*, because a defenceman does
more retrievals with pressure behind them than anyone. It reaches body, facts and Common Mistakes and
stops.

**It is the only one of five comparable documents without it** — `winger.md` KT 6,
`switching_positions.md` KT 9, `puck_handling.md` KT 5, `puck_support_and_spacing.md` KT 6 all carry
it.

⚠️ **The reviewer declined to fix it and was right to.** The style guide specifies **5–10** takeaways
and `defender.md` has **10**, so the fix is an 11th (precedented — four documents run 11 — but a
deviation) or displacing an existing one, several of which are themselves safety items. **That is an
editorial call, and "report and change nothing at a cap" is the escape the process provides
precisely so that a narrowly-briefed reviewer does not make it alone.** Dispatched to a content
reviewer with the decision, not the answer.

---

## The site review found a CRITICAL in the staged state that the coordinator's own check had missed

`site/src/data/diagrams.json` **in the index** carried the retracted caption — *"cervical spine
injuries, **and only on** head-on contact"* — while the working tree carried the correction.

⚠️ **And the coordinator had explicitly checked this and reported it clean.** The check ran *before*
the caption was repaired: `.mjs` was corrected afterwards and the manifest was never regenerated.
**So the verification was true when made and false when relied on**, which is the exact failure mode
this project records about chunk numbers and dimension tables — and the exact reason `git diff
--name-only` being empty is the only test that means anything.

The staged caption told a reader a cervical-spine hazard applies **only** on head-on contact. The
correction says it does not depend on arrival angle. **The narrower version was the one staged, and
`figcaption` is the only text a listener gets for that figure.** Re-staged and verified: `and only`
now returns **0** occurrences in the staged manifest, the corrected sentence **1**.

### The reviewer could not use the Chrome extension and did the work anyway

Every `navigate` was refused — *"Could not verify this site's safety category"* — for
`localhost:4321`, `127.0.0.1:4321`, `127.0.0.1:4322` and the bare origin, across two tabs and five
attempts. **A blanket block on the local origin.** It fell back to driving **headless Chrome over
CDP** with `Emulation.setDeviceMetricsOverride`, `Emulation.setEmulatedMedia` and
`Page.captureScreenshot`, and rendered **all 48 sitemap URLs at two widths** plus twelve documents in
both themes. **D12 is closed by observation, not by declaration.**

### The `warn-inline` verdict, and a figure that was wrong in the record

**The wrap is structurally correct.** Across all 609 spans: **0 nested, 0 starting anywhere but at
the glyph, 0 causing body-level horizontal scroll**, and the sentence-boundary guard holds.

⚠️ **But the record's 588 → 609 delta was misattributed to the plugin.** The new rule produced
**exactly 5 spans**; roughly 16 of the 21 came from this round's *content* edits. **A number
attributed to the wrong cause is the same defect as a number that is wrong.**

⚠️ **And in 3 of those 5, the bold run is a CITATION rather than the caution** — so the page gives
amber to a rule number while the operative instruction three lines above is bold black with no
amber, because no glyph precedes it. Content-shaped, dispatched.

### The plugin's comment claims a fix it did not make

`remark-corpus.mjs` asserts shape (c) covers six warnings that rendered as plain prose, and names
one that is **still plain prose** — a **provenance caveat**, measured `inWarn: false` on a screen
showing two other ⚠️ glyphs in full amber. ⚠️ **The change makes it worse: raising the amber count
trains a reader that ⚠️ means amber, so an un-amber ⚠️ now reads as less important than before.**
**Third comment this round found asserting behaviour its code does not have.**

## The style guide's stale-source warning was itself stale, in the direction that harms

Its ⚠️ **STOP** block said that of ten named files *"only `ibc.txt` is present"*, verified
2026-08-28. **`huh.txt` and `huh_layout.txt` have been on disk since**, and a writer following the
block would conclude the *Heads Up Hockey* material was uncheckable here.

⚠️ **On 2026-08-31 an agent needed precisely that file** to establish that `defender.md` stated the
spinal-injury mechanism backwards — the posture straightens the cervical spine *before* impact, and
the collision then compresses an already-straight spine. **It found the defect only because it
checked `ls sources/` rather than this list.**

**The generalisable point, now written into the block:** a hand-maintained inventory of what is
*absent* goes stale in the one direction that causes harm — **it never notices an arrival.** An
absent-list can only ever become falsely pessimistic, and a falsely pessimistic absent-list reads as
confirmation that no source exists.

## A brief of mine was rejected on its merits, and the rejection was right

I handed a reviewer suggested wording for a missing Key Takeaway and asserted it used *"only
vocabulary already shipped elsewhere in the corpus."* It did not. `grep -rc "most dangerous thing
you do" content/` returns **nothing anywhere**, and my opening voiced clause was an **unsourced
superlative** — the exact shape the style guide records as a caption defect. My draft also stated
USA Hockey's *"even a light hit from behind"* warning **bare**, stripped of the fact that the guide
addresses that sentence **to the checker**, which the style guide makes load-bearing.

⚠️ **And the reviewer solved the constraint I could not.** I offered three routes — an 11th takeaway
(a style-guide deviation), a displacement, or nothing. It found a fourth: **two existing takeaways
were halves of one instruction** — name the system, and find out which system your team plays —
**split across opposite ends of the list, so a listener heard the system nine items before being
told to find out which one they play.** Merged, they free a slot and the list stays at ten, inside
spec. **The cap was not the obstacle; the list's own structure was.**

---

## The prevalence census — two criticals, and a book that was present and unconsulted

A census keyed on **phrase shape** rather than subject read all 262 tier-A hits of 628, layer-tagged,
and judged **~30 defective against ~102 sound**. The 102 are the result: nearly all the
body-checking sites name their books, hedge, and end in *"check your league"*.

### CRITICAL — a negative-existence claim the corpus's own cited source refutes

`shooting.md` states at three sites — including a **`Rule:`** value voiced alone and **Key Takeaway
4** — that *"the only governing-body ban [on slap shots] is USA Hockey's, in Blind Hockey"* and that
other bans are *"local league and association rules, not governing-body playing rules."*

**`sources/carha.txt` Rule 79(a):** *"Any player who uses a 'slap shot' during the game shall be
assessed a Minor penalty. **If an injury to an opponent results, a Major penalty shall be
assessed.**"*

⚠️ **And `rules_primer.md` already quotes that rule verbatim and lists Rule 79 in its Sources
trailer.** `shooting.md`'s own trailer records that it verified *"the USA Hockey slap-shot provision
(Blind Hockey only)"* — **it never opened CARHA.** A reader in a CARHA-affiliated adult league takes
a slap shot on this advice and gets a minor, or a major if it injures someone.

### CRITICAL — a glossary entry refuted by its own document's rules owner

`rink_map_and_glossary.md`'s **Icing** entry — the glossary twenty documents link to — says *"Most
leagues use hybrid icing."*

- **USA Hockey Rule 624(a)**: *"Icing the puck shall have been completed **the instant the puck has
  completely crossed the goal line**"* — no race, no would-first-touch test.
- ⚠️ The **only** occurrence of `hybrid icing` in the whole USA Hockey book is at line 7412, **inside
  the Disabled Hockey / sled section.** The sled trap again, third time this round.
- **CARHA Rule 65(a)** is automatic too.
- **`rules_primer.md` already states it correctly**, with the rule quoted.

⚠️ **By the corpus's own two premises the entry is false**: eleven sites assert that most North
American rec and youth hockey runs USA Hockey or Hockey Canada, and USA Hockey is automatic.

### The finding under both criticals

⚠️ **A book can be present, extracted, cited by one document, and unconsulted by the document that
most needed it.** `carha.txt` is 206 KB on disk and answers five of the subjects this census
examined. **No prior census had used it.** The style guide's grep-trap list warns that a book can be
*registered and absent*; this is the same trap inverted, and neither the README nor the guide can
detect it — only opening the file can.

⚠️ **A brief error of the census's own, which I verified rather than acting on.** It reported the
style guide as *"still recording `carha.txt` as registered and absent"*. **It does not.** The only
mention is past tense, as a historical example, and §"Primary rulebooks" does not mention the file at
all. **I checked before editing and did not "fix" a defect that was not there** — the guide now
marks the example as historical *and* records the inverted trap the census actually found.

### Corrections to my own brief

- The trapezoid family is **15 sites in 10 documents in 6 formulations**, not 12 and 5.
- I said two of them sat under the `Rule:` label. **One does.** The second `Rule:`-labelled
  league-prevalence claim is about the **crease**, not the trapezoid — the class was right and the
  subject attribution wrong.
- ⚠️ **My named candidate list was largely a false lead.** Glass height, off-ice officials, curfews
  and ice times produced **no** new defect. **Officiating crew size, slap shots, helmet certification
  and hybrid icing — none of which I named — produced the findings.** A list of where to look, drawn
  up by the person who has not looked, predicts poorly.

### ⚠️ The method's own limit, stated by the agent that ran it

> *"A prevalence claim about leagues written **without a quantifier at all**… sentences like 'rec
> leagues don't call this', 'your league won't have one', 'nobody enforces that below junior' are the
> same claim with the quantifier deleted, and match nothing I ran. That is the fifth time this trap
> has been named in this repository and I did not escape it either — **I widened the vocabulary, I
> did not change the method.**"*

**A pass keyed on the population noun alone — reading every sentence that names a league or a rink —
would find a strictly larger set. Nobody has run it.**

And the single highest-value unrun action it names: **fetch a USA Hockey or Hockey Canada annual
report.** Those publish registration numbers, and **one sourced membership figure would convert a
dozen prevalence claims from labelled residue into fact.**

---

## The quotation sweep, run corpus-wide — 5,011 quotations, seven Tier-1 defects

**5,011 italic quotation instances, 3,086 unique**, matched against a flattened index of all 26
primaries. **4,557 located verbatim. 454 not located** — overwhelmingly web sources with no primary
on disk, **not verified and not disproved**, concentrated in `getting_started.md` (62),
`conditioning_and_recovery.md` (27), `equipment.md` (25) and `mental_game.md` (22).

Then a second pass the located/not-located test cannot do: of the **854** quotations presented as
complete, **95 had the primary sentence continuing past the corpus's full stop.** All 95 read.

### The seven Tier-1 defects — an operative condition or scope dropped INSIDE the quotation marks

1. ⚠️ **Hockey Canada 7.3(a) quoted as applying to "anyone"** — `body_contact_and_battles.md`,
   Common Mistakes, voiced. The rule's own sentence continues *"**, in divisions of U13 and below,
   female hockey, and any other divisions approved by a Member of Hockey Canada.**"* **The comma
   became a full stop and the scope vanished.** The corpus states the scope correctly for the same
   rule in `defensive_zone_coverage.md`, which is what proves it an error rather than a convention.
2. **USA Hockey 625(a)(8) truncated at a comma**, dropping *"in a manner that interferes with the
   movement of the goalkeeper"* **and** the exception. The corpus sentence says the rule *"reaches
   only through"* the quoted words — so the truncation makes it reach **any** stick or body contact.
   ⚠️ **Quoted at three different lengths in three files.**
3. **IIHF 80.3's comparator removed** from a sentence introduced as *"stated explicitly"* — the test
   is where puck meets stick **"in relation to the crossbar"**, and the corpus cut exactly there.
4. **An unmarked `(2)` elision** in IIHF 101.1's *"the sole object of the two (2) Players"* — quoted
   correctly **with** it in four other places.
5. **An unmarked `(6')` elision** in NHL 27.8's *"six feet (6') from either goal post"* — in the
   sentence that exists **to adjudicate that very dimension**.
6. **"In the same words" false again** — NHL 76.7(ii) *"his opponent"* against IIHF *"their
   opponent"*. ⚠️ Two sibling cases were checked and are **clean**.
7. **Hockey Canada Interpretation 2 to 7.5(a)** cut before *"**to avoid making contact with the
   back**"*, in a `Rule:` value voiced alone. Heard alone it asserts **general strict liability for
   all checks** — and `rules_primer.md` argues at length that the onus is *not* strict liability.
   **The truncated fact contradicts the corpus's own careful reading of the same provision.**

### Two previously-reported defects are still unrepaired, and one is five times wider

**IIHF Situation 63.28** — cut before *"resulting in the puck leaving the playing surface"* — is at
**five** sites, not the one reported. **NHL/IIHF 87.1** is at two. ⚠️ **A finding recorded in a
report is not a finding repaired**, and nothing in this project's process closes that loop
automatically.

### ⚠️ Four corrections to my own brief, and one of them would have caused damage

- **I scoped this at ~2,100 quotations. It is 5,011** — 2.4× larger.
- ⚠️ **I said "expect roughly 10% false positives." In the near-miss bucket it was about 75%.** The
  corpus does bracketed alteration *properly and often* — `[that]`, `[you]`, `[sic]`, `[a]t`,
  `block[ing]`, `tak[ing]`, `make[s]`, `60 minute[s]` — and every one trips a naive matcher.
  **An agent working to my 10% expectation would have "corrected" correct text.**
- ⚠️ **My own de-hyphenation advice generates false defects.** Joining hyphen-plus-linebreak turns
  the primaries' `hook-checking`, `slew-footing`, `short-handed` into `hookchecking`, `slewfooting`,
  `shorthanded`, which then fail against correctly-hyphenated corpus text. **Three apparent defects
  evaporated** when the comparison dropped to a letters-and-digits-only signature. **The instruction
  that protects against one trap manufactures another.**
- I reported the two known defects as *"found"*; they were found and **not fixed**.

### What the sweep still cannot see, stated by the agent that ran it

- **It covers italic `*"…"*` quotations only.** Quotations in plain double quotes without italics —
  which exist **inside facts blocks** — were outside the pattern and are **largely uncounted**.
- It verifies that a string appears in a book, **not that the named book originated the claim**. A
  situation handbook restating a rule matches identically to a rule stated first-hand. **Provenance
  is invisible to it.**
- It did **not** confirm `usah.txt` matches by line range against the sled sections, so any match it
  reports could in principle be a Disabled Hockey rule of the same wording.
- **454 unlocated quotations are unverifiable from disk**, several load-bearing on safety or
  analytics. **A fetching pass is the obvious next round.**

---

## ⚠️ The quotation sweep produced a false positive that would have CREATED a defect

I relayed the sweep's Tier-1 item 3 to an agent: `shooting.md` quotes Rule 80.3 as *"The determining
factor is where the puck makes contact with the stick"* and the sweep reported the primary as
continuing *"in relation to the crossbar"*.

**The agent refused it, and was right.** The corpus's quotation of **80.3 is verbatim and complete**,
full stop after "stick", in **both** books. The phrase *"in relation to the crossbar"* belongs to
**Rule 37.5** — *"The determining factor for high stick **video review** is…"* — a different rule in
the Officials section. **The sweep matched 37.5 and reported it against 80.3.**

⚠️ **Attaching those words to 80.3 is exactly what the style guide forbids** — *"never attach a
quotation to a second rule number because that rule says the same thing."* **So a tool built to find
misquotation produced, and I relayed, an instruction to create one.**

**The generalisable point: a corpus-wide matcher finds the nearest string, not the cited one.** When
two rules in one book share an opening clause, the matcher cannot tell which was quoted — and its
report reads identically in both cases. **Every Tier-1 item from that sweep needs the rule number
checked, not just the text.** Three of the seven have now been independently verified by the agents
that repaired them; the rest are being verified as they are worked.

## Renderer: two-digit rule numbers voiced with a literal bracket, in 33 files

`usa-clause-citation` required **three** digits. **CARHA numbers its rules in two** — 19, 49, 55, 65,
66, 79 — so every bare CARHA clause citation fell through to `bare-number` and voiced as
*"seventy-nine(a)"*, with the bracket reaching the listener as raw characters, while the three-digit
USA Hockey form beside it was correct.

⚠️ **1,922 bare clause-citation spans exist in `content/` and 33 are the two-digit form.** Nobody had
heard them, because **CARHA was the book nothing cited** until the round that found it holds the rule
refuting a corpus negative about slap shots. **The defect and the discovery have the same cause.**

Widened to `\d{2,3}`; it cannot swallow a season or a page number because both branches require an
immediately following parenthesised clause letter. Self-test **188 → 194**, and sabotaging the digit
count back to `\d{3}` produces exactly **3 failures**, so the assertions discriminate.

## Renderer: one hand-off examined and deliberately NOT changed

`md_to_speech.py` renders `hand(s)` as *"hands"*, and an agent flagged this as **altering quoted
rulebook text in the audio layer** — USA Hockey 618 writes *"picks the puck up from the ice with
their hand(s)"*.

**Examined and left alone.** `_optional_plural`'s docstring shows this is a reasoned decision, not an
oversight: *"Read aloud the brackets are silent, so the listener got 'glove s' or 'glove'; the plural
is the form that keeps both readings true."* The alternatives are worse — silent brackets mangle the
word, and *"hand or hands"* is clumsy across the **89** instances in `content/` (`player(s)` 30,
`skate(s)` 23, `hand(s)` 12).

⚠️ **Recorded as a decision rather than repaired, and the residual risk stated: for a rule about an
act normally done with one hand, "with their hands" can be heard as requiring both.** If anyone
revisits it, the narrow fix is to leave the plural everywhere except inside quotation marks — which
the renderer can detect, since quotations are marked. **Nobody has done that and it is not obviously
worth the complexity.**

## `check_facts.py` could not accept a CARHA citation

`CITES_RE` listed five governing bodies and not CARHA — so a `Rule:` value citing only *"CARHA's
Glossary"* would be reported as **uncited**, and the obvious way to satisfy the checker is to weaken
or delete the value. ⚠️ **That is the checker causing the defect it exists to prevent**, and the
regex's own comment records England Ice Hockey being added after exactly that.

⚠️ **Zero values fail it today** — the four naming CARHA pass only because they happen to contain a
`Rule NN` string. **A latent trap closed, not a live failure fixed**, and the change cannot
newly-pass anything that fails now. CARHA, IHUK and SIHA added.

---

## The paragraph-ordinal census closed — ~50 sites opened, 50 correct, 1 imprecise

The unopened half of the census is done for `foundation/`, and **the result is a clean negative**:
NHL 69.3 (five paragraphs, openers at indent 11 against continuations at 6 — *"the fourth paragraph"*
verified exactly), 69.4, 69.7 (three paragraphs / four limbs, the relief beginning **mid-line at
6150** reproduced independently), 81.6, 82.1; USA Hockey 625(b) and 204(a); Hockey Canada 7.6(b) and
7.7(b); and the IIHF rules by **furniture-stripping**, since the indent test is useless on a book set
flush left — IIHF 81.6 is exactly two paragraphs once `SECTION · GAME FLOW` is removed from the
middle of it.

⚠️ **The one defect was a COUNT, in BODY PROSE — and my brief's headline pattern did not hold.** I
said *"every wrong ordinal sat in a Sources trailer."* The agent read `rules_primer.md`'s trailer end
to end: **all ~12 ordinal claims correct**, including the hardest — Hockey Canada 6.11(b)'s **two
separate `i./ii.` lists**, 10.1's thirteen limbs plus an unnumbered paragraph, twelve Interpretations,
617(c)(4)'s two limbs. **Starting with the trailer was still right; the prior is now weaker than I
stated it.**

⚠️ **And its own method produced a false negative it caught by reading.** `grep "excluding the
goaltender"` on flattened Hockey Canada returns **4**; the corpus says **five**. The fifth is at
6.7(e)(i), written **parenthesised and capitalised** — *"a Defending player (excluding the
Goaltender)"*. **"Had I trusted the count I would have 'corrected' a correct sentence."**

## The quotation repairs — and the most serious one is a safety-framing defect

Eight truncations restored in `foundation/`. **The worst by a distance:**

> Corpus: *"concussions are not the most common form of injury."*
> *Heads Up Hockey*: *"concussions are not the most common form of injury**, but the[y] require your
> attention for two important reasons**"*

⚠️ **The truncation makes a concussion-safety guide read as though it minimises concussion.** The
corpus quoted the setup and dropped the point. Restored, with the guide's own missing letter rendered
`the[y]` in the corpus's established bracket style. **Handed to `safety-reviewer`.**

Also restored: IIHF Situation 63.28 at **four** sites (its operative condition, *"resulting in the
puck leaving the playing surface"*); USA Hockey 608(b) at **four** (truncated before *"as a result of
checking from behind"* — the mechanism the rule is about); Hockey Canada Interpretation 5 to
6.7(c)(ii); IIHF 52.2; and IIHF 1.8's *"the lines continue vertically on the kick plate"*, which is
useful to a goalie judging the boundary.

### ⚠️ The sweep's relays are running about 40% wrong, and two would have caused damage

Of the items I relayed from the corpus-wide quotation sweep to this one agent:

- **One quotation does not exist** — no *"may assess a major and a game misconduct penalty"* in that file.
- **Three were MARKED SPLIT QUOTATIONS** — IIHF 60.4, 43.3 and 46.5 quote the condition immediately
  after, in its own italics. **Correct as written; a sweep would have damaged all three.**
- ⚠️ **One relay carried the wrong primary text.** I passed on USA Hockey 411 as continuing *"by the
  governing USA Hockey Affiliate or Junior League"*. The book reads *"by the proper authorities (USA
  Hockey Affiliate)"*. **Had the agent trusted my quotation it would have written a wrong one.**

**Combined with the Rule 80.3 / 37.5 mismatch found separately, the sweep's Tier-1 output has now
produced two relays that would have CREATED defects.** The tool finds the nearest string in the
corpus of books, not the cited one — **every hit needs its rule number verified, not just its text.**

## Two of my own premises were simply false

- **`uk_rules.md` needed no edit.** Its trapezoid treatment is already jurisdiction-scoped and
  followed by the correct hedge: *"treat an unmarked sheet as a hint rather than a ruling, because
  27.7 turns on 'the position of the puck', not on the markings."*
- ⚠️ **The Key Takeaway I held up as "the honest outlier to copy" does not exist.** `grep -rn "outside
  Britain have no" content/` returns **nothing, anywhere.** I invented a model and told an agent to
  match it. The real correct site is `rink_map_and_glossary.md:243`, and it was already right before
  the round began.

## The icing Critical was worse than relayed

Beyond the confirmed sled-section trap — `hybrid icing` occurs **once** in the USA Hockey book, at
line 7412, inside the **SLED HOCKEY** range (6828–7649) — two further facts nobody had:

- **Hockey Canada is also automatic by default.** 6.7(a) is automatic; **6.7(e)** applies hybrid only
  *"In categories of U18AAA, Junior, and at the option of the Member in Senior"*.
- **CARHA 65(b)/(c) show some leagues divide the ice at the BLUE LINES rather than the red** — a
  fifth geometry the corpus did not carry at all.

And a propagation the brief did not name: `rules_primer.md`'s Key Takeaway 2 ended *"Some youth and
rec leagues still play no-touch or touch icing"* — **a book-level fact stated as a league-level
'some'.** Now names Rule 624 and Rule 6.7(e).

⚠️ **One superlative written and withdrawn in draft:** the agent wrote *"the strictest of the four on
freezing"* having verified only two books, and cut it to *"bars freezing more broadly than USA Hockey
does"* — what it had actually checked.

---

## The diagram geometry review — the pictures, not the captions

All 112 diagrams rendered; **45 actually looked at** (several at 3.5–10× crop); all 112 analysed
numerically — resolved player anchors, route endpoints, terminal tangents, every shaded zone
polygon, glyph-pair separations, goaltender proximity, and a **77-point sample of every drawn
quadratic Bézier against every non-owner glyph.**

### Two clean negatives that close the arrivals checker's own stated blind spots

- **No drawn Bézier passes within 2.9 ft of any non-owner glyph.** Widening to 4.5 ft yields exactly
  one hit — a pass at 4.38 ft from its own receiver, which is what a pass is. The checker's header
  names *"a route whose drawn curve bows through a player"* as invisible to it. **That blind spot is
  currently empty.**
- **No route sample and no player anchor falls outside the ice surface**, corner radii included.

### MAJOR — a defined region drawn at 3.14× its definition, already written down and not closed

`positions.mjs` shades **"the high slot"** at x 54→69, y −22→+22 — **660 sq ft**, visibly cutting
through both end-zone faceoff circles. The owner, `rink_map_and_glossary.md`, draws **210 sq ft**
(y ±7), captioned *"still between the two circles"*, and `playing_without_the_puck.mjs` draws the
identical 210. **The diagram's own caption says *"between the dots and the top of the circles"*.**

Cause: `positions.mjs` uses a bare four-corner constant with **no circle-radius inset**, where the
other two apply `CIRCLE_RADIUS = 15` / `CIRCLE_EDGE = 7`.

⚠️ **`playing_without_the_puck.mjs:521-523` already records this, in prose, as a finding about
`positions.mjs`** — *"The two disagree, the owner is the glossary, and that is a finding about
positions.mjs rather than something to copy here."* **`positions.mjs` was edited this round and it
was not closed.** A finding written into a neighbouring file's comments is not a finding actioned.

⚠️ **Nothing mechanical can see it.** `check_geometry.py` validates named *points* — its only slot
assertion is that the slot's x exceeds the top of the circle. `check-arrivals.mjs` **never reads
`zones` at all.**

A second instance in the same file: `defender-d-to-d-behind-the-net` shades **"the slot"** as a
region that is **neither** the glossary's slot nor its low slot — omitting half the slot and adding
the inside of both circles — under a caption calling it *"the highest-danger ice there is"*.

### MAJOR — the corpus's closest skater arrowhead to an opposing goaltender, uncaptioned

All four such routes enumerated. The two at 7.81 ft are **safe on inspection**: both tips sit
*behind the goal line*, outside the near post, **with the goal frame physically interposed** —
verified at 4× crop. The one at 10.05 ft **carries the caveat**. `entry-wide`, at **8.60 ft**, has
its tip **in front of the net** and is the only front-of-net drive **without** it.

⚠️ **`check-arrivals.mjs` downgrades goaltender arrivals to advisory by design, so nothing will ever
fail on it.** A caption clause, not a redraw.

### MINOR — three arrowheads that read as players, in the one diagram about counting players

`nz-1-3-1`'s three 7-ft "unit slide" routes leave **almost no shaft** at render scale, so they draw
as **three free-standing solid black triangles** — and a solid triangle is the opposition-defenceman
glyph. The caption opens *"count the rows and you get one, then three, then one."*

### Recorded rather than redrawn, which is the right call

`nz-1-2-2-trap`'s opposing arrowhead misses F2 by **0.91 ft** — the tightest aim in the corpus — and
is legal **only** because its distance clears `ARRIVAL.noArrow = 9` by **1.24 ft**. It reads
correctly because F2's bar-ended route comes the other way. ⚠️ **A future coordinate nudge of 1.24 ft
would make it illegal with no diff touching a spec.** The measurement is being written into the spec
comment rather than the picture being changed.

### ⚠️ My brief would have damaged 12 correct routes

I listed *"Checking pressure = one bar"* as a notation convention to enforce. **That is HEO's mark.
This corpus deliberately draws `pressure` with TWO bars**, gives it no legend row, and discloses why
at `rink.mjs:539-542` — the one-bar form collides with the sudden-stop mark. **A reviewer enforcing
my list would have "corrected" 12 correct routes into a collision.** I also cited one disclosed
adaptation where the list has five.

⚠️ **And my rendering advice was pure waste** — the Chrome extension block, the CDP fallback, the
ports, the device-metrics override. `preview-diagrams.mjs` shells to headless Chrome itself with
`--screenshot`, writes outside the repo and touches no manifest. **All 112 render in one shell loop.**

### The honest limits, which are the most useful part

- **67 of 112 were rendered but not viewed**, and they are **named** so the gap is not silent — all 9
  `breakouts`, 5 of 6 `defending_the_rush`, 7 of 8 `defensive_zone_coverage`, all 4 `goaltender`, all
  10 `special_teams`, both `rules_primer`. Coordinate data is clean everywhere; **that is not a
  substitute for looking.**
- ⚠️ **Every render was 900–1100 px light theme.** The `nz-1-3-1` arrowhead finding and three
  glyph-touch findings **will be worst at 375 px and neither was measured there.** Named as the
  single highest-value thing left.
- **The HEO source page was never opened.** All notation judgements rest on `rink.mjs`'s header and
  the rendered legend agreeing with each other — *"exactly the kind of internal consistency that has
  been wrong here before."*
- ⚠️ **A second reader disagreed with a settled reading**: `off-wing-open-to-the-ice` route 3 is
  named at `rink.mjs:1390-1392` as the reference case an independent blind reading took correctly as
  a pass. This reviewer read it as a solid arrow. **Recorded as a disagreement, not asserted as a
  defect** — the decision is owned, argued and measured, and the sample is one.

---

## ⚠️ A negative I relayed was WRONG, and the page-furniture trap is why

I passed on an agent's first-hand verification that **NHL 82.1 "does not print an on-ice-strength
exception at all"**, and put it in two briefs as a caution against assuming the books agree.

**It does print one.** Settled directly, `sources/nhl_rules.txt:8716-8722`:

> *"Once the line change procedure has been completed (82.2), no additional player substitutions
> shall be permitted until the face-off has been completed legally and play has resumed, **except
> when a penalty or penalties are imposed that affect the on-ice strength of either or both
> teams.**"*

That is USA Hockey 204(a)'s third paragraph **word for word**, bar the `(82.2)` cross-reference.

⚠️ **The cause is the trap this project has documented and which has now fired FIVE times in one
round.** The exception sits **27 lines** after the paragraphs the first agent read, across this:

```
NATIONAL HOCKEY LEAGUE / Previous Page / 124 / Table of Contents / OFFICIAL RULES 2025-2026
```

**The agent read the first half, met the page furniture, and stopped.** Its report was honest, its
method was the documented one, and it was wrong — because reading *to the end of what looks like the
rule* is not reading to the end of the rule.

⚠️ **Nothing acted on it. That is luck, not process.** The agent that refuted it said so plainly:
*"Nothing in `winger.md` depended on the wrong claim, so nothing was corrupted by it; but any
document that acted on it would have been."*

**The lesson is narrower and more useful than "verify relays".** A relayed *positive* is
self-limiting — the next reader looks for the text and either finds it or does not. **A relayed
NEGATIVE is not: the next reader looks, finds nothing where they were told to look, and the error
confirms itself.** Every negative in this round that was re-attacked was re-attacked because someone
was told to; none surfaced on its own.

## One brief, one named defect, four found

The `winger.md` dispatch named a single truncation. The agent found **four**, and the extra three
were all found by the layer test it was asked to run rather than by the defect it was sent for:

1. The named 204(a) truncation — confirmed as a **bare** truncation, not the legitimate marked-split
   form used correctly elsewhere, which the agent checked before deciding.
2. ⚠️ **A naked hazard in the extraction layer.** A `Risk:` value voiced alone read *"…USA Hockey
   blocks neither"* — which is **verbatim the misreading `rules_primer.md`'s Common Mistakes names as
   the one that gets people penalised**. Now bounded: *"but its change window still closes at every
   stoppage."*
3. **The other half of the same sentence.** USA Hockey **636(f)** — the time-out limb — carries its
   own window: *"Time-outs must be requested during a stoppage of play prior to the conclusion of the
   line change procedure."* **Both halves of "USA Hockey blocks neither" are bounded by the same
   procedure**, and only one had been checked.
4. **Provenance**: 204(a), 636(f) and 624 were all relied on and **none was cited**.

⚠️ **And a self-catch in its own draft**: it wrote *"the Casebook's nine Rule 624 situations"* having
scanned to line 14400; the section runs to 14556 and has **24**. Caught and corrected before the
checkers ran.

⚠️ **The 636(f) timing limb is stated at exactly ONE site in the corpus**, and two documents state
the permission bare **while actively encouraging the act the limb forecloses** — *"a coach genuinely
can ice the puck and then buy the rest"*. Both dispatched.

---

## ⚠️ The coordinator's worst error of the round: an analysis that would have INVERTED a four-book divergence

I briefed two agents that USA Hockey Rule 636(f)'s timing limb *"forecloses"* the act the corpus
describes — *"a coach genuinely can ice the puck and then buy the rest"* — and instructed them to
bound the permission accordingly.

**The analysis is wrong.** 636(f) is a **promptness rule attached to every stoppage**, not an icing
condition. Verified directly, `usah.txt:4926-4949`: the clause mentions **icing zero times**. After a
USA Hockey icing there **is** a stoppage and a line change procedure, and a coach who asks inside it
**gets the time-out**.

> **A USA Hockey coach genuinely CAN ice the puck and then take the sixty seconds. What they cannot
> do is ask LATE — and that is true after any stoppage, icing or not.**

⚠️ **Why this is worse than an ordinary brief error.** Telling a reader USA Hockey forbids the
post-icing time-out states **the IIHF/NHL rule as USA Hockey's**. It does not merely omit something —
**it inverts the four-book divergence the section exists to teach.** The agent's own words:

> *"Had I written the fix the brief asked for, I would have told a reader that USA Hockey forbids the
> post-icing time-out. Four books over, that is the IIHF/NHL rule, not USA Hockey's — so the error
> would have propagated the very confusion the section exists to prevent."*

**It refused the brief, wrote the bound instead, and kept the permission explicit.** The correction
was then sent to the second agent, which still held the wrong analysis.

### Three further errors in the same brief

- **I quoted a sentence that is not in the file I sent it to.** *"…a coach genuinely can ice the puck
  and then buy the rest"* is in `game_management.md`, not `faceoffs.md`.
- **I said the timing limb is "stated at exactly ONE site in the corpus — `game_management.md`."
  Wrong twice.** `game_management.md` does **not** state it — it is the **defective** site. The limb
  *is* stated, correctly and with the right framing, at **`winger.md:551`**, which is the model, and
  which **does not claim the limb forecloses anything.** ⚠️ **The corpus already contained the correct
  reading, and I told two agents the opposite.**
- Line numbers off by three.

### What the agent found that nobody had asked for

- **A fifth limb of 636(f)** nobody has ever carried: `usah.txt:4939-4941` — if both teams want a
  time-out at one stoppage, the second request *"must be made prior to the conclusion of the first
  time-out."*
- **The Glossary defines when the window shuts** (`usah.txt:6152-6164`) — the referee's arm drops
  after the home team's five seconds, *"at this time, no further player changes may be made."*
- ⚠️ **The structural finding: 204(a) and 636(f) are bounded by the SAME object.** One line change
  procedure closes the substitution window and the time-out request window together. It wrote that
  **once, as one bound**, rather than as two unrelated hedges.
- **204(a)'s exception was dropped here too** — a fourth file.
- ⚠️ **And the safety distinction I had collapsed:** a late *line change* is warned and then a
  **minor for delay of game**, with a bench minor under 610(g). A late *time-out request* **costs
  nothing but the time-out.** My brief treated them as one hazard.

### The page-furniture trap, a sixth time — and now spliced INSIDE a sentence

The 636(f) extract reads:

> *"If a team were **88 USA Hockey Rulebook 2025-29.indd 88 2/14/25 9:28 AM Throwing Stick/Object**
> to request to use their time-out during the same stoppage…"*

**Furniture inside the sentence, not between paragraphs.** This is the same mechanism that made an
agent report NHL 82.1's exception absent, and it is why the corpus's standing instruction is to read
by **line range** and to flatten before believing any absence.

**Six firings in one round: the sled shadow ×3, NHL 82.1, IIHF 81.6's `SECTION · GAME FLOW`, and this.**

---

## Dimension table — the closing wave, written after every agent finished

⚠️ **This table supersedes the three before it.** Each of those went stale the moment work continued
past it, and a commit gate blocked on exactly that: the last one cited `--self-test` at **180** and
**5,138 facts** against a staged **194** and **5,173**. **Figures below are from the quiet tree after
the final agent returned**, and the table is written last for that reason.

| | Dimension | Covered by | Result |
|---|---|---|---|
| **D1** | Rules accuracy | `rules-verifier` ×7, all against primary text on disk | **CHECKED.** CARHA Rule 79(a) refuted a corpus negative on slap shots; USA Hockey 624 refuted *"most leagues use hybrid icing"*; NHL 82.1's exception refuted a relayed negative. |
| **D2** | Rules travelling without exceptions | the round's dominant class | **CHECKED, and it is the round's spine.** 81.4's three exceptions (17 sites, 4 documents carrying none); 625(b)'s carve-outs and push-in relief; **204(a)'s on-ice-strength exception in four files**; 636(f)'s promptness bound; CARHA 66(b)'s defender-push relief; 614(c)'s limb (1). |
| **D3** | Rule-set divergence | `rules-verifier` | **CHECKED.** Trapezoid restated book-by-book at 15 sites in 6 formulations; hybrid vs automatic icing across four books plus CARHA's blue-line geometry; 63.8 ¶2's **two** exceptions kept distinct from 81.4's three. |
| **D4** | Citation integrity | `source-verifier` ×3 | **CHECKED.** 71 PMIDs, one retraction (already labelled); **a fabricated quotation removed**; 5,011 quotations matched against flattened primaries. |
| **D5** | Provenance | `source-verifier` | **CHECKED.** The cervical quantifier re-attributed to USA Hockey; a finding re-pointed from a review to the paper that measured it; a diagram caption's Sportlogiq caveat restored. |
| **D6** | Negative existence claims | `content-reviewer`, `rules-verifier` | **CHECKED, ~15 attacked by concept.** 14 upheld, **1 refuted** (*"no book settles the blue-line case"* — all four settle it, by the puck). ⚠️ **The sport-science negatives are UNTOUCHED** — no literature corpus on disk. |
| **D7** | The cardinal rule | `content-reviewer` | **CHECKED.** ~30 unsourced prevalence claims against ~102 sound; residue labelled, not deleted. |
| **D8** | Numeric ownership | coordinator + agents | **CHECKED.** The high slot drawn at **3.14×** its owner's definition; `warn-inline` 588→609 misattributed to the plugin when the plugin produced 5. |
| **D9** | The summary layer | `content-reviewer`, `facts-reviewer` | **CHECKED.** `defender.md`'s boards override absent from Key Takeaways; the barbell and body-checking caveats; a Common Mistakes bullet quoting HC 7.3(a) as *"anyone"*. |
| **D10** | The key-facts layer | `facts-reviewer` ×4 | **CHECKED.** Label audit of **214 `Rule:` and 74 `Convention:`** values; four prevalence claims under `Rule:`; `--hedges` read hit by hit, **27 of 28 false positives**. |
| **D11** | Reader safety | `safety-reviewer` ×4 | **CHECKED.** IIHF 101.1's two provisos; 64.1's second limb; 76.5 at the draw; the *Heads Up Hockey* truncation that made a concussion guide read as minimising concussion; the caption carve-out. |
| **D12** | Read-aloud integrity | renderer run by 6 agents | **CHECKED.** Two-digit citations voiced with a literal bracket in 33 files; spelled-unit ranges; a broken referent visible **only** in audio. |
| **D13** | Folklore | `content-reviewer` | **PARTIAL.** The prevalence census covers the quantified form. ⚠️ **The unquantified form — *"rec leagues don't call this"* — matches no census run and is OPEN.** |
| **D14** | Structure, style, terminology | `content-reviewer` | **PARTIAL.** `limb` is undefined in 26 documents; the clause/paragraph/limb convention is recorded, not enforced. |
| **D15** | The rendered site | `site-reviewer` ×2 | **CHECKED BY OBSERVATION, not declaration.** All 48 sitemap URLs at two widths, twelve documents in both themes, **all 620 `warn-inline` spans** audited structurally, zero console errors across 96 loads, contrast AA in both themes. |

### Figures, from the quiet tree

`check_facts` **813 blocks · 5,173 facts** · `check_counts` **37 documents · 920,374 words · 69.7
hours** · `md_to_speech --self-test` **194 assertions** · `check_chunk_tails` 6 · `check_pointers` 5
· `check_geometry` **58 assertions over 19 named positions** · `check-arrivals` **112 diagrams · 171
routes · 0 hard, 7 advisory** (all seven individually adjudicated) · `npm run build` **50 pages ·
9,687 internal links, all resolving**.

### ⚠️ What this round could not have found

- **The sport-science negatives.** Ten-plus claims resting on *the absence of a study*, in files
  whose sources are not on disk. **The largest unattacked block in the corpus.**
- **454 quotations whose primaries are web pages** — not verified and not disproved.
- **67 of 112 diagrams rendered but never looked at**, and every render light-theme at ~1100 px.
- **The unquantified prevalence claim.** Five censuses have now been keyed on vocabulary; the sixth
  needs to be keyed on the **population noun** and read.
- **A defect in a section whose heading advertises nothing.** Named by four separate agents as the
  class each of their methods was structurally blind to. **It is still open, and every method tried
  so far has said so in the same words.**
