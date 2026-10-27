# SG108: sealing wording, the screener cue, IIHF broken-skate Situations, diagram leftovers; drills 7 and 12 (27 October 2026)

**Files:**
- content/systems/forechecking_systems.md
- content/technique/body_contact_and_battles.md
- content/systems/faceoffs.md
- content/foundation/language_and_glossary.md
- site/src/diagrams/{faceoffs,forechecking_systems,goaltender,neutral_zone_systems,offensive_zone_play,puck_support_and_spacing,risk_management,special_teams,zone_entries}.mjs
- project/getting_better_drafts/drills/01_one_foot_edges.mjs and 02_one_foot_jumps.mjs (unpublished drafts)
- project/plans/OPEN_ITEMS.md

## What changed and why
1. **forechecking :68.** "Sealing also means contact against the boards" became "⚠️ **Sealing holds the lane with your position; it never means pushing or pinning them into the boards.** How much contact your book allows there is a question for your rulebook". This matches the owner definitions (glossary :202, body_contact :483). No rulebook uses "seal" (rules verifier); pinning stays legal where a book allows it (HC 7.5(a) Interpretation 3), the sentence returns legality to the book, and it errs safe.
2. **body_contact screener (:1275 facts, :1288 body).** "hold your ice and let them come to you, leaning on nobody" became "hold your ice and lean on nobody". "Let them come to you" invited absorbing contact, which CARHA 49(a) prices ("does not avert body contact"). "Body on the player" (the plan row's premise) was already fixed in 7bf307b.
3. **faceoffs :1149 (facts) and :1155 (CM).** "no Situation mentions/names a broken skate" became "no Situation grants". IIHF Situation 9.10 does mention a lost skate blade, but it rules only on stopping play. Situation 81.7 says the only line change after icing is for a strength-changing penalty.
4. **Glossary :202 (coordinator, after review).** SG107's "with your position, not your body" contradicted body_contact :483 ("put your body between the opponent and the ice"). It now reads "put your body in that lane and hold it with your position — never push or pin them into the boards".
5. **Diagrams.**
   - The leader comment "a slot whose leader clears the painted lines, dots and puck" overstated leaderHazard. It now reads "neither runs along a painted line or circle nor passes near a dot or the puck (crossing a line is allowed)" at 13 sites. Comment-only.
   - dump-flip-over-trap: "one back" hint [4,-9]. The words now clear the blue line, and the dot no longer reads as a bullet.
   - goalie-front-door-back-door: [1,14] was tried and rejected in review. The circle still crossed the label, and the words sat nearer the shooter. It reverted to [2,12], with a comment recording why. Its SVG is byte-identical to HEAD.
   - nz-hinge: no hint clears the dot (swept to 30 ft). Its comment records the search.
6. **Drills (owner review, unpublished drafts; preview artifact v4 and v5).**
   - Drill 7: placed backward steps, no glide.
   - Drill 12: the second hand's fingers now point away from the skate.
7. **Left unchanged after testing:**
   - game_management :143 (HC 6.4(a)): "from your own end" carries the end-zone limit.
   - 39.4(II): voiced correctly.
   - defender two-on-one and the IIHF 82.1 Situations: consistent.
   - non-taker stick contact: faceoffs claims nothing beyond the books.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Rules | rules-verifier | All three content claims CONFIRMED. Notes: the screener "hold your ice" has no written CARHA right for an attacker (66(a) Note 2 grants defenders only; body :947 says so, facts :1275 does not); this is minor. Pre-existing side findings: body :947 understates USA Hockey's stand-your-ground grant; faceoffs :1155 presents an NIHL-playoff "Playing Rules" clause as a general deferral. The glossary/body_contact contradiction was fixed. |
| Safety | safety-reviewer | SHIP on all three. Rendered; markers kept; panels equal to HEAD. |
| Diagrams | diagram-reviewer | dump-flip and the 13 comments are SHIP. The goalie change was FIX (false comment; label nearer the shooter), reverted. Byte comparison: only the intended SVGs changed. |

### C11
The coordinator made two edits after the reviews:
- the glossary :202 wording above;
- the goaltender.mjs revert to [2,12] with its comment. That SVG is byte-identical to HEAD.

## Dimensions
D1–D3: rules-verifier. D7: sealing is craft, not law. D9: the claim was checked per layer. D10: one facts line changed (:1275, :1149); check_facts passes. D11–D12: rendered. D14–D15: check_links, build-diagrams and a full site build all exit 0. check_geometry, check_absolutes, check_zones and check_counts exit 0. check_marker_pairs: 0 LOST on all four content files. The rest are n/a.

## What this method could not have found
- Other layers using "seal" as contact in different words.
- A Situation dealing with the broken skate without the word "skate".
- Whether "backed off" is read as the goalie's.
- Phone-width rendering of the two label gaps.
