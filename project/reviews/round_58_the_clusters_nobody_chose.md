# Round 58 — the clusters nobody chose

Round 57 committed at `fda5dc5` and pushed. **Its fourteenth gate cleared on the thirteenth attempt**, and its
closing lesson was not about any rule: it was that **three cross-agent contradiction checks ran that round and
a contradiction survived the first two, because nobody chose that cluster.** Choosing the cluster is the part
nothing mechanical does.

**Round 58 is that lesson applied.** Every finding below came from deliberately picking a cluster no previous
round had checked.

---

## The method that found almost everything: intersect a rule-number grep with a phrase grep

⚠️ **A phrase-only census misses the file that carries the substance without the vocabulary.** The
delay-of-game cluster's best finding was in **the only file in `content/` carrying that cluster's rule numbers
with the phrase "delay of game" nowhere in it.**

**Run both greps, diff the sets, and read the set difference.** The icing cluster's run produced three
set-difference candidates and **all three were false positives** (`Rule 6.1` matching `Rule 6.10`; `noticing`
matching `icing`) — **a measured-empty result, and worth as much as a hit.**

⚠️ **And include Sources trailers, `Notes on verification` sections and edition notes.** Round 57's Rule 76.7
defect had three instances living **only** there.

---

## ⚠️ The dispatcher relayed a wrong verdict, and an agent refused to write it

A cluster check reported that Hockey Canada's **Interpretation 5 to 10.2(a)(v)** *"decides the one puck case
the OPPOSITE way"* from a puck-location test. **It does not.** At the instant of the cover the puck is
**outside** the crease, so a puck test yields exactly the minor the Interpretation gives, **for the reason it
gives**.

⚠️ **And the corroboration neither the finder nor the dispatcher had: USA Hockey Casebook Rule 614 Situation 4**
(`usah_casebook.txt:12746-12756`) puts the **same fact pattern** under an expressly puck-located test and
reaches the **same answer** — *"The location of the puck at the instant it is covered or held is the
determining factor… If the player bats the puck out of the crease and into their body, only a minor penalty
would be assessed."* **Hand on the puck IN the crease and pull it out = penalty shot. Bat it out and THEN
cover = minor.** **The two books converge.**

**Writing the briefed repair would have put a false statement into the corpus.** ⚠️ **This is CLAUDE.md's
"refute the brief before acting on it" working exactly as designed, and it is the second time in two rounds
that an agent has declined to write what the dispatcher told it to.**

**What was genuinely defective, and was repaired:** the facts line cited HC 10.2(a)(v) as though the clause
wrote the puck test. **It locates the INFRACTION.** Confirmed-but-incomplete — a qualification, not an
opposite.

---

## ⚠️ A SECOND locator-corruption mechanism, distinct from the form-feed trap

Round 57 established that Python's `str.splitlines()` splits on **form feeds** and `grep` does not, inflating
line numbers by a few hundred and growing with depth.

⚠️ **That does not explain this.** A report cited USA Hockey **407(c)** at `usah.txt:3800-3803`. The rule is at
**`:2778-2780`**, and **`:3800` is page furniture** (*"66 USA Hockey"*). **Form feeds account for ~75 of the
1,020-line gap.**

⚠️ **The wrong number sat inside the Rule 610 region that agent had been working in — a locator that lands
where the READER was looking, not where the RULE is.** **It is more dangerous than the form-feed class,
because the number is plausible: it points into real rule text, just the wrong rule's.**

**Verify a locator by reading it, never by whether it looks reasonable.**

---

## A seventh extraction mode

`usah.txt` Rule **610(b)**'s *"who has an opportunity to play the puck prior to being pressured"* **wraps as
*"who has / an opportunity"***. ⚠️ **A phrase grep alone returns a FALSE ABSENCE.** Distinct from the
form-feed, furniture-splice, side-tab, page-break-straddle and de-hyphenation classes already on record. **The
whole-file `re.sub(r"[^a-z]","")` pass defeats this one.**

⚠️ **Two clauses in this round were split by running header MID-CLAUSE: USA Hockey 610(e) by ELEVEN lines,
636(f) by EIGHT — and in 636(f)'s case the second of its two clocks is on the far side of the splice, which is
how the corpus came to state that it has only one.** **Read windows; do not grep for absences.**

---

## The delay-of-game cluster — never checked before, 226 phrase hits and 369 rule-number hits

### Repaired

- **`defending_the_rush.md:622`** cited HC 10.2(a)(iv)-(v) as though the clause wrote the puck test. Now:
  *"three books put the test in rule text; Hockey Canada 10.2(a)(v) locates the infraction; only
  Interpretation 5 decides on the puck."*
- ⚠️ **`defending_the_rush.md:623` and `:636` contradicted themselves INSIDE ONE PARAGRAPH** — *"neither prints
  the contrast case, so do not carry the outside-puck minor into either book"*, **followed in the same
  paragraph by a quotation of Hockey Canada's Interpretation 5 awarding exactly that minor.** Also contradicted
  `special_teams.md:684`. **Found by the intersection census, not by the cluster check that was looking for it.**
- **`special_teams.md:798`** lacked the pressure framing its sibling `:675` has, in a 3-on-3 block whose advice
  is *"pass back to the goalie"*. ⚠️ **A first pass dropped *"deliberately"* — rule-text wording — and the
  whole-file word-diff caught it.**
- **`goaltender.md:1217`** labelled a four-book list *"the pads-and-net act"* where **Hockey Canada 10.1(vi)
  names the netting only.** The act described **is** in all four; the label implied the pads limb was too.
- **`goaltender.md:402`** stated *"a bare minor under three books"* with the scope flag living in a different
  line. ⚠️ **NHL/IIHF 67.5 upgrades it to an AWARDED GOAL once the goalie is replaced for an extra attacker.**
  Fixed by **extraction, not authoring** — the body at `:417` already carried the flag in those words.
- **`uk_rules.md:390`** half-quoted IHUK Rule 5.1, omitting *"to be served at the start of the game or at the
  first stoppage if identified later."*

⚠️ **The dispatcher's brief truncated NHL 67.5 at *"a goal shall be awarded"*, omitting the next sentence —
*"In order to award a goal in this situation, the goalkeeper must have been replaced for an extra attacker,
otherwise a minor penalty shall be assessed."* That sentence is what made the existing fact UNSCOPED rather
than WRONG. The truncation would have overstated the defect.**

### Reported, not repaired

**Finding 4 was substantially overstated in the brief.** `special_teams.md:675` and `:798` were said to state
NHL 63.2(vii) *"literally"*. ⚠️ **Neither did** — `:675` already carried *"with nobody pressuring him"* and
`:798` *"deliberately… to cause a stoppage"* plus the *"unless he is actually being checked"* quote. **Both
were already narrower than the bare text.** `:675` sits at **299/300** and every reword cost a citation or a
scope flag. **Reported, not edited.**

### Measured empty

The *"USA Hockey writes no defending-zone limb at all"* negative was **re-derived independently** — not taken
on relay — over both volumes for every construction of `outside the playing area | out of the playing area |
out of play`. **Every clause is either deliberateness-gated or a faceoff.** Then **all 22 corpus sites
asserting it were read: zero contradictions.**

⚠️ **And a candidate contradiction the agent raised and then REFUTED ITSELF:** `faceoffs.md:198/201/202`'s
*"Hockey Canada writes no five-second line-up clock at all"* — HC 6.1(d) **does** contain two five-second
periods, **but they are line-change windows, not a post-whistle line-up clock, and `:216` already draws that
distinction in terms.** **The corpus was more precise than the first reading.**

---

## The goalkeeper red-line claim — EIGHT sites, four of them grep-missed

**`rink_map_and_glossary.md`, `defender.md` and `on_ice_communication.md` told a reader *"neither book limits
where a goalkeeper may play the puck."*** **Both books do:**

- **USA Hockey 407(c)** (`usah.txt:2778-2780`): a **minor** for deliberately participating in the play beyond
  the centre red line.
- **Hockey Canada 4.13(c)** (`hc_layout.txt:2818-2821`): routed to **Interference under 8.3(a)**.

⚠️ **And the divergence is sharper than the claim: the NHL and IIHF judge it on the PUCK's position
(*"The position of the puck is the determining factor"*); USA Hockey and Hockey Canada judge it on the
GOALKEEPER'S SKATES** (USAH Casebook 407 Sit. 13; HC Interpretation 2 to 4.13(c) — *"The determining factor is
the position of the goaltender's skates and not the position of the puck"*).

⚠️ **So a goalie told "no restriction", who reaches back over the red line for a puck STILL ON HIS OWN SIDE, is
legal under the NHL and IIHF and a MINOR under both North American amateur books.**

**Four of the eight sites were grep-missed**, and the two worst are **Key Takeaways that explicitly say *"that
is not the same as no restriction"* and then enumerate ONLY the freezing rules** — so a reader who took the
hedge seriously still believed the red line did not exist.

**A cap route worth recording:** `on_ice_communication.md:379` needed 272 chars against the 200 `Read:` cap and
the adjacent `Rule:` measured exactly **300/300**. The agent **relabelled `Read:` → `Rule:`** — the honest
label for a line that is pure rulebook text with two citations — **which also lowered the coaching count from
8 to 7.**

⚠️ **A one-digit trap in the dispatcher's brief, caught and not propagated: NHL 27.7 and IIHF 27.6 are the
CENTRE-RED-LINE rules. The trapezoid is NHL 27.8 and IIHF 27.7 — the two books number it differently by one.**

---

## The icing / no-line-change cluster — 477 lines across 27 documents, not the 8 estimated

**The four books, established from primary text:**

| | No-change on icing? | Exceptions |
|---|---|---|
| **NHL 81.4** | Yes, universal | **3** — pulled goalkeeper, injured player, strength-changing penalty |
| **NHL 82.1** | Yes, reaching **63.8 as well as 81** | **3**, identical |
| **IIHF 81.4** | Yes, universal | **4** — adds *"a Player with a broken skate"* |
| **IIHF 82.1** | Yes | **3** — omits the broken skate |
| ⚠️ **USA Hockey 624** | **NO BAR OF ANY KIND** | n/a |
| ⚠️ **Hockey Canada 6.7(d)** | Yes — **U18AAA, Junior, Senior at the Member's option only** | **3** |

