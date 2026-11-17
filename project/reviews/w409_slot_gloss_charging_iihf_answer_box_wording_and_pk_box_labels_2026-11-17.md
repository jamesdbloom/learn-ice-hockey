# W409: the slot gloss, the box and the half-wall now match their owners; the charging line gives the IIHF answer; the Hockey Canada head limb puts the match last; the pk-box labels clear the paint (17 November 2026)

**Files:**
- content/technique/passing_and_receiving.md
- content/getting-started/getting_started.md
- content/systems/defending_the_rush.md
- content/systems/special_teams.md
- content/positions/winger.md
- content/positions/center.md
- site/src/diagrams/special_teams.mjs (pk-box labelHints)
- site/src/diagrams/breakouts.mjs (describe)
- site/src/diagrams/defending_the_rush.mjs and risk_management.mjs (comments only)
- site/src/data/diagrams.json (build product)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The brief is scratchpad/w409/brief.md. Each plan row was briefed as a hypothesis.

| Agent | Scope | Plan rows |
|---|---|---|
| A | passing + getting_started | From W408 (1) |
| B | defending_the_rush | From W408 (3); From W407 (2), (9) |
| C | diagram modules | From W407 (5); From W408 (4) |
| D | special_teams + winger + center | From W407 (10); From W408 (2) |
| E | read-only census | From W407 (3), (8) |

## What changed

| Site | Now reads | Owner / source |
|---|---|---|
| passing_and_receiving :40 | "The **slot** is the ice in front of the net, between the two faceoff circles, where most goals are scored from." | rink_map :359/:361 |
| getting_started :204 | "(the ice in front of the net, between the faceoff circles, where most goals are scored from)" | rink_map |
| passing_and_receiving :752 | "crosses in front of your own net" (was the undefined "the danger area") | sibling bullets |
| special_teams :119 | "the **half-wall** is the boards roughly level with the faceoff dot, between the corner and the point." The old "level with … well below it" sounded like two places. | rink_map :414 |
| winger :635, center :623 | "**Box** — the shape almost everyone is taught first." (was "the standard") | special_teams :500 |
| center :470 | "coaching craft rather than a measured finding" | — |
| defending_the_rush facts :968 (charging) | "Meant to injure, a charge is a match in NHL and PWHL 21.1, Hockey Canada 7.4(c), CARHA 48(a), USA Hockey 602(a); under IIHF 42.4 plan on a major and game misconduct. USA Hockey's 602(a) also reaches one who "recklessly endangers": plan on a match and a likely multi-game ban, whatever 607(e)'s "may"" (299/300) | see Reviews |
| defending_the_rush facts :285 | "Key: Cover the middle lane first, because it runs straight into the slot — the middle-lane driver is the attacker skating hard through the middle without the puck" | body :296/:301 |
| defending_the_rush CM "Hounding…" | The amber run was cut from 273 to about 118 characters: "⚠️ **A forceful hit into a player's back at the wall ends your game in five of six books, and under the IIHF plan on it.**" The Hockey Canada head limb is now plain text, ending "⚠️ **a match if they cannot protect themselves**". The bullet is 1,198 characters. | HC 7.6(c)/7.7(c) |
| defending_the_rush: Hockey Canada head limb, claim-wide (:404, :651, :950, :1098, :1110, :1114) | "on the head it is head contact — plan on the game misconduct anyway, and a match if they cannot protect themselves". The match now comes last at all six sites, so a listener no longer hears the game misconduct as the ceiling. | content m1 |
| pk-box | "strong side, low" labelHint [0.7, 12] → [-7.5, 7]: clear of the goal line (it was 1.6 ft past it), the dot and the arc. "weak side, low" [-1.5, -9.7] → [-7, -9.7]: clean. Upper "high, in the lane" pinned at [-11.9, 6] to hold its spot (knock-on). | — |
| breakouts.mjs describe | "…the home-plate-shaped area analysts use to define a high-danger chance. Its outline runs square across the top…" (was "analysts count as the dangerous ice") | rink_map :397/:399 ("a concept rather than a measurement") |
| Comments in defending_the_rush.mjs ~:151/:226 and risk_management.mjs ~:823 | Now quote the current owner text, including breakouts :409/:411/:412 | — |

The diagram author caught and reverted an accidental sed match on pp-backdoor's "strong side, low" before the build.

## Census (E, read-only) → plan
- **"Every book but the IIHF" or "five of six" with no IIHF price in the same unit:** about 30 sites in 11 files, four of them in Key Takeaways or Common Mistakes. There are also a few silent five-book lists.
- **NHL/PWHL 43.4 "may" stated without 21.1 "shall":** clearest at faceoffs :1222; also bcb :1375, a rules_primer :1091 table cell, and four source notes.

