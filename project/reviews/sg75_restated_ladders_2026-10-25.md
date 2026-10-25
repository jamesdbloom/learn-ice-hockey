# SG75 — restated checking-from-behind ladders cut to pointers (25 October 2026)

**Files:**
- content/foundation/rules_primer.md
- content/positions/goaltender.md
- content/systems/forechecking_systems.md
- content/systems/offensive_zone_play.md
- content/systems/special_teams.md
- project/plans/OPEN_ITEMS.md

## What changed and why

A read-only census of the six longest pages after body_contact found one act clearing the plan's "three or more restatements" bar: **checking from behind**. Its multi-book tariff was restated three or more times outside its home section on five pages. Rules Primer also restated its head-contact and major-ejection ladders.

One agent per page (exclusive file ownership) cut each non-home copy to a short unit that:
- leads with what the player does;
- keeps every safety limb and every mandatory-ejection or match limb voiced alone in that layer, after a per-limb layer test;
- points to the home section.

No home section changed. Net words: rules_primer −260, goaltender −248, forechecking_systems −188, offensive_zone_play −190, special_teams −105. That is about 990 in total.

## Reviews

| Dimension | Reviewer | Result |
|---|---|---|
| Rules (C4) | rules-verifier | **First pass:** 4 cheaper-direction defects, 4 harsher-simpler (see below). **Re-check:** every repaired unit VERIFIED against sources/, with two wording points (fixed below). |
| Safety (C6) | safety-reviewer | **First pass:** 4 majors and 6 minors; dropping both the forechecking permission and its counterweight was ruled safe. **Re-review:** CLEAR, with all five pages re-rendered and every repaired unit read as voiced. |
| Mechanical | coordinator | Exit 0: check_facts (no pipe), check_links, check_absolutes, check_geometry, check_secrets, check_counts. check_marker_pairs: 0 LOST and 0 SPLIT HALF on all five files, with marked units equal to HEAD (186/98/89/62/55). Full npm build exits 0. |

### Rules-verifier first-pass findings, all repaired

Each repair was made by the page's owning agent from the reviewer's evidence.

**Cheaper-direction defects:**
- **offensive_zone_play CM:** USAH 602(a) was dropped, which narrowed the match to 608(c). Restored: "for any reckless hit, plan on a match and a likely multi-game suspension (602(a))".
- **goaltender CM:** HC 8.5 was dropped. Rebuilt to the home section's structure:
  - off the head: the harsher of 7.5 and 8.5;
  - on the head: the harsher of head contact and 8.5, plus 7.5 for a head-first drive.
- **rules_primer KT5:** "without any intent to injure" was dropped, which implied that an NHL head hit cannot end your game. Restored.
- **goaltender :1395:** "vulnerable or" was dropped from USAH 608(c). Restored.

**Harsher-simpler defects:**
- **special_teams facts:** the merged line grouped 21.1 under boards and net, dropped 608(a), CARHA 48(a), and mixed up HC 7.6/7.7(c). Split into two lines.
- **special_teams body:** "no bare minor" lost the HC off-head scope. Restored.
- **rules_primer KT7 and CM:** HC head-first drive, "instead", and goal frame/net restored.
- **rules_primer CM :1113:** the IIHF second-misconduct limb restored.

### Safety-reviewer additions, all repaired

- **special_teams CM:** the HC/CARHA mandatory boards/net match, which had become "can". Restored to "must", with the IIHF limb.
- **OZP §10:** HC "ejects at every tier (7.5(a), (e))" restored, so the next bullet's "harsher of 7.5 and 7.6" has its antecedent again.
- **forechecking :657:** "whether they saw you is the referee's call, not yours".

### C11: coordinator repairs after review

These are limited to the rules-verifier's two re-check points, using its wording:
- **goaltender CM:** "the IIHF at a major and game misconduct" → "under the IIHF plan on a major and game misconduct". 43.3 is discretionary and conditional.
- **special_teams facts :1123:** added "HC 8.5(c)" to the deliberate-attempt-to-injure match list. The rules-verifier cited 8.5(c) "attempts to injure or deliberately injures a goaltender"; the block's own :1117 already carries it.

Mechanical checks were re-run after both edits: all exit 0, with 0 LOST.

## Dimensions

| Dimension | Covered by |
|---|---|
| D1–D3 (rules, exceptions, divergence) | rules-verifier, two passes, against sources/; commit-gate re-derived the key limbs |
| D4–D5 (citations, provenance) | No external citation added or changed; every rule number cited in the diff was checked against sources/ |
| D6 (negative existence) | rules-verifier: "the IIHF writes no match penalty" swept as `match penalt` over both IIHF rulebooks and both Situation Handbooks, 0 hits, with Rule 21 read |
| D7 (cardinal rule) | Checked. The new lead instructions ("pull up and play the puck", "go for the puck, not through the back", "never arrive at a goalie from behind") are what the rule requires, not a system choice. The one judgement added ("whether they saw you is the referee's call") the rules-verifier read as a fair reading of 43.1, not presented as a rule |
| D8 (numeric ownership) | No number added or changed beyond rule numbers |
| D9 (summary layer) | Per-limb layer test by each owning agent; safety-reviewer read every CM and KT unit, voiced |
| D10 (facts layer) | Three facts lines changed (forechecking :736, special_teams :1122/:1123). The rules-verifier verified each line against the book in both passes. The safety-reviewer read each line voiced alone (chunk 068, chunk 050). The owning agents ran `check_facts.py --near` before editing; the special_teams block is at 14/14 and passes. No separate facts-reviewer ran |
| D11 (safety) | safety-reviewer, two passes, CLEAR |
| D12 (read-aloud) | All five pages rendered through md_to_speech by the safety-reviewer; every changed unit read de-tagged |
| D13 (folklore) | No unsourced claim of craft or fact added; the cuts remove text, and every added clause is a rule limb checked by D1 |
| D14 (structure, links) | check_links exit 0, including the two new anchors (`#the-types-and-what-each-does-to-your-team`, `#the-tier-for-running-you--and-which-books-price-it-highest`) |
| D15 (rendered site) | Full npm build after the last edit (dist 08:19:52 > content 08:19:04); `check_callout_flow --bare` 0 on all five pages; no rendering code changed |

## Commit-gate first pass

BLOCK on C3 only: D14–D15 were missing, the reasons for D7, D8 and D13 were wrong, and D10's coverage was not named. The table above replaces that section. No content changed.

The gate's non-blocking notes are left as plan rows or judged fine, as follows:
- rules_primer CM "Three majors": the pointer carries the CARHA 32(d) and USA Hockey second-major limbs. The reviewers cleared it.
- rules_primer :31: the 602(a) limb survives in CM :1111.
- The sg74 record's faceoffs :721 inaccuracy is noted here. It is not this diff.

## What this method could not have found

- **Sibling documents.** body_contact_and_battles, winger, defender and uk_rules all restate these ladders. A page here might now contradict one of them. Cross-document restatement is a plan row.
- **Other pricing rules.** No sweep was run for other rules that price a hit from behind (boarding, charging, IIHF 21 "Dangerous Actions"). Any of them could make a book's answer harsher than these ladders.
- **The suspension clause.** "Likely multi-game suspension" rests on the owner's 19 October ruling, not on a file that was grepped.
- **Untouched units.** Units the repairs did not touch were not re-read for sentences that assume the old wording.
