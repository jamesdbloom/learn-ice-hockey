# Round 30 September 2026, wave 20: the back layers lead with what a player does

**Scope.** P1 under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". Waves 15–19 added mandatory penalty rungs to many Common Mistakes bullets and Key Takeaways. Every rung was correct, but some units had become tariff-first. Wave 20 re-aimed Common Mistakes and Key Takeaways in the ten middle-band documents so each **leads with what a player does**, then gives the price. The method was **re-order, don't strip**. Brief: Appendix A.

**Files (10):**
- `forechecking_systems`, `shooting`, `equipment`, `winger`, `switching_positions`
- `goaltender`, `center`, `zone_entries`, `offensive_zone_play`, `playing_without_the_puck`

## The premise was mostly wrong, and what was actually there

`check_instruction_first --file` scored **0 tariff-first units** before the wave on every file where an author measured it (`zone_entries` 0/32, `offensive_zone_play` 0/33, `playing_without_the_puck` 0/34, `equipment` 0/42, `winger` 0/25). The long ladder bullets already led with the instruction. What authors actually found:
- short technique bullets with the instruction at the end, or with no instruction (`shooting`, `goaltender`, `equipment`, `forechecking_systems`);
- sections with **no Key Takeaway** (new kernels: `center` KT14–17, `winger` KT15–16, `zone_entries` KT14, `shooting` KT13, `switching_positions` KT12 — all appended so trailer references to existing KT numbers stay valid);
- **multi-subject bullets** (`offensive_zone_play`: three Common Mistakes bullets split into seven single-subject units; the largest fell from ~5,180 to ~2,400 characters);
- one **restatement** row (`zone_entries`, the goalie-charge ladder voiced in full at 8 spoken sites).

`check_tactics_ratio` barely moved, as CLAUDE.md predicts for re-ordering (e.g. `playing_without_the_puck` CM 79→79%; `center` KT 72→66%; `zone_entries` KT 76→65%).

## Method

1. **Ten authors in parallel**, one per file.
2. **Twelve first reads covering every file on both dimensions:** a `content-reviewer` and a `safety-reviewer` per file group (five groups, plus `zone_entries` alone once its author finished). **Two groups blocked.** Fixes were dispatched per group only after both of that group's readers had finished.
3. **Fix wave A** (five agents), then **final line reads** on every repaired unit (`safety-reviewer` or `rules-verifier`), then fix waves B, C, D and D2 where final reads found residuals, each with its own line read. Every repair was read by an agent that did not write it.
4. **Build, then a headless-Chrome `site-reviewer`.**

## What the reads found, and what was fixed

### Blocking

- **`zone_entries`: a restatement shortening failed its layer test.** The author collapsed the goalie-charge ladder at body :340, :390, KT10 and KT11 to *"Hockey Canada, CARHA and USA Hockey each make some charges on him a mandatory ejection — any charge at all under Hockey Canada 8.5(b) …"*. Every clause was true, but:
  - in the crease scenarios, "some" set against Hockey Canada's "any" told a CARHA listener not every crease charge ejects — false in the permissive direction (`carha.txt` 52(b): every charge on a goalie *"within the goal crease"*, or one that injures);
  - USA Hockey 607(c) (check or charge in the crease or privileged area) left :340 (its section's only carrier) and KT11 (the KT layer's only carrier);
  - KT11 lost CARHA 66(b)/(e), leaving *"any major at all is an ejection (30(a))"* with no antecedent;
  - KT10 lost "reckless" and "injures".
  - **Fix:** each unit now names every book's trigger. **Lesson for briefs: a layer test is per LAYER, not per file** — the author's test found every limb somewhere in the file, but not in the voiced-alone units that had been their only summary carriers.
