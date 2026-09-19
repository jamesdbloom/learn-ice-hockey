# The boards limb, the British red flags, and the censuses that could not see them

**19 September 2026.** Twelve repair agents, four reviewers, one cross-file read, one commit gate.
**30 files staged across `content/`, `site/`, `project/`, `scripts/` and `sources/`; `git diff --name-only`
empty, so the index matches the tree.** ⚠️ **No insertion or deletion totals are given here — see §0 for
why this record cannot state its own size.** ⚠️ **NOT COMMITTED — the gate returned BLOCK. See §8.**

## 0. What is staged — generated from `git diff --cached --numstat`, not from memory

⚠️ **An earlier draft of this section was written from memory and went stale the moment the post-BLOCK
repairs landed. The commit gate caught it a second time, under a line claiming it was fixed:** it said
29 files and 3,003 insertions against an actual 30 and 4,294, said 14 content documents against 15, and
**omitted `content/technique/skating.md` entirely** — a file whose change rewrites a spinal-injury
mechanism in two layers. ⚠️ **A review record is a claim about a diff, and it goes stale exactly the way
a count does. This section is now generated from the diff itself.**

⚠️ **NO TOTALS ARE WRITTEN HERE, AND NONE EVER SHOULD BE.** **They were wrong three times — 29/3,003,
then 4,294/157, then 4,294/157 again after later edits landed — each time under a heading asserting
they were current.** ⚠️ **This record is PART OF THE DIFF IT DESCRIBES, so any total in it invalidates
itself the moment it is written: a fixed-point problem, not a carelessness problem.**
**Run `git diff --cached --numstat` — it prints them, correctly, every time.**

**What IS stable and load-bearing is the FILE LIST below: 15 `content/`, 8 `site/`, 4 `project/`,
2 `scripts/`, 1 `sources/`.** ⚠️ **And the shape: `project/plans/OPEN_ITEMS.md` is the overwhelming
majority of the insertions. THE ACTUAL CONTENT CHANGE IS A FEW HUNDRED LINES ACROSS 15 DOCUMENTS** —
one propagation wave plus a two-list concussion reconciliation. *"That is a normal commit for this
repository, and I would not block it for size."*

### `content/` — 15 documents, +203 −115

| file | + | − |
|---|---|---|
| `content/foundation/on_ice_communication.md` | +5 | −5 |
| `content/foundation/rules_primer.md` | +5 | −5 |
| `content/foundation/uk_rules.md` | +38 | −7 |
| `content/hockey-iq/puck_support_and_spacing.md` | +6 | −5 |
| `content/hockey-iq/risk_management.md` | +4 | −3 |
| `content/hockey-iq/scanning_and_anticipation.md` | +4 | −4 |
| `content/off-the-ice/conditioning_and_recovery.md` | +26 | −12 |
| `content/positions/defender.md` | +4 | −4 |
| `content/positions/switching_positions.md` | +5 | −5 |
| `content/positions/winger.md` | +8 | −8 |
| `content/systems/breakouts.md` | +11 | −9 |
| `content/technique/body_contact_and_battles.md` | +66 | −30 |
| `content/technique/passing_and_receiving.md` | +3 | −2 |
| `content/technique/puck_handling.md` | +16 | −14 |
| `content/technique/skating.md` | +2 | −2 |

### `site/` — 8 files: SEVEN diagram modules plus the rebuilt build product

| file | + | − |
|---|---|---|
| `site/src/data/diagrams.json` | +11 | −11 |
| `site/src/diagrams/body_contact_and_battles.mjs` | +27 | −3 |
| `site/src/diagrams/forechecking_systems.mjs` | +31 | −5 |
| `site/src/diagrams/offensive_zone_play.mjs` | +22 | −3 |
| `site/src/diagrams/positions.mjs` | +29 | −4 |
| `site/src/diagrams/rules_primer.mjs` | +22 | −3 |
| `site/src/diagrams/scanning_and_anticipation.mjs` | +15 | −1 |
| `site/src/diagrams/winger.mjs` | +26 | −2 |

**Eleven caption entries changed in `diagrams.json`** — enumerated by diffing against HEAD, not counted
by hand: `angle-into-the-corner`, `forecheck-pinch`, `forecheck-press`, `icing-the-race-and-the-dot`,
`oz-cycle-reverse`, `oz-cycle-rim`, `scan-before-a-wall-reception`, `winger-arriving-at-the-line`,
`winger-corner-and-the-empty-point`, `winger-dz-reverse`, `winger-dz-rim`.

### `project/`, `scripts/`, `sources/`

| file | + | − |
|---|---|---|
| `project/content_style_guide.md` | +1 | −0 |
| `project/plans/OPEN_ITEMS.md` | +3482 | −2 |
| `project/reviews/boards_limb_and_red_flags_2026-09-19.md` | +310 | −0 |
| `project/reviews/shoulder_limb_propagation_2026-09-19.md` | +53 | −0 |
| `scripts/check_caption_negations.py` | +51 | −4 |
| `scripts/check_quote_drift.py` | +8 | −1 |
| `sources/README.md` | +3 | −3 |

**Deliberately NOT staged:** `.agents/`, `.codex/`, `AGENTS.md` — untracked, confirmed absent from the
index by the gate. ⚠️ **They are also un-IGNORED, so a future blanket `git add` would sweep them; the
hook and `CLAUDE.md` both forbid blanket adds, which is the only thing standing between them and a
commit.**

---

## 1. The three framing errors, in the order they were found

**A propagation wave (`fa662cc`) had put USA Hockey's shoulder limb into fifteen documents, and its
record said the safety property held at every site. Both halves were true. Neither described the
corpus.**

**(1) The census grepped for the LIMB.** So it could only ever find documents that already had it.
⚠️ **Five documents teach the boards posture with NO shoulder limb at all** — `breakouts.md` (13
posture sites), `puck_handling.md` (8), `on_ice_communication.md` (6), `defender.md` (5),
`risk_management.md` (4). **They matched nothing and were invisible by construction.**

**The correct frame, and the transferable lesson of the whole round: census the thing the limb
QUALIFIES — the posture — then ask which carriers lack it.** A census of where a phrase *is* cannot
find where it *ought to be*.

**(2) Counting per DOCUMENT** then cleared files carrying the limb somewhere while voicing bare
instructions elsewhere. `winger.md` has 21 limb sites and still voiced a bare `Never:` line three
times.

