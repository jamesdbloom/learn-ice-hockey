# Round 44 — the cross-document summary-versus-summary diff

**26 August 2026.** Reviewer: `content-reviewer`, briefed to find only the class round 43
structurally could not see. Scope: the summary layer of **all 37 documents** — 539 Common
Mistakes lines, 450 Key Takeaways lines, 4,605 facts lines across 773 blocks, 85,820 words in
74 sections.

Round 43 read each document's summary layer against **its own body**. Its closing section names
what that cannot reach: *"A claim stated one way in `defender.md`'s takeaway and the opposite way
in `center.md`'s, **where both match their own bodies**, is invisible to this pass."* This round
looked only for that: two documents disagreeing, each locally consistent.

**Every rule claim below was re-verified by me against `sources/` before anything changed.**

---

## The scope was wrong before the sweep started, in the brief for the sweep

Checking the boundary before dispatching found that **`content/` holds 37 documents in eight
sections**, and five live files said 36 in seven — `CLAUDE.md` twice, `docs/README.md`,
`site_build_specification.md`, and **this plan's own entry commissioning this round**. The 37th,
`reading-diagrams/reading_ice_hockey_diagrams.md`, arrived on 31 July 2026 in `f2504ce`; nothing
re-derived the count after it.

⚠️ **And Tier 0's anchor figure was superseded by the file it cites.**
`corpus_structure_measurements.md` says *"The corpus is 37 documents and 619,227 words"* — then
twelve lines below prints a table reading *"36 documents / 532,518 words / 40.3 hours"*. Tier 0
quoted the table. Re-measured: **632,107 words, 47.9 hours at 220 wpm**, on the tree that shipped it. ⚠️ The first version of this figure was 630,873 / 47.8 h — **HEAD, i.e. the corpus before this round's own repairs**, and stale the moment it was written. Tier 0's argument is that
forty hours is six books and a beginner bounces off it. The real figure is nearly forty-eight, so
**the stale number was understating the case for the work it introduces**.

The reviewer independently found a sixth: `content_style_guide.md`'s "full corpus" list enumerates
**35** files, omitting `uk_rules.md` and `reading_ice_hockey_diagrams.md`. That is the list a
pipeline would glob.

---

## CRITICAL — two of four books make the airborne trail skate offside, and the section teaching it as an advantage named one

`time_and_space.md` taught the raised trail skate as **"Space to exploit"** — *"you can be well
ahead of the puck and still legal, and most amateur players give away several feet of free
attacking space by braking too early"* — and scoped the exception to USA Hockey alone, twice
calling the books *"all three rule sets"*.

**Hockey Canada is a fourth book and it reverses the airborne skate.** Verified at
`sources/hc.txt:5377`, the Rule 6.11 preamble: *"Only the player's skate(s) that are in physical
contact with the ice surface will be used in determining an off-side"*, and at Interpretation 3
to 6.11(a), which rules the exact case — one skate above the line, not touching the ice —
*"OFF-SIDE"*.

⚠️ **This section first cited 6.11(a) Note 1 and inserted an "only" the rule does not contain.**
With Note 1's second limb restored — *"or on their own side of the line"* — that clause makes an
airborne skate **onside**, the opposite of what it was cited for. `rules-verifier` caught it 200
lines below and the correction did not reach the top of the record, where a reader meets it first — directly under the sentence claiming every rule claim was re-verified.

Six other summary layers say *"two books of the four"* — `winger.md:278`, `:612`, `center.md:249`,
`zone_entries.md:104`, `:128`, `:985`, `rules_primer.md:846`. **`time_and_space.md` was the only
"three rule sets" in the corpus**, and it was in the document inviting the technique. Fixed in all
three places, with the Hockey Canada wording quoted.

⚠️ **The reviewer's supporting claim was overstated and I checked it rather than taking it.** It
reported *"a grep of the whole file returns no occurrence of Hockey Canada"*. The file mentions
Hockey Canada three times — at `:169`, `:233` and `:515`, on boards play, picks and interference.
The defect is real and confined to the offside passage; the characterisation of the document was
not. **A reviewer's supporting detail is evidence, not verification** — the same rule the project
applies to quotations.

---

## Majors fixed

