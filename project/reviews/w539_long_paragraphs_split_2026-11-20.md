# W539: splitting the paragraphs over 1,200 characters (readability), and what the splits exposed (20 November 2026)

## Scope

This is a readability wave, in line with the owner's priority. Corpus-wide, `check_readability.py` counted 68 paragraphs over 1,200 characters. Four agents worked on 20 files. Brief: `scratchpad/w539_common.md`. It set these rules:
- split at natural seams (instruction / tariff, book A / book B, claim / exception);
- give each split half that states a hazard its own mid-sentence ⚠️ before a strong run, so it keeps its spoken "Important." without becoming a panel;
- never separate a claim from its counterweight;
- name the subject of each new opener.

| Agent | Files | long_par |
|---|---|---|
| A | rules_primer | 10 → 0 (9 split, 1 cut) |
| B | body_contact_and_battles | 9 → 0 |
| C | winger, offensive_zone_play, goaltender, defender, center, switching_positions | 20 → 0 |
| D | defending_the_rush, on_ice_communication, game_management, language_and_glossary, forechecking_systems, faceoffs, defensive_zone_coverage, risk_management | 22 → 6 (16 split; 6 left with reasons) |

**Corpus totals**
- Long paragraphs: **68 → 12**.
- Panels: 0 → 0.
- `check_callout_flow --bare`: 0.
- Marker glyphs in the 16 changed files: 1,682 → 1,714.

Two passages were reordered as well as split:
- **rules_primer :899.** "Outside the area the goalie is still not fair game" moved next to its claim. The Casebook 607 Situation 4 half is now scoped "for contact with a goalie in the crease or privileged area", per the Situation's own question.
- **on_ice_communication :611.** Moved so that "any of these" stays with its list.

One cut: **rules_primer :491** removed a sentence the same paragraph restates. Its closing bold now reads "or you tried to injure them", per Hockey Canada 7.6(c) and 7.7(c).

Agent C caught one of its own splits and reverted it: **goaltender :1710**, which would have stranded "no bare minor … while it stays off your head" from its counterweight.

## Review

| Reviewer | Files | Critical | Major | Minor |
|---|---|---|---|---|
| safety-reviewer, group 1 | rules_primer, body_contact, game_management, on_ice, glossary, defending_the_rush, DZC, risk_management | none | none | 4 + 5 over-escalated markers |
| safety-reviewer, group 2 | winger, OZP, goaltender, defender, center, switching, forechecking, faceoffs | none | 1 | 5 + 5 over-escalated markers |

### Major: goaltender :1391

The split created a new lead, "Never hit a player from behind while you move them off your goalmouth". It lost its qualifier, a battle or a legal check. Heard alone, it implied that moving a screener off the goalmouth from the front is fine. That contradicts :1384 and :1388 ("never walk them off their spot"), and Hockey Canada 7.3(a) and CARHA 49(a) where checking is barred.

It now reads: "Whether it is a battle or a legal check, never hit a player from behind at your goalmouth:".

### Minors repaired

**Amber placed on the wrong clause.**
- **winger :724.** The amber sat on the negative "no minor at all". It now reads "⚠️ **a hit from behind is never a minor — it is a major and game misconduct** (43.2, 43.3, 43.5)". This was verified against NHL 43 and the identical PWHL 43.
- **body_contact :770.** The amber sat on the IIHF's recklessness condition. It now sits on the counterweight: a check on a player wrestling for a loose puck, with no possession and not set for the hit, counts as reckless automatically (Vulnerable Position, iihf_rules_2026-27 :8304–8307).
- **defender :1029.** The marker moved to "Even without intent, Hockey Canada and CARHA must give one" (7.5(c), 53(b)).

