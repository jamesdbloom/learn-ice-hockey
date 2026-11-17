# W421: CARHA "any major ejects" now names the act where a unit is about one act, the 32(d) ban is scoped, a spliced 32(d) quotation is restored, and a W418 USA Hockey claim is retired (17 November 2026)

**Content files changed:**
- systems/game_management.md
- technique/body_contact_and_battles.md
- systems/special_teams.md
- systems/forechecking_systems.md
- hockey-iq/playing_without_the_puck.md
- positions/winger.md
- systems/zone_entries.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W420 (1) and (2), and From W419 (2) (game_management KT14 amber).
- **Brief:** scratchpad/w421/brief.md, with a W421 addendum covering CARHA 30(a), the 62(b) Note, 32(d) and the Rule 16 Note.
- **Authors:** six, each owning its files exclusively:
  - A: game_management
  - B: body_contact_and_battles
  - C: special_teams
  - D: forechecking_systems
  - E: playing_without_the_puck and winger
  - F: rink_map, switching_positions and zone_entries
- **Coordinator error:** the brief named `content/technique/forechecking.md`, which does not exist. Agent D found every site in forechecking_systems.md and worked there.

## What changed (voiced)
| Site | Now |
|---|---|
| game_management KT14 | "⚠️ **A late hit can cost a major or more, and under Hockey Canada and CARHA a major for it ejects you. In most books a call for checking from behind…head or neck.**" It is still one amber run; an interim split that took the amber off the checking-from-behind sentence was reverted. |
| game_management CM :1288 | "…every one can reach a major, and under Hockey Canada or CARHA that major ejects you." |
| game_management :1213 | "⚠️ **A major for body contact brings a game misconduct and ends your game** (Rule 30(a))." |
| game_management :1219 | "Either way, a major for any of these hits brings a game misconduct (30(a)), with a suspension of at least one game (32(d))." |
| game_management facts :1249 (261) | "…a major for body contact brings a game misconduct and at least a one-game suspension (30(a), 32(d))" |
| bcb :513, :680, :1451 | "a body-check major also brings a game misconduct"; "a major for it ends your game (30(a))" (×2) |
| bcb CM :2067 | Unchanged from HEAD. An interim "A boarding major ejects you…" was reverted: it dropped the bullet's own trip-or-push-into-the-boards route. |
| special_teams CM :1265 | "Under Hockey Canada and CARHA a major for it ends your game, and under USA Hockey every major does." Before, it implied USA Hockey has an interference major; 625 is minor-only. |
| special_teams trailer :1341 | The 32(d) quotation is now verbatim, including "as a result of a Rule infraction, other than the Accidental High Stick Rule". Not voiced. |
| forechecking_systems facts :803 (295) | "…either major ejects (30(a))" |
| forechecking_systems :1078 | "⚠️ **a CARHA major for it ends your game** (30(a))" |
| forechecking_systems :1095 | "…any CARHA charging major ends your game (30(a))" |
| pwtp :224 | "…a major if intentional contact injures — and any major for it ejects you (30(a))." An interim "the major" read as the injury major only. |
| pwtp facts :718 (299) | The 30(a) clause moved to the end: "…; any such major brings a game misconduct (30(a))" |
| winger facts :750 (173) | "…and a major for it brings a game misconduct (30(a))" |
| zone_entries :257, :866 | "in a CARHA league a major for a hit from behind costs at least your next game (32(d))". A 53(a) minor plus game misconduct gets no 32(d) ban. |

**Refuted (already act-scoped):**
- game_management :1215, :1194, :173, :428, :1039
- bcb :517, the 15 "weak" units, and facts :599 (kneeing: every book ejects on its major)
- forechecking_systems :1067, :816
- rink_map :528 and switching_positions :573 ("there" refers to 49(a))

## Retired: a W418 finding
The W418 record says "a first major in USA Hockey junior does not eject (403)". The W421 rules-verifier found this unsupported:
- 403(b) sets the suspension length for a second major; it does not say whether the player is ejected.
- 404(b) makes every game misconduct an ejection.
- The Summary of Penalties, which is general-application only, lists every major as carrying a game misconduct.
- The Casebook gives a major plus game misconduct with a one-game suspension.