Carried in full to From W409.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer (also read the rules) | **First read:** no Critical or Major. Every book on :968 checked against primary text: NHL/PWHL 21.1, HC 7.4(c), CARHA 48(a), USAH 602(a), 607(e), IIHF 42.4; no IIHF match penalty, including the EIHL. One optional Minor (the IIHF "may" left bare), with replacement text applied. Keep the second glyph. **Final read:** CLEAR. Six copies in the same order; the Hounding `<li>` carries two warn-inline spans in site/dist; max paragraph 1,198. |
| content-reviewer | **First read:** no Critical or Major. Minors m1–m6 (reorder; :968; :285 pronoun; pk-box arc; getting_started width; breakouts describe) plus a pre-existing passing :752. Texts applied; for m1 the reorder was taken and the second glyph kept, per safety. **Final read:** CLEAR. |
| site-reviewer | Seven pages at 400×812 DPR 2 light/dark and 1440 light, on the 10:56:24 build. Worst windows unchanged except dtr 39.1 → 39.4. Nothing over 50% at 400px. 0 bare, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll. Hounding: two amber runs, as briefed. pk-box: "strong side, low" clears the goal line by about 24 px and the arc by about 1.7 px; "uncovered" still reads as the strong-side D's label (Minor, pre-existing → plan). |
| rules-verifier (dispatched after the first commit-gate BLOCKED on C4) | All three OK, no text change. :968: NHL/PWHL 21.1 "shall", HC 7.4(c), CARHA 48(a), USAH 602(a)/607(e) (Casebook 602 Sit. 1 "must"; Standardized Discipline Level 1, 6–10 games) verified. The act was swept across both IIHF editions: 42.4 is the IIHF's whole in-game answer to a charge meant to injure. Rule 21 does not apply (42 covers charging), there is no match penalty, intent-to-injure appears only for Officials, 42.5/28 supplementary discipline is discretionary, and a head hit goes to 48.3 at the same price. In-House and EIHL add no match. "Plan on" names the ceiling. The HC head-limb reorder at all six sites keeps the meaning and price (7.6(c)/7.7(c) match mandatory in both divisions; "plan on the game misconduct anyway" errs safe against 7.6(a)/(d), 7.7(a)). :285 makes no rule claim. Optional: add "further discipline" to :968 (cap-limited) → plan. |

**C4.** The first gate BLOCKED because this wave first relied on the safety-reviewer's source check instead of a rules-verifier (the SG44 practice). The rules-verifier above closes it with no text change.

### C11
The coordinator wrote no content. Every post-review edit is reviewer text. The two exceptions:
- the m1 combination: content's reorder with safety's glyph;
- the claim-wide extension to the four remaining copies, which the author identified. The safety final read checked it.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 10:56:24, and no content or site/src file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare is 0. check_label_paint --severe is 14, with none in pk-box.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all six content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier (act-swept across all six books) and safety-reviewer verified :968 against NHL/PWHL 21.1, HC 7.4(c), CARHA 48(a), USAH 602(a)/607(b)/(e), IIHF 42.4 (both editions), EIHL Casebook 42 |
| D2 Exceptions | IIHF has no match penalty; 42.4 is discretionary |
| D3 Cross-book divergence | the charging line names each book's answer |
| D4 Citation integrity | :968 citations; comment quotations checked against owners |
| D5 Provenance | not engaged |
| D6 Negative existence | "no IIHF match penalty" swept in both IIHF books |
| D7 Cardinal rule | "Cover the middle lane first" stated as coverage craft; box "taught first" (not "the standard") |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | Hockey Canada head limb reordered at all six sites; slot gloss and box wording match owners across files |
| D10 Key-facts | :968, :285 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | every changed file rendered; Hounding keeps a single "Important." |
| D13 Folklore | box "the standard" removed |
| D14 Structure, terminology, cross-links | check_links; half-wall, slot and goalmouth terms against rink_map and the glossary |
| D15 Rendered site | site-reviewer (above) |
| Diagrams (no D-number) | diagram author previews; check_label_paint, check_geometry, check_absolutes, check-arrivals; content and site reviewers on pk-box |

## Found, not fixed (plan rows)
1. **"Every book but the IIHF" / "five of six" units with no IIHF price.** Sites (N = no price, P = partial):
   - on_ice_communication :120, :745 (KT12)
   - body_contact_and_battles :637, :1180 (P), :1472 (facts, 242/300), :1774, :2067 (CM)
   - defender :302, :837 (P), :839 (P), :953
   - goaltender :1304, :1641, :1654 (P)
   - playing_without_the_puck :823 (facts, 297/300), :1021, :1049 (CM)
   - winger :784 (facts, P), :868 (P), :979 (KT10, P)
   - defensive_zone_coverage :751
   - special_teams :814 (Never, 161/200), :1117
   - faceoffs :285, :293 (Never), :1401 (KT4, P)

   Silent five-book lists: risk_management :704, :849; scanning :353; neutral_zone :366, :429; rink_map :227.
2. **NHL/PWHL 43.4 "may" without 21.1 "shall":** faceoffs :1222 (clearest), bcb :1375, rules_primer :1091 table cell. Source notes: center :1025, goaltender :1821, special_teams :1357/:1361. Also winger :1001 (PWHL 42.4), and forechecking :972 calls the 43.3 major the "only price" without saying it is discretionary.
3. **The old Hockey Canada head-limb order** ("…a match if they cannot protect themselves — plan on the game misconduct anyway") survives at offensive_zone_play.
4. **pk-box "uncovered"** (B's label) still reads as the strong-side D's at 400px; it needs a labelHint near B. Also "strong side, low" clears the arc by only about 1.7 px.
5. **special_teams :119:** headed "Three words…" but defines five terms. Its goalmouth, "within a stick's length of the goal line", differs from rink_map :376, "at the edge of the crease".
6. **defending_the_rush CM :1098 "Angling a breakaway carrier wide…"** carries no ⚠️ (pre-existing). Judge whether it should.
7. **pp-spread-5on3 "the triangle"** is a severe label/paint crossing in special_teams.mjs (pre-existing, in the 14).
8. **"Almost everyone is taught first"** is now stated bare in four places (owner discloses no public count). It is craft, noted only.

## What this method could not have found
- Copies of these claims in other documents worded without the searched phrases.
- The breakouts describe is an SVG `<desc>` with no visible rendering, so it was read only as source.
- Real devices and screen readers.
