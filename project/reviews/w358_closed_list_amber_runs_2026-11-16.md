# W358: amber runs that read as a closed list of books, corpus-wide; three special_teams runs shortened (16 November 2026)

**Files:**
- content/foundation/rules_primer.md
- content/positions/center.md
- content/positions/switching_positions.md
- content/systems/defending_the_rush.md
- content/systems/special_teams.md
- content/systems/zone_entries.md
- content/technique/body_contact_and_battles.md
- content/technique/shooting.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
W357 (record `w357_amber_runs_shortened_2026-11-16.md`) nearly shipped a shortened inline amber run that, read alone, was a closed list of the books where an act "ends your game" and left out Hockey Canada. Plan row W357(1) asked for a corpus-wide census of that shape. Plan row W357(3) asked for the ~61%-amber screen at the end of special_teams "A hit from behind".

## Census (read-only author)
Extracted every inline amber run that names some books as an act's price (about 250 runs) and read each subset run against its own paragraph and the rulebooks. Excluded special_teams, which another author held.

**Defects (6):**
- switching_positions :270 — Hockey Canada omitted from a hit-from-behind list (the exact W357 shape);
- shooting :917 — CARHA 52(b) omitted;
- center :726 — CARHA 49(a)/30(a) omitted;
- defending_the_rush :935 — Hockey Canada 8.3(b), mandatory on injury, omitted;
- rules_primer :380 — USA Hockey majors omitted;
- body_contact :1885 — the PWHL facemask major lacked its mandatory game misconduct (51.5).

**Minor (2):** zone_entries :255, :864 — the Hockey Canada sentence sat in a second amber run with its subject outside the bold.

**Borderline (4):**
- rules_primer :1140 — USA Hockey 620(b);
- body_contact :1746 — CARHA;
- center :434 and zone_entries :1269 — the goalie charge.

## What changed
Two fix authors worked disjoint files, B1 (switching_positions, zone_entries, center) and B2 (shooting, defending_the_rush, rules_primer, body_contact). A third author, A, took special_teams.

**Bold-only moves (no word changed):**
- special_teams :1126 (266→253), :1128 (133→77) and :1132 (166→143). :1126 cannot shrink further without dropping USA Hockey 608(c).
- switching_positions :270.
- zone_entries :255, :864, plus :1202, a third copy B1 found (glyph and opening `**` moved so "Under Hockey Canada it ends your game…" is inside the amber).
- rules_primer :1140.

**New words:**
- shooting :917 — CARHA 52(b) added.
- defending_the_rush :935 (amber) and :339 (plain, the same claim) — "every other book's interference rule can reach a major and game misconduct — mandatory under Hockey Canada and CARHA if it injures".
- center :726 — "and CARHA".
- rules_primer :380 — "and under USA Hockey every major its Summary of Penalties lists does too".
- body_contact :1885 — PWHL "a major and game misconduct".
- body_contact :1746 — "as it can under CARHA" (48(f), 63(a), 30(a)).
- center :434 and zone_entries :1269 — the goalie-charge amber now names CARHA (crease or injury) and USA Hockey 607(b) (reckless).

**After the safety review:**
- zone_entries :255, :864, :1202 and switching_positions :270 now carry the head counterweight inside the amber: "…while it stays off the head, and on the head plan on it anyway". This mirrors special_teams :1124.
- switching_positions dropped its now-redundant trailing "— plan on the game misconduct there too".
- The plain "lowest rungs… plan on at least checking from behind's minor plus game misconduct anyway" clause stays at the zone_entries sites. It is the only place that names the expected price and says why.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All 8 new-words claims OK against nhl/pwhl/iihf/hc/carha_2026/usah, including the full USA Hockey Summary of Penalties (no bare-major heading). "Every other book" on interference is true for the NHL (56.4/56.5), PWHL (57.4/57.5), IIHF (56.5), HC (8.3(b)) and CARHA (66(a)/(e), 30(a)). "Mandatory if it injures" is correct only for HC and CARHA: the NHL/PWHL major stays discretionary. All 8 bold-only units are word-identical to HEAD. Optional: center :434 could add CARHA's injury limb (done after the safety review). |
| safety-reviewer | No critical or major. Every changed amber run read alone is true, and the new plain wording makes nothing cheaper. Minors applied with the reviewer's text: (1) the goalie-charge amber was a half-open list naming CARHA but omitting USA Hockey 607(b); (2) "Under Hockey Canada it ends your game while it stays off the head" in amber, with its counterweight in plain text, could be heard as permission; (3) a bolded comma at special_teams :1128. Marker, glyph-position and strong-run checks clean on all 8 files. |


