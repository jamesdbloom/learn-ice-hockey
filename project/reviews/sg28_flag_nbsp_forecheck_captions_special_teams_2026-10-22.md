# SG28: 🇬🇧 line binding, forecheck-122/131 captions, special_teams draw and icing exceptions (22 October 2026)

## Changes and why

- **site/src/plugins/remark-corpus.mjs.** The 🇬🇧 flag had no no-break space after it, so at some widths it ended one line and its sentence started the next (7 of 79 flags on eight pages in the SG27 site pass).
  - A final text pass now binds every 🇬🇧 to the next word with U+00A0, as bindGlyph already did for ⚠ ❗ 🚫.
  - Measured in dist: 187 flags, 187 followed by U+00A0, 0 by a plain space.
  - Before/after dist diff: the only differences are the nbsp and the build stamp.
  - `--panels` is byte-identical and `--bare` is 0. Audio is unaffected (md_to_speech reads markdown).
- **forecheck-122/131 captions** (forechecking_systems.mjs): cut from 2,328 to 1,188 and from 2,610 to 1,194 characters.
  - Kept: the picture, the onus, "never finish into the back", the NHL/IIHF Rule 43 floor, the game-not-division prompt, and the coaching-choice disclosure.
  - The IIHF women's limb now says a check "must be a play on the puck and may never use the boards to push or pin an opponent" (IIHF 101.1, iihf_rules_2026-27.txt:7598-7602).
  - Dropped: the USA Hockey 604 / Hockey Canada 7.3 list. Each host voices it nearby (how_to_watch chunk 007, just before; forechecking_systems chunk 024).
- **special_teams.md:**
  - **Draw out of play (:760 body, :1192 CM).** The body said the deliberate minor "still reaches" a draw aimed out, which no book says. CM said the books "never settle the point", but they explicitly waive any puck going straight out off a draw (NHL 85.1, PWHL 87.1, IIHF 85.1). Both now say the waiver exists and none says whether it covers one aimed out. "Never aim it" is kept.
  - **No change after an icing (:1013, :1020, :1032, :1040).** "Except for an injury" omitted the goalie-return and strength-changing-penalty exceptions (NHL/IIHF 81.4, PWHL 83.4). Now "bar an injury, a goalie's return or a penalty changing strength". "A goalie's return" replaces a first draft's "a pulled goalie", which could be heard as permission to pull the goalie.

## Reviews

- **rules-verifier on special_teams: holds.** The 85.1/87.1/85.1 waivers, the 63.2(ii) deliberate limb, the IIHF Situations 63.6 and 85.10 (neither addresses intent), HC 6.3(e) Note 1, and the absence of a USAH/CARHA waiver are all verified. The 81.4/83.4 exceptions and HC 6.7(d) levels are verified. One fix ("pulled goalie" → "goalie's return") was applied as the reviewer sketched.
- **safety-reviewer on captions:** one Major. The women's line "only to play or win the puck" dropped 101.1's boards ban while the diagram shows F2 at the wall. Fixed. Re-read CLEAR, including the floor sentence (NHL 43.3/43.5 mandatory, 43.4 match on top; IIHF 43.3 for a hit judged reckless).
  - Optional, recorded: 101.1's "step or glide into an opponent is at least a minor" is not in the caption. forechecking_systems voices it at chunk 040; how_to_watch does not.
- **site-reviewer (7 pages × 4 widths × 2 themes, headless Chromium): PASS.**
  - 0 flags on a different line from the next word in all 56 loads.
  - A negative control (nbsp swapped back to a space) reproduced the wrap at 320px.
  - No overflow; the table cell scrolls inside .table-scroll.
  - Captions' ⚠️ are in warn-inline. 0 bare glyphs, 0 panels, console clean.

## Gates (after the last edit)

- `npm run build` exit 0.
- check_callout_flow --bare: 0.
- check_facts, check_links and check_absolutes pass (408 caption units).
- check_marker_pairs on special_teams: 0 LOST.

## Dimensions

| Dim | Status |
|---|---|
| D1–D4 | ✓ rules-verifier |
| D5, D6, D8, D13 | Out of scope |
| D7, D9 | ✓ Caption limbs traced to hosts; the icing-exception wording propagated to all four sites |
| D10 | ✓ Facts 293/300, 292/300 |
| D11 | ✓ safety-reviewer CLEAR after repair |
| D12 | ✓ Rendered |
| D14 | ✓ |
| D15 | ✓ site-reviewer PASS |

## What this method could not have found

- How 🇬🇧 renders on Windows (often as the letters "GB").
- A ruling on a deliberately aimed draw outside the books on disk.