**Accidental or unavoidable goalie contact under USA Hockey.**
- **OZP :707.** The lead now reads "accidental contact off the head is at the least an interference minor". It was cut away from :709's 620(b) limb by the split.
- **winger :799 and OZP :707 (pre-existing, permissive).** "Contact you could not avoid is an interference minor" omitted Casebook 607 Situation 4: in the crease or privileged area, driving hard and pulling out late is a minor plus a misconduct. Both now carry it. A layer test of this claim across goaltender, winger and OZP found no other bare-minor unit.

**Scope and counterweights.**
- **rules_primer Holding.** Hockey Canada's arm block is now scoped "in a body-checking division", because 7.3 counts an arm extended after angling as a body check.
- **DZC :822.** The bullet now ends "Under any book, play the puck, not the hands", because its counterweight moved to the next bullet.
- **game_management :1241.** This now reads "⚠️ **A careless hit on a player who has just passed or shot can eject you**: 640(b) counts them as vulnerable or defenceless, and for adult men, where the book does not settle it, plan on it anyway."
  - The agent's first form read "outside adult men's play". That is the exclusionary wording W529 reverted as permissive. The coordinator caught it and sent it back.

**Smaller fixes.**
- **OZP :1015.** The bold now ends at "CARHA".
- **on_ice :619.** The bold was widened.

### Markers

Removed as duplicates or plain tariff restatements: on_ice :613 and :601, risk_management :905, and rules_primer :427. In each case the base paragraph's marker survives in the sibling half.

Kept:
- **body_contact :1776.** It states mandatory majors, and removal would show as LOST.
- **winger :873, goaltender :1283 and :1716.** `check_marker_pairs` could not certify removal. Filed as W539(2).

### C11

The group 2 reviewer re-read all nine repaired lines and passed them, with source lines. The two last repairs in group 1 (DZC :822 and game_management :1241) were re-read by the same reviewer.

## check_marker_pairs, read hit by hit

**One LOST: the rules_primer "What slashing costs" key.** Its HEAD marker was the Hockey Canada head limb, which moved with the split into the next paragraph ("USA Hockey also penalises…"). That paragraph is still marked and voiced "Important.". The tool keys by opening words, so it cannot see the move.

**Six SPLIT HALF UNMARKED.** Each was read:
- **rules_primer :845, body_contact :758 and center :709.** False pairings. Each was unmarked in HEAD.
- **language_and_glossary :320.** A faceoff tail that states no hazard.
- **on_ice :601 and risk_management :905.** Deliberate removals; the base marker survives in the sibling half.

## Rows

- **Closed:** none. This was a readability measure.
- **New, from W539:**
  1. The 12 remaining long paragraphs.
  2. The marker-density pass.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished (`scratchpad/build_w539b.log`).
- `check_callout_flow --bare`: 0. Panels: 0.
- No `<p>*`.
- `check_marker_pairs`: 1 LOST and 6 split-half candidates, each explained above.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: reviewers checked every reworded clause and new lead against sources |
| D2 exceptions | Covered: Casebook 607 Situation 4; Hockey Canada 7.3 divisions; 640(b) adult men |
| D3 cross-book divergence | Covered: splits along book seams kept each book's scope |
| D4/D5 citations | Covered: NHL and PWHL 43; IIHF Vulnerable Position quoted |
| D6 negative existence | Not engaged |
| D7 cardinal rule | Covered: halves lead with the instruction |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Not changed; body prose only. A layer test was run for the interference-minor claim. |
| D10 facts layer | Not changed |
| D11 reader safety | Covered by two safety-reviewers |
| D12 read-aloud integrity | Covered: every agent rendered its files; group 1's reviewer measured chunks in two files |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: `check_links`; `check_unit_openers` unchanged per file |
| D15 rendered site | Structural only. A fresh build shows 0 bare glyphs and 0 panels; Chrome not connected |

## What this method could not have found

- **A split whose lost qualifier left no lexical trace.** The goaltender :1391 major was found only by asking what each moved clause was attached to.
- **Whether the higher marker density reads as noise to a listener.**
- **How the new inline amber runs look in a browser.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.
