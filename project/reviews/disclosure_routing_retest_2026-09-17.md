# Disclosure routing re-test — 17 September 2026

**Task:** Workstream 2B's standing open row (`OPEN_ITEMS.md`, "Re-test the seventeen
HOLDS for the ROUTING shape only") asks for the 17-of-18 facts-layer disclosures
that HELD under a primary-text search (round 81, 16 September) to be re-attacked
by the *other* method — checking whether `sources/README.md` or a sibling
`content/` document has already answered the question the disclosure claims is
unanswerable. That routing check, not a fresh search, is what caught the one
false disclosure this corpus has found to date.

**Scope of this pass: read-only.** No file under `content/` was edited. Findings
below are reported for a separate fix-and-review pair.

---

## 0. The list of 18 does not exist anywhere in the repository, and I could not fully reconstruct it

I searched every file matching `SEVENTEEN|17 HELD|18 facts-layer` across
`project/`. The only source is
[`round_81_the_flattened_parallel_2026-09-16.md`](round_81_the_flattened_parallel_2026-09-16.md)
§7 and §12, and `OPEN_ITEMS.md`'s own summary of it (lines 751–825). **Neither
document enumerates all 18 by file:line.** Round 81 narrates the result and
names examples, but its own text is explicit that it is reporting a class, not
a manifest: *"Most held verbatim and positionally"* with no per-item ledger.

**What is individually named, and what I could match to an exact `content/`
location by reading the surrounding prose:**

| # | Disclosure (as characterised in round 81) | Located at | Verdict in round 81 |
|---|---|---|---|
| 1 | CRT6 helmet-removal instruction carries no exception | `content/technique/body_contact_and_battles.md:823` | HELD (only after `pdftoppm`) |
| 2 | "A skate is the blade only" — the 2025/26 IIHF book carries no such definition | `content/systems/zone_entries.md:138` | HELD (only after positional reading of both editions) |
| 3 | IIHF Situation 10.26 has no counterpart in the 2025/26 Situation Handbook | `content/positions/goaltender.md:1248` | HELD (only after positional reading of both editions) |
| — | "No book states a body-checking age" in British men's/mixed/junior hockey | `content/positions/center.md:613` (facts) | **FALSE** — IHUK's Rules of Competition does state one. Round 81 records this as fixed. |

That is 4 of 18 identifiable by name (3 HELD + the 1 FALSE). **The other 14
are not named in any surviving review record**, and I did not attempt to
guess at them from the current `check_disclosures.py --layer facts` output,
because that tool's output today (69 lines, run fresh this session) is a
different population from whatever 18 an agent selected on 16 September —
the corpus has had at least three more rounds of edits since, including
fixes that removed some facts-layer disclosures from the tool's pattern
match entirely (the corrected form of finding #4 above no longer matches
`check_disclosures.py`'s `no-X-exists` patterns, which is presumably most of
why its "rulebook" count moved from ~30 on 16 September to 29 today).

**So: I could not complete a routing check of "the seventeen" as a named
set.** I did the routing check on the three I could locate with certainty,
did a routing check on the fix applied to the fourth (the one already-known
FALSE one), and — because three items is thin coverage for the task as
framed — added one further opportunistic routing check on a disclosure that
recurs at high frequency across the corpus (the KHL-trapezoid hedge), on the
theory that a disclosure repeated in eleven documents is exactly the shape
most likely to have been in the original 18's population. That is reported
separately below and flagged as outside the named 17.

---

## 1. The three identifiable HELD disclosures — routing check: all HOLD, and two are independently corroborated in `sources/README.md` itself

### 1a. CRT6 helmet instruction — `content/technique/body_contact_and_battles.md:823`

Exact text:

> `Never: Take the helmet off — CRT6 writes that one flat, and unlike its instruction about moving the player it carries no exception`

**Routing check against `sources/README.md`:** the file has an entire section,
`## ✅ CRT6 IS NOW VERIFIED — read visually from the PDF, because no extraction
can reach it` (README lines 871–895), that independently confirms this exact
claim by rendering the PDF with `pdftoppm` and reading it: *"The one that
matters most: 'Do not remove helmet (if present) or other equipment.' VERBATIM,
AND IT CARRIES NO EXCEPTION. The corpus insists on this and the corpus is
right."* **No contradiction. The routing check finds active corroboration,
not a gap.**

**Routing check against siblings:** `content/off-the-ice/conditioning_and_recovery.md:255`
carries the same fact in the same terms — *"CRT6 attaches nothing at all to
the helmet, and neither should you"* — and its own Sources trailer at line 648
quotes the "Remember" box in full with the same reading. No sibling states or
implies an exception. **HOLDS.**

### 1b. Skate-definition (2025/26 IIHF silence) — `content/systems/zone_entries.md:138`

Exact text:

