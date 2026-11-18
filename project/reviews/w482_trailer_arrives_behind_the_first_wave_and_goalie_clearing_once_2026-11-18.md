# W482: the trailer is the player who arrives behind the first wave, the backchecking centre is named in its caption, and Goaltender states the clearing split once in its prose (18 November 2026)

**Files changed:**
- **Content:** positions/goaltender.md, systems/defending_the_rush.md and systems/neutral_zone_systems.md.
- **Diagrams:** site/src/diagrams/defending_the_rush.mjs and site/src/data/diagrams.json (rebuilt).
- **Also:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W469 (1) and From W464 (2), (3) and (4).
- **Authors:** three agents:
  - goaltender
  - the two diagram modules
  - the trailer hosts

## Premises refuted
- **W464 (2), dump-and-the-trapezoid "picture draws no trapezoid".** False. The renderer draws the trapezoid from rink.json as two red dashed lines on every rink sheet (SVG `M 89 -11 L 100 -14 M 89 11 L 100 14`, matching NHL 1.8's 22 and 28 ft). W448 dropped only the goalie's label, so "the marked area" points at something that is drawn. No edit.
- **W469 (1), "the caption is a fourth copy".** Stale. W470 had already cut the goalie-safe-outlets caption to "Clear along the glass, never over it." The repetition was in the prose.
- **W464 (4), "C reads as centre".** It *is* the centre. The describe, the paired default caption and ten modules all use C for centre. The label is kept, and the caption now names it.

## What changed (voiced)
| Site | Before | Now |
|---|---|---|
| goaltender :714 | "In trouble, put it along the glass, never over it: every book can make a clear out of the rink a minor, and the fourth option below sets out when." | "In trouble, put it along the glass, never over it." The full split stays in list item 4, the facts Options line and the next section's tariff. |
| rush-trailer caption | "the attacker who arrives second" | "the attacker who arrives behind the first wave" |
| rush-3-on-2-alternative caption | "The backchecker's route" | "The backchecking centre's route" |
| dtr :689 (body), :692 (facts Key:) | "The player who arrives second is the one who gets forgotten" | "The player who arrives behind the first wave…" |
| nzs :688 | "the player arriving second is the one nobody picked up" | "the player arriving behind the first wave…" |
| nzs :678 (facts Goal:) | "so the second man in is the one nobody picked up" | "so the late man is…" (matches the heading and :674 "third man high") |

The trailer edits in the hosts close a drift the caption fix opened. Next to "a first wave of two", "second" points a listener at A2, the wrong player.

## Reviews
| Reviewer | Result |
|---|---|
| diagram-reviewer | **rush-trailer:** BETTER. It found that the hosts still said "second" (fixed). **rush-3-on-2-alternative:** BETTER. **goaltender :714:** BETTER; the section reads more cleanly and the split is still carried three times nearby. **trapezoid:** refutation confirmed from the SVG coordinates and rink.json. **Confirmation of the host edits:** CLEAR. All four point at A3, the facts lines stand alone, and the NZS block uses "late man" throughout. |

No rules or safety review was run. No rule claim changed: the goaltender edit only removes a summary sentence, and every book limb is carried below it. The other edits are player-identification wording.

### C11
The coordinator wrote no content or caption text.

### D15
No ⚠️ or amber changed. Checked mechanically only: `--bare` = 0, `--panels --file` = 0 on all three content files. No browser pass.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exit 0, ending with check-links passing.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
- **Other checkers:** check_counts reports no change; check_caption_pairs reports 0.
- **Marker pairs:** check_marker_pairs reports 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 | not engaged (no rule claim changed) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | trailer wording in body and facts of both hosts; goaltender facts, item 4 and tariff agree |
| D10 Key-facts | dtr :692, nzs :678 |
| D11 Reader safety | not engaged |
| D12 Read-aloud | "second" vs "first wave of two" heard together |
| D13 Folklore | coaching usage of "trailer" / "late man" |
| D14 Structure, terminology, cross-links | "late man" matches the section heading |
| D15 Rendered site | mechanical only |
| Diagrams | diagram-reviewer |

## Found, not fixed
- **Faint trapezoid lines.** The dashed lines are thin and the same red as the goal line, so they are faint at page size (cosmetic).
- **Repeated instruction in Goaltender.** The "Putting the puck out of play" section repeats the instruction twice in chunk 045 ("In short" and Action:).

## What this method could not have found
- Whether coaches call the trailer "second wave" or "third man". The picture settles it here.
- Real synthesised audio.
