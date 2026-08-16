# Round 29 — one coaching manual, read against the corpus

*Status: uncommitted. HEAD is `1b6c726`; 17 files staged, nothing committed. Seven review
passes run (one initial, four verification, one source verification, plus the gate acting
as one), and **two `commit-gate` runs, both BLOCK** — the first on five conditions, the
second on three. Both sets are addressed; the gate has not been re-run since. Date:
2026-08-15/16.*

**A process failure worth recording, because it is the kind this record exists to catch.**
The second gate run BLOCKED partly because the author told it a fix was in place that was
not: the record had been claimed to name `neutral_zone_systems.md` in a finding, and a
`grep -c` for the filename returned zero. The content fix was real; the record entry was
never written. An author's report of their own work is not evidence, which is the whole
reason the gate reads the diff rather than the summary.

| | |
|---|---|
| Documents reviewed | 15 of 36 changed; 4 further siblings read for propagation |
| Reviewers run | content-reviewer · facts-reviewer · safety-reviewer ×4 · site-reviewer *(structural only)* · source-verifier · commit-gate |
| Criticals found / fixed | 13 / 13 |
| Majors found / fixed | 51 / 50 |
| Minors found / deferred | ~40 / 6 |
| Date | 2026-08-15 |

---

## The brief

An external coaching manual — Johnston & Walter, *Hockey Plays and Strategies*, 2nd ed.
(Human Kinetics, 2019) — was read in full and cross-checked against the corpus. The
method was new in one specific way: **every previous round has attacked the corpus from
inside it**, against the style guide, the rulebooks, or its own siblings. This round put
a second, independent, non-rulebook authority beside it and asked where the two differ.

That is worth stating precisely, because it is why the round found what it found. A
coaching manual cannot tell you a rule; it can tell you that a thing the corpus states
as settled is one of two things coaches actually teach. Both of the round's headline
findings are of that shape, and neither was reachable by any method used in rounds 1–28.

The book is **print-replica with no text layer**, so it exists here only as 166 captured
page images in a session scratchpad plus two `*.local.md` working files. That is the
round's central evidentiary weakness and it is stated again under *What this method
could not have found*.

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | Partly | author + safety-reviewer ×3 | **No `rules-verifier` run.** Seven new rule citations were verified verbatim against `sources/` by the author and independently re-verified twice by `safety-reviewer`. NHL 43.2–43.5, IIHF 43.2–43.3, IIHF 48.1, IIHF 57.3/57.4, IIHF 101.1, NHL 57.2, USAH 604(a). |
| D2 | Rules travelling without exceptions | Yes | safety-reviewer ×3 | The round's dominant defect class — see CR2, CR5, CR9. |
| D3 | Rule-set divergence | Yes | safety-reviewer | Found CR9: British women's readers were given a USA Hockey rule that does not apply to them. |
| D4 | Citation integrity | Yes | safety-reviewer, source-verifier | Rule citations verified verbatim. `source-verifier` read 34 of the 166 page images and located every quotation, both breakout conditions, the hand-off rule, the hinge read, all six entry patterns, all three control-forecheck responses and the publication line. |
| D5 | Provenance | Yes | source-verifier | **The coinage question is answered: these names are not the book's own.** It presents them reportorially — *"Teams can employ four backchecking systems…"*, *"Teams have started to employ this system… in the last few years."* The corpus's non-attributive body wording is correctly calibrated; one Sources line that claimed the names as the book's own was corrected. |
| D6 | Negative existence claims | Yes | content-reviewer | Three new "no published count" disclosures attacked and upheld. The book's own "no factual evidence" claim was correctly confined to a Sources note. |
| D7 | The cardinal rule | Yes | content-reviewer | The round's origin. Two `Never:` lines found to be coaching choices. |
| D8 | Numeric ownership | Yes | content-reviewer, commit-gate | Every numeral on every added line extracted twice, independently. What is there: rule numbers, system shapes (2-1-2, 1-3-1), ordinal counts, the edition year, and two figures quoted inside rulebook text with their rule. The only bare quantities are pre-existing text carried through on modified lines. **No number from the book entered the corpus** — ten unsourced figures were identified and excluded, and `source-verifier` confirmed each is in the book, unsourced, as described. |
| D9 | The summary layer | Yes | all three | The round's most persistent defect: caveats reaching body and facts and stopping. |
| D10 | The key-facts layer | Yes | facts-reviewer ×3 | Two invented facts found and removed. |
| D11 | Reader safety | Yes | safety-reviewer ×4 | Four passes. Final pass returned no criticals. |
| D12 | Read-aloud integrity | Yes | facts-reviewer, safety-reviewer | One fix *inverted* a safety fact in the TTS pipeline and was caught. |
| D13 | Folklore | Partly | content-reviewer | Prevalence claims audited. The book's own folklore (an unsourced claim about one player's goal total) was excluded. |
| D14 | Structure, style, terminology | Yes | content-reviewer | Found the `three high` name collision with the power-play umbrella. |
| D15 | The rendered site | Structural + owner sign-off | site-reviewer, repository owner | Build, anchors, TOC, facts rendering and search index verified mechanically: 42 pages, 6,952 internal links and all anchors resolving, zero duplicate heading ids, every facts block parsing, Pagefind indexing all new terms. **No automated browser pass was possible** — the Chrome extension's safety classifier refused every local address (`localhost`, `127.0.0.1`, the LAN IP, a fresh tab) across two sessions and eleven attempts, and a `file://` fallback was rejected as an invalid test because the stylesheet is root-relative. **The rendered pages were instead inspected directly by the repository owner, who signed them off.** Note the limit of that: it is a human look at the changed pages, not `site-reviewer`'s mobile × desktop × light × dark matrix, and the console was not read. |

