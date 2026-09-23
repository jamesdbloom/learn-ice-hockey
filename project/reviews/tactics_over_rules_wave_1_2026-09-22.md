# Re-aiming the corpus at tactics — wave 1, five position pages

**22 September 2026.** The owner's instruction, verbatim, and they asked for it to be a *"major and
critical priority"* knowing it *"impacts how the entire content has been written so far"*:

> *"the entire content should be more focused on tactics and strategy than the exact rules across all
> pages and content"*
>
> *"If there are 4 or 5 key tactical points that are universally true for a position those should be
> stated in the Key focus and discussed in the Overview — not rules, not turning your back to the
> boards or dragging your skates. **No one cares about those points in Key focus or Overview; those are
> technical rules, not practical useful tactics or strategy advice.**"*
>
> *"**it critically impacts the value of this content to its readers.**"*

The rule is now at the top of `CLAUDE.md`.

## ⚠️ The diagnosis, because it explains twenty rounds of this project

**Every review dimension this repository has is checkable** — rule accuracy, citation provenance,
propagation, scope, disclosure. **Whether a document teaches anyone to PLAY is not checkable, so nobody
ever reviewed it.** Twenty rounds of optimising the measurable thing produced position pages that open
on board posture, skate drag and which rulebook governs, while *"be goal side"* and *"crash the net for
the rebound"* sat buried in the body or were missing.

⚠️ **It is also the real cause of the owner's earlier callout complaint.** The warnings felt paranoid
because the pages lead with rules.

## ⚠️ The unlock: a non-negotiable had been read into a prohibition it does not contain

**Non-negotiable 7 — never present a coaching choice AS A LAW — had been read as *"say nothing
tactical unless a rulebook backs it."* That reading is what emptied these layers.** The owner:
*"**I don't care if that is a coaching decision. I want to state the key options to consider that
summarise that player's position.**"*

**The instruction given to every agent:** state the tactic, name it as the common approach, name a
realistic alternative where one genuinely exists, tell the reader to ask their bench. **That satisfies
non-negotiable 7 in full.** ⚠️ **A tactic needs no citation because it is not a rule** — *"be goal
side"* is true because of how the game works. Do not hunt for a source; do not mark it unverifiable.

## What changed — five documents, `## Key focus` and `## Overview` only

`positions/defender.md` · `positions/center.md` · `positions/winger.md` ·
`positions/switching_positions.md` — rewritten. `positions/goaltender.md` — **not rewritten**, and it
is the control for the cold read described below.

⚠️ **NOT ONE TACTIC WAS INVENTED.** Every agent reported the same thing independently: the material was
already in its document, buried. Each verified its promotions by line number, and each verified that
nothing removed from Key focus left the document — by phrase count against `git show HEAD`, not by
assertion.

**The owner's three examples all landed, in their own words:** *"be goal side of the attacker you are
responsible for"* and *"Never carry or pass the puck across the front of your own goal"*
(`defender.md`); *"Crash the net every time a shot goes toward it"* (`winger.md`); *"go to the net for
the rebound instead of watching the shot"* (`center.md`).

**The system forks are named INLINE, beside the tactic they qualify**, rather than in standalone hedge
paragraphs — swing breakout vs centre fly, low zone collapse vs man-on-man vs hybrid, aggressive press
vs trap, outside lanes vs first-man-back. ⚠️ **That is a STRONGER placement for non-negotiable 7, not a
weaker one**, and one agent said so explicitly.

## ⚠️ The safety judgement every agent made, and every one asked to have confirmed

**The boards limb — *"never turn your back to the wall, never duck"* — was demoted out of Key focus**,
on the owner's explicit instruction naming it. Each agent counted its surviving carriers before
removing it: **five in `defender.md`, seven in `winger.md`, five in `switching_positions.md`**, across
facts, body, Common Mistakes, Key Takeaways and the Sources trailer.

⚠️ **Two agents attached a short limb to the tactic that CREATES the hazard rather than leaving it
standalone** — *"get your backside into them"*, voiced alone, otherwise sounds like a turned back.

**Measured by the coordinator, answering a handover an agent said no checker could reach:**

| | |
|---|---|
| `center.md` episode length | **37,909 words ≈ 172 minutes** |
| Key focus point 1 | ~**0 min** |
| *"never turn your back"* | now first heard at ~**12 min** |

