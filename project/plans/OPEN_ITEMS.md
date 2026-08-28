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
These outrank everything below. The corpus is **37 documents and 668,282 words — 50.6 hours of
reading at 220 wpm** (Python `str.split()` over the raw markdown of every file in `content/` — `wc -w` gives 632,776 on the same files, a tokeniser difference and not missing content; derived by `scripts/check_counts.py`,
26 August 2026 **on the tree that shipped it**, not on the tree before its repairs —
the first version of this figure was HEAD's and was stale the moment it was written). ⚠️ **This read "532,518 words — 40.3 hours" until round 43**, a figure
the very file it cites supersedes two paragraphs above its own table: *"The corpus is 37
documents and 619,227 words."* Tier 0's argument is that forty hours is six books and a beginner
will bounce off it — **and the true figure is nearly forty-eight hours**, so the stale number was
understating the case for the work it introduces. Its
accuracy is not the open question: the owner has played for three and a half years and has read a
large part of it. What is open is **structure** — whether a reader can find the thing they need,
recall it, and act on it. Outside feedback is always worth having and is never finished; it is not
a blocker on any item here.

⚠️ **Half of this tier was already done, and the plan did not know.** Round 47 re-derived every
item against the corpus instead of reading the tier. **Three of six were complete** — one of them
the item this tier called *"the single largest unexploited gain in the project"* — and had been
since **round 28, seventeen rounds earlier**. Work was queued behind finished work. The evidence is
in [`round_47_tier_0_audit.md`](../reviews/round_47_tier_0_audit.md); the struck items are below so
the record of what was claimed survives.

**✅ Substance at the top — DONE.** The item read *"the corpus is currently the wrong way round.
Prototype two Overviews and look at them before committing to 36."* **All 37 documents open with an
`## Overview`**, median **415** words, shortest 313. Shipped in `c93b13f`, *"Put the summary at the
top of every document, and fix what that exposed."*

**✅ Retrieval practice — DONE, and it was the tier's headline item.** It read *"`Check yourself`
appears in **1 document of 36**… Named here as the single largest unexploited gain in the
project."* It appears in **36 of 37 documents, carrying 278 numbered questions**. Round 28 built it
out from the one-document pilot and its own record says so: *"`## Check yourself` retrieval layer
was built out from a one-document pilot to 36."* The only document without one is
`reading_ice_hockey_diagrams.md`, which arrived on 31 July, after the rollout — **that is the whole
of what is left of this item**, and it is a one-document job, not a corpus-wide gain.

**✅ Entry paths — DONE.** The item asked for *"two or three named paths — your first game; you have
been put on defence and have never played there; you want to follow a game on television — each
naming four or five documents and which sections of them."* `getting_started.md` carries **"Four
routes in, when you have an hour rather than a season"**: Route 1 *Your first game is this week*,
Route 2 *You have been put on a position you have never played*, Route 3 *You want to follow a game
on television*, Route 4 *You play in Britain*. **All three requested, plus one.**

---

**⬜ Three documents have Key Takeaways that are essays. The other 34 are fine.**

Derived 27 August, after correcting the parser fault described below **twice**: the Key Takeaways
layer was **25,188 words, 4.0% of the corpus** before this work and is **24,557 words, 3.9%**
after the first document, with its **median unmoved at 59 words per numbered takeaway** — which
is a takeaway. The median was never the problem and the rewrite did not chase it.

⚠️ **And be honest about how far the first document actually moved: 214 → 150 words per item, not
to the median.** The first draft reached **124**, and every subsequent correction *added* words —
scope restored to a four-book generalisation, an exception named, an attribution split from the
rule it had been welded to. **The compression that looked best was the one that was wrong.** Plan
the remaining two documents for roughly a 30% reduction with claims intact, not for 59. The style guide asks for *"Numbered, 5–10 items. Each one
standalone and memorable — this feeds the podcast's 'if you only remember N things' segment."*
**34 of 37 documents meet that.** Three do not:

| document | words | items | words per "takeaway" | status |
|---|---|---|---|---|
| `foundation/rules_primer` | 2,494 | 10 | **249** | ⚠️ **diagnosed — see below** |
| `technique/body_contact_and_battles` | 2,135 | 10 | **214** | ✅ rewritten to 1,504 / **150**, [round 49](../reviews/round_49_takeaways_that_were_essays.md) |
| `systems/defending_the_rush` | 1,164 | 10 | **116** | ⬜ |

The cliff is clean: 249, 214, 116, then **99** (`foundation/uk_rules`) and a smooth tail to the
median. Nothing below 116 is a defect.

⚠️ **Decide this before rewriting the next document.** Round 49's rewrite replaced content
with intra-document pointers in six takeaways. `md_to_speech.py` keeps link text and drops the
URL, so a listener hears a bare section title with no destination. The corpus already used the
device — but in all three precedents (`skating.md`, `puck_handling.md`, `mental_game.md`) the
pointer is **supplementary**: the item teaches the thing completely and *then* says where more
is. Round 49 used it **substitutively** in three items, and [MA1](../reviews/round_49_takeaways_that_were_essays.md)
is what happens when a substitutive pointer is aimed at the wrong heading — the content is
simply gone, and `check_links.py` passes because the anchor resolves. **Prefer supplementary
pointers. Where an item must shed content, check the target section actually contains it.**

⚠️ **A review record drifts out of true while you edit it, and no checker reads prose.** Round 49's
record contradicted the tree six times across two gate blocks — a stale fact count, an understated gate-run count, and a
`Deferred` entry describing a three-way split that was tried and abandoned. The last one was found
by the gate one audit before it would have been committed, and it would have mis-directed exactly
the author the rule below sends to look. **Before staging a review record, re-derive every count in
it from the file it certifies, and sweep the file for every superseded figure the round produced.**
And **do not put a running total in a record that a gate audits** — a gate that blocks on the count
increments the number the next audit checks, and the field can never converge.

⚠️ **Before splitting or renaming a section, grep `project/reviews/` for its heading.** Round 49
split `### The four that cause the injuries` and silently regressed round 33's **CR52** — a
critical whose fix was a blockquote naming that section as the one place a non-checking or British
reader could find the four fouls that bind every division. The obligation lived in a review record,
not in the file, so nothing in the working tree showed it and three reviewers passed the split
before a fourth caught it. **A section that was the subject of a past critical carries obligations
invisible to anyone reading only the document.**

⚠️ **A blind string replacement across two files broke a sentence in both — the rule already existed and
I broke it anyway.** Round 51 replaced `"completely passive in there"` with the rulebook's three-limb test
in `center.md` and `winger.md` without reading the surrounding clause. An agent had already rewritten the
lead-in to *"provided you stay passive"*, so both files shipped *"provided you stay does not play the
puck"* — **in Key Takeaway 8, the layer read aloud one sentence at a time.** `check_links`, `check_facts`
and `check_absolutes` all passed it; `commit-gate` caught it. **When a tree is being edited by other
agents, a string replacement is a bet that the surrounding words have not moved. They had.** Read the
clause, then edit it.

⚠️ **Reconcile `git diff --name-only` against the reviewers' reports BEFORE calling a round reviewed.**
Round 51's gate blocked on C8 because **ten staged files were named by no reviewer** — including one
carrying an altered verbatim rulebook quotation. Every reviewer had been briefed on *claims* (the crease
characterisation, the delayed-offside triggers, the quantifiers); **nobody was briefed on the file list.**
So a file that changed for a reason no brief happened to mention was reviewed by nobody, and the record
read as complete because it was complete **about its findings**. **A review record organised by finding
will always have this hole.** The check is one command and it is not optional.

⚠️ **Re-derive every measurement in a review record at gate time, not when you happen to take it.** The
same gate caught *"50.3 hours"* (50.4 **at that moment** — and the figure moved again twice more before the round closed, which is the point: a measurement in a record is true only at the instant it is taken), *"1,654 chunks / 3,595,382 billed characters"* (1,687 /
3,671,640) and *"7,069 internal links"* (7,087) — **all true when measured, all false when read, all sitting
under "Re-verified: author"**. `check_counts.py` cannot help: these are quantities it does not know.

⚠️ **Check that a deferred fix is not being SHIPPED while it is deferred.** Round 51 deferred CR7's Hockey
Canada penalty ladder in two files — and the same diff **newly added the bare minor to those two files**,
so the round was propagating the defect it had recorded as deferred. **A reviewer reading findings cannot
see this. A gate reading the diff can.**

⚠️ **Never state a line number to an agent as a fact. Give it the string.** Round 51 ran a dozen
agents concurrently over the same twenty files, and **six of the coordinator's briefs were corrected by
the agent executing them.** The worst was a pointer to `zone_entries.md:1085-1087` as a model to copy —
**that file is 1,017 lines long.** Another named `:412` for a fact that was at `:406`. Every agent found
these by **reading the file instead of trusting the brief**, which is the only reason none of them
propagated. Line numbers in a contended tree are guesses; quote the sentence you mean, say "re-derive the
line", and tell the agent to stop and report if the premise does not hold. **Seven of the twelve plan rows
worked across rounds 49-51 had a wrong premise. Assume yours does too.**

⚠️ **Sweep the diff for cross-book quantifiers before staging. Mechanically, not by reading.**
Eleven false four-book generalisations were manufactured across rounds 49–50, and **every one was
caught by a reviewer or the gate, never by the author re-reading**. Two were manufactured *inside
the repair for a previous one*, and one survived a fix applied to only one of the two documents
carrying it. Care does not catch this; a grep does:

```bash
git diff HEAD -- content/ | grep '^+' | grep -v '^+++' | sed 's/^+//' \
  | grep -inE "\b(all four|every book|every one of the four|in any book|no book|three of the four|two of the four|all three|the other three|each still)\b"
```

Then verify **each named cell individually** against `sources/`. A quantifier that is true of three
books and false of the fourth reads as authoritative and is the corpus's most-repeated defect.

⚠️ **Edit structurally, not by string replacement.** Round 49 made three separate insertions that
landed in the wrong place in a 1,200-line file — one matched the *first* of two identical strings
and put a four-book penalty ladder in the Overview, inside a quotation, breaking emphasis parity;
one put a heading a paragraph too early, so eight facts summarised a neighbouring section; one put
a paragraph before the text it referred back to. **No checker caught any of them** — `check_facts`,
`check_links`, `check_absolutes` and a clean `npm run build` all passed on the worst of the three.
Before any structural edit: print the section map. After: print it again and diff it. And assert
emphasis parity across changed lines, because markdown will render a broken span silently.

⚠️ **`rules_primer.md` is a different problem from the other two, and the item as written is
mis-specified for it. Diagnosed 27 August, read-only, before any edit.**

| measure | value |
|---|---|
| Key Takeaways | 2,494 words / 10 items / **249 per item** |
| distinct rule citations in the takeaways | **50** (65 including repeats) |
| items naming **all four** rulebooks | **7 of 10** |
| items naming two or more books | **10 of 10** |
| correlation, item length vs citation count | **r = 0.78** |
| words per citation | **38** |

**The length is the divergence.** Every item is a cross-book comparison, and item length tracks
citation count almost linearly. There is no prose padding to remove: shortening an item means
either dropping a book or dropping a citation, and **dropping a book from a four-book claim is
precisely how seven false universals were manufactured in this corpus on 27 August**, each one
contradicted by primary text and each caught by a reviewer rather than by the author.

**So the fix is not compression, and the metric is wrong for this document.** The style guide's
*"standalone and memorable — this feeds the podcast's 'if you only remember N things' segment"*
assumes a teaching document. `rules_primer.md` is a **reference** document, and 249 words per item
is what an honest four-book comparison costs. Its takeaways are not essays that drifted; they are
the comparison the document exists to make.

**What can honestly be done, from what worked on `defending_the_rush` item 6** (324 → 209 words,
the only compression in that document that survived review): **stop summarising the comparison in
the takeaway.** State the instruction and the hazard, say plainly that the books diverge and that
the divergence matters, and send the reader to the body for the grid. Applied here that would move
most of the 50 citations out of the summary layer — but note what that means for a *reference*
document, whose readers arrive wanting exactly those numbers. **This is a decision for the owner,
not an edit to make unilaterally**, and it belongs in Tier 2.

**One genuine defect found and confirmed while diagnosing:** the orphan check (`grep -F`, fixed
string) returns **exactly one** orphan across all 50 citations — **NHL 59.2**, cited in takeaway 8
and appearing nowhere in the body. Verified against `sources/nhl_rules.txt`: *"59.2 Minor Penalty -
A minor penalty, at the discretion of the Referee based on the severity of the contact, shall be
imposed on a player who 'cross checks' an opponent."* That must be moved into the body regardless
of what is decided about length. **The other 49 all trace.** **✅ FIXED 28 Aug — reviewed and gate-cleared, round 51.** Moved into the §4 cross-checking bullet as a *floor* — and the repair found a second-order effect the row had not seen: the bullet already said Hockey Canada *"gives you no minor floor **at all**"*, a sentence with **no antecedent**, because the body had never established that a minor floor existed anywhere. All four cells are now named and quoted separately: NHL 59.2 and **59.3 turn on word-for-word the same test** (*"at the discretion of the Referee based on the severity of the contact"*), so under that book severity alone separates two minutes from five; IIHF 59.2 is discretionary on **differently worded** grounds (*"the degree of force and violence"*); USA Hockey 609(a) and HC 9.2(a) are **mandatory on their face**. Key Takeaways deliberately **not** touched. ⚠️ **The row's "exactly one orphan" claim does not survive a strict sub-rule test** — it was the only orphan whose absence changed what the body *taught*. See the Sources worklist above for the rest.

**✅ Three separate corpus computations of NHL shift length now exist, and the owners table named an
owner for only one of them. — DONE 28 Aug** (`project/content_style_guide.md`, owners table). A **Shift length by position** row now names **`positions/defender.md`** as owner, carries the 2025-26 pair (**49.3 s D / 47.6 s F**, 325 D and 615 F, total ice time ÷ total shifts, every skater who took a shift, computed not published), and records all three computations with the population **and** the estimator each was made with — including that `defender.md` and `conditioning_and_recovery.md` differ on **both**, that their gaps run in **opposite directions by position** so no cause is asserted, and that `playing_without_the_puck.md`'s comes from a **different API endpoint**. Figures re-derived from the documents, not retyped from this plan. `project/content_style_guide.md:529` gives `conditioning_and_recovery.md`
as owner of *"Shift length"* with the 30–80 s range and the 47.7 s central tendency — but **names no
owner for the positional split**, which is the fact that actually diverged. In practice `defender.md`
holds it and `center.md` routes readers there. A **third** computation exists at
`playing_without_the_puck.md:66` and `:841` — mean 47 s, median 45 s, from 8,325 shifts across an
**11-game convenience sample** via the shift-chart API, a different endpoint from the other two.
`how_to_watch_hockey.md:611` already reconciles it. **Add a row to the owners table naming the owner of
the positional pair, and record that three computations exist**, so the next author does not find a
fourth by accident.

**⬜ `switching_positions.md:487` restates the shift-length figure with its season and its
computed-not-published label but **without its population**.** It links to the owner, so it is the
weakest of four restatements rather than a wrong one. One clause.

**⬜ The Sources notes need a corpus-wide both-directions audit, and Hockey Canada was only the
first symptom.** **28 Aug — the audit was run at two resolutions, and the resolution is the whole finding.**

- **Book level** (is the rulebook named in the footer at all?) — was **10 documents**, now **0**. Closed 28 Aug:
  `uk_rules` (USA Hockey **304(g)** and Hockey Canada **3.6(c)**, both cited at `:121` — the earlier pass judged
  this file on its 69.1 reference alone and never saw them), `reading_ice_hockey_diagrams` (USAH **604(a)**,
  HC **7.3(a)**), `conditioning_and_recovery` (IIHF **101.1**, footer entry records that it sits in the book's
  `WOMEN'S HOCKEY` section), `how_to_watch_hockey` (IIHF **76.6/76.7**), `neutral_zone_systems` (IIHF **27.7**).
  Every rule was located verbatim in `sources/` first. **HC 3.6(c) greps as *throat* protector, not *neck
  laceration* protector** — the terminology differs by book, and searching the corpus's own wording finds nothing.
- **Rule level** (is the specific rule covered by the footer?) — **73 documents×books still flagged.** ⚠️ **This
  is a worklist, not a gate, and must never be given a `--strict`.** Most entries are *granularity*: a footer
  saying "Rule 81 Icing" legitimately covers a body citing 81.6. The scan also emits malformed tokens (`8.5)`),
  so its count is an upper bound, not a defect count. **Do not sweep it.** Round 44 manufactured a divergence
  by ranking exactly this kind of output and offering to fix it. Judge per site, per document.
- **The genuine sub-class worth working**, from the round-51 agents: a **summary layer citing a rule the body
  never makes**. `rules_primer.md:801` cites USA Hockey **631(d)** in Common Mistakes with Rule 631 appearing
  nowhere in the body — the exact shape of the 59.2 defect, and unfixed because the repair is a body addition
  in the puck-out-of-play section. `rules_primer.md:919` names HC **8.5(a)** and its Interpretation 2 for the
  first time in Key Takeaways. Also unlisted in that file's Sources note: USA Hockey **602, 603, 610, 618, 631**
  and NHL **6**.
 Round 51 checked one book across seven documents and found the gap runs both ways:

- **`forechecking_systems.md` cited USA Hockey 604(a), 630(a), 640(b), 640 Note 2 and the Declaration
  of Player Safety — fifteen mentions — with the USA Hockey Playing Rules absent from Sources
  entirely.** Found and fixed in passing. Nobody had looked for it.
- **`how_to_watch_hockey.md`'s *Rules (primary)* line was NHL-only** while its text cites USA Hockey
  630(a) and HC 6.11.
- **`neutral_zone_systems.md` was wrong in both directions** — it listed HC **6.3** (Face-off
  Location), which the document never uses, and omitted **6.11**, which it does.

**Only Hockey Canada was audited, plus USA Hockey in one file.** The orphan entry at
`neutral_zone_systems.md` suggests these blocks carry other entries supporting claims that have since
moved out. Audit every Sources block against its own body, both directions, one book at a time.

**⬜ The Hockey Canada online rulebook and the dated PDF number the rules differently.**
`rulebook.hockeycanada.ca/…/rule-6-3/` serves 200 with real content, but carries **no edition date
anywhere** and its own navigation numbers **Off-side as 6.12**, where the dated 2026-28 PDF — the
source of every HC rule number in this corpus — has it at **6.11**. It is an unversioned edition with
different numbering. Kept and labelled; **take rule numbers from the dated PDF only.**

**⬜ `puck_support_and_spacing.md` states the two-book offside qualifier without linking to its
owner.** Its sibling `how_to_watch_hockey.md` says `See [Zone Entries]` immediately after; this one
does not. One link.

**Orphan citations already found in the two remaining documents** — claims their Key Takeaways
make that their bodies never make, so trimming without moving them would delete them from the
corpus. Each needs verifying against primary text and moving into the body *before* its takeaway
is touched, exactly as `body_contact_and_battles.md`'s suspension block was:
`rules_primer.md` — **NHL 59.2**. `defending_the_rush.md` — **Hockey Canada 8.8(b) and 8.8(e)**
(the body reaches only 8.8(c)).

⚠️ **`reading-diagrams/reading_ice_hockey_diagrams` was on this list and does not belong on it.**
It was recorded at 742 words / 5 items / 148 per item. It is **298 words / 5 items / 60 per
item** — the corpus median, and the shortest takeaway item in it is 15 words. The 444-word
difference is its **Sources footer**, counted as takeaway text. This is the *same parser fault*
the correction below describes, surviving the correction: the fix bounded the slice on the `---`
rule before the footer, and this is **the one document of 37 that has no `---` there at all**, so
the slice ran to end of file. A fault whose fix is itself unstressed is not fixed. Bound the slice
on the footer's own opening (`*Sources`) as well as on `---` and `##`.

**✅ The missing `---` is FIXED and gate-cleared — round 51.** Two lines added, no claim touched;
the Key Takeaways slice now measures **298 words instead of 742**, and all 37 documents conform.

⚠️ **But my "three tools defeated by one separator" claim was wrong, and I had written it into the
round 49 record too.** The build warning `no citation paragraphs found under Sources` has a
**different cause entirely** and did not clear. `site/scripts/extract-meta.mjs:175` counts citations
with `/^\*[^*:]{1,70}:\s*\[/` — a **70-character cap on the category label**. This document's labels
run **83, 88 and 95** characters. Running that regex against both the pre-fix and post-fix text
yields zero matches either way: the horizontal rule is irrelevant to it. I asserted a causal link
between two symptoms because they shared a victim, and verified neither.

**⬜ The 70-character citation-label cap silently drops citations in SEVEN documents, not one.**
`site/scripts/extract-meta.mjs:175` counts a Sources citation with `/^\*[^*:]{1,70}:\s*\[/`. Swept
just now — **eight citations exceed the cap**:

| document | label length |
|---|---|
| `switching_positions` | **188** |
| `puck_handling` | **149** |
| `zone_entries` | **139** |
| `faceoffs` | **123** |
| `reading_ice_hockey_diagrams` | 87 and 81 |
| `body_contact_and_battles` | 84 |
| `mental_game` | 81 |

Only `reading_ice_hockey_diagrams` warns, because it is the only document where *every* citation is
over the cap — the others have at least one short label, so the extractor finds "some" citations and
stays quiet. **The site's citation metadata is therefore incomplete for seven documents and silent
about it**, which matters for a corpus whose whole claim is traceable provenance.

**The decision is the owner's:** widen or remove the cap in `extract-meta.mjs` (a site-code change,
and the one that fixes all seven), or shorten eight citation labels (touching citation text, which
needs a source pass and is the worse option). **Do not shorten labels to satisfy a regex.** Adding the `---` makes the document structurally identical to the
other 36 and removes the trap at source. It is a one-line structural change touching no claim,
but it touches `content/`, so it needs its own review and its own commit — do not fold it into
another change.

