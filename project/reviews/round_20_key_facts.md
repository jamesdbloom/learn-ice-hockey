# Round 20 — the key-facts layer

*Complete. 26 documents, one reviewer each, scoped to a single method.
28 July 2026.*

| | |
|---|---|
| Documents reviewed | 26 of 26 |
| Blocks read | 763 |
| Facts read | 4,319 |
| Criticals found | 7 |
| Criticals fixed | 7 |
| Rulebooks reviewers recovered themselves | NHL, USA Hockey, Hockey Canada, IIHF, PWHL, plus two USA Hockey coaching manuals and the Tulsky paper |

## The brief

The key-facts layer — 763 blocks, 4,319 facts across 26 documents — had never
been reviewed. `scripts/check_facts.py` passes clean on all of it, but it can
only see labels, citations, counts and lengths. It cannot see whether a fact is
**true of its own section**. That is the blind spot this round was scoped to.

Six passes, run separately: traceability · contradiction · the cardinal rule ·
flattening · ownership · dangerous omission.

---

## The finding that reframes the convention

**Pass 1 keeps coming back clean.** Every reviewer so far reports that
essentially every fact traces to a sentence in its own section. The
extract-never-author rule worked.

And it is not the property that matters. Two reviewers reached the same
conclusion independently, from different documents:

> Findings 1, 2, 5 and 6 are all cases where the sentence that was extracted was
> true and the sentence next to it was the one that kept the reader out of
> trouble. **Traceability and safety are different properties.**
> — `passing_and_receiving.md`

> My method — reading each block against its own section — is good at catching a
> fact that says too much and **structurally weak at catching one that says too
> little**. I caught these two because the section headings advertised the
> missing content. A block whose section has a safety point that its heading
> does *not* advertise would have passed me.
> — `skating.md`

**The convention guards against invention. Nothing in it guards against
faithfully extracting the true half of a two-part rule and leaving behind the
half that keeps the reader out of the penalty box.** Every rule in the style
guide's "Key facts blocks" section is about commission. The defects are
omission.

This is the round-9/round-10 shape again: the checker passes, the stated rule
passes, and the defect sits in the gap between what was checked and what
matters.

---

## The next round's brief, written by this round

One reviewer stated it exactly, and it follows from the finding above:

> The productive next-round brief is not "are facts traceable" — it is **"list
> every hedge, exception and rule-set flag in each section's body, then check
> the block for it."** That is the check I ran here by hand, and it is the one
> that produced all seven of the critical and major findings.

---

## Cross-document patterns

These were invisible to individual reviewers and are the argument for reading
the reports together. Where a defect is listed against several documents, each
was found independently by a reviewer who could not see the others.

### The post-icing restriction, stated bare — found in four documents

The style guide records that this bullet *"has now been wrong twice, in opposite
directions, and both errors reached six documents"*. It has gone wrong a third
time, in the facts layer: `switching_positions.md`, `defensive_zone_coverage.md`
and `winger.md` all state the no-change / no-timeout consequence as universal.
**USA Hockey imposes neither** — no substitution restriction in Rule 624, changes
permitted at any stoppage under 204, no icing condition on timeouts in 636(f).

`rules_primer.md`, `defender.md` and `special_teams.md` all carry it correctly,
so the corpus now contradicts itself. `center.md` states it correctly in its
Icing block and bare in its Line Changes block — **the same document, at two
different completenesses.**

### Rule 63.2(iii) — the exception dropped, in four documents

*"Except where there is no glass"* matters more at rec rinks than in the NHL.
Dropped in `switching_positions.md` and `on_ice_communication.md`; the
carve-outs trimmed to a bare count in `defensive_zone_coverage.md`; and
`defender.md` keeps that exception but drops **"directly (non-deflected)"**,
which governs the commonest real case — a clearing attempt that clips a stick on
the way out.

### NHL Rule 49.2 is broken the same way in two documents

Both `passing_and_receiving.md` and `puck_handling.md` state that kicking is
permitted in all zones and carry the *deflection* prohibition, and both omit the
one that decides goals: **you cannot score with a distinct kicking motion**.

A reader of either block, with a loose puck at their feet in the goalmouth,
kicks it in and expects a goal.

In `passing_and_receiving.md` the body does not state it either, so this is a
document defect, not a facts-layer defect. **Sweep all 26 documents for Rule
49.2 before fixing either.**

### Hedges are being dropped in the layer that travels

