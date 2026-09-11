# Round 75 — a distance nobody could source, and three claims that widened while being shortened

**11 September 2026.** Dispatched immediately after `b4e65a2` cut the plan from 17,485 lines to 277. Work on
the owner's two standing priorities: **diagram coverage** and **the rules-versus-gameplay ratio**.

---

# The thread

⚠️ **THE TWO PRIORITIES ARE ONE PROBLEM, and the census is what showed it.** 1,528 teaching sections, **247
carry a diagram (16%)**. But the biggest undrawn sections are *Body fouls*, *What your book allows when you
get there*, *What actually gets called*, *The carve-outs and how far they reach in each book*. **They are
undrawn because a list of what four books say is not a picture.** So the work splits: spatial sections get
drawn, rules surveys get **cut**, and what survives gets a picture then.

## The finding: folklore, not a wording problem

One manoeuvre — a point player sliding sideways along the offensive blue line — was taught **seven times
across three documents in three magnitudes and three units**: *one or two steps*, *two or three strides*,
*three metres*, *two or three metres*. ⚠️ **Two of those are in the same file, in facts lines that are each
voiced alone with a 300 ms break either side.**

⚠️ **NO SOURCE FIXES ANY OF IT.** Zero hits across all 60 files in `sources/`. The IIHF coach-development
material's two candidate passages give no distance. **Two of the documents' own cited articles were FETCHED
and give none either** — one naming drills called *"Blue Line Shuffles"* and *"Lateral Blue Line Series"*
without a figure anywhere on the page.

**All seven now carry a stop condition instead of a count**, labelled as craft. ⚠️ **Two turned out to be
DIFFERENT JOBS** — changing passing lanes against a box, and beating one shot-blocker — **so they get
different stop conditions, which is what makes them agree.** ⚠️ **The site layer had already drawn that
distinction**: `pp-131`'s caption states no distance and `shooting-lane-and-the-step` carried the owner's.
**The prose was the only layer carrying metres.**

⚠️ **`commit-gate` ruled the trade an improvement, not a lateral move**, against the repairing agent's own
harsher self-assessment: *"a stop condition is not a weaker measurement, it is a different kind of claim: an
observable cue, labelled as craft, that a reader can falsify in one shift."* **The failure modes are
asymmetric** — a fabricated number propagated to seven sites in three magnitudes; a stop condition cannot go
stale that way.

**The repair is a symptom fix. The row is the folklore:** a technique taught in three documents with no
source anywhere, and no style-guide row owning **the absence** of a number.

## ⚠️ THREE CLAIMS WIDENED WHILE BEING SHORTENED — and the safety pass missed all three

`commit-gate` caught them. Its diagnosis is the durable sentence: ***"a restructure rewrote a rule clause
from memory of what it had said."***

1. ⚠️ **A three-book claim became "every book".** *"Every book protects the returning goalkeeper, and
   impeding one can cost your team the goal."* **Hockey Canada and CARHA have NO returning-goalkeeper clause
   at all** — verified with nine grep patterns over flattened copies **plus a positive control**. Their
   protection is contact-based. And of the three that do have it, **NHL and IIHF 69.4 say only *"may be
   penalized"* and are SILENT ON THE GOAL** — only USA Hockey's Casebook 625 Situation 9 supports the
   conjunction. ⚠️ **`rules_primer.md:641` had independently got this exactly right all along.**
2. **A four-book universal left carrying one book's number.** The claim was TRUE across all five books, but
   had shed NHL 71.1's own closing qualifier (*"in all other situations not covered in the above, a minor
   penalty may result"*) and every per-book citation. ⚠️ **`"no time penalty assessed"` had vanished from
   `content/` entirely.** Repaired with all five named — and **the one genuinely weak link DISCLOSED rather
   than smoothed**: Hockey Canada never writes the phrase, so its half rests on what 5.3(a)(x) and 6.3(c)(v)
   do write plus an absence.
3. ⚠️⚠️ **A SAFETY REVIEWER'S OWN FIX INTRODUCED THE THIRD.** Its replacement scope note asserted the 2026/27
   book was read for **every** cross-edition claim — **broader than the enumeration it replaced, and
   unverifiable by anyone.** A repair to a false disclosure produced a wider one.

   **The repair did not restore the old list, because the old list was wrong too.** An audit found the
   document carried **two disagreeing enumerations** (14 rules in one place, 11 in another) and that the body
   claimed **four more rules and three Situations appearing in NEITHER**. All seven were then read in both
   IIHF editions and found identical. The disclosure is now checkable claim by claim.

## ⚠️ THE COORDINATOR APPROVED A CHANGE THAT WAS AN OWN-GOAL

