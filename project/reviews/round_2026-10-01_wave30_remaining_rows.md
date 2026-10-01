# Wave 30 — the remaining permissive rows (1 October 2026)

## Scope

Ten file-disjoint lanes worked the plan's remaining permissive rows and the follow-ups logged in waves 26–29. They changed 13 documents:

- rules_primer
- rink_map
- risk_management
- puck_handling
- center
- goaltender
- switching_positions
- winger
- breakouts
- neutral_zone_systems
- offensive_zone_play
- special_teams
- body_contact_and_battles

Eight other owned documents were checked and needed no change: defender, shooting, faceoffs, forechecking_systems, game_management, conditioning_and_recovery, time_and_space and team_play_and_culture.

**Brief.** Authors were briefed with the wave-24 to wave-29 lessons and three new ones:

1. A list framed "X is the floor, not the top" makes each entry read as that book's top.
2. When a clause moves, trace every pronoun, "the same", "too" and "that".
3. Say "already fixed" with evidence rather than edit for its own sake.

## Method

1. One author per lane.
2. Independent reads in batches:
   - r1–r6, of which three stalled and were relaunched;
   - one `rules-verifier` on rules_primer;
   - a `source-verifier` on the one new citation URL.
3. Every block went back to its author and was re-read.
4. A `site-reviewer` checked all 13 pages on the final build.

## What was wrong, in kind

### The last corpus-wide sweeps
rules_primer was the last document for [above-shoulder stick ceiling]. Four sites priced high-sticking or a cross-check to the head at a closed minor or double minor:

- the beer-league list;
- the cross-checking body;
- the "rides up" Common Mistake;
- KT8.

These now carry:

- NHL 60.4/59.4 match;
- IIHF 60.4/59.3;
- USA Hockey 620 for a cross-check to the head. The route runs through Casebook 609 Sit. 1, *"A cross-check is generally considered a check delivered with the stick"*, and 621 Sit. 1, and was verified by a `rules-verifier`.

Both corpus-wide rows are now closed.

### CARHA
- **Slap shot.** The tier is now complete wherever "a slap shot and a penalty/minor" stood, in rink_map, breakouts and puck_handling. A major on injury is an ejection under 30(a) and a 32(d) suspension.
- **62(c) high-stick match.** Added in offensive_zone_play. The first repair scoped "CARHA only" onto the match itself, which a read blocked. The second named NHL 60.4 "can be", where the rule says "shall". The final text names NHL 60.4, PWHL 61.4, USA Hockey 602(a) (mandatory) and Hockey Canada 7.6(c)/7.7(c).
- **49(a) shielding and late hits.** Added in puck_handling and center.
- **53(b) / 49(b).** The stalled body_contact author had written the 49(b) double minor flat into a facts line, as the into-the-boards floor. That contradicts 53(b)'s mandatory match and its "not to substitute" Note, and it is an open owner call. It was reverted; the body hedges: "where 53(b)'s match does not reach the hit…".

### Empty net
risk_management named the NHL and IIHF only. Now all six books: PWHL 58.4 awards the goal for any foul. CARHA keeps 36(a)(3)'s from-behind test, but 36(a)(4) "may" reach a front foul.

### WNIHL scope
winger and switching_positions said "In British women's hockey, plan no hit". That is now "In the Women's NIHL…", with "in any other British women's competition, ask your league".

### British ages
offensive_zone_play said "Britain publishes no age". That is stale: the IHUK Rules of Competition set U10/U12 non-checking, U14–U19 checking, and NIHL Div 1/2 checking.

### Other book-by-book gaps
- **special_teams:**
  - the In-House Rule 101 women's limb;
  - the EIHL 46.10 second instigation;
  - pushing a goalie into the net: HC 8.5, CARHA 66(b) and USA Hockey 607(d) Note 1 require a penalty.
- **neutral_zone_systems:**
  - HC 7.4(e) and CARHA 30(a): every charging major ejects;
  - the EIHL Casebook leaves Rule 76 to IIHF 76.6, which ejects the centre.
