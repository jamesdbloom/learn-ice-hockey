# The icing exemption's SECOND limb — 14 September 2026

The previous commit — **`862c0dd`**, *"Stop twelve documents telling a short-handed team the icing
exemption lasts until the penalty box is empty"* — repaired what *shorthanded* means. **It never
touched NHL Rule 81.6's second defect**, and a routed `rules-verifier` check found that in one file.
Sweeping found it in fifteen more.

⚠️ **SEVENTEEN `content/` DOCUMENTS ARE IN THIS DIFF, and three drafts of this line said twelve, then
thirteen, before a commit gate counted the index.** The gate's words: *"this is the species that
produced four of your last six blocks, in the record written to narrate it."* **The number is
`git diff --cached --name-only -- content/ | wc -l` and nothing else.**

⚠️ **AND THE SHA IN THE FIRST DRAFT OF THIS LINE WAS DEAD.** It read `74a5919`, which is not reachable
from HEAD: **two rebases at 18:35:01 and 18:35:49 on 14 September 2026 rewrote the entire chain**, and
`git merge-base --is-ancestor 74a5919 HEAD` returns false. **No work was lost** — `git diff 74a5919
862c0dd` is empty, the trees are identical, and the commit messages and author dates are unchanged;
only committer timestamps moved. **Nobody in this session ran those rebases.** ⚠️ **`review_history.md`
is partly reconstructed from git history, and an unreachable SHA dies at the next `gc` or on any
fresh clone.**

## The seventeen documents, and who repaired each

Named because C8 requires it and the first draft of this record named six.

| Agent | Documents |
|---|---|
| `safety-reviewer` | `systems/zone_entries.md` |
| `safety-reviewer` | `systems/special_teams.md` |
| `safety-reviewer` | `positions/winger.md`, `positions/goaltender.md`, `positions/defender.md`, `positions/center.md` |
| `safety-reviewer` | `systems/breakouts.md`, `systems/faceoffs.md` |
| `safety-reviewer` | `foundation/rules_primer.md`, `foundation/language_and_glossary.md` |
| `safety-reviewer` | `hockey-iq/scanning_and_anticipation.md`, `systems/defensive_zone_coverage.md` |
| `safety-reviewer` | `systems/game_management.md` |
| `safety-reviewer` | `hockey-iq/time_and_space.md`, `hockey-iq/puck_support_and_spacing.md` |
| `safety-reviewer` | `foundation/on_ice_communication.md` |
| `safety-reviewer` | `systems/neutral_zone_systems.md` — ⚠️ **the seventeenth, found by TWO independent reviewers after the first gate, because the file list was built from the previous commit rather than from the corpus** |
| `rules-verifier` | no file — read NHL, IIHF, USA Hockey, Hockey Canada and CARHA end to end |

⚠️⚠️ **EVERY ONE OF THOSE AGENTS REVIEWED ITS OWN WRITING, WHICH SATISFIES NO GATE CONDITION.** A
`safety-reviewer` that repairs a file is its author. **`rules_primer.md` carries the largest content
change in this diff and no independent pass has read it.** An independent `safety-reviewer` and
`content-reviewer` over the staged text are a precondition of this commit, not a follow-up.

---

## The defect

NHL 81.6's third paragraph withdraws the shorthanded icing exemption. **Its trigger is not a penalty
bench that is empty during the major. It is an empty bench at the moment the major EXPIRES.**

> *"…and they have neglected to ensure there is a player on the penalty bench **to exit upon the
> expiry of the penalty**, they will continue to play shorthanded but are not permitted to ice the
> puck. Icing will be called. **They may substitute for this penalized player at the next stoppage of
> play.**"* — `sources/nhl_rules.txt:8682-8686`

Rule 20.3 supplies the permission the corpus was contradicting: the team *"does not have to place a
substitute player on the penalty bench immediately, but must do so at a stoppage of play prior to the
expiration of the major penalty."*

**Hazard: a kill whose player was ejected hears it may not ice the puck, while a man down, for up to
five minutes during which the rule does not bite.** Conservative in direction — the reader declines a
clear they are entitled to and concedes a defensive-zone draw — and voiced alone with no context.

**Repaired in all seventeen documents listed above**, in body, facts, Common Mistakes, Key Takeaways,
pointers and Sources trailers as each document's own layers required.

---

## ⚠️ What the agents found that the briefs did not

**Every one of these was found by reading a book end to end. None was found by reading a brief.**

| Found | By whom |
|---|---|
| ⚠️ **The ban is TIME-LIMITED — expiry until the next stoppage.** No site in the corpus said so, and neither the verifier nor the coordinator had it. | The `breakouts`/`faceoffs` repair |
| ⚠️ **20.3's closing clause is the MECHANISM: *"as they are no longer short-handed by reason of a penalty."*** Without it the carve-out contradicts the head-count test the corpus teaches everywhere; with it, it applies it. | Two agents independently |
| ⚠️ **An exception inside the exception: *"If the player has been assessed minor penalties in addition to the major… the offending team must place a substitute on the penalty bench immediately."*** It falsifies the unqualified *"the box may stay empty"* the round had just taught the corpus to write. | The `scanning`/`defensive_zone_coverage` repair |
| ⚠️ **The empty box is NOT free: *"Any replacement player who enters the game other than from the penalty bench shall constitute an illegal substitution under Rule 68… calling for a bench minor penalty."*** **This is the written reason benches seat somebody early** — so standing coaching advice can now rest on a rule instead of on folklore, closing a non-negotiable-7 shape three briefs had flagged and none could fix. | The `special_teams` repair |
| ⚠️ **NHL 27.2 has a SECOND paragraph** — a goalie's major plus game misconduct coincidental with an opposing major — which stops *"ejection and injury are the only two routes"* being sayable. The agent that found it declined to trace it and **deliberately wrote its repair around 20.3's scoping clause rather than around an exhaustiveness claim.** | The `game_management` repair |

---

## ⚠️⚠️ THE ROUND'S METHOD FINDING: a verified report's SUMMARY was the defect

A `rules-verifier` read four rulebooks end to end and summarised: *"every other book forecloses the
failure rather than penalising it."* **The coordinator relayed that sentence verbatim into three
briefs.**

**One agent declined to paste it, opened USA Hockey itself, and found the counter-example** at
`sources/usah.txt:2481-2488` — Rule 403(d): *"**(For Adult Classifications)** … the penalized team
**shall not be required** to place an additional or substitute player on the penalty bench… may
regain even-strength **by adding a player from the team bench**."*

⚠️ **Under USA Hockey adult rules the penalty bench is empty BY DESIGN for the whole major — exactly
the state NHL 81.6 penalises — and Rule 624, read end to end, writes no empty-bench limb at all. The
failure there is not foreclosed. It is UNPRICED.** Three mechanisms and one genuine bare zero.

Its own words: *"had I written 'every other book forecloses the failure', I would have shipped a
half-rule into the one document that teaches the shout."*

⚠️ **A SECOND agent produced the SAME defect independently, in its own words, without the relay** —
its paragraph opened *"The other three books foreclose it the same way"* and listed the book that
inverts. **So the flattening is not a relay artefact; it is what a four-way split turns into when
anyone summarises it.**