**Body checking scoped to USA Hockey alone, in three facts blocks.** `center.md:495`,
`defending_the_rush.md:341` and `forechecking_systems.md:584` named USA Hockey 604(a) and stopped.
Verified at `sources/hc.txt:6024`, Hockey Canada **7.3(a)**: a minor for intentionally body-checking
*"in divisions of U13 and below, female hockey, and any other divisions approved by a Member of
Hockey Canada"*. The owner, `body_contact_and_battles.md:48`, carries both and adds the rider that
**being above U13 does not settle it**. `forechecking_systems.md` carried both versions inside its
own facts layer — `:470` complete, `:584` not. All three now name both books.

**The faceoff owner named two books that eject a centre; three do.** `faceoffs.md:908` gave NHL
76.6 and USA Hockey 613(d), and its next takeaway singles the IIHF out as the book that ejects
nobody — so a Canadian centre hearing both infers he is safe. Verified at `sources/hc.txt:4571`,
Rule 6.2(a): *"the offending team's player taking the face-off will be ejected from the face-off."*
Round 43 fixed this in `center.md` and it did not reach the owner.

**The USA Hockey out-of-play carve-out reached nine facts blocks and zero Common Mistakes.**
Verified: USA Hockey **610(c)** penalises only a puck *"deliberately"* shot or batted out, and
**631(d)** makes an accidental one a last-play faceoff. `risk_management.md:672` called it *"the
most avoidable minor penalty in hockey"* with no book scope at all, while `:286` in the same
document's facts layer says USA Hockey has no equivalent. The rules owner's Common Mistakes had
the same gap. Both fixed; the style guide records this exact defect at `:401` as having been
"stated as universal in nine documents", and it had been fixed in the facts layer only.

**Round 43's Tulsky repair stopped one document short.** `neutral_zone_systems.md:805` said a
dump-in is worth *"roughly half a carried-in entry **in shots**"* — the exact phrase the owner's
body warns against (*"do not compare 0.53–0.62 shots per carry-in against a shots-on-goal rate"*)
— with neither the 5-on-5 scope nor "unblocked attempts". Fixed.

**"Never both defencemen to one puck" was absolute in one document and conditional in two.**
`risk_management.md` stated the absolute in a `Never:` fact, a Common Mistake and a Key Takeaway,
while its **own body** at `:193` labels it *"a coaching convention with real exceptions"* and
`:201` gives the operative principle: *"somebody must be home. What varies is who."* Round 43's
correction reached `defender.md` and `defensive_zone_coverage.md` and stopped at the document
boundary. Two of the three fixed; KT5 sits inside a nine-item list and needs the list restructured.

---

## Majors recorded, not fixed, with the reason

**The KHL claim is carried under `Rule:` in five facts blocks.** Round 44 counted the layer rather
than the file: **13 summary-layer lines across 10 documents, 2 carrying the disclosure — both in
`defender.md` — and 11 stating it flat**, five of them labelled `Rule:`, the label the style guide
reserves for *"an actual rulebook rule, cited"*. `grep -in "khl\|kontinental" sources/*.txt`
returns nothing. **The repair is a source, not a sweep**, and it is already the plan's top evidence
item. Relabelling five `Rule:` facts without the book to settle them would trade one wrong signal
for another.

**`shooting.md` is named owner of shot-location value and does not contain the figure that points
at it.** `offensive_zone_play.md:939` credits it for the *"under 5% outside home plate"* McCurdy
figure; that figure lives only in `offensive_zone_play.md:60`. `shooting.md:760` gives a different
pair — 10–15% slot, 2–4% perimeter — hedged as *"that source names no dataset"*. So a reader
following the pointer arrives at the **less** well-evidenced numbers, and one site re-labels "home
plate" as "perimeter", two different areas in the glossary's vocabulary. **Which is right cannot be
told from the summary layer**, and that is the finding.

**The crease rule-set divergence exists in one document and sixteen sites state the NHL test
flat.** `offensive_zone_play.md:485` and `:943` carry USA Hockey 625(b) as a flat position rule and
the IIHF's loitering provision; roughly sixteen summary-layer sites across twelve documents give
NHL 69.1/69.3 with no rule-set flag. There is also a narrower conflict: `special_teams.md:907`
groups the IIHF **with** the NHL, `offensive_zone_play.md:943` groups it **with** USA Hockey. Both
are defensible on their own propositions. **This needs `rules-verifier` on 625(b) and IIHF 69.1's
final sentence before anything is swept.**

---

## The repairs were reviewed, and both dimensions found defects the repairs created