- **switching_positions:** USA Hockey 603(c) and 608(c) matches.
- **center:** HC 7.3(c) and USA Hockey 604(e) matches.
- **body_contact:**
  - the hooking major carries a game misconduct in all six books;
  - the false slew-foot exclusivity is removed;
  - "a fifth book" is replaced by the book's name;
  - NHL 70.10 bench tiers.
- **goaltender:** the "You can be penalised too" bullet now leads with what the player does, and is trimmed.

## Coordinator errors this wave

Three more of my sketches were wrong, and each was caught before shipping or by a read:

- **KT11's "at least a double minor".** False for HC Junior/Senior and USA Hockey. The author caught it.
- **The ozp :528 sketch "as it can be under NHL 60.4".** The NHL rule says "shall". The author caught it.
- **The ozp :528 tail citing USA Hockey 621(c).** It missed 602(a)'s mandatory match. A read caught it.

The wave-29 lesson stands: state constraints and let the author write.

## Rendered site (D15)

A `site-reviewer` served the 13:49 clean build (last content edit 13:45) over headless Chrome via CDP. It checked all 13 pages at 400/1440 in light and dark, 52 loads, and all were CLEAR:

- added text present;
- 0 panels and 0 untreated glyphs;
- changed facts lines render as `dd.facts__value`;
- no overflow, residue, console errors or 4xx.

**Minor finding.** The two new rules_primer amber runs (:441, :1001) land on penalty statements, not on an instruction. That is defensible in a rules document, and a row is logged.

## Dimension coverage

| Dim | Name | Covered | By | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `safety-reviewer` r1, r2, r4b, r5b, r6, final; `rules-verifier` r3b | CARHA 30(a), 32(d), 36(a), 48(a), 49, 52, 53, 62, 63, 64, 66(b), 79; USAH 602(a), 603(c), 604 Notes, 607(d), 608(c), 609, 620, 621, Casebook 609/620/621; HC 7.3(c), 7.4(e), 7.6/7.7, 8.2, 8.5, 9.5; NHL/PWHL 21.1, 42.5, 43, 55/56, 58.4, 59/60/61, 69.4, 70.10, 71.7; IIHF 23, 42.1, 48, 59.3, 60.4, 69.4, 76.6, 101.1; EIHL Casebook 42, 46.10, 76 deferral; In-House 6, 101; IHUK RoCs. |
| D2 | Exceptions | Yes | same | CARHA accidental high stick; 53(b) no-substitution Note; In-House Section 6 scope. |
| D3 | Rule-set divergence | Yes | same | Every new list read for the unnamed book. |
| D4 | Citation integrity | Yes | readers | Quotations verified verbatim. |
| D5 | Provenance | Yes | `source-verifier` | One citation URL new to the corpus: the NIHL 1 and 2 RoC 2026-27, VERIFIED (HTTP 200; 369,646 bytes; checking row matches `ihuk_nihl_roc_layout.txt:121`). Other URLs added to trailers were already cited. |
| D6 | Negative existence claims | Yes | readers | "IIHF writes no match penalty"; "CARHA has no trapezoid". |
| D7 | Cardinal rule | Partly | readers | **Otherwise declared out of scope.** |
| D8 | Numeric ownership / restatement | Partly | readers | **Otherwise declared out of scope.** |
| D9 | Summary layer | Yes | readers | KT3, KT8, KT9, KT10, KT11 and KF voiced alone. |
| D10 | Key-facts layer | Yes | readers, `check_facts` | One facts line at 300/300 left alone; center block at HARD_MAX 14. |
| D11 | Reader safety | Yes | a reader on every lane and repair | |
| D12 | Read-aloud integrity | Yes | authors and readers rendered | 0 lost markers. |
| D13 | Folklore | No | | **Declared out of scope.** |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Several units are 2,000–3,100 spoken characters (rows). **Otherwise declared out of scope.** |
| D15 | Rendered site | Yes | `site-reviewer` | See above. |

## Gates