⚠️ **USA Hockey's absence is a CHECKED NEGATIVE, twice, independently** — five search constructions over both
volumes, plus **all 24 Casebook Situations under Rule 624**, of which **only Situation 23 mentions a line
change** and it is a nullification case. `flat` counts for `broken skate`: IIHF v1.1 **1**, IIHF 2026/27 **2**,
NHL **0**, USA Hockey **0**, Hockey Canada **0**.

### The critical: a two-book bar taught as a law, with the injury exception missing

**`breakouts.md:691`** — an **`Options:` value voiced standalone** — and **`:700`, the body bullet of the same
section**, both priced a clear against *"a defensive-zone draw with no change"*, flat.

⚠️ **Two harms, and the second ranks it: the bare words *"no change"* carry NO INJURY CARVE-OUT.** NHL 81.4
permits substitution *"to replace an injured player"*. ⚠️ **The corpus names that harm itself** at
`defender.md:566`: *"a pair that believes the bar is absolute will leave a hurt teammate on the ice for a
defensive-zone draw, and the rule does not ask them to."*

⚠️ **A textbook LAYER TEST result — and of the SECTION, not the document.** The same file gets it right
**three times in its own facts layer** (`:86`, `:428`, `:429`) and once in body (`:444`) — **in a different
section. The listener hearing §Against a full-ice press hears only the two defective statements.**

**`game_management.md:1000`** carried the same shape in Common Mistakes, with **three of four layers correct
and the fourth naked.** And `:148`'s *"no way to rest them"* is a flat absolute, false under USA Hockey.

**The cap route:** `Rule:` is exempt from `MAX_COACHING_FACTS`, so **two `Rule:` values were added and no
coaching value was evicted.** The repair ends *"so a hurt teammate comes off; a tired one does not."*

### Verified correct — the load-bearing claims that held

**The IIHF 81.4/82.1 internal disagreement is real and the corpus states it accurately in ELEVEN places**,
every one carrying the *"do not plan a change around it"* qualification. **`faceoffs.md:983-986`** was called
the strongest passage in the cluster — Situations **81.6, 81.7, 81.8** verified verbatim, reported **as adverse
authority**, noted as reading narrower than 81.4 itself, and ranked below the rulebook **on the Handbook's own
Foreword.**

⚠️ **And the corpus did NOT fall into a trap the brief warned of:** IIHF **2026/27 Appendix VII** carries a
*Rule 84.7 Overtime Operations – No Return* pilot **using the same four-item list**, under the annex's own
words *"concepts for potential future rule changes"*. **The corpus quotes that framing and states plainly it is
not in force.**

**Also upheld:** every one of seven sites correctly scopes the bar to **the icing team**, several actively
correcting the misreading. **`defender.md:566`'s** observation that **NHL 63.8's second paragraph carries only
two** of the three exceptions — verified precisely. **Five/eight seconds:** NHL/IIHF 82.2 five and eight; **USA
Hockey 204(a) five and five; Hockey Canada 6.1(d) five and five** — `faceoffs.md:216` states all four correctly
and warns *"do not carry the eight seconds into a North American game."*

### An absence, reported as a finding rather than acted on

**Hockey Canada has THREE no-change triggers. The corpus carries two** — 6.7(d) icing and 6.4(a) accidental
puck out of play — **thoroughly and accurately. It mentions Rule 6.1(g) nowhere** (`hc_layout.txt:3472-3478`),
the **dislodged-goal no-change**, Hockey Canada's counterpart to NHL/IIHF 63.8's first limb — **a limb the
corpus covers for the other two books. Nothing false is stated.**

---

## USA Hockey Rule 629 — a whole rule absent from the corpus, and it penalises the action the corpus teaches

`grep -rn "629" content/` returned **2 hits, both page numbers inside citation trailers.**

```
629(a)  usah.txt:4599-4603  "A major plus a game misconduct penalty shall be assessed to any
        player who leaves the players' bench or the penalty bench during an altercation…"
404(b)  usah.txt:2532-2540  a game misconduct "shall also be suspended for the team's next game."

Casebook 629 Sit 1  usah_casebook.txt:14970-14975
  A player whose penalty had EXPIRED left the penalty bench during an altercation and skated
  to his own bench WITHOUT joining in: "Each player would be assessed a major plus game
  misconduct penalty… No player may leave the players' or penalty bench AT ANY TIME during an
  altercation."
Casebook 629 Sit 2  usah_casebook.txt:14987-14988
  "…NOT JUST THE FIRST PLAYER TO DO SO."
```

⚠️ **The second belief is the dangerous one: it penalises the player who SKATED AWAY — which is the exact
action the document's own fighting section instructs.** The repair opens on that collision and closes with an
explicit firewall against the downed-player instruction.

⚠️ **AND THE FOLKLORE IS WRONG IN BOTH DIRECTIONS, which the dispatcher's brief missed.** **NHL 70.3/70.6 and
IIHF 70.3 attach the automatic game misconduct to *"the first OR SECOND player to leave."*** So *"only the
first man off"* is wrong **and** *"everyone gets the same"* is wrong. **The books differ and the repair says
so.** Covered in all four layers plus a Check-yourself question; **no division or age scope in any book**,
unlike body checking.

## Boarding reaches a TRIP under USA Hockey — and only under USA Hockey

**`usah.txt:3519-3520`**: *"Boarding is the action where a player **pushes, trips or body checks** an
opponent…"* — and **Casebook 603 Sit 3**: *"the boarding call is **preferred** to draw attention to the more
aggressive infraction."*

⚠️ **Checked and it is unique: NHL 41.1, IIHF 41.1 and Hockey Canada 7.2 all read *"checks or pushes"***
(`nhl_rules.txt:5381`, `iihf_rules_v1.1.txt:3880`, `hc.txt:5969`). **A reader treated a stick trip near the end
wall as a two-minute trip; under USA Hockey it is boarding, preferred over tripping, and 603(a) writes no bare
minor — the floor is minor plus misconduct.**

## Head contact: the rule says "may", the Casebook says "must"

`usah.txt:4303-4304` — *"A match penalty for reckless endangerment **may** also be assessed"* — against
**Casebook 620 Sit 4** (`usah_casebook.txt:13883-13886`): any check with excessive force to intimidate or
punish that contacts the head ***"must be assessed as a match penalty."*** ⚠️ **The corpus stated the ceiling
correctly and missed that it is MANDATORY for exactly the hit it already warns about.**

## ⚠️ A polarity rule, established while deciding whether to write a permission

USA Hockey **603(a)** contains *"'Rolling' an opponent along the boards where they are attempting to go
through too small an opening is **not** considered boarding"* — **and the corpus quoted the sentence before it
and the sentence after it and stopped one short**, making the rule look harsher than the book is.

The agent wrote it **in the body only, never in a facts block**, with four guards, and verified the renderer
keeps permission and guards in a **single `<p>`** so it cannot be heard naked. Its reasoning is the reusable
part:

> ⚠️ **"Body-with-no-facts is a critical for a HAZARD. For a PERMISSION the polarity inverts — body-only is
> the conservative placement, and putting it in the extraction layer would have been the defect."**

## An agent disagreed with the dispatcher's framing and explained why — correctly

The brief suggested Casebook 620 Situations 1 and 2 are in tension and that the corpus carries only Sit 1.
⚠️ **Both halves were wrong.** Sit 2 **is** in the corpus, in Common Mistakes. And the two are not in tension:
**Sit 1's question is *"How much force must be behind a check"* — it answers about FORCE. Sit 2 carves on
CIRCUMSTANCE.** ⚠️ **And Sit 2's carve-out is the referee's judgement, not the player's, so teaching it as a
player-facing caveat "would hand a reader an excuse on the highest-consequence hazard."** Left alone.

## ⚠️ FOUR errors in one dispatcher brief, all caught

1. **`620(c)` is at `usah.txt:4303-4304`, not `4301-4302`** — those lines are **the tail of 620(b)**.
2. *"The corpus carries Sit 1's substance and not Sit 2's"* — **false; Sit 2 is in Common Mistakes.**
3. The *"first man off"* framing — **book-specific, not simply false.**
4. The agent itself **read the wrong NHL edition first** (`nhl_rules_2024-25.txt`), caught it, re-verified every
   quote against `nhl_rules.txt` 2025-2026, and **recorded that it had done so in the Sources trailer.**

---

## USA Hockey 610(e) — a penalty shot in no document, and the brief framed it a book too narrow

**Confirmed absent corpus-wide**, and the clause confirmed by **reading the window**: it is split by **eleven
lines of running header** between `usah.txt:3793-3798` and `:3810-3811`. All eleven Casebook Situations under
Rule 610 searched for `helmet|facemask` — **zero. The clause has no interpretive layer.**

⚠️ **The dispatcher framed it as a standalone penalty-shot clause. It is the ESCALATION LIMB of a four-book
rule whose floor USA Hockey writes elsewhere, at 304(e). Written as briefed, the corpus would have carried a
three-book rule as one book's oddity.**

| Book | Deliberate removal to force a stoppage | On a breakaway / penalty shot | Last 2 min or OT |
|---|---|---|---|
| **NHL 9.6** | minor, delay of game | **goal awarded** | **not written** |
| **IIHF 9.6** (identical in both editions) | minor, delay of game | **goal awarded**, repeated at **25.4** | **not written** |
| **USA Hockey 304(e) + 610(e)** | minor, reaching *"a goalkeeper or skater"* | penalty shot / optional minor | **yes** |
| **Hockey Canada 3.6(d) + 4.11(a)(iii)** | routed to 10.1(a) | penalty shot, goaltender **or any defending player** | **yes**, goaltender only, adding **blocker or trapper** |

