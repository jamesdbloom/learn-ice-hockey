# Review record — 28 September 2026: crash recovery, the adverb round, and a fifteen-file P1/P2 wave

**Written last, after the final `content/` edit (20:51) and after a clean full build whose attempt began 20:58
(its `clean:cache` step stamped `site/dist` at 21:00) and completed through `check:links`.** Nothing in `content/` changed after this record was begun.

## What this commit contains

**24 content files.** Two rounds, each reviewed adversarially and independently of its authors.

1. **The pre-crash adverb round** (nine files held out of the wave): `language_and_glossary`, `rink_map`,
   `rules_primer`, `defending_the_rush`, `offensive_zone_play`, `special_teams`, `body_contact_and_battles`,
   `passing_and_receiving`, `shooting`. Deliberate-injury match penalties restated with the book's own mental
   element (Hockey Canada 7.x(c) and CARHA 62(c)/50(c) double adverb; single-adverb books left alone), plus the
   USA Hockey 608 checking-from-behind repair in `body_contact_and_battles.md`.
2. **The P1/P2 wave** (fifteen files, one agent each, disjoint ownership): `switching_positions`, `zone_entries`,
   `forechecking_systems`, `team_play_and_culture`, `winger`, `playing_without_the_puck`, `equipment`, `defender`,
   `puck_handling`, `on_ice_communication`, `goaltender` (P2), `center`, `game_management`, `risk_management`,
   `faceoffs` (P2 + P1).

Also: `scripts/check_callout_flow.py` (the pre-crash `<details class="toc-inline">` shadow strip, **now validated
per page against `site/dist`: 57 panels, zero mismatches on any page**), `sources/README.md` (pre-crash
hyphenation table), and the plan and closed-items archive. **`site/package-lock.json` is NOT in this commit** —
npm-version churn only.

## How it was reviewed

- **Every content file was read by at least one `safety-reviewer` or `rules-verifier` that did not write it**, and
  every follow-up repair up to the final read of each file was read again. `body_contact_and_battles.md` was read
  five times, and **every one of the five reads found a defect the previous repair had introduced** (the fifth: a
  *"no rung like that"* pointer that the fourth repair had re-aimed at *"thrown out"*).
- ⚠️ **The LAST repairs were NOT read by a further reader.** They were confined to the final reader's own findings
  and were re-derived from primary text by the commit gate (first pass), which upheld each. They are recorded here
  under the terminating rule:

| File | Repair after the final read | Reader finding it answers | Re-derived by |
|---|---|---|---|
| `body_contact_and_battles.md` `:1776` | *"And one more book has no rung like that at all"* → *"And CARHA has no box-only rung at all"* | final read M1 (antecedent re-aimed) | commit gate |
| `body_contact_and_battles.md` `:609` | PWHL 48.3(i)/(ii) limiting clauses restored verbatim (*"on an otherwise full body check unavoidable"*; *"in a way that significantly contributed to the head contact"*) | final read M2 | commit gate |
| `defending_the_rush.md` facts `:641` | CARHA 48(a) added to the match route; ⚠️ *"criteria and carve-out alike"* compressed to *"carve-out and all"* to fit 300/300 | final read M3 | commit gate (48(a)); **the compression is a deliberate wording change beyond the finding** — PWHL 58.3 is NHL 57.3 in the same words, criteria included (verified by the final reader), and *"the NHL's breakaway rule, carve-out and all"* still asserts the whole rule is copied. Body `:651` and trailer `:987` still carry "four criteria". |
| `defending_the_rush.md` `:648` ×2, trailer `:985` | HC 7.1(c) *"deliberate injury"* → *"a deliberate attempt to injure or a deliberate injury"* | final read M4 (pre-existing) | commit gate (`hc.txt` 7.1(c)) |
| `equipment.md` CM `:732`, body `:383` | skater's-stick count → *"all six books — three attach a limit"*, CARHA 51(c) added | final read B3 (Major) | commit gate (CARHA 51(a)/(c), PWHL 10.4). ⚠️ **The author did not re-render `:383`'s last grammar edit; the coordinator rendered it at commit time: chunk 035, one self-contained sentence, voiced correctly.** |
| `forechecking_systems.md` CM `:914` | chunk-107 antecedents; corner tariff 607(a)/(d) Note 1 | final read Minor 1 | commit gate (607(a)–(e)) |
| `defender.md` `:281` | IIHF *"boarding or charging (41, 42) … each with a major above the minor"*; *"can be called"* | final read Minors 2–3 | coordinator read IIHF 41.3/41.4 and 42.3/42.4 |
- Each reader verified rule claims against `sources/*.txt`, read quotations past their closing mark, checked both
  directions (cheaper and harsher), rendered through `md_to_speech` into its own output directory, and ended with
  what its method could not have found.
- The lane rule held: rules defects were repaired in-wave only when **permissive and penalty-bearing**; everything
  else was reported to the plan.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes / why out of scope |
|---|---|---|---|---|
| D1 | Rules accuracy | ✅ | `safety-reviewer`, `rules-verifier` per file; commit gate spot-checks | every touched rule claim re-read against `sources/*.txt` |
| D2 | Rules travelling without exceptions | ✅ | same | the moved-qualifier and promoted-lead failures were found here (six) |
| D3 | Rule-set divergence | ✅ | same | all six books on disk plus British documents; four-book frames reported, not widened (lane rule) |
| D4 | Citation integrity | ⚪ out of scope | — | no URL added or removed in `content/`; Sources-trailer edits cite local rule text only |
| D5 | Provenance | ⚪ out of scope | — | no external source added; quotations re-read against local rulebooks under D1 |
| D6 | Negative existence claims | ✅ partial | readers | "no book writes…" claims re-swept by ACT where touched (e.g. IIHF writes no match penalty, both editions) |
| D7 | The cardinal rule | ✅ | readers (craft dimension) | new tactical instructions framed as common default with the team's choice named |
| D8 | Numeric ownership | ✅ partial | readers | book counts re-derived ("five of six", "four of six", "three attach a limit"); no statistic added |
| D9 | The summary layer | ✅ | readers | the P1 target; Key focus / CM / KT layer-tested for every repaired claim |
| D10 | The key-facts layer | ✅ | readers; `check_facts` | caps respected; every touched facts line read voiced alone |
| D11 | Reader safety | ✅ | `safety-reviewer` on every file | lane rule: permissive + penalty-bearing repaired in-wave |
| D12 | Read-aloud integrity | ✅ | readers via `md_to_speech`; coordinator | chunk placement per repair; spoken "Important." paired per paragraph on renderer units |
| D13 | Folklore | ✅ | three `content-reviewer`s, after the second gate pass | every NEW general-claim sentence in the index vs HEAD across the 15 wave files plus `body_contact_and_battles` and `defending_the_rush` (~250 sentences, paired against HEAD by script so carried text was excluded). **0 Critical, 0 Major, 9 Minor — all overstated certainty or a summary saying more than its body; none rules- or safety-bearing. Deferred to the plan** (template: minors may be deferred). One of the nine (`game_management` CM *"what the analysis supports"*) was a coordinator relay. |
| D14 | Structure, style, terminology, cross-links | ✅ partial | `check_links`; readers | KT renumbering checked for numeric references (none) |
| D15 | The rendered site | ✅ | coordinator (`--bare`, `--panels` vs `site/dist` per page); **`site-reviewer`** | see the site-review section below |

**Mechanical checks:** `check_links.py` ✅ · `check_facts.py` ✅ · `check_external_links.py` ⚪ (no URL change) ·
`npm run build` ✅

## Site review (D15 / C10)

⚠️ **On its FIRST attempt the `site-reviewer` could not open a page in Chrome**: `navigate` to `127.0.0.1:4411`
and `localhost:4411` returned *"Could not verify this site's safety category. Blocking as a precaution"* three
times while `curl` returned 200. **That attempt produced no screenshot and no console read; the visual check was
done on the SECOND attempt, below.** What the first attempt did, from `site/dist` (built 21:00, not rebuilt):

| Page | Panels | Glyphs in `warn-inline` | Bare | Bold-only (no amber) |
|---|---|---|---|---|
| goaltender | 0 | 185 | 0 | 0 |
| center | 0 | 118 | 0 | 0 |
| faceoffs | 0 | 158 | 0 | 0 |
| game_management | 5 | 85 | 0 | 0 |
| risk_management | 0 | 63 | 0 | 0 |
| body_contact_and_battles | 1 | 333 | 0 | 0 |

Every prose wrapper contains its `<strong>`; the wrappers without one are figure captions, styled as a band by
`figcaption .warn-inline`. **Every moved marker's amber ends on the hazard or instruction clause, never a
citation** (exact wrapper extents recorded by the reviewer). Computed contrast of amber-on-tint: 5.71:1 light,
8.29:1 dark. ⚠️ Pre-existing and NOT caused by this commit: many amber runs on all six pages open on a signpost
or a citation (*"⚠️ Read that…"*, *"⚠️ Rule 49(a) prices…"*), and goaltender's Key focus has amber on 2 of 10
items — a P2 row.

### ✅ Visual pass — retried after the owner logged in to the Chrome plugin

**C10 met.** Chrome loaded `site/dist` (served as built, not rebuilt) on the first attempt. **All 24 cells — six
pages × 1440px and a real 400px iframe viewport × light and dark — measured in the live DOM with computed
styles:** every `warn-inline` painted (3px left bar, tint, weight ≥ 600 on the strong run), **0 bare, 0
bold-only, no horizontal overflow**, identical counts at both widths and in both themes. All four moved or
restored goaltender markers put their amber on the hazard clause alone (screenshots in the session scratchpad
`shots/`). De-marked paragraphs read as plain framing prose between short amber hazard sentences — not the owner's
panel-vs-prose mismatch. **Console empty on every page; no off-origin request.**

Two minors, neither introduced by this commit, both carried to the plan:
- `goaltender.md` body net-front bullet: the head-and-neck instruction *"If you are the one being moved, in any
  league: head up, chin off your chest."* closes the bullet in **plain bold**, while two neighbouring clauses in the
  same bullet are amber and the identical sentence is amber in Common Mistakes.
