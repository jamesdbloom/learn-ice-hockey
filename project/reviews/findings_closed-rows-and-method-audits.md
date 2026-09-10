# Findings — closed rows and method self-audits, moved out of the plan

⚠️ **Moved VERBATIM out of `project/plans/OPEN_ITEMS.md` on 2026-09-10, from a table headed *"NEW OPEN
ROWS from the closing waves — none of these is closed"*.** ⚠️ **That heading was false by 196 of its 436
rows.** A triage pass classified every row: **116 were already closed** (self-marked ✅ CLOSED / RETRACTED /
NOT A DEFECT, or verified repaired in the tree) and **28 more were method post-mortems** — a wrong premise
in a brief, a measurement artefact, a dispatcher error — which belong in a record, not in a plan of work.

⚠️ **The 52 self-audit rows carrying a TRANSFERABLE LESSON were deliberately LEFT IN THE PLAN**, not moved
here: `pdftotext -layout` giving a false absence on two-column prose; `git diff --name-only` listing
*unstaged* work; exclusivity being true of the index and false of the tree; a count belonging to a string
rather than a concept; a truncated tool view manufacturing findings.

⚠️ **What the triage measured, and it is the number to carry:** 50 rows checked against the repository,
**50 substantive claims held, 0 false** — but **metadata was stale in roughly a third, always UNDERSTATING
scope** (198 diagrams recorded as 127; 28 source files as 26; 609 occurrences as 346). **Trust the
substance of any row here; re-measure every number, line reference and denominator before acting on it.**

**Nothing was summarised or rewritten** — rows were relocated by exact line match.

---