**(3) Per SITE** found the real figure: **88 posture sites in the quiet documents, 28 without the limb,
9 of them ` ```facts ` lines** — each voiced alone in its own `<p>` with a 300 ms break either side.

⚠️ **And even the site census was too coarse once.** `switching_positions.md:165` scored as a defect
and is not one: it is part of a designed triad of three consecutive `Never:` paragraphs whose third
member carries both limbs with the hedge attributed. **The agent that owned the file refused the
repair and left the file untouched.**

---

## 2. FALSE PRESENCE — a new class, and the inverse of every trap recorded here before

**`grep -c shoulder content/technique/puck_handling.md` returns 34, across 47 distinct contexts. Every
one was read. NOT ONE is an impact surface** — they are deking: the head-and-shoulder fake, a
defender's *"inside shoulder"* and *"outside shoulder"*, *"skating shoulder to shoulder"*.

⚠️ **Every false-absence class this project records is a grep returning too FEW. This is the inverse,
and it is worse: a reviewer who greps the word, sees 34 hits and moves on HAS DONE THE CHECK AND GOT
THE WRONG ANSWER.**

**And the speech layer lied about the same file.** Its render *does* voice the full limb, at chunk 36
of 62 — from the `scan-before-a-wall-reception` CAPTION, embedded by a marker and owned by another
document. ⚠️ **An audit keyed on the diagram `owner` field scores that file CLEAN.** This is
`check_caption_hosts.py`'s known under-count firing in the opposite direction to the one it was written
for: there a caption carried a boundary its host omitted; here a caption CONCEALED that the host omits
one.

---

## 3. The cap is not an obstacle. It is a finding, proved nine times.

**32 facts blocks teach the boards posture. NINE carry no shoulder limb anywhere in the block. EIGHT of
the nine are at `MAX_COACHING_FACTS` = 8, and seven of the nine values have under 30 characters of
headroom.**

**Four different agents reached those eight independently and every one REFUSED the trade.** Recorded
refusals, each with its measurement:

- `switching_positions.md:341` — 192/200, block 8/8. Every rewrite that fits evicts both named injury
  mechanisms. ⚠️ Re-verified later with a **better** reason than the first: `:341` collapses both
  prohibitions into one line, so no sibling Duck line owns head-up/chin-off — the trade that worked
  elsewhere is **structurally unavailable** there.
- `puck_support_and_spacing.md:549` — 197/200, block 8/8, three characters against a 22-character
  minimum. Every version that fits deletes *"instead"*, which the style guide mandates as the `Never:`
  inversion guard.
- `breakouts.md` §goalie's role — a 61-char *"never the tip"* form DOES fit, and was refused because
  *"the tip"* would have no antecedent voiced alone: ***"an antecedent defect traded for a propagation
  one."***
- `puck_handling.md` §Back into the checker — ⚠️ *"a `Rule:` fact would clear the 11-fact cap, but this
  is a coaching manual, not a playing rule, so it cannot take that label."*

**The ONE structural relief attempted succeeded**: a `#### The stick above the shoulders` split took a
block from **11/11 to 7**, took the file's lines-at-cap from **1 to 0**, and made room for a correction
that had measured 311/300. ⚠️ **Its author established the seam ITSELF and rejected the brief's: it
tested heading the residual instead and refused, because *"the residual has no honest name."*** That
test — **the residual must be nameable, or the seam is wrong** — is the reusable part.

---

## 4. What the reviewers found that the repairs did not

**`safety-reviewer`, `source-verifier` and `content-reviewer` all ran on the British red-flag rewrite
(four UKCG concussion red flags → all fourteen). Between them:**

- ⚠️ **FIVE independent routes reached `conditioning_and_recovery.md:17`** — the Key focus still stated
  CRT6's ten as a closed set with *"no exceptions"*, under-calling on six of the fourteen for a British
  reader, in the layer a listener hears first.
- ⚠️ **TWO reviewers independently caught a factual error the rewrite introduced**: the corpus said
  CRT6 covers nothing on decreased sensation. CRT6 red flag 6 is *"Weakness or numbness/tingling in
  more than one arm or leg"*. The true contrast is **scope, not absence**.
- ⚠️ **An ordinary BULLET LIST gets the facts-block treatment.** Both files carry zero ` ```facts `
  blocks and the renderer still voices every bullet alone with 300 ms breaks. **So a listener received
  *"Current drug or alcohol intoxication."* in isolation under a 999 framing, with no scoping trigger
  anywhere in the list, its intro, or the spoken heading.** This corpus's entire isolation doctrine is
  written about ` ```facts ` lines; nothing said it applies to every bullet list.
- **30 of 30 quotations verbatim. Zero drift.**
- ✅ **The edition question closed in the corpus's favour**: England Ice Hockey's own page still links
  the **April 2023** UKCG edition, which was fetched and compared positionally — **all fourteen entries
  and the instruction sentence are byte-identical to November 2024.** No caveat needed.

**The cross-file read — asked for independently by five agents — returned zero criticals and five
majors, and was honest about the grading**: *"I want to be explicit about why, because 'zero
criticals' is the round-9 signature,"* flagging two of its majors as arguably critical rather than
banking the softer call.

⚠️ **Its most useful sentence is about scope, not findings:** ***"The un-reviewed surface is the
COMMITTED PROPAGATION, not today's diff."*** The oldest defect it found — `rules_primer.md` attaching
the spinal-injury rationale to the shoulder tip and the turned back, contradicting both the owner and
its own Key Takeaway 6 — came from `fa662cc` and nobody had re-read it since.

---

## 5. Measured traps, each of which produced or nearly produced a false result

| Trap | Measurement |
|---|---|
| `md_to_speech.py --only technique/skating` | Matches nothing; prints *"no markdown found under …/content"*, **blaming the corpus**. The id separator is `__`. Twelve silent failures before the source was read; the broken form had gone into two live briefs |
| Markdown markup splits phrases | `softer than *never*` and `point of **your** shoulder` defeat a flattened grep. The second **hid a real defect** |
| A markdown grep ≠ what ships | `head up and chin off your chest`: **89** in markdown, **118** spoken. Captions are voiced and live outside `content/` |
| `git diff \| grep -v '^[+-][+-]'` | A `-` list item becomes `--` and reads as a file header. **Silently drops every bullet.** An agent's own repair vanished from its review and the diff looked clean |
| Substring collisions in rule numbers | `Situation 7` matches inside `Situation 76.42`; `fend` matches inside `defending`. ⚠️ **The coordinator hit both, one command apart, after reading the warning** |
| A line-grep over `*.mjs` | Wrong in **both** directions: misses JS string-concatenation splits, over-counts `//` comments. Naive 14, concatenation-aware 10, build product 10 |
| `check_quote_drift.py` on a bare copy | Reports a false **0 clean / 1341 notfound** — it globs sources relative to the doc path |
| `check_quote_drift.py` quote family | Matched ASCII quotes only. **156 italic-quoted fragments across 10 documents were structurally invisible.** Patched this round: +120 fragments, +9 flagged corpus-wide |
| The pipe | `cmd \| tail` returns the PIPE's status. Hit again **while investigating a checker failure** |
| `check_links.py --quiet` | Exited 2 **four times**, non-reproducibly, against **46** clean re-runs — always while agents were writing. Fires in the direction that manufactures a finding |