- `.warn-inline`'s 0.3em right padding leaves a visible gap before a following `;` or `,` (CSS, `global.css`).

## What the readers found — the substance

**No Critical anywhere.** Majors, all repaired before this commit:

| Kind | Instances |
|---|---|
| Pre-existing and permissive | force on an official priced as a GM where USA Hockey, HC and CARHA make it a **match** · PWHL 65.2(iii) strict clearing limb absent from `risk_management` · Hockey Canada 8.5(b) injury limb and 8.5(c) match absent from `forechecking_systems` · CARHA 52(b)/66(b) crease-only in `zone_entries` · USA Hockey Casebook 625 Sit. 9 mandatory limb absent in `winger` · mask-off whistle promised "in all five books" in `goaltender` · CARHA 48(c) kicking match omitted in `on_ice_communication` · CARHA 51(c) skater's-stick limit omitted in `equipment` |
| **Made by the wave's own re-ordering** | *"use your feet on the puck"* promoted to a lead (IIHF 76.3(VI) bars a skate win) · *"a blade kept down is onside"* (false past the line) · *"legal under every book, provided never driven"* (HC/CARHA cross-check needs no force) · *"once they have played the puck"* (licensed holding a goalie's path) · the route-past-a-teammate lead that dropped its pressuring-the-carrier proviso · U19 full-face omitted when a women's age cut-off was corrected |
| Made by a repair | D5 *"only"* (HC 7.6(c)/7.5(c) reach a match without intent) · a closed "force and destination" 608 test missing recklessness · a mandatory 608(c) match described as "the referee's choice" |
| Made by the coordinator | two optional sketches (*"not directly out of play"*; *"(in the IIHF, where it was likely to injure)"* — IIHF 40.1 has three limbs) and one relay of a reviewer's clause (`game_management` KT14's restored window, which made a USA Hockey 640(b) avoidable check sound legal). All three were permissive; all three were caught and reverted. |

**The P1 finding that held across every file:** the back-layer defect was **absence, not ordering** — short
Common Mistakes bullets that named a mistake and never said what to do, and whole sections with no Key Takeaway.
The owner's worked examples now lead where they belong (goal side and never-across-the-front in `defender`,
`risk_management` Key focus #2 and KT2, `switching_positions` KT6). The "owner's over-the-glass example missing"
row was stale (already added in `a5319dd`) and is archived.

**P2:** spoken `"Important."` runs shortened in `goaltender` (145 → 105), `center`, `game_management`,
`risk_management` and `faceoffs`. **Every paragraph that lost its last marker was upheld one at a time by a reader
on paired HEAD/tree renders** — the corpus-wide census at commit time shows exactly the upheld set
(`risk_management` 5, `center` 1, `goaltender` 19 by the tool's keying, `faceoffs` 1).

## Mechanical state at commit time (run without pipes, after the last content edit)

`check_links` · `check_facts` · `check_absolutes` · `check_geometry` · `check_secrets` · `check_counts` (with
`--update`) all **exit 0**. Full `npm run build` via the absolute binary: **one attempt, `rc=0`, completed
through `check:links`** ("all internal links and anchors resolve"). `check_callout_flow --bare`: **0**; a DOM sweep
for glyphs inside an unwrapped `<strong>` run: **0**; `--panels` **57, equal to `aside.callout-warning` in
`site/dist` on every page.**

## Method lessons, for the next wave

1. **"Lead with the instruction" is not free.** Six promoted leads became unqualified headlines. **Re-test every
   promoted lead as a standalone claim against every book.**
2. **When a reviewer rules a harsher imprecision acceptable, leave it.** Every narrowing sketch offered for one
   this session produced a permission.
3. **A clause restored from a body carries the body's scope.** The late-hit window was true beside its per-book
   limbs and false alone in a six-book summary.
4. **`check_marker_pairs.py` under-counts inside blockquotes and list items, and prints nothing with no path.**
   Pair on renderer units.
5. **A backgrounded build must end on `exit $rc`.** One ended on `tail` and reported 0 over a failed build.
6. **Two concurrent `build-diagrams` runs break headless Chrome rasterising; single runs fail intermittently too.**
   A retry loop is sufficient; the PNG step is idempotent.
7. **PWHL prints *"non–deflected"* with an en-dash** — normalise dashes before sweeping `pwhl_rules.txt`.

## What this method could not have found

- **Sibling documents outside this commit** that repeat any repaired claim. Cross-document claims are listed as open
  rows in the plan; only some were swept.
- **Whether any new tactical instruction is the best coaching.** Readers judged soundness and consistency with each
  document's own body; no source settles craft.
- **How a legal technique fares executed badly at speed** — no rulebook grep measures it.
- **Audio.** Chunk placement was measured; nobody listened.
- **A layer built on an old premise that shares no words with it.** Every layer test here was lexical.

---

## Appendix A — the live plan section for this round, moved here verbatim on closing

## 🔴 LIVE — 28 September 2026: CRASH RECOVERY, THEN A P1/P2 WAVE OF FIFTEEN DISJOINT FILES

**The machine crashed mid-round.** State recovered from the tree, not from memory: **nothing staged;
`site/dist` ABSENT** (the build died after `clean:cache` — the silent-false-pass shape, caught by
`ls`). **The reader on the Common Mistakes repair in `body_contact_and_battles.md` was killed before
reporting**, so that repair is UNREVIEWED and a fresh `safety-reviewer` was dispatched against HEAD.
The build was restarted. ⚠️ **`site/package-lock.json` carries npm-version churn (dropped `libc`
fields) — NOT to be staged with this round.**

**Gates on the recovered tree, run without pipes:** `check_links` · `check_facts` · `check_absolutes`
· `check_geometry` · `check_secrets` · `check_counts` all **exit 0**.

**The uncommitted adverb round (nine content files) is held out of the wave:** `language_and_glossary`
· `rink_map` · `rules_primer` · `defending_the_rush` · `offensive_zone_play` · `special_teams` ·
`body_contact_and_battles` · `passing_and_receiving` · `shooting`.

### 🔴🔴 THE RE-DISPATCHED READER BLOCKED THE CRASH ROUND — three Majors in `body_contact_and_battles.md`

The CM1 repair **reaches the listener** (chunk 247 carries claim, correction and box-removal in order)
and every quotation is exact — **but:**
1. **CM1 `:1776` — PERMISSIVE.** *"Force is what decides it"* is false as a sole discriminator:
   Casebook 608 Sit. 1 second-list (2) and **608(b)** make *head first into the boards* an ejection
   **with no force condition** — and a player facing the wall is who a light push sends head first.
   Also drops *"in close proximity"*. Minor: *"the hit at the top of this bullet"* is furniture.
2. **Body `:666` — HARSHER.** *"a forechecker who takes a beaten carrier's back at speed in open ice
   **is inside** the third"* — first-list (1) IS that act, priced minor + misconduct. **Summarising
   manufactured a warning.** Cross-chunk pointers 085 → 086 as well.
3. **Key focus `:23` — the fix never reached it.** *"USA Hockey's floor is a minor plus a misconduct,
   the only rung in the six that leaves you on the ice"*, voiced FIRST (chunk 002), built on the old
   answer. ✅ **Owner's rule favours cutting the ladder from Key focus, not adding a limb.**
Minors: §5 facts block at `HARD_MAX` lacks instance (1) (carried at §8 `:1107`); PWHL `:609`
*"makes an ejection the floor"* contradicted by its own review-to-minor clause; §8 `:1106` head-first gap
(pre-existing). ✅ **CLEAR:** facts `:652`/`:653`, Sources trailer, Overview, KT6. **PWHL "only book"
claim HOLDS against all seven books read**, including CARHA 50(a) and the EIHL/In-House texts.
**A repair agent is on all three.**

⚠️ **TOOL TRAP, new: `check_marker_pairs.py` with NO path prints nothing and exits 0** — a silent
false pass. It requires a file argument. **Both shared briefs said to run it bare.** Live agents were
not re-briefed mid-wave; **every P1/P2 report's marker-pair claim must be re-run by the coordinator
with the path before it is believed.**

🔴 **Declared, not reached:** siblings carrying *"USA Hockey's floor leaves you on the ice"* in a layer
voiced alone (`rules_primer.md`, `defender.md`, `uk_rules.md`) — **brief the claim**; and other USA
Hockey rules pricing a check from behind into the boards (603 boarding, the Player Safety declaration).

### The wave — one agent per file, briefs in the session scratchpad (`p1_common.md`, `p2_common.md`)

Dispatched from the plan's own ordering: **the MIDDLE band of back layers in documents whose subject is
not the rulebook**, never the top of the rules% list.

| File | Work | Why this file |
|---|---|---|
| `switching_positions.md` | P1 | CM 89% by form; M1 (four-book body sentence) re-checked, report-only |
| `zone_entries.md` | P1 | KT 86%, CM 84% |
| `forechecking_systems.md` | P1 | CM 87% |
| `team_play_and_culture.md` | P1 | KT 87%, CM 83% — judge ORDER and ABSENCE, not the % |
| `winger.md` | P1 | KT 83%, CM 82%; "a winger's job is knowing Rule 69" re-tested |
| `playing_without_the_puck.md` | P1 | **the owner's over-the-glass example absent from CM/KT** — verify, then fill |
| `equipment.md` | P1 | CM 87% — mandatory-equipment rules may correctly lead |
| `defender.md` | P1 | owner's goal-side and never-across-the-slot examples, checked in the layers heard alone |
| `puck_handling.md` | P1 | 2 tariff-first units, KT 75% |
| `on_ice_communication.md` | P1 | CM 76% |
| `goaltender.md` | **P2** | runs of **14** and **8** consecutive spoken `"Important."` in §Goaltender Interference |
| `center.md` | P2 + P1 | stacks of 6 and 4 in §Offensive Zone |
| `game_management.md` | P2 + P1 | stack of 6 in §Discipline |
| `risk_management.md` | P2 + P1 | stacks of 5 and 4; owns the owner's never-across-the-front example |
| `faceoffs.md` | P2 + P1 | stack of 5 in §Violations |

**Measured at dispatch, for comparison only — never as a target:** `check_instruction_first` **36 of
1,251** units tariff-first; `check_tactics_ratio` **65%** corpus by form; `check_callout_flow --stacks`
**147 stacks holding 441 of 719** flow-breaking callouts. ⚠️ **Re-run; do not quote these.**

### Wave returns

**`forechecking_systems.md` — back, under review.** ⚠️ **The 87% CM figure was mostly CORRECT safety
content already leading with its instruction** (`:900-:911` untouched). **The defect was ABSENCE again**:
three CM bullets with no instruction (`:913`, `:914`, `:916`), and **two sections with no Key Takeaway**
(game state → KT3; rec level → KT5). KT7 re-ordered, nothing deleted. **One lane-rule rules repair:**
`:913` *"Hockey Canada asks you to avoid contact"* → penalises, and charging is a mandatory major + GM
anywhere (8.5 preamble + 8.5(b), `hc_layout.txt:5544-5566`). Marker pairs re-run WITH path by the
coordinator: 43 → 43, 0 lost. Ratio 87 → 85 CM by added words, not cuts.
🔴 **Reported, not fixed:** KT7 cites only CARHA 52(b), not Hockey Canada 8.5(b) (coverage gap, not
permissive) · KT6's nested-dash tariff clause reads badly aloud · CM `:913`'s NHL/IIHF/PWHL
*"only incidental contact"* is stricter than facts `:740`, unverified.

**`switching_positions.md` — back, under review.** Premise **partly refuted**: most CM bullets
already led; four of the tariffs are the rule AS the tactic. **Defect was ABSENCE** — four CM bullets
with no instruction, and the owner's never-through-your-own-slot example missing from KT; the
timeline and being-moved sections had no KT (→ new KT11). One new rule sentence (KT7 blue-line skate),
verified against USA Hockey 630(a), HC 6.11, CARHA 72(c) Note 1 — **NHL/IIHF/PWHL not re-grepped;
reviewer briefed on it.** ✅ **M1 CLOSED: "legal in all four books" is gone** — body `:293` now agrees
with facts `:281`. Marker pairs WITH path: 14 → 14, 0 lost; one re-keyed KT1, **unmarked in HEAD —
nothing lost.**
🔴 Reported: KT4 off-dot tariff still per-book (every summary the agent drafted drifted harsher —
*"every book ejects the centre"* is false for IIHF 2025/26) · KT6's from-behind ladder demotable, left.

**`winger.md` — back, under review.** ✅ **The "3.0× crease KT" finding is STALE** — KT8 is now
1.15× the largest, and leads with its instruction. **Defect was ABSENCE**: no breakout-decision
kernel, **no offensive-zone shooting KT although Key focus leads with it**, four CM bullets with no
instruction. New CM (forcing a pass in your own zone), new KT14 appended (no renumbering, because
the Sources trailer cites KT8 and KT10). KT11 citation parenthetical demoted; 76.42 re-ordered and
re-verified in both IIHF situation editions. Marker pairs WITH path: 27 → 27, 0 lost.
🔴 Reported: KT8 *"mandatory … under CARHA"* unscoped (harsher) · KT8/KT9 restate one net-front
safety limb (propagation risk; KT8 holds the only ⚠) · KT1 *"the wingers leave their lanes"* vs Key
focus *"the weak-side winger"* · KT11 *"four books of the five"* vs a six-book corpus.

**`equipment.md` — back, under review.** Premise **mostly wrong**: 0 of 41 tariff-first; the CM
tariffs already led with instructions. **ABSENCE again — twelve short CM bullets with no instruction.**
⚠️ **NEW TOOL BLIND SPOT: KT3, KT5, KT11 opened on a BOLD HEADING that frames a tariff, and both
`check_instruction_first` and the ratio tool skip bold headings, so they scored CLEAN.** Other
documents may carry the same shape invisibly. **Two lane-rule repairs:** KT3 half-visor age *"under
18"* → *"until the season after her 18th birthday"* (In-House Rule 102, permissive by a season) ·
half-visor CM gains the EIH R&R 24.5 junior face-cage mandate. Marker pairs WITH path 35 → 35.
🔴 Reported: U19 National Division 18+ full-cage rule absent from KT3/CM · KT11 goalie limb omits PWHL
10.4 · KT11 *"NHL and IIHF 10.3 … a minor"* unverified · KT1 ~2,480 chars restating the helmet
ladder (demotion candidate, needs a per-limb layer test).

**`team_play_and_culture.md` — back, under review.** 33 of 34 already instruction-first; **ABSENCE**
— no KT for coaches, the system, shift length, talking, or a stronger opponent; CM bullets with no
instruction. Two re-orders (going over the boards; KT10). Every fighting / bench / officials tariff
byte-identical. Marker pairs WITH path 33 → 33 — ✅ **the earlier 24 → 33 rise is now the baseline.**
🔴 Reported: KT10 peacemaker limb omits Hockey Canada Interpretation 6 scope (harsher) · *"stay in the
box until released"* slightly stricter than NHL wording.

**`zone_entries.md` — back, under review.** All 11 KTs already led. **ABSENCE: §9 carry/dump/delay —
the document's decision kernel — and §11 defending the entry had NO KT** (→ KT12, KT13 appended so KT11
keeps its number for the Sources trailer). One KT8 limb DEMOTED with its counterweight together
(carriers: facts `:681`/`:682`, flip-dump CM). Marker pairs WITH path 22 → 22; one re-keyed bullet,
unmarked in HEAD. ✅ **No caption-only crease limit remains on the net drive** — KT11 and the net-drive
CM both carry it in-unit.
🔴 Reported: KT10/KT11 CARHA coverage (66(b)/(e) unnamed; 52(b) injury limb dropped) · KT3's airborne
trailing blade omits the vertical-plane condition the caption states · body §6 *"If you drive the net"*
has no nearby crease limit.