| ✅ **CLOSED 6 September 2026 — verified fixed in `global.css:2204-2220`, and this row was STALE.** An always-drawn scrollbar (`scrollbar-width`/`scrollbar-color` for Firefox, `::-webkit-scrollbar` for Chrome and Safari) replaces the missing cue; macOS overlay scrollbars fade out exactly when the reader needs telling, so the box is opted into a classic persistent bar. ⚠️ **The obvious fix was tried first and RENDERED IDENTICAL:** `.table-scroll`'s four edge gradients were injected verbatim at 375 px and the screenshot was pixel-for-pixel the one without them — every rink SVG paints its ice as an unconditional opaque `<rect>` over ~98% of the viewBox, so the gradient is white-on-white. That is written into the CSS comment so nobody re-derives it by copying the sibling rule. Original finding follows. | Measured in a real browser at 375 px: the box is 347 px, the SVG is held at `min-width: 640px`, so **293 px is off-screen — the entire attacking half, including the `puck carrier` label**. `offsetHeight − clientHeight = 0`: the scrollbar reserves **no layout space** and is drawn neither at idle nor mid-scroll. ⚠️ **Not lost — the box IS keyboard-reachable (`tabindex="0"` + `role="region"` + label, verified on five pages) and the substance is duplicated in the caption prose. It is UNCUED.** |
| ⚠️ **AND THE OBVIOUS FIX IS ALREADY REFUTED IN THE FILE — do not re-derive it** | `site/src/styles/global.css:2040` records that `.table-scroll`'s four gradients **were injected verbatim onto `figure.diagram--full .diagram-scroll` at 375 px and the screenshot was pixel-for-pixel the one without them** — *"NOT a faint shadow — nothing at all, because the ~6 px the slab leaves at each edge is white-on-white."* ⚠️ **The site review proposed exactly that fix. The comment exists to stop precisely this, and it worked — but only because the coordinator read it.** |
| **Two premises in my site brief were refuted** | I flagged `switching_positions.md:263` as a *"noticeably longer bullet"* worth checking. ⚠️ **It is not an outlier: sitewide there are 261 list items over 1,500 characters and ELEVEN are longer, topping out at 15,332 characters in a single `<li>` in `offensive_zone_play.md`.** A corpus-wide pattern with far worse examples, not a regression. And `rule69_clauses.mjs` **generates no diagram** — it exports four clause constants — so my "captions legible, PNG fallbacks present" priority did not apply to it. |
| ⚠️ **CLOSED, with a positive control — both charging negatives HOLD** | *"USA Hockey 607 and Hockey Canada 7.4 carry no division clause"* confirmed by concept search in **seven** independent places, including the Disabled Hockey section (whose only body-checking prohibition **routes to 604, not 607**). ⚠️ **The strongest corroboration is USA Hockey's own parenthetical habit:** its aggressive-infractions list writes *"Rule 604 Body Checking **(Competitive Contact categories)**"* and three lines later *"Rule 607 Charging"* **with no qualifier**. **The book marks which of its rules are classification-scoped, and 607 is not one — that is a positive control ON a negative, not an absence of evidence.** *"None of the four caps it at a minor"* also confirmed, all four books read in full. |
| ⚠️ **A THIRD renderer misquotation class — `and/or` voiced as "and or"** | Measured over the emitted SSML of all 37 documents: **48 occurrences across 14 documents**, led by `body_contact_and_battles.md` (10) and `rules_primer.md` (7) — e.g. NHL text voiced as *"a minor **and or** major penalty"*. ⚠️ **`hand/arm` → "hand or arm" reads harmlessly; `and/or` does not.** Same species as `U13` → *"under thirteen"*. **The general class — ANY substitution the renderer applies inside a quoted span — has never been censused, and no checker sees any of them.** |
| ⚠️ **A DIVERGENCE THE CORPUS HAD BACKWARDS — Hockey Canada's icing exception is WIDER, not the same** | `defensive_zone_coverage.md:683` said *"Where 6.7(d) does apply it carries the NHL's three exceptions."* **It does not.** HC **6.7(d)(i)(3)** (`hc_layout.txt:3965-3974`): *"When a penalty or penalties have been assessed to either team, a change of players will be permitted"* — ⚠️ **no on-ice-strength requirement**, where NHL and IIHF 81.4 both require one. **IIHF Situation Handbook 81.6 shows the gap biting**: on coincidental fighting majors, *"does not affect the on-ice strength of either team"*, so the IIHF lets the icing team replace only the penalised player — **while Hockey Canada permits a full change on the same facts.** Corrected. **Nobody had flagged it.** |
| **The broken-skate exception is IIHF 81.4's ALONE — census closed** | Flattened, de-hyphenated `brokenskate` returns **0** in the NHL (both extractions), USA Hockey rules, the USA Hockey Casebook, Hockey Canada (both extractions) and both Situation Handbooks. In the IIHF books it returns **one** hit each in v1.0, v1.1 and the base file (81.4 only) and **two** in 2026-27 — the second being the Appendix pilot rule. ⚠️ **My open question about a fourth copy in the 2025/26 edition is CLOSED: there is none.** |
| ⚠️ **My twenty-seventh refuted brief, and it was a claim about the corpus rather than about a book** | I told an agent *"the Hockey Canada scope is NOT yet in any of the three files."* ⚠️ **It was already in two of them** — `defensive_zone_coverage.md:683` verbatim and `switching_positions.md:205`. Only `goaltender.md` lacked it. **I asserted a corpus-wide absence without grepping the corpus**, which is the same failure as quoting a sentence I had not read. |
| **The NHL states the bar twice too** | `nhl_rules.txt:8624-8631` (81.4) and `:8723-8733` (82.1) — **both copies carry the same three exceptions.** ⚠️ **So the double-statement is NOT the divergence; the fourth exception is.** Worth knowing before anyone reports the NHL's repetition as a parallel conflict. |
| **`hc_layout.txt:3977` — `6.7 (e)` scopes HYBRID ICING the same way** | Same categories, same opt-in for Senior. ⚠️ **I censused the corpus for this immediately and it is CLEAN** — every site tying hybrid icing to Hockey Canada carries the scope. **Recording the negative result so nobody re-runs it.** |
| ⚠️ **And my census threw one false positive, which is the eighth this round** | My pattern flagged `rules_primer.md:905` as stating hybrid icing bare. **It is about puck-over-glass and does not mention hybrid icing at all.** ⚠️ **CLAUDE.md's rule held again: *a coordinator census is a place to start looking, never a list to work from.*** Reading the hit took ten seconds; a sweep would have "fixed" a correct sentence. |
| **The IIHF states the icing-substitution exception list THREE times, not twice** | Third copy at `iihf_rules_2026-27.txt:11355`, in the **Appendix — Developmental Rules for Piloting**, attached to a **different offence** (an attacking-zone retreat rule triggered when the puck crosses the blue line), listing **four** exceptions including the broken skate. ⚠️ **It is a pilot rule for a different infraction and must NOT be written into the icing account.** Recorded so nobody rediscovers it as a contradiction. **The same search was not run on the v1.1 book, so a fourth copy there remains unexcluded.** |
| ⚠️ **A facts value that permitted what both books forbid — one word** | `switching_positions.md:248` read *"NHL 5.3 and USA Hockey 203(d) except only **an** incapacitated goalkeeper."* ⚠️ **Both books require ALL of them**: NHL 5.3 *"Except when **both** goalkeepers are incapacitated"*; USA Hockey 203(d) *"Except when **all** goalkeepers are incapacitated."* Voiced alone, the old value told a listener to put the pads on when the starter goes down **with the backup on the bench** — which neither book permits. **Fixed.** ⚠️ **The block is at the 11-value hard maximum, so it could not have absorbed a correcting fact; the fix had to fit inside the existing one.** |
| ⚠️ **A comprehension CHECK that encoded the defect it was testing** | `switching_positions.md:468-470` asked *"What does **the rule** actually permit, and what are **the two ways** a team may legally carry on?"* — *the rule* unnamed, *the two ways* being USA Hockey 203(d)'s pair verbatim, presented as one universal answer. **Voiced with no book anywhere in it.** ⚠️ **Check-yourself questions are a layer nobody has audited: a question can presuppose a false premise while every answer in the body is correct.** |
| **IIHF Situation 8.9 is PERMISSIVE where USA Hockey 203(d) is MANDATORY** | 8.9: a team *"**may** dress any one of their eligible registered skaters as a goalkeeper"*, with no prohibition behind it. 203(d): *"the team **must** immediately appoint…"*, behind a bar. ⚠️ **The corpus had called these *"the same administrative route"*** — a coaching inference stated as a rules equivalence. Fixed: *"under the IIHF book there is no prohibition to be excused from in the first place."* |
| ⚠️ **I PUT A QUOTATION IN A BRIEF THAT DOES NOT EXIST IN THE CORPUS** | I briefed an agent that the corpus says *"USA Hockey is the only one of the four whose lowest tier does not eject"* and told it **not** to "fix" that sentence. **The sentence does not exist.** `rules_primer.md` says *"USA Hockey is the only one of the four that **lets you finish the game**"* — which is correctly scoped and which 608(a)'s minor-plus-misconduct bears out. ⚠️ **This is non-negotiable 1 breached in a brief rather than in content**: I invented quoted wording to describe a claim I had only seen a census hit for. **The agent caught it by opening the file.** ⚠️ **A brief is not exempt from the fabrication rule, and a quotation in a brief is MORE dangerous than one in content, because no checker reads briefs.** |
| ⚠️ **THREE SITES AGREEING ON A VALUE NONE OF THEM HAD CHECKED** | *"About a second and a half"* described a **1.7 s** gap in `defender.md`, in `content_style_guide.md`'s owner row, **and** in `project/pilots/keyfacts_pilot_defender.md` — simultaneously. ⚠️ **This was not a copy going stale.** Both operands were printed in the same clause at every site: **a reader who subtracts 49.3 − 47.6 gets 1.7 and was told 1.5.** It is 1.7 on both rounding routes (unrounded 49.2602 − 47.6072 = 1.6530). **All three corrected, and the guide row now names the wrong phrasing explicitly so a fourth site cannot reintroduce it.** |
| **A brief correction on the Neurotracker figures** | I told an agent the paper gives *"three values for one statistic"* — −.40, −.375 and −.38. ⚠️ **Wrong: −.375 and −.38 are the SAME value at two precisions.** The real fault is that **the abstract's −0.40 is neither of them**, and that the abstract **omits games played entirely while reporting a significant PM/Game the table shows as p = .11.** The disclosure now says that. |
| ⚠️ **A misconduct DURATION that is not a fixed number** | An agent caught itself writing *"the 10-minute misconduct USA Hockey's 608(a) attaches."* **USA Hockey 404(a)** (`sources/usah.txt:2490`) qualifies it: *"a period of 10 minutes, **or the designated misconduct penalty time**"*, with a Note letting affiliates reduce it to **6:00 or 8:00** for shorter periods, *"(Except for Adults)"*. ⚠️ **Nobody has censused whether the corpus states "10-minute misconduct" bare anywhere else.** |
| **Independent officiating-side corroboration of the IIHF edition split — new** | Situation Handbook 76.21 reads *"warned"* in v1.1 (`:6262`) and *"removed"* in 2026/27 (`:6306`); Situation 76.23 the same. **The split is visible in the handbook as well as the rulebook**, which is stronger evidence than either alone. |
| ⚠️ **An agent misread the git history and drew a trust conclusion from it** | Its report closed: *"another agent committed to `main` mid-session (`6d253d8` → `1c12034`) and left modifications in this file, so a clean checker run today proves less than it looks like."* ⚠️ **`1c12034` is this session's own round-58 commit; no other agent has committed anything, and HEAD has not moved.** Its *conclusion* was right for a different reason — checkers ARE provisional while agents are live — **but it reached a correct conclusion from a false premise, and the false premise would have been load-bearing if the conclusion had gone the other way.** |
| ⚠️ **The traceability pass keeps coming back clean, and that is not reassurance** | The agent's own words, reported plainly: *"this pass keeps coming back clean, and it is not reassurance — **five of the nine defects above were traceable, correctly labelled, correctly cited, and still wrong aloud.**"* ⚠️ **`check_facts.py` passes on every one of them.** The defect is not in the relationship between the fact and its section; it is in the fact as a standalone spoken sentence, and **no mechanical check in this repository can see it.** |
| **What no text on disk settles about Situation 38.20** | 38.11 turns on a **glove pass to a teammate leading directly to a goal**; 38.20 says only that a draw *"won… by using their hand"* is challengeable. ⚠️ **Whether a hand-won draw with no glove PASS qualifies is answered nowhere in either rulebook or any of the three handbook editions.** Recorded rather than guessed. |
| **The 76.5-vs-38.20 tension is real, unresolved, and correctly disclosed** | 76.5 sends the takers' hand play to Rule 67.2 *"until such time as a third player… has at least touched the puck"* and reaches Rule 79 only *"[o]nce the face-off is deemed complete"*, while **both** 38.11 and 38.20 apply Rule 79 to the draw itself. **Nothing on disk resolves it.** Attacked this round and it holds — **do not strip this disclosure.** |
| **A book quirk worth knowing before the next citation check** | The IIHF Situation Handbook cites its own rulebook as *"Rule 38.2 **(b)**"* — lower case — where the **rulebook prints the clause as (II)**. A citation check keyed on the rulebook's numbering will read the handbook's own cross-reference as wrong. |
| ⚠️ **A safety finding that was ALREADY FIXED — `sources/README.md` and the crt6 extraction** | The pass reported as a major that `sources/README.md` should record `crt6.txt` as a failed extraction. **It already does, in three places** — `:44` (with the InDesign/`pdffonts` trap, both byte counts, and *"Two agents and a coordinator drew a false negative from that zero"*), `:680`, and the ratio table at `:725`. ⚠️ **The agent inferred the gap from the 1,535-byte file without opening the README that documents it.** Recorded not as a criticism but as the pattern's mirror image: **a reviewer reasoning from an artefact to a conclusion about the record, without reading the record.** The same shape as a coordinator census matching the repair rather than the defect. |
| **CRT6 page 694 is not on disk, and nothing has ever read it** | `sources/crt6.pdf` is byte-identical in size to the England Ice Hockey redistribution — **the two TOOL pages copied under licence, 692–693, not the full journal item.** Crossref and Europe PMC both give the article as **692–694**. Nothing the corpus quotes comes from 694, so this is completeness, not a defect — ⚠️ **but it means nobody can rule out that the article's back matter qualifies the tool in a way the two tool pages do not state.** |
| **`md_to_speech.py` does not handle `🇺🇸`** | Only `🇬🇧` is mapped. Nothing in `content/` uses the US flag today; an agent introduced one, the dry-run caught it, and it was removed. |
| **`.callout-warning` colours only its FIRST paragraph** | `.callout-warning > p:first-child strong` reaches nothing in a later paragraph or list item, and `markInlineWarnings` skips the whole callout as already-warning-coloured. **3 of 24 glyph sites on one page render at plain body colour.** ⚠️ **The glyphs must NOT be deleted to tidy this:** `md_to_speech.py` uses `important = \"⚠\" in text` to prefix the spoken unit with **'Important.'**, so removing a glyph silently removes that from the audio. Fix belongs in `global.css`. |
| ⚠️ **`astro preview` binds IPv6 ONLY** | `curl 127.0.0.1:4322` fails; `localhost:4322` works. Cost two reviewers time. Environment fact, recorded so the third does not rediscover it. |
| **A `zone` polygon drawn 3.14× its definition passes EVERY gate this project has** | `check_geometry.py` validates named **points** — its only slot assertion is that the slot's x exceeds the top of the circle. `check-arrivals.mjs` **never reads `zones` at all.** ⚠️ **So the high-slot defect was invisible to every mechanical check, and was found only by a reviewer comparing two polygons in a table.** No checker covers zone polygons against their owner document's definition. **That checker does not exist and would be cheap.** |
| ⚠️ **C3/C8/C11 — a record can satisfy a gate and still not cover the work** | Three failures found together, and each is a different shape. **C8:** two headline criticals (76.5 at a faceoff; IIHF 101.1's two provisos) were in the **commit message** and **not in `project/reviews/`** — *a commit message is not a record*. Now entered. **C3:** the last dimension table cites `--self-test` at **180** and **5,138 facts** against a staged **188** and **5,160** — *a dimension table goes stale the moment work continues past it*. **C11:** the last wave included **merges, splits and renumbering**, not repairs confined to a finding, which **voids the terminating clearance**. ⚠️ **The generalisable check, which takes one line and which nothing else in the gate performs:** for each staged `content/` file, is its basename named in a **staged** record? It found six. |
| ⚠️ **TIER 1 — NHL/IIHF 81.4's THREE substitution exceptions are absent from 17 sites, 13 of them facts values** | The rule's own next sentence: *'**However**, a team shall be permitted to make a player substitution to replace a goalkeeper who had been substituted for an extra attacker, to replace an injured player, or when a penalty has been assessed which affects the on-ice strength of either team'* (`nhl_rules_layout.txt:7322-7330`). **Prohibition and exceptions are two consecutive sentences of one rule.** ⚠️ **Four documents contain the exception list NOWHERE AT ALL** — `defender.md`, `goaltender.md`, `winger.md`, `scanning_and_anticipation.md`. **The loss is an ENTITLEMENT: a team with an injured player on the ice for its own icing believes it must leave them there.** ⚠️ Worst in `goaltender.md`, which states the bare prohibition **twice inside its own 6-on-5 passage** — the exact situation the first exception is written for (confirmed in the rendered audio). **`center.md:595` fits all three plus the IIHF divergence inside the 300-char budget and is the model.** All four dispatched. |
| ⚠️ **RETRACTED — `scripts/check_chunk_tails.py`'s premise was FALSE** | It was built believing a chunk is a separate audio file a listener might never open. **`AudioPlayer.astro:11` plays ONE mp3 per document** and `md_to_speech.py` chunks only to fit Polly's per-request limits, then **concatenates**. A boundary is a seam inside one continuous file. ⚠️ **The row below at 'POSITION IN A CHUNK IS IRRELEVANT' already said so, from two independent agents, before the tool was built.** The defects it surfaced are real — they fail the ordinary standalone test — but **every severity ranked on 'the next file' is over-ranked.** Re-rank on the standalone reading alone. Also: **only a `##` heading opens a chunk, never `###`** (`md_to_speech.py:2451`), so a section split can never move a boundary on purpose. |
| ✅ **CLOSED 4 Sep 2026 — STALE, and the line number was wrong too** | **The row said `rules_primer.md:856` carries a live false negative claiming *"fend off"* appears *"nowhere"* in USA Hockey.** ⚠️ **Refuted by the agent it was given to, and confirmed independently by the coordinator: the passage is at **`:892`**, not `:856`, and it is ALREADY CORRECTLY SCOPED** — *"appears nowhere in its **playing-rules volume**"*, followed immediately by *"⚠️ **USA Hockey does write that permission — in its *Casebook*, not its playing rules.**"* with Standard of Play Situation 6 quoted. **`:1049` carries the same scoping in the trailer.** ⚠️ **The repair had already been made and the row was never retired — so the row would have sent an agent to "fix" correct text.** |
| ⚠️ **A POINTER CREDITS `goaltender.md` WITH A LIMB IT DOES NOT HOLD — caught before it propagated** | A repair to `forechecking_systems.md` added a pointer naming `positions/goaltender.md` as holder of the four-book position on contact with a goaltender, and the repairing agent flagged that it had **not confirmed the USA Hockey limb is there.** ⚠️ **Measured: it is NOT.** `goaltender.md` holds **625(b)** and **625(a)(8)** but **no 607(d), no 607(c), and not Note 1's *"any accidental or unavoidable contact… shall be penalized under the Interference rule"*.** **The pointer must either be narrowed or the owner must gain the limb.** ⚠️ **This is the check-the-owner-both-ways failure the style guide records for `special_teams.md` and USA Hockey 624(b)(1) — and the only reason it was caught is that the agent named the check it had not run.** |
| ⚠️ **A BRIEF ERROR OF MINE that would have sent a verifier to the wrong table, in both editions** | I told an agent IIHF Appendix IV **Table 8** is *"majors based on the Referee's judgement"*. ⚠️ **Wrong: in v1.1 that is Table 7, and v1.1 has no Table 8 in that sequence at all.** ⚠️ **Worse, in the 2026/27 book the automatic-versus-judgement distinction is GONE from the appendix entirely** — the merged Table 5 carries only *"MAJOR ONLY"* / *"MAJOR + GMP"* columns, so **under the current book the rule text is the only record of it.** **Never cite Table 8 for this. The agent caught it and said a verifier relying on my numbers would have read the wrong table in both editions.** |
| **The five 69.1 chunk-terminal values — read, all CLEAN, no edits** | All five tell the truth standing alone. ⚠️ **All three 69.1 values reproduce the rule's DISJUNCTIVE limb** — *"move freely in the crease **or** defend the goal"* — and **none imports 69.3's conjunctive test or its duration threshold**, which was the specific conflation risk. Each carries its book as a citation. The underlying scope claim was re-verified in all four books rather than inherited: IIHF 69.1 does carry the positioning limb; USA Hockey has no goaltender-vision provision (two `screen` hits, neither relevant); Hockey Canada's two goaltender-view references are **both crease-scoped**. **Recorded so nobody re-derives it.** |
| **`check_rule_scope.py`'s 69.1 divergence — censused, CLEAN** | The tool flags three units citing **69.1** while naming **only USA Hockey**, which looked wrong because 69.1's positioning ground is the NHL's and the IIHF's and USA Hockey does not run its premise. ⚠️ **All three are CORRECT** — each says so explicitly (*"USA Hockey does not run 69.1's premise — 625(b) bars a goal with an attacking player in the crease whoever scored…"*), so naming one book is right because the unit discusses one book. **The tool's own documented false-positive mode, behaving as designed. Recorded so nobody re-finds it.** |
| ⚠️ **TIER 1 — `forechecking_systems.md:546` states LENIENCY NAKED in the extraction layer** | Found by the commit gate running a census its remit did not require. The voiced value `Rule: That onus is weighed, not absolute — NHL Rule 41.1 lets the referee consider whether the opponent made themself vulnerable and whether the check was avoidable` cites **only the NHL** and carries **no counterweight**, while the owner's equivalent block carries `Never: Rely on that balance` and names all four books. The counterweight IS in this document's body at `:561` — **body ✓, block ✗**, the exact layer-test shape. ⚠️ **Voiced alone, this tells a listener the boarding onus is negotiable.** Pre-existing, so no gate would have caught it; it is not in the round-55 diff. |
| ⚠️ **A brief that described work ALREADY IN HEAD — the fourth this round** | `body_contact_and_battles.md` was dispatched to carry IIHF Situation 60.13 into the file. **The material was already there and already committed.** The agent verified it independently anyway and **found a defect inside it** — see the next row — so the wave was not wasted, but the brief's premise was false. ⚠️ **Same shape as the three stale rows already recorded: a row is a claim, and re-measuring before briefing is cheaper than the agent discovering it.** The brief's Foreword line numbers were also wrong (it gave 8-9 and 13-14; 13-14 is the *first* quote). |
| ⚠️ **OPEN — *"normal height of the shoulders"* may INVERT a four-book divergence the corpus states** | USA Hockey 621 tests *"the **normal** height of the opponent's shoulders"* and Hockey Canada 9.5 *"the **normal** height of the shoulders"*; IIHF 2026/27 and the NHL measure against *"the height of the opponent's waist"*. `body_contact_and_battles.md` says the first two write **no waist floor** and that a crouching opponent is **protected outright**. ⚠️ **If *"normal height"* means the player's STANDING shoulder height, those two books are LESS protective of a crouching player, not more — and the document's stated reason is backwards.** The competing reading is that the word exists to stop a striker claiming the stick was legal because the opponent happened to be low, i.e. a floor **under** the opponent. ⚠️ **Neither book defines it and the USA Hockey Casebook has no crouching Situation** — `crouch`, `bent over`, `bending over`, `bent down`, `kneel` all return nothing. **Casebook 621 Situation 1 rescues the conclusion in practice** (*"If the stick makes contact with the head area, the Referee must assess the penalty"*) **even if the reason is wrong — and that distinction is the whole finding.** Hockey Canada's Interpretations under 9.5 and 7.6 are **unenumerated**. **✅ RESOLVED — see the rows below.** |
| ⚠️ **ELEVEN OF THE 37 DOCUMENTS HAVE NO ` ```facts ` LAYER — so NO MECHANICAL INSTRUMENT READS THEIR SUMMARY LAYER AT ALL** | Measured 2026-09-01, `grep -c '^```facts'` over `content/`: **26 documents carry blocks, 11 carry none.** The eleven: `rink_map_and_glossary` · `rules_primer` · `uk_rules` · `getting_started` · `conditioning_and_recovery` · `equipment` · `how_to_watch_hockey` · `mental_game` · `practice_and_development` · `team_play_and_culture` · `reading_ice_hockey_diagrams`. ⚠️ **CORRECTION, made before this row was an hour old and left visible on purpose:** the first draft said the layer test is *unaskable* in these eleven. **That is wrong.** All eleven carry **both** a Key Takeaways and a Common Mistakes section — so *body ✓ / summary ✗* is perfectly askable there, **by a reader.** ⚠️ **What is actually missing is the INSTRUMENT:** `check_facts.py` sees only ` ```facts ` blocks, so in these eleven **no checker measures a summary layer, counts it, or caps it** — ⚠️ **though not *nothing* reads them: `check_absolutes.py` scans all 37 documents and is the one instrument that does reach these files, constraining exactly the unscoped prohibition a summary layer is most likely to get wrong. A second draft of this row said no instrument read them at all, and an agent working inside one of the eleven refuted it** — — the caps, the `HARD_MAX`, the `--hedges` dropped-exception pass and every count in this plan simply **do not apply to 11 of 37 documents.** ⚠️ **Note what is on the list:** the glossary twenty documents link to, the rules primer, the British rules document, and the equipment document — **four of the corpus's heaviest rules-and-safety files.** `check_facts.py` printing *"26 docs"* has always been read as a scope statement; **it is also a blind-spot map, and nobody has read it as one.** ⚠️ **And the near-miss is the lesson:** the overstated first draft would have told a future agent that a whole class of defect could not exist in these files. **A census that counts one layer and infers the absence of another is the same error the corpus keeps finding in itself.** |
| ⚠️ **BUT THE SCOPE IS GENUINELY OPEN, AND THE CORPUS MUST STAY SILENT ON IT** | Note 1 sits inside **Rule 6.9(a) — High-Sticking the *Puck***, where the referent is the player's **own** shoulders and the standing reference is *permissive* toward that player. **Hockey Canada nowhere says Note 1 is general**, and its Glossary entry for HIGH-STICKING carries **no possessive at all** and no definition of *"normal"* (`hc_layout.txt:666-669`). **USA Hockey defines *"normal"* nowhere** — its only two uses are both inside Rule 621. ⚠️ **So whether Note 1 reaches 9.5(a) is an inference, not a ruling. Do NOT write that "normal height" means standing shoulder height under USA Hockey 621 or Hockey Canada 9.5.** *"The books do not settle this"* is the correct outcome, and inventing precision here is how round 44 manufactured a divergence that did not exist. |
| ⚠️ **ENVIRONMENT — there is NO superseded USA Hockey or Hockey Canada edition on disk** | `ls sources/*.txt` returns **26** files. ⚠️ **So "was this wording tightened or loosened between editions?" is UNANSWERABLE here for those two books**, and any claim about a change over time in USA Hockey or Hockey Canada rests on nothing this repository holds. The NHL and the IIHF **do** have superseded editions on disk, which is why edition-change findings keep coming from those two and never from the amateur books. ⚠️ **That asymmetry is invisible unless stated, and it looks like evidence of stability when it is absence of evidence.** **The sources table is accurate this round** — 24 rows plus the two deliberately-excluded concussion files = 26. |
| ⚠️ **NOT A DEFECT — `and/or` voiced as "and or" is DELIBERATE, documented and must not be "fixed"** | Handed back as a renderer observation. **It is by design.** `md_to_speech.py` `LEXICON` carries four `and/or` rows above the general `("/", " or ")` `SYMBOLS` row, with the reasoning written out: the general row made it **"and or or"**, and *"'and or' is how the construction is read aloud, and it keeps both readings open, which is what the source means."* ⚠️ **It sits in the IIHF Rule 42.1 charging definition and the USA Hockey spinal-impact symptom list, where whether the limbs are conjunctive or disjunctive is safety-critical.** Two neighbouring rows exist for the same collision (`plus/minus` → *"plus minus"*, `NHL/NHLPA` → *"NHL and NHLPA"*), and a self-test asserts all of them. **Recorded so the next reader does not open it as a bug.** |
| ⚠️ **A CLAUSE I BRIEFED THAT WAS RIGHT TO BE DECLINED — *"with no warning"* is CONTESTED** | My draft bullet asserted the British neck-protector mandate applies *"at every age including adults, **with no warning**."* ⚠️ **`uk_rules.md` owns this and hedges it in terms: *"The two British documents do not agree on the warning, and nothing published resolves it."*** IHUK In-House 9.12 says *"No warning will be given"*; **England Ice Hockey R&R 24.6** sets out a warning scheme — *"This counts as a warning to the player and bench, for any further violation … misconduct penalties will be assessed."* ⚠️ **A Common Mistakes bullet is voiced as a standalone `<p>`, so asserting "no warning" there SHEDS THE OWNER'S HEDGE — D8, in a repair whose entire purpose was propagation.** The mandate itself is undisputed across all three instruments; only the enforcement ladder differs. **Also: *"at every age including adults"* is a READING, not the book's words** — In-House 9.12 says *"all players"* and names no age at all. The shipped text quotes the book, then gives the reading. |
| **`sources/` holds NO Hockey Canada PDF — nine PDFs, and Hockey Canada is not among them** | ⚠️ **So the printed page cannot be inspected by eye and every Hockey Canada finding rests on two text extractions.** Where they disagree there is no third opinion. **A scope stated only in a diagram, table image or sidebar that `pdftotext` did not extract is undetectable here.** Also unavailable: **the previous (2024-2026) Hockey Canada edition**, which would show whether the goaltender sentence is new or inherited. |
| ⚠️ **A CONFIRMED NEW EXTRACTION TRAP: `hc.txt:2232` reads `CSAcertified`** | Plain `pdftotext` joined **`CSA-certified` across a line break with no space**, so a grep for the hyphenated form in `hc.txt` returns a **false absence**. `hc_layout.txt:1641` preserves it. ⚠️ **This is the hyphen trap firing in the direction nobody guards against** — the standing advice is *"do not de-hyphenate"*, and here the extraction has already de-hyphenated **and closed the gap**, producing a token that matches neither `CSA-certified` nor `CSA certified`. **Check both extractions for any hyphenated term.** |
| ⚠️ **MY BRIEF CREATED A SECOND SHAPE OF ONE REPAIR — the exact standing row it warned agents about** | The house wording is **"this document has no count *for* it."** I quoted it from memory as **"*of* it"** and shipped that into two waves. ⚠️ **Measured 2026-09-01: 29 pre-existing sites say "for it" across 20 documents; the 11 "of it" instances were ALL created by this round.** **Caught only because an agent measured the corpus instead of trusting its brief and reported the brief was wrong.** ✅ **Seven normalised by the coordinator in `shooting.md`, `puck_handling.md`, `goaltender.md`, `center.md`; the remaining four are with the agent that holds those files. Corpus now 37 / 4.** |
| ⚠️ **AN HONEST DISCLOSURE THAT ASSERTED A FALSE NEGATIVE ABOUT THE WORLD — the class caught in the act this time** | `zone_entries.md` read *"What share of wasted entries that accounts for is **not something anyone counts**, and this document has no figure for it."* ⚠️ **Two claims welded: one about the WORLD, one about the CORPUS.** The second is right; the first is precisely the shape the standing `rink_map_and_glossary.md` row flags — **a false negative written as an honest disclosure becomes protected by non-negotiable 4 and therefore durable.** Narrowed to the corpus-scoped half; **the label *"read it as a coaching observation rather than a measurement"* kept intact.** |
| ⚠️ **THE CASEBOOK PRINTS THAT WEIGHING TWICE, AND NOBODY KNEW** | Rule 603 **Situation 2** at `usah_casebook.txt:11237-11248`, and again as **Situation 19** of the **Standard of Play** material at `:18701-18721`, with *"was the check **necessary**"* in place of *"was the check **reckless**"*. ⚠️ **So the corpus's *"and nothing qualifies it"* was contradicted TWICE over, not once — and the second instance was found only because an agent kept reading after it had already proved the point.** **Recorded because it changes the weight of the finding, not its direction.** |
| ⚠️ **A COUNT IN MY OWN BRIEF THAT WAS WRONG, in the one place I had been careful** | I told three agents that `usah_casebook.txt:14686-14709` has **five lines of page furniture** between Situation 10's question and its discussion. ⚠️ **It has THREE** — lines 14696, 14700 and 14701 — **inside a TWELVE-line gap**, the rest blank. **The warning's substance is right and the `sed`-range method is right; the number was invented from the shape of the gap rather than counted.** **Recorded because this file's whole doctrine is that a number copied or estimated rather than measured goes wrong silently, and here it was the coordinator doing it inside a warning about exactly that.** |
| ⚠️ **MAJOR — a scope sentence told BRITISH readers to discard the only two rows written for them** | `body_contact_and_battles.md`: *"Everything in the table above is North American, and a British reader has no way to map it onto their own game."* ⚠️ **The table is VOICED** (the renderer emits *"The following reads as a list"* and then all fourteen rows) **and the listener has, seconds earlier, heard *"IIHF women's international"*, *"Women's hockey in Britain (EIH or SIHA or BUIHA)"*, *"PWHL"* and *"British junior and men's or mixed hockey."*** ⚠️ **Two of those rows are the ONLY rows written for the reader being addressed, and the sentence tells them to throw both away.** It also contradicted the facts block immediately above it (*"the USA Hockey and Hockey Canada rows above are not yours"* — precise and correct) **and the paragraph immediately after it.** ✅ **Repaired: the age bandings are named as the North American part, and the IIHF row and the two British rows are named as the ones written for the reader.** |
| ⚠️ **Casebook Situation 19 is NARROWER than Situation 2 — and that falsified a trailer claim** | Situation 19's no-penalty example carries a condition Situation 2's does not: the relief applies where *"an opponent **clearly attempted to gain possession of the puck**."* ⚠️ **So even USA Hockey's own relief turns on the checker having been going for the puck** — which **reinforces** the passage's safety conclusion rather than diluting it. ✅ **And it falsified a claim the Rulebooks trailer was making:** that Situation 2 *"carries USA Hockey's only weighing on boarding."* **Corrected to name both.** |
| ⚠️ **AND THE CAP WAS BEATEN WITHOUT TRADING ANYTHING — recorded because it is the first time this round** | The §3 block was at **11/11** and its value already **stated the relief naked at 297 characters**. ⚠️ **Rewritten in place to 298** — no value added, none evicted, no hedge or citation traded. **The room came from *"Casebook Situation 9"* → *"Situation 9"* and *"goalkeeper"* → *"goalie"*.** All three carve-outs, the goal-void and the minor survive. ⚠️ **Every other cap encounter this round ended in "report and change nothing." This one did not, and the difference was that the value contained two words carrying no information.** |
| ⚠️ **A TRUNCATION THAT FAILED SAFE WAS COMPLETED ANYWAY, and the reasoning is the point** | The strict limb had been cut at *"unnecessarily hit"* — **exactly where the book's limiting condition begins**: *"…with a degree of force that caused them to be thrown into the boards excessively."* Cutting there makes the strict limb read **broader**, so it erred safe. ⚠️ **It was completed regardless: a quotation cut at the point where a limiting condition begins is a QUOTATION defect regardless of which way it errs.** **Recorded because "it fails safe" is the argument that keeps a truncation alive, and it is not sufficient.** |
| ⚠️ **MY BRIEF CLAIMED A MISSING COMMON MISTAKES BULLET THAT IS THERE IN FULL — sourced from an earlier pass that had not read the bullet to its end** | I told a reviewer that `forechecking_systems.md`'s Common Mistakes had **no** checking-from-behind bullet, citing an earlier agent that said all sixteen bullets were read. ⚠️ **It is there, with all four books and the correct tiers** — the tail of another bullet, under the sub-heading *"What 'hard' never means:"*, closing *"Treat the onus as yours, whatever your book says about it."* **The earlier pass had not read that bullet to its end, and I relayed its conclusion as a fact.** ✅ **The reviewer read it, declined to add a duplicate, and said so.** **Whether to promote the tail to a standalone bullet is a content-prominence call, not a safety omission.** |
| ⚠️ **TWO SENTENCES DELIBERATELY NOT MERGED, because merging would have NARROWED a scope** | `switching_positions.md`'s neck-guard bullet now cites **England Ice Hockey R&R 24.3** (`eih_rr.txt:1144-1147`) — *"all players at all levels… whilst participating in all on ice activities"* — beside the IHUK quotation. ⚠️ **The two were kept as separate sentences on purpose: England Ice Hockey governs England and Wales ONLY, and merging them would have narrowed the adults-included reading away from Scotland and Northern Ireland.** **Recorded so a later tidying pass does not merge them for style.** |
| ⚠️ **RETRACTED, NOT CLOSED — this row asserted that Pagé's body and trailer *"describe the SAME INSTANT from two directions"* and called the repair *"a PRECISION, not a correction."* BOTH ARE WRONG** | ⚠️ **Refuted by Pagé's own Conclusion 15, which neither brief, nor the trailer, nor this row quoted:** *"The faster skaters recorded smaller angles at the knee than the slower skaters **both during the recovery period AND prior to the initial thrusting action.**"* — **Pagé lists them as TWO SEPARATE MEASUREMENTS.** ⚠️ **And my "correlation between two legs" was wrong too: Pagé writes *"of the same leg"* explicitly. It is ONE LEG AT TWO MOMENTS, and the correlation is between FAST and SLOW SKATERS.** ⚠️ **Three successive framings — "one instant seen twice", "two legs", "a precision not a correction" — and the right answer was none of them. Each overcorrected the last, and the load-bearing passage sat unread in the primary the whole time.** **See the rows below for what is actually true and what it broke.** |
| ⚠️ **RETRIEVAL FACTS THAT COST TIME TO REDISCOVER — record them here, not in `content/`** | ⚠️ **`iso.org` returns 403 to a bare fetch AND to a plain browser user-agent, and 200 only with `Accept`, `Accept-Language` and `Sec-Fetch-*` headers.** ⚠️ **`psycnet.apa.org` / `doi.apa.org` returns HTTP 200 with a ~1 KB Imperva bot-challenge body — a bot wall, NOT a paywall and NOT an absence.** ⚠️ **`eur-lex.europa.eu` returns HTTP 202 with an AWS WAF JS challenge.** ⚠️ **`web.archive.org`'s CDX API 504s on a domain-wide filter over `nhl.com` at both 120 s and 180 s — too large, origin-slow, not blocked.** `mojeek.com` and `ecosia.org` 403; DuckDuckGo Lite 202 CAPTCHA; `standards.cencenelec.eu` HTTP 500. **Sage and Taylor & Francis both 403 bare and 200 with a browser UA.** |
| ⚠️ **THE REORDER HALF WAS LIVE IN TWO DOCUMENTS, exactly as the plugin's own comment predicted** | ⚠️ **`uk_rules.md`'s *"Scope note on Scotland and university hockey"* — a NEGATIVE-EXISTENCE disclosure (*"No Scottish Ice Hockey playing-rules or medical-cover document was reached"*) — sat inside the CLOSED box and ABOVE three visible notes.** `rules_primer.md`'s *"Scope of one negative — the face-off hand bar"* sat above `Unverified:`. **Both now in document order.** ✅ **Order safety checked as required: no promoted paragraph contains *below* / *follows* / *the note that…*; the corpus's only positional reference is `faceoffs.md`'s *"the edition note that follows it"*, and `faceoffs.md`'s built HTML is BYTE-IDENTICAL before and after.** |
| ⚠️ **AND ONE CANDIDATE WAS NOT A TRAILER PARAGRAPH AT ALL** | I flagged `A note on verification:` in `puck_support_and_spacing.md` as buried because *"the leading `A ` blocks the `note on` alternative."* ⚠️ **It sits at line 690; the `*Sources — retrieved…*` line is at 694. `NOTE_START_RE` never sees it, and in the browser it renders as VISIBLE BODY PROSE** (`inDetails: false, inNotes: false`). **Adding the alternative would have been a no-op.** ⚠️ **My census treated everything after the first `*Sources —*` match as trailer, and got the boundary wrong by four lines.** |
| ⚠️ **MY ISO RETRIEVAL CLAIM WAS WRONG, AND AN AGENT REFUSED TO WRITE IT DOWN** | I relayed that `iso.org` *"returns 403 to a bare fetch AND to a plain browser user-agent, and 200 only with `Accept`, `Accept-Language` and `Sec-Fetch-*` headers."* ⚠️ **Measured: bare 403 (5,437 bytes), plain browser UA **200** (87,124 bytes) — no extra headers. Reproduced on a second ISO URL: bare 403, plain UA 200, 81,429 bytes.** ⚠️ **The agent's own words: *"Had I recorded the relayed detail as a retrieval fact it would have been a fabricated one."*** **It also judged that even a corrected version is project-tooling narration and belongs in the link baseline, not in `content/` — which is right.** |
| ⚠️ **AND MY "INTERNAL INCONSISTENCY" CLAIM POINTED AT THE WRONG FILE** | I told an agent that `equipment.md`'s soft-404 wording was inconsistent *"because its Hockey Canada note does it correctly."* ⚠️ **`equipment.md` contains NO Hockey Canada soft-404 note — no occurrence of "HTTP 200", "soft-404" or "404 page in the body" anywhere in it. The correct treatment lives in `getting_started.md`.** **The repair was still right; the stated reason was not, and the agent declined to write a cross-file reference that would have been false.** |
| ⚠️ **A URL PATH SEPARATOR IS VOICED AS THE WORD "OR"** | `usahockey.com/playingrules` is spoken *"usahockey dot com **or** playingrules"* — the general `("/", " or ")` `SYMBOLS` row catching a URL path. ⚠️ **It sounds like two alternatives.** Census: **6 bare `domain/path` tokens in prose across 4 files** (`bnq.qc.ca/404.html` ×2, `api-web.nhle.com/v1` ×2, `register.hockeycanada.ca/register`, `eiha.co.uk/regulations`), plus the trailer instances. **Small blast radius, clear defect, and the `LEXICON` / `Rule` pattern for exactly this already exists (`CAN/BNQ` → *"C A N slash B N Q"*).** **Not built this round; the rule must sit ahead of `alphanumeric-code` and `identifier-digits` so it claims the whole token.** |
| ⚠️ **A SUMMARY LAYER WAS DELIBERATELY LEFT EMPTY, and the reasoning is the useful part** | `scanning_and_anticipation.md`'s Common Mistakes and Key Takeaways were **not** given the crease counterweight. ⚠️ **Neither mentions the crease at all** — the document's summaries are twelve *scanning* failures and eleven *scanning* principles, and the crease appears only as a subsidiary rules note inside one section. **The owner of that summary entry is `time_and_space.md`, which carries it.** ⚠️ ***"A caveat with no hazard beside it is not a layer-test pass — it is padding."*** **Recorded because the layer test is easy to run mechanically and wrong to apply mechanically.** |
| ⚠️ **A GATE THAT APPLIED ITS OWN TERMINATING RULE RATHER THAN BLOCKING REFLEXIVELY** | C11 voids a clearance when a repair does more than the finding required. ⚠️ **The gate checked and applied it in the corpus's favour:** both block-2 repairs are **confined to the finding**, re-derived from primary text, and recorded; **neither moves, merges, splits or renumbers anything** — the scanning value was reworded **in place** at an unchanged 11-value count, the glossary counterweight **appended** with nothing removed. **Clearances stand.** **Recorded because a gate that only ever escalates stops being read.** |
| ⚠️ **BOTH OF MY SUPPLIED WORDINGS WERE REFUSED, AND BOTH REFUSALS WERE RIGHT** | ⚠️ **(1) *"…ready to push without a pause"* would have shipped a FRESH CONTRADICTION** — it asserts no glide on that blade, while the same paragraph ends *"ready to become the next glide leg or the next push"* and **the very next subsection is *The glide***. **That is Pagé's fast-skater behaviour, not this corpus's model.** Replaced with *"not out in the air before it lands"*, which fixes the landmark without asserting a phase the document contradicts four lines later. ⚠️ **(2) *"— on the SAME fourteen skaters, and the SAME correlational comparison"* was to go in paragraph 1, which PRECEDES paragraph 2 in both page and audio. *"The same"* had nothing to refer to.** **Written self-contained instead.** ⚠️ **I have now supplied wording twice in this file and been wrong twice — once creating the defect being fixed, once nearly creating another.** |
| ⚠️ **MY REASON FOR A CORRECT CALL WAS WRONG, and applied literally it would have forbidden its own fix** | I said to drop *"rather than holding one angle all the way through the swing"* because *"Pagé compared SKATERS, not INSTANTS."* ⚠️ **That holds for Conclusion 15 but NOT for the thesis: at p.48 Pagé explicitly locates a within-stride minimum.** ⚠️ **Applied literally, my rationale would have forbidden the replacement wording I asked for in the same brief.** **The clause is unsupported for a NARROWER reason — it asserts a *progressive closing through the recovery swing*, a time course Pagé never measures.** **The call was right and the reasoning was not, and the two are worth separating.** |
| ⚠️ **ENVIRONMENT — the DSpace API returns HTTP 500 with a "Site Maintenance" HTML PAGE, intermittently** | The first `bundles` call returned **HTTP 500 carrying a Scholars Portal *"Site Maintenance"* HTML body, not JSON — while the item endpoint returned 200 in the same second.** It succeeded on retry with nothing changed. ⚠️ **A future agent that treats one 500 as an absence will wrongly conclude Pagé 1975 is unreachable — and the corpus's whole knee-angle section now rests on it.** **Both TEXT bitstreams are byte-identical: 92,348 bytes, SHA-256 `cc337a33…a6ad57d2`.** |
| ⚠️ **THE `protected outright` CLAIM WAS IN TWO LAYERS AND MY BRIEF NAMED ONE** | Body bullet **and** the §10 rule-set comparison table's **IIHF column cell**: *"the 2025/26 (Version 1.1) book has it at neither, and under that one a crouching opponent is protected outright."* **Both repaired.** ✅ **Layer test run: `rules_primer.md` has ZERO ` ```facts ` blocks, its Common Mistakes version was ALREADY CORRECT** (no *"outright"*, and resting on the waist floor and 60.2 rather than on the wrong reason), **and Key Takeaways carries no version of it.** |
| ⚠️ **A PROVENANCE LIST THAT CONTRADICTED ITSELF AND UNDER-STATED WHAT HAD BEEN READ** | `rules_primer.md`'s trailer listed Rules *"40 to 59"* and *"20"* as **not re-read**, while **the same paragraph** said the whole of **Rule 46** and **20.4/20.5/20.6** HAD been compared. ⚠️ **Rule 46 is inside 40–59 and Rule 20 was named flat — so the disclosure was wrong in the SAFE direction, which is why nobody caught it.** And **`82.1` appeared in the *"word-for-word identical"* sentence but not in the declared compared list**, while the body cites `82.2(V)`. **Seven rules re-compared line-range by line-range; all identical bar 20.6's `46.5`→`46.13`. Both lists corrected.** |
| ⚠️ **THREE MORE ROUTING-PREVALENCE SHAPES, AND TWO WERE FORMS NOBODY HAD NAMED** | Beyond the three I briefed: **an appositive** (*"not the two most North American readers are under"*) — the shape predicted after two wrong predictions; ⚠️ **one distributing over THIS DOCUMENT'S READERSHIP** (*"for most readers of this document this is the one that matters"*); and ⚠️ **one distributing over LEAGUES** (*"Most rec leagues outside Britain have no trapezoid at all"*). **Neither of the last two matches any book-name pattern.** ✅ **All six repaired, plus two more: an unsourced *"a good number of Canadian adult leagues"* scoped to CARHA affiliation, and a *"most rec-league penalties"* claim given the label its three identical siblings already carried.** |
| ⚠️ **THE HEDGE IS DOING SAFETY WORK AND MUST NOT BE TRIMMED FOR LENGTH** | The repaired passage states a **penalty floor**: USA Hockey 620(a) has **no bare minor**, and Hockey Canada 7.6 is mandatory *"regardless of the circumstances"*. ⚠️ **A reader who mis-reads the *"normal"* ambiguity as settled in their favour and plans a stick on a crouched opponent is exposed to a minor-plus-misconduct at minimum, and to 7.6(c) / 620(c) MATCH penalties at the top.** **Flagged by the repairing agent for `safety-reviewer`, and recorded here so a future length trim does not reach it.** |
| ⚠️ **A SECOND NAKED RELIEF ONE SECTION UP — a refereeing DISCRETION stated as a CERTAINTY** | `Rule: NHL and IIHF Rule 69.7 permit the goal … — being shoved into a goaltender **does not cost your team the goal**` — the closing clause of its value, voiced alone. ⚠️ **NHL 69.7 says the goal *"**can be permitted**"*, not that it is allowed: *"If, however, **in the opinion of the Referee**, the attacking player was pushed or otherwise fouled…"*** ⚠️ **And 69.1's push relief is CONDITIONAL — *"provided the attacking player has made a reasonable effort to avoid such contact."*** **Both restored, at 296/300.** ⚠️ **The gate's brief had scoped the defect to ONE block; the layer test found this one, with a stronger flattening in it.** |
| ⚠️ **MAJOR — the BODY was wrong about CARHA, and the fact could not have been fixed without fixing it** | The body said *"The one relief is **the same as USA Hockey's**"* — while **the same document, twelve lines up**, calls USA Hockey's *"the **broadest**… no effort proviso."* ⚠️ **Both cannot be true, and CARHA's is the one with the proviso.** ⚠️ **CARHA writes its OWN push-in relief at `carha.txt:3150-3154`, so the old fact MISATTRIBUTED a rule CARHA writes itself.** **66(b) opens at `:3129-3139` with the minor for interference *"by means of their stick or body… by actual physical contact"*.** ⚠️ **So *"body ✓ / facts ✗"* was only THREE-QUARTERS TRUE: for 625(b) the body was sound; for CARHA and for 69.7 the body was itself defective, in one case contradicting another paragraph of the same document.** |
| ⚠️ **AN IN-BLOCK SELF-CONTRADICTION: two values, one block, one chunk, opposite answers** | `winger.md`'s `Never: Stay in the crease after a defender shoves you in… a goal is voided for impairing the goalie by position alone, **whoever started the contact**` — ⚠️ **stated UNIVERSALLY, and FALSE under USA Hockey, where 625(b)'s push-in relief means the goal IS allowed when a defender put you there.** ⚠️ **The very next value in the same block says so: *"its push-in relief is broader."*** **Both voiced in the same chunk.** The body scopes it to NHL/IIHF; the value had lost the flag; `center.md`'s counterpart carries it. ✅ **Repaired at 180/200.** ⚠️ **This is a FLATTENING finding that the push-in omission test surfaced SIDEWAYS — my brief did not anticipate it, and no omission census would have found it.** |
| ⚠️ **THE OMITTED HALF WAS A PROTECTION THE GOALKEEPER HAS, in a section headed *"the protection you have"*** | `goaltender.md`'s Key Takeaway 8 stated the push-in relief and carried the Situation 9 counterweight for the **neighbouring** exception while omitting one for the push-in itself. ⚠️ **Read aloud, the goalie hears that their own defenceman's foul hands the attacker the crease. It does not — 625(a)(8) survives.** ⚠️ ***"In a section headed 'the protection you have', omitting a protection is the omission that matters."*** ✅ **Repaired with an executable tail: *"…so ask for it rather than assuming your own team's foul cost you the call."*** |
| ⚠️ **THE CORPUS'S OWN OWNER HELD THE LAST BARE COPY OF THE RULE THE STYLE GUIDE WROTE ITS WORKED EXAMPLE ABOUT** | `rules_primer.md`'s Common Mistakes read *"You can, **freely**, whenever you are **below** their numerical strength (Rule 81.6) — with the USA Hockey classification restriction **noted above**."* ⚠️ **Body §6 carries BOTH carve-outs. Key Takeaway 3 carries BOTH. The Common Mistakes bullet carried ONE, plus the word *"freely"*, plus a spoken pointer a listener cannot follow — and it is voiced alone in its own `<p>`.** ✅ **Corpus census of the rule: NINETEEN documents state it, and EVERY OTHER SITE carries its carve-outs. The owner's summary layer was the sole survivor.** ⚠️ **Three sites flagged `BARE` by a first regex pass were read and all three were FALSE POSITIVES — including `rink_map_and_glossary.md`'s glossary entry, which says *"may ice the puck freely"* and looks exactly like the defect while carrying both carve-outs and the IIHF position in the same entry.** |
| ⚠️ **NINE DISTRIBUTIONAL CELLS, NOT FIVE — and the one I missed was the only one a note could not have reached** | My brief named five rec-column cells. There are **nine**. The four missed: trapezoid *"Usually no"*, fighting *"nearly always"*, overtime *"Usually none"*, and ⚠️ **offside review, which said a flat `None`.** ⚠️ **`None` asserts that NO recreational league anywhere has video review — a UNIVERSAL, and therefore the only cell a quantifier-word note could not cover.** ⚠️ **The agent's own words: *"Had I worked the five as given, I would have left the worst cell standing."*** ✅ **Softened to *"Usually none"* with the one sourceable fact: CARHA's book contains ZERO occurrences of `video`, `replay`, `camera`, `monitor` or `overturn` — a concept search, not a single-word grep, with the six `review` hits all disciplinary or administrative.** |
| ⚠️ **THE ONE REC BOOK THE DOCUMENT CITES CONTRADICTS ONE OF ITS OWN CELLS** | The cell says faceoff violations are *"often not called at all"*, under a CARHA block whose lead reads *"Where it does apply it bears out most of the column."* ⚠️ **On this it does not.** **CARHA 57(a)** (`carha.txt:2695-2716`) ejects the offending team's face-off taker for encroachment, contact or moving offside before the drop; **57(d)** allows a **minor** for a second violation in the same face-off. ⚠️ **The cell's claim is about OFFICIATING PRACTICE and CARHA's is about THE BOOK — different claims — so the repair ADDS the rule and says so in terms rather than letting a reader conclude rec books have no such provision.** |
| ⚠️ **A RULE CITED ONLY TO THE TOURNAMENT SECTION, so a reader concludes it is tournament-only** | The mercy rule was attributed to *"Section Seven item 16"* — and **Section Seven is headed TOURNAMENT GENERAL RULES.** ⚠️ **It is in the PLAYING RULES too, at CARHA Rule 84(f)** (`carha.txt:3689-3697`), same five-goal spread, same ten minutes, same 3/7/12. **Now cited to 84(f) with Section Seven named as the tournament restatement.** ✅ **And a listener fix in the same edit: `3 / 7 / 12` voiced as *"three or seven or twelve minutes"*, losing which figure attaches to which tier — now spelled out.** |
| ⚠️ **NOT A DEFECT — the IIHF trapezoid cell cites 27.7 and not 1.8, and that is CORRECT** | Checked against the owner, `rink_map_and_glossary.md`, which establishes that **IIHF 27.7 does restate the current 6.80 m / 8.60 m figures — unlike NHL 27.8, which is stale.** ⚠️ **Recorded so the next round does not "fix" it into the NHL's rule against the owner's own finding.** ⚠️ **And a deliberate omission, flagged rather than hidden: the strengthened Common Mistakes bullet does NOT carry NHL 81.6's second paragraph — the *"penalty about to expire"* timing test, under which a puck released BEFORE expiry is not icing. The body carries it; the bullet was not run to a seventh sentence.** |
| ⚠️ **A RENDERER BUG THAT EXILES LABELS TO THE FAR BOARDS — diagnosed exactly, and it is NOT confined to one diagram** | `placeLabels` in `site/scripts/lib/rink.mjs`: when all eighteen fixed offsets collide and no slot exists that is nearer the owner than any other labelled anchor, it falls to a ratio branch maximising `other/mine` — ⚠️ **and that ratio TENDS TO 1 AS DISTANCE GROWS, so the branch drives the label to the far corner of the rink.** **Measured in `breakout-d-to-d`: a label for a player at (−85, 30) drawn at (81.5, −29.2), the OPPOSITE END ZONE, on a 176.71 ft leader line passing 1.47 ft from an opponent's centre against a 2.9 ft glyph radius — straight through an opponent's body.** ✅ **I then censused every leader line in all 112 built SVGs: median 9.20 units, and EIGHT over 30 — `breakout-up` (182.38 and 175.98), `breakout-wheel` (170.86), `nz-left-wing-lock` (54.67), `nz-regroup-d-to-d` (49.02), `dump-flip-over-trap` (39.23 and 31.18), `nz-1-2-2-trap` (30.92).** ⚠️ **Three are ~19× the median.** *Root fix in flight.* |
| ⚠️ **MAJOR — A DIAGRAM THAT CONTRADICTED ITS OWN SECTION, AND ITS OWN MODULE'S STATED RULE** | `breakout-centre-swing` hung `label: 'not your ice'` on **W1 — your own winger, standing on the wall where he belongs.** ⚠️ **A label hung on a glyph with a leader line describes THAT PLAYER**, so it told the winger to leave the wall: the opposite instruction, and one that collapses the breakout the rest of the picture draws. ⚠️ **The section says *"Drifting wide puts you in the **strong-side winger's** ice"* and the diagram's own caption says *"which is the strong-side winger's ice"* — the centre's read, hung on the winger.** ⚠️ **And `breakouts.mjs` states the governing rule 250 lines earlier IN TERMS: *"The labels name the players, not the ice."*** ✅ **Changed to `'the winger'`, matching the sibling `'the centre'`.** |
| ⚠️ **A REAL OVERLAP WITH NO TIEBREAKER, and the corpus now says so** | Pushed into the crease **and** failing to avoid the goalkeeper: `:3154` says *"the goal **shall be allowed**"* and `:3160` says *"it **shall be disallowed**."* ⚠️ **CARHA writes no tiebreaker. Rule 66 was read entire, the whole book searched for conditioning connectives, and the Situations section checked. None exists.** ✅ **The books do not settle it and no resolution was manufactured.** ⚠️ **And the practical instruction survives WITHOUT the inference — `:3156-3160` gives a minor and disallows the goal on its own words — so the corpus never needed the subordination claim.** ⚠️ **Direction: the old text stated the relief as MORE conditioned than the book establishes, the safe direction, which is why it could have shipped.** |
| ⚠️ **THE REPAIR REPLACED ONE MISATTRIBUTION WITH ANOTHER, and the contradicting text was TWELVE LINES UP IN THE SAME DOCUMENT** | The new sentence said *"But CARHA conditions that relief **where USA Hockey does not**."* ⚠️ **Contradicted twice.** **(1) USA Hockey 617(c)(4)** (`usah.txt:4197-4201`) puts the push-in parenthetical in its **FIRST LIMB ALONE** — *"positioned in the crease **(unless physically interfered with…)** **or interfering with the goalkeeper**"* — so USA Hockey's relief reaches **position, not interference**, which is exactly what the sentence called CARHA-specific. ⚠️ **The document ALREADY SAID THIS ITSELF, twelve lines up.** **(2) USA Hockey Casebook Rule 607 Situation 4** (`usah_casebook.txt:11686-11700`), ⚠️ **filed under CHARGING, which is why nobody had opened it** — it writes the effort test in terms. ✅ **Repaired to *"no effort proviso IN THE PRINTED RULE"*, closing with the verified four-book finding: *all four books ask for the effort; they differ in where each writes it and what it buys you.*** |
| ⚠️ **THE 69.7 REPAIR REACHED THE VALUE AND THE BODY AND STOPPED — Common Mistakes still carried it** | It quoted the right words and then glossed them away: *"the goal can be permitted"* — **being shoved into a goaltender does not cost your team the goal.** ⚠️ **Body ✓, block ✓, Common Mistakes ✗ — CLAUDE.md's round-10 pattern exactly.** ⚠️ **And a document grep for the value's wording would NOT have found it: the sentence is worded differently.** ✅ **Confirmed in three books: NHL 2025-2026 `:7263-7269`, superseded 2024-25 identical, and IIHF `iihf_rules_v1.1.txt:5616-5617` / `iihf_rules_2026-27.txt:5711-5712` WORD-FOR-WORD identical to the NHL — so the value's *"NHL and IIHF Rule 69.7"* welding is CORRECT and is not a divergence defect.** |
| ⚠️ **A VALUE CLAIMING *"the only rule of the four"* — and THREE of the four address the play in terms** | Hockey Canada 8.5's value said it *"is the **only rule of the four** addressing an attacker fouled into the goaltender in terms."* ⚠️ **Read aloud that splits into a bare negative-existence claim — and NHL 69.1, IIHF 69.1 and USA Hockey Casebook 607 Situation 4 all address it.** ✅ **What is genuinely distinctive survives and is now what the value says: Hockey Canada alone makes the penalty MANDATORY (*"must be penalized"*) rather than framing it as relief.** **Body carried the same claim and was repaired in step.** ✅ **All six Hockey Canada values verified verbatim against `hc_layout.txt`, with `hc.txt` cross-checked for the hyphenation trap — the `CSAcertified` join is real at `:2232` but none of the 8.5 strings is hyphenated, so both extractions agree.** |
| ⚠️ **BOTH NHL LINE RANGES I CIRCULATED TRUNCATED THE OPERATIVE CLAUSE** | `:7263-7266` **stops before *"the goal can be permitted"* at `:7269`**, and `:7154-7158` is one line short of *"provided the attacking player has made a reasonable effort to avoid such contact."* ⚠️ **Anyone reading only the ranges I gave would have missed the words the whole finding turns on.** **And my *"`grep -i incidental` returns two hits"* returns FOUR — two are *"Coincidental"* substring matches. The conclusion survived; the count did not.** ⚠️ **Third and fourth relayed measurements of mine to fail this round. A line range is a claim.** |
| ⚠️ **AND MY BRIEF CONFLATED TWO AGENTS, WHICH WOULD HAVE COUNSELLED CHANGING NOTHING** | I wrote that round 53's refutation was *"itself relayed"* because *"the census agent did not open Sznajder or Glin."* ⚠️ **That was a DIFFERENT agent. The REFUTING agent refetched and read both in full** — `round_53_the_briefs_were_the_defect.md:783`, and the owner document dates the re-read to 29 August 2026. ⚠️ **Taken literally, my hedge would have told the repairing agent to change nothing.** **A provenance claim about who checked what is a claim, and I got it wrong in the direction that suppresses work.** |
| ⚠️ **AND IT TREATED ONE ROW AS ONE DEFECT WHEN IT RECORDS TWO** | Row 2908 splits the claim: **#4 REFUTED** (*"by the play that produced them"*) and **#3 upheld but MIS-SCOPED** (*"rush goals are counted publicly; nothing classifies them by which coverage failed"*). ⚠️ **My single suggested replacement, applied to both, would have UNDERSTATED the refutation at two sites and OVERSTATED it at six.** **The agent split them and wrote two forms.** |
| ⚠️ **A DISCLOSURE THAT WAS MISLEADING ABOUT ITS OWN PLACEMENT, NOT FALSE — and the renderer inverted the priority** | I briefed `risk_management.md`'s Sources claim (*"flagged as such in the text"*) as **false**. ⚠️ **It was not: the ordering IS flagged, in Key Takeaway 3, which is voiced. The defect was PLACEMENT — the only hedge in audio arrived ~700 lines later.** ⚠️ **And I treated the five-row table as a co-equal carrier of the unhedged ordering. THE RENDERER DROPS THE TABLE ENTIRELY, so the five `Risk:` values were the SOLE audio carrier** — which inverts the priority: the block fix is the safety-critical one and the table caveat is the page fix. ✅ **A `Convention:` hedge now sits AFTER `Read:` and BEFORE the five grades, so a listener is warned before hearing them.** |
| ⚠️ **CRITICAL — A SHIPPED DECISION INVALIDATED IN A BROWSER: at 375px the rec note can NEVER share a viewport with any pixel of its table** | The nine unsourced rec-column cells were fixed by **strengthening the note beneath the table rather than labelling each cell** — on an assumption the deciding agent flagged as *"the single most load-bearing thing I did not check."* ⚠️ **Measured: the §10 table is 17,552px tall — 20.8 screens at 1440, 23.2 at 375. Gap from table bottom to the rec note: 534px at 1440, 1,169px at 375. At 375 they can NEVER be co-visible.** ⚠️ **And the 1440 case is nearly worthless: at best 270 of 17,552 pixels are visible — 1.5% — and the visible fragment is the USA HOCKEY column, not the rec column.** ⚠️ **The cause is ORDERING: the note directly beneath the table is the ~250-word *Home Countries* note, 1,127px tall at 375px, which pushes the rec note 1.55 screens past the table's end.** *Repair in flight.* |
| ⚠️ **CRITICAL — THE STICKY HEADER THAT WOULD FIX THE OTHER HALF IS DEAD CODE, AND ITS OWN COMMENT PREDICTED THIS EXACT DEFECT** | `global.css` defines `.table-scroll--tall thead th { position: sticky; top: 0 }`. ⚠️ **`rehype-corpus.mjs` emits `className: ['table-scroll']` UNCONDITIONALLY with no path to `--tall`. In the built site the string appears in EXACTLY ONE FILE — the CSS bundle — and in 0 OF 47 table wrappers. The sticky header has never applied to any table on this site.** ⚠️ **Measured consequence: the rec column requires `scrollLeft` 513 OF A MAXIMUM 513 — the extreme right — and at that moment the `thead` is 4,636px above the viewport, 6.1 screens.** ⚠️ **The comment above that CSS already said it, and named this column: *"a reader scrolled two columns right is looking at prescriptive text with no idea which rule the row is about — and in the §10 table one of those columns is 'Typical rec / beer league'… Reading a generalisation as if it were the IIHF row is a safety problem, not a cosmetic one."*** ⚠️ **FOURTH TIME THIS ROUND a defect was found already written down beside the code that has it.** ✅ **The sticky ROW LABEL does work — `position: sticky; left: 0` — and must not be broken.** *In flight.* |
| ⚠️ **BOTH HALVES OF THE QUALIFICATION FAIL TOGETHER ON A PHONE** | The reader **cannot see which column they are in** (header 6.1 screens above, sticky rule dead) **AND cannot reach the note that says what the column is** (1,169px below, never co-visible). ⚠️ **Either alone is a usability defect. Together they mean a phone reader can read *"Usually prohibited — non-check leagues are the norm"* with nothing on screen naming the column or flagging it as a generalisation.** **The CSS comment's own words: a safety problem, not a cosmetic one.** |
| ⚠️ **THREE REC-COLUMN QUALIFICATIONS, NOT TWO — at 25px, 1,169px and 60,508px** | My brief said two. **There are three, plus a lead-in above the table.** The third is in the `.verification-notes` panel at the page foot — *"Unverified: the 'typical rec / beer league' column in section 10 remains a generalisation"* — ⚠️ **60,508px below the table. EIGHTY SCREENS.** ⚠️ **And it is arguably the bluntest of the three.** **Nothing is inside a collapsed `<details>`, which is the one piece of good news.** |
| ⚠️ **CRITICAL — A PARENTHETICAL THAT ACTIVELY RETRACTED THE EXPOSURE THREE LINES AFTER THE BODY STATED IT** | `offensive_zone_play.md` read *"(Hockey Canada only — the other three books' tiers are not stated here.)"* — ⚠️ **while the immediately preceding paragraph already quoted Casebook 607 Situation 4's *"major plus game misconduct, or match penalty"*.** ⚠️ **So the defect was never *"the tier is absent"*. It was *"the tier is in exactly one layer, and the next paragraph withdraws it"* — the round-10 shape, visible only to a layer test.** **Meanwhile the facts layer and BOTH summary layers told a USA Hockey reader the tier was a minor.** ✅ **Repaired across body ×2, facts, Common Mistakes and Key Takeaways; the false parenthetical now names USA Hockey's tiers and says honestly that the NHL's and IIHF's are still not stated.** |
| ⚠️ **AND THE BIGGER EXPOSURE IS IN THE PRINTED PLAYING RULES, NOT THE CASEBOOK — my brief looked in the wrong book** | **607(c)** (`usah.txt:3676-3679`): *"**A minor plus a misconduct or a major plus a game misconduct** penalty shall be assessed to a player who body checks or charges a goalkeeper while the goalkeeper is within the goal crease **or privileged area**."* ⚠️ **THERE IS NO BARE MINOR FOR CHARGING A GOALKEEPER.** **607(e)**: *"A match penalty for reckless endangerment may also be assessed."* ⚠️ **And 607(d) Note 1 decides which rule you are under: accidental or unavoidable → INTERFERENCE (a 625(a)(8) minor); any deliberate body contact or check → CHARGING.** ⚠️ **The Casebook Situation I circulated is GUIDANCE ON CHOOSING among 607(c), (d) and (e) — its own question says so — not the rule itself.** |
| ⚠️ **THE PRIVILEGED AREA IS NOT THE CREASE, and it is exactly where the corpus tells the reader to stand** | 607(d) Note 2 runs it **from the end-zone faceoff spots perpendicular to the end boards**, and Casebook 607 **Situation 6** confirms it *"extends to the closer end boards."* ⚠️ **It takes in the net front, the goal line and the ice behind the net — precisely the position §6 teaches (*"at the edge of the blue paint, inside the faceoff dots"*).** **A reader who thinks the restriction stops at the blue paint is wrong about the ice they are standing on.** |
| ⚠️ **THE CAP ALONE MADE THE REAL HARM WORSE — leaders drawn through a player went 2 → 4** | ⚠️ **Shortening a leader pulls it into the crowded neighbourhood it was fleeing.** ⚠️ **And the actual root cause was neither branch: THE LEADER LINE WAS NEVER COLLISION-CHECKED AT ALL.** Placement tested the label **box** against `reserve`; **the dashed line joining box to anchor was drawn wherever the two ended up.** ✅ **Fixed by passing the player boxes as `avoid` — the SAME 7×8 box already used for `reserve`, so there is one statement of glyph footprint rather than two — and rejecting any candidate whose leader crosses one. Strict first, unstrict retry; the retry was NEVER NEEDED: 435 of 435 placements satisfied the strict rule.** |
| ⚠️ **A THIRD DEFECT FOUND IN PASSING, and the file's own comment describes the rule that was not applied** | The grid sweep tested only the straight bounds and **never `inside()`** — so the rounded-corner rule the file's comment says was added after *"four of nine breakout diagrams"* put labels outside the dasher **applied to the FIXED OFFSETS and not to the FALLBACK.** ⚠️ **13 of 79 fallback placements were outside the boards.** ✅ **Now 0.** ⚠️ **FIFTH time this round a defect has been found beside a comment that already described the rule it breaks.** |
| ⚠️ **AND MY "ALL EIGHT SHARE THE PATHOLOGY" WAS WRONG — two came from the CORRECT branch** | Two of the eight (`dump-flip-over-trap` ×2) come from `best`, **strictly owned and correct**; a cap on the ratio fallback would not have touched them. ⚠️ **And one of those two was THE WORST LEADER-THROUGH-A-BODY IN THE CORPUS — 2.12 ft from a forward — fixed only by the collision check, not by the cap.** **So the census that found the eight was measuring length, and length was not the defect.** |
| **A TRADE MADE KNOWINGLY, and declared** | One crossing leader pair was removed (`breakout-wheel`) and one created (`defensive-zone-support`) — **net zero across the corpus** — in exchange for removing a leader drawn **1.50 ft from the goaltender.** ⚠️ **And two ownership-conceded placements remain nominally ambiguous: `nz-pressure`'s *"under pressure"* is 30.4 ft from its own anchor and 29.9 ft from another label's, disambiguated only by the leader. It is forced by `nearD` and was judged acceptable — *"a fresh reader might not"* agree.** |
| ⚠️ **CRITICAL — CARHA 58(b): three sites said *"no restricted area"* FLAT, and a rec goaltender acting on it takes a minor** | ⚠️ **A phrase grep CANNOT find it: `trapezoid`, `restricted area`, `designated area` and `privileged` all return ZERO in `carha.txt`.** **Found by CONCEPT search, then read by line range across a page break** (`carha.txt:2805-2816`): *"A Minor penalty shall be assessed to any goalkeeper who **deliberately** falls on or gathers the puck into their body… **when the puck is behind the goal line and the goalkeeper's body is entirely outside the boundaries of the goal crease area**."* ⚠️ **The sharpest of the three sites walked the freeze counterweight through USA Hockey AND Hockey Canada and then stopped at CARHA with a PHRASE-ABSENCE — positively implying the third book has none.** ⚠️ **And a Key Takeaway named all three books in the *"no trapezoid"* half while proving *"no trapezoid ≠ no restriction"* with ONE — under a sentence reading *"Never state 'no trapezoid' without it."*** ✅ **All repaired. But `OPEN_ITEMS.md` ALREADY HELD THIS FINDING, and the agent found that only by grepping the plan after the repair — *"one step from reporting a known row as a discovery."*** |
| ⚠️ **MY CENTRAL TRADE-OFF RESTED ON A JOB THE NOTE DOES NOT DO** | I framed the §10 note reorder as *"both are load-bearing and only one can be at 25px"*, saying the Home Countries note *"tells a British reader which column is theirs — a routing job."* ⚠️ **It does not. It opens *"unlike the rec column, it is a book"* and is about provenance, edition currency and which rows were re-compared. The ROUTING is done by the lead-in ABOVE the table and by the Overview.** ✅ **Which made the decision EASY rather than close: the Home Countries column is TRIPLE-covered (lead-in, Overview, its own note) and the rec column had ZERO upstream coverage.** ✅ **Reordered at no cost in new text — which beat the third option, since that would have added a fourth copy of one claim against a standing row about one claim in seventeen copies.** |
| ⚠️ **AND MY "THREE REC-COLUMN QUALIFICATIONS" MISCOUNTED WHICH COLUMN THEY BELONG TO** | I listed the lead-in above the table as a rec-column qualification at −18,242px. ⚠️ **It is 100% about the Home Countries column and mentions the rec column NOWHERE.** ⚠️ **So the rec column had zero upstream coverage, not one distant instance — and measuring that row's distance from the table's BOTTOM made the only qualification a reader is GUARANTEED to pass look maximally remote.** |
| ⚠️ **MAJOR — the ROUTING paragraph named a column that does not exist, and under-scoped Britain** | The Overview said the table *"carries a fifth column, **England Ice Hockey**"*. ⚠️ **The header row is *Home Countries*, and `England Ice Hockey` appears in no header.** ⚠️ **Worse: the file's own §7 establishes EIH governs *"in England and Wales"* only — so a Scottish, Northern Irish or university reader was told, IN THE ONE PARAGRAPH WHOSE JOB IS ROUTING, that the column belongs to England.** ✅ **Fixed to *Home Countries*, quoting the In-House Rules' own four-nation scope.** |
| ⚠️ **CRITICAL — a section headed *"the protection you have"* told a USA Hockey goaltender they get TWO MINUTES where a Canadian gets an ejection ladder** | `goaltender.md` set out Hockey Canada's full 8.5(b)/(c)/(d) ladder and closed *"(Hockey Canada only. This document has not checked whether the other three books write the same tiers.)"* — with **625(a)(8), a minor, the only USA Hockey penalty in the section.** ⚠️ **The disclaimer was wrong for ALL THREE other books: USA Hockey 607(c)/(e), NHL 42, and IIHF 42 all write tiers above a minor.** ⚠️ **A goalie who believes this does not tell the referee the thing that invokes the rule, and there is no review to catch it later.** ✅ **Fixed by SPLITTING THE SECTION on a seam the body already used — a new `###` with its own 8-value block — so the 11/11 block was never touched and nothing was traded.** **The disclaimer was narrowed truthfully rather than deleted.** |
| ⚠️ **CRITICAL — the power-play net-front owner priced the exposure as a lost GOAL when the tier that bites is a MISCONDUCT** | `special_teams.md` teaches *"cash them in as close to the net as you can"*, *"put two at the net front"*, *"a genuinely fearless net front"* — with eleven facts values, **all about whether a goal counts.** ⚠️ **On a power play the misconduct is ten minutes, and the advantage is long gone before the player returns.** ⚠️ **And the reader's mental model is *"feet out of the blue"*, which is the WRONG BOUNDARY — the charging rule runs to the privileged area, taking in the entire ice a 1-3-1 net front and a walk-down operate on.** ✅ **Fixed by section split; both counterweights travel in every layer.** |
| ⚠️ **MAJOR — the GLOSSARY used *"privileged area"* as a term of art THREE TIMES and never defined it** | ⚠️ **In the document whose own Overview promises *"if a term appears anywhere in these documents and you are not sure of it, it is defined here."*** **Read aloud, a Key Takeaway gave a listener *"the goalkeeper's privileged area, corners excluded"* with no shape and no book, and §5 taught the strip behind the net as *"the safest place in your own zone"* without saying it is the far end of a protected area.** ⚠️ **Twenty documents delegate definitions to this file, and it has no ` ```facts ` layer, so its body is its whole summary layer.** ✅ **New glossary entry under P, carrying the definition, the tier, the accidental/deliberate split and the three-rung ladder.** ⚠️ **My census framed the question as *"does it carry a tier"*. In this file the missing thing was a DEFINITION.** |
| ⚠️ **I FIXED A LADDER'S RUNG COUNT AND SHIPPED IT STILL MISSING ITS GOVERNING CONDITION** | I circulated the Casebook relief as *"no penalty should be assessed provided the attacking player has clearly made every attempt to avoid the contact."* ⚠️ **The full sentence opens *"**In the case where a defending player has forced the attacking player into their own goalkeeper**, no penalty should be assessed provided…"* — the relief needs BOTH halves.** ⚠️ **My version reads as *"try hard and you walk"*, which is a leniency the book does not grant.** ⚠️ **I had already warned that same agent I shipped this ladder one rung short earlier in the day — and the version I sent was STILL not the rule. I corrected the count and not the condition.** ✅ **Corpus census: all four sites carrying the relief now carry the condition; the shipped wording is *"it needs both of two conditions, not either one."*** |
| ⚠️ **AND EVERY LINE NUMBER IN THAT BRIEF WAS OFF BY THREE TO FIVE** | 607(c) is `3679-3682`, not `3676-3679`. 607(e) is `3698-3699`, not `3695-3696`. Note 1 is `3689-3693`; Note 2 is `3694-3697`, not `3691-3694`. ⚠️ **The quotations were right and the ranges were not — which is the more dangerous combination, because a verifier that trusts the range and reads only it gets a different rule.** ⚠️ **Sixth relayed range of mine to fail today.** |
| ⚠️ **AN AGENT SHIPPED THE IIHF'S WORDING AS THE NHL'S, IN THREE FILES, AND CAUGHT IT ITSELF** | It paraphrased NHL 42.1's goalkeeper sentence as *"A penalty shall be imposed…"* — **that is the IIHF's phrasing.** **The NHL's, verified in both extractions, is *"**A minor, major or a major and a game misconduct** shall be imposed on a player who charges a goalkeeper while the goalkeeper is within his goal crease"* — the NHL names its own range inside the rule.** ⚠️ **It had reached three files and their Sources trailers before the catch; all six sites corrected.** **Its own note: this was *"the mirror of the defect I was sent to fix."*** |
| ⚠️ **MY FRAMING OF THE TABLE FIX WAS BACKWARDS, AND THE MEASUREMENT SAYS SO** | I wrote that the sticky header *"only helps the horizontal problem while leaving the vertical one."* ⚠️ **The opposite. The CAP that makes the sticky header possible is what fixes the vertical problem — and it fixes it MORE COMPLETELY than the content reorder did.** **Measured, three states: table bottom → rec note was 1,169px pre-reorder, 24px post-reorder — but *"co-visible"* was then true only of the table's BOTTOM EDGE, and a reader on row 12 was 8,550px from the note.** ⚠️ **With `--tall`, the table's page footprint collapses from 17,554px to 568px, so the rec note is at most 592px below the table's TOP — co-visible with EVERY cell.** **With the rec column scrolled into view: 156px of the note on screen after, 0px before.** |
| ⚠️ **THREE MEASUREMENTS OF MINE THAT WERE ONE SAMPLE PRESENTED AS THE NUMBER** | *"`thead th` is `position: static`"* — **not for the first header cell; `.table-scroll th:first-child` already set `position: sticky; left: 0`, so the corner cell's HORIZONTAL stickiness always applied.** *"§10 is 23.2 phone screens"* — **21.6 by height/viewport, 23.2 by height/(viewport−header); say which.** *"the thead is 4,636px above the viewport"* — ⚠️ **row-dependent: 8,550px at the row actually screenshotted, and a maximum of 17,516px.** **And an `aria-label` was changed knowingly for the two tall wrappers only — *"the region now scrolls on both axes, and telling a screen-reader user otherwise is the same defect as not telling them"* — with an explicit invitation to revert.** |
| ⚠️ **I STATED THE BOUNDARY WRONGLY, AND MY OWN QUOTED TABLE GAVE IT AWAY** | I wrote that IIHF 63.2(I) *"bites INSIDE the designated area as well as outside it."* ⚠️ **True as a conclusion, and wrong as a boundary: the rule's own limit is *"outside of their **goal crease area**"*. The boundary is the CREASE, not the designated area.** ⚠️ **Written my way, a reader cannot tell that a goaltender freezing INSIDE their crease is outside 63.2(I) entirely and falls under 63.2(VII) — which carries its own *"unless they are actually being checked by an opponent"* exception.** ⚠️ **And the Table 13 row I quoted in the same brief says it: *"Deliberately 'freezes' the puck inside or outside the **goal crease**"*. I quoted the evidence against my own sentence and did not read it.** ✅ **The crease boundary is now written explicitly at all seven repaired locations.** |
| ⚠️ **CRITICAL — the GLOSSARY told a British reader to ask their league and never said what SURVIVES the suspension** | *"Ask your league before assuming either that your goaltender is free behind the net or that they are not"*, and a Key Takeaway saying *"keep your own goalie inside it… Its one exception is a goalie keeping skate contact with the crease."* ⚠️ **A reader whose league confirms non-enforcement concludes the goaltender may handle the puck freely behind the net. They may PLAY it there. FREEZING it there is still two minutes.** ⚠️ **And this is the document twenty others delegate to, with no ` ```facts ` layer — so its body is its whole summary layer and every borrower inherits the gap.** ✅ **Settled without inference: IIHF Appendix IV Table 13 prints *"Playing puck outside restricted area"* and *"Deliberately 'freezes' the puck inside or outside the goal crease"* as TWO SEPARATE ROWS, and EIH R&R 22.3 suspends the Restricted Area and names nothing else.** |
| ⚠️ **THE RESTRICTION AND ITS CARVE-OUT SPLIT ACROSS A CHUNK BOUNDARY — in text written minutes earlier** | Chunk 069 ended on *"the crease, not the trapezoid"*; chunk 070 opened on *"So a suspended restricted area frees…"*. ⚠️ **A listener got the escalation, a 300 ms pause, then the relief.** ✅ **Restructured so both sit in one paragraph, and every one of the seven new locations verified to pair restriction with carve-out in the SAME voiced chunk.** ⚠️ **This is the exact class another agent named as *"the most valuable unrun census"*, and it appeared in new text, in the same session, twice.** |
| ⚠️ **A NEGATIVE STATED HONESTLY AS A SEARCH RATHER THAN A READING** | *"No British document touches Rule 63"* — ⚠️ **the agent wrote it as a SEARCH, not a reading, in every place it appears including both Sources trailers.** **Two files searched for four strings; `eih_rr.txt` and `eiha_inhouse_2026-27.txt` return zero for `Rule 63`, `freez`, `63.2`, `delay of game`, `delaying the game`.** ⚠️ **And the honest bound: the In-House Rules say IHUK *"may also issue Rule Bulletins from time to time"*, no bulletin is on disk, and the EIHL casebook is not either.** **This is the model form — the negative names what was searched and what could not be reached.** |
| ⚠️ **MY LINE RANGE POINTED AT THE WRONG PARAGRAPH — the seventh range failure today** | I cited ¶3 at `usah.txt:4499-4503`. ⚠️ **That range covers the TAIL OF ¶1 AND ALL OF ¶2. ¶3 is at `4504-4507`.** ⚠️ **Had the agent quoted my range it would have quoted the wrong paragraph — into a repair whose entire subject is which paragraph relieves what.** **Seven relayed ranges of mine have now started early, stopped short, or pointed at the wrong text in one round.** |
| ⚠️ **MAJOR — a SEVENTH document, not in any brief, STAGED, understating the ceiling in the UNSAFE direction** | `forechecking_systems.md`, pre-existing and unchanged this round, carries `Rule: … 607(c) makes body checking or charging one inside the crease or privileged area **a minor plus a misconduct**` — ⚠️ **and stops there, dropping *"or a major plus a game misconduct"* and 607(e)'s match penalty entirely.** ⚠️ **A forechecker reads the price of running a goalie as 2+10 when it reaches an ejection or a match penalty. This is the exact defect the six new sites were written to fix, surviving in a seventh document.** ⚠️ **It was found only by a grep for `rivileged` that reached OUTSIDE the reviewer's brief — *"a review scoped to the six named sites would have shipped it."*** |
| ⚠️ **AND THE SAME FILE DENIES A PERMISSION THE BOOK GRANTS, on the exact ice its own section is about** | `Risk: … a third defenceman you may chase but **never check** — only incidental contact is excused, and **USA Hockey penalises even accidental contact**`. ⚠️ **Flatly contradicted for the CORNER, which is OUTSIDE the privileged area.** **Casebook Situation 5** (`usah_casebook.txt:11712-11730`): *"Although a goalkeeper **can be legally checked when outside the privileged area**, they are not considered to be 'fair game.' … When the goalkeeper has possession of the puck, **the attacking player is permitted to physically engage with the goalkeeper in an effort to gain possession of the puck.**"* ⚠️ **`rules_primer.md` quotes Situation 5 in full and `playing_without_the_puck.md` handles it correctly — the ONE document whose subject IS that ice is the one that denies the permission.** ⚠️ **And the honest framing: *"never check the goaltender" may be BETTER COACHING than the rulebook is a rule — but it is presented as what the book says, and it is not.*** |
| ⚠️ **MAJOR — the OPPOSITE overshoot, contradicting the paragraph two above it in the same document** | `special_teams.md` prices *"an ordinary net drive that ends in contact"* at **ten minutes minimum on a power play.** ⚠️ **A reader who believes that STOPS DRIVING THE NET — which on a power play is the whole point of the position.** ⚠️ **The answer is two paragraphs above: 607(d) Note 1 sends *"any accidental or unavoidable contact"* to INTERFERENCE — a bare 625(a)(8) minor — not into the charging ladder at all. The Casebook's middle rung is the floor WITHIN charging, not the floor for a net drive.** ⚠️ **And the document's own preceding sentence says the rule *"sends most net-front bumping somewhere far cheaper"* — this sentence takes it back.** ⚠️ **Its facts value, Common Mistakes bullet and Key Takeaway are all CORRECT. One sentence, one layer.** |
| ⚠️ **MAJOR — the ONLY escalation in the six sites that travels naked in its chunk** | `rink_map_and_glossary.md` §"Behind the net": *"a goalkeeper contacted back here is protected by the charging rule, **which writes no bare minor**"* — ⚠️ **one `<p>`, no counterweight anywhere in the chunk, so it says ANY contact behind the net gets no bare minor.** ⚠️ **Its sole correction is a spoken pointer to a chunk TWENTY CHUNKS LATER that the listener has not yet heard.** ⚠️ **And behind the net under USA Hockey is where goalies play the puck routinely, because there is no trapezoid.** **607(c) is limited to *"body checks or charges"*; Note 1 routes accidental contact to interference. The sentence states the ceiling without the gate.** |
| ⚠️ **THE TWO OVERSHOOTS ARE MIRROR IMAGES FROM ONE CASEBOOK SITUATION** | One file says **effort is a complete defence** (omitting the middle rung, so an ordinary net drive reads as free); another says **an ordinary net drive costs ten minutes minimum** (importing the charging floor into a play Note 1 routes to interference). ⚠️ **Both derive from Situation 4, both are wrong, and they are wrong in OPPOSITE directions — so a reader consulting both documents gets no coherent answer at all.** **Recorded because the pattern is the round's own headline class arriving twice more, in the material written to fix it.** |
| ⚠️ **MY CAP CONSTRAINT WAS ATTACHED TO THE WRONG FILES AGAIN** | I warned that `goaltender.md` has four blocks at 11/11 and `special_teams.md`'s crease block is full, so *"a recommendation to add a value is not actionable."* ⚠️ **True of OTHER blocks in those files — but the two NEW blocks each hold 8 values with 2 non-`Rule:`, so each has THREE values of headroom.** ⚠️ **The block that is genuinely full is `offensive_zone_play.md`'s at 11/11, which I did not name — and it is the one where the fix had to be an in-place rewrite.** **Second time this round I have attached a cap warning to the wrong file.** |
| ⚠️ **"SIX SITES" WAS AT LEAST EIGHT, and my rules list omitted the counterweight to the whole story** | `playing_without_the_puck.md` and `forechecking_systems.md` both carry 607(c) in their facts layer and in prose; neither was in the brief. ⚠️ **And I omitted USA Hockey Casebook 607 Situation 5 — the ONLY text in USA Hockey's materials saying a goalkeeper *"can be legally checked when outside the privileged area"*. It is the counterweight to the entire privileged-area story, it is quoted correctly in `rules_primer.md`, and it is what makes the `forechecking_systems.md` finding a defect rather than a nit.** ✅ **One thing my brief got right for once: every line range in it was sound — the reviewer checked and found no truncated citation.** |
| ⚠️ **THE `Risk:` VALUE WAS INTERNALLY CONTRADICTORY, and asserted a reading a sibling REFUSES to assert** | *"only incidental contact is excused"* (the NHL/IIHF permission) sat beside *"USA Hockey penalises even accidental contact"* (the opposite treatment) — **bundled as one sentence.** ⚠️ **And that second clause asserted a reading `playing_without_the_puck.md` EXPLICITLY DECLINES to make: *"can be read either as penalising accidental contact outright or as routing it to the right rule once it is penalised; the book does not say which, and neither reading is asserted above."*** ⚠️ **An exception that failed to travel — and the destination stated flatly what the origin had carefully refused to state.** |
| ⚠️ **A CONTRADICTION THE REPAIR ITSELF CREATED, caught by diffing the whole file rather than the hunks** | A later section read *"a goaltender outside their crease is still not a legitimate target for a check"* — ⚠️ **flatly contradicted by the Situation 5 material the same agent had just added TWO SECTIONS ABOVE.** ✅ **Changed to *"not someone to finish a check on, under any of the four books"*, true in every book and consistent with both passages.** ⚠️ **Third time this round a full-file diff caught a self-inflicted contradiction that a hunk-level review would have shipped.** |
| ⚠️ **MY BRIEF NAMED SITUATION 5 AND NOT SITUATION 6 — and without both a reader "corrects" the document the wrong way** | I said Situation 5 contradicts the document *"for the ice this section is about — the CORNER"*. ⚠️ **Correct, and incomplete: Situation 6 is the other half and cuts the OPPOSITE way — the privileged area DOES include the ice behind the goal line and *"extends to the closer end boards."*** ⚠️ **Without it, a reader acting on my brief alone would conclude the whole area behind the net is fair game.** ✅ **Corner outside, behind-the-net inside — that distinction is now the load-bearing geography in all three files.** |
| ⚠️ **MY OWN CORRECTION WOULD HAVE SHIPPED A FRESH ERROR IN THE OPPOSITE DIRECTION** | I wrote that *"for a large part of this corpus's readership the misconduct **IS** six or eight minutes."* ⚠️ **The rule says affiliates *"are **authorized to reduce**"* — a PERMISSION, not an automatic scaling. Absent an affiliate exercising it, 404(a)'s ten minutes stands whatever the period length.** ⚠️ **Stated as I stated it, the repair would have replaced an over-strict number with a WRONG one.** ✅ **The shipped wording calls it *"an authorisation, not an automatic cut."*** ⚠️ **And the exemption runs the way round nobody expects: *"(Except for Adults)"* means ADULTS ALWAYS GET TEN, and it is the YOUTH reader whose misconduct may be shorter.** |
| ⚠️ **THREE OF THE FOUR BOOKS DO NOT SCALE — and a sweep would corrupt every one of them** | Verified by reading each misconduct rule plus a keyword search of each book: **Hockey Canada 4.7** (`hc.txt:2985-2998`) *"a period of 10 minutes of actual playing time"* — **flat, no reduction anywhere**; **IIHF 22.1** (`iihf_rules_2026-27.txt:2245-2249`) *"ten (10) minutes each"* — **flat**; **IHUK In-House** — no period provision at all, 9.12 writes *"10-minute Misconduct Penalty"* itself. ⚠️ **USA Hockey is the ONLY one of the four that scales.** ⚠️ **Recorded explicitly so nobody sweeps: the flat tens in `rules_primer.md` (IIHF 22.1), `uk_rules.md`, `equipment.md`, `switching_positions.md` (IHUK 9.12) and `body_contact_and_battles.md` (NHL 46.11) are all under books that do NOT scale, and a sweep of *"10-minute misconduct"* would corrupt every one.** |
| ⚠️ **THE DEFECT WAS WRITTEN IN A FORM NEITHER PATTERN REACHED — *"I nearly closed this file clean on a pattern search"*** | The one real defect read **"the floor is two minutes **plus ten**"** — ⚠️ **matching neither `ten-minute` nor `10-minute`.** **And a sixth string-matched hit was *"argue about for the next ten minutes"*, not a penalty at all.** ✅ **Repaired to *"two minutes plus a misconduct"* — true under every configuration of the rule — with the size arriving afterwards with its condition attached, ⚠️ *"so it cannot be heard naked and wrong"* in the value a listener would repeat.** ⚠️ **And the class no pattern reaches at all: *"they sit for a third of the game"*, which `rules_primer.md` already contains in another context.** |
| ⚠️ **TWO NAKED NUMBERS IN TWO LAYERS, and my brief named one layer** | I reported a facts value. ⚠️ **There were two sites: the ` ```facts ` `Key:` value AND Key Takeaways item 11 — *"On a power play the misconduct alone is ten minutes"*.** ⚠️ **Item 11 was on no do-not-disturb list and nothing in my brief pointed at it, and it renders SIX CHUNKS after the qualification.** **Measured, not assumed: the `Key:` value renders in `076.ssml`, the qualification in `077.ssml`.** ✅ **Both repaired by REMOVING the number rather than adding a second qualification** — *"a misconduct outlasts your advantage whatever length it runs"* — **true under all four books and inside the 200-char cap.** |
| ⚠️ **THE CORRECT QUOTATION WAS IN THE ONE LAYER INVISIBLE TO BOTH A DEFECT GREP AND A LISTENER** | `defending_the_rush.md` cited **404(a)** in voiced body prose and dropped its Note — ⚠️ **while the COMPLETE 404(a) text, including *"or the designated misconduct penalty time"*, sat in the Sources trailer.** ⚠️ **Measured: `grep -rl "designated misconduct" render/systems__defending_the_rush/` returns NOTHING; `"misconduct is ten minutes"` returns `020.ssml`. In the voiced corpus the qualification did not exist at all.** ⚠️ **And a document-level grep would have CLEARED the file, because the right words were in it — just not where anyone could reach them.** ✅ **Number and qualification now sit in the same chunk, in consecutive sentences, and the comparative claim survives a reduction.** |
| ⚠️ **CRITICAL — A RULE STATED INVERTED, TWICE, ON ADDED LINES, INSIDE THE PARAGRAPH THIS COMMIT REWROTE TO FIX THAT RULE** | *"The goal **still stands** *"unless the puck has preceded the player(s) into the goal crease or the goalkeeper is out of the goal crease area"*."* ⚠️ **USA Hockey 625(b) ¶2 says the OPPOSITE: *"**No goal may be scored** with an attacking player in the goal crease **unless**…"* — the book DISALLOWS by default and ALLOWS in those two cases.** ⚠️ **The corpus carries the rule's own `unless` clause on a carrier of OPPOSITE POLARITY, so it says the goal stands by default and is LOST in the two carve-outs.** ⚠️ **Backwards in both directions that matter: a reader who scores with the goalie out of the crease is told the goal is gone; a reader standing in the paint with the puck arriving after them is told it *"still stands"*.** ⚠️ **Each is its own sentence in the audio layer — no context rescues it for a listener.** *In flight.* |
| ⚠️ **AND IT IS SELF-CONTRADICTED TWO SENTENCES LATER BY TEXT THE SAME COMMIT ADDED** | The following sentence treats the goalkeeper-out condition as goal-**allowing** (*"Situation 9 … allows the goal"*), and the ¶3 material added beside it is **correct**. ⚠️ **So the intended meaning is unambiguous and the SPLICE is the defect — the *"repair applied to half a sentence, read to the end of the clause and not the paragraph"* shape.** ⚠️ **This is the round's headline class arriving for the THIRD time inside the commit that exists to fix it** — after the two files contradicting each other on ¶3, and the two mirror-image Casebook overshoots. **Neither the review record nor the plan mentioned it: unrecorded and unreviewed until the sixth gate read the added lines.** |
| ⚠️ **A NEAR-IDENTICAL STRING IN ANOTHER FILE IS CORRECT, and the gate checked before reporting** | `zone_entries.md` also contains *"goal still stands"* — ⚠️ **a DIFFERENT and CORRECT construction under NHL/IIHF 83.4, and not on an added line.** ⚠️ **A string sweep for the defect would have "fixed" it.** **Recorded so nobody does.** |
| ⚠️ **WHAT THE COMMIT MESSAGE MUST NOT OMIT, per the gate** | ⚠️ ***"If it says only what was fixed, it destroys the record of what was not."*** **It must say: that D5 provenance on the rules material was NOT run, in the dimension where every historical defect in this corpus has been found; that 26 of 29 changed pages were never opened in a browser; that the chunk-boundary census was attempted twice, defeated by false positives, and deliberately not shipped as a number; and that the wrong-rule-leniency class was found by reading ONE block in order and HAS NOT BEEN SWEPT.** |
| ⚠️ **A THIRD INSTANCE OF THE INVERSION, ON AN ADDED LINE, IN A THIRD FILE — and the gate could not have found it** | `scanning_and_anticipation.md`: *"…no goal with an attacking player in the crease. **It is not unconditional, though, and two carve-outs sit in the same sentence.** **The goal stands** *"unless the puck has preceded the player(s) into the goal crease or the goalkeeper is out of the goal crease area"*…"* ⚠️ **Same splice, same polarity error.** ⚠️ **The commit gate audited only the file it blocked on; this one was found by a corpus-wide census of every CARRIER of the rule's `unless` clause.** ⚠️ **And it is the hardest of the three to see: the sentence BEFORE it states the rule correctly and the sentence AFTER it is correct too, so the paragraph says the right thing, then the wrong thing, then the right thing — and *"It is not unconditional, though"* primes a reader to expect a softening, which *"The goal stands unless…"* reads as.** *In flight.* |
| ⚠️ **AND A NEAR-IDENTICAL STRING IS CORRECT — a sweep would have damaged it** | `zone_entries.md` carries *"The one way a goal still stands is the defending team putting it in themselves"* — **a different and correct construction under NHL/IIHF 83.4, and not on an added line.** ⚠️ **Verified before reporting, twice, by two different agents.** |
| ⚠️ **AND THE COUNTERFACTUAL IS THE POINT — a general `in` rule would have been catastrophic** | A sweep of the rendered corpus for *"foot/feet … in"* returns **seven** survivors, and **all seven are ordinary English**: *"bring the foot back **in** under your hips"* · *"both feet still **in** the crease"* · *"a puck **in** your feet is **in** one of the harder places"* · *"foot speed **in** an effort to play the body"* · *"from behind the back foot to **in** front of the front foot"* · *"keep your feet moving **in** drills"* · *"whose feet leave **in** front of them"*. ⚠️ **Had `in` been added as a general unit, every one would have become *"inches"* — *"bring the foot back inches under your hips."*** **Recorded because the safe fix and the catastrophic one differ by an anchor.** |


---

# Closed rows moved out of the plan, 10 September 2026 — second relocation

⚠️ **27 sections, moved VERBATIM.** The plan had grown to **15,777 lines** while carrying its own completed
work, which is the condition its owner named as making it *"too long to be effective."* ⚠️ **`OPEN_ITEMS.md`
holds REMAINING work plus the standing guidance for doing it. A closed row is a record, and a record belongs
here.** Each left a one-line pointer behind, so nothing is lost and nothing is searched for twice.

⚠️ **THE DISTINCTION THAT DECIDES WHAT MOVES:** a section marked ✅ states what WAS found. A section carrying a
TRANSFERABLE LESSON — a wrong premise a brief will make again, a tool that produces a false pass, a citation
mechanism that defeats `grep` — **stays in the plan even when its work is done**, because the next agent needs
it before it acts, not after. The class findings from 10 September 2026 (the merged zero-claims, the three
citation-failure mechanisms, the 87.6% worklist) were **deliberately left in the plan** on that ground.

### ✅ CLOSED 10 September 2026 — the six-document 604(a) census. ⚠️ **83% OF IT WAS WRONG, AND A SWEEP WOULD HAVE DAMAGED FIVE DOCUMENTS.**

**Five of six overturned.** The *"lacks the limb entirely"* column was right about **exactly one file**. ⚠️ **Both
of the census's self-declared weaknesses fired, in both directions:**
- **String-vs-concept:** `team_play_and_culture.md:473`, `reading_ice_hockey_diagrams.md:8`,
  `on_ice_communication.md:261` **carry the limb's operative content in different words** and scored as gaps.
  ⚠️ **Three of them say it BETTER than the sweep would have.** `on_ice_communication.md:261` is the most
  complete 604 treatment found anywhere — it is the **only** file of the six carrying **604(b)**.
- **String-in-unrelated-context:** three `governing body` hits (`faceoffs.md:18`,
  `neutral_zone_systems.md:531`, `:851`) are **a reader's own association** and **the Elite Hockey Canada
  disclaimer** — *"a private coaching site, not Hockey Canada, the national governing body."* Scored as coverage.

⚠️ **THE PROHIBITION/PERMISSION HYPOTHESIS HELD FOR FIVE OF SIX AND IS THE REASON NOTHING WAS SWEPT.** A
prohibition read by someone it does not bind makes them **more** cautious. Only a **permission** inverts.

**THE ONE REAL HIT — `conditioning_and_recovery.md:194`, and it was worse than permission-shaped.** It read
*"prohibited in most youth age groups **below U13/U15 depending on association**"*. ⚠️ ***"below U13" EXCLUDES
U13. `hc_layout.txt:4716` reads "only in divisions of U13 AND BELOW."*** **A U13 Hockey Canada player acting on
it draws 7.3(a) minor / 7.3(b) major plus game misconduct / 7.3(c) match.** ⚠️ **That is the one condition
under which non-negotiable 3 permits DELETION rather than labelling — a primary source contradicting the claim
where repeating it is unsafe — which is why the clause was replaced, not supplemented.** Repaired in four
layers; **this file has NO ` ```facts ` blocks, so there is no facts layer to propagate into.**
**Handed to `safety-reviewer` 10 September 2026** — the section is headed *"Concussion risk and body checking"*,
and ⚠️ **the blockquote grew from ~2,690 to ~3,590 chars and is voiced as a SINGLE `<p>`.**

⚠️ **PROVENANCE GAP FOUND IN PASSING:** that file cited **seven** USA Hockey and Hockey Canada rules across
three layers while its Sources trailer named **only the IIHF book and the IHUK In-House Rules.** Fixed there.
**`source-verifier` should census whether the same pattern exists elsewhere.**

### ✅ CLOSED 10 September 2026 — the unsourced prevalence claim. ⚠️ **IT IS IN NINE DOCUMENTS. THE TRAPEZOID SHAPE.**

**Verified absent properly, not assumed:** a scripted scan of **all 28 `sources/*.txt`** for prevalence language
within 80 chars of `non-check` / `adult recreational` / `beer league` returned **zero in every file**. 604(a)
says a local body *"is **encouraged** to provide Competitive Contact options"* — **an encouragement, not a
measure.**

⚠️ **THE REPAIR IS A SUBSTITUTION, NOT A HEDGE, AND THAT IS WHY IT IS GOOD.** `sources/usah.txt:5955`, the
Glossary's *Age Classifications* **Note 3**, one hit, flattened:

> *"Adult classifications shall include Adult non-check, Adult U.S., Adult Elite and Adult Women, and shall be
> governed by these rules, except where otherwise noted."*

**Four named adult classifications — one non-check IN ITS NAME, a second (Adult Women) non-check under 604(a)'s
girls'/women's limb.** That does the reader's work with **no frequency claim at all**, which is exactly the
style guide's trapezoid prescription: *"Say what is painted, not what proportion of associations do what."*
⚠️ **DELIBERATELY NOT STRENGTHENED: the wording does NOT assert that "Adult U.S." and "Adult Elite" ARE checking
classifications — that is an inference from 604(a)'s list being exhaustive and has NOT been adjudicated.
`rules-verifier` must confirm that reading before anyone strengthens the sentence.**

**Four sites repaired in the owner**; the claim **kept and labelled** at `:80` per non-negotiable 3, matching the
form already at `:1426`. ⚠️ **The `:75` table row previously held a literal `—` in a SOURCE column** — which
voices as *"Source, —"* and is **indistinguishable from a source**. Now populated. Table still **14/14 rows, 94
chars headroom, read aloud** — verified in the SSML, not by grep.

⚠️ **NINE MORE DOCUMENTS, 12+ SITES — CONFIRMED AT SENTENCE LEVEL ONLY, NOT DOCUMENT LEVEL.** The reviewer said
so itself: *"Each may carry a label a few lines away that my grep window missed."*
⚠️ **`rink_map_and_glossary.md:669` IS THE HIGHEST PRIORITY — it is a GLOSSARY, and its sentence is VERBATIM the
one just repaired, so the owner copied it FROM THERE.** ⚠️ **`forechecking_systems.md:227` is a ` ```facts `
`Key:` line, voiced ALONE.** Also `forechecking_systems.md:235`/`:27`/`:942` · `rules_primer.md:860` (**a table
cell**) · `team_play_and_culture.md:473`/`:477` · `mental_game.md:121`/`:377` ·
`conditioning_and_recovery.md:194` · `playing_without_the_puck.md:18` · `offensive_zone_play.md:888`.
**Six dispatched to a `content-reviewer` 10 September 2026; two excluded as held by live agents.**

⚠️ **AND THE HALF THE CENSUS CANNOT SEE, IN THE REVIEWER'S OWN WORDS:** *"A document saying 'you probably cannot
hit in your league' or 'assume you are in a non-check category' scores as clean. **The claim expressed as an
ASSUMPTION rather than as a FREQUENCY is undetectable by what I ran.**"*

### ✅ CLOSED 10 September 2026 — the caption layer is CERTIFIED, and the three repairs are in the build product

⚠️ **It had been uncertified all round** — five separate agents reported `check_absolutes.py` **exit 2**,
*"NO captions scanned — diagrams.json is STALE"*, and every one of them correctly refused to treat it as a pass.
⚠️ **A `tail`-piped run reports exit 0 and hides this**, which is why the agents were told not to pipe it.

**Coordinator ran `build-diagrams.mjs` (absolute node binary) to completion, then re-ran the checker:**
**`check_absolutes.py` EXIT 0 — 37 documents + 396 diagram caption/describe units scanned.**

**All three repairs confirmed present in `diagrams.json` and in the built SVG:**
- `show-one-shoulder-open-the-other` → *"The mirror is not drawn **here, but** it works the same way: skate at
  the outside shoulder…"*
- `offside-faceoff-location` → *"…and not a fixed destination**.**"* — **the colon is now a full stop, and not
  one word of the Rule 83.6 claim changed.**
- `oz-net-front-screen` → the built SVG contains **`outside the paint`** and **zero** occurrences of
  `edge of the paint`.

### ✅ ANSWERED 10 September 2026 — `describe` IS NOT VOICED. The `describe` half of the caption sweep is correctly weighted.

Two agents declared they could not reach this and graded `describe` hits on an **assumption**. **Verified by the
coordinator, in the renderer:** `md_to_speech.py` resolves `diagram:<id>` through `_diagram_manifest()` and emits
**`entry["caption"]` only** — `:698` and `:699`. `describe` appears in `diagrams.json` (198 entries carry both keys)
and **is read by nothing in the speech path.** It is the site's alt text.
**So a `describe` inversion is a SITE defect, not a heard one, and the lower grading applied to it was right.**
⚠️ **It is still read by a screen-reader user, so it is not exempt from review — only from the 300 ms-break weighting.**

### ✅ CLOSED 10 September 2026 — `playing_without_the_puck.md` 604(a). **CRITICAL, and the hole was BIGGER than the brief said.**

**Confirmed and repaired in six layers**, verified in the rendered speech (units `001`, `010`, `012`, `068`, `074`),
not by grep. The facts line at `:169` is now **297/300** and leads with a **positive-polarity imperative** — *"Check
whether you may hit at all — …"* — with **no main-clause negation anywhere, so nothing inverts at any truncation
point.** The two powers are kept distinct: USA Hockey's actor is a **local governing body** with a power to
prohibit; Hockey Canada's is a **Member** extending its own prohibition. Nothing British was added; Rule 101.1 is
untouched.

⚠️ **THE BRIEF SAID `:181` WAS COMMON MISTAKES. IT IS NOT — it is a body bullet in §State 2.** Common Mistakes runs
`:821-:841` and **contained no body-checking-permission entry at all.** So the true layer map was body ✓✓ · facts ✓
· Key Takeaways ✓ · **Common Mistakes ENTIRELY ABSENT** — a bigger hole than *"each carries the Hockey Canada
limb"* implied. **A new bullet was written at `:824`**, and it closes with a British clause so a UK reader does not
file the whole entry as North-America-only.

**The penalty ladder, now carried at the point of the claim** (`usah.txt:3580-3599`): **604(c)** minor · **604(d)**
*"A major plus a game misconduct penalty … to any player who recklessly endangers an opponent with a body check in
a Competitive Contact category"* · **604(e)** match penalty, which reaches a **non-check Adult classification** by
name.

⚠️ **RESIDUAL, DECLARED NOT SWEPT — the prohibition and its remedy are not in one utterance.** The §State 2 facts
block states the ban; the **legal alternatives** (angle, stick checks, body position) are separate facts, so a
listener does hear them, **but never in the same breath as the prohibition.** `Priority:` at `:168` is capped at
200 and the three shortest joined phrasings measured **204, 208 and 212**; the only variant that fits lands at
**exactly 200/200**, and a new fact takes the block to **11/11 `HARD_MAX`**. ⚠️ **Both outcomes remove ALL
headroom, which is why this was reported rather than forced. It is a judgement call and the agent said so.**

⚠️ **HIGHEST-VALUE FOLLOW-UP, IN THE AGENT'S OWN WORDS:** *"run `grep -rL "local governing" content/` against every
file that names Rule 604."* **Six of those files were dispatched to a `rules-verifier` the same day** — but that
wave excludes `body_contact_and_battles.md` §5 and §10, `defender.md`, `winger.md`, `center.md` and
`defending_the_rush.md`, **which repeat or own material this document points at.** ⚠️ **On the shape of this
finding the limb is very likely missing in at least one of them.**

### ✅ CLOSED 10 September 2026 — three borrowed claims that shed their owner's qualification

All three are the **borrower stating a STRONGER claim than the owner**, which is D8.

| site | was | the owner actually says |
|---|---|---|
| `winger.md:146` | *"the system assumed throughout, **and the most common**"* — ⚠️ **the only bare statement of it in the corpus**; four siblings hedge | `defensive_zone_coverage.md:116`: *"most often describes as taught first … **consensus from coaching material, not a survey; no count of what teams run exists**"* |
| `defender.md:596` (facts, **voiced alone**) and `:606` | *"2-3 … still **extremely common** in rec, beer-league and youth hockey"* | `special_teams.md:198`: *"remains common … **Both halves of that are impressions rather than measured shares, and this document has no count for either**"* ⚠️ **The borrower dropped the hedge AND upgraded "common" to "extremely common" — in a document that says THREE TIMES (`:31`, `:150`, `:821`) it has no count for rec hockey. It contradicted its own disclosure.** |
| `defender.md:379` | *"the red-line figure is **not merely unsourced but contradicted**"* | ⚠️ **This one sheds the qualification in the direction that UNDERSTATES the corpus's evidence** — `defending_the_rush.md:153`: *"**the stick and a half is itself a published figure, prescribed for the ice the red line crosses.** What no page … prescribes is a stick and a half **at the line itself**."* A reader of `defender.md` alone would conclude the number is unsupported. **It is published, just not line-anchored.** |

**Also fixed:** `winger.md:251` (*"The most common dump."* — the owner `zone_entries.md:553-570` numbers five
dump-ins and **ranks none of them**), `:323`, `:445`. **`winger.md:43` left as rhetorical rather than empirical,
and flagged rather than changed.**

### ✅ RE-VERIFIED 10 September 2026 — four disclosures attacked directly, ALL FOUR HELD

⚠️ **Recorded as what was SEARCHED, not as "HELD"**, because `check_disclosures.py`'s premise is that every
disclosure tested before had been false.

- **`defender.md:697`/`:706`** — the 40–50 s / 35–45 s shift bands. **All 27 `sources/*.txt` flattened and
  de-hyphenated**, regexed for any `NN–NN second` band: **one hit**, `sources/ibc.txt` *"Alternate roles every
  30-45 seconds"* — **a drill rotation instruction, not a shift band.** ⚠️ **Limit stated: the open web was not
  searched, and a broadcast or coaching page is exactly where such a figure would live.**
- **`defender.md:678`/`:682`/`:683`** — shot-blocking distance/orientation risk. Every `sources/*.txt` searched
  for five flattened spellings of *block the shot*; **every hit is a rulebook clause, an IIHF drill sheet, or a
  Situation about a skater in the crease.** Nothing on orientation or distance.
- **`goaltender.md:1307`** — *"the most psychologically demanding position in team sport"*. **The cited literature
  in the owner `mental_game.md` was READ** (Beilock & Carr 2001; Wulf; Chua et al. 2021; Filby et al. 1999; Kyllo
  & Landers 1995; Hardy & Parfitt 1991; Rupprecht et al. 2021). **None is a cross-position or cross-sport ranking.**
- **`goaltender.md:1145`** — no source counts injuries from backing into the crease. No injury-surveillance source
  on disk breaks anything down by that mechanism.

⚠️ **DELIBERATELY LEFT AND NOT TO BE RE-LITIGATED:** `defender.md:682`, `:683`, `:824`, `:835`, `:696`/`:704` —
values of the form *"nothing in this corpus measures it"*. **These are statements about what the evidence
supports, not the project narrating itself.** ⚠️ **Whether the word *"corpus"* should be visible to a reader at
all is A DECISION, NOT A SWEEP.**

⚠️ **THE BIAS IN ALL OF THIS, DECLARED:** all four attacked disclosures had a **searchable noun** (shift length,
shot blocking, psychological demand, crease collision). ⚠️ **`goaltender.md` carries ~20 more absence claims —
`:663`, `:664`, `:1038`, `:1118`, `:1255`, `:1260`, `:1424`, `:1436`, `:1438`, `:1452` — mostly *"no published
interpretation of this rulebook silence is held here"*, and NONE was tested**, because falsifying one needs a
rulebook-interpretation search. **That is `rules-verifier`'s tooling. Route it there.**

### ✅ CLOSED 10 September 2026 — the 63 unread negation hits, and what reading all of them proved

**Read: all 7 in `suspicious`, all 68 in `worth a look`, and 18 more at score ≥ 2 the tool had never been
able to see. 92 hit occurrences read individually.** Three majors fixed, all in `site/src/diagrams/`:

| id | defect | fix |
|---|---|---|
| `show-one-shoulder-open-the-other` | *"The mirror is **not** drawn and works the same way: skate at the outside shoulder…"* — **two** actionable inversions: *"the mirror does not work the same way"* (the sentence's only point, reversed) and, across the colon, ***"do not skate at the outside shoulder"*** — the whole instruction. ⚠️ **Nothing else in the caption states either proposition, so the inverted tail is the reader's ONLY source.** | `and` → **`but`** — round 70's finding that this corpus already resolves with *"but"* everywhere else. Also *"not drawn"* → *"not drawn **here**"*: **the mirror DOES exist** (`entry-outside-shoulder`), and *"here"* indexes the picture, so it survives re-hosting where *"this section"* would not. |
| `offside-faceoff-location` | *"That far marker is this pass's answer and **not a fixed destination**: move the pass and the spot moves with it"* — inverts to *"move the pass and the spot does **not** move with it"*, **NHL Rule 83.6 reversed.** | **Colon → full stop. Not one word of the claim changed.** 83.6 re-verified on disk, flattened and de-hyphenated: *"…**or from the face-off spot in the zone closest to the point of origin of the shot or pass**…"* |
| `oz-net-front-screen` | `label: 'edge of the paint'` — ⚠️ **the label named the ONE LINE the diagram exists to keep you off**, under a caption reading *"keep your feet out of the blue paint, and off the crease line at its edge"*. | → `'outside the paint'`. ⚠️ **The owner settles it in words** — `rink_map_and_glossary.md:191`, ***"Work just outside the paint, not on its edge and not in it."*** And `center.mjs:845`, the sibling net-front screener, **already carried `'outside the paint'` — this was the outlier, not the convention.** Identical 17 chars, glyph unmoved. |

⚠️ **THE BRIEF WAS WRONG SIX WAYS AND THE MOST USEFUL ONE WAS THE OPPOSITE OF WHAT IT CLAIMED.**
It said the counts *"predate several rounds of edits and MUST NOT be quoted"* — **they had not moved at
all.** Re-running was right; the premise was wrong. It said *"the ~62"* when the tool prints **68** (9%
short). It reported the 6 as *"4 FP + 2 arguable"* — ⚠️ **both "arguable" ones are defects, one a reversed
rules claim. "Arguable" is not what a caption that inverts Rule 83.6 is.** And its framing of the label
question — *"a label is not a sentence"* — **presumed the caption was the only thing the label answers to.
It is not, and the brief named neither the glossary sentence nor the sibling diagram that had already
decided it.**

⚠️ **THE FALSE-POSITIVE RATIO IS NOT UNIFORM, AND THAT IS THE FINDING:**

| band | read | defect | FP |
|---|---|---|---|
| `suspicious` (score 3) | 6 | **2** | 4 |
| `worth a look` (score 2) | 68 | **0** | **68 — 100%** |
| never-scanned, score ≥ 2 | 18 | **0** | 18 |

**Score 3 requires an IMPERATIVE tail; score 2 almost never has one. Every defect this corpus has ever
repaired had a tail a reader could ACT on.** ⚠️ **A band with no imperatives is a band with almost no
defects** — and 68 hand-read hits is what it cost to establish that.

**Two clearing rules to add to the docstring, offered by the reviewer and worth adopting:**
- **(a)** A tail supplying the **positive replacement** for the negated element (*"is not a rush against you
  — it is a clear path to an empty net"*) **discharges the negation by contrast.** All four shipped defects
  in the docstring have tails making **new, unrelated** claims.
- **(b)** Ask whether the inverted tail is the reader's **only** source for what it flips.

⚠️ **THREE CLOSE CALLS DECLARED RATHER THAN BURIED.** `faceoff-ozone-winger-walkout`,
`never-both-defencemen-to-the-puck` and `pp-131` **all invert into the cardinal-rule direction** (*"this is
a rule of hockey"*) and were cleared **only** because the hedge is restated, negation-free, in the very next
sentence. The reviewer's own words: *"I would not argue with a `safety-reviewer` who took the other view on
any of them."* **These want the rendered audio, not a re-read.**

### ✅ CLOSED 10 September 2026 — the 56.1 lateral clause. ⚠️ **THE ROW REFUTED FIVE WAYS, AND ONE OF THEM WOULD HAVE INTRODUCED A DEFECT.**

**Repaired:** `breakouts.md` 2 lines, `playing_without_the_puck.md` 7 lines, every value under cap.

⚠️ **1. THE ROW SAID "USA Hockey numbers this 625(a)(4)". IT DOES NOT — THAT IS A DIFFERENT CLAUSE.**
625(a)(4) reaches *"[a] defending player who changes their skating lane or foot speed in an effort to play
the body of an opponent **who is no longer in control of the puck**"* — a **lane/speed test on a defender
against a player who HAD the puck**. The NHL/IIHF 56.1 clause reaches **any** player moving laterally
without established body position who contacts a **non-puck carrier**, usually one who never had it.
**USA Hockey's actual counterpart is the Note to Rule 625 — which is exactly what both documents already
cited.** ⚠️ **Both were already right. Acting on this row would have made two correct citations WRONG.**

⚠️ **2. The row understated the scope.** It named **one** bad value. **FOUR** were NHL-only —
`playing_without_the_puck.md:438`, `:439`, `:440`, `:444` — and the **Sources trailer was missing IIHF 56.1
entirely.**

**3. The lateral sentence IS word-for-word identical** in the NHL and IIHF books; only the defined-term
quotation marks differ. ⚠️ **But the *block the path* sentence GENUINELY DIFFERS** — `he is`/`his` against
`they are`/`their`, and the quotation marks fall differently. **The two sentences must not be treated
alike, and an earlier brief merged them and gave the NHL's wording for both.**

**4. The row's SOURCE line numbers were wrong.** The target line numbers were right.

⚠️ **5. A FOURTH FALSE-ZERO MECHANISM, AND THIS ONE IS THE NASTIEST YET.** A full NHL page banner sits
**INSIDE** the pick-definition sentence: *"…without initially having body position, `NATIONAL HOCKEY LEAGUE
Previous Page 87 Table of Contents…` thereby taking him out of the play."* **A verifier searching the
corpus's own quotation as one phrase gets a CONFIDENT ZERO from text that is present and correct.**
**The four mechanisms now measured: a string split across two source lines · typographic quotes ·
hyphenation across a line break (`face- off`) · a page banner spliced mid-sentence. FLATTEN WHITESPACE AND
DE-HYPHENATE BEFORE BELIEVING ANY ZERO.**

⚠️ **HAND-OFF TO `safety-reviewer`, OPEN — IIHF 56.5 IS A HARSHER TIER THAN NHL 56.5, AND THE BRITISH
READER IS UNDER THE HARSHER ONE.** IIHF 56.5 reaches **a major plus a game misconduct on reckless
endangerment with nobody hurt**, where NHL 56.5 **waits on an injury**. The corpus has not been checked for
whether it states the NHL tier to a British audience.

### ✅ CLOSED — NHL EDGE publishes no pass-speed statistic. Verified in a browser, which is the only way it could be.

`content/technique/passing_and_receiving.md:46` and `:842` **HOLD as of 9 September 2026.** Read in real
Chrome with JavaScript running: **five skater categories — Shot Speed, Skating Speed, Skating Distance,
Shot Location, Zone Time** — and the **complete 40-term glossary** extracted from the rendered page.
**The string "pass" does not occur anywhere** in the glossary (15,803 chars), the skaters index, a player
page, "What's New", Teams or Comparisons.

⚠️ **AND THE `sources/README.md` GOTCHA NOW HAS A MECHANISM.** `edge.nhl.com/en/skater/` **302s to
`www.nhl.com/nhl-edge/skaters/`** — EDGE was rebuilt as "NHL EDGE 2.0" under `nhl.com`. So
`edge.nhl.com/en/skater/BANANAFISHZZZ` redirects to a shell returning the identical title
`Skater Stat Leaders | NHL EDGE | NHL.com`. **A status code from that host still carries no information,
and now the repository knows why.** Worth adding the redirect to that README entry.

⚠️ **Stated limits, not glossed:** the season and game-type selectors could not be fully expanded, and the
cookie banner was left untouched in both directions. The claim rests on what was visible with the banner
present.

### ✅ NEW TOOL — `scripts/check_chunk_splits.py`, and it CLOSED the handover it was built for

⚠️ **A WORKLIST, NOT A GATE. It has no `--strict` and must never gain one.**

**Why it exists.** Round 70 made ~60 repairs whose shape is exactly *"prohibition. remedy."* That shape
is correct in the ear **only if a listener hears both sentences together.** ⚠️ **Chunk packing is
GLOBAL — an edit to an earlier section re-packs every chunk after it** — so a repair can land on an
audio boundary and give the listener the prohibition at the end of one file and the remedy at the start
of the next. **That is STRICTLY WORSE than the defect it repaired.** The agent that named it could not
test it, because the only run that counts is one taken after every agent has finished.

⚠️ **`check_chunk_tails.py` DOES NOT COVER THIS.** That tool inspects a chunk's TAIL in isolation; this
is a RELATION between a tail and the next chunk's HEAD. An agent hit exactly that gap this round and
said so: *"it inspects tails, and this is a head."*

**Result, run 9 September 2026 with every content agent finished: 2,894 boundaries, 2 hits, BOTH read,
BOTH correct as written.** One is a reassurance (*"No shame in this at all."*) that is not a prohibition;
one is an explanation that tells the listener in terms it is *"half of a five-clause Interpretation"*.
**No repair split a prohibition from its remedy.** ⚠️ **Two hits out of 2,894 is the expected steady
state — read every hit, and do not sweep.**

### ✅ CLOSED — the audio is PUBLISHED, and every protocol-level check the platforms require passed

Everything is done except the upload, which is **outward-facing and needs the owner** (non-negotiable 9).
`scripts/upload_podcast_audio.sh` is **dry-run by default** and refuses to run when
`podcasts_web/manifest.json` and `site/src/data/podcast.json` disagree.

**THE SEQUENCE, and it must be in this order:**
1. `python3 scripts/build_podcast_cover.py` (or drop an owner cover at `podcasts/cover.png`).
2. `S3_BUCKET=… bash scripts/upload_podcast_audio.sh` — **dry run first**, then `--go`.
3. Confirm the URLs resolve **and that HTTP HEAD and byte-range requests work on them** — ⚠️ **Apple
   requires both**, and nothing in the repository can check it.
4. **Then** set `AUDIO_ENABLED = true` in `site/src/consts.ts`. ⚠️ **That one flag governs the on-page
   player AND the downloads Audio section** — deliberately, after the first attempt disabled the player
   for 404s while leaving 46 links to the same missing files on the downloads page.
5. Validate the feed at Cast Feed Validator and Podba.se (both named by Apple AND Spotify; both verified
   reachable). ⚠️ Apple's own pass-through validator needs a Connect sign-in and is **owner-only**.
6. Spotify: the owner chose *ship the feed, then try Switch as a reversible experiment.*

⚠️ **THE ONE THING NOBODY HAS EVER SEEN is this player working against a file that exists.** Every
observation about it was made against a 404. **Dropping ONE episode into `site/public/audio/<doc_id>.m4a`
locally and building would close that gap in one run**, and is worth doing before the real upload.

### ✅ CLOSED — `netFrontWalkOut` cut. ⚠️⚠️ AND THE ROW'S PREMISE WAS FALSE: THE MIGRATION WAS ALREADY DONE.

**5,764 → 2,858 raw; 17,292 → 8,574 spoken.** The corpus's longest caption, halved.

⚠️⚠️ **THE ROW BELOW SAID "seventeen phrases return ZERO in `goaltender.md`" AND THAT THE CAPTION WAS THE
SOLE CARRIER FOR A GOALTENDER READER. ALL SEVENTEEN ARE PRESENT.** Measured flattened, independently, twice:
`608(b)` **4** in `goaltender.md` and 10 in `defender.md`; `7.5(c)` **4**/9; `walking speed` **4**/7;
`Blind Hockey` **2**/10; ⚠️ **`edges are gone` — which the row called zero in `defender.md` — is 3/3**, and
sits at `defender.md:253` **inside the very subsection hosting the marker.**

**They are not scattered.** `goaltender.md:1147` carries the whole walk-out ladder — 604(a)–(e), 7.3(a)–(c),
101.1, Blind Hockey, 56.1, 625(a)(4) — and `:1148` the goalmouth direction, the goal-post spinal mechanism,
walking speed and 608(b)/7.5(c)/43.2. **The migration this row demanded as step 1 was ALREADY DONE, in
`a7871c7` and `35bddbb`. Only step 2 was ever outstanding.** The caption was not a sole carrier; it was a
**fourth copy**.

⚠️⚠️ **WHERE THE FALSE PREMISE CAME FROM, AND THIS IS THE FINDING.** A comment block in
`site/src/diagrams/body_contact_and_battles.mjs` asserted *"`content/positions/goaltender.md` carries
neither 608(b) nor 7.5(c) ANYWHERE"* and, in capitals, ***"NOTHING IT LEANS ON MAY LIVE IN A HOST
DOCUMENT'S SURROUNDING PROSE."***

**A stale assertion in a CODE COMMENT became a plan row, became a brief, became an agent's instructions.**
⚠️ **And its PRINCIPLE — that a caption may lean on nothing in its host — is what produced the longest
caption in the corpus.** A caption forbidden to rely on its host must restate everything, in every host,
forever. **The agent rewrote the comment as well as the caption; leaving it would have re-manufactured this
exact brief next round.**

⚠️ **THE GENERAL FORM: a comment is not a measurement, and a comment that states a fact about ANOTHER file
goes stale the moment that file is edited — silently, because no checker reads comments.** The corpus
already knows this about plan rows and review records. **It is now known about `scripts/` and
`site/src/` comments too.**

### ✅ 2 · "A NOTE ON LANGUAGE" — DECIDED. No drift found; four terms to converge, the rest stay.

Read in full, by hand, against `rink_map_and_glossary.md`. **⚠️ THE MOST IMPORTANT RESULT IS A
NEGATIVE ONE: there is NO disagreement to reconcile.** All six copies of `high slot` give the
identical span — *"faceoff dots up to the top of the circles"* — matching the glossary exactly.
`point`, `half-wall` and `goalmouth` likewise. **The duplication is a drift RISK, not a live
defect**, which downgrades this item's urgency and rules out any emergency edit.

*(The corpus's known high-slot geometry defect lives in a different layer — built SVG coordinates —
and is closed and machine-verified. It never touched these nine prose definitions.)*

**REPLACE WITH ONE SHARED SENTENCE — 4 terms × 6 sites.** These are pure rink geography, identically
worded already, and owned in one place. Six independently typed copies is drift risk with no
compensating value: no document does anything different with *"the point is the area just inside the
blue line"*. Converging them gives a future correction **one string to grep, not six paraphrases**:

- *"The point is the area just inside the blue line where defencemen stand, exactly as defined in Rink Map and Glossary."*
- *"The high slot is the upper part of the slot, from the faceoff dots up to the top of the circles, exactly as defined in Rink Map and Glossary."*
- *"The half-wall — also called the half-boards — is the boards roughly level with the faceoff dot, between the corner and the point, exactly as defined in Rink Map and Glossary."*
- *"The goalmouth is the immediate net front, not the same as the slot, exactly as defined in Rink Map and Glossary."*

⚠️ **Each is SELF-CONTAINED for a listener** — the definition is spoken in full before the pointer,
so nobody has to follow a link. **This is not a deletion pass; nothing a listener hears goes away.**

**KEEP EVERYWHERE:** `strong-side/weak-side`, `high/low`, `rim/reverse`, `slot`, `forecheck`,
`F1/F2/F3`, `the wall`. Each carries **document-specific elaboration that is the point of the
entry** — a centre's strong side switches every puck touch, a defence pair's are job titles they
swap, a winger usually holds one side a whole sequence. `forecheck` is correctly reframed per
perspective: *your* pressure in their end (center) versus *the opposition's* in yours (breakouts).
**Deduplicating these would strip exactly the position-specific content the note exists for.**

⚠️ **AND THE DOCUMENT-SPECIFIC CAVEATS RIDING ALONGSIDE THE FOUR REPLACED TERMS STAY PUT** — e.g.
`defender.md`'s *"who owns each layer is a coaching choice… under man-on-man each belongs to
whoever's man is standing in it"*. That is non-negotiable 7 content and has nothing to do with where
the boards are.

### ✅ RESOLVED — the 3%/1% attribution, by ruling out rather than picking

⚠️ **The decisive evidence is internal: the HockeyViz artefact is a *"contour plot titled 'Goals per
Unblocked Shot, 2007-2017'"* — a LOCATION contour, one value per rink location.** ⚠️ **A location contour
has NO TRAFFIC VARIABLE, so a screened-versus-unscreened split CANNOT be read off it.**

⚠️ **BUT THE AGENT DECLINED TO "PICK" CLEAR SIGHT, AND WAS RIGHT: *"the ruling-out argument eliminates the
MAP as a source of a with-and-without split; it does not CONFIRM the tracking."*** **Picking would also
have diverged from `shooting.md:483`, which says the provenance *"is not settled even there"*.**

⚠️ **AND MY BRIEF OVERREACHED ON THE EVIDENCE: I cited `:1091` as corroboration. It lists the *"33% versus
3%"* pair, which `:135` shows is Boyle's OMHA reporting of Valiquette's green/red study — A DIFFERENT
FIGURE.** **Only `:891` names the 3% as Clear Sight's directly.**

**The repair RE-BASED the warning rather than fixing it:** ⚠️ **the old text said the two figures share a
source (which would make them non-independent); the real reason they do not corroborate is that they
MEASURE DIFFERENT THINGS and the numeric overlap is a coincidence of digits.**

**Still open: no source for the 3%/1% exists anywhere on disk.** ⚠️ **`hockeysarsenal.substack.com/p/point-shots-suck`
would settle which publication first printed the split. This repair is an internal-consistency fix, NOT a
provenance resolution.**

### ✅ ALL SIX SPLIT CAPTIONS CHECKED — every boundary is safe

**Nothing measures where a caption is cut. Checked by hand:**

| caption | unit 1 ends on | verdict |
|---|---|---|
| `the-call-and-who-can-see-it` | the **prohibition** — *"never take that contact with your back to the boards, and never duck"* | ✓ |
| `icing-the-race-and-the-dot` | a **restraint** — *"do not run yourself into the end boards for nothing"* | ✓ |
| `the-privileged-area` | a description of what the region **is** | ✓ |
| `the-risk-map` | a legibility caveat | ✓ |
| `oz-net-front-screen` | a **disclosure** — *"this document has no count of how many are"* | ✓ |
| `forecheck-pinch` | verified by its repairing agent — the receiving posture is **voiced alone** | ✓ |

⚠️ **No permission ends a chunk with its limit opening the next.** **But this is luck, not design: nothing
checks a caption's split points, and the six longest captions in the corpus were all written by authors who
did not know they would be cut.** **Wanted: report a caption's BILLED length and its split boundaries.**

### ✅ CENSUSED — the unscoped-hitting-instruction class does NOT recur, and that is the finding

The `safety-reviewer` found a **critical**: `body_contact_and_battles.md` §5's late-hit block led
with `Action: Check the puck carrier, and check them now` and **carried no checking-league scope on
any of its values.** The repairing agent then said plainly what it could not do: *"I checked no other
file for the same unscoped-instruction shape, and the round-10 defect is by nature corpus-wide.
`defending_the_rush.md` and `positions/defender.md` are the obvious next candidates and I did not
look at them."*

**Censused corpus-wide by the coordinator.** Every ` ```facts ` block was extracted and tested for a
contact-delivery instruction (`check the`, `body-check`, `deliver a hit`, `hit through`, `finish the
check`, `drive the shoulder`, `step into`, `ride … into`) **against** a checking-league scope
anywhere in the same block. **13 candidates. All 13 read. None is a defect.**

**Why each cleared — and the pattern is worth keeping:**
- **Most are PROHIBITIONS, not instructions** — `Never: Deliver a hit where the head was the main
  point of contact`, `Never: "Finish your check" on a player who has already passed or shot`,
  `Never: Step into a defender on a crisscross`. ⚠️ **A prohibition binds every division, so scoping
  it to checking leagues would be a DEFECT, not a fix.** The repairing agent independently reached
  the same conclusion about four blocks inside §5 itself.
- **Two carry the scope in words the pattern could not match** — `forechecking_systems.md:198`
  (*"At rec and beer-league level body checking is usually not permitted at all"*) and
  `body_contact_and_battles.md:33` (*"one is legal everywhere, the other is not"*). ⚠️ **Exactly the
  false-negative shape this round has now hit three times: a claim stated in words the searcher did
  not choose.**
- **The rest are idiomatic** — *"check the rink first"*, *"check the far side"*.

**The body layer was then censused too, because the facts-only version had left that gap open.**
19 candidates among body list items, filtered to exclude prohibitions and units carrying their own
scope. **All read. Almost all clear for the same reasons** — penalty *definitions* in
`rules_primer.md` (Charging, Checking from behind, Holding, Illegal check to the head), Common
Mistakes bullets, and warnings. **One was referred out as a question rather than a finding:**
`offensive_zone_play.md:~935`'s *"Pinching without arriving on contact. 'Take the player or take the
puck.'"* ⚠️ **Referred as a question deliberately** — this corpus distinguishes **body contact from
body checking**, and you can take a player by angling in any league, so the bullet may be entirely
sound. **Manufacturing a finding there is the round-44 failure mode.**

⚠️ **So the class is NOT widespread, and the recorded answer is a measurement rather than a
silence.** The next round should not re-run either census. **Body PARAGRAPHS were then censused as well, closing that gap in the same pass: 5 candidates, all
idiomatic (*"Check the season on any birth-year table"*). ZERO.**

**So the census is complete across all three voiced layers — facts values, list items and
paragraphs. One critical, found by a reviewer and repaired; one candidate referred out as a
question; nothing else.** ⚠️ **Do not re-run any of the three.**

⚠️ **What it still does not establish, stated so nobody assumes otherwise:** every pass was a
**keyword** filter used to select what to read. **A hitting instruction phrased in words none of the
three patterns contained is invisible to all of them** — and this round hit that exact false-negative
three separate times, including twice inside these very censuses, where two blocks carried their
scope in words the pattern could not match (*"At rec and beer-league level body checking is usually
not permitted at all"*, *"one is legal everywhere, the other is not"*). **The censuses ordered the
reading. Only the reading cleared anything.**

### ✅ CENSUSED — the `Never:` em-dash inversion in the FACTS layer is down to two, both routed

⚠️ **`_label_lead` renders `Never:` with an EM DASH deliberately** — a full stop terminates the
negation and leaves a bare imperative telling the listener to do the prohibited thing. **So a SECOND
em dash inside the value is prosodically identical to the label's own, and can re-carry the negation
onto whatever follows it.**

**Censused over the whole facts layer: 513 `Never:` values.** 126 carry a second em dash. Narrowing
to tails that are an imperative or an elliptical noun phrase left **51**. **Reading all 51 left
TWO.**

| | |
|---|---|
| `special_teams.md:~966` | `Never: Put a skate in the blue paint — feet out of the crease under all four books` → heard as *"never have your feet out of the crease"* |
| `shooting.md:~153` | `Never: Lean on a definition to excuse the swing — keep the blade down, look before you wind up, and three-quarter it in traffic` → **three imperatives with the negation still open**, about a slap shot in traffic |

**Both routed.** The repaired form already exists in the corpus and should be copied rather than
invented: **a full stop, then the positive instruction as its own sentence** — *"Never: Set your feet
in the blue paint. Get them outside the crease instead…"*

⚠️ **DO NOT SWEEP THIS PATTERN. Almost every second em dash in a `Never:` value is CORRECT** — it
introduces a **reason clause with its own subject** (*"— five teammates are already looking at it"*,
*"— one body then guards two of you"*), which does not invert. **A sweep would damage 49 correct
values**, and this file already records four rounds where a sweep over a real pattern damaged
correct text.

**The non-em-dash separators were then censused too**, because the em-dash pattern structurally could
not see them and an agent found one by reading its own file. **11 candidates; reading leaves ONE** —
`shooting.md:~294`, `Never: Stop your feet before shooting; **learn to release in stride**`. The
other ten are **coordinated lists of prohibited acts** (*"Hold a caught puck, carry it, turn with it
or throw it"*), where the comma joins items **inside** the negation and it **should** carry. Routed.

⚠️ **Its justification is an asymmetry of cost, NOT a measurement, and that distinction must survive
into the next round.** Converging on the canonical full stop loses no claim and matches the form used
everywhere else, so it is free; **and if a semicolon does behave like a dash, an instruction was
inverting.** ⚠️ **Nothing claiming a semicolon or colon was MEASURED to invert may be written into
`content/`.** The em dash remains the only separator whose inversion is measured. **Its severity is
also lower and must not drift upward: the inversion would teach "never release in stride", a
technique error rather than a penalty or an injury.**

⚠️ **THE STANDING LIMIT ON THIS ENTIRE CLASS: nobody on this project has ever heard the audio.**
Every inversion finding — including the em-dash mechanism itself and `_label_lead`'s own docstring —
rests on **reading markup and reasoning about prosody**. An agent said it plainly: *"a voice that
under-realises the sentence boundary inside a single `<p>` could still run 'Never' into 'Keep', and
no amount of reading the markup would show that; only listening would."* **Synthesising one minute of
one repaired value would settle more than any further census can.**

⚠️ **Scope otherwise:** this censused the ` ```facts ` layer. It says nothing about the **diagram
captions**, a separate row with its own measurement, nor about the **negation-free imperative**
class, nor about the same prosodic shape in a **body sentence or Common Mistakes bullet**, where
there is no `Never` label to census on at all.

### ✅ CORRECTED — the "bare arrowhead" premise is FALSE at HEAD, and all nine figures were wrong

⚠️ **The FOURTH stale row found today, and the most thoroughly wrong.** The claim under test —
*"a `pass` route can render as a bare arrowhead with no visible line"* — **does not hold**, and
its two worst-case numbers were not true even of the pre-fix state.

**`rink.mjs` already carries two committed mitigations the row's model ignores:**
1. **`stroke-dashoffset` phase correction** (`rink.mjs:1341-1365`) — the dash pattern is
   re-phased so the first dash begins exactly where the line leaves the start glyph.
2. **A half-size arrowhead below one dash** (`shortHead`, `rink.mjs:1409-1412`, `AH.short = 2.25`).

**Measured on the rendered artefact, not the source: all 59 pass routes draw at least one full
2.4 ft dash. ZERO render as a bare arrowhead.** The `ah-short` marker was confirmed emitted and
referenced in the output SVG.

**All nine figures refuted individually — and the error is not correctable by a constant.**
Seven were optimistic, two pessimistic. They reproduce to ±0.01 ft under a flat
`arcLen − 3.5 − 2.6775`, which identifies the row's method exactly: a **constant** 3.5 ft start
occlusion, no emergence walk, no `shortHead`.
- The 2.68 ft head is **right**. The **3.5 ft glyph occlusion is wrong** — the true ink is
  **3.875 ft**, and it is **not a constant at all** but a per-route walk. ⚠️ **`rink.mjs:1089`
  already records the 3.5 as wrong**, in the source, and the row was written anyway.
- `centre-swing-low` (6.10) and `breakout-up` (6.19) are **NOT under 6 ft.**

⚠️ **The row's list MISSED the corpus's shortest pass route.** `winger-dz-reverse` #0 is
**2.83 ft** — the only route below 3.0, drawing one dash beside a **full-size** head, so the
arrowhead is the largest mark on it. Its arc is **identical** to `off-wing-open-to-the-ice` #2,
so **under the row's own flat model it scores 3.53 and ties for third — it should have been ten,
not nine.** `rink.mjs:1390` names it only in passing, at *"3.16 ft"*, conflated with the other
route; the two are 2.83 and 3.15. **The shortest route in the corpus was uncounted and
misattributed at the same time.**

**True distribution:** 8 of 59 under 6 ft · 4 under one 4.2 ft dash cycle · **0 under one dash
(was 2 before `shortHead`)** · 0 with a clipped first dash.

⚠️ **And the 6 ft threshold is the wrong cut.** There is no cliff there. The cliff is at **one
visible dash** (ranks 1-4, 2.83-3.46 ft), with a soft shoulder at ranks 5-8 whose *second* dash
is 0.14-0.38 ft — **0.4 to 1.2 px on a phone, i.e. invisible.**

#### Still genuinely open, and narrowed

- ⚠️ **An INVERSION nobody designed:** ranks 5-8 sit just **above** `shortHead`'s threshold, so
  they get the **full** head plus an invisible second dash — and look *worse* than ranks 2 and 4,
  which get the short head. Whether that matters is a judgement about the picture.
- **5 routes have the arrowhead partly buried** under the destination glyph. `shortHead` computes
  `arcLen − sOut − headLen` and **never subtracts trailing occlusion** — `support-distance-range`
  #0 loses **28% of its marker**.
- ⚠️ **No gate in this repository measures legibility.** `check-arrivals.mjs` excludes `pass` from
  `ARROW_KINDS`, correctly and deliberately (*"a shot ending at the goalie is what a shot IS"*),
  so it sees **zero of the 59**. Nothing measures visible dash length, dash count, or whether a
  symbol still reads as itself.
- ⚠️ **THE MEASUREMENT THIS DECISION ACTUALLY NEEDS, and nobody has produced it:** a **blind
  reading of ranks 1-4** by someone shown the legend and nothing else. The censusing reviewer
  read `support-distance-range` #0 as ambiguous with a bar/slash terminal; `rink.mjs:1390` records
  an independent blind reading taking the same form correctly as a pass. **Those two readings
  conflict and cannot be adjudicated from the geometry.**
- **Dark theme was never looked at**, and 50 of 59 routes were measured from source without being
  seen as pictures.

⚠️ **The method lesson, and it cuts both ways:** the censusing reviewer's own two intermediate
conclusions were wrong and **only rendering caught them** — a fit-to-column phone model gave
1.68 px/ft for full-rink diagrams and a "full-rink is a separate crisis" conclusion that
**collapsed** once `global.css:1828`'s `min-width: 640px` scroll box was accounted for (3.14 px/ft,
near-identical to half-rink). **Geometry from source cannot substitute for looking at the picture.**

