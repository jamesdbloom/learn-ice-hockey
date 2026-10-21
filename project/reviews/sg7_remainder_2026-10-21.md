# SG7 remainder: boards line in captions and Zone Entries; "-man" coinages (21 October 2026)

**Origin.** These are the parts of SG7 left open after 9d67a15:
- **Diagram text.** The diagram caption and describe strings still said "never turn your back to the checker". The owner's 21 Oct ruling is "…anyone coming at you".
- **Zone Entries.** zone_entries said "never turn your back to an oncoming checker", and offensive_zone_play :763 had the same phrase.
- **"A man's back".** defending_the_rush facts :330 opened "Hitting a man's back".
- **Coinages.** Phrases such as "five-man rotation", "three-man wall" and "four-man kill" needed changing. The owner's 21 Oct terms ruling keeps established terms (man-on-man, odd-man rush, your man, point man, man on, first man back, man advantage, extra man, two-man advantage) and changes coinages to "-player".

Three agents owned disjoint files. sg7d1 owned site/src/diagrams/*.mjs; sg7r1 owned zone_entries, offensive_zone_play, special_teams and defending_the_rush; sg7r2 owned eight other pages.

## Changes

| Area | What changed |
|---|---|
| site/src/diagrams (14 modules): breakouts, body_contact_and_battles, forechecking_systems, on_ice_communication, playing_without_the_puck, puck_support_and_spacing, risk_management, rules_primer, scanning_and_anticipation, winger, zone_entries, positions, puck_handling, offensive_zone_play | 26 caption strings now read "never turn your back to anyone coming at you". After the rebuild, 24 captions in diagrams.json differ from HEAD. Where "the checker" names a drawn opponent or the player delivering a hit, it is kept. No label or shared constant changed. |
| zone_entries.md | The boards line is updated at :427, :461, :475, :564, :573, :604, :925, :964 and KT7 :1235. At :475, "the checker" became "the hitter" (the player delivering the hit). "four-man kill / five-man defence" and "three-man wall/layer" now use "-player". |
| offensive_zone_play.md | :763 boards line. |
| special_teams.md | "five-man shape" :842, "three-man line" :621 and "three-man kill" :438 now use "-player". |
| defending_the_rush.md | Facts :330 now says "Hitting a player's back". "five-man rotation/change" is now "five-player" at five sites. |
| language_and_glossary, rink_map, risk_management, scanning_and_anticipation, center, defender, winger, defensive_zone_coverage | 25 coinage swaps (five-, three-, two- and one-man to "-player"). Facts lines stayed within their caps and no limb was cut. |

## Reviews

- **sg7rS (safety-reviewer, fresh): CLEAR.** It read every content hunk and every module hunk, diffed diagrams.json field by field (24 captions; no describe or title changed), and checked 24 built SVGs. It rendered zone_entries, defending_the_rush and offensive_zone_play.
  - No limb was lost.
  - No antecedent dangles. "Only the checker and the goalie are drawn" refers to the drawn opponent introduced earlier in the same caption.
  - No quotation or rule text changed.
  - Captions still match their host pages.
  - "The hitter" at :475 keeps its meaning and the three-book tariff (chunk 035).
- **sg7rSite (site-reviewer, C10): PASS.**
  - **Build:** npm run build exited 0; dist is at 19:03, after the last edit at 19:01:59; check-links is clean.
  - **Pages checked:** 7 hosts at a desktop width and a real 400px iframe viewport, in light and dark. Every changed caption matches diagrams.json in all 37 placements. Every ⚠ in a changed caption sits inside `warn-inline`, with "anyone coming at you" inside the amber run. No overflow, no horizontal scroll, and the console is clean.
  - **body_contact_and_battles:** the renamed §6 heading appears in the TOC and its anchor works. This closes the site-reviewer row deferred by the SG7/SG8 commit.

## Gates (after the final content edit, no pipe)

- check_facts, check_links, check_absolutes (408 caption/describe units, after build-diagrams) and check_geometry pass.
- check_marker_pairs: 12 files, 0 LOST, 0 SPLIT.
- build-diagrams and npm run build both exit 0.

## Dimensions (D1–D15)

| Dim | Status |
|---|---|
| D1–D4 Rules / citations | Out of scope: no rule, tariff, citation or quotation changed. sg7rS confirmed no hunk sits inside quotation marks. |
| D5–D6, D8, D13 | Out of scope. |
| D7 The cardinal rule | ✓ Wording only. |
| D9 The summary layer | ✓ The claim was changed in every layer of zone_entries, including KT7 and the :604 list item that the brief did not list. |
| D10 The key-facts layer | ✓ Every changed facts line is within its cap with no limb cut. |
| D11 Reader safety | ✓ sg7rS returned CLEAR. |
| D12 Read-aloud integrity | ✓ Three hosts were rendered. The boards line and tariff stay in one chunk. |
| D14 Terminology | ✓ The owner's terms ruling is applied, and kept terms are untouched. |
| D15 The rendered site | ✓ sg7rSite returned PASS. |

## Still open (rows in OPEN_ITEMS.md)

- on_ice_communication :108, the last "the checker" boards line, which defines the term inline.
- "-man" coinages in neutral_zone_systems, forechecking_systems and on_ice_communication :229.
- Stale developer comments in about 10 diagram modules that quote the old line as "word for word".

## What this method could not have found

- A boards-line wording that uses none of the words searched for: checker, back to, numbers or -man.
- A caption sentence that leaned on "the checker" earlier than the change point. sg7rS read only from the change point onward.
- Real-phone rendering, and the 12 hosts whose captions were checked as text only.