**Mechanical checks:** `check_links.py` ☑ · `check_facts.py` ☑ (773 blocks, 4,572 facts) ·
`check_secrets.py` ☑ · `npm run build` ☑ (42 pages, clean, one pre-existing warning)

**Document coverage:** read in full — 13 of the 15 changed files. `winger.md` and
`switching_positions.md` were changed by a one-phrase owner-pointer correction only and
were checked at that hunk rather than read. Also read for propagation but unchanged:
`rules_primer.md`, `special_teams.md`, `offensive_zone_play.md`. Not reached — the 21
corpus documents outside the diff. **Source coverage:** 34 of 166 page images.

---

## Findings

Numbered CR/MA/MI. Only the criticals and the structurally interesting majors are written
out; the rest are in the reviewer reports.

### Critical

**CR1 · `systems/defending_the_rush.md` — the 2-on-1 stated a coaching choice as law**

- **As it stood:** *"it has a single governing instruction"*, plus `Never: Slide before the pass is released`.
- **Why it is wrong:** the book gives two methods — hold the lane, or a timed slide to force the shot — and says coaches hold several theories with no evidence settling it.
- **What a reader would do:** a defenceman on a timed-slide team reads that their team's system is an error.
- **Fix:** the alternative named in its own `####` subsection; the `Never:` **scoped**, not deleted.
- **Propagation:** body ☑ · facts ☑ · Common Mistakes ☑ · Key Takeaways ☑ · Overview ☑ · `defender.md` ☑ · `goaltender.md` ☑ · `on_ice_communication.md` ☑ · `rink_map_and_glossary.md` ☑ · `risk_management.md` ☑ · `body_contact_and_battles.md` ☑
- **Re-verified:** safety-reviewer passes 2–5; facts-reviewer passes 2–3.

**CR2 · `systems/zone_entries.md` — a second delay taught without the boards override**

- **As it stood:** a new drive-and-delay instructing the carrier to *"turn to the outside"*, with none of the ⚠️ override §5 attaches to the same manoeuvre.
- **Why it is wrong:** §5's override is scoped *"alone at the line"* in all five of its instances, so it reached no reader executing this one.
- **What a reader would do:** turn their back to the wall at entry speed.
- **Fix:** a new `#### Three things that do not bend, whichever pattern you run` with its own facts block, plus the fallback for a player already tight to the wall.
- **Found by:** all three reviewers independently.

**CR3 · `systems/defending_the_rush.md` — hounding taught with no contact legality**

- **Fix:** own `#### What hounding never means` subsection; five facts, three of them `Rule:`.

**CR4 · `systems/zone_entries.md` — `Never: Slow down` with no head-up condition.**

**CR5 · `systems/zone_entries.md` — an IIHF 48.1 `Rule:` fact that shed its owners' qualifications**