#### The original row, retained to show what a plausible measurement got wrong — DO NOT ACT ON IT

**Measured by a diagram pass that cropped and zoomed the pictures rather than reading the source.**
The arrowhead marker occupies **2.68 ft** of a route's tail (`markerWidth 4.5`, `refX 8.5`,
`markerUnits` defaulting to `strokeWidth` at stroke 0.7); a glyph plus its halo hides **3.5 ft** of
the head. `support-distance-range`'s only route is **8.68 ft**, leaving **2.5 ft** of line inside a
**4.2 ft dash cycle** — so the dash is swallowed entirely and *"the reader sees an arrowhead alone."*

**Nine routes under 6 ft of visible line, across eight diagrams:** `pp-overload` 2.14 ·
`support-distance-range` 2.50 · `off-wing-open-to-the-ice` 3.53 · `support-angles` 4.73 and 4.97 ·
`oz-five-man-shape` 4.92 · `oz-half-wall-options` 4.92 · `centre-swing-low` 5.50 · `breakout-up` 5.54.

⚠️ **It defeats the style guide's own test** — *"check each is unmistakable at the size the diagram
actually renders"* — **and `check-arrivals.mjs` cannot see it.** That check excludes `pass` from
`ARROW_KINDS`, which is **correct in principle** (*"a shot ending at the goalie is what a shot IS"*)
but **assumes the route still looks like a pass.**

