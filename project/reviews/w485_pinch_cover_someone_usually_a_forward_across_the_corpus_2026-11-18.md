# W485: across eight more pages and one caption, a pinch is covered by someone — usually a forward — not by a forward alone, and not by the forwards simply being there (18 November 2026)

**Files changed**
- **Content:**
  - foundation/language_and_glossary.md
  - systems/offensive_zone_play.md
  - systems/forechecking_systems.md
  - systems/game_management.md
  - positions/center.md
  - hockey-iq/risk_management.md
  - positions/switching_positions.md
  - off-the-ice/how_to_watch_hockey.md
- **Diagrams:** site/src/diagrams/risk_management.mjs and site/src/data/diagrams.json (rebuilt).
- **Also:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W484.
- **Method:** a read-only content-reviewer census, then one repair agent per file group (six agents, disjoint files).
- **Shared brief:** the "lightest fix" form, naming the alternative once per section and not adding "ask your coach" everywhere (owner: readable beats defendable).

## The settled form (W484)
A pinch, activation or trip below the circles is justified when **someone covers the point you leave, usually a high forward**. Who covers is a coaching choice: the centre, the highest forward, or the partner sliding across (defender :507, risk_management :591, game_management :244).

## Census defects and repairs
| File | Sites | Form | Now |
|---|---|---|---|
| language_and_glossary | :388 Pinch entry (owner of the term) | guarantee ("because your forwards are behind you") | "Safer than a step-up when someone covers the point you leave — usually a high forward, on some teams your partner sliding across." |
| | :505 CM, :540 KT8 (voiced alone) | guarantee | "…with someone — usually a high forward — covering your point in case you miss; stepping up… with nothing behind you if you miss." |
| | :57, :266 Activation (found by the author, not the census) | exclusive | "someone, usually a forward" |
| offensive_zone_play | :18, :26 KF; :38 facts; :49, :53 Overview; :947 In short; :973; :1233 CM | exclusive | "someone, usually a forward" (alternative already named at :315, :938, :990) |
| | :288 facts "Never:" (voiced alone), :297 | guarantee and exclusive | "whoever covers for you should already be on the way" |
| forechecking_systems | :26 KF | exclusive | "someone covers your point, F3 by default… Some teams slide your partner across or rotate all five, so ask." |
| | :40 facts, :572, :580 facts, :1176 KT6, :1150 check-yourself | exclusive | "usually F3", "by default F3", "with your point covered, F3 by default" |
| | :589 body | guarantee ("makes pinching safe") | "That exchange is what keeps the line covered when a pinch fails: you go down, F3 comes back. If F3 is in the corner and nobody else has the line, do not go. Who covers is a team choice — some slide your partner across instead — so ask." |
| | :662 facts, :686 | "highest forward" for a five-player rotation | "whichever player is highest" (matches OZP :938, rink_map :551) |
| game_management | :234 facts (voiced alone), :256 | exclusive (contradicted its own :244) | "someone replaces them high, usually a forward" |
| center | :472 | every listed alternative a forward | adds "or to your other defenceman sliding across" |
| risk_management | :572, :577 facts, :585 | centre position as the sole test | "with your centre below the goal line **and nobody else covering your point**" |
| | pinch-centre-high caption (four hosts) | "the arrangement" | "an arrangement that makes a pinch defensible" |
| switching_positions | :292 facts, :301 | exclusive | "once someone, usually a forward, has taken your spot at the line" |
| how_to_watch_hockey | :435 | exclusive | "whether someone, usually a forward, takes the blue line" |

**Left as is:**
- team_play_and_culture :62 is a trust-failure example tied to F3 at :205, not an instruction.
- pinch-centre-below-the-goal-line describes its drawn scene, in which nobody else covers.
- Sufficient examples (risk :576; FS :686 "a pinch with your centre high") are kept.

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer (census author) | **First confirmation: NOT CLEAR, three blockers.** F1: glossary :388 kept "because your forwards are still in the zone" as the reason, which reasserts the guarantee and is over-hedged. F2: :505/:540 asserted the forwards and hung the "if" on the wrong noun. F3: FS :589's "stops a failed pinch becoming a rush" was a *stronger* guarantee than before, and contradicted :26/:669 (a covered failed pinch is still a 2-on-1). It also flagged the :589 "set out below" link as unusable by a listener. All four were fixed with the reviewer's sketches. On F2 the author changed "if" to "in case", which the reviewer preferred. **Re-confirmation: CLEAR.** No old phrase survives in content/. Optional: FS KT6 now says "by default" twice. |

No rules or safety review was run. Every change is a tactical precondition that narrows, not widens, when a defenceman leaves the line. No rule, penalty or contact limb changed.

### C11
The coordinator wrote no content or caption text.

### D15
No ⚠️ changed. `--bare` = 0. `--panels --file` = 0 on all eight files. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 20:23:04, later than every source file.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_caption_pairs: 0 (pair order intact). check_marker_pairs: 8 files, 0 lost.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D6 | not engaged (no rule claim) |
| D7 Cardinal rule | **engaged.** One coaching choice was presented as the only option at about 30 sites; it is now the default with the alternative intact. |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | KF, Overview, facts, CM and KT in every file, checked layer by layer |
| D10 Key-facts | OZP :38/:288, FS :40/:580/:662, GM :234, risk :577, switching :292 |
| D11 Reader safety | not engaged |
| D12 Read-aloud | "set out below" pointer replaced; "in case" vs "if" |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | glossary Pinch entry (vocabulary owner) aligned; "whichever player is highest" |
| D15 Rendered site | mechanical only |

## Found, not fixed (plan row From W485)
- **FS KT6** is 64–66 words and says "by default" twice. Optional: revert to "usually by F3".
- **winger.md** never tells the winger he may be the one covering a pinch, though center :472 says some teams use the weak-side winger. Possible gap.
- **The census was lexical.** A cover claim with none of its search words would not have been found.

## What this method could not have found
- Real synthesised audio.
- Coaching sources outside the corpus for the menu of covers.
