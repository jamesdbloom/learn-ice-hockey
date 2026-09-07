# Round 67 — the caption is not a label

**Opened 6 September 2026, on commit `3851b96`.** The owner's standing priority, restated twice in
this round: *"keep going in a loop, commiting periodically as sensible with as much parallelisium
as possible, keep looping until all of TIER 0 is completed."*

Tier 0 is the owner's own three-part brief: **diagram coverage and placement (D)**, **audience and
the rules-to-gameplay ratio (A)**, and **readability (R)**.

---

## ⚠️⚠️ CRITICAL — THE CONDENSATION INVENTED AN INVERTED RULE TEST, AND IT WOULD HAVE HURT SOMEONE

**The single most important thing this round found.** The A2 rules-condensation pass did not drop a
rule. **It compressed one and, in doing so, wrote a reason for it that is the exact inverse of the
book's.**

`uk_rules.md:50` shipped in the working tree as: *"…is still a high-sticking penalty if it strikes
an opponent bent over the puck in the face — **because *that player's* shoulders were at or below
waist level.**"*

⚠️ **That is IIHF 60.1's EXCLUSION condition, restated as the reason the penalty APPLIES.** Applied
to the ordinary case — an upright opponent, shoulders well above waist — the invented test tells the
reader the condition is *not* met and the contact is therefore *not* high-sticking. **A reader who
carried it into a game would raise a stick into an upright opponent's face believing it legal:** a
minor under 60.2, a double minor under 60.3 on injury, and under 60.4 a major with an **automatic
game misconduct**. Someone takes a stick in the face.

The primary text, `sources/iihf_situations_2026-27.txt`, Situation 60.13: the key is that the player
*"was hit in the neck/face/head with the opponent's stick, **at or above the height of the waist of
the player being struck**."* **It is where the contact landed on them.** The passage the compression
replaced had said exactly that, and was deleted.

⚠️ **The document contradicted itself two paragraphs apart** — `:48` states 60.1 correctly. **And it
was in the one document whose job is telling British players which book binds them.**

**Repaired** with the Handbook's own words, verified in the same voiced unit that the behavioural
instruction (*"Lift a stick low, on the shaft"*) survives beside it.

### What this proves about the method, not just the sentence

⚠️ **This is precisely the failure the audit was dispatched to find, and it could not have been found
any other way.** Every mechanical gate passed. `check_facts`, `check_links`, `check_absolutes` are
all indifferent to whether a rule's stated *reason* is inverted. **The agent that wrote it also
checked it** — and said so itself: *"I was the same agent doing the cutting and the 'is this still
correct' check, which this repo's process explicitly says isn't a substitute for a fresh adversarial
read."* It was right, and it was right about its own work being unsafe to trust.

### FACEOFFS WAS REVERTED TOO — the same critical, in the same shape, from a different agent

`faceoffs.md` was cut by **68,303 characters (26%)**. Its audit: **one critical, four majors, twelve
moderates**, plus four disclosure strips the regex could not see.

⚠️ **The critical is the primer's critical wearing different clothes.** HEAD read that a goalie may
fetch a dying rim *"under all three of those books"* — the three being the ones that write **no
trapezoid**. The compression changed **three to four**, sweeping in the NHL and IIHF, whose 27.8 and
27.7 penalise exactly that: *"Should the goalkeeper play the puck outside of the designated area
behind the goal line, a minor penalty for delay of game shall be imposed."* **The surviving
paragraph then contradicts itself four sentences apart**, still saying a corner rim *"is not theirs
to fetch."*

**Three more worth naming, because they are the same failure at different scales:**

- **IIHF 101.1's geometry was inverted.** The book puts the *stationary* player between the opponent
  and the puck; the compression put the *opponent* there. **The play it is cited for matches the
  book and not the compression** — so a women's-hockey illegal-hit rule, scaling to a major plus
  automatic game misconduct, no longer covers the situation it is attached to.