⚠️ **This item has been wrong in both directions and the second error was mine.** It read *"48,673
words: 9% of the corpus is its own summary"* for seventeen rounds — a **volume** framing, which is
not actionable and is why it never moved. Round 47 restated it as 60,033 words and 9.5%, calling
the old figure 23% low. **That was worse.** My extraction took everything between `## Key
Takeaways` and the next `##`, and in **36 of 37 documents** the Sources block and disclosure
footer sit inside that span with no heading to separate them — so **34,401 words of citations and
provenance were counted as takeaways.** The true figure is 4.1%, not 9.5%, and the original 48,673
was itself nearly double the truth.

**4.1% of a corpus being its summary layer is reasonable. The volume was never the defect.** The
defect is four documents whose individual takeaways are 100–250 words each, and it was invisible
under every word-total framing this item has had.

⚠️ **And the failure mode is the one this session spent itself on.** A number was derived, checked,
committed and pushed, and it was wrong because the tool that produced it was never stressed. It was
caught by reading the text behind it — a 1,954-word "takeaway" that turned out to be 200 words of
takeaway and 1,750 of Sources footer — not by any checker. **A figure merely wrong rather than
absurd would have shipped.** `scripts/check_counts.py` cannot see this class and says so.

**The fix, and what makes it safe.** Round 38 fixed `rules_primer.md` and found that **every
critical it sustained came from compressing rather than splitting** — shortening a takeaway drops
the qualification that made it true. So do not compress. In `body_contact_and_battles.md`'s
takeaway 1, the 204 words are a memorable assertion plus a rule dump — 604(c), 604(d), 604(e),
Hockey Canada 7.3 — **and every one of those citations already exists in the body of the same
document.** The takeaway can keep the assertion and point; nothing is deleted, non-negotiable 3 is
untouched, and no detail has to move.

