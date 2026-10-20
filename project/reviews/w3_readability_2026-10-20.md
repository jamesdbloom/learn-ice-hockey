# W3 (20 October 2026): readability pages 19–24 — Breakouts, Centre, Defensive Zone Coverage, Zone Entries, Winger, Defender

This round continues the owner's readability programme. Six author agents (xa–xf) each owned one page. The brief (session scratchpad `w3/brief.md`) is the W2 brief plus the W2 lessons:
- never scope a competition rule by place;
- a permission keeps its location (save-then-cover is front of net only);
- CARHA 32(d) and 34(a) wording;
- the zsh word-split trap.

Each page went to a safety-reviewer with a rules lens. Defender had a further re-review.

## Results (check_readability, before → after)

| Page | Longest sentence | Paragraphs > 1,200 | KTs > 60 words |
|---|---|---|---|
| breakouts | 99 → 70 (a blockquote list the tool joins; real longest 59) | 1 → 1 (the Rule set + Related blockquote, a tool artefact) | 4 → 3 |
| center | 107 → 67 (the Related nav line; prose longest 59) | 2 → 1 (artefact) | 3 → 2 |
| defensive_zone_coverage | 119 → 54 | 1 → 0 | 4 → 0 |
| zone_entries | 86 → 59 | 1 → 0 | 3 → 1 (KT11, 76; safety limbs) |
| winger | 83 → 60 | 3 → 2 (both blockquote artefacts) | 6 → 5 |
| defender | 80 → 57 | 1 → 1 (artefact) | 4 → 2 |

## Corrections found by review

- **CRITICAL, defender KT3 (xfS).** The shortened KT said "In a battle there, move bodies toward the corner…". That is an imperative to body a net-front forward. It is penalised under CARHA 49(a), USAH 640(e)/604 and HC 7.3(a), and it contradicts "Never drive him off his spot". HEAD's conditional sentence was restored word for word: "If a battle moves a body there, take it toward the corner…".

- **MAJOR, defender (pre-existing, xfS).** CARHA 53(a) at :326 and :494 was rendered as "a minor plus a game misconduct otherwise". 53(a) is a minor or a major, each with a game misconduct, at the referee's discretion on violence. The major is mandatory on injury and a match is possible. 32(d) adds at least a one-game suspension to the major. Both sites now say "ejects you either way…" (xfS2 minors). Further changes:
  - 32(d) was added at :888 and CM :907;
  - facts :179 now reads "Under Hockey Canada…", with "which governs is unsettled" kept;
  - the goalie save-then-cover permission is scoped to clause ii's own words ("come out to cut down the angle") at facts :179, and "out in front" at body :199.

- **MAJOR, winger :553 (xeS).** A split moved HC 7.6 Interpretation 2's leniency for minimal, accidental stick contact with the head so that it sat beside the 9.2(b) injury limb. Read that way, an injuring cross-check sounded like a minor in minor and female hockey; hc.txt 9.2(b) makes it a mandatory major and game misconduct. The leniency now sits beside its own above-the-shoulders limb, scoped to "stick contact with the head". Also fixed:
  - :776 names the 7.7(c) match grounds;
  - KT9 reads "Crash the net on every shot your job sends you to".

- **MAJOR, zone_entries KT11 (xdS).** "Deliberate contact with the goalie is a penalty" had become the KT's bold opening. Heard alone, it implies accidental contact is free; USAH 607(d) Note 1 and the HC 8.5 preamble say otherwise. KT11 now leads with "Contact with the goalie costs more than the goal:". Also fixed:
  - "even contact worth only a minor ejects you if it injures him";
  - :405 and :452 now read "a separate question";
  - CARHA 32(d) is added once in the body (:261) and once in CM.

- **MAJOR, breakouts KT12 (xaS).** Dropping "coming" turned "write none that stops a hit" into "no rule stops a hit" in HC and CARHA. Both have one: CARHA 49(a) and HC 8.3(ii). It now reads "write no whistle that stops a hit coming", and the body :1028 and facts :1013 carry the same framing. Also fixed:
  - §Rim facts: 30(a) + 32(d);
  - §2 53(b): the 34(a) wording;
  - KT6 trapezoid scope: "NHL, IIHF, Elite League; assume one in England Ice Hockey play and the PWHL".

