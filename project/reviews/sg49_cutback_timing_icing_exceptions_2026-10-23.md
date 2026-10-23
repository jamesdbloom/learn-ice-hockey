# SG49: the wall cutback timing gate, team_play icing exceptions, and the body_contact Overview USA Hockey limit (23 October 2026)

## What changed

**The wall cutback, wherever it is taught.** Settled limit (skating, SG48): turn before the checker can reach you, never to face the wall with them behind you. Once they can reach you it is too late: go side-on to the wall, forearm and hip against it.
- **offensive_zone_play.md:** facts :362, :752, :753 (delay and curl), :754 (spin off "once they lean on you"); body :380, :762, :763, :764 (spin off "once they are leaning on you, never while they are still coming at you").
  - Common Mistakes :1146 left as it is: the same unit says "never turn your back to anyone coming at you".
- **center.md :366** ("Cut back when you run out of wall"): gate added.
- **puck_handling.md:** facts :608 ("with a defender closing") and :609; body :620.
  - KT6 :1131 is now "Low in the offensive zone under pressure… cut back up the wall while the defender is still too far away to hit you — never turn to face the wall with them behind you." The first draft ("with a defender on you… only before the defender can reach you") contradicted itself aloud, and review caught it.
- **"Forearm and hip against it":** "take it on forearm and hip" became "go side-on to the wall, forearm and hip against it" at center :366, OZP :380 and :762, puck_handling :620, and skating :807 (committed in SG48). Without "to the wall" it could be heard as meeting the checker with a raised forearm.
  - goaltender :779 kept: it describes the skater posture in order to say it does not transfer to goalies.

**team_play_and_culture.md KT3 :708:** "a team that ices cannot change, except to replace an injured player" became "except in a few cases such as an injury". NHL/PWHL 81.4/83.4 also allow a goalie pulled for an extra attacker and a strength-changing penalty; the IIHF adds a broken skate.

**body_contact_and_battles.md Overview :43:** new sentence: "Where it is allowed, lean only while you are both still playing the puck: under USA Hockey a player who has passed or shot the puck stays off limits until someone else touches it." Source: USAH Glossary, Contact with the Puck.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety and rules | safety-reviewer (also quoted the primary rules; two passes) | **Pass 1:** CLEAR, no critical or major findings. Rules verified: NHL 81.4 (nhl_rules.txt:8624-8631), IIHF 81.4 (:6784-6788), PWHL 83.4 (:7177-7183), and the USAH Glossary and Declaration; no British amendment to the change bar. Timing gates upheld on safety grounds. Two minors: KT6 self-contradiction, and "forearm and hip" without "to the wall". Plus "just" at bcb :43. All fixed. **Pass 2:** CLEAR. goaltender :779 judged not to need the change. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on all 6 content files: 0 lost. |

Note on C4: the rule claims in this batch (81.4 exceptions; the USAH Glossary limit) re-use wording a rules-verifier verified in SG47/SG48 (sg47/sg48 records). The safety-reviewer re-quoted the primary text for each this round.

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked (primary text quoted; earlier rules-verifier passes on the same claims) |
| D4–D5 citations | Checked: USAH Glossary |
| D6 negative existence | Checked: no British amendment to the change bar |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: puck_handling KT6; team_play KT3 against body :129-131; OZP Common Mistakes :1146 |
| D10 facts | Checked: changed facts lines pass caps and read correctly voiced alone |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Not rendered |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links and check_absolutes |
| D15 rendered site | Build passes. No visual pass. |

## What this method could not have found

- Turn-back moves worded outside the swept vocabulary; the wall cutback on winger, defender, breakouts and forechecking (plan row).
- Whether the gates land in the same speech chunk as the move (not rendered).
- That a well-timed legal cutback can still be executed badly at speed.