- **NHL 49.2(ii) lost its parenthesis.** *"A kicked puck that deflects off the stick of any player
  **(excluding the goalkeeper's stick)**"* became *"any player's stick"* — so the corpus now says a
  deflection off the goalie's stick is a good goal. It is not.
- **Four IIHF interpretation claims lost their edition label, and all four are FALSE of the 2025/26
  book — the edition IHUK adopts by name.** Two of them turn *"should be **warned**"* into
  *"**removed** from the face-off"* and *"**warn** both centers"* into *"**eject** both."*

**Reverted, keeping the diagram work.** Verified the same way: **zero non-blank, non-diagram
changes**, all ten markers re-applied at their section heads — including the orphaned
`faceoff-strong-side-dot`, which the re-application placed correctly under *Handedness* on its own.
Round 66's `76.4` → `76.7(iv)` citation corrections are at HEAD and are preserved (6 occurrences).

### Where A2 finished

| document | cut | outcome |
|---|---|---|
| `foundation/uk_rules.md` | 38,157 | **kept** — audited, repaired, re-audited, repaired again |
| `off-the-ice/equipment.md` | 17,215 | **kept** — same |
| `off-the-ice/team_play_and_culture.md` | 6,094 | **kept** — same |
| `off-the-ice/mental_game.md` | 597 | ⚠️ **REVERTED** — its condensation removed the BOOK from a rules passage |
| `foundation/rules_primer.md` | 124,235 | ⚠️ **REVERTED** — 25 findings, 1 critical |
| `systems/faceoffs.md` | 68,303 | ⚠️ **REVERTED** — 17 findings, 1 critical |

**252,736 characters were cut; 62,063 survive.** ⚠️ **Both reverted documents are rules documents,
and both criticals were the same defect: a claim scoped to some books, silently widened to all of
them.** That is not a coincidence — it is what compression *does* to a four-book comparison, which
is the form the rules documents are mostly written in. **The four documents that survived are the
ones whose density was provenance and discussion rather than cross-book comparison.**

**So the rule for the next A2 attempt is not "be more careful."** It is: **a passage that compares
books cannot be compressed by removing books.** Compress the discussion around the comparison, or
leave it.

---

### ⚠️⚠️⚠️ THE PRIMER CONDENSATION WAS REVERTED — 25 findings, and repairing it would have been worse

`rules_primer.md` was cut by **124,235 characters (22.7%)**. Two independent audits ran on it.

- **Rules pass: eight majors, seven moderates**, plus **five genuine disclosure strips** — and it
  confirmed the dominant failure was the predicted one: *"the corpus is now more certain, more
  universal and in three places more permissive than the books are."*
- **Safety pass: one critical, four majors.**

⚠️ **The critical is an exported permission.** Hockey Canada's late-hit window — *"a **maximum
distance** of an arm and stick length"* — was recompressed to *"roughly an arm and stick length…
**which is a useful gauge even where your own book does not write one.**"* HEAD had said the
opposite in terms: *"treat that as a stricter standard, **not a window the other three books grant
you**."* **A ceiling in one book became a licence in four**, and the IIHF's own refutation was
deleted from the document entirely — corpus string counts went *"objectively reasonable window"*
1 → 0 and *"risks turning a body check into a late hit"* 1 → 0. A late hit lands on someone who is
by definition not braced.

**Three more of the same shape:** the IIHF head-down carve-out lost the words **"with the puck"**,
widening a head-contact permission from a puck carrier to any head-down player; a
*"reckless-endangerment trigger"* was attributed to Hockey Canada, whose 9.5(b) and 9.5(e) **bar a
major and a game misconduct for high-sticking outright** and where the phrase appears **zero times
in the whole book**; and Key Takeaway 5 promised a head-up player *"keeps full protection"* — voiced
as its own unit — where the book protects the head and neck only.

### The decision, and why it is not defeatism

**Reverted to HEAD, keeping only the diagram work.** Verified: a word-level diff ignoring whitespace
shows **zero non-blank, non-diagram changes**, and the nine markers were re-applied to the head of
their sections.

⚠️ **Patching was the worse option, and I have this round's own measurement to say so.** Earlier
today I repaired 18 findings in the smaller A2 batch; an audit of those repairs found **nine new
defects**, including a non-negotiable 3 deletion of my own. **That is a ~50% defect-introduction
rate on careful, individually-specified fixes.** Twenty-five findings at that rate is not a repair
job, it is a second condensation.

**What is kept and what is lost.** Lost: 124,235 characters the owner asked to remove. Kept: a rules
document whose head-contact, late-hit, high-sticking and goaltender-interference passages say what
the books say. ⚠️ **The owner's instruction was to reduce rules detail, and the style guide records
the counterweight in the same breath — *where a rule's detail is what keeps a reader safe, the
detail IS gameplay.* Three of the five safety findings here were exactly that detail.**

**This is not a verdict on A2 as an item.** It is a verdict on condensing **this** document in one
pass. The smaller batch survived audit and repair. **The method that failed is bulk compression of
the corpus's most rule-dense document without a per-section review loop** — and the next attempt
should take one section at a time, with the audit attached to each, not to the whole.

---

#### ⚠️ THE REPAIRS REGRESSED THREE DISCLOSURES, FOUND ONLY BY THE THIRD REVIEW OF THE SAME TEXT

The gate blocked on C11 — a repair-of-a-repair reviewed by nobody. That review found **three majors,
all in `equipment.md`, and all the same species: my repairs kept a claim and dropped the thing that
made it honest.**

| | HEAD had | the repair shipped | restored |
|---|---|---|---|
| **HECC visor age floor** | the caveat *inside the same bullet* as the claim | claim in the **USA Hockey** bullet, caveat in the **Hockey Canada** bullet — **a different voiced paragraph**, after a 300 ms break, opening *"The HECC half of **that**"* with the antecedent now pointing at the wrong bullet | caveat moved back into the claim's own bullet, with Rule 304(d)'s *"sets no age for the visor itself"* |
| **"NHL: none"** | the edition, both extractions, the three strings searched, and the disposition of all six `neck` hits | *"A full search of the current rulebook finds no neck-protection rule at all"* — **no edition, no method, nothing anyone could refute** | the edition and the three zero-return strings restored to the voiced layer |
| **Hockey Canada mouthguards** | the reading, **labelled as a reading**, plus Interpretation 2 which contradicts it | the reading **stated as the rule**, with both the self-label and the contradicting primary text cut | both restored; the citation is `3.6(e), Note 6` again |

⚠️ **The second is the sharpest: a CHECKED negative became an UNFALSIFIABLE one.** The corpus had
attacked its own negative-existence claim exactly as CLAUDE.md requires — and the repair deleted the
attack while keeping the conclusion. **Every number in HEAD's version reproduces exactly**, which
the reviewer confirmed independently before recommending restoration.

⚠️ **And the first is a layer defect no reader of the markdown would see.** The caption and its
caveat sit in adjacent bullets, which look adjacent on a page and are **separate spoken units**. It
took rendering both through `md_to_speech` to find. **Three disclosures moved between bullets in one
file** — and the reviewer's closing recommendation is the check nobody has run: *extract every `<p>`
from HEAD and from staged, and report every disclosure sentence whose neighbouring paragraph
changed.*

**One further correction, to my own claim rather than the corpus's.** I had written that 2026/27
*"deletes the 46.6 heading — but not the protection."* True but incomplete: the **test is gone** —
*"few punches"*, *"retaliates"* and *"fighting back"* return **zero** in that edition against 2, 1
and 1 in 2025/26 (verified) — and the surviving protection is **discretionary** where the old one
said *shall*, and names only an aggressor or instigator where the old one also covered *"a fighter"*.
Corrected.

### ⚠️ AND THE REVIEWER FOUND A FALSE CLAIM IN MY OWN BRIEF

I told it Appendix IV *"shifts everything from Rule 22 onward by −2."* **`sources/README.md`
explicitly refutes that** — it *"conflated table numbers with rule numbers"* — and the reviewer
confirmed Rules 46, 60, 70 and 76 sit at the same numbers in both editions. ⚠️ **`uk_rules.md`
states it correctly, so a verifier trusting my brief over the corpus would have reported correct
text as a defect.** The brief was more defective than the corpus, again, and this time the corpus's
own README had already written the refutation down.

---

### ⚠️ THE MARKER COUNT IN THIS RECORD WAS A GREP ARTEFACT, CAUGHT BY THE GATE

Every marker figure in an earlier draft of this record — and in the reports I gave the owner — was
**one too high**. I counted with a pattern matching bare `diagram:` rather than the anchored
`^!\[\]\(diagram:…\)$`, and it matched a **prose sentence**: `game_management.md:302`, *"The
principles matter more than the diagram:"*.

**True figures, measured with an anchored pattern against HEAD and the index: 286 → 304, 18 added.**
Not 305 and 19. The per-document table was wrong too — `defender.md` gained **4**, not 5, and
`winger.md` gained **0**, because review removed the one borrow it had.

⚠️ **The derived percentage rested on it**: 8.1% was really **8.0%**.

⚠️ **This is the exact failure this repository names as characteristic — a measurement artefact
promoted into a brief — committed by the coordinator, in the record that becomes the next round's
brief, in a round whose own opening section is about correcting the plan's figures.** The gate
caught it by re-deriving rather than accepting, which is the only reason it is not in the corpus's
permanent record as fact.

**The lesson is not "count more carefully."** It is that `grep 'diagram:'` and
`grep '^!\[\](diagram:'` are different questions, and **only the anchored one is asking about
markers.** Every figure in this record has now been re-derived with the anchored pattern.

---

## ⚠️⚠️ MY REPAIRS INTRODUCED NINE DEFECTS, AND THE WORST WAS A DELETION I MADE MYSELF

The eighteen A2 findings were repaired by the coordinator. **A repair is new text, so the repairs
were sent straight back for audit.** That audit confirmed **all fourteen repairs against primary
text** — and found **nine defects the repairs had created.**

⚠️ **The major one is mine, it is a non-negotiable 3 violation, and it is in the sentence I wrote to
fix a rule.** Correcting the stick-length error, I stated the caps for the NHL, Hockey Canada and
USA Hockey — and **deleted the IIHF's figure, which HEAD carried and which is the book British
readers play.** My replacement headline then read: *"a 64-inch stick that is legal in USA Hockey is
illegal under Hockey Canada and, without approval, under the NHL."* **IIHF 10.1 is 1.63 m = 64.17
inches**, so a 64-inch stick is legal under the IIHF too, without any approval — and the IIHF's
exception route needs **2.0 m**, not 6'6". **I deleted a correct sourced fact while fixing a wrong
one, in a bullet whose entire point is that the numbers differ.** Repaired: all four books now
named, all four figures given.

**The other eight, all repaired:**

| | defect | class |
|---|---|---|
| D-2 | the disclosure that the **2025/26 handbook publishes no ruling** on Situation 60.13 was dropped from the body — so a British listener heard a 2026/27-only ruling as settled | non-negotiable 4 |
| D-3 | my repair added *"§Table 7 passage"* — **there is no such heading**, and the pointer is voiced | dangling pointer |
| D-6 | I wrote that 2026/27 *"deletes 46.6, so looking that heading up finds nothing."* **The heading is gone; the protection is not** — the waiver sentence is written into four other clauses and the term appears in Appendix IV | overcorrection |
| D-7 | Key Takeaway 8 said the guidance penalises a player who *"merely skates around one rather than leaving the box"* — **reversing its own body**, where the player left the box and then skated around | summary contradicts body |
| D-8 | *"game misconduct on the first offence, full stop"* — NHL **40.2** adds *"not less than twenty (20) games"* and **40.3** ten | understated consequence |
| D-9 | the *"what could be found"* hedge reached one bullet and stopped; two other voiced layers kept the bare negative | round-10 propagation failure |
| D-4/D-5 | a Hockey Canada mouthguard reading presented as the rule with both disclosures cut; and the HECC caveat landing in a **different voiced unit** from the claim it qualifies | non-negotiable 4 |

⚠️ **This is `T0-41` reproducing itself inside the round that filed it: the round that identifies a
pattern is the round most likely to repeat it.** I filed "a repair is new text" as the lesson, wrote
the repairs, and then made a deletion of exactly the class the same file warns about — while
believing I was being careful, because I had just verified the three books I *did* name against
primary text. ⚠️ **Verifying what you wrote is not the same as checking what you removed**, and the
audit's own closing line says it best: *"I verified that what remains is true, not that what was
removed was safe to remove."*

**Two further defects `check_absolutes` caught in the primer condensation**, both new and neither
visible to any other gate: two penalty caps written as *"is only a minor in the NHL"*. The checker
requires the book to precede the cap, deliberately, because an earlier instance named the NHL for a
*different clause* in the same sentence and a whole-sentence check cleared it. **Rescoped to "Under
the NHL this is only a minor"** — which is also the safer order when heard, since a listener
otherwise gets "only a minor" before the qualifier arrives.

### A2 removed 252,736 characters today, across five documents — and only one batch has been audited

Measured as raw file bytes against HEAD (`8ca1280`), so this figure **includes Sources trailers** and
is not the same measure as `check_counts.py`'s corpus-size figure. **6,776,959 → 6,524,223 — 252,736
characters, 3.7% of the whole corpus, in one round.**

| document | removed | audited? |
|---|---|---|
| `foundation/rules_primer.md` | **123,061** (22.7%) | ⚠️ **REVERTED** — 25 findings, 1 critical |
| `systems/faceoffs.md` | **68,303** (26%) | ⚠️ **REVERTED** — 17 findings, 1 critical |
| `foundation/uk_rules.md` | 38,157 (31%) | ✅ audited — **1 critical, 3 majors** |
| `off-the-ice/equipment.md` | 17,215 | ✅ audited — **2 majors, 4 moderates** |
| `off-the-ice/team_play_and_culture.md` | 6,094 | ✅ audited — **1 major, 1 moderate** |

⚠️ **The audited third produced 18 findings from 69,000 characters — roughly one defect per 3,800
characters cut.** If that rate holds, the two unaudited batches carry **fifty more**. That is a
projection, not a measurement, and the whole point of the two audits now running is that nobody
should act on the projection either way.

⚠️ **Nothing from this work will be committed until every batch has been audited and repaired.** The
condensation is what the owner asked for and the volume is real; **the defect rate is the reason it
cannot be trusted batch by batch.** The two most safety-bearing documents in the corpus —
`goaltender.md` and `body_contact_and_battles.md`, 103 and 99 rule-dense blocks — have deliberately
**not** been sent to A2 at all, and should not be until this method has produced a clean audit at
least once.

### The rules pass found MORE than the safety pass — 18 findings in total from one condensation

Two independent reviewers ran on the same diff. **The safety pass found the critical plus six.
The rules pass found three further majors and eleven moderates**, almost none overlapping. Total:
**one critical, five majors, twelve moderates from a single 69,000-character compression.**

The three the safety pass did not reach, all repaired against primary text quoted here:

| finding | the book | why it mattered |
|---|---|---|
| **Sticks**: *"caps around 63 inches… USA Hockey's [exception] doesn't [require approval]"* | **USA Hockey 301(b)** is *"No stick shall exceed **65 inches**"* — a **flat maximum for everyone**, not an exception. **Hockey Canada 3.3(b)** is *"will not exceed 1.60 m (63 in.)"* with **no exception of any kind** | a reader carries a 64-inch stick believing it legal and is illegal under Hockey Canada and, unapproved, under the NHL — **a penalty consequence** |
| **IIHF 9.12** compressed to *"minor penalty after a warning"* | the **2025/26** book — **the one British hockey plays** — routes junior violations via 102.7/202.7 to a **ten-minute misconduct**, five times the adult tier. 2026/27 deletes them | `equipment.md` is the document a **parent** reads, and it understated a junior's exposure |
| **Captains**: *"one captain and up to two alternates, or no captain and up to three"* | that is **NHL 6.1 only**. IIHF 2025/26 6.1 and **USA Hockey 202(a)** (*"not more than two Alternates"*) allow no three-alternate option | stated with no book label, between two NHL paragraphs, so it read as universal |

⚠️ **And one repair the reviewer caught that is pure logic, not rules:** the Table 7 risk advice had been compressed until **both halves described the same loss** — *"the downside of being wrong about that is a game lost for nothing; the downside of the opposite assumption is losing the actual game."* The instruction survived; the reason for it had become incoherent.

⚠️ **Three Sources-trailer cross-references were made FALSE by the compression** — the trailer still asserted that things were *"quoted in full above"* and *"quoted in the body instead"* when the body no longer quoted them. **A trailer is a claim about the document, and compressing the body silently falsifies it.** Two corrected; the safety content behind the third (the concussion red flags) was verified still present in the body at two places.

**Six further findings from the same review, all fixed and each re-derived from primary text:**

| | finding | why it mattered |
|---|---|---|
| **major** | `equipment.md` lost **HECC certification** from USA Hockey 304(g), and the **BNQ sunset** corpus-wide | a US parent had no standard to check; and `:436` separately says *"buy a BNQ-certified protector now"* — which USA Hockey stops accepting after 2026-27 |
| **major** | `uk_rules.md` lost the caveat that EIH 33.5 attaches **no qualification** to the mandatory first aider | a reader over a head or neck injury waits for clinical cover that may not be there, instead of calling 999 |
| **major** | `team_play_and_culture.md` lost **NHL 39.4(vi)** — misconduct for not going straight to the box | the likeliest first-year misconduct there is: just penalised, arguing, and the ladder does not apply |
| minor | *"adults need only a fastened chin strap"* | reads as though an adult needs no helmet; only the certification is relaxed |
| minor | British neck-guard scope missing from the section that **owns** it | R&R 24.3 covers *"all on ice activities"* — **practices included**, where blade lacerations happen |
| minor | women's half-visor disclosure stripped | non-negotiable 4; the permission is *a reading*, and IIHF 102.1 points the other way |

⚠️ **Five of the seven make the corpus look MORE certain than the books do** — the opposite direction
from the failure most conventions here guard against, and the same direction as the false-disclosure
class found in round 59. **Compression's characteristic failure is false confidence, not omission.**

**Consequence for the plan: A2 is not scaled until every batch is reviewed this way.** Two further
A2 agents are live; both were briefed with this counterweight before this critical was found, and
**both must be audited on the same terms.** The two most safety-bearing documents in the corpus —
`goaltender.md` and `body_contact_and_battles.md` — have deliberately **not** been sent to A2 at all.

---

## The finding this round is named for

**Diagram captions are 7.5% of everything the corpus speaks — 80,382 words, about 8.9 hours — and
the median caption is 1,303 characters, roughly 100 seconds read aloud.** In
`off-the-ice/how_to_watch_hockey.md`, **27.7% of what a listener hears is caption**; in
`positions/winger.md`, 24.4%.

Measured per **marker** rather than per diagram, because a borrowed caption is voiced once in every
document hosting it: 286 markers against 187 distinct captions, 0 unresolved ids.

⚠️ **This was found while trying to prove something else, and the something else was wrong.** The
hypothesis was that the corpus's one existing Overview diagram, `notation-key`, was a bloated
outlier that made the case against page-summary captions. It is **rank 60 of 187 at 1.2× the
median** *(denominator is the pre-round census; 195 after this commit — rank and ratio both
re-derive unchanged)*. The hypothesis died; the measurement that killed it is the finding.

⚠️ **And the direction matters: the defect is the MEDIAN, not the maximum.** The longest captions
are long because they carry rules qualifications and safety counterweights that non-negotiables 3
and 4 exist to protect. **A caption that gets shorter by shedding a qualification has made the
corpus worse.** Any reduction here is a per-caption reading job and must never be swept.

**It bears directly on the owner's diagram request, and not in its favour.** D1 moves all 286
markers to the *head* of their sections, so a listener now meets ~100 seconds of caption *before*
the prose rather than after. D2 and D3 would add roughly 60 more markers. **Adding diagrams adds
this cost linearly**, and D3's captions — page summaries — are the hardest kind to keep short.

---

## Measured: how wrong the plan's own rows were

Two Tier 0 rows were corrected by measuring what they asserted. Consistent with this repository's
standing finding that **the briefs are more defective than the corpus**.

| row | what it claimed | what is true |
|---|---|---|
| *"A note on language"* | **eight** documents | **nine** — it missed `goaltender`, `neutral_zone_systems`, `passing_and_receiving`, `shooting` |
| same row | the repeats are *strong-side / weak-side* and *high / low* | those are 4× and 3×. **The top four are all 6× and all rink geography:** `point`, `high slot`, `half-wall`, `goalmouth` |
| `D3` scope | an Overview diagram for each document | **31, not 37** — five documents are non-rink, which is the owner's own carve-out |

The language-note correction **changes that item's decision rather than just its numbers**: the
heaviest repetition is not tactical vocabulary a document might fairly re-establish, it is
**location names whose stated owner is `rink_map_and_glossary.md`**. Six independent definitions of
`high slot` is also six places to drift — and drift in that exact term is *already* an open finding,
with prose, `offensive_zone_play.md` and the built diagram giving three different depths.

---

## Closed

**A1 — the audience is now in the specification.** `project/content_style_guide.md` previously read
*"both newcomers and experienced players wanting to deepen their game."* ⚠️ **That half-sentence was
the licence under which the rules depth accumulated** — a spec that names everybody names nobody,
and any marginal paragraph could be justified by the reader who wanted to go deeper. It now names
**a player in their first ten years**, in the owner's words, with a new sub-section fixing the
working test: **a rule earns its space by changing what the reader DOES.**

⚠️ **Its counterweight is written into the same sub-section, because this item collides head-on with
non-negotiables 1–4 if read carelessly:** compressing is not deleting; a safety-bearing rule, a
genuine cross-book divergence and an honest disclosure all stay. **Where a rule's detail is what
keeps a reader from being penalised, ejected or hurt, the detail IS gameplay** — and a first-year
player is *more* exposed to that than a veteran, not less. **Cut the discussion, never the warning.**

**Round 66's splits changed the audio by exactly nothing.** Rendering HEAD and the index through the
real `md_to_speech` and diffing returned five documents **identical in text and in unit count**
(`rules_primer` 229→229, `goaltender` 179→179, `body_contact_and_battles` 193→193). The renderer's
unit boundary is not the bullet. **The whole gain was site-only**, which restates R0/R1 as a
site-readability item and leaves the listening-side readability defect, if any, still unfound.

---

## ⚠️ THE DIAGRAM GAP WAS MOSTLY A WIRING GAP — five agents, sent to DRAW, drew nothing

The owner's complaint was that sections have no diagrams, naming four on the defender page. Five
agents were sent to `positions/` — the named priority — to draw. **Between them they authored ZERO
new diagrams and added 13 markers to diagrams that already existed.**

| document | census gaps | new diagrams | markers added |
|---|---|---|---|
| `goaltender.md` | 41 | **0** | 0 |
| `defender.md` | 11 | **0** | 4 (3 borrows + the Overview pilot's own marker) |
| `center.md` | 11 | **0** | 6 borrowed |
| `switching_positions.md` | 16 | **0** | 1 borrowed |
| `winger.md` | 3 | **0** | **0** — the one borrow added was later removed by review |

⚠️ **Three of the five reached this independently and gave the same reason:** the diagram the section
needed already existed in another document, its caption already paraphrased the section's own
wording, and it had already been reviewed under its owner. **`center.mjs`'s own header had even
recorded the borrow decisions — they were simply never wired up as markers.**

**So the defect the owner saw was real, and it was mostly not the one it looked like.** It was not
"this corpus has too few diagrams." It was **"this corpus does not point at the diagrams it has."**
Two different repairs, and the cheap one was correct: no new geometry, no new rule-bearing caption,
no new review surface.

⚠️ **And the one agent that reversed a documented decision did it with a better argument than the
note it overturned.** `defender.mjs`'s header had refused a net-front diagram on the grounds that
*"this is something no diagram can draw"* — true of the close body mechanics. But the section's
actual safety point is **spatial**: never walk an opponent across your own goalmouth, take them to
the corner. That is one route, and it is drawable. **A recorded "we decided not to" is a hypothesis
too.**

⚠️ **The counterweight, measured: borrowing is free to write and NOT free to hear.** Those borrowed
markers cost the listener the full legacy caption in every new host — `defender.md` alone gained
**9,080 characters, 11.4 minutes of speech**, moving from 10.9% to 15.3% caption. Corpus-wide:
**286 → 304 markers, 7.5% → 8.0% of spoken text.** Still inside the ceiling, but **18 markers spent
a sixth of the headroom**, where newly written captions at today's 601–838 chars would have spent
about half that. **My own pricing had counted the authoring cost and missed the listening cost.**

---

## The borrowed-caption class was triaged and is NOT widespread — one instance, not thirty-four

A census found **95 captions containing relative-position wording, 34 of them borrowed into more
than one document.** A dedicated agent read all 34 in full and checked **every hosting document**
for each. **All 34 are benign. Zero further fixes.**

⚠️ **It refuted three of my own "known-real" flags**, and the reasons are the useful part:

- `forecheck-roles-rotate`'s *"the label beside it"* points at a label **inside its own picture**,
  not at another diagram.
- `rush-3-on-2-default` / `-alternative` (*"the next diagram"* / *"the previous diagram"*) and
  `dz-walk-down-zone` / `-man` and `forecheck-212-stacked` and `forecheck-122` and `nz-1-2-2-trap`
  and `winger-dz-reverse` and `faceoff-dzone-clean-loss` **all resolve correctly in every host** —
  because the D1 agents moved each pair **together, in order**, exactly as the mid-flight correction
  told them to. **The care taken during D1 is why this census came back clean.**
- The rest are self-contained uses — *"the same pass"*, *"the same corner"*, *"the same words"* —
  which is what I predicted the regex would over-fire on, and it did, at a rate of 33 in 34.

**And it added a check nobody asked for:** it confirmed from `global.css` that `figure.diagram` is a
block element with no side-by-side layout even for half-width diagrams, **so every diagram stacks
vertically and "above" / "next" / "beside" all map onto one reading order** — which is what makes
adjacency the right test at all. That is the difference between checking the thing and checking the
assumption underneath it.

⚠️ **So the rule stands but the population does not.** `dz-collapse-high-slot` remains the only known
instance. **The style-guide rule is still worth having** — it is cheap, and the one instance shipped
undetected through every gate — but this round should not be read as having found a widespread
defect. **It found one, and proved the other thirty-three were fine.**

**What the sweep could not reach**, in its own words: captions that refer to another diagram
*without* a positional word, and the 61 single-host hits, which were out of scope and could still be
internally wrong.

---

## THREE checker/agent races in one round, all correctly not acted on

The standing rule is that a checker result taken while agents are live proves nothing in either
direction. It fired three times today, and in all three the right move was to re-run rather than
act:

1. **A marker count of 287 when the corpus held 286.** Three independent recounts immediately
   afterwards all returned 286 — a file had been read mid-write.
2. **`check-arrivals` reported a HARD FAIL on `pp-walk-down`**, seen by an agent that does not own
   `special_teams.mjs`. Re-run from the coordinator: **0 hard failures** across 195 diagrams.
   ⚠️ **Correction to my first note on this: it was NOT a phantom.** The failure was real when
   observed — a new carry route whose arrowhead finished 4.47 ft from a defender, reading as
   skating through him — and the owning agent found and fixed it itself in the same window. **The
   race made it un-actionable by the observer, not untrue.** Both halves matter: acting on it would
   have meant editing another agent's half-written file, and dismissing it as noise would have been
   wrong too.
3. **`check_absolutes` refused to certify the caption layer**, correctly, because `defender.mjs` was
   newer than the built `diagrams.json` — the tool detecting real staleness rather than racing.

⚠️ **The dangerous half is the inverse and it did not fire visibly: a checker PASS while agents are
live proves nothing either, because the tree it read is already gone.** The only run that counts is
the one after every agent has finished and every file is staged. Nothing in this round has been
gated yet for exactly that reason.

---

## Seven measured geometry defects in the new diagrams, all confirmed and fixed

Every one of the reviewer's measurements was **verified before acting**, and all seven held. The
glyph-ink premise the clearances rest on (3.275 ft for a forward's circle, 4.0 ft for a defenceman's
triangle) was re-derived from `rink.mjs` and found already recorded verbatim in `rink.json`'s own
`point` comment.

| diagram | defect | fix |
|---|---|---|
| `entry-drop-pass` | a **skate route through a defenceman** — 2.14 ft against 4.0 ft of ink at t=0.61, **the only one in the corpus** | endpoint steepened; clearance now **5.14 ft** |
| `entry-vs-standing-up` | captioned *"chips it past him"* with the chip clearing him by **20.88 ft** — there was no "him" | defenceman moved into the actual lane; chip clears by 8.67 ft, carrier's curl by 5.01 ft |
| `defend-squash-and-slide` | the puck was **invisible** — 1.41 ft inside a solid opposition glyph, and `PALETTE.puck` is the same hex | moved 5.39 ft clear |
| `entry-trail-skate-drag`, `entry-high-triangle` | pucks 1.41 ft from their carrier, colliding with the glyph's own letter | both moved to 5.0 ft |
| `defend-squash-and-slide` | the caption never said **the perspective flipped** — the first diagram in that file where `own` is the *defending* team | caption opens *"You are defending here"* |
| `pp-walk-down` | the pass endpoint was **exactly equidistant** — 3.04 ft from both the receiver and an opponent, inside both glyphs' ink | pass route **dropped**; the caption carries the branch instead |
| `pp-backdoor` | glyph id `K` decoded to nothing; neither describe said which players are omitted | renamed `BD`; both describes now name the undrawn players |

⚠️ **`check-arrivals.mjs` could not have found the worst of these, by construction.** Its
`if (along <= 0) continue` skips an opponent behind the route's tip — **so it tests arrivals, not
pass-throughs.** The route through a defenceman passed every gate. The reviewer found it by sweeping
every route in the corpus against every non-owner glyph using the renderer's own curve maths, and
that sweep is the thing to keep, not the finding.

⚠️ **And one part of my brief was refuted:** I asked for `numbered: true` on `entry-vs-standing-up`
because the section's word is *"chip and chase"*. The agent declined — numbering would number **all
three** routes including an unrelated late-arrival route, **misrepresenting a simultaneous
independent read as third-in-sequence.** Correct, and it is the second time today an agent has
improved a brief by refusing part of it.

---

## ⚠️ THE DIAGRAM REVIEW FOUND A CRITICAL IN A BORROW — a caption speaking to the wrong reader

`goalie-rim-stop-or-clear` was borrowed into `defender.md`'s trapezoid subsection. **The picture is
fine. The caption is written in the second person to a GOALTENDER** — *"the area inside which **you**
are allowed to play it"*, *"kill it dead, leave it for **your defenceman**"*, and, fatally,
*"**get out of the way and let them have it.**"*

⚠️ **The section it now leads says the opposite in terms:** *"**Your goalie cannot get a rim that
dies in the corner. You have to**, under forecheck pressure."* The trapezoid binds the goalkeeper
only; a defenceman may play the puck anywhere behind his own goal line. **A defenceman heard "get
out of the way" as the first sentence of the section telling him to go and get it.**

**Removed.** ⚠️ **And the mitigation is worth recording because it is not a fix:** the renderer
labels a borrowed caption *"Diagram, from goaltender"*, so the listener is told whose it is. **A
provenance label is not a correction — the pronoun still says "you", and the rule stated is not the
reader's rule.** The reviewer graded it critical on exactly that ground, and was right to.

**This is the cost of the borrow strategy, and it is the one the round did not price.** Borrowing
was the right call for correctness — the diagrams are already reviewed — but *reviewed in their own
document*. **A caption is voiced text addressed to a particular reader, and borrowing moves the
reader without moving the words.**

**A second borrow was removed for the same class of reason:** `oz-half-wall-options` into
`winger.md`, whose four-option menu **omits the shot** — the section's first-named option and the
subject of its longest paragraph (*"look to shoot first… 'shoot first' is a bias, not a rule"*). A
winger hearing a four-option menu with no shot in it, at the head of a shoot-first section, gets the
section inverted.

**And the Overview pilot's own caption carried three defects**, all repaired: it asserted a *"puck
carrier"* on geometry deliberately built as a **50/50** (the anchors are reused from a diagram whose
comment records the puck as *"contested by both and owned by neither"*); it **invented a goalmouth
gloss** — *"the ice between any opposing forward and your goaltender"*, a region defined against a
*mobile* opponent — where `rink_map_and_glossary.md` owns the term and warns that confusing
goalmouth with slot is a common cause of a blown assignment; and it ended *"the same pair runs
through every zone **below**"*, ⚠️ **which dangles in `switching_positions.md`, which borrows it and
has no zone sections — the exact defect this round repaired in `dz-collapse-high-slot`, reproduced
in the same round, in a caption written after the rule was added to the style guide.** Caption now
508 characters.

**Redundancy, and a design precondition.** The reviewer found `defender.md` carrying **three
pictures of one moment** and recommended cutting the Overview marker. ⚠️ **I did the opposite and
kept it, because the owner named that Overview by hand** — and removed the `dz-collapse-corner`
borrow this round had added instead. Two remain. **The reviewer's underlying rule is adopted: an
Overview diagram is only worth its cost where the page-defining situation is not already drawn in
the same document.** `center.mjs`'s header had already reasoned exactly that way and declined one.

---

## D1 complete — ~270 of 304 markers at the head of their unit, and the exceptions are all argued

Four agents, disjoint file sets. **Marker integrity verified against HEAD: the D1 move added and
removed nothing — 286 in, 286 out.** The corpus total then rose to **304** through the diagram work
that followed (8 new diagrams, 10 borrows, 2 borrows removed by review).

⚠️ **The head-of-unit figure is DEFINITION-SENSITIVE and two independent counts disagree by one.**
Counting a marker as "at the head" when the first non-blank thing above it — skipping sibling
markers — is a heading **or a bold label alone on its line**, I measure **270 of 304, 34
exceptions**; the gate measured **269 / 35**. **Neither was quoted as exact — and a later gate resolved it: 270/34 is right.** The gap was a
tokeniser artefact on `game_management.md:133`, `**6. Keep forechecking — just choose the *right*
forecheck.**`, which IS a bold label alone on its line but carries nested italics inside the bold
span; one regex rejected it and the other did not. ⚠️ **Stating the definition is what made that
re-derivable — the disagreement was diagnosable only because both counts said what they were
counting.** The number that
matters is not the total but that **every exception is individually argued**, which is checkable —
⚠️ **and a gate checked it and found FIVE that are not**: `getting_started.md:163` and all four
`practice_and_development.md` markers appear only as bare counts. **All five are defensible on
inspection** — each sits under an explicit bridging sentence (*"Here is one end zone…"*, *"Below are
the same six skaters arranged two ways"*, *"Here is the same rep drawn twice"*) — **so the corpus is
sound and this record was overstated.** It matters because the claim was offered *in place of* a
disputed total, which makes it load-bearing. Measured after: **217 markers sit before
their section's facts block, 10 after, 60 in sections that have no facts block.**

### ⚠️ Two of the four agents used OPPOSITE conventions, and nothing would have caught it

Three agents placed the marker **between the heading and the ` ```facts ` block**. The fourth placed
it **after the facts block**, stating a corpus convention that facts blocks always open a teaching
section. **Both are defensible; only one can be right.** Measured: **180 before against 47 after.**

Normalised to *before*, on three grounds — it matches 180 of 227 existing placements, it matches the
owner's literal instruction (*"at the start of sections"*), and it matches the D3 pilot. **37
markers moved** across eight documents; re-measured to 217 before / 10 after, with every marker intact.

⚠️ **No checker can see a disagreement like this.** `check_links` resolves either placement,
`check_facts` is indifferent, and each agent's own file set was internally consistent — **the
contradiction existed only between file sets, which is exactly the axis no per-agent review looks
along.** It is the *"check for contradictions between agents afterwards"* rule earning its place
again.

### The exceptions, all deliberate and all argued

⚠️ **The exception SPLIT below was measured before the later diagram work and is stale; re-derive it
rather than quoting it.** The gate's independent count distributes them as `how_to_watch_hockey` 24,
`practice_and_development` 4, `game_management` 2, `puck_handling` 2, `getting_started` 1,
`risk_management` 1, `reading_ice_hockey_diagrams` 1 — four documents that appear in its split and
not in this one. The arguments for each are unaffected. Originally recorded: seven in `game_management.md` sit with their
own numbered tactic rather than stacked at a shared heading; `the-risk-map`, `the-puck-decides-not-you`
and `you-cannot-beat-two` were left because their captions are explicit end-of-section summaries.

**And one agent exempted an entire document — all 24 markers in `off-the-ice/how_to_watch_hockey.md`**
— arguing it uses a deliberate *define, then illustrate* style, so moving them would present jargon
before its definition and orphan the bridging sentences.

⚠️ **I checked that claim rather than accepting it, and it is overstated as written but sound in
substance.** The agent said *"every single diagram is preceded by a specific bridging sentence."*
Measured: **12 of 24 are. The other 12 are markers sitting directly after another marker** — that
is, the document uses bridged *groups*, and every group is introduced. **The exemption holds; the
sentence justifying it did not.** Recording both, because a reviewer who re-checks this later will
measure 12 and needs to know why that is not a refutation.

---

## A borrowed caption that referred to a diagram its host does not have

`dz-collapse-high-slot`'s caption opened *"The same low zone collapse a beat later"*. That resolves
in its **owner**, `systems/defensive_zone_coverage.md`, where `dz-collapse-corner` sits immediately
before it as the deliberate before/after pair. **It is borrowed into `positions/defender.md`, which
has no such predecessor** — so a listener there heard *"the same … a beat later"* about a diagram
they had never been shown.

⚠️ **It was already broken before D1 moved anything**, and the agent that found it said so rather
than claiming its move had caused it. **It was invisible to every check**: `check_links` resolves
the marker, `check_facts` does not read captions, and a per-document review of either document
alone sees a caption that reads fine — the owner because the predecessor is there, the host because
nobody re-reads a borrowed caption against its new neighbours.

Repaired at source to stand alone in both: *"A low zone collapse a beat after the corner battle
begins."* The hedge (*"one system among several"*) and every other clause are unchanged, verified by
reassembling the whole 1,006-character caption and asserting the body survived rather than that the
new string was present.

⚠️ **This confirms the standing item that a caption edit is a content change in EVERY hosting
document** — two, here. It also gives the rule a sharper form: **a borrowed caption must stand alone
in every document that hosts it**, so relative-position words (*"the same"*, *"a beat later"*,
*"beside it"*, *"the previous diagram"*) are only safe in a caption that is never borrowed. **72 of
187 diagrams are hosted by more than one document**, so that is not a rare case.

---

## The D1 rule refined: the unit is the TEACHING POINT, not the heading

A cross-document check found four borrowed diagrams sitting at the head of some hosts and 15, 29,
33 and 2 non-blank lines down in `game_management.md`. **None is a defect.** That document has one
heading — *"What actually works"* — covering **six independent numbered tactics**, each with its own
diagram. The agent stacked none of them at the heading, and said why: doing so *"would have divorced
each picture from the one tactic it illustrates."* It split each numbered lead sentence from its
explanation and put that tactic's diagram between them, **altering no text, only order**.

⚠️ **That is the correct reading of the owner's instruction and my brief stated it too literally.**
The owner asked for diagrams "at the start of sections" because a diagram *after* the prose it
explains arrives too late. **The thing a diagram must precede is the teaching point, which is
usually a section and sometimes a numbered item inside one.** A brief that says "immediately after
the heading" produces, in a six-tactic section, six pictures at the top and six explanations below —
mechanically compliant and worse for the reader.

**So the placement rule is: put the diagram at the head of the smallest unit that its caption is
about.** Measured state after two of four D1 agents: **58 of 72 borrowed diagrams are at the head of
every host already processed**, and the remainder are either explained by this rule or sit in
documents the other two agents still hold.

⚠️ **This check is worth re-running at the end**, because a borrowed caption is quoted into
documents that do not own it — so a diagram can be well placed in its owner and badly placed in a
host, and no per-document review can see it.

---

## ⚠️ THE BRIEF MISSED A WHOLE CLASS OF DEPENDENCY, and an agent found it

My D1 brief scanned all 187 captions for backward references and warned that the regex over-fires —
which it does, most "above" hits being spatial. **What it never looked for at all was captions
depending on OTHER CAPTIONS.** An agent found five in its own seven files:

- *"the positions they hold in the **previous diagram**"*
- *"the **next diagram** shows theirs"*
- *"the diagram **beside it**"*
- *"the **same** 6-on-5 shape"*
- *"the same low zone collapse **a beat later**"*

⚠️ **None of these contain the word "above", so no amount of tuning my regex would have found
them.** They are invisible to a text scan of `content/` for the usual reason — the caption lives in
a `.mjs` file — *and* invisible to a scan of the captions themselves, because the dependency is on
**position**, not on wording.

**Two conventions the agent established, which I relayed to the two D1 agents still running:**

1. **Where two markers form a deliberate side-by-side pair, move BOTH to the head of their shared
   PARENT heading** rather than splitting them into two child sections — splitting them breaks
   *"beside it"*. It did this for `nz-stand-up-at-the-line` / `nz-back-off-at-the-line`.
2. **Never insert a marker between items of a real ordered list**, which renumbers the list in the
   audio — move it to the section head instead.

⚠️ **And one marker was correctly NOT moved:** `ot-3-on-3-regroup`, whose caption ends *"all of the
play above is the account coaches and players give of how this format is now played"* — a genuine
backward reference to the prose that precedes it. **A wrong move is worse than no move**, and both
D1 agents so far have declined exactly one marker each on those grounds rather than forcing the
count to 100%.

**This is the brief-defect pattern this project keeps measuring, in its usual direction:** the brief
was confidently specific about one failure mode and silent about a larger one beside it. **Silence
on a dimension is the failure mode** — the agents' reports are what closed it, not the brief.

---

## The diagram move needed a CSS fix that no agent could have seen, and the obvious fix was wrong

D1 moves 286 diagram markers to the head of their sections, so **the heading-to-figure gap stops
being an edge case and becomes the common case.** Two things had to be measured.

**`figure.diagram` carries `margin: 2rem 0`; headings carry bottom margins of 0.85rem (h2), 0.6rem
(h3) and 0.5rem (h4).** Adjacent margins collapse to the larger, so a moved figure would sit **2rem
below its heading — 2.4× to 4× the gap the section's first paragraph gets**, reading as floating
between the heading and the text rather than belonging to the section under it.

⚠️ **And the obvious selector `h3 + figure.diagram` matches NOTHING — it would have failed
silently.** The markdown `![](diagram:id)` renders as **`<p></p><figure>`**: the component hoists
the figure out of its paragraph and leaves the empty `<p>` behind. Verified in built HTML — all 11
figures on the defender page are preceded by a literal `<p></p>`. **A CSS fix written from the
markdown rather than from the DOM would have shipped, passed every checker, and done nothing.**

Fixed in `site/src/styles/global.css`: `.prose p:empty { display: none; }` plus per-level rules
matching **both** `h* + p:empty + figure.diagram` and `h* + figure.diagram`, so the spacing does not
silently revert if the renderer ever stops emitting the empty paragraph.

⚠️ **Every D1 agent named "whether the site actually renders correctly after the move" as the thing
its method could not reach.** They were right, they could not build, and the defect was real. **That
handover is the pattern this project relies on** — and it is the coordinator's job precisely because
no agent holds both the build and the whole file set.

---

## R6 confirmed at 20.3% — and it is UNIFORM, which changes how it can be fixed

Measured from HEAD across all 37 documents, fenced blocks and Sources trailers excluded:
**170,326 bold words in 839,838 of prose — 20.3%. One prose word in five.**

⚠️ **The distribution is the finding, not the total.** It runs from `how_to_watch_hockey` at
**14.4%** to `rules_primer` at **25.0%**, and *every one of the 37 sits in that band*. There are no
outliers. **So this cannot be fixed by targeting bad documents — it is the house style working as
written**, and any change is a change to the style guide first and 37 documents second.

⚠️ **And like R0/R1, this is a SITE-ONLY readability item: bold is not voiced.** Taken with the
round-66 measurement that eleven bullet splits changed the audio by exactly nothing, **the whole
readability tier so far is page-side.** That is legitimate — the owner's complaint was about a web
page — but it should be stated plainly rather than discovered a third time: **R0, R1 and R6 all buy
the reader something and the listener nothing.** The only measured listening-side readability cost
on this plan is R5, the caption load quantified above.

⚠️ **Emphasis at 20% is not obviously wrong and this record does not claim it is.** The corpus uses
bold structurally — to carry the safety counterweight into a spoken unit, and to mark the
*"coaching choice, not a rule"* qualification the cardinal rule requires. **A sweep that thinned it
would strip exactly the material non-negotiables 3, 4 and 7 protect.** What the number establishes
is that bold can no longer be doing the job of *standing out*, because at one word in five there is
nothing for it to stand out from.

---

## Verified closed — the 660 sq ft high slot

The defect `check_zones.py` was written for: a band labelled *"the high slot"* drawn at **660 sq ft,
3.14× the 210 sq ft its owner defines**, cutting through both faceoff circles, under captions
reading *"between the dots and the top of the circles"*. **It is fixed, and I verified it from the
geometry rather than from the record.**

All three modules that define their own `HIGH_SLOT` — `scanning_and_anticipation.mjs:60`,
`playing_without_the_puck.mjs:570`, `positions.mjs:64` — now carry **byte-identical polygons**.
Resolved against `rink.json`: `top-of-circle` x=54 and `faceoff-dot` x=69 with the goal line at
x=89, so the band runs **20 ft to 35 ft from the goal line** — precisely
`rink_map_and_glossary.md`'s *"from the level of the faceoff dots up to the top of the circles"*,
stated identically at its `:320`, `:671` and `:776`. The ±7 ft in y is the true 14 ft gap between
two circles of radius 15 centred at y=±22. **15 × 14 = 210 sq ft.** `check_zones.py` over the built
SVGs groups all four diagrams drawing the label together with no disagreement.

⚠️ **This does NOT close the separate three-depths finding** — prose, `offensive_zone_play.md` and a
built diagram giving 35 ft, 20 ft and 5 ft for one concept. That is a different claim about a
different quantity and it remains open; I checked the polygon, not it. Saying otherwise would be
the exact substitution this project keeps filing.

⚠️ **And `check_zones.py` compares diagrams to each other**, so this run proves consistency, not
correctness. What makes it correct is that the polygon matches the *owner document*, which I read
separately — and the language-note measurement above is a warning that the owner is being
re-derived in six other places where it can drift again.

---

## Every file in this commit, and why it changed

Named in full because the gate observed that eleven staged files appeared nowhere in this record,
covered only by class.

⚠️ **Diagram-marker repositioning, and in five of them a PROSE REPAIR the move made necessary.** An
earlier draft of this list said "no prose changed", and a later one said five files. Both were
refuted by running the diff. **It is SIX files**, and two gates were needed to get the list right:
`on_ice_communication.md:225`, `passing_and_receiving.md:202` and **five separate flips** in
`body_contact_and_battles.md` (the record previously cited only `:129`; it also carries a **sixth**, non-marker edit — the IIHF 46.6 repair, documented in the repairs table but not in this list) turn *"the picture
**below**"* into *"above"*; `switching_positions.md:209` — **missed by both earlier drafts, which
filed that file as marker-only** — turns *"the two diagrams that **follow**"* into *"above"*;
`risk_management.md:527` is reworded to *"Those **two pictures** are the same picture twice"* with a
colon becoming a semicolon, not merely a dropped colon; and `game_management.md` splits four
paragraphs so each numbered tactic keeps its own diagram. **Every one of the six directional flips is correct** —
they are what moving a figure requires, and all 8 directional pointers in the corpus now resolve.
⚠️ **The defect was in this record three times running, in the sentence describing the defect** — and
a fourth gate then found this list still missing the two repairs made in response to the third. **They
are recorded here, since a repair the record does not name is not cleared by C11:**

- ⚠️ **`passing_and_receiving.md:599`/`:601` — two DEMONSTRATIVES orphaned by this round's own marker
  move.** The section read `marker` → *"**That picture** is the first bullet drawn"* → `marker` →
  *"**And this one** is the spatial half"*. Hoisting both markers to the section head stranded both,
  and the renderer put them in a **different audio chunk** from their captions: a listener heard two
  captions, a facts block, three paragraphs and four bullets, then *"that picture"* with two candidates
  and *"this one"* with none. ⚠️ **`risk_management.md:527` had the IDENTICAL structure and WAS
  reworded this round; this twin got the move and not the rewording.** Repaired to self-locating
  wording. ⚠️ **And the first repair collided with existing text** — *"The second"* sat three words
  after *"the passer is reading **the second one**"*, whose referent is *available*, not a picture, and
  which parses coherently wrong because availability IS a spatial property. Now *"The second
  picture"*. **On the page the bold made the two parallel and unambiguous; the renderer strips bold and
  drops the pictures, so the disambiguation existed only in the layer that was never at risk.**
- **`passing_and_receiving.md:202` — a FALSE GLOSS, not a directional flip.** It said both borrowed
  pictures are *"drawn for a winger **pinned on the wall**"*; `winger-dz-reverse`'s caption says
  *"he has **not sealed** you: he has skated past you up the wall."* **Pinned-versus-gone-past is the
  single distinction that section exists to teach.** Pre-existing, but this round made the pictures
  precede it, so the wrong gloss became the last thing heard with the caption no longer available to
  correct it. Now names which picture is which.

⚠️ **This class — a demonstrative rather than a directional word — was invisible to every sweep this
round ran, including the one written to catch exactly this.** A later gate swept all 37 documents
through the renderer, 2,842 chunks, and confirmed `:601` was the only remaining instance.

The
files:
`foundation/on_ice_communication.md`, `foundation/rink_map_and_glossary.md`,
`hockey-iq/playing_without_the_puck.md`, `hockey-iq/puck_support_and_spacing.md`,
`hockey-iq/risk_management.md`, `hockey-iq/scanning_and_anticipation.md`,
`hockey-iq/time_and_space.md`, `systems/breakouts.md`, `systems/defending_the_rush.md`,
`systems/defensive_zone_coverage.md`, `systems/forechecking_systems.md`,
`systems/game_management.md`, `systems/neutral_zone_systems.md`,
`systems/offensive_zone_play.md`, `technique/body_contact_and_battles.md`,
`technique/passing_and_receiving.md`, `technique/puck_handling.md`, `technique/shooting.md`,
`technique/skating.md`.

**Reverted to HEAD, keeping only the marker moves:** `foundation/rules_primer.md`,
`systems/faceoffs.md`.

**Reverted entirely, after the gate found its condensation had removed the BOOK from a rules
passage:** `off-the-ice/mental_game.md`. Line 513 still read *"Two rules are worth knowing
precisely"* with neither named, and `:517`'s *"IIHF and USA Hockey rules cover the same conduct in
comparable terms"* had lost its antecedent. ⚠️ **That is this round's own stated lesson violated
verbatim — *a passage that compares books cannot be compressed by removing books* — and no checker
could see it, because `check_absolutes` requires a book only before a CAP and there was no cap
phrasing, just an absent book.**

**Condensed, audited, repaired, re-audited, repaired again:** `foundation/uk_rules.md`,
`off-the-ice/equipment.md`, `off-the-ice/team_play_and_culture.md`. ⚠️ **`mental_game.md` was listed
here in an earlier draft and had NOT been audited — the gate caught the record contradicting itself
about its own coverage. It is now reverted.**

**Two honest disclosures restored to `uk_rules.md`** after the gate found them deleted: the In-House
Rules carry *"no 'issued by', no publisher, no author and no copyright line anywhere"*, and *"all 474
rule numbers are identical in v1.0 and v1.1"*, with its 30 July 2026 comparison date. ⚠️ **The gate
re-derived the second independently — 472 clauses by anchored extraction, identical sequence, none
renumbered — so 474 sits inside the extraction's tolerance and the load-bearing half is exactly
true.**

**Markers added or removed by the diagram work:** `positions/center.md` (+6),
`positions/defender.md` (+4), `positions/goaltender.md` (moves only), `positions/winger.md` (net 0 —
one added, one removed by review), `positions/switching_positions.md` (+1),
`systems/special_teams.md` (+2), `systems/zone_entries.md` (+5).

**Diagram sources:** `zone_entries.mjs` (5 new, then 4 geometry repairs), `special_teams.mjs`
(2 new, then 3 repairs), `defender.mjs` (the Overview pilot, caption rewritten twice),
`center.mjs` (borrow decisions recorded), `defensive_zone_coverage.mjs` (one caption rewritten to
stand alone). `site/src/data/diagrams.json` is the rebuilt product of those.

**Tooling and site:** `site/scripts/extract-meta.mjs` — skips `![` markers when deriving a page
description, without which the build **aborted after `clean:cache` had deleted `dist`**.
`site/src/styles/global.css` — heading-to-figure spacing, and hiding the 608 empty paragraphs the
renderer leaves.

**Project:** `content_style_guide.md` (the narrowed audience, the ratio rule, the placement rule,
the borrowed-caption rule), `plans/OPEN_ITEMS.md`, and this record.

---

## One gate suggestion refused, and why

The third gate flagged, non-blocking, that four markers in `game_management.md` sit *"between a bold
label and its body"* and should move above the label, citing this round's own rule — *the head of
the smallest unit*.

**Refused, and the reasoning is the rule itself.** The shape is `**1. Manage the puck.**` → marker →
explanation. That is structurally identical to the convention every other marker follows —
`### Heading` → marker → ` ```facts ` block — because **the bold label IS that unit's head.** The
diagram leads the tactic it teaches, which is exactly what the rule asks.

⚠️ **The gate's supporting evidence was that this is the only place in the corpus the shape occurs,
having checked all 304.** That is true and it is not evidence of error: `game_management.md`'s *"What
actually works"* is the only section in the corpus carrying **six independent numbered tactics under
one heading**. A shape that appears once because the structure it serves appears once is not an
anomaly.

**Recorded rather than silently ignored**, because a refused finding that leaves no trace is
indistinguishable from a missed one — and the next gate will see it again.

---

## What this round has not done

⚠️ **THE SITE WAS NEVER SEEN.** `site-reviewer` was dispatched and **could not navigate**: Chrome
refused every `navigate` call with *"Could not verify this site's safety category"* — including to
`example.com`, so it is the extension's categoriser failing for all URLs, not the site or localhost.
**Zero pages rendered, zero screenshots, none of the six viewport × theme cells visited.**

**This matters more than usual, because the rendering change is the largest in the round:** 286
figures moved to the head of their sections, 37 lines of new layout CSS, and a change to how every
page derives its description. The evidence that exists is **static only** — the built CSS cascade,
the DOM shape of all 304 figures, and 49 pages' meta tags. **Nobody has seen a diagram sitting under
a heading.** Specifically unverified: whether the new gap *looks* right under a bordered `h2`;
whether the always-drawn scrollbar cue actually paints at 375 px, where **82 of 304 figures are
`--full`** and roughly 293 px sits off-screen; whether a caption dwarfs its picture on a phone
(**median caption 1,287 chars against a ~297 px picture — an arithmetic estimate, not a
measurement**); whether `defend-squash-and-slide`'s open triangles read on white ice; and every
console message and runtime request, since no page loaded.

**What the static pass did establish, including two corrections to my own claims:**
- The CSS selectors match on **222 of 304** figures — 185 `h3`, 21 `h2`, 16 `h4` — and the other 82
  are mid-section and correctly keep `2rem`. Zero unexpected patterns.
- ⚠️ **My brief asked the reviewer to confirm a diagram now sits CLOSER to its heading than a
  paragraph. That would have been wrong to build, and the CSS does not do it.** `.prose p` has
  `margin: 0 0 1.1rem`, so a paragraph's top margin is zero and its gap *is* the heading's bottom
  margin. The figure values equal those exactly. **Equal is the target; closer would be wrong.**
- ⚠️ **My CSS comment overclaimed** that hiding empty paragraphs "also closes a stray gap below every
  diagram." It does not — below the figure, its own `2rem` margin-bottom already dominates by
  collapsing. The rule earns its place **above** the figure only. Both corrected at the site of the
  claim.
- All **608** empty paragraphs (2 × 304) are figure-adjacent, with zero orphans, so `:empty` is safe
  **on this build** — and *not* safe by construction.

**Two findings the static pass surfaced that this round did not cause and did not fix:**
- ⚠️ **All 304 `<figcaption>` elements carry `aria-hidden="true"`.** A screen-reader user gets the
  SVG `<desc>`, which is purely spatial, and **loses the caption's cardinal-rule caveat** — for the
  Overview pilot, *"a coaching choice rather than a rule… find out which your team plays."* The
  hazard reaches a listener and a reader and **not** an assistive-technology user. Pre-existing;
  belongs to `safety-reviewer`.
- `positions/center`'s meta description and card tile are a mid-argument subordinate clause. Caused
  by the document's first paragraph, not by this round's extractor fix.

**Unreviewed or partly reviewed work:**
- **The repair-of-a-repair pass.** The gate re-derived four of the nine and they hold; a
  `rules-verifier` pass on the remaining five **returned and found three majors**, all restored —
  see the section above. Those restorations were then re-derived from primary text by the gate.
- **No `source-verifier` ran at all.** Not one URL was refetched this round. Every citation defect
  this corpus has ever had fell into provenance, and that dimension is untouched.
- **No `facts-reviewer` and no `content-reviewer`** on the 18 new markers or the reverted documents.
- **The eight new captions were read for the cardinal rule, not against their geometry.** Seven
  measured geometry defects were found in those same eight diagrams, which is a warning that
  captions and coordinates diverge easily.

**Measurement debts:**
- The `high slot` **three-depths contradiction** (35 ft in prose, 20 ft in `offensive_zone_play.md`,
  5 ft drawn) is still open. This round verified the *polygon* against its owner and explicitly did
  not close that.
- `check_zones` compares diagrams **to each other**, so a region drawn consistently wrong everywhere
  is invisible to it.
- The 61 single-host captions containing relative-position wording were never triaged — only the 34
  borrowed ones.
- ⚠️ **A caption can refer to another diagram WITHOUT a positional word**, and no sweep this round
  could see that class at all.

**What the method itself cannot reach.** Two audits, a repair, an audit of the repair, and a gate
all ran on the A2 condensation, and between them found a critical apiece. **None of them could tell
whether what was REMOVED was safe to remove** — every one verified that what remains is true. That
asymmetry is why two documents were reverted rather than repaired, and it is the single most
important thing this round learned about its own process.