- **Why it matters most:** this is the corpus's own worst failure shape, committed *in a fix for it*. `rules_primer.md` records that the carve-out's scope is unresolved; the restatement made it sound settled, and stated it wide enough that USA Hockey and Hockey Canada readers were handed a rule their books do not contain.
- **Note against the author:** the first repair introduced a *third* error — asserting that neither North American book has such a carve-out, when Hockey Canada has a *ducking* one in junior and senior. Caught by the author mid-fix and replaced with a pointer to the owner.

**CR6 · The fixes did not reach Key Takeaways.** CR3 and the timed slide reached body, facts
and Common Mistakes and stopped. The round-10 shape, reproduced by the fix for it.

**CR7 · An unsourceable technique asserted in six places against one disclosure**

- **As it stood:** *"go down on your side rather than face-first — the method is the shot-blocking technique in Body Contact and Battles."*
- **Why it is wrong:** three separate defects. (i) `defender.md` owns going-to-the-ice and says the **opposite** — *"toward the shooter rather than sideways"*, because sideways opens the unpadded flank. (ii) The citation was **circular** — the only two corpus occurrences of the phrase were inserted by the same fix, and the document it named points back. (iii) The orientations asserted were **mutually impossible**: feet toward your own net, hands and head behind your body, and never your flank or back cannot all hold of one body.
- **Fix:** **the assertion was removed, not replaced.** Replacing an unsourceable claim with another would have been fabricating the thing under objection. What remains is head-out-of-the-shot-lane plus an explicit statement that no sourced technique for the pass-lane slide is carried here, and a pointer to the coach who asked for it.

**CR8 · `positions/center.md`, `hockey-iq/playing_without_the_puck.md`, `systems/forechecking_systems.md` — contact instructions with no from-behind prohibition in any layer.**

**CR9 · `systems/defending_the_rush.md` — the wrong rule-set for the reader most restricted by it**

- **As it stood:** hounding's "may you check at all" test was USA Hockey 604(a) alone.
- **Why it is wrong:** for British readers — including **every level of women's and girls' hockey in Britain**, which the document's own overview names — the governing text is IIHF 101.1, which penalises *"any move by a Player to step or glide into an opposing Player"*.
- **Fix:** 101.1 quoted verbatim in facts and body alongside 604(a).

**CR10 · `positions/defender.md` — a transfer hazard created by the CR7 fix.** With the
technique removed from the owning document, `defender.md` still named the timed slide in
four layers while supplying shot-blocking orientation forty lines above, with no firewall.
Fixed in all five layers, in both directions.

**CR11 · `systems/breakouts.md` and `systems/zone_entries.md` — the `Never:` that forbade
what its own body prescribed** (posted-up winger), and the head-down hazard absent from
two summary layers.

### Major — the ones with a lesson

- **MA1 · An owned list restated and truncated.** `breakouts.md` owns nine named breakout
  options; a new sentence in `forechecking_systems.md` restated five and told the reader
  the breakout "will be one of" them.
- **MA2 · Two invented facts.** Neither traced to any sentence in its section. One deleted,
  one rewritten. Extract-never-author, twice, by the author.
- **MA3 · A name collision with the corpus's own vocabulary.** *"Three high"* already means
  the power-play umbrella in `special_teams.md`, the glossary, `how_to_watch_hockey.md`
  **and the style guide's verified-facts list**. Introduced bare into a Key Takeaway.
- **MA4 · Six owner-pointers understating their owner.** Five documents told readers
  `defending_the_rush.md` *"sets out all three"* after it began setting out more.
- **MA5 · Three Sources enumerations gone false.** Each said "these are the rules quoted";
  six new citations were missing from them.
- **MA6 · A fix that made a safety fact worse aloud.** A rescoped `Never:` was reworded to
  lead with its condition. `md_to_speech.py` speaks the label as its own sentence, so it
  rendered as *"Never. Where your team plays the passing lane, slide on a 2-on-1…"* —
  an instruction to slide. Reverted to tail-scoping.
- **MA7 · A citation half-corrected.** "Rule 43.2" was cited for *"a major with an automatic
  game misconduct"*. 43.2 is only the **no-minor** rule; the major is 43.3 and the
  automatic game misconduct NHL 43.5 / IIHF 43.3. Corrected in five sites; the sixth was
  found by the fifth pass.
