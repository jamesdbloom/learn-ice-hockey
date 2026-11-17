# W417: IIHF late-hit and goalie-charge prices carry "may" and their discipline clause, IIHF reckless interference is no longer late-hit-only, the USA Hockey walk-out starts at its minor, and a census of junior and women's ejection wording (17 November 2026)

**Content files changed:**
- positions/defender.md
- systems/game_management.md
- technique/body_contact_and_battles.md
- hockey-iq/playing_without_the_puck.md

**Other files changed:**
- sources/README.md: a note that PWHL 49.4 cross-refers to Rule 38 when it means Rule 28.
- project/plans/OPEN_ITEMS.md.
- This record.

## Source
- **Plan rows:** From W416 (1)–(4), (6) and (7).
- **Brief:** scratchpad/w417/brief.md.
- **Agents:** four authors (A–D, one file each), plus one read-only census of junior and women's ejection wording.

## What changed (voiced)

| Site | Change |
|---|---|
| **defender facts :261** | Now: "Under USA Hockey a walk-out can be an interference minor (625), but it is not capped there: a reckless walk-out is cross-checking or roughing, a major and game misconduct (609(b), 640(g)) — plan on a match and a likely multi-game ban (602(a))". Before, it said "plan on a match" for every walk-out and left out the 625 minor. |
| **game_management facts :1185 (297)** | Now: "…a late hit has no minor cap — 56.5 may give a major plus a game misconduct with nobody hurt if the Referee judges that it recklessly endangers AND the player "would not be sufficiently sanctioned by imposing a major penalty"; more discipline can follow (56.8)". Before, it said "reaches" and had no 56.8. |
| **game_management body :1221** | The ⚠️ run now reads "lets the referee give a major plus a game misconduct with nobody hurt." (was "reaches"). Adds: "And whatever the Referee gives, supplementary discipline can follow (56.8)." |
| **body_contact_and_battles :1739** | Now: "The IIHF allows a major for interference that recklessly endangers (56.4) and, where a major is not enough, ⚠️ **a major plus a game misconduct with nobody hurt — for a *late hit* too** (56.1, 56.5); supplementary discipline can follow (56.8)." Before, the major-plus-GM pair was tied to a late hit only, but 56.5 says "interference or a late-hit". The old wording was permissive. |
| **body_contact_and_battles :680** | Now: "56.5 lets the referee give a major plus a game misconduct with nobody hurt, and supplementary discipline can follow (56.8)". |
| **body_contact_and_battles, both HC 8.3(b) sites** | "reaches" became "lets the referee give". |
| **playing_without_the_puck facts :620 (299)** | Now: "A charge on a goalie can end your game in every book — … ; IIHF referees may eject a reckless one; discipline can follow (42.4, 42.5)". |
| **playing_without_the_puck new facts :726** | "Rule: Under the IIHF the referee may give a reckless charge on a goalie a major and game misconduct (42.4), and supplementary discipline can follow (42.5)". The block is now at 14/14. |
| **playing_without_the_puck CM :1040** | Adds the IIHF 42.4/42.5 sentence. |
| **playing_without_the_puck KT11 :1114** | Adds "and under USA Hockey if reckless" (607(b) "shall"). |

**Refuted or left:**
- gm: CARHA 66(a)(1). It gives the same tiers as 49(a), so it changes nothing a reader hears.
- bcb :1718: CARHA scope tag. It only raises a price and the line has no room.

## Census (read-only) → plan
- **Premise correction (important):** Hockey Canada 4.4 ejects on any major in every division. CARHA 30(a) does the same. So no repair may imply that a non-British junior keeps their game after a major.
- **DEFECTS:**
  - uk_rules :306 states British junior ejection as a rule.
  - bcb :215 credits Rule 201 with words it does not contain.
  - bcb facts :145 (184/200) and :1908 (195/200) say "junior" without scope.
- **Borderline:** bcb :756 and CM :2067.
- **Women's "plan on" softens mandatory In-House 101:**
  - uk_rules :302, :375, :517, KT13 :644
  - risk :901
