# SG12: site leftovers — wide tables, nz-1-4 labels, stale diagram comments; helmet wording (22 October 2026)

## Changes

| File | Change |
|---|---|
| site/src/styles/global.css | **Six-column tables** (rules_primer §10, DZC; the `.table-scroll--tall` class the plugin sets at five or more columns) get a "tight" style in two width bands (40–71.99rem, 78–87.99rem) where the content column is narrowest: 5rem cell floor, 0.5rem side padding, `hyphens: auto` with `hyphenate-limit-chars: 8 4 4`, header wrap, `--table-head-h: 5.25rem`. **Dark-mode scroll shadow** now uses the `--table-shadow` variable (light keeps 22% black; dark uses the existing `--border-strong`). This also fixes the dark-mode fade inside callouts, which had hard-coded `--bg-raised`. |
| site/scripts/lib/rink.mjs, site/src/diagrams/neutral_zone_systems.mjs | New optional `labelHint` in `playSvg`, fed to the placer's existing `hint`, which still passes the collision, on-ice and ownership tests. nz-1-4's four labels are placed so the painted red and blue lines and the circle arc fall in word gaps, not through letters. No player, route or text changed. 203 diagrams reused and 1 re-rendered; diagrams.json is unchanged. |
| site/src/diagrams/{breakouts,playing_without_the_puck,risk_management,puck_handling,wall_contact_clauses,skating,body_contact_and_battles,winger,zone_entries}.mjs, rink.mjs :657 | **Comments only.** Each quoted the old boards line ("…the checker") as the caption "word for word"; they now quote the current captions. rink.mjs "Speech gets <title>" is corrected: md_to_speech reads the caption from diagrams.json. |
| content/off-the-ice/team_play_and_culture.md :283 | The SG11 helmet sentence is reworded so the PWHL major is not heard as a third item in a list: "usually a minor, though the PWHL makes grabbing a helmet, cage or chin strap a major and game misconduct…". The claims are the same. |

## Reviews

- **Table agent measured** in headless Chrome over CDP:
  - Before: rules_primer §10 was 117→37 px over at 960–1040 and 109→37 px at 1248–1320; DZC was 95→15 px over. Two more overflows were found below 60rem.
  - After: 0 px across 640–1920, and phones are unchanged.
- **site-reviewer** (real Chrome, headless via CDP; the extension was unavailable): **PASS.**
  - **Tables:** no overflow at 648 and above in light and dark; sticky header and first column work; other tables unchanged; dark shadow visible; the in-callout fade is correct (tested with an injected table, as the corpus has none).
  - **nz-1-4:** a geometric stroke-vs-glyph test hits only space characters.
  - **team_play:** renders correctly.
  - **Console:** clean.
  - **Minor finding:** short-word hyphenation ("ma-jor", "of-ten", "In-terp."). Fixed with `hyphenate-limit-chars: 8 4 4`, which the reviewer tested on the live page: breaks fell by about two-thirds and there was 0 overflow from 648 to 1320.
- **safety-reviewer** on the helmet rewording: CLEAR (same meaning, nothing cheaper than PWHL 51.3/51.5 or NHL/IIHF 9.6/51.2).

## Gates

- `build-diagrams.mjs`: 204 diagrams.
- check_absolutes: 408 units, pass.
- check_geometry, check_zones, check-arrivals: 0 hard.
- check_facts, check_links, check_secrets: pass.
- `npm run build` exited 0 after the final edit (the hyphenate-limit line).

## Dimensions

| Dim | Status |
|---|---|
| D1–D8, D13 | Out of scope for the site work. The team_play rewording is unchanged in claim; safety-reviewer CLEAR. |
| D9–D12 | No facts, summary or spoken-text change beyond the rewording. |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS. The hyphenate-limit follow-up was tested by the reviewer before it was applied. |

## Still open

- Diagram leader lines start at each token's centre and are drawn over the token's own letter ("F", the "1" of "F1"). This is placer behaviour across all diagrams (`placeLabels` in rink.mjs); changing it touches every diagram.
- Other full-sheet diagrams probably have labels crossing painted lines; no checker measures text-versus-paint overlap.

## What this method could not have found

- Safari and Firefox hyphenation (`hyphenate-limit-chars` support differs), real phones, screen readers and the theme toggle's first paint.
- Word-gap label placement depends on the system font; a fallback font shifts the gaps (about 0.15 ft margin).