---

## 6. What is NOT certified

- ⚠️ **Every repair in this round is new text, and most was self-certified by its author.** The two
  facts lines repairing the penalty-ladder half-rules were *"written and self-certified by the same
  agent, which is the one thing this project's method exists to prevent."*
- **No `rules-verifier` has seen the new rule claims.** The cross-file reviewer opened no rulebook and
  said so; the repairing agents verified their own.
- **No `safety-reviewer` has seen the boards-limb repairs**, which touch an injury mechanism and a
  penalty claim in fourteen documents.
- **No `site-reviewer` has seen anything**, including a new `####` heading that changes a page's
  heading hierarchy and in-page table of contents.
- **The corpus-wide count of boards prohibitions is unresolved and deliberately so.** ⚠️ Ruling
  "three" would ratify a conflation: one camp makes the third member the shoulder **tip** (banned
  flatly), the other **the whole shoulder** (only *avoided*, *if possible*). **The recommendation —
  stop counting, name the members, ~28 sites across 12 documents — is held for its own wave.**
- **`ibc.txt:1281`'s *"turn the far shoulder toward the boards"* is cited as settled and is UNOWNED.**
  Five agents declined to rule on it; the owner records it as an unreconciled fourth sentence. It is
  *"the only place in the sources that points a shoulder AT the wall."*

---

## 7. The two widened checkers — a verdict on each, because a tool changed mid-round taints what rests on it

⚠️ **`CLAUDE.md`'s rule is categorical: when a shared tool changes during a round,
*"no finding in any report should rest on that tool's output today."*** **Both were widened. Here is
what rests on each, and what does not.**

### `scripts/check_quote_drift.py` — the quote family

**Changed by the coordinator AFTER every agent had finished**, so no agent's report rests on the new
version. **The pattern matched ASCII quotes only; 156 italic-quoted fragments across ten documents were
structurally invisible** (`forechecking_systems.md` 60, `center.md` 45).

**Measured corpus-wide, both versions over all 39 documents:**

| | clean | flagged | notfound | total |
|---|---|---|---|---|
| before | 9,390 | 383 | 925 | 10,698 |
| after | 9,499 | **392** | 927 | **10,818** |

✅ **VERDICT: does not taint this round.** **All NINE new flagged candidates are PRE-EXISTING** — eight
in `forechecking_systems.md`, which is **not in this diff at all**, and one at `rules_primer.md:955`,
which this round's three-line change to that file did not touch. **The fix surfaces a backlog, not a
regression.**
⚠️ **BUT: the 109 newly-visible fragments scored CLEAN have been spot-checked by nobody, and the nine
flagged have not been ruled on.** **Open, and named as open.**

### `scripts/check_caption_negations.py` — the connective vocabulary and the tail signal

**Changed by an agent DURING the round, which is the tainting case.** **It gained a connective
vocabulary (`rather than`, `instead of`, …) and a posture-noun tail discriminator.**

⚠️ **WHAT RESTS ON IT: the caption-layer agent that finished EARLIER reported *"six flagged, all
cleared"* — that is OLD-VERSION output.** **Its clearances were argued from the tool's own
discriminator and stand on their reasoning, but its SCORES are superseded and should not be quoted.**

✅ **What the change is worth, measured by its author:** it reconstructed the three real pre-repair
defects from `git show HEAD:` and ran the OLD tool against them — **`SHAPE` found ZERO matches
anywhere inside the defect sentence.** **The entire family was structurally invisible.** **Widening the
vocabulary ALONE would still have scored them 1 among 104; the load-bearing part was the TAIL
discriminator, which scored them 3.**
✅ **Purely additive: `POSTURE` re-ranks ZERO of the 411 pre-existing hits.** Bands 411→611 occurrences;
actionable ≥2 goes 56→71.
✅ **And the sweep behind it found ZERO true defects in 198 occurrences**, establishing that
`rather than` is the corpus's HOUSE STYLE and not a smell — recorded in the docstring so the next agent
does not read its hits as a backlog.
⚠️ **Neither tool has a `--strict` and neither may ever gain one.**

---

## 8. THE COMMIT GATE RETURNED **BLOCK** — five conditions

**Recorded here because the gate's reasoning is the most useful review in the round.**

- ⚠️ **C10 — THE SITE WAS NEVER BUILT.** `site/dist` timestamped **04:59:01**, against diagram edits
  running **07:45–08:05**. **`grep -rl 'not the whole shoulder if you can help it' site/dist` → 0, and
  the anchor for the new `#### The stick above the shoulders` → 0.** ⚠️ **`build-diagrams.mjs` DID run
  — that is what made `diagrams.json` current and the caption certification genuine — but that is not
  the site build, and it is easy to mistake one for the other.**
- **C4 — no `rules-verifier`.** ⚠️ **The gate sharpened this past my own framing: the boards limb is a
  PROPAGATION, but the holding paragraph asserts *"the only major any of the four books writes for
  holding itself"* and *"USA Hockey is the one book that writes no strength-move sentence at all"* —
  **four-book NEGATIVE EXISTENCE claims**, which are new, not propagated.** **It spot-checked string
  presence itself and said plainly that *"is string presence, not rule verification."***
- **C6 — no `safety-reviewer`.** ⚠️ **And it found a NEW medical sentence I had not flagged, appearing
  TWICE in `rules_primer.md`: *"a vertebra can break at walking speed."*** **The sourced finding is
  that THE INJURY can occur at walking speed; *"a vertebra can break"* is a mechanism the Sources
  trailer does not carry — in a file whose own trailer notes the finding is a Tator restatement never
  read in the original.**
- ⚠️ **C11 — THE SECTION SPLIT VOIDS WHATEVER CLEARED THAT PASSAGE.** **`review_process.md`'s
  terminating rule exempts a repair confined to its finding; it does NOT exempt one that *"moves,
  merges, splits or renumbers text."*** **This split an 11-line block into 7 + 5, relocated three
  paragraphs, rewrote a cross-reference anchor in a DIFFERENT section, and made room for a correction
  that had measured 311/300.** ***"That is the voiding case exactly. No reviewer named this file at
  all."***
- **C3/C8 — this record did not cover the diff.** ✅ **Fixed: §0 now names every staged file and §7
  gives a verdict on each tool change.**

### Not blocking, but named — and two are real

1. ⚠️ **`winger.md` traded a caveat out to make room, twice — while THREE other documents in the SAME
   WAVE took the ADDITIVE route** (`puck_support_and_spacing.md`, `risk_management.md`,
   `passing_and_receiving.md` each gained a whole new `Never:` line). ***"Same defect, same round, two
   different treatments; the substitutive one is the one CLAUDE.md names as the thing never to do."***
   **The mitigation is real — the sibling Duck line carries the limb and lands in the same chunk — but
   the inconsistency is not defensible as a deliberate choice, because it was not one.**
