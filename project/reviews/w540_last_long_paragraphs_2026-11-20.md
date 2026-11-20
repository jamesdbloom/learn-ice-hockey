# W540: the last seven long paragraphs, and "away from the head, face and neck" (20 November 2026)

## Scope

This was readability work. One agent ran it with the W539 brief (`scratchpad/w539_common.md`), applying three of W539's review lessons:
- check what a moved clause was attached to;
- put an added ⚠️ on the price or the instruction;
- do not mark tariff-only halves.

The agent split the single paragraph over 1,200 characters in each of seven files: shooting, puck_handling, zone_entries, special_teams, team_play_and_culture, playing_without_the_puck and uk_rules. It also changed OZP :707 "off the head".

**Result.** `long_par` in those seven files went from 7 to 0, and corpus-wide from 12 to 5. Those five are the paragraphs W539 left on purpose. Panels stayed at 0, and no markers were lost.

Four sentences moved to stay with what they limit:
- **puck_handling:** the 604(c) Note now sits beside the hold-your-hip instruction.
- **zone_entries:** the 404(b)/403(b) suspension sentence moved into the USA Hockey half.
- **uk_rules:** "Persisting…" moved into the list of untouched Rule 46 clauses, and "above all of it" became "above all of Rule 46".
- **shooting:** "It can end your game" now names its subject.

Four halves gained a marker, each on a price or an instruction: shooting, zone_entries, special_teams and playing_without_the_puck.

## Review

A safety-reviewer with a rules check read all 8 files and rendered two of them. It found no critical or major issues and 4 minors, all repaired. It re-read all four repairs and found them OK.

It checked each of the four moved clauses individually and upheld them all. Every added marker was earned. It verified the "at least a minor in every book, in the crease or out" claim against NHL, IIHF and PWHL 69.2/71.2, CARHA 66(b), USA Hockey 607(d) and Hockey Canada 8.5(a).

The four minors:
- **OZP :707, "below the head".** The phrase literally includes the neck, and USA Hockey's 620 Note covers the "head, face or neck". It now reads "away from the head, face and neck".
- **shooting :953/:955.** "Below the head" became "off the head and neck". IIHF 48 and Hockey Canada price contact to the head or neck.
- **shooting :955.** "Forceful at the boards" is *Casebook* 608 Situation 1, not 608(b). It now cites "(Casebook 608, Situation 1; 608(b))".
- **uk_rules :308.** The moved persisting sentence was 2025/26 wording and had no number. It now reads "(46.1 in 2025/26)". The page's "Two smaller moves" paragraph gives 2026/27's 46.5, and :60 still tells the reader to play to the stricter edition.

The review also changed a house wording. W536 made "below the head" the house form; this review showed it is imprecise about the neck. W540(1) now prefers "away from the head, face and neck", and asks for body_contact :668 and the W536 sites to be re-checked.

## Rows

- **Closed:** W539(1), except the five paragraphs left on purpose.
- **New, from W540:**
  - (1) About 19 more "off the head" sites.

## Gates

These ran on one build shared with W541; see that record.

- `check_marker_pairs` on 8 files: 0 lost. There is one split-half candidate, puck_handling :490. It is a false pairing through a shared 602(a) quotation, and its base paragraph was unmarked.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1/D2/D3 | Covered by the reviewer against the sources |
| D4/D5 | Covered: citations corrected |
| D6/D8 | Not engaged |
| D7 | Covered: halves lead with the instruction |
| D9/D10 | Body prose only; not changed |
| D11 | Covered by the safety-reviewer |
| D12 | Covered: the agent rendered all 8 files; the reviewer rendered 2 |
| D13 | Out of scope |
| D14 | Covered: `check_links`, `check_unit_openers` |
| D15 | Structural only |

## What this method could not have found

- **Summary layers built on the old adjacency of a moved sentence.**
- **Other "below the head" sites.**
- **Reviewer transcripts.** They are not on disk.
