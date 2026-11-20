# W547: pressure routes that pinned a carrier, and two summary corrections (20 November 2026)

## Census

A read-only diagram-reviewer measured all 27 pressure routes and 1 stop route. It imported `DIAGRAMS`, `loc()` and `RINK` the way `check-arrivals` does, and checked each route against any target within about 9.5 ft of its end that stands within about 8.5 ft of the boards.

**Result:** the census found seven captions to fix and one picture that contradicted its caption. pk-wedge-plus-1 was already fixed in W545.

## Repairs

Captions and geometry are in `site/src/diagrams/*.mjs`. The caption agent rebuilt the diagrams after each edit.

### Captions

| Diagram | Change |
|---|---|
| scan-before-a-wall-reception | Level sentence added: "Whether the forechecker may hit you depends on whether your game allows body checking." The contact sentence is now conditional but stays universal: "A reception on the wall can end with you against the boards, checking league or not". The safety-reviewer ruled out scoping it to checking leagues, because that would take the posture away from no-check readers. "take it" became "take any contact". |
| nz-1-2-2-containment | Aim point added: "F2 steps up to meet the puck on the wall, stick first, and never into the receiver's body or their back". Level sentence: "Whether a hit may follow once they have the puck…". This matches the owner host's "the step up is not a hit" and NHL 56.2(i). |
| nz-pressure | "The strong-side defenceman's step-up goes to the puck, stick first, not the receiver's body", followed by the timed level sentence. |
| layer-not-converge | Level sentence, plus a new ⚠️: "Arrive on the carrier's inside, stick on the puck, and never into the back of a player facing the boards". The caption had no glyph, and the limb is itself the hazard. |
| practice-small-area-in-one-zone | "They close on the puck with the stick, not on the carrier's body", placed after "on purpose." |
| pinch-centre-high and pinch-centre-below-the-goal-line | Shared `PINCH_CONTACT` now reads "stick on the puck, not on a player". `check_caption_pairs` is still valid for the pair. |

### Geometry

Four routes failed rule 1 (a route ending within 9 ft of its target must miss the target by more than 2.9 ft) and now pass. All were measured by hand on the curve, because `check-arrivals` ignores pressure routes.

| Diagram | Problem | Change | Miss on target, before → after |
|---|---|---|---|
| corner-escape-routes | The line aimed through A1's back into the puck. The caption forbids that. | `bow: 10.5`, endpoints kept. The safety-reviewer rejected the census's "inside shoulder" move, because it would block the drawn behind-the-net escape. | 0.6 → 5.84 ft, at 55.7° off the bearing. Clears both escape waves by 6.6–7.1 ft. |
| practice-small-area-in-one-zone | The line aimed at the carrier. | End moved to (63.5, 31). It now aims at the puck (0.02 ft). | 0.13 → 4.34 ft on the carrier |
| scan-before-a-wall-reception | The forechecker came diagonally from behind R. | End moved to (62, 34). Now 97° off R's facing. | 0.42 → 5.83 ft |
| pinch-centre-high and pinch-centre-below | — | Bow 2.5 → −2, endpoint unchanged. Dasher clearance 5.5 ft. | 2.00 → 4.21 ft |

Alt texts were updated for all four.

### Content

- **rules_primer Key focus :17.** It read "Outside the NHL it can end your game whether or not you meant it", which wrongly implied the NHL cannot eject for an unintended head hit. NHL 20.4 makes a major that injures the face or head carry a mandatory game misconduct. It now reads "In every book it can end your game, and in most even when you did not mean it".
- **rules_primer KT5.** Restored "under USA Hockey even careless contact must" (620(b)), which W546 had dropped.
- **team_play_and_culture KT12.**
  - The closed list of books where breaking up a fight draws a game misconduct told NHL, PWHL and IIHF listeners it does not. In those books it is at the referee's discretion: NHL 46.16, IIHF 46.14, PWHL 46.15.
  - It now reads: "A fight there draws a game misconduct or worse in most books, breaking one up can in every book, and must under Hockey Canada, CARHA and, if first in, USA Hockey; either can cost your next game."
  - That is 65 words, accepted rather than drop USA Hockey 615(d)'s mandatory tier. "Or worse" covers CARHA 59(a)'s match.

## Review

| Reviewer | Finding | Outcome |
|---|---|---|
| safety-reviewer | corner-escape (picture wrong, caption right) | Repaired with its geometry spec |
| safety-reviewer | scan-before scope | Repaired as above |
| safety-reviewer | Captions: layer aim point; nz timing ×2 | Repaired |
| safety-reviewer | KT12 (major, permissive) | Repaired |
| safety-reviewer | KT5 (minor) | Repaired |
| diagram-reviewer | Three rule-1 failures in geometry the wave had not touched; corner alt text; nz-1-2-2 back limb; scan-before cut | All repaired |
| diagram-reviewer, re-read | All repairs | Hold. Three minors filed: corner alt "passing"; the pinch puck sits on A1's far side; optional nz-1-2-2 wording. |

`check_label_paint`'s corner-escape label crossing was there before this wave. The label is auto-placed at an identical (61.00, −8.30) with and without the bow.

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`, `check-arrivals` (0 hard).
- `check_caption_negations` and `check_diagram_quotes`: exit 0. Both are worklists.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished (`scratchpad/build_w547.log`).
- `check_callout_flow --bare`: 0. Panels: 0.
- `check_marker_pairs`: 2 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: books verified for every changed claim |
| D7 | Covered: each aim point is an instruction |
| D9 | Covered: hosts read around each marker; the diagram-reviewer rendered 13 hosts |
| D11 | Covered by the safety-reviewer |
| D12 | Covered: hosts rendered by the reviewer |
| D15 | Covered: PNGs viewed at desktop size; phone width not checked |
| D13 | Out of scope |
| Others | Not engaged |

## What this method could not have found

- **Pressure routes outside the census band.** The checker cannot see them; filed.
- **Facing.** It is inferred from the puck and the pass, never drawn.
- **How the new caption sentences sound aloud.**
- **Reviewer transcripts.** They are not on disk.
