# Round 28 — the layers a reader meets alone

**Date:** 2026-07-31 (finalised 19:42; **amended 22:30 — see Part 2**; **amended again
23:03 — see Part 3**)
**Status:** uncommitted. HEAD is `bd355cf`; 60 files staged, 12 modified-unstaged on
top, nothing committed. `commit-gate` **BLOCKED** the first attempt on six conditions
at 19:57; six dimensions were re-run against a frozen tree and 24 fixes applied. The
gate has **not** been re-run since those fixes. *(Superseded by Part 3: the gate was
re-run, finishing 22:42, and **BLOCKED again** — on C6 and C10 only. The two scoped
passes it asked for were run, their findings fixed, and everything is now staged: 60
files / 5,234 / 896. The gate has not been run a **third** time.)*
**Scope:** all 37 content documents had `## Overview` rewritten to open with a
summary; all 37 `## Key Takeaways` sections were compressed toward ten items; a
`## Check yourself` retrieval layer was built out from a one-document pilot to 36
documents and reviewed for the first time; plus substantial fixes to the diagram
layer, `scripts/md_to_speech.py` and the site.

`git diff --stat` against `bd355cf`, taken when this record was started: **55 files,
3,588 insertions, 849 deletions** — 37 documents under `content/`,
`project/content_style_guide.md`, `scripts/md_to_speech.py`, two site scripts,
`site/src/data/diagrams.json` and 13 diagram modules.

**Taken again on finishing it: 59 files, 3,786 insertions, 858 deletions.** Four site
files (`BaseHead.astro`, `Header.astro`, `404.astro`, `global.css`) landed between
19:27 and 19:37, after the first figure was read. Both numbers are recorded rather
than one, because the discrepancy is the round's central process finding happening to
the record that describes it — see §1 below.