- **Leverage beats strength** — `puck_handling.md` states it bare. Its own body
  hedges it, its Sources list flags it as unverified, and
  `body_contact_and_battles.md`, which owns it, ends its section with *"Puck
  Handling carries the same claim with the same caveat."* **That sentence is now
  false.** This is §3.3 attribution drift: a sibling vouching for a
  qualification that is not there.
- **The toe flick** — `skating.md` turns *"Stamm's material"* into *"coaching
  sources"* plural, which reads as consensus. The plural has already propagated
  to Common Mistakes and Key Takeaways.
- **The weak-side ratio** — stated with its hedge in the owning block, restated
  bare in a second block in the same document.

### Rule-set divergences are being dropped

The style guide names this as a recurring corpus defect and it recurred:

- **Shorthanded / post-icing restrictions** — `switching_positions.md` states
  the no-change, no-timeout consequence bare. USA Hockey imposes neither.
  `defender.md` and `rules_primer.md` both carry the carve-out correctly, so the
  corpus contradicts itself.
- **Rule 63.2(iii)** — the *"except where there is no glass"* exception dropped,
  and cited as `63.2` where the owners cite `63.2(iii)`. The exception matters
  more at rec rinks than in the NHL.
- **USA Hockey Rule 639** — the poke-check / hook-check exemption appears
  nowhere in `puck_handling.md`, in a section about a stick arriving in your
  skates, which is usually a poke check.
- **BNQ neck protectors** — `switching_positions.md` says HECC-certified is
  required; the rule's own Note accepts BNQ **through 2026-27**, which is the
  season a reader is buying for now.

### F1's job — the owner says one thing, two dependants say the opposite

`forechecking_systems.md` owns forechecks and states, as a `Convention:`, that
**whether F1 hunts the puck at all is a coaching choice** — F1 *steers* in the
1-2-2, 1-3-1 and 1-4, and hunts only in a 2-1-2 or a press. It adds that getting
this backwards *"is expensive"*.

`offensive_zone_play.md` states *"hunt, help, high — F1 hunts the puck"* with a
definite article, no system named and no alternative. `center.md` states F1's
job bare and hedges only which side F3 stands on.

Found independently from both directions. The mnemonic *"hunt, help, high"*
appears nowhere else in the corpus and is absent from the document that owns
forechecking.

### Tag-up, stated three different wrong ways

- `offensive_zone_play.md` cites **Rule 83.1**, which is offside and says nothing
  about tagging up. The provision is **83.3**. It also drops the requirement
  that *all* players clear.
- `center.md` says the offside is nullified *"only when"* all players clear —
  false, because 83.3(ii) also ends it when the defending team moves the puck
  out.
- Both drop USA Hockey Rule 630(d), under which tag-up does not exist below
  Youth 15-Only / Girls 16U / High School / Adult.

Six other documents carry it correctly, so these are outliers rather than house
style.

### CRITICAL — "from behind" imported into a rule that does not contain it

`defending_the_rush.md` states that with the goalie pulled, *"the same foul"* —
a hook, trip, hold or slash **from behind** — is an awarded goal, citing NHL
Rule 57.4.

**57.4 contains no from-behind requirement.** Nor does 25.1. The restriction
belongs to the *penalty-shot* test in 57.3, and the rulebook's awarded-goal
clause reads *"is tripped or otherwise fouled"*. A defender who reads this block
learns that stepping across an empty-net breakaway from the front is not an
awarded goal. It is.

**The corpus already knew.** `risk_management.md` states in terms: *"The 'from
behind' requirement is part of the penalty-shot test in 57.3. It does not appear
in the text of either awarded-goal clause… the empty-net awarded goal is easier
to trigger than the penalty shot, not harder."* It also establishes that 25.1
and 57.4 must be cited as a pair; this fact cites 57.4 alone.

The body is wrong too, so the body-wins rule does not save it.

### "Smothering the puck in the crease is a penalty shot" — false for a goalie, in three documents

NHL 67.4 opens *"If a **defending player, except a goalkeeper**…"*. The
exclusion is dropped in `defending_the_rush.md`, `risk_management.md` and
`defensive_zone_coverage.md`. `rules_primer.md` gets it right by saying "a
skater". Read aloud to a goaltender — which is what the podcast pipeline will
do — the fact is simply false.

### Unverified calls, laundered through a pointer

`on_ice_communication.md` daggers every call *"no published coaching source
documents as spoken calls"* and tells the reader to treat them as
widely-used-but-unverified. `defending_the_rush.md` reproduces five of them —
"odd man", "I've got the pass", "take the shooter", "pick him up", "I've got
him" — with the labels stripped.