**So the cost is real and bounded: from the opening minute to 7% into the episode.** ⚠️ **Every agent
asked for this call to be confirmed by someone other than itself.** A cold reader is running with an
explicit licence to disagree with the owner's instruction on this one point.

## ⚠️ What has NOT been done, and it is the part that matters

⚠️⚠️ **THE SUMMARY LAYERS ARE STILL RULEBOOKS, AND THAT IS WHERE CORRECTIONS DIE HERE.** Three agents
reported it independently:

- `switching_positions.md` **Key Takeaway 6 is ~1,100 words and almost entirely rulebook citation**;
  Takeaways 4 and 8 the same. `check_layer_echo` scores its Common Mistakes → Key Takeaways at
  **20.1%**, consistent with the takeaways being a second copy rather than a kernel.
- `winger.md` **Key Takeaway 8 is ~1,300 words of crease law, voiced aloud as one unit.** *"Read on
  their own with the body absent, the takeaways say a winger's job is knowing Rule 69."*
- `shooting.md` **Key Takeaway 6 is ~1,050 words** and restates the entire screens rules discussion.

**Every one of those agents declined to fix it**, correctly: it is a structural rewrite, not a defect
fix, and half-doing it is worse than not doing it. **That is wave 2.**

⚠️ **And the specification does not describe the layer the owner has just made top priority.**
`project/content_style_guide.md:748` "Document structure" **does not mention `## Key focus` at all**,
and specifies `## Overview` as *"two or three sentences"* — a length no position page has ever
honoured. **If these pages are the model, the template has to say so.**

## ⚠️ What this wave could not have found — and every agent said a version of it

**The tactics were PROMOTED, not written, so a wrong one is now MORE prominent.** One agent put it
exactly: *"I have moved a defect from line 300 up to line 9, where the podcast voices it first, and
nothing I ran would show it."*

⚠️ **Nobody checked the promoted tactics against the documents that OWN them** — `breakouts.md`,
`defensive_zone_coverage.md`, `forechecking_systems.md`, `defending_the_rush.md`. Concretely:
`winger.md` asserts the outlet is *"between the faceoff dot and the goal line"* under a swing breakout
and that wingers take the outside lanes by default. **Both copied from its own body; neither checked
against its owner.**

⚠️ **And five agents wrote five Key focus layers in parallel from shared material, none reading the
others.** *"Two correct sentences that contradict each other read aloud is this repository's recorded
failure mode for exactly that setup."* **A cold cross-page read is running; its findings are wave 2.**

**Each agent also self-certified its own list.** *"'Is this the correct list of universal truths for a
defenceman' is exactly the unmeasurable question that nobody has ever reviewed, and I have just
answered it by judgement and then checked my own answer."*

---

# The cold read — five position pages against each other

**Run immediately after the wave, by a reviewer that had read none of the agents' reasoning.** Three
agents asked for it by name; one said *"it is the one I would run first."*

## ✅ The feared failure did not happen

> *"No — not yet one corpus, but close, **and the failure is not where the authors feared.**"*

**All four tactical interlocks hold across the four rewritten pages. No criticals.**

- **The breakout** — defenceman retrieves and looks up-ice (`defender.md:17`); centre is below the puck,
  inside the dots, below the hash marks, explicitly *not* on the boards because that is the winger's
  ice (`center.md:9`); winger holds level with the opposing point then comes down the wall the instant
  the puck is won (`winger.md:13`). ⚠️ **"Three pages, three non-overlapping patches of ice, one
  breakout."** Defaults agree.
- **Lane discipline** — `winger.md` and `center.md` **state the same failure from the two sides** and
  use the same two-defenders-cover-three-forwards arithmetic.
- **Net front** — the attacking and defending descriptions *"meet on the same ice and assign it to the
  same people."*
- **The system forks** — same names, same defaults on every page that carries them. **No incompatible
  default anywhere.**

## 🔴 M1 — the promotion defect the wave was warned about, and it is real

`winger.md:44` (Overview) sends the weak-side winger to *"cover the slot"* as a standing job.
**That rotation is CONDITIONAL in the same document's body** (`:133`, `:159`): only when the centre has
gone into the strong-side corner, only to the **high** slot, and only *"until the puck leaves."*

⚠️ **Promoted upward, the trigger and the expiry were stripped.** It now contradicts **its own Key
focus** at `:13` (*"stay high on your point"*), its own body, and `center.md:36`, which assigns the
high slot to the centre and the goalmouth to the weak-side defenceman.