⚠️ **NHL 25.4 OMITS the mask clause that IIHF 25.4 carries.** Outcome is the same because NHL 9.6 reaches it —
**but a reader who checks only the awarded-goal rule will not find it.** And a carve-out nobody had:
`usah.txt:7195-7198`, **sled hockey** — the same act during a penalty shot is a minor and the shot is
**re-awarded, not conceded.**

**The negatives were attacked, not assumed:** *"neither the NHL nor the IIHF writes a last-two-minutes limb"*
rests on reading **every** occurrence of `helmet`, `face mask` and `facemask` in both books — **not on a
summary table.**

### ⚠️ The agent caught its own draft committing the round's named defect, in reverse

It first wrote *"USA Hockey is the simplest of the three"*, having checked three books. **Hockey Canada 3.6(d)
writes it too — and writes the WIDEST version of all**, stopping play for a lost *"helmet, facial protector,
blocker or trapper, or skate blade"*, with its exception turning on **the goaltender's safety** rather than on
possession. ⚠️ **That is "three books' provision presented as four" running in reverse, and it survived into a
first draft.** Corrected before writing.

## The broken-stick disposal — a FIVE-book provision, and the NHL and IIHF are a tier harsher

⚠️ **The dispatcher's framing was one book too narrow, twice.**

1. **The allowance is in five books.** NHL and IIHF are word-for-word (*"to the side of the ice (and not over
   the boards)"*); USA Hockey writes *"rink"*, Hockey Canada *"playing surface"*, CARHA *"rink"*. ⚠️ **The
   bracketed exclusion is the only part all five share.**
2. ⚠️ **NHL/IIHF 53.4 gives a MISCONDUCT only for an *"unintentional"* or *"accidental"* throw; 53.5 gives a
   GAME MISCONDUCT — suspension for the balance of the game — for an INTENTIONAL one. Depositing a broken
   stick over the boards is intentional on its face.** **This is the version British players are under**, and
   that negative was earned: `eiha_inhouse_2026-27.txt` searched for `throw`, `discard`, `over the boards`,
   `outside the playing area`, `Rule 53` — **all zero**, with the In-House construction clause referring it to
   the IIHF book.

**USA Hockey's own version is mandatory** — Casebook 637 Sit 11: *"the Referee has no choice but to assess a
misconduct penalty."* **The corpus told a player to get rid of a broken stick and never said the disposal was
regulated. Over the boards is the natural instinct.**

⚠️ **The conflation trap the brief warned about bit anyway.** A first draft closed *"Drop it, or flick it along
the ice to the boards"* — **which would have pushed a BRITISH reader against IHUK Rule 10.3's undiscretionary
*"must drop their stick immediately"*, already quoted two paragraphs above in the same document.** Rewritten so
the British reader is told to open their hand where they stand.

## A correction to the dispatcher's own absence check

The brief said `grep -rn "610(e)\|610(d)\|610(h)" content/` returns zero. ⚠️ **It returns SIX** — all of them
the **lettering-divergence disclosure** at `rules_primer.md:330`, `:811`, `:1020` and `faceoffs.md:1115`.
**None is the helmet clause, so the conclusion held — but the stated basis for it was wrong.**

## Reported and deliberately not actioned

⚠️ **`eiha_inhouse_2026-27.txt:251` makes a detached helmet a MISCONDUCT under In-House Rule 12, where
`equipment.md`'s IIHF 9.6 bullet says *"Minor penalty, no warning."*** **A British divergence the Helmets
section does not carry.** Verified text; **left for a dedicated pass rather than widening the edit.**

---

## NHL/IIHF 63.8's FIRST limb — a consequence stated in no document, for any book

**Three documents told a reader the TIMEOUT is gone after a dislodged net. None told them the CHANGE is gone.**
⚠️ **A defenceman who knocks his own net off to buy a whistle for a tired line gets the whistle and not the
change.**

⚠️ **And the dispatcher's premise was wrong in the finder's favour:** the brief said 6.1(g) was *"Hockey
Canada's counterpart to a limb the corpus covers for the other two books."* **The corpus covered it for NO
book.**

**Established, with the asymmetry that makes it easy to get wrong:**

| | First limb | Exceptions |
|---|---|---|
| **NHL 63.8** | *"displaced accidentally by a defending skater or goalkeeper"* | **THREE** |
| **NHL 63.8 second limb** | frozen puck from beyond centre | ⚠️ **TWO — no pulled-goalkeeper limb** |
| **IIHF 63.8** | *"by a defending Player"* | same three, identical in both editions |
| **Hockey Canada 6.1(g)** | *"by any defending player, including the goaltender"* | U18AAA/Junior/Senior-at-option, incorporating **6.7(d)(i) only** |
| **USA Hockey** | ⚠️ **no counterpart FOUND** | — |

⚠️ **HC 6.1(g) incorporates 6.7(d)(i) and NOT 6.7(d)(iii)** — so **Hockey Canada's express permission to take a
timeout after an icing is NOT carried across to the dislodged net**, and the document does not claim it is.
⚠️ **And NHL/IIHF 63.4: an ATTACKING player displacing the net gets a delayed whistle, a different faceoff and
NO substitution bar** — *"without it a reader could think any dislodged net freezes a bench."*

**The negative was earned, not inherited:** both USA Hockey volumes searched flattened and de-hyphenated,
including every `goal frame|goal post` within 300 characters of `substitut|line change|change of player` —
**zero in either.** Written as *"no counterpart was found"* with the search named, **not** as *"USA Hockey has
none."*

⚠️ **And "three exceptions only" was NOT written until the interpretation layer had been read** — **IIHF
Situation Handbook 63.32** restates exactly the three and adds no fourth. **That restraint is the 614(c)
history being applied.**

## ⚠️ Three dispatcher errors, each of which made the finding SMALLER than the books support

1. **The bench-clearing route is in ALL FOUR books, not two.** **NHL and IIHF Rule 83.3** both name *"his
   players' bench"* / *"their Players' bench"* (`nhl_rules_layout.txt:7558-7568`,
   `iihf_rules_v1.1.txt:6892-6896`). **Only USA Hockey's Casebook attaches a PENALTY to the wrong door.**
   ⚠️ **And 83.3 sources the *"both skates off the ice"* clause the corpus had been asserting UNSOURCED.**
2. **Hockey Canada does NOT "match" as briefed.** Interpretation 11 matches on the door and on the replacement
   having to clear; **it rules only on whether the offside is nullified and carries no bench-minor
   consequence.** The document says so rather than presenting HC as writing the penalty.
3. ⚠️ **The precedence "unattacked negative" PARTLY FALLS.** It holds for the **rulebooks** — but **the IIHF
   answers it in its Situation Handbook**, the layer nobody searched: **Situation 81.20** (*"whenever possible
   with player safety at the forefront, the linesperson will allow the icing to be completed"*) and **81.1**,
   which turns it the other way where the offside attacker will reach the puck first **or may make contact**.
   ⚠️ **81.20 ties it straight to this task's other half: *"it will affect the offending team's ability to make
   a player substitution."*** **So three of four books answer it, none in its playing rules, and the NHL is
   genuinely open** — it publishes no case book.

## ⚠️ An eighth renderer trap, found while writing this material

***"630(a) Note 2"*** rendered as ***"Note two inches"*** — **the transformer read `2"` as an inches mark.**
Fixed by removing the quotation marks, and confirmed by re-render: `inches` now appears **once** in the whole
document, on the blue line's twelve.

**Joins the list: `Never —` inverting a value phrased as a direction; a `Rule:` imperative reading as an
instruction to commit the offence; `(2)` voiced as *"its (two) is"*; the 🇬🇧 flag rendering as *"For British
readers,"*; `2026/27` needing *"edition"* not *"one"*; and `(1)`/`(2)` expanding inside a verbatim quotation.**

---

## ⚠️ A relayed finding that was RIGHT about the divergence and WRONG about the act

The dispatcher relayed: *"`eiha_inhouse_2026-27.txt:251` makes a detached helmet a MISCONDUCT."*

⚠️ **Wrong in the way that matters most to a reader. NEITHER BOOK PENALISES THE HELMET COMING OFF. Both
penalise STAYING ON THE ICE AFTER IT DOES.** *"Had that phrasing gone into the corpus, a British reader would
have been taught that losing a helmet is itself a ten-minute misconduct."*

**Two further corrections:**
- ⚠️ **The provision is IHUK Rule 9.8 (Dangerous Equipment), not Rule 12.** Rule 12's own body is about
  cage/visor chin cups, J-clips and helmet-facemask sizing and **says nothing about detached helmets — it
  supplies only the penalty LABEL.** ⚠️ **Rule 12's own ladder (leave ice → minor → 10-min misconducts → game
  misconduct) belongs to the CAGE/VISOR violation and must not be imported.**
- ⚠️ **The dispatcher's IIHF locators were wrong** — `:1277-1280` and `:1332-1335` land in **9.6's goalkeeper
  tail running into 9.7 Facial Protection.** 9.6's heading is at `:1235`.

**The underlying divergence is real and is now carried.** It is *"a straight tier override on an identical act
under an identical label"* — the In-House sentence mirrors IIHF 9.6 clause for clause, same duty (*"must
immediately leave the ice"*), same head (*"Rule 12 – Illegal Equipment"*), **tier swapped minor → misconduct**.
⚠️ **The brief told the agent not to assume a straight override; it checked, and this time it IS one.** IIHF
9.6's no-retrieval clause survives unamended.

### ⚠️ Two things the agent nearly got wrong and checked

1. **It drafted *"five times the penalty."* It is not.** **IIHF 16.1**: a minor is two minutes *"during which
   time no substitute shall be permitted"* — **the team kills it short-handed.** **IIHF 22.1**: a misconduct is
   ten minutes but *"a substitute Player is permitted to immediately replace"* the player. ⚠️ **So the British
   tier is worse for the PLAYER and costs the TEAM nothing in strength.** The document now says so.
