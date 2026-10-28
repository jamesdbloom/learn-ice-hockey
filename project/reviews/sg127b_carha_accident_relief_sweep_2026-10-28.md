# SG127b: CARHA's accident relief is an open list on eight more pages; from-behind prices fixed on the way (28 October 2026)

**Files:**
- content/off-the-ice/team_play_and_culture.md
- content/foundation/on_ice_communication.md
- content/foundation/rules_primer.md
- content/foundation/rink_map.md
- content/foundation/core_principles.md
- content/systems/game_management.md
- content/systems/breakouts.md
- content/systems/faceoffs.md
- project/plans/OPEN_ITEMS.md

## Why
SG124 (e8d4330) found that Body Contact and Battles stated CARHA 49(c) ("accidental contact… no penalty") as a closed list ("except at the head and from behind"). That is false in the permissive direction:
- 66(b) penalises contact that impedes a goalie;
- 86(a) penalises a slide that trips the carrier unless you play the puck first;
- 50(a)'s minor applies only "other than a stick", and 62(b) makes stick contact above the shoulders a major.
These eight sibling pages each cite CARHA 49(c).

## What changed
**Round 1** (one agent, 15 edits). Every accident-relief unit became open-ended ("not every accident is free"), and the head-contact minor was scoped to no stick. The goalie (66(b)) and slide (86(a)) cases were named where the context needs them. game_management :347 also changed: "CARHA penalises deliberate contact with a goalie" had implied accidental contact is free.

**Rounds 2–5** (review findings, all fixed by the same agent):
- **on_ice_communication :304.** 66(b) had been aimed at a defender's own goalie; it is now retargeted. The paragraph now prices a push on a screener's back under 53(a) ("a game misconduct with either a minor or a major") and 53(b) (a match if it drives them into the net unable to protect themselves). Before, 49(a) alone left the push readable as a plain minor (pre-existing, permissive).
- **rules_primer :1084.** The slide carries its puck-first excuse ("before you play the puck"). Also added: 62(b), and 53(b)'s "cannot protect themselves" condition.
- **team_play :559 and faceoffs :624.** "Any major ejects" became "any body-contact major ejects". The added accidental 62(b) high-stick major does not eject (30(a) Note) and carries no 32(d) ban unless someone is injured.
- **The 62(b) stick major** ("a minor without a stick (50(a)) and a major with one (62(b))") was added at breakouts :215, faceoffs :283/:624, team_play :559, rink_map :530 and core :99/:249. The 53(b) condition was added where it was missing.
- **game_management :347** now reads: "CARHA penalises contact that impedes a goalie, and even if you are pushed or tripped into them, you take a minor if you did not try to avoid them; it also penalises deliberate contact…" (66(b) limbs). :921 now reads "head contact is still a penalty (50(a))"; :925 adds the 62(b) major.
- **faceoffs rim-retrieval section, :604–:626 (pre-existing, permissive).** It said "a minor is the floor", but a hit on a defenceman turned toward the wall is checking from behind. Now:
  - facts :606: "Except from behind, a minor is the floor…";
  - new facts :607: Hockey Canada 7.5(a) and CARHA 53(a) are at least a minor plus a game misconduct; under USA Hockey a forceful hit on a player along the boards is a major plus a game misconduct or a match (Casebook 608 Situation 1);
  - body :621 states the same, with only minimal contact a minor plus a misconduct;
  - CARHA :625 adds 53(a).
- **faceoffs facts :605:** "CARHA excuses some accidents, but not head contact or a hit from behind into the boards".