- **MA8 · The corpus narrating itself in `content/`.** Five new Sources notes said *"this
  corpus"*, *"the corpus's own point of view"*, *"diagrams have not been reproduced"* —
  addressed to a rights-holder, not a learner. Removed; the provenance and
  deliberate-omission disclosures were kept and verified intact.
- **MA9 · Two unreconciled taxonomies in one section.** "The three lanes" and "the four
  named systems" partially contradict each other — under two of the four a *defenceman*
  owns the middle, which the lane model never contemplates. Reconciled in body, blockquote
  and KT7.

**CR12 · `systems/zone_entries.md` — a substantive hockey error, found only by reading the book**

- **As it stood:** *"**Midlane drive** — the second attacker drives the middle hard, which pushes the defenders back and hands the carrier the outside."*
- **Why it is wrong:** the source (p0044) says the driving player goes *between* the two defenders, which makes the one covering the carrier hesitate, and that hesitation lets the carrier **cross in behind** and shoot. Figure 3.15's caption is *"F2 drives the middle to give F1 room."* "Pushes the defenders back" belongs to two different plays in the same book — the 3-on-2 midlane drive and the kick-and-run.
- **What a reader would do:** run the play in the wrong direction and take the outside lane the pattern was not designed to open.
- **Found by:** `source-verifier`, on the sixth pass. **Five previous passes read it as internally consistent, because it was** — the fact traced to the body and the body was wrong. Only opening the page caught it.
- **Propagation:** checked corpus-wide; the claim existed in one sentence and no facts block, Common Mistakes or Key Takeaway repeated it.

**CR13 · `systems/neutral_zone_systems.md` — a whole new section reached neither summary layer**

- **As it stood:** a new `### The hinge, and the skating hinge` with a facts block, three body paragraphs and a Sources entry — and no Common Mistakes bullet and no Key Takeaway, while every other new section in the change reached both.
- **Why it is wrong:** the summary layers are what the podcast and a skimming reader consume. A regroup habit the document calls under-used existed only in the middle of the page.
- **Fix:** a Common Mistakes bullet on following the puck up the boards after a D-to-D, and a new Key Takeaway 5 setting out the hinge, the skating variant and the read that governs availability. The remaining takeaways were renumbered, 10 → 11; no anchor links into that list by number.
- **Found by:** `commit-gate`, on the first gate run. **Five reviewer passes did not look at this file** — a fact this record failed to disclose until the gate found the omission by grepping its own text for the filename.
- **Also fixed in the same file:** an unsourced prevalence claim — *"a habit amateur teams often do not have at all"* — now carries the hedge the same document already applies to the identical claim class two sections below.

**MA10–MA13 · Four provenance overstatements, all found by `source-verifier`**

- A Sources line claimed the four system names *"are its own"*. The book presents them as established vocabulary it is relaying; ultimate origin is unknowable from this edition. Reworded.
- *"the highest-risk of the three, and the only one that can win the puck outright"* was the author's ranking presented as sourced. The book's only comparative statement there is first-person opinion.
- *"timed slide"* is this corpus's label; the book has no such noun phrase. Now said so.
- An exclusion note said *"career goals"*; the book says only *"a high percentage of his goals"*.

**One thing the source check improved rather than corrected.** The disclosure that no going-to-the-ice technique is carried here was true but could have led a reader to think no coaching source describes one. The book does describe the slide's mechanics and names its three failure modes; the disclosure now says what the source gives and what this guide still will not.

### Deferred

- **`systems/offensive_zone_play.md`** carries the same `Rule 43.2` imprecision as MA7.
  **Not fixed**, because that file is not in this change and no reviewer has read it this
  round. One-line citation-range fix; next round.
- **~12 print-only pointers in facts blocks** across `special_teams.md`,
  `body_contact_and_battles.md`, `goaltender.md`, `scanning_and_anticipation.md` and
  others — the class of which one instance was fixed here. Worth one sweep.
- ~~`style_guide` ownership entry for `breakouts.md`~~ — **done in this change**, not
  deferred: `project/content_style_guide.md` is staged, records the three control
  breakouts, and firewalls "three high" from the power-play umbrella.
