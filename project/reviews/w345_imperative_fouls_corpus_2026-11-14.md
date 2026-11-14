# W345: fouls voiced as instructions, corpus-wide (14 November 2026)

**Files:**
- content/foundation/language_and_glossary.md
- content/foundation/rink_map.md
- content/foundation/rules_primer.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/risk_management.md
- content/hockey-iq/time_and_space.md
- content/positions/center.md
- content/positions/defender.md
- content/positions/switching_positions.md
- content/positions/winger.md
- content/systems/defending_the_rush.md
- content/systems/faceoffs.md
- content/systems/forechecking_systems.md
- content/systems/game_management.md
- content/systems/neutral_zone_systems.md
- content/systems/offensive_zone_play.md
- content/technique/body_contact_and_battles.md
- content/technique/puck_handling.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
W344 reworded twelve sentences in three documents that opened with a foul as an imperative followed by its consequence ("Drive them into the boards … and a match penalty is mandatory"). The corpus is read aloud, and facts lines, KTs and Common Mistakes bullets are voiced alone, so a listener can hear such a sentence as an instruction.

A read-only census used four nets: a verb list, a verb-agnostic "and it is / you are / the goal" tail, and "Under <book>," openers. It found 31 real sites in 15 more documents. About 176 false positives were read and rejected; these were legal coaching imperatives such as "Take the ice, never the man" and "Kick the puck, never a player".

Five authors worked disjoint file groups:
- **AD:** foundation.
- **AE:** hockey-iq.
- **AF:** technique.
- **AG:** positions.
- **AH:** systems.

## What changed
Every census site was reworded, plus about 20 more of the same shape that the authors found by their own scans. Each now reads:
- "Never … If you do, …" where the act is a hazard to avoid;
- "If you …, …" where it is a plain consequence;
- a gerund or noun where a facts cap was tight.

Examples:
- body_contact_and_battles :610: "⚠️ **Never drop your body to reach an opponent at or below the knees. If you do, it is clipping…**";
- defending_the_rush :1051: "⚠️ **If you cover a puck that is in your own crease, it is a penalty shot in every book…**";
- neutral_zone_systems facts :365/:428: "Charging a player … is a mandatory match under Hockey Canada 7.4(c)…";
- time_and_space KT8: "Never pin the stick of someone still waiting for the pass; that is interference."

Legal coaching imperatives were left alone.

**Two changes of substance:**
- **time_and_space :555.** It read "Stop the goalie moving freely in the crease, by position or contact, and the goal can still go (69.1; PWHL 71.1)". That was ambiguous at best, and it sounded like permission. NHL 69.1 reads: "Goals should be disallowed only if: (1) an attacking player, either by his positioning or by contact, impairs the goalkeeper's ability to move freely within his crease…". PWHL 71.1 and IIHF 69.1 are identical. The sentence now reads: "But if you stop the goalie moving freely in the crease, by your position or by contact, you can lose the goal". "Can" is the right strength: 69.1 is the referee's judgement, and "will be disallowed" applies only to the crease-entry case. The sentence now matches the same document's facts line and playing_without_the_puck.
- **playing_without_the_puck :731.** It gains Casebook 607 Situation 4's trigger: "only try to pull out once contact cannot be avoided" ("once it is realized contact is unavoidable").

## After review
- **Amber placement and the moved qualifier (both reviewers), at center :532/:904 and defender :298/:460/:949/:1018.**
  - **The amber:** the authors had put "Never …" in plain text and the ⚠️ on the consequence. Both reviewers asked for the body_contact :610 shape: ⚠️ leading one strong run from "Never" through the consequence.
  - **The qualifier:** the safety-reviewer found that defender's "Never put a player who cannot protect themselves into the boards or goal frame from behind" moved the qualifier scoping the Hockey Canada 7.5(c) / CARHA 53(b) match onto the instruction, making the instruction conditional. That is the "qualifier changes jobs" shape. It is not permissive here, because the same paragraph says no book prices it at a minor.
  - **The fix:** author AG applied both: "⚠️ **Never hit anyone from behind. If you put a player who cannot protect themselves into the boards or goal frame from behind, it is a mandatory match**". The safety-reviewer re-checked all seven sites: OK, and each forms warn-inline with the glyph leading.
- **game_management :1264 (rules-verifier, optional).** "If you put it out" became "If you put the puck out".
- **time_and_space KT8 (safety-reviewer, optional).** Added "for the pass". Both applied verbatim by the coordinator and re-checked.
- **Logged in the plan, not applied:**
  - zone_entries' three W344 units, now the odd ones out on both counts;
  - the unchanged body_contact facts Never line with the scoped-instruction shape;
  - the census's blind spots.

## Reviews
| Reviewer | Result |
|---|---|
| census (read-only) | 31 real sites in 15 files; ~176 false positives read and rejected; blind spots declared. |
| authors AD, AE, AF, AG, AH | All census sites done, plus ~20 found. AE found :555 wrong rather than ambiguous and fixed it against 69.1/71.1. AF and AE checked Casebook 607 Situation 4. |
| rules-verifier | No BLOCK across all 46 hunks; no rule meaning changed. Verified :555 (NHL/PWHL/IIHF 69.1), :731 (607 Situation 4), NHL 25.2/63.2(iv), USA Hockey 601(d)(7), Hockey Canada 7.4(c), CARHA 48(a)/49(b), NHL/PWHL 21.1, USA Hockey 602(a). One optional wording, and the emphasis note. |
| safety-reviewer | No BLOCK. Every unit voiced alone: nothing heard as an instruction; nothing cheaper; 0 LOST in 18 files; 0 bare glyphs. Amber recommendation and the defender qualifier finding, applied. Re-check OK. |

### C11
The wave was written by the five authors. Post-review content changes were author AG's application of both reviewers' amber and qualifier findings, and two reviewer wordings applied verbatim by the coordinator. All were re-checked by the safety-reviewer. The coordinator wrote the plan row and this record.

### Checks after the last content edit
These ran after a full `npm run build` (absolute binary, exit 0) that started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_secrets, check_counts;
- check_marker_pairs on all 18 files (0 LOST, 0 SPLIT HALF);
- check_callout_flow --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier (meaning preserved; two substance changes verified) |
| D4 Citations | none added or changed except the "Rule 49(b)" label at forechecking :1028 |
| D5–D8 | not engaged |
| D9 Summary layer | time_and_space KT8; center and defender Common Mistakes; voiced alone |
| D10 Key-facts layer | risk_management :302, neutral_zone :365/:428, game_management :634, defender :938, each voiced alone |
| D11 Reader safety | safety-reviewer, with re-check |
| D12 Read-aloud | every changed unit rendered and voiced (authors, safety-reviewer) |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build plus harness; no site-reviewer (text only) |

## What this method could not have found
- **Consequence elsewhere.** An imperative foul whose consequence is in the next sentence, a ", which is …" form, or a second-person indicative such as "You hit them from behind and you are gone".
- **Diagram captions.** Captions carrying the shape.
- **Old tariffs.** Wrong tariffs these sentences carried over unchanged: only the two substance changes were re-verified.
