# W215/W216: USA Hockey's floor for checking from behind is stated wherever its ejection triggers are; faceoffs' head-contact ladder matches center's (9 November 2026)

**Files**

- content/systems/faceoffs.md
- content/systems/special_teams.md
- content/systems/forechecking_systems.md
- content/positions/switching_positions.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/risk_management.md
- content/technique/body_contact_and_battles.md
- content/systems/zone_entries.md
- content/systems/game_management.md
- content/systems/offensive_zone_play.md
- content/technique/passing_and_receiving.md
- project/plans/OPEN_ITEMS.md
- this record

## Source

The SG214 commit gate (center, 8b9f0810) blocked twice on the same shape:

- **The shape.** A unit said a hit from behind "ends your game in every book but USA Hockey … and under USA Hockey too if forceful at the boards, head first or reckless".
- **What was missing.** USA Hockey's ordinary-case price was never stated.
- **Why it matters.** A USA Hockey listener could infer two minutes.

The book is clear. usah.txt 608(a): *"A minor plus a misconduct penalty, or a major plus a game misconduct penalty, shall be assessed for checking from behind."* Casebook 608(a) Situation 1 says the minor plus misconduct *"must be assessed"* even for an open-ice push or a minimal "pinch".

The coordinator ran a corpus census for the shape and dispatched the claim, not the line.

- **W215, six pages.** These were found by the phrase "every book but USA Hockey". faceoffs.md also got the head-contact items the SG214 review had predicted it carried.
- **W216, five pages.** These were found by a wider sweep for units that list USA Hockey's triggers without the floor.

Each page had one authoring agent with exclusive ownership. Every page then had a rules-verifier and a safety-reviewer, in two batches.

## What changed

**USA Hockey 608(a) floor.** It was added wherever a unit named USA Hockey's ejection triggers without it, in every layer: Key focus, body, What it costs, facts, Common Mistakes and Key Takeaways. In total, about 50 units across 11 pages. The usual form is: "under USA Hockey it is at least a minor and a misconduct (608(a)), and ends your game too if it is forceful at the boards, head first or reckless".

**Facts lines at their cap.** These were split into two self-contained Rule lines, not trimmed. That applies to:

- puck_support :587/:588
- risk_management :833/:834
- forechecking :964/:965
- special_teams :1116/:1117
- zone_entries :776/:777

**faceoffs head contact.** USA Hockey's "beyond pure accident" premise (Casebook 620 Situation 2) was replaced by Situation 1's "however little force", matching center.md. The 620(b) triggers are now all three (careless, intentional, reckless), with the 620(c) match.

**Hockey Canada 7.6(b).** The discretionary tier is now stated at :1128.

**Other repairs made on review**

- Two units had attached "a likely multi-game suspension" to the whole major-or-match tier: zone_entries :805 and passing_and_receiving :221. Under USA Hockey a major plus game misconduct carries a next-game suspension (404(b)). The suspension table's multi-game ranges are for match penalties. Both units now put the multi-game ban on the reckless case (602(a)) only.
- switching_positions :256 had "diagonal too" moved into a line saying "every book". The rules-verifier found that only USA Hockey writes "diagonally from behind", so the phrase was moved back onto the USA Hockey line (:257).
- "else minor and misconduct" became "else at least …" in four facts lines. Read alone, it sounded like the fixed price. 608(a) lets the referee give a major and game misconduct too.
- zone_entries :776. The split had turned a condition into an order ("drive them into the boards …"). It now reads "if you drive them …".

## Defects found by review, all repaired

