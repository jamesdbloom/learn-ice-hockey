# W456: three diagram captions cut from about 270 words to 141–158, with the amber on the instruction only, and Winger's IIHF "no minor" made a planning instruction (18 November 2026)

## Files changed
**Content:** positions/winger.md

**Diagrams:**
- site/src/diagrams/forechecking_systems.mjs
- site/src/diagrams/defensive_zone_coverage.mjs
- site/src/data/diagrams.json (rebuilt)

**Also:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan rows:** From W455 (1)–(5). The owner's standing priority is readability and diagrams; length is a defect.
- **Authors:** two agents.
  - A owned every diagram module and worked in five rounds.
  - B owned winger.

## What changed

### Captions
| id | Hosts | Words: HEAD → now | Caption amber share at 400 |
|---|---|---|---|
| forecheck-122 | forechecking_systems, how_to_watch_hockey | 284 → 158 | 30% |
| forecheck-131 | forechecking_systems | 267 → 141 | 33% |
| dz-collapse-corner | defensive_zone_coverage | 261 → 158 | 20% |

- **The multi-book tariff is gone.** In its place, each caption gives one price sentence, then the instruction.
- **Price sentence (plain text):** "In most books a call for checking from behind ends your game every time, in every book it can, and under USA Hockey it must whenever it is forceful at the boards, sends them head first into the boards or net, or is reckless."
- **Instruction (amber):**
  - Forecheck pair: "⚠️ If your game allows body checking, the arriving player carries the whole onus: take the puck, take the ice, or angle them off it, and never finish into the back of a player facing away. In IIHF women's hockey, never use the boards on an opponent."
  - dz-collapse-corner: "⚠️ Take the puck, take the ice or angle them off it. You are there to win it, not to join a pin. Pin the puck, not the player. Never finish into their back."
- **The forecheck pair still share their block word for word.**
- **Layer test (author):** every cut limb is carried in the forechecking_systems and defensive_zone_coverage prose. Safety measured it 2–6 chunks before each caption. That includes the HC/CARHA mandatory match, the HC head counterweight and the USA Hockey tiers.
- **Coordinator decision:** how_to_watch_hockey carries none of the cut tariff. It is a spectator page that hands body-checking law to Forechecking Systems, and safety accepted the short caption there.

### Rounds, and what each caught
1. **First cut.** The diagram reviewer found a **MAJOR**: arrival-test rule 4 was broken. Pass 3 fixes W1's facing, and the cut had dropped the onus and the level caveat. Two minors: the women's 101.1 boards limb was no longer voiced before either marker, though the author's comment claimed it was; and dz's "pin the puck" could be heard as telling the centre to pin. Rules suggested an optional fuller USA Hockey clause.
2. **Restored onus, "never pin her on the boards", USA Hockey "must… head first or reckless".** Safety found a **MAJOR**: "never pin her" was narrower than 101.1, which bars using the boards to eliminate, push or pin, so it dropped pushing. The diagram reviewer noted "head first" was broader than 608(b), and "her" had no antecedent.
3. **"never use the boards on an opponent"; "sends them head first into the boards or net".** Rules OK, safety CLEAR.
4. **The site reviewer found a MAJOR readability regression.** `captionNodes` (remark-corpus.mjs) puts everything from the first ⚠ to the end of the caption in one warn span. Cutting the neutral text before the glyph raised caption amber to 57–63%, and the worst 400px windows to 62, 56 and 57.
5. **Reorder.** The price sentence was moved before the glyph and one "so" dropped. The worst windows returned to their W455 figures: 41.0, 45.0 and 29.4. Safety CLEAR; each caption still voices "Important." once.

### winger (voiced)
NHL and PWHL Rule 48 have no supersession clause (`supersede` returns 0 hits in both books). IIHF 48.1 does: "This rule supersedes all similar actions regarding hits to the head and neck", and 48.2 allows a minor.
- **:530** now reads "no minor at all under the NHL and the PWHL, do not count on one under the IIHF".
- **:721** now reads "under the IIHF, do not plan on one either". Safety's text replaced "plan on none", which could be heard as "expect no penalty".
- **A new bullet:** the IIHF skater head case, "…Plan on the major and game misconduct anyway (43.3; 48.3)".
- **A new provenance note** on Rule 48.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | Winger: all OK. Captions: the price sentence is true in all six books. "Must" is right for all three USA Hockey triggers (608(b) "shall"; Casebook 608 Sit 1 "must be called… In every instance"). "Never use the boards on an opponent" covers 101.1's three acts. |
| safety-reviewer | Four rounds: two Majors (101.1 narrowing; one shared with the diagram reviewer's onus point), one Minor (winger "plan on none"). All fixed, then CLEAR. |
| diagram-reviewer | First read: forecheck-122 WORSE (Major, onus) and two Minors. Confirmation: all three BETTER. |
| site-reviewer | Found the amber-to-end regression. Re-measure on the 13:18:18 build: caption amber 30/33/20%; worst windows at or below W455; 0 bare, 0 untreated, 0 panels, 0 console errors; ⚠️ counts equal HEAD. |

### C11
The coordinator wrote no content. Every caption change is reviewer text or an author's fix that a reviewer confirmed. The coordinator's brief proposed "never pin her on the boards", and safety caught it as narrower than the rule. The how_to_watch decision is the coordinator's, and safety accepted it.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 13:18:18; the newest source is dzc.mjs at 13:17:06.
- **Gates:** check_links --quiet, check_facts, check_absolutes (after build-diagrams), check_geometry and check_secrets pass. check_counts --update made no change. check_label_paint --severe = 2. check_caption_pairs = 0. check_callout_flow --bare = 0; winger `--panels` = 0.
- **Marker pairs:** check_marker_pairs (winger) reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL/PWHL 43, 48 (no supersede); IIHF 43.1–43.3, 48.1–48.3, 101.1 (both editions); USAH 608(a)/(b), Casebook 608 Sit 1; HC 7.5, 7.6; CARHA 53 |
| D2 Exceptions | IIHF 48.1 supersession; HC head carve-out (carried in hosts) |
| D3 Cross-book divergence | price sentence across six books |
| D4 Citation integrity | caption source comments updated |
| D5 Provenance | winger Rule 48 provenance note |
| D6 Negative existence | `supersede` absent from NHL and PWHL books (searched) |
| D7 Cardinal rule | the coaching-choice disclosure kept in every caption |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | caption vs host layer test, with chunk distance measured |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer, four rounds |
| D12 Read-aloud | "Important." once per caption; antecedents ("her" → "an opponent") |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer, two measurements |
| Diagrams | diagram-reviewer, two reads |

## Found, not fixed
- **Renderer limit:** `captionNodes` cannot end an amber run mid-caption. Any caption needing neutral text after an instruction needs a renderer change. This belongs in the plan.
- **Stale reason string:** the forecheck-122 → forecheck-212 dependency reason in scripts/check_caption_pairs.py:~83-92 is out of date (coordinator file).
- **Coverage gap (rules note):** "never use the boards on an opponent" omits 101.1's possession condition; this errs strict. The women's body-checking description elsewhere in the corpus has not been checked against 101.1's first sentence.
- **"No minor" lines on other pages (W456 sweep):** rules_primer :19, center :789 and dtr :318 say "no minor in NHL, PWHL or IIHF" about checking from behind. They are true of Rule 43 but omit IIHF 48's head case, which errs harsh.

## What this method could not have found
- Real synthesised audio.
- Whether a first-time reader now learns faster from the shorter captions.
