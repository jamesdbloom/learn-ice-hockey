# 12 September 2026 — the Language/Glossary split, the Rink Map rename, and a goalkeeper Critical

The record of **one change**. ⚠️ **No file or line count is written here on purpose** — this record was
drafted mid-change and its header said *"48 files, 1,467 insertions, 388 deletions"* while the staged
diff had already moved past it. **`git show --stat` on the commit is the owner of those figures**, and a
count copied out of its owner goes stale silently: it is the failure this very change records nine
instances of. Companion to
[`round_76_everything_reported_success.md`](round_76_everything_reported_success.md), which records the
round's method findings rather than this change's contents.

## What changed

| | |
|---|---|
| **New document** | `content/foundation/language_and_glossary.md` — **455 lines, 169 of them new**, the rest moved. **Eight** `## A Note on Language` sections consolidated **by term**, plus §8 Glossary moved from the Rink Map. **The eight sources have since been removed from their documents, in this same change.** ⚠️ **This was recorded as NINE throughout the change, by the coordinator, and `commit-gate` repeated the figure back as fact in its verdict. HEAD carried eight (`git grep -c '^## A Note on Language' HEAD -- content/`); the staged tree carries zero. `switching_positions.md` never had the section — its only change was the rename.** |
| **Renamed** | `content/foundation/rink_map_and_glossary.md` → `rink_map.md`, glossary removed (28,189 → 20,106 words). **108 path-based links rewritten across 28 files; redirect added.** |
| **Site** | Section hubs gained a `layout` block **above** the cards and **lost `CiteThis`** (documents keep it). `AudioPlayer` now takes its URL from the manifest. `build-diagrams.mjs` gained a content-hash PNG cache, a per-process temp name and a lockfile. |
| **Gate repaired** | `check_geometry.py` hard-codes the owner path and was throwing `FileNotFoundError` after the rename. |

## ⚠️⚠️ CRITICAL — a goalkeeper is not "fair game" outside the area the rule names

**The corpus stated where each book's goalkeeper-charging rule KEYS and never stated the sentence in
the next paragraph of those same rules.** Found **independently by `safety-reviewer` and
`rules-verifier`**, from different directions.

| book | wording |
|---|---|
| **NHL 42.1** (`nhl_rules.txt:5437`) and **69.4** (`:7220`) | *"A goalkeeper is not "fair game" just because he is outside the goal crease area."* — two sentences one word apart |
| **IIHF 42.1** (`iihf_rules.txt:3942`) and **69.4** (`:5582`) | identical, IIHF pronouns, **word for word across v1.0, v1.1 and 2026/27** |
| **Hockey Canada 8.5** (`hc.txt:6987`) | the widest — a penalty *"will be called where an opposing player makes unnecessary contact with the goaltender **anywhere on the ice**."* |
| **USA Hockey 607(d)** (`usah.txt:3683`) + **Casebook Situation 5** | *"Although a goalkeeper **can be legally checked** when outside the privileged area, they are not considered to be "fair game.""* |

⚠️ **It was invisible to grep because all four books print *fair game* in CURLY quotation marks.** A
straight-quote search returns nothing from three of them — **the fourth false-absence grep of the
round.**

**The play it produces:** a forechecker finishing a check on a goaltender who has come out to the wall
or the corner — a player with no expectation of contact, in leg protection that does not absorb it.

**Fixed at EIGHT sites** — seven named, **an eighth found by the repairing agent** at `rink_map.md:195`,
which read *"Outside it, incidental contact is legal…"* with nothing after it.

⚠️ **Two were summary chunks that CLOSED on the absence, and one INVERTED.** HEAD's
`rink_map_and_glossary.md:721` read *"Under three of the four books the crease is the whole of it"*;
staged `rink_map.md:570` reads ***"It is not, in any of the four books."*** ⚠️ **Non-negotiable 3 was
respected: Key Takeaway 12's absence sentence is kept VERBATIM and extended**, not replaced.

## MAJOR — the rename left `podcast.json` half-migrated, and the site published two audio URLs

**The coordinator's error.** `doc_id` was updated; `title` and `audio` were not. The page built its
`<audio src>` from the **collection id** while the feed, the m3u endpoints and the downloads page built
theirs from the manifest — **and 38 pages rendered a player against 37 episodes**, so the newest
document offered a control that could never play.