2. ⚠️ **The misconduct tier is NEW for 2026-27.** The 2025-26 edition (`eiha_inhouse.txt:228-230`) named **no
   tier at all** and allowed *"(or refit it at once if safe to do so)"*. **The 2026-27 edition deletes the
   refit option AND adds the misconduct.** The file's limitation note recorded only the deletion; it now
   records both.

### And something the dispatcher did not know

**`equipment.md` ALREADY carried the In-House sentence**, at `:445`, committed at HEAD — ⚠️ **saying the rule
*"matches IIHF Rule 9.6"* on the refit point, which could imply parity.** One clause added: ***"The duty
matches the IIHF book; the price does not."***

⚠️ **A ceiling now reached and flagged: `equipment.md`'s Key Takeaways are at 10, the style guide's cap. The
finding was folded into Takeaway 5. THE NEXT FINDING NEEDING A TAKEAWAY IN THAT FILE HAS NOWHERE TO GO.**

**Cross-book, verified in windows:** **NHL 9.6 is the outlier** — it permits retrieve-and-replace *"within a
reasonable period of time"*; **USA Hockey 304(e)** stops play immediately and rules the skater off until the
ensuing faceoff.

**And a sibling checked rather than assumed:** `uk_rules.md:186`/`:462` already carry this correctly, and its
citation of **IIHF Rule 20.4** was verified as **correct** — *"a second major penalty, or a second misconduct
penalty in the same game"*. **Arguably the better citation than 22.1; both right, no contradiction, no action.**

---

## The 63.8 propagation — four sites, and the agent caught a defect it WOULD OTHERWISE HAVE CREATED

⚠️ **`faceoffs.md:188` pointed at the primer for *"situations not covered above — a defender dislodging his
own net, a hand pass…"*. Covering it above would have made that sentence FALSE.** In its own words:
***"the class of defect the 'diff the whole file' rule exists for, and a hunk-level review would have shipped
it."*** The item was removed and the other three left.

### A scope point missing everywhere, now in four files

**IIHF Rule 5.1** (`iihf_rules_v1.1.txt:878-880`): *"any reference to 'Player' shall refer to both skaters and
goalkeepers."* ⚠️ **Without it, IIHF 63.8's *"displaced accidentally by a defending Player"* reads as
SKATERS-ONLY**, where the NHL says *"defending skater or goalkeeper"* in terms. **The dispatcher's brief never
raised it.**

### A better reason for one site than the brief gave

⚠️ **`goaltender.md` ALREADY carried 63.8's SECOND limb in full, with the correct TWO exceptions — and nothing
of the first.** **So a goalie was being told *"Rule 63.8 has two exceptions"* and would carry that to a rule
where it has three.** The new bullet says so in terms.

### ⚠️ It refused to manufacture a penalty tier

**NHL 82.2(v)'s warning-then-bench-minor ladder is written to a change attempted *"after the Referee's
signal"* — the line-change-procedure clock — NOT to an 82.1/63.8 violation. Whether it reaches a 63.8 refusal,
NEITHER BOOK SAYS.** ⚠️ ***"Unconfirmed, and I left the corpus silent rather than manufacture a penalty
tier."*** **The adjacent icing bullet does assert that ladder for icing; it was deliberately not carried
across.**

### Cap discipline, stated precisely

The natural home in `goaltender.md` is at **`HARD_MAX` 11**. ⚠️ **It did not add a twelfth, did not merge, and
did not trim the existing 63.8 line's exception count to make room — *"that count is a scope flag."*** It
placed the fact in an adjacent block that had room **and that the document already uses for the same theme.**
**And it declined to add a 31st Common Mistakes bullet**, on the ground that the *"buy a whistle"* cluster is
**deliberate-act** material and an accidental net is a different act with a different consequence.

### The bar is stated TWICE in the NHL book, and three documents were already quoting the sentence

**NHL 82.1's fourth paragraph** (`nhl_rules.txt:8715-8722`) names **Rule 63.8 alongside Rule 81**. ⚠️ **That is
the sentence `rules_primer.md`, `faceoffs.md` and `how_to_watch_hockey.md` were already quoting for ICING —
without noticing it names the net too.**

## ⚠️ TWO DEFECTS IN HOCKEY CANADA'S OWN BOOK

1. **HC 6.7(d)(iii) cross-references *"Rule 6.18 – Time of Game"*. In the 2026-2028 book Rule 6.18 is
   *Goaltender Safety* (NEW) and the time-out rule is 6.17(e).** ⚠️ **The cross-reference is stale in the
   publisher's own book.** **The corpus cites 6.7(d) without the onward reference, so nothing is wrong today —
   but anything repeating "6.18" from it would cite a rule that no longer exists.**
2. **HC Interpretation 2 to Rule 6.1(d)(f) permits changes after a time-out *"except where Rule 6.1 (f) 'No
   change on icing' is in effect"* — it names 6.1(f) ONLY, not 6.1(g).** ⚠️ **Read literally, a Hockey Canada
   team that dislodges its net and then takes a time-out MAY change, where the NHL and IIHF close it.**
   ⚠️ **The finder declined to write it: *"it turns on an OMISSION rather than a ruling."*** **Silence, not
   prohibition — Hockey Canada nowhere BARS the time-out; it simply does not extend the express icing
   permission.**

---

## The "only part of Rule 70 that moved" — FOUR clauses moved, and three land on the player

| Clause | 2025/26 v1.1 | 2026/27 v1.0 |
|---|---|---|
| **70.3** | ends *"…a game misconduct penalty."* | *"…**and shall be subject to potential supplementary discipline.**"* |
| **70.4** | ends *"…the penalties they incur in the altercation."* | *"…**and shall be subject to supplementary discipline.**"* |
| **70.6** | ends *"…from either or both teams."* | *"**Those players shall also be subject to potential supplementary discipline.**"* |
| **70.2** | *"may be subject to **discipline**"* | *"may be subject to **potential supplementary discipline**"* |

Plus the coach clause in **three** places. **70.1, 70.5, 70.7, 70.8, 70.9 and 70.10 are word for word the same
in both editions**, so *"Rule 70 is not renumbered"* survives as the true and load-bearing half.

⚠️ **70.4's addition omits *"potential"*** where the other two carry it. **Quoted verbatim rather than
editorialised.**

### ⚠️ A FALSE ZERO that looked exactly like an absence — twice, two different ways

**First pass returned 0 for 70.6's added tail.** ⚠️ **The sentence spans a page break with `TABLE OF CONTENTS`
and a running head spliced INSIDE it — and *"flattening cannot remove words that were never a line break."***
**Second pass stripped digits and thereby killed *"Rule 28"* in three probes.** ⚠️ **Both recorded because
*"the shape looks exactly like an absence."*** **Normalisation is not one technique; each variant has its own
blind spot.**

### ⚠️ The framing was wrong in a way nobody had spotted: the coach was NEVER outside Rule 28

**IIHF 28.1 in BOTH editions already reaches *"a Player, **Coach**, or team personnel or team executive"***
(`iihf_rules_v1.1.txt:2656-2662`). ⚠️ **So the pre-edit line's *"a bench that empties reaches your coach as
well"* implied a NEW exposure that in fact already existed.** The repair states the **express-route** point
instead. **And 2026/27's 28.1 gains a wholly new paragraph — *"The head coach is always responsible for their
team's behavior…"* — normalised count 1/0/0.**

### Two more things caught by rendering and by the whole-file pass

⚠️ **A live TTS trap the EARLIER reword had missed:** `:244` still read `70.1 to 70.10`, which the renderer
voices *"seventy point one to **seventy point one zero**"* — **the exact defect the brief said had been fixed
elsewhere.** Reworded to *"all ten of its sub-rules"*, verified in the SSML before and after.

⚠️ **The agent contradicted ITSELF inside its own new paragraph within ten minutes** — wrote *"two of those
additions land on the player"* and then listed **three**. **Caught on the final whole-file pass, not by any
checker.**

### A bonus negative, checked and correctly left alone

The file's domestic negative holds: `rule70` and `altercation` both **0** in both In-House editions. ⚠️ **But
*"penalty box"* has FIVE hits in each, not one** — Rule 3 plus three NIHL/SNL overtime bullets. **The
document's wording — *"the one provision they HEAD for benches and penalty boxes"* — is accurate, so nothing
was changed; recorded so a later grep of five hits is not read as an overstatement.**

---

## ⚠️ A reported RENDERER bug that does not reproduce — and the dispatcher was one step from "fixing" it

An agent reported: ***"`md_to_speech.py` renders `IIHF's` as `IIHF 's` — 68 times in this document alone.
`NHL's` renders correctly, so it is specific to the four-letter acronym."*** Handed over as a coordinator task
on `scripts/`.

⚠️ **It does not reproduce.** Across four documents the literal `IIHF 's` appears **ZERO** times. What the
renderer emits, **161 times**, is:

```
<say-as interpret-as="characters">IIHF</say-as>'s supplementary
```

**Well-formed SSML, no injected space.** The token stream is `</say-as>` immediately followed by `'s` as raw
text, with nothing between them.

**The diagnosis that is right in the report:** `IIHF` IS in `SPELL_OUT` and `NHL` is not, so only `IIHF` gets
wrapped — that asymmetry is real. ⚠️ **But the conclusion drawn from it is not.** The agent almost certainly
**stripped the `<say-as>` tags to read the output**, and the space it saw was **an artefact of its own viewing
method.**

⚠️ **`scripts/md_to_speech.py` was NOT changed. A renderer that is not broken was one step from being
"fixed" on a report that read a debug view as production output.**

**The transferable rule: when a report says the RENDERER is wrong, reproduce it in the token stream or the
emitted SSML — never in a stripped or prettified view of either.**

## The dispatcher's own brief, wrong again — and this time the file already had the answer

The brief relayed that `rules_primer.md` was *"already quoting NHL 82.1 for icing without noticing it names the
net too."* ⚠️ **`rules_primer.md:116` already quotes the sentence in full, and `:122` opens: *"And icing is not
the only way to lose the change — Rule 63.8 is the other half of the clause quoted above, and it is the half
nobody repeats."*** **Nothing to add. The brief's locator was also off by eight lines.**

