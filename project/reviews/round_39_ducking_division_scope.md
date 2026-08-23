# Round 39 — one proposition, six documents, the owner

*Closed. `content/technique/body_contact_and_battles.md` plus two review-record wording
reconciliations. `safety-reviewer` and `rules-verifier`, 2026-08-23.*

| | |
|---|---|
| Documents reviewed | 1 of 36 (`content/technique/body_contact_and_battles.md`), plus a corpus-wide grep of the proposition across all 37 |
| Reviewers run | `rules-verifier` · `safety-reviewer` — in parallel, with the content file **frozen** until both reported — then `commit-gate`, which **blocked once** |
| Criticals found / fixed | 1 / 1 *(the defect this round exists to remove; found by the audit that preceded it, not by a reviewer)* |
| Majors found / fixed | 2 / 2 |
| Minors found / fixed | 4 / 4 |
| Date | 2026-08-23 |

---

## The brief

Round 38 (`CR1`) found the ducking proposition wrong in `rules_primer.md`'s Key Takeaways and
fixed it there. The method this round was scoped to is the obvious next one and round 38 did
not run it: **audit the same proposition across every document that states it, starting with
the one that owns it.** Six documents state it — `body_contact_and_battles.md` (the owner),
`skating.md`, `winger.md`, `defender.md`, `zone_entries.md`, `puck_handling.md`. Five were
correct. The owner was not.

This is deliberately a different method from round 38's, which was structural (what a
restructure did to a summary layer). This one is propositional: take one claim, find every
site of it, check each against the book.

---

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | ✅ | `rules-verifier` | Every HC, IIHF, USAH and NHL claim in the changed bullet re-derived from `sources/` |
| D2 | Rules travelling without exceptions | ✅ | `rules-verifier` | The whole point of the round — an interpretation travelling without its division scope |
| D3 | Rule-set divergence | ✅ | `rules-verifier` | HC vs IIHF vs USAH on the head-down / ducking player; the three-way split re-checked |
| D4 | Citation integrity | ⬜ **out of scope** | — | **Declaration, not silence.** The diff adds no external citation and refetches none. Every quotation added is from a rulebook on disk (`sources/hc.txt`), which is D1's dimension and did run. The one non-rulebook claim added — the cervical-flexion mechanism — is **re-stated from this document's own owner paragraph at `:497`**, which carries the *Heads Up Hockey* Program Guide quotation over Tator et al. No attribution was added or moved. ⚠️ **If a citation is added, this declaration expires.** |
| D5 | Provenance | ⬜ **out of scope** | — | Same reason. Round 38 re-credited the cervical-flexion research to the wrong owner while "repairing"; this round deliberately added the mechanism **without** an attribution of its own, leaving the provenance where the corpus already put it |
| D6 | Negative existence claims | ✅ | `rules-verifier` | The bullet's *"No such exception was found in USA Hockey's Playing Rules"* re-attacked across nine search terms plus nine read-in-context amnesty phrases. **Upheld.** So was its honest disclosure that the USA Hockey Casebook is not on disk and was not searched |
| D7 | The cardinal rule | ⬜ **out of scope** | — | The change adds no coaching content. Every sentence added is a rule statement or the anatomical mechanism |
| D8 | Numeric ownership | ✅ | author | The only numbers touched are the NHL Table 5 row counts in the **round-38 record**, and they were not changed — see "The two record reconciliations" below |
| D9 | The summary layer | ✅ | `safety-reviewer` | Common Mistakes is where the defect lived. Key Takeaways (KT7) checked and already correct |
| D10 | The key-facts layer | ✅ | `safety-reviewer`, author | §6's blocks read; one fact line **added** (see MI4). `check_facts.py` passes. **Counts stated for the tree this commit creates**, not the working tree: **4,598 → 4,599** |
| D11 | Reader safety | ✅ | `safety-reviewer` | Full pass on §6, Common Mistakes and Key Takeaways |
| D12 | Read-aloud integrity | ✅ | `safety-reviewer`, author | **Actually run**, not asserted: `md_to_speech.py` over the file, chunk boundaries inspected before and after |
| D13 | Folklore | ⬜ **out of scope** | — | No claim added that is not either quoted rulebook text or the document's own sourced mechanism |
| D14 | Structure, style, cross-links | ✅ | author | `check_links.py` passes. **No link was added** — the round-36 record is *named* rather than linked, because it was mid-rename and a link would have dangled |
| D15 | The rendered site | ⬜ **not checked** | — | **Declaration, not silence.** The change adds prose and one fact line inside structures that already render — no new heading, table, callout or anchor. Round 38's `site-reviewer` pass verified the facts-block and ⚠️ rendering in both themes at 375/1440/320 px six days ago and nothing structural has changed since. **`npm run build` was deliberately not run**: it runs `clean:cache`, which deletes the owner's `node_modules/.astro`, `.vite` and `site/dist`, and another agent is actively writing `site/`. ⚠️ **This is a real gap, not a dismissal** — see "What this method could not have found" |