**Three options, none of them cheap:** shorten the marker for short routes; start the route at the
**glyph edge** rather than the anchor, recovering the hidden 3.5 ft; or scale the dash to route
length. ⚠️ **Any of them changes every route in the corpus, so it is an owner's decision, not a
repair.** ⚠️ **And eight more short-pass routes have not been cropped and looked at** — the reviewer
found this one by magnifying a single picture 4×.

### ✅ AUDITED — the reader-only layers, and the headline is that the corpus survived it

**Audited: all 37 Sources trailers, both `## Notes on verification` sections, all 19 pointer tables,
all 3 mid-document dropped paragraphs, and the full render.** ⚠️ **NO CRITICAL.** Every candidate
chased — including the whole of `rules_primer.md` §10, the corpus's largest never-voiced block —
had its safety-bearing content duplicated in voiced prose. **The corpus's disclosure discipline is
better than the layer analysis predicted, and that is a result worth recording rather than a
non-event.**

**What it did find is now a separate open row above** — the British trapezoid position that exists
only in a pointer table, the HECC Type C age limit reachable by no listener, a whole `##` section
rendering as a 25-word apology, and seven documents pointing at layers nobody hears.
⚠️ **`scripts/check_pointers.py` now finds that last class mechanically** and is registered in
`CLAUDE.md` as a worklist.

