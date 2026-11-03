# SG150: faceoff-violation wording, the hash-marks contradiction, abuse-of-officials pricing, and a goaltender facts line (2 November 2026)

**Files:**
- content/systems/faceoffs.md
- site/src/diagrams/faceoffs.mjs (the faceoff-dzone-alignment caption, hosted in seven documents)
- site/src/data/diagrams.json (rebuilt)
- content/positions/switching_positions.md
- content/foundation/uk_rules.md
- content/systems/special_teams.md
- content/foundation/on_ice_communication.md
- content/off-the-ice/mental_game.md
- content/positions/goaltender.md
- project/plans/OPEN_ITEMS.md (this change, plus SG149's plan note)

## Source
OPEN_ITEMS rows SG143/SG144 carry-overs and SG142 (mental_game :574/:693, the goaltender facts line). The owner's instruction on 2 November was "then continue with the plan".

## What changed
- **"Costs your centre the dot", "loses the draw" and "tossed"** could be heard as losing the faceoff or as a game ejection.
  - Every book's word is "ejected from the face-off", and a second violation on one draw is a penalty in all six books.
  - The wording now reads "thrown off the dot", "replaced" or "removed from the draw" in every layer of these files:
    - faceoffs: 11 sites, including two facts lines, Common Mistakes, KT3 and the caption;
    - switching_positions: facts, body, Common Mistakes, KT5 and KT6;
    - uk_rules: Key focus, body, Common Mistakes and KT3;
    - special_teams: one facts line and one body line;
    - on_ice_communication: one body line.
  - switching_positions gained a "do it twice on one draw" paragraph naming each book's second-violation penalty, including Hockey Canada's mandatory cases (6.2(e) second paragraph; 6.5 Junior after an icing).
- **The hash-marks contradiction.**
  - on_ice_communication said NHL 76.7(ii) "names no consequence for the centre". special_teams said the centre goes "in all six books".
  - A six-book sweep found the centre is removed in NHL, IIHF 2026/27, PWHL, USA Hockey, Hockey Canada and CARHA.
    - USA Hockey says so outright.
    - NHL, IIHF and PWHL by structure: the 76.4 icing carve-out exists to stop the default removal, and 76.6 puts players behind the restraining lines.
    - Hockey Canada and CARHA through their Glossaries.
  - IIHF 2025/26 v1.1 only warns.
  - on_ice_communication was corrected in every layer and its trailer. The post-icing warning now names the PWHL (78.4) and Hockey Canada Junior (6.5(a)).
  - special_teams now says "whichever book your league plays".
- **mental_game, abuse of officials:**
  - **:574** now opens with "Never swear at, gesture at or abuse an official: in every book it can end your game", then one sentence per book:
    - USA Hockey swearing is a misconduct, while abuse that comes with disputing a call starts at a minor (Casebook Situations 3 and 9).
    - The IIHF can give a game misconduct straight away (39.5(VIII)), and its Handbook rules in-game abuse a minor first.
    - The IIHF adds a game misconduct for a gesture, slur or sexual remark.
    - CARHA 46 allows a gross misconduct.
    - Hockey Canada 11.2(f) covers a travesty.
    - After the game it is a game misconduct in the NHL, PWHL, IIHF and USA Hockey.
  - **Common Mistakes :693 and KT11:** "all but a light touch" (false) became "a touch or hold can stop at a misconduct" (601(c)(7), Casebook Situation 12). KT11 ends "Never touch an official, throw anything or retaliate."
- **on_ice_communication :654:** USA Hockey and CARHA ejection limbs added: 601(d)(5), (d)(10), (e)(2), (e)(3) with "likely multi-game" (owner ruling 25 Oct), and CARHA 46.
- **goaltender:**
  - New facts line: Hockey Canada after-the-whistle puck out of play (11.1 item (v), Notes 1 to 11.1(d)/(e)).
  - "During play" added to the 10.1(v) line.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (faceoffs) | 11 sites PASS; :764 grammar and :1229 "Elite League's book" fixed |
| rules-verifier (switching_positions, uk_rules) | All PASS; :171 IIHF edition tag and 76.3 cites, :198 "to the player" fixed |
| rules-verifier (on_ice_communication, special_teams) | Hash-marks conclusion PASS, with no contrary NHL/IIHF/PWHL text. FIX: :654 made USA Hockey cheaper ("after the game" only), fixed. PWHL/HC post-icing added |
| rules-verifier (mental_game, goaltender) | FIX: KT11 board-banging vs Casebook Situation 15. The rest PASS |
| safety-reviewer (mental_game, goaltender) | FIX (major): the IIHF limb led with "usually a minor" against 39.5(VIII)'s mandatory game misconduct; now leads with the game misconduct. KT11 now ends with "never touch an official"; readability shape adopted |
| rules-verifier (repairs) | All PASS. Notes taken: "often called" replaced by the Handbook; PWHL added to after-game |
| safety-reviewer (all 8 files) | SHIP ×6. FIX: KT11 board-banging exception (cheaper than 601(d)(3) "shall", body support cut) — board-banging removed from KT11 |
| content-reviewer (all 8 files) | M1 KT11 (as above); M2 special_teams "either IIHF edition" contradicted itself; M3 switching_positions omitted HC mandatory cases. All fixed. Minors fixed: glossary citation, trailer additions, "break a faceoff rule" → "get your centre replaced", cite alignment, :574 trim. Census of leftover sibling wording → plan |
| rules-verifier + safety direction (final repair text) | All five items PASS; nothing cheaper. CARHA advisory at :654 → CARHA added |

### C11
- One authoring agent per file set made every edit:
  - faceoffs + caption
  - switching_positions + uk_rules
  - special_teams + on_ice_communication
  - mental_game + goaltender
- The coordinator wrote only the plan and this record.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST in every file. The units listed as "no longer present by key" are reworded openings that keep their ⚠️.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier on every file, twice on the repairs |
| D2 Exceptions | Post-icing carve-outs per book; second-violation tiers; USA Hockey Casebook situations |
| D3 Divergence | Six-book tables (hash marks, second violation); IIHF edition split; EIHL vs In-House scope by competition |
| D4 Citation integrity | Rule numbers and quotations checked against `sources/`; no URL changed |
| D5 Provenance | Quotations from the primary text on disk |
| D6 Negative claims | "USA Hockey has no carve-out" and "the EIHL Casebook has no Rule 76" tested (flattened, footers stripped) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | No figures |
| D9 Summary layer | Layer-tested per file by authors and the content-reviewer; KT11 and the special_teams facts line fixed |
| D10 Key-facts layer | Facts lines in faceoffs, switching_positions, special_teams, on_ice_communication and goaltender reviewed voiced alone; caps pass |
| D11 Reader safety | safety-reviewer twice; every cheaper-direction finding fixed |
| D12 Read-aloud | mental_game, on_ice_communication and switching_positions rendered; claims and qualifiers in the same chunk |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | The build; the caption change is text only. No site-reviewer (declared: no layout change) |

## What this method could not have found
- League practice not written down: whether NHL, IIHF or PWHL officials remove the centre for crossing the hash marks, which those books state only by structure.
- A later EIHL Casebook bulletin adding a Rule 76 entry.
- The scope of CARHA 46(g)'s "any such infraction". The corpus takes the harsher reading.
- Faceoff wording on sibling pages outside this diff, and phrasings the census regexes did not search (plan row).
- How the five unrendered files sound.