**`rules-verifier`: my citation pointed at a clause that reads against my own claim.** I cited
Hockey Canada **6.11(a) Note 1** for the airborne skate being offside. Note 1's second limb —
*"or on their own side of the line"* — makes an airborne skate **onside**. A reader following the
citation to check me would find text that appears to contradict me. The clauses that do the work
are the **Rule 6.11 preamble** (*"only the player's skate(s) that are in physical contact with the
ice surface will be used in determining an off-side"*) and **Interpretation 3**, which rules the
exact fact pattern OFF-SIDE. `rules_primer.md:218` already quoted the preamble correctly, so the
corpus was citing two different Hockey Canada clauses for one proposition and mine was the weaker.

**Same failure mode as round 43's pair, in a softer form: the neighbouring clause in the right
rule family.** Round 43 named 67.2 for a body act and 618(a) for a body act; this named Note 1 for
a proposition the preamble carries.

**`safety-reviewer`: the critical fix reached the body and skipped the `Rule:` line in the same
facts block.** `time_and_space.md:414` said "two books of the four"; `:402` said "all four rule
sets"; `:401`, between them, still said three books and one exception — and that is the layer the
site surfaces and the podcast extracts. **The repair stepped over the line it was for.**

**And the claim was NHL/IIHF/USA-Hockey-only in eleven more places across nine documents** — seven
facts blocks, two bodies, two Common Mistakes. **Eighteen sites in total now carry one wording.**
The corpus already knew the right form: `center.md:249` said *"two books of the four"* before this
round started, while `center.md:260` in the same document said otherwise.

⚠️ **One of the eleven I created in this diff.** At `rink_map_and_glossary.md:155` I changed
"three"→"four" in the first clause and left the second clause naming one book, so the sentence
**counted four books and listed three** — one line below `:151`, where the same edit got it right.

**Three majors, all mine, all in the repairs:**

- **I dropped "intentionally" from Hockey Canada 7.3(a)**, telling a U13 or female player that all
  bumping, shoving and pushing is banned. The rule's own preamble says *"body contact is incidental
  contact of two opposing players in pursuit of the puck… if incidental contact has occurred, no
  penalty will be assessed"*, and three sibling passages teach *"'non-check' does not mean 'no
  contact'"*. **This is the round-43 failure mode again — a repair that deters the safer option**:
  a player taught that all contact is forbidden never learns to angle or absorb it, which is how
  people get hurt when it happens anyway. One word, and it fitted with 26 characters to spare.
- **"Not under USA Hockey at all" is false standing alone.** A deliberate clear *is* a minor there
  — from anywhere on the ice, and expressly *"including after a stoppage of play"* (610(c)), which
  is exactly the panicked flip the bullet describes. It was the bolded lead, with the qualifier
  twelve words later.
- **My both-defencemen hedge ended on the permission, inside a `Never:` fact.** The pipeline speaks
  the label as its own sentence, so the last thing a listener heard was the licence — and the block
  **already carried the exception** in a `Convention:` and a `Key:` line two rows down. Reverted to
  the unconditional prohibition, ending affirmatively.

**One critical that was nobody's repair.** The body-checking classification caveat sat in the facts
blocks of `center.md` and `forechecking_systems.md` and in **neither document's Common Mistakes or
Key Takeaways** — while `forechecking_systems.md`'s Common Mistakes teaches *finishing a check*,
quoting NHL 56.1, with no flag that the reader may not be permitted to check at all. Both summary
layers now carry it, added rather than traded against an existing bullet.

**What `safety-reviewer` cleared, and it is the half worth recording.** The airborne-skate repair
does **not** over-deter the legal drag — the affirmative is stronger than before, and the deterrent
is scoped by its own words to the airborne version. That was the specific thing it was asked to
attack, and the answer was no.

⚠️ **The tree moved under `safety-reviewer` mid-review** — HEAD advanced and three files appeared
between its first diff and its last. It re-took the diff and re-verified every finding, and said so.
**Third round running in which a reviewer has reported this.** It is a fact about how these
sessions are run, not about the corpus.

---

## The third pass — "the streak has not ended", and a defect that broke a page

`safety-reviewer` re-read the repairs against the staged tree, as it had asked. Its verdict on my
run of repairs: **four for four.**

**CRITICAL — my Key Takeaways warning destroyed the Key Takeaways list.** I put a ⚠️ paragraph
inside `## Key Takeaways`, above item 2. Under CommonMark an ordered list may interrupt a paragraph
**only if it starts with "1"**. Mine started with "2", so items 2–10 were absorbed into the warning
as plain text. **I verified this with the site's own parser against the staged bytes**: the section
yielded `heading · list(ordered, 1 item) · paragraph(29 children)`. Nine Key Takeaways stopped
being a list on the rendered page. In audio it was worse — `md_to_speech.py` numbers per block, so
the listener heard *"First, F1, F2 and F3 are roles…"*, then the warning, then *"First, Angling is
the whole skill…"* — two Firsts, with takeaway 10 spoken as "Ninth". And *"the ten below"* was
wrong: nine follow it.

Moved above the heading, where it cannot interrupt the list. Re-parsed: **10 items**.

**CRITICAL — I made the bodies the least complete layer.** `center.md` and `defending_the_rush.md`
both gave the may-you-check-at-all scope as **USA Hockey only**, twelve lines below facts blocks
that now name both books. So the layer that explains *why*, and the one a reader who does not skim
reaches, was the one that had not been fixed. Under Hockey Canada it escalates further than the
corpus said anywhere: 7.3(b) allows a major plus game misconduct on the degree of violence and
makes one **mandatory** if the check injures. Both bodies now carry it.

**And the corpus-wide sweep multiplied a wrong wording, in one file.** Hockey Canada 7.3's third
limb — *"and any other divisions approved by a Member of Hockey Canada"* — was dropped in five of
the eighteen sites, leaving `forechecking_systems.md` with **two facts blocks giving two different
scopes for the same rule**. A U15 or adult player in a Member-approved non-check division reads the
short version and concludes checking is permitted. All five now carry the long form.

**One flattening, exactly where I was told to look.** Asked whether one wording fitted all eighteen
sites, the reviewer found it did not: I had rewritten USA Hockey 630(a) as *"skate contact with the
ice"*, where the rule says *"contact with any part of the Neutral Zone or the blue line"*. A skate
touching the ice **inside the attacking zone** is contact with the ice and does not make you
onside. Worse, `breakouts.md`'s facts block and its own body then described the rule differently.
Restored in all three.

Two smaller ones of mine: `switching_positions.md` named four books and then counted three — the
one site the sweep missed, and the reviewer found it by grepping the stale **count** rather than
the rule number, a search neither of us would have run; and Hockey Canada 10.1(v) was restated
without *"directly"* and *"with their stick"*, so a deflection or a glove clearance was swept into
an offence that does not reach them.

**What it cleared, checked rather than assumed.** The both-defencemen revert reads correctly
through the real pipeline — prohibition first, exception second, affirmative close. And it
confirmed the `center.md` claim I asked it to test as possibly self-flattering: *"the one this
section teaches"* is **true** — it read the section and not one instruction in it is a check.

⚠️ **`M3` — NINE documents now state Hockey Canada rules, two quoting the rulebook verbatim, with
no Hockey Canada rulebook in their Sources block — and in three of them THIS COMMIT creates the
gap.** `on_ice_communication.md`, `puck_support_and_spacing.md` and `how_to_watch_hockey.md` had
**no** Hockey Canada claim at all before it. The other six —
`rink_map_and_glossary.md`, `time_and_space.md`, `switching_positions.md`, `breakouts.md`,
`forechecking_systems.md`, `neutral_zone_systems.md` — cited the book already and deepened it.
⚠️ **The first version of this entry said eight and omitted `neutral_zone_systems.md`**, and
framed the whole thing as inherited. A `source-verifier` run from that list would have closed the
item with one document still open — which is this corpus's own history of sweeps working from an
incomplete list, in the record whose scope section is about exactly that. The claims are correct and were verified
against `sources/hc.txt`; this is a provenance gap, and **it is not swept here** — nine Sources
blocks with nine formats, in a round where every sweep so far has introduced a defect. Carried to
`OPEN_ITEMS.md` with the file list and the URL, for `source-verifier`.

---

## The gate — and the sweep that manufactured the defect it was fixing

`commit-gate` blocked, and its first finding is the round's own class, produced by the round.

⚠️ **I put one book's operative wording in the other book's mouth, at five sites.** Repairing a
flattening — I had written USA Hockey 630(a) as *"contact with the ice"* when it says *"contact
with any part of the Neutral Zone or the blue line"* — I applied the correction to sentences that
name **both** books. So five sites then had **Hockey Canada 6.11 requiring contact with the neutral
zone or the blue line**, which is not its test: 6.11 counts only skates *"in physical contact with
the ice surface"*. They are different tests that coincide on this fact pattern.

**And the corpus already had the right form** — `winger.md:291`, `zone_entries.md:117` and `:148`,
`rink_map_and_glossary.md:151` and `time_and_space.md:400` all quote Hockey Canada's own wording.
So an eighteen-site sweep intended to end a cross-document divergence **manufactured a new one, in
the same round, in the direction the third pass had just warned about**. The two tests are now
stated separately everywhere.

**The gate also decided the terminating-rule question I put to it, and split it.** Most of the
third pass's repairs do **not** void clearance: each was confined to the finding that named it and
re-derived from primary text. **One does** — this one, because correcting USA Hockey's wording
touched Hockey Canada's claim, which no finding had named. That is the rule's second half, and it
is the reason the block was right.

**Three more of mine, all the same shape one layer out:**

- **A repair applied to half a bullet, in the rules owner.** `rules_primer.md:217`'s header gained
  Hockey Canada; its quotation, its conclusion and its closing instruction (*"If you play USA
  Hockey, drag the blade"*) stayed USA-Hockey-only, and the next bullet then re-introduced Hockey
  Canada cold. A reader was promised a book in the header and dropped before the instruction.
- **The puck-over-glass flag reached Common Mistakes and stopped before the body and the facts
  layer**, in both owners — `rules_primer.md:392` still stated 63.2(iii) flat, and
  `risk_management.md:286`/`:299` stopped at *"USA Hockey has no equivalent"* with no Hockey Canada
  line. The facts block is the layer the speech pipeline extracts.
- **The anchor figure was stale at the moment of commit.** I measured 630,873 words — which is
  **HEAD**, the corpus *before* the repairs shipping alongside it. The tree that ships is 632,107.
  The measurement note said "measured 25 August" and not "on the tree before this round's repairs".

⚠️ **And `corpus_structure_measurements.md` held two live, contradictory corpus sizes twelve lines
apart** — I corrected its table and left the sentence above it reading *"The corpus is 37 documents
and 619,227 words. That number has not moved."* The owner document asserted stability that its own
table falsified.

⚠️ **`docs/README.md` was falsified by its own commit**: it said records exist for rounds 20–43,
in the commit adding round 44's.

**What the gate cleared, having re-derived it rather than read it:** all eleven rule claims from
`sources/` independently, including one not on my list; Hockey Canada 7.3's third limb present at
every site; both Key Takeaways sections parsed with the site's own parser (10 items and 7, lists
intact); `npm run build` end to end — 42 pages, 37 markdown, 9 EPUB, 9 PDF; and no erratum
narration surviving.

---

## Categories that came back clean, stated because silence reads as unchecked

F1/F2/F3 as arrival roles — sixteen statements across fourteen documents, no divergence.
Gap-control distances — match the owner table exactly. PK and PP geometry — consistent across five
documents, with the +1 handover stated identically in four. Off-puck share — 3–4% with the 5-on-5
and unofficial-tracking qualifications everywhere. **The England-and-Wales trapezoid status, which
was expected to be a second KHL, is not**: Rule 22.3 appears in 20 of the 21 documents that mention
the trapezoid. Rim/reverse, pinch/step-up, point/half-wall, slot/goalmouth — no misuse found.
Post-icing line change, 2-on-1 assignment, shot-blocking guidance — all consistent.

---

## What this method could not have found

- **It compared summary layers to each other, not to the rulebooks.** Where two documents agree and
  are both wrong, this pass sees nothing. The airborne-skate critical surfaced *only* because one
  document said "three" and six said "four" — had it said "four", the whole cluster would have
  looked clean and no rulebook would have been opened. **Four rule greps were run all round, and
  every one was triggered by a disagreement rather than by doubt.**
- **A claim stated in exactly one summary layer is invisible to a diff.** ~4,600 facts lines were
  grouped by shared token; a `Rule:` fact with no counterpart has nothing to disagree with.
- **`## Check yourself` blocks were not read at all**, in any of the 37 — the layer round 43 also
  named and did not reach.
- **Paraphrase defeats every count here**, and the reviewer found this in its own work: a first
  out-of-play sweep reported *"zero documents carry the carve-out"* because the pattern read "out
  of play" and the corpus says "outside the playing area". Nine carried it.
- **Diagram captions were checked for one string.** No caption was diffed against the summary layer
  of the document it illustrates — the same defect class, one layer out, and the style guide says a
  diagram is a claim read faster and trusted more than prose.
- **Nothing re-derived a number from a primary source.** If `shooting.md` and `offensive_zone_play.md`
  are both wrong at origin, every check here still passes.
