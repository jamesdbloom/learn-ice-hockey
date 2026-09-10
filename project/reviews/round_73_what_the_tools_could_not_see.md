# Round 73 — what the tools could not see

**10 September 2026.** Agents across many waves on disjoint file sets, with the coordinator running the
censuses, the renderer, four diagram rebuilds and the plan.

⚠️ **The agent count is stated ONCE, in the Dimensions table below, and nowhere else.** An earlier draft of
this line said *"Fourteen agents across nine waves"* while the table said **23** — ⚠️ **a figure disagreeing
with its owner INSIDE THE SAME RECORD, which is the failure `CLAUDE.md` documents having happened three
times, committed here in the record whose job is to be the owner. Caught by `commit-gate`, not by its
author.** **Quote the table, never this paragraph.**

---

# The thread

**Every instrument in this repository was wrong in this round, and each was wrong in a different
direction.** That is the round's finding, and it is worth more than any single defect it produced.

| instrument | how it was wrong | direction |
|---|---|---|
| `check_caption_negations.py` | a whole-line `//` comment inside a `'a' + 'b'` caption **ended the string run**, so it scanned only the **prefix**. 50,801 chars — **12.4% of the layer** — never scanned, hiding **156 hits, 4 at score 3** | ⚠️ **under-reported, and worst exactly where it mattered most: the safety-counterweight captions** |
| `check_zones.py` | keyed on raw vertex tuples, so **the same six vertices in a different winding rotation** read as two regions; and **counted `fill:none stroke:none` label anchors as zones** | over-reported — **a reviewer spent a render proving each was nothing** |
| `check_chunk_tails.py` | **does not read blockquote interiors** | blind to a 4,122-char blockquote splitting mid-promise |
| `check_facts.py` | passes on **length and count**, never on **content** | ⚠️ *"will happily pass a value that has lost 'chin off your chest'"* |
| `check_absolutes.py` | **correct, and the round's one instrument that behaved well** — it refused to certify a stale caption layer and **five separate agents reported its exit 2 rather than treating it as a pass** | refused to lie |
| the coordinator's briefs | a false zero-claim, a citation three lines wrong, two counts wrong, one census **83% wrong** | ⚠️ **the briefs remained more defective than the corpus** |

⚠️ **And the round's clearest critical was invisible to all of them, because it was not in the corpus at
all.** In the reviewer's words: ***"A tool the corpus quotes selectively and accurately is invisible to every
check that starts from the corpus."*** `check_facts`, `check_disclosures` and `check_pointers` all **passed**
the document. **The missing sentence was missing precisely because nothing in the file pointed at it.**

---

# The two criticals

## 1 · CRT6 says two things this corpus said in exactly one document

`sources/crt6.pdf` **page 2**, red type across the full page width, read by eye after `pdftoppm -r 150`
because ⚠️ **`crt6.txt` is 1,535 bytes of BMJ page furniture from a 6.3 MB PDF and holds none of the tool:**

> *"Any athlete with a suspected concussion should be - **IMMEDIATELY REMOVED FROM PRACTICE OR PLAY** and
> should **NOT RETURN TO ANY ACTIVITY WITH RISK OF HEAD CONTACT, FALL OR COLLISION**, including **SPORT
> ACTIVITY** until **ASSESSED MEDICALLY**, **even if the symptoms resolve**."*

**Two limbs, both absent from `conditioning_and_recovery.md` — a document with an entire `## Concussion`
section, a subsection headed *"Concussion: the absolute rule"*, and another headed *"Return to play is a
medical decision"*:**

1. ⚠️ ***"even if the symptoms resolve"* appeared ZERO times.** The document says symptoms can be
   **delayed** — a claim about **onset**, a different proposition. **A player whose headache has gone by
   Wednesday was outside every sentence in that document that would stop them.**
2. ⚠️ **The BREADTH.** Every restriction there was scoped to hockey. **CRT6's is not.** **A player who feels
   fine and goes mountain biking on Thursday complied with every word of the document and violated CRT6.**

**Corpus-wide census, coordinator:** 12 documents mention concussion. ⚠️ **ONE carries either limb** —
`body_contact_and_battles.md`, which carries **both, in four layers**. Of the rest, only `rules_primer.md`
actually instructs a reader about going back and **has the identical defect**; `goaltender.md`'s three sites
**defer correctly** and need nothing.

## 2 · The corner-seal block taught five facts and omitted that the seal IS checking from behind

`body_contact_and_battles.md` §*"They are 2-on-1 by default"* flagged **two** limits and omitted the one
reaching every USA Hockey reader. **Verified against `sources/usah_casebook.txt`, not against the body:**

> *"**(2) A player makes minimal body contact from behind to an opponent who is in close proximity to them,
> and board contact is made. This check should be called as a minor and a misconduct as the result of this
> 'pinch' against the boards from behind.**"*

⚠️ **The escalation half of the same Situation was in NEITHER the block NOR that section's body** — only in
§5. **Repaired by writing the sentence into §8's body first**, so the new facts trace in-section.

---

# The other criticals

## 3 · CRT6's escalation limb — the sentence that decides whether a head injury reaches a hospital

`body_contact_and_battles.md`'s concussion block carried the driving and responsible-adult limbs and the
*"not the all-clear"* limb, **and not the escalation instruction.** From the rendered PDF, page 2:
*"**Be left alone initially (at least for the first 3 hours). Worsening of symptoms should lead to immediate
medical attention.**"*

## 4 · The corner-seal block: five facts, and the seal IS checking from behind