- `check_links` 0, `check_facts` 0, `check_absolutes` 0, `check_geometry` 0, `check_secrets` 0.
- `check_marker_pairs` 0 lost on all 13 files.
- `--panels` 0 and `--bare` 0.
- Clean build at 13:49, exit 0.

## What this method could not have found

- Readers read changed units and their chunk neighbours.
- The USA Hockey 602(a) shape, where a "may" match is named and 602(a)'s mandatory "shall" match is missed, likely recurs elsewhere. It is logged as a corpus row.
- How officials apply CARHA 36(a)(4) and the 49(b)/53(b) interaction is not settled by the book.

## Plan rows closed by this wave (verbatim from OPEN_ITEMS.md)

- [puck_handling CARHA 79 tier] puck_handling facts :653 and body :663 price CARHA's slap shot as "a slap shot and a minor (Rule 79(a))" — 79(a) adds a major if it injures, and 30(a)/32(d) make that an ejection plus a one-game ban; shooting :137/:159 carry the full ladder (direction: permissive-low)
  - W30 evidence: Lane F: puck_handling body :663 now "a slap shot and a minor under Rule 79(a), or a major if it injures an opponent — and that major ejects you and sits you out the next game (Rules 30(a) and 32(d)). Rule 79(b) adds a minor for a fake slap shot…" (carha.txt:3568-3575, :1415-1424, :1515-1519); facts :653 premise stale — it no longer says "a minor" (now "a slap-shot wind-up can be a penalty there", not a closed price; 197/200, block at coaching cap); shooting already carries the ladder (facts :136, body :159, KT :920). Unread: whether an injuring slap shot could also be priced under CARHA 62 or 49(b).
