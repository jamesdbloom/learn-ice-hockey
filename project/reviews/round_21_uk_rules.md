# Round 21 — the UK and England rule set

**Date:** 29 July 2026
**Scope:** commits `198267b..HEAD` — everything in the fifth-rule-set change.
36 documents, 899 insertions, 415 of them mentioning EIH/England/UK/EIHL/NIHL.
**Trigger:** the change was **committed without a review record**, in breach of
the commit gate. This round is that gate, run late.

---

## Method

Seven agents, none reviewing its own author's work. The first four ran in
parallel; the last three were added **because `commit-gate` blocked the
commit** for leaving ten of fifteen dimensions silent.

| Agent | Scope | Dimensions |
|---|---|---|
| `rules-verifier` | `foundation/uk_rules.md` — the anchor document, alone | D1–D3 |
| `rules-verifier` | the seven rules-heavy documents | D1–D3 |
| `rules-verifier` | the remaining 22 documents | D1–D3 |
| `safety-reviewer` | the eight safety-bearing documents, plus a sweep of all 764 facts blocks | D11 |
| `content-reviewer` | cardinal rule, summary layer, numeric ownership, negative existence claims, folklore, house style | D6–D9, D12–D14 |
| `facts-reviewer` | the ` ```facts ` layer as a layer | D10 |
| `site-reviewer` | the rendered pages in real Chrome | D15 |
| `commit-gate` | the staged diff against C1–C10 | — |

**D4 (citation integrity) and D5 (provenance) — covered late, and only because
`commit-gate` caught the gap.** No external URL is added or changed by this
diff, which is what "out of scope" was originally claimed on. That reasoning
was wrong: the diff introduced a **new source document**, England Ice Hockey's
*Rules & Regulations*, and quoted it in five documents whose Sources blocks
listed only the In-House Rules. `rules_primer.md`'s Sources line further
asserted the In-House Rules were *"the source for every England Ice Hockey
statement above"*, which its own new trapezoid cell falsified. All five fixed.

**A note on the numbering.** The first version of this record misnumbered five
dimensions — it called the facts layer D12, assigned folklore to
`source-verifier`, and declared D15 out of scope in a record containing a full
site-reviewer section. `review_history.md` is reconstructed from these records,
so the numbers have to match
[the table](../review_process.md#the-dimensions--a-review-must-cover-all-of-these).

Every agent was required to grep primary text on disk and quote the wording it
found: In-House Rules 2025-26 Rev 1, EIH *Rules & Regulations* 2024-25, IIHF
Official Rule Book 2025/26 v1.0, NHL, USA Hockey, Hockey Canada.

**Findings were not taken on trust.** Every critical and every major acted on
below was re-verified against the primary text before any file was edited. One
agent claim was **rejected** on that basis — see "Corrections to the reports".

---

## Criticals — five found, five fixed

**C1 · The half-visor minimum omitted BUIHA, which is English university hockey.**
`uk_rules.md` named only SIHA Recreational and SIHA University, while its own
league table tells English university readers that BUIHA is their league. The
In-House Rules carry a separate clause — *"all players in BUIHA games are
required to wear a half visor as a minimum"* — under *Rules Applying
Specifically to BUIHA Games in England and Scotland*. A reader followed the
document to the wrong conclusion about their own face. Ladder: instructed off
the ice, then a minor for illegal equipment, then escalating misconducts.

**C2 · A British adult was told neck protection was optional.**
`switching_positions.md` carried USA Hockey 304(g)'s *"all age classifications
except Adults"* with no British counterpoint — in a file whose header now says
*"Playing in Britain? The IIHF flags are yours"*, in a section containing no
IIHF flags. In Britain it is mandatory at every age, no warning, immediate
10-minute misconduct, and under R&R 24.3 it extends to *"all on ice
activities"* — practices included. Fixed in the facts layer and at the head of
the body bullet, not by cross-link.

**C3 · "Ride them into the boards" taught with no women's-hockey caveat.**
`defending_the_rush.md` §1-on-1, body and facts. IIHF Rule 101.1: players
competing for possession are *"not allowed to use the boards to make contact
with an opponent to eliminate her from the play, push her into the boards, or
pin her along the boards."* Minor, or major plus automatic game misconduct —
and in British women's hockey below adult a major adds a further ejection.
`defender.md` and `winger.md` already carried the correct fact verbatim; it
stopped before reaching the document that gives the instruction. **Same shape
as the round-10 criticals.**

**C4 · Three of four blocks in `body_contact_and_battles.md` §5 taught checking
with no legality restriction.** The restriction lived in the section blockquote
and the first block only. Each `###` is its own extraction unit on the site and
in the audio, so a listener received a complete how-to-hit with no statement
that hitting may be illegal where they play. Added as a `Rule:` fact — exempt
from the coaching-fact cap, so it cannot evict anything — at the head of each
block.