Verified against `sources/usah_casebook.txt` rather than against the body. ⚠️ **The escalation half of the
same Casebook Situation was in NEITHER the block NOR that section's body — only in §5, a different section —
so the repair had to write the sentence into §8's body FIRST for the new facts to trace in-section.**

## 5 · A bare instruction to foul, priced at 21%

`risk_management.md` carried *"Take the penalty to deny a certain goal — a 21% chance beats a 100% chance"*
with nothing in the block saying some fouls are not priced at 21%. ⚠️ **A defender chasing a breakaway who
acts on it hauls the carrier down from behind — NHL 57.3, a PENALTY SHOT; with his own net empty, an AWARDED
GOAL under 57.4/25.1. He has paid 100% to prevent 100%.** **Body ✓, Common Mistakes ✓, Key Takeaway ✓,
facts ✗ — round 10's shape.**

## 6 · A facts value teaching how to meet a wall, with no instruction about the head

`passing_and_receiving.md:480`. Its own source ends *"…extended arms, forearms, side of body and legs, **but
with no head contact at all**"* — and the value dropped exactly that clause. ⚠️ **A later reviewer established
the clause is about the PLAYER hitting the boards, not a checker delivering a hit, and that the corpus applies
it to the right party. Had it been the checker's clause, this would have been a different and larger defect.**

## 7 · An unscoped *"never stick a hand out"*, three values after the block puts you at a wall

⚠️ **Obey it at a wall and you take the impact on your head instead of your arms.** The document's own Sources
trailer already said *"all three bodies teach the arm **into** the wall rather than **against** it."*

---

# Two defects that ran the OTHER way — the corpus understating what the books say

⚠️ **Both are the round-59 direction, which is the one no reviewer stops on.**

**A FALSE DISCLOSURE INSIDE THE CORPUS.** `equipment.md` claimed eight strings *"return nothing from either
edition"* of the IIHF book. ⚠️ **`approved by` returns ELEVEN in each** — re-measured independently, positive
control `equipment` = 229/218 — **and two of them reach equipment a reader buys**: 11.8's goalkeeper face
masks *"of a design approved by the IIHF"*, and 9.8, which classifies non-conforming gear as **Dangerous
Equipment** on a send-off ladder.
⚠️⚠️ **HOW IT SURVIVED, AND THE STYLE GUIDE PREDICTED IT: the document's own IIHF Sources entry lists 9.5,
9.6, 9.7, *9.9*, 9.10–9.13 — IT SKIPS 9.8, THE RULE THAT ANSWERS THE QUESTION.** *"The gaps in that list are
the highest-yield place to look."* **The conclusion survived; the disclosure did not.**

**AND ITS MIRROR — a claim in NEITHER source.** The same document's *"Helmets are extremely good at preventing
skull fractures and lacerations"* returns **zero** for `fracture` and `lacerat` from both rendered retailer
pages. **Its source goes only as far as *"designed to protect the skull and brain"* — design intent, not
efficacy.** ⚠️ **Kept per NN3, stated first, and labelled as unmeasured in the same voiced unit.**

---

# The censuses that changed what was worth doing

| census | result |
|---|---|
| 604(a) limb, six documents | ⚠️ **83% overturned. A sweep would have damaged five documents, three of which say it better than the sweep would have.** |
| prevalence claim, caption layer | ⚠️ **CLEAN.** The reviewer's *"if a copy survives anywhere, that is where it is"* — it does not. |
| CRT6 limbs, 37 documents | **12 mention concussion; ONE carries either limb.** |
| Key Takeaways, 37 documents | **13 over the 5–10 spec; 34 of 37 with an item over 120 words; longest 1,257.** ⚠️ **The first run returned 10,790-word takeaways — Key Takeaways is often the last HEADED section and the Sources trailer has NO heading, so the capture swallowed it. A measurement that produces an absurd number is a broken measurement, not a finding.** |
| sub-clause voicing | **30 sites, 10 documents.** `7.4(a) a minor` renders *"clause a **a** minor"*. ⚠️ **Confirmed by rendering a fixture, not assumed.** |
| `81.1` vs `81.6` | ⚠️ **NOT a divergence. Both correct, different clauses — 81.1 scopes icing to a team *"equal or superior in numerical strength"*, 81.6 states the exemption outright. A sweep would have destroyed a real distinction.** |

---

# What the reviewers refused to do, and were right to

⚠️ **This is the round's second-best evidence that the method works.**

- **A reviewer declined to edit the file it had just reviewed:** *"my repairs would be new text with me as their
  only reader, in a wave with no second reviewer on this file."*
- **A reviewer declined to settle a region divergence:** *"picking one is AUTHORING and the corpus has not made
  the decision."*
- **A reviewer declined to add a rule-set flag to a block** because the section BODY did not carry it either —
  *"that is a finding about the SECTION: raise it, do not write around it."*
- **A reviewer recommended AGAINST a change rather than deferring it**, because adding a **negated restatement
  of folklore the caption never asserted** would buy a nuance and **hand the negation-inversion trap a new
  site.**
- **A reviewer caught its own draft copying a claim it was about to report:** *"I would have added a SIXTH
  divergent site to a cluster I was about to report."*
- **A reviewer caught its own repair being a half-rule** — it gave NHL 40.2 and 40.3, **implying ten games is
  the floor**, and found **40.4's *"not less than three (3) games"*** on the self-check.
- **A reviewer avoided a negation trap by construction:** *"if you cannot turn"* inverts to *"and CAN turn, get
  your stick and gloves up on the glass"* — **Case 3 taught to the player who still has Case 2.** It wrote the
  condition **with no negation word at all**.