**Four documents, one at a time, each reviewed before the next.** Not a corpus-wide pass — the
corpus does not need one.

**⬜ Gaps the entry paths exposed — content that does not exist.** Absences no review round finds,
because a reviewer checks what is written. **Now actionable rather than blocked:** the four routes
exist, so the gaps they point at can be enumerated by walking them.

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

**Legend:** ⬜ open · ✅ closed, with the round that closed it.
**Rows marked ✅ are carried here only until the next plan sweep moves them out** — CLAUDE.md's
rule is that this file holds remaining work and a closed item lives in its review record. They are
kept for one round so the round-50 record and this table can be diffed against each other, which is
how four stale rows were found in the first place.

⚠️ **FOUR of the eight rows worked on 27 August had a wrong premise** — three already fixed in
rounds 36/37 and never closed, and one (`zone_entries.md:174`) describing a gap that had been
filled while the *real* gap, book scope, went unrecorded. **That is a 50% error rate in a table
whose whole claim is "verified, with an identified remedy."** Before working any row here, verify
the defect still exists in the file, and treat the row's description of *what* is wrong as a
hypothesis rather than a finding. The cause is copying planning text forward from a round's
*carried-findings* document instead of its *outcome*; **close the row in the commit that closes
the finding, and link the record rather than restating it.**

⚠️ **The three:** `offensive_zone_play.md:165` and
`defending_the_rush.md:135` both describe pre-fix text; **round 36 fixed both and the rows were
never closed**, so two agents were dispatched in August to repair things that were already
repaired. The planning text was copied forward from `round_36_carried_findings.md` — the
*pre-fix* document — rather than from the round's outcome. **When a round closes a finding, close
the plan row in the same commit**, and prefer linking the review record to restating its text.