- **Next hunt:** units that tell a Hockey Canada player a major costs only five minutes. Rule 4.4 makes that false.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All 12 sites OK, none needs text. 625 is confirmed as the plain-walk-out rule (USAH Casebook 609 Sit. 2 agrees). The 56.5 quotation is verbatim. The bcb :1739 late-hit-only wording was permissive. KT11's three-book list is complete for "mandatory regardless of the referee". Optional: add the NHL/PWHL/EIHL face/head limb (plan). |
| safety-reviewer | No Critical or Major. Nothing is cheaper than HEAD. Three Minors, each applied with safety's text: pwtp :620 "a goalie charge" → "a charge on a goalie"; gm :1185 grammar; gm :1221 "reaches" → "lets the referee give". |
| site-reviewer | 4 pages at 400×812 DPR 2 light/dark and 1440 light, on the 14:52:28 build. bcb 48.6 → 48.5; the others are unchanged. The changed units sit in windows of 4.6–31.7. 0 bare, 0 untreated, 0 panels, 0 console errors. pwtp at 1440 rose 57.6 → 59.0 (diagram window). |

### C11
The coordinator wrote no content. Every post-review edit is safety's text, applied verbatim.

The sources/README.md note is the coordinator's. It was checked against pwhl_rules.txt :4945-4948 and nhl_rules.txt :5973-5976. The first draft wrongly said 49.4's supplementary-discipline sentence should not be cited; that was corrected before staging.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 14:52:28, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets all pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all four files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | IIHF 42.4/42.5, 56.1/56.4/56.5/56.8 (both editions); USAH 602(a), 607(b)/(c)/(d), 609(b), 625, 640(b)/(g), Casebook 609 Sit. 2; HC 4.4, 8.3(b)/(c), 8.5(b); CARHA 2026 30(a), 49(a), 52(b), 66(a)/(e); NHL/PWHL 42.1/42.3/42.5; EIHL Casebook 42; In-House 101/201; IIHF 201.1 |
| D2 Exceptions | 56.5 covers "interference or a late-hit"; 640(b) exempts adult men; HC 4.4 applies in every division |
| D3 Cross-book divergence | Which books eject on a goalie charge regardless of the referee |
| D4 Citation integrity | 56.5 quotation verbatim; PWHL 49.4 cross-reference noted |
| D5 Provenance | sources/README note |
| D6 Negative existence | Census premise corrected (HC 4.4) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Goalie-charge claim fixed in facts, CM and KT |
| D10 Key-facts | defender :261, gm :1185, pwtp :620/:726 read voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | "a goalie charge" antecedent fixed; :1185 parallelism fixed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **Census defects:**
   - uk_rules :306 (British junior stated as a rule)
   - bcb :215 (misattributes Rule 201)
   - bcb facts :145 and :1908 (unscoped "junior")
   - borderline: bcb :756, CM :2067
2. **Women's "plan on" softening mandatory In-House 101:**
   - uk_rules :302, :375, :517, KT13 :644
   - risk :901
3. **Reverse-defect census:** any unit telling a Hockey Canada player (junior or senior) that a major is only five minutes. HC 4.4 makes it a game misconduct and an ejection in every division.
4. **bcb facts :662 (297/300):** says "up to" a major and game misconduct, with no 56.8. There is no room to add it.
5. **CARHA-scope wording in bcb is inconsistent:** about 19 lines are tagged "(CARHA-affiliated adult leagues only)" and about 30 are not.
6. **pwtp KT11 (optional):** add the NHL/PWHL/Elite League face/head game misconduct limb. Also, block :714 is at 14/14.
7. **defender walk-out wording:**
   - "walk-out" is never defined when the line is heard alone (optional rewrite available).
   - 640(g)'s roughing route excludes adult men (harsher direction).

## What this method could not have found
- USA Hockey rules that price a reckless body walk-out outside 609, 640, 604 and 602.
- Other copies of the old "late hit only" IIHF wording in other layers or documents.
- Junior ejection claims worded with none of the census terms.