**Mechanical checks:** `check_links.py` ✅ · `check_facts.py` ✅ · `check_absolutes.py` ✅ ·
`check_secrets.py` ✅ · `check_external_links.py` ⬜ (no external link touched) ·
`npm run build` ⬜ (see D15)

**Document coverage.** `body_contact_and_battles.md`: `safety-reviewer` read §1, the §5 tail,
§6 in full, Common Mistakes in full, Key Takeaways in full and the Sources block; **§2–§4 and
§7–§12 were reached only through their Common Mistakes bullets and are declared unread.**
`rules-verifier` read the changed bullet and every rule it cites, in four rulebooks. The other
five documents holding the proposition were grepped, not read.

---

## Findings

### Critical

**CR1 · `content/technique/body_contact_and_battles.md:1112` — the owner document told a Hockey Canada minor or female player that the checker skates away.**

- **As it stood:** *"…and because Rule 8.7 carries no division scope, ducking out of a check can put **you** in the box in **any** Hockey Canada division while the checker skates away."*
- **Why it is wrong:** the first half is right and the trailing clause is not. The checker's amnesty is **Interpretation 3 to Rule 7.7(a)**, which opens *"In Junior and Senior divisions"* (`sources/hc.txt:6392–6397`, verbatim). Below that it does not apply and **Rule 7.6** governs — *"Regardless of the circumstances, players must be penalized for contact with an opponent's head, face, or neck at all times"* (`hc.txt:6237–6238`) — with 7.6(a) written *"in minor and female hockey"* (`:6246–6252`). So below junior and senior **both** players are exposed.
- **What a reader would do:** a fourteen-year-old in Hockey Canada minor or female hockey, told the checker walks, has been taught the reverse of the rule that governs them. This is the proposition commit `5b82c18` exists to remove and round 38's `CR1` removed from the primer's takeaways — **surviving in the document the style guide names as its owner.** A fix that reached the dependant and not the owner is the round-10 shape inverted.
- **Fix:** clause removed; a ⚠️ sentence added stating what actually changes with the division, quoting Interpretation 3's operative words and Rule 7.6's preamble.
- **Propagation:** body ✅ (`:473` already correct) · facts block ✅ (`:466` already correct; new line added, MI4) · Common Mistakes ✅ (this is it) · Key Takeaways ✅ (KT7 `:1179` leads with the injury and states no amnesty — cannot contradict) · other documents ✅ — **corpus-wide grep for `skates away` / `checker takes none` / `any Hockey Canada division` returned no other site.** `rules_primer.md:383` states the same proposition correctly scoped to junior and senior, and `:889–898` already carries the ⚠️. `zone_entries.md`, `skating.md`, `winger.md`, `defender.md`, `puck_handling.md` state the technique without the division claim · style guide ⬜ (does not record this claim)
- **Re-verified:** `rules-verifier` and `safety-reviewer` independently, both from `sources/hc.txt`, both quoting the same line numbers.

### Major

