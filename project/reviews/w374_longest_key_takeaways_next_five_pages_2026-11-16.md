# W374: the next five pages' longest Key Takeaways, under the W373 mandatory-tier rule, and Hockey Canada's head match in rules_primer (16 November 2026)

**Files:**
- content/positions/winger.md
- content/systems/zone_entries.md
- content/systems/defensive_zone_coverage.md
- content/systems/defending_the_rush.md
- content/systems/offensive_zone_play.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
This wave takes up W373 row (6), the next readability targets ranked by longest Key Takeaway (KT):
- winger: 119 words
- defensive_zone_coverage: 118
- offensive_zone_play: 117
- defending_the_rush: 114
- zone_entries: 107

It also takes W373 row (1): rules_primer KT5's "a head hit can end your game" understated Hockey Canada 7.6(c)/7.7(c).

Every brief carried a new HARD RULE, written from W373's gate block. Before an author cut a KT, they had to list every mandatory tier it carries, book by book. A mandatory tier may leave a KT only if the KT keeps a statement at least as harsh for that book, or a sibling KT carries it. "Can" never substitutes for "must".

## What changed
| KT | HEAD → final words | What changed |
|---|---|---|
| defensive_zone_coverage KT4 | 118 → 110 | Citations and repeated clauses cut. USAH "does whenever" became "must if" (608(b)). All mandatory tiers kept. |
| defending_the_rush KT9 | 114 → 99 | Citations cut. The Hockey Canada head match (7.6(c)/7.7(c)) moved into the match sentence. All mandatory tiers kept. |
| winger KT11 | 119 → 92 | Pointers and HC 6.2(d) cut. "A second can cost a minor; in most books it will": NHL/IIHF 76.7, PWHL 78.7 and USAH 613(d) all say "shall". |
| winger KT15 | 68 → 63 | Wording only. |
| zone_entries KT10 | 76 → 70 | The charge ladder takes the wording of sibling KT11. |
| rules_primer KT5, Overview :31, Common Mistakes :1154 | KT5 56 → 68 (58 → 70 counting the list number) | Each gains "under Hockey Canada it is a match if they cannot protect themselves" (7.6(c)/7.7(c)). The author found the same understatement in two more layers. A corpus grep finds no other page carrying the sentence. |
| offensive_zone_play KT8 | 117 → **129** | See Reviews. |
| winger KT10 | 104 → **144** | See Reviews. |
| zone_entries KT4 | 107 → 103 | See Reviews. |

**Two KTs ended longer than HEAD.** In both, the first trim exposed understated tiers, and the reviewers' fixes restored them:
- offensive_zone_play KT8 had no match tier for USA Hockey and no forceful-at-the-boards tier, although its scene is a winger facing the glass.
- winger KT10 said Hockey Canada's and CARHA's mandatory match only "can be".

**Accuracy outranks length here.** A KT is voiced alone.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | 9 of 11 units OK. **WRONG (2):** <br>• offensive_zone_play KT8's new USAH "must" list left out forceful-at-the-boards (Casebook 608 Sit. 1(1)), which is this KT's own scene. <br>• zone_entries KT4's trim dropped "from behind", so the HC/CARHA mandatory match read as covering any drive into the boards; HC 7.2(a) boarding is a minor. <br>A corpus grep of every "under USA Hockey it must if" list found offensive_zone_play as the only one missing "forceful". |
| safety-reviewer (dzc, dtr) | CLEAR. Neither KT reads cheaper or ends on a permission. In dtr, the head match follows in the same chunk. Minor (wording): "plan on a match: mandatory into the boards or net…" sounds clipped. |
| safety-reviewer (winger, ze, ozp, rp) | **Major:** offensive_zone_play KT8. The trim dropped USAH 608(c) ("In all but the IIHF it can be a match" was its only carrier) and left out forceful-at-the-boards. <br>**Minors (pre-existing gaps the author flagged, upheld):** <br>• zone_entries KT4 had no USAH 608(b). <br>• winger KT10 said HC/CARHA's mandatory match "can be". <br>The fixes use the reviewer's exact text. rules_primer is cleared. Pre-existing: rules_primer's "can end your game" also covers HC 7.6(b)/7.7(b) mandatory tiers (plan row). |
| rules-verifier, final read | All three post-review units are OK against Casebook 608 Sit. 1, 608(b)/(c), 620(b), HC 7.5(c) and CARHA 53(b). Optional: name the HC head match in winger KT10; add "reckless" to zone_entries KT4's USAH list (plan rows). |

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's exact text. The rules-verifier's "from behind" fix and the safety reviewer's fix were applied to different sentences of zone_entries KT4; nothing was merged. The safety reviewer's fuller text for offensive_zone_play KT8 includes the rules-verifier's fix.