## After the first commit gate (BLOCK on C10)
The gate blocked only on C10: this wave changes amber extents and the special_teams edits are purely visual, but no browser pass had been made. Everything else passed, and the gate re-derived the rule claims from sources/ itself. The site-reviewer pass recorded under D15 clears it.

Found in that pass, pre-existing and outside W358 (plan rows):
- **Major (amber density):** rules_primer "Delayed offside and tagging up" has a 400px window that is 96.3% amber, from two body runs of 753 and 819 chars.
- **Minor:** long figure-caption warnings on zone_entries (636 chars) and center (778 chars) each produce windows above 67% amber.


## After the second commit gate (BLOCK)
Two blockers, neither a content edit:
- the plan's W357(3) row still said "not re-measured", which contradicted W358(4b). It is now tagged as superseded by W358(4b);
- C10 was met only for five of the eight pages. The three unviewed pages were then viewed (D15).

Pre-existing worst windows found on those pages, outside W358 (plan row):
- switching_positions: 60.6% at 400px and 94.1% at 1440px, from a 403-char figure-caption warning;
- shooting: 60.8% at 400px, from "In and around the crease" runs of 200 and 438 chars;
- body_contact_and_battles: 65.6% at 400px, from Common Mistakes runs of 352 and 258 chars, and 87.3% at 1440px, from a 334-char caption warning.

The caption figures are inflated because diagram text is excluded from the denominator.

### C11
The coordinator wrote no content. Post-review edits:
- the safety reviewer's exact texts (goalie charge, head counterweight, comma);
- the switching_positions deletion the reviewer prescribed.

The optional center facts :486 change was not made: the line is at 199/200 (plan row).

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final edit. After it, all of the following ran:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets, check_counts --update (no change);
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST and 0 SPLIT HALF on all 8 files;
- check_readability: 0 paragraphs over 1,200 corpus-wide.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every new-words claim |
| D4 Citations | rule text quoted from sources/ |
| D9 Summary layer | amber runs in body and Common Mistakes; KTs not changed |
| D11 Reader safety | safety-reviewer read each amber run alone |
| D12 Read-aloud | SSML unchanged apart from the intended new words; marked units unchanged |
| D14 Links | check_links, build check-links |
| D15 Rendered site | build, --bare (0), and a site-reviewer pass after the first commit gate blocked on C10. The pass used Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark, on special_teams, zone_entries, center, rules_primer and defending_the_rush. Every changed run forms span.warn-inline, with 0 bare glyphs, 0 panels and no horizontal scroll. There were 0 console errors and 0 off-origin requests across 20 loads. On special_teams, the worst 400px window ("A hit from behind" → "Over the glass") fell from 61.3% to 52.6% amber, and screens s6/s7 from 36.5/37.0 to 35.5/26.4 (the method reproduces W357's s1–s5 exactly). zone_entries: the W358 paragraphs' screens are 22.8–41.9% amber. Where two runs sit back to back (:255, :864, :1202), a second amber left bar appears mid-line, a cosmetic seam. center :434 screen 24.9%; rules_primer :380 15.9%; defending_the_rush :935 29.3%. After the second gate blocked on the three unviewed pages, the same reviewer viewed switching_positions, shooting and body_contact_and_battles with the same method, in all four cells. Every run forms span.warn-inline; 0 bare glyphs, 0 untreated glyph-in-strong, 0 panels, 0 console errors, no horizontal scroll. Each W358 site at 400px (screen / worst window containing it): switching_positions :270 27.7% / 31.0%; shooting :917 22.2% / 43.9% (the screen below adds three CARHA/match runs); body_contact :1746 22.9% / 27.2%; :1885 19.6% / 22.0%. The instruction leads at all but shooting, whose costs-section paragraph opens on the label "Charging, in every book." (unchanged by W358). |
| D5 Provenance, D6 Corpus self-narration, D7 Numeric ownership, D10 Key-facts layer, D13 Folklore | not engaged (no citation, number, facts line or folklore changed) |
| D8 Counts | the new count claim "every other book's interference rule" verified by the rules-verifier (NHL, PWHL, IIHF, HC, CARHA); older counts ("every book", "five of six", "most books") not re-checked |

## What this method could not have found
- **Older, narrower book lists in other layers.** Facts lines, Key Takeaways and Common Mistakes in these files, and sibling documents, may still carry the older lists. Examples: center facts :486 omits USA Hockey 607(b); forechecking_systems :1007 "A CARHA charging major always ends your game" was not tested.
- **Lists outside the bold.** Book lists in plain text immediately before an amber price.
- **Unchecked counts.** Counts ("every book", "five of six", "most books") were not re-checked.
- **The amber share.** Measured on all eight pages (D15). It is a geometric proxy (glyph-box area, diagram text excluded), not an eye test, and no real phone, Safari or Firefox was used.
