# W357: over-long amber runs shortened to their hazard clause (16 November 2026)

**Files:**
- content/systems/special_teams.md
- content/systems/offensive_zone_play.md
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
W356 (record `w356_blue_line_labels_and_amber_density_2026-11-16.md`) measured some inline amber runs at 400px as too long to work as emphasis: special_teams' screen s1 was 75% amber. The runs predate W355. W356 also found a 1,690-char amber method note in offensive_zone_play's Sources trailer.

## What changed
**No word changed in any file.** Each file with `*` (and the one removed glyph) stripped is identical to HEAD; the authors checked this and the safety reviewer confirmed it. Only closing `**` positions moved, plus one ⚠️ removed from an unvoiced trailer.

| Site | Bold extent, HEAD → now (chars) | What is now amber |
|---|---|---|
| special_teams :1105 ("Angle to the puck and let the back go.") | 804 → 204 | the books where a hit from behind ends your game: NHL, PWHL, CARHA, IIHF "plan on it", and Hockey Canada's first sentence |
| special_teams :1122 ("Never arrive at a goalie from behind —") | 823 → 223 | same shape, goalie |
| offensive_zone_play :1165 ("A hit from behind") | 499 → 258 | NHL, PWHL, CARHA, Hockey Canada with its head branch, IIHF (matches the sibling run at :822) |
| defending_the_rush CM :1107 (hounding) | 558 → 273 | "ends your game in five of six books (under Hockey Canada …), and under the IIHF plan on it" (matches siblings :947 and :1177) |
| offensive_zone_play :1322 (Sources trailer, "push off" method note) | amber removed (⚠️ dropped); text unchanged | — |

The rest of each ladder continues as plain prose in the same paragraph, so the spoken "Important." per paragraph is unchanged. check_marker_pairs shows the same marked-unit counts as HEAD in all three files.

**The trailer glyph.**
- **Unvoiced:** the trailer is not voiced (a render of offensive_zone_play finds none of its strings in the SSML), so the ⚠️ had no spoken function. Billed characters and the "Important." count are unchanged.
- **Kept as an honest disclosure:** the author judged the note provenance for a substantive negative claim, written in the trailer's existing dated style, and not a breach of non-negotiable 6. It stays, as non-negotiable 4 requires. It remains a 1,715-char plain-bold block (plan row).

## Review
**safety-reviewer (independent; read the bold moves for skim-reading safety)**
- No word changed. The wrappers still form (glyph directly before a strong run).
- **MAJOR, introduced by the first pass at special_teams :1105/:1122:**
  - The shortened amber read as a closed list of the books where the act "ends your game" (NHL, PWHL, CARHA; IIHF) and left out Hockey Canada.
  - Hockey Canada ejects automatically: 7.5(a), *"A Minor penalty and a Game Misconduct penalty will be assessed…"*, and 7.5(e).
  - So a Hockey Canada reader skimming the amber would conclude the act doesn't end their game.
  - Fixed as prescribed: the closing `**` moved one sentence later, to include "Under Hockey Canada it ends your game while it stays off the head, and on the head plan on being ejected anyway."
- **Upheld:**
  - USA Hockey outside the amber is accurate: 608(a)'s floor is a minor plus a misconduct, not an ejection.
  - offensive_zone_play :1165: CLEAR. The bold instruction leads, and the amber names Hockey Canada.
  - defending_the_rush :1107: CLEAR. "Five of six" is a count, not a closed list.
  - The trailer glyph's removal is unvoiced.


## After the first commit gate (BLOCK on C10)
The gate blocked because this wave exists only to change how three pages look, and nobody had viewed them. Everything else passed its mechanical checks: no word changed, the bold-extent table matched, Hockey Canada was inside the amber at both special_teams sites, marker counts were unchanged and the trailer was unvoiced. The site-reviewer pass recorded under D15 clears it.

**One minor from that pass (pre-existing, not W357).** The end of special_teams "A hit from behind", running into "Over the glass", is about 61% amber on one 400px screen (worst sliding window). Three untouched runs cause it:
- "Hockey Canada and CARHA must give a match for putting a goalie…" (266 chars, 197px);
- "plan on the dearer: 8.5(b)'s mandatory major…" (133 chars);
- the "Over the glass" opening run.

It is a plan row.

### C11
The coordinator wrote no content. The one edit after review is the reviewer's own prescription (a `**` move, no word change).

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final edit. After it, all of these passed:
- check_links --quiet, check_facts, check_absolutes and check_counts --update (no change);
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST, 0 SPLIT HALF on all three files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D11 Reader safety | safety-reviewer on skim-reading of every moved bold extent |
| D12 Read-aloud | marked-unit counts unchanged; the trailer is confirmed unvoiced |
| D15 Rendered site | build, --bare, and a site-reviewer pass (after the first commit gate blocked on C10): Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark. All four shortened runs form span.warn-inline, each paragraph still opens on its plain black-bold instruction, and the trailer note is plain bold (no warn-inline ancestor). Run heights at 400px fell 543→168px (special_teams ×2), 341→197px (ozp), 428→226px (dtr). Amber share per 756px section screen at 400px (amber line area / all text line area): special_teams s1–s7 = 20.4% (W356: 75%), 0, 3.4, 17.8, 21.0, 36.5, 37.0; ozp s1–s5 = 30.7% (W356: 56.5%), 0, 3.1, 23.3, 0; defending_the_rush (bullet screen) 27.5%. The worst sliding 756px window over the whole page is special_teams 61.3% (see below), ozp 32.3%, dtr 28.6%. W356 did not record its screen origin or formula, so only the per-run pixel heights are strictly comparable. No console errors, no off-origin requests, no horizontal scroll. |
| Others | not engaged (no words changed) |

## What this method could not have found
- **Older closed-list amber runs.** An earlier wave may have trimmed an amber run elsewhere into a closed list of books that leaves out one that ejects. Only a corpus-wide read of every warn-inline run against its own paragraph's price list would find that.
- **Amber share comparability.** The amber share was measured after the first gate (D15), but W356 recorded no screen origin or formula, so the before/after share comparison is approximate; the per-run pixel heights are the exact comparison. No real phone, Safari or Firefox was used.
- **Repeated Hockey Canada ladder.** special_teams now has the Hockey Canada head-contact ladder in plain prose at :1105 and :1122, word for word, and again at :1120. That is a restatement candidate (plan row).