- **`offensive_zone_play` (two, each found independently by both readers):**
  - **facts :854**, the coordinator's own wave-19 carried-row fix: *"minor and misconduct at least; forceful, the same or a match"* — "the same" now pointed at the minor-and-misconduct just added, so a forceful hit read as cheaper than Casebook 608 Situation 1's mandatory ejection. A qualifier that changed jobs. Now *"forceful, an ejection"*.
  - **CM "Cutting across the winger's path"** led *"Establish body position in front of them and arrive into it; do not make the contact on the way across"* — about a player who has already moved the puck, implying contact once in position (NHL 56.2(iii), IIHF 56.2(III), USA Hockey 640(b)). The same sentence stood in the body at :888. Both now: *"Once the puck is past you, go for the puck, not the winger: turn and skate to it, and never cut across into them or hit them."*
- **`center` (final rules read): two false counts in §Icing** (*"the two books that impose the bar"*, *"Two of the books here are lighter"*), pre-existing, harmless direction. Now the books are named.
- **`shooting` (final read of fix C):** an unrequested fixer edit, *"A stick that catches someone above the shoulders is a penalty in every book"*, was false in the NHL, IIHF and PWHL (60.1/61.1 follow-through carve-out) and contradicted its own sentence. Replaced with the reader's verified wording.

### Major, fixed (pre-existing, permissive, surfaced because the wave put them in the lead)

- **`shooting` — CARHA Rule 79.** KT4 led *"Use a three-quarter wind-up … rather than a full slap shot"*, but CARHA 79(a)'s Note makes any backswing *"more than fifteen inches either on or off the ice"* a slap shot (minor; major if it injures → ejection, 30(a), plus a one-game suspension, 32(d)), and the document puts a three-quarter wind-up at waist height. The CARHA limb now stands in every unit that recommends a wind-up or a point slap shot (facts :132, :134, :136, :139, :176, :225; body :146, :153, :159, :163, :248, :328, :414; CM :846; KT4). The fake-shot tip (:414) gained CARHA 79(b) on the conservative reading of "for the purpose of intimidating". A coordinator sweep found no other document recommending a three-quarter or half wind-up.
- **`goaltender` KT9: *"The one limb of that rule with no boundary on it is 607(b)"*** was false — 607(a), 607(d) Note 1 and 607(e) name no place either. Fixed at four sites (KT9, CM :1440, body :1133, CM :1464). The author **refused the coordinator's frame** (*"a deliberate check out there is charging"*) because Casebook 607 Situation 5 says a goalie outside the privileged area *"can be legally checked"*. The final `rules-verifier` ruled that Note 1 and Situation 5 **reconcile**: Note 1 decides which rule penalised contact goes to (accidental → interference, deliberate → charging); Situation 5 narrows its own "legally checked" to engaging for a puck the goalie holds. Carrying Note 1 flat, as `zone_entries` KT10 and others do, errs harsher and is not blocking.
- **`winger` KT15 *"USA Hockey never does [run a race]"*** was false (sled hockey: *"Hybrid icing will be used in adult classification games"*, `usah.txt:7412`) and omitted CARHA (automatic). Fixed in every layer; the red-line instruction now uses the owner's wording (*"past the red line on your stick"*) with CARHA's blue-line-league exception worded neutrally (65(b)/(c) is ambiguous).
- **`center`:** check-from-behind counts corrected to six books, three writing a minor (USA Hockey, Hockey Canada, CARHA) and three not (NHL, IIHF, PWHL 43.2); a post-icing faceoff sentence (*"the first faceoff violation … does not eject a centre"*) was unscoped and permissive for USA Hockey and CARHA — now scoped to the NHL, IIHF 2026/27, PWHL and Hockey Canada Junior.
- **`winger`:** PWHL 84.1 cited for the no-change exceptions at three sites; the rule is 83.4.

### Coaching presented as law (non-negotiable 7), fixed

- `shooting` CM "Aiming for corners" stated one coaching school as a rule and dropped the body's top-ranked target; rewritten to name the school and the alternative.
- `shooting` CM "Shift your weight back foot to front foot" contradicted the body's two schools; scoped to "with a beat of time".
- `forechecking_systems` CM "Skate at the lane the carrier wants" contradicted the bullet's own "which side is your coach's call"; now "the lane your system takes away".
- `goaltender` :1427 now scopes the angle instruction to "the mainstream teaching".
- `zone_entries` CM "reach the line last" now labelled a coaching convention.

