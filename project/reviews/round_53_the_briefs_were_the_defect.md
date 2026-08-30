# Round 53 — *attacking the briefs, not the corpus*

*Figures re-derived from disk at close, not carried forward.*

| | |
|---|---|
| Documents changed | **36 of 37** in `content/`, plus `sources/`, `scripts/`, `.claude/agents/`, the style guide and `site/` |
| Agents dispatched | **21**, in six waves, on disjoint file sets |
| Reviewers run | rules-verifier · source-verifier · content-reviewer · safety-reviewer · site-reviewer |
| Wrong premises caught by "refute the brief first" | ⚠️ **No total is stated, here or anywhere.** They are tabulated where they were found — see *"Measured: how wrong the briefs were"* for the relayed-site-list and brief-error measurements, and the wave sections for the rest. **The true figure is higher than any table here and has not been counted:** agents reported wrong premises in passing that nobody tallied, and this record was extended after its own header was written — which is exactly how the number that used to sit in this cell went stale. |
| Corpus size | Started at **696,430 words / 52.8 hours** (`git show 6d253d8:…OPEN_ITEMS.md`). ⚠️ **The closing figure is deliberately NOT stated here.** It is owned by `check_counts.py --update`, which writes it into `project/plans/OPEN_ITEMS.md` and **does not scan `project/reviews/`** — so a figure copied into this record goes stale on the next `content/` edit and no checker sees it. **It went stale twice in this round alone**, once by 22,180 words. **Read it from the plan.** |
| External links | **666 checked · 4 new breakages · 1 dead URL in 3 documents** |
| New primary sources obtained | IIHF Situation Handbook **v1.1, Aug 2025** (recorded as *"never obtained"* since round 47) · IIHF **Rulebook and Situation Handbook 2026/27** · a `-layout` re-extraction of the USA Hockey rules, MD5-verified against the publisher PDF |
| ⚠️ Critical found | **The IIHF published 2026/27 books.** The corpus's IIHF layer is 2025/26 across 13 documents, and Rule 76.6 now **ejects** the centre for encroachment where 2025/26 gave a warning |
| Date | 2026-08-27 to 2026-08-29 |

⚠️ **No wrong-premise total is stated in this record.** They are tabulated in the sections where
they were found. **Any figure quoted out of those tables goes stale the moment the record is
extended — which is exactly what happened to the number that used to sit here, and to the pointer
in `CLAUDE.md` that quoted it.** Read the tables, not a summary of them.

⚠️ **No criticals count is given either, and that is deliberate.** This round's corrections are almost all
of one shape — a limit or exception attributed to more books than carry it — and grading them
individually would be inventing a severity scale to fill a table cell. The findings are set out
below with their evidence; **a reader who wants a number should count the ones they think qualify,
which is more honest than a figure this record cannot defend.** ([D8](../review_process.md).)

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | ✅ | `rules-verifier` ×3 | ~70 quotations re-derived verbatim; **no fabricated rule number or invented wording found anywhere**. Rules 10.1, 10.4, 44, 52, 55, 56, 57, 61, 63.2, 76, 83.3, 610, 613, 616, 618, 625, 639, 640, 602, HC 3.2/6.2/6.5/8.3/8.6/8.7/8.8 |
| D2 | Rules travelling without exceptions | ✅ | `rules-verifier` ×3, `commit-gate` ×3 | **The round's defining defect, six times.** After-the-whistle (3 books not 4); the stick lift at the hands (3 not 4, in six places); the goalie's broken stick; the tag-up classification floor; USA Hockey 640(g)/(h) shipped without its (b–f) limit at seven sites; NHL 44.5's mandatory game misconduct dropped |
| D3 | Rule-set divergence | ✅ | `rules-verifier` ×3 | IIHF 44.1's crouching clause found described as *"the NHL's in the same words"* in two Sources trailers; IIHF 56.4's sufficiency test restored; NHL/IIHF 57.1-vs-57.2 *"trip or fall"* / *"trip and fall"* conflict recorded as unresolved |
| D4 | Citation integrity | ✅ | `source-verifier` ×2, `commit-gate` | 666 external URLs checked; **4 new breakages**; a dead IIHF hub in 3 documents; ⚠️ **a citation whose link text named one document and whose URL pointed at another** — invisible to every checker; ⚠️ **an agent fabricated a plausible URL and caught it by grepping its own output** |
| D5 | Provenance | 🟡 | `source-verifier` ×2 | ⚠️ **A cited book was not on disk** — *Heads Up Hockey*, the authority for the corpus's spinal-injury mechanism. Fetched, and **`-layout` splices its columns mid-sentence**, inverting the repo's standing rule. **Per-file provenance coverage of the ~1,000 words of new Sources prose is unestablished** |
| D6 | Negative existence claims | ✅ | `rules-verifier` ×2, `safety-reviewer` | Five attacked and upheld with the search shape recorded for each. ⚠️ **One refuted**: USA Hockey *does* write the goalie broken-stick allowance — in its **Sled Hockey** section. **A negative scoped to the part of a book everyone assumes is the whole book is a claim about the searcher's habits** |
| D7 | The cardinal rule | ✅ | `content-reviewer`, `rules-verifier` | The USA Hockey tier cell added corpus-wide; ⚠️ **the obvious wording would have been unsafe** — 625 has no major, but the book *routes* the violent pick to 640(g)/(h) and 602(a) |
| D8 | Numeric ownership | ✅ | `commit-gate` ×3 | ⚠️ **Committed by this round in the two files that define it.** Four different counts of the round's own wrong premises across four documents — `CLAUDE.md` *thirteen*, `review_process.md` *eleven*, this record *sixteen* and *19* — **each stated flatly, each disagreeing.** Both governing files also appended a corpus comparison this record explicitly refuses to support. Corrected: both now point at the owner and carry its qualification |
| D9 | The summary layer | ✅ | `content-reviewer`, `rules-verifier` | Key Takeaways found dropping a trigger their own bodies carried four times over (`rules_primer` KT6), naming a floor as the whole tier (`body_contact` KT2), and stating an unhedged classification (`defender` KT3) |
| D10 | The key-facts layer | 🟡 | `rules-verifier` ×2, **`facts-reviewer` ×3** — ⚠️ **this row read "`facts-reviewer` did NOT run this round" until `commit-gate`'s third pass caught it contradicting its own body 2,800 lines below. It ran three times.** The row stays 🟡 for a DIFFERENT reason, which was stated nowhere: the layer was cleared at **4,904** facts and the staged tree count is whatever `check_facts.py` reports — **do not read a figure from this row** — a 32-fact, 3-block delta the clearing reviewer never read | ⚠️ **Where four of the round's defects were made.** See "the 300-character cap" below. ⚠️ **`equipment.md` has no facts blocks at all** — so its highest-consequence British equipment rule never reaches the extracted layer, and `check_facts.py` cannot see a document that has none |
| D11 | Reader safety | 🟡 | `safety-reviewer` ×2 | First pass: **no critical, no Major**; every cross-book tier tested held. It reached **13 of 35** changed documents and named the 12 it did not open. ⚠️ **`commit-gate` blocked on that**, counting **57 rule-bearing added lines** in the twelve; a second pass was run |
| D12 | Read-aloud integrity | ✅ | `md_to_speech.py` run repeatedly on the changed documents | ⚠️ **This row previously said no audio was synthesised. It was stale.** The renderer was run on `body_contact_and_battles`, `faceoffs`, `defensive_zone_coverage`, `on_ice_communication`, `conditioning_and_recovery` and the full corpus, and it settled four questions no reading could: **a facts line IS voiced standalone** (own `<p>`, 300 ms either side) while **a bold numbered lead-in is NOT** — which downgraded a Major to a Minor; **a wide table is not narrated at all**, so "it's in the body" is not propagation; **21 penalty tiers were narrating as distances**; and a hyphenated interval inside a quotation narrated as *"nought point one eight-one point four zero"*, caught by an agent re-rendering its own draft. `--self-test`: ****re-run `--self-test`; this row said 134 while four lines in this file said 146**, 0 failures.** |
| D13 | Folklore | ✅ | `content-reviewer` | The prevalence family labelled; a summary layer found asserting a corpus-wide prevalence claim **its own body never makes** |
| D14 | Structure, style, cross-links | ✅ | `content-reviewer` ×2 | ⚠️ **Nine change-history sentences** removed from `content/` — the style guide bans them by name, and one sat in the **teaching body**. A heading renamed with its inbound anchor in the same pass, after two earlier attempts broke `check_links` |
| D15 | The rendered site | ✅ | `site-reviewer` | 49 routes × 2 cells, **zero console errors, zero off-origin requests**. ⚠️ **Found the round's own corrections being hidden by the renderer** — six documents' ⚠️ notes filed into a collapsed box and reordered ahead of the note referencing them. Fixed in the plugin |

**Mechanical checks:** `check_links.py` ☑ · `check_facts.py` ☑ · `check_absolutes.py` ☑ · `check_geometry.py` ☑ · `check_secrets.py` ☑ · `check-arrivals.mjs` ☑ (0 hard / 7 advisory, unchanged) · `npm run build` ☑ · `md_to_speech.py --self-test` ☑ · `check_counts.py --update` — last, before staging

⚠️ **None of them can see this round's defects.** Every checker passed **before and after** the clipping ladder that was wrong in both books, the false universal that two books contradict, the 640 tier shipped without its limit, and the four-way count contradiction. `check_absolutes.py` was clean on `equipment.md`'s capped penalty because the sentence read as a positive statement.

**Document coverage:** **36 of 37** `content/` documents changed. ⚠️ **This paragraph twice stated a C6 gap that the body of this same record had closed — first naming ten documents as unreviewed after four were covered, then naming the same three files as *remaining* in the sentence that says a cold `safety-reviewer` read them.** `commit-gate` blocked on it at the third pass and again at the fourth. ⚠️ **AND THEN IT DID IT A THIRD TIME, IN THE OPPOSITE DIRECTION.** This line previously asserted that *"every changed document has now been read by a reviewer"* and pointed at a section *"the six documents nobody had opened"* — **which does not exist in this record** — citing *"two Criticals and five Majors"*, **a figure that appears nowhere else in this file and was never counted.** Meanwhile the table below says flatly *"C11 is not satisfied for them"* for fifteen files. **The record contradicted itself on C11, and the side claiming closure cited a section that is not there.** The honest position is the table's, and the fifteen have now been sent to `rules-verifier` and `safety-reviewer`. ⚠️ **This is the second time a stale summary in this record has asserted a safety-coverage gap that did not exist, and `review_history.md` is reconstructed from these records.**

---

## The brief

Round 52 closed by naming what it could not reach. This round was scoped to work
those rows — and it turned into something else by the third dispatch, because the
rows kept being wrong.

The method that produced everything below is: **hand each agent the plan row as a
hypothesis, with the instruction to refute it before fixing it**, and require the
agent to verify every quotation in the brief on disk rather than carrying it in.
That instruction was not decoration. It caught the following, all of them mine:

| What I briefed | What the book says |
|---|---|
| Hockey Canada's slew-footing double minor is a **ceiling** | **8.8(c) escalates past the forbidden major to a MATCH penalty** — discretionary on violence, **mandatory on injury**. A reader told "double minor" has been told a four-minute foul. |
| IIHF 46.6, quoted for a retaliation carve-out | **My quotation dropped the trailing conditional**, *"if the criteria for 'fighting back' with a few punches is not fulfilled"* — **the whole carve-out**. Carried in as given it would have shipped a half-rule. |
| A retaliation **divergence** between the books | **It runs backwards.** The "wash" is not USA Hockey's position — it is the practice its own Casebook describes **in order to condemn it**. All five books point the same way. Nothing was added. |
| Supplementary discipline is IIHF Rules **40.2–40.5** | **40.5 is not a category.** It is the *process* by which referees pick one after the game. |
| USA Hockey high-sticking, Rule 621 Situations **1–5** | **Rule 621 has fifteen.** All read. |
| `time_and_space.md`'s superlative contradicts a **Key Takeaway** | It is a **body lead**. The corpus never had two Key Takeaways in flat contradiction; the defect was real and one layer off. |
| Ten link-baseline rows are **stubs served with HTTP 200**, and this **outranks everything else open** | **It was gzip.** Same URL, `--compressed` 31,203 bytes vs 169,385 without, **byte-identical rendered content**. The "perfect correlation" was the gzip ratio band. ⚠️ **My largest error of the round, and I escalated it into another agent's brief as the top priority.** |
| IIHF Rule 10.4 is missing a paragraph, so the corpus asserts a **false four-book equivalence** | **The paragraph is intact.** I read it with too short a `sed` window. A page number and running header are spliced **mid-clause** at a page break. **The corpus was right; no edit was warranted.** |

**Eight** wrong premises in one round, in briefs written by someone who had just read the
sources — and **the two largest are the two I was most confident about**, one of which I
promoted to another agent's top priority. **The rate is the finding**, and so is the
correlation between confidence and error. It is why no agent in this project is asked to
implement a plan row, and why every one is asked to refute it first.

---

## Findings

### The defect shape that recurred: a rule stated correctly, applied wrongly

Three of this round's confirmed findings are the same shape, and none of them is a
misquotation. Every sentence involved is verbatim-accurate about its book.

**F1 · The accidental-trip relief sat 1,800 characters from the sentence it corrects.**
NHL/IIHF 57.1, identical in both books: *"Accidental trips which occur simultaneously
with a completed play will not be penalized."* `rules_primer.md` carried it — as a
trailing italic framed as "the thing to look up", downstream of the puck-first
sentence it exists to qualify. **Common Mistakes reproduced the same arrangement with
no counterweight at all.** The cross-book negative was re-derived independently rather
than inherited: zero hits in the other three books, with **all 8** USA Hockey and
**all 22** Hockey Canada occurrences of *"accidental"* read individually. USA Hockey
is now positively sourced from Casebook 639 Sit. 1 — *"must the fouled player fall to
the ice? **No.**"*

> **The book's own error is recorded, not repaired.** That situation says the rule
> reads *"trip or fall"*; USAH 639 Note 1 actually reads *"lose balance or fall"*.

**F2 · A ranking that escalated as it travelled outward from the body.**
`zone_entries.md` carried one unsourced claim in **four** forms, each stronger than the
last: Overview *"among the most under-used"* → §5 *"the single most valuable and least
used"* → Common Mistakes *"almost nobody uses it"* → **Key Takeaway *"THE most
under-used skill in amateur hockey"***. The strongest sat in Common Mistakes, a layer
no mapping pass had covered. `passing_and_receiving.md` had the same shape in
miniature: body and facts said *"most over-attempted **pass**"*, Common Mistakes said
*"most over-attempted **play**"* — strictly wider, in the layer the podcast extracts.

The repair method was **extract, never author**: every replacement already existed in
the same section, because no source was available for a new claim.

**F3 · A summary layer that was AHEAD of its body.** `rules_primer.md` Key Takeaway 8
already carried the correct four-book slew-footing tier *including* Hockey Canada's
match penalty, while the body carried the double minor alone. Propagation is assumed
to run body → summary; this ran the other way, and no checker looks in that direction.

---

## The Casebook's first round on disk, and what it overturned

The 476-page USA Hockey Casebook arrived in round 52. **This is the first round that
searched it**, and it refuted two negatives the corpus had been asserting across eight
sites.

**The corpus said USA Hockey writes no fend-off permission.** It does — Standard of Play
**Situation 6**: *"the player with the puck uses the free arm to fend off the opponent
and maintain their body position."* The playing rules genuinely have none, which is why
the negative survived earlier rounds; the permission lives in the other volume. ⚠️ **It
is narrower than the NHL's in ways a reader must have**: you must control the puck, the
position must be one you *"legally established"*, and it ends *"if they grab the stick,
sweater or arm of the opponent, or use the free arm to push off and create space, a
penalty should be assessed."*

**The corpus said USA Hockey writes no puck-first carve-out for tripping.** It does, and
it is **wider** than the NHL's, which only downgrades a penalty shot to a minor: Rule
**639 Situation 2** declines to penalise *"where the defending player has clearly
attempted to and then played the puck."*

> ⚠️ **Its two limits are the safety-critical half.** The stick remains your
> responsibility after a poke check; the carve-out reverses if you lost the puck
> *because* you were tripped; and **Situation 4 denies it to a slide entirely** —
> leaving your feet is tripping *"regardless of who gains possession of the puck"*,
> the sole exception being knees dropped to block a shot.

Five further negatives were attacked with the new book and **upheld** — which is a
result, not a non-result, because each was re-derived rather than assumed. One got
**stronger**: Rule 625 Situation 10 reinforces the flat crease bar with *"the Referee
shall have no alternative but to disallow the goal."* Of **31 disclosure statements
inventoried across 14 files, 24 remain true and were left verbatim**; two files got no
edits at all.

⚠️ **And the book contradicts itself.** **621(Note)** defines high-sticking as carrying
the stick high *"and makes contact"*; **Casebook Situation 2** answers *"no"* to whether
contact must occur. The corpus currently carries one side. The README already records a
second such case — Situations 40/41 cite a sub-clause **630(d.3) that is not in the
printed rule**. Quoting a casebook correctly does not tell a reader which way it will be
called in their rink, and **a rulebook that disagrees with itself is a policy question
for this project, not a defect to resolve silently.**

---

## The critical: a permission that was true in two books of four

`rules_primer.md` carried, **bolded and unscoped**: *"A goalie may carry on playing with a
broken stick until a stoppage… **A goalie is not required to drop it — the opposite of
the skater rule.**"*

⚠️ **Read aloud alone — which is how the podcast delivers a bullet — a USA Hockey or
Hockey Canada goalie is told they may play on.** They take a minor, and their team kills
it a man short with the backup cold.

- **USAH 605(a)** applies the drop rule to *"a player **or goalkeeper**"*.
- **Hockey Canada 3.2(c)** — **the fourth book nobody had checked** — is an express bar:
  ***"A goaltender may not continue to play with a broken stick of any kind."***

The permission is NHL 10.4 / IIHF 10.4 only. The reviewer found the Hockey Canada bar
**because it grepped a fourth book on a question the referral had framed as three-book**.

**And the position document said nothing at all.** `goaltender.md` returned **zero hits
for "broken" across 1,127 lines** — *"the position document a goalie actually reads said
nothing about the one rule in the book that is written differently for them, in three of
four books."* All four layers empty.

> **The answer to "so what do I do instead?" came from the books, not from improvisation.**
> A teammate-handed **skater's stick is legal** (USAH Casebook 605 Sit. 5; HC 3.2(c)) —
> with a Hockey Canada trap the corpus had nowhere. **Interpretation 1 to 3.2(c):** if a
> teammate *slides* the stick and the goaltender **picks it up**, that is a minor under
> 10.6(a); none if they do not. **Leave a slid stick where it lies.**

---

## A fourth extraction failure mode, and three readers wrong about intact text

The three documented modes are hyphen-joins, two-column interleaving, and both-at-once.
**This is a fourth, and it defeats every technique written for the first three.**

IIHF Rule 10.4, whitespace-flattened, actually reads:

> *"A goalkeeper may participate in the play using a skater's stick until such time as
> they are legally* **`03`** *provided with a replacement goalkeeper's stick.*
> **`SECTION · EQUIPMENT`** *For an infraction…"*

**A page number and a running header, spliced into the middle of the clause** at a page
break. Plain grep fails. `-layout` grep fails. And a `sed` window sized to the rule fails
too, because the paragraph straddles the break — so the text does not look garbled, it
**looks absent**.

⚠️ **It produced two readers with opposite wrong conclusions about the same intact text.**
A `safety-reviewer` re-extracted the book, saw the sentence stop at *"must receive their
stick from"*, and reported Rule 10.4 truncated — **but refused to weaken the corpus claim
on the strength of it**, and referred it out instead. That refusal is exactly the
behaviour non-negotiable 3 exists to produce. The dispatching agent then read the
canonical file with too short a window, concluded the paragraph was **missing entirely**,
and was one step from recording that the corpus asserted a false four-book equivalence.

**The corpus's claim was correct the whole time. No edit was warranted, and none was
made.** Both `sources/README.md` and the style guide now carry the mode, with the rule
that near a page boundary *"not present" is unproven until a flattened read has looked.*

---

## The escalation that was wrong, and the better finding underneath it

⚠️ **This section replaces one that asserted the opposite, and the replacement is the
more useful record.**

A source-verifier noticed that ten `link_baseline.tsv` rows on one host clustered at
**30–34 KB** while every refetched row on that host sat at **168–192 KB**, with a perfect
correlation to an empty refetch note. Two test fetches returned ~170 KB. I read that as
**stubs served with HTTP 200**, concluded that any past grep against them *"was grepping
a shell, not a page"*, wrote it up as the round's most consequential finding, and briefed
the next agent that it **outranked everything else open**.

**It was gzip.** The agent I sent to extend it refuted it on one URL in one command:

```
curl --compressed  →  31,203 bytes   rendered text: 4,680 chars
curl (no flag)     → 169,385 bytes   rendered text: 4,680 chars
```

The `bytes` column is a **wire-byte count**. The "perfect correlation with no exceptions"
is the **gzip ratio band for HTML, 2.2–6.9×** — and it explains the entire signature table,
not just those ten rows. The two proof-fetches were gzip-versus-identity of the same page.
⚠️ **And the escalation failed on its own terms**: `curl --compressed` writes *decompressed*
HTML to disk, so those greps were valid. All ten rows were fetched and **none was ever
defective**; eleven baseline rows asserting the stub story have been corrected, including
the two written under it.

> **Every historical byte count in this baseline is uninterpretable across rows captured
> by different clients.** Any past finding resting on a byte comparison — *including the
> one that launched this task* — should be assumed unreliable until the page is refetched
> and its **rendered text** measured.

### What the corrected method actually convicted

The replacement signature is **rendered-text length**, and it works:

- **`europepmc.org` — 51 rows.** **679 rendered characters** of Angular navigation chrome:
  no article title, no abstract, unchanged compressed or not, unchanged with a cookie jar.
  **50 PMIDs across 13 citation lines have never been body-verifiable**, because that URL
  has never served article text to a non-JS client. ⚠️ **The fix path costs nothing** — the
  EBI REST API — and two claims were verified through it immediately, including confirmation
  that the Vigh-Larsen clause sits **in the same sentence** as the figure the corpus says it does.
- **`www.usahockeyrulebook.com` — 33 rendered characters**, with the site root and a specific
  casebook page returning the **identical body**, while substantial rule wording is quoted
  against it.
- **`sagepub` and `tandfonline`** — cookie walls, **defeated by a curl cookie jar**.

**Twenty-two hosts were cleared explicitly**, so the next round does not re-run them.

### And the false-negative mechanism the stub theory was reaching for does exist

Searching the self-talk abstract for **`0.48`** returns nothing. The page writes **`.48`**.

> *A verifier who grepped for the corpus's rendering of the number would have reported
> "string not found" on a page that plainly carries the figure — a false negative with no
> byte-count anomaly to warn anyone.*

**Grep the distinctive words, never the normalised number.**

### The question the whole excursion existed to answer

**No disclosure in the corpus was manufactured by a failed fetch.** All 34 were checked
against the convicted hosts, and every one traces to the *underlying evidence* rather than
to a fetch. Two disclosures went the other way and were **overturned by simply fetching**:
five PubMed rows marked unreachable are reachable once the cookie jar is **warmed** on the
site root first, and a `howtohockey.com` row recorded at **403 / 373 B** now returns
**200 / 28,824 B**. *A 403 is not an absence* — proved again, against this corpus's own
baseline.

---

## Negatives attacked, and what attacking them turned up

Both of the round's most useful findings came from attacking a claim the corpus had
**honestly disclosed as unchecked** — not from looking for defects.

- **"Nothing in this repository measures how often anything is used."** The disclosure
  **held.** `sources/` was listed in full: seven rulebook extractions, two coaching
  PDFs, a drill-symbol sheet, a record book. No tracking study, no usage census.
  ⚠️ **But the attack found the opposite thing:** `sources/iihf_coachdev_off_tactics.txt`
  chapter 19 carries a section titled **"Delaying"** — IIHF Coach Development Level I,
  describing the manoeuvre `zone_entries.md` teaches, in the corpus's own terms
  (*"create time and space"*), **while that document cites only Johnston & Walter,
  labelled "convention only."** A governing-body coaching publication, on disk, uncited.

- **"No windup or follow-through carve-out could be found in USA Hockey."** Closed —
  **because the check was finally performed**, eight greps returning zero. Closing it
  **strengthens** the warning: Casebook 621 Sit. 2 says *"It is **not** a requirement
  that a stick make contact above shoulder height for high sticking to be called"*, and
  Sit. 3 reaches **major + game misconduct or a match penalty** for reckless endangerment.

---

## Agents that caught themselves

Recorded because the count is the evidence that the instruction works, and because a
self-catch is the only defect class this project has no external check for.

- A verifier's own draft stated **"a major plus a game misconduct"** — one half of the
  two-part tier *"...or a match penalty"*. **The exact defect class it had been sent to
  fix.** Caught before the checkers ran.
- The style-guide author wrote *"it is the only check in this project with that
  property"*; `check_absolutes.py` shares it. Rewritten.
- The same author wrote that a negative surviving both extractions *"is worth
  something"* — **one half of the extraction rule**, since the third failure mode
  (interleaving under *both*) defeats exactly that. Carve-out added inline.
- The retaliation agent's first draft said the non-retaliator *"should come out ahead"*;
  **Casebook Standard of Play Situation 25 contradicted its own edit** — *"both players
  should be assessed minor penalties for roughing"* — and it rewrote.

---

## Extraction traps found this round

Both are cases where a grep returns zero and the text is present.

- **`"aggressor should be identified"` crosses a line wrap** in the USA Hockey
  extraction and returns zero on a plain grep of that occurrence.
- The IIHF Table 16 phrase `"loss of goal only"` returns **0** plain and **0**
  whitespace-flattened; the table interleaves under **both** extractions and is
  readable only positionally, `sed -n '9960,10055p'`.

---

## Disclosures re-verified and upheld

- The usage-measurement negative (above) — attacked directly, holds.
- The IIHF Situation Handbook version gap: the copy on disk is stamped **v1.0, June
  2025**, and the document already disclosed that a 1.1 exists and was not read. All
  four Rule 57 entries read; every one is a penalty-shot question. **Disclosure stays.**
- **A filename/version ambiguity was found and deliberately not acted on.** Sources cite
  `…rulebook_22122025-v1.pdf` while the extraction self-stamps **v1.1**. Rather than
  tidy it, the agent re-checked **every sentence it quoted against both v1.0 and v1.1**
  — all identical — reported the quotations as version-robust, and changed nothing.

---

## What this method could not have found

**The family is defined by its grammar, and every pass this round searched vocabulary.**
That is the round's own closing agent, about its own work, and it is the most valuable
sentence produced this round. The prevalence family was hunted with
`under-used`, `least used`, `over-attempted`. The same defect written as *"almost every
wasted entry at rec and youth level"*, *"both are usually unsaid"*, *"nine times out of
ten"*, *"you will see this every game"* **matches none of those searches**. This is the
CR-FACTS shape, which needed nine search methods because the first eight were lexical —
so **the map produced this round is a lower bound of unknown tightness.**

- **Anything requiring a book not on disk.** The IIHF **Disciplinary Code** is the live
  case: the Rule Book was proven to contain no tariff, and whether the Code's lengths
  make the IIHF harsher than the NHL is unknowable here. Same for a lineated **IHUK
  In-House Rules** copy — quoted from a flat extraction with no source PDF present, so
  completeness is unconfirmed.
- **Silent divergence in rules nobody flagged.** NHL 23.1 *"Ten minutes"* vs IIHF
  *"Twenty (20) minutes"* was found only by reading 23.1 in full while chasing something
  else. A systematic four-book diff of every cited rule would find more; grepping
  claim-by-claim will not.
- **Paraphrase that is true of no book.** F1's shape — every quotation verbatim, the
  application wrong — is invisible to grep. Two instances were found because they were
  pointed at. There is no method here that would find a third.
- **Whether any of it reads correctly aloud.** Several repaired bullets are now long,
  and the corpus is heard one sentence at a time. One three-deep em-dash chain and one
  ambiguous *"Neither book"* were removed by their author; others were declared likely
  to remain. **The renderer WAS run this round**, after that sentence was written: 37 documents, 1,763 chunks, **0 malformed SSML**, and 113 of 146 leaked roman clause markers closed. But rendering proves the SSML is *well-formed*, not that a lengthened bullet is *comprehensible* — **nobody has listened to any of it.**
- **Whether "it feels like retreating" is true.** An unsourced psychological assertion
  was promoted from body text into four layers of a document **including its Key
  Takeaways**, on the strength of already being present. Nothing done this round tests it.

---

## One string, three delivery paths

The unsourced ranking *"the most commonly missed assignment in hockey"* was reported as a
rendered `<figcaption>`. It was more than that: **the same string was also the SVG
`<title>`** — the accessible name for screen readers, **and** the text `md_to_speech.py`
reads aloud. **One source line reached a reader three ways, and only one of the three was
visible to the person who reported it.**

Fixed at source and rebuilt, one line of generated diff. The mechanism was kept and
*"the most dangerous player **in the picture**"* was deliberately left standing — **that
one is scoped to the diagram, and the diagram supports it.**

The companion finding went the other way. A source comment justified an arrow with a
sentence that no longer exists in the corpus, which looked like a stale-diagram defect.
⚠️ **The drawing is still right.** The arrow draws *"F3 recovers towards the middle and
replaces them at the blue line"* — the clause that **survived the rewrite unchanged**;
only the rationale hanging off it moved. And the caption already discharged the cardinal
rule for that arrow, naming three real alternatives and *"ask which yours is"* — it had
even already stated the substance of the *new* Common Mistakes sentence another agent
wrote in the same working tree. **The diagram anticipated the rewrite.** The comment now
quotes only the durable clause, because *"quoting the volatile sentence again would have
rebuilt the same trap."*

---

## Nine negative-existence claims attacked: two refuted, one mis-scoped, six upheld

The largest unverified surface the round inherited, and the results split three ways.

**Refuted:** regroup counts exist for professionals — **826 neutral-zone regroups across
198 AHL games**. And rush goals *are* classified by the play that produced them, by two
independent public trackers.

**Upheld but mis-scoped:** rush goals are counted publicly; **nothing classifies them by
which coverage failed**, which is the narrower thing the corpus actually needs.

**Upheld and now evidenced rather than asserted:** the forecheck census. The 2016-17
Hockey-Graphs Forechecking Project **defined `Formation: (1-2-2, 2-1-2, 2-3, etc)` as a
tracked variable and published no counts** — a far stronger statement of absence than
"nobody publishes this."

### The disclosure that guarded the wrong half of its own sentence

`how_to_watch_hockey.md` read *"Most amateur players glide for around a third of their
shift. **Professionals almost never coast except deliberately.**"* The disclosure covered
only the amateur half. ⚠️ **The professional half is measured, and it runs the other way**
— Bracko puts two-foot glide **first, at 39% of on-ice time** — and **`skating.md` already
carried "39.0%" with its sample and limits.** *A sibling document contradicted the one it
linked to.*

> **And the repair refused to trade one overclaim for another.** That 39% counts a
> *balance position* averaging 1.5 seconds that every other characteristic returns to —
> **not effort** — so it does not license "professionals glide more than amateurs".
> *"Right number, wrong concept, and I said so in the text."*

### A "hard 403" that was a tooling artefact, and the corpus's own file already knew

`on_ice_communication.md` says a cited page *"returns a hard 403, so it cannot be ruled
out."* With a browser user-agent it serves **HTTP 200, 29,001 bytes** — and
`link_baseline.tsv` **had already recorded it as 200.** The body and the baseline
disagreed, and nothing compares them. *A 403 is not an absence*, for the third time this
round.

⚠️ **The disclosure still stands** — the page was read and the disputed phrase is genuinely
absent — but it can now be closed on evidence instead of left open. And one borderline was
correctly declined: the page urges coaches to reward *"naming outlets"*, which is **an
activity, not the word as a shout**. Not sufficient; the dagger stays.

---

## The round's most transferable finding: a truncated view manufactures negatives

Three times, in three different tools, by three different agents, **a view too small to
contain the answer returned a clean, confident, well-evidenced negative** — and in every
case the file was intact and the corpus was right.

| The view | What it returned | What was true |
|---|---|---|
| `grep \| cut -c1-240` on a Common Mistakes line | *"grabbing a face mask"* → "the body does not support this" | The body carried USAH 622(b)/(c), 404(b), IIHF 75.2(II), HC 7.1 and *"assume you have no floor."* **No defect.** |
| A search for `0.48` in a fetched abstract | zero hits → "the figure is not on the page" | The page writes **`.48`**. |
| `sed -n` windowed to a rule number | the paragraph absent → "the extraction is truncated, and the corpus asserts a false four-book equivalence" | Intact across a page break. **The corpus was right.** |

⚠️ **Two of the three were caught by their own authors on a re-read. The third was caught
only because a second agent re-derived it. None was caught by a checker, and none would
have been.**

**The asymmetry is why this matters more than a normal error.** A false *positive* gets
refuted by the next reader who looks. A false *negative* gets written into the corpus as a
disclosure — and is then protected by non-negotiable 4, which forbids stripping honest
disclosures. **The defect acquires a defence.** That is the mechanism by which a corpus
becomes quietly less confident than its own evidence warrants, and it is the reason
`sources/README.md` and the style guide now both carry the rule that near a boundary,
*"not present" is unproven until a flattened read has looked.*

This also retires the round's own escalation. The stub theory was a fourth instance of the
same shape — a measurement (wire bytes) too narrow to contain the thing it was being asked
about (page content) — and it produced the same artefact: a confident negative about a
page that was fine.

---

## The briefs were stale as well as wrong, and that is a process defect

Eight of this round's wrong premises were errors of fact. **Three more had a different
cause, and it is the more fixable one.**

An agent was dispatched from a plan row written by the round-52 census — **without checking
whether the round-52 commit had already closed it.** It had.

| The row said | What was on disk |
|---|---|
| The Overview carries the unhedged wording; facts block and takeaway carry the hedge | **Inverted.** Overview and takeaway already hedged; **the facts block was the missed site** — the layer a reader is told they may take *instead of* the prose |
| A self-referential phrase sits at a named line | **Not present anywhere in the file.** Already replaced |
| A grep of the file for hedge vocabulary returns zero | **False.** Two well-formed disclosures were sitting in it |

> *"The only fully live item in the brief was the one it described as already fixed."*

⚠️ **This is structural, not carelessness.** A row moves out of the plan only when
`commit-gate` clears it, so **rows routinely survive their own fixes** — the commit lands
hours before the plan is updated. The check is one command,
`git log -S '<the exact string>' -- content/`, and it would have caught all three.
`review_process.md` now carries it as **G1a**, with the rule that a stale row is
**retracted, not just corrected** — a row that has misdirected one agent will misdirect
the next.

### And a fourth truncated-view failure, in a new direction

That same census claim — *"a grep for hedge vocabulary returns zero"* — is the round's
fourth instance of a view too narrow to hold its answer, and the first to run **backwards**:
the other three manufactured false *absences of text*; this one manufactured a **false
absence of hedges**, which would have licensed adding caveats to a document that already
had two, one of them the best-formed disclosure in either file reviewed:

> *"No breakaway save percentage is quoted here on purpose: the NHL does not publish one,
> and the penalty-shot and shootout conversion rates people reach for instead measure a
> different situation."*

**A vocabulary grep manufactures false absences exactly as readily as false presences.**

---

## The method that produced every correction above

Stated plainly, because it is the only transferable thing here. **No agent in this round
was asked to implement a plan row. Every one was asked to refute it first**, and told to
verify each quotation in its brief on disk rather than carrying it in.

That instruction caught **eight** wrong premises, **two rulebook quotations that were
incomplete in ways that would have shipped half-rules**, and **one escalation I had
promoted to another agent's top priority**. It also produced the round's two best
*findings* — a governing-body coaching manual sitting uncited on disk, and a 476-page
casebook that refuted two negatives — because **both came from attacking a claim the
corpus had honestly disclosed as unchecked**, not from hunting for defects.

⚠️ **The corollary is uncomfortable and should be written down: the briefs were more
defective than the corpus.** Eight of this round's confirmed errors originated in the
dispatch, not in the documents. A process that trusted its own plan rows would have
written every one of them into `content/`.

---

## Proposed scope for the next round

Search the prevalence family **by grammar** — `usually`, `almost always`, `rarely`,
`most players`, `nobody`, `everyone`, `nine times out of ten` — and expect it to return
a strictly larger set than the lexical passes did. Then run the renderer, which no round
since 52 has done, against the bullets this round lengthened.

---

# The round's second half — closing the blockers, and finding the source had moved

*Appended after the four commit-gate blockers were worked. Twelve agents, disjoint file
sets, the same instruction: the plan row is a hypothesis; refute it before acting on it.*

## The largest finding was not in any brief, and no checker could have seen it

`scripts/fetch_sources.sh` has pointed at the IIHF Situation Handbook's
`…_17082025-v1_1.pdf` URL since it was written. **In July 2026 that URL served v1.0.
It now serves v1.1.** The publisher replaced the document behind an unchanged link.

So `sources/iihf_situations.txt` was **v1.0, June 2025**, while every citation in the
corpus named v1.1 — and a routine re-fetch would have swapped the book underneath the
repository, shifting every `iihf_situations.txt:NNNN` citation in `project/` and changing
what four Situations say. Silently.

⚠️ **Nothing in the checker set can see this.** `check_links.py` tests reachability;
`check_external_links.py` tests status codes. **Neither compares content, and neither
would by accident.** The link never rotted. It resolved perfectly, every time, to a
different book. **This is the first instance recorded here of a primary source mutating
in place.**

A whole-book diff returns **16 changed lines: three date/version stamps and four rulings.**

| Situation | v1.0 | v1.1 |
|---|---|---|
| **63.19** — puck kicked off the foot, directly over the glass | *"No. Rule 63.2 (III) states that the player must have shot or batted the puck using the hand or the stick."* | *"Yes."* |
| **20.4** — goal, then video review reduces a reported major to a minor | *"The goal shall be allowed since only a minor penalty is assessed. Rule 32.4 and Rule 78.5."* | *"Goal is disallowed."* |
| **10.7** — nudging a teammate's dropped stick back | common sense, no penalty | *"legal if the stick is intact and if the nudging… does not interfere with an opponent in any way"* |
| **46.1** third-man-in, *not-instigator branch only* | *"Team A would play one player shorthanded for 2 minutes."* | *"both teams would play at full strength."* |

⚠️ **Note a detail two agents caught independently and I had missed: 20.4 and 63.19 also
dropped their rule citations**, not merely reversed their answers. A reversal that stops
citing the rule it reverses is harder to audit, not easier.

**63.19 is the one that reached the corpus, and it is a penalty-consequence reversal.**
No document cited it by number, but three taught its substance — that 63.2(iii) names only
*"hand or stick"*, so a puck out over the glass **off a skate** is not that penalty.

**And the Handbook now contradicts its own Rulebook.** IIHF Rulebook v1.1 63.2(III)
(`iihf_rules_v1.1.txt:5143`) still reads *"(using their hand or stick)"*, while the
Handbook's Foreword ranks itself below: *"in case of any contradictions, the valid IIHF
Rulebook is always the basis."* Recorded in `risk_management.md`,
`playing_without_the_puck.md` and `rules_primer.md` **as a live disagreement between two
current official documents, resolved in neither direction**, with the playable instruction
attached — clear with the stick.

**The other three were checked for corpus exposure and have none.** Checked, not assumed:
the corpus's video-review material is Coach's Challenge for offside and goaltender
interference, not the linesperson-reported-infraction case.

⚠️ **What this cost us that is worth naming: the NHL's own Situation Handbook is still not
on disk.** Two agents named fetching it independently as the highest-value next step. The
NHL's 63.2(iii) carries materially the same words, and the IIHF Handbook's Foreword says it
*"is based on the NHL Situation Handbook"* — **which is some reason to expect the NHL book
to answer similarly, and is not evidence, and must not be written as one.**

## The briefs were wrong again, in eight more places

| What the brief said | What the book says |
|---|---|
| *"All four Interpretations to Rule 10.1 were read and none is on point"* | **Twelve** Interpretations, and **Interpretation 5 is squarely on point** for 10.1(v) — its escapes are no-glass, a deflection and dissimilar rink ends, **not intent** |
| *"six bare `6.11(b)(ii)` references"* | **Seven.** Key Takeaway 1 carried two |
| `zone_entries.md` quotes Situation 83.34 *"verbatim twice"* | **One** location carrying **two** fragments |
| USA Hockey writes slew-footing *"outside the rule its puck-first relief sits in"* | **False** — the 639(a) Note and Casebook Situation 2 both sit **inside** Rule 639. Conclusion held, premise did not |
| Casebook 639 Situation 4 is restated narrowly in `defending_the_rush.md` / `body_contact_and_battles.md` | **Neither file restated it at all.** The narrowing was in `risk_management.md`. ⚠️ **The brief's "known candidate" was a Hockey Canada 8.7 clipping sentence — a different rule entirely** |
| USA Hockey 618(a) is a third instance of *"quoting around"* a printed typo | **Not the same problem.** The corpus quotes **614(b)**, which prints cleanly. The defect is **misattribution**, not fabrication risk |
| Four `practice_and_development.md` / `conditioning_and_recovery.md` rows | ⚠️ **Four of five described HEAD, not the working tree.** The repairs were already in, uncommitted, and the rows had never been closed |
| Rowland 2014's four figures are *"not verifiable at any URL reached, by anyone"* | **Reachable.** Full text obtained; all four verified, **and a fifth error found** — free recall g = 0.29, level with recognition, which the corpus had omitted while drawing a conclusion from the contrast |

⚠️ **The stale-row failure is the one to act on**, because it is systemic rather than
individual. Four rows in one table described the pre-fix state because the planning text was
copied forward from a round's *carried-findings* document instead of its *outcome*. **The
table's own header warns about exactly this and records a previously measured 50% error
rate.** It warned, and it was still wrong. Closing the row in the commit that closes the
finding is the only fix that holds.

## Two questions a verifier settled that neither side had right

**1. The USA Hockey puck-first relief and Rule 616.** One document asserted flatly that the
639(a) Note *"does nothing for you under Rule 616"*; another hedged that it *"may not reach
616 at all"*. **Both were wrong**, and the deciding text is **Rule 616, Note 1**
(`usah.txt:4106`, matched at `usah_casebook.txt:9674`): *"fouled from behind is defined as
any infraction… **that would normally be deemed a penalty**"*. ⚠️ **Rule 616 has no
independent definition of a foul. It borrows one.** So the relief reaches 616 by **removing
its predicate**. The residual uncertainty is real but sits one step earlier — **not whether
the relief reaches 616, but whether you earned it**, since the referee must judge you were
*"clearly"* stick-checking and Note 1's list is expressly open.

**2. The USA Hockey interference ceiling — where the obvious answer was the unsafe one.**
An agent measured that Rule 625 has **no tier above the minor**, and correctly **declined to
write it in** without a rules pass. That restraint was right. Rule 625 does write no major —
confirmed by a flattened whole-book read, by the Summary of Penalties appendix (which
attaches the match-penalty option to twenty named fouls **and deliberately not to 625**), and
by ~20 Casebook Situations, none of which escalates. ⚠️ **But "USA Hockey caps interference
at a minor" is false and would have been dangerous to print.** The book **routes** the
violent pick out of 625 and says so in terms: its Standard of Play directs that a check made
with *"no effort to play the puck"* — the definitional core of a pick — **must** be penalised
under boarding, charging, checking-from-behind, head-contact or roughing, with **640(g)** a
major plus game misconduct, and **640(h)** and **602(a)** reaching a match with a 6–10 game
suspension recommendation. **A reader told "capped at a minor" would treat an
ejection-and-suspension exposure as a penalty-kill.**

The same pass corrected two cells I had put in a brief: **IIHF 56.4 had been quoted with its
operative half elided** — the full text conditions the major on a minor *"not sufficiently
sanctioning"*, which makes the IIHF's major **narrower** than the NHL's, the reverse of what
my brief implied — and **NHL 56.5's game misconduct is mandatory, not discretionary**.

## A four-book claim that was wrong in six places at once

*"At or near the hands **every book** reaches the stick lift"* — **false.** Only **three**
books reach it: IIHF 55.1 flatly, USA Hockey 623 and Hockey Canada's Interpretation 1 to
8.2(a) on effect. ⚠️ **The NHL is the fourth and does not**: its hooking rule writes no hands
sentence at all, and its slashing rule 61.1 catches only a *"forceful or powerful chop… not an
attempt to play the puck"*, which a clean lift is not. Three sites in
`defensive_zone_coverage.md` and three in `on_ice_communication.md`; one was **self-refuting
inside a single sentence**.

⚠️ **The instructive part is where it came from.** `body_contact_and_battles.md` holds the
correct and *different* claim — *"no book leaves the hands unprotected"* — which is
defensible. **The overstatement was purely downstream**: a sound sentence restated one
degree too strongly, twice, in two other documents. This is the round's recurring shape,
now seen four times: **the core proposition is genuinely four books, and a limit attached to
it is three.**

## The agent definitions were stale, and every rules dispatch inherited it

`.claude/agents/rules-verifier.md` handed every verifier a table of source files naming
`usah_rules.txt`, `usah_case.txt`, `hc2628.txt` and an `iihf_rules.txt` at *"v1.0, May 2025"*
— **four of which do not exist** — and labelled `hc.txt` as the **superseded 2024-2026**
Hockey Canada edition when `hc.txt` **is** the current 2026-2028 book.

⚠️ **A verifier trusting it would have reported a book as missing, or quoted the live Hockey
Canada rules while calling them superseded.** It was found only because one agent checked the
table against `ls sources/` instead of trusting it — the same instruction that produced
every wrong-premise finding tabulated in this record. The table is rewritten against disk, and now carries
the extraction traps and an explicit instruction that **the file listing is the authority and
`sources/README.md` outranks the table.**

## What this half could not have found

Every rules verification here reads **extracted text**, not the published PDFs. An extraction
defect shared between the check and the corpus's original check passes through invisibly, and
**neither Situation Handbook `.txt` has been verified against its PDF by anyone.** The two
editions were diffed against each other, which proves they differ in four rulings and proves
nothing about whether either matches what the IIHF published.

Nothing here tests **application**. Rule 625 having no major is a textual fact; whether a
referee charges a violent pick as 625 or as 640 is an officiating-culture question no grep can
answer. The same is true of 616 Note 1, and of the IIHF's reversed 63.19 — **the reversal
cites no rule, and no document on disk breaks the tie between a Rulebook and its own Handbook.**

Roughly a thousand words of new Sources-trailer prose went in, in single ~7,800-character lines
carrying nested emphasis, quotes and ⚠️ markers. Delimiters were verified to balance
arithmetically by more than one agent. ⚠️ **Balance is not rendering**, no build was run and no
browser opened after those edits, and **no audio was synthesised** — every read-aloud judgement
in this half was made by reading `md_to_speech.py`'s substitution table, not by hearing it.

**And the repairs are new text.** A repair has not been reviewed merely because the thing it
repaired was. The `[sic]` house rule, the USA Hockey routing paragraph, the 616 Note 1
rewrite and the IIHF book-versus-handbook passages are all this round's own prose, asserting
cross-book penalty tiers in a collision sport, and none of them has been read by anyone who
did not write it.

---

## Addendum — what the last wave settled, and three more wrong premises of mine

**The USA Hockey puck-first relief and Rule 616 — settled, against both existing versions.**
One document asserted flatly that the 639(a) Note *"does nothing for you under Rule 616"*;
another hedged that it *"may not reach 616 at all"*. **Rule 616, Note 1** decides it
(`usah.txt:4106`, matched at `usah_casebook.txt:9675`): *"fouled from behind is defined as any
infraction… **that would normally be deemed a penalty**"*. ⚠️ **Rule 616 has no independent
definition of a foul — it borrows one**, so the relief reaches 616 by removing its predicate.
Casebook Situation 1 fences the same ground from 616's side: five criteria, and *"All of these
criteria need to be met… If one or more are not met, then the appropriate penalty shall be
assessed in the normal manner."*

⚠️ **The residual uncertainty is real but sits one step earlier: not whether the relief reaches
616, but whether you earned it.** The referee must judge you were *"clearly"* stick-checking, and
Note 1's list is expressly open (*"including"*), so an action graded as a hook or a hold never
enters Rule 639 at all. **That "must be earned" half is the only thing standing between the new
text and a defender who thinks a stick wave at the puck is a licence.** ⚠️ **And note the
honest limit the agent volunteered: no USA Hockey source states the conclusion.** It is an
inference from two texts, and the Casebook's 616 Situations 1–4 and 639 Situations 1–5 were
searched without finding one on point.

**Two elisions of the same clause, in two documents.** The brief flagged that IIHF 56.4 had been
quoted with its sufficiency test cut. That turned out **stale** — `breakouts.md` had shipped it
complete. But reading the whole file instead of the flagged hunks found **the identical failure
elsewhere**: `defending_the_rush.md:596` quoted 616 Note 1 as *"either directly or diagonally from
behind (beyond the fouled player's peripheral vision)"* with *"that would normally be deemed a
penalty"* — **the operative half, the one the whole argument turns on** — cut. Found only by
diffing the file end to end.

**Three more premises of mine, wrong:**

| What I briefed | What is actually there |
|---|---|
| The USA Hockey routing text is the *"Standard of Play preamble"* at `usah.txt:326-336` | It is the **Declaration of Player Safety, Fair Play & Respect**, sub-heading *Body Checking*. The three *Standard of Play and Rule Emphasis* sections begin at `:219`, `:481` and `:650` — different sections entirely |
| `neutral_zone_systems.md` cites **NHL** 76.6/76.7, so the NHL typo house rule applies | It cites **IIHF** 76.6/76.7. ⚠️ **Had the agent "matched" the NHL wording in, it would have manufactured a fabricated quotation in the opposite direction** |
| `body_contact_and_battles.md`'s *"no book leaves the hands unprotected"* and "the NHL does not reach the lift" cannot both be true | **They can** — they quantify over different acts. But the agent was right that (A) fails the read-aloud test, because the bullet it sits in is *about the lift* |

⚠️ **The IIHF has a printed typo of its own, in the same rule number as the NHL's.** IIHF 76.7
prints *"When two (2) "face-off" violations" have been committed"* — a stray unmatched closing
quote. **So NHL 76.7 and IIHF 76.7 say materially the same thing and are typo'd differently**, and
*"match the sibling book's wording"* is not available. A sweep that harmonised them would fabricate
a quotation **in whichever direction it swept.** The style guide's typo section now carries all
three known instances as a table.

**A negative that stopped being a negative.** `neutral_zone_systems.md`'s claim that neither
analytics source *"classifies a goal by the defensive breakdown"* was marked
UNVERIFIABLE-FROM-DISK. Both were refetched and read in full: Sznajder classifies by how the
*offence* produced the shot, Glin's three criteria are **purely puck-trajectory** — distance along
the ice, timesteps in the offensive zone, timesteps beyond the goal line. **The claim is now
evidenced rather than labelled**, and reading the sources turned up a scope error nobody was
looking for: the Sznajder article is **playoff data**, which the document had implied was
full-season.

**A propagation defect found in passing, in the file everyone had been pointing at as correct.**
`body_contact_and_battles.md:245`'s facts line read *"a chop at the hands is slashing in three of
the four books"* — contradicted by its own body paragraph. Hockey Canada 9.3 is *"the action of
hitting an opponent with a stick"*, which reaches a chop at the hands **without naming them**.
Under Hockey Canada a chop at the hands *is* slashing; the claim is about which books **name** the
hands, not which reach the act.

### The shape, stated once

Six of this round's content corrections are the same defect: **the core proposition is genuinely
four books, and a limit, exception or extension attached to it is three — and the sentence
attributes the whole package to four.** After-the-whistle. The stick lift at the hands. The
hands-named-versus-hands-reached chop. The tag-up classification floor. The goalie's broken stick.
The interference tier ladder. ⚠️ **It is not a knowledge failure and it will not be fixed by
knowing more rules.** It is what happens when a writer checks the claim and not the qualifier.
**The quantifier sweep catches it only where somebody wrote the words "all four".** Every instance
above that the sweep did *not* catch was found by an agent reading a whole file.

---

## The last brief error, and the one that would have done the most damage

The round's final dispatch told four documents to add a **late-hit** tier cell. ⚠️ **Three of the
four sites were not late hits. They were interference picks** — `time_and_space.md:518`
(*"Moving into a defender's path to spring a teammate… That's an interference minor"*) and
`playing_without_the_puck.md:438` and `:780`, both inside pick material.

**The two fouls take different arguments, and the round had just established why.** A late hit
reaches a major through **USA Hockey 640(g)/(h)** *by their own terms*, because 640(b) is the late
hit. An interference pick does not — Rule 625 has no tier above the minor, so the ladder runs
through **602(a)**, which is tied to no named foul at all. **Had the agent applied the brief, it
would have cited a roughing rule for an interference foul in three documents.**

It refused, said why, and wrote the pick cell instead. ⚠️ **That is the whole value of the
instruction, in one instance: the brief was not merely stale or imprecise here — it was
confidently wrong about what the text on the page was about, and it was wrong because I had
generalised from the three files I had just watched being fixed.**

The same agent then found **five more gap sites in those four files that the brief did not name**,
one of which — `offensive_zone_play.md:915` — asserted *"arriving a beat late is not capped at a
minor"* and then **supplied no tier from any book at all**. A "not capped" claim with nothing above
it is worse than the gap the round was chasing.

### The census that should have been run first

Prompted by the agent's own closing line — *"a brief written after three files were fixed still
missed five sites in four more, so I would assume the gap survives elsewhere"* — the corpus was
measured at close:

**96 sites across 19 documents** assert that some penalty is *not capped at a minor*, *not the
ceiling*, or *a floor rather than a ceiling*. `body_contact_and_battles.md` carries 23,
`rules_primer.md` 15. **This round fixed roughly a dozen.**

⚠️ **The lesson is about method, not about hockey.** Every one of those 96 sentences is a claim
about which books carry which tier — the shape that was wrong at essentially every site examined
this round. **Chasing them by brief, three or four files at a time, was the wrong instrument**, and
the evidence is that two successive briefs written by someone watching the work closely still
missed five sites in the four files they named. The census costs one grep. **It should have been
the round's first action rather than its last**, and it is recorded in the plan so the next round
starts from a measurement instead of a hunch.

⚠️ **And it is explicitly not a sweep.** Round 44 manufactured a divergence by sweeping uniformly;
this round nearly cited the wrong rule in three documents by generalising across two foul types.
**Each of the 96 has to be read for which foul it is about before its ladder is checked.**

### One site is knowingly still wrong, and it is in a read-aloud layer

⚠️ **STALE — RETRACTED AT THE SIXTH GATE PASS. The site was fixed later in the round and this
section was not updated.** Measured on the final tree: that block's values run 161/159/179/153/121/
200/299/289/302/130/161 — **nothing at 300** — and the neighbouring value names all four books
including USA Hockey 640(b) with its adult-male scope and 640 Note 2. **By this record's own count
it is the fourth stale summary line it has carried**, and it was caught by the gate, not by its
author. The paragraph is kept because it is what was true when written; its present tense is not.

`offensive_zone_play.md:728` states a four-book tier ladder in a ```facts``` block with USA
Hockey's cell missing. The block is at the **11-fact hard cap** and the fact is **exactly 300
characters**. The cell cannot be added without deleting the adult-male scope limit, which the style
guide forbids; the prescribed remedy is a structural split of the section, which was correctly
judged out of scope for a citation brief. **It is recorded as open rather than quietly left**, and
it is the only site in this round's scope where the round knows the text is incomplete and shipped
it anyway.

---

## The round's critical, found in its last hour: the IIHF book moved a season

An agent auditing link **targets** rather than link **liveness** read the live IIHF hub and found
this: *"The International Ice Hockey Federation has published the 2026/2027 IIHF Rule Book for the
upcoming season."*

**Today is 29 August 2026. The corpus's IIHF layer is 2025/26, across 13 documents.** The IIHF
book is the base rule set at **every level of British hockey** — the primary book for one of the
corpus's two named audiences.

Both 2026/27 PDFs were fetched and extracted. **Rules 76.6 and 76.7 changed, and the change
reverses a load-bearing claim:**

| | 2025/26 v1.1 | 2026/27 v1.0 |
|---|---|---|
| **76.6** encroachment by a non-taker | *"the offending team taking the 'face-off' **shall receive a warning**"* | *"the offending team's player taking the face-off **shall be ejected from the face-off circle**"* |
| **76.6** position-establishment violation | *"the Linesperson shall **assess a warning**"* | *"the Linesperson shall **order the center of the offending team replaced**"* |
| **76.7** premature movement | *"**A warning shall be issued to the offending team** and the 'face-off' must be conducted again"* | *"…and it must be conducted again"* |

**The IIHF has adopted the NHL's ejection regime.** `faceoffs.md`'s British throughline —
*"nobody is ejected from a draw in British hockey"* — is no longer true. It sits in the
**Overview**, in **Key Takeaway 2**, in two other documents' ```facts``` lines, and it carries
concrete coaching advice: *"no reason to keep a simple back-up plan in reserve for a winger in the
dot."* **That advice is now wrong for the reader it was written for.**

⚠️ **The corpus was not fabricating, and the distinction matters.** Every citation names *"IIHF
Official Rule Book 2025/26"*, and `faceoffs.md:937` dates its verification to 29 July 2026. It
accurately describes the book that was current when it was written. **This is an edition-currency
failure, not an accuracy failure** — and it is a class this repository had never recorded: not a
link that rotted, not a source that mutated in place, but **a source superseded on a season
boundary while the corpus went on citing it correctly.**

**A bounded caveat was applied and the full migration deliberately was not.** Thirteen documents
cite the 2025/26 layer; migrating three would manufacture exactly the corpus-wide divergence round
44 was censured for. The migration is Tier −1 in the plan.

### ⚠️ And the measurement nearly became the round's own last defect

A first comparison of twenty further cited rules reported **"seven of twelve changed."** Every one
of the seven was a **pagination artefact** — a running header interleaved at a different point,
`oppo-\\nnent's` against `opponent's`, page 85 against page 86. After de-hyphenation and header
stripping, **all twenty were textually identical.**

Had that first number been written down, this record would have claimed a seven-rule change in the
primary British rulebook that did not happen — **in the round whose entire subject is premises that
were never checked.** It survived only because two of the "changes" were read in full before being
believed. ⚠️ **A diff of two extractions is not a diff of two books**, and the normalisation is
not optional: it is the difference between a finding and a fabrication.

### And the first pass understated it — three more changes, one of them an inversion

Writing the caveat found what comparing two rules had missed. **76.3(VI)** and **76.4** both moved
from *"may assess a warning"* to ordering the centre **replaced**. And **76.4 gained the NHL's
post-icing carve-out**, which the 2025/26 book did not have: *"When an icing infraction occurs, the
first face-off violation by either team will not result in the center being removed…"*

⚠️ **That falsified two further corpus claims nobody had flagged** — that the IIHF has *"no
post-icing carve-out"* and that the word *"appears nowhere in IIHF Rule 76 at all."* Both were
**true of 2025/26** (zero hits for "eject" in its Rule 76) and are **false of 2026/27** (four).
**The British architecture does not merely lose the warning; it inverts.** The free first violation
was on every draw; it is now rationed to post-icing draws, exactly as in the NHL — so
`faceoffs.md`'s *"you have the free first violation on all fifty-six draws"* is precisely backwards.

⚠️ **Note the pattern, because it is the round's in miniature: the deeper reading found more than
the targeted comparison did.** I compared two rules and reported a change. The agent sent to write
the caveat compared six and found three more, one of which reversed the document's structure rather
than a sentence in it. **A brief scoped to what the dispatcher already knows will find what the
dispatcher already knows.**

**What is verified: Rules 76.3, 76.4, 76.6 and 76.7 changed; 82.2 and 87.1 did not. Twenty other cited rules did not. The rest of the
Rule Book has not been read, and the 2026/27 Situation Handbook has not been compared at all** —
which matters, because the 2025/26 Handbook reversed Situation 63.19 between its own two versions.

### The round's shape, in one line

It opened by scoping a rule to three books instead of four, and closed by finding that the book
itself had been replaced. **Between those, every single correction came from someone refusing to
believe a brief** — mine, the plan's, another agent's, or their own first measurement.

---

## The last thing found, and it closes the loop the round opened

An agent finishing the faceoff work wrote hedges it called **load-bearing** — *"ask your league"*,
*"assume your centre can be thrown out"* — and said why it had to: the **2025-26** IHUK In-House
Rules adopt the IIHF book **by name**, so nothing on disk proved which edition British hockey is
actually played under this season. It named fetching the current British document as *"the single
highest-value thing outstanding."*

**It was fetched.** IHUK In-House Rules **2026-27, Revision 1, published 25 July 2026**, found by
reading England Ice Hockey's rules page rather than by guessing URLs — three guessed filenames
404'd first. It settles the question twice over:

| | IHUK 2025-26 | IHUK 2026-27 |
|---|---|---|
| IIHF edition, **cover page** | *"with the **2025–26** IIHF Rule Book"* | *"with the **Current** IIHF Rule Book"* |
| IIHF edition, **Introduction** | — | ⚠️ *"adopt the latest IIHF Official Rule Book **(Version 1.1, published July 2025)**"* — **the 2025/26 book** |
| **Rule 76 section** | ⚠️ **absent entirely** (only `face-off` hit is a team-sheet deadline) | *"With the exception of face-offs following icings, the linesperson shall **immediately replace the centre for all violations**."* |
| Stick-down order | — | *"**Either centre can now put their stick down first** for a face-off."* |

⚠️ **And I got the first row wrong, in the round about getting first rows wrong.** I read the cover
page, saw *"Current"*, concluded British hockey was on the 2026/27 IIHF book, and wrote that
conclusion into `sources/README.md`, the plan and this record before dispatching. **The agent sent
to act on it read the Introduction of the same document and refuted me** — *"Had I written that, it
would have been a fabricated conclusion in twelve places."* All three files are corrected. **The
edition question is still open** and cannot be settled from this document.

⚠️ **The second row is what actually resolves it, and it is a stronger result than the one I
claimed.** IHUK did not merely inherit the IIHF's change — **it wrote the change into its own
rules**, replacement regime and post-icing exception both. So the British answer holds *whichever*
IIHF book sits underneath, and the edition question stops mattering for faceoffs. The hedge comes
out on better evidence than I had reasoned my way to.

**And the second row is a change nobody was looking for.** The stick-down order is no longer
prescribed in British hockey, and IHUK's own *"now"* flags it as new. That was found only because
the whole Rule 76 section was read rather than grepped for the word the round was chasing.

⚠️ **It clears the faceoff hedge and nothing else.** `uk_rules.md` — the corpus's dedicated British
document, the one a British beginner is pointed at — is built end to end on the **2025-26** In-House
Rules and the **2025/26 v1.1** IIHF book, and says so in terms at its line 34. **It is a season
behind on both of its books.** That is now the first item under Tier −1.

### What the round demonstrated, since it demonstrated it four times

Every significant finding here came from **reading past the thing being looked for**:

- The Situation Handbook edition change was found while checking a *quotation*.
- The 2026/27 rule book was found while auditing *link targets*.
- Three of the six faceoff changes were found while writing a *caveat* about the other three.
- The In-House Rule 76 section, and the stick-order change with it, were found by reading a
  *section* rather than grepping a *word*.

⚠️ **And the corollary, which cost the most: every wrong premise in this record came from the
opposite habit** — from a brief, a plan row, or a first measurement that was believed because it
was specific. **Specificity is not evidence.** The round's own near-miss makes the point: *"seven of
twelve rules changed"* was precise, checkable, and entirely an artefact of pagination.

---

## The fifteen files this record did not name — and why the gate was right to block on it

⚠️ **`commit-gate` blocked this commit in part because the record's header claimed "34 of 37
documents reviewed" while the record named 20 of the 35 changed content files.** The claim was
mine and it was unsupported. The header now says **changed**, which is what the number measures.

The other fifteen were changed under plan rows rather than under a named review dimension, and
their evidence sat in `project/plans/OPEN_ITEMS.md` — **which is not a review record.** That is the
gap. What each received:

| File | What changed, and the evidence |
|---|---|
| `center.md` | 614(b)/618(a) misattribution repair; IIHF Situation Handbook edition label; IIHF 76.7 discretionary-minor sentence corrected to the 2026/27 replacement wording; **stick-down order corrected** — IHUK 2026-27 lets either centre place first, a British departure from IIHF 76.4, which is word-for-word identical across editions |
| `defender.md` | IIHF Situation 63.19 reversal cross-referenced; Casebook 639 Situation 4 and the four-book clipping tiers added to the 2-on-1 material, which carried **zero** penalty exposure before; stick-lift at the hands corrected from two books to three with the NHL's silence named; two reciprocal wrong section pointers fixed; `check_facts` overflow resolved by moving a fact to the body |
| `winger.md` | USA Hockey 630(d)'s **classification floor** added — its tag-up is rationed to Youth 15-Only and above, which the body omitted while KT4 carried it; IIHF faceoff ejection scoping |
| `game_management.md` | 614(b)/618(a) repair at 13 audited sites; Situation Handbook edition label; USA Hockey late-hit tier ladder (640(g)/(h), 602(a)); ⚠️ **a mis-attributed quotation corrected** — *"the concept of 'finishing the check' is an unacceptable action"* is the **Declaration**'s and the **Glossary**'s, not the *Standard of Play*'s |
| `special_teams.md` | IIHF faceoff ejection scoping; Sources rescoped and the 2026-27 In-House Rules added; NHL 76.7 paraphrase confirmed correct and left as handling 1 under the new typo rule |
| `rink_map_and_glossary.md` | Two defects in one glossary entry — the IIHF stick order is **no longer** what a British reader uses, and the NHL/IIHF warning-versus-replacement contrast was stale; plus five rink-scope corrections (**Limekilns Road was dropped** from the named rinks; the scope line changed from *"all EIH and SIHA fixtures"* to *"all fixtures"*, silently reversing a BUIHA carve-out both files asserted) |
| `forechecking_systems.md` | USA Hockey late-hit tier cell; ⚠️ *"USA Hockey grants no window at all"* **retracted** — Casebook Standard of Play Situation 10 allows a finish on four cumulative conditions, and two sibling documents already said so |
| `shooting.md` | ⚠️ **CRITICAL, and this row previously said only "quantifier-sweep verification" — a misdescription of the largest rules addition in the diff.** The four-book high-sticking ladder was stated for **USA Hockey and Hockey Canada only**; the NHL's and the IIHF's appeared **nowhere in any layer**, in a document whose banner tells British readers the IIHF flags are theirs. **IIHF 60.4 lets the Referee assess a major plus an automatic game misconduct for a high stick that recklessly endangers, with no injury required; the NHL writes no major tier for high-sticking at all** (60.4 is a match penalty for a deliberate injury). Added with predicates carried — *"injury results"* for the double minor, *"recklessly endangers"*, *"attempts to or deliberately injures"* — plus IIHF Appendix IV Table 6, USA Hockey 621(a)-(c) with Casebook Situations 2 and 3, and Hockey Canada 7.6's *"supersedes any other rules"* routing for minor and female hockey. ⚠️ **SUPERSEDED — the gap was CLOSED later in this round.** This sentence read *"the slap-shot facts block is at HARD_MAX 11 and could not take the tier; the reviewer left the gap rather than trim a warning"*, and both halves are now false: the section was split on the seam its body already used, the block stands at **7** facts, and the tier is carried in a block of its own. See *"The Critical was fixed — and the brief would have broken the checker"* below. **Kept because it is what was true when written; its present tense was not.** |
| `equipment.md` | ⚠️ A **negative existence claim refuted**: USA Hockey *does* write a goalie broken-stick play-on allowance — in the **Sled Hockey** section. Scoped to the stand-up rules and the sled provision disclosed verbatim; the `usahockey.com/rulesandresources` hub citation repointed to the PDF, Rule 301 not being on that hub at all |
| `getting_started.md` | IIHF faceoff regime rewrite; inbound anchor updated in the same edit as the `faceoffs.md` heading it points at |
| `scanning_and_anticipation.md` | Internal cross-reference audit — a pointer to a *"section below"* that does not exist |
| `mental_game.md` | ⚠️ A prior uncommitted pass had **over-corrected into a false negative-existence claim at four sites**; the meta-analysis does report all four matching-hypothesis cells, and the gross-task estimates run the other way. Corrected, with the figures labelled second-hand |
| `team_play_and_culture.md` | `usahockeyrulebook.com` citations repointed to the PDF with the `.com` kept as navigation; an unsourced prevalence claim in the body labelled |
| `puck_handling.md` | USA Hockey 639(a)'s Note carve-out added — a real limit the document stated without |
| `switching_positions.md` | Situation Handbook edition label, updated **only after re-running the searches** its negative-existence disclosure names against v1.1 |

⚠️ **The Δ column has been DELETED, and that is the finding.** It was retyped once and every one of
the fifteen was short — `puck_handling.md` recorded at **+5/−4** against **+63/−21 as measured then**. ⚠️ **By the time the gate read this sentence it was +64/−22** — the figure went stale inside the paragraph explaining why figures go stale, which is the seventh caught in this round and the most on-the-nose. It was
then **re-derived correctly** from `git diff --cached --numstat` at the gate's instruction — and
**five repair waves moved six of the fifteen again within the hour.** ⚠️ **A diffstat in prose is a
second copy of something git already owns, and the copy rots faster than anyone can retype it.**
Run `git show --numstat` against the round's commit.

⚠️ **What this table is and is not.** It is a record of what changed and on what evidence. **It is
not a statement that these fifteen files were adversarially reviewed** — most were repaired by an
agent told to refute its brief, and that is a weaker guarantee than a reviewer reading the whole
document cold. **C11 is not satisfied for them.** ⚠️ *(An earlier draft added "and the plan says so". It does not — `grep -n C11 project/plans/OPEN_ITEMS.md` returns only an unrelated anecdote and the gate-condition text. The gap exists in one place and was claimed to exist in two.)* The honest position is that
this round's repairs are new text carrying cross-book penalty tiers in a collision sport, and
`rules-verifier` and `safety-reviewer` have not read them.

---

## The gate blocked, and it was right on all five counts

`commit-gate` returned **BLOCK**. Every finding held up. The three that matter:

**1. A correction that reached one file and stopped — the same defect, twice in one round.**
`rules_primer.md` said *"none of the **four** Interpretations to Rule 10.1 is on the point"*, in
three places. **Hockey Canada Rule 10.1(a) has twelve** (`hc_layout.txt:5983` through `:6097`;
1–4 on printed page 121, 5–12 on page 122 — **somebody counted one page**). ⚠️ **The identical
finding had been reported earlier in this same round and fixed in `risk_management.md`.** It never
reached the rules-owner document — which other documents defer to.

⚠️ **And `rules_primer.md` contradicted itself on its own page**: line 431 cites *"Interpretation 10
to 10.1(a)"* and *"Interpretation 11"*, and quotes both correctly. **Those citations are impossible
if there are four**, and nothing caught it — not a checker, not a reviewer, not me.

The substance moved too: **Interpretation 5** carves out two cases in the goaltender's favour — no
glass, or *"if the puck touches the glass or deflects off a player or official"* — while the
document told a reader to assume the harsher reading.

**2. Three change-history sentences in `content/`, forbidden by the style guide staged in the same
commit.** ⚠️ **The sweep found nine, not three.** Six were beyond the gate's reach, and one was in
the **teaching body** rather than a Sources trailer — *"If you took 'my specialist always takes the
draw' from an older reading of this document…"* — so a listener would have heard the page talking
about its own past mid-lesson. My own grep had missed all nine: I searched for round numbers and
script names, which is the wrong vocabulary for this defect entirely.

**3. Two numbers of mine that were not supported.** The record's header claimed *"34 of 37
documents reviewed"* while the record named **20 of the 35 changed files**; and the plan's
pre-stage sweep row was scoped at **34** where the staged diff carries **125 across 23 files**.
Both corrected. ⚠️ **Note which numbers failed: the two nobody but me had produced.** Every figure
that came from an agent with a per-cell table held.

### And the verification that followed found its own boundary

The `rules-verifier` pass covering the nine unswept files verified 34 instances, found **one wrong
and six confirmed-but-incomplete** — and then named what it could not reach: it read **staged `+`
lines only**, and flagged two pre-existing lines in the same document with the same shape as
**unchecked**. ⚠️ **Every sweep this round was scoped to what changed.** That is how a claim which
has been wrong for twenty rounds goes on being wrong, and it is now a plan row.

It also found a rule the corpus has never carried: **Hockey Canada 6.5(a)** rations a free first
face-off violation after an icing, *"In Junior divisions"*. **So the limit is in three of the four
books and the corpus had documented two** — the round's recurring shape, found one last time, in
the pass that was checking for exactly it.

---

# The second remediation wave — what `commit-gate` forced, and what it found

`commit-gate` blocked three times. Every block held. **The round's own critical came out of the
second one**, and the reviewer passes it compelled found four more defects — every one a *second or
third copy nobody had looked for*.

## The critical: a clipping ladder wrong in both books, in two files

`defender.md:600` and — byte-identical, and in no brief — `defending_the_rush.md:454`:

> *"…a mandatory major on injury under **NHL 44.3** and a major plus automatic game misconduct under **IIHF 44.3**"*

**Both halves wrong.** `nhl_rules.txt:5515-5522` — 44.3 requires the major on injury *"**(see 44.5)**"*,
and **44.5**: *"A game misconduct penalty **must** be assessed anytime a major penalty is applied for
injuring an opponent by clipping."* **The NHL ejects on that same major**, so reserving the game
misconduct to the IIHF understates it. And `iihf_rules_v1.1.txt:4029-4034` — IIHF 44.3 is *"at their
discretion, **may** assess"*, keyed to *"**recklessly endangers**"* with a sufficiency test — **not to
injury.** The parallel construction carried the NHL's trigger onto a book that does not use it.

⚠️ **The line was 299 characters against a 300-character cap.** It could not be repaired by adding
the triggers, which is direct evidence of how it was made.

## The mechanism, four times in one round

**A correct, longer, multi-book sentence compressed to fit the 300-character `Rule:` cap until
something load-bearing fell out.** Right tier, wrong trigger. Right rule, missing limit. Right
claim, missing hedge.

1. **The clipping ladder** — triggers lost. Two files.
2. **USA Hockey 640(g)/(h)** at `game_management.md:122` **and** `:716`, byte-identical — the
   *"(b, c, d, e or f)"* limit lost, **immediately after a line routing adult-male late hits to
   640(a)**, which (g) and (h) do not reach. The body said in terms *"the book does not say, and this
   document does not know"*; the facts line asserted the tier flat. Seven sites in total.
3. ⚠️ **The repair's own hedge** — the replacement clipping lines said *"is clipping, not tripping"*
   flatly while both bodies call it *"this guide's reading — neither book names the play."*
   **The compression that dropped the triggers then dropped the hedge.**
4. **A false universal**, `body_contact_and_battles.md` — *"No fall is required under any book."*
   **NHL 57.2 and IIHF 57.2 both write the minor for *"trip and fall"*** while 57.1 defines *"trip
   **or** fall"*. ⚠️ **And `rules_primer.md:365`, written the same round, states that conflict
   correctly** — two agents wrote incompatible sentences into one round. **A third copy sat in the
   facts layer thirteen lines above the table cell**, found by the fix agent, in no brief.

**The cap is not the villain; compressing to fit it without re-reading is.** The remedy that worked
every time was to **split the fact or move it to the body** — never to trim.

## What the compelled passes found

**`rules-verifier`** re-derived ~70 quotations and found **no fabricated rule number anywhere** — the
round's core work held. It found the three above, plus an **inference wearing a ruling's clothes**:
that USA Hockey's 639(a) poke-check relief *reaches* Rule 616 by removing its predicate. Both texts
are verbatim; **no USA Hockey source joins them**, and Note 1's *"that would normally be deemed a
penalty"* reads equally well as classing the *kind* of action. Labelled at **six** sites — the brief
said two.

**`safety-reviewer`** returned **no critical and no Major**; every tier it tested held. ⚠️ **It
reached 13 of 35 documents and said so** — which is what let `commit-gate` block on C6 and compel a
second pass over the twelve it named.

## Two source defects, and one that inverts a standing rule

⚠️ **A cited book was not on disk.** *Heads Up Hockey* is the authority for the corpus's
spinal-injury mechanism, quoted in two documents, and `sources/huh.txt` did not exist — the same
defect `sources/README.md` already records for the USA Hockey Casebook.

⚠️ **And `-layout` is wrong for it.** The book is a multi-column brochure; `-layout` preserves the
columns spatially and **splices them mid-sentence**, rendering the quoted passage as *"(chin toward
the chest), **this which gives your neck the www.usahockey.com**"* — the clause unrecoverable. Plain
`pdftotext` renders it intact. **The first install wrote the `-layout` extraction, in which a
verification would have reported the corpus's own quotation as absent.** Caught only because two
files came out byte-identical in size, which they could not both be.

⚠️ **An agent fabricated a URL and caught itself**, pattern-matching a plausible
`…/3_the_iihf/2026-27_iihf_rulebook.pdf` that does not exist. Found by grepping its own output and
seeing the string occurred **once, in its own line**. **Nothing else would have caught it** —
`check_links.py` does not test external URLs, and `check_external_links.py` walks a baseline a new
invention is not in.

## The dispatch defect underneath all of it

⚠️ **Brief site-lists were built from greps that stopped at the first hit per file.** An agent told
a claim was at two sites found **six**. Four of the round's defects were second or third copies. **Every
one was found by an agent grepping after it had finished, never by the brief.** The dispatcher's
greps were answering *whether* a defect existed; the number needed was *how many times*.

⚠️ **And a "do not touch X" instruction carries the same risk.** A brief told an agent
`equipment.md:346` was correct and must be left alone — true of the clause the dispatcher had read,
**and that line carried a second Hockey Canada site that stopped at the goalie's minor.** Honouring
it literally would have shipped the largest body site incomplete.

## D8, committed in the files that define D8

The round wrote **four different counts of its own wrong premises** into four documents:
`CLAUDE.md` *thirteen*, `review_process.md` *eleven*, this record *sixteen* and, in its header, *19*.
**Neither governing figure was at HEAD — this round introduced both.** Both also appended *"more
defects than were found in the corpus that round"*, a comparison **this record cannot support**,
because it states at the top that no criticals count is given, deliberately.

⚠️ **`CLAUDE.md`'s own preamble records this exact failure happening in its first draft.** It
happened again, in the same file, in the round about premises being wrong. Both governing documents
now point at this record and carry its qualification instead of restating a number.

## The reversal was not a reversal — 63.34

The round shipped 63.19's v1.0→v1.1 flip as *"the Handbook now contradicts its own Rulebook."*
A verifier sent to reframe it found the frame was wrong.

**Situation 63.34** — *"A defending player in the defending zone kicks the puck causing it to go
over the glass and out of play. Does the minor penalty for delay of game apply?"* → **"Yes"**, no
rule cited. It is **byte-identical in v1.0, v1.1 and 2026/27** (`:5064`, `:5064`, `:5108`).

⚠️ **So v1.0 answered the same question both ways at once** — 63.19 *"No. Rule 63.2 (III)…"* and
63.34 *"Yes"*, in one document. v1.1 did not introduce a contradiction with the Rulebook; it
**removed one inside the Handbook**, leaving the answer the majority already gave. Reading it that
way is *"the more economical account — but that is an inference about an intention the IIHF has not
written down"*, and because neither situation cites a rule, **no edition of either document says
why the answer is Yes.** Recorded as an inference, labelled as one.

**And the underlying question is a word neither book defines.** Rule 63.2(II) — verified identical
across all three rulebook editions, and **the only clause in the whole of Rule 63** (lines
5128–5281, read in full, not sampled) that names the foot. If *"deliberately"* attaches to **putting
the puck out**, a kick meant to block a pass is not (II)'s offence and the Handbook's Yes needs a
reading of (III) wider than (III)'s words; if it attaches to **the kick**, the Yes is (II) as
written and there is nothing to report. The corpus now states the conditional instead of picking a
side. The playable instruction — under the IIHF, clear with the stick — is unchanged, and is *"the
right answer on every reading."*

**A third divergence, running the other way.** Situation **63.29** (goalkeeper's stick save propels
the puck out) — *"Rule 63.2. talks about deliberate, the save cannot be seen as falling under this
criteria"* — identical in all three editions. The Handbook is **narrower** than 63.2(III) there,
which names the stick and attaches no deliberateness. The Foreword's ranking cuts both ways.

⚠️ **A contradiction caught by reading the whole file, not the hunks.** `risk_management.md:305`
already said *"outside your defending zone you are safe only if it was an accident"* — read aloud
beside the new conditional, a settled answer to the exact question the next paragraphs declare
unsettled. Hedged in place. **This is the fourth time this round that diffing the whole file, rather
than trusting one's own hunks, was what found the defect.**

**Census run by the coordinator afterwards, on the agent's own handover:** no document outside the
three still carries the flat *"the two documents disagree"*. The corpus is internally consistent on
the point it came to fix. That was the one thing the agent declared it could not reach.

## Two clipping findings, propagated

**M1 — the corpus had USA Hockey's clipping tier exactly inverted.** It gave NHL and IIHF ceilings
and said of USA Hockey only *"though it needs the purpose"*, reading as a **lower** bar. **639(b):
*"A major penalty plus a game misconduct penalty shall be assessed to any player who recklessly
endangers an opponent as a result of tripping, clipping or leg checking."*** Plus 639(c)'s match
penalty and Casebook 639 Situations 4 and 5. USA Hockey is **the harshest of the four here, not the
mildest**: the *clipping* label buys the purpose requirement but **not the tier**, and a slide judged
reckless is a major and an ejection **with no injury and no purpose shown**.

⚠️ **The finder's own account of why four passes missed it:** *"I found it only because I grepped
USA Hockey Rule 639 in full for an unrelated reason and read one subsection past the one the corpus
quotes. Had I trusted the corpus's own citation boundary, I would have missed it, exactly as four
prior passes did."* **The corpus's citation boundary is not a search boundary** — and nothing in the
gate or the checkers encodes that.

**M2 — the facts layer gave the knee line only.** **Hockey Canada 8.7 is *"below an opponent's
hips"*** (`hc.txt:7097`). A reader under Hockey Canada was being taught a line **below** the one
they are actually judged against. Propagated to facts, body, Common Mistakes, Key Takeaway 3 and
Sources in both files.

**One safety-reviewer finding refuted.** `defender.md:68` was reported as a `Targets:` fact with no
body support; the content is in the body verbatim at `:81`. **Nothing restored, nothing lost** — and
a repair made on that report would have duplicated a sentence into a file already carrying it.

## The correction reached six bodies and stopped at the facts layer

A coordinator census of every `broken skate` site in `content/` — run because the whole-book IIHF
diff surfaced the contradiction, not because anything flagged it — found the round's own
newest correction **half-propagated**.

**The finding it propagates:** the IIHF book writes the post-icing substitution ban **twice**, and
the two copies do not carry the same list. Verified in the primary text:

- **81.4 LINE CHANGE ON ICING** — *"…to replace a goalkeeper who had been substituted for an extra
  attacker, to replace an injured Player, **a Player with a broken skate**, or when a penalty has
  been assessed which affects the on-ice strength of either team."* **Four.**
- **82.1 LINE CHANGE**, later paragraph of the same rule — *"A team that is in violation of ➔ Rule
  63.8 – Delaying the Game or ➔ Rule 81 – Icing, shall not be permitted to make any Player
  substitutions… to replace a goalkeeper who had been substituted for an extra attacker, to replace
  an injured Player, or when a penalty has been assessed…"* **Three.** No broken skate.

**Neither rule says which governs.** Eleven documents teach the fourth exception. **Five carry the
caveat; six do not**, and in two of the five it reached the body and **not the facts blocks** —
which are read aloud standalone, where *"in Britain there are four ways off the ice after your own
icing"* is a settled answer to a question the book does not settle.

⚠️ **This is the round-10 failure exactly: a correction that reached the body and stopped.** It was
found by a census, and **nothing in the gate or the checkers would have found it** — `check_facts.py`
cannot compare a fact against the body it came from, and the body was right.

### The extraction trap that nearly produced a false refutation

⚠️ **The coordinator read 82.1's opening paragraphs and drafted a refutation of the entire finding**
— because 82.1's first paragraphs are about line-change *procedure* and carry no exception list at
all. **The ban sits several paragraphs further down, past a page-break splice** (`TABLE OF CONTENTS`
and the running header `I I H F O F F I C I A L R U L E B O O K 2025/26 – S E C T I O N 10`
spliced mid-rule). A `sed` window ending before the splice shows an 82.1 that does not contain the
rule it contains.

**It was caught by printing the whole rule block instead of the window.** This is the false-absence
class the style guide already documents for hyphen wraps, in a form the style guide does not list:
**not a broken word, a broken rule.** The near-miss would have been a refutation of a true finding,
reported with a verbatim quotation of the wrong paragraph — the most credible kind of wrong.

**Briefed to every agent on this finding as the first thing to verify.** The corpus's own
citation boundaries and a `sed` window are both search boundaries that are not evidence boundaries;
this round has now been bitten by that twice, in `usah_639` and here.

### The reading that may yet refute the corpus

**82.1's ban is triggered by *"Rule 63.8 – Delaying the Game **or** Rule 81 – Icing"*; 81.4's by
icing alone.** There is therefore a *lex specialis* reading on which the two never conflict, and the
corpus is currently **split on which framing it uses** — `faceoffs.md` says 81.4 *"is the rule
specific to icing and is the one to work from"*, while `forechecking_systems.md` and
`on_ice_communication.md` say neither book says which governs. **Both are shipping.** Sent to the
agents as the thing most likely to refute the brief, with round 44's manufactured divergence named.

## The contradiction is real, the resolution was not — and the file said both

Sent to refute the 81.4/82.1 finding, an agent **confirmed it** and then found the corpus was wrong
in the opposite direction from the one anyone had looked for.

**Three structural grounds, all new, all favouring 81.4:**

1. **NHL 81.4 and NHL 82.1 give each other's three exceptions.** A normalised word-level diff of NHL
   81.4 against IIHF 81.4 returns **exactly one opcode** — `insert: ['a','player','with','a','broken','skate,']`.
   The IIHF copied the NHL and inserted the clause into **81.4 only**.
2. **IIHF 63.8 — the other rule 82.1 names — gives exactly 82.1's three**, for a displaced net. So
   82.1's list is the **shared/general** one and 81.4's is the icing-specific one.
3. **The four-exception list is the IIHF's live drafting template.** The 2026/27 book's new Appendix
   VII rule 84.7, for a no-line-change situation it calls *"akin to Icing infraction"*, reproduces all
   four **including the broken skate.**

**And no precedence rule exists to settle it.** Searched in both editions for `takes precedence`,
`shall prevail`, `in case of any contradiction`, `more specific rule`, `conflict between`, plus the
whole front matter: **zero hits.** The only ranking sentence in the IIHF corpus ranks **documents**,
not rules within a book. `broken skate` returns **zero** in all three Situation Handbook editions.

⚠️ **So the verdict inverted the brief in both directions at once.** The corpus was **not**
overstating a contradiction — it is real and textual. **`faceoffs.md` was overstating the
resolution:** *"81.4 is the rule specific to icing and is the one to work from"* was written as a
**ruling** and is a **reading**. It now carries the three grounds and says so.

⚠️ **And the agent refused to let the finding travel further than the evidence.** Of the two
documents saying *"neither book says which governs"*: *"Do not 'correct' them to assert the
resolution. Their statement is literally true and my searches uphold it. What they could gain is the
three grounds, not a verdict."* **That is non-negotiable 4 being defended against a correction, by
the agent that produced the correction.**

### Two contradictions inside one file, neither in the brief

The broader sweep found `faceoffs.md` asserting, at `:833`, that *"Rules 81.4 and 87.1 impose both
restrictions **in the NHL's own words**"* and at `:836` that *"Rule 81.4 **repeats word for word**."*
**Both contradicted by the one-opcode diff — and by the same file's own `:884`** (*"The IIHF book
lists four"*) **and by `breakouts.md:987`** (*"81.4 is not word for word"*). ⚠️ **A file asserting a
thing and its negation, 51 lines apart, in a corpus read aloud one sentence at a time.** 87.1 **is**
word for word; 81.4 is not, **and that difference is the entire hinge of the question.**

### The refutation that held

`breakouts.md:427`'s *"IIHF 81.4 differs **only by one** extra substitution exception"* was briefed
as an unchecked completeness claim about a whole rule. **It is exactly true** — one opcode, the rest
word-for-word identical including the *"when the puck leaves the offending Player's stick"* sentence.
**No change made.** ⚠️ **The agent then attacked its own confirmation:** *"I verified it by diffing
81.4 against 81.4. If readers take 'differs only by one' as a claim about the whole icing regime
rather than that one rule, it is true as written and misleading as heard — and only a reader test,
not a grep, would surface that."*

## A silent line-number desync between Python and every shell tool

⚠️ **An agent's first three rule diffs landed on the wrong rule and produced garbage that looked like
findings.** Cause: `pdftotext` emits **form feeds** at page boundaries — **228 in
`iihf_rules_v1.1.txt`** — and Python's `splitlines()` treats `\f` as a line terminator while
`grep -n`, `sed`, `awk` and `split('\n')` do not.

| Method | Lines | `81.4.` at |
|---|---|---|
| `split('\n')` — agrees with `grep -n`/`sed` | 10,984 | **6673** |
| `splitlines()` | 11,211 | **6810** |

**A 137-line offset at Rule 81.4, drifting to 227 by end of file.** ⚠️ **Every line number in this
project's records is `grep -n`-based**, so a Python tool using `splitlines()` does not merely report
unresolvable numbers — **it slices a different rule and reports on it confidently.** Reproduced and
measured by the coordinator, then written into `sources/README.md` and the style guide. **This is a
tooling defect that manufactures findings, which is the worst class this project has.**

## Site review — the rendered page, in a real browser

**Build:** clean rebuild from `clean:cache` passes. 50 pages · 9,492 internal links (5,301 with
anchors) · 453 assets, all resolving. Pagefind indexed 37 pages. `check-arrivals`: 0 hard, 7
advisory (pre-existing, unchanged).

⚠️ **The instrument had to be changed mid-review, and the reason matters for every future site
round.** The Chrome extension connected this time, but `resize_window(1440, 900)` produced a
**1600 × 1092 CSS viewport at dpr 1.5** — so the viewport matrix would have been wrong and
coordinate clicks missed their targets by ~250 CSS px — and `computer screenshot` returned a **blank
frame** deep in tall pages (on a 58,313 px document at `scrollY 55200`, blank white while
`document.elementFromPoint` returned the correct paragraph: painted, not captured). **Everything
load-bearing was redone in real Chrome headless over CDP.**

**Verified:** all 8 hub pages in 4 cells (cards sum to 37, `bodyOverflow = 0` everywhere) · RSS ·
Open Graph · `CiteThis` copy with a real CDP mouse click, clipboard matched byte-for-byte · all **37**
document eyebrows pointing at the new hubs with **zero** surviving `href="/#layer"` and the home
anchors still present, so external bookmarks do not break · theme toggle persisted across two
navigations with a synchronous pre-stylesheet init and no flash · facts blocks rendering as
`dl.facts` with **zero** raw `<pre><code>` across 18 audited pages · 320 px reflow with zero clipped
leaves · contrast AA in both themes (lowest **4.60** light, **5.26** dark) · **zero** console errors
and **zero** off-origin requests, statically confirmed across all 50 built files.

**The trailer-plugin fix holds.** On `faceoffs`, `aside.verification-notes` is outside the collapsed
`details.sources` and its five children are in **exact source order**. Swept all 37 documents:
`notesInsideSources = 0`.

⚠️ **`CiteThis` stays out of the search index, confirmed two independent ways** — decompressing all
37 Pagefind fragments (4.6 MB) for `howpublished`/`CC BY-NC`/`BibTeX`, **zero**; and a live query
returning *"No results"*.

### What the site review could not reach, and why the coordinator's follow-up mattered

It declared production CloudFront out of reach. **Checked centrally afterwards, and it reversed the
review's conclusion on two rows before they were closed wrongly:** production carries **no
`og:image`** and **`/rss.xml` 404s**. The review had proposed closing P4 and P6 as *"stale rows
describing the pre-change state"* — **true of the built output, false of the live site.** The actual
cause is neither: the three files are **staged and never committed**, so the feature has never
shipped. **A row closed on the review's evidence alone would have recorded a fix that no reader can
see.** *(See P4/P6 in the plan for the deploy-runner Chrome risk that survives the commit.)*

### Five findings routed, not fixed

**M1 — safety-relevant rule text is rendering behind a closed disclosure triangle.** **15 pages**
carry ⚠️ markers inside `<details class="sources">`, which has no `open`. **Confirmed content, not
renderer** — the author wrote them into the Sources paragraph. ⚠️ **The example is not
bibliographic:** `risk_management.md:807` reads *"A hand closed on a puck that is in the crease is
the penalty shot or optional minor…"* — **a rule a reader can be penalised by, behind a triangle.**
Routed to `safety-reviewer` for a rule on which of these belong in the body. **The reviewer declined
to route around the content agents:** *"whether these should be promoted out of the Sources line is a
content judgment, and I am not routing around them."*

**M2** — two documents render verification notes as an `<h2>` before the Sources disclosure rather
than via the plugin's title, so the information appears in the page ToC on 2 documents and not on 15.
**Faithful to source, not a regression**; a content-consistency question.
**M3** — the 8 hub pages carry no `data-pagefind-body`, so a reader searching a section name never
finds the section page. Defensible, but now an explicit decision.
**M4** — local `text/xml` on the feed (above). **M5** — `body_contact_and_battles` §5's scope caveat
*"everything below is a penalty"* renders as the **lower-urgency green** callout while less
consequential items on the page get amber. Judged not a colour-alone failure since the bold lead
carries it; routed to `safety-reviewer` to rule on.

⚠️ **The review's own closing line is the one to keep:** *"every check in this report is about whether
the page displays what the Markdown says. Not one of them can tell you whether what it says is true.
The `uk_rules` birth-year table renders perfectly in four cells — I confirmed the pixels, not the
years."*

## A safety inversion that was wrong about anatomy, not phrasing

`defender.md:600` read *"Hockey Canada 8.7 draws it **lower**"*. **Hockey Canada 8.7:** *"Clipping,
also known as a 'low hit', is where a player uses their body to make contact **below an opponent's
hips**."* ⚠️ **The hips are above the knees.** Hockey Canada's line is therefore **higher on the
body**, and its rule **wider** — it catches more contact, not less. *"Lower"* told a reader under
that book the legal threshold sat further down the leg than it does, in a sentence read aloud alone.

⚠️ **This was not a word chosen badly; the sentence was wrong about where the body parts are.** It
was found by a coordinator relay from one agent's report into another agent's file, and both agents
independently landed on the same fix — **naming the body part rather than a direction.** *"Draws it
at the hips"* cannot invert. **Comparative words for anatomical thresholds are the hazard**; the
absolute is safe.

## The brief was wrong, and the agent proved it mechanically

The brief flagged `defender.md:547`'s *"81.4's **only departure** is one extra substitution
exception"* as an unchecked completeness claim about an entire rule, and asked for it to be weakened.
**A case-folded `SequenceMatcher` diff of the two full rules returns one opcode:**
`insert  NHL=''  IIHF='a Player with a broken skate, '`. **"Only departure" is exact.** Kept, and the
word-for-word framing added to three files **as positive evidence**. IIHF 2026/27 81.4 asserted
equal to v1.1 in the same script.

⚠️ **That is the second time this round a brief asked an agent to narrow a claim that was true**, and
the second time the agent refused with a measurement rather than an argument.

## Negatives corroborated positively, which is the harder and better thing

`team_play_and_culture.md`'s *"USA Hockey imposes no substitution bar after an icing at all"* was a
**negative existence claim about two named rules**. The agent read Rule 624(a)–(d) and Rule 204(a)–(d)
**in full**, flattened both `usah.txt` and the 476-page `usah_casebook.txt`, and printed every window
where *icing* co-occurred with substitution language. **Nothing.** ⚠️ **Then it found positive
corroboration**, which a failed search can never supply — the USA Hockey **Glossary**:
> *"Line Change Procedure: The player substitution process during **ALL STOPPAGES** where the
> visiting team must immediately complete any player changes within five seconds."*

**And a structural contrast:** NHL/IIHF 82.1's first paragraph carries *"except in cases following an
icing"*; **USA Hockey 204(a), the parallel provision, carries no such clause.** The absence is in the
place the other books put the presence.

**Same method on the England Ice Hockey column.** The brief asked whether a **silent** book was being
reported as an **adopting** one. It is not: both In-House editions state *"Unless otherwise stated,
all rules will be enforced in line with the IIHF Rule Book,"* and Section 10 of both contains no Rule
81, no Rule 82 and no substitution material. ⚠️ **The book makes its own silence operative** — so
silence here *is* adoption, and the quotation was moved into the table cell so that travels with the
claim.

## The Handbook is not a safe authority here either

⚠️ **Situation 81.7 states a THIRD, narrower list.** Answering a glass-breakage delay: *"No. Only
time a line change is permitted is when a penalty is assessed which affects the on-ice strength of
either team. Rule 81.4."* **That omits even the two exceptions 81.4 and 82.1 agree on.** It cannot be
read as exhaustive — and it means the Handbook cannot be used to settle the exception list in either
direction. **Kept out of `content/` and reported**, correctly: it would confuse a reader without
changing any action.

## Two claims written, then removed by their own author before finishing

The agent drafted a Common Mistakes entry asserting *"neither is a broken stick, in any of the four
books"* and an unsourced Hockey Canada paraphrase. **It caught both on its own re-read.** The
broken-stick claim was **deleted unverified** — *"Rule 10.3-type provisions make it genuinely
non-obvious"*. The Hockey Canada claim it then **verified and quoted verbatim** (`hc_layout.txt`
6.7(d)(i), scoped to U18AAA, Junior and Senior at the Member's option). **It also replaced an
invented sanction — "a bench minor for too many men" — with IIHF 82.2(V)'s actual words.**

⚠️ **An invented sanction is exactly the failure this project's first non-negotiable exists to stop,
and it reached a draft in the round about premises being wrong.** It did not reach a file. **The
mechanism that caught it was the author re-reading their own new text as new text**, which is the
standing rule: *a repair is new text, and new text has not been reviewed.*

## Staging a file and then resuming its agent — a new coordination defect

An agent opened its final report with a blocker: **66 paths staged, its own three files caught
mid-edit.** It proved it properly, with `git show :path` against the index rather than by inference:

| Phrase | In index | In working tree |
|---|---|---|
| `the two rules are meant to be read together` | ✅ | ✅ |
| `as stable as the rules are` | ❌ | ✅ |
| `does not repeat the broken skate` | ❌ | ✅ |
| `that its own 82.1 omits` | ❌ | ✅ |

**So the index held `faceoffs.md` with the full treatment and `breakouts.md` and `center.md` with
none of it** — the propagation half-done, which is the exact state the propagation rule exists to
prevent.

⚠️ **Its diagnosis of the cause was wrong, and the wrong cause matters.** It read the shape as
`git add -A` or `git add .`. **No blanket add was ever run** — every stage in this round named its
files. The 66 paths are the accumulation of a dozen targeted adds across a long round.

**The actual cause is a mechanism nobody had written down:** the coordinator staged the agent's three
files **on its completion notification**, then **sent it a message**, which *resumed* it — and it kept
editing files that were already in the index. ⚠️ **`SendMessage` to a finished agent is not a
question; it restarts the work.** Staging is only safe against an agent that will not be resumed,
and the coordinator has no way to know that at the moment it stages.

**Rule, added to the loop: stage a file only when its agent is finished AND will not be resumed —
in practice, immediately before the gate, not on each notification.** Re-staged and verified by
re-running the agent's own four probes against the index; all four now present.

⚠️ **The part worth keeping is what the agent said about the checkers.** *"`check_facts.py` and
`check_links.py` read the working tree. Every pass I report is a pass on the working tree, not on
what is staged. `git-guard.sh` gates commits on those same checkers, so a commit now would pass the
hook while shipping content nobody verified."* **That is a real gap in the mechanical gate, and it is
correct.** The hook cannot see a divergence between index and tree, and neither can any checker in
`scripts/`. **The only defence is the coordinator not creating the divergence.**

## Three joint citations, and an argument that does not need lex specialis

The Situation Handbook evidence turned out to be **three** occurrences, not one: Situations **81.6,
81.8 and 82.1** all cite *"Rule 81.4 and Rule 82.1"* jointly, **in both editions**.

⚠️ **And a better-grounded reading than the one the brief asked to be tested.** **Neither 81.4 nor
82.1 contains *"only"* or *"solely"*, in either edition.** Each is a ban followed by *"However, a team
shall be permitted to…"* — **a permission grafted on, not a closed list.** On the read-together
reading, **82.1's silence about a broken skate is an omission, not a prohibition, and the exception
stands** — which resolves the question **without either rule having to displace the other**, and so
does not depend on *lex specialis* at all.

⚠️ **The agent then attacked its own argument, twice.** The joint citations are *"equally consistent
with the Handbook's authors simply not having noticed the lists diverge — a citation habit is not a
considered ruling."* And the no-closed-list argument *"rests on the absence of the word 'only'; a
drafting convention that treats such lists as exhaustive without saying so would defeat it, and no
grep can detect a convention."* **Both limits are in the corpus text, not just the report.**

**A false positive its own broad grep produced, caught by reading:** `faceoffs.md:550`'s *"Kicking it
back is **a fourth** option only under NHL rules"* — faceoff technique, nothing to do with
substitution. **Left alone.** ⚠️ **And the relayed site list was short in the other direction too:**
it missed `center.md:586`, a `Rule:` line reading *"you cannot change **at all** under NHL and IIHF
rules"* — an absolute contradicted by the rules' own exception lists.

## The rule-scope worklist, run and triaged rather than swept

`check_rule_scope.py` was run after the round's citation work. **Rule 81.4 shows 32 units at spread
4, six of them naming no book at all** — which looked alarming, because NHL 81.4 and IIHF 81.4 are
**precisely the two texts this round proved differ.**

**All six read, all six correct.** `on_ice_communication.md:272`, `breakouts.md:426` and `:798`,
`faceoffs.md:819` and `:875`, `special_teams.md:968` cite 81.4 for **the parts where the two books
agree** — the substitution ban itself, the shared *"goalkeeper who had been substituted for an extra
attacker"* exception, and the home-team last-change order. **None of them touches the broken-skate
clause**, which is the sole point of divergence, and where the corpus does discuss it the adjacent
unit carries explicit book scope (`breakouts.md:427`, `faceoffs.md:876`/`:877`).

⚠️ **Recorded as a checked negative so the next reader does not re-open it — and because acting on
the flag was the trap.** The tool says so itself: *"a site naming one book because it discusses one
book is correct, and a tool that ranked these and then offered to fix them is precisely how round 44
manufactured a divergence that did not exist."* **The same holds for naming no book when the books
agree.** Six edits adding book scope here would each have been individually defensible and
collectively noise.

## The safety pass found a rule the corpus has never cited, by refusing the question's framing

Sent to second-read one sub-section — **IIHF 82.2(V)** as the penalty hook for an unpermitted
substitution — the reviewer printed **all of Rule 82** instead, and its own account of why that
mattered is the finding:

> *"I found Rule 82.3 because I printed the whole of Rule 82 rather than the sub-section I was asked
> about. Had I windowed to 82.2 as the brief framed it, I would have confirmed the agent's hook,
> missed the NHL's no-warning bench minor entirely, and returned 'yes, it's only a warning' — the
> exact false clearance this dimension exists to prevent."*

⚠️ **`grep -rn "82\.3" content/` returns ZERO.** A rule titled *"LINE CHANGE – BENCH MINOR PENALTY"*
is **absent from a corpus that discusses line changes in eleven documents.**

**82.2(V) was upheld as the right hook for the *remedy* and found incomplete for the *penalty*.** The
Rule 74 rejection was upheld too, on a full read of all four sub-sections.

### CRITICAL — "you just get a warning" is wrong three ways, in the section where it costs most

1. **The 82.2(V) warning is once per team per game and is NOT reserved for this offence** —
   *"any subsequent violations"* is unqualified as to which of (V)'s three acts. A team warned in the
   first period for any improper change has **spent it**.
2. **82.2(VIII) disapplies only points (vi) and (vii)** in the last two minutes and overtime.
   **(V) survives** — into exactly the situation the passage sits under, headed *"With the goalie
   pulled."*
3. **IIHF 82.3 ¶2 has no warning precondition at all:** *"Any attempts to delay the game by stalling
   or otherwise unnecessary actions by either team shall result in the assessment of a bench minor
   penalty."* Arguing it at the boards is a separate bench minor.

⚠️ **And the NHL — the book this corpus is primary to — is harsher still.** **NHL 82.3 ¶1:** *"Any
attempt by the **visiting team** to make a change after the Referee's signal **shall result in the
assessment of a bench minor penalty** for delay of game."* **No warning.** The NHL's own 82.2(v) says
warning-first for *"either team"* two paragraphs earlier. ⚠️ **So the NHL book contradicts itself
here exactly as the IIHF does on 81.4/82.1 — and nobody had noticed, because 82.3 has never been read
for this corpus.**

⚠️ **Propagation measured: the exception is in ELEVEN documents; the consequence is in ONE, and
understated there.** Ten documents tell a reader an exception exists and **may not be honoured by the
official in front of them**, and none says what happens if they act on it. **That is the round-10
shape again, and this time the round created the exposure itself** — the hedging work earlier in this
same round is what put "an official may allow it" into ten files.

### MAJOR — the omitted adverse authority uses the corpus's own key word

The corpus argues that 82.1's silence is an *omission* rather than a prohibition, partly because
**neither rule contains "only"**. ⚠️ **The Situation Handbook does — against that reading.**
**Situation 81.7**, identical in both editions: *"No. **Only time** a line change is permitted is when
a penalty is assessed which affects the on-ice strength of either team. Rule 81.4."*

It excludes the injured player and the returning goalkeeper too, so it reads as a loose answer to a
narrow question rather than a ruling — **but it is the Handbook's only sentence bearing on the size of
81.4's list, and it points away from the corpus's reading.**

⚠️ **Note precisely how it was missed.** A grep for `broken skate` returns nothing in 81.7, because
**81.7 contradicts the exception without naming it.** The file's verification note is built from four
such negative searches — *"each is honest and each is blind in the same way."* **A negative search
cannot find adverse authority phrased in different words.** That belongs in the standing method, not
just this record.

*(An earlier agent had already reported 81.7 as "unhelpfully loose" and kept it out of `content/`.
**Two independent readers reached it and only the second saw it as adverse authority owed to the
reader.** The first was not wrong about its looseness — it was wrong that looseness made it
omissible.)*

## Colour recorded the author's typing, not the danger

`WARNING_RE = /^\s*(⚠|❗|🚫)/u` types callouts on whether a glyph was typed. On
`body_contact_and_battles.md` — the corpus's highest-hazard document — every blockquote was
enumerated: **four penalty statements green**, including *"everything below is a penalty, and it is
not capped at a minor"* and *"blade on the ice does not mean it cannot be a cross-check. That is NOT
the rule"*, **while the amber panels were the British age question and a caveat about a statistic.**

⚠️ **A site review had looked at the same page and judged it "not a colour-alone failure."** That
narrow call was **upheld** — the bold lead carries the meaning. **The defect was one level down**, and
found only by enumerating every blockquote in the file rather than examining the one that was flagged.

**§5's restriction itself was verified fully propagated and is NOT a defect** — body, facts (its
first `Never:` line), Common Mistakes ×3, **and audio**, confirmed by rendering the document. **The
round-10 critical there is genuinely closed.**

### A false comment in the renderer, standing as an instruction to authors

`remark-corpus.mjs` asserted that *"a blockquote does not reach the speech layer — `md_to_speech.py`
drops the quoted form, so a penalty warning written as `> ⚠️ …` is never read aloud."*
⚠️ **Measured false.** Rendering `body_contact_and_battles` puts §5's blockquote into `025.ssml`
verbatim; only header blockquotes matching `"rule set:"` in their first 40 characters are dropped.
**A future author acting on that comment would have restructured safety warnings to escape a
speech-layer problem that does not exist.** Corrected, with the measurement recorded in place.

⚠️ **This is the third false premise this round found inside the project's own tooling and
documentation rather than in the corpus** — after the `rules-verifier` source table naming four
files that do not exist, and the `source-verifier` example using `/tmp` while forbidding it.

## A rule about a league with no rulebook, stated bare in sixteen documents

Non-negotiable 2 reads *"Never state a rule from memory or from a blog. Rules come from primary
rulebook text on disk, grepped, with the wording quoted."*

⚠️ **Corpus census: the trapezoid rule is attributed to the KHL in 33 places. 28 are bare. Five
carry a disclosure, and all five are in `defender.md`.**

| | Documents | Sites |
|---|---|---|
| **Bare** | **16** | **28** |
| Qualified | 1 (`defender.md`) | 5 |

⚠️ **Those are the AS-FOUND figures. Re-measured after the repair: 15 bare across 8 documents, 30
qualified across 9** — thirteen sites labelled in the eight documents that were free, and the
remaining fifteen left because other agents held their files at the time. **The plan's open row
carries that fifteen, and the two figures agree.** *(The total rises from 33 to 45 because each label
adds the string `KHL` again.)* **Recorded because this table would otherwise read as the current
state, which is the staleness this round has had to correct three times.**

**Several of the bare ones are ` ```facts ` `Rule:` lines** — voiced standalone. *"Under NHL, KHL and
IIHF rules the goalie may play the puck behind the goal line only inside the trapezoid"* is a rule
claim about a league nobody has checked, heard with nothing around it.

**Established centrally:** `ls sources/` holds NHL, IIHF (three rulebook editions plus three Situation
Handbooks), USA Hockey and its Casebook, Hockey Canada, the British books and coaching material —
**no KHL anything**; `find -iname "*khl*"` outside `.git` returns nothing. ⚠️ **And one was attempted:
`https://www.khl.ru/documents/` with a browser user-agent returns HTTP 403 after 30 redirects**;
`en.khl.ru` and the site root return unresolving 307s. **No KHL rulebook was obtainable.**

⚠️ **So `defender.md`'s disclosure is accurate, and the fix is to label the other 28 — not to source
them and not to delete them.** Non-negotiable 3 governs: this project has already lost a *correct*
fact to a tidying pass.

⚠️ **This is the ownership rule running backwards for the second time in one round** — after
"one defenceman is always above the puck", where the owner also held the weaker form. **In both cases
the single honest document was the outlier and the majority was bare.** A reviewer comparing a
document against its siblings for consistency would have "corrected" the honest one both times.

## The wrong-subject fix, and a relay error in the opposite direction

`defender.md` is the named owner of *"one defenceman is always above the puck"* — and **it named the
wrong subject**, not merely an under-hedged one. `offensive_zone_play.md` says a five-man rotation
covers the line *"with whichever player is highest"*; `puck_support_and_spacing.md` says a single-high
structure makes *"the weak-side winger the safety"*. **Four documents held the corrected form and the
owner held the wrong one**, including a facts line reading as a flat law of hockey.

⚠️ **There was also a contradiction six lines apart inside the owner's own section** — `:456`
*"Someone has to be the safety valve above the puck"*, naming a **forward**, immediately above `:462`
asserting it is always a defenceman.

⚠️ **My relayed site list was wrong in the opposite direction from the round's pattern.** I named
four sites; **only two were the claim.** `:699` is the *pinching* convention — the thing I had
explicitly said must not be swept — and `:631` was already in the corrected form. **A uniform sweep of
my four would have produced exactly the wrong wording my own brief predicted.** The round has now
measured relayed lists failing **both** ways: short in one direction, wrong at an entry in the other.
(Figures tabulated once, below.)

**The agent also deleted a sentence of its own before saving** — a claim that under a single-high
structure *"no defenceman is up there at all"* — because `puck_support_and_spacing.md`'s *"licensed to
walk the line"* is genuinely ambiguous about whether the D stays high. *"That is an unverified
reading, not a finding."*

## Colour was fixed, and the fix reached the audio too

Three penalty statements promoted to amber — a stick-on-hands penalty, §5's checking-league scope with
its penalty ladder, and the cross-check misconception. **All three verified against primary text
before being given maximum visual weight**, which is the right order: NHL 59.1, IIHF and Hockey Canada
carry no blade element, and **USA Hockey alone adds *"with no portion of the stick on the ice"***.

⚠️ **An unadvertised second effect, measured:** `md_to_speech.py` sets `important = "⚠" in text`, so
all three now open with *"Important."* in the audio. **The colour fix silently promoted three penalty
warnings in the podcast layer as well** — nobody had predicted that, and it is the right direction.

⚠️ **The open judgment was answered by refusing its framing.** Asked whether an amber panel about a
*statistic* should be demoted, the reviewer said leave it: the panel sits directly beneath the 70%
claim it **retracts**, and *"if the retraction renders at a lower urgency than the claim it retracts,
a scanning reader takes the 70% away and leaves the correction behind — the same failure shape you
asked me to fix, pointed at a number instead of a penalty."* **The hierarchy argument for demoting it
had also evaporated**: it was anomalous only while it was the sole amber against four green penalty
statements.

**And one panel was deliberately left green, with the reasoning recorded rather than implied:** it
contains a claim the document itself labels as having *"no hockey safety authority behind it"*, and
amber *"would lend that labelled-unverified claim the same visual authority as the sourced correction
beside it."*

⚠️ **The handover that closes this:** the whole finding is about a **class attribute**, derived by
simulating the plugin in Python. *"If the stylesheet's `callout-warning` rule is broken or the amber
is not actually more urgent-looking than the green, my finding is correct about the class attribute
and wrong about what the reader sees."* **A real-Chrome check is the only thing that closes it.**

## A zero-hit grep that would have called a true quotation fabricated

⚠️ **`grep "Adult Male Classifications" sources/usah.txt` returns ZERO. The phrase is present.** It
wraps across `usah.txt:5111-5112`, and plain `pdftotext` joins hyphenated breaks but not this kind.
The agent built a de-hyphenated, whitespace-flattened copy **before asserting anything about USA
Hockey**, and recorded what that changed:

> *"A verifier who stopped at the zero-hit grep would have reported the corpus's 640(b) quotation as
> **fabricated**."*

**That is the false-absence trap producing its worst possible output** — not a missed finding but an
invented one, accusing correct work of the thing this project treats most seriously. The style guide
documents the mechanism; **this is the first time the round has seen it aimed at the corpus's
integrity rather than at its completeness.**

## The hedge was in the bibliography and the flat claim was in the read-aloud layer

`forechecking_systems.md`'s Sources trailer carried an honest disclosure that the Casebook's four
conditions for a legally finished check are *"a reading of its grammar, not something the passage
states"* — three sit inside one *"as long as"* clause, while the minimise-force limb is a separate
sentence phrased *"would also be expected to"*.

⚠️ **The body asserted flatly: *"Those are four conditions joined by 'and'."*** So **the stronger
claim was in the layer read aloud and the qualification was behind the disclosure triangle** — the
inverse of the propagation defect, and invisible to any check that looks for missing hedges rather
than misplaced ones. **The disclosure was propagated upward, not stripped.**

## Finding 2, largely refuted — and refuted the right way

Two of the collapsed-Sources referrals were **wrong**, and the agent proved it by reading the
primary text and then locating each item in the visible body:

- **`winger.md:663` — refuted entirely.** Every substantive item said to be trapped is already in the
  body, the facts blocks and the Key Takeaways: the crease bar and its *"the goal WILL BE ALLOWED"*
  carve-out, Interpretations 1, 2 and 3, and the 8.5(b)–(e) tiers, each verified against
  `hc_layout.txt` with the rule printed whole. **No edit made.**
- **`puck_handling.md:948` — mostly refuted.** The 639(a) Note and the Casebook limit are in the body,
  the facts block and Common Mistakes. **One item was real** and was moved: the Standard of Play's
  tripping test, *"Placing the stick in front of the opponent's legs for the purpose of impeding
  progress, even if on the ice, with no effort to legally play the puck"* — *"doing X is a penalty",
  a decision made under pressure, sitting in a collapsed box.* The *"which lives in the Casebook
  rather than the playing rules"* framing stayed in the trailer, which is exactly the split the rule
  prescribes.

⚠️ **My brief was also wrong about `rules_primer.md:801`** — I called it a Common Mistakes entry with
no consequence. **It already carried the consequence**, correctly quoted. It lacked the three
qualifications. The agent strengthened rather than added.

## Two self-corrections, one of which contradicted the next paragraph

1. The agent wrote *"the warning covers **every line-change violation**"* into **six places**, then
   caught that **82.2(VII) carries its own separate warning** for slow-to-the-faceoff and the books do
   not join them. Corrected everywhere to *"all three of the acts 82.2(V) names."*
2. It wrote *"**No book** writes a penalty for breaching the icing substitution bar itself"* — and
   **the very next paragraph of the same document correctly says Hockey Canada does**, at Rule
   10.1(vii). It verified HC 10.1 and 6.1(d) itself and rescoped the sentence to the IIHF and NHL.
   ⚠️ ***"Caught by diffing against the whole file, not by trusting my own hunk."*** **That is the
   fifth time this round.**

## Two negatives closed centrally, and two gaps opened

**Closed:** the NHL has **no counterpart to IIHF 82.3 ¶1** at all — a two-extraction negative search
over `nhl_rules.txt` and `nhl_rules_layout.txt` for `tardiness|last change|deliberate error` returns
**zero**. So the NHL **replaced** the IIHF's warning-first paragraph with a no-warning bench minor:
**the divergence is structural, not a wording slip.**

**Closed:** `game_management.md` asserted no In-House amendment on the strength of the **2025-26**
edition while the **2026-27** edition sat on disk unchecked — flagged as a live edition-currency risk
the agent could not close. **Searched centrally:** `Rule 82`, `82.<digit>`, `line change` return
**zero** in `eiha_inhouse_2026-27.txt`, `eiha_inhouse.txt` and `eih_rr.txt`; the 2026-27 book's
Section 10 carries Rules 76, 78, 84 and 85 and **no Rule 81 or 82**. **The claim holds against the
current edition.**

**Opened — two rulings the corpus does not carry, both found while verifying something else:**
- **Hockey Canada Interpretation 4 to Rule 8.5(a)** — an attacking player leaves the crease, then
  shoots the puck in: *"**GOAL.** The puck did not enter the goal while the attacking player was
  actually in the crease."* A net-front ruling, absent from `winger.md` and from the corpus. ⚠️ **The
  agent did not edit it in under a safety brief because it is permissive, not penalty-bearing** —
  correct restraint.
- **A fifth legality route for a finished check**, in the USA Hockey Casebook: contact is legal
  *"provided the defending player maintains their normal skating lane and reasonable foot speed…
  However, if the defender initiates contact by stopping or changing their skating lane to cut off
  the opponent, an interference penalty would be the correct call."* **A legality test for contact,
  absent from the corpus.**

## A checker failure that was a race, correctly diagnosed and not touched

An agent reported `check_facts.py` failing on `forechecking_systems:465` — *"a `Rule:` fact is 311
chars, over 300"* — noting it **passed on its first run and failed on its second**, with `git status`
showing that file `MM`. **It did not touch it.** Re-run after the owning agent finished: **794 blocks,
4,896 facts, all conforming.** ⚠️ **This is commit `239f70d`'s failure mode caught before it caused
anything** — a checker reading the working tree while another agent is mid-write. **The right
response was the one taken: report the file as contended, do not repair someone else's half-written
line.**

## The coordinator broke the one hard parallelism rule, and got away with it

⚠️ **Two agents held `game_management.md` at the same time.** The coordinator dispatched a second
agent onto it while the first was still live — the single rule CLAUDE.md states as *"file ownership
must be disjoint, and it must be stated."*

**Checked rather than assumed, the moment it surfaced:** the first agent's work survives — 7
occurrences of `82.3`, its new facts line at `:351` with body support at `:362`, all five checkers
passing. **Nothing was lost.** The second agent was messaged mid-flight, told to re-read from disk
before any further edit, given the list of the first agent's contributions to verify by name, and
had its scope on that file cut to a single Sources line.

⚠️ **Record it as luck, not method. This is the second time in this round** — the first was one file
split between two agents by *section*. **Both times the check was run afterwards and both times it
came back clean, which is exactly the evidence pattern that makes the rule easy to stop taking
seriously.** Commit `239f70d` exists because it went the other way once.

⚠️ **And the same agent independently flagged that the coordinator had staged its files mid-flight**
— the defect already recorded above — verifying with `git show :path` that its edits reached the
index. **Two separate coordinator concurrency errors, both caught by the agents rather than by the
coordinator.**

## A defect no checker in this repository can see

An agent inserted a paragraph using **two adjacent Python string literals split across statement
boundaries. The second was a no-op expression and the paragraph was silently dropped** — leaving a
`Rule:` facts line with **no body text supporting it**, which is precisely the extract-never-author
failure the facts layer exists to prevent.

⚠️ ***`check_facts.py` passed anyway. It cannot see this.*** Caught only by re-grepping the target
string and reading the rendered lines back instead of trusting the hunk.

**Every agent since has been briefed: if you insert prose with a script, grep for the inserted string
afterwards and read it back.**

## A third instance of the shortening — in the evidence cited *for* the corpus's reading

Situation 81.7 was the adverse authority. An agent then found **Situation 81.8 shortens identically**
— *"Both teams must replace their penalized players but **may not make any other substitutions**"* —
**and 81.8 is one of the three joint citations the corpus quotes in SUPPORT of its reading.** Same
silent exclusion of the injured player. Situations 81.6 and 82.1 do it too: *"the team that iced the
puck is **only** permitted to make a substitution for the penalized player."*

⚠️ **So the Handbook shortens 81.4's list in every situation that touches it, including the ones
being used as evidence.** Verified word-for-word across **all three** Handbook editions, and
`broken skate` returns **zero** in all three — *"a phrase-search-based silence claim was guaranteed
to miss this."*

## Two more errors caught by reading the paragraph rather than the hunk

1. A replacement left ***"So so treat the broken skate…"*** — a doubled connective that **would have
   been voiced**.
2. An inserted sentence saying *"It reads identically in the v1.0 and v1.1 **Handbooks**"* landed
   immediately before another agent's pre-existing *"Both editions read the same way"*, which meant
   the **rulebook** editions. ⚠️ **The insertion silently changed what "editions" referred to** —
   two sentences each correct, jointly wrong. Disambiguated in one word without touching the other
   agent's sentence.

## A truncated view nearly produced a fabricated-citation accusation

⚠️ **An agent was one step from filing a finding that a document cited a study its owner did not
hold** — on the strength of a `grep … | cut -c1-250` whose truncation hid the word *"Kirker"* inside
three lines that had in fact matched it. **Printing untruncated refuted it.**

**This is the truncated-view mode the style guide documents, in the exact tool it names, one round
after it was written down** — and the output would have been *"a clean, confident, well-evidenced
accusation of a fabricated citation against text that is correct."* **That is now a fifth row in
that table, and the second time this round a truncated view aimed itself at the corpus's integrity
rather than its completeness.**

## What the facts line had actually done

The `Risk:` line flagged as contradicted by this round's new exception turned out to have **two**
defects. Its body sentence reads *"there is no one — literally no one — between the puck and your
goalie **except forwards who are facing the wrong way**"*. ⚠️ **The facts line had dropped the very
clause that makes it true**, and opened on a dangling *"Lose it"* with no antecedent when voiced
alone. **It was not merely unqualified; it was a truncated extraction of its own body.** Repaired by
restoring the body's clause rather than by adding a hedge — **the force survives intact.**

**And a false credit alongside it:** the document said a sibling *"lists neutral-zone turnovers as
one of **four** causes **and states it the same way**."* The owner says **five**, enumerates five,
and names five in its Key Takeaway — and it states them **flat**, while hedging **ten** other
rankings in the same file. ⚠️ **So the borrower was crediting the owner with a hedge the owner does
not carry.** The count was wrong and the attribution was wrong in opposite directions.

## Coverage as it now stands — superseding the fifteen-files gap above

The gate blocked twice on the fifteen files the record could not show as adversarially reviewed,
including `defender.md:600-601` and its twin in `defending_the_rush.md` — **the round's own critical
repair, carrying newly-added four-book penalty tiers.** ⚠️ **That block was correct when it was
made.** What follows is what has happened since, and it is stated as coverage, not as a claim that
everything is now sound.

**`rules-verifier` has since read, against primary text on disk:** `faceoffs.md`, `breakouts.md`,
`center.md`, `rules_primer.md`, `team_play_and_culture.md`, `defender.md`, `game_management.md`,
`defending_the_rush.md`, `special_teams.md`, `risk_management.md`, `playing_without_the_puck.md`,
`defensive_zone_coverage.md`, `goaltender.md`, `puck_support_and_spacing.md`,
`neutral_zone_systems.md`, `zone_entries.md`, `time_and_space.md`, `how_to_watch_hockey.md`,
`offensive_zone_play.md`, `on_ice_communication.md`, `rink_map_and_glossary.md`, `puck_handling.md`,
`winger.md` and `forechecking_systems.md`.

**`safety-reviewer` has read** `body_contact_and_battles.md` whole — enumerating every blockquote and
verifying the three it promoted against four rulebooks — and separately ruled on the improper-line-
change penalty hook across IIHF and NHL Rule 82, producing two criticals and a major.

**`content-reviewer` has read** `rink_map_and_glossary.md`, `puck_support_and_spacing.md`,
`offensive_zone_play.md`, `defensive_zone_coverage.md`, `defender.md` and `risk_management.md`.

**`site-reviewer` has read the rendered site** in real Chrome across four viewport/theme cells.

⚠️ **The single largest gap the gate named is closed.** `defensive_zone_coverage.md`'s two four-book
penalty sections — roughly 4,000 words of NHL/IIHF/USA Hockey/Hockey Canada divergence that the
content pass explicitly declared it had *"read and verified nothing in"* — have now had **73 claims
verified, with none left unresolved either way.** Two were contradicted and fixed; one carve-out was
found written by a **fourth** book the file said only three write.

⚠️ **What is still NOT covered, stated plainly rather than left to inference:**
- **`facts-reviewer` has not run this round at all.** Four facts-layer precision defects were found
  *incidentally* by a rules pass in one file; nobody has swept the layer.
- **`diagram-reviewer` has not run.** A content pass changed prose that at least two diagrams
  illustrate and **opened no diagram spec** — *"a picture that now contradicts its own section is the
  corpus's most common diagram defect and I cannot rule it out."*
- **`source-verifier` has not run** on the round's new citations. The strong-side-overload carve-out,
  now stated across two documents, rests on **one 2013 post by a pseudonymous author on a fan blog**.
- **The KHL trapezoid claim is labelled, not resolved**, in 16 documents.
- **The adoption dates** — *"the NHL since 2005-06"*, *"IIHF since the unified 2021-22 rulebook"* —
  are **history claims with no primary support on disk** (`grep 2005` on the NHL book returns zero;
  `grep 2021` on the IIHF book returns zero), sitting inside sentences the round has just marked as
  read directly in the rulebooks. **Structurally the identical defect to the KHL one, one layer
  down, and corpus-wide.**
- **Nothing here establishes how any of it is officiated.** Every agent said so independently.

## The crease-stoppage finding — right about the corpus, wrong twice about the rule

⚠️ **CORRECTED. This section first stated the rule as 69.3 and the provision as IIHF-only. Both were
wrong, and both were mine — carried into a brief and repeated here as fact.**

**The rule is IIHF 69.1.** Verified by printing the headings: `69.1 INTERFERENCE ON THE GOALKEEPER`
at line **5501**, `69.2 PENALTY` at **5541**, `69.3 CONTACT INSIDE THE GOAL CREASE` at **5555**. The
stoppage sentence is at **5529 — inside 69.1**. ⚠️ **It reads as detached because a page break
splices `TABLE OF CONTENTS` and a running header into the middle of 69.1**, which is the extraction
trap this same round documented twice. The originating agent hedged it — *"found inside the whole
69.1–69.7 block"* — **and the coordinator dropped the hedge when writing the brief.**

**The text, verbatim:** *"If an attacking Player is in the goal crease and does not leave
immediately, the Referee has the **possibility to stop the game** and the subsequent 'face-off' shall
take place at the nearest neutral zone face-off spot outside the attacking zone of the offending
team."*

⚠️ **And it is NOT IIHF-only. USA Hockey has a STRONGER version, and it is mandatory.**
**Rule 625(b):** *"A face-off **shall** be conducted at the nearest neutral zone faceoff spot any
time an attacking player stands, holds their stick, or skates through the goal crease **provided**
the puck is in the attacking zone, the attacking team has possession of the puck and the goalkeeper
is in contact with the crease"* — with express relief: *"However, if the attacking player has been
physically interfered with by the actions of a defending player that causes them to be in the goal
crease, play shall not be stopped."* Confirmed in the Casebook at Rule 625 Situations 7, 10 and 11
(*"the play must be stopped immediately"*), and in Appendix II's face-off table as
**`625(b) Goal crease violation`**.

**So the IIHF's is a discretion and USA Hockey's is a duty.**

⚠️ **Why the first census missed it, and this is the transferable part:** it searched the IIHF's
**phrasing** — *"does not leave immediately"*, *"possibility to stop"* — and USA Hockey expresses the
same remedy in entirely different words. **The counts were honestly obtained and confidently wrong.**
The second agent found it *"only because I searched by **concept** after the phrase census said
zero."* Its closing line is the round's best statement of the residual risk: ***"the negatives I did
not think to attack by concept are the ones still standing."***

**The two negatives that DO hold, attacked by concept and not by phrase:** the **NHL** has no
counterpart — whole of 69.1–69.8 printed, proximity regexes `crease…face-off` and `face-off…crease`
return **0**, with the regex validated against the IIHF to prove it can hit; and **Hockey Canada**
has no stoppage, its remedy being goal-disallowance only, though it does carry a positional bar the
NHL lacks. **Both rules are byte-identical in the 2026/27 IIHF edition**, so neither finding is
edition-sensitive.

**The corpus's 🇬🇧 paragraph told a British reader they have *"a judgement after the fact, not a
whistle"*.** Two limits travel with the correction and were attached at once: it is a **"possibility"
not a duty**, and it applies **in the crease, not in front of it** — so the main teaching stands, and
a screen outside the paint really is the defender's to solve.

⚠️ **How it was found is the finding.** The agent had **written the false negative itself** — *"the
one real-time limb any of the four books gives the defending team here"* — and then **ran the
negative instead of shipping it**. Its own closing line: ***"having found the IIHF crease-vacate
whistle only by grepping a negative I had already written into the file, the negatives I did not
think to test are the ones still standing."***

**Census run centrally on its handover:** `on_ice_communication.md` ×3 and
`scanning_and_anticipation.md` ×1 still told a reader no whistle is coming, without 69.1. Both fixed —
and `goaltender.md`, which the brief said to check, **was already ahead of the brief's own premise**:
it carried USA Hockey 625(b)'s stoppage in both its facts and body layers, with the correct
conditional (*"it is yours only while you are in contact with your crease"*). **What it lacked was
the IIHF half.**

## "Flat" omitted the rule's next sentence, in three documents

`IIHF 55.1` makes a stick against or near the hands hooking. ⚠️ **Its very next sentence:** *"When a
Player is checking another in such a way that there is only stick-to-stick contact, such action is
not to be penalized as 'hooking'."* **A lift under the shaft is stick-to-stick contact only, so the
two sentences are in tension in the book, and no IIHF interpretation reconciling them is on disk.**

**The omission is conservative** — it makes the corpus stricter than the rule may be — which is why
it is a Major and not a Critical.

⚠️ **THIRD CORRECTION TO THE SAME BRIEF: the carve-out is not an IIHF peculiarity.** **NHL 55.1
carries it in near-identical words** (`nhl_rules_layout.txt:5217-5221`). What the IIHF has and the
NHL has not is the **hands sentence**; the NHL's hands provision lives in **Rule 61.1 Slashing** and
is qualified (*"that, in the judgment of the Referee, is not an attempt to play the puck"*).

⚠️ **FOURTH CORRECTION — and this one caught the coordinator writing an internally inconsistent
brief.** From that, the brief concluded *"so the tension sits in BOTH books' Rule 55.1."* **Refuted.**
Printed whole, **NHL Rule 55.1 is two sentences** — the definition and the carve-out. **There is no
hands sentence in NHL Rule 55 at all**, so there is nothing for the carve-out to pull against.

> *"A tension between a hands sentence and a carve-out cannot exist in a book that has no hands
> sentence. The brief is also internally inconsistent: its item 2 states the hands sentence is
> IIHF-only, which is exactly why item 1b cannot hold."*

**The correct boundary: the CARVE-OUT is two-book; the TENSION is IIHF-only.** ⚠️ **The agent's own
file already had that boundary right and it left it alone** — *"had I acted on item 1b I would have
written a tension into the NHL book that its Rule 55 does not contain."* **A brief error refused, on
the strength of the corpus being right and the brief being wrong.**

**Two further corrections from the same agent:** the relayed site list was **75% short** — one site
named, four plus a facts line present. And the brief asserted that *"every repaired site in this
round keeps an explicit 'Low is still the answer'"* — **false.** Counted: `defender.md` 1,
`goaltender.md` 1, `on_ice_communication.md` 1, `body_contact_and_battles.md` 2, and
**`defensive_zone_coverage.md` — 0**, which is the document the brief held up as the model. ⚠️ **So
the file carrying *"it may be stricter than the rule actually is"* with no counterweight is the one
being cited as correct.** Routed.

⚠️ **And a cross-file contradiction the corpus cannot hold both halves of.**
`body_contact_and_battles.md` says the hands sentence *"sits **before** the stick-to-stick carve-out,
**qualifying it**"* — **a resolution, presented as settled**. `defensive_zone_coverage.md` says of the
same two sentences that *"the two sentences pull against each other"* and *"no IIHF interpretation
reconciling them is held here."* **Both cannot be right, and nothing in either book's text establishes
that sentence order creates priority.** The four files repaired this round match the **unresolved**
form. **Routed.**

⚠️ **The corpus-wide census found the good news as well as the bad.** `rules_primer.md`,
`body_contact_and_battles.md` and `defensive_zone_coverage.md` **already carry the carve-out**, and
two of them carry a scope the finder had not: *"NHL 55.1 and IIHF 55.1 exempt stick-to-stick contact
only **'when a player is checking another'**, so it is a carve-out for a check, not a general
licence."* **The corpus already contained the better form; three documents had the worse one.**
Dispatched with the existing form to match, rather than a new one to invent.

## The owner/borrower census — run, and honestly a partial failure

An agent closed its report by naming the check nobody had run: *"for every owner named in the style
guide's table, does any borrower state the claim more carefully than the owner does? That is a
mechanical comparison, it is cheap, and it would have found both of today's instances before an agent
had to be dispatched to either."*

**Run centrally.** Method: every 6-word shingle occurring in ≥2 documents, classified by whether a
hedge marker appears within ±320 characters. **21,733 shared phrases; 432 hedged in one document and
bare in another.**

⚠️ **Most of the 432 are false positives and the method as built is not usable as a gate.** Its top
hits are shared *boilerplate* — *"USA Hockey Official Rules and Casebook"*, *"valid IIHF rulebook is
always the basis"*, *"find out which one your team plays"* — where the "hedge" is simply a nearby
unrelated disclosure. **A phrase shared between documents is not the same as a claim shared between
documents**, and shingles cannot tell them apart.

**But it is not worthless, and it should not be discarded:** *"beer-league and youth associations do
not"* comes back hedged in five documents and bare in five, and *"not currently enforced to allow ice
rinks"* hedged in one and bare in seven — **both are real claims, not boilerplate.** ⚠️ **Recorded as
a worklist needing a claim-extraction step, not a shingle-matching one — and explicitly NOT as
something to sweep.** Ranking these and then offering to fix them is precisely how round 44
manufactured a divergence that did not exist.

**Four instances of the ownership rule running backwards are now on record in this round alone** —
the KHL trapezoid, *"one defenceman is always above the puck"*, the five-causes count, and the
both-defencemen framing. **In every one the honest document was the minority.**

## A divergence running the other way — and a census that came back clean

⚠️ **Hockey Canada PERMITS the time-out the NHL and IIHF refuse.** HC 6.7(d)(iii): *"**Either team is
permitted to take their time-out**… following an icing, but during that time out, the team in
violation of icing will not be permitted to make player substitutions."* Against NHL and IIHF 87.1's
*"No 'time-out' shall be granted to the defensive team following an icing."*

**The finder flagged it as a larger practical difference than the carve-out width the brief had
asked about** — and it was not in the brief at all.

✅ **Censused corpus-wide, and the corpus is sound.** 29 sites state the no-time-out rule; **nearly
every one is already scoped to the books it names** — *"under NHL and IIHF rules"*, *"NHL Rule 87.1"*,
*"IIHF 87.1"* — rather than claiming universality. **And `rules_primer.md`, the owner, carries Hockey
Canada's position explicitly**: *"Hockey Canada expressly permits it in the three categories where
the no-change bar applies."* **Recorded as a checked negative** so the next reader does not re-open
it. ⚠️ **This is the fifth ownership check this round and the first where the owner was the careful
one.**

## The brief guessed a false positive and was wrong

I flagged one flagged site as *"probably a false positive from my pattern (rims and reverses)"* and
told the agent I would rather it refute a site than invent one. **It was a genuine bare site** —
*"Icing. You lose the zone, you lose the draw location, and **you cannot change your line**"*, no
book named. ⚠️ **And the same file's own facts line already scoped it correctly**, so the Common
Mistakes bullet was shedding a qualification the document had already earned.

**So relayed site lists have now failed in every direction there is** — short by varying amounts,
wrong at an entry, and here a coordinator's guess that a true site was noise. **The measured figures
are tabulated once, under "Measured: how wrong the briefs were" below; they are deliberately not
restated here**, because a list of them copied into a second place is exactly the thing that went
stale in `CLAUDE.md` this round.

## The checking-from-behind tariff is wrong in two books of four

`Never: …a check there is a major with a game misconduct` — verified against all four:

- **NHL 43.3/43.5** — major, mandatory game misconduct; **43.2** *"There is no provision for a minor
  penalty."* ✅ **but the fact omitted 43.1's predicate**, *"not aware of the impending hit, therefore
  unable to protect or defend himself."*
- **IIHF 43.2** — same no-minor rule, **and 43.3 adds a predicate the NHL does not**: the major
  applies to a player *"who recklessly endangers the fouled Player."*
- ⚠️ **USA Hockey 608(a): *"A minor plus a misconduct penalty, **or** a major plus a game misconduct
  penalty."*** The minor is expressly available.
- ⚠️ **Hockey Canada 7.5(a): *"A **Minor** penalty and a Game Misconduct penalty."*** The floor is a
  minor; 7.5(b) reaches the major at discretion, mandatory on injury.

⚠️ **This one errs toward deterrence** — it overstates the tariff, so a reader who believes it does
not check from behind, which is the safe outcome. **The penalty-shot half is the one that misleads:**
a defender who trips a chased carrier **with a teammate back** was told he had conceded a penalty
shot, when NHL 57.3 requires *"no opposing player between them and the goalkeeper"* plus the
denied-reasonable-chance test — **all four conditions the same document sets out itself twenty lines
earlier.**

**Nothing was deleted.** The tariff was **relocated**: the four-book version now sits in the section
body with verbatim quotations and the fact extracts from it, so the block is traceable to its own
section — and it was propagated **with the owner's qualification**, *"in three books of four it ends
your game"*, rather than restated.

## Measured: how wrong the briefs were

The round is named for the claim that the briefs are more defective than the corpus. **These are the
numbers, all from agents refuting instructions rather than from any review of the briefs.**

**Relayed site lists, by measured error:**

| Brief | Named | Actual | Error |
|---|---|---|---|
| catch-permission sites | 2 | 6 | **67% short** |
| broken-skate consequence, systems docs | 9 | 14 | **36% short** |
| five-causes flat sites | 5 | 8 | **37% short** |
| overload alignment sites | 4 | 6 | **33% short** |
| stick-lift "outright" sites | 1 | 4 + a facts line | **75% short** |
| above-the-puck sites | 4 | 2 | **50% wrong** — one named site was a different claim, and one the brief said not to sweep |
| bare icing sites | flagged one as *"probably a false positive"* | genuine bare site | **a true finding guessed away** |

**One brief carried four distinct errors**, all four caught by the agent it was sent to:
1. The rule was cited as **69.3**; it is **69.1** — the coordinator dropped a hedge the originating
   agent had attached, and a page-break splice made the sentence look detached from its own rule.
2. The provision was called **IIHF-only**; **USA Hockey 625(b) has a stronger, mandatory version.**
3. The tension was said to sit in **both books' Rule 55.1**; **NHL 55.1 has no hands sentence at all**,
   so nothing pulls against its carve-out — ⚠️ **and the brief's own item 2 said so, making it
   internally inconsistent.**
4. It asserted every repaired site kept the safety counterweight; **the document it named as the
   model was the only one of five without it.**

⚠️ **Three of the four would have made the corpus worse, not merely left it unimproved** — a wrong
rule number, a false exclusivity claim, and a tension written into a book that does not have one.
**Each was refused by the agent on the strength of reading the primary text.**

**What made refusal possible, in every case:** the standing instruction to treat the brief as a
hypothesis and verify its quotations before acting. **Not one of these was caught by a checker, a
hook, or the gate.**

⚠️ **And the coordinator's own record needed correcting three times**, twice for facts it had put
there itself. **D8 is not a thing that happens to other documents.**

## "Body ✓ does not imply block ✓" — a layer test, and it found a gap a grep could not

Repairing the missing safety counterweight, an agent **found a second gap the plan row had not named,
in the layer below the one it was sent to.** The facts block already carried the tension **naked**:
*"…though its next sentence exempts stick-to-stick contact"* — read aloud in its own `<p>` with 300 ms
breaks either side, **heard as a permission.** Fixed in both layers.

It then named the limit of the check that had cleared the other four documents: *"I confirmed this by
grep only; I did not read those files whole, so I cannot say whether their facts blocks carry the
counterweight the way this file's now does. **Body ✓ does not imply block ✓, and this file proved
it.**"*

⚠️ **Run centrally as a layer test — extract every ` ```facts ` line mentioning the tension and check
each for a counterweight.** Result: **three of the other four are sound**; `body_contact_and_battles.md`
has the gap, in a `Rule:` line stating *"the book reconciles neither"* with no instruction attached.

⚠️ **And the test's own false positives matter as much as its hit.** Two further lines in that file
matched the pattern and are **not** gaps — they state the carve-out's **scope** (*"only in the NHL and
IIHF books, and only while checking"*), not the **tension**, so neither invites the *"so ignore it"*
inference. **A layer test finds candidates; only reading decides.** Dispatched with those two named as
not-to-touch, because a sweep would have "fixed" them.

**The generalisation, and it is cheap:** any disclosure of the form *"this may be stricter than the
rule"* needs its counterweight **in every layer that carries the disclosure**, and a body-level grep
cannot see the facts layer. ⚠️ **This is the round-10 shape a fifth time — a correction reaching the
body and stopping — but found by testing layers rather than by finding the defect first.**

**How the trade was made, and recorded rather than hidden:** the counterweight would not fit under the
300-character cap in a block already at HARD_MAX 11, so two verbatim quotations were dropped to a
paraphrase the body and Key Takeaways already use, **and both survive verbatim in the body bullet.**
*"I traded quoted precision for a caveat, not the other way round."* **That is the right direction and
the right disclosure.**

## A Critical found outside the brief, and correctly not fixed

Sent to repair one facts line, an agent found **a second instance of the identical shape** in the same
file and **did not touch it**, because its brief was one precise repair.

**`body_contact_and_battles.md:1126`:**
> `Rule: Tripping requires no fall under USA Hockey Rule 639 Note 1 ("lose balance or fall") or Hockey
> Canada 8.6(a); the NHL and IIHF books are unresolved — 57.1 in each is "trip or fall" and 57.2, the
> clause imposing the minor, "trip and fall"`

⚠️ **Voiced standalone, a listener under the NHL or IIHF hears "the books are unresolved" and is given
no instruction.** Layer coverage measured: **body ✓** (*"Play it as though the stumble is enough"*) ·
**facts ✗ · Common Mistakes ✗ · Key Takeaways ✗** — and that sentence occurs **exactly once in the
whole file.**

**Critical rather than Major for one reason: tripping is this file's own most-called NHL penalty, at
16.6% of calls.** The disclosure is honest and verified — IIHF 57.1 *"trip **or** fall"* against 57.2
*"trip **and** fall"* — so the repair adds an instruction and **resolves nothing**. The fix was handed
over with the arithmetic done: 238 characters plus 41, under the cap, **no trade needed**, and the
block at HARD_MAX so it must go on that line.

⚠️ **The restraint is the point.** *"I did not make this change — my brief was one precise repair and
this line was not in it."* **An agent that had quietly fixed it would have shipped unreviewed new text
into the corpus's highest-hazard document**, which is the standing rule this project keeps having to
relearn: *a repair is new text, and new text has not been reviewed.*

## The blind spot the finder named in its own method — and it is the next round's scope

Its corpus sweep was a regex for tension language — `reconcil|unresolved|pull against|collid`. **That
finds disclosures which announce themselves.** Its own assessment:

> *"It is blind to a facts line that states one side of a two-book divergence **flatly** and simply
> **omits** the other — which is the more common and more dangerous shape, and is exactly what round
> 20's seven omission criticals were."*

⚠️ **Every layer test this round has been a PRESENCE test: does the counterweight appear where the
disclosure does.** None of them can see a fact that never mentions the other book at all. **The
omission pass — for each `Rule:` line naming a book, ask what the other books say and whether the
silence changes what a reader should do — has not been run this round, on any document.**

**And one candidate it checked and refused to inflate:** a `Rule:` line in another document carrying
the same *"unresolved in its own text"* language about IIHF 48.1. ⚠️ **Not the same hazard** — that
line addresses the **carrier**, not the actor, and its unresolved reading runs toward **more** caution,
not less; its block's first line also carries the instruction directly. *"Reporting it as a critical
would have inflated it."* **Recorded as a datum, not a defect.**

## The omission pass, run on one document — and what it yielded

Asked to run the omission check it had itself named as its predecessor's blind spot, an agent
enumerated **all 111 `Rule:` facts** in `body_contact_and_battles.md` programmatically, **tabulated
which of the four books each names**, and chased the gaps. From one document:

**One Major.** `:1118` defines slashing as a forceful chop *"that is not an attempt to play the
puck"*, citing NHL and IIHF 61.1 and noting USA Hockey drops the let-out. ⚠️ **Hockey Canada is
omitted and its let-out is far narrower** — **9.3** exempts only *"**tapping the stick** of the
puck-carrier… for the **sole purpose** of gaining possession"*, and expressly penalises a player
*"who, **on the pretext of playing the puck**, makes a wild swing at the puck with the object of
intimidating their opponent."* **So the corpus teaches every Hockey Canada reader a defence their own
book forecloses by name** — minor at the floor, and **9.3(b) reaches a major plus a game misconduct
on degree of violence with nobody injured.** The body table row names Hockey Canada only for the
major tier, so **both layers were wrong in the same direction.** Dispatched.

**Three Minors**, each reported rather than swept: `:887` cites *"NHL Rule 69.1"* where the body two
lines later says *"the NHL's **and the IIHF's**"*, and the adjacent fact says USA Hockey and Hockey
Canada do not reach an outside-crease screen — ⚠️ **a British listener hearing both takes "mine is
like theirs", and it is wrong**; USA Hockey **627(c)** alone bans the *"kick shot"* in its own words
as *"a very dangerous shot"*; and USA Hockey and Hockey Canada disallow a kicked-puck goal more
broadly than the NHL's body/stick split.

⚠️ **And four claims it checked and UPHELD**, which is the half that keeps the pass honest — the
cross-checking line's *"outside USA Hockey"* scope (Hockey Canada 9.2 confirmed to have no
blade-on-ice element); the kicking permission (identical in all four books, so naming one creates no
inference); the *"entitled to the ice you occupy"* bound; and the head-down block, which *"does not
invert read aloud"*.

⚠️ **It also refused to inflate a Minor into something it was not:** the kick-shot finding was held
at Minor **because nothing the section teaches is a kick shot** — the taught acts are skate-on-puck
and the banned act is foot-on-stick-shaft. *"A reader following the section as written does not cross
it."*

**And it refuted the brief's arithmetic in both directions** — the line was 236 characters, not 238;
the addition 42, not 41. **Both from the coordinator, both trivial, both stated rather than
silently corrected.**

### The tripping repair, verified where it actually matters

The agent closed by naming what it could not check: *"whether it survives the TTS pass as an audible
instruction rather than trailing off"* — **"the one thing the whole repair depends on."**

**Run centrally.** The rendered SSML:

> *"Rule. Tripping requires no fall under USA Hockey Rule six hundred and thirty-nine Note one… the
> NHL and I-I-H-F books are unresolved — fifty-seven point one in each is "trip or fall" and
> fifty-seven point two, the clause imposing the minor, "trip and fall" **— play it as though the
> stumble is enough.**"*

⚠️ **The instruction is the final clause before the 300 ms break** — the last thing a listener hears
and the strongest position available. **The repair works.**

## A layer the corpus has, and no listener ever reaches

The Hockey Canada slashing repair landed in two places: the facts line, and the body's four-book
comparison table. ⚠️ **The table half does not reach a listener at all.**

`md_to_speech.py` narrates a table **only if it is small and regular** — `TABLE_MAX_COLUMNS = 3`,
`TABLE_MAX_ROWS = 14`, **`TABLE_MAX_CELL_CHARS = 200`**. Anything else is replaced by a spoken
pointer: *"A detailed table appears here in the written version. It does not read well aloud, so it
is not narrated. The full table is on the website."* Measured on this document: **1 table narrated,
1 emitted as a pointer** — and the pointer sits in the same segment as the tripping fact.

⚠️ **The edit did not cause this.** Longest table cell **at HEAD: 949 characters**; now 1,616.
**Both are five to eight times over the threshold, so that table has never been narrated.** Nothing
was removed from the audio today.

**But the consequence is structural and it bit this repair.** The strongest part of the correction —
Hockey Canada's express foreclosure, *"who, **on the pretext of playing the puck**, makes a wild
swing at the puck with the object of intimidating their opponent"* — **would not fit the 300-char
facts cap** (the line ended at 298/300) and went to the table only. ⚠️ **So a reader gets it and a
listener does not.**

**The agent disclosed the trade precisely** — *"nothing was deleted, but the append had to be cut to
69 chars, so the pretext foreclosure did not fit in the facts line and went to the body row only…
298/300, two characters of headroom, which the next editor of that line needs to know."* **That is
exactly the right disclosure, and it is what made the gap findable at all.**

⚠️ **The general rule this establishes:** *"put it in the body"* is **not** a complete propagation
answer for this corpus. **A four-book comparison table is a reader-only layer.** Any claim whose only
non-facts home is a wide table is invisible to the listener the corpus is written for — and there is
no check for it. **`check_facts.py` cannot see it; the layer tests this round invented cannot see it,
because they test the facts layer against the body and the table IS the body.**

⚠️ **And it refuted the brief's cap arithmetic again, decisively.** The brief estimated the line at
*"200-ish chars"*. **It was 228**, leaving a 72-character budget — and **the append the brief
suggested was 157, which would have failed the gate by 85.** Third time in this round that a
coordinator's character estimate was wrong; **every time, the agent measured rather than trusted.**

## The gate caught the round creating the defect it was fixing

⚠️ **`commit-gate` blocked the fifth run on an ADDED line** — `on_ice_communication.md:387`, a bare
KHL trapezoid claim **in the same commit that labelled the others**. `KHL` occurred exactly once in
that file, so nothing in it compensated. **The round labelled sites in eight documents and wrote a
fresh bare one into a ninth.**

⚠️ **And the coordinator's brief about it was wrong in both directions at once.** It said *"fifteen
sites, fourteen carry the disclosure, this one does not."* The census: **32 KHL sites in 17 files,
of which 15 were BARE across 8 files** — and in every one of those eight, **the KHL appears only on
bare lines**, so none had a compensating disclosure. **Backwards, and short by a factor of three.**

## The source was already in the file — for the third time in this project

The agent found the support **hyperlinked in the document's own Sources list, unglossed and therefore
invisible**: **IIHF, "New Rule Book for global game", 5 June 2021** (refetched, HTTP 200, 58,761
bytes):

> *"the IIHF will introduce a new Rule Book for the **2021/22 season** with the objective of unifying
> the rules of the game across the world"* … *"A restricted area for goalkeepers behind the net to
> create more offensive play (i.e. **trapezoid familiar to NHL and KHL**)."*

⚠️ **This is the `equipment.md` helmet pattern exactly** — a claim disclaimed as unsourced while the
source sat hyperlinked in the same file's own references. **The URL is in SEVEN documents' Sources
lists.** The style guide's first rule for negative claims is *"check the working directory and your
own Sources list first"*, and it was not followed.

**So the three claims split three ways, and the round had been treating them as one:**
- **IIHF since 2021/22 — SOURCED**, by the IIHF itself. It was never unsourced; it was **unsignposted**.
- **KHL — UNCONFIRMED.** The 2021 aside is *"the nearest thing to a source"*: a governing body's
  parenthetical, **not KHL rule text and not a statement of the KHL's current rule.**
- **NHL since 2005-06 — UNCONFIRMED.** No support anywhere held here.

⚠️ **The negative is stronger than a phrase search would give.** Attacked by concept as well as by
number: a bare four-digit-year regex returns **only each book's own edition year**, and seven
change-history terms (`effective from`, `rule change`, `was amended`, `introduced in`, `unified`…)
return **zero**. **These books carry no change history of any kind.** ⚠️ **THAT SENTENCE IS FALSE and is retracted below — the NHL book dates its visor and helmet rules. It is left in place, marked, because it is what the round actually believed at this point and a brief was written from it; deleting it would hide the mechanism this record exists to document.**

## A false claim of verification — worse than a bare claim

**`goaltender.md:529`:** *"the **NHL** (since 2005-06) and **IIHF play** since the unified 2021-22
rulebook — **both read directly in the rulebooks**, at NHL Rules 1.8 and 27.8 and IIHF Rules 1.8 and
27.7."*

⚠️ **The rulebooks contain neither date.** The rule numbers are read directly; **the dates are not,
and the sentence says they are.** That is **non-negotiable 5**, in the file the corpus otherwise
treats as its model for this disclosure. **Found by an agent working a different file, chasing its
own census outward.**

## An eighth verification the rule-number search would have missed

Searching the **concept** — *"designated area behind the net"* — rather than the rule number turned
up **IIHF Rule 32.4(VI)**, the Linesperson's reporting duty, which no rule-number search would have
reached. **Independent corroboration inside the same book.** The concept-census rule added to the
style guide this round paid for itself the first time it was applied.

## Penalty tiers were being read aloud as distances, corpus-wide

⚠️ **`md_to_speech.py` rendered the IIHF's minute prime as feet.** A listener heard *"a major (five
feet)"*, *"a minor penalty (two feet)"*, *"a ten minute (ten feet) misconduct penalty"*.

**Measured across the full corpus render: 21 instances** — 11 `(two feet)`, 9 `(five feet)`,
1 `(ten feet)`, every one a penalty tier.

⚠️ **The behaviour was deliberate and the rule was right for the case it was written for.** The
`parenthesised-feet` rule carried an explicit self-test — `("two feet (2')", "two feet (two feet)")`
— because the NHL book prints dimensions that way and the corpus quotes them verbatim. **The same
glyph means minutes in the IIHF's penalty tiers**, and nothing distinguished them.

**The discriminator turned out clean in both directions**, which is why the fix is safe: a dimension
quotation always spells the unit out first — *"four feet (4')"*, *"twenty-eight feet (28')"* — while
a duration is preceded by penalty language — *"Major penalty (5')"*, *"assessed at least a minor
penalty (2')"*. **Every one of the 21 was preceded by `penalty`, `minor`, `major`, `misconduct` or
`minute`; not one dimension was.**

**Fixed** with a `parenthesised-minutes` rule ordered **before** `parenthesised-feet`, matching on
that preceding word, plus four self-test cases. **Self-test at that point: 134 assertions, 0 failures** — it ended the round higher; re-run it rather than reading this. Verified
on the full render: **21 tiers now read as minutes**, the six `four feet (four feet)`, two
`six feet (six feet)`, `twenty-eight feet` and `within five feet` dimension quotations **unchanged**,
and **zero** penalties still rendering as a distance.

⚠️ **Found by a `safety-reviewer` that ran the renderer while checking something else**, and reported
it as a Minor because *"it does not invert the meaning — 'a minor … or a major … plus an automatic
game misconduct' still carries."* **That judgement is right, and the defect is still corpus-wide and
in the layer this corpus exists for.**

**Handover taken, and one is this round's own doing:** `--report` shows **13 unrecognised constructs**
reaching the SSML unhandled — `(d.3)`, the drop-sheet glyphs `●`/`○`/`▲`, and **the IIHF's
cross-reference arrow `➔`** — **9 occurrences across 3 files**, appearing inside verbatim rule quotations *this round added*
(*"in violation of ➔ Rule 63.8 – Delaying the Game or ➔ Rule 81 – Icing"*). **The round increased
that count while quoting the books more faithfully.**

## The round wrote a false negative existence claim, and an agent caught it

A brief told an agent, on the strength of a previous agent's concept search, that **"these books
carry no change history of any kind."** ⚠️ **False for the NHL book, and two files had already
asserted it.**

- `nhl_rules_layout.txt:1178` — *"9.7 Visors - **Beginning with the 2013-2014 season**, all players
  who have…"*
- `:1134-1136` — the helmet rule, dated to *"the 2019-2020 season"*, twice
- `:5827` — *"memorandum distributed to all teams prior to the **2015-2016 season**"*

**The NHL book does carry dated rule provenance — just not for the trapezoid.** Replaced with the
defensible form: *"its Rules 1.8, 27.8 and 63.2(viii) carry no date at all."*

⚠️ **This is the concept-census lesson biting in the other direction.** The original search was
sound *for the trapezoid*; the **generalisation** from it was not, and the coordinator promoted it
into a brief as a fact about the whole book. **A negative that is true of the rule you searched is
not a negative about the book.**

**And the census in that brief was wrong again — a fifth time.** It said 16 bare sites across 8
files; **14 were genuinely bare**, and the claim that *"in every one of these files the KHL appears
only on bare lines"* was **false of two of them** — `on_ice_communication.md` had been fully disclosed
earlier the same day, and `goaltender.md`'s two sites were **already labelled**.

**Two smaller finds from the same pass:** one file carried the IIHF announcement URL as `/events/2021/ww/`
where five others use `/wm/` — **both resolve, with different byte counts**, and it was normalised to
the one whose body was actually read. And `27.8`'s stale dimensions were shown to be **arithmetically
coherent** rather than merely stale: 8 ft from each post plus 6 ft between them is 22, and 11 + 6 + 11
is the 28 ft 27.8 itself gives at the boards.

## Typography drift, measured rather than assumed

An agent reported **24 curly quote pairs across 7 files, introduced today against 1 at HEAD**, and
flagged it as a *"read-aloud/TTS risk"*. **Measured corpus-wide: HEAD 23 → 73**, with `faceoffs.md`
alone going **1 → 39** — real drift, introduced by quoting the rulebooks more faithfully.

⚠️ **But it is not a TTS risk.** Rendering the corpus, the glyphs pass through into the SSML as
ordinary quotation marks — **38 of them in `faceoffs.md` alone** — and `--report` flags **none** of
them as unrecognised constructs. **The renderer handles them; a speech engine reads them as quotes.**

**So it is house-style drift, not an audio defect**, and it is recorded as such rather than fixed: a
four-file typography sweep at the end of a large round risks more than it repairs, and the corpus
already carried 23. ⚠️ **The agent's instinct to report rather than sweep six files it did not own
was right; only its severity was wrong, and only measurement could tell the difference.**

## The round landed as three commits, on the gate's recommendation

`commit-gate`'s sixth run declined to clear 67 files spanning four unrelated changes and said where to
cut. **The owner chose the split.** Two landed immediately because neither was blocked:

- **`fddc5e7` — the renderer fix.** ⚠️ **This one should not have waited on a content block:** 21
  penalty tiers were narrating as distances **to listeners, that day.** It carries the agent-definition
  repairs with it — a `rules-verifier` source table naming **four files that do not exist** and
  labelling the current Hockey Canada book as superseded, so an agent following it would have verified
  British rules against a book not on disk; and a `source-verifier` example using `/tmp` in the same
  breath as forbidding it.
- **`69417ea` — the reach layer.** Eight hub pages, RSS, 48 share cards, the citation block. ⚠️ **None
  had ever reached production**, and the 404s were invisible to the build's own link check because
  nothing in the corpus links to a bare section URL — they were reachable only from outside.

**The corpus commit stays staged** until its blockers clear. ⚠️ **That is the point of the split:
the two verified changes are no longer hostage to the third.**

## A safety instruction that inverted when spoken

⚠️ **Found by running the renderer, not by reading.** A `Never:` facts line —
*"Never: Take that contact with your back to the boards — skates parallel to the wall, forearm and
hip, head up, chin off your chest"* — renders as **"Never — Take that contact… — skates parallel…"**

`_label_lead` deliberately turns `Never:` into **"Never —"** so the negation reaches the verb. **That
fix, which is correct, created this defect:** the second em dash is prosodically identical to the
first, so a listener who has just learned that *"Never —"* governs the clause after a dash carries it
across the second one and hears ***"never … skates parallel to the wall, forearm and hip"*** — **the
corpus's positive safety instruction, inverted.** *"That contact"* also has no antecedent heard alone.

**Repaired by a full stop and the word *"instead"***, both already corpus conventions — 25 facts values
carry an internal sentence break and 8 `Never:` values use *"instead"*. Re-rendered and re-read to
confirm.

⚠️ **The same string is in two more files, and the agent that found it did not own them.** Dispatched
separately, with the instruction to grep for **the shape** rather than the string — *"that pattern is
the finding; these two lines may not be the last of it."*

## Two ceilings understated, both found while verifying something else

**Hockey Canada 9.5(b)/(c) bar the major and match *under 9.5* and redirect them** to **7.7(b)** and
**7.7(c)** — *"Any high-sticking infraction that warrants a Major penalty, whether for degree of
violence or injury, should be penalized under Rule 7.7(b)."* The corpus located the worse exposure
**only** in minor and female hockey, leaving a junior/senior reader to infer a double-minor ceiling on
a violent follow-through. **There is none — the rule number changes and the exposure does not.**

**And a table a listener never hears.** `equipment.md`'s HECC visor row — *"certified only for persons
age 18 and over"* — is **the only place in the document** that rules a visor out for a minor under USA
Hockey, and it sits in a table cell of ~280 characters. ⚠️ **Measured: that table is emitted as a
spoken pointer, failing the 200-chars-per-cell test.** A listener hears that a HECC facemask is
required below Adults, hears cage/visor/full-shield offered as a three-way choice, **and never hears
the sentence that removes one of the three.**

## Twenty-two inverting instructions, repaired — and the shape was wider than the label

The em-dash inversion was repaired across **seven** documents — `body_contact_and_battles.md` 6, `zone_entries.md` 5, `offensive_zone_play.md` 4, `breakouts.md` 3, `skating.md` 2, `puck_handling.md` 1, `on_ice_communication.md` 1. ⚠️ **An earlier draft said five; the file set, not the total, is what the residual worklist needs, so the breakdown is given.** **The brief named eight lines; the agent found
and repaired twenty-two**, by rendering every block and reading every emitted line rather than
grepping the Markdown.

**The three worst, all read from the SSML:**

1. *"Never — Play on if you are hurt — **stay down and let play be stopped**."* → **never stay down**,
   said of a hurt player. ⚠️ **And the fact immediately above it is correctly reasoned**, so the
   listener has just been trained that the dash carries the negation.
2. *"Never — Put a leg behind an opponent — **keep your leg in front of you**."* → **the slew-foot and
   knee-on-knee mechanism**, which NHL 52.2 makes a **mandatory match penalty with no lesser tier**.
3. *"Never — Curl against the wall — **take the contact rather than turning away into them**."* →
   ***an instruction to turn away into the boards***, which is the hit-from-behind posture. **Neither
   the NHL nor the IIHF provides a minor for checking from behind** — both verified, the NHL sentence
   needing a flattened read because it wraps.

⚠️ **And one inverted a cross-reference.** *"Never — Move a player who has gone down… — **that is the
spinal-injury section above**"* reads as *"never see the spinal-injury section above"* — **a pointer
away from the only spinal-injury treatment in the corpus, attached to the fact that says not to move
a downed player.** *"Instead"* is nonsensical for a cross-reference; the repair was to make the clause
**declarative**, leaving no imperative to invert.

**The label was not the boundary.** Two instances sat under `Technique:` with the negation **inside
the value**, which a `Never:` grep never reaches. **Two more were in Common Mistakes and Key
Takeaways** — layers no facts grep touches at all, found only because the agent ran a layer check it
had not been asked for.

**Two dropped components were restored** — `chin off your chest`, the cervical-spine half, in two
files, in both the facts value and the body bullet, because a facts value must be extractable from
its own section.

## Two censuses, and the agent refused to call either the answer

The coordinator's Markdown scan: **45 values across 21 documents.** The agent's scan of the **rendered
SSML**, requiring a lower-case verb after the dash: **59 across 22** before its repairs.

> *"I do not claim my number is the right one — my verb list is hand-built and my match requires a
> lower-case verb after the dash, so it will both over- and under-count against whatever method
> produced the 45. **Treat the two figures as two measurements with different definitions, not as a
> correction, and do not quote either without its method.**"*

⚠️ **That is the correct handling of a disagreement between two measurements, and it is the opposite
of what this round did four times with its own counts.** Both figures and both methods are now in the
style guide; neither is presented as the total.

## A brief premise refuted in the direction nobody expected

The brief said *"low centre of gravity, feet apart, knees bent"* is **dropped corpus-wide by every
importing document**. ⚠️ **Partly wrong.** The owner, `body_contact_and_battles.md`, **carries it in
its body** — verbatim from USA Hockey at two places. **But its own facts block carries only *"knees
bent"*.**

**So the compression happens ONCE, inside the owner, at its own body-to-facts boundary** — and every
importing document is faithfully carrying the already-compressed version. ⚠️ **The fix belongs in the
owner's facts block first and only then propagates; widening an importer would have created the
divergence, in the direction the brief did not anticipate.** The agent added it nowhere and said so.

## The handover this session cannot close

> *"I read the SSML; I did not synthesise it. A full stop inside a `<p>` renders as a sentence break
> in the markup, and I have assumed the voice honours it. If it does not, twenty-two repairs rest on
> an assumption I could not test — **that is the single most valuable thing for the coordinator to
> check**, by synthesising `technique__skating/025.ssml` and listening to it."*

⚠️ **The coordinator cannot close it either — no speech synthesis is available in this session.** The
repairs are correct in the markup and the markup is what the pipeline emits; **whether a given voice
honours a sentence break inside a `<p>` is untested, and it is untested for the pre-existing text as
much as for the repairs.** Recorded as an open item rather than assumed away.

## The corpus taught how to hit, and the gate on whether you may hit was in one layer

`offensive_zone_play.md` taught *"angle the winger into the boards"*, *"use the boards to box them
out"* and *"take the player or take the puck"* across body, facts, Common Mistakes and Key
Takeaways. ⚠️ ***"Check that you may hit at all"* occurred exactly ONCE, in a blockquote.** Under USA
Hockey that gate is a minor rising to a match penalty; under Hockey Canada a minor rising to a
mandatory major plus game misconduct on injury. **Now in all four layers.**

### Two further Criticals found while verifying it, neither in the brief

⚠️ **The ban list was taught as a CEILING and USA Hockey Rule 604 does not stop there.** Verified
whole:
> 604(a), continuing: *"**A local governing body may prohibit body checking in any classification** and
> is encouraged to provide Competitive Contact options at all levels of recreational play."*
> 604(b): *"**Any time a team from a Competitive Contact category… plays a team from a Body Checking
> category, body checking shall be prohibited under this rule.**"*

**Exactly the failure mode the brief predicted: a reader checks the list, finds themselves outside
it, and hits** — into a game where their governing body has barred checking, or against a Competitive
Contact opponent. *"Those lists are floors, not ceilings"* now travels in all four layers.

⚠️ **And a concept attack found that the British reader's own book restricts the very technique this
section teaches.** The document said only that Britain publishes no *age* — true, and upheld. But
**IIHF Rule 101.1**, word-identical in both editions:
> *"If two or more Players are competing for 'possession of the puck', **they are not allowed to use
> the boards to make contact with an opponent to eliminate her from the play, push her into the
> boards, or pin her along the boards.**"* — penalty *"Minor penalty (2')"* or *"Major penalty (5')
> and automatic game misconduct penalty"*.

⚠️ **That is this section's own coaching cue, barred, even where possession remains the sole object** —
and the In-House Rules put the women's Adult category at the **14th birthday**, so it binds younger
than a North American reader expects. **After two North-American female-hockey bans, *"Britain
publishes no age"* invited a British woman to conclude her book said nothing.** The British negative
was re-verified and upheld — zero hits across all three British sources on six concept terms — **the
gap was the IIHF book, not the British one.**

### The brief was wrong again, and the agent measured rather than assumed

I wrote that *"KT 10 is already the longest item in the document"*. **False when written** — KT 10 was
242 words, KT 5 was 250. ⚠️ **KT 10 is only NOW the longest, at 363, because of the append I asked
for.**

**And it refused to fix that by trimming a caveat.** *"Per non-negotiable 1 I did not trim a caveat to
fit."* It proposed instead shedding a **duplicated** enumeration — KT 10's USA Hockey late-hit list
repeats Common Mistakes item 10 almost verbatim — to a pointer, and said plainly: *"That is a rewrite
of an existing safety caveat and needs its own review; I did not attempt it."*

⚠️ **A 363-word Key Takeaway is voiced as a single `<p>`. It reads correctly and inverts nowhere — and
no listener retains it.** Recorded as an open row rather than solved by deletion.

**One rendering wart found by reading the output, not the source:** `🇬🇧 One British case…` voiced as
*"For British readers, One British case…"*. Fixed in passing.

## The consolidated four-book sweep — run at last, and the corpus held

The plan's GATE STEP row had said for several rounds: *"A consolidated pass over the FINAL staged
diff has still never been run — the sweeps were per-file and sequential, so a claim that became wrong
when a later agent edited a different file is invisible to all of them."*

**Run.** Census: **107 penalty-bearing four-book quantifier claims** in added lines across 24 files.
Two verifiers took the ten highest-count files — **80 of the 107** — extracting the claims
themselves rather than from a relayed list, because relayed lists in this round were measured 33% to
75% wrong.

| | Extracted | Reached | Confirmed | Findings |
|---|---|---|---|---|
| **Group A** — `rules_primer`, `body_contact_and_battles`, `risk_management`, `defensive_zone_coverage` | 61 units → **52 propositions** | **52** | **52** | **0** |
| **Group B** — `center`, `defending_the_rush`, `on_ice_communication`, `faceoffs`, `forechecking_systems`, `goaltender` | **34** | 28 | 25 | **3** |

⚠️ **Group A returned zero contradicted, zero incomplete, zero unverifiable — 52 for 52.** *"No claim
in scope is contradicted by any primary text. No deletion is recommended."*

**Group B's three are all QUANTIFIER errors, not fabricated rules** — which is exactly what the sweep
exists to catch and what no per-file pass could see:
1. Naming **three of four** implies the fourth is the exception; **NHL 56.4 gives a discretionary
   major for interference too.** The real differentiator is a major **plus a game misconduct with
   nobody hurt** — and **the same document says it correctly two paragraphs earlier.**
2. ⚠️ **A negative true of *age* and false of *category*.** *"Neither the IIHF book nor the In-House
   Rules name an age"* is literally accurate — but it follows two clauses naming age **and** category
   for the other books, so the parallelism reads as *"restricts nothing"*. **IIHF 101.1 restricts
   bodychecking by category, with a minor or a major plus automatic game misconduct** — and the
   corpus's stated primary reader is a British player under that book.
3. A four-book quantifier resting on **one** citation, over a book that **contradicts itself**:
   Hockey Canada **8.6(c)** *"No Match penalty may be assessed for tripping"* against its own penalty
   summary Note 1, *"A Match penalty shall be assessed for any deliberate attempt to injure."*

### Both agents refuted their own findings, which is the part worth keeping

⚠️ **Group A opened a finding against the `(except Adult Male Classifications)` carve-out and
withdrew it**: the corpus carries it in **four** places, finds **640 Note 2** as the
classification-free roughing route, **and discloses that whether 640(g) reaches adult men's hockey
"the book does not say, and this document does not know."** *"That disclosure is accurate and I am
upholding it. My near-miss was an artefact of sentence-level splitting."*

⚠️ **Group B opened a finding that Hockey Canada's match penalty was mis-called "residual" — and
killed it by printing the whole block.** **HC 7.1(c)** ends *"in any manner **not otherwise covered
within the playing rules**."* **That qualifier is exactly what makes it residual.** The corpus's word
was earned.

**And Group A caught itself twice on truncated windows** — the IIHF 10.4 bench bar and the IHUK
Section 8 entry both *appeared absent* until it printed further. Its own conclusion is the honest one:
⚠️ ***"A third such case that I did not happen to print past would still be in this report as a
confirmation."***

**Two source-side oddities recorded, neither a corpus defect:** USA Hockey's penalty summary lists
**`610(h)` twice while Rule 610's body ends at `(g)`** — independent corroboration of the fifth
rulebook typo this round recorded — and the IIHF Situation Handbook's running header reads
**`OHTER INFRACTIONS`**.

⚠️ **What the sweep still does not cover, stated precisely:** **27 of 107** claims, in the fourteen
files carrying one to three each; **added lines only**, so a claim that became wrong because a
*deletion* removed its qualifier is invisible — *"which is precisely the failure mode the GATE STEP
row describes"*; and only the **conjunction** of a quantifier with a penalty word, so a wrong *"all
four books"* about a face-off location, a crease dimension or an offside test does not appear.

## An agent died mid-task, and the recovery rule was: check the tree, not the transcript

An agent repairing the three quantifier findings **terminated on an expired login**, its last emitted
line being *"Now the F3 repair in `defending_the_rush.md`."*

⚠️ **Read as intent, that says F3 was not started. Read against the working tree, all three were
done.** F1's sentence had been rewritten to name **NHL 56.4's discretionary major** and the real
differentiator — *"its 56.5 game misconduct needs an injury"*; F2 carried **IIHF 101.1's category
restriction** beside the age negative; F3 stated Hockey Canada's **8.6(c)-versus-Appendix-D**
self-contradiction without resolving it. **All five checkers passed on its unreported work.**

⚠️ **The line was narration of what it was about to say, not of what it had left to do.** The rule
this round already learned for machine sleep and stalls applies to authentication failures too:
**a dead agent's last message is not a status report. Diff the tree.**

## What the round leaves, stated as coverage rather than as a total

**Run this round:** `rules-verifier` on 24 documents; `safety-reviewer` on 12 across six dispatches;
`content-reviewer` on 6; `source-verifier` on the round's new citations; `site-reviewer` in real
Chrome across four viewport/theme cells; `commit-gate` **seven times**; and the consolidated four-book
sweep on **80 of 107** penalty-bearing quantifier claims.

**Running at the time of writing:** `facts-reviewer` and `diagram-reviewer`, neither of which had run
at all this round — both `commit-gate` blocks — plus the three injury-bearing inversions and the IIHF
2026/27 renumbering.

⚠️ **Deliberately open, each with its method recorded so the next round does not re-derive it:** 27 of
107 quantifier claims; the sweep's **added-lines-only** limit, which cannot see a claim broken by a
deletion; 37 inversions in 17 documents; 50 unchecked PMIDs; 13 constructs reaching the audio
unhandled, four of them `➔` inside rule quotations **this round added**; wide tables as a reader-only
layer; a 21-site In-House edition sweep; the omission pass on 25 of 26 documents; cross-book negatives
needing re-attack **by concept, not phrase**; the KHL claim labelled but unresolved; a 363-word Key
Takeaway that must **not** be fixed by trimming a caveat.

⚠️ **And one nobody in this session can close: 22 read-aloud repairs rest on a synthesis voice
honouring a full stop inside a `<p>`.** No speech synthesis is available here. **It is untested for
the pre-existing text as much as for the repairs.**

## The brief said "the substance is unharmed". It was wrong, and one change increases exposure

I wrote into a brief that the IIHF 2026/27 renumbering was **"a citation repair, not a rules repair —
every tier still says what the corpus says it says."** ⚠️ **Refuted. Three Rule 46 clauses changed in
SUBSTANCE, and one makes a player MORE exposed.**

**Third player in.** ⚠️ **The way out narrows and gains a purpose test:**
- **2025/26 46.7:** a game misconduct at discretion *"**except when a game misconduct penalty is being
  imposed in the original altercation**"* — **a blanket exception.**
- **2026/27 46.14:** *"**If an aggressor penalty is being imposed** in the original altercation, the
  'third Player in' penalty **may be waived if in the referee's judgment** the 'third Player in' is
  doing so **with the purpose of intervening to stop the ongoing altercation** … and not to start a
  secondary altercation."*

**A player who steps in to break up a fight is more exposed under the new book.** Verified verbatim in
both editions by the coordinator after the agent refused the brief.

**Two more:** 46.1's persist/resist limb moved to **46.5** and its tier was written **down** — *"at
least a major plus an automatic game misconduct"* becomes *"a misconduct or game misconduct"*; and the
standalone **unwilling-combatant clause 46.6 no longer exists** — **46.6 is now HELMETS**, and the
concept survives only as a discretionary waiver note inside four other clauses.

⚠️ **And the brief's mapping table listed SEVEN moves when there are NINE — omitting the two the
corpus cites most, Instigator (46.3→46.10) and Sucker punch (46.5→46.13).** The mechanism is that the
2026/27 book **alphabetises the clause headings**.

## The second brief error would have shipped a claim false of the current book

The same brief asserted **IIHF 60.1's carry definition was *"verified verbatim, both editions."*** ⚠️
**False.** Verified by the coordinator:
- **2025/26:** *"A 'high stick' is one which is **carried** above the height of the opponent's
  shoulders."*
- **2026/27:** *"A 'high stick' is one which **contacts** an opponent above the shoulders, **provided
  their shoulders are at waist level or higher**."*

⚠️ **The 2026/27 IIHF book adopts the NHL's contact-and-waist sentence outright.** Had the agent
written the brief's framing, it *"would have shipped a claim that is false of the current IIHF book."*
**`rules_primer.md:368` already had this right and the brief did not.**

⚠️ **60.2 and 60.4 ARE word-for-word identical across both editions and the NHL book** — so the
tension the corpus needed to record is real, and it is **between the IIHF's own editions**, not within
one. **The agent stated it that way rather than transplanting the brief's framing.**

**Three errors it caught in its own new text, by diffing rather than by a checker:** *"Every rule
number in this document is the 2025/26 book's"* (false — the document also cites three other books);
a merged-table entry count stated as exactly 25 when it is at least 27; and *"nine of the clause
numbers used below"* when three of the nine are not used below.

⚠️ **That is the ninth and tenth wrong premise this round, both mine, and both would have made the
corpus worse rather than merely left it unimproved.**

## `facts-reviewer` ran — and two of its measurements are the strongest evidence in the record

It read **all 26 documents, 794 blocks, 4,904 facts**, reproducing `check_facts.py`'s counts exactly.

⚠️ **Traceability is perfect, by measurement rather than impression:**
- **0 of 829** `Rule:` facts cite a rule number absent from that fact's own section body.
- **0 of 324** quoted rulebook strings of 12+ characters fail to appear **verbatim** in their own
  section body.

**No invention. No cross-section extraction.** ⚠️ **And it refused to read that as reassurance:**
*"every finding below is a fact that traces perfectly and is still incomplete."* **Ownership is clean
across all 4,904** — no owned number restated anywhere, and the two places one appears both point
rather than copy and keep the owner's qualification.

**Round 20's nine-document post-icing defect is comprehensively repaired** — traced through 40 icing
facts, almost all now carrying the rule-set flag. **Two survivors found.**

### Seven Majors, and every one is an omission rather than an error

**The sharpest is the only one whose direction is toward a lost goal rather than extra caution.** The
kicked-puck rule is stated **NHL-only in three documents**, and **Hockey Canada's book says the
opposite**: 6.10(b) — *"Kicking the puck cannot result in a goal… **This includes when an attacking
player kicks the puck and it deflects off any other player or object and goes into the goal**"* — with
Interpretation 1 confirming a deflection off a teammate's *"skate, body or stick – no goal."* **USA
Hockey writes only *"off any player"*, so the NHL's good-goal limb is not in that book either.** One
of the three also **miscites its own limb** — the body-deflection case is 49.2(i), not (ii).

**The rest, in kind:** a cross-check fact naming three books and dropping **the only one where the
blade matters** (USA Hockey 609's Note is the rule's own definitional text, and the corpus states it
correctly in a different file); a **USA-Hockey-only** non-retaliation protection voiced as a law of
hockey, **contradicted 95 lines later in the same document**; a 6-on-5 fact citing bare *"Rule 81.4"*
with **no book at all**, telling a USA Hockey team it cannot change; post-icing consequences stated
flat three lines below four meticulous four-book facts; the **only hand-pass fact in 4,904**,
single-book on a rule that stops play in every game; and a penalty-pricing fact stated NHL-only **in
the section that exists to price penalties**, where USA Hockey 614(b) makes it *"a penalty
shot/optional minor"* with the election going to the **non-offending** team.

⚠️ **It also hypothesised a Critical and refuted it against the primary text** — a Hockey Canada
citation it suspected was wrong turned out **thin rather than wrong**, rescued by Interpretation 5,
*"which `center.md:459` already says exactly."*

### The two gaps it named, and why they are now dispatched rather than recorded

⚠️ **65 of 829 `Rule:` facts name NO BOOK — and its whole method was book-name pattern-matching, so
they appeared in none of its censuses.** It caught one by accident, chasing a different thread, and
said so: *"There is no reason to think it is the only one."*

⚠️ **`faceoffs.md` carries 103 `Rule:` facts — an eighth of the corpus's entire rule layer — and was
structurally checked, never read.** *"Faceoff rules diverge sharply between books… it is the single
most likely remaining home for this shape. Nothing in my method would have found an omission there."*

⚠️ **And it declined to give a number for the em-dash inversion population**, measuring 495 `Never:`
and `Risk:` facts containing a dash and a narrow filter returning 1: *"the true figure lies between
and I did not establish it. **I am deliberately not offering a number that would compete with the 37
you are already working from.**"* **That is the fourth census disagreement this round handled by
stating the method instead of picking a figure.**

## `diagram-reviewer` ran — and the seven advisories are adjudicated at last

**Coverage:** all **112** specs audited programmatically; **70 rendered**; **22 viewed as pictures**,
four cropped and zoomed 3–6×; the HEO source sheet **read at 150 dpi rather than taken on trust**.

**Notation is machine-clean across all 112:** 615 player glyphs, 511 shaped, 104 goaltenders, 92
drawing a puck — **zero bare numerals on a player, zero circled bare `A`, zero `pos` outside F/D/G,
zero circles labelled `D`.** Shape carries position, fill carries team, confirmed against the source
sheet and against `rink.mjs`'s `const fill = opp ? ink : '#fff'`.

⚠️ **And it corrected two premises in my brief before acting on them** — `defensive_zone_coverage.md`
has **eight** diagram calls, not four; and **the three diagram modules are not in the staged set at
all**, having landed in the site commit. **Both verified.** That is the eleventh and twelfth wrong
premise of mine this round.

### The finding no checker could reach — a `pass` that renders as a bare arrowhead

⚠️ **Measured, not estimated.** The arrowhead marker occupies **2.68 ft** of a route's tail; a glyph
plus halo hides **3.5 ft** of the head. `support-distance-range`'s only route is **8.68 ft long**,
leaving **2.5 ft** of line in a 4.2 ft dash cycle. *"I cropped and zoomed both: the dash is entirely
swallowed, and the reader sees an arrowhead alone."*

**Nine routes across eight diagrams have under 6 ft of visible line.** ⚠️ **This defeats the style
guide's own test — *"check each is unmistakable at the size the diagram actually renders"* — and it is
invisible to `check-arrivals.mjs`, whose exclusion of `pass` is correct in principle but assumes the
route still LOOKS like a pass.** **Owner's call: any fix changes every route in the corpus.**

### A caption that gives a contact instruction its own section scopes

**`forecheck-pinch`'s** caption carries the test *"if you can't arrive on contact, don't go"*. The
bullet it quotes now opens *"⚠️ First, though: none of this applies if you may not body check at
all"* — three books.

⚠️ **The same module already does it the other way, which is what makes it an omission rather than a
house convention:** measured, `forecheck-122` **YES**, `forecheck-131` **YES**, **`forecheck-pinch`
NO** — *"and it is the one whose caption actually contains the words 'arrive on contact'."* ⚠️ **A
caption reaches the audio**, so a listener gets it with nothing around it. **Pre-existing, and the
gap widened this round because the section's caveat grew.** Dispatched.

### The seven advisories — nobody had ever ruled on them

**All seven adjudicated. None teaches anything wrong.** Four are artefacts of an **unbounded terminal
tangent** — one aims at a point **28.2 ft beyond where the drawn ray stops**; three are artefacts of a
**goaltender with no glyph radius sitting on the far side of a goal frame the check does not model**
— `forecheck-212`'s arrowhead is *"2 ft behind the goal line and outside the posts… the goal frame is
physically between the arrowhead and the goaltender."*

⚠️ **And it refused to accept one on arithmetic alone.** *"`nz-1-2-2-containment` — full-rink scale
compresses the crease, so at first glance the arrowhead does appear to sit on the `G`. **I cropped it
at 6×**."* Same geometry, and it reads correctly once magnified.

**The closest to real:** `nz-1-2-2-trap`, where the aim point genuinely *is* a person — but the route
is the **opposition's**, so *"it instructs the reader to stand still, not to skate through anyone."*

⚠️ **The check's own documented gap is now the live one:** *"Advisories have no baseline… a NEW
advisory looks exactly like an accepted one."* **These seven are adjudicated and there is nowhere to
record that.**

### Its own honesty about what it did not see

⚠️ ***"90 of 112 diagrams were not looked at as pictures."*** 48 rendered and not opened, 42 never
rendered. *"M1 was invisible in the source and in the un-zoomed render; **I only caught it because I
cropped one picture at 4×. There are eight more short-pass routes I have not cropped.**"*

**And the limit that applies to every review in this round:** *"I checked each against its own
section's description, which is a consistency test, not a correctness test — **if the section has the
1-2-2 wrong, the diagram matching it is still wrong and I would have passed it.**"*

## Twenty-six against a predicted eleven — and the two worst were unprompted

A brief predicted 11 inversions across seven files. ⚠️ **The agent found 26, and my per-file count was
a floor in SIX of the SEVEN** — `game_management` 9 against 3, `special_teams` 9 against 2,
`risk_management` 5 against 1, `passing_and_receiving` 4 against 1.

**The sharpest was the one I did name:** *"Never — Take D-to-D through the slot — go behind the goal
line"* — **spoken, the negated half was the safe route.**

⚠️ **The two worst were not in the brief at all:**
1. A `Rule:` fact reading *"— **leave your feet and slide into any opponent, carrier or not, and cause
   them to fall**…"* — **read aloud, a bare instruction to commit tripping**, inside a rule fact.
2. An `Action:` value carrying *"…head up, **never your back** — protect the puck and eat the
   faceoff"*, where **the negation sat immediately before the second dash** and landed on the safety
   instruction.

⚠️ **And the negation was found inverting HONEST DISCLOSURES** — *"not a measurement — treat any claim
as an impression"* and *"not a measured one — treat it as unverified"*. **Inverted, those tell a
reader an unverified claim is solid.** ⚠️ **The corpus's hedging is itself in the blast radius of this
defect**, which nothing before this round had considered.

**Repairs were needed under ten different labels** — `Action:`, `Priority:`, `Mindset:`, `Key:`,
`Convention:`, `Risk:`, `Read:`, `Technique:`, `Position:` and `Rule:`. **The label is not the
boundary, and a `Never:`-only grep finds a fraction of it.**

⚠️ **Seven values were read and deliberately LEFT** — a declarative *"pass speed is not published
anywhere"*; one where *"play continues"* uses *play* as a noun; several where an intervening
declarative clause breaks the carry. ***"A sweep would have 'fixed' these."*** **The find rate and the
refusal rate are both the point.**

**And the method that got there is the transferable part:** *"My first heuristic scan missed one on
the verb 'aim', and my second missed nothing **only because I read all 172 printed tails by eye.**"*

## The hand pass — four books, three tests, and the corpus now says so

The corpus's **only** hand-pass fact in 4,904 was single-book. Asked to verify the equivalence rather
than assume it, the agent found **it does not hold at the wording level**:

- **NHL and IIHF 79.2** locate by **the puck**, at either contact (IIHF verbatim identical).
- **USA Hockey 618(b)** requires the pass be *"initiated **and** completed in their defending zone"* —
  **both ends.**
- **Hockey Canada 10.2(a)(i)** locates **the receiver**.

⚠️ **It reported rather than resolved**, and wrote the limit into the corpus: *"What none of the four
books settles is the blue-line case… **No published ruling was found reconciling them, so do not plan
a hand pass across your own blue line on the strength of the NHL's wording.**"*

**And on the Appendix IV renumbering it refused to trust a diff:** *"I did not trust the diff — I
printed both windows whole and read examples 18, 19, 20 and 32 by eye in each."* ⚠️ **Then it named
what that still cannot see: *"the other 28 rows I did not read, and the interleaving artefact means a
diff cannot substitute."***

## The brief that would have REVERSED a correct warning

⚠️ **This is the round's title claim in its sharpest form.** A brief of mine made five assertions
about `uk_rules.md`, `rules_primer.md` and `team_play_and_culture.md`. **The agent refuted all five
before acting**, and one of them was not merely wrong but **inverted**.

**I wrote:** *"'five minutes is a floor the referee can leave' … Direction is protective-to-harmful:
it tells a British reader a fighting major MIGHT cost only five minutes."*

⚠️ **A FLOOR the referee can leave means the referee may go ABOVE five minutes.** The sentence was
**already the harsh reading**, and the paragraph it sits in **ends *"Assume you are gone."*** The
agent's own words: ***"Had I acted on the brief's framing I would have reversed a correct
warning."***

**What was actually stale was the mechanism, not the direction** — the sentence framed ejection as a
discretion the referee *may* exercise, where 2026/27 makes it the standard. **Scoped and strengthened,
not reversed.**

**The other four:**
- *"The document names no IIHF edition anywhere"* — **false.** It names the 2025/26 book with its
  versioned URL at `:615`, and even records *"read in the 2025/26 (Version 1.1) and 2026/27 editions,
  which are identical on both rules"* for 81.4/82.1. **Under-scoped, not unscoped.**
- **My four line numbers were wrong.** Corpus-wide, *"floor the referee can leave"* occurs **once**,
  in a different file. ⚠️ **And two of the four I named carry the persist/resist limb that
  `uk_rules.md:44` had ALREADY flagged** — *"so those two were covered, not stale. I left them."*
- *"NEITHER flags 46.1's discretion→mandatory change"* — **half right.** One of them already flagged
  the persist/resist tier **and** the unwilling-combatant deletion.
- ⚠️ **I quoted the deleted retaliation sentence TRUNCATED.** Its full text carries *"or a major
  penalty ('Fighting', **without a game misconduct penalty**), if the criteria for 'fighting back'
  with a few punches is not fulfilled."* **The agent restored the limb in both files.**

### Two facts nobody had, found while refuting

⚠️ **Both books skip a table number** — 2025/26 has **no Table 8**; 2026/27 has **no Table 6**. **So
the shift is a merge plus a renumber, not a clean −2**, and any remap computed as arithmetic is
wrong.

⚠️ **And the merged Table 5 RETAINS a *"Defender – Unwilling combatant"* row in the MAJOR ONLY
column** — verified: *"Unwilling combatant ✓ 46.10, 46.12"*. **Major-without-game-misconduct survives
as an outcome**, as a discretionary waiver from a mandatory baseline rather than as a floor. ⚠️ **My
brief's *"specifically false of the current book"* overstated it**, and the agent wrote *"the
discretion runs the other way"* instead — which is what the book supports.

## A second correction, on the same clause, from a different agent

I also told an agent the 2026/27 book *"is CLOSER to USA Hockey 615(a), not further."* ⚠️ **It refused
to write that**, and it was right. The four waiver notes waive ***"the automatic game misconduct
penalty"*** at the referee's discretion — **they do not waive the fighting major**, and **46.12** keeps
*"A major penalty and an automatic game misconduct shall be imposed on any Player who fights."* **USA
Hockey 615(a) protects a player who does not retaliate from ANY fighting penalty.** *"Those are
different provisions. Writing them as converging would have been a new defect."*

**And on the kicked puck it found the case settled harder than I had said.** I called USA Hockey's
position an absence. ⚠️ **USA Hockey Casebook Rule 627, Situation 4 answers the exact case: *"The puck
is kicked by an attacking player, deflects off their stick and enters their opponent's goal. Should
the goal be allowed? **No.**"*** — so a player taught the NHL limb under USA Hockey **loses the goal
and concedes an immediate stoppage with the faceoff moved out of the attacking zone.**

## The sweep found what a sweep structurally cannot, because an agent counted components

⚠️ **`scanning_and_anticipation.md`'s boards override drops *"never duck"* from the two layers that
teach it.** Measured: **facts `:134` NO · body `:147` NO · Common Mistakes `:510` yes · Key Takeaways
`:570` yes.** **The facts layer is the one voiced standalone**, so a listener gets *skates parallel,
forearm and hip, chin off your chest* — **and not the one component that addresses the axial-load
mechanism.** The owner document calls it *"never negotiable"*, sourced to *Heads Up, Don't Duck*.

⚠️ **The agent found it, measured the replacement at 169/200, and DID NOT APPLY IT**, because the
coordinator had reserved that line an hour earlier. *"I am not stepping on a live line."* **Correct
discipline, and the reason the finding arrived intact rather than as a clobber.**

⚠️ **And it named exactly why its own method could not have found this:** *"My prose filter keys on an
em dash with a negation before it — **it is structurally blind to a document that simply never says the
dangerous thing.** I caught the 'never duck' gap only because the brief told me the four components to
count; **had it named three, I would have counted three and reported clean.**"*

**That is the omission class, caught by a checklist rather than by a pattern** — and it is the only
thing in this round that found one.

## A rule quoted at the case it excludes

`playing_without_the_puck.md` says *"restrain a **carrier** from behind."* **NHL 56.1:**
> *"A player who is behind an opponent, **who does not have the puck**, may not use his stick, body or
> free hand in order to restrain his opponent, but must skate in order to gain or reestablish his
> proper position."*

⚠️ **The clause governs a player who does NOT have the puck.** The direction is **over**-restrictive —
restraining the carrier is separately hooking or holding, so nobody is endangered — **but the corpus is
quoting a clause at the case the clause excludes.** ⚠️ **The finder changed only the punctuation and
left the wording, *"so nothing new is entrenched"*, and referred the scope question out.**

## Two prose sweeps, and neither file set had the layer the brief assumed

Both sweeps of the "unswept" documents refuted their briefs the same way. **Six off-the-ice documents:
zero facts blocks.** **`rink_map_and_glossary.md`: no fenced block of any kind** — *"its whole surface
is prose, tables, blockquotes, the glossary, Common Mistakes and Key Takeaways."*

**So both swept prose instead**, and between them read **2,477 voiced units** by eye. **27 repairs.**
⚠️ **And 271 candidates read and deliberately LEFT**, with the reasoning recorded — *"stop takes a
gerund; watch is an imperative and cannot be its complement"*, *"'none … reaches' is a finite clause"*,
*"the negation is inside an attributed quotation with its own complete predicate."* ⚠️ **One agent
recorded two near-identical shapes with opposite verdicts and said so explicitly: *"same shape,
different verdict, and I want that on record rather than hidden."***

**Both flagged the same limit on the whole class:** *"Nobody in this round has synthesised a single
second of speech to check the premise the whole sweep rests on."*

⚠️ **And one named the blind spot that survives everything:** `rink_map_and_glossary.md` is *"the
corpus's dictionary, 751 lines with no facts layer, and I have no mechanical way to know which
definitions SHOULD carry a safety clause and don't."* Its **Board battle**, **Butterfly**,
**Wrap-around** and **Post** entries all describe real collision exposure and none carries a caveat —
*"I could not decide whether that is an omission or correct delegation to the owner document."*

## A rulebook table contradicted by its own rulebook, in two books identically

Sent to finish an edition-scoping census, an agent read the rows rather than the numbers and found
something no scoping pass was looking for.

⚠️ **The corpus told a goaltender that an attacker who refuses to give ground *"is not automatically
penalised"*, on the authority of the interference table's row 6D. NHL Rule 69.3's third paragraph
reaches exactly 6D's facts and says the opposite:**

> *"If, after any contact by a goalkeeper who is attempting to establish position in his goal crease,
> the attacking player does not immediately vacate his current position … and a goal is scored, the
> goal will be disallowed. **In all such cases, whether or not a goal is scored, the attacking player
> will receive a minor penalty for goalkeeper interference.**"*

**IIHF 69.3 writes the same sentence.** ⚠️ **The tables say no minor at 6D; the rules say mandatory
penalty. Both books disagree with themselves, identically** — and **the divergence is 6D alone**, since
at 6B both tables do assess a penalty and agree with 69.3.

⚠️ **The document already held both halves and had never set them against each other** — it cited
*"69.3's minor for refusing to give ground"* forty lines away. **The corpus's own stated hierarchy,
written twice in these files — *"a table cannot repeal it"* — resolves it**, and both layers now state
the disagreement rather than the table's half.

**And the same pass found the corpus contradicting itself inside one sentence:** it said all three of
rows 6F, 6G and 6H *"put it on the goalkeeper"* — **and then quoted the NHL's 6F as coincidental
minors in the same breath.** 6F reads *"to the goalkeeper **and/or attacking Player**"* in the IIHF and
*"Coincidental minors"* in the NHL; only 6G and 6H put it on the goalkeeper.

⚠️ **A side finding worth keeping: the IIHF's own Situation Handbook 69.5 cites itself to the wrong
row** — *"Table 16 (Rule 69 Situation 6C)"* when its facts are **6G**. **The corpus does not repeat the
error.**

## My brief would have "corrected" a verified reading into a wrong one

I wrote: *"'Reference Table' is NHL terminology; the IIHF says 'Appendix IV – Tables Overview'. Do not
mix the two vocabularies."*

⚠️ **False.** `grep -c "Reference Tables"` returns **1 in each IIHF edition** — inside **Rule 20.4**:
*"…whenever a Player is assessed a major penalty for any of the infractions listed in the **Reference
Tables**."* **So the corpus's *"the IIHF's Reference Table 6"* echoes the IIHF's own operative
wording**, and a document's observation that *"the phrase appears once in the whole rulebook, inside
20.4 itself"* is **exactly right**.

***"Had I acted on the brief I would have 'corrected' a verified reading into a wrong one."*** **That
is the fifteenth wrong premise of mine this round, and the second that would have reversed correct
work rather than merely wasting effort.**

⚠️ **And it caught an error in its own new text by diffing the whole file** — it wrote *"carrying all
twenty-five entries"*, then counted from the printed tables: **26 rows in the old three, 28 in the
merged one.** **The +2 independently confirms another document's *"two fighting rows the old tables
did not carry."*** **The invented count is gone from both files.**

## Neither of my two options was right — the answer was both

I gave an agent a scope finding with two honest-looking resolutions: **narrow** *"restrain a carrier
from behind"* to *"an opponent who does not have the puck"*, **or** keep *"carrier"* and cite holding
and hooking instead. ⚠️ **It printed NHL Rule 56 whole, plus Holding and Hooking, and found neither
option correct alone.**

- **Nothing in Rule 56 reaches a puck carrier restrained from behind.** 56.1's *Restrain* definition
  is *"impede an opponent **who is not in possession of the puck**"*, and 56.2(i) and (iii) repeat it.
- ⚠️ **But the conduct IS penalised, under two rules that carry no possession condition at all:**
  **54.1** — *"Any action by a player that restrains or impedes the progress of an opposing player
  **whether or not he is in possession of the puck**"* — and **55.1**'s hooking.

**Both verified verbatim by the coordinator afterwards.** *"So neither of the brief's two options was
correct alone — the honest answer is both, and I took it."* **The corpus now carries the split.**

⚠️ **And it chose its citation edition deliberately rather than by default:** it took the IIHF text
from **2025/26 v1.1**, not the 2026/27 file, because the document's Sources block ends *"no other rule
in the 2026/27 book has been read for this document"* — ***"citing the 2026/27 file would have
falsified that sentence."*** **That is a disclosure protected by not being made stale.**

## A document that sends a reader into a wall battle with the posture in no layer at all

⚠️ **`puck_support_and_spacing.md` instructs the reader to *"go in to win the puck"* on a 50-50 and to
arrive *"as the designated second player in your team's board-battle system"* — and carries the
arrival posture in ZERO layers.** Measured by the coordinator:

| component | occurrences in that document |
|---|---|
| `skates parallel` | **0** |
| `chin off your chest` | **0** |
| `never duck` | **0** |
| `back to the boards` | **0** |

**Body ✗ · facts ✗ · Common Mistakes ✗ · Key Takeaways ✗.** ⚠️ **The only thing present is a bare
*"See Body Contact and Battles"* pointer — a cross-reference, not a caveat, and absent from the facts
block the extraction layer voices standalone.** **This is the moment two sibling documents call *"the
single most dangerous moment in hockey"*.**

⚠️ **The agent measured the repair at 185/200 and did NOT apply it**, so the wording could be settled
across the siblings in one pass rather than diverging a sixth time. **Dispatched with the owner's
wording named.**

⚠️ **And it said exactly how it found it, which is the part that generalises:** *"I found the omission
only because I already knew the shape from repair 1 and went looking for the same one. A hazard whose
section heading did not advertise it would have passed me."* **The heading here happens to say
'battle'. That is the whole reason this one was caught.**

---

## The defect class that has no negation in it

The em-dash inversion class was defined by a negation: `_label_lead` renders `Never:`
as `"Never — "`, a second em dash in the same value is prosodically identical, and a
listener carries the negation across it into the instruction that follows. Every scanner
built for it filtered on a negation in the pre-dash clause.

**Two of one agent's fifteen repairs had no negation anywhere in the paragraph.**

```
Risk: The middle is the most expensive place to lose the puck — turn and survey there
      and you get hit with your team spread across the ice
```

```
Rule: Blocking a shot is protected — drop to your knees and have the puck shot under you
```

A ` ```facts ` value is voiced standalone, in its own `<p>` with a 300 ms break either
side. Heard alone, a label plus a context clause plus a dash plus a bare imperative is
heard as *do this* — and in both of these the imperative **instructs the hazardous act**.
The first tells a listener to turn their back and survey in the middle of the neutral
zone. The second teaches the dropped shot block in a block whose **very next fact** says
*"close and on your feet"* — two consecutive standalone paragraphs contradicting each
other, riskier one first.

Neither carries a negation, so neither scanner could see it. They were found by dumping
every post-dash clause that opened on a verb and reading all of them.

**The repair form is the declarative.** A declarative cannot be heard as an instruction
at all, which is a stronger guarantee than a full stop. Where a rulebook is the source,
the book's own frame is already declarative: NHL Rule 63.2(v) NOTE writes shot-blocking
as a **permission in the third person** — *"Any player who drops to his knees to block a
shot should not be penalized if the puck is shot under him or becomes lodged in his
clothing or equipment but any use of the hands to make the puck unplayable should be
penalized promptly"* — and the repair took that voice.

The finder's own statement of the limit is the scope of the follow-up:

> *"I ran that negation-free pass in full on `center.md` and `defender.md`, and only as a
> keyword grep on the other four. A fact whose post-dash clause instructs a hazardous act,
> with no negation and opening on a verb my grep did not list, would have passed me. So
> would a verbless imperative — 'skates parallel to the wall', 'chin off your chest' — in
> that same position."*

So the class has a second half nobody has swept: **the verbless imperative.** A post-dash
clause opening on a bare noun that names a body part or a piece of equipment is an
imperative with the verb elided, and it inverts identically.

### A heading that contradicted its own facts block

```
### 1. Never pass D-to-D through the slot — go behind the net
```

A `###` heading is voiced standalone with a 450–1000 ms break, and it also appears in the
sidebar nav and the table of contents. Carried across the dash, **the negated half is the
safe route** and what survives is the pass across the reader's own slot — which the
section's own body calls *"not a chance against. That is a goal."* The facts block
directly beneath it already said `Action: Take it behind the net instead`. The heading
contradicted the block it introduced.

---

## The separator decision, and its honest basis

The boards-safety instruction — *never your back to the wall, never duck*, then
`skates parallel` · `forearm and hip` · `head up` · `chin off your chest` — is stated
across `content/` with three different separators between the prohibition and the
prescription. Censused directly:

| Separator | Count |
|---|---|
| Full stop | the large majority — the canonical form |
| Colon | 4 |
| Comma / `and` coordination | 3 |

⚠️ **The inversion mechanism is measured for the em dash and for nothing else.** For a
colon or a comma in running prose the renderer emits the punctuation as-is and the voice
decides; **nobody in this project has synthesised audio.** The decision to converge them
on the full stop rests on an asymmetry of cost, not on evidence that colons invert:

> Converging costs nothing. No content is lost, no length cap is threatened, and the full
> stop is already the form the corpus overwhelmingly uses. If colons turn out to be safe,
> the change was merely tidy. If they are not, four safety instructions were inverting.

**Nothing asserting that a colon was measured to invert may be written into `content/`.**
That would be a fabrication, and the repairs need no justification in the text.

One instance is harder than the rest and may correctly resist repair —
`body_contact_and_battles.md:607`, the owner line quoted or paraphrased by at least six
other documents:

> *"In every case, and never negotiable: head up, chin off your chest, never your back to
> the wall, never duck, and 'hit the boards or goal posts with an arm, a leg or anything
> but your head first'"*

Two positives, then two negatives, then **a quoted positive imperative after "and"**. The
*never* can distribute onto the quoted clause, which would tell a listener not to take
the impact on a limb — the exact opposite of the Look Up Line material it quotes. The
quotation may not be altered inside its marks. **If it cannot be fixed without touching
the quotation or weakening the line, the right outcome is to leave it and say so.**

---

## Renderer: a compound joiner voiced as a pause

`scripts/md_to_speech.py` mapped any leftover en dash to an em dash — *"read as a
comma-length pause"*. A **closed-up** en dash is a different mark, and the corpus uses it
two ways:

- **compound joiners** — `east–west`, `helmet–facemask`, `head–neck`, `pre–post`,
  `forehand–backhand`, `expert–novice`, `mindfulness–acceptance–commitment`
- **letter ranges** — `640(b–f)`, `pp. v–vi`

Both fell through to the em-dash row, so a listener heard *"an east — west pass"*, with a
comma-length break inside a single compound, and heard a rule's subsection range as two
unrelated letters.

A `compound-en-dash` rule now claims the chain whole — matched as a chain rather than
pairwise, or the second dash of a three-part compound would be left behind for the symbol
table to promote. Both sides being a single letter or a short roman numeral selects the
range branch; anything else is a compound and joins with a hyphen and no pause.

Verified on a full corpus render: every compound voices as one word, both ranges voice as
*"to"*, and **zero spaced em dashes survive inside a compound**. `--self-test` went
134 → **138 assertions, 0 failures**.

---

## The caption layer, first measured pass

A caption and a `describe` string are voiced by `md_to_speech.py` with the same
prominence as body prose. **No safety pass had ever been run over them.**

### A caption that had been contradicting its section for the life of a commit

`dump-soft-area` read *"that gives your chaser a stationary puck and **a body to hit**"*.
Commit `c93b13f` changed **both content layers** to *"a body arriving on it"* — facts
block and body — and the caption was not propagated.

The consequence is audible rather than theoretical: the renderer puts all three layers in
**one chunk**, so a listener heard *"a body arriving on it"*, then *"a body arriving on
it"*, then *"a body to hit"* — three consecutive `<p>`s, the third contradicting the first
two. The caption also **disclaims** the arrival in its own last sentence — *"Nothing about
how the chase finishes is drawn here; angling is movement over time"* — and then names a
hit anyway. The picture contains no contact: both arriving routes stop short and finish
apart.

### Ten short `pass` routes that do not render as passes

Marker `markerWidth` 4.5 at stroke 0.7 with `refX` 8.5/10 consumes **2.677 ft** of the
line's tail; the glyph radius 2.9 plus halo 0.6 hides **3.5 ft** at the start; the dash
cycle is 2.4 + 1.8 = **4.2 ft**. On a short route nothing is left.

Two render as **a bare arrowhead on white ice with no line at all** — `pp-overload`
route 1 at 2.14 ft visible, and `support-distance-range` route 0 at 2.51 ft. A prior list
of nine was **short by one**: `winger-dz-reverse` route 0 has a visible remainder
byte-identical to a route that was on the list.

Two consequences beyond legibility:

- **`pp-overload` breaks a numbered sequence in the middle.** Passes 1 and 3 render as
  long unmistakable dashed lines; pass 2 renders as a floating arrowhead. One picture,
  one cycle, two notations.
- **`support-distance-range`'s `describe` asserts what does not render** — *"with a short
  dashed passing route running to them"*. A screen-reader user is told there is a dashed
  route; a sighted reader sees none. The arrowhead tip sits 3.52 ft from the receiver's
  anchor, inside the 3.5 ft glyph+halo, so what renders is an arrowhead with no line
  pointing into a player's glyph — visually a **skater's arrival arrow**.
  `check-arrivals.mjs` excludes `pass` from `ARROW_KINDS` on the correct principle that a
  pass arriving at a receiver is what a pass IS. That exclusion assumes the route still
  looks like a pass. Here it is the arrival rule defeated through the back door of a
  rendering defect.

### The notation key, checked against the sheet rather than the style guide

`pdftotext` returns only the title of `sources/heo_intl_drill_symbols.pdf`, so it was
rasterised at 150 dpi and read: `ⓒ Coach` · `G Goaltender` · `● ○ Forward / Player` ·
`▲ △ Defender / Player` · `→ Forward skating` · tight wave `Backward skating` ·
`|||||| Lateral crossovers` · `Pivoting` · smooth wave `Skating with control of the
puck` · dashed arrow `Passing` · double line `Shooting` · `Stopping` · `Drop pass` ·
line + **one** bar `Checking pressure` · **`X Pylon`** · `Cluster of pucks`.

Shape carries the position; the sheet prints the filled/open pair **without saying which
team is which**; cross-ticks are lateral crossovers; X is a pylon. The renderer's own
disclosure — that reading fill as the team is *"this guide's own convention rather than
the key's, which prints the pair without saying what it is for"* — is accurate.
Mechanical audit over all 112 specs: 0 bare numerals on a player, 0 `X` on a non-pylon,
0 goaltender carrying a shape, 0 unknown `pos:` or `team:` values.

### 51 captions read and deliberately left

Recorded so a later regex does not find them again. 28 where the verb is not about body
contact at all (*check* meaning the opponent you cover; *angle* meaning geometry; *body*
meaning a person). 11 where contact is real but **legal in every classification** —
verified in primary text rather than assumed: USA Hockey's *"Competitive contact is body
contact between two or more skaters who are in the immediate vicinity of the puck and who
are in the normal process of playing the puck… encouraged in all age classifications"*,
and *"Competitive contact does not mean 'no contact.'"* The same passage names **angling**
in terms as an acceptable example. 6 where the caption already disclaims or defers
contact. 1 that warns the reader as the potential victim, matching its section.

**A layer test finds candidates; only reading decides** — restated by this pass, from the
other side.

### One report figure corrected: there is no diagram "title" layer

A report closed by naming *"the diagram-title layer"* as never swept for the em-dash
inversion defect. `site/src/data/diagrams.json` carries **112 `caption` and 112
`describe` strings and no `title` field at all**, and the caption layer *had* been
scanned for that exact shape earlier the same day — 86 negation-then-dash pairs, two
defects, both routed to the files that hold them.

The substance underneath it was right, and is the more useful finding: **a `content/`
grep is not a corpus census.** *"take over the check"* was changed to *"take over the
coverage"* in both `content/` layers, and `grep -rn "take over the check" content/` now
returns zero — while `site/src/diagrams/puck_support_and_spacing.mjs:670` still carries
it and still speaks it.

---

## Measured: the reader-only layer

`md_to_speech.py` narrates a table only if it fits `TABLE_MAX_COLUMNS = 3`,
`TABLE_MAX_ROWS = 14` and `TABLE_MAX_CELL_CHARS = 200`. Anything wider becomes a spoken
pointer. Censused over all of `content/`:

**46 tables. 27 narrated. 19 not.**

The pointer coverage is exact and honest — **19 pointers in the rendered SSML for 19
non-narrated tables**, 1:1, each reading:

> *"A detailed table appears here in the written version. It does not read well aloud, so
> it is not narrated. The full table is on the website."*

So a listener is never silently deprived; they are told a table exists. What they are not
told is **what is in it**, and that is where the omission risk lives. The 19, with why
each fails:

| File | Why it fails |
|---|---|
| `rules_primer.md:749` | 6 cols, 19 rows, 2,294-char cell — the six-book penalty comparison |
| `body_contact_and_battles.md:1131` | 1,616-char cell — *"Infraction / The test the official applies"* |
| `defensive_zone_coverage.md:361` | 6 cols — the four-system comparison |
| `equipment.md:30` | 17 rows |
| `equipment.md:382` | 299 chars — HECC certification standards |
| `rules_primer.md:330` | 4 cols — penalty type, time, short-handed, substitution |
| `rules_primer.md:656` | 15 rows — where the draw goes |
| `rink_map_and_glossary.md:53`, `:187` | 4 cols |
| `risk_management.md:38`, `:97`, `:441` | 4 cols / 290 / 453 chars |
| `getting_started.md:131`, `:254`, `:525` | 376 chars / 4 cols / 334 chars |
| `playing_without_the_puck.md:688` | 334 chars |
| `puck_support_and_spacing.md:154` | 394 chars |
| `goaltender.md:38` | 280 chars |
| `switching_positions.md:302` | 281 chars |

⚠️ **RETRACTED IN PLACE — the sentence that followed here was speculation, and it is
measured false.** It said `body_contact_and_battles.md:1131` carries multi-book detail
*"that appears nowhere in its own row's narrated neighbours"*. Probed: of 39 cited tokens
in that table, **36 also appear outside it in the same document**. Only `56.4`, `622(b)`
and `622(c)` are table-only, and the *substance* they support — interference as *"a floor,
not the ceiling"* — appears three more times outside the table. It is a reference grid
whose content survives in narrated layers, which is the legitimate use of a table.

⚠️ **And the probe that found this was itself wrong the first time.** Its first form
string-matched whole designations, so `ASTM F513-22` in `equipment.md`'s table counted as
table-only because the document writes it elsewhere as `ASTM F513` and `F513-22`
separately. Re-run on normalised bases: **all 6 standards present outside the table.** The
one that looked like the highest-consequence finding — a listener never hearing which
standard their helmet must meet — did not exist.

What survives the corrected probe, as a **worklist and not yet a finding**: 14 rule numbers
cited only inside `rules_primer.md:749`'s six-book comparison (among them `101.1`,
`403(b)`, `43.4`, `43.5`, `47.5`, `50.5`, `55.4`, `58.5`), 8 imperial conversions only
inside `rink_map_and_glossary.md:53`, and `85.3` only inside
`puck_support_and_spacing.md:154`. A citation being table-only is not the same as its
substance being table-only, and **only reading each one decides which it is.**

The table's cells do carry the hooking stick-to-stick exemption and its
**NHL/IIHF-only** scope against USA Hockey 623 and Hockey Canada 8.2; interference as
*"a minor is the floor, not the ceiling"* **in three books**; the high-sticking test
**rewritten for 2025-26** from how the stick is carried to *contact*; and tripping
requiring **no fall at all** under USA Hockey or Hockey Canada. A listener gets the
pointer and none of the content.

**What this census does NOT establish**, and what the audit still has to: whether each
table's load-bearing facts survive in a layer a listener does reach. A table is a
legitimate place for a *reference* grid. It is not a legitimate place for the only copy
of a safety fact. Those are different findings and only reading each table against its
document's narrated layers separates them.

### The sub-class with no dash either: the imperative straight after the label

The negation-free class was defined by a post-dash imperative. A third form has no dash
at all — the imperative sits **immediately after the label**:

```
Risk: Pack all five onto the goal line and nobody is available for an outlet
Risk: Ice it at even strength and the puck comes straight back
Risk: Chase every puck you touch and you are doing three players' jobs
Risk: Go early or slide past the lane and you are on the ice and out of the play
```

`_label_lead` voices `Risk:` as `"Risk. "` — a terminated noun — and what follows, alone
in its own `<p>` with a 300 ms break either side, is **a bare imperative naming the
hazardous act**. This is the failure `_label_lead`'s own docstring describes for `Never:`,
arriving one position earlier in the line.

**Adjudicated: in class.** The mechanism is the same and the repair is free — each was
recast as a declarative traceable to a body sentence in its own section (*"With all five
packed onto the goal line nobody is available…"*), losing nothing. The last of the four is
the one that decides it: its block carries the tripping and clipping majors, so the act
the listener is invited to perform is a penalty.

The agent that proposed the sub-class flagged it for adjudication rather than assuming it,
and closed by saying the class *"has not been reviewed"* — which was the correct handling
and is why it is recorded here rather than in a commit message.

### And a correction to a figure this record's own coordinator relayed

`Convention:` is capped at **300**, not 200 — `check_facts.py` has
`MAX_LEN, MAX_LEN_QUALIFIED = 200, 300` with `QUALIFIED = {"Rule", "Convention"}`. A
message from the coordinator to a working agent stated 200. The agent read the constants
rather than trusting the brief and said so, which is the instruction working exactly as
intended: **the briefs are more defective than the corpus.**

### Measured: what the layer test costs and returns

One agent's pass over seven documents: **3,941 `<p>` elements, 1,787 containing an em
dash, 2,748 post-dash clauses**, filtered to **874 candidates**, of which it read all 274
facts-and-heading candidates and all 195 list tails unfiltered. Seven repairs.

Another, over a different seven: **479** post-dash clauses inside facts values, **56**
em-dash headings, **60** imperative-opening tails in Common Mistakes and Key Takeaways —
and separately **197 non-`Rule:` facts values carrying hazard vocabulary, regardless of
whether they contained a dash.** Six repairs. **The one that mattered came from the last
pass**, and it contains no dash:

```
Technique: Face the wall with the puck below your body and your back to the ice,
           so a defender can only come from one 180-degree arc
```

An instruction to put your back to the play at the boards, voiced alone, with the body's
counterweight — *"head up, chin off your chest, and know who is arriving before the puck
does"* — present in the body and absent from the block.

**Three of that agent's six repairs were not inversions at all but missing components** of
the boards prescription: a facts block with three of four, a Common Mistakes bullet with
two of four, a Check-yourself answer with two of four — each with all four present in the
body a line or two below.

### The Action-then-Never convention, measured for the first time

An agent left `defending_the_rush.md:365` — `Action: Ride them into the boards, your second
defender, until their options collapse to zero` — a bare imperative instructing boards
contact, no dash, voiced standalone. It left it because the block carries the counterweight
in the two facts after it, and closed by naming that as **the load-bearing assumption
nobody has measured**:

> *"Nothing here tests whether a counterweight in an adjacent `<p>` actually works on a
> listener. My decision to leave this rests on the assumption that it does."*

Measured on the rendered SSML. The instruction is **paragraph 8 of 22** in
`systems__defending_the_rush/019.ssml`, and the counterweights are **paragraphs 9 and 10**:

```
[8]  Action. Ride them into the boards, your second defender, until their options
     collapse to zero.
[9]  Rule. IIHF women's Rule 101.1 prohibits using the boards to eliminate an opponent
     from the play, push her into the boards, or pin her along the boards — pin the puck…
[10] Never — Ride an opponent into the boards in any non-check adult or youth league —
     the instruction above is for checking leagues only.
```

Same chunk, immediately consecutive, in that order. **The convention holds here**, and the
agent's decision to leave it was right. What is now established is the *method*: chunk
membership and paragraph index are both measurable, so "is the counterweight in earshot"
never has to be assumed again.

⚠️ **What this does NOT establish** is that adjacency always holds. It was measured at one
site. A block whose counterweight falls in the *next* chunk is a different case entirely,
and the same measurement would show it.

Note also paragraph 10's own shape: `Never — Ride an opponent into the boards … — the
instruction above is for checking leagues only`. The second dash introduces a **declarative
reason**, not an instruction, which is the permitted form. A sweep would have broken it.

### A prescription with no owner, found by the component census

Censusing the four boards components across seven documents found eight sites, seven of
them complete, and repaired the eighth. It also found one the census could not repair:

```
breakouts.md:824  Never: Put your back to the boards and wait because the arm is up
```

**Zero of four components**, in the delayed-offside section — whose whole point is that the
reader should *expect to be hit*. The body at `:833` carries `head up` and a pointer, and
nothing else. So a reader is told to expect contact at the boards and given no posture, and
the counterweight **is not extractable from the section**.

The agent declined to invent it, which is correct. But the formula is not invented anywhere
— it is **owned** by `body_contact_and_battles.md:607` and already restated by six
documents, so pulling the owner's words in is extraction, not authorship. Routed for
repair.

### A second multi-part prescription nobody has checked

The component census was run for the boards posture only. **Shot blocking has a multi-part
prescription too, and it is inconsistent between documents:**
`defensive_zone_coverage.md:472` reads `Technique: Block from close if you block at all —
ten feet from the shooter, square, shin pads to the puck, stick down beside you` and
carries **no head component**, nor does its body; `defending_the_rush.md:449` has
`Never: Go down with your head in the shot lane`. `special_teams.md` was separately found
instructing `block shots` bare, three times, with the technique four chunks away.

Whether shot blocking has a fixed component list the way the boards posture does is a
question for whoever owns `body_contact_and_battles.md`, and it has not been asked.

### Two more renderer defects, both found by agents and both corpus-wide

**An edition year eaten by the rule-citation rule — 104 occurrences.**

```
Rules 2026-27   ->  "Rules two hundred and two six - twenty-seven"
```

`rule-citation` matches `Rules?\s+(?P<major>\d{1,3})` and runs before `season-range`, so
the 1–3 digit major took the first three digits of a four-digit year and `season-range`
never got the chance. It landed on **edition and provenance markers** — the things a
listener needs in order to know which book is being described.

`(?!\d)` on the major fixes it. Verified against every citation form the corpus uses:
`Rule 630(a)`, `81.4`, `63.2(viii)`, `200`, `82.2(V)`, `9.12`, `101.1`, `Rules 41 and 42`
all unchanged.

⚠️ **The report that found it said the slash form `2026/27` was unaffected. It was not** —
it was hit too, and is fixed by the same change. Confirmed on a full render: **zero**
remaining. Six strings still read *"two hundred and two…"* and all six are correct — they
are genuine IIHF **Rule 202.x** citations.

**A journal citation voiced as a stopwatch.**

```
Canadian Journal of Neurological Sciences 11:34-41
  ->  "eleven minutes thirty-four seconds - forty-one"
```

In the middle of the corpus's spinal-injury citation. Longer page numbers escaped the clock
rule but leaked a raw colon instead — `Neurosurgery 34:590-597` came out as *"thirty-four :
five hundred and ninety to…"*.

**The discriminator is the range END, not the volume.** A real clock range writes both
halves as `M:SS` — which is exactly what the shift-length confidence intervals do
(`0:39-0:41`), so a naive "a dash after a colon means a citation" rule would have broken
them. A `clock-range` rule was added alongside, because those were separately reading as
*"zero minutes thirty-nine seconds — zero minutes forty-one seconds"* with a comma-length
pause where the word *"to"* belongs.

Deliberately **not** voiced as *"volume … pages …"*. That reading is almost certainly right,
but it is a claim about the citation's structure rather than something on the page.

`--self-test` across all four renderer fixes this round: 130 → **146 assertions, 0 failures**.

### A brief item refuted outright, and the refutation is the better finding

I asked an agent to fix `conditioning_and_recovery.md:194`, where 🇬🇧 expands to
`" For British readers, "` and the following bolded sentence keeps its capital, giving
*"For British readers, Those age lines are North American…"*.

**Refuted: letter case is not audible.** A capitalised word after a comma is prosodically
identical to a lowercase one; the comma-joined reading is grammatical in **all 54
occurrences** corpus-wide; and the renderer's own self-test asserts this output as intended.
Lowercasing in `content/` would degrade the printed page for no spoken gain. No edit made.

### A coordination error of the coordinator's own

`facts-reviewer` was dispatched onto `switching_positions.md` **while `safety-reviewer` held
it**, on the mistaken assumption that both passes were report-only. The facts pass edits.
Caught and corrected by telling the reviewer to re-read; no work was lost. **The disjoint-
ownership rule covers writes, and a reviewer that can write is a writer.**

### A Critical raised, measured, and found already closed — by the coordinator's own error

`safety-reviewer` reported a Critical at `switching_positions.md:108`: the boards
prohibition stated twice with **neither** component in the whole rendered chunk. It
measured chunk-by-chunk and reported `009 parallel=0 chin=0 prohibition=1`, the only chunk
in the document stating the prohibition naked.

**The finding was true when it read the file and false by the time it reported.** The
coordinator had dispatched `facts-reviewer` onto the same file, on the mistaken assumption
that both passes were report-only — the facts pass **edits**. Re-measured on a fresh render:

```
chunk 001  prohibition=1  parallel=1  chin=1
chunk 009  prohibition=1  parallel=1  chin=1   <- was 0/0
chunk 010  prohibition=1  parallel=1  chin=1
chunk 022  prohibition=2  parallel=1  chin=1
chunk 023  prohibition=1  parallel=1  chin=1
chunk 024  prohibition=2  parallel=1  chin=1
chunk 030  prohibition=1  parallel=1  chin=1
chunk 033  prohibition=1  parallel=1  chin=1
```

**Every chunk in the document that states the prohibition now carries both components.**
The reviewer's own text shows how stale its read was — it quoted the value from *two*
edits earlier, predating even the em-dash repair.

Three things are worth keeping out of this, and only one of them is the defect:

1. **The disjoint-ownership rule covers writes, and a reviewer that can write is a writer.**
   `facts-reviewer` and `safety-reviewer` are both "reviewers"; only one of them edits.
2. **The reviewer's method was sound and its measurement was right.** Nothing about the
   chunk-by-chunk component count needs revising — it is the best instrument this round
   produced, and it independently reached the same verdict `facts-reviewer` had reached by
   the same means an hour earlier.
3. **A Critical that has already been fixed must not be recorded as open.** The defect was
   real; it is closed; and the reason it looked open is a coordinator error, not a corpus
   defect.

### Shot blocking has no component list, and the absence is the finding

Asked directly whether `body_contact_and_battles.md` owns a component set for shot blocking
the way `:607` owns one for the boards. **It does not**, and none should be written.

The boards line is a single sentence framed explicitly as a set — *"In every case, and
non-negotiable:"* — and six documents restate it as one. §11 has no such sentence, no
*"in every case"*, no closed list: six prose points and fifteen facts across two sections
that split on *how* and *on when not to*. The nearest compression is Key Takeaway 10 —
*"Block shots close, on your feet, hands tucked, head out of the lane"* — which is not
labelled as a set and is not what any other document restates. **Propagating it as a
formula would be authoring.**

⚠️ **But the absence of a list is not the absence of an instruction**, and that half
matters more. One head component *is* individually owned and has full layer coverage:
facts `:1050` (`Position: Head up and out of the shot lane…`), `:1051`, `:1052`, body
`:1062`, Common Mistakes `:1250`, Key Takeaway `:1322`. So the right question for the sites
that instruct blocking is not *"are they short of the list"* but **"do they put a reader in
front of a puck without the one head instruction the owner does write?"**

On that, measured in the files: **`defensive_zone_coverage.md:472` is a real defect** — a
`Technique:` value naming where three body parts go and nothing about the head, whose body
twin does cross-reference the owner but only in the body, not in the layer voiced alone.
`defending_the_rush.md:449` and `center.md:510` are clean.

⚠️ **And the brief's claim about `special_teams.md` was refuted outright.** It does *not*
instruct `block shots` bare three times and has no bare standalone `Action:` fact — all
four shot-blocking facts carry qualifiers, and the file **disclaims ownership of the
technique in its own facts layer**: `Key: Body Contact and Battles and Defender own the
technique; this section adds only what is specific to the kill`. That is the ownership
convention working, not a gap. **The claim reached the brief through the coordinator from a
caption-layer pass and was never checked against the file.**

### The post-label class, vindicated by its worst instance

```
risk_management.md:562
Rule: Play the puck first and trip him in the process and it is a minor, not a penalty shot
```

Voiced: **"Rule. Play the puck first and trip him in the process…"** — a bare imperative,
alone in its own `<p>` with a 300 ms break either side, **instructing the reader to trip an
opponent**. No dash anywhere; no negation anywhere. Every scanner built for the first two
shapes was blind to it.

Recast declaratively, with the rule verified in primary text on both sides — NHL 57.3
*"If, in the opinion of the Referee, a player makes contact with the puck first and
subsequently trips the opponent in so doing, no penalty shot will be awarded, but a minor
penalty for tripping shall be assessed"*, and IIHF 24.8 word for word bar capitalisation,
so the fact's *"same words"* claim holds.

This is the instance that settles whether the post-label class was worth adjudicating.

### The reader-only table layer: audited, and the answer is negative

The census found 19 non-narrated tables. The question it could not answer was whether any
carried the **only** copy of a load-bearing safety fact. Audited across the documents that
hold them: **none does.** Each one's content is duplicated in a layer a listener reaches —
the risk map in its facts block, the overtime rules in theirs, the support-distance grid in
its facts block plus a narrated 🇬🇧 paragraph, the position grid in the narrated paragraph
beneath it. The xG grid is genuinely table-only and is a data reference grid, which is the
legitimate use.

Combined with the earlier probe on the penalty-test table — 36 of 39 cited tokens present
outside it — **the reader-only layer is a real gap in access and not a gap in safety.**

⚠️ **And a coordinator error inside the brief that produced this.** I told the agent *"two
of the 19 are yours"* and named two files. **Five were theirs** — I had already censused
`risk_management.md` as holding three and simply failed to carry them into the brief. The
agent re-ran the renderer rather than trusting me and corrected the count to
**7 narrated / 5 pointer** in its set. That is the third figure I have relayed wrongly this
round from data I had already measured correctly.

### Read and left, recorded so a sweep does not "fix" them

- **`playing_without_the_puck.md:282–283`** splits the boards prescription across **two**
  `Technique:` facts — parallel and forearm/hip in one, head up and chin off your chest in
  the other. All four are in the block. It is the only site in the corpus that splits it,
  and the style guide says to **split** a long value rather than trim it. Judged legitimate
  and left, named explicitly so a later reader can overrule it.
- **`time_and_space.md:158/170/574`** carries `head up` and `chin off your chest` but not
  `skates parallel` or `forearm and hip` — because it is the **puck-protection** posture
  (back to the play), not the **receiving-a-hit** posture. **A four-component sweep would
  have "fixed" this wrongly.** Hockey Canada 7.5(ii) was checked and does describe the
  posture: *"Where a player along the boards, with their head down looking for the puck or
  'digging the puck out,' is hit from behind and driven head-first into the boards"*.
- **`risk_management.md:390`** and **`:338`** — post-label imperatives naming the
  *qualified-safe* and *desirable* acts respectively. Left on the same ground as the
  faceoff instance.

### The brief's proposed fix was wrong, and measurement is what showed it

The bare-arrowhead brief recommended **starting each route at the glyph edge rather than the
anchor**, on the reasoning that this recovers the 3.5 ft hidden under the glyph and takes the
worst route from 2.14 ft of visible line to 5.64 ft.

**It recovers nothing.** The glyph is opaque and is painted *after* the routes, so the
visible line is `arc − glyph − arrowhead` whether the ink is drawn there or not. The brief's
"2.14 → 5.64" counts ink that sits underneath a filled circle.

What trimming *does* change is the **dash phase** — so the repair became a
`stroke-dashoffset`, which needs no de Casteljau split, no `wave`/`loops`/`zigzag` case
(those carry no `dash` at all), and leaves `len`, `mx`/`my`, `barHalf`, `dropTick`, `bars2`,
the `double` branch and the badge parameter untouched.

**Measured on the built SVGs: 50 of 59 pass routes now carry a phase correction, all begin
their first dash at the glyph edge, and last-dash-fused-to-the-arrowhead fell 37 → 30.**
`check-arrivals` reports 0 hard / 7 advisory before and after, and all 80 arrow-ended skater
routes still begin at 0.0000 ft from an anchor, so the ownership inference the checker
depends on is intact.

The alternative — aligning to the arrowhead base instead — was **tested rather than
argued**: on `pp-overload` route 1 it renders *nothing at all*, a genuinely bare arrowhead.
Start-alignment now has a measurement behind it rather than a preference.

#### Four more figures in that brief, corrected

1. **Glyph occlusion is 3.875 ft, not 3.5.** The halo is `stroke-width="1.95"` centred on
   `r=2.9`, so ink reaches 3.875; the 0.6 in the brief is the ring *outside the body
   outline*, not its outer edge. **Every visible-remainder figure in the brief is 0.375 ft
   too generous.** A defender's triangle is direction-dependent, 2.8–4.6 ft.
2. **`winger-dz-reverse` route 0 is 2.85 ft, not 3.53 — the THIRD worst, not the ninth.** It
   starts 0.60 ft *off* the `RW` anchor and still inside the glyph, so more is hidden, not
   less. The brief subtracted a flat 3.5 assuming an on-anchor start.
3. **"Zero dash, bare arrowhead" is not what renders.** No pass route in the corpus draws
   zero line: `pp-overload` r1 drew a 1.44 ft fragment and `support-distance-range` r0 a
   1.81 ft one, both **flush against the arrowhead base**, so they read as a *malformed
   arrowhead*. The defect is real; **the mechanism is fusion, not consumption.**
4. **The `W` census is 31 glyphs across 17 diagrams**, not 23 — though the 29 `F` / 2 `D`
   split the brief gave was right.

⚠️ **And the shortlist itself was the wrong instrument.** Ten routes was right as a list and
wrong as a threshold: all **59** pass routes were re-measured with a proper occlusion mask
**and dash phase**, which the brief ignored entirely.

#### Two routes deliberately left, with the reason

`pp-overload` r1 and `support-distance-range` r0 still render as one unbroken segment — the
`skate` mark. Both were left rather than reached with a finer dash pitch, because 2.4/1.8 is
already 9/6.75 px on a 375 px phone. In the second case **the 12.21 ft gap between the two
players *is* the diagram's subject**, so shortening the route would destroy what it teaches.
Its `describe` string had its promise of a *"dashed"* route dropped instead — it was
asserting a pattern that cannot render at 2.13 ft.

#### And two defects the agent caused and caught itself

Its first `pk-wedge-plus-1` edit used `*wedge*` — **the only asterisks in all 112 captions**,
which are plain text in every surface they reach (`<title>`, figcaption, the speech
pipeline). Its two edits to the same caption then duplicated a clause. Both found by reading
the final caption back rather than trusting the diff.

`pk-wedge-plus-1`'s prose was checked for a letter vocabulary and **has none** — *"the
wedge"*, *"wedge player"*, *"two defencemen"*, *"one forward"*, *"the +1"* — so the `W`
glyph was glossed in the caption rather than a `WD`/`WF` scheme being invented. Recording
the absence, because the next reviewer will ask the same question.

### The downed-player instruction: four sites, none of which summoned help

`team_play_and_culture.md` stated it four times — Overview, body, Common Mistakes, Key
Takeaway 1 — and **not one of them said to call for medical help.** All four said some
version of *"do not move them… wait for whoever is trained"*, and the document elsewhere
substituted *"wave for the bench and the officials"*, which is a rink convention, not a call
for help. **In a rec game there may be no trained person at the rink.**

The owner disagrees with all four: `body_contact_and_battles.md:679`, `:691` and `:1320` put
**"Call for immediate medical help" first**, and say *"nobody moves and somebody phones."*

**All four had to carry it**, and the reasoning is the layer argument rather than a
preference: the document has **zero ` ```facts ` blocks**, so the Overview bold lead and Key
Takeaway 1 *are* its entire extraction layer and are non-optional; the body is the source of
truth, and a Key Takeaway carrying an instruction the body omits inverts ownership; and
Common Mistakes read alone told a reader to kneel and wait with nobody sent for, which is the
defect verbatim. A fifth site was briefly created and **folded back in** — four statements of
one instruction is already the number.

⚠️ **A deletion, disclosed rather than buried.** *"Wait for whoever is trained"* was removed
from all four and is now **0 corpus-wide**. It is not a claim deleted for being unsourced —
it survives as *"one person stays with the player and keeps them still"* — but it was the
misleading half, because it presumes someone trained is present.

⚠️ **And a genuinely open question the agent raised and correctly did not answer.** Nothing in
either file establishes that *"call for immediate medical help"* is the right instruction
**for a British rec player**. The owner sources it to USA Hockey and CRT6; **no UK number, no
rink emergency-action plan, and no statement of who at a British club is expected to hold
first-aid cover** appears anywhere. That is a real gap and nothing was written into the
corpus either way.

### An operational trap: chunk indices go stale the moment a document is edited

`body_contact_and_battles.md` went from **105 to 107 chunks** — roughly 200 added characters
shifted every boundary after chunk 049.

**Every measurement in this record that cites a chunk number for that file must be re-run,
not reused.** The per-`<p>` chunk test is the best instrument this round produced, and this
is its half-life: it is exact at the moment it is taken and stale after the next edit to the
same document. The `<p>`-level finding survives; the chunk *number* does not.

### The chunk test's own false positives, in both directions

Recorded because the next reviewer will hit them:

- **False absence from a word-sense collision.** A first count of `chin` in one chunk returned
  1. The match was **`coaching`**. A word-sense check gives 0, which is what the original
  measurement said.
- **False absence from different wording.** Four chunks measure `not_back`/`not_duck` absent
  on a fixed-string regex. All four are false: the text says *"and never your back"* without
  *"to the wall"*, or *"back to the play"*, and for ducking it says **`chin off your chest`**
  — which *is* this corpus's anti-duck instruction, stated as a mechanism at `:593` as *"chin
  toward the chest"*. **Repairing these would have been a sweep.**

The general form, from the agent that ran it: *a site carrying the instruction in different
words reads as absent, and a site carrying it in the same words but meaning something else
reads as present.* Both happened in one run.

### The concurrent-edit contradiction scan: clean

CLAUDE.md requires checking for contradictions between agents after a parallel wave — two
agents once wrote individually-correct, mutually contradictory sentences into one block here.
Scanned all 37 documents for repeated and near-duplicate adjacent sentences.

**No clobbering and no contradiction found.** Everything the scan surfaced is legitimate,
and the categories are worth recording so the scan is not re-run as if it had failed:

- **Repeated boards prescriptions** across body, facts, Common Mistakes and Key Takeaways —
  that is the propagation convention working, and the round spent most of its effort
  *creating* these.
- **A negative existence claim repeated six times in `rules_primer.md`** — *"neither the NHL
  nor USA Hockey writes any crouching clause at all"*. Checked by layer: Overview, body ×2,
  the rule-set comparison table, Common Mistakes, Key Takeaways. **Six layers, not six
  accidents.**
- **Deliberate parallel constructions**, which a similarity test cannot tell from a
  duplication: *"Above the puck… / Below the puck…"*, *"Inside-edge circles / Outside-edge
  circles"*, *"If your shot arrives before they are set / after they are set"*. Each pair is
  a teaching contrast whose whole force is the near-identity.

The negative result is the finding: **nine concurrent agents across 37 documents produced no
detectable contradiction.** The disjoint-ownership rule held — with the one exception the
coordinator caused itself and corrected.

### A provenance scare that resolved in the corpus's favour — and the near-miss underneath it

Two agents relayed a USA Hockey definition to the coordinator as verified primary text:

> *"Competitive contact is body contact between two or more skaters who are in the immediate
> vicinity of the puck and who are in the normal process of playing the puck."*
> *"Competitive contact does not mean 'no contact.' There will be legal body contact within
> the rules in the Competitive Contact categories."*

A flattened search of `sources/usah.txt` could not find the first sentence, and found the
second **only in Appendix VI, Sled Hockey** — the disabled-hockey appendix, not the general
playing rules. The general Rule 604(c) Note words it differently: *"Competitive Contact
hockey does not mean 'no contact.'"*

**The corpus itself is clean.** `team_play_and_culture.md:462` quotes the **604(c) Note**
form correctly, and `body_contact_and_battles.md:77` quotes *"Non-check hockey does not mean
no contact and the Competitive Contact Category game can be very physical"*, which is also
present. No content document carries the appendix wording as though it were general.

⚠️ **The near-miss is the point.** Had anyone acted on either relay — added the caption
scope block a caption pass recommended, say — the corpus would have acquired **a
disabled-hockey appendix quotation presented as the general rule**. That is a provenance
defect no checker here can see: `check_facts.py` verifies a quoted string appears in the
document, not that it appears in the *part of the rulebook it is attributed to*.

The first sentence's absence turned out to be capitalisation: the book reads *"Competitive
Contact – competitive contact is body contact between two or more skaters…"*, so the
relay's capital `C` broke an otherwise exact match. **Substance sound, attribution not.**

### And a citation form that appears nowhere in the source it cites

`624(b)` returns **zero hits** in `sources/usah.txt`, and two agents quoted USA Hockey Rule
624(b)(1) with line numbers. Both were right. The book writes `Rule 624 Icing the Puck` as
a heading, then `(b)` on its own indented line 17 lines later, then `(1)` under that. The
citation form `624(b)(1)` is a **reconstruction of the book's structure** and never appears
contiguously in the extracted text.

**A future "every citation must appear in its source" check would flood with false
positives on this.** The quoted *text* is what can be verified — and it is: *"(For all
Youth 15-Only and above, Girls 16U and above, High School and Adult classifications only)
The offending team is short-handed"* is present, on a whitespace-flattened read.

Same class, found separately: `"even a light hit from behind"` returns **zero** against
`sources/huh.txt` raw and against `huh_layout.txt`, because it crosses a line wrap. It is
present; only a flattened read finds it, and `sources/ibc.txt:1570` carries it contiguously.

### `_label_lead` special-cases `Never`, which narrows the post-label class

Measured while sweeping shape 3: `_label_lead` renders `Never:` as `"Never — "`, **not**
`"Never. "`. So **the post-label imperative mechanism does not fire on `Never:` facts at
all** — the label's own dash governs the clause after it, which is the whole reason
`Never:` works. It fires on every **other** label: `Risk:`, `Rule:`, `Action:`, `Read:`,
`Technique:`, `Goal:`, `Priority:`, `Convention:`.

Several briefs this round told agents to sweep *"every label, not just `Risk:`"* without
knowing this. It is not wrong — it is wasted effort on `Never:` and the correct instruction
everywhere else — and the agent that measured it said so and narrowed its own search.

### The corpus was teaching a permission the current rulebook had deleted

Found by an agent that read the 2026-27 In-House Rules **end to end — all 736 lines** —
rather than grepping for what its brief named. It is not in the neck-protector family at
all; it was found because the agent was in the neighbourhood.

The **2025-26** edition's Rule 9.8 let a player whose helmet came off *"refit it at once if
safe to do so"*. **The 2026-27 edition deletes that clause**: the player *"must immediately
leave the ice"*, and failure to comply *"will be penalised, with a misconduct penalty, under
Rule 12 – Illegal Equipment."*

`equipment.md` still carried the refit option. **Direction: stricter** — a reader following
the corpus would have stayed on the ice and taken a misconduct.

Also new, same read: **In-House Rule 5.4 added neck laceration protection to the pre-warm-up
equipment check for 2026-27.** The corpus described that check as helmet fit and chin strap
only.

**Neither was in any brief.** The instruction that produced them was "read the book", not
"check these lines" — and this is the second time this round that reading an edition whole
found something a targeted grep could not have.

### A guard recorded so the next sweep does not undo the repair

⚠️ **The video-review bars legitimately say *"EIH or SIHA competition"*, identically in BOTH
editions, at 11 sites.** That is the source's own narrower wording for a different provision
— **not** the transplanted adoption list. A sweep that treated every `SIHA` in the corpus as
stale would corrupt eleven correct citations.

The same shape guards the rest of the family: `uk_rules.md`'s standing disclosure — *"Treat
every body name below as the name used in the document it is quoted from"* — exists because
**SIHA versus SIH is unresolved in the primary text**, and it is now load-bearing for a
dozen repairs.

### Scale of the family, once it was traced properly

The brief named a handful of sites. What agents found, each verifying before writing:

- `uk_rules.md` — the body was **already right**; the defect was a **propagation stop** at
  Common Mistakes and Key Takeaway 2, two hundred lines below a correct body. Plus two more
  sites the brief did not name.
- `rules_primer.md` — the stale adoption list made the **comparison table's column header** a
  second defect: a column describing a document covering four nations and university hockey
  was headed *"England Ice Hockey"*. Renamed *"Home Countries"*.
- `getting_started.md` — **six** sites, three of them outside the brief, including a cage
  requirement stated as universal that is an England-and-Wales rule.
- `equipment.md` — **eight** sites plus **four** stale source citations, where the brief named
  two.
- `goaltender.md` — the territorial under-reach, now naming Wales and Northern Ireland.

⚠️ **And one file's line numbers were stale by roughly one line throughout**, because an
earlier wave had already edited it. Every agent re-derived them rather than reporting a
miss.

### The IIHF half of the contrast: verified sound, and an edition deletion nobody had found

A plan row was opened on the ground that the **In-House** side of the neck-protector
contrast had been verified four times while the **IIHF** side was carried on trust. The
whole *"no warning"* contrast rests on IIHF 9.12 warning first, and nobody had grepped it.

**Verified, both editions, identical wording:**

> *"For all Players in all categories of IIHF Competition, it is mandatory to wear a neck
> laceration protector designed for this specific purpose, choosing a design that covers as
> much of the neck as possible… For violation of this rule, **after warning by the Referee,
> a minor penalty shall be imposed.** ➔ Rule 12 – Illegal Equipment."*

So the contrast the corpus draws in six documents — IIHF warns then gives a minor, the
In-House Rules give no warning and a 10-minute misconduct — **is correct**. Row closed.

⚠️ **But the two IIHF editions differ, and the difference lands on this exact rule.** The
2025/26 book (v1.0, v1.1) carries a sentence the **2026/27 book deletes entirely**:

> *"For violation of this rule in Junior Hockey ➔ Rule 102.7 – Women's Hockey Specific
> Equipment and ➔ Rule 202.7 – Men's Junior Hockey Specific Equipment."*

Measured: `PRESENT` in `iihf_rules_v1.0.txt`, `iihf_rules_v1.1.txt` and `iihf_rules.txt`;
`ABSENT` in `iihf_rules_2026-27.txt`. Rules 102.7 and 202.7 still exist — the
**cross-reference from 9.12** is what was removed.

**`uk_rules.md:129` is nonetheless correct as written**, and the reason is worth stating
because it is easy to "fix" wrongly: the In-House Rules adopt **"the latest IIHF Official
Rule Book (Version 1.1, published July 2025)"** *by name*. So v1.1 is the operative book for
a British reader, and the junior routing it describes is live for them. **A sweep that
updated the corpus to the 2026/27 book would break a claim that is currently right.**

What the corpus does not yet carry is that a reader consulting the **2026/27** book will not
find that routing. That is a disclosure to add, not a claim to change.

### Two negatives worth recording, both cheap and both clean

- An agent closed by suggesting *"one grep for `Scotland` near `27.7` across `content/`"*,
  worrying that `goaltender.md` might name Scotland and BUIHA without Northern Ireland. Run:
  **`goaltender.md` carries no trapezoid territorial claim at all**, and its neck-protector
  repair landed correctly — all four Home Countries named, plus an explicit
  *"University hockey is inside that mandate, not outside it"*. Unfounded, and now on record
  so nobody re-checks it.
- The Northern Ireland omission **was in three files, not one**. Aimed at `uk_rules.md:175`,
  it was found by the same agent in `rules_primer.md:751` and `getting_started.md:155` —
  *"the body and stopped" in reverse*: a fix aimed at one file while the identical sentence
  sat in two others it owned.

### The faceoff finding: the brief asked the wrong question, and the answer was better

I sent a `safety-reviewer` at `faceoffs.md:501` — *"Drive your body into your opponent as
the puck drops"* — asking whether it needed a **league-scope flag**, since the corpus flags
analogous contact instructions in at least three sibling places.

**It does not, and writing one would have been authoring a hazard.** The permission carries
**no classification limit in any of the four books**: NHL 76.7, IIHF 76.7, USA Hockey 613(e)
and Hockey Canada 6.2(c) each read *"no player facing-off shall make any physical contact
with his opponent's body… except in the course of playing the puck after the face-off has
been completed."* And USA Hockey licenses it positively — a faceoff is the paradigm case of
*"skaters in the immediate vicinity of the puck… in the normal process of playing the puck"*,
who are *"reasonably allowed to lean into each other"*, **encouraged in all age
classifications**.

**Two real defects surfaced instead, neither of which the brief asked about.**

**(a) The verb is the vocabulary of the offence.** Every book draws the line in the same
words — *lean into*, *push and lean into*, *simply maintaining established body position*,
*hold their ground*. The corpus wrote **"Drive your body into your opponent."** USA Hockey
604 Note 1 defines an illegal check as *"intentional physical contact with the opponent using
**overt hip, shoulder, forearm or torso action**"*, and IIHF 101.1 closes *"Any move by a
Player to step or glide into an opposing Player will be assessed at least a minor penalty
(2') for an 'illegal hit'."* The technique is legal; **the sentence describes it in the
language of the penalty.**

**(b) The moment is wrong, and one book defines the boundary expressly.** The instruction
says contact happens *"as the puck drops."* The rule it cites permits contact only *"after
the face-off has been completed."* `sources/hc.txt:4561-4564`, Hockey Canada 6.2:

> *"The face-off is considered complete when the puck has been legally and fairly dropped,
> meaning **the puck contacts the ice surface** before contacting the stick or any part of
> the body of the player taking the face-off."*

The NHL and IIHF say only *"The face-off ends when the puck has been legally dropped"* and
define nothing further; **USA Hockey defines it nowhere.** So under Hockey Canada, contact
made *as the puck drops* is contact **before completion** — a minor under 6.2(c) **plus
ejection of the centre from the draw** under 6.2(a).

The timing caveat was measured as sound in one respect: it shares a `<p>` with the
instruction, so it travels in audio. What travels with it is nothing about the verb.

⚠️ **`faceoffs.md` is 1,031 lines and mentions body checking, Competitive Contact, non-check
classifications and Rule 604 nowhere.** That is not a defect on this finding — but it is a
fact about the document worth holding.

### A fact authored past its section, running in the SAFE direction

`breakouts.md:710`'s facts value carries **all four** boards components. Its body sentence
carries **two**.

The instinct is to trim the fact to match the section. **That instinct is the danger**, and
it is why this is recorded rather than quietly fixed: a later agent running a
faithful-extraction pass has a **documented licence to delete the protective half of the
fact** because it is not in the section. That is precisely how a caveat gets trimmed by
someone doing the right thing.

**Fix by extending the body.** Five other sites in the same document carry all four in both
layers; `:710` is the single divergence.

### The speed condition: seven sites, where one was reported to me as unique

A repair-introduced defect I routed as a single instance — a boards prohibition acquiring the
condition *"when a checker is arriving at speed"* — turns out to be **seven sites**, six of
them in two documents nobody had swept for it.

⚠️ **And the reason it stays MAJOR rather than CRITICAL is the interesting half. Every one of
those sites quotes the walking-speed sentence correctly in nearby prose**, and one of them
reads it precisely: *"what occurs at walking speed is the **injury**, not merely the
contact."* **The document knows.** The defect is structural: the *prohibition* is scoped to a
speed condition its own source removes, and **the scoping is what survives into the facts
layer**, where the prose that corrects it is not in earshot.

So the repair is **not** to strip speed. Speed is a real aggravating factor and the sentence
that says so must survive. The repair is to make the prohibition unconditional **wherever it
is voiced alone**.

### "Nine words changed" — measured, and it is ONE token

An agent reported that the two editions' Rule 9.12 are *"byte-identical apart from the
competition list… nine words changed in this rule between editions, and they are the nine
that name which competitions it reaches."* The coordinator relayed that figure into two
further briefs. A third agent could not reproduce it.

Measured directly — Rule 9.12 extracted whole from both editions, whitespace-flattened,
diffed word by word:

```
lengths: superseded 594 chars, current 602
replace  superseded=['SIHA']  ->  current=['IHUK/EIH/SIH']
word-level similarity: 0.9899
```

**Exactly one token.** Everything else in Rule 9.12 — the mandate, the "cover as much of
the neck as possible" bullet, and all three enforcement bullets — is word-for-word
identical.

⚠️ **This is the third figure the coordinator has relayed wrongly this round from data it
either had or could have measured in one command** — after the reader-only table count
("two of the 19 are yours"; five were) and the bare-arrowhead occlusion figure (3.5 ft;
3.875 ft). In every case an agent re-derived rather than trusting, which is the instruction
working. **The pattern is not that the figures were hard to get. It is that relaying is
where they break.**

The conclusion the wrong figure supported is unchanged and is now stated more strongly than
before: **the two editions of this rule differ in the name of the competition list and in
nothing else whatsoever.**

### Line-number corrections accumulated this round, recorded once

Every one was found by an agent re-deriving rather than reporting a miss:

| Relayed | Actual |
|---|---|
| In-House 9.12 bullet `:274-281` | `:270-281` — the earlier range excluded the *"worn correctly, unaltered"* bullet the corpus quotes |
| *"overriding interpretation"* clause `:47-51` | `:50-52` |
| `eih_rr.txt:60-62` | `:61-63` |
| `eiha_inhouse_2026-27.txt:52-53` | `:53-54` |
| `equipment.md` sites, all seven | stale by ~1 line throughout, from an earlier wave |
| `switching_positions.md` value length 194 | 181 in tree, 185 in index — 194 belonged to a different fact in a different block with a different cap |
| `zone_entries.md:589`/`:596` | `:590`/`:597` after the agent's own edits |

**Line numbers in this project have a half-life of about one wave.** Every brief should say
so, and every agent should re-derive.

### ⚠️ The round may have PROPAGATED an overstatement, and the agent that did it said so

The boards prohibition has two limbs — **never duck** and **never turn your back to the
wall** — and one sentence is attached to both:

> **"No speed is slow enough to make either safe."**

This round propagated it into **five more places** than it previously occupied. The agent
that did the propagating raised the problem itself and stopped rather than resolve it:

> *"`huh.txt`'s walking-speed finding is about a **head-down, head-first** collision, and the
> turned-back limb rests only on `ibc.txt`'s **'could inflict'** — a possibility claim, not a
> floor. Whether 'no speed is slow enough' is the right strength for that half is a question
> I inherited rather than settled, and it now sits in five more places than it did."*

The distinction is exact. The *Heads Up Hockey* finding — *"almost all on-ice cervical spine
injuries have been due to the head being slightly flexed (head down) while making head-on
contact with the boards or goal post… it can occur at walking speed"* — describes a
**head-first** mechanism. A player turned **back-first** to the wall is a different one. And
*"could inflict a severe head or neck injury"* is a **possibility** claim; *"no speed is slow
enough to make either safe"* is a **universal** one. They are not the same proposition.

Sent to `rules-verifier` with the three acceptable outcomes stated, and one unacceptable one:
**deleting the warning.** Non-negotiable 3 — source it or label it. A reader who concluded
*"so a slow hit from behind is fine"* would be the worst outcome of the entire round, so the
corrective direction is toward **precision, not weakening**. If the ducking limb has a
measured floor and the turned-back limb a strong-but-weaker basis, that is *more* useful to a
reader than a flattened universal, and it can be written without softening either
prohibition.

**This is the round's own repair being attacked by the round.** Worth recording as the
clearest case yet of why a repair may not self-certify.

### The relayed census was short again, and wrong in three particulars

| Relayed | Actual |
|---|---|
| *"seven sites, six of them yours"* | **all seven** were in that agent's two files |
| the census itself | **short by one** — `winger.md:651`, Key Takeaway 6, the second-most exposed layer after a facts block |
| *"five sibling sites carry the sentence"* | **four**. `body_contact_and_battles.md` Key Takeaway 7 is unconditional and carries all four components, but does **not** carry that sentence — it carries the *evidence* instead |
| *"reportedly contiguous at `ibc.txt:1570`"* | **not contiguous.** It crosses a line wrap in `ibc.txt` too, so a raw grep returns zero in **both** files |

And the true census in one document was **9 prohibition sites, not 6** — with **two already
unconditional** and correctly left, and two more in the *defender-retrieval* sense, which is
the other posture and correctly carries neither skates-parallel nor forearm-and-hip.

⚠️ **A cap finding that could not be repaired, reported rather than trimmed:** one
`Priority:` value was at **198 of 200**. Converging it on the full sibling verb phrasing
would have been 210, so the agent took the terser sibling tail instead (191). A second value
at 181 **cannot** take the counterweight sentence — it would reach 225 — but is already
unconditional, so nothing was owed. **Neither was trimmed to fit.**

### The open question is wider than the trapezoid — it reaches three EIH instruments

The unresolved clause is `sources/eiha_inhouse_2026-27.txt:36-41`: EIH and SIH policies
*"are now policies of IHUK and will continue to apply to all Clubs and Teams."*

It was opened over **England Ice Hockey R&R 22.3**, the trapezoid suspension. An agent
working the equipment family noticed it reaches further:

> *"The same clause that makes the trapezoid's scope an open question makes R&R 24.3's and
> 24.5's scope open too. I scoped them to EIH's own stated remit (R&R 1.1) because that is
> what is published; if IHUK has absorbed them, my Key Takeaway edit is now the **narrow**
> reading and Scottish and Northern Irish readers may in fact be under the practice mandate
> as well."*

So the question now covers **three** England Ice Hockey instruments:

| Instrument | What it does | If IHUK absorbed it |
|---|---|---|
| **R&R 22.3** | suspends the goaltender restricted area | the suspension reaches all four nations — **laxer** |
| **R&R 24.3** | extends neck protection to *"all on ice activities"*, i.e. practice | the practice mandate reaches all four nations — **stricter** |
| **R&R 24.5** | mandates a face cage in junior hockey | the cage mandate reaches all four nations — **stricter** |

⚠️ **The directions differ, which is exactly why none of them may be guessed.** For the
trapezoid the permissive resolution is the *laxer* one, so the conservative instruction
holds. For the two equipment rules the permissive resolution is the *stricter* one — so
scoping them to England and Wales, which is what is published, is the **narrow** reading and
may under-protect a Scottish or Northern Irish reader.

**Written to what is published in every case, and the gap recorded rather than closed.** No
IHUK Rule Bulletin has ever been obtained, and the R&R on disk is the **pre-merger 2024-25**
edition. That single missing document would settle all three.

### The layer test earned its keep again: a Key Takeaway 650 lines below a correct body

`rink_map_and_glossary.md`'s body carried the **current** In-House edition at three separate
places. Its **Key Takeaway 8**, six hundred and fifty lines below, still read *"which EIH and
SIHA fixtures are authorised to be played on"* — the superseded 2025-26 scope line, verbatim.

This is the third time this round the same shape has appeared — `uk_rules.md`'s Common
Mistakes and Key Takeaway two hundred lines under a correct body, `rules_primer.md`'s line
747 under its own note recording the current edition, and now this. **A document being right
is not evidence that its summary is.**

### "These two remain" — and there were six, in the two files I named

I briefed an agent that two known sites remained in the adoption-list family and that these
were the last. Within its **own two files** there were **six**, including the Key Takeaway
above and two England-Ice-Hockey-territory sites my map did not have — one of which told a
Welsh parent that face cages were not mandatory in junior hockey.

Its own conclusion is the one to carry forward: *"If the same ratio holds elsewhere, the
family is not as close to closed as the brief believes."*

⚠️ **Every wave this round has found the previous wave's census short.** Ten pass routes were
nine, then fifty-nine measured. Seven speed sites were nine. Two remaining sites were six.
**The pattern is not that any one count was careless — it is that a census taken from a
brief is a census of the brief.**

### Five corrections to one brief, and one of them was a rule attributed to the wrong book

The faceoff brief relayed a `safety-reviewer`'s findings. The repairing agent checked them
against the books rather than acting, and returned five corrections — the first is the
coordinator's own error and the most serious:

**1 · The ejection was attributed to the wrong book.** The brief said contact as the puck
drops is *"a minor under Hockey Canada 6.2(c) plus ejection of the centre from the draw under
6.2(a)."* **6.2(a)'s ejection is triggered by *"a player, other than the player taking the
face-off"*** who makes contact or encroaches. A **taker's own** contact is 6.2(c), a minor,
with no ejection stated. The centre-replaced consequence for pre-drop contact is
**NHL/IIHF 76.7** — *"the Linesperson shall order the center of the offending team
replaced."* Written to the right book.

**2 · "Each of the four books says…" hid three differences.** NHL and IIHF match; **USA
Hockey 613(e) is framed as a mandatory minor for interference**; Hockey Canada 6.2(c) adds
*"by means of their own body or by their stick"*. And **the NHL and IIHF minor is
discretionary** — *"may, at his discretion impose a minor"*. The flat *"each"* framing
concealed that.

**3 · *"USA Hockey defines it nowhere"* was too strong, and dangerously so.** USA Hockey's
Glossary **does** define when a face-off *commences*: *"The face-off commences with the
dropping of the puck."* It never defines **completion** — but a reader could take
*"commences with the dropping"* as settling the boundary at the drop, which is the opposite
of what Hockey Canada's completion definition establishes. The distinction was written out
explicitly rather than left to inference.

**4 · The owner's shot-blocking coverage is three layers, not four.**
`body_contact_and_battles.md:1250` is **not** a head-in-lane entry — it reads *"Turning
sideways or lifting a leg to block."* **The owner has no Common Mistakes entry naming the
head or the lane at all.** Coverage is facts + body + Key Takeaway 10.

**5 ·** A quoted line was cited short, missing its consequence clause.

⚠️ **Item 1 is the one to keep.** A rule attributed to the wrong subsection is exactly the
defect this corpus exists to prevent, and it was in a brief written by the coordinator, from
a report by a reviewer that had itself read the primary text. **Two careful passes and it
still needed a third to catch.**

### And the repair caught itself breaching a non-negotiable

The same agent's draft cross-reference read *"…which owns the technique"*. **That is project
vocabulary in `content/`** — non-negotiable 6, the corpus narrating itself. It caught it and
rewrote to reader-facing prose: *"for the rest of what to protect, and for when not to block
at all."*

### The shot-blocking census, completed

| Document | State |
|---|---|
| `winger.md` | `head out of the lane` in facts **and** body |
| `center.md` | same |
| `defensive_zone_coverage.md` | was missing it — **repaired**, and the cue is now inside the same sentence at both voiced sites, not merely the same chunk |
| `goaltender.md:923`/`:937` | **nothing** — no head cue, no hands cue, no cross-reference |

The last is weaker than the repaired case because it gives no **orientation** — it does not
tell a reader to square up or present the pads. It is also the one place where the question
is genuinely different: **a goaltender blocking a shot is not a skater blocking a shot**, and
*"get out of the lane entirely"* means something else for someone whose job is to be in it.
Routed with instructions to check what the value actually instructs, and to invent nothing
if the sources do not settle a goaltender's cue.

---

## The round's sharpest finding: the corpus disclosed it, and the round propagated past it

The verdict on *"No speed is slow enough to make either safe"*, settled against primary text:

**The ducking limb is confirmed at full strength.** `sources/huh.txt:225-231` — *"almost all
on-ice cervical spine injuries have been due to the head being slightly flexed (head down)
while making **head-on contact** with the boards or goal post… A player doesn't have to be
going at full speed for this to happen — **it can occur at walking speed**."* The source ties
it to the ducking rule **in the very next sentence**: *"So that's the basis for Rule One of
Heads Up Hockey: Heads Up — Don't Duck!"*

**The turned-back limb is not.** The strongest text on disk is *"Even a light hit from behind
**could inflict** a severe head or neck injury."* Two gaps, not one:

- **Modality** — *"could inflict"* is existential; *"no speed is slow enough"* is a universal
  negative about safety. The first cannot carry the second.
- **Addressee** — both passages instruct the **checker**: *"they must not hit another player
  from behind, ever."* Neither says anything about the player who turns.

### ⚠️ And the corpus already knew. It says so, in the owner document's Sources note

`body_contact_and_battles.md:1330`:

> *"**Note the division of labour between the two quotes:** the walking-speed finding is USA
> Hockey's statement about 'the head being slightly flexed (head down) while making head-on
> contact with the boards or goal post' — a head-down, head-first collision — and the guide
> does **not** attach it to a player turning their back."*

**The owner document states the exact distinction, correctly, and scopes its own three
occurrences to the ducking limb. The propagation into four other documents did precisely
what that note forbids.**

This is the strongest single argument in the round for the whole method. The corpus's
integrity machinery worked — someone wrote the disclosure, and it survived. What failed is
that a later pass propagated a convenient flattened form **past a note written to prevent
it**, and every mechanical gate passed, because a flattened universal and a scoped one are
the same shape to a checker.

### Two pieces of evidence that cut against the universal, and must not be read as softening

**Two books draw an explicit low-force floor for contact from behind at the boards.**
Hockey Canada 7.5(a) Interpretation 3, `hc.txt:6198-6205`: *"Pinning a player to the boards
at low speed and with minimal impact is permitted, even if contact is initiated from
behind."* And the USA Hockey Casebook grades *"minimal body contact from behind"* as a minor
plus misconduct rather than a major.

**And USA Hockey teaches a survival technique for exactly this position.**
`ibc.txt:668-681`, *"Contact Confidence"*: *"If checked while facing the boards, distribute
the force of the impact over as wide a surface as possible, including putting your stick and
gloves on the glass to cushion the blow."*

⚠️ **A book that regarded that position as unsurvivable at any speed would not print a
technique for surviving it.** That is the cleanest evidence available, and it is a *fallback
the propagated copies all omit* — a listener hearing a standalone facts line while already
turned to the boards is currently told only what **not** to do.

⚠️ **None of this weakens the prohibition and none of it may be read as doing so.** The
rulebook evidence is about **what gets penalised**; the injury evidence is about **what
hurts**. The corrective direction is toward precision. *A reader who concludes "so a slow hit
from behind is fine" would be the worst outcome of this entire round.*

### Blast radius, and the one site a sweep would have broken

**14 occurrences of the universal form across 4 documents** — the brief named three; a fourth
was missing. **Seven are voiced standalone**, in a ` ```facts ` block or a Key Takeaway.

**Four occurrences are correctly scoped and must be left**, three in the owner and one that a
phrase-sweep would certainly have "fixed" into a defect: `winger.md:589` reads *"**Ducking**
tucks your chin to your chest, and no speed is slow enough to make **it** safe"* — **ducking
only, which is exactly what the evidence supports.**

### And a grep trap worth more than the finding that produced it

⚠️ **`grep -o` with a wide context window against a flattened single-line file returned ZERO
for text that was present.** Python `re.finditer` over the same file found it immediately.

This round has now recorded four ways a grep lies about a source: hyphenation joins across
line breaks; form feeds that make `splitlines()` and `sed` disagree by 137 lines; a citation
form (`624(b)(1)`) that never appears contiguously because the book prints the subsection
seventeen lines below its heading; and now a context window silently truncating a match on a
long line. **Every one of them produced, or nearly produced, a false absence — and a false
absence is how a negative existence claim gets written.**

### The goaltender shot-block question resolved itself, out of the document

The last of the four shot-blocking sites was routed with a genuine open question: **a
goaltender blocking a shot is not a skater blocking a shot**, and *"get out of the lane
entirely"* means something else for someone whose job is to be in it. The brief said to
invent nothing if the sources did not settle it.

**The document settled it.** The section body states outright: *"This section is written for
the other five players."* Every sibling value in the block is skater-addressed. So the
skater cue was the right cue, and no goaltending source was needed.

And the reading **strengthened** the repair rather than merely permitting it. Read standalone
in its own `<p>`, *"Get to the shooter and block from close"* was **ambiguous about who was
being addressed** — a goaltender challenging a shooter also "gets to the shooter". *"Head up
and out of the shot lane"* is unmistakably a skater's instruction, so the cue **disambiguates
the value as well as protecting the reader.**

⚠️ **And it established why the owner document is right to lack the same cue.** The owner's
own screening-case `Never:` carries no head cue either — correctly, because the cue sits in
its sibling *Shot Blocking: Technique* block inside the same section. `goaltender.md` has no
sibling technique block; that value is the **only** shot-blocking instruction in the whole
document's facts layer, confirmed by extracting every ` ```facts ` value and reading the 24
that matched `block|lane|screen`.

**A second candidate in the same block was deliberately left**, and the reason is the one
this round keeps having to relearn: the 2-on-1 timed slide carries no head cue where five
sibling sites do — but it appears only inside an **exception clause** (*"unless the timed
slide is your team's system"*), not as an affirmative instruction to close into the puck's
path. Materially different shape; **it deserves its own judgement rather than a sweep.**

The block is at **exactly `MAX_COACHING_FACTS`** — 10 facts, 2 `Rule:`, 8 coaching — so no
fact could be added and the repair had to be an in-place amendment. If the second candidate
is ever actioned, the same constraint binds.

---

## The site review: the blind test settled the question the measurements could not

Every earlier judgement about the short `pass` routes was made by someone who already knew
the route was there. One agent said so in terms: *"I knew the route existed before I looked
at it, which is the worst possible position from which to judge legibility."*

The site review did the honest version — viewed the rendered PNGs downscaled to phone
content width and **said what each line meant before reading any caption**. On the two
flagged routes:

> *"a short solid arrow from C down into S — C skates to S."*

**That is the `skate` notation.** The failure mode is not illegibility. It is **the wrong
symbol**, identical in both themes at both widths — and `support-distance-range`'s own
`<desc>` promises *"a short dashed passing route"*.

⚠️ **And it carries a safety edge nobody had spotted.** On that diagram the arrowhead points
*into* the receiver's glyph with nothing behind it, which is exactly the skater-arrival
mark. A reader taking it literally learns *"the support player skates at the carrier"* —
**the opposite of the document's point.**

The full measurement across all 59 pass routes: **2 under one dash cycle** (broken), **2 in
the 2.4–4.2 ft band** (one dash plus a detached head — read correctly in the blind test, so
Minor), **41 at three cycles or more** (unambiguous). So *"two routes deliberately left"* was
right about which two are broken and **undercounted the thin population by two**.

### Three defects nobody had looked for, because nobody had opened the site

**Two rink maps have no accessible name at all.** `rink-map-full` and `rink-map-end-zone` are
`<svg role="img">` with no `<title>`, no `<desc>`, no `aria-label` — **and their
`<figcaption>` is `aria-hidden="true"`.** A screen-reader user gets an unlabelled graphic and
then a caption deliberately hidden from them, on the corpus's **foundational vocabulary
map**. The `caption` and `describe` strings exist in the spec; `build-diagrams.mjs` simply
never passes them and `rinkSvg` never emits them. `playSvg` already does it correctly.

**`.diagram-scroll` scrolls silently and cannot be reached by keyboard** — 38 figures across
13 pages, 54% of the diagram visible at 375 px. The sibling `.table-scroll` already has
`tabindex="0"`, `role="region"`, an `aria-label` and four scroll-shadow gradients. The
pattern exists; the diagram container never got it.

**103 of 110 captions are taller than their own diagram at 375 px.** `forecheck-pinch` is
1,059 px of caption against a 296 px picture — **3.57×** — and four captions exceed a whole
812 px viewport. At 1440 the same caption is 0.67× and perfectly fine. ⚠️ **The captions are
good and several were extended this round for sound safety reasons; the fix is CSS, and no
caption may be shortened.** A reader on a phone currently scrolls a 296 px picture, then
1.3 screens of prose about it, and the picture is gone before the sentence describing it
arrives.

### A hypothesis of mine, refuted with evidence

I briefed the reviewer that a white halo punched under every player outline would be a
**dark-theme defect**, since it assumes a white ground.

**Refuted.** Every diagram paints its own ice as an unconditional `<rect fill="#ffffff">`, so
in dark mode the rink is still a white slab and the halo matches its ground exactly. The
arrowhead clipping it does cause is **theme-independent and width-independent** — and the
census is **four** diagrams, not the three an earlier agent had noticed in passing.

### What passed, and one retraction the reviewer made against itself

Facts blocks, ⚠️ callouts (four independent cues, none colour-alone), wide-table scroll
containment, the theme toggle exercised with real clicks and surviving navigation, focus
rings, landmarks, 320 px reflow, routing, anchor `scroll-margin-top`, search, and **zero
console errors and zero off-origin requests** across five pages with full capture — no
analytics, no CDN, no fonts, no telemetry.

**Contrast: zero failures in both themes.** The reviewer's first pass reported two light-mode
hits **and it retracted them** — its own parser mishandling `color(srgb 1 1 1 / 0.92)`, not
the site. Recorded because a retracted false positive is worth as much here as a finding.

### One irreproducible observation, recorded rather than dropped

Once, clicking "Contents" at 375 px about 2.2 s after load left the reader on a blank
screen — `scrollY 121,211` with the nav still 1,770 px below the fold. Three further runs at
1.8 s and 8 s landed correctly. It is an in-page anchor into a **124,996 px** document, so an
offset computed against a still-growing layout lands short.

**Kept because a warm localhost is the friendliest possible case for that race, and a real
phone on a cold cache is the worst.**

### The disclosure was in THREE documents, and the round propagated past all three

The owner document's Sources note was already recorded here as the sharpest finding of the
round. It is sharper than that: **`puck_handling.md` and `switching_positions.md` each
carried their own verbatim division-of-labour note** — *"the walking-speed finding is about a
head-down, head-first collision, and USA Hockey does not say it about turning your back"* —
**while their bodies and facts blocks contradicted it four and two lines up.**
`switching_positions.md`'s Common Mistakes entry was already correct too.

So the corpus disclosed the distinction in **three** documents and contradicted it in the
same two of them. The round then propagated the flattened form further. **Every mechanical
gate passed throughout, because a flattened universal and a scoped one are the same shape to
a checker.**

### A 15th site the phrase-grep could not see, and a 16th outside `content/`

**Phrased so no grep finds it:** `switching_positions.md:277` read *"there is no version of
the situation in which either becomes safe"* — the same universal negative over both limbs,
containing none of the words a census would search for. Repaired to *"…in which either is
the right thing to do"* — the same absoluteness, but a **normative** claim rather than an
unsupported physics universal.

⚠️ **That instance is the proof that the phrase census was the wrong instrument.** Its finder
said so: *"my `switching_positions.md:277` find proves the phrase-grep census misses
instances"*, and that **a census of the prohibition rather than the phrase has never been run
across all 37 documents.**

**And outside `content/` entirely:** the diagram caption for `support-a-battle-from-outside`
still ends *"…and no speed is slow enough to make turning your back, or ducking, safe."* It
lives in three generated artefacts and is voiced as its own standalone `<p>`. Routed.

### ⚠️ A constants correction: `Convention:` is NOT exempt from the coaching cap

Several briefs this round told agents that `Rule:` and `Convention:` are both "qualified".
That is true of **length** and false of **count**. Verified in `check_facts.py`:

```
MIN_FACTS, MAX_COACHING_FACTS, HARD_MAX = 3, 8, 11
MAX_LEN, MAX_LEN_QUALIFIED = 200, 300
QUALIFIED = {"Rule", "Convention"}
...
coaching = len(body) - rules          # everything that is not Rule:
elif coaching > MAX_COACHING_FACTS:
    f"{where}: {coaching} non-rule facts, over {MAX_COACHING_FACTS}"
```

**`QUALIFIED` governs only `MAX_LEN_QUALIFIED`.** The count exemption is `Rule:` **alone** —
a `Convention:` fact gets 300 characters and still counts against the 8.

An agent hit this in practice: a block reading as 7 coaching facts was effectively 8/8, its
first repair added a second fact, and the checker failed at **9 non-rule facts**. It caught
and reverted rather than trimming a hedge to fit.

### Two omissions deliberately NOT propagated, and the reasoning is the standard

The scoping repair left two additions on the table:

- **Hockey Canada's ducking penalty** (Rule 8.7 via 7.7(a) Interpretation 3) — scoped to
  **Junior and Senior divisions only**, and *"may assess"*, not shall. Fitting the scope into
  a `Rule:` fact consumes most of 300 characters, and no block had room without displacing
  something.
- **The NHL/IIHF intentional-turn carve-out** (43.1) — owner-only, lowest severity, no room.

⚠️ **Both were left rather than copied in partial form, and that is the right call.** A
scoped rule copied without its scope is the **half-rule** failure mode this corpus has been
bitten by repeatedly. The owner carries both in full; a truncated copy in four documents
would be worse than a pointer.

---

## The corpus-wide sweep, and a fifth way a grep lies

The stock *Check yourself* preamble was byte-identical in **36 of 37 documents**:

> *"Answer each question before you go on — a real attempt, not a guess — then go and check…"*

The negation *"not a guess"* sits immediately before the second em dash with an **instruction**
after it, so a listener carries the negation across and is told **not to go and check** — the
one thing the exercise exists to make them do. The first dash is correct: it introduces an
**appositive**, not an instruction.

Repaired to a full stop in **one edit across all 36**, after every agent had finished and no
file was held. Verified through the renderer beforehand: both forms pass through unchanged
apart from the punctuation, so the full stop is the whole of the change.

⚠️ **And the first attempt matched nothing.** The pattern assumed one line; the source is
**hard-wrapped** — `— then go\nand check,`. A grep for the sentence as it reads returns
**zero files**, while a grep for its first half returns all 36.

That is the **fifth** way a grep lied about a source this round, and the first one that lied
about the corpus rather than a rulebook:

1. hyphenation joins across line breaks
2. form feeds, making `splitlines()` and `sed` disagree by over a hundred lines
3. a citation form (`624(b)(1)`) that never appears contiguously
4. `grep -o` with a wide context window silently truncating a match on a long line
5. **hard-wrapped prose in `content/` itself**

**A census run against a sentence as it reads is a census of the sentence as it reads.**

⚠️ Also confirmed before the sweep: a scan of every line appearing in **three or more**
documents that carries an em dash with a negation before it and an imperative after it
returns **exactly one hit** — this one. **The sweep was bounded and complete.**

## Closing state

```
37 documents · 8 sections · 799,031 words · 60.5 hours at 220 wpm
```

Up from 793,642 words and 60.1 hours at the round's start.

`check_links` · `check_facts` · `check_absolutes` · `check_geometry` · `check_secrets` — all
pass on a quiet tree with every agent finished. `md_to_speech.py --self-test`: **130 → 146
assertions, 0 failures**, across four renderer defects fixed this round.

---

## `commit-gate` BLOCKED, and it was right on all four counts

The round's own record was handed to the gate as evidence and as **findings against the
diff**. It blocked, and none of the four was arguable.

### The blocking defect: a rule pointing toward a lost goal

`passing_and_receiving.md` stated the kicked-puck rule **NHL-only**, in a ` ```facts ` block
**this very commit edited**:

```
Rule: A kicked puck that deflects into the net off any body is no goal; off your own
      stick it counts (NHL Rule 49.2)
```

Hockey Canada 6.10(b) says the opposite — *"Kicking the puck cannot result in a goal, unless
a defending player kicks the puck into their own goal… This includes when an attacking
player kicks the puck and it deflects off any other player or object"* — and USA Hockey's
Casebook answers this document's exact fact pattern *"No. Rule Reference 627(c)."*

**Two sibling documents got the four-book treatment in this same commit and the third did
not.** Sharper still: **the hand-pass fact two lines below it, in the same hunk, gained a
full four-book treatment** while the kicked-puck fact beside it kept one book.

A body-level `Rules note (NHL):` sits below the block. **That is not sufficient — the block
is what a listener hears alone**, which is why it blocked rather than merely being noted. The
reviewer that first found it called it *"the only one whose direction is toward a lost goal
rather than extra caution."*

Repaired to the four-book scope, all six citations re-verified in primary text by the
repairing agent rather than carried from the brief.

### And the repair found a defect nobody had named

**This commit added USA Hockey 618(b), Hockey Canada 10.2(a)(i) and IIHF 79.2 to the body of
`passing_and_receiving.md` and added none of those three books to its Sources block.** The
document cited four rulebooks and listed one. Fixed.

⚠️ **Plus a render defect the commit had already made latent.** The expanded body paragraph
crossed `MAX_BILLED_CHARS` (2800) and `md_to_speech.py` split it **mid-sentence** — one chunk
ended on the bare word *"IIHF"* and the next opened *" seventy-nine point two is…"*. The
hand-pass expansion in this commit created it; the kicked-puck repair would have worsened it.
**Splitting the paragraph fixed it — and no checker in this repository can see it.**

### DECIDED: expanding an abbreviation inside a quotation is correct, not corruption

The repairing agent worked around `md_to_speech.py` rendering *"etc."* as *"and so on"*
**inside quoted rulebook text**. Censused: **38 quoted strings across 17 documents** contain
`etc.`, `i.e.` or `e.g.`.

**Adjudicated: not a defect, and nobody should sweep those 38.** Speech has no way to render
an abbreviation *as* an abbreviation — a reader quoting *"e.g."* aloud says *"for example"*,
and that is the faithful reading, not an alteration. A listener cannot hear the difference
between an abbreviation point and a full stop either way.

⚠️ **What was checked before deciding**, because the workaround ran in the dangerous
direction: whether any **existing corpus quotation** had been shortened to accommodate the
renderer. It had not — all four quoted spans the diff moved survive verbatim, and `etc.`
appears in neither file at all. The workaround was to the agent's own new draft.

### The three procedural blocks, all sound

- **C7/D8** — the style guide claimed *"ten separate agents caught themselves"* and
  *"eighteen instances"*. The owners support neither: round 52 measures **seventeen** sites,
  round 53's §*"Agents that caught themselves"* lists **four** bullets. ⚠️ **The plan carried
  this as an open row, staged and unclosed, saying "reconcile before commit"** — in the round
  whose own D8 row says the failure was *"committed by this round in the two files that
  define it."* **Fixed by deleting the arithmetic, not correcting it**: both sentences now
  point at the owning records, and a matching comparison in `CLAUDE.md` went the same way.
- **C4/C6** — ten changed documents named by no reviewer, four of them carrying **75, 21, 18
  and 17** rule-, penalty- or injury-bearing added lines. The record admitted this itself and
  nothing closed it.
- **C11** — the facts layer was cleared at **4,904** facts against a tree measuring more (re-run `check_facts.py`; the figure moved four times while this record was being written).
  Twenty-two went in **after** the clearance, as new claim text rather than repairs the
  clearance covers.

**And the gate shipped a false statement in the plan back at me**: the handover still read
*"Staged: a stale shape of the corpus commit… everything since is unstaged"* after I had
staged everything. A plan that describes its own state wrongly is worse than one that says
nothing.

---

## A renderer defect where two docstrings promised what the code did not do

`split_oversized`'s docstring promised *"a sentence is never cut in half"*.
`_split_paragraph`'s promised *"A single sentence longer than the limit is left whole."*
**Both were false**, and an agent isolated the mechanism precisely rather than reporting a
symptom:

> The rule-citation rewriter emits **each verbalised citation as its own token**, which cuts
> the prose around it into separate tokens. `_split_paragraph` set `breakable = (depth == 0)`
> — a **nesting** test — so a token opening mid-clause was a legal break point.
> `RE_SENTENCE_END`, applied *within* each token, structurally could not see that one token
> continues the previous one's sentence.

**Any paragraph containing a rule citation was exposed, which is most of this corpus's rule
prose.** One chunk ended `…though nine point five, clause a` and the next opened
`, the only clause that actually assesses one, requires contact…`.

**Fixed**: a break now requires `depth == 0` **and** that the previous atom ended a sentence.

### Measured, before and after, corpus-wide

```
BEFORE   40 confirmed mid-sentence chunk splits
AFTER     2
```

Counting only tails without terminal punctuation whose **next chunk opens lowercase or on a
comma** — colons introducing a list are legitimate and were excluded.

⚠️ **The two survivors were verified, not assumed.** A first patch made the rule absolute and
**the self-test caught it**: a regression guard that deliberately feeds a 200-unit run-on with
no sentence boundary anywhere reported *"split regression is vacuous: nothing split"*. That
test exists to prove splitting never orphans a `<say-as>`, and it needs splits to happen.

So the rule needed a **fallback**: retry on the nesting test alone when no sentence-boundary
split is possible. Prose always has sentence boundaries; a wall of markup does not, and
**exceeding the synthesis API's limit is worse than splitting mid-clause**. Instrumented to
confirm rather than infer: **the fallback fires exactly once in each of the two documents that
still show a split** — so both survivors are the designed branch, not a gap.

`--self-test`: **146 assertions, 0 failures**, before and after.

### The measurement that motivated it, and what it does NOT fix

This came out of a separate finding: **33 of 146 facts blocks — 23% — are split across a
chunk boundary**, which undercuts the premise every "is the counterweight in earshot?"
measurement this round rested on.

⚠️ **This fix does not close that.** It stops a *sentence* being cut; it does not stop a
*block* being split, and the obvious rule for that is unsatisfiable — **17 of 794 blocks
alone exceed `MAX_BILLED_CHARS`** (largest 4,196 spoken characters). The durable answer is
the one the boards repairs were already converging on: **a value that is self-sufficient as a
paragraph.**

## The brief I wrote for the one confirmed split was wrong in four ways

And the agent caught the most important one **by reading from disk, as instructed**:

⚠️ **I quoted the sibling wording as a single flattened value attributing the walking-speed
claim to BOTH limbs** — *"Turn your back to the wall, or duck to avoid a check. No speed is
slow enough to make either safe…"*. That is **precisely the over-attribution this round
scoped back in fourteen places**, reintroduced by me into a brief whose own body warned
against it. On disk the sites are **two separate values, one per limb, correctly attributed.**

Also: the line numbers named the wrong lines (the sites are pairs — `:15`+`:16`, `:335`+`:336`
— not three single values); I said `git diff` carried the round's boards work when it carried
one unrelated line, because that work is in `git diff --cached`; and **I asserted the split
route was closed when it was the only route open.**

**The route I proposed is structurally impossible**, and the measurement is worth keeping: a
combined two-limb boards `Never:` needs **271 characters** for both limbs, both evidence
bases and four components — 235 even aggressively terse — against a 200-char cap.
**A combined two-limb boards `Never:` can never be made self-sufficient inside the cap.**

The split works because the `Technique:` value's prescriptive content becomes **redundant**
once both `Never:` values carry it, so the split **consumes that slot** rather than needing a
new one. Count unchanged at 8 coaching + 2 `Rule:`.

### A gap this round created, found by the agent sent to fix something else

`git diff HEAD` on the stick-lift block shows the omission **was introduced by this round**.
The prior version carried:

```
Rule: IIHF 55.1 … while USA Hockey 623 and Hockey Canada's Interpretation 1 to 8.2(a)
      reach it where it stops the opponent playing the puck
```

**This round rewrote that fact into an IIHF-only 55.1 statement and dropped the Hockey Canada
limb.** Key Takeaway 3 still carried it in substance, so the document never contradicted
itself — but the block lost it, and the block is the layer voiced alone.

This is the round's own repair being the defect, for the second time, and it was found only
because a *different* finding sent an agent into the same block.

### Both of the brief's routes were refuted, one by reading the renderer

The brief offered three routes and preferred two of them. The agent read
`md_to_speech.py:1900-1952` first and refuted both:

- **`render_facts` emits ONE `<p>` per fact.** So splitting the offending fact in two puts
  the qualification in a **separate voiced request, 300 ms away** — which is exactly the thing
  the brief itself said must not happen. **The obvious repair defeats its own purpose.**
- **The headroom arithmetic is self-defeating.** The suggested 48-character clause plus its
  separating space consumes all 49 characters of margin — *"the one-character margin is not
  margin"* case, in the brief's own words.

So the fix had to be **the section split *and* a rewrite putting the edition scope inside the
claim's own `<p>`**. And the split had to go **three ways, not two**: the heading named two
jobs but the body does three, and stopping at two left a block of **9 facts, all `Rule:`, zero
coaching**, with two imperatives stranded unextracted in its prose.

⚠️ **Relabelling was considered and correctly rejected.** `Convention:` holds *"a coaching
choice, marked as one"*; a Situation Handbook answer is an **official interpretation**, not a
coaching choice, so relabelling to free a count slot would have been affirmatively wrong. The
"not rule text" disclosure is carried by the citation naming the Handbook and by a second fact
stating that the Handbook **ranks itself below the rulebook**.

### The qualification that bites, verified end to end

`iihf_situations_2026-27.txt:1096` carries Situation 10.26 verbatim — and **it cites no rule
number, where its neighbours 10.23–10.25 and 10.27 all cite one.** It is **absent from the
2025/26 edition**: that file's Rule 10 situations stop at **10.25**, and a flattened search
for its distinctive phrases returns zero.

And the British adoption clause closes the loop: `eiha_inhouse_2026-27.txt:42-44` shows the
**2026-27** In-House Rules still adopt *"the latest IIHF Official Rule Book (Version 1.1,
published July 2025)"* — **the 2025/26 book**. So a British reader hearing that fact alone was
being given an answer their own rulebook does not contain.

⚠️ **And the honest closing note from the agent that moved eleven facts between blocks:**
*"Relocating a fact does not re-verify it, and a split is exactly the operation that makes a
stale citation look freshly reviewed."* Roughly fifteen citations moved and were **not**
re-verified.

---

## Closing state, second attempt at the gate

```
37 documents · 8 sections · 801,435 words · 60.7 hours at 220 wpm
```

Round start: 793,642 words / 60.1 hours. First gate attempt: 799,031 / 60.5.

`check_links` · `check_facts` · `check_absolutes` · `check_geometry` · `check_secrets` —
all pass on a quiet tree with every agent finished. `md_to_speech.py --self-test`:
**146 assertions, 0 failures**.

### What the gate's block actually bought

It blocked on four conditions. Clearing them found **two Criticals and a Major that no
mechanical check could ever have seen**, in files the gate had identified as reviewed by
nobody:

- a `Rule:` fact that is **false read alone** — *"more permissive outside it"* about goaltender
  contact, where Hockey Canada mandates a major plus game misconduct **anywhere on the ice**
  and removes the misconduct rung entirely, so there is nothing between two minutes and
  ejection
- a **kicked-puck rule stated NHL-only** where Hockey Canada says the opposite — *"the only one
  whose direction is toward a lost goal rather than extra caution"*
- a **British reader given an answer their own rulebook does not contain**, from a Situation
  Handbook edition their governing body has not adopted

Plus a **pulled-goalie bench freeze** stated without the exception written for exactly that
situation, and a **checking-from-behind** fact omitting the mandatory major.

⚠️ **Every one of those files passed `check_facts.py`, `check_links.py`, `check_absolutes.py`
and the build, before and after.** The gate's value was not mechanical — it was noticing
which documents no human-shaped reader had opened.

### And the round's own repairs were the defect three times

1. A boards prohibition acquired the condition *"when a checker is arriving at speed"*, which
   its own source contradicts — found at **seven** sites where one was reported.
2. *"No speed is slow enough"* was propagated onto a limb whose evidence does not support it,
   **past a disclosure the corpus had written in three documents to prevent exactly that**.
3. A stick-lift fact was rewritten into an IIHF-only statement, **dropping the Hockey Canada
   limb it had carried**.

**Each was found by a reviewer sent in after the repair, never by the agent that made it.**
That is the whole argument for the rule that a repair may not self-certify, demonstrated three
times on itself in one round.

---

## The relocated citations: 47 verified, every one confirmed — and five were repairs

`commit-gate` blocked a second time on C5/C11: three section splits relocated citations that
were explicitly not re-verified, and *"nothing in the diff distinguishes a moved-and-still-
correct citation from a moved-and-now-wrong one."*

**Result: 47 citations verified against primary text on disk. Every one CONFIRMED. Nothing
contradicted. Nothing unverifiable.**

⚠️ **And the brief's census was short by roughly three times, again.** It named ~12 groups; the
true relocated set was derived from `git diff --cached` and ran to nearly fifty — including
the only genuinely relocated pair in one file (NHL/IIHF 10.2, paddle length), an entire
slew-footing ladder, and the whole neck-protector cluster.

### Five of the relocations carried CORRECTIONS, and each is right

The moves were not neutral. Verified against the books:

1. **IIHF/NHL table row 6F.** The old text said 6F, 6G and 6H *"all put it on the
   goalkeeper."* **They do not** — IIHF 6F reads *"must assess the appropriate
   penalty/penalties to the goalkeeper **and/or attacking Player**"*, NHL 6F *"Coincidental
   minors."* Split out correctly.
2. **NHL 69.3 against table row 6D.** The old text said the attacker *"is not automatically
   penalised either."* 69.3's third paragraph reaches exactly 6D's facts: *"In all such
   cases, whether or not a goal is scored, the attacking player will receive a minor penalty
   for goalkeeper interference."* **The table withholds it and the rule imposes it** — the new
   text reports the contradiction rather than resolving it.
3. **"USA Hockey writes no lift permission at all"** — **wrong**, and retracted. The Casebook's
   Standard of Play, Situation 2: *"Yes. A player may lift the opponent's stick at any time
   provided they do not impede their progress"*, called *"a good defensive play."*
4. **"No fall is required under any book"** — an overstatement. NHL and IIHF **57.1** say
   *"trip or fall"*, but **57.2**, the clause that imposes the minor, says *"trip and fall"*.
   Now reported as unresolved between the books.
5. **IIHF 55.1 ordering.** The old text argued the hands sentence *"sits before the
   stick-to-stick carve-out, qualifying it."* **Nothing in the book supports
   ordering-implies-priority.** Retracted, and the two sentences labelled unreconciled with
   *"no IIHF interpretation reconciling them is held here."*

### A SIXTH way a grep lies about a source — and it produced a recorded finding

The plan carried: *"IIHF Appendix IV Table 16 cannot be verified by grep in ANY extraction."*
**Partly refuted.** It **is** recoverable from a whitespace-flattened extraction, and the
headers were read directly: **`TABLE 16 · RULE 69`** in 2025/26 and **`TABLE 14 · RULE 69`**
in 2026/27 — **confirming this round's renumbering claim at source.**

⚠️ **Why it looked absent: the appendix interleaves two columns.** `loss of goal only` returns
zero because the row reads `A minor penalty is not assessed (loss of` … *description-column
text* … `goal only)`.

That is the sixth extraction trap catalogued this round, and **the only one that produced a
recorded finding rather than a near-miss** — a false absence that was written down as
established fact and survived until someone attacked it.

Two more near-misses in the same pass: a flattener produced `hookchecking` and `SlewFooting`,
and the agent nearly reported the corpus's `hook-checking` and `Slew-Footing` as defects. The
raw file shows `hook-` / `checking` split across lines.

### Negatives attacked by concept and upheld

Four, each searched by concept rather than phrase: **IIHF writes no match penalty anywhere**
(`match penal*` = 0 hits, both editions, de-hyphenated and flattened); **NHL Rule 69 has no
crease-stoppage counterpart** to IIHF 69.1 (the full 7,829-character span read, containing only
69.6); **no three-minor stick ejection outside Hockey Canada**; and **USA Hockey grants a
stand-up goaltender no play-on allowance** — its only such permission is in the **Sled Hockey**
appendix.

### DECIDED: `and/or` voiced as "and or" is not a defect, and nobody should sweep it

An agent noticed the renderer speaks `and/or` as **"and or"**, and flagged that it is
ambiguous heard aloud without auditing the corpus. Censused: **13 occurrences**.

**Adjudicated: no content change.** Three reasons, in order of weight:

1. **12 of the 13 sit inside quotations from a rulebook or a governing body** — measured, not estimated. Changing them would
   break quotation fidelity to fix a rendering — the wrong direction entirely, and this round
   has already caught one agent working around the renderer by altering its own draft rather
   than a quotation.
2. **The only occurrence in a ` ```facts ` block — the layer voiced standalone — is the one
   just repaired**, and it is explicitly rescued: it quotes the IIHF's *"and/or"* and closes
   *"so it may be you, them or both."*
3. **"And or" is the conventional spoken form.** A person reading `and/or` aloud says exactly
   that. No alternative expansion is better: *"and, or"* and *"and slash or"* are both worse.

Recorded so a later pass does not find 13 sites and sweep them — the same disposition as the
`etc.` question earlier this round, and for the same reason: **speech cannot render a
typographic convention as a typographic convention, and expanding it is the faithful reading,
not a corruption.**

### The three precision points, closed — and one relayed quotation was itself imprecise

⚠️ **My brief relayed the IIHF row as *"penalty/penalties"*. The book prints *"penalty/
penalties"* — a space after the slash.** The corpus already had it byte-identical; **the
relay was the imprecise copy**, and the agent quoted the book rather than the brief.

The substantive fix: `"At 6F you are both penalised"` was **exact for the NHL** — *"Coincidental
minors (goalkeeper/attacking player)"* — and **stronger than the IIHF**, whose *"and/or"* does
not require that both are punished. The value was split rather than trimmed (it was 298 of 300
characters), and the body now prices the two books separately, closing *"under the book you
play in Britain, 6F may land on you alone."*

And Item 2 turned out to matter more than a word: the Casebook sentence the corpus stopped
short of is **stricter than the rule it interprets** — USA Hockey 639(c) says a match penalty
*"may also be assessed"* where the Casebook says it *"must be considered."* That went into the
**body**, not the Sources block, because a Sources trailer is provenance and not teaching.

---

## The C11 delta could not be reconstructed, so the reviewer reviewed a superset

`commit-gate` blocked on a **32-fact, 3-block** gap between the facts layer's clearance
(794 blocks / 4,904 facts) and the staged tree. The `facts-reviewer` sent to close it reported
something better than compliance:

> *"I could not reconstruct the reviewer's 794/4,904 intermediate state — it exists in no git
> object — so I reviewed the full `HEAD`→index delta, a strict superset."*

**Measured, that superset is far larger than the gap:**

```
HEAD 791 blocks / 4,797 facts  →  staged 797 / re-run check_facts.py
295 blocks changed across 26 documents · 22 block keys appeared, 16 disappeared
628 fact lines added, 489 removed, 546 distinct new-or-changed
```

⚠️ **A clearance stated as a count cannot be re-derived later.** *"If the coordinator needs the
exact 32, only the reviewer's own transcript has it."* A future clearance should record what it
read, not how many.

### Four more brief figures wrong, and one of them hid a defect

- **The `goaltender.md` split is FOUR ways, not three.** The brief named three sections and
  omitted `### Protection, and the neck laceration protector` — **and that is the one that
  carried a defect.**
- **`## 2. Angling` is not a new heading** — it is a rename, and carries no block.
- **A fourth split the brief did not mention:** `defensive_zone_coverage.md` gained
  `### When the shot is already away`.
- The caps in the brief were correct.

### Six repairs, and the shapes are worth keeping

1. **A `Rule:` fact asserting as written what its own body calls an inference.** *"University
   hockey is inside that mandate, not outside it"* — flat — where the body says *"no clause
   says in terms that the list reaches university hockey — but nothing exempts it either."*
2. **A fact authored past its section**, tracing to a different section entirely. Fixed by
   extending the body.
3. ⚠️ **A duplicate that read LAST.** A block went 7 → 11 and ended on a naked restatement of a
   four-book fact four lines above it, minus the rule-set flag — so a listener got the qualified
   version and then the **unqualified one last.**
4. **A body stating USA Hockey's no-retaliation protection with nothing against it**, where
   IIHF 46.6 says the opposite in terms: *"A Player who retaliates to being punched will be
   assessed at least a minor penalty…"*
5. **A body listing pre-drop contact as a "violation"** where USA Hockey 613(e) and Hockey
   Canada 6.2(c) make it a **minor penalty**.
6. ⚠️ **A split that moved a restriction three chunks away.** *"Lift the stick of a player who
   does not have the puck — that is interference"* went into the new section, leaving the block
   that teaches the technique **with no possession condition at all**. Rendered, the two land in
   chunk 016 and chunk 019 — **not the same voiced request.**

And **two `🇬🇧` stutters the agent introduced and caught itself**: the marker expands to
*" For British readers, "*, so `🇬🇧 **A British reader does not have to…**` rendered as
*"For British readers, A British reader does not have to…"*.

### The clean passes, with the measurements that make them worth something

**Voicing shape 1 is at zero corpus-wide.** 503 `Never:` facts, 330 carrying an em dash; a
deliberately over-broad scan of every post-dash segment opening on a bare lowercase word
returned **80 candidates, all 80 declarative.** Not one positive imperative survives under a
`Never:`.

**The new slew-footing block is the best work in the delta** — all four books' floors *and*
ceilings present, eight quotations verified verbatim: NHL 52.2 *"shall be assessed a match
penalty"*, IIHF 52.2's discretionary major plus automatic game misconduct, USA Hockey 639(a)'s
*"except slew footing"* and the Casebook's *"A minor penalty is NOT an option"* alongside *"a
match penalty must be considered"*, and Hockey Canada 8.8(a)–(c) as a floor rather than a
ceiling.

### The contention check that mattered, run and clean

An agent repairing two Criticals in `mental_game.md` closed by naming the one thing it could
not do, and it was exactly right:

> *"`body_contact_and_battles.md` shows `MM` — it is being edited **right now** by another
> agent. I read it at one instant and quoted it. If that agent changes `:613`, `:1068` or
> `:1078`, my four new sites silently diverge from their owner. **Only a whole-file diff of the
> owner against my sites, after every agent has stopped, can catch that** — and it is the
> single highest-value check remaining on this work."*

Run once both agents had finished. **Clean.** The owner's three cited lines are intact and say
what was copied:

```
:614   In every case, and non-negotiable: head up, chin off your chest, and "hit the boards
       or goal posts with an arm, a leg or anything but your head first"
:1069  Keep your head up and out of the shot lane, keep your hands behind your body or
       tucked in behind your shin pads…
:1079  A timed slide at the pass, where that is your team's 2-on-1 method, is a different
       act from going to the ice at the shot — head up either way, and ask your coach
```

The owner's one unstaged hunk **restores a possession condition** to the stick-lift block —
`Never: Take the lift on a player who does not have the puck` — and touches none of the three.

⚠️ **This is the failure mode CLAUDE.md records from commit `239f70d`, caught before it
happened rather than after.** Two agents were in an owner-and-quoter relationship without
either knowing it, and the disjoint-ownership rule does not cover that case: **the quoter never
edits the owner, so nothing collides — the divergence is silent.**

### The measurement in the brief was wrong in the direction that understates

I reported the counterweight as *"paragraph `[4]`, three `<p>`s later"* in the same chunk.
`024.ssml` has **four** paragraphs, `[0]`–`[3]`; there is no `[4]`. **The counterweight is in a
different chunk entirely** — a separate voiced request. **The finding was right and I had
understated it.**

### A judgement the repairing agent flagged as mine to overturn

It **dropped the word "stinger"** rather than defining it: *"Defining a brachial-plexus injury
would have meant writing a clinical definition from memory into a corpus that teaches a
collision sport."* The mechanism is retained and **labelled** — *"coaching caution rather than a
sourced clinical finding, and no study is cited for it here"* — so nothing was tidied away.

**Upheld.** The alternative was inventing a clinical definition, which is the one thing this
corpus may never do. And its own closing caveat is the honest frame: *"'no source found' here
is a statement about this repository, not about the literature."*

⚠️ **And the propagation debt it created, in its own words:** four new sites in an off-ice
document now restate the owner's mechanism and prohibitions — *"every one of my four new sites
is now a place a future correction to the owner has to reach."* That is the corpus's stated
failure mode, accepted knowingly for a safety gain, and recorded so the next correction knows
where to go.

---

## The brief that was wrong in the dangerous direction — and refuting it found the real defect

I briefed a high-sticking finding as *"a one-book permissive limb where Hockey Canada routes to
Head Contact"*, and asserted that *"the threshold and the possession carve-out are four-book
identical."* **Both halves were wrong, and the first was wrong in the direction that hurts.**

⚠️ **It is not a one-book limb. All four books penalise stick contact with an opponent and all
four escalate.** USA Hockey **620** reaches *"any part of the player's body, equipment or
stick"* **with no classification restriction** — at least as strict as Hockey Canada's — and
NHL/IIHF **60.2/60.3/60.4** reach a minor, a double minor on injury, and a match penalty (NHL)
or a major plus automatic game misconduct (IIHF).

**Writing my brief as given would have implied the NHL and IIHF are permissive.**

⚠️ **And the carve-out is NOT four-book identical. USA Hockey 621(d) inverts the default:**
*"play shall be immediately stopped"* **unless** the puck is batted to an opponent. So the
corpus's *"Play stops only if the offending team then gains possession"* was **a one-book
statement told as universal** — the exact defect the brief was chasing, pointing the other way,
and it went unnoticed because the brief asserted the carve-out was settled.

**Now carried in facts, body and Common Mistakes.**

### The agent caught the same shape in its own first draft

> *"My first version named **only** Hockey Canada and USA Hockey. That is exactly the shape the
> style guide warns of — naming one book's escalation positively implies the others do not.
> Caught by grepping NHL Rule 60 before shipping."*

And that grep produced the best sentence in the repair: NHL 60.1 and IIHF 60.1 both say *"A
wild swing at a bouncing puck would not be considered a normal windup or follow through"* —
which removes the excuse a reader would reach for.

### A sixth rulebook typo, and the right handling of one

Hockey Canada 6.9(c) prints ***"In Minor of Female divisions"*** — *of* for *or*. **My brief
relayed it silently repaired.** The agent **paraphrased rather than quoting**, so the corpus
neither reproduces the book's error nor fabricates a corrected quotation, and recorded the slip
as a citation-resolution note. Added to the style guide as the handling to copy.

### Two censuses that disagreed, and what that proves

The agent's boards-counterweight census returned **different counts from mine on every
document** — `zone_entries` 14 against 9, `switching_positions` 10 against 8 — because the two
used different regexes.

> *"Neither census is measuring the concept, only a phrase. A document that states the
> counterweight in words I did not grep is invisible to both."*

⚠️ **That is the sharpest statement of the round's central limit.** Every corpus-wide figure in
this record that came from a phrase search is a count of that phrase, not of the thing.

---

## The item the gate called "not a block" was a Critical

`commit-gate` flagged, as *"worth a `facts-reviewer` eye, not a block"*, that a block now ended
on a **single-book `Rule:` with no rule-set flag**. It was worse than a missing flag.

```
Rule: You may catch the puck out of the air but must immediately place it or knock it
      down to the ice (NHL Rule 67.2)
```

**That is the PERMITTING half of a two-part rule, extracted without its price.** Voiced
standalone — which is how every facts value is voiced — it said only *"you may catch it, put it
down"*: no minor, no stoppage, no crease escalation, no goalkeeper exemption. **The round-20
omission signature, not a flag problem.**

### And one of the four books does not print the permission at all

- **NHL 67.2** and **IIHF 67.2** — word for word, in both IIHF editions: *"A player shall be
  permitted to catch the puck out of the air but must immediately place it or knock it down to
  the ice."*
- **Hockey Canada 10.2(a)(iii)** reaches it from the other end — the minor is for one who
  *"closes their hand on the puck and, by doing so, gains an advantage"*, and expressly *"will
  not include a player who closes their hand on the puck to catch or stop the puck and
  immediately drops it to the ice."*
- ⚠️ **USA Hockey's playing rules print NO permission. 618(a) prints a STOPPAGE:** *"Play shall
  be stopped and a last play face-off shall occur…"* The permission lives in the **Casebook**,
  where the catch and the drop *"must be virtually one continuous motion."*

**So a USA Hockey reader was being told a minor where their book gives a stoppage.**

⚠️ **And the document had been missed by the propagation that fixed twelve others** — seven
sibling documents already carried the four-book treatment, and in this same file *every other*
rule fact was upgraded to four books this round. **67.2 alone was left.**

### Two more brief figures wrong, and one would have caused damage

I wrote *"three lines below four meticulous four-book facts."* It was the **immediately next
line**, and only **three** of the four are four-book — ⚠️ **the fourth is deliberately two-book
and correctly so** (*"NHL 60.1 and IIHF 60.1 both write…"*). **Acting on my characterisation
would have "fixed" a correct fact.**

### The repair, and the ordering principle held again

Body first, then extract — *"the body did not say any of this, so a flagged fact would have
been authored rather than extracted."*

And the block **is** split across a chunk boundary: fact 11 opens the next chunk **alone**. The
reviewer **refused to reorder** — that is tuning content to the chunker's arithmetic — and
instead made the orphaned fact **survive its isolation**, replacing a pronoun whose antecedent
sat in the previous chunk. *"The price is for holding **it**"* → *"holding **a caught puck**"*.

⚠️ **That is the durable answer to the 23% split-block measurement**, arrived at independently
for the second time: **not to move facts, but to make each one self-sufficient as a paragraph.**

### The same rule one level up — and the Critical was the exemption, not the consequence

The sibling repair predicted the defect's shape and got it wrong. **My brief predicted the
greater defect would be a missing consequence.** The consequence was present — minor, and
penalty shot in the crease. **What was missing was the goalkeeper exemption.**

```
Rule: You may catch the puck out of the air but must immediately knock it down; closing your
      hand on it is a minor (NHL and IIHF Rule 67.2), but a penalty shot when the puck you
      cover is inside your own crease (67.2(ii), 67.4, 63.6)
```

⚠️ **Voiced standalone, that tells a goaltender that covering the puck in their own crease is
a penalty shot against their team.** It is the single most routine legal act a goaltender
performs, and **all four books exempt them by name** — NHL 67.4 *"except a goalkeeper"*, NHL
and IIHF 63.6 *"No defending player, except the goalkeeper"*, USA Hockey 618(a) *"other than
the goalkeeper"* and 614(b) *"any player, except the goalkeeper"*, Hockey Canada 10.2 *"for a
player, except the goaltender"*.

**The style guide names this exact omission — *"67.4 exempts the goalkeeper"* — as one of round
20's own seven criticals. It recurred.**

**And a second Critical in the same fact:** the two-book flag covered the whole sentence, but
**the crease escalation is four-book**. A USA Hockey or Hockey Canada reader was entitled to
read *"NHL and IIHF"* as excusing them from it. The minor for holding is genuinely two-book —
plus Hockey Canada's, which is **conditioned on gaining an advantage**, a condition neither the
NHL nor the IIHF imposes.

### Two more of my figures wrong, in a brief written to correct a brief

- **"Its body is NHL-only" — false.** The body already carried USA Hockey explicitly, including
  618(a)'s stoppage. What was genuinely absent was **Hockey Canada 10.2 entirely** — a fourth
  book the same section gives four-book treatment to *one bullet earlier* — and the **USA Hockey
  Casebook permission**. **Neither was named in my brief.**
- **A line range off by one**, and the fact's own line unstated.

### The cap said the section was doing two jobs, and it was right

The block was at **`HARD_MAX` 11, seven of them `Rule:`, one of which was about hands under a
heading that says "feet and body"**. The two Criticals could not both be repaired inside 300
characters. Split on the seam the body already used; no heading renamed, so no anchor moved.

⚠️ **And the honest closing observation, which is the strongest statement of the round's
remaining blind spot:**

> *"The heading 'Your feet and body are part of your handling' did not advertise hands at all —
> the defect was sitting under a heading that gave no hint it was there, and I only reached it
> because someone else had already found it. A block whose section hides a rule under an
> unrelated heading is exactly what my method still cannot find, and **I have now confirmed
> that shape exists in this corpus rather than merely suspecting it.**"*

### Five pronouns that would not have survived isolation

The new block is also split across a chunk boundary. Rather than reorder, the agent bound every
pronoun: **five facts opened with an unbound "it"** — *"Knock it straight down…"*, *"Holding on
to it…"*, *"With your own goalkeeper pulled it becomes…"*, *"The test is…"* with no antecedent —
all rewritten to name the puck or the infraction, then verified against the re-rendered SSML
paragraph by paragraph.

### A superseded rule taught as current, in a file whose other blocks had it right

```
faceoffs.md §"What actually to do"
Key: Teach your wingers the encroachment rule — thirty seconds, and it stops a winger's
     early step costing your centre (NHL 76.6) or your one free violation (IIHF 76.6)
```

**IIHF 2026/27 Rule 76.6 ejects the centre for all violations.** The *"one free violation"* is
the **superseded 2025/26** answer, and the IHUK In-House 2026-27 amendment replaces the centre
for all violations bar post-icing.

⚠️ **Three other blocks in the same file and its Key Takeaway 2 already carried the current
answer.** This block and its body bullet carried the old one **with no edition flag** — so the
document contradicted itself, and a British listener hearing this value alone concludes their
centre stays in the draw. **He does not.** Repaired in both layers, with the free violation
confined to the superseded edition rather than deleted.

### The hedge tool has unknown RECALL as well as known false positives

In one file it flagged **seven**; three were real, and **the reviewer found three more it did
not flag at all** — including two sections that inherited a *"this section describes coaching
choices, not rules of hockey"* blockquote from their parent and carried the hedge in **neither**
layer, while a third sibling carried it correctly.

> *"The flag list is unchanged after the repairs, because the tool matches body tokens, not
> coverage."*

⚠️ **So the census cannot be used in either direction.** A flag is not a defect — 27 of 27
triaged so far were not, at the flagged sentence. **And its silence is not a clearance.**

### Twelve facts naming a book their body never named — closed, and the census was itself short

The architectural finding closed with **eight body extensions**. The brief's census listed
twelve facts and thirteen citations; the true figure is **fourteen book-mentions across twelve
facts** — two facts also named the **IIHF** where their body said only *"(Rule 76.3)"*.

⚠️ **And the repairing agent flagged a possible error in its own new prose**, unprompted: the
USA Hockey 612(b) *"nearest end zone face-off spot"* claim was extracted from text conditioned
on *"calling for a last play face-off"* — **a qualifier it did not carry into the prose.** Sent
to `rules-verifier` with that named as priority one.

**That is the round's method working at its best: the agent that wrote the text is the one that
reported the doubt about it.**

---

## ⚠️ The brief invented a fact about physical geometry, out of quotations that refuted it

I briefed, with confidence and in bold, that *"a puck caught at **chest height** above the
crease is, in all four books, a puck **in** the crease"*, and told the agent to build the
Check-yourself question around chest height.

**False. The crease volume has a CEILING, and every one of the four quotations I supplied says
so in its own words** — *"extending vertically four feet (4')"*, *"until the top of the
crossbar"*, *"from the ice to the top of the crossbar"*, *"to the level of the top of the goal
frame"*.

**The goal frame is four feet. Chest height on a standing adult is above it.**

And a worked situation decides exactly that case the other way — `iihf_situations_v1.1.txt:4988`,
identical in 2026/27, a player in his own crease catching the puck *"(above the crossbar)"*:

> *"No. Since the puck was above the crossbar when caught and thrown, it was not considered to
> be in the crease. Therefore, only a minor penalty is warranted."*

⚠️ **My own supporting evidence was the refutation.** Situation 67.6, which I cited as proving
the point, has the catch at **waist** height; the sibling situations are **knee** high. The
section and its Check-yourself question were written around waist height with the crossbar
ceiling stated explicitly in both directions.

**This is the worst brief error of the round**, and it is a different class from the stale line
numbers and short censuses: **not a figure copied wrongly, but a claim about the physical world
invented on top of primary text that said otherwise.** Had the agent taken the brief, the
corpus would have acquired a fabricated hypothetical in a Check-yourself question — the layer
designed to make a reader act.

### And a second thing the brief missed, in the reader's favour

USA Hockey Casebook **614 Situation 3** answers the standing-in-the-crease catch with *"either
a penalty shot or awarded goal"* — **and adds** *"if the puck is caught and dropped to the ice
immediately, no penalty shall be assessed as no stoppage of play has been caused."*

**Under USA Hockey, the section's own core instruction is itself the escape.** Now in the body.

### Two self-catches, both found by running the renderer rather than reading the Markdown

1. **Bare roman clause markers reached the audio as letters.** `md_to_speech.py` expands a
   roman marker only when it is attached to a rule number, so a bare `(vi)` voiced as *"and
   vee-eye"*. Three instances in the agent's own new text, fixed.
2. **Its own Common Mistakes bullet stated the four-book escalation without USA Hockey's two
   divergences** — the awarded goal conditioned on *"prevented an obvious and imminent goal"*,
   and the optional-minor election. **That is the summary-layer half-rule shape, caught in its
   own draft before shipping.**

⚠️ **And one thing it deliberately did NOT "fix":** the NHL dimension quotation renders as
*"four feet (four feet)"*. `md_to_speech.py` carries a **regression test pinning that** — *"two
feet (2') → 'two feet (two feet)' as quoted from the rulebook"* — and a sibling document renders
the identical string. **It is the corpus's deliberate handling of a verbatim dimension
quotation, not a defect.** Recorded so it is not "repaired" later.

### A premise in my brief that was stale by the time it was read

I wrote *"the round is staged and the index matches the tree."* `git diff --name-only content/`
returned **fifteen files** — the live agents' work. **A staging statement is true only at the
instant it is made**, and this one was written while six agents were running.

### A conditional flattened into a flat bar, where a sibling carried it correctly

```
playing_without_the_puck.md §"Screen the goalie"
Rule: USA Hockey 625(b) is a flat position bar — no goal with an attacking player in the
      crease, whoever scored
```

**625(b) is not flat.** Verified: *"No goal may be scored with an attacking player in the goal
crease **unless the puck has preceded the player(s) into the goal crease or the goalkeeper is
out of the goal crease area**."*

**Both statutory `unless` limbs dropped** — and `shooting.md`'s sibling fact already carried
them, so **the layer disagreed with itself.**

### Three facts citing one book where the body says two — and Britain is under the other

Three facts cited `(NHL Rule 69.1)` / `(NHL Rule 69.3)` where each section's body says *"That is
the NHL and the IIHF."* ⚠️ **Every British reader is under the IIHF book.** And a fourth
document already wrote `NHL/IIHF 69.1`, so again the layer contradicted itself.

### An exception that reached the body AND Common Mistakes, and stopped short of the block

Hockey Canada 6.4(a): *"In Junior and Senior divisions, where a player… unintentionally shoots,
bats, throws, kicks, or otherwise directs the puck outside the playing surface, no penalty will
be assessed, **but the defending team may not make a line change**."*

Body ✓, Common Mistakes ✓, **block ✗** — and the block's Hockey Canada fact said *"10.1(ii) is
deliberate-only for skaters"*, which **heard alone tells a Junior player an accidental clear is
free. It costs them the change they were clearing for.**

⚠️ **Two layers carrying a correction is not three.** This is the round-10 shape with the
summary layers *ahead* of the extraction layer.

### An owner stating its own number without its basis

The off-puck share figure is owned by this document, and the owners table requires *"its stated
basis"*. The basis — 5-on-5 only, normalised per 20 minutes, the arithmetic the document's own —
was stated **once, in a blockquote**, and **nowhere in the block**. Rendered, the bare figure is
voiced in its own `<p>` with a 300 ms break either side.

### And the tool artefact is now confirmed across three independent file sets

Roughly **a quarter of all flags** are `report_hedges` absorbing trailing `##` sections into the
last `###`. One flag reached six sections away. Three agents found it independently without
being told, each by reading the flagged text and discovering it was not in the named section.

---

## The hedge tool: fixed, and it was broken in BOTH directions

Five agents triaged every hit across the corpus. Three found the same defect independently,
without being told, each by reading a flagged sentence and discovering it was not in the named
section.

`report_hedges` split on `\n(?=### )`. So:

- **A `###` section ran to the next `###`**, swallowing every `##` heading after it — including
  the document's own `## Common Mistakes`, `## Check yourself` and `## Key Takeaways`. A
  sentence in any of those was reported against a `###` section that did not contain it. **One
  hit reached six sections away.**
- ⚠️ **And blocks sitting on a `##` heading were never inspected at all** — in either
  direction. Three such blocks were named in one file set alone.

**Fixed**: split on `#{2,3} `, so a `##` boundary terminates the preceding section *and* a `##`
section with a block of its own is examined. Summary-layer headings are skipped by name.

```
before   67 sections flagged
after    48   ← as measured at the fix
```

⚠️ **That `48` is now stale and the tool is the owner.** A later content repair closed one more
section; `python3 scripts/check_facts.py --hedges` reports **47** on the committed tree.
**Re-run it rather than reading a figure here** — this is the fourth stale figure this record has
carried, and the third caught by the gate rather than by its author.

Verified both halves: `Clearing the Zone` and `The low regroup` — `##` blocks that had **never
been inspected** — now appear, and no summary-layer heading appears as a section name.
`check_facts` and the renderer self-test both still pass.

⚠️ **The docstring now carries what the five triages established**, so the next reader does not
have to rediscover it: *neither a defect list nor a clearance.* Roughly a quarter of the old
hits were the mis-attribution; many more were exceptions already in the block worded
differently; **and it misses defects it never flags.** A sweep over its output would damage the
corpus, and its silence about a section means nothing.

## The systems triage: a Critical the block created by telling you what to do instead

```
special_teams.md §"3-on-3 overtime"
Never: Change on the fly with the puck loose. Change by holding possession instead, often
       passing back to the goalie, who retains and replays it rather than freezing it
```

**The block tells a reader to pass back to the goalie and says *"rather than freezing it"* — and
never says that freezing is a penalty.** NHL 63.2(vii): a minor for a goalkeeper who *"in his
own goal crease, deliberately falls on or gathers the puck into his body… in such a manner as
to cause a stoppage of play **unless he is actually being checked by an opponent**."*

⚠️ **In sudden-death 3-on-3 that minor is a 4-on-3 against.**

And six Majors, four repaired: a delayed-penalty fact wiping *"the minor penalty"* while its
own body carried *"majors and match penalties are still assessed"*; a delayed-offside recovery
taught with **no classification scope**, where USA Hockey 630(d) confines the situation to
Youth 15-Only and above — *"below that the whistle is immediate"*, so **for most North American
minor hockey the block teaches a recovery that does not exist**; two prohibitions stated with
no price; and a head-contact escalation printed under a *Junior/Senior* heading while the limb
it governs is **minor and female**.

⚠️ **Two more were left because the block is at `HARD_MAX`** — including one that tells a reader
*"the defenceman is not braced for you"* and **never names what the arriving hit is**, while its
body carries four books' checking-from-behind tiers at length. **Reported, not trimmed.**

### A provenance gap nobody had noticed

⚠️ **RETRACTED LATER IN THIS SAME RECORD — read on before quoting this paragraph.** The book was
fetched at the fourth gate pass, every quotation was located verbatim, and `sources/carha.txt` now
exists. See *"✅ CLOSED, centrally: `sources/carha.txt` did not exist"* below. This paragraph is
kept because it is what was believed at the time, and `review_history.md` is reconstructed from
these records — **but its present tense is now false, and a reader who stopped here would carry
the wrong conclusion out.**

⚠️ **No CARHA rulebook is on disk** — `sources/` holds none. Yet one document carries
`Rule: … CARHA Rule 66(b) …` **in a facts block**, and another cites CARHA 73(d). Neither could
be verified in primary text. **Reported rather than acted on**, per non-negotiable 3: the answer
is a label, not a deletion.

### A renderer defect that only existed inside blockquotes

`parse_table` already drops markdown separator rows. **A table nested inside a blockquote never
reaches it** — it falls through to prose, where the symbol table turns each `|` into a comma,
and a listener hears:

> *"dash dash dash, dash dash dash, dash dash dash, dash dash dash"*

Found in the rendered corpus, in a call-data table quoted inside a callout. **Fixed** by
dropping separator-only lines in `render_quote`; header and body rows are kept, because they
are the quotation's content and a quoted table read as comma-separated cells is the least-bad
reading available. Verified corpus-wide: **zero separator rows reach the audio**, self-test
still 146 assertions.

### The cross-checking brief was wrong about two books, and the agent found what it did not know

I briefed that the tiers existed in the NHL and IIHF and asked the agent to *establish* USA
Hockey and Hockey Canada, saying that if a book wrote no escalation, that was a finding.

**Both write one, and the brief did not know it.** USA Hockey **609(b)** major plus game
misconduct for reckless endangerment and **609(c)** a match penalty; Hockey Canada **9.2(b)**
discretionary major plus game misconduct on *"the degree of violence of impact"* and
**mandatory where it injures**, **9.2(c)** a match, **9.2(e)** a game misconduct with any major.
**No book writes no escalation.**

⚠️ **And the safety payload was in an interpretation nobody had cited:** Hockey Canada's
**Interpretation 2 to 9.2(b)** — a cross-check *"above the normal height of the shoulders"*
leaves Rule 9.2 **entirely** and *"must be assessed"* as a **Head Contact** major plus game
misconduct under Rule 7.6.

It also checked what the brief did not think to ask: the 2026/27 IIHF text is **word-for-word
identical**, so the edition split that bites on high-sticking **does not bite here**.

### An agent overturning a previous agent's self-doubt, with the text

The earlier repair flagged its own reasoning as *"an inference, mine, not any book's"* — that a
relief written inside a tripping rule does not travel to a rule in a different section.

**Overturned, and correctly.** For three of the four books it is **text, not inference**: USA
Hockey's puck-first relief is the **Note to 639(a)**, and 639(a) itself reads *"for any of the
actions described above, **except slew footing**"* — the relief sits inside a clause that
expressly excludes it. Hockey Canada 8.6's preamble excludes 8.8 in terms. NHL and IIHF Rule 52
have three clauses each and **no relief of any kind**.

**The repair stands, and is stronger than its author believed.**

### ⚠️ And the handover that matters most before the gate

> *"`git show :content/technique/body_contact_and_battles.md | grep -c 'is a defence to
> slew-footing in no book'` returns **0**; the tree returns **1**. **If you commit without
> re-staging this file, the round ships the corpus without the slew-footing repair** — and no
> checker can see it, because they all read the tree."*

**My brief had asserted the index matched the tree. It did not, and had not for some time.**
A staging statement is true only at the instant it is made.

### A propagation instruction wrong in both directions at once

I told an agent the pre-drop-contact claim also lived in two sibling documents and to report
on them. **Neither was right.**

- It appears in `special_teams.md` **nowhere** — `613(e)`, `6.2(c)` and `physical contact` all
  return zero there.
- `center.md` **already carries the corrected form**: *"physical contact can draw a minor at
  once (IIHF 76.7)"*.

**Corpus-wide the claim lives in one document.** No edit outside it was needed, and had the
agent trusted the brief it would have gone looking in two files for something that is not in
one and already fixed in the other.

⚠️ **And the brief named one site where there were four** — two facts values and two body
sentences, one of which already had the discretion right. **A single-site brief on a
multi-site claim is how a repair ships half-done**, which is the failure this round has
recorded three times.

### Three more of the same class, found beyond the brief

- A sentence attributed the linesperson's centre-replacement to *"NHL and IIHF"*. **Wrong for
  the IIHF 2025/26 edition, which warns instead.** Scoped.
- A scrum bullet said *"either team's defencemen"*, **conflating the rule's two sentences** —
  the second reaches *non-offending* players entering the zone. Split.
- The Common Mistakes bullet on the same rule was **narrower than the rule**. Widened.

⚠️ **And the Sources section had gone stale from this round's own earlier work in the same
file.** Eight new body paragraphs had cited USA Hockey 612/204 and Hockey Canada 6.1/6.3/6.4
without adding them, and the scope line *"Hockey Canada was read for the stick-placement order
and for the post-icing carve-out"* **had become untrue by the work that sentence sat beside.**

**A Sources scope line is a claim about what was read, and it decays every time the document is
extended.** Nothing mechanical checks it.

### A cap hit honestly, again

A repaired `Rule:` value reached **340 characters** against a 300 cap. It was **split into two
complete facts rather than trimmed**, and the block is now at `HARD_MAX`. **Reported, not
trimmed** — the fifth time this round a cap was met that way, and it was right every time.

---

## The last wave: a brief that told an agent to contradict the corpus's own owners

Five documents — `special_teams.md`, `breakouts.md`, `defending_the_rush.md`,
`defensive_zone_coverage.md`, `offensive_zone_play.md` — six items, all closed. Thirteen brief
quotations re-verified in primary text by the agent before it acted on any of them. **All
thirteen were verbatim.** The quotations were not the problem this time. **The reasoning built
on top of them was.**

### ⚠️ The brief's resolution was already resolved, in the opposite direction, with reasoning

The brief told the agent to present IHUK In-House Rule 101's scope as an **unresolved
ambiguity** and to place the reader *"below adult"*.

`uk_rules.md:249–255` and `body_contact_and_battles.md:88–89, 107` **had already resolved it,
the other way, and said why** — the ejection bullet states no scope, says *"in all cases"*, and
a reading confined to non-adults would duplicate the bullet directly above it. `uk_rules.md`
goes further and says explicitly *"do not read the Adult definition as an exemption from it."*

**Writing the brief's version would have made a document contradict two documents it links
to.** The agent followed the owners. ⚠️ **This is the failure the cross-document owner
convention exists to prevent, and the dispatcher walked straight into it** — a brief that
reopens a settled question, without checking whether it is settled, is not a hypothesis. It is
a regression with a rationale attached.

### ⚠️ And the age band in it was not merely wrong, it was unusable

The brief's *"below adult means under 14"* rested on IHUK 100.1 defining Adult as *"From the
player's 14th birthday onward"*. **The same rule defines Under 16 as "From the player's 10th
birthday up to their 16th birthday."** The two categories **overlap at 14 and 15**, so **no age
alone determines the band**.

The band was **removed from the extraction layer rather than corrected**. A fact that cannot be
made true by fixing its number is not a fact with a wrong number in it.

### What a hard cap looks like when it is honest

Four of the blocks touched sit at the **11-fact `HARD_MAX`**. Every fix in those went into an
existing value inside the 300-char `Rule:` ceiling. **Nothing was traded away to fit** — no
hedge, no citation, no scope flag was shortened to make room. **The fifth, sixth, seventh and
eighth time this round a cap was met that way**, and it has been right every time.

### Three defects that only reading the audio could find

The agent re-rendered all five documents and read every changed value in its own `<p>`:

- `63.2(vii)/(VII)` voiced as *"clause seven **or** (VII)"* — the slash. Split into two citations.
- A body paragraph crossed a chunk boundary so an audio chunk **opened** with *"Its Rule ten
  point two…"* — a pronoun with its antecedent in the previous request. Bound.
- Two values ended on *"…after one."* and *"…the whole of it"*. Both bound.

**None of the three is visible in the markdown.** All three were found by reading the SSML.

### ⚠️ A reported gap that is not one — checked before dispatching a repair

The agent reported, outside its files, that `rules_primer.md:491–492` *"carries 15.2's
captain-choice correctly but does not carry 15.3 at all."*

**Verified centrally, and the primer is sound.** `rules_primer.md:492` handles the delayed-call
double minor under **NHL 18.2**, whose second paragraph is squarely on point:
*"When a double-minor penalty has been signaled by the Referee and the non-offending team
scores during the delay, one of the minor penalties shall be washed out and the penalized
player will serve the remaining two minutes."* 15.3 names four rules; 18.2 is general; **they
agree in outcome and the primer cites the one that covers its own case.**

⚠️ **The brief-refutation discipline has to run on agent REPORTS too, not only on dispatcher
briefs.** Had this been dispatched as written, a correct citation would have been replaced with
a narrower one.

### ✅ CLOSED, centrally: `sources/carha.txt` did not exist

The agent found that `sources/README.md:41` and `scripts/fetch_sources.sh:101` **both register
`carha.txt` and no such file was on disk** — its only extraction anywhere was in this session's
scratchpad, which no other agent and no checker can reach. That registration was written
earlier in this same round.

Extracted to `sources/carha.txt` with `pdftotext -layout`, **byte-identical to the scratchpad
extraction the rules claims were verified against** (206,667 bytes), and Rule 66(b)'s
*"Unless the puck is in the goal crease area"* located in it. `sources/*` is gitignored by
design — the committed record is the `fetch_sources.sh` row and the README row, and **those were
correct; the local disk was what was missing.**

⚠️ **A source registration is not verified by the registration existing.** Nothing in this
repository checks that a registered book is actually extractable to the path that cites it, and
for one round it was not.

---

## The corpus-wide layer test the repair wave could not reach — and it found a fabricated rule

The wave that repaired five systems documents ended by declaring it had **not** run a layer test
across the other 32, and that any block elsewhere stating these claims wrongly was still there.
That handover was the most valuable sentence in its report.

Scope of the test: **32 of 32 documents · 624 facts blocks · 3,862 values · 375 table rows ·
1,365 Common Mistakes and Key Takeaways lines · 10,641 body lines**, extracted into **four
separate corpora** and queried independently, with every match read in its section before being
called a defect.

### ⚠️ CRITICAL — an exception that exists in no book, attached to the book that lacks it

Two facts values told a USA Hockey goaltender that **Rule 614(c)** has a skate-contact
exception:

> `Rule: USA Hockey has no trapezoid but restricts where you may freeze the puck… the sole
> exception is a goalie keeping skate contact with the crease` — `goaltender.md:518`
> `Rule: USA Hockey has no trapezoid, but Rule 614(c) bars the goalie covering the puck in the
> corners — the sole exception is a goalie keeping skate contact with the crease` — `faceoffs.md:756`

**Verified centrally in `sources/usah.txt:3981–4045`: there is no such exception.** Rule 614(c)
runs (1) puck behind the goal line with the body entirely outside the crease; (2) *"They fail to
play the puck with their stick when provided the opportunity to do so prior to being pressured by
an attacking player"*; (3) outside the privileged area; (4) *"They hold or place the puck against
any part of the goal frame or boards"* — then the privileged-area Note, **then Rule 615 Fighting
begins.** The only `skate contact` strings in the whole book are at offside and zone-entry lines,
plus Rule 625(b), which is about an *attacking* player in the crease.

**The clause belongs to another book and another act.** `nhl_rules.txt:6717–6720`, the NOTE to
**63.2(viii)** — the designated-area clause: *"The minor penalty will not be assessed when a
goalkeeper plays the puck while maintaining skate contact with his goal crease."* It excuses
**playing** the puck outside the trapezoid. It says nothing about freezing.

⚠️ **Six other sites attach it correctly, to the trapezoid.** That is the density at which one
more mis-attachment hides, and it hid in two. **A correct clause travelling to a book that does
not contain it is a fabrication that no checker can see** — the citation is real, the wording is
real, the book is wrong.

Heard alone, it tells a goalie a skate on the paint licenses the freeze. **614(c)(4) is violated
by a goalie standing on the paint**, and **614(c)(2) is a pressure test with no location
component at all.**

### ⚠️ CRITICAL — an unconditional permission, in the definitional document, in the table layer

`rink_map_and_glossary.md:474`, the six-positions table:

> `| **G** | Goaltender / goalie | The only player allowed to freeze the puck |`

**The only occurrence of the word "freeze" in that file.** Nothing qualifies it anywhere. It is
the *teaches-that-without-teaching-where-it-stops* trap in its purest form, in the document a
reader goes to for definitions — and the permission stops in all four books, twice without any
warning at all.

The **exclusivity** is wrong as well: the corpus itself teaches a skater legally pinning a
contested puck, and NHL 63.2(v)'s Note protects a shot-blocker the puck lodges under.

⚠️ **It sits in the TABLE layer, which no facts grep reaches** — and the reviewer reached it only
because the row happened to contain the word "freeze". Its own closing note is the finding that
matters: **a row reading *"the goalie can stop play whenever they have the puck"* would say the
same false thing and no keyword method would ever see it.**

### The flattening class, found in three more blocks

Each kept a Hockey Canada clause's **injury** limb and dropped its **discretionary** one, so the
book reads injury-gated when it ejects with nobody hurt: `body_contact_and_battles.md:1158`
(7.6(b), which has **three** paragraphs, the third ejecting *"whether or not injury results"*),
`body_contact_and_battles.md:954` (9.2(b)), and `on_ice_communication.md:218` (7.3(b), which also
omits Hockey Canada's match rung at 7.3(c) while naming USA Hockey's at 604(e) — **in the body
too**). Two of the three **contradict their own bodies**, which state both limbs.

⚠️ **And one match was NOT a defect.** `risk_management.md:567` — *"Hockey Canada 8.6(b) mandatory
on injury"* — fits the pattern exactly, and **8.6(b) genuinely has only the injury limb.** The
pattern is rule-specific, not book-wide. **A sweep would have broken a correct fact**, which is
the second time this round that has been true of a pattern good enough to dispatch on.

### ⚠️ Three more brief errors, and one of them would have deleted a correct scope

- **The Rule 101 ejection brief shed the rule's own scope.** I wrote *"reaches every age, adult
  included"* and never wrote **women's hockey**. Rules 100–102 sit under *"Section 11 – Women's
  Ice Hockey"* and Rule 101 is titled *"Women's Hockey Specific Playing Rules"*. My instruction —
  *"any site that scopes this ejection… the fix is to remove the band"* — pointed at a document
  that had correctly scoped it to the women's game and **invited deleting that scope.** The two
  owner passages say *"women's hockey"* in terms. **The brief did not.**
- **A locator wrong in the same brief:** I wrote that 614(c)(1)–(4) *"applies behind the net"*.
  **Only (c)(1) is located behind the goal line.** (c)(2) is a pressure test with no location,
  (c)(3) is the privileged area, (c)(4) is the goal frame or boards. Acting on my version would
  have under-scoped the repair.
- **A rule cited without either of its qualifications:** I gave 4.8(b) as *"three stick-foul
  minors, or three head-contact minors, a Game Ejection in the same game."* **(ii) is scoped
  *"in Minor or Female divisions"***, and **Interpretation 2 counts a double minor as one
  infraction.** The corpus carries both; my brief carried neither.

**That is the same failure three times in one brief: a scope present in the book and absent from
my sentence.** It is the failure the crease-ceiling invention was, earlier in this round.

### ✅ Confirmed clean, stated plainly

**NHL 15.2 is clean across all 32 documents, in every layer** — no value, bullet, takeaway, table
cell or body sentence says a goal cancels everything owed. **The Rule 101 scope is clean across
all 32** — no layer places it in an age band. And the reviewer **independently confirmed the
central finding that `rules_primer.md:491–492` is sound**, on the same reading of 15.2¶2 and 18.2.

---

## The style guide had the defect it exists to prevent — and the census for siblings found none

`content_style_guide.md`'s grep-traps section was headed **"Four ways a grep lies about a
source"** and opened *"All four were observed"*. **The list stood at seven.** It had grown three
times and neither the heading nor the lede moved with it — in the document that teaches that a
number copied out of its owner goes stale silently.

Fixed by **removing the count from both**, not by writing "seven". ⚠️ **A count in a heading is a
second copy of the list, and the copy is what rots.** An eighth trap was added at the same time,
which would have made "seven" wrong within the hour.

**The eighth trap, from this round's own two findings:** the file you grepped may not contain the
book. `heo_intl_drill_symbols.txt` is **30 bytes** — the title alone, because the PDF is a scan —
so a grep for a player symbol in it returns zero while the symbol is on the page. And `carha.txt`
was **registered in two places and absent from disk**. **Registration is not existence, and
existence is not content.**

### ⚠️ The sibling census found nothing, and that is the finding

A corpus-wide sweep for headings whose count disagrees with their list returned **42 hits**.
**Forty-one were artefacts of the detector** — it was reading *section numbers* as quantities:
*"Part 2"*, *"Tier 3"*, *"Chapter 9"*, *"Round 21"*, *"3.1"*. Tightening it to quantifier position
left 16, of which the only genuine one was the style guide's own. `source-verifier.md`'s
*"The six traps"* has exactly six; `OPEN_ITEMS.md`'s *"THREE instruments"* has three.

**Three lessons, all previously recorded and all re-earned here:**
1. **A pattern good enough to dispatch on is not a defect list.** This is the third time in this
   round that a sweep would have damaged correct text.
2. **Closed review records are excluded on purpose.** A round-28 record describing what round 28
   found is *history*, not staleness. "Correcting" it would rewrite the evidence, which is worse
   than the mismatch.
3. **The one real instance was in the file that teaches the rule.** That is where these keep being
   found, because it is the file nobody reads adversarially — its authority is assumed.

---

## Fifth gate pass — BLOCK, and the block was the dispatcher's fault

The gate blocked on **C11**: `git diff --name-only` was empty when it started and listed **eight
files ten minutes later.** That divergence is mine. I dispatched three repair waves onto staged
files while the gate was auditing them, judging the parallelism worth a verdict I would have to
re-run anyway.

⚠️ **The gate is right and the judgement was wrong in one specific way.** Its C1/C2 line states
it exactly: the checkers *"passed at ~12:57… those runs read a tree that no longer exists."* A
gate pass over a moving tree is not a cheaper gate pass — **it is not a gate pass.** The only run
that counts is the one after every agent has finished and every file is staged, and this round has
now demonstrated that twice.

### What it cleared, and how

The four attacks it was pointed at all came back clean, and two of them by measurement rather than
by inspection:

- **C8 by file:** all 36 staged `content/` documents are named in this record. The ten-document
  gap from the earlier pass is closed.
- **Nothing traded away at the cap:** measured HEAD→index **per block** across the five documents
  of the last wave. **No block lost a fact.** Corpus facts 4,797 → 4,986. Every apparent
  shortening was a **split** that preserved the material elsewhere, and the hedges got *stronger* —
  *"may not reach 616 at all"* became *"this guide's reading of two rules, not a ruling"*.
- **The CARHA rows are true of the file that now exists:** 206,667 bytes, **99 form feeds = 99pp**,
  `PRINTED 2020` on the title page, and **all seven quotations located verbatim** with their rule
  numbers confirmed in context.
- **No self-narration, no stripped disclosure:** zero added `content/` lines match the narration
  patterns, and disclosure density **rises** in every class — `unverified` 4 removed / 31 added,
  `no published` 8/16, `disagree` 7/19, `no rulebook` 0/9.

It also **re-derived about fifteen rule claims from primary text itself**, including the
independent confirmation that USA Hockey 614(c) contains no exception of any kind.

### ⚠️ The most valuable sentence in the report is about the gate's own limits

> *"The 614(c) defect I did find was found by an agent, not by me; I found it because it changed
> under my hands mid-audit, and I confirmed it. **That is luck, not method** — and it is the
> strongest evidence available that the sample was not the whole."*

The gate audits a **diff**. Thirty-six documents were touched but only ~3,200 lines of them, and
the ~2,800 lines outside its sample were audited **structurally** — layer coverage, block and fact
counts, disclosure density, staleness sweeps — **not by reading every claim.** It says so, and it
names the shape it would have missed: a wrong claim in a file whose layers all moved together.

### Seven precision defects it found outside the blocking set

Two were mine to fix and are fixed: `sources/README.md` claimed **seven** CARHA quotations and
enumerated **six** — the corrected-count-with-old-enumeration shape, in the row written to correct
a count. Rule 65 supplies two and the second was unnamed. And this record carried a present-tense
*"No CARHA rulebook is on disk"* that it retracts 160 lines later; **`review_history.md` is
reconstructed from these records**, so the paragraph now carries a forward pointer at the point of
the claim rather than being deleted — what was believed at the time is the evidence.

The other five are citation-precision defects dispatched to their files: a CARHA sentence
attributed to 65(b)/(c) that is printed in Rule 65's unlabelled preamble; *"8.5 opens with"* a
phrase that is in 8.5's **Interpretations**; Hockey Canada 9.5's pitchfork limb stated without the
book's *"neck or head area causing injury"* condition (**over-warning, so safe-directional**); a
true clause cited to Rule 16.2 that NHL **24.6** actually supports; and a **new, unexplained**
citation divergence between two documents corrected in this same round.

---

## ⚠️ The correction was wrong in the other direction — and two independent readers made the same mistake

The repair brief for the fabricated USA Hockey freeze exception said, flatly, that **Rule 614(c)
has no exception of any kind**. The commit-gate said the same thing, independently, from its own
reading of the primary text. **Both of us were wrong**, and the repairing agent caught it before
writing.

`sources/usah_casebook.txt:12798–12805`, **Casebook Rule 614(c) Situation 7** — a goalkeeper in
the crease dives on a puck outside it and their momentum carries them out:

> *"No. Rule Reference 614(c) and Glossary. As long as some part of the goalkeeper's body is in
> contact with the goal crease when initial contact with the puck is made, this is considered to
> be in the 'act of playing goal'."*

**So the original corpus text was wrong and the correction would have been wrong too**, in the
opposite direction. The carve-out is real — but it is **body** contact, tested at the **first
touch of the puck**, reached through the Playing Rules glossary's *"act of playing goal"*. It is
not a skate-contact licence, and it does not reach a goalie smothering a puck in the corner.
Situations 9, 11 and 12 mark its boundaries; Situation 6 decides the same shape the other way.

⚠️ **The lesson is about method, not about this rule.** USA Hockey publishes the Playing Rules and
a separate **476-page Casebook**, and both are on disk. **A negative existence claim verified in
`usah.txt` alone is not verified.** Two readers — a dispatcher and the gate whose entire job is
catching this — each grepped one book, found nothing, and asserted an absolute. **Neither opened
the second book.**

Every "no exception" claim in the repaired text now reads **"no exception in its text"**, with the
Casebook carve-out and its limits stated beside it.

### A silent narration failure nobody had documented

`md_to_speech.py` sets `TABLE_MAX_CELL_CHARS = 200`, and **one over-long cell drops the ENTIRE
table** from narration into a "not narrated" pointer. Repairing the glossary row — the critical
that lived in the table layer — could therefore have silenced the whole positions table for every
listener, and nothing would have reported it. The new cell is **163 characters**. Checked, not
assumed.

### Three audio defects in the repair's own new text

`Interpretation 3(iii)` voices as *"Interpretation three(iii)"* — the citation rules handle
`63.2(vii)` but not `3(iii)`. Two new values opened on a dangling reference whose antecedent was
in the previous `<p>`. And a `✅` copied in from the style guide was **the only one in `content/`**
and reached the SSML as an unhandled `WHITE HEAVY CHECK MARK`.

**A repair is new text, and new text has not been reviewed.** All three were found by the agent
reading its own output as audio, not by any checker.

### Sources blocks had never carried the rule the body relied on

`614(c)` was cited in **no Sources block** in either `goaltender.md` or `faceoffs.md`, despite
both documents relying on it in prose. The rink-map entry listed only `63.2(viii)`. ⚠️ **A Sources
block is a claim about what was read, and nothing checks that the rules the body leans on appear
in it** — the second time this round that gap has produced a finding.

---

## The Hockey Canada two-limb census — and the direction nobody had ever attacked came back clean

A repair agent ended by handing over a list of Hockey Canada clauses that carry **two limbs** — a
major plus game misconduct **at the referee's discretion on the degree of violence, with nobody
hurt**, then the same pair **mandatory on injury** — and a shorter list that is **injury-only**.
That handover, not the repair, was the valuable half.

### ⚠️ The handed-over lists were wrong in three places, and I relayed them without checking

Verified in `sources/hc_layout.txt`, clause by clause:

- **7.8(b) kneeing** (~5060) is **two-limbed** and was **on neither list**. Worse: `grep` over all
  of `content/` finds **7.8(b) nowhere in the corpus.** `rules_primer.md` names 7.8(a) and 7.8(c)
  and skips the rung between them, so the ladder reads double minor → match with a major plus game
  misconduct silently missing.
- **8.5(b) interference with the goaltender** (~5561) has **THREE** limbs, not two: discretionary
  on violence; **mandatory for charging the goaltender, no injury needed**; mandatory on injury.
- **7.7(b) has NO discretionary limb at all.** It opens *"In Junior and Senior divisions, a Major
  penalty and Game Misconduct penalty **will be assessed** for any Head Contact infraction with a
  high degree of violence"* — mandatory. **Describing it as "discretionary plus mandatory" would
  have been a fresh half-rule**, and the brief I wrote invited exactly that.

**8.4(b) was also missing from both lists**, and **9.1(c) butt-ending** is a two-limbed *match*
clause the lists did not contemplate.

### Thirteen forward defects, and eleven of them cluster in one document

The overwhelming majority are in **`rules_primer.md`** — the corpus's foundational document.
Boarding, charging, slashing, kneeing, body-checking ×2, head contact, cross-checking. Two more
are in `zone_entries.md` (checking from behind), one in `body_contact_and_battles.md`.

⚠️ **Three of them are not thin, they are actively false, because a contrast sentence sits beside
them.** `rules_primer.md:380` states Hockey Canada's boarding tier as injury-gated and then says
*"Under the IIHF book — the British one — **nobody needs to be hurt for you to be ejected**"*. The
sentence tells the reader in terms that under Hockey Canada somebody does. The same construction
appears at `:381` (charging, where the IIHF limb is explicitly marked *"at the referee's
discretion"* and Hockey Canada's is not) and `:366` (slashing).

⚠️ **And `:366` contradicts eight other sites in this corpus that state it correctly.** A
foundational document is the last place a claim should be the outlier, and it is where the round
found it.

### ✅ The inverse error does not exist — checked for the first time

The mirror defect — claiming *"no injury needed"* about a clause that **is** injury-gated —
had never been searched for. Every site citing **8.1(b) holding, 8.2(b) hooking or 8.6(b)
tripping** was tested for that shape across body, facts, table and Sources.

**Zero hits, at all 14 sites.** Several state the negative explicitly and correctly, quoting the
book's *"injures an opponent"* wording.

**A clean result on a direction never attacked is a finding**, and it is the one this round is
least likely to have produced by luck: the sweep that would have "repaired" those 14 sites was
proposed twice.

### A layer failure with a clean signature: 18 short, 12 complete

For 8.5(b), the **long body passages carry all three limbs and the compressed restatements
dropped one** — 18 sites short across facts, Common Mistakes and Key Takeaways, 12 complete.
**The document is not wrong; the summary layer is.** That is the cleanest instance of the
summary-layer failure this corpus has recorded, because the correct form is sitting in the same
file every time.

### 41 candidates read and cleared

8.3(b) interference at **17 sites, every one carrying both limbs verbatim**; 8.7(b) clipping at 8;
8.8(b)/(c) slew-footing at 9; 7.7(b) at 6, all correctly identifying it as mandatory rather than
discretionary. ⚠️ **`defending_the_rush.md:466` reads exactly like the defect and is correct.**
**Fourth time this round that reading, not matching, was what decided it.**

---

## A brief wrong in five ways, one item refuted outright — and the agent found more than it was sent for

Six citation-precision items were dispatched from the gate's non-blocking list. **Four were
repaired, one was refuted, and the brief was wrong about the location of nearly every one.**

| What the brief said | What the book says |
|---|---|
| The CARHA blue-line sentence sits in Rule 65's **preamble, before (b)** | It sits **unlabelled between (a) and (b)** — (a) and its three Notes run above it |
| The HC 8.5 phrase is in **8.5's Interpretations** | ⚠️ **It is not.** It opens the paragraph headed `Goal Crease Area:` in 8.5's **own body text, before 8.5(a)**; the Interpretations start 35 lines later |
| The 8.5 defect is at `defensive_zone_coverage.md:160` | The body and Sources **already said it correctly**. The defect was in the **facts** line |
| `special_teams.md:385` cites a clause 16.2 does not support | ⚠️ **Refuted.** NHL 16.2 states it in terms, and IIHF 16.2 is verbatim identical |
| The 63.2(v) sites are at `:187` and `:37` | `:533` and `:678`/`:689`. **The body already quoted the NOTE in full**; only the facts line dropped the limb |

⚠️ **Every one of those errors points the same way: I named a body site where the defect was in the
facts layer, and named the layer that was already right.** The rule the whole round rests on —
test each layer separately — was violated by the brief that dispatched it.

### The refutation found a real defect underneath itself

`special_teams.md`'s penalty-shot clause was correctly cited after all. But the **adjacent** limb —
*"a major is served in full"* — rested on 16.2's scope alone where **NHL/IIHF 20.2 says it
affirmatively**, and `rules_primer.md:534` **already cited 20.2 and 24.6 correctly**. So
`special_teams.md` was the outlier, and nothing in the brief pointed at it.

### And one divergence was not defensible both ways

I dispatched the `10.2(a)(iv)-(v)` divergence saying *"both are defensible; the divergence is new
and unexplained"* and warning against converging them by reflex. **The agent settled it against my
framing:** HC 10.2(a)(v) locates *the infraction* — *"when the infraction occurs inside the
offending team's goal crease"* — so it **cannot** carry a claim that the **puck's** location is the
test. **4.11(a)(v)** is what does. ⚠️ **`game_management.md`'s own Sources block already listed
4.11(a)(v) with the right limit; its facts and body did not.** A third document with the answer
sitting in its own Sources layer.

### One sentence, three files, wrong the same way — found outside the brief entirely

`shooting.md`, `winger.md` and `center.md` each carry *"Rule 8.5 opens the same way — 'Unless the
puck is in the goal crease area…'"*. **Rule 8.5 opens** *"Goaltender interference refers to any
attacking player…"*. The agent that found it owned none of those files and **reported rather than
reaching**, which is what kept three concurrent waves from clobbering.

### A pitchfork condition, found by reading the audio rather than the markdown

Hockey Canada 9.5's *"pitchfork action in lifting the stick"* limb requires *"contact to the neck
or head area, **causing injury**"*. A **layer test** found three sites without the condition and
three with it — and the third defective site, in **Key Takeaways**, was in no brief and was found
only by reading the rendered SSML.

---

## A relayed finding undercounted again — and the site it missed was worded differently

I relayed the wrong-locator finding to the agent holding two of the three files, naming
`winger.md` and `center.md`. **There were three.** `goaltender.md` carried the same
misattribution as *"The bar opens the same way"* — the same false claim in different words.

⚠️ **A phrase-grep would not have found it, and neither did the agent that reported it** — it
matched on the sentence it had seen. The third site fell only because the receiving agent read its
own files instead of trusting the message. **Fifth relayed count in this round to come in short,
and the first where the miss was a paraphrase rather than an omission.**

### My stated reason was wrong even where my conclusion held

I wrote that in `defending_the_rush.md` *"the immediately preceding facts line carries the
scope."* **It does not** — the preceding line carries only a conditional, and the scope sits two
lines above that. The agent said so plainly: *"had I acted on the stated reason without reading, I
would have 'fixed' `:343`, which needs nothing."*

**A right conclusion with a wrong reason is still a defective brief**, because the reason is what
the agent acts on.

### The 8.7(b) clearance holds, and it explains why 8.5(b) is the outlier

`defending_the_rush.md:466` was cleared again on a second reading: **HC 8.7(b) genuinely has only
two limbs and no charging limb** — which is precisely what makes 8.5(b)'s third limb the exception
rather than the pattern. **The clearance is not "this one is fine"; it is the reason the defect
class has the boundary it has.**

### A cap hit at exactly 300, and a checker that told two agents different things

`body_contact_and_battles.md`'s net-front block carries Hockey Canada's 7.3 ladder with **no trace
of Rule 7.3's scope** — only a gesture at *"the non-check books"*, which is a different
proposition from the book's *"divisions of U13 and below, in female hockey, and any other
divisions approved by a Member"*.

One agent measured the value at **302 characters and failing `check_facts`**, stable over three
runs. Measured centrally minutes later: **exactly 300, and the checker passes.** Something moved
it in between. ⚠️ **This is the race CLAUDE.md documents, in its subtler form** — not a phantom
failure, but a *real* finding whose mechanical symptom evaporated while the content defect
underneath it stayed. **Had the length been the whole report, it would have been dismissed as a
race artefact.** It was not: the missing scope is the defect, and the cap only decides that the
fix must be a split rather than a trim.

---

## Two agents contradicted each other on the same rule, and neither was right

One census reported that **Hockey Canada 7.8(b) appears nowhere in `content/`**. A later agent
reported that **"7.8 Kneeing and 7.9 Roughing are cited nowhere in `content/`, so nothing is wrong
there."** Both statements are about the same corpus, and they cannot both be true.

**Resolved centrally by grepping, which is what the parallelism rule requires after every wave:**

- **7.9 IS cited** — `rules_primer.md:384` names **7.9(c)** as one of Hockey Canada's four routes
  to a match penalty for an elbow. ⚠️ **The second agent's negative existence claim was simply
  false**, and it was made about files it did not own and had not read.
- **7.8 was cited too** — `rules_primer.md:385` named 7.8(a) and 7.8(c). The first census was right
  that **7.8(b)** — the rung between them — was absent, and wrong to be read as "7.8 is absent".
- **And the repair had already landed** while the second agent was writing. `:385` now carries
  7.8(b) with both limbs quoted, *"with nobody hurt"*, and 7.8(e)'s automatic game misconduct.

⚠️ **The dangerous half is the second claim, not the first.** *"Cited nowhere, so nothing is wrong
there"* would have closed the kneeing row as a non-issue. **A negative existence claim is
unfalsifiable by ordinary review** — the style guide says so — and this one was asserted by an
agent that had every reason to believe it and no basis for it. It survived only because two agents
disagreed in writing and the disagreement was checked.

**This is the value of the parallelism rule that costs the most to follow.** Neither agent was
careless; each reported what its own search returned. **The contradiction was the finding.**

### The same premise has now been wrong three times in one round

*"The immediately preceding facts line carries the scope"* — I wrote it into three briefs. It was
false in `defending_the_rush.md` (the scope sat two lines up), false at
`body_contact_and_battles.md:355` (the preceding line was a `Never:` about non-checking leagues;
the division list sat two lines *after*), and false at `on_ice_communication.md:218` (the preceding
line carried *"where checking is barred"* and never the division list).

⚠️ **I also wrote "every other 7.3 site in the corpus carries the scope inline." A facts-layer
census found three more bare sites** — `defending_the_rush.md:343` and `:344`, and
`defensive_zone_coverage.md:453`. **The reassurance in the brief was the least verified sentence in
it, and reassurances are not checked because they are not the ask.**

### A cap that cost a verbatim quotation, reported rather than hidden

`on_ice_communication.md`'s *Moving a screener* block sits at `HARD_MAX = 11`, so no fact could be
added. Fitting Hockey Canada's division list into two 300-character values **cost the IIHF 101.1
verbatim quotation**. The rule number, the tier and the women's-hockey scope all survive, and the
body blockquote eleven lines below carries the quotation in full.

**No hedge, citation or scope flag was traded** — but a quotation was, and the agent said so
plainly instead of quietly. ⚠️ **The alternative it identified is the real fix and it could not
take it**: splitting the section on the seam its body already uses would break an anchor referenced
twice in the file and once in `site/src/styles/global.css`. **A cap forced a worse outcome because
an anchor is load-bearing across the site layer** — which no facts-layer rule anticipates.

---

## ⚠️ A brief quoted the corpus saying something the corpus never said

The primer wave repaired **24 sites**. It also found that one of my briefs put a sentence in
quotation marks and attributed it to `rules_primer.md`:

> *"reaches a major plus a game misconduct and makes it mandatory on injury"*

**`grep` returns zero hits for that string, corpus-wide.** The line actually reads *"a major plus
game misconduct at 9.2(b) — mandatory where it injures"*. **The defect was real. The quotation was
invented.**

⚠️ **This is non-negotiable 1 — never fabricate a quote — applied to a brief rather than to
`content/`, and it is the first time in this round the failure has taken that form.** Every other
brief error here has been a wrong number, a wrong locator, a dropped scope or an undercount. This
one manufactured evidence. It happened because I paraphrased a finding into quotation marks while
compressing three reports into one brief, and **nothing in this project's method checks a brief
before it is dispatched.**

Three more in the same brief: **the named model passage was the wrong passage** —
`body_contact_and_battles.md:1181` is about the high-sticking waist floor, not 7.6(b), and the real
model was at `:479`. **Three more model line numbers pointed at nothing at all** — a bare fence, a
checking-from-behind passage, a blank line. And I wrote *"EIGHT other sites"* above a list of
**nine**.

### Four defects the brief did not have, two of them actively false

In a file the same agent owned, `defensive_zone_coverage.md` stated **7.6(b) in two of its three
paragraphs** across four layers. Two were not merely short:

- `:467` called the cross-check limb *"the only one of these net-front escalations that does not
  wait for an injury"*
- `:674` concluded *"the lift escalates when it hurts somebody"*

**Both are contradicted by 7.6(b)'s own first paragraph**, which is discretionary on the degree of
violence with nobody hurt. The lift-versus-cross-check argument survives on the corrected footing:
the cross-check is a major **automatically**; the lift reaches that tier on the referee's read of
the violence **or** on injury.

### The repair produced the defect it was sent to remove, and the self-re-read caught it

Its first fix wrote *"7.6(b) reaches a major plus a game misconduct **two ways**"* — **a cap on a
three-paragraph clause**, which is precisely the shape it had been dispatched to delete. It also
struck an unsupported comparative it had written into the boarding site (*"a different trigger, not
a stricter one"*) on the ground that **nothing establishes the two triggers are equally strict.**

**A repair is new text, and new text has not been reviewed.** That is now true of five separate
waves in this round, every one of which found a defect in its own output that no checker sees.

### And a corroborating negative, taken properly this time

`grep -rn "7\.8(b)" content/` returned **zero corpus-wide** before the fix — confirming the earlier
census and refuting the later agent's *"7.8 is cited nowhere, so nothing is wrong there."* The rung
between a double minor and a match penalty was missing from the corpus entirely, and is now written
with both limbs and 7.8(e)'s automatic game misconduct.

---

## The last wave: a brief that named a site which was already correct

**Item 1 was half wrong.** I sent two bare Rule 7.3 sites in `defending_the_rush.md`. **One was
bare.** The block holds four 7.3 values and three of them already carried the scope in full —
including the one I named, which reads *"where Rule 7.3 applies (U13 and below, female hockey, and
any division a Member of Hockey Canada approves)"*. **Had the agent trusted me it would have
rewritten a correct value.**

**And the 8.7(b) site I flagged as a facts value is body prose plus a Sources note.** Confirmed
correct for the third time: HC 8.7(b) has exactly two limbs, discretionary *"based on the degree of
violence of impact (including the impact with the ice or boards)"* and mandatory on injury, **no
charging limb** — which remains the reason 8.5(b) is the outlier rather than the pattern.

**The scope sentence is at `hc_layout.txt` 4716–4717**, not the 4732–4733 I have now given three
times. 4732 is inside the body-checking definition.

### A cap resolved the right way, and the seam was real

`zone_entries.md`'s delayed-offside block was at `HARD_MAX = 11` and the consequence would not fit
inside any existing value — the only one with headroom needed both books and their tiers in 85
characters. So the agent took the style guide's prescribed route and **split the section on the
seam its body already used**, checking first that no anchor broke: it grepped
`site/src/styles/global.css`, the Astro pages and the components and found none pointing into that
document. ⚠️ **That is the check the previous wave could not pass**, where an anchor referenced from
the site layer forced a verbatim quotation out of a facts block instead.

**A by-product argues the seam was genuine:** the section's introduction reads *"Three things
change what you do at the line:"* and was followed by **four** bullets. Moving the fourth out makes
the count true — a defect nobody had reported, closed as a side effect of a cap.

### Two self-catches, both audible only

- A value ended one sentence and opened the next on a bare `7.3(b)`, which the renderer voiced as
  *"…and any Member-approved division. **seven point three, clause b** lets the referee…"* — a
  sentence beginning on a number.
- A first draft gave USA Hockey *"at least"* a minor and Hockey Canada a flat one. **Voiced alone
  that caps Hockey Canada at 7.5(a).** Now *"at least"* on both.

**Neither is visible in the Markdown.** Sixth consecutive wave to find a defect in its own new text
by reading the audio.

### Four findings left open, deliberately

- **HC 7.5(a) Interpretation 3** carves out marginal accidental contact from playing the puck —
  *"Provided that contact is marginal in nature and does not endanger the safety of the opponent, no
  penalty may be assessed"*. Neither the body nor the block mentions it. ⚠️ **Omitting it makes the
  corpus more conservative, not less**, so it was left — but it is a real carve-out and it needs a
  decision, not silence.
- **The match tiers are missing from that section entirely** — HC 7.5(c) and USA Hockey 608(c)
  appear in neither the bullet nor the block.
- `defending_the_rush.md:371` — `Never: Ride an opponent into the boards in any non-check adult or
  youth league — the instruction above is for checking leagues only`. **Voiced alone, "the
  instruction above" has no antecedent in its own `<p>`.**
- **`check-arrivals.mjs` was not run by that agent** — `node` was not on its shell's PATH. Run
  centrally.

---

## Two uncounted figures caught in the commit message itself, before it landed

The draft commit message said *"around sixty sites"* of the Hockey Canada two-limb repair. **I
never counted them.** It was an impression formed by adding up nine agent reports, several of which
overlapped and none of which was counting the same thing.

It also said the primer's slashing line *"contradicted **eight** other sites"* — a figure relayed
straight out of a census that **stated eight above a list of nine**, an error already recorded on
this page. Counted centrally: **twelve sites cite 9.3(b)**, one of them the defective line itself,
and not all eleven others state the limb in the form the claim describes.

**Both replaced by pointers, not by corrected numbers.** The subject line lost its figure too.

⚠️ **This is the round's own lesson applied to its own commit**, and it very nearly failed it: the
git history is part of the defect record — `review_history.md` is reconstructed from it — so a
figure invented in a commit message becomes evidence. **A number copied out of its owner goes stale
silently; a number that never had an owner was never true.**

---

## Sixth gate pass — BLOCK, and the correction had been corrected wrongly twice

### ⚠️ Three attempts at one rule, three wrong absolutes

| Version | Claim | What the books say |
|---|---|---|
| The corpus | *"the sole exception is a goalie keeping skate contact with the crease"* | **614(c) writes no exception in its text.** That clause is the NOTE to NHL 63.2(viii), the trapezoid rule, and it excuses *playing* the puck |
| The correction | *"no exception of any kind"* | **The Casebook publishes several** |
| The repair | *"the one carve-out USA Hockey does publish"* | ⚠️ **At least six — and three require no crease contact whatever** |

Verified centrally in `sources/usah_casebook.txt`. **Situation 8**: skates out of the crease,
catches the puck in the air, holds it → **No**. **Situation 10**: outside the crease, stops it
between the pads → **No**, with the limit *"if the goalkeeper had sufficient time to drop the puck
and play it with no attacking players in their immediate vicinity"*. **Situation 12**: *"completely
outside of the goal crease and lying prone on the ice"* → **"No, if the puck is within their
privileged area in front of the goal line"** — and it states its own inverse. **Situation 5** is a
delayed-penalty case decided by `614(c.1)` and the three-second rule, **not** by the act of playing
goal.

⚠️ **This record had Situation 12 wrong too**, calling it a boundary of the carve-out.

**And the text did not merely omit them — it foreclosed them**, with *"not a licence to go and get a
puck from anywhere you can still reach the crease from"*. **A goaltender taught that declines to
cover a puck they were entitled to cover, in front of their own net, under pressure.** The safety
consequence runs opposite to the original defect.

### ⚠️ I repaired a table and left the identical defect two sections below it

`.claude/agents/rules-verifier.md`'s source table was rewritten to name all 22 books. **Method step
5 still told verifiers to grep `usah_case.txt`** — a filename **line 72 of the same file lists among
"four of which do not exist."** A verifier following the method greps a name the file itself calls
fictitious, finds nothing, and concludes there is no casebook. **That is the mechanism behind all
three wrong versions above.** The header also still claimed the books live in the session
scratchpad, contradicted two lines later.

**This is the shape a gate block already named earlier in this round:** *"appending a correction is
not removing the arithmetic."* Same failure, different file, one round apart.

### ⚠️ The gate's most valuable output is a ratio, not a finding

> **423 distinct negative-existence phrasings** in this round's added `content/` lines. **One
> attacked. It was false.** *"That hit rate, not the finding, is the thing to act on."*

It also declined to evaluate C10 rather than accept a reported build — *"I am relying on the
reported build, which is the one thing this gate is told never to do"* — because `node` on its shell
resolved to a broken nvm wrapper. **A gate that reports its own blind spot instead of passing the
condition is worth more than one that clears it.**

## The site review could not open a browser, and said so

Chrome's safety-category service refused every page for the whole session — **including
`example.com`**, which is the diagnostic that proves it was not a localhost policy. **0 of 4
viewport × theme cells. No screenshot exists.** The reviewer reported *"no visual finding as seen"*
and ran a static analysis instead, marking every computed result as arithmetic rather than
observation.

⚠️ **It also corrected itself mid-report**: a first sweep found 22 unwrapped tables and was **wrong**
— the plugin emits ~38 blank lines between wrapper and `<table>` and its lookback window was too
short. **All 47 tables are wrapped.**

### ⚠️ A spinal-injury warning renders as the lightest text on its page

`figure.diagram figcaption` is **0.9rem in `--text-muted`** beside 17px `--text` body prose. A
caption **added this round** ends with *"the head-down collision that ducking produces can break
your neck at walking speed"* — **in the faintest text on the page, with the ⚠️ getting no treatment
at all.** Three more captions are in the same state and pre-date the round.

**The prose pass cannot reach them, and its own comment says why:** captions come from
`site/src/data/diagrams.json`, not from the markdown the plugin walks. **Fixed centrally** by
splitting a caption at its first warning glyph and giving the remainder the same `.warn-inline` run
the prose pass uses — one mechanism, not a second. The descriptive half stays muted, because
promoting it too would flatten the distinction the fix exists to make.

**The residue of untreated warning glyphs has grown from a documented 12 to 27** — 704 glyphs,
677 treated. **Six sit inside GREEN note callouts: a warning wearing the advisory colour**, which is
the inverted hierarchy literally rather than by analogy.

**Verified after rebuild: 118 figcaptions, 4 carry a warning glyph, all 4 treated.** ⚠️ **And the
first verification returned ZERO for all three counts, including zero bare glyphs** — which is what
gave it away, since the defect had just been measured at four. The built HTML puts the caption on
its own line, so a line-based `grep -o` matched nothing. **That is trap 4 in this project's own
list, hit for the second time in one session by the person who extended the list.**

### Three findings recorded rather than fixed, to keep the round converging

- **`/analytics.js` ships and is service-worker-precached.** It is a Google Analytics 4 bootstrap
  that reads a `<meta name="ga-measurement-id">`. **No built page carries that meta tag and no page
  loads the script**, so nothing is ever sent — but `sw.js` precaches it, so every visitor downloads
  it. ⚠️ **The "this site sends nothing to third parties" premise is currently true by accident of a
  missing meta tag.** Pre-existing; not this round's.
- **Two identical amber panels back to back in `body_contact_and_battles.md`**, with zero characters
  between them: **79 characters carrying the rule a reader must leave with, 2,087 carrying the
  four-book scholarship.** Same border, same ground, 26× the size. ⚠️ **The finding is not "too much
  amber" — page-wide it is 5.2% — it is that this round added amber to the commentary and none to
  the rule.**
- **The on-page contents does not track the heading you are on** — no `IntersectionObserver`, no
  `aria-current`, no current class. On a 64-entry sticky rail that is a real navigation cost.
  Pre-existing.

---

## The fourth version of the freeze rule — and the brief for it was wrong in four more ways

The repair read **Situations 1 through 14 in full** rather than the six I named, and located every
quotation it wrote by normalised string match — **14 of 14**. Verified centrally:

- ⚠️ **Situation 11 does not answer Yes.** It answers **both ways in one sentence**: *"No, if the
  attacking team is in a position to pressure the goalkeeper. Yes, if the goalkeeper is not being
  pressured and has an opportunity to play the puck with their stick."* Only **6 and 9** are flat
  Yes. **I had listed 11 among the Yes cases** — which would have taught the pressure test
  backwards.
- ⚠️ **Situation 8 carries the same proviso as Situation 10**, word for word: *"If the goalkeeper
  had sufficient time to drop the puck and play it with no attacking players in their immediate
  vicinity, however, a minor penalty shall be assessed."* I attributed it to 10 alone. **Taught
  without it, Situation 8 licenses a free catch-and-hold.**
- ⚠️ **Situation 14 was missing from my brief and it changes the geography.** *"Does the
  goalkeeper's Privileged Area include the area behind the goal line? **Yes** … extends to the
  closer end boards."* So **614(c)(1) and 614(c)(3) are two separate bars, not one** — which is
  exactly why Situation 12's inverse names them separately. **Without it a reader collapses "behind
  the goal line" into "outside the privileged area" and mis-scopes both.**
- **Five sites were six.** `goaltender.md`'s **Key Takeaway 8** carried *"its Casebook excusing
  **only** a dive begun with some part of your body touching the crease"* — the same defect, in the
  layer a listener hears last.

### ⚠️ The document already held the correct test, two sections earlier

**Rule 610(b)'s own Note** states the act-of-playing-goal test for freezing generally — *"A
goalkeeper may only cover the puck while in the act of playing goal … and any action that makes the
puck unplayable without an immediate scoring opportunity must be penalized"* — and it was **already
quoted in `goaltender.md` two sections above the foreclosing passage.** The document had the right
test in one section and forbade it in the next.

**Fourth document in this round found holding its own answer in another layer**, after
`game_management.md`'s Sources, `defensive_zone_coverage.md`'s body, and `special_teams.md`'s
sibling primer.

### The repair described the test instead of the tally, and attacked its own absolutes

It replaced the count with the three deciders the Casebook actually turns on — **where the puck is**,
**pressure**, and **whether there was time to play it with the stick** — and added a Common Mistakes
entry for the inverse failure the round created: *"Under USA Hockey, declining a cover you were
entitled to make."*

It then attacked its own new negative-existence phrasings, unprompted, and softened three: *"neither
mentions crease contact at all"* → *"neither answer turns on crease contact"* (both do mention the
crease); *"a different book"* → *"the Casebook"* (it is bound in the same volume); and *"no reading
gets you past them"* → the Casebook's own *"must be assessed"*. ⚠️ **The surviving absolutes each
rest on the exhaustive read of 1–14, and the word "deliberate" in "none reaches a deliberate cover
in the corner" is load-bearing** — Situation 13 gives no penalty for a puck shot into an already-prone
goalkeeper.

**Two more audio defects in its own new text:** the Casebook's citation style `614(c.1)` and
`409(a Note)` reached the renderer unrecognised and voiced as *"four hundred and nine(a Note)"*, and
`Situations 8-12` read as *"Situations eight-twelve"*.

---

## The negative-existence census: 24 upheld, one false, and the false one is a penalty in three books

The gate's ratio — **423 phrasings, one attacked, one false** — was turned into a proper census.
Measured over the whole corpus rather than the round's added lines: **1,597 lines** carry a
negative-existence phrasing, **823** also name a book, rule or penalty, and **514 match sites across
467 lines** are the high-consequence shapes. **26 claim-clusters covering ~60 sites were attacked —
about 12% of the high-consequence set**, ranked by whether a reader takes a physical risk or forgoes
a legal action on the strength of the absence. **The verifier states the 88% plainly and does not
license treating it as verified.**

### ⚠️ FALSE — a restriction the corpus says does not exist

`rules_primer.md:618`, repeated in the Sources layer of `center.md` and `defender.md`:

> *"nothing in the 2025-29 playing rules restricts **where a goalkeeper may play the puck**"*

**The trapezoid half is upheld** — `trapezoid`, `designated area` and `restricted area` all return
zero in both USA Hockey volumes. **The general half is false.** `usah.txt` ~2779, **Rule 407(c)**:
*"If a goalkeeper deliberately participates in the play in any manner when they are beyond the center
red line, a minor penalty shall be assessed."*

### ⚠️ And the determining factor is REVERSED between the books

| Book | Rule | The test |
|---|---|---|
| NHL | 27.7 | *"The position of the **puck** is the determining factor"* |
| IIHF | **27.6** | the same wording — **the puck** |
| USA Hockey | 407(c) + Casebook Situation 13 | *"the position of the goalkeeper's **skates** and not the puck"* |
| Hockey Canada | 4.13(c) + **Interpretation 2** | *"the position of the goaltender's **skates** and not the position of the puck"*, penalised through **Rule 8.3(a) Interference** |

⚠️ **`grep -rn "407(c)\|4\.13(c)" content/` returns ZERO.** Neither rule is anywhere in the corpus,
and `rules_primer.md:614` states the red-line rule with the **puck** test unqualified. **A two-minute
penalty in three of four books, on a test the corpus has backwards for two of them.**

**And a numbering collision four lines apart:** `:614` cites the red-line rule as *"27.7"* and `:618`
cites the **IIHF trapezoid** as *"27.7"*, both unlabelled by book. The IIHF numbers the red-line rule
**27.6** — so a British reader following `:614` lands on the wrong rule. `goaltender.md:44` already
flags the divergence, making this a **propagation gap, not an unknown.**

### The upheld results, which are the point of running it

**24 clusters held**, several stronger than the corpus claims. *"The IIHF book writes no match
penalty at all"* — **zero** hits across both editions **and** both Situation Handbooks. *"No rulebook
recognises a legal skater-on-skater screen"* — checked across **seven books** including CARHA, the
In-House Rules and the EIH regulations. *"Rule 83 appears nowhere in the In-House Rules"* — **zero
hits including page numbers**. *"NHL sets no neck-guard requirement"* — **zero in both extractions,
book-wide**, which is stronger than the sentence claims. And the *"no goaltender-vision provision"*
cluster held **including its count**: Hockey Canada has exactly two references and both are
crease-scoped.

⚠️ **An upheld negative is worth more than it looks.** Each of these is the shape the style guide
calls unfalsifiable by ordinary review — and the sweep that would have "corrected" them was the
tempting move.

### An edition trap the census surfaced without being asked

**IIHF 46.6 "Defender – Unwilling Combatant" confers a status in 2025/26** — the British layer's
book — **and does not exist under that name in 2026/27**, where it survives only as a clause under
the aggressor rules and is materially weaker: *"may be considered as an 'unwilling combatant' and the
automatic game misconduct penalty **may be waived at the discretion of the referee**."* **A status
became a discretion.** The claim is correct as scoped; the corpus's IIHF-edition tracking now has a
named instance.

### ⚠️ What the census says it could not have found, and it is the important half

> *"Anything that is wrong while being positively stated. I searched for absences asserted… Finding 1
> was caught only because its negative half was false; had it said 'USA Hockey restricts goalies only
> beyond the red line' I would never have looked."*

It also flagged that **an upheld absence may not be absent in the edition the reader holds** — it
checked both IIHF editions for three claims and **not for the other 21** — and that every *"the
In-House Rules add none"* verdict is bounded by the fact that **no EIH or SIHA Rule Bulletin has ever
been obtained**, while the In-House Rules say bulletins are issued from time to time.

---

## The red-line repair — and a brief that sent an agent to add a citation the corpus already had

**Two more brief errors, both of the "already correct" kind:**

1. **I told the agent Hockey Canada Interpretation 3 to 6.11(a) was authority the corpus had
   "earned and not taken."** `rules_primer.md:228` **already quotes it verbatim** — *"one skate above
   the blue-line (not touching the ice) … OFF-SIDE"* — and `winger.md`'s Sources entry **already names
   it**. Only `winger.md`'s body argues from 6.11's operative wording instead, which is a defensible
   choice, not a gap.
2. **The `:614`/`:618` "numbering collision" was not one.** `:614` cited 27.7 for the red line —
   **correct for the NHL** — and `:618` cited 27.7 for the trapezoid — **correct for the IIHF**. Both
   were right in their own book. ⚠️ **The defect was that neither said which book**, which is a
   labelling failure, not a renumbering one. **Fixed by labelling. Had the agent taken my framing it
   would have renumbered a correct citation.**

### A four-book split found by checking a disclosure instead of writing it

The agent was about to disclose that USA Hockey and Hockey Canada were unchecked on the
leaving-the-crease rule. **Checking refuted the disclosure and produced a genuine four-book split:**

- **NHL 27.6** carries two express carve-outs — a neutral location where the altercation is at the
  crease, and no minor where the goalkeeper is out for an extra attacker.
- **USA Hockey** prints no such offence in its playing rules and assesses it in the **Casebook under
  Rule 615** — Situation 26 no penalty, Situation 27 a flat *"Yes"* to going to the bench.
- **Hockey Canada Interpretation 1 to 7.10(a)** is the strictest of the four: *"If they do so on
  their own accord, they are to be assessed a Minor penalty for leaving their crease during a
  fight."*

⚠️ **A disclosure is a claim, and it can be false in the safe direction.** *"I could not check this"*
is honest only when it is true; here the check was one grep away and the answer changed the
instruction. **The resolution satisfies all four books: stay in the net, and get permission before
moving.**

### The remaining propagation gap, and it is in the owner

**`goaltender.md` carries the red-line rule at five sites, all correctly labelled NHL 27.7 / IIHF
27.6, and none carries USA Hockey 407(c), Hockey Canada 4.13(c), or the reversal.** The worst is a
bare `Rule:` fact in the extraction layer — *"In front of the goal line there is no restriction,
beyond not participating in the play past the centre red line (NHL Rule 27.7; IIHF Rule 27.6)"* —
**voiced alone, it tells a USA Hockey or Hockey Canada goaltender the rule is somebody else's.**

⚠️ **The owner document was the last to learn it.** Three borrowing documents were repaired first,
because the census found the defect through their Sources layer.

### A new table row that reaches no listener

The primer's §10 comparison table gained a row for this. ⚠️ **That table is emitted as a spoken
pointer rather than narrated**, so **nothing in the new row reaches a listener** — the substance
survives only because §7 carries it in prose. The agent said so rather than counting the row as
propagation.

---

## ⚠️ The round wrote a false absence into the corpus, by the exact trap the style guide names

`rules_primer.md:653` shipped, in this round, the claim that **USA Hockey *"does not print the
offence in its playing rules at all"*** for a goaltender leaving the crease during an altercation —
supported by the observation that *"the words 'leaving the crease' are not in that book."*

**The parenthetical is true. The claim is false.** `sources/usah.txt`, **Rule 615(e)**:

> *"A minor penalty shall be assessed to any player who fails to move immediately and directly to
> their players' bench (**or goal crease for a goalkeeper**) when instructed to do so by the Referee
> during an altercation."*

And the book's own **Summary of Penalties** lists, under Goalkeeper Infractions:
`615(e)  Leaving crease area during altercation` — **the corpus's own phrase, one word apart.**
The Casebook Situations each cite *"Rule Reference 615(e)"*: **they were applying a playing rule,
not supplying one.**

⚠️ **"Attack a negative by CONCEPT, not by phrase" is in the style guide, in the section this round
extended, and the round violated it anyway.** The search was for `leaving the crease`; the book
prints `leaving crease area`.

⚠️ **And I could not find 615(e) either, on the first attempt.** A line-based grep for its operative
wording returned nothing, because the rule is hard-wrapped across lines — **trap 1 and trap 5 in the
same list, hit for the third time in this session by the person maintaining it.** It fell only to a
de-hyphenated, whitespace-flattened read.

**That is the fourth wrong absolute this round produced on goaltender rules**, after 614(c)'s *"sole
exception"*, *"no exception of any kind"*, and *"the one carve-out"*. **Each was written by someone
who had searched one book, or one string.**

### Two more brief errors in the same dispatch

- **I named `:394` as a site.** It and four others are **Rule 63.8**, a different rule, correctly
  NHL/IIHF-scoped. **And I missed a real site** — the 6-on-5 body bullet. The true list was four,
  not five, and not the four I gave.
- **I credited Hockey Canada's minor to Interpretation 1.** ⚠️ **The rule text carries it**:
  `hc_layout.txt:5138` — *"A Minor penalty will be assessed to a goaltender who leaves their crease
  during a fight. This should be recorded on the Official Game Report as 'Leaving the Crease'."* The
  Interpretation only resolves the crease-adjacent case. **Cite the rule for the rule.**
- **IIHF leaving-the-crease is 27.5**, not 27.6. I blurred it.

### A label corrected by a layer test, not by the brief

`zone_entries.md`'s body was **already correctly scoped** — the brief was right to say it might be —
but its facts block was not, and carried the sentence as a **`Convention:`**. ⚠️ **Whether a league
adopts the trapezoid is not a coaching choice**, and the owner document uses `Key:` for the same
sentence. **The layer test found it; a document-level check would have cleared the file.**

### And the owner had no section for the altercation at all

`goaltender.md` said **nothing, anywhere**, about a goaltender leaving the crease during a fight. It
now carries a section with the NHL's two carve-outs, USA Hockey 615(e), Hockey Canada 7.10(a) and
its Interpretation, and the instruction that satisfies all four: **stay in the net, and get
permission before moving.** ⚠️ **Its Key Takeaways is at 11 against a maximum of 10** — an
over-count that predates this round — so the reversal was appended to an existing takeaway rather
than given its own. **Reported, not trimmed.**

### The false absence is corrected — and correcting it found a rule nobody had recorded

The repair replaced the absence with **615(e)'s operative wording plus the Summary of Penalties
caption**, and framed the real difference honestly: **USA Hockey builds the offence around the
referee's instruction rather than around the crease line**, which is *why* its Casebook answers the
crease-adjacent case generously. That is a better account than either the false absence or a bare
correction would have given.

It also replaced *"Hockey Canada is the strict one"* — a ranking I told it to drop unless supportable
— with a **narrow, reasoned** version: strictest **on the question of moving before being told to**,
because Interpretation 1 needs nothing beyond *"on their own accord"* where USA Hockey's Situation 26
also needs the goalie to have got *"involved in the altercation outside of the crease."*

⚠️ **NEW, and in no document: Hockey Canada 7.10(d)** — *"The goaltenders must stay in their goal
creases or proceed to a neutral zone designated by the Referee."* **Hockey Canada has the
NHL/IIHF neutral-location route after all**, and the corpus recorded it nowhere. It is now in the
primer. **`goaltender.md` does not carry it** — an open row, and the second time in two waves that
the owner document was behind a borrower.

**And one more brief error:** I said Casebook Situations 26, 27 and 10 each cite *"Rule Reference
615(e)"*. **Situation 10 cites *"615(a, d and e)"***. The agent wrote around it — and caught, in its
own audio pass, that its first draft quoted `(a, d and e)` in a form the renderer left unexpanded.

### The negatives it wrote, attacked by concept before it finished

Unprompted beyond the instruction, it re-attacked its own new absences **by concept**: the
extra-attacker carve-out searched as `extra attacker`, `additional attacker`, `sixth attacker`,
`substituted for an extra`, `removed for an extra` across four volumes; *"leaving the immediate
vicinity"* checked by reading **all three** hits of the bare phrase rather than counting them; Rule
407 read in full to support *"only its three clauses"*; and **all eight** Interpretations to Rule
7.10 read to support the narrowed strictness claim.

**That is the method the whole round was trying to arrive at**, applied by an agent to its own
output, in the last wave.

### ⚠️ A third uncounted figure, caught in the commit message, on the very rule that taught the lesson

The draft commit message said the Casebook *"answers **six of the fourteen** situations under 614(c)
with no penalty"* and that *"**three of those six** require no crease contact."*

**Neither was counted.** Parsed centrally: **Situations 1, 2, 5, 7, 8, 10, 12 and 13 answer No** —
eight, not six — and **Situations 1 to 4 may not all sit under 614(c)** at all, which is exactly the
question the number would have foreclosed. **Situations 3 and 11 do not parse to a single answer**,
because 11 answers both ways in one sentence.

**Replaced with "several", not with a corrected count.** ⚠️ **The repair for this same rule had
already reached that conclusion on its own** — it stopped claiming a tally and described the test
instead — and the commit message describing that repair then reinstated a tally. **Three uncounted
figures caught in one commit message, all three on claims this round had already recorded as the
failure mode.**

**The git history is part of the defect record.** `review_history.md` is reconstructed from it, so a
figure invented in a commit message becomes evidence, and this is the third time in this round a
number was written where a pointer belonged.

---

## The cold review, and a false disclosure caught one draft before it shipped

A `content-reviewer` read `goaltender.md` in full plus **all 92 rendered SSML chunks**, and opened
the primary text for everything it intended to report. **Ten Majors, no Criticals** — and it said so
plainly rather than inflating the closest call.

### ⚠️ It refuted the brief's premise with a `git show`

I told it the document's Key Takeaways over-count **predated this round**. `git show HEAD` has
**exactly ten items.** Item 11 was added in this working tree. **So the round created the
over-count and then used it as the reason** to append the centre-red-line material to takeaway 8
rather than give it an item — which now runs **264 spoken words and holds two unrelated rules.**
**The constraint that deformed it was self-inflicted.**

### The two that made a listener act wrongly

- **A referee's instruction restated as the reader's permission.** A `Rule:` fact said NHL 27.6 and
  IIHF 27.5 *"**excuse you**"* where the altercation is at your crease. **Both books write it as an
  instruction to the referee** — the non-assessment is tied to the goalkeeper *being directed*.
  ⚠️ **Voiced alone, it sends a goalie out of the net**, and its counterweight was two paragraphs and
  two 300 ms breaks away. **The document's own Common Mistakes entry already said "wait to be
  directed out."** The correct form was in one layer and the loose form in another.
- **A USA-Hockey-only permission voiced as universal.** The paragraph the document calls *"the part
  to carry onto the ice"* named **no book**, nor did the three bullets above it, each voiced as its
  own `<p>` opening on a bare *"Situation twelve"*. ⚠️ **140 lines earlier the same document says the
  same cover is two minutes out at the top of the circle under NHL and IIHF 63.2.** The two are
  consistent only if the listener supplies the book, and only one of them supplied it.

### A penalty that reached nobody through either channel

NHL 27.6 and IIHF 27.5 close with a **bench minor** where a goalkeeper goes to the bench during a
stoppage — for a replacement stick among other things — *"without first obtaining permission to do
so from the Referee"*. ⚠️ **`grep` found it only in the Sources trailer, which the renderer does not
voice at all and the site renders as a closed `<details>`.** It bites in the `### If your stick
breaks` section this round added.

### ⚠️ A false disclosure, caught one draft before it shipped

The brief told the agent that whether *"player"* in Hockey Canada 7.10(e) reaches a goaltender was
**unsettled**, and to say so rather than assert it. **Following the instruction to attack its own
negatives by concept, it went looking for a definition and found one** — Hockey Canada's Glossary:

> *"**PLAYERS:** The members of the team physically participating in the game. **The goaltender is
> considered a player, except where explicitly stated** because special rules or privileges apply to
> them."*

7.10(e) states no exception, **so it reaches a goaltender**, and both documents now say so
positively. ⚠️ **Its own first draft had the opposite hedge**, reasoning from 7.10(f)'s *"any player,
goaltender or team official"* that the two were distinct — **backwards, because that is the
Glossary's "except where explicitly stated" limb at work.**

**Had it shipped, it would have been a false "we could not settle this" — and non-negotiable 4 would
then have protected it from removal.** ⚠️ **A disclosure is a claim. This is the second time in two
waves that checking one refuted it**, and the first where the false version would have been
defended by the rule that protects honest ones.

**It also opens a corpus-wide question nobody has asked:** every place the corpus reads a Hockey
Canada *"a player"* rule as reaching or not reaching a goaltender is untested against that Glossary
entry.

### Two more brief errors, and a decision correctly declined

- **`rules_primer.md` did not have the 7.10(d) gap** — it already carried the clause quoted, in both
  body and Sources. Only 7.10(e)(ii) was missing. **And the "reaches nobody" finding was true of
  `goaltender.md` and false of `rules_primer.md`**, which already stated the bench-permission limb
  and its bench minor in prose.
- **The takeaway merge was declined, with reasons.** Takeaways 2 and 3 are **not** the same point —
  one owns the *magnitude* of depth and the front-door/back-door trade, the other the *ordering* of
  two attributes with a documented short-side exception. **Merging would assert one coaching split
  where there are two.** And **takeaway 9 is worse than 8** at 271 spoken words, with 10 already
  holding two unrelated points: **roughly 13 points in 11 slots.** ⚠️ **Item 11 is the
  neck-laceration safety item, which non-negotiables 3 and 4 protect from deletion. This needs an
  owner's decision about the whole list, and the agent declined to make it inside one file.**

**A renderer gap recorded rather than worked around:** `🇺🇸` is **not** handled by
`md_to_speech.py` — only `🇬🇧` is mapped. The agent introduced one, the dry-run reported it, and it
was removed. Nothing else in `content/` uses it.

---

## The gate was right about the fifteen: a Critical and a Major were sitting in them

A `safety-reviewer` read nine of the fifteen — **every hunk of the staged diff, both directions** —
and read **all 119 added ` ```facts ` values aloud, individually, with no surrounding text**, plus
the **85 removed** values as context to check nothing protective was dropped. **Zero added values
unread.** It states what it did not reach, and it is a long list.

### ⚠️ CRITICAL — the hazard reaches the reader's book and the consequence does not

`shooting.md`'s slap-shot block states that under the IIHF a stick **carried above** the shoulders
is a high stick *before it touches anybody*, then names USA Hockey's and Hockey Canada's tiers —
**and says nothing about what the IIHF charges.** The body added the ladder this round and closes
*"under the book every British reader plays, a high stick a referee judges reckless ends your game
on the first one, and no injury is required for it."* ⚠️ **That sentence reaches no fact in this
section's block.**

Verified in both IIHF editions, identical: **60.4** — *"The Referee, at their discretion, may assess
a major penalty and an automatic game misconduct penalty if, in their judgment, the Player
recklessly endangers their opponent by 'high-sticking'."* Against **NHL 60.4**, which is a **match
penalty for attempted or deliberate injury**, with **no major tier anywhere in NHL Rule 60**.

**A British listener hears the hazard stated and their own book's consequence omitted**, in the
block belonging to the section that teaches the biggest wind-up in the game. Three of the four other
layers carry it — **the reviewer said so plainly rather than inflating the finding** — and the block
is at 7 facts against a cap of 11, so nothing has to be traded.

### ⚠️ MAJOR — an unsourced superlative, on the wrong limb, contradicted by this round's own fix

Two documents say turning your back to the wall is *"the single behaviour most associated with
catastrophic injury in hockey."* **Neither safety book on disk ranks the two limbs against each
other.** The **only** superlative in either is `huh.txt:225`:

> *"According to research done among a wide range of hockey players, **almost all on-ice cervical
> spine injuries have been due to the head being slightly flexed (head down)** while making head-on
> contact with the boards or goal post."*

**That is the DUCKING limb.** So is *"it can occur at walking speed"*, in the next sentence. The
turned-back limb's strongest support is `ibc.txt:1570` — *"Even a light hit from behind **could**
inflict a severe head or neck injury"* — a possibility claim, which cannot carry a superlative.

⚠️ **And `winger.md` now contradicts itself inside one commit.** Its **Sources** note, added in this
same diff, says *"the walking-speed finding is stated of 'the head being slightly flexed (head
down)…' and USA Hockey does **not** say it of a player who turns their back… **only the ducking one
has a published statement about speed behind it.**"* **One document, two answers, one commit.**

`body_contact_and_battles.md:612` carries the same superlative **and adds** *"the severity does not
scale with the speed of the player who arrives"* — ⚠️ **an assertion that there is no dose-response
relationship, which is stronger than the source's "even a light hit could".** And the paragraph
immediately below it is the *"Heads Up, Don't Duck"* programme — **whose whole content is the other
limb.**

⚠️ **The harm is non-negotiable 2's harm, in a safety document**: a fabricated ranking sits beside
real evidence and teaches the reader to discount all of it — and a reader who mis-ranks these may
**under-weight the head-down limb, which is the one the research is actually about.**

### Nine warnings re-verified and upheld, each against primary text

The helmet rule that **forbids more than the NHL does** — checked specifically for the
"forbids what the book permits" failure and **upheld**: IIHF 9.7 and the In-House Rules both say a
player whose helmet comes off *"is not allowed to retrieve and put their helmet back on"*, so the
old *"refit it if safe"* wording was wrong for the reader's book and its deletion was correct. The
goaltender broken-stick rule, checked because forbidding a permitted action would make a goalie drop
a stick they could keep — **upheld** in both books. The 2-on-1 slide's four-book ejection claim —
**upheld on four different triggers**. The crease-as-a-volume section, the wild-swing limit, the
neck-protector mandate, the Case 3 boards fallback, `team_play_and_culture.md`'s injury response
(*"waving at the bench is not the same as calling for help"* — the reviewer's pick for the best
safety change in the set), and `mental_game.md`'s corrected meta-analysis passage, **checked
specifically for over-correction in the other direction and clean.**

⚠️ **Its own closing limitation is the one to act on:** *"the Major I did find was in a Common
Mistakes bullet the diff showed only as unchanged context, which is exactly [the shape I said would
pass me] and which I caught by accident rather than by method."*

---

## The rules verification of the fifteen: no false rule claim, and that is the finding

A `rules-verifier` reached **~145 distinct rule, clause, interpretation and situation citations
across nine books** in the nine files no reviewer had read. **It found no false rule claim in any
of them.**

⚠️ **That is an unusual result here and the reason it gave matters more than the result:** the diffs
are quotation-dense, the divergences are stated **with the direction of the difference**, and the
honest disclosures — *"this is a reading rather than the book's words"*, *"the book does not say
which governs"* — were **checked and are correct**.

What it found instead was **eleven incompletenesses, every one running over-strict** — the reader
acts more cautiously than the book requires — plus four precision slips. **None is a safety hazard.
All are inaccuracies**, and it ranked them by what a reader would do wrong rather than by count.

### The ones that matter

- **Both books legalise the adjacent act and neither carries it.** NHL 63.2(vi)'s NOTE — *"If a
  goalkeeper comes out of his crease to 'cut down the angle' on a shot and after making the save
  covers the puck, this shall be legal"* — and Hockey Canada Interpretation 3(ii) say the same.
  ⚠️ **Over-strict advice here pushes a goalie toward not covering after a save, in traffic.**
- **A quotation closed before the limb that widens it.** IIHF 101.1 is quoted as permitting a
  women's-hockey bodycheck only *"when there is a clear intention of playing the puck"*. The rule
  continues ***"or attempting to 'gain possession' of the puck"***.
- **Predicates that tell a player which contact is the ejection** — NHL 43.3's *"unable to protect
  or defend himself"*, IIHF 43.3's *"recklessly endangers"*, Hockey Canada 8.5(c)'s and 8.3(c)'s
  *"attempts to injure or deliberately injures"*, and Interpretation 1 to 9.5(a)'s ***"and no injury
  has resulted"*** — without which the minor reads as the ceiling.

### Four negative existence claims attacked by concept and upheld

*"USA Hockey writes no windup/follow-through carve-out"* — searched flattened and de-hyphenated
across **both** USA Hockey volumes on nine terms, with Casebook Rule 621 Situations **1–15 read in
full**. *"No post-icing line-change or time-out ban."* *"The NHL writes no high-sticking major tier"*
— **Rule 60 read end to end, 60.1 to 60.7.** *"The NHL states no 50-foot neutral-zone figure."*

### An Appendix nobody could have predicted, verified in three places

The IIHF's 2025/26 **Table 6** — *"Summary of major penalties that result in an automatic game
misconduct"* — lists High-sticking 60.4. **The 2026/27 book has no Table 6**: Tables 5, 6 and 7 are
merged into one Table 5 with `MAJOR ONLY` and `MAJOR + GMP` columns. ⚠️ **And 2026/27 Rule 20.4
still points at "Table 6", a table its own edition no longer contains.**

It also confirmed the corpus's **9.5(b)** treatment carries *"whether for degree of violence or
injury"* — **both limbs** — which is the exact defect class this round spent most of its length
repairing, correctly handled in the file nobody had reviewed.

### ⚠️ Its declared gap, which is the next round's first item

> *"IIHF Situations 63.24, 63.28, 63.3 and 49.1… load-bearing in `special_teams.md` and
> `defender.md`. **This is the largest single gap in my coverage and the first thing a follow-up
> should close.**"*

Also unreached: USA Hockey Casebook Rule 625's seventeen situations, on which `winger.md` rests a
negative existence claim; the IIHF Appendix IV table renumbering; and **all unchanged text in the
nine files** — *"a claim that was already wrong and was not touched this round is invisible to this
method."*

---

## The Critical was fixed — and the brief would have broken the checker

⚠️ **I told the agent the slap-shot block was "at 7 facts against `HARD_MAX = 11`, and there is room
without trading anything." It was at 11 of 11.** Acting on my figure would have written a **12-fact
block past the hard cap** — the first brief error in this round that would have failed a mechanical
gate rather than shipped a quiet defect.

**The agent took the style guide's prescribed route instead**: split the section on the seam its
body already used, moving the three high-sticking paragraphs out of slap-shot mechanics into their
own heading with their own block, and kept the wind-up imperative in the slap-shot section behind a
bridge paragraph. The new fact carrying the IIHF's ejection is **word-identical to the one-timer
block's**, so the two cannot diverge.

**And it corrected the count in both directions.** The corpus said Casebook Rule 621 *"Situations 8
to 15"* are puck situations; my brief said **6** to 15; **reading all fifteen, it is 4 to 15** —
Situations 4 and 5 are 621(d) deflections. ⚠️ **Two successive attempts to state that range, both
wrong, in opposite directions from the truth.**

### Four audio defects only the renderer showed

`9.5(b) and (c)` voiced as *"clause b and (c)"*; `621(b and c)` left partly unspoken. **Full rule
numbers written throughout.** This is the seventh consecutive wave to find a defect in its own new
text by reading the SSML.

### ⚠️ A propagation gap the repair could only report: 625(b) in eight more summary layers

USA Hockey **625(b)** has three carve-outs — the puck preceded the player into the crease, the
goalkeeper is out of the crease area, or a defender's interference put the player there. **Eight
documents state it with carve-outs missing or absent entirely**, several stating the bar flat:

`scanning_and_anticipation.md` · `time_and_space.md` (×2) · `defensive_zone_coverage.md` ·
`offensive_zone_play.md` · `goaltender.md` · `playing_without_the_puck.md` · `special_teams.md` ·
and `center.md`, which carries the push-in relief but not the goalkeeper-out-of-the-crease limb —
**the same gap `winger.md` had.**

**The direction is over-strict**, so no reader is endangered — they will believe a goal is voided
when it stands. **Recorded as an open row with the site list rather than swept**, because this round
has now had four sweeps that would have damaged correct text.

### A caveat the agent raised and did not resolve

`shooting.md`'s *"How to create those shots"* block is **also at 11**, so its Hockey Canada tier fact
could not take the 8.5(c) predicate — the predicate went into the body and a Key Takeaway instead.
⚠️ **The agent named the real problem rather than working around it:** that block holds **six rule
facts about goaltender interference on a section about creating shots**, and is a candidate for the
same split.

---

## Two agents disagreed about one sentence, and the one that greped was wrong

One agent reported `switching_positions.md:412` as **already correctly hedged**. A later agent
reported it as **still carrying the over-claim**. Resolved centrally by reading it:

> *"turning your back makes the contact a hit from behind, which USA Hockey warns **can be** severe
> even when the hit is light"*

**"Can be" is a capacity claim, which is exactly what the source supports.** The second agent's grep
matched the substring `severe even when` and did not see the two words in front of it. ⚠️ **Fifth
time in this round that a pattern match was not a defect — and the first time the match was made by
an agent rather than by a sweep.**

The same site also carries *"it is the **injury** from that head-down collision that USA Hockey says
'can occur at walking speed' — a finding it attaches to the collision, not to the turn."* **That is
the division of labour this round spent two waves repairing elsewhere, already correct, in a
document nobody had flagged.**

`puck_handling.md:899` was flagged in the same message and is also sound — it already reads *"a
light hit from behind is enough to injure a head or neck"*, which is the wording the owner document
had just adopted. **Neither needed an edit; no agent was dispatched.**

### The over-claim census, resolved

`grep -rn "severe even when" content/` now returns **one line**, and that line is the correctly
hedged one. The four `Never:` values in `winger.md` were repaired to the owner's exact wording —
⚠️ **and the straight substitution came to 201 characters against `MAX_LEN = 200`. The agent got
under it by dropping the filler word "instead", not by trimming any part of the claim**, and said so.

### ⚠️ And it nearly recorded a false absence, from the same trap, twice in one session

Checking the source, the agent's first pass **nearly recorded the light-hit sentence as absent from
`huh.txt`** — it is line-wrapped there, so a plain grep for the whole sentence returns zero. It
found it on a whitespace-flattened read. **That is the same trap that hid USA Hockey 615(e) from me
earlier in this round, and the same one that made a figcaption census return zero when the answer
was four.** Three times, one session, three different people.

---

## Two brief items that pointed at the wrong files entirely — and the agent found the real sites

- **I sent Hockey Canada 8.3(c)'s predicate to `game_management.md`. That file never names 8.3(c)**
  — only 8.3(b). ⚠️ **The real site is `rules_primer.md:388`**, which reads *"a match penalty for an
  attempt to injure"* and **drops "or deliberately injures" — the completed act.**
  `body_contact_and_battles.md:1174` carries it complete.
- **I sent the NHL 60.1 punctuation fix to `game_management.md` and `special_teams.md`. Neither
  contains the phrase at all.** The real sites are **`shooting.md` (7), `passing_and_receiving.md`
  (2) and `defensive_zone_coverage.md` (1)** — and the agent separated **two opposite errors** in
  them: one site attributes the **IIHF's internally-quoted** form to both books, six attribute the
  **NHL's unquoted** form to both. ⚠️ **`defensive_zone_coverage.md:679` attributes it to the NHL
  alone and is correct.**

**Both were verified before being reported**, including that the 2026/27 IIHF edition still prints
the internal quotes.

### It caught a false negative in its own draft, from my wording

I wrote that a Casebook escape sentence *"is general, because it reasons from 618(a)"*. The agent
found the reasoning wrong: **it is general because it rests on 618(a)'s FIRST sentence** — 618(a)'s
**third paragraph is the crease penalty shot**. ⚠️ **"618(a) is crease-free" is false, and a repair
written from my wording would have put that false negative into the document.** It caught it in its
own draft.

### Two more undercounts and one "identical" that was not

The IIHF 101.1 truncation was at **three** sites, not the two I named — and the body's main
treatment and the Sources trailer **already carried the full quotation**, so the defect was confined
to facts, Common Mistakes and a closing callout. And the two NOTEs I called *"identical"* differ:
**IIHF 63.2(VI) writes *"their goal crease"* for the NHL's *"his crease"*.**

### ⚠️ Two blocks are now at the cap with no headroom, and it said so

`special_teams.md`'s smothering block sits at **11 facts with a value at 299/300**, so the 63.2(vi)
NOTE could not be added as a fact or appended where it belongs. It was folded onto the adjacent
NOTE fact at **296 chars**, and that fact **moved up so prohibition and permission are consecutive
paragraphs in the audio**. `forechecking_systems.md`'s pinch block is also at 11, with values at
295, 296 and 298. **The next finding landing in either needs the section split, not a trim** — and
the agent named that rather than leaving it to be discovered.

### And it found the same defect class unpatched in a file it did not own

`goaltender.md` **already carries the 63.2(vi) NOTE correctly in three places** — a body passage, a
`Rule:` fact, and Hockey Canada Interpretation 3's clauses — **and states the rule bare in two
others, in a different section.** ⚠️ **The same document, correct in one section and over-strict in
another**, which is the shape this round has now found in five separate documents.

---

## The last wave: a brief whose line numbers were the INDEX, not the tree

⚠️ **Every `shooting.md` line number I sent was the staged numbering**, shifted 8–9 lines from the
working tree by an earlier agent's unstaged edits — because I relayed them from a reviewer that had
read the index. **Two of the six sites were already correct in the tree**, and the agent said so:
*"Had I trusted the brief I would have re-fixed already-fixed text."*

**It also missed a site I did not know about**, found the wild-swing sentence carries the same
punctuation split, and refuted two more of my locations: `passing_and_receiving.md` carries **no
quotation marks at all** so it attributes no punctuation to either book, and
`defensive_zone_coverage.md:679` **is not about Rule 60.1 at all** — it is Rule 67.2. **The brief's
conclusion about that file held; its reason did not.**

### The wrapping trap, a fourth time in one session

The agent's plain grep for the NHL's 63.2(vi) NOTE **failed** — the sentence is line-wrapped — and a
whitespace-flattened read of the `-layout` extraction recovered it. ⚠️ **Four separate people, four
separate files, one entry in this project's own list of ways a grep lies.** It is the most reliably
repeated failure of the round, and every one of us knew the rule.

### ⚠️ The most useful sentence in the report is an argument against its own work

> *"Whether the punctuation distinction is worth carrying at all. **It is inaudible** — a listener
> cannot hear a quotation mark, so 'in its own punctuation' is a phrase that costs breath and
> conveys nothing to the podcast audience. I kept it because it is provenance and non-negotiable 4
> protects provenance, but a reviewer judging the corpus by its spoken form might reasonably
> conclude the whole distinction should be stated once in Sources and nowhere else. **I did not make
> that call.**"*

**That is the right handling of a judgement that is not an agent's to make** — do the work as
briefed, name the reason it might be wrong, and leave the decision with its owner. Recorded as an
open row.

### Where the round stops

**This is the last repair wave.** The findings are still real — a half-predicate, a pair of
quotation marks, one bare NOTE — but they are no longer the shape that justifies another pass, and
⚠️ **a round cannot reach a fixed point by reviewing its own repairs**: every wave in this round
found a genuine defect in the wave before it, and would have again.

Everything outstanding is now a plan row with its site list, including the eight documents stating
USA Hockey 625(b) without its carve-outs, the corpus-wide test of Hockey Canada's *"the goaltender
is considered a player"* Glossary entry, the two facts blocks at the cap with no headroom, and the
27 unverified `60.1` references outside the four files just checked.