| Reviewer | Finding | Direction | Fix |
|---|---|---|---|
| W215 safety | BLOCK: forechecking :696 (facts) and :706 (body) still listed the triggers with no floor; the same sentence had been repaired at :336/:756 | cheaper | floor added at both |
| W215 rules | faceoffs :760/:764 dropped the 620(c) match and named only "careless" | cheaper | "careless, intentional or reckless", match restored |
| W215 rules/safety | "else minor and misconduct" read as the price (special_teams :653/:1116, switching :256) | cheaper | "else at least …" |
| W215 rules | switching :256 "diagonal too" now said every book; only USA Hockey writes it | harsher/false | moved to the USA Hockey line :257 |
| W215 rules | risk_management :833 restated :835 and cited Casebook-only "forceful" to 608(b) | wording | trimmed to the floor |
| W215 safety | special_teams KT8 had lost its verb aloud | read-aloud | "it ejects you for …" |
| W216 rules | zone_entries :805, passing :221: multi-game ban on the major tier | harsher | moved to the reckless case (602(a)) |
| W216 rules | body_contact :753 had dropped "along the boards" | harsher | restored |
| W216 rules | zone_entries :777 cited the Casebook trigger to 608 alone | wording | "(608, Casebook Situation 1)" |
| W216 safety | zone_entries :776: the split made a condition an order | read-aloud | "if you drive them …" |
| W216 safety/rules | missed units: body_contact :585 and :776, offensive_zone_play :971 and :1153 | cheaper | floor added |
| W216 safety | zone_entries :238/:826 had no verb aloud | read-aloud | "one forceful … is a major …" (297 and 300 characters) |
| commit gate (first run) | BLOCK: forechecking :742 `Never:` line still gave USA Hockey's ordinary price flat ("minor plus misconduct", no "at least") and dropped "into the boards or goal frame" from 608(b) — the same claim repaired at four sites and missed at a fifth | cheaper / misquote | `Never:` keeps the instruction plus "a hit from behind ejects in most books"; a new `Rule:` line carries "at least a minor and a misconduct (608(a)), and ejects if forceful at the boards, reckless, or head first into the boards or goal frame (608(b); Casebook 608 Sit. 1)". A narrow safety-reviewer cleared both (verified "most" = five of six books) |
| commit gate (first run) | zone_entries :776 kept a stray "and" after the condition | read-aloud | "…unable to protect themselves, a match is mandatory" |

## Reviews

| Reviewer | Result |
|---|---|
| rules-verifier (W215, 6 files) | 608(a) floor correct at every site. "Any game misconduct suspends next game" is in HEAD and confirmed by 404(b). FIX-cheaper ×4 and WORDING ×4, all applied. Half-right premise on Situation 2 (below). |
| safety-reviewer (W215) | BLOCK ×1 (forechecking :696/:706), applied. R1 to R3 applied. R4 recorded in the plan. Every changed unit is at least as strong as HEAD. |
| rules-verifier (W216, 5 files) | Floor correct everywhere. "Almost every book" holds: Hockey Canada head contact (7.6/7.7) gives the non-ejecting cases. FIX-harsher ×2, WORDING ×2 and missed units ×3, all applied. |
| safety-reviewer (W216) | Nothing blocking. R1 to R5 applied. Every changed unit keeps every tier HEAD had. |
| commit-gate (first run) | BLOCK on forechecking :742 only; every other condition passed, including a per-hunk tier-vocabulary comparison against HEAD over all 11 files. It ruled the Situation 2 hold acceptable to ship, and the mechanical D15 sufficient. |
| safety-reviewer (narrow, after the gate) | forechecking :742/:743 and zone_entries :776: nothing blocking. Optional "every book but USA Hockey" at :742 not taken: Hockey Canada's off-the-head caveat would make it less exact than "most". |

**Disagreement held for the owner: Casebook 620 Situation 2.**

- **The W215 rules-verifier's view.** Situation 2's "provided the action was in the normal course of play" excuse reads as general, not confined to fallen players. "A helmet clash is head contact however little force" is therefore harsher than the book writes.
- **The other view.** The SG214e/f reviewers and the SG214 commit gate held the opposite. center.md, committed in 8b9f0810, ships "however little force".
- **What was done.** faceoffs.md is kept consistent with center.md. The direction is harsher, so nothing ships cheaper. The question is a plan row to decide once for both pages.