A caption said *"All four books are set out **earlier in this document**"* — true in its only host, and it
would have been false in any borrow. It was changed to name the document. ⚠️ **`commit-gate` rendered it and
found the change made it WRONG where it is actually heard:** `dz-collapse-corner` is placed **only** in its
owner, and **an owner's render carries no *"from …"* provenance clause** — so a listener of Defensive Zone
Coverage would have heard *"All four books are set out in Defensive Zone Coverage."*

⚠️ **The change was borrow-proofing for a borrow that was DECLINED in the same round.** Reverted.
**A caption's wording must be true where it is HEARD, not where it might one day be placed.**

---

# What the instruments did

| instrument | what happened |
|---|---|
| `check_absolutes.py` | ⚠️ **refused to certify the caption layer** (exit 2) on every run while `diagrams.json` was stale against three edited `.mjs`. **Third round running in which this tool behaved better than its users.** |
| `check_facts.py` | **rejected a repair as a 9th coaching fact.** The agent **relabelled it `Rule:` — which it genuinely was — rather than trimming the caveat to fit.** |
| `check_diagram_quotes.py` | ⚠️ **structurally cannot catch the caption defect.** It checks quoted spans **in comments** — 1,551 of them — and the claim was **unquoted prose in a caption body.** Nothing mechanical was ever going to find it. |
| the renderer | ⚠️ **caught four defects no reading found** — a caption voicing a rule for the fourth time in one minute; a gap ladder already voiced twice in the same chunk; a caption crossing a voice boundary; and **two accounts of one instruction in a single breath group.** |
| `commit-gate` | **blocked, and found three rule defects a `safety-reviewer` pass had missed.** |

## `describe` — the layer a blind reader depends on

⚠️ **"The fix reached the comment and stopped before the string a listener hears." Found TWICE in one
module.** `oz-low-to-high` said **ten feet** where the geometry draws **fourteen**;
`oz-rotation-one-pass-later` said **five feet off the boards** where the player is **nine**. **Both modules
had the correction already written in a comment beside the stale string.**

⚠️ **THE REPAIR WAS BETTER THAN THE SPECIFICATION.** The brief said make it say fourteen. The agent refused:
**no layer of the owner fixes a distance**, so fourteen is illustrative, and a flat *"fourteen feet"* would
have been **an unhedged measurement in the one layer that reaches a blind reader.** ⚠️ **If the owner fixes
no distance, the `describe` states none.**

---

# Coverage — every file, and who checked it

| file | what changed | independent pass |
|---|---|---|
| `content/off-the-ice/team_play_and_culture.md` | rules density 9.2→~4 /1k; two widened claims repaired | `safety-reviewer`, then `commit-gate`, then `rules-verifier` |
| `content/systems/faceoffs.md` | repetition deduplicated; scope disclosure rebuilt | `safety-reviewer`, `commit-gate`, `rules-verifier` |
| `content/technique/shooting.md` | count demoted out of the instruction | `content-reviewer` (owner ruling) |
| `content/systems/offensive_zone_play.md` | walk-the-line repair; two borrows placed | `content-reviewer`, `diagram-reviewer` |
| `content/systems/special_teams.md` | two jobs separated, both counts removed | `content-reviewer` |
| `content/hockey-iq/time_and_space.md` | two borrows placed, two rejected | `diagram-reviewer` |
| `content/systems/neutral_zone_systems.md` | one borrow placed | `diagram-reviewer` |
| `content/hockey-iq/scanning_and_anticipation.md` | one borrow placed | `diagram-reviewer` |
| `site/src/diagrams/offensive_zone_play.mjs` | two `describe` repairs, comment retractions | `site-reviewer` against the BUILT SVG; `commit-gate` re-derived the geometry from `rink.json` on its second pass — ⚠️ **this row originally claimed that re-derivation before it had happened. The gate said so itself.** |
| `site/src/diagrams/shooting.mjs` | caption aligned to owner; comment retraction | `diagram-reviewer` |
| `site/src/data/diagrams.json` | build product | `commit-gate` string-compared all three modules |
| `project/plans/OPEN_ITEMS.md` · this record · the triage findings | coordinator | — |

## Dimensions

**Numbered against `review_process.md`'s own table** — ⚠️ **an earlier record mislabelled two and asserted
D5 provenance was checked while its own prose denied it.**

**Checked:** **D1** rules accuracy · **D2** exceptions · **D3** rule-set divergence — the round's centre of
gravity · **D4** citation integrity · **D6** negative existence claims — *"no source fixes this distance"*
attacked over 60 files and two fetched articles · **D7** the cardinal rule · **D8** numeric ownership ·
**D9** the summary layer · **D10** the facts layer, every new value rendered and read standalone · **D11**
reader safety · **D12** read-aloud integrity — **four defects found this way and by no other means** ·
**D14** structure and cross-links.

