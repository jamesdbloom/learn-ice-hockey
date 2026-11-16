# W349: the hit-from-behind scene carries its own mandatory match, in fourteen documents (16 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/foundation/language_and_glossary.md
- content/foundation/on_ice_communication.md
- content/systems/defending_the_rush.md
- content/systems/faceoffs.md
- content/systems/special_teams.md
- content/systems/game_management.md
- content/positions/center.md
- content/positions/defender.md
- content/positions/goaltender.md
- content/technique/shooting.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/risk_management.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
W348's leftover (1). W348 fixed the defect on defensive_zone_coverage and forechecking_systems. The defect: a scene names the boards, head-first or turned-back case and says the hit "ends your game", but never voices the match that applies.
- **Hockey Canada 7.5(c) and CARHA 53(b):** a mandatory match for a hit from behind into the boards or goal frame/net on a player unable to protect or defend themselves.
- **USA Hockey 608(c):** a match for reckless endangerment with excessive force on a vulnerable or defenceless player, with no boards condition.

A read-only census rendered 39 documents. It found the shape in 16 files, plus a two-book caption pair outside content/.

## Scope ruling (coordinator, from the owner's 14 November decisions)
- **Key focus and Overview:** out of scope under decision F, because those layers are tactics. That covers body_contact :31/:51, rules_primer :19/:35, zone_entries :22 and playing_without_the_puck :22.
- **Key Takeaways:** each gets the match as one short clause. Decision A says a KT keeps the instruction and the harshest price, and the match is the harshest price. The lesser tiers move to What it costs or the owning body section, behind the page's existing carriers.
- **Body scenes, facts lines and Common Mistakes:** get the match where it is missing. Open-ice scenes get only USA Hockey (608(c), or 602(a) for a reckless hit), never the boards match.

Five authors worked disjoint files:
- **A:** body_contact_and_battles, language_and_glossary.
- **B:** defending_the_rush, faceoffs, center.
- **C:** special_teams, shooting, goaltender.
- **D:** defender, game_management, puck_support_and_spacing.
- **E:** on_ice_communication, playing_without_the_puck, risk_management.

Every census hit was briefed as a pointer to read, not a verdict.

## What changed
**Wording reused.** Most additions reuse W348's reviewed wording:
- the two-sentence body form;
- the short KT form;
- a uniform form for sites that follow a head/neck sentence: "Hockey Canada and CARHA must give a match for a hit from behind into the boards or goal frame on a player who cannot protect themselves, and USA Hockey for a reckless one with excessive force on a vulnerable or defenceless player, boards or not (608(c))."

Every changed unit voices the match in the same spoken chunk as its instruction.

**Sites the census missed:**
- language_and_glossary :292 — a closed HC/CARHA list with no 608(c);
- faceoffs CM :1321;
- defender CM :1014 — a closed list;
- game_management :185 and CM :1284;
- goaltender KT12.

**Census hits refuted:** the match was already in the next chunk, or the site is not a boards scene:
- defender facts :287 (the HC match is in the next chunk);
- special_teams :664 and :1102;
- shooting :534;
- defending_the_rush :943;
- several What it costs leads.

**Left alone:**
- **goaltender :1277 and CM :1700.** The goalie is the one being hit, and a match tier changes nothing a goalie does.
- **goaltender :1646.** Reverted to HEAD, because :1652 two chunks later carries every limb.

**Facts lines at cap:**
- defender :287 and :818/:819 have no room. The match is in the next chunk at :288, or carried by the body at :838.
- on_ice_communication :298 was compressed to 299/300. "A game misconduct at least" dropped "minor"; reviewers judged this acceptable, because the ejection is the tier that changes what a reader does.

**New text.** All of it was reviewed in round 2:
- **New facts lines:** defending_the_rush :634, faceoffs :587, special_teams :815, shooting :287.
- **New body sentences:**
  - on_ice_communication :313, "Never push a screener in the back — that is checking from behind, which ends your game in most books…".
  - shooting :305, "Never arrive into their back either…".
- **Glossary :430.** The HC sentence is now faithful to 7.5 Interpretation 1: a shaft shove from behind is checking from behind when moving or into the boards or goal; a stationary one is cross-checking.
- **playing_without_the_puck KT10.** It gained the USA Hockey 620(b) head limb, which was missing before W349, and a ⚠️ before its match.