2. ⚠️ **TWO LIVE FRAMINGS OF THE PROHIBITION COUNT ARE SHIPPING IN ONE DIFF.**
   `switching_positions.md` ships *"the shoulder tip is a **third**"* twice, while the diagram module
   comments insist *"NO COUNT MOVED … the shoulder was never a member of that pair."* **This record
   calls the count *"unresolved and deliberately so"* — but a reader moving between the two gets two
   answers, and that is not the same as leaving a question open.**
3. **The attribution-trailer conflict is settled and stays settled:** this session carries a note
   asking for a `Co-Authored-By: Claude` trailer; the user's global instruction, `CLAUDE.md` and
   `git-guard.sh` all forbid it. **The project rule wins and the hook would block it anyway.**
4. **A push is separate from a commit.** `main` deploys to production and needs explicit authorisation.


---

## 9. THE RE-RUN: the gate BLOCKED a second time, and found a defect in the repairs on its FIRST spot-check

**Four conditions failed. Recorded here because the gate's own finding is the round's sharpest lesson.**

### ⚠️ C11 vindicated TWICE over

**The gate's first BLOCK ruled that a section split VOIDS whatever cleared that passage, and ordered a
fresh pass on a file *"no reviewer named at all."*** ✅ **That pass found a CRITICAL:**
`body_contact_and_battles.md`'s hooking fact told a USA Hockey reader that the shaft above the upper
hand is *"an automatic minor"*. **USA Hockey's hooking rule is BLADE-ONLY (623's own Note); the shaft
above the upper hand is Rule 606 butt-ending — 606(a) a MAJOR PLUS A GAME MISCONDUCT, 606(b) a match
option, plus a next-game suspension under 404(b) and Rule 411 progressive-suspension exposure, on a
list that contains 606 and NOT 623.** **PRE-EXISTING and shipped.**
⚠️ **A `rules-verifier` confirmed it on five independent lines and diagnosed why it survived:**
***"a true statement about three books written as a statement about the act, in a sentence that names
the fourth… every verifier who checks it against A book finds it true. 623 is where you look, and 623
is not where the answer is."***

✅ **Repaired by splitting, with the verifier's caveat carried into the text.** **Two structural seams
taken rather than one, because the holding paragraph is not last and a single seam would have
mis-nested tripping under a holding heading. The parent block went 10/11 → 6.**

### ⚠️ AND THE REPAIRS THEMSELVES FAILED THE SAME TEST

**On its FIRST spot-check of post-BLOCK text the gate found a newly-written facts line saying Hockey
Canada 7.6 governs *"below junior"*.** **`hc.txt`: *"7.6 (a) A Minor penalty will be assessed to any
player who accidentally contacts an opponent in the head, face, or neck, **in minor and female
hockey**."***
⚠️ **A FEMALE SENIOR PLAYER IS COVERED BY 7.6 AND IS NOT "BELOW JUNIOR".** **Voiced alone, the line
tells her 9.5 governs — and it contradicts the line four rows below it in the same block.**
⚠️⚠️ **THE SAME DOCUMENT FLAGS THIS EXACT TRAP AT `:658`: *"Note the scope, because both places write
it in: minor and female hockey."*** **The new line was written anyway.**
***"One spot-check of one new line. The rest of the post-BLOCK text has had the same amount of review:
none."***

### The other three failures

- ⚠️ **C8 — THIS RECORD'S §0 WAS STALE AGAIN**, under a §8 line claiming it was fixed. **It said 29
  files / 3,003 insertions against 30 / 4,294, said 14 content documents against 15, and OMITTED
  `skating.md` entirely — a file that rewrites a spinal-injury mechanism in two layers.**
  ***"This is the identical failure §0 was written to repair, recurring inside the repair."***
  ✅ **§0 is now GENERATED FROM `git diff --cached --numstat`.**
- ⚠️ **C3 — the post-BLOCK round was undocumented.** **Closed work had been filed into
  `OPEN_ITEMS.md`, which `CLAUDE.md` defines as holding REMAINING work: *"No completed items: when work
  closes it moves out to a review record."*** ✅ **This section is that record.**
- **C10 — the build half PASSES** (verified independently by the gate: `dist` 09:40 against the last
  content edit 09:38, 53 HTML pages, 719 files newer than the most-edited document, all three new
  anchors rendered). ⚠️ **D15 is UNEVALUATED because `site-reviewer` could not render — a tooling
  outage, not a defect.**

### ⚠️ The size framing was MINE and it was wrong

**I asked whether 4,294 insertions was too large to certify. The gate answered:** ***"81% of the diff
is one plan file. The actual content change is 318 changed lines across 15 documents. That is a normal
commit for this repository, and I would not block it for size. So do not split by size. SPLIT BY WHO
HAS REVIEWED WHAT."***

**Its proposed split, which is the shape to follow:** **Commit A** — the 13 content files whose changes
are propagation and the concussion work, the 8 `site/` files, `sources/README.md`,
`content_style_guide.md`; reviewed before the BLOCK, edits since within their findings. **Commit B** —
`body_contact_and_battles.md` and `rules_primer.md`, the two files carrying self-certified structural
surgery. ***"Confining the C11 exposure here is what makes A shippable."*** **`skating.md` joins A only
once a reviewer has seen its injury-mechanism rewording.**

### Passed on re-run, verified by the gate rather than taken from the coordinator

**C1, C2, C9 clean. No credential or ignored artefact staged; `.agents/`, `.codex/`, `AGENTS.md`
confirmed `??` and absent from the index; `.gitignore` not weakened.** **C5: the added-URL set minus
the removed-URL set is EMPTY — no new citation enters the diff.** **C7: the new owner row for the two
red-flag counts is correct and every site grepped names whose count it quotes.**
✅ **NO PROJECT NARRATION IN `content/`** — all added lines scanned for round numbers, script names,
`OPEN_ITEMS`, reviewer names and `project/`: zero matches.
✅ **And the parts of the critical repair the gate re-derived HELD**: 623's blade-only Note, 606(a)'s
major plus game misconduct, HC 8.1(b)/(c), 9.5(a) and Interpretation 1, and `grep -ci 'match penalty'`
returning **0** in all three IIHF editions on disk.

- [ ] **Not blocking, but named: `check_facts.py --near` reports 266 lines within six characters of cap
  and SIX AT IT. Three are in this diff** — `on_ice_communication:411`, `defender:624`,
  `breakouts:910`. **Any future edit to those blocks evicts a line.**

---

## 9b. D15 — UNSATISFIED, and recorded as such rather than declared out of scope