| | Where | What | Source |
|---|---|---|---|
| ✅ | ~~`offensive_zone_play.md:165`~~ **ALREADY FIXED IN ROUND 36 — this row was a stale carry-forward of the pre-fix planning text.** Verified 27 Aug: all clauses present in facts and body. | A merge dropped **three** clauses; one was restored, **two remain** — same defect, same remedy, and nothing forced the trim (each original line was ~125 characters). | plan §3.2 |
| ✅ | `offensive_zone_play.md:171` **FIXED — round 50** — `Convention:` → `Key:`; the body states arrival order as a definition and hedges nothing, so the label had nothing to mark. | A `Convention:` fact says a role assignment *"is a coaching choice"*; the section body says arrival order decides it. **The fact contradicts its own section.** | plan §3.3 |
| ✅ | ~~`defending_the_rush.md:135`~~ **ALREADY FIXED IN ROUND 36 — stale row.** Verified 27 Aug: `:135` reads *"Roughly two to three … around a stick and a half … roughly a stick length"*; the hedges survived. | A merge shed *"around"* and *"roughly"*, promoting a hedge to *"**one** stick length"* — reads as a measurement rather than an approximation. | plan §3.4 |
| ⬜ | `body_contact_and_battles.md:420-421` | Read-aloud minors in facts blocks: *"All four"* resolves only from a heading a listener never hears; *"the restricted form"* of 101.1 is undefined in the block. | plan §3.7 |
| ✅ | Glossary, ~9 entries **MOSTLY FIXED — round 50** — `Post` now carries its owner's coaching-choice hedge, `Board battle` weakened to what its owner actually says (with its unverified label), two entries reordered byte-identically, `one-touch`/`one-timer` reciprocal added. ⚠️ **`Forecheck` homonym was already closed in round 37 — another stale row.** ⚠️ **`backside coverage` is MIS-TIERED**: `terminology_source_audit.md:91` records that the IIHF section defining it has never been located, so this is not a known fix — it needs a source fetched. Move it to Tier 4. | `Forecheck` homonym; `Post` drops its owner's coaching-choice hedge; three entries out of alphabetical order; `one-touch`/`one-timer` collision; `Board battle`; backside coverage. | plan §4.1, §4.3 |
| ✅ | Glossary, voice **FIXED — round 50** — standardised on sentence-final `See [Doc](path).`, the existing majority form (25 of 32) and the only one that survives text-to-speech. `Butterfly`'s inline form was already fixed. Five older entries deliberately left: they use the link as the sentence *subject* to attribute a specific claim, and normalising would cost the attribution. | **Six of the ten new entries close with a cross-link and four do not**; `Butterfly` uses inline *"— see [X]"* where others use a sentence-final *"See [X]."*; some are third person and some switch to second. | plan §4.3 |
| ⬜ | `"most goals are scored low"` | **Unsourced in its owner.** Label it or source it — do **not** delete it: a tidying pass already removed a *correct* fact from this corpus for looking unsupported. ⚠️ **28 Aug — the row's own wording does not appear in the corpus, and re-deriving it found something sharper.** Grepping every phrasing turns up no *"most goals are scored low"*. What exists is **two different claims about where most goals are scored, in two documents, only one of them sourced**: `body_contact_and_battles.md:861` — *"The area on top of the crease is where most goals are scored and most penalties are taken"*, **attributed to Mike Corbett** — and `center.md:298` — *"The slot is where the most goals are scored"*, in a **Key considerations** line with **no source at all**, echoed at `center.md:68`. They are not the same area, and neither names the other. A third, separate claim — `shooting.md:231` *"Most tipped goals are low"* — is scoped to **tipped** goals and its Sources note does carry tip/deflection entries, so it is probably not the defect. **The work is therefore: reconcile the crease-vs-slot pair and source or label `center.md`'s** — not to hunt a sentence about goal height. Needs `source-verifier`. | plan §3 |
| ✅ | Hockey Canada rulebook missing from Sources | **FIXED and gate-cleared — round 51.** Seven documents done (`uk_rules` correctly needed nothing — its 69.1 is a video-review reference; `reading_ice_hockey_diagrams` handled separately). **Every cited HC rule was located verbatim in the refetched published 2026-28 PDF**, not merely in `hc.txt` — and the wrapped-line trap was live: `grep -F` on Rule 7.3's scope clause returned **zero** because it wraps after "any other". ⚠️ **My scoping was partly wrong:** `equipment.md`'s "6" was an occurrence count, not a rule count (2 rules), and it already carried HC under *Certification standards* — the gap was in the *Rules (primary)* line a reader actually scans. **The round-44 question is answered: both claims stay.** In each, HC 6.11 is the second half of a two-book qualifier whose first half was already there, on a sentence that would otherwise state an NHL/IIHF-only reading of offside as universal — eleven siblings carry the same qualifier. | round 44 |
| ⬜ | `rules_primer.md:738` — the rule-set comparison table's tagging-up row | It states USA Hockey's classification limit and carries **no Hockey Canada note**, while its sibling icing rows all carry inline *"Hockey Canada is split by category"* notes. **The absence of a Hockey Canada classification limit on tag-up is a real distinction the corpus states in four other places and not in the table** — and §10's cells are the shape that generated round 44's divergences. Found by `commit-gate` in round 45; pre-existing. | round 45 |
| ✅ | **Nested bold renders invisible — `.prose strong` is `font-weight: 650` with no nested rule** | **Scoped with the site's own parser (`mdast-util-from-markdown`) rather than a regex, and closed 28 Aug.** The carried figure of *eight* spans came from an asterisk-pairing heuristic that cannot tell a nested span from **sibling** bold runs on one line. Parsed corpus-wide, there was **exactly one**: `rink_map_and_glossary.md:151`, `**two books of the four**` nested inside a bold run opening at *"under NHL and IIHF rules"*. Fixed by closing the outer span early — no wording changed, and the claim itself was verified sound (NHL + IIHF allow the raised skate; USAH 630(a) and HC 6.11 Interpretation 3 require contact). Re-parsed: **nested spans corpus-wide now 0.** | round 51 |
| ⬜ | **62% of the corpus's rule-set warnings render invisibly, and one plugin change fixes all of them** | **Found by `site-reviewer`, round 51 — no other dimension can see it.** The site turns a ⚠️ into a distinct orange callout, but **only when the ⚠️ leads a blockquote**: `site/src/plugins/remark-corpus.mjs` matches `/^\s*(⚠|❗|🚫)/` at the head of a blockquote. Its own comment states the purpose — *"blocks carry rule-set warnings that change what a reader does, so they get their own treatment."* **Of 253 ⚠️ rendering site-wide, 94 get the callout and 159 do not**: 92 inside list items, 58 inside paragraphs, 3 in table cells. So most of the corpus's *"this rule is not yours"* warnings — the ones written precisely because a reader acting on the wrong book gets penalised — have **no more visual weight than the prose around them**. ⚠️ **Two options, and the reviewer preferred the second:** (a) lift each ⚠️ into its own blockquote — a **content** edit across ~30 documents, needing `content-reviewer` and `safety-reviewer`; or (b) **extend `remark-corpus.mjs` to wrap an inline ⚠️-led bold run in a `.warn-inline` span** — a plugin/CSS change that **fixes all 159 at once and touches no content.** (b) is cheaper, safer and reversible. **This is the highest-value site item in the plan.** | round 51 |
| ⬜ | **Site rendering defects `site-reviewer` measured, all pre-existing** | **`####` headings are smaller and dimmer than the body text they introduce** — 16.48px in `--text-muted` against a 17px paragraph in `--text`, so a section heading is **the least prominent text in view** (`global.css:793-797`). Contrast passes AA both themes; it is a **hierarchy inversion**, not a contrast failure. Affects 40 sections. · **`####` sections are invisible to the on-page ToC** (`TableOfContents.astro:11` filters `depth === 2 \|\| depth === 3`). · **Heading permalinks do not exist anywhere.** `rehype-corpus.mjs` documents that it adds one to every h2/h3; `grep -ro 'heading-anchor' dist` returns **0** across 36 pages that do have `<h3 id=…>` — the ids are assigned after the plugin visits, so **the feature is dead.** · **Every deep link lands 144px down and visibly jumps** — `scroll-padding-top` on the container **and** `scroll-margin-top` on the headings are both `calc(--header-h + 1rem)`, and Chrome sums them. · On a phone the "Contents" link scrolls to the bottom of the document with no way back. | round 51 |
| ⬜ | **Three elements are walls on a phone, measured in a browser** | `on_ice_communication`'s **"Screen"** bullet — **3,236px, 4.0 phone screens**, against siblings of 144–376px. The reviewer answered the question directly: **"no, the Screen bullet is no longer findable as a call."** It opens as one, then becomes four screens of rulebook comparison with two ⚠️ buried inside. · `rules_primer` **Key Takeaway 9** — **3,322px, 4.1 phone screens**. ⚠️ **And this round is the largest single contributor to it:** KT9 went from **1,795 to 4,321 characters in this diff (+2,526)**, and KT1 from 911 to 1,675. **I first reported KT9 as "~2,900 characters" — understated by half, in the flattering direction, and the gate caught it.** **Eight** of the ten now exceed 1,150 characters (KT9 4,321; KT4 2,106; KT6 1,901; KT3 1,877; KT1 1,675; KT8 1,612; KT5 1,592; KT7 1,480 — only KT2 at 566 and KT10 at 389 are short); the rendered list is 16.4 phone screens. **Deferring this is defensible; deferring it on a figure that understates by 50% is not.** ⚠️ **And I then understated the COUNT in the very sentence recording that catch** — I wrote *"five of ten"* because I measured only each takeaway's **first line**; items that wrap were undercounted. The gate caught it on the third pass. **Measure the whole item, not the line it starts on.** Round 49's title was *takeaways that were essays*; that item was closed as an owner decision on the grounds that the length **is** the four-book divergence, and this is the measurement the owner needs to revisit it. · `winger`'s new `####` paragraph — **3,582px, 4.4 screens, 5,281 characters, five ⚠️ inside** — being fixed in round 51 as this round's own contribution. | round 51 |
| ✅ | **The NHL extraction is now PROVEN faithful — one of four books retired from doubt** | **`md5(sources/nhl_rules.txt)` is byte-identical to a fresh `pdftotext` of the live published PDF** (`5b0ef3b928ea772fa5f8bc1a7ece577e`, zero diff lines), refetched 28 Aug: HTTP 200, 21,695,323 bytes, 232pp, no redirect. A bulk pass matched **209 quoted strings** from `content/` verbatim. ⚠️ **This retires "the extraction may not be the book" for the NHL ONLY.** `iihf_rules.txt`, `usah.txt` and `hc.txt` carry exactly the same unproven status the NHL file carried until now — and several of this round's load-bearing findings are **negatives** in those three (Hockey Canada writes no ground-holding entitlement; USA Hockey writes no goaltender-vision provision; Rule 69 is on no IIHF penalty table). **A negative in an unverified extraction is the weakest evidence this corpus accepts.** Refetching the other three PDFs and MD5-matching them is cheap, mechanical, and would retire the single most common caveat in the review records. | round 51 |
| ⬜ | **The corpus's only `[sic]` is read aloud as the word "sick"** | `faceoffs.md` quotes NHL Rule 76.7 as *"When a [sic] least two face-off violations…"*. The `[sic]` is **correct scholarship** — `source-verifier` rendered printed page 116 of the published PDF at 600 dpi and the book genuinely omits the *at*, with the control *"has at least touched the puck"* four lines above in the same typeface. ⚠️ **But `scripts/md_to_speech.py` has no handling for it, and this is the only `[sic]` in the corpus**, so a listener hears *"sick"* mid-quotation. Mitigated at the point of use — the next sentence glosses it (*"The missing word is the rulebook's own — it means *at* least two"*) — which is why the gloss is there. **The work is a `md_to_speech.py` rule that renders `[sic]` as something a listener can parse, or drops it from the spoken form while keeping it in the written one.** Small, and it will matter again the next time a rulebook typo has to be quoted faithfully. | round 51 |
| ⬜ | **A negative existence claim resting on four documents this repository cannot open** | `switching_positions.md:40` and `:487` assert that *"the rulebooks and casebooks (NHL, IIHF, USA Hockey and Hockey Canada) … pass over the subject"* of switching positions. **No casebook of any of the four is on disk** — the style guide already records that the USA Hockey Casebook never has been — and none is now cited in that file. So the claim is unfalsifiable from this repository **in the direction that matters**: a casebook could cover the subject and nobody here could tell. ⚠️ **Do not delete it** (non-negotiable 3) and do not rewrite it blind — the agent that found it declined to, because rewriting would be *authoring a new claim about books it cannot open*. **The work is either to obtain a casebook or to narrow the claim to the playing-rule books actually held**, which is the form the corpus already uses elsewhere (*"a search of the two playing rule books… the separate Casebook is not held here"*). Related: `how_to_watch_hockey.md:194` walks NHL 82.2 (i)–(iv) in a way a reader could take as the whole procedure — it asserts no count, so it is not wrong, but the Sources note now enumerates all eight. | round 51 |
| ⬜ | **Twenty files link the superseded IIHF revision** | Every content file citing the IIHF rulebook links `…2025-26_iihf_rulebook_19052025-v1.pdf` — **that is v1.0** — while `sources/eiha_inhouse.txt`'s Introduction records that **EIH, SIHA and BUIHA adopt Version 1.1, July 2025**. Zero files link the v1.1 mirror. ⚠️ **Not a reader-facing error today**: the three passages newly cited this round were confirmed **identical in both revisions**, and the corpus verifies against `iihf_rules_v1.1.txt` on disk. But the link text says *"2025/26"* with no version and serves the **superseded** revision to the readers whose book it actually is. **The work is: confirm a stable v1.1 URL, update the 20 links, and record which revision each quotation was verified against.** → `source-verifier`. | round 51 |
| ⬜ | **"Existence in a book is not attribution to a book" — a defect class nobody has swept for** | **Found by accident.** A `source-verifier` bulk pass matched 209 corpus quotations verbatim in the NHL text; one of them, in `faceoffs.md`'s Key Takeaway 1, was **Hockey Canada 6.2(a)'s wording presented as shared by three books**. The NHL says *"ejected from the face-off **circle**"*; USA Hockey says *"**the center of their team** shall be ejected"*. The **substantive claim was true** — three books do eject the centre — so no rules reviewer flagged it, and the string matched cleanly in the bulk pass **and was still wrong about who said it**. ⚠️ **Only reading the surrounding context found it, and the agent read context for 4 quotations out of 209.** The corpus carries hundreds of quotations attributed to one of four books; **nothing checks that a correctly-quoted string is credited to the book that actually printed it.** No checker can: `check_facts.py` validates shape, and a grep confirms existence. **This is a real sweep, it is large, and its shape is: for each quoted string, which book's wording is it?** | round 51 |
| ⬜ | **Unsourced prevalence claims — the pattern outlived its sweep** | Round 51 removed the *"commonest net-front goal"* family from **eight** documents (it was generated once, in a coordinator brief, and stamped into all eight by agents that could not read each other's files). ⚠️ **The sweep was keyed to the surface forms it already knew.** The agent that finished it said so: it did not search *"most common"*, *"more often than"*, *"the usual case"*, *"typically"*. **Two survivors were named and left, both pre-existing at HEAD and so out of that commit's scope:** `goaltender.md:931` — *"one of the most common and least discussed causes of goals against"* — and `goaltender.md:928`. Neither is sourced; nothing in `content/`, `project/` or `sources/` counts goals by cause. **The work is a corpus-wide sweep for the CLAIM SHAPE, not for the phrases already found** — unsourced prevalence, frequency and ranking assertions of every wording. This is the third time this round a grep keyed to known vocabulary missed the same defect in unknown vocabulary. | round 51 |
| ⬜ | **The corpus may now repeat itself into uselessness, and no review dimension asks** | **The largest thing round 51 changed, found by `content-reviewer` in its own closing section.** The round added roughly **16,000 words of four-book rules comparison across 29 files — about 70 minutes of speech** — concentrated in the same five minutes of every net-front section. The corpus is now **50.6 hours**. **A listener working through the crease material meets substantially the same 700-word comparison FOURTEEN times**: `shooting.md`, `offensive_zone_play.md`, `special_teams.md`, `defensive_zone_coverage.md`, `time_and_space.md`, `playing_without_the_puck.md`, `scanning_and_anticipation.md`, `goaltender.md`, `winger.md`, `center.md`, `body_contact_and_battles.md`, `team_play_and_culture.md`, `rink_map_and_glossary.md`, `on_ice_communication.md`. ⚠️ **Every one of those passages is individually correct and individually justified** — each document is meant to stand alone, and the round's whole purpose was to stop each of them stating a rule that was not theirs. **That is exactly why no dimension caught it.** D9 checks a summary against its body; D14 checks one document's structure; nothing asks whether the corpus as a whole has become a liturgy. **This is an owner decision and a genuinely hard one** — the alternative to repetition is a pointer, and a pointer is useless to a listener who cannot click. Candidate framing: keep the *instruction* in all fourteen, keep the *scope flag* that tells a reader whether the rule is theirs, and let one owner carry the comparison. **Do not sweep this without deciding it first.** | round 51 |
| ⬜ | **Debts round 51's own repairs created — the next round's first work** | **Seven, all recorded at the moment they were incurred rather than discovered later.** (1) **Three documents state the puck-carrier lapse in three wordings** — `rules_primer.md`, `zone_entries.md` and the new `breakouts.md` section — written by three agents each forbidden from reading the others' files. **Nobody has reconciled them.** (2) **Interpretation 1 and Interpretation 2 govern different consequences and three bodies blur it**: Int. 1 saves the **goal**, Int. 2 conditions the **penalty**; `center.md`, `winger.md` and `offensive_zone_play.md` all call Int. 1 "the relief" for Int. 2 without saying which. The agent deliberately did **not** author the distinction — *extract, never author* — so it needs a body edit in all three. (3) **The Table 14 / Table 16 screening qualification lives in `rules_primer.md` only**; several documents still carry the bare claim. (4) **`offensive_zone_play.md:517`** is now the only place "flat" and "Hockey Canada" sit together — correctly qualified two clauses later, and *"a future compression pass would drop the qualifier first."* (5) **Nobody has checked whether the IIHF, USA Hockey and Hockey Canada *slashing* rules reach the hands** independently of their hooking rules, as NHL 61.1 does — if they do, *"three books of four"* stays true but the four-book picture is **wider** than the corpus states. (6) **`hc.txt` Rule 6.11(b) contains TWO `i/ii` lists** and the corpus cites `6.11(b)(ii)` for both — not wrong, but not unique either. (7) **HC's *"by actual physical contact"***, quoted in two Sources notes, is the **glossary** definition (`hc.txt:1024`), not an Interpretation — verbatim, but attributed to the wrong part of the book. | round 51 |
| ⬜ | **A genuine internal contradiction in two rulebooks, reported and NOT resolved** | **NHL 69.3 and IIHF 69.3 say the give-ground attacker takes a penalty; their own appendices say he does not.** NHL Reference Table 14 D (`nhl_rules.txt:12355-12364`) and IIHF Appendix IV Table 16 Situation 6D (`iihf_rules.txt:9989-9992`) both answer the goal-scored case *"Goal is disallowed. **A minor penalty is not assessed (loss of goal only)**."* The severity divergence between the two books bites at **6B**, the no-goal case. **No source on disk settles which governs**, and the agent that found it reported both rather than choosing — correctly. Recorded in the style guide. **What would settle it:** the IIHF Situation Handbook (`sources/iihf_situations.txt`, on disk, **not searched for Rule 69**) and the USA Hockey Casebook (**not on disk**). ⚠️ Both tables are **two-column extractions where description and result interleave**; the rows were matched by adjacency and by the IIHF's cleaner parallel, and **neither PDF page was rendered and looked at**. Verify visually before relying on it further. | round 51 |
| ✅ | **The Hockey Canada crease characterisation — 32 sites, 12 documents, propagated in ONE round** | **ADJUDICATED AND SWEPT, round 51.** The corpus said HC 8.5 was a *flat position bar with no impairment to judge* and paired it with USA Hockey 625(b) as the same rule. **Both halves were wrong.** HC's *Goal Crease Area* paragraph (`hc.txt:6992-7000`) carries a **carve-out USA Hockey lacks** — a teammate's goal from outside the crease **stands** where the crease player stays passive — so **on the commonest net-front goal in hockey the two books give opposite answers**, and 13 of 15 files said they were identical. HC also **does** have an impairment test naming **vision** (Interpretation 3 to 8.5(a)); it is the counterpart of **NHL 69.3**, not 69.1, and what HC lacks is 69.1's reach **outside** the crease. ⚠️ **The screening negative SURVIVED** — it needed the outside-the-crease qualifier, not a retraction. ⚠️ **The corpus quoted Interpretation 3's permissive sentence at four sites and its restrictive sentence NOWHERE** (zero hits corpus-wide) — the style guide's *true half of a two-part rule* failure, found exactly. **Retired corpus-wide:** *"with no impairment to judge"*, *"voids the goal outright"*, and any unqualified *"no screening or goaltender-vision provision"* — the last of which was **literally false**, since USA Hockey 625(a)(1) *is* a screening provision (a screen on a **checker**). | round 51 |
| ✅ | **The EPUB render path was never checked either** | **CHECKED 28 Aug — and unlike the TTS path it is sound.** `npm run build` exits 0 with no errors; `check-links` resolves **7,069 internal links (3,780 with anchors)** across 42 pages; `check-arrivals` reports **0 hard** warnings and 7 advisory. All **9 EPUBs** build valid: correct `application/epub+zip` mimetype, one OPF each, zip-intact, and **92 XML documents inside them, 0 malformed** — the well-formedness class that killed the SSML path does not occur here. **Verified end-to-end rather than by exit code:** six of this round's actual edits were located in the rendered EPUB text, so the pipeline demonstrably carries content changes through, not merely builds. | round 51 |
| ✅ | **The TTS render path was never run end-to-end, and it was broken** | **FIXED in `scripts/md_to_speech.py`, 28 Aug — a real bug, pre-existing at HEAD, found by running the renderer instead of reasoning about it.** `--dry-run` over the corpus died with `xml.etree.ElementTree.ParseError: mismatched tag`: **every document failed to render**, because one did. Bisected to `defending_the_rush.md`, chunk 31, which emitted `<say-as interpret-as="characters">IIHF</p>` — the opening tag orphaned and closed by the paragraph. **Cause: an off-by-one in `_split_paragraph`.** Its per-token flag answers *"may the split happen before this token?"*, but was read **after** the token's own tag had changed the depth, so a **closing** tag (depth 1→0) looked like a safe boundary and the splitter broke immediately before it. Fixed by capturing the depth first. ⚠️ **The first regression test written for it was vacuous** — it split, but nowhere near the tag — and that was only discovered by **reintroducing the bug in a scratch copy and confirming the test still passed.** The shipped test is markup-heavy (so the *total*-character limit bites before the *billed* one, putting the boundary on a tag rather than a sentence end) and sweeps a pad across every offset in the repeating unit: it reports **86 malformed cases** against the broken version and none against the fix. Corpus now renders **37 documents, 1,687 chunks, 3,671,640 billed characters**, all valid SSML. **A test that has never been seen to fail has not been tested.** | round 51 |
| ✅ | **Delayed-offside whistle triggers — a contact consequence, four sites, needs a safety pass** | `rules_primer.md:171-176` lists the triggers flat and `:180` calls *"merely chasing the defenceman deeper kills the play"* the most misunderstood part of the rule. **That is NHL and IIHF text.** NHL 83.3 and IIHF 83.3 have four triggers including *"about to make physical contact"*; USA Hockey 630(d) has two and no about-to-contact trigger; **Hockey Canada 6.11(b)(ii) has neither forcing-deeper nor about-to-contact.** The corpus relies on that trigger to teach that play is dead before the check lands — under two books of four it is not, and Hockey Canada's remedy is 6.11(d)(i), which expressly reaches a play *"against an opposing player"*. Repeated flat at `zone_entries.md:167`, `:174`, `time_and_space.md:404`, `:416`.  **28 Aug — PREMISE INDEPENDENTLY RE-DERIVED AND HELD IN FULL, the first row this session that did.** All four books re-read: NHL 83.3 and IIHF 83.3 carry the same four triggers word-for-word; **USA Hockey 630(d) writes two** — and its second limb *"or continues to apply pressure to the defending puck carrier"* is **broader** than the NHL's *"forces… further back"*, so the divergence runs in both directions, not just toward leniency; **Hockey Canada 6.11(b)(ii) writes one**, with a locative qualifier — *"while the puck is still in the attacking zone"* — the other books lack. ⚠️ The IIHF text **wraps mid-phrase inside curly quotes**, so grepping its trigger wording returns zero. It is there. Site lines had drifted: `time_and_space.md` is **:418**, not :404/:416. Agent running on `zone_entries.md` + `time_and_space.md`; `rules_primer.md:172-177` **DONE — all four documents, reviewed and gate-cleared.** `zone_entries.md`, `time_and_space.md`, `rules_primer.md` and a **new `breakouts.md` section**, which the round found did not exist at all despite `rules_primer.md` pointing at it as the owner. ⚠️ **The repair produced a critical of its own:** scoping the whistle to the North American books left every NHL/IIHF reader — i.e. every British reader — told he had *"genuinely uncontested seconds"*, and **83.3's triggers name the *puck carrier*, so the protection lapses the instant he passes**. Head-up now leads, in all four books. ⚠️ A second overstatement was corrected in the other direction: USA Hockey's **pressure** limb *can* stop play, so "no whistle comes before the hit" was wrong for that book. |
| ⚠️ | `shooting.md` vs `offensive_zone_play.md:60` | **DIAGNOSED 28 Aug. The row is right and the situation is worse than 'the owner does not hold the figure'.** `offensive_zone_play.md:60` asserts shooting percentage outside the dangerous area *"has been **under 5%** across a decade of NHL data"*, crediting **McCurdy / HockeyViz 2007–2017 via The Coaches Site**. The style guide's named owner of shot-location value, `shooting.md`, **does not hold that figure at all** — it holds a different pair (point shots ~1–3 goals per 100, house shots ~5–15) credited to **Hockey's Arsenal**, and labels them *"Greg Revak's readings off a shot-location map he credits to HockeyViz"* — i.e. **approximate by construction**. So the corpus has two different secondary restatements of the same primary analyst, in two documents, one of which is honest about being a reading off a map and one of which is not. `shooting.md:793` already discloses that its three shot-location figures *"do not rest on equally good evidence"*. **The decision for the owner:** either move the under-5% figure to `shooting.md` and give it the same construction label, or drop it from `offensive_zone_play.md` in favour of a link to the owner. **Do not simply delete it** — non-negotiable 3. **`source-verifier` HAS NOW RUN (28 Aug) and the answer is neither of the two options this row offered.** Seven URLs refetched, all HTTP 200, both quoted strings located in rendered body. **Three findings, and only one of them is the owner's call:**
1. ⚠️ **NOT a decision — an accuracy defect. The claim is contradicted by its own source.** `hockeyviz.com/txt/edgar` publishes **three** maps, one per strength state. Revak read only the even-strength one. On `shotPercs-PP.png` the **5% contour reaches the blue line**, enclosing both points — so on the power play a point shot is *inside* 5%. The corpus states it with **no situational scope**, at `:60`, at Common Mistakes `:885` and at Key Takeaways `:948`, **which is read aloud with no context.**
2. ⚠️ **NOT a decision — the metric is wrong.** The map is *"Goals per **Unblocked** Shot, 2007-2017"*, and the page defines a shot as *"a goal, a save, or a miss"* — a **Fenwick** denominator. "Shooting percentage" means goals over shots **on goal**. The corpus inherits this from Revak; **the primary does not make the error.** Affects `shooting.md:345`/`:356` too.
3. **THE OWNER DECISION, and it is now better posed:** the two citations are **not two sources**. Both are **Greg Revak**, both link to the same Edgar page, both read contours off **the same PNG**; the 2024 Coaches Site piece self-links to his own 2020 newsletter. So the choice is not "move it or link to it" but whether to **merge both figures under `shooting.md` as one fact with one construction label**, which is what the reviewer recommends. ⚠️ Note the 2020 newsletter **does not contain the under-5% sentence at all** — it is new in the 2024 rewrite, so the figure has no 2020 provenance.
**Do not delete it:** traceable to a live primary, well-sourced, under-labelled rather than unsupported. ⚠️ **The chain bottoms out at a rendered contour plot** — no table, no sample size, no data release — so the measurement itself is unfalsifiable from here, and the reviewer's own PP reading is a contour reading too. `link_baseline.tsv` rows for the four primary URLs are drafted in the round-51 record. | round 43 |
| ⬜ | Crease rule-set divergence, 16 sites | `offensive_zone_play.md:485`/`:943` carry USA Hockey 625(b) and the IIHF loitering provision; ~16 summary-layer sites across 12 documents give NHL 69.1/69.3 flat. `special_teams.md:907` groups the IIHF **with the NHL**; `offensive_zone_play.md:943` groups it **with USA Hockey**. **→ `rules-verifier` on 625(b) and IIHF 69.1's final sentence before any sweep.** | round 44 |
| ✅ | `risk_management.md:730` KT5 **FIXED — round 50** — restructured rather than clause-patched: KT5 now classifies seven of the nine as coaching conventions and carries the both-defencemen hedge inline. A **fourth site the row did not name**, the Overview at `:14`, had the same deferral and was fixed too. | The both-defencemen absolute survives inside a nine-item `never` list, where the hedge is deferred ~200 words. The other two sites in this document were fixed in round 44; **this one needs the list restructured, not a clause added.** | round 44 |
| ✅ | `content_style_guide.md` — the "full corpus" list | **FIXED 28 Aug — reviewed and gate-cleared, round 51.** Premise re-derived mechanically rather than trusted: the list held **35** entries against **37** on disk, and the two missing were exactly the ones named. `uk_rules.md` added to **Foundation**; `reading_ice_hockey_diagrams.md` given its own **Reading diagrams** group, since the list's headings are thematic rather than directory-based (`defending_the_rush.md` sits under *Situational* but lives in `systems/`). Re-diffed after the edit: **37 listed, 37 on disk, nothing missing in either direction.** ⚠️ Worth noting what this row cost elsewhere — the sentence beneath the list reads *"Link only to documents on this list. Assume every one of them exists"*, so for two documents the specification was telling authors not to link to real corpus files. | round 44 |
| ✅ | NHL encroachment cited three ways | **WRONG PREMISE — the seventh. No defect exists; closed 28 Aug without an edit.** The row reads the three rule numbers as an inconsistency. They are **four distinct provisions**, and the corpus cites each correctly for its own subject: **76.2 Face-off Locations** (where a draw happens), **76.4 Procedure – Centers** (stick placement, positioning — **and the removal language**, *"he is to be removed from the face-off and replaced, resulting in a face-off violation"*), **76.6 Procedure – Other Players** (encroachment by a non-centre), **76.7 Violations** (the definition and the bench-minor escalation). The row names `on_ice_communication.md:273` as citing 76.2; the line cites **76.6**, which is exactly right for a winger creeping into the circle. **Verified by reading all four rules, not by grepping the numbers.** | round 43 |
| ✅ | `faceoffs.md:849` **FIXED — round 50** — *computed for this document* label restored, *team results* narrowed back to *points percentage* | The Common Mistake drops the *"computed for this document"* label its own KT5 carries, and broadens "points percentage" to "team results". The style guide requires the label to travel. | round 44 |
| ⬜ | "Stay high" — a fourth sense | `winger.md:610` defines it as *"level with the opposing defenceman while they have the puck, and it expires the moment your team wins it"*; `breakouts.md:702` uses the control-breakout sense, i.e. after your team has it. The body at `breakouts.md:205` flags both senses; **the facts line does not, and facts lines are read alone.** | round 44 |
| ✅ | Four documents at 11 Key Takeaways **FIXED — round 50** — all four merged (not compressed) to 10 | `neutral_zone_systems.md`, `switching_positions.md`, `practice_and_development.md`, `scanning_and_anticipation.md`, against the style guide's 5–10. Round 43 recorded one of the four. | round 44 |
| ✅ | `conditioning_and_recovery.md:528` **FIXED — round 50** | Common Mistakes carries the Copenhagen adduction exercise's *very-low-certainty* hedge but **not the retraction** its own Key Takeaway 4 and body both carry. A dropped qualification in the layer read first. | round 43 |
| ✅ | `conditioning_and_recovery.md:524` **FIXED — round 50** | *"…in the study cited above"* — read aloud there is no "above", and the body's *"one study in fourteen semi-professional players"* hedge does not travel. | round 43 |
| ✅ | `conditioning_and_recovery.md:553` **FIXED — round 50** | `Check yourself` Q1 points at *"§Concussion — …The absolute rule"*; round 41 renamed that heading to `### Concussion: the absolute rule`. **The reference degraded rather than broke, so no link checker can see it.** | round 43 |
| ✅ | `defender.md:586` vs `conditioning_and_recovery.md:39` | **FIXED and gate-cleared — round 51.** Both are 2024-25 corpus computations off the same NHL report; neither is wrong and neither is now silent about the other. ⚠️ **The cause is not only the population filter, as I first diagnosed.** The documents declare *two* differences — population (every skater who took a shift vs the 587 with 41+ games) **and estimator** (`defender.md` pools total ice time ÷ total shifts; `conditioning` averages the per-skater `timeOnIcePerShift` field). **The gaps run in opposite directions by position** (D 48.7→48.8, F 47.4→47.1), which no single mechanism explains, so both clauses state the differences and deliberately **assert no cause**. ⚠️ The 2024-25 parenthetical also carried **no unit and no position labels** — a listener had to carry "defencemen against forwards" across two clauses. Now explicit. | round 43 | round 43 |
| ✅ | `how_to_watch_hockey.md:580` · `mental_game.md:629` · `faceoffs.md:849` · `practice_and_development.md:555` **FIXED — round 50** — all four now carry their owner's qualifications | Four owned numbers restated in a summary layer **without their owner's qualifications** — the 44 ft to the dot, the 18% of variance (no CI, no 82%-unexplained), the 6% faceoff correlation (drops its *computed-for-this-document* label), and a single-game possession measurement generalised to *"a full game"*. | round 43 |
| ✅ | `practice_and_development.md:608-620` **FIXED — round 50** — merged with the item above | **Eleven Key Takeaways** against the style guide's 5–10. Every other document in scope is at 10 or fewer. | round 43 |
| ✅ | `skating.md:888` **FIXED — round 50** — labelled unverified after an exhaustive search found no source; not deleted | *"Almost every race you contest is decided within about three strides"* — unsourced, in a section whose point is that a **neighbouring** three-strides claim is *"positively contradicted by the biomechanics literature"*. The two are genuinely different and this one is not wrong; it needs a *coaching observation* label. | round 43 |
| ✅ | `zone_entries.md:174` **FIXED — round 50. The row's premise was wrong.** The 'missing half' (the own-goal exception) was already carried at `:174`, `:178` and `:919`. What was genuinely missing was **book scope**: 83.4 was attributed to NHL+IIHF with the other two books unaddressed. Verified: **USA Hockey Rule 630 has no disallowed-goal provision at all** (617(b)(2) and 617(c)(8) point opposite ways and the Playing Rules never resolve it), and **Hockey Canada 6.11(b) has the disallowed half but not the own-goal exception** — absent from the rule and all thirteen interpretations. Propagated to the owner, `rules_primer.md`. | NHL **83.4** stated truly, but without the half that favours the reader: 83.4's closing sentence gives an exception the document hands to the **defender** at `:908` and withholds from the attacker, who is told the puck cannot go in and given no cue to keep playing. **→ `rules-verifier` to adjudicate**, not an editorial call. | round 43 |
| ✅ | `center.md:116` **FIXED — round 50** | An `Action:` states the weak-side collapse unconditionally; the body carries **two named exceptions** (`:135`, `:137`) and the document's own `Check yourself` Q2 demands the reader name them. A centre leaves the slot expecting a collapse that cannot come. | round 43 |
| ✅ | `center.md` §Overview **FIXED — round 50** | **Four facts are not traceable to §Overview's own body** — the swing-breakout split, low-zone-collapse-vs-man, and "ten to fifteen" all live in sections further down. All true and correctly hedged, so per the style guide this is *a finding about the section*: the Overview body should name the alternatives it hedges against. | round 43 |
| ✅ | `faceoffs.md` | ✅ **"Ten to fifteen draws a game" — FIXED, round 50. The row was wrong:** the figure *does* appear in its owner, `faceoffs.md:17`, `:52` and `:62`. The real defect was that it is **unsourced everywhere**. Labelled at the owner as a coaching estimate rather than a count, and `center.md` now points there instead of restating it bare, with no source or label anywhere in the corpus. Either source it in `faceoffs.md` or label it coaching craft. | round 43 |
| ✅ | `center.md:356` **FIXED — round 50** — NHL 69.1 carve-out added with its reasonable-effort proviso | `Never: Take your body inside the blue paint` omits NHL **69.1**'s carve-out for an attacker *pushed* in by a defender. The body defers it to Rules Primer. Errs conservatively, but a reader shoved in and waved off will believe the corpus told them so. | round 43 |
| ✅ | `defender.md:268` vs `:271` **FIXED — round 50** — resolved to *confident*, matching the owner | Two thresholds in one block for the same decision — *"confident"* against *"certain"*. Inherited from the body (`:276`, `:280`), so **fix the body first**. | round 43 |
| ✅ | USA Hockey 614(b)/618(a) | Both read *"A **penalty shot/optional minor penalty**"* and the corpus stated the shot unconditionally. **Fixed:** `center.md` now cites Rule **406(a)**, under which the non-offending team *"may, prior to the penalty shot, elect that the minor … be assessed … in lieu of the penalty shot"*. ⚠️ **This entry first credited the election to a One Pass rule — which is a *Blind Hockey* rule** (`usah.txt:6559`, *"to give low-vision and completely blind players the best chance to track the puck"*), with the glossary gating on it sitting inside the Disabled Hockey chapter. Reading it as the general glossary would have hedged a correct claim on a condition that does not reach these readers. | round 43 |
| ⬜ | Hockey Canada 10.2(a)(v) | The new *"the puck's location decides, not the player's"* is an **NHL/IIHF/USA Hockey** rule. Hockey Canada locates the penalty shot by where the **infraction** occurs. Stated with book scope in the facts lines; reads as a law of hockey in prose. | round 43 |

---

## Tier 2 — Needs a decision, not an edit

**⬜ A cross-position matrix — zone × puck-situation. Owner-requested 27 August. Decide the
FORMAT before writing a cell.**

`mind_map.pdf` (repo root, 3 pages, image-only — no text layer, so `pdftotext` returns nothing;
read it with a visual PDF reader) sets out **Defender, Center and Winger** — *not* goaltender — each
as **Core Role** plus three zones, each zone split four ways: *carrying puck – free space*,
*carrying puck – under pressure*, *pressuring opponent*, and *without puck*. Leaf labels are
`Position:` `Action:` `Goal:` `Key:` `Risk:` `Technique:` `Priority:` `Options:` `Mindset:`.

**Why it is worth doing.** It is a cut the corpus does not have. Position documents organise by
position and systems documents by system; **nothing answers "winger, neutral zone, no puck — what
do I do?" in one view**, which is the commonest question a player has on the bench. The label
vocabulary also maps almost 1:1 onto the ` ```facts ` layer, so the matrix is **extractable from
what already exists** rather than authored — which is this project's whole method.

⚠️ **Why the obvious format is wrong, and this is the decision.** A table of *claims* would be a
**seventh summary layer** — after Overview, body, facts, Common Mistakes, Check yourself and Key
Takeaways — and the first one to **span documents**, breaking the one-owner rule that makes
propagation tractable. Round 10's finding was that *every critical it sustained was a correction
that reached the body and stopped*; this would add ~36 cells per position that every future
correction must also reach.

**And nearly every cell is a coaching choice the mind map labels as a rule:** *"Do not chase into
corners, leave for wingers"*, *"Never have both defenders pinch at once"*, *"Pinch only if 100%
certain"*, *"Avoid double covering with partner"*. Under man-on-man a defender **does** follow into
the corner; "never both pinch" is a house default. That is
[non-negotiable 7](../../CLAUDE.md) — the cardinal rule, and the corpus's most common failure — and
a table actively pushes toward dropping the hedge, because cells must be short. **Separately, the
mind map's `Rule:` means *guideline*; the corpus's `Rule:` means *rulebook rule with a citation*.**
Importing that vocabulary would corrupt a convention 4,629 facts depend on.

**Recommended resolution: build it as an INDEX, not a summary.** Every cell carries a short label
**plus a link to the owning section**, and asserts nothing standalone. An index cannot drift,
because it makes no claim to go stale. Where a cell would state a coaching choice, the cell reads
*system-dependent* and links. That converts the idea from a seventh staleness surface into the
navigational spine the corpus currently lacks, and it serves `getting_started.md`'s four entry
routes, which presently have no destination of this kind.

**Open questions for the owner:** (1) index or summary — the above recommends index; (2) where it
lives — `positions/` needs a new document, or it extends `getting_started.md`; (3) the goaltender
column, which the mind map does not supply and which does not fit *carrying puck – under pressure*
at all; (4) whether it renders in the podcast, where a 12×3 table is noise — probably `speech: skip`.

**Provenance:** `mind_map.pdf` is **unsourced** and must not be cited. It is a structure to borrow,
not evidence; every cell's content is re-derived from the corpus and its own sources.



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
all 37 documents are **51,978 words across 74 sections** — large, but a fraction of the corpus — ⚠️ **round 44 recorded 85,820 here**, inflated by 34,403 words of Sources footers swept into the section span; see round 48 — and they are the layer the
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

**✅ "Walking an opponent out" is taught as universal and is not. — FIXED 28 Aug — reviewed and gate-cleared, round 51.** `body_contact_and_battles.md`
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
"every league" sentence the way §5 already is. **Done at four sites, not the three this row lists:** `body_contact_and_battles.md` (§1's blanket claim now reads *"Two things are not"*, plus §9 step 3, its facts block, Common Mistakes and KT4), `defensive_zone_coverage.md` (facts + body + **three rulebooks added to Sources**, which had cited no IIHF rulebook at all), and **`on_ice_communication.md:212`, a fourth site no row had listed** — found by the agent fixing the third and correctly left for a separate pass rather than swept. ⚠️ **Two manufactured generalisations were caught inside the repairs themselves, not by review:** Common Mistakes had asserted *"**Every** non-check rulebook explicitly permits leaning, sealing, boxing out and angling"* — **false for Hockey Canada**, which blesses only same-direction incidental contact; and an agent drafted *"three of the four books"* protect a held position before finding **HC 8.1** one grep later and shipping *"all four"* with each book quoted. **Both were one grep from being wrong in the corpus.** **A third quantifier in the same sentence was flagged as unverified and has now been attacked and UPHELD:** *"at or near the hands it is hooking in three books of four"* is **correct** — **IIHF 55.1** states the hands limb inside its hooking definition (*"if the stick goes against the opponent's hands / or near the opponent's hands, it shall be penalized as 'hooking'"*), **USA Hockey 623**'s Note and **Hockey Canada**'s Interpretation 1 to 8.2(a) both write it, and the **NHL's 55.1 does not**. ⚠️ **But the count invited a false inference and that gap is now closed:** an NHL reader could take "three of four" as a licence. It is not — **NHL 61.1** makes a *"forceful or powerful chop… on or near the opponent's hands"* **slashing**. Found only because the unwrapped search for that phrase hit the NHL book **once**, in Rule 61 rather than Rule 55. Neither book writes a stick-to-stick carve-out outside the NHL and IIHF — verified unwrapped, since the hyphen wraps.

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
plumbing. **Re-attacked against a fresh `dist/` on 28 Aug and it holds.** `sitemap.xml` is
well-formed and lists **40 URLs**; the only built page absent is **`/offline/`**, the PWA fallback,
which correctly should not be in a sitemap. `robots.txt` points at it and the target exists.
⚠️ **Note for whoever checks next: this site emits a single custom `sitemap.xml`, not the
`@astrojs/sitemap` pair (`sitemap-index.xml` + `sitemap-0.xml`).** Looking for those filenames
returns 404 and makes the sitemap look missing when it is not — I made exactly that mistake before
checking. **P4 is not contradicted by this:** Open Graph tags are present, `og:image` is what is
absent (**0 of 42 pages**, and all 42 carry `twitter:card=summary`).

⚠️ **Sequencing constraint, and it binds.** No `content/` or `site/` change while another agent
is working. Commit `239f70d` exists because a corpus-wide sweep raced a document-level edit and
clobbered it silently. Check `git status` and `git log -1` before starting any of these.

| | Item | Why it is worth doing |
|---|---|---|
| ⬜ **P1** | Push five striking-distance pages over the click threshold | ~1,200 impressions sitting at **positions 13–17**, just below where this site's own pages start converting at 1–3%. `neutral_zone_systems`, `equipment`, `conditioning_and_recovery` and two others. |
| ⬜ **P2** | Build out the concept and terminology surface | **The strategic finding: concepts win, rules lose.** Definition-shaped queries already show and none converts — *"what is the half wall in hockey"* at 19.6, *"forechecking"* at 27.3. This is where the corpus demonstrably beats NHL.com. |
| ⬜ **P3** | Section hub pages | `/technique/`, `/systems/`, `/positions/` and five others all **404** (verified). Building them creates ranking targets *and* lets `BaseHead.astro` emit a full breadcrumb trail instead of truncating to Home → document. **Re-verified against a fresh `dist/` on 28 Aug: still true, and the shape is precise** — all eight section *directories* exist and hold their document pages; **none has an `index.html`**. So `/technique/shooting/` resolves and `/technique/` does not. ⚠️ **The build's own link check cannot see this** — it reported 7,069 internal links all resolving, because nothing in the corpus links to a bare section URL. The 404s are reachable only from outside: a search result, a shared link, or a reader truncating a path by hand. |
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

### A wording difference is not a rule difference until someone builds the play

Round 45 found the corpus asserting, in five places across two documents, that the four books
diverge on delayed-offside simultaneity — three saying *"at the same instant"* and Hockey Canada
not. **The textual observation was right and the inference was wrong**, and the round's first act
was to propagate it into three more sites, including a Key Takeaway.

Hockey Canada states the same requirement as a **result** — 6.11(b)(ii), *"so that the attacking
zone is completely clear of attacking players"* — where the others state it as an **instant**, and
its Interpretation 11 resolves the result to *"the instant the zone is completely free"*. **Hockey Canada's own Interpretation 11 disposes of the
simultaneity reading on its own facts**: A5 and A8 tag up into the neutral zone while A10 leaves
the ice into the players' bench — three players, two routes — **ONSIDE**, with **no timing condition attached to the ruling at all**.
The absence is the argument: the book did not need to say the exits coincided, and did not. And
IIHF Situation 83.34 states the same test in the book that *does* use the phrase. No play is legal under one book and illegal under another.

**The test to apply before recording a divergence: construct the play that separates the books.**
If you cannot — if every fact pattern comes out the same — you have found two draftings of one
rule, and writing it up as a divergence hands readers a permission that does not exist. Here it
handed them one that Hockey Canada's Interpretation 10(i) rules out by consequence — the zone must
be *"completely clear of all attacking players before the off-side is nullified"* — with an intentional-offside
faceoff in their own end as the price.

⚠️ This is the mirror of the note below. Round 44's worst defect was a sweep that **manufactured** a
divergence by over-applying a correction; round 45's was a sweep that **propagated** one that never
existed. Both passed every check the project has, because both were textually accurate.

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
- **Bound a Key Takeaways slice on the `---` *and* on `*Sources`, not on the next `##`.** The
  Sources block has no heading, so "until the next `##`" runs to end of file — that put a
  66-word takeaway at 675 and the wrong figure reached a review record. **Bounding on the `---`
  alone is still wrong**, because `reading_ice_hockey_diagrams.md` is the one document of 37 with
  no `---` before its footer: the corrected parser read its 27-word takeaway as 471 words and put
  a compliant document on a defect list. **Two successive fixes to this one boundary were each
  shipped without being tested against the corpus they were about to measure.** Print the last
  line of any slice before believing its length.
- **A claim can live in the summary layer and nowhere else, and no checker looks for it.** The
  whole suspension-and-supplementary-discipline claim in `body_contact_and_battles.md` — USA
  Hockey 404(b) and 411, NHL 23.5 and 23.6, Hockey Canada 4.8(c), IIHF 28.1 — existed **only in
  Key Takeaway 6**. The body never made it, so no rules review had ever reached it: reviewers
  check the summary against the body, and this had no body to check against. It survived because
  shortening a takeaway is the only operation that would have exposed it. **Before trimming any
  summary item, grep each of its citations against the rest of its own document** — what appears
  nowhere else is not surplus, it is the corpus's only copy.
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