---

# The method findings, which outlast the defects

## The brief's proposed WORDING was the defect — a first for this project

⚠️ **Every previous recorded brief failure was a wrong PREMISE.** This one was a wrong **patch**.

The coordinator specified a concussion sentence: *"do not go back on the ice — **or onto a bike, a board**,
or any other activity that could put your head into something."* ⚠️ **Two paragraphs above, the document's
own consensus graded return-to-sport progression has LIGHT AEROBIC EXERCISE as its second stage, BEFORE
medical clearance. The specified wording bans a stationary bike and contradicts the document's own protocol.**

The agent rewrote it **criterion-first** — CRT6's *"risk of head contact, a fall or a collision"* stated
before any example, examples chosen to be unambiguously risky (**mountain** bike, skateboard) — and then
**apologised for a contradiction that was the dispatcher's**: *"This is the kind of contradiction only a
whole-file diff catches, and it was mine."*

⚠️ **The rule this produces, now in `CLAUDE.md`: specify the DEFECT and the CONSTRAINT; let the agent that
has read the document write the sentence. Where wording is supplied anyway, say it is a SKETCH to be checked
against the surrounding prose, never a string to paste.** A coordinator writing replacement text is writing
content it has not read the context for — **which is the one thing this method exists to prevent.**

**Three other departures from that brief were also improvements**, and each is worth copying:
- ⚠️ **Prohibition-first framing in a summary layer.** The brief's shape would have opened a Key Takeaway
  with *"not a blanket ban"* — **a listener who disengages after eight words hears *"checking is allowed in
  British women's hockey."*** Reframed on what the rule forbids, each limb *"at least a minor **however
  clearly you were playing the puck**."*
- **A fourth blockquote seam the brief did not specify**, because the paragraph was still 2,008 chars —
  placed so that **the permission and its restriction stay in ONE SENTENCE** and **the preceding chunk ends
  on a prohibition.**
- ⚠️ **A checker overruled the first repair and was right.** *"it is not a two-minute mistake"* tripped
  `check_absolutes.py` as *"denies a tier without naming a book, then grants it."* **Both instances were
  rewritten, though the checker fired on only one.**

## "Unclosable" has now been asserted five times and been wrong five times

⚠️ **The most instructive instance of the round.** A `Never:` value at **199/200**; adding the style guide's
required *"instead"* took it to **205**; **all four owning blocks were at the 8-coaching-fact cap and one at
the 11-fact HARD_MAX**. The measurements were all correct, and the conclusion — *"the fix does not fit"* —
was wrong.

⚠️ **The instruction clause carried THIRTEEN REDUNDANT CHARACTERS: `Skates parallel to the boards`, inside a
sentence that already said *"the wall"*.** Dropping them and adding *"instead"* landed at **193, seven
spare**, sourced reason untouched, **all four safety components intact**, no block split, no anchor moved.

⚠️ **None of the four routes the dispatcher proposed was the one that worked.** The caps limit **count** and
**length** separately, and the answer was neither — **it was to look for redundant words.**

## A hazard-vocabulary read finds what a shape grep cannot

**Shape grep: 4 sites. Vocabulary read of every value: 5 more, two of them critical.** Including a
`Priority:` value that **no `Never:` grep reaches**, carrying **three negations before a verb-less list**;
and *"If you are a goalie under its rules, **ask your league**"*, which inverts to ***"never ask your
league"*** — **the corpus's cardinal rule, reversed.**

## Four ways this corpus's extractions produce a false zero — now five

1. a string split across two source lines · 2. typographic quotes · 3. hyphenation across a line break
(`face- off`) · 4. ⚠️ **a full page banner spliced INSIDE a sentence** · 5. ⚠️ **a page break emitting
TWELVE lines of furniture in THREE groups**, which is how one citation was given wrongly four times.

**And three distinct ways to get a citation address wrong:** reading it off a `sed` range (the text is
verified, the **address** is not) · carrying it in from a brief · ⚠️ **NEW — a `grep -n` on a clause opener
is not automatically an address: USA Hockey reuses boilerplate penalty sentences, and the 604(d) opener
returns 17 hits.**

## A census scoped to a string is 83% wrong, and a sweep would have damaged five documents

**Of six documents a string census placed in a *"lacks the limb entirely"* column, five were fine.** Three
carried the concept **in different words** — ⚠️ **one of them the most complete treatment in the corpus, and
the only file carrying 604(b)** — and three *"governing body"* hits were **a reader's own association** and
**a coaching-site disclaimer**.

⚠️ **The one real hit was worse than permission-shaped:** *"below U13"* **excludes** U13, where Hockey Canada
writes *"U13 **and below**"*. **A U13 player acting on it draws up to a match penalty.** That is the one
condition under which non-negotiable 3 permits **deletion** rather than labelling.

## The prohibition/permission distinction is what makes this class safe to work

**A prohibition read by somebody it does not bind makes them MORE cautious. Only a PERMISSION inverts into a
hazard.** That single test is why nothing was swept, and it should be in every brief of this kind.

---

# Errors the coordinator made, recorded because the briefs are the defect

1. ⚠️ **A FALSE NEGATIVE-EXISTENCE CLAIM, written into three briefs.** The source report made **two separate
   zero-claims over two different term-lists against two different books**; the dispatcher **merged them into
   one list applied to both**. The IIHF book in fact carries **15** `bodycheck`-family hits and
   `eiha_inhouse_2026-27.txt` a `governing body` hit. ⚠️ **The conclusion survived; the zeros did not.**
   **The corpus was protected only because the receiving agent re-derived rather than carried.**