**Key Takeaway lengths, HEAD → this commit.** Measured from `git show HEAD:` against the working tree after the last content edit. The count is words on the KT line with the list marker, `*` and ⚠️ removed, so it runs a word or two under `check_readability`. **Every KT this wave touched is longer than at HEAD.** Adding the match to KTs that lacked it was the wave's purpose. The decision-A trims moved lesser tiers out of some of them, but that only took back part of the growth. An earlier draft of this table gave intermediate-draft "before" figures. The commit gate caught it, and the figures below replace them.

| KT | HEAD → now (words) | Lesser tiers moved out, and where they survive |
|---|---|---|
| special_teams KT8 | 91 → 111 | USA Hockey 608(a) floor → body :821, facts :1106, CM :1263. KT keeps 602(a) "plan on a match and a likely multi-game suspension for any reckless hit" and, after the gate, "under USA Hockey it must if it is forceful at the boards or head first" |
| game_management KT14 | 103 → 115 | per-book list, 608(a)/(b), 620(b), 608(c) → :1176, :1284 (608(c) also :185). KT keeps "under USA Hockey it must if it is forceful at the boards or head first" (added after the gate) and 602(a) |
| body_contact KT6 | 105 → 133 | USA Hockey 608(a) floor → facts :762/:765, body :782/:788 |
| shooting KT5 | 69 → 101 | none; pure addition of the match |
| goaltender KT12 | 63 → 89 | none; pure addition of the match |
| defender KT2 | 61 → 97 | none; pure addition of the match |
| defending_the_rush KT9 | 72 → 113 | none (the HC head-match parenthetical was trimmed in round 2 and restored after round-2 review) |
| playing_without_the_puck KT10 | 65 → 115 | none; gained the match, the 620(b) head limb and a ⚠️ |
| risk_management KT11 | 85 → 98 | none; the unnamed "a match in several books" became the named three-book match |
| language_and_glossary KT12 | 84 → 102 | none; gained the 608(c) clause |

The owner's 9 November note says length is not the success measure, and decision A asks for "the instruction and the harshest price". Here the harshest price, the match, was missing, so these KTs grew by design. Whether any is now too long to hear is an ear-test question (plan row).

## Reviews
| Round | Reviewer | Result |
|---|---|---|
| census | read-only author | 16 files, a per-file dispatch list; line numbers flagged as fuzzy pointers |
| 1 | rules-verifier (all new text) | Nothing wrong or cheaper. **special_teams KT8 mildly understated:** it dropped 602(a). on_ice_communication screener "into the goal frame" is a geometric stretch, and the paragraph is HC-only after a CARHA paragraph. Glossary :430's HC 7.5(a) "push anywhere" is overstated for a stationary shaft shove (pre-existing). defender :838's "mandatory if you meant to injure" rests on NHL/PWHL 21.1, not 43.4 (true). |
| 1 | safety-reviewer (8 files) | **MAJOR (pre-existing):** playing_without_the_puck KT10 lacked the 620(b) head limb. Minors: defending_the_rush CM :1090 "It must be a match there…" binds to head contact; ordering in faceoffs :591 and glossary :292; glossary :507 dropped 608(c)'s "reckless". KT trims supplied. |
| 1 | safety-reviewer (6 files) | **MAJOR:** special_teams KT8 lost 602(a), cheaper in a layer voiced alone. Minors: the reused pair's "it" binds to head contact after a head/neck sentence (six sites); "drive" is narrower than "pushes … in any manner"; special_teams facts :815 has no subject; defender :838 placement; shooting facts :287 had no body source; goaltender :1646 restates :1652; game_management :185 over 1,200 chars. KT trims supplied. |
| 2 | rules-verifier | Every round-2 unit OK except **defending_the_rush KT9**: the round-2 trim reduced "on the head it is head contact, a match if they cannot protect themselves" to "on the head, plan on the game misconduct anyway". With a boards-only HC match sentence, that is cheaper than HC 7.6(c)/7.7(c) (a head match anywhere; 7.6 supersedes). Author B restored HEAD's reviewed parenthetical verbatim. Upheld "plan on a match for any reckless hit" as faithful to 602(a) and Casebook 602 Sit. 1. |
| gate 1 | commit-gate | BLOCK on C8: this record's KT table gave draft "before" figures (now replaced with HEAD → now). Not blocking: "must"→"can" in special_teams KT8 and game_management KT14 (fixed with reviewer text); facts lines never seen by a facts-reviewer; dtr has three copies of the 608(c) facts line. Content otherwise passed every condition. |
| gate 2 | commit-gate | KT table verified (all ten rows). BLOCK on C6/C11: game_management :185 still dropped HEAD's USA Hockey "must throw you out" for forceful-at-the-boards / head-first and 620(b) careless head contact — the KT8/KT14 fix had reached two of three units carrying the claim. Repaired: :185 now reads "…and can in every one — under USA Hockey it must if it is forceful at the boards or head first, as must careless contact with their head or neck; plan on being thrown out if it reaches their head, too." (the gate-verified KT14 clause plus HEAD's own 620(b) wording); 1,129 chars. |
| 2 | safety-reviewer (all units) | Same KT9 major, already restored. Minor 2 (game_management :185, "A hit from behind throws you out…" overstated plus a double "it") fixed with the reviewer's exact text. Upheld every antecedent, instruction-first and marker placement. 0 LOST on all 14 files; 0 panels for the three files with new glyphs. |