⚠️ **The verifier's underlying work was sound: it read all four books and three of them do foreclose
it.** The defect was one sentence of summary. **A coordinator quoting a reviewer is exactly as
dangerous as a coordinator quoting a rulebook from memory**, and `CLAUDE.md`'s *"the briefs are more
defective than the corpus"* was this round true of a brief built from a verified report.

**And the same finding has teeth for the reader, not just the method:** under USA Hockey adult rules
a team regains even strength *"by adding a player from the team bench"* — **the act NHL Rule 68
prices at a bench minor.** Same bench behaviour, correct under one book and a penalty under another.

---

## Coordinator failures, counted

- ⚠️ **THREE lines vouched for in briefs as *"already right"* or mischaracterised, all three wrong.**
  One was a body bullet called a Common Mistakes bullet, carrying the misstatement in the same
  sentence as a correct clause. One — `defensive_zone_coverage.md:670` — carried a **false absolute**:
  *"ends the exemption **only if** that puts you level"*, and *"only if"* is a closed set from which
  81.6's third paragraph was excluded. **In the extraction layer, voiced alone.**
- **A premise that neither of two documents taught the head count** — asserted, false, and
  load-bearing: it had been the argument for carrying the mechanism.
- **Citation drift**, corrected twice by different agents.
- **The false generalisation above.**

**Every one was caught by the agent that had read the file.**

---

## ⚠️ Two agents refused to strengthen claims on the coordinator's say-so

*"Non-negotiable 4 for me cuts both ways — I will not upgrade a claim on a brief's say-so any more
than I would state a rule from memory."* Another dropped its own *"the NHL alone"* draft.

⚠️ **The verifier's verdict on both: *"their instinct was right, their conclusion was wrong — the
negative was verifiable, it just required reading TWO RULES PER BOOK instead of grepping one."***
The icing rule answers nothing; the answer is in each book's **major-penalty substitution rule**.
**An absence in rule X is often decided by rule Y, and a sweep confined to X will always report
"unverifiable".**

---

## ⚠️ Sweep failures, and the rule that comes out of them

**An agent repaired two sites in a file it owned, swept it, declared it clean — and a third survived**,
found later by an agent working elsewhere. Its own diagnosis is the transferable finding:

> **"A grep whose output was truncated has not been run."**

Its sweep was broad enough, returned **52.5 KB, was truncated to a ~2 KB preview, and it read only
the preview**. It then narrowed to a phrase **lifted from the hits it had already seen** — so the
second grep was structurally incapable of finding anything worded differently and **confirmed the
first grep's blind spot instead of covering it.** The missed line said *"loses the exemption"* where
the others said *"withdraws it from"*.

**The pattern that works: write the sweep to a file and split on sentence boundaries**, so nothing
hides inside a 3,000-character bullet or falls off the end of a preview. ⚠️ **And search for the
CONCEPT, not the rule number** — a paraphrase carrying neither `81.6` nor `penalty bench` is
invisible otherwise.

---

## What the caps cost, declared rather than hidden

An agent traded a **true clause** out of an extraction line to fit a caveat in: *"a clear released
before expiry is never icing."* It chose the direction deliberately — a permission, not a caveat, so
losing it costs a conservative play rather than a penalty — and the body carries it four sentences
later. **It wrote the trade down.**

> ⚠️ *"A 300-character cap on a block already at its 11-fact ceiling is a mechanism for losing content
> silently, and the only reason this one is visible is that I wrote it down."*

`special_teams.md`'s block sat at **11 facts with 5 characters of headroom**; its repair got that back
to 22 by trading a false clause for a pointer. **`on_ice_communication.md`'s block is at 11 with a
line at 197 of 200 — three characters.** Recorded so nobody later makes room by quietly dropping a
line.

---

## A structural near-miss no checker saw

An agent's first insertion of a four-book paragraph landed **inside** the IIHF paragraph, orphaning
its closing *"Do not read that as unconditional"* so it dangled after USA Hockey Rule 624 and appeared
to qualify it. ⚠️ **`check_facts`, `check_links` and `check_chunk_splits` all passed on it.** It was
caught by **reading the rendered paragraph back**, and rejoined.

---

## What this method could not have found

- ⚠️ **Rule 68 and USA Hockey 403(c) are now QUOTED IN THE CORPUS AND NEITHER HAS BEEN READ.** Every
  agent that read a cited rule end to end this round found something in it the briefs had missed.
  **Quoting a rule is not reading it**, and these two are the next sentence-inside-a-rule waiting to
  happen.
- ⚠️ **"Foreclose" is an agent's characterisation of what three clauses achieve.** Hockey Canada
  4.4(a), CARHA 30(a) and USA Hockey 403(d) were read as **clauses, not books**. *"A permission to
  delay sitting in Hockey Canada's or CARHA's substitution rules, outside the clause I opened, would
  have passed me exactly as the USA Hockey adult limb passed the summary."*
- **Whether the repaired sentences are heard as intended.** Most agents reasoned about isolated
  voicing; two rendered through `md_to_speech` and both changed wording as a result. **The rest is
  reasoned, not heard.**
- **The other hazard classes in thirteen documents.** Every brief was one rule wide. Contact,
  equipment, head/neck/spine, conditioning and culture in those files are **unreviewed this session**.
- ⚠️ **Whether a corpus written for a game with icing and offside stoppages serves a British U12
  reader who plays neither.** `sources/ihuk_junior_roc.txt` Appendix D gives U12 no icing calls, no
  offside stoppage, a running clock and buzzer line changes. **One document now carries it. The
  corpus-wide scoping question is open and is the owner's.**

---

## ⚠️⚠️ A SECOND defect class, found only because an agent read the INDENTATION

A commit gate found `zone_entries.md:647` attributing *"at the instant the penalty expires"* to USA
Hockey 624(b)(1). **The phrase returns zero hits in `usah.txt` and is the NHL's alone**; USA Hockey
prints *"at the time"*. That is non-negotiable 2 failing inside the round that exists to enforce it.

⚠️ **But the repairing agent reported that the gate had understated it, and it had.** The same line
granted the release-before-expiry relief under USA Hockey **with no classification limit**. That
relief is the **second sentence of 624(b)(1)**, governed by the prefix opening the same sub-clause —
visible only in the extraction's indentation, `sources/usah.txt:4413-4418`:

```
(1)   (For all Youth 15-Only and above, Girls 16U and
      above, High School and Adult classifications only)
      The offending team is short-handed (below the on-ice
      shot. The determination is made at the time the penalty
```

**Voiced alone with a 300 ms break either side, that line told a 12U or 14U penalty-killer to fire the
puck the length of the ice.** An icing call against a team already a man down.

⚠️ **NO QUOTATION CHECK COULD HAVE FOUND IT, and the agent said so: it was an OMISSION.** *"I found it
only because I read USA Hockey 624(b)(1)'s indentation to see what the prefix governed. A hazard whose
limiting text sits in a different rule entirely rather than in the same sub-clause would not have been
visible to me."*

**The layer split is the lesson:** the body at `:655` carried the limit, the facts block carried it at
`:645` — **and `:647`, a separate spoken unit in the same block, did not.**

### The sweep it then ran, and two more of the same class

**305 quoted strings extracted to a file and matched against all 36 sources; 216 matched verbatim and
all 63 genuine residuals were read individually.** Two more false identity claims:

- `:692` quoted the incidental-contact sentence as *"(IIHF 42.1; NHL 42.1 **in the same words**)"*.
  The quoted string is the **IIHF's** — *"outside their goal crease, provided the attacking Player"*.
  The NHL prints *"outside his goal crease provided the attacking player"*: different pronoun, no
  comma, lowercase. **No NHL text was quoted, so that claim was the reader's only information about
  NHL wording, and it was false.**
- `:690` — *"**NHL 42.1** carries the same sentence **word for word**."* It does not.

⚠️ **In every one of the three cases the SOURCES TRAILER QUOTED THE NHL CORRECTLY while the BODY
claimed identity with a different book's wording.** **The trailer was right each time; the body was
the defect.** *"Word for word"* and *"in the same words"* are claims about a book and need the same
verification as a quotation.

### And the extraction hides matches as well as revealing them

Two trailer quotations initially failed exact-match and were **correct**: the extraction splits the
sentence across a page break with furniture inside it — `78 USA Hockey Rulebook 2025-29.indd 78
2/14/25 9:28 AM Interference`. ⚠️ **A failed exact-match is not a finding until the page furniture is
accounted for**, which is the mirror of the `numer-/ical` hyphenation trap.

One elision was found and **deliberately not repaired**: NHL 27.8 is quoted as *"six feet from either
goal post"* where the book prints *"six feet (6') from either goal post"*. **Only the redundant
numeral gloss is elided and the meaning is unchanged** — editing it would be the tidying
overcorrection non-negotiable 3 exists to prevent.

---

## ⚠️⚠️ THE AGGREGATION FAILED A THIRD TIME, AND THE BOOK THAT SETTLED IT HAD NEVER BEEN OPENED

Two documents that each own part of this rule ended the round telling readers opposite things:

- **`rules_primer.md:624`** — *"Three of the five foreclose the empty box, by three different routes."*
- **`special_teams.md:653`** — *"Read the other four as leaving the failure unpriced rather than as
  foreclosing it."*

**A `rules-verifier` read five rulebooks and two casebooks end to end. Both sentences are wrong, and
so is the frame they share.**

### The finding: IIHF Rule 68.2, unread by anyone in this corpus

`sources/iihf_rules_v1.1.txt:5462-5466`, identical at `iihf_rules_2026-27.txt:5562-5566`:

> *"…the penalized team shall place a substitute Player in the penalty box immediately and no
> replacement for the penalized Player shall be permitted to enter the game except from the penalty
> box. **Any violation of this provision shall be treated as an illegal substitution under this rule
> calling for a bench minor penalty.**"*

Corroborated by **IIHF 8.1** (*"a bench minor penalty shall be imposed"*), **68.1**, and **Situation
Handbook 68.5**, which applies it: *"Disallow goal and assess a bench minor penalty."*

⚠️ **So `defensive_zone_coverage.md:690` — which says IIHF 20.3 *"forecloses the NHL's failure case
rather than penalising it"* — tells a BRITISH reader an empty box costs nothing. It is a bench minor.
On a kill, a 5-on-3.** That is a penalty consequence in the layer the British reader is sent to.

### Per book, which is the only honest way to state it

| | Substitute required? | By when | Breach costs | Icing? |
|---|---|---|---|---|
| **NHL** | Yes | A stoppage before expiry; **immediately if minors are on the clock** | Bench minor if you come over the boards; a skater short to the next stoppage | **Yes** |
| **IIHF** | Yes | **Immediately** | **Bench minor** (68.2, 8.1) | No |
| ⚠️ *correction* | *and the NHL row above understated: **NHL 68.2 is a bench minor too**, for failing to seat one in time as well as for coming over the boards* | | | |
| **USAH Youth/HS/Girls'** | Yes, unless 403(c) coincidental | Immediately | ⚠️ **NOTHING — see the correction below** | No |
| **USAH Adult** | **No** | — | Nothing — over the boards is expressly permitted | No |
| **Hockey Canada** | Yes — a designated server | At the stoppage | **Cannot arise** | No |
| **CARHA** | Yes | **Not stated** | **Not written for a major** | No |

⚠️ **Hockey Canada is the only one that genuinely forecloses it, and by a rule the corpus never named
— 4.1(b): *"If the Coach refuses to name a player, the Referee will name any player of the offending
team."*** **The referee fills the seat**, which is why no sanction exists. `rules_primer.md` cited
only 4.4(a), which is half the mechanism.

⚠️ **CARHA is UNSETTLED and must be written as unsettled.** Rule 27(d) carries the same backstop, but
**30(a) does not use the triggering *"shall designate"* formula**, no CARHA casebook exists, and the
book says nothing. **The verifier refused to write "CARHA forecloses it" and said so.**

### ⚠️⚠️ THE "CONSEQUENCE THAT SURVIVES THE WHOLE ANALYSIS" DID NOT SURVIVE IT — A FOURTH COMPRESSION FAILURE

This section carried, as the round's headline finding:

> *"The NHL is not the strictest book here… the only one whose sanction is the loss of the clear
> rather than a bench minor. The IIHF's price is two minutes; the NHL's is an icing."*

⚠️ **It is false, and an agent repairing a different file found it by opening a rule the verifier
never had. `sources/nhl_rules_layout.txt:5983-5992` — NHL Rule 68.2:**

> *"…the penalized team shall place a substitute player on the penalty bench **before the major
> penalty expires** and no replacement… shall be permitted to enter the game except from the penalty
> bench. **Any violation of this provision shall be treated as an illegal substitution under this rule
> calling for a bench minor penalty.**"*

**Both books price the empty box at a bench minor, under their own 68.2, in almost the same words.
The NHL adds the icing sanction on top. The genuine divergence is the DEADLINE** — IIHF 20.3
*"immediately"* against NHL **68.2** *"before the major penalty expires"* (⚠️ **an earlier draft of this line attributed that wording to 20.3, which says *"at a stoppage of play prior to the expiration"*** — the two are the NHL's own unreconciled pair).

⚠️ **The chain is the finding. A `rules-verifier` read IIHF 68.2 and never opened NHL 68.2. It
concluded the IIHF prices what the NHL leaves to the icing rule. The coordinator relayed that. An
agent wrote it into three documents. A fourth agent, sent to a fourth file for an unrelated line,
opened the NHL's 68.2 and refuted all of it.** **Four compressions of this one rule have now failed,
three of them the coordinator's.**

⚠️ **And note what the verifier's own method could not catch: it read four books END TO END on the
substitution and icing rules and still missed this, because NHL 68.2 is neither.** **An absence in
rule X is decided by rule Y — and this round that lesson was recorded, acted on for four books, and
then failed again on the fifth rule of the first book.**

**Verified while checking it:** `rules_primer.md:622`'s claim that IIHF 20.3 is *"word for word in
the 2025/26 Version 1.1 and 2026/27 editions alike"* **holds** — both flattened editions are
identical through *"They may then legally exit the penalty box when the major penalty has expired."*

### Three omissions in the same passages

- **403(d)'s own exception** — *"unless immediate substitution is permitted under the coincidental
  major penalty Rule 403(c)"* — is in **both halves** of the rule and in none of the documents.
- **USA Hockey 405(a) writes the identical split for MATCH penalties**, also five minutes
  shorthanded. Unmentioned anywhere.
- ⚠️ **The only genuinely common ground in all five books is unmentioned too: coincidental majors
  with game misconducts leave the box legitimately empty in every book, and nobody is shorthanded, so
  icing never arises.**

### What this says about the method, and it is the round's conclusion

**Three separate attempts to state four books in one sentence produced three different wrong
sentences** — a verifier's summary, a coordinator's relay of it, and an agent's independent
reconstruction. ⚠️ **The corpus has now failed twice by compressing this and once by relaying a
compression.** **The fault is not in any of the three sentences. It is in the collective noun.**

⚠️ **And the verifier warned against over-correcting into a six-row table: *"six rows may be more
than a listener can hold."*** The renderer drops a table above 3 columns, 14 rows or 200 characters a
cell — **so the grid above is a record, not a template.** Each document has a different reader.

### The repair, and what it refuted in the brief that commissioned it

⚠️ **FOUR of the brief's five supporting claims were wrong, and the agent corrected each from the
book rather than carrying it in.** The brief was written by the coordinator from a verified
`rules-verifier` report — **so this is the third layer at which a compression failed.**

| The brief said | The book says |
|---|---|
| HC "4.5(a) Note 1" carries the coincidental-major relief | It is **Note 1 to 4.5(c)** (`hc_layout.txt:2010-2014`) |
| The CARHA backstop turns on a *"shall designate"* formula | Hockey Canada's 4.4(a) writes *"will designate"*. **CARHA's own trigger does say *"shall designate"* — and 30(a) does not use it — so the conclusion survives on corrected reasoning** |
| USA Hockey youth breach → bench minor "via 204(c)" | **403(d) writes no sanction of its own.** It is **206(d)** — *"a bench minor penalty for illegal substitution shall be imposed"* — with 204(c) and Casebook Sit 10 |
| *"The NHL is the ONLY one that lets the box sit empty at all"* | ⚠️ **False, and the agent nearly shipped it: USA Hockey Adult requires no substitute at all, which is LOOSER than the NHL.** Caught on its own re-read |
| IIHF 19.2 carries the NHL's sentence *"in its own capitalisation"* | Not an identity — the IIHF writes *"in the penalty boxes"* where the NHL writes *"on the penalty benches"* |

⚠️ **It also found a FOURTH defective site the brief did not name** — `rules_primer.md:622`, carrying
the identical wrong framing. **Three briefs in a row have named a subset of the sites.**

### What each document got, and why not the same shape

- **`rules_primer.md`** — the reference reader: a **3-column, 6-row table**. ⚠️ **The verifier had
  warned six rows may be more than a listener can hold; the agent checked and a table is what SOLVES
  that** — the renderer voices each row as its own `<p>` with the book named first. **Verified in the
  rendered SSML. `check_tables` 45 → 46 read aloud; 3 dropped unchanged; the new table is not near a
  limit.**
- **`special_teams.md`** — the penalty killer: no table, prose keyed to what it costs *on a kill*.
  ⚠️ **Its block was at `HARD_MAX` 11, so nothing could be added — the sanction was folded in by
  compressing CITATION FORMATTING only (`"Rule 81.6"` → `"81.6"`), losing no clause. 297 of 300.**
- **`defensive_zone_coverage.md`** — the cross-referencing reader: smallest change; fix the false
  clause, name the sanction, point at the owner.

### One more site, found by a corpus-wide layer test and left for its owner

**`positions/defender.md:632`** — *"the IIHF book has no such paragraph, so a British kill does not
lose it this way."* ⚠️ **Accurate about icing, silent about the sanction. Voiced alone it is the
reassurance sentence, and it costs two minutes.** ⚠️⚠️ **It was on a "leave them alone — NHL-scoped
and correct" list this round: it is correct about the NHL AND makes an affirmative claim about the
IIHF, and the second half is the part that fails. THE SHAPE TO SWEEP FOR IS THE CROSS-BOOK CLAIM, NOT
THE RULE NUMBER.** The same test over all 830 blocks in 39 documents returned no other hit.

### The correction's own correction, and the count that failed inside the sentence written to stop counts failing

The agent sent to repair the aggregate found **three defects in its own new text, by reading the
rendered SSML rather than the markdown:**

- ⚠️ **It miscounted the books TWICE while writing the correction** — *"four of the five price the
  failure"*, and *"three of those four"*. **The answer is NOT three of five — see the correction near the end of this record, which supersedes this line; and even that correction was blocked** (NHL, IIHF, USA Hockey
  Youth/HS/Girls') **and two of the other four**. ⚠️⚠️ **That is the fourth compression failure on
  this rule, and it happened INSIDE THE SENTENCE WRITTEN TO STOP THE COMPRESSION FAILURES.**
- A paragraph it had edited then read *"All **three** of the NHL's failure sentences… **Neither
  rule** attaches any consequence"* — **"all three … neither rule", in one passage.**
- **Two pieces of self-narration it had written and removed under non-negotiable 6** — *"the
  corpus-wide habit of quoting only one of them"* — replaced with statements about the books.

**And it strengthened the finding rather than merely accepting it.** It flattened all three books and
searched for the sanction sentence: *"Any violation of this provision shall be treated as an illegal
substitution under this rule calling for a bench minor penalty."* ⚠️ **Present unchanged in NHL, IIHF
v1.1 and IIHF 2026/27 — word for word in all three, not "almost the same words."** And the deadline
divergence is **inside 68.2 itself**, not only at 20.3: NHL *"before the major penalty expires"*
against IIHF *"immediately"*, the sentences otherwise identical bar *penalty bench* / *penalty box*.
**The two 68.2s agree exactly on the price and differ exactly on the deadline.**

⚠️ **A further divergence inside ONE book: the NHL states its own deadline twice and not identically.**
68.2 says *"before the major penalty expires"*; 20.3 says *"at a stoppage of play prior to the
expiration"* — **a stoppage and no other way in. The book does not reconcile them**, and a reader
working to 68.2's looser wording could think they may seat somebody during play.

⚠️ **A corroboration used with its own defect disclosed:** the NHL index at `nhl_rules.txt:14213`
routes the seating failure to 68.2 — **and also to Rule 20.2, which is *"Short-handed"* and has
nothing to do with substitution.** Cited in one document **with that flaw stated in the text**, and
left out of the other two. **An index is corroboration, not authority.**

### ⚠️ And the repairs then contradicted each other in the facts layer

Two agents repaired one rule in adjacent files. `special_teams.md:628` and
`defensive_zone_coverage.md:670` say the bench minor is **both books'**; `defender.md:632` — written
by the agent that FOUND NHL 68.2 and reported it — **still attributes it to the IIHF alone.**
⚠️ **`check_facts` cannot see this, and neither can any other checker: both lines conform, and the
contradiction is only visible by reading them as a set.** Routed back. **This is the failure mode
`CLAUDE.md` records, occurring between two repairs of the same defect on the same day.**

---

## ⚠️ The repairs introduced the error this corpus exists to prevent, and two independent passes caught it

**The exemption runs on an ON-ICE HEAD COUNT, not the penalty clock.** Several repairs written today
restated it as a duration — *"while the penalty runs"*, *"for the whole five minutes"*, *"at every
moment while the penalty is still running"*, *"a kill can still clear freely while the major is being
served"*.

⚠️ **Kill a five-minute major, the other team takes a minor, and you are 4-on-4 — not below their
strength, and icing applies immediately.** NHL 81.1 applies icing to a team *"equal or superior in
numerical strength"* (`sources/nhl_rules.txt:8557`); 81.6 ¶1 exempts a side *"below the numerical
strength of the opposing team"* (`:8671`).

**A support no brief had, found by a repairing agent: NHL Rule 16.2 DEFINES the term** —
`sources/nhl_rules.txt:2330`, *"'Short-handed' means that the team is below the numerical strength of
its opponent on the ice."* ⚠️ **So the word *shorthanded* is count-anchored in the book's own
vocabulary, and the clock clause was the only thing framing it as duration.** That is why the repair
could be a **deletion**: the count survives in the surviving sentence.

**Found in seven sites across four documents by a CONCEPT-ONLY sweep** — searching the idea, not the
rule number — **which is the sweep that would also have caught the seventeenth document.**

### What the repairs did with it, and the restraint that matters more

⚠️ **One agent deleted rather than replaced, net −24 words**, on three checked grounds: the clause was
a redundant restatement of the *"only… once a major has expired"* already in the sentence; the count
survives in the opening clause; and `special_teams.md` owns the rule and **both documents already
linked to it in the same sentence**. **A hockey-IQ document about space does not need to restate
penalty administration.**

⚠️⚠️ **AND SEVEN LINES THAT MATCH THE PATTERN ARE NOT DEFECTS. A regex sweep would have "corrected"
all seven.** `neutral_zone_systems.md:48`, `special_teams.md:22` and `:1137`, `faceoffs.md:906` and
`:915`, `center.md:525` and `:536`, `goaltender.md:919` — **each states the carve-out's SCOPE rather
than a permission, and each carries the count in the same spoken unit.** The corpus's own model
sentence is `goaltender.md:919`: *"that clawback is not what takes the shout away during the major —
**the count is**."* **This is the scope-versus-tension case `CLAUDE.md` names, and it held.**

### What each repair found beyond its brief

- **A second icing section in `breakouts.md`** (`:435`), body-only, its facts line already
  count-correct. **The brief named three sites; there were four, plus three body imperatives.**
- ⚠️ **A false identity claim in a SOURCES TRAILER that both the brief and an independent reviewer
  missed** — `zone_entries.md:1091`, saying two IIHF rules *"both carry"* a sentence whose wordings
  differ three ways. **The trailer is where this corpus keeps its provenance.**
- **A MALFORMED quotation span** at `defensive_zone_coverage.md:785`, found because a curly-quote
  census came out **36 open against 37 close**. ⚠️ **No checker here looks for that**, and it was a
  side effect of counting rather than sweeping.
- ⚠️ **The same pass converted OUTER quote delimiters and deliberately left the NESTED ones** at
  `:146`, `:689`, `:691`, which sit inside straight-quoted rulebook text and reproduce the source's
  own internal quotation marks. **Sweeping those would have corrupted quotations.**

### ⚠️ And a coordinator wrote an over-length `Rule:` line into a brief

The fix sketch for `defensive_zone_coverage.md:670` measured **305 against the 300-character cap**.
The agent caught it on its first pass. ⚠️ **This is `CLAUDE.md`'s *"the brief's proposed wording is a
brief, not a patch"*, failing in the one form a checker WOULD have caught — and in a round whose every
brief instructs agents to measure.**


---

## ⚠️⚠️ THE COUNT WAS WRONG A FIFTH TIME, AND THIS TIME THE CORRECTION HAS POSITIVE EVIDENCE BEHIND IT

Every version of this analysis said **three of the five books price the empty box at a bench minor** —
NHL, IIHF, and USA Hockey at its youth, high-school and girls' classifications. ⚠️ **It is TWO: the
NHL and the IIHF.**

**USA Hockey Rule 403(d) is a duty and carries no penalty.** The two rules the corpus had cited as
pricing it cover different acts, and the book's own index says so:

- **206(d)** (`sources/usah.txt:1772-1774`) opens *"If a penalized player has been **INJURED** they may
  proceed to the dressing room…"* — its bench minor is *"for a violation of **this** rule."*
- **204(c)** (`:1658-1660`) is the player *"whose penalty has **EXPIRED**"* proceeding *"by way of the
  ice."*
- **The Summary of Penalties names them by act** (`:5238`, `:5241`): 204(c) *"Illegal entry from
  penalty bench"*; 206(d) *"Injured/penalized player returns prematurely"*. **Nothing in that list is
  filed against 403(d).**

⚠️ **And the decisive evidence is POSITIVE, not an absence — which is what makes this safe to state.**
`sources/usah_casebook.txt:6691-6698`, **Rule 403 Situation 3**, puts the exact question — *"may their
team wait until the major penalty is near expiration before placing the additional player on the
penalty bench?"* — and answers **"No (Youth, Girls' and High School). Rule Reference 403(d)"**,
**naming no penalty.** A negative existence claim became a positive citation.

**So the corpus now says of USA Hockey youth what it already said of the NHL and of CARHA: read the
silence as a silence.** ⚠️ **This was the ONE place a silence had been filled with a price** — and the
document's own body had disclosed it four lines from the table that asserted it.

### Two of my own brief's claims refuted in the same pass

- ⚠️ **I called `rules_primer.md:913` a *voiced* table cell carrying the defect. `check_tables.py`
  reports that table as DROPPED — 6 columns, 23 rows, a 2,448-character cell — so a listener never
  hears it at all.** And the cell already framed the sentence on the carve-out rather than the clear.
  **It was left alone, correctly.**
- **I said `rules_primer.md` has a table at zero rows of headroom and implied it was the new one. It
  is `:809`, a different table**, untouched and still at zero.

### And two further sites the brief did not name

**`rules_primer.md:999`** — a Common Mistakes bullet, a voiced summary layer, carrying *"a kill on a
major whose player was ejected may ice the puck the whole five minutes."* **`rules_primer.md` KT3** —
the permission with no counterweight, the identical hole to the `special_teams.md` KT8 the brief did
name. ⚠️ **Four briefs in a row have now named a subset of the sites, and every miss was found by an
agent sweeping rather than by the list it was given.**

---

## The independent passes, and the dimension that is NOT discharged

⚠️ **This section exists because a commit gate blocked on its absence: the three reviewers below had run and appeared nowhere on disk, only in a coordinator's brief. A brief asserting that a review happened is not a review.**

### `safety-reviewer`, independent — authored none of the repairs

Verified all five limbs against primary text and **upheld every one**, including the shared 68.2 sentence *"present unchanged"* in `nhl_rules.txt`, `iihf_rules_v1.1.txt` and `iihf_rules_2026-27.txt`. **Findings:** the Critical in the seventeenth document; the **clock framing** in four documents; a dangling *"past the deadline"* in an extraction line; limb 4 absent from every facts block but one; a Key Takeaway carrying the permission without its counterweight; and the **USA Hockey sanction asserted where 403(d) writes none** — the finding that a later gate then showed was itself half-right.

### `content-reviewer`, independent — authored none of the repairs

**Findings:** the same seventeenth document, found separately; **+10,701 words added to `content/`** by its method, against the owner's standing instruction to reduce text, with a recommendation not to ship the expansion as written; four instances of the corpus **narrating itself**; a book-count wrong in the paragraph after the one that fixed a book-count; **curly quotation marks** making new rulebook quotations ungreppable; and that the style-guide diagram rule, though now decidable, **classifies about two-thirds of a 16-marker sample as "stays put"** because the borrowed-caption rule forces captions to name their whole subject.

⚠️ **A later gate re-measured the word delta by a different method and got +11,708 (617,449 → 629,157), `rules_primer.md` +4,437 and `special_teams.md` +2,530. Both figures are recorded with their methods rather than one being chosen.**

### ⚠️ `site-reviewer` — RAN, PAINTED NOTHING, AND D15 IS UNDISCHARGED FOR THIS COMMIT

**The Chrome extension refused every `navigate` to localhost** — *"Could not verify this site's safety category"* — across five attempts and three URLs. **Not the auth timeout: the tab tools authenticated fine.** It stopped after five rather than looping, **filed no visual finding at all**, and said: *"Given no rendered page was inspected, this change should not clear D15 on the strength of this report."*

**What it established statically from `dist`, and a gate re-verified independently:** `class="language-facts"` **0**, `class="facts"` **830** with **5,555** matched label/value pairs — **no facts block degraded to a raw code block**, which was the ceiling risk. The new table is wrapped in `div.table-scroll` with a sticky first column; `body{overflow-x:hidden}` and its `@supports` fallback both survived minification; `check_tables` confirms that table is **read aloud**. `dist` is newer than the newest staged content file.

⚠️ **NOT ESTABLISHED, and declared here rather than left silent: whether any page renders correctly.** No layout, no contrast, no theme, no anchor behaviour, no console, no network, nothing at 375 or 320. **Whether the six-row table is READABLE on a phone rather than merely present is the specific unanswered question.**

**A gate ruled that this should not block on its own merits** — no file under `site/` is staged, so the regression C10 guards against is not in this diff — **but that the gap must be written down.** ⚠️ **It also caught the reviewer nearly measuring the wrong tree: `npm run preview` printed its port SIX SECONDS BEFORE anything listened there, and a neighbouring port served a stale build that 404s on the new page.** The reviewer confirmed its port by fetching an asset and reading it.

### ⚠️ What the independent passes could not reach

- **The `content-reviewer` opened no rulebook.** Every substantive rules claim in the added words is unverified by it — *"if any of those is wrong, this pass would have called it consistent, because it IS internally consistent."*
- **The `safety-reviewer` read 16 of 39 documents**, and found the seventeenth only by a corpus-wide grep for the superseded string. ⚠️ **A document restating the defect in different words would have passed both.**
- **Neither rendered the corpus.** Claims about how a line sounds are claims about the markdown.

---

## ⚠️⚠️ THE SIXTH ATTEMPT, AND THE ONLY ONE THAT FOUND THE MECHANISM

A commit gate blocked the fifth correction. **USA Hockey Rule 206(d) prices the empty box — and
`special_teams.md` set up that exact fact pattern four clauses before dismissing it**, saying both
books write 68.2 *"on the same two fact patterns… or **an injured player who cannot serve his own
major**"* and then calling 206(d) *"another act"*.

`sources/usah.txt:1775-1789` — 206(d) contains **both** the duty and the price:

> *"The penalized team **shall place a substitute on the penalty bench immediately**… **unless
> otherwise specified under Rule 403(d) or 405(a)**… For a violation of **this rule** a bench minor
> penalty for illegal substitution shall be imposed."*

### ⚠️ WHY THE CORPUS GOT IT WRONG, which no brief asked for and which is the real finding

**It had read the Summary of Penalties index entry — *"Injured/penalized player returns
prematurely"* — as the SCOPE of 206(d).** It is a finding aid, and it describes only that rule's
**third** paragraph.

⚠️ **The repairing agent then proved the index is not authority, rather than asserting it:
`sources/usah.txt` Rule 404(a) writes *"For violation of this rule a bench minor penalty for illegal
substitution shall be imposed"* — and 404(a) appears NOWHERE in the bench-minor list at `:5236-5248`.
I verified both myself.** **An index that omits a rule it should list cannot be used to bound one it
does list.**

**So the repair stopped counting rules entirely, in both documents, and names the governing rule
instead.** ⚠️ **That also disposes of the gate's second finding — *"the two rules that do write a
bench minor"* asserted as exhaustive — without reaching for a replacement count. Six attempts at a
count; the fix was to stop counting.**

### What it corrected in the brief, and what it found beyond it

- **The brief's framing was too narrow.** 206(d) opens on *"a penalized player [who] has been
  injured"* — **any penalty**, not only a major. NHL 68.2's second limb is narrower. It declined to
  carry the brief's wording.
- **It worked the hinge out rather than relaying it.** 206(d) stands aside only *"unless otherwise
  specified under Rule 403(d) or 405(a)"*, and those relieve the substitute **only for a major plus
  game misconduct and for a match penalty, and only in Adult classifications.** ⚠️ **So an ADULT
  injured player on a PLAIN major still owes a substitute immediately** — labelled in the document as
  a two-rules-side-by-side inference, not as a sentence the book prints.
- ⚠️ **A MAJOR the brief did not name:** both documents had over-read the adult relief as covering
  *"a major"*. **403(d) and 405(a) name major-plus-game-misconduct and match.** Both now scoped, with
  an explicit *"do not widen that relief past the two penalties it names."*
- **Two further sites the brief did not name** — `special_teams.md:1060` (Common Mistakes) and
  `rules_primer.md:1163` (the verification trailer, carrying the premise). ⚠️ **Five briefs in a row
  have named a subset of the sites.**

### And it did it without adding length

**8 insertions, 8 deletions across both files — every change a line rewrite, no new paragraphs.**
Nothing true was deleted; 204(c) and Casebook Rule 204 Situation 10 survive, and the Summary of
Penalties sentence was **kept and reframed rather than cut.** It checked the full facts block rather
than assuming: `special_teams.md:628` is **scoped to two named books and asserts no USA Hockey
silence**, so it was not a defect site and nothing was forced into a block at `HARD_MAX` 11.

---

## Dimension coverage for this commit — stated, because silence on a dimension is the failure mode

A commit gate blocked on this being absent. **Every dimension is checked or explicitly declared.** ⚠️ **Six of the fifteen were ABSENT from the first version of this table while it claimed exactly that — and D9 owns a seven-site propagation failure and D8 a stale count, both of which survived because nobody was asked to look there.**

| Dimension | Status |
|---|---|
| **D1–D3, rules** | ✅ `rules-verifier` ×2 (four rulebooks and two casebooks end to end), an independent `safety-reviewer`, and **three commit gates that each re-derived every quotation from `sources/` rather than accepting the record.** |
| **D4, citation integrity** | ⬜ **OUT OF SCOPE BY CONSTRUCTION, and a gate established it rather than assuming: THERE ARE NO NEW EXTERNAL URLs IN THE DIFF.** Nothing to refetch. |
| **D5, provenance** | ⬜ **OUT OF SCOPE BY CONSTRUCTION, on the same test as D4 — and a gate established it rather than asserting it: diffing added against removed URLs across `content/` returns ZERO new external URLs, so C5's refetch trigger never fires.** Every rulebook attribution was re-derived from the on-disk extractions by **three separate gates**, so the rule-to-wording mapping is verified. ⚠️ **What remains untested, and is named here rather than left as a bare "not discharged": whether the EXTRACTIONS match the published books.** ⚠️ **Two texts have NO PDF on disk at all — `eiha_inhouse_2026-27.txt` and `iihf_rules_2026-27.txt`; `sources/` holds only the superseded `eiha_inhouse.pdf` and `iihf_rules_v1.1.pdf`.** **That is the concrete content of the gap, and it is an open row, not a silence.** || **D6, negative existence claims** | ✅ **for the ones this diff adds**, and each was attacked rather than asserted: *"Rule 624 read end to end, of which it has none"*; *"IIHF 81.6 runs to two paragraphs and stops"* (both editions); *"no CARHA casebook is held here"* (`ls sources/` + `sources/README.md`); *"404(a) appears nowhere in the bench-minor list"*. ⚠️ **The independent `content-reviewer` did not cover D6 — it opened no rulebook and said so.** The coverage is the verifiers' and the gates'. |
| **D10, the facts layer** | ✅ `facts-reviewer` ran on the changed blocks — 13 changed `Rule:`/`Risk:` lines across 7 documents plus 3 new ones, read as a set and as isolated spoken units. |
| **D11, safety** | ⚠️ **PARTIAL, and the earlier ✅ here was wrong.** Fourteen `safety-reviewer` passes ran, **one independent of all authorship** — but that independent pass **read 16 of 39 documents and did not name `rules_primer.md`**, which carries the largest content change in this diff. ⚠️ **A commit gate found this record asserting BOTH *"no independent pass has read it"* and a bare ✅, with nothing between them retracting either.** **The honest state: every changed passage has had a `safety-reviewer` read it, several of them adversarially and by agents that refuted their own briefs — and no single independent pass has covered the whole diff.** |
| **D7, numeric ownership** | ✅ every figure traced to its owner with the owner's qualifications; three separate gates re-derived the style guide's census row by row. |
| **D8, qualification shedding** | ⚠️ **THE ROUND'S COMMONEST FAILURE.** A count was wrong on scope, on modality, on edition and on book-total; a summary sentence flattened a four-way split three times; a verbatim quote was attributed to a book that does not use those words. **Every one was caught by an agent reading the book, none by a checker.** ⚠️ **A gate found a stale self-check count this diff itself created.** |
| **D9, propagation** | ⚠️ **FAILED AND REPAIRED TWICE.** Sixteen documents were repaired and a seventeenth found by two independent reviewers; then the faceoff repair **reached the body and stopped in seven sites**, including **two `Rule:` lines in one document stating the same rule with different book lists.** ⚠️ **Both failures were found by a gate, not by the propagating agent.** |
| **D12, the spoken layer** | ⚠️ **PARTIAL.** Several agents rendered through `md_to_speech.py` and changed wording as a result — a possessive artefact, a dangling antecedent, a pronoun with the wrong nearest referent. **Most reasoned about isolated voicing rather than hearing it.** |
| **D13, section kinds** | ⬜ **OUT OF SCOPE — no document was tagged and the phase is suspended.** |
| **D14, cross-document consistency** | ⚠️ **THE DIMENSION THAT KEPT FAILING.** Two facts lines gave opposite answers on when a bench minor lands; an owner document stated less than its eight dependants; a modal split two files. ⚠️ **No tool sees this — every instance was found by reading the lines as a SET, which is a coordinator duty with nothing behind it.** |
| **D15, the rendered page** | ⚠️ **UNDISCHARGED, declared above.** `site-reviewer` ran and painted nothing; the browser extension refuses localhost. **Two gates ruled it does not block on its own merits because no file under `site/` is staged.** |

---

## ⚠️ The disposition of the +10,701-word finding, which a gate required on record

The independent `content-reviewer` measured **+10,701 words** added to `content/` by its method — a
later gate re-measured **+11,708** by a different one, both recorded above with their methods — and
**recommended not shipping the expansion as written**, against the owner's standing instruction to
reduce text.

**Ruling: the expansion ships, and the trim is deferred to the text-reduction pass already open in
the plan.** Three reasons, the first two a gate's and better than the coordinator's:

1. ⚠️ **The expansion IS the repair.** The defect was under-qualification of a rule, and corrections
   to under-qualification are qualifications. **Trimming in the same commit would revert the fix and
   the fix at once.**
2. **A trim is a claim change.** Text cut here would ship having been reviewed at neither its old nor
   its new content — the C11 shape.
3. **`OPEN_ITEMS.md` already records that instruction 2 *"collides head-on with non-negotiables 3 and
   4."*** That collision is the owner's to resolve, **not a coordinator's to pre-empt inside a
   correction commit.**

⚠️ **The owner was told of the recommendation and its figures before this commit, and approved the
commit and the push.** **The finding is not dismissed — it is the measured baseline the
text-reduction pass now starts from**, and the concentration it identified is the work list:
`rules_primer.md`'s icing section at **1,167 → 4,295 words**, and the *"Ice it"* bullet in
`on_ice_communication.md` at **1,161 words against a 62-word median** in its own section.

---

## ⚠️ The facts-layer pass — one Critical and seven Majors, in the layer this change was written to repair

A commit gate blocked because **D10 had never been run.** It was the right block.

### The Critical: an amnesty in all four layers of one document

`zone_entries.md` told a British reader their kill keeps the exemption and the relief. **True — and
under the IIHF the icing sanction does not exist, so the bench minor is the ENTIRE price of an empty
penalty box.** ⚠️ **`68.2`, `bench minor` and `illegal substitution` appeared NOWHERE in that
document** — verified by the reviewer and again by the repairing agent. **Every sibling stating the
British position pairs it with a counterweight in the same block. That one did not.**

The corpus names this exact misreading elsewhere — `rules_primer.md:622`, *"That silence has a reason
rather than being a gap, and the reason is **a deadline rather than an amnesty**."*

⚠️ **The brief scoped the fix to body and block. The repairing agent found Common Mistakes and Key
Takeaways BOTH stated *"carries neither carve-out"* naked, and propagated to all four** — *"a caveat
in the body and absent from the summaries is itself a critical."*

### ⚠️ It rejected the brief's sketch for two reasons, and the second is the better one

1. **Not standalone.** *"The IIHF's silence on the major…"* — **no antecedent when voiced alone**,
   which is the exact aloud-inversion this dimension exists to catch.
2. ⚠️⚠️ **It would have made the document contradict a sibling.** A line naming only IIHF 68.2, in a
   document whose previous fact says the NHL *withdraws* the exemption, **invites the reader to infer
   the IIHF is the harsher book** — against `defender.md:643`, *"The bench minor for failing to seat
   him is not the IIHF's alone."* **It read NHL 68.2 itself and carried the deadline-not-price guard
   into the body, leaving the fact short and standalone.**

**And it did not leave the line at the cap:** 289 of 300, *"I deliberately did not leave it at 300,
which an earlier draft did."* It trimmed **non-quoted prose** to make room rather than shortening a
quotation.

### The other seven, in kind

- ⚠️ **The OWNER states less than its eight dependants.** Eight of nine changed lines carry *"only
  until the next stoppage"*; `special_teams.md:628` does not. **Propagation reached every dependant
  and missed its source** — and that inverts the ownership check: a reviewer comparing siblings to
  the owner would correct them *toward the weaker statement.*
- **Two facts lines give opposite answers** on when the bench minor lands — a box empty at a stoppage
  40 seconds before expiry and filled 10 seconds before it.
- **A closed condition list naming the wrong condition:** `defender.md:607` says *"not
  unconditionally"* then names one condition — **and its own body says the one it named is not the
  one that will catch you.**
- **A rule extracted from nothing:** `defensive_zone_coverage.md:670` states a bench minor its
  section body never teaches. **True, safety-positive, and still unfounded — a correction would reach
  the body, find nothing, and stop.**
- **Two quotations mis-anchored**, one to the wrong sentence of NHL 81.6 (the moment-of-judgement
  test quoted to support the release relief, which is the *next* sentence), one truncated to
  *"at the time"*.

### ⚠️ And it corrected the brief four times

**13 changed lines across 7 documents → 15 across 9.** ⚠️ **The "set of seven" given to it to read
for mutual contradiction was MISSING TWO MEMBERS, and one of them — `winger.md:558` — is a Major.**
**Three blocks at `HARD_MAX` → seven.** A headroom figure off by two. ⚠️ **And the displacement worry
the brief raised was unfounded: it measured every fix and NONE required trading out a true clause.**

### ⚠️ An agent refused to write a claim the corpus already made, and was right

Asked to price an empty penalty box on a kill, the `breakouts`/`faceoffs` agent carried **"two
minutes"** — verified in both books at Rule 17.1 — and **declined to write "5-on-3"**, escalating it
to the files that own it rather than copying it.

- **Under the IIHF it is sound.** 20.3 and 68.2 both want the substitute *"immediately"*, so the
  violation completes **while the major is still running**: a fourth skater off a four-skater kill.
- ⚠️ **Under the NHL the book does not settle it.** 68.2 and 20.3 both set the deadline at the
  **expiry**; 20.3 keeps the team short *"until the next stoppage of play"* and 81.6 restores the
  skater *"at the next stoppage of play"* — **the same whistle.**

⚠️⚠️ **The agent that then repaired it found a THIRD rule neither the escalation nor the coordinator
had: a bench minor cannot be assessed before a stoppage either** (`nhl_rules.txt:2281`, `:2296-2297`).
**So all three events pin to that same whistle, and the plain reading points away from a 5-on-3 and
toward 5-on-4.** It asserted neither — no rule sequences the restoration against the assessment —
**but the corpus had been stating as fact the LESS likely of two readings.**

**Scoped, not deleted, in four places** across `special_teams.md` and `defensive_zone_coverage.md`.
The IIHF 5-on-3 survives in every layer it was in, because that is the British reader's book.

⚠️ **AND IT CORRECTED THE COORDINATOR ABOUT WHICH FILE WAS AT FAULT.** `rules_primer.md:628` **needed
no repair**: it *lists* the two costs — *"a bench minor (68.2), **and** a skater short to the next
stoppage with no icing"* — **without claiming they compound, and never says 5-on-3.** *"That row is
the careful version. My files were the defect; its owner was not."*

⚠️ **A ROUTING FAILURE, SELF-REPORTED, BY THE AGENT WHOSE JOB IS TO CATCH UNSAFE CLAIMS.** Its first
pass declared it had not opened the IIHF book and treated that as a coverage limit. **The book was on
disk the whole time**, and it had not read `sources/README.md` before concluding it could not check.
**That is the failure `CLAUDE.md` names — the defect is ROUTING, NOT DILIGENCE — and it is why this
finding had to come from a different agent.**

**Residual closed by the coordinator:** it flagged `special_teams.md:933`'s IIHF 76.7 5-on-3 as
reasoned-but-unverified, *"given that the structurally identical claim next door was wrong."*
**Verified: `iihf_rules_2026-27.txt` 76.7 — *"When two (2) 'face-off violations' have been committed
by the same team during the same 'face-off', this team shall be penalized with a bench minor
penalty."*** ⚠️ **The compounding is real here and the empty-box case is not, for one reason worth
keeping: this bench minor is assessed AT THE DRAW, mid-penalty, while the other falls at an expiry.
Same sanction, different moment, opposite answer.**

---

## ⚠️ A self-certification let a defect through, and the corpus had already recorded the contradicting fact

A commit gate's seventeenth finding. An agent flagged `special_teams.md:933` as *"reasoned but
unverified"*. **The coordinator closed that flag by verifying it itself — against ONE edition, when
the load-bearing words in the line were *"in both editions"*.** `CLAUDE.md`: *"Does not: review its own
writing, or let a repair self-certify."*

**And the thing it should have found was already on disk.**
`round_57_the_wrong_rules_leniency.md:2018` tabulates the 2026/27 change to IIHF 76.7 limb (III) and
annotates it **"the warning is DELETED"** — in a section about an agent that inverted the *direction*
of that same rule and had it relayed onward by a coordinator.

### ⚠️⚠️ AND THE INFERENCE BUILT ON IT — BY THE GATE AND BY THE COORDINATOR — WAS ALSO WRONG

The repairing agent **refuted the brief that sent it.** The gate reasoned that deleting the warning
made the route to the bench minor *"strictly shorter"*. **It did not.** Three paragraphs below, in the
same rule, the 2025/26 book settles the counting itself (`iihf_rules_v1.1.txt:6350-6352`) — the centre
is warned *"that **the team has committed a 'face-off' violation** and any subsequent violation will
result in a bench minor penalty."*

⚠️ **The 2025/26 warning was NOTICE THAT A VIOLATION HAD ALREADY BEEN COUNTED, not a tier to
exhaust.** **Two violations in both editions. The route has not shortened.** What moved is the
**first-instance sanction** — warning → centre off the dot. **The record's *"the warning is DELETED"*
is true; the inference drawn from it was the gate's and the coordinator's, not the record's** — and it
is the same class of error the gate cited that record section for.

### What reading the rule TO THE END found instead, and it is worse

⚠️ **The document routed EVERY 5-on-3 at the dot through the SECOND violation. Physical contact at the
dot is a minor ON ITS OWN, in every book the corpus quotes.**

- **IIHF 76.7 (both editions) and NHL 76.7** — *"the Referee **may**, at [their] discretion impose a
  minor penalty… on the player(s) whose action(s) caused the physical contact."*
- ⚠️⚠️ **USA HOCKEY 613(e) IS HARDER AND WAS NOWHERE IN THE DOCUMENT** — *"A minor penalty for
  interference **SHALL** be assessed to any player facing-off who makes any physical contact with
  their opponent's body…"* ***"Shall"* where the other two write *"may"* — in the book most North
  American youth and rec readers are under.** **I verified both strings.**

**The named instance is helmet-to-helmet contact between centres.** ⚠️ **A man short, that single act
IS the 5-on-3 — no second violation needed — and a reader planning discipline around *"don't give them
a second one"* has the wrong threshold.** Repaired in three layers; propagation to three further
documents dispatched.

⚠️ **The agent's own account of why nothing would have caught it: *"no heading advertised it, and no
grep I would have thought to run would have surfaced it, since the document never used the word
'interference' about a faceoff."*** **A hazard in a rule the document CITES but does not quote past
its first paragraph is invisible to every method used today.**

### And it repaired a disclosure that ran the wrong way

The Sources trailer said *"Nothing else in the 2026/27 book has been read for this document"* **while
the body compared the two editions at four rules.** It read all four, confirmed 42.1–42.5 and 69.4
**word-for-word identical** and the 81.4/82.1 mismatch **real**, and **extended the disclosure rather
than deleting it.** ⚠️ **Round 59's direction exactly: the corpus looking LESS supported than it is.**