## ⚠️ A THIRD internal defect in Hockey Canada's interpretation layer, found by accident

**Interpretation 3 to Rule 6.1(f)** (`hc_layout.txt:3502-3508`): *"If a line change is made, and then a timeout
is called, further changes can be made."* — ⚠️ **NO icing exception at all, in the interpretation attached to
the icing rule itself**, directly contradicting Interpretation 2, which carries one.

**And a second stale cross-reference in the same rule:** **6.17(c)** cross-refers to *"Rule 6.17 – Tied
Game"* — ⚠️ **pointing at itself under a title it does not carry.**

⚠️ **The finder's own note on how it found it: *"I read the twenty lines after my target."* And its limit:
*"there is no systematic way from here to know how many more of those the book holds."***

**Three further reasons the 6.1(g) time-out inference was correctly NOT written**, none of which the dispatcher
had: 6.1(g) incorporates only 6.7(d)(i), which says nothing about time-outs either way; **Interpretation 2 is
an ENTITLEMENT rule** granting an *additional* change to a team that has already had one, **and a team barred
by 6.1(g) has had none, so there is no additional change for the clause to grant**; and Interpretation 3
contradicts it outright.

## A quotation-fidelity defect where the CAPITAL was load-bearing

`rules_primer.md:55` attributed one quotation jointly to NHL 5.1 and IIHF 5.1 as *"both read"*, rendering the
defined term in **lower case**. ⚠️ **The books differ: NHL writes *"player"*, IIHF writes *"Player"* — and the
capital is the marker the SAME PARAGRAPH then relies on to explain why the IIHF book says *"skater"*.**
Corrected to quote the IIHF form and disclose the NHL's difference.

## Why a table cell could not carry a rule

**The §10 comparison table is 6 columns and `TABLE_MAX_COLUMNS = 3`**, so **it renders as a POINTER and the
cell is never heard.** ⚠️ **Hockey Canada's time-out limb was voiced at three other sites and in that table —
and §Timeouts, the section a reader actually goes to for the question, was the one omitting it.**

---

## The staged files, the reviewers that ran, and what each carries — ⚠️ SUPERSEDED

> ⚠️ **THIS LIST IS STALE AND NAMES ONLY EIGHTEEN FILES. The round grew to 53.**
> **The authoritative list is "The staged files… — ROUND 58 FINAL" at the end of this
> record**, regenerated against `git status` on a quiet tree after every agent finished.
> A commit gate noted that anyone grepping this record for "staged files" hits this list
> first, so the marker belongs here and not only on the successor.

⚠️ **This section exists because the round's first gate BLOCKED on C8: five of eighteen staged `content/`
files were named NOWHERE in this record, including `content/technique/body_contact_and_battles.md`, the
largest content change in the diff.** ⚠️ **Reviewers DID run on all five. The failure was the dispatcher's —
the record was written from what each report said about its FINDINGS and not from what it said about its
FILES.** *"A record that names different files satisfies nothing for these."*

**`content/technique/body_contact_and_battles.md`** — the largest change. `safety-reviewer` (Rule 629 and the
four books' leaving-the-bench rules; USA Hockey boarding reaching a **trip**; 620(c)'s Casebook *"must"*; the
603(a) *"rolling"* permission, written **body-only** on the polarity rule) and `rules-verifier` (the false
*"reads the same in both editions"* negative; the *"USA Hockey is the only one of the four"* superlative
propped up by an omitted quotation; HC 10.4(e)'s chapeau, (e)(iii) and Interpretation 6; IIHF Situation 70.1
with its A5/B5 printing mismatch flagged). **New §12 subsection, new facts block of 9 `Rule:` values, new
rendered anchor.**

**`content/off-the-ice/team_play_and_culture.md`** — `safety-reviewer`. The bench-emptying case as a **culture**
failure, framed to point at the rules documents rather than restate them; propagated to Overview, Common
Mistakes, Check yourself Q9, Key Takeaway 10 (renumbered to 11) and a new Sources paragraph. **Earlier in the
round the same file took the IIHF captains edition qualifier and the NHL 39.4(ix) *"In general"* restoration.**

**`content/systems/neutral_zone_systems.md`** — `facts-reviewer`. An exception list read as **closed**
(*"except for an injured player"*, where NHL 81.4 writes three and IIHF 81.4 four), **split on a seam because
the single value welded a universal consequence to a two-book one**; the section body's own unscoped Icing
note extended; and **USA Hockey 614(c) presented with one of its four limbs, in the dangerous direction** —
the reader hears the behind-the-goal-line trigger and not limb (3), the privileged area, which is the limb
that bites in the corners the section is about.

**`content/systems/defensive_zone_coverage.md`** — `facts-reviewer`. The same closed-list shape in a milder
form, **reworded within 200 chars because the block sits at `HARD_MAX` 11 and splitting was unavailable**; and
**USA Hockey 610(a) flattened**, where the rule reaches a freeze only *"along the boards or goal frame"* — a
limit its own body quotes verbatim, so the fact was **strictly broader than its body.**

**`content/systems/zone_entries.md`** — `rules-verifier`. The **630(d) citation collision** — *"630(d)(2)"*
names two different rules and so does *"630(d)(1)"* — repaired by extending **the corpus's own Hockey Canada
solution at `rules_primer.md:203`**, after confirming the labels transfer **item-for-item**. Two render
defects caught by rendering: `(2)` voiced as *"its (two) is"*, and **8 curly quotes introduced into a file with
zero.**

**The thirteen already named above:** `rules_primer.md`, `uk_rules.md`, `goaltender.md`, `equipment.md`,
`faceoffs.md`, `game_management.md`, `breakouts.md`, `defending_the_rush.md`, `special_teams.md`,
`defender.md`, `on_ice_communication.md`, `rink_map_and_glossary.md`, `how_to_watch_hockey.md`.

**Plus `project/plans/OPEN_ITEMS.md`** (rows opened and the corpus-size figure updated by
`check_counts.py --update`) **and this record.**

### ⚠️ What this round's coverage does NOT claim

**No `content/` file was edited by the dispatcher this round** — every content change came from a reviewing
agent. **But the coverage above is per-file and per-finding; it is not a full-document review of any of the
eighteen.** ⚠️ **Each agent's own "what this method could not have found" is the authority on its limits, and
several say plainly that they read only the sections their brief named.**


---

# Part 2 — the wave that found a whole voiced layer nobody had censused

Nine agents, fourteen owned files, plus renderer and `sources/` work by the coordinator.
⚠️ **The file list in "The staged files, the reviewers that ran, and what each carries" above
is now STALE — it names eighteen files and the round has since touched more. It must be
regenerated against `git diff --name-only` before the gate, not carried forward.** That exact
section blocked a gate last round because five staged files were named nowhere in it.

## ⚠️ The largest finding: a voiced layer that every previous census missed

The superlative census — 188 instances, 33 documents — ran over `content/`. **Diagram captions
live in `site/src/diagrams/*.mjs`, are VOICED, and no grep over `content/` reaches them.**
Censused for the first time this round: **42 superlatives in the caption layer.**

Some are the house pattern working, and must not be swept: `nz-1-2-2-containment` carries
*"Every neutral-zone structure is a coaching choice"*; `winger-high-then-down-the-wall` says
*"a coaching choice rather than a rule of hockey"*. Others are bare — *"the single most
under-coached moment in hockey"* is a claim about every coach in the world.

⚠️ **And one claim appears in two captions in different words** — `defender-d-to-d-behind-the-net`
says *"punished mistakes in hockey"*, `breakout-d-to-d` says *"in the game"*. **No diff catches a
divergence through paraphrase.**

Two agents independently named this layer as the largest hole in their own reports before it was
censused. One wrote: *"Every census I ran was over `content/` and could not see a single one of them."*

## ⚠️ The dispatcher's "word for word" — an error that reached the corpus at four sites

I told agents NHL 72.3 and IIHF 72.3 were *"word for word identical."* A word-level diff returns
**seven divergences**. The claim was written into `shooting.md`, `passing_and_receiving.md` (×2) and
`offensive_zone_play.md` on my say-so.

**The substance was sound** — every clause the corpus actually quotes was tested mechanically and is
verbatim in both books, in all four extractions. **My locator was also off by three.**

⚠️ **And the phrase must NOT be swept, because the corpus's other uses are TRUE.** Tested for
calibration: 80.3's quoted sentence is byte-identical; 80.2 is letters-only identical, the strongest
of the three. **A sweep on "word for word" would have deleted two correct claims to fix one wrong one.**

A second agent then censused the phrase across two more files: **22 comparison claims verified, ONE
false** — and the false one failed in the direction nobody expects.

## ⚠️ The extraction trap running BACKWARDS: manufacturing a difference that does not exist

`body_contact_and_battles.md` claimed a clause was *"in three books word for word, bar Hockey
Canada's unhyphenated `offside`."* **Hockey Canada prints `off-side`, hyphenated.** The difference
was read out of `hc.txt`, the plain extraction, which silently joins line-break hyphens.

Three independent tests establish the hyphen is real: `hc_layout.txt` contains **34 line-end hyphens
in a 449 KB book and every one is a genuine compound** (contrast `iihf_rules_v1.1.txt`'s **249**,
including true mid-word splits like `op-ponent`); `off-side` appears **40×** against `offside` **2×**,
and neither of the two sits at a line end; and the rule is titled `Off-side`.

⚠️ **Every previously recorded instance of this trap produced a FALSE NEGATIVE — a real quotation that
could not be found. This one produced a FALSE POSITIVE: a difference asserted in the corpus that the
books do not contain.** The document had understated its own case; all three books print it identically.

## ⚠️ An edition hazard that does not dangle — it lands on the wrong rule

**IIHF Appendix IV was restructured between 2025/26 and 2026/27.** Tables 1–4 unchanged; **v1.1's
Tables 5, 6 and 7 merge into a single Table 5**; **the 2026/27 book has NO Table 6 at all**; from Rule
**Table 9** onward the TABLE numbers shift **−2**, so 16→14 (and 12.1→10.1).