2. ⚠️ **A citation three lines wrong after "I verified it myself".** The verification was real — the text was
   quoted correctly off a `sed` range. **The miscount was of the blank lines.**
3. **Two counts wrong** — *"nine sites in your files"* when it was **thirteen of fourteen**, and ranking
   `'the middle'` first when it was a false positive by construction.
4. **Ranking the wrong zone finding first.** `'the middle'` is drawn at four depths **in a region whose owner
   defines no depth** — the owned axis (width, 44 ft) agrees to the foot in all four. ⚠️ **Not the high-slot
   failure mode, which was 3.14× wrong ACROSS THE AXIS ITS OWNER DEFINES.**

---

# Tools changed this round

**`check_caption_negations.py`** — whole-line `//` stripping (⚠️ **whole-line only: a caption carrying
`https://` loses half its text otherwise**); `IDENT` lookback 1500 → 4000 (**13 of 68 hits reported as
`[?]`**); dash-matching counted from the **sentence** rather than a 70-char window (**16 of 68 — the largest
false-positive family**). ⚠️ **That third change SUPPRESSES hits, which is the dangerous direction, and is
recorded here so the suppression is on the record rather than in the diff.**
**Counts: 391 → 395 blocks · 496 → 582 occurrences.**

**`check_zones.py`** — winding-order canonicalisation (**rotation only, NOT reversal — a mirrored polygon
must keep reporting**); invisible-polygon skip. ⚠️ **The first version of that guard matched only the CSS
form `fill: none` while the renderer emits ATTRIBUTES, so it silently skipped nothing — a false pass in the
exact shape the file exists to prevent.** **52 → 51 zones · 38 → 37 labels · 4 → 3 multi-drawn · 7 → 6
pairs. Every delta is a TOOL change; no diagram figure moved.**

---

# The plan

⚠️ **`OPEN_ITEMS.md` had grown to 15,777 lines while carrying its own completed work** — the condition its
owner named as making it *"too long to be effective."* **27 closed sections, 891 lines, moved verbatim to
[`findings_closed-rows-and-method-audits.md`](findings_closed-rows-and-method-audits.md)**, each leaving a
one-line pointer. **The arithmetic reconciles exactly: 891 moved − 54 pointer lines = 837, and the plan
shrank by 837.**

⚠️ **The distinction that decided what moved:** a section marked ✅ states what **was** found. A section
carrying a **transferable lesson** — a wrong premise a brief will make again, a tool that produces a false
pass, a citation mechanism that defeats `grep` — **stays in the plan even when its work is done**, because
the next agent needs it **before** it acts.

---

# Dimensions

**Agents run: 23.** `safety-reviewer` ×8 · `content-reviewer` ×7 · `facts-reviewer` ×3 ·
`diagram-reviewer` ×3 · `rules-verifier` ×2. ⚠️ **NOT run: `source-verifier`, `site-reviewer`.**