And the owner **points readers to `defending_the_rush.md` as "the authority"**
for exactly these calls. So following the corpus's own pointer takes you from
the labelled version to the unlabelled one. Two further calls in that fact
("trailer", "I'm back") appear in the owner document at all, and "high"
collides with the owner's daggered *"I'm high"*, which means something else.

### A rules prohibition that does not exist

`forechecking_systems.md`: *"no pressure is permitted on [a puck-handling
goaltender]"*. NHL Rule 69.4 permits incidental contact on a goalie playing the
puck outside the crease, and 56.2(iii) penalises only a *deliberate* check on a
goalie not in possession. `goaltender.md` and `rules_primer.md` both state it
correctly. The reviewer rated it Major on the grounds that it makes a reader too
passive rather than penalised, and explicitly asked the next round to re-rate
it — a reader in a no-trapezoid league declines a legal, valuable forecheck
because they think it is illegal.

### A claim attributed to a paper that does not contain it

`neutral_zone_systems.md` credits Tulsky with the finding that *"how a defending
team manages its blue line shapes the opponent's offence more than the
opponent's own entry strategy does"*.

The reviewer **downloaded the MIT Sloan paper and read it.** The 330 games, the
2011-12 season and the carry-versus-dump ratio all check out. The ranking claim
does not appear. What the paper concludes is symmetric — neutral-zone score is a
function of the entries a team *gets and allows*. The fact then drops the sample
size, the dates, the second-hand flag on Sznajder, and the attribution entirely.

The same reviewer checked Tulsky's Table 3 against a second fact claiming a
deliberate dump is *"worth vastly more than a turnover at the blue line"*. Net
value per entry: carry **+0.42**, dump-and-chase **+0.12**, failed carry
**−0.08**. The paper's own framing runs the other way — *"failed attempts to
carry the puck in actually lead to fewer shots against than dump-and-chase."*

### A negative-existence claim its own owner contradicts

`shooting.md` says of the royal-road figure: *"no sample size, no shot-by-shot
counts and no rules for applying the categories have ever been published."*

`offensive_zone_play.md` — which the style guide names as the **owner** of that
figure — gives the sample: Boyle, for the OMHA, reporting that Valiquette
*"reviewed 100 games during the 2014/15 NHL season"*, broken into seven
categories.

This is the class the style guide says ordinary review cannot catch: a claim
that no evidence exists, where the contradicting evidence was already sitting in
a sibling document.

### The qualification layer is systematically absent from the extracted layer

`offensive_zone_play.md`'s two evidence subsections are the only two teaching
subsections in the file with **no facts block** — and they are where every
qualification lives: the "attributed but uncheckable" labels, the warning that
an NHL.com figure is a step between distribution bands rather than percentage
points added, the volunteer-tracked caveat on the 15.50% royal-road figure.

The *conclusions* those sections qualify do reach the facts layer. The
qualifications do not. Of 204 facts in that document, two carry a number.

> **If this pattern holds across the other 25 documents, the corpus's entire
> qualification layer is missing from the layer the podcast pipeline reads.**
> That is the highest-value thing for the next round to test.

### One genuine contradiction between documents

`puck_handling.md` says the spin-off pushes off the **outside** edge of the
outside skate and cites `skating.md` as its authority. `skating.md` says the
opposite in all three places it describes a turn — the outside skate rides its
**inside** edge. One of them is wrong.

---

## Infrastructure finding: the rulebooks are missing

Every reviewer reported the same thing. The primary-source paths named in
`content_style_guide.md` are stale:

| Rulebook | State |
|---|---|
| NHL | present (`/private/tmp/nhl_rules.txt`) |
| USA Hockey | **absent** — one reviewer recovered it by fetching the PDF from a document's own Sources; another found only a 231-byte error page |
| IIHF | **absent**, and iihf.com returns 403 to automated fetching |
| Hockey Canada | **absent** |

**Consequence: every IIHF and Hockey Canada claim in this round is unverified.**
Two reviewers said so explicitly and declined to clear them. The
`rules-verifier` agent depends on these paths and is currently half-blind.

This needs fixing before the next rules round, and the fix is not "re-download"
— it is to record how they were obtained, since the style guide's own
instructions no longer work.

---

## What this round cannot have found

Recorded per the standing requirement, because it scopes the next round.