**MA1 · `:1112` — the repair introduced a pronoun-referent collision.** The added sentence read *"What changes with the division is the **checker's** position, not yours"*, which is the only sentence in the bullet that positively contrasts the reader **against** the checker — and it sat between two that address the reader **as** the checker (*"the player was facing you"*, *"a square hit that finds a bent-over head is still your foul"*). A checker reading at speed meets "not yours", concludes the division scope is someone else's problem, then meets "still your foul". This is precisely the round-37/38 shape: *a repair is not confined to the clause you are editing.* **Fix:** the second person taken out of the contrast entirely — *"the checker's exposure, not the ducker's"* — which names both parties inside the sentence and cannot collide.

**MA2 · `:1112` — the ⚠️ did not survive the text-to-speech split.** `safety-reviewer` ran `md_to_speech.py` rather than reasoning about it, and found the bullet (~5,200 spoken characters) split across chunks 072 and 073, with **073 opening cold on the amnesty half**: *"In junior and senior the interpretation lets the checker skate away; below that it does not apply…"* — a listener starting that audio file hears a checker granted an amnesty with no statement of what it covers. Compounding it, `md_to_speech.py` fires its `"Important."` cue **once per list item**, so the spoken warning marker arrives ~450 words before the ⚠️ it belongs to. **Fix:** each ⚠️ sentence made self-contained — the amnesty sentence now names Interpretation 3, the trigger and the consequence in its own words. **Re-verified by re-running the pipeline:** chunk 073 now opens *"In Hockey Canada junior and senior, Interpretation three to Rule seven point seven, clause a tells the referee that a check which catches a ducking opponent's head 'will not be considered Head Contact and no penalty will be assessed' — the checker skates away."* 83 chunks, **0 unrecognised constructs.**

### Minor

**MI1 · `:1112` — *"both can be penalised"* had no antecedent and understated the book.** Heard standalone, "both" names nobody: the preceding sentence said only "the checker" and "players". And *"can* be penalised" is weaker than `hc.txt:6237`, which is *"must be penalized… at all times"*. **Fix:** both parties named and the book's own modal restored — *"the ducker is still exposed under Rule 8.7 **and the checker must be penalised too**"*.

**MI2 · `:1112` — two reviewers independently flagged the same coherence tension, and the new sentence created it.** The bullet's later sentence called Rule 7.6's preamble *"the Hockey Canada Rule 7.6 preamble, **which carries no division qualifier**"* — literally true of that one sentence, and now sitting 150 words from a new sentence saying 7.6 governs *below* junior and senior. Read together they contradict. The rulebook resolves it: 7.6(a) is written *"in minor and female hockey"*, and 7.7 states *"In Junior and Senior divisions, this rule supersedes any other rules regarding contact to the head"* (`hc.txt:6303–6312`), so **7.6 does not in fact govern junior and senior.** This document already had the right framing at `:437`. **Fix:** *"the Hockey Canada Rule 7.6 preamble — the head-contact rule that governs minor and female hockey — is flatter still"*.

**MI3 · `:1112` — a stale pointer four sentences downstream.** *"note which way Hockey Canada's exception points"* was written when the exception pointed one way in every division. **Fix:** *"…and how far down it reaches."*

**MI4 · `:465` — the facts layer stated the amnesty and its limit without stating what replaces it.** The line carried *"Junior and Senior divisions only"* correctly but stopped there, so a listener hearing that fact alone learns the amnesty has a floor and nothing about what is under it. The corpus's own house pattern for exactly this is at `shooting.md:124`. **Fix:** a **new** fact line added rather than the existing one lengthened — `check_facts.py` rejected the append at 371 characters against the 300-char cap, which is the check doing its job. ⚠️ **Facts count, stated for the tree this commit creates: 4,598 → 4,599** (`git archive HEAD` against `git checkout-index`, both materialised and measured). The **working tree** reads 4,596, because it carries ~28 files of another agent's unstaged edits. The delta of +1 is the claim; the absolutes are meaningless without naming the tree, which is exactly the trap the round-36 record already warns against.

### Also fixed, and named by `safety-reviewer` under its question 3

**The ⚠️ was pure penalty arithmetic, and the bullet carried no injury reason at all.** The
cervical-flexion mechanism lives at `:497` and `:511` and in KT7; the sentence that
subordinates penalty to injury is at `:521` — *"do not duck in either, because the reason not
to is the one above, not the penalty"* — and it is in §6, not in Common Mistakes. The edit had
increased the penalty content of the bullet without it. One clause added at the end,
**re-derived from this document's own `:497`** rather than copied from `rules_primer.md:898`:
a tucked chin removes the neck's natural curve and straightens the cervical spine, *"that is
anatomy, not a rule, so it holds whether or not your book penalises the duck."*