**A retry was dispatched when the Chrome extension began responding again. It could not render either,
and it diagnosed the failure more precisely than the first attempt:** `tabs_context_mcp`,
`tabs_create_mcp`, `resize_window` (375×812) and `tabs_close_mcp` ALL SUCCEED; **only `navigate`
fails**, on `localhost` and on `127.0.0.1`, with *"Could not verify this site's safety category."*
***"This is a safety-categorisation service returning 'unknown' for a localhost origin, not the
extension being dead."*** **The preview server was verified up with `curl` → 200 BEFORE AND AFTER the
browser failures, so the server is not the problem.**

✅ **The agent refused to substitute static analysis, as instructed, and said so:** ***"I have no
pixels, and I am not substituting static analysis for them… None — and that is the honest result, not a
pass."***

### ⚠️ What is therefore UNKNOWN, and must not be read as cleared

**The eleven rewritten captions have never been seen at any width in any theme.** **The project's own
stylesheet comments record this construct at 1,338 px tall on an 812 px viewport, inside a figure whose
drawing was 14% of its own height** — and that measurement PREDATES the change.
**Also unexamined: the three new `####` headings and the in-page ToC; the fourteen-item red-flag list at
375px; the repaired ⚠️ that previously rendered as plain prose; and the facts blocks.**

### ✅ What CAN be stated, because it was measured rather than seen

**Caption growth, computed by diffing `diagrams.json` against HEAD:**

| | before | after | delta |
|---|---|---|---|
| eleven changed captions, total | 18,013 | 18,592 | **+579** |
| mean per caption | | | **+53 chars (3%)** |
| range | | | +47 to +86 |

⚠️ **So this change adds ~3% to caption length.** **That BOUNDS the incremental risk; it does NOT clear
the pre-existing one.** **The 1,338 px problem was already there, is documented in the repository's own
stylesheet, and has not been re-measured since. This change did not create it and 3% did not fix it.**
⚠️ **And the 1,338 px figure cannot be mapped onto the 3%: nobody recorded WHICH caption it was
measured on, and the eleven range from 853 to 3,134 characters.**

### The honest routes to closing D15

1. **Retry when the categorisation service answers** — the preview server is already up, so a retry
   costs one `navigate` call.
2. **Drive it headlessly under our own control** (Playwright/Puppeteer against `http://localhost:4321`),
   measuring `figcaption .warn-inline` height against its sibling drawing at 375×812 in both themes.
   ⚠️ **Neither is installed, and adding a dependency to close a review condition is a repository
   change nobody has authorised. NOT DONE.**

⚠️ **D15 IS NOT DECLARED OUT OF SCOPE.** **The gate offered that as a legitimate one-sentence close.
It is being refused: the risk is specific, documented in this repository's own source, sits in the
exact area this change touched, and eleven captions grew. An unexamined layout risk is not the same as
an acceptable one, and writing it off would be the cheapest wrong answer available.**

---

## 9c. ⚠️ HOCKEY CANADA'S DIVISION SCOPES ARE NOT A CLOSED PAIR — and the framing this round relayed was too simple

**A `commit-gate` spot-check found a facts line giving a Hockey Canada scope as *"below junior"* where
the book writes *"in minor and female hockey"*. Fixed. The repairing agent diagnosed it as an AGE axis
substituted for a STREAM axis, and that diagnosis was relayed into the next brief.**

⚠️ **The next agent tested the framing and found it is ITSELF too simple. The book uses AT LEAST FOUR
scope formulas, not two — verified by the coordinator against `hc_layout.txt`:**

| formula | occurrences |
|---|---|
| *"Junior and Senior divisions"* | **14** |
| *"minor and female hockey"* | **6** |
| *"Minor or Female divisions"* (6.9(c)) | 1 |
| *"categories of U18AAA, Junior, and at the option of the Member in Senior"* (6.1(f)/(g), 6.7(d)/(e)) | 3 |

⚠️⚠️ **AND THE SHARPEST CONSEQUENCE: a U18AAA team is INSIDE the no-line-change-on-ICING rule and
OUTSIDE 6.4(a)'s no-line-change-on-PUCK-OUT-OF-PLAY rule.** **Two adjacent rules about the same thing,
scoped differently, and neither bucket of the two-bucket model predicts it.**

### ✅ The exhaustiveness question is CLOSED, in the negative, and the book closes it itself

**Rule 7.3 scopes body-checking to *"divisions of U13 and below, in female hockey, and ANY OTHER
DIVISIONS APPROVED BY A MEMBER OF HOCKEY CANADA"*** — verified verbatim by the coordinator.
⚠️ **An OPEN RESIDUAL the rulebook never enumerates, delegated to Members.** **So *"minor and female
hockey"* is not exhaustive of non-Junior/Senior play, and no line in the corpus could truthfully say it
is.**

✅ **And NO GLOSSARY ENTRY EXISTS** for *Junior*, *Senior*, *minor*, *female*, *division*, *category* or
*Member* in either extraction — searched in the colon form the Glossary actually uses. **`Masters`,
`para` and `sledge` return zero.**

### ✅ What the repair therefore does, and what it refuses to do

**It states the residual rather than inventing completeness.** ***"I refused to state that the two
buckets partition the sport, and refused to state which side senior female play falls on — the book
does not say. Both are written as disclosed gaps pointing the reader at their Member."***
⚠️ **That is the right outcome and it is the harder one: the tidy two-bucket sentence was available,
would have read well, and would have been wrong.**

**Its sweep of that file found every other division-scope site already on the book's axis** — five of
them, left alone — **and the different-phrase blind spot came up EMPTY**: a regex for
`younger|kids|children|minor level|youth level|age group|under-1X|adult league|men's|women's|juniors`
returned no division-scope hits, every `below` being rink geometry.

- [ ] ⚠️ **NOT SWEPT: the other 38 documents for the same age-for-stream substitution.** **Two
  instances have now been found in two files by accident rather than by census.**
- [ ] ⚠️ **The answer probably does not live in the playing rulebook at all** — Hockey Canada's
  **Regulations, Bylaws and registration categories** would define these terms, **and none is on
  disk.** ***"My 'not a closed pair' conclusion is a statement about the playing rulebook's own text,
  not about how Hockey Canada actually registers players."***

### A render-driven catch worth keeping

**The repaired paragraph now spans TWO audio chunks where at HEAD it fitted in one.** ✅ **The agent
noticed from the render and named the book at the new seam (*"The book carries no Glossary entry"* →
*"Hockey Canada's rulebook carries no Glossary entry"*), so both chunks stand alone voiced.**
✅ **It also removed a self-referential scare-quote that `check_quote_drift` flagged as NOT FOUND IN ANY
LOCAL SOURCE — the corpus quoting ITSELF, which would have read to a listener as a source quotation.**
⚠️ **A new false-positive class for that tool, and a real defect underneath it.**

---

## 9d. SAFETY REVIEW OF THE POST-BLOCK TEXT — zero criticals, and it OVERTURNS the gate's proposed split