- **center (xbS: CLEAR; author applied five minors):**
  - KT6 gerund restored: "Driving a player… is a mandatory match penalty";
  - KT9 "Screen just outside the crease";
  - :504 CARHA 66(b) minor;
  - :794 HC 7.7(c) grounds named;
  - facts :537 "NHL, PWHL and IIHF 2026/27 also replace the centre".

- **defensive_zone_coverage (xcS: CLEAR; author applied four minors):**
  - screen label "outside your crease";
  - facts :677 32(d);
  - :708 "print no such let-out" (HC 9.3 spares only a tap on the stick);
  - place-scoped lines re-scoped to the IIHF book. All British books on disk were checked: none amends 63.2(III), and only EIH 22.3 touches the restricted area.

**Rules re-verified at source across the passes:**
- CARHA 30, 32, 34, 48, 49, 52, 53, 54, 55, 58, 62, 63, 66, 79, 80
- HC 6.2, 6.5, 7.3, 7.5, 7.6, 7.7, 8.3, 8.5, 9.2, 9.3, 9.5, and Interpretation 3 to 10.1(a)
- USAH 602, 604, 607, 608 + Casebook, 609, 613, 614(c) + Casebook Situations 5–14, 620, 621, 625, 632 + Casebook, 634, 640
- NHL/PWHL/IIHF 21.1, 42, 43, 56, 60, 61, 63.2, 76.7, 101.1
- In-House, EIH R&R 22.3, EIHL Casebook

## Files in this commit (content/, `git diff --numstat HEAD`)

| File | Lines |
|---|---|
| content/positions/center.md | +27/−27 |
| content/positions/defender.md | +24/−24 |
| content/positions/winger.md | +24/−24 |
| content/systems/breakouts.md | +35/−35 |
| content/systems/defensive_zone_coverage.md | +49/−50 |
| content/systems/zone_entries.md | +19/−17 |

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | safety-reviewers with a rules lens on all six pages, plus a defender re-review (xfS2) |
| D2 exceptions | HC 7.6 Interp 2 scope; CARHA 32(d) accidental-high-stick and minor+GM limits; 53(b) is a 34(a) match; save-then-cover location |
| D3 divergence | per-book tiers stated for goalie contact, from-behind, cross-check |
| D4/D5 citations | no character inside quotation marks changed (checked by script on center, word-diff elsewhere) |
| D6 negatives | "no British rulebook amends 63.2(III)" swept across all British books on disk |
| D7 cardinal rule | winger KT9 job scope restored |
| D8 numeric ownership | 602(a) suspension ≤ 2 per page; repeated slot figures cut in center, with disclosures kept |
| D9 summary layer | layer tests for defender KT3, zone_entries KT11, breakouts KT12, winger :553 |
| D10 facts | facts edited: defender :179, defensive_zone_coverage :677/:826/:834, breakouts :417/:1013, center :537. check_facts passes |
| D11 safety | every page CLEAR after its fixes |
| D12 read-aloud | all six rendered by authors and reviewers; KTs and CM heard alone |
| D13 folklore | out of scope |
| D14 structure | no headings changed; links pass |
| D15 site | full build after the final edit; --bare 0; --panels 0. Browser look deferred to the "Site-reviewer pass due" plan row, which now names the zone_entries :869 split and the defensive_zone_coverage screen-bullet split (added after the first commit gate BLOCKED on C10) |

## Gates (no pipes, after the final edit)

- check_facts, check_links --quiet, check_absolutes, check_geometry, check_secrets and check_counts --update all pass.
- check_marker_pairs: 6 files, 0 LOST, 0 SPLIT.

## What this method could not have found

- Sibling documents carrying the same claims (plan rows).
- CARHA 32(d) at every priced site: it was deliberately added once per layer, not everywhere (plan row).
- Unchanged text.