### Deferred

- **`hc.txt` contains a genuine internal tension the corpus does not address.** Rule 7.6's supersession clause is unqualified (*"This rule supersedes any other rules, with the exception of Rule 7.10 – Fighting"*) while 7.7's is scoped to junior and senior. Read literally, 7.6 would supersede 7.7 in junior and senior and swallow Interpretation 3. Title and specific-over-general resolve it the sensible way and **no interpretation in the book addresses it.** Not actioned: stating it would need a reading the book does not supply, and the practical guidance is unaffected in either direction. Recorded here so the next round does not rediscover it as a defect.
- **`hc.txt` defines none of its divisions.** `rules-verifier` read the glossary in full (`:742–1160`) and searched it for `JUNIOR`, `SENIOR`, `MINOR HOCKEY`, `FEMALE HOCKEY`, `DIVISION`, `CATEGORY` — **zero hits.** So whether Hockey Canada recognises a division that is neither "Junior and Senior" nor "minor and female" **cannot be settled from primary text on disk**; it would need the registration regulations, which are not here. The sentence as written does not depend on it: its general clause covers everything below junior and senior including any Member-approved division, and only its concluding clause names minor and female hockey, where the named bucket is exactly 7.6(a)'s own scope.
- **In female hockey and U13-and-below the body check *itself* is a Rule 7.3 penalty**, so the ducking scenario carries a third exposure the bullet does not mention. It reinforces the conclusion rather than qualifying it, and the bullet is already **973 words / 5,598 codepoints** (5,628 UTF-8 bytes), counting the whole Markdown line including its `- ` marker, measured on the tree this commit creates. Not added.
- **The bullet is too long for the pipeline to deliver as one unit** (~5,200 spoken characters, split across two audio files). `safety-reviewer` proposes splitting it into the checker's mistake and the ducker's, at *"The books split three ways…"*. **Deliberately not done here** — that is a structural edit, which under C11's terminating rule voids the clearance this round obtained and needs its own pass. Tracked for the next round.
- **USA Hockey 620(b) is wider than the bullet states.** The book reaches *"intentionally or carelessly"* as well as *"recklessly endangers"*; the bullet says "careless or reckless". It errs toward caution and misleads no one. Not touched — it is not this round's finding.

---

## Disclosures re-verified and upheld

- **The USA Hockey Casebook disclosure** — *"The separate USA Hockey Rules and Casebook is not on disk and was not searched; a casebook situation could qualify the USA Hockey half."* `rules-verifier` independently confirmed no casebook exists in `sources/`; `usah.txt` is the Playing Rules 2025-29 alone. **The disclosure is accurate and stays.**
- **The negative existence claim** *"No such exception was found in USA Hockey's Playing Rules"* — re-attacked and upheld. Nine search terms returned nothing; the two `crouch` hits are a goalkeeper chest-pad measurement and a sled-hockey faceoff procedure. USA Hockey's clipping provision (639, Note 2) runs the **other way**, penalising the checker who goes low rather than the ducker.
- **The IIHF half** — *"the IIHF book attaches no penalty of its own to the player whose head was down"*. Upheld; 48.1's carve-out is silent as to that player and there is no IIHF analogue to HC 8.7's crouching prohibition.
- ⚠️ **A false negative was caught in the act.** `rules-verifier`'s first automated pass reported IIHF 48.1's carve-out **NOT FOUND**. It is there verbatim; the document renders the book's inner double quotes as single quotes for nesting, and the grep missed on that alone. Recorded because it is the trap the brief names, and it produced a would-be finding on a live safety claim.

---

## The two record reconciliations (no content change)

Both were named as **non-blocking** by `commit-gate` in round 38 and are cleared here.