⚠️ **Nothing mechanical could catch it:** `check-links.mjs:205` skips every `/audio/` href on purpose,
and its own comment says *"the failure mode is not a typo, it is a STALE podcast.json."*

**Fixed at the source rather than in the data**: `AudioPlayer` now takes a required `src` from the
manifest and the page renders no player where no episode exists, so page and feed **cannot** diverge.
Verified in `dist`: 37 players, 37 distinct `.m4a`, Rink Map pointing at the file that exists on the
origin, Language and Glossary rendering none, and the feed carrying exactly two old-slug references —
**the pinned `guid` and the enclosure URL.** ⚠️ **The GUID is pinned deliberately so subscribers do not
lose an already-published 60-minute episode.**

## Six rules findings, all verified against primary text

1. ⚠️ **The delayed-offside goal disallowance, carried by nobody.** NHL **83.4** — *"The fact that the
   attacking team may have cleared the zone prior to the puck entering the goal has no bearing on this
   ruling."* IIHF 83.4 word for word; HC 6.11(b) Note 1; USAH Casebook Situation 41. **And the books
   split on the own-goal case:** NHL/IIHF allow it; USA Hockey — *"Even if the defending team shoots,
   passes or deflects the puck into its own goal, a goal may not be allowed."*
2. **The cross-checking ladder overstated discretion.** *"A minor at the referee's discretion"* holds in
   **two** of four — USA Hockey **609(a)** and Hockey Canada **9.2(a)** are flat. ⚠️ **HC Interpretation
   1 to 9.2(a): *"If a pushing motion is used, a penalty may not be necessary"* — precisely the
   two-handed shove the entry describes.**
3. **Three icing gaps.** *"If it goes in the net"* **is not in NHL Rule 81 at all** (81.1–81.6 read
   whole); **IIHF 81.1 carries a no-race limb keyed to the BLUE LINE** that the NHL lacks; and the
   hybrid-adoption dates are unsupportable — see below.
4. **Tip-in:** Casebook 621 Situation 15's directly-in-goal exception, and USA Hockey 621(d)'s narrower
   *"directly"* against NHL 80.3's *"either directly or deflected"*.
5. **Hockey Canada absent from two comparisons** — 6.7(d)'s third position on time-outs, and 6.7(b)'s
   unconditional shorthanded exemption.
6. **The twenty-feet figure DROPPED, the distinction kept.** `rink.json` sets `point.x = 25` **and**
   `blue-line.x = 25` — the same coordinate — with the owner's *"THE OWNER GIVES NO OFFSET,
   deliberately… Picking an x > 25 would invent one."* ⚠️ **It had reached Common Mistakes, voiced
   alone, while an open plan row said nobody had checked it.**

## A live production defect fixed incidentally

**`game_management.md`'s Sources trailer was being read aloud to listeners** — it opened *"Sources —
first assembled"* against `SOURCES_MARKER = "sources retrieved"`. **The only one of 38.** Verified
fixed: `--report` now shows `1 sources-section` + `11 after-sources.paragraph` **DROPPED**.

## Reviewers, and what each covered

| reviewer | scope |
|---|---|
| `content-reviewer` | the new page at 5,047 words — **before the glossary landed**; 7 Majors, all repaired |
| `rules-verifier` | faceoff order ×5 books, icing ×5, tag-up/offside, trapezoid negatives, the goaltender cluster — by line range with positive controls |
| `safety-reviewer` | the relocated penalty ladder, rendered through `md_to_speech` and read chunk by chunk |
| `site-reviewer` | 8 hubs + both new pages × 2 viewports × 2 themes in real Chrome over CDP; 483 screenshots; 5,662 fragment links, 0 broken |
| `commit-gate` | **blocked three times**, correctly each time |
| `content-reviewer`, second pass | **The GLOSSARY — lines 231–382 — read in full, D7/D12/D13.** Filed **7 Majors and 9 Minors, no Critical**; all repaired. ⚠️ **It refuted three figures this record had carried**: 10 pointer-only entries not 8, **14** substantive entries not 15, **4,840** words not 5,017. ⚠️ **`commit-gate` found the gap only because the first pass's scope was stated precisely** — *"a vaguer record claiming fuller coverage would have been worse and would have cleared."* |
| `facts-reviewer` | ⚠️ **NOT RUN on these two files** — `check_facts.py`'s `IN_SCOPE_LAYERS` excludes `foundation/`, so neither has a facts layer and the body is the only layer there is |
| `source-verifier` | **not required, established by evidence**: 22 external URLs before, 22 after, empty difference — no citation added or changed |

