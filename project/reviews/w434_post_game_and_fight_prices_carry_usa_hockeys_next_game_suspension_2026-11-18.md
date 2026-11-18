# W434: post-game acts and USA Hockey fight prices now carry the next-game suspension (404(b), 615(f)); Hockey Canada's late-game suspension (4.8(c)) is added where a fight is priced; goaltender's CARHA hedge asks the real open question (18 November 2026)

**Content files changed:** foundation/on_ice_communication.md, foundation/rules_primer.md, off-the-ice/team_play_and_culture.md, positions/goaltender.md, systems/special_teams.md.
**Also changed:** project/plans/OPEN_ITEMS.md, this record.

## Source
- **Plan row:** From W433 (1). This applies the W433 safety ruling: "ends your game" stays for a USA Hockey game misconduct during play. Fix only where the act is post-game, or where a unit presents a USA Hockey price as complete.
- **Triage:** a safety-reviewer read the ten candidates plus a wording sweep. It found 7 DEFECTs (scratchpad/w434/triage.md).
- **Authors:** A on_ice, B rules_primer, C team_play, D goaltender, E special_teams.

## What changed (voiced)
| Unit | Now |
|---|---|
| on_ice CM :684 | "Under USA Hockey and the IIHF, swearing after the game is one straight away, and under USA Hockey any game misconduct also suspends you for your team's next game." |
| rules_primer :599 | After the obscene-gesture sentence: "Under USA Hockey any game misconduct also suspends you for your team's next game (404(b))." |
| rules_primer :1071 | "…and the IIHF (39.5(II)); under USA Hockey that also suspends you for your team's next game (404(b))." |
| team_play :410 | "**An obscene gesture ends your game**, … and under USA Hockey it costs your next game too (404(b)), even if you make it after the final whistle. Under USA Hockey, banging the boards, glass or goal frame in protest of a call does the same (601(d)(3))." |
| goaltender Fighting bullet | "Under USA Hockey that game misconduct also costs at least your next game (404(b)), and a second fighting major with the same team in a season costs three games (615(f)); under Hockey Canada, a fight in the last 10 minutes, in overtime or after the game costs at least the next game or seven days (4.8(c))." |
| goaltender Going-in bullet | USA Hockey 615(d) "…costs your next game too (404(b))". Hockey Canada 7.10(e)(ii) gains the 4.8(c) window. "CARHA 37(d) does the same" became "gives a game misconduct to a goalie", so CARHA no longer picks up Hockey Canada's next-game cost. **This made the act cheaper (permissive) at HEAD:** "For joining in or peacemaking, whether a further suspension follows is not settled by the text", with no book named. Now: "Under CARHA, whether that game misconduct counts among the "fighting penalties" that 59(d) suspends until the Chairman deals with it is not settled by the text, so plan on the suspension." |
| special_teams :463 | "Its real price can be a body off your bench for the night or longer: … under the IIHF book plan on it. Under USA Hockey it also suspends you for at least your team's next game, and a second fighting major with the same team in a season for three (615(f)). Under Hockey Canada, a fight in the last 10 minutes, in overtime or after the game costs at least the next game or seven days (4.8(c))." |

**Scope discipline.** Every next-game clause names its book and is placed so it cannot reach the IIHF/NHL/PWHL. The rules-verifier confirmed that IIHF 23.1–23.2 has no automatic next game. In several places authors departed from the triage sketches for exactly this reason: the special_teams separate sentence, rules_primer's clause at the end of its sentence, and goaltender's change to the CARHA verb.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | **Triage:** 7 DEFECTs, 3 JUDGEMENT, the rest OK. **First read:** CLEAR. Minors: M1 615(f)/"at least", M2 special_teams HC 4.8(c), M3 team_play "so does", nit on_ice "you your"; all applied. **Confirmation:** CLEAR. Nit "costs three games" applied. |
| rules-verifier | **First read:** all 7 scoped correctly. WRONG on framing: the goaltender CARHA hedge assumed the open answer (59(d) "fighting penalties" is undefined). 615(f) and 403(b) understate where a sentence reads as complete. IIHF 23.1–23.2: no automatic next game. **Confirmation:** all six OK. "either" became "any" at rules_primer :599, as the reviewer suggested. |
| site-reviewer | Five pages at 400×812 DPR 2 light/dark and 1440 light, on the 04:16:24 build. Every worst window, KT window and amber count is unchanged. Nothing over 50%. 0 bare, 0 untreated, 0 panels, 0 console errors. Source ⚠️ counts equal HEAD. |

### C11
The coordinator wrote no content. Every post-review edit is reviewer text applied by its author, or an author deviation a reviewer confirmed:
- "with the same team" (615(f));
- the CARHA hedge with the 32(d) clause dropped;
- the folded rules_primer sentence.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0. dist/index.html is 18 Nov 04:16:24; the last content edit was at 04:15:55.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change.
- **Callout flow:** --bare reports 0. --panels reports 0 on all five files.
- **check_marker_pairs:** 0 LOST and 0 SPLIT on all five files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | USAH 403(b), 404(b), 601(d)(2)/(3)/(10), 615(a)/(d)/(f). HC 4.8(a)/(c), 7.10(b)/(e)(ii), Glossary. CARHA 2026 32(b)–(d), 37(d), 59(b)/(d). IIHF 2026/27 23.1–23.2, 75.5(V). |
| D2 Exceptions | HC 4.8(c) window only; 615(f) "with the same team"; 403(b) two-game floor |
| D3 Cross-book divergence | Next-game suspension automatic in USAH; in HC only in the late window; absent in the IIHF |
| D4 Citation integrity | All new citations checked against the rule text |
| D5 Provenance | Not engaged |
| D6 Negative existence | CARHA "fighting penalties" undefined (one hit in a flattened sweep), hence "not settled … plan on" |
| D7 Cardinal rule | Not engaged |
| D8 Numeric ownership | "at least" next game; "three games" (615(f)) |
| D9 Summary layer | Each author layer-tested its claim. Facts lines on_ice :525, special_teams :1109 and goaltender :753 already carry 404(b)/4.8(c). |
| D10 Key-facts | Not changed |
| D11 Reader safety | safety-reviewer: triage plus two reads |
| D12 Read-aloud | Qualifier scope checked in rendered chunks; "you your" removed; "does the same"; "costs three games" |
| D13 Folklore | Not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed (plan rows)
1. **615(f) carriers elsewhere:** other documents that price a USA Hockey fight as one game only, for example bcb and positions. No sweep was run.
2. **Summary layers in these five files** (facts, CM, KT) were not layer-tested for "a fight costs only tonight", beyond the facts lines that already carry 404(b).
3. **team_play CM chunk 038:** names a suspension for force and spitting at an official, but not for an obscene gesture (JUDGEMENT; mid-game framing).
4. **CARHA:** whether 59(b)/37(d) game misconducts are "fighting penalties" under 59(d). The book is silent; no casebook is on disk.
5. **Hockey Canada fight during play:** reported for "further action" (4.8(a)). Member and Branch schedules are not on disk.

## What this method could not have found
- League practice on any of these suspensions.
- Post-game acts worded outside the sweep ("in the tunnel").
- Real audio.