- [ ] **Fix at `winger.md:44`:** carry the trigger and the expiry, or drop the clause. **Say "high
  slot", not "the slot".** ⚠️ **`systems/defensive_zone_coverage.md` owns this rotation — confirm the
  trigger and destination there first.**

## 🔴 M2 — `goaltender.md` was the control and it now reads as a different corpus

| file | Key focus points | words |
|---|---:|---:|
| defender / center / winger / switching | 5 each | 404–639 |
| **goaltender** | **4** | **302** |

⚠️ **Three of its four Key focus points are RULES or SAFETY; one is a tactic.** It is the only page
still carrying rulebook names and penalty tiers in this layer.

**And the tactics a goalie coach names first are all in the document, below the fold:** tracking the
puck into the body, communicating to the defence, the reset after a bad goal. **Absent from both
layers entirely: rebound control, playing pucks behind the net for your defencemen, post integration.**

⚠️ **That last one breaks a cross-page exchange.** `defender.md:17` says *"move a retrieved puck
early"*; **the goalie stopping the rim behind the net is the other half of it, and goaltender.md's
first two layers do not mention the defence pair at all.**

- [ ] **Rebuild `goaltender.md` Key focus to five tactical points.** The concussion point is a separate
  question for `safety-reviewer`, **not a demotion recommendation.**

## 🔴 M3 — a hazard named without its instruction

`switching_positions.md:33` says two things *"do not bend with the system you play"* — **how you meet
the boards** — and then does not say what the limb is. ⚠️ **"Naming a hazard without its instruction is
worse than either."** The payload is intact at six other sites; the Overview merely advertises it.

## ⚠️ M4 / M5 — numeric ownership and Overview drift, both in `center.md`

- **`:27` (facts, voiced alone) sheds the qualification its owner insists on three times in bold.**
  `faceoffs.md:58`: *"That is a **team-level** figure… the two are not comparable."* The facts line's
  subject is bare *"Faceoff win percentage"*, immediately before advice about *your* draws. **Restore
  "team".** The Overview prose at `:42` is correct — a layer-propagation miss, not an authorial error.
- **`:42` and `:44` are evidence discussion, a third of the longest Overview of the five.**
  ⚠️ **DEMOTE, DO NOT DELETE** — `:44` is the *"centre skates the furthest"* debunk, verified against
  Lignell via `conditioning_and_recovery.md:52` and corroborated in two sibling documents. **It is the
  corpus handling folklore correctly.**

## ✅ The boards demotion — judged SAFE by a reviewer licensed to disagree

> *"The limb did not move from prominent to buried; it moved to **the facts layer of the zone section
> where the hazard actually arises** — voiced alone with a 300 ms break either side, which is the most
> isolated, least-skippable delivery this pipeline has. A listener 12 minutes into the centre episode
> is hearing it while being told to go to the boards and rim the puck, which is when it is actionable;
> at minute 0 it was adjacent to nothing."*

⚠️ **And the exposure is correctly graded: the WINGER — the player who lives on the wall — KEPT it in
Key focus.** *"That asymmetry is right and should not be 'harmonised' away by a consistency pass."*

**Its only disagreement with the owner's instruction is M3, and it is about the pointer, not the
demotion.**

## ⚠️ Two questions for the owner, offered as questions and not as findings

The reviewer was explicit that these are *"assertions from a reader, not findings against a source…
they did not get an authority, and the difference matters."*

- **`winger.md` — "shoot the puck" is not in the five.** It exists at `:32` as a bias-correction
  (*"most wingers pass up good shots rather than take bad ones"*), not as an instruction.
- **`defender.md` — all five points are defensive or transition. Nothing about the offensive blue
  line**: holding it, keeping pucks in, getting a shot through.

## ⚠️ What the cold read could not have found

⚠️⚠️ **"A promotion defect where all five pages are wrong in the SAME direction is invisible to a
cross-page diff."** Four agents worked from the same source material; **a shared wrong premise would
read as perfect consistency.** M1 was caught only because one file contradicted *itself*.

**Nobody has checked the promoted tactics against the documents that OWN them** —
`breakouts.md`, `defensive_zone_coverage.md`, `neutral_zone_systems.md`, `forechecking_systems.md`.
**That is the next check, and M1 is the proof it matters.**