## Checks after the last content edit
- A full `npm run build` (absolute binary) exited 0 and ran through check-links. `dist/index.html` 19:06:52; `find content site/src/diagrams site/src/data -newer` returns nothing.
- check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
- check_counts --update: no change.
- check_callout_flow --bare: 0.
- check_marker_pairs: 0 LOST and 0 SPLIT on all six pages. Every KT kept its marker and its "Important.".

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier on every changed unit, plus a final read |
| D4 Citations | USAH 607, 608(a)–(c), 613(d)/(e), 620(b); Casebook 608 Sit. 1; HC 6.2, 7.2, 7.5–7.7, 8.5(b); CARHA 52(b), 53; NHL/IIHF 76.7; PWHL 78.7; NHL/PWHL/IIHF 43 |
| D8 Counts | "most books", "every book", "five of six", "three books", "in most books it will" — each re-derived |
| D9 Summary layer | Every changed KT read voiced alone by a safety reviewer. The rules_primer Overview and Common Mistakes were also checked. |
| D11 Reader safety | two safety reviewers |
| D12 Read-aloud | changed stems rendered; each KT is one "Important." unit with every tier inside it |
| D14 Links | check_links and the build's check-links |
| D15 Rendered site | site-reviewer on the 19:06:52 build, six pages, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark, 24 loads |
| D5–D7, D10, D13 | not engaged |

**D15 results.**
- Every KT ⚠️ forms warn-inline with the glyph leading.
- No KT window is over 50% at any width.
- 0 bare glyphs, 0 untreated strong glyphs, 0 panels, 0 console errors, no horizontal scroll.
- **Two pages have 400px windows over 50% on lines this wave did not touch** (`git diff HEAD` has 0 hits for each):
  - winger: 67.4%, Common Mistakes :903–:904
  - zone_entries: 63.3% at "The territorial asymmetry" :282, and 57.0% at "A hit from behind" :1168–:1170
  - captions: winger "Rim or reverse…" 52.9%; zone_entries "One safety point outranks the play…" 67.1% and "Arrive head up, chin off your chest…" 59.1%

  Neither page was in the earlier over-half sweeps (W358–W369), so these are first measures. They are plan rows.

## Found, not fixed (plan rows)
- **winger and zone_entries over half a phone screen at 400px** (figures above). These are pre-existing, and the next readability target.
- **rules_primer "a head hit can end your game"** (KT5, Overview, Common Mistakes) still covers HC 7.6(b) (a mandatory major plus game misconduct if it injures, in minor and female hockey) and 7.7(b) (Junior and Senior). The wording needs a rules-verifier because of the Junior/Senior split.
- **winger KT10** could name the HC 7.6(c)/7.7(c) head match (optional).
- **zone_entries KT4** could add "reckless" to its USAH "must" list (optional; the next clause covers it).
- **dzc KT4 and dtr KT9:** "plan on a match: mandatory into the boards or net…" sounds clipped (wording).
- **winger KT10 at 144 and offensive_zone_play KT8 at 129** are now the corpus's longest KTs. Any shortening must keep every mandatory tier.
- **zone_entries KT10's opening renders as "Tenth, Angle…"** with a capital letter, apparently a renderer quirk.

## What this method could not have found
- Rules pricing these acts under headings the reviewers did not search.
- Whether the over-half windows on winger and zone_entries were already there before W374. There is no HEAD build to compare.
- Real devices.