⚠️ **The audit's own declared blind spot is the more important half and is NOT closed:** *"the
inverse defect — a scope that IS voiced but arrives too late, too quietly, or after the claim it
qualifies. I treated 'present in a voiced layer' as sufficient. It is not."* Its example is its own
upheld finding: a document enumerates fifteen undocumented calls **at its very end**, hundreds of
spoken seconds after each was taught as usable. **The whole "upheld" list in that report should be
re-read for ORDERING.**

⚠️ **Coverage was partial and said so:** 8 of 37 trailers read word-for-word and 29 through a keyword
filter that **excludes any sentence containing "flagged"/"labelled"/"in the text"** — so a
trailer-only scope *asserting* it was flagged when it was not passes through invisibly **in both
directions**. 8 of 19 pointer tables traced. **1 of 27 prose tables read.**


**Census done: 46 tables, 27 narrated, 19 not.** Pointer coverage verified exact — 19
pointers for 19 tables, 1:1, so no listener is silently deprived. **The per-table omission
audit is what remains**: does each table's load-bearing content survive in a layer a
listener reaches? Highest consequence is `body_contact_and_battles.md:1131`, whose cells
carry the hooking stick-to-stick scope, interference as a floor not a ceiling in three
books, the 2025-26 high-sticking rewrite, and tripping needing no fall — none of it heard.
Full table of the 19 in the round record.

