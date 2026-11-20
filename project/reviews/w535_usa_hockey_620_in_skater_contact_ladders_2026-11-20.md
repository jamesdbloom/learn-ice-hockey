# W535: USA Hockey's careless head-contact ejection reaches skater contact — charges, jumps, late and head-down hits, high cross-checks (20 November 2026)

## Origin

**W534 census.** A read-only rules-verifier swept all of `content/` for W533(1) and W533(3). It found 36 defect units in 13 files. Each priced USA Hockey's ejection, for an act that can reach the head, through the reckless limb alone.

The census verified these rules:

| Source | What it says |
|---|---|
| `usah.txt` 620, :4291–4304 | 620(b) gives a mandatory major plus game misconduct for "intentionally or carelessly" contacting an opponent's head, face or neck. It has no classification or adult-male carve-out. |
| Casebook 621 Situation 1, :13893–13904 | Stick contact to the head "during the process of delivering a check" is called under the Head Contact rule. So a high cross-check is 620(b). |
| Casebook 620 Situation 4 | A check with excessive force to intimidate or punish that makes direct contact with the head "must be assessed as a match penalty". |
| Casebook 607 Situations 1–3 | A jump into a check is charging. A full-speed or accelerating hit on a head-down opponent is charging "for the purpose of punishing". |

The worst sites:
- **Cross-check contrasts.** Hockey Canada and CARHA eject a high cross-check, while USA Hockey was given as ejecting "a reckless one" only. Sites: defender KT :1102 (voiced alone), facts :804, winger :529.
- **Head-down hits** without the Situation 4 match: neutral_zone :443 and the defending_the_rush Charging section.

**Left alone as borderline classes:**
- body checking where it is barred (40 units);
- checking from behind, 608 (84 units).

Brief: `scratchpad/w535_common.md`.

## Editing agents (disjoint files)

| Agent | Files | Units repaired |
|---|---|---|
| A | defender | 7 named, plus 6 found by sweeping: three more cross-check contrasts and three head-down units |
| B | risk_management, rules_primer | 7 named, plus the borderline rules_primer :527; the risk_management :710 "pair" claim reconciled |
| C | forechecking_systems, offensive_zone_play, body_contact_and_battles | 10 named or borderline, plus 4 found by sweeping (body_contact :685, :1473, :1514, :2088) |
| D | neutral_zone_systems, defending_the_rush, zone_entries | 6, plus a new Hockey Canada 7.4 Rule line at defending_the_rush :741. zone_entries needed no change. |
| E | winger, center, goaltender, special_teams | 9, including winger :801 and center :878 found by sweeping. goaltender :1266 left at cap; its block is at HARD_MAX. |

In total, 12 content files changed.

**Repair shape.** Each unit gained one clause:

> "or if it reaches the head, face or neck, even carelessly (620(b))"

In facts lines the clause is shortened to "or on careless head contact (620(b))". Where a unit describes a punishing or head-down hit, it also says that a punishing hit that reaches the head must be a match (Casebook 620 Situation 4). The 602(a) match stays on a reckless hit.

Where blocks had room, lines were split:
- defender :413/:497;
- risk_management :301;
- defending_the_rush :741;
- body_contact :670.

## Review

Two safety-reviewers ran, each with a rules check (C4/C6):
- **Group 1:** defender, risk_management, rules_primer, neutral_zone, defending_the_rush.
- **Group 2:** forechecking, offensive_zone_play, body_contact, winger, center, goaltender, special_teams.

**Joint ruling (Q2).** Shortening Situation 4 to "a punishing hit to the head must be a match", which drops "excessive force" and "direct contact", is acceptable. It overstates in the harsh direction, and a reader does the same thing either way. "Punishing" carries force in USA Hockey's own vocabulary (Casebook 607 Situation 3). The purpose word is binding: it is what keeps a match off careless contact. CARHA 52(a), "If injury results, a Major penalty and a Game Misconduct penalty shall be assessed", is the right rule for skater charging on injury.

| Reviewer | Critical | Major | Minor |
|---|---|---|---|
| Group 1 | none | none | 3 |
| Group 2 | 1 | 2 | 3 |

All findings were repaired.