1. **`round_38_takeaways_and_c11.md:103` claimed more than its evidence.** It said *"Four review passes read this file at content"*; `:212` in HEAD — `:219` in the tree this commit creates — says the fourth `safety-reviewer` pass was *"on the delta only"*. Changed to what the evidence supports: **three full-file passes, plus a delta pass** — and the delta pass is still implicated, because its own 60.4/48.5 split landed **inside the same §10 table cell** as the defect it missed. Confirmed in `rules_primer.md:734`, where the "Fighting's six rows" arithmetic and the "60.4, 52.2, 48.5" match-penalty clause sit in one cell.
2. **`:6` read as a stale count.** *"found three further defects in text no reviewer had read"* reconciled with the five items under `:80` only via `:82`'s stricter sense. Disambiguated to **six further majors — five in text no reviewer had read, of which three lived entirely in post-reviewer edits; the sixth was already in HEAD.** The original conflated three counts into one clause.
3. **Two records described the same table cell in opposite terms.** The round-36 carried-findings record calls `Fighting` *"its own row with its own Rule 46 cell and its own 'Major only' checkmark, **not a group header**"*; `round_38…:108` called it *"the `Fighting` **header row**"*. **The arithmetic is six either way, and the count was not changed.** The carried-findings description is the accurate one, re-derived here from `sources/nhl_rules.txt`: Table 5's **row labels** run `9738–9761`, with `Fighting` at `:9746` and its five qualified sub-rows at `:9747–9755`; the matching **rule-number cells** follow at `9763–9812`, where `Rule 46` appears **six** times — at `:9773`, `:9774`, `:9801`, `:9802`, `:9807` and `:9811`. Thirteen non-fighting rows plus those six is nineteen. The round-38 record now describes the cell the carried-findings way. *(It names that record rather than linking it: its filename is being changed by a concurrent sweep as this is written.)*

   ⚠️ **`commit-gate` disputed this pointer, and the dispute is recorded because it is instructive.** It placed Table 5 at `9876–9982` with six `Rule 46` cells at `9922`, `9923`, `9950`, `9951`, `9956`, `9960`. **That does not reproduce.** `:9922` and `:9923` are the roman numerals `(v)` and `(vi)`; the range `9876–9982` contains **five** `Rule 46` cells, not six. ⚠️ **And I repeated the same error making this correction:** the bullet size in the deferred item
was taken from the gate's report and written in without measuring. Five conventions all disagree
with it. **A gate's number is evidence, not verification — on exactly the same terms as its
citations.**

⚠️ **The cause is now known, reproducible, and worth more than this finding.** Python's
`str.splitlines()` **splits on form feed (U+000C) as well as newline**; `sed`, `grep -n` and every
editor do not. Every extraction on disk carries form feeds, so a line number derived that way is
inflated — `nhl_rules.txt` has **21,959 newlines against 22,191 `splitlines()` elements**, a drift
of 232 at that point in the file:

| file | drift | | file | drift |
|---|---|---|---|---|
| `nhl_rules.txt` | 232 | | `hc.txt` | 167 |
| `iihf_rules.txt` | 228 | | `iihf_situations.txt` | 173 |
| `usah.txt` | 216 | | `eiha_inhouse.txt` | 18 |

**No `sed`, `grep -n` or editor check reproduces the error** — it reads as though the file moved.
Use `split('\n')` or `sed -n`. That earlier gate's `hc.txt` citations survived only because it
happened to verify those with `sed`. **The count of six is not in dispute; both passes derived it.** Only the locator was, and the exact cell lines are written out above so the next reader does not re-litigate it a third time. **A gate's citation is evidence, not verification, on exactly the same terms as a reviewer's.**

---

⚠️ **Line pointers in this record are HEAD numbering, and this commit shifts the ones into the two
files it changes.** Precisely:

- **`body_contact_and_battles.md`** — **eleven distinct pointers, of which nine shift and two do
  not** (`:437` and `:465` sit above the insertion). The table below is the complete list.
- **`round_38_takeaways_and_c11.md`** — `:6`, `:80`, `:82` are unaffected; `:103` and `:108` are
  deliberately past-tense, naming text this commit rewrites; `:212` moves to `:219` and is given
  with both trees above.
- **`rules_primer.md`** — `:383`, `:734` and `:898` are untouched by this commit and do not move.

