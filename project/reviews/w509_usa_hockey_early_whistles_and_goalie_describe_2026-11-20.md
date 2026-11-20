# W509: USA Hockey's early high-stick whistles, a statistic's qualification, and the goalie-safe-outlets describe (20 November 2026)

Three editing agents worked in files that did not overlap. They took W508's leftover rows.

| Agent | Files | Rows |
|---|---|---|
| 1 | shooting, offensive_zone_play | W508(2), (8), (12) |
| 2 | game_management | W508(9) |
| 3 | goaltender.mjs, shooting.mjs (plus the built diagrams.json and the goalie-safe-outlets SVG/PNG) | W508(10), (11) |

## Review

| Reviewer | Scope | Critical / major | Findings |
|---|---|---|---|
| rules-verifier | every content edit, against usah.txt 621, every USA Hockey Casebook 621 Situation (1–15), and hc.txt 7.6 | none | **Incomplete answer:** Situation 9 (the goalie covers a high-tipped puck: whistle, draw in the offending team's end) was in neither body. Also a hard-to-hear verb-final sentence in shooting :267, and a pre-existing citation error at OZP :596 (Situations 8, 10 and 12 all credited with "declining"). |
| diagram-reviewer | the goaltender.mjs / shooting.mjs / diagrams.json diff, against the PNG, the SVG coordinates and the host section | none | It approved the describe change and confirmed the 0.53 ft clearance by sampling the rim curve. Minors: the comment cited the wrong plan row; the describe opened "The attacking half of the rink" for the goalie's own end (pre-existing). |

**Repairs after review.** All findings were repaired. Each repair is confined to its finding: Situation 9 was added at shooting :267 and OZP :594, :267 now uses the reviewer's sketch, and :596 credits each Situation with what it rules. Agent 1 re-read Situation 9 in usah_casebook.txt before writing. The describe now opens "The defending half of the rink", which is the wording defender.mjs and center.mjs already use. No reviewer re-read the repairs after they landed. This is the C11 terminating case.

## What changed

- **shooting.md :267.** The old text said only that "an opponent who declines to play the puck stops play on their own". It now reads: the Casebook "applies the same possession test (Rule 621, Situations 6 and 15). Under USA Hockey the whistle can come sooner: when both teams touch the puck at once, when the goalie covers it, or when an opponent declines to play it (Situations 10, 9 and 12). Each time the faceoff is in your defensive zone."
  - The rules-verifier confirmed Situation 6 (the goalie gaining a teammate's high-sticked puck) as a second source for the possession test.
  - It also confirmed that 621(d) itself sends every such stoppage to the offending team's defending-zone end spots.
- **offensive_zone_play.md :594 and :596.** :594 now carries the same three early whistles. :596 credits Situation 12 alone with the decline, and Situations 8, 9 and 10 with the puck leaving the rink, the goalie covering it and a simultaneous touch. "It wins nothing" became "Declining wins nothing", so the pronoun keeps its antecedent.
- **offensive_zone_play.md :47.** The post-shot "about five times as often" now says it was counted from the raw play-by-play feed and is "derived, not a published statistic". That matches its owner at :930 and the :1334 trailer. The rules-verifier recomputed 1.37% / 0.26% = 5.27.
- **game_management.md :1192.** "reaches on violence" became "reaches on the violence" (255/300). Its sibling :1191 is at 298/300 and stays; see plan row W508(13).
- **goaltender.mjs, shooting.mjs.**
  - Seven comments that credited W508's geometry to "W507" are relabelled. Each was checked with `git log -S`; the one genuine W507 caption note is kept.
  - The rim-clearance comment changed from "about a foot" to 0.53 ft clear. Both the agent (ink box measured in headless Chrome) and the reviewer (Bézier sampling) derived that figure.
  - The goalie-safe-outlets describe changed from "the puck on their stick" (no stick is drawn) to "the puck just beside them". It also opens "The defending half of the rink". No caption or geometry changed.

## Rows closed

- W508(2)
- W508(8)
- W508(9)
- W508(10)
- W508(11)
- W508(12)

## New plan rows (added to From W508)

- **(13)** game_management :1191's "on violence", at 298/300.
- **(14)** The facts lines shooting :252 and OZP :579 still give USA Hockey only Situations 15 and 12.
- **(15)** Whether Situations 8 and 9 are whistles in every book.
- **(16)** Describes opening "The attacking half of the rink, the defended net…". There are nine in goaltender.mjs and eight in defensive_zone_coverage.mjs, with a line-wrapped copy in body_contact_and_battles.mjs. Each needs checking against its own drawing first.

## Gates on the final tree

- `check_counts --update`: no change.
- All exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_label_paint`, `check-arrivals`.
- Full `npm run build` with the v22.23.4 binary: exit 0.
- `check_callout_flow --bare`: 0.
- No `<p>*` in dist.
- `check_marker_pairs`: 0 lost and 0 split halves.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. The rules-verifier read usah.txt 621(a)–(d), all of USA Hockey Casebook 621 Situations 1–15, and HC 7.6. Agent 1 read Situations 6, 9, 10, 12 and 15. |
| D2 exceptions | Covered: Situations 9 and 10 (early whistles), 621(d)(2) (own goal counts), Situations 11 and 13 (spot changes, not applicable to the tipper). |
| D3 cross-book divergence | Covered for USA Hockey against NHL 80.1. Whether Situations 8 and 9 diverge at all is plan row W508(15). |
| D4/D5 citations | Covered: Situation citations corrected at OZP :596. No URL added. |
| D6 negative existence | Not engaged. |
| D7 cardinal rule | Not engaged. |
| D8 numeric ownership | Covered: OZP :47 now carries its owner's qualification, and the figure was recomputed. |
| D9 summary layers | Partly covered. Agent 1 grepped Key Takeaways and Common Mistakes for "declin", "possession test" and "Situation", with body, facts and trailer hits only. The facts lines are plan row W508(14). |
| D10 facts layer | One facts line changed (game_management :1192, article only). shooting :252 and OZP :579 were deliberately not touched. |
| D11 reader safety | Not engaged. The edits change territory and wording, not a penalty; game_management :1192's meaning was confirmed unchanged by the rules-verifier. |
| D12 read-aloud integrity | Partly covered. Sentences stay in their paragraphs and `check_marker_pairs` is clean, but nothing was re-rendered. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: the antecedent repair at :596; check_links. |
| D15 rendered site | Covered by the diagram-reviewer for the describe: it viewed the PNG and the SVG, and confirmed no geometry or caption change. The describe is not visible text. Not covered: a live screen reader, Chrome (not connected). |

## What this method could not have found

- **Rulings filed under other rule numbers.** A USA Hockey Casebook ruling that changes the high-stick answer but is filed outside Rule 621 (for example under the goalkeeper-freezing rules).
- **Listener chunking.** How the new sentences chunk for a listener; nothing was re-rendered.
- **Screen readers.** Whether "just beside them" suggests a loose puck to a screen-reader user.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