### C11
The coordinator wrote no content. The edits after the last review were:
- defending_the_rush KT9: HEAD's own reviewed parenthetical, restored verbatim;
- game_management :185: one sentence replaced with the reviewer's exact text;
- after the first commit gate (which BLOCKED only on this record's table), special_teams KT8 and game_management KT14 had the round-2 safety reviewer's exact text applied: "…and in every book it can — under USA Hockey it must if it is forceful at the boards or head first; …". The gate had noted the trims softened HEAD's mandatory USA Hockey ejection to "can" in two KTs voiced alone. The text is the reviewer's verbatim, confined to that finding.
- after gate 2, game_management :185 got the same clause plus HEAD's own ", as must careless contact with their head or neck" (620(b)); text already reviewed (KT14) or from HEAD, confined to the gate's finding.

Both are confined to the finding they answer.

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final content edit. After it:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets and check_counts --update all passed (counts: no change);
- check-arrivals: 0 hard;
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST on all 14 files. The 1 SPLIT HALF candidate is special_teams :815, a new facts line that echoes the marked :1114 paragraph, which keeps its marker. It is not a loss.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, two rounds, every new or reworded unit |
| D4 Citations | rule text quoted from sources/ by every reviewer |
| D5 Provenance | glossary :292's 602(a) quotation kept exact |
| D6–D8 | not engaged |
| D9 Summary layer | KT and CM units in every file reviewed twice; KT trims under decision A with per-limb survivor lists |
| D10 Key-facts layer | four new facts lines and three edited ones reviewed; check_facts |
| D11 Reader safety | safety-reviewer, two rounds |
| D12 Read-aloud | every author and reviewer rendered; chunk co-location measured for every scene |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, build check-links |
| D15 Rendered site | build plus check_callout_flow --bare (0); no browser pass (text-only change) |

## What this method could not have found
- **Scenes in other wordings.** The census and authors searched for the act in many wordings, but not "pin", "rub out", "into the glass" or "blindside". Three authors found sites the census missed, so more likely exist.
- **Caption layer.** The forecheck-122 and forecheck-131 captions (forechecking_systems.mjs, hosted by how_to_watch_hockey) price a wall scene for NHL/IIHF only. Not in this wave.
- **Hockey Canada head match in summaries.** HC 7.6(c)/7.7(c)'s head match anywhere is not voiced in body_contact KT6, special_teams KT8, game_management KT14, playing_without_the_puck KT10, risk_management KT11 or special_teams CM :1232. This predates W349; the bodies carry it.
- **USA Hockey "must" softened to "can".** Fixed after the gates in special_teams KT8, game_management KT14 and game_management :185 (the third site was caught by gate 2). A mechanical sweep by gate 2 of removed and added "USA Hockey … must/shall" clauses across the 14 files found no other lost "must".
- **Antecedent shifts.** Shifts after a closing limb other than "head or neck" were searched for only by reading.
- **Audio.** No ear test of the new KTs.