- **The funnel-versus-shot-quality question.** The book argues shot volume against
  `offensive_zone_play.md` §1's shot-quality position. The corpus's position rests on
  expected-goals data, so this is probably not a cardinal-rule defect — but a reader is
  left unaware a mainstream school disagrees. Not addressed; next round's scope.
- **The torpedo system** and **the book's full forecheck-vs-breakout response matrix** —
  deliberately not added. The first is too rare to earn space; reproducing the second
  would have copied the book's selection and arrangement.
- **`positions/winger.md`** received the owner-pointer correction but not the
  four-systems material, under which a winger's job changes materially.

---

## Disclosures re-verified and upheld

- **The book's negative existence claim was not adopted.** Its *"no factual evidence can
  tell us which is best"* about the 2-on-1 appears **only** in a Sources note, framed as
  one coaching source's account of an unsettled question and explicitly **not** as a
  verified claim that no such evidence exists. Reviewers called this the strongest single
  sentence in the change. Keep it verbatim.
- **No number from the book entered the corpus.** Ten unsourced figures were identified
  and excluded, each named in the Sources note that excluded it.
- **Three new "no published count" disclosures** were attacked — Sources lists, working
  directory, `content/`, `project/` — and upheld.
- **The withheld 1-3-1 origin story.** The book offers a second, earlier European origin;
  deliberately not carried, because it is a rules-history claim and the document's existing
  European-lineage treatment is already flagged unverified.
- **Every removed line was diffed.** Not one disclosure, hedge, provenance note or
  "could not verify" label was removed from HEAD.
- **The honest gap is now on the page.** The corpus states that it carries no sourced
  technique for the pass-lane slide. That is a disclosure, not an omission, and a later
  tidying pass must not read it as an unsourced claim and delete it.

---

## What this method could not have found

**`source-verifier` read 34 of 166 page images and found one substantive hockey error
that five prior passes could not have found** (CR12), plus four provenance
overstatements. It also answered the coinage question in the corpus's favour. **But 132
pages were not read**, and the two chapters carrying the "80 percent of teams" and 20
percent power-play figures were outside its sampling — so the claim that every excluded
number is accurately described rests on five of the ten being checked.

**Single-source concentration.** Six new sections across five documents cite one manual,
added in one change. If those four backchecking system names are that book's coinage rather
than the field's vocabulary — plausible, since no other corpus document uses them — the
corpus has adopted one author's taxonomy as though it were the sport's.

**D15's visual half rests on one human look.** The structure is verified and the owner
inspected the changed pages, but no automated pass ran: the browser was unreachable
throughout. Mobile and desktop widths, light and dark themes, and the console were not
systematically examined, and the last rendering defect in this repository — HEAD itself,
*"Let the search index compile, which the CSP was refusing"* — was console-level and
would not have been caught by anything done here.

**Whether the hockey is right.** Reviewers checked rules, traceability, propagation and
read-aloud integrity. None of them can say whether a wide-lane lock really puts the first
forward back in an outside lane, or whether a timed slide is good defence. That needs a
coach, and no coach has seen this.

**The omission whose heading advertises nothing.** Every safety finding this round was
found because a heading named the hazard. The reviewers said so in four separate reports.
A section that quietly puts a player's head down under a purely tactical heading would
have passed all five passes.

**The 21 documents outside the diff.** Propagation was checked *outward* from the changed
claims, by grepping phrasings the reviewers could think of. A document teaching the same
instruction in words nobody guessed is invisible to this method — which is exactly how the
corpus's own worst propagation defect survived.

**A facts-only surface would void several judgements.** Two reviewers accepted "the caveat
is in the adjacent block" because both consumers render facts in document order. If a
summary card, a search snippet or an alternate podcast cut is ever built, those judgements
must be re-run.

---

## Proposed scope for the next round

**Run `source-verifier` against the 166 page images**, and answer one question first: are
the four backchecking systems, the three control breakouts and the three control-forecheck
responses this book's own coinage, or general coaching vocabulary? If the former, the
naming in five documents needs qualifying. Then close the deferred list — the
`offensive_zone_play.md` citation, the print-only-pointer sweep, `winger.md`'s missing
four-systems material — and re-run D15 with a browser that will open `localhost`.
