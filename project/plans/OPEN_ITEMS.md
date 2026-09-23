# Active work

**Consolidated 21 September 2026 (third pass).** The previous version of this file had drifted back
to a state where every item under "Genuinely open" was actually closed — each fully documented in its
own review record already, but left in place as narrative instead of moved out. Preserved verbatim in
[`plan_archive_2026-09-21_pre_consolidation.md`](../reviews/plan_archive_2026-09-21_pre_consolidation.md).
Earlier consolidations: [20 September, second pass](../reviews/plan_archive_2026-09-20_second_consolidation.md),
[20 September, first pass](../reviews/plan_archive_2026-09-20_pre_consolidation.md) (and their own
predecessors, 11 and 16 September). Archives are evidence, not a dispatch queue. Completed, retracted,
duplicated, and historical material must stay out of this file — when work closes it moves to a review
record, per CLAUDE.md's own rule for this file.

**Closed-work coverage.** Every workstream from all archived files has its substance preserved in a
review record — see the archive files themselves for the full workstream-to-record index; the most
recent additions are `parent_pathway_checking_gap_closed_2026-09-20.md` (the checking-permission
Critical), `traffic_plan_pathway_assembly_2026-09-20.md` (the four new pathway entries, the
goaltender.md fix, the facts census, and the three-round `practice_and_development.md` safety fix),
`equipment_pwhl_pathways_cleanup_2026-09-21.md` (the equipment.md claim correction, the PWHL
sources entry, and the pathways.json documentation fix), and
`check_links_pathways_anchor_gate_2026-09-21.md` (the `check_links.py` extension that now verifies
`pathways.json` anchors — closes the item this file used to carry about that gap), and
`caption_routing_and_game_management_propagation_2026-09-21.md` (the caption-routing investigation
and the four-round `game_management.md` propagation fix it triggered),
`check_links_section_reference_gate_2026-09-21.md` (the `check_links.py` extension that now verifies
`§N` cross-document section references — closes the item this file used to carry about that gap),
`game_management_late_hit_common_mistakes_2026-09-21.md` (the late-hit Common Mistakes fix, its
independent safety-reviewer and rules-verifier passes, and the Minor citation-tier fix one of them
caught), `search_console_refresh_2026-09-21.md` (a live Google Search Console pull and the
striking-distance page list it produced), and
`faceoffs_and_rules_primer_opening_rewrites_2026-09-21.md` (the two Search-Console-standout
opening-paragraph rewrites, two rounds of independent review each, and the two new items they
surfaced — both now closed/parked, see that record's own "Status" section), and
`offensive_zone_play_only_moment_hedge_2026-09-21.md` (the parallel unhedged "only moment in the
game" claim one of those rewrites surfaced, now hedged — closes the item this file used to carry
about it; the convention question it raised is written up in `project/content_style_guide.md`,
"An unsourced 'only X' needs the word softened, not just a trailing hedge").
The two standing house-style decisions (injury-mechanism-form convention, capital-lowering), the
"punt to the owner, don't restate" caption policy (decided 21 September: yes, make it the standard),
and the
site-wide anchor-scroll bug were all closed 20–21 September and are recorded in the archive above; no
action remains on any of them. **Kadaza and FeedSpot submissions (site and podcast) are both done by
the user, 22 September 2026** — see "Genuinely open" below for what's left of the traffic-plan
marketing backlog.

## The one-plan rule, and the two files that broke it

⚠️ **This is the only plan.** CLAUDE.md has said so since 24 August 2026, when commit `ec70b16`
consolidated four plan files into this one *"because 'what is open' had no single answer and items
were rediscovered rather than read."* On 14 September commit `933ea01` created two more plan files
anyway, and on 20 September this file grew a *"Design specifications, not dispatch queues"* section
to accommodate them retroactively. **The symptom the 24 August commit predicted duly recurred** — on
22 September, answering "is the readability work done?" required reading three files, and a podcast
item recorded here as open had been fixed in its own evidence file three days earlier and nobody saw.

**Closed 22 September 2026:**

- `READABILITY_AND_DUAL_AUDIENCE.md` → **moved** to
  [`project/readability_and_dual_audience.md`](../readability_and_dual_audience.md). It is a design
  specification, not a plan — a sibling of `content_style_guide.md` and `review_process.md`. Its open
  threads are rows in this file now.
- `PODCAST_AUTOMATION_LOCAL.md` → **deleted**; its open items are rows in this file, and its history
  was already in
  [`project/reviews/podcast_automation_plan_consolidated_2026-09-20.md`](../reviews/podcast_automation_plan_consolidated_2026-09-20.md).
- [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md) **stays, deliberately.** It is the owner's own
  worklist — an AWS login, vendor signups, an ear test, a listening pass — and it is not a dispatch
  queue for an agent. It is the one exception, at the owner's instruction, 22 September 2026.

⚠️ **Do not create a third plan file.** If something is open, it is a row here. If it is a standing
rule or a design, it belongs in `project/` beside the style guide. There is no third category, and
the two times one was invented, this is what it cost.

**`list_sites_content_and_traffic_plan_2026-09-20.md` relocated to `project/reviews/` on 21 September**
— every content-actionable item it produced is closed (see coverage above); it is kept there as
historical research context, not a live plan. Its non-content marketing/ops items are tracked below
under "Genuinely open," not restated here.

## 🔴 NEW 23 September 2026 — A REPAIR REMOVED A PROVENANCE WORD THE COMMITTED FILE ALREADY HAD

**The cleanest evidence yet for "a repair is new text", because `git diff` settles it.**

`center.md:27` ended *"(NHL official statistics)"* — reading, voiced alone, as *the NHL published
this figure*. It did not; the owner states twice in bold that it is **computed for this document
from raw NHL data**.

⚠️ **The committed line at HEAD already read *"computed from…"*. TODAY'S EARLIER REPAIR TOOK THE
WORD OUT.** It was not an old defect the review found — **it was a regression the wave created and
the review caught hours later.**

⚠️ **And the fix did not fit the way the brief claimed.** The brief said *"the four extra characters
fit"*; the line was at **195/200** and honest provenance costs **+14**. Repaired by **substitution**
instead (*"draws that carry consequence"* → *"draws that matter"*, −11), landing at 198/200. **The
coordinator's arithmetic was wrong and substitution rescued it, as it has every time this wave.**

---

## 🔴🔴 THE COORDINATOR'S NEAR-CAP CENSUS WAS WRONG IN BOTH DIRECTIONS, AND IT WOULD HAVE BITTEN

The brief named **two** `center.md` blocks at `MAX_COACHING_FACTS` (`:186`, `:317`). **`--near`
reports SIX** — verified by the coordinator afterwards:

```
0 left  positions/center:21   8/8 coaching   <-- THE OVERVIEW BLOCK
0 left  positions/center:82   8/8 coaching
0 left  positions/center:117  8/8 coaching
0 left  positions/center:186  8/8 coaching
0 left  positions/center:319  8/8 coaching
0 left  positions/center:631  8/8 coaching
```

⚠️⚠️ **`:21` IS THE OVERVIEW BLOCK — the very block the brief's M1, M2 and M3 asked the agent to
edit.** The agent's own words: ***"Had I planned to add a facts line there I would have written one
that failed the gate."*** The near-cap line list was also eleven, not the ten named.

⚠️ **This is CLAUDE.md's recorded `HARD_MAX` failure reproduced exactly, one level up: the
coordinator hand-copied a tool's output into a brief instead of telling the agent to run the tool.**
**A census copied into a brief is a figure, and figures go stale — say "run `check_facts.py --near`
and read the caps from the source."**

---

## ⚠️ A GLOSSARY LINE INVISIBLE TO PLAIN GREP — SAME SPECIES AS `kickshot`

> *"**Hockey Canada's Glossary line is invisible to a plain grep** — `'The lines of the crease are
> considered part of the crease'` breaks across a line and only an alphanumeric-flattened search
> finds it (`hc.txt`, flat offset 20778). **A reviewer told 'grep it' would have filed a false
> disclosure.**"*

⚠️ **This is the second independently-found instance of the line-break splice**, after the
two-column table splice recorded in `sources/README.md`. **Flatten to alphanumerics before
concluding a book is silent** — and say so in the brief, because the defect is routing, not
diligence.

---

## 🔴 THE HIGHEST RESIDUAL RISK OF THE WAVE — NOBODY HAS DIFFED THE TWO NEW NET-FRONT PASSAGES

Declared by the `center.md` agent as the thing it was least able to see:

> *"I sourced the royal road, cycle and net-front material from `offensive_zone_play.md` **as it
> stood when I read it**… **Nobody has diffed my new prose against the winger's net-front and cycle
> text, and those two documents describe the same two players standing in the same six feet of
> ice.**"*

⚠️ **That is the contradiction-between-agents failure this project has already recorded once** — two
agents writing individually-correct, mutually-contradictory sentences into one block, caught only
because someone diffed the whole file at the end. **`center.md` and `winger.md` were BOTH rewritten
today, in the same wave, about the same ice.**

**Row, and it is the first thing to run after the wave closes:** diff the net-front, cycle and
royal-road passages of `center.md`, `winger.md` and `offensive_zone_play.md` against each other.
⚠️ **Not against their owners — against EACH OTHER.**

---

## ⚠️ SELF-CAUGHT OVERSTATEMENTS: ELEVEN

Two more from `center.md`, both caught by re-reading new text against the body before shipping:
- Dropped the Casebook Situation 10 condition ***"while the goalkeeper is in the crease"*** — restored.
- Wrote *"four books put the line inside the crease"* without ***"the NHL's own text does not say
  either way"*** — ⚠️ **which would have let a listener infer the NHL ALLOWS it.**

**Both ran harsher-and-simpler.** The pattern is now measured across six documents and nine agents.

---

## 🔴🔴 `check_tactics_ratio.py` COUNTS EVERY DECIMAL AS A RULE CITATION — FIX VERIFIED, NOT YET APPLIED

**Found by the `zone_entries.md` agent, against the brief that dispatched it, and it refutes the
headline figure the coordinator used to prioritise three agents.**

`scripts/check_tactics_ratio.py:28`:
```python
RULE_CITE = r"\bRule\s+\d|\b\d{1,3}\.\d{1,2}\b|\b\d{3}\([a-z]\)"
```
⚠️ **`\b\d{1,3}\.\d{1,2}\b` matches ANY DECIMAL.** So `0.08`, `15.50`, `78.8`, `2.5` all score
as rule citations.

> *"**KT2's only rules-bearing token is the string `0.08`** — 132 words of pure Tulsky analytics
> score as a rules unit. Of the original 1,813 words, **only KT6 (44 words) scored non-rules — the
> 98% was 1 unit out of 11, not a word-level truth.**"*

⚠️ **The real shape of that layer was three takeaways carrying 57% of it, not a uniform 98%.** The
work was still real and the repair still correct — **but the number that ranked it top of the queue
was partly an artefact.**

### Measured scale (coordinator, 23 September)

- **166 of 13,495 units** flip on a bare decimal alone — **18,613 of 1,210,908 words, 1.5%.**
- ⚠️ **A naive fix is WRONG:** `81.4` in `rules_primer.md` **is** a genuine rule number. Dropping
  bare decimals loses real citations.

### The targeted fix, tested in BOTH directions

```python
RULE_CITE = (r"\bRule\s+\d"
             r"|\b(?!0\.)\d{1,3}\.\d{1,2}\b(?!\s*%|\s*(?:per\s?cent|sec|s\b|m\b|ft|km|kg|mph))"
             r"|\b\d{3}\([a-z]\)")
```
A rule number never starts `0.` and never carries a `%` or a unit. Verified:

| must still score RULES | | must NOT score rules | |
|---|---|---|---|
| `Rule 81.4 applies` | ✅ | `recovery was 0.08 seconds faster` | ✅ |
| `NHL 69.1 governs` | ✅ | `converted at 15.50%` | ✅ |
| `USA Hockey 607(a)` | ✅ | `78.8% of receptions` | ✅ |
| `Rules 81.4 and 82.1` | ✅ | `a 2.5 m gap` | ✅ |

Reclassifies **88 units / 10,349 words (0.85%)**.

⚠️⚠️ **NOT APPLIED YET, DELIBERATELY. Two agents are live and both were briefed to report this
tool's figures before and after.** Changing it mid-wave is round 59's defect verbatim — *"it changed
its own classification output between my first and last run."* **Apply between waves, then re-run
the queue measurement below, which was taken with the buggy regex.**

⚠️ **AND EVERY PER-LAYER FIGURE RECORDED IN THIS PLAN TODAY WAS TAKEN WITH THE BUG.** They are
upper bounds on rules-bearing share, not measurements. **Re-measure after the fix; do not quote them
afterwards.**

---

## 🔴 THE SITE REVIEW RAN — C10's HYPOTHESIS WAS HALF WRONG, AND THE REAL DEFECT IS BULK

**Chrome recovered; the review ran at 1200 px in both themes across ten pages.**

### ✅ REFUTED — everything C10 predicted about overflow

Measured in the DOM on five target pages: **no caption overflows its figure**
(`capRect.bottom > figRect.bottom` **false everywhere**); **none is clipped**; **the figure still
sits with its diagram** — worst drawing-to-figure ratio **52%**, and `oz-net-front-screen` is **59%
drawing**. ⚠️ **The *"the picture is 14% of its own figure"* extrapolation DOES NOT REPRODUCE —
nothing came close.** No horizontal body scroll. `.warn-inline` promotion verified working (four
instances, correct amber). **Dark mode does not break the hard-coded SVG fills** — the white rink
extends past every label, checked specifically at labels above the goal line.

⚠️ **So the C10 wording — *"overflow and clipping"* — was the wrong hypothesis. The rendered defect
is BULK, and it runs in BOTH directions.**

### 🔴 CRITICAL 1 — a caption that is a single text node, 59% of the viewport

`oz-net-front-screen`, on **both** hosts:
```
chars 2,643 · child elements 0 ← A SINGLE TEXT NODE · .warn-inline 0
rendered 453 px = 0.59 viewport · 14.4px/21.6px grey vs body 17px/28.9px black
```
⚠️ **Longest caption on its page by 1.8×, and the ONLY long caption on either page with zero amber
breaks** — five comparable captions all have one (166–381 px).

> *"**Yes, it reads as a wall**… it sits directly above an amber callout in the body — **and the
> contrast is the tell: the callout looks authored, the caption looks like something that failed to
> get formatted.** On `center.md` the same block sits below a body paragraph stating the same crease
> boundary in 17px black with bold — **so the caption's version is the LEAST legible statement of the
> boundary on the page.**"*

**Cause: content, not CSS — the caption contains no `⚠️` for the anchored `WARNING_RE` to act on.**
Repair dispatched. ⚠️ **Shared constant with two hosts.**

### 🔴 MAJOR 2 — and the opposite failure, on the same standard

`forechecking_systems` figure 8 (twin at figure 9, also on `game_management`): a **364-word amber
panel, 381 px = HALF THE VIEWPORT**, one undifferentiated rectangle.

⚠️ **The owner's own standard: *"A 600-word warning panel is not thoroughness; it is unreadable, and
the reader skips it entirely — which costs more safety than a shorter one would."* At 364 words this
is 60% of the figure the owner called a defect.**

⚠️⚠️ **SO A REPAIR MUST NOT SIMPLY MOVE GREY TO AMBER. Both failures are BULK.**

### ✅ PRIORITY 2 CONFIRMED VISUALLY — and `equipment` is worse than `core_principles` was

All nine untouched pages carry exactly one `callout-warning` among plain paragraphs in Key focus.
`off-the-ice/equipment`: `521 P · 440 P · [warning] 1330 ASIDE · 217 P · 340 P` — ⚠️ **the panel runs
a full viewport on its own, between four short plain siblings.** *"It reads exactly the way the owner
objected to, and arguably worse than `core_principles` did, because here the panel is 2.5–6× the
length of every sibling AS WELL AS being the only one in a box."*

Worst others: `body_contact_and_battles` (a 1,393-char panel **first**), `rules_primer` (**three
different block types among five siblings**).

✅ **AND THE REPAIR WORKS WHERE IT WAS APPLIED:** `core_principles` Key focus is eight plain
paragraphs, markers rendering as **inline** amber clauses mid-sentence. **p3 at 693 chars is visibly
longer but reads as the same kind of object.** *"My answer: yes, they read as siblings. I would not
touch it."*

---

## 🔴 `resize_window` RESIZES THE WINDOW BUT NOT THE PAGE VIEWPORT — D15's phone half stays unreachable

⚠️⚠️ **THE OWNER OBSERVED THE WINDOW DID RESIZE, AND THE OWNER IS RIGHT. The reviewer's CONCLUSION
was right and its stated CAUSE was incomplete — the two observations are about different things.**

**Retested by the coordinator directly, in a fresh tab, on a running preview server:**
```
start                      innerWidth 200   innerHeight 611
resize_window -> 375x812   "Successfully resized"  -> innerWidth 200  (unchanged)
resize_window -> 1400x900  "Successfully resized"  -> innerWidth 200  (unchanged)
visualViewport.width 200 · matchMedia('(min-width:78rem)') false · ('(min-width:40rem)') false
```
⚠️ **The OS window resizes; the page's RENDERING VIEWPORT does not follow it.** `innerWidth`,
`visualViewport.width` and every media query agree, and they disagree with the window. The reviewer
saw it frozen at **1200**; the coordinator saw it frozen at **200** — **different constants, same
decoupling**, so it is not a single stuck value.

⚠️ **Consequence is unchanged: a media-query-driven layout cannot be reviewed at phone width by
resizing.** Emulation via the DevTools Protocol, or a real narrow window the page actually observes,
is what D15's phone row needs.

✅ **One thing the accident bought for free: at a 200 px viewport — NARROWER THAN ANY PHONE — the
page has NO body-level horizontal overflow.** `documentElement.scrollWidth` 268 vs 200, and **all 54
over-wide elements are SVG internals inside the diagram's `overflow-x: auto` container**, contained
by design. **That is the strongest evidence available that the narrow-width containment machinery
works**, even though it is not a substitute for a 375 px review.

> *"Per my own standing rule I stopped rather than retrying further, and I have **NOT** reported a
> single phone-viewport finding… **If C10 turns on the phone specifically, this review does not close
> it — the tooling has to be fixed first.**"*

⚠️ **Consequence: every number above is at 1200 px, where the prose column is ~950 px. At 375 px the
same caption reflows to roughly 2.5× the line count. The 1,100–1,150 px estimate remains ARITHMETIC
— neither confirmed nor refuted.**

⚠️ **Second consequence: the desktop ToC rail is gated at `@media (min-width: 78rem)` = 1248 px,
above the frozen 1200 — so active-heading tracking is UNTESTED.** The `<details class="toc-inline">`
fallback was tested and works (65 links, correct hierarchy).

---

## ✅ NOT A FINDING — the GA4 bootstrap is working as designed, and the owner said so

A site review flagged `dist/analytics.js` as *"a loaded gun that fires the moment that meta tag is
set in production."* ⚠️ **The owner's answer: that IS the expected behaviour — analytics is enabled
only in production, which is exactly what a meta-tag-gated bootstrap is for.**

**Recorded so it is not re-filed by the next site review.** The mechanism is correct: the script
reads `meta[name="ga-measurement-id"]`, returns immediately when absent, and **is not requested at
all** on a local build. Confirmed: a full page load produced **15 requests, ZERO off-origin**.

⚠️ **The general lesson for a site reviewer: an inert production-gated integration is a DESIGN, not a
risk. Check the repo's own deployment intent before filing one.**

**Console: zero errors on every page visited, including `/search/` with an empty query.**

---

## ✅ THE AIRBORNE TRAIL SKATE — SETTLED FROM PRIMARY TEXT, AND `center.md` WAS RIGHT

Two documents disagreed: `zone_entries.md` stated it over **four** books at eight sites,
`center.md` over **six** at three. ⚠️ **The coordinator said explicitly it was equally possible
`center.md` over-claimed. It did not.**

**Verified, with line numbers, by a `rules-verifier`:**

| book | answer | authority |
|---|---|---|
| **NHL** | onside | 83.1 plane test, `nhl_rules.txt:8808-8821` |
| **IIHF** | onside | 83.1, **both editions** |
| **PWHL** | onside | ⚠️ **Rule 85.1, NOT 83** — the NHL's 83.1 **verbatim in the feminine** |
| **USA Hockey** | offside | 630(a) + Note |
| **Hockey Canada** | offside | 6.11 + Interpretation 3 |
| **CARHA** | ⚠️ **NEITHER** | imports *"own side"*, **never defines it** |

⚠️ **THE CARHA NEGATIVE — the claim flagged as most likely wrong — HOLDS, and the method is the
model:** raw `grep -i "plane"` over the whole book returns **ZERO**; flattened sweeps for
`breaktheplane` and `contactwiththeice` return zero; **searched by the ACT** (*in the air / lifted /
airborne / off the ice*) as well as by label; the one other *"own side"* hit is Rule 65 **icing**;
the one `skate contact` hit is the **tag-up** clause. **Silent, not contrary — count it on neither
side.**

**A 42-book flattened sweep found nothing else that settles it, and NO British document amends
Rule 83.**

### ⚠️ A TRAP THAT WOULD REVERSE THE MEANING, flagged for whoever repairs it

**Hockey Canada's Note 1 to 6.11(a)** reads *"physical contact with, **or on their own side of** the
line"* — ⚠️ **the NHL's own-side language, giving the OPPOSITE answer.** 6.11's opening sentence and
Interpretation 3 both override it. **Both documents already quote the correct sentence. DO NOT let a
repair swap in Note 1.**

### ✅ TWO CITATIONS THE CORPUS DOES NOT HAVE, each the exact fact pattern
- **IIHF Situation Handbook 83.29**, word-identical in both editions: *"an attacking player **jumps
  into the air** right at the blue line."* ⚠️ **Its answer is split across a page break in v1.1, so a
  naive `grep -A4` returns the question with no answer.**
- **USA Hockey Casebook 630 Situation 7**: *"**Their trailing skate is directly above the ice in the
  Neutral Zone (off the ice).** Are they offside?"* — **"Yes."**

### ⚠️ Two adjacent defects, same shape
- **Blade-only is THREE books, not two** — PWHL 85.1 carries the identical sentence. ⚠️ **And
  *"your boot overhanging the line is irrelevant"* is REVERSED under USA Hockey**: Casebook 630
  Situation 8 — *"the word 'skate' refers to **the blade or the boot**."* **Runs in the reader's
  favour, so not a safety item.**
- **The tag-up empty-zone requirement is stated as *"all four books"* and holds in SIX** — PWHL
  85.3(i) and CARHA 72(e)(2) both carry it.

### ✅ AND THE SAFETY CALL, MADE HONESTLY RATHER THAN BY REFLEX
> *"**Low, and I am saying so rather than escalating by reflex.** The consequence of getting this
> wrong is a **whistle and a neutral-zone faceoff**, not a penalty, an ejection or an injury."*

⚠️ **But it named what a repair must not touch: `:169` (*"Never: Drag the trail skate with your head
down"*) and `:192` (*"A head up is the condition of the technique, not an extra"*) — *"the only thing
in this section that can hurt somebody."***

⚠️ **NINTH wrong coordinator census: the site list was five; it is EIGHT.**

---

## 🔴🔴 THE COORDINATOR SUPPLIED WORDING THAT WOULD HAVE FAILED THE GATE — while quoting the rule against it

**23 September 2026.** A brief supplied a replacement `Key:` fact for `forechecking_systems.md:29`
and annotated it *"154/200, 46 spare"*. The agent measured:

> *"**The supplied sketch measures 273 characters, against the 200-char `Key:` cap.** The brief's
> *'154/200, 46 spare'* measured the **OLD** line, not the proposed one."*

⚠️ **So the figure was real and attached to the wrong string.** ⚠️⚠️ **This is round 73's failure
verbatim — *the brief's WORDING, not just its premise, was the defect* — committed in a brief that
quoted that very warning.**

### ⚠️ AND THE SKETCH WAS WRONG ON SUBSTANCE TOO, IN A WAY THAT WOULD HAVE CONTRADICTED THE DOCUMENT

The brief proposed disambiguating *"stay high"* as *"near the top of the circles"*.

> *"That is not F3's general sense. The document's own `2-1-2` section already says *'F3 stays high
> in the middle at the **top of the circles**'* — i.e. that is **the 2-1-2's** placement — while
> `:153` says *'in a 1-3-1 the middle is conventionally a defenceman's instead and **F3 takes a
> wall**'*. Writing it into the Key focus **would have stated one system's geometry as the
> definition of the role, contradicting the document two sections later.**"*

✅ **The agent used the document's OWN definition instead** — `:52`: *"**High** means closer to the
blue line **you are facing**, away from the net"* — **a DIRECTION, not a position**, plus the expiry
the document already carries. ⚠️ **And it caught the same error in its own first draft** (*"near the
blue line you face"* — an unsupported position claim) and corrected it to *"towards"* before any
checker ran.

⚠️ **It also found a PRE-EXISTING naked use the brief did not name** — `:109`, in the
`F1 / F2 / F3 — Roles, Not People` facts block, **voiced alone with no location and no expiry**,
present at HEAD. Four sites disambiguated in total.

**STANDING RULE, now twice-earned: if a brief supplies wording at all, it must MEASURE THE STRING IT
SUPPLIES. A character count attached to the wrong string is worse than no count, because it reads as
verification.**

---

## ✅ `game_management.md` 19 → 17, AND THE HONEST HALF IS THE REFUSAL TO GO FURTHER

**Removed KT16** — its own headline says *"the rule number changes and the advice does not"*, so **no
player action is lost**, and three carriers were verified **by reading**: facts `:827`, `:828`, body
`:843`. Confirmed in the render: *"Adult Male Classifications"* still voiced **4×**.
**Merged KT17 into KT15** — the instruction survives verbatim in the kernel; only the classification
**list** was demoted, with **four** proven carriers.

⚠️ **Left, with reasons, and this is the part worth keeping:**
- **the boards-posture takeaway** — *"a repeated safety limb, repeated on purpose… Cutting it to hit
  a count is exactly the failure the brief warned against."*
- **the cardinal-rule closer** — *"removing a non-negotiable-7 disclosure from the kernel layer reads
  as stripping it."*
- **the two added today** to answer `Check yourself` questions — untouched, as briefed.

> *"**17 is still over the guide's 5–10. I am reporting that rather than forcing a cut.**"*

⚠️ **And it measured beyond its own scope: `goaltender.md` has 21 — higher than `game_management.md`
ever was.**

---

## 🔴 THE THREE WORST TAKEAWAYS — MEASURED, WITH A PER-LIMB CARRIER CENSUS AND THE THIN ONES NAMED

| unit | words | chars |
|---|---|---|
| `offensive_zone_play.md` KT5 | **1,038** | 6,000 |
| `forechecking_systems.md` KT7 | **790** | 4,561 |
| `offensive_zone_play.md` KT10 | **739** | 4,112 |

**KT5** is ~40 words of instruction then ~1,000 of five-book crease law. **KT10** is a ~35-word
cardinal-rule disclosure then the entire late-hit and body-contact ladder. **KT7** is one instruction
then the trapezoid, the freeze carve-outs, the four-book goalie-protection ladder and the British
unsettled-status note.

**Every limb has ≥1 carrier outside its takeaway.** ⚠️ **The SINGLE-carrier limbs, which a demotion
must not touch:**
- **KT5** — **IIHF 1.7** is thinnest: three body sections, **no Common Mistakes entry**
- **KT10** — **NHL 41.1 and USA Hockey 622**, each carried **only** in `### The defenceman's pinch`
- **KT7** — **USA Hockey 614(c), Hockey Canada 10.2, IIHF Handbook 27.6 and England 22.3**, each one
  body section, no Common Mistakes

⚠️⚠️ **AND THE OBSERVATION THAT SHOULD DRIVE THE NEXT WAVE:**

> *"The shape all three share is the round's best observation verbatim: **the instruction is the best
> sentence in the unit and it is in the worst position.** KT10 and KT7 both **close** on one.
> **Re-ordering alone would fix the listener's experience of all three at ZERO safety cost, before
> any limb is moved.**"*

**Do the re-ordering first. It is free, it is safe, and it may be most of the win.**

---

## ⚠️ AND THE `Action:` vs `Convention:` DISPUTE — two reviewers disagreed, and the tie-break is the layer

A `facts-reviewer` judged `offensive_zone_play.md:520`'s `Action:` label correct (*"it carries 'this
is what to do', not 'this is a law'"*). A `content-reviewer` said it must be `Convention:`. **The
repairing agent sided with the content-reviewer and showed its working:**

`content_style_guide.md:905-909` is unconditional and has **no `Action:` carve-out**: *"Where the
body hedges… the fact takes `Convention:`, **and that hedge is not optional.**"* And:

> *"The facts line is voiced **alone**… A listener hears a bare imperative split with **nothing
> marking it as a choice their team may make differently** — which is the shape non-negotiable 7
> exists to stop. The reviewer's argument would also **read the guide's sentence out of existence for
> every hedged imperative in the corpus.**"*

⚠️ **The label is judged by what a LISTENER hearing the line alone can tell — not by what the label
means to an editor reading the file.**

---

## ⚠️ THREE LINES NOW SIT AT 1–2 CHARACTERS OF HEADROOM — a liability this wave created

`zone_entries:699` **199/200** (was 194), `zone_entries:300` **2 left**, `switching_positions:213`
**2 left**. ⚠️ **An ordinary edit breaks any of them, and an eviction looks like a clean edit and
passes every checker.**

The `:699` repair could not buy headroom back **without either dropping the Goaltender cross-reference
or re-introducing an overstatement** — and it refused the second. ⚠️ **Record this as the cost of the
repair, not as a defect in it.**

### ✅ AND IT REFUSED A TEMPTING COMPRESSION THAT WOULD HAVE BEEN WRONG

> *"*'USA Hockey and Hockey Canada bar the freeze on a retrieval, not on a save'* **fits comfortably
> and is WRONG in the direction this wave keeps catching** — it asserts the books **do not** bar it
> on a save, where the original is carefully neutral (*'a different case… the carve-outs run the
> other way'*). Kept the neutral construction and paid the characters."*

⚠️ **A compression that FITS is not thereby correct.** The fit is what makes it tempting.

**One residual judgement it flagged rather than hid:** *"the USA Hockey and Hockey Canada freezing
clauses"* could at its widest be read as **every** freezing clause in those books rather than the two
the pointer covered. It accepted that because the sentence's second half carries the limiting scope
(*"outside the crease"*) and the tighter phrasing does not fit the cap. **If a reviewer disagrees,
the fix needs characters bought from elsewhere in the line.**

⚠️ **And it declared the substance UNVERIFIED:** it repaired the pointer and **took the two `Rule:`
lines above it as given** — *"the claim that the carve-outs reverse for a cover-after-a-save is
inherited, not checked, and it points at `goaltender.md`, a file another agent edited today."*
**Worth confirming the two documents still agree.**

---

## 🔴 `goaltender.md` — 21 TAKEAWAYS, AND THE SPLIT IS CLEAN AT KT11/KT12

Measured: **21 numbered takeaways, 11 over the style guide's 5–10.** ⚠️ **And the shape the corpus
keeps hitting is visible in one line:**

> **KT1–KT11 are tactical and carry NO rule citation at all** — ⚠️ **KT11 is 26 words and is the
> model kernel.** **KT12–KT20 are the rules appendix** — nine takeaways, **~11,000 characters, 28
> rule citations between them.**

Longest first: KT20 383 w · KT12 314 · KT8 306 · KT16 221 · KT18 211 · KT15 201 · KT14 189 ·
KT19 170 · KT13 166 · KT17 157 — then everything tactical at 141 down to **26**.

**Carrier census run, and its author stated its limits before its results:**

⚠️ **"Read that table as a candidate list, not as clearance."** Two limits, both disqualifying on
their own:
1. ⚠️ **A rule NUMBER in the body does not prove the TARIFF or the operative wording is there.**
   KT15 is about *where the floor sits* across five books; KT16 about the neck protector being
   mandatory *at every age*. **Those are limbs, and only a per-limb read decides.**
2. ⚠️ **The matching is SUBSTRING-based** — `3.2` matches inside `63.2`, `8.1` inside `28.1`,
   `3.6` inside `63.6`. **Several KT20 rows are probably inflated by exactly that.**

**Its own reading of where to start:** **KT18 first** — thinnest carrier (one section, no Common
Mistakes entry) and its own text says *"two things… are safety rules rather than coaching points"*,
**the kind of limb that is often sole-carried.** **KT20 is the largest prize** — 383 words, nine
citations, **none of them the thing a player does.**

⚠️ **Six blocks in this file are AT `MAX_COACHING_FACTS`** — `:25`, `:219`, `:251`, `:448`, `:755`,
`:1178`. **No room for another non-`Rule:` line in any of them.**

### ✅ A NON-FINDING CHECKED SO NOBODY RE-FILES IT — and the distinction is the point

KT12 says *"None of USA Hockey, Hockey Canada, CARHA or the PWHL enforces a trapezoid — **the first
three never write one** and the PWHL abolishes its own in terms."*

⚠️ **Tested rather than assumed, because a zero from a LABEL is not an absence of the RULE:**
`carha.txt`, `usah.txt`, `usah_casebook.txt` and `hc.txt` all score **0** for *trapezoid*,
*restricted area* **and** *designated area* — the single `hc.txt` hit is **5.4(b), where a GOAL
JUDGE stands.**

⚠️⚠️ **So KT12's *"never write one"* is correct PRECISELY WHERE `:541`'s *"writes no"* was not.**
For those three books the word genuinely is absent; the PWHL **uses** it to abolish the thing.
***"The two sentences now say different things on purpose."*** **Do not "harmonise" them.**

### ✅ And the repair caught itself WIDENING scope

The `:603` fix first read *"so **a puck** behind your net is yours"* — ⚠️ **which widened what the
demonstrative had held.** The block is about rims and retrievals; *"a puck"* would have covered **a
puck under an opponent or being played by a forechecker.** Tightened to *"a loose puck"*, re-rendered.

⚠️ **NOTE THE MEASUREMENT: the substitution came out SHORTER than the pointer — 170/200 against
171.**

⚠️⚠️ **AND THIS LINE ONCE READ *"naming the thing has beaten pointing at it EVERY TIME it was tried
this wave"* — AN ABSOLUTE WRITTEN FROM A RUN OF SUCCESSES, AND IT WAS REFUTED WITHIN THE HOUR.**
Repairing `zone_entries.md:699`, substitution **COST 5 characters** (194 → 199). The agent
diagnosed why, and the diagnosis is the useful part:

> *"This line carried **TWO pointers at the same antecedent**, not one — *'Those clauses'* AND
> *'in both books'*. Naming the books resolves both, but two book names cost 28 chars against 13…
> **The discriminator for whether substitution is free looks like it is HOW MANY POINTERS THE LINE
> CARRIES.**"*

**So: substitution is usually free for ONE pointer and usually costs for TWO. Measure it; do not
assume it, and do not write "every time" into this file again.**

---

## 🔴🔴 "THE CHARACTERS DO NOT EXIST" — WHY TWO AGENTS GOT IT WRONG, DIAGNOSED EXACTLY

Two agents independently reported that restoring CARHA 52(b)'s second limb to `winger.md:468`
*"needs ~13 characters that do not exist"*. A `facts-reviewer` overturned it (*"the cap never evicts
a rulebook limb — you split"*). ⚠️ **The repairing agent then measured and named the actual error:**

> *"I measured the block at `:457`–`:468` myself: **12 facts, only 2 of them non-`Rule:`** — against
> `MIN_FACTS, MAX_COACHING_FACTS, HARD_MAX = 3, 8, 14` and `coaching_count()` exempting `Rule:`
> alone. **The block was nowhere near any cap. Splitting was free.** ⚠️ **The two agents who
> concluded otherwise were reasoning about the 300-char LINE cap and never checked the BLOCK
> caps.**"*

⚠️⚠️ **THERE ARE TWO INDEPENDENT CAP SYSTEMS AND THEY FAIL DIFFERENTLY. A line at its 300-char cap
says nothing about whether the BLOCK can take another line — and a `Rule:` line is exempt from
`MAX_COACHING_FACTS` entirely.** When a rulebook limb will not fit a line, **the question is never
"what do I cut" — it is "does the block take another line".**

✅ Split into two `Rule:` lines at **181/300 and 225/300**, CARHA 52(b) verified verbatim at
`sources/carha.txt:2560-2562`. ⚠️ **And it wrote *"NHL and PWHL"* in words rather than relying on
the renderer's `"/" → " or "` mapping — killing that ambiguity at the source instead of at the
renderer.**

### ⚠️ AND THE REPAIR EXPOSED A PRE-EXISTING SELF-CONTRADICTION IN TWO PLACES

> *"**My repair would have shipped a self-contradiction, in two places.** Both the body blockquote
> and **KT8** carried the *same* CARHA truncation, and each closed with *"The injures an opponent
> limb above has been read **only in Hockey Canada**"* — **false, and flatly contradicted by the
> CARHA text quoted a few lines above it in the same paragraph.**"*

Both now read *"read in Hockey Canada and CARHA; nothing here says whether the other four write
it."* Verified in de-tagged SSML: old form **0**, new form **2**.

⚠️ **A truncation and a provenance note that contradicts it can sit in the SAME PARAGRAPH and pass
every checker. Only propagating the fix made it visible.**

---

## 🔴 THE SEVENTH WRONG COORDINATOR CENSUS — and this one named a whole cap system the brief omitted

The brief said *"four of this file's lines sit within six characters of their cap."* ⚠️ **`--near`
lists FOURTEEN** — **plus SEVEN BLOCKS at the 8/8 `MAX_COACHING_FACTS` cap** (`:21`, `:84`, `:127`,
`:224`, `:358`, `:423`, `:563`), **which the brief did not mention at all and which was the
constraint that actually bit**: block `:21` is at 8/8, so the Overview repair had to fit inside an
existing line rather than add one.

⚠️ **Seven wrong censuses in one wave. The rule is already written down and was not followed: name
the tool, not the number.** The agent worked it out anyway and landed the repair at **191/200 — nine
characters of headroom rather than the one a naive insertion would have left.**

**Also corrected: KT8's word counts were both 3 low** (931 at HEAD, not 928; 938 not 935).

---

## 🔴 `winger.md` KT8 — 959 WORDS, 3× ITS NEXT LARGEST SIBLING, WITH SIX CARRIERS PROVEN

Now **959 words** (931 at HEAD; **+21 from this repair, all of it the required CARHA limb and the
corrected provenance**). ⚠️ **Its siblings in the same list run 31–320 words, median ~88.**

**Limbs with a carrier proven elsewhere in the document — safe demotion candidates:**
- Situation 5 E / the reference-table answer — `:458` facts + §Net-front body
- The 69.4 no-contact penalty limb — §Net-front body
- The crease-line four-book list — `:24` facts + §Net-front body
- USA Hockey's stick-counts-as-you limb — `:462` facts + §Net-front blockquote
- Hockey Canada Interpretations 1 and 2 — `:465`/`:466` + blockquote
- The six-book charging tier — the two new split `Rule:` lines + blockquote

⚠️ **NOT verified sole-carrier-safe — that needs the per-limb layer test.** ⚠️ **Dispatch on the
UNIT (`winger.md` KT8), not the document.**

**Open and untested, raised by the agent against its own new text:** the new disclosure says
*"nothing here says whether the other four write it"* — **honest but untested, and CARHA breaking
that way once suggests it is worth attacking.**

---

## 🔴 DISPATCH ON UNITS, NOT DOCUMENTS — the finding that indicts this whole wave's targeting

A `content-reviewer` measured the three Key Takeaways **the project itself names as the corpus's
worst**, at HEAD and now:

| unit | HEAD | now |
|---|---|---|
| `shooting.md` KT6 | 1,153 words | **1,153 — UNTOUCHED** |
| `offensive_zone_play.md` KT5 | 1,038 | **1,038 — UNTOUCHED, file edited today** |
| `offensive_zone_play.md` KT10 | 739 | **739 — UNTOUCHED, file edited today** |
| `forechecking_systems.md` KT7 | 791 | **790, file edited today** |
| `winger.md` KT8 | 928 | **935 — IT GREW** |
| `center.md` KT8 | 1,109 | **430 ✅** |
| `switching_positions.md` KT6 | 631 | **428 ✅** |

⚠️⚠️ **Two repaired, five not — three of them in files this wave edited.** The coordinator dispatched
on **documents**; agents re-aimed what their briefs named and **left the named worst cases alone**.

⚠️ **AND THE COUNT WENT THE WRONG WAY.** The style guide's skeleton says *"Numbered, **5–10 items**…
this feeds the podcast's 'if you only remember N things' segment."* This wave took
`game_management.md` **16 → 19** and `center.md` 12 → 13. **Eight of thirteen changed files now
exceed the cap** (`goaltender.md` **21**, `game_management.md` 19, `center.md` 13,
`defensive_zone_coverage.md` 12, four at 11). ⚠️ **Nineteen items is not that segment.**

**STANDING RULE: a re-aiming brief names the UNIT — `<file> KT<n>` — and its word count. Naming the
document produces a document-shaped repair.**

---

## ✅ AND THE CARRIER TEST THAT MAKES THE NEXT WAVE CHEAP

Run on `defensive_zone_coverage.md` at **citation AND limb granularity**, comparing the Key Takeaways
against everything before them:

> *"**Every rule citation in the Key Takeaways has at least one carrier outside them.** 67.2, 63.2,
> 59.3, 59.5, 60.1, 61.1, 79.2, 404(b), 610(c), 618(a), Rule 614 Situation 1 and the 11.4% figure all
> appear in the body. **No Key Takeaway is a sole carrier at citation level.**"*

Ten load-bearing **limbs** spot-checked beyond the bare numbers — the automatic game misconduct,
*"obvious and imminent goal"*, the IIHF *"surrounding"* divergence, the USA Hockey next-game
suspension, *"a wild swing"*, *"no protective glass"*, 631(d), 10.1(v), Situation 63.24 — **every one
carried in the body too.**

⚠️ **So a demotion here is SAFE in a way the `body_contact_and_battles.md` Common Mistakes case was
not — the body carries everything.** **Five disjoint targets, ready to dispatch as units:** **KT4**
(~1,500 words, omnibus, already carries an internal pointer), **KT12** (net-front, five books of
stick-foul tiering), **KT11** (crease/closed-hand, four books), **KT10** (over-the-glass, four
books), and a **KT1/KT3 merge** — both close on *"a hybrid marks man-on-man below the dots and looks
identical from the stands"*, a straight restatement independent of any rules demotion.

---

## ✅ A DELIBERATE SIMPLIFICATION, DISCLOSED RATHER THAN HIDDEN — the model for this

Repairing the 7.5(c) facts lines, an agent wrote *"Hockey Canada's minor plus game misconduct for a
hit from behind"* and **noticed it had dropped 7.5(a)'s *"intentionally"***. It had 16 characters
spare and *"an intentional hit from behind"* fits at 296/300. ⚠️ **It deliberately did NOT add it:**

> *"**7.5 Interpretation 2 puts responsibility on the checker even when the victim turns**, and the
> 7.5 preamble makes the duty absolute; inserting *'intentional'* into a line voiced alone would
> **hand a listener a permission the book does not give**. The direction of my simplification is
> toward the **stricter** reading… Flagging it so the next reviewer sees the choice was made, not
> missed."*

⚠️ **A simplification that is deliberate, safe-direction and DISCLOSED is not the failure this wave
kept finding — it is the opposite.** The failure is the undisclosed one.

**Two scope notes it raised against its own repair, both open:** 7.5(c) is **not limited to
puck-diggers**, so *"a player digging along your boards"* (pre-existing corpus wording, matching
three siblings) **understates the rule's reach**; and `:441`/`:442` now both say *"minor plus game
misconduct"* — **redundant read in sequence, correct read alone.**

---

## 🔴 THE FACTS-LAYER REVIEW — SEVEN MAJORS, AND THE DIFF IS BIGGER THAN ANYONE SAID

⚠️ **Measured: 54 added or rewritten facts lines across 36 blocks in 11 documents** — not the
*"roughly thirty"* the brief claimed. ⚠️ **And two documents the brief listed (`game_management.md`,
`defending_the_rush.md`) have NO facts change at all.** Sixth coordinator census wrong this wave.

**No criticals.** Every changed line traces to primary text where it cites one; the reviewer
verified NHL 43.2, IIHF 43.2, HC 7.5(a)–(c), HC 10.1(ii) and 6.4(a), USAH 607(a)–(e), PWHL
1.7/1.8/27.8/65.2 and four crease-line definitions itself.

### Two non-findings recorded so nobody re-files them
1. `goaltender.md:541` cites **PWHL 65.2(viii)**, which reads off-by-one in the plain extraction
   because `(vii)` and `(viii)` sit adjacent. ⚠️ **`pwhl_rules_layout.txt:5219-5223` settles it
   positionally: (viii) is CORRECT.**
2. *"every book that settles the question counts that line as crease"* — ⚠️ **PWHL 1.7 copies the
   NHL's ambiguous wording, so it does not settle the question and the universal HOLDS.**

### The seven majors

1. ⚠️ **`winger.md:25` — today's edit made the fact contradict its own body.** It went from *"can be
   covered by **two** defenders"* to *"**one**"*. **The body says one defender covers TWO forwards,
   in both places, and says it nowhere about three.** ⚠️ **And it weakens the argument: three
   forwards stacked in one lane being coverable by one defender is trivially true and is not why you
   hold width.** ⚠️ **This came from the coordinator's brief**, which quoted the owner's
   three-in-one-lane sentence at the borrower's two-defender claim.
2. **`goaltender.md:603`** — *"so **that retrieval** behind your net is yours"*. A demonstrative on a
   short abstract noun, pointing at `:602`, **which a listener hears with a 300 ms break either
   side.** 29 characters spare; substitution is shorter than pointing.
3. ⚠️ **`goaltender.md:541` states the opposite of the rule text on its face.** *"**Rule 1.8 writes
   no "trapezoid"**"* — but 1.8 reads *"No restricted Goalkeeper's Area, **which will be known as a
   'trapezoid'**, will be enforced."* **The word IS there, in scare quotes, doing the abolishing.**
   Our sentence reads as *the term does not appear*, which is false.
4. **`winger.md:639` — a new fact whose section body does not contain it.** The Backchecking
   section's three bullets never say what a winger may not do on arrival. ⚠️ **The fact is right and
   must NOT be removed (non-negotiable 3) — the repair belongs in the BODY.**
5. ⚠️⚠️ **`winger.md:468` — and this overturns a decision made twice today.** CARHA 52(b) also
   reaches *"or who injures an opponent as a result of a charge"*. Two agents reported it needing
   *"~13 characters that do not exist"*. **The reviewer: *"The constraint is real and the conclusion
   is wrong: THE CAP NEVER EVICTS A RULEBOOK LIMB — YOU SPLIT."*** The block is at no cap and
   `Rule:` lines are exempt, so a second line is free — ⚠️ **and splitting dissolves the `NHL/PWHL`
   slash problem at no cost.**
6. **The byte-identical `defensive_zone_coverage` pair — KEEP the duplication, fix the wording.**
   `:142` is §"base shape" and `:442` is §"The cycle"; each has its own preceding `Rule:` line.
   ⚠️ **"Carrying it in one and not the other is the failure this corpus repeatedly records; the
   gate's 'propagation liability' is the cost of doing it right."* The real defect: *"7.5(a) is a
   floor"* **never says what the floor IS** — it depends on a line the listener does not have. **All
   three sibling lines name theirs inside the line.** ⚠️ **And a SECOND byte-identical pair was
   added today at `shooting.md:292`/`:496` — correct, both needed, recorded so the census is right.**
7. **`risk_management.md:226`** — today's correct repair of `:222` made a pre-existing broken line
   load-bearing. `:226` opens ***"Convention: A coaching convention with real exceptions —"*** — **a
   bare noun phrase with no subject.** A listener is told *something* is a convention and never
   hears what.

### ⚠️ The standing liability this wave created

- **`center.md:422` is now at `HARD_MAX` EXACTLY — 14 facts, zero headroom, 12 of them `Rule:`.**
  It gained the two 69.7 lines today. ⚠️ **No further rulebook fact can land there without an
  eviction.** `shooting.md:451` went to 13 and is one line off the same wall.
- **Eight of the 54 new lines sit within six characters of their cap** — `center:27` (3),
  `center:297` (3), `center:396` (3), `winger:23` (6), `winger:458` (3), `winger:468` (4),
  `switching_positions:213` (2), `zone_entries:300` (2). ⚠️ **Every one is a line whose next
  correction cannot be made in place.**

### ⚠️ The blind spot the reviewer named against itself, and it is the one to act on

> *"**A section whose body already carried an exception the block never had, and which nobody
> touched today, gave me no signal at all.** I caught Major 4 only because the fact arrived without a
> home, not because I noticed the body was short. **The inverse — a body that has had a limb all
> along and a block that has never carried it — would have passed me in every one of the 36
> blocks.**"*

**That is a whole-corpus audit nobody has ever run, and it is invisible to a diff-based method by
construction.**

---

## 🔴 C10 CANNOT BE CLOSED — THE CHROME EXTENSION'S SAFETY-CATEGORY SERVICE IS DOWN

**23 September 2026. D15 was NOT checked, and the reviewer said so rather than inferring.**

Every `navigate` call was refused: *"Could not verify this site's safety category. Blocking as a
precaution."* ⚠️ **The diagnostic that settles it: `https://example.com/` was refused with the
identical message.** Seven attempts across four URL forms. `tabs_context_mcp` and `tabs_create_mcp`
worked, **so the extension is connected but cannot navigate.** Not a localhost problem, not
same-origin, and **retrying would not have helped.**

> *"Zero of the four matrix cells were covered… **Nothing below is a seen visual finding, and none
> of it should be recorded as one.** … **The gate should not be cleared on this report.**"*

⚠️ **THE BUILD IS FINE AND IS NOT THE ISSUE.** The full eleven-step chain ran (39 pages indexed,
8/8 PDFs, 185 precached URLs, *"11,527 internal links … all resolve"*), `dist` rebuilt at 07:18 so
the late `center.md:27` edit **is** in the tree examined, and `preview` served 200. **What is
missing is an eye.**

⚠️ **A leftover for the user:** one standalone `navigate` retargeted a pre-existing tab and left its
address bar reading `https://localhost:4321/positions/winger/`. **It never loaded.** The gate blocks
every URL, so it could not be navigated back.

---

## ✅ WHAT THE STATIC PASS DID ESTABLISH — and it CORRECTS THE COORDINATOR'S FRAMING

**The caption mechanism works as designed.** Both new limbs render as `<span class="warn-inline">`
inside the `<figcaption>`, **not** as `callout-warning` panels — `WARNING_RE`'s anchoring did what it
was written to do. And `.warn-inline` is **not** unstyled prose: `global.css:1146` gives it a colour,
a background and a 3px left border, and `global.css:1180` promotes it to `display: block` inside a
figcaption. **Intended, and shipped.** ⚠️ **Unseen in either theme.**

⚠️⚠️ **NEITHER PRIORITY CAPTION IS THE CORPUS'S WORST CASE — the brief's framing was wrong.** Census
of all **331** captioned figures in `dist/` (107 carry an amber run):

| caption | page | chars | amber |
|---|---|---|---|
| The full-ice press | `forechecking_systems` | 3,162 | **1,991** |
| The pinch from the point | `game_management` + `forechecking_systems` | 3,117 | **1,936** |
| Stepping up at your own line | `defender` | 2,605 | 1,630 |
| The call and who can see it | `goaltender` + `on_ice_communication` | 2,662 | 1,618 |
| **`winger-offensive-zone-patches`** | `winger` | 2,535 | **739** |

**The four-sentence limb did not create a new worst case.** It landed on a caption already long for a
different reason — **1,796 characters of prose BEFORE the glyph**, carrying the half-wall definition,
two arrival clauses, the shoot-first hedge, Rule 69 and both reference tables.

### ⚠️ AND A MEASUREMENT THAT IS WORSE THAN EITHER, ON A PAGE CHANGED TODAY

**`Oz net front screen`** (`center.md`, `offensive_zone_play.md`) is a **2,641-character caption with
NO warning glyph and therefore NO amber run at all** — ⚠️ **the longest uninterrupted caption in the
corpus, one unbroken slab of 0.9rem `--text-muted` grey.** Every other caption that size has its back
half promoted to an amber block, **which at least breaks the slab in two. This one does not.**

On the owner's own standard — *"a 600-word warning panel is a defect; the reader skips it entirely"*
— **a 2,641-character grey caption is the same defect with none of the visual compensation.**

⚠️ **The scaling estimate (~1,150px of caption at 375px) is ARITHMETIC ON AN EARLIER REVIEWER'S
MEASUREMENT, not an observation. A reason to look, not a finding.**

---

## ✅ THE OWNER'S ORIGINAL COMPLAINT IS FIXED ON EVERY CHANGED PAGE — and survives on NINE others

**Across all fourteen changed documents, NO Key focus section contains a single `callout-warning`
aside.** `core_principles` now renders as eight plain `<p>` — one intro plus the seven ideas, no
panels. **The *"why are there two after the first point"* shape is gone from every page touched.**

Two residual asymmetries there, both far milder: p2 and p3 carry short `.warn-inline` bands (85 and
52 chars) where p4–p8 carry none; and **p3 is 693 chars against 120–248 for the other six ideas —
three to five times its siblings.**

⚠️⚠️ **BUT THE SAME SHAPE SURVIVES ON NINE PAGES NOT TOUCHED TODAY**, each with one
`callout-warning` aside among four or five plain paragraphs in Key focus: `getting_started`,
`conditioning_and_recovery`, `equipment`, `practice_and_development`, `team_play_and_culture`,
`body_contact_and_battles`, `passing_and_receiving`, `scanning_and_anticipation`, `rules_primer`.
**That is exactly what the owner objected to, unrepaired, on nine pages.**

**Also confirmed mechanically:** no ` ```facts ` block renders as a raw code block anywhere (the D15
critical is absent); every `<img>` has an `alt`; every `<table>` is inside a `.table-scroll` with
`role="region"` and an `aria-label`; **no off-origin resource loads**; sitemap and Pagefind index
both complete and correct.

---

## 🔴🔴 A COMMIT GATE BLOCKED ON A FALSE PREMISE, AND THE COORDINATOR "VERIFIED" IT BY TRUNCATING THE EVIDENCE

**23 September 2026. The worst coordinator error of the session, and it nearly removed correct text.**

A commit gate blocked C7/D8 on `center.md` promoting *"went negative in 2016-17"*, reporting that
the owner *"declines to name the season on purpose"* and that ***"nothing on disk verifies which of
the eleven seasons went negative."***

⚠️ **Both statements are false.** `content/systems/faceoffs.md:70` — the **computation-bearing body
layer** — reads:

> *"…the correlation … is **r = +0.25** … It is positive — but it is weak, and it is unstable.
> **In 2016-17 the relationship was actually *negative* (r = −0.24)**, and in 2025-26 it was
> essentially zero (r = +0.03)."*

**The season is named, with its coefficient, and has been since commit `8087c1a`.** The owner's
Common Mistakes (`:1128`) and Key Takeaway 5 (`:1218`) carry it too. ⚠️ **The gate read only `:52`,
the Overview — the ONE layer that generalises to *"one of those seasons"*.**

### ⚠️⚠️ AND THE COORDINATOR MADE IT WORSE, WHICH IS THE PART WORTH RECORDING

Asked to verify before dispatching, the coordinator ran:
```
grep -n '2016' content/systems/faceoffs.md | cut -c1-230
```
⚠️ **`2016-17` sits BEYOND character 230 on line 70.** The coordinator saw three lines beginning
*"…the eleven completed seasons from 2015-16…"*, concluded *"those three hits are all 2015-16"*, and
**wrote that into the brief as a verified fact.**

⚠️⚠️ **THE EVIDENCE WAS TRUNCATED AND THEN THE TRUNCATION WAS ASSERTED AS THE CONTENT.** This is the
same failure this file records eight times in agents' briefs — *"a brief asserts what a tool would
say"* — **committed by the coordinator while checking another reviewer's claim.** The agent read the
owner in full and refuted both of us.

**THE RULE: `cut`, `head` and a character limit are DISPLAY choices, not measurements. Never
conclude absence from a truncated view. Grep for the string you are testing for
(`grep -c '2016-17'`), not for a prefix of it.**

⚠️ **Had the agent complied instead of checking, it would have REMOVED a correct season identifier
and replaced it with a vaguer hedge than the owner's own evidence supports.**

---

## ⚠️ OPEN — the owner may be softening its own body, and nobody owns the call

Reported by the repairing agent, not actioned, **in a file no agent held**:

- **`faceoffs.md:52`** says the relationship went ***"slightly* negative"***
- **`faceoffs.md:70`** says ***"actually negative (r = −0.24)"*** — against an overall **r = +0.25**

⚠️ **At r = −0.24 the negative season is not slight in magnitude. If there is a divergence here it
is the OWNER'S OVERVIEW softening its own computation** — not a borrower hardening it. The agent
declined to restate `:52`'s hedge into `center.md` **because doing so would make the summary layers
vaguer than the owner's evidence**, which is the right instinct and the opposite of the usual
defect.

**Two more in the same file, both unchecked by anyone:**
- ⚠️ **`faceoffs.md` says *"eleven completed seasons"* AND *"344 team-seasons"*. 11 × 32 = 352.**
  Expansion timing may explain it; **nobody has checked.**
- The owner's takeaway carries **both** data points (2016-17 negative, 2025-26 ≈ zero); `center.md`
  carries **only the first**. **Does the instability claim read honestly with one of its two points?**

---

## ✅ A REAL DEFECT FOUND WHERE THE GATE LOOKED — but not the one it named

`center.md:27`, the facts layer, **voiced alone**:
> *"…team faceoff percentage explains about 6% of points-percentage variation over eleven NHL
> seasons, **and went negative in 2016-17**"*

⚠️ **The compound verb attaches *"went negative"* to *"team faceoff percentage"* — a percentage that
cannot be negative.** `:42` and `:492` both name the subject correctly; **only the extraction layer
did not.** Repaired to *"…; in 2016-17 the link was negative"*, 198 → 197/200, **no fact evicted**
(corpus total 5,823 before and after).

⚠️ **The agent rejected three candidate wordings and disclosed why:** one measured 211–216 against a
200 cap; one fit at **exactly 200 — zero headroom**, rejected as the eviction state; two fit only by
cutting ***"computed from"***, ⚠️ **which is the corpus disclosing it did the arithmetic itself
rather than quoting an NHL-published figure — stripping it is non-negotiable 4.** It also
**disclosed a real reduction it did make** (dropping *"NHL"* from *"eleven NHL seasons"*, recoverable
from *"NHL official statistics"* in the same clause) **rather than letting it pass as free.**

---

## ✅ CLOSED 23 September 2026 — eleven sections moved out to the review record

**Per the one-plan rule, completed work does not live here.** A commit gate observed that this file
grew by 1,737 lines across nineteen agents and **closed nothing**, which was fair. Eleven resolved
sections (334 lines) have moved to
[`project/reviews/tactics_over_rules_wave_2_2026-09-23.md`](../reviews/tactics_over_rules_wave_2_2026-09-23.md).

**Their open residue was extracted first and both items are now closed:**
- *"`goaltender.md` still does not name the PWHL at all"* — ✅ **stale. It now carries 13 PWHL
  mentions** across fifteen sites.
- *"Re-run the 'well before it' census after every agent has finished"* — ✅ **run. Six live sites
  all carry the tolerance word** (`center.md:412`, `winger.md:9`/`:428`/`:452`,
  `offensive_zone_play.md:527`, `positions.mjs:620`). ⚠️ **The only two hits without it are CODE
  COMMENTS** at `positions.mjs:622`/`:635` — the historical defect record and its reasoning note,
  **which preserve the superseded wording on purpose.** Archives are evidence; do not "repair" them.

---

## 🔴 MEASURED 23 September 2026 — THE REMAINING WORK IS THE BACK TWO LAYERS, EVERYWHERE

Run by the coordinator across the systems queue. ⚠️ **This supersedes every earlier guess about
which documents need work, and it changes the shape of the job.**

| document | Key focus | Overview | Common Mistakes | Key Takeaways | doc |
|---|---|---|---|---|---|
| `zone_entries.md` | 43% | 60% | 85% | **98%** | 65% |
| `defensive_zone_coverage.md` | 30% | **0%** | 87% | 81% | 66% |
| `defending_the_rush.md` | 32% | 42% | 80% | 85% | 59% |
| `breakouts.md` | 33% | 39% | 71% | 65% | 55% |
| `special_teams.md` | **0%** | 42% | 51% | 51% | 68% |
| `neutral_zone_systems.md` | 21% | **0%** | 33% | 47% | 36% |

**The finding: Key focus and Overview are ALREADY FINE across the whole queue — 0% to 43%.** The
earlier waves did that work. ⚠️ **Every remaining point of pain is in Common Mistakes and Key
Takeaways, and the pattern is uniform: 51–87% and 47–98%.**

⚠️ **`zone_entries.md`'s Key Takeaways are 1,769 rules-bearing words out of 1,813.** Read on their
own with the body absent, they do not tell a player what to do.

⚠️ **`neutral_zone_systems.md` IS ALREADY WHERE THE OWNER WANTS IT (36%, Overview 0%). DO NOT
DISPATCH IT.** Its Overview and `special_teams.md`'s Key focus at 0% are the models — read them
before re-aiming anything else.

⚠️ **AND THE TWO BACK LAYERS ARE NOT THE SAME JOB:**
- **Key Takeaways can usually be demoted into the body**, because the body carries everything. A
  takeaway is a **KERNEL** — the user's test is *"what does a player DO in that situation?"*
- ⚠️ **Common Mistakes CANNOT be swept.** Several bullets are the **only place a tariff lives
  outside its own section.** Every brief must require a **proven carrier** before any limb moves,
  and every report must say which limbs were proved and which were left unproved.

---

## 🔴 NEW 23 September 2026 — DISPATCH ON THE LAYER RATIO, NOT THE DOCUMENT RATIO

**Both editing briefs in wave 2 carried a wrong headline figure, and both were wrong in the
direction that flatters the target.** `game_management.md` was dispatched as 73% and measures
**67%**; `risk_management.md` was dispatched as 73% and measures **66%** — and it is not even the
highest in hockey-iq (`playing_without_the_puck.md` is 67%).

⚠️ **The document figure cannot locate the defect, and dispatching on it wastes the agent's first
twenty minutes.** The by-layer spread is the work:

| document | doc | Key focus | Overview | Common Mistakes | Key Takeaways |
|---|---|---|---|---|---|
| `risk_management.md` | 66% | 61% | 62% | **77% ← the work** | 70% |
| `game_management.md` (before) | 67% | 50% | **67% ← the work** | 74% | 84% |

**Row:** every re-aiming brief from now on carries `check_tactics_ratio --file <stem> --by-layer`
output, not a document figure. **NO FIGURE IS WRITTEN HERE — run the tool.**

⚠️ **And the document ratio is not expected to move.** `game_management` went 67% → 66% while its
Overview went 67% → 24%. That is the reframe working, not the work failing.

---

## 🔴 NEW — `risk_management.md` IS UNREPAIRED, AND HAS A FULL SET OF SKETCHES WAITING

An agent reviewed the whole file, then reported: *"`Edit` and `Write` are disabled in this session —
the only tools surfaced to me were `Read`, `Bash` and `SubagentHandback`."* A sibling in the same
wave edited its file normally, so this was intermittent.

**The file is unchanged.** Its report holds verified findings plus proposed wording. ⚠️ **The wording
is a brief, not a patch** — written against a file its author read but could not re-read in place,
which is the one check that matters. Open rows, each with a sketch on record:

- `:222` — a `Never:` value whose SECOND em dash introduces the exception, so the negation carries
  across it and a listener hears the strong-side overload **inverted into a prohibition**. Value is
  195/200 so the repair must SHORTEN. `:226` already carries the exception correctly.
- `:481` vs `:498` — facts layer says *"the worst-value event there is"*; the table 17 lines away
  says *"…on a power play"*. Block is at the 8/8 coaching cap, so repair in place.
- `:435`/`:443` — *"the safest productive play in this zone"*, a bare unsourced ranking in a document
  that labels every neighbour, and `:443` uses it to justify the hierarchy's ordering. **Label it,
  do not delete it** (non-negotiable 3).
- `:611`/`:620` — a `Never:` closed set including *"take anything at all in the first period"*,
  contradicted **two paragraphs later** by the document's own *"a 21% chance beats a 100% chance
  every time"*, which carries no clock scope. **Body and facts line both.**
- `:437`/`:447` — *"never turn back into the middle at your own blue line"* against
  `neutral_zone_systems.md:435`, which teaches the regroup. They reconcile; nothing says so.
- Five of five Key focus paragraphs put the instruction LAST. `:815` is a ~1,100-word Common
  Mistakes bullet whose entire actionable content is the final clause of the final sentence.

**Do not touch** the Schulte et al. (2017) disclosure at `:124` — the agent judged it the
best-phrased in the corpus and said it should be the template. Nor the trailer's deletion record at
`:893`, which is non-negotiable 3 executed correctly and written down where it belongs.

⚠️ **Dispatch lesson:** a brief must tell the agent to report a tooling failure **immediately**
rather than complete a full review nobody can apply.

---

## 🔴 NEW — THE RENDERER VOICES SYSTEM NAMES TWO WAYS, AND THE OBVIOUS FIX IS A REGRESSION

Measured 23 September 2026, exposed because the forechecking re-aim put all six system names in one
breath:

```
'2-1-2, 1-2-2, 1-3-1 and 1-4' -> 'two one two, one two two, one three one and one-four'
```

Cause: the `formation` rule at `md_to_speech.py:2007` is `(?<![\d-])(\d)-(\d)-(\d)(?![\d-])` —
**three digits only**, so a two-part system name never reaches it.

⚠️⚠️ **DO NOT WIDEN IT TO TWO DIGITS.** A census of every two-digit hyphenated form in `content/`
shows the current behaviour is **correct** for most of them, because most are not formations:

```
'a 2-1 lead'  -> 'a two-one lead'         CORRECT (score)
'7-9 players' -> 'seven to nine players'  CORRECT (range)
also: 4-1, 9-1, 3-1, 0-0 (scores) · 6-8, 2-5, 1-2, 3-6, 6-7 (ranges) · 3-4% (percentage)
```

**The digits cannot discriminate.** `1-4` (47 hits) and `2-3` (22) are usually systems; `2-2`, `1-3`
and `3-2` are systems in some documents and not others. A fix needs a per-occurrence census and a
**context** discriminator — adjacency to *forecheck*, *trap*, *box*, *pressure*, a bold system list —
not a regex widening. ⚠️ **A wrong widening silently corrupts 100+ spoken numbers and every gate
passes**, which is the same shape as the `1-3-1` trap this rule was written for.

### ⚠️ THE CENSUS IS RUN, AND IT KILLS THE ALLOWLIST APPROACH TOO

Run 23 September 2026. A token allowlist (*"`1-4` and `2-3` are always systems"*) **cannot work
either**, because the same token is a system and a number **in the same corpus**:

| token | system, here | NOT a system, here |
|---|---|---|
| `2-3` | `defender.md` — *"2-3 — both defencemen at the points"* | `defending_the_rush.md` — *"a tight gap, usually **2-3 stick lengths**"* |
| `2-2` | `special_teams.md` — *"the retreating box (2-2)"* | `neutral_zone_systems.md` — *"a regroup at **2-2 in the second**"* |
| `1-3` | `special_teams.md` — *"Passive 1-3 gives token pressure"* | — |

⚠️ **So the discriminator must be the CONTEXT, not the token and not a list.** A following unit
(*stick lengths*, *min*, *weeks*, *players*, *practices*, *%*) makes it a range; a preceding
*regroup at* / *lead* / *becomes* makes it a score; adjacency to *forecheck*, *trap*, *box*,
*pressure* or a bold system list makes it a shape. A keyword heuristic run over the corpus
**misclassified in both directions**, so whoever fixes this must read every hit, not rank them.

**Row:** design the context discriminator, then read all 47 `1-4` and 22 `2-3` hits against it.
`scripts/` is the coordinator's and the change goes **between waves, not during one** — ⚠️ **and
every re-aiming agent renders through `md_to_speech.py`, so changing it mid-wave is round 59's
defect verbatim: a tool that changed its output between an agent's first and last run.**

---

## 🔴 NEW — PROMOTION INVENTED FIVE PREVALENCE CLAIMS, ONE PER POSITION PAGE

`center.md:9` and `:36`, `winger.md:17`, `defender.md:11`, `switching_positions.md:11` each say
**"most teams"**. Every owner says no such count exists — *"no published count of what teams actually
run"*, *"nobody publishes a count… at any level"*, *"no count of which of the three is commonest has
been found"*. Where an owner does say "most", it is **"most development programmes"**: a claim about
**teaching**, not about what teams run.

**Each document's own lower layers are correctly hedged, which is how we know promotion introduced
it** — `winger.md:634`/`:737`, `defender.md` KT1, `switching_positions.md` KT3. And
`switching_positions.md`'s own last Common Mistakes bullet reads *"Repeating 'the centre covers the
most ice' or any similar positional claim **as though it were measured**… Say so."* — forty lines
below its own Key focus doing exactly that.

⚠️ **The defect is the word, not the sentence. Five files, five agents, NO SWEEP** — `center.md:9`
sits inside a sentence that also carries the correct centre-fly fork, and `center.md:625` and
`winger.md:643` carry it in the BODY as well, where it is pre-existing rather than promoted.

---

## 🔴 TWO CRITICALS WERE CREATED BY THIS WAVE AND CAUGHT BEFORE COMMIT — 23 September 2026

**Both were produced by SHORTENING, both were found by a `safety-reviewer` the commit gate demanded,
and neither would have been visible to any checker in this repository.** Nothing shipped.

### 1. A compression deleted one book's tier and left an "X is the exception" clause pointing at it

`defending_the_rush.md` KT7 lost the IIHF's slew-footing tier, and grep confirmed it then appeared
**nowhere in the document**. What made it critical was what survived **two sentences later in the
same spoken takeaway**: *"**The IIHF is the exception**: it writes no general deliberate-injury rule
and **no match penalty anywhere**."*

⚠️ **That clause is about TRIPPING. A listener who has just heard three books' slew-footing tariffs
hears that their book is the lenient one.** It is not — `sources/iihf_rules_2026-27.txt:4541-4558`
contains only 52.1 (definition), 52.2 (major + automatic game misconduct) and 52.3. **No lesser
tier.** ⚠️ **Scope: every British reader at every level**, in a document whose own header says *"the
IIHF flags are yours"*.

✅ **Repaired — and the repair REFUTED the coordinator's wording.** The brief said *"the floor is an
ejection"*; **52.2 is framed *"shall, at their discretion, assess"***, so there is no lesser **tier**
but the assessment is discretionary. The agent wrote *"no tier below an ejection"* — ⚠️ **which is
the distinction the document's own facts line at `:618` already drew, so the layers now agree
instead of diverging.** It also caught the same overstatement twice in its own drafts (*"which the
IIHF **makes** a major"*, *"its slew-footing rule still **ejects** you"*).

### 2. New technique shipped with two-fifths of its posture limb

`center.md:407`'s new net-front section parks a player **still, six to eight feet out, with their
eyes deliberately off the defender beside them**, on a path whose edges are a steel post and a
goaltender. It says *"head up"*. ⚠️ **It does not say *"chin off your chest"* or *"never duck"* — and
ducking is the specific reflex the section provokes, because the player has just been told not to
watch the shot.** The mechanism USA Hockey names is a **flexed neck**, not a lowered gaze.

⚠️ **The layer test is the finding: the owner carries the limb in ALL FOUR layers and this file had
it in ONE** (body). `Never: Duck…` appears twice in the file — **both in BOARD sections.** Repair
dispatched.

---

## ⚠️⚠️ THE DEFECT WAS AN ASYMMETRY, NOT A CEILING — and the brief got the diagnosis wrong

**The `zone_entries.md` 7.5(c) brief said *"this document's checking-from-behind ceiling stops at
major plus game misconduct."* HALF WRONG, and the agent's correction is sharper than the brief:**

> *"The document already carried a **match penalty** — USA Hockey's, from Casebook 608 Situation 1,
> **in four places.** What was missing was **Hockey Canada's**. So the defect was an **ASYMMETRY**,
> not a flat ceiling: a reader was shown USA Hockey priced to its match penalty and Hockey Canada
> priced only to its major, and would reasonably conclude **Hockey Canada is the cheaper book for
> exactly the hit this document teaches.**"*

⚠️ **THE TEST THAT GENERALISES: does the document price ONE book to its match penalty while pricing
another only to its major, in a passage teaching that contact?** A flat ceiling across all books is
a different, milder defect. **An asymmetry actively misinforms a reader about which book they are
under.**

✅ **Repaired at five sites** — §2 facts and body, §8 facts and body, Common Mistakes — **all in the
HARSHENING direction**, with *"unable to protect or defend themselves"* quoted verbatim in every
instance and each framed as a **ceiling** so no sentence says a hit from behind is automatically a
match penalty.

### ⚠️ SIX MORE COORDINATOR PREMISES REFUTED BY MEASUREMENT, IN ONE BRIEF

- **"…and KT4."** ⚠️ **KT4 is the delayed-offside tag-up requirement and carries no tariff at all.**
  The checking-from-behind takeaway is **KT10**, which deliberately carries no ladder after this
  morning's repair. **Adding one would have regressed that repair.**
- **"Common Mistakes `:1049`"** — ⚠️ **a different topic entirely** (*"Arriving on the goalie"*, a
  goaltender-interference item). The right line is `:1051`.
- **"Five facts lines voice *'incidental or not'* alone."** ⚠️ **Refuted by count: THREE lines touch
  goalie contact and only TWO carry the phrase.**
- **"`Rule:` lines are at 292/300, 289/300 and 282/300."** ⚠️ **Refuted by measurement: 266, 263 and
  293.** The figures were inherited from the previous agent and **had gone stale within the same
  session.**
- Line numbers `:218`/`:219`, `:741`, `:753` had all moved.

⚠️⚠️ **THIS IS THE FOURTH BRIEF IN A ROW WHOSE HAND-COPIED FIGURES WERE WRONG. A FIGURE INHERITED
FROM ANOTHER AGENT'S REPORT GOES STALE WITHIN THE SAME SESSION** — this file has been edited three
times today. **Name the tool, not the number.**

---

## ⚠️ FIVE DOCUMENTS CARRY THE SAME CANDIDATE — dispatched, and the hypothesis may yet be wrong

`language_and_glossary.md`, `passing_and_receiving.md`, `risk_management.md`,
`defensive_zone_coverage.md`, `offensive_zone_play.md` all cite Hockey Canada **7.5(a) or (b) and
never 7.5(c)**. Coordinator measured each for a boards-or-goal-frame context: **all five have one**
(3–7 hits). `defensive_zone_coverage.md` is the strongest — 5 citations, 7 context hits.

⚠️ **The reporting agent labelled it correctly: *"a candidate list, not a finding."*** Several may
price no book to a match penalty, in which case there is no asymmetry and nothing to fix.

⚠️⚠️ **AND A DECLARED RISK ON THE WHOLE HYPOTHESIS, flagged by the agent against its OWN five
additions:** whether 7.5(c)'s *"unable to protect or defend themselves"* limb is **narrowed anywhere
else in `hc.txt`** — an interpretation, a casebook situation, a minor-hockey scoping clause. **It
read 7.5(a)–(e) and Interpretation 1 only.** ⚠️ **If something carves the match penalty back, five
additions have already shipped into `zone_entries.md` on the unnarrowed reading.** **The dispatched
agent reads the rest of Section 7 FIRST.**

---

## ⚠️ A NEAR-MISS ON ROUND 59's FAILURE — REPORTED BY THE AGENT AGAINST ITS OWN CLEAN RUN

> *"`site/src/data/diagrams.json` now differs from HEAD in **two** units, not one. The second is
> **`winger-offensive-zone-patches`**… **The text is coherent and reads as finished work — but I
> never read its source edit, and my clean `check_absolutes` run ('408 caption/describe units
> scanned') covered it. Mechanically checked, reviewed by nobody.** That is round 59's failure mode."*

⚠️ **The observation about CERTIFICATION SCOPE is exactly right and the coordinator caused the
condition** — two agents touching the diagram build in one session.

✅ **But the coordinator checked, and the RISK DID NOT MATERIALISE.** `git diff HEAD` on
`diagrams.json` shows exactly two changed units, and **both have a named author who read and
verified them**: `winger-offensive-zone-patches` was authored, built and verified by its own agent —
which confirmed its string in the build product **before trusting any checker** — and this rebuild
republished identical content. **Nothing unreviewed shipped.**

⚠️ **The standing lesson survives anyway: a clean `check_absolutes` run certifies the TREE, not the
agent's own work.** An agent that rebuilds is publishing everything in the module set, read or not.
**When two agents will touch the diagram build in one round, the second must be told whose work it
is republishing** — that brief did not say so, and only the agent's own diligence turned it into a
report rather than an incident.

**And the second-order finding is real:** `winger-offensive-zone-patches` sends a winger to *"the
side of the net… to arrive as the shot is taken"* **with no goal-post posture limb** — the identical
gap, found by accident. **Repair dispatched.**

⚠️ **Declared and still open:** *"Every net-front arrival caption in the other 32 diagram modules is
unexamined."* The census form is `check_caption_hosts.py --rule-like` plus **a route-tip sweep for
arrivals within ~15 ft of `(85, 0)`** — nobody has run it.

---

## ⚠️ NEW — A SLASH BETWEEN TWO BOOK NAMES VOICES AS A DISJUNCTION, IN THE LAYER HEARD ALONE

Found by a `winger.md` agent **in its own draft**, from a render rather than a checker, and
**verified by the coordinator in the renderer's source.**

`scripts/md_to_speech.py:355` — the symbol table:
```python
("/", " or "),      # 'NHL/IIHF', 'and/or': Polly's own reading varies
```
⚠️ **The author knew the pattern existed.** So `NHL/PWHL 42.1` voices as ***"NHL or PWHL forty-two
point one"*** — **a disjunction where both books are meant.**

The agent's account: *"My first attempt saved characters with `NHL/PWHL, USA Hockey and Hockey
Canada add a match penalty`. Voiced alone it read as a disjunction, **which re-creates the exact
defect I was sent to fix, in the exact layer.** It passed `check_facts`, `check_links` and
`check_absolutes` cleanly."*

**Corpus census, run by the coordinator: 9 book-pair slashes, 5 of them in the ` ```facts ` layer**
— the layer voiced alone with a 300 ms break either side:
```
playing_without_the_puck.md:315   NHL/IIHF
time_and_space.md:448             NHL/IIHF
defender.md:159                   NHL/IIHF
winger.md:468                     NHL/PWHL   (pre-existing; the agent's own draft was a 6th)
body_contact_and_battles.md:623   NHL/IIHF
```
⚠️ **No checker looks for this**, and the ambiguity only exists in the spoken layer — on the page a
slash between two book names reads as "both" without difficulty. **Row: read all five voiced and
decide per line; an explicit "and" costs two characters over a slash.**

---

## ⚠️ AND THE SHOOTING REPAIR CAUGHT ITSELF CONTRADICTING A LIMB QUOTED AT SEVENTEEN SITES

> *"I wrote *'meet a goal post with an arm or a **shoulder** first'* — **which contradicts the
> corpus's own shoulder prohibition** (*'Never hit the boards or glass with the tip of your
> shoulder'*, quoted at seventeen sites). The source says *'an arm, a leg, or anything but your head
> first.'* Changed to **'an arm or a leg first'** in all three places."*

⚠️ **A repair written from a source can still contradict a standing corpus limb, because the source
does not know what the corpus already says.** Caught by re-reading against the corpus, not the book.

**It also caught a false ABSENCE claim in its own text:** *"reaches a match penalty in two books"* —
⚠️ **false. `sources/nhl_rules.txt:5455` has NHL 42.4 (discretionary) and `sources/hc.txt:6097` has
Hockey Canada 7.4(c) (MANDATORY).** Only the IIHF and CARHA lack one. **It removed the count
entirely rather than correcting it**, which is the right instinct — a count of books goes stale as
`sources/` grows.

⚠️ **AND THE MAJOR WAS IN A SECOND BLOCK NOBODY NAMED.** `shooting.md:291`
(*"Contact with the goaltender at the net front"*) carries the same charging ladder and stops at the
same rung. **Two blocks, one brief, one named.**

---

## ⚠️ THREE MORE COORDINATOR CENSUSES REFUTED BY MEASUREMENT

**Every hand-copied figure this wave has been wrong. This is now the rule, not the exception.**

- **`shooting.md` block census — BOTH HALVES WRONG.** The brief said `:450-463` was tight and
  `:376-383` had room. Measured: `:450-463` held **12 facts, 5 coaching** (three slots free);
  `:376-383` held **7 facts, 7 coaching — ONE slot left**. ⚠️ **The brief recommended the tighter
  block as the roomier one.**
- **`center.md` KT8 word count.** The brief said *"cut to 288 words today"*. Measured: **369 words**
  before the edit. **The 288 figure does not reproduce.**
- **`switching_positions.md` layer map.** The brief named `:491` as the body; **it is the Common
  Mistakes bullet.** The body is `:231` — **and it was the one layer already correct.**

⚠️ **THE STANDING FIX: a brief names the layers to CHECK and the tool to run. It does not assert
what a tool would say.**

---

## ⚠️ TWO FACTS-LAYER NARROWINGS REPORTED BUT NOT REPAIRED — both need characters nobody has

- **`winger.md:468` narrows CARHA 52(b) to the crease.** Full text: *"charges a goalkeeper while the
  goalkeeper is within the goal crease **or who injures an opponent as a result of a charge**"* —
  ⚠️ **so for a winger who charges a goaltender OUTSIDE the crease and injures them, CARHA's
  major-plus-game-misconduct is still mandatory.** The body at `:489` quotes it in full, so it is a
  facts-layer narrowing. **Needs ~13 characters that do not exist without trading out a caveat,
  which the style guide forbids. Wants a restructure or a second `Rule:` line.**
- **`shooting.md` Key focus, Overview and Key Takeaways all teach the screen and none carries the
  posture limb.** The repair met its brief (facts + Common Mistakes + body). ⚠️ **KT6 and KT7 on
  screening are pure crease law — which is the ratio problem the re-aiming names.**

---

## ⚠️ THE 69.7 CARVE-OUT — LANDED IN THREE LAYERS, AND THE BRIEF WAS WRONG TWICE

✅ Repaired in `center.md` body, facts and KT8, with the EIHL counterweight so the instruction is not
softened. **Refuted in the brief:**

1. ⚠️ **The signposting is NHL-ONLY.** *"(refer to Rule 69.7 for an exception)"* is the NHL's;
   **the IIHF's 69.3 carries no cross-reference to 69.7** — its pointer is to Appendix IV's table.
   The exception applies in both books; the signpost does not.
2. ⚠️ **"IIHF 69.7 is word-identical" — materially identical, not word-identical.** It writes
   *"the goal crease"* where the NHL writes *"the crease"*.

**And it caught itself over-scoping the counterweight twice:** *"Do not carry that comfort into a
**British rink**"* — ⚠️ **it had verified one British league, not British hockey** — then softened
again to *"Assume it does not survive into the EIHL"*, because **the Casebook writes a flat
criterion rather than expressly repealing 69.7, so the inference is the agent's and not the book's.**

⚠️ **HIGHEST-VALUE FOLLOW-UP, declared:** **USA Hockey 625(b) and Hockey Canada 8.5 were NOT reached
for a rebound/loose-puck carve-out.** If either writes one, the corpus's NHL/IIHF-only scoping is
understated. **And `winger.md` and `offensive_zone_play.md` teach the same net-front rebound and
almost certainly carry the same flat claim.**

---

## ⚠️ AND THE SWITCHING_POSITIONS REPAIR REFUTED THE BRIEF'S LAYER CLAIM

The brief said *"body `:491`, facts `:212`/`:213` and Common Mistakes all carry the material
correctly — so the Key Takeaway is the only defective layer."* **Wrong on two counts:**

1. ⚠️ **`:491` IS the Common Mistakes bullet, not the body.** The body unit is `:231` — **and it was
   the one layer already correct**, carrying *"The NHL and IIHF books provide no minor for it at all
   (43.2 in each)"* verbatim.
2. ⚠️ **TWO FURTHER LAYERS had the same defect** — facts `:213` and Common Mistakes `:491`, both
   naming only USA Hockey and Hockey Canada. **`:213` is the worse: voiced alone with no surrounding
   context at all.**

> *"**Repairing KT6 alone would have been the partial propagation the brief warned about.**"*

⚠️ **A coordinator asserting which layers are clean is asserting something it has not measured.
Name the layers to CHECK, not the layers that are fine.**

### Two more self-caught overstatements, both softenings, and one is a new shape

- **The repair of a softening introduced a softening.** Rewriting KT6 as a three-book list left
  Hockey Canada represented only by *"reaches a match penalty at 7.5(c)"* — ⚠️ **so a reader could
  infer HC's floor is a plain minor, which 7.5(a) (*"A Minor penalty AND a Game Misconduct"*) rules
  out.** Restored as *"writes none either"*.
- ⚠️⚠️ **ATTRIBUTION DRIFT MANUFACTURED IN NEW TEXT.** The first facts draft attached *"or
  diagonally from behind"* — **USA Hockey 608's definitional wording** — to the NHL/IIHF 43.2 claim.
  **NHL 43.1 defines the act differently** (*"a player who is not aware of the impending hit… contact
  is made on the back part of the body"*). ⚠️ **`check_quote_drift.py` CANNOT SEE THIS by
  construction** — it keeps the closest match across all sources, so one book's wording credited to
  another scores clean. **Caught only by the author re-reading against the books.**

**Also repaired, from the rules-verifier's precision note:** *"the IIHF Rule 1.2 minimum on both
dimensions"* → the actual text, *"60m long and 26m to 30m wide"* — **a width minimum and a single
official length, not a minimum on both.**

⚠️ **Open and deliberately not decided: the PWHL also writes no provision for a minor
(`pwhl_rules.txt:4512`).** The agent left it out because adding a fifth book lengthens a unit it was
told not to lengthen, and flagged rather than decided. **That cuts against "you checked four books
and this corpus holds ten" — worth settling deliberately, not by default.**

---

## ⚠️⚠️ THE "SHARPEST RESIDUAL RISK OF THE WAVE" WAS A FALSE PREMISE, AND COUNTING KILLED IT

**23 September 2026.** Three reports in a row carried this, each inheriting it from the last:

> *"`game_management.md`'s agent moved roughly **seventeen rule citations** into more prominent
> positions on the document's own authority… **A rule that was already misstated is still
> misstated, now in a more prominent position.** That is the sharpest residual risk of this wave."*

⚠️ **It originated in the FIRST agent's own loose self-description of its work**, was inherited by a
`rules-verifier` which flagged it as its largest declared gap, was relayed by the coordinator into a
repair brief — **and is false.**

The agent sent to act on it **counted all 18 citations in `git show HEAD:` against the working
tree**, rather than reasoning about them:

```
16 of 18 identical in count  (56.4×6, 56.5×13, 604(a)×5, 604(b)×3, 640(b)×10,
                              640(g)×10, 640(h)×8, 7.3×11, 63.8×13, 81.4×16,
                              11.1×26, 601×24, 610(c)×10, 67.2×14, 67.5×13, 614(b)×18)
87.1: 18 -> 19   a GAIN, from a newly added takeaway
82.1: 29 -> 27   the ONLY loss — both in the one Overview paragraph the re-aiming rewrote
```

> *"**What actually happened is RE-ORDERING INSIDE units, not relocation BETWEEN them** — which is
> precisely the repair CLAUDE.md's 'single best observation' prescribes. Every Common Mistakes
> bullet that changed gained a leading instruction and **kept its citations in place.**"*

**And the one real loss is the re-aiming working as designed:** the icing no-change limb survives in
four other layers, so **the rule numbers left the summary layer while the substance and the book
scope stayed.**

⚠️ **THE LESSON: an agent's prose description of its own diff is not a measurement of its own diff.**
Three readers in a chain trusted *"moved roughly seventeen"* and none counted. **`git diff` is the
authority on what a diff did, and a count takes one command.**

---

## ⚠️ A "STRAY" CITATION THAT WAS LOAD-BEARING — REMOVING IT WOULD HAVE BROKEN THE ARGUMENT

The same `rules-verifier` reported `game_management.md` KT10's **NHL 84.1** as *"Overtime —
Regular-season… I could not connect it to the claim. Likely a stray."* The coordinator relayed it as
*"check and remove if so."*

⚠️ **It is not a stray, and the verifier said why itself: it read the takeaway IN ISOLATION.** The
body at `:399` uses 84.1 as **the second of three explicit counts**:

> *"(2) Rule 84.1 does not measure numerical strength in skaters alone; it sets three-on-three
> overtime at 'a numerical strength of three' skaters **and one goalkeeper** — the goalkeeper is
> counted inside the figure, so six players against six is equal strength."*

Verified at `sources/nhl_rules.txt:9001-9002`. ⚠️ **81.1, 81.3 and 84.1 are the three counts of one
structural-reading argument, and KT10 cites all three because it is COMPRESSING that argument.
Removing 84.1 would have left a reader with two counts of a three-count refutation.**

⚠️ **A citation that looks unconnected in a summary layer may be carrying a body argument the
summary is compressing. Read the body before calling a citation stray.**

---

## 🔴 A GAP IN `check_absolutes.py` — AN AFFIRMATIVE LADDER THAT STOPS ONE RUNG SHORT

Found by the `center.md` agent against its own replacement text, and **verified by the coordinator
as a genuine coverage gap rather than a bug.**

Its draft Key Takeaway clause stated the goaltender-contact tier as **major plus game misconduct**
— when the NHL, USA Hockey and Hockey Canada all reach a **match penalty above it.** Its note:
***"`check_absolutes.py` did NOT flag it."***

**Why the tool is right not to.** Its docstring scopes it to two shapes:
- an unscoped **DENIAL** of a tier — *"no minor exists"*, *"no minor option at all"*
- an unscoped **CAP** — *"it is **only** a minor"*; and *"a cap is a defect when the sentence does
  not say WHOSE cap it is"*

⚠️⚠️ **The defect was NEITHER. It was an AFFIRMATIVE LADDER stated correctly and stopped one rung
short.** It names books, it names tiers, every word in it is true — **it simply omits the top rung.
Nothing in the sentence denies anything and nothing caps anything, so there is no string for the
tool to match.**

⚠️ **This is the SHORTENING failure mode with no linguistic signature.** A denial and a cap both
leave a word behind (*no*, *only*). **A truncated ladder leaves nothing.** Every compression in this
wave could produce one and every gate would pass.

**Do NOT widen `check_absolutes` to chase it** — a broad pattern there is what its own comments warn
against (*"Deliberately narrow: a broad pattern here produces…"*), and a ladder legitimately stops
where the sentence's scope stops. **The only thing that finds this is reading the ladder against the
books.** Record it as a known blind spot and put it in the safety brief, which is what caught it.

⚠️ **AND IT WAS CAUGHT BY THE AGENT REVIEWING ITS OWN NEW TEXT, NOT BY A REVIEWER.** That makes the
"re-read your replacement text against the file and report what you catch in yourself" instruction
the highest-yield line in any brief written this wave — **it has now produced seventeen findings no
checker saw.**

---

## 🔴 THE SPECIES SWEEP — DISPATCHED, BECAUSE ONE INSTANCE IS NOT A COUNT

**The shape has two parts and part 2 is what makes it a critical:**
1. a **book's limb dropped** from a shortened summary layer, **and**
2. a surviving ***"X is the exception" / "only X" / "X writes no…"*** clause **in the same spoken
   unit** that a listener now attaches to the wrong thing.

⚠️ **The compression that produced it ran across the whole wave** — `zone_entries` (11 takeaways
re-ordered, two demoted), `defensive_zone_coverage` (KT4 767→353), `switching_positions` (KT6
1,400→310), `center` (KT8 1,109→288), plus `game_management`, `forechecking_systems`,
`risk_management`, `defender`, `goaltender` and `winger`. ⚠️ **It is a PER-DOCUMENT READ, NOT A
GREP** — the dropped limb leaves no string to search for.

---

## 🔴🔴 NEW FAILURE SHAPE — A RULE NUMBER THAT IS RIGHT IN ONE BOOK, CARRIED INTO A SENTENCE ABOUT ANOTHER

**23 September 2026. A coordinator brief cited "PWHL 63.2(viii)". The agent checked and refused it.**

> *"**There is no PWHL Rule 63.2(viii).** In the PWHL book **Rule 63 is Slashing**. Delay of game is
> **Rule 65**… Had I pasted the brief's citation the document would have shipped a **fabricated rule
> number pointing at a slashing rule.**"*

**Verified by the coordinator afterwards:**
```
NHL  Rule 63 = Delaying the Game   -> 63.2(viii) is CORRECT for the NHL
PWHL Rule 65 = Delaying the Game   -> 65.2(viii) is the PWHL's equivalent
PWHL Rule 63 = Slashing
```

⚠️⚠️ **THIS IS WHY IT IS DANGEROUS: `63.2(viii)` IS CORRECT.** It appears across `content/` in a
dozen documents and **every one of those is an NHL citation and is right.** The number is not wrong;
it was **carried into a sentence about a different book.** The coordinator relayed it from an
agent's report, and the report's author had the same slip.

⚠️ **NO CHECKER IN THIS REPOSITORY CAN SEE THIS.** `check_links` validates anchors, not rule numbers.
`check_quote_drift` compares quoted *characters* and a bare citation is not a quotation.
`check_rule_scope` reports book-scope divergence between units citing the same number — **which
would score this as two books legitimately citing 63.2, because that is exactly what it looks like.**

**The rule: a rule number is book-specific and does not travel. When a claim moves between books,
RE-DERIVE the citation in the new book's own text — never carry the number across.** The PWHL,
IIHF, USA Hockey and Hockey Canada all renumber relative to the NHL, and the corpus already records
that *"the numbers do not travel"* for hooking. **It is true for every rule, not just that one.**

⚠️ **Corrected in this plan at the one site that carried it. `content/` was checked and is clean** —
every `63.2(viii)` there is an NHL citation.

---

## 🔴 THE COMMIT GATE BLOCKED — 23 September 2026, and it found what the reviews had not

Verdict **BLOCK** on C3, C4, C6, C7, C8, C10, C11. C1, C2 and C9 passed. **All of it was correct and
none of it was argued down.** The blocking conditions in short: no `rules-verifier` and no
`safety-reviewer` had seen any new or moved rules text; two documents were reviewed and then
**repaired again**, so the shipped text was unreviewed; `zone_entries.md` was **named nowhere** in
the review record; **no Astro build had run** since `site/` changed (`site/dist` was older than HEAD);
and **two partial propagations were created inside the commit itself.**

### ⚠️ THE TWELFTH OVERSTATEMENT, AND IT RAN THE SOFT WAY — a true quotation with a false consequence

`defender.md:68` quoted Hockey Canada 10.1(ii) **accurately** and concluded an accidental
over-the-glass *"costs you the faceoff rather than two minutes."*

**`sources/hc.txt:4848-4852`, Rule 6.4(a) Junior & Senior:** *"…no penalty will be assessed, **but
the defending team may not make a line change.**"*

⚠️ **That is exactly the currency a tired defender flipping it out is trying to buy — the line told
them the play was cheap.** And `risk_management.md`, **edited in the same commit**, stated it
correctly. ✅ **Repaired**, 292/300, verified against primary text rather than against the sibling.

### ✅ AND THE REPAIR REFUTED ITS OWN FIRST DRAFT, TWICE

- ⚠️ **The FACEOFF consequence is NOT division-scoped.** Rule **6.3(e)(i)** applies in every
  division; only the line-change denial is Junior & Senior. The first draft would have implied both
  were.
- ⚠️ **The USA Hockey parallel is HALF FALSE.** It holds on the penalty (610(c) is deliberate-only)
  and **breaks on the consequence** — there is no line-change denial anywhere in that book. *"as
  under USA Hockey"* was **removed rather than repaired.**
- ⚠️ **A SOFTENING in the pre-existing text:** *"no strict over-the-glass minor"* was unscoped, but
  **HC 10.1(v)** — *"A goaltender who shoots or bats the puck directly out of the playing surface"* —
  **carries no deliberateness word.** The denial is **skater-only**. Now scoped.
- **Extras found that the brief did not carry:** Interpretation 1 Example 1 extends 6.4(a) to a
  defending-zone clear that reaches the neutral zone and goes straight out (*"No change would be
  permitted"*); Example 2, if it deflects off a teammate, *"A line change would be permitted."*

**Still open, declared:** the agent's facts line drops 6.4(a)'s *"excluding the goaltender"* for
8 characters of headroom — ⚠️ **voiced alone, a listener could carry it to their goalie.** And
`defender.md:84` is a ~3,000-character bullet covering the NHL and IIHF exhaustively that **never
mentions USA Hockey or Hockey Canada** — left deliberately (a fourth restatement is the propagation
risk) **but a reader who reads only it comes away thinking two books are the whole story.**

---

## 🔴🔴 THE CROSS-DOCUMENT DIFF FOUND A CONTRADICTION THE WAVE CREATED TODAY

**The check this plan called "the highest residual risk and the first thing to run". It was.**

- Owner `offensive_zone_play.md:451` (facts, **voiced alone**) and `:466`: ***"Be still at the moment
  of release."*** *"Plant and obstruct. Constant shuffling gives the goalie flashes of the puck
  through the gaps."*
- `center.md:13`, **written today**, one spoken unit: *"…**screen when your defenceman winds up**, and
  go to the net for the rebound… **Keep moving while you do it**."*

⚠️ **The *"it"* is the three-item list and item two is the screen.** It repeats in **three more
spoken units** — `:398` (facts, alone, in the same block as the screen instruction), `:403` (two
sentences, opposite instructions) and `:709` (a 15-word Common Mistakes unit with no context at all).
**The counterweight exists in exactly ONE place, inside a long body bullet.**

⚠️⚠️ **THE DIAGNOSIS: the owner scopes "keep moving" to THE WALL (`:679`, `:688`); `winger.md`'s wall
instruction is *"feet wide and still moving"* and its net-front instruction is *"planted"*.
`center.md` IS THE ONLY ONE OF THE THREE THAT APPLIES WALL ADVICE TO THE NET FRONT.** The general
advice reached every layer; the scope reached one. **Repair dispatched.**

⚠️ **No checker could see this.** Both sentences are true English, each document is internally
consistent, and they live in different files. **Only reading three documents SIDE BY SIDE found it —
and the agent that wrote the defect flagged the risk against itself.**

### ⚠️ AND THE DIFF REFUTED A RECOMMENDATION THIS PLAN WAS ABOUT TO ROUTE

An agent proposed tightening `offensive_zone_play.md:527` by **deleting *"well"*** from *"rather than
well before it"*. **Refused, on a measured render:**

> *"A listener hears **'before the release'** and **'rather than before it'** FOURTEEN WORDS APART,
> and the only thing that would have told them these are not the same clock is the word the proposal
> would delete. Removing *'well'* would make the corpus state a knife-edge with no tolerance in ten
> places at once."*

**Disposition reversed: the owner KEEPS its wording and the borrowers adopt it.** ⚠️ **The owner's
wording wins on the merits, not merely because it is the owner's — and it was the borrower's own
agent that proposed the change.**

---

## 🔴🔴 THE INVERTED TEST IS RUN, AND THREE ALTERNATIVE SHAPES REACHED NO POSITION PAGE AT ALL

**23 September 2026. The first time this project asked "which of the OWNER's limbs never arrived?"
rather than "does the borrower match the owner?" — and it is the finding of the round.**

`content/systems/defensive_zone_coverage.md:106` names five alternative shapes. Greped against all
five `content/positions/*.md`, both the promoted layers and the whole file:

| limb | promoted layers | anywhere in any position page |
|---|---|---|
| **collapsing box** | 0 | **0** |
| **strong-side overload** | 0 | **0** |
| **Box+1** | 0 | **0** |
| hybrid | center, winger only | all five |
| low zone collapse / man-on-man / weak-side D / goalmouth | present | present |

⚠️⚠️ **`:106`'s WHOLE ARGUMENT is that the invariant is "somebody is home", not "your partner is" —
and the position pages only ever show the house default.** Three of the five shapes that make the
rule conditional are absent from the corpus's position layer entirely.

⚠️ **The four `overload` hits on position pages are FORECHECKING overloads** (F3 shading to the puck
side) — a different concept. **That makes the zero worse, not better: a reader who greps for the
word finds the wrong thing.**

⚠️ **AND `goaltender.md` SCORED A HARD ZERO ON EVERY BASE-SHAPE TERM IN ITS PROMOTED LAYERS** — no
goalmouth, no doorstep, no weak-side defenceman, no low zone collapse. ⚠️ **The goaltender is the
one player who has to know who has the doorstep, and their page's first two layers never say.**

**This MAY be correct simplification** — a winger arguably does not need Box+1 named. **Nobody
knows, because until today nobody asked.** Rows for whoever owns those five files.

⚠️ **The measuring agent's own caveat: `center.md` and `winger.md` were live under other agents
while it measured, so the position-page figures are a snapshot that may already be stale.** Re-run
before acting.

**Method, for reuse on the other owners:** take the owner's named alternatives, grep the borrowers
for each, and read the hits — the `overload` case proves a bare count is not enough.

---

## 🔴 NEW 23 September 2026 — THE TACTIC PROPAGATED AND THE VOCABULARY DID NOT

Second run of the inverted test, on `defending_the_rush.md`, and it found a **different** shape from
the first:

⚠️ **The four named backchecking systems — *defence early strike*, *wide-lane lock*, *midlane
backcheck*, *hound the puck* — appear NOWHERE in `content/positions/`. Zero hits, all four names,
all five files, body included.**

**Meanwhile that document's Common Mistakes `:872` and KT8 both tell a reader that not knowing
WHICH OF THE FOUR their team runs is a mistake.** And `winger.md:40` carries the **substance** of
the hound-the-puck alternative — verified, paraphrasing `:330`/`:354` closely with the *"what is
wrong under both"* limb intact — **but never names it.**

> *"So the tactic propagated and the vocabulary did not, and **a reader cannot match the instruction
> to what a coach says out loud.**"*

⚠️ **That is a new defect class and it is invisible to every method used so far.** A substance check
passes. A layer test passes. An owner-agreement check passes. **Only naming the system lets the
reader ask their bench the question the corpus keeps telling them to ask** — which is step 3 of the
cardinal rule, and the cardinal rule's whole point.

**Of the five causes of odd-man rushes, ONE reached the position pages** — the neutral-zone
turnover, at `winger.md:260` and `defender.md:341`, **both in the body, neither in a promoted
layer.** *"Nobody above the puck"* arrived as a habit but not as part of the named set. Three never
arrived.

✅ **The three backcheck-lane variants DID arrive** — `center.md` carries all three in its facts
layer and Overview, wording consistent with `:279`. **That one is clean, and it shows the propagation
CAN work.**

---

## ⚠️ A TAXONOMY THAT CANNOT BE ATTACKED FROM DISK — AND THAT IS THE CORRECT STATE

The four named backchecking systems are sourced to **Johnston & Walter, *Hockey Plays and
Strategies*, 2nd ed. (Human Kinetics, 2019)**. ⚠️ **The book is NOT in `sources/`, and no rulebook
settles a coaching taxonomy.**

The trailer already labels it *"evidence of **convention** only; nothing in it is used here for a
rule"*, and the document disclaims its own ordering twice (`:279`, `:535`).

⚠️ **So the earlier cross-check that "took the taxonomy entirely on the owner's word" had no
alternative available. That is the correct state, not a defect** — and the earlier report's framing
of it as an exposure was too harsh on itself. **Whether "four" is even the right count rests
entirely on the citation, and nothing on disk can change that.**

**The only thing that would: acquire the book, or say plainly that the taxonomy is one author's.**
The document already does the second.

---

## 🔴 SELF-CAUGHT OVERSTATEMENTS: NINE, AND ONE RAN THE OTHER WAY

Two more, both reported unprompted:

- **In draft:** *"none of them saves a slide"* for the puck-first carve-out. ⚠️ **False — Hockey
  Canada 8.6 expressly carves out a deliberate slide where the puck is contacted first**, and `:626`
  calls it *"more generous than the NHL's"*. Rewritten to the scoped *"USA Hockey's relief never
  saves a slide."*
- ⚠️ **And one in the OPPOSITE direction, which is the first of those recorded:** a demoted takeaway
  said *"three of them name the race for an iced puck as boarding"* where the original added USA
  Hockey reaching the icing half at 624(d). **That is a SOFTENING, not a hardening.** The agent
  checked and `:395`/`:866` carry it, so nothing was lost — **but it proves the drift is not always
  toward the harsher rule, and a reviewer watching only for hardening will miss half of them.**

---

## ⚠️ AN HONEST PROCESS ERROR WORTH COPYING

> *"I did not capture the before-figure — I ran `check_layer_echo` only after editing, **which was my
> error**. The shared material I removed was the duplicated USA Hockey 608 Casebook block and the
> duplicated 616/639 carve-out reasoning, so it will have fallen, **but I am not stating by how
> much.**"*

⚠️ **Declining to state a number you did not measure is the behaviour this whole file exists to
enforce.** Every brief already says "report the ratio before and after"; **it should say the same for
`check_layer_echo` whenever a demotion is in scope.**

**Still open from this document:** `:649`/`:669`'s *"all four books"* crease claims were **not
tested** against CARHA or the PWHL — in a layer the agent did not touch. Unattacked.

---

## 🔴 NEW — A PENALTY PRICED ONLY IN THE SUMMARY LAYERS, WITH NO BODY CARRIER

Found during a Key Takeaway demotion, and it is why "prove a carrier" was in the brief.

**NHL 59.3 / 59.5** — cross-check major, no injury required, automatic game misconduct — **has NO
body carrier in `defensive_zone_coverage.md`.** It lives only in Common Mistakes and Key Takeaway 4.
The body at `:84`/`:115` says *"never cross-check the back"* and **never prices it.**

⚠️ **The agent kept it verbatim in the shortened kernel rather than leave a single carrier, which
was right** — but the gap is real and pre-existing: **the document tells you not to do it and only
the summary layers say what it costs.**

**Row:** carry the tariff into the body. ⚠️ **This is the shape the demotion method is designed to
surface, and it worked** — every other limb of that takeaway had a proven carrier (facts + body +
Common Mistakes), tabulated in the report. **KT4 went 767 → 353 words with nothing lost.**

---

## ⚠️ THE FOUR-BOOK SCOPE UNDERSTATES ITS OWN SUPPORT, MEASURED

Checking-from-behind floor, tested against the two books beyond the usual four:
- **CARHA 53(a)** — *"A Minor penalty plus a Game Misconduct or a Major penalty plus a Game
  Misconduct at the discretion of the Referee"* — not a bare minor.
- **PWHL 43.2** (`pwhl_rules_layout.txt:4110`) — *"There is no provision for a minor penalty for
  checking from behind"*, word for word the NHL's.

⚠️ **The claim HOLDS in both, so the corpus's four-book scope UNDERSTATES its support rather than
overstating it** — the `check_disclosures` direction, and the one no reviewer stops on. ⚠️ **The
agent correctly did NOT widen to a count-free claim**, because that would need the other 36 books
read. **Scope honestly or read the books; do not split the difference.**

---

## 🔴 THE SELF-CAUGHT OVERSTATEMENT: SEVEN, AND THIS ONE NAMES ITS MECHANISM

> *"Drafting KT4 I wrote **'no book prices that check at two minutes alone'**, carrying the BODY's
> unscoped phrasing into a summary layer where the original KT4 had the SCOPED form (*'capped at a
> minor in none of the four'*). Simpler and broader than the evidence. **`check_absolutes` passed on
> BOTH versions**, so nothing mechanical would have caught it."*

⚠️ **The mechanism is now named: the body may legitimately phrase a claim loosely because its
surrounding prose scopes it; a SUMMARY LAYER inherits the words and not the surroundings.** So
**demotion and promotion both carry this risk, in opposite directions** — and no checker sees either.

---

## 🔴🔴 CRITICAL 23 September 2026 — A TRUNCATED QUOTATION IN A BRIEF PROPAGATED A PERMISSION WITHOUT ITS SAFETY LIMB

⚠️⚠️ **THE COORDINATOR CAUSED THIS, AND THE MECHANISM IS NEW: the brief's EVIDENCE was truncated,
and truncated exactly at the safety clause.**

A repair brief told an agent to name the *hound the puck* alternative in `content/positions/winger.md`
and quoted the owner to it. The owner is `content/systems/defending_the_rush.md:330`. **The brief
quoted the sentence as far as *"That is a legitimate system with its own logic"* and stopped.** The
owner's sentence does not stop there. It ends:

> *"**What it never means is finishing into the back of a player skating at their own end boards —
> see the subsection below.**"*

That subsection (`defending_the_rush.md:360–376`, *"What hounding never means"*) exists **because the
geometry is the checking-from-behind one.** NHL 43.2 and IIHF 43.2 both write that there is no
provision for a minor — **the floor under both books is a major plus a game misconduct.**

⚠️ **And `winger.md` carries NO checking-from-behind material for a player DELIVERING contact** —
all of it (`:113`, `:670`, KT6) is written from the receiving side (*never turn your back*). **So a
winger was told to pressure the carrier all the way in, and the document never said where that ends.**

**The agent did nothing wrong.** It propagated faithfully what it was given. **Caught by a review,
in an uncommitted file; nothing shipped. Repair dispatched.**

### ⚠️ THE GENERAL LESSON, AND IT IS NOT "QUOTE MORE"

`CLAUDE.md` already says a brief's **proposed wording** is a sketch, never a patch. **This is the
other half and it was not written down: a brief's QUOTED EVIDENCE is also a sketch.** A coordinator
choosing where to end a quotation is making an editorial judgement about a sentence it has not read
in context — and the natural place to stop is after the clause that makes the point, **which is
exactly where a safety carve-out tends to live.**

**So: quote to the END OF THE OWNER'S SENTENCE AND ITS FOLLOWING CLAUSE, or give the line reference
and tell the agent to read it.** ⚠️ **Prefer the line reference.** The agent that reads the owner
sees the limb; the agent that reads the coordinator's excerpt cannot know it was cut.

---

## 🔴 NEW — THE `winger.md` REPAIR CREATED THREE LAYER DIVERGENCES IN ONE FILE

A repair is new text, and this one is measured proof. After today's pass the document states:

- **TWO counts of the crease-line books** — four (incl. CARHA) at `:22`, `:666`, KT8; **three at
  `:470`, `:541`, `:554`.** Four is right, verified in primary text at `iihf_rules.txt:631`,
  `usah.txt:4509`, `hc.txt:961`, `carha.txt:270–274`.
- **THREE scopes for the charging audit** — six at `:467`, `:668`, KT8; **five** in the body
  blockquote `:488`; **four** in the Sources trailer `:754`. Six is right, verified.
- **The net-front split in four layers and its CONTRADICTION in four others** — `:22`, `:427`,
  `:437`, `:451`, **including both facts blocks, which are voiced alone.** ⚠️ **The owning section
  still states the pre-repair instruction while the summary layers state the corrected one.**

⚠️ **AND THE SOURCES TRAILER NOW DENIES THE BODY.** The PWHL is cited five times in the document and
appears **zero times** in the trailer; CARHA is cited for Rule 52(b) and its Glossary while `:748`
still reads *"CARHA was read for those four clauses only"* and names 57(a)–(d). **A trailer that
positively denies the reading the body rests on is the state that makes a later reviewer suspect
fabrication.** Fix is **provenance, not deletion**.

**Standing lesson: a partial propagation is worse than none**, because the layers now disagree and
each looks internally plausible. **Every repair brief must name EVERY layer the claim lives in, and
the agent must report which layers it reached.**

---

## ⚠️ NEW — A BETTER FORMULATION OF THE NET-FRONT SPLIT, PROPOSED BY A REVIEWER

Worth recording whether or not it is adopted:

> *"The split is written as two instants a fraction of a second apart. At the moment of release both
> players are at the net; **a reader cannot act on 'before the release' versus 'with the release'.**
> The thing that actually differs is **STATE, not timing**: the screener is stationary and
> established on the eye line; the driver is moving, and late enough that a defender has not had time
> to tie them up."*

It also fixes `winger.md:32`'s internal tension — *"arrive early and a defender ties you up; arrive
late and the rebound is already covered"* is **a window, not an instant.** ⚠️ **The split's
SUBSTANCE was independently corroborated from `offensive_zone_play.md:445`/`:1027` and stands either
way; this is about whether a reader can act on it.**

---

## 🔴 NEW — THE ABSENCE TEST NOBODY CAN AUTOMATE, RUN ONCE AND IT FOUND THREE

A reviewer compared `center.md`'s offensive-zone sections against `offensive_zone_play.md`'s section
headings — **a comparison no agent had ever run.** Absent from every layer of `center.md`:

- ⚠️ **The ROYAL ROAD. `grep -c "royal road" content/positions/center.md` returns 0** — while
  `offensive_zone_play.md:12` leads its Key focus with it and `:145` calls it *"the highest-value
  pass type measured, roughly double the next one"*. **The centre in the slot is both its primary
  receiver and, from behind the net, its primary maker.**
- **CYCLING** — the word appears once, in a facts line, undefined. `center.md:315–338` covers exactly
  that situation and teaches none of the owner's cycle reads. ⚠️ **The asymmetry is the tell: this
  document DOES teach rim-vs-reverse in the DEFENSIVE zone (`:99`, `:105`).** The corpus gives the
  centre the read where the puck is going out and withholds it where the puck is being held in.
- **NET-FRONT** — the owner splits Screening / Tips / Rebounds into three taught skills;
  `center.md:392` gives 45 words, followed by ~47 lines of crease law.

⚠️ **THE FIX IS ADDITIVE. Do not cut the crease law to make room** — it is the safety layer.

⚠️⚠️ **AND THE LIMIT OF THE METHOD, stated by the reviewer and it is the honest one:** *"It cannot
find a tactic that is universally true for a position and **absent from the whole corpus** — nothing
in this repository would flag it, because there is no document to diff against. **Somebody who plays
the position, reading the Key focus cold, is the only instrument that finds the rest.**"*

---

## 🔴 NEW 23 September 2026 — THE CAPTION LAYER DID NOT GET THE REPAIR, AND A CENSUS FOUND IT

⚠️ **A repair reached four layers of `winger.md` and TWO layers of `offensive_zone_play.md`, and
stopped at the diagram caption — which is SPOKEN INTO its host document.** A listener gets the
repaired body and then the superseded instruction.

`site/src/diagrams/positions.mjs:619`, caption for `winger-offensive-zone-patches`
(owner `content/positions/winger.md`):

> *"…and tip-ins live, so **time the crash to arrive as the shot is taken rather than before it**."*

**That is the unsplit instruction the wave was repairing.** Verified a **single site and not a
shared constant** — `grep -rn "time the crash to arrive" site/src/diagrams/*.mjs` returns one line
and nothing imports it.

⚠️ **THE AGENT THAT MADE THE REPAIR PREDICTED THIS EXACTLY and could not check it:** *"a caption
stating arrival timing into a host document is invisible to everything I did."* **It was right, and
the census it asked for found the hit on the first pass.**

⚠️ **THE METHOD THAT FOUND IT, because it generalises:** search the **built** captions in
`site/src/data/diagrams.json` — not the `.mjs` sources and not `content/` — for the claim's
vocabulary, and read every hit against its `owner`. 204 diagrams, 20 hits on arrival/net-front
wording, one genuine defect. ⚠️ **`check_caption_hosts.py` cannot do this for you**: it reports
where a caption is spoken into a document that does not own it, and this caption **is** in its
owner. **No tool in this repository sees a caption that contradicts its own host.**

### ✅ REPAIRED — AND THE COORDINATOR'S FRAMING WAS REFUTED, WHICH SAVED THE DIAGRAM

⚠️⚠️ **THE CAPTION WAS CORRECT FOR THE PICTURE.** The brief called it *"the unsplit instruction"* and
implied a reversal. The agent checked the drawn routes first:

> *"**The drawn play is the DRIVE, not the screen.** The diagram places `LW` in his own left faceoff
> circle with a bowed skate route to the side of the net. Under the repaired split that is *'driving
> in from the wall or your circle'* — the job whose arrival **does** coincide with the release. So
> the old sentence was **correct for the picture** and wrong only in being **unscoped**… **Had I
> taken the brief's framing at face value and moved the caption to 'planted before the release', I
> would have mistaught the route the diagram actually draws.**"*

**The repair was a SCOPE CLAUSE, not a reversal.** ⚠️ **This is the third time in this wave that
leaving the wording to the agent that read the material prevented a coordinator-caused defect** —
and the brief did leave the call, deliberately, which is why it was caught. The agent also wrote a
comment above the caption recording **why it was NOT reversed**, so a future editor does not
"complete" the repair by breaking the picture.

Swept the rest of `positions.mjs`: **no other caption states arrival timing.** Build ran with the
absolute binary, exit 0, 204 diagrams; `check_absolutes` certified **408 caption/describe units**
against the fresh build.

⚠️ **`site/src/data/diagrams.json` IS MODIFIED and must be staged WITH `positions.mjs`, or the site
ships the old caption.** The build product is not optional here.

⚠️ **STILL OPEN — the other ~200 diagrams.** `systems.mjs`, `technique.mjs` and the rest were out of
scope. `check_caption_hosts.py --rule-like` is the way to find any other caption stating net-front
arrival timing.

⚠️ **AND TODAY'S REPAIR CREATED A TWO-DOCUMENT WORDING DIVERGENCE:** `winger.md:9`/`:665` say
*"rather than before it"*; `offensive_zone_play.md:526` says *"rather than **well** before it"* —
looser. The caption matched its **host**, deliberately, and reported rather than resolved it.
**Routed to the agent holding `winger.md`.** ⚠️ **The build is MANDATORY** — `check_absolutes.py` reads captions from the build product,
so a caption edit without `node site/scripts/build-diagrams.mjs` is unchecked by construction, and
**`node`/`npm` are nvm zsh FUNCTIONS whose shim run exits 127 while the wrapper reports 0.** Use
`/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/node`.

⚠️ **STANDING LESSON: A CONTENT REPAIR IS NOT PROPAGATED UNTIL THE CAPTIONS HAVE BEEN CHECKED.**
Add the caption layer to the propagation chain in `CLAUDE.md`'s "Writing content" step 5 — it
currently reads *body → facts blocks → Common Mistakes → Key Takeaways → every other document*, and
**the caption layer is not in it.**

---

## 🔴 THE SELF-CAUGHT OVERSTATEMENT IS NOW A MEASURED RATE, NOT AN ANECDOTE

**Six in one wave, every one in the same direction — simpler and harsher than the source — and every
one caught by the agent re-reading its own new text, never by a checker.** The newest two:

- *"Keep the blade on the ice… **then none of what follows can reach you**."* ⚠️ **False, and
  contradicted two sentences later by the bullet's own text** — once the blade reaches a *person* it
  is Rule 60 / 621(a)-(c) / 9.5 / 7.6, and *"the blade comes down after the tip as well as before
  it."*
- A box-out attributed to *"this document teaches your own defencemen"* — ⚠️ **in an offensive-zone
  document "your own defencemen" are the ATTACKING team's.** The box-out is the opposing defender's.

⚠️ **This is now a property of summarising, not of any agent.** **Every brief must carry the
instruction to re-read replacement text against the surrounding prose and report what it catches in
itself** — it is the single highest-yield line in any brief written this wave.

---

## 🔴🔴 NEW 23 September 2026 — TWO DOCUMENTS TAUGHT OPPOSITE NET-FRONT TIMING, AND ONE CONTRADICTED ITSELF IN A SINGLE SENTENCE

**The largest content finding of the wave.** Not a qualification lost in transit — **a flat
disagreement between two documents about what a player should do.**

- `content/systems/offensive_zone_play.md:526` — *"you have to be there, deliberately, **before the
  shot**, or you lose that race by default"*; `:34` — *"you win the race for a rebound by deciding
  to be there before the shot, not by reacting after it."*
- `content/positions/winger.md` stated the **opposite** as a universal in **three** layers — Key
  focus *"Arrive as the puck is released, not before"*, Overview *"Arrive early and a defender has
  time to tie you up"*, Common Mistakes *"Arriving at the net front too early."*

⚠️⚠️ **AND `winger.md`'s KEY FOCUS CONTRADICTED ITSELF IN ONE SENTENCE** — it told the reader to
*"take the goaltender's eyes"*, which requires being **planted**, and to arrive as the puck is
released, **which makes that screen impossible.** A reader could not act on the sentence.

**Repaired in `winger.md` across four layers** by splitting two jobs that had been collapsed:
**planted before the release if the net front is your assignment; arriving with the release if you
are driving in from the wall or your own circle.**

⚠️⚠️ **THE SPLIT IS UNSOURCED CRAFT AND ITS AUTHOR SAID SO:** *"No source in this repository states
this distinction in those terms. **If the split is wrong, it is wrong in BOTH documents now.**"*
**Two agents are now testing it** — one on `offensive_zone_play.md` with authority to refute it, one
reviewing `winger.md`. **Neither may propagate it without deciding it is right.**

⚠️ **Why no checker could see this:** both sentences are plausible English, both are internally
consistent, and they live in different files. `check_layer_echo` looks for restatement, not
contradiction. **The only thing that found it was an agent told to read the OWNER document.**

**Still open:** whether `offensive_zone_play.md` needs the same split.

---

## ⚠️ NEW — "YOU CHECKED FOUR BOOKS" FAILED IN BOTH DIRECTIONS IN ONE FILE

Found unprompted in `winger.md`, and the two errors run opposite ways:

- **CARHA was MISSING from the crease-line list in two layers.** Facts `:461` said *"three books
  count that line as crease"*; KT8 named *"the IIHF, USA Hockey and Hockey Canada"* — ⚠️ **while the
  Common Mistakes bullet in the SAME FILE named four, including CARHA.** The document contradicted
  itself. Corrected to four, CARHA's Glossary entry *Creases* cited.
- **The PWHL was MISSING from the charging-ejection scope.** `sources/pwhl_rules.txt:4473` prints the
  NHL's sentence word for word. Two layers said *"in every book"* and named five; both now name six
  **and say six**, so the claim is self-verifying within the sentence rather than resting on an
  unstated set.

⚠️ **THE REPAIR FORM IS THE LESSON: make the sentence carry its own count.** *"In every book"* plus a
list of five is unfalsifiable by a reader and goes stale silently as `sources/` grows. A census
confirms the corpus mostly uses the **count-free** form already — *"every book that settles the
question in its rule text or glossary"* (`rink_map.md:18`/`:638`, `special_teams.md:1151`) — **which
is the pattern to copy.**

---

## ⚠️ NEW — `winger.md` KT8 GOT LONGER, AND THAT WAS THE RIGHT CALL

KT8 is the **~1,300-word crease-law unit voiced aloud as ONE block** that CLAUDE.md names as the
corpus's worst offender. This wave **added a seventh clause to it**, correcting two book-scope
errors inside it.

⚠️ **The agent declined to demote it in the same pass and was right:** *"doing it in the same pass as
a scope correction would have been the sweep this project warns against."* Demoting it needs a
**per-limb carrier test** — several limbs may be the only place a tariff lives outside its own
section.

**Row: KT8 demotion, with the carrier list supplied.** ⚠️ **Not one agent for the whole takeaway.**

---

## 🔴 NEW 23 September 2026 — THE PWHL IS A FIFTH TRAPEZOID BOOK AND `goaltender.md` NEVER NAMES IT

Found while repairing the trapezoid scope, **deliberately not acted on**, and the agent's reasoning
for not acting is the right one: adding a fourth book to one paragraph would leave the document's
own *"all five books"* and *"all four books"* arithmetic unreconciled in every other paragraph —
**a half-done propagation.**

Verified in primary text (rule numbers, not pages — `sources/README.md` records an eleven-stale
running-header dating trap in this file):

- **PWHL Rule 1.8** — *"No restricted Goalkeeper's Area, which will be known as a 'trapezoid' will
  be enforced."* (`sources/pwhl_rules.txt:871`)
- **PWHL Rule 27.8** — *"The PWHL does not apply a restricted area for goalkeepers."* (`:3044`)

⚠️ **And the PWHL contradicts itself the way the IIHF does:** **65.2(viii)** — ⚠️ **NOT 63.2(viii): the PWHL RENUMBERS, and its Rule 63 is SLASHING. 63.2(viii) is the NHL's number and is correct everywhere it appears for the NHL. This line carried the NHL's number into a PWHL sentence, and an agent caught it before it shipped a citation pointing at a slashing rule** — still carries the
NHL's inherited *"plays the puck outside of the designated area behind the net"* clause, and
**Table 11 row (vi)** still lists *"Playing puck in restricted area"*. **The operative rules abolish
it; the delay-of-game list and the summary table are stale furniture.**

⚠️ **`grep -c PWHL content/positions/goaltender.md` returns 0, while NINE other documents name it**
and `rules_primer.md:23` already counts it in scope (*"which makes six"*).

**Row — one scoped pass, not a side-effect:** `goaltender.md`, `breakouts.md:949`/`:973`/`:1047`,
`defender.md:168`, `rules_primer.md`, and the style guide's owner rows.

---

## ⚠️ NEW — AND THE PWHL BREAKS AN "NHL AND IIHF" FRAMING FOR OVER-THE-GLASS TOO

`sources/pwhl_rules.txt:5330` — **Rule 65.2(iii)**, *"Shooting or batting the puck (with the hand or
with the stick) over the glass from the defending zone"* — **is the strict over-the-glass minor.**

⚠️ **So the corpus-wide "the NHL and IIHF" framing for this rule is a four-book scope stated in a
directory holding 42.** `defender.md`'s own sentences are **affirmative rather than denials**, so
nothing there is wrong — ⚠️ **but any sibling that writes "only the NHL and IIHF" IS.** Census the
corpus for the denial form. This is CLAUDE.md's *"you checked four books and this corpus holds ten"*,
live again.

---

## ⚠️ NEW — FOUR OF MY FINDINGS REFUTED IN ONE BRIEF, AND ONE REAL GAP I DID NOT PREDICT

The `defender.md` / `switching_positions.md` brief listed eight items. **Four were refuted**, each
with evidence:

- **"`:17` over-the-glass scope is wrong"** — **refuted.** *"Under the NHL and IIHF books"* is
  **correct** for the four books this document is written against: Hockey Canada 10.1(ii) and USA
  Hockey 610(c) are both **deliberate-only**. The promoted sentence needed no change.
- **"the `:21` diagram may voice out of order"** — **refuted by trying it.** It renders correctly
  (*"Overview." → "Diagram…" → "The key facts for this section."*). The agent **moved it, measured
  the result, and reverted**, because below the block put the caption's *"That net-front assignment
  is a low zone collapse"* immediately after the near-identical `Convention:` fact. **Net change:
  none.**
- **"apply the ordering reframe"** — **largely refuted for these two files.** The tariff-first shape
  is not present: both Key focus layers score 0–20% rules-bearing, both Overviews 0–17%, every
  Common Mistakes bullet leads with the mistake, every Key Takeaway opens on a bolded instruction.
  ⚠️ **There was nothing to re-order, and a coordinator that assumed there was would have paid an
  agent to damage a correct document.**
- **"Key Takeaways lack the charging-ejection tier"** — **refuted as correct simplification.** KT3
  already carries the operative half (*"none of the four books caps it at a minor"*) and the full
  ladder already lives in **three** layers. **A fourth restatement is the propagation risk the
  reframe names, not thoroughness.**

⚠️ **AND THE GAP NOBODY PREDICTED, which is worth more than the four refutations:** `defender.md`'s
Overview and body both promise ***"the four-book detail is in the defensive-zone section below"*** —
**and the block carried three books.** Hockey Canada was simply absent. Added as a `Rule:` fact,
verified at `sources/hc.txt:7414-7416`: **10.1(ii)** reaches only a player who *"deliberately shoots,
bats, or throws the puck outside the playing surface"*.

⚠️ **A document that PROMISES a book count and delivers fewer is invisible to every checker in this
repository.** Census the corpus for *"the N-book detail"* / *"all four books"* promises and count
what the target block actually holds.

---

## ⚠️ NEW — A SECOND SELF-CAUGHT OVERSTATEMENT, SAME DIRECTION, SAME DAY

`switching_positions.md` KT6 was rewritten as a kernel (≈450 → ≈310 words; **CM → KT echo 20.1% →
17.2%**, the corpus's worst pair). The agent caught its own first draft:

> *"My first draft said the IHUK rule authorises narrow rinks 'for every level bar Sutton and
> Coatbridge' — **'bar' reads as banned; the source caps them at U16.**"*

⚠️ **That is now the THIRD self-caught overstatement in two days, and all three ran the same
direction: simpler and harsher than the book.** It is a property of summarising, not of any one
agent. **A shortening is a repair, a repair is new text, and new text has not been reviewed.**

⚠️ **One judgement call flagged for review, not settled:** the women's-hockey limb (IIHF 101.1) is
now **pointed at** in KT6 rather than restated. It survives in full in the body `facts` block at
`:211` (voiced alone) and Common Mistakes `:491`. **Decide whether a kernel may point.**

---

## 🔴 NEW 23 September 2026 — A FINDING CAN BE RIGHT ABOUT THE DEFECT AND WRONG ABOUT THE MECHANISM

⚠️ **This is a new shape and it is more dangerous than a wrong premise**, because the finding
survives being checked while its stated cause does not.

A review reported `risk_management.md:222` as *"a `Never:` value whose **SECOND EM DASH** introduces
the exception, so the negation carries across it"* — citing the style guide's measured em-dash
inversion. The coordinator relayed it into a repair brief in bold. **The repairing agent went to the
line and found no second em dash: the exception is introduced by a SEMICOLON, and the value holds
only one dash.**

**The SUBSTANTIVE finding was correct** — a `Never:` line whose trailing clause describes the
permitted strong-side overload, voiced alone with a 300 ms break either side, really does risk being
heard as a prohibition. It was repaired (195 → 167 chars, exception preserved at `:226`, `:227`, the
diagram caption, Overview `:26`, Common Mistakes and KT5, all verified in the render).

⚠️ **But anyone re-deriving this finding from "a second em dash" will not find one**, will conclude
the finding was false, and may revert a correct repair. **A mechanism quoted from a review is not a
fact about the file.** Verify the mechanism at the line, not just the defect.

---

## ⚠️ NEW — A BRIEF THAT REFUTED ITSELF, AND THE AGENT SPOTTED IT

The same brief told an agent to re-order **Overview `:22`** to lead with its instruction, and in the
next clause noted that **`:24` is "already right and is the model"**. The agent declined and was
correct:

> *"`:22` contains **no instruction at all** — it is the one-line framing sentence, and `:24` begins
> **'So** change where you are standing before you decide', which is the instruction and which
> grammatically depends on `:22`. Re-ordering `:22` would have orphaned `:24`'s 'So' and duplicated
> it. **The brief's own note that `:24` is already right is what refutes its `:22` entry.**"*

⚠️ **The refutation was available inside the brief.** A coordinator listing sites from a report
without reading the pair together will keep producing this. **Read adjacent line numbers as a unit
before listing them as separate rows.**

Also refuted in the same pass, both correctly: *"FIVE of five Key focus paragraphs put the
instruction last"* — `:18` already had its instruction as the second short sentence, so four were
genuinely bad; and `:289`'s *"a defender on their feet with a good stick beats a defender sliding
with a great one"* is a **restatement of a mechanism established two sentences earlier**, not a
fresh comparative ranking. ⚠️ **Marking `:289` would have been exactly the paranoia the owner's
standing rule forbids** — and the earlier review had listed it as a finding.

---

## ⚠️ NEW — AND THE AGENT CAUGHT AN OVERSTATEMENT IN ITS OWN REPLACEMENT TEXT

Reported unprompted, before the final checker run. Its first M4 wording said the first-period
prohibition covers *"the two clock-driven cases above… neither works until the clock is running
out."* ⚠️ **That is false for one of the two:** the document's own case at `:610`/`:618` — stopping
play when pinned and exhausted with no change available — **carries no clock scope and is not a
late-game trade.**

> *"I had summarised two unlike cases into one harsher, simpler rule."*

**That is the `body_contact_and_battles.md` failure verbatim, in a different document, a day later,
and again it was caught only by the agent re-reading its own new text against the file.** It is now
the second independently-observed instance, which makes it a pattern rather than an anecdote:
⚠️ **summarising drifts toward the harsher, simpler rule, and a shortening is a repair, and a repair
is new text.**

---

## ⚠️ NEW — `risk_management.md` KT5 IS A CANDIDATE NOBODY HAS OPENED

Declared by the repairing agent as out of its brief: **KT5 is a ~700-word single spoken unit that is
almost entirely rulebook tiering.** By the corpus's own standard — `winger.md` KT8 (~1,300 words),
`switching_positions.md` KT6 (~1,100) — it qualifies. **Nobody has looked at it.** Key Takeaways for
this document sit at 70% and were not assigned.

Also open from the same handover: the **other seven Common Mistakes bullets** (`:809`–`:812`,
`:816`–`:818`) were not measured for the last-clause-instruction shape; and
`neutral_zone_systems.md` needs a **reciprocal pointer** — the regroup link was added one way only,
because the agent did not own that file.

---

## ⚠️ NEW 23 September 2026 — TWO OWNERS LEAD WITH DIFFERENT PLAYERS FOR THE HIGH SLOT

Found by the `center.md` repair agent, which explicitly said it was **reporting rather than
resolving** because it owned neither file. ⚠️ **The cross-check method could not have found this:
it asks "does the borrower match the owner", so where two OWNERS disagree it has no test.**

- `content/foundation/rink_map.md:629` — *"under the low zone collapse assumed here the goalmouth
  belongs to the weak-side defenceman and **the high slot to the centre**, or to the weak-side
  winger covering down for them"*
- `content/systems/defensive_zone_coverage.md:150` — **Centre | Low support, strong side**;
  `:152` — **Weak-side winger | …collapsing into the high slot when the centre goes low**

**They reconcile** — the centre has it by default, the winger fills when the centre goes low — and
`rink_map.md` hedges correctly (*"who owns each is a coaching choice rather than a law"*). **But
they LEAD with different players, and a reader who meets only one gets a different default.**

**Row:** one agent, both files, decide which leads and make the other point at it. Not a critical;
neither statement is false. ⚠️ **Do not "fix" this by deleting a hedge** — `rink_map.md:629`'s
coaching-choice flag is non-negotiable 7 done correctly.

---

## ⚠️ NEW — THE PREVALENCE ROW WAS 2½× BIGGER THAN THE BRIEF SAID, IN ONE FILE

The brief named **two** *"most teams"* sites in `center.md`. The agent found **five**: `:9`, `:36`,
`:613` (facts), `:625` (body blockquote) and **KT5's tail at `:757`**. ⚠️ **So the other four
prevalence briefs in this wave are probably also short, and the agents should be told to census
their own file rather than work the named list.**

⚠️ **AND NOT EVERY "most" IS A DEFECT.** The same agent checked *"most teams run more than one"* at
`:248`/`:756` and **refuted it as a finding** — `neutral_zone_systems.md:10` states it in those
words. **A sweep would have "repaired" a correct sentence.**

⚠️ **The brief also gave `rink_map.md:302` for the slot definition. It is `:312`.** A line number
is a figure and it went stale the same way every other figure in this project has.

---

## ⚠️ NEW — THE INVERTED TEST HAS NEVER BEEN RUN, AND IT IS CHEAP

Every cross-check so far asks *"does the borrower match the owner?"* **Nobody has asked the
inversion: which of the owner's limbs never reached the position page at all?**

`defensive_zone_coverage.md:106` names a **collapsing box** and a **strong-side overload**. Neither
appears in any promoted layer of any position document. That may be correct simplification or it may
be an omission — **the test has never been run, so nobody knows.**

**Row:** five owners, one list of base-shape limbs each, grep the five promoted layers. Named by the
cross-check as the next round's highest-value pass.

⚠️ **Related and still open: `content/systems/offensive_zone_play.md` was in the cross-check's brief
and was not read.** The net-front and cycle half of `winger.md`'s and `center.md`'s Key focus —
arrival timing, screening, where the shot comes from — **is unchecked against its owner by anybody.**
Dispatch it specifically; do not assume the cross-check covered it.

---

## ⚠️ NEW — A LANDMARK PHRASE CENSUS, AND WHY ONE IS NEEDED

`"the middle third of the neutral zone"` (`center.md:26` facts, `:40` prose) names **a third of a
third** — a ~17-foot band no owner defines. The owner `neutral_zone_systems.md:28` says the middle
third **IS** the neutral zone. `center.md:222` says *"the middle of the neutral zone"* (a lateral
sense). Three formulations in one document.

⚠️ **It was caught only because someone happened to grep the exact phrase.** The promoted layers are
full of landmark vocabulary checked by reading rather than by census: *"below the hash marks"*,
*"inside the faceoff dots"*, *"the top of the circles"*, *"the outside third"*, *"level with the
opposing defenceman"*. **Row:** census the landmark vocabulary across the five promoted layers and
resolve each hit against `rink_map.md` (regions) or `language_and_glossary.md` (vocabulary).

---

## ⚠️ NEW — RULES RE-ORDERED AS STRINGS ARE NOW MORE PROMINENT AND STILL UNVERIFIED

`game_management.md`'s re-aim moved roughly seventeen rule citations — 56.4, 56.5, 604(a), 604(b),
640(b)/(g)/(h), 7.3, 63.8, 82.1, 81.4, 87.1, 11.1, 601, 610(c), 67.2, 67.5, 614(b) — into more
prominent positions **on the document's own authority**. The agent verified only the two it quoted
and said so plainly: ⚠️ ***"A rule that was already misstated is still misstated, now in a more
prominent position."***

**Row: `rules-verifier` over `game_management.md`.** This is the sharpest residual risk of wave 2
and it applies to every re-aiming pass — **re-ordering is not verification**, and the reframe moves
rules toward the listener rather than away.

## ⚠️ NEW — RULEBOOK SECTION NAMES: the census the last commit declared un-run, now run

**Run 22 September 2026, by the coordinator, while wave 1 was live.** The commit record for `5737fb0`
ended by saying this census **had not been run**; that sentence is what produced it.

**The class:** every claim in `content/` that points at a NAMED DIVISION of a rulebook — *"its
Glossary"*, *"its Definitions"*, *"the Note to"*, *"its Casebook"*, *"the Appendix"*.
⚠️⚠️ **IT PASSES EVERY MECHANICAL GATE BY CONSTRUCTION**, because the surrounding rule text is right
and only the provenance is wrong. It is how CARHA's crease answer was credited to a *"Definitions"*
section that book does not have, in four layers, until yesterday.

### ✅ What holds — and most of it does

Verified against the books on disk: **Hockey Canada's Glossary** (`grep -ci '^ *GLOSSARY' sources/hc.txt`
= 2, `DEFINITIONS` = 0), **CARHA's Glossary** (same shape), **USA Hockey's Glossary**, and the **NHL's
Glossary of Terms**. The corpus names all four correctly.

### ❌ What does not — the IIHF, at four sites

**The IIHF rulebook has no section called "Definitions."** Both `^GLOSSARY` and `^DEFINITIONS` score
**0** in `sources/iihf_rules.txt`.

⚠️ **A zero from a label is not an absence, and this was checked before being reported.** The
substance is present and the corpus is right about it — the section is **APPENDIX II — DEFINITION,
TERMINOLOGY & TERMS**, singular *Definition*: TOC at `iihf_rules.txt:401`, heading at `:8027`, running
header at `:8024`, and **Blind-sided Hit defined at `:8040`**. The **2026/27 edition agrees** (TOC
`:445`, heading `:8083`). **So this is a PRECISION defect, not a false claim** — the reader is sent to
a real definition under a name the book does not use.

- [x] `content/foundation/rules_primer.md:453`, `:473` — **handed to the live wave-1 agent holding that
  file**, as a finding to verify and refute, explicitly separate from its callout brief.
- [ ] **`content/systems/special_teams.md:660` and `:1201` — WAVE 2.** Nobody holds that file in wave 1
  and the coordinator must not edit content it would then be certifying. ⚠️ **`:1201` is in the Sources
  trailer**, so the fix has to reach both the body and the trailer, not one of them.

### ⚠️ What this census could NOT do, stated so the next one is scoped

The regex returned **1,249 hits across 38 documents** and is far too loose to act on — it catches every
ordinary *"the Note"* and *"the Casebook"* in running prose. **Only the rows where a BOOK was named
within 90 characters were testable, and only those were tested.** The large unattributed buckets — 340
*Casebook*, 307 *Note*, 93 *Glossary* with no book resolvable nearby — **have not been checked at all,
and a wrong one there is invisible to this method.** ⚠️ **It also cannot see the inverse failure: a
section named correctly but attributed to the wrong BOOK.** `check_quote_drift` shares that blind spot
— it keeps the closest match across ALL sources, so a sentence credited to one book while carrying
another's wording scores clean.

---

## 🔴 CRITICAL, NEW 22 September 2026 — THE RENDERER DELETES THE CORPUS'S ONLY MEDICAL DISCLAIMER

**Found by the `faceoffs.md` agent while refuting its own brief. Verified by the coordinator by
RENDERING, not by reading code.** Full evidence:
[`callout_flow_wave_1_2026-09-22.md`](../reviews/callout_flow_wave_1_2026-09-22.md).

`scripts/md_to_speech.py:3257` drops a blockquote **whole** when `"rule set:"` appears in its first 40
characters. **Every one of the 39 documents opens with a `> **Rule set:**` blockquote** —
`grep -rl '^> \*\*Rule set:' content/ | wc -l` returns 39 — so **anything else living in that block
never reaches a listener.**

⚠️⚠️ **`content/off-the-ice/conditioning_and_recovery.md:9` is the corpus's ONLY "not medical advice"
statement**, and it is inside that block:

> *"⚠️ **This document covers injury and health. It is a hockey document, not medical advice.** Nothing
> here diagnoses, treats or rehabilitates anything."*

**Proven absent from the audio:** `md_to_speech.py --only conditioning_and_recovery` renders 53 chunks
and 118,318 characters; `"not medical advice"` scores **0** in the SSML, while `"see a doctor"` scores
1. **A listener hears an entire document on groin injury, concussion and return to play with no scope
disclaimer at all.**

⚠️ **This is non-negotiable 4 violated by the RENDERER rather than an editor**, and no checker can see
it — `check_disclosures.py` renders through `md_to_speech` and inherits the same blindness.

- [ ] 🔴 **Decide the fix and it is not obvious.** The drop exists because `Rule set:` boilerplate is
  page furniture nobody wants read aloud; the block now carries non-furniture too. **Either the drop
  becomes LINE-SCOPED, or the disclosure moves out of the header.** `md_to_speech.py` is a shared tool
  — coordinator only, and between waves.
- [ ] **Two other stranded header lines**, both orientation rather than hazard and both lower-stakes:
  `goaltender.md` (*"the IIHF flags below are not decoration"*), `faceoffs.md` (*"Before you act on any
  IIHF flag below, find out which book is yours"*).
- [ ] ⚠️ **The census only probed MARKED header lines whose text is repeated verbatim below.** An
  unmarked disclosure stranded in a header — a provenance note, an edition caveat — is invisible to it,
  and **there are 39 header blockquotes.** A paraphrase below also reads as "stranded". **Read, do not
  sweep.**

---

## 🔴 `check_callout_flow.py` HAS TWO DEFECTS — FIX BETWEEN WAVES, NOT DURING ONE

**The coordinator wrote this tool this round to stop callout figures going stale in prose. Its docstring
says *"the figures now have an owner that prints them."* The owner was wrong.** Both defects were found
by the agents using it.

- [ ] **`classify()` at `:50` tests `startswith(("-", "*"))` BEFORE the ordinary-paragraph case**, so a
  paragraph opening `**Bold lead-in.**` is filed as a *list item* and dropped from the flow-breaking
  population. **293 bold-opening paragraphs misclassified corpus-wide, against 618 genuine list items.**
  In `core_principles.md` it reported **8** where the truth was about **25** — a 3× undercount in the
  document the owner named. An italic-opening paragraph goes the same way.
  ⚠️ **Every wave-1 figure is therefore a FLOOR. All live agents were told mid-wave.**
  ⚠️ **Also check the lazy-continuation case** — a bold-opening line inside a blockquote that does not
  itself start with `>` falls through to the same branch.
- [ ] **`stacks()` labels a run `[one blockquote]` whenever every line starts with `>`**, so **two
  adjacent blockquotes separated by a blank line score as one region** — two amber panels in a row,
  which is the defect the label tells an agent to ignore. Caught at `rules_primer.md:756-762`.
  **`stacks()` must track blank-line breaks.**
- [ ] **Add a `--markers` mode** printing per-line marker counts. The tool counts LINES and the audio
  counts MARKERS PER PARAGRAPH, and nothing in either says so — which is what made move 2 below
  invisible.
- [ ] **RE-MEASURE the corpus after the fix**, and re-queue whatever the undercount hid.

⚠️⚠️ **AND THE DOCSTRING MUST RECORD THE THREE MOVES, because the coordinator broadcast that there
were two and was wrong:**

| | move | census count | audio |
|---|---|---|---|
| 1 | **Keep the marker** — real limb | unchanged | unchanged |
| 2 | **Move the marker off the paragraph OPENING onto the hazard clause** | **drops** | **unchanged** |
| 3 | **Strip the last marker** — hedge only | drops | **loses the spoken `"Important."`** |

**Move 2 is free.** `classify()` returns `"own paragraph"` only when the line STARTS with the marker.
It is the right answer wherever a marker sits on structural furniture, and it **repairs** rather than
hides — a marker at a paragraph's head puts the spoken escalation on the word *"What"*.

⚠️ **`important = "⚠" in text` is PER PARAGRAPH and POSITION-INDEPENDENT** (`md_to_speech.py:2778`,
`:2784`; the glyph itself is silent at `:313`). A marker in a paragraph's last sentence still hoists
`"Important."` to its FRONT. **Blockquotes get the prefix too.**

- [ ] ⚠️ **And the style guide must record that the FACTS-BLOCK CARRIER TEST IS VACUOUS IN 13 OF 39
  DOCUMENTS** — `rules_primer.md`, `uk_rules.md`, `core_principles.md`, `rink_map.md`, `equipment.md`,
  `getting_started.md`, `conditioning_and_recovery.md` and six others have **no ` ```facts ` block at
  all**. The coordinator told every wave-1 agent to use it; three of those documents were live under
  that instruction. **A vacuous test reads two ways and the dangerous one is available.** The fallback
  is written up in the wave-1 record.

---

## ⚠️ NEW — BRITISH U10 PLAYS A DIFFERENT FACE-OFF, AND `faceoffs.md` NEVER SAYS SO

**Found 22 September 2026 by the coordinator, taking up the handover a `rules-verifier` named as the
single highest-value thing it could not reach.** That agent had verified the rewritten header against
IIHF, IHUK and the EIHL Casebook, and closed by saying it had **not** searched the four IHUK Rules of
Competition for a competition-level face-off departure.

**Two results, and the first is a refutation worth recording.**

✅ **The agent's actual worry does not materialise.** `ihuk_junior_roc`, `ihuk_nihl_roc`,
`ihuk_wnihl_roc` and `ihuk_u10_roc` **all score 0 for `Rule 76`** — no competition regulation displaces
the IHUK In-House Rules' replacement provision. **The document's rule claims stand.**

❌ **But `sources/ihuk_u10_roc.txt:124-139` describes a DIFFERENT PROCEDURE ENTIRELY**, under its own
*Face Off* heading:

- *"Coaches may wish to mark a face off dot on the ice"* — **there may be no dot.**
- *"The Level 2 coach acting as referee oversees the face off"* — **no official.**
- *"Coach/Referees to drop a puck as soon as a player from each team is at the faceoff point and ready,
  do not wait for teams to be set-up in a face-off formation"* — **no set position, no stick order.**
- *"Call the nearest player from each team to face-off"* — **no designated centre.**
- And at `:117`, *"Although no penalties are recorded"* — **so the bench-minor and ejection tiers this
  document teaches do not reach a U10 reader at all.**

⚠️⚠️ **`content/systems/faceoffs.md` names U10 FIVE times and every one is about BODY CHECKING**
(`:904`, `:909` and their summary echoes). **The face-off layer never mentions it.** The document
teaches stick-placement order, violation replacement, the 76.6 ejection and the 76.7 bench minor as
though they reach every reader, and for a British U10 player **almost none of it does.**

- [ ] **Add the U10 scope to `faceoffs.md`.** ⚠️ **This is a SCOPE limb, not a safety limb** — nobody
  is hurt by it — but it is the cardinal-rule failure in its other direction: presenting a rule as
  reaching a reader it does not reach. **Do not let it become "U10 is exempt from face-off rules"**;
  the accurate statement is that U10 runs a coach-refereed procedure with no recorded penalties.
- [ ] ⚠️ **Then ask the same question of every other document.** This was found only because one agent
  declared what it had not searched. **`ihuk_u10_roc` is 0 in the corpus outside `uk_rules.md`** —
  nobody has asked which other documents teach a procedure a British U10 reader does not play.

---

## 🔴 CRITICAL — "HOCKEY CANADA'S IS THE ONLY MANDATORY ONE" IS FALSE, AND IT IS IN FIVE PLACES

**Found 22 September 2026 by a `safety-reviewer` that read CARHA Rule 52 in full rather than grepping
it.** Fixed in `winger.md`; **three other files dispatched.**

**The false claim:** charging a goaltender reaches an ejection tier in all four books *"and Hockey
Canada's is only the one that is mandatory."*

**`sources/carha.txt:2559-2562`, Rule 52(b):**

> *"A Major penalty and a Game Misconduct **shall be assessed** to any player who charges a goalkeeper
> while the goalkeeper is within the goal crease or who injures an opponent as a result of a charge."*

**"shall be assessed" is mandatory. There are TWO mandatory books.**

⚠️ **The hazard, in the reviewer's words:** *"A CARHA adult-rec winger — the exact reader of a
net-front section — is told the ejection is the referee's discretion in their book. It is not… The
reader is left expecting two minutes and gets thrown out of the game."*

⚠️⚠️ **THREE OF THE FIVE SITES ARE ` ```facts ` LINES, VOICED ALONE** with a 300 ms break either
side — so a listener hears the false claim with no surrounding prose to soften it.

| file:line | layer | status |
|---|---|---|
| `positions/winger.md:485`, `:464` | body + facts | ✅ **fixed**, with a new Common Mistakes bullet |
| `positions/center.md:441`, `:410` | body + facts | dispatched |
| `technique/shooting.md:291`, `:492` | facts ×2 | dispatched |
| `hockey-iq/playing_without_the_puck.md:619` | facts | dispatched |

⚠️ **The repair form matters: COUNT-FREE.** The `winger.md` fix reads *"… under the NHL, the IIHF,
USA Hockey, Hockey Canada and CARHA alike, and two of them make it mandatory"* — **so it cannot go
stale as `sources/` grows**, which is how this defect was born. **And it got SHORTER while adding a
book**: the `Rule:` line went from 296/300 to **289/300** by substitution.

- [ ] ⚠️ **The wider question, which is a plan row and NOT a sweep.** `grep "in all four books"
  content/` returns **~40 hits across 20 documents**. Most are safe in direction. **Three are
  penalty-tier claims of the same shape and need checking against CARHA:**
  `systems/defending_the_rush.md:654` (penalty shot for throwing a stick),
  `positions/defender.md:377` (boarding onus, *"none of them caps boarding at a minor"*),
  `technique/body_contact_and_battles.md:1525` (slew-footing *"in all four books"*).
  **A document discussing four books because it discusses four books is CORRECT** — do not sweep.
- [ ] ⚠️ **THE TWO SIBLING REPAIRS AGREE ON FACT AND DIVERGED ON FORM, AND ONE IS ALREADY FRAGILE.**
  Checked by the coordinator after both agents finished, because two agents editing the same claim in
  sibling files is how contradictory sentences get written here. **They do not contradict** — both say
  the same three books add a match penalty. **But `center.md` NAMES them** (*"the NHL, USA Hockey and
  Hockey Canada"*) **while `winger.md` COUNTS them** (*"three of the five"*, twice, one of them in a
  ` ```facts ` line voiced alone).
  ⚠️⚠️ **And the count is already understated.** The `center.md` agent read **PWHL Rule 42.1**
  (`sources/pwhl_rules.txt:4472-4478`) — *"A minor, major or a major and a game misconduct shall be
  imposed on a player who charges a goalkeeper while the goalkeeper is within her goal crease"*, the
  NHL's sentence in the feminine — **so SIX books on disk carry the ejection tier, not five.** It
  correctly declined to add a sixth name, per the count-free standard. **`winger.md`'s "of the five"
  now carries a number that a reader with the PWHL book can falsify.**
  **Fix by SUBSTITUTION to the named form**, which is what the standard is for. Not urgent — the
  instruction is unchanged and the direction is safe — but it is the exact defect this round exists to
  stop, reintroduced by the repair.
- [ ] ⚠️ **`CARHA Rule 52 writes NO match penalty`, so the old *"all but the IIHF add a match
  penalty"* was wrong in the OPPOSITE direction too** — overstating rather than understating. The tier
  exists in that book (Rule 34 defines it; Rule 48(a) reaches one for deliberate injury, Rule 53(a) for
  checking from behind) but **Rule 52 contains none.** Both repaired files now distinguish the two
  outliers by their different reasons: the IIHF has no match penalty in its book at all; CARHA has the
  tier but does not write it into its charging rule.
- [ ] **`center.md` carries three FURTHER "four books" scope claims on other subjects** — two on the
  puck-located body-limb reading and one in Common Mistakes (*"none of the four books prices that hit
  cheaply"* on checking from behind). ⚠️ **Not a hazard** — CARHA 53(a) prices checking from behind
  heavily and 53(b) reaches a match penalty, so the direction is safe — but the scope is understated.
- [ ] **Two pre-existing quote-drift flags in `center.md`, not introduced by this round**: IIHF Rule
  101.1 at `:651` and `:788`, a terminal `.` inside the quote marks where the source sentence continues
  *"If two (2)…"*. One-character fix.
- [ ] **CARHA has its own crease / goaltender-interference regime** (`sources/carha.txt:3135-3175`) — a
  flat *"may not stand in the goal crease"* bar, a push-in relief, two separate minors for failing to
  avoid the goalkeeper. **None of it is in `winger.md`**, whose crease section is scoped to four books.
  ⚠️ **That section is now five-book on PENALTIES and four-book on GOALS**, which is defensible but a
  `rules-verifier` should settle it.

---

## ⚠️ THE OWNER'S READABILITY RULE CHANGES THIS WORKSTREAM'S TARGET

**See the top of `CLAUDE.md`.** Two consequences the callout work must now be re-judged against:

- 🔴 **The consolidation created WALLS, and under the new rule that is a DEFECT, not a fix.**
  Largest single amber panel measured in the built HTML: **2,868 words / 16,012 characters** on
  `positions/goaltender`; seven panels at or above ~8,900 characters. **This is the owner's complaint
  converted from many interruptions into one unskippable block.** A `site-reviewer` is looking now.
- ⚠️ **The census was measuring something the reader cannot see, and the owner noticed before anyone
  else did.** `core_principles.md` lost 22 of 37 markers and **its amber panel count did not move.**
  The owner: *"I don't see what has changed for core principles, it looks the same."*

### ⚠️⚠️ THE MECHANISM, AND IT CORRECTS AN EARLIER FINDING IN THIS PLAN

**`WARNING_RE` at `site/src/plugins/remark-corpus.mjs:25` is `/^\s*(⚠|❗|🚫)/u` — ANCHORED.**
A paragraph becomes an amber `<aside>` **only when the marker is at the START**.
**`md_to_speech.py:2778` tests the WHOLE paragraph.**

**So moving a marker off a paragraph's opening onto the hazard clause removes the amber panel AND
keeps the spoken `"Important."`.**

⚠️ **An agent recorded that move 2's benefit was *"an artefact with a known expiry date"*, produced
by the `classify()` bug and due to vanish when that bug was fixed. That was right about the CENSUS and
did not know about the RENDERER.** The census benefit was indeed an artefact and has now expired. **The
rendering benefit is real, permanent, and is the single cheapest readability win available** — verified
on `core_principles.md`'s Key focus: panels removed, both safety ideas still speak `"Important."`,
*"never duck"* still voiced three times.

---

## 🔴🔴 THE SITE REVIEW ANSWERED THE OWNER'S QUESTION, AND THE ANSWER IS NO

**22 September 2026. The first pass in this entire round to actually LOOK at the pages** — two earlier
attempts were blocked by a Chrome localhost gate the owner then fixed. Screenshots on disk; full record
in [`callout_flow_wave_1_2026-09-22.md`](../reviews/callout_flow_wave_1_2026-09-22.md).

**Verbatim:**

> *"**No. These pages do not read like a guide a player would read. They read like a rules-compliance
> annex, and the rendering makes it worse rather than better.**"*

### 🔴 C1 — the consolidation built walls, and mobile is far worse than the static estimate

| page | largest amber panel | desktop | **mobile** |
|---|---|---:|---:|
| `positions/goaltender` | 2,868 words | 5.7 screens | **13.3 screens** |
| `technique/shooting` | 2,096 words | 4.6 | **9.1** |
| `foundation/rules_primer` | 1,990 words | — | **8.8** |
| `systems/offensive_zone_play` | 2,035 words | — | ~7 |
| `systems/faceoffs` | 1,351 words | — | 6.8 |

⚠️⚠️ **The goaltender panel CONTAINS A NESTED AMBER PANEL** — a warning inside a warning, same
colour, no way to see where one ends.

⚠️ **And the pages are not pages.** `positions/goaltender` is **330,405 px tall at mobile — 415
screenfuls**; `rules_primer` is **498**. *"There is no reading strategy a player can apply to that."*

**The reviewer's threshold, and it is a usable one: no amber block should exceed roughly one mobile
screen (~800 px, ~200 words).** Seven panels are 4× to 13× that.
⚠️ **The fix is NOT CSS.** A 2,800-word four-rulebook comparison **is not a callout — it is a
SECTION**, with a heading, and the one sentence a player must act on lifted out as a short warning.

### 🔴 C2 — amber is spent on PROVENANCE, so it no longer means "this can hurt you"

**Reading the first nine amber callouts on `uk_rules` in order: EIGHT are governance, edition or scope
notes. ONE is a thing a player does** — *"If your helmet comes off during play, you must leave the ice
immediately."* **It looks exactly like the eight that do not.**

The largest amber panel on `faceoffs` opens *"⚠️ Edition note — the IIHF 2026/27 Rule Book, 29 August
2026"* and its body enumerates rule numbers found word-for-word identical between editions.

⚠️ **`content_style_guide.md:1116`'s own test — *"if every callout is amber, none is"* — FAILS to the
reviewer's eye on all five priority pages.** Amber is 13–20% of total page height everywhere.

⚠️⚠️ **CALIBRATION, AND IT CORRECTS BOTH THE REVIEWER AND THE COORDINATOR.** Before briefing any
re-classification wave, note that **two attempts to MEASURE this disagreed wildly and a third — reading
— settled it.**

- The `site-reviewer`, reading nine callouts, reported **8 of 9** on `uk_rules` were governance/edition/
  scope and **1** a player action.
- The coordinator's **keyword census said 3 of 23 (13%)** for the same document, and **29 of 372 (8%)**
  corpus-wide. ⚠️ **That regex was badly wrong** — it matched *edition*, *version*, *could not be
  verified*, and **missed SCOPE entirely**, which is most of them: *"the Elite League writes its own
  Rule 46"* is a scope note and scored as neither.
- **The coordinator then READ the same nine.** The honest split is about **six** provenance/scope/
  interpretive to **three** genuine player actions — `:148` (the Elite League carries the neck-guard
  requirement into PRACTICE), `:152` (university players are not exempt), `:203` (jewellery under EIHL
  Rule 9.5). **The direction holds; the 8-of-9 does not.**

⚠️ **So do not brief a wave off either number, and do not build a classifier.** A keyword pass cannot
tell *"the Elite League writes its own Rule 46"* (scope) from *"you must leave the ice"* (action), and
the corpus's own sentences do not signal which they are. **The classification is a READING job, one
document at a time** — the same lesson as the CARHA round, where a grep-built brief named three sites
and reading found nine.

- [ ] 🔴 **THE FIX IS RE-CLASSIFICATION, NOT DELETION — nothing is stripped and non-negotiable 4 is
  untouched.** `callout-note` and `callout-verify` **already exist and are barely used** (note is 3% of
  callouts on `goaltender`, **0%** on `core_principles`). **Provenance, edition notes and "the books
  disagree" belong there; amber belongs to penalty, injury and ejection.**
  ⚠️ **Hand this to `safety-reviewer` too** — a helmet-off ejection rendered identically to a footnote
  about which BUIHA document governs is a **safety-visibility** finding, not a cosmetic one.

### ⚠️ M1 — the coordinator's Key focus fix may have traded one defect for another

The owner's complaint is confirmed in the built page: items 1 and 2 render as full amber panels, 3–7 as
plain bold paragraphs. **The coordinator's repair moved the marker mid-paragraph, so those two will now
render as plain paragraphs with an inline amber run — siblings again, complaint closed.**

⚠️ **But then the two items that "can get you hurt or penalised" carry NO panel treatment at all, in a
list whose own intro promises they are the dangerous ones.** The reviewer could not verify the new
render. **Check that section after the next build.**

⚠️⚠️ **AND C2 IS THE REAL ANSWER TO M1.** If amber meant danger rather than provenance, those two
ideas *should* be amber and the other five plain — and that would read as meaning, not inconsistency.
**The Key focus looked wrong because amber is everywhere, not because two of seven were marked.**

### ⚠️ M2 — 28 unnamed `<aside>` landmarks per page

Every callout is an `<aside>` with no `aria-label` and no `role`. `uk_rules` exposes **28 unnamed
"complementary" landmarks**, `goaltender` 29. **A screen-reader user's landmark list is useless on these
pages.** Small fix (`role="note"`, or a `div`), real consequence.

### ✅ What passed, and two findings the reviewer RETRACTED against itself

Facts blocks render as labelled panels, not code blocks. **5,995 in-page fragment links across all 39
pages, 0 broken.** Contrast AA in both themes. No console errors, no off-origin requests, no horizontal
overflow at 396 px, theme toggle persists, search works.

⚠️ **It retracted two of its own findings after re-measuring** — a reported 200 broken anchors was a
path bug in its own script, and a "skip link stays off-screen" was measured mid-transition. **Both
retractions are in the record.** `/systems/faceoffs` 404ing without a trailing slash is expected under
`trailingSlash:'always'` plus the CloudFront rewrite and is **not** a production defect.

---

## 🔴 A STALE COUNT IN THE CORPUS'S MOST SAFETY-CRITICAL RULE — CHECKING FROM BEHIND

**Found 22 September 2026 by the `playing_without_the_puck.md` agent, which verified it and then
DELIBERATELY DID NOT FIX IT** — correctly, because it had not read the operative text closely enough to
write the tier language. **That restraint is the finding's provenance and it is the right call.**

`content/hockey-iq/playing_without_the_puck.md:721`, `:874` and **Key Takeaway 10 (`:935`)** all say
**three of the four books** reach a match penalty for checking from behind, naming USA Hockey 608(c),
Hockey Canada 7.5(c) and NHL 43.4.

**Two more books reach it:**
- **CARHA Rule 53(a)** — *"A Match penalty could also be assessed under this rule."*
- **PWHL 43.4** is headed *"Match Penalty"* (`pwhl_rules.txt:403`, `:4518`)
- **IIHF Rule 43 does NOT** — 43.3 is major + game misconduct, 43.4 is *"DISCIPLINARY MEASURES"*

**So five books, not three.** ⚠️ **The count is UNDERSTATED, which is safe in direction** — nobody is
hurt by being told fewer books punish it — **but it is the same staleness mechanism that produced two
criticals today, sitting in the rule this corpus treats as its most safety-critical.**

- [ ] **`rules-verifier` + `safety-reviewer` on those three sites.** Read PWHL 43.4 and CARHA 53(a)
  operative text in full. **Count-free repair.**

---

## 🔴 CRITICAL, REPAIRED — a match-penalty claim that was FALSE IN BOTH DIRECTIONS

`playing_without_the_puck.md:864` and `:936` read *"Only the IIHF's Rule 42 has no match-penalty tier
at all."* **Wrong twice:**

| book | match tier for charging | |
|---|---|---|
| NHL 42.4, Hockey Canada 8.5(c), USA Hockey 607(e) | yes | |
| **PWHL 42.4** | **yes** | ⚠️ **a fourth book the sentence excluded** |
| IIHF 42.1–42.5 | no | 42.4 is major + GM, 42.5 is disciplinary measures |
| **CARHA Rule 52** | **NO** | ⚠️⚠️ **and the corpus told a CARHA reader it HAS one** |

⚠️⚠️ **THE DANGEROUS HALF IS THE SECOND.** A CARHA adult-rec reader was told their book carries a
match penalty for charging. **It does not** — 52(a), 52(b) and a Note, no match limb. **Repaired
count-free** to *"Not every book carries that tier — the IIHF's Rule 42 and CARHA's Rule 52 stop at the
major and the game misconduct"*, closing on the cardinal-rule limb *"find out which book your league
plays."*

---

## ⚠️ CARHA'S MANDATORY EJECTION IS KEYED TO THE CREASE — the repair that would have over-promised

**The `goaltender.md` agent caught this and every earlier repair today missed it.** CARHA 52(b)'s
mandatory major + game misconduct applies *"while the goalkeeper is **within the goal crease**"*.
**Hockey Canada 8.5(b) has no such limit and 8.5 protects the goaltender *"anywhere on the ice"*.**
Outside the crease CARHA's Note puts the tier back in the referee's hands, under *"A goalkeeper is NOT
'fair game' just because they are outside the goal crease area."*

⚠️⚠️ **"A repair that had simply bolted CARHA on as a second Hockey Canada would have over-promised
protection to a goaltender who gets run at the top of the circles."** — the agent's own words.
**Every layer it wrote carries the crease limit.**

- [ ] ⚠️ **Check the OTHER CARHA repairs made today for the same over-promise** — `winger.md`,
  `center.md`, `shooting.md`, `rules_primer.md`. **They were written before this limit was known.**

---

## ⚠️ `goaltender.md` — a whole CARHA regime the section does not know about

**Reported by its own agent, NOT fixed, and it says why:** *"changing 'the four books' to a wider claim
without having read that regime through would have been the same defect in the other direction."*

`sources/carha.txt:3135-3175` holds a **full interference-with-goalkeeper regime that copies none of
the four books**: an unconditional push-in relief with **no effort proviso** (closer to USA Hockey than
the NHL), a mandatory minor for failing to attempt to avoid contact, a minor *"whether the goalie is in
or out of the goal crease"*, a discretionary major for deliberate contact, a pushed-into-the-net
clause, and a penalty-shot clause at `:2817-2823`.

- [ ] **The adult-rec goaltender's goal-counting question is answered by none of the four books that
  section names.** Read CARHA's interference rule in full and extend it.

---

## ⚠️ A FALSE ZERO THAT FLATTENING CANNOT REPAIR — SCOPE UNKNOWN

**Full detail in [`sources/README.md`](../../sources/README.md), recorded 22 September 2026 after two
agents hit it independently on the same rule.**

`grep -ci "on the crease line"` returns **0** in all four NHL and PWHL extractions **and stays 0 when
flattened**. The phrase is there — `nhl_rules_layout.txt:9286-9290`, Reference Table 14 row E — but the
result column interleaves **inside** the sentence: *"plants himself on | **Goal is allowed.** | the
crease line or outside the goal crease…"*

⚠️⚠️ **THE INTRUDER IS CONTENT, NOT PAGE FURNITURE, SO NO NORMALISATION REMOVES IT.** This is why it
is different from the splice already recorded in `sources/README.md`, and why
**`scripts/check_quote_drift.py` cannot see past it either** — two verbatim, correct quotations of row
E both score **NOT FOUND**. **A `notfound` on a table-row quotation is not evidence of drift.**

- [ ] ⚠️ **THE SCOPE IS UNKNOWN AND THAT IS THE ROW.** Row E is the row we happened to look at **by
  eye**. **If the interleave is general to Reference Table 14, or to the IIHF's Appendix IV Table 16,
  then other situation-row claims in this corpus may rest on greps that returned a FALSE ZERO** — and
  no tool on disk would say so. **Census the `_layout` extractions of both tables row by row.**
- [ ] **Consider whether `check_quote_drift.py` should say so in its own docstring.** It currently
  names alphanumeric-only matching as the thing that DEFEATS splices; that is true of page furniture
  and false of two-column tables. **A tool that documents a limit it does not have is worse than one
  that documents nothing.**

---

## ⚠️ MEASURED — WHAT THE TACTICAL RE-AIMING COSTS A LISTENER, AND A BIGGER PROBLEM IT EXPOSED

**The `center.md` agent ended its report by naming the one thing it could not check:** whether *"a
reader who only ever hears the first ninety seconds of the podcast still gets the warning."* It said no
checker measures it. **Measured by the coordinator, 22 September 2026, by rendering and counting.**

| | |
|---|---|
| `center.md` episode length | **37,909 words ≈ 172 minutes** |
| Key focus point 1 | heard at ~**0 min** |
| *"never turn your back"* (boards limb) | now first heard at ~**12 min** |

**So the cost is real and bounded:** the boards safety limb moved from the opening minute into the body
at roughly twelve minutes — **7% into the episode, not lost, but no longer unmissable.** The words
survive seven times below, verified by phrase count against HEAD.

- [ ] **A decision for the owner once the wave lands, not for an agent:** does the boards limb earn a
  short place in the Overview, or does the episode structure carry it? ⚠️ **This applies to every page
  being re-aimed**, not just this one.

### 🔴 AND THE MEASUREMENT EXPOSED SOMETHING LARGER: ONE POSITION PAGE IS A 172-MINUTE EPISODE

**That is the same defect the site review found in the visual layer** — `positions/goaltender` at **415
screenfuls** on mobile, `rules_primer` at **498** — **showing up in audio.** A reader cannot navigate
415 screens and a listener will not sit through three hours.

⚠️ **Nobody has ever measured episode length.** `podcast_queue.py` derives one episode per document
from `structure.json`, so **document length IS episode length**, and no gate watches it.

- [ ] **Census episode length across all 39 documents** and decide a ceiling. ⚠️ **This is the same
  root cause as the owner's callout complaint and the "rules-compliance annex" verdict: the documents
  are too long and lead with the wrong material.** Fixing the lead does not fix the length.

---

## 🔴 `check_tactics_ratio.py` HAS TWO BUGS THAT INFLATE EVERY SUMMARY-LAYER FIGURE

**My tool, written this round to stop five agents guessing at "overwhelmingly" — and then handed to
them with two defects. Found by the `faceoffs.md` agent by READING MY SOURCE rather than trusting my
output. Verified by the coordinator.**

**1. A TIGHT MARKDOWN LIST SCORES AS ONE UNIT.** `units()` splits on blank lines. Common Mistakes and
Key Takeaways are consecutive `- ` / `1. ` lines with **no blank line between items**, so each whole
list is a single unit. **One rule citation anywhere marks every word rules-bearing.**
⚠️ **Measured: `defender.md`'s entire Key Takeaways list is ONE UNIT OF 1,824 WORDS.**

**2. THE SOURCES TRAILER IS SCORED INSIDE KEY TAKEAWAYS.** The trailer-skip at `:57` only skips lines
starting with `*` that ALSO contain `](http`. The trailer's first line has no URL, and its layer is
still `## Key Takeaways` because no `## ` heading follows. **On `faceoffs.md` that inflated the layer
by ~3,000 words of bibliography** — 5,994 reported against 2,970 actual.

⚠️⚠️ **SO THE "COMMON MISTAKES AND KEY TAKEAWAYS ARE 100% ON EVERY POSITION PAGE" TABLE RECORDED
EARLIER IN THIS PLAN IS SUBSTANTIALLY A FACT ABOUT LIST FORMATTING.** The **corpus-wide 71%** stands —
body paragraphs are blank-line separated — **but no per-layer figure from that table should be quoted
or used as a target.**

- [ ] **Fix both, BETWEEN waves.** Split list items into units; reset the layer at the trailer, or skip
  any line starting `*Sources`. **Then re-measure and correct the table.**
- [ ] ⚠️ **Until then, score those two layers PER BULLET in a scratchpad using the tool's own
  `RULES_RE`** — what the `faceoffs.md` agent did, which turned a reported 100%/100% into a measured
  **94% → 77%** and **93% → 88%**. **Three live agents were told mid-wave.**

---

## ⚠️⚠️ THE REFRAME — ORDERING AND RESTATEMENT, NOT PROPORTION

**From the agent that re-aimed `body_contact_and_battles.md`, the corpus's hardest case, DISAGREEING
with its own brief. Full text at the top of `CLAUDE.md`. This should govern the rest of the queue.**

> *"**The 90% figure is close to correct for this document and should not be driven down.** The fouls
> here ARE the tactics. **What was wrong was never the PROPORTION of rules; it was the ORDERING and the
> RESTATEMENT COUNT.** Four layers each stating the same five-book ladder is a propagation risk before
> it is a tactics problem."*

> *"**The instruction is the best sentence in each bullet and it is in the worst position in each
> bullet.**"*

**So: re-order, do not strip.** Lead each unit with what a player does; follow with the tariff.
⚠️ **A ratio that does not move is NOT a failed pass.**

⚠️ **And the demotion target differs by layer.** Key Takeaways demoted into the body cleanly because
the body carried everything. **Common Mistakes often cannot** — several bullets are the only place a
tariff lives outside its own section. **Per-limb layer test with the carrier list supplied; never one
agent for the whole layer.**

- [ ] ⚠️ **`body_contact_and_battles.md` Common Mistakes — 9,772 words, the single largest
  rules-bearing layer in the corpus — was deliberately NOT touched**, and the agent said why: the
  demotion targets differ per bullet and `:1749` alone is ~6,000 characters. **Dispatch per
  bullet-group with carriers named.**

### ⚠️ A BODY REORDER THAT WOULD MOVE THE RATIO MORE THAN ANY LAYER WORK — and why it was refused

The `faceoffs.md` agent: a reader meets **~355 lines of rules before any technique, alignment or set
play.** Moving the technique and alignment sections above them *"would change the ratio the owner
actually cares about far more than anything I did."*

⚠️ **It refused on risk grounds, correctly: it counted 24 `above`/`below` directional references in
lines 209–562 alone**, several crossing the proposed boundary. **A reorder without an exhaustive
directional audit inverts them silently.**

- [ ] **Dispatch the reorder as its own row with the DIRECTIONAL AUDIT NAMED AS THE DELIVERABLE.**

---

## ⚠️ A CLOSED TACTICAL SET IS A CARDINAL-RULE BREACH NO CHECKER CAN SEE

**Found by a commit gate in `defender.md:9`, new text from this wave, and fixed 23 September 2026.**

`:9` (Key focus, SPOKEN) said a defenceman gives up the defensive side *"in three situations **and no
others**"*. **The same document contradicts it twice** — `:758` calls it *"the default rather than a law
with no exceptions"*, and `:747` (a `Never:` facts line) writes the same list with *"**unless**"*.

⚠️ **The gate refused to accept it as known-open:** *"'no others' is precisely the absolute form the
corpus exists to prevent… This is the one place the wave's own instruction was not met."*

### ⚠️⚠️ AND THE AGENT FOUND TWO MORE IN THE SAME FILE — the second is the lesson

- **`:34`** (Overview, spoken) — *"You hand that position over deliberately **three times** … **and**
  activating into a rush"*. Same closed enumeration.
- **`:24`** — a **`Never:` facts line, voiced ALONE** — *"give it up **only for** a pinch, a step-up or
  an activation"*, while `:747` in the same document does it correctly with *"unless"*.

**Its words: *"A document-level grep for 'no others' could not see this; it took reading the facts
lines separately."*** ✅ **That is the layer test, and it is the only method that finds this class.**

⚠️⚠️ **`check_absolutes.py` DOES NOT CATCH THIS.** It catches unscoped denials about **penalty
tiers**. **A closed set of TACTICAL situations passes it clean** — and that is the corpus's cardinal
rule, non-negotiable 7, going unchecked by any tool.

### ✅ A trap the agent avoided that a sweep would have walked into

**`:750` also says *"three situations"* — but it is a DIFFERENT three** (1-on-1, 2-on-1, 3-on-2), and
`:758`'s *"all three situations above"* refers to **those**. **A sweep would have "fixed" both.**

### The repair form, for reuse

**Not a two-word deletion.** Deleting *"and no others"* while leaving *"in three situations"* still
asserts a complete enumeration — **and the document names more exceptions itself at `:781`** (a
full-ice press, a delayed penalty, 6-on-5). The fix was the full cardinal-rule form: *"most often
for…"* plus a named fork and *"ask which yours wants"*, **matching what the other four Key focus
paragraphs already did and `:9` alone did not.**

- [ ] 🔴 **THE MOST LIKELY PLACE THIS STILL LIVES IS THE OTHER FOUR POSITION DOCUMENTS.** The agent:
  *"`:9`'s wording almost certainly propagated, and I read no file but my own."* **Sweep `winger.md`,
  `center.md`, `switching_positions.md`, `goaltender.md` and `systems/defending_the_rush.md` — by
  LAYER TEST, reading the facts lines separately, not by grep.**
- [ ] ⚠️ **Patterns a grep will miss**: *"the only time"*, *"there are two ways"*, *"either… or"*,
  *"only for"*, *"N times"*. **The agent named these as the shapes its own five grep patterns could
  not have matched.**
- [ ] ⚠️ **NEW TEXT FROM THIS WAVE, SCOPE UNVERIFIED:** `defender.md:769` and Key Takeaway 2 say
  *"the onus is on you **in all four books**"* and *"**none of them** caps boarding at a minor"*, while
  `:769` also says *"three of the four"*. **`ls sources/*.txt` is the authority and nobody has run it
  against these sentences.** `rules-verifier`.

---

## 🔴 THE ESCALATION LOSS, MEASURED PER DOCUMENT — and only one has been examined

**A `safety-reviewer` closed its report by naming the one thing it could not do: *"Someone should run
the HEAD-vs-tree spoken-`Important.` diff across every file that wave touched; sixteen are staged and I
rendered one."* Run by the coordinator, 23 September 2026.**

**41 paragraphs lost their marker across the wave** (paragraph-level count; the gate's renderer-derived
figure is 44, and the renderer is the authority — see the correction in
[`callout_flow_wave_1_2026-09-22.md`](../reviews/callout_flow_wave_1_2026-09-22.md)).

| document | HEAD | now | delta | examined? |
|---|---:|---:|---:|---|
| `foundation/core_principles.md` | 21 | 11 | **−10** | ✅ twelve read, **one restored** |
| `technique/shooting.md` | 37 | 29 | **−8** | 🔴 **no** |
| `foundation/rules_primer.md` | 115 | 109 | **−6** | 🔴 **no** |
| `positions/center.md` | 37 | 32 | −5 | 🔴 no |
| `positions/winger.md` | 25 | 21 | −4 | 🔴 no |
| `systems/offensive_zone_play.md` | 38 | 34 | −4 | partial — one restored earlier |
| `systems/faceoffs.md` | 63 | 60 | −3 | no |
| `positions/goaltender.md` | 73 | 71 | −2 | no |
| `foundation/uk_rules.md` | 54 | 53 | −1 | no |
| five documents | | | **±0** | n/a |
| `systems/special_teams.md` | 53 | 55 | **+2** | n/a — gained |

### ✅ THE FOURTEEN ARE IDENTIFIED — give the next brief this list, not "go look"

**Extracted 23 September 2026 by rendering HEAD and the tree and diffing marker-bearing paragraphs.**
⚠️ **This is the method that made the `core_principles` pass work, and a vague brief is what made an
earlier one fail** — it was sent to two paragraphs that were fine and twelve went unexamined.

**`technique/shooting.md` — 8 paragraphs:**
1. *"How height actually works — read this once, and read the caveat with it…"*
2. *"And the IIHF book argues with itself about whether a high stick needs contact too — between its
   two editions…"*
3. *"And do not read the windup and follow-through carve-out as a ceiling on what a high stick costs
   in the NHL and IIHF books…"*
4. *"And a fifth book on disk has no minor rung above the shoulders at all — the harshest floor of
   any of them — and it is an adult…"*
5. *"And note where the carve-out stops, because it stops in exactly the situation the mechanics below
   tell you to abort in…"*
6. *"And 69.4's precondition — a goalkeeper who has already played the puck — is not the edge of the
   law on standing in his way…"*
7. *"One man's word for his own proprietary data — treat with care…"* (Valiquette)
8. *"And the pre-game warm-up is inside the rules, so shooting on the opposition's goalie is not a grey
   area…"*

**`foundation/rules_primer.md` — 6 paragraphs:**
1. *"The other two books are shorter, and the fourth trigger — the whistle that arrives before
   contact…"*
2. *"Read that citation carefully if you go to look it up, because Hockey Canada's Rule 6.11(b)…"*
3. *"One more thing decides where the draw goes… which infraction gets called when two collide"*
4. *"What the book does not say is what icing does in the meantime…"*
5. *"That 'only if' is a ceiling and not a direction…"*
6. *"Cite 27.8 for the penalty and never for the dimensions…"*

⚠️ **NUMBERS 5 AND 6 IN `rules_primer.md` WERE ALREADY JUDGED AND UPHELD** by the agent that
de-marked them — *"the correction runs in the PERMISSIVE direction… a reader who misses it screens
LESS"*, and *"the marker was protecting a citation practice aimed at the next writer, not the player"*.
**Do not re-litigate them without new evidence; read the rest.**

⚠️⚠️ **DO NOT PRE-JUDGE THE OTHERS FROM THESE ONE-LINE EXCERPTS — INCLUDING FROM ANY RANKING A
COORDINATOR ADDS HERE.** Several carry penalty tiers and carve-out boundaries and several are clearly
epistemic, **but the excerpt is the first 125 characters and the verdict is in the clause the marker
actually sat on.** Render, read each whole, and apply the hurt/ejected/penalised test.

- [ ] 🔴 **`shooting.md` (−8) and `rules_primer.md` (−6) are the queue.** Together they are **14 of the
  41** and neither has had a safety pass. **Dispatch with the same method that worked on
  `core_principles`: render HEAD and the tree, diff the spoken prefixes, list the paragraphs, judge
  each.**
- [ ] **Then `center.md` (−5) and `winger.md` (−4).**

⚠️ **What the `core_principles` pass established, and it should set the expectation: TEN of its twelve
were correctly de-marked** — epistemic and tactical hedges, which is the point of the work. **One was a
critical.** **Do not expect, or force, a high restore rate.**

⚠️⚠️ **AND IT DECLINED THE TWELFTH ON PRINCIPLE, WHICH IS THE PART TO COPY.** The goaltender
reversal of *"look before the puck reaches you"* lost its escalation in three layers at once, and it
refused to restore it: *"Restoring an escalation here would mean asserting an injury hazard the
document does not claim and I did not source, which is the fabricated-warning failure."* **The
corpus's own consequence for that one is *"what costs the goal"* — performance, not injury.**
⚠️ **It flagged that its judgement flips if `positions/goaltender.md` treats losing sight of a live
puck as an injury hazard — and it deliberately did not open that file because a sibling held an
adjacent one. That check is open.**

✅ **The restore form: MID-PARAGRAPH.** `:71`'s marker went back on its final clause, so the paragraph
speaks `"Important."` again **and creates no amber panel** — the 8/8 amber ratio the owner objected to
is unchanged. `remark-corpus.mjs` has **two** glyph regexes and only the anchored `WARNING_RE` at
`:617`/`:620` builds an `<aside>`; `WARNING_TAIL_RE` at `:749` wraps an inline run.

---

## ⚠️ THE OUTLET-BAND LANDMARK — repaired in the borrower, and the OWNER has the same conflation

**A commit gate blocked on `winger.md:13`/`:26` naming the outlet band *"between the faceoff dot and
the goal line"* while the owner `breakouts.md` says *"between the hash marks"*. Repaired 23 September
2026. The remaining finding is in the owner and is not the borrower's to fix.**

⚠️⚠️ **THE COORDINATOR'S STATED MECHANISM WAS WRONG AND THE AGENT REFUTED IT FROM TWO OWNERS.** The
brief said *"the hash marks and the faceoff dot are not the same place, so the band's upper bound
differs."* **They are at the same depth** — `breakouts.md:44`: *"the short red lines at the outer edges
of each faceoff circle, **level with the faceoff dot**"*; `language_and_glossary.md:297`: *"both
roughly level with the dot."* **Not a geometric contradiction, and the agent said it would not have
graded it critical on that ground.**

✅ **It is a real defect on a DIFFERENT ground, which the coordinator had not found.**
`language_and_glossary.md:413` records this exact confusion **as a named Common Mistake**:
*"**Reading 'at the hash marks' as 'above the dot line'.** On the wall at the hash marks means the band
between the hash-mark line and the goal line, **at or just below the dot**."* **The dot is the rough
indicator; the hash marks are the boundary, and the two divergent sites collapsed the distinction.**

- [x] ✅ **RETRACTED — `content/systems/breakouts.md:168` does NOT contain the conflation.** A commit
  gate checked it: `:168` says the band *"runs from level with the faceoff dot… down to the goal line
  itself"* — **the LOWER reading, which is the correct one** — and `:44` says the hash marks are
  *"level with the faceoff dot"*, so the two lines agree. `language_and_glossary.md:413`'s Common
  Mistake is reading the band as **ABOVE** the dot line, which `:168` does not do.
  ⚠️ **This is the same refutation the `winger.md` agent made — same depth, not different places —
  applied to the owner, and the coordinator failed to apply it there.** **Nothing to fix.**
  ~~Original row:~~ **`content/systems/breakouts.md:168` — THE OWNER CONTAINS THE CONFLATION IT FORBIDS.**
  Its body reads *"the outlet band runs from **level with the faceoff dot**, 20 ft out from the goal
  line, down to the goal line itself"* — **defining the upper bound AS the dot line, one line after its
  own bold landmark says *"between the hash marks and the goal line"*.** Given `:44`'s *"roughly
  level"*, **the owner uses as a DEFINITION what its own glossary uses as an APPROXIMATION.**
  ⚠️ **Route to whoever owns `breakouts.md`. The borrower was correctly told not to edit the owner.**
- [ ] **`winger.md:13`, second sentence: *"That split belongs to a low zone collapse."*** No *split*
  has been named. The referent is the stay-high / go-to-the-corner choice, named explicitly at `:128`
  and `:728`. ⚠️ **Voiced alone in Key focus this points at nothing** — the
  `check_facts_antecedents.py` class in prose form. **The agent deliberately did not fix it**: the
  repair is new sentence content outside its brief, and its own edit sits immediately before it.
- [ ] **`winger.md:337`** — *"half-wall"* used in a facts line **voiced alone, before the body defines
  it at `:345`.** Same layer-ordering class, different term.

⚠️ **A CONTROL THAT FAILED, REPORTED RATHER THAN CLAIMED.** The agent copied the file to the
scratchpad to build a `check_quote_drift` positive control; the tool returned `clean=0 notfound=230`
because **it does not resolve fragments for a file outside `content/`**. It said so plainly instead of
banking the run, and pointed at the real run's three live CASE hits as the usable evidence.
**That trap has now caught four agents in this session.**

---

## Priority order

# 🔴🔴 1. THE CORPUS TEACHES TACTICS. THE RULES ARE BACKGROUND.

**Owner instruction, 22 September 2026: *"this change needs to be made a major and critical
priority."*** **The rule itself is at the TOP of `CLAUDE.md`; read it there before working any row
below.** This displaces the callout work, which is now row 2.

**The complaint, verbatim:**

> *"I'm not happy with the Key focus content and the Overview especially on the Position pages… **If
> there are 4 or 5 key tactical points that are universally true for a position those should be stated
> in the Key focus and discussed in the Overview** — not rules, not turning your back to the boards or
> dragging your skates. **No one cares about those points in Key focus or Overview; those are technical
> rules, not practical useful tactics or strategy advice.**"*
>
> *"**the entire content should be more focused on tactics and strategy than the exact rules across all
> pages and content**"*
>
> *"**I don't care if that is a coaching decision. I want to state the key options to consider that
> summarise that player's position.**"*

⚠️⚠️ **DIAGNOSIS, AND IT EXPLAINS TWENTY ROUNDS OF THIS PROJECT.** Every review dimension this
repository has is checkable — rule accuracy, citation provenance, propagation, scope. **Whether a
document teaches anyone to PLAY is not checkable, so nobody ever reviewed it.** Twenty rounds of
optimising what can be measured produced position pages that open on board posture, skate drag and
which rulebook governs, while *"be goal side"* and *"crash the net for the rebound"* are buried or
missing. **The corpus is accurate and it does not teach the sport.**

⚠️ **This also names the real cause of the callout complaint.** The warnings felt paranoid because the
pages lead with rules. Fix the lead and much of row 2 dissolves.

### ⚠️⚠️ EXTENDED 22 SEPTEMBER 2026 — EVERY LAYER, AND A RATIO

> *"**fix the Key Takeaways too, same rules**, and keep focusing on making the content more about
> tactics and strategy and **what to do in different situations**. Rules can be included but **tactics
> and strategy and how to play should be overwhelmingly the largest amount of content, as that is what
> readers want to read most.**"*

**This is no longer a two-layer fix. It is a RATIO for the whole corpus** — Key focus, Overview, body,
Common Mistakes, Key Takeaways and the ` ```facts ` blocks. **Rules stay and stay accurate; they are a
minority of the words, not the spine.**

⚠️ **THE KEY TAKEAWAYS ARE THE WORST OFFENDER, AND THREE AGENTS REPORTED IT INDEPENDENTLY WITHOUT
BEING ASKED** — which is the strongest signal this plan has recorded all day:

| document | the takeaway | size |
|---|---|---|
| `positions/winger.md` | **KT8** — crease law, voiced aloud as ONE unit | **~1,300 words** |
| `positions/switching_positions.md` | **KT6** — almost entirely citation; KT4 and KT8 the same shape | **~1,100 words** |
| `technique/shooting.md` | **KT6** — restates the whole screens rules discussion | **~1,050 words** |

**The verdict that should drive the wave**, from the `winger.md` agent: ***"Read on their own with the
body absent, the takeaways say a winger's job is knowing Rule 69."***

⚠️ **A Key Takeaway is a KERNEL, not a second Common Mistakes and not a rules appendix.**
`check_layer_echo.py` scores `switching_positions.md`'s Common Mistakes → Key Takeaways at **20.1%** —
what a duplicate looks like.

⚠️ **The register is the owner's: *"what to do in different situations."*** Not *"Rule 69.3 requires
X"* but *"when the goalie is out of position and you are at the far post, do X."* **A rule earns a
takeaway only when the rule IS the thing to do.**

- [ ] ⚠️ **Each of the three agents that found this DECLINED to fix it**, correctly: *"it is a
  structural rewrite, not a defect fix, and doing it half-way is worse than not doing it."* **Dispatch
  it as its own wave, one agent per document, never as a sweep.**
⚠️⚠️ **MEASURED 22 SEPTEMBER 2026 — `scripts/check_tactics_ratio.py`. THE OWNER'S COMPLAINT IS
NOT AN IMPRESSION; IT IS 71% OF THE CORPUS.**

**39 documents, 1,212,745 words scored, 855,136 of them in rules-bearing units.**

⚠️ **And the summary layers are the whole of it.** Per-layer, the five position pages:

| layer | defender | center | winger | switching | goaltender |
|---|---|---|---|---|---|
| **Key focus** | 22% | **0%** | **0%** | **0%** | **43%** |
| **Overview** | 17% | 35% | **0%** | **0%** | 20% |
| **Common Mistakes** | **100%** | **100%** | **100%** | **100%** | **100%** |
| **Key Takeaways** | **100%** | **100%** | **100%** | **100%** | **100%** |

✅ **The wave worked on the first two layers** — three of the four rewritten pages score **0%** in Key
focus and two score 0% in Overview.
🔴 **COMMON MISTAKES AND KEY TAKEAWAYS ARE 100% RULES-BEARING ON EVERY SINGLE POSITION PAGE.**
⚠️ **`goaltender.md` was not rewritten and it shows: 43% in Key focus**, independently confirming the
cold read's M2.

⚠️ **Read the tool's caveat before quoting any of this.** It counts FORM — a unit scores rules-bearing
if it carries a rule citation, a book name or penalty vocabulary — **so a tactical takeaway that
mentions one rule scores 100% too.** 100% across all five means every takeaway UNIT carries rules
vocabulary, not that every takeaway is nothing but rules. **Only reading decides which.**

⚠️ **NO TARGET IS SET HERE.** The owner said *"overwhelmingly"*; a human decides what that is, and
writing a number into this plan is how the last four figures went stale.

- [ ] ⚠️ **Re-measure after each wave rather than quoting the table above.**
- [ ] ⚠️ **Original note retained: measure the ratio before and after.** Nothing in `scripts/` counts tactics against rules,
  and the owner has just made that ratio the standard. **A census is needed before any target is set**
  — and per this plan's own history, **no figure for it should ever be written into prose.**

### ⚠️⚠️ SCOPE EXTENDED AGAIN, 22 September 2026 — EVERY LAYER, EVERY PAGE TYPE

> *"**fix the Key Takeaways and Common Mistakes on all position pages** and also apply the rules about
> focusing on tactics and strategy **to all pages we can — i.e. position, systems and situations, and
> hockey IQ pages**"*

**Measured queue, worst ratio first** (`scripts/check_tactics_ratio.py`; re-run rather than quoting):

| | document | rules% |
|---|---|---:|
| positions | `goaltender.md` ⚠️ **also still needs its Key focus / Overview re-aimed — the only position page not done** | 83% |
| | `defender.md` (KT + Common Mistakes) | 74% |
| systems | `faceoffs.md` | 89% |
| | `special_teams.md` | 79% |
| | `game_management.md` | 73% |
| | `forechecking_systems.md` | 71% |
| | `defensive_zone_coverage.md` · `offensive_zone_play.md` | 69% |
| | `zone_entries.md` | 68% |
| | `breakouts.md` · `defending_the_rush.md` | 63% |
| | `neutral_zone_systems.md` | 44% |
| hockey-iq | `risk_management.md` | 73% |
| | `playing_without_the_puck.md` | 72% |
| | `time_and_space.md` | 52% |
| | `scanning_and_anticipation.md` | 41% |
| | `puck_support_and_spacing.md` | 29% |

⚠️ **The low scorers are NOT necessarily done.** `puck_support_and_spacing.md` at 29% may simply
discuss fewer rules, not teach more tactics. **The tool counts FORM, not substance.** Read before
dispatching.

⚠️ **And a document's OWN ratio is not the target** — a rules-heavy body with tactical summary layers
may be exactly right. **The layers the reader meets first and the layers the podcast extracts are what
the owner named.** Use `--by-layer`.

### The work, per page

- [ ] **Every position page first** — `center.md`, `winger.md`, `defender.md`, `goaltender.md`,
  `switching_positions.md`. **Key focus = the 4–5 things universally true for that position, stated as
  things a player DOES. Overview discusses them.**
- [ ] **Then every other page.** The owner's second instruction is corpus-wide: *"the entire content."*
- [ ] ⚠️ **The register to match, from the owner's own examples:** *never pass the puck — or skate it —
  across the front of your own goal*; *a defender is goal side of their attacker*; *crash the net for
  the rebound*. **Short. Imperative. About where you are and what you do.**

### ⚠️⚠️ The instruction that makes this possible, and it reverses a habit

**Non-negotiable 7 — never present a coaching choice AS A LAW — has been read as "say nothing tactical
unless a rulebook backs it." THAT READING IS WHAT EMPTIED THESE LAYERS.**

**State the tactic. Name it as the common or default approach, name a realistic alternative where one
exists, tell the reader to find out what their team plays. That satisfies non-negotiable 7 in full.**
⚠️ **A tactic needs no citation, because it is not a rule.** *"Be goal side"* is true because of how
the game works. **Do not hunt for a source and do not label it unverifiable — it is craft, and saying
so once, plainly, is the entire disclosure required.**

⚠️ **Rules stay accurate and stay in the corpus** — non-negotiables 1–6 untouched, and a player
ejected because we cut a penalty tier remains the worst failure available. **They move OUT of the first
two layers** into the body, the ` ```facts ` block and Common Mistakes, **unless the rule IS the
tactic.**

### ⚠️ What this round must NOT do

- **Do not delete rule content to make room.** It moves down; it does not leave.
- **Do not invent tactics to fill a list.** If a position has four universal points and not five, it
  has four.
- **Do not let a tactic become a law.** The register is *"most teams play it this way; ask your bench"*,
  not *"you must."*

---

⚠️⚠️ **2. THE ⚠️ CALLOUT FLOW PROBLEM — owner's instruction, 22 September 2026, AND IT IS CORPUS-WIDE.**
**Reduce, consolidate, move to section ends, keep succinct.** ⚠️⚠️ **NO COUNT IS WRITTEN IN THIS ROW
ANY MORE — the owner is `scripts/check_callout_flow.py`. Run it.** This row carried *"1,538 callouts;
1,196 of them interrupt; runs of up to 18"*, and every one of those three figures had drifted within
days of being written. ⚠️ **Consolidation is NOT deletion** — see the
first row under *Genuinely open*. **This outranks everything below it.**


1. Safety residuals that could get a reader hurt, ejected, or given wrong rules for their age/division.
2. **Layer differentiation — the summary layers must reinforce and add, never restate.** Owner
   instruction, 22 September 2026, and **the highest-priority content focus until it is done.** See
   "Layer differentiation" below for the rule, the test and the tool.
3. Site, diagram, and audio validation.
4. Deferred technical, source, and corpus-wide work — see "Genuinely open" below.

A row is complete only after its acceptance condition and required review are recorded in a review
record.

## Standing method notes (load-bearing, keep these)

- **Never `git add -A` or `git add .`.** Name files explicitly.
- **Stage only immediately before the gate**, not per-agent-completion — `SendMessage` to a finished
  agent resumes it and it will keep editing already-staged files.
- **File ownership must be stated AND verified** before parallel dispatch — check who else holds a
  file, not just assert exclusivity in the brief.
- **A checker result while an agent is live is not yet a finding** — re-run after every agent
  finishes, before acting on a mechanical-check failure or pass.
- **Run `check_facts.py --near` before editing any facts block** — the hard cap (`HARD_MAX`, currently
  14) can silently evict a rulebook fact if hit blind.
- **The nvm/npm shims are zsh functions** — `node`/`npm` must be invoked via their absolute binaries
  (`/Users/uk45004860/.nvm/versions/node/v22.23.1/bin/{node,npm}`) or a build reports exit 0 while
  doing nothing. Astro also caches the markdown transform — `npm run build` (not a bare `astro build`)
  clears it.
- ⚠️⚠️ **`md_to_speech.py --only <doc_id>` FAILS SILENTLY ON A WRONG ID — IT PRINTS "no markdown
  found" AND EXITS 0.** Measured 22 September 2026. **An agent that renders with a typo'd id and
  checks the exit code concludes it rendered. It did not.** This is the same silent-false-pass class
  as the nvm/npm shims. ⚠️ **Check the output says "1 documents", never the exit code.**
  - The separator is a **double underscore**, but ⚠️ **the DIRECTORY KEEPS ITS OWN HYPHENS**:
    `hockey-iq__risk_management`, not `hockey_iq__risk_management`. The second returns *"no markdown
    found"*, exit 0. **A brief from this coordinator got it wrong and an agent caught it.**
  - Correct forms: `technique__body_contact_and_battles`, `positions__winger`,
    `off-the-ice__conditioning_and_recovery`, `hockey-iq__risk_management`.
- **A TTS chunk boundary can silently strip a scope gate** from an instruction in a neighbouring
  sentence — verify safety-relevant prose by rendering and reading the actual chunk, not by reading
  Markdown.
- **`.agents/` and `.codex/` are untracked and un-ignored on purpose** ⚠️ **(this note named a third, `AGENTS.md`, until 22 September 2026, when a sweep found it absent from the working tree — untracked, so git cannot say when it went; not restored, and not this session's to restore)** — mirrors of this
  project's tooling for a different agent runner. `check_secrets.py` is clean on them; the only real
  risk is a future blanket `git add -A` sweeping them in, which is already blocked by both `git-guard.sh`
  and this file's own rule above. Do not re-raise this as a fresh finding; do not delete them without
  asking.
- **A fix pattern applied to one site must be swept for every other site carrying the same claim
  before the wave is declared done** — a known-fixed defect surviving elsewhere, including in already
  -committed content, is how a 20 September wave found ten sites where three had been found.
- **Forbid `git stash` explicitly in any brief where other agents may be concurrently live** — it
  touches every unstaged file in the tree, not just the caller's own.
- **This file's own bookkeeping goes stale by silent accumulation, not just by contradiction.** Twice
  now (20 and 21 September) a "Genuinely open" section quietly filled up with items that were actually
  closed, each carrying its own accurate closure note — nothing was WRONG, but the section stopped
  meaning "open" and nobody was declaring that. **When a row's own text says it's closed, verified, or
  fixed, move it out in the same session — don't leave a correct closure note sitting under an "open"
  heading for the next reader to discover.**
- **A `pathways.json` entry can reuse a sibling pathway's document without curating it for the new
  audience** — found 20 September: `parent-of-a-new-player` inherited `positions/switching_positions`
  from the `new-position` pathway, and its one relevant section for this audience sits 80% through a
  long, tactically-dense document a beginner's parent has no reason to open. When reviewing a pathway,
  check whether each `docs` entry was actually curated for *this* pathway's audience, not just present.

## Genuinely open

### 🔺🔺 HIGHEST PRIORITY — OWNER'S INSTRUCTION, 22 September 2026: THE ⚠️ CALLOUTS BREAK THE READING FLOW

**The owner's words:** *"too often callout-warning sections, it is like we're paranoid about players not
using their judgement… they break up the flow of the content too much… Currently the warnings are very
jarring in the middle of text and disrupt the flow of the content too often."*

**What the owner asked for, and this is the specification:**
1. **Reduce the number.**
2. **Where a warning must stay, GROUP them into a single consolidated warning** — several paragraphs if
   need be — rather than scattering them.
3. **Put that consolidated warning at the END of a section, not in the middle.**
4. **Keep each one as succinct as possible.**

**The owner's own example, and it reproduces exactly.** `foundation/core_principles.md` **§Key focus**
opens *"Seven ideas survive changing your position, your team and your league."* ⚠️ **The reader then
meets TWO warnings before idea one**, and a third interrupting the middle. **The layer that promises
seven ideas delivers two warnings first.**

### Measured corpus-wide, so the work can be scoped rather than guessed

⚠️⚠️ **THE FIGURES THAT WERE HERE ARE GONE ON PURPOSE, AND HOW THEY FAILED IS THE POINT.**
This section carried a layer table, a 77% interrupt rate and a stack tail *"running to 11, 16 and 18 in
a row"*. A re-measurement days later found the headline count had moved from **1,538 to 1,553** and the
longest run from **18 to 16** — and a third count, under a tighter definition, found **428**.
⚠️ **None of the three was wrong. None of them said which population it counted**, so they read as
contradictions of each other. That is the same failure this plan records for defect totals, source
counts and near-limit table line numbers.

**The owner is now `scripts/check_callout_flow.py`, which prints all three and names the definition it
is using in its own output:**

```bash
python3 scripts/check_callout_flow.py            # flow-breaking: blockquote or own-paragraph,
                                                 #   outside the summary sections — the population
                                                 #   the owner's complaint is actually about
python3 scripts/check_callout_flow.py --all      # every marker line, list items included —
                                                 #   CALIBRATION NOISE, not a worklist
python3 scripts/check_callout_flow.py --stacks   # runs of consecutive ones
python3 scripts/check_callout_flow.py --by-section --file <stem>   # per-document dispatch
```

⚠️⚠️ **`--stacks` LABELS TWO SHAPES AND THEY ARE NOT THE SAME DEFECT.** `[separate blocks]` is the
real flow break — independent callouts with no prose between them. `[one blockquote]` is ONE long
warning region. **The longest run in the corpus is `[one blockquote]`, and a brief calling it "nine
callouts in a row" would have described a defect that is not there.** The tool says which because a
coordinator nearly wrote the wrong one into a brief.

**Key focus and Overview are the sharpest place to start** — the first layer a reader meets and the
first the podcast voices. ⚠️ **`core_principles.md` is the page the owner named, but it is not the
worst: one document carries five consecutive flow-breaking callouts before its first body heading.**
Run `--by-section` rather than trusting this paragraph.

### ⚠️ THE CONSTRAINT THAT MAKES THIS DELICATE — consolidation is NOT deletion

⚠️⚠️ **Non-negotiable 4 stands: never strip an honest disclosure.** And `check_layer_echo`'s docstring
records that **a repeated safety limb is repeated on purpose** — that repetition is correct, not
duplication.

**So the work is PLACEMENT and CONCISION, not removal.** A warning that is moved to the end of its
section, merged with its neighbours and tightened has lost nothing. **One that is deleted because it
interrupted has lost something the corpus exists to carry.**

⚠️ **The test for each one: does a reader who acts on this section WITHOUT having read the warning do
something that gets them hurt, ejected or penalised?** If yes it stays — consolidated, succinct, at the
end. If no, it was never a warning; it was a hedge wearing a ⚠️, and those are the number to reduce.

⚠️ **One genuine tension to resolve rather than paper over:** a warning at the end of a section is read
*after* the instruction it qualifies. For most of these that is fine. **For a limb that must be known
BEFORE acting — a contact permission, a crease boundary — end-placement may be wrong**, and the honest
answer is to fold it into the instruction sentence itself rather than trail it. **Say which you did.**

### ⚠️ SCOPE — THE OWNER CORRECTED THIS EXPLICITLY: IT IS ALL CONTENT, NOT KEY FOCUS

*"this doesn't just impact Key focus it impacts all areas of content so consider everything"*

⚠️ **The first draft of this row scoped the work to Key focus and that was wrong.** Key focus is where
the owner first NOTICED it, and it is the sharpest illustration — first layer a reader meets, first
layer the podcast voices — **but it is a small fraction of the problem; the body carries the
overwhelming majority.** ⚠️ **The proportions are not written here either.** Run
`check_callout_flow.py --by-section`.

**Every layer is in scope: body, Key focus, Overview, Common Mistakes, Key Takeaways, and the facts
blocks.** ⚠️ **And the ````facts` layer deserves its own look** — every line there is voiced ALONE with
a 300 ms break either side, so a ⚠️ line in that layer is not an interruption of flow, it is **a whole
utterance**. Its economics are different and the fix may be too.

**Order of work — by density and reader cost, not by layer:**

✅ **THE PER-DOCUMENT RANKING IS RUN — dispatch from this, and re-run it as work lands.**

⚠️⚠️ **READ THE DEFINITION BEFORE READING THE TABLE, BECAUSE A LATER COUNT OF THE SAME DOCUMENTS IS
FOUR TIMES SMALLER AND BOTH ARE RIGHT.** The columns below count **every line carrying the marker**,
list items included — which is `check_callout_flow.py --all`, the broad population. That is why
`rules_primer.md` reads **201** here and **45** under the tool's default: the default excludes list
items and the summary sections, because a Common Mistakes bullet is *supposed* to warn.
**Use this table for ORDERING and the tool's default for the WORK.** ⚠️ **Re-run rather than trust
these cells** — they were measured before the callout wave began moving them.

| document | mid-section | total | runs of 3+ |
|---|---:|---:|---:|
| `foundation/rules_primer.md` | **170** | 201 | **20** |
| `positions/goaltender.md` | **109** | 138 | 16 |
| `technique/body_contact_and_battles.md` | **106** | 144 | 13 |
| `systems/faceoffs.md` | 71 | 94 | 7 |
| `systems/special_teams.md` | 57 | 69 | 7 |
| `technique/shooting.md` | 49 | 57 | 9 |
| `systems/offensive_zone_play.md` | 45 | 55 | 5 |
| `foundation/uk_rules.md` | 44 | 65 | 6 |
| `off-the-ice/equipment.md` | 42 | 61 | 8 |
| `systems/forechecking_systems.md` | 40 | 52 | 6 |
| `positions/center.md` | 39 | 50 | 6 |
| `systems/game_management.md` | 36 | 46 | 2 |
| `hockey-iq/risk_management.md` | 30 | 36 | 3 |
| `positions/defender.md` | 27 | 38 | 4 |
| **`foundation/core_principles.md`** | **24** | **25** | 1 |
| `hockey-iq/playing_without_the_puck.md` | 23 | 31 | 3 |

**Corpus figures for the broad population: run `check_callout_flow.py --all`.** ⚠️ **A figure that was
here said *"1,196 mid-section of 1,553"*; it had already moved from 1,538 when it was written, and the
wave now running moves it again.**

⚠️ **`core_principles.md` — the owner's example — has nearly all of its callouts interrupting
rather than closing.** It is the **pilot** precisely because it is small enough to get the pattern
right before applying it to `rules_primer.md`, which is several times larger on every definition.

---

### ⚠️ WAVE 1 DISPATCHED — 22 September 2026, eight agents, disjoint file ownership

**Dispatched immediately after commit `5737fb0` was pushed. File ownership was checked before the
briefs were written, not asserted in them** — which is the failure this plan records against round 59,
where four agents were each told they owned `site/src/diagrams/*.mjs` exclusively and did not.

| agent | owns exclusively |
|---|---|
| `content-reviewer` (PILOT) | `foundation/core_principles.md` |
| `content-reviewer` | `foundation/rules_primer.md` |
| `safety-reviewer` | `positions/goaltender.md` |
| `content-reviewer` | `foundation/uk_rules.md` |
| `content-reviewer` | `systems/offensive_zone_play.md` |
| `content-reviewer` | `systems/faceoffs.md` |
| `safety-reviewer` | `technique/shooting.md` |
| `content-reviewer` | `positions/center.md` **and** `positions/winger.md` |

⚠️⚠️ **THE LAST ROW IS THE ONE THAT MATTERED TO GET RIGHT. `center.md:431-441` and
`winger.md:475-485` are the SAME six-callout blockquote, duplicated** — three of its callouts measure
Jaccard **1.0** on content words. **Two agents editing those files apart would have driven them out of
agreement silently, and no checker in this repository can see that.** They went to one agent.

⚠️ **Duplication across documents is NOT automatically a defect here** — `check_layer_echo`'s docstring
records that a repeated safety limb is repeated on purpose, because each document must stand alone for a
reader who arrives at one and a listener who hears one episode. **The brief asks whether the passage is
correct in both, not whether it should be deduplicated.**

⚠️ **Every brief was given its own NAMED `--out` directory for `md_to_speech.py`.** Three sibling
agents rendered into the shared scratchpad root on 22 September, read each other's SSML, and one had its
working set deleted by another's run. A brief that says "the scratchpad" is telling two agents to use
one directory.

**Each brief specifies the DEFECT and the CONSTRAINT and leaves the wording to the agent that has read
the document** — round 73's lesson, where a coordinator's proposed replacement sentence would have made
a document contradict its own return-to-sport progression two paragraphs above.

**Still unheld after this wave**, in broad-population order: `technique/body_contact_and_battles.md`,
`systems/special_teams.md`, `off-the-ice/equipment.md`, `systems/forechecking_systems.md`,
`systems/game_management.md`, `hockey-iq/risk_management.md`, `positions/defender.md`,
`hockey-iq/playing_without_the_puck.md`, `systems/defending_the_rush.md`,
`systems/defensive_zone_coverage.md`, `systems/breakouts.md`, `systems/zone_entries.md`,
`off-the-ice/team_play_and_culture.md`. **That is wave 2.**

⚠️ **`rules_primer.md`, `goaltender.md` and `body_contact_and_battles.md` are 385 of the 1,196 between
them** — a third of the problem in three documents. ⚠️ **They are also the three most
safety-critical**, so they are the ones where *consolidation is not deletion* will be hardest and where
the hurt/ejected/penalised test must be applied most carefully. **Do not start there.**
- [ ] **`core_principles.md` as the pilot**, because the owner named it and because a short document
      makes the pattern legible before it is applied at scale. **Its §Key focus is the demonstration,
      not the deliverable — do the whole document.**
- [ ] **Then the densest documents by mid-section count**, whole document at a time.
- [ ] ⚠️ **DISPATCH PER DOCUMENT, NEVER AS A SWEEP.** Each callout needs the hurt/ejected/penalised test
      read against its own section. **A sweep here strips disclosure at scale**, which is the one failure
      this corpus cannot absorb.
- [ ] ⚠️ **Every document touched needs a RENDER** — consolidating changes what is voiced and where the
      breaks fall. Six render-only defects were caught this way in the last round alone.
- [ ] ⚠️ **Report a per-document before/after count**, so the reduction is measured rather than asserted.


### 🔴🔴 THE SAME EMPHASIS DEFECT IS LIVE ON 14 MORE PAGES — and a source grep CANNOT find it

**C10 passed for the two repaired pages** — zero literal asterisks, trailers italic to the last
character, verified at 1265 px **and at a genuine 371 px viewport** in both themes. The previous
commit's repair at `how_to_watch_hockey` also still renders clean, so **the fix pattern does not
regress.**

⚠️ **But a rendered census of all 39 pages found the same defect on 15**, with a recurring signature: a
**pair** of literal asterisks, one closing a `("…"` quotation and one at the very end of the trailer
paragraph. The affected pages include `language_and_glossary:467`, `rink_map:645`,
`special_teams:1201`, `goaltender:1495`, `on_ice_communication:661`, `body_contact_and_battles:1848`,
`shooting:912`, `center:787`, `rules_primer:1169`, `conditioning_and_recovery:652`,
`equipment:838`, `game_management:1177`, `forechecking_systems:968`, `winger:749`.

⚠️⚠️ **PRE-EXISTING, NOT A REGRESSION — verified before deciding.** Three of those lines are touched by
this commit's hunks, and the signature is **identical at HEAD and in the working tree** on all three.
The only emphasis-affecting edits in this commit are the two repairs and the deliberate space, all three
independently confirmed clean in the render.

⚠️⚠️ **THE METHOD FINDING, AND IT VINDICATES NOT SWEEPING THE 112:** *"CommonMark's delimiter arithmetic
makes `(` + `*"` AMBIGUOUS, not always broken. It resolves two ways — benign (emphasis closes and
reopens; only the quotation flips upright, nothing leaks) or destructive (a literal `*` surfaces and the
remainder of the trailer loses italic). **A source grep for `(*"` therefore cannot find this; only the
rendered output can.**"* `faceoffs.md` still carries three `(*"` and renders clean.

✅ **And it hands over an exact, cheap regression gate: the count of literal asterisks in the rendered
article text of `dist/`.** That is the instrument my two deleted checkers were trying and failing to be.

**Severity: Major, not Critical.** All text is present and legible; what is lost is **emphasis**, and it
is confined to Sources trailers — **no facts block and no ⚠️ callout was found degraded anywhere.**

⚠️ **TWO THAT ARE NOT DEFECTS — do not "fix" them:** `uk_rules.md:574` and
`conditioning_and_recovery.md:668` both reproduce **the quoted source's own footnote marker**
(*"…before day 21*"*), deliberately — and the latter document's next sentence literally begins
*"That asterisk…"*.

- [ ] Repair the 14, per page, with the rendered asterisk count as the before/after check.

### 📌 THE DELIBERATE SPACE IS VISIBLE TO A READER — seen, and passed on purpose

`playing_without_the_puck` renders `**Rule 602(a)** ( "A match penalty shall be assessed…` — ⚠️ **the
space after the `(` is on the page.** Confirmed introduced by this commit.

**Passed deliberately**: the `check_quote_drift.py:224` coverage it protects — a USA Hockey match-penalty
quotation that would otherwise fall out of drift checking **entirely and invisibly** — outranks one
space in an unvoiced trailer.

⚠️ **A zero-artefact alternative exists and is recorded for later, not now:** the `faceoffs.md` repair
achieved the same result by **restructuring where the emphasis opens** —
`*"All face-offs must be conducted on one of the nine"* face-off spots *"located on the rink."*` — with
no visible space.

### 📌 `resize_window` IS CONFIRMED BROKEN, AND THERE IS A WORKING SUBSTITUTE

It reported *"Successfully resized … to 375x812"* while `clientWidth` stayed **1265** and
`matchMedia('(max-width: 60rem)')` stayed **false** — the second review to hit this.

✅ **The work-around that worked: inject a 375 px-wide `<iframe>` at the same origin.** Media queries
fire, the mobile layout renders, and it is a **genuine CSS viewport** — so narrow-width findings from it
are **observations, not proxies**. ⚠️ **What it does NOT reproduce:** real browser chrome, dynamic
viewport units, touch scrolling, overlay scrollbars, pinch-zoom.

**Measured at 371 px and 316 px: document horizontal overflow 0 px, every table in its own
`overflow-x` container, text reflowing with no clipping.**


### 🔴🔴 A DRIFT CLASS `check_quote_drift` CANNOT SEE BY CONSTRUCTION — whitespace-only

`rules_primer.md` quoted the EIHL Preamble as *"on the EIHL **website**"*. **The source reads *"on the
EIHL **web site**"*.** ⚠️ **The tool matches on ALPHANUMERICS ONLY, so `website` and `web site` flatten
identically** — confirmed empirically: both become `ontheeihlwebsiteand`, and the file scored **72
flagged / 1293 clean both before and after the repair.**

⚠️⚠️ **So the alphanumeric flattening that DEFEATS the page-furniture splice also BLINDS the tool to
every whitespace-only alteration of a quotation.** That is not a bug to fix — the flattening is
load-bearing for the splice problem — **it is a permanent coverage hole nobody had named.**

**Candidates exist corpus-wide:** `web ?site` scores in 10 documents. ⚠️ **Most will be the corpus's own
prose, not quotations — do not sweep.** The class is wider than this one word: any compound a source
writes open and the corpus writes closed, or vice versa.

- [ ] Is there a cheap second pass that compares **unflattened** where a fragment already matched flattened?

### ✅ C6 CLEARED, AND THE SAFETY PASS EARNED THE BLOCK — four findings, two permissive

⚠️ **The commit gate was right to block on this, and I was wrong to think the repair was complete.**

- **A · A checking permission over-generalised from two divisions to a whole league.** The staged text
  said *"the IHUK Rules of Competition for **the NIHL** set the adult format as 'Full ice, checking'"*.
  ⚠️ **That document is titled *"National League Division 1 and 2 Rules of Competition"*** — it governs
  **NIHL 1 and NIHL 2**. Written as *"the NIHL"*, an adult in any other British competition reads a
  checking permission as theirs **by resemblance** — the exact error the brief warned about.
- **B · THE FALSE CLAIM THE COMMIT EXISTS TO REMOVE WAS STILL LIVE IN KEY FOCUS.** `:12` still read
  *"For an adult **nothing published settles it**"* — ⚠️ **in the first layer a listener hears, four
  hundred lines above the body that now contradicts it.** **Body ✓ / summary ✗ is the shape of every
  round-10 critical**, and the repair had produced it.
- **C · The women's limb gave a permission its own competition regulation narrows.** After the repair
  the document said *"non-checking"* at `:28` and *"101.1 permits bodychecking"* at `:191`. ⚠️ **The
  agent deliberately did NOT assert which is tighter** — *"non-checking"* is also the ordinary label for
  the hockey 101.1 governs, and `sources/README.md`'s *"TIGHTER than IIHF 101.1"* is an editorial
  reading it could not settle from primary text. **It wrote around the ambiguity rather than resolving
  it.**
- **D · The two IHUK tables give OPPOSITE answers at U16** — Junior *"Full ice, checking"*, WNIHL
  *"Full ice, non-checking"* — and the document carried both without saying so. **A sixteen-year-old had
  no way to tell which was hers.**

⚠️ **The new facts line carries a CAVEAT AND AN ACTION ONLY, no permission** — because a facts line is
voiced alone and *"the NIHL is checking"* heard alone is the hazard.

### 🔴 NEW, OPEN — a sixteen-year-old can be legally entered in an adult full-checking competition

`ihuk_junior_roc_layout.txt:648` — *"NIHL: players aged 16+ may play up to any NIHL division. (They can
train up from 15 years old)"*; `:645` — *"WNIHL: girls aged 14+ may play up to any WNIHL division."*

⚠️ **So the age tables are not the whole answer: the play-up route crosses them.** The repaired document
covers it with *"find out which you are in"*, **but if `uk_rules.md` states a British checking age line
it should carry the play-up route**, and nobody has checked whether it does.

### 📌 THE EIHL COVERAGE FIGURE WAS WRONG IN BOTH DIRECTIONS

`uk_rules.md` said *"only a **minority** of its rules are reported here"*. ⚠️ **It is exactly half** —
**eleven of the Casebook's twenty-two rule numbers.** The previous figure, *"nine"*, was **stale**,
overtaken by this round's own additions.

✅ **Replaced with a SELF-CHECKING construction** the reader can count off the same sentence, which also
agrees with `rules_primer.md`'s independently-derived *"twenty-two rule numbers"*. ⚠️ **A number copied
out of its owner goes stale silently; one the sentence lets you verify does not.**

⚠️ **And an edition label was missing on a quotation that exists in only ONE edition** — *"the standard
penalty for a Player engaged in a fight"* is **2026/27 only**, quoted one paragraph below a
characterisation of the **2025/26** 46.1, under an Overview saying every Rule 46 number in the document
is the 2025/26 book's.


### ✅ BOTH EMPHASIS DEFECTS FIXED — and they had ONE cause, which is a named, greppable construct

**Parse clean in both files**, verified with the site's own `mdast-util-from-markdown`:
`faceoffs.md:1244` outer emphasis now spans 0–8261 (was 0–**1889**); `playing_without_the_puck.md:966`
spans 0–24040 (was 0–**8779**). **Literal asterisks 2 → 0 in each. Block counts unchanged.** Audio
re-rendered and **byte-identical**.

⚠️ **THE AGENT REFUTED HALF MY RESTATEMENT, AND THE CORRECTION IS THE VALUABLE PART.** I described the
second defect as *"`*English Ice Hockey Association***` plus a stray `.*`"*. **Those were downstream
symptoms.** The parser put the break **thousands of characters earlier**, and the cause was the **same
construct as the first file**:

> **An `*` preceded by `(` is RIGHT-FLANKING, so CommonMark lets it CLOSE the trailer's outer italic
> rather than open a nested one.** The nested `*"…"*` spans that work in the same paragraph are each
> preceded by a **space**, which makes them left-flanking only. ⚠️ **`(` is the whole difference.**

**Scale: 21,632 characters rendering outside their trailer across the two**, against ~1,190 in the
`how_to_watch_hockey.md` case.

### ⚠️ `(*"` IS A RISK MARKER, NOT A DEFECT LIST — 112 occurrences, and I am NOT calling them defects

Censused after the agent named the construct: **112 occurrences across 54 Sources-trailer paragraphs**
(densest `special_teams.md:1201` ×8, `language_and_glossary.md:467` ×6,
`body_contact_and_battles.md:1848` ×6).

⚠️⚠️ **DO NOT TREAT THIS AS A WORKLIST OF 112 DEFECTS.** Whether `(*"` closes the outer italic depends
on **what is open at that point**, which only a parse answers. **Trailers here carry up to eight
occurrences and parse clean.** The two confirmed sites each happened to have exactly one, and it was the
break.

⚠️ **This is the fifth time this round my first census over-reported**, and I am stopping at the marker
rather than dispatching a sweep. **A sweep on 112 sites would edit ~110 correct ones.**

- [ ] The only sound method is a parse with `mdast-util-from-markdown` over the 54 trailers, asking
      whether the outer emphasis spans the paragraph. ⚠️ **I do not have a correct implementation — I
      wrote two and both were wrong.** An agent with `site/node_modules` does.

### 🔴🔴 A CHECKER SILENTLY LOSES COVERAGE WHEN A `*` MOVES — nobody is watching that number

⚠️ **The agent deliberately broke a constraint I gave it, and was right to.** My brief required the fix
be byte-identical after stripping `*`. It applied that, re-ran the gates, and caught `check_quote_drift`
dropping `clean` **297 → 296**. It refused to accept a one-count drift and diffed the tool's fragment
list to find the casualty:

> *"A match penalty shall be assessed to any player or team official who recklessly endangers or
> attempts to injure any opposing player or team official"* — **USA Hockey 602(a), a match-penalty
> quotation.**

**The cause is `scripts/check_quote_drift.py:224`:** the body-prose branch requires a **literal `*`
immediately before the opening quote mark**. `*("` breaks that adjacency, so the quotation **silently
fell out of drift coverage entirely** — ⚠️ **it did not become flagged, it became INVISIBLE.**

**So the byte-identical fix would have traded a site defect for the permanent loss of drift protection
on a safety-relevant rulebook quotation.** It added **one space** after the `(` — fixing the render,
preserving `*"` adjacency, costing one invisible character in an unspoken trailer — **and told me,
rather than letting a 297 look like a 296 nobody asked about.**

⚠️⚠️ **THE GENERALISABLE DEFECT: any past edit that moved a `*` away from a quote mark dropped a
fragment the same way. The tool reports a lower `clean` and NO error. Nobody is watching that number.**

- [ ] Is `clean` lower than it should be corpus-wide? Nothing currently tracks it between runs.


### ⚠️⚠️ I SHIPPED A BROKEN CHECKER, THEN A WORSE ONE, AND HAVE REMOVED IT — the full episode

**`scripts/check_emphasis.py` is deleted and de-registered from `CLAUDE.md`.** The corpus is back to
its documented tool set, verified against `ls scripts/*.py`.

**What happened, in order:**
1. I wrote it to test `str.count("**") % 2` per paragraph. It reported **5** hits and I recorded that
   as a clean worklist against the per-line version's 157.
2. An agent tested **every** hit against the site's real parser (`mdast-util-from-markdown`). ⚠️ **FOUR
   OF THE FIVE WERE FALSE POSITIVES.** A trailer ending `…quote"**` is an **inner italic close
   immediately followed by the trailer's own italic close**. `count("**")` reads those two adjacent
   single asterisks as ONE strong marker; the parser reads two closing delimiters and is right.
   ⚠️⚠️ **"Fixing" one by writing `"***` would inject a strong marker with NO OPENER — actively worse
   than the non-defect.**
3. ⚠️ **A live agent had been briefed to run it.** I messaged it mid-task to stop and to revert
   anything it had changed on the tool's word.
4. I rewrote it with the agent's own discriminator — *does the outer italic span the whole paragraph* —
   implemented as a hand-rolled delimiter walk. ⚠️ **It reported 238 hits. Worse than the original.**
   Nested italics inside a trailer close the outer one in my model.
5. **Removed.**

⚠️ **THE DECISION, AND THE REASON: I guessed twice and was wrong twice. A third guess living in
`scripts/` is a liability, not an asset** — a tool that lies is worse than a tool nobody wrote, because
its output gets carried into briefs as fact. **That is exactly what happened here.**

✅ **THE ONE REAL DEFECT WAS FOUND AND IS FIXED** — `how_to_watch_hockey.md:695` closed an IIHF
quotation with `…Goal Awarded"**` where one `*` was meant. The stray asterisk closed the **trailer's**
italic early, so the last ~1,190 characters — the entire IIHF 2026/27 entry — **rendered outside the
trailer's emphasis on the site.** Repaired with two single-asterisk changes and verified
**byte-identical after stripping `*`**: not one word changed.

⚠️⚠️ **AND IT HAD FALSE NEGATIVES TOO — which is the half that settles the decision.** A second agent
distrusted a `0` and parsed its own files anyway: **the tool scored `0` on two files that each contain a
real, parser-confirmed defect of exactly the class it was built for.**

- `faceoffs.md:1244` — the **opening** `*` of `*"they has"*` is consumed as the trailer's own italic
  **close**, so the trailing `*` survives as a literal and the rest of the entry renders outside the
  italic. ⚠️ **Same shape as the one real defect the tool did catch.**
- `playing_without_the_puck.md:966` — `*English Ice Hockey Association***` plus a stray terminating
  `.*`, inside a **24,039-character** trailer.

**Both pre-existing** — proved by parsing the HEAD blob and getting byte-identical hit strings and
identical block counts. **Both site-only: zero literal asterisks in the spoken layer, and neither
passage is voiced.**

⚠️ **A tool that OVER-reports wastes a reviewer. A tool that UNDER-reports on the exact class it was
built for is how one ships.** Mine did both, in the same five files. **That is why it is deleted rather
than fixed.**

⚠️ **And the false-negative rate was never measured corpus-wide** — the first agent tested only the
paragraphs the tool **flagged**. On a sample of five files it missed two. **So "5 hits" was never the
population; it was the tool's opinion of the population.**

- [ ] If this is ever rebuilt, the **only** implementation that worked was **parsing with the site's own
      `mdast-util-from-markdown`** and treating an asterisk surviving into a `text` node as the signal.
      ⚠️ **Do not hand-roll a delimiter walk. Do not test parity.** Both have now been tried and both
      were wrong, **in opposite directions**.
- [ ] Repair of the two false-negative sites dispatched 22 Sep, with parse-before-and-after and a
      byte-identical-after-stripping-`*` check required.

### 🔴🔴 A FALSE NEGATIVE ABOUT BRITISH BODY-CHECKING — and the document contradicted itself

`playing_without_the_puck.md:28` said *"For an adult **no British document publishes an answer at all**
— ask your league."* ⚠️ **The IHUK NIHL Rules of Competition publish it:** *"NIHL · 3 x 20 minute
periods · **Full ice, checking**, stop clock"*, and WNIHL *"Full ice, **non-checking**"*.

And `:191` said *"In Britain **neither book states an age at all**"* — literally true of the two books
named, **materially false**, because the Junior RoC publishes the whole table (U10/U12 non-checking,
U14 upward checking) and `ihuk_u10_roc.txt:123` states *"Bodychecking is NOT allowed in U10 matches."*

⚠️⚠️ **`:28` AND `:191` WERE FLATLY INCONSISTENT INSIDE ONE DOCUMENT**, four hundred lines apart.

⚠️ **The direction is the unusual one — it made the corpus look LESS supported than it is**, and the
standing instruction was conservative (*"ask"*), so nobody could have been hurt. **That is precisely why
no reviewer stopped on it.** Repaired by naming the published answer and **keeping the "ask" scoped** to
competitions outside those regulations. ⚠️⚠️ **THIS LINE PREVIOUSLY READ "Handed to `safety-reviewer`" AND THAT WAS FALSE — NO SUCH PASS HAD RUN.** The phrase was the reporting agent's intention, carried into the plan by the coordinator as though it were a completed action. **The commit gate caught the contradiction** between this line and the coordinator's own brief, which said plainly that no pass covered it. ⚠️ **A plan that records an intention as an action is worse than a plan that records nothing**, because the next reader treats it as coverage. **The pass was dispatched only after the gate blocked on it.**

### 🔴 NEW — `faceoffs.md`'s "READ THIS BEFORE YOU ACT" BLOCKQUOTE IS NOT SPOKEN

Measured in the render: the sentence *"Read this before you act on any IIHF flag in this document"* is
**absent from the SSML**. ⚠️ **So the entire front-matter block — including the In-House answer and the
newly added Elite League paragraph — reaches a site reader only.**

✅ **A listener is covered, but only incidentally**, because the body item and the facts line carry the
same material and both were verified present in the SSML. ⚠️ **`check_pointers.py` cannot see this**
because nothing points *at* the block. Structural and pre-existing.

### 📌 A CROSS-DOCUMENT COUNT COLLISION, LIVE

`center.md:689` was widened today to *"**four books** put that red line inside it"*. ⚠️ **The
`rink_map.md` half of this row was overtaken by the commit that carries it** — `:18` now names CARHA as a
fifth book and the second site has moved from `:186` to `:188`, so the two line numbers this row was
written with are gone. **`shooting.md:14`/`:293` and `offensive_zone_play.md:613` still carry the
un-widened form, and they are what is left of this row.** ⚠️ **Both are true under their own scope and they contradict each other read aloud** —
"four" means *the four-book set* in one document and *the four books that say yes* in the other.

⚠️ **And the brief I gave for that work contained a wrong citation:** I said Hockey Canada's silent
crease wording is **1.6(a)**. It is **1.5(c)** — 1.6(a) is the Centre Ice Spot and Circle. **The corpus
already had it right.** The agent checked and refused: *"had I taken the brief's number I would have
'corrected' a correct citation."*


### ✅ THE DOUBLED-NUMERAL CLASS IS CLOSED — 55 spoken sites repaired, corpus-wide zero verified

Two waves: 28 sites across twelve documents, then 27 across the remaining four. **I rendered all 39
documents myself afterwards: ZERO genuine doubled numerals.** The only residual render hits are
**journal `volume(issue)` citations** — `J Strength Cond Res 21(1)` speaking as *"twenty-one(one)"* —
correctly identified as a **different species** and left alone.

⚠️ **MY CENSUS PATTERN WAS NECESSARY BUT NOT SUFFICIENT, and an agent caught it.** `uk_rules.md:265`
quoted IIHF 46.2 as *"at least two (2) Players with at least one Player (1) to be penalized"* — **the
second numeral is DISPLACED one word from its spelled form**, so it renders *"at least one Player one"*
and **my adjacent-only pattern could not see it**. Repaired. **I then censused the displaced shape
source-wide: now ZERO.**

### ⚠️⚠️ TWO NEW FACTS ABOUT `check_quote_drift` — both found by splitting quotations, both worth keeping

**1 · SHORTENING A FRAGMENT CAN RE-POINT IT AT A DIFFERENT OCCURRENCE OF THE SAME PHRASE.**
A split left a 37-char tail quoting NHL 70.10 whose period was **correct**; the tool's *closest match
across all occurrences* then landed on a **different 70.10 paragraph** continuing *"of his Club."* and
reported a **phantom `ADDED '.'` at two sites.** ⚠️ **A drift flag that appears after a split may be an
artefact of the split, not a defect** — check which occurrence the tool matched before repairing.

**2 · A SPLIT UNMASKS DRIFT THE LONGER FRAGMENT WAS HIDING, AND THIS ONE WAS REAL.**
`goaltender.md:400` quoted IIHF 67.3(I) ending *"'checked / pressured' by an opponent."* — **the source
continues with a semicolon.** A genuine Shape-3 drift. ⚠️ **It had scored as only ONE flag before,
because the tool reports the FIRST difference per fragment and the fragment opened with an accepted
Shape-1 capital-lowering.** Splitting made the second defect visible.

⚠️⚠️ **So `flagged` returning to baseline does NOT mean a file is clean — one accepted Shape-1 hit can
be masking a Shape-3 behind it in the same fragment.** That is a property of the tool nobody had
recorded.

### 📌 A DIFFERENT SPECIES, REPORTED AND DELIBERATELY NOT FIXED — ~38 bare parenthetical numerals

Sweeping the render for **any** parenthesised numeral (not just doubled) found ~38 sites in two shapes:

1. **Rulebook penalty shorthand** — the EIHL Casebook's *"an instigating (2) minor penalty, a (5) major
   penalty… a (20) game misconduct"* speaks as *"an instigating two minor penalty, a five major
   penalty"*. ⚠️ **Roughly intelligible, but a listener has no way to know the numbers are DURATIONS IN
   MINUTES.**
2. **Enumerator markers** — USA Hockey's delay-of-game triggers voiced as *"(one) The puck is behind the
   goal line… (two) They fail to play the puck"*. **Probably benign.**

⚠️ **The agent deliberately did not invent a second convention mid-round** — the failure its brief
named. **Shape 1 may be a real defect; shape 2 probably is not.**

- [ ] Owner's call on shape 1.

### ⚠️ A SLASH COUNT DISCREPANCY THAT IS NOT A DISAGREEMENT

An agent reported **40** slash-bearing quotations in `body_contact_and_battles.md` against my **21**.
**Both are right on their own basis and neither is wrong:** I counted **spoken** `" or "` instances in
the rendered SSML; it counted **source** `*"…"*` quotations containing a `/`. ⚠️ **A source quotation can
contain a slash that the renderer handles correctly** — `CAN/BNQ` and season forms are special-cased —
**so the source count is always higher.** Recorded so nobody reconciles them into a defect.

### ⚠️ A FIFTH LOOSE-REGEX SELF-CORRECTION, IN THE SAME SITTING AS RECORDING THE PATTERN

Checking for the displaced shape, my render-side regex returned **1,982 hits** — essentially **all
correct**: *"one point one"* is Rule 1.1, *"two one two"* is the forecheck, *"one three one"* the neutral-zone
structure. ⚠️ **I recorded the loose-regex pattern as a coordinator defect two entries above, and then
did it again immediately.** The source-side census was the right instrument and returned **0**.
**The habit is not "write a better regex" — it is LOOK AT THE HITS BEFORE BELIEVING A COUNT.**


### 🔴 THE "ASK WHICH IIHF EDITION" CLASS — CENSUSED, 15 SITES STILL OPEN

**32 British-context sites** tell a reader the IIHF edition matters. **17 already name the Elite League
answer. 15 do not.** Six were repaired in `rules_primer.md` this round.

⚠️ **The answer is published and unambiguous for one population:** the EIHL Casebook's Preamble adopts
*"the official 2026 - 2027 IIHF Rulebook and IIHF Situation Handbook"* as the fallback, and the Casebook
writes **no Rule 60, no Rule 83, no high-sticking and no offside** (verified on validated
footer-and-form-feed-stripped text, with a control phrase returning 1 first). **So those IIHF rules
govern an EIHL game through the fallback.**

⚠️⚠️ **AND ONE OF THE REPAIRED SITES DECIDED A PENALTY TIER** — `rules_primer.md:440`, high-sticking.
**The waist floor NARROWS what counts as a high stick**: a defence for the striker and **less protection
for a crouching opponent**. It moves in the dangerous direction, so the counterweight was attached
**directly** rather than left four sentences downstream.

**Still open, in files free at the time of writing:** `faceoffs.md` ×4, `zone_entries.md` ×2,
`getting_started.md` ×2, `special_teams.md`, `playing_without_the_puck.md`, `rules_primer.md:1163`.
**In held files:** `body_contact_and_battles.md` ×3 (including `:1515`, the reference-point claim) and
`uk_rules.md:48`.

⚠️ **Both halves must survive every repair.** The EIHL answer settles the **Elite League only**.
Everywhere else in Britain it genuinely is **not** settled, because the In-House Rules contradict
themselves — cover *"the Current IIHF Rule Book"* against Introduction *"Version 1.1, published July
2025"*, which is the **2025/26** book.

### ⚠️⚠️ COORDINATOR METHOD DEFECT — MY FIRST CENSUS REGEX IS ALWAYS TOO LOOSE, FOUR TIMES NOW

A pattern in my own work, recorded because it has now cost four separate investigations:

| census | first pass | after tightening | what the looseness was |
|---|---:|---:|---|
| unpaired `**` | **157** | **5** | counted per LINE; hard-wrapped bold is normal |
| slash in quotations | **147** | **~2** | `and/or` and compound alternatives render fine |
| "ask which edition" | **54** | **15** | matched "the books differ" prose, not edition claims |
| unavailability vs sibling | **269** | **0** | Sources trailers are 10–27k-char single lines |

⚠️ **Every one over-reported by 10–50×, and in three of the four the tight answer was a genuinely
useful worklist while the loose answer would have been a sweep.** ⚠️ **A brief carrying the loose
figure would have sent an agent to "fix" 150 correct lines.**

**The habit that works: census, LOOK AT THE HITS, tighten, and only then dispatch.** Never brief off the
first number.

### ⚠️ MY BRIEF WAS WRONG AGAIN, AND IN THE CORPUS'S FAVOUR

I listed three IIHF change-log rows as *"unexamined"* against `rules_primer.md`. **All three were
already correct** — and 60.1 **in more depth than my brief had**, carrying both editions verbatim, the
opposite-direction point, the 60.3 carry-limb deletion, and the derived reference-point claim sourced to
Situation 60.13. **6.1 has no bearing on any claim in the document at all.**

⚠️ **My two line numbers were also wrong**: `:1193` is a Sources-trailer edition note that was already
exhaustive. **The real defect was at six different sites.** The agent found them by reading, not by
trusting the brief.


### ✅ THE PREDICTED TWO-AGENT CONTRADICTION WAS NOT THERE — and the negative is worth as much as a find

Two documents grew a §*"Leaving the bench or the box during an altercation"* the same day, written by
agents blind to each other. **Diffed side by side and voiced alone: they agree on every tension** — both
price IIHF **70.3** (bench → game misconduct) and the box tariff as separate doors; both carry that the
EIHL suspension is scoped to *"to join an altercation"* while IIHF 70.1 is wider, so **the penalty can
land where the suspension does not**; both state the direction as lighter in-game / heavier in
suspension; and **neither** asserts the unsourced *"of the game"* reading of the Casebook's 2nd-major
note. **The wrong *"minor plus a game misconduct either way"* is gone from both.**

⚠️⚠️ **THE METHODOLOGICAL LINE OF THE ROUND, and it should govern every future diff:**
***"The agreement between two documents is not evidence; it is the thing most likely to be wrong
together."*** The agent broke that symmetry on the rule numbers, the EIHL heading and the In-House
negative — **and not on the Casebook tariffs, the instigator compositions, the DOPS ladder, or the USA
Hockey and Hockey Canada halves**, which it read for internal consistency only, against no book.

### ⚠️⚠️ COORDINATOR VERIFICATION — I CHECKED THREE REPORTED MAJORS AND TWO DID NOT HOLD

**Recording this because the round's own lesson is that a report is evidence, not a verdict.**

**MAJ-1, citation of IIHF 70.4 — REFUTED. Acting on it would have made the corpus WORSE.**
The report said both files cite **70.4** for a tariff the IIHF prints at **70.6**, and proposed
recitation. ⚠️ **The IIHF prints that sentence TWICE**: `iihf_rules.txt:5694` under
**`70.4. LEAVING THE PENALTY BOX`** (heading at `:5671`) and `:5735` under
**`70.6. GAME MISCONDUCT PENALTY`** (heading at `:5731`). **The corpus's 70.4 citation is correct**, and
`body_contact`'s *"Both write the same paragraph twice"* is **true of the IIHF as well as the NHL**.
**The agent read 70.4, found the other clauses, and stopped before the duplicate.** ⚠️ **Had I dispatched
the fix, a correct citation would have been replaced by a narrower one.**

**MAJ-4, "no Key Takeaway reaches §12" — REFUTED.** The Key Takeaways proper (isolated from the Sources
trailer, which contaminates a naive `awk` to end-of-file) run **28,609 characters across ten items**, and
carry *fight* ×4, *altercation* ×7, *helmet* ×7, *head-butt* ×3, *eject* ×2, *misconduct* ×29,
*EIHL* ×3. ⚠️ **The agent listed ten takeaway TOPICS and concluded none covered §12 — but each takeaway
averages ~2,800 characters and carries the material inside it.**

**MAJ-3, IIHF 20.4 missing — CONFIRMED.** `grep -c '20\.4'`: **0** in `body_contact_and_battles.md`,
**13** in `uk_rules.md`. **The third counterweight to the EIHL fighting softening is genuinely absent
from the sibling**, where the other two are present. **This one is real and is a live safety gap.**

- [ ] Propagate IIHF 20.4's two-majors trigger into `body_contact_and_battles.md` §The EIHL's fighting rules.

### ✅ CORPUS CENSUS — sections whose topic never reaches their own Key Takeaways: THREE

Prompted by MAJ-4. ⚠️ **A word-overlap measure was useless** — 373 sections, floor 32%, inflated by
common English. **A heading-term test discriminates:** only **three** sections corpus-wide have no
heading term appearing anywhere in their document's Key Takeaways —
`team_play_and_culture.md:385` *Handling Conflict*, `offensive_zone_play.md:385` *5. Low-to-High*,
`passing_and_receiving.md:629` *Deception*.

⚠️ **A heading term is a proxy, not the thing** — a section can be well covered under different words.
**Three candidates to read, not three defects.**

### 🔴 NEW — THE SLASH DEFECT WAS LIVE IN TWO FILES AND VERIFIED IN THE RENDER

Both files quoted the Casebook heading *"Leaving the Player **/** Penalty Bench (Also see Rule 70)"*.
`md_to_speech.py:355` rewrites `/` → `" or "` **globally**, so a listener heard
*"Leaving the Player **or** Penalty Bench"* — **a quotation the Casebook does not contain, inside quote
marks, in the layer read aloud.**

⚠️ **Splitting the quote does NOT help here** — unlike the doubled numeral, **the substitution is not
quote-scoped.** Repaired in both by replacing the quotation with a faithful description and keeping the
exact string only in the **unvoiced** Sources trailer. `check_quote_drift`'s `notfound` fell by one in
each file.

### ⚠️ A `check_quote_drift` FALSE POSITIVE, VERIFIED AS FALSE

`body_contact_and_battles.md:1653` — *"No player may leave the players' or penalty bench at any time
during an altercation."* — flagged as an ADDED period against `nhl_rules.txt`, where the sentence
continues. ⚠️ **The corpus attributes it to the USA Hockey Casebook, not the NHL, and
`usah_casebook.txt` prints it with a full stop exactly there.** **Do not "fix" it.** This is the
attribution blindness the tool's own docstring records, firing in reverse.


### ⚠️⚠️ TWO AGENTS CONTRADICTED EACH OTHER ON THE NUMERAL FIX — SETTLED BY MEASUREMENT

One agent repaired four sites and measured **doubled numerals: 0** afterwards. A second declined to
repair its four, reasoning that *"splitting the quotation leaves the numeral in the document, where the
renderer still speaks it"*, and that any working fix **removes a character from inside a quotation** and
would trip `check_quote_drift`. **It asked for a coordinator decision rather than inventing one — the
right call, and the reason this was caught.**

⚠️ **I rendered `faceoffs.md` myself: 138 chunks, ZERO doubled numerals. The convention works.** The
second agent had modelled a **two-step** version. The real one is **three steps**, from
`faceoffs.md:117` verbatim:

> NHL Rule 76.2 opens `*"All face-offs must be conducted on one of the nine"*` face-off spots `*"loc…`

1. **CLOSE** the quotation immediately **before** the parenthetical numeral.
2. **DROP** the numeral. ⚠️ **It is no longer inside a quotation, because step 1 closed the quote** — so
   this is an **elision at a quote boundary**, not a character removed from inside a quotation.
3. **RESUME** after it, with short unquoted prose bridging the gap.

✅ **And it does not trip the checker, measured:** `faceoffs.md` reports `clean=506 flagged=9
notfound=16` — **unchanged** before and after, all 9 being the disclosed `[a]`-bracket convention.

⚠️ **The real cost stands and must be in every brief:** `check_quote_drift`'s `MINLEN=25` means a
shortened fragment **stops being machine-compared**. Both shortened fragments in `faceoffs.md` were
**hand-verified against primary text with line numbers.**

⚠️ **The live agent applying this was messaged mid-work with the corrected three-step form**, before it
could propagate the two-step reading across twelve files.

### 🔴 NEW — "NOT SETTLED BY ANYTHING PUBLISHED" WAS FALSE FOR THE ELITE LEAGUE

`shooting.md` said of the IIHF high-sticking edition question: *"which of the two a British reader is
under **is not settled by anything published**."* ⚠️ **For an EIHL reader it IS settled, and the
Casebook says so in terms** — its Preamble adopts *"the official 2026 - 2027 IIHF Rulebook"*, and the
Casebook **writes no Rule 60 and no high-sticking passage at all** (measured: `rule60`, `highstick`,
`60.1`, `windup`, `followthrough` all score 0 on the validated footer-stripped text). **So the fallback
fires and an EIHL player is under the contact-and-waist definition.**

⚠️⚠️ **THE CORPUS ALREADY KNEW THIS IN ONE DOCUMENT AND NOT IN THREE.** `goaltender.md:1297` carries
the EIHL→2026/27 finding **independently and correctly**. Absent from `shooting.md` (now fixed),
`rules_primer.md:440` and `:1193`, and `body_contact_and_battles.md:1515`.

**This is the rotten-disclosure class exactly: a negative whose question had been ANSWERED ELSEWHERE IN
THIS REPOSITORY and nobody propagated it.**

- [ ] Propagate the EIHL edition answer to `rules_primer.md` and `body_contact_and_battles.md`.
- [ ] `shooting.md` points at `uk_rules.md` as the place that "sets that out" — **confirm it now does, or the pointer over-promises.**

### ✅ THE HIGH-STICKING EDITION CHANGE IS REAL AND THE CORPUS ALREADY HANDLED IT WELL

IIHF **2025/26**: *"A 'high stick' is one which is **carried above** the height of the opponent's
shoulders."* **2026/27**: *"one which **contacts** an opponent above the shoulders, **provided their
shoulders are at waist level or higher**"* — **identical to the NHL's sentence.** And 60.3's
double-minor limb keyed to *"carries or holds any part of their stick above the shoulders"* was
**deleted**, replaced by *"(above the height of the opponent's waist)"*.

✅ **The corpus was NOT stranded:** `shooting.md:167` already set out the edition split in full, and
every identity claim checked out — **including the three easiest to get wrong**: that 60.2 is
word-for-word in all three books, that 60.4 is identical between the IIHF editions, and that the
2026/27 60.3 parenthetical is the NHL's own wording.

### 📌 A GREP THAT RETURNS ZERO BECAUSE THE EXTRACTION BROKE THE PHRASE

`"each team shall confine its activity to its own end of the rink"` returns **ZERO** in
`nhl_rules.txt` — the extraction breaks it as `confine its / activity`. **Flattening finds it.**

⚠️ **A verifier who trusted that grep would have filed a false attribution finding** against a
quotation that is word-identical in both books. **Same species as the EIHL form-feed splice and the
`kick / shot,` line break.**


### 🔴🔴 NEW DEFECT CLASS, CORPUS-WIDE AND MEASURED — THE RENDERER DOUBLES A SPELLED NUMERAL

Rulebooks write `nine (9)`. ⚠️ **The renderer expands the numeral, so a listener hears
"one of the nine NINE face-off spots"** — and *"nine nine"* is mishearable as **ninety-nine**. **A
numeric fact corrupted in the layer that reaches a listener.**

**Found in `faceoffs.md` (4 sites) by an agent reading its own SSML. It could not census the corpus and
handed that over. Censused and then VERIFIED:**

- **Source-side: 72 sites across 16 files, 68 of them inside a quoted span.** Densest:
  `body_contact_and_battles.md` **13**, `team_play_and_culture.md` **11**, `shooting.md` **9**,
  `goaltender.md` **8**, `special_teams.md` **8**, `rules_primer.md` **5**.
- ⚠️ **VERIFIED IN A REAL RENDER, not inferred:** `team_play_and_culture.md` — a file **no agent touched
  today** — renders *"five (five)"* ×2, *"three (three)"*, *"twenty (twenty)"*. **The source-side regex
  is a sound predictor.**

⚠️⚠️ **EVERY MECHANICAL GATE PASSES ON ALL OF IT** — `check_links`, `check_facts`, `check_absolutes`,
`check_tables`, `check_facts_antecedents` **and** `check_quote_drift`. The Markdown is valid and the
quotation is verbatim; **the corruption happens downstream of every checker.**

**The repair convention exists and is proven:** close the quote before the parenthetical numeral and
resume after — used in `body_contact_and_battles.md:1657` and across `faceoffs.md`. Post-repair render
there measured **doubled numerals: 0**.

⚠️ **THE TRADEOFF, MEASURED, AND IT MUST BE STATED IN ANY BRIEF:** splitting shortens fragments below
`check_quote_drift`'s `MINLEN=25`, so short pieces **stop being machine-compared to source**. The
faceoffs agent verified both shortened fragments **by hand** against the primary text. **A repair wave
that does not do that trades a spoken defect for an unverified quotation.**

- [ ] Repair the remaining sites, reading each — **this is NOT a blind sweep**; a split must not break
      the quotation's sense, and each shortened fragment needs a hand check.
- [ ] Add a checker. ⚠️ **It must run over the RENDERED SSML, not the Markdown** — the doubling does not
      exist in the source. A source-side regex is a usable predictor but it is not the defect.

### 🔴 NEW — A QUOTATION CREDITED TO THE NHL THAT THE NHL DOES NOT PRINT

`faceoffs.md:459` said IIHF 76.7 *"carries the escalation **in the NHL's own terms**"* and then quoted
*"When **two (2)** 'face-off' violations…"*. **That string is the IIHF's.** The NHL prints *"When **a
least two** face-off violations…"* (`nhl_rules.txt:8151-8153`) — ⚠️ **including the NHL's own slip,
"a least" for "at least"** — with `face-off` unquoted.

**So *"in the NHL's own terms"* was FALSE.** Repaired by quoting NHL 76.7's actual sentence alongside,
with the slip flagged as the book's. ⚠️ **The substantive claim — two violations by one team on one draw
is a bench minor in all three books — was correct and is unchanged.**

✅ **And the Rule 76 edition check came back clean:** the numbering is **identical** across NHL, IIHF
v1.1 and IIHF 2026/27 (76.4 CENTERS, 76.6 OTHER PLAYERS, 76.7 VIOLATIONS); **no 76.x citation in the
document is mis-cited**; and the edition split is already disclosed at **six** layers. ⚠️ **v1.1's
Rule 76 contains the word "eject" ZERO times** — the corpus's trap note about that was verified.

### 🔴 NEW, OPEN — A BRITISH U10 READER IS OUTSIDE `faceoffs.md` ENTIRELY

`ihuk_u10_roc_layout.txt:165-191` publishes a **different faceoff procedure altogether**: a Level 2
coach acts as referee, restarts are *"at the centre of the playing surface"*, the referee must *"not
wait for teams to be set-up in a face-off formation"* and calls *"the nearest player from each team to
face-off"* — **and a dot may not even be painted.**

⚠️ **Combined with that book's "no penalties recorded at U10", the bench-minor arithmetic does not reach
them either.** `faceoffs.md` does not say so anywhere. ⚠️ **The agent declined to write it** because the
claim needs the U10 ROC read in full and may belong to whichever document owns U10 scope — **which is
the right call and the reason this is a row rather than an edit.**


### 🔴🔴 CRITICAL — A REPAIR CREATED A PERMISSION, AND THE SAFETY PASS OVER IT CAUGHT THAT

**Second time today that a `safety-reviewer` reading a `rules-verifier`'s repair has found a Critical.**

`uk_rules.md` had been repaired to read *"in the Elite League a first plain willing fight can leave you
in the game, and the second cannot."* ⚠️ **A softening stated as a flat two-step ladder with rung one
presented as safe.** A reader hears *"my first fight won't end my game"* and takes it.

**Three limbs the paragraph omitted, all in the same Casebook Rule 46 it was quoting:**
1. **46.1's own words are *"at least a Major Penalty"*** — ⚠️ **the corpus quoted the words and then
   glossed the floor as a ceiling.**
2. ⚠️⚠️ **Casebook 46.2 Altercation, never quoted anywhere in the corpus:** *"A game misconduct penalty
   shall be imposed on any player who is assessed a major penalty for fighting **after the original
   altercation has started**."* **So a fighting major that is not the original altercation is an
   automatic game misconduct ON THE FIRST MAJOR.** Stop-at-rung-one, in the permission direction.
3. **IIHF 20.4's two-majors trigger is untouched by the Casebook.**

⚠️ **And an unsourced scope claim rode along:** the Casebook says *"Note for their 2nd Major Penalty"*
and **never says whether that second is counted in the game or across the season** — yet the Key
Takeaway asserted *"of the game"*. Its own supplementary-discipline table counts majors *"during the
EIHL regular season"*, **so the season reading is live.** Repaired by **naming the ambiguity** and
telling the reader to read it the stricter way and ask the League. ⚠️ **It must stay unresolved.**

### 🔴 NEW — TWO DOCUMENTS NOW OWN THE SAME SECTION, WRITTEN BLIND TO EACH OTHER

`body_contact_and_battles.md` and `uk_rules.md` **both** carry a §*"Leaving the bench or the box during
an altercation"*, both written today, **by two agents who could not see each other's work.**

⚠️ **This is the exact defect this repository has recorded before** — individually-correct, flatly
contradictory sentences, caught only by diffing whole files. The safety reviewer named it and could not
fix it: *"I could only read one of them as a snapshot. Someone should diff them after all agents
finish."* **Dispatched 22 Sep, all agents in both files finished first.**

**The specific tensions:** whether both price IIHF **70.3** (bench → game misconduct, **no minor**) and
**70.4** (box → minor + game misconduct) as *separate doors*; whether both carry that the EIHL suspension
is scoped to *"to join an altercation"* while **IIHF 70.1 is wider**, so **the penalty can land where the
suspension does not**; and whether the Critical above reached the sibling.

### ⚠️ A PRE-EXISTING CLAIM MADE SELF-CONTRADICTORY BY A NEW REPAIR — and the mechanism is general

`uk_rules.md` carried *"Leaving the bench or box during an altercation is still a minor plus a game
misconduct either way"* — ⚠️ **wrong for the BENCH in both editions**: IIHF **70.3** gives a game
misconduct with **no minor**; **70.4** gives minor + game misconduct for the **box**.

⚠️⚠️ **Eight lines earlier, the new text now said *"either a 20 (Game Misconduct) penalty or 2 + 20"*.
Two sentences in one section, each defensible alone, flatly contradictory read aloud.** The new text did
not create the error — **it made an existing one visible and load-bearing.**

**The general lesson: adding correct detail can break a neighbouring summary that was getting away with
being loose.** Nothing mechanical reports that.

### ⚠️ AN UNMATCHED `**` SHIPPED PAST EVERY CHECKER — again

Introduced by a repair in `uk_rules.md`, caught by the next agent's whole-file scan. **Every checker
passed it and the speech render swallowed it — but the site could surface a literal asterisk.**

⚠️ **That is now TWO unbalanced-emphasis defects in one round**, the other spoken as a literal asterisk
into a Key Takeaway. **Neither `check_links`, `check_facts`, `check_absolutes` nor `check_quote_drift`
sees an unbalanced `**`.**

**MEASURED 22 September, and the check IS viable — but only at the right unit:**

- **Per LINE: 157 hits — useless.** Nearly all are legitimate **hard-wrapped bold spans** that open on
  one line and close on the next. ⚠️ The obvious pattern is noise, which is the shape this project
  keeps rediscovering.
- **Per PARAGRAPH (blank-line delimited, fenced blocks skipped): SIX hits — a real worklist.**

⚠️ **All six are Sources trailers**, in `puck_support_and_spacing.md`, `how_to_watch_hockey.md`,
`goaltender.md`, `switching_positions.md`, `forechecking_systems.md` and
`body_contact_and_battles.md`.

**So the listener impact is NIL — trailers are not voiced — and the SITE impact is real**, because an
unclosed bold span surfaces a literal asterisk or swallows the rest of the paragraph.

⚠️ **And locating one needs tooling, not eyes:** `body_contact_and_battles.md`'s trailer is a **single
53,628-character line carrying 407 `**` markers**. The imbalance is somewhere inside it and no human
finds that by reading.

✅ **WRITTEN — `scripts/check_emphasis.py`, 22 September**, at **paragraph** granularity, fenced blocks
skipped, no `--strict` and it should not gain one. **Registered in `CLAUDE.md`'s scripts list in the
same sitting**, and the list verified complete against `ls scripts/*.py` — ⚠️ **that registration is the
step this project has forgotten twice, because adding a tool and naming it are separate edits to
separate files and nothing connects them.**

⚠️ **It was written as a NEW file deliberately, while an agent was live.** A new script cannot change
the output of a tool a running agent is using; editing an existing one can, which is round 59's
recorded failure.

**Current count: FIVE** (one of the original six was fixed the same day). All five are **Sources
trailers**, so **site-render risk only, not speech** — trailers are not voiced.
`switching_positions.md:565` carries **181** markers; a sibling trailer carried **407** in a single
53,628-character line where one unclosed span cascaded through ~80 later markers.

- [ ] Fix the five. ⚠️ **Pure markup — not one word changes.** The technique that worked: **walk the
      markers in order and find where the parity flips**; reading cannot do it at that scale.


### 🔴🔴 NEW — THE RENDERER SILENTLY REWRITES A SLASH INSIDE A VERBATIM QUOTATION

Found by an agent reading its own render. `md_to_speech.py` speaks the Casebook heading
*"Leaving the Player **/** Penalty Bench"* as **"Leaving the Player OR Penalty Bench."**

**Confirmed in the source:** `md_to_speech.py:1827-1828` documents the general rule — a slash reads as
*"or"* — and `:1029`'s own comment warns that *"a slash as a comma turns an alternative into an
enumeration."* **The behaviour is deliberate and usually right** (`and/or` → *"and or"*;
`usahockey.com/playingrules` → *"com slash playingrules"*).

⚠️ **The defect is narrow and real: inside a VERBATIM QUOTATION it changes the words a listener hears.**
**Censused: 133 quoted spans in `content/` contain a slash.** Most are `and/or` and harmless. The ones
that matter are quoted rule headings and clause names where *"or"* asserts an alternative the source
did not write.

⚠️ **NOT FIXED — this is `scripts/`, agents were live, and a shared tool is shared state.** ⚠️ **And the
fix is NOT obviously "stop rewriting slashes"** — that would break the URL and standards-number handling
the same rule exists for. **The likely answer is to leave the renderer alone and stop putting a slash
inside a quoted span**, which is a content decision.

✅ **DECIDED 22 September — NO RENDERER CHANGE AND NO SWEEP.** Investigated properly rather than
acted on, and the alarm was largely unfounded.

**Classified every slash inside a VOICED quotation corpus-wide:**
- **41 are the `and/or` shape** → renders *"and or"*. Awkward, **meaning preserved**. Leave.
- **106 are other shapes** — and reading them, **almost all are compound alternatives where *"or"* is
  correct or actively better**: `neck/face/head`, `arms/legs`, `helmet/facemask`, `his/her`,
  `numbness/tingling` (a CRT6 red flag, where *"or"* is the right reading).

**The two shapes I expected to corrupt DO NOT, and I checked rather than assumed:**
- ⚠️ **Season forms** (`2021/22`, `2014/15`) — **ZERO hits in the rendered speech.** Already handled.
- ⚠️ **Standards numbers** (`CAN/BNQ`, `CAN/CSA`) — **already special-cased** at
  `md_to_speech.py:452-460`, whose own comment records that `CAN/BNQ 9415-370` *"was narrating as 'CAN
  or BNQ…'"* and was fixed. The apparent formula hits (`EIH or SIHA`, `NHL or IIHF`) are organisation
  abbreviations where *"or"* is correct.

⚠️ **So the renderer is right and must not be changed** — the rule also carries URL and
standards-number handling that a blanket change would break.

**The residue is a CONTENT judgement at a handful of sites: a quoted compound HEADING where *"or"*
asserts an alternative the source did not write.** The one found — *"Leaving the Player / Penalty
Bench"* → *"Leaving the Player **or** Penalty Bench"* — was repaired **by describing the heading rather
than quoting it**, keeping the exact string in the unvoiced trailer. ⚠️ **Splitting cannot fix this
class, because the substitution is not quote-scoped.**

- [ ] Standing guidance, not a wave: **do not put a slash inside a quoted compound heading.** Describe
      it, and keep the verbatim string in the trailer.

### 🔴 NEW — A SHARED CAPTION CONSTANT IS NOW NARROWER THAN THE PROSE THAT HOSTS IT

`CREASE_LINE_IS_THE_CREASE` (`site/src/diagrams/rule69_clauses.mjs:179-184`) names **IIHF, USA Hockey
and Hockey Canada** — **not CARHA**. `center.md`'s prose was just widened to four books because
**CARHA's *Creases* definition does say the lines are part of the creases.**

⚠️ **It is a SHARED CONSTANT reaching at least three diagrams**, so **every diagram importing it now
understates the crease-line warrant by one book** — and editing it to fix one host silently rewrites
every caption that imports it. **Only a caption-layer pass across all its hosts can price this.**

⚠️ **Related, and reported by the same agent:** `center.md` points at `rink_map.md` as setting *"the
four books' answers on the crease boundary side by side."* **If that table has four columns, it now
understates by one.** Not checked — different owner.

### ✅ THE BOOK-FRAME SWEEP CAME BACK OVERWHELMINGLY CLEAN — and that is the finding

**28 sites read in `center.md`, 6 in `neutral_zone_systems.md`. Changed 3. Correctly scoped as-is: 31.**
⚠️ **Outcome "actually wrong, changes what a reader should do" DID NOT OCCUR ONCE.** In every case
tested, the absent book **agrees**.

⚠️ **Two near-misses that would each have produced a FALSE finding, and both are method lessons:**
1. **Hockey Canada's Rule 1.6(a) does NOT say the line is crease** — it carries the same silent wording
   as the NHL. The claim rests **entirely on the Glossary entry**. *"Had I stopped at the rule text I
   would have reported the corpus wrong."*
2. A flattened search for `linesofthecrease` returned **0 in CARHA** — because CARHA writes *"considered
   **as** part of the crease**s**"*, plural, with an extra word. ⚠️ **Only a looser token caught it. A
   tighter search would have manufactured a "CARHA is silent" finding.**

⚠️ **`neutral_zone_systems.md` got ZERO edits, deliberately**, and the reasoning is worth keeping: the
agent **measured the spoken distance** from each charging claim to the nearest `CARHA` utterance —
**8,447 characters at the closest** — and concluded no listener can collide them. **Five widenings for
no behavioural change were declined.**

⚠️ **Do not let a future sweep conflate two different "fours":** `center.md:683` and `:787` say *"none of
the four regulations"*, meaning **the four IHUK Rules of Competition**, not the four rulebooks.

### 📌 THE EQUIPMENT CITATION AUDIT — three of four "bare claims" were SOURCED

⚠️ **The `content-reviewer` was right to leave all four alone.** Writing *"nothing cited here
establishes that"* **would have been a false disclosure in three of the four cases.**

- *"most NHL players wear second-tier boots"* — **sourced**, Discount Hockey, verbatim. The real defect
  is **provenance**: a retailer asserting it with no survey or study.
- *"donut on a baseball bat"* — **sourced**, Pure Hockey, verbatim. ⚠️ And the source says *"strength
  **and speed**"* where the corpus had narrowed it to *"hand and wrist strength"* — **a specification
  the source does not make.**
- Machine-washing and *"3-6 weeks"* — **sourced**. ⚠️ **But the 3-6 weeks is about the SMELL returning,
  not the gear's condition**, and the corpus had generalised it.
- *"roughly halves the break-in time"* — ⚠️ **THE ONE GENUINE ABSENCE.** Zero hits for
  `half|halve|break-in|twice as|50%` on the cited page. **Labelled, not deleted** (non-negotiable 3).

⚠️ **Only ~12 of ~40 citations were reached.** The whole rulebook and standards-body set — HECC, ASTM,
CSA, BNQ, ISO — **was not refetched.**


### 🔴🔴 EIHL RULE 46 REFUTED TWO NEGATIVE EXISTENCE CLAIMS — including one the corpus said it had checked

Taking Rule 46 first was the right call and it paid immediately.

**1 · A negative the corpus explicitly claimed to have verified.** `uk_rules.md` said of bench-leaving:
*"Nothing domestic amends it, **and that negative was looked for rather than assumed**."* ⚠️ **EIHL
Casebook Rule 46, FINES AND SUSPENSIONS (2) attaches an automatic minimum of THREE GAMES**, and
cross-references Rule 70 by name. The in-game penalty is unchanged, so nobody was told the wrong thing
to *do* — **but they were told no British document adds to it, and one does.**

**2 · Key Takeaway 7 said the EIHL softening did not exist.** It read *"The only domestic softening is
the plain willing fight, in NIHL, SNL and BUIHA Varsity."* ⚠️ **The EIHL is a SECOND softening, by a
different mechanism**: Casebook 46.1 holds the automatic game misconduct back to a player's **second**
fighting major, where IIHF 46.1 makes it the standard penalty on the first.

⚠️⚠️ **DIRECTION, AND IT IS EASY TO INVERT: two of these make the EIHL LIGHTER IN-GAME than the IIHF
book and HEAVIER IN SUSPENSION.** The instigator tariff is minor + major + ten-minute misconduct where
IIHF 46.10 gives an automatic game misconduct — but the final five minutes add a game, and the coach is
exposed. **It is both stricter and more lenient, on different axes. Do not let anyone flatten that.**

**Also found and written in:** a Casebook minor the IIHF book has **no limb for at all** — an
unsportsmanlike minor for a player in an altercation *"[who] does not have his sweater properly tied
down"* — and automatic suspensions keyed to a **season COUNT** of fighting majors (10th → one game;
14th → two per additional), reset for the play-offs.

**Under `safety-reviewer` now.** ⚠️ **Propagation to `body_contact_and_battles.md` dispatched** — it
prices fighting and bench-leaving across four books and was named as the highest-value follow-up.

### 📌 THE CASEBOOK'S OWN RULE NUMBERS DISAGREE WITH THE BOOK IT ADOPTS

Its `46.2` is IIHF `46.3`; its `46.13` is IIHF `46.11`; and it **prints `46.2` twice**, for altercation
and for aggressor. Recorded in the corpus, **not corrected** — the disagreement is the book's.

⚠️ **This is now British evidence for advice the corpus already gave** — look Rule 46 up **by heading,
not by number**. Alongside the `RULE 42 – ELBOWING` typo (its own error for IIHF 45), this book
mis-numbers itself in at least three places.

### 🔴 OPEN — EIGHT of the Casebook's 22 amended rules remain unexamined

Reached this round: **14**. Left: **10 (Sticks), 11 (Goalkeepers Equipment), 12 (Illegal Equipment), 28,
30, 36, 47 (Head-butting), 77 (Game and Intermission Timing)**.

⚠️ **Take Rule 12 next, and the agent gave the reason:** `uk_rules.md` has an equipment-failure ladder
built on Casebook **9.5**, and **12 is a second path into the same subject** — *"the two-enforcement-paths
shape that has already caught this book twice"* (9.5 vs 9.12 on neck guards; 86.6 vs 5.6 vs 46 FINES(4)
on warm-up conduct).

**Three findings deliberately left for their owners:** Casebook **63.5** prices crowd debris at a
**2-minute bench minor on the home team** (no document owns crowd conduct); **64** carries a
goaltender-embellishment passage `goaltender.md` may want; **6** allows one captain and **no more than
three** alternates, and bars *"forego[ing] the naming of a captain by naming four alternate captains"*.

### ⚠️ A THIRD RENDER TRAP — a parenthetical numeral inside a quotation

A verbatim *"minimum of three (3) games"* rendered as **"minimum of three (three) games"**. The
quotation had to be split around the parenthetical.

⚠️ **That is now THREE defects this round that only a render caught** — this, the bold/italic span
crossing that spoke **a literal asterisk** into a Key Takeaway, and a bare count voiced alone in the
most-extracted layer. ⚠️ **Every one passed `check_links`, `check_facts`, `check_absolutes` AND
`check_quote_drift`.** **Render before and after, every time.**


### 🔴🔴 NEW WORKLIST — 87 CANDIDATE ATTRIBUTION DRIFTS, AND NO TOOL CAN SEE ANY OF THEM

Attribution drift was found **three times in one file** — a quotation carrying one book's characters
under a joint attribution naming two. ⚠️ **`check_quote_drift.py` scored all three CLEAN before and
after**, because it keeps the closest match across **all** sources. Its docstring records this.

**The searchable signal is the PHRASING, not the quotation:** *"word for word"*, *"the same sentence"*,
*"in both books"*, *"identical in both"*, *"character-identical"*.

**Census run 22 September:** 437 raw hits across 31 files → narrowed to lines carrying a **40+ char
quotation AND two or more named books** → **87 candidates across 30 files.** Densest:
`rules_primer.md` (45 raw), `body_contact_and_battles.md` (37), `goaltender.md` (25), `shooting.md`
(23), `faceoffs.md` (23).

⚠️ **A mechanical ranking exists and it works: HOUSE PRONOUNS.** NHL writes *his/he*; IIHF writes
*their* and capitalised *Player*; PWHL writes *her/she*. A quotation whose pronouns belong to one book
while the sentence names two or three is the drift shape.

**The sharpest hit, and it is in material committed in `79bdfde`:** `rules_primer.md:286` quotes
*"On **her** own side of the line shall be defined by a 'plane'…"* and *"possession and control of the
puck **with her stick**"* — **PWHL pronouns, attributed to NHL + IIHF + PWHL.**

⚠️⚠️ **THE PRONOUN TELL IS A CANDIDATE SIGNAL, NOT A VERDICT.** Many of the 87 will be correct — the
corpus legitimately quotes one book and names others for comparison, and several of these lines do
exactly that and say so. **Only a side-by-side read of two primary texts decides. Do not sweep.**

- [ ] Work the 87 by file, densest first. `rules_primer.md` dispatched 22 Sep.

### ✅ CLOSED — the EIHL Casebook amends NEITHER Rule 44 NOR Rule 50

Established three ways, not by rule-number grep: the **contents list and body pass enumerated in full**
(it writes 5, 6, 7, 9, 10, 11, 12, 28, 30, 36, 37, 38, 41, 42 Charging, 42 Elbowing *(its own typo for
45)*, 46, 47, 63, 64, 69, 77, 84, 86 — **no 44, no 50**); a **concept sweep** (`knee` 0, `clip` 0,
`lowhit` 0, `thigh` 0); and ⚠️ **a CONTROL PHRASE validating the cleaning first** — see the new form-feed
trap in `sources/README.md`.

**So IIHF 44 and 50 stand for an EIHL reader**, and both are **character-identical across the two IIHF
editions**, so the British edition question does not bite on either foul. Every British competition
document was searched and is silent; the only `clip` hits are **helmet J-clips**.

⚠️ **A positive finding that runs TOWARD the corpus:** **IIHF Situation Handbook, Situation 44.1** —
identical in both editions — rules that a player *"skating backwards and lowers the body in an attempt
to make a hip check… so low that contact is in the area of A16's knees"* is **clipping**. ⚠️ **A hip
check — a technique a reader may believe is traditional — is the illustration the rule is written
against**, in a document whose §5 and §7 both teach getting low. **Now in the document; needs
`safety-reviewer`.** Rule 50 prints *"No situation."* — an explicitly published absence, now stated
rather than left as silence.

### 📌 NEW — a corpus citation resolves to an OLDER revision than the copy the corpus verified against

`body_contact_and_battles.md` links the NIHL ROC at `…/2026/08/NIHL-1-and-2-ROC-2026-2027.pdf`.
⚠️ **`scripts/fetch_sources.sh` fetches `…/2026/09/…-1.pdf` and records that the 2026/08 URL still
returns 200 serving a revision OLDER than the copy on disk.** So the document's link sends a reader to
a document older than the one the corpus checked. **Affects every site using that URL, not one file.**


### ⚠️⚠️ COORDINATOR DEFECT — A BRIEF INVENTED A DEFECT, AND THE AGENT REFUTED IT

A brief asserted that `center.md` and `neutral_zone_systems.md` both point at `rules_primer.md` as
*"the four-book comparison"* on offside, and asked for the wording to be retargeted.

**Both halves were false.** `grep -c rules_primer content/systems/neutral_zone_systems.md` returns
**0** — that file has never pointed at it. And `center.md`'s pointer reads *"the full rule — tagging up,
what turns a delayed offside into a whistle, and the rule-set differences"* — **it never said
"four-book comparison".**

⚠️ **The coordinator inferred a plausible-sounding defect from the shape of a previous finding and
wrote it into a brief as fact.** Same class as the mis-attributed rule number and the short site list
earlier in the round. **The agent checked before editing, found nothing to retarget, and said so** —
which is the only reason no wording was changed to match a defect that did not exist.

### 🔴🔴 THE REAL DEFECT THE DISPATCH FOUND — a closed four-book field asserted TWO LINES from a six-book one, in the same block

Five statements asserted a **closed field of four books** on the airborne trail skate. In **both** files
that assertion sat **inside the same ` ```facts ` block**, two lines from a line naming five or six:

- `center.md:262` *"…not the NHL, USA Hockey, Hockey Canada, CARHA or the PWHL"* → `:264` *"two books
  of the four"*
- `neutral_zone_systems.md:48` *"two books of the four require contact"* → `:50` *"neither do the IIHF,
  USA Hockey, Hockey Canada or CARHA books"*

⚠️ **Each facts line is voiced ALONE with 300 ms either side. A listener hears the field is six, then
hears it is four, in adjacent utterances.**

⚠️ **Why it is worse than arithmetic:** the trail-skate drag is a **taught technique**, and a CARHA
beer-leaguer told *"the NHL and IIHF let you lift it, two of the four don't"* is invited to place their
own book in the permissive group **by resemblance** — which the owner document warns against in terms.
**Repaired in 8 lines across both files, every count scoped to the offside rule, CARHA kept as silent.**

### 🔴 NEW, OPEN — `center.md` RUNS THREE DIFFERENT BOOK-FRAMES AND NOTHING EXPLAINS WHY

Counted: **28** four-book phrases, **7** five-book, **2** six-book. The faceoff section already says
*"all five books"* and *"in only two of the five rulebooks"* with CARHA included; the crease and
checking-from-behind sections still say *"three of the four books"* (`:402`, `:689`) and *"any of the
four books"* (`:653`). `neutral_zone_systems.md` is 8 four-book / 3 five-book.

⚠️ **Each is locally defensible and NO DOCUMENT SAYS WHY THEY DIFFER. A listener has no way to
reconcile them, and nothing mechanical will ever report it.**

- [ ] `rules-verifier` sweep: does CARHA have a **checking-from-behind** rule the four-book sentences exclude?
  ⚠️ **The CREASE half of this row is closed** — answered in the commit of 22 September 2026 for
  `rink_map.md` and `center.md` from `sources/carha.txt` (Glossary *Creases* entry at `:270`, Rule 5(c)
  at `:545`); the record is `project/reviews/spoken_layer_and_edition_scope_2026-09-22b.md`. **Left open
  so the next round does not re-run work this commit did.** The checking-from-behind half is untouched.

### 🔴🔴 NEW — A CAPTION SPEAKS A FIFTH BOOK INTO A SECTION WHOSE OWN FACTS LINE SAYS FOUR

`center.md:415` embeds `![](diagram:oz-net-front-screen)`, whose caption is **owned by
`offensive_zone_play.md`**. Heard in the render of `center.md`: *"One rec book is stricter again: the
CARHA Hockey Official Rule Book, Rule 66(b), bars an attacking player from standing in the goal
crease…"*

⚠️ **Thirteen lines above it, `center.md:402` is voiced alone as *"three of the four books count that
line as part of the crease"*.** ⚠️⚠️ **The CARHA string appears NOWHERE in `content/` — it reaches the
listener only through the caption layer.**

**This is `check_caption_hosts.py`'s failure mode, live and audible.** ⚠️ **Caption text is a shared
constant** — editing it to fix this host would silently rewrite every caption importing it. The fix
belongs in `center.md`'s frame, not the caption.

### ⚠️ A RENDER CAUGHT TWO DEFECTS EVERY CHECKER PASSED — in the agent's OWN first edit

Found only because it rendered **twice**, before and after:

1. `center.md:759` — a bold/italic span crossing (`**…never defines its *"own side"** of the line`)
   rendered **a literal asterisk spoken into a Key Takeaway**. ⚠️ **`check_links`, `check_facts`,
   `check_absolutes` and `check_quote_drift` all passed it.**
2. A Key Takeaway opening *"Two books turn a habit…"* — a **bare count voiced alone in the
   most-extracted layer**. Substituted the names, which was **shorter than pointing at them**, as the
   standing guidance predicts.

⚠️ **The lesson is dispatchable: an agent that renders only AFTER editing cannot catch a defect it
introduced in the rendering itself. Render before and after.**


### 🔴🔴 NEW, HIGH VALUE — THE IIHF 2026/27 CHANGE LOG HAS EIGHT ROWS AND THE CORPUS HAS CHECKED TWO

`sources/iihf_rules_2026-27.txt:246-278` is the book's **own** statement of what changed between
editions. The coordinator pointed an agent at one line of it; **the agent read the whole thing.** The
eight rows:

| Rule | What changed |
|---|---|
| **6.1** | one captain + two alternates, or no captain and three |
| **33.2** | a fouled player is credited with an awarded goal |
| **46** | *"Major editorial changes… No changes in the implementation of the rule are expected"* |
| **60.1** | ⚠️ **high-sticking now requires the opponent's shoulder at waist level or higher** |
| **76** | ⚠️ **a faceoff violation ejects the CENTRE of the offending team**, and *"does not apply at a face-off when icing is called"* |
| **79.1** | a hand deflection gaining no advantage is not a violation |
| **83.1** | an attacking player entering early must **control the puck with the stick** to stay onside |
| **102.7 / 202.7** | deleted; **Rule 12.1 now applies to all games** |

⚠️⚠️ **60.1 and 76 are subjects this corpus teaches at length and NEITHER HAS BEEN CHECKED against the
corpus.** 83.1 bears directly on the offside work just shipped. **This is a primary-source list of
exactly where a corpus claim may have gone stale, and it was sitting unread.**

✅ **Two rows are already correct in the corpus and were verified, not assumed:** `equipment.md:119`
states the 102.7/202.7 deletion with the **right direction and the right editions**, and `uk_rules.md`
states Rule 12.1 with **no age scope**, which is correct in both.

⚠️ **Direction, which the agent got right and is easy to invert:** **Rule 12.1's own text is IDENTICAL
in the two editions.** What changed is the **deletion of the junior carve-out** — so junior hockey
**loses** a ten-minute-misconduct procedure and falls back to 12.1's adult ladder.

- [ ] Check the corpus against IIHF 60.1, 76, 83.1, 6.1, 33.2 and 79.1.

### 🔴 NEW — ATTRIBUTION DRIFT, found by reading two sources side by side, invisible to every checker

`body_contact_and_battles.md:527` says **NHL 50.1 and IIHF 50.1** *"are the same sentence"* and quotes
**the IIHF's wording attributed to both.** Verified by me against both books:

- **NHL** (`nhl_rules.txt:5980-5982`): *"a player leading with **his** knee… **his** leg… **his**
  opponent"*
- **IIHF v1.1** (`iihf_rules_v1.1.txt:4374-4376`): *"a **Player** leading with **their** knee… **their**
  leg… **their** opponent"*

Three pronouns and one capital differ. **True in substance, false as to characters** — and the quotation
marks cannot support the NHL half.

⚠️⚠️ **NO TOOL CAN SEE THIS.** `check_quote_drift.py` keeps the **closest** match across **all** sources,
so a sentence credited to the NHL while carrying the IIHF's characters scores **clean**. Its own
docstring records this as a known blind spot. **It was found by an agent reading both sources side by
side while writing the parallel passage elsewhere — not by any checker, and re-running one will not find
the next.** Relayed to the agent holding that file.

- [ ] Are there other joint *"NHL and IIHF"* quotations carrying one book's characters? **Nothing mechanical will answer this.**

### 📌 NEW — CARHA writes NO kneeing definition at all, and it is WIDER than Hockey Canada

`carha.txt:2685-2692`, Rule 56 *"Elbowing and Kneeing"*: *"any player who fouls an opponent in any manner
with their elbow or knee"* — minor, or discretionary major plus game misconduct, major **mandatory** on
injury, and **no match tier**.

⚠️ **"In any manner" is wider than Hockey Canada's point-of-contact test**, which the corpus has just
established as the widest of the four it names. **CARHA is the book many adult rec readers are actually
under.** PWHL kneeing is the NHL sentence feminised and aligns with the other three.

- [ ] Decide how CARHA sits in the kneeing frame before any document states a four- or six-book version.

### ⚠️ COORDINATOR IMPRECISION — a brief asserted a clean tree that was about to stop being clean

A brief said *"HEAD is `79bdfde` and the tree is clean"*. **True when written; false minutes later**,
because the coordinator dispatched four more agents into other files immediately after. The agent
finished, saw `equipment.md` modified, and **correctly flagged that the disjointness claim might not
hold** rather than assuming.

✅ **Disjointness DID hold** — every modified file had exactly one owner. **But the agent could not know
that**, and it was right to raise it. ⚠️ **A brief should say which OTHER files are live, not that the
tree is clean** — "clean" is a claim with a shelf life of seconds in a parallel round.


### 🔴 NEW, HIGH PRIORITY — the diagram-key link does not deliver its OWN stated justification

**Measured on the rendered page, 1200 px:** clicking the link lands on the key document at
`scrollY = 0`. The section answering the link's own words —
`#shape-fill-and-what-goes-inside-a-glyph` — sits at **y = 4671 on a 10256 px page**, 46% down, below
Key focus, Overview and two other sections. ⚠️ **And "On this page" renders CLOSED** (`details.open ===
false` on arrival), so the ten-entry ToC that would have routed the reader is not visible either.

⚠️ **The plugin's own comment argues distance:** *"a phone reader who meets a glyph in §3 reaches the
key by scrolling the whole document."* **The link replaces one long scroll with a click plus a second,
shorter scroll through an unrelated section** — on a phone with the ToC collapsed, that is the same
defect in miniature.

**Fix:** append a fragment in `site/src/plugins/remark-corpus.mjs`, where `resolveDocHref(...)` is
currently used bare. ⚠️ **The TARGET is a content judgement the reviewer explicitly declined to make
and left to the key document's owner** — `#shape-fill-and-what-goes-inside-a-glyph` answers the link's
wording, but `#where-each-symbol-comes-from` (y = 2214) may be better if provenance should come before
mapping.

✅ **Deep-link landing is otherwise correct on this site** — a fragment lands the heading at `top = 128`
against a 56 px sticky header, so scroll-margin is right and a fragment would work.
✅ **A broken fragment would FAIL THE BUILD rather than ship** — `check-links.mjs` validates anchors on
built HTML.

**NOT treated as a commit blocker:** the link works, navigates correctly and renders cleanly. It is
**less useful than intended, not defective** — and the target choice is an owner's call.

- [ ] Owner's call on the fragment target, then a one-line plugin change + rebuild.

### 🔴 OPEN — NO PHONE VIEWPORT HAS EVER BEEN OBSERVED FOR THIS CHANGE, AND THE TOOL COULD NOT DO IT

⚠️ **`resize_window` reported success three times and the CSS viewport stayed pinned at
`innerWidth = 1200`** — `outerWidth` read 395 while `innerWidth` stayed 1200,
`matchMedia('(max-width: 60rem)')` stayed **false**, and an `html { zoom: 3 }` probe did not move the
media queries either.

⚠️⚠️ **So NOT ONE mobile media query was exercised**, `SidebarNav`'s flow-at-the-bottom form was never
seen, and the key link was never seen at 375 px. **The reviewer labelled every mobile claim a proxy and
refused to record it as a viewport observation** — which is the correct handling and the reason this row
exists.

⚠️ **The sharpest form of it, in the reviewer's words:** *"The plugin comment's entire justification is
a phone reader's scroll distance, and that reader's experience is exactly the thing I could not
observe."*

**What IS known, by narrowing a `<figure>` element rather than the window:** the combined line takes
**2 lines at 360/320/300 px**, never overflows its container at any width, and the anchor spans both
lines with the underline broken mid-phrase. **Cosmetic, and a proxy.**

- [ ] Find a way to drive a real narrow viewport, or review on a real device. **Until then the mobile
      rendering of a corpus-wide figure change is UNOBSERVED**, and no report should say otherwise.

### 📌 NEW — `site/dist/analytics.js` is a GA4 bootstrap, inert only because a meta tag is absent

It ships in `dist/`. It reads `meta[name="ga-measurement-id"]` and returns immediately if absent, and
**that tag appears on 0 of the 53 built pages** — which is why the network capture showed **zero
off-origin requests** across four page loads.

⚠️ **So the "sends nothing to third parties" claim holds for this build, but it holds BECAUSE A META TAG
IS ABSENT, not because the code is.** Unchanged by this round; recorded so the claim is not mistaken for
a structural guarantee.


### 🔴 NEW, OPEN — `rules_primer.md:457` gives kneeing Hockey Canada's TARIFFS and the NHL's DEFINITION

⚠️ **PRE-EXISTING — confirmed NOT in the staged diff**, so it did not block the commit. But it is the
same defect the round just fixed in `body_contact_and_battles.md`, **un-propagated to its sibling.**

The bullet defines kneeing as *"**leading with the knee**, sometimes extending the leg out"* — the
NHL/IIHF/USA Hockey construction — then prices **Hockey Canada 7.8(a)–(e)** in detail. **It never
carries Hockey Canada's wider limb**, *"making contact with an opponent's knee **on an otherwise legal
hit**."*

⚠️ **So a Hockey Canada reader gets the four-minute price and a definition that is not theirs**, and is
never told their book reaches a knee on a check that was otherwise clean. **The rules primer is the
document a reader goes to for "what is this foul."**

✅ **Clipping in the same file (`:458`) does NOT have this problem** — it carries the NHL/IIHF wording
correctly, which is what makes the kneeing bullet a slip rather than a house style.

- [ ] Carry Hockey Canada's wider limb into the kneeing bullet.

### ✅ C6/C11 CLEARED — and the safety pass found the contradiction it was sent to find

**The load-bearing one (M1):** `body_contact_and_battles.md:496` and Key Takeaway 5 stated the contact
envelope as **SUFFICIENT** — *"a check that satisfies it does not offend the other three"* — while the
new §5 paragraph says the opposite in terms: *"under that book a check that satisfies every other part
of the envelope is still kneeing if your knee is what arrives."*

⚠️ **A reader who plays the envelope was told by one layer that they are inside a standard offending no
book, and by another that Hockey Canada ejects them.** Fixed with a limiting clause in both.

**M2:** the new kneeing `Rule:` line **carried the tariff but never the definition** — voiced alone it
said what kneeing *costs* and never what it *is*, and *"its own foul"* pointed at a contrast the
listener heard in a separate `<p>`. Fixed by substitution at 290/300 chars, **without spending the
block's last free line** (it was 13/14, 6/8 coaching).

✅ **Over-statement check passed:** the false *"no book prices at a bare minor"* framing — the
coordinator's brief error — **did not ship anywhere.** The text says *"two of the books write no bare
minor"* and names the NHL and IIHF as starting at one.

✅ **A corpus-wide layer test on "get low" found no clipping exposure**: twelve facts-layer hits, every
one an own-stance instruction, and §9's contact instruction is at **armpit** height, above the hips in
every book.

⚠️ **The pass's own caveat, which I am carrying rather than burying:** *"M1's insertions are a scope
limitation on a sufficiency claim, which is exactly the species of sentence this document has got wrong
before. They need another pair of eyes."*


### ✅ THE MAGNITUDE SWEEP WAS RUN AS A CLASS — one genuine find, and an EXEMPLAR to repair toward

Run 22 September over **headings + the five fixed summary layers + the facts layer**, corpus-wide, for
proportion/ranking/causal-magnitude language. **75 hits.**

⚠️ **MOST ARE FALSE POSITIVES AND THE PATTERN IS WORTH KNOWING BEFORE ANYONE RE-RUNS THIS.** The
dominant shape is **"the worst case is X"** — a *scoped consequence* claim, not a magnitude, and
correct. The next commonest is a **correctly attributed** superlative (*"USA Hockey calls keeping your
head up 'the single most important thing'"* — attributed, and the corpus elsewhere scopes it explicitly
as ranking the habit rather than the moment). **Do not sweep this pattern.**

**🔴 THE ONE GENUINE FIND — `off-the-ice/equipment.md:401`:**
> `### The three coverage gaps that cause the most injuries`

**A bare unsourced causal ranking, in a HEADING, voiced alone with a 700 ms break either side** — the
same shape as the two repaired in `body_contact_and_battles.md` today. ⚠️ **It has two echoes in
`Check yourself` (`:753`, `:755`), one of which is the section pointer**, so a repair must retarget
both and the anchor. **Nothing found in the section sources a ranking of gaps by injuries caused.**

**✅ THE EXEMPLAR — `systems/defending_the_rush.md`.** Its *"five causes account for nearly all of
them"* scores on the pattern and is **correct**, because it carries the disclosure **in all four
layers**: *"coaching emphasis, not a counted ranking, because no public data classifies odd-man rushes
by the play that created them."* ⚠️ **This is what the equipment heading should be repaired TOWARD** —
the corpus already knows how to state a ranking honestly; one document just did not.

**Still open from earlier today:** `body_contact_and_battles.md:1716` — *"Assuming the four worst
fouls…"*, with nothing in the document ranking fouls by severity.

- [x] ✅ **DONE — `equipment.md:401`**, by the `content-reviewer` dispatched to that file. The heading is
      now `### Three gaps between pieces of kit, and how to close each one`, with a labelling lead-in
      carrying the disclosure (*"fitting-guide emphasis rather than a counted ranking"*) instead of the
      ranking, and **both `Check yourself` echoes retargeted**. ⚠️ **That agent also found TWO MORE
      instances of the same defect in the same section** that this row never named — `:405`'s *"the most
      common way"* and Key Takeaway 6's *"The three gaps that hurt people"*.
- [x] ✅ **DONE — `body_contact_and_battles.md:1716`**, by the `rules-verifier` dispatched for the EIHL
      clipping and kneeing work. *"Assuming the **four worst fouls** are…"* → the four named outright,
      with **every citation in the bullet untouched**. `grep -c 'four worst fouls'`: **1 at HEAD, 0
      staged.**

⚠️⚠️ **THE PARAGRAPH BELOW WAS TRUE WHEN WRITTEN AND FALSE WITHIN THE HOUR, AND IT SHIPPED AS FACT INTO
A PENDING COMMIT.** It says neither file was touched. **Both were** — the coordinator wrote this note
while both files were staged and it expected not to touch them, **then dispatched agents into those very
files** and never came back to correct it. **The commit gate caught it by reading the index rather than
the plan.**

⚠️ **This is the *"Handed to `safety-reviewer`"* defect WITH THE SIGN REVERSED.** Last pass the plan
recorded an **intention as an action**; this pass it recorded an **action as a non-action**, and left
both rows open. ⚠️ **Committing it would have written a false statement into the defect record and
guaranteed the next round re-dispatched finished work** — the *"rediscovered rather than read"* failure
the one-plan rule exists to prevent.

⚠️ **The lesson is not "be careful". It is that a plan note asserting what WILL or WILL NOT happen goes
stale the moment the next dispatch is made, and nothing connects the two edits.** A row should record
what IS, and be re-read before the gate.

**Superseded text, kept because the record is the point:** *"Both are in files that were STAGED for the
pending commit, so neither was touched — editing a
staged file while the commit gate audits it creates exactly the index/tree divergence no checker and no
hook can see. **Dispatch these after the commit lands.**


### 📌 NEW — `uk_rules.md:570` cites a SUPERSEDED revision, and the fix is NOT to swap the URL

The Coaching Regulations citation points at **`2026/08/Coaching-Regulations-2026-2027.pdf`**. Checked
22 Sep: that path is **live — HTTP 200, 358,330 bytes** — and is the **older** revision; the publisher
now links **`2026/09/…`** at 544,036 bytes.

⚠️ **Do NOT simply swap the URL.** The citation carries *"retrieved 31 August 2026"*, and on that date
the 2026/08 file was what a reader got. **Changing the path would falsify the retrieval date.** The
honest repair is to keep what was read and disclose that a newer revision now sits at a different path —
the moved-path pattern recorded in `sources/README.md`.

⚠️ **The coordinator deliberately did not make this edit**: it is `content/`, it is new text, and a
repair does not self-certify. It needs an agent.

### ✅ NARROWED — the `equipment.md` sticks bullet is VERIFIED

The standing row says two-thirds of that file is unexamined and *"the sticks bullet alone asserts four
different shaft caps across four books and not one has been verified."* **A sample verified all four
verbatim:** HC 3.3(b) 1.60 m / 63 in., **no height exception**; NHL 10.1 63″ with an exception to 65″
for *"players 6'6" tall or more"* by written approval; IIHF 10.1 1.63 m, exception 1.65 m for *"Players
2.0m tall or more"*; USAH 301(b) a flat 65″, no condition. **The derived claim that a 64-inch stick is
legal under the IIHF and USA Hockey and illegal under Hockey Canada and — without approval — the NHL
holds arithmetically.**

⚠️ **This licenses NO inference about the rest**: skates, sharpening, flex, curve, lie, goalie gear,
certification, maintenance and prices remain unexamined after three passes.

### 🔴 NEW — a stale honest disclosure CONTRADICTED BY A SIBLING FILE

`equipment.md`'s Limitations block said the Coaching Regulations were *"not held here, **it was not
read**, and nothing above rests on it."* ⚠️ **At the same commit, `uk_rules.md` already cited that
document three times, including a full hyperlink in its own Sources trailer.**

**Two sibling files in one corpus disagreeing about whether a source exists.** This is the class
`CLAUDE.md` names as the rotten subset — *"whose question has since been ANSWERED ELSEWHERE IN THIS
REPOSITORY and nobody propagated to it."* Repaired, but **nothing systematically checks for it.**

✅ **CENSUSED 22 September — ZERO further instances found in real sentences.** Today's
`equipment.md` / `uk_rules.md` case appears to have been a **singleton**, and it is fixed.

⚠️ **THE FIRST ATTEMPT WAS A USELESS METHOD AND IS WORTH RECORDING AS SUCH.** Matching an
unavailability phrase against capitalised document names **on the same line** returned **269 hits** —
essentially all of them noise, because **Sources trailers are single lines of 10,000–27,000 characters
in which every book name co-occurs with every phrase.** An agent warned about exactly this shape
earlier in the round (*"useless inside the Sources trailers… I read those hits off as noise"*), and the
census reproduced the warned-against method before the warning was applied.

**Constraining to lines under 600 characters — i.e. real sentences rather than trailers — gives ONE
candidate, and it is a FALSE POSITIVE in the reassuring direction:**
`body_contact_and_battles.md:647` and `defensive_zone_coverage.md` **both** say the *IIHF Disciplinary
Code* *"is not held here"*. **They agree.** The URL that triggered the match belongs to a neighbouring
citation (the IIHF Situation Handbook) on the same trailer line.

⚠️ **The negative is WEAK, not conclusive, and the weakness is the same one:** the method needs the
sibling's citation to carry a URL **on the same line as the name**, and a trailer defeats that. **A
contradiction living inside two trailers would still be invisible.** Treat this as "no evidence of a
pattern", never as "the class is closed."

- [ ] If this is ever re-run, split trailers into their constituent citations first — line-based matching cannot work on them.


### ✅ CLOSED — the faceoff table is no longer the SOLE CARRIER of anything

Repaired by **voicing the substance inline**, not by shrinking the table. ⚠️ **Headroom deliberately
left at ZERO rows** — buying headroom means shortening a cell, which is the round-58 failure. **What
changed is the COST of the drop**, confirmed in the agent's own SSML render: six previously table-only
phrases now reach a listener in prose. **The table is still one row from dropping and is no longer the
only place anything lives.**

⚠️ **One correction to the earlier reviewer's list:** `Officials erred` was **half** voiced — the icing
limb was already at `:362`; only the offside limb was table-only.

**The finding that mattered most — a second sentence neither book's row had room for.** NHL 80.2 and
IIHF 80.2 both continue: *"If the attacking team is at fault and the play is stopped while the puck is
in the attacking zone, the ensuing face-off must be **moved to the nearest face-off spot in the neutral
zone**."* ⚠️ **A reader batting a puck down above the shoulders in the offensive zone LOSES THE ZONE
OUTRIGHT**, and neither the table nor any other layer said so.

**Two Hockey Canada divergences that were in NO layer at all:**
- ⚠️ **HC 6.3(b) decides the two-violation case on a DIFFERENT TEST** — *"the face-off spot in the same
  zone that is nearest to where stoppage of play occurred, excluding centre ice"*: **nearest spot, not
  least territorial advantage.**
- **HC 6.3(a) DOES write the icing-error rule** (centre ice). The corpus had attributed that remedy to
  NHL/IIHF/USA Hockey only.

✅ **A negative attacked rather than assumed:** the offside-error remedy really is USA Hockey's alone —
flattened searches for `erredincalling`, `shallhaveerred`, `erredinstoppingplay` and two more across
four books return only the icing clause; Hockey Canada's eight `erred` hits are all
`deferred`/`referred`. **The search scope was written into the document so the next reader sees the
shape of the hole.**

⚠️ **Deliberately NOT resolved:** neither book defines *"least territorial advantage"*. Voiced as a
plain-English gloss and **labelled as a reading of the words, not as either book's ruling.**

### ✅ CLOSED — offside is now a SIX-book comparison, CARHA marked silent

All six re-derived. **PWHL 85.1 carries the NHL's plane sentence verbatim** plus two 2025-26
clarifications the IIHF book lacks. **CARHA 72(c) Note 1 uses *"own side"* and never defines it;
`grep -ni "plane" carha.txt` returns ZERO for the whole book.** Reported as **silence — not resolved
into a permission or a prohibition**, in all four places touched.

⚠️ **The agent caught its own contradiction by reading the block whole rather than trusting its hunk:**
its first Key focus wording put a six-book bullet under a lead-in reading *"Four habits then hold under
all four books"* — **voiced alone, a listener would hear "four books" and then six.** Reworded so the
four-book lead-in stays true and the extra books are added rather than substituted.

### 📌 NEW, OPEN — TWO STALE POINTERS and a corpus-wide call

1. **`center.md` and `neutral_zone_systems.md` both point at `rules_primer.md` as *"the four-book
   comparison"* on offside. It is now a six-book comparison.** Stale in wording, not wrong in substance.
2. ⚠️ **`rules_primer.md:13`'s opening frame names FIVE books and does not include the PWHL.** The agent
   scoped its "six" statements to the offside rule rather than rewriting that frame — correctly, because
   **whether the PWHL becomes a standing sixth book is a corpus-wide decision, not an agent's.**

- [ ] Retarget the two pointers.
- [ ] Owner's call: is the PWHL a standing sixth book for the whole corpus?

### 🔴 OPEN — the offside work covered the DEFINITION only

Named by the agent as the obvious next job it did not do: **delayed offside, tag-up, the whistle
triggers and the disallowed-goal exception are all still four-book claims**, untested against the PWHL
and CARHA. Also unsearched for any British departure on offside or faceoff location: the four IHUK
Rules of Competition, the EIHL Casebook, the In-House Rules — and **the IIHF Situation Handbooks**,
where *"a Handbook ruling could carve out a case my rule text forecloses — this corpus has been burned
by exactly that shape three times on one rule."*


### 🔴 OPEN, NEEDS A HUMAN — Rowland 2014 is UNREACHABLE and nine corpus figures rest on it

`practice_and_development.md`'s most quantitative passage. APA blocks the paper three ways (see the
soft-block trap now in `sources/README.md`), and **Semantic Scholar reports `openAccessPdf: CLOSED`.**

**Unverified by today's pass, and named explicitly rather than glossed:** `g = 0.50 [0.42, 0.58]` across
159 effect sizes · the 18%-negative figure · both delay moderators · all three initial-test-type figures
· the 0.72/0.81/0.36 high-exposure subset · the `g = 0.03 [−0.21, 0.27] k = 17` and
`g = 0.73 [0.61, 0.86] k = 52` retrievability cells. **Key Takeaway 11 carries two of them.**

✅ **The published abstract WAS reached** (via NCBI efetch) and is **consistent in direction** — but
carries **no numbers**, which independently **upholds** the corpus's own disclosure that it doesn't.
**Nothing was changed and nothing should be** — these rest on the corpus's disclosed 29 August 2026
reading.

⚠️ **This needs institutional access, not another agent.** Re-read it against §"How big is it?" and
§"Now the precondition."

- [ ] Owner's call: obtain the paper, or add a disclosure that the figures rest on a single unrepeatable reading.

### 🔴 NEW — THREE Shape-3 quotation drifts repaired, and the worst one dropped half a conclusion

All three closed a quotation with a **manufactured terminal period where the source sentence
continues** — converting a clause into a complete assertion. ⚠️ **Every mechanical gate passes on this**,
because the Markdown is valid and the claim is true as far as it goes.

⚠️⚠️ **The consequential one — Macnamara & Maitra 2019.** The corpus quoted deliberate practice
*"explains substantially less variance in performance among expert violinists than reported in the
original study."* The source **continues**: *"…and (ii) among more accomplished, elite performers, amount
of deliberate practice cannot account for why some individuals acquire higher levels of expert
performance than others."* **The corpus had limb (i) of a two-limb conclusion, and limb (ii) is the
sharper one.** Repaired by naming both limbs.

Also repaired: Kornell, Hays & Bjork 2009 (source continues *"…or that they are necessarily effective
for the same reasons"*) and Bjork & Bjork 2011.

✅ **And the suspicion I relayed was REFUTED** — the *"helpful, not hurtful (with the stipulation that
providing feedback is critical)."* period is **correct**; it is a complete sentence in the published
text. **Attacking the shape found three real ones that nobody had flagged.**

⚠️ **The exposure this leaves:** a quotation whose source **cannot be fetched** cannot be checked for
Shape-3 at all. Rowland, Metcalfe and the two distribution-of-practice papers remain exposed to exactly
the defect three of which were just found.

### 📌 NEW — a completeness option in `practice_and_development.md`, deliberately NOT taken

Macnamara 2016 reports a **third** moderator the corpus omits: **internally paced 41% vs externally
paced 17%**, which the authors flag as *"a marked trend… potentially important"* despite failing
significance. **Ice hockey is externally paced.**

⚠️ **This does NOT contradict the corpus** — hockey stays at ~17% either way — and adding it would make
the passage **less** confident about deliberate practice, not more. Flagged as an option, not a defect.

- [ ] Owner's call on whether the third moderator belongs.

### ✅ FOUR DISCLOSURES TESTED AND ALL UPHELD

Against the standing worry that the corpus's absence-claims go untested: Rowland's abstract *"carries
none of these numbers"* (**zero statistics — confirmed**); the USA Hockey handbook *"states no method,
no number of players and no definition of a puck touch"* (`video` 0, `tracked` 0, `sample` 0,
`methodolog` 0 in the 44 KB extraction); Czyż *"only its abstract could be obtained"* (*"This is a
preview of subscription content"*); and the rec-league page described as *"promoting a youth roller
programme it is trying to launch"* (*"we're working to launch"*, *"We need your support"*).

⚠️ **This is the second systematic disclosure test to come back overwhelmingly clean.** The corpus's
absence-claims are in good shape; **the rotten subset remains the one whose question has since been
answered ELSEWHERE IN THIS REPOSITORY and nobody propagated it.**


### 🔴🔴 TOOL DEFECT — `check_facts.py --near` UNDERCOUNTS COACHING FACTS, AND EVERY BRIEF TODAY ROUTED AGENTS TO IT

Found by an agent whose edit added a ninth coaching fact **after `--near` reported room**; the gate
rejected it. It reported the discrepancy instead of forcing the edit, which is the only reason we know.
⚠️ Its own words: ***"The gate is right and `--near` cannot be used to decide whether a fact will fit."***

**The cause, read from the source:**
- **GATE** (`scripts/check_facts.py:222-224`): `coaching = len(body) - (lines starting with "Rule:")`.
  So a **`Convention:`** line COUNTS as coaching, and so does any line not matching `FACT_RE`.
- **`--near`** (`:424-429`): skips any label in **`QUALIFIED = {"Rule", "Convention"}`** (`:84`). So it
  does **NOT** count `Convention:` lines.

**Measured corpus-wide 22 September 2026: 254 blocks where the two disagree, undercount up to 6.**
`systems/defensive_zone_coverage:162` — `--near` says **0** coaching, the gate says **6**.
`technique/skating:782` — 1 vs 6. `positions/center:21` — 4 vs 8, i.e. **AT CAP while `--near` reports
four free slots.**

✅ **Checked the other direction: 0 blocks currently FAIL the gate.** The tree is sound. **The exposure
is purely the MARGIN** — an agent is told it has room and then fails on write.

⚠️⚠️ **THIS IS A COORDINATOR DEFECT AS MUCH AS A TOOL ONE.** Roughly a dozen briefs today carried
*"run `check_facts.py --near` BEFORE editing any block"* and treated its output as authoritative for
whether a fact would fit. **It is authoritative for LENGTH (300/200 caps) and not for BLOCK SIZE.**

**The real number, until this is fixed:**
`coaching = len(non-blank facts lines) - count(lines starting with "Rule:")`, cap **8**.

⚠️ **NOT FIXED YET, DELIBERATELY** — three agents were live when it was found, and a shared tool is
shared state. **Change it between waves, not during one** (round 59's lesson, verbatim). The two live
agents touching facts blocks were messaged with the manual formula.

✅ **FIXED 22 September 2026, between waves, after every agent had finished.** A single
`coaching_count()` helper now sits beside the caps and **both the gate and `--near` call it**, so they
cannot diverge again — the two separate implementations were the defect, not the arithmetic. Verified:
**0 blocks where the two counters disagree**, gate still passes (850 blocks, 5,800 facts).

⚠️ **The buggy block-size section was itself added on 22 September and was never committed**, so the
defect never reached the history — but it had already misled agents for a full day.

⚠️⚠️ **THE FIX REVEALED A MUCH LARGER TRUE PICTURE, and this is the part to act on: 203 blocks sit
within ONE non-`Rule:` fact of `MAX_COACHING_FACTS`, and 90 are AT IT.** The undercount was hiding that.
`positions/center:21` reported **four free slots** and is actually **8/8**.

⚠️ **A block at the cap is CONFORMING** — `check_facts` passes it. It means the next non-`Rule:` line
added there fails the gate, so a repair must fold scope into an existing line, relabel to
`Rule:`/`Convention:`, or split the section. **With 90 blocks in that state, this will bite the next
wave repeatedly** — and `foundation/on_ice_communication` alone has five.

✅ **MEASURED 22 September, and the distribution answers it: the cap is BINDING, and authors are
writing TO it.**

Coaching-fact counts across all **850** blocks:

```
 0 coaching:   7        5 coaching: 201   <- mode
 1 coaching:  39        6 coaching: 167
 2 coaching:  52        7 coaching: 113
 3 coaching:  60        8 coaching:  90   <- AT CAP
 4 coaching: 121        9+:           0
```

⚠️⚠️ **THE SHAPE IS THE FINDING. The distribution tapers from its mode at 5 — 201, 167, 113 — and then
JUMPS BACK UP to 90 at exactly 8, and stops dead.** A natural tail would continue falling past 7. **A
pile-up at the boundary is the signature of a constraint shaping the content, not of a checker catching
outliers.**

**What the at-cap blocks actually are:** ⚠️ **71 of the 90 carry ZERO or ONE `Rule:` fact**, and **79 of
90 have 10 or fewer facts in total — none is anywhere near `HARD_MAX` (14).** So they are not large
blocks; they are **pure-coaching blocks sitting on exactly 8**.

**So the cap is doing its designed job** — it targets *"a block dominated by discretionary coaching"* and
these are exactly that. ⚠️ **But 90 blocks at precisely the limit with no rulebook content is not a
corpus that happens to fit; it is a corpus written to fit.** The gate's own message for exceeding is
*"the section is probably two sections"*, and for 90 blocks nobody has ever tested whether that is true.

⚠️ **The practical consequence for every future wave, which is why this matters now:** an agent told to
add a scoped line, a hedge or a safety limb to one of these **cannot**. Its only legal moves are fold
into an existing line, relabel to `Rule:`/`Convention:` (which also buys the 300-char cap), or split the
section. **`foundation/on_ice_communication.md` alone has four such blocks at 8/0/8.**

⚠️ **Measurement caveat:** taken while five agents were editing `content/`, so individual counts may
have moved. **The aggregate shape is not sensitive to that; do not quote individual figures from here.**

- [ ] Owner's call: sample a few of the 71 zero-`Rule:` at-cap blocks and test whether "probably two
      sections" is actually true. If it is, the cap is right and the corpus owes a split pass. If it is
      not, the cap is mis-shaped for coaching-only blocks and should be argued about, not worked around.

### 🔴🔴 CRITICAL FOUND AND FIXED — the shot-block equipment precondition reached the body and stopped

`defender.md` §Blocking Shots. Body: *"One precondition sits underneath all of it… **shin guards that
actually cover the shin *and* the ankle, and gloves not worn through in the palm**"*.

**Layers before: body ✓ · facts ✗ · Common Mistakes ✗ · Key Takeaways ✗.**

⚠️ **A defender taking the technique from the facts layer — which is what the extraction layer and the
site surface — deliberately puts shins, feet and hands in a puck's path without the kit check that makes
it survivable.** The only published clinical paper on the mechanism is lower-leg and **ankle**
fractures, so the ankle limb is the sourced one, and it was the limb no summary layer carried.

⚠️ **The owner had already propagated it into its own facts layer** (`body_contact_and_battles.md:1398`,
a `Key:` fact) **and `defender.md` did not.** Fixed by **substitution**, because the block was at
`MAX_COACHING_FACTS`.

### 🔴 TWO MORE TRUNCATED SAFETY LISTS, FOUND AND FIXED — the metric would have rewarded both

The pass that found these was dispatched precisely because **a truncated safety list scores BETTER** on
`check_layer_echo`. It checked **23 enumerations; 19 were complete; 4 were truncated.**

1. **CRT6's four-item "should NOT" list was abridged to three in Key focus, Overview and Key Takeaways.**
   CRT6: *"They should not drink alcohol, **use recreational drugs**, or take drugs not prescribed…"*
   ⚠️ **A player, parent or lift-home driver acting on the summary layer — the layer the podcast voices —
   heard three of four post-concussion prohibitions.** Body and Common Mistakes had it; the spoken layers
   did not.
2. **The YOUTH limb of both books' body-checking prohibitions never reached Key Takeaway 4.** The body
   quotes USA Hockey 604(a) (*"12 & under youth age classifications and below"*) and Hockey Canada 7.3
   (*"U13 and below"*) in full; the takeaway gave only the women's and non-check-adult limbs. ⚠️ **A
   reader of that takeaway alone is not told body checking is barred for every player aged 12 and under.**
3. `core_principles.md`'s boards posture list carried **eight of nine** limbs in two summary layers —
   the missing one, *"feet apart and knees bent"*, is sourced to the same USA Hockey checklist the
   document already quotes from.

**All four fixed by ADDITION or SUBSTITUTION only. No caveat, hedge, scope or red flag was removed, and
the echo scores ROSE — which is the correct direction.**

### ✅ REFUTED — the `check_layer_echo` docstring's CRT6 example is STALE as a defect claim

The docstring cites `conditioning_and_recovery.md` Overview carrying **six of CRT6's ten** red flags
against Key focus's ten. **Counted today: Key focus 10 · Overview 6 · body 10 · Common Mistakes complete
for what it claims · Key Takeaways 10.**

⚠️ **The Overview six is a LABELLED ABRIDGEMENT WITH A POINTER, not a truncation** — it names its own
denominator (*"Those are six of CRT6's ten — the six least likely to look like an emergency at the
rink"*) and points at the layer holding all ten. **Do not "repair" it.**

- [ ] Update the docstring: the measurement is accurate, the finding is not. Between waves, with the
      `--near` fix.


### ⚠️⚠️ COORDINATOR DEFECT — THE BRIEF'S PROPOSED HEADING WOULD HAVE SHIPPED A FALSE CLAIM

The worst of my brief errors today, and it is the class CLAUDE.md warns about under *"THE BRIEF'S
PROPOSED WORDING IS A BRIEF, NOT A PATCH."*

I specified a replacement heading for `body_contact_and_battles.md` framed as **"four fouls… that no
book prices at a bare minor"**, carrying the phrase *"again no bare minor"* from the prior report.

⚠️ **That is true only of Hockey Canada (double minor) and USA Hockey (minor + misconduct). NHL 50.2,
IIHF 50.2, PWHL 50.2 and CARHA 56(a) ALL start at a bare minor** — and **every** book's clipping rule
starts at a bare minor (NHL 44.2, IIHF 44.2, HC 8.7(a), USAH 639(a), PWHL 44.2).

**The agent refuted it and wrote *"two of the books write no bare minor"*, naming which.** Had it pasted
my wording, the corpus would carry a false penalty claim in a safety heading — **the exact defect the
heading was being repaired FOR.**

**The lesson is not "check harder." It is that I generalised a two-book observation into an all-book
claim while writing text for a file I had not read.** Specify the DEFECT and the CONSTRAINT; let the
agent that has read the document write the sentence.

### 🔴 NEW, OPEN — the EIHL clipping/kneeing tiers are UNVERIFIED, and the Casebook is superseding

Named by the agent that wrote the new kneeing and clipping material as the highest-value follow-up:

> *"I did NOT check `eihl_casebook.txt` for Rules 44 or 50 — and its Preamble makes it **superseding**,
> so an EIHL reader's clipping and kneeing tiers are unverified by me. Given the document already quotes
> that Casebook's boarding/charging/elbowing game-misconduct sentence, **a parallel sentence under Rule
> 44 or 50 is plausible and would change what §5 now says for an Elite League reader.**"*

⚠️ **Recorded independently today: the Casebook amends 22 rules and only a handful have been checked.**
Also not searched for either foul: the **IIHF Situation Handbooks**, the four **IHUK Rules of
Competition**, and the **In-House Rules**.

- [ ] Check EIHL Casebook and the IIHF Situation Handbooks for Rules 44 and 50.

### 🔴 NEW — A THIRD UNSOURCED RANKING IN THE SAME FILE, and the heading sweep is now clearly owed

`body_contact_and_battles.md` Common Mistakes still opens a bullet *"Assuming the **four worst
fouls**…"* — **nothing in the document ranks fouls by severity.** Found by the agent repairing the
second one; deliberately left as out of brief.

⚠️⚠️ **THREE unsourced magnitude or ranking claims have now been found in ONE FILE IN ONE DAY** —
*"This one rule prevents most of it"*, *"The four that cause the injuries"*, and this. **They were found
one at a time, each by an agent looking at something else.** That is not a backlog being worked; it is a
pattern nobody has swept for as a class.

- [ ] Sweep the corpus's heading AND summary layers for unsourced magnitude, proportion and ranking claims.

### 📌 NEW — two book divergences that WIDEN the hazard, both previously unrecorded

- ⚠️ **Hockey Canada's clipping line is at the HIPS, not the knees** — `hc.txt:7094-7099`, Rule 8.7:
  *"where a player uses their body to make contact below an opponent's hips."* **Wider than the other
  three books by the whole thigh.**
- **Hockey Canada Interpretation 1 to 8.7(a)** (`hc.txt:7119-7122`) aims directly at the technique the
  corpus teaches: *"While players may attempt to lower their centre of gravity… the onus is on the
  player lowering themselves to ensure that they do not commit a clipping infraction."*
- **CARHA has NO clipping rule at all** (five flattened terms, all 0), and its kneeing is **Rule 56,
  lumped with elbowing**. **The PWHL does NOT renumber these** — 44.1 and 50.1 as in the NHL.
- ⚠️ **One real carve-out, disclosed rather than written as a bare negative:** `usah_casebook.txt:19994`
  — *"There is no penalty for kneeing in sled hockey."*

### ⚠️ CHECKER RACE, OBSERVED AGAIN — and the agent handled it correctly

An agent reported `check_facts.py` failing on `content/positions/defender.md:682`
(*"9 non-rule facts, over 8"*) — **a file it did not own, held by a live agent.** It reported rather than
repaired. **My re-run minutes later: 26 documents, 850 blocks, 5800 facts, all conform.** The failure
was a checker reading a file mid-write.

⚠️ **And my clean re-run proves nothing either**, because that agent is still live. **The only run that
counts is after every agent has finished and every file is staged.**


### ✅ CLOSED — the IHUK Coaching Regulations are on disk, and the answer is a NEGATIVE

**Two separate agents named this document's absence as the highest-value thing they could not reach.**
Fetched 22 September 2026 from the **`2026/09`** path (the `2026/08` one also returns 200 with an older
358,330-byte revision). Now `sources/ihuk_coaching_regs.txt` + `_layout`, 15pp, 5.0% text ratio, real
text layer, registered in `fetch_sources.sh` and `sources/README.md`.

**What it settles.** §9 is scoped in terms to *"junior and senior teams, including **practices**, games,
camps, and hockey schools"*. §9.3 makes a neck guard mandatory for the **coach's own** on-ice PPE. The
coach's duty toward **players** reads *"Coaches must ensure players wear approved **helmets and face
protection, sticks, and gloves**"*.

⚠️ **THE NECK GUARD IS ABSENT FROM THE PLAYER LIST** — in the one document whose scope explicitly
reaches training. **So it does NOT extend the player mandate to practice. The corpus's cautious
training disclosure STANDS, and is now a SEARCHED NEGATIVE rather than a gap.**

⚠️ **The asymmetry is the finding. Do not let anyone write it up as a duty the document does not
create, and do not let anyone read it as a permission.** Under safety review 22 Sep.

⚠️ **Side effect: `ls sources/*.txt` is now 42.** Two stale counts were corrected — `CLAUDE.md` said
*"the directory holds thirty-eight"* and `.claude/agents/rules-verifier.md` asserted 40 as current.
**Both now point at the command instead of carrying a figure.**

### 🔴 NEW, OPEN — a protective-equipment duty absent from the corpus entirely: THE BENCH

Two of the four IHUK Rules of Competition put the neck guard on the bench, and the corpus had none of
it. From `ihuk_junior_roc_layout.txt:880-918`: *"Rostered (dressed) players on the bench: full kit,
including helmet (full face) and neck guard."* and *"Non-playing junior players may be on the bench only
if wearing, at minimum: helmet with full-face protection, neck guard, and upper-body protection.
**Otherwise, they must leave the bench.**"* `ihuk_wnihl_roc_layout.txt:754-771` is the U16 equivalent.

⚠️ **And `:1027-1028` closes the adult-exemption argument outright in one division:** *"All U19
National Division players must wear full face cages and neck guards for the full season, **regardless
of being 18+**."*

Added to `uk_rules.md`; **under safety review, and `equipment.md` propagation unverified.**

### 🔴 OPEN — TWO-THIRDS OF `equipment.md` HAS NOW GONE THREE PASSES UNEXAMINED

Sticks, skates, sharpening, lie/flex/curve, goalie gear, certification standards, maintenance, bag
routine, prices. ⚠️ **The sticks bullet alone asserts four different shaft caps across four books and
not one has been verified.** Each pass has been scoped to protective equipment and has said so honestly.

⚠️ **The reviewer's own warning about why this is dangerous:** *"A hazard whose heading does not
advertise it… a penalty-bearing sentence sitting under §Maintenance and Care or §Bag and Pre-Game
Routine would have passed me untouched."*

- [ ] Dispatch a pass scoped to the non-protective two-thirds.


### 🔴🔴 CRITICAL FOUND AND FIXED — a rule number asserted to contain text it does not contain, tariff 5× too light

`equipment.md` §Facial protection told the reader a pushed-up visor is *"one of Rule 9.5's named
examples"*, running warning → minor → misconduct.

**IIHF 9.5 has no such example list.** `grep -c "visor pushed up"` over `iihf_rules_v1.1.txt` returns
**1**, at `:7747` — inside **Rule 202.7, non-compliance with protection equipment, Men's Junior U18** —
and its tariff is not 9.5's: after **both teams** are warned through the coaches, *"The next Player found
not to be wearing the protection equipment… shall be penalized with a **ten minute (10') misconduct
penalty**."* 102.7 is the women's U18 equivalent.

⚠️ **So the corpus understated the tariff by 5× in the one age group where facial protection is
mandatory** — and told a junior player the warning is theirs, when it may already have been spent on a
teammate.

⚠️⚠️ **AND THE SAME FILE ALREADY HAD IT RIGHT 30 LINES AWAY** — its §Neck protection bullet correctly
routed junior violations through 102.7/202.7 to the ten-minute misconduct. **Two sentences in one
document, on the same two rules, disagreeing.**

**This was caught by the `safety-reviewer` pass over another agent's repair** — the pass that exists
because *"a repair is new text, and new text has not been reviewed."* It is the clearest vindication of
that rule this session.

⚠️ **Coordinator check, run afterwards:** I doubted two of the agent's claims and **both doubts were
wrong.** 9.5's only `example` is *"an elbow pad that is not covered by their jersey"*, and the 2026/27
hits for 102.7/202.7 are in a **CHANGE LOG**, not the rules.

### 📌 NEW — the IIHF 2026/27 extraction carries a CHANGE LOG nobody has read

`sources/iihf_rules_2026-27.txt:276-278` documents the book's own amendments, including:

> *"102.7, 202.7 … ment rules have been removed, meaning the same rules apply to both senior and junior
> games. **Rule 12.1 now applies to all games.**"*

⚠️ **This is a primary-source list of what changed between the editions, and the corpus has a British
layer that turns on exactly that question.** It settles the junior-protection-equipment divergence in
one line, and it may settle others the corpus currently hedges.

- [ ] Read the whole change log and check every corpus claim about IIHF edition differences against it.
- [ ] `Rule 12.1 now applies to all games` — check what 12.1 is and whether the corpus states it with an age scope it no longer has.


### 🔴🔴 NEW, OPEN — KNEEING AND CLIPPING ARE ABSENT FROM THE ENTIRE CORPUS

Found by reading `body_contact_and_battles.md` §§1–12 as **prose** — greps had cleared it. `grep -rli
kneeing content/` returns two files; in `body_contact_and_battles.md` the word appears **once, in the
`## Notes on verification` trailer, inside a sentence about a different search.** Not in any body
paragraph, facts block, Common Mistake, Key Takeaway, or the "What actually gets called" table. In
`rules_primer.md` it appears only inside lists of rule numbers — never defined, never priced.

⚠️ **Why it is a hazard:** §5 tells the reader their legal contact area is *"above the knees and at or
below the shoulders"*, in the body **and in the facts layer**. **Voiced alone that is the complete legal
test, and under Hockey Canada it is not** — 7.8 reaches *"contact with an opponent's knee **on an
otherwise legal hit**"*. Hockey Canada 7.8(a) is a **double minor** and USA Hockey 628(a) a **minor plus
misconduct** — ⚠️ **neither book has a bare-minor rung**, in a document whose most repeated point is
*"a minor is the floor, not the ceiling"*.

⚠️ **Sub-finding, sharper:** the document calls IIHF 44.1 *"conditional"*, quoting only its **last**
sentence — the **ducker's** limb. The two sentences above it reach **the checker**, with no location and
no consequence attached. It describes the half that does not govern a reader being taught to check.

**Dispatched 22 Sep.** ⚠️ **Not closed until `safety-reviewer` has seen the new prose** — it states
penalty tiers in the corpus's most dangerous document, and a repair does not self-certify.

- [ ] CARHA and the PWHL were **not** checked for either foul. CARHA is the book many adult readers are
      actually under, and this document cites it for eleven other fouls.

### 🔴 NEW — A SECOND UNSOURCED MAGNITUDE HEADING IN THE SAME FILE, FOUND THE SAME DAY

`body_contact_and_battles.md` heading `### The four that cause the injuries` — voiced alone, an
**unsourced causal ranking**. The four exclude kneeing, clipping and slew-footing, the last of which
this same document calls *"the most heavily punished foul in the book"*.

⚠️ **The document disclaims exactly this 200 lines later:** *"nothing in the safety material held here
ranks game situations against one another by danger."*

⚠️⚠️ **This is the SECOND such heading in this one file today** — *"This one rule prevents most of it"*
was the first. **The heading layer of this document was never swept for magnitude claims as a class.**

- [ ] Sweep the heading layer of the whole corpus for unsourced magnitude and ranking claims.

### ⚠️⚠️ METHOD CORRECTION — A 0.0% `check_layer_echo` SCORE MEANS NOTHING

Measured 22 September. `on_ice_communication.md` Key focus → Common Mistakes scores **0.0%** while
**both layers state the same kicking match penalty.** They share no 6-word shingle because the wordings
differ, and because `_words()` **drops every token of four characters or fewer**.

⚠️ **So a 0.0% is neither "no overlap" nor "propagation failed" — it is not evidence of anything, and a
coordinator reading such a row either way will be wrong.** Every other 0.0% row in the corpus is
unexamined.

⚠️⚠️ **AND THE METRIC IS ACTIVELY DANGEROUS IN ONE DIRECTION: a TRUNCATED SAFETY LIST SCORES BETTER.**
The tool's own docstring records `conditioning_and_recovery.md` with Overview carrying **six of CRT6's
ten red flags** while Key focus carries **ten**. **An echo-reduction pass would read that as an
improvement.** Dispatched 22 Sep to `conditioning_and_recovery.md`, `core_principles.md`, `defender.md`.

⚠️ **Ranking documents by top pair keeps pointing at SAFETY-HEAVY documents**, because a safety limb
repeated across layers is the largest single contributor. That is correct repetition, not a defect.

- [ ] Decide whether the plan should rank by this metric at all.

### 📌 NEW — the offside comparison is a FOUR-book frame and there are SIX

Verified from primary text: **NHL 83.1, IIHF, and PWHL 85.1 all define onside by a "plane"** of the blue
line — ⚠️ **the PWHL carries the NHL's plane test verbatim and is a third plane book the frame omits.**
**USA Hockey 630(a) and Hockey Canada 6.11 require skate contact.**

⚠️⚠️ **CARHA 72(c) Note 1 gives the on-side sentence WITHOUT the plane definition** — so it **does not
settle it either way**. It is **SILENT, not permissive and not contrary**, and no CARHA casebook exists
on disk to resolve it. ⚠️ **Do not let anyone "resolve" that silence** — the trail-skate drag is a taught
technique and the CARHA reader is exactly who a four-book frame leaves out. Dispatched to
`rules_primer.md`, which owns the comparison.

### ✅ SETTLED — the podcast chunk count is NOT load-bearing

`reading_ice_hockey_diagrams.md` went **11 → 12 chunks** (20,645 → 21,205 billed chars) from new prose
defining the `pivot` glyph. Pure **length** split — `md_to_speech.py:58` sets `MAX_BILLED_CHARS = 2800`
and the Overview chunk was already at the ceiling; no heading was promoted.

**Checked before deciding:** `podcast_queue.py` never mentions chunks, and neither does
`PODCAST_MANUAL_STEPS.md`. The queue derives from `structure.json` page order, one episode per
document. **Nothing depends on the count, so the pivot sentence stays.** The alternative was re-opening
an undefined symbol in the notation key.

### 🔴 OPEN, for `safety-reviewer` — the `blocking` legend glyph has never been tested against its own bar

`site/scripts/lib/rink.mjs` excludes `bodycheck` from the legend, reasoning that *"a legend that
advertises a body-check glyph without saying who may legally deliver one is a contact instruction with
no scope attached"*, and keeps `pressure` out on the same ground. **`['blocking', 'Blocking (screening)']`
is in the rows and has never been tested against that bar.**

Screening has real scope — `language_and_glossary.md`'s Screen entry runs to a paragraph of crease
limits, USA Hockey 625(b), NHL/IIHF Rule 69 Situations 5C and 5E, cross-checking tariffs in all four
books, Hockey Canada 7.5(a). **The legend row carries none of it.**

⚠️ **The agent that found it deliberately did NOT name the glyph in prose**, because naming it is exactly
what would give it reader-facing existence without scope. Three outcomes are possible — teach it with
scope, link the scope, or drop the row as `bodycheck` was — **and only a safety review should pick.**


### ⚠️ COORDINATOR DEFECT — SEVERAL BRIEFS TOLD AGENTS TO RUN A CHECKER IN A FORM THAT CHECKS NOTHING

`scripts/check_quote_drift.py` **requires a file argument.** Run bare it prints
`check_quote_drift.py <path to a content/*.md file> [min quote length]` and **exits 1**.

⚠️ **Multiple briefs today said "run `check_quote_drift.py`" with no argument.** The exit code is
honest (1, not 0), so this is not the silent false pass that `md_to_speech --only` produces — **but an
agent that runs it and sees no findings reads it as a clean pass**, and one nearly did. It was caught by
an agent that ran it properly and told me.

**Fix: every brief naming this tool must name a FILE.** Checked against its siblings —
`check_facts.py`, `check_links.py`, `check_absolutes.py`, `check_tables.py`, `check_layer_echo.py` and
`check_disclosures.py` all run corpus-wide with no argument, which is exactly why this one is easy to
get wrong.

- [ ] Audit the brief template for any other tool that needs an argument.

### 🔴 NEW, OPEN — the four IHUK Rules of Competition are unchecked for equipment departures

`rules-verifier` closed the neck-guard practice question today and named this as the highest-value
follow-up from its own work:

> *"I did not check the four IHUK Rules of Competition for a **neck-guard or jewellery** departure…
> **if any of those four extends the neck-guard requirement to training, the practice disclosure I
> just wrote is too cautious and should be narrowed.**"*

⚠️ **Note the direction — this would make the corpus LESS hedged, not more.** That is the rarer and
less-watched failure mode, and the one `check_disclosures.py` exists for.

⚠️ **Read the `sources/README.md` entry for these four first:** their flat extractions read tables
**column-by-column**, so a row's cells are not adjacent in the text, and the NIHL copy on disk is the
middle of three revisions.

- [ ] Check `ihuk_junior_roc`, `ihuk_u10_roc`, `ihuk_nihl_roc`, `ihuk_wnihl_roc` for neck-guard and jewellery departures.

### 📌 NEW — the IHUK Coaching Regulations 2026-2027 are NOT on disk

An agent was handed a quotation from them, **could not confirm it, and correctly wrote nothing resting
on it.** `ls sources/ | grep -i coach` returns only `iihf_coachdev_off_tactics.*`, which is IIHF coaching
material, not a regulation. The document is live at
`https://englandicehockey.com/wp-content/uploads/2026/09/Coaching-Regulations-2026-2027.pdf` (200,
544,036 bytes, fetched 22 Sep) — ⚠️ **and note the `2026/09` path: the `2026/08` one also returns 200
with an older, smaller revision.**

- [ ] Add it to `fetch_sources.sh` and `sources/README.md`, or record deliberately that it is out of scope.


### 🔴🔴 NEW, OPEN — THE EIHL CASEBOOK AMENDS **22** RULES AND THE CORPUS HAS CHECKED **FIVE**

The Casebook's own contents amend Rules **5, 6, 7, 9, 10, 11, 12, 28, 30, 36, 37, 38, 41, 42, 46, 47,
63, 64, 69, 77, 84, 86**. Across today's waves the corpus has verified **76 (absent), 84, 42, 69** and
the Preamble. **Seventeen remain unexamined.**

⚠️ **The rule this generates: any corpus fact stating an In-House or IIHF position and calling it
"Britain" is UNVERIFIED for those seventeen.** The hit rate on the ones checked is not low — Rule 42
was found making a game misconduct **mandatory** where IIHF 42.4 leaves it discretionary, i.e. the
corpus **understated a penalty**, and Rule 69 was found adding three criteria the corpus carries
nowhere in a spoken layer.

⚠️ **Rule 46 is the one to take first** — it is the warm-up/altercation rule, and the permissive
safety error repaired earlier today (a British reader told nothing is called for warm-up conduct)
was in exactly that area.

⚠️ **Counter-caution, measured today:** the EIHL Casebook's three version stamps disagree (footer
`1.0 010826`, version table `1.1 080926`, PDF metadata `1.0 080926`) and its Preamble says
interpretations go out **by email in-season**. A finding from the on-disk copy may already be
superseded and nothing on this machine can tell you. Say so when writing from it.

- [ ] Sweep the seventeen unchecked Casebook rules against corpus "Britain" claims, Rule 46 first.

### 🔴 NEW, OPEN — `special_teams.md` net-front section is owed an EIHL limb, and it is a DESIGN call

`rules-verifier` recorded EIHL Casebook **Rule 69** verbatim in the trailer today and **deliberately
did not** write it into the body or facts layer, handing the decision back:

> *"A trailer is not spoken. The section's British layer is currently built on the **IHUK In-House
> Rules** and scoped 'In EIH and SIHA competition' (grassroots), not EIHL, so adding an Elite League
> limb is a design decision about that section's British layer rather than a rules repair."*

Constraint it measured: that facts block is at `Key: 197/200` and its `Never:` line is near cap, **so
it needs a substitution plan, not an insertion.** The verbatim Casebook text is in that agent's
report — no refetch needed.

- [ ] Decide whether the net-front section's British layer covers the EIHL, then propagate or scope it.

### 📌 OPEN — the book-count framings: a SCOPE-WORDING backlog, and a sweep is the WRONG instrument

`ls sources/*.txt` returns **40**. Two documents frame their comparisons against fewer books than they
themselves already cite:
- `faceoffs.md` — ~**25** "five books" / "all five" framings; one section runs to six. Repaired with
  **one** scope paragraph + one `Rule:` fact + one `Key:` correction, **not** 25 rewrites.
- `body_contact_and_battles.md` — ~**50** "four books" framings, in a document **already citing CARHA
  and the PWHL in its own body**. One repaired (the checking-from-behind Key focus, extended to six
  and now naming CARHA's ejection); two spot-tested and **both held**.

⚠️ **Do NOT sweep, and this is measured rather than cautious.** The house phrasing is `"no book
**here**"` — already correctly scoped. Both spot-tests held at six books. A 25-site sweep would be 25
unverified assertions replacing one verified one. **Each site needs its own grep of the primary text.**

- [ ] Read the remaining framings site by site; change only where a missing book changes what a reader does.

### 🔴 NEW, OPEN — `reading_ice_hockey_diagrams.md`'s Overview is ~2,600 words against a 2–3 sentence template

Six `###` headings were added today to make it navigable, which was the asked-for repair. **The
style-guide-compliant shape is to promote them to `##`** and leave a short Overview.

⚠️ **The blocker is the podcast, and it is real: only a `##` opens a chunk** (`md_to_speech.py:3184`),
so promotion re-cuts this document's **11 chunks**. That is a coordinator call and was deliberately
not taken. It also has **~330 inbound diagram-key links**.

- [ ] Decide: accept the long Overview, or promote and re-cut the chunks.

### 📌 NEW — two `sources/README.md` cells that a future agent could "correct" the corpus TOWARD

Both found by rendering the image-only HEO sheet at 200 dpi rather than trusting a text search.

1. The HEO table (~`:1262`) gives *"hatched line | Lateral crossovers"*. The rendered glyph is a
   **bare picket of vertical bars, no line through it, no arrowhead**. `reading_ice_hockey_diagrams.md`
   says exactly that and **is right**; the README is the wrong one.
2. The README warns that the standard's **dashed outline** for "player position at the end of the
   repetition" would collide if the corpus used a dashed outline for anything else. **It does** — region
   edges and untinted lane lines. ⚠️ **The collision is LATENT, not live:** no diagram draws a dashed
   player glyph.

- [ ] Correct the README's "hatched line" cell; record the dashed-outline collision as latent.

### ⚠️ NEW — SOURCE REFRESH OWED BETWEEN WAVES (not during one)

`scripts/fetch_sources.sh` was repointed today to the NIHL ROC's new `2026/09` path. **The on-disk PDF
and `.txt` were deliberately NOT refreshed in the same action** — agents were live and grepping
`sources/`, and a source file is shared state.

⚠️ **Read the new `sources/README.md` table before refreshing: there are THREE revisions, the copy on
disk is the middle one, and it is served by no URL.** A byte mismatch against the live URL is expected
here and is evidence of nothing. The only corpus-relevant diff is one U18 eligibility clause, which
the corpus does not teach.

**The Coaching Regulations have the same moved-path shape** — `2026/08` (358,330) and `2026/09`
(544,036) both return 200.

- [ ] Refresh `ihuk_nihl_roc` between waves; check whether `2026/09` Coaching Regulations is owed too.

### ⚠️ COORDINATOR DEFECT RECORD — the briefs were wrong again, in two new ways

Both caught by agents, neither by any checker. Recording the KIND, not a total.

1. **A rule number attributed to the wrong book.** A brief said `special_teams.md:1042` cites *"NHL
   56.2(i) and **IIHF 8.3(i)**"*. **IIHF 8.3 is `BLOOD`**; the IIHF numbers interference at 56, as the
   NHL does. **`8.3(i)` is HOCKEY CANADA.** The agent: *"Had I acted on the brief I would have searched
   the IIHF book for a rule that is about blood and reported a false absence."*
2. **A site list short in the agent's OWN files.** A brief listed the Rule 76 sites; the agent found
   **three more** by sweeping instead of trusting line numbers — one of which (`center.md:462`) was
   **flatly reversed** for the EIHL and the sharpest instance in the document. ⚠️ **So the "19 of 20
   sites" denominator in that brief should not be relied on for the files it did not reach.**

**Both are the same failure: a coordinator asserting facts about files it has not read.** The standing
remedy is unchanged — specify the DEFECT and the CONSTRAINT, let the agent that has read the file find
the sites and write the sentence.


### ✅ THE FACTS-LAYER TRAILER GAPS — 9 documents, and the remedy was NEVER a new URL

⭐⭐ **THE BEST DECISION IN THE REPORT WAS A REFUSAL TO WRITE A FILE.** The agent declined to add rows
to `project/verification/link_baseline.tsv`: *"I fetched zero external URLs this session… I added no
URL to any file and observed no URL's status, so **writing rows there would have been a FABRICATED
OBSERVATION**."* **That is non-negotiable 1 applied to a verification record rather than to prose.**

⭐ **AND THE SHAPE OF THE FIX WAS NOT WHAT THE CENSUS IMPLIED:** *"In EVERY case the BOOK was already
listed with a live URL; what was missing was the PROVISION. So the remedy was **never a new trailer
entry** — it was extending the existing book entry with the rule number and its operative wording."*
**No URL was invented because none was needed.** **≈5.0 KB added across nine trailers, appended to
entries a reader already reaches rather than scattered.**

⭐ **The census's hint column held on all 12 sites** — *"no `IIHF 407(c)`-style mis-assignment in my
set"* — **and ZERO parse artefacts against a predicted ~1 in 12.** ⚠️ **But it warned against
extrapolating: *"my hit rate is a sample of ONE agent's files and should not be extrapolated to the
rest"* — 36 HARD sites remain unexamined.**
⚠️ **TWO SITES WERE RICHER THAN THE CENSUS RECORDED:** `breakouts.md:814` cites **NHL 15.3 and its
list of Rules 47, 58, 60, 62**, not just "NHL 47"; and `puck_handling.md:430` contrasts **IIHF 21.1
against NHL 21.1** — **and NHL 21.1 was ALSO absent from that trailer, which the census missed.**
✅ **One SOFT case correctly left nearly alone** (+67 chars): *"the reader test was already satisfied
— 15.3 itself names the four rules."*
✅ **Both census false positives upheld**, and `neutral_zone_systems.md`'s trailer **already carried
USA Hockey 630(a) verbatim**, so only 614(c) was genuinely open there.

#### ✅ COORDINATOR CLOSED THE ONE CHECK IT COULD NOT — the cross-trailer contradiction

Its declared gap: *"Four of my nine documents now describe USA Hockey 614(c) or 636(f) in their own
words… **I did not diff the four descriptions against each other, and two individually correct
trailer sentences can disagree.** That is the check I could not close."*
✅ **RUN THIS ROUND. 614(c) appears across 19 documents and 636(f) across 14. Every description
agrees in substance** — 614(c) consistently bars a goalie freezing outside the *"goalkeeper's
privileged"* area or behind the goal line with the body clear of the crease; 636(f) consistently
attaches **no icing condition** to a **sixty-second** time-out. **Zero sentences assert the
opposite of another. NO CONTRADICTION.**
- [ ] ⚠️ **ONE INCOMPLETENESS FOUND WHILE CHECKING, and it is the floor/ceiling shape again:
      *"636(f) gives NO TIMEOUT AT ALL IN A CURFEW GAME"* is carried by only THREE of the ~10 sites
      that state 636(f)'s no-icing-condition.** **The rest state the permission without the
      exception.** **Not a contradiction — a limb that reached three sites and stopped.**

#### 🟠 Two glosses routed, neither repaired

- [ ] **`passing_and_receiving.md:267` writes *"require[s] the BLADE to be in contact with the
      ice"*. USA Hockey **630(a) says *"SKATE contact"***. **Hockey Canada 6.11 is the book that
      words it as contact with the ice surface.** ⚠️ ***"The gloss is defensible but it is a gloss,
      and the facts layer is voiced alone."***
- [ ] **`passing_and_receiving.md:268` describes icing without NHL 81.1's *"equal or superior in
      numerical strength"* qualifier** — ⚠️ **a short-handed team may ice freely.** **The line's job
      is contrast with off-side so it may be deliberate scope; the qualifier is now in the trailer.**
- [ ] ⚠️ **Editions not re-checked: every quotation was verified against USA Hockey 2025-29, NHL
      2025-26 and IIHF 2025/26 on disk. *"I did NOT re-check any of these provisions against the
      IIHF 2026/27 rulebook or the Hockey Canada 2026-2028 book, and my added trailer text claims no
      such check."***



**Consolidated again 22 September 2026.** A long parallel round appended closed findings, lessons and
brief-error records straight into this file as they landed, which is the defect this file's own rule
exists to prevent. **117 closed sections moved out** to
[`plan_archive_2026-09-22_consolidation.md`](../reviews/plan_archive_2026-09-22_consolidation.md),
verbatim. A section stayed here only if it carries an unchecked row or its heading signals open work.
**Nothing was deleted, and no open row was touched.**

### ✅ FIXED — the Hockey Canada undercount in the owner document, and what checking it turned up

`body_contact_and_battles.md:750` said Rule 7.5 *"lists the **two** scenarios… and **both** are about
a player who has turned or bent."* **The rule lists four**, introduced as *"situations such as the
following"*, and **items (iii) and (iv) are about the CHECKER's action** — an elbow or forearm driven
into a back, feet kicked or pulled out — **with no turn or bend by the victim at all.** Repaired: the
passage now names all four, says *"four is a floor, not a count"*, separates the two kinds, and ends
*"Do not read the rule as reaching only the player who has put themself in a bad position."* Rule 7.5
added inline. Every quoted fragment verbatim from `sources/hc.txt`.

⚠️ **This is the OWNER document.** Five documents route readers here rather than restating the list —
`passing_and_receiving.md`, `switching_positions.md`, `skating.md`, `winger.md`, `zone_entries.md`.
**Nothing in a sibling is now wrong, but every one of them has been pointing readers at a passage that
made Hockey Canada's rule sound narrower than it is, for as long as the sentence existed.** ⚠️ **Any
agent that read `:750` today and carried "both are about a player who has turned or bent" into a brief
carried a false premise from the corpus itself.**

⚠️⚠️ **THE AGENT'S OWN NEGATIVE WAS FALSE, AND THE COORDINATOR CAUGHT IT — the same class, one layer
up.** It reported *"Items iii and iv appear **nowhere else in `content/`** — the corpus had never
carried them."* ⚠️ **`rules_primer.md:451` has carried item (iii) all along**: *"Its Rule 7.5 also
names a player who 'swings the elbow and forearm into the opponent's back with the intent of throwing
the opponent into the boards' among the situations referees are told to enforce strictly."*

**So the corpus contained the refutation of its own owner document's framing, in a sibling, and
nobody noticed.** That is this project's standing lesson — *the answer was already written down
somewhere in this repository* — arriving for the third time today, and this time inside a repair
agent's report rather than in the corpus.

- [ ] **Check the other three books for enumerated scenario lists this file may mischaracterise the
      same way.** Only Hockey Canada 7.5 was verified. **USA Hockey 608, NHL 43 and IIHF 43 were not
      re-read for scenario lists**, and the same defect could sit elsewhere in this file unexamined.
- [ ] **Check the five routing documents' POINTER TEXT, not just their claims.** The repair grepped
      for the defective framing, **not for sentences summarising what a reader will find here.** ⚠️ **A
      sibling saying "see the owner for the turn-and-bend cases" would not match that grep and would
      now be narrower than the passage it points at.**

### ⚠️ HONEST NEGATIVE — the corpus-wide unary sweep was run and is NOT a usable worklist

The agent handed over `grep -rn "defenceman's job\|your defenceman" content/` as the coordinator's
sweep. **It was run, widened to centres and wingers, and excluded units already carrying a system
name or a coaching-choice label. It returned 12 candidates — and the top hits are false positives,
one of them caused by the sweep's own pattern.**

- `defending_the_rush.md:849` — *"This is the weak-side defenceman's job **in the default system**."*
  ⚠️ **"default system" IS a system label; the exclusion pattern simply did not list it.**
- `defender.md:693` — *"Blocking shots is a defenceman's job"* — a **different question entirely**,
  about technique, not coverage assignment.
- `rink_map.md:385` — a definitional passage about what *"covering the point"* means.

**So: the class is real and the `goaltender.md` instance was genuine, but a corpus-wide regex is not
how to find the rest.** ⚠️ **Recorded as a negative result so the next reader does not re-run this
sweep and treat 12 hits as a backlog.** The method that worked was **an agent reading one document
and grepping it for a phrase the document itself uses.**

- [ ] ⚠️ **OPEN POLICY QUESTION, raised by two agents independently and above any single file:**
      `defensive_zone_coverage.md:106` names **five** families — collapse, man-on-man, hybrid, Box+1,
      collapsing box. **Today's repairs make documents three-way.** A goaltender on a Box+1 team still
      hears three names and none is his. **Should the corpus name five everywhere, or is *"find out
      which your team plays"* the intended catch-all?** This governs `goaltender.md`, `winger.md`,
      `switching_positions.md`, `center.md` and `language_and_glossary.md` alike. **Not decidable
      inside one file.**

### ⚠️ A BASELINE CONTAMINATED BY A CONCURRENT AGENT — and how one was rebuilt

An agent ran `check_quote_drift.py`, diffed against `git show HEAD:<file>`, **and was blamed for a
`notfound` that was not its own** — because the file already carried another agent's uncommitted work
when it arrived.

⚠️ **It did not accept the headline number.** It **rebuilt the true pre-edit file by reverse-applying
its own six substitutions** and re-ran: identical output, no change attributable to it.

**This is the index/tree divergence problem in a new place: in a round where a dozen files are
modified and unstaged, `git show HEAD:` is NOT a baseline for your own work.** ⚠️ **Recorded because
the naive check would have sent someone chasing a defect they did not create.**

- [ ] **28 not-found quotation fragments and 18 case-only drift flags stand in `special_teams.md`** —
      a standing worklist **nobody has been dispatched at**. The 18 are the documented judgement-call
      class (sentence-initial lowerings); the 28 are unexamined.

### ✅ `man/zone line` — removed at source rather than defined

**Confirmed by rendering**, not inferred: the renderer speaks it as *"the **man or zone** line"*, in
its own `<p>` with a 300 ms break either side, so *"the man"* and *"the zone line"* are genuinely
available as two readings.

⚠️ **The agent declined to add a glossary entry and substituted the term away instead** — *"naming
the thing is shorter than pointing at it, and it removes the speech ambiguity at source instead of
repairing it downstream."* Its second reason is the one to keep: **a `Man/zone line` entry would be a
SECOND definition site for something the `Hybrid` entry already defines, and the two would have to be
kept word-for-word in step forever.**

- [ ] **`man/zone line` now survives only in `winger.md` ×3.** ⚠️ **Each use is immediately
      enumerated, which is what makes it safe — so if anyone ever shortens one of those three
      sentences, the ambiguity returns with nothing to catch it.** A plan row, not an edit.

### ✅ Settled from primary text, not handed on

The Hockey Canada *"player"* definition question was **settled** rather than deferred, and the same
answer found for CARHA, **whose glossary nobody had reached.** ⚠️ **The residual is honestly
recorded: neither glossary's proviso is tested by a case, no HC or CARHA casebook is on disk, and
`sources/usah_casebook.txt` was not searched.** The corpus now tells a goaltender he is **inside** the
rule — *"the reading that does not get him penalised by surprise."*

- [ ] ⚠️ **`hockey-iq/risk_management.md` is the next file to check** — `special_teams.md:719`
      explicitly defers to it as carrying these books in full, and the same skater/goaltender
      flattening could sit there, in `positions/goaltender.md` or in `rules_primer.md`. **Not checked.**
- [ ] **Three pre-existing `check_facts_antecedents` hits in `special_teams.md`**, handed on and not
      acted on: `:262` (*"**That ranking**…"*), `:708` (*"**That exclusion** is not a permission for
      your goalie…"* — the preceding line is about smothering, so voiced alone it points at nothing),
      `:1056` (*"**That area** is not the crease…"*).
- [ ] **`(63.2(iii)/(III))` renders as *"sixty-three point two, clause three or clause three"*** —
      pre-existing, cosmetic, confusing aloud.

### 📌 OPEN — the five-family question now has a SECOND, stronger argument for open-the-list

The `defender.md` agent endorsed *open the list* but on different grounds than the `content-reviewer`:

> ⚠️ ***"Naming the hybrid does not let the reader self-classify."*** The owner says so itself at
> `:777` — *"a hybrid marks man-on-man below the dots too, so it will look like man coverage from the
> stands."* **A reader who hears the word "hybrid" is no better placed to know whether theirs is one.
> Worse, a three-name list reproduces the closed-list defect one step out — a Box+1 reader now picks
> wrong among three instead of two.**

⚠️ **This bears on work already done: five documents were repaired today to NAME the hybrid.** If
open-the-list is right, those repairs are not wrong but may be **the wrong shape**. **The owner
decides.**

**Its one exception is worth keeping either way:** the **net-front** question genuinely has a
different answer per system — the owner enumerates five — so there it pointed at the owner's
enumeration rather than naming any system, because *"no two- or three-name list is honest about that
row."*

### 📌 NEW — `defender.md`'s Diamond line is a `defender.md`-only claim

Opened by the `defender.md` agent, against its own repair. It used the Diamond line as
**evidence** that *"the bottom two in every shape"* was false — correctly. But the claim the
Diamond line itself makes, that the two defencemen specifically take the low point and a
middle slot, appears in **no other document**. `special_teams.md:511` describes the diamond's
geometry (one apex, two middle, one low) and **never says which positions fill which spots.**

⚠️ **So it may itself be a coaching choice stated as a law** — the corpus's commonest failure,
in a line that was just used to justify a repair. It was not verified. Next row in this file.

### 📌 NEW — `defender.md:717`, the "40–50 seconds for a D" disclosure

Pre-existing, outside the agent's brief, and left alone deliberately. Flagged as reading like
a **strong, honest disclosure** — which under non-negotiable 4 is the correct state, and under
Workstream 2B is exactly the kind that has to be **tested** rather than trusted or stripped.
Worth a round of its own.

### 🔴🔴 NO SOURCE ON DISK CAN SETTLE ANY HYBRID CLAIM IN THIS CORPUS

**Checked by the C11 reviewer and worth stating plainly.** `sources/` holds twenty-odd rulebooks and
casebooks plus **exactly three coaching documents** — `iihf_coachdev_off_tactics` (offensive tactics),
`bvhs` (goaltending), `ukcg`. ⚠️ **`grep -ci 'man-on-man|defensive zone coverage|low zone collapse|box+1|hybrid'`
returns 0 in all three.**

**Every hybrid statement made this round traces to `defensive_zone_coverage.md` and nowhere else**,
and that document correctly labels its own system claims *"coaching material"* and *"coaching
consensus rather than a count"*. ⚠️ **The four documents repaired today inherit those claims without
inheriting those words.**

- [ ] **A live lead for `source-verifier`, and it should be run BEFORE the five-family question is
      decided.** The owner's Sources trailer names **"RSF Performance — The Three Main D-Zone
      Coverages in Modern Hockey"** and **"HockeyShare — Defensive Zone Coverage: Box +1"**. ⚠️ **A
      cited source whose TITLE asserts there are three main coverages is real evidence the three-family
      framing is defensible rather than arbitrary.** Neither has been opened.

### ✅ The CRT6 repair — accepted in principle, and improved on its own brief

**Both recommendations accepted, one specific rejected with better reasoning.** The agent kept the two
least-guessable flags (**bilateral weakness/numbness**, **increasingly restless/agitated/combative**)
and dropped **loss of consciousness** — but **rejected dropping *repeated vomiting*, dropping
*seizure* instead**: a convulsing player produces an ambulance call from any bystander, whereas *"the
common lay reading of vomiting after a head knock is 'he's concussed, take him home', which is the
wrong action, and the discriminator — **repeated** — is the part people do not know."*

The footnote became a **route a listener can act on**: *"the Concussion section of this document gives
all ten in CRT6's own wording"* — no *"above"*, no *"below"*. And it added *"not the six that matter
most"*, because **a listener hearing six of ten will otherwise assume they are the severe six.**

- [ ] ⚠️ **NEW ROW, raised by that agent:** if `skating.md`, `body_contact_and_battles.md` or
      `uk_rules.md` carries its own partial red-flag précis, **it may now name a DIFFERENT six** — and
      a listener moving between episodes would hear two selections with no explanation. **A layer
      test across every document mentioning red flags has not been run.**
- [ ] **The guessability argument is unmeasured judgement** — the agent's and the reviewer's alike.
      *"Nothing on disk ranks concussion red flags by lay recognisability."* **If such evidence
      exists, the selection should be redone against it rather than against two agents' intuitions.**

### 🔴🔴 NEW, OPEN — the CAPTION LAYER has never been swept for non-negotiable 7 as a CATEGORY

**Opened 22 September by the agent that repaired the one caption anybody thought to look at.**

`winger-offensive-zone-patches` asserted high-slot ownership flatly, in the imperative, and was
**contradicted by its own host's prose two lines above the marker**. It was found only because the
same claim had been repaired in prose that morning and someone followed it down a layer.

⚠️ **Nothing else in the caption layer was searched.** Net-front assignment, the F3 layer, point
coverage, pinch rules and wall depth are **the same shape of claim** — a coaching choice stated as a
law, voiced to a listener with no surrounding context — and none has been looked at.

⚠️ **A keyword search cannot do this.** The search that found the one was `"high slot" AND
"centre"` — a string filter over one concept in one vocabulary. *"Leave that layer to the middle
man"* states the same thing and matches nothing. **The defect is a SPEECH ACT — flat ownership in
the imperative — and nothing greps for a speech act.** `check_caption_hosts.py --rule-like` ranks
where to look; only reading decides.

**DISPATCH PLAN — worked out by the coordinator, 22 September, and it is the one thing here that is
not guesswork.** `check_caption_hosts.py --rule-like` already produces the right unit of work: a
**(caption, host document)** pair. Group it with `--by-host` and **dispatch one agent per HOST
DOCUMENT**, because a caption must be true in every document it is spoken into, and the host is what
decides that.

⚠️ **NO COUNT IS WRITTEN HERE — RUN THE TOOL, it prints them.** What is worth recording is the
SHAPE, which the tool does not tell you: the pairs are **concentrated**, with the top handful of
hosts carrying roughly half of them, so a first wave of five agents covers most of the backlog. The
heaviest hosts when this was written were `how_to_watch_hockey.md`, `winger.md`, `goaltender.md`,
`center.md`, then `game_management.md`, `defender.md` and `rules_primer.md`. **Re-rank before
dispatching — the corpus is being repaired underneath this line.**

⚠️ **File-ownership warning specific to this sweep, and it is the one that bit round 59.** The host
documents are in `content/`; the captions are in `site/src/diagrams/*.mjs`. **An agent given a host
document cannot repair the caption without entering a directory every other agent in the wave also
needs.** So: **agents per host REPORT on captions and repair only their host's prose**, and a
**single** agent afterwards owns all of `site/src/diagrams/*.mjs` and applies the caption repairs.
⚠️ **AND CAPTION TEXT IS OFTEN A SHARED CONSTANT** — editing one to repair one host silently
rewrites every caption importing it. `grep -ln '<CONSTANT>' site/src/diagrams/*.mjs` first, every
time. ⚠️ **Then the coordinator rebuilds (`build-diagrams.mjs`, ~6 min, absolute node binary) BEFORE
`check_absolutes.py`, which reads the build product and will otherwise certify superseded text.**

### 🔴 NEW, OPEN — the `describe` layer is checked by NOTHING

The same diagram carried the identical false claim in **both** `caption` and `describe`. It was
caught only because one agent was reading that diagram closely for another reason.

⚠️ **A prose repair propagating into captions would never reach `describe` at all**, and no checker
in `scripts/` reads it. The other eleven diagrams examined in that round had their `describe` fields
read **for one defect and no other**.

### 📌 OPEN, for the owner — must a frozen diagram carry an exception?

`centre-low-zone-collapse` is **properly scoped** — names its system, names man-on-man as the
alternative, calls it a coaching choice. It was not edited. But it states the rotation flatly inside
the named system and **omits the fourth limb of the verified position**: the exception when the
weak-side winger is already low with their own check. `center.md:113` carries it.

The agent **declined to decide this unilaterally from inside the `.mjs` file**, correctly. It is a
general question the corpus has not answered: **how much qualification a single frozen frame can
carry before the caption stops being a caption.**


### ⚠️⚠️ THE QUOTE-DRIFT CENSUS WAS RUN, THE WAVE WAS WORKED, AND THE CENSUS'S RANKING WAS WRONG

**Corpus-wide: 31 of 39 documents flagged, 314 `CASE` + ~46 `ADDED '.'`.** ⚠️ **Re-run rather than
quoting these — the corpus is being repaired underneath them.**

**The coordinator ranked `ADDED '.'` as the substantive class. Wave 1 measured it:**

| Document | Reported | Substantive | Cosmetic | False positive |
|---|---|---|---|---|
| `goaltender.md` | 7 | **0** | 2 | **5** |
| `rules_primer.md` | 5 | **0** | 0 | **5** |
| `risk_management.md` | 7 | **3** | 2 | 2 |
| `equipment.md` | 5 | **3** | 0 | 2 |

⚠️ **Six substantive truncations out of twenty-four. The ranking was built on the tool's OUTPUT
rather than on any reading of it** — and the briefs' counts were wrong in two of four documents.

**Four false-positive mechanisms, three of them unpredicted:**
1. **Wrong BOOK** — the tool keeps the closest match across all of `sources/` and is blind to
   attribution.
2. ⚠️ **Wrong SENTENCE inside the right book** — HC Interpretation 3 has two near-identical
   sentences; the document cites clause v, the tool matched clause iv, because v is line-broken.
3. **PDF layout debris** — table-column interleave, cross-reference glyphs (`➔ Rule 69.7`), clause
   numbering.
4. **Enumerated-limb terminators** — the source closes limb (iii) with `;` not `.`; nothing is
   truncated.

- [x] **Wave 1 complete.** Two agents **reverted** edits they had made; one **revised its own
      grading downward** after handing back.
- [ ] **Wave 2 — the remaining eleven documents.** ⚠️ **Brief it as "expect mostly false positives;
      check attribution AND sentence identity first; a worklist entry that stays open is the correct
      result when the text is correct."**

### ⚠️⚠️ THE 314 `CASE` HITS ARE A MIXED POPULATION — SPLIT BEFORE DISPATCHING, AND DO NOT SWEEP

⚠️ **DECISION: the 20 September 2026 house-style decision STANDS.** `check_quote_drift.py`'s own
docstring records it — bare Shape-1 capital-lowering is **accepted house style, not a defect to
sweep.** ⚠️ **The coordinator built this census on that tool WITHOUT READING ITS DOCSTRING, ranked
the class as open, and dispatched a repair of four hits in `skating.md`. Brief error 29.** That
repair is not harmful and made the file internally consistent, but **it was work against a recorded
decision written inside the tool the census came from.**

**All four wave-1 agents independently recommended NOT sweeping**, the strongest reason being: *"a
corpus-wide sweep would be changing documents that have already made a choice."* Bracket-convention
usage where measured: `rules_primer` 94, `equipment` 30, `goaltender` 20+, `risk_management` 16 —
**every document already uses it and skips it.**

⚠️ **AND THE CLASS IS NOT ONE THING.** `goaltender.md:436` is **not** an initial capital — it
lowercases the IIHF's house capitalisation of **"Player"→"player" MID-SENTENCE**. The census
described the whole class as initial-capital lowering; **that description does not cover this hit
and bracketing is the wrong remedy.** ⚠️ **Separate mid-sentence house-capitalisation from
sentence-initial lowering before any of it is dispatched.**

- [ ] ⚠️ **Open, and it should be settled BEFORE 314 edits are ever authorised:** does lowering a
      source's initial capital without brackets actually mislead a **listener** in the extraction
      layer, where a facts line is voiced alone with a 300 ms break either side? **That is a
      `facts-reviewer` question and nobody has asked it.**

### 🔴 NEW, OPEN — the `notfound` bucket is the better target, and it is unread

Named by three agents independently as a better next brief than the drift list. ⚠️ **A quotation
with NO on-disk source is strictly worse than a drifted one: a fabricated, misattributed or
silently-updated one scores IDENTICALLY to a perfect one. `notfound` is silence, not a pass.**

- `equipment.md`: **82** — the BNQ closure notice, HECC/CSA helmet-lifespan and expiry material, the
  counterfeit-helmet passage, dermatology quotations. ⚠️ **Several safety-critical.**
- `risk_management.md`: **24** — including a **named analyst's Swiss zone-entry dataset with a
  56,700-entry figure and specific xG values**, quoted with no source on disk.
- `goaltender.md`: **46** — fourteen are book quotations.
- `skating.md`: **64** — measured against all 38 sources: **0 full matches, 1 partial.**

⚠️ **Some `notfound` entries are CORRECT quotations.** The `[x]` exemption strips only a **single
letter**, so `requir[ing]`, `delay[ing]`, `kick[ing]` report `notfound` while being verbatim — this
is in the tool's docstring and has caused false alarms three times. Others are on disk but
**unGREPPABLE** (line breaks, mid-parenthesis wraps, page furniture spliced inside a sentence), and
others are **image lettering** verifiable only with `pdftoppm`.

- [x] Dispatched 22 September: `equipment.md` and `risk_management.md`, both to `source-verifier`.
- [ ] `goaltender.md` (46) and `skating.md` (63 genuinely off-disk).

### 🔴 NEW, OPEN — the `:203` repair is NEW TEXT and has not been safety-reviewed

The `passing_and_receiving.md:203` Hockey Canada 7.5(ii) quotation was **confirmed verbatim and
correctly attributed**, and the guard sentence holds — **strengthened by a sentence the document
does not quote**: *"In all circumstances the responsibility is on the player delivering the check to
avoid contact to an opposing player's back."*

**But the absolute around it was overstated and has been rewritten.** *"every book's exact shape"* —
**only two of four write the picture.** NHL 43.1 and IIHF 43.1 define the offence by the victim's
state, not by a picture.

⚠️ **Also closed on the way: a CRITICAL provenance gap.** None of NHL 43, IIHF 43, USA Hockey 608 or
Hockey Canada 7.5 appeared **anywhere in this document's Sources trailer**, whose scope parenthetical
said the four books were read for other rules *"only"*. **On the document's own record the citation
was unsourced.** Trailer entries added for all four books plus the IIHF 2026/27 edition.

- [ ] ⚠️ **OPEN, and it is where a later round will land:** Key Takeaway 4 (`rules_primer.md:1067`)
      rests on **IIHF Reference Table 5/6** characterising Rule 43's game misconduct as automatic.
      **That table's Rule 43 row has NOT been read.** If it says something 43.3 does not, KT 4 is the
      site.
- [ ] ⚠️ **`safety-reviewer` on the repaired `:203` paragraph.** It governs a penalty and an injury
      mechanism, the tiers are mandatory ones, and **a repair is new text that has not been reviewed.**
- [ ] **Hockey Canada's Interpretations to Rule 7.5 were NOT read** (`hc_layout.txt:4871-4901`). If
      an Interpretation narrows item ii, nobody would know. The owner document appears to have read
      them; this one has not.
- [ ] **The USA Hockey Casebook on Rule 608 was not opened this session** — any Casebook carve-out
      to 608(b) is unchecked.

### 🔴 OPEN, and every agent that could have found it said it could not — ATTRIBUTION DRIFT

⚠️⚠️ **`check_quote_drift.py` keeps the closest match across ALL sources, so a quotation carrying the
IIHF's exact words under an NHL rule number scores CLEAN — not flagged.** Every wave-1 agent named
this, independently, as the thing its method structurally could not reach.

**`risk_management.md` is named as the likeliest place in the corpus**: four rulebooks, two casebooks
and CARHA contrasted sentence by sentence. `equipment.md` juggles five books plus four IIHF editions.

⚠️ **This is the inverse of the false positives wave 1 spent itself on, and it is the half that
matters.** A method that follows the tool's hits will never visit it. **`rules_primer.md:436` is the
live demonstration in reverse** — the tool pointed at USA Hockey for a quotation the document
attributes to the NHL, and **only reading NHL 59.1 separated a correct citation from a drift.**

- [x] **Dispatched 22 September:** `rules_primer.md` (~1,214 clean fragments, ~100 rule-number
      claims) and `body_contact_and_battles.md` (~1,023 clean), both to `rules-verifier`, both
      briefed as a **SAMPLE, not an audit**, concentrated where the document **contrasts two or more
      books in close quarters** — which is the hypothesis they were asked to test rather than assume.
- [ ] `risk_management.md` — **named by its own agent as the likeliest place in the corpus** (four
      rulebooks, two casebooks and CARHA contrasted sentence by sentence). Held by a
      `source-verifier` at the time of dispatch; free it first.
- [ ] `equipment.md` — five books plus four near-identical IIHF editions.

⚠️ **`body_contact_and_battles.md` is the OWNER of the checking-from-behind material and NOBODY HAS
OPENED IT THIS SESSION.** Two agents verified quotations in documents that defer to it and both said
the same thing: *"I did not open the owner. If the owner is wrong, five layers elsewhere now
propagate it faithfully."* Its brief also carries two specific unread targets — **Hockey Canada's
Interpretations to Rule 7.5** (`hc_layout.txt:4871-4901`) and the **USA Hockey Casebook on Rule
608** — each explicitly declared unread by the agents that needed them.

### 📌 PENDING — `CLAUDE.md` refinements, to be made BETWEEN WAVES, not during one

`CLAUDE.md` is shared state that live agents read, so the round-59 rule (*"change a tool between
waves, not during one"*) applies to the instructions as much as to the code. **Queued:**

1. **`check_quote_drift.py`'s entry understates its blindness.** It says the tool *"cannot see a
   quotation whose source is not on disk"* — true but incomplete. Add: it is blind to **which
   sentence** inside the right book, not only which book; it **silently prefers a superseded
   edition** where a current-edition sentence straddles a page break; and the `[x]` exemption strips
   only a **single letter**, so multi-letter disclosed insertions report `notfound` while verbatim.
2. **`timeout` does not exist on macOS** — belongs beside the nvm-shim false passes, same species.
3. **The `md_to_speech.py --only` id is the BARE DOCUMENT STEM**, not a hyphenated path; a wrong id
   prints *"no markdown found"* and **exits 0**. ⚠️ **This burned two briefs today.**


### 🔴 NEW, OPEN — attribution drift in the `clean` column is unaudited

⚠️ **`check_quote_drift.py` keeps the closest match across ALL sources, so a sentence credited to
one book while carrying another's wording scores CLEAN.** `sources/README.md` flags this for the
huh/ibc pair specifically.

**One pair was adjudicated by hand on 22 September and held** — `skating.md:125` credits
*Introduction To Body Contact*, `:29` says only *"(USA Hockey)"*, and **both books print the
sentence**, so both are sound. ⚠️ **The other 35 `clean` fragments in that one document were not
checked, and no other document has been looked at at all.**


### 🔴 OPEN — the `notfound` bucket hid a real defect, and the class it belongs to is unswept

`Shooting the puck after the whistle` vs USA Hockey 601(a)(4)'s actual *"**Shoots** the puck after
the whistle"* — **an undisclosed verb change inside quotation marks**, at four sites across two
documents. Rule number, tier and substance all right.

⚠️ **It escaped as `notfound` rather than `flagged` because alphanumeric normalisation makes
`Shooting…` fail to match `Shoots…` AT ALL** — so a genuine drift was filed as "no source on disk".
**Dispatched 22 September** as one agent owning both files, because a one-file repair is a
half-propagation.

- [ ] ⚠️ **The class is unswept corpus-wide: an UNDISCLOSED INFLECTION is invisible to both
      columns.** It is not the accepted Shape-1 lowering (case-only) and it is not a `DRIFT` hit.
      **Nothing in `scripts/` can find it.** The only handle is reading `notfound` entries whose
      near-miss is a single inflected word.

### 🔴 OPEN — the corpus's only measured turnover price is UNAUDITABLE, and that is not a defect

Recorded so nobody "verifies" it again and nobody strips it. The Swiss xG figures come from an
**unpublished model over a proprietary, manually-tracked dataset**. Nobody has replicated it, the
tracking definitions are not published, and one tracker's *"controlled entry"* is a judgement call.

⚠️ **The document's scope caveat is honest and the quotations are verbatim. No refetch can test the
numbers underneath.** Non-negotiable 4 applies: **this is a single-source dependency to disclose,
not to remove.**

- [ ] Consider whether the document should say the model is unpublished, as well as single-source.


### 🔴 OPEN — the two PEER-REVIEWED sources are the two nobody can read

⚠️ **An inversion worth naming: the only peer-reviewed citations in `equipment.md`'s external bucket
are the only two that could not be reached.** `pubmed.ncbi.nlm.nih.gov/21985216/` (Tlougan
dermatology) and `/1517252/` (visual occlusion) return **HTTP 203, 5,567 bytes, body
*"Cookies must be enabled"*** — a cookie wall, read instead of the article, with a browser UA and
redirects already tried.

**So the most scientifically weighty material in the document is the least verified.** ⚠️ **The
quotations were NOT weakened or removed — unreachable is a fact about the fetch, not about the
claim** (non-negotiable 4).

- [ ] Reach them another way, or label the reach attempt in the document.
- [ ] `purehockey.com` returned **403 on two attempts** for two paths while serving **200 for two
      others in the same session** — ⚠️ **the host is INCONSISTENT, not blocking. Do not record it
      as a dead host**; it looks like WAF rate-limiting.


### ⚠️ A BASELINE ROW RECORDS A FETCH, NOT A FACT — and the freshness it confers EXPIRES

**The sharpest sentence in the whole verification round, and it is about the baseline itself:**

> *"Every `200` here is a claim about 22 September 2026 only… a row that reads `verified` a year
> from now is making a stronger claim than the one I measured."*

The BNQ letter describes a programme closing **31 July 2027**; the HECC and CSA pages are **live
pages that can change under their citations silently**. ⚠️ **A retrieval date is a claim about the
past. Re-verification has a shelf life and nothing in this repository tracks it.**

- [ ] Decide whether `link_baseline.tsv` should carry a **staleness horizon** per row rather than a
      bare read date. **No tool proposed — a tool that ranked rows by age and offered to refresh
      them is how round 44 manufactured a divergence that did not exist.**

### 🔴🔴 NEW DEFECT CLASS — A WORD CLEANLY DELETED FROM INSIDE A QUOTATION IS INVISIBLE TO EVERY CHECKER

**Found and repaired at `rules_primer.md:338`, 22 September.** The document quoted CARHA's Note 3 to
Rule 65(a) as *"it shall NOT be considered 'icing'"*; `carha.txt:3056-3059` reads *"considered **as**
'icing'"*.

⚠️⚠️ **`check_quote_drift.py` CANNOT SEE THIS BY CONSTRUCTION. It compares the ORIGINAL CHARACTERS
of the closest match, and a cleanly deleted word leaves every surviving character identical.**
Meaning unchanged, attribution right, rule number right — **and every gate passes.**

- [ ] ⚠️ **The class is unswept corpus-wide and NO TOOL CAN FIND IT.** The only method is reading the
      source sentence in full beside the quotation. **Brief it as "check each quotation for OMISSION
      as well as drift", per document, wherever a rules-verifier is already in the file.**

### ⚠️⚠️ EDITION DRIFT NOBODY IS WATCHING — the British layer has an EXPIRY DATE and no owner

**Named by the `rules-verifier` that read the corpus's owner document, as the thing that matters most
and that nothing here tracks:**

> *"A claim quoted correctly from `iihf_rules_v1.1.txt` is right for a British reader today and
> **wrong the day IHUK adopts 2026/27** — and nothing in this repository watches that date."*

The corpus pins Britain to **IIHF Version 1.1 / 2025/26** on the strength of the In-House Rules'
Introduction, while their **cover** says *"the Current IIHF Rule Book"* and `uk_rules.md:46-48`
records that **nothing published settles which.** ⚠️ **Where the two editions differ — and they do,
at Rules 46, 76.4 and 76.6 at least — a correct citation becomes a wrong one silently, on a date
nobody has written down.**

⚠️ **This is the same species as the baseline row's *"a `200` is a claim about 22 September only"*,
but with a HARDER consequence: a stale link is a broken reference; a stale EDITION is a wrong
penalty tier read aloud to a player.**

- [ ] Decide who owns this. **No tool is proposed** — a tool that ranked citations by edition age and
      offered to bump them is how round 44 manufactured a divergence that did not exist.

### 🔴 OPEN — `check_absolutes.py` PASSES on an unscoped penalty tier, and the document contradicts itself

`body_contact_and_battles.md:778` states checking from behind *"is a major penalty with an automatic
game misconduct"*. **True of the NHL and IIHF only** — Hockey Canada 7.5(a) writes a **Minor** plus a
Game Misconduct, USA Hockey 608(a) a minor-plus-misconduct **or** major-plus-GM.

⚠️ **The document's own §5 says so at `:589`** (*"Two of the four books here provide a minor for
it"*) **and `:1621` states it correctly scoped.** ⚠️ **It OVER-states, so no reader is endangered —
but it is a book-scope defect in a spinal-injury passage of the OWNER document, and every gate
passes on it.** Dispatched to `safety-reviewer`; the fix is one qualifier, not a rewrite.

### 🔴 OPEN — a Hockey Canada CARVE-OUT the corpus has never read, found only because a brief named a line range

**Interpretation 3 to Rule 7.5(a)** (`hc_layout.txt:4886-4893`) permits *"[p]inning a player to the
boards at low speed and with minimal impact… even if contact is initiated from behind"*, with the
limb *"(except under Rule 7.3 – Body-checking, as applicable)"* — **so the permission evaporates in
a non-checking division.** `grep` returns **zero** for it in the corpus.

⚠️ **Direction is CONSERVATIVE — the document teaches *"pin the puck, not the player"* at `:1641`,
which is STRICTER than Hockey Canada allows. Nothing should be deleted** (non-negotiable 3).

⚠️⚠️ **THE GENERAL LESSON IS THE HARD PART:** *"There is no mechanical way to enumerate the carve-outs
a document has never heard of."* **It surfaced only because a brief named a line range.** A rule
absent from the corpus is invisible to every checker, every census and every quotation audit here.

### ⚠️ AN UNBALANCED BOLD RUN THAT NO CHECKER SEES AND THE SITE WOULD SHIP

`body_contact_and_battles.md:750` carried **seven `**` markers — an odd number** — because an earlier
wave's paragraph never closed its opening bold. **Every following emphasis pair inverted:** the
sentence *"…four is a floor, not a count"* rendered **plain** while *"Two of the four are about the
position the checked player is in"* rendered **bold**.

⚠️ **No listener impact — the speech renderer strips markup — so every gate passed and the SITE
would have shipped it.** Repaired by adding the missing closing marker; **no word changed, parity now
8.**

- [ ] ⚠️ **Nothing checks emphasis-marker parity.** A one-line count of `**` per paragraph would
      catch the whole class. **Consider it — but it is a WORKLIST, not a gate:** a `**` inside a code
      span or a quotation is legitimate.


### 🔴 OPEN — a penalty-cost fact the corpus does not carry ANYWHERE

`ihuk_junior_roc_layout.txt:1597-1602`: at U12 **a minor is 3 minutes in 3-line games and 4 minutes
in 4-line games**, and penalties are *"served only on the player's line shifts."*

⚠️ **The corpus's penalty-cost arithmetic assumes 2:00 throughout**, and that arithmetic is
load-bearing — `risk_management.md` prices a minor at *"roughly a one-in-five chance of a goal
against"*. ⚠️ **And the second limb is stranger than the first: *"served only on the player's line
shifts"* is not a duration change, it is a different MECHANISM** — a penalty that runs only while
your line is out is not a penalty that runs on a clock. **Dispatched to `uk_rules.md`.**

**Same class as the exclusion `sources/README.md` already records for U10 (*"no penalties are
recorded"*).**

### 📌 OPEN, reported not fixed — two incompletenesses, neither wrong

1. **`rules_primer.md:86-92` (period length prose) has no Home Countries line**, so the corrected
   table row now has **no prose counterpart**. **Incomplete, not wrong.** The fix wants a sentence
   written against that section's flow.
2. **In-House Rules 64 (Embellishment, "2 plus 10") and 5.1 (team list, bench minor) appear nowhere
   in the comparison set** — but `:944` discloses the column *"covers only the amendments that touch
   the rules compared here"*, **so this is a scope statement holding correctly. NOT a defect**,
   recorded so nobody re-derives it.


### 🔴🔴 A SECOND INSTANCE OF THE SAME GATE GAP — `check_absolutes.py` CANNOT SEE A PENALTY DURATION

**Two independent instances found today, in the same document, by different agents:**

| site | what passed | why |
|---|---|---|
| `rules_primer.md:934` | *"As IIHF — **at every age and level**"* | the absolute is about a rule's **reach**, not a denial or a penalty cap |
| `rules_primer.md:26` | *"**A minor is two minutes** a skater short"* | read as a **duration**, not as a cap of a penalty tier |

⚠️ **Both are unscoped absolutes in the highest-visibility layer of the corpus's rules document, and
the gate passed both — correctly, by its own definition.** Recorded as a **pattern**, not a bug: the
checker guards denials and penalty-tier caps, and **a bare duration or a reach claim is neither.**

- [ ] Decide whether the checker should reach either shape. ⚠️ **NO TOOL PROPOSED HERE** — a checker
      that flagged every duration would be unreadable noise, and round 44 is the standing warning
      about a tool that ranks and then offers to fix.

### 📌 OPEN — a listener hears NO British period length anywhere in the rules document

`rules_primer.md:86-92` gives NHL / IIHF / USA Hockey and **no Home Countries line**, so the repaired
`:937` table row has no prose counterpart — ⚠️ **and the §10 table is DROPPED by the speech renderer**,
so a listener gets only the header's *"the IIHF flags are yours"* attached to an unscoped *"three
periods of twenty minutes."*

⚠️ **There is a clean precedent to write against: `:366` already does exactly this job for icing**
(*"in IHUK junior competition there is no icing at U12 at all"*). **The period section is the odd one
out, not a new pattern.**

**Judged Major-adjacent, NOT a safety matter, and deliberately not written:** period length injures
nobody; its one penalty-exposure limb — that a running clock changes what a minor costs — **is the
part that was fixed at `:26`.**

- [ ] Write it against that section's flow.

### 📌 OPEN — two further U12 penalty exposures, reported not propagated

Both already in `uk_rules.md:296-297`, neither in `rules_primer.md`:
- the 60-second line-change buzzer — *"Puck must be left where it is"*, **"Deliberate movement =
  warning, then minor penalty for unsportsmanlike conduct."**
- line-sheet breach — **"First offence = minor penalty."**

⚠️ **A content-architecture call, not a safety one** — they are competition-format rules with no
NHL/IIHF counterpart section to hang off.

### 🔴🔴 "YOU CHECKED FOUR BOOKS AND THIS CORPUS HOLDS TEN" — a defect class with no tool behind it

⚠️ **The single most transferable lesson of the day, in the finding agent's own words:**

> *"The kick-shot limb was invisible to the brief's four-book method and would have been invisible to
> mine too, had I not run the sweep across **every** rulebook on disk rather than the four the
> sentence names. **There is no tool that says 'you checked four books and this corpus holds ten.'**"*

**The coordinator asserted the kick-shot bar was a USA-Hockey-only limb, having checked the three
books the sentence named. REFUTED, twice over:**

- ⚠️ **CARHA Rule 68** (`carha.txt:3224-3226`) makes it a **MINOR PENALTY** — *"A Minor penalty shall
  be assessed to any player, except a goalkeeper, who uses a kick shot during the game."*
  **Harsher than USA Hockey's, and the brief did not name the book at all.**
- **Hockey Canada 6.10(c) IS a kick-shot clause** (`hc.txt:5352-5353`) — it bars the **goal**, not the
  act, but *"none carries a kick-shot clause"* was false.

**Coordinator-verified, flattened `kickshot` counts across every book on disk:** `nhl_rules` **0** ·
`iihf_rules_v1.1` **0** · `iihf_rules_2026-27` **0** · `hc` **0** · `pwhl_rules` **0** · `usah` 1 ·
`usah_casebook` 1 · **`carha` 5**.

- [ ] ⚠️ **The class is corpus-wide and unswept: every "all four books" / "none of the books" claim
      was tested against the books its own sentence names.** `ls sources/*.txt` returns **38**.
      **Nothing enumerates the gap between "books the sentence names" and "books on disk."**

### 📌 OPEN, owner's call — `passing_and_receiving.md:444` and the PWHL

`:444` says the good-goal limb is **"NHL and IIHF only"**. ⚠️ **`pwhl_rules_layout.txt:4505-4507`
carries 49.2(iii) identically**, so the line is **strictly incomplete**. ⚠️ **It measures 278/300 and
cannot take another book without risking an eviction**, so it was deliberately left.

**Either a cap-aware rewrite, or a deliberate decision that "the four books" is the stated frame.**
⚠️ **The agent declined to decide: *"that is an editorial scope decision, not a rules question."***

### 📌 OPEN — a date that understates the corpus's own evidence

`uk_rules.md:390` dates the Rules of Competition *"as fetched on 10 September 2026"*. **The Sources
trailer and `sources/README.md` both record the Junior RoC refetched 16 September 2026** — HTTP 200,
1,098,281 bytes, SHA-256 match, `ModDate` 26 August. **Understates by six days, on the very document
Appendix D comes from.**

⚠️ **Left unedited deliberately — *"changing a date is a factual edit I would rather you route than
make unilaterally."*** ⚠️ **AND THE CORRECTION IS NOT A SIMPLE BUMP:** the README records that the
**NIHL and WNIHL** copies on disk **no longer match live**, because England Ice Hockey rolled back to
the 26 August originals. **A new date here must not silently imply all four were confirmed current.**

### 🔴 OPEN — a promise the document makes about ITSELF, verified for ONE row out of many

`rules_primer.md:946`: *"every row in it is also set out in words earlier on this page."*

⚠️ **That promise was FALSE for the British column of the Period length row until today's edit, and
it has been checked for THAT ONE ROW AND NO OTHER.**

⚠️⚠️ **It matters more than it looks because `check_tables.py` reports the §10 table is DROPPED by
the speech renderer. For a listener the prose is not a convenience — it is the ONLY route to every
fact in that table.** A row whose prose counterpart is missing is, for a listener, **simply absent.**

**Named candidates: line change, timeout, overtime.** ⚠️ **Dispatched as a whole-section audit, not a
lookup** — and briefed that **narrowing the promise at `:946` is a legitimate outcome**, because a
narrower true claim beats a broad false one.

### ⚠️ THREE RENDERER ARTEFACTS, DESIGNED AROUND RATHER THAN "FIXED"

An agent found these in its first SSML pass and **reworded its own new text to avoid all three**:

- `U19s` speaks as *"U nineteen s"*
- `U12 is…` at a sentence start speaks as *"under twelve is…"* (lowercase)
- `U10 is not…` likewise

⚠️ **It did NOT touch `md_to_speech`'s abbreviation table** — that is shared state and a different
owner. **Writing around a renderer artefact is the right call for a content agent; changing the
renderer mid-round is not.**

- [ ] The lowercase sentence-initial expansion is pre-existing at `uk_rules.md:299` and `:527` too.
      **Owner: whoever owns `md_to_speech`'s abbreviation table. Between waves.**

### ⚠️ MEASURED — the renderer expands `U10`/`U12`/`U18AAA` INSIDE QUOTATION MARKS. Severity: LOW, and here is why.

**Found by an agent whose first draft was corrupted by it; censused and tested by the coordinator.**
Rendered output, verified in the SSML rather than inferred:

| source text, inside quote marks | spoken |
|---|---|
| *"Bodychecking is NOT allowed in **U10** matches"* | *"…in **under ten** matches"* |
| *"No icing calls at **U12**."* | *"No icing calls at **under twelve**"* |
| *"categories of **U18AAA**…"* | *"categories of **under eighteen** AAA"* |

**It fires corpus-wide** — roughly sixty quoted strings across fifteen documents contain a `U1x`
token, the great majority being one recurring IIHF icing quotation.

⚠️⚠️ **BUT IT IS A PRONUNCIATION NORMALISATION, NOT A SUBSTANTIVE MISQUOTATION, AND THE COORDINATOR
CHECKED BEFORE WRITING THAT DOWN.** The IHUK U10 source **uses both forms itself** — `grep` returns
**22 × `U10`** and **11 × `Under 10`** in the same document, interchangeably. A listener who hears
*"under ten matches"* hears a phrasing the source itself uses for the same thing. **Meaning is
preserved exactly.**

⚠️ **AND THE AGENT'S ACCOMPANYING SPECULATION IS REFUTED.** It suggested `rules_primer.md:26`'s
`*"[a]ll Under 10 games…"*` showed *"someone hit this before and worked around it without writing it
down."* **They did not.** `ihuk_u10_roc_layout.txt` genuinely reads *"All Under 10 games must be
played on a reduced area ice surface"* — **the corpus is quoting that sentence verbatim.** There is
no undocumented workaround.

**So: a known renderer behaviour worth writing into briefs, not a corpus defect and not a repair
backlog.** ⚠️ **Do NOT sweep sixty quotations for this.**

- [ ] **Owner's judgement, low priority:** should `md_to_speech`'s abbreviation table skip expansion
      inside quotation marks? ⚠️ **Arguments both ways** — *"U-ten"* is how a hockey person says it
      aloud, so the expansion may be an improvement rather than a corruption. **Nobody has listened
      to either version.** A content agent writing AROUND the artefact (as one did today) is the
      correct behaviour meanwhile; **changing the renderer mid-round is not.**

### 🔴 OPEN — the cell/prose AGREEMENT pass, named as the highest-value work left in that document

The §10 audit tested **presence**, not **agreement**. ⚠️ **"A cell that contradicts its own prose
counterpart scores as 'covered' under this method."**

⚠️⚠️ **TWO INSTANCES HAVE NOW BEEN FOUND, BOTH BY ACCIDENT** — the 403(b)/404(b) pair and the NIHL
scope over-reach. **Two accidents are not a method.** A row-by-row cell/prose agreement pass over all
23 rows is **unrun**, and the agent that found both named it *"the highest-value thing left in this
document."*

### ⚠️ OPEN — the USA Hockey CASEBOOK is unaudited under four rules, and this corpus has been burned there three times

⚠️ **"Treat my 403(b)/404(b) verdict as confirmed in the Playing Rules and UNAUDITED in the
Casebook."** The Casebook's *Situations* under Rules **403, 404, 411 and 615** were not read, and a
Situation could carve out or extend either suspension. ⚠️ **`usah_casebook.txt:13233` contains
*"penalty (which carries a two game suspension) for their actions"* in what looks like situation
prose — context unread, and named as the obvious next pull.**

⚠️ **The corpus has been burned on exactly this three times (Rule 614(c)).**

### 🔴 OPEN — the EXTRACTION layer is the productive place for this sweep, not the caption layer

⚠️ **One defect surfaced from `content/` BY ACCIDENT during the caption sweep**, and it is the shape:
`breakouts.md:563` — `Never: Drift wide out to the boards — that is the strong-side winger's ice…` —
**no system scope at all, in the layer voiced alone.**

⚠️⚠️ **THE CORPUS KNOWS IT IS SWING-BREAKOUT-SCOPED IN FOUR OTHER PLACES**, including **prose at
`:575` in the same file** and `center.md:20`'s full correct form. ⚠️ **A grep of `breakouts.md` finds
`:575` and CLEARS THE FILE — only extracting the facts lines and reading each ALONE exposes it.**
Dispatched.

- [ ] ⚠️ **Run the hedge-absence method over the ` ```facts ` layer of all 39 documents.** The agent's
      own estimate, on this one data point: *"I would expect it to be more productive than the
      caption layer was."*

      ⚠️⚠️ **BUT DO NOT SCOPE IT TO `Never:`/`Convention:` — THAT FILTER MANUFACTURES A CLEAN RESULT.**
      Measured in `breakouts.md`: `:561` reads `Position: Inside the faceoff dots and below the hash
      marks — the strong-side circle, **not the wall**` — ⚠️ **the SAME ownership claim as the line
      repaired an hour earlier, voiced alone, under a label nobody was sweeping.**

      > *"If the next round runs the `Never:`/`Convention:` sweep, it will return clean on lines like
      > `:561` and **that cleanliness will be an artefact of the label filter**."*

      **Sweep ALL labels — `Position:`, `Action:`, `Key:`, `Goal:`, `Read:`, `Options:`, `Risk:` —
      not the two that sound prohibitive.**

⚠️ **THREE THINGS THE HEDGE-ABSENCE METHOD CANNOT FIND, and they bound the next round:**
1. ⚠️⚠️ **A coaching choice stated flat in EVERY layer of every document** — prose, facts, caption and
   `describe` all agreeing. **It has no hedge to be missing and no contradiction to trip on. It scores
   clean.** *"The one found was found because the prose had ALREADY been repaired and the caption had
   not; a defect nobody has ever repaired anywhere is invisible to this."*
2. **A hedge that is present but FALSE** — *"some teams instead give the trailer to the weak-side
   defenceman"* passes whether or not any team does that.
3. ⚠️ **The REVERSE of non-negotiable 7 — a genuine RULE softened into a coaching choice.** A hedged
   caption rates clean even where the hedge is wrong because the thing **is a law.** **That is the
   direction nobody stops on.**

### 🔴🔴 A DEFECT CLASS WITH NO CHECKER — A COUNT IN PROSE THAT A LATER INSERTION MADE WRONG

**Three instances found in ONE document, all created by an earlier wave that inserted a book and did
not update the prose around it:**

- *"**Both** CARHA rules apply in CARHA-affiliated leagues only"* — **three** were by then named
- *"How much North American rec and youth hockey runs on **those two books**"* — sitting **immediately
  after** a sentence naming **three** (*"under Hockey Canada, USA Hockey or CARHA"*)
- *"find out which **one** your league uses"*

⚠️⚠️ **EVERY ONE PASSED `check_facts`, `check_absolutes` AND `check_links` WHILE BEING WRONG.**

⚠️ **The finder's own words, and it is the point:** ***"There is no checker for 'a number in prose
that a later insertion made wrong', and I only found these because they sat in sentences I was
already editing. There are almost certainly others in this corpus, and nothing mechanical can see
them."*** ⚠️ **They were caught by reading the RENDERED SPEECH, not by any tool.**

⚠️⚠️ **THIS IS THE COST OF THIS SESSION'S OWN METHOD.** Today added books, rules and limbs to dozens
of passages. **Every insertion is a candidate for this defect, and the corpus has more of them
tonight than it had this morning.**

- [ ] **A sweep for enumeration words — *both*, *two*, *three*, *the other*, *either*, *neither*,
      *which one* — against what is actually named in the same sentence or the one before it.**
      ⚠️ **NO TOOL IS PROPOSED**: the discriminator is semantic, and a checker that flagged every
      *"both"* would be unreadable noise. **But the pattern is greppable enough to produce a
      worklist, and every hit needs reading.**

### ⚠️⚠️ FOUR CORPUS DOCUMENTS AGREEING IS NOT A SOURCE

The *"centre fly"* alternative — now propagated into a fifth place today — has been verified **only
from inside this corpus**: `breakouts.md:194`, `:601`, `center.md:20`, and a diagram caption.

⚠️ **The style guide names that as a symptom of FOLKLORE PROPAGATING, not evidence.** **No external
source has ever been opened for it.** The agent said so plainly rather than letting the fifth
citation look like corroboration.

- [ ] **Open one coaching source for the centre fly, or label it corpus-internal.**

### 📌 OPEN — an ownership note addressed to another document (non-negotiable 6)

`breakouts.md:579` is the flattest statement of the claim in the file — *"the centre's breakout spot
is the strong-side circle, **not** the strong-side boards — the boards are the winger's. **Take
breakout positioning from here.**"* ⚠️ **No system, no alternative — and it instructs `center.md`'s
readers to take their positioning from an unscoped sentence.**

⚠️ **It is also an ownership note addressed to another document, which is non-negotiable 6
territory.** Deliberately not touched: the scope arrives later in the same section (`:601-608`), so
the prose case is weaker than the facts case, **and changing it has cross-document consequences.**
**Needs an agent owning `breakouts.md` §5 prose AND `center.md` together.**

### 🔴🔴 A PROTECTION THE CORPUS TELLS A WOMAN READER IT COULD NOT FIND — and it is in her own book

**Found by the coordinator, running a check an agent handed back after its own grep hit a regex
limit and it moved on — naming it *"the highest-value thing left in this file."***

`puck_handling.md:494` says *"of the three books read for this, **USA Hockey is the one that states
it in terms**"* — the limit on an opponent pinning you along the boards. Its trailer discloses *"The
IIHF book was not read for a boards-pinning sentence **in its holding rule**."*

⚠️ **THE DISCLOSURE IS LITERALLY TRUE AND SUBSTANTIVELY MISLEADING.**

- **IIHF Rule 54 (Holding) carries nothing about the boards** — read in full,
  `iihf_rules_v1.1.txt:4593-4620`. ✅ **The disclosure's literal claim holds.**
- ⚠️⚠️ **But the IIHF states the limit in terms at `:7503-7504`, under RULE 101.1 — ILLEGAL HIT IN
  WOMEN'S HOCKEY:** *"…they are not allowed to use the boards to make contact with an opponent to
  eliminate her from the play, push her into the boards, **or pin her along the boards**."*

⚠️ **THIS IS THE CORPUS'S DOCUMENTED WORST FAILURE, IN ITS MOST CONSEQUENTIAL FORM: a reader is told
nobody but USA Hockey writes the limit, when the book governing HER OWN GAME writes it. She is left
thinking she has no rule behind her when she does.**

⚠️ **And it reaches British readers directly** — today's work established that IIHF Rule 101 material
governs British women's hockey via the In-House Rules.

⚠️ **The repair must NOT strip the disclosure** (non-negotiable 4) — it is true of Rule 54. **It must
make it PRECISE: the IIHF's limit is in Rule 101.1, not in its holding rule.** Dispatched.

⚠️⚠️ **THE METHOD LESSON, AND IT IS GENERAL: A NEGATIVE SCOPED TO ONE RULE IS NOT A NEGATIVE ABOUT
THE BOOK.** *"Not in its holding rule"* was honest, survived review, and still left the reader
wrong. **Every "the book does not say" in this corpus should be checked for the same shape.**

- [ ] **Sweep the corpus for negatives scoped to a named rule.** ⚠️ **The disclosure convention makes
      these look MORE rigorous than a bare negative, which is exactly why nobody re-reads them.**

### 🔴🔴 A MANUFACTURED QUOTATION — words the source never joined, inside quote marks

**`goaltender.md:842`.** The document read: play stops *"**only if there is no** immediate and
impending scoring opportunity"*.

**Both the NHL and the IIHF read: *"play shall **only be stopped** if there is no immediate and
impending scoring opportunity."***

⚠️⚠️ ***"only"* and *"if there is"* ARE NOT ADJACENT IN EITHER BOOK.** The quotation is contiguous on
the page and contiguous nowhere in the source. **Meaning survived; the quotation did not.**

⚠️ **INVISIBLE TO `check_quote_drift.py` BY CONSTRUCTION — a fragment it cannot LOCATE is a fragment
it cannot COMPARE.** It sat in the `notfound` bucket, indistinguishable from the twenty
page-furniture splices around it. **Repaired verbatim; that one fix moved `notfound` 46 → 45 and
`clean` 833 → 834.**

- [ ] ⚠️ **The class is corpus-wide and unswept, and it is worse than the deleted-word class already
      logged.** A deleted word leaves the survivors verbatim; **a manufactured join asserts the source
      said something it never said.** **Only reading a `notfound` fragment against its source finds
      it.**

### 🔴 OPEN — the same limit is in TWO layers and absent from TWO, and it predates today

**Layer test:** body ✓ · facts ✓ · **Common Mistakes ✗ · Key Takeaways ✗**. Common Mistakes has
*"Turning to face pressure on the wall"* and KT5 has the boards technique, ⚠️ **but neither says the
OPPONENT HAS A LIMIT — both read as "this is your error to avoid."**

⚠️ **PRE-EXISTING, and it applies to the USA HOCKEY limb too**, so today's work did not create it.
**Round-10 shape.** Dispatched back to the agent that found it, with its own warning as the binding
constraint: ⚠️ **a naked summary line risks stating a WOMEN'S-SECTION rule as a general rule**, so
the scope must survive being heard alone.

### ⚠️ A CAVEAT THE AGENT RAISED AGAINST ITS OWN REPAIR — and it is the honest kind

> *"**Whether the bare `NIHL` format row is in fact intended to cover NIHL National.** I read the
> title and Appendix A as the scope and reported the row's label verbatim rather than resolving the
> ambiguity. ⚠️ **If IHUK means that row to reach all three tiers, my 'states no format for NIHL
> National by name' is literally true but pragmatically misleading** — nothing on disk settles it,
> and no situation handbook or interpretation exists for these documents."*

⚠️ **That is the same shape as the boards-pinning disclosure repaired an hour ago: literally true,
substantively misleading.** **Recorded so the next round knows the repair has a known soft edge
rather than discovering it as a new defect.**

- [ ] ⚠️ **A trailer list omits NIHL National and the PNIHL where `:393` includes them.** **Narrower
      than the body, not falsely complete — so NOT wrong**, and the agent left it deliberately
      because *"no equivalent document was **found**"* **would be actively FALSE for the PNIHL**,
      which the NIHL RoC `:287` names as existing. **Owner's call whether to align the wording.**

### ⚠️⚠️ THE COORDINATOR'S SITE LISTS HAVE BEEN SHORT FIVE TIMES, AND GREP IS THE REASON

By one · by a fourth nobody named · by **one-and-a-half documents** (one named, eight existed across
six layers) · by four · by four again.

⚠️⚠️ **The agent that found the last four named exactly why, and it is the method finding of the
round:**

> *"My discriminators were `publish*`, `own regulation*`, `run by Ice Hockey UK`, `does not run`,
> `ask your league`, `find out whether` — **the worst defect contained none of them.** It was found
> by asking **WHAT DOCUMENT SUPPORTS EACH ITEM IN THAT LIST**, which is a **reading pass, not a
> grep.**"*

**That defect was `rules_primer.md:52`: a list of leagues followed by *"The In-House Rules say so in
terms"* — false for the Elite League, which they never name.**

- [ ] ⚠️ **The class is not lexical and will not fall to a pattern.** **Brief it as a reading pass:
      for each item in each list, WHICH DOCUMENT ON DISK SUPPORTS IT?**

### ⚠️ A TRAP I DESCRIBED AS HYPOTHETICAL WAS ALREADY LIVE IN THE COMMITTED TEXT

I warned an agent that *"the reverse"* is a named play and that a previous agent had **drafted and
caught** it. ⚠️ **It was not a draft — it was in the COMMITTED BODY at `breakouts.md:493`**, where
the sentence means *"the converse"* and a listener has already heard **reverse** as a breakout play
(`:271-281`). Repaired.

⚠️ **And the `Risk:` fact directly above it ALREADY CARRIED the corrected wording** — so **the body
was the layer left behind, the inverse of the usual failure.**

- [ ] ⚠️ ***"Up", "over", "wheel", "rim"* and *"time"* are ALL breakout call names in that document
      (`:148`) and all are ordinary English.** **Nobody has swept for them, in that file or any
      other**, and `check_facts_antecedents.py` **demonstrably cannot see this class** — it missed
      *"the reverse"* and *"Those two spots"* in the same block.

### 🔴🔴 A NEW DEFECT SHAPE THAT DEFEATS THE HEDGE-ABSENCE METHOD — "half-scoped, and it reads as scoped"

**`switching_positions.md`, found by the agent repairing something else.** The brief said the
breakout trip had **no scope anywhere**. ⚠️ **Not quite — and the truth is worse.**

The body **did** name *"holding near the blue line in a flat or spread breakout"* — ⚠️ **but as a
SECOND SENSE OF THE PHRASE "stay high", not as a scope on the trip.** The next clause then stated the
trip flat: *"And the first sense **expires**: the moment your team wins the puck, you come down the
wall…"*

⚠️⚠️ **THE HEDGE VOCABULARY IS PRESENT AND ATTACHED TO THE WRONG CLAIM.** In the agent's words:

> ***"The body was half-scoped in a way that READS AS SCOPED AND IS NOT, which is worse than bare:
> a reviewer greping for 'flat or spread' would have cleared it."***

⚠️⚠️ **THIS DEFEATS THE HEDGE-ABSENCE METHOD THE COORDINATOR HAS BEEN PROPAGATING ALL SESSION** —
*scan for assignment vocabulary, test for the absence of a hedge marker.* **A hedge marker attached
to a neighbouring claim scores the line CLEAN.**

- [ ] ⚠️ **Every use of the hedge-absence method so far is now suspect in this direction.** It was
      run over the **caption layer (408 units, reported clean)** and over **`breakouts.md`'s facts
      layer**. **Neither pass asked whether a present hedge attaches to the claim beside it.**
      **Only reading decides — and the reading question is "what does this hedge SCOPE?", not "is
      there a hedge?"**

### ⚠️ THE CLASS NO SINGLE-FILE METHOD CAN REACH — named precisely

> *"A hedge that exists only in a SIBLING document — a scope `breakouts.md` or `winger.md` carries
> that this document never mentions in any layer — **leaves no trace here to notice.** Had the body
> said nothing at all about flat/spread, my read of this file alone would have produced **no
> signal.** The only method that finds that class is a **cross-document layer test**, which I did
> not run."*

⚠️ **Every facts-layer sweep this session has been single-file.** ⚠️ **And the corpus's agreed form
now lives in FIVE documents, which means five chances for a sixth document to be silently missing
it.**

- [ ] **Design the cross-document layer test.** ⚠️ **NO TOOL PROPOSED** — the signal is an absence in
      one document of something a sibling carries, and nothing greps for a hole.

### 📌 OPEN — a caption carrying the agreed form INCOMPLETELY

`site/src/data/diagrams.json`, diagram **`winger-high-then-down-the-wall`** (owner `winger.md`,
embedded in `switching_positions.md`). ⚠️ **It IS scoped** — *"That wall position belongs to the
conventional swing breakout: a flat or spread structure asks you to hold higher toward the blue line,
so find out which one you are in"* — ⚠️ **but it names ONLY the flat/spread alternative and OMITS the
stretch / flying-winger limb** that `breakouts.md`, `winger.md` and `switching_positions.md` now all
carry.

⚠️ **CAPTION TEXT IS OFTEN A SHARED CONSTANT — `grep -ln '<literal>' site/src/diagrams/*.mjs` before
touching it.** ⚠️ **And `check_absolutes.py` reads the BUILD PRODUCT, so a caption edit is unchecked
until the coordinator runs `build-diagrams.mjs` (~6 min). BATCH this with other caption work rather
than rebuilding for one line.**

### ⭐⭐ THE BEST RESULT OF THE SESSION — the coordinator's brief would have WEAKENED A TRUE CLAIM

The brief's implied conclusion was: *if nothing on disk supports it, label it.* ⚠️⚠️ **Nothing on
disk supported the EIHL Casebook's existence — and the agent went and FETCHED IT instead.**

**It is real, public, and now read.** `https://www.eliteleague.co.uk/casebook` (HTTP 200) links
*Motorpoint EIHL Casebook 26-27 Version 1.1*, **690,498 bytes, 27 pages, 46,281 chars of real text
layer.** ⚠️ **THIS ROW SAID "8 pages" AND `sources/README.md` DERIVED "~5.8 KB/page" FROM IT. Both
wrong — `pdfinfo` reports 27.** The coordinator copied a figure out of a report without checking it
and then COMPUTED A SECOND FIGURE FROM IT. Corrected 22 September 2026. Its **Preamble is STRONGER than what the corpus claimed**: the interpretations *"will
replace or in specific cases, supersede"* the IIHF ruling.

⚠️ **AND THE CORPUS HAD SOURCED A TRUE CLAIM TO A RESTATER** — the League's own news reporting —
**when the primary was one click away and open to anyone.**

⚠️ **My site list was short by SEVEN: eleven sites, not four.** Two of the ones I missed carried
*separate* "nobody here has read it" disclosures, **both load-bearing.** Found by a **reading pass**.

**Two negatives EARNED rather than assumed, in the fetched document:** `rule27`, `restrictedarea`,
`trapezoid` → **zero** (so nothing the EIHL publishes suspends IIHF 27.7 — **answering a question the
corpus said could not be answered**); `check`/`checking` → **zero** (so it sets no body-checking age,
now a *measured* statement rather than an untested one).

⚠️ **`sources/README.md` corrected at both sites by the coordinator.**

- [ ] ⚠️ **READ THE CASEBOOK'S RULE SECTIONS — DISPATCHED 22 September 2026, three agents live.**
      Owner instruction: *"read all the unread sections."* Split disjointly: **contact and penalties**
      (41 Boarding, 42 Charging, 42 Elbowing — the book numbers two rules 42, that is its own text —
      46 Fighting, 47 Head-butting, 64 Diving/Embellishment) · **goalkeeper and game operations**
      (10 Sticks, 11 Goalkeepers Equipment, 12 Illegal Equipment, 28 Supplementary Discipline,
      30 Officials, 36 Statistics, 37 Video Review, 38 Coach's Challenge, 69 Interference on the
      Goalkeeper, 77 Timing, 84 Overtime, 86 Start of Game) · **teams, uniforms and women's hockey**
      (Preamble, 5 Teams, 6 Captains, 7 Starting Line-up, 9 Uniforms incl. the unread 9.2,
      Section 11 Women's Ice Hockey).
      ⚠️ **File ownership stated disjointly: `body_contact_and_battles.md` / `goaltender.md` /
      `uk_rules.md`, one each.** ⚠️ **The earlier read of 86.6 was TRUNCATED** — it quoted limbs (i)
      and (ii) and stopped one paragraph short of the sentence that dissolved the "tension" it
      reported. **Earlier partial reads of this document are not to be trusted; re-read whole.**
      ⚠️ **Section 11 is the one that could BREAK a standing negative:** `check`/`checking` measured
      zero flattened, and the corpus rests *"it sets no body-checking age"* on that.
- [x] ✅ **The PDF joins `sources/` — owner approved 22 September 2026, and it is installed.**
      `eihl_casebook.pdf` / `.txt` / `_layout.txt`, an entry in `scripts/fetch_sources.sh`, and
      `eihl_casebook` added to `DUAL_EXTRACT`. **Text:PDF ratio 6.70%, a healthy layer.**
      ⚠️⚠️ **RETRACTED — THIS ROW CARRIED A FALSE MEASUREMENT AND AN AGENT REFUTED IT THE SAME DAY.**
      It said Rule 86.6's warm-up provisions line-wrap in the plain extraction so that *"Any
      violations of game rules that occur during the warmup"* greps **ZERO** there. **It greps 1 in
      BOTH.** Flattened, both extractions are **36,090 chars and character-identical from offset
      1373 to the end.** ⚠️ **The coordinator wrote it as measured, in bold, and carried it into
      `scripts/fetch_sources.sh`, `sources/README.md` and this plan before anyone ran it.**
      ⚠️ **DUAL EXTRACT IS STILL RIGHT, FOR THE REAL REASON:** the files differ only at offsets
      **88–1373, the front-matter VERSION TABLE**, whose cells extract in a different order in each
      — **and that table is the evidence for the three disagreeing version stamps.**
- [ ] ⚠️ **Unresolved, and it is THREE stamps, not two** — this row said two. Page **footers**:
      `SECTION D VERSION 1.0 010826`. **Version table and link text**: `Version 1.1 080926`. **PDF
      `Title` metadata**: `[PUBLIC] EIHL Casebook 26 - 27 Version 1.0 080926` — a third variant,
      mixing 1.0 with the September date. **Do not treat any of them as authoritative without
      asking the League**, and note the consequence: **if the footers are right, a superseded
      Section D is what is on disk.**

### ✅ THE REVERSE CROSS-REFERENCE CENSUS — 108 asymmetries, and ALMOST ALL ARE CORRECT

⚠️ **THE BRIEF'S MOTIVATING EXAMPLE WAS ALREADY CLOSED — IN THE TREE ONLY.** `defender.md:5` now
carries the Forechecking Systems link, **added uncommitted today**. ⚠️ **A commit that does not stage
`defender.md` ships the corpus with the gap still open.** **Staging note, not a finding.**

⭐ **THE HEADLINE IS A NEGATIVE, AND IT IS THE OPPOSITE OF THE OUTBOUND AUDIT: ELEVEN INBOUND
POINTERS AT `forechecking_systems.md` WERE OPENED AT BOTH ENDS AND ALL ELEVEN HOLD** — including
`core_principles.md:57`, whose wording matches **including the qualification** (*"a recommendation
for your league rather than a claim about what most teams play"*).
**Census: 22 outbound / 27 inbound / 16 reciprocated / 11 unreturned — and it judges exactly ONE of
the eleven a gap**, giving a per-document reason for the other ten (entry documents route outward by
design; `switching_positions` is an aggregator whose return direction *"would put 18 links in 18
headers"*; two are one-clause asides carrying no shared claim).

#### 🟠 M1 — 30 documents embed diagrams and do not link the document that teaches the symbol key

`grep -rl '!\[\](diagram:' content/` → **32**; `grep -rl 'reading_ice_hockey_diagrams.md' content/`
→ **2**, neither a systems or positions document. ⚠️ **And the key document says in terms that
*"that pairing is this guide's own convention, not a universal one"*** — circle/triangle,
open/solid. **A reader landing from search meets a glyph with no route to the key and no warning the
convention is house-specific.** **No Astro component supplies the link** — verified, the only
`site/src/` hits are code comments and `structure.json`.
- [ ] ⚠️ **`site-reviewer` COULD MAKE THIS A NON-FINDING** if the rendered nav already gives a route.
      **Ask before dispatching content edits.** Suggested scope if real: the eight **multi-player
      system** documents, **not** the technique documents whose diagrams are single-player mechanics.
- [ ] ⚠️ **AND IF IT IS ACTED ON, A SECOND PROBLEM SURFACES:** `reading_ice_hockey_diagrams.md` has
      **no body sections at all** between `## Overview` (`:28`) and `## Common Mistakes` (`:224`) —
      **a ~200-line Overview**, unreviewed this round. **If 29 documents start routing readers there,
      its state becomes load-bearing.**

#### 🟠 M2 — a one-way pair, and the shared term is VOICED UNDEFINED

`puck_support_and_spacing.md` links `forechecking_systems.md` **three times, all load-bearing**; the
return is **zero**. ⚠️ **The clean control: of the two documents `:382` names as co-stating the
pressure-count rule, `forechecking_systems.md` links back to one and not the other.**
⚠️ **The consequence is in the layer that matters:** `forechecking_systems.md:60` is a `Goal:` line
**voiced alone** using *"released above the puck"* — **and the term is undefined anywhere in that
document** (`:60` and `:70` only, neither defining it). **It is defined at
`puck_support_and_spacing.md:259` and in the glossary — and a listener cannot follow a
cross-reference.** ⚠️ **Run `check_facts.py --near` on that block first; the census did not.**

#### 🟠 M3 — the only systems document omitting `defensive_zone_coverage.md`, and it omits it AT THE SEAM

`neutral_zone_systems.md` links **every** systems sibling except DZC; DZC links it **six times**.
⚠️ **The omission is specific, not a document that simply does not cross-link** — the same section
correctly points at `defending_the_rush.md`, `defender.md` and `forechecking_systems.md`.
**The seam: `:353-355` instructs *"Take the late man. A trailing attacker arriving unmarked into the
high slot…"* — and the high slot and who covers it are DZC's owned material.** ⚠️ **Do NOT
reciprocate the other five inbound links — those are DZC borrowing from NZS, which is the correct
one-way shape.**

#### ⭐ A clean re-verification, and two ownership spot-checks that HELD

✅ **Corpus-wide, there is NOT A SINGLE Markdown cross-reference inside any ` ```facts ` block** —
every facts line extracted from all 39 documents, tested for `](*.md`: **zero hits.**
**Seven facts lines name a sibling in prose without a link; six judged correct** because each states
its substance first. ⚠️ **The one flagged is `defending_the_rush.md:45`** — *"decide your posture on
the way in. See Body Contact and Battles"* — **where the substance is thin and the SAFETY content is
behind a pointer a listener cannot follow.** `safety-reviewer`.
**D8 spot-checks, both held:** the goal-location figures carry the **2,498-goals-with-coordinates**
filter at **all three** borrowing sites; and the tight-gap figure — ⚠️ **the one the census expected
to be wrong** — is right, with `zone_entries.md:798` explicitly saying it *"is not part of that owned
scale"* and its facts line carrying the same attribution.

#### ⚠️ The blind spot it named, and it is structural

- [ ] ⚠️⚠️ **A PAIR OF DOCUMENTS SHARING LOAD-BEARING MATERIAL WHERE *NEITHER* LINKS THE OTHER IS
      INVISIBLE TO A LINK GRAPH BY CONSTRUCTION.** *"There is no asymmetry to detect, no pointer to
      test, and no string to grep… the only thing that finds it is reading two documents side by
      side and noticing they teach the same thing."* **M2 was findable only because one side happened
      to say out loud that it shares the vocabulary.**
- [ ] ⚠️ **It judged "shared load-bearing material" from 6 documents read as prose out of 39.**
      *"A pair where the shared material sits in a section I never opened scores as 'correct
      asymmetry' in my table, and that is a guess dressed as a judgement. The table's REASONS are
      checkable; its COMPLETENESS is not."*
- [ ] ⚠️ **The inbound-pointer test was run on ONE document.** *"The base rate is unknown and my
      sample is not random — I chose the pointers that named a specific claim, which are exactly the
      ones an author was most likely to have checked."*
- [ ] **Summary layers of 38 documents unread this round** — *"round 10's criticals all lived in
      Common Mistakes and Key Takeaways."*
- [ ] **`forechecking_systems.md:954` — the corpus's ONLY forward *"Takeaway N"* pointer in spoken
      prose.** **Takeaway 8 does hold it**, so nothing is stranded for a linear reader — ⚠️ **but if
      the podcast's "if you only remember N things" segment ever takes a subset, it dangles.**
      **Naming the substance instead removes the dependency.** Flag, not a defect.

### ✅ THE TIER CEILINGS — repaired, and MY BRIEF WOULD HAVE SHIPPED A HALF-RULE

⚠️⚠️ **MY SLASHING CITATIONS WERE NHL-ONLY, AND THE CORPUS BULLET IS WRITTEN FOR "NHL AND IIHF"
JOINTLY. THE TWO BOOKS DIVERGE.** **Coordinator-verified this round:**

| | NHL | IIHF 2026/27 |
|---|---|---|
| **61.3** | Major | **MAJOR PENALTY AND GAME MISCONDUCT PENALTY** |
| **61.4** | **MATCH** | Penalty shot |
| **61.5** | Game misconduct | Awarded goal |

⚠️ **And `match penalty` occurs ZERO times in the IIHF's whole Rule 61.** **The IIHF writes no
injury-triggered mandatory major and no match penalty for slashing at all** — identical across the
2025/26, v1.1 and 2026/27 extractions.
⚠️⚠️ ***"Pasting the brief's NHL text under 'NHL and IIHF' would have shipped a HALF-RULE to every
British reader — the exact failure the brief itself warned about in the other direction."***
**The agent caught it by reading both books rather than accepting the citation list.**

#### ⭐ It removed the dependency rather than measuring it

**Three agents today have named the same untested assumption — whether a listener RETAINS a scoping
line while the next is spoken.** ⚠️ **This one designed around it: the new `center.md:90` `Rule:`
line *"names its own scope, so it does not rely on `:89` being retained, which is the census's
declared open question about `defender.md:228`."*** ***"I removed the dependency rather than
measuring it — so the question is still open for the census's other acquittals."***

#### ⭐ And it declined to fill the facts layer just because it could

**`goaltender.md`'s slashing floor lived ONLY in a Common Mistakes bullet, so the ceiling was paired
there.** ***"I did NOT manufacture a facts line stating a price no facts line stated"*** — and the
adjacent block already carries its own ceiling at 294/300.
⚠️ **It also left the MATCH penalties out of `center.md:90` deliberately:** *"including them puts it
at 298/300 and ONE EDIT FROM EVICTION. They are carried at `:638`, `:678`, `:760` and in the
trailer. **The limb the reader cannot control — mandatory on injury — is the one in the facts
layer.**"*

#### ⭐ A distinction nobody had drawn, now in the provenance paragraph

⚠️ **THE TWO MANDATORY LIMBS ARE NOT THE SAME LIMB.** **Hockey Canada's trigger is INJURY; USA
Hockey's is RECKLESS ENDANGERMENT — and USA Hockey writes no injury limb into Rule 604 at all.**
**Recorded at `center.md:786`.**

#### ⭐ Found by it, not in the brief — an antecedent across a CHUNK BOUNDARY

**The blockquote under `goaltender.md:562` opened *"all three of those books restrict the freeze
instead"*** — ⚠️ **pointing at a heading the listener heard in a DIFFERENT CHUNK (047 vs 049).**
**Fixed by substitution, not by pointing.** ⚠️ **That is a new sub-shape: an antecedent that is fine
on the page, fine in its own chunk, and dangling across the boundary between two.**
**And the `:562` heading itself took the LOW-CHURN fix** — *"describes what those books do, asserts
nothing about other books, and makes NO COUNT CLAIM about how many books lack a trapezoid"*,
explicitly avoiding the *"you checked four books and this corpus holds thirty-eight"* trap.

#### ⚠️ Open

- [ ] **A corpus-wide sweep for the shape *"is a minor"* / *"is two minutes"* with no escalation
      nearby HAS NOT BEEN RUN** — the floor/ceiling census covered dangerous acts, not this phrasing.
      ⚠️ **And the class is invisible to `check_absolutes.py` by construction.**
- [ ] ⚠️ **A declared uncertainty worth someone's time: *"whether the IIHF's ABSENCE of a slashing
      match penalty is real or an artefact of my reading Rule 61 alone — a match penalty for
      deliberate injury may live in the IIHF's general Rule 23/28 machinery. I stated only what Rule
      61 does and does not write."*** **Correctly scoped; worth closing.**
- [ ] **Pre-existing `check_quote_drift` flags left untouched and named: `center.md:650`/`:786`, and
      16 in `goaltender.md`.** ✅ **Clean-fragment counts rose 382→385 and 873→880 with FLAGGED
      COUNTS UNCHANGED — so all ten new quotations are verbatim.**

### 🔴 THE TRAILER CENSUS — 244 hard gaps, 48 of them IN THE FACTS LAYER

⭐⭐ **IT STATED ITS OWN PRECISION, WHICH IS WHAT MAKES IT USABLE:** *"I hand-checked 12 random HARD
entries: **11 confirmed, 1 a parse artefact**. Call the number-level list **~92% precise**. ⚠️ **BOOK
ATTRIBUTION IS MUCH WEAKER — my nearest-book heuristic produced visible errors (`IIHF 407(c)`,
`Hockey Canada 630(a)`, `IHUK 612` are all USA Hockey numbers). Treat the book column as a HINT; the
LINE NUMBER is the reliable part."*** **Every brief written from it carries that caveat.**
**It computed facts-layer membership from ` ```facts ` FENCE POSITIONS, not by grep**, and split
**HARD (244 — neither provision nor parent rule in the trailer)** from **SOFT (269 — parent present,
sub-clause not)**. ⚠️ **It recommends NO PASS over the SOFT set: *"the reader test is satisfied;
enumerating every sub-clause would bloat trailers already at 89 KB."*** **Five documents came back
completely clean.**

#### 🔴 Publisher-level gaps — a named document cited by number, with NO entry at all

**EIHL Casebook: 5 documents** (`special_teams.md` ×6 sites including a **verbatim block
quotation**; `shooting.md:683` ⚠️ **in a facts block, voiced alone**; `playing_without_the_puck.md`
verbatim and 🇬🇧-scoped; `switching_positions.md:307`; `getting_started.md:20` ⚠️ **the opening
safety guidance**).
⭐⭐ **AND IT FETCHED THE PDF AND VERIFIED EVERY CLAIM** — HTTP 200, 690,498 bytes, `%PDF`. **84.4's
five shooters, Rule 42's game-misconduct limb quoted verbatim, the routing clause verbatim, and the
contents list running RULE 69 → RULE 77 with no Rule 76** — *"so `special_teams.md:997`'s negative
claim is correct."* ⚠️ ***"None of the content is wrong. The defect is PURELY PROVENANCE."***
**England Ice Hockey R&R: 5 documents.** **IHUK In-House Rules: 5 documents.**

#### ⚠️⚠️ TWO NEAR-MISSES, RUNNING IN OPPOSITE DIRECTIONS — the reason a name-match audit is useless

- **FALSE NEGATIVE:** `time_and_space.md`'s trailer carries **two `englandicehockey.com` URLs — both
  the IHUK IN-HOUSE RULES PDFs.** ⚠️ ***"A different document by a different publisher, and the
  sentence at `:447` is precisely about the R&R saying something the In-House Rules do NOT. A
  name-based audit scores this covered."*** **Same trap from the other side in `special_teams.md`,
  whose only *"England Ice Hockey"* string describes the In-House amendments.**
- **FALSE POSITIVE:** `defender.md` scored as missing England R&R **because the FIRST *"Rules &
  Regulations"* string in its trailer is THE IIHF'S WEB PAGE** — reading further, the England R&R
  PDF is there properly. ⚠️ ***"Matching on name would have produced a false POSITIVE here."***

#### 🔴 The facts-layer 48 — highest cost, and three hand-verified

⚠️ ***"The listener gets a rule number and a penalty with NO ROUTE TO THE TEXT."***
- **`body_contact_and_battles.md`: `622` returns ZERO in the trailer** while the body cites it on
  **9 lines**, including a `Never:` making **622(b) a major-plus-game-misconduct and 622(c) a match
  penalty for touching a facemask.** **The trailer enumerates 620, 621, 623, 625, 627, 628, 629 — it
  SKIPS 622.** Likewise 606, 611, 403, 624.
- ⚠️ **`body_contact_and_battles.md`: `56.1` returns ZERO while the body cites it on 29 LINES** —
  *"the single largest body-to-trailer volume mismatch in the corpus."*
- **`playing_without_the_puck.md`: `608` returns ZERO** while a facts line makes **608(b) a mandatory
  major-plus-game-misconduct near the boards.**

#### ✅ URLs — four fetched, all live, NONE fabricated

**`icehockeyuk.co.uk/ihuk/` → 200, no redirect, a real page, NOT a soft-404** (the URL an agent
guessed and withdrew earlier today turns out to exist). **The Casebook PDF and page, and an EIHA
page, all 200.** **47 further trailer URLs inspected and judged legitimately outside
`fetch_sources.sh`'s scope — secondary sources.** ***"No fabricated-looking URL found."***
⚠️ **A NAMING TRAP RECORDED: the EIHA's own site title says *"**English** Ice Hockey Association"*
where the corpus writes *"**England** Ice Hockey"*.** *"Not a defect — the body rebranded — but a
verifier matching the corpus's string will get zero."*
✅ **Nothing in any fetched page attempted to instruct it. No injection observed.**

#### ✅ The faceoffs exemplar is CLOSED — do not re-dispatch

**All five gaps the brief named are repaired in the working tree**, with England Ice Hockey present
**as its own entry with the publisher named**. ⚠️ **One residual: `faceoffs.md` is the ONLY ONE OF 31
Casebook-citing documents that never names the *USA Hockey Official Rules and Casebook* as a
document or links its PDF** — the other 30 all carry the same URL.

#### ⚠️ Declared limits, and two are structural

- [ ] ⚠️ **IT TESTED PRESENCE, NOT TRUTH.** *"A provision enumerated in a trailer and MISQUOTED in
      the body scores clean here."* **~4,000 body citations untested for accuracy.**
- [ ] ⚠️ **EDITION WAS NOT TESTED.** *"The live split — the EIHL Casebook routing unamended rules to
      IIHF 2026/27 while the In-House Rules adopt 2025/26 v1.1 — would produce a CLEAN score in
      every document that enumerates the rule under either edition."*
- [ ] ⚠️ **A RULE STATED WITHOUT A PROVISION NUMBER — *"the commonest way a rulebook claim enters
      prose"* — IS INVISIBLE TO AN ANCHORED-CITATION CENSUS BY CONSTRUCTION.**
- [ ] **Findability: *"several trailers exceed 85 KB in a single italic paragraph. A provision
      enumerated at character 40,000 is technically present; whether a reader can use it is a
      different question — and the speech renderer drops the trailer entirely."***
- [ ] **`rules_primer.md`'s 58 hard gaps — the largest count in the corpus — is *"the least
      trustworthy number in this report"*, read mid-edit. Re-run both live files.**
- [ ] **Inverse check: five trailer entries the body no longer cites.** Mild; each inflates apparent
      coverage by one book.

### ✅ THE HEADING CENSUS — all 39 documents rendered, all 1,794 voiced headings read alone

⭐ **METHOD WORTH KEEPING: it did not guess which lines are headings — it matched THE RENDERER'S OWN
EMISSION SHAPE** (`<break 1000ms|700ms/><p>…</p><break 450ms/>`, `md_to_speech.py:3117-3128`,
**`BREAK_SUBSECTION` 700 ms for `###` AND `####`**), and read each document's named
`<layer>__<stem>/` subdirectory, never the shared root.

⚠️ **THE HEADLINE IS A NEGATIVE AND IT MATTERS: *"Most headings are correct and that is the headline
result."*** ~1,700 of 1,794 name a topic and assert nothing. ⭐ **And the corpus ALREADY uses the
correct device in many places** — `skating.md` *"Which way to pivot — a coaching default, not a
law"*; `defensive_zone_coverage.md` *"Most defensive-zone breakdowns are not effort problems —
coaching consensus, not a counted figure"*; `uk_rules.md` *"The trapezoid may not be enforced"*.
***"These are what the four I repaired should have looked like."***

#### Repaired

- **`uk_rules.md` — FOUR MORE In-House tariffs asserted as the British answer in the heading layer**,
  the `:132` class found four more times in the same document ⚠️ **and in two of the four the
  document's OWN BODY NAMES AN OPPOSITE BRITISH ANSWER** (video review — *"the two British answers
  are opposite ones"*; embellishment — *"⚠️ The Elite League does not"*). **Plus `:304`'s *"neither
  rule book"*, which names no pair voiced alone.** ⭐ **Five `§` pointers updated with them.**
- **`offensive_zone_play.md:97` — a superlative that SHED ITS OWNER'S QUALIFICATION.** *"The
  Highest-Value Pass Type Measured"* — ⚠️ **the body states 15.50% with its scope (volunteer-tracked,
  51,308 shots, 5v5) and says IN TERMS *"carry that qualification wherever you quote the figure"*.**
  ***"That is D8 committed in the heading of the section that defines the rule."***
- **`goaltender.md:529` — the trapezoid named as *the* rule** in a document whose next heading says
  two of four books do not have one, **and whose own facts block carries England Ice Hockey's *"not
  currently enforced"*.** **Two anchors in `getting_started.md` updated.**
- **`center.md:395` — a coaching instruction shaped as a rule NOBODY'S BOOK WRITES.** *"The crease is
  the one line you don't cross"* — ⚠️ ***"No book makes crossing the crease line an offence in
  itself; what varies is what it costs."***
- **`neutral_zone_systems.md:183` — one document's hedge missing from another's identical claim.**
  *"1-3-1 — the modern standard"* against `special_teams.md`'s *"widely described as the modern
  default"*. **Matched to the corpus's own hedged form.**

#### ⭐ The decision NOT to fix seven headings, and why it is the right one

**`risk_management.md`'s seven numbered *"Never…"* headings are absolutes voiced alone — and the
document's own `:158` says *"The other seven are coaching conventions."*** ⚠️ ***"A partial fix is
worse than none here: seven headings need ONE CONSISTENT TREATMENT, and picking two would leave the
document stating the same class of claim two ways."*** ✅ **And it identified the two that must NOT
be swept: item 7 (charging, four books by number) and item 9 (the over-the-glass minor, priced and
zoned inside the heading) are already correct.** **Dispatched as one pass.**

#### 🟠 Handed over, all now dispatched

- **`defending_the_rush.md:446` — `### **TAKE AWAY THE PASS. GIVE UP THE SHOT.**`** voiced alone, in
  capitals — ⚠️ **while `:444`, TWO LINES ABOVE, says *"There is more than one legitimate way to play
  it… which of the two you play is a decision for your team"*, and the NEXT heading is *"The
  realistic alternative."*** ⚠️ ***"Do not delete the emphasis; it is the section's spine."***
- ✅ **CLOSED 22 Sep — `body_contact_and_battles.md` *"This one rule prevents most of it."*** The
  diagnosis was right and the defect was **larger** than the row recorded: there was no citation to
  shed, because **the section's own prose twice refuses the proportion** — it scopes *Heads Up
  Hockey*'s superlative to *"the habit, not the moment"*, and it attacks USA Hockey's *"almost all"*
  on the ground that the paper credited (Tator, CJNS 11:34–41) is a **six-patient case series** that
  does not carry the quantifier. **A fabricated magnitude, non-negotiable 1, in a head-and-spine
  section.** Replaced with a **mechanism** claim drawn from the section's own first numbered reason;
  **all six inbound anchors rewritten in the same pass**, slug computed with `check_links.slugify()`
  rather than guessed. ⚠️ **The coordinator's line number was one off and the agent found it by
  content** — as briefed.
  ⚠️ **Residual, NOT closed:** the new heading advertises the instruction and **not** the IIHF 48.1
  carve-out that runs *against* the reader. *"An unadvertised exception is how omissions survive."*
- **`body_contact_and_battles.md:212` *"Angling — Legal in Every League"* on a TWO-BOOK warrant**, and
  **`faceoffs.md`'s *"under the NHL and IIHF books"* — the TOO-NARROW direction.** **Both to
  `rules-verifier`.**
- **`zone_entries.md:414` reported UNVERIFIED, deliberately** — *"I could not establish whether a
  realistic alternative exists, and I did not go to a source."*

#### ⚠️ Its own blind spot, and it is the larger half

- [ ] ⚠️⚠️ ***"It read every heading and ALMOST NO BODY. A heading that is individually
      unobjectionable but states the OPPOSITE of its own section's prose would have passed me — and
      that is the larger half of the risk."*** **No wave covers that.**
- [ ] ⚠️ **The same defect ONE LAYER DOWN is untested: *"` ```facts ` values, body list items and
      blockquote paragraphs are each voiced alone with 300 ms either side, and I read NONE of them.
      A bare In-House tariff in a `Never:` line is the same defect in a layer with more of them."***
- [ ] ⚠️ **Every rule claim in its repairs was verified against each document's OWN BODY** — *"which
      is the method CLAUDE.md warns propagates defects. **If `uk_rules.md`'s body is wrong about the
      EIHL Casebook, my headings are now confidently wrong in the same direction.**"*
- [ ] **And the audio assumption nobody has tested, now named by THREE agents independently:**
      *"whether a listener RETAINS a scoping heading while the next unit is spoken. At least five of
      my acquittals rest on it."*

### 🔴 THE EIHL REVERSE LOOKUP — nine findings, and the MIRROR-IMAGE defect was FOUND

⭐ **It corrected my own list of the Casebook's amendments:** **23 headings covering 22 distinct rule
numbers — Rule 42 appears TWICE** (Charging and Elbowing, the League's own slip, since Elbowing is
IIHF 45) — **and I omitted Rule 77.** **Confirmed ABSENT: Rules 27, 43, 48, 60, 74, 76, 81, 83**,
with flattened concept counts of **0** for `trapezoid`, `icing`, `offside`, `faceoff`, `blueline`,
`brokenstick`, `checkingfrombehind`, `checktothehead`, `highsticking`, `tagup`.

**Nine findings. The ones that reach the ice:**
- 🔴 **F4 — *"in Britain neither centre has to go first"*.** ⚠️ **The Casebook writes NO Rule 76, so
  IIHF 76.4's defending-centre-first order STILL STANDS in the Elite League.** ***"An EIHL centre
  told 'either of you may go first' is being told a rule that does not apply to him."***
- 🔴 **F5 — the neck-guard ejection arithmetic.** ⚠️ **In-House: no warning, immediate 10-minute
  misconduct, escalating. EIHL Casebook 9.12: *"after warning by the Referee, a minor penalty shall
  be imposed."*** **Both make the protector mandatory; only the penalty differs.** ***"The corpus's
  'two pieces of kit are enough to eject you' arithmetic does not run in the EIHL."***
- 🔴 **F6 — the fighting row is wrong in BOTH DIRECTIONS.** *"Assume you are gone"* **overstates**
  the first offence (Casebook 46.1 defers the automatic game misconduct to a second major) **and
  understates the rest** — instigator 2+5+10, rising to 2+5+20 late or on a second; instigator AND
  aggressor 2+5+10+20; a season ladder at the 10th and 14th fighting major.
- ⭐⭐ **F7 — THE MIRROR-IMAGE DEFECT THE CENSUS SAID IT COULD NOT SEE, FOUND.** The overtime cell
  quotes In-House Rule 84 and **self-scopes correctly, so it is not false** — ⚠️ **but under a header
  reading *"Home Countries"* it leaves a British reader believing overtime is near-absent, when the
  Casebook plays overtime in EVERY EIHL competition and sets a FIVE-shooter shootout.** **A claim
  scoped TOO NARROWLY, which reads as correct and is not.**
- **F9 — a stale disclosure that CONTRADICTED ITS OWN FILE:** `:917` and `:768` said the Casebook was
  *"unread here"* **while `:52` and `:56` of the same document QUOTE IT.** **Resolved: no Rule 27
  amendment, so IIHF 27.7 is LIVE in the Elite League.**

⭐ **And the deeper defect was acted on: *"EIH's own Rule 1.1 makes it the NGB in England and Wales
ONLY, so as written the cell over-reached NORTHERN IRELAND as well as the EIHL."***
⭐ **The Sources trailer was corrected because the agent's own work falsified it** — it had said four
entries *"are the only sections of it read for this document."*
⭐ **And it caught its own quotation failing the flatten** — an ellipsis had elided *"be conducted"*,
scoring 0. **Re-cut to score 1.**

⭐⭐ **THE LISTENER CHECK THAT DECIDED THE WHOLE JOB:** *"the big comparison table is **already
DROPPED from speech** (6 cols > 3, 23 rows > 14), so every cell edit is **site-only and cost a
listener nothing**. The listener's cover is the `:913` note and the `:279` blockquote"* — **both
rendered and read as SSML, and two dangling pointers removed that a listener would hear as
references to a table they never get.**

#### 🟠 `zone_entries.md:18` — MY UPHOLDING WAS PARTIALLY OVERTURNED, on the layer test

**The earlier agent's reasoning was upheld in half** — *"the rule text says one thing and the
Casebook another"* genuinely is a body-length point. ⚠️ **But the line's STRUCTURE is a CONTRAST:
heard alone it teaches that USA Hockey is the LENIENT book.** ⚠️⚠️ **And for the exact picture the
same sentence paints, USA Hockey Casebook Rule 608 Situation 1 says the OPPOSITE:** *"The major plus
a game misconduct penalty, or match penalty, **must be called** … In every instance where a player
forcefully checks an opponent who is standing along the boards (back toward the middle of the
ice)."*
⚠️ **AND THE TEN MINUTES IS ITSELF CONDITIONAL, WHICH NOBODY HAD FLAGGED:** USA Hockey **Rule 404's
Note** lets affiliates cut a misconduct to **6:00 or 8:00** *"(Except for Adults)"* — **so the stated
floor is not even the floor at youth level.** **A sketch was offered; `zone_entries.md` is held.**

#### 🟠 Report-only, in held files

- [ ] **`breakouts.md:962`** — *"the Elite League is understood to run it the same way, **though its
      Casebook is unread here**"*. **Now answerable: no Rule 27 amendment, so the hedge can become a
      citation.** ⚠️ ***"Per non-negotiable 4 this is a disclosure to be UPHELD-AND-UPGRADED, not
      stripped — the caveat was honest when written."***
- [ ] **`equipment.md:374`** — if it carries the IHUK *"anywhere on the ice"* broken-stick
      amendment, it needs the EIHL exception: **the Casebook amends Rule 10 only at 10.5, so IIHF
      10.3 governs the EIHL.**
- [ ] 🔴 **A MEASURED LAYER-TEST RESULT HANDED TO `facts-reviewer`: every ` ```facts ` line in
      `rules_primer.md` was tested and NOT ONE mentions the In-House Rules, IHUK, SIHA, EIH or the
      EIHL.** ***"A listener who hears only the facts layer gets no British scoping at all."***

#### ⚠️ Declared unverified — and one is load-bearing

- [ ] ⚠️ **F6's supplementary-discipline text is the Casebook's SUMMARY OF A DOCUMENT NOBODY HAS
      READ** — it points outward at *"Gamebook section: EIHL DOPS"*, not on disk. ***"A suspension
      ladder is exactly the kind of thing that lives in the document it points at."***
- [ ] **IIHF 76.4's identity across editions was CARRIED, NOT VERIFIED** — taken from
      `rules_primer.md:1179`'s own record. **Flagged as such.**
- [ ] ⚠️ **The Casebook is a LIVING DOCUMENT updated in-season by email, with three disagreeing
      version stamps.** ***"Every EIHL claim I have written could be superseded by an in-season
      bulletin nobody on this project will see."***
- [ ] ⚠️ **The inverse of its own method has NO LIST TO CHECK AGAINST:** *"a corpus sentence
      correctly scoped to the EIHL that is ALSO true of the In-House leagues and is being withheld
      from a reader who needs it."*
- [ ] ⚠️ **And the cost it flagged against itself: *"I have just added the In-House-versus-Elite-
      League distinction to EIGHT MORE PLACES in one document"* — with no test of whether a listener
      can still hold it three minutes in.**

### ⭐⭐ THE FACEOFF FINDING — the brief was half right, and the correction INVERTS the conclusion

⚠️⚠️ **I asked whether an EIHL kill is being taught to avoid a cost it does not face. IT IS NOT — IT
FACES THE IDENTICAL COST, BY A DIFFERENT RULE.** **IIHF 76.6** (`iihf_rules_2026-27.txt:6373-6394`):
*"If a Player other than the Player taking the 'face-off' moves into the face-off circle prior to
the dropping of the puck, then the offending team's player taking the face-off **shall be ejected
from the face-off circle**."*
⚠️ **The sentence's ADVICE was safe; its BASIS was wrong. The repair is a SCOPE correction, not a
reversal** — and it went into **four sites**, found *"by grepping the file for
`In-House|IHUK|British|EIHL|Elite` rather than trusting the brief's single line number."*

⚠️ **AND IT CORRECTED A PREMISE I HAD RELAYED TWICE TODAY.** I cited *"Applicable Leagues: NIHL (all
leagues), SNL, and BUIHA Varsity"* as if it scoped the whole In-House document. ⚠️ **IT DOES NOT —
it sits under SECTION 6, PHYSICAL FOULS ONLY, and the Rule 76 amendment is in SECTION 10.** The
document's own scope statement is broader. ***"The load-bearing evidence is the TOTAL ABSENCE of the
Elite League, not that header. A repair resting on the header would have been literally true and
substantively wrong — the shape the brief warned about."*** **Absence verified two ways: `grep -i
"elite\|EIHL"` exits 1, and a flattened `elitehockey|eihl|eliteleague` returns zero.**

⭐ **WHERE THE TWO ROUTES GENUINELY PART, AND IT IS A REAL TACTICAL DIFFERENCE:** the **post-icing
exception**. In-House is flat — no violation replaces the centre after an icing. **IIHF 76.4 gives
only the FIRST violation shelter**, then a warning, *"and any subsequent violation by that team will
result in a bench minor penalty for delay of game."* ⚠️ **So an EIHL kill's post-icing shelter covers
ONE violation; below the Elite League it covers all of them. The document previously taught the flat
version to everybody.**
⚠️ **Also established: two British layers on two DIFFERENT IIHF EDITIONS** — the Casebook routes
unamended rules to **2026/27**, the In-House Rules adopt **2025/26 v1.1**.

#### 🟠 OPEN from that wave — a British column missing from a comparison table

- [ ] **The In-House Rule 76 amendment has a SECOND paragraph the corpus never quotes**
      (`eiha_inhouse_2026-27.txt:421-423`): *"**Either centre can now put their stick down first for
      a face-off.**"* ⚠️ **That REVERSES IIHF 76.4's defending-Player-first order for NIHL/SNL/BUIHA
      — and NOT for the EIHL.** ⚠️ **The corpus's faceoff stick-down comparison table (NHL / USA
      Hockey 613(a) / IIHF) is MISSING A BRITISH COLUMN.**
- [ ] **Same paragraph: the In-House Rules require *"the whole of their stick blades (not toe or
      heel)"* where IIHF 76.7(IV) accepts *"at least the toe of the blade"*.** **Another live
      divergence below the Elite League.**
- [ ] ⭐ **It declined to hand this to `safety-reviewer` AND SAID SO EXPLICITLY RATHER THAN BY
      SILENCE:** *"No contact restriction, protective equipment or injury exposure is involved — the
      cost here is a lost draw and a possible bench minor."* **That is the right shape for a
      declined hand-off.**
- [ ] **The four IHUK Rules of Competition were NOT checked for a further Rule 76 departure** — *"a
      Rules of Competition is exactly where one could sit."*

### ✅ THE BRITISH BANDS — closed, and the limit was located precisely rather than argued about

⭐ **THE DECISIVE EVIDENCE WAS UNEXPECTED AND IT NAILS THE DEFECT SHAPE:** `center.md`'s **Sources
trailer ALREADY carried the four bands**, added earlier today — *"junior U10 and U12 non-checking,
U14 upward checking; NIHL Division 1 and 2 checking; WNIHL non-checking."* ⚠️⚠️ **The trailer is NOT
A SPOKEN LAYER.** **So the bands existed in `center.md` in a layer the listener never hears, under a
spoken layer that said *"ask your league."*** ***"A cross-reference is exactly what a listener cannot
follow. That is the limit, precisely located."***

**Bands verified in the `-layout` twins, primary text:** Junior RoC U10 cross-ice non-checking, **U12
full ice NON-checking, U14/U16/U19 checking**; **U10 RoC independently corroborates** (*"Bodychecking
is NOT allowed in U10 matches"*); **NIHL RoC scoped by its own title to Division 1 and 2 ONLY, not
NIHL National**; ⚠️ **WNIHL FULL ICE NON-CHECKING AT EVERY AGE — *"the row a reader is least likely
to guess."***
⭐ **It handled the column trap correctly and honestly:** *"The flat extraction DOES pair correctly
here, **by ordinal luck** — the two column blocks happen to be the same length and in the same
order. **That is not a safe general result and I did not rely on it.**"*

#### ⭐⭐ IT FOUND THE BRITISH "RULE, NOT A HEDGE" SENTENCE — the property the wave turns on

**IIHF Appendix II Glossary, *Competitive Contact*** (`iihf_rules_v1.1.txt:8089-8091`, **character-
identical in 2026/27**): *"Body contact between two or more Players who are in the immediate
vicinity of the puck and who are trying to gain possession… **reasonably allowed to push and lean
into each other** provided that possession of the puck remains the sole object of the contact."*
⚠️ **So a British non-checking game STILL LEGALLY PUTS YOU INTO THE WALL — and that is rule text, so
the sentence cannot be read as "so you don't need the posture."** **Now in both documents' bodies.**

#### 🔴 A NEW DISCLOSURE CREATED — and it is the most important thing found

⚠️⚠️ **NONE OF THE FOUR IHUK REGULATIONS PRICES A BREACH OF ITS OWN BAND.** Each searched whole and
flattened; **outside eligibility prose the only hits are the format-table cells themselves.** **The
Junior RoC's Appendix D has a §4 *Penalties* and writes NOTHING about body checking.** **And the
IIHF book has no non-check classification to write a penalty under.**
> ***"So what an official actually calls a check in a British U12 game is not published in anything
> on disk."***
**Written into both documents: *"Treat the band as the instruction and the price as unsettled."***
⚠️ **AN HONEST DISCLOSURE CREATED, NOT REMOVED. It must not be softened — and no repair may imply a
British price no document publishes.**

**Negatives attacked rather than assumed:** `eiha_inhouse_2026-27` and `eih_rr` return **0** for
`bodycheck|bodychecking|noncheck|competitivecontact|bodycontact`; **both IIHF editions return 0 for
`noncheck` — the IIHF has NO non-check classification at all, and 101.1 is a women's-hockey
PERMISSION, not an age ban**; **the EIHL Casebook, footers deleted before flattening, returns 0 for
`check|checking|bodycheck|rule604|u18|u20`** — written as *"covered by none of them — ask"*, ⚠️
**never as "the EIHL is a checking league."**
⭐ **It verified the OWNER's row while there: `body_contact_and_battles.md:74`'s British row matches
primary text EXACTLY, including the narrow *"Division 1 and 2"* scope. No correction owed.**
⭐ **And a draft failed its own voiced-alone test and was fixed BY SUBSTITUTION:** *"The British
**bands** are in IHUK's…"* — *"`bands` is a short abstract noun pointer with no antecedent a
listener has, the exact `check_facts_antecedents.py` shape."*

#### 🔴 SAFETY HAND-OFF — the floor stated as the whole price. DISPATCHED.

**Every `faceoffs.md` site prices an illegal check as *"a minor on him"* and stops.** ⚠️ **Hockey
Canada 7.3(c): a major and game misconduct *"MUST be assessed"* if the check INJURES — mandatory,
not discretionary.** **USA Hockey 604(d) for reckless endangerment, 604(e) a match penalty.**
✅ **`center.md:638` already carries it correctly and is the model.** ⚠️ **`faceoffs.md:886` is now
14/14 total and 8/8 coaching — AT `HARD_MAX` IN BOTH DIMENSIONS — and the agent deliberately did NOT
evict anything to fit it.** ✅ **`check_facts` verified clean by the coordinator: 850 blocks, 5,786
facts, all conform. The 306-char overflow is resolved.**
- [ ] ⚠️ **AND THE CLASS IS DISPATCHED AS A CORPUS-WIDE CENSUS:** *"A penalty tier stated as a floor
      with the ceiling omitted is **invisible to every checker in `scripts/`**, and I looked for it
      in two rules in two documents."* **Same family as the other two tool-blind classes found
      today — a rule quoted accurately but incompletely, and a list extracted eight of nine.**

#### 🟠 THE TRAILER AUDIT — the shape is NOT exhausted, and it has now been found FIVE TIMES IN ONE FILE

**138 (book, rule) pairs extracted from `faceoffs.md` outside the trailer and tested against it.
THREE MORE GAPS beyond the two already known:** **IIHF 27.7** (0 trailer occurrences), **IIHF 68.2**
(cited **3×** in body, 0 in trailer), and **England Ice Hockey R&R Rule 22.3** — ⚠️ ***"England Ice
Hockey appeared NOWHERE in the trailer."*** **All fixed.**
⚠️ **A NEAR-MISS WORTH KNOWING: the trailer's one *"Rules & Regulations"* hit is the IIHF's web page,
not England's — *"a near-miss that would read as coverage."***
⭐ **The four IHUK URLs were taken from `fetch_sources.sh` and `uk_rules.md`, NOT invented** — *"my
first draft contained a guessed `icehockeyuk.co.uk` URL; I removed it before it reached the file."*
- [ ] ⚠️ **`source-verifier` JOB ACROSS THE WHOLE CORPUS: *"the pattern is a rule number that enters
      via a facts block and NEVER REACHES THE TRAILER, and it has now been found five times in one
      file."*** **`center.md`'s trailer was not systematically audited.**

#### ✅ And the source-table phantom did NOT recur

⚠️ **It ran the diff command the agent file specifies and *"it printed exactly the five `_layout`
twins the file predicts and nothing else."*** ***"Reporting this because five consecutive verifiers
have filed the phantom."*** **The reconciliation written into `rules-verifier.md` this round is
holding.**

#### ⚠️ Declared unreached

- [ ] **Whether the on-disk IHUK regulations are CURRENT.** *"The Junior RoC says 'Leagues to be
      reviewed each summer'; nothing on disk records a revision number or a published date for any
      of the four, unlike the In-House Rules. **A band could have moved and this method would not
      see it.**"*
- [ ] **NIHL National, BUIHA and Scottish domestic hockey outside the junior structure get NO ROW** —
      four regulations are on disk and IHUK runs more competitions than four. **The sentences are
      scoped to the four and say so.**
- [ ] **`body_contact_and_battles.md:74`'s PWHL, CARHA and IIHF-women's rows were not checked**, and
      both books are on disk.

### ✅ THE CAPTION LAYER — 13 captions repaired, and MY CENSUS UNDER-SCOPED IT

⚠️⚠️ **MY 13-MODULES / 8-WITH-CLAUSE FIGURE WAS A LINE-BASED GREP, AND THE PHRASE IS SPLIT ACROSS
STRING-CONCATENATION BOUNDARIES.** ⚠️ **`offensive_zone_play.mjs:1022-1028` ALREADY RECORDS EXACTLY
WHY THAT UNDER-REPORTS.** **Recounted against the BUILD PRODUCT — which is what a listener and a
screen reader actually receive: 24 captions carried the posture limb, 11 carried the shoulder
clause, 13 did not.** **`skating.mjs` was a FALSE POSITIVE (comment only, no caption), and
`positions.mjs`'s `off-wing-open-to-the-ice` plus THREE more `breakouts.mjs` captions were MISSED.**
**So the repair was 13 captions across 10 modules, not 2 across 1.**
✅ **All 24 now carry it — verified post-build: *"posture-limb captions: 24, with shoulder clause:
24, missing: none."*** ⚠️ **Fourth coordinator census today measured too small. A grep over
concatenated source is not a census of the rendered text.**

#### ⭐ ASKED WHICH IT JUDGED NOT OWED, IT ANSWERED "NONE" AND SHOWED BOTH EXCLUSION ARGUMENTS FAILING

*"Rather than my inventing a discriminator to look selective."*
- *"The host prose carries it densely"* — **every host except `goaltender.md` does, 4–17 lines each.
  But a caption is VOICED ALONE, and the 11 captions that ALREADY carried the clause sit in those
  same dense documents — so the corpus had already rejected this argument ELEVEN TIMES.**
- *"The caption points at the host's override"* — **three say the override *"outranks every word of
  it"*. That asserts PRIORITY, not incompleteness — it never tells a listener there is more to
  come, and each then gives a COMPLETE-SOUNDING positive prescription.**
⚠️ **The governing fact: `body_contact_and_battles.md` §6 records *"take the wall on your shoulder"*
as folklore players and coaches *"say constantly"*. A caption that names the forearm and the hip and
stops HAS NOT MET THAT FOLKLORE.**

#### ⭐⭐ THREE CAPTIONS NEEDED RESTRUCTURING, AND IT COMMITTED THE WARNED-OF DEFECT AND CAUGHT IT

**`loose-puck-who-goes`, `cross-ice-in-your-own-end` and `entry-delay-curl` all END ON ABSOLUTES**
(*"never turn your back to the wall or duck"*), **so appending the hedge makes *"if you can help
it"* ATTACH BACKWARDS TO AN ABSOLUTE.** ⚠️ ***"My first pass on `risk_management.mjs` did exactly
that; I caught it on re-read"*** and moved the clause to KT6's mid-sentence slot.
**A fourth needed its own treatment: `the-call-and-who-can-see-it`'s comment requires the posture and
both absolutes to stay in ONE SENTENCE so no chunk boundary can split them** — one em dash became a
semicolon, **every word preserved**, and it verified through the real renderer that the whole limb
lands in a **single unbroken chunk**. **Now 2,660 chars against `MAX_BILLED_CHARS` 2,800.**

#### ⭐ The shared constant — scoped deliberately, and two sites REFUSED

New `site/src/diagrams/wall_contact_clauses.mjs` exports three constants. ⚠️ **`SHOULDER_TAIL` is
the settled form, not a new one — *"9 of the 11 existing captions already used these exact
characters."*** ⚠️ **It did NOT flatten `breakout-winger-wall` or `breakout-against-1-3-1` onto the
full constant:** their leads are load-bearing (*"Puck protection never justifies it"*; *"Body open
to the ice… forearm and hip into contact if it comes"* **for a winger posted up where contact may
not arrive**) **and were reasoned out in an earlier round.** ***"Flattening reviewed safety text to
satisfy a refactor is the wrong trade"*** — **and the module comment says so.**
⭐ **It migrated 6 already-correct sites onto the constant so they cannot drift, and PROVED it was
text-neutral: the build-product diff shows exactly the 13 intended captions changed and not one of
those 6.**

#### ⭐ `forecheck-131` — the safety numbers IMPROVED rather than traded

**My suggested fix was NOT AVAILABLE and the cap is why:** the old chord already ran at `d = 11.41
ft`, `miss = 3.28 ft` against a **2.9 ft floor** — **any extension toward the winger drops `miss`
below it.** **Moving the origin was out too: `LINE3_WALL` is one of the flat line of three, and
staggering them *"destroys the thing being taught."***
**So the endpoint moved ONTO the wall** — *"which is what 'arriving at the wall' means literally"*:

| | was | now |
|---|---|---|
| chord | **4.72 ft** (under a 5.80 ft glyph) | **7.43 ft** |
| `θ` | 16.7° | **47.7°** |
| `miss` | 3.28 ft (floor 2.9) | **7.40 ft** |

⚠️ **`d` falls 1.4 ft; the clearance that actually decides legality MORE THAN DOUBLES.** **Measured
against committed `rink.json`, with the working tree confirmed unmodified — *"the check the cap
exists to force."*** **Rendered at 360 px and looked at: the route is now clearly visible.**
- [ ] ⚠️ **BUT IT CHANGED GEOMETRY A `safety-reviewer` SET, and it says so: *"it should go back to
      `safety-reviewer`, not be taken as settled because a checker passed."***

#### 🟠 NOT FIXED, and the refusal is right — a DESIGN-LEVEL legibility limit

**`breakout-reverse` at 360 px: the whole play occupies the left ~20% of the frame, *"D1"* and
*"F1"* are illegible, and ROUTE 2 — THE REVERSE PASS, THE SUBJECT — IS OCCLUDED.**
⚠️ **This is ARITHMETIC, NOT TASTE: `half: false` is a 204-ft viewBox, so at 360 px it is 1.76
px/ft. A 5.8 ft glyph is 10 px and the 11 ft D1–F1 separation is 19 px. NO PER-DIAGRAM TWEAK
RECOVERS THAT.**
⚠️ **It stopped because the file header ARGUES FOR `half: false` EXPLICITLY** — *"the empty ice is
the thing the reader is breaking out into"* — *"flipping it would contradict a documented design
decision, change what 9 diagrams teach, and falsify captions."*
- [ ] **Owner's options: `half: true` for the OPTION diagrams while one full-sheet diagram
      establishes context, or a RENDERER-LEVEL MINIMUM LABEL SIZE in `site/scripts/lib/rink.mjs`.**
      ⚠️ ***"The header's trade-off appears never to have been tested at phone width."***

#### 🔴 GATE-BLOCKING, ROUTED

- [ ] **`check_facts.py` FAILS: `faceoffs.md:886` — a `Rule:` fact at 306 chars, over 300.**
      ⚠️ **It REPRODUCES on a second run, so it is NOT the write-race.** **Routed to the live holder
      with the substitution-not-eviction constraint and the warning not to trim the *"incidental
      board contact stays legal"* limb, which is a rule and not a hedge.**
- [ ] ⚠️ **Build-product provenance, again: its rebuild published `forecheck-131`'s caption and
      `winger-offensive-zone-patches`'s caption and describe — someone else's uncommitted work.**
      *"I am relying on your item 5 that both were verified this round — my clean run is NOT a
      review of them."* ✅ **They were, by the four-caption review.**

#### ⚠️ The cost question nobody has asked

- [ ] ***"Several of these limbs now run 300+ characters inside captions already over 1,200, and at
      least one is approaching a renderer limit. NOBODY HAS ASKED RECENTLY WHETHER THE SAFETY LIMB
      BELONGS IN EVERY CAPTION OR WHETHER THE CAPTION LAYER IS NOW CARRYING A DOCUMENT'S WORTH OF
      REPEATED INSTRUCTION."*** ⚠️ **And repetition is a CORRECTNESS risk here — 24 captions is 24
      places a future correction must reach.**

### 🔴 THE BRITISH-SCOPE CENSUS — 1,217 hits, layer-aware, and the defect class is SYSTEMIC

⭐ **IT DID NOT GREP.** It wrote a layer-aware extractor that tracks whether each line sits inside a
` ```facts ` fence or under a named summary heading, searched **sixteen wordings** (including
`domestic tier`, `your league here`, `home-countries`, `over here`, `this side of the atlantic`),
then intersected each hit with a rule/number/tariff window and split SCOPED from UNSCOPED.
**1,217 raw layer-tagged hits → 1,050 with a rule in window → 194 UNSCOPED → 79 IN A VOICED
NON-BODY LAYER. It read all 79 by hand.**

⚠️⚠️ **THE SAME DEFECT WAS FOUND FOUR MORE TIMES, ALL THE 2+10 SHAPE — an In-House tariff stated as
*the* British answer, false for the Elite League:**
- **`shooting.md:683` FIXED** — *"British shootouts are three shooters, not the IIHF's five"*.
  ⚠️ **`eihl_casebook.txt:882`: *"A penalty shootout consists of Five (5) Shooters."*** **The three
  comes from In-House Appendix 1, which never names the EIHL.** ⭐ **And it CONFIRMED the half that
  was right** — *"NIHL 1 and 2 only after the first three"* is verbatim correct (`:588-590`) **and
  was kept.**
- **`rules_primer.md` Home Countries column, video review** — *"Amended — none at all. Video review
  and a Coach's Challenge are both barred."* ⚠️ **The Casebook carries RULE 37 and RULE 38 in full.**
  ⚠️⚠️ **AND `faceoffs.md:1227` ALREADY RECORDED the In-House wording as *"not permitted in EIH or
  SIHA competition"* — scoped to those two. NOBODY JOINED IT UP.** **Dispatched.**
- **The neck-protector TARIFF in three documents** — `getting_started.md:20` (Key focus),
  `switching_positions.md:306` (facts, voiced alone), `uk_rules.md:329`/`:424`. ⚠️ **The MANDATE is
  Britain-wide and was VERIFIED FOUR WAYS and must not be hedged; only the tariff diverges** —
  In-House gives **no warning and a 10-minute misconduct**, the Casebook **warns first then a
  minor**. **Dispatched, with `equipment.md:20` named as the model, already correct.**
- **`language_and_glossary.md:283` FIXED** — the faceoff *"either centre can go first"* amendment.
  ⚠️ **The Casebook's contents list JUMPS 69 → 77, so it amends NO Rule 76 at all** and an EIHL
  centre is still on **IIHF 76.4**. ***"A player who builds the 'either goes first' habit and moves
  up a league gets a faceoff violation."***
- **`special_teams.md:995`** — the same shape on centre replacement. **Dispatched.**

#### 🔴 A NEGATIVE THE CORPUS HAD ALREADY ANSWERED ELSEWHERE — twice, in two documents

**`playing_without_the_puck.md:12`/`:28` and `language_and_glossary.md:363`/`:447` said Britain
publishes NO body-checking age** — *"In Britain neither book states an age"*, *"Britain publishes no
age at all"*. ⚠️ **FALSE. The IHUK Junior Rules of Competition publishes it in a format table: U10
and U12 non-checking, U14/U16/U19 checking.** ⚠️⚠️ **AND `body_contact_and_battles.md:104` ALREADY
STATED IT IN TERMS** — *"the British junior line falls between U12 and U14, and it comes from a
competition regulation, not from either rule book."*
⚠️ **This is exactly the class CLAUDE.md names: a negative whose question HAS BEEN ANSWERED ELSEWHERE
IN THIS REPOSITORY and nobody propagated to it.** **Both fixed, and *"ask your league"* was KEPT
because it remains correct for ADULTS — no British document publishes an adult answer.**
⚠️ **The table was read POSITIONALLY** — *"the age, length and format columns extract as three
separate blocks and must be aligned by order"* — the flat-extraction trap, handled.
⚠️ **Voiced alone, *"neither book"* also had NO ANTECEDENT** — a listener heard *"in Britain nobody
has written an age down."* **Two defects in one sentence.**

#### ✅ Six disclosures ATTACKED and UPHELD — including one that must not be hedged further

**`equipment.md:782` *"Britain specifies no mark"* — UPHELD**: six British documents searched for
`HECC|CSA|BNQ|CE-mark|EN ISO 10256|BS EN|kitemark`, **zero hits for every mark name in every file**.
**`equipment.md:826`'s EN ISO 10256 inference — UPHELD.** **The neck-protector MANDATE — UPHELD
across all tiers and must NOT be hedged.** **`winger.md:608`, `defender.md:389/765/837`,
`time_and_space.md:312` — all rest on the IIHF book every British competition runs, and the Casebook
amends none of those rules. *"Hedging them would be the defect."***
⭐ **And it corroborated the round's ORIGINAL finding independently**: Casebook Rule 64's worked
scenario reads *"Referee calls **2 minutes** for diving against Team B."*

#### ⚠️ ITS OWN THREE BLIND SPOTS, AND ALL THREE ARE ACTIONABLE

- [ ] 🔴 **THE REVERSE LOOKUP — named by it as the highest-value next job. DISPATCHED.** *"I did NOT
      open `eihl_casebook.txt` and ask, rule by rule, **which of its 22 amendments does the corpus
      never mention at all?** Rules 28, 41, 42, 47, 63.5, 69 and Section 11 Women's are all amended
      by the Elite League and I did not check whether the corpus knows."* **The shape: *"a tier
      document the corpus cites for four things and ignores for eighteen."***
- [ ] ⚠️ **THE MIRROR-IMAGE DEFECT — a claim scoped TOO NARROWLY — was never systematically hunted.**
      It found **one by accident** (*"in England and Wales it covers training"* when the Casebook
      covers practice too) *"and only because I happened to be reading the Casebook for something
      else."* ⚠️ ***"A sentence that says 'in the NIHL…' about something true across all of Britain
      would have scored SCOPED and been filed as correct. That is the direction CLAUDE.md says no
      reviewer stops on."*** **Routed into the reverse-lookup brief.**
- [ ] ⚠️ **THE WORST VERSION WILL NOT USE BRITAIN'S VOCABULARY AT ALL.** *"A sentence that says
      'under the book you play', 'your rulebook', 'the adopted book' or simply 'here' attaches a
      tier to a reader without ever naming a country, and my extractor would classify it BODY and
      drop it."* ⚠️ **And the 456 SCOPED body hits are the likeliest hiding place, because
      *"the IIHF book, which every British competition runs"* IS THE PREMISE THE CASEBOOK'S PREAMBLE
      SUPERSEDES.** *"I verified that premise for five specific rules and assumed it for the rest."*
- [ ] **Its layer classifier infers layers from Markdown headings, not from the renderer.** *"The
      only sound version of this pass renders all 39 documents through `md_to_speech` and greps the
      SSML — I did that for the four documents I edited, and for none of the other 35."*

#### ✅ The `zone_entries.md` wide-entry judgement — DECIDED YES, on scope not caution

*"The pattern's defining action is going down the wall outside a defenceman and continuing to the
goal line or below it, with the defender turning and skating at the wall alongside you. **That is a
contact-into-the-boards moment BY CONSTRUCTION**… The document's override is real but lives two
layers away… **In the extraction layer it does not reach.**"* ⭐ **The limb was written OUT OF THE
DOCUMENT'S OWN EXISTING WORDING at `:394` and `:491`, so no new technique was introduced**, and a
201-char first draft was **shortened by substitution, not by evicting a caveat.** **Flagged for
`safety-reviewer` as a contact limb.**

### ✅ THE THIRD MAN IN — APPLIED. And the "sub-gap" was REFUTED by the bracket convention.

**Both edits applied.** Common Mistakes gained a bullet **between *"Retaliating after the whistle"*
and *"Coming off the bench"*** — the briefed ordering, *don't hit back → don't skate over → don't
come off the bench* — carrying NHL 46.16, IIHF 46.14 with **both exceptions and their differing
size**, USA Hockey 615(a)'s glove-drop minor and instigator game misconduct, and the attempted-punch
Note. Key Takeaway 10 gained the gloves clause's **price**.
**Layer state for the third-man hazard: ✓✓✗✗ → ✓✓✓✓.**

#### ⭐⭐ THE SUB-GAP DOES NOT EXIST — and the reason is the funniest failure of the day

⚠️⚠️ **`ibc.txt:1454`'s *"Check over your shoulder to see where your opponent is"* IS ALREADY IN §6,
VERBATIM, AT `:808`** — inside the *"Do not turn your back"* subsection, **attributed to USA Hockey
and framed explicitly as a safety instruction**, closing *"Knowing pressure is coming is what
converts the situation into Case 1 or Case 2."*
⚠️ **IT IS NINE OF NINE, NOT EIGHT.** **The grep missed it because the corpus prints it with the
disclosed-insertion bracket — `[c]heck`, not `Check`.**
⚠️⚠️ **THAT IS THE SAME CLASS OF ERROR AS THE `fighting` / `[Ff]ight` ONE I HAD JUST FLAGGED IN MY
OWN BRIEF — IN THE SENTENCE NEXT TO IT.** **Twice in one brief, by two different parties, on the
same trap: a grep whose surface excludes the corpus's own conventions.**
⭐ **The agent declined to write the proposed Case 1 sentence: it would have been a near-verbatim
duplicate 24 lines away in the same section** — **and `:808` is arguably the BETTER host, because it
is the paragraph about the checker arriving behind you, which is the fact pattern the point is
for.**
⚠️ **So the corpus's shoulder-glance census stands corrected: it teaches the glance seven times as
an information read AND ONCE, at `:808`, as a safety instruction.** **The "zero times" line in the
row above is WRONG and this supersedes it.**

#### ⭐ The KT10 split — DECLINED, on a measurement I did not have

**KT10 is 3,555 chars after the addition. KT1 is 4,207 and KT9 is 5,609.** ⚠️ **So KT10 is BELOW the
median of this document's long takeaways, and splitting it would create a KT11 that no other
takeaway's length justifies** — **and an archive references this file's KT10 by number.**
*"Length here is a DOCUMENT-WIDE pre-existing issue, not a KT10 one, and it is not mine to fix in
one takeaway."* **Correct, and it converts my vague "ear test" row into a scoped one.**

#### ✅ The EIHL dependency, recorded precisely — and one half is NOT what I assumed

1. **Key Takeaway 10 `:1818`** — *"…they are not your book."* ⚠️ **The ONLY occurrence of that phrase
   in the file.**
2. **Common Mistakes `:1730`** (renumbered by the insert) — ⚠️ **does NOT use that wording.** It
   scopes by **naming each book explicitly** (*"Under USA Hockey the same act is a match penalty…
   Hockey Canada makes it a Gross Misconduct"*). **Functionally equivalent — but a trim that
   collapsed those to one generic sentence would break the decline.**

#### 🟠 Propagation checked — one real gap, and it is in the rules-overview document

- [ ] **`rules_primer.md` carries NO third-man limb.** Its Fighting entry `:467` and its cross-book
      table row `:932` **cover the major, the instigator and the aggressor — and stop.** ⚠️ **A
      gap, not a contradiction.** **It is the corpus's rules-overview document, and a reader who
      reads only it learns the instigator and aggressor tiers and not the one that catches a
      bystander.**
- ✅ **`risk_management.md` and `team_play_and_culture.md`: no third-man content at all — nothing to
  duplicate.** ✅ **`center.md`'s "third player" hits are NHL/IIHF 67.2 FACEOFF clauses, unrelated.**
- [ ] ⚠️ **Its own declared incompleteness, and it is the shape it just repaired:** *"I checked NHL,
      IIHF and USA Hockey. **I did not check Hockey Canada, CARHA, PWHL or the IHUK In-House Rules
      for a third-man provision**, so if any of them prices it differently my new bullet is
      correct-but-incomplete for those readers — the same shape as the defect it repairs."*

#### ⚠️ A BUILD-GATE CONDITION THAT IS THE COORDINATOR'S AND MUST BE LAST

**The agent reported `check_absolutes.py` exiting 2 —** *"12 diagram source(s) are newer than the
built diagrams.json… the voiced caption layer is uncertified… this blocks the commit gate."*
✅ **Re-checked by the coordinator: it now PASSES, and no `site/src/diagrams/*.mjs` is newer than
`site/src/data/diagrams.json` — the live caption agent rebuilt in the interval.**
⚠️⚠️ **BUT THAT STATE IS NOT FINAL AND MUST NOT BE TREATED AS THE GATE RUN.** **A caption agent is
still editing those modules.** **`node site/scripts/build-diagrams.mjs` with the ABSOLUTE binary
(~6 min) must run AFTER it finishes and BEFORE `check_absolutes.py`, or the caption layer is
uncertified by construction** — **and round 58 rewrote ten-plus captions with every clean
`check_absolutes` run covering the superseded text.**

### 🔴 THE THIRD MAN IN — absent from BOTH summary layers, and it is the ejection a reader most earns

⚠️ **Common Mistakes `:1728` and Key Takeaway 10 both cover the player on the BENCH or in the BOX.
NEITHER COVERS THE PLAYER WHO WAS ALREADY ON THE ICE and skates over to help a teammate.**
**A listener hearing only the summary layers is told *"if it kicks off while you are on the bench,
stay there"* — and told nothing about the more likely case, which is that they were already out
there.** ⚠️ **And the gloves clause has NO PRICE: KT10 says *"your gloves stay on"* and justifies it
ENTIRELY by the helmet rule, so voiced alone a listener hears decorum** — never that USA Hockey
counts **an attempted punch that misses** as a major plus a game misconduct.

**Verified verbatim:** NHL **46.16** and IIHF **46.14** — a game misconduct at the referee's
discretion for *"the first to intervene (third man in)"*, both reaching *"subsequent players who
elect to intervene"*; ⚠️ **the NHL's exception is a match penalty in the original altercation, the
IIHF's is NARROWER.** **USA Hockey 615(a)** — a **minor** merely for dropping your gloves in an
altercation you were not part of, and its **Note** counting *"a punch, or an attempted punch…
regardless as to whether contact is made"*. **Text drafted, verified and dispatched for application.**

#### ⚠️⚠️ MY OWN BRIEF CARRIED THE LABEL-VERSUS-ACT TRAP, AND THE AGENT CAUGHT IT

I relayed *"grepping 1700–1825 for `fighting` returns only the Sources trailer."* ⚠️ **Literally
true. Substantively FALSE** — case-insensitive `[Ff]ight` returns **five more lines**, and a sweep
for the **act** (`altercation|punch|gloves|scrum|skate away`) returns **nine**. **The summary layers
already carry *"Take the hit and skate away"* at `:1727` and *"your gloves stay on"* at KT10.**
⚠️ **Acting on my brief as written would have produced a DUPLICATE.** **This is the `kickshot`
failure, committed by the coordinator, in a brief warning agents about it.**

#### ⚠️ AND MY BRIEF OMITTED THE ONE LINE THAT WOULD HAVE LET IT APPLY ITS OWN WORK

⚠️ **Every other brief today carried *"`Edit` is disabled — use a Python exact-string replacement
asserting `s.count(old)==1`."* THIS ONE DID NOT.** The agent hit *"No such tool available: Edit"*
and **declined to shell-write around a deliberately disabled tool on a 1,843-line file three other
agents had edited** — which was the right call. ⚠️ **A verified Critical sat unapplied for a wave
because of a missing sentence in a brief.** **The boilerplate is not boilerplate.**

#### ⭐⭐ THE SUB-GAP — THE CORPUS QUOTES EIGHT OF A NINE-ITEM LIST

⚠️ **`ibc.txt:1454` — *"Check over your shoulder to see where your opponent is"* — is the NINTH and
last "Angling In" teaching point. §6 carries the other EIGHT and omits it.**
⚠️ **It is the ONE point in the list about the forechecker arriving BEHIND you — the `breakouts.md`
§2 fact pattern exactly.**
⚠️⚠️ **AND THE CORPUS TEACHES THE SHOULDER GLANCE SEVEN TIMES — and in EVERY ONE it is an
INFORMATION READ, never a boards-safety instruction.** `core_principles.md:113`,
`time_and_space.md:26/40`, `passing_and_receiving.md:646`, `scanning_and_anticipation.md:506`,
`center.md:85/102`, `defender.md:126`, `neutral_zone_systems.md:38`. **It exists seven times and
exists as a safety instruction ZERO times.**
⚠️ **HOW IT WAS FOUND, AND WHY NO TOOL COULD:** *"I would not have found it from the corpus alone —
the document quotes eight of nine teaching points and **reads as complete**. There is no tool that
says 'your section quotes eight items from a nine-item list.' That is the same class as **'you
checked four books and this corpus holds ten', one level down: A PARTIALLY-EXTRACTED LIST LOOKS
EXACTLY LIKE A FULLY-EXTRACTED ONE.**"*
- [ ] **`defender.md:126` carries the retrieval-route shoulder glance and frames it as a READ rather
      than as posture — the same shape, in a file nobody holds.** **Dispatch it.**

#### ✅ The `breakouts.md` pointer is FULLY HONOURED — that Critical is closed on both sides

**§6 carries the angling-in case as Case 1 of a three-case ladder** (`:761`, `:782`, `:784`), **the
parallel-skates posture as Case 2** (`:790`), **and the stick-and-gloves-on-the-glass fallback as
Case 3** (`:794`) — **and Hockey Canada 7.5 is already there, already correctly scoped to the
checker** (`:780`). **Outcome 1 of the three I named. Nothing owed.**

#### ✅ The EIHL summary limb — DECLINED, and the reasoning is better than the brief's question

*"It is one British competition, and the summary layers are the place where scope gets shed… **a Key
Takeaway sentence about EIHL supplementary discipline is a sentence a listener will carry into an
NIHL rink.**"* **The generalisable half — *"the televised version is not your book"* — is already in
both layers twice, and the EIHL WARM-UP rule, which IS actionable for an EIHL reader, already
reaches both layers correctly scoped.**
- [ ] ⚠️ **RECORD THE DEPENDENCY, BECAUSE NOTHING MECHANICAL WATCHES IT: this decline relies on
      Common Mistakes `:1729` and Key Takeaway 10 KEEPING their *"they are not your book"* clause.
      If a later wave trims either for length — and `check_layer_echo.py` will score them — the
      decline becomes wrong and the EIHL section loses its only summary reach.**
- [ ] ⚠️ **KEY TAKEAWAY 10 WAS ALREADY ~2,400 CHARACTERS BEFORE TODAY'S ADDITION.** **A pre-existing
      length defect the agent noticed and did not address.** *"Someone should listen to KT10 and
      consider whether it is two takeaways."* **Ear test.**
- [ ] **Propagation NOT done: whether `rules_primer.md`, `risk_management.md` or
      `team_play_and_culture.md` already carry a third-man limb.** **Owed before the edits land.**

### ⭐⭐ THE CHECKING-PERMISSION WAVE — the balance problem was solved BY THE RULEBOOKS, not by drafting

**Four agents in a row declined to write this sentence because the balance looked impossible: say
*"this contact may itself be an offence where you play"* without implying *"so you don't need the
posture."*** ⚠️ **IT IS NOT A DRAFTING COMPROMISE. BOTH BOOKS THAT BAN CHECKING SAY IN THE SAME
BREATH THAT ORDINARY BOARD CONTACT THERE STAYS LEGAL:**
- **USA Hockey 604(c)** penalises the check in a Competitive Contact category — **and the Note
  printed DIRECTLY BENEATH IT** reads *"Legal competitive contact… occurs when players are focused
  on gaining possession of the puck and are simply maintaining established body position. **This
  most often occurs when two players are physically engaged in front of the goal or along the
  boards.**"* ⚠️ **USA HOCKEY NAMES *THE BOARDS* AS WHERE LEGAL CONTACT MOST OFTEN HAPPENS, IN THE
  NOTE ATTACHED TO THE VERY CLAUSE THAT PENALISES THE CHECK.**
- **Hockey Canada 7.3**, immediately above 7.3(a): *"Body contact is incidental contact of two
  opposing players in pursuit of the puck… If, in the opinion of the Referee, incidental contact has
  occurred, no penalty will be assessed."*

⚠️ **So the second half is A RULE, NOT A HEDGE — which is why the new sentences cannot be read as
*"so you don't need the posture."*** **The corpus had both clauses available and had never used them
for this purpose.**

**2 of 4 sites owed, 2 not — exactly the distribution four agents predicted.** `faceoffs.md` and
`center.md` repaired in four layers each; **both additions are `Rule:` facts, which do not count
against `MAX_COACHING_FACTS`, so two blocks already at 8/8 coaching took them with NO EVICTION.**

#### ✅ The two declines, with reasons — and they are the stronger half of the report

- **`special_teams.md` NOT OWED.** ⚠️ **Every receiving-side sentence already frames the contact as
  *legal closing* rather than as a hit** — `:322` *"a killer **closing legally** puts you into it"*,
  plus Common Mistakes and KT14. ⚠️ ***"Adding 'the killer may not be allowed to hit you' would
  INTRODUCE A HIT THE DOCUMENT NEVER PROMISES"*** — the permissive error inverted.
- **`neutral_zone_systems.md` NOT OWED.** It already carries both limbs in four places (*"a **legal
  angle-off** puts you into it just as a check does"*; *"this holds in a non-checking league exactly
  as it does in a checking one"*), **and KT6 already names the open question in the summary layer**:
  *"[Body Contact and Battles] owns whether you may check at all."* ⚠️ **The text nowhere promises a
  hit — it promises being *"met"*, and immediately says by what.**

#### ⚠️ Corrections and limits the agent declared against itself

- ❌ **A relayed figure was wrong: `faceoffs.md` links `body_contact_and_battles.md` FIVE times, not
  three.** ✅ **The substantive half held — none of the five characterised the table. The new body
  paragraph now does.**
- [ ] 🔴 **ITS OWN LIMIT, AND IT IS THE READER THE CORPUS MOST OFTEN GETS WRONG:** *"I tested
      legality against **USA Hockey and Hockey Canada only**… A British U12 reader gets 'your
      classification decides' and a correct route to the owner, **but not their own row.** The two
      sentences are strongest for a North American reader and **weakest for the reader the corpus
      most often gets wrong.**" ✅ **DISPATCHED**, with the warning that the IHUK Junior RoC's
      body-checking table **reads column-by-column in the flat extraction and pairs the wrong age
      with the wrong format — use the `_layout` twin**, and that the EIHL Casebook's **zero for
      `checking` settles that league NEITHER WAY.**
- [ ] **`faceoffs.md:617` has cited Hockey Canada 7.3 in a facts block for some time with NO Hockey
      Canada entry in the Sources trailer.** Added while adding its own provenance. ⚠️ ***"A
      `source-verifier` shape of defect that may exist for other rules in that trailer; I only
      checked 604 and 7.3."*** **Trailer audit dispatched with it.**
- [ ] ⚠️ **THE HONEST SELF-DOUBT, AND IT IS THE RIGHT ONE:** *"My decisions not to edit
      `special_teams.md` and `neutral_zone_systems.md` rest on reading their existing sentences as
      sufficiently hedged. **That is a judgement about how a sentence lands, made by someone who had
      just read the whole surrounding argument — which is precisely the position the reader is not
      in.** A second pass that read only those files' facts blocks, COLD, might disagree with me,
      and I would not be able to say it was wrong."* **That cold facts-only pass is not scheduled.**

### 🔴 A CRITICAL THAT VALIDATES THE WHOLE "HEADINGS DO NOT ADVERTISE" THESIS

**`breakouts.md:111-131` §2, *"The puck-retriever D (D1)"* — the single highest-consequence moment
the document describes: a defenceman skating back to a dumped puck, facing the end boards, with a
forechecker arriving behind him.** ⚠️ **The block NAMED the hazard** (*"a stationary defenceman is
the one who gets hit"*, *"at the puck with your back turned you are guessing"*) **and gave NO
posture instruction at all** — and the body gave the angle-in instruction with **only a tactical
reason** attached, *"so a reader had no way to know the angle is a spinal-injury countermeasure
rather than a stickhandling preference."*
⚠️⚠️ **NINE OTHER BLOCKS IN THE SAME FILE ALREADY CARRIED THE LIMB.** *"The section heading 'The
puck-retriever D (D1)' advertises nothing about safety, so every pass that propagated the limb by
heading missed it."* **The wave's thesis, confirmed by the wave.**
**Repaired in four layers plus the trailer**, with Hockey Canada 7.5's preamble naming **this exact
retrieval in the rulebook's own words** — *"Where a player along the boards, with their head down
looking for the puck or 'digging the puck out,' is hit from behind and driven head-first into the
boards"* — and USA Hockey's *Angling In* and *Contact Confidence* fallback (*"putting your stick and
gloves on the glass to cushion the blow"*). ⚠️ **7.5 binds the CHECKER and is cited only to identify
the play — the agent said so in the document.**
⭐ **It caught its own drift:** a terminal period inside *"…spinal injuries."* where the source
continues *"and strictly"*. **And its first draft of a `Never:` line pointed at *"that corner"* and
*"the posture in section 2"* — substituted rather than trimmed, and came out SHORTER.**

#### ⭐ IT ALSO REFUTED THREE OF MY OWN PREMISES, AND THE REASONING IS THE VALUABLE PART

I briefed that breakouts has nine posture blocks and **no checking-permission limb**, puck_handling
**no classification flag anywhere**, zone_entries **5 posture / 0 level**. ⚠️ **Tested directly and
NOT A DEFECT IN THESE THREE:**
> *"Every contact instruction in all three documents is about **receiving** contact, or about **not
> delivering** it. None of the three teaches a reader how to hit… **A checking-classification flag
> attached to a RECEIVING instruction would be worse than absent: it would imply the posture relaxes
> where checking is not permitted**, which is the failure mode this project's history warns about."*
⚠️ **That is a sharper formulation of the second limb than anything in the briefs, and it bounds the
live second-limb wave: the limb is owed where a reader is told to HIT, not where they are told to
BE HIT.**

#### 🟠 Handed over, now dispatched or routed

- [ ] **`zone_entries.md:287-308` §3 *The wide entry*** — sends the carrier **below the goal line
      with a defender turning into him**, no posture limb; the override is **two layers away and
      under a different heading, scoped in its prose to *"the patterns above"*.** ⚠️ **Deliberately
      NOT applied: *"it needs a scope judgement I should not make alone."*** **Dispatched.**
- [ ] **`zone_entries.md:18` Key focus over-reaches by one limb** — *"ends your night in every book
      that writes it"* against **USA Hockey 608(a)'s *"A minor plus a MISCONDUCT penalty"***, which
      is ten minutes. ✅ **The body at `:223` is correct; the KEY FOCUS sheds the scoping, and Key
      focus is voiced.** ⚠️ **Errs STRICT, so not a hazard — but it is the same shape as the
      `rules_primer` Critical.** **Dispatched.**
- [ ] 🔴 **ROUTED to the live holder of `body_contact_and_battles.md`, and the agent called it *"the
      single highest-value thing to check next"*: does §6 carry the RETRIEVAL / ANGLING-IN case at
      all?** ⚠️ **`breakouts.md` now sends readers there for it. If §6 carries only the
      taking-a-check posture, the pointer is HALF honoured — a reader sent for *"how do I approach
      the wall"* finds *"how do I absorb a hit"*.**
- [ ] **`defender.md` is named by `breakouts.md` as owning *"planning the retrieval route and which
      way to pivot"* — same question, same risk, nobody holds it.**

### 🔴 A WRONG SENTENCE IN `rules_primer.md`, AND ITS FALSIFYING PREMISE WAS IN THE SAME FILE

**`:485` read 🇬🇧 *"In Britain it costs you twelve minutes, not two."*** ⚠️ **The 2+10 is the IHUK
In-House Rules, which NEVER NAME THE ELITE LEAGUE — and the Casebook SUPERSEDES the IIHF for the
EIHL, whose tier is the bare IIHF minor. TWO MINUTES, NOT TWELVE.**
⚠️⚠️ **`rules_primer.md:52` ALREADY SAID the In-House Rules do not cover the EIHL, and the
document's own Sources trailer carried the premise that falsifies the body sentence. NOBODY HAD
JOINED THEM UP.** **A listener hearing that line alone got a tariff SIX TIMES TOO HIGH.**
**Repaired, rescoped to *"Under the In-House Rules…"*, with the EIHL minor, the DOPS fine paragraph
(`[sic]` on the source's own *"feign an,"* typo — ⚠️ **the renderer voices `[sic]` as *"as printed in
the original"*, checked in the SSML**) and the *"ONLY take the player who dived"* instruction **with
its *"there will be times where you must take a player from each team"* carve-out** — *"the
permission travelling without it is exactly this corpus's most-repeated defect."*
⭐ **And the trailer was corrected in the same edit**, because it said the Casebook's
Boarding/Charging/Elbowing entries *"are the only sections read for this document"* — **which the
repair would have falsified.**
- [ ] ✅ **DISPATCHED: the corpus-wide sweep for the same over-broad British framing**, which the
      agent named *"the highest-value next job"* — ⚠️ **with its own warning that a document-level
      grep WILL NOT SETTLE IT, because the body and the facts block live in the same file. It needs
      a LAYER TEST.**
- [ ] **`risk_management.md` gained the embellishment entry framed as *the one penalty on the
      "not a trade" list that IS a decision*** — the Casebook does the arithmetic itself, Scenario 1
      against Scenario 2, *"the same play, but interpreted differently by the Referee."*
      ⭐ **Its facts line was rewritten AFTER the layer test: it said *"lets its DOPS fine you"* and
      DOPS is unexplained to a listener hearing that line alone.**
- [ ] ⚠️ **A negative ATTACKED, not trusted, and left unwritten:** `embellish` = 0 in `usah.txt`,
      `usah_casebook.txt` and `carha.txt`, **and sweeping the ACT** (`dives`, `feign`, `fake an
      injury`, `draw a penalty`) **returns nothing in the USA Hockey playing rules** — the Casebook
      reaches it only as **delay of game by faking an injury**. **Hockey Canada has it at 10.3;
      ⚠️ the PWHL RENUMBERS IT TO RULE 66** — the renumbering trap again. ✅ **`rules_primer.md:485`
      makes no cross-book claim, so nothing is wrong — but if anyone writes one, USA Hockey and
      CARHA need a proper attack before being called absent.**
- [ ] **Stick measurement: verified and DELIBERATELY NOT WRITTEN.** *"Writing 'the EIHL does not
      allow it' would introduce a topic to a document teaching people to play SOLELY IN ORDER TO
      RECORD ITS ABSENCE."* **If it belongs anywhere it is `uk_rules.md`.**

### 🟠 THE DIAGRAM-KEY ROUTE — it EXISTS, and the finding is sharper than "missing"

✅ **`SidebarNav.astro` renders the contents list into every page and `structure.json` puts the key
document SECOND in Foundation — present on 49 of 53 built pages.** **So the census's finding is NOT
a missing route.**
⚠️⚠️ **IT IS A MISSING ROUTE AT THE POINT OF NEED, AND ON A PHONE IT IS MATERIALLY WORSE.** Below
60 rem the sidebar is **plain flow at the BOTTOM of the page** — and the file's own comment records
a measured `on_ice_communication` at **100,765 px tall at 375×812**. **A phone reader who meets a
diagram in §3 cannot reach the nav without scrolling the entire document.** ⚠️ **And nothing at the
diagram points anywhere: the transform emits no link, and `grep -i legend site/public/diagrams/*.svg`
returns ZERO — there is no in-picture key.**
- [ ] **RECOMMENDED FIX IS THE COMPONENT, NOT 30 `Related:` EDITS.** `remark-corpus.mjs` already
      knows the diagram id, the manifest entry, and via its `away` computation **whether the host
      owns the diagram** — which gives a natural suppression rule. **One change fixes 30 documents,
      puts the route beside the glyphs, is identical on phone and desktop, and cannot drift.**
- [ ] ⚠️ **A CONTENT JUDGEMENT THE SITE REVIEWER FLAGGED AND WOULD NOT MAKE:** *"A link routes a
      reader who already suspects the glyphs mean something specific. **A reader who assumes
      circle-vs-triangle is universal has no reason to click.**"* **If the house-convention caveat
      matters as much as `:22` says, the component may need a PHRASE, not just an href.**
- [ ] 🔴 ⚠️ **AND THE DESTINATION IS NOT BUILT TO BE ARRIVED AT.** `reading_ice_hockey_diagrams.md`:
      **ZERO `###` sections, ZERO ` ```facts ` blocks** (coordinator-verified), a **2,904-word
      Overview**, four-item ToC, **no symbol table**. ⚠️ ***"I would not ship the routing change
      without fixing that first."***

### 🔴🔴 D15 IS UNMET — THE CHROME EXTENSION WAS UNAVAILABLE AND NOTHING WAS SEEN

⚠️ **Every `navigate` call was rejected — *"Could not verify this site's safety category"* — for
localhost, 127.0.0.1 and the site root, across six attempts.** **The build passed (exit 0, chain
reached `check:links`, 11,088 internal links resolved) and the `dist/` HTML was read — but NO PAGE
WAS RENDERED, NO PIXEL WAS SEEN, and none of the four viewport×theme cells was covered.**
⚠️ **So every claim about legibility, contrast, overflow at 375 px, the theme toggle, focus rings
and deep-link scroll positions is UNVERIFIED.** ⚠️ **In its own words: *"A page that is correct in
`dist/` can still be unreadable on screen, and that gap is exactly what I was sent to close and did
not."*** **This is a standing gate condition, not a one-off.**
- [ ] **Mechanically clean meanwhile:** facts blocks transform everywhere (`language-facts` → zero
      in `dist`), **all 49 tables wrapped** in `.table-scroll` with `tabindex`/`role`/`aria-label`,
      **no third-party subresource on any page**, and the renumbered lists and retitled §8 resolve
      with **2,247 anchored cross-links, zero failures**.
- [ ] **Minor, severity unverified:** **662 empty `<p></p>` in `dist`**, 331 of them straight after a
      diagram `<figure>` — the transform replaces the image node **inside** its paragraph instead of
      unwrapping it. ⚠️ ***"Do not 'fix' this on my word alone"*** — whether any of it is visible
      depends on margin collapsing, which could not be looked at.

### 🔴 THE FOUR-CAPTION REVIEW — a safety clause DELETED on reasoning that misreads its own owner

⚠️⚠️ **THE TWO NEW CAPTION LIMBS DROPPED *"not the point of your shoulder, and not the whole
shoulder if you can help it"*** — and their source comment **claims the wording is *"the owner's,
not composed here"*** while enumerating that clause as a deliberate omission, on the grounds §6
leaves the shoulder unresolved.
⚠️ **THAT READING IS REFUTED BY §6 ITSELF.** `body_contact_and_battles.md:789`: *"Read together,
those three give one instruction: **the tip never, on any approach**, and along your side the
shoulder is not the surface you are meeting the wall with, if you can help it. Forearm and hip."*
**The unreconciled drill sentence is unresolved about WHICH SHOULDER TURNS TOWARD THE CHECKER — not
about the tip prohibition, which is USA Hockey's own flat *"never"* about an injury mechanism.**
⭐⭐ **AND A SIBLING CAPTION ALREADY RULED THE OPPOSITE WAY, WITH REASONING:**
`scanning_and_anticipation.mjs:174-193` uses the **identical opening string**, **keeps** the clause,
and explains why — *"Told only that the TIP is ruled out, a listener infers the flat is available…
**Hedge AFTER the absolute so it cannot attach backwards.**"*
⚠️ **So two captions in two modules carry the same limb and rule OPPOSITE ways on the same clause,
and the one that dropped it is the one claiming to reproduce the owner verbatim.**

#### 🔴 COORDINATOR CENSUS — THE GAP IS CORPUS-WIDE, NOT TWO CAPTIONS

**Measured across `site/src/diagrams/*.mjs`:** **13 modules carry *"skates parallel"*; only 8
mention *"point of your shoulder"*.** ⚠️ **SEVEN carry the limb with ZERO shoulder clause** —
`playing_without_the_puck`, `on_ice_communication`, `puck_support_and_spacing`, `puck_handling`,
`skating`, `risk_management`, `zone_entries`. ⚠️ **And `breakouts.mjs` itself: 5 uses, 1 clause.**
**So a flat USA Hockey *"never"* about an injury mechanism reaches roughly HALF the places the
posture limb does.** **Dispatched with the instruction to read each site — a short caption may
legitimately carry a short limb, and this is a judgement per caption, not a sweep.**

#### 🟠 FOUR WORDINGS OF ONE SAFETY LIMB, AND NONE IS A SHARED CONSTANT

The comment claims the new limbs are *"matched to the sibling so the two do not drift apart."*
**They are not matched** — four variants in `breakouts.mjs` alone. ⚠️ **AND THE FILE ALREADY KNOWS
THE IDIOM:** `positions.mjs` imports three shared constants *precisely* so one edit cannot leave
siblings behind, and `forechecking_systems.mjs:552-557` marks its body-checking block *"VERBATIM
SHARED by four captions… Edit all four together or they drift."* ⚠️ **The posture limb is the one
that is copy-pasted.** **Promotion to one exported constant dispatched — with the warning that
`breakout-against-1-3-1`'s *"Body open to the ice"* lead is LOAD-BEARING for its picture.**

#### 🟠 Two legibility defects, computed rather than eyeballed

- **`forecheck-131`: the caption says *"Note what F2 is drawn doing"* and the route is 4.72 ft long
  inside a glyph 5.8 ft across.** ⚠️ **The whole shaft is hidden; only the terminal bar escapes,
  detached, reading at 360 px as a stray mark.** ⚠️ **The cap that caused it is CORRECT and
  well-motivated — a safety fix whose legibility consequence nobody noticed.**
- **`breakout-reverse` at 360 px: D1's triangle, its label, the route badge, the arrowhead and F1
  pile into ~40×20 px; *"D1"* and *"F1"* illegible — and route 2, THE REVERSE PASS ITSELF, is
  substantially occluded even at full size.** ⚠️ **Both captions NAME those labels.**
- **`positions.mjs:680` draws the puck INSIDE the RW glyph, over its label** — ⚠️ **the identical
  defect `breakouts.mjs:391-395` records itself fixing.**

#### ✅ Verified clean — recorded so it is not re-litigated

**The coordinator's `forecheck-131` caption edit is CORRECT and its reasoning checks out**; the
added clause **does not** disagree with the picture — *"the caption was stating flatly what its own
section hedges; it no longer does."* **Unit 4's four citations verified verbatim. The high-slot
polygon is 210 sq ft EXACTLY, matching its owner.**
⭐ **The omission of the cervical-flexion and walking-speed claims is VERIFIED CORRECT against §6**
(`:767` — *"stated of the head-down collision rather than of the turn"*). ⚠️ **That is the OPPOSITE
verdict to the shoulder finding: one stated omission is right and the other is not, in the same
comment.**
✅ **THE `describe`-LAYER WORRY IS ANSWERED AND DOES NOT APPLY:** `build-diagrams.mjs:395-411` shows
`longDesc()` emits **`${describe} ${caption}`** as the SVG's single `<desc>` — **a screen reader
gets the limb.** **One open row closed.**
✅ **`check_zones`'s *"the middle"* finding is CLOSABLE, with a test that separates it from the
high-slot defect:** the owner defines *"Middle = the central lane"* (`rink_map.md:493`), and **all
four polygons share an IDENTICAL lateral extent — dot line to dot line, 44 ft** — every difference
being depth of ice. ⚠️ **The reviewer flagged two cautions: two of the four are NOT mirror images,
so the tool's "mirroring" explanation is not what makes them consistent — the LANE argument is; and
it checked the polygons, not whether each caption uses *"the middle"* in a sense the lane definition
covers.**

#### ⚠️ Open, and one is an ear test nobody can run from text

- [ ] **The `breakout-rim` caption is voiced into `goaltender.md` as ONE unbroken utterance inside a
      2,431-char chunk, with the limb arriving after 178 words (~70 s at 150 wpm) of rim tactics.**
      ⚠️ **The siblings are the same or worse (`breakout-against-1-3-1`: 203 words).** ⚠️ **This is
      the PRE-EXISTING HOUSE LENGTH, not something the two edits created — they added ~45 words to a
      caption already at ~180.** **Whether 70 seconds is past the point a listener has gone is the
      ear test, and it belongs in `PODCAST_MANUAL_STEPS.md`.**
- [ ] **Second person shifts mid-caption in `goaltender.md`:** the prose addresses the goaltender
      (*"You are telling them the route is clear"*), then the limb says *"YOUR back, YOUR skates"* —
      **addressing the defenceman.** ⚠️ **Voiced alone, a goaltender hears an instruction for
      somebody else.**
- [ ] **`goaltender.md` hosts `breakout-reverse` then `breakout-rim` back to back; `defender.md`
      hosts them in the other order.** **A listener hears the same 45-word limb TWICE.** ⚠️ **A
      repeated safety limb is explicitly legitimate under `check_caption_echo`'s docstring and it
      scores below threshold — an observation for the owner, not a defect call.**
- [ ] **`breakout-rim`'s caption calls the rim *"a hard shot"* while the route is `kind: 'pass'`** —
      the style guide reserves the double line for *Shoot* and the dashed for *Pass*. **Hockey
      vernacular is on the caption's side; the notation is not.** Pre-existing.
- [ ] **The style guide's movement table does not define a symbol the corpus draws.**
      `forecheck-131` uses `kind: 'crossovers'` correctly — *"lateral crossovers"* **is** a real row
      on the HEO sheet and the guide's own 17-row enumeration names it at `content_style_guide.md:2708`
      — ⚠️ **but the guide's *Movement symbols* table at `:2719-2732` lists only *"Backward
      crossover"*.** **The guide's own rule is *"if a diagram uses a symbol, the key must define
      it."* The key does; the SPEC does not.** `project/` was outside the reviewer's write scope.
- [ ] ⚠️ **Whether `goaltender.md` should host `breakout-rim` AT ALL** — *"the caption is 178 words
      about a DEFENCEMAN's decision, voiced into a goaltender document."* **The host prose justifies
      it explicitly, so the reviewer did not call it — *"the strongest cost/benefit question in
      these four, and it belongs to whoever owns that section."***

### 🔴🔴 A SAFETY CRITICAL IN TEXT WRITTEN TODAY — and the fresh reviewer earned its dispatch

⚠️⚠️ **THE NEW WARM-UP SECTION TELLS BRITISH READERS THAT NOTHING IS CALLED ON THE NIGHT UNDER
THEIR BOOK. A WARM-UP FIGHT IS A MAJOR PLUS AN AUTOMATIC GAME MISCONDUCT.**

**COORDINATOR-CONFIRMED VERBATIM, `iihf_rules_2026-27.txt:4222-4226`, Rule 46.8:** *"Players involved
in fighting other than during the periods of the game **shall be assessed a major penalty for
fighting and an automatic game misconduct**."* **Renumbered 46.9 in 2025/26 v1.1.**
⚠️ **And the IIHF's OWN warm-up rule signposts it** — 86.6 (`:7397-7401`) ends **➔ Rule 46.9 –
Fighting Prior the Drop of the Puck.**
⚠️⚠️ **A TRAP FOUND WHILE VERIFYING: the 2026/27 book's cross-reference points at "Rule 46.9" while
the rule IN THAT EDITION is numbered 46.8.** **The book disagrees with itself — record it, do not
resolve it**, as this repository does for USA Hockey's Rule 610 lettering.

**WHY 5.6 WAS MISREAD:** its *"No penalties are to be assessed"* sits in a paragraph about warm-up
**equipment, roster eligibility and timing** (`:1016-1023`). ⚠️ **It is the enforcement clause for
THAT rule's own violations, not a general amnesty for warm-up conduct.**
⚠️⚠️ **AND THE DOCUMENT HAD ALREADY READ 46.8 — it cites it twice, but only for the
unwilling-combatant note. IT QUOTED THE RULE AND MISSED ITS OPERATIVE SENTENCE.**

⚠️ **FULLY PROPAGATED ACROSS FIVE LAYERS, SO NO LAYER CORRECTS ANOTHER** — two facts lines, two body
sites, Common Mistakes and Key Takeaway 1. **Scope: every British reader outside the EIHL.** ✅ **USA
Hockey, Hockey Canada and CARHA are all correctly stated, and the EIHL is correctly superseded.**
✅ **COORDINATOR CHECKED THE SIBLING: `uk_rules.md` does NOT carry it. Confined to one file.**
**Dispatched for repair.**

⚠️⚠️ **THIS IS WHY A REPAIR MAY NOT SELF-CERTIFY.** The author ran every gate, rendered the file and
read the SSML — **and wrote a permissive safety error into five layers.** **The fresh reviewer found
it in one pass.**

#### 🟠 Three Majors the reviewer found alongside it

- [ ] **The EIHL fighting material is presented as a ONE-WAY relaxation.** ⚠️ **The reviewer grepped
      the de-tagged render: the document contains NO occurrence of *"Department of Player Safety"*,
      *"DOPS"*, or the EIHL's **46.2**.** **`eihl_casebook.txt:538-544`** imposes a game misconduct
      for **a fighting major after the original altercation has started**, all reviewed by DOPS; and
      **`:647-659`** runs a **season ladder** — 10th fighting major of the regular season brings an
      automatic one-game suspension, the 14th a two-game suspension for each additional.
      ⚠️ **AND IT BEARS ON THE EXISTING HEDGE:** the Note at `:658-659` is **a season tally kept by
      the same book**. ⚠️ **DO NOT REMOVE THE HEDGE — it should say the Casebook keeps a season
      count elsewhere and does not tie 46.1's *"2nd Major Penalty"* to it.** **Block is at 14/14;
      the material is now long enough to be its own `###`. SPLIT, do not evict.**
- [ ] **A British reader told "four minutes" is exposed to an EJECTION.** ⚠️ **IIHF 47.2 writes the
      double minor only for an *ATTEMPT*.** **The EIHL's second example is a COMPLETED forceful
      helmet-to-helmet push** — for which the tier is **47.3, a major plus an automatic game
      misconduct.** ✅ **Hockey Canada genuinely IS the same tier** (7.1(a)(iii) covers *"head-butts
      OR attempts"*). ✅ **The facts block states 47.2 and 47.3 correctly — the BODY is the defective
      layer.**
- [ ] **The version disclosure has not travelled.** Every page footer reads `SECTION D VERSION 1.0
      010826` while the link says 1.1 080926, **and `sources/README.md` already records three
      disagreeing stamps.** **Non-negotiable 4: the disclosure exists in the repository and has not
      reached the document depending on it.**

#### Minors, and one the reviewer argued DOWN rather than up

- [ ] **`:1658` *"keep your feet"* bare is AMBIGUOUS** — the document elsewhere uses *"keep your feet
      **moving**"* (⚠️ **the OPPOSITE instruction in a scrum**), *"on the ice"*, *"under you"* and
      *"never leave your feet"*. ⭐ **The reviewer explicitly declined to call this a
      non-negotiable 7 breach** — *"it names no rule, prescribes only omissions, and every limb runs
      in the conservative direction. **The ambiguity is the defect, not the sourcing.**"*
      **That is the author's self-flagged sentence, judged on the evidence rather than on the flag.**
- [ ] **`:1654` — a terminal period where USA Hockey 619(b) continues.** ⚠️ **`check_quote_drift`
      matched the BOARDING twin at 603(c) — the attribution blindness in action, exactly as briefed.**
- [ ] **`:777` — Hockey Canada 7.5 quoted with a period where the source has a COLON and continues.**
      ✅ **The reading built on it — that the four situations are not exhaustive — is CORRECT.**

#### ✅ Upheld, and one is a first

⭐ **THE HEAD-BUTTING INVERSION IS CORRECT AND REACHES ALL FOUR LAYERS** — *"this is the four-layer
shape the review history says usually fails, and here it did not."* **The five antecedent repairs
all took, verified voiced alone.** **The author's own worry about *"No penalties are to be assessed"*
inverting was UNFOUNDED as written** — the facts line carries *"and its answer is not a licence"*
before it. *(It was wrong for an entirely different reason.)*

#### ⚠️ How the Critical was found, and it is luck rather than method

*"The Critical turned on a rule in **Section 06** of a book while the document was reasoning from
**Section 10** of the same book — I found it only because IIHF 86.6 happened to print a
cross-reference, and I only opened 86.6 because I was checking an unrelated 'centre red line'
claim. **A rule with no cross-reference pointing at it would have passed me**, and the warm-up
section's own headings advertise nothing about fighting."*
- [ ] ⚠️ **THAT IS THE THIRD REVIEWER TODAY TO NAME THE SAME STRUCTURAL WEAKNESS: a hazard whose
      section heading does not advertise it.** **No tool covers it and no wave has been designed
      for it.**

### ✅ THE CAPTION LAYER — 2 repaired, and the SHOULDER QUESTION IS DEFINITIVELY CLOSED

#### ✅✅ §6 ALREADY SETTLED THE SHOULDER QUESTION IN TERMS, AND THE AGENT READ IT RATHER THAN TAKING EITHER BRIEF

**`body_contact_and_battles.md:789`:** the *"turn the far shoulder toward the boards"* sentence is a
**drill teaching point**, *"far"* is **never defined**, it appears **once**, and the document states
in its own words: *"[w]hat the drill sentence asks for is recorded here and not resolved, because
the manual does not settle it. **The instruction this document gives you is the one above: skates
parallel, forearm and hip.**"*
⚠️ **So the corpus had ALREADY recorded-not-resolved it, exactly as the convention requires — and
three parties today (an agent, the coordinator twice) treated it as an open question.**
**ELEVENTH TIME the answer was already written down in this repository.**
⭐ **The agent propagated NO shoulder clause into either caption, and recorded why in the source
comments: *"a caption cannot hedge an unresolved question, and §6's own instruction is the unhedged
half."***

⚠️ **TWO MORE COORDINATOR FIGURES WRONG:** I said **15** modules carry the limb vocabulary — it is
**17**; I said `--rule-like` reports **74** pairs — it is **76**. **Neither changed a judgement, and
the agent reported both anyway, *"because a figure copied out of its owner goes stale."***

#### The two repairs, and the host census that decided them

⭐ **THE DECISIVE HALF WAS THE HOST CENSUS, NOT THE CAPTION CENSUS.** `goaltender.md` carries **0**
of the limb vocabulary (it has *"chin off your chest"* 3× and nothing else) **and hosts
`breakout-rim`, `breakout-reverse`, `breakout-d-to-d`, `net-front-walk-out-direction` and
`the-trapezoid`.** **A caption spoken into a host with none of the limb is the sole carrier for that
listener.** `breakout-rim` and `breakout-reverse` repaired, **wording matched word-for-word to a
sibling limb in the same file so the two cannot drift**, and **shared-constant check run first** —
`grep -ln` returned `breakouts.mjs` only.
⭐ **Nine caption families judged NOT owed, with reasons** — the arriving-player captions *"already
carry the CORRECT limb for him"* and adding the receiving limb *"would address the wrong person"*;
the four dump captions have hosts at 56 and 15 limb hits and *"a limb would double them and become
exactly the sixth restatement"*.
⭐ **The build reported `202 reused, 2 rendered` — confirming the build product covers the new text
and not superseded text.** The absolute node binary was used before `check_absolutes.py`.

#### 🔴 PROCESS MAJOR — THE REBUILD PUBLISHED TWO CAPTIONS NOBODY HAD READ, AND ONE IS THE COORDINATOR'S

⚠️⚠️ **`site/src/data/diagrams.json` IS SHARED STATE.** Two modules carried uncommitted edits when
the agent built, so **four** caption/describe units changed in the build product and **only two were
its own.** Its own words: ***"This is round 59's pattern exactly: mechanically checked, reviewed by
nobody. Do not let my clean run stand as review of those two."***
- **`forecheck-131` IS THE COORDINATOR'S OWN M5 REPAIR.** ⚠️ **I wrote it, I rebuilt it, and I let a
  clean `check_absolutes` run stand over it. That is the self-certification CLAUDE.md forbids the
  coordinator by name.**
- **`winger-offensive-zone-patches`** from an earlier wave, replacing a flat high-slot **ownership**
  claim with *"no position owns that layer, so find out who fills it in yours"*, citing
  `offensive_zone_play.md:406`/`:243`/`:754` and `winger.md:430`.
- [ ] ✅ **DISPATCHED: a fresh `diagram-reviewer` on ALL FOUR units**, including the instruction that
      **a comment citing evidence is still the author's assertion**, and that a caption naming an
      alternative **the drawing does not show** may now disagree with its own image.

#### 🟠 Open from the caption wave

- [ ] 🔴 **`goalie-fifty-fifty-puck` (sole host `goaltender.md`) sends a goaltender into the corner
      to race a forechecker and ends *"if you do commit, commit."*** ⚠️ **Neither the caption nor
      `goaltender.md` gives ANY contact guidance for a goalie who arrives there.** ⭐ **The agent
      DELIBERATELY DID NOT REPAIR IT: *"the corpus has no sourced goaltender board-contact posture
      anywhere, and the skater limb is written for skaters in §6. Writing one into a caption would
      author a claim the corpus does not make."*** **A CONTENT GAP NEEDING A SOURCE, not a caption
      edit.** **That restraint is the correct call and the row should not be closed by inventing
      one.**
- [ ] ⚠️ **THE `describe` LAYER WAS NOT REVIEWED AT ALL.** *"`describe` is what a screen reader gets
      for the picture itself, and a wall play described without the limb is the same defect one
      layer down."* **408 caption/describe units exist; only captions were censused.**
- [ ] **Host coverage was judged by VOCABULARY COUNT, not by reading each host's prose in place** —
      *"a host could carry the limb in a section a reader of that marker never reaches."* **A layer
      test per host would decide; none was run.**
- [ ] **`check_zones` reports `'the middle'` at 2200 / 1936 / 1276 sq ft across four diagrams with
      centres 40–68 ft apart.** Pre-existing, untouched — ⚠️ *"it is not obviously all mirroring."*
      **The high-slot precedent: a band once drawn at 3.14× its owner's definition passed every
      gate.** Handed to the review agent.
- [ ] **Notation asymmetry:** `breakout-reverse` discloses that a banked puck is drawn as a pass
      *"because the drill notation has no symbol for a banked puck"*; **`breakout-rim` does not.**
      **Left alone — whether the reader needs it twice is the owner's judgement.**

### 🔴 A NEW CRITICAL IN `special_teams.md` — the DELIVERING side was absent from the whole file

⚠️⚠️ **THE CENSUS WARNING WAS JUSTIFIED AND COST MORE THAN A MISCOUNT.** Both zero counts were
**right, and right for the wrong reason.** Re-run properly, the surface was: `neutral_zone_systems`
**45 facts-line hits + 105 prose**; `special_teams` **35 + 83** — against **2 and 1 sites named in
the brief.** ⚠️ **And re-running it found TWO MORE CRITICAL SITES, both the `faceoffs.md` shape: a
sentence naming the hazard verbatim, then silence.**

**`special_teams.md` had NO checking-from-behind, boarding or contact-legality sentence ANYWHERE**,
while instructing a killer at exactly that picture **twice**: `:618` *"Pressure only if you can
actually get there, the carrier is looking down **or facing the boards**"*, and `:798` *"Chase only
when the puck can actually be won — a bobbled reception, **a player with their back turned**, **a
puck on the boards** with no support."* **Absent from all four layers. Fixed in all four.**
⭐ **Two `Rule:` lines fitted into a block already at 7/8 — because a `Rule:` line does not count
against `MAX_COACHING_FACTS`.**

#### ⚠️⚠️ THE AGENT MADE THE "YOU CHECKED FOUR BOOKS" ERROR ITSELF, CAUGHT IT, AND THE FIX IS SAFER

Its first draft wrote *"a major plus a game misconduct **with no minor available in any book**"*
**across five layers** — ⚠️ **false in THREE of the five, and `check_absolutes`, `check_facts`,
`check_links` and `check_quote_drift` ALL PASSED IT.**
⭐ **And the correction is SAFER than the error, which is why it was worth chasing:** in the exact
picture — from behind, **into the boards** — **the three books that write a minor are the HARSHEST
of the five.** Hockey Canada 7.5(c) and CARHA 53(b) each reach a **match penalty** where the player
*"is unable to protect or defend themselves"*; USA Hockey 608(c) reaches one for a *"vulnerable or
defenseless"* opponent. **All five layers now read *"no book prices it at a BARE minor"*.**
⭐ **It used the settled framing from `project/reviews/iihf_43_discretion_refuted_2026-09-22.md`
rather than re-litigating IIHF 43.3.**

#### ✅ COORDINATOR VERIFIED THE FIVE-BOOK TABLE — the agent asked for it, and it holds 5/5

*"A second reviewer should re-verify the five-book table against the primary text rather than
against my report."* **Done. All five located verbatim:**
**NHL 43.2** (`nhl_rules.txt:5473`) *"There is no provision for a minor penalty for checking…"* ·
**IIHF 43.2** (`iihf_rules_2026-27.txt:4053`) *"there is no option to award a minor penalty"* ·
**USA Hockey 608(a)** (`usah.txt:3721`) *"A minor plus a misconduct penalty, or a major plus a game
misconduct penalty"* ⚠️ **(the naive grep FAILED — the phrase breaks across a line at *"checking
from / behind"*; found by reading the rule body)** · **Hockey Canada 7.5(a)** (`hc.txt:6164`) ·
**CARHA 53(a)** (`carha.txt:2572`).

#### ⭐ AND THE COORDINATOR CHECKED THE SIXTH BOOK — the error one level up, and the claim SURVIVES

⚠️ **The agent's own warning was *"your sentence names two books and `ls sources/*.txt` holds
thirty-nine"* — so the table's own "five" was tested.** **`pwhl_rules.txt` carries Rule 43 Checking
from Behind**, and **43.2 (`:4513`) reads *"There is no provision for a minor penalty for checking
from behind."*** ✅ **The PWHL joins the NHL and IIHF in the no-minor group, so the corpus's
*"no book prices it at a bare minor"* HOLDS against a sixth book nobody had checked.** **Recorded so
the next agent does not re-derive it.**

#### Partials and antecedents — censused deliberately, and the judgement was the valuable part

**Three partials, all in `special_teams.md`, none a degraded safety limb:** `:311` *"Head up, feet
moving toward the net"* is a **vision-and-tempo cue sharing three words with one**; `:376` *"body on
the wall, stick low and flat"* **read as posture points at the WRONG thing**; and the two new
criticals. **`neutral_zone_systems.md` had NO partials** — its head-down and charging limbs are each
complete across four or five layers.
⭐ **Four lead-pointer candidates scanned; TWO were real and TWO were not.** `:329` *"**This** is
where most amateur power plays die"* **restates its own referent** (the disclosure convention) and
`:742` *"**Their** defencemen's feet stopped"* **addresses the carrier** — ⚠️ ***"a sweep would have
'fixed' them."*** ⚠️ **And `check_facts_antecedents.py` was clean before AND after — IT DID NOT SEE
EITHER REAL ONE.**

- [ ] ⚠️ **The vocabulary still does not reach everything, and the agent named the miss:**
      `special_teams.md:412` says ***"jump a bobble"*** — **a block that sends a reader at a
      defenceless opponent using none of the seventeen search terms.** **Unexamined.**

### ✅ `center.md` — the Critical repaired, and the SHOULDER QUESTION IS SETTLED IN THE SOURCE

⭐⭐ **THE CENSUS NEGATIVE WAS RE-RUN AGAINST THE PRE-EDIT FILE AND HELD — AND GOT STRONGER.**
The agent ran the full vocabulary against `git show HEAD:content/positions/center.md`, **facts lines
separated from prose**. ⚠️ **True search surface: ~110 lines, not one — the census understated it by
TWO ORDERS OF MAGNITUDE**, the same undercount species measured in `faceoffs.md`. **But the finding
was unchanged:** `back to the wall`, `duck`, `chin off your chest`, `forearm`, `parallel to the
boards`, `shoulder tip` — **zero in every layer.** The only other near-hits are the **delivering**
side (*"never finish a backcheck into somebody's back"*), **the opposite duty.**
⭐ **And the "describes the geometry and stops" shape was present IN THE FACTS LAYER** — `:82`
*"reverse it back against the flow **to a defenceman arriving behind you**"*, `:83` *"a rim beats
pressure that is **sealing you in**"*, `:94` *"with a forechecker already on you"*. **Three
sentences naming a forechecker arriving behind the reader, and nothing about surviving it.**

⭐ **Two blocks at 7/8 and 6/8 needed three slots. It merged `Options:`+`Read:` and
`Action:`+`Priority:` — buying three, trading no caveat.** Both now 8/8.
⭐ **It DECLINED a sixth layer** (Check yourself), citing `check_layer_echo.py` — center scores
**20.1 / 18.2 / 14.1**, *below* `defender.md` (23.7 / 23.3 / 19.6). *"A sixth restatement buys
nothing and is one more place a correction can fail to reach."*
⭐ **AND IT CAUGHT ITSELF LEAVING A PROHIBITION WITH NO ALTERNATIVE** — its first draft said *"your
back is never an option"* and stopped. **Repaired from `ibc.txt:675`: get your stick and gloves up
and spread on the glass, to cushion the blow and spread the force.** ⚠️ **That is the same Critical
shape found in `breakouts.md` this morning, caught by the author this time.**

#### ✅✅ THE SHOULDER CONTRADICTION IS RESOLVED — by going to the source, not by argument

**`sources/huh.txt:642, 647`, the *"Taking A Check"* checklist:** ***"Skates parallel to the
boards"*** and ***"No shoulder contact on the boards, if possible."***
⚠️ **That is the corpus's limb VERBATIM, in USA Hockey's own words, in the section about RECEIVING a
check.** With `ibc.txt:1453` (*"Never hit the boards or glass with the tip of your shoulder"*) and
`ibc.txt`'s *"Avoid hitting the boards with the shoulder"* under a heading about being *"checked
while skating parallel to the boards"*, **the corpus's posture IS the source's posture and its
hedging IS the source's hedging** — *"never… the tip"* and *"if possible"* are two different
strengths and both were preserved. **So *"turn the far shoulder toward the boards"* is almost
certainly not a contradiction.** **Routed to the live caption agent; the `safety-reviewer` reading
§6 owns the final word.**
⚠️ **AND THE MECHANISM'S SCOPE IS SPLIT, which is easy to get wrong: the WALKING-SPEED claim belongs
to the DUCKING / head-down prohibition, NOT to the turned back.** ⚠️ **`huh.txt` names the GOAL POST
alongside the boards** — relevant to anything drawn behind the net.

#### 🟠 OPEN from this wave

- [ ] **A THIRD SITE, outside the repair:** `center.md` §Faceoffs `:440`/`:454` tells the centre to
      *"win it back to your defenders, ideally the **boards-side** one for a quick rim out"* —
      ⚠️ **the centre deliberately sends the puck to a teammate who will retrieve it ON THE WALL WITH
      THE FORECHECK BEHIND THEM.** **That is the faceoffs/defender hazard seen from the other end,
      and neither layer says anything about it.**
- [ ] ⚠️ **THE SECOND LIMB HAS A COMPLICATION NOBODY HAD NAMED, and it is the key to that wave:**
      `center.md` **does** answer *"may you check at all"* for the **delivering** side (11 `Rule:`
      facts). It says nothing for the **receiving** side. ⚠️ **But incidental board contact happens
      in EVERY classification, so the posture is right for all readers** — *"the sentence has to say
      'this contact may itself be an offence where you play' without implying 'so you don't need the
      posture.'"* **That is the sentence to get right, and it is corpus-wide, not center-specific.**
- [ ] **`center.md` pre-existing quote drift, 2 hits, neither the agent's:** IIHF 101.1 quoted with
      an added terminal period where the source **continues** *"If two (2)…"*, and the source's
      **curly** apostrophes rendered straight. **Owner: whoever takes the checking-scope wave.**
- [ ] ⚠️ **STAGING: `center.md` now mixes THREE agents' uncommitted work** — a low-zone-collapse
      hybrid propagation, a swing-breakout/centre-fly propagation, and this repair. **The agent
      verified it clobbered nothing, but the file's staged state is not one agent's review.**

### ✅ THE `body_contact_and_battles.md` WAVE — and the best find is an INVERSION

⚠️⚠️ **THE BRIEF'S FRAMING WAS REFUTED AND THE AGENT FOUND THE DANGEROUS HALF THE BRIEF MISSED.**
I framed head-butting as an EIHL peculiarity. ⚠️ **`hc.txt:5957`, Hockey Canada Interpretation 1 to
Rule 7.1(a), enumerates the same helmet-push** — *"helmet-to-helmet or facial-protector-to-facial-
protector contact, without the use of excessive force."* **Writing it up as EIHL-distinctive would
have reproduced today's attribution failure exactly.**
⚠️🔴 **THE REAL HAZARD: USA HOCKEY HAS NO DOUBLE-MINOR TIER AT ALL.** `usah.txt:4284`, **Rule
619(a)**: *"A major plus a game misconduct penalty shall be assessed for head-butting an opponent"*,
with 619(b) adding a match penalty for reckless endangerment. ⚠️ **A reader who learns "head-to-head
push is four minutes" and plays under USA Hockey is EJECTED — and a USA Hockey game misconduct
carries into the next game (404(b)).**

⚠️ **The warm-up section's core divergence is the same shape, pointing the other way:** USA Hockey
502(b), Hockey Canada 2.2(j) (*penalty served at the start of the game — the team opens
short-handed*) and CARHA 27(b) all **penalise** warm-up contact, while **IIHF Rule 5.6 — the book
most British readers are under — says *"No penalties are to be assessed but a report of the incident
must be submitted to the Proper Authorities."*** ⚠️ **The document frames it as *"a change of route,
not a discount"*, because supplementary discipline has no five-minute ceiling.** **The agent's own
judgement: *"voiced alone, 'no penalties are to be assessed' would have been the single most
dangerous sentence available here."***

⭐ **THE RENDER FOUND FIVE INVERTED OR DANGLING FACTS LINES THAT `check_facts_antecedents.py`
RETURNED ZERO HITS ON** — *"The IIHF defines **it** as…"*, *"gives **the same tier** two
examples"*, *"the EIHL reaches **a fake**"*. **The tool could not see any of them. This is the pass
that earned its keep.**
⭐ **The `HARD_MAX` constraint held with NO SPLIT NEEDED:** the 2nd-major hedge went in **in place**
by substituting *"not the IIHF's 2+5+game misconduct"* for a longer clause — **and the substitution
is MORE robust, because IIHF 46's tiers are identical across editions while its NUMBERS are not.**

- [ ] 🔴 **DISPATCHED: a fresh `safety-reviewer` on the ~90 new lines.** ⚠️ **The author flagged
      itself: *"I wrote ~90 lines of new safety text and then reviewed it myself, which is the one
      thing this project's method forbids"*, and named its own weakest sentence — the composed
      closing instruction *"keep your feet, keep your gloves on, keep your head out of theirs"*,
      **coaching craft it wrote, not sourced wording.**
- [ ] ✅ **`sources/README.md` CORRECTED — it was SELF-CONTRADICTORY.** It said the Rule 9 sections
      *"(9.5 and 9.12) HAVE BEEN READ"* and listed **9.12 among those NOT read, in the same
      sentence.** ⚠️ **An agent acting on the "not read" half re-read 9.12 from scratch — the routing
      failure that file exists to prevent, caused by that file.** **Replaced with a pointer to
      `uk_rules.md`, which owns the read-scope claim, because a list goes stale and a pointer does
      not.**

### 🔴🔴 THE CENSUS'S GREP SURFACE WAS UNDERCOUNTED FOURFOLD — its NEGATIVES are the results in doubt

⚠️⚠️ **MEASURED BY THE `faceoffs.md` AGENT:** the census reported *"whole-file grep returns two false
positives only (`:761`, `:764`)"*. **`grep -n wall` returns EIGHT — 748, 761, 764, 778, 785, 811,
902, 1124 — and `:748` is a FACTS LINE, not prose.** *"The census under-counted the search surface by
a factor of four."*
⚠️ **Its conclusion, and it is the actionable one: *"if the same undercount was applied to the other
documents in that census, its 'zero carrying the limb' counts may be right for the wrong reason, and
its NEGATIVE results are the ones to re-run."***
✅ **PROPAGATED IMMEDIATELY to all four live posture agents**, with the instruction to search the full
vocabulary **and to search the FACTS LINES SEPARATELY FROM THE PROSE**, which is precisely the
distinction the census blurred. ⚠️ **For the *file ✓ block ✗* agent the error cuts the OTHER way —
toward OVER-reporting — so it was told the opposite: more of its sites may be "already covered
nearby" rather than genuine omissions.**

#### ✅ `faceoffs.md` — the finding survived and got STRONGER

**The limb was absent from EVERY layer including the body** — `grep -ci` for the five limb phrases
returned **0** for the whole file. ⚠️ **And the document already contained the hazard, named
verbatim: *"a defenceman has to go and get it, under pressure, with his back to the forecheck."*
That sentence described the geometry and then said nothing about surviving it.**
**Repaired in five layers, two blocks.** ⭐ **The 8/8 block was fixed by merging two `Position:`
lines — which ALSO fixed a latent antecedent defect**, because the second read *"boards-side
defenceman behind and outside **that winger**"* and **voiced alone, *"that winger"* pointed at
nothing.** ⭐ **The mechanism sentence was NOT invented** — *"a tucked chin straightens the cervical
spine, and that head-first collision with the boards or a post can injure at walking speed"* is the
corpus's own claim, sourced to *Heads Up Hockey*, **and it LINKED to the owner rather than
restating.** **Four sites judged NOT owed, with reasons.**
⚠️ **Block `:886` is now 8/8 coaching — AT the cap. The next agent must substitute there.**

#### ✅ `neutral_zone_systems.md` + `special_teams.md` — both zeros VERIFIED, and the partial was NOT a partial

⚠️⚠️ **THE BRIEF'S "PARTIAL LIMB" WARNING WAS WRONG IN THE MORE USEFUL DIRECTION.** I flagged
`special_teams.md:306`'s *"Technique: Head up"* as a fragment of the safety limb. **It is not a
degraded limb at all — it is a VISION-AND-TEMPO CUE that happens to share three words with one**
(*"Head up, feet moving toward the net — the moment your feet stop, the kill resets"*). ⚠️ **And the
agent found a second of the same kind the brief did not name: *"body on the wall, stick low and
flat"* — *"read as posture it points the reader at the WRONG thing."*** **A false partial is its own
trap: it looks like a caveat and is a tactic.**
**Four sites judged, two declined with reasons** — a `Countered by:` line is **opposition-side**, and
an overload block describes a **structure** whose technique `offensive_zone_play.md` owns and already
carries in five layers. ⭐ **And the strongest site in either file was in NO brief**:
`special_teams.md:377` *"body on the wall"* — **planting against the boards to stop a clear with a
forward chasing it up the wall.**
⭐ **The 8/8 trap block was fixed by substitution with BOTH propositions preserved**, and post-edit
`--near` shows it back at exactly 8/8 — **no growth.** **Renders confirmed real runs (58 and 128
chunks), not the silent exit-0 false pass.**
⚠️ **STAGING: `special_teams.md` carries another agent's uncommitted work including a newly inserted
Key Takeaway 3 that had ALREADY renumbered the list.** **This agent's new item 14 pushes theirs to
15. It verified that no `project/reviews/` archive references that file's takeaways at 14 or above.**

#### 🔴🔴 THE MOST IMPORTANT FINDING OF THE WAVE — the limb's OWN SOURCE may point the other way

⚠️⚠️ **`body_contact_and_battles.md` §6 RECORDS AN UNRECONCILED FOURTH USA HOCKEY SENTENCE —
*"turn the far shoulder toward the boards"* — AGAINST THE LIMB'S *"forearm and hip to the wall, NOT
the point of your shoulder."*** In the propagating agent's own words: *"my four new sites inherit
that unsettled question without restating it."*

⚠️ **So the position right now is: a safety limb has been replicated into SIX documents today while
its OWNER records a source sentence that appears to contradict it, and the replicas carry none of
that doubt.** **That is the propagation-of-a-contested-claim shape — the inverse of the defect this
whole wave was launched to fix.**

- [ ] 🔴 **ROUTED to the live holder of `body_contact_and_battles.md`** with four instructions:
      read it in `ibc.txt` and `huh.txt` (⚠️ **the PLAIN extraction — `sources/README.md` records the
      spinal-injury passage as UNRECOVERABLE in the `_layout` twin**); ⚠️ **establish whether it
      ACTUALLY contradicts — it may be the same body position from a different reference point, or a
      different moment (approaching the wall vs absorbing the hit)**; if real, **RECORD IT, DO NOT
      RESOLVE IT**, the way `sources/README.md` records USA Hockey's Rule 610 lettering disagreeing
      with itself; and ⚠️ **DO NOT WEAKEN THE LIMB — if unsettled, the honest form is the limb PLUS
      the disclosure.**
- [ ] ⚠️ **IF §6 QUALIFIES THE LIMB, ALL SIX REPLICAS NEED THE SAME TREATMENT — that is a
      propagation wave waiting on one answer.** **Do not stage a commit claiming this wave is
      complete until it is settled.**
- [ ] ⚠️ **`body_contact_and_battles.md:757`/`:773` is now LOAD-BEARING IN A WAY IT WAS NOT THIS
      MORNING** — two agents today deliberately **linked** to it rather than restating the
      walking-speed mechanism.

#### 🟠 The SECOND limb — reported by both agents, written by neither, and they fail differently

- [ ] **`faceoffs.md`: a Major.** It now teaches a posture for a hit **without saying whether that
      hit is legal at the reader's level** — *"in those books the forechecker's contact is itself the
      penalty."* ⚠️ **The scope table that settles it is `body_contact_and_battles.md:74`, which
      `faceoffs.md` links three times and never characterises — AND THAT TABLE IS ALREADY 2 ROWS FROM
      `TABLE_MAX_ROWS`, so it cannot absorb a new row.**
- [ ] **`neutral_zone_systems.md` prices the DELIVERING side properly** (*"Charging binds every
      division, checking league or not"*) **but never says body checking may not be legal at the
      reader's level at all.** **`special_teams.md` has nothing whatsoever on checking legality.**
- [ ] ⭐ **The repairs deliberately carry the NARROW half**: every new limb says the wall posture
      holds *"in a non-checking league exactly as it does in a checking one"*, **because a wall does
      not need an opponent to hurt you.** ⚠️ **That is NOT the same sentence as "may you hit here at
      all", and it was not written.** **Its own wave, and it plausibly belongs to
      `body_contact_and_battles.md` rather than to any systems document.**

### 🔴 THE CORPUS-WIDE POSTURE CENSUS — 4 of 847, and that number is the finding

**Every ` ```facts ` block in the corpus extracted mechanically and layer-tested: 847 blocks across
26 documents.** ⚠️ **13 of the 39 documents carry NO facts layer at all** — `core_principles`,
`language_and_glossary`, `rink_map`, `rules_primer`, `uk_rules`, `getting_started`,
`conditioning_and_recovery`, `equipment`, `how_to_watch_hockey`, `mental_game`,
`practice_and_development`, `team_play_and_culture`, `reading_ice_hockey_diagrams`.

| | count |
|---|---|
| facts blocks, whole corpus | **847** |
| carrying the **posture** limb | **47**, in **19** documents |
| carrying a **level** limb | **60** |
| **carrying BOTH** | **4** |

⚠️⚠️ **4 OF 847 IS THE SINGLE MOST USEFUL NUMBER PRODUCED TODAY.** The two limbs are propagated on
**almost entirely disjoint sets of blocks.** *"A listener who hears the posture limb has a 1-in-12
chance of hearing, in the same block, whether the hit should be happening at all."*
**The four: `goaltender.md:1162`, `forechecking_systems.md:518`, `body_contact_and_battles.md:1301`,
`puck_handling.md:482`.**

#### 🔴 C1 + C2 — `center.md` carries the posture limb in NO LAYER, and the sibling proof is exact

`center.md:78` places the centre *"Low in the defensive zone near the boards or behind the net"* and
offers *"Rim it onward… or reverse it back against the flow to a defenceman arriving behind you"* —
⚠️ **the block's OWN `Read:` line defines the rim as the play made when pressure is *"sealing you
in"***. **Nothing about posture, in any layer.**
⚠️⚠️ **THE THREE POSITION DOCUMENTS CARRY IDENTICALLY-TITLED SECTIONS AND TWO OF THREE CARRY THE
LIMB IN THE BLOCK** — `winger.md:83-84` and `defender.md:105-106` under
`### Defensive Zone: Carrying the Puck — Under Pressure`, **`center.md:78` under the same heading,
nothing.** **The propagation reached two of three and stopped.** Same again in the offensive zone:
`winger.md:356-358` carries *"forearm and hip to the wall, not the point of your shoulder"* under the
identical heading; `center.md:306` does not. **Dispatched.**

#### 🔴 C3 — `faceoffs.md`: 38 blocks, zero, and the framing is sharper than an ordinary wall play

⚠️ **The block's own words are the hazard: *"Every opposing forechecker is stationary at the
whistle"*** — **so this is a retrieval into the corner with a forechecker released from a standstill
directly at you.** `:886` and `:743`. **Dispatched.**

#### 🔴 C4 — `defensive_zone_coverage.md`: THE DOCUMENT PROTECTS THE OPPONENT AND NOT ITS OWN READER

**Thorough on the ARRIVING player's duty** — `:132` *"Never: Arrive into the back of a player facing
your end boards"*, `:432` *"Never: Send the second body into a back"* — **and silent on the posture
of the player it is SENDING INTO the corner** (`:132` *"The centre is the second body into the
strong-side corner battle"*, `:432` *"so send two"*, `:672` *"a rim or a chip off the glass"*).
⚠️ **26 blocks, zero; whole-file grep zero. The reader it protects is the opponent.** **Dispatched.**

#### 🔴 C5 — the LEVEL limb, now measured: `breakouts.md` has NINE posture blocks and ZERO level blocks

⚠️ **Its five mentions of *"checking"* are ALL about the wheel's net-front screen and interference —
none about whether body checking is permitted in the reader's classification.** *"So the corpus
tells a 12U or non-check-adult reader NINE SEPARATE TIMES how to take a hit at the wall, and never
once that the forechecker arriving behind them should not be delivering one."*
**Same shape, unjudged, in `zone_entries.md` (5 posture / 0 level), `passing_and_receiving.md` (2/0),
`puck_support_and_spacing.md` (2/0).**
- [ ] ⚠️ **QUEUED AS ITS OWN WAVE, AFTER the posture waves** — *"it is a different sentence, it will
      produce more false positives, and it is most likely owed where the posture limb has JUST been
      added."* **Every posture brief dispatched today says REPORT IT, DO NOT WRITE IT.**

#### 🟠 The Major table — *file ✓, block ✗* — dispatched in two waves

**Dispatched now:** `puck_handling.md` (`:504`, `:751`, and ⚠️ **`:383`, *"the block where posture is
most at home"***), `on_ice_communication.md:129`, `scanning_and_anticipation.md:210`,
`time_and_space.md:60`, `neutral_zone_systems.md` (`:214`, `:665` — **29 blocks, zero, whole file
zero**), `special_teams.md:306` (⚠️ **43 blocks zero, and `:306` carries *"Technique: Head up"* —
ONE FRAGMENT of the limb without the rest, which is MORE dangerous than nothing because it looks
present**).
**Not yet dispatched:** `body_contact_and_battles.md:1318` (⚠️ **the OWNER document's own rim/reverse
block**) and `:820`; `defender.md:59`; `game_management.md:495` (⚠️ **names the geometry outright —
*"off-hand you turn into the boards or the checker"***); `offensive_zone_play.md:712`;
`winger.md:220`; `breakouts.md:460`, `:965` (⚠️ ***"under pressure, back to the forecheck"***),
`:897`, `:648`. ⚠️ **`body_contact_and_battles.md` had a LIVE AGENT during the census — re-read its
two rows before acting.**

#### ✅ What the census JUDGED CORRECT and declined to report — this is why it is usable

⚠️ **Every checker-side block was excluded on principle**: *"the reader here is the ARRIVING player…
the posture limb is about receiving contact and does not belong to them."* Named: `defender.md:172`,
`winger.md:379`, five `forechecking_systems` blocks, `defending_the_rush.md:210`/`:389`,
`zone_entries.md:732`, `offensive_zone_play.md:818`, `defensive_zone_coverage.md:132`/`:432`. **Also
excluded:** all goaltender blocks (different geometry), `playing_without_the_puck.md:671` (the
receiver is the five-foot outlet), `skating.md:588` and four `zone_entries.md` blocks (limb already
present, contact source is the boards or a curl), and faceoff/shooting/skating technique blocks.
⚠️ **One marginal case named honestly: `forechecking_systems.md:751` instructs the reader to aim a
dump so an opponent must retrieve *"under pressure, facing the boards"* and carries no
never-finish-into-the-back line of its own** — `:627` and `:679` do.

#### ✅ Upheld — including one that must survive any tidying pass

**`breakouts.md:279`/`:329` re-read post-repair: prohibition first, play named, corrective clause
self-contained. Both now at 8/8 — substitution is the only remaining route.**
**The 47 posture lines are consistent and none softens the prohibition**; where the limb appears
twice in a block the split into separate `Never:` lines is **correct for the extraction layer**.
⚠️ **`switching_positions.md:343` — *"CARHA teaches a back-to-the-boards reception for that same puck
and this document teaches Breakouts' instead"* — an honest disclosure of a source the corpus
DELIBERATELY DECLINES TO FOLLOW ON SAFETY GROUNDS. DO NOT LET ANY TIDYING PASS TOUCH IT.**

#### ⚠️ The census's own bounds, and two are actionable

- [ ] ⚠️ **IT RENDERED NOTHING.** *"Every claim above about 'voiced alone' is reasoning from the
      documented 300 ms-break convention, not from an SSML file I read. **Somebody should render
      `center.md` and `faceoffs.md` and listen to the two sections named in C1–C3.**"* **Both
      dispatched briefs now require the render.**
- [ ] ⚠️ **IT WAS BLOCK-FIRST BY DESIGN: *"a document whose block is clean but whose BODY softens or
      contradicts the limb would have passed me silently — and the corpus's own recorded failure
      runs in that direction at least as often."*** **No wave covers this yet.**
- [ ] **The 13 no-facts documents were grepped whole-file, not read.**
- [ ] **It verified PROPAGATION, NOT TRUTH** — *"I quoted no rulebook and checked none."*
      ⚠️ **`rules-verifier` owns the 47 lines' content, and the four carrying both limbs are the ones
      most worth that check.**
- [ ] **An act-not-label sweep over the 520 blocks its geometry regex missed produced 66 hits and no
      genuine miss** — ⚠️ **but *"that is a second guess at vocabulary, not a proof."***

### ✅ BREAKOUTS + SPECIAL TEAMS — all seven repaired, and THREE MORE of the same class found

⭐ **THE 8/8 PROBLEM WAS SOLVED BY SUBSTITUTION, AND THE METHOD IS REUSABLE.** Both blocks sat at
**8/8 coaching with 0 `Rule:` lines**, so no tenth line was possible. **Reverse:** a `Technique:` and
a `Key:` merged into one 194-char line, freeing a slot. **Rim:** `Position:` folded into `Read:` —
**the `Action:` line already named the far-side winger, so nothing was lost.** ⚠️ **No caveat traded.
Both blocks are still 8/8.**

⭐ **TWO WORDING CHOICES THAT ONLY THE RENDER COULD HAVE SETTLED:**
**(1)** The first draft opened `Never: Take the contact…` — ⚠️ **voiced alone that risks INVERTING
INTO AN INSTRUCTION.** The prohibition now leads: *"Never — Your back to the boards on a reverse,
and never duck — take the contact…"*, confirmed in SSML.
**(2)** It names the play (`on a reverse` / `on a rim`) rather than *"on this play"*, ⚠️ **which
would be a dangling antecedent for a listener hearing the line alone.**

⭐ **THE FACTS CRITICAL WAS FIXED IN THE RIGHT ORDER: the body did not state it, so the agent WROTE
THE BODY SENTENCE FIRST AND EXTRACTED FROM IT.** *Extract, never author* — honoured. Every
delay-of-game citation located in primary text this session, with **CARHA scoped *"in
CARHA-affiliated adult leagues only"***.

**The five rule-scope defects, all verified in primary text:** IIHF 81.4's **fourth** exception
quoted from two editions; **USA Hockey 624(b)(1)** moved into **its own `Rule:` line** so it is
voiced as its own unit — ⚠️ **a `Rule:` line does not count against `MAX_COACHING_FACTS`, which is
why it fitted** — with the body now stating the below-Youth-15 consequence; `special_teams.md` KT3
rewritten to **name the books**, having verified **USA Hockey attaches NONE of the three** (636(f)
gives a time-out at any stoppage with no icing carve-out; 624(a) has **no choice-of-dot clause**) and
**Hockey Canada writes only the no-change bar** and **positively permits the time-out**; the dangling
antecedent and the Senior-option ambiguity both fixed by substitution; the CARHA scope flag restored.

#### ⭐ THREE MORE DEFECTS OF THE SAME CLASS, FOUND BECAUSE IT WENT LOOKING

- **`breakouts.md` §1 block** — *"That no-change bar is not universal…"*, the same dangling
  antecedent, **listed by `check_facts_antecedents.py`**. Fixed by substitution.
- **`breakouts.md` 6-on-5 block** — *"That freeze does not strand your goaltender…"*, same shape.
- ⚠️ **`special_teams.md` faceoff block** — *"Never: Fire a loose puck the length of the ice while on
  the power play — you hand the kill the dot and freeze your own tired unit"* was **UNSCOPED AND
  VOICED ALONE — KT3's defect reproduced in the extraction layer.** **And `special_teams.md` KT10
  and `breakouts.md` KT10 carried the same unscoped dot-choice clause.** All three now scoped.

#### 🟠 OPEN — two judgements it deliberately left, and one it called bigger than its brief

- [ ] **Does the posture limb belong in Common Mistakes BY NAME for the reverse and the rim?** The
      bullet *"Running a control breakout with nobody moving"* carries it **generically, for a posted
      winger**. ⚠️ **It declined to add a fourth restatement** — the style guide's own *"a third
      restatement is one more place for a correction to fail to reach"*. **A layer test decides.**
- [ ] 🔴 ⚠️ **A SECOND SAFETY LIMB, AND IT IS ARGUABLY WORSE THAN THE ONE JUST REPAIRED.** In its own
      words: *"The posture limb I added is about **receiving** contact, which is level-independent —
      but **a reader under a non-checking classification is still not told that the forechecker
      arriving behind them should not be hitting them.**"* ⚠️ **The posture limb answers *"how do I
      take this hit"*. It does NOT answer *"should this hit be happening at all"* — and a young or
      recreational player taught only the posture has been quietly told the contact is normal.**
      **Routed into the live corpus-wide census as a SECOND, SEPARATELY-REPORTED COLUMN**, with the
      warning that it is more likely than the first to produce false positives and that a section
      routing to the contact-status owner may be correct as it stands.
- [ ] **The major-arising-5-on-4 carve-out was deliberately left out** — *"rare, and adding it would
      have pushed the KT past readability for no safety gain."* **Recorded as a decision, not an
      omission.**

#### ⚠️ Bounds, and a staging warning

- [ ] **KT6's posture limb is a CORPUS-WIDE safety constant**, and it checked only its own two
      sections — **`defender.md`, `body_contact_and_battles.md` and `playing_without_the_puck.md`
      were all held by live agents.** **The census now running covers this.**
- [ ] **Free-text rule paraphrases elsewhere in §§1–7 and 9–10 of both files were NOT re-verified.**
- [ ] ⚠️ **STAGING: both files were already `M` at session start, so their diffs contain
      pre-existing work that is NOT this pass's** — named examples: the `Related:` line gaining a
      Special Teams link, and a `Position:`/`Action:` → `Convention:` relabel in the winger block.
      **Do not attribute those to this pass.**
- [ ] **It did NOT run `check_counts.py --update`** — correctly, as coordinator-owned shared state
      with agents live.

### ✅ THE 9.5 SCOPE REPAIR — it was a FOUR-OF-SIX repair, and the sixth was a different defect

⚠️⚠️ **EVERY LINE NUMBER IN THE COORDINATOR'S BRIEF WAS WRONG. THE SUBSTANCE WAS RIGHT.**
Both sentences I attributed to `:129` are on **`:120`** — and **`:129` is the MOUTHGUARD bullet.**
⚠️ **The agent's own words: *"Had I pasted against `:129` I would have edited the wrong rule."***
**This is the *"the brief's proposed wording is a brief, not a patch"* rule earning its place for the
second time today, and the first time it was an ADDRESS rather than a sentence.** **Line numbers in
a brief are hints to search from, never addresses.**

⚠️ **AND THE BRIEF MISSED THE BIGGER HOLE.** `equipment.md:119` — the **Home Countries (In-House
Rules)** bullet, *the bullet a non-EIHL British reader actually reads* — **carried no 9.5 ladder at
all, in any form.** **Fixing only my four named sites *"would have left the ladder appearing
exclusively inside Elite League bullets."*** **Repaired across SIX voiced layers, all verified in
de-tagged SSML (73 chunks).**
**Also repaired in passing: three bare `9.5`s the renderer voiced as *"nine point five"* with no
*"Rule"*.** A listener now always hears *"Rule nine point five."*

#### 🟠 The propagation check answered — (a) clean, (b) NOT clean, (c) a stale disclosure

**(a)** The 9.5 mis-attribution **does not appear** in `rules_primer.md` or
`playing_without_the_puck.md` — neither carries the ladder at all.
**(b)** ⚠️ **The *"not automatic"* boarding/charging/elbowing claim SURVIVED IN BOTH**, and was
repaired at five sites: `rules_primer.md:419` (listing boarding 41.4, charging 42.4 and elbowing
45.4 under IIHF Table 7's *"based on the Referee's judgement"*, **under a heading reading *"under the
book British hockey runs on"* — all three are the ones the EIHL takes out of the referee's hands**),
`:450`, `:451` (which said in terms the game misconduct is *"a judgement call"*), `:454`, and
`playing_without_the_puck.md:631`. ⚠️ **`playing_without_the_puck.md:935` and its `Rule:` fact at
`:618` both said Hockey Canada 8.5(b) is *"the only one"* to remove discretion** — scoped to *"those
four rulebooks"* with the EIHL added.
⚠️ **Two of its own drafts were caught by its own diff and its own SSML** — `:454` left *"a lower
threshold than intent"* dangling, and the first `:935` draft **interrupted *"it will be assessed…
not may"* and read wrong aloud.**

**(c)** ⭐ **A STALE DISCLOSURE WHOSE OWN QUESTION WAS ANSWERED IN THIS REPOSITORY.**
`rules_primer.md` asserted **in two places** that *"the EIHL's own Casebook has not been read here, so
the Elite League entry rests on no source read for this document."* ⚠️ **False as of today** — and
**the disclosure's own question is answered by the Casebook's scope paragraph** (`:109-111`).
⚠️ **This is the `sources/README.md` species named in CLAUDE.md: a negative answered elsewhere in
the repository that nobody propagated to it.** **The disclosure was made ACCURATE, NOT REMOVED** —
it still says the Casebook is read only for the provisions cited. **And `rules_primer.md` gained a
Sources trailer entry for a book it now quotes four times and previously cited nowhere.**

#### 🔴 ROUTED — the same defect, in the document `equipment.md` POINTS AT

- [ ] **`uk_rules.md:146` frames the 9.5 escalation as the EIHL's**, and **nothing in the document
      says it is IIHF 9.5, unamended, and therefore every British player's** — a grep for
      `Delay of Game`, `third time` and `escalation` returns that one line. ⚠️ **A British reader
      sent there from `equipment.md` AS THE OWNER finds it attributed to the Elite League or
      absent.** **Routed to the live holder, with the `:119`-shaped structural warning attached.**
- [ ] **A DISCLOSED omission that may no longer be the right call:** `uk_rules.md:391` says only four
      Casebook rules are reported, **so Rules 41, 42 and 42-elbowing were read and deliberately not
      reported.** **Honest and disclosed — but safety-relevant in the British OWNER document, and
      `body_contact_and_battles.md:568` now carries it.** Routed.
- [ ] **Provenance for `source-verifier`:** the download is labelled *"Version 1.1 (8 September
      2026)"* and `uk_rules.md:391` repeats it, ⚠️ **but `grep -o "SECTION [A-Z] VERSION [0-9.]*
      [0-9]*" … | sort -u` returns EXACTLY ONE stamp: `SECTION D VERSION 1.0 010826`.** **So a claim
      of an end-to-end read of "Version 1.1" needs the caveat that the body read is footered 1.0.**
      **The other two trailers now flag it.**

#### ⚠️ The bound that matters most, in the agent's own words

- [ ] ⚠️ **ITS PROPAGATION PASS WAS A GREP FOR THE DEFECT'S *VOCABULARY*.** *"A sentence saying
      **'in Britain the worst you face for a neck guard is ten minutes'** states the same error and
      matches none of my patterns."* ⚠️ **That is the `kickshot` failure in its propagation form,
      and it applies to EVERY propagation grep run today.**
- [ ] **It read 3 documents and grepped 2; 36 were not opened.**
- [ ] ⚠️ **Its own new text is unreviewed, and it named the weakest claim itself:**
      `rules_primer.md:419` now asserts the EIHL displaces a *discretionary* IIHF tier — **it
      verified the game misconduct is mandatory on a face/head injury, but NOT that the EIHL's
      boarding/charging/elbowing MAJOR thresholds are otherwise the IIHF's**, which the Casebook's
      scope paragraph implies but does not say rule by rule.

### ✅ THE TWO FACTS-LAYER REPAIRS — done, and BOTH BLOCKS ARE NOW CLOSED AT HARD_MAX

**Corpus 5,739 → 5,742 facts. Six exact-string replacements, every one asserting a unique match.**

#### The fighting block — split, and TWO deliberate deviations from the coordinator's sketch

⭐ **Both deviations were made after reading the SSML, and both are right.**
**(1)** The draft opened *"An EIHL instigator penalty is not ten minutes late in a game"* — ⚠️ **voiced
alone that parses momentarily as *"ten minutes late"*.** The safety point now leads instead.
**(2)** It **dropped the quotation marks** around the timing limb: ⚠️ **the verbatim *"in the final
five (5) minutes"* renders as *"in the final five (five) minutes"* in the SSML — a stutter that
costs more than the verbatim buys**, with the penalty quantum beside it still quoted word for word
and the sibling already paraphrasing the identical limb the same way.
⚠️ **THE BLOCK IS NOW 14/14 — `HARD_MAX`, CLOSED TO ANY FURTHER FACT, `Rule:` INCLUDED.** 10 `Rule:`
+ 4 coaching, **so the coaching cap is not what binds.** **Any future rulebook fact for this section
requires SPLITTING THE SECTION, not evicting a fact.**

#### ✅ COORDINATOR CLOSED THE ONE CLAIM THE AGENT HANDED ON — and the answer is STRONGER than assumed

The agent flagged that it carried the 2026/27 attribution to the **46.10** comparison *"on the
strength of the Preamble the body quotes, which is a structural inference, not a located sentence"*
— **the one claim it would hand on. Measured this round:**
- **`iihf_rules_2026-27.txt:4254` — `46.10. INSTIGATOR`**: *"shall be assessed an instigating minor
  penalty, a major penalty for fighting and **an automatic game misconduct**."*
- **`iihf_rules_v1.1.txt` — the SAME TIER IS `46.3. INSTIGATOR / INITIATOR`**: *"a minor penalty
  (Instigator / Initiator) plus a major penalty ("Fighting") and **an automatic game misconduct
  penalty (2'+5'+GMP)**."*

⚠️ **SO THE SUBSTANCE IS IDENTICAL IN BOTH EDITIONS AND ONLY THE RULE NUMBER MOVED (46.3 → 46.10).**
**The published sentence is TRUE AS WRITTEN and merely narrower than it needs to be** — the EIHL's
departure from the IIHF is **edition-independent**, and it is the *number* that travels badly, not
the tier. **Not a defect. Recorded as a refinement available to the next wave, not dispatched.**
*(Incidental: 2026/27 adds *"(or season)"* to the instigator criteria where v1.1 says only
*"in the game"*. Unused by the corpus.)*

#### The goaltender block — split into THREE, because two would have cost a hedge

⚠️ **My brief predicted 13/14 and was wrong: it assumed a two-way split, and the two-way split could
only be had by dropping a limb.** The agent's reasoning: *"the three criteria plus the
addition-not-replacement point plus the review limb is 370+ characters as one line and 600+ as two,
and **I will not trim a hedge to make a cap**."*
⭐ **AND IT CAUGHT ITSELF RESOLVING THE TENSION:** its first draft read *"so IIHF 69.7 still allows
incidental contact and the goal"* — ⚠️ **which reads as a RESOLUTION** — and it replaced it with the
body's own *"is not repealed"* formulation, **for exactly the reason the `safety-reviewer` gave.**
**The conservative default is carried as *"assume neither reading, ask"*.**
⚠️ **This block is ALSO 14/14 — closed.** 13 `Rule:` + 1 coaching.

- [ ] ⚠️ **TWO BLOCKS IN TWO DIFFERENT DOCUMENTS ARE NOW AT `HARD_MAX` ON THE SAME DAY.** Neither can
      take another fact. **The next correction that needs to reach either section has nowhere to go
      but a section split** — **and a block at cap evicting a rulebook fact is precisely the failure
      `check_facts.py --near` was written for.** Flag this before the next content wave.

#### The `Never:` label question — flagged, NOT changed, and the reasoning improved the answer

The agent was asked to flag rather than decide `:107`, and came back with a stronger position than
"be cautious": ⚠️ **`:106` is ALSO a `Never:` on the same kind of instruction, and the two are a
deliberate PAIR** — both guards against a specific wrong inference about what binds the reader.
**Relabelling one alone *"would break the pair and leave the block asserting that one of two
identical acts is a hard constraint and the other is not."*** **It is `content-reviewer`'s call, and
it is a call about BOTH lines or neither.**

#### ⚠️ Two gaps the agent declared against itself

- [ ] ⚠️ **IT DID NOT RUN THE WHOLE-FILE DIFF, AND SAID SO PLAINLY.** *"Both files were already `M`
      at session start… a diff against `HEAD` is dominated by other agents' work that I must not
      judge or touch, and I could not separate mine from theirs without a baseline I do not have."*
      Its substitute — unique-match asserts plus re-reading the five-line neighbourhood — **proves it
      changed only what it intended; it does NOT prove another agent has not written something into
      these files that contradicts its new facts.** ⚠️ **THE CONTRADICTION CHECK IS THE
      COORDINATOR'S AND IS OWED BEFORE STAGING.**
- [ ] ⚠️ **A LEAD IT FOUND ONLY WHILE WRITING ITS OWN REPORT, and it marked it unverified:** the
      Casebook's *"2nd Major Penalty"* is **not scoped — in-game or across the season is not
      stated** — and the body at `:1561` flags this **in terms**, while *"neither block carries
      it."* ⚠️ **Its own account of why: *"I read the body looking for the limb I had been told was
      missing."*** **Treat as a lead, not a defect: it has read the body sentence but not tested
      whether any fact covers it.**
- [ ] **Neither repair opened the Casebook.** *"If `:1047`, `:1049` or `:1561` misquote it, I
      propagated the misquote faithfully."* **`rules-verifier` owns that.**

### ✅ THE POINTER MINORS — all three confirmed, and TWO WERE WORSE THAN RELAYED

#### m2 — the call register: fixed by ADDING the call, not by cutting it

*"I've got F1"* was **nowhere in `on_ice_communication.md`** — `grep -n "F1\|F2\|F3"` returned
**zero hits across the whole file.** ⚠️ **The count lived at ONE line only** (`:630`), stated in no
other layer — not the facts blocks, not Common Mistakes, not the sixteen Key Takeaways — **which is
why it was safely movable**, and the agent checked that before choosing.
**Chosen fix: label, don't delete** (non-negotiable 1 — the claim is unsourced, not contradicted),
**and the register already teaches the same *"I've got &lt;assignment&gt;"* family in prose at
`:395`.** F1/F2/F3 are now **defined on first use in that document**, per the stand-alone rule.
⚠️ **The render caught the agent's own first draft: it wrote *"and "I'm high" ABOVE claims…"* — a
LAYER POINTER A LISTENER CANNOT FOLLOW — and rewrote it.**

✅ **COORDINATOR VERIFIED THE COUNT THIS ROUND, because the agent named it as its own blind spot**
(*"if a sixteenth undocumented call is taught in the goaltender or faceoff sections, the count I
just moved is still wrong, and I would not have seen it"*). **Measured: 15 daggered entries in the
file, and the list at `:632` names exactly those fifteen — `turn, eat it, with you, outlet, net
front, sag / collapse, odd man, I'm high, I've got F1, my man / I've got him, pick him up / take the
middle, I've got the pass / take the shooter, I've got first player off, stay, next shift`.
Consistent. No sixteenth.** ⚠️ **Bound: this checks calls that CARRY A DAGGER. An undocumented call
taught with no dagger is invisible to it.**

- [ ] ⚠️ **COST TO RECORD: that block is now at 8/8 non-`Rule:` facts, ZERO headroom.** It passes
      (the gate trips at *more* than 8) **but the next line added there fails or evicts.**
      `facts-reviewer` should also decide whether the new `Action:` line duplicates the block's
      existing `Key: The player who can see it makes the call`.
- [ ] **A NEW daggered disclosure and a MOVED disclosure count are both new `check_disclosures.py`
      hits, attacked by nobody but their author.** ⚠️ **Its own words: *"that is an absence I looked
      for, not an absence I proved."*** ⚠️ **And the round-59 direction applies — if this class is
      attacked from the other side, the right answer might be a CITATION rather than a dagger.**

#### m1 — the dump enumeration: the relay UNDERSTATED it in two ways, both verified

1. ⚠️ **The defect was in the FACTS LAYER too**, not only the body. `:638` read *"Options: Three
   kinds of dump…"* — **voiced alone with a 300 ms break either side, so the wrong enumeration was
   reaching the listener naked.** ⚠️ **A document-level grep for the body sentence would have
   cleared it.**
2. ⚠️ **The rest of the corpus ALREADY AGREED with `zone_entries.md`, so `forechecking_systems.md`
   was the SOLE DIVERGENT COPY** — `winger.md:222`, `winger.md:699` (*"Name three of **the five**
   kinds of dump-in"*), `zone_entries.md:1110`, `offensive_zone_play.md:778`. **Nothing else in
   `content/` says "three kinds of dump".**

**`zone_entries.md` was checked for over-splitting and is NOT over-split** — §2 places the puck to
*die* so your chaser wins a race to a stationary puck; §3 puts it down the wall past a committed
defender **and you collect it yourself**, *"a possession play, not a surrender"*. **Different read,
different technique, different outcome.** ⚠️ **And the old wording was wrong on its own terms as
well as conflated: the chip goes DOWN THE WALL, not *"into the corner"*.** **No edit to
`zone_entries.md` — the target was right.**

#### m4 — the one-way link, added deliberately rather than decoratively

`grep -n "forechecking_systems" content/positions/defender.md` → **zero, header included**, against
four siblings that carry it. ⚠️ **The agent established WHAT the reader would be sent for before
linking:** `defender.md`'s two pinch sections teach *who* pinches and *that only one does*, and
stop; `forechecking_systems.md` §"When to pinch" carries the **timing test** and the **book-by-book
limits on what you may do to the winger once you reach the wall.** **That second half is a penalty
exposure a defenceman meets more than anyone — which is what makes the link worth making.**
⚠️ **Attribution careful: *"carries the coaching test most teams use"*, NOT "the rule", and NO BOOK
COUNT written into it.**
⭐ **THE MIRROR-DEFECT CHECK WAS RUN, BOTH DIRECTIONS.** The link is about pinch *timing* and *wall
legality*, **not** the weak-side defenceman; and `forechecking_systems.md:333` **agrees** with
`defender.md:532`. **No contradiction created either way.**

#### 🟠 A Major found in passing, and it is the round-10 shape again

**`defender.md:536` — a "Key considerations" summary paragraph repeated a safety comparison BARE**,
100 lines after its owner: *"An offensive-zone pinch is safer than a neutral-zone pinch because your
forwards are still in the zone behind you."* ⚠️ **The owning sentence at `:429` — and its facts line
at `:419` — both carry the qualification: *"Read what that compares, though: rushes coming back at
you, NOT what the two plays do to a body."*** ⚠️ **Read alone, the summary tells a defenceman a
pinch is the safer play full stop.** **The existing qualification was propagated VERBATIM rather
than a new one written.** **`safety-reviewer` hand-off: new text touching a pinch, a penalty and an
injury comparison.**

#### ⚠️ The blind spot worth acting on — a REVERSE census nobody has run

- [ ] ⚠️ **The audit checked the direction it pointed: which documents `forechecking_systems.md`
      points at falsely. NOBODY HAS RUN THE REVERSE** — *"which documents does it FAIL to point at,
      and which documents point at IT for something it does not hold?"* ⚠️ **The `defender.md` gap
      existed for exactly that reason and was found by an audit of a DIFFERENT file. There is no
      reason to think it is the only one.** **A corpus-wide census of `Related:` headers against the
      material actually shared would find the rest.**
- [ ] ⚠️ **The five-way divergence was proved confined by grepping THE CORPUS'S OWN NAMES for the
      plays.** *"A document that describes the same conflation without using any of those words is
      invisible to that method"* — **the `kickshot` failure in miniature.**
- [ ] ⚠️ **`project/content_style_guide.md` EXCEEDS THE READ TOOL'S SIZE CAP** (2,804 lines, 260 KB)
      and was read only in the sections judged relevant. **That is a standing constraint on every
      agent, not this one's failing, and it is not written down anywhere else.**

### 🔴 THE POWER-PLAY BREAKOUT REVIEWS — a SAFETY CRITICAL that is PRE-EXISTING, and a sixth book

#### 🔴🔴 CRITICAL — the wall-contact posture limb is missing from the Reverse and the Rim

`breakouts.md:274-282` (Reverse) and `:325-333` (Rim): **neither facts block nor either body carries
the corpus's own mandatory posture limb.** Both bodies name only **possession** cost.
⚠️ **Both plays are, by the document's OWN definition, made facing the wall with a forechecker
arriving behind** — Reverse `:288` *"with a forechecker chasing your hip"*, Rim `:340` *"Rim when a
forechecker has **sealed you against the boards**."* **That is the checking-from-behind / boarding
geometry, and the posture that makes it survivable is taught nowhere in the two sections that teach
the plays.**

**The corpus already ruled on the limb, at Key Takeaway 6 (`:1037`):** *"the posture you take that
contact in is not a preference: never your back to the boards, and never duck. Get your skates
parallel to the boards instead, forearm and hip to the wall… head up and chin off your chest."*

⚠️⚠️ **MEASURED, NOT EYEBALLED — and the measurement is the finding: 8 of the file's 40 facts blocks
carry the limb, and THE ONLY TWO OPTION BLOCKS WITHOUT IT ARE THE EXACT TWO KT6 SINGLES OUT.** The
limb reached *Up* and *Wheel* and missed *Reverse* and *Rim*.
⚠️ **THIS IS THE ROUND-10 SHAPE INVERTED: the caveat reached the summary layer and STOPPED THERE.**
⚠️ **Both blocks sit at 8/8 on `MAX_COACHING_FACTS` with 0 `Rule:` lines — a tenth line trips the
gate, so it must go in BY SUBSTITUTION.** **Pre-existing, but the new §8 re-activates it in terms**
(`:789`, *"every named option in section 3 is still available"*). **Dispatched.**

#### 🟠 Five rule-scope defects, every one verified against primary text

- **`breakouts.md:828` says "three exceptions" under an "NHL and the IIHF" banner — the IIHF's 81.4
  has FOUR**, inserting *"a Player with a broken skate"*. ⚠️ **The same document gets it right twice
  already (`:448`, trailer `:1050`), as do `special_teams.md:969` and `:980`. Only the new §8
  sentence says three.** Operative conclusion unaffected.
- 🔴 **`breakouts.md:775` — *"USA Hockey 624(a) attaches no strength test to icing at all"* is true
  of (a) and NOT of 624.** `usah.txt:4411-4431`, **624(b)(1)** nullifies icing for a short-handed
  team *"(For all Youth 15-Only and above, Girls 16U and above, High School and Adult
  classifications only)"*. ⚠️ **Voiced alone this teaches a USA Hockey ADULT kill that it cannot ice
  freely when it can, and a U14 kill that it can when it CANNOT — and below Youth 15-Only a
  short-handed team CANNOT ICE AT ALL.** **The body at `:828` is correctly worded; the facts line is
  the one that travels alone.**
- 🔴 **`special_teams.md:1170` — an UNSCOPED KEY TAKEAWAY naming no book**, asserting the clear costs
  *"the line change, the time-out and the choice of dot"*. ⚠️ **All three FALSE under USA Hockey;
  two of three false or REVERSED under Hockey Canada**, whose **6.7(d)(iii) POSITIVELY PERMITS the
  time-out** — *"Either team is permitted to take their time-out… following an icing"*. **A positive
  contrary rule, not a silence.** ⚠️ **PROPAGATION GAP, NOT RESEARCH GAP — the corpus already
  carries HC 6.7(d)(iii) in `rules_primer.md`, `time_and_space.md`, `language_and_glossary.md`,
  `center.md` and `winger.md`.**
- **`breakouts.md:780` — TWO defects in one line**: the dangling *"That bench freeze"* (body
  introduces the label only at `:795`), **and** *"U18AAA, Junior and Senior at the Member's option"*,
  which **aloud can be heard as all three being optional** where the source attaches the option to
  **Senior alone**. ⚠️ **The file already holds two unambiguous renderings, at `:84` and `:847`.**
- **`:986` names CARHA beside two national governing bodies with no scope flag**, where the corpus
  elsewhere writes *"CARHA (adult leagues only)"*. **Scope-flag drift.**

#### ⚠️ A SIXTH BOOK, AND A LABEL-ZERO TRAP THAT DID NOT BITE ONLY BECAUSE NOBODY SEARCHED

The `rules-verifier` swept **all 40 files** and tabulated icing across six books. ⚠️ **PWHL carries
the whole apparatus — strength test, bench freeze, attacking-team dot, time-out bar — but RENUMBERS
icing to Rule 83 and time-outs to Rule 89.** **So a rule-number search for "81.4" returns zero from
a book that carries the rule.** **The corpus's "all four books" and "only two of the four books"
claims are TRUE AS WRITTEN AND NARROWER THAN THE SHELF.**
**Also positive rather than silent, and not carried:** USA Hockey Casebook **Situation 8** answers
the dot question the **opposite** way to NHL/IIHF 81.2 (*"the side of the ice from which the puck
was shot… On which side of the ice the puck crosses the goal line is not a factor"*), and **636(f)
positively permits the time-out after an icing.**

#### ✅ Upheld, and flagged DO-NOT-TIDY

**Common Mistakes `:986` puts the instruction and the consequence in ONE voiced unit** (confirmed in
rendered SSML), **and `:784`'s `Never:` line never tells a listener to clear off the glass** — so
the extraction layer never issues the instruction without the caveat. ⚠️ **That arrangement is
correct and must NOT be moved into the facts block.**
**Non-negotiable 7 holds in every layer that needs it**, and is **correctly absent** from Common
Mistakes and KT10 because neither states the preference. **The "takes it away" arithmetic is
confirmed** (NHL 16.1/16.2 — 4-on-4, neither team short-handed). ⚠️ **One carve-out not carried: a
5-on-4 arising from a MAJOR would be SHORTENED, not removed.**
**No safety content was lost in `special_teams.md`'s large reflow diff** — six safety-bearing
sentences string-checked individually and all survive.
**A British non-defect, recorded so nobody re-finds it:** `ihuk_junior_roc.txt:2752-2755`, *"No icing
calls at U12"* — **already carried verbatim at `uk_rules.md:295`, `:403`, `:529`**, and the banner
routes there. **`eihl_casebook.txt` returns ZERO for `icing`, footer-stripped and flattened.**

#### ⚠️ Declared unverified — say it plainly rather than let a clean report imply coverage

- [ ] **The delayed-penalty and delayed-offside sub-blocks inside §8 were NOT verified** (NHL
      15.1/15.2/15.3, 78.5(xi), 84.2, USAH 205(a), HC Interpretation 1 to 6.1(b); NHL/IIHF 83.3,
      USAH 630(d), HC 6.11(b)(ii)). **Pre-existing prose, outside the three tasks. Unverified.**
- [ ] ⚠️ **AN UNATTACKED NEGATIVE, and the verifier named it itself:** it searched six books for a
      substitution restriction attached to **icing** and found it in three — **it did NOT search for
      one attached to something ADJACENT that would catch the same clear** (a delay-of-game
      stoppage, a frozen shoot-in, a dislodged net). ⚠️ **`rules_primer.md:784` says NHL/IIHF Rule
      63.8 does exactly that and that neither North American book writes it — UNRE-VERIFIED, and
      §8's *"no substitution restriction at all"* would be wrong IN SPIRIT if it does.**
- [ ] ⚠️ **An unresolved conflict INSIDE the IIHF book:** 81.4's four exceptions against 82.1's
      three, with the Situation Handbook's 81.7 over-broad in a third direction. **Neither book says
      which governs.** *"A reader planning a broken-skate change on §8's authority is acting on an
      unresolved conflict the document flags elsewhere but not in §8."*
- [ ] **The four-forward 56% figure and the Sznajder tracking figures were not refetched** —
      `source-verifier`'s dimension.
- [ ] ⚠️ **The safety reviewer's own bound, and it is the same one three reviewers have now named:**
      *"I found the reverse/rim gap because the headings named the plays and Key Takeaway 6 named the
      limb. **A block whose section has a safety point its heading does not advertise would have
      passed me.**"* ⚠️ **Someone should run the block-level extraction for the posture limb across
      the WHOLE corpus once the held files settle — that scan was ONE FILE.**

### 🔴 FACTS-LAYER REVIEW OF TODAY'S BLOCKS — two Criticals, and both are a DROPPED EXCEPTION

**Scale: 3 documents of 26 opened, ~100 facts read individually, plus full `--near` and
`--antecedents` output over all 5,738.** `check_facts.py`: **26 documents · 847 blocks · 5,738
facts · all conform.**

⚠️ **TWO OF MY BRIEF'S FIGURES WERE WRONG AGAIN.** `goaltender.md`'s block is **12 facts (11
`Rule:` + 1 `Key:`)**, not 13. And *"`equipment.md` has no facts block"* is **correct BY
SPECIFICATION, not a defect** — the style guide excludes the six off-ice documents in terms, and
`check_facts.py` reports *0 in-scope documents* for it and for `uk_rules.md`. ⚠️ **So the round-10
propagation worry CANNOT APPLY AT THIS LAYER for either file — the layer does not exist there by
design.** Whether their other summary layers got the body change is `content-reviewer`'s question.

⭐ **THE EVICTION CHECK WAS VERIFIED RATHER THAN BELIEVED**, which is what the convention asks:
`git diff -U0` filtered to fact-label lines gives **7 removed / 15 added**, and **every one of the 7
removals pairs with an edited replacement on the same claim.** **Nothing left the corpus.**

#### 🔴 CRITICAL 1 — `body_contact_and_battles.md:1541`: the EIHL's fighting leniency without the limit

The line states the lenient half of EIHL 46.10 and stops. ⚠️ **The body bullet it extracts continues:
an instigator rises to *"2 minor + 5 major + 20 Game misconduct"* *"in the final five (5) minutes of
regulation time or at any time in overtime"*, or on a second instigator penalty in the same game.**
⚠️⚠️ **VOICED ALONE, A PLAYER IS TOLD THE WORST AN INSTIGATOR PENALTY COSTS IN THE EIHL IS A
TEN-MINUTE MISCONDUCT. LATE IN A GAME IT IS AN EJECTION.**
⚠️ **And the sibling fact at `:1542` carries exactly this last-five-minutes structure correctly for
the NIHL — so the block is internally inconsistent about a rule it already knows how to state.**
**Second limb:** *"IIHF 46.10"* is the **2026/27** number (2025/26 is **46.3**), quoted bare —
**directly below `:1540`'s own *"the numbers moved between editions"* and against the body's
*"quote a number with its edition or not at all"*.** ⚠️ **The EIHL half is SAFE** — the reviewer
confirmed the quoted 46.1 sentence exists **only** in `iihf_rules_2026-27.txt`. **Dispatched; the
line is at 242/300 so it must SPLIT, taking the block to 14/14 — HARD_MAX, closing it to any
further fact.**

#### 🔴 CRITICAL 2 — `breakouts.md:775`: a prohibition with no alternative, in the one place it costs most

*"Never: On the power play, solve a forecheck by firing the puck the length of the ice…"* — **names
a prohibition and names no alternative.** ⚠️ **The alternative a listener reaches for is putting it
off — or OVER — the glass, and this document's own new Common Mistakes bullet says why that is
worse here: *"On a 5-on-4 that minor does not shorten your advantage — it takes it away."***
⚠️⚠️ **THE SIBLING SUBSECTION THIRTY LINES BELOW DOES IT CORRECTLY** — the 6-on-5 block at `:843`
carries *"Icing removes the long clear, not the glass clear"* **and** an `Action:` line. And §1's
block at `:435-438` carries the delay-of-game minor with its carve-outs and the USA Hockey/Hockey
Canada split. **So the corpus has both halves, and the one block written for the situation where the
penalty is most expensive has neither. Two blocks in one section, same act, opposite completeness.**
- [ ] **NOT DISPATCHED — two read-only reviewers are live in `breakouts.md`.** ⚠️ **Headroom exists
      (9/14, 6/8 coaching).** ⚠️ **AND THE BODY DOES NOT STATE IT EITHER, so the body needs the
      sentence FIRST. Extract, never author.**

#### 🟠 MAJOR — `goaltender.md:1035`: the two facts layers now DISAGREE about the same Casebook sentence

The line quotes the crease criterion and **drops criterion 2** — *"Was the contact initiated by the
defensive player or the cause of a player from the opposing team?"* ⚠️ **That is the limb deciding a
goalie's commonest crease case: an attacker pushed in by the goalie's OWN defenceman.**
⚠️ **The body's next paragraph exists to stop the reading the block produces** (*"It is an *addition*
rather than a replacement… read the two together"*). **Voiced alone the fact says any contact in the
blue paint disallows the goal; the body says do not read it that way.**
⚠️⚠️ **`body_contact_and_battles.md:1151` states the same claim CORRECTLY — and the goaltender's
version, THE ONE A GOALIE HEARS, is the incomplete one.** Dispatched.

#### 🟠 MAJOR — `breakouts.md:780`: a dangling antecedent, caught by the tool AND by reading

*"That bench freeze"* points at the previous fact, **which the listener met as a separate utterance**
— the tool's exact discriminator, demonstrative plus short abstract noun as a pointer. ⚠️ **The term
appears nowhere in the section body before it, so a listener cannot recover it from the prose
either.** **The 6-on-5 sibling at `:847` shows the fix already** (*"Only two of the four books then
freeze your bench —"*). ⚠️ **FIX BY SUBSTITUTION, WHICH IS SHORTER THAN THE POINTER (−4 chars). No
caveat traded.** **Rule content itself verified correct.** Not dispatched — same file.

#### ✅ THE 🇬🇧 QUESTION IS ANSWERED — coordinator, this round

The reviewer flagged that nobody had checked how the flag is **spoken**, calling *"everyone does it"*
not evidence. ⚠️ **It is handled explicitly and deliberately: `scripts/md_to_speech.py:345` maps
`🇬🇧` → `" For British readers. "`**, with a comment recording that **dropping it silently is what
happened before that row existed** and that *"at least one occurrence introduces the mandatory
neck-laceration protector, so this is a safety marker and not a flourish."*
⚠️ **The contract is that the marker PRECEDES a clause — a FULL STOP, not a comma** — and the file
records that a **commit gate caught an earlier false claim in that very comment by rendering the
tree rather than trusting it**, and that one mid-sentence use in `rules_primer.md` was fixed in the
CONTENT rather than the renderer being weakened. **Spot-checked today's uses: all are
sentence-initial and followed by a capitalised word. Contract honoured. No defect.**

#### Minors, and one the reviewer declined to decide

- [ ] **`body_contact_and_battles.md:102` — *"Rules of Competition **carries** it"*; the removed
      version read *"carry"*. **Plural subject, singular verb, and it is voiced.** *(The substantive
      change there was an improvement: it narrows from a claim about every IHUK league to the four
      actually read.)* Dispatched.
- [ ] **`:107` — a `Never:` label on an instruction about READING SOURCE DOCUMENTS**, where `Never:`
      is specified as *"a hard coaching constraint"*. ⚠️ **The reviewer explicitly DECLINED to decide
      it** — *"it is scope disclosure, which the guide protects… `content-reviewer`'s call, not
      mine."* **Flagged, not changed.**
- [ ] **`breakouts.md:776` — `Goal:` states the document's coaching DEFAULT as the section's GOAL.**
      Mitigated by the `Convention:` at `:782` naming the alternative — ⚠️ **but they are voiced as
      separate utterances and the `Goal:` is heard FIRST and unqualified.** Cardinal-rule tension.

#### ⚠️ THE REVIEWER'S OWN WEAKNESS, STATED — and it is the round-20 class

*"I found the two omissions because the body paragraphs sat directly under the blocks and advertised
themselves… **A block whose section has a safety point two subsections away, or in a sibling
document, would have passed me.** The breakouts out-of-play finding is the exception and I got it
only because the DIFF put the Common Mistakes bullet in front of me; **had that bullet been
pre-existing I would not have gone looking for it.**"*
- [ ] **It read 3 documents of 26.** *"The other 23 hold 5,600-odd facts I did not open, including
      the six fenced off, whose new blocks nobody has read either. My clean `check_facts.py` run says
      nothing about them."*
- [ ] ⚠️ **CROSS-AGENT CONTRADICTION IT COULD NOT CHECK:** the breakouts centre-fly `Convention:` at
      `:610` points at `center.md`, **which another agent held.** *"If that agent changed the
      centre-fly treatment, the breakouts block now disagrees with it and neither agent can see it."*
      **Diff both whole files before staging.**
- [ ] **Re-run `check_facts.py`, `--near` and `check_facts_antecedents.py` AFTER the last agent
      finishes** — `:780` and `:848` both need re-reading if `breakouts.md` is touched again.

### 🔴 SAFETY REVIEW OF TODAY'S REPAIRS — one Major, and it is a SCOPE INVERSION that hits nearly every British reader

⚠️⚠️ **THE 9.5 ESCALATION IS THE IIHF'S, AND `equipment.md` ATTRIBUTES IT TO THE ELITE LEAGUE IN
EVERY VOICED SUMMARY LAYER.** `:20` Key focus, `:720` Common Mistakes, `:783` Key Takeaway 5 and
Check yourself Q6 all say *"the Elite League"*. ⚠️ **`:129` ALREADY SAYS THE OPPOSITE AND IS RIGHT:**
*"That escalation is the IIHF's own Rule 9.5 word for word rather than an Elite League invention."*
**Body ✓, four voiced layers ✗ — the propagation failure with the body as the survivor.**

**BOOK:** `iihf_rules_2026-27.txt:1284-1287` carries the ladder; the Casebook (`:270-272`) prints it
**word for word**. ⚠️ **And the In-House Rules DO NOT AMEND 9.5** — `9.5` and `Protective Equipment`
return **zero** in `eiha_inhouse_2026-27.txt`; they amend **9.12 only** (`:268-280`). **So IIHF 9.5
stands unamended for every British player.**

⚠️ **HAZARD: a British reader outside the EIHL — NIHL, SNL, BUIHA, junior, SIHA, women's, which is
nearly all of them — hears three of four voiced layers say the ladder is the Elite League's and
concludes it is not theirs.** **Dispatched for repair with the constraint that `:20` must KEEP the
EIHL's lighter first rung, because that contrast is the paragraph's point and is correct.**

⚠️⚠️ **HOW IT WAS FOUND, AND WHY NO TOOL COULD:** `check_quote_drift.py` **cannot see attribution
drift** — it keeps the closest match across ALL sources. ⚠️ **IIHF 9.5 and Casebook 9.5 are WORD FOR
WORD IDENTICAL, so this file sits exactly in that blind spot.** **It was found by grepping the
In-House Rules BY HAND.**

#### 🟠 The crease facts line states a tension and gives the listener NO ACTION

`body_contact_and_battles.md:1151` names the Casebook criterion, says it does not repeat IIHF 69.7
and does not say how the two fit — **and stops.** ⚠️ **Voiced alone with a 300 ms break either side,
that is a listener told two rules may conflict and nothing about what to do.** **The safe default
exists but only at `:1155`, at the end of a ~1,900-word body bullet:** *"until you have an answer,
go to the net expecting the crease criterion to be applied against you."*

⭐ **THE REVIEWER'S JUDGEMENT ON THE BRIEF'S OWN QUESTION, and it settles a live disagreement:**
*"**Yes, and the refusal to resolve it is right.** Nothing on disk reconciles them… Inventing a
reconciliation would be a fabricated rule. **What is not safe is leaving the ambiguity open in a
layer that carries no instruction.**"* **So the fix is to carry the CONSERVATIVE DEFAULT into
`:1151`, NOT to resolve the tension.** ⚠️ **Headroom is tight — `:1147` is at 298/300 in that same
block, so substitution or a shorter sibling is needed, and NO CAVEAT MAY BE TRADED OUT.**

- [ ] **Not dispatched this round** — `body_contact_and_battles.md` is under read-only review.

#### ✅ The *may*→*shall* repair was tested and UPHELD as *"correct, complete and well made"*

**`not automatic` greps to ZERO** in that file; all four sites carry the EIHL exception in **both**
facts blocks and **both** body sites; the IIHF counterweight is right in all three rules
(`41.4`/`42.4`/`45.4`, each *"at their discretion, may assess…if, in their judgment, the Player
recklessly endangers their opponent"*); and **both facts lines survive being read alone with the
exception attached.** ⚠️ **Key Takeaways carries no EIHL limb and that is DEFENSIBLE** — KT6's
instruction is already stricter than any of these tiers, **so the omission changes no behaviour.**
**The misnumbering note was checked on the half easiest to get wrong** — the contents list at
`:64-66` repeats the double *42*, not just the body.

**The unwilling-combatant relief was upheld too:** the facts line **names the three competitions in
the line itself**, so the scope survives voicing; the body adds *"it is discretionary, so it is not
something to count on"*; and the block's counterweights are each voiced separately.
⚠️ **One residual, flagged so the next reviewer does not re-find it:** *"unwilling combatant"* is a
term of art the facts line does not define, **and under IIHF 2026/27 it covers a player who DID
punch back a few times.** The reviewer judged a standalone five-minute major is not cheap and the
`Action:` line sits in the same block — **so it recommended NO change.**

#### 🟠 Minors

- [ ] **`equipment.md:129`'s *"the safe reading"* is not the conservative one, and the label inverts
      it.** 9.5 is written for *"any equipment that does not meet with the IIHF regulations"*, which
      **plainly reaches having none at all** — so the conservative reading is that 9.5's ladder
      covers both cases and **the corpus's split is the NARROWER one.** ⚠️ **Behavioural difference
      is NIL**, so this is labelling. **The house form is already two sections above at `:120`.**
      Dispatched.
- [ ] **`body_contact_and_battles.md:486`/`:496` — elbowing carries no EIHL consequence AT ITS OWN
      SITE.** The Casebook sentence covers elbowing too, but the mandatory game misconduct lives only
      in the **boarding** section at `:569`/`:575`. ⚠️ **A listener hearing the elbowing facts line
      alone does not get it.** **Low severity** — the instruction (*elbows down, hands down*) is
      already maximally conservative and does not change.
- [ ] **Quote drift in both files (4 and 11 fragments) is PRE-EXISTING and none is in repaired text.**
      Recorded so it is not mistaken for new.

#### ⚠️ Bounds on this review

- [ ] ⚠️ **IT DID NOT RENDER EITHER FILE THROUGH `md_to_speech.py`.** *"Every layer-alone judgement
      above is my reading of the Markdown, not of the SSML."* **A paragraph assumed to be one unit
      may chunk differently.** `check_tables.py` and `check_pointers.py` were not run either.
      **The repair agent has been told to render.**
- [ ] ⚠️ **`body_contact_and_battles.md` is 1,780 lines and it read the three briefed items plus the
      summary layers.** *"A dangerous sentence in the blocking, slew-footing or bench-clearing
      sections whose heading gives no clue would have passed me, and the brief did not point at
      them."* **The brief is the coordinator's; that gap is mine.**
- [ ] **Everything above is a RULEBOOK check.** *"The corpus can teach a technique that is legal in
      all five books and still concuss somebody through bad execution, and no grep I ran would say
      so."*

### 🔴 THE POINTER-BOTH-WAYS AUDIT — four Majors, and TWO POINTED AT DOCUMENTS SAYING THE OPPOSITE

**Most pointers held, and they were read rather than cleared on resolution** — the nine named
breakouts (*"nine, no more, no fewer"*), the lock-whichever-winger-is-highest variant honoured twice,
the 1-2-2/trap distinction, the five-man rotation honoured at six places, the F3 weak-side default
carried word-for-word in **both** `center.md:354` and `winger.md:401` with the stacked alternative
and a pointer back. ⚠️ **One pair was diffed and is CHARACTER-IDENTICAL in both directions**
(`forechecking_systems.md:815-818` ↔ `neutral_zone_systems.md:317-320`).

#### M1 — a three-way coaching split pointed at two documents, NEITHER of which carries any of it

`forechecking_systems.md:617` named three arrangements, told the reader *"Ask which of the three your
team runs"*, and sent them to `defender.md` and `risk_management.md`. ⚠️⚠️ **`defender.md:532` states
the OPPOSITE arrangement** — *"the weak-side defender holds back to protect against an odd-man
rush"* — where the pointer sent the reader for a weak-side defenceman who *slides across to cover
both points*. It says **nothing** about who replaces the pinching defenceman, nothing about F3
recovering to the blue line, nothing about a pinch conditioned on F3's call. `risk_management.md`'s
pinch material is the **centre-high vs centre-below-the-goal-line read — a different question.**
**All three actually live in `offensive_zone_play.md`** (`:801` facts, `:809` body). **Repointed.**

#### M2 — the pointer named a document as the model of the pairing the SAME PARAGRAPH calls the failure

`:155` said `center.md` *"describes exactly that"* for an aggressive hunting F1 — **two sentences
before saying *"a hunting F1 with a sealing F2 leaves the middle wide open."*** ⚠️ **`center.md:345`
describes a STEERING F1** (*"Take a deliberate angle — **steer** them toward one side"*) **with a
sealing F2 at `:353`.** So the reader was told the position document models the pairing this document
calls expensive. **Repaired in the describing sentence; `center.md` was correctly NOT edited.**

#### M3 — the 1-3-1 line-of-three survived attack as CONVENTION, and was labelled rather than deleted

- ⚠️ **No source on disk mentions the 1-3-1 at all** — `grep -ril '1-3-1' sources/` returns
  **nothing** across all extractions, `iihf_coachdev_off_tactics.txt` included.
- ⚠️ **`read-maker` is a word this corpus INVENTED for itself** — five places, all in this
  repository, **zero in `sources/`**.
- **The caption was confirmed NOT to be corroboration** — same words, same file family.
- ⚠️ **The one independent-looking corroboration is a sibling, and it is BETTER HEDGED than the
  original:** `neutral_zone_systems.md:195` carries *"(Some coaches put a forward in the middle and
  a defenceman on a wall…)"* — **and `forechecking_systems.md:390` carried only the *"cannot be
  three forwards"* half.** ⚠️ **The missing alternative was LOAD-BEARING**, because the previous
  agent's repair at `:159` scopes F3's job to the arrangement: **a reader whose team puts a forward
  in the middle was told the middle is not theirs.** Labelled and bounded, **nothing deleted**
  (non-negotiable 3). Facts line lengthened rather than added — **the block was at 8/8 coaching.**

#### M4 — a Nordic lineage for the left-wing lock: unsourced, sole-carrier, and its sibling is sceptical

`:456` carried *"used in various forms across Swedish and Finnish hockey before it reached North
America."* ⚠️ **That limb appears in ONE sentence in the whole corpus.** `neutral_zone_systems.md:283`
gives the same history with the Czechoslovak origin and the Barry Smith adaptation and **does not
carry the Nordic leg**, and its verification note names its two sources, **neither credited with
Sweden or Finland.** ⚠️ **`neutral_zone_systems.md:170` flags a structurally identical claim as
traceable only to a self-disclaiming *"Much of it is anecdotal evidence"* sentence.** **The folklore
shape: a plausible European-origin detail attached to the one document without the other's
scepticism.** Retained as *"commonly said"* and flagged. **`source-verifier`: if Wikipedia's *Left
wing lock* or The Coaches Site attests it, the flag comes off.**

#### ✅ M5 — the caption layer, CLOSED BY THE COORDINATOR THIS ROUND

The `forecheck-131` caption is **voiced into `forechecking_systems.md`** and stated the convention
**with no alternative**, while its sister `neutral_zone_systems.mjs:280` already had *"and some
coaches invert that"*. **After M3 the body stated it more carefully than its own diagram.**
**Checked first that the string was not a shared constant — it was not** (`read-maker` appears in
three modules, but this caption text is unique). Repaired to match the sister's strength, module
re-parsed, **`build-diagrams.mjs` run (204 diagrams, 1 PNG re-rendered) so `check_absolutes.py` reads
the new text rather than certifying the superseded caption.**

#### Minors — dispatched to an agent owning the three target files

**m1** `:656` names *"three kinds of dump"* where `zone_entries.md` carries **five** and treats the
soft area dump (`:604`) and the chip past a stepping-up defenceman (`:621`) as **different reads** —
*"a possession play, not a surrender"*. **Folding them loses the read.**
**m2** `:96`/`:85` teach *"I've got F1"* — ⚠️ **not in `on_ice_communication.md`'s register at all**,
and that document keeps a **deliberate count**. *"I'm high"* is there, daggered as undocumented.
**m3** `:836` → `conditioning_and_recovery.md` greps **zero** for `forecheck` — a topic pointer, not
a claim pointer. **Not a dangling claim; recorded.**
**m4** ⚠️ **`defender.md` has NO link back to `forechecking_systems.md`, not even in `Related:`** —
alone among the five siblings. **Caught by accident**, which is the point of the next row.

#### ⚠️ THE FOUR BLIND SPOTS THE AUDITOR NAMED, and two are structural

- [ ] ⚠️ **A claim CONSISTENTLY WRONG IN BOTH DOCUMENTS is invisible to this method.** M3 is the
      near-miss: it proved the corpus is **internally consistent** about the 1-3-1, *"which is
      exactly the property the style guide warns looks like rigour."* **Only a coaching source that
      describes the line of three settles it, and there is none in `sources/`.**
- [ ] ⚠️ **AN ABSENT CROSS-REFERENCE LEAVES NO TRACE TO GREP FOR.** m4 was the only instance caught
      and it was caught by accident. **There is no tool for this.**
- [ ] 🔴 **THREE POINTERS WERE VERIFIED ABOUT NOTHING, and they are the highest-stakes in the file** —
      `:721` (England Ice Hockey 22.3 vs the In-House Rules' silence, behind `uk_rules.md`) and
      `:739`/`:774` (**goaltender contact and freeze permissions**, behind `goaltender.md`). **Both
      files were barred to the auditor because other agents held them.** ⚠️ **"If the next round
      changes only where it looks, that is where."**
- [ ] **M1–M4 are four sentences written into a document read for two hours. They pass every gate,
      which proves nothing. Reviewed by nobody.** ⚠️ **M2 changed prose in a paragraph about how hard
      F1 goes at a carrier — contact-adjacent new text. `safety-reviewer`.**
- [ ] **`rules-verifier` hand-off, a SHAPE rather than a claim:** `defender.md` states the
      short-handed icing exemption in **four** facts lines (`:630`, `:670`, `:672`, `:673`), and
      `neutral_zone_systems.md:49` states it again **in the facts layer with a *"see Special Teams,
      which covers the conditions"* pointer** — ⚠️ **voiced alone, a listener gets the rule and
      cannot reach the conditions.** `neutral_zone_systems.md:14` does carry the head-count condition
      inline in Key focus, **so the substance is not lost** — but this is the bare-rule-with-a-
      dangling-exception pattern.

#### ✅ Two disclosures re-attacked and UPHELD — recorded because non-negotiable 4 had been read as "never test one"

**`center.md:26`** (*"no study separates centres from wingers on distance… the comparison is unrun
rather than impossible"*) — the folklore was searched for corpus-wide and **found only where it is
debunked**; the Lignell 2018 counter-finding is in the facts layer **and** the Sources trailer with
its PMID, and `defender.md:722` restates it with the quoted percentages and points back. **The style
guide's own worked example, in good order both ways. Do not touch it.**
**`forechecking_systems.md:63`/`:74`** — the Novet figures appear **nowhere outside their owner**,
and both internal restatements **carry the qualification**. **No bare restatement anywhere.**

#### ⚠️ A premise in my brief the auditor could not reproduce — and the explanation is timing

I gave *"`special_teams.md` and `breakouts.md` each say the other covers the power-play breakout"* as
the motivating example. **By the time it looked, `breakouts.md:773` carried the new section** —
because the other agent had just written it. ⚠️ **AND THE ORIGINAL PREMISE WAS WRONG ANYWAY, as that
agent established independently: there was no mutual pointing, there was MUTUAL SILENCE.** **Two
agents caught the same bad premise by different routes.**

### ✅ THE 2-1-2 CARDINAL-RULE FLAG WAS A FALSE POSITIVE — and reading it found a real Major

⚠️ **The flag — that `forechecking_systems.md` presents only one F3/D arrangement for the 2-1-2 —
DOES NOT HOLD.** The corpus already names the alternative **in four layers**: body `:294`
(*"**Which side F3 sits on is a genuine coaching split, so find out which your team runs**"*, naming
weak-side default against the strong-side stacked variant and what each buys), the facts layer
`:278` as a `Convention:`, Common Mistakes `:885` (*"Know which you are running before you decide
someone is out of position"*), and the `forecheck-212` **caption**, which names three details as
coaching choices — **plus a second diagram, `forecheck-212-stacked`, that draws the alternative.**
⚠️ **The external site's arrangement is the corpus's own default plus its named press variant. It
was never a missing variant.** **Tenth time today the answer was already written down.**

**The both-defencemen half is handled too, and the section is exemplary** — `:591-617` names a real
alternative without inventing it (*"a five-man rotation or … a standing green light … That is a real
system, not a mistake; it just is not the one this document assumes. Ask which yours is"*), gives
**three** arrangements for the vacated point, and carries the hedge into Key Takeaway 6 and Common
Mistakes. **Siblings checked and adequate:** 1-2-2, 1-3-1, 2-3 / left-wing lock, 1-4, full press.

#### 🟠 THE REAL FINDING — an internal contradiction between two sections, repaired

`### The three jobs, in general terms` stated F3's job as taking away **the middle of the ice**,
unscoped — while `### 1-3-1` in the **same document** assigns the middle to **a defenceman** and
puts F3 **on a wall** (`:390`, *"conventionally F2, F3 and one defenceman, with the defenceman in
the middle as the read-maker and the two forwards on the walls"*), as does the `forecheck-131`
caption.
⚠️ **The facts line `:148` is the dangerous half: voiced ALONE with a 300 ms break either side, a
listener gets "F3 takes away the middle" as F3's job FULL STOP.** The nearest hedge (`:151`) does
not reach the claim. **Repaired in both layers**, scoped to the system, no fact evicted, no `Rule:`
line touched. **Evidence was the document's OWN prose and caption — nothing imported from the
external site or from memory.**

#### 🔴 OPEN — the pointer-both-ways check was NOT run, and the agent said so plainly

- [ ] ⚠️ **`forechecking_systems.md` tells the reader that `neutral_zone_systems.md`,
      `offensive_zone_play.md`, `center.md`, `winger.md` and `defender.md` carry the variants —
      and NOBODY HAS CONFIRMED THEY DO.** ⚠️ **A pointer can propagate an arrangement outward from
      a document that never states it**, which is the dangling-"covered over there" failure in its
      outbound form. **Files are now free; dispatch it.**
- [ ] ⚠️ **IS THE 1-3-1 "conventionally F2, F3 and one defenceman" SUPPORTED BY ANY SOURCE ON
      DISK?** The agent verified it **only against the document's own caption, which shares its
      wording and may share its origin.** ⚠️ **That is not corroboration, it is the same claim
      twice** — and it is now load-bearing, because the repair above scopes F3's job to it.
      **Possible folklore. Attack it.**
- [ ] **Not read line by line:** `forechecking_systems.md:621-881` (Off a Dump-In, The Trapezoid,
      Choosing a Forecheck by Game State, Reading the Opposition's Forecheck) — **grepped only**,
      so *"a bare arrangement statement phrased without the words I searched for would have
      survived."*
- [ ] **`facts-reviewer`:** `:148` is now a longer `Position:` line — **read it voiced alone.**
      **`site-reviewer` / caption owner:** the `forecheck-212` and `forecheck-131` captions were
      read as evidence and **neither was edited**; the 1-3-1 caption is consistent with the repair.

### 🟠 OPEN — "the Proper Authorities" census run; ONE agent, FIVE files, NOT split across waves

**Casebook Rule 28 (`:378-388`):** *"Where there is reference to 'The Proper Authorities' within the
IIHF Rulebook, this shall refer to the EIHL Department of Player Safety (DOPS) and EIHL Hockey
Operations."*

**Coordinator census, 22 September 2026 — 8 occurrences in 5 files:**
`foundation/rules_primer.md` 3 · `systems/defensive_zone_coverage.md` 2 ·
`technique/body_contact_and_battles.md` 1 · `off-the-ice/equipment.md` 1 · `foundation/uk_rules.md` 1.

The corpus quotes the phrase from IIHF 86.6 and 5.6 — *"a report of the incident must be submitted
to the Proper Authorities"* — **and never says who they are.** For an EIHL reader the Casebook now
answers it.

- [ ] ⚠️ **DISPATCH AS ONE AGENT OVER ALL FIVE FILES, NOT AS A PER-FILE ROW.** Three of the five
      (`body_contact_and_battles.md`, `equipment.md`, `uk_rules.md`) were held by live agents when
      the census ran, so it could not go out this wave. **Splitting it across two waves would
      reproduce the exact propagation failure every critical in round 10 was — a correction that
      reaches some sites and stops.** Wait for the files, then send one agent.
- [ ] ⚠️ **THE ANSWER IS SCOPED TO THE EIHL AND MUST SAY SO.** Rule 28 binds EIHL competition. **It
      does NOT tell an EIH, SIHA, NIHL or recreational reader who their proper authorities are**,
      and writing it as though it did would be the cardinal-rule failure in its administrative form.
      **A reader outside the EIHL still has no answer, and the honest text says that.**

### ✅ `equipment.md` — the neck-protection tier now reaches four voiced layers, and an attribution was caught in passing

**Both relayed defects confirmed against primary text before acting.** Casebook 9.5 (`:255-272`)
opens by listing *"neck laceration protection not being properly worn"* among the things officials
respond to, then sets the ladder: warning → penalties under Rule 12 → *"If the Player refuses, they
shall be assessed a minor penalty for 'Delay of Game' and if they return to the ice without making
the change, they shall be issued a misconduct penalty. Should this happen a third time, the Player
shall be issued a game misconduct penalty."*

⭐ **THREE THINGS THE BRIEF DID NOT CARRY, AND THEY MATTER:**
1. ⚠️ **The 9.5 ladder is the IIHF's OWN wording, verbatim** (`iihf_rules_v1.1.txt:1225-1231`).
   **The EIHL's contribution is the OPENING EXAMPLE LIST**, adapted from IIHF **202.7** — the
   Casebook **adds `no mouth guard` and `neck laceration protection not being properly worn`** and
   re-hosts it under 9.5, **which is what routes neck protection onto this escalation instead of
   202.7's flat ten-minute misconduct.** Flattened, that phrase returns **0** in
   `iihf_rules_v1.1`, `iihf_rules_2026-27`, `iihf_situations_v1.1` and `eiha_inhouse_2026-27`, and
   **1** in both EIHL extractions. **A genuinely EIHL-only construction.**
2. ⚠️ **THE ESCALATION IS CONDITIONAL, NOT AUTOMATIC** — rungs two to four are triggered by
   *refusing* and by *returning to the ice without making the change*, **not by a bare third
   violation.** *"A third offence is a game misconduct"* flat **would have been an overstatement**,
   and the agent said so rather than writing it.
3. ⚠️ **The Casebook prints 9.5 and 9.12 SIDE BY SIDE WITH NO SENTENCE RECONCILING THEM.** Disclosed
   rather than ordered by invention; the reader is given the safe reading and told it is a reading.

**Why the defect survived, and it is instructive: `equipment.md` ALREADY CARRIED the 9.5 ladder —
attached to the MOUTHGUARD bullet.** The text was in the file, on the wrong item. **A document grep
for the ladder would have cleared this file.**

**The mouthguard self-contradiction:** the **lead** was repaired, not the substance —
*"mandatory for every skater, with no cage exemption"* / *"excuses no skater"* / *"Goalkeepers are
the one exception the Casebook does write"*.

⚠️ **`equipment.md` HAS NO ` ```facts ` BLOCK AT ALL** (0 fences; `check_facts.py` reports 26
in-scope documents and this is not one), so its voiced layers are Key focus / Overview / Common
Mistakes / Check yourself / Key Takeaways. **The tier now reaches four of them**, verified through
the real renderer (72 chunks, de-tagged SSML read). ⚠️ **`:20` Key focus had the word *"only"*
before *"minor"* — voiced alone that read as a CEILING. Deleted.**

#### ⭐ An attribution drift caught inside a hunk the agent was already editing

Key Takeaway 5's quotation *"If a neck guard comes off during play, the player must leave the ice
and cannot retrieve it"* is the **IHUK In-House Rules** (`eiha_inhouse_2026-27.txt:278`), **not the
Casebook** — flattened it returns **0** in both EIHL extractions. It sat immediately after the
Casebook clause and **read as the Casebook's**. ⚠️ **The agent's own insertion would have made it
worse.** `equipment.md:712` already attributed it correctly, **so this was layer-local attribution
drift — the exact class `check_quote_drift.py` is blind to, because it keeps the closest match
across ALL sources.**

- [ ] 🔴 **`safety-reviewer` REQUIRED BEFORE COMMIT — the agent asked for it by name.** It is
      protective equipment **and** a penalty tier that ends a player's game. Two specific questions
      it raised about its own text: **(a)** whether the conditional framing (*refuses* / *returns
      unchanged*) is the right balance between accuracy and a listener hearing one sentence;
      **(b)** whether *"the safe reading is 9.12 for turning up without one and 9.5 for being told
      and not fixing it"* **is too confident given the Casebook reconciles nothing.**
- [ ] **`uk_rules.md` should be checked for the same stop-at-9.12 defect** — and `:410` carries the
      In-House neck-guard rule, making it the natural host for the 9.5 ladder in full. **It is also
      the file `equipment.md:120` now sends readers to.**
- [ ] **`goaltender.md`:** the **throat-protector sentence is printed TWICE in the Casebook**, at
      9.5(4) and 9.12 (`:317-320`, `:383-384`), identical but for *"of material"* / *"of a
      material"* — **a document quoting one should cite which.** Also: the goalkeeper mouthguard is
      **recommended, not mandatory**.
- [ ] ⚠️ **The agent's own bound: it read the Rule 9 sections and the five summary layers, so
      A STOP-AT-RUNG-ONE DEFECT OF THE IDENTICAL SHAPE MAY SIT IN THE HELMET, FACIAL-PROTECTION OR
      JEWELLERY BULLETS**, which were not compared against Casebook 9.5 clause by clause.
- [ ] **4 `check_quote_drift` hits in `equipment.md` are PRE-EXISTING and none is the agent's** —
      lines 113, 446 (×2) and 711, `hc.txt`/`iihf_rules.txt` case-and-terminal-period drift.
      Reported, not repaired; outside its brief.

### ⭐ THE RELAY PRODUCED A DEFECT IT DID NOT CONTAIN — and corrected the coordinator twice on the way

**Two coordinator errors, both recorded because both would have propagated:**

⚠️ **(1) I wrote that the boarding/charging/elbowing and Rule 46 sections *"were, until an hour ago,
unread by anyone."* FALSE.** The contact agent's brief was **not** short in that way — it named all
of them and had already read and published them. **The other agent's brief was short; this one's was
not.** ⚠️ **What actually happened is better than a discovery: TWO AGENTS INDEPENDENTLY READ THE SAME
THREE SECTIONS AND REACHED THE SAME TEXT.** **That is corroboration, and it is the only independent
check either read has had. Record it as such.**

⚠️ **(2) My jersey summary was incomplete IN THE DIRECTION THAT MATTERS, and the agent declined to
publish from it for that reason.** Casebook 46.13 (`:578-600`) carries **two reliefs my list
dropped**: *"If the player loses his jersey despite the tie down remaining intact and attached to
the pants, the game misconduct is not applicable"* (with a reporting duty to the League), and a
separate clause protecting a player *"when the opponent has been identified as an instigator"* if an
opponent or official removes his jersey. ⚠️ **Anyone writing *"jersey off before an altercation =
2 + GM"* from my list alone would have shipped the tariff WITHOUT ITS CARVE-OUTS — a rule travelling
without its exception, which is this corpus's signature defect, manufactured by the coordinator.**

**One detail neither relay carried:** each occurrence of the game-misconduct sentence is prefixed by
the label *"Game Misconduct Penalty - "*. The published quotation starts at *"When a major
penalty…"*, which is the operative sentence.

#### 🟠 THE DEFECT THE RELAY PRODUCED — a rule quoted without the sentence after it, in `content/`

Following the relay's pointer to the In-House Rules, the agent found **its own file** quoting
`eiha_inhouse_2026-27.txt:388-390`'s first sentence and **dropping its second**:

> *"Fighting shall be penalised with a 5-minute Major Penalty. **An unwilling combatant may be
> awarded (at the referee's discretion) a minor OR a major penalty (2 OR a standalone 5 without a
> game misconduct)**"*

⚠️ **A bare five with NO EJECTION — relief in a section that spends several hundred words explaining
that neither IIHF edition shelters a player who fights back.** ⚠️ **`grep` across ALL of `content/`
returned 0: the limb was nowhere in the corpus.** Fixed in both layers with the discretion and the
scope stated so it cannot be read as a guarantee. ⚠️ **The agent first wrote the facts line pointing
at *"this section elsewhere"* — a structural pointer a listener never hears — and rewrote it to name
the thing.** **The document's scoping was already correct** (In-House Section 6 is headed
*"Applicable Leagues: NIHL (all leagues), SNL, and BUIHA Varsity"*), so there was no flat "British
hockey" fighting claim to repair.

#### 🔴 THE GENERALISATION, AND IT IS THE MOST VALUABLE THING IN THE REPORT

- [ ] ⚠️⚠️ **RE-READ EVERY In-House Rules QUOTATION IN THIS CORPUS AGAINST ITS FULL BULLET.** The
      agent's own account of why it missed this on its first pass: *"I was diffing the Casebook
      against the IIHF, not auditing what the file already said about the British layer."*
      ⚠️ **NOTHING IN `scripts/` CAN SEE THIS. The quotation was ACCURATE, so `check_quote_drift`
      scored it clean — an INCOMPLETE quotation is invisible to every gate.** **This is a reading
      pass, and it is owed for every British-layer quotation, not just fighting.**
- [ ] **`uk_rules.md` (do not open — awaiting staging): check whether it quotes `:388` and stops at
      the full stop, the way `body_contact_and_battles.md` did.** Same for the Casebook 46.13 jersey
      tariffs **with both reliefs**.
- [ ] **Unresolvable from anything on disk:** whether the In-House unwilling-combatant relief and the
      EIHL's own fighting tiers **can both be right for a player who moves between competitions** —
      different documents, different leagues, and **nothing on disk maps a player across them.**

### 🔴 CASEBOOK WAVE 3 — contact and penalties. THE HYPOTHESIS HELD, and four claims were wrong for an EIHL reader

**The brief was short by one again** — `RULE 63 DELAYING THE GAME` (`:684-718`) sat inside the
assigned range and was unnamed. Read; no contact content.

#### 🔴 SAFETY — a DISCRETIONARY game misconduct becomes MANDATORY, and the trigger moves

`:496-508` prints one sentence **three times**, under Rule 41 Boarding, Rule 42 Charging and Rule 42
Elbowing:

> *"When a major penalty is imposed under this rule for a foul resulting in an injury to the face or
> head of an opponent, a game misconduct **shall** be imposed."*

Against IIHF 2026/27 **41.4** (`:3968`), **42.4** (`:4021`) and **45.4** (`:4121`), all three of
which read *"The Referee, at their discretion, **may** assess a major penalty and a game misconduct
penalty…"* keyed to **reckless endangerment**.
⚠️⚠️ **TWO CHANGES, NOT ONE: *may* → *shall*, AND the trigger moves from ENDANGERMENT to a FACE OR
HEAD INJURY.** **The corpus said, twice in the body and twice in facts lines, that under the IIHF
*"that game misconduct is not automatic"* — true of the IIHF, FALSE IN THE EIHL.** All four sites
repaired. **Hand to `safety-reviewer`.**

#### 🟠 Fighting — the EIHL departs DOWNWARD, opposite to the section's whole framing

Casebook **46.1** (`:512-518`): *"Willing combatants will be penalised with **at least a Major
Penalty**… Note for their **2nd Major Penalty** an Automatic Game misconduct will be assessed"* —
against IIHF 46.1 (`:4142`), where the automatic game misconduct is *"the standard penalty"*.
Casebook **46.10** (`:551`) gives the instigator **2+5+10**, *the NHL 46.11 tier exactly*, where
IIHF 46.10 (`:4258`) attaches an automatic game misconduct; it rises to **2+5+20** in the final five
minutes or overtime. **46.2 Aggressor** (`:536`) composes instigator-and-aggressor as **2+5+10+20**
against the IIHF's 2+2+5+20 — **a different composition**, and the Casebook writes **no standalone
aggressor penalty**, so IIHF 46.2 governs that case.
⚠️ **"2nd Major Penalty" IS NOT SCOPED — in-game or across the season is not stated.** Recorded as
printed, with the reader told not to do arithmetic on it. ⚠️ **DO NOT LET ANYONE RESOLVE THIS
WITHOUT ASKING THE LEAGUE.**

#### ⭐ Rule 69 — the relay stopped an over-resolution, and the agent said so

⚠️ **Its first draft wrote *"costing the goal, full stop"*.** The message routed from the goalkeeper
wave stopped it; it then read **IIHF 69.7** itself (`iihf_rules_2026-27.txt:5703-5706`) — *"In a
rebound situation, or where a goalkeeper and attacking Player(s) are simultaneously attempting to
play a loose puck, **whether inside or outside the goal crease**, 'incidental contact' with the
goalkeeper will be permitted, and any goal that is scored as a result thereof will be allowed"* —
**which is the net drive the section teaches.** The published text now states what the Casebook
adds, that it is headed an *Addition* rather than a replacement, that it neither repeats nor repeals
69.7, and that **nothing on disk says how the two fit** — then tells the reader to ask their
officials and meanwhile expect the crease criterion against them.
⚠️ **THE AMBIGUITY IS LEFT OPEN ON PURPOSE. A LATER AGENT MUST NOT "TIDY" IT INTO A RULING.**

#### Three negatives ATTACKED rather than assumed — and the EIHL checking gap SURVIVES

`check` · `checking` · `bodycheck` · `bodychecking` all **0** whole-book: **it is a playing-rule
document, not a Rules of Competition**, so every *"settles nothing for the EIHL"* sentence stands.
**Nothing on Rule 43 (checking from behind) or Rule 48 (check to the head)** — so those remain the
IIHF's unmodified, and the document's 43.3 and 48.3 claims stand. **`casebook` returns 0 in
`eiha_inhouse_2026-27`, `eiha_inhouse`, `eih_rr` and all four IHUK RoCs.**
⚠️ **The agent first wrote *"no other British competition adopts it"* and CUT IT BACK to what it had
actually searched.** That is the discipline this corpus is built on.

#### An edition answer — narrow, and explicitly fenced

The Preamble (`:110-112`) names *"the official **2026 - 2027** IIHF Rulebook"* as residual authority,
so **for an EIHL reader the 2026/27 book binds.** ⚠️ **This does NOT touch the corpus's open edition
question**, which is scoped to the IHUK In-House Rules adopting Version 1.1 (the 2025/26 book) for
NIHL/SNL/BUIHA. **That disclosure was upheld, not stripped.** ⚠️ **And it means
`.claude/agents/rules-verifier.md`'s instruction to cite `iihf_rules_v1.1.txt` "for the BRITISH
layer" is WRONG FOR THE EIHL** — coordinator's file, open row.

#### 🟠 OPEN — four items with no home, found because a sweep looked where nobody was scoped

- [ ] ⚠️ **Rule 86.6 (`:977`) bans CONTACT in the warm-up:** *"Physical contact between players on
      opposing teams is not allowed during the warmup and players are not allowed to skate over the
      centre red line during this time"* — violations bring suspension and/or fine, **and expose the
      Head Coach who *"instigated (started) or provoked such activity"*.** ⚠️ **A CONTACT RESTRICTION
      IN A CONTACT DOCUMENT'S BLIND SPOT, found by grepping `contact` across the whole book — nobody
      was scoped to look there.** ⚠️ **The agent's own note: *"the same sweep on another term would
      probably point somewhere else."* Do that sweep.**
- [ ] **Rule 47 head-butting (`:674-681`) — two EIHL examples the IIHF does not enumerate**, both
      **double minors**: *"a player who fakes a head butt at an opponent"*, and *"a player that
      forces his head, helmet or visor and pushes his head with forces against an opponent's head,
      helmet, or visor."* ⚠️ **The second is a SCRUM / NET-FRONT act — head-to-head pushing after a
      whistle is four minutes in the EIHL.** **NOT added: the document has no head-butting section,
      and adding one is a new section, not a reconciliation.** `safety-reviewer`.
- [ ] **Rule 64 diving/embellishment (`:719-768`)** — a minor; *"the great majority of all diving
      infractions happen around the potential of 3 calls (Hooking, Holding and Interference)"*;
      officials told *"we would prefer … that you ONLY take the player who dived"*. **Owner:
      `risk_management.md` / `rules_primer.md`.** ⚠️ **And `uk_rules.md:521` states the In-House tier
      as minor + 10 while the EIHL's is a minor — a divergence nobody has reported.**
- [ ] **`eiha_inhouse_2026-27.txt:408`** — *"Adding a misconduct to a minor. The required call is now
      2 plus 10"*. **Context not read.**

#### ⚠️ The bound the agent put on its own work, and it is the honest one

*"Whether the EIHL is even the right audience for this document. It is a professional league; the
corpus teaches beginners. I scoped every addition explicitly to it, but **whether it earns the space
is an editorial call I made alone, and `content-reviewer` has not seen it.**"* ⚠️ **That is a real
question and it is not the agent's to settle. Put it to `content-reviewer` before the commit.**
**Also:** `check_quote_drift` **caught one of its own paraphrases inside quote marks** — *"is able
to play his position"* where the source reads *"Is the goaltender able to play his position?"* —
corrected with a disclosed `[i]`. **Clean fragments 1049→1053: every new quotation matched.**

### ✅ CASEBOOK WAVE 2 — goalkeeper, equipment and game operations; `goaltender.md` repaired

⚠️⚠️ **THE BRIEF WAS SHORT IN THE AGENT'S OWN SUBJECT AREA, AND THAT IS A NEW SHAPE.** It named
Rule 11 (Goalkeepers Equipment) and Rule 12 (Illegal Equipment) as the equipment sections. **The
substantive equipment rule is Rule 9 (`:254-341`), which the brief did not name at all** — while
**11.9, 12.4 and 12.5 are one sentence each and all three say the same administrative thing**
(*"EIHL Hockey Operations is the determining body where reference is made to the IIHF"*).
**An agent working the brief's list literally would have read three administrative stubs and missed
the substantive rule, including its two goalkeeper carve-outs.** ⚠️ **A brief can be short in
exactly the area it was written to cover.** Ninth relayed-list defect today.
**Rule 64 (Diving) also carries a goaltender passage and sat outside both ranges.**

#### 🔴 THE HIGHEST-VALUE FINDING — EIHL Rule 69 is a REAL divergence, and it is an ATTACKER hazard

`:770-778`, identical in the plain twin at `eihl_casebook.txt:742-749`, headed **"EIHL Addition to
the IIHF Rule Book"** — three criteria for goaltender interference, of which criterion 3 reads:

> *"Was the contact made inside (or outside) of the crease? **Contact in the blue paint area calls
> for disallowing a goal.**"*

⚠️ **On its face it carries NO incidental-contact carve-out.** IIHF 69.7 lets a goal stand on
incidental contact in a rebound or loose-puck scramble; **the Casebook does not repeat that, and
does not say whether criteria 1 and 2 qualify criterion 3.** **So a net drive that is legal under
IIHF 69.7 may kill the goal in the EIHL.**
⚠️⚠️ **THE AGENT DELIBERATELY DID NOT WRITE THAT 69.7 IS REPEALED** — the section is headed an
*Addition*, not a replacement. It wrote that the two must be read together and that a reader should
ask their officials. **That restraint is correct and must be preserved: do not resolve an ambiguity
the book leaves open.** ⚠️ **Routed to the live holder of `body_contact_and_battles.md`, because it
is a consequence for the ATTACKER, not the goalie.** Also needs `safety-reviewer`.

#### Confirmed, quoted and written into `goaltender.md`

- **Rules 37 and 38 — the EIHL KEEPS video review and the coach's challenge**, which the IHUK
  In-House Rules delete for EIH and SIHA competition (`:444-469`, `:476-488`); 38.5 allows a
  challenge *"at any time"*, 37.3 limits review *"to the scope of the technology available"*, and
  37.7 says *"In EIHL events Goal Judges are not required."* ⚠️ **The corpus's passage was CORRECTLY
  SCOPED to EIH and SIHA and was not wrong** — but it sat with no EIHL limb beside it and a caveat
  saying the Casebook had never been read, **leaving a reader to generalise.**
- **Rule 64** (`:743-767`) — a goaltender-specific embellishment passage naming two forms, and DOPS
  *"has the ability to fine players … regardless of the call at ice level"*. **Extends the corpus's
  existing 64.1 claim; does not contradict it.**
- **Rule 84.4** (`:942-950`) — an EIHL amendment letting the shooting team's goaltender remain in
  their end zone, with a **NO goal and a misconduct** if the shooting side distracts the defending
  goaltender. ⚠️⚠️ **THE AGENT DRAFTED *"you take ten minutes"*, CAUGHT ITSELF, AND REPLACED IT —
  the Casebook does not say WHICH member of the shooting team takes the misconduct.** The document
  now says so and warns the reader not to assume it is theirs. **A self-caught fabrication.**
- **Rule 10.5** (`:343-354`) — *"EIHL - No request for measurement of a player's stick will be
  allowed"*; 10.6 and 10.7 both *"EIHL - N/A"*. **So in the EIHL an illegal paddle cannot be called
  by measurement request at all** — bears on `goaltender.md`'s paddle-length material.

#### ⭐ A SECOND STALE DISCLOSURE FOUND ONLY BY A LAYER TEST — the method working as designed

The caveat saying *"The EIHL Casebook has not been read"* was rewritten. ⚠️ **A SECOND COPY of the
same claim — *"the League runs its own Casebook that nobody here has read"* — sat at `:548` in the
trapezoid passage, and the RENDERED SSML surfaced it. A grep for the caveat's wording would not
have found it.** ⚠️ **The disclosure was NOT stripped: it was replaced with what was actually
searched and what is still not covered.**

#### Negatives EARNED, not assumed — both extractions, flattened and de-hyphenated

`trapezoid` · `restrictedarea` · `freez` · `fallingonthepuck` · `brokenstick` · `creasearea` ·
`paddle` · `icing` · `shorthanded` · `leavehiscrease` · `rule24` · `27.5` — **all zero.**
`altercation` scores 23, **all Rule 46 fighting with no goalkeeper mention, verified by reading
`:510-674`.** ⚠️ **One `27.6` hit in the layout file is a FLATTEN ARTEFACT across a line break, not
a citation — there is no Rule 27 in the book.** **21 quotations independently re-verified against
both extractions and the rendered document: 0 failures.**

#### 🟠 OPEN, routed or unresolved

- [ ] **`equipment.md:129` CONTRADICTS ITSELF INSIDE ONE BULLET** — headed *"mandatory, and with no
      way out of it"* and *"the Casebook excuses nobody"*, then two sentences later correctly states
      *"Goalkeepers are the single exception"* with the right quote (`:276-287`). **The substance is
      right; the BOLD LEAD is the defect, and it is the limb most likely to be quoted onward — or
      voiced alone in a facts line, where the correction never reaches the listener.** ⚠️ **Routed
      to the live holder of `equipment.md`.**
- [ ] ⚠️ **THE BOOK'S OWN NUMBERING ERROR: it prints "RULE 42" TWICE** — `:500` Charging and `:505`
      Elbowing. **Elbowing is Rule 45.** **Record it, do not repair it**, per this repository's
      convention for a source's own error. **A reader quoting "EIHL Rule 42" for elbowing to an
      official would be quoting charging.** Routed to the holder of `body_contact_and_battles.md`.
- [ ] ⚠️ **THE VERSION DISAGREEMENT NOW HAS A SHARPER EDGE, and it is `source-verifier`'s call.**
      `uk_rules.md` and `equipment.md` both cite the book as *"Version 1.1 of 8 September 2026"* —
      **defensible, since the front-page version table (`:5-6`) and the filename agree** — **but
      every page footer of the body text they quote reads `SECTION D VERSION 1.0 010826`.** So the
      citation and the quoted pages name different versions.
- [ ] **The resolving warm-up sentence appears TWICE and the two copies DIFFER.** Rule 86.6
      (`:992-993`) carries the *"if they see the offence take place"* limb; **the Preamble copy at
      `:120-122` does NOT, and reads as unlimited.** ⚠️ **A reader quoting the Preamble version
      states a broader authority than the rule does.**
- [ ] **Could not be settled either way:** whether EIHL goaltender-interference calls fall within
      the coach's-challenge scope. **Rule 38 does not enumerate challengeable situations and defers
      to the IIHF**, and 37.3's *"technology available"* caveat means the answer may vary by arena.
      **Written into the document as an open question rather than resolved** — correct handling.
- [ ] ⚠️ **A BOUND ON BOTH CASEBOOK WAVES: the text extractions were read, the PDF PAGES WERE NOT
      RENDERED.** `pdftoppm` was not run. **Any table, figure or sidebar that is an IMAGE in the PDF
      returns zero from both extractions and looks exactly like an absence** — and the 690 KB / 46 KB
      ratio does not by itself exclude one. ⚠️ **Every negative above inherits this bound.** This is
      the `crt6.txt` failure shape, and it has been filed four times in this repository.

### ✅ CASEBOOK WAVE 1 — teams, uniforms, discipline, Section 11 read; `uk_rules.md` repaired

**Read line by line:** `:1-136` (version table, contents, Preamble) · `:138-359` (Rules 5, 6, 7, 9,
10 — every subsection the contents names) · `:376-405` (Rule 28, Rule 30.1 opening) · `:600-709`
(Rule 46 *Fines and Suspensions*, *Automatic Supplementary Discipline (DOPS)*, Rule 47, Rule 63.5) ·
`:995-1008` (Section 11).

⚠️ **THE BRIEF'S HEADLINE AND ITS LINE RANGES DISAGREED, AND THE AGENT CAUGHT IT.** The brief said
"TEAMS / UNIFORMS / **DISCIPLINE** / WOMEN'S HOCKEY" — **and the ranges it gave excluded every line
of the discipline material**: Rule 28 at `:378`, Rule 46 *Fines and Suspensions* at `:605`, DOPS at
`:653`, all inside the 342–1002 gap assigned to nobody. It read them rather than return with the
named section unread. **Eighth relayed-list defect today, and a new shape: the brief contradicted
itself.**

**Confirmed verbatim, with the quoted fragments located:** the Preamble's supersession sentence
(`:109-112`); Casebook 9.12's scope, warm-ups-and-practice extension and warning-then-minor tier
(`:327-335`); the *"must not be modified or alternated"* clause at 9.5 (`:317-321`); and
`equipment.md:129`'s mouth-guard requirement (`:276-287`).

**BOTH STANDING NEGATIVES HOLD, measured in both extractions flattened:** `rule27` · `restrictedarea`
· `trapezoid` · `check` · `checking` · `bodycheck` · `bodychecking` all **0**; `chinstrap` · `cm` ·
`certif` all **0**.

#### ⭐ Section 11 — the negative did not break, it STRENGTHENED

The section is two lines in its entirety: *"**Section 11 - Women's Ice Hockey** / Not applicable to
EIHL Competition"* (`:1002-1003`, confirmed against PDF page 27). **And IIHF Section 11 is where
Rule 101.1 *Illegal hit in women's hockey* lives** (`iihf_rules_2026-27.txt:7591-7593`) — **the only
place the IIHF book restricts checking at all**, as `uk_rules.md:395` already says. So the one IIHF
section carrying a checking restriction is the one the Casebook marks not applicable. ⚠️ **The agent
recorded this as evidence and explicitly did NOT overstate it as the EIHL "disapplying" a
restriction that never reached a men's league.** Correct restraint.

#### 🟠 The defect found was exactly the class predicted — an EIHL claim resting on IIHF text alone

`uk_rules.md:146` argued EIHL warm-up equipment was *"already covered for every player by the IIHF
book itself"*, citing **IIHF 9.5 and IIHF 5.6**. ⚠️ **The Casebook writes its OWN 9.5 (`:259-325`)
and its OWN 5.6 (`:169-205`), and neither carries either sentence** — Casebook 5.6 is the centre-red-
line-in-warm-up and 40-to-20-minute clock; Casebook 9.5 is mouth guard, visor, jewellery, neck
protection and refusal escalation. **Under the Preamble's "replace or… supersede", that construction
is unsafe.** **Reader-facing conclusion unchanged** — Casebook 9.12 names warm-ups itself — **so this
is a sourcing repair, not a safety correction.** Repaired.

**All three read-scope statements widened TOGETHER in one edit** (`:391`, `:547`, `:553` — line
numbers verified by the agent, not trusted from the brief). ⚠️ **The honest disclosure was NARROWED,
NOT DELETED**, per non-negotiable 4: *"nothing outside Rules 9 and 86.6"* became *"outside Rules 9,
86.6 and Section 11"*, and the Section 11 text is now quoted where it does work.

#### 🔴 OPEN — a second, HARSHER enforcement tier the corpus does not carry. SAFETY-RELEVANT.

- [ ] **Casebook 9.5 (`:261-274`) names *"neck laceration protection not being properly worn"* among
      the things it covers and sets a tier the corpus does not report:** warning → penalties under
      Rule 12 → refusal is a **minor for Delay of Game** → returning unchanged is a **misconduct** →
      third time a **game misconduct**. **The corpus reports only 9.12's warning-then-minor.**
      ⚠️ **Confirmed-but-INCOMPLETE, and it is protective equipment** — a reader told the cost is a
      minor does not know a third refusal ends their game. **Owner: `equipment.md`, and it must be
      seen by `safety-reviewer`.** ⚠️ **NOT dispatched in this round** — the owner asked to stop
      after the Casebook wave and commit; this is the first row of the next one.
- [ ] **Casebook Rule 28 (`:378-388`):** *"Where there is reference to 'The Proper Authorities'
      within the IIHF Rulebook, this shall refer to the EIHL Department of Player Safety (DOPS) and
      EIHL Hockey Operations."* **Bears on every corpus sentence saying "the proper authorities" for
      EIHL play.** Census not run.
- [ ] **Casebook 9.5 Facial Protection (`:289-305`):** *"All Players must wear, as a minimum a
      visor"*, fixed so it cannot be flipped up, and a cracked or broken visor means leaving the ice
      immediately. ⚠️⚠️ **EXTRACTION TRAP — AND THE REMEDY THIS ROW FIRST GAVE WAS WRONG, TWICE
      OVER.** A page footer carrying a page number is spliced **mid-sentence** into this clause.
      Measured on 22 September 2026 for *"along the sides so that it cannot be flipped up"*:
      **raw 0 · whitespace-stripped 0 · alphanumerics-only 0 · footer-lines-deleted 1.**
      ⚠️ **This row said *"flatten before asserting absence"*. An agent corrected it to
      *"alphanumerics-only, or delete the footer"*. The coordinator then MEASURED it and
      ALPHANUMERICS-ONLY RETURNS 0 TOO.** **Stripping whitespace does not remove a footer, and
      neither does stripping to alphanumerics — THE FOOTER IS ALPHANUMERICS.**
      ⚠️ **The only remedy that works is DELETING THE RUNNING-HEADER AND PAGE-NUMBER LINES.**
      ⚠️ **Three parties in sequence gave a remedy that does not work, each more confident than the
      last, and none of the first two ran it. RUN IT BEFORE WRITING IT.**
- [ ] **Casebook 5.6(1) (`:171-176`)** makes crossing the red line in warm-up to initiate a gathering
      a suspension/fine matter **and fines the Head Coach** — bears on
      `project/reviews/after_whistle_cluster_attribution_2026-09-22.md`.

#### ⚠️ What the method could not reach — and it is a live sourcing hole

- [ ] **The Casebook points OUTWARD TWICE at documents nobody here has read:** *"EIHL Roster
      Regulations"* (`:156`) and *"Gamebook section: EIHL DOPS"* (`:386`). ⚠️ **So any corpus claim
      about EIHL rosters or supplementary discipline is STILL sourced to a document nobody has
      read** — the Casebook narrowed that hole, it did not close it.
- [ ] **The Preamble says updates are issued in-season by email and website with an *"effective of"*
      date (`:114-118`). Nothing on disk can detect one.** Combined with the three disagreeing
      version stamps, **the copy on disk may already be superseded.**
- [ ] ⚠️ **`.claude/agents/rules-verifier.md` is short again — the SIXTH recurrence.** `ls
      sources/*.txt` now returns **40**; the two `eihl_casebook` twins are on disk, registered, and
      named nowhere in that file. **Coordinator's file; fixed this round.**

### 📌 OWNER'S QUESTION, 22 September 2026 — two external systems sites, surveys dispatched

The owner asked whether two third-party sites carry material worth considering for this site:
`icehockeysystems.com/ice-hockey-systems`, and `blueseatblogs.com/hockey-systems-strategy/` —
the second with the further question **"should we reference it in our material?"**

**Both dispatched as SURVEY-ONLY agents. Neither may edit anything.** What they are asked for is
**topic coverage and structure**, never wording: both are somebody's copyrighted work, one of them
commercial, and nothing transfers but the observation *"they treat X and we do not."*

⚠️ **The rules half is already settled and needs no survey: non-negotiable 2.** A coaching site and
a blog are secondary. If either states a rule, every statement is a **question for the books on
disk**, never an answer.

⚠️ **The SYSTEMS half is the genuinely open question, and it is open for a real reason.** A
forecheck or a coverage scheme is a **coaching choice, not a law of hockey** — no primary source can
settle *"how the 1-3-1 is played"*, because teams play it differently. **That is precisely the class
of claim where a named, attributed secondary source is the right kind of evidence**, and precisely
where [non-negotiable 7](../../CLAUDE.md) bites hardest. So the referencing question is not *"is it
good"* but *"would citing it by name leave a reader better informed, or falsely reassured?"*

#### ✅ ANSWERED for `blueseatblogs.com/hockey-systems-strategy/` — do not cite it, and nothing changes

⚠️ **THE BRIEF'S PREMISE WAS WRONG AGAIN, AND IT CHANGED THE ANSWER.** Both the brief and the row
above called it *a content page about systems*. **It is a hub — an index of links to articles
elsewhere on the site, with no explanatory prose of its own, no byline and no date.** You cannot
cite it, because **it makes no claim.** Citing it would be the *falsely reassuring* half of this
row's own test: it looks like a systems reference and is a navigation menu.

⚠️⚠️ **AND IT IS NOT A NEW SOURCE. THE CORPUS ALREADY CITES IT** — six distinct article URLs across
**five** documents: `systems/forechecking_systems.md:309` and `:972` (the Tortorella 2-1-2-spread
attribution), `systems/defensive_zone_coverage.md:792`, `hockey-iq/risk_management.md:888` (as *"the
single source for the strong-side-overload variant"*), `systems/special_teams.md:1190/:1194/:1196`,
`technique/shooting.md:437` and `:910` (Royal Road). **Five of the six are already in
`project/verification/link_baseline.tsv:37-42` with refetch dates**, and the publisher's `<title>Email</title>`
soft-404 quirk is already recorded in `project/reviews/closed_plan_rows_archive.md:226`.

⚠️ **THE LABELLING CONVENTION ALSO ALREADY EXISTS AND IS BETTER THAN ANY THAT WOULD HAVE BEEN
PROPOSED.** `forechecking_systems.md:309`: *"**That is a fan-analytics site, not a coaching manual or
a team source** — well attested, not official."* `risk_management.md:888` goes further, quoting the
article's operative sentence and then stating in the trailer what it does **not** say. **This is the
defect the brief warned about, avoided only because the agent checked `content/` first.**

**Topic coverage: ZERO genuine gaps**, every hub section mapped to an existing document. The nearest
miss — *why coaches juggle line combinations* — is **correct scope**, not an omission: this corpus
teaches people to play, and roster construction is the coach's job. **No row opened for it.**

- [ ] ⚠️ **OWNER'S CALL — the site's footer reads, verbatim:** *"Copyright © 2026 Blue Seat Blogs.
      Use of this content for AI/ML training, text mining, or automated data extraction is
      prohibited without written permission."* **Reported, not obeyed as an instruction** — no text
      on the page addressed an agent, so this is an ordinary terms statement and not an injection.
      **It does not bar what the corpus already does** — citing a named article by URL with a quoted
      sentence is quotation and attribution, not training, mining or bulk extraction. ⚠️ **It does
      argue against ever fetching this site in bulk, and against any future "sweep the archive"
      row.** Surfaced to the owner.
- [ ] ⚠️ **THE BEST EVIDENCE ON THE WHOLE REFERENCING QUESTION, and it is already in our own
      records: THIS PUBLISHER HAS ALREADY BEEN WRONG ABOUT A SYSTEM HERE.**
      `project/verification/link_baseline.tsv:39` records its penalty-kill article saying the wedge+1
      *"is always rotating"* and the extra forward is *"free to run around and create havoc along the
      perimeter"* — and the baseline note states this **contradicts the corrected corpus wording**.
      **Not a correction to make — a reason the "well attested, not official" label must NEVER be
      dropped.** ⚠️ **The agent relayed this from the baseline and did NOT re-verify it against the
      live page or against `special_teams.md`'s current wording. It may have been repaired since.**
- [ ] **Staleness, as evidence about the class rather than a disqualification:** every Blue Seat
      article the corpus cites is **2011–2015**, and the hub's organising principle runs Tortorella
      (2011-13) → Vigneault → Quinn → Laviolette. For systems material that is not fatal — the 1-2-2
      has not changed — **but it is exactly why `forechecking_systems.md` cites the Tortorella piece
      as CONTEMPORANEOUS evidence for a historical attribution rather than as current practice.
      Keep that framing.**
- [ ] ⚠️ **What the survey could not reach, and it bounds the "zero gaps" finding:** it read the hub
      through a **summarising fetch on a cached response, never the raw HTML** — so a JavaScript or
      "load more" section would be invisible and would look exactly like absence, and its
      "no injection found" is a negative from a filtered view, not from the bytes. **It read none of
      the linked articles**, so *zero gaps* is at the level of **topic, from link labels**, not at
      the level of claim. Corpus coverage was checked by **keyword grep, which finds whether a topic
      is MENTIONED, not whether it is taught well**, and **no layer test was run**.

#### ✅ ANSWERED for `icehockeysystems.com/ice-hockey-systems` — ONE real gap, and it is in scope

⚠️⚠️ **THE BRIEF WAS SHORT BY FOUR DOCUMENTS, AND IT WOULD HAVE MANUFACTURED THREE FALSE GAPS.**
The brief named six `content/systems/` documents; there are **ten**. Missing:
`forechecking_systems.md`, `neutral_zone_systems.md`, `faceoffs.md`, `game_management.md` — **and
those four are precisely where most of the site's content lands.** Working from the brief's list,
the agent *"would have reported forechecking, neutral-zone structures and faceoffs as gaps. All
three are among the corpus's deepest documents."* **This is the coordinator's relayed-list failure
for the seventh time today.**

⚠️ **AND IT IS NOT A NEW SOURCE EITHER: the corpus already cites it in at least EIGHT documents** —
`on_ice_communication.md` (2), `passing_and_receiving.md` (3), `scanning_and_anticipation.md`,
`shooting.md`, `puck_handling.md`, `time_and_space.md`, `special_teams.md`. Cited for coaching craft
with provenance qualification, never for a rule.

⚠️ **THE FETCH GOTCHA WAS ALREADY WRITTEN DOWN AND THE AGENT WALKED INTO IT ANYWAY.**
`puck_handling.md:1040` and `time_and_space.md:633` both record: *"That host soft-404s — a nonsense
drill path returns HTTP 200 with the drill index."* Its first fetch used a guessed slug, got 200,
and was served the index. **Confirm this host by RENDERED BODY, never by status code.**
⚠️ **The note lives in `content/`, not `sources/README.md`** — so the standing *"read the source's
README entry first"* routing would NOT have surfaced it. **A fetch gotcha recorded only in a Sources
trailer is invisible to the place everyone is told to look.**

**What the site is:** a **paid coaching-resource business**, not a player-teaching site — Drupal,
Ice Hockey Systems Inc., © 2026. Ten coach-facing nav items against one "Players & Parents". Drills
indexed by **age band**, a coach's axis. **119 systems entries, 89 badged Members Only** — roughly
three-quarters gated, $14/month or $60/year. On free entries the prose is readable; **the animation
is the product.**

**Gap analysis against all ten documents: everything else is already covered, usually deeper** —
the named forechecks (ours adds 1-4 and left-wing lock, which the site lacks), NZ structures and
regroups, layered/protect-the-house D-zone with a comparison table, the four named backchecking
systems, PP umbrella/overload/1-3-1 and PK box/diamond/wedge+1 and both 5-on-3s, cycling and OZ
rotation, faceoff plays by zone, and the full breakout family.

### 🟠 THE ONE GENUINE CONTENT GAP — the POWER-PLAY BREAKOUT falls between two documents

- [ ] **Neither document owns the 5-on-4 own-zone exit.** `special_teams.md` covers PP **entries**
      in depth (§323) but the word *"breakout"* occurs in it **twice**, both about delayed penalties
      and kill-side retrievals. `breakouts.md` covers the even-strength exit thoroughly and
      **explicitly excludes the PP** — §722 and §736 go out of their way to say "three high" is
      *"not the power-play umbrella of the same name, which Special Teams covers"*. ⚠️ **So each
      document points at the other and neither carries it.**
      **Partial credit:** `special_teams.md:345` defines the swing in one sentence and notes the
      single is less predictable than the double — **a sentence, not a section, and filed under
      entries rather than exits.**
      ⚠️ **IN SCOPE, unambiguously:** a rec player put on the second power-play unit **has to get the
      puck out of their own end before any of the entry material applies.** It is a player-facing
      "where do I go" question of exactly the kind this corpus answers everywhere else.
      ⚠️ **SETTLE OWNERSHIP FIRST.** `special_teams.md` is ~1,200 lines and **`MAX_COACHING_FACTS`
      will bite**; `breakouts.md` (~1,029) may be the better host. ⚠️ **Either way the two
      documents' existing MUTUAL POINTERS must be updated in the same wave, or the corpus gains a
      dangling "covered over there" that is false.**
      ⚠️ **WRITE IT FROM THE CORPUS'S OWN SOURCES AND HEDGE IT AS A COACHING CHOICE — NOT FROM THIS
      SITE'S DESCRIPTIONS.** The site's own PP-breakout category (11 entries: double swing, single
      swing ×3, four corners, triple option, skate-into-zone) is a **pointer to the topic, not
      evidence for it.**

- [ ] **Two tactical divergences — QUESTIONS, not corrections, and both are coaching choices:**
      **(a)** the site's 2-1-2 puts F3 *"in the middle of the ice in the high slot"* with **both
      defencemen sealing the walls**. ⚠️ **If `forechecking_systems.md:269` presents only one F3/D
      arrangement, that is a CARDINAL-RULE exposure of our own.** The agent **did not read
      §269–313** and flags it for someone who will.
      **(b)** the site uses *"high slot"* loosely for the whole area above the dots; our owner
      `foundation/rink_map.md` defines it tightly. **Not a contradiction to fix** — confirmation
      that a reader arrives carrying a vaguer definition than ours.

- [ ] ⭐ **THE MOST USEFUL THING THE SURVEY FOUND, and it is about our READER, not their content.**
      The free prose is **more hedged than expected** (*"can be used in many situations"*). ⚠️ **But
      the STRUCTURE does what the prose does not:** 119 entries as a flat numbered catalogue
      — *"Overload Option #1–#5"*, *"Back-Checking Option #1–#3"* — **with no comparative layer, no
      "which does your team play?", and no statement anywhere that any of it is a choice.** The
      D-zone transcript instructs a team already running that system: *"This should be our
      positioning."* **Correct for a coach installing a system; exactly the failure mode
      non-negotiable 7 guards against when a self-teaching player reads it.**
      **This is direct evidence for how our reader arrives**, and it argues FOR the existing
      "which formation your team plays is a coaching choice" blocks (`special_teams.md:77`) and the
      comparison table (`defensive_zone_coverage.md:375`). **Those are the differentiator against
      the entire genre.**

- [ ] **Deliberately NOT gaps — recommend no action.** The drill library (~550), practice plans,
      drill-maker, Coach Education, printables: **coach-facing, and `practice_and_development.md`
      already covers the player's side and cites USA Hockey's Small Area Games handbook for the
      library function.** And the **named-play library as a genre** (34 faceoff plays, 16 PP options
      by name): ⚠️ **`faceoffs.md:908` makes a DELIBERATE choice against one, in a section called
      "Keeping it simple enough to work". That is a considered editorial position matching
      non-negotiable 7 — do not reverse it.**

- [ ] ⚠️ **WHAT BOUNDS ALL OF THE ABOVE: 89 of 119 systems entries are PAYWALLED and were not read.**
      The gap analysis rests on **titles and categories** for those and free prose for ~30, and
      **the free set skews introductory, so the gated material is LIKELIER to be the distinctive
      material.** ⚠️ **Any claim that this site LACKS something is weaker than it looks.**
      **The PP-breakout gap is unaffected** — it is a gap in OUR corpus, established by reading
      `content/`, and does not depend on their pages.
      ⚠️ **Only `/ice-hockey-systems` was surveyed.** Hockey Drills, Coaching Clips, Blog, **Goalie
      Development**, Off-Ice and Courses were not — **and the corpus already cites at least five
      pages from those sections.** ⚠️ **A goalie or off-ice gap could not have shown up at all, and
      `positions/goaltender.md` is the likeliest place for an uncovered topic.**
      **Untrusted-input check: clean negative** — index pages 0–3, three article bodies and
      `robots.txt` fetched; nothing purported to instruct an agent. The soft-404 is a
      misconfiguration, not an injection.

#### ✅ THE POWER-PLAY BREAKOUT GAP WAS REAL AND IS CLOSED — hosted in `breakouts.md` §8

⚠️ **THE BRIEF WAS WRONG ABOUT THE SHAPE OF IT, AND THE CORRECTION MATTERS.** I wrote *"each
document points at the other and neither carries it."* **It does not.** `special_teams.md` contained
**no link to `breakouts.md` at all** — zero hits. `breakouts.md`'s two hits are a **name-collision
disambiguation** ("three high" the breakout shape vs the power-play umbrella), **and that pointer is
ACCURATE**, because `special_teams.md:126` does own the umbrella. ⚠️ **There was no dangling
"covered over there" — there was MUTUAL SILENCE, which is worse in a different way**, and it meant
the fix required deleting nothing.

**Ownership decided and reasoned: `breakouts.md`, as a new first subsection of §8.** Because the
5-on-4 exit **is** the even-strength exit — you have five skaters either way; what is a skater short
is *their* forecheck — because §8 already holds exits at strengths other than 5-on-5 and already
works the identical icing logic at 6-on-5, and because **`special_teams.md` has seven facts blocks
at 7/8 coaching facts and its entries block at `:325` is at 8/8.** `special_teams.md` takes the
forward pointer in body **and** Key Takeaways, so the two moved in one edit.

⚠️ **The summary layer was already AHEAD of the body:** *"Never ice the puck while on the power
play"* was in Key Takeaways and Common Mistakes **with no body section to support it.**

**Non-negotiable 7 honoured explicitly** — the default named, *"the realistic alternative is coached
and works"*, and *"find out which your coach wants, **and ask about the power play specifically** —
it is often a different answer from the one your team gives at even strength."*

⭐ **The negative was ATTACKED the three ways the style guide requires before being written:** the
document's own Sources list (ten breakout sources, none PP), the working directory
(`iihf_coachdev_off_tactics.txt`, the only coaching manual on disk, covers give-and-go, mid-lane
support and screening — **not** a PP breakout), and a corpus-wide grep for
`double swing|four corners|five.back|power.play breakout` returning **zero**. **The site's 11-item
catalogue was NOT reproduced**, and the disclosure says so: *"no source held here sets a list of
them out, so none is invented."* `check_disclosures.py` classifies it **`scoped`** — the good state.

⭐ **The layer test earned its keep again: rendering both documents caught FOUR facts lines that
pointed at nothing voiced alone** — *"their pressure"*, *"in section 2"*, *"differently for you than
for them"*, *"your five breakout jobs"* — all rewritten to name the thing. **It also caught a Common
Mistakes bullet telling a reader to clear OFF the glass with no OVER-the-glass penalty beside it, in
a unit that is voiced alone.**

#### 🔴 REVIEW OWED BEFORE COMMIT — the agent named five dimensions itself

- [ ] **`rules-verifier` REQUIRED.** Ten rule citations. ⚠️ **Two it did NOT grep and relied on the
      document's existing text for: (a) that IIHF 81.4 and 87.1 carry the NHL's wording
      (`breakouts.md:828`, `special_teams.md:978`); (b) USA Hockey Rule 624 read WHOLE** — it checked
      624(a) and 204(a), not all four sub-sections.
- [ ] **`safety-reviewer` REQUIRED** — it instructs a player under forechecking pressure in their own
      end, and the new Common Mistakes bullet turns on a **delay-of-game minor whose trigger differs
      by book**.
- [ ] **`facts-reviewer`** — the new 9-line block **has been read by nobody but its author.**
- [ ] **`source-verifier`** — one restated external citation (Matt Cane, Hockey Graphs, March 2017,
      *"roughly 56% of the 5-on-4 ice-time this season"*). **The owner's qualifications were carried
      verbatim** (league-wide ICE TIME, not a count of teams; first and second units not separated)
      **but it was not refetched.**
- [ ] **`site-reviewer`** — two renumbered ordered lists and a retitled §8 heading. ⚠️ **No site
      build was run, and an Astro markdown-transform cache would hide a heading problem entirely.**

#### 🔴 THE CHECK THE AGENT MOST WANTS RUN — is the new section a DUPLICATE rather than a gap-fill?

- [ ] ⚠️ **It verified the absence by vocabulary search plus reading every HEADING in the two systems
      documents — and read HEADINGS ONLY, not bodies, in `zone_entries.md`, `faceoffs.md`,
      `neutral_zone_systems.md`, `forechecking_systems.md` and the five position documents.**
      ⚠️ **A PP-exit passage buried inside `center.md`'s or `defender.md`'s body, or inside
      `faceoffs.md`'s defensive-zone-draw material, would have survived the sweep — and the new
      section would then be a DUPLICATE, not a gap-fill.** **This is the highest-priority follow-up.**
- [ ] **Its PK-forecheck premise rests on `special_teams.md:586-602`, which carries its OWN
      "not independently verified" flag.** ⚠️ **No independent source for how a four-skater kill
      actually forechecks was found** — the section is hedged accordingly, and a source search could
      confirm it or show the hedge is too weak.
- [ ] ⚠️ **It did NOT attack the pre-existing uncommitted changes already in both files when it
      arrived** (the swing-breakout scoping pass in `breakouts.md`, the Overview rewrite in
      `special_teams.md`). **Its whole-file diff showed them as "not mine" and it left them.**
      *"Somebody should."*

- [ ] **Decide the referencing question once the surveys land.** ⚠️ **Do NOT invent a convention
      before checking whether this corpus already has one** — the briefs require both agents to read
      the `content/systems/*.md` Sources trailers first and report what the corpus already does with
      coaching sources. **Reporting something as absent that is already written down elsewhere in
      this repository is this session's single commonest defect.**
- [ ] **Any claimed gap must be checked against `content/` before it is believed**, by the same
      rule. A gap is also not automatically in scope: this corpus teaches **people to play**, so
      drill libraries, practice planning and team management may be correctly absent rather than
      missing.

### 📌 OPEN, coordinator's call — a fifth book on the unpressured-freeze minor

`special_teams.md:731`/`:854` say the minor is *"a minor in all four books"*. **CARHA is a fifth
route to the same act** (`carha.txt:2940-2941`, Rule 61(b)) and is not named — ⚠️ **though the
document quotes CARHA 61(b) elsewhere at `:346`, so the four-book scope looks DELIBERATE.**

⚠️ **Direction is the same under CARHA, so no reader is pushed toward an unsafe act — this is
completeness, not contradiction.** Both lines are at **299 and 295 of 300**, so adding a fifth book
**needs a block split.** Not repaired; flagged.

### 🔴 A SILENTLY CORRECTED TYPO INSIDE QUOTATION MARKS — invisible to the tool TWICE OVER

`skating.md:480` quoted How To Hockey as *"Your inside leg will start on **its** inside edge"*.
⚠️ **The page reads `it's` — the author's own typo — and the corpus had silently corrected it.**

⚠️⚠️ **`check_quote_drift.py` cannot see this twice over: the source is OFF-DISK, and the tool
matches on ALPHANUMERICS ONLY, so `its` and `it's` are identical to it even if the page were on
disk.**

⚠️ **And it contradicted the document's own convention** — `:395` faithfully preserves Glantz's
*"on **there** weaker side"* without correction.

**COORDINATOR RULING: leave it restored as `it's`, do NOT bracket it.** Three reasons: `:395` is the
document's own precedent for preserving a source's error; **the listener cost is exactly zero**
because *its* and *it's* are homophones; and a site reader sees it inside quotation marks, which is
correct scholarly practice. ⚠️ **What was NOT acceptable was the silent correction, and that is
fixed.**

- [ ] ⚠️ **The class is unswept: a silent correction of a source's error.** It joins the deleted
      word, the manufactured join and the raised capital as **quotation defects no checker can
      see.** **Only reading the source beside the quotation finds any of them.**

### 📌 TWO ITEMS THE AUDITOR DECLINED TO TOUCH, and was right to

1. **`skating.md:958` renders a source's COMMA as an elision mark** (*"…side of body and legs**…**
   but with no head contact"*). **Nothing is actually omitted.** ⚠️ **Not changed, because that
   trailer passage is explicitly owned by `body_contact_and_battles.md`** and the agent did not own
   it. **Marginally less faithful than a plain comma; owner's call.**
2. **`:62` says a quote is "crediting (Bracko, 1996)"** where that citation closes the **following**
   sentence in the same block. ⚠️ **The reading is fair and the document does not over-claim** — a
   stricter phrasing would be *"in a block closing with (Bracko, 1996)"*. **Below the threshold for
   touching verified text.**

### ✅ TWO NEGATIVES THE CORPUS DEPENDS ON, RE-TESTED against the newly arrived British document

Searched the Casebook flattened: `chin strap` **0** · `chinstrap` **0** · `cm` **0** · `certif` **0**.

⚠️ **So *"only the two British documents attach the 2.5 cm"* and *"no British certification mark
exists to check for"* BOTH SURVIVE the arrival of a new British source.** ⚠️ **This is the right
reflex and it should be standard: when a new source lands, RE-TEST the negatives that could have
been falsified by it.**

- [ ] ⚠️ **Casebook Section 11 (women's hockey) is the next dispatch.** `equipment.md:690` makes a
      British women's visor claim from In-House Rule 102 and says in terms it is *"a reading nothing
      published actually confirms"* — ⚠️ **and the Casebook has a women's section nobody has
      opened.**
- [ ] **Casebook 9.5 read but NOT written in** — mouth guards for all EIHL players, minimum a visor
      covering *"the eyes and nose in its entirety"* fixed so it *"cannot be flipped up"*, cracked
      visor means leaving the ice, jewellery banned, and a **minor → misconduct → game misconduct**
      escalation for refusing to change non-conforming equipment. **Owner undecided between
      `equipment.md` and `uk_rules.md`.**

### 📌 OPEN — a Casebook section nobody has opened, under a claim the corpus says is unconfirmed

`equipment.md:690` makes a British women's visor claim from In-House Rule 102 and says in terms it is
*"a reading nothing published actually confirms"* — ⚠️ **and the EIHL Casebook has a Section 11
(women's hockey) that nobody has read.** **Named by two agents as the next dispatch.**

- [ ] ⚠️ **Where a mouthguard is compulsory in any OTHER British league is NOT SETTLED** — and that
      is an honest limit, **not a cleared negative.** The junior, U10 and NIHL 1&2 RoCs return 0
      hits, **but NIHL National, PNIHL, SNL, BUIHA and Scottish domestic have NO DOCUMENT IN
      `sources/` AT ALL.**

### 🔴 OPEN — a REQUIREMENT the corpus states, and an ENFORCEMENT ROUTE it does not

⚠️ **Found by reading the Casebook's TAIL while checking a page count.** `uk_rules.md:146` says the
EIHL's 9.12 carries the neck-guard requirement into warm-ups, quoting *"after warning by the Referee,
**a minor penalty shall be imposed**."*

**The same Casebook, Rule 86.6 Pre-Game Warm-Up — coordinator-verified:**

- **86.6(i)** — contact and crossing the red line in warm-up *"will be handled by the **standby
  referee** who oversees the warmup."*
- **86.6(ii)** — *"**Any violations of game rules that occur during the warmup cannot be enforced by
  on-ice officials** because they are not on the ice to witness the violations first-hand, **but
  these may be reviewed after**…"*

⚠️⚠️ **THIS IS A TENSION TO RESOLVE BY READING, NOT A CONTRADICTION TO ASSERT.** The requirement
plainly still applies — **but (ii) describes a different enforcement route, and (i) shows SOME
warm-up rules ARE enforced live.** **Whether a neck-guard violation falls under (i) or (ii) is the
actual question and nobody knows yet.** Dispatched.

⚠️ **The coordinator's grep for 86.6(ii) returned ZERO because the sentence LINE-WRAPS. Only a
flattened search found it** — the same trap, for the fourth time today.

- [ ] ⚠️ **Rule 86.6 is OUTSIDE the declared read scope**, so relying on it **widens what the
      document may claim** and `:391`, `:547` and `:553` must be updated together — **or they become
      false in the understating direction AGAIN.**

### 📌 OPEN — the Casebook's contents list names SAFETY territory nobody has read

Beyond Rule 10: **41 Boarding · 42 Charging · 42 Elbowing · 46 Fighting · 47 Head-butting · 64 Diving
· 69 Interference on the Goalkeeper · 86.6 Pre-Game Warm-Up · Section 11 Women's Ice Hockey.**

⚠️ **Several are penalty and contact territory this corpus teaches.** ⚠️ **The new disclosure is
honest about not having read them — but that is A BOUND, NOT A CLEARANCE.**

### ✅ Closed this session

- **`link_baseline.tsv` — 30 rows written** (28 refreshed, 2 added) from the `skating.md` audit, plus
  4 from the IHUK Rules of Competition earlier. ⚠️ **Every note records what was LOCATED, and the
  unreachable one states in terms that the citation is UNVERIFIED, NOT DOUBTED.** ⚠️ **No note treats
  a byte count as a fingerprint** — and the PubMed row records that **5,567 is a shared wall page
  served for multiple URLs**, not a signature.

- **CLOSED — the flat breakout-trip claim in `switching_positions.md`, THREE sites not one** (facts
  line, body bullet, and the pointer sentence above the diagram). Wording taken verbatim from the
  agreed four-document form; **full system names repeated, no demonstratives.** ⚠️ **Full-label,
  full-file sweep run: all 17 blocks, 129 facts, read individually — no other flat system claim.**
  ⚠️ **`:87` was checked and CLEARED**: unscoped in itself, but a dedicated `Convention:` two lines
  down names the system and its alternatives, **and it survives being voiced alone** — the corpus's
  accepted pattern.

- **CLOSED — the boards-pin summary-layer gap in `puck_handling.md`.** ⚠️ **Both limbs carried, each
  SCOPE-FIRST**, rather than the safer-looking "USA Hockey only, point at the body" — because dropping
  the IIHF limb *"would have re-created, one layer up, the exact defect I had just repaired in the
  body."* Framed as **a limit on the opponent, not an instruction to the reader**: *"Assuming that
  being pinned on the wall is always your own mistake."* ⚠️ **It wrote NO numeral for the book total,
  deliberately — *"a count that is never written cannot drift"*** — after two counts went stale in
  that file today.

- **CLOSED — the `goaltender.md` `notfound` bucket, all 46 classified, 5 lines repaired.** One
  manufactured quotation, two terminal periods moved outside the marks where the source continues,
  and a silently-lowered capital fixed **in both places it appeared.** ⚠️ **Provenance checked on
  every external source, and TWO suspicions of the agent's own were REFUTED** — a suspected `cover[]`
  typo (a disclosed deletion) and a suspected description drift on a named coach (the page's own
  intro says what the document says). **No attribution drift found.**

- **CLOSED — the IHUK portfolio claim in `uk_rules.md`, all five layers** (Key focus, Overview, body,
  Common Mistakes, Key Takeaways), each rendered and **read de-tagged in the SSML**, each
  self-contained voiced alone with no dangling antecedent. ⚠️ **Two self-caught errors repaired
  before verification** — an In-House scope over-read, and a pre-existing *"The same document"* that
  became ambiguous once four documents were named above it. **Nothing deleted; every exclusion
  written as "not settled by these documents", never "different there".**

- ⚠️ **`CLAUDE.md` updated between waves** with two failure classes neither previously recorded:
  **a zero from a LABEL is not an absence of the RULE**, and **"you checked four books and this
  corpus holds ten."** Plus the `md_to_speech --only` bare-stem id, the **SSML-written-to-files**
  false pass, the `<sub alias>` grep artefact, and **`timeout` not existing on macOS.**

- **CLOSED — the kick-shot defect this session introduced.** Repaired in **four layers**; the facts
  block was **SPLIT rather than evicted** (11 of `HARD_MAX` 14 → two lines at 243/300 and 293/300),
  so no rule number, penalty or caveat was traded away. ⚠️ **The CARHA scope caveat is now IN the
  facts line** — it had lived only in the Sources trailer, **which a listener never hears.**
  ⚠️ **A second error was found that nobody had briefed:** the document cited the deflect-off-own-
  stick permission as **IIHF 49.2(II)**; it is **49.2(III)** — and the v1.1 extraction interleaves
  page furniture between the clause label and its text, **which is very likely how the wrong numeral
  was picked up.** The 2026/27 extraction is clean and settles it.
- ⚠️ **THE COORDINATOR'S SWEEP TABLE WAS WRONG IN A SECOND DIRECTION TOO.** It reported `usah`
  scoring **0** on `kickshot`. **It scores 3** — the plain extraction breaks the word across a line
  as `"kick / shot,"`. **So the same table was wrong about a book HAVING the term as well as about
  books lacking it.**
- ⚠️⚠️ **AND THE CORPUS ALREADY HELD THE REFUTATION.** `passing_and_receiving.md:445` carried the
  correct framing **before** the defect was written into `on_ice_communication.md`. **The propagation
  ran the wrong way: a sibling's correct text was overwritten in another file by a brief that had not
  read it.** A routing finding about the brief, not about either document.

- **CLOSED — the British period-length prose gap.** One paragraph at `rules_primer.md:88`, written in
  `:366`'s established register rather than as a new pattern, **plus a correction to the `:937` table
  row that today's earlier repair had got half-right.** ⚠️ **It added a scope limb nobody asked for,
  because `sources/README.md:1489` insists on it** — the four RoC are *"the leagues IHUK runs itself
  and nothing beyond them"*, so EIHL, NIHL National, SNL, BUIHA and Scottish competitions are not
  settled by them. **Two further source facts carried that the brief had not:** the U16/U19 asterisk
  resolves to *"the same format all season"*, and **the U10 RoC publishes no period length at all** —
  only ice-slot durations — *"so I said that rather than implying silence."*
- **PROPAGATION JUDGEMENT — split verdict, and both halves reasoned.** The **60-second buzzer**
  belongs in this document and is **already half-here**: `:366` states the buzzer and *"left where it
  is"* but **stops before the consequence** (*"Deliberate movement = warning, then minor penalty"*).
  ⚠️ **Not written — it is a second defect in a different section, and `uk_rules.md:295` already
  carries it in full, so the reader following the existing link gets it.** Recommended as its own row
  aimed at `:366` or §1. The **line-sheet breach** does **not** belong: it is roster administration
  with no section to attach to, and `uk_rules.md:296` owns it correctly.

- **CLOSED — the `uk_rules.md` U12 safety review.** One Critical and one Major found and fixed across
  five sites; the Rule Bulletin scope disclosure **independently re-verified** as scope rather than
  hedge, and confirmed **reaching a listener** in rendered chunk 035 where before it reached one
  nowhere. ⚠️ **The neck-laceration-protector caveat was re-checked and is the best-layered safety
  caveat in the file** — five layers, each survivable read alone, each naming the penalty, anchored
  to **IIHF 9.12** rather than to any IHUK bulletin, so the bulletin gap does not touch it.

- **CLOSED — CARHA 55(a) Note 1 and the USA Hockey kick-shot proviso.** ⚠️ **The layer test found a
  gap the brief had not:** facts `risk_management:325` carried *"writes no deliberateness word"*
  **voiced alone** with the deflection escape nowhere in the block, and at **296/300** nothing could
  be added to it — so a **new 13th `Rule:` line** (block was 12 of `HARD_MAX` 14) now carries the
  escape for both books, self-contained at 270/300. ⚠️ **`special_teams.md:719` and `:941` ALREADY
  carried Note 1's exemption** — *"the sibling is the evidence that it was an omission rather than a
  position."* All three enrichments applied and verified verbatim.
- **The bracketing judgement: LEAVE IT, and the coordinator's premise was wrong.** The brief said an
  inconsistency had been *created today*. ⚠️ **It had not — the pattern is identical in both files
  and both instances in each**, four occurrences, and both treatments are corpus-wide house style.
  **Bracketing the bare pair would make these two documents diverge from every other document for no
  reader benefit.**

- **CLOSED — the two repaired "As IIHF" rows REVIEWED AND UPHELD.** Every quotation and every
  hyphenation re-verified in the `_layout` twins; the WNIHL permission qualification is carried; the
  *"no amendment to Rule 77 / Rule 83"* claim confirmed **by indexing every rule-number heading in
  the In-House Rules rather than searching for a string.** ⚠️ **The read-as-a-listener test passes:**
  `:285` is voiced as its own `<p>` and **the sanction sits in the same breath as the difference**,
  so it cannot dangle. **And the document's imperative layer is safe as-is for a U12 reader** —
  *"get out, and get out cleanly"* is the same action Appendix D requires; **only the sanction for
  failing differs.** Checked specifically rather than assumed.

- **CLOSED — the U12 penalty mechanism and the bulletin scope gap in `uk_rules.md`.** Three edits:
  the invented short-handedness mechanism replaced with Appendix D's own words and two flagged
  unknowns; the Common Mistakes heading rewritten (it asserted the same unstated position); and a
  **scope** disclosure added to the body. ⚠️ **No U12 penalty-duration arithmetic exists elsewhere in
  the corpus** — `risk_management.md`'s 21.1% prices an **NHL** minor and is not in tension.
  Dispatched to `safety-reviewer`: it is new text in a children's-hockey passage.

- **CLOSED — the `rules_primer.md:920` table propagation.** The two-limb Casebook repair had reached
  the body and stopped at the table — **round 10's critical pattern exactly.** Cell now carries the
  reason in full. **The other four tables read cell by cell: none touches Rule 204 or Rule 74, so no
  same elision.**

- **CLOSED — the IIHF 43.3 inversion in `defending_the_rush.md`, and it was WORSE than briefed.**
  ⚠️ **The same inversion was also in the BODY at `:376`, where it was stated as an explicit
  contrast** — *"mandatory under NHL 43.3 … and under IIHF 43.3 at the referee's discretion"* — so a
  prose reader came away with the inversion spelled out rather than implied. **The brief located only
  the facts line.** Both repaired; `:365` now 287/300 with nothing evicted. **Layer test run per
  layer:** Common Mistakes `:873` and Key Takeaway 8 `:940` were **already correct**. Confirmed
  through the real renderer that the repaired line is voiced in its own `<p>`.

- **CLOSED — the after-the-whistle / delay-of-game / abuse-of-officials cluster**, ~100 quotations
  across two documents, **zero wrong-book attributions**; the twin-sentence trap navigated correctly
  in both places; three negative existence claims **attacked** and upheld, one of them by searching
  **the volume the claim did not name**. Two real findings dispatched (CARHA 55(a) Note 1; USA Hockey
  627(c)'s second proviso). Record:
  [`after_whistle_cluster_attribution_2026-09-22.md`](../reviews/after_whistle_cluster_attribution_2026-09-22.md).
  ⚠️ **The coordinator's cluster list was wrong at its boundary** — USA Hockey 616 and HC 10.2(a)(iii)
  are different four-book contrasts. **~30 quotations in the penalty-shot and hand-on-puck clusters
  are the next brief.**

- **CLOSED — `body_contact_and_battles.md:778`, the unscoped penalty tier.** Repaired with one
  qualifier (*"under the NHL and IIHF, and never a bare minor under USA Hockey or Hockey Canada"*),
  nothing evicted. ⚠️ **The layer test showed the BODY was the only layer out of step** — `:765`
  (facts), `:1621` (Common Mistakes) and `:1736` (Key Takeaways) were already correct, **the inverse
  of the round-10 shape.** The round-10 critical itself was **re-tested by layer rather than by
  grep**: the checking-legality caveat is present in the facts block of **every** section that
  teaches a hit and survives being voiced alone. Record:
  [`body_contact_attribution_2026-09-22.md`](../reviews/body_contact_attribution_2026-09-22.md).

- **CLOSED — the `body_contact_and_battles.md` attribution audit**, the corpus's owner document for
  checking from behind, **which nobody had opened this session**. ⚠️ **Zero misattributions across
  1,193 fragments.** Four negative existence claims attacked and held, including *"the IIHF writes no
  match penalty anywhere"* (`grep -ci "match penalty"` = **0** in both editions) and *"the NHL has no
  positive definition of a body check"* (**zero** `check` occurrences in its glossary block). Three
  substantive gaps found and dispatched. Record:
  [`body_contact_attribution_2026-09-22.md`](../reviews/body_contact_attribution_2026-09-22.md).

- **CLOSED — the `rules_primer.md` attribution sample.** 47 claims, eight rulebooks, **zero
  misattributions**; one real defect found and repaired (a deleted word inside a CARHA quotation).
  ⚠️ **It also VERIFIED an unreviewed hunk another agent had left in the file** — the too-many-men
  rewrite — confirming the Casebook ruling and 204(b) verbatim, while honestly flagging that the
  printed sentence **is genuinely ambiguous** and the edit claims only the defensible half. ⚠️ **And
  it closed a safety question rather than leaving it to be re-opened:** `:459`'s *"the NHL is the
  outlier"* is true as written and correctly qualified at `:36` and `:995`. Record:
  [`rules_primer_attribution_2026-09-22.md`](../reviews/rules_primer_attribution_2026-09-22.md).

- **CLOSED — the `Shoots`/`Shooting` undisclosed inflection, 4 sites across 2 documents**, plus the
  `tak[ing]` terminal-period elision at `risk_management.md:675`. **Both files' remaining `notfound`
  fragments swept for the same defect: none found.**

- **`link_baseline.tsv` — 22 rows written (21 refreshed in place, 1 added), all `content/`-free.**
  ⚠️ **The agent corrected its OWN undercount on handback — 22 URLs fetched, not the 15 it first
  reported** — having omitted four `purehockey.com` paths, two BNQ pages, the Hockey Canada safety
  manual and a Discount Hockey page. **No malformed rows; `check_secrets` and `check_links` clean.**

- **CLOSED — the `equipment.md` `notfound` bucket, all 66 distinct fragments classified**, 26
  verified against primary sources this session, **one real provenance defect found and repaired**.
  ⚠️ **Provenance spot-checks that PASSED are worth recording too:** the Marcoux tape claim is
  correctly framed as a goalie coach's own statement rather than a study; the concussion material is
  prominently flagged as **retailer-sourced rather than research**; the *"extremely good at
  preventing skull fractures"* claim is flagged as **unmeasured by anything cited**. **The document
  is already doing the provenance job on itself.**

- **CLOSED — the `risk_management.md` `notfound` bucket, all 24 classified.** 4 URLs refetched
  (HTTP 200, fragments verbatim); the `:365` CARHA paragraph **upheld in full**, including its
  negative existence claim, which was **tested** rather than trusted; Hockey Canada Interpretation 4
  confirmed to have exactly three items, none mentioning height. Record:
  [`risk_management_notfound_2026-09-22.md`](../reviews/risk_management_notfound_2026-09-22.md).
- **`link_baseline.tsv` — 3 rows refreshed, 1 added, and a HYPOTHESIS REFUTED on the way.** The
  prior byte counts were ~4× smaller; the coordinator's first explanation was the gzip-transfer-size
  artefact documented on the AU row today. ⚠️ **Tested and refuted** — compressed 146,996 vs
  uncompressed 145,466, both ~146k. **The cause is NOT determined and is NOT invented in the note**;
  two fetches minutes apart also differed by 1,530 bytes. **Byte count is not a tripwire on these
  hosts.**

- **CLOSED by REFUTATION — the IIHF 43.3 "discretion limb".** ⚠️⚠️ **The brief was wrong in the
  DANGEROUS direction and would have softened a mandatory-tier claim.** A `safety-reviewer` censused
  every IIHF major-penalty clause: **21 read *may assess*, only four read *shall assess* — and 43.3
  is one of the four.** *"At their discretion"* is boilerplate carried across the book; **`shall` is
  the distinguishing word.** Inserting the discretion limb bare would have told a British reader the
  checking-from-behind major is as optional as the boarding major. ⚠️ **The document already teaches
  this frame three bullets below at `:450` — the fifth time today the answer was already written down
  in the repository.** Record:
  [`iihf_43_discretion_refuted_2026-09-22.md`](../reviews/iihf_43_discretion_refuted_2026-09-22.md).
- **CLOSED — `rules_primer.md:114`, and it was SHARPER than the brief said.** The coordinator relayed
  the both-on-the-ice limb as *"near-tautological"*. It is **conjunctive** and it is the other half
  of the Casebook's own test, which the document's ellipsis had elided. Replaced with the unellipsed
  quotation — a limb added, provenance improved, nothing softened.
- ⚠️ **A DECOY recorded, not edited:** `rules_primer.md:104` (*"USA Hockey Rule 204(b) writes no
  distance at all"*) is **correct**, but `sources/usah.txt:7310` carries a *"within 10 feet of the
  players' bench"* rule with the same competitive-advantage limb — **in the Disabled (sled) Hockey
  section.** A future reviewer grepping for a distance will land on it and "refute" a correct line.

- **CLOSED — the two `special_teams.md` rules findings, by REFUTATION.** Both were already repaired;
  the row had been written against HEAD. The agent verified the underlying rule premise anyway and
  **counted the books itself**: USA Hockey 610(c), Hockey Canada 10.1(ii) and CARHA 75(b) are each
  deliberate-only. It then found and repaired **two different defects** — an Overview clause that
  voiced alone told a USA Hockey goalie a deliberate flip-out is free, and a Key Takeaway attributing
  the British answer to the wrong IIHF edition. ⚠️ **Coordinator census run on its handover: NO other
  document makes the edition claim, and `faceoffs.md:480` had independently reached the same
  edition-independent framing.** Record:
  [`special_teams_rules_round_2026-09-22.md`](../reviews/special_teams_rules_round_2026-09-22.md).

- **CLOSED — both `passing_and_receiving.md` rows, on measurement.** `:183` is 183/200 and the
  inversion risk is gone **structurally** — *"instead"* sits after a sentence boundary, so the
  prohibition closes before the correction opens. `:290`'s `Risk:` line is present at 169/200.
  ⚠️ **The brief's third item was REFUTED: the passer's duty was already FOUR layers deep**, and
  acting on the brief would have duplicated two safety limbs. The one layer genuinely missing was
  `## Key focus`, repaired **into the same paragraph** so the condition shares the instruction's
  spoken `<p>`. Record:
  [`passer_duty_key_focus_2026-09-22.md`](../reviews/passer_duty_key_focus_2026-09-22.md).

- **CLOSED — the four `skating.md` quote drifts.** All four repaired to the corpus's bracket form;
  `check_quote_drift.py` on that file now reads **clean=36 flagged=0**. ⚠️ **Listener cost measured
  and is ZERO** — `md_to_speech.py` strips the brackets, re-rendered and confirmed. Record:
  [`quote_drift_skating_2026-09-22.md`](../reviews/quote_drift_skating_2026-09-22.md).
  ⚠️ **The agent flagged three lines in that file as not its own (`:23`, `:170`, `:848`) and asked
  for an owner before staging. They belong to the earlier `skating.md` negative-existence-claim wave
  this session, which has its own closed row — accounted for and reviewed.** The flag was right to
  raise; the answer is that they are owned.

- **CLOSED — `goaltender.md`'s net-front unary and the five-arrangement refutation (was 🔴).**
  `:513` now reads as a `Convention:` naming the coaching choice, the low-zone-collapse answer, the
  man-on-man/hybrid answer, **and** that it can as easily be a forward. The six sites are repaired.
  ⚠️ **KEEP THE TWO LESSONS — they outlive the row.** (1) The coordinator's counter-argument
  (*"the hybrid answer IS the man-on-man answer"*) was **refuted against the owner**:
  `defensive_zone_coverage.md:106` enumerates **five** arrangements and gives the hybrid its own
  entry — man-SHAPED, not man-IDENTICAL, because the hybrid restricts the pool to the low three.
  (2) ⚠️ **A UNARY IS STRUCTURALLY INVISIBLE TO THE CENSUS**, which keys on a contrast construction.
  It was found by an agent grepping its own file for `defenceman's job` **after** reading the
  context — by judgement, not by any pattern.

- **CLOSED — the `winger.md` hybrid dividing-line contradiction (was 🔴🔴).** All FIVE sites now
  hedge: `:15`, `:23`, `:125`, `:723` and `:724` each name the alternatives (dots / hash marks / tops
  of the circles) or point at the team's own line, and `:142` carries the full explanation.
  ⚠️ **`grep` confirms the flat *"only below the hash marks"* commitment is gone CORPUS-WIDE**, not
  merely in this file. Matches both owners — `language_and_glossary.md:303` and
  `defensive_zone_coverage.md:779`.
  ⚠️ **Keep the lesson, which outlives the row:** the contradiction was created INSIDE ONE AGENT'S
  OWN WORK, in one edit — hedged where it was thinking about the figure, propagated flat where it was
  thinking about something else. **A whole-file diff at the end is what catches that; the hunks
  never will.**

- **The caption layer carried the claim the prose had just been repaired of.** One agent, all of
  `site/src/diagrams/*.mjs`. **11 of 12 captions were correct**; the twelfth contradicted its own
  host two lines above the marker, in both `caption` and `describe`. Rebuilt and re-certified —
  `check_absolutes.py` now passes over **408** caption/describe units. Record:
  [`caption_layer_high_slot_2026-09-22.md`](../reviews/caption_layer_high_slot_2026-09-22.md).
- **Three Criticals/Majors verified repaired and closed:** `special_teams.md:939` now carries the
  *"never from a screening position"* limb (183/200, nothing evicted); `passing_and_receiving.md:203`
  now cites **Hockey Canada 7.5** with its verbatim wording and the non-entitlement sentence, and the
  licence phrasing is **gone corpus-wide**; `body_contact_and_battles.md:750` now says **four**
  situations, carries the rule number, and records that the list is expressly non-exhaustive.

- **The low-zone-collapse rotation, scoped across all three positions** — `center.md`, `defender.md`
  and `winger.md`, three disjoint agents. **Closed the `center.md:108` CRITICAL goalmouth unary and
  the `center.md:23` vs `:735` MAJOR self-contradiction.** The three-way diff both agents asked for
  was run by the coordinator and is **clean — the scope clause is byte-identical in all three.**
  Record: [`positions_rotation_scope_2026-09-22.md`](../reviews/positions_rotation_scope_2026-09-22.md).
  ⚠️ **Agreement is not correctness**: the claim is a system description with no primary source on
  disk, so it is now propagated identically across three documents on the strength of the corpus's
  own consistency alone.

- **`link_baseline.tsv` AU row updated.** ⚠️ **The byte delta was an ENCODING artefact, not content**:
  `curl --compressed` returns 30,474 today and gzip of today's body is 30,475, so the baseline's
  30,533 was a **gzip transfer size**. A prior verifier's explanation (*"added script/banner
  payload"*) was **fabricated** — its conclusion was right and its reason was invented. The row now
  records the trap. ⚠️ **Other rows may carry the same artefact; not audited.**
- **The date question is SETTLED.** `git log -S"ranked by none of them"` dates the claim to
  **`84671fb`, 2 September 2026**; the AU list has existed since **22 April 2026** (Wayback) and by
  its own metadata since **24 March**. ⚠️ **So it was WRONG WHEN WRITTEN — not link rot, not drift.**
- **The `sources/` extraction question is DECIDED: do not do it.** `skating.md` cites **eleven-plus**
  live coaching pages and exactly none is on disk. Making one the exception *"makes the absence of the
  other ten look like a judgement rather than a convention."*
- [ ] ⚠️ **But the gate found a real corpus-wide hole underneath it:** `check_quote_drift.py`'s own
      docstring says it **cannot check a quotation whose source is not on disk** — so **every
      quotation from every coaching web page in this corpus is outside the one tool built to catch
      drift.** Two cheap candidates, neither for this commit: a `quoted_string`/`read_date` column in
      `link_baseline.tsv`, or recording the Wayback timestamp beside each cited URL.
- [x] **CLOSED 22 Sep — `skating.md:848` quote drift.** The quotation now runs to the source
      sentence's own end (*"a multi-year process that requires dedicated, specialized coaching."*),
      so the terminal period is the source's. `check_quote_drift.py` on this file no longer flags it.
      ⚠️ **Found by `check_plan_rows.py`, which flagged the ROW's quote as no longer reading as
      written** — the intended signal, working. **The row was stale, not the corpus.**
- [x] **CLOSED — all four repaired to the bracket form**; `check_quote_drift.py` on that file is
      **clean=36 flagged=0**, listener cost measured at **zero** (the renderer strips brackets).
      ⚠️ **But the corpus-wide `CASE` row governs: the 20 September house-style decision STANDS and
      those 314 must NOT be swept.** These four were repaired before that decision was found — the
      repair is harmless and internally consistent, **and it is NOT a precedent.**


### ⚠️ `sources/page_1975.txt` is on disk, cited, and has NO entry in `sources/README.md`

**Found 22 September 2026** while checking a `rules-verifier`'s report that the agent source table
was short. The table finding was a **false positive in the way it was first checked** — `README.md`
names those files without the `.txt` suffix, so a grep for `ihuk_junior_roc.txt` misses an entry that
exists. ⚠️ **Recorded because the coordinator nearly filed four phantom defects off that grep.** One
file, however, is genuinely absent.

`sources/page_1975.txt` — **Pagé (1975), *Biomechanics of Forward Skating in Ice Hockey*, Dalhousie
master's thesis**, 122,720 bytes, a scanned document whose OCR is visibly rough (its first lines read
`1)AL- MS5`, `?HYS .ED`). It is the primary source behind `technique/skating.md`'s recovery-time
claims, and the numbers are in it: `0.37` ×1, `0.48` ×3, `74.2` ×3, `recovery` ×75, `discriminant`
×17. It is cited in three `project/reviews/` records.

⚠️ **CLAUDE.md's rule is "READ A SOURCE'S ENTRY IN `sources/README.md` BEFORE CONCLUDING ANYTHING
ABOUT WHAT THAT SOURCE CONTAINS." An agent obeying that instruction for Pagé finds nothing** — and
the natural conclusion from an empty README is that the source is not on disk. This is the routing
failure CLAUDE.md warns about four times over, in the file that is supposed to prevent it.

- [x] **DONE 22 September, between waves.** `sources/README.md` now carries a full entry and a row in
      the ratio table. ⚠️ **The `source-verifier` did corroborate it independently — it filed the same
      gap as "the fifth instance of the class" without having seen the coordinator's note.**
      ⚠️ **Two things the entry records that were not in the original finding:** the thesis is **not in
      `scripts/fetch_sources.sh`** (`grep -c` returns 0), so unlike every rulebook here **it cannot be
      rebuilt if lost — the 23 MB scan on disk is the only copy**; and at a **0.53%** text-to-PDF ratio
      it sits a hair above this project's own image-only threshold while having a **genuine, greppable
      text layer**. It is now written up as the **counter-example to the ratio heuristic**: a low ratio
      is a reason to look, never a reason to conclude.
- [ ] **Record a retrievable source for `page_1975`, or accept it as irreplaceable in writing.**

### 🔴 NEW, OPEN — `special_teams.md:941` reads as though a Hockey Canada goalie has no no-glass relief

**Handed back 22 September by the agent that found it, which declined to touch it because the line
belongs to an earlier wave.**

`:941` states CARHA 55(a)'s exemptions (no-glass spot, puck touching glass, deflection off a player
or official) and attributes them to **CARHA alone**. Hockey Canada publishes the **same** exemptions
for its 10.1(v) goaltender limb at **Interpretation 5 to Rule 10.1(a)** (`sources/hc.txt:7538-7550`)
— ⚠️ **plus a condition CARHA has no equivalent of**: *"both ends of the rink must be similar. If
there is glass at one end only, then the rule would not apply."*

⚠️ **That Hockey Canada condition appears NOWHERE in this document.** Voiced alone, `:941` reads as
though a Hockey Canada goalie has no relief at a no-glass spot.

- [ ] Fix. **The error is in the SAFE direction, so this is a Major, not a Critical.** The line is at
      **288/300 — 12 characters of headroom.** ⚠️ **Try SUBSTITUTION before deciding it cannot fit,
      and never trade out a caveat to make room.** Verify the `--near` figure yourself rather than
      trusting this row.

### ✅ CLOSED 22 September — `skating.md`'s refuted negative existence claim, and what it exposed

The Critical is repaired at `:23`, `:62` and **`:170`** — the third being a **second instance of the
same class the repairing agent found itself** (*"nobody has ranked skating faults by size"*, which
would have re-created the refuted claim one section below the fix under different wording).
Verified by the coordinator in the working tree. Scepticism kept, overstatement gone: *"nobody has
counted skating faults by frequency"* and *"coaching emphasis rather than a counted finding"* both
survive, and the rank is now carried as **"a rank asserted, not a rank counted."**

⚠️ **The detail that matters most is how ordinary the failure was.** The refuting sentence is the
**first bullet of a four-item list this document had already quoted twice** — `:220` cites that
list's *"The Toe Flick"* item and `:258` its *"Swinging the Arms Side-to-Side"* item. **It was not a
source nobody had read. It was the first line of a list the document had already mined, twice.**

The youth-scope objection was considered and **deliberately not used to discount the source**: the
list introduces itself as *"these common skating mistakes"*, so the youth clause scopes the
population rather than the subject — and the document already admits Cutting Edge's two lists while
disclosing that both are *"written about young players."* **Admitting a youth-scoped source when it
is silent on ranking and excluding one when it states a rank is selecting on the answer.**

- [x] ⚠️ **Sweep run 22 September: the phrasing class is now EMPTY in `content/`** — no
      *"ranked by none"* / *"named by none"* / *"counted by none"* survives. But the sweep was run
      **after** the repair, so it cannot say whether others existed before. ⚠️ **And a broader
      negative-existence regex returns 57 hits that are almost entirely ordinary prose
      (*"not one of them is a single word"*, *"attack the space between two defenders, not one of
      them"*), which is precisely why `check_disclosures.py` uses narrow patterns — a wider net here
      is not a better tool, it is an unreadable one.** The finding stands as a caution, not a
      tool change.
- [ ] 🔴 **`check_disclosures.py`'s pattern gap is real and unclosed.** ⚠️ **The old
      wording *"ranked by none of them"* matched none of the tool's patterns, so the summary-layer
      copy of a refuted disclosure was on no worklist while the body copy was.** A negative existence
      claim phrased as *"…by none of them"*, *"named by none"*, *"ranked by no one"* escapes it
      entirely. **A corpus-wide sweep for that phrasing has not been run, and the tool cannot be the
      thing that finds them.** Coordinator work, between waves.
- [ ] **Re-read the other cited coaching pages.** Only Athletes Untapped was refetched. Cutting Edge,
      Prodigy Hockey, NTC Hockey, How To Hockey and the Hockey Institute were taken on the document's
      own characterisation. ⚠️ **The failure mode that produced this defect — a cited page whose
      first bullet nobody re-read — is not excluded for any of them.**
- [ ] ⚠️ **Nothing records when this page's mistakes list was last read.** The trailer dates only the
      *timeframes* refetch (2 September 2026), so it cannot be established whether the claim was true
      when written and drifted, or was wrong from the start. **Record read-dates per page, not per
      source.**

### 🔴 OPEN — findings from the second review pass, by document

**`passing_and_receiving.md` — M1: the system it assumes is named in ONE line of body prose and in no
summary layer.** `:678` names *"low zone collapse defensive-zone coverage… with a 2-1-2 forecheck"*,
and `grep` returns **exactly that one line**. The three own-zone prohibitions carry cardinal-rule
steps 2 and 3 in four layers and **step 1 — naming the system — in none of them.** Style guide: *"The
house default… Say so when you rely on it."* ⚠️ **Sharpened by the fact that the same wave, the same
hour, added exactly this naming to `switching_positions.md` and called it the repair. The two
documents were held to different standards.**

**`switching_positions.md` — M2: a new unsupported superlative that contradicts its own next clause.**
`:27` says the move to defence *"puts a longer timeline on it than any of the others"* and then *"going
into the net is a larger jump again"* — so goal is both larger and shorter. The section it summarises
(`:406`) opens *"There is no published measurement of how long a position switch takes"* and never
ranks the switches or rates goaltending. **Introduced by the repair.**

**`switching_positions.md` — M3: a self-description broader than the document supports.** `:23` says
*"each section names what changes under man-on-man"*. Every cited line checks out and the
*"throughout"* half is true — **but four sections name no such alternative.** Scope it.

**Minors worth a pass, not a sweep:** two dangling demonstratives introduced by the repairs
(`switching_positions.md:25` *"Those trades"* — the word *trade* first appears in the NEXT paragraph;
`passing_and_receiving.md:22` *"Those preferences"* — the antecedents are tasks, and it misidentifies
which three preferences conflict); *"the only lever"* stated in the Overview without the craft label
the body carries; `passing_and_receiving.md` Key focus `:14` and KT 3 `:821` open with an **identical
bold sentence**; *"checker"* used five times before `:32` disambiguates it, across a chunk boundary;
and a **date disagreement** — Miles Wood's 24.82 mph is *"10 April 2025"* at `:49` and *"11 April
2025"* at `:843`. **→ `source-verifier`.**

**Upheld, do not touch:** the wall-contact override is complete and identical in every layer of both
files; `switching_positions.md`'s *"no published evidence base"* disclosure (it names the six books
searched, names the two casebooks NOT held, and claims nothing about them — one of the best-scoped in
the corpus); the centre-covers-most-ice folklore inversion; and the pass-speed disclosure that *"came
back with a reason, not a shrug."*

### 🔴 OPEN — a safety limb carried ONLY by a borrowed caption, and the census that class deserves

**Found 22 September by the agent repairing `passing_and_receiving.md`, against its own work.** Before
that repair, the rim/bank section carried **no** wall-contact posture in its body or facts layers —
but **two borrowed `winger.md` diagrams are spoken into the document, and both captions end with the
full posture** (*"Skates parallel to the boards, forearm and hip into the contact, head up and chin
off your chest…"*).

⚠️ **So the section was not naked — it was carried only by a caption imported from another document.**
That is worse as a provenance story than "missing" and better as a hazard story, and **no layer test
keyed on the document's own layers would have found either fact.**

**Census run by the coordinator, 22 September:** `scripts/check_caption_hosts.py` reports **204
diagrams, 87 embedded in more than one document, 127 caption/non-owner-host pairs — and 74 of those
are rule-like** (`--rule-like`). ⚠️ **Run the tool; do not quote those figures** — the corpus is being
edited and a count goes stale silently.

- [ ] **Work the `--rule-like` list, one agent per host document** (`--by-host` groups it). ⚠️
      **WORKLIST: a diagram reused in a second document is the NORMAL case and most hits are
      correct.** Only a layer test on the host decides.
- [ ] ⚠️ **Caption text is often a SHARED CONSTANT** — editing one to repair one host silently
      rewrites every caption that imports it. `grep -ln '<CONSTANT>' site/src/diagrams/*.mjs` first.
- [ ] **The general question worth settling:** is a safety limb delivered only by a borrowed caption
      ever sufficient? The repair above decided no, and added it to the body and facts layers.
      **Whether that is the standard has not been decided.**

### ⚠️⚠️ THE COORDINATOR'S BRIEFS WERE WRONG **TEN** TIMES ON 22 SEPTEMBER — one reached the corpus

**Full record: [`../reviews/layer_differentiation_round_2026-09-22.md`](../reviews/layer_differentiation_round_2026-09-22.md) §2.**

**Recorded because this file's own rule says the briefs are more defective than the corpus, and this
round proved it again in the dispatcher's favourite direction: confidently, in writing, repeatedly.**

1. 🔴 **"Every layer is voiced ALONE, in its own `<p>` with a 300 ms break either side" — FALSE as
   generalised, and it went into at least five briefs.** ⚠️ **Only ` ```facts ` lines get that
   treatment.** Ordinary prose paragraphs are grouped: `special_teams.md`'s Overview renders as
   **five `<p>` inside ONE `<speak>` with two breaks**, while its ¶5 lands alone in the next chunk.
   **Verified by the coordinator by rendering, after two agents independently refuted it.** CLAUDE.md
   states the rule correctly and scoped to facts lines; **the over-generalisation is the
   coordinator's.** ⚠️ **It changes conclusions**: a prose paragraph is exposed only if it *starts a
   chunk*, and chunk boundaries move when text above them changes. **So the exposure has to be
   re-checked by rendering after every edit, not asserted from the layer's name.**
   - [ ] Fix the same over-generalisation in `scripts/check_layer_echo.py`'s docstring and in this
         file's own layer-differentiation section. ⚠️ **Between waves — agents are running that tool
         now.**
2. **A source line cited under the wrong case.** A brief gave `sources/ibc.txt:672` for *"skates
   parallel to the boards"* as the Case-2 instruction. It is **Case 3** — *"A. Checked Into The
   Boards"*, the player already facing the wall. Case 2 is `:1450`/`:1532`. ⚠️ **The corpus uses it
   correctly in every instance; only the brief was wrong**, and a reviewer that trusted the brief
   would have "fixed" correct text.
3. **A false premise about which layer pair was defective.** `passing_and_receiving.md`'s flagged
   Key focus → Key Takeaways pair was a **false positive**; the real defect was Key focus → Overview,
   which the dispatcher's measurement never pointed at.

4. ⚠️🔴 **A RULE NUMBER ATTRIBUTED TO THE WRONG PLACE — the most dangerous of the eight.** A brief
   said `body_contact_and_battles.md:721` carried a **Hockey Canada 7.5** quotation. ⚠️ **`:721` is
   IIHF 48.1.** The Hockey Canada checking-from-behind scenario is at **`:750`**, and **the corpus
   states it there deliberately WITHOUT a rule number** — while numbering checking from behind as
   *"7.5, 608"* elsewhere, at `:525`. **The agent refused to write "7.5" anywhere and said why.** Had
   it trusted the brief, a rule number the corpus had deliberately withheld would have been written
   into a safety passage on the dispatcher's say-so. **This is non-negotiable 2 reached through a
   brief rather than through memory.**
5. **A layer mis-attributed.** A brief placed the rim's *"Beats: A checker sealing you against the
   wall"* in the facts block. **It is a TABLE CELL** at `:191`; the facts block never says it. The
   premise survived, the layer did not.
6. **A line number off by one** (`:289` cited as `:290`), and **7.** a stale line number quoted across
   an edit that had shifted the file, and **8.** an over-generalised claim about what
   `check_absolutes.py` covers.

10. ⚠️ **A "dominant form" asserted without measuring it — and the suggested fix was wrong too.** A
    brief called *"into the contact"* the corpus's dominant phrasing for **forearm and hip**. A census
    (`grep -roh "forearm and hip[^.;—]\{0,40\}" content/`) shows the **wall** referent dominating
    roughly **20 to 3**. ⚠️ **And the real defect was larger than the brief's "Minor, optional":**
    *"forearm and hip to the checker"* was the **only** place in the corpus putting that pair on the
    checker, contradicting the same document's wall-contact override 200 lines above. **The agent
    found the right answer (the wall) by censusing rather than by taking the brief's word.**

⚠️ **THE PATTERN, and it is the finding of the round: errors 1, 8 and 10 were all plausible
GENERALISATIONS stated with confidence.** None was carelessness about a fact; each asserted a
**scope** the dispatcher had not measured. **That is the failure mode of the coordinating role, and
no checker in this repository can see it.** The defence is the same one the corpus uses on itself:
**measure before asserting a prevalence, and say "I have not measured this" when you have not.**

**The instruction that caught nine of ten was "refute the brief before acting on it."** ⚠️ **Not one
was caught by a checker.** ⚠️⚠️ **And it did NOT catch number nine — the one that reached the corpus —
because that brief's FACTS were right and its SCOPE was wrong. Only a reviewer with the primary text
open found it.** It is not ceremony — it is the only thing standing between a
confident dispatcher and the corpus. Keep it in every brief, and keep the "verify every quotation and
line number in this brief" sentence with it.

### ⚠️ Podcast script defects found by the first `source-verifier` ever run on one

The skating episode's script, **in shipped audio**. The corpus-side half is dispatched separately (see
the `skating.md` row); these are script-side and **fixing the script does not fix the audio — that
needs re-synthesis.**

- 🔴 **A fabricated number in the safety block.** Script `:97` says the angle *"is what you did **five
  strides earlier**"*. ⚠️ **The owner says "several strides out" three times (`skating.md:29`, `:117`,
  `:125`) and never a number**; `grep -c 'five strides'` is **0** in the document, in `provenance.md`
  and in `notes.md`, and the script's own *"Claims deliberately NOT made"* section states *"No
  stride-count or speed statistic stated as a number."* **Non-negotiable 1, inside the block the
  episode twice says outranks everything else**, and the provenance file whose whole purpose is to
  catch this did not.
- **A hedge dropped between owner and script — and the provenance row dropped it too.**
  `skating.md:233` says recovery speed is *"**one of** the clearest differences"*; the script says it
  *"**is where** the difference… actually shows up"*. ⚠️ **The provenance row itself already reads
  *"Recovery speed is where the fast/slow difference shows up"*, so the mapping looks clean** — the
  qualifier was lost before the row was written. Pagé's own abstract gives **two co-equal factors**
  (stride width and recovery time), and the 74.2% is from the discriminant analysis with velocity
  partialled out, a different question.
- **An undisclosed negative existence claim**: *"The recovery is the one nobody talks about"* — no
  provenance row, not in the document, not in the notes.
- **Provenance pointer drift into siblings.** Every `skating.md` line cited is correct at the pinned
  commit; **the two siblings are not pinned and both have drifted** —
  `body_contact_and_battles.md:728` is now `:748`, and four `conditioning_and_recovery.md` pointers
  have moved. **Substance verified verbatim in all five cases; only the coordinates moved.** The
  notes file predicted exactly this.
- ⚠️ **One pointer degrades better than the other, and it is worth copying.** `:85` names the three
  things behind the pointer, so a listener who never finds the document still knows an ambulance can
  be the right call. `:111` names nothing and ends on *"Read it in full"* — **an imperative a listener
  in a car cannot act on, with no title, no URL and nothing to write down.**

### ⚠️ Layer differentiation — HIGHEST-PRIORITY CONTENT FOCUS

**Owner instruction, 22 September 2026:** *"it should feel more re-inforcing and adding detail
rather than repetitive."* The corpus fell into this trap before — Key Takeaways, the summary and
the body carrying the same content in the same words, so that reading them one after another felt
like being told the same thing three times.

**The rule. Each layer does a DIFFERENT JOB. Same fact, different job, is reinforcement and is the
goal. Same fact, same job, same words, is the defect.**

| Layer | Its job, and only its job |
|---|---|
| `## Key focus` | **The instruction** — what to do, plus the condition that makes it safe or legal |
| `## Overview` | **The map, not the trip** — what this is, why it matters, what the document covers, and the hedges and alternatives that qualify the instruction |
| body | **The mechanism** — how and why it works, the worked example, the named alternatives |
| `## Common Mistakes` | **The failure mode** — what getting it wrong looks like from the inside |
| `## Key Takeaways` | **The kernel** — what is worth retaining a week later |

⚠️ **This is NOT a licence to delete, and three kinds of repetition are MANDATORY.** They are the
same three `check_caption_echo.py` carries, for the same reasons:

1. **A safety or legal condition must appear in the same visible and spoken unit as its
   instruction.** If the instruction is in three layers, the condition is in three layers.
   ⚠️ **Never trade a caveat away to make a layer look less repetitive** — that inverts
   non-negotiable 4 and re-creates the round-10 criticals.
2. **An honest disclosure voiced in two layers is propagation.** Each layer is voiced alone with a
   300 ms break either side; a listener who meets one may never meet the other.
3. **A definition must match its owner word for word.** Rewording to look less repetitive is how a
   region or rule definition drifts — `check_zones.py` exists because of exactly that.

⚠️ **And repetition is a CORRECTNESS risk, not only a reading one.** `content_style_guide.md`:
*"A third restatement is one more place for a correction to fail to reach."* Every round-10 critical
was a correction that reached the body and stopped. **So the fix is differentiation, never deletion**
— cut the restatement of the *instruction*, keep every caveat, hedge, alternative and disclosure.

⚠️⚠️ **SECOND AND THIRD BLIND SPOTS, FOUND 22 SEPTEMBER BY A `content-reviewer` THAT READ THE TOOL'S
SOURCE RATHER THAN ITS OUTPUT.** Both point the same way as the first — they make a repair that moved
a defect look like a clean win.

**(a) `PAIRS` omits `("Overview", "Common Mistakes")`.** Five of the six pairs are measured, and the
missing one has the Overview as a member — **the layer this entire wave rewrites.** ⚠️ **A live
instance is in this wave's own output:** `switching_positions.md`'s new Overview `:23` ends *"…is the
one person on the ice with an unlimited licence to ask which ones their team plays"* and Common
Mistakes `:481` ends *"…is the one person on the ice with an unlimited licence to ask."* — **18 words
verbatim.** At HEAD the Overview read *"a new player has an unlimited licence to ask"*, five shared
words. **The repair roughly TRIPLED verbatim overlap with Common Mistakes while cutting it with Key
focus, and scored as a clean win.**

**(b) The `_words()` filter drops every token of four characters or fewer**, so the percentage
measures *content-word* overlap, not what a listener hears. Those same 18 verbatim words reduce to
four content words and produce **zero** 6-shingles. ⚠️ **The reviewer computed the missing pair
directly: 0.0%, before and after. So adding the pair alone would still not surface this instance.**

- [x] **Sixth pair added and the docstring corrected, 22 September, between waves** — all three blind
      spots and the voiced-alone premise are now in the tool's own docstring, so nobody meets the tool
      without meeting them.
- [x] ⚠️ **Census run — and it shows the pair addition does NOT find the class it was added for.**
      Corpus-wide, Overview → Common Mistakes tops out at **14.3%** (`rules_primer.md`), then 8.3%
      and 6.1%. ⚠️ **The `switching_positions.md` instance that prompted the fix — 18 verbatim words —
      still scores 0.0%**, exactly as the reviewer predicted, because the ≤4-character filter eats it.
      **Adding the pair closed a structural gap; it did not close the detection gap.** Recorded so the
      next reader does not mistake a green census for coverage.
- [x] ⚠️ **AND THE INSTANCE ITSELF IS NOW REPAIRED — verified 22 September.** `switching_positions.md`'s
      Overview `:23` no longer ends *"…is the one person on the ice with an unlimited licence to ask
      which ones their team plays"*; it now closes *"so find out which ones your team plays before you
      are asked to play inside them."* **The 18-word verbatim run is gone**, and the *"unlimited
      licence to ask"* phrasing now lives only in Common Mistakes `:481`, where it does that layer's
      own job. ⚠️ **The tool still scores it 0.0% and always did — it was found by reading and closed
      by reading, which is the whole point of the entry above.**
- [x] ⚠️⚠️ **DECIDED 22 September, BY MEASUREMENT, AND THE ANSWER IS DO NOT BUILD IT.** The question
      was whether the verbatim-phrase class deserves a second measure. A throwaway probe (scratchpad,
      deliberately **not** added to `scripts/`) extracted the four summary layers, took **maximal**
      verbatim runs rather than overlapping shingles, and measured every layer pair corpus-wide.

      **Result: 1,927 maximal verbatim runs of ≥8 words, across all 39 documents.** That alone makes
      it a noise generator rather than a worklist.

      ⚠️⚠️ **But the ranking is the real finding, and it is the dangerous one. Sorted by run length,
      the top hits are THE THREE MANDATORY REPETITIONS:**

      | Run | Where | What it actually is |
      |---|---|---|
      | 79w | `passing_and_receiving.md` Key focus → Key Takeaways | the boards-contact safety limb — *"never take contact with your back to the boards and never duck… forearm and hip, head up and chin off your chest"* |
      | 169w | `rules_primer.md` Overview → Common Mistakes | quoted Hockey Canada interpretation — a definition that MUST match word for word |
      | 71w | `conditioning_and_recovery.md` Overview → Key Takeaways | CRT6 concussion red flags — *"assume a possible spinal injury in any head injury, do not move them, do not remove the helmet"* |
      | 134w | `defender.md` Common Mistakes → Key Takeaways | hit-from-behind hazard + USA Hockey's warning |
      | 88w | `game_management.md` Common Mistakes → Key Takeaways | *"it holds in every league, checking or not"* — the same safety limb |

      ⚠️ **A tool ranked by run length puts the text that must NEVER be cut at the top of its
      worklist.** An agent told to work the top hits would strip safety limbs, quoted rulebook
      wording and medical disclosures — **which is the round-10 critical mechanism, mechanised and
      handed a ranking that endorses it.** Non-negotiables 1, 3 and 4 all point the other way.

      **So the class stays undetected on purpose.** It is a thing only reading finds, and
      `check_layer_echo.py`'s ≤4-character filter — logged above as blind spot (b) — turns out to be
      load-bearing rather than merely imprecise: it is what stops the tool ranking safety text first.
      ⚠️ **Record this before anyone "fixes" that filter.**

      ⚠️ **And the probe corrected the coordinator twice before it was trustworthy:** its first
      version counted overlapping shingles and reported **9,400** where the real figure was 1,927,
      and its layer extraction had to be rewritten to match `check_layer_echo.py`'s. **Neither error
      was caught by a checker; both were caught by the figure looking implausible.**

⚠️⚠️ **THE TOOL IS BLIND IN THE DANGEROUS DIRECTION, AND A LIVE INSTANCE WAS FOUND ON THE DAY IT
WAS WRITTEN.** Reported 22 September 2026 by a repair agent, against its own clean run:

> `conditioning_and_recovery.md`'s `## Overview` gives **six** of CRT6's **ten** concussion red
> flags, while `## Key focus` and Key Takeaways #1 give all ten. Voiced alone, that layer hands a
> listener a partial safety list. **A layer-echo tool can never surface this: partial duplication
> scores LOWER, so the most dangerous version of this defect is invisible to the measurement that
> sent me here.**

**Read that twice. A layer that carries a safety list in full scores HIGH and looks like a defect.
A layer that carries six of ten scores LOW and looks clean.** The tool's incentive gradient points
at truncating safety lists, which is the exact inverse of what this corpus needs. ⚠️ **So a low
score is not merely "not evidence of success" — for a safety list it is actively suspicious.**

- [ ] **Add this to `check_layer_echo.py`'s docstring** so nobody meets the tool without meeting the
      blind spot. ⚠️ Coordinator-only, and **between waves, not during one** — the tool is being run
      by live agents right now, and changing a shared tool mid-wave is how round 59 invalidated an
      agent's findings.
- [ ] **A `safety-reviewer` is dispatched on the CRT6 instance.** Its verdict, not the tool's score,
      settles that one.
- [ ] ⚠️ **Sweep for the CLASS, not just the instance:** any safety list, red-flag set, checklist or
      ordered sequence that appears in more than one layer at different lengths. `check_layer_echo`
      cannot find these. A layer test can.

**The tool.** `python3 scripts/check_layer_echo.py` ranks layer pairs by verbatim 6-word-phrase
overlap; `--show <doc>` prints the shared phrases; `--min N` filters. ⚠️ **WORKLIST, NOT A GATE, and
no figure is written here — run it.** ⚠️ **The target is never zero**, and a document scoring 0% is
not thereby good: it may simply have failed to propagate. **This tool cannot tell restatement from
propagation. Only reading both layers can.**

**Worked example, verified 22 September 2026 — `content/systems/special_teams.md`.** Its `## Overview`
restates all five of `## Key focus`'s bold claims, **in the same order and in nearly the same words**,
and both are spoken consecutively. But it is **not pure restatement**: the Overview also adds the
definition of special teams and the `5-on-4` notation, the hedge *"a coaching judgement about danger
by location rather than a rule"*, the alternative *"shot-volume power plays do work"*, and
substantially more icing-exemption detail across three rule books. ⚠️ **So the repair is to stop the
Overview restating the instruction and keep everything it adds — which is exactly what deleting the
overlap would have destroyed.** Treat this as the model for the whole category.

- [ ] **Read every hit `check_layer_echo.py` reports and classify it** — restatement of the
      instruction (cuttable), or mandatory repetition (keep). Do not sweep. One agent per document,
      file ownership disjoint and verified.
- [ ] **Repair `special_teams.md` first**, as the worked example above, and record what the repair
      cost and kept so the next document has a pattern rather than a rule.
- [ ] **Decide whether the layer-job table belongs in `content_style_guide.md`.** It is a durable
      statement of what a correct document looks like, which is that file's remit — but the style
      guide is load-bearing and this has not been through review. **Not done unilaterally.**
- [ ] ⚠️ **Re-run after every repair.** A repair is new text and new text has not been reviewed; a
      differentiation edit can silently evict a caveat, which is the one outcome that matters here.

### ⚠️ The "unsourced absolute" convention has NO mechanical support — and a near-miss happened today

**Found 22 September 2026, by a repair agent catching itself.** While rewriting
`special_teams.md`'s Overview it drafted *"The one thing in this document the rule books genuinely
disagree about is…"* — **false**, and an unscoped absolute: the document records book-by-book
divergence on faceoff violations (76.6/76.7 vs 613(d) vs 6.2(e)), goaltender contact (607(c)/(e) vs
42.2–42.5), delay of game (63.2 vs 610(c) vs 10.1) and the home-team line change (81.4/82.1). It
also drafted and deleted *"no rule book ranks ice by danger"*, an unfalsifiable negative it had not
searched. **Both were caught by the agent, not by any tool.**

⚠️ **`check_absolutes.py` did not catch it and is NOT at fault** — read its docstring: it is scoped
to the **penalty-tier** subtype (a sentence denying a tier then granting it, unscoped by book). It
was never a general absolute detector, and describing it as one in a future brief would send an
agent looking for cover it does not provide.

**The convention exists and is one day old.** `content_style_guide.md` §"An unsourced 'only X' needs
the word softened, not just a trailing hedge" (added 21 September): *"when the unsourced word is
itself an absolute ('only,' 'always,' 'never,' 'nothing else') reword that word to a bounded
comparative first, then append the standard disclosure."* **Nothing checks it.**

- [ ] **Decide whether this class deserves a worklist tool** — and design it carefully before
      writing it. ⚠️ **The obvious pattern is actively dangerous here.** This corpus's safety
      instructions are *deliberately* absolute and must stay that way: *"never turn your back to the
      wall, at any speed and in any league"*, *"never duck or tuck your chin"*, *"never block from a
      position where you are blocking your own goalie's view"*. A tool that flags those, and any
      sweep over its output, would strip exactly the limbs 25 of 25 of which were just verified to
      survive into shipped audio. **The discriminator is an absolute in an unsourced claim ABOUT THE
      WORLD versus an absolute in a SAFETY INSTRUCTION** — and a tool cannot tell those apart, so it
      is a worklist that reports candidates, never a gate, and never swept.
- [ ] **Until then, say it in the brief.** An agent writing new prose in this corpus should be told
      the convention explicitly, because nothing will catch a violation for it.

### Group C enumerated — which documents would actually warrant a "Recognise it" section

The `Recognise it` census left this open: *"write only where a cue is safety-relevant or where a
coaching choice could be read as a law — a much smaller set than 28, and not enumerated."* Ranked
22 September by coaching-choice density (×2) plus safety density across the 28 group-C documents,
the top of the list is `body_contact_and_battles.md`, `defender.md`, `defending_the_rush.md`,
`center.md`, `game_management.md`, `risk_management.md` and `faceoffs.md`.

⚠️ **This is a ranking, not a work order, and it is lexical like the census before it.** Five of the
28 were being edited by live agents when it ran and their figures are unreliable. **And a high score
means the document has lots of coaching-choice and safety language — not that it lacks a cue.** The
census's own warning governs: read the document before writing into it, because the material may be
there in a phrasing nobody thought to grep for, and a second copy is the restatement defect this
plan ranks highest.

### Readability layering — the approved approach (owner-approved 22 September 2026)

**Do not adopt either template.** The seven-layer IA and the shipped spine are **not alternatives** —
the five slots are a *container*, the seven layers a *sequence inside the body*, and
`getting_started.md` already carries both without conflict. What the corpus actually has is measured
below; the gap is a **missing middle rung**, not a wrong template.

Measured 22 September 2026 across all 39 documents (⚠️ **run
`scripts/check_readability_census.py` and `scripts/check_layer_echo.py` rather than quoting these**):
`## Key focus`, `## Overview`, `## Common Mistakes`, `## Key Takeaways` are **39/39**;
`## Check yourself` **36/39**; `## Go deeper` **1/39** (`getting_started.md` only); Recognise it and
If your team differs, **0/39** as named layers. ⚠️ **So the plan's own phrase "Key focus + Go deeper
+ summaries" misdescribed what shipped — `Go deeper` is not a corpus-wide layer.**

**The defect is the cliff.** Key focus is a median **305 words** and Overview a median **561**, so
every document gives a reader ~866 words in under four minutes — that part works and is finished.
Beyond it the median body is **28,233 words** and `rules_primer.md` is **106,921**. There is nothing
in between, and nothing tells a reader whether they need the body at all or which part applies to them.

Approved approach:

- [ ] **Keep the five-slot spine.** Universal, working, and the one finished piece of this rollout.
- [x] ⚠️ **PRECURSOR CHECK DONE, 22 September 2026 — and it refuted the optimistic estimate.** Full
      measurement and method limits in
      [`../reviews/recognise_it_precursor_census_2026-09-22.md`](../reviews/recognise_it_precursor_census_2026-09-22.md).
      **The material mostly does not exist**: 5 documents carry a `##`-level cue section, 6 only a
      `###`-level one, and **28 have no cue heading at any level**. A broad prose pattern returned
      530 lines and looked like the optimistic answer; a read sample of 16 was ~4–5 genuine and the
      rest false positives, and a high-precision pattern returns **49 corpus-wide**, with **15 of the
      28 at zero**. Only 7 contiguous clusters exist and at least one is a watching *exercise*, not a
      cue. ⚠️ **So the work is WRITING, not promoting a heading, and the approved approach's cost
      estimate was wrong.**
- [ ] **Add "Recognise it" starting from the five documents that already do it** — not to all 39.
      `systems/defensive_zone_coverage.md`'s **`## How to Tell Which System Your Team Plays`** is the
      best in the corpus and is the pattern to name: ask the coach first, then five observable tells,
      serving the cardinal rule at the same time. The others are `neutral_zone_systems.md`,
      `getting_started.md`, `forechecking_systems.md`, `scanning_and_anticipation.md`.
- [ ] **Promote the six `###`-level cue sections to `##` where the document teaches a decision** — a
      cheap win needing no new prose. (`language_and_glossary`, `rules_primer`,
      `playing_without_the_puck`, `equipment`, `mental_game`, `goaltender`.)
- [ ] ⚠️ **NEVER gather the scattered cue sentences into a new section.** They are welded to their
      instruction, which is the correct state — `winger.md:148` reads *"It is tempting to chase the
      puck into the corner when you see your team battling there. In a collapse system, resist it."*
      Extracting the cue **separates it from the instruction**, which the design spec forbids in
      terms, and each layer is voiced alone with a 300 ms break either side so audio makes it worse.
      **A gathering pass would manufacture the defect the layer exists to prevent.**
- [ ] ⚠️ **Before writing into any of the 28, READ the document — the counts are LEXICAL.**
      `winger.md:148` is genuine recognition prose and matches none of the high-precision patterns.
      **49 is a floor, not a census**, and a zero means "zero of the phrasings searched for", not
      "no cue material". This is *an empty extraction is not an absence*, applied to the corpus's own
      census. **Writing a second copy of material already there is the restatement defect that is now
      this plan's highest priority.**
- [ ] **Add "If your team differs" only where the cardinal rule bites** — where a coaching choice
      could be read as a law of hockey. A safety layer, not a readability one.
- [ ] **Treat "Understand it" and "Go deeper" as already existing** under document-specific headings.
      **Do not rename 39 documents' body sections to a template** — the cost is high and the gain is
      a table of contents that reads identically on every page.
- [ ] **Audience routing is a `pathways.json` job, not a per-document layer job.** Six audiences and
      11 pathways already exist (9 reviewed, 2 draft), and the model is already right: beginner
      pathways deep-link to a *heading anchor*, while `adult-detail` routes to a *section hub* with
      an empty `docs` list, deliberately. ⚠️ **The gap: a pathway's `docs` entries are whole
      documents with no anchors**, so past the entry point a beginner is dropped at the top of 28,000
      words. **Anchoring those entries is cheaper than re-layering 39 documents and fixes more of the
      problem.** (Compare the standing note above about `parent-of-a-new-player` inheriting a
      document whose relevant section sits 80% through.)
- [ ] ⚠️ **`## Check yourself` contradicts the design spec and somebody has to settle it.** The spec
      says *"Do not make self-tests, interactive quizzes, scenario cards, or practice cards a default
      pattern"*; it is in **36 of 39** documents — exactly the default pattern that line forbids. It
      is also **spoken** (chunk 52 of 55 in the `skating` render), so a listener gets a quiz whose
      `§Overview` pointers they cannot click. ⚠️ **The corpus is probably right and the spec line
      stale** — it is retrieval practice with section pointers, deliberate and well built — **but
      that is a judgement, not a finding, and it is the owner's.** Until it is settled, do not
      add `Check yourself` to the remaining 3 and do not strip it from the 36.


### Podcast — engineering (absorbed from `PODCAST_AUTOMATION_LOCAL.md`, 22 September 2026)

**Orientation.** Episodes are synthesised from single-voice scripts through `scripts/md_to_speech.py`
/ `scripts/tts_sample.py` (Polly generative `Amy`, en-GB) — **not** NotebookLM's two-host Audio
Overview. Direction set by the owner 18 September 2026, commit `3aa176f`. Two episodes are fully
synthesised and cleared by text review: `skating` (17.7 min) and `equipment` (85.4 min). **Nobody has
listened to either by ear.** Full history:
[`../reviews/podcast_automation_plan_consolidated_2026-09-20.md`](../reviews/podcast_automation_plan_consolidated_2026-09-20.md).
⚠️ **The audio, the scripts and episode three's provenance now live at
`~/Documents/personal/ice_hockey_scripted_episodes/` — outside this repository**, rescued
22 September from an ephemeral scratchpad. `~/whisper-models/ggml-base.en.bin` (147,964,211 bytes)
is likewise outside it. Neither is backed up by this repo.

- **`source-verifier` has never been run on any podcast script.** The episode-three rules pass
  explicitly declared the script's research layer — meta-analyses, effect sizes, a retracted study
  and its retraction notice, cohort and VO2/specialisation figures — entirely unverified, calling it
  *"the larger half"* of the script. This is a **missing review dimension**, not a backlog row: a
  script gets whatever the coordinator happens to dispatch, unlike `content/`, which gets all five
  reviewing agents plus a commit gate. ⚠️ **Highest-value podcast item open.**
- **`scripts/md_to_speech.py` writes a synthesis engine into every manifest that does not exist in
  this region.** Re-verified 22 September: line 3798 emits `"voice": {"engine": "long-form", ...}`
  while line 3958's own printed cost table says `long-form` is *"unavailable in eu-west-2"*. Never
  touched since introduced. Not a live blocker — `build_podcast_audio.py` does not call Polly — but a
  trap for whoever writes the real synthesis step. Fix: name the engine actually used (`generative`)
  or omit the field. **Shared-tool change: make it between waves, not during one.**
- **`check_pointers.py` cannot be run against an episode script without a small tool change.**
  Re-verified 22 September: `main()` hardcodes `root / "content"` (lines 102 and 175), with no
  argument parsing. It is the closest existing tool to the link-layer safety class found in the
  skating episode — a spoken sentence routing a listener to another document with no clickable route
  — but its patterns match only in-document layers, not a pointer to a sibling document. **Both
  halves need doing**; extending the path argument alone gains nothing.
- [x] **Whisper transcription — DONE 22 September 2026, both cleared episodes.** Model fetched and
  **run**; `project/reviews/episode_transcription_verified_2026-09-22.md` has the full result.
  **25 of 25 safety limbs survived synthesis** (skating 15/15, equipment 10/10), including the
  chin inversion a chunk boundary was most likely to split and the disclosure that no rule book
  writes the second-hand-helmet instruction. Word counts within 0.3–1.7% of their scripts, so
  nothing of length went missing. Commands are in that record. ⚠️ **Known trap confirmed in
  practice: whisper mangles proper nouns** (*Tator* → "Tater", *forearm* → "for arm") — search a
  transcript semantically, never for an exact name.
  ⚠️ **This does NOT mean the episodes are verified.** A transcript proves the words are present,
  not that they are right and not that they sound acceptable. **Nobody has still listened to
  either**, and the reverse sweep against each source document's Common Mistakes and Key Takeaways
  was not re-run.

- ⚠️ **A listener cannot click a cross-reference, and it is in SHIPPED audio — now evidenced twice
  over.** The skating transcript routes a listener to another document twice, and **both times the
  material routed away is the more safety-critical half**: the concussion danger signs that
  separate *call an ambulance* from *drive them home*, and the whole of body contact. This is the
  same tension `recognise_it_precursor_census_2026-09-22.md` found from the other end — the corpus
  is right to punt to an owner document, and a listener is left without it. ⚠️ **It is a question
  about SCRIPTS AS A CLASS, not about these two episodes**, and it is not yet decided: restate the
  material in the episode, or accept the gap and say so aloud. `check_pointers.py` is the closest
  existing tool and still cannot read a script (see below).

- **Whether provenance pointers deserve a checker — undecided, and now evidenced.** No checker reads
  an episode's `provenance.md`, so a correct quotation under a wrong line pointer passes everything
  silently. One such instance existed and **was repaired by hand on 19 September**; it survived in
  this project's plan as an open item until 22 September because nothing connects the two. A worklist
  if ever built, **never a gate** — a pointer going stale after a source re-extraction is not a defect.
- **The `ice-hockey` AWS profile's SSO token expires, and its failure reads as a Polly outage.** Found
  22 September: `Token has expired and refresh failed`. ⚠️ **On 18 September the plan and a status
  report both said TTS was blocked when Polly had been reachable all along; an expired token is the
  mirror of that** — a working integration reporting as broken. **Check the token before concluding
  anything about Polly.** The fix needs a browser and is therefore the owner's: step 0 of
  [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md).

### Podcast — the owner's own steps

- **Blocked on two things only a human can do:** an **ear test** across TTS engines, and a
  **listening pass** on the two episodes cleared by transcript alone. Both are laid out with verified
  URLs in [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md). ⚠️ **Nothing in the engineering list
  above unblocks these, and they do not unblock each other** — the engine decision and the "does the
  scripted route sound right at all" question are separate.

### Readability — the rest (absorbed from `READABILITY_AND_DUAL_AUDIENCE.md`, 22 September 2026)

The design spec now lives at
[`../readability_and_dual_audience.md`](../readability_and_dual_audience.md). The layering question
it used to carry is **answered** — see "Readability layering" above. What else is **open**:

- **Marker residue: a worklist, not a defect list.** Measured 22 September:
  `python3 scripts/check_readability_census.py markers` reports **331 markers across 32 documents,
  16 arriving with zero prose after their heading** (was 286 on 14–15 September). Several of the 16
  are orientation diagrams likely correct as they stand. ⚠️ **Run the tool rather than quoting that
  figure** — it prints the per-document breakdown, and a count of an actively edited corpus goes
  stale silently. Openers are **done**: 39 of 39 prose, confirmed the same day.
- **Caption safety/rule-scope routing is open-ended by nature, not a fixed-size backlog.** Round 77's
  four flagged blocks were all traced and resolved 21 September (three already routed; the fourth, a
  wall-contact receiving-posture tail missing from `game_management.md`, fixed across all four
  layers). **That does not close the category.** Any future pass should re-investigate from scratch —
  read `../reviews/caption_routing_and_game_management_propagation_2026-09-21.md` and
  `../reviews/round_77_the_caption_could_not_be_shortened.md` first. ⚠️ **The 25–50 word caption
  target was found structurally unreachable** and that is an accepted negative result: 188 of 204
  captions were shortened (−37%), but only 14 landed in the band. The remaining work is **routing**
  safety and rule material into body prose, not further compression. ⚠️ **`check_caption_echo.py`
  and `check_layer_echo.py` are the same category seen from two ends** — a caption echoing the prose
  beside it, and a summary layer echoing another. Read them together before dispatching either.

### Podcast — engineering (absorbed from `PODCAST_AUTOMATION_LOCAL.md`, 22 September 2026)

**Orientation.** Episodes are synthesised from single-voice scripts through `scripts/md_to_speech.py`
/ `scripts/tts_sample.py` (Polly generative `Amy`, en-GB) — **not** NotebookLM's two-host Audio
Overview. Direction set by the owner 18 September 2026, commit `3aa176f`. Two episodes are fully
synthesised and cleared by text review: `skating` (17.7 min) and `equipment` (85.4 min). **Nobody has
listened to either by ear.** Full history:
[`../reviews/podcast_automation_plan_consolidated_2026-09-20.md`](../reviews/podcast_automation_plan_consolidated_2026-09-20.md).
⚠️ **The audio, the scripts and episode three's provenance now live at
`~/Documents/personal/ice_hockey_scripted_episodes/` — outside this repository**, rescued
22 September from an ephemeral scratchpad. `~/whisper-models/ggml-base.en.bin` (147,964,211 bytes)
is likewise outside it. Neither is backed up by this repo.

- **`source-verifier` has never been run on any podcast script.** The episode-three rules pass
  explicitly declared the script's research layer — meta-analyses, effect sizes, a retracted study
  and its retraction notice, cohort and VO2/specialisation figures — entirely unverified, calling it
  *"the larger half"* of the script. This is a **missing review dimension**, not a backlog row: a
  script gets whatever the coordinator happens to dispatch, unlike `content/`, which gets all five
  reviewing agents plus a commit gate. ⚠️ **Highest-value podcast item open.**
- **`scripts/md_to_speech.py` writes a synthesis engine into every manifest that does not exist in
  this region.** Re-verified 22 September: line 3798 emits `"voice": {"engine": "long-form", ...}`
  while line 3958's own printed cost table says `long-form` is *"unavailable in eu-west-2"*. Never
  touched since introduced. Not a live blocker — `build_podcast_audio.py` does not call Polly — but a
  trap for whoever writes the real synthesis step. Fix: name the engine actually used (`generative`)
  or omit the field. **Shared-tool change: make it between waves, not during one.**
- **`check_pointers.py` cannot be run against an episode script without a small tool change.**
  Re-verified 22 September: `main()` hardcodes `root / "content"` (lines 102 and 175), with no
  argument parsing. It is the closest existing tool to the link-layer safety class found in the
  skating episode — a spoken sentence routing a listener to another document with no clickable route
  — but its patterns match only in-document layers, not a pointer to a sibling document. **Both
  halves need doing**; extending the path argument alone gains nothing.
- **Whisper transcription has a model again but has never been run.** `~/whisper-models/ggml-base.en.bin`
  fetched 22 September at 147,964,211 bytes — byte-identical to the size on record, so prior
  transcript-based verdicts remain comparable. ⚠️ **Fetching a model is not verifying with it**; no
  transcript has been produced. `ffmpeg -i EPISODE.mp3 -ar 16000 -ac 1 -c:a pcm_s16le OUT.wav` then
  `whisper-cli -m ~/whisper-models/ggml-base.en.bin -otxt -np -nt -f OUT.wav -of OUT`. Known trap:
  whisper mangles proper nouns (*"Brodeur"* → *"Brodua"*) — search a transcript semantically, never
  for an exact name.
- **Whether provenance pointers deserve a checker — undecided, and now evidenced.** No checker reads
  an episode's `provenance.md`, so a correct quotation under a wrong line pointer passes everything
  silently. One such instance existed and **was repaired by hand on 19 September**; it survived in
  this project's plan as an open item until 22 September because nothing connects the two. A worklist
  if ever built, **never a gate** — a pointer going stale after a source re-extraction is not a defect.
- **The `ice-hockey` AWS profile's SSO token expires, and its failure reads as a Polly outage.** Found
  22 September: `Token has expired and refresh failed`. ⚠️ **On 18 September the plan and a status
  report both said TTS was blocked when Polly had been reachable all along; an expired token is the
  mirror of that** — a working integration reporting as broken. **Check the token before concluding
  anything about Polly.** The fix needs a browser and is therefore the owner's: step 0 of
  [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md).

### Podcast — the owner's own steps

- **Blocked on two things only a human can do:** an **ear test** across TTS engines, and a
  **listening pass** on the two episodes cleared by transcript alone. Both are laid out with verified
  URLs in [`PODCAST_MANUAL_STEPS.md`](PODCAST_MANUAL_STEPS.md). ⚠️ **Nothing in the engineering list
  above unblocks these, and they do not unblock each other** — the engine decision and the "does the
  scripted route sound right at all" question are separate.

### Readability and dual audience (absorbed from `READABILITY_AND_DUAL_AUDIENCE.md`, 22 September 2026)

The design spec now lives at
[`../readability_and_dual_audience.md`](../readability_and_dual_audience.md). What is **open**:

- **The seven-layer pilot rewrite needs an owner decision before anything is dispatched.** Simple
  summary / Recognition cues / Understand it / If your team differs / Go deeper, as literal named
  layers, never shipped in either pilot document — `getting_started.md` and `rules_primer.md` both
  carry Key focus, Go deeper, Common Mistakes and Key Takeaways instead. **The question nobody has
  put to the owner:** is the seven-layer IA still the target, or is Key focus + Go deeper + the
  summary sections the corpus's settled shape? ⚠️ **Do not dispatch against the spec's Phase 2
  acceptance criteria until this is answered** — the spec's own phases are original design intent,
  not a description of what shipped.
- **Marker residue: a worklist, not a defect list.** Measured 22 September:
  `python3 scripts/check_readability_census.py markers` reports **331 markers across 32 documents,
  16 arriving with zero prose after their heading** (was 286 on 14–15 September). Several of the 16
  are orientation diagrams likely correct as they stand. ⚠️ **Run the tool rather than quoting that
  figure** — it prints the per-document breakdown, and a count of an actively edited corpus goes
  stale silently. Openers are **done**: 39 of 39 prose, confirmed the same day.
- **Caption safety/rule-scope routing is open-ended by nature, not a fixed-size backlog.** Round 77's
  four flagged blocks were all traced and resolved 21 September (three already routed; the fourth, a
  wall-contact receiving-posture tail missing from `game_management.md`, fixed across all four
  layers). **That does not close the category.** Any future pass should re-investigate from scratch —
  read `../reviews/caption_routing_and_game_management_propagation_2026-09-21.md` and
  `../reviews/round_77_the_caption_could_not_be_shortened.md` first. ⚠️ **The 25–50 word caption
  target was found structurally unreachable** and that is an accepted negative result: 188 of 204
  captions were shortened (−37%), but only 14 landed in the band. The remaining work is **routing**
  safety and rule material into body prose, not further compression.

### Marketing and measurement

- **Monthly traffic measurement — genuinely outstanding, outside this environment's scope.** Needs an
  ongoing cadence this session can't hold open. See
  `../reviews/list_sites_content_and_traffic_plan_2026-09-20.md` Phases 3–4. (Kadaza and FeedSpot
  submissions are both done — see coverage above.) ⚠️ **Outreach to EIHA/clubs/rinks/coaches was
  removed from this file on 22 September 2026 at the owner's instruction** — a longer-term item they
  will do naturally at the right time, deliberately not tracked. Recorded as a **removal, not a
  closure**, so nobody re-derives it from the traffic plan and files it as a fresh gap. **Do not
  re-add it.**

## Push status

⚠️ **This section is a live fact, not historical narrative — it goes stale on every commit AND on every
push, and must be re-checked with `git fetch origin main && git rev-list --count origin/main..HEAD`,
never quoted from memory or from an earlier paragraph in this file.**

**Re-checked 22 September 2026, third check of the day: `origin/main` and local `main` are both at
`79bdfde`. Nothing was unpushed at the moment of the check.** ⚠️ **And this paragraph is stale the
instant you read it in the commit that contains it** — the commit that stages this very file moves HEAD
past `79bdfde` by construction, so the hash above is a record of a check, never an answer to "is anything
unpushed." **Run the fetch-and-count command.**

⚠️ **This supersedes, but does not erase, what this section said earlier in the day.** It first said
that three commits (`7df04fc`, `25b0725`, `22c9cc6`) were committed and unpushed and that the auto-push
pattern "did not recur here"; the second check found **it did recur** — all three had reached `origin`,
pushed by something other than this session between the two checks. The `e0a0b69` the second check
recorded has since been superseded twice. **Three snapshots, three different hashes, one day.**

⚠️ **So the standing lesson is stronger than "re-check before quoting": this section can go stale
WITHOUT ANYONE IN THE SESSION DOING ANYTHING.** A commit count is not merely a figure that ages, it is
a figure another process can change underneath a correct reading. The fetch-and-count command above is
the only trustworthy sentence in this section; every commit hash and every count written around it is a
snapshot with a shelf life measured in hours. **Push remains the user's own call throughout** — the
observation that something else is pushing is recorded as a fact about this repository, not as
permission for an agent to push.