## Reviews
| Round | rules-verifier (carha_2026.txt 30(a), 32(a)/(d), 49, 50, 52(b), 53(a)/(b), 62(b), 66(b) all limbs, 86 + sliding Note; hc.txt / hc_2026-08-print 7.5 + Interps 1–4; usah.txt 608(a)–(c), usah_casebook 608 Sit. 1) | safety-reviewer |
|---|---|---|
| 1 | Two WRONG: on_ice :304 (66(b) aimed at the wrong player); rules_primer :1084 (slide without the Note). game_management :347 incomplete. | 6 SHIP, 2 FIX: on_ice :304; faceoffs :605 leaned permissive. |
| 2 | Nothing cheaper because of the edits. on_ice :304 omitted 53(a) (pre-existing); team_play :559 contradicted itself on "any major". | FIX: the on_ice :304 MAJOR (53(a)); team_play :559; faceoffs :624. |
| 3 | All five sites CONFIRMED. on_ice :304's "minor or major plus GM" parse needed fixing; faceoffs :624's from-behind gap noted. | SHIP on on_ice, team_play, game_management. FIX (MAJOR): the faceoffs rim section's "a minor is the floor" for a wall-facing hit. |
| 4 | Faceoffs: HC 7.5(a) and CARHA 53(a) CONFIRMED. USA Hockey CONFIRMED-BUT-INCOMPLETE: Casebook 608 Sit. 1 makes a forceful hit on a player along the boards a mandatory major plus game misconduct. | FIX (MAJOR), same USA Hockey finding. SHIP on on_ice and game_management. |
| 5 | All three CONFIRMED: faceoffs :607 and :621 against usah 608(a)–(c), Casebook 608 Sit. 1 (:11750–11777), hc.txt 7.5(a)–(e), carha_2026 53(a)/(b); game_management :347 against 66(b) limbs. | SHIP. The round-4 MAJOR is closed; :607, :621 and CM :1228 agree; :607 is clear voiced alone (chunk 037). 0 LOST across all eight files. :621 is 1,191 characters. |

### C11
No coordinator content edits. Every edit was made by the author agent and reviewed afterwards.

## Dimensions (per review_process.md:220-234)
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier, five rounds |
| D2 Rules travelling without exceptions | Each round swept CARHA (and the Hockey Canada and USA Hockey from-behind rules) by act |
| D3 Rule-set divergence | Each book's price stated separately |
| D4 Citation integrity | Out of scope, declared by the coordinator: no URL changed |
| D5 Provenance | Out of scope, declared by the coordinator: no non-rulebook quotation |
| D6 Negative existence claims | Out of scope, declared by the coordinator: no absence claim changed |
| D7 Cardinal rule | safety-reviewers: none |
| D8 Numeric ownership | Out of scope, declared by the coordinator: no owned number changed |
| D9 Summary layer | safety-reviewers: faceoffs facts, body, CM :1228 and KT6 agree |
| D10 Key-facts layer | safety-reviewers: every changed facts line read voiced alone |
| D11 Reader safety | safety-reviewer, five rounds |
| D12 Read-aloud integrity | Every round rendered the changed files |
| D13 Folklore | None |
| D14 Structure, style, terminology, cross-links | check_links passes; edited paragraphs under 1,200 characters |
| D15 Rendered site | The coordinator ran a full site build after the last content edit. No structure changed, so the site-reviewer is declared out of scope by the coordinator |

## Carried to the plan
- USA Hockey checking-from-behind prices given as 608(a) alone, without Casebook 608 Situation 1 ("forceful along the boards" → major plus game misconduct), may stand on other pages. This needs a sweep.
- "Contact that impedes a goalie is a minor" without the pushed/tripped relief (core, team_play, rink_map, rules_primer) is harsher than game_management :347 (harsh).
- faceoffs :605 drops 53(b)'s condition (harsh). on_ice facts :303 has no 53(a) price (its instruction is safe).
- faceoffs :607 and :621 give only HC, CARHA and USAH prices; NHL/IIHF/PWHL appear only in CM :1228 (fits a non-checking section).
- game_management :347 omits 66(b)'s discretionary major for deliberate contact (it claims no ceiling).
- IIHF 43 is not named in the faceoffs rim section (British readers get "price unsettled" at :627; the direction is right).
- HC 7.5 Interpretation 3 (marginal low-speed pinning is permitted) makes "a hit on a player turned toward the wall is checking from behind" stronger than the book for Hockey Canada (harsh).

## What this method could not have found
- A next-wording paraphrase of CARHA's accident relief that uses none of the swept words.
- Other Casebook situations that price these acts outside the rule they cite.
- Where a referee draws the line between forceful and minimal.
