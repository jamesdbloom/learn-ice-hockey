# W395: the uk_rules owner form for IHUK discipline reach, carried to sixteen pages. "Outside the Elite League" is removed from every DOPS-scoped site, and every one now gives the Elite League, Scotland and Northern Ireland a "plan on the same" default (17 November 2026)

**Files:**
- content: rules_primer, on_ice_communication, getting_started, playing_without_the_puck, risk_management, mental_game, team_play_and_culture, center, defender, goaltender, winger, defensive_zone_coverage, game_management, offensive_zone_play, special_teams, body_contact_and_battles
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
**From W394 (1).** The owner, uk_rules, was settled in W394 (1c9033f6). Five authors each took a disjoint file set and worked from the brief scratchpad/w395/brief.md. Each site was a hypothesis, and each author had to rule DOPS or In-House scope on every "outside the Elite League" hit.

**Ground truth, as in W394:**
- IHUK DOPS §5 (eih_dops_2026-27.txt:85-90) reaches clubs in England or Wales. It sends Scotland and Northern Ireland to "their own discipline policies".
- Its only Elite League mention is :1236, "IHUK/EIHL DOPS".
- The EIHL Casebook (Rule 28 :414-416; Fines and Suspensions :601-662) names its own DOPS. It writes no ban for checking from behind, a head check or boarding.
- No IIHF document on disk imposes the C.1 "IIHF" bans.

## What changed
**DOPS-scoped sites repaired (about 40 units).** In each one the exclusion is removed and a default is added in the same spoken unit as the England-or-Wales floor. Every floor keeps "at least".

| File | Sites |
|---|---|
| rules_primer | :400 (split into :400/:402 to stay under 1,200), :595 slur |
| getting_started | :193, :199 |
| risk_management | facts :850, body :918 |
| mental_game | :577 slur. The brief missed this site; both rules and safety caught it. |
| team_play_and_culture | :285, :362, :410, :656 |
| on_ice_communication | facts :524, body :531 |
| playing_without_the_puck | facts :825, body :1019 |
| center | facts :889, body :882 |
| defender | facts :291, body :304 |
| winger | facts :881, body :886 |
| goaltender | facts :1180, :1372; body :1193, :1631, :1640 |
| special_teams | facts :437; :463, :1097, :1099, :1210; CM :1261 |
| game_management | facts :178, body :1223 |
| defensive_zone_coverage | :764 (lead-in now "The next game, in the UK.") |
| offensive_zone_play | facts :952 |
| body_contact_and_battles | :649, facts :827/:828, :846, :1377, :1930, :1986 (bench leaving) |

**Default wording (safety: one form per layer):**
- Body and CM: "in the Elite League, Scotland or Northern Ireland, plan on the same ban".
- risk_management :918 and rules_primer :400 keep the owner's longer form. It carries the disclosures "IHUK's rules do not say whether they reach it" and "whose own discipline policies have not been read".

**Facts shape (facts-reviewer ruling).** A "plan on" default folded into a `Rule:` line after the citation is acceptable. 156 of 1,830 Rule: lines already carry a "plan on" clause. It is the preferred single shape where it fits, because floor and default stay in one spoken unit. So:
- The four standalone `Risk:` lines that authors first added were folded and deleted: risk_management, game_management, goaltender, special_teams.
- The facts total went from 6,254 to 6,250.
- Shipped form (pwtp :825 joins with ". In the Elite League…"; the other eight with "; in the Elite League…"): "…is at least a one-game ban, in every league or age group you are registered in (IHUK DOPS C.1, s.11); in the Elite League, Scotland or Northern Ireland, plan on the same ban".
- The late-fight lines cite "C.1, C.2, s.11". C.1 says only "last 5 min"; only C.2 adds "OT & or End of game".
- body_contact :828 cannot fold (346 chars). It stays a standalone `Risk:` line at 199/200; its label was `Key:`.