**`defender.md` — back, under review.** 0 tariff-first already. **ABSENCE: six CM bullets with no
instruction, and NO CM bullet on goal side** — the owner's own first example (→ new first CM bullet).
Owner's never-across-the-front already in KT5 and two CM bullets. KT3 re-ordered to fix a pronoun
(*"while you do it"* read as attaching to the head-first act). KT8 merged rather than adding an 11th.
Marker pairs WITH path 32 → 32.
🔴 Reported: KT3 *"neither ladder is summarised here"* is false · KT5 narrows *"any pass"* to
*"D-to-D"* · KT3's six-book ejection claim unverified.

**`playing_without_the_puck.md` — back, under review.** ✅✅ **THE OWNER'S-EXAMPLE ROW IS STALE AND
CLOSED:** CM *"Ending the pressure by putting the puck over the glass"* and **KT12 *"Clear the zone off
the glass, never over it"*** both exist and lead, added in `a5319dd` on 24 September. **The agent added
no fourth restatement.** It re-swept the ACT across every book on disk and all tariffs held.
**One lane-rule repair: facts `:322`, voiced alone** — *"anywhere is better than the slot"* gains *"as
long as it stays in the rink"*; its out-of-play qualifier was two `<p>` away. Ten CM fills, one
re-order (*"take the lane or let up"* moved from chunk 091 to 090). Marker pairs WITH path 25 → 25.
🔴 Reported: Hockey Canada 10.1's preamble frames (v) under *"deliberately"* · two
knowledge-of-the-book CM bullets left without a lead instruction, deliberately.

**`forechecking_systems.md` REVIEW — diff CLEAR, one PRE-EXISTING permissive MAJOR, sent back to the
author under the lane rule.** The Hockey Canada goaltender tariff is carried as the CHARGING limb only
at body `:752`, facts `:741`, CM `:913` and KT7 — **8.5(b)'s mandatory major + GM for contact that
INJURES, and 8.5(c)'s match, are absent in every layer**, and CARHA's injury limb sitting beside it
implies the escalation is CARHA's alone. Siblings `offensive_zone_play.md:619/:639` and
`goaltender.md:1071/:1106` carry the full ladder. 🔴 **For `rules-verifier`:** facts `:738` *"finishing a
check on a goalkeeper is penalised in every book here"* is HARSHER than USA Hockey Casebook 607 Sit. 5.
✅ The reviewer confirmed the author was right to leave *"after their icing"* out of CM — that
table row is false under USA Hockey and most Hockey Canada categories.

**`faceoffs.md` — back (P2 + P1), under review.** P2: the tool's *"5 in a row, separate blocks"* was
really **a run of 3 then a run of 2**, the last three inside ONE blockquote — ✅ **the raw lines beat the
label again.** Spoken `"Important."` **88 → 86**, billed chars stable through P2, stripped-text diff
identical after P2. ⚠️ **TWO paragraphs lost their LAST marker** (`:554` CARHA/no-substitution, `:556`
British blockquote opener) — judged hedges, but **the author declared it never checked whether any book
prices a player coming over the boards at a re-drop (too many men, delay).** The reviewer is on exactly
that. P1: three CM re-orders, two fills; **KTs already all led** (0 of 39 tariff-first); KT2 demotion
REJECTED because **CARHA 36(b) lives nowhere else** in the document.
🔴 Reported: CARHA 36(b) cited only in KT2, unverified · KT5 and CM back-to-boards carry the inherited
spinal limb — document-relative demotion candidates · other stacks (`:492-500`, `:288-292`, `:384-389`)
untouched.