## ⚠️ The count was EIGHT, and "nine" was a correction in the wrong direction

**`git grep -c '^## A Note on Language'` returns eight at `00436ca`, the initial corpus commit of
28 July 2026, and eight at HEAD. `git log -S` finds no commit that ever added or removed a ninth.
The number was never nine.**

Its origin is on record, and it is the inverse of the usual failure:
[`plan_archive_2026-09-11_pre_consolidation.md:17367`](plan_archive_2026-09-11_pre_consolidation.md)
reads *"Original language-note census 6 Sep: **nine documents not eight**"* — an earlier, correct
count of eight, "corrected" upward to a wrong one. ⚠️ **Every convention in this project guards
against a figure decaying downward as its owner is extended. This one was wrong the moment it was
written, and being framed as a correction is what made it unchallengeable.**

**What it reached before anyone checked it:**

| carrier | how it got there |
|---|---|
| **eight agent briefs** | the coordinator wrote "nine" into each |
| `round_76_everything_reported_success.md` | copied from the briefs |
| this record, twice | copied from the briefs |
| `OPEN_ITEMS.md` | copied from the briefs |
| ⚠️ **`commit-gate`'s BLOCK verdict** | **the gate repeated "the nine-document removal" back as its own finding** |

⚠️ **The gate is the last check before a commit, and it restated the coordinator's unverified figure
as fact in the document that decides whether work ships.** It re-derived the geometry, the rule
quotations and the index state — all correctly, and it caught a real defect — **but it inherited the
one number nobody had reason to doubt, because it arrived labelled as already-corrected.**

`switching_positions.md` is the document that was never in the set. Its only change here is the
rename. **Nothing about the consolidation is wrong** — eight sections existed, eight were removed,
zero remain. Only the count was.

## ⚠️⚠️ TWO CRITICALS in the new document, which no reviewer had opened

`language_and_glossary.md` went through this change **reviewed only between lines 231–382**. A
`safety-reviewer` given the whole file found two criticals in it. Both are now repaired in all four
layers, each carrying its book scope so neither is stated as a law of hockey.

**CRITICAL 1 — the document that DEFINES "the crease" and "the paint" for the corpus keyed the rule
to skates alone, three times** (`:259`, `:307`, `:321`): *"Keep your skates out of it"*, *"keep **both
feet** outside the crease"*, *"'Stay out of the paint' is about **where your skates are**"*.

> **USA Hockey 625(b)** (`usah.txt:4449-4453`) — a faceoff comes out *"any time an attacking player
> **stands, holds their stick, or skates through** the goal crease"*, and **Casebook Situation 10**:
> with a *"**stick and/or skates**"* in the crease and the goalkeeper in it, the Referee *"shall have
> no alternative but to disallow the goal."*

The other three books key theirs to the body. **So a net-front player doing exactly what this document
said — both feet outside the line, stick reaching in to jam a rebound — loses the goal.**

⚠️ **The corpus already knew.** Eight documents carry 625(b)'s stick clause verbatim;
`scanning_and_anticipation.md:339` states it outright. ⚠️⚠️ **And this document's OWN Sources trailer
at `:453` quoted Situation 10's stick limb while its body said the opposite** — the bibliography more
correct than the text.

**CRITICAL 2 — the one sentence on the page where a reader acting wrongly INJURES the other player
reached neither summary layer.** `:349`'s *"box them out with hips and back, and **never with a
two-handed shove on the shaft, which is cross-checking**"* sat ~1,400 characters into a glossary entry,
after an `Act on it —`, in a document with no facts layer. ⚠️ **The summary layer already carried two
of the three net-front penalty limbs** — goaltender contact at `:411`, picks and screens at `:409` —
**so the document had decided net-front penalties belong there, and dropped the one with an injury
attached.** Cross-checking is illegal in every classification, so this reaches the non-check adult and
women's players the document's body-checking caveats correctly exclude.