⚠️ **The dispatcher's own framing of this was wrong and an agent refused to propagate it.** I wrote
*"from Rule 22 onward everything shifts −2"*, which **conflates RULE numbers with TABLE numbers. No
rule shifts.** The shift starts at Table 9; Rule 22 is merely the rule that table belongs to. The
agent cited `sources/README.md:137`, **which records this exact confusion already**. My numeric
mapping was right in every row; my sentence about it was not, and it had already been written into
both the plan and this record.

✅ **Content survival was ESTABLISHED, not assumed, and the set GREW.** All twenty of v1.1 Table 6's
infractions appear in 2026/27 Table 5 with a `MAJOR + GMP` tick — the consequence re-expressed as a
column, unchanged — **plus two more**: *Fighting off the playing surface* 46.7 and *Fighting prior to
the drop of the puck* 46.9. Table 7's five are ticked in **both** columns, preserving the
referee's-judgement semantics. ⚠️ **And the 2026/27 book's own 20.4 and 20.5 still cross-reference
"Table 6" — a dead reference, and the only occurrence of that string in the book. The corpus already
said so, correctly.**

⚠️ **The sharper finding was not in the brief at all: IIHF RULE 46 IS RENUMBERED IN FULL.** Third man
in **46.7 → 46.14**, and **46.7 is now *Fighting off the playing surface***; fighting off the surface
**46.11 → 46.7**, and **46.11 is now *Jerseys***; instigator 46.3 → 46.10; aggressor 46.4 → 46.2;
sucker punch 46.5 → 46.13. `rules_primer.md:433` and `uk_rules.md`'s **Key Takeaway 7** — a standalone
voiced unit — carried all six unscoped. **Two of them resolve in the current book to provisions with
different ejection consequences, so a player quoting the old number to an official mis-states their own
exposure.** ⚠️ **The correct full map already existed at `rules_primer.md:1053` — inside
`## Notes on verification`, which the listener never hears. The document-level declaration never
reached the audio layer.**

⚠️ **"Table 16" in the current book is Rule 84 Overtime.**

Corpus-wide census: **237 `Table N` mentions, 100 in an IIHF context, 33 naming no edition**, across
seven documents. **Nine of those cite Table 6 — the one that no longer exists** — and `uk_rules.md`
uses it to tell British readers their first-major ejection risk.

⚠️ **Not every hit is the IIHF's.** `goaltender.md:611` cites the NHL's Reference Table 11 and the
IIHF's Table 13 **in one breath**. The NHL's tables are unaffected. **A sweep on the number would
corrupt them.** And `uk_rules.md:361` **already** warns that the two books number their tables
differently — the corpus got the cross-book collision right before anyone censused it.

✅ **Situations 3A–3D are byte-identical across editions and the mandatory "must" survives**, so the
round-58 Rule 69 repair holds. It was unscoped, not wrong.

## The corpus searched the right book and the wrong rule number

Three documents reason from *"the IIHF Situation Handbook's fifteen Rule 80 rulings."* **The same
Handbook has a Rule 72 block of seven rulings**, and it is the on-point authority for exactly the
abandoned-puck contrast those sentences make. The corpus cited none of it.

**Situation 72.1 is Situation 80.1 printed a second time**, word for word bar one noun. **Situation
72.5 is the strongest single sentence available for a claim three documents make with weaker support:**
*"the team that batted or high-sticked the puck cannot play the puck, only the opposing team can, and
should they abstain, the whistle is blown, and the face-off stays right there."*

⚠️ **A fifth book sides with USA Hockey and the corpus cites it in five documents.** CARHA Rule 62(d)
prints **no possession test and no exceptions at all** — stricter than USA Hockey's 621(d). Nothing in
the corpus is false, because every affected sentence is scoped to *"all four books"*. But *"USA Hockey
is the outlier"* is true only inside that four; across the five books on disk it is **two against three**.

## ⚠️ A negative existence claim that SURVIVED attack — and a characterisation that did not

*"Situation 10's simultaneous touch is the fact pattern no other book on disk answers."* Attacked
across **fourteen files, three normalisations, eleven concept regexes, all 44 hits read in context,
and every high-stick block on disk read end to end.** The fact pattern appears in exactly one place.
**It could not be refuted.**

⚠️ **But *"unconfirmed rather than DIFFERENT"* overstates the gap.** The principle it turns on is
stated in the same terms by Handbook 80.2, Handbook 80.15, HC Interpretation 1 to 6.9(a)(i), and by
80.1 itself. **On the stoppage it is confirmed. What has no counterpart is where the face-off goes.**

⚠️ **The agent that received this finding REFUTED IT AS MISROUTED** — the claim is not in its file —
**and declined to manufacture the claim in order to correct it.** The dispatcher had sent it to the
wrong owner.

## ⚠️ Twice in one session, an agent measured its own tooling artefact

Two separate agents reported the renderer voices *"the IIHF 's"*, the second counting eleven
occurrences. **The real emitted SSML is `IIHF</say-as>'s` — no space.** Both had built spoken text
with `" ".join(token.text ...)` **and then measured their own join.**

⚠️ **STANDING TOOLING RULE: `" ".join(tokens)` IS NOT THE SPOKEN TEXT. Use `build_ssml`.** A token
join fabricates whitespace at every token boundary — **which is exactly where the say-as tags sit, so
it manufactures defects precisely at the renderer's most delicate seams.**

