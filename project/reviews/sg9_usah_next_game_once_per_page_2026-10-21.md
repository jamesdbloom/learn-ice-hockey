# SG9: the USA Hockey 404(b) next-game suspension, stated once per page (21 October 2026)

**Origin.** sg7R and sg7SC found that the corpus almost never stated USA Hockey 404(b): any game misconduct also suspends the player for the team's next game, and a second major in one game (403(b)) brings at least two games (usah.txt :2532–2546). The sg9census rules-verifier counted 476 sites that price a USA Hockey game misconduct, major or ejection without that suspension. 230 of them are voiced alone.

**The owner's ruling, 21 Oct: "Once per page".** Each affected page gets one plain line where it sums up its rules, and one line in its key facts. The individual penalty lines stay as they are, because adding the clause to all 476 would bloat hundreds of lines and goes against "shorter is better". The R2 rule (from SG7/SG8) still applies: a CARHA-only next-game clause beside a USA Hockey ejection must not imply that USA Hockey has none.

Nine agents worked from scratchpad sg9_brief.md, each owning a disjoint group of files.

## Changes (30 files)

- **Already carried, no new line:**
  - body_contact_and_battles (:495, :788, :803);
  - defensive_zone_coverage (:184, :209, :502);
  - conditioning_and_recovery;
  - body text of goaltender, special_teams, winger, center, puck_handling (facts), scanning and pwtp.
- **New body line and new or extended facts line:**
  - defender, goaltender (facts), switching_positions (extended 603 facts line);
  - forechecking (:663 widened; facts :584);
  - offensive_zone_play (:1000 widened; facts :995);
  - faceoffs (body :306; facts :295);
  - game_management (body :948; facts :181);
  - special_teams, winger and center (facts);
  - breakouts, defending_the_rush, neutral_zone_systems and zone_entries (facts, plus body where missing);
  - risk_management (body :325; facts :299);
  - puck_support (body :611; facts :589);
  - pwtp (facts :830 extended);
  - scanning (facts :352 extended);
  - shooting and passing (body and facts);
  - puck_handling (body :530);
  - getting_started (body).
- **Pages with no facts blocks, body line only:** rules_primer (CM :1101 as the voiced-alone carrier), glossary :293, rink_map :224, team_play :278, equipment :131 and mental_game :569.
- **R2 false contrasts fixed** (a CARHA-only ban beside a USA Hockey ejection): team_play :485; rink_map CM :644 and KT16; glossary CM :511; on_ice_communication facts :289; defender facts :340; neutral_zone :439; risk_management :325; time_and_space :301.

## Reviews

- **sg9R (rules-verifier).** It checked against usah.txt 403(b), 404(b), 405(c), 608 Note, 615(c), 629 and the Summary of Penalties; the USAH Casebook 401 Sit. 8 and 615 Sit. 17; and CARHA 2026 30(a), 32(c), 32(d), 52, 53, 54, 63 and 80. It found no contradicted claim and nothing that errs in the permissive direction. It raised:
  - switching :253: flat "two", changed to "at least two";
  - defender :340: lost CARHA's "ejection";
  - team_play :283: the 615(c) stacking question;
  - center :732 and winger :473: scope reached a match (405(c)), now scoped to "game misconduct".

  All were fixed.
- **sg9S (safety-reviewer, fresh).** No CRITICAL or MAJOR. Five MINORs, all fixed:
  - defender :340 ejection limb;
  - pwtp :830 dropped "goal frame";
  - duplicates in forechecking (:663/:671) and team_play (:278/:286);
  - risk_management :873 clause placed in the CARHA bullet (restored to HEAD);
  - NZ :439 order.
- **sg9S re-read of the fixes.** It found **one new MINOR introduced by a repair**. team_play :283 had been changed to "a game misconduct *that carries* a two-game suspension", following the Casebook. But 615(c) says its two games are "in addition to any other required suspensions" (usah.txt :4084–4086), and 404(b)'s carve-out covers only 403(b). So the new wording made the act sound cheaper than the cautious reading. The coordinator reverted it to HEAD's "plus a two-game suspension", which lets the :278 lead-in add the next game. Center :732 was smoothed to "costs you the next game too". The second re-read returned **CLEAR**.

## Gates (after the final content edit, no pipe)

- check_facts, check_links, check_absolutes and check_secrets pass.
- check_marker_pairs: 30 files, 0 LOST, 0 SPLIT.
- check_counts --update: no change.
- `npm run build` exited 0 after the final edit; check-links is clean.

## Dimensions (D1–D15)

| Dim | Status |
|---|---|
| D1 Rules accuracy | ✓ sg9R; the rules are listed above. |
| D2 Exceptions | ✓ A match (405(c)) is excluded. A CARHA minor plus game misconduct is excluded. "At least" is used for 403(b) and 615(c) stacking. |
| D3 Divergence | ✓ Hockey Canada is left out (4.8(c) applies only in the last 10 minutes or overtime). CARHA and USA Hockey are named together where they sit side by side. |
| D4 Citations | ✓ 404(b) and 403(b) are cited at each new line. The 608 Note paraphrase keeps its scope. |
| D5, D6, D8, D13 | Out of scope: no external source, existence claim, owned figure or folklore. |
| D7 Cardinal rule | ✓ Rule text only. No coaching choice is involved. |
| D9 Summary layer | ✓ Once per page by ruling. R2 contrasts were fixed in the CM, KT and facts layers. |
| D10 Key facts | ✓ --near was checked. No block goes over 14 lines or 8 coaching facts. Lines that were extended kept every limb. |
| D11 Reader safety | ✓ sg9S CLEAR after two rounds. One repair-introduced MINOR was reverted. |
| D12 Read-aloud | ✓ sg9S rendered the main files twice. The new facts lines make sense heard alone. |
| D14 Style | ✓ One plain sentence per page. Duplicates were removed. |
| D15 Rendered site | Build passed. Prose only, with no new layout. ⚠️ leads were preserved (check_marker_pairs). |

## Still open

- **R2 candidates** where per-book bullets sit side by side. These were left alone under the once-per-page ruling: zone_entries :261 and :378; defending_the_rush :460, :502 and :891; defender :355 and :889.
- **Other "in addition to any other required suspensions" sites** (615(f) fighting, other 403(b) sites). Check them for the same stacking wording.
- **Pages without facts blocks**: rules_primer, glossary, rink_map, team_play, equipment, mental_game, getting_started. They carry the clause in the body only (rules_primer also in CM).

## What this method could not have found

- A USA Hockey ejection priced in words the census did not search for ("in every book", "most books").
- Chunk distance between a page's single 404(b) line and the penalty lines it covers. This is accepted by the ruling.
- An affiliate-level variation in how a suspension is served.
