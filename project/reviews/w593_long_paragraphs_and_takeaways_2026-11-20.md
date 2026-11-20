# W593: long paragraphs and Key Takeaways, and a hit from behind that "ends your game in five of six books" (20 November 2026)

## Meter before

`check_readability`: 15 paragraphs over 1,200 characters and 8 Key Takeaways over 60 words. Several had been lengthened by the W585–W591 waves.

## Edits (four agents, 19 files; brief `scratchpad/w593_common.md`)

**Long paragraphs.** All 15 were split at natural breaks.
- Most are Common Mistakes bullets, split into the bullet plus an indented continuation paragraph. md_to_speech voices the continuation as its own paragraph.
- Wording changed only where a new paragraph would have opened on "it" or "that"; there the subject is now named. Examples: "The lock's price is yours to pay", "Head contact's lowest rungs…", "Every book here rides the cross-checking major and the game misconduct together".
- No tariff text changed.

**Long Key Takeaways.** Seven were cut to 60 words or fewer: center KT14, dzc KT5, dtr KT10, special_teams KT9, zone_entries KT10, breakouts KT7, team_play KT12. Each cut detail was confirmed to be carried in the body.

**Markers.** Where a split half states an ejection-level hazard, it gained a mid-sentence ⚠️ leading a strong run, so it keeps the spoken "Important." it had as part of the whole:
- winger, defender, shooting
- rules_primer, goaltender, game_management, risk_management
- glossary
- dtr Angling, which matches its sibling Hounding

`check_marker_pairs`: 0 lost and 0 unmarked split halves on all 19 files.

## Review and repairs

**safety-reviewer, first pass.** It ruled on two takeaways and found two Minors:
- **mental_game KT1: the emergency numbers must return.** A takeaway is voiced alone, and for a listener in crisis the number is the one actionable thing; the 60-word cap does not override a safety element. The numbers (999 / 112 / 911) and "drinking or using anything to cope" were restored, matching the page's Key focus. The takeaway stays over 60 words by ruling.
- **zone_entries KT10:** acceptable as a kernel. USA Hockey's mandatory 607(b)/620(b) tiers are still voiced in the same page's Common Mistakes.
- **Minor: glossary ~:420.** The split-off head-contact half named no book, so heard alone it stated USA Hockey's floor for every book. It now opens "Under USA Hockey".
- **Minor: rules_primer CM ~:1196.** The amber run stopped before its condition. It now covers "…if it injures the player in minor and female hockey or is highly violent in Junior and Senior". Asterisks only.

**Out of scope, but found by the reviewer and verified.** defending_the_rush said "A forceful hit into a player's back at the wall ends your game in five of six books." A rules-verifier read all six books:
- NHL and PWHL 43.2/43.5 have no minor, and a major brings a mandatory game misconduct.
- IIHF 43.2 has no minor.
- Hockey Canada 7.5(a) is a minor plus a game misconduct.
- CARHA 53(a) is a minor plus a game misconduct.
- USA Hockey Casebook 608 Situation 1 makes a major plus game misconduct or a match "must be called" for a forceful check on a player along the boards.

So all six end the game. "Five" told readers one book let the act off cheaper. All four copies (:404, :410 facts, :957, :1119 CM) now read "…at the wall, off the head, ends your game in every book" (facts: "in all six books"). The following head-contact sentences that carry the IIHF and Hockey Canada head exceptions are kept. Left alone, because they are correct:
- the open-ice "can end your game" (:653, :1105);
- KT9 "In most books a hit from behind ends your game … and in every book it can", which covers light hits, where USA Hockey 608(a) is a minor plus misconduct.

A corpus-wide grep found no other "five of six" for this act; the others concern kicking, slew-footing or the crease.

**site-reviewer.** Headless Chromium was used because the Chrome extension was not connected. It checked desktop and 400 px, light and dark.
- 18 of 19 pages have every ⚠ as warn-inline.
- The loose-list spacing matches the existing pattern.
- There is no overflow and there are no console errors.
- **One finding:** the dzc CM continuation opened on the glyph and rendered as an amber panel inside the list item. The glyph now sits mid-sentence, and `--panels` for dzc is 0.

**safety-reviewer, re-check of every repair: OK.**

## Rows

**Closed:** the readability meter for long paragraphs and Key Takeaways.

**Still open:** split halves at 1,128–1,199 characters can drift back over.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0. The build started at 23:52, after the last content edit at 23:51 (`scratchpad/build_w593b.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 19 files.
- `check_readability`: 0 long paragraphs; 1 long Key Takeaway, kept by ruling.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **USA Hockey edge case.** Whether a USA Hockey referee treats a carrier skating into the boards as "standing along the boards". Even if not, the Casebook's reckless and head-first limbs catch almost every forceful hit into the boards.
- **The EIHL Casebook** was not checked for checking from behind.
- **Audio.** Only some new halves were rendered.