A third reported defect, the renderer *"dropping the slash in `and/or`"*, was also refuted: 59
instances censused, the renderer handles slashes correctly elsewhere (*"he or she"*, *"forward or
defence"*), and *"and or"* is the standard spoken form. ⚠️ **A rule collapsing it to *"or"* would have
silently narrowed a rulebook quotation meaning "either, or both" — inside verbatim quoted text.**

## The roman marker: 25 reaching listeners, now 1

Four rules, **each with its own handler**, because the three senses leaked into each other **twice and
the self-test caught both** — a conjunction branch put a full stop inside *"points six and seven"*, and
a shared discriminator turned an enumerated step into *"clause one The referee gives…"*.

⚠️ **Order is load-bearing.** `enumerated-roman` is the narrower rule and must claim its markers before
the general detached-clause rule, or every enumeration breaks. The self-test caught that too, when the
general rule was widened to lowercase and silently overtook it.

**Also fixed: a half-consumed range.** `Rule 76.7(I)–(II)` voiced as *"clause one—(II)"*, because the
citation rules' continuation group knew only `,`, `/` and `and`. **The dash is a third separator,
meaning *"to"*.** And detached markers in **both** conventions — the NHL letters clauses in lowercase
romans, the IIHF in capitals, and both reached listeners as letters. **505 uppercase instances censused
before widening; every sampled one a clause marker.**

⚠️ **The plan row feared the senses needed different handling and that the fix was not one line. Both
were right. But it also feared they needed different TREATMENT, and rendering settled that: they all
want a number.** The residue is **mentions** — *"the rule letters its own steps (i) to (viii)"* —
where converting would make the sentence say something false. **No regex should ever claim those.**

## ⚠️ Agents catching defects inside their own repairs — four times

- One created a self-contradiction: its *"All four books bar that in the same words"* took its
  antecedent from a sentence containing *"with their skates"*, **asserting the skates test for the
  NHL.** Caught only by sentence-diffing the whole rendered file; its own hunks looked correct.
- One wrote *"an attempt to injure"* while repairing a rule whose text reads *"attempted to **or
  deliberately** injured"* — **the same defect class it had been dispatched to fix, committed inside
  the fix.** Caught re-reading its own edit.
- One wrote a `Key:` value that `_label_lead` voices as a **post-label imperative**, the style guide's
  shape 3. Caught on the SSML sentence-diff, **not by any checker and not by re-reading the Markdown.**
- The coordinator's own renderer patch broke four passing assertions. Caught by the self-test.

**Every one was caught by rendering, not by reading.**

## What Part 2 could not have found

- **Whether the caption layer's 42 hits are the whole of it.** The census pattern was the same one used
  on `content/`. A superlative phrased differently in a caption would not have matched.
- **Whether any of the ~1,000 remaining census hits are clean.** Two of two, three of three, then nine
  of nine checked sets have contained true positives, all the same omission-becomes-superlative chain.
  **Both agents that worked the tail refused to call the remainder clean, and this record does not
  either.**
- **Anything about the audio itself.** Every renderer conclusion here comes from `build_ssml` output
  read as text. **Whether a TTS voice actually pauses correctly at *"Rules six point ten, clause b and
  six point ten, clause c"* — now longer than what it replaced — is untested.**
- **Whether the corpus's measured figures are in the sources they cite.** An agent's entire refutation
  of a blanket-disclosure brief rests on the 89%/20% and Tulsky figures being genuine, and it did not
  refetch either. `source-verifier` owns that and did not run this round.

---

# Part 3 — the layer nobody was reading, and the tools that could not see it

## ⚠️ 43% of the corpus's tables are never read aloud, and a repair silenced one by 15 characters

A repair pushed one cell of `forechecking_systems.md`'s nine-row *Choosing a Forecheck by Game
State* table to **215 characters**, over `TABLE_MAX_CELL_CHARS = 200`. The whole table stopped
rendering as prose and became *"A detailed table appears here in the written version… it is not
narrated."* **A listener lost every row.**

⚠️ **`check_facts.py`, `check_links.py` and `check_absolutes.py` all PASSED on that state**, and
`check_pointers.py` could not see it either — that tool fires only when a spoken *sentence* points at
the table, so a table degrading with nothing referring to it was invisible to every check. It was
found by the agent sentence-diffing its own rendered audio.

`scripts/check_tables.py` was written in response. Measured at introduction: **20 tables dropped
against 26 read aloud**, eleven of them over on **cell length alone** — narrow and short enough to
voice, silenced by one long cell.

**What the recovery found, which is the part worth keeping:**

- `switching_positions.md`'s nine habit→failure pairs **existed in no other layer**, and the sentence
  after the table — *"The general fix is the same in every row"* — pointed a listener at nine rows
  they had never heard. **+39 spoken sentences.** ⚠️ **The 281-char overflow was a NOTE ABOUT the
  claim, not a row**: moved to prose with its hedge intact rather than trimmed.
- The only definitions of **"pinch"** and **"step up"** in `playing_without_the_puck.md` lived in a
  dropped table. A census over all 924 lines found them nowhere else — **so the style guide's own
  conflation-table terms were undefined for a listener**, and centre, winger and defenceman had no
  off-puck job in the audio at all.
- `equipment.md`'s entire ASTM layer — `F1045`, `F513`, `F1587` — appeared **only** in a dropped
  table and in the Sources trailer, which is never voiced.

⚠️ **And two recoveries were correctly REFUSED.** An agent built a trial compression of
`puck_handling.md`'s `Legal | Penalty` cell at 195 chars, **rendered it, read it, and rejected its
own attempt as FALSE** — USA Hockey's Casebook *does* write a fend-off permission; what it does not
cover is the opponent's stick. **In a penalty-consequence table.**

## ⚠️ A renderer property no checker can see, and it changes what "voiced" means

`render_table` emits the **first** cell of each row bare and prefixes only columns 1+ with their
heading. **So the first column's header is never spoken.** Measured:

> *"Free hand up on your own shaft, using the stick and forearm as a bar. **Penalty**, Grabbing,
> tugging or pulling the opponent or their stick — holding, a two-minute minor."*

The word **"Legal" is never said.** A two-column table whose first column is a category —
`Legal | Penalty`, `Do | Don't`, `Safe | Unsafe` — voices a permitted act **with no label at all**,
immediately before a penalised one. Such a table passes every limit and reports as "read aloud".
⚠️ **Being voiced is not the same as being understood, and nothing in the toolchain distinguishes
them.**

## ⚠️ The new checker had the same class of bug it was written to catch

`check_tables.py`'s first version **re-implemented** the renderer's readability test and checked only
**two of its four** conditions — missing a ragged column count and an empty body. An agent found it by
reading the two files side by side: *"a table the renderer drops for a reason the tool does not model
would not appear on the worklist at all."*

**Fixed by calling `m.table_is_readable` directly rather than by adding the missing test** — the only
change that stops the two diverging again. Zero ragged tables exist today, so the gap was latent.

## The summary layer was right and the body was wrong

The corpus's characteristic defect is a correction that reaches the body and stops. **This round
found the inverse twice.** `risk_management.md` had two adjacent voiced list items **each claiming
the top rank**, while its own Key Takeaway 6 stated the sourced position correctly. `game_management.md`
cited *"Rule 11.1, clause (v)"* in its body while its **facts block** said *"preamble item (v)"* and
was right.

⚠️ **A method that assumes the body is the source of truth cannot see either.** The check that finds
them is: read each layer standing alone, decide independently whether it is true, and only then
compare them.

## Claims that grew in the borrowing

- `risk_management.md` said `breakouts.md` *"rates this the lowest-risk, **highest-reward** exit
  there is."* The owner says *"The lowest-risk **high-reward** play available."* **The superlative was
  manufactured in the citation**, in a document whose owner table says `breakouts.md` *"asserts no
  fixed preference order, so do not invent one elsewhere."*
- *"the single most valuable thing you can do with a puck"* rests on Chatel's 0.112 — **the highest of
  the FOUR play types Chatel priced.** The sentence claimed a maximum over everything a player can do.
- Hockey Canada's penalty-shot criterion was given as *"tripped or fouled from behind"*. The rule
  reads *"tripped or fouled from behind, **or fouled by the goaltender**."* ⚠️ **The full text was
  already in the Sources trailer.** *"Body carried half; the bibliography carried the whole."*

## What Part 3 could not have found

- **Whether the tables now made audible say anything true.** Three tables were promoted from
  page-only to spoken. Their *length* was checked; their *correctness* was not. **That is a larger
  surface than anything repaired.**
- **The thirteen dropped tables nobody judged**, including `goaltender.md:38` and
  `body_contact_and_battles.md:1251`.
- ⚠️ **Three tables are now one edit from silence** — `body_contact_and_battles.md:55`, the
  body-checking-by-league table and the highest-hazard table in the corpus, at **0 rows of headroom**;
  `playing_without_the_puck.md:737` at **5 characters**; `getting_started.md:131` at **21**. **Only
  `check_tables.py --near` will ever catch them.**
- **Superlatives phrased without a superlative word.** *"nothing else matters as much"*, *"no play is
  punished harder"*, *"few things cost you more"*. Every census run this round was a **vocabulary
  list, and its ceiling is its vocabulary.**

---

# The dispatcher's error record, tallied

⚠️ **Eleven errors in briefs and relays this round. Agents caught eleven. The dispatcher caught none
of them first.**

| # | What I asserted | What was true |
|---|---|---|
| 1 | NHL 72.3 and IIHF 72.3 are *"word for word"* | **Seven divergences.** Reached **four corpus sites** on my say-so before an agent diffed it |
| 2 | NHL 72.3 is at `nhl_rules.txt:7570` | `:7573` |
| 3 | Handbook Situation 80.15 is at `:7214-7222` | Runs to `:7226`; **the operative sentence sits at `:7225`, outside the range I gave**, past a page-furniture splice. A verifier reading only my range would have called the quotation unfounded |
| 4 | *"The IIHF Handbooks have no Rule 80 entry"* | **Fifteen rulings.** Relayed **twice** |
| 5 | *"From Rule 22 onward everything shifts −2"* | **Conflates RULE numbers with TABLE numbers.** No rule shifts. `sources/README.md:137` already warned about this exact confusion, and the agent cited it back at me |
| 6 | *"~25 unscoped table citations remain"* | **Three.** Wrong by 8× — derived from a grep that counted NHL tables as IIHF ones |
| 7 | CARHA 62(b) is *"a Major penalty, whether or not injury results"* | **The Note adds a GAME MISCONDUCT** for an intentional high stick, and for an accidental one that injures. **I stopped at the first sentence, and nine corpus sites now understate a penalty** |
| 8 | CARHA 62(a) covers *"the band between waist and shoulders"* | **Not a contact rule at all** — it penalises *checking or intimidating* while carrying the stick high, with no contact element. **This was my correction OF an agent's error, and it was itself wrong** |
| 9 | *"These three documents have NOT been touched this round"* | Already **staged** with substantive edits |
| 10 | The `house default` gloss, circulated as the model | **That document defines the term LOCALLY as something else.** My gloss would have inserted a defensive-zone coverage into three offensive-zone facts |
| 11 | Ten unhedged caption superlatives to fix | **Nine are stated in the prose too — hedging the caption alone would have BEEN the defect** the brief was written to prevent |

## What the pattern says

**Three of the eleven were corrections of someone else's error that were themselves wrong** (#5, #8,
and my first framing of the Rule 69 question). ⚠️ **The dispatcher's confidence is highest exactly
where it has just found something, and that is where it is most dangerous** — because a correction
travels with more authority than an original claim, and agents act on it.

**Four were locator or arithmetic errors** (#2, #3, #6, and the *"thirteen situations later"* an agent
found in text written today). None was a reasoning failure. **All four came from trusting a grep, a
range, or a count I had not re-read.** The one that mattered most, #3, would have produced a false
retraction of a correct quotation.