- [ST :451 edge cases] special_teams :451 — "NIHL (all leagues)" may be heard by a WNIHL reader as covering them (In-House Rule 101: any women's major also ejects; uk_rules :336 carries it); EIHL 46.10 second instigation in the same game is a game misconduct, omitted after "at any time" (direction: permissive-low)
  - W30 evidence: Lane H: special_teams body :451 adds "In women's hockey, plan on any fighting major ending your game: In-House Rule 101 says a major \"will, in all cases,\" also bring a game misconduct and ejection, at every age, and Section 6 never says whether \"NIHL (all leagues)\" reaches a women's fixture" (eiha_inhouse_2026-27.txt:386, :448-452; mirrors uk_rules :275); facts :425 adds "in women's hockey any major also ejects (Rule 101)" (245/300 [gate: 258/300 at staging]); EIHL 46.10 second-instigation game misconduct added (eihl_casebook.txt:571-573). Residual (not this row, gaps not permissive): EIHL Casebook 46.1 Note second-major automatic GM (:536) not added; "a softening of the IIHF's major" nit left.
- [rink_map CARHA 79 tier] rink_map :566/:571/KT8 "a slap shot and a penalty" — no injury tier (major = ejection under 30(a), 32(d) suspension); breakouts KT9 :1072 "rim hard" and the trapezoid body :981/:1004 limbless (CARHA has no trapezoid) (direction: permissive-low, W27 read)
  - W30 evidence: Lane I treated the claim, not the line: rink_map :566, :571, KT8 :650 and breakouts Key focus :20, Overview :54, KT6 :1069 now end "…a slap shot: a minor, and a major that ends your game if it injures an opponent"; breakouts KT9 :1072 adds "In a CARHA league, rim hard with a short backswing: past fifteen inches it is a slap shot — a minor, and a major that ends your game if it injures an opponent" and :1004 the same limb with Rule 79(a) (carha.txt:3568-3574 incl. the "more than fifteen inches" Note; 30(a) :1417; 32(d)); :981 false premise for CARHA (opens "Where the trapezoid applies"; CARHA has no trapezoid — confirmed by search). Unread: slap-shot sites worded without slap/backswing/fifteen (e.g. forechecking dump-ins carry no CARHA short-backswing limb — candidate only).
- [above-shoulder stick ceiling] corpus — sentences pricing NHL/IIHF/PWHL above-shoulder stick contact at a minor/double minor as a closed price omit IIHF 60.4 (major+automatic GM if reckless), IIHF 48.3, NHL 60.4/PWHL 61.4 match; likely in body_contact, forechecking, goaltender (direction: permissive) — W28 1 Oct: done in body_contact_and_battles (PWHL 61.4 match added at facts :343/:1557, body :355/:1567; facts :342 "At least a minor… In both books" no longer a closed price; :355 now "a minor at the floor"), goaltender (:1174 "same two minutes" cross-check/chop replaced with major+GM tiers, HC/CARHA mandatory injury and above-shoulder cross-check majors, USAH 620(a)/(b), match penalties in every book but the IIHF); no site in neutral_zone_systems, faceoffs, special_teams, core_principles, mental_game, forechecking_systems; remaining: language_and_glossary, on_ice_communication, rink_map, rules_primer, uk_rules, getting_started, playing_without_the_puck, puck_support_and_spacing, risk_management, scanning_and_anticipation, time_and_space, conditioning_and_recovery, equipment, how_to_watch_hockey, practice_and_development, team_play_and_culture, center, defender, switching_positions, winger, reading_ice_hockey_diagrams, breakouts, defending_the_rush, defensive_zone_coverage, game_management, offensive_zone_play, zone_entries, passing_and_receiving, puck_handling, shooting, skating (31 documents) not swept. Also untested: IIHF 48 head-contact ceiling for a stick-to-head price (bc sweep keyed on "high stick"/"above the shoulder"). — W29 1 Oct: swept the 30 remaining documents; fixed in uk_rules :134, language_and_glossary CM :438, defensive_zone_coverage :133/:532/:602/:618/KT11; no site or already fine elsewhere; remaining: rules_primer only
  - W30 evidence: Lane A, rules_primer (the only W29 remainder): four permissive sites fixed — beer-league high-sticking item (~:530) now "But no book stops at the double minor" plus NHL 60.4 match; cross-checking bullet :441 adds "USA Hockey gives you no bare-minor floor for a cross-check to the head either" (609 Note, Casebook 621 Sit. 1, 620(a)/(b)); CM (~:1001) "Nor is it two minutes under USA Hockey once the stick reaches the head" plus NHL 59.3/59.5, IIHF 59.3; KT8 (~:1100) now gives NHL/IIHF minor at the bottom and major+GM above it (NHL 59.3/59.5, IIHF 59.3) with NHL 59.4 match. Already fine: :417, :440, :944, CM :990/:991, KT10 :1104, :490. No PWHL high-stick price in the file (61.4 limb has no site); IIHF 48 head-contact ceiling checked (48.1(I) "with any part of their body or equipment"; 48.3 major+automatic GM — same top as 59.3/60.4, no edit). Before commit: rules-verifier on the author's inference that a cross-check is a 'check' so Casebook 621 Sit. 1 routes it to 620 (no Situation names a cross-check). Outside lane: DZC :618 '620(b) makes a careless stick to the head mandatory major+GM' may overstate (harsher) — Casebook 621 Sit. 1 routes a stick outside a check to 621.
- [women's contact without WNIHL] corpus — any 101.1/PWHL 52.1 contact permission for women's play that omits the WNIHL non-checking RoC (ihuk_wnihl_roc.txt:152-153); likely body_contact, forechecking, goaltender (direction: permissive) — W28 1 Oct: done in body_contact_and_battles (§5 blockquote :440, facts :208/:450/:476/:522/:571 now carry the WNIHL non-checking RoC at U16 and senior), forechecking_systems (facts :572, body :588, unit :983, CM :921, trailer cite ihuk_wnihl_roc), mental_game (:147 propagation); false premise / no permission in neutral_zone_systems, faceoffs (WNIHL already at :917/:922/:1151), goaltender, special_teams, core_principles (already at :87/:234); remaining: language_and_glossary, on_ice_communication, rink_map, rules_primer, uk_rules, getting_started, playing_without_the_puck, puck_support_and_spacing, risk_management, scanning_and_anticipation, time_and_space, conditioning_and_recovery, equipment, how_to_watch_hockey, practice_and_development, team_play_and_culture, center, defender, switching_positions, winger, reading_ice_hockey_diagrams, breakouts, defending_the_rush, defensive_zone_coverage, game_management, offensive_zone_play, zone_entries, passing_and_receiving, puck_handling, shooting, skating (31 documents) not swept. Disk WNIHL RoC not refetched against live (sources/README). — W29 1 Oct: swept the 30 remaining documents; fixed in winger CM :689, defender :420, rink_map :487/KT14, game_management facts :840, body :868, CM :1114, offensive_zone_play facts :859/§10/:884/CM :1140/KT10, playing_without_the_puck facts :191/:193/KT3, and the four forechecking diagram captions; remaining: rules_primer only
  - W30 evidence: Lane A, rules_primer (the only W29 remainder): already fine, no edit — body :471 gives IIHF 101.1's "clear intention of playing the puck" after the WNIHL RoC "Full ice, non-checking, stop clock" at U16 and senior; table row :941 IIHF cell beside the British cell's WNIHL limb; Key focus :17 and KT10 :1104 are restrictions naming the WNIHL; no PWHL 52.1 contact permission in the file (52.1 hits are slew-footing); ihuk_wnihl_roc.txt:152-153 confirmed. Also in W30 (lane G): winger CM :689 and switching_positions facts :213/body :229/CM :496 'British women's hockey' scoped to the Women's NIHL, other British women's competitions told to ask their league.
- [CARHA 49] puck_handling :280/:302 "hips and backside as the barrier", :483/:492 "spin with your back into the checker", CM :953 — CARHA 49(a) "does not avert" scope, permissive-low (direction: permissive) — (plan 49, 430) — [T1] — W26 1 Oct: puck_handling spin facts :483/body :492 'back into' -> 'back to the checker'; KT4/facts :422/body :433 already scoped; :280/:302 judged shielding-by-position, not permissive; remaining: CM :954 'absorb it' / backside kernel under CARHA 49(a) 'does not avert' flagged by the author as a judgement call needing a reader.
  - W30 evidence: Lane F: puck_handling CM :954 (the W26 remainder) adds "In a CARHA adult league, shield by position only and never lean or back into them." after "facing up into the checker gets you pinned." — matching :32 and :433 (carha.txt:2449-2456, 49(a) "…and/or does not avert body contact with an opponent"); next sentence has no pronoun back-reference; :280/:302 left as W26 judged (shielding by position).
- [101.1] body_contact facts :415 seal voiced alone without "first"/step-or-glide; fc :170 "a hit that separates the carrier from the puck is a bonus" unscoped until :301; OZP facts :834 "where your book allows it seal the wall" (harsher); bc CM :1798 "offends none of those rules" generous under 101.1 pin; bc KT1 women's clause reads as part of checking point, permissive-low (direction: permissive) — (plan 559, 563, 580) — [T1] — W26 1 Oct: body_contact facts :415 ('get to the lane out first'), CM :1801 ('never holding them against the boards') and KT1 restructured; remaining: forechecking :170 'a hit… is a bonus'; OZP facts :834 (harsher) not re-read. — W27 1 Oct: forechecking :185 'a hit… is a bonus' now scoped to games that allow body checking with the IIHF women's step-or-glide limb; remaining: OZP facts :834 (now ~:852 'where your book allows it seal the wall', labelled harsher) still not re-read — ozp was a W27 file but this row was not briefed to lane I. — W28 1 Oct: body_contact reconfirmed fixed (lane D); remaining: OZP facts ~:852 "where your book allows it seal the wall" (labelled harsher) still not re-read (offensive_zone_play not a W28 file).
  - W30 evidence: Lane E re-read the only remainder, offensive_zone_play facts :852 "where your book allows it seal the wall — never their body": harsher-only (adds a condition, grants nothing), no fix; body_contact (lane D) and forechecking/breakouts (lane I) have nothing left.
- [safety] risk_management :616-622 hook priced as a 21% minor with no book named (possible permissive, 623(b)); risk :832 clipping "climbs higher again" harsher for USAH; risk :333 "only a puck shot straight in… escapes" (cautious); risk :349 quote attribution (85.1 vs Note wording); gm :329 69.1 contact "initiated outside the goal crease"; gm :988-1016 "When a penalty is worth taking" prices tactical fouls at two minutes with no reckless tier (unverified); gm CARHA 53(a) "could also" match and injury-mandatory limb unvoiced, 34(a) continuing bar; mental_game "disputing costs at least a minor" overstates HC/CARHA; conditioning "604(e) … plain check" drops the label; CARHA 74(a) "shall always advance" unmentioned in breakouts; NZS :342/:391 "rules the head-down case charging" overstates Sit. 2 (direction: permissive) — (plan 93, 204, 207, 441, 483) — [T1] — W26 1 Oct: risk_management hook bullet :627 repaired (and re-repaired after safety block: empty-net awarded goal, injury major+ejection in four books, USAH 623(b)); :832 clipping harsher and :333 cautious, not changed; :349 credits NHL 63.2(iii) Note's wording to 85.1 (imprecise, not permissive); remaining: game_management (:329, :988-1016, CARHA 53(a)/34(a)), mental_game, conditioning, breakouts CARHA 74(a), NZS :342/:391, and the risk :349 attribution nit. — W27 1 Oct: done in game_management (:329 false premise, PWHL 71.1 added; :988-1016 'keep it a minor' clause with USAH 639(b)/623(b), IIHF 57.4/55.3, CARHA 86(a), hook-injury tiers, plus facts line, Options line and KT12; CARHA 53(a) injury-mandatory and 'could also' match voiced at :852/:856; 34(a) continuing bar added), conditioning (604(e) label already present at :225/:229), breakouts (CARHA 74(a) already at :654/:666/:748/:751; KT7 now carries it); remaining: mental_game 'disputing costs at least a minor', NZS :342/:391 Sit. 2 overstatement (neither a W27 file), and the risk :349 attribution nit (risk_management was a W27 file but this row was not briefed to lane J). — W28 1 Oct: mental_game "disputing costs at least a minor" (Key focus :27, CM :656, KT11 :719) harsher-only/neutral per lane F (HC 11.1(i) prices only "unsportsmanlike" disputing — harsher overstatement; CARHA 41(a) Note minor floor; USAH 601(a)(1) minor); NZS :342/:391 Sit. 2 compression harsher-only per lane A (Sit. 2 turns on "traveled a great distance at full speed for the purpose of punishing"; body :368/:790 quotes it in full), not edited; remaining: risk_management :349 attribution nit (not a W28 file) and optional NZS :342/:391 rewording ("the full-speed hit on a head-down carrier"), coordinator call.
  - W30 evidence: The two W28 remainders are both in W30 files: risk_management :349 attribution nit fixed (lane J) — quote marks removed and kept as paraphrase, since "when the puck goes out of the playing area directly off a face-off" is the 63.2(iii) Note's wording while 85.1 (PWHL 87.1) reads "goes outside the playing area directly off the faceoff" (nhl_rules.txt, iihf_rules.txt, iihf_rules_2026-27.txt, pwhl_rules.txt); NZS :342/:391 Sit. 2 compression harsher-only (W28 lane A; lane H left it as coordinator's optional rewording, not edited).
- [winger :689 British scope] winger CM :689 "In British women's hockey, plan no hit at all" is broader than offensive_zone_play :1143 (WNIHL only; elsewhere British women's hockey runs IIHF 101.1) — align scope; errs harsher (direction: accuracy)
  - W30 evidence: Lane G (brief item, not in rows_G): winger CM :689 now "In the Women's NIHL, plan no hit at all: it is played \"Full ice, non-checking\"… In any other British women's competition, ask your league — the IIHF book's women's rule is looser than that, though still limited" (ihuk_wnihl_roc.txt:144-153); same claim scoped in switching_positions facts :213 (226/300), body :229 ('IHUK's women's league'), CM :496; center already scoped (:692/:724, facts :681/:683). Outside lane, harsher: switching :229 'In British women's hockey a major ends your game' (In-House Rule 101 reaches EIH/SIHA only) left.
- [ozp Britain no age] offensive_zone_play §10 blockquote and CM :1140 "Britain publishes no age — so ask your league" partly stale: the IHUK Rules of Competition set which age groups may check (sources/README.md:1613) (direction: accuracy)
  - W30 evidence: Lane E (brief item): offensive_zone_play §10 blockquote now "In Britain neither rule book sets a checking age, but IHUK's Rules of Competition do for its own competitions:" U10/U12 non-checking, U14/U16/U19 checking, NIHL 1 and 2 check, 'in any other British league, ask yours' (ihuk_junior_roc_layout.txt:153-157, ihuk_nihl_roc_layout.txt:121, ihuk_u10_roc.txt:123); CM pinching bullet (~:1145) same clause; trailer adds Junior RoC and NIHL 1-2 RoC; facts :859/:860 ('IIHF and In-House Rules set no checking age; ask your league', 300/300) true, left.
- [goaltender :1174 lead] goaltender "You can be penalised too" bullet ~3,000 chars across two chunks and leads with a warning, not a do — add a one-clause lead ("Keep your stick and body off attackers in your crease") (direction: readability, P1)
  - W30 evidence: Lane C (brief item): goaltender :1174 now leads "Hold your ground and keep your stick, blocker and body to yourself, in your crease and out of it — you can be penalised too, and not only for interference." (brief's sketch 'in your crease' rejected — would place-limit the 69.4 outside-the-crease limb); tightened 3,116 → 3,037 [gate: 3,094 → 3,013 characters; 3,116 → 3,037 are bytes] chars, every tariff sentence kept; IIHF/NHL 69.4 and blocker-punch table refs re-verified; marker kept (110/110, 0 lost). Residual: unit still ~3,000 chars; moving the cross-check/match ladder to body_contact is a coordinator call.
- [bc :1792 fifth book] body_contact CM :1792 "a fifth book" after naming only NHL, IIHF and USAH (accuracy)
  - W30 evidence: Lane D (brief item; hunk by the stalled earlier author, verified and kept): body_contact CM :1792 now '…IIHF 60.4 and USA Hockey 621(b) reach a major plus a game misconduct…, and Hockey Canada 7.6(b)/7.7(b) reach the same pair on the degree of violence. And CARHA starts above the double minor' (hc.txt:6260-6262, :6316-6318; HC 9.5(b); CARHA 62(b)); propagated to KT3 :1895 (now ~2,160 spoken chars); all other 'a fifth book' labels replaced with CARHA (:872, :1595, :1761, :1775, :1795).
- [risk :520 CARHA parity] risk_management :520 "under those two books a skater fouling you from the front is not an awarded goal" — add "CARHA may" for parity with :497/:627/:664 (nit)
  - W30 evidence: Lane J (brief item): risk_management body :520 adds PWHL 58.4 to the award list and "CARHA keeps it at 36(a)(3) too, but its 36(a)(4) may award the goal for a foul from the front" (carha.txt:1743-1766; pwhl_rules.txt 58.4); facts :643 now 'NHL, IIHF and PWHL', new facts :645 CARHA 36(a)(3)/(4) (235/300); all six books named in body unit and block. Unread: whether CARHA 36(a)'s 'on a breakaway' narrows the award.

Sixteen further rows carry a "W30 1 Oct: … remaining: …" note. New rows logged this wave:

- goaltender CARHA 53(b)
- breakouts trapezoid books
- forechecking dump-in CARHA 79
- puck_handling :280/:302 CARHA
- risk 36(a) "may award"
- rink_map CARHA citation
- switching :229 and KT :563
- center CARHA 48(a) match
- switching ask-your-league
- USAH 602(a) deliberate-injury match

Open owner call: CARHA 49(b) on top of 53(a).