#### Original row

`md_to_speech.py` narrates a table only if **≤3 columns, ≤14 rows, and every cell ≤200 characters**
(`TABLE_MAX_*`). Anything wider becomes a spoken pointer: *"…it does not read well aloud, so it is not
narrated. The full table is on the website."*

**Measured on `body_contact_and_battles.md`: 1 table narrated, 1 pointered — longest cell 949
characters at HEAD.** These tables carry **four-book penalty comparisons**, which is exactly the
material a listener most needs.

⚠️ **So "put it in the body" is not a complete propagation answer.** A claim whose only non-facts home
is a wide table reaches readers and **not listeners** — and **no check can see this**, because the
layer tests compare facts against body and the table *is* the body. It bit a repair in this round:
Hockey Canada's *"on the pretext of playing the puck"* foreclosure would not fit the 300-char facts
cap and went to the table alone.

**Not yet censused corpus-wide.** The work: run `md_to_speech.py --report` over all 26 in-scope
documents, count `table.pointer` against `table.prose`, and for each pointered table ask **whether any
claim in it exists nowhere a listener reaches.** ⚠️ **Do not fix by shrinking tables** — they are good
for readers. The answer is likelier a facts line or a prose sentence carrying the load-bearing half.

### ✅ RUN — the OMISSION pass over the facts layer, twice, and the second pass found the criticals