**Two were negative existence claims** (#4, and the CARHA half of #7) — the class the style guide
already records as the corpus's most fragile, asserted by the person circulating the warning about it.

⚠️ **What kept every one of them out of the corpus, or got them back out: the standing instruction to
treat the brief as a hypothesis to refute.** Agents refuted brief items **nine separate times** this
round, and in three cases refused to act at all — one declined both a finding and its retraction and
was right about a rule neither knew existed; one refused a misrouted finding rather than manufacture
the claim in order to correct it; one rendered its own compression and rejected it as false.

⚠️ **The instruction is not a courtesy. It is the only thing standing between the dispatcher's
error rate and the corpus.**

---

# Two lessons about the METHOD, not the corpus

## ⚠️ File-level ownership of `.mjs` does not partition the caption layer

Four times this round an agent corrected prose and was forbidden to touch `.mjs`, leaving a
**caption/prose drift** — a listener hearing the retracted claim in the voiced caption and the
corrected one in the body. Closing those cost **three follow-up agents**.

The diagnosis, from the agent that hit it last: *"Eight of the eleven captions in a file I
'exclusively own' are owned by prose I cannot touch."* It **found** a defect, verified it against
three documents, and could not close it.

⚠️ **Any brief that assigns a `.mjs` without assigning every prose document that owns a caption in it
reproduces the drift it is trying to prevent.** The final dispatch paired `defender.md` with
`positions.mjs` and specified the order — prose first, caption second — and it closed cleanly.

## ⚠️ A label makes a claim honest. It does not make it true — and it hides it from the next reviewer

Most of what this round did to superlatives was **label** them, which is what the non-negotiables
require: source it or label it, never delete it. The agent that did the last of them stated the cost
plainly:

> *"I verified that four sites now say the same thing. I did not verify that the thing they say is
> true. Nobody in this chain has attacked 'one of the most punished mistakes' itself… **The next
> round should go looking for a source that DISAGREES, not one that agrees — and the hedge I
> propagated will make that HARDER to spot, not easier, because it now reads as resolved.**"*

⚠️ **This applies to nearly every superlative touched this round.** A bare *"the most X in hockey"*
advertises itself. *"The most X in hockey — coaching emphasis, not a counted ranking"* looks handled,
and a reviewer scanning for unsourced rankings will skip it.

**So the next round's superlative work is not another census.** It is: take the labelled ones and
**look for sources that contradict them.** That is the `centre covers more ice` failure mode — a claim
that was labelled, plausible, repeated, and wrong — and labelling is precisely what let it survive.

## ⚠️ And one reason I gave was true locally and would have been a disaster generalised

I argued that *"coaching **consensus**"* is a stronger and less defensible hedge than *"coaching
**emphasis**"*, because *consensus* asserts that coaches agree. **Locally that was right.** An agent
then censused it: **38 sites across 22 documents**, and at almost every one *"coaching consensus"* is
paired with a **stronger** companion disclosure naming the evidence gap.

> *"Anyone acting on reason 2 as a general principle would sweep 38 sites and strip honest disclosure
> at most of them."*

⚠️ **The dispatcher's justifications travel further than its instructions.** An agent that adopts the
*reason* rather than the *decision* will apply it corpus-wide. **Give the decision and the evidence for
that decision; do not offer a principle unless it has been tested at the scale it will be applied.**


---

# The staged files, the reviewers that ran, and what each carries — ROUND 58 FINAL

⚠️ **This supersedes the list in Part 1, which named eighteen files and went stale as the round grew.
That exact section blocked a gate last round because five staged files were named nowhere in it.**
Regenerated against `git status` on a quiet tree with every agent finished.

**56 files, counted from `git diff --cached --name-only` rather than typed — this section's totals have now been wrong twice and a gate caught both.** **33 content documents of 37 · 12 diagram sources · 1 build product · 3 scripts · 1 site script (`build-diagrams.mjs`) · 4 project files (`OPEN_ITEMS.md`, this record, the style guide, `verification/link_baseline.tsv`) · `sources/README.md` · `CLAUDE.md`.**

*(An earlier version of this line said 53 and 33. A commit gate caught it: **the count was stale in
the section whose only job is the count.** Every file was named — only the totals were wrong — but
this is the section that, by its own opening line, blocked a gate last round.)*

## content/ — 33 documents, every one edited by a reviewing agent, none by the coordinator

| Document | What it carries this round | Reviewer |
|---|---|---|
| `foundation/rules_primer.md` | IIHF Appendix IV renumbering + Rule 46 renumbering scoped; NHL 22.3's missing "unless"; four bare summary-layer citations; CARHA 62(b)+30(a) and HC 6.9(c) added; Rule 69 framing corrected; slap-shot negative corrected | `rules-verifier` ×3, `safety-reviewer` |
| `foundation/rink_map_and_glossary.md` | Rule 69 framing at 4 sites; the crease-line clash it now owns for 4 other documents; a disclosure strengthened from "neither edition" to "no edition"; 2 tables converted to voice | `rules-verifier` ×2, `content-reviewer` |
| `foundation/uk_rules.md` | Table 5/6/7 merge and Rule 46 clause renumbering scoped to both editions | `rules-verifier` |
| `foundation/on_ice_communication.md` | invited-divergence removed; a bare permission in the facts layer; NHL 81.4's three exceptions mis-attributed to the IIHF | `content-reviewer`, `rules-verifier` |
| `positions/center.md` | Rule 69 across 3 layers then corrected again at 9 sites; the crease-**edge** contradiction at 5 sites; a `Never:` stating the wrong books' rule; sibling-citation form | `rules-verifier` ×3 |
| `positions/goaltender.md` | 9 superlatives (8 sound, 1 contradicted); Table 13→11 scoped; 67.5's awarded goal; sibling citations; "cheapest goal" + a **false absolute its own document contradicted twice** | `rules-verifier` ×2, `content-reviewer` |
| `positions/defender.md` | NHL 44.4's match penalty, which lived only in the unvoiced trailer; PK-box prevalence; owner-hedge convergence at 2 claims | `content-reviewer` ×2 |
| `positions/winger.md`, `positions/switching_positions.md` | caption/prose alignment; a dropped 9-row table recovered (+39 spoken sentences) | `content-reviewer` |
| `technique/shooting.md` | **CRITICAL** — the person tiers absent from the facts block; CARHA 62(b)+79(a)+30(a); Rule 72.3; Rule 69 framing; the high-stick ladder verified limb by limb | `safety-reviewer` ×2, `rules-verifier` ×2, `content-reviewer` |
| `technique/body_contact_and_battles.md` | CARHA at 6 sites; the "unhyphenated offside" difference that **does not exist**; 2 four-book superlatives written from three books; face-injury mechanism left unsourced deliberately | `rules-verifier` ×2, `safety-reviewer`, `content-reviewer` |
| `technique/passing_and_receiving.md`, `puck_handling.md` | **CRITICAL** — a 6-value `Rule:` block with no behavioural instruction; "the only restriction" false; the USA Hockey fend-off "in the NHL's own words" false; sibling citations | `facts-reviewer`, `content-reviewer` |
| `technique/skating.md` | a self-contradiction about whether skating faults have been ranked; a label reaching 3 layers of 4 | `content-reviewer` |
| `systems/offensive_zone_play.md` | **CRITICAL** — same person-tier omission; CARHA; Rule 69; a **spoken fragment created inside a repair**; an unmarked elision in a quotation | `safety-reviewer` ×2, `rules-verifier`, `content-reviewer` |
| `systems/breakouts.md`, `zone_entries.md` | blanket-disclosure **refuted** (2 measured rankings); 2 winners of one superlative in one file; 6 labels + 17 reported | `content-reviewer` ×2 |
| `systems/forechecking_systems.md` | **a 9-row table silenced by 15 characters**; 2 four-book superlatives written from three books; a pointer | `content-reviewer` |
| `systems/faceoffs.md` | the roman-marker enumeration; an **invented "half the players" figure**; a prevalence claim in 3 summary layers | `rules-verifier`, `content-reviewer` |
| `systems/special_teams.md`, `defensive_zone_coverage.md`, `neutral_zone_systems.md` | IIHF 26.1 **may vs must**; 76.7's deleted warning sentence; a word-level negative false in 3 files; corpus self-narration removed | `rules-verifier` |
| `systems/game_management.md` | **a citation resolving to the wrong offence**, contradicting its own facts block | `content-reviewer` |
| `systems/defending_the_rush.md` | Rule 44 ceiling reconciliation | `content-reviewer` |
| `hockey-iq/risk_management.md`, `playing_without_the_puck.md`, `puck_support_and_spacing.md`, `time_and_space.md` | 2 adjacent items each claiming the top rank; an attribution that **upgraded its owner**; HC 4.11(a)(i)'s missing limb; definitions living only in a dropped table; a competing superlative | `content-reviewer` ×2 |
| `hockey-iq/scanning_and_anticipation.md` | ⚠️ **NAMED NOWHERE IN AN EARLIER VERSION OF THIS SECTION, AND A GATE FOUND IT.** Carries a Rule 69 rewrite in **both** the `facts` layer and the body — including `:601`, a Sources-trailer site that was **invisible to the repairing agent's own stem search** and was caught only by a per-layer scan for the refuted shape | `rules-verifier` |
| `off-the-ice/how_to_watch_hockey.md`, `equipment.md`, `team_play_and_culture.md` | 2 blanket negatives the books falsify; the ASTM layer recovered from a dropped table; the line-change enumeration | `content-reviewer` ×2 |
| `getting-started/getting_started.md` | 2 dropped tables recovered, quotations moved to prose rather than trimmed | `content-reviewer` |

## site/src/diagrams/ — 12 sources + the build product

`breakouts`, `defensive_zone_coverage`, `faceoffs`, `forechecking_systems`, `goaltender`,
`neutral_zone_systems`, `offensive_zone_play`, `playing_without_the_puck`, `positions`,
`rink_map_and_glossary`, `zone_entries`, and ⚠️ **`special_teams` — also named nowhere in an earlier version of this section, and carrying a NEW SAFETY INSTRUCTION in a voiced caption (`pk-wedge-plus-1`, the shot-blocking warning taken verbatim from `special_teams.md:704`).** **The first census of the voiced caption layer: 42–54
superlatives, six hedged, seventeen correctly LEFT because their prose owns them.** Four Rule 69
captions rewritten, then two corrected again. Reviewer: `diagram-reviewer` ×2, `rules-verifier` ×2.
⚠️ **`site/src/data/diagrams.json` is a BUILD PRODUCT rebuilt on a quiet tree after every agent
finished — two earlier rebuilds each swept in other agents' in-flight work.**

## ⚠️ COORDINATOR-WRITTEN AND UNREVIEWED — the gate must read these as new text

| File | What | Evidence it works | What has not happened |
|---|---|---|---|
| `scripts/md_to_speech.py` | **5 new rules, 3 new handlers**: roman clause markers, dash ranges, detached IIHF/NHL clauses, URL paths | **253 assertions, 0 failures** (was 230). Roman markers reaching listeners **25 → 1** corpus-wide | ⚠️ **Three of my patches were WRONG and the self-test caught them, not me** — one fabricated a sentence break **inside a verbatim rulebook quotation**. Nobody has reviewed the final state |
| `scripts/check_tables.py` | **NEW** worklist: tables the renderer drops | Found **20 dropped vs 26 voiced**; 3 recovered, 2 correctly refused | ⚠️ **Its first version had the same class of bug it was written to catch** — an agent found it |
| `scripts/check_absolutes.py` | staleness guard for the caption layer | Fired on a live case immediately | Unreviewed |
| `site/scripts/build-diagrams.mjs` | race guard: source mtimes at import vs exit | Untested until this round's rebuild | Unreviewed |
| `project/content_style_guide.md` | Rule 69.1 correction; the 417-assertion falsification evidence | The 69.1 correction was verified by `rules-verifier` **before** I wrote it | The falsification passage is mine |
| `sources/README.md` | extraction mode four, third instance, in the baseline book | Agent-supplied text | Mine |
| `CLAUDE.md` | `check_tables.py`; build-before-`check_absolutes` ordering | — | Mine |
| `project/plans/OPEN_ITEMS.md`, `project/reviews/round_58_*` | 161 rows, 1,114 lines | — | Mine. **Not fed to the podcast generator** |
| `project/verification/link_baseline.tsv` | row 53 refreshed with the CARHA provenance finding; the dead URL retained as a known-dead row; **three PubMed rows at HTTP 203 / cookie wall and one BMJ 403, recorded as UNREACHABLE-not-absent** | `source-verifier` measured every value | The rows are mine to type |