### Coordinator errors this wave

- **#9:** the `goaltender` fix brief asserted *"a deliberate check out there is charging"*, a reading Casebook 607 Situation 5 contradicts on its face. The author refused it.
- **#10:** the `offensive_zone_play` fix brief's sketch *"block their path… make them go around you"* is permissive under USA Hockey 625 (Note and (a)(4)) and Hockey Canada 8.3(i); only NHL/IIHF 56.1 permit the block. The author refused it.
- **Brief command nit:** `check_instruction_first.py` needs `--file <path>`.
- **The wave's original brief** permitted shortening restatements "with a per-limb layer test" but did not say per LAYER; `zone_entries` blocked on exactly that.

## Markers

`check_marker_pairs` reports **0 LOST** on all 10 files. HEAD→tree: `playing_without_the_puck` 36→36, `equipment` 65→65, `center` 52→52, `goaltender` 110→110, `switching_positions` 17→17, `winger` 40→40, `forechecking_systems` 55→55, **`offensive_zone_play` 50→54** (the split bullets each carry their own ⚠️ on the instruction), `zone_entries` 28→28, `shooting` 54→54. "No longer present by key" hits are rewritten openings, each checked to still carry its ⚠️.

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts` (26 documents, 851 blocks, 6,047 facts), `check_absolutes`, `check_geometry`, `check_secrets`, `check_counts` and `check-arrivals` all exit 0.
- **URLs:** none added; per-file `https?://` counts unchanged against HEAD on all 10 files.
- **Diff against HEAD:** 168 insertions and 155 deletions across 10 content files.
- **Build:** absolute npm, exit 0, full chain to `check:links` (54 pages, all links and anchors resolve), finished 16:14:06. The last content edit was `center.md` at 16:02:46. `--panels` 0 and `--bare` 0.

## Rendered site (`site-reviewer`)

**CLEAR.** 10 pages × 400/1440 × light/dark, headless Chrome 154 over CDP, serving the 16:13 build (covers the final tree).
- Every Common Mistakes section is one `<ul>` and every Key Takeaways section one `<ol>`, numbered 1–N continuously; appended KTs (center 14–17, winger 15–16, zone_entries 14, shooting 13, switching 12) render correctly and no earlier KT was renumbered. Trailer "Key Takeaway N" pointers checked against their items.
- 1,110 glyphs across the ten pages, every one in a `span.warn-inline`: 0 panels, 0 bare, 0 untreated in a `<strong>`. The lengthened `shooting` wind-up run forms one wrapper ending at "…shoot a snap or wrist shot instead".
- 2,132 `dd.facts__value`: 0 literal `**`, backticks or stray markup; 0 overflow.
- No horizontal scroll at 400 px; console clean; no HTTP errors; no off-origin requests.
- Readability data (400 px): tallest single bullets are `shooting` CM "Screening with your feet in the blue paint" 4,247 px, `switching_positions` CM "Reading 'force them outside'" 4,131 px and `center` CM "Planning the backcheck around a hit" 3,785 px — each about five phone screens.
- Pre-existing, carried: `playing_without_the_puck` EIHL trailer entry points at "Key Takeaway 11" for an Elite League sentence KT11 does not carry (stale before this wave); the `center`/`winger` faceoff diagram caption renders as one 992-character amber run, visually close to a panel.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×3, `safety-reviewer` ×10, `content-reviewer` ×6 | Every new or moved rule claim checked against `sources/*.txt`: CARHA 19(d), 30(a), 32(d), 49, 52, 53, 62, 65, 66, 79; USA Hockey 603, 604, 605, 607 (whole) + Casebook 607 Situations 2–6, 608 + Casebook Situation 1, 621, 624, 625, 640; Hockey Canada 3.2, 6.5, 6.7, 7.5, 7.6, 8.3, 8.5, 9.5; NHL/IIHF/PWHL 42, 43, 56, 60/61, 76/78, 81/83, 84, 87/89. |
| D2 | Exceptions | Yes | same | Follow-through carve-out books; CARHA wave-offs; post-icing faceoff exception books; Hockey Canada category scopes. |
| D3 | Rule-set divergence | Yes | same | Six-book counts re-derived (checking from behind; post-icing change bar). |
| D4 | Citation integrity | Yes | readers | PWHL 84.1 → 83.4; quotations verbatim. |
| D5 | Provenance | Partly | coordinator | No URL added; new CARHA reading notes in `center`/`winger` trailers (dated, provenance only). No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "No other book divides the ice at the blue lines"; "CARHA has no time-out rule" (true negative on three spellings; no claim written); "no other document recommends a three-quarter wind-up" (coordinator grep). |
| D7 | Cardinal rule | Yes | `content-reviewer` ×6 | Five coaching-as-law units fixed (above). |
| D8 | Numeric ownership / restatement | Partly | `content-reviewer` | `zone_entries` restatement decided and repaired; flex claim moved to its owner's figure. Wider numeric ownership **declared out of scope**. |
| D9 | Summary layer | Yes | all readers | The wave's subject. |
| D10 | Key-facts layer | Yes | readers | Facts touched only where false or carrying the claim; caps passed (`shooting` :136 295/300, `offensive_zone_play` :854 292/300). |
| D11 | Reader safety | Yes | `safety-reviewer` on every file (first read); a `safety-reviewer` or `rules-verifier` line read on every repair (fix D/D2: `rules-verifier`) | Every file had a safety read. Fix D touched icing, substitution and faceoff procedure only; its one penalty-adjacent sentence was narrowed in the stricter direction. |
| D12 | Read-aloud integrity | Yes | every author and reader rendered `md_to_speech` | Chunk-level antecedents fixed (`offensive_zone_play` :1131, `playing_without_the_puck` KF :20, `center` "take him"). |
| D13 | Folklore | Partly | `content-reviewer` | Unsourced "almost always in sticks too stiff" removed; `center` body :710 "covers more ice" carried. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | KT numbering after appends; prose outside changed units not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