**Three files read in full from the staged diff, all three rendered, `crt6.pdf` re-rendered with
`pdftoppm`, `ukcg.txt` read positionally at column 82, and EVERY ZERO RUN AGAINST A POSITIVE CONTROL.**

✅ **NO CRITICALS. The three items the brief flagged as highest-risk all verified CLEAN:**
- **`skating.md`'s two sentences** — *"clean, and an improvement."* The pre-repair form attached
  walking speed to THE COLLISION, *"trivially true and weak"*; the repaired form attaches it to the
  INJURY, which is what the source means.
- **The new boards `Never:` line — verified BY RENDERING, not by reading.** *"The full stop stops the
  distribution. The positive imperative is not reached by the negation."* **And the two-tier source
  mapping is exactly right: §B's hedge → *"if you can help it"*, `ibc.txt:1453`'s absolute → `Never:`.**
- **The three `####` splits — NO safety limb lost its qualification.** **It listed every hedge,
  exception and rule-set flag in each new section's body and checked the block for each individually.**

### ⚠️ M1 — the consequence clause drops *deliberate*, and the document contradicts itself

**`rules_primer.md` Key Takeaway 6 ends: *"…so **turning** loses you the call as well as giving you the
hit."*** ⚠️ **Unqualified. A Key Takeaway is the layer designed to be heard alone.**
**Both books say *"INTENTIONALLY turns"* — `nhl_rules.txt:5471-5472`, `iihf_rules_v1.1.txt:3983`.**
⚠️ **And the same document's Common Mistakes entry says in bold: *"the waiver is for a DELIBERATE turn,
which is a different thing from a late one."*** **Coordinator verified both.**
***"Voiced alone the reader learns that ANY turn forfeits the call. That is false, and it is the
reading that leaves an injured player believing they had no protection."***
**Layers: body ✓ · Common Mistakes ✓ · Key Takeaways ✗ — one site of three.**

### ⚠️ M2 — the same takeaway is the only one of the diff's sites without the walking-speed limb

**The diff ADDED it to three sites in that document and left the fourth.** **Coordinator confirmed:
`walking speed` appears at `:22`, `:34`, `:384`, `:992` — and NOT in Key Takeaway 6.**
***"Three of four is the shape that makes the fourth look deliberate."***
**The limb is the one that defeats *"I was only going slowly."***

### ⚠️ M3 — a finding about a BLOCK, not a line

**A new facts line ends *"the IIHF book has no match penalty at all"*.** ⚠️ **Literally true and
verified with a positive control** (`match penalt` = 0 in both IIHF editions; control `minor penalt` =
382, so the extraction is sound). **But the British reader hears two North American books reaching the
harshest sanction with no named foul, and then that THEIR book has none of it.**
**The counterweight lives only in the body: IIHF Rule 21 *Dangerous Actions* is a major plus an
automatic game misconduct and ALSO needs no named foul — *"an action that is not covered by the playing
rules"*.**
⚠️ **The line is 299/300. *"This needs a trim elsewhere in the line, not an append — which is itself
the eviction risk CLAUDE.md warns about, and is why this is a finding about the block and not a
one-line patch."*** **Opens a row; does not block.**

### Minors

- **m1 — *"Neither of those two"* now points into a THREE-item list.** **The whole-shoulder hedge was
  inserted into the middle of a two-item list and the numeral was not updated.** ⚠️ **The naming repair
  reached the §4 body site and not this one, and `check_facts_antecedents.py` CANNOT SEE IT — it scans
  facts lines only.**
- **m2 — the new 7.6(a) enumeration stops one limb short:** it quotes the minor and double-minor limbs
  and says *"nothing in EITHER limb turns on how high the stick was carried"*, **but 7.6(a) has a THIRD
  limb — three head-contact penalties is a Game Ejection.** ✅ **Ranked Minor because the agent checked
  first and found the document already carries it correctly, with scope, at two other sites.**
- ⚠️ **m3 — A STANDING RISK NEXT DOOR: `check_tables.py` reports the checking-legality table at
  `body_contact_and_battles.md:74` with 43 CHARS AND TWO ROWS OF HEADROOM.** **That is the table
  telling a listener whether checking is legal where they play.** ***"One added league row, or one
  lengthened cell, and the speech renderer drops it entirely with no warning in any gate."***

### ✅ TWO CANDIDATE FINDINGS IT KILLED BY CHECKING

**(1) A chunk ending on a cliffhanger — *"`check_chunk_tails.py`'s own docstring retracts that premise:
chunks are concatenated into one audio file."*** **(2) It was about to report CRT6's fifth *"Remember"*
bullet as omitted; it is in the corpus at two sites.** ⚠️ ***"I was about to report an omission that
does not exist."*** **Both killed before filing — the discipline that keeps a review honest.**

### ⚠️⚠️ IT OVERTURNS THE COMMIT GATE'S PROPOSED SPLIT, and the argument is strong

**The gate proposed Commit A (reviewed propagation) and Commit B (the two self-certified structurally
edited files).** **This reviewer says: *"No — commit all three together."***

***"They are now independently reviewed, and they are NOT SEPARABLE: `skating.md`'s two sentences and
`rules_primer.md`'s four lines are the PROPAGATION of the same walking-speed repair that
`body_contact_and_battles.md` carries. Committing the structurally-edited files separately would ship
the corpus in a state where one document attaches walking speed to the injury and its siblings attach
it to the collision — which is the half-done propagation CLAUDE.md warns about. M1 AND M2 ARE
THEMSELVES EVIDENCE FOR THIS: the propagation is already one site short, and splitting the commit would
FREEZE THAT GAP INTO THE HISTORY."***

⚠️ **The gate's split was proposed on REVIEW STATUS; that basis is now gone, because the review it was
waiting for has happened. The reviewer's basis is PROPAGATION INTEGRITY, which the split would break.**
**This goes back to the gate as a contested recommendation, not as a coordinator decision.**

⚠️ **And its own scope caveat, which must travel with the verdict:** ***"`git status` shows twelve other
staged `content/` files and nine `site/src/diagrams/*.mjs`. I REVIEWED THREE FILES. Nothing in this
report clears the other twenty-one."***

---

## 9e. THE TWO SAFETY MAJORS FIXED — and one supporting argument CORRECTED, because it will otherwise become a false premise

**Two lines changed in Key Takeaway 6. All three findings upheld on re-derivation; none was wrong.**
**Both 43.1 texts verified from primary text — NHL `:5471` and IIHF `:3983`/`:3990` — and BOTH WAIVERS
REQUIRE INTENT AND PURPOSE. The self-contradiction with the document's own Common Mistakes entry is
real.**

✅ **`:1133`: *"Neither of those two"* → *"Neither the shoulder tip nor the turned back"*, and
*"so turning loses you the call"* → *"so **a deliberate turn** loses you the call as well as giving you
the hit."*** ✅ **`:1131`: the walking-speed limb appended with the INJURY as antecedent.**