**MAJOR — a four-book rule framed as one book's peculiarity.** The returning-goalkeeper reversal was
written as a USA Hockey Casebook oddity. **NHL and IIHF 69.4 both carry it** — *"prevented from
returning to his crease area due to the deliberate actions of an attacking player"*. Repaired to match
`rink_map.md:195`'s already-verified wording **including its hedge** (*"may be penalized" rather than
must*), so the corpus does not overstate the limb.

### ⚠️ And my framing of WHY this document was exposed was wrong

I briefed the reviewer that the split had *"moved safety-bearing sentences out of documents where a
facts layer is mechanically enforced and into one where it is not"*, treating the absence as an
anomaly. **It is the specification.** `content_style_guide.md:749-754`: the facts-block rule *"applies
only to the 26 documents that teach how to play … **not the glossary**, not the rules primer, not the
six off-ice documents: they are reference or off-ice material, and imperatives would misrepresent
them."* **Measured: 12 of 38 documents carry no facts block**, including `rules_primer.md`,
`rink_map.md` and `uk_rules.md` — the three heaviest rules documents in the corpus.

**So the right question was never "should it have a facts layer" — it was "does its Common Mistakes and
Key Takeaways carry what a facts layer would have."** That is the test it failed, and asking the wrong
one nearly sent the reviewer to build a ~90-entry extraction layer the style guide forbids.

## The removal, and what it cost the spoken layer

The **eight** `## A Note on Language` sections were removed by **three agents on disjoint files**. Zero
headings remain; zero built pages carry one; `center.md:362`'s prose reference *"(see 'A Note on
Language')"* was fixed with them, which `check_links.py` structurally cannot see because it is a
reference to a heading, not a link.

⚠️ **But the sections were not pure deletions. Six documents lost ` ```facts ` lines — 29 removed
against 3 added — and no checker reports this**, because a facts block that shrinks is still a valid
facts block. `commit-gate` caught one instance by reading a hunk; **the census below is what found
the rest, and it is the only reason the two real defects were seen.**

**The layer test, applied to every removed line — candidates, then reading:**

| document | facts lines lost | definitions still reaching a listener |
|---|---|---|
| `winger.md` | 4 | **all preserved**, the agent moved high/low into body prose at `:31` |
| `center.md` | 5 | **all preserved**, moved into body prose at `:34`; the deleted `Action:` on swing-low was a duplicate — `Position:` lines still carry *"below the hash marks"* twice |
| `goaltender.md` | 6 | `Key: "Back door" means an unmarked opponent at the far post` **survives at facts :184** — the definition most at risk is intact |
| `switching_positions.md` | 0 | rename only |
| **`defender.md`** | **5** | ⚠️ **high/low is GONE FROM THE WHOLE DOCUMENT.** HEAD carried it twice — `facts:38` and body `:48`. The staged facts layer uses *high*/*low* **15 times** with no definition anywhere |
| **`forechecking_systems.md`** | **6** | ⚠️ **high/low AND strong/weak side GONE FROM THE WHOLE DOCUMENT.** HEAD carried both at `facts:36` and `:37`. **14 uses** remain, undefined |

⚠️ **This is the cross-agent contradiction the method exists to catch.** Two of the three agents
independently protected the definitions by moving them into body prose; the third did not, and each
agent's own file was internally consistent, so **nothing any single agent could have run would have
shown it.** It is visible only by diffing the three together afterwards.

⚠️ **And the replacement is a POINTER.** `defender.md:33` now reads *"The working vocabulary…"* with a
link to Language and Glossary. On the site that link works. **In the podcast it is a sentence pointing
at a page the listener cannot open**, on a document where *high* and *low* decide where a defenceman
stands.

⚠️ **And `check_pointers.py` does NOT report it — measured, 6 hits, neither document among them.**
That tool finds a spoken sentence pointing at a layer dropped *within the same document* — a Sources
trailer, a `## Notes on verification`, a dropped table. **A cross-document link is legitimate to it by
design, because this corpus also renders to a web page.** So the consolidation moved a definition from
a layer one tool checks into a form NO tool checks. An earlier draft of this record claimed the
opposite; the tool was run, and it does not cover this.