**Two passes ran.** The first indexed all **805 blocks / 5,041 facts**, read **15 in full**, and
built detectors over all of them; the second took its handover — **the blocks at `HARD_MAX = 11`,
where the style guide's own diagnosis is that something has been evicted** — and read **36 of 56**.

⚠️ **The population moved while they worked: 55 → 56 blocks, 5,041 → 5,049 facts.** One block
dropped out and back in at a new line number. **Every line number from those passes is a snapshot.**

**Criticals found, none of which any checker can see:**
- **In-game penalty accumulation reached NO facts block anywhere** — tested by regex over all 5,049
  fact lines. Every fact in this corpus prices a foul individually, so a listener takes a third
  cheap stick minor believing it costs two minutes. **Under Hockey Canada it ends their game.** Now
  extracted, with **Rule 4.8's Note 1** — *"a Game Ejection is not equal to a Game Misconduct… does
  not trigger any automatic suspension"* — so the reader does not over-fear instead.
- **USA Hockey's push-in relief reaches your POSITION, not what you do next**, stated at four sites
  with the limit at none. `617(c)` and `625(a)(8)` returned **zero** across all 5,049 facts.
- **A glove or stick in front of the goalie's face is a Rule 75 unsportsmanlike minor**, in no block
  at all — so every net-front block taught *"screening from outside the crease is legal"* and none
  named the thing that is not.

