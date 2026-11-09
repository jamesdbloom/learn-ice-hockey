# SG220/SG221: winger and defender each get one "What it costs" section, instruction first; dropped and missing tiers restored at their scenes (9 November 2026)

**Files**

- content/positions/winger.md
- content/positions/defender.md
- project/plans/OPEN_ITEMS.md
- this record

## Source

This is the owner's structural readability method (project/what_it_costs_design.md). Pages are taken in measured order. These are the next two position pages after center: winger was 60% rules-bearing and defender 59%.

Two owner decisions were made on 9 November, during these waves:

1. **Length.** The restructure no longer shortens pages. On being told so, the owner said: *"I'm happy if it is not shortening pages as long as the more interesting content on how to play is first and more obvious."*
2. **Coaching sections lead with the tactic.** This is corpus-wide and is now a plan row. It is not done in this commit.

Each page had one authoring agent with exclusive ownership. The briefs carried the seven lessons from center's three commit-gate blocks:

1. ejecting or mandatory tiers stay at the scene;
2. state floors, not just triggers;
3. strict 620 reading;
4. layer-vs-HEAD table;
5. brief a claim, not a line;
6. moved qualifiers;
7. no rules from memory.

## What changed

- **winger.md: `## What it costs` with 10 subsections.**
  - The free hand and holding
  - Where checking is barred (with a new four-line facts block)
  - The crease and the goal
  - Contact with the goalie
  - Cross-checking at the net
  - At the dot
  - After your own icing
  - The trailer on the backcheck
  - A hit from behind
  - A game misconduct, and the next game
- **defender.md: `## What it costs` with 11 subsections.**
  - Over the glass
  - Your goalie behind the net
  - Holding the puck, or the player
  - Moving a screener
  - The stick at the net front
  - Boarding
  - A hit from behind
  - Charging
  - A slide that goes wrong
  - After your own icing
  - Icing on the kill
- **Pointers.** Three defender subsections now point to their owner pages for the full ladder after a parity read: body_contact_and_battles (twice) and defending_the_rush.
- **Subsection shape.** Every subsection opens with its bold instruction, then the facts panel, then the ladder.
- **Coaching scenes.** Each scene keeps its instruction plus its ejecting or mandatory tier in the same spoken unit, then a pointer.
- **Floors added that HEAD lacked.**
  - USA Hockey 608(a): "at least a minor and a misconduct". Added wherever the triggers are named, on both pages.
  - USA Hockey 620(a)/(b): at the dot (winger) and at the net front (defender). Defender also carries Casebook 620 Situation 4, the mandatory match for a forceful, punishing hit to the head.
  - USA Hockey 607 goalie charging floor.
  - Hockey Canada 7.6(b)/7.7(a) at the dot.
  - CARHA 53(a) injury, with the 32(d) automatic suspension.
  - CARHA 50 head contact at the dot.
  - Hockey Canada 7.2(c) boarding match.
  - IIHF 55.3/61.3 hook and slash ejection, at defender's stick scene.

## Measured, against HEAD

| | winger HEAD | winger shipped | defender HEAD | defender shipped |
|---|---|---|---|---|
| Prose words (check_readability) | 17,226 | 18,386 (+6.7%) | 17,886 | 18,661 (+4.3%) |
| Marked units | 56 | 63 | 66 | 75 |
| LOST markers | — | 0 | — | 0 |
| Amber panels (--panels) | 0 | 0 | 0 | 0 |
| At 400px, What it costs heading to first instruction | — | 10px in all 10 | — | 10px in all 11 |

**Why prose rose.** Tiers stay at each scene, the floors are newly stated, and each subsection has a lead. The owner accepted this.

## Defects found by review, all repaired

### Round one: three reviewers per page

**winger, safety: BLOCK ×2.**

- Hockey Canada's mandatory major and game misconduct for an injury at the net front had left the scene (8.5(b), 7.4(b), 8.3(b), 9.2(b)).
- The "Where checking is barred" lead read as permission to lean wherever checking is allowed.

**winger, facts: BLOCK ×2.**

- The backcheck block had no Hockey Canada from-behind tier and no mandatory match.
- No facts line carried USA Hockey 620 at the dot.

**winger, rules: FIX-cheaper.**

- 608(b)'s reckless limb was dropped (:527, :509).
- :602 dropped the multi-game suspension.
- CARHA 53(a) injury and CARHA 50 head contact were absent.
- Wording: "in one game", the icing lead, :779 "that".

**defender, safety: BLOCK.** The IIHF hook and slash ejection no longer reached the stick scene.

**defender, rules: FIX-cheaper.**

- Facts :902 dropped 603(a)'s major option.
- The prose dropped the 608(b) triggers.
- "A hit from behind" dropped the 7.5(c)/53(b)/608(c) mandatory match its pointers promised.
- The CM :978 pointer was wrong.

**defender, facts: RECOMMENDED.**

- The icing Key line was unscoped.
- The injured-player caveat had gone.
- The red-line lines were stranded.
- The bench and skate instruction had gone.

**Coordinator.** The author's CARHA citations named carha.txt. The reviewers verified against carha_2026.txt; the rules in question are identical apart from furniture.

### Round two: narrow re-checks

**winger, rules.**

- "A net-front foul that hurts someone is at least a major and game misconduct" was too broad, in the harsher direction. Hockey Canada 9.5 (Junior/Senior) makes an accidental injuring high stick a double minor, and CARHA 50(a) makes an accidental head clash a minor. The sentence was narrowed to "a charge, cross-check or interference" at :533, :782 and in the facts line.
- CARHA charging 52(a)/(b) was added.