| | | |
|---|---|---|
| **D1** rules accuracy | ✓ | ⚠️ **One brief REFUTED FIVE WAYS — acting on it would have made two correct citations WRONG** (625(a)(4) is a lane/speed test on a defender against a player who *had* the puck, not the non-puck-carrier clause). ⚠️ **And a FALSE NEGATIVE-EXISTENCE CLAIM about the NHL book found and repaired** — *"the IIHF adds a provision the NHL does not"*, where **NHL 24.2 contains it word for word in four extractions.** |
| **D2** exceptions | ✓ | The corner-seal omission (critical). ⚠️ **Three trapezoid values and a rim value opened as UNIVERSALS with their rule-set scope 2–5 facts later.** Shorthanded icing censused at **19 sites across eight documents — exactly one was bare.** |
| **D3** rule-set divergence | ✓ | ⚠️ **IIHF table numbers cited with no edition, in the document whose own body forbids it in bold TWICE — and `TABLE 7` is a REAL TABLE ABOUT SOMETHING ELSE in the current edition.** The 14th-birthday false inverse. **`81.1` vs `81.6` settled as NOT a divergence.** ⚠️ **OPEN: IIHF 56.5 reaches a major plus game misconduct with nobody hurt where NHL 56.5 waits on an injury.** |
| **D4** citation integrity | ✓ | **RUN after `commit-gate` blocked.** 15 URLs fetched. ⚠️ **A claim the corpus had CONSERVATIVELY NARROWED was RESTORED — Beaudoin & Swartz name Morrison (1976) and say every paper they review agrees, so *"fifty years"* was sourced all along.** Four further defects: a figure attached to the wrong simulation run, a definition stated **backwards**, an uncited derivation, and an uncredited analyst. ⚠️ **And a SEVENTH false-zero mechanism — figures that live in an IMAGE.** *(was: NOT RUN. No `source-verifier`.* ⚠️ **Declared, not assumed clear — and three items are queued for it: dating the earliest goalie-pull study, the Ammar quotation moved into a new Key Takeaway, and whether IIHF 11.8 binds a domestic British goaltender.** |
| **D5** provenance | **PARTIAL** | Wu et al. (2007) credited over Green's reprint. ⚠️ **A claim found in NEITHER cited source** (*"extremely good at preventing skull fractures and lacerations"* — zero hits for `fracture`/`lacerat` on both rendered pages). ⚠️ **And a document citing SEVEN rules from two books while its trailer named neither.** |
| **D6** negative existence | ✓ | ⚠️ **A FALSE DISCLOSURE INSIDE THE CORPUS** (`approved by` = 11, not 0), **surviving because the document's own Sources list SKIPPED the rule that answered the question.** ⚠️ **And its mirror: a claim the brief authorised REDUCING turned out to be SOURCEABLE — the falsifier was in the document's own Sources list, already quoted 300 lines above.** **Bias declared: ~28 untested in one file alone.** |
| **D7** cardinal rule | ✓ | *"The value ordering"* stated as fact in Common Mistakes while three other layers hedged it. ⚠️ **Three `Exception —` blocks matched the named symptom and were NOT defects.** |
| **D8** numeric ownership | ✓ | ⚠️ **A MEASURED FINDING LABELLED `Convention:` — and the label was what kept it under cap.** A 22-point spread with no provenance **in the document that OWNS it.** A bare 70% that was **stale-low for the end of its own window.** A 30–35 s band the owner **does not state at all.** |
| **D9** summary layer | ✓ | ⚠️ **THE ROUND'S RICHEST SEAM.** *"Every study for fifty years"*, *"most fixtures"*, *"which is where most adult readers play"*, the verbless boards fragment — **all in Common Mistakes or Key Takeaways, all invisible to a grep for the corrected claim, because each states THE OLD VERSION IN DIFFERENT WORDS.** |
| **D10** key-facts layer | ✓ | **13 ownership pointers repaired, two of which GAINED content.** ⚠️ **46 more sites one layer down, in voiced body prose.** ⚠️ **A block teaching a safety counterweight its own body never stated — so a correction to the body could never reach it.** |
| **D11** reader safety | ✓ | **Seven criticals.** ⚠️ **A floor converted into a ceiling IN TEXT ADDED THE SAME DAY** (*"at least* the first 3 hours"*). ⚠️ **A hazard given TWO PROHIBITIONS AND NO POSITIVE ACTION.** ⚠️ **Every repair is new text; most were reviewed, and the reviews found more.** |
| **D12** read-aloud | ✓ | Three caption inversions (one reversing **Rule 83.6**), nine facts-layer, a *"USA Hockey imposes neither"* that read as **false** standalone, and **a 30-site penalty-ladder stutter whose house form turned out to be CONDITIONAL ON THE FRAME.** |
| **D13** folklore | ✓ | Four unlabelled claims in the corpus's **most disciplined** document. ⚠️ **The census was a PREVALENCE REGEX: *"the unquantified assertion is the harder half and I did not attack it."*** |
| **D14** structure/terminology | ✓ | `check_links` 0 throughout. ⚠️ **A player label put a winger's blade in the goal crease SIXTY-FOUR FEET from where he is drawn.** A heading asserting the misconception its own section corrects. ⚠️ **The document ABOUT forechecking never defined F1/F2/F3 in its facts layer, while three others did.** |
| **D15** rendered site | ✓ | **RUN after `commit-gate` blocked.** Real Chrome over CDP, 20 routes, four viewport×theme cells. **NO CRITICAL.** ⚠️ **My premise on backward-skating was REFUTED — `min-width: 640px` holds full-sheet diagrams at 640 px in a 361 px scroller, so the routes separate on FOUR signals, not amplitude.** **834 facts fences → 834 panels · zero horizontal scroll at 320 px · 5,479 fragment links, 0 broken · zero WCAG AA failures · no theme flash · console empty.** ⚠️ **One MAJOR: a 23×6 table at 32.7 box-heights on a phone, mostly blank, and the speech renderer DROPS it — the site reader is its only reader.** *(was: NOT RUN. No `site-reviewer`.* ⚠️ **Open and specific: whether backward-skating is separable from skate-and-stickhandle at ~4 px per arch on a 390 px viewport; three label-crowding sites; how 15 Key Takeaways render; and nothing checked in dark theme or on a real device.** |

---

# Reviewer → file coverage

⚠️ **`commit-gate` BLOCKED this round on C8 because this record named ~10 of 35 changed documents in prose
and carried NO reviewer→file mapping — which made C4, C6 and C11 unevaluable per file, and made the
"reviewer must not be the author" rule unverifiable by construction.** This table is that mapping.

**Read it as: which agents held this file exclusively at some point in the round.** Where a file shows a
WRITER and a separate REVIEWER, the review requirement is met by construction. ⚠️ **Where it shows only one
agent, that agent's repairs are its own — flagged in the last column.**

| document | agents that held it | second pair of eyes on the new text? |
|---|---|---|
| `technique/body_contact_and_battles.md` | safety-reviewer (604a limb) · content-reviewer (prevalence) · facts-reviewer (provenance + folklore) · safety-reviewer (`Never:` family + stutter) · safety-reviewer (boards census) | ✓ **five holders, three of them reviewing others' text** |
| `off-the-ice/conditioning_and_recovery.md` | rules-verifier (604a census) · safety-reviewer (review) · content-reviewer (CRT6 apply) · **safety-reviewer (final review)** | ✓ **write → review → write → review** |
| `hockey-iq/playing_without_the_puck.md` | rules-verifier (56.1) · safety-reviewer (604a limb) · content-reviewer (prevalence) · safety-reviewer (boards census) | ✓ |
| `positions/defender.md` `positions/winger.md` `positions/goaltender.md` `technique/puck_handling.md` | content-reviewer (self-narration) · safety-reviewer (`Never:` fragments) · facts-reviewer (leverage hedge) · safety-reviewer (family review + stutter) | ✓ |
| `technique/skating.md` `technique/passing_and_receiving.md` `systems/defending_the_rush.md` `systems/defensive_zone_coverage.md` | safety-reviewer (vocabulary read, **reported only**) · safety-reviewer (applied it) · safety-reviewer (reviewed the applied text) | ✓ **three distinct agents, reporter ≠ writer ≠ reviewer** |
| `positions/center.md` `positions/switching_positions.md` `technique/shooting.md` `hockey-iq/time_and_space.md` `systems/offensive_zone_play.md` `systems/zone_entries.md` `systems/special_teams.md` `systems/breakouts.md` | facts-reviewer (ownership pointers) · content-reviewer (body layer) · facts-reviewer (region + bare rule) | ✓ |
| `systems/game_management.md` | content-reviewer (summary layers, **reported only**) · content-reviewer (applied) · content-reviewer (caption divergence + ranking claims) | ✓ |
| `foundation/on_ice_communication.md` `foundation/uk_rules.md` `off-the-ice/how_to_watch_hockey.md` `off-the-ice/practice_and_development.md` `reading-diagrams/reading_ice_hockey_diagrams.md` `hockey-iq/scanning_and_anticipation.md` | content-reviewer (summary layers, **reported only**) · content-reviewer (applied) | ✓ |
| `off-the-ice/team_play_and_culture.md` `getting-started/getting_started.md` `off-the-ice/equipment.md` | rules-verifier (604a census, `team_play` only) · safety-reviewer (vocabulary read, `equipment`/`getting_started`) · content-reviewer (heading rename + attribution) | ✓ |
| `foundation/rink_map_and_glossary.md` `systems/forechecking_systems.md` `off-the-ice/mental_game.md` | content-reviewer (prevalence propagation) · facts-reviewer (`forechecking` only: F1/F2/F3 + stutter) | ⚠️ **`rink_map_and_glossary.md` and `mental_game.md` had ONE holder each — their repairs are unreviewed** |
| `foundation/rules_primer.md` | content-reviewer (prevalence) · safety-reviewer (boards census) | ✓ |
| `hockey-iq/risk_management.md` `hockey-iq/puck_support_and_spacing.md` `systems/faceoffs.md` | safety-reviewer (vocabulary read) · facts-reviewer (`faceoffs` only) | ⚠️ **`risk_management.md` and `puck_support_and_spacing.md` had ONE holder each** |
| `systems/neutral_zone_systems.md` | rules-verifier (604a census) — **no repair made, verdict only** | n/a |
| `site/src/diagrams/*.mjs` | diagram-reviewer ×3 (negations · zones · three-cases) · content-reviewer (caption divergence) | ✓ |

⚠️ **FOUR DOCUMENTS HAD A SINGLE HOLDER AND THEIR REPAIRS ARE UNREVIEWED** —
`rink_map_and_glossary.md`, `mental_game.md`, `risk_management.md`, `puck_support_and_spacing.md`.
**In each case the change was the same corpus-wide prevalence or vocabulary repair applied identically
elsewhere and reviewed there**, which is mitigation and not a substitute. **Named here so the gap is on the
record rather than implied by silence.**

⚠️ **`source-verifier` and `site-reviewer` did not run when this table was written. BOTH HAVE SINCE RUN**, after
`commit-gate` blocked on their absence — **and both found defects the round would otherwise have shipped.**
⚠️ **THE GATE'S BLOCK WAS THE MOST VALUABLE SINGLE EVENT IN THIS ROUND: it produced a restored claim, four
citation defects, a seventh false-zero mechanism, a MAJOR usability finding, and the 21-day safety gap — none
of which any earlier wave had reached.**

# The four measurement artefacts, all mine, all caught before they became findings

⚠️ **Recorded because the pattern matters more than any one of them: I produced four wrong measurements this
round and caught all four, three of them only because the number was absurd or an agent refuted it.**

1. **Key Takeaways of 10,790 words** — Key Takeaways is often the last **headed** section and the Sources
   trailer has **no heading**, so the capture swallowed it. ⚠️ **A measurement that produces an absurd number
   is a broken measurement, not a finding.**
2. **Seven false "incomplete" boards fragments** — the regex stopped at the first full stop.
3. **Twenty-seven** — the regex matched `head up` **case-sensitively**; the corpus writes *"**H**ead up"*.
4. ⚠️ **Thirteen — correct at LINE level, and LINE LEVEL IS THE WRONG UNIT.** The corpus is **block-scoped**:
   the missing components sit in **sibling values**. ⚠️ **The style guide warns a DOCUMENT-level grep cannot
   see a BLOCK. This round establishes the converse — A LINE-LEVEL GREP CANNOT SEE A BLOCK EITHER.**

**And a fifth, in a brief rather than a census:** I asserted 24 `skates parallel` sites had been read and one
was unique. ⚠️ **There are 118 across 18 documents — and of four read, TWO WERE A DIFFERENT SENSE ENTIRELY**
(*"skates parallel and square means uncommitted"* is reading an opponent's stance, not teaching your own).

# What this round could not have found

- **Whether anything is true.** Every tool here is a worklist or a shape checker. **None can check a fact.**
- **A restriction whose section body never mentions it at all.** The omission pass found its critical because
  the body **quoted the Casebook and stopped halfway**. ⚠️ **A section that never mentions the restriction
  would have passed identically to one that has no restriction.**
- **Anything in the documents nobody opened.** Several agents read summary layers hard and bodies thinly, and
  said so.
- **Whether the repairs are right.** ⚠️ **Everything repaired this round is new text. A repair is not
  self-certifying, and the reviewers who wrote these said so themselves.**

---

# The gate round — what running `commit-gate` first actually found

**10 September 2026, evening.** The commit was submitted to `commit-gate` and **BLOCKED**. Everything below
was found *after* the round believed it was finished, by the gate and by the four reviewers it demanded.
⚠️ **The record above closes with *"whether the repairs are right"* as an unanswered question. This section is
what answering it cost.**

## The critical the round did not find

```
FINDING   content/off-the-ice/mental_game.md relayed USA Hockey's Introduction To Body
          Contact as adding "an age-group progression that only introduces body checking
          at 12-and-Under."
BOOK      usah.txt:3555 — Rule 604(a), 2025-29 Official Rules of Ice Hockey: "Body checking
          is PROHIBITED in the 12 & under youth age classifications and below."
HAZARD    A 12U player, parent or coach is told the governing body's own curriculum starts
          checking at their level. Acting on it: minor (604(c)), major plus game misconduct
          where the check recklessly endangers (604(d)), match penalty above that (604(e)),
          and Rule 604 is on the aggressive-infraction list carrying progressive suspensions.
STATE     PRE-EXISTING AND LIVE. Not in the staged diff. It had survived every round to date.
```

⚠️ **The manual is quoted ACCURATELY. It is the BOOK IT DESCRIBES that moved.** `ibc.txt` carries exactly
one four-digit year — `2007`, in *"(USA Hockey 2007-09 Official Rules of Ice Hockey)"* at `:152` — and no
publication date, copyright line or edition marker anywhere. **This is a class no checker in this repository
can see**: `check_links`, `check_facts`, `check_absolutes` and `check_disclosures` all passed the document,
because the quotation was faithful and the citation correct. **The tell is the SOURCE'S DATE, and
`sources/README.md` does not carry dates.** Recorded as an open row; the same manual is the authority behind
two further claims in `body_contact_and_battles.md` that nobody has re-tested.

⚠️ **It sat in a section headed *"Working on physical fear: graded exposure"*.** A prior safety pass over the
same file came back clean and was right to — it was searching for retaliation, intimidation and
playing-through-injury. **A heading that does not advertise a hazard hides it from a scoped pass.**

## The defect the commit would have introduced by itself

Two lines, both NEW in the staged diff, disagreeing about the same rule:

- body — *"turns on which category your league runs in rather than on your age **alone**"*
- Key Takeaway 4 — *"turns on the category your league runs in rather than on your age"*

Dropping *alone* turns a true statement into one that dismisses age entirely — and age is exactly what the
books turn on at the bottom (USA Hockey 12U, Hockey Canada U13, IHUK's U12/U14 junior line). **Key Takeaways
is voiced standalone with a 300 ms break either side.** ⚠️ **This is the shape `CLAUDE.md` names: two
individually defensible sentences, contradictory read aloud.** It was invisible to every checker.

**The repair did not restore the missing word.** Both sites now carry a **byte-identical 168-character core
clause**, verified character-for-character in the source, in the rendered SSML, and in the built HTML. **Two
sentences that must agree cannot be kept in agreement by discipline; they can be kept in agreement by being
the same bytes.**

⚠️ **AND THE MECHANISM THAT PROTECTS THE LISTENER IS NOT THE ONE THE REPAIRING AGENT NAMED.** It reported the
⚠️ marker hoisting to *"Important."* before the age is spoken — true, but ~1,200 characters earlier, at the
head of a 2,229-character paragraph. **What actually works is that the 12U claim and its 604(a) correction
are ONE SENTENCE**, so no sentence-boundary split can separate them. A future editor may move the marker; it
may not split that sentence.

## Citations: the verifier was the author, and an independent pass changed the verdict's basis

`rules-verifier` re-derived all five citations in the new breakaway `Rule:` line from primary text and
**confirmed the staged wording**, establishing in terms what the superseded version got wrong:

> **IIHF 57.4** — *"MAJOR PENALTY AND GAME MISCONDUCT PENALTY … recklessly endangers their opponent by a
> 'tripping'"* (`iihf_rules_v1.1.txt:4852`)

⚠️ **The two books' Rule 57 sub-numbering collides head-on for two consecutive clauses.** The superseded
*"(57.4, 25.1)"* would have handed a British listener **an ejection rule labelled as a scoring rule.**

Rated **confirmed-but-incomplete**: IIHF 24.8 criterion (II) carries *"except a foul committed from the front
by the goalkeeper on a 'breakaway' situation"*, which the NHL lacks — **so the IIHF penalty shot is WIDER**,
and *"the IIHF writes it at 24.8"* reads as identical. Open row; the direction is understatement.

## Three defects in the round's own instructions, all found by the agents receiving them

1. ⚠️ **A REVIEWER'S REPORT IS A BRIEF TOO.** A `site-reviewer` reported two strings as index-vs-dist; **they
   were the wrong way round**, and the coordinator relayed them verbatim into the next brief as the strings to
   adjudicate. The second reviewer refuted it: *"the expectation in the brief would have failed the page for
   rendering the correct text."* **A reviewer's report is the one input that arrives already looking like
   verified evidence — file names, quoted strings, line numbers — which is exactly what makes relaying it
   unexamined dangerous.**
2. ⚠️ **A FABRICATED FIGURE IN A REPAIR BRIEF.** The coordinator called the manual *"fifteen years old"*. That
   number came from nowhere. **The repairing agent refused to write it**, reporting the manual carries no
   publication year at all, and dated it by the rulebook it quotes instead. **A year count invented by a
   dispatcher is a fabricated figure however small the error.**
3. ⚠️ **`.claude/agents/rules-verifier.md` LISTED 26 SOURCES AGAINST 36 ON DISK — AND THE ROUND CAUSED IT.**
   The four IHUK Rules of Competition installed by this very round were never added to the table, so a
   verifier asked *"does a British book depart?"* was answering **having never been told four British
   competition regulations existed.** It diffed the table against `ls` and reported its own instructions as a
   defect. **Second time an agent here has had to.** The prior occurrence is recorded in that same file.

**All three cost nothing, because in all three cases the receiving agent re-derived.** ⚠️ **That is not a
safety margin. It is the same margin twice in two rounds, and it is the agents' margin, not the method's.**

## The gate's own finding, which no reviewer could have made

⚠️ **The gate refuted the coordinator's C10 argument.** The position was: the reviewed build's content pages
are unaffected by unstaged `site/` work, so C10 is satisfied. **The gate agreed with the premise and rejected
the conclusion** — the content half was fine, but *the tree the commit creates* had never been built at all,
because the build had included 13 unstaged `site/` inputs the commit does not ship. **The earlier blocks were
index-vs-tree in `content/`; this was tree-vs-commit in `site/`. Same class, new form.**

Answered by reconstructing the index in a detached worktree (`git apply --index` onto HEAD) and building
*that* — which also left the main `dist` intact for a reviewer reading it concurrently.

## A repair introduced a visible defect, and only the browser saw it

The 12U repair's new Sources-trailer note used emphasis delimiters that **CommonMark cannot open**, because
the roman spans were not space-separated: `Contact*.` is right-flanking only. **Four literal asterisks
rendered on the page**, and two-thirds of the note silently lost its italics. `check_links`, `check_facts`,
`check_absolutes` and `check_pointers` all passed it. **The note is hoisted out of the collapsed `<details>`
into an always-visible callout, so every reader of that page would have seen it.**

⚠️ **Fixed by the COORDINATOR, which makes it new text reviewed by nobody** — mitigated only by being a
whitespace-and-punctuation change with the word sequence proved byte-identical at 123 words, and verified as
zero stray asterisks in the rebuilt page. ⚠️ **The gate could NOT verify that byte-identical claim** — the
broken intermediate never entered git, so it is unfalsifiable from outside — **and re-derived every
proposition in the note from primary text instead, which is the stronger evidence.** Note what that means: a
coordinator's self-report on its own edit was correctly treated as worthless.

## The exception recurred inside the same commit, and the second one cost something

The paragraph above once ended *"recorded as an exception, not a precedent."* ⚠️ **That was falsified by this
same diff.** The gate's next pass found the Sources trailer quoting *"Body Play Pyramid"* — **a paraphrase
wearing quotation marks**, where the manual's section is *"Body Play – Pyramid to Success"*. The coordinator
made **a second unreviewed content edit** to the same safety document to correct it.

⚠️ **AND ITS FIRST ATTEMPT PUT A TABLE-OF-CONTENTS LINE INTO A SAFETY DOCUMENT.** The fix lifted the heading
out of `ibc.txt` programmatically and stripped the dot leaders with `\.{2,}` — but the manual's leaders are
**space-separated dots** (`. . . .`), so the pattern did not match, and the corpus briefly carried the full
TOC entry, leaders and the page number `7` included. Caught by the edit's own verification step, cleaned, and
the built page is now checked explicitly for the artefact.

⚠️ **AND THE PROVENANCE GIVEN FOR THE FIX WAS WRONG, WHICH IS THE PART WORTH KEEPING.** The coordinator
reported the dashed heading *"verified verbatim in the BODY at line 66, not only in the contents list"*. It is
not there. `ibc.txt:65-66` is a **wrapped** sentence — `(See the "Body Play` / `Pyramid to Success" to view
the four levels…)` — carrying **no dash at all**. The dashed form exists in exactly two places: `:17`, the
contents entry whose leaders had just been pasted, and `:216`, the section heading in capitals
(`BODY PLAY – PYRAMID TO SUCCESS`). **The corpus text is correct — it names a real section — but it was
right for a reason that was not true.**

⚠️ **This is false-zero mechanism #1 from the table at the top of this record — a string split across two
source lines — RUNNING IN REVERSE.** That mechanism is documented here as hiding a match that exists. It also
MANUFACTURES a match that does not: a `grep` for `Pyramid to Success` reports line 66, and the words before
it are on line 65 where the reader never looks. **Every one of the eight mechanisms in that table should be
re-read as bidirectional. This record had the answer at the top of it and the coordinator still walked into
it from the other side.**

**The gate declined to block on either coordinator edit**, having re-derived every claim in the note from
primary text — 604(a) at `usah.txt:3555`, the `(USA Hockey 2007-09 Official Rules of Ice Hockey)` attribution
at `ibc.txt:152`, the pyramid heading at `:216` and `:17` — and confirmed the built page renders correctly
with the dot-leader artefact absent. ⚠️ **Its judgement, recorded verbatim because it is the operative rule
going forward:** *"the second edit is where the pattern started to cost something. Its first attempt put a
TOC line into a safety document, and its justification was wrong. **A third goes to an agent.**"*

## What this gate round could not have found

The reviews here were **scoped to the staged diff and to two pages**. Nothing in this section says anything
about the other 34 content files beyond what the record above already claims. The `site-reviewer` passes ran
in **headless Chrome, not the extension's Chrome** — which refused loopback URLs four separate times across
this round — so font rasterisation, real devices, real screen readers and the production CloudFront rewrite
are all untested. **The audio episodes are not in `dist`**, so no reviewer has heard one. And the standing
one, in the site-reviewer's own words: ⚠️ ***"that the 604(a) sentence renders perfectly says nothing whatever
about whether Rule 604(a) says what the document says it says."***
