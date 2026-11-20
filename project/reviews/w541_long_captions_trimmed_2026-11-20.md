# W541: the diagram captions over 800 characters, trimmed (20 November 2026)

## Scope

This was diagram readability work. One agent owned the caption text in `site/src/diagrams/*.mjs` for the 20 captions over 800 characters. Captions are spoken into every host document, so each cut was tested per host:
- **Shared constants:** grep for any shared constant the caption uses. None was touched; `SHOULDER_TAIL`, `SHOULDER_NOT_THE_SURFACE`, `WALL_POSTURE_SHORT` and `CHECKING_BARRED_WHERE` are unchanged.
- **Host context:** read the prose around each host's marker.
- **Echo:** run `check_caption_echo`.

## Result

13 captions were trimmed. The final lengths, after the review fixes:

| Diagram | Before → after |
|---|---|
| rush-2-on-2 | 806 → 704 |
| rush-3-on-2-alternative | 864 → 772 |
| rush-backcheck-lanes | 859 → 792 |
| support-angles | 818 → 765 |
| cross-ice-in-your-own-end | 834 → 773 |
| loose-puck-who-goes | 805 → 772 |
| shooting-breakaway-approach | 803 → 592 |
| nz-regroup-d-to-d | 807 → 586 |
| nz-back-off-at-the-line | 808 → 680 |
| angle-into-the-corner | 872 → 835 |
| oz-behind-the-net | 808 → 766 |
| pk-wedge-plus-1 | 812 → 804 |
| winger-offensive-zone-patches | 952 → 918 |

### What was cut, and why each cut is safe

- **Notation narration and scaffolding.** In rush-2-on-2 "for two reasons"; in cross-ice the bar narration; in oz-behind the "alternatives, so neither is numbered".
- **shooting-breakaway-approach.** The "change of pace is coaching craft" claim was cut together with its hedge. The paragraph directly above the marker, in the same chunk, states the claim with a fuller disclosure.
- **nz-regroup.** The 2-on-1 reason was cut; the facts Never line and "The one hard rule" voice it either side of the caption.
- **winger-oz-patches.** "Find out who fills it" was cut; the paragraph directly above ends "so find out".
- **nz-back-off.** The coaching-choice sentence was cut; nz-stand-up-at-the-line's caption, directly before it in both hosts, ends with it.
- **rush-3-on-2-alternative.** The orientation was cut; rush-3-on-2-default, directly before it in both hosts, states it.
- **angle-into-the-corner.** Re-ordered as best, then chip/rim/reverse, then second, then worst, then provenance, then ⚠️. This is faithful to the order the body sets out its USA Hockey quotations. The amber run is now only the two absolutes.

**The coordinator changed `scripts/check_caption_pairs.py`** between waves. The two adjacencies the trims rely on are now enforced:
- DEPENDENCIES: rush-3-on-2-alternative needs rush-3-on-2-default.
- CARRIES: nz-stand-up-at-the-line must keep "coaching choice, so find out which your team wants"; rush-3-on-2-default must keep "right to left toward the defended net at the left".

The checker now reports 6 dependencies, 0 violations, and 10 carried phrases with 0 missing.

### Left over 800 characters, with reasons

- **faceoff-dzone-alignment.** Every limb is sole-carried in some host (the W503 re-test).
- **forecheck-212.** It has load-bearing region phrases, a CARRIES phrase, and two dependents rely on it.
- **the-trapezoid.** Every rule limb fails the per-host test.
- **forecheck-pinch.** The safety rulings apply, and it uses the shared `WALL_POSTURE_SHORT`.
- **forecheck-122.** It holds how_to_watch's only gloss of dog, fox and hawk.
- **the-call-and-who-can-see-it.** Its safety unit is not voiced near the marker in its hosts.
- **winger-dz-rim.** It is a CARRIES caption for winger-dz-reverse.

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| diagram-reviewer | none | none | 4 | All repaired |
| safety-reviewer | none | none | 2 | All repaired |

The diagram-reviewer viewed all 13 PNGs and rendered all 16 hosts. The safety-reviewer rendered 3 hosts.

**Verified:**
- each caption still describes its picture;
- every claimed host carrier was found, within the same chunk or the adjacent one;
- no coaching choice now reads as a law;
- every safety limb is intact in angle-into-the-corner, cross-ice, pk-wedge and oz-behind (oz-behind's ⚠️ checking-from-behind limb is the sole carrier in center and time_and_space).

**Repairs:**
1. **winger-offensive-zone-patches.** "Never duck" had moved into the conditional "if a defender walks you into the frame". It is now unconditional again: "never meet a goal post head first or duck. A defender can walk you sideways into the frame: take it with an arm, a leg, anything but your head first, in every league, checking or not."
2. **rush-2-on-2.** The causal safety link was restored: "No route is drawn for safety too: a crossing rush is exactly where a beginner reaches for a hit". The module comment, which had claimed the reason was kept, is corrected.
3. **oz-behind-the-net.** "Almost always" was restored to "almost by definition". The change had read as an unmeasured frequency claim beside the 6.73% figure, and the owner's wording is the original.
4. **nz-back-off-at-the-line.** "Lines through the faceoff dots that are not painted" could be read as saying the dots are unpainted. It is now "between two unpainted lines through the faceoff dots".
5. **loose-puck-who-goes.** ", on head-on contact" was restored (an optional fix), so the caption alone does not tie cervical injuries to the chin posture alone.

**C11.** No reviewer re-read the fixes. Each is a reviewer's own sketch, confined to its finding, and the gates were re-run after the final diagram rebuild.

## Rows

- **Closed:** "Long captions" from the Diagrams-and-site section. The 20 captions over 800 characters are now 7, each kept on purpose.
- **New, from W541:**
  - (1) The seven captions left over 800 characters.
  - (2) Two pre-existing picture questions.
- **Owner decision pending:** W521(2).

## Gates on the final tree (shared with W540)

- `build-diagrams`, run by the agent after its last edit; `diagrams.json` is newer than every `.mjs`.
- `check_counts --update`: exit 0.
- Exit 0:
  - `check_links --quiet`
  - `check_facts`
  - `check_absolutes`: 408 caption units
  - `check_geometry`: 77 assertions
  - `check_secrets`
  - `check_caption_pairs`
  - `check_tables`
  - `check-arrivals`
- `check_caption_negations` and `check_diagram_quotes`: exit 0. Both are worklists.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished (`scratchpad/build_w540_541.log`).
- `check_callout_flow --bare`: 0. Panels: 0. No `<p>*`.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Not engaged: no rule tariff changed |
| D4/D5 | Covered: the owner wording ("almost by definition") was restored |
| D6 | Not engaged |
| D7 | Covered: coaching choices and find-outs kept or carried by the adjacent caption |
| D8 | Covered: the region definitions ("between the faceoff dots", the band) are intact; `check_geometry` passes |
| D9 | Covered: per-host sole-carrier test |
| D10 | Not engaged |
| D11 | Covered by the safety-reviewer |
| D12 | Covered: all 16 hosts rendered |
| D13 | Out of scope |
| D14 | Covered: `check_links` |
| D15 | PNGs viewed by the diagram-reviewer; phone width and dark theme not checked; Chrome not connected |

## What this method could not have found

- **Undeclared adjacency.** Any adjacency a future edit breaks that no tool declares. The two new ones are now declared.
- **How the trimmed captions sound.** No ear test was done.
- **Layout at phone width.**
- **Reviewer transcripts.** They are not on disk.