**winger, safety.** R5: the Hockey Canada floors at the dot were added, scoped correctly. The reviewer's sketch said 7.6(b) applies "in every division", but 7.6 is minor and female hockey only. The shipped text says "in minor and female hockey … one that injures … (7.6(b)); in Junior and Senior … (7.7(a))".

**defender, rules.** Both questions were confirmed: the three-trigger clause matches Casebook 608 Situation 1 exactly, and the open-ice push stays at the floor. Two changes were made:

- the 620 paragraph gained Situation 4's mandatory match;
- the icing Key line gained Hockey Canada U18AAA/Junior (6.7(d)).

**defender, safety.** The net-front facts block gained a USA Hockey 620 line.

### Round three: site-reviewer BLOCK on defender

- **What was wrong.** Nine paragraphs now opened with ⚠️, because the restructure had removed HEAD's `**What it costs.**` lead-in, and WARNING_RE is anchored. The site rendered them as nine full amber panels. Six were in coaching scenes and mostly penalty ladders, so on a phone the eye went to the penalties before the play, against the owner's measure. Two had no instruction at all, and Boarding no longer looked like its ten siblings.
- **Repair.** Each paragraph now opens with its bold instruction. Three got a new instruction lead drawn from the scene's own instructions: gap control, step-up, and Boarding. The ⚠️ moved before the first bold tariff clause. No glyph was dropped.
- **Result.** 0 panels, 0 bare, 107/107 in warn-inline.

## Reviews

| Reviewer | Result |
|---|---|
| rules-verifier ×2 per page | All CORRECT after the repairs above |
| safety-reviewer ×2 per page | Final passes: nothing blocking on either page |
| facts-reviewer ×1 per page | BLOCK ×2 (winger) and RECOMMENDED ×5 (defender), all applied |
| site-reviewer (Playwright Chromium, real 400×860 and 1440×900, light and dark, before commit) | winger: nothing blocking. defender: BLOCK (nine panels), repaired and verified on the post-repair build: 0 `aside.callout-warning`, 107 warn-inline, 0 bare, --panels 0. Clean on both pages: all 38 in-page links land clear of the header; the Essentials switch works; both contents lists hold every new heading; no overflow; clean console; contrast ≥5.7. RECOMMENDED: tall coaching facts panels ahead of the tactic. This led to the owner decision and a plan row. |

**Disagreement held by owner decision.** Casebook 620 Situation 2: the strict "however little force" reading stands (owner, 9 November).

### C11

- The authoring agents wrote SG220/SG220b and SG221/SG221b/SG221c.
- After the re-checks, the coordinator applied the reviewers' wording, re-deriving each against the quoted rule text:
  - **winger**: :512 facts line (narrowed; CARHA 52 added); :533 and :782 (narrowed to three fouls); :579 (Hockey Canada 7.6(b)/7.7(a), with the reviewer's "every division" corrected to "in minor and female hockey").
  - **defender**: :289 (Casebook 620 Situation 4 match); the icing Key line (Hockey Canada U18AAA/Junior); a new net-front facts line (USA Hockey 620(a)/(b)).
- The coordinator also wrote the briefs, the plan rows and this record.

### Checks after the last content edit

- check_facts: exit 0 (906 blocks, 6185 facts), no pipe.
- check_links --quiet: exit 0.
- check_absolutes: exit 0.
- check_marker_pairs: 0 LOST on both files. Five SPLIT HALF candidates, each read by a safety-reviewer: unmarked facts lines or tariff paragraphs directly after a marked lead.
- Full `npm run build` (absolute binary): exit 0, finished through check:links. dist 13:17 is after defender 13:16 and winger 13:07.
- check_callout_flow --bare 0 and --panels 0 on both pages.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 per page: usah 602–609, 613, 620, 625, 640, 204; Casebook 608/620; Hockey Canada 4.8, 6.2, 6.7, 7.1–7.7, 8.1–8.7, 9.2–9.5; CARHA 30, 32, 48–54, 57, 62–66; NHL/PWHL/IIHF 42, 43, 47, 55, 56, 61, 69, 76 |
| D2 Exceptions | Casebook 608 minor-tier cases; Hockey Canada 9.5 and CARHA 50(a) non-ejecting injuries; Hockey Canada 6.7(d) divisions; 640(e) has no adult exemption |
| D3 Divergence | per-book floors stated (608(a), 7.5(a), 53(a), 43.2) |
| D4 Citation integrity | carha.txt vs carha_2026.txt checked; Casebook-only triggers cited to the Casebook |
| D5 Provenance | quotations verbatim (rules-verifiers) |
| D6 Negative claims | "IIHF has no match penalty"; "no book caps … at a minor"; 7.7 Interpretation 1 does not reach a clash |
| D7 Cardinal rule | instruction first in every subsection and coaching paragraph touched |
| D8 Numeric ownership | owner-page pointers read for parity (body_contact_and_battles, defending_the_rush, faceoffs) |
| D9 Summary layer | Common Mistakes and Key Takeaways layer-tested against HEAD by authors and safety |
| D10 Key-facts layer | facts-reviewer per page; splits stand alone; caps measured |
| D11 Reader safety | safety-reviewer ×2 per page |
| D12 Read-aloud | rendered each wave; scene tiers in the same chunk as the instruction |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build; site-reviewer clicked every link |
| D15 Rendered site | site-reviewer before commit; defender repair verified mechanically on the later build |

## What this method could not have found

- **Rules not cited.** Rules that price the same acts but no unit names. Example: Hockey Canada 4.8(b)(i), three stick minors in one game (plan row).
- **Meaning shifts.** Shifts where a qualifier moved but its words survived, beyond what the reviewers read.
- **Rendering.** Real phones, other browsers and screen readers. The narration audio lags until rebuilt.