**C5 · The trapezoid said four different things across six places.**
`rink_map_and_glossary.md` contradicted **itself** three ways: *"which England
Ice Hockey does not currently enforce"* (:114), *"live at every level of British
hockey"* (:257), and *"unsettled rather than resolved either way"* (:263).
`rules_primer.md`, `goaltender.md`, `zone_entries.md` and `breakouts.md` each
asserted a resolved position. Only `:263` and `uk_rules.md` were right. The
hedge is now propagated to all six, with EIH R&R 22.3 quoted and the
2024-25/2025-26 edition gap disclosed.

---

## Majors fixed

- **The IIHF's five-shooter shootout was carried into Britain.** `shooting.md`
  said *"Under the IIHF — and so in Britain"*. IIHF 84.4(II) is scoped to
  Championship play; every British competition that holds a shootout uses
  **three** (In-House Rules, NIHL National / NIHL 1 & 2 / SNL). On repeat
  shooters the competitions diverge — NIHL National and the SNL allow them,
  NIHL 1 & 2 require every eligible player to shoot first — and the corpus
  states all three rather than generalising. Also corrected: the coin toss
  decides who *chooses*, not who shoots first.
- **A major below adult is an automatic ejection.** Stated for women's hockey
  only, implying the opposite for juniors. In-House **Rule 101** states the
  cross-reference to IIHF 201.1 explicitly for women's hockey; **Rule 201**
  scopes the IIHF junior playing rules to *"all junior age groups"* **without**
  naming 201.1. The corpus now carries the women's case as a sourced `Rule:`
  and the junior case as a `Key:` labelled as its own reading — in the body,
  Common Mistakes, Key Takeaways and both facts blocks.
- **Bench staffing was stated as universal.** Three carve-outs remove it
  entirely: adult recreational in England, BUIHA, and a different SIHA ladder.
  The rule's own scoping line had been dropped. The medic recommendation —
  *"strongly recommended"* — had been reduced to a sentence reading as dismissal.
- **"There is no video review" as a standalone heading.** True on the ice, false
  after the game: In-House Rule 28 opens supplementary discipline through *"the
  defined video review process."* Heading now says "on-ice", and the
  post-game position is stated.
- **The Coach's Challenge is abolished and the corpus never said so.**
  In-House Rule 38, quoted. Directly coach-actionable.
- **Face cages are mandatory in all junior hockey** (R&R 24.5) — absent from the
  document credited with owning British equipment rules.
- **Body checking was absent from the anchor document entirely.** The corpus's
  most safety-consequential question had no entry in the document named "UK and
  England Rules". Now in "What this document does not cover", with the reason
  the answer cannot be given: neither British book sets a checking age, and the
  North American lines do not transfer.
- **`rink_map:76` had the width comparison backwards** — "26 m … narrower than
  an NHL rink is wide". 26 m is 85.30 ft against the NHL's 85 ft, so it is
  fractionally **wider**, and the page's own table said so. The length half of
  the argument survives.
- **17 header blockquotes were spliced mid-sentence.** The UK sentence was
  inserted between subject and verb, so every one of those pages opened with a
  broken sentence — including `conditioning_and_recovery.md`, where it separated
  a body-checking safety statement from its own subject. `check_links.py` and
  `check_facts.py` both passed throughout; neither can see it.

---

## The second wave — what the blocked commit bought

`commit-gate` returned **BLOCK**. Every one of its grounds was sound, and the
three agents it forced found more than the first four had left.

**Three defects were introduced by the fixes themselves.** This is the finding
worth keeping:

1. **A false rule, created while correcting another.** The shootout fix stated
   that "NIHL reverses the no-repeat rule" immediately after naming NIHL
   National, 1 and 2. The tiers go **opposite ways** — National allows repeat
   shooters, NIHL 1 & 2 require every eligible player to shoot first. Coach-
   actionable in the wrong direction: sending your best shooter twice in NIHL 1
   is an ineligible attempt. `game_management.md` had it right all along.
2. **Two bodies corrected, their facts blocks left contradicting them** —
   `zone_entries.md` and `goaltender.md` on the trapezoid. The facts layer is
   what the site surfaces and the speech pipeline reads aloud, so the listener
   would have received the pre-fix claim. Caught by `commit-gate`, not by me.
3. **A sentence that attributed a British threshold to the IIHF.** The width
   correction ended "it is the length that comes up short (56 m against the
   NHL's 200 ft)" — but 56 m is the British sub-standard floor, not an IIHF
   dimension. Caught by `content-reviewer`.

**And a cap violation:** propagating the junior-ejection rule pushed the
fighting block in `body_contact_and_battles.md` to 12 facts, over the hard
maximum of 11. Resolved by merging the two facts that share a source, not by
dropping a safety fact.

Further criticals found in the second wave:

- **`equipment.md` Key Takeaways steered against the corpus's own position.**
  Takeaway 9 told the reader equipment rules "change by rule set — check
  yours", with no British entry anywhere in the ten takeaways, in the document
  whose header says the British amendments *"bite hardest on equipment"*. A
  listener who hears only the takeaways is told the neck-guard requirement
  varies. It does not. Body and Common Mistakes had it; the layer the podcast
  extracts did not.
- **Three facts blocks in `body_contact_and_battles.md` were missing the
  junior-ejection consequence**, including the section written specifically to
  tell a British reader what differs.
- **`goaltender.md`'s body still said "the trapezoid is yours, at every
  level"** while its own facts block and Key Takeaway had been hedged — the
  same defect as (2), in the opposite direction, inside one document.

## The rendered site (D15)

`site-reviewer` drove real Chrome over the DevTools Protocol — the extension
was unavailable, so the measurements below are Blink layout, not estimates.
39 pages built; six pages × two widths × two themes, plus a 320px reflow pass.

**The reported defect is fixed, and it was measured rather than asserted.** With
the old `max-width: var(--measure)` re-applied at runtime on `rules_primer.md`
at 1440px, the paragraph above the five-way table ended at x=1094 while the
table ended at x=1136 — the 42px dead strip. With the rule removed both end at
1136. The page now has one right edge.

**One defect was introduced by the table fix.** Setting `min-width: 7rem` on
cells to make them wrap means a six-column table needs 842px in a 790px column
— unsatisfiable at every viewport. macOS overlay scrollbars gave no indication:
the England column rendered as *"Typical rec / beer le"* and stopped at the
border, on a desktop, in both themes. The ARIA half was already correct
(`role="region"`, `tabindex="0"`, an `aria-label`), so keyboard and screen-reader
users were told; sighted mouse users were not. Fixed with a CSS-only scroll
shadow — two background layers pinned with `background-attachment: local` and
`scroll`, no JS and no scroll listener.

**A pre-existing accessibility failure was found and fixed.** `--text-faint`
was `#7a7f87`, which is **3.89:1** on the light background — under the 4.5:1
WCAG AA floor, and it is what the footer is set in on every page. Now `#686d75`
at 5.03:1. Not caused by this diff; found because someone finally looked.

**A finding worth keeping about the measure itself.** `--measure: 70ch`
computes to 750px at this font size, which held about **95** characters, not 70.
Removing it moved prose from ~95 to ~101 characters per line. So the cap was
never delivering what its name claims, and the change made an already-long
measure about 6% longer rather than creating the problem. If a genuinely
comfortable measure is wanted, the variable is wrong and would need to be
roughly `48ch`–`52ch`. **Not changed in this round** — it is a deliberate
typographic decision, not a defect fix.

Everything else passed with evidence: no horizontal body scroll at 320, 390 or
1440; facts blocks render as `dl.facts` grids (44 and 37 on the two documents
checked, zero raw code blocks); the ⚠️ safety callout carries weight through
glyph, border and bold lead rather than colour alone; theme toggle persists
across navigation with no flash; focus rings visible on real Tab presses; all
other contrast pairs pass AA; zero console errors across 24 page loads; no
off-origin requests.