**Unresolved at the time of writing.** `goaltender.md`'s five-hole and six-hole now appear in the
facts layer only as *usages* — *"opens the six-hole"*, *"close the five-hole as you land"* — with the
definition gone. Whether that costs a listener anything is with `safety-reviewer`.

## ⚠️⚠️ THE COORDINATOR'S OWN CHECKS FAILED THE SAME WAY TWICE, AND BOTH REPORTED SUCCESS

Two corpus-wide checks were run by the coordinator to confirm the repairs. **Both passed. Both were
wrong, in the same way, and a reviewing agent caught each one.**

**Failure 1 — the cross-agent definition check.** After four agents restored the high/low definition
on disjoint files, the coordinator grepped for agreement with the pattern
`means toward the blue line|means closer to the blue|toward the blue line you are facing` and reported
**"No contradiction. All six definitions agree."**

⚠️ **`forechecking_systems.md:33` WAS IN THAT OUTPUT and does NOT agree.** It reads *"**High** means
closer to the blue line"* — matching the loose alternative — while the owner
(`language_and_glossary.md:25`) says *"closer to the blue line **you are facing**"*, and **that dropped
qualifier is the entire mechanism that makes the rule zone-independent.** The repair then went further
and framed the offensive-zone reading as a **flip**, when the owner's section exists to teach that it
does not flip. **The file under repair was the one file that disagreed, and the check cleared it.**

**Failure 2 — the deleted-facts restoration census.** Prompted by a reviewer's handover — *"extract
every deleted facts line and grep the owning file for whether the concept was restored at all"* — the
coordinator ran exactly that over all **35** deleted facts lines and reported **zero weak results.**

⚠️ **`forechecking_systems.md`'s `Action: Steer by shadowing the carrier; seal by arriving second…`
was restored NOWHERE, and the census passed it** — because it counted occurrences of the *words*, and
`seal*` appears **45 times** in that file. ⚠️ **Worse: those 45 uses carry TWO SENSES** — tactical
(F2 closes the escape route) and **physical boards contact** (*"seal the wall rather than the winger's
body"*, and `:454`'s `Never: Take "pinch on anything" as a licence to seal a winger against the wall`,
**a safety line voiced alone**). **The deleted line was the file's only disambiguator.** A count of 45
was the *reason* the concept needed a gloss, and the census read it as proof one existed.

### The shared defect, stated so it is not repeated

**Both checks tested for the PRESENCE OF A STRING and reported it as the PRESENCE OF A DEFINITION.**
A term that is heavily used and undefined scores *identically* to one that is defined — in fact it
scores **better**, because heavy use is what a frequency test rewards.

⚠️ **This is the coordinator running exactly the "grep, do not read" method the project forbids
everywhere else, while believing it was running a layer test.** The project's own rule already says it:
*"a layer test finds CANDIDATES; only READING decides."* Both checks stopped at candidates and reported
a verdict.

**Neither failure reached the corpus** — both were caught by the agents whose files they covered, which
is the parallel method working as designed. **But neither was caught by any tool, and a coordinator
check that reports success is exactly the thing nobody re-derives.**

## Verification state at the sixth gate attempt

**Build** 10:40:52 → 10:42:28, `EXIT=0`, **one** `check-links:` line, `dist/sw.js` present,
`[PNG cache: 203 reused, 0 rendered]`, **52 pages · 10,450 internal links**, 37 players against 37
episodes.

**All seven gates, exit codes captured individually:** `check_links` 0 · `check_facts` 0 (830 blocks,
**5,546** facts, up from 5,542 — the four added by the goaltender and red-line repairs. ⚠️ **This line said 5,545 and was one low: `commit-gate` re-derived it and I had copied my own earlier figure forward instead of re-running the tool. The same defect this record documents twice.**) · `check_absolutes`
0 · `check_geometry` 0 · `check_secrets` 0 · `check_counts` 0 · `check-arrivals` 0 (203 diagrams, 304
routes).

**Index converged:** `git diff --name-only` empty, **0 `MM`**, 52 files staged.

**The repairs verified on the BUILT pages, not the source** — crease stick limb ×2 and the
cross-checking Common Mistakes bullet ×3 on the Language page; high/low defined on `defender`,
`center`, `winger` and `forechecking_systems`; five-hole/six-hole on `goaltender`; heel/toe in
`passing_and_receiving`.