**Critical (group 2): the body_contact late-hit facts block.** :668 and :669 tell an adult man the book is "silent" (640(b)'s carve-out), while body :685 now said a late hit to the head ejects. A new line, :670, was added: "A late hit that reaches the head, face or neck is USA Hockey head contact — a mandatory major and game misconduct even if careless, in any division, adult men included (620(b))".

**Majors (group 2):**
- **body_contact Common Mistakes**, the late-check continuation: it now gains the 620(b) sentence.
- **OZP facts :968**: priced the late hit as reckless-only. The block was already at 14 lines, not 13, so the coordinator's brief was wrong. The limb went into :968 by substitution. Cost: "a mandatory major and game misconduct" became "ejects", and "multi-game" was dropped. Filed as W535(4).

**Minors:**
- **Match ordering.** body_contact :1474 and OZP :1028 had a match that could be heard as attached to careless contact. Both were reordered.
- **winger :804.** "Under" before USA Hockey had been dropped. It is restored, so the Hockey Canada and CARHA conditions no longer read across to USA Hockey.
- **neutral_zone :361.** It had lost "no bare minor (607(a))", had an unbooked "a reckless charge is too", and had dropped "multi-game". It was rewritten on the reviewer's sketch.
- **defending_the_rush :740.** "Multi-game" was restored by substitution.
- **rules_primer :448.** A third statement of the head limb in one bullet, under the wrong label. Dropped; :454 carries it correctly as Head Contact.
- **forechecking :1068.** An optional limb that does not fit at 273/300. Filed as W535(2).

**Commit gate, first pass: BLOCK.**
- **body_contact facts :697.** Group 2's Q2 rewrite had dropped "607: no bare minor" and "multi-game", and had added an unbooked "a punishing head hit is a match". The block is at 14 lines, not 10 as the coordinator's brief said. So the line was refitted: it restores the 607(a) floor and "likely multi-game ban (602(a))" on the reckless limb, keeps careless head contact (620(b)), and drops the unbooked match. The block's line :703 carries Casebook 620 Situation 4, scoped to USA Hockey and quoted verbatim.
- **OZP :1027.** Spoken, the match still ran into "and so is careless head contact". It now reads "reckless (607(b)) or careless head contact (620(b)) is a major and game misconduct; if reckless, plan on a match…".
- The group 2 safety-reviewer re-read both lines and found them OK.

**C11.** No reviewer re-read the other last repairs. Each is confined to its finding and follows the reviewer's sketch. The commit gate is asked to re-derive them.

## Rows

- **Closed:** W533(1); W533(3), except goaltender :1266.
  - The honest-attempt rungs at goaltender :1622 and body_contact :1385 were closed with no edit. Each sits in the same section as a 620(a)/(b) statement: goaltender :1620 and body_contact :1382, two units up and one unit up respectively.
- **New, from W535:**
  1. Units the "reckless"-keyed sweeps could not see.
  2. forechecking :1068.
  3. Lines not yet heard aloud.
  4. "Likely ban" where "likely multi-game ban" was cut.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, run after every agent finished (`scratchpad/build_w535.log`).
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 12 files, 0 lost.
  - Its one split-half candidate is winger :804, paired with marked body :809 by shared text.
  - :804 carried no ⚠ in HEAD, so the pairing is false.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: census verifier, five agents and two reviewers |
| D2 exceptions | Covered: 640(b)'s adult-male carve-out against 620's none; Casebook 620 Situation 2 |
| D3 cross-book divergence | Covered: cross-check contrasts; Hockey Canada 7.4 and CARHA 52(a) scopes |
| D4/D5 citations | Covered: Casebook 607, 620 and 621 Situations; 620(b) quoted |
| D6 negative existence | Covered: "the book is silent for adult men" is now qualified by 620 |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Covered: rules_primer :448's triple restatement removed |
| D9 summary layers | Covered: both reviewers layer-tested their files; the critical was a summary-layer gap |
| D10 facts layer | Covered: splits and substitutions checked line by line |
| D11 reader safety | Covered: two safety-reviewers |
| D12 read-aloud integrity | Judged by reading; not rendered (W535(3)) |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: `check_links` |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **Head-reaching acts priced under USA Hockey without the word "reckless".**
- **How the new adult-men line at body_contact :670 sounds beside :668 and :669.**
- **Diagram captions.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.