⚠️ **17 blocks at the cap have still been read by NOBODY**, and two of them —
`center.md:506`, `defender.md:105` — sit on penalty-kill and breakout-under-pressure, the ground
where these findings clustered. **That is the next scope.**

⚠️ **A detector produced a false negative that only reading caught**: a block was cleared as missing
the hooking-escalation tier because the tier lives in the **second half of a 231-character fact whose
first half is about slashing**, and the pass's own 200-character output truncation cut it off.
**Every "absent corpus-wide" verdict is bounded by the token sets its author chose.**


**Every propagation check this round was a PRESENCE test** — does the counterweight/qualification
appear in the same layer as the claim. **None can see a fact that never mentions the other book at
all**, and that is the shape round 20's seven omission criticals took.

**The pass:** for each ` ```facts ` `Rule:` line naming a book or books, ask **what the other books
say**, and whether the silence changes what a reader should do. Run it as an **explicit enumerated
list per document**, not as a grep — the defect has no string to match on.

⚠️ **It has not been run on any document this round.** ⚠️ **No block or fact count is given here on
purpose — run `python3 scripts/check_facts.py` for the live figure.** This row previously carried
**794 blocks / 4,903 facts** while the tree held **801 / 5,006**, and the round record carried a
third figure again for the same measurement. **A count written into a plan row is a second copy of
something a checker already prints, and the copy is what rots** — the discipline this file states at
its own top, violated a thousand lines below it.

**Priority order suggested by what this round found:** `body_contact_and_battles.md` and
`rules_primer.md` first (they carry the most cross-book claims and the most negative-existence
claims), then the four-book penalty sections of `defensive_zone_coverage.md`, then the documents whose
`Rule:` lines this round rewrote under character pressure — **because a line trimmed to fit a cap is
exactly where a book gets dropped.** One such trade is on record and was disclosed properly; **it is
the undisclosed ones that this pass would find.**

### ✅ CLOSED — USA Hockey 610(g), now cited at six sites in two documents

**Done and propagated to five layers of `rules_primer.md`** — body, the §10 comparison table's
USA Hockey cell, a new Common Mistakes bullet, Key Takeaway 3, and the Sources trailer — plus
`faceoffs.md`. Verified: `grep -rc "610(g)" content/` returns `rules_primer.md:5`,
`faceoffs.md:1`.

⚠️ **What was added is NOT what the row asked for, and the difference matters.** The row framed
610(g) as a missing citation. Reading the book found **two** warning-first provisions at
**different penalty classes** — **610(g)**, a **bench minor** for additional substitutions or
delay in any manner, and **204(a)¶2**, a **minor** for undue delay in changing players — plus
**204(a)¶3**, which closes the change window at every stoppage and is the provision the other two
enforce. ⚠️ **The corpus's existing negative was NOT overwritten**: 610(g) penalises *delay*, not
substitution after an icing, so *"USA Hockey imposes no substitution bar after an icing"* stands.
What was missing is that a bad change is **not free**.

⚠️ **Three self-caught defects in the repair are worth carrying forward**: *"an individual minor"*
was written where the book says only *"a minor penalty"* and names **the team** as the offender —
replaced with an explicit disclosure that 204(a) does not say who serves it; Casebook Situation 15
was generalised to *"a late change"* when its facts are **a false face-off**, and both sites were
scoped; and the new Common Mistakes bullet voiced as *"…two hundred and four, clause a's own
second paragraph"* — **a bare number with no "Rule"** — found only by running the renderer.

⚠️ **Still open, and it is the interesting half:** *"USA Hockey imposes neither"* is stated
true-but-bare at **seven further sites in six documents**, three of them ` ```facts ` `Rule:`
lines voiced alone. None is false; each is the true half. The most exposed is
`scanning_and_anticipation.md:284` — *"USA Hockey blocks neither (Rules 624, 636(f)), **so there
the tired line gets off**"*.


**Found by chasing an agent's declared handover** (*"search the Situation Handbook and Casebook for a
situation settling the icing/82.2(V) linkage"*). That search returned **no such situation** — the
Handbook's only four `Rule 82.2` citations are off-side and slow-to-the-faceoff, in both editions —
**but the USA Hockey Casebook's signal index turned up something else entirely.**

**USA Hockey 610(g)**, read whole (`usah.txt`, Rule 610 runs (a)–(g)):
> *"A bench minor penalty shall be assessed to any team, **after warning by the Referee**, that fails
> to place the correct number of players on the ice and commences play **or that causes any delay by
> making additional substitutions** or attempts to delay the game in any manner."*

⚠️ **So USA Hockey is a THIRD book with an improper-substitution bench minor**, after the NHL/IIHF
82.2(V) and Hockey Canada 10.1(a)(vii). **It is warning-first, like the IIHF's.**

✅ **This does NOT contradict the corpus, and the census proves it.** Every claim is scoped to the
**icing** bar specifically — *"USA Hockey imposes no substitution bar **after an icing**"*, *"Rule 624
restricts no substitution clause"*, *"Rule 204(a) no icing carve-out"*. **610(g) is about delay by
additional substitution at a stoppage, not about icing.** So this is a **gap, not an error** — which
is why it is a row rather than a repair.

**Worth adding because** the corpus now tells readers in ten-plus documents what a refused change
costs under the IIHF and the NHL, and says USA Hockey blocks nothing — true of the icing bar, and a
USA Hockey reader can still take a bench minor under 610(g) for the delay itself. `grep -rn "610(g)"
content/` returns **zero**.

⚠️ **And the linkage question the handover was actually about is now answered, negatively.** **No
situation in either Handbook edition, and nothing in the USA Hockey Casebook, connects an
icing-barred substitution to 82.2(V).** The corpus's citation of 82.2(V) for that case is an
**inference** — 82.2(V) names three acts and **does not mention icing** — and it now stands flatly in
ten-plus documents. **The agent that found this deliberately disclosed it in one file's Sources
trailer and refused to hedge the other nine**, on the ground that unilaterally qualifying one file
against nine creates the inconsistency rather than fixing it. **That call is the coordinator's and it
has not been made.** The playable instruction is safe on every reading — every reading says do not
try the change.

### ✅ D2 VETTED for `systems/`, `technique/`, `hockey-iq/` — 4 DRAW, ~10 BORROW out of ~700 headings

Three parallel forks read document by document rather than grepping headings, with one fork
overrunning its scope and re-covering two areas independently — which gave an unplanned cross-check.
Six verdicts clashed; each was adjudicated by reading primary text and the `.mjs` headers, not by
trusting either fork.

**The four DRAW candidates, ranked:**

1. `defensive_zone_coverage.md` — **the back door / weak-side seam**, which the document's own prose
   calls *"the chance every coverage system is most afraid of"*. Nothing in the corpus draws a
   weak-side seam beating a collapse. Cheap: two attackers, one cross-ice pass, one seam route.
2. `offensive_zone_play.md` §10 — **F3's job** after a shot. ⚠️ The prose carries three
   coaching-choice variants; **draw only the default shape or it ships thin.**
3. `risk_management.md` §4 — **never both defencemen to the puck** (*"no one — literally no one —
   between the puck and your goalie"*). Four labelled elements.
4. `defending_the_rush.md` — **3-on-1**. Marginal, and the fork said so: the prose may already be
   self-explanatory.

**Zero DRAW candidates in `technique/`** — consistent with `body_contact_and_battles.mjs`'s own
header (*"MOST OF IT IS UNDRAWABLE… not an oversight"*) and with `puck_handling.md` and `skating.md`
correctly owning zero diagrams, which is a documented decision rather than a gap.

### ✅ D3 DESIGN SETTLED 6 September 2026 — and the coordinator's hypothesis was REFUTED

The pilot (`defender-pair-overview`, in `site/src/diagrams/defender.mjs`) is drawn. **The dispatcher
proposed a full-sheet MAP OF REGIONS — one drawn moment per zone — and the agent rejected it**,
on two grounds that generalise to all 31:

1. ⚠️ **The caption budget kills the map.** A three-zone map must state three distinct jobs, and
   **each carries its OWN mandatory coaching-choice hedge** (low zone collapse vs man-on-man; the
   step-up/pinch risk; how far to activate). The cardinal rule forbids dropping any of them, and
   three jobs plus three hedges **cannot fit a caption budget** without shipping at least one
   bare-looking law of hockey. **The hedge count, not the picture, is what makes a summary diagram
   hard.**
2. **The Overview's own prose is not organised by zone**, even though the document below it is. Its
   facts lines are four ideas drawn from across the whole document.

**So the design rule for the remaining 30 is: draw the ONE page-defining idea as a single
representative situation, not a map of everything the page covers.** For `defender.md` that is the
pair — strong side engages the puck, weak side holds the goalmouth, swap when the puck crosses the
middle — which is also the idea that supplies the strong-side/weak-side vocabulary every other
section reuses.

**Caption: 624 characters**, against a corpus median of 1,303, carrying the full
low-zone-collapse-vs-man-on-man hedge and naming the alternative. **It reuses geometry already
clearance-verified in `positions.mjs` rather than re-deriving it**, and deliberately adds no shaded
zone, so `check_zones.py` gains no new cross-diagram row for no teaching gain.

⚠️ **Still open on the pilot:** the marker is NOT yet in `content/positions/defender.md` (that file
was owned by a live D1 agent), it has never been RENDERED, and no `diagram-reviewer` or
`content-reviewer` has seen it. **It is the first of its kind, so there is no sibling to check it
against** — the design above is reasoned, not yet validated by a reviewer. **Do not draw the other
30 until this one has been rendered and reviewed.**

### ✅ Two things upheld, and worth defending

- **The boards-safety instruction has propagated completely** — *"skates parallel"* appears **87 times in
  `content/` across 18 documents, 99 including diagram captions**. ⚠️ **An earlier draft said "109
  sites… 103 of 112" — my FIFTH failed measurement this round, and it changed denominator mid-clause.
  It shipped under a heading about the previous four.** The 18-document count and the propagation
  finding both hold; the totals did not.
  Correctly absent from `goaltender.md`, who does not take a boards hit. **The propagation
  convention demonstrably works.**
- **`breakouts.md` is the model.** Every option gets the same five-part shape — setup, read,
  execution, risk, how it is defeated. 13% bold, one span every 51 words, longest Key Takeaway 149
  words. **Measure the others against it.**

### ✅ `check_pointers` run 6 September 2026 — 2 hits, BOTH deliberately not fixed

`playing_without_the_puck.md:66` ends *"Both computations are set out in full in the written Notes
on verification section"* — and the speech renderer drops that section, so a listener is pointed at
something they never hear.

**Left as is, deliberately.** The disclosure's substance is **already voiced inline in the three
sentences immediately before it**: *"Neither of those is a published figure"*, both derivations
named (Hockey Reference's skater table; the NHL shift-chart API across a small sample chosen for
convenience), and *"not on the same footing as the peer-reviewed possession data above."* **Nothing
a listener needs is behind the pointer.** And the pointer is correct for the web page, where the
section renders — which the tool's own guidance calls legitimate.

⚠️ **Deleting it would cost a web reader a real signpost to fix a listener's mild redundancy, and
the sentence it points at is an honest disclosure** — precisely the shape non-negotiables 3 and 4
protect. **This is the "read every hit, do not sweep" case, recorded so the next run does not
re-open it as unaddressed.**

The second hit, `rules_primer.md`, is a *"table that may be a pointer"* in a mixed document the tool
says it cannot disambiguate — that file is currently held by an A2 agent, so it is deferred rather
than judged.

### ✅ TWELVE SUBSECTIONS SERVABLE BY EXISTING DIAGRAMS — coverage at zero drawing cost

**`goaltender.md` alone: 3 drawn + 6 new + 12 reusable = 21 of 46, up from 3.** The twelve:
the trapezoid → `the-trapezoid` · the running-you tier → `the-privileged-area` · sightline →
`screen-the-goalie-sightline` · 2-on-1s → `rush-2-on-1`, `defender-two-on-one` · 3-on-2s →
`rush-3-on-2-default` **and** `rush-3-on-2-alternative` (the section names both variants and both exist) ·
penalty kill → `pk-box`, `pk-diamond`, `pk-wedge-plus-1` · 6-on-5 → `six-on-five-shape`,
`six-on-five-one-point-stays`, `five-on-six-clear-three-outcomes`, `faceoff-goalie-pulled` · icing →
`icing-gaining-the-line`, `icing-the-race-and-the-dot` · the core calls → the five breakout routes plus
`the-call-and-who-can-see-it` · what a goalie needs → `net-front-walk-out-direction`, `oz-net-front-screen`.

⚠️ **NOT YET APPLIED, DELIBERATELY. The agent's own caveat: *"a caption written for the attacking side can
be wrong when hung under a goaltending section."*** **This is a registry match by subject, not a reading.**
**→ `diagram-reviewer` reads each caption against its NEW host section before any marker goes in. An
earlier agent found the same opportunity — eleven in `winger.md` — so this is a corpus-wide method, and it
is the cheapest coverage available anywhere in the plan.**