## Claims rejected on re-verification

Two agent findings were **wrong** and were not acted on. Recording them because
a review record that only lists confirmed findings overstates its own reliability.

- **`facts-reviewer` called `body_contact_and_battles.md:394` an invented
  citation** — a fact citing IIHF Rule 42.1 for boarding a player on an obvious
  icing. The agent reasoned that the document uses 42.1 for *charging*. But
  IIHF 42.1 does contain the clause, verbatim: *"Any unnecessary contact with a
  Player playing the puck on an obvious 'icing' or 'off-side' play which results
  in that Player hitting or impacting the boards is 'boarding' and must be
  penalized as such."* The agent had **no rulebooks on disk** and said so; it
  could only check internal consistency. The citation is correct and stands.
- **The claim that the header sweep deleted content** — see below.

The lesson is the one the corpus already knows: an agent report is evidence,
not a verdict. Every finding acted on above was re-grepped in primary text
first.

## Corrections to the reports

**One agent claim was rejected.** The report on the remaining 22 documents
stated that the header sweep had *deleted* substantive content — a sentence from
`skating.md` and the whole rule index from `puck_support_and_spacing.md`. It had
not. Removing the inserted sentence restored **17 of 17** headers to their
`198267b` text exactly, byte for byte; nothing was lost. The defect was
interruption, not truncation, and the repair was correspondingly narrower.

The two rules agents also disagreed on the count — 13 against 17. The direct
check found 17.

**A checker gap surfaced during the fixes.** `check_facts.py`'s `CITES_RE`
predated the fifth rule set and recognised no England Ice Hockey citation form,
so an EIH-only `Rule:` fact had to name a second book it was not quoting in
order to pass — the opposite of what the check exists to enforce. It now accepts
`England Ice Hockey`, `In-House Rule(s)` and `EIH`, and the plural `Rules 9.12`
the In-House Rules use for themselves.

---

## The third gate run

`commit-gate` blocked a second time, on the resubmission, and was right again.

- **The junior-ejection hedge contradicted itself inside one paragraph.** The
  fix added *"this is the corpus's interpretation, not the rule's own words"*
  and left the original flat sentence — *"it is the In-House Rules that extend
  it down the whole junior ladder"* — trailing forty words later, in the same
  added line. The hedge had also not reached Key Takeaway 8 or the two facts,
  which cited *"(In-House Rules, Rules 101 and 201, applying IIHF Rule 201.1)"*
  as though the books said it. Now split at the source: the **women's** rule is
  a `Rule:` fact because In-House Rule 101 states the cross-reference
  explicitly; the **junior** extension is a `Key:` fact because Rule 201 does
  not.
- **Five documents quoted a source their Sources block did not list** — see
  D4/D5 above.
- **The dimension numbering** — see the note above.

It blocked a **third** time, and found:

- **The junior hedge still missing from two places** — `uk_rules.md`'s Common
  Mistakes bullet, and the fighting-section body in
  `body_contact_and_battles.md` eleven lines below a facts block this diff had
  just rewritten. The diff did not touch that line; it *created* the
  contradiction by hedging the block above it.
- **Two Sources lines corrupted by a mid-sentence insertion.** Repairing the
  missing citations was scripted, and the regex stopped at the `*` of `**no**`,
  splicing the new citation into the middle of *"the In-House Rules make **no**
  amendment to IIHF Rule 81 (Icing) or Rule 83 (Off-side)"* in both
  `breakouts.md` and `zone_entries.md`. **That destroyed a verification
  statement** — the on-record claim about what had been checked — and it is the
  identical failure mode this same record logs as a major, recurring inside the
  fix for the previous block. Both checkers passed over it.
- **"Eleven separate IIHF rules"** was introduced by this diff and is
  unsupported. The exact sentence appears **nine** times, with a tenth
  provision at 78.6 in different words; eleven is reachable only by counting
  In-House Rules 37 and 38, which are not IIHF rules. Replaced with the
  verifiable count.

A **fourth** run found three more, and the pattern held exactly:

- **The replacement video-review sentence misattributed provisions.** Fixing
  the unverifiable count introduced an unverified attribution in the same
  sentence: it credited Rule 30 (Appointment of Officials), whose entire text
  is *"All officials are appointed by the IHUK Referee Section."* The nine
  provisions are now enumerated individually.
- **`goaltender.md`'s Known Gaps still drew the inference this round classified
  as critical C5** — "the In-House Rules are silent, so every other IIHF rule
  applies unamended". The trapezoid is the standing counter-example: a *second*
  British document amends it. The hedge had reached the body, the facts block
  and the takeaway, and stopped one paragraph short, in the section a careful
  reader consults specifically to find out what has not been checked.
- **This record asserted as unfixed two defects the same commit fixed**, and
  quoted stale counts.

A **fifth** run found the worst one of the lot. The `Rule:` fact added to all
three §5 blocks — the fix for critical C4 — asserted that *"USA Hockey 604(a),
Hockey Canada 7.3 and IIHF women's 101.1 all prohibit"* body checking. The two
North American citations are right. **IIHF 101.1 says the opposite:** *"In
Women's Hockey 'bodychecking' is allowed when there is a clear intention of
playing the puck or attempting to 'gain possession'."* It restricts the illegal
hit; it does not make women's hockey non-contact. The same document states this
correctly in four other places, all of which the new fact contradicted — and it
went into the layer that is read aloud with no surrounding text, three times.
The fact now names the non-check *categories* instead of misattributing a
prohibition. The same run also caught a quotation attributed to Rule 28 that
belongs to an unnumbered Supplementary Discipline section ten pages later.

Six gate runs, five sets of real findings, and **every** finding after the
first was caused by a fix for the one before it. Two were scripted edits a
human eye would have caught and a passing checker did not; two were hedges that
reached three layers and stopped at the fourth. That is the case for running
the gate on the *staged diff* every time, not once — and for treating "I fixed
the thing you found" as the beginning of the next audit rather than the end of
the last one.

## Carried forward — not fixed in this round

Logged deliberately rather than silently dropped:

- **Edition mismatch, undisclosed.** The In-House Rules adopt IIHF Rule Book
  **v1.1 (July 2025)**; every IIHF claim in this corpus is verified against
  **v1.0 (May 2025)**, which is what is on disk. Two agents raised this
  independently. v1.1 has not been obtained. **CLOSED in round 23 (30 July 2026): v1.1 was obtained and compared — 472 rule numbers identical in both, and all 49 corpus quotations from the IIHF book present verbatim. Nothing here rested on a superseded revision.** **Every IIHF quotation in the
  corpus rests on a revision England did not adopt** — this is the largest
  known hole and should be closed before the next round.
- **The fighting amendment is a subtraction, not an addition.** IIHF Table 6
  makes a 46.1 fighting major an automatic game misconduct; the In-House Rules
  set a bare 5-minute major for NIHL/SNL/BUIHA Varsity and re-add the ejection
  only in the last five minutes. `rules_primer.md` presents it as England
  pinning a number to the IIHF rule. Ejection-relevant in both directions.
- **`rules_primer:113`** states the NIHL overtime exception one case short — the
  semi-finals are also 20-minute 5-on-5. `game_management.md` and
  `special_teams.md` have it right.
- **Fighting outside the three named league groups** falls back to IIHF 46.1's
  *"very wide latitude"* and possible ejection. `uk_rules.md` gives the NIHL
  number without that fallback.
- **`faceoffs.md`** cuts the IIHF 76.4 quote before its consequence, with no
  ellipsis, and Key Takeaway 3 has no IIHF entry in a document whose premise is
  that the IIHF flag is the British reader's.
- **EIHL sourcing.** Asserted at `rules_primer:30` and `rink_map:41` with no
  primary support. `uk_rules.md:157` discloses the weakness; the other two do
  not. **Do not delete the claim** — label it.
- **IHUK's IIHF recognition and GB national-team role** — unsupported on disk,
  not contradicted. Label.
- **Rink-frequency claims** ("most British rinks are not 60×30") — the sources
  establish that sub-standard rinks are *authorised*, never how many exist.
- Minor citation slips in `getting_started.md` (12.1 for 10.1; 23.16 presented
  as whole-rulebook precedence); the 27.7 skate-contact carve-out omitted in
  two documents.