### C11

- The authoring agents made the W215/W216 edits.
- After the four reviews, the coordinator applied the reviewers' exact wording, or a measured fit of it to the cap:
  - faceoffs :760, :764
  - special_teams :653, :1116, KT8
  - switching :256, :257
  - forechecking :696, :706 (safety B1, the floor clause used at :336/:756 in the same file)
  - risk_management :833
  - puck_support :612
  - body_contact :585, :753, :776
  - zone_entries :238, :776, :777, :805, :826
  - passing :221
  - offensive_zone_play :971, :1153
  - after the commit gate: forechecking :742 and the new :743 Rule line (the gate's fix, then cleared by a narrow safety-reviewer), and the zone_entries :776 "and"
- Each clause was re-derived against usah.txt:3712-3731 and usah_casebook 608 Situation 1.
- The coordinator wrote the briefs, the plan rows and this record.

### Checks after the last content edit

- check_facts exit 0 (889 blocks, 6158 facts), no pipe, re-run after the gate fixes
- check_links --quiet exit 0
- check_absolutes exit 0
- check_marker_pairs over the 11 files: 0 LOST. One SPLIT HALF candidate, switching :257, was read: that facts line was unmarked in HEAD too, and it pairs by shared text with a marked body paragraph.
- Full `npm run build` (absolute binary) exit 0 after the last content edit (re-run after the gate fixes; both repaired strings present in dist), including check:links (57 pages, all resolve).
- check_callout_flow --bare: 0 on all 11 pages.
- ⚠️ in `<main>` inside warn-inline: 100% on 10 pages. game_management has 102 glyphs and 100 warn-inline runs with --bare 0: the gate parsed the DOM and found the two extra inside an existing `aside.callout-warning` amber panel in a paragraph this diff does not touch, so they are treated, not bare.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (11 files): usah 608, 602(a), 404, 620, 613(e); Casebook 608 Sit. 1, 620 Sit. 1–2; NHL/PWHL/IIHF 43; Hockey Canada 7.5–7.7; CARHA 50, 53 |
| D2 Exceptions | Casebook 608 minor-tier cases (open-ice push, pinch); Hockey Canada off-the-head carve-out; 7.7 non-ejecting tiers; IIHF discretion ("plan on it") |
| D3 Divergence | USA Hockey is the only book with a non-ejecting ordinary tier for checking from behind; "almost every book" verified |
| D4 Citation integrity | Casebook-only triggers re-cited (risk_management :833, zone_entries :777) |
| D5 Provenance | quotations against sources/ by both rules-verifiers |
| D6 Negative claims | "only USA Hockey writes 'diagonally from behind'" (flattened sweep of five books); "IIHF has no match penalty" |
| D7 Cardinal rule | each addition follows the existing instruction; no tactic stated as law |
| D8 Numeric ownership | not engaged (no owner figures moved) |
| D9 Summary layer | Key Takeaways and Common Mistakes in every file swept by claim, by safety ×2 |
| D10 Key-facts layer | splits checked to stand alone; caps measured; compression read aloud |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | every file rendered; changed units read voiced alone, with floor and triggers in the same chunk |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links; build |
| D15 Rendered site | built-HTML mechanical check on all 11 pages (bare glyphs, warn-inline, floor strings present). No browser review: text-only changes inside existing paragraphs and facts lines, with no new markers or structure. |

## What this method could not have found

- **Units with no lexical trace.** Units that price a hit from behind without "behind", "608" or the trigger words.
- **Pages not swept.** Recorded in the plan: winger, defender, rules_primer, goaltender, getting_started, defending_the_rush, DZC, language_and_glossary.
- **Other USA Hockey rules on the same act.** For example, 603 boarding, or 620 when the head is reached, which could make the floor higher than 608(a).
- **Whether "at least a minor and a misconduct" is heard as the expected price for a hard hit** (plan row).
- **Phones and screen readers.** The narration audio lags until it is rebuilt.
