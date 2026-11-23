# W626–W627: USA Hockey match reword, batch 3 (final), and the walk-out interference residual (23 November 2026)

This is the last batch of the owner's W521(2) decision of 22 Nov 2026. See `w624_…` and `w625_…`, and `project/working_guidance.md`.

## Files

- **A:** shooting, special_teams, game_management (29 lines).
- **B:** forechecking_systems, defensive_zone_coverage, switching_positions, neutral_zone_systems (28 lines).
- **C:** puck_handling, on_ice_communication, passing_and_receiving, time_and_space, rink_map, equipment, team_play_and_culture, conditioning_and_recovery, puck_support_and_spacing (27 lines). reading_ice_hockey_diagrams had no site.
- **W627:** defender and defensive_zone_coverage walk-out sites (6).

## Review: three safety-reviewers plus re-checks, all OK after repairs

**MAJOR (C), on_ice_communication :586 (facts) and :613.** Reckless interference on a screener had lost its 602(a) price.
- A reckless shove with the stick down, not from behind and not a body check, is plain 625 interference, which writes nothing above the minor.
- W627 verified this from the rulebook. 640(g)/(h) reach only 640(b)–(f), each of which needs a body check or post-whistle contact. Casebook 640 Sit. 1 says a roughing major "may only be assessed" in those cases.
- So 602(a)'s "plan on a match" stays for interference alone. It was restored at on_ice :586/:613, and added or kept at defender :262/:280/:921/:1027 and dzc :797/:800/:869.
- defender :262 also loses a false exclusivity: "a reckless walk-out is cross-checking or roughing".

**Minor repairs, all applied:**
- forechecking :1070/:1071/:1076: the late-hit facts lines now carry their own floor, and adult men's is scoped to 602(a).
- dzc :820: "deliberate swing" became "a swing meant to hurt".
- switching_positions :274: citation.
- shooting :512: "can be one" became "a match".
- shooting :533: letters moved onto the match.
- game_management :1194: "those three hits".
- puck_support :605: citation moved onto the match, book named, "except IIHF".
- time_and_space :665: "plan on" for a pick, which is 625.
- equipment :131: Casebook 622 Sit. 3 limb.

**Readability pass, owner's instruction of 23 Nov.** The reviewer read the new text aloud. Asides at dzc :797/:869 became their own sentences, defender :280 was split, and dzc :800 was reworded.

**Accepted.** Removed 602(a) "shall be assessed" quotation sentences (shooting :533/:912, special_teams :1200), because each act has its own rule and the mandatory intent tier stays. In capped facts lines, "likely multi-game ban" was cut where another unit on the page states it.

## Gates on the final tree

- check_counts --update: exit 0.
- Full npm run build (v22.23.4): exit 0, after every edit (`scratchpad/build_w626.log`).
- check_facts, check_absolutes, check_geometry, check_secrets, check_caption_pairs, check_tables: exit 0.
- --bare: 0.
- check_marker_pairs: 0 lost ×17.
- check_readability: 0 long paragraphs.
- check_links --quiet: run after this record was written.

## What this method could not have found

- A USA Hockey price stated as certain without the usual words.
- An interference site worded "block", "obstruct" or "shove a forechecker".
- Audio chunk distance. Not rendered.
