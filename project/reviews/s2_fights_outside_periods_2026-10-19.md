# S2 (19 October 2026): fights outside the periods, and four leftovers

## What was done

**Row (cc).** One rules-verifier swept all 39 documents for fights, peacemakers, helmet removal and bench-clearing priced outside the periods using only the in-game rule. That covers the warm-up, intermission, the handshake line and after the buzzer.

The rules, verified at source:
- **NHL and PWHL 46.9:** "other than during the periods of the game shall be assessed a major penalty and a game misconduct". The game misconduct is waived for the instigator's opponent.
- **IIHF 2026/27 46.8:** mandatory major plus automatic game misconduct. The referee may waive it for an unwilling combatant who only "defends". This waiver exists in 2026/27 only.
- **IIHF 2025/26 46.9:** 5'+GMP, with no waiver.
- **EIHL Casebook:** 5.6(1) imposes a suspension and/or fine. The Preamble and 86.6 allow referees to call all penalties "from the start of warm-up time until 30 minutes after the end of the game, if they see the offence take place". Fines (4) adds "all appropriate penalties … plus automatic supplementary discipline". The Casebook does not replace IIHF 46.8.

**The coordinator's premise was wrong in one limb, and the sweep corrected it.** NHL in-game fighting is not "may be ejected". It is a major only (46.14). "May be ejected" is the wording of PWHL 46.1 and IIHF v1.1 46.1.

**Leftovers fixed:**
- **(bb) defender:** USA Hockey "head first into boards or frame" and "forceful at the boards". The fix also covers :307 and :482, beyond the brief.
- **(dd) mental_game CM:** the slammed stick is under USAH 601(c)(9) and 601(d)(3). The old "minor plus a game misconduct" read as the rule text's price; a stick banged in protest is a game misconduct (601(d)(3)), which USAH Casebook 601 Situation 15 pairs with an unsportsmanlike minor. That pairing was restored after the safety review.
- **(ee) how_to_watch :485:** fighting majors usually bring no power play because both fighters go off (NHL 19.2).
- **(ff) on_ice_communication:** HC "item v of 10.1" and "item v of 11.1".

## Fixes (5 documents for cc, 4 for the leftovers)

| Document | Change |
|---|---|
| goaltender | The warm-up facts line and body said the NHL and IIHF only "report" a warm-up foul. A warm-up fight is a major plus game misconduct (NHL 46.9; IIHF 46.8, 46.9 in 2025/26) |
| body_contact_and_battles | The NHL fight is now priced outside the periods (46.9, with the instigator waiver). The IIHF waiver is now 2026/27-only, and the 86.6 → 46.9 → 46.8 chain is corrected. EIHL: "does not replace IIHF 46.8 … if a referee sees it" |
| rules_primer | The NHL 46.9 out-of-period limb, with the instigator waiver. IIHF v1.1 46.9 is mandatory outside the periods. The EIHL tariff is now "main", not "in full", plus the out-of-period limb |
| uk_rules | The EIHL willing-fight softening is "during play". In the warm-up or after the buzzer, plan on 46.8 if a referee sees it, plus Casebook 5.6(1) suspension or fine regardless |
| team_play_and_culture | The post-game fight cites IIHF 46.8 (46.9 in 2025/26) and the NHL/PWHL instigator waiver. **British warm-up paragraph:** the lead said the EIHL punishes warm-up conduct "rather than an on-ice penalty"; it now says a suspension or fine "on top of anything a referee sees and calls". The misapplied IIHF 5.6 sentence is replaced by 86.6 reporting. 86.6(ii) is reconciled with the lead |
| defender, mental_game, how_to_watch_hockey, on_ice_communication | Leftovers (bb), (dd), (ee) and (ff) as above. defender :457 no longer uses an ambiguous "both". :307 "IIHF 43.3 whenever called (no minor, 43.2)" |

## Review

One rules-verifier, with a safety read, reviewed all 22 changed lines. Findings:
- **1 MAJOR, permissive:** team_play's EIHL warm-up lead. Fixed.
- **MINORs, all fixed:**
  - uk_rules, body_contact and rules_primer: "leaves 46.8 standing" softened to "does not replace … if a referee sees it";
  - rules_primer "in full";
  - body_contact v1.1 waiver;
  - goaltender 2025/26 number;
  - defender :307 and :457.
- **Cleared:** on_ice_communication, mental_game and how_to_watch_hockey.

The review fixes were applied by the document authors and checked against source. The commit gate spot-checks them.

**Safety review (C6).** The first commit gate BLOCKED because no safety-reviewer covered a diff that prices penalties. A safety-reviewer then rendered 8 documents (team_play, uk_rules, body_contact, goaltender, defender, rules_primer, mental_game, how_to_watch) and returned **CLEAR**. No changed line, voiced alone, permits anything a book prices. Every outside-the-periods limb is spoken with its timing qualifier, and no layer still carries the in-game-only pricing.

It raised three minors:
- **body_contact :1698, applied.** "unless your opponent instigated" became "just the major if the other instigated", because NHL 46.9 waives only the game misconduct.
- **body_contact :201, applied.** Added the 2025/26 cross-reference chain: 86.6 → 46.10 → 46.9.
- **mental_game :677, applied.** Casebook 601 Situation 15 pairs the protest game misconduct with an unsportsmanlike minor.

The reviewer upheld how_to_watch's "usually".

**Browser pass, row (o).** A site-reviewer covered 8 pages at desktop, 400 px and 320 px, in light and dark themes. There was no critical finding: 0 amber panels, 0 bare glyphs, no console errors and no overflow. Its findings became plan rows (hh)–(kk). The main one is the inconsistent placement of "What it costs" blocks in winger, body_contact and team_play.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | rules-verifier on every changed line |
| D2 exceptions | 46.9 instigator waiver; 2026/27-only 46.8 unwilling-combatant waiver; EIHL 86.6 "if they see the offence" |
| D3 divergence | Per-book outside-the-periods rules tabulated by the sweep |
| D4/D5 citations | Quotations checked character for character by the reviewer |
| D6 negatives | "The Casebook does not touch 46.8" softened to "does not replace", because 5.6(1) and Fines (4) address the same act |
| D7 cardinal rule | Out of scope |
| D8 numeric ownership | No figures changed |
| D9 summary layer | Facts lines and KTs included in the sweep |
| D10 facts | Facts lines edited in goaltender, body_contact and defender; check_facts passes |
| D11 safety | safety-reviewer CLEAR after the first gate blocked on C6; its 3 minors were applied |
| D12 read-aloud | 8 documents rendered by the safety-reviewer; every changed sentence was read in its chunk |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; links pass |
| D15 site | Full build after the final edit; --bare 0; browser pass on 8 pages (row o) |

## Gates (after the final content edit, no pipes)

`check_facts`, `check_links --quiet`, `check_absolutes`, `check_secrets` and `check_counts` pass. `check_marker_pairs` shows 0 LOST and `--panels` 0 in all 9 files. The build exited 0, `check:links` passed and `--bare` shows 0.

## What this method could not have found

- **Prices with no timing word.** A sentence that prices a fight with no timing word near it, which a listener then applies after the game.
- **In-House scope.** Whether In-House Section 6's softening reaches fights outside the periods. It is unsettled, and the corpus takes the harsher reading.
- **Superseded Casebook.** Whether the on-disk EIHL Casebook has been superseded. Its version stamps disagree.
- **Audio.** No SSML was rendered this wave.