⚠️ **This paragraph was wrong four times, each time by claiming more than it had checked.** First
it listed five of eleven content pointers as though complete. Then *"every content pointer"*, while
six record pointers went unmentioned. Then *"every line pointer"*, while a pointer into an
unmodified file cannot shift at all. Then *"all twelve shift"* — the count was eleven, nine of them
shift, and the table's own last row said so twenty-five lines below. **Each fix widened the claim
past what had been counted.**

⚠️ **The fourth was the dangerous one.** A reader trusting *"all twelve shift"* adds one to `:465`
and lands on new-tree `:466` — **the line MI4 added**, not the line MI4 describes. It reads
plausibly enough as the facts layer stating the amnesty that an auditor would believe they had
confirmed MI4 when they had landed on its fix. `:465` does not move.

**An enumeration is a claim. Count it, or scope it — and a count written next to a table must
agree with the table.**
The new fact line occupies `:466` **in the new tree**, displacing HEAD's `:466` — the Rule 8.7 line
cited at *"(`:466` already correct)"* — to `:467`. Everything below moves down one:

| HEAD | new tree | what it is |
|---|---|---|
| `:466` | `:467` | the Rule 8.7 fact line |
| `:473` | `:474` | |
| `:497` | `:498` | the *Heads Up Hockey* mechanism |
| `:511` | `:512` | |
| `:521` | `:522` | |
| `:938–986` | `:939–987` | shot blocking |
| `:1057–1087` | `:1058–1088` | fighting |
| `:1112` | `:1113` | the ducking bullet |
| **`:1179`** | **`:1180`** | **Key Takeaway 7 — in the new tree `:1179` is KT6** |
| `:437`, `:465` | unchanged | above the insertion |

⚠️ **`:1179` is the one that matters.** It carries CR1's propagation evidence, and in the shipped
tree it lands on **KT6**, which reads closely enough to KT7 to be mistaken for confirmation. A
reader auditing the claim would check the wrong takeaway and find nothing wrong.

→ **A line number is a claim about a tree.** Name the tree — and when you enumerate a shift, either
enumerate all of it or say the list is partial. **The first version of this note listed five
pointers as though they were all of them and missed four.** That is the same defect as the
unnamed-tree counts above, committed in the paragraph written to record it.

## Found by the gate in the content, and fixed

**The Rule 7.6 preamble was quoted verbatim twice in the same bullet**, ~1,190 characters apart —
22 words of rulebook text read aloud twice inside one list item. The fix for the *contradiction*
between those two sentences did not notice it had left a repetition. The second occurrence now
carries the point in four words and refers back. → **when a repair edits two sentences that quote
the same rule, read them together, not each against the book.**

## The gate

`commit-gate` **blocked twice**, both times on this record and never on the content. What was
raised, and how it resolved:

| | finding | outcome |
|---|---|---|
| 1 | the `nhl_rules.txt` locator for Table 5's six `Rule 46` cells | **rejected** — the gate was wrong, and the reason is the `splitlines()` drift above |
| 2 | the facts count was taken from another agent's working tree | upheld, fixed |
| 3 | `round_38…:6` conflated three different counts into one clause | upheld, fixed |
| 4 | D14 described a link that was never added | upheld, fixed |

**One of the four was the gate's own error, and it was withdrawn only because it was challenged
with evidence.** The stale-filename catch was the author's, not the gate's.

- **The facts count was somebody else's tree.** The record quoted 4,595 → 4,596; the tree this commit creates goes **4,598 → 4,599**. The delta was right and the absolutes were working-tree numbers, measured with ~28 files of another agent's edits sitting in the tree. Fixed, with the tree state now named. **This is the third round in which a facts count measured on an unnamed tree has caused trouble**, and the round-36 record had already written the rule.
- **A cross-record locator was wrong** — a stale filename, mid-rename by a concurrent sweep. Both records now name that record instead of linking it.