**Two worklists run that had not been, both prompted by an agent naming them against its own work:**

- `check_chunk_tails.py --prose` — an agent reported it had **lengthened three body paragraphs**,
  which is precisely the operation that moves chunk boundaries, and had not re-run this. ⚠️ **Checked:
  none of the new vocabulary text is chunk-terminal.** The two hits in those files are unrelated prose.
- ⚠️ **One facts hit WAS in repaired text and was read rather than filed:** `defender.md` chunk 001
  ends on the rewritten `Rule:` line. **It clears on the tool's own test** — the value carries its own
  limit in the same line (*"all four still make any deliberate part in the play past the centre red
  line a minor"*), and the following `Rule:` line's freezing restriction is additional, not corrective:
  **playing a dead rim is not freezing one.** Recorded as checked-and-cleared so the next pass does not
  re-derive it.
- `check_tables.py --near` — **3 dropped, 45 read aloud, 8 near a limit.** (The figure CLAUDE.md used
  to carry, 20 dropped against 26 read, was from the tool's introduction and the corpus has been
  repaired underneath it since; that passage now says to run the tool instead of quoting it.)

⚠️ **None of this is a review.** Every repair in the wave is new text, and two reviewers are reading
exactly that surface as this is written.

## The repairs' own repairs, reviewed — the seventh gate's blocking ground

`commit-gate` blocked a seventh time because the last round of repairs — those written **in response
to** the review wave — were themselves new text nobody had read. It was right, and it also blocked on a
**stale plan row of mine** that had already been answered and left ⬜. **A stale open row is not free:
an open, self-filed admission of unreviewed safety text is a hold whether or not it is current.**

**`rules-verifier`, on the five new rules claims — ALL FIVE CONFIRMED, verbatim, no findings.**
Editions stated: NHL 2025-2026; IIHF **2025/26 v1.1** (the corpus's British layer) plus the Situation
Handbook v1.1; USA Hockey 2025-29 + Casebook; Hockey Canada 2026-2028.

| claim | verdict |
|---|---|
| The red-line limb reaches **checking an opponent**, not just playing the puck | **Confirmed** — NHL 27.7 (`nhl_rules.txt:3440`), IIHF 27.6 (`:2627`), both *"(intentionally plays the puck **or checks an opponent**)"*. ⚠️ **And no book's test is in another's mouth:** USA Hockey 407(c) *"deliberately"* (`usah.txt:2777`), Hockey Canada 4.13(c) *"intentionally"* (`hc.txt:3662`), each correctly attributed |
| *"The rule text's one exception"* does not understate the rule | **Confirmed.** IIHF Situations **27.6** (*"the goal line is not considered to be in the restricted area"*) and **27.9** (*"the goalkeeper must **play** the puck to be penalized"*) are real and verbatim — **and the very next sentence in both documents discloses them by name** |
| Hockey Canada's awarded-goal threshold is the legal substitution | **Confirmed** — 4.12(b) *"despite the fact that the goaltender may still be physically on the ice"* (`hc.txt:3537`), Interpretation 4 verbatim |
| The post-icing rule across four books | **Confirmed** — NHL 81.4 three exceptions; IIHF 81.4 **four**, the extra being *"a Player with a broken skate"*; IIHF 82.1 the same ban with **three**; USA Hockey none, in the rule body, 636(f) **and** the Casebook's Rule 624 situations |
| *play* not *touch* in the trapezoid | **Confirmed** — NHL 27.8 and IIHF 27.7 both write *"shall not **play** the puck"*, and Situation 27.9 is the evidence for the distinction |

⚠️ **AND THE CLAIM I FLAGGED AS MOST DOUBTFUL HELD.** **Hockey Canada 6.7(d)(i)(3)** (`hc.txt:5095`)
permits a change *"When a penalty or penalties have been assessed to **either team**"* — **with no
on-ice-strength condition** — where **NHL 81.4** writes *"a penalty … **which affects the on-ice
strength** of either team"*. **Hockey Canada's exception is textually wider than the NHL's.**

⚠️ **AND I WROTE, IN THIS RECORD, THAT *"no document in this corpus said so before this change"*. THAT IS
FALSE, AND IT IS THE FIFTH CLAIM I RELAYED TODAY WITHOUT CHECKING.** The **owner already carried it**:
`rules_primer.md:350` gives Hockey Canada's carve-outs as *"replacing a goaltender pulled for an extra
attacker, replacing an injured player, and **any stoppage where a penalty was assessed**"* — unqualified —
while its own comparison table at `:854` gives the NHL's as a *"**strength-changing** penalty"*. **The
distinction was already drawn, by the owner, in two places in one document.** What is true is narrower and
duller: `forechecking_systems.md` did not carry it and now does, so a dependant has caught up with its owner. `hc.txt:4510` (Rule 6.1(f)) independently repeats the
U18AAA/Junior/optional-Senior scope.

**The IIHF 81.4-vs-82.1 conflict was quoted and deliberately NOT resolved**, per
`content_style_guide.md:104-108`. Round 44 manufactured a divergence by ranking this kind of thing.

**Declared gap:** the verifier did **not** cross-check `iihf_rules_2026-27.txt` for silent drift on
27.6, 27.7, 27.8, 81.4 or 82.1. The corpus's IIHF layer is deliberately 2025/26 for the British reader,
so this is a coverage limit rather than a suspected defect.

**`safety-reviewer`, on the same six new passages — NO CRITICAL, NO MAJOR, NO MINOR.** Its direct
answer to the question put to it: *"none of the new text in the six flagged areas puts a reader into a
penalty, a collision, or an injury they would not otherwise have met."*

What it checked, and what makes the clean result worth something:

- **The new contact restriction does NOT generalise.** Every instance is scoped to *"beyond the centre
  red line"*, and the surrounding prose contrasts it with what the goaltender **may** do inside the
  trapezoid and the privileged area. Checked at all four layers, including that `goaltender.md:544`'s
  blockquote **is** voiced — blockquotes are converted to speech, not dropped.
- **The *play*-not-*touch* repair does not swing the other way.** The facts blocks and body still state
  that a goaltender who **plays** it outside the trapezoid takes the minor, and a sibling `Risk:` fact
  already covers the adjacent hazard — *"skate at a goalkeeper who has legally frozen the puck outside
  their crease and you arrive into the one player you may not finish a check on."* **Both directions
  covered.**
- **The Hockey Canada category limit reaches the reader** in the facts block, the body table, the
  blockquote and the Key Takeaways — with no surviving bare *"cannot change lines"*.
- **The `seal` gloss makes the contact sense conditional, not routine**: *"whether you may do that at
  all is a question for your rulebook rather than your coach."*

⚠️ **Two read-aloud claims were RE-DERIVED IN THE RENDERER rather than believed.** The repairing agent
had self-reported that the Screen entry no longer ends on the permissive half; the reviewer ran
`md_to_speech.py` itself and found Hockey Canada's *"a penalty may not be necessary"* and its correction
— *"it is not a licence to put your stick on a player who is facing away from you"* — **in the same
chunk (029)**, the correction last. And `shooting.md`'s qualification sits **in the same paragraph** as
the superlative it qualifies (chunk 039), **not in a lead-in that could chunk separately** — which was
the specific way that repair could have failed a listener while satisfying a reader.

**Declared gaps, both real:** the reviewer read **five of the 52 changed files**, and neither it nor
the rules verifier was asked to run a from-scratch D11 omission pass over those five documents' full
bodies. Neither cross-checked the **2026/27 IIHF edition** for silent drift.

## ⚠️ What this change could not have found

- **286 of the new document's 455 lines are verbatim moves.** ⚠️ **A verbatim move carries its errors
  with it while looking to every reviewer like text already cleared.**
- **Nobody has heard any of it.** Every *"reads correctly alone"* judgement was made on SSML, on paper.
  The counterweight sentences are voiced alone with a 300 ms break either side.
- **Provenance was not attacked** — only established that no citation was *added*. It is the only defect
  class this corpus's body-verified citations have ever produced.
- ⚠️ **The hybrid-icing dates ship hedged in a layer the listener never hears.** The disclosure is in
  the Sources trailer, which is **dropped from narration by design** — so a listener gets the bare
  dates. The convention is the corpus's, not this change's, but it is a hedge nobody hears.
- **No coach has seen any of it**, and no reader who did not already know the answer.