## Carried (not blocking) — rows are in OPEN_ITEMS.md

- **W21 sweeps (claims found here that may stand in sibling documents):** point slap shots / wind-ups without the CARHA 79 limb (`defender`, `special_teams`, `offensive_zone_play`); "USA Hockey never runs a race", "works everywhere", "four books" icing and check-from-behind counts (`defender`, `special_teams`, `faceoffs`, `game_management`, `rules_primer`); USA Hockey goalie protection framed as ending at the privileged area (`rules_primer`, `uk_rules`, `body_contact_and_battles`); the cut-across wording (`forechecking_systems`, `defending_the_rush`, `defender`).
- **Owner:** `rules_primer` :344/:966 read CARHA 65(b)/(c) as your own blue line; the text is ambiguous.
- **Harsher-direction simplifications:** IIHF 43.3's reckless condition dropped where "any hit from behind ends your game" (`offensive_zone_play` KT10, facts :854, `playing_without_the_puck` KT10); `switching_positions` KT6 "numbers toward you, that hit is not available at all" vs NHL/PWHL/IIHF 43.1's awareness condition; Note 1 carried flat against Casebook 607 Situation 5 (`zone_entries`, `rink_map`).
- **Omissions:** `center` facts :687 "both books" (CARHA 53(a) injury rung and 53(b) match in no facts line; CARHA's floor already carries a game misconduct); `goaltender` never mentions boarding (USA Hockey 603); `zone_entries` IIHF 42 goalie-charge tariff, Hockey Canada 7.4(c), 607(e); IHUK junior "No icing calls at U12".
- **Readability:** `zone_entries` KT11 2,455 voiced characters; `center` backcheck CM ~5,300 characters; `winger` cross-check CM; `equipment` KT3 triple qualification.
- **Nits:** listed per file in OPEN_ITEMS.md.

## What this method could not have found

- **Units the wave did not touch.** Every read compared changed units to HEAD; a false sentence the wave left intact passes by construction. Three pre-existing majors (`shooting` KT4, `goaltender` KT9, `winger` KT15) were found only because a reader opened a rule to check a neighbour.
- **A moved qualifier that leaves no lexical trace.** Readers traced moved clauses by wording.
- **Other rules pricing the same act** beyond those named, e.g. boarding or head contact on a goalie in a corner, or a non-reckless IIHF check from behind.
- **Sibling documents** carrying the claims repaired here (the W21 sweep rows).
- Real devices, 320 px, and screen readers.

## Appendix A — the author brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 20: P1 BACK-LAYER RE-AIMING (Common Mistakes and Key Takeaways). You own EXCLUSIVELY the file(s) named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently.
READ FIRST, in full: CLAUDE.md sections "THE CORPUS TEACHES TACTICS. THE RULES ARE BACKGROUND." (especially "THE REFRAME — ORDERING AND RESTATEMENT, NOT PROPORTION" and "the instruction is the best sentence in each bullet and it is in the worst position"), "READABLE BEATS DEFENDABLE", and the non-negotiables; then project/content_style_guide.md.
WHY THIS WAVE: waves 15–19 added mandatory penalty rungs (USA Hockey 607(b), 603(b), 608(b), Casebook 608 Situation 1, NHL/PWHL 42.5, etc.) to many Common Mistakes bullets and Key Takeaways. Every one of those additions is CORRECT AND MUST STAY. But several of these layers now read as tariff-first: a mistake named in bold, then several book-by-book penalty ladders, then the instruction as the last clause. Measured by check_tactics_ratio.py --by-layer --file <path> (form, not substance — a candidate, never a target).
THE TASK, per Common Mistakes bullet and per Key Takeaway in your file:
1. LEAD WITH WHAT A PLAYER DOES. If the instruction is buried at the end, move it to the front: "**<mistake>.** <what to do instead>. <why / the price>". RE-ORDER; do NOT strip. Every rule, rung, book, citation and caveat stays — only its position changes.
2. ABSENCE: a bullet that names a mistake and its cost but never says what to do → add the one instruction (craft, stated plainly as the common approach; name a realistic alternative where one exists; no rulebook citation needed for a tactic). A section with no Key Takeaway at all → add one kernel (what a player does in that situation).
3. A KEY TAKEAWAY IS A KERNEL: "what does a player DO in that situation". If a KT is a rules appendix, lead it with the action and keep the tariff after it. Do not turn a KT into a second Common Mistakes.
4. RESTATEMENT: if the same multi-book ladder is voiced in full in several layers of your file, you MAY shorten a summary-layer copy to one plain clause ONLY with a per-limb LAYER TEST showing every limb (every mandatory rung, every book, every scope) is still carried in the body or facts of the same file, and never in Common Mistakes where a bullet is the only carrier. When in doubt, re-order instead of shortening.
5. SAFETY: after re-ordering, read each unit VOICED ALONE (render it). A mandatory ejection must not become a trailing afterthought that a listener could miss if it was a caveat on a permission; a qualifier must not change what it attaches to (CLAUDE.md: "a qualifier can change jobs through a move or a trim"). Never write "only" where a book doesn't; never tie an ejection to injury; keep "forceful", "reckless", "may"/"shall" exactly.
LANE: fix a rules defect only if it is PERMISSIVE and penalty-bearing; report everything else. Do not touch Key focus/Overview unless a unit there is permissive.
Facts: this wave is NOT about facts lines; leave ```facts blocks alone.
GATES (no pipes): python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py ; python3 scripts/check_marker_pairs.py <file> (0 LOST — a moved bullet keeps its ⚠️; a ⚠️ must still precede a **strong** run on the hazard clause, never a citation). Measure before/after: python3 scripts/check_tactics_ratio.py --by-layer --file <path> and python3 scripts/check_instruction_first.py <path> (both worklists — report, don't chase). Render: python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/w20_<stem> (SCRATCH=/private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad); read every changed unit voiced alone.
REPORT: every changed unit (layer, before/after first sentence), every added instruction or kernel, every shortened restatement with its layer test, measurements before/after, marker counts, self-caught errors, rows outside the lane, and "what this method could not have found".