- **Whether the bodies are right.** The brief made the body the source of truth
  by fiat. A fact faithful to a wrong section passes every pass.
- **Adjacency.** Every reviewer checked facts *downward* into their bodies; none
  checked facts *across* blocks. The podcast pipeline reads the layer straight
  through as imperatives with no headings, and one reviewer flagged a candidate
  contradiction of exactly that shape (forward stance "weight on the balls of
  the feet" against backward stance "weight over the middle of the blade").
- **Reverse ownership.** Reviewers checked what their file points *at*, never
  what points *at it*. The style guide's sharpest recorded failure ran that
  direction — thirteen documents citing a rule to an owner that had never
  mentioned it.
- **IIHF and Hockey Canada**, per the infrastructure finding above.
- **Omission generally**, per the finding at the top. The method is
  structurally weak at it, and that is now the known blind spot.

### `shooting.md` owns shot-location value, and that section has no facts block

The style guide's ownership table names `shooting.md` as owner of *"slot vs
perimeter conversion, point shots, the inner/outer slot split"*. The section is
`## Where Shots Are Worth Taking`, which the document itself opens with *"This
is the part that changes how many goals you score."*

It carries **no facts block**. Nor does `## Release Speed Beats Shot Speed`,
whose first line is *"Here is the insight that reorganises everything else."*

`check_facts.py` cannot catch this: it reports a document with *zero* blocks and
otherwise validates only the blocks that exist. **Nothing enforces one block per
teaching section**, so the layer can silently omit a document's central idea.


---

## The seven criticals

All fixed. Every rule was re-read in the primary text before editing.

| # | Document | Defect |
|---|---|---|
| 1 | `passing_and_receiving.md` | NHL 49.2 carries **two** prohibitions; the corpus carried one. Omitted: you cannot score with a distinct kicking motion. Body defective too |
| 2 | `puck_handling.md` | Same defect, same rule, found independently |
| 3 | `zone_entries.md` | Told the **defending** team a delayed-offside shot *"cannot legally end up in your net — play it out"*. Rule 83.4: the one way it scores is you putting it there |
| 4 | `defending_the_rush.md` | Imported "from behind" into Rules 25.1 and 57.4, which do not contain it. Also restored 67.4's *"except a goalkeeper"* |
| 5 | `risk_management.md` | Told a **goaltender** that freezing the puck in his own crease concedes a penalty shot. 67.4 exempts him. Its own body was right |
| 6 | `goaltender.md` | Compressed USA Hockey 614(c) to one of four triggers. The missing one catches the most ordinary thing a goalie does behind the net |
| 7 | `body_contact_and_battles.md` | **Safety-critical.** §5 teaches how to deliver a body check across four blocks; none said the section only applies where checking is legal |

### Two systemic divergences, fixed corpus-wide

Neither was found by a reviewer. Each was found by reading reports side by side
and noticing that a rule appeared everywhere and its exception nowhere.

- **Post-icing restrictions** — 13 facts across 9 documents stated the
  no-change/no-timeout consequence as universal. USA Hockey Rule 624 contains
  no substitution language at all; 636(f) attaches no icing condition. The
  style guide records this bullet has already been wrong twice, reaching six
  documents each time. This was the third time.
- **Puck out of play** — 9 facts across 9 documents stated NHL 63.2(iii) as
  universal. USA Hockey 631(a)/(d) make it a faceoff; only a *deliberate*
  shoot-out draws a minor under 610(c). So the panic clearance the rule is
  invoked for throughout the corpus is a faceoff in the book most North
  American rec and youth readers play under.

---

## What the round proves about the method

**Traceability came back clean in all 26 reports.** Not one reviewer found a
fact drawn from a neighbouring section, another document, or authored outright.
The extract-never-author rule worked exactly as specified.

**And all seven criticals were omissions.** Every one is the true half of a
two-part rule, extracted faithfully, with the half that keeps the reader out of
the penalty box left behind.

Four reviewers reached that conclusion independently. The sharpest statement of
it:

> A reviewer running only PASS 1 on this file would have returned nothing.

**Three of the seven had their correct answer already in the corpus** —
`rules_primer.md` held the delayed-offside carve-out, `risk_management.md` held
the from-behind analysis, `puck_handling.md`'s own body held the kicking
prohibition. A cross-document consistency pass would have caught them with no
rulebook access at all.

> The convention's rules are all about commission. The defects were all
> omission. That asymmetry is the round's finding, and it is why the next
> round's brief is the one written at the top of this document.