**`center.md` — back (P2 + P1), under review.** ⚠️ **The "6 in a row" was never six for a
listener** — `:468` carries no marker and `:474` splits across chunks — while the **true worst run was 5**
(`:448-:456`, crossing the blockquote's end). Seven glyphs removed, one moved, no word changed in P2;
spoken `"Important."` **49 → 46** — **three paragraphs lost their escalation** (`:448` citation note,
`:456` EIHL scope note, `:464` duplicated by `:466`), now under review. P1: CM1/CM9 fills, CM17
re-ordered with its ⚠ moved OFF the permission (*"Catching it is not the mistake"*) onto the cost —
✅ **a marker that had been escalating a permission.** KT1/KT7/KT8/KT10 fills or re-orders.
Instruction-first 1 → 0 of 30. **The author removed its own unverified rule clause from CM9 before
finishing.**
🔴 Reported: CM17 *"a penalty shot rather than a minor"* omits USA Hockey's optional minor (harsher) ·
a listener run of 4 in §Handling the puck including the `the-puck-decides-not-you` CAPTION · `:553`
*"⚠️ Hockey Canada says this less plainly"* is a free de-mark · CM7 ~700 words.

**Returns since the last entry (all under review or follow-up):**
- **`goaltender.md` (P2)** — spoken `"Important."` **145 → 104; 41 paragraphs lost their LAST marker**,
  zero words changed. The author's test was *"does it hurt the GOALTENDER"*, so it de-marked attacker
  tariffs. ⚠️ **That premise is the judgement to test, not the count** — a reviewer is on it, starting with
  `:1106`, `:1131`, `:1141`, `:1147`, `:1462`. ⚠️ `check_marker_pairs` reported **20 of the 41** — the
  blockquote/list-item under-count again.
- **`puck_handling.md`** — CM re-orders (2 → 0 tariff-first); **KT7–KT10 DEMOTIONS**, including KT9's
  *"obvious and imminent"* narrowed to USA Hockey (CARHA 58(c) Note 1 read as flat) and KT10's *"four of
  the six"* cage count. Under review.
- **`on_ice_communication.md`** — four CM fills; **a NEW rule claim** (disputing a call = unsportsmanlike
  minor, NHL/IIHF 39.2, USA Hockey 601(a)); KT12 kicking limbs demoted; new KT9 (owner's
  never-across-the-front, as a CALL). KTs renumbered — **no document refers to them by number.** Under
  review.
- **`risk_management.md` (P2 + P1)** — ✅ **the owner's never-across-the-front example moved to Key focus
  #2 in the owner's words, and into KT2.** Six paragraphs lost their last marker (37 → 31); KT5
  compressed to *"at least a minor from anywhere… in all six books"*. Under review.
- **`game_management.md` (P2 + P1)** — one paragraph lost its last marker; two paragraphs MOVED (one to
  fix a wrong *"that minor"* antecedent); **four KT demotions including a new KT16 late-hit ladder
  sentence**; new shootout KT10. Under review.
- **`body_contact_and_battles.md`** — all three Majors and three minors repaired (**Key focus ladder
  CUT**, as the owner's rule prefers); ✅ **the repair agent refused the reviewer's own Key focus sketch
  because it named only the wall case — cheaper than the book for head-first and reckless hits.** §8
  facts `:1106` had MISREAD *"in close proximity"* as close to the WALL; it means close to the CHECKER.
  Fresh reviewer on it.
- **`forechecking_systems.md`** — Hockey Canada 8.5(b) injury limb + 8.5(c) match added at all four
  layers; ✅ **the author declined to write "two books", because USA Hockey 607(b) is also mandatory.**
  Fresh reviewer on it.
- **`winger.md` REVIEW — CLEAR, no Critical/Major.** Follow-ups sent to the author: ⚠️ **one PRE-EXISTING
  permissive gap** — CM's goalie-path bullet says *"may be penalized"* for three books while **USA Hockey
  Casebook 625 Sit. 9 makes it *"must be disallowed and an interference penalty shall be assessed"***,
  carried only at facts `:466`; the new lead's *"once they have played the puck"* condition implies you
  may hold the path of a goalie who came out without touching it; rim-to-a-teammate; two craft nits.
  🔴 Row: the faceoff section frames five books while **PWHL 78.7 is on disk and NHL-identical** (conservative).
- **`switching_positions.md` REVIEW — CLEAR, no Critical/Major.** Four minors sent back (KT7 blue-line
  wording, KT11's unmeasured *"week three"* stated as fact, KT6's missing alternative exchange route).
  🔴🔴 **CROSS-DOCUMENT CLAIM: *"go behind your net, where an interception means nothing"*** — overstated
  (a turnover there is a wraparound or a pass to the slot); `risk_management.md:175/:184` owns the correct
  form. **It lives in `switching_positions.md` (Key focus, body, KT6) AND `defender.md :15, :876`.**
  Switching is being repaired; **`defender.md` must be briefed as the SAME CLAIM once its review returns.**

- **`zone_entries.md` REVIEW — diff does not block; one PRE-EXISTING permissive MAJOR, sent back.**
  KT11 (voiced alone, chunk 093) and CM "Driving the net" give CARHA's ejection only *"under 52(b) while
  he is in his crease"* — **52(b)'s injury limb has no location condition, 66(b) reaches deliberate
  contact out of the crease with a discretionary Major, and 30(a) makes every Major an ejection.** The
  CM *"Arriving on the goalie"* bullet already carries the full answer. 🔴 **The reviewer declared the
  next search: the string *"CARHA 52(b) while he is in his crease"* may be carried in sibling documents —
  `grep` `content/` for it.** Minors: KT12 states two coaching choices flatly.
- **`playing_without_the_puck.md` REVIEW — ONE MAJOR INTRODUCED BY THE WAVE, sent back.**
  ⚠️⚠️ **The moved-qualifier shape, exactly as CLAUDE.md describes it:** the new CM lead *"Run your own
  route close past a teammate… so the player marking you has to go around them"* left behind the body's
  proviso *"provided the man you delay is not the one pressuring your own puck carrier"* — and **an
  unchanged CM sentence was already stating the rule of thumb the body REJECTS as a flat permission**
  (a layer written on the old answer). USA Hockey 625(a)(1), Hockey Canada 8.3, CARHA 66(a) Note 2.
  ✅ **The author had flagged exactly this sentence for the reviewer.** Minors: *"Arriving late"* reads as
  a condition on a checking-from-behind warning; the net-drive fill lacks the posts limb.

- **`winger.md` follow-ups APPLIED** — ✅ USA Hockey Casebook 625 Sit. 9 limb added to the goalie-path
  CM (same chunk, verbatim, read to its end); the *"once they have played the puck"* condition dropped from
  the instruction; rim-to-a-teammate; two craft nits. **New text → a `rules-verifier` is on it**, incl.
  whether the §Net-front body / KT8 / facts still carry the three-book "may" frame.
- **`defender.md` REVIEW — CLEAR, no Critical/Major.** Sent back: the interception claim (cross-doc #1)
  · KT5's D-to-D narrowing · ⚠️ **KT3 and facts `:278` *"every one of the six answers that with an
  ejection"* is HARSHER than the IIHF** (43.3 discretionary on reckless endangerment; 41.2 boarding keeps a
  minor) — **the round-73 shape again, *"an ejection at the floor in every book"*** · KT3 *"two of the
  books, a match"* → three (CARHA Rule 49 casebook) · ⚠️ **the first CM text teaching HOW to block
  omitted the head-up caveat** carried at facts `:713`, body `:729`, KT9.
- ✅ **Cross-doc sweep, coordinator:** *"while he is in his crease"* appears ONLY in `zone_entries.md`
  (two sites, both being fixed) — **claim #2 has no sibling carriers.** *"interception means nothing"* is
  now left only in `defender.md` (sent).

- **`zone_entries.md` follow-up APPLIED** — both CARHA sites carry 52(b)'s injury limb; KT11 adds 66(b)
  + 30(a); KT12 names the coach's call and aligns with `game_management.md`. `rules-verifier` on it.
  🔴 Reported: body §9's facts line and bullet still say *"carry almost regardless"*.

### 🔴🔴 A FIFTH SILENT FALSE PASS IN THE BUILD FAMILY — ON THE COORDINATOR, 28 September 2026

**The backgrounded build reported `exit code 0`. Its log ends `EXIT 1`.** The command was
`npm run build > log; echo "EXIT $?" >> log; tail -5 log` — **the task's exit code was `tail`'s.** ⚠️
**This is the `nohup … &` entry above, one command shape over, written by a coordinator who had read it.**
**Cause of the failure itself: TWO `build-diagrams.mjs` processes ran at once** (the coordinator's from
20:08 and another from 20:19, source unknown — probably an agent) and headless Chrome's rasteriser
failed on `dump-chip-past.png`; a stale `.raster.16365.*` lock file remains. `site/dist` was never
produced. ✅ **Caught by reading the log rather than the notification.**
**THE RULE:** a backgrounded build must END on `exit $rc` — never on `tail`, `echo` or `ls`. ⚠️ **And no
brief may tell an agent to run `build-diagrams` or `npm run build` while a coordinator build is live.**

### Review round 2 — every file has now had one reader; the findings the READERS made, not the authors

✅ **Nothing CRITICAL anywhere. Every Major below was either pre-existing and permissive (fixed under the
lane rule) or a new-text regression the wave made.** Each was sent back to its own author, who still owns
the file. **Follow-ups are new text and get their own short check before commit.**

| File | Reader verdict | Major sent back | Wave-caused? |
|---|---|---|---|
| `goaltender.md` P2 | **premise upheld for all 41 de-marks**; paired renders confirm 145 → 104 exactly (`check_marker_pairs` said 20) | `:1133` marker should MOVE not go (USA Hockey legal check outside the privileged area); **CM `:1445` promised a mask-off whistle "in all five books" — NHL/IIHF/PWHL 9.6 withhold it during a scoring chance** | 1133 yes; 1445 pre-existing | ✅ both fixed; +1 spoken |
| `faceoffs.md` | both de-marks upheld (no book prices a first over-the-boards attempt) | **the re-order promoted "use your feet on the puck" to the LEAD — IIHF 76.3(VI) makes winning the draw with a skate a violation** | **yes** |
| `center.md` | all three P2 de-marks CLEAR | **KT10 "a blade kept down is onside in every book" — false once past the line** | **yes** | ✅ fixed |
| `team_play_and_culture.md` | new text sound | **hands on an official is a MATCH (not GM) under USA Hockey, HC, CARHA** — body `:366` voiced alone + CM | pre-existing |
| `forechecking_systems.md` 2nd | 8.5 floor verified (8.5(e) makes the dropped condition harmless) | **KT7: two named ejecting books then "the only permission … is USA Hockey's" with no USA Hockey tariff — exclusivity by contrast** | partly | ✅ fixed |
| `zone_entries.md` 2nd | KT11 verified | CM net-drive limb now DISAGREES with KT11 on CARHA 66(b) | **yes (inverse shape)** |
| `on_ice_communication.md` | KT12 tariffs verified | **new CM "disputing = a minor" in three books — every book escalates to a GM for persisting**; **CARHA 48(c) kicking MATCH omitted at four sites** | 1st yes; 2nd pre-existing |
| `risk_management.md` | 5 of 6 de-marks upheld; "all six" verified | **PWHL 65.2(iii) strict limb stated NOWHERE in the document** + the compression dropped *"skater"* (HC 10.1(v)/CARHA 55(a) price a GOALIE's stick clear strictly) | partly |
| `equipment.md` | KT5 and fills CLEAR | **KT3 "until the season after her 18th birthday" — IHUK U19 full-face is mandatory "regardless of being 18+"** | **yes** |
| `puck_handling.md` | cage and holding counts VERIFIED | **KT10 dropped PWHL 51.5's mandatory GM; IIHF trigger wrong for Britain** · **CM lead "legal under every book, provided never driven" — HC 9.2/CARHA cross-check need no force** | **yes, both** |
| `game_management.md` | CLEAR, four minors | — (KT14 now HARSHER than every book: the "very short window" dropped) | — |
| `winger.md` / `switching_positions.md` / `defender.md` | CLEAR | follow-ups applied; checks CLEAR / running | — |

⚠️⚠️ **THE WAVE'S OWN REGRESSIONS SHARE ONE SHAPE: "LEAD WITH THE INSTRUCTION" PROMOTED A CLAUSE THAT WAS
SAFE IN THE MIDDLE OF ITS UNIT AND UNSAFE AS THE HEADLINE.** *"Use your feet on the puck"*, *"legal under
every book, provided never driven"*, *"a blade kept down is onside"*, *"once they have played the puck"* —
each was qualified by what surrounded it and became a flat instruction when moved to the front. **Six
instances in one wave.** ⚠️ **So the re-order repair is NOT free, and CLAUDE.md's *"costs nothing in
safety"* is false as a general statement: a promoted lead must be re-tested AS A STANDALONE CLAIM against
every book.** 🔴 **Brief this into every future re-ordering wave.**

### ⚠️⚠️ THE COORDINATOR'S OPTIONAL SKETCHES WERE WRONG TWICE IN ONE WAVE — BOTH IN THE PERMISSIVE DIRECTION

1. `playing_without_the_puck.md` facts `:322` — *"not directly out of play"* (reverted).
2. `team_play_and_culture.md` — *"(in the IIHF, where it was likely to injure)"* on force against an official.
   **IIHF 40.1 has THREE limbs** — likely to injure, *physically demeans*, or force *"solely for the purpose of
   getting free of such an Official during or immediately following an altercation"*. The qualifier named one
   and told a British player that pushing free of a linesman is safe. ✅ **The AUTHOR flagged it against my
   sketch; the coordinator read 40.1 and confirmed.** Being reverted.
⚠️ **Both were offered as "optional, if cheap" tidy-ups of a HARSH-direction imprecision a reviewer had
already ruled acceptable.** **Converting an acceptable harsh overstatement into a precise-looking qualifier is
exactly how a permission gets written.** 🔴 **Rule for this coordinator: when a reviewer rules a harsher
imprecision acceptable, LEAVE IT — do not offer a narrowing sketch.**

3. ⚠️⚠️ **And a THIRD relay error, this one of a REVIEWER's finding rather than my own sketch:**
   `game_management.md` KT14. Reader 1 said the unconditional *"finishing your check … is a late hit"* was
   HARSHER than every book and suggested restoring the body's *"once a very short window has closed"*. I relayed
   it. **Reader 2: that made it PERMISSIVE — USA Hockey 640(b) makes a check on a player who has released the puck
   an avoidable check AT ONCE, CARHA has no window, and the IIHF calls a hit on an unready skater reckless.**
   ⚠️ **A clause restored from the body carried the body's HOCKEY CANADA framing into a six-book summary.** The
   body's window sentence was true where it stood because it sat next to its per-book limbs; alone in a KT it
   became a universal. **This is the moved-qualifier shape exactly, and neither the reviewer nor the coordinator
   asked what the restored clause had been qualifying.** Being repaired.

### The pre-crash ADVERB round — finally read, 28 September 2026

**Reader verdict: every repaired adverb matches its book, with ONE Major the repair itself made.** D5
(`defending_the_rush.md:385`) fixed the adverb and ADDED *"only"* — *"a Match penalty only where the attempt
or the injury is deliberate"* — which, voiced alone under *"Hockey Canada's body-checking ladder"*, tells a
U13/female listener the ladder never reaches a match without intent. **7.6(c) head contact and 7.5(c)¶1 do.**
⚠️ **Found only because *"only"* made the reader ask what else prices the act — the exclusivity-word trigger.**
Also in passing: facts `:635`/`:641` drop the ATTEMPT limb from NHL/PWHL 21.1 and CARHA 48(a) (permissive).
A repair agent owns `defending_the_rush.md` now. ✅ **The CARHA 48(a) exclusivity worry is CLOSED: no repaired
sentence calls 62(c)/50(c) CARHA's only match route.** `language_and_glossary.md` / `rink_map.md` hunks are two
marker moves each, no loss. 🔴 Minor, routed: `body_contact_and_battles.md:438`/`:1904` give CARHA 50(c) as
*"a deliberate attempt to injure"*, dropping *"or deliberately injures"*.

### Review round 3 — follow-up checks

- ✅ **`switching_positions.md` — follow-up CLEAR. READY FOR THE GATE.**
- ✅ **`winger.md` — follow-up CLEAR. READY FOR THE GATE.**
- ✅ **`on_ice_communication.md` — final check: no Major; stick-lift timing, referee ladder (all six books),
  substitute silence, Hockey Canada body position, PWHL 49.3 all upheld. READY FOR THE GATE.** 🔴 Optional rows:
  KT14 names only interference (the non-checking 604(d) / HC 7.3(b) tariffs live in CM and facts); facts `:235`
  *"box out with hips and back"* lacks *"without leaning"* (CARHA 49(a)); the stick-lift frame is four books.
- ✅ **`puck_handling.md` — final check: no Major; the brace lead, facts `:444`, CARHA awarded goal (conservative),
  crease skate-trap, KT10 counts all upheld. READY FOR THE GATE.** 🔴 Optional rows: KT10 *"the NHL escalates"*
  drops *"may"* and the target (Rule 21); HC 7.1(b) mid-tier omitted from KT10; **facts `:443` says the arm
  strength-move carve-out is *"NHL and IIHF 54.2 and Hockey Canada 8.1 only"* — PWHL 55.2 carries it too**
  (restrictive direction; for `rules-verifier`).
- ✅ **`equipment.md` — final Major fixed: skater's-stick count now *"all six books — three attach a limit"* in CM
  `:732` and body `:383` (CARHA 51(c) *"until the next stoppage of play"* and 51(a)'s minor quoted; PWHL 10.4
  quoted as limitless), matching `goaltender.md:1342`. READY FOR THE GATE.** 🔴 Row: three other *"four books"*
  counts in the file (helmet removal; pads under jersey; stick shaft cap) — four-book workstream.
- ✅ **`game_management.md` — final check: no Major. READY FOR THE GATE.**
- ✅ **`defender.md` — final check: no Major; `:281` IIHF limb now *"boarding or charging (41, 42) … each with a
  major above the minor"* — coordinator read IIHF 42.3/42.4 (discretionary major; major + GM) and confirmed.
  READY FOR THE GATE.**
- ✅ **`forechecking_systems.md` — final check: no Major; KT8 *"So keep off them"* upheld; CM `:914` chunk 107 now
  self-contained (goalkeeper named three times, corner tariff 607(a)/(d) Note 1 added), each limb quoted from
  `usah.txt:3663-3699`. READY FOR THE GATE.**
- ✅ **`risk_management.md` — batch D: no Major; KT9's boards limb restored in short form (HC 7.5(c)¶2 kept to
  its own adverbs; CARHA 53(a) kept discretionary) and CARHA 55(a) added to the glass CM, both quoted. READY
  FOR THE GATE.**
- **Final-round checks running:** `forechecking_systems` + `defender` · `game_management` + `equipment` ·
  `on_ice_communication` + `puck_handling` · `defending_the_rush` + `body_contact_and_battles`.
- ⚠️ `game_management.md`: restoring the 406(a) marker put §Discipline back to a stack of 5 (was 6, P2 took it
  to 3). **Accepted — a spoken escalation on a real counterweight outranks the stack count.** Listener run 3.
- ✅ **`center.md` — batch B: no Major; KT10, CM4 and CM17 verified in all six books. READY FOR THE GATE.**
  🔴 Row (harsher, informational): KT9 lacks USA Hockey's optional minor and the USA Hockey/CARHA
  obvious-and-imminent condition that CM17 carries.
- ✅ **`goaltender.md` — batch B: no Major; `:1133` restore and `:1445` mask-off repair verified. READY FOR THE
  GATE.** The 19 last-marker losses the checker flagged are within the 41 the P2 reviewer upheld paragraph by
  paragraph on paired renders. 🔴 Rows: `:1445` *"a scoring chance"* → *"an immediate scoring chance"*
  (cautious-direction); **CARHA 24(f) prices deliberate mask removal (minor; penalty shot on a breakaway / last
  two minutes / OT) and no layer names it** — `:847`, `:864`, `:1445` all say *"all five books"*.
- **`forechecking_systems.md` — batch B: no Major; every KT7 limb exact.** ⚠️ **But KT7 grew to 2,568 chars
  (1.55× the next) and is no longer a kernel — a P1 regression THIS wave made, and 607(b) now lives ONLY in the
  KT (a summary layer teaching what its body never does).** Sent back to split, with a per-limb layer test.
- ✅ **`team_play_and_culture.md` — batch C found no Major; the four minors applied as the reader specified
  (PWHL added to the KT5 suspension and the KT3/body `:125` no-change bar, each quoted from `pwhl_rules.txt`;
  *"(for the first player in)"* on the USA Hockey peacemaker limb at the Overview and KT10), and the
  coordinator's wrong IIHF parenthesis removed at all three sites. READY FOR THE GATE.**
- 🔴 **`body_contact_and_battles.md` 4th read — NO Critical, NO Major.** Seven minors sent back, three in the
  cheaper direction (*"not two minutes"* where USA Hockey's floor is a minor + misconduct; the PWHL 48.3
  reduction wider than its two criteria; a catch-up-push example pricing an at-speed hit), plus the CARHA 50(c)
  adverb at `:438`/`:1904`. ⚠️ **The Casebook's danger-zone paragraph is carried NOWHERE in the corpus**
  (grep `danger zone` = 0).
- ✅ **`faceoffs.md` — batch C found no Major; the one minor applied (scrum catch-all *"whoever you are, stay
  outside the circle"* restored — HEAD's own words, already reviewed). READY FOR THE GATE.**
- ✅ **`zone_entries.md` — batch C found no Major; the 66(b)/66(e) attribution corrected at both sites, now
  *"66(b) makes deliberate contact … a minor … and can make it a major, which 66(e) makes mandatory if he is
  hurt — and any major is an ejection there (Rule 30(a))"*, each clause matching the quoted rule text. READY
  FOR THE GATE.** 🔴 Row: 49(a) (intentional body contact that injures → mandatory Major) is cited in neither unit.
- ✅ **`playing_without_the_puck.md` — facts `:322` reverted to *"as long as it stays in the rink"*, the
  wording the reviewer recommended (176/200, chunk 022, self-contained); every other follow-up upheld with no
  Major. READY FOR THE GATE.**
- **`body_contact_and_battles.md` 3rd read — one MORE Major in the repair's own text:** CM1's new *"Force and
  where they end up decide it"* is a CLOSED test that omits **recklessness** — 608(b) opens *"recklessly
  endangers an opponent, or causes them to go head first"* and the repair quoted only the second half. ⚠️
  **A quotation truncated at a clause boundary — the exact `check_quote_drift` blind spot CLAUDE.md records**
  — in the third successive repair of the same bullet. Minors: a MANDATORY match described as "the referee's
  choice"; *"forceful"* reads as governing the head-first limb in facts `:652`. Sent back.
- ⚠️ **`playing_without_the_puck.md` facts `:322` — THE COORDINATOR'S OPTIONAL SKETCH WAS THE DEFECT.** I
  suggested *"as long as it does not go directly out of play"* to reconcile a wording; voiced alone it gives
  the NHL/IIHF/PWHL test only and **reads as permission to bank it out deliberately under USA Hockey, HC and
  CARHA.** The author's original *"as long as it stays in the rink"* was right. Reverting. **A sketch sized to
  remove an inconsistency is still a claim — CLAUDE.md's rule, broken by the coordinator in the same session
  it was re-read.**
- Follow-ups in, checks running: `center`, `forechecking_systems`, `goaltender` (batch B) · `faceoffs`,
  `team_play_and_culture`, `zone_entries` (batch C) · `equipment`, `risk_management`, `game_management`
  (batch D) · `defender` (own check).
- Follow-ups still being written: `on_ice_communication`, `puck_handling`, `body_contact_and_battles`.

⚠️ **SEARCH TRAP, new: the PWHL prints *"non–deflected"* with an EN-DASH** — a sweep for `non-deflected`
misses PWHL 65.2(iii) entirely. **Normalise dashes before any sweep of `pwhl_rules.txt`.**


## Appendix B — the pre-crash adverb-round plan sections, moved here verbatim on closing

## ✅ THE ADVERB WAVE — `defending_the_rush.md` REPAIRED, AND THE CHUNK MEASUREMENT PROVED D5 WAS THE WORST SITE

**28 September 2026.** Three sites repaired. **Both brief quotations confirmed verbatim in `hc.txt`**, and
the agent ran a corpus-independent census of the book: `deliberatelyattemptstoordeliberatelyinjures` = **4**
(7.1(c), 7.2(c), 7.3(c), 7.5(c)¶2), `attemptstoinjureordeliberatelyinjures` = **7**.

- **D5 `:385`** — *"a Match penalty for deliberately attempting or **causing injury**"* → *"a Match penalty
  **only where the attempt or the injury is deliberate**"*. ⚠️ **A SPLIT WAS NOT AVAILABLE — that block
  holds exactly 14 facts, `HARD_MAX`** — so the repair had to fit: 294 → **299/300**. ✅ **Nothing was
  trimmed to make room**; the scope clause, 7.3(e) and the 7.3(c) tier all survive, and *"only"* carries
  the exclusion of an accidental injury.
- **D1 `:299`** — 271 → **285/300**, off `--near` entirely.
- **D2 `:899`** — prose, no cap.

### ✅✅ THE MEASUREMENT THAT JUSTIFIES CALLING D5 THE WORST SITE — AND THE CENSUS NEVER MADE IT

**`md_to_speech --only defending_the_rush`, 97 chunks.** Both repaired facts lines are **alone in their
own `<p>`** — ✅ **the census asserted "voiced alone" from the fence and never measured it; it HOLDS.**

⚠️⚠️ **D5 was chunk 028 and the correct body quotation of 7.3(c) is chunk 032 — FOUR CHUNKS AWAY.** **So
a listener heard the strict-causation version and could not reach the correction at the moment of
instruction.** **D1 was chunk 020 with its correct body quotation in 020 and 023 — adjacent.** ✅ **That
is why D5 and D1 were not the same defect, and only the renderer could say so.**

### ⚠️ ANOTHER WRONG COORDINATOR PREMISE, AND IT WOULD HAVE MANUFACTURED A FALSE NEGATIVE

The brief said *"your file's BODY at `:648` and `:987` states 7.5(c) correctly."* ⚠️ **NEITHER LINE IS
ABOUT 7.5(c).** They are the NHL/PWHL **21.1** and CARHA **48(a)** general deliberate-injury match
penalties. **The body's real carriers are `:311` and `:394`**, which the agent found itself.
⚠️ ***"An agent that had checked only the two lines the brief named would have reported the body
unverified for this claim."*** **The routing failure again — a brief that names the wrong owner
manufactures a false negative.**

### ✅ AND IT LEFT THE SINGLE-ADVERB SITES ALONE, HAVING VERIFIED EACH

`:224`, `:235` — **PWHL 52.4**, verified: *"attempted to or **deliberately** injured her opponent by
bodychecking"* — **single**. `:515` — **PWHL 44.4** clipping, single. `:648`, `:651`, `:985`, `:987` —
quotations, intact. ⚠️ **It also corrected the brief on 7.6(c): the book reads *"attempts to or
deliberately injures"*, not *"attempts to injure or deliberately injures"* — still single, so the
conclusion holds.**

### 🔴 OPEN — the repair is new text and asked for a reader itself

*"'A Match penalty only where the attempt or the injury is deliberate' is new text and new text has not
been reviewed — a `facts-reviewer` or `safety-reviewer` reading it VOICED ALONE is the check I could not
perform on my own writing."*

🔴 **And `:383` in the same block sits at EXACTLY 300/300, pre-existing.** **The next edit there fails
the gate.**

🔴 **And it named the most likely other carrier: `body_contact_and_battles.md`, the corpus's densest
body-checking document, should be swept for this same 7.3(c)/7.5(c)¶2 claim.**

⚠️ **Its declared weakest negative is the same true-negative shape one wording over:** *"a paraphrase
such as 'a match penalty if somebody gets hurt' or '7.3(c) if the check injures' — no attempt word at
all, and the MOST PERMISSIVE form of the defect — scores zero in my sweep."*

## ✅ `rules_primer.md` AND `passing_and_receiving.md` REPAIRED — AND A SECOND CARHA DOUBLE-ADVERB RULE FOUND

**28 September 2026. Two lines, one word each.** D6 (`rules_primer.md:972`, body) and D8
(`passing_and_receiving.md:792`, Common Mistakes) both gained the second `deliberately`.

✅ **The agent hit the hyphenation trap and got OUT of it before the coordinator's warning arrived, by
the same route:** the whitespace-flattened probe scored **0**, **it did not read the zero as an
absence**, re-probed with `attemptstoinjureordeliberatelyinjures` — a fragment **that does not span the
break** — got **2 hits**, and printed both raw. ⚠️ **That is the general remedy and it is cheaper than
de-hyphenating: CHOOSE A FRAGMENT THAT CANNOT CONTAIN A HYPHENATION POINT.**

### 🔴 NEW: **CARHA Rule 50(c) CARRIES THE IDENTICAL DOUBLE ADVERB**

*"deliberately attempts to injure or deliberately injures an opponent under this rule."* ⚠️ **Combined
with Rule 50's opening Note routing stick-involved head contact INTO Rule 62, CARHA writes the double
adverb at BOTH ENDS of its head-contact answer.** **Neither repaired file paraphrases 50(c).**
🔴 **CENSUS ROW for the other 37 documents — a second rule of this shape with no census behind it.**

### ⚠️ ANOTHER WRONG COORDINATOR PREMISE, AND ACTING ON IT WOULD HAVE ADDED REDUNDANT TEXT

I briefed that D6 and D8 *"both say only 62(c) with no book name"*. ⚠️ **FALSE — both name CARHA in the
same line** (D6's next clause is *"CARHA writes no windup or follow-through carve-out either"*; D8's
ends *"— in CARHA-affiliated leagues"*). ✅ **The agent added nothing.** **Three wrong premises of mine
in this wave so far, all caught by the agent, none by me.**

✅ **All five control cases verified individually and NONE touched:** `rules_primer.md:417`, `:438`,
`:482`, `:942`, `:1111` — `:942` and `:1111-1113` quote **NHL 60.4/48.5**'s genuine single-adverb
wording, `:425` states **21.1**'s double adverb correctly. ✅ **`passing_and_receiving.md:442` was
already correct and was used as the MODEL, which is why the repair matches its sibling layer's wording.**

### ✅ FULL LAYER TEST, FENCE-STATE AWARE

Every mental-element hit classified by enclosing heading, with ` ```facts ` fence state tracked
separately **so the facts layer could not hide inside a body grep**. **The claim lived at exactly two
defective sites, in two different layers of two different files.** ✅ **`passing_and_receiving.md` was
the predicted one-file layer-test failure: body correct, Common Mistakes loose.**

**Marker pairing, paragraph by paragraph:** `rules_primer` 416/416 paragraphs, 112/112 marked;
`passing_and_receiving` 262/262, 17/17. ⚠️ **ZERO paragraph keys absent from the working tree in either
file — so the pairing is EXHAUSTIVE rather than an aggregate that could hide a loss behind a rewritten
opening.** `check_quote_drift` output **byte-identical to the HEAD baseline** on both.

### 🔴 REPORTED, NOT CHANGED — a facts line that stops one tier short

**`passing_and_receiving.md:422`** states CARHA's high-stick ladder as *"Rule 62(b) makes contact there a
Major penalty, accidental or intentional… and Rule 30(a) ends your night unless it was accidental and
injury-free"* — ⚠️ **it stops at the major and never reaches the MATCH tier at all.** ✅ **Not a defect
of THIS class — it asserts no mental element, so it was not built on the loose reading** — ⚠️ **but it
is a facts line, VOICED ALONE, giving a CARHA reader a ceiling of major-plus-game-misconduct when 62(c)
reaches a match penalty.** **Its own row.**

## ✅ THE PWHL HYPHENATION GAP — SETTLED BY THE COORDINATOR, AND THE LEAVE-ALONE RULINGS HOLD

An agent declared: *"two of my leave-alone rulings (PWHL 52.4 and 44.4, judged single-adverb) were made
from flattened searches against `pwhl_rules.txt`. If that file hyphenates, a double-adverb PWHL rule
could hide behind a `deliber-` split and those two verdicts would be half-answers."*

✅ **Measured: `pwhl_rules.txt` = 0 hyphen-newline splits. `hc.txt` = 0. So both rulings stand and the
`hc.txt` work was never exposed.** ⚠️ **But `pwhl_rules_layout.txt` = 7 and `carha.txt` = 122 — the
plain and `-layout` twins DIFFER, so a search that works in one silently fails in the other.**
**Recorded in `sources/README.md` with the full 27-file table.**

## ✅ THE ADVERB WAVE COMPLETE — 10 SITES IN 6 FILES, AND THE CENSUS'S **LAYER LABELS** WERE THE DEFECT

**28 September 2026.** All ten census sites repaired across four disjoint agents. **Every rule premise
HELD; two LAYER LABELS did not.**

### ⚠️⚠️ THE META-FINDING: A CENSUS CAN GET THE CLAIM RIGHT AND THE LAYER WRONG, AND THE LAYER IS WHAT SETS THE URGENCY

**D7 (`offensive_zone_play.md:1169`) and D10 (`shooting.md:963`) were both labelled KEY TAKEAWAYS by the
census. Both are the SOURCES TRAILER.** ⚠️⚠️ **And both agents rendered the document and found they
reach NO CHUNK AT ALL — the Sources trailer is not voiced.** **So the *"voiced ALONE to a listener"*
escalation in both briefs was false, and the *"three cases in one day where the naked copy was in a Key
Takeaway"* precedent did not apply to either.**

✅ **Both were repaired anyway — a reader reads the trailer on the site.** ⚠️ **But the agent named the
direction, and it is the one that matters:**

> ***"The census's layer label for D7 was wrong. If the same census supplied layer labels for D1, D2, D5,
> D6 to the sibling agents, those labels are worth re-deriving — this one was wrong IN THE DIRECTION
> THAT MANUFACTURES URGENCY."***

✅ **Re-derived: the other eight labels HELD**, each confirmed independently by the agent that owned the
file — D1/D5 facts, D2 Common Mistakes, D3 facts, D4 Sources trailer, D6 body, D8 Common Mistakes, D9
body. **Only the two "Key Takeaways" labels were wrong, and both were really the trailer.**
⚠️ **A layer label is a FIGURE like any other, and the census asserted its layers from heading position
without rendering. The renderer is the only thing that says whether a layer reaches a listener.**

### ✅ A CAP FORCED A SPLIT FOR THE SIXTH MEASURED TIME — AND THE SPLIT FIXED A DEFECT NOBODY BRIEFED

**D3 (`offensive_zone_play.md:711`)** sat at **291/300 with 9 characters of headroom** and the repair
needed **+13**. ✅ **Split, not trimmed** — 246 and 134, block 9 → 10 lines, 5 `Rule:` (exempt from
`MAX_COACHING_FACTS`) + 5 coaching, inside `HARD_MAX` 14.

⚠️ **The old single line carried TWO books, and each limb's scope qualifier had to serve both.** ✅ **The
split gives each line its OWN book, rule and scope** — and the CARHA-affiliated-adult-leagues scope
stayed with the CARHA limb. **Measured: both new lines land in chunk 077 as p10 and p11 of 15, each in
its own `<p>`, so the split did not separate the limbs across a chunk boundary.**

### ✅ THREE AGENTS HIT THE HYPHENATION TRAP INDEPENDENTLY AND NONE ACTED ON THE ZERO

All three got **0** from a whitespace-flattened probe for CARHA 62(c), and all three resolved it before
the coordinator's warning arrived — **two by reading the rule raw with a Python slice, one by re-probing
with `attemptstoinjureordeliberatelyinjures`, a fragment that does not span the break.** ✅ **That second
remedy is the cheaper one and is now the recommendation: CHOOSE A FRAGMENT THAT CANNOT CONTAIN A
HYPHENATION POINT.**

### ✅ CONTROL CASES VERIFIED INDIVIDUALLY, NOTHING SWEPT

**Hockey Canada 8.5(c)** is genuinely asymmetric — *"attempts to injure or deliberately injures a
goaltender by Interference"* — and is quoted verbatim at `ozp:639`, `shooting.md:297`, `:503`, `:931`.
**NHL 60.4, 48.5, 42.4** single, quoted verbatim. **PWHL 52.4 and 44.4** single. **CARHA 48(a)** single.
⚠️ **`ozp:639` is the brief's *"no single house form"* warning LIVE — a sweep would have damaged a
verbatim quotation.**

### 🔴 THE SAME NEXT DEFECT NAMED INDEPENDENTLY BY THREE AGENTS — **CARHA RULE 48(a)**

> ***"CARHA 48(a) — 'A Match penalty shall be assessed to any player… who deliberately injures or
> attempts to injure an opponent… in any manner' — is a SECOND, BROADER route to the same match penalty
> in that book, with its own ASYMMETRIC adverbs, and neither of my files mentions it."***

⚠️ **So CARHA may write TWO match routes to one act with DIFFERENT MENTAL ELEMENTS**, and the corpus
states one. 🔴 **Top row for the next wave. Name the ACT, not the rule.**

### 🔴 OTHER ROWS OPENED

1. **CARHA 50(c)** carries the identical double adverb, and Rule 50's Note routes stick head contact into
   62 — **the double adverb at both ends of CARHA's head-contact answer. No census behind it.**
2. **`passing_and_receiving.md:422`** — a facts line **voiced alone** giving a CARHA reader a ceiling of
   major-plus-game-misconduct when **62(c) reaches a match penalty**. **Stops one tier short.**
3. **`defending_the_rush.md:383`** sits at **exactly 300/300**, pre-existing. **The next edit there fails
   the gate.**
4. **D5's replacement text** — *"a Match penalty only where the attempt or the injury is deliberate"* at
   **299/300** — **is new text and the agent asked for a reader itself.**
5. **`body_contact_and_battles.md` is the most likely other carrier** of the 7.3(c)/7.5(c)¶2 claim and
   was NOT swept — it is the corpus's densest body-checking document.
6. ⚠️ **The shared weakest negative, named by all four: a paraphrase that states the mental element
   WITHOUT the words `injur` or `attempt`** — *"a match penalty if somebody gets hurt"*, *"and it does
   not matter whether they meant it"* — **scores zero in every sweep run, in every layer, and is the
   MOST permissive form of the defect.**

## ✅ THE CLOSED-COUNT REPAIR CLEARED — AND THE READER FOUND THE SAME CLAIM UNREPAIRED IN COMMON MISTAKES

**28 September 2026.** The overdue C6 reader on `body_contact_and_battles.md`. ✅ **All three edits
sound, and the reviewer could not break any of them:**

- **The paraphrase holds.** The force qualifier survives (*"forcefully checks"*), the geography survives
  (*"back toward the middle of the ice"* → *"with their back to the middle of the ice"*), and the
  mandatory modality is carried by the governing lead plus *"in each of three"*. **Instance (1) really is
  quoted verbatim three times elsewhere** — `:666`, `:1117`, facts `:1107` — **and `rules_primer.md:452`
  prints all three numbered instances verbatim.**
- **The ordinal is correct.** Counting the limbs as written, *"the third of them"* resolves to reckless
  endangerment, the wall-independent limb, matching the Casebook's own numbering.
- **Chunk 086 now supplies its own antecedent**, and the count plus all three instances are in chunk 085
  at distance 0, with the spoken `"Important."` on it.

✅ **Its verdict: *"The repair is good work: it is the rarer case where the new text is better than the
text it replaced in every direction I could measure."*** **No manufactured concern found in the brief.**

### 🔴🔴 THE MAJOR IT FOUND INSTEAD — PRE-EXISTING IN HEAD, PERMISSIVE, VOICED ALONE, 160 CHUNKS FROM ITS CORRECTION

**`:1776`, Common Mistakes bullet 1.** Its own headline names instance (1) — *"Finishing a check into a
player who is facing the wall, or hitting anyone from behind"* — and the bullet ends *"the lightest
outcome there **puts you in the box rather than out of the game**."*

⚠️⚠️ **For exactly that hit the Casebook REMOVES the box option: the major plus a game misconduct, or
match penalty, *"must be called."*** **A USA Hockey reader is told the lightest outcome leaves him on
the ice, for the hit that ends games and breaks necks.**

⚠️ **Chunk 247, voiced ALONE with its own spoken `"Important."`, and nothing in that chunk mentions the
mandatory tier. The correction is 160 CHUNKS AWAY.** **Layer state: body ✓, facts ✓ (split across §6 at
`:652`/`:653` and §8 at `:1107`), Common Mistakes ✗ AND CARRYING THE OPPOSITE, Key Takeaways
conservative.**

⚠️⚠️ **THIS IS *"BRIEF A CLAIM, NEVER A LINE"* PAYING OUT.** ***"It is the claim the repair exists to
fix, surviving in the layer a listener hears alone."*** ✅ **The reviewer found it only because the
brief told it to hunt the CLAIM — and it said so: *"I found the Common Mistakes one only because I went
looking for the claim rather than the line, and I did not do the same exercise for the PWHL insert's
claim."*** 🔴 **So do that exercise for the PWHL claim too.**

### ⚠️ A CORRECTION TO MY OWN FRAMING, AND IT MADE THE REVIEW STRICTER

> ***"Relative to HEAD the 'two cases' sentence does not exist — the ENTIRE three-instances paragraph is
> an insertion, as are the PWHL paragraph, both facts lines and two Sources-trailer limbs. The 'two
> cases' text was itself uncommitted working-tree state from the same session. So I judged the paragraph
> as WHOLLY NEW TEXT rather than as a numeral edit, which is the stricter reading and the right one."***

⚠️ **A diff against HEAD and a diff against "what I last reviewed" are different reviews, and only the
first is reproducible.** **An uncommitted intermediate state is not a baseline.**

### ⚠️ THREE MINORS, DISPATCHED WITH THE MAJOR

1. **Instance (1) is the only limb without *"[i]n every instance"***, being the paraphrase — a reader
   could read the universality as attaching to two of three. **Permissive, marginally.**
2. ***"The third of them"* is a pointer ACROSS a chunk boundary** — enumeration ends 085, ordinal is the
   third sentence of 086. **Degrades to vague, not false.** ✅ **Fix by substitution, which is SHORTER:**
   *"— reckless endangerment, wall or no wall."* ⚠️ **Same cross-chunk problem the agent's own render
   caught once already in this very sentence.**
3. **`:666`'s *"the lowest floor of the four, and the only one that leaves you on the ice"*** — the
   Major's shape in the body, but **materially safer because the three-instances sentence precedes it in
   the same chunk.** Also *"above"* is a pointer a listener cannot resolve.

### ✅ TWO THINGS VERIFIED AS *NOT* NEEDING ACTION — RECORDED SO THEY ARE KNOWN RATHER THAN UNEXAMINED

- Situation 1's **fourth paragraph** means *"the referee's choice"* understates one subset — **but the
  corpus carries it at `:546` and in §6's facts line `:651`, chunk 083.**
- **PWHL 48.4** unstated: **permissive by omission with ~nil consequence**, since the sentence claims a
  floor. `:601` is at 299/300 anyway.

### ✅ AND THE NEGATIVES IT RE-VERIFIED

**No IIHF match penalty anywhere** — it read every `match penalt` within 160 characters of `IIHF`, **27
sites**, all saying the IIHF writes none. **`check_quote_drift` flags ten fragments in the file and none
is in the new text.** `check_marker_pairs` clean; `check_facts_antecedents` clean; both new markers lead
a `**strong**` run so both take the inline amber wrapper.

### 🔴 SIBLING ROW

**`rules_primer.md:36` and `:1010`** enumerate Situation 1's mandatory tier as instances **(1) and (3)
only, omitting (2)**. **No count claim, so no false exclusivity** — and `:452` prints all three verbatim.
**Omission, non-permissive. Its own row.**

⚠️ **The reviewer's own weakest negative: *"I checked the Casebook's answer to checking from behind; I
did not sweep USA Hockey's book for other rules that price the same act — 602(a), 640(g) — and my clean
result on 608 is exactly the kind of true negative that stops a search."*** **And: *"I read four chunks
of 288."***

## ✅ `check_callout_flow.py` — THE THIRD ToC SHADOW STRIPPED (28 September 2026)

`_strip_nav_chrome()` stripped `<nav class="toc">` and `<nav class="sidebar">` and **walked straight
past `<details class="toc-inline">`** — the in-page contents mirror, which is a `<details>`, not a
`<nav>`. **So a `> ### ⚠️` heading still produced a permanent false `--bare` hit on every page carrying
one, while the heading's own body instance renders as a full amber panel.**

⚠️ **It cost a whole agent dispatch this round**, and ⚠️ **the direction is OVER-reporting, which reads
as thoroughness and so goes unquestioned** — the same reason three successive wrong `--panels` figures
survived in this file.

**Applied AFTER the four editing agents finished**, not during — the one live agent does not use this
tool. 🔴 **NOT YET VALIDATED: `site/dist` was deleted by the running build's `clean:cache` step, so the
tool correctly refused to answer rather than treating a missing directory as a pass.**
⚠️⚠️ **VALIDATE PER FILE AGAINST `site/dist` AFTER THE FINAL BUILD, NOT IN TOTAL — a total can agree by
cancellation, and this tool's history is three successive wrong answers that each looked plausible in
aggregate.** **Expected: `equipment` 1 → 0; the other pages unchanged.**

## ✅ THE COMMON MISTAKES MAJOR REPAIRED — AND THE AGENT REFUTED THE REVIEWER'S SKETCH, CORRECTLY

**28 September 2026.** Chunk distance **160 → 0**: the correction now lands in the permissive sentence's
own chunk 247.

### ⚠️⚠️ THE SKETCH WOULD HAVE OVERSTATED IN THE HARSHER DIRECTION, AND THE SITUATION'S **FIRST LIST** IS WHY

The reviewer's sketch — relayed by me — read *"**except for the hit this bullet names**, where its
Casebook requires the major plus a game misconduct or a match penalty."*

⚠️ **The bullet names TWO hits** — *"finishing a check into a player who is facing the wall, **or hitting
anyone from behind**"* — **and the mandatory tier reaches only the first, and only when FORCEFUL.** The
sketch drops *"forcefully"* and generalises, **telling a reader that ANY hit from behind carries the
mandatory ejection tier.**

⚠️⚠️ **AND THAT IS CONTRADICTED BY THE SAME SITUATION'S OWN FIRST LIST**, which the agent read in the
source and which nobody had quoted in any brief this round:

> *"The minor plus misconduct penalty must be assessed in the following situations: (1) A player, in an
> attempt to catch an opponent who is skating ahead of them and not near the boards, pushes the opponent
> from behind, causing them to fall to the ice. (2) A player makes **minimal body contact** from behind
> to an opponent who is in close proximity to them, and board contact is made…"*

✅ **So the box option SURVIVES — for minimal contact, including against the boards.** ⚠️ **The sketch
would have made the bullet contradict the Casebook's own first list.**

⚠️⚠️ **SAME FAILURE CLASS AS THE BRIEF'S ORIGINAL "TWO TRIGGERS": A FRAMING SIZED TO THE PART OF THE
SITUATION THAT WAS QUOTED.** **Situation 1 has TWO LISTS and four paragraphs; every brief this round
quoted only the second list.** ✅ **Twice now the same Situation has produced a defect by being read to
the part somebody quoted rather than to its end.**

✅ **The repair carries the force qualifier, the geography and the discriminator** — *"**Force is what
decides it:** that same Situation prices 'minimal body contact' from behind against the boards as a
minor and a misconduct, and a forceful check on a player standing there as an ejection."*

### ✅ AND THE FILE ALREADY CONTAINED THE COUNTERWEIGHT — CHECKED BY THE COORDINATOR

**`:1117` ALREADY QUOTES the Casebook's minimal-contact minor-plus-misconduct limb verbatim**, and
**`:1107` opens *"Forcefully checking an opponent who is standing along the boards…"*** ✅ **So both other
instance-(1) carriers keep the force qualifier and the file is self-consistent** — settling the agent's
declared item 3, which asked whether the repair had made the file inconsistent with itself.
⚠️ **The coordinator's own check nearly produced a FALSE NEGATIVE on `:1107`: a case-sensitive
`'forcefully' in text` returned False because the line OPENS with *"Forcefully"*.** **A case-sensitive
membership test is a search, and searches here are wrong in both directions.**

### ✅ ALL THREE MINORS ACTED ON, TWO BY SUBSTITUTION

1. *"in every instance"* moved **inside** limb (1) so all three are parallel — ⚠️ **not the sketch's
   *"in each of three, in every instance:"*, whose comma leaves the phrase floating.**
2. *"the third of them"* → *"— the reckless-endangerment instance, wall or no wall."*
3. *"USA Hockey's, **above**,"* → *"USA Hockey's **608(a)**"*, plus *"**outside those three
   instances**, the only one that leaves you on the ice."* ✅ **A listener-unresolvable pointer removed
   by naming the rule.** **The pre-existing *"lowest floor of the four"* count was left alone as outside
   the finding.**

### ⚠️ A SHAPE THAT HAS NOW PRODUCED TWO DEFECTS IN ONE SENTENCE — WORTH A CHECKER

> ***"That sentence has now been the source of two cross-chunk pointers; the first was the one my own
> render caught. The shape — AN ORDINAL REFERRING BACK TO AN ENUMERATION THAT ENDS A CHUNK — is worth a
> checker rather than a reader."***

🔴 **Open row.** ⚠️ **`check_facts_antecedents.py` covers facts lines only; this is body prose at a chunk
boundary and no tool sees it.**

### ⚠️ THE AGENT'S OWN DECLARATION, AND IT IS THE INVERSE SHAPE REPRODUCED AFTER READING ABOUT IT

> ***"The Major was PRE-EXISTING in HEAD and I read that bullet TWICE in earlier waves without seeing
> it — once for the layer test, once for the neighbour check. Both times I was looking for what my own
> edit had broken, not for what the bullet ALREADY SAID. A layer test that asks 'did the fix reach
> here?' answers no and stops; it never asks 'does this layer state the OPPOSITE?'"***

⚠️⚠️ **That is this file's own inverse-propagation warning, reproduced by an agent that had read the
passage describing it.** ✅ **So the layer test needs BOTH questions asked explicitly, and the second one
is the one that finds a pre-existing defect.**

### 🔴 STILL OPEN

- **The repair is new text — four sentences — and is under review now.**
- **The PWHL *"one book makes an ejection the floor"* claim is verified against five books of six**, CARHA
  unread by that agent. ✅ **The coordinator checked CARHA Rule 50 and it floors at a MINOR, so the claim
  holds** — but **the agent has not seen that and lists it as its highest-value open item.**
- ⚠️ **`check_facts` moved 5993 → 5994 during the wave — a SIBLING's added facts line** (the
  `offensive_zone_play.md` split), not this file's. **Its facts blocks are byte-identical at 518 lines.**