⚠️ **One gate finding was rejected, with evidence, and the rejection is the more useful half.** The gate reported that `sources/nhl_rules.txt:9763–9812` contains one `Rule 46` cell rather than six and supplied a replacement range. Re-derived from the file: the original pointer is correct and the replacement is not — see item 3 above. **The gate is not exempt from "a reviewer's quotation is evidence, not verification."** Had its correction been applied, this record would now carry a wrong pointer to a right number, which is precisely the failure mode `(o)` exists to document.

⚠️ **The gate also could not see the thing that most needed seeing.** Between its audit and this commit, another agent unstaged one of the three files and rewrote a path inside the other two. **A gate verdict is a statement about an index at a moment**, and in a contended tree that moment expires. The staged diff was re-derived and re-audited rather than trusted.

**Everything else the gate checked, it cleared**, and it re-derived rather than accepted: every Hockey Canada, IIHF and USA Hockey quotation against `sources/`; the C11 terminating rule tested as a closed word-level set with every insertion mapped to a named finding; the new fact line classified as C7 propagation rather than a structural edit; no re-crediting in the anatomy clause; the TTS pipeline re-run with chunk 073 confirmed self-contained; and staging hygiene, with none of the other agent's files caught up in it.

---

## What this method could not have found

**This round read one document and verified one proposition.** `safety-reviewer` declares §2,
§3, §4 and §7–§12 of `body_contact_and_battles.md` **unread** — everything on fighting
(`:1057–1087`) and shot-blocking technique (`:938–986`) was seen only through its Common
Mistakes bullets, and a bullet is a summary of a hazard, not the hazard.

**The two reviewers' coverage was asymmetric and neither is a substitute for the other.**
`safety-reviewer` verified only the Hockey Canada half — it did not open the IIHF, USA Hockey
or NHL texts, and reports every non-HC quotation on the document's own authority.
`rules-verifier` opened all four books but read one bullet. **A defect in an IIHF or USA
Hockey claim in an adjacent bullet is in neither reviewer's field of view.**

**Grepping a rulebook confirms that words exist; it cannot confirm how they are officiated.**
Interpretation 3's *"if appropriate"* leaves the referee a judgement the text deliberately
does not close. Nothing here establishes whether Canadian minor-hockey referees in fact call
the ducker under 8.7 — the corpus describes an authority, not a practice, and says "can".

**No bulletin index was checked.** `hc.txt` is the book as published (16th edition, current as
of June 2026). A Hockey Canada or Member amendment to 7.6, 7.7 or 8.7 issued since would not
have been seen.

**D15 is the largest declared gap.** The rendered page was not seen this session, by
deliberate choice — `npm run build` would delete another agent's caches and `site/dist` while
they are writing to `site/`. The reasoning that nothing structural changed is an **argument**,
not an observation, and round 38's `site-reviewer` found real defects that exactly this
argument would have talked itself out of.

**The TTS boundary verified here is a property of this exact byte length.** Change one word
earlier in the bullet and the split moves to a different sentence, which may be better or
worse. The mechanism is reported; the same check has **not** been run on `rules_primer.md`,
which carries the same material at comparable length and whose `:383` and `:889–898` may split
just as badly.

**And the honest one.** The corpus now states the penalty position correctly in every
division. No grep tells anyone whether a fourteen-year-old who has just heard *"in minor and
female hockey the checker must be penalised too"* ducks the hit anyway. The reason not to is
anatomy, and this round moved one clause of it closer to the sentence they will hear — which
is a mitigation, not a measurement.

---

## Proposed scope for the next round

Two candidates, both handed over by this round's reviewers.

**First: the read-aloud round nobody has run.** `md_to_speech.py --report` returns zero
unrecognised constructs across the corpus, and round 38 recorded plainly that **nothing was
heard**. This round found a real D12 defect — a warning stranded from its cue, an amnesty
opening an audio file cold — by running the pipeline and reading the chunk boundaries, on one
bullet. Nobody has done that corpus-wide. Start with the longest list items and the
`⚠️`-bearing ones, and check every chunk boundary that falls mid-proposition.

**Second: finish this document.** §2–§4 and §7–§12 of the corpus's most safety-critical file
have not had a full `safety-reviewer` pass in this round or, on the evidence of the records,
recently. The fighting section and the shot-blocking technique section are the two that a
reader can be hurt or ejected by and that this round explicitly did not read.