> `Rule: A "skate" is the blade only, so an overhanging boot is irrelevant — NHL Rule 83.1 since 2025-26, and the IIHF's 2026/27 book adds the same sentence to its own Rule 83.1; the 2025/26 IIHF book carries no such definition`

**Routing check against `sources/README.md`:** line 541 records exactly this,
independently: *"THE 2026/27 BOOK CHANGED OFFSIDE... Rule 83.1 gains two
sentences the 2025/26 edition does not have... 'For the purposes of this
rule, a "skate" is to be considered the blade of the skate only'... Whole-book
flattened counts: 'blade of the skate' 0 in v1.1, 1 in 2026/27."* This is a
positive control on the negative (a whole-book flattened count, not a bare
zero), which is exactly the technique round 81 said was needed to make this
disclosure safe to hold. **No contradiction. HOLDS, and the disclosure's own
scoping is already as tight as the source record.**

**Routing check against siblings:** the same document's own facts block
(lines 140–142) already carries the parallel caveat about which edition
Britain plays under being unsettled, so the disclosure is not read in
isolation from that context. No other `content/` document states or implies
the 2025/26 book *does* define "skate." **HOLDS.**

### 1c. IIHF Situation 10.26 has no 2025/26 counterpart — `content/positions/goaltender.md:1248`

Exact text:

> `Rule: A goal is disallowed if an attacker deliberately propels a lost or broken stick, glove or other object at the puck to direct it into the net — new in the IIHF Situation Handbook 2026/27 at Situation 10.26, with no counterpart in the 2025/26 book Britain plays`

**Routing check against `sources/README.md`:** line 27's entry for
`iihf_situations_2026-27.txt` independently confirms this — *"five documents
already quote this edition accurately — `goaltender.md` (new Situation
10.26)"* — following a full situation-by-situation diff (638 in v1.1, 644 in
2026/27) rather than a spot check. **No contradiction. HOLDS.**

**Routing check against siblings:** `goaltender.md`'s own Sources trailer
(the long paragraph culminating at line ~1433 onward) states explicitly that
*"Situation 10.26 has no counterpart in the 2025/26 Handbook, whose Rule 10
situations end at 10.25"* — internally consistent with the facts-layer claim,
and no other document in the corpus cites Situation 10.26 in a way that
implies it existed earlier. **HOLDS.**

**Summary of §1: all three routing-checkable HELD disclosures I could locate
survive the routing attack. In two of the three cases (1a, 1b) `sources/README.md`
does not merely fail to contradict the disclosure — it contains an explicit,
independently-derived confirmation of it, which is stronger evidence than "found
nothing that contradicts."**

---

## 2. The one known FALSE disclosure's fix is INCOMPLETE — two more unrepaired copies found, same document, same false form

This is not one of the 17 HELD items — it is the one round 81 found FALSE and
reported fixed. I checked the fix's completeness using the exact routing
method (comparing sections of the same document, and the same corpus, against
each other) because round 81 §11 already records that this specific
propagation was interrupted once by a rate limit and repaired only partially
by the coordinator, which made it the most likely place to find a second
gap.

**Round 81 and `OPEN_ITEMS.md` both record the fix as applied** at
`center.md:613` (facts) and its adjoining body sentence, reading now: *"the
age comes from IHUK's Rules of Competition, not either rule book."*
Confirmed present and correctly scoped:

- `content/positions/center.md:626` — *"In British men's, mixed and junior
  hockey the age comes from IHUK's Rules of Competition, not either rule
  book — get yours in writing"*
- `content/positions/center.md:634` — *"In British men's, mixed and junior
  hockey **neither rule book** states a body-checking age: the IIHF Rule Book
  sets none and the In-House Rules add none — but IHUK publishes one for
  every league it runs, in its Rules of Competition, not in either rule
  book."* This is the correctly scoped form and it is explicit that IHUK
  *does* publish an answer.

**But the same document still carries the unscoped false form twice more,
untouched by any repair:**

- **`content/positions/center.md:665`** (Common Mistakes list): *"The **IIHF**
  book — the one a British reader plays under — carries no classification
  ban on body checking, **which means British men's, mixed and junior hockey
  has no published checking age at all.** Ask your league and get your
  division's contact status in writing rather than reading that silence as
  permission."*
- **`content/positions/center.md:735`** (a numbered coaching point): *"Neither
  of those is a British reader's book, and the IIHF's answer is a different
  one rather than no answer: it writes no classification ban — **so in
  British men's, mixed and junior hockey no book states a checking age at
  all**, and the answer is your league's, in writing, rather than the
  rulebook's."*