- **The neck-guard warning is a second unresolved British divergence, and only
  `uk_rules.md` now says so.** In-House 9.12 says *"No warning will be given."*
  EIH *Rules & Regulations* **24.6**, three clauses below the 24.5 this round
  quotes, sets out a warning scheme over 24.3–24.5. Found by `commit-gate` on
  the sixth run, in the rule adjacent to two the diff already quoted. The
  anchor document now discloses it; the eleven other places that carry the flat
  "no warning" claim — in `equipment.md`, `getting_started.md`, `goaltender.md`
  and `switching_positions.md` — do not. Every one is correctly attributed to
  the In-House Rules, so nothing is false, and the conservative reading is the
  one taught. **Propagate or explicitly decide not to.**
- **`defending_the_rush.md`'s angling block** (§"Angling") still says *"the
  boards are your second defender"* with no non-check caveat, eleven lines
  above the 1-on-1 block that now has one. Steering is not pinning, so the
  asymmetry is defensible — but the two adjacent extraction units now read
  differently on the same idea, and the fix to one made that conspicuous.
- **Key Takeaways over the 5–10 cap.** This round takes `uk_rules.md` to 12 and
  `equipment.md` to 11. Four other documents already exceed it, so the rule is
  evidently loose in practice — but it is a style-guide rule and this round
  made it looser.
- **`--measure: 70ch` delivers ~95 characters, not 70.** A typographic
  decision, not a defect; recorded so the next person does not rediscover it.
- **The scratchpad convention was not followed.** The extracted rulebooks live
  in `/private/tmp/*.txt`, where CLAUDE.md's security section says fetched
  sources belong in the session scratchpad. Harmless here, but the reason for
  the rule — world-readable, clobbered by concurrent agents — applies.

---

## Mechanical checks

Counts are from the staged tree at the point the gate cleared, not from an
earlier run — an earlier draft of this record quoted stale figures and the gate
caught it.

```
check_links.py    PASS
check_facts.py    26 documents · 764 blocks · 4,408 facts · PASS
check_secrets.py  136 tracked files · no findings
npm run build     39 pages · 6,412 internal links · post-build check clean
```

All 17 headers verified repaired by direct string check.

---

## What this round could not have found

- **Anything in IIHF Rule Book v1.1**, which is the revision England actually
  adopted. Every rules verification above reads v1.0.
- **The competition-regulations layer**, which is where the British body-checking
  answer actually lives. Neither document on disk contains it. Every finding
  about British checking above is a finding about *disclosure*, not about what
  is in fact legal for a U14 in Sheffield.
- **The EIHL Casebook**, and any Rule Bulletin or In-House revision issued since
  27 October 2025. The In-House Rules explicitly anticipate both.
- **Whether the R&R 22.3 trapezoid suspension still stands.** The published
  documents do not settle it; that is why the corpus now says so.
- **What the audio actually renders.** `site-reviewer` covered the pages; the
  speech transform is a separate pipeline and was not run. Several findings
  above turn on how a sentence sounds standalone, and that was judged by
  reading, not by listening.
- **The twenty header-only documents, read as a British reader.** Every one now
  says *"the IIHF flags are yours"*, which makes every pre-existing bare IIHF
  claim in them newly load-bearing for a UK reader who previously had no reason
  to read it. Their bodies were not re-read. `content-reviewer` names this as
  the obvious next round.
- **A systematic sweep for over-claimed scope.** Four places were found where an
  EIH/SIHA/BUIHA-scoped rule was generalised to "Britain, every level" — found
  by following the neck protector and the Elite League, not by enumeration. A
  grep for *"in Britain"*, *"at every level"* and *"every level of British
  hockey"*, checked against the scope line in each source, would likely find
  more.
- **The IIHF Situation Handbook.** `goaltender.md` now rests three behavioural
  instructions on it (Situations 27.7, 81.5, 69.3). None was verified.
- **Pedagogical correctness.** The agents checked the corpus against the books.
  Whether the added UK material teaches a beginner well is a different question.
- **A legal technique executed badly is still dangerous**, and no rulebook grep
  says so. "Ride them into the boards" is legal in a men's checking league and
  is still how spines get hurt.
