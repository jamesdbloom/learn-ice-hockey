# Plan open rows archive, re-triaged 22 October 2026

The open-rows section of project/plans/OPEN_ITEMS.md (and the P1 bracket rows), as they stood at HEAD a672681, before the 22 Oct re-triage. Four agents tested every row against HEAD; their verdict tables follow the archived text. **Archived verbatim; nothing here is open unless it reappears in the new plan.**

## Archived P1 rows

- **SG10 DONE (22 Oct):** eight agents re-tested nine accuracy rows. SEVEN were already fixed by earlier commits or refuted (goaltender CARHA 53(b) c35d177; switching :229 and ask-your-league — In-House Rules DO reach the WNIHL per ihuk_wnihl_roc.txt:24-29; risk 36(a) b12a829 and :717 amber b44e9d8; breakouts trapezoid e16a586; DZC 620→621 9490fbe; USAH 640 Note 2 b12a829). Real fixes committed (record sg10_small_accuracy_rows_2026-10-22.md). ⚠️ This section of the plan is STALE — test a row against HEAD before dispatching it.
- [W31 amber on citations] three W31 amber runs land on a rule number, leaving the instruction after them unhighlighted: risk_management :717 ("But CARHA's 86(b) is the clause, not the rule:"), game_management :179 ("640(g) and 640(h) reach only…"), body_contact :1124 ("…its 63(a)"; also "And the NHL, IIHF, PWHL and Hockey Canada write a permission…") — move the bold onto the instruction (P2)
- [W31 nits] game_management/rink_map/others: long spoken chunks >2,500 chars on many W31 units; shooting facts :308/:516 IIHF ceiling unstated; glossary :377 "reckless or deliberate" vs 602(a)'s "attempts to injure", 609(c) contrast clause omitted; DZC "one of the six" before PWHL/CARHA named and stale "four-book comparison" pointer; bc :1912 trailer "immediately after 603(a)"; forechecking :1002 trailer garbled; center :474 "appears nowhere in any edition on disk" narrates the corpus (readability)
- [USAH 608(c) layer test] corpus — every site quoting USAH Casebook 608 Situation 1's "major plus a game misconduct, or a match penalty" must carry, in the same voiced unit, that 608(c) makes the match MANDATORY for a reckless check from behind "with excessive force while the opponent is in a vulnerable or defenseless position" (usah.txt:3728-3731; usah_casebook.txt:11777-11780). W31 fixed zone_entries, risk_management, defensive_zone_coverage. Carriers of Sit. 1 still to layer-test per unit (most cite 608(c) somewhere, not necessarily beside each Sit. 1 quote): glossary, rules_primer, pwp, center, defender, winger, goaltender, switching_positions, defending_the_rush, offensive_zone_play, forechecking_systems, body_contact, passing_and_receiving, special_teams (direction: permissive)
- [DZC long CM / glossary summary match] DZC CM :751 now ~3,450 chars; glossary Key focus :27 and KT :469 say a deliberate hit "can reach a match penalty" where HC/CARHA/USAH make it mandatory (readability; possibly permissive-soft)
- [USAH 602(a) reading — dissent] RESOLVED BY OWNER 1 Oct 2026: "plan on the match" (see [USAH 602(a) pre-existing reckless sites]); kept for the record. W31 ruled (rules-verifier) that a reckless act a specific USAH rule covers is that rule's major+GM OR its match (Casebook 621 Sit. 3, 634 Sit. 3, 607 Sit. 4; Appendix I "Match Penalty Option"; Discipline Policy levels), with 602(a) mandatory for attempts to injure and uncovered reckless acts. A safety-reviewer (rF) dissented: Casebook 602 Sit. 1 says "the match penalty must be assessed" for reckless action, 602(a) says "shall", and no precedence clause exists, so "the book does not settle" was the conservative wording. Both readings eject; suspension ranges differ (602(a) 6–10 games vs 3–5/4–8). Owner may want to rule; if the dissent is adopted, the W31 sites need "plan on the match" wording (direction: possibly permissive)
- [USAH 602(a) pre-existing reckless sites] corpus — OWNER RULING 1 Oct 2026 (supersedes the W31 rules-verifier reading below): for a reckless act a specific USAH rule covers, say "a mandatory major plus a game misconduct, and plan on a match penalty — 602(a) says one 'shall be assessed' for anyone who 'recklessly endangers or attempts to injure', though the rule's (c) says 'may also'"; never "instead"/"optional"/"allows"/"reaches" framing for the USAH reckless match. Pre-W31 sites to bring into line include body_contact :551 (628(c)), :609 (620(c) "reaches"), :631 facts (603(c) "allows a match penalty above it"), :1557 facts (621(c)), :1592 (639(c)), risk_management :642/:659 (639(c) "reaches"), and every corpus "may also be assessed" USAH match stated without 602(a). Earlier reading, kept for the record: apply scratchpad-recorded W31 ruling (review record round_2026-10-01_wave31): 602(a) is mandatory for an ATTEMPT to injure and for reckless acts NO specific rule prices (Casebook 602 Sits. 2–4); a reckless act a specific rule covers is that rule's major+GM OR its (c)/(e)/(h) match instead (Appendix I "Match Penalty Option"; Casebook 607 Sit. 4, 621 Sit. 3, 634 Sit. 3). HEAD sites to judge: body_contact :581/:584/:1503/:1523/:1534/:1779/:1912 ("tied to no named foul", late hit in adult men, interference outside 625); pwp :469/:481/:654/:898 and time_and_space :268/:282/:576 (reckless pick: "640(g)'s major plus GM … and 602(a)'s match" may read as stacking); game_management :171/:179/:833/:864; on_ice_communication :281; offensive_zone_play :867/:989/:1140 (late hit "reaches adult men" via 602(a) — likely CORRECT under ruling (iv) where 640 does not reach adult men; do not cut the reckless half there) and :1238 trailer; also 608(c) mandatory match for a reckless excessive-force check from behind on a defenceless opponent — check every USAH checking-from-behind price carries it (direction: mixed; 608(c) permissive)
- [NHL/PWHL 43.5 late hit] corpus — wherever the NHL/PWHL late-hit or interference ejection is said to "need an injury" (56.5), a late hit on a turned player is a check from behind: 43.3 major on an opponent "unable to protect or defend himself" + 43.5 mandatory game misconduct, injury or not (nhl_rules.txt:5475-5482; pwhl 43.3/43.5); W31 fixed game_management; candidates: the 56.5-citing docs in [NHL 21.1 / CARHA 48(a) general match] (direction: permissive)
- [freeze-for-whistle excused while checked] rules_primer, puck_handling, breakouts, faceoffs cite HC 10.1(i)/CARHA 74(b)'s "being checked" exception for pinning the puck but not HC 6.12(b) (deliberately making the puck unplayable to gain a stoppage → Rule 10.1) or CARHA 55(a) Note 2 (bench minor, "freezing the puck"); W31 fixed on_ice_communication — apply its ruling once read (direction: permissive)
- [NHL 21.1 / CARHA 48(a) general match] corpus — sites pricing the NHL/PWHL late hit or interference as "game misconduct needs an injury" (56.5) miss 21.1's mandatory match for a deliberate attempt to injure (nhl_rules.txt:2635-2637; pwhl 21.1); candidates citing 56.5 without 21.1: uk_rules, rink_map, on_ice_communication, scanning_and_anticipation, time_and_space, offensive_zone_play, defensive_zone_coverage, playing_without_the_puck; and CARHA ceilings given as 49(a)/52/53 alone miss 48(a) (carha.txt:2390-2392) (direction: permissive)
- [uk_rules IIHF tables] uk_rules :369 cites "Table 7" for the discretionary major-plus-GM list — in the 2026/27 IIHF book those entries are Table 5's "MAJOR + GMP" column (Table 7 is misconducts); :371 "the IIHF book has no match-penalty tier at all" untested against 2026/27 (accuracy)
- [bc :661 CARHA intentionally] body_contact facts :661 "No CARHA rung leaves you on the ice" — CARHA 53(a) reaches only an intentional hit from behind; accidental falls to 49 (49(c) no penalty) — overstates in the stricter direction (accuracy)
- [general deliberate-injury routes] sweep whether Hockey Canada and CARHA (48(h)) have general deliberate-injury match routes not voiced where the corpus names only rule-specific ones; check shooting's high-stick "full ladder" carries USAH 602(a) (direction: permissive-if-found) — W31 1 Oct: SUPERSEDED for USA Hockey by rows [USAH 602(a) pre-existing reckless sites] and [USAH 602(a) reading — dissent] (plan lines 218-219), which carry the binding W31 ruling (scratchpad w31_602a_ruling.md); general deliberate-injury routes added in W31 files: CARHA 48(a) in center :474/:684/:693/:725 (lane F), risk_management facts :788/KT :897 and zone_entries CM :1071 (lane G), game_management CARHA body paragraph (lane H); NHL/PWHL 21.1 (mandatory match for attempt/deliberate injury, nhl_rules.txt:2635-2637, pwhl_rules.txt:2383-2384) added to game_management facts :170/:829, CM :179, body :860, KT16 (lane H); body_contact :357 already cites CARHA 48(h) (lane A); shooting high-stick facts :172 now carries 602(a) for an attempt to injure (lane F); Hockey Canada: lane A reads 7.1(c) as residual ('in any manner not otherwise covered', hc.txt:5918-5921); lane G cited HC Appendix D Note 1 (hc.txt:9102-9103) then removed it on coordinator instruction; IIHF books carry no match penalty (lane H); remaining: HC 7.1(c) vs Appendix D Note 1 scope needs a rules-verifier; NHL 21.1 census (uk_rules, rink_map, on_ice_communication, scanning_and_anticipation, time_and_space, offensive_zone_play, defensive_zone_coverage cite NHL 56.5 but never 21.1 — lane H); CARHA 48(a) census outside W31 files; USA Hockey half → the two newer 602(a) rows.
- [rules_primer amber placement] rules_primer :441 and :1001 new amber runs land on penalty statements ("USA Hockey gives you no bare-minor floor…", "Nor is it two minutes under USA Hockey…") rather than an instruction (direction: readability, P2)
- [USAH 602(a) deliberate-injury match] corpus — sentences naming USAH 621(c)/609(c)-style "may also be assessed" match as USA Hockey's answer to a DELIBERATE injury or attempt miss 602(a)'s mandatory "shall" match (usah.txt:3496-3500); check shooting's high-stick ladder and siblings; also HC's and CARHA 48's general deliberate-injury routes (direction: permissive) — W31 1 Oct: SUPERSEDED by rows [USAH 602(a) pre-existing reckless sites] and [USAH 602(a) reading — dissent] (plan lines 218-219). W31 applied the binding ruling (w31_602a_ruling.md: (i) attempt to injure = mandatory 602(a) match; (ii) covered reckless act = that rule's major+GM OR its (c)/(e)/(h) match instead, never stacked; (iii) 608(c) mandatory) in every W31 file that carried a site: body_contact :357/:640/:642 (A), pwp :641/:890 restored to HEAD and time_and_space :288/:482/:577 now '…or the referee may make it a match penalty instead (607(e))' (B), ozp facts :603 / body :624/:655/:887 / CM :1135/:1142 and saa :370/:372 (C), forechecking facts :762, CM :933, KT8 :994, body :600, trailer :1002 (D), DZC :519/:618 and glossary :363/:441 attempt-only, glossary :363 'shorthand' line → 'at least the major plus a game misconduct… The referee may make it a match penalty instead' (E), shooting :538/:308/:516/slap-shot blockquote and center :462/:474/:666/:693/facts :680 (F), zone_entries :741 (G), game_management facts :171/:833, CM :179/:1115, body :864 (H), OIC :267/:281 and DTR :319/:644/:657/:922 (I), rink_map :210/:424/:590/:657 (J; no 602(a) left in rink_map); 608(c) mandatory match added at DZC :177/:476/:751/new facts :464 (E) and zone_entries :219/:229/:775/:1071, risk_management :793 (G); remaining: see the two newer rows — body_contact :581/:584/:1503/:1523/:1534/:1779/:1912, pwp/time_and_space reckless-pick stacking candidates, ozp :867/:989/:1140 late hit, the dissent, and 608(c) in documents outside W31 (rules_primer, body_contact, defending_the_rush likely carry Casebook 608 'or a match' — lane G).
- [switching KT :563 length] switching_positions KT :563 ~3,110 spoken chars (readability, P1)
- [ozp CARHA 62(c)] offensive_zone_play facts :503, body :527, CM :1133 price CARHA 62(b) (major, GM per Note) but not 62(c) match for deliberate or attempted injury (carha.txt:2994-2996); facts :503 at 299/300 (direction: permissive-low) — W30 1 Oct: done in offensive_zone_play (lane E) — facts :503 split, new Rule line :504 gives CARHA 62(b) major/GM and 62(c) match (carha.txt 62(c) "A Match penalty shall be assessed to any player who deliberately attempts to injure or deliberately injures an opponent with a high stick"); body :528 now "Injure an opponent deliberately with a high stick, or try to, and in a CARHA-affiliated adult league it is a match penalty under 62(c) — as it is under NHL 60.4, PWHL 61.4 and USA Hockey 602(a), and under Hockey Canada through its Head Contact rule, 7.6(c) or 7.7(c)" (re-repaired twice after safety reads; IIHF correctly unnamed — 60.4 tops at major+automatic GM); CM tipping bullet :1138 adds the 62(c) match; remaining: CM :1138 still attaches the match penalty to CARHA alone after "None of those is capped at a minor" for NHL/USAH/HC — possible contrast for those readers; author offered the body's tail ("as it is under NHL 60.4, PWHL 61.4 and USA Hockey 602(a)…"), coordinator call.
- [winger CM :689 length] winger Common Mistakes cross-checking bullet (:689) is several thousand characters spoken — needs a per-limb layer test to slim it (direction: readability, P1)
- [uk_rules :601 EIHL instigator] uk_rules :601 "every other Rule 46 fighting offence — instigating… — still carries the IIHF's automatic ejection" follows the Elite League clause; under the EIHL Casebook an early instigator takes 2+5+10, no ejection (direction: harsher, accuracy)
- [defender :468 amber] defender :468 amber run opens on the citation "⚠️ Hockey Canada 7.4(b)" (wrapper formed; tariff after it black) — reword so the run opens on the hazard (direction: readability, P2; W27 site review)
- [glossary length] language_and_glossary Screen/Traffic/CM "Answering 'Screen!'" units are 1,800–2,700 spoken chars each after W27; further compression needs a decision on which quotations move to the trailer (direction: readability, P1)
- [risk_management] summary layers never checked in the HARSHER direction (overstated tariffs); negatives were lexical, so a takeaway describing the act without naming it was not found (direction: harsher) — (plan 2427–2434; added by verifier)

## Archived open-rows section

## Open rows

**Re-triaged 19 Oct 2026.** The previous 670-entry section and its per-row triage are archived in [project/reviews/plan_open_rows_archive_2026-10-19.md](../reviews/plan_open_rows_archive_2026-10-19.md). Of those entries, 339 were already done. **The 53 UNCLEAR rows were resolved on 19 Oct: 31 done, 16 removed, and 6 open (below). The archive records each verdict.** Line numbers below are from the triage and will drift, so brief each item as a CLAIM to find in every layer, never as a line.