**Review findings applied:**
- **offensive_zone_play :952 (safety Major 2, facts Major 1).** The author's first form, "anywhere else, the Elite League included", heard alone on a six-book page, told an NHL or USA Hockey reader to plan on a British ban. It had also dropped the extra game in every other league. It now uses the standard form with s.11.
- **special_teams :437 (facts Minor 5).** "whatever your league" stated the ban flatly for an English Elite League club, next to a hedged default. Replaced with §11's wording.
- **game_management :179 (facts Minor 4).** The default dropped "a game misconduct for", so it was broader than its Rule line. Folded.
- **special_teams :1261 (safety Minor 1).** "plan on one" read as a ceiling. It is now "plan on the same ban".
- **getting_started (safety Minors 3–4; rules).**
  - :199 was hard to parse aloud. It now reads "…which ends your game (43.3), and wherever in the UK you play, plan on at least a one-game ban on top".
  - "Britain" became "the UK" (Great Britain excludes Northern Ireland).
  - :193 gained the Scotland/NI default.
- **rules_primer :595.** "Anywhere else in Britain" left out Northern Ireland; fixed.
- **on_ice_communication :524/:531 (safety Minor 2, rules).** "the Elite League, Scotland and Northern Ireland have their own discipline" was a pointer with no default, and it re-implied the exclusion. Now: "IHUK's discipline panel can add games … in the Elite League, Scotland or Northern Ireland, plan on the same".
  - Both reviewers accept "plan on" over a discretionary "can". It errs toward the harsher reading.
  - The Elite League's discretion is IIHF 49.4 through Casebook Rule 28.
- **team_play_and_culture :285 and :656 (safety Minor 5).** "plan on … too, and plan on the same in" became "plan on at least a one-game ban on top; in the Elite League, Scotland or Northern Ireland, plan on the same".
- **body_contact :1986 (safety Minor 6, rules).** Removing "Outside the EIHL" put IHUK's "up to one game" straight after the EIHL's "minimum of three". The sentence now adds "In the Elite League, plan on the Casebook's minimum of three games."
  - Casebook (2) :627-630 covers the "players' or penalty bench".
  - Rules caught that the first form had dropped "minimum".
  - The "Up to 1" tariff was verified by rendering DOPS PDF p.10, row 70.

**In-House-scoped "outside the Elite League" sites ruled correct and kept:**
- language_and_glossary :316, on_ice :632, switching_positions :140, how_to_watch :279 (Rule 76)
- rink_map :30/:302/:640/:704 (trapezoid)
- rules_primer :247/:1254, body_contact :1904/:1928, winger :821 (IIHF edition)
- goaltender :954/:1436/:1453/:1688 (9.8, 9.12)
- shooting :860 (86.6)

After the wave, no "outside the Elite League" anywhere in content/ concerns DOPS discipline (grep).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:** nothing WRONG; every act is a real C.1 or C.2 row; "at least" kept on every floor. Found the missed mental_game :577, the on_ice :524 re-implication, "Britain" ≠ UK, and that special_teams "C.1, C.2" is right. **Final read:** every new sentence OK; :1986 "minimum" fix. |
| safety-reviewer | **First read:** no Critical. Major 1 mental_game :577; Major 2 offensive_zone_play :952 "anywhere else". Minors 1–7, and a one-form-per-layer recommendation. **Final read:** CLEAR. 40 spoken units tested; 39 keep floor and default in the same `<p>`, and the 40th is the standalone body_contact :828. |
| facts-reviewer | Folding a default into a Rule: line is acceptable and preferred. `Risk:`, not `Key:`. Found :952 untraceable "anywhere else" (Major 1) and five DOPS facts lines with no body carrier (Major 2, mostly pre-existing). Minors 3–7. |

### C11
The coordinator wrote no content. Every post-review edit is one reviewer's text, or an author's consistency extension read by both reviewers in their final reads (team_play :656 to match :285).

Where reviewers differed, these choices were made:
- **on_ice :524.** Facts proposed "have their own discipline policies"; safety proposed "plan on the same". Safety's text shipped, and rules upheld it.
- **ozp :952.** Facts proposed 227 chars without s.11; safety proposed 285 chars with s.11. Safety's text shipped.