**Every USA Hockey major ejects.** A coordinator grep found no content unit that carries the retired claim.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:**<br>• special_teams :1265 WRONG on the act: USA Hockey 625 is minor-only, so it named a nonexistent major tier.<br>• pwtp :224 WRONG: the antecedent narrowed the claim.<br>• Everything else OK, including bcb :2067 limb by limb, zone_entries against 53(a)/32(b), kneeing against USA Hockey 628, NHL 50.5, IIHF 50.3, HC 7.8(e) and CARHA 56.<br>• Optional (harsh direction): add USA Hockey, NHL and PWHL to bcb :2067.<br>**Confirmation:** all five fixes OK. Restoring "Any major" at :2067 is right for CARHA: 49(b) routes to the applicable rule's major, for example 86(a) tripping. |
| safety-reviewer | **First read:** no Critical.<br>• MAJOR at bcb :2067: "A boarding major" dropped the trip-or-push route (CARHA 49(b); HC 7.2 covers only checks and pushes).<br>• Minors: KT14 amber moved off checking from behind; pwtp :224 antecedent; gm :1213 "body check" should be "body contact"; special_teams USA Hockey.<br>**Confirmation:** CLEAR. |
| site-reviewer | Seven pages at 400×812 DPR 2 light/dark and 1440 light, on the 15:55:41 build. Worst windows unchanged except game_management 42.3 → 42.7 (KT14, one amber run of 357 rendered characters; kept whole because safety placed the amber on the checking-from-behind/head-neck hazard) and bcb 48.5 → 48.6 (Shot Blocking; not a W421 site). Nothing over 50% at 400. 0 bare, 0 untreated, 0 panels, 0 console errors. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text, or the reversion to HEAD that the safety reviewer prescribed. The KT14 rejoin is the safety reviewer's text, and the author confirmed it matched the current words.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 15:55:41, and no content file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all seven files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | CARHA 2026 16 Note, 30(a), 32(b)/(d), 34(a), 49(a)/(b), 52(a)/(b), 53(a)/(b), 56, 62(b) Note, 66(a)/(b)/(e), 86(a); USAH 403, 404(b), 603, 604, 607, 625, 628, Summary of Penalties, Casebook 625 Sit. 9; HC 4.4(a), 7.2, 7.8(e), 8.5; IIHF 41.3–41.5, 50.3, 201.1; NHL 41.5, 50.5; PWHL 41.5; In-House 101; EIHL Casebook 41/42 |
| D2 Exceptions | The CARHA accidental high stick, which cannot arise in these acts; 53(a) minor plus game misconduct has no 32(d) ban |
| D3 Cross-book divergence | USA Hockey lane block is minor-only; every USA Hockey major ejects (W418 claim retired) |
| D4 Citation integrity | special_teams 32(d) quotation restored verbatim |
| D5 Provenance | Not engaged |
| D6 Negative existence | "USA Hockey writes no bare major": Summary plus a flattened sweep |
| D7 Cardinal rule | Not engaged |
| D8 Numeric ownership | 32(d) "at least one game" |
| D9 Summary layer | game_management KT14 and CM; bcb and special_teams CM |
| D10 Key-facts | Facts lines gm :1249, fs :803, pwtp :718 and winger :750 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads; one MAJOR caught and reverted |
| D12 Read-aloud | "any 49(a) major" avoided (voiced as "forty-nine, clause a major"); antecedents checked |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **bcb CM :2067, optional, harsh direction only:** name USA Hockey (603 has no bare major), and NHL/PWHL 41.5 alongside the EIHL head-or-face limb.
2. **forechecking_systems facts :803, optional:** "a major for any" would also cover a 52(a) charge on a goalie outside the crease (298/300).
3. **special_teams :1208:** "Any major for contact with a goalie" could literally include an accidental high stick that hurts no one. That errs harsh.
4. **Lead (rules-verifier):** USA Hockey charging (607) as an alternative call for a goalie lane block; casebooks not read.
5. **Not fully swept:** "a major for it" at bcb :680/:1451 relies on the 49(a) act. A CARHA 66 interference major on a late hit was not tested, but it ejects too (30(a)).

## What this method could not have found
- Ejection wording outside the swept vocabulary.
- A USA Hockey bare major written across sentences or inside a casebook situation.
- League regulations.