⚠️ **OUT OF SCOPE AND THEREFORE NOT CLAIMED: D5 PROVENANCE** — no external citation was refetched except the
two the walk-the-line search fetched; every other URL rests on `link_baseline.tsv` as it stood. **D13
folklore is DECLARED OPEN, not checked** — the walk-the-line finding IS a folklore instance and the corpus
has not been swept for siblings. **D15 — the rendered site. Run, and recorded here rather than asserted.**

---

# D15 — the rendered site

**Run 11 September 2026 on the 16:17 build**, by `site-reviewer`. ⚠️ **Recorded here because the first
version of this record said only *"D15 — see below"* and there was no below — `commit-gate` blocked on it:
*"a coordinator's account of a reviewer is not the reviewer."***

**Engine:** CDP-driven **headless Chrome 152**. ⚠️ **The Chrome extension refused loopback for the seventh
and eighth time today** (*"Could not verify this site's safety category"*), so this is not the extension's
Chrome and font metrics may differ slightly.

**Scope:** `/technique/shooting/` and `/systems/offensive_zone_play/` in all four cells (390×844 and
1440×900, light and dark); the other six changed pages at 390 light, 390 dark, 320 and 1440 light; plus
`rules_primer`, `/search/`, `/404`, `/` and the sitemap.

**No critical.**

**The question only a browser could settle.** The rewritten `shooting-lane-and-the-step` caption carries
**two em dashes inside one clause**, and the agent that wrote it said it could not tell whether they read as
pauses or a stumble. **They read as pauses.** At 1440 both fall on the same rendered line; at 390 they are
one line apart but still read as a pair, *"because the enclosed clause is a self-contained imperative and the
closing dash is followed by `so`, which resumes the main clause — the reader is never left hunting for the
other half."* Identical in dark theme.

**Both `describe` repairs verified against the BUILT SVG, not the source.** F2's marker at `y −33.5`, boards
at `±42.5`, half-wall at `−38.5` — so *"nine feet off the boards, five inside it"* is exact and the old
*"five feet off the boards"* was wrong. `oz-low-to-high`'s route runs (25,−20)→(25,−6), stopping six feet
short of centre ice, and the new string correctly **states no distance**.

**Measured:** 4,052 source lines of ≥6 words checked against the rendered HTML — **4,051 present**; the one
miss is pre-existing and byte-identical at HEAD (a gloss in a `Related:` line that the header component
discards — the only such line in the corpus). Facts-block counts match source exactly on all eight pages,
**zero leaked into `<pre>`**. **5,543 internal anchors, 0 broken.** No horizontal body scroll at 320, 390 or
1440. List numbering unbroken where a diagram sits between a paragraph and an ordered list. **Zero console
errors, zero off-origin requests.** AA contrast in both themes — captions, the smallest text at 14.4px and
this round's subject, at **6.20:1 light / 7.82:1 dark**. No theme flash under a throttled screencast.

⚠️ **IT REFUTED THE BRIEF THREE TIMES, AND ITSELF ONCE.** The zero-headroom table is at
`rules_primer.md:753`, **not** in `faceoffs.md`. The caption is **45th of 198**, not among the longest.
And **it retracted its own first character-delta measurement** after finding an encoding bug in its script
that mangled the em dashes — the delta is **zero**.

**What it could not reach:** any browser but headless Chromium, real devices, a real screen reader — so
whether *"five feet inside it, nine feet off the boards"*, two reference frames in one clause with *"it"*
doing double duty, is **comprehensible when heard** rather than merely correct is the one thing it flagged
and could not settle. The production CloudFront rewrite. Audio playback — `site/public/audio/` is gitignored
and deployed separately, so every player shows `0:00 / 0:00` locally.

---

# What this round could not have found

**Whether the stop conditions are TRUE.** A fabricated precision was replaced with **unsourced craft that is
honestly labelled and still unsourced**. In the repairing agent's words: *"no search I ran could have told me
it was wrong rather than merely unsupported."*

**Whether any of the 247 existing diagram placements is wrong.** The triage checked what is missing, never
whether what is there belongs. Several sit under headings that do not obviously match.

**~1,400 of the 1,528 sections were inferred, not examined** — and ⚠️ **the shortlist scorer rewards rink
vocabulary and punishes rule citations, so it is BLIND to a spatial section written in plain language.**

**166 distance claims sit in `describe` strings across 27 modules and only two modules have been checked.**
A probe narrows it to **36 sites across 17 modules** carrying a comment that records a numeric correction —
the shape that was stale twice.

**And the standing one:** every page could render perfectly and no figure in this corpus would be one word
truer for it.