**It also read only Key focus and Overview.** ⚠️ *"Round 10's every critical was a correction that
reached the body and stopped"* — a Key-focus-versus-Key-Takeaway diff on these five files **is cheap
and has not been run.**

---

# Gate-block repairs — and three coordinator premises the agents refuted

**The commit gate BLOCKED on six conditions. Five fixes dispatched; these are the returns.**

## ⚠️ B1 was the coordinator's own error, and it is worth recording plainly

The gate reported: *"an agent is editing `CLAUDE.md` right now… I read a tree that was changing under
me."* **There was no agent. It was the coordinator**, editing `CLAUDE.md` and a review record *while
the gate audited them* — in the same turn it had told the owner it was holding content edits to avoid
exactly that divergence.

⚠️ **This is the failure `CLAUDE.md` documents in its own words** — *"a commit can pass every mechanical
gate while shipping a staged state nobody verified."* **The defence is not to create the divergence.**
It also explains a discrepancy the gate flagged: `check_facts` reported **5800** facts against the
coordinator's **5805**, and `check_secrets` **431** files against **430**. A deterministic checker does
not move; **the tree did.**

## `switching_positions.md:33` — the hazard pointer, repaired by STATING not deleting

The gate made its approval of the boards demotion across four documents **conditional** on this one
line. The `safety-reviewer` chose to state the limb, and its reasoning is the finding:

> *"Deleting would have been safe on a document-wide view — the payload is at eight sites. It is not
> safe on a **READER-PATH** view… Every payload site sits inside a switch-specific section. A reader
> moving forward to defence can traverse their entire section and meet neither hazard. **The Overview
> is the one passage every reader of this document passes through.**"*

⚠️ **It found a SEVENTH carrier the brief had not listed** (`:170`, the shoulder-point limb) and
corrected a line number. It imported **no rule number, no penalty tier** — three imperatives, 26 words.
**It deliberately left the shoulder-point limb out**, judging that three negatives in one spoken
sentence reads as a list rather than an instruction, and said so.

**Layer test: body ✓ facts ✓ Common Mistakes ✓ Key Takeaways ✓, for both hazards.**
*"I have no safety objection to the demotion. The limb is now carried in the least-skippable layer this
pipeline has, at more sites than before it moved."*

## `center.md:27` — repaired at ZERO character cost, and the brief was wrong twice

**`Faceoff` → `Team faceoff` (+5); `a team's` → `its` (−5). 193 → 193 characters.** Nothing trimmed, no
caveat traded. *"Team faceoff win percentage"* is the owner's own distinguishing wording
(`faceoffs.md:72`) and what this document's body already uses at `:42` and `:468`.