**Both of those are now wrong, and that is the third recurrence.** `BaseHead.astro`
was rewritten at 19:45 and `diagrams.json` at 19:49 — three and seven minutes *after*
this record was finalised at 19:42. `commit-gate` caught it by arithmetic before
anybody else did: `4,506 − 716` (this record's own length) `= 3,790`, four insertions
more than the record had ever seen. Then a whole re-review round ran on top of it.

**The true figure, measured at 22:29 immediately before Part 2 below was written:**

| Command | Files | Insertions | Deletions |
|---|---|---|---|
| `git diff --cached --stat` | 60 | 4,506 | 858 |
| `git diff --stat` | 12 | 268 | 97 |
| **`git diff HEAD --stat`** — the whole tree against `bd355cf` | **60** | **4,709** | **890** |

The three rows do not add up because four files are modified in both index and
worktree; `git diff HEAD` is the one that describes what a commit of everything would
contain. 37 documents under `content/` are staged; four of them
(`switching_positions.md`, `zone_entries.md`, `body_contact_and_battles.md`,
`puck_handling.md`) carry further unstaged fixes made after the gate blocked. This
record is one of the 60 files, so writing this amendment moves the unstaged figure
again — which is the fourth recurrence, and it is now simply what this round is.

---

## The central finding: compression made the layer longer, and that is the good news

The `## Key Takeaways` brief was to compress toward ten items. Measured against
`bd355cf` — I extracted each `## Key Takeaways` section from `git show HEAD:<file>`
and from the working tree and counted whitespace-delimited tokens and `^N. ` list
items:

| | at `bd355cf` | working tree |
|---|---|---|
| Key Takeaways, all 37 documents | 48,673 tokens | **54,158** (+5,485, +11.3%) |
| Numbered items | 370 | **365** |
| Sections with exactly ten items | 28 of 37 | **32 of 37** |
| Documents where the word count **rose** | — | **27** (fell in 9, unchanged in 1) |

**Item count went down and word count went up in three documents out of four.**
That is not a failure of the compression. It is a measurement of what the layer had
already lost. Every compressing agent reported the same thing independently, and the
restorations are itemised in their reports: `ad111a1a` restored roughly twenty
dropped qualifications across the six off-the-ice documents, including *a US-only
helmet-expiry rule stated universally, a null moderator asserted as a positive
finding, and "only the captain" contradicting NHL Rule 6.2*; `a81c147a` restored five
lost scope/provenance qualifications in foundation; `a825f4cb` added *"no governing
body publishes one"* to a support-distance figure that the takeaway had been stating
bare. The same pass removed a **fabricated** figure — `equipment.md`'s *"it costs you
ninety seconds"* — which `content-reviewer` independently confirmed appears nowhere
in the file afterwards.

So the round's headline is an inversion of the brief it was given:

> **The summary layer was not too long. It was too short, in exactly the places
> where length was doing the work.** A takeaway that has shed its rule-set scope,
> its population, its provenance label or its coaching-choice hedge reads as
> tighter prose and is a different claim. Compression that restores those is
> compression that adds words, and a word-count target would have punished it.

The other two layers, measured the same way: `## Overview` 8,586 → **18,337** tokens
across 37 documents. `## Check yourself` existed in **one** document at HEAD —
`breakouts.md`, the five-question pilot committed in `017b37a` — and now exists in
**36**, carrying **277** numbered questions. (277 is my count of `^N. ` items in the
working tree; `check-yourself`'s reviewer counted 277 independently.)

---

## Read this before you read the findings

### 1 · Most of this round was reviewed against a tree that was still moving

No dimension review in this round ran against the final working tree. Agent finish
times (from the transcript mtimes) against content-file mtimes:

| Review | Finished | Content state it saw |
|---|---|---|
| `rules-verifier` (Overviews) | 14:11 | before the 15:00–16:00 fix wave |
| `safety-reviewer` (D11) | 14:51 | before the fix wave |
| `facts-reviewer` (D10) | 14:53 | before the fix wave |
| `content-reviewer` (D7/D8/D9/D13/D14) | 14:56 | before the fix wave |
| `rules-verifier` (Key Takeaways) | 14:58 | before the fix wave |
| Check-yourself layer review | 15:21 | before the 16:00 preamble sweep it caused |
| D12 read-aloud | 15:51 | before the 16:00 sweep and the 16:19 pipeline fixes |
| diagram review | 15:55 | explicitly against a **15:43:05 snapshot** |
| `source-verifier` (D4/D5/D6) | 18:59 | after the 16:00 sweep; before the 19:03+ edits |
| `site-reviewer` (D15) | 19:07 | build against the 16:00 content |

Five content files were then edited **after** the last two reviews finished:
`puck_handling.md` (19:03), `zone_entries.md` (19:03), `neutral_zone_systems.md`
(19:04), `switching_positions.md` (19:11), `body_contact_and_battles.md` (19:13).
`site/src/diagrams/positions.mjs` moved at 19:32, and four site files
(`Header.astro` 19:27, `404.astro` 19:28, `BaseHead.astro` 19:29, `global.css` 19:37)
appeared **while this record was being written** — after its own opening `git diff
--stat` was read. None of those four has been reviewed by anything.

Two reviewers said so in their own words. `diagram-reviewer`:

> **The prose moved under me while I reviewed.** 24 content files were written by
> another agent between 15:01 and 15:43 today. `forechecking_systems.md` changed
> *between my first and second read of it*.

`site-reviewer` found its **first pass was against a stale build**, and **two of its
own findings evaporated** in the 16:00 rewrite:

> Everything reported below is re-verified against the 16:00 content and the
> resulting build. Two of my early findings evaporated in the rewrite … so **treat
> any content review from earlier today as suspect.**

Take that verdict literally. **Nothing in this round has been re-reviewed against
the state that would actually be committed.**

> **Superseded by Part 2.** That sentence was true when it was written and is no
> longer. `commit-gate` blocked on it at 19:57, and six dimension re-reviews then ran
> against a frozen tree. What Part 2 does *not* change is the shape: the fixes those
> six produced are themselves unreviewed, and the re-reviews saw five content files
> and the site, not all 37 documents.

Twenty-one agents' final reports
mention a concurrent agent, a contended file or a file that was already dirty when
they started — I counted this by pattern-matching the final two assistant messages
of all 99 transcripts written after `bd355cf` that contain prose.

### 2 · Several review findings were themselves wrong, and that is this round's most important lesson

`source-verifier` was sent four reported defects and found **three of the four were
false negatives in the reviews that reported them**. Two of them, acted on, would
have deleted correct, primary-sourced material — a direct hit on non-negotiable 3.
Its conclusion belongs in this record verbatim, because it is a statement about the
corpus's method and not about four items:

> **Three of four reported "absences" in my brief were search artifacts.** That rate
> should be taken as a warning about the corpus's review method, not just about
> these four items: flat substring greps against hard-wrapped Markdown and
> PDF-extracted text will keep producing false "not found" verdicts, and the failure
> mode is deletion of correct material.

Established instances, each traceable to a named transcript:

| Reported | Actually | Source |
|---|---|---|
| Tulsky's *"the talent component of shot differential seems to come almost entirely from the neutral zone play"* is **absent in any form** from the paper | Present, verbatim, in Section 5 — **and in the reviewer's own `tulsky.txt`**. The line break falls between "entirely" and "from", which is why a flat substring search missed it. Two further quotes in the same document's notes were reported absent and are likewise present, breaking across lines | `source-verifier` C1 |
| `uk_rules.md` KT-6's cage mandate is unsourced and names no book, and should be routed through In-House Rule 201 as an inference | **England Ice Hockey R&R 24.5** states it directly: *"Face cages for all junior hockey games are mandatory…"*. Routing it through Rule 201 *"would have replaced a direct rule with an inference"*. The real defects were the missing citation and Britain-wide scope where EIH governs England and Wales | `ac3934cc` |
| The IIHF neutral-zone figure (15.0 m, ¼ of rink length) is **not in the extracted rulebook** — searched Rules 1.2, 1.5, 1.6 | It is in **Appendix VI**: `iihf_rules.txt:10609` carries *"¼ L = 1500"* against *"Length (L) = 6000"*. Labelling it unverified *"would have inserted a disclosure the evidence contradicts."* The asymmetry runs the other way — the **NHL's** 50 ft is the derivation, stated nowhere in the NHL book | `ac3934cc`, correcting `a7d78e39` F7 |
| `team_play_and_culture.md`'s citation of NHL Rule 82.1 is a miscitation and should be 81.4 | 82.1 carries the bar, the three exceptions and the puck-leaves-the-stick test, and is the **better** cite because it alone carries the 63.8 trigger and the last-change exception the document relies on. *"The correction that would have been applied was itself the error."* | `rules-verifier`, adjudication 1 |
| The `## Check yourself` preamble sentence is not present in the corpus (zero grep hits) | Present, identically, in all 36 documents — the preamble is hard-wrapped and the sentence spans two lines | `source-verifier` |
| Fourteen other Check-yourself questions carry the "no single right answer" flag | **Three** corpus-wide | `a1541d82`, correcting the Check-yourself review |
| Tag-up simultaneity is required by two books | **Three** — IIHF 83.3(I) also requires it (*"at the same instant"*), Hockey Canada 6.11(b) does not | `a1541d82` |
| A diagram distance had been corrected from 6.52 ft | *"The previous sweep's figure was right; the brief's correction to it was wrong"* — 7.52 ft | `ace5e208` |
| `how_to_watch_hockey.md` KT10 lists six context checks | Seven | `content-reviewer` 11 |
| A quotation attributed to the In-House Rules Introduction appears in a Key Takeaway and nowhere in the body | Could not be reproduced — *"the quotation is now in neither"* | `content-reviewer` 23 |
| `site-reviewer`'s first two findings | Both had been repaired before the report was written | `site-reviewer` |

**That was eleven. Part 2 takes it to fifteen**, and it is still a floor. I
established the first eleven by reading the final report of every subagent that
finished after `bd355cf` and recording each place where an agent stated that a
previously reported finding was false. The four added below come from the same method
applied to the thirteen agents that finished after this record did; they are listed
here rather than in Part 2 so the table stays in one place.

| Reported | Actually | Source |
|---|---|---|
| Of the thirteen ⚠️ warnings this commit adds, **three** are the panelled callout form and ten are bare — `site-reviewer`'s Critical | **Four.** `zone_entries.md:357`, the boards/spine override and the only physical-injury warning in the set, is a blockquote nested three spaces inside a list item, and it *does* panel: `remark-corpus.mjs:287` visits `blockquote` unscoped and the `.callout` selectors are unscoped too. What shows it unstyled is a **stale `site/.print/systems.html`** that predates the change. The gap widens by nine, not ten | second `safety-reviewer` (`abc70bbe`), correcting `site-reviewer` |
| `winger-high-then-down-the-wall`'s route was justified against `winger.md:175`'s 44–64 ft by its **Euclidean** length (50.77 ft) | The owner defines 44–64 **longitudinally** — 64 ft out from the goal line down to 20 ft out. The drawn trip is 45 ft that way. It passes, but the recorded check measures the wrong quantity and the two diverge for any route with vertical travel | `diagram-reviewer` re-run, finding 9 |
| A source comment in `defensive_zone_coverage.mjs` puts the carrier 10 ft from the strong-side D | **8.06 ft** — which is what both `describe`s have always said. The comment was the stale one | `a2edd943` |
| A source comment in `faceoffs.mjs` says the glyph ink reaches the dasher at y 39.2, *"so there is a quarter of a foot of room"* | Contradicted by the module's own header figures — centre 38.97 + radius 2.9 against a dasher at 42.5 is ~0.63 ft. Both support "no room", so the caption is safe either way, but **one of the two numbers is wrong and nobody knows which** | `a773cefd` |

The last two are stale source comments rather than review verdicts. They are graded
into the same family deliberately: a recorded number that a later agent proves wrong
does the same damage whoever wrote it, and round 27's `half-wall.y` drift began as
exactly this. I did not audit findings nobody re-checked, so the true number is
unknowable from these artefacts and has not been estimated.

`commit-gate` volunteered itself as a candidate for the same list, and the offer
should stand: *"my finding that the USA Hockey quotation is new rests on `git grep`
against `bd355cf`. It is a single-method result. If that quote exists at HEAD under
different line-wrapping, my C5 block is one of the eleven."* It does not — the
`source-verifier` and `safety-reviewer` passes that followed both located the sentence
in the primary PDFs and neither found it at HEAD — but the reflex is the one this
section exists to teach.

One more of the same family, and it is the local form of the round-20 failure the
process document warns about: a facts reviewer reported that *"no NHL/IIHF/USA
Hockey/EIH text is on disk"* and fell back to checking rule claims against sibling
corpus statements. **The four rulebooks are in `sources/` and duplicated in
`/private/tmp/`.** It had looked in `project/verification/`. G2's *"a 403 is not an
absence"* has a sibling: *a path that does not hold the file is not an absence
either.*

### 3 · The coordinator's fix briefs were a significant error source

Fix agents were dispatched with briefs that relayed review findings. **In 14 of the
99 transcripts, the executing agent reported that something in its own brief was
factually wrong** and corrected it mid-task. I counted this by matching the word
"brief" in the last two assistant messages of every post-`bd355cf` transcript and
reading each hit; agents that hit the same problem without using the word are not
counted, so this too is a floor.

**Recounted after Part 2: 22 of 111.** The transcript set has grown — re-running the
same count with the cutoff stated explicitly as `bd355cf`'s commit time (11:31:03)
gives **112 JSONL transcripts, 111 with prose in a final assistant message, 57 with
the word "brief" in their last two assistant messages.** I read every one of those 57
hits that finished at or after 19:00 (fourteen transcripts) and added the seven that
report a brief error, plus one more the word-match misses entirely. The eight new
instances:

| Transcript | Finished | What the brief got wrong |
|---|---|---|
| `ae1475c4` | 19:05 | **The Tulsky restoration.** The brief had the heading direction inverted relative to git — HEAD is the version *without* the claim; the working tree already carried it restored. There was nothing outstanding to restore. The agent verified the three Tulsky strings itself, declined to revert the heading (the old one asserts something the paper does not say), narrowed *"where shot differential is actually decided"* to *"where the skill part of shot differential comes from"*, and propagated to KT10 and Notes. **This transcript contains no instance of the word "brief" in its final two messages, so the count above cannot see it — which is the honest measure of how much of a floor 14 was.** |
| `a06d112d` | 19:51 | The brief's link-checker baseline (6,904 / 3,720) was already 6,907 / 3,720 before the agent changed anything — three links of drift from other agents' uncommitted work |
| `a69206498` | 20:16 | The brief justified the winger route by Euclidean length; the owner defines the range longitudinally (wrong-finding 13 above) |
| `ad1fb082` | 20:18 | The brief said the new USA Hockey quotation appears **four** times. It appears **twelve** times corpus-wide across four files — seven in body text, five in Sources. Any propagation-coverage claim resting on "four" was resting on a file count |
| `a24e233c` | 20:21 | The brief's filename convention names `/private/tmp/hc2628.txt`, which does not exist on this machine. `hc.txt` *is* Hockey Canada 2026-2028 by its own front matter — verified at head — but two agents reading "hc.txt" with different expectations would disagree about which book they cited |
| `addd351c` | 20:27 | **`describe` is not read aloud.** The brief graded four `describe` changes as narrated safety text. `md_to_speech.py:520-541` emits `"Diagram. " + caption` and nothing else; `describe` reaches only the SVG `<desc>`. Load-bearing for severity, and it lowers it |
| `a00d740a` | 20:49 | The standing site brief — and, per `consts.ts`'s own comment, `docs/philosophy.md` and `docs/aws-design.md` — describe this site as carrying no analytics and no third-party scripts. It has since commit `6339580` |
| `abc70bbe` | 20:57 | **Two premises, both load-bearing, both verified empirically before deciding.** Three panels of thirteen, not four (wrong-finding 12 above); and the claim that `md_to_speech.py` gives a ⚠️ blockquote an *"Important."* prefix and bare bold nothing. It does not, and did not before this commit either — the trigger is `"⚠" in text` on the raw block in both `render_paragraph` and `render_list`, and `render_quote` delegates to those. The agent **ran the pipeline** over the affected documents and showed all thirteen coming out prefixed `Important.` The read-aloud layer is not an argument for promotion in either direction |

The instances, by kind:

- **Relayed a finding without verifying it.** `ac3934cc` — two of five briefed
  premises false (cage mandate, IIHF neutral zone), both of which would have written
  a false statement or a false disclosure into the corpus. `a1541d82` — the "two
  books" tag-up count and the "fourteen questions" flag count, both wrong.
  `a7b44a83` — *"USA Hockey's hooking rule is weaker than the brief states"*: Rule
  623 is conditional where the brief carried it flat. `a58a7282` — the brief asserted
  the document states a study's population and sample; it does not, it delegates both.
- **Wrong numbers of its own.** `ace5e208` has a section headed *"Corrections to the
  brief's own numbers"*: four separate figures and one wrong diagram id.
  `a3aef626` — the brief's diagnosis of a corner overshoot was incomplete.
  `adc2351c` — the brief's symmetric 3.6 ft glyph rule *"masks"* the real triangle
  geometry, which reaches 3.6 ft one way and 1.8 ft the other.
- **Wrong premise about the change set.** `facts-reviewer` — *"'the facts blocks were
  deliberately NOT touched' is not quite right — `git diff` does change 18 fact
  lines."* `site-reviewer` — the brief said the site *"sends nothing to third
  parties"*; it sends to Google (see Open decision A). `adfd7fbc` was told to add
  facts blocks to two documents and **refused**, because their absence is the
  specification, stated in the style guide and enforced by `check_facts.py`.
- **A dangerous instruction.** `aa0e3621` was told to restore
  `site/src/data/diagrams.json` with a blind `git checkout --`. It found the file
  *"already dirty from another agent's build (written mid-session, absent from the
  starting `git status`)"* and refused: *"A blind `git checkout --` would have
  destroyed their manifest, which CLAUDE.md forbids."* It snapshotted the other
  agent's bytes, confirmed the only differences were `"png": null` from `--no-png`,
  and restored them with an md5 check. **Four earlier diagram agents did run the
  blind checkout on that file.** The instruction was the coordinator's; the save was
  the agent's.

The pattern is one thing: **a coordinator relaying a finding is a second author of
that finding, and relaying is not verifying.** Every agent that re-read the primary
before acting caught something; the ones that did not would have written the brief's
error into the corpus under a verified-looking commit message.

---

## Dimension coverage

Dimensions are defined in
[`../review_process.md`](../review_process.md#the-dimensions--a-review-must-cover-all-of-these).

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | yes, twice | `rules-verifier` on the rewritten Overviews (14:11) and again on the rewritten Key Takeaways (14:58) | ~95 distinct rule citations read in body passes across NHL, IIHF, USA Hockey, Hockey Canada and the In-House Rules |
| D2 | Rules travelling without exceptions | yes | same, plus `content-reviewer` | See "the trapezoid distribution" below — the round-1 shape, still live |
| D3 | Rule-set divergence | yes | same | Nine findings, four of them "confirmed-but-incomplete" on an omitted book |
| D4 | Citation integrity | yes | `source-verifier` (18:59) | 22 URLs fetched, HTTP 200, quotation located |
| D5 | Provenance | yes | `source-verifier` | Four provenance defects; **no quoted number in the change set was wrong** |
| D6 | Negative existence claims | yes | `source-verifier` + `content-reviewer` | One unlabelled claim found (the faceoff tie-up); three others attacked and upheld |
| D7 | The cardinal rule | yes | `content-reviewer` (14:56) | |
| D8 | Numeric ownership | yes | `content-reviewer`, `facts-reviewer` | |
| D9 | The summary layer | yes | `content-reviewer` | This round *is* the summary layer |
| D10 | The key-facts layer | yes | `facts-reviewer` (14:53) | 764 blocks / 4,453 facts opened; Overview blocks read exhaustively, remainder by class-based grep |
| D11 | Reader safety | yes | `safety-reviewer` (14:51) + four targeted verification passes at 15:03–15:51 | |
| D12 | Read-aloud integrity | **yes — first time the real pipeline has been run over the whole corpus** | dedicated D12 pass (15:51) | SSML generated for all 37 documents: 1,448 chunks, 3,138,267 billed characters. Findings quoted from emitted SSML, not from Markdown |
| D13 | Folklore | yes | `content-reviewer` | The "centre covers more ice" complex re-attacked in four documents and upheld |
| D14 | Structure, style, terminology, cross-links | yes | `content-reviewer` | |
| D15 | The rendered site | yes | `site-reviewer` (19:07) | Chrome extension refused `localhost` after six attempts across two hostnames; fell back to driving real headless Chrome over the DevTools Protocol |
| — | The diagram layer | yes | `diagram-reviewer` (15:55) | 109 diagrams; against a 15:43 snapshot |
| — | **The `## Check yourself` layer** | **yes — never reviewed before** | dedicated pass (15:21) | All 36 blocks, 277 questions, read in full |

**Mechanical checks, run by me against the working tree at the time of writing:**
`check_links.py --quiet` ☑ (exit 0) · `check_facts.py` ☑ (26 documents · 764 blocks ·
4,495 facts, all conform) · `check_secrets.py` ☑ (191 tracked files, no findings) ·
`check_geometry.py` ☑ (58 assertions over 19 named positions).

**`npm run build` — not run by me.** `site-reviewer` ran it twice at around 16:00 and
reported pass (37 pages, Pagefind 37 pages / 9,883 words, `check-links.mjs` 42 pages /
6,904 internal links, all anchors resolving). Content changed in five files after
that, and two site files after that again. **C10 is therefore not satisfied against
the state that would be committed.**

> **Part 2 closes this.** `commit-gate` blocked on C10 at 19:57 and `site-reviewer`
> then ran the **first `npm run build` of this tree** — pass, 42 pages, 0 errors,
> Pagefind 37 pages / 9,975 words, `check-links.mjs` **42 pages · 6,915 internal links
> · 3,728 with anchors · 423 assets, byte-identical to the last clean run.** Six
> dimensions were re-run against the frozen tree. The rows above are left as written;
> the coverage that matters for a commit is the Part 2 table.

---

## Findings, by dimension

Counts below are **as each reviewer graded them**. They are not deduplicated: the
same defect appears in two reviewers' lists where two dimensions caught it (the
`risk_management.md` "only one of the nine is a rule" defect is `safety-reviewer`'s
Critical 3 *and* `rules-verifier`'s F1). **No single "criticals found / fixed"
number is stated here on purpose** — deduplicating them would require re-reading
every finding against every other, and I did not do that.

| Reviewer | Critical | Major | Minor |
|---|---|---|---|
| `safety-reviewer` (D11) | 3 | 5 | 1 |
| `content-reviewer` (D7–D9, D13, D14) | 3 | 15 | 10 (+3 duplicate-claim items) |
| `facts-reviewer` (D10) | 2 | 9 | 5 |
| D12 read-aloud | 1 | 18 | ~10 |
| Check-yourself layer | 0 (stated explicitly) | 8 | 10 |
| `diagram-reviewer` | 0 | 5 | 8 |
| `site-reviewer` (D15) | 0 | 3 | 5 |
| `source-verifier` (D4–D6) | 1 (a wrong verdict, not a corpus defect) | 4 | 7 |
| `rules-verifier` (Key Takeaways) | 9 findings: 1 contradiction, 1 contradicted-as-stated, 2 misattributions, 4 incomplete, 1 unconfirmed | | |
| `rules-verifier` (Overviews) | 3 adjudications + 4 confirmed-but-incomplete, against a long table of confirmed-clean | | |

### The criticals worth naming

**Safety, all three from the Overview promotion or the Key Takeaways compression:**

1. `zone_entries.md` — the curl-back taught in three layers with **no mention of
   where you may perform it.** The document's own §5 carries the caveat: *"Turning
   your back to an oncoming checker near the boards is the behaviour most associated
   with catastrophic spinal injury in hockey."* The Overview promotion took the
   instruction and left the caveat.
2. `winger.md` KT6 — the wall-battle instruction with the boards override stripped,
   in a document whose Overview carries it correctly and whose KT2 has already sent
   the reader down the wall.
3. `risk_management.md` — *"Only one item on that list is an actual rule."* **False
   in the unsafe direction.** Item 7 is *"never leave your feet to make a check"*,
   and four books name leaving your feet inside the charging offence: NHL 42.1
   (*"skates, jumps into"*), IIHF 42.1, USA Hockey 607 (*"leaving one's feet
   (jumping)"*), Hockey Canada 7.4(i) (*"Jumps to check an opponent"*), plus IIHF
   48.1(IV) as a separate offence. The document's own §7 said so; the Overview and
   the never-list intro said the opposite.

**Facts layer:**

4. `faceoffs.md` — `Never: … win it with your stick or skates`, in a corpus where
   *"every level of British hockey is played under"* the IIHF book and **IIHF
   76.3(VI) makes a skate win a violation**. The Key Takeaway had been corrected
   that day; the facts block, Common Mistakes and the body sentence had not.
5. `switching_positions.md` — `Technique: Put your back to the boards to receive it`,
   with **no boards-orientation caveat anywhere in the file, in any layer.** Every
   sibling that gives a boards instruction carries the override in the same layer;
   `bd355cf` exists to close this gap in three other documents and this one was not
   on the list.

**Read-aloud:**

6. `switching_positions.md:262` — `Never: Turn your back to the boards to receive it,
   **and never duck**`. `render_facts` emits the label as its own sentence, so the
   frame distributes over both conjuncts and the second becomes *"never never
   duck"* — i.e. **duck**. The corpus already had the settled correct form: two
   siblings written in the same session use `or`.

**Content:**

7. `defender.md`'s new Overview told a USA Hockey defenceman that their goalie may
   not retrieve a corner puck and that USA Hockey has *"no such area"* — the exact
   phrasing the style guide carries an explicit ⚠️ warning against, and the reverse
   of the play for most rec and youth readers.
8. `team_play_and_culture.md`'s new Overview said USA Hockey extends the referee
   privilege to *"any of three designated players"*, where Rule 202(a), quoted 300
   lines below in the same document, says *"only **one** of these designated
   players."*
9. `game_management.md`'s Overview and KT7 dropped **all three** exceptions to the
   post-icing substitution bar, which the body carries with a fourth for a broken
   skate under IIHF 81.4. Round 10's shape exactly.

### The D2 distribution that is still open

`content-reviewer` mapped one general case travelling bare. *"Most rec, beer-league
and youth associations have no trapezoid → your goalie is a third puck-handler"*
appears **bare in ten documents** and carries the USA Hockey 614(c) freezing
carve-out in **three**. That is the same 11-vs-3 shape as the shorthanded-icing
defect the corpus has already recorded twice — and `rules_primer.md`, which owns rule
numbers and holds the carve-out in its body, states it **bare in its own KT8.** The
owner's summary layer is the one place the exception is missing in the owner document.

---

## The `## Check yourself` layer, reviewed for the first time

277 questions across 36 documents, none of which any checker can see:
`check_facts.py` does not read it and `check_links.py` does not resolve its `*(§…)*`
pointers. The reviewer read all 36 blocks and resolved every pointer mechanically,
but opened the owning section for only **35 of the 138 count-bearing questions** —
its own stated largest gap.

The layer's most consequential defect was its **preamble**, identical in all 36
documents, which asserted an unsourced learning-science claim:

> *"Producing an answer and getting it wrong is worth more than recognising a right
> one."*

A grep of `content/` and `project/` for retrieval practice, the testing effect,
Roediger, Karpicke and Bjork returned no source anywhere in the repository. This is
the folklore shape at 36-document scale: **a claim generated once and stamped into
every document is one unsourced claim with 36 copies, not 36 corroborations.**

The claim was **not deleted** — it is real and well evidenced. It was sourced to six
papers, each fetched as full text and each verified against the **Crossref API** for
journal, volume, issue, pagination and DOI: Roediger & Karpicke 2006 (*Psych
Science* 17(3) 249–255), Rowland 2014 (*Psych Bulletin* 140(6), **g = 0.50, 95% CI
[0.42, 0.58], 159 effect sizes**), Kornell/Hays/Bjork 2009, Metcalfe 2017, Bjork &
Bjork 2011, van Gog & Sweller 2015. `practice_and_development.md` was made the owner
with a new section, a Key Takeaway, a Sources block and a limits entry, and the style
guide gained the owner row.

**And sourcing it showed the sentence was wrong.** Rowland's retrievability
breakdown gives no-feedback-with-≤50%-success at **g = 0.03, CI [−0.21, 0.27]** —
straddling zero — against feedback at **g = 0.73**. The corpus was asserting, as its
own pedagogical rationale, *the one cell of the meta-analysis where the effect
disappears.* All 36 preambles were rewritten to carry the precondition, to name the
Key Takeaways as the corrective feedback rather than as the weaker option, to drop
two print-only instructions that mean nothing to a listener, and to stop claiming
*"every answer is in this document"* — false in six files whose safety questions are
answered by `body_contact_and_battles.md`. Verified through the real speech pipeline
on four documents spanning four section directories.

Two disclosures on the sourcing itself: the Kornell/Hays/Bjork quotation is
**unverified** (`doi.org/10.1037/a0015729` serves an 85-byte APA stub), and Adesope
et al. 2017 was deliberately **not** cited because every route returned an abstract
stripped of statistics.

The layer's other Majors: a `special_teams.md` question with a false premise (it asks
which of two carve-outs applies to a British reader; the document says twice that
**neither** is the IIHF's); two corner-rotation questions asked flat in documents
whose bodies flag the answer as a coaching choice; a question instructing a listener
to *"Look at the 1-3-1 diagram"*; and two pointers that resolve to no heading.

---

## D12 — the first full run of the speech pipeline

SSML was generated for all 37 documents — 1,448 chunks, 3,138,267 billed characters —
and the findings are quoted from what `md_to_speech.py` actually emitted. This is the
first round in which that has been done, and it found a class of defect nothing else
can see:

- **`Never: X, and never Y`** inverts on the second conjunct (Critical 6 above), and
  three more pre-existing facts have the same inner negation.
- **`Never: X — <corrective imperative>`**: `Never.` closes as its own sentence and
  the corrective becomes a sentence under a stale frame. *"Never. Play on if you are
  hurt — stay down and let play be stopped"* mis-binds to **"never stay down."**
  **459** `Never:` lines exist, **374** with an em-dash tail; four were read and
  reported, and the shape — not 374 defects — is the finding.
- **`and/or` → "and or or"**, six emitted instances, two inside safety-critical
  quotations: IIHF 42.1's charging definition and USA Hockey's spinal-impact symptom
  list. A listener cannot tell whether the limbs are conjunctive or disjunctive.
- **`56 m × 26 m` → "fifty-six metres times twenty-six metres"** — 13 instances of
  the single most-repeated British rink figure in the corpus, inviting parsing as an
  area.
- **`CAN/BNQ 9415-370` → "CAN or BNQ nine thousand four hundred and fifteen…"** — the
  mandatory Canadian neck-protector standard, in the passage that exists to tell a
  buyer which code to look for.
- **`F1 / F2 / F3` → "F one or F two or F three"** — three simultaneous roles read as
  three alternatives.
- **`skating.md` KT1 vs KT10** — KT1 says *"never duck… a chin tucked to the chest…
  can happen at walking speed"*; KT10, two minutes later in audio, says *"Tuck your
  chin falling backwards to the ice; do not tuck it going forwards into the boards"*
  — with the reconciler present in the body and Common Mistakes and in **neither**
  takeaway. A listener resolving the contradiction toward the emphatic KT1 gets the
  back of their head on the ice.

`scripts/md_to_speech.py` was fixed for these (`+281` lines): `and/or`, `plus/minus`,
`NHL/NHLPA` and the `" / or "` form added to `LEXICON`; standards codes spelled as
printed rather than as cardinals; `F1/F2/F3` rendered as a list; bare `608(b)` clause
citations; the dimension rule extended so a unit may sit on either side of `×`; and
`(s)` plurals. The agent's report was truncated by an API error mid-write, so the
fix list above is read from `git diff scripts/md_to_speech.py`, not from its summary.

---

## The diagram layer

`diagram-reviewer` returned **no criticals** — *"nothing in the diagram layer depicts
an illegal or dangerous play"* — five Majors and eight Minors, and the round-27
lesson recurred verbatim:

> `winger-high-then-down-the-wall`'s route ends at `half-wall:right + dy 4`. The
> spec's own justifying comment reads *"The end is at y=37 rather than the
> half-wall's own y=33"*. `half-wall.y` is **38.5**. `+4` gave 37 against the old
> value; against the committed value it gives **42.5 — exactly the boards.**

A separate read-only audit found **36 stale coordinate annotations across nine
modules**, every one traceable to commit `f2504ce`, which moved `half-wall.y` 33 →
38.5 and `neutral-dot.x` 30 → 20 and only partially swept the hand-written comments.
Six of those comments carry a **load-bearing argument**, not decoration — including a
caption and `describe` asserting that three players are *"in a straight line, fifteen
feet apart"* when the cross product is 82.5, in a section whose whole teaching is
that a line is the cheapest shape to defend.

A separate measurement pass resolved **691 glyphs across 106 play specs** and found
**12 drawn through the boards** (9 players, 3 pucks), three of them also clipped by
the viewport — including, in `support-a-battle-from-outside`, *the subject of the
caption*. Three more sit outside the rounded corner. Fixes were applied and verified
by rendering and pixel measurement; `check_geometry.py` and `build-diagrams.mjs`
pass.

**`check_geometry.py` validated none of it.** I read the script: it opens exactly two
files, `site/src/data/rink.json` and `content/foundation/rink_map_and_glossary.md`.
It never loads a diagram module, so **no glyph offset in the corpus is checked by
anything**, and all 58 assertions passed while twelve glyphs were drawn through the
dasher. Round 27 rewrote this checker because it *"read the coordinate table and
never the drawing"*. It still does.

---

## Part 2 — the gate blocked, and the round was run again

Everything above was written by 19:42. What follows happened after, and it is the
part of this record that describes the tree a commit would actually contain.

### `commit-gate` — **BLOCK**, on six conditions

Run at 19:57 against 60 staged files (4,506 / 858). It read this record in full before
judging, credited its coverage table, and blocked anyway — *"it does not save the
commit"*. Its own summary of why: the record's *"self-assessment was accurate but not
complete."*

| | Condition | Why |
|---|---|---|
| **C10** | The rendered site changed after the only reviewer who looked at it | `site-reviewer` finished 19:07. `extract-meta.mjs` 19:26, `Header.astro` 19:27 (new DOM), `404.astro` 19:28 (new `<nav>`), `positions.mjs` 19:32, `global.css` 19:36 (new `@media (max-width: 26rem)`), `BaseHead.astro` 19:45, `diagrams.json` 19:49. **`npm run build` had never been run against this tree by anyone.** The gate deliberately did not run it itself, because a diagram re-review was in flight and the build regenerates `diagrams.json` — *"the exact contention that produced `239f70d`"* |
| **C5** | A new safety quotation, in four documents, verified only by its own author | *"even a light hit from behind could inflict a severe head or neck injury"* — **zero hits anywhere in the repository at `bd355cf`**, four files now. `source-verifier` finished 18:59; those files were written 19:03–19:13. The only evidence of verification was the text's own assertion that the PDFs were refetched. *"That is the author's word for a review, which C5 does not accept and non-negotiable 5 forbids."* |
| **C6** | The safety document was rewritten **4h22m** after `safety-reviewer` cleared it | `body_contact_and_battles.md` owns boards contact for the whole corpus; reviewed 14:51, last written 19:13, with new contact instruction, new penalty claims and new spinal-injury mechanism prose |
| **C4** | Rules claims postdating both `rules-verifier` runs | 14:11 and 14:58 against text written 19:03–19:13. Under default-to-BLOCK, an unevaluable condition is a failed one |
| **C3** | Twelve files with no dimension coverage at all | Not checked *and* not declared out of scope. *"Silence on a dimension is the failure mode; silence on a file is worse."* |
| **C8** | The record does not describe the staged tree | By arithmetic — see the stat block at the top. C8 was judged *satisfied in substance* (*"it names the files, the reviewers, the findings, the fixes and what the method could not have found, at a standard I would hold up as the template"*) with its scope statement false |

C1, C2 and C9 passed, run by the gate itself. HEAD had not moved; no unrelated agent's
hunks were in the diff. **C7 could not be evaluated** — the propagation looks right,
but the gate checked it by reading the diff, *"which is the author's artefact, not a
reviewer's"*, and the trapezoid carve-out is still bare in ten documents.

Two things it flagged without blocking: the diagram `caption`/`describe` fields are
teaching text that no `content-reviewer` had ever seen, and the diff grows the known
`Never: X — <corrective imperative>` read-aloud shape by a net **+5** (13 removed, 18
added) — while adding the inverting `Never: X, and never Y` form that produced
Critical 6 **zero** times.

### Six re-reviews against the frozen tree

| Re-review | Scope | Result |
|---|---|---|
| `safety-reviewer` | the five late content files | **1 Critical, 3 Majors** |
| `source-verifier` | the new USA Hockey quotation | **CLEARED**, 1 Major |
| `rules-verifier` | the same five files | safe on substance, **3 defects** |
| `content-reviewer` | the diagram caption layer, **first time ever** | diff clean, **6 pre-existing Majors** |
| `diagram-reviewer` | re-run against the frozen tree | **4 Majors, 8 Minors** |
| `site-reviewer` | first `npm run build` of this tree | build passes, **1 Critical handed onward** |

**`safety-reviewer`** read `body_contact_and_battles.md` in full (all 44 facts blocks
inventoried) and grepped four rulebooks plus both USA Hockey coaching PDFs. Its
verdict: *"a substantial net safety improvement over what it replaces"* — three things
in the diff genuinely reduce risk — but not yet safe to commit.

- **Critical.** A facts line at `:416` carried **NHL 41.1's mitigation without its
  counterweight**. The rule is quoted correctly; the defect is that the document's own
  correction did not travel. Heard alone, the operative content is *"the checker has a
  defence — the opponent made themself vulnerable"*, which is the *"he turned at the
  last second"* excuse the two lines above it exist to close, arriving one line later
  with rulebook authority attached. Body ✓, Common Mistakes ✓, Key Takeaways ✓,
  facts ✗ — and it matters most to USA Hockey and Hockey Canada readers, whose books
  attach no balancing clause at all.
- **Major.** KT7 states **IIHF 44.1 flatly** when the rule is conditional — *"crouch
  down **near the boards** … **and as a result, causes an opponent to tumble over
  them**"*. The book that states it flatly is **Hockey Canada 8.7**. The body carries
  the condition in full; the summary layer cites the wrong book for the flat claim.
- **Major.** *"Never leave your feet to make a check"* **reached no facts block and no
  summary layer** — present only inside a quoted charging definition and a glossary
  row. NHL 42.1 opens *"skates, **jumps into** or charges"*; IIHF 42.1 names *"either
  jumps to check an opponent"*. A reader working from the facts layer learns charging
  as a stride count and self-polices the wind-up, never the launch.
- **Major.** The concussion rule lost its **third clause** in both summaries — the
  body has *"off the ice, no return that day, **and a medical professional before they
  play again**"*, Common Mistakes and KT8 carried two of three — and the section
  *"And the case where they get up"* **has no facts block at all**, with no facts line
  anywhere in the document's 44 blocks mentioning concussion. Found by inventorying
  every block, not by the headings, which advertise nothing.

**`source-verifier` cleared the quotation.** Both PDFs fetched fresh (HTTP 200,
2,453,732 and 2,403,746 bytes, differing hashes and page counts, so not the
duplicate-body soft-404 pattern). The sentence is **verbatim in both** — *Heads Up
Hockey Program Guide* p.17, Session 5 *"Giving A Check"*, subheading *"Checking from
behind:"*, and *Introduction To Body Contact* p.51 §5. The corpus's framing of the
**addressee** is faithful: the warning is directed at the player delivering the check,
the corpus says so inline at every instance, and the inferential step to the player
who turns their back is *"stated openly rather than smuggled"*.

The part worth carrying forward is how it proved a **negative**. The corpus claims
*"walking speed"* does not appear in *Introduction To Body Contact*. Rather than
resting on a grep — the exact failure that produced three of this round's eleven wrong
findings — it extracted all 60 pages individually, searched raw and `-layout`
extractions whitespace-collapsed, checked `walk`, `flex`, `cervical`, `Tator`,
`Neurological` and `full speed` (the whole vocabulary of the passage is absent, not
just the phrase), ran **`pdfimages -list` to prove no scanned page could be hiding the
text**, rendered the three short pages to identical 1,829-byte white PNGs, and then
gave a structural reason: IBC's appendix reproduces the *Basic Principles* and the
symptom list but not the *"How spinal injuries happen in hockey"* section at all, so
there is nowhere in IBC for the sentence to be. **That is what a negative existence
claim should cost.**

Its **Major** is provenance: the walking-speed passage on the source page is a
**restatement**, and USA Hockey says so twice — *"According to research done among a
wide range of hockey players"*, with *Charles H Tator et al., Spinal Injuries Due To
Hockey, Canadian Journal of Neurological Sciences 11:34-41* printed directly beneath
it. Tator appeared in `body_contact_and_battles.md` once and in the other three files
**zero** times. Both trap-6 tells present; a propagation gap, not a fabrication.
Three Minors alongside: a compound session title *"Checking from behind: Giving A
Check"* that does not exist, *"reproduced identically"* where the two documents
demonstrably differ, and a silent correction of USA Hockey's own typo (*"one **of**
more vertebrae"*) inside quotation marks.

**`rules-verifier`** found *"no claim a reader acting on would be penalised, ejected or
hurt by, and nothing a rulebook contradicts on substance"*, and would still not sign it
off clean. Every new cross-book divergence verified verbatim in every book it names,
including the arithmetic — the two-of-four airborne trail skate, the three-of-four
tag-up simultaneity, the hooking split, the stride thresholds, Hockey Canada 7.3's
third limb. Three defects:

1. A **facts block citing NHL 42.1** for the icing/offside boarding sentence. That
   sentence is in **NHL 41.1**; 42.1 is charging and contains nothing of the kind,
   read end to end. **The document's own body cites it correctly**, so the facts block
   contradicts the body.
2. **KT5 asserts the legal-check envelope — trunk on trunk, above the knees, at or
   below the shoulders — as *"common to every rulebook"*.** Only **USA Hockey** and the
   **IIHF** state it in those words; *"hips and shoulders"*, *"trunk of the body"*,
   *"above the knees"*, *"at or below the shoulders"* return **zero hits** in the NHL
   book and in Hockey Canada, which get to the same practical place by prohibition.
   The corpus's signature defect shape, in its benign direction — the envelope taught
   is the stricter standard — but it is the shape.
3. **Hockey Canada omitted from the checking-from-behind penalty statement**, *"and it
   under-warns"*. KT6 says there is no minor-penalty option in the NHL or IIHF; Hockey
   Canada 7.5(a) technically has one and **ejects on it too**. A Canadian reader may
   infer their own book allows a bare minor.

**`content-reviewer` on the diagram captions — the first time this layer has been read
as content.** All 109 `caption` and `describe` strings extracted by importing the
module index rather than grepping; every one verified byte-identical to
`diagrams.json`, every `owner` resolved, every quoted string located in its owner.
**The diff is clean** — the four changed numbers are all correct against what is drawn
(14.60, 7.11, 4.5 and 5.31 ft), and the new winger hedge agrees with `winger.md`
clause for clause and satisfies the cardinal rule in full. Six pre-existing Majors,
*"what nine review rounds' worth of never looking here has accumulated"*, the sharpest
being `offside-faceoff-location`: a caption stating that **where the IIHF and USA
Hockey put the draw *"is not established here"*** when both books are on disk, both
establish it, and **the owner document's own body already says so**. For a British
reader the caption warns them not to assume something that is in fact identical. The
others: shorthanded icing bare in a narrated caption; two captions flagging the
airborne trail skate for USA Hockey only after the owners added Hockey Canada today;
the trail-skate drag taught with no rule-set flag; the faceoff tie-up prevalence claim
appearing in a **fifth, uncounted place**; and *"44 to 64 feet"* narrated with no
referent.

**`diagram-reviewer`, re-run as its own earlier pass had asked.** All 109 rendered
into a fresh uniquely-named directory with `/opt/homebrew/bin/node`, mtimes checked
against wall clock to prove they were its own; 31 viewed as images; four exact
harnesses run over all 109. Four Majors:

- **`support-distance-range` — the "puck carrier" label drawn 81 ft from its player
  and 1.16 ft outside the corner boards**, with a dashed leader crossing the whole end
  zone, both faceoff circles, the crease and the net. **In the one diagram whose
  entire subject is distance.**
- **`layer-not-converge`** — the same placer failure at 79 ft, and the leader is
  dashed, which in this corpus's notation means *pass*.
- **`dz-collapse-high-slot`** — a label leader passing 0.61 ft from a *different*
  opposition forward, both drawn as triangles, so shape gives the reader no cue.
- **`faceoff-dzone-clean-loss` — the routes no longer went where the section says.**
  `faceoffs.md` leads with *"Both wingers go straight to the points"*; an earlier
  arrival-test fix moved the endpoints from `±5` to `±9`, and each tip finished 11.4 ft
  away and 39° off the bearing. Surfaced as a genuine tension rather than sloppiness:
  **no arrowhead can satisfy both rules on this play**, because the aim point *is* the
  defenceman.

Plus a body drawn 0.98 ft through the corner boards in two diagrams, a glyph 0.31 ft
past the end boards, **the puck invisible in five diagrams** (drawn inside the ink of
its own carrier's filled circle — confirmed visually on one captioned *"at the moment
your defenceman retrieves the puck"*), and badges colliding to read as "34" on a phone.

**`site-reviewer` ran the first `npm run build` of this tree, and it passes.** 42 pages
in 3.96 s, 0 errors; 109 diagrams with PNG fallbacks; Pagefind 37 pages / 9,975 words;
9 EPUB, 9 PDF, service worker 135 URLs. **The link checker is byte-identical to the
last clean run — 42 pages · 6,915 internal links · 3,728 with anchors · 423 assets.**
All 42 pages visited; **zero console errors, warnings or exceptions** on every real
page. The seven post-19:07 files all do what they claim: the wordmark ellipsis paints,
the search button's accessible name survives clipping at every width (queried from
Chrome's accessibility tree), 404 gains a `<nav>` whose eight fragment targets all
exist, the `BaseHead` deprecation warning is gone, no meta description exceeds 185
characters, and **112 SVGs sit in 112 scroll containers with zero overlapping text
labels**. Its one Critical — the ⚠️ visual weight — it correctly declined to decide and
handed to `safety-reviewer` (Decision C). Its Minor is real and was fixed: the new
26 rem breakpoint created a **79 px dead band** where the wordmark is *more* truncated
at a wider viewport, and real devices land in it.

One process note the reviewer volunteered against itself: its **first dark-theme
contrast run was invalid**, because `localStorage.theme` persisted from its own toggle
test and pinned every page to light. It discarded that run and redid it on a wiped
profile.

### Twenty-four fixes, then a rebuild

**Thirteen content fixes**, across the four files the gate named, each verified against
primary text before writing. The safety Critical was fixed by *compression* rather than
appending, because the line was already 294 of the 300 characters `check_facts.py`
allows. The three safety Majors, the three rules defects and the five source/provenance
Minors all landed, and **propagation exposed four more instances of the same defects
that the reviewers had not reported** — three in `body_contact_and_battles.md`'s
Overview, which is a summary layer read on its own, and a fourth in Common Mistakes.
`check_links.py` and `check_facts.py` pass (765 blocks, 4,500 facts).

**Eleven diagram and site fixes**, in two passes, every one verified by rendering and
measurement rather than by reasoning:

- The two exiled labels were **removed, not shortened** — measured, a shortened
  `'carrier'` lands nearer the *wrong* player via the placer's ownership-degraded
  fallback, *"and a label on the wrong man is worse than none"*. The caption and
  `describe` already name him.
- The corner glyph moved (85,36) → (84,34), clearing the arc by 1.26 ft instead of
  breaching it by 0.98 — and **not** to the roomier (82,34), which would have put a
  route arrowhead on him.
- `faceoff-dzone-clean-loss` restored to the points using `kind: 'pressure'`: ray-miss
  **0.00**, stopping 5.5 ft short, which is the notation designed for *arrive and take
  the man*. Rendered and looked at at both widths.
- The header breakpoint raised 26 rem → 31 rem, with monotonicity verified
  **empirically at every integer width 320→560 px (241 samples): zero non-monotonic
  steps**, and the "Search" accessible name re-checked at the widths newly inside the
  rule.
- The `faceoffs` caption now discloses that *"outside"* cannot be drawn at this scale,
  in the house pattern the layer already uses elsewhere.
- Hockey Canada 6.11 added to the two offside captions — **verified in the primary
  text on disk rather than taken from the brief**.
- A full 109-diagram rebuild with PNGs. The manifest diff is **4 fields, no ids added
  or removed**: three caption edits plus one `describe` a byte-exact restore had left
  unpublished. All 109 entries match their modules on `caption`, `describe` and
  `owner`.

`npm run build`, `check_links.py`, `check_facts.py`, `check_geometry.py` and
`check_secrets.py` all clean afterwards. **Nothing was staged.**

**None of these 24 fixes has been reviewed by anybody.** That is the same sentence §1
opens with, one layer down, and it is why the first item of the next round is not
optional.

---

## Decisions

Stated as decisions, not findings. **A remains open and is the repository owner's
call. B was decided in Part 2, and so was a third, C.**

### A · A Google Analytics beacon fires on first paint with no consent gate — **OPEN**

`site/src/consts.ts` line 49 has `GA_MEASUREMENT_ID = 'G-VTE9ZGWY15'` **committed**.
`site-reviewer` confirmed it from the network log on a document page:
`https://www.googletagmanager.com/gtag/js?id=G-VTE9ZGWY15`, with a `preconnect` in
`<head>`. **This is pre-existing and not introduced today.** Two things attach to it:

- The comment in `consts.ts` says empty is *"the default and what every local build
  and preview gets."* **It is not empty**, so local builds and previews emit the
  beacon too. That sentence is now wrong.
- GA4 fires on first paint with no consent gate, on a UK/EU-facing site.
  `anonymize_ip: true` is set. `site-reviewer` declined to decide and so does this
  record: *"Whether that is acceptable for a UK/EU-facing site is a call for you, not
  me."*

The only other off-origin request observed was a `chrome-extension://` URL from a
browser extension in the local profile — not the site.

The re-review confirmed all of it against the frozen build and added two things.
`region1.google-analytics.com/g/collect` fires on page view as well as the
`gtag/js` load, and the tracking is on **`/offline/`**, the PWA fallback. There is
no `/privacy` page and no cookie banner anywhere in `dist/`. `consts.ts` is **not in
this diff**, and `commit-gate` was explicit that a pre-existing beacon in an untouched
file is outside the staged-diff gate and does not block this commit — *"it is already
live in production, so it is not waiting on this commit either way."* **This stays
open.**

### B · The Check-yourself answers share a viewport with the questions — **DECIDED**

On `systems/breakouts` at 1440×900 the gap from the `Check yourself` heading to the
`Key Takeaways` heading is **687 px** against a 900 px viewport. The reader sees the
heading, all the questions, `Key Takeaways`, and the first two answers **without
scrolling**. It is a verbatim leak, not an approximate one: Question 1 asks *"Where
do you go, and what is the one route you never take to get there?"* and Key Takeaway
1, visible in the same screenful, opens *"Do not move the puck through your own
slot."* Other measured gaps: equipment 1,115 px, rules_primer 1,115 px,
body_contact_and_battles 1,277 px. At 375 px the gap is 1,235 px against an 812 px
viewport — about one scroll of protection. **Desktop gets none.**

In audio it is unambiguous: `md_to_speech.py` emits `Check yourself` and `Key
Takeaways (part 1)` as consecutive chunks with a 1,000 ms break and nothing else
between them. Verified independently by the Check-yourself reviewer and by D12.

This defeats the mechanism the layer's own newly-sourced preamble now describes:
retrieval practice requires an attempt before exposure, and Rowland's effect size
depends on feedback *following* an attempt, not accompanying it. The rendering
options that do not touch content — a collapsed `<details>`, a `min-height`, a page
break on `#check-yourself` — are `site-reviewer`'s; the ordering is a content
decision.

**The decision, taken in Part 2: ship this commit unchanged, then fix it as a rehype
section-wrapper plus `min-height` in its own reviewed change.** The re-review measured
all 36 documents that carry the layer, at six viewport heights, with the 56 px sticky
header subtracted:

| viewport height | KT heading on the same screen | first answer fully on the same screen |
|---|---|---|
| 800 | 1/36 | 0/36 |
| **900** | **1/36** (breakouts only) | **0/36** |
| 982 | 1/36 | 1/36 |
| 1080 | 8/36 | 1/36 |
| 1200 | 30/36 | 7/36 |
| **1440** | **36/36** | **34/36** |

At 375×812 it is 0/36 at any realistic height — minimum span 1,235 px. It is not a
phone problem. Span at desktop: min 686 px (breakouts, 5 questions), median 1,057,
max 1,277 (body_contact_and_battles, 9 questions).

Three reasons settled the *form* of the fix, in the order they decided it:

- **`<details>` is wrong.** The prose directly above the questions tells the reader
  *"the Key Takeaways after them, are where you get it"* — collapsing them
  contradicts the sentence. It also breaks Ctrl-F outside Chromium, and
  desynchronises the site from the PDF and EPUB built from the same content, which is
  the *"layers that are read on their own"* problem this commit exists to fix.
- **Content reordering cannot fix it.** `#key-takeaways` is the **last `h2` in every
  one of the 36 documents**. Every reordering therefore puts the answers *above* the
  questions, which is strictly worse for retrieval practice than 85 px of adjacency.
- **`min-height` is the right family but is not a one-liner.** The markdown renders
  flat siblings, so there is no per-section wrapper to carry it, and the obvious hook
  is unreliable: the `<hr>` before `#key-takeaways` is **missing on 6 of 36
  documents** (all 36 checked). A fixed `margin-block-start` cannot win either —
  anything short enough to look sane at 900 px still leaks at 1440 px, and `100dvh`
  inserts a blank screen on all 36 at every width. Doing it properly means a rehype
  plugin wrapping each `h2` run in a `<section>`, then
  `section:has(> #check-yourself){min-height:100dvh}` — which touches the DOM of all
  36 pages, the ToC and the download pipelines, and does not belong bolted onto an
  otherwise-clean tree at commit time.

**And the priority is the 1440p number, not the 900 px one.** At the reviewed matrix
1 of 36 documents leaks a heading and 0 of 36 leak an answer; at a maximised browser
on a 1440p monitor **34 of 36 put a complete first answer on the same screen as the
questions.** That is what should drive it, and it is why this should not be deferred
past one more cycle.

### C · The two visual weights of the ⚠️ warning — **DECIDED: not a blocker**

`site-reviewer` graded this Critical and correctly refused to decide it, handing it to
`safety-reviewer`. A warning authored `> **⚠️ …**` renders as an amber callout panel;
one authored `**⚠️ …**` inside a paragraph or list item renders as plain bold prose,
visually the same as a technique tip. There are 44 bare ⚠️ warnings corpus-wide and
this commit adds thirteen ⚠️ lines.

A second `safety-reviewer` took the call, corrected two premises in the brief it was
given (both in §3 above), read all 32 panelled and all ~41 bare instances, and
classified all thirteen new ones by **which way the reader fails if they miss it** —
not by how visible they are. **No promotions. Nothing here blocks.**

The corpus's actual threshold, recorded because `content_style_guide.md` states no
rule about it and this is convention observable only in practice:

> **Structural by default.** A warning that stands alone as a block between
> paragraphs is panelled. A warning bound inside a list item, or attached mid-sentence
> to the claim it qualifies, stays inline — a blockquote there would break the list,
> and the warning needs to sit *touching* the sentence it corrects.
>
> **With a lexical exception for the safety override.** Two warnings are panelled
> *despite* being nested in list items — `on_ice_communication.md:89` and
> `zone_entries.md:357` — and both open with the identical phrase *"One safety
> override, and it outranks…"*, both about catastrophic spinal injury from board
> contact with your back turned. A third of the family,
> `playing_without_the_puck.md:289`, is panelled at top level. **The panel is
> reserved for the warning that inverts the tactical instruction it sits beside** —
> which is precisely where a reader who acts on the neighbour gets hurt.

The one physical-injury warning among the thirteen is `zone_entries.md:357`, and it is
already panelled in exactly that nested-override form. The closest call was
`rules_primer.md:372`, the NHL-only head-contact ceiling, which fails unsafe — held
inline because it is the second paragraph *inside the same list item* as the claim it
corrects and has six independent carriers elsewhere in the document. One real
inconsistency is recorded and not fixed: `defender.md:33` states the trapezoid reversal
bare while `goaltender.md:541` panels the same rule.

**No CSS change was recommended, deliberately.** A blanket rule panelling every ⚠️
would also panel `rules_primer.md:350`, where the glyph is mid-sentence inside a
definition, and `center.md:410`, where it is mid-item.

---

## Outstanding work

Ordered by what a wrong answer costs a reader.

1. **A read-through by someone who has never played hockey.** This needs a human. An
   agent simulated it on two prototype documents and the result was the single most
   productive pass of the day — it cut `12U and below`, `the international book`, `no
   minor-penalty option exists`, `net front`, `your blade` (a beginner reads the
   skate blade), and, best of all, **`hands` meaning stickhandling ability**, which
   appears three times in one body and *"is completely invisible to anyone who has
   played. A cold reader parses it anatomically and the sentence becomes nonsense."*
   That pass covered two documents. Thirty-five remain, and an agent that already
   knows the answer is the wrong instrument.
2. **`check_geometry.py` validates no glyph.** Twelve glyphs through the boards while
   58 assertions passed. Until it loads the diagram modules, a green run says nothing
   about any picture.
3. **The England Ice Hockey edition.** The PDF verified today is the **2024-25**
   edition. R&R 22.3's *"not currently enforced"* is temporary by its own wording —
   *"to allow ice rinks the necessary time"* — and a 2025-26 edition may have removed
   it. `grep -r "not currently enforced" content/` returns **49 lines across 20
   documents** (my count; `source-verifier` estimated *"~20 places"*). If that clause
   has lapsed, twenty documents are wrong at once.
4. **The faceoff tie-up prevalence claim.** Stated four times in `faceoffs.md`
   (`:552`, `:851`, `:896`, `:917`), including in Key Takeaways and Check yourself,
   with **zero** mentions of tie-up, scramble or outcome distribution in its Sources
   block. NHL faceoff data is binary; the granular alternative is proprietary. Two
   sibling documents label their equivalent claims correctly. **Label it, do not cut
   it.** *(Part 2 found a fifth site nobody had counted: the `faceoff-dzone-tie-up`
   caption, which carries it in narration alongside a second unsourced superlative,
   *"the single most under-coached moment in hockey"*.)*
5. **Sources-block gaps.** Confirmed by reading each block in five documents —
   `risk_management.md` (IIHF, USA Hockey, Hockey Canada), `shooting.md` (IIHF ×13),
   `winger.md` (IIHF ×21), `neutral_zone_systems.md` (IIHF ×17), `uk_rules.md` (USA
   Hockey ×9, Hockey Canada ×7). Nine further documents were flagged mechanically and
   **not** individually verified: `how_to_watch_hockey.md`,
   `conditioning_and_recovery.md`, `defender.md`, `playing_without_the_puck.md`,
   `time_and_space.md`, `puck_support_and_spacing.md`, `on_ice_communication.md`,
   `mental_game.md`, `offensive_zone_play.md`.
6. **The trapezoid exception, bare in ten documents** including `rules_primer.md`'s
   own KT8. See D2 above.
7. **The 0.66 / 0.29 zone-entry attribution.** Two live secondaries disagree: one
   credits Corey Sznajder (2014-16), the other credits **Alex Novet** twice. Novet
   analysed Sznajder's tracked data, and describes it as **2016-17 and 2017-18**. The
   corpus's "reported second-hand" label is upheld and stays; what it does not say is
   that the attribution is contested. Novet's actual post was not reached.
8. **`offensive_zone_play.md`'s royal-road strength qualification** appeared in three
   mutually inconsistent forms in one document (5v5 six times, all-situations twice,
   even-strength once, new today). Reconciled to 5-on-5 by a fix agent; the
   all-situations instances are load-bearing for a separate argument and want a
   second look.
9. **`site/src/data/diagrams.json` and the shared scratchpad.** See the process note
   below.
10. **Re-run every dimension against whatever is finally staged.** See §1.

### Added after Part 2

11. **The 24 fixes in Part 2 are unreviewed.** Thirteen content fixes touching the
    corpus's safety-critical document and eleven diagram/site fixes, each verified by
    its author against primary text or by render, and by nobody else. This is item 10
    one layer down and it is now the first thing the next round does.
12. **`rink.json`'s half-wall ceiling is derived from the wrong number.** The
    `$comment` derives its 38.9 limit from a bare **3.6 ft centre-to-apex** and
    **ignores ~0.8 ft of miter**, so the true limit is **38.1**. Consequence, measured
    twice independently: **every opposition glyph placed exactly on `half-wall:right`
    has its mitered apex at y = 42.90 against boards at 42.5 — about 0.4 ft of ink
    through the dasher, in 12 diagrams.** The corpus has already ruled on this exact
    geometry once (`positions.mjs`: *"a glyph in the corner must clear the ARC"*); the
    root constant was never corrected, which is how `half-wall.y` drifted in the first
    place. Fixing the comment without re-placing the glyphs would be worse than
    leaving both.
13. **The tripping `and`/`or` divergence is a single-carrier claim.**
    `rules_primer.md:350` is the **only** place in the corpus that carries it — NHL
    57.1 requires the opponent to trip *and* fall where USA Hockey 639 needs only a
    loss of balance. `rules_primer.md` has **no facts blocks at all**, and the caveat
    is in neither Common Mistakes nor Key Takeaways. Its fail direction is safe, which
    is why it blocked nothing; a single carrier with no summary layer is the shape
    that has produced criticals in this corpus twice.
14. **Two silent-failure traps that let an agent believe it rendered a diagram when it
    did not**, both hit today and both still live. `node` on this machine is an **nvm
    shell function a non-interactive shell does not inherit**, so `preview-diagrams.mjs`
    invoked as `node …` produces nothing and says nothing; and **stale renders sitting
    in a shared scratchpad `before/` directory** look exactly like a successful
    before/after comparison. Both were avoided in Part 2 only because the brief warned
    about them by name — which is not a control. A wrapper that fails loudly, and
    per-task render directories, would be.

---

## Disclosures re-verified and upheld

Attacked this round and unbroken. Do not spend the next round on these.

- **`rink_map_and_glossary.md` / `uk_rules.md` — "No census of British rink
  dimensions has been published."** The primary was opened:
  `eiha_inhouse.txt` Section 1 Rule 1 authorises rinks *"below 56 m × 26 m"* for all
  levels **except** Sutton, Coatbridge and Limekilns Road at U16 only. The corpus's
  statement is exactly right and the document publishes no distribution.
- **`shooting.md` — no published study relates blade-face angle to puck launch
  angle.** Sources block, working directory and siblings searched; PubMed returned
  zero for the targeted query. Not falsified, and the disclosure is unusually well
  built — it says which part is mechanical reasoning and gives the practical
  consequence anyway.
- **`switching_positions.md` — no published evidence base for position
  transitions.** Survived a direct attack once before (`review_history.md` §3.1) and
  has now survived a second.
- **`puck_support_and_spacing.md` — no governing body publishes a support
  distance.** Not falsified.
- **The "centre covers more ice" complex**, checked four ways across `center.md`,
  `switching_positions.md`, `defender.md` and `conditioning_and_recovery.md`. The
  29% / 47% / 54% figures and the *"more **of** the ice, not more distance"*
  formulation agree everywhere, and each labels the centre-versus-winger half as
  untested craft. This is the folklore that took eight rounds to fall and it is
  currently held correctly in every place it appears.
- **`conditioning_and_recovery.md`'s retracted review.** The Copenhagen adduction
  review was retracted in April 2026 (*Scand J Med Sci Sports* 36(4):e70287); the
  document says so, says why it is still cited, and says the strength claim is now
  unsupported for ice hockey specifically. All ten CRT6 red flags survive compression
  into KT1 verbatim.
- **The `special_teams.md` royal-road qualification survives narration in full**,
  including *"note where that qualification comes from: it is not in the NHL.com
  article."* Verified in emitted SSML, not in Markdown.
- **`uk_rules.md` KT-7's In-House Rule 201 inference**, verified against the primary:
  Rule 201 reads *"These rules apply to all junior age groups as defined in Rule
  200"* with no cross-reference, while In-House **Rule 101** *does* name IIHF Rule
  201.1 for women's hockey. The contrast the takeaway draws is exact.
- **The onus softening in `body_contact_and_battles.md` and
  `forechecking_systems.md`** — *"entirely"* and *"always"* removed — was re-attacked
  and upheld. NHL 41.1 genuinely carries the balancing clause (*"**However**, in
  determining whether such contact could have been avoided…"*) and NHL/IIHF 43.1
  genuinely waive the penalty on a deliberate turn. Both documents immediately
  re-tighten: *"Arrive as though the onus were absolute; just do not tell a teammate
  the rulebook says it is."*
- **`source-verifier`'s headline: no quoted number in this change set was wrong.**
  Every figure it could reach reconciled — Pure Hockey's fitting rules, Bauer's
  refusal to publish a conversion chart, Laura Stamm, MoneyPuck (including *exactly
  fifteen* model variables against the corpus's "around fifteen"), Evolving Hockey,
  Berg et al.'s 88 players / 2,545 sequences / 1.48 (±1.01) / β = 0.12 CI [0.07,
  0.17] **and the authors' own limitation**, the PWHPA/Sportlogiq rates, Chatel's
  47% / 18%, and all three England Ice Hockey clauses fetched fresh today.

---

## Process notes worth keeping

**The build tool can silently produce nothing, and the scratchpad is shared.** A
diagram agent's first `preview-diagrams.mjs` run **silently failed** — `node` on this
machine is an nvm shell function that a non-interactive shell does not inherit; the
invocation needs `/opt/homebrew/bin/node`. It noticed only because it went looking for
the output, and it then **nearly compared against a stale render left in the shared
scratchpad `before/` directory by an earlier agent**, which would have looked exactly
like a successful before/after comparison.

There were **two independent ways to believe you had looked at a picture when you had
not**: that one, and `preview-diagrams.mjs`'s missing `legend` branch, which rendered
the notation key — the diagram that defines every symbol — as a blank rink, so *"a
reviewer who did not notice would tick 'rendered and viewed' on an empty picture."*

**So this record does not claim that every diagram was visually verified.** What is
evidenced, per agent: `diagram-reviewer` rendered 109 and **eyeballed 22**, naming
them, and states plainly that the other 87 are source-level and machine-level only —
its Part 2 re-run rendered 109 again and named **31** it viewed as images, plus three
at 360 px, and confirmed the `legend` branch now produces a real two-column key rather
than a blank rink;
`a3aef626`, `acdb4bf3`, `ace5e208`, `ae1df817` and `aa0e3621` each report specific
renders they looked at, with pixel measurements or 2400 px zoom comparisons. Anything
beyond that list is unevidenced.

**A shared scratchpad is a cross-agent contamination surface.** Several agents wrote
before/after renders into the same session directory. A later agent finding a
populated `before/` has no way to know whose it is or when it was made. Per-task
subdirectories, or nothing.

---

## What this method could not have found

Each reviewer's own statement, carried forward — this section is the next round's
scope.

- **`content-reviewer`: "I read the corpus against itself."** Every one of its
  findings is an internal disagreement. *"That method is structurally incapable of
  catching a claim on which every layer of the corpus agrees and which is simply
  wrong."* It opened one primary source and no rulebook; every rule number in the
  ~2,278 new lines is unverified by it.
- **`safety-reviewer`: "I found the three criticals because the sections advertised
  them."** Strong on caveats that got dropped, weak on hazards nobody ever wrote a
  caveat for. *"A dangerous cue phrased in coaching idiom — the exact failure mode of
  'goes through the hands', which contains none of those words — would not have
  surfaced."* Sixteen documents were read at Overview and Key Takeaway level only.
- **`facts-reviewer`: 764 blocks opened, 4,453 facts, and traceability read
  exhaustively only in the Overview blocks.** The rest was class-based grep. *"I have
  only moved the boundary from 'headings advertise it' to 'some phrase in it is
  greppable.'"* It re-verified no rule against primary text — including the two
  criticals it graded, both of which turn on IIHF wording it did not open.
- **`rules-verifier`: an accurate quotation of the wrong rule passes every check it
  ran.** It cannot see a rule that ought to be cited and is not, cannot verify the
  EIHL Casebook or the IIHF *International Symbols* key (neither on disk), and cannot
  confirm claims about what "most leagues" do — the form several Overview sentences
  take. **Appendix and infographic content in all five books extracts as diagrams and
  is unreachable by grep** — which is precisely how the IIHF neutral-zone figure was
  wrongly reported absent.
- **`source-verifier`: locating a quoted string proves publication and authorship,
  not truth.** Berg et al. is one observational season of hand-coded Swedish video;
  Tulsky is a 2013 conference paper on 2011-12 data, never peer-reviewed and now
  fourteen seasons stale. *"I confirmed the sentence, not that it still holds."*
- **Check-yourself: ~103 of 138 count claims were not opened**, and ~240 resolved
  pointers were never read for whether the answer is actually there. *"A heading
  match proves nothing about content."* It also read the layer against the **body**
  only — not against Common Mistakes or Key Takeaways, *"which is the failure mode
  this corpus has repeated most."*
- **D12: the SSML was read, no audio was synthesised.** Prosody, pronunciation, pace
  and whether `<break time="300ms"/>` between 277 questions is enough thinking time
  all need ears. Twenty-two documents were grepped rather than read as emitted, and
  the greps were shaped by defects already found.
- **`diagram-reviewer`: 87 of 109 diagrams rendered but not looked at**, light theme
  only, and *"the defect class this whole role exists for … was found by looking, and
  the geometry checks I ran would not have caught the original one either."*
- **`site-reviewer`: headless CDP dispatches synthetic events.** No real touch
  scrolling inside `.diagram-scroll`, no Safari, no Firefox, no iOS, no screen
  reader, and none of the production CloudFront rewrite or `script-src 'self'` CSP
  layer. It measured pixels on M1; *"that the retrieval-practice effect degrades when
  the answer is co-visible is a claim from the literature, not something I observed
  in a reader."* It measured five Check-yourself sections and inferred 31.
- **Nobody checked the Check-yourself layer against Key Takeaways and Common
  Mistakes.** Nobody read the ~103 unopened counts. **And no agent read this corpus as
  a person who does not already know the answer** — every reviewer said some version
  of that independently, and it is the same sentence round 27 ended on.

### And from Part 2

- **`commit-gate`: "I audit a staged diff."** Blind to anything already present at
  `bd355cf` and untouched. It opened no rulebook, refetched no URL and rendered no
  page: it established *that* claims changed without a reviewer, not whether any of
  them is wrong. *"A claim in this diff that reads correctly, propagates correctly and
  passes all three checkers while resting on a misattributed or superseded source
  would pass me cleanly."*
- **`safety-reviewer` (Part 2): five files of thirty-seven.** It verified the taught
  techniques are **legal**; it cannot say they are survivable when executed badly. The
  low-speed/arriving-at-speed boundary that makes *"back into the checker"* safe *"is
  a judgement made in about a third of a second by a player who is also trying to keep
  the puck."* It read `neutral_zone_systems.md` through a keyword filter, so a safety
  point in it using none of those words is invisible. And it read the extracted PDFs
  on disk rather than refetching.
- **`source-verifier` (Part 2): locating the string proves USA Hockey published it,
  not that it is true.** The Program Guide's QuarkXPress metadata dates it to **2009**
  (IBC 2010) — sixteen years old, and the same document carries the obsolete Colorado
  Medical Society concussion grades this corpus rightly refuses to use. Whether USA
  Hockey still publishes these as current, and whether Tator's 1984 epidemiology has
  been superseded, were not checked.
- **`rules-verifier` (Part 2): grep cannot prove a negative across a bad extraction.**
  Its three exhaustion claims all assume the PDF extraction is complete. *"The Tulsky
  extraction interleaves tables with body text, which is direct evidence that these
  extractions mangle layout; a sentence broken across a column boundary in the NHL PDF
  would be invisible to every one of my searches."* It also flagged that
  `/private/tmp/hc2628.txt` does not exist and `hc.txt` is the 2026-2028 book — so two
  agents could cite "Hockey Canada" from different editions without noticing.
- **`content-reviewer` on the captions: "I never looked at a picture."** Every
  geometric verdict is arithmetic in a text editor. It read the caption layer against
  the corpus and the corpus against itself; it opened exactly two rulebooks. Its
  cross-check against rewritten prose was a **7-word shingle diff**, which catches a
  caption still quoting a deleted sentence and **cannot** catch a claim the body
  reworded into its opposite. And: *"Nobody has read these 109 captions in document
  order, as a listener hears them."*
- **`diagram-reviewer` (Part 2): 78 of 109 not looked at, light theme only.** Its four
  harnesses cover arrival geometry, leader lines, boards overhang and puck clearance —
  *"but every defect in this project's history was invisible in the source."* Findings
  1–3 are all one placer bug: *"I found three, I did not prove there are three."*
- **`site-reviewer` (Part 2): every measurement is Blink.** No Firefox, no Safari, no
  real device, no screen reader, no production CloudFront rewrite, no print stylesheet,
  and none of the 9 PDFs or 9 EPUBs it built were opened. Its closing line is the one
  to keep: *"every page on this site could render perfectly and still be wrong. I
  verified that 44 warnings are drawn as bold prose; I did not verify that any of them
  is true."*
- **The ⚠️ decision rests on consequence, not on evidence about readers.** Its author
  said so: *"the whole premise — that a bare bold warning is missed more often than a
  panelled one — is an assumption about reader attention that I have no evidence for
  in either direction."*
- **And nothing in Part 2 reviewed Part 2.** Twenty-four fixes, all author-verified,
  none reviewed.

---

## Proposed scope for the next round

**Re-review the 24 fixes in Part 2 first.** They were made against a frozen tree by
their own authors, each against primary text or by render, and no reviewer has seen
any of them — including a fix to the facts layer of the document that owns boards
contact. Then take the two things this round proved are invisible to everything
currently in the process: **the Check-yourself layer read against Key Takeaways and
Common Mistakes** (the corpus's most repeated failure shape, in its newest and least
protected layer, with 103 unverified counts sitting in it), and **`check_geometry.py`
loading the diagram modules** so that a green checker means something about a picture —
and with it `rink.json`'s half-wall constant, which is wrong by 0.8 ft and is putting
ink through the dasher in twelve diagrams. Third, and needing a human rather than an
agent: the cold read-through by somebody who has never played hockey, on the 35
documents the prototype did not reach.

And carry forward the round's own lesson about itself. **Fifteen findings this round
were wrong, and the two that would have done real damage were both "this is not in the
source" verdicts produced by a substring grep.** The next round should treat a
"not found" as a hypothesis requiring a second method — a different search, a
different extraction, the appendix, the PDF refetched — before anybody is allowed to
delete anything on the strength of it. Part 2 shows what the standard looks like when
it is met: `source-verifier` proved the *Introduction To Body Contact* negative with a
page-by-page extraction, a vocabulary sweep, `pdfimages -list`, a render of every short
page and a structural argument — five methods, because one was the thing that failed.

The second lesson is narrower and sharper. **A coordinator relaying a finding is a
second author of it**, and the count of briefs an executing agent had to correct went
from 14 in 99 transcripts to **22 in 111**, with the largest single instance — a
restoration brief that had the git history backwards — invisible to the way that count
is taken. The next round should assume its own briefs are wrong at roughly one in five,
and dispatch agents that are told to verify the brief before acting on it. Every agent
that did so this round caught something.

---

## Part 3 — the gate blocked again, narrower, and said how to stop

Written at 23:03, after the second `commit-gate` audit, the two scoped passes it
demanded, and the one read those produced. Parts 1 and 2 stand as they are.

### The stat block, for the fifth time

| Command | Files | Insertions | Deletions | Taken at |
|---|---|---|---|---|
| `git diff --cached --stat` | 60 | **5,234** | **896** | 23:02 |

`git diff --stat` was **empty** at 23:02: every content and site fix below was staged.
Part 2's figure — 60 / 4,506 / 858, measured at 22:29 — is **728 insertions and 38
deletions short**, because the second gate run, an omission-only safety pass, seven
fixes and one scoped read all landed after it. That is the **fifth** time this record's
own measurement of the tree has been overtaken by work done while the record was being
written. Both figures are kept. And this section is already out of date by its own
arithmetic: `round_28_summary_layers.md` is one of the 60, so writing Part 3 puts the
file back into `git diff --stat` and moves the number a sixth time.

Checkers at 23:02: `check_links.py --quiet` exit 0; `check_facts.py` exit 0, 26
documents, 765 blocks, **4,501** facts, all conforming.

### `commit-gate`, second run — **BLOCK**, on two conditions

Down from six. The gate's own summary: *"This is a materially stronger submission than
the one I blocked; everything I could evaluate myself, I evaluated, and it held."*

**Passed and evidenced:** C1, C2 and C9 (`check_secrets.py` clean over 192 tracked
files, `.gitignore` not weakened, `check_geometry.py` 58 assertions); C3, the twelve
uncovered files now covered; C5, both new citations cleared; C8, the amended record.
It also verified **seven rules claims against primary text on disk** in its own
session — Hockey Canada 7.5(a) minor **and** game misconduct (`hc.txt:6164`), the NHL
onus living in 41.1 boarding with its "however … balance" clause
(`nhl_rules.txt:5386`), IIHF 44.1 conditional against Hockey Canada 8.7 flat, and four
more — every one verbatim as the corpus states it.

**And one method note worth more than any of them.** Verifying that the KT5 legal-check
envelope appears in only two of the four books (NHL 0, Hockey Canada 0, USA Hockey 1,
IIHF 1), the gate found that **the IIHF phrase breaks across a line**, so a single-line
grep returns zero and *"would have manufactured a false finding — the same trap that
produced three of this round's fifteen wrong review findings."* It collapsed whitespace
before concluding.

### The decision rule, which is the most reusable thing this round produced

The gate was asked whether the fix-review-fix loop terminates. It said yes, and
supplied the partition:

> - **Class A — a retraction, or a correction quoted verbatim from primary text on
>   disk.** The evidence is the rulebook. A gate can close this without a reviewer.
>   No regress.
> - **Class B — new authorial teaching prose in a layer that is read alone.** The
>   failure mode is omission, which is invisible to verification, so it needs a
>   reader. Regress continues only while fixes keep producing Class B.

C6 stood because the 20:30–20:32 fixes had produced **Class B in the corpus's
safety-critical document**: the rewritten Overview of `body_contact_and_battles.md`
carries new instruction — *"Play it as though it were absolute anyway"*, *"Those are
two prohibitions against two different injuries"* — and not only corrected citations.
The gate's own closing line is the reason it could not close its own block: *"I read
for claims that are wrong, and the defect class actually at issue here is claims that
are missing — which is the one thing my method is structurally worst at."*

### C10 — cleared

A scoped site pass, five widths, two pages, both themes, 20 cells plus a 241-width
sweep. It confirmed every claim made for the 26 rem → 31 rem header breakpoint and
refuted none: **241 integer widths with zero non-monotonic steps**; the ellipsis
verified as **actually painting** at 3× DPR rather than merely present in the computed
style; `role: link, name: "Search", ignored: false` at all nine requested widths;
`scrollWidth − clientWidth === 0` everywhere; zero console output.

Three things it did that are worth copying:

- **It reproduced the old breakpoint in the browser** rather than trusting the account
  of it — rewriting the live `CSSMediaRule` back to 26 rem, no file edits — and got
  375→171 px of wordmark against **417→136**, confirming the dead band had been real.
- **It overrode the driver's own `mobile: w<500` flag**, because that flag flips
  between 496 and 497 and would have confounded the exact boundary under test.
- **It caught and corrected itself mid-pass**, its first contrast reading having
  mis-parsed a translucent `color(srgb … / 0.92)` header background into a bogus 1.22.

It did not run the build: the build regenerates a staged file.

### C6 — an omission-only pass, and it found four criticals and three minors

Four files read in full — 1,182 + 955 + 487 + 957 lines, and every one of their 145
facts blocks — with the instruction to read for **absence** only, claim correctness
being already done. Two of the four criticals matter beyond this round.

**`puck_handling.md` had closed the question the wrong way.** It stated that kicking
is *"legal in all zones under NHL rules … the restrictions are on scoring"*, in the
body twice and in a facts line, in a document that teaches kicking in tight and in
traffic *"with a stick in your feet and a body on your back"*. NHL **49.1** defines
kicking as using the skate with a kicking motion to propel the puck *"or to contact an
opponent"*; **49.3** makes kicking or attempting to kick another player a match penalty
*"whether or not an injury occurs"*; USA Hockey **627(a)** assesses a major plus a game
misconduct for using the skate merely to *"push off"* an opponent. And the sibling
document had it right the whole time: `body_contact_and_battles.md:666` states the rule
completely, in one line, and has done all along.

**That is this corpus's signature failure in its purest form — the right answer already
written down, in the wrong file.** No research was needed to fix it. Only a reader who
held the two documents side by side.

**`zone_entries.md` carried an affirmative instruction to hit.** Its §7 facts block and
body both told the reader a soft dump gives your chaser *"a stationary puck and a body
to hit"* — in a document that states nowhere where body checking is legal and links to
no document that does, naming as its target a defenceman who has turned to retrieve a
dumped puck. That is the exact picture this corpus quotes Hockey Canada's officials
being told to watch for, at `body_contact_and_battles.md:487`. The reviewer's grading
was blunt: the caveat is in **no** layer of that document, and the readers outside a
checking classification are most of them.

The other two criticals were the head-contact prohibition missing from
`body_contact_and_battles.md`'s Overview, and the "kick the puck out" instruction
reaching Common Mistakes and Key Takeaway 9 without the limit the body attaches to it.

**And the reviewer's own account of how it found the kicking defect belongs in the
record**, because it is the honest version of a good result: **luck of the inventory,
not of the headings**. Neither heading — *"Working the puck free with your feet"*,
*"Your feet and body are part of your handling"* — advertises a match penalty. It
surfaced only because every facts line in both files was read against every summary
bullet and the two contradicted each other. *"A hazard that is stated in neither
document — with no internal contradiction to trip over — I would have missed
entirely."*

### Seven fixes, five of them Class A

Applied to `puck_handling.md`, `zone_entries.md` and `body_contact_and_battles.md`,
every quotation re-grepped by the fixing agent rather than taken from the brief. Five
were retractions or verbatim lifts and closed without a reader: *"to hit"* deleted from
both `zone_entries.md` lines; *"only"* and *"the restrictions are on scoring"* struck
from `puck_handling.md`, with `body_contact_and_battles.md:666` lifted verbatim into
its facts block; and three wording corrections.

One of those three is worth keeping for the mechanism. Restoring a dropped hedge to the
`:416` facts line, the agent's first attempt — *"minor-plus-misconduct up to a match
penalty"* — ran to **214 characters**, and `check_facts.py` rejected it: an unqualified
`Never:` label caps at 200. **It reworked to 195 rather than dropping the hedge.** That
same character limit is what produced the original defect, when three words went
missing in a rewrite; this time it was met by better wording instead.

### The one read that was needed — and it found a critical the fix had introduced

Four passages, one file, one reader. Three cleared. The fourth did not.

The new Common Mistakes bullet closed with *"A shoulder that arrives from the front and
finds a head is still the offence."* **IIHF 48.1 carries an explicit carve-out four
lines below the sentence the bullet quotes** (`iihf_rules_v1.1.txt:4271-4272`): a
checker who bodychecks an opponent *"skating with the puck with their head down in the
direction of the Player and does not use an upward motion or drive their body up into
the opponent, shall not be penalized for an 'illegal check to the head'."* The bullet's
scenario contains the carve-out's — a head-down carrier is facing you.

**The harm was on the receiving side, not the checker's.** Over-prohibiting a checker
errs safe. But Common Mistakes is read alone, and a listener who hears only that bullet
takes away *the rules have my back if a hit from the front finds my head*, which
directly undercuts the document's own most load-bearing self-protection instruction —
*"Keep your head up. Always."* It contradicted three places in the same file, including
the facts line at `:454`.

Fixed by **verbatim lift from line 461 of that same file**. No new claim, no new prose,
Class A, no further reader.

So the terminating rule worked exactly as the gate designed it: Class B produced one
more defect, the reader caught it, and the fix to the fix was Class A. The loop closed
where the gate said it would.

**`commit-gate` has not been run a third time**, and this record is not a substitute
for it. What is on record is that both blocking conditions had the pass they asked for
and every finding was fixed; whether that clears C6 and C10 is the gate's call, not
this record's.

### Added to outstanding work — items 15 to 17

Continuing the list above; the numbered items 1–14 are unchanged.

15. **The IIHF head-down carve-out, in its sibling documents.** The reader named
    `skating.md`, `defending_the_rush.md` and `defender.md` as the likely carriers of
    *"there is no clean check to the head"* without it, reasoning that an Overview
    edit of this kind gets mirrored. A single-phrase grep run while writing this record
    does **not** support that — none of those three contains the phrase, or `48.1`, or
    "head or neck" at all — but it does show **`rules_primer.md`, five times**
    (`:15`, `:372`, `:714`, `:756`, `:825`: a ⚠️ callout, the comparison table, Common
    Mistakes and Key Takeaways), with no instance of "head down" or "shall not be
    penalized" anywhere in the file. **That is one grep for one phrase and it is not
    the check** — a document stating the prohibition in other words is invisible to
    it, and whether a penalty-tier primer owes a checker-side exception is a judgement
    nobody has made. Item 15 is: make it, and check the corpus properly.
16. **The summary layers drop USA Hockey 627(a).** The body and facts block of
    `body_contact_and_battles.md` carry the skate push-off — major plus game misconduct
    for contact that is not a kick at all — and the two summary instances of the new
    kicking clause do not. Behaviourally covered by "never at a player"; recorded
    because a clause dropped in a summary layer is the shape this round exists to catch.
17. **IIHF 49.3 is not a match penalty.** It is a **major plus an automatic game
    misconduct at the referee's discretion** (`iihf_rules_v1.1.txt:4362-4363`), where
    NHL 49.3 is a match penalty. The corpus states the NHL number and attributes it
    correctly, so nothing is false — but a British reader takes the NHL tier as theirs
    and over-estimates it. Errs safe, behaviour identical, unrecorded until now.

### What Part 3's method could not have found

- **The safety pass hunted for caveats that are missing, and is blind to the reverse.**
  Three of its own Minors are claims that say too much, caught only because they sat
  in paragraphs it was reading for something else. *"A claim that overstates a penalty
  in a section I had no reason to inventory would have passed me."* It read four
  files; `breakouts.md` and `equipment.md`, both named as owners, were not opened.
- **The Class B read read one file and four passages.** It did not re-run the omission
  pass over the rest of `body_contact_and_battles.md`, so a hedge dropped elsewhere in
  this diff is outside what it checked — which is exactly how item 15 came to be
  hypothesis rather than finding.
- **Nobody read the podcast script or the rendered page for any of these fixes.**
  Read-aloud safety was reasoned about from the markdown.
- **The site pass measured Blink at integer widths.** No Safari, which is the engine
  that matters at 430 px; no real device; no screen reader, only the tree one
  consumes; no production CloudFront layer. Its closing line stands: *"nothing here
  speaks to whether any word on these pages is true."*
- **And the gate audits a diff.** It is blind to anything correct that lived in the
  896 deleted lines and is now gone, and every row of its verification table inherits
  any error in the extractions on disk, which it did not check against their PDFs.

---

## Part 4 — the corpus had a Hockey Canada rule backwards

Written at 00:06, after the third `commit-gate` audit, the fixes it demanded, a
`rules-verifier` scoped read, a `safety-reviewer` scoped read, one edit the coordinator
made itself, and the fourth gate. Parts 1 to 3 stand. All of it happened inside the 235
insertions Part 3 could not see.

### The stat block, for the sixth time

| Command | Files | Insertions | Deletions | Taken at |
|---|---|---|---|---|
| `git diff --cached --stat` | 60 | **5,469** | **898** | 00:06 |

Part 3's 60 / 5,234 / 896 at 23:02 is **235 insertions and 2 deletions short**; the third
gate measured 5,466 / 897 at 23:14, so the record was stale twelve minutes after it was
written. The fourth gate said what that means: *"the sixth recurrence of the process
failure the record itself identifies as the round's central finding, and this time the
undocumented delta contains the round's most serious rules finding."* Writing Part 4
makes it seven. `git diff --stat` was **not** empty at 00:06 — 2 files, 5 insertions, 4
deletions — because a propagation agent dispatched at 00:03 against the fourth gate's C7
block was editing the tree as this was written; its outcome is not in this record.
Checkers at 00:06: links exit 0; facts exit 0, 26 documents, 765 blocks, **4,502** facts.
Every earlier run this round reported 4,501, and the extra line is that in-flight
propagation, not this record.

### `commit-gate`, third run — **BLOCK**, and it amended its own rule

Two defects, both in text this diff added, both Class A lifts that had lost their
rule-set attribution in transit. At `body_contact_and_battles.md:1094` the IIHF carve-out
landed after **USA Hockey Rule 620**, so *"with one exception written into the same
rule"* read as 620 — a rule whose Note says the opposite. At `rules_primer.md:759` a new
Common Mistakes bullet claimed *"Every book puts the onus on the player delivering the
check"* where its source named two: NHL Rule 43 and IIHF Rule 43 state no onus at all,
and the same diff said so in the sibling document. The gate amended the Class A / Class B
partition it supplied in Part 3:

> A lift is **Class A only if the moved text carries its OWN rule-set attribution.**
> Text whose scope is supplied by its neighbours is **Class B**, because the
> destination supplies different neighbours.

**Under the amended rule both fixes that prompted it were Class B and would have gone to
a reader. Under the rule as written they closed at the gate — and both were wrong.** That
is the amendment's whole justification, and it is worth more than either fix.

### The critical — Hockey Canada writes the exception the corpus said it did not

A `rules-verifier` scoped read then found the round's most serious rules defect. The
corpus asserted the head-down carve-out was *"in the IIHF book only"*, that *"USA Hockey
and Hockey Canada write no such exception"*, and at `rules_primer.md:374` that *"neither
USA Hockey nor Hockey Canada writes that exception at all."* **Hockey Canada
Interpretation 3 to Rule 7.7(a) writes one** (`hc.txt:6392`):

> In Junior and Senior divisions, if a player ducks to avoid a check and, as a result,
> is hit in the head area with an otherwise legal check, this will not be considered
> Head Contact and no penalty will be assessed. The referee may assess a penalty to the
> player who ducks to avoid a check under Rule 8.7 — Clipping, if appropriate.

It goes **further than the IIHF's, in both directions**: it declines to penalise the
checker *and* exposes the player who ducked — Rule 8.7, *"Players may not crouch down to
avoid being bodychecked"* (`hc.txt:7098`), a minor under 8.7(a). The corpus was telling a
Canadian junior or senior player that their book protects them *"regardless of the
circumstances"* when it can put **them** in the box while the checker skates away — wrong
in the one direction that removes the deterrent from the readers most likely to duck.

**How it was found is the transferable part.** The reviewer searched `/duck\w*/`; **a
line-based grep for "head down" returns zero in `hc.txt`.** The same pass hit a
line-break false negative of its own, on USA Hockey's *"regardless as to size
differential"* (`usah.txt:591`), which returned nothing until whitespace was collapsed.
It also corrected the previous fix, which had over-read Rule 7.6 as minor/female-only:
**the qualifier appears in 7.6(a) alone** (`hc.txt:6232-6255`). Every corpus citation of
7.6 quotes the unscoped preamble, so none of the five sites in `rules_primer.md` was
falsified.

**Two further defects in the same passage.** `rules_primer.md:374` argued the carve-out
and the trigger list are disjoint because a checker who extends to reach you trips IIHF
trigger (III) — but the carve-out excludes only *"an upward motion"*, while (III) reads
*"extends their body upward **or outward**"*, and (III)'s second limb, *"uses any part of
the upper body to contact an opponent's head or neck"*, describes the very hit the
carve-out is about. No ordering language, no published interpretation: a resolution of an
ambiguity was being presented as the rule's structure. And `:372` had **silently
truncated trigger (III)** with no ellipsis, dropping that second limb — which is what
made the argument look tight. Both replaced, the trigger restored in full and the point
labelled unresolved.

### The three-way split, and the Major it left behind

The rebuilt passage carries three buckets: the IIHF carve-out on a head-down carrier;
Hockey Canada junior/senior on ducking, with its 8.7 exposure and its
legitimate-hockey-play limit; and no such exception found in USA Hockey's Playing Rules
or Hockey Canada's minor and female rules.

A scoped `safety-reviewer` read returned one **Major**, at
`body_contact_and_battles.md:461` — the headline *"The rules protect you less when your
head is down"* and the flat *"a legal, square hit that catches a bent-over player is not
the checker's foul."* Neither names a book; both state an IIHF-only carve-out as
universal, in the section that opens *"This is the most important section in this
document, and it applies in every league."* The layer table is the finding: body ✗ ·
facts ✓ · Common Mistakes ✓ · Key Takeaways ✓. **The correction had reached the summary
layer and the sibling document and stopped before the body of the document that owns the
topic** — propagation run in reverse, the inverse of the round-10 shape.

### The coordinator applied that fix itself, and made an error doing it

Two clause-level edits, both retraction or verbatim lift. The coordinator applied them
personally instead of dispatching an agent, **inserted the replacement clause and left
the clause it was meant to replace**, briefly publishing a paragraph that contradicted
itself. Caught by re-reading the rendered line. That is the failure mode the reviewer had
just described — a correction landing without displacing what it corrects — committed by
the person who had just read the description. The fourth gate treated it as evidence, not
trivia: *"a self-review satisfies none of C4–C6, and the error you made is direct
evidence of why."*

### `commit-gate`, fourth run — **BLOCK** on three, all closable by addition

- **C8** — this record, 235 insertions behind the tree with the critical inside the gap.
  *"This is paperwork, not rework."*
- **C6** — one scoped `safety-reviewer` read of the paragraph the coordinator wrote and
  checked itself. *"Not a re-round."*
- **C7** — the split reached `rules_primer.md:376` and stopped, absent from that
  document's Overview `:15`, Common Mistakes `:760`, Key Takeaways `:829`, comparison row
  `:718`, and the facts block at `body_contact_and_battles.md:452`. All five name IIHF
  inside themselves, so none is false; it is an omission, and the instruction is identical
  under all three books, so nobody is steered into an unsafe act.

**It ruled explicitly against cutting the passage back to a single book**, which is what
the coordinator had proposed if a fifth defect appeared. The gate verified the passage
against primary text itself — Interpretation 3 verbatim including *"In Junior and Senior
divisions"*, Rule 8.7 and 8.7(a), the 7.6 preamble, IIHF 48.1 and trigger (III) in full,
the USA Hockey negative — and judged it sound: *"Cutting would delete a true and
safety-relevant fact … this passage is not the broader thing that keeps turning out
wrong. It **kept turning out wrong while it was incomplete.**"* Non-negotiable 3, reached
independently by a gate being invited to waive it.

**And it caught an extraction artefact on the way.** Hockey Canada's limiting sentence —
*"does not apply to a player who is in a vulnerable position as the result of a
legitimate hockey play"* — appears in `hc.txt` **after a `Rule 7.8` header**, a
two-column interleaving artefact. The gate read the surrounding structure, confirmed
`Rule 7.8 / Kneeing` is an interleaved header block and the sentence is Interpretation
3's tail, and only then accepted the attribution. **Had it belonged to 7.8, the passage
would have overstated a protection.** That is the second class of extraction failure
found today, after the line-break false negatives. A grep hit now needs its structural
neighbourhood read, not just its line.

### The error counts, recounted

**Brief errors: 24 of 126, up from 22 of 111.** Same method as Part 2 — every JSONL
transcript in this session's `subagents/` directory finishing after `bd355cf`'s commit
time (11:31:03), the word "brief" matched in the last two assistant messages, each hit
read: 126 transcripts, all 126 carrying prose in a final message, **66** with the word. I
read the four hits finishing at or after 23:03 and added two. The first is instructive —
the third gate's remedy named `body_contact_and_battles.md:159` as the donor for the
sourced onus wording, and line 159 is a heading about angling; the sourced form is at
`:429` and `:1079`. The coordinator relayed the pointer unchecked and the fixing agent
caught it. Part 2's lesson was that a coordinator relaying a finding is a second author
of it; here the reviewer was the first. The second: a `rules-verifier` correcting the
brief's claim that two passages carried an explicit negative clause when only one did. My
count finds no prose-less transcript where the earlier one found a single such; I did not
chase that discrepancy, and the earlier 62 hits were not re-read.

**Wrong review findings: still fifteen** — nothing here overturned a finding. The `:159`
pointer was a wrong remedy inside a correct one, and the `rules-verifier`'s hedge that
Interpretation 3 says *"ducks"* rather than "skates with head down" is a limit it stated
on its own finding, not a defect in it.

### Added to outstanding work — item 18

18. **The USA Hockey Casebook is not on disk.** `sources/` holds the Playing Rules only,
    so both halves of the USA Hockey negative — no head-down carve-out, no
    intentional-turn waiver — are confirmed against the Playing Rules and **not** the
    Casebook, which is exactly where a ducking interpretation would live if one exists.
    The corpus discloses this in the passage. Fetching it is the next action here, and
    until then the split's third bucket is bounded, not closed.

### What Part 4's method could not have found

- **Interpretation 3 surfaced only because the reviewer thought to search `/duck\w*/`:**
  *"a carve-out phrased in vocabulary I did not think to search for would still be
  sitting there. My sweeps were concept-based but the concept list was mine."*
- **The `safety-reviewer` opened no rulebook**, by instruction — if Interpretation 3 is
  numbered differently in the 2026-28 edition, or the junior/senior confinement is a
  heading rather than rule text, a teaching review cannot see it.
- **Both scoped reads read two files**, and propagation-in-reverse is exactly the shape
  that would repeat in `skating.md`, `puck_handling.md`, `scanning_and_anticipation.md`
  and `uk_rules.md`. Item 15 is still open.
- **Nobody read the rendered page or the podcast script for these fixes**, and
  `md_to_speech.py` was not run, so the `safety-reviewer`'s Minor at `:1094` would change
  severity if the emitted segment breaks mid-bullet.
- **Every verification here inherits the extractions in `sources/`**, unchecked against
  their PDFs; one interleaving artefact caught by structural reading is a warning, not a
  bound. And this record was written while another agent edited two of the files it
  describes — its stat block and fact count measure a moving tree at 00:06.

## Part 5 — the propagation landed, and a facts line told the checker to hit

Written at 00:25, after the propagation agent's five additions, a scoped `safety-reviewer`
read of them, two fixes the coordinator applied itself, and the fifth `commit-gate` audit.
Parts 1 to 4 stand. Part 4 closed on the fourth gate's C7 block — five slots the
correction had not reached — and nothing after line 1586 recorded any as done.

### The stat block, for the seventh time — and nothing in flight

| Command | Files | Insertions | Deletions | Taken at |
|---|---|---|---|---|
| `git diff --cached --stat` | 60 | **5,665** | **899** | 00:24 |

`git diff --stat` is **empty**: the first stat block this round taken against a tree
nobody else was editing. Part 4's 60 / 5,469 / 898 at 00:06 is 196 insertions short, and
the fifth gate did the arithmetic — Part 4's own 194 lines account for 5,663 of it,
**leaving the whole of the propagation, the three rewritten table cells and both safety
fixes outside every figure this record has ever taken.** The residue is two insertions and
one deletion, because nearly all of that work rewrote lines in place; a diffstat is the
wrong instrument for finding it. The gate's grading — *"the eighth recurrence of the
failure the record names as its central finding, and it is the first time the gap contains
a critical **safety** finding rather than a rules one."* Writing Part 5 makes it nine.
Checkers at 00:25, re-run by me after the gate ran its own: links exit 0; facts exit 0, 26
documents, 765 blocks, **4,502** facts. The gate adds secrets exit 0 over 192 tracked
files, a clean credential grep, `.gitignore` untouched, a passing build.

### The propagation completed — five slots, all four qualifiers in each

The three-way split now reads in every layer the fourth gate named: the IIHF 48.1
carve-out on a head-down puck carrier; **Hockey Canada Interpretation 3 to Rule 7.7(a)**,
junior and senior divisions only, on ducking, with its Rule 8.7(a) Clipping exposure and
its legitimate-hockey-play limit; and no equivalent in USA Hockey's Playing Rules or
Hockey Canada's minor and female rules. The slots: `rules_primer.md` Overview `:15`,
Common Mistakes `:760`, Key Takeaway 5 `:829`, the §10 comparison row `:718`, and the
facts block at `body_contact_and_battles.md:452`. All **four** Hockey Canada qualifiers
travel together in every one — junior/senior confinement, ducking as a trigger distinct
from head-down carrying, the 8.7(a) exposure, the legitimate-play limit — and the fifth
gate checked that on disk, slot by slot, rather than accepting the claim.

The writing agent re-verified its Hockey Canada quotations against `sources/hc.txt` while
drafting (Interpretation 3 `:6393`, its limit `:6403`, Rule 8.7 and 8.7(a) `:7098`), and
at `:829` replaced a **pre-existing** phrase, *"the rule stops covering you when it is
down"*, which overstated the carve-out. It also caught one scope violation of its own: a
closing line reading *"keep your head up in all three books"*, removed because it
**supplied scope by count instead of by name** — and was wrong besides, the bullet
discussing four.

### Three cells changed in the comparison row, and one was already wrong

Not one cell but three. **IIHF** — carve-out added; the cell *"previously read as
unconditional protection."* **England Ice Hockey** — *"As IIHF — the In-House Rules carry
no amendment to Rule 48, the carve-out included"*, which the `safety-reviewer` called the
most valuable addition in the pass, because it tells a British reader the carve-out **is**
theirs and no other cell would have. **USA Hockey** — the negative, carrying Rule 620's
Note putting the onus on the checker.

The IIHF cell is the point: a defect that predates this round, in a document that has been
through every one of them, flagged by nobody. The gate said why, filing it under what it
could not have found — *"the unconditional-protection reading in the IIHF cell had
survived every previous round precisely because it was never in a diff anybody was
auditing."* Reviewing the diff is not reviewing the page.

### The scoped `safety-reviewer` read

Two files, six passages, no rulebook opened by instruction. It **cleared** the
coordinator's paragraph at `body_contact_and_battles.md:461-462`, read as though it had
not been told it was fixed, and searched the corpus for debris from the coordinator's
double edit in Part 4: the only surviving instances of the flat *"is not the checker's
foul"* are two elsewhere — `rules_primer.md:374` and `:829` — both hedged, both
book-scoped.

**CRITICAL · `body_contact_and_battles.md:454`** — the facts line then read *"Rule: A
square check with no upward motion on a player skating head down is not an illegal check
to the head, and the IIHF attaches no penalty to the player whose head was down (IIHF Rule
48.1)"*. The first clause is a **flat, book-less permission to hit a head-down player**;
"IIHF" arrives twenty words later attached to a *different* proposition — the ducked
player's own liability — not to the legality of the check. It is the one line of the six
that speaks to the **checker** rather than the player being hit, so a USA Hockey or Hockey
Canada minor player acting on it hits a head-down opponent's head believing the book
allows it. The asymmetry proving oversight rather than judgement: the line immediately
below, `:455`, fronts its scope perfectly — *"Rule: Hockey Canada junior and senior only
— …"*.

**MAJOR · `rules_primer.md:760`** — the Common Mistakes bullet ended on a penalty warning
against getting low, with no counter-cue after it. The over-correction is a stiff upright
stance into contact, which `body_contact_and_battles.md:530` warns against in terms: *"A
stiff, upright player gets knocked over"*. **Three of the four sibling layers written in
the same pass carried a counter-cue and this one did not** — the evidence it was missed
rather than decided.

**On the 742-character rec cell** it judged the refusal to shorten correct: the only
droppable qualifier is the legitimate-hockey-play limit, and dropping it would teach that
a head low while shooting is a duck. If length is forced, cut the second statement of the
junior/senior confinement, never the limit. (Measured on disk the stripped cell is 740
characters; the writing agent and the gate both say 742.)

### Both fixes applied by the coordinator, again

Verbatim corrections of wording cleared earlier in the session — a four-word scope prefix
at `:454`, the Key-Takeaway counter-cue clause appended at `:760` — applied personally
rather than by a dispatched agent, with the rendered output read before they were declared
done. **This is the second and third self-applied fix of the round; the first, forty
minutes earlier, produced an error the coordinator self-caught** (lines 1567–1577). The
fifth gate read both on disk rather than in the description and judged them correct — of
`:454`, *"the line most at risk in the whole passage and it is now the safest one in it"*
— while stating that judgement's limit: *"It does not discharge C6 — I audit a diff, I do
not review teaching."*

### `commit-gate`, fifth run — **BLOCK** on three

- **C8** — this record, which stopped at the fourth block and did not contain the work
  that closes it. *"Paperwork, not rework — but it is C8, and C8 is not discretionary."*
- **C6** — no `safety-reviewer` artefact on disk or in the conversation for the five
  additions; the only account of that read was the coordinator's summary of it.
- **C10** — the build passes; the placement does not. The Hockey Canada material sits in
  the column headed **"Typical rec / beer league"** (`rules_primer.md:708`; the gate cited
  `:709`, the separator beneath it). Nothing in the cell is false and the junior/senior
  confinement is stated inside it — but this is the **amended Class A / B rule of Part 4
  applied to a table column**: text whose scope is supplied by its neighbours, moved where
  the neighbours differ. The neighbour here is a header that says *beer league*, and
  Hockey Canada junior and senior divisions are not that. Nobody has reviewed the
  placement; it was written after the `rules-verifier` read. The remedy is a scoped read
  of that row for placement, not rule text.

### Added to outstanding work — item 19

19. **`body_contact_and_battles.md:1077`** — *"the one that removes most of the rulebook's
    protection from you"*, in the Common Mistakes layer of the document whose body was
    narrowed. Broader than the corpus now establishes: one IIHF carve-out for the square
    hit with no upward motion, nothing in USA Hockey or Hockey Canada minor/female. Graded
    **Minor**, direction protective — but a *checker* reading it alone could infer general
    licence. Closes by verbatim narrowing later; it does not hold this commit.

### What Part 5's method could not have found

- **No rulebook was opened** — not by the `safety-reviewer`, by instruction, and not by
  me; every rule claim here inherits Part 4's verification and the `sources/` extractions.
  Both scoped reads read two files, so item 15 is untouched, and `:454` is the shape that
  would recur in any facts block another agent wrote elsewhere.
- **Nobody read the rendered page or the podcast script.** `md_to_speech.py` has not been
  run over the new facts lines, and the 742-character cell was judged for content by a
  reviewer reading Markdown, not for legibility by anyone looking at it.
- **The IIHF cell is the warning.** A defect can sit in a shipped document through every
  round of this project and be invisible to all of them, because every reviewer after the
  first is pointed at a diff. It surfaced only because the cell had to be edited anyway.
- **This record is now the only durable artefact of that safety review, and it is a
  transcription.** The findings were read out of the reviewer's own final report in this
  session's subagent transcript, not from anyone's summary — so the gate's *"no artefact
  on disk"* was true of `project/` and not of the transcript. A session transcript is not
  a review record. If a nuance is lost here, nobody downstream can tell.

## Part 6 — the placement objection, withdrawn by the gate that raised it

Written at 00:50, after a scoped `content-reviewer` read of the §10 comparison row and the
sixth `commit-gate` audit. Parts 1 to 5 stand. This record's last word on C10 was *"Nobody
has reviewed the placement; it was written after the `rules-verifier` read"* (`:1772-1780`).
That was true when written and is no longer; left as the final statement it would tell every
later reader — and `review_history.md`, rebuilt from these files — that this commit was made
over an open gate block. It was not. This Part says so out of the reviewers' own reports.

### The stat block, for the eighth time — and nothing in flight

| Command | Files | Insertions | Deletions | Taken at |
|---|---|---|---|---|
| `git diff --cached --stat` | 60 | **5,816** | **899** | 00:46 |

`git diff --stat` is **empty**, `git log -1` is `bd355cf` — the commit Parts 1 to 5 were
written against — and the 151-insertion delta from Part 5's 00:24 figure is Part 5 itself.

**The condition this Part must satisfy, stated so a later reader can check it rather than
trust it.** This append is 110 lines. Once staged, `git diff --cached --stat` must read
**60 files · 5,926 insertions · 899 deletions**, and `git diff --stat` must be empty. If
either differs, something other than this record moved and the gate must run again.

### The `content-reviewer` scoped read — safe to commit, no placement defect

Scoped to placement in `content/foundation/rules_primer.md` §10, rule wording taken as
established by Part 4. Transcribed from the reviewer's own report.

**It refuted the premise from the table's own precedent.** Hockey Canada already appears in
the *"Typical rec / beer league"* column in three other rows and — the reviewer checked
every row — nowhere else in the table: `:712` icing and gaining the line (*"Hockey Canada
likewise has no 'gain the line'"*), `:719` checking from behind (*"Hockey Canada is not the
soft option either"*), `:723` the airborne trail skate (*"Hockey Canada Rule 6.11 is the
same as USA Hockey"*). Moving the material out would make `:718` the odd one out of four.

**The column is defined, and the definition names both books.** The note at `:731`:
*"unlike the other four, it is not one book … the column describes what is common across
leagues that mostly adopt USA Hockey or Hockey Canada rules with local amendments."* So
*"both books the column rests on"* is a defined phrase, not a loose one.

**Four measurements, taken and not estimated.** Row `:718`: rec **740** characters, IIHF
**516**, USA Hockey **409**; the previous table maximum was **461**, the trapezoid cell at
`:710`. The rec cell is 1.6× that, not an order of magnitude, in a row already carrying a
516 and a 409. The verdict: *"the outlier is the row, not the cell, and the row earns it."*

**The scanner's landing point is "Assume ejection."** — the first words the eye meets
crossing the row, before any carve-out, and the exception is hedged twice more behind it.

**It declined to lift the material into prose.** Head contact and checking from behind are
the two rows where four-book divergence is the entire point of the table; pulling one out
while the structurally identical `:719` stays in — comparable Hockey Canada material at 281
characters — would create an inconsistency worse than the length problem it solves. The
material is carried in prose too, at Common Mistakes, with the same three qualifications
intact, and the reviewer checked body against summary because that is where round 10's
criticals were.

**Two hand-offs, neither closed.** To `rules-verifier`: does Hockey Canada's *"Senior"*
division reach adult recreational hockey — does the junior/senior confinement include or
exclude this column's readership? The reviewer declined that determination and was right to;
the cell is safe either way, but the answer decides whether the carve-out is relevant to the
column or merely adjacent to it. And *"both books the column rests on"* resolves only
against a note some forty lines below the table, so read aloud in isolation it has no
referent. Naming them inline closes it and adds no claim.

### `commit-gate`, sixth run — **BLOCK** on C8 alone

**It closed the diagram-scope question the fifth run left open.** The record names the file
set exactly at `:15-21` — sixteen files, and the gate enumerated the same sixteen in the
staged diff; the dimension table carries a dedicated diagram row at `:304`; Part 2 re-ran
`diagram-reviewer` against the frozen tree; the staged `diagrams.json` delta is eleven
caption / describe / owner edits with **no ids added or removed**. No C3/C8 gap.

**It withdrew its own C10 objection, and not on the coordinator's word** — it read the
table itself: *"My fifth self read a column header and not the note that governs it."* A
gate correcting itself against the source rather than defending a block it has published is
the behaviour this process depends on, and it belongs here as plainly as the blocks do.

**C6 satisfied**, by Part 5's transcription of the scoped `safety-reviewer` read at
`:1720-1752`; the gate accepted Part 5's correction of its own *"no output exists on disk"*
wording — true of `project/`, false of the transcript, and a transcript is not a record. It
re-ran C1, C2 and C9 itself: links exit 0; facts exit 0 over 26 documents, 765 blocks, 4,502
facts; secrets exit 0 over 192 tracked files. It deliberately did **not** re-run the build —
that rewrites `diagrams.json`, and a tree dirtied at the gate is the `239f70d` shape.

**It blocked on C8 alone — this Part — and bounded the remedy so it cannot regress.** Part
6 is a `project/` append, class *"Project docs"*, C9 only, and C9 is already evaluated and
passed: **no seventh gate run is required.** The arithmetic above is all that remains.

### The tenth recurrence, and the last Part

The sixth gate graded its block the **tenth** recurrence of this record's central finding —
the work lands, and the artefact that outlives the session still says the old thing. Part 5
recorded the fifth gate grading its own block the eighth, and writing Part 5 made it nine.
Part 6 is written to be the last: no new claim about hockey, no finding a Part 7 would have
to close, nothing added to the outstanding list.

### What Part 6's method could not have found — and the gate's closing limits

- **The gate audits a diff, so a defect already in a file is invisible to it.** The IIHF
  comparison cell is the proof — it survived every previous round by never being edited,
  surfacing only because something else forced the cell open. Unlikely to be the only one.
- **Every rule check this round inherits text extractions nobody has checked against the
  PDFs**, and the USA Hockey Casebook is still not on disk: the third bucket is bounded.
- **Nobody has heard or seen any of this.** `md_to_speech.py` has not been run over the new
  facts lines, and the 740-character cell has been judged for content by reviewers reading
  Markdown — not for legibility by anyone looking at it rendered.
- **This Part is a transcription, as Part 5 was.** Two reviewers' reasoning reaches the
  record through a coordinator who read their reports, not their work. If a nuance is lost
  in the passage, nobody downstream can tell.