⚠️ **IT REFUSED THE WORDING THE BRIEF SUGGESTED, and was right to.** **The brief offered the Common
Mistakes form *"so turning to draw the call loses it"* as already-existing text.** ***"It drops 'as well
as giving you the hit' and would have weakened the direction the brief told me to preserve."***
⚠️ **The coordinator's suggestion contradicted the coordinator's own constraint, in the same brief.**

✅ **AND IT CHECKED `:992` BEFORE EDITING: its *"neither of those two"* is CORRECT there — a genuine
two-item list, with the whole-shoulder hedge in a separate later sentence.** ***"A careless
`replace_all` would have broken it."***

### ⚠️ ONE SUPPORTING ARGUMENT IS OVER-RANKED, AND THE CORRECTION MATTERS MORE THAN THE POINT

**The agent reported that Takeaway 6 SPLITS ACROSS CHUNKS — chunk 248 ends on the three items, chunk
249 OPENS with the consequence clause — and concluded *"a listener genuinely hears the consequence
clause detached from the first half that carried 'deliberate'."***
✅ **The coordinator verified the split is real: 248 ends *"…and never your back to the boards."*, 249
opens *"Neither the shoulder tip nor the turned back is penalised in any book…"*.**

⚠️ **BUT THE INFERENCE IS OVER-RANKED BY THIS PROJECT'S OWN RETRACTION.**
**`scripts/check_chunk_tails.py` opens with it:** ***"A chunk boundary is a SEAM inside one continuous
file. The listener hears what follows after the ordinary 300 ms break, exactly as at every other
value. Anything ranked by this tool on 'the next file' reasoning is OVER-RANKED."***
⚠️ **`site/src/components/AudioPlayer.astro` serves ONE audio file per document; chunking exists only
for the synthesiser's per-request limit.**
✅ **A `safety-reviewer` earlier in this same round KILLED a candidate finding on exactly this basis.
This agent, in a different file, reached the opposite conclusion — and the tool is the authority.**

⚠️⚠️ **THE FIXES STAND ON THEIR OWN AND ARE NOT AFFECTED.** ***"Neither of those two"* after a
THREE-ITEM list is a numeral mismatch whatever the chunking; *"deliberate"* dropped from a consequence
clause is a dropped qualifier whatever the chunking; the walking-speed limb was genuinely absent.**
**Recorded because an uncorrected amplification becomes a false premise in the next brief — which is
how three of this session's twelve relaying errors were born.**

### Not fixed, and correctly not invented

- [ ] **Excluding the whole-shoulder hedge from the *"not penalised"* sentence could be heard as
  implying the whole shoulder IS penalised.** ⚠️ ***"This exposure is IDENTICAL at `:34`, which is in
  HEAD and was reviewed, and fixing it means asserting something about the whole shoulder that I have
  not verified in any book."*** **A plan row, not an invention.**
- **It refused to add *"turning late keeps the call"*** — a sound inference that `:992` states, **but a
  NEW legal claim in a Key Takeaway, and the reviewed precedent at `:34` does not make it.**

### ⚠️ An honest flag about its own evidence

***"I compared the working tree only — I NEVER READ THE STAGED VERSION of this file, so if the index
holds something other than what I edited from, my diff describes a state nobody has verified."***
✅ **Checked: `git diff --stat` shows 2 insertions / 2 deletions, its edit alone. Now staged.**

---

## 9f. THE TWO-BUCKET CLAIM REMOVED — and the refutation attempt IMPROVED the fix

**A `Rule:` facts line, voiced alone, asserted Hockey Canada's two head-contact rules
*"between them cover everyone"*.** ⚠️ **That is the tidy two-bucket inference three agents had already
proved the book does not support, sitting in the extraction layer.**

✅ **The agent could not refute it — but the ATTEMPT changed the repair, and for the better.**
***"The universality the line was reaching for IS in the book — it is in the two UNSCOPED PREAMBLES,
not in the two-bucket inference. So the repair GROUNDS the safety claim rather than merely hedging it
away."***

**Verified in both extractions, agreeing:**
- **7.6's preamble carries NO division clause** — *"There is no type of legal contact to the head,
  face, or neck… Regardless of the circumstances, players must be penalized… at all times"*, plus
  *"This rule supersedes any other rules, with the exception of Rule 7.10 – Fighting."*
  **ONLY 7.6(a) is scoped, and 7.6(b)–(e) carry no scope either.**
- **7.7's preamble is the same absolute**, though every lettered clause opens *"In Junior and Senior
  divisions"*.
- **No glossary entry for any division term** — it dumped every `WORD:` glossary head in both files.
- **A full census of every `division(s)` mention: four scope formulas, NO enumeration anywhere, and
  ZERO hits for *Masters*, *Adult*, *Recreational*, or even *"minor hockey"* standing alone** — which
  appears only ever as *"minor and female hockey"*.

**`:525` 284→281/300 · `:689` 220→289/300 · `--near` 34 lines unchanged, neither edited line flagged ·
the checking-legality table unchanged at 43 chars / 2 rows.**
✅ **And it confirmed the coordinator's re-measurement: *"minor and female hockey"* is SIX in both
extractions, flattened. The earlier "seven" correction was wrong.**

### ⚠️ THE LAYER TEST FOUND THE SAME CLAIM IN THREE LAYERS, IN THREE DIFFERENT STATES