## Checks after the last content edit
- **Build.** A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 03:56:52, and no `content/` or `site/src/` file is newer.
- **Checkers.** check_links --quiet, check_facts (6,250 facts), check_absolutes, check_geometry and check_secrets pass. check_counts --update reports no change. check_callout_flow --bare reports 0.
- **Markers.** check_marker_pairs reports 0 LOST and 0 SPLIT on all 16 files. defensive_zone_coverage shows one "no longer present by key" candidate (:764, whose opening was rewritten); it still carries its marker.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, two reads. Sources: <br>• IHUK DOPS §5, §8, §11, C.1, C.2 (rendered p.10), App H, App J, :1236 <br>• EIHL Casebook Rule 28 and Fines and Suspensions (2), (4) <br>• IIHF 43.2/43.3, 46.8/46.9, 49.4 (both editions) |
| D4 Citations | "C.1, s.11" and "C.1, C.2, s.11"; no new external citation |
| D8 Counts | "at least a one-game ban", "every league or age group", "minimum of three", "up to one game" |
| D9 Summary layer | layer test on every file; no Key Takeaway carried a DOPS claim; CM sites (special_teams :1261, team_play :656) read voiced alone |
| D10 Key-facts | facts-reviewer; every changed facts line read voiced alone by safety |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | every file rendered by its author and re-rendered by safety (scratchpad/w395safety2) |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 03:56:52 build (below) |
| D5–D7, D13 | not engaged |

**D15:** site-reviewer, 16 pages, Playwright Chromium at 400×812 DPR 2 (light and dark) and 1440×900 light.
- 15 of 16 pages are under 50% at 400px.
- **getting_started's Key Takeaways reach 56.4% (KT13–KT14) and 53.2% (KT12–KT13).** This is the first measurement of that page. The cause is pre-existing: the KT14 concussion red-flag list is a single amber run of about 300 chars. This wave changed only two body sentences on that page and added no glyph, so it is carried as a plan row.
- **Changes:** defender 47.6 → 47.8; dzc 44.0 → 43.9. All other measured pages are unchanged.
- **First measurements:** mental_game 13.4; team_play_and_culture 42.7.
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
Line numbers are as staged. Find each site by its text.
1. **getting_started KT13–KT14 is 56.4% amber at 400px** (pre-existing; first measured here). KT14's red-flag run is about 300 chars.
   - Site-reviewer sketch: end the amber at "call an ambulance immediately for any red flag:" and leave the list in plain bold, the winger KT11 pattern.
   - This is concussion content, so it needs safety-reviewer sign-off.
2. **Five DOPS facts lines have no carrier in their section body** (facts Major 2, mostly pre-existing):
   - risk_management §"The immediate response"
   - game_management §"What doesn't work"
   - goaltender §"In front of your own net"
   - playing_without_the_puck §"Backchecking"
   - offensive_zone_play §"The defenceman's pinch"
   
   Each needs a short body sentence that states the ban rather than pointing to "the British ban".
3. **special_teams.md and game_management.md cite "(IHUK DOPS …)" in facts but have no DOPS entry in their Sources.** goaltender :1801 has one to copy.
4. **Two facts blocks are at HARD_MAX 14/14:** offensive_zone_play :945 and body_contact :819. body_contact :828 is at 199/200.
5. **mental_game :577's paragraph is 1,195 chars,** 5 short of the cap.
6. **team_play_and_culture :285 covers any fight, but DOPS prices an ordinary willing fight at "Up to 1"**; only the late fight is mandatory. This errs harsher and predates the wave.
7. **The folded DOPS Rule: line is now identical text in about 8 documents.** Any later correction must be briefed as the claim, not a line.
8. **on_ice_communication :531 names the Elite League twice in a row** (Rule 28 lead, then the default). Harmless; optional wording.
9. **goaltender :1640 "a suspension panel can add games … plan on the same"** — safety suggests "expect the same" as a better match to a discretionary panel.
10. **"Immediate suspension" for a slur** (rules_primer :595, mental_game :577) leaves out the source's "provisional". This predates the wave.
11. **Whether C.2's "End of game" covers a handshake-line fight** is undefined in the source. The corpus says "plan on".
13. **rules_primer :400 cites "Appendix C and Section 8" for the every-other-league reach**, where the source is §11 (gate; may predate the wave).
14. **pwtp :825 joins its default with ". In the Elite League…"** where the other eight folded lines use "; in the Elite League…" — not byte-identical (gate).
12. **"At a club in" vs DOPS §5's "games in Scotland and Northern Ireland"** — the two scopes cover different players. Neither is cheaper.

## What this method could not have found
- A DOPS reach claim worded with none of the swept terms (England/Wales, Elite League, DOPS, IHUK, ban, suspension, panel).
- A layer built on the old exclusion that never named it.
- Diagram captions. site/src/diagrams was not swept for DOPS reach.
- The EIHL Gamebook DOPS section, and the SIHA and NI policies; none is on disk.
- Real devices, and a screen reader.
