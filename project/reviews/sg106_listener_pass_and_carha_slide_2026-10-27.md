# SG106: listener-pass fixes, goal frame, IIHF edition for In-House readers, CARHA slide wording, rush-trailer caption (27 October 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/positions/switching_positions.md
- content/positions/defender.md
- content/getting-started/getting_started.md
- content/systems/special_teams.md
- content/foundation/rules_primer.md
- site/src/diagrams/defending_the_rush.mjs
- site/src/data/diagrams.json
- project/plans/OPEN_ITEMS.md

## What changed and why
1. **Unmarked penalty halves from the SG104/SG105 splits.** Each now has an inline ⚠️ before a bold hazard run, never at a paragraph start:
   - bcb :45: the IIHF women's wall limb, "never use the boards to push, pin or eliminate an opponent". The penalty is a minor, or a major plus automatic game misconduct (101.1).
   - bcb :630: the USA Hockey Casebook 628 Situation 1 major and game misconduct.
   - switching :296: HC 7.6(c), "a match if they could not protect themselves".
2. **Goal frame.** The head-first ejection lines now say "boards or goal frame" (HC 7.5(c); owner ruling 15 Oct, "keep goal frame in"): defender :911, switching :296 and special_teams :670.
3. **getting_started KT14.** "Leave the injured player's helmet on", because "the helmet" had no antecedent when voiced alone.
4. **special_teams :463.** The In-House Rules adopt IIHF v1.1 (eiha_inhouse_2026-27.txt:43-45), so the instigator quotation is now v1.1 Rule 46.3 (iihf_rules_v1.1.txt:4108-4114). It was the 2026/27 46.10 wording.
5. **CARHA slide exception.** CARHA 2026 86(b) Note (carha_2026.txt:3640-3642) excuses a sliding player who "hits or knocks the puck from their opponent's stick prior to making actual body contact". That is narrower than "reaches the puck first", because 86(a) penalises a slide "directly in the path of the puck". switching :322 and rules_primer :1115 now say "knocks the puck off the carrier's stick before touching them". The wording is exact for CARHA and stricter than Hockey Canada's "contact with the puck prior to contacting their opponent", so it errs safe.
   - Sequence: a diagram agent first reported that CARHA had no puck-first exception. It had read only the 86(a) Note. A rules verifier found the 86(b) Note and its Case Situation, the same in the 2020 book. The corpus's claim was right; only the "reaches" wording was loose.
6. **bcb trailer :2153.** "all three sources" became "all four", to match "those four". The coordinator brief's premise about body :913 was stale (it had already been fixed).
7. **rush-trailer caption** (defending_the_rush.mjs). The 50-word middle sentence was split at "the first wave gets the net". The new sentence "In that system the backchecking forward … takes the trailer" keeps the standard-system scope. Hosts: winger, defending_the_rush, neutral_zone_systems.
8. **Declined:** a defender-two-on-one caption tripping limb. The host (defender :885/:887) already voices it. The brief's "tripping if the puck is not played first" was wrong for USA Hockey (Casebook 639 Situation 4: "regardless of who gains possession").

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules | rules-verifier | All 7 CONFIRMED. Two notes, both erring harsh: the HC slide wording is narrower than 8.6; the :630 paragraph does not name the USA Hockey kneeing match (the coordinator checked that :628, directly above, carries 628(c) and 602(a)). Web pages for the bcb trailer were refetched today: Look Up Line and HECC both return 200. |
| CARHA slide (focused) | rules-verifier | CARHA 2026 and 2020 86(b) Note quoted. All five corpus sites are right in substance; two needed tightening (done). Side finding: CARHA 35 cites "86(d)" for fouling from behind, but Rule 86 has only (a)-(c). Book error; the corpus does not cite 86(d). |
| Safety | safety-reviewer | SHIP on all 7 files. No act is cheaper. Markers sit before strong runs. check_marker_pairs 0 LOST; `--panels` 0 everywhere. Caption read alone on all three hosts. |
| Captions | check_absolutes, check_caption_pairs, check_geometry | Exit 0 after build-diagrams. |

### C11
After the reviews the coordinator added "or goal frame" at special_teams :670, the safety reviewer's minor suggestion, matching the defender and switching edits. The same paragraph already gives the 7.5(c) boards-or-goal-frame match.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 | Two rules-verifier passes, as above. |
| D4–D5 | Quotations verified, including a v1.1 46.3 against the In-House adoption clause. |
| D6 | n/a |
| D7 | The caption assignment stays a coaching choice ("an assignment rather than a law"). |
| D8 | n/a |
| D9–D10 | No facts lines changed. A sibling grep found no stale "reaches the puck first" copy. |
| D11–D12 | Every changed unit was rendered and read alone. |
| D13 | n/a |
| D14 | check_links and site check-links pass. |
| D15 | Full site build after the last edit: exit 0. `--bare` 0. |

## What this method could not have found
- Another layer carrying the slide or head-first claim in different words.
- Whether IIHF head contact is stated consistently across special_teams ("plan on major and GM") and switching ("harsher of 43 and 48"). This difference already existed and was noted, not adjudicated.
- Live web pages as they were on the cited date.