- **the `:396` section-opening callout** — carried the same unsupported claim (*"which between them
  cover every division"*). **Fixed as propagation, not widening: leaving it would have left the
  document contradicting itself across layers.**
- **the `:525` facts line** — the version found.
- ✅ **`:540`, the main body sentence, was ALREADY THE HONEST FORM**, grounding universality in
  *"There is no type of legal contact…"* and *"at all times"*.

⚠️ ***"So this document held the honest and the unsupported form of one claim in THREE DIFFERENT LAYERS
SIMULTANEOUSLY, and the two defective ones were the callout and the facts line."***
**The layer test is the only thing that could have found that, and a document grep would have cleared
the file on `:540` alone.**

### Refusals, all on measurement

**Four candidate wordings rejected — one at exactly 300/300, three at 2–7 characters left —**
*"all of which would have put a `Rule:` line into `--near` where an ordinary edit evicts something."*
**Only the trailing DUPLICATE `(Rule 7.6)` citation was dropped; the rule number survives inline.**

### ⚠️ A CLAIM THE REWRITE NOW CARRIES MORE CONFIDENTLY — and the coordinator could verify only two of three

***"I never opened the USA Hockey book — 603, 607 and 608 are restated on the assumption that a prior
agent verified they carry no division clause; if that was never checked, it is unchecked still, and my
rewrite carries it forward MORE CONFIDENTLY THAN BEFORE."***

**Coordinator attempted it. Results, stated exactly:**
- ✅ **Rule 603 Boarding — located at its definition (*"Boarding is the action where a player pushes,
  trips or body checks…"*), 1,600 characters scanned: NO division or classification clause.**
- ✅ **Rule 607 Charging — located at its definition (*"Charging is the action where a player takes more
  than two strides…"*), same scan: NO division or classification clause.**
- ✅ **Rule 608 Checking From Behind — VERIFIED. The coordinator's "unverifiable" was a FALSE NEGATIVE
  and the commit gate corrected it.** **The body is at `sources/usah.txt:3712`.** ⚠️ **Four searches
  missed it for a reason worth recording: they looked for *"Checking from behind IS THE ACTION"*, by
  analogy with 603 and 607, and 608 reads *"(Note) Checking from Behind **OCCURS WHEN** a check is
  delivered…"*. The four hits they did land on were contents listings at `:1218`, `:2939`, `:5282`,
  `:8026`.** **Re-checked directly: the onus quote *"The onus is on the player delivering the check to
  not hit from behind"* is VERBATIM, and 608(a), (b) and (c) carry NO division clause — so the staged
  facts line is TRUE.**
  ⚠️⚠️ **THIS IS A DISCLOSURE THAT MADE THE CORPUS LOOK LESS SUPPORTED THAN IT IS — the exact direction
  `CLAUDE.md` records as the one no reviewer stops on, produced by the coordinator in the act of being
  careful about not overclaiming.** **Nothing false shipped in `content/`; the defect was in this
  record.**

### Open, reported not fixed

- [ ] **`rules_primer.md:1137` carries a weaker related form — *"between them cover the divisions
  Hockey Canada distinguishes"*, narrowed deliberately in an earlier review round.** ⚠️ **Given 7.3's
  *"any other divisions approved by a Member"*, *"the divisions Hockey Canada distinguishes"* arguably
  still includes divisions the book never names.** ***"Candidate plan row, low priority, not a defect I
  can assert."***
- [ ] **`:689`'s *"so the checker is penalised too"* — voiced alone, `too` mildly dangles; the ducker's
  own penalty is the NEXT facts line.** **Left deliberately: outside the brief's scope.**

---

## 9g. THE CAPTION RISK, COMPUTED — the stylesheet's worst case is 90% GONE, and D15 still is not closed

⚠️ **This is a CALCULATION, not a look. It does not close D15 and is not offered as doing so.** **It
was run because the browser remains unreachable and a character-count bound (*"+53 chars, ~3%"*) was
too weak to be worth much.**

### The model, and it is the stylesheet's own

**`site/src/styles/global.css` records a measured worst case: `forcing-them-outside` at
**2,981 amber characters, 1,338 px tall on an 812 px viewport, inside a 2,143 px figure whose drawing
is 296 px — the picture 14% of its own figure.*** **It also records *"the median run is 16 line boxes
and the worst is 62"*.**

✅ **Those are TWO INDEPENDENT FIGURES for one caption, so one predicts the other and the model can be
checked rather than assumed:** **2,981 ÷ 62 = 48.1 characters per line box; 1,338 ÷ 62 = 21.6 px per
line box.** **A 21.6 px line box on ~16 px text is plausible, and the two derivations agree — so the
estimate below is internally consistent with the stylesheet's own numbers, not an invented ratio.**

### ⚠️ THE DOCUMENTED WORST CASE NO LONGER EXISTS AT THAT SIZE

**`forcing-them-outside` today: 540 characters total, amber run **302**.** ⚠️ **Down from 2,981 — a
90% cut.** **The stylesheet comment is STALE, and the 1,338 px figure the coordinator, the site
reviewer and the commit gate have all been treating as the live risk was measured on a caption that has
since been cut to a tenth of its length.**

### What the eleven changed captions actually measure

| caption | amber chars | est. height | change |
|---|---|---|---|
| `forecheck-press` | 1,965 | **~882 px** | +26 px |
| `forecheck-pinch` | 1,910 | ~857 px | +26 px |
| `angle-into-the-corner` | 1,398 | ~627 px | +21 px |
| `icing-the-race-and-the-dot` | 1,190 | ~534 px | +39 px |

**The corpus's worst amber run is now `forecheck-press` at ~882 px — and it IS one of the eleven.**
✅ **But it is ~66% of the documented 1,338 px, and this round ADDED 26 px to it.**
✅ **Every changed caption grew by between +21 and +39 px estimated.**

### ⚠️ WHY THIS DOES NOT CLOSE D15

1. **A calculation ignores what a render would show**: actual wrap points at 375 px, font metrics,
   padding, the figure's own height, and whether the amber block swamps its drawing — **which is the
   ratio the stylesheet comment was actually about, and which this cannot compute** because it has no
   rendered drawing height.
2. **The ratio is calibrated on ONE data point**, and that data point is now stale.
3. **Three new `####` headings, the in-page ToC, the fourteen-item list at 375 px and the repaired ⚠️
   remain entirely unseen.**

⚠️ **What it DOES establish: the specific catastrophe the stylesheet documents is not the live risk it
was taken to be, and this change moved the worst case by ~26 px on a ~882 px block.** **That is a
materially better bound than *"3%"*, and it is honest about being a bound.**

- [ ] **Correct the stylesheet comment** — it states a worst case that is 90% gone and has misdirected
  three separate reviews today. ⚠️ **HELD: `site/src/styles/global.css` is NOT in the staged diff, and
  adding a file to a diff blocked three times is the move the gate has twice warned against.**

---

## 10. What this round could not have found

**Whether the reconciliation itself is right.** *"If the reconciliation is wrong, it is now wrong
identically in 130 places and my census would report it as perfectly consistent."*

**Whether any of the concussion guidance is what a clinician would want a bystander told.** Two
published lists were reconciled against each other. Nobody can say whether *"act on whichever fires
first"* is sound triage, or whether a rec-league player asked to carry two lists will freeze.

**Whether a published reconciliation exists that the corpus is under-crediting.** The synthesis was
proved absent from CRT6 and the UK guidance. ⚠️ **No one searched for a third source that writes it** —
and that is the direction in which every disclosure defect this project has ever found was wrong.

**Whether four copies of an injury mechanism in a rules primer is propagation or duplication.** Nobody
has asked.

**What any of it sounds like.** Every agent read SSML. **Nothing was synthesised.**


---

**And one more, learned from the gate's second BLOCK: THIS RECORD CANNOT CHECK ITSELF.** Its §0 was
wrong twice — once written from memory, once left stale by repairs that landed after it — and both
times under a heading asserting it was complete. ⚠️ **A review record is a CLAIM ABOUT A DIFF. Nothing
mechanical compares the two, `check_links` and `check_facts` both pass on a record that describes a
different change, and the only thing that caught it was a reviewer reading the diff and the record side
by side.** **§0 is now generated from `git diff --cached --numstat`; it will go stale again the moment
anything is staged after it, and whoever stages next must regenerate it rather than trust it.**