**Recent rounds, all committed and pushed:** T1 277ece1, S5 30209b4, T2 6641032, site 9–11 a91aeef, IS 722e036, W 4435b6e, kk 92ca6e6, gg 65b14f5. Records are in project/reviews/.

### Owner decisions — ANSWERED 19 Oct 2026 (memory: project_owner_rulings_oct15)
- **Analytics:** keep GA; fix the infra/cloudfront.tf:120-121 comment (comment-only infra edit approved).
- **Layout:** keep both In-short and facts. "What it costs" stays label-only. KT count kept as is (no cap). Keep `## Check yourself`.
- **PWHL** is a standing sixth book wherever books are compared.
- **Head-reaching hit from behind (IIHF, NHL, PWHL):** state the HARSHER of Rule 43 and Rule 48. This supersedes the 15 Oct "keep Rule 43" IIHF ruling. → content wave.
- **CARHA 32(d):** "at least a one-game suspension" wherever a CARHA major, match or game misconduct is priced. → content wave.
- **EIH R&R reach to Scotland and Northern Ireland:** say it is unsettled; play as if it applies. → content wave.
- **USAH 602(a):** add the likely multi-game suspension where "plan on a match" is stated. → content wave.
- **HC head-first Q1–Q5:** treated as answered by the 18 Oct "harsher of 7.5 and 7.6" ruling and the goal-frame ruling.
- **HC goalie hit from behind:** harsher of 7.5 and 8.5. **HC slide:** note 8.6's exception but plan on 8.7 clipping. Both → content wave. **Podcast ear test:** DONE (owner, all fine).
- **Minor items the coordinator decides, no owner needed:** tactics-ratio target (none; worklist only); PNIHL/NIHL trailer; the five D-zone families; centre low-zone-collapse exception; panels per page; "(2) minor" shorthand; `*.local.md` stays gitignored.

### Re-triaged dispatch list (19 Oct 2026)

**LO wave committed 20 Oct** (record lo_leftover_rows_2026-10-20.md). Most rows below are now verified STALE or FIXED; still open: "10.1(i)" citation consistency; rules_primer marker runs of 7–11 (readability); TTS items. Originally: **LO wave dispatched 20 Oct ~21:50** (brief: scratchpad lo_brief.md). Five agents work through the per-page and cross-file rows below: lo-a rules_primer/uk_rules; lo-b body_contact/GM/goaltender; lo-c positions/passing/risk; lo-d eight systems pages; lo-e puck_handling, shooting, glossary, rink_map, on_ice, equipment, conditioning, PWTP, time_and_space. TTS and renderer rows stay with the coordinator.

Line numbers are working-tree lines at time of check. Brief each one as a CLAIM to find in every layer, not as a line.