⚠️ **Two coordinator premises refuted:**
1. **The defect was narrower than briefed.** The *object* was already qualified (*"a team's
   points-percentage variation"*); **only the subject was bare.**
2. **The brief implied the line was tight on characters. It measured 193/200 and was not in `--near`
   at all.** The real constraint was that the BLOCK sits at 8/8 coaching facts, so splitting was
   unavailable.

⚠️ **A residual it declined to force, correctly.** The owner's explicit contrast (*"not a skater-level
one"*) does not fit — every wording carrying it measured 199–223 chars, and **the only one that fit did
so by cutting *"the few draws that carry consequence"***, trading the payload for the hedge. **That is
the eviction hazard `--near` exists to prevent, and it refused the trade.** To carry the contrast, the
block must first lose a coaching fact.

**It found a second site the brief did not name** — `:729`, *Check yourself* Q5, same bare subject in a
summary layer.

### ⚠️ And it REFUSED a demotion the coordinator left to its judgement — with evidence

The brief invited it to move `:42`/`:44` out of the Overview. It measured first: `center.md`'s Overview
is **1,494 words against winger 1,340, defender 1,080** — longest by ~11%, **not by a category**. Then:

> *"The `:44` workload debunk **has no body home and three inbound pointers**… there is no section
> about positional workload. *Check yourself* Q1 cites `§Overview` for exactly this material; the
> Sources trailer names *'the covers the most ice note in the Overview'*. **Demoting it would require
> edits to both pointers and an invented section.**"*

⚠️ **A demotion that breaks two pointers and invents a section is worse than the length it fixes.**
It flagged `:42` as the more defensible candidate and left it, saying it was not its brief.

## 🔴 A FABRICATED DEFECT IN A COORDINATOR BRIEF — retracted, not re-routed

**The brief sent to `winger.md` named three defects. The third did not exist.**

It claimed a `Never:` line in that file used the short crease form *"every book that answers"*. The
agent checked and reported: **`grep -rn "every book that answers" content/` returns ZERO hits — the
string is nowhere in the corpus.** The real line is in `shooting.md`, and the coordinator attributed it
to a file it was not in.

⚠️⚠️ **AND THE PROPOSED FIX WOULD HAVE MADE THE FILE WRONG.** `winger.md:457` and `:554` correctly say
*"three books"* **because they compare four books and exclude CARHA**. Sweeping the settled phrase into
them would have been an **over-claim relative to that line's own comparison set.**

**The agent's recommendation, adopted: *"the row be retracted rather than re-routed."***

⚠️ **This is the third fabricated or misattributed premise in a coordinator brief today**, alongside a
brief naming three sites where reading found nine, and a phrase asserted as shorter that measured 36
characters longer. **Every one was caught by an agent told to refute the brief before acting on it.
None was caught by a checker, and none by the coordinator.**

### ⚠️ A real finding that fell out of the phantom

`winger.md:457`/`:554` count **three** (four-book set, CARHA excluded); `rink_map.md:638` counts
**four** (CARHA included). **Both are true; the scopes differ and neither states its scope in the same
breath.** `rink_map.md` is the owner and its four-book claim is the verified-complete one.

## ✅ The two real `winger.md` defects, repaired

**`:467` — CARHA over-promised.** Its mandatory limb is crease-limited; the line's *"in the crease"*
attached to NHL 42.1 only. ⚠️ **And the coordinator's "anywhere on the ice" gloss for Hockey Canada
turned out to be the BOOK'S OWN WORDS** — `hc.txt:6987-6989`: *"A Goaltender is not 'fair game' just
because they are outside their goal crease… anywhere on the ice."* **Repaired at 293 chars, DOWN from
295**, and it left `--near`. Nothing traded.

**`:44` — the conditional rotation.** The agent read the OWNER first,
`defensive_zone_coverage.md:179-203`, and confirmed trigger, destination (**high** slot) and expiry,
plus its `Never: Both wingers sag at once`. The Overview was the outlier. Repaired so the base job is
the point, consistent with its own Key focus.

### ⚠️ A dud positive control, reported by the agent against itself

Its first `check_quote_drift` control **proved nothing** — it corrupted a fragment that was already in
the `notfound` list, so `flagged` never moved. **It noticed, re-ran against a fragment the tool
actually matches, and got a real 217→216 / 3→4 swing before restoring.** ⚠️ **A control run on an
unmatched fragment is indistinguishable from a dead tool.**

---

# Wave 2 — the owner extended the scope twice more

> *"**fix the Key Takeaways too, same rules**… tactics and strategy and how to play should be
> **overwhelmingly the largest amount of content**"* · *"**fix the Key Takeaways and Common Mistakes on
> all position pages**, and also apply the rules… **to all pages we can — i.e. position, systems and
> situations, and hockey IQ pages**"*

**Five documents re-aimed:** `positions/goaltender.md`, `positions/defender.md`,
`systems/faceoffs.md`, `systems/special_teams.md`, `technique/body_contact_and_battles.md`.

## ✅ Measured with the FIXED tool, after every agent stopped

**Corpus: 65%.** Per layer, the five position pages:

| page | Key focus | Overview | Common Mistakes | Key Takeaways |
|---|---:|---:|---:|---:|
| `defender` | 22% | 17% | **65%** | **57%** |
| `goaltender` | 29% | 20% | 85% | 76% |
| `winger` | **0%** | **0%** | 73% | 87% |
| `switching_positions` | **0%** | **0%** | 87% | 83% |
| `center` | **0%** | 35% | 81% | 88% |

**`special_teams.md`** whole document **79% → 75%**; Key focus **28% → 0%**; per list item, Common
Mistakes **87% → 50%** and Key Takeaways **83% → 50%** (15 items → 10, which is the style guide's own
5–10 rule it had been violating).

## 🔴 Rules findings the re-aiming turned up, which is not what it was dispatched for

**A rule travelling without its exception, and it decides whether a player leaves their feet.**
Hockey Canada **8.6** (`hc.txt:7062-7067`) writes *"…unless they make contact with the puck prior to
contacting their opponent."* ⚠️ **The corpus carried only the USA Hockey half** — *"Getting to the puck
first buys you nothing here"* — **and had never carried the Hockey Canada exception at all.** Restored
into the body beside the sentence it contradicts.

**A facts line contradicting both its owner and its own body.** `special_teams.md:99` named **two**
books counting the crease line in and asserted the NHL was the **only** silent one. `rink_map.md` says
four; the same document's body said *"only the NHL's and CARHA's rule texts are silent"*. The agent
read CARHA's Glossary and Rule 5(c) itself and repaired **four** sites.

**A carrier that existed in one layer only.** A mechanical per-citation census before and after found
**Hockey Canada 8.6 lived solely in the Common Mistakes bullet being rewritten** — the case where
demoting deletes. ⚠️ **This is why Common Mistakes cannot be demoted the way Key Takeaways can**, and
it was caught by census rather than by eye.

## ⚠️ Three agents caught overstatements in their OWN replacement text

**Every one in the same direction — toward a harsher, simpler rule.** They reported them unprompted:

- *"none of the four books prices that at two minutes either"* — flattening four books into one claim,
  when the NHL and IIHF write **no minor option at all** while USA Hockey and Hockey Canada each floor
  it at a **minor plus a misconduct**.
- A pad in a rim's way outside the trapezoid stated flatly as a minor under the NHL and IIHF — **under
  the NHL that is the document's own reading, not a quoted interpretation.** Would have promoted a
  defect to line 15 *and* stripped a disclosure.
- Six more in one document: a discretionary IIHF major written as a floor; USA Hockey 640(e)'s minor
  tier dropped; a helmet-removal tariff unscoped; a discretionary game misconduct made automatic.

⚠️⚠️ **SUMMARISING A TARIFF DOES THIS.** A shortening is new text, and new text has not been reviewed.

## ⚠️ Defects found only by LISTENING to the render

- An **ownership note addressed to another document** in a Key focus paragraph — non-negotiable 6.
- ***"Item 12 below"*** — the renderer speaks takeaways as ordinals (*"Twelfth,"*), so the number a
  listener hears does not exist. Replaced with a named pointer.

## ✅ The cohort echo check, and the coordinator's own tool bugs

**An agent asked whether making Key Takeaways tactical trades a rules-appendix failure for a
restatement failure. Measured across all five: it does not.** Only the two rewritten pages rose
(`defender` 12.6%, `goaltender` 10.3%), both mid-pack against the corpus's worst at 30.0%.
⚠️ **The real signal is `Common Mistakes → Key Takeaways`: `switching_positions` 20.1%, `center` 16.9%
— the two whose takeaways have NOT been done.** `defender`'s went 20.3% → 16.1% *while* the work
happened, which is the evidence the work fixes it.

⚠️ **`scripts/check_tactics_ratio.py` — the coordinator's own tool — had two bugs that inflated every
per-layer figure**, found by two agents independently reading its source rather than trusting its
output. Tight Markdown lists scored as one unit; the Sources trailer scored inside Key Takeaways.
**Both fixed after the wave, never during it.** ⚠️ **One agent corrected the coordinator back: on its
file the trailer contributed 6 words, 0.3%, DOWNWARD** — the general point held, that instance did not.

---

# Wave 3 — the cross-page read, and five qualifications lost in transit

**A cold cross-page read of eight re-aimed documents, then five repairs. 23 September 2026.**

## ⚠️ The diagnosis, which is the reusable part

> *"The failures are not disagreements about hockey — they are **QUALIFICATIONS LOST IN TRANSIT**: a
> game misconduct demoted to a misconduct in one file, a red line dropped from a crease boundary, a
> circle widened to a dot, a Handbook promoted to a rulebook, a scoped negative widened to an
> absolute. **All five are single-clause repairs, and four of the five are cases where the CORRECT
> TEXT ALREADY EXISTS ELSEWHERE IN THE SAME DOCUMENT.**"*

**That is the signature of promotion.** Nothing was invented and nothing was deleted — but each time a
buried sentence was lifted into a spoken layer, a qualifying clause did not come with it.

## 🔴 The critical — and it was in text written that same day

`defender.md:769` and `:843` (both summary layers): *"USA Hockey and Hockey Canada **each floor it at
a minor plus a misconduct**"* for checking from behind.

**Hockey Canada 7.5(a)** (`hc_layout.txt:4844`): *"A Minor penalty and a **Game Misconduct** penalty
will be assessed…"* — **an ejection, not ten minutes.**

⚠️⚠️ **AND IT NAMED A TARIFF THE BOOK FORBIDS.** The repairing agent found **7.5(d)**: *"**No
Misconduct penalty may be assessed for a checking from behind infraction.**"* Plus **7.5(e)** making
the ejection automatic. **So the sentence did not merely understate the floor — it named a penalty
combination Hockey Canada expressly prohibits.**

⚠️ **How it got there:** an agent caught its OWN overstatement — it had flattened four books into
*"none of the four books prices that at two minutes"* — **and got Hockey Canada wrong in the
correction.** The document's own Sources trailer, its body at `:395` and its facts block at `:260` were
all already correct. **A shortening is new text, and new text has not been reviewed.**

**The other three halves, all verified:** USA Hockey 608(a) minor + misconduct ✓; NHL 43.2 *"There is
no provision for a minor penalty"* ✓; IIHF 43.2 ✓. **The scope word survived attack too** — CARHA
53(a) and PWHL 43.2 both floor above a bare minor, so *"no book here"* holds under either reading.

## ⚠️ The most dangerous way for a claim to be technically true

`goaltender.md:21` (Key focus): the mask-hit whistle *"is discretionary in **more than one
rulebook**"*.

**Searched by concept across all 42 sources, raw and flattened: IIHF 9.6 discretionary; Hockey Canada
6.18(a) mandatory but only U13 and below; NHL, CARHA and PWHL write nothing.**

⚠️⚠️ **USA Hockey DOES have a discretionary facemask clause — inside its SLED HOCKEY section**
(`usah.txt:7192-7195`, confirmed positionally from the surrounding equipment specs and the running
footer). **The agent's words: *"'more than one rulebook' was defensible only by counting a sled-hockey
rule at a stand-up goaltender — the most dangerous possible way for it to be technically true."***

**The document already disclosed this correctly in Common Mistakes and Key Takeaway 17. Only the layer
spoken first had it wrong.**

## The other three

- **The slot, 3.14× too wide.** `center.md`'s promoted layers said *"between the faceoff **dots**"*
  (44 ft); the owner `rink_map.md:312` says *"between the two faceoff **circles**"* (14 ft). ⚠️ **The
  same numeric drift as the high-slot case `check_zones.py` was written for.** ⚠️ **A layer test found
  a THIRD site the brief had not named**, while `:294`/`:303` forty lines earlier were already correct.
  ⚠️ **And the trap a sweep would have walked into: *"between the dots" is CORRECT* as the vertical
  bound of the high slot and the width of home plate.** ✅ **The DIAGRAMS were already right** — the
  slot polygons measure 406 sq ft, 29 ft × **14 ft**. The prose was the outlier.
- **The crease line dropped.** `winger.md`'s Key focus and Overview facts said *"just outside the blue
  paint"*; the owner's opening instruction is *"**Keep your skates off the red crease line itself, not
  merely out of the blue paint**"* — and `rink_map.md:570` lists the shorter form **as a Common
  Mistake**. The body at `:456`/`:470` had it right. Repaired across **six layers**, plus a Common
  Mistakes entry that did not exist.
- **A scoped negative widened to an absolute.** `winger.md` said *"nobody publishes a breakdown of rush
  goals by cause"*; `neutral_zone_systems.md:855` names the sources and scopes it precisely, and
  `defender.md:764` already carried the scoped form. ⚠️ **Narrowed, never deleted** — the coaching
  point stands.

## ✅ What HELD, which matters as much

> *"The fork names, the house defaults, the 'find out which your team plays' step, the goalie/defence
> call vocabulary and the safety limbs are consistent across all eight documents **to a degree I did
> not expect from five agents working in parallel**."*

All eight system-fork names, both owners' landmark definitions elsewhere, and the `"leave it"` and
`"shot"` call conventions checked clean across documents.

## ⚠️ What this round could not have found — and the reviewer named it exactly

> *"Four agents worked from the same source material, and I compared their outputs to each other — so
> anything all of them got wrong the same way reads to me as perfect consistency… **repetition was my
> evidence of consistency, and it is also the signature of folklore.**"*

⚠️ **Nobody checked the promoted tactics against the documents that OWN them** —
`defensive_zone_coverage.md`, `breakouts.md`, `offensive_zone_play.md`. **Landmarks were checked
against owners; TACTICS were not. That is the next round and it is a large one.**