Both make the same move that round 81 flagged as false at `:613` — sliding
from "neither *rule book* states it" (true) to "no book states it" / "no
published checking age at all" (false, because IHUK's Rules of Competition is
a published document that does state one, per the corpus's own `:634` two
lines earlier in the same file, and per round 81's own refuting citations:
`ihuk_junior_roc.txt`'s format table and `ihuk_u10_roc.txt`'s explicit U10
bar). **This is read aloud twice**, in a document whose own Common Mistakes
and body prose elsewhere state the correct scoped version — the exact
summary-layer contradiction pattern this project's content-reviewer role
exists to catch (a body correction that stopped before reaching every
occurrence).

I checked the three other documents round 81 named as touched by the same
CARHA/checking-age wave (`goaltender.md`, `defender.md`, `winger.md`,
`switching_positions.md`) for the same phrase family (`no book states a`,
`no published checking age`, `checking age at all`) and found no further
copies — this defect appears confined to `center.md`.

**This should be routed to a fix-and-review pair, not edited by this
report.** The correct replacement pattern already exists twice in the same
file (`:626`, `:634`) and should be re-derived from there rather than pasted,
per this project's standing rule that a brief's proposed wording is a sketch,
not a patch, and that the agent doing the fix should read the surrounding
prose itself.

---

## 3. Opportunistic routing check on a high-frequency disclosure not confirmed to be in the original 18

The KHL-trapezoid hedge — *"the KHL reportedly too, but unverified here"* (or
close variants) — recurs at **eleven** sites: `rink_map.md:631`,
`puck_support_and_spacing.md:403`, `defender.md:135`, `goaltender.md:537`,
`forechecking_systems.md:959`, `special_teams.md:347,1005,1018`,
`zone_entries.md:675`, `breakouts.md:905,996`, `neutral_zone_systems.md:504`,
`faceoffs.md:889`. A claim repeated this many times is exactly the shape
non-negotiable 6 in the style guide asks reviewers to distrust — folklore by
repetition — so I ran the routing check on it even though I cannot confirm
it was part of the 16 September batch.

**Against `sources/README.md`:** no KHL entry exists anywhere in the file
(`grep -n "KHL"` returns nothing), and no KHL rulebook is listed in the
sources table. The disclosure's "unverified here" is accurate — there is
nothing on disk to verify it against, and the silence in README is not a
routing failure because the document never claims otherwise.

**Against siblings:** all eleven sites use the same hedge, worded
consistently (never claiming the KHL definitely has or does not have a
trapezoid), and no other document in the corpus asserts a KHL trapezoid
ruling one way or the other. **HOLDS**, and its corpus-wide consistency is
itself evidence against the "folklore drift" pattern non-negotiable 6 warns
about — this is a disclosure that has been propagated correctly to every
site that needed it, not a claim mutating as it spreads.

---

## 4. What this method could not have found

- **14 of the original 18 disclosures could not be identified from any
  written record**, so the routing check the task asked for was run on 3
  of them, not 17. This is the dominant limitation of this report. The
  next round should either locate the original tester's raw output (if it
  survives in a scratchpad or session log outside this repository) or
  accept that the 18 cannot be individually re-derived and instead re-run
  `check_disclosures.py --layer facts` fresh and route-check its current
  output as a new population, explicitly not claiming it is the same 17.
- **I did not re-run a primary-source search on any of the three** — this
  pass is deliberately the *other* method (routing against what is already
  on disk in this repository), per the task brief, so it cannot catch a
  disclosure that is false in a way neither `sources/README.md` nor any
  sibling document happens to mention. A disclosure could be false and
  silent everywhere in this repository; routing cannot see that shape,
  only a primary-source re-search can.
- **The KHL check (§3) is opportunistic and outside the named 17.** I do
  not know whether it was part of the 16 September test, and I am not
  claiming it as evidence about that specific batch — only as a second,
  independently useful data point about the routing method applied to a
  high-repetition disclosure.
- **I did not check the ~14 "no-X-exists" literature-class disclosures**
  tested separately in round 81 §12 (11-of-11 held via web search) for the
  routing shape at all — that population is disjoint from the rulebook-class
  18 this task named, and OPEN_ITEMS.md already flags 12+ of that class as
  genuinely untested by any method.
- **The tree was live during this session** (another agent's unrelated
  quote-drift commit landed in `body_contact_and_battles.md` while I was
  reading it — confirmed by diff to be a different section, Hockey Canada
  10.4(e) wording, not touching anything I cited). I did not re-check every
  file a second time after that commit; only the one file it touched was
  diffed for safety.
- **No mechanical tool run in this pass can find the `center.md` gap
  itself** — `check_disclosures.py`'s patterns matched the *original* false
  form as `no-X-exists`, but I found `:665` and `:735` by reading the
  document's Common Mistakes and body sections directly, side by side with
  the already-fixed `:634`, which is exactly the "layer test" and
  "cross-section read" this project's method notes call for and no grep
  performs on its own.