**Cross-file claim sweeps (one agent per claim, or fold into per-file agents):**
- "take it on your forearm and hip" board-posture wording in inherited docs (owner's KEEP/DEMOTE ruling): on_ice_communication :108, defender :144/:906/:991, switching_positions :213, zone_entries :565/:1168/:1235, conditioning_and_recovery :212/:613/:685, getting_started :490. Body_contact :33/:51/:1973 is probably the owning doc (keep). passing_and_receiving board-posture limb in every layer (:195 … KT14 :905).
- "minor/female" misheard by TTS: body_contact :739, passing :437, winger :747, center :766, zone_entries :852, defensive_zone_coverage :180.
- Stale "four books" frames (corpus holds six): body_contact :563/:618/:1644 facts (+8 framings), game_management :143/:1133/:1141/:1169, team_play_and_culture :137, switching_positions :290, breakouts :562, defender :1003 and center :924 ("Rules Primer carries that four-book split"). faceoffs five-vs-six (:4/:656 vs :1031).
- CARHA 32(d) flat one-game suspension, with no "at least": breakouts :214, offensive_zone_play :715, shooting :161/:191, playing_without_the_puck :740, defensive_zone_coverage :598. Tied to owner question at plan :582.
- Slash voiced as "or": puck_support_and_spacing :587, defending_the_rush :731 (time_and_space :499 already fixed).
- HC 8.5(b)/7.1(c)(iii) injure limb missing: winger KT :864, center :833/:903, risk_management :755 (cites CARHA 48(c) without HC 7.1(c)(iii)), passing_and_receiving :486 (facts/CM/KT15 drop "deliberately").
- HC 6.1(g) net-off not named: goaltender, game_management :624/:637. game_management :637/:1006 also lacks USAH 610(d).
- Missing PWHL: goaltender :795 (81.1), special_teams :685 (68.2), rules_primer :775.
- "Hockey Canada 10.1(i)" citation form (cosmetic): breakouts :650/:656, defensive_zone_coverage :177/:203, body_contact :1145/:1161.

**Per file:**
- **rules_primer.md:** :462 HC ladder states condition before scope; :1157 KT "ask which IIHF edition" has no Elite League half; :961 heading level; :895 and :1014 tables at 0 headroom or dropped from audio (no inline-voicing check recorded); speech: a run of 19 consecutive "Important.", "Fourth, If", "under ten is" read in lower case; 2 quote-drift flags.
- **uk_rules.md:** KT9 :632 "ask which IIHF edition" (same as rules_primer); "five (5)" at :136 is spoken "five (five)"; "U12 is" read in lower case; trailer lacks R&R 3.1/17.1; EIHL Casebook cited as "Version 1.1" (:490/:666/:672) where the disk copy says 1.0; KT17 omits three EIHL Casebook 46 limbs (may be deliberate); 34 headers say "every level of UK hockey runs the IIHF book" (:759 row).
- **body_contact_and_battles.md:** :88/:89 near-duplicate CARHA facts; :814 "one (1)" spoken twice; :1656–1661 amber runs open on a citation; CM layer 78% rules-bearing; §5/§12 callout stacks; table at :1648 has 0 chars headroom; content-review question on 43 EIHL mentions.
- **game_management.md:** :939 HC J/S summary missing the cross-check limb; :894 facts at 299/300; :143 promises risk_management "carries all four books" (uncensused).
- **goaltender.md:** :1246 charging-ejection list lacks EIHL Casebook 42.
- **defender.md:** :244 crease cover lacks HC where-you-are limb; :867 USAH 639(b) without 602(a); :462 facts "doubles, two of the three penalties that eject you" (readability).
- **winger.md:** :98 "fallback" vs :126/:799 "last resort".
- **faceoffs.md:** :1152/:1160 "out or deep"; :1231 cheating-back given for In-House only; "Fourth, If"; Overview 78% and CM 67% rules-bearing.
- **breakouts.md:** :1107/:1140 "no book lets a goalie freeze a rim" against USAH Situation 11; :966 cites NHL 84.2 alone.
- **defending_the_rush.md:** :1045 and KT9 :1111 HC blind side at the end boards.
- **offensive_zone_play.md:** :784 no CARHA 48(a); :291 "five-man setup"; :929 "bodycheck" in a facts line.
- **puck_handling.md:** :340 flat "falls on … all six books" (Casebook 614 Situation 2); 63.2(v) Note against 67.4 still unresolved; :347 `[you]` insertion has no ruling.
- **passing_and_receiving.md:** no CM/KT carries the HC crease where-you-are test; :440 "7.6 itself" in a J/S line.
- **language_and_glossary.md:** :295 HC ladder condition before scope; :415 HC 7.5 hit from behind with no 7.6 head limb.
- **rink_map.md:** :224 calls any deliberate USAH contact with a goalie charging, with no Casebook 607 Situation 5 carve-out.
- **special_teams.md:** :674 "Every book reports a game misconduct to an authority" (USAH and PWHL limbs unverified); :626 prevalence claim flagged "not independently verified".
- **neutral_zone_systems.md:** :437 (:361/:395/:424) HC 7.4(c) mandatory match for charging a head-down carrier; needs a rules-verifier.
- **on_ice_communication.md:** :641 "need not move that player yourself"; :311 amber run opens on a citation.
- **switching_positions.md:** trailer :648 "only" list omits CARHA 66(a), which facts :172 cites.
- **skating.md:** :823/:833 "stick blade".
- **shooting.md:** :1007 trailer "IIHF runs the enforcement the other way".
- **practice_and_development.md:** :560/:607 concussion is a pointer only.
- **equipment.md:** "double minor" not defined; "CAN/CSA" spoken as "CAN or CSA" (fix in `md_to_speech.py` STANDARDS_BODIES); about 28 citations never refetched.
- **conditioning_and_recovery.md:** :5 "not medical advice" sits in the dropped header, so a listener never hears it; :695 NIHL link on the old path.
- **getting_started.md:** :224 "hockey 101" spoken as "one hundred and one".
- **how_to_watch_hockey.md:** :733 trailer says "local primary text" (low).
- **playing_without_the_puck.md:** paragraphs over 1,200 chars (9, longest 4,353); :715 "none in the IIHF" (optional).
- **center/switching_positions/winger:** "inside the faceoff dots" and "level with the opposing defenceman" are not defined in rink_map or the glossary.

**Diagrams (site/src/diagrams/):** special_teams.mjs pk-nz-1-3 / pk-nz-1-1-2 / pp-umbrella captions unread; offensive_zone_play.mjs:668 is the last citation-led amber run; puck_handling.mjs :427 title unscoped and :437 stale comment; breakouts.mjs :520–522 and wall_contact_clauses.mjs :71 cite a KT6 that no longer exists; winger-arriving-at-the-line lacks CARHA lifted-skate; over-long captions (breakout-wheel 2,651 chars; forecheck-pinch 617 words; two forechecking captions over 3,300 chars; 94 of 205 captions over 800 chars); dz-collapse-corner ends on the pointer "All six books are set out earlier".

**Readability, corpus-wide:** 56 paragraphs over 1,200 chars (language_and_glossary 10, playing_without_the_puck 9, defending_the_rush 4, faceoffs 4); 147 KTs over 60 words; KT counts above 10 in 14 documents (uk_rules 25 … puck_handling 13). This is CLOSED by the owner's 19 Oct ruling (no cap); the row's own wording that it needs the owner to say whether 5–10 binds; item 2 "rules last" never applied to the 19 R1-only documents; IIHF Table 16/14 in 17 documents (the edition decision is open).

**Site:** ReadingTools.astro:9 stale path comment; callout `<aside>`s lack a role (remark-corpus.mjs); global.css:951 stale anchor comment; about 24 literal `*` in `<main>` on 13 pages; AudioPlayer.astro:27 unversioned resume key; podcast.xml.ts:36 stale heading.

**sources/ (coordinator):** rename `hc_2026-08-print.txt`; refresh ihuk_nihl_roc.pdf (325,259 B on disk vs 369,646 B published); README:2010 "NOT CONFIRMED" sits under the correction that confirmed it; README lacks a note on the HC 8.5(b) Note 1 slip; EIHL Roster/DOPS, EIH and IHUK policy documents not on disk.

**scripts/ (coordinator, between waves):** `check_layer_echo` swallows the Sources trailer into KT; `check_caption_echo` compares against the whole block; `md_to_speech.py` CAN/CSA, "engine" field at :3863, U12 casing, "Fourth, If", "hockey 101"; unknown-flag handling (two exit 0, two traceback); `check_callout_flow.classify()` keys on how a line opens; `check_pointers` hardcodes the content root; `check_facts --near` misses blocks at 14; `check_quote_drift` has no unflattened pass; synthesize_style_b lacks a `--doc-id` sidecar; the podcast upload check reads local, not the deployed feed. About ten requested tools were never built (listed in parts B/E/H).

**Owner decisions (collected):** IIHF 48.1 vs the "keep Rule 43" ruling; HC goalie hit under 7.5 (shooting :536); Wave 34 questions 2–6 (In-House reach to Scotland/NI, CARHA suspensions, USAH Level 1, caption trim, centre-fly label); the "What it costs" frame; Google Analytics (cloudfront.tf:120 comment contradicts production); In-short above facts in about 300 sections; HC 8.6 vs 8.7 puck-first slide; KT count ceiling; tactics-ratio target; `## Check yourself` in 36 documents; PWHL as standing sixth book and `Rule set:` headers; PNIHL/NIHL trailer; the five D-zone families; centre-low-zone-collapse exception; dead `creaseThePuckDecides` spec; panels per page; "(2) minor" shorthand; `*.local.md` in VCS; podcast ear test.


---


### From the UNCLEAR resolution (19 Oct)
- **body_contact:**
  - :1661, the Kneeing table cell: HC 7.8 says "an opponent's knee"; match facts :580.
  - :1148 facts and :1155 body: IIHF 101.1 also bars pushing a player into the boards or eliminating her from the play. As written, the permissive direction. Run --near first.
- **faceoffs :1051:** an empty penalty box is a bench minor under NHL and IIHF; add the PWHL.
- **rules_primer:**
  - :19-22: four Key focus items are a bulleted list; make them bold-lead paragraphs like the rest.
  - :1163: the NIHL 1 & 2 RoC path is superseded; the publisher now serves 2026/09/NIHL-1-and-2-ROC-2026-2027-1.pdf.
  - :1102: covering the puck with the net empty is not an awarded goal in every book; USAH 614(b) requires "obvious and imminent". Harsh direction.
- **conditioning_and_recovery :695:** the same superseded NIHL path.
- **equipment :935-936 and mental_game :781:** edition notes carry inline ⚠️ that changes nothing a player does. equipment :935 also narrates the corpus's own history (non-negotiable 6).
- **site global.css:**
  - the amber left bar contrast is 2.1:1 against the 3:1 expected for non-text marks; darken it or record why it is acceptable;
  - :951 has a stale anchor comment.
- **site-reviewer pass:** the diagram scene at 400 px, the 🇬🇧 wrap in conditioning's Key focus, and a special_teams bold run.

### 🔴 HIGH PRIORITY — Podcast improvements (owner, 20 Oct 2026, after listening to both formats)

**Sequence (owner):** finish the content corrections first if that can be done fairly easily, so the podcasts are remade from fixed content. Then do this work, finish it, and move on.

- **(a) NotebookLM (Deep Dive) episodes say "the document".**
  - The owner wants the hosts to talk about the content itself, not refer to a source at all.
  - Failing that, they should refer to the website, never "the document" or pasted content. That phrasing sounds AI-generated, which the owner wants to avoid.
  - Work: change the NotebookLM customisation prompt in `.claude/skills/notebooklm-episode/`. Test on one or two episodes before regenerating all 39.
  - Option to try: give NotebookLM a source framed as a web page, rather than a pasted file.
  - **Owner refinement (20 Oct):** the episode should sound like two hosts discussing the TOPIC (e.g. how to play wing), not two hosts discussing a piece of content, a document or a website. Referring to the website is no longer an acceptable fallback. The prompt should forbid any reference to a source ("this document", "the guide", "the website", "the article", "the source", "it says"). The hosts should present the material as their own knowledge of the sport. Test: listen to a pilot episode and count source references; the target is zero.
- **(b) NotebookLM episodes: fewer rules.** Minimise rulebook talk. Mention a rule only where it is relevant, and avoid comparing the rulebooks. This mirrors what was already done for the Principles (Style B) episodes (project/podcast_style_b_script_standard.md §2, "far less rules"). Work: add this to the NotebookLM prompt, then regenerate.
- **(c) The Principles (ElevenLabs Style B) episodes are too content-dense.** The owner leans towards doing both of these:
  1. **A clearer "detailed principles" series.** Rework the existing episodes to introduce topics more gradually, explain each system more clearly, and say why it makes sense. They may be 25–50% longer.
  2. **A new "core principles" series.** Simpler, covering the core concepts relevant at every age and level, including U10/U12 and newer recreational players.
  - Work: write a script standard for each (extend podcast_style_b_script_standard.md), pilot one episode of each for the owner to hear, then roll out.
  - **Credits:** ElevenLabs credits are short until 16 Nov (memory: project_principles_remake_approved). Plan the synthesis around that.
  - **Site:** a third format means the site's two-format episode UI needs a third slot (memory: project_two_podcast_formats). That is a site change.
- **Open questions for the owner before piloting (c):**
  - Run both series, or one?
  - Should the core series cover all 39 pages, or a smaller set of core topics?
  - What should each be called on the site, Spotify and Apple, and as separate feeds or not?

### From the OR, P and R rounds (19–20 Oct; done work is in or_owner_rulings, p_residuals and r_consistency records)
- **Diagram captions** voice the full board-posture mechanics in forechecking_systems (chunks 039, 044). Run check_caption_hosts on posture captions, and check for a shared constant first.
- **Puck_handling crease-cover siblings:** check that summaries elsewhere (goaltender, rules_primer) state HC "both ways round" consistently.
- **U wave done 20 Oct** (record u_wave_2026-10-20.md; committed and pushed as 684326e).
- **playing_without_the_puck ~:1124:** "…its own Situation 5 E, ⚠️ **And only one…**": a comma followed by a capitalised "And", with a mid-sentence glyph (pre-existing; X gate).
- **equipment :173:** it quotes the WNIHL's "Full-face covering or half visor and mouth guard" for the mouthguard rule; heard alone it can sound like an age-less half-visor permission. Add the age line or rephrase (x1S, 20 Oct).
- **Y wave done 20 Oct** (record y_readability_2026-10-20.md; committed and pushed as 4c85bd0): offensive_zone_play, special_teams, faceoffs.
- **defensive_zone_coverage :577 (rules-verifier):** says IIHF 101.1 "allows pushing and leaning only…". Both v1.1 and 2026/27 open 101.1 with "'bodychecking' is allowed when there is a clear intention of playing the puck". The page is stricter than the rule (W3, xcS).
- **CARHA 32(d) sites deliberately left without it** (to avoid repeating it everywhere): defensive_zone_coverage 54(a)/66/49(a)/80(a) body sites, :557 facts at cap; zone_entries :405/:452/KT10/KT11/CM :1171/facts. Scope traps: 32(d) does not reach the 53(a) minor+GM, 53(b) is a 34(a) match, and 62(b)'s accidental high stick is excepted. Revisit only if the owner wants it at every site.
- **NIHL RoC link update:** the source is refreshed (20 Oct; the only change is the British Trained definition). Update the two content links, rules_primer :1163 and conditioning_and_recovery :695, to https://englandicehockey.com/wp-content/uploads/2026/09/NIHL-1-and-2-ROC-2026-2027-1.pdf (so).
- **HC 2026-28 republication changes** (README, 20 Oct; hc.txt is operative, and hc_2026-08-print.txt is the superseded August printing). Check whether any corpus claim depends on the old text for:
  - 4.11 penalty-shot equipment (blocker/trapper) and crease cover;
  - Interp 6 crossbar on the lacrosse move;
  - refusing to start play: penalty shot "in lieu of a Minor";
  - 8.7 clipping "at or below the hips";
  - 4.7(a) Interp 2;
  - 7.1(f);
  - 10.4 leaving the bench;
  - 10.6(a) Interp 5.
- **NotebookLM remake: owner APPROVED the Winger pilot approach (20 Oct).** All 39 episodes are being remade with the topic-not-document, fewer-rules prompt (8539ca2).
  - Packs: `.podcast_queue/notebooklm/remake_2026-10-20/` (README checklist; shared instructions.md and focus.txt; provenance/ holds the hash stamps). Batch 1 holds only the six pages with NO open edits: core_principles, reading_ice_hockey_diagrams, skating, scanning_and_anticipation, practice_and_development, how_to_watch_hockey.
  - Owner, 20 Oct: build a page's pack only once its edits are finished, so its episode includes them.
  - Owner, 20 Oct: every pack file is .txt, never .md (.md opens in the wrong program on the owner's machine).
  - **Batch 1 audio received 20 Oct ~21:05:** 8 .m4a files in batch1/ (02, 03, 24, 31, 36, 37, 38, 39). Durations: 02 14.3 min, 03 38.5, 24 65.5, 31 21.3, 36 55.3, 37 50.8, 38 46.3, 39 53.0.
    - 01, 17 and 29 have not been generated yet.
    - **Reviewed and published 20 Oct** (record notebooklm_remake_batch1_2026-10-20.md): 02, 03, 24 (edited), 36, 38 (edited) and 39 are live.
    - **NO-GO:** 31 and 37. Regenerate them after the prompt fixes in the record. 02 may also be regenerated (coaching slip) if the owner wants.
    - Local whisper transcripts go to scratchpad nlm_tx/. Next: a Step 4 review per episode, then publish with the owner's go-ahead.
    - Next candidates after small open rows close: mental_game (:781 marker), puck_support (:491 "five-man"), team_play (:137 "four books"), getting_started (the medical-cover layer test), forechecking (the 608(c) layer test).
  - The other 19 pages get packs after the SW sweep commit. Owner, 20 Oct: they can do at most 10 at once, so prepare one batch of 10 at a time and do not build the next until the current batch is done.
  - The owner generates each episode by hand, because NotebookLM is unreachable to agents. As each .m4a arrives: run the SKILL.md Step 4 review (safety list first, source-reference count 0, rules time, runtime), then publish via build_podcast_audio.py to the site and the RSS feed (Spotify and Apple follow the feed).
- **FZ wave committed 20 Oct** (record fz_goalie_freeze_siblings_2026-10-20.md): goalie-freeze siblings aligned with goaltender.md in 9 pages; centre needed nothing. Leftovers:
  - OZP facts :817 "Both books" antecedent;
  - special_teams :775 omits PWHL 65.2(vi);
  - the OZP trailer lacks USAH 614(c) and HC clause v;
  - md_to_speech clause numerals.
- **The Basics publishing support built 20 Oct** (bs1; code review bsR found no BLOCK, and its fixes were applied). Details:
  - `podcast-basics.json` lists the 13 planned topics; `/the-basics/` is live but empty and unlinked.
  - `--style basics` is supported in both build and upload.
  - The season gate leaves the live feed byte-identical until all 13 exist. The 39 principles guids are frozen.
  - **Still to do:** a site-reviewer pass on /the-basics/ and the source-page link; owner approval of the 13 titles; add the page to the nav and sitemap at launch; make the gate sticky at launch (freeze the Basics guids, keep planned append-only).
  - **Deferred:** downloads and m3u; `podcast_queue --style basics`.
- **GN wave committed 21 Oct** (record gn_gender_neutral_2026-10-20.md). Still open, owner's call: gendered terms of art (man-on-man, point man, "your man") are left unchanged.
- **NotebookLM batch 1 follow-up:** 01 (edited) and 29 are published. 17 is NO-GO: regenerate it with its own focus file. The owner has it scheduled after 03:00 on 21 Oct and 37 after 04:00 (NotebookLM usage limit). 31 v2 was received 23:53 and is in review. The owner is regenerating 31 and 37 with episode-specific focus files.
- **Principles pilots revised** to the owner's notes: The Basics explains terms and why; shorter, calmer safety; gender-neutral. In review (ppS5). The Detailed seam cap is now 9,320.
- **Principles production (21 Oct).** The owner has 967,392 ElevenLabs credits and will buy more within reason.
  - The final Winger pair is recording: Basics topic 10 and Detailed.
  - The Basics scripts for the other 12 topics are being written by six agents (bw-1 to bw-6, brief at scratchpad basics_brief.md), each into podcast_style_b/basics/<slug>.md. Each script then gets a safety review before recording.
  - Next: write the Detailed scripts for the other 38 pages, in batches.
- **The Basics launched (21 Oct):** 13 episodes are in the feed as season 8, with the guids frozen and links in the footer and the sitemap (record `project/reviews/basics_launch_2026-10-21.md`). Open NON-BLOCKING items from bsR2:
  - (a) the source-page "Short episode…" line sits below the h1 and toolbar, not next to the audio player, and almost flush on the Rule set panel at 1440. Design call: move it into or under `[data-audio-player]`.
  - (b) episode 13's "· 11 min" wraps onto its own line at 400px.
  - (c) the owner has been sent the 13 titles.
- **NotebookLM batch 2 (21 Oct):** the owner asked for batch 2 from pages that won't be edited. The triage (nlm-triage) found switching_positions and defensive_zone_coverage SETTLED; their packs are in `.podcast_queue/notebooklm/remake_2026-10-20/batch2/`. The SG3 wave (brief at scratchpad sg3_brief.md) settles center, winger, defender, goaltender, breakouts, offensive_zone_play, defending_the_rush and faceoffs: rows (m), (n), (p), (q), plus the (r) CARHA backswing and goalie-race limbs. Their packs follow after the SG3 commit. 17 needs regenerating from a rebuilt pack once the forechecking page edit is committed. The shared focus.txt gained: every top-ten item with a limit says its limit; never say gate, absolute or mandatory (4,559 chars).
- **Source gaps found by the Detailed reviews (21 Oct):** rows (a)–(l) were fixed in the SG wave; the record is `project/reviews/sg_source_gaps_2026-10-21.md`. Still open:
  - (n) Gate nit, SG 21 Oct: breakouts facts :107/:528 say "a clear shot before expiry never ices", where the body says "released". Heard alone it is unclear whether "before" refers to the shot or the landing, and "ending it at level strength, not 5-on-3" is cryptic. Defender :639 has two colons in one sentence.
  - (o) Closed by SG2 (record sg2_goalie_race_carha_backswing_2026-10-21.md).
  - (p) offensive_zone_play: CM :1156 "ends your game in most" understates the ejection for the facing-the-glass hit. Every book ejects, including USAH Casebook 608. The rim keep-in (:279) teaches a body-to-wall act with no boards short form. :292's Options facts line omits the third D variant at :909 (content-review, low priority).
  - (q) faceoffs: :404 defines "boards-side" as a circle, but every alignment uses it for one side of a circle (:426–428). :541 and the facts line above it say "clear the inside winger's shooting lane" on the D one-timer, where the shooter is the defenceman. Heard alone, "clear the lane" can also mean moving a defender, which is interference.
  - **SG5 (21 Oct) closed these rows:** (m) remainder, (r), (s), (u), (v, refuted), (w), (x), (ab), (ad), (af), (ah), (ai), (aj), (al), (an), (ao), (ap), and the equipment IIHF 10.3 note. The record is project/reviews/sg5_settle_for_notebooklm_2026-10-21.md. Optional minors still open:
    - OIC facts :279: "in non-checking play" has lost "anywhere". A 200-char substitution is in the record.
    - "never turn your back to the checker" stands at risk_management :44/:444/:460, core_principles :215 and rules_primer. It is undefined in voiced-alone layers; use "anyone coming at you".
    - team_play_and_culture :133 links to #line-changes-at-a-stoppage with "has the rest". The sentence lives under #the-consequences.
    - uk_rules "or cage cracks" is written rule only for men's U18 (202.2). Elsewhere it is advice.
    - The UK concussion guidance's reach to Scotland and Northern Ireland is unverified on disk.
    - IIHF 202.3: does it reach British U19 play?
    - game_management :243: the full-ice press "both defencemen pinching" has no gate.
    - OIC :307 "56.5 a game misconduct above it": NHL/PWHL only impose it on injury. It errs strict.
    - USAH 640(d) is stated without its stick-above-the-knees condition.
    - HC 6.11(d)(i) on zone_entries: "only once made" is narrower than "attempts". It errs safe.
    - The pages on hold for NotebookLM batch 2 keep their old rows: (n) breakouts, (p) OZP, (q) faceoffs, (t) the sg3R minors. Verify whether SG3 already closed (n)/(p)/(q).
  - (t) **sg3R MINORs.**
    - The CARHA 32(d) one-game suspension is missing from the backswing body sites (center, winger, defender, goaltender, faceoffs, zone_entries, NZ). Consider "ends your game and the next".
    - breakouts :528 omits High School from the USAH 624(b)(1) list.
    - defender :278: NHL 56.2(iii) and PWHL 57.2(iii) fit the walk-out better than (i); the USAH 625 Note and Casebook 609 Sit. 2 fit better than 625(a)(4).
    - DTR :330 voiced alone attaches the HC 7.5(a) tier to head first into the boards, where 7.5(c) is a match. The next line carries it.
  - **SG4 (21 Oct) closed rows (y), (z), (aa), (ac), (ae), (ag), (ak) and (am).** The record is project/reviews/sg4_source_gaps_from_detailed_2026-10-21.md. Optional minors still open:
    - scanning facts :380 is telegraphic, and the :390 gate lacks "can't see you coming";
    - the PWTP CM :1017 and the practice_and_development :360/:382 bullets lack the facing-the-wall fallback;
    - getting_started KT4's bare "tucked chin" sentence;
    - the "can end your game" goalie-charging line in shooting understates HC, CARHA and USAH, where it is mandatory;
    - the British U10/U12 non-check hit tariff is untraced.
    - The time_and_space "most without" premise was refuted (HC 8.3(i) and CARHA 66(a) reach it). The coordinator's brief was the defect.
  - Each needs a layer test and a safety-reviewer.
- **Detailed status (21 Oct 14:10): COMPLETE.** All 39 Detailed (ElevenLabs, eleven_v4) episodes are published in place, keeping their guids. Each was safety-reviewed to SHIP and transcript-checked against its script. The last was Rules Primer (36f9970). Credits left ≈ 0.1M of the 2.995M top-up.
  - **Known label error in published Detailed episodes (MINOR, errs strict, no re-record needed).** center, defender, goaltender, DTR, DZC and game_management say "a two-handed shove is a cross-check, whatever your blade is doing". That is false under USAH 609, but the instruction itself (never shove) is right everywhere. The queued scripts were fixed.
  - **Airway exception.** Brief item 21's "don't move them" omits CRT6's airway exception. That is stricter, so it is safe. The rules_primer script adds it.
  - **Publish helper:** scratchpad pubdet.sh. It transcript-checks the recording, archives v1, installs the master and encodes it. Then run `upload --style principles --go` and commit podcast-principles.json.
  - **Brief:** scratchpad detailed_brief.md, items 1–26.
- **Detailed production started (21 Oct ~01:15):** brief at scratchpad detailed_brief.md, and it carries the Basics review lessons. Writers dw-center, dw-defender and dw-goaltender write to `podcast_style_b/detailed/<stem>.md`. Each then gets a safety review, synthesis at cap 9320, and publish in place (`--style principles --doc`, archive the v1 WAV first). Next batch: the systems pages.
- **GN sweep missed diagram text (found 21 Oct):** about 449 string lines across 30 `site/src/diagrams/*.mjs` modules contain he/him/his/himself, in captions, descriptions and labels; some refer to opponents. The owner's ruling is "they" everywhere. Needs one agent per module group, then a build-diagrams run and check_absolutes. Heaviest: zone_entries 45, positions 38, breakouts 33, neutral_zone_systems 25. on_ice_communication.mjs :262 "his partner and his goalie" is still open.
- **Readability programme complete (20 Oct):** all 39 pages passed (W4/W5 record w4_w5_readability_2026-10-20.md).
- **SW sweep committed (20 Oct; record sw_cross_page_sweep_2026-10-20.md)** for 18 pages. goaltender is held back for its own commit (s1R5 CLEAR). Optional goaltender minors: :1098 add "with an attacker on you"; :643 double negative; :388 "soft stick … cover it" has no crease condition; :1622 omits USAH 614(c)(4).
- **Save-then-cover siblings:** IIHF Situation 63.1 (a freeze must come "straight off" the save) and HC 10.2(a) (a goalkeeper freezing outside the crease) are missing outside goaltender. Done for the 9 FZ pages; only on_ice_communication is still open (s1R).
- **USAH 601(d)(9) spectator limb:** check every sibling that prices pucks fired out of play after a stoppage (s8R). Done in on_ice, defender and the 9 FZ files; the rest is open.
- **"five-man" leftovers:** the offensive_zone_play.mjs captions :301 and :1239 (puck_support :491 and the OZP §3 heading are done).
- **md_to_speech:** Hockey Canada "clause ii" / "clause v" in prose is voiced as bare letters; expand it to "clause two/five" (fz-aR, fz-bR). "U12 is" read in lower case at sentence start; "Jr/Sr" read as "Jr or Sr" (winger :747).
- **special_teams :626 prevalence claim** ("commonly described as a current NHL default"): weak; reword to "one common option" or source it (s7).
- **Siblings of the W2 corrections:** run a layer test for each of these:
  - save-then-cover being "out in front" only, with Hockey Canada "points both ways" (goaltender.md, defender.md);
  - the medical-cover rule scoped to an EIH fixture (equipment, conditioning_and_recovery, getting_started);
  - the Elite League practice neck guard (equipment);
  - CARHA 32(d) "at least a one-game suspension" across the corpus. The owner ruling of 19 Oct is only partly propagated.
- **neutral_zone_systems KT8:** lost the options "a stretch forward behind a wall… or a dump you chase", which narrows a tactical KT. Consider restoring one option. Also :946 trailer quote drift (ADDED '.') (Z gate).
- **Z wave done 20 Oct** (record z_readability_2026-10-20.md; committed and pushed as f7686ae).
- **W2 wave done 20 Oct** (record w2_readability_2026-10-20.md; committed and pushed as b05098f). 18 of 39 pages done.
- **W3 wave done 20 Oct** (record w3_readability_2026-10-20.md; committed and pushed as 0bd425a). 24 of 39 pages done.
- **W4 wave dispatched 20 Oct ~19:35:** readability for shooting, risk_management, getting_started, team_play_and_culture, switching_positions, mental_game, passing_and_receiving and time_and_space (brief w4/brief.md). W5 will take how_to_watch_hockey, skating, scanning_and_anticipation, practice_and_development, puck_support_and_spacing, core_principles and reading_ice_hockey_diagrams.
- **Principles series pilot (pp1) dispatched 20 Oct:** a plan at project/podcast_principles_series_plan.md, plus Winger pilot scripts for Detailed and Core. Core is for a typical U12 player on full ice and assumes non-checking (owner, 20 Oct). Scripts go to the owner before any synthesis.
- **NotebookLM pilot (owner action):** the Winger pilot files are in `.podcast_queue/notebooklm/pilot_winger/`. The shared instructions.md was rebuilt with the new text on 20 Oct. Waiting for the owner to generate the episode. Then review it for source-reference count (target 0), rules time, the checking gate, board posture and injury response.
- **NotebookLM prompt rewrite done 20 Oct** (record notebooklm_prompt_rewrite_2026-10-20.md; committed as 8539ca2).
- **special_teams KT10:** "Screen with both feet clear of the red crease line" dropped "outside the paint". Align it with offensive_zone_play KT4 ("clear of the crease and its red line") (Y gate).
- **faceoffs :874 and the header (rules-verifier):** the header's "the 2026/27 edition ejects the centre" is now flat too (Y gate). "Under the IIHF 2026/27 book the first violation now removes your centre" sits beside :361's "premature movement … only gets a re-drop". 2026/27 76.7 still re-drops for moving early. Scope :874 to encroachment, contact and positioning (Y wave, y3S3; the error is harsh-direction).
- **faceoffs "two minutes" shorthand** at :48, :759 and :780: USA Hockey 402 pro-rates youth minors (1:00/1:30). Consider "a minor" (Y wave, y3S3; informational).
- **Siblings of the faceoff second-violation, moving-early and replacement-taker claims:** centre.md, rules_primer.md and uk_rules.md need a layer test for the Hockey Canada 6.5(a)/6.2(d) early-movement ejection, the second-violation tiers and the "contact is never free" wording (Y wave).
- **conditioning KT14:** the British red flags name three examples, but not blood-thinning therapy. That flag fires on a player who looks fine, and only CM :610 and the body carry it. Consider adding it (Z wave, z3S).
- **neutral_zone_systems facts:** the trapezoid facts line names only USA Hockey and Hockey Canada. No facts line carries CARHA 58(b) or 61(b) (Z wave, z1S).
- **check_readability:** also joins blockquote paragraphs separated by a bare `>` line (z2, z3). Fix it together with the Related-line row, between waves.
- **faceoffs USAH 602(a):** "plan on the match" at about :615 (facts), :628 (body) and :1234 (CM) has no suspension limb. Under the OR ruling it may appear at most twice per document, so decide which two sites carry "a likely multi-game suspension" (Y wave, y3).
- **check_readability:** counts a whole blockquote, including a long `**Related:**` nav line, as one paragraph, so page headers are inflated. Exclude Related lines, or measure blockquote paragraphs separately (Y wave, y3).
- **SG7 and SG8 are CLOSED for 25 content files** (record: project/reviews/sg7_sg8_boards_line_and_carha_ban_2026-10-21.md). What is still open:
  - **SG7 remainder.** About 29 diagram caption and label strings still say "back to the checker". zone_entries says "never turn your back to an oncoming checker" at :427, :461, :564 (facts), :573, :925 and :964, and in its zone_entries.mjs captions :378/:419. special_teams :842 still says "five-man". DTR facts :330 opens "Hitting a man's back" (pronoun ruling). Fix it site by site, with a layer test.
  - **SG7 last bits: DONE 21 Oct** (record sg7_last_bits_2026-10-21.md). The stale diagram-module comments are fixed in SG12.
  - **SG8 remainder.** Some facts lines had no room for the 32(d) ban; the body text on each page carries it. They are center :485, OZP :927, FC :864, switching :250, OIC :282, pwtp :708/:713/:714, defender :124/:581, NZ :735, faceoffs :567 and winger :102. Winger KT8 omits the CARHA 66(e) injury ban.
  - **Rules to keep (sg7_fix_rules.md).** 32(d) applies only to a game misconduct that comes with a MAJOR: not to a match (34(a)), not to a 53(a) minor plus game misconduct (32(b) reports that to the Chairman), and not to an accidental high stick (a reading, not a ruling). Where a CARHA ban sits beside a USA Hockey game misconduct, name 404(b) too.
  - CARHA 62(b) makes a follow-through above the shoulders a major even if no one is hurt. No slap-shot site except shooting :983 says so. Routing note: send agents to sources/hc.txt, not hc_2026-08-print.txt.
  - Cosmetic: the dz-walk-down-man label "goes with the carrier" crosses the blue line at 400px.
- **Site-reviewer pass for SG7/SG8: DONE 21 Oct** (sg7rSite, recorded in sg7_remainder_2026-10-21.md). The body_contact §6 heading renders in the TOC and its anchor works. All 7 caption hosts pass at 400px and desktop, in light and dark.
- **Facts-antecedent nits: OZP :360 is fixed** (it now names "rimming when you should reverse…"). FC :915 is fine, because "those two books" refers back to books named in the previous sentence. **Tool gap (scripts/, change between waves):** `check_facts_antecedents.py` does not catch a bare numeric pointer like "those two" or "both of them". Add that pattern.
- **NotebookLM remake COMPLETE, 22 Oct 06:45:** all 39 remade episodes are published. Track 28, Body Contact, was regenerated from a three-part batch 5 pack, reviewed SHIP-AFTER-CUT (scratchpad nlm_b5/r28.md) and published with three cuts (clipping priced only 'if it injures'; a high-stick 'waist' slip; the old 'back to the boards' line in the recap), 41:23, live at /audio/technique/body_contact_and_battles-341c4c81.m4a (HEAD 200, range 206). Optional remakes stay the owner's call (see below).
- **SG9 CLOSED 21 Oct** (record sg9_usah_next_game_once_per_page_2026-10-21.md). USA Hockey 404(b) is now stated once per page across 30 files. Still open:
  - per-book R2 candidates left by ruling (zone_entries :261/:378, DTR :460/:502/:891, defender :355/:889);
  - (the stacking-suspension check is DONE in SG11, record sg11_helmet_books_and_usah_stacking_2026-10-22.md; open there: whether 615(f) stacks with 404(b), which the book does not say)
  - forechecking :663 and OZP :1000 list "a hit from behind" as a game misconduct example. Under USAH 608(a) it can be a minor plus misconduct; consider "a major for a hit from behind". This errs on the harsh side.
  - The earlier "older candidates" are covered by the once-per-page lines: faceoffs :1222 by :295/:306, puck_handling KT10 and the CM cage-grab by :491/:530, and center facts :765 by :732.
- **Site-reviewer pass DONE 21 Oct** (record site_review_pass_2026-10-21.md). Every deferred item passes, with 0 bare glyphs, 0 panels and a clean console across 39 pages × 2 widths × 2 themes. New rows:
  - sr1, sr2, sr4 and sr5 are DONE 21 Oct; the §10/DZC table overflow and the faint dark scroll shadow are DONE in SG12 (sg12_site_leftovers_2026-10-22.md).
  - **DONE 21 Oct (record basics_nav_and_diagram_titles_2026-10-21.md):**
    - The Basics now appears in the header and on the home page (owner request).
    - All 204 diagrams have short accessible names. The rink-map-end-zone title is fixed.
    - Owner's call: ☰ for "Contents" below 480 px may read as a pop-out menu.
  - **Accessibility: the figcaption aria-hidden issue is FIXED (record figcaption_a11y_2026-10-21.md).** Still open:
    - Diagram `<title>`s: 85 fall back to the diagram id (`shortTitle()` in site/scripts/lib/rink.mjs), so a screen reader announces e.g. "Nz 1 4". 58 titles repeat inside their own caption.
    - rink-map-end-zone has no title, so its image has no accessible name. Fix it in its diagram module.
    - Stale comments at rink.mjs :597 and build-diagrams.mjs :387–389 still describe the old arrangement.
  - nz-1-4 labels DONE in SG12. Open: diagram leader lines start at each token's centre and cross its own letter (placeLabels in rink.mjs, all diagrams); other full-sheet diagrams may have labels crossing painted lines (no checker measures it).
  - sr3 is DONE (hfb_scope_and_sr3_2026-10-21.md); the forechecking :808 CARHA leftover is DONE in SG10 (sg10_small_accuracy_rows_2026-10-22.md).

- **equipment :441:** the IIHF prints "opposing Player(s)" with a capital P, while the shared quotation uses NHL/PWHL casing. Note it if the quote is ever credited to the IIHF alone.
- **X wave done 20 Oct** (record x_readability_2026-10-20.md; committed and pushed as d93a658): readability pages 5–7 (equipment, playing_without_the_puck, game_management). Next by ranking: offensive_zone_play, special_teams, faceoffs, defending_the_rush, breakouts, center, defensive_zone_coverage, zone_entries, shooting, defender, risk_management, …
- **V wave done 20 Oct** (record v_readability_2026-10-20.md; committed and pushed as b06fb8e): readability pages 2–4. check_readability's sentence splitter is fixed (it now splits after closing quotes and before ⚠️/flags), so mean and longest sentence figures dropped on marker-heavy pages: body_contact's longest went from 169 to 107, rules_primer's from 132 to 69. Next by ranking: equipment, playing_without_the_puck, game_management, offensive_zone_play, special_teams, faceoffs, defending_the_rush, breakouts, …
- **Owner answers, 20 Oct:** both content rulings are applied (U wave). Readability: page by page, worst first.
  - Still open (no owner needed): search the IIHF Situation Handbooks for any puck-carrier vulnerability ruling.
### Also open from this session
- **Decided 20 Oct:** the phone-bar `audio-idle` hook stays in essentials-view.js. It loads synchronously in <head>, while audio-player.js is deferred, so moving it would shift the layout on first paint (sa).
- offensive_zone_play "five-man setup" sits next to "five-man rotation" (:285/:286).


## Triage verdicts, chunk 1

# Triage r1 — chunk c1 (tested at HEAD a672681, 22 Oct 2026)

| # | row (first ~10 words) | verdict | evidence / current location |
|---|---|---|---|
| 1 | SG10 DONE (22 Oct): eight agents re-tested nine accuracy rows | DONE-RECORD | Status note on finished work; record already exists (sg10_small_accuracy_rows_2026-10-22.md). Move it out of the plan. |
| 2 | [W31 amber on citations] three W31 amber runs land on a rule number | FIXED | All three named strings are gone. risk_management "86(b) is the clause, not the rule" removed in b44e9d8; :771 now reads "**CARHA 86(b):** … ⚠️ **Do not read that discretion as a way out.**" (amber is on the instruction). game_management "640(g) and 640(h) reach only…" removed in 550e403; facts :179/:180 carry no ⚠. body_contact "write a permission" removed in 550e403; :1208 is now "⚠️ **a seal that becomes a wrap can end your game.**" Side note: game_management :946 has an amber run that opens on a citation, "⚠️ **640(g): *"A major plus a game misconduct…"*". It is the same kind of defect but a different site, so make it a new P2 row if wanted. |
| 3 | [W31 nits] game_management/rink_map/others: long spoken chunks >2,500 chars… | FIXED (one sub-item not measured) | shooting: the IIHF ceiling is now stated at facts :175/:245 ("The IIHF writes no match penalty for anything…") and at :317/:539 ("None in the IIHF"). glossary: "reckless or deliberate" is gone, and the 609(c) contrast is present at :425 ("Rule 602(a) says one *"shall be assessed"*, though 609(c) says only *"may"*"). DZC: "one of the six" and "four-book comparison" are gone (:183 now lists all six books). bc: the trailer phrase "immediately after 603(a)" is gone. center: "appears nowhere in any edition on disk" is gone. forechecking: the trailer end reads coherently. Not measured: the "spoken chunks >2,500 chars" item. That needs an md_to_speech chunk census; if it is still wanted, make it a separate readability row. |
| 4 | [USAH 608(c) layer test] every site quoting Casebook 608 Sit. 1 | OPEN | The Sit. 1 units still have no 608(c) in the same unit. Most carry "plan on a match (602(a))" but not 608(c): playing_without_the_puck :827 (facts); puck_support_and_spacing :587; risk_management :851, :872; winger :557, :749, :774; defending_the_rush :432, :504; defensive_zone_coverage :499 (facts), :515; forechecking :765; game_management :899; offensive_zone_play :783, :926, :975; zone_entries :238, :850; body_contact :614, :739, :1186, :1199. Owner sub-question: does "plan on a match (602(a))" satisfy the requirement, or must 608(c) be named beside each unit? |
| 5 | [DZC long CM / glossary summary match] DZC CM :751 ~3,450 chars | FIXED | The longest DZC Common Mistakes line is now 937 chars (:862). Glossary Key focus and Key Takeaways no longer contain "can reach a match penalty"; KF item 11 (:23) now says "Plan on a match for a reckless charge under USA Hockey". The phrase was removed by commits including 9e8097b, e16a586 and 54221fc. |
| 6 | [USAH 602(a) reading — dissent] RESOLVED BY OWNER 1 Oct | DONE-RECORD | The row says it is resolved ("plan on the match") and is "kept for the record". Move it to a review record. |
| 7 | [USAH 602(a) pre-existing reckless sites] OWNER RULING 1 Oct… | FIXED | Applied in 550e403 ("USA Hockey's reckless match is 'plan on it'"). Every named site now says "plan on": bc :620 (628(c) "plan on one if it is reckless, since Rule **602(a)**…"), :672 (620(c) "plan on one if reckless (602(a))"), :1760 (639(c)), :1778, :1705 (622(c)), :1940 (619(b)); risk_management :749 (639(c), 602(a)); game_management :179/:894; offensive_zone_play :666/:1004; defending_the_rush :867. Residual wording to tidy: defender :275/:303 and conditioning_and_recovery :230 still say "604(e) allows a match", but each sits beside "plan on a match (602(a))", so I judge them acceptable. |
| 8 | [NHL/PWHL 43.5 late hit] wherever late-hit ejection "needs an injury" | OPEN (candidates only) | A corpus scan found no "needs an injury" late-hit sentence. These units still price the NHL late hit through 56.4/56.5 "only on injury" with no 43.3/43.5 in the unit: forechecking_systems :626 ("its 56.5 game misconduct only on injury"); rules_primer :492; body_contact :1671. Each needs reading to decide whether the unit is about a turned player. |
| 9 | [freeze-for-whistle excused while checked] rules_primer, puck_handling, breakouts, faceoffs | FIXED | puck_handling and breakouts now cite HC 6.12(b) twice each and CARHA 55(a). faceoffs :593 puts 74(b)'s "unless they are being checked" next to "55(a) makes deliberate delay a bench minor, its Note 2 telling referees to be strict on *"freezing the puck"*". rules_primer no longer cites the HC/CARHA being-checked exception for skaters: its "being checked" hits are the NHL goalie rule (:853/:855), and :1056 cites 61(b)/74(b) as penalties, not as an excuse. |
| 10 | [NHL 21.1 / CARHA 48(a) general match] sites citing 56.5 without 21.1 | OPEN (narrowed) | NHL half: on_ice_communication :307 ("**56.4** a discretionary major and **56.5** a game misconduct above it") has no 21.1 anywhere in the file. time_and_space :273 (facts) and :295 have no 21.1 in the file; :299 does carry USAH 602(a). Already done: rink_map :228, breakouts :175/:203, scanning_and_anticipation, offensive_zone_play, DZC, playing_without_the_puck. uk_rules :421 is IIHF-only and correct. CARHA half: these files cite CARHA 49/52/53 and have zero 48(a): passing_and_receiving, puck_support_and_spacing, goaltender, switching_positions, breakouts, faceoffs (candidates for a layer test). |
| 11 | [uk_rules IIHF tables] :369 cites "Table 7"… | FIXED | :409 now reads "**Table 7** (2025/26)…" and :423 says "Both table numbers are the 2025/26 book's; the 2026/27 book merges them into one Table 5". :132 sets out the merge. "No match-penalty tier" (:411) holds for 2026/27: I flattened iihf_rules_2026-27.txt, iihf_situations_2026-27.txt and every other IIHF .txt for "matchpenalt", and all return 0. |
| 12 | [bc :661 CARHA intentionally] "No CARHA rung leaves you on the ice" | FIXED | Now :747: "No CARHA rung leaves you on the ice — **an intentional hit from behind** is a minor and game misconduct at the floor…". The body at :766 is scoped the same way. |
| 13 | [general deliberate-injury routes] sweep HC/CARHA 48(h)… | DONE-RECORD (one residual is UNCLEAR) | The row says it is superseded and is mostly a W31 work log. Its NHL 21.1 and CARHA 48(a) censuses repeat row 10, and its USAH half is covered by row 7. Shooting's high-stick ladder now carries 602(a) (facts :172). Residual, UNCLEAR: whether a rules-verifier ever settled "HC 7.1(c) vs Appendix D Note 1 scope". 7.1(c) is now cited in 11 documents as the residual route. To decide it I would need a review record of that ruling or a rules-verifier pass. |
| 14 | [rules_primer amber placement] :441 and :1001 new amber runs | FIXED | Both strings ("USA Hockey gives you no bare-minor floor…", "Nor is it two minutes under USA Hockey…") are gone. `git log -S` shows each was added in 2fc0d7e and removed in b12a829. |
| 15 | [USAH 602(a) deliberate-injury match] sentences naming 621(c)/609(c)-style "may also" | DONE-RECORD | The row says it is superseded by rows 6 and 7 and is a W31 work log. Its checks hold: shooting facts :172 carries 602(a), and the ozp CARHA item is row 17. Move it out of the plan. |
| 16 | [switching KT :563 length] ~3,110 spoken chars | FIXED | The longest switching_positions Key Takeaway is now 431 chars (:637, KT8). |
| 17 | [ozp CARHA 62(c)] facts :503, body :527, CM :1133… | FIXED | facts :536 has "a deliberate injury, or an attempt at one, is a match (62(c))". Body :562 says "match penalty under CARHA 62(c), NHL 60.4, PWHL 61.4, USA Hockey 602(a) and Hockey Canada's head-contact rule". The remaining coordinator call no longer applies: the CM tipping bullet is now :1153 and is book-neutral ("a high-sticking penalty, which no book caps at a minor"), with no CARHA-only match. |
| 18 | [winger CM :689 length] cross-checking bullet several thousand chars | FIXED | The bullet is now :796 at 501 chars ("**Cross-checking your way into net-front position.** Hold the spot…"). The longest winger CM line is 948 chars. |
| 19 | [uk_rules :601 EIHL instigator] "every other Rule 46 … automatic ejection" | FIXED | The sentence is gone. :407 reads "…except that an early Elite League instigator stays on the ice and goes to League review instead". :312 gives the EIHL "(2 minor + 5 major + 10 misconduct)", and KT18 :650 carries the exception. |
| 20 | [defender :468 amber] run opens on "⚠️ Hockey Canada 7.4(b)" | FIXED | The string "⚠️ **Hockey Canada 7.4" is no longer in defender.md. `git log -S` shows it added in dff5ae7 and removed in d698447. |
| 21 | [glossary length] Screen/Traffic/CM "Answering 'Screen!'" units 1,800–2,700 | FIXED | The longest Screen/Traffic units are now about 1,030–1,190 chars (:379 "Screening from outside the crease…", :469 "**Traffic** —"). No Answering-"Screen!" unit is over 900. |
| 22 | [risk_management] summary layers never checked in the HARSHER direction | OPEN (review task, not a located defect) | Still at plan :246. No review record covers this check for risk_management's current summary layers, and readability R1/R2 (b44e9d8, 2c7435b) have since rewritten them. It needs a safety- or rules-reviewer pass for overstated tariffs on the current KT/KF/CM. |
| 23 | The P1 doctrine: re-order before stripping… | GUIDANCE | A standing method note. Leave it. |

Counts: FIXED 14 (rows 2, 3, 5, 7, 9, 11, 12, 14, 16, 17, 18, 19, 20, 21) · OPEN 4 (rows 4, 8, 10, 22) · DONE-RECORD 4 (rows 1, 6, 13, 15) · GUIDANCE 1 (row 23) · UNCLEAR 0 as whole rows (row 13 has one UNCLEAR residual) · WRONG 0 · OWNER 0 as whole rows (row 4 has one owner sub-question).


## Triage verdicts, chunk 2

# r2 — triage of c2.md (OPEN_ITEMS "Open rows" section) at HEAD a672681

Method: grep/read at HEAD; TTS rows checked by rendering with `md_to_speech.py --only <stem> --out triage/r2ssml/<stem>` and reading de-tagged SSML; tables via `check_tables.py`; readability via `check_readability.py`; panels via `check_callout_flow.py --panels --file`; dist built 22 Oct 10:25. Line numbers are HEAD working-tree lines.

## Header / owner-ruling block

| # | row (first ~10 words) | verdict | evidence / current location |
|---|---|---|---|
| 1 | "Re-triaged 19 Oct 2026. The previous 670-entry section…" | DONE-RECORD | Status note about a finished triage; archive exists. |
| 2 | "Recent rounds, all committed and pushed: T1 277ece1…" | DONE-RECORD | Commit list. |
| 3 | Analytics: keep GA; fix infra/cloudfront.tf:120-121 comment | FIXED | infra/cloudfront.tf:117-122 now: "The CSP names one external family of origins: Google Analytics … which production loads when PUBLIC_GA_ID is set". |
| 4 | Layout: keep In-short and facts; "What it costs" label-only… | DONE-RECORD | Owner decisions, nothing to do. |
| 5 | PWHL is a standing sixth book… | GUIDANCE | Standing rule. |
| 6 | Head-reaching hit from behind: harsher of Rule 43 and 48 → content wave | DONE-RECORD | Applied in c35d177 (record or_owner_rulings_2026-10-19.md); e.g. rules_primer:465 "NHL and PWHL, if it reaches the head: the harsher of Rule 43 and Rule 48"; also shooting:583, winger:556, body_contact:764. |
| 7 | CARHA 32(d): "at least a one-game suspension" → content wave | DONE-RECORD | Applied (OR record item 2); see row 18 for the listed sites, all now "at least". |
| 8 | EIH R&R reach to Scotland/NI: unsettled, play as if → content wave | DONE-RECORD | uk_rules:29, :168 "is unsettled … so play as if it does"; equipment:109; practice_and_development:3. |
| 9 | USAH 602(a): add likely multi-game suspension → content wave | DONE-RECORD | OR record :40 — implemented as "a likely multi-game suspension", at most twice per document, exact levels in owner passages (e.g. team_play:557, shooting:573). Many "plan on a match" sites deliberately lack it per that design. |
| 10 | HC head-first Q1–Q5 treated as answered… | DONE-RECORD | Answered. |
| 11 | HC goalie HFB harsher of 7.5/8.5; HC slide 8.6/8.7; ear test DONE | DONE-RECORD | shooting:579 "Hockey Canada charges the harsher of 7.5 and 8.5"; body_contact:1343; OR record item 6 (slide). Ear test done. |
| 12 | Minor items the coordinator decides, no owner needed… | GUIDANCE | Decisions recorded (tactics ratio: none, worklist only, etc.). |
| 13 | "LO wave committed 20 Oct (record lo_leftover_rows…)" | DONE-RECORD | Status note; record exists. |
| 14 | "Line numbers are working-tree lines at time of check…" | GUIDANCE | Method note. |

## Cross-file claim sweeps

| # | row | verdict | evidence / current location |
|---|---|---|---|
| 15 | "take it on your forearm and hip" board posture in inherited docs | OPEN (partial) | LO demoted on_ice (0 hits now), defender KT10, passing KT14/CM. Still carried: conditioning_and_recovery **KT :685**, CM :613, body :204/:210; getting_started :492, CM :659; switching_positions :211/:423/:438; zone_entries :355/:465/:476/:576/:599; defender :144, CM :907; passing body :195/:215. Needs per-limb KEEP/DEMOTE judgement (conditioning's shoulder section may be a legitimate KEEP). |
| 16 | "minor/female" misheard by TTS | FIXED | 0 occurrences of "minor/female" in content/ (removed across c35d177/b44e9d8/9d28abc). |
| 17 | Stale "four books" frames (corpus holds six) | FIXED | None at the listed sites; "four-book split"/"carries all four" gone from defender/center/game_management. Residue only in trailers (body_contact:2108 "only one of the four books", faceoffs:1316) — provenance, low. faceoffs now "all six books" (:741, :774, :783). |
| 18 | CARHA 32(d) flat one-game, no "at least" | FIXED | breakouts:215 "32(d) adds at least a one-game suspension"; offensive_zone_play:716; shooting:161, :192; playing_without_the_puck:740; defensive_zone_coverage:597 — all "at least". |
| 19 | Slash voiced as "or" (puck_support :587, defending_the_rush :731) | FIXED | No prose slash left in puck_support; defending_the_rush only "Junior/Senior" (:429) and a quoted "penalty shot/optional minor" (:768), where "or" is the correct reading. |
| 20 | HC 8.5(b)/7.1(c)(iii) injure limb missing | FIXED | risk_management:772 "Its 7.1(c)(iii) match for 'attempting to kick or deliberately kicking'"; passing:486/:504 "Hockey Canada 7.1(c)(iii) and CARHA 48(c) (any attempt, or a deliberate kick)"; winger:551, center:485 carry 8.5(b) mandatory. |
| 21 | HC 6.1(g) net-off not named; game_management lacks USAH 610(d) | FIXED | game_management:625 and :638 name 6.1(g); :638 "USA Hockey 610(d) makes a deliberate one a minor"; goaltender:823 names 6.1(g). |
| 22 | Missing PWHL: goaltender 81.1, special_teams 68.2, rules_primer :775 | FIXED | goaltender:789-793 "NHL and IIHF Rule 81.3 and PWHL 83.3"; special_teams:687, :716 "PWHL 70.2"; rules_primer:765-780 carries PWHL (3 mentions). |
| 23 | "Hockey Canada 10.1(i)" citation form (cosmetic) | OPEN (cosmetic) | Listed sites now "Hockey Canada 10.1" (breakouts, DZC:178/:204, body_contact:1148/:1164) but goaltender:673 still "Rule 10.1(i)" and corpus uses "10.1(ii)"/"10.1(v)" elsewhere — consistency choice unmade. |

## Per file

| # | row | verdict | evidence / current location |
|---|---|---|---|
| 24a | rules_primer :462 HC ladder states condition before scope | UNCLEAR | Original line not identifiable; current HC hit-from-behind ladder at :466 shows no scope/condition inversion. Need the original sentence. |
| 24b | rules_primer :1157 KT "ask which IIHF edition" no Elite League half | FIXED | KT10 :1161 "outside the Elite League, which plays the 2026/27 IIHF book…". |
| 24c | rules_primer :961 heading level | FIXED | No heading-level jumps in the file (## 9 :948 → ### :950/:965/:988). |
| 24d | rules_primer tables at 0 headroom / dropped from audio | OPEN | check_tables: :899 "66 chars and 0 rows of headroom"; :1018 dropped (6 cols, 23 rows, cell 340). No inline-voicing check recorded. |
| 24e | rules_primer speech: run of 19 consecutive "Important." | OPEN | Rendered SSML: max run of 19 consecutive `<p>` opening "Important." still. |
| 24f | rules_primer "Fourth, If" | OPEN (renderer) | :282 "4. If the race is too close to call" → SSML "Fourth, If the race…". |
| 24g | rules_primer "under ten is" lower case | OPEN (renderer) | :81, :245 "U10 is played…" → SSML ". under ten is played cross-ice". |
| 24h | rules_primer 2 quote-drift flags | OPEN (low) | check_quote_drift: line 430 ADDED '.' (usah); line 1201 CASE "match" vs "Match" (carha). |
| 25a | uk_rules KT9 "ask which IIHF edition" | FIXED | KT9 :632 "The Elite League plays the 2026/27 IIHF book; anywhere else, ask…". |
| 25b | uk_rules "five (5)" spoken "five (five)" | FIXED | No "five (5)" in file. |
| 25c | uk_rules "U12 is" read lower case | OPEN (renderer) | SSML: ". under ten is a different format again", ". under twelve minors are three minutes". Same renderer cause as 24g. |
| 25d | uk_rules trailer lacks R&R 3.1/17.1 | FIXED | :670 "cited here for Rules 1.1, 3.1 and 17.1". |
| 25e | uk_rules EIHL Casebook cited "Version 1.1" where disk says 1.0 | WRONG | sources/eihl_casebook.txt:12 "CASEBOOK 26-27 Version 1.1 080926"; :17 "Replaces Version 1.0". sources/README.md:2217-2222 records the 1.1 PDF is byte-identical to disk; "1.0" is the replaced-version field. |
| 25f | uk_rules KT17 omits three EIHL Casebook 46 limbs | UNCLEAR (likely close) | KT17 :~650 "Expect a fight to end your game…" is a deliberate kernel; limbs live in body. Close unless a dropped limb is safety-bearing. |
| 25g | 34 headers say "every level of UK hockey runs the IIHF book" | OPEN (low) | Still in 34 files (e.g. puck_handling:3 "every level of UK hockey runs the IIHF book, amended locally"). "amended locally" may suffice — judgement. |
| 26a | body_contact :88/:89 near-duplicate CARHA facts | FIXED | Merged in LO (record lo_leftover_rows). |
| 26b | body_contact "one (1)" spoken twice | FIXED | No "one (1)" in file. |
| 26c | body_contact :1656–1661 amber runs open on a citation | FIXED | LO moved hazard to lead at :1675 etc.; no bare-citation `⚠️ **<book> <n>**` runs remain in content (only puck_handling trailer). --panels 0. |
| 26d | body_contact CM layer 78% rules-bearing | WRONG | Owner 19 Oct: tactics-ratio has no target, worklist only; CLAUDE.md reframe says body_contact's ratio "should not be driven down". |
| 26e | body_contact §5/§12 callout stacks | OPEN (listener only) | --panels 0 for the file; --stacks still: §9 8 in a row (:1333-1347), §12 7 (:1671-1683), §5 5 (:721-729). Reader side fixed; spoken "Important." runs remain. |
| 26f | body_contact table at :1648 0 chars headroom | FIXED | Now :1656 "3 chars and 2 rows of headroom" — near-limit worklist only. |
| 26g | body_contact content-review question on 43 EIHL mentions | UNCLEAR | Now 72 EIHL/Elite League mentions; question itself unstated — needs a content-reviewer brief. |
| 27a | game_management :939 HC J/S summary missing cross-check limb | FIXED | :898 "Hockey Canada Junior/Senior: … a head-high cross-check…(7.7(b))". |
| 27b | game_management :894 facts at 299/300 | WRONG | At cap is conforming; check_facts passes (lines :624, :897 at 300/300). Worklist, not defect. |
| 27c | game_management :143 promises risk_management "carries all four books" | FIXED | No "all four"/"four books" in game_management body. |
| 28 | goaltender :1246 charging-ejection list lacks EIHL Casebook 42 | FIXED | :1246 "The Elite League does amend charging — … the EIHL Casebook makes a game misconduct mandatory". |
| 29a | defender :244 crease cover lacks HC where-you-are limb | FIXED | :244 "Hockey Canada words it as an infraction inside the crease, so a puck just outside smothered while you lie in the paint can be a shot too." |
| 29b | defender :867 USAH 639(b) without 602(a) | FIXED | :866 "…mandatory major plus game misconduct (639(b)) — plan on a match (602(a))". |
| 29c | defender :462 "doubles, two of the three penalties that eject you" | FIXED | Phrase gone. |
| 30 | winger :98 "fallback" vs "last resort" | FIXED | :98, :126, :800 all "last resort"; "fallback" only in trailer :895. |
| 31a | faceoffs "out or deep" | FIXED | Phrase gone. |
| 31b | faceoffs cheating-back for In-House only | FIXED | :1298 "Do not cheat back: moving early is a violation." (unscoped). |
| 31c | faceoffs "Fourth, If" | OPEN (renderer) | Same renderer cause as 24f (numbered item starting with a capital). |
| 31d | faceoffs Overview 78% / CM 67% rules-bearing | WRONG | No ratio target (owner 19 Oct); worklist only. |
| 32a | breakouts "no book lets a goalie freeze a rim" vs USAH Situation 11 | FIXED | :1120 now cites Situation 11: "Neither helps a goalie who has left the crease to sit on a rim…" |
| 32b | breakouts :966 cites NHL 84.2 alone | FIXED | :967 "NHL Rule 84.2 (PWHL 86.2)"; :977 IIHF 84.2. |
| 33 | defending_the_rush :1045 and KT9 HC blind side at end boards | FIXED | :1045 "under Hockey Canada an open-ice blind-side hit is charging too"; :335 facts 7.4(v) "open-ice". |
| 34a | offensive_zone_play :784 no CARHA 48(a) | FIXED | :803 "48(a) makes one mandatory for a deliberate injury". |
| 34b | offensive_zone_play "five-man setup" | FIXED | Gone. |
| 34c | offensive_zone_play "bodycheck" in a facts line | FIXED | Only in trailer quotation (:1249). |
| 35a | puck_handling :340 flat "penalty shot in all six books" | OPEN (low) | :340 "concedes a penalty shot in all six books (… USA Hockey 614(b) …)". usah.txt 614(b): "A penalty shot/optional minor penalty shall be assessed to the non-offending team" — USAH is the other team's option; passing:443 already says "shot or minor, other team's choice". |
| 35b | puck_handling 63.2(v) Note against 67.4 unresolved | UNCLEAR | Needs a rules-verifier to state the open question. |
| 35c | puck_handling :347 `[you]` insertion | FIXED | No "[you]" in file. |
| 36a | passing: no CM/KT carries HC crease where-you-are test | OPEN (low) | CM/KT carry no crease line at all; facts :443 lists HC 10.2(a)(v) without the "you in the paint" limb (body/defender carry it). |
| 36b | passing :440 "7.6 itself" in a J/S line | FIXED | Phrase gone. |
| 37a | glossary :295 HC ladder condition before scope | FIXED (probable) | :297 "The major and game misconduct is mandatory in minor and female hockey if…" — scope precedes condition. |
| 37b | glossary :415 HC 7.5 hit from behind with no 7.6 head limb | FIXED | :431 "A hit from behind that reaches the head goes to head contact instead under Hockey Canada (7.6; 7.7…)". |
| 38 | rink_map :224 deliberate USAH contact = charging, no Casebook 607 Sit 5 | FIXED | :224 "Its Casebook allows an exception — outside the privileged area … (Rule 607, Situation 5)". |
| 39a | special_teams :674 "Every book reports a game misconduct" unverified | FIXED | LO added trailer provenance; lo-dR verified in all six books. |
| 39b | special_teams :626 prevalence "not independently verified" | FIXED | LO reworded as honest disclosure. |
| 40 | neutral_zone :437 HC 7.4(c) mandatory match, needs rules-verifier | FIXED | :439 quotes "in such a way that they are unable to defend themselves" = hc.txt:6098-6100 "A Match penalty will be assessed to any player who charges an opponent in such a way that they are unable to defend themselves…". Claim hedged ("may well be that player"). |
| 41a | on_ice :641 "need not move that player yourself" | FIXED | Phrase gone. |
| 41b | on_ice :311 amber run opens on a citation | FIXED | :311 glyph now leads "⚠️ **a reckless check there is a major plus a game misconduct (604(d))…**". |
| 42 | switching trailer "only" list omits CARHA 66(a) | FIXED | :649 "CARHA was read for Rules … 66(a) …". |
| 43 | skating :823/:833 "stick blade" | FIXED | No "stick blade" in skating.md. |
| 44 | shooting :1007 trailer "IIHF runs the enforcement the other way" | FIXED | Phrase gone. |
| 45 | practice_and_development concussion pointer only | FIXED | :561 "If you suspect one, come off, do not return that day…"; :608 same. |
| 46a | equipment "double minor" not defined | FIXED | :134, :813 "double minor (four minutes)". |
| 46b | equipment "CAN/CSA" spoken "CAN or CSA" | OPEN (renderer) | SSML: "says CAN or CSA Z two hundred and sixty-two point two". STANDARDS_BODIES (md_to_speech.py:459) has "CAN/BNQ" and "CSA" but no "CAN/CSA"; equipment:491/:495/:939. (Also: "Z262.2" read as a number, not a code.) |
| 46c | equipment ~28 citations never refetched | OPEN | No refetch record found; needs a source-verifier pass. |
| 47a | conditioning :5 "not medical advice" in dropped header | FIXED | SSML carries "It is a hockey document, not medical advice: where it says see a professional, that is the instruction." |
| 47b | conditioning :695 NIHL link on old path | FIXED | :699 uses `/2026/09/NIHL-1-and-2-ROC-2026-2027-1.pdf`, same as the 8 other corpus links. |
| 48 | getting_started "hockey 101" → "one hundred and one" | OPEN (renderer) | :226 / :228; SSML "hockey one hundred and one", "ASHL Hockey one hundred and one". |
| 49 | how_to_watch :733 "local primary text" | FIXED | Phrase gone. |
| 50a | playing_without_the_puck paragraphs over 1,200 chars (9, longest 4,353) | OPEN (reduced) | check_readability: 3 long paragraphs, max 2,378. |
| 50b | playing_without_the_puck :715 "none in the IIHF" | FIXED | LO: now "the IIHF has no match but can eject (42.4)". |
| 51 | "inside the faceoff dots" / "level with the opposing defenceman" undefined | FIXED (partial) | rink_map:449 now defines "Inside the dots… the ice between the two dots". "Level with the opposing defenceman" is relative plain English (winger ×5, core_principles, switching) — probably needs no definition. |

## Diagrams

| # | row | verdict | evidence |
|---|---|---|---|
| 52a | special_teams.mjs pk-nz-1-3 / pk-nz-1-1-2 / pp-umbrella captions unread | OPEN (partial) | LO edited pk-nz-1-1-2; no read recorded for pk-nz-1-3 and pp-umbrella. |
| 52b | offensive_zone_play.mjs:668 last citation-led amber run | OPEN | :675 `' ⚠️ USA Hockey Rule 625(b) and IIHF Rule 69.1 are stricter '` — still opens on citation. |
| 52c | puck_handling.mjs :427 title unscoped; :437 stale comment | OPEN | Title "The puck decides, not you" (:427) unscoped; comment at :437 says "THIS CAPTION CARRIES NO BOOK COUNT" while the caption at :434 says "In five of the six books" — comment is stale. |
| 52d | breakouts.mjs :520–522 and wall_contact_clauses.mjs :71 cite a KT6 that no longer exists | OPEN | breakouts.md KT6 is now "Sealed on the boards, rim it; over-skated, reverse it"; no "chin off" in KTs. Comments still cite it: breakouts.mjs:390, :503, :525-527; wall_contact_clauses.mjs:71, :84. |
| 52e | winger-arriving-at-the-line lacks CARHA lifted-skate | OPEN | winger.mjs:494-495 names NHL/IIHF/PWHL onside, USAH 630(a)/HC 6.11 offside; CARHA absent (comment :474 calls CARHA "UNSETTLED"). |
| 52f | Over-long captions | OPEN | diagrams.json: 92 of 204 captions > 800 chars; forecheck-press 3,397; forecheck-pinch 3,356 (619 words); breakout-wheel 2,670. |
| 52g | dz-collapse-corner ends on pointer "All six books are set out earlier" | OPEN | defensive_zone_coverage.mjs:423. |

## Readability / Site / sources / scripts / owner list

| # | row | verdict | evidence |
|---|---|---|---|
| 53a | 56 paragraphs over 1,200; 147 KTs over 60 words | OPEN (reduced, worklist) | check_readability now: 43 long paragraphs, 90 long KTs (glossary 0 long paras). |
| 53b | KT counts above 10 / whether 5–10 binds | DONE-RECORD | Row text itself says closed by owner 19 Oct (no cap). |
| 53c | item 2 "rules last" never applied to 19 R1-only docs | UNCLEAR | Not cheaply testable. |
| 53d | IIHF Table 16/14 in 17 documents (edition decision open) | UNCLEAR | gg_iihf_tables_2026-10-19.md exists; not re-tested. |
| 54a | ReadingTools.astro:9 stale path comment | FIXED | Header comment rewritten (reading time / Essentials switch); no stale path. |
| 54b | callout `<aside>`s lack a role | FIXED | remark-corpus.mjs:669 `{ class: 'callout callout-${kind}', role: 'note' }`. |
| 54c | global.css:951 stale anchor comment | UNCLEAR | :951 is now `.doc-header-note.is-warning` CSS; anchor comments live at :140-241 — need the original text. |
| 54d | ~24 literal `*` in `<main>` on 13 pages | OPEN | Built dist: 27 literal `*` on 14 pages, e.g. rules_primer trailer `…illegal equipment"* — a skater rule only`, center `(…penalty"* for a Player…`. Broken emphasis next to quotes in trailers. |
| 54e | AudioPlayer.astro:27 unversioned resume key | UNCLEAR | Comment :27-28 says key deliberately keeps `audio-position:<doc_id>` "so nobody loses their place" — looks deliberate; close or decide. |
| 54f | podcast.xml.ts:36 stale heading | UNCLEAR | :30-40 is a header comment on Apple/Spotify enclosure rules; cannot identify the stale heading. |
| 55a | rename hc_2026-08-print.txt | OPEN | sources/hc_2026-08-print.txt still present. |
| 55b | refresh ihuk_nihl_roc.pdf (325,259 vs 369,646 B) | FIXED | sources/ihuk_nihl_roc.pdf is 369,646 B (20 Oct). |
| 55c | README:2010 "NOT CONFIRMED" under the correction | FIXED | README:2026 now "*(Superseded note, kept as history: "⚠️ NOT CONFIRMED…". |
| 55d | README lacks note on HC 8.5(b) Note 1 slip | FIXED | README:2253 "A cross-reference slip in Hockey Canada's own book: 8.5(b) Note 1." |
| 55e | EIHL Roster/DOPS, EIH, IHUK policy docs not on disk | OPEN | No roster/DOPS/policy files in sources/. |
| 56a | check_layer_echo swallows Sources trailer into KT | OPEN | check_layer_echo.py:132-142 takes KT as everything to the next `## ` heading; trailer has no heading. |
| 56b | check_caption_echo compares against whole block | OPEN (mitigated) | Still `block_above()` (:82); a `--max-ratio` filter (:98) skips blocks >3× caption. |
| 56c | md_to_speech CAN/CSA, U12 casing, "Fourth, If", "hockey 101" | OPEN | See 46b, 24g/25c, 24f, 48 — all reproduced in SSML today. |
| 56d | md_to_speech "engine" field at :3863 | OPEN | :3863 still `"voice": {"engine": "long-form", "language": "en-GB"}` (Polly value; production is ElevenLabs). |
| 56e | unknown-flag handling (two exit 0, two traceback) | OPEN | `--bogus`: check_pointers exit 0, check_zones exit 0; check_tables/check_disclosures exit 2. |
| 56f | check_callout_flow.classify() keys on how a line opens | OPEN | classify() :207 unchanged in approach. |
| 56g | check_pointers hardcodes content root | OPEN | check_pointers.py:102, :175 `root / "content"`. |
| 56h | check_facts --near misses blocks at 14 | OPEN | --near reports blocks near MAX_COACHING_FACTS (8) only (:417-457); no HARD_MAX (14) total check. |
| 56i | check_quote_drift has no unflattened pass | OPEN | No flatten/unflatten option in check_quote_drift.py. |
| 56j | synthesize_style_b lacks `--doc-id` sidecar | OPEN | argparse :417-435 has no --doc-id. |
| 56k | podcast upload check reads local, not deployed feed | UNCLEAR | build_podcast_audio.py:1229/:1303 match local files by byte length; did not establish which check the row meant. |
| 56l | ~ten requested tools never built (parts B/E/H) | OPEN | Backlog; not re-verified tool by tool. |
| 57a | Owner decisions (collected): IIHF 48.1, HC 7.5 goalie, In-House reach, CARHA suspensions, What it costs, GA, In-short, 8.6/8.7, KT cap, tactics ratio, Check yourself, PWHL, PNIHL trailer, D-zone families, centre exception, panels, "(2) minor", *.local.md, ear test | DONE-RECORD | All answered in the 19 Oct block above (rows 3–12). This list duplicates it and should go. |
| 57b | Wave 34 Qs: USAH Level 1, caption trim, centre-fly label | OWNER | Not in the 19 Oct answered list. Question: decide USAH Level 1 handling, caption trim, centre-fly label (or confirm coordinator may decide). |
| 57c | dead `creaseThePuckDecides` spec | OWNER | Still at site/src/diagrams/center.mjs:777 (excluded from the list at :834). Question: delete the dead spec? (coordinator-level; not in answered list). |


## Triage verdicts, chunk 3

# Triage r3 (chunk c3), tested at HEAD a672681, 22 Oct 2026

| # | row (first ~10 words) | verdict | evidence / current location |
|---|---|---|---|
| 1 | body_contact :1661, Kneeing table cell: HC 7.8 "an opponent's knee" | FIXED | body_contact_and_battles.md:1669 cell now reads "Knee as the contact point, even an opponent's knee on an otherwise legal hit (Hockey Canada 7.8, from a double minor)". It matches facts :578 ("Hockey Canada 7.8 adds an opponent's knee 'on an otherwise legal hit'") and hc.txt:6409-6411. |
| 2 | body_contact :1148 facts / :1155 body: IIHF 101.1 boards limbs | FIXED | Facts :1151 "bar using the boards to push, pin or eliminate an opponent"; body :1158 "bar using the boards to push an opponent into them, pin her there or eliminate her from the play". All three limbs are present. |
| 3 | faceoffs :1051 empty penalty box bench minor; add the PWHL | FIXED | faceoffs.md:1040 "An empty penalty box is a bench minor under the NHL, the IIHF and the PWHL — Rule 68.2 (PWHL 70.2)". |
| 4 | rules_primer :19-22 four Key focus items are a bulleted list | FIXED | rules_primer.md Key focus (:11-25) is now all bold-lead paragraphs ("**Never hit anyone's head or neck.**", "**Drag your trail blade…**", etc.) with no list items. |
| 5 | rules_primer :1163 NIHL 1 & 2 RoC path superseded | FIXED | rules_primer.md:1167 links `uploads/2026/09/NIHL-1-and-2-ROC-2026-2027-1.pdf`. All 8 NIHL-1 links in content/ use the 2026/09 path, and no old path remains. |
| 6 | rules_primer :1102 covering puck with net empty ≠ awarded goal everywhere | FIXED | rules_primer.md:1106 now reads "a penalty shot, or with your net empty **possibly** an awarded goal". The flat claim is gone. |
| 7 | conditioning_and_recovery :695 same superseded NIHL path | FIXED | conditioning_and_recovery.md:699 is on the 2026/09 path (see #5). |
| 8 | equipment :935-936 and mental_game :781 edition notes carry inline ⚠️ | FIXED | mental_game.md:781 edition note has no ⚠. equipment.md :928-959 (the edition and limitation notes) has no ⚠ and no self-narration hits. The only nearby glyph is :927, the Bauer image-only booklet note in the Sources trailer, which is a different item. |
| 9 | global.css amber left bar contrast 2.1:1 vs 3:1 | FIXED | global.css:33-40 `--warn-border: #c26f1c` (was #e8a562); dark is #98672d, with a comment recording WCAG 1.4.11. Recomputed: 3.43:1 on --warn-bg and 3.21:1 dark. Record s_wave_2026-10-20.md:21. |
| 10 | global.css :951 stale anchor comment | FIXED | The comment now names the live id `#moving-a-screener--what-the-books-allow` (global.css:1022). s_wave_2026-10-20.md:22 lists "global.css :951 anchor" as fixed. |
| 11 | site-reviewer pass: 400 px diagram scene, 🇬🇧 wrap, special_teams bold run | OPEN | No record covers these three specifically (s_wave's sSite2 checked uk_rules and body_contact only). The 🇬🇧 is still in conditioning's Key focus (line ~20 of the section). This needs a browser; it was not tested here. |
| 12 | (a) NotebookLM episodes say "the document" | DONE-RECORD | prompt_constraints.md:14 bans "the document", "the website", "it says", etc. (8539ca2, then 1b76554/a306e2e/fdd7704). All 39 remade episodes are live (94f2bd9). |
| 13 | (b) NotebookLM episodes: fewer rules | DONE-RECORD | prompt_constraints.md:22 sets "Do not compare rulebooks… about one minute in ten". Remake complete (94f2bd9). |
| 14 | (c) Principles episodes too dense: detailed + core series | DONE-RECORD | Core series shipped as The Basics (13 episodes, season 8, basics_launch_2026-10-21.md). Detailed: "6e116ba Plan: all 39 Detailed episodes published" (21 Oct). The site has a third slot (/the-basics/, ed58a92, 49de5bf). |
| 15 | Open questions for owner before piloting (c) | DONE-RECORD | Answered by what shipped: both series run; the core series is 13 topics, not 39; names are "Playing principles" and "… — The Basics", in one feed as season 8. |
| 16 | Diagram captions voice full board-posture mechanics in forechecking | OPEN | site/src/diagrams/forechecking_systems.mjs:918 (forecheck-press) and :1299 (forecheck-pinch): "never turn your back to anyone coming at you on the wall, and never duck. Get your skates parallel to the wall instead, forearm…". The same text is in wall_contact_clauses.mjs:108 (possible shared constant), breakouts.mjs:1157, puck_handling.mjs:278 and scanning_and_anticipation.mjs:190. Under the owner's 23 Sep ruling forechecking *inherits* this, so it is a demotion candidate. |
| 17 | puck_handling crease-cover siblings: HC "both ways round" consistent | OPEN (minor) | goaltender.md has no conflicting statement. rules_primer.md:942 cites both 4.11(a)(v) and 10.2(a)(v) without contradiction, and center :591 and risk_management :732 say "five of six" consistently. **But defensive_zone_coverage.md:722 (facts) and :740 give Hockey Canada only the puck-in-crease test** ("Hockey Canada 4.11(a)(v), which its 10.2(a)(v) cross-refers to"). They omit that 10.2(a)(v) ("when the infraction occurs inside the offending team's goal crease", hc.txt:7642-7645) can reach a player standing in the crease with the puck outside it. That is a silent omission in the permissive direction for an HC reader. |
| 18 | U wave done 20 Oct (u_wave record; 684326e) | DONE-RECORD | Status note. |
| 19 | playing_without_the_puck ~:1124 "Situation 5 E, ⚠️ **And only one…**" | OPEN | playing_without_the_puck.md:1124 still reads "…against its own Situation 5 E, ⚠️ **And only one of the four answers sits in rule text**". |
| 20 | equipment :173 WNIHL "Full-face covering or half visor" quote | OPEN | equipment.md:173 is unchanged: "mandatory with a half visor, not with full-face — *'Facial protection (Full-face covering or half visor and mouth guard)…'*". There is no age line in the bullet. |
| 21 | Y wave done 20 Oct (4c85bd0) | DONE-RECORD | Status note. |
| 22 | defensive_zone_coverage :577 IIHF 101.1 "allows pushing and leaning only…" | OPEN (low, stricter direction) | defensive_zone_coverage.md:577: "Rule 101.1 lets two players chasing the puck push and lean into each other **only** 'provided that…'". It still omits 101.1's opening clause, "'bodychecking' is allowed when there is a clear intention of playing the puck" (iihf_rules_2026-27.txt:7592; v1.1 :7492). The context is moving a screener, so the effect on a reader is small. |
| 23 | CARHA 32(d) sites deliberately left without it | GUIDANCE | This is a standing decision with an "only if the owner wants" trigger. The owner's 21 Oct once-per-page ruling for USAH 404(b) is the precedent and points the same way. Leave it, or convert it to a spec note. |
| 24 | NIHL RoC link update (two content links) | FIXED | Duplicate of #5/#7. Both links are on the 2026/09 URL. |
| 25 | HC 2026-28 republication: check claims depending on old text | OPEN (partly done) | Confirmed reflected: Interp 6 crossbar (shooting.md:755/:770), 8.7 hips (sources/README.md:2245 "corpus already teaches the hips line"), and game_management.md:1170 "in lieu of a Minor Penalty". **Not checked: 4.7(a) Interp 2, 7.1(f), 10.4, 10.6(a) Interp 5.** "blocker or trapper" appears nowhere in content/. The diff also changes the penalty-bench exit ("or at the end of the period", hc.txt ~7744) and the 10.4 case wording (~7920). This needs one rules-verifier pass over the 23-hunk diff. |
| 26 | NotebookLM remake: owner APPROVED Winger pilot; batches, packs… | DONE-RECORD | 94f2bd9 "all 39 remade episodes live". Keep only the standing rules (packs as .txt, ≤10 per batch, Step 4 review before publishing) as GUIDANCE in the skill. |
| 27 | FZ wave committed 20 Oct + four leftovers | DONE-RECORD + 3 OPEN leftovers | (i) OZP facts :818 "Both books write a clause for your dump-in…": the line itself names Hockey Canada and USA Hockey, so the antecedent resolves within the line. Effectively FIXED/WRONG. (ii) **OPEN** special_teams.md:776 "The 63.2(vi) Notes let a goalie cover a save…" still names no PWHL 65.2(vi). (iii) **OPEN** OZP trailer: no "614" and no "clause v"/"10.2" anywhere in the italic trailer lines. (iv) **OPEN** md_to_speech: a bare "clause iv"/"clause v" (e.g. OZP :818 "Hockey Canada's clause iv") passes through as Roman letters. Tested: `to_speech("Hockey Canada's clause iv…")` → "Hockey Canada's clause iv…", while "10.2(a)(v)" does expand. |
| 28 | The Basics publishing support built 20 Oct; still to do… | DONE-RECORD (2 deferred OPEN) | Done: site review bsR2, titles, footer and sitemap, sticky gate (basics_launch_2026-10-21.md:43-44, :50-56). Header and home link: 49de5bf. **Still open (deferred):** downloads.astro and `[playlist].m3u.ts` have no basics format, and `podcast_queue.py` takes only `conversation\|principles`. |
| 29 | GN wave committed 21 Oct; gendered terms owner's call | OWNER (residual) | The owner ruled 21 Oct to keep "man-on-man" and "odd-man rush" (memory project_man_terms_ruling). **Question:** do "point man" and "your man" (109 hits in content/) count as established terms to keep, or as coinages to neutralise? |
| 30 | NotebookLM batch 1 follow-up (01, 29, 17, 31, 37) | DONE-RECORD | Superseded: all 39 remade episodes are live (94f2bd9). |
| 31 | Principles pilots revised to owner's notes (ppS5) | DONE-RECORD | Basics launched; all 39 Detailed published (6e116ba). |
| 32 | Principles production (21 Oct), credits, bw-1..6 scripts | DONE-RECORD | As #31. Basics: 13 episodes live. Detailed: 39 of 39 (36f9970 "39 of 39"). |
| 33 | The Basics launched (21 Oct)… open NON-BLOCKING items from bsR2 | DONE-RECORD (header) | The launch is recorded in basics_launch_2026-10-21.md. The chunk is truncated at this point, and its bsR2 items (the source-page link away from the player, the ep 13 duration wrapping at 400 px, the "his partner and his goalie" caption) continue in the next chunk. |


## Triage verdicts, chunk 4

# Triage r4: chunk c4 at HEAD a672681

Line numbers are current at HEAD. "SG3" = a5992f8 (SG3: settle eight pages for NotebookLM batch 2).

| # | row (first ~10 words) | verdict | evidence / current location |
|---|---|---|---|
| 1 | (a) source-page "Short episode…" line sits below the h1 | FIXED | ed58a92 removed the per-document "Short episode for newer or younger players" line; The Basics is now a nav item. Nothing left in site/src that renders it. |
| 2 | (b) episode 13's "· 11 min" wraps at 400px | OPEN | site/src/pages/the-basics/index.astro:81 `<span class="basics-ep__meta">· {minutes} min</span>`; global.css:3436 `.basics-ep__meta` has no `white-space: nowrap`. Render not checked. |
| 3 | (c) the owner has been sent the 13 titles | DONE-RECORD | status note |
| 4 | NotebookLM batch 2 (21 Oct): owner asked for batch 2… | DONE-RECORD | superseded by "NotebookLM remake COMPLETE, 22 Oct" (94f2bd9, all 39 live) |
| 5 | Source gaps (21 Oct): rows (a)–(l) fixed in SG wave | DONE-RECORD | header/record pointer |
| 6 | (n) breakouts facts "a clear shot before expiry never ices"; defender :639 two colons | FIXED | breakouts.md:107/:529 now "a clear released before expiry never ices"; "not 5-on-3" text gone (SG3 a5992f8). No two-colon sentence left in defender.md 560–720. |
| 7 | (o) closed by SG2 | DONE-RECORD | — |
| 8 | (p) OZP CM "ends your game in most" understates; rim keep-in; Options :292 | FIXED (first limb's premise WRONG) | Old string gone (a5992f8). CM :1158 now "in most books it ends your game — plan on it". Premise "every book ejects, incl. USAH" is false: usah.txt 608(a) "A minor plus a misconduct penalty, or a major plus a game misconduct" (OZP facts :926 says so). Rim keep-in :272/:283 now carries "skates parallel to the wall, head up and chin off your chest". :293 Options now names all three variants (five-player rotation / both D / weak-side D slides). |
| 9 | (q) faceoffs boards-side defined as circle; "clear the inside winger's shooting lane" | FIXED | faceoffs.md:405 "boards-side — the half of the circle nearer the side boards"; :536 "your inside winger stands in its line — on the drop they step out of it" (a5992f8). |
| 10 | SG5 (21 Oct) closed these rows… | DONE-RECORD | header |
| 11 | OIC facts :279 "in non-checking play" lost "anywhere" | OPEN | on_ice_communication.md:279 "an illegal check in non-checking play" |
| 12 | "never turn your back to the checker" at risk_management/core_principles/rules_primer | FIXED | now "never turn your back to anyone coming at you" (risk_management :44/:445, core_principles :215); string "back to the checker" absent from content/ |
| 13 | team_play_and_culture :133 links #line-changes-at-a-stoppage "has the rest" | OPEN | team_play_and_culture.md:133 still links `#line-changes-at-a-stoppage`; the "fixed when the puck leaves the offending player's stick" sentence is rules_primer.md:320, under `### The consequences` (:313) |
| 14 | uk_rules "or cage cracks" written rule only for U18 | FIXED | uk_rules.md:230 now: IIHF 9.7 (visor) + "Rule 202.2 says the same of full-face protection in men's Under-18 hockey" |
| 15 | UK concussion guidance reach to Scotland/NI unverified | OPEN | research question; no content change found |
| 16 | IIHF 202.3: does it reach British U19 play? | OPEN | research question; 202.3 not cited in content/ |
| 17 | game_management :243 full-ice press "both defencemen pinching" no gate | OPEN | game_management.md:244 "or to a full-ice press with both defencemen pinching" — no read/condition |
| 18 | OIC :307 "56.5 a game misconduct above it" (NHL/PWHL only on injury) | OPEN | on_ice_communication.md:307 "**56.4** a discretionary major and **56.5** a game misconduct above it (PWHL…)" — errs strict |
| 19 | USAH 640(d) stated without stick-above-knees condition | OPEN | on_ice_communication.md:309 "As **roughing**, 640(d) is a minor" (PWTP :507 carries the condition) |
| 20 | HC 6.11(d)(i) on zone_entries "only once made" | OPEN | zone_entries.md:235 "…can whistle a knowing play on the defending carrier, but only once made" — errs safe |
| 21 | Pages on hold keep old rows; verify SG3 closed (n)/(p)/(q) | FIXED | yes — SG3 a5992f8 closed all three (rows 6, 8, 9) |
| 22 | (t) CARHA 32(d) one-game ban missing from backswing body sites | OPEN (partial) | "fifteen inches" lines carrying the ban: center 2/2, winger 1/2 (:102/:112), defender 2/4 (:100 :124 :582 :595), goaltender 2/2, faceoffs 3/5, zone_entries 1/3 (:673 :680 :1238), NZ 3/6. Needs a per-site read (some lines may be facts lines without room). |
| 23 | breakouts :528 omits High School from 624(b)(1) | FIXED | breakouts.md:529 "USA Hockey from Youth 15-Only, Girls 16U or High School up" |
| 24 | defender :278 56.2(iii)/625 Note fit better | FIXED | defender.md:278 now cites "56.2(i) and (iii)… USA Hockey 625's Note and Casebook 609 Situation 2" |
| 25 | DTR :330 HC 7.5(a) tier for head first into boards | FIXED | defending_the_rush.md:330 "head first, the harsher of 7.5 and 7.6"; :331 carries 7.5(c) match |
| 26 | SG4 (21 Oct) closed rows… | DONE-RECORD | header |
| 27 | scanning facts :380 telegraphic; :390 gate lacks "can't see you coming" | OPEN | scanning_and_anticipation.md:380 "…race for the puck, not the player; see their numbers, pull up"; :390 "pull up if you can s[ee their numbers]" — gate is numbers-visible, still telegraphic |
| 28 | PWTP CM :1017 and practice :360/:382 lack facing-the-wall fallback | OPEN | playing_without_the_puck.md:1024, practice_and_development.md:360/:382 — no "already facing the wall" fallback (present elsewhere e.g. puck_handling :456) |
| 29 | getting_started KT4 bare "tucked chin" sentence | FIXED | getting_started.md:711 KT4 now leads "Head up, chin off your chest…" before "A tucked chin can break your neck" |
| 30 | shooting "can end your game" goalie-charging understates HC/CARHA/USAH | FIXED | shooting.md:337 "can end your game in every book — … mandatory under Hockey Canada, under CARHA in the crease or whenever it injures, under USA Hockey when reckless" |
| 31 | British U10/U12 non-check hit tariff untraced | OPEN | research question; uk_rules :383/:393 give formats, no tariff |
| 32 | time_and_space "most without" premise refuted | DONE-RECORD | record of a refuted brief |
| 33 | Each needs a layer test and a safety-reviewer | GUIDANCE | — |
| 34 | Detailed status (21 Oct 14:10): COMPLETE | DONE-RECORD | — |
| 35 | Known label error in published Detailed episodes (two-handed shove) | DONE-RECORD | no re-record needed; scripts fixed |
| 36 | Airway exception (brief item 21) | DONE-RECORD | — |
| 37 | Publish helper: scratchpad pubdet.sh | GUIDANCE | points at a past session's scratchpad; likely stale |
| 38 | Brief: scratchpad detailed_brief.md items 1–26 | GUIDANCE | same caveat |
| 39 | Detailed production started (21 Oct ~01:15) | DONE-RECORD | superseded by row 34 |
| 40 | GN sweep missed diagram text (~449 he/him/his lines) | FIXED | non-comment string lines with he/him/his in site/src/diagrams/*.mjs: only quotations of rule text (playing_without_the_puck.mjs:400–401, rules_primer.mjs) and code comments remain; on_ice_communication.mjs "his partner and his goalie" gone |
| 41 | Readability programme complete (20 Oct) | DONE-RECORD | — |
| 42 | SW sweep committed; goaltender minors :1098/:643/:388/:1622 | OPEN (partial) | :643 double negative still "No trapezoid under Hockey Canada is not freedom"; :388 "a soft stick drops it at your feet where you can cover it" (no crease condition); :1099 now carries "unless you are being checked" (≈ fixed); 614(c)(4) cited only at :443 — :1622 limb unverified |
| 43 | Save-then-cover siblings: only on_ice_communication open | FIXED | on_ice_communication.md:482 and :517 carry HC Interp. 3 clause ii and the NHL/IIHF 63.2(vi) Note ("That note covers a save made out front") |
| 44 | USAH 601(d)(9) spectator limb: rest open | OPEN | playing_without_the_puck.md:355 (facts) and :373 price after-whistle pucks via 601(c)(10)/601(d)(7) with no spectator limb (usah.txt:3402/:3442 "in the direction of a spectator"). OIC :186 and defender :79 carry it by wording; risk_management, game_management, goaltender, rules_primer cite 601(d)(9). |
| 45 | "five-man" leftovers OZP.mjs captions :301, :1239 | FIXED | remaining "five-man" in offensive_zone_play.mjs is only the id `oz-five-man-shape` and comments |
| 46 | md_to_speech: "clause ii/v" voiced as letters; "U12 is" lower case; "Jr/Sr" | OPEN | tested to_speech(): "Under clause v, a minor." unchanged; "U12 is" → "under twelve is" (lower case at sentence start); "Jr/Sr" → "Jr or Sr" |
| 47 | special_teams :626 prevalence claim "commonly described as a current NHL default" | FIXED | string gone; removed in 244ea01 (SW sweep) |
| 48 | Siblings of W2 corrections (save-then-cover both ways; medical cover EIH; EL practice neck guard; CARHA 32(d)) | FIXED (except 32(d)) | goaltender :643/:644 and defender :179 carry HC clause ii both ways; equipment :109/:157 carry EIHL practice neck guard; no medical-cover claim found in equipment/conditioning/getting_started to scope; CARHA 32(d) remainder is row 69 |
| 49 | neutral_zone_systems KT8 lost options; :946 quote drift | FIXED | NZ KT8 :917 "a stretch forward behind a wall still out in the neutral zone, or a dump you chase"; check_quote_drift on NZ reports no ADDED '.' |
| 50 | Z wave done 20 Oct | DONE-RECORD | — |
| 51 | W2 wave done 20 Oct | DONE-RECORD | — |
| 52 | W3 wave done 20 Oct | DONE-RECORD | — |
| 53 | W4 wave dispatched 20 Oct | DONE-RECORD | readability complete (row 41) |
| 54 | Principles series pilot (pp1) dispatched 20 Oct | DONE-RECORD | superseded by Detailed complete |
| 55 | NotebookLM pilot (owner action), Winger files | DONE-RECORD | superseded by remake complete |
| 56 | NotebookLM prompt rewrite done 20 Oct | DONE-RECORD | — |
| 57 | special_teams KT10 "Screen with both feet clear of the red crease line" | FIXED | special_teams.md:1273 "Screen with your skates clear of the crease and its red line" |
| 58 | faceoffs :874 and header IIHF 2026/27 ejection flat | FIXED | header :10 "ejects the centre for most violations, though a centre who moves early… only re-drops"; :355/:363/:768 scope premature movement to re-drop |
| 59 | faceoffs "two minutes" shorthand :48/:759/:780 | FIXED | remaining "two minutes" hits are clock references only (:660 :673 :1097 :1104) |
| 60 | Siblings of faceoff second-violation/moving-early/replacement claims (centre, rules_primer, uk_rules) | FIXED | center.md cites HC 6.5(a) ×3, 6.2(d) ×2; rules_primer 6.5(a)/6.2(d) present; uk_rules is British-scoped. Layer test not re-run. |
| 61 | conditioning KT14 missing blood-thinning therapy | FIXED | conditioning_and_recovery.md:689 KT14 "a head knock to a player on blood-thinning therapy… even if they look fine" |
| 62 | NZ facts: no facts line carries CARHA 58(b)/61(b) | FIXED | neutral_zone_systems.md:553 facts "CARHA… (58(b))… (61(b))" |
| 63 | check_readability joins blockquote paragraphs across bare `>` | OPEN | scripts/check_readability.py split_layers() flushes only on blank lines; a bare `>` line is non-blank so it joins |
| 64 | faceoffs USAH 602(a) "plan on the match" with no suspension limb | FIXED | body :618 and CM :1223 carry "a likely multi-game suspension"; facts :605 does not — two sites, as the ruling allows |
| 65 | check_readability counts blockquote incl. Related line as one paragraph | OPEN | same function; no Related-line exclusion |
| 66 | SG7 and SG8 CLOSED for 25 files (header) | DONE-RECORD | — |
| 67 | SG7 remainder: diagram "back to the checker"; zone_entries "oncoming checker"; special_teams :842 five-man; DTR "Hitting a man's back" | FIXED | all four strings absent from content/ and site/src/diagrams/ (DTR :330 now "Hitting a player's back") |
| 68 | SG7 last bits DONE 21 Oct | DONE-RECORD | — |
| 69 | SG8 remainder: facts lines with no room for 32(d); winger KT8 omits 66(e) ban | OPEN (accepted limitation) / winger FIXED | e.g. center.md:485, playing_without_the_puck.md:708 still lack the 32(d) ban; body carries it. Winger KT8 :865 now "under Hockey Canada and CARHA, so does any interference that injures one… costs at least your next game" |
| 70 | Rules to keep (sg7_fix_rules.md) | GUIDANCE | — |
| 71 | CARHA 62(b) follow-through above shoulders major — no slap-shot site but shooting | OPEN (partial) | now in shooting, rules_primer, winger, goaltender, defender, OZP, body_contact; still absent from faceoffs, special_teams, neutral_zone_systems (D one-timer/slap-shot pages) |
| 72 | Cosmetic: dz-walk-down-man label "goes with the carrier" crosses blue line at 400px | OPEN | defensive_zone_coverage.mjs:709 label unchanged; render not checked |
| 73 | Site-reviewer pass for SG7/SG8 DONE | DONE-RECORD | — |
| 74 | Facts-antecedent nits; tool gap "those two" | FIXED | OZP :360 fixed; check_facts_antecedents.py:79–81 adds the bare numeric pointer pattern (21 Oct) |
| 75 | NotebookLM remake COMPLETE, 22 Oct 06:45 | DONE-RECORD | its tail "Optional remakes stay the owner's call" is OWNER |
| 76 | SG9 CLOSED 21 Oct (header) | DONE-RECORD | — |
| 77 | per-book R2 candidates left by ruling | DONE-RECORD | left deliberately under the owner's once-per-page ruling |
| 78 | whether 615(f) stacks with 404(b) (book silent) | OWNER | Q: state them as stacking (conservative) or say the book does not say? |
| 79 | forechecking :663 / OZP :1000 "a hit from behind" as GM example | FIXED | both now "a major for a hit from behind" |
| 80 | earlier "older candidates" covered by once-per-page lines | DONE-RECORD | — |
| 81 | Site-reviewer pass DONE 21 Oct (header) | DONE-RECORD | — |
| 82 | sr1/sr2/sr4/sr5 DONE; §10/DZC overflow DONE in SG12 | DONE-RECORD | — |
| 83 | DONE: Basics in header/home; 204 diagrams named | DONE-RECORD | — |
| 84 | Owner's call: ☰ for "Contents" below 480px | OWNER | Q: keep ☰ or use a text label "Contents"? |
| 85 | Diagram titles: 85 fall back to id; 58 repeat in caption | FIXED (fallback) / OPEN (repeat, minor) | diagrams.json: 0 of 204 lack an explicit title (49de5bf). Crude census: 31 titles appear verbatim inside their caption. |
| 86 | rink-map-end-zone has no title | FIXED | rink_map_and_glossary.mjs:1011 `title: 'End zone position vocabulary'`; built SVG carries it |
| 87 | Stale comments rink.mjs :597, build-diagrams :387–389 | FIXED | both now carry "UPDATED 21 October 2026" describing the exposed figcaption |
| 88 | Leader lines cross own letter; labels crossing painted lines | OPEN | no placeLabels change since the finding (last leader commits predate it); not rendered |
| 89 | sr3 DONE; forechecking :808 DONE in SG10 | DONE-RECORD | — |
| 90 | equipment :441 IIHF capital P note | GUIDANCE | conditional note, nothing to do now |
| 91 | X wave done 20 Oct | DONE-RECORD | — |
| 92 | V wave done 20 Oct | DONE-RECORD | — |
| 93 | Owner answers 20 Oct; still open: search IIHF Situation Handbooks for puck-carrier vulnerability | OPEN (research) | rulings applied = DONE-RECORD; the Handbook search is undone |
| 94 | Decided 20 Oct: phone-bar audio-idle hook stays | DONE-RECORD | decision note |
| 95 | OZP "five-man setup" next to "five-man rotation" :285/:286 | FIXED | "five-man" absent from offensive_zone_play.md prose (only diagram id) |


