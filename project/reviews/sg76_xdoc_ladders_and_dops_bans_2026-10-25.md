# SG76 — Cross-document penalty ladders cut, and the England and Wales one-game bans (25 October 2026)

**Files:**
- content/positions/winger.md
- content/positions/center.md
- content/hockey-iq/playing_without_the_puck.md
- content/systems/defending_the_rush.md
- content/foundation/language_and_glossary.md
- content/foundation/uk_rules.md
- content/foundation/rules_primer.md
- content/technique/body_contact_and_battles.md
- project/plans/OPEN_ITEMS.md

## What changed and why

**1. Inherited ladders cut (five pages).** A census of 207 hand-tagged units (scratchpad xdoc_ladders) found full multi-book tariffs repeated on pages whose subject is not contact. The tariffs covered checking from behind, charging or contact with a goalie, boarding and head contact. Each page now carries one instruction-first line per section and layer, keeps every ejection or mandatory-match limb voiced alone in that layer, and links to body_contact_and_battles' owner sections.

Net words removed:

| Page | Words |
|---|---|
| playing_without_the_puck | 1,819 |
| defending_the_rush | 1,646 |
| center | 1,482 |
| language_and_glossary | 863 |
| winger | 657 |
| **Total** | **6,467** |

**2. England and Wales off-ice bans (three pages).** `sources/eih_dops_2026-27` (IHUK DOPS Rules and Procedures, in force 1 September 2026) makes certain one-game bans mandatory:
- **Appendix C.1:** boarding, checking from behind, an illegal head check, a discriminatory slur and a late fight carry a mandatory one-game ban, "enforced at all levels the player plays at".
- **Section 11:** adds a game in every other league or age group the player is registered in.

Two pages said the opposite, in the permissive direction:
- rules_primer :392 said "What you do not inherit is an automatic suspension".
- body_contact :815 said the exposure was "discretionary rather than tariffed".

uk_rules :413 and KT19 said the cost was "not stated". All are corrected. Each repair is scoped to clubs in England or Wales, outside the Elite League. The trigger is stated conservatively as "a game misconduct for checking from behind or a check to the head, or a major for boarding", and disclosed in the trailers as a reading of Appendices D, G and H.

Further propagation:
- The under-16 pathway from Appendix J is stated as one sentence on every carrier.
- The late-fight ban is stated for any league, per C.2, where it says "Applies to all leagues".
- The leaving-the-bench tariff (C.2, Rule 70, "Up to 1") replaces "nothing British adds a tariff".
- The pages, plus uk_rules (+441) and body_contact (+629), grow because of the new sentences and trailer source entries.

## Reviews

| Dimension | Reviewer | Result |
|---|---|---|
| Rules, ladders (C4) | rules-verifier ×2 (A: winger/center/pwtp; B: dtr/glossary) | First pass found two WRONG items. Harsher-simpler: "On the head it never gets cheaper" (9 sites in dtr plus the glossary) against HC 7.6 supersession and the owner's 15/18 Oct ruling. Cheaper: center's "the minor in the other three books carries a misconduct", where HC 7.5(a) and CARHA 53(a) are GAME misconducts. There were also several incomplete limbs. All repaired; the re-check VERIFIED every unit. |
| Safety, ladders (C6) | safety-reviewer | First pass: 1 critical, 4 major, 6 minor. The critical was in center: USA Hockey's mandatory ejection for a forceful check at the boards or a head-first drive (Casebook 608 Sit. 1, 608(b)) was gone from every layer. The majors were "never gets cheaper"; glossary :291; CARHA 52(b) injury limb narrowed; CARHA 32(d) dropped. Both flagged agent drops (winger HC 7.5(b) tier; four pwtp demotions) were UPHELD. All repaired; the re-review is CLEAR, with one follow-up (three unscoped "no cheap tier" sites in dtr), fixed by the coordinator under C11. |
| Rules, DOPS (C4) | rules-verifier | First pass: the fighting ban was wrongly NIHL-only; the boarding trigger was unproven; the Elite League stance was inconsistent; tariffs were caps rather than a starting maximum; three different under-16 forms. All repaired to a single common decision set; re-verified. |
| Safety, DOPS (C6) | safety-reviewer | First pass: 4 majors. bcb :1910 "nothing British adds a tariff"; bcb :1336 "left to Rule 28"; rules_primer "16 or over" exemption; late-fight scope. All repaired; re-review CLEAR. |
| C11 coordinator edits | rules-verifier | Small edits after review, each applying a reviewer's own sketch:<br>• dtr :354/:683/:1004 off-head scope<br>• center relief wording<br>• center facts suspension limb plus a "(608)" cite (Casebook Situation 1 sits under 608)<br>• uk_rules :306 England/Wales scope<br>• "at the end of the game" on all pages<br>• under-16 counterweight at bcb :1336, :1854 and facts :798 ("IHUK DOPS C.1, s.11")<br>• glossary "(7.6; 7.7 in Junior and Senior)"<br>• dtr CARHA 34(a) scope<br>All VERIFIED. The two refinements the verifier recommended are applied. |

## Dimensions

| Dimension | Covered by |
|---|---|
| D1–D3 | rules-verifiers above, every unit against sources/ |
| D4–D5 | New source entries for the DOPS document on three pages. Quotations were verified against `eih_dops_2026-27` (plain and _layout) by two rules-verifiers. No external fetch: the file was registered at sources/README.md :2268 on 22 October. |
| D6 | "The IIHF writes no match penalty" and "the IIHF books write no automatic suspension" were each swept across both rulebooks, both Situation Handbooks and the Disciplinary Regulations. |
| D7 | Every changed unit leads with the instruction. No coaching choice is stated as a rule. |
| D8 | DOPS figures (11+, 20, up to 1) quoted from their owner with C.1's "starting maximum" qualification. |
| D9 | Per-limb layer tests by owning agents; safety-reviewers read every CM and KT; inverse-propagation sweep for the old "no ban" premise on the three DOPS pages. |
| D10 | Facts lines changed on six pages. Each was verified by a rules-verifier, read voiced alone by a safety-reviewer, and `--near` run first. No separate facts-reviewer ran. |
| D11 | Two safety-reviewers, each CLEAR on re-review. |
| D12 | All eight pages rendered through md_to_speech; changed units read de-tagged. |
| D13 | No craft claims added. |
| D14 | check_links exit 0, including retargeted anchors. |
| D15 | Full npm build after the last content edit. `check_callout_flow --bare` reports 0. |

Mechanical checks:
- check_facts, check_links, check_absolutes, check_geometry, check_secrets and check_counts all exit 0.
- check_marker_pairs: 0 LOST across all eight files. Its one SPLIT HALF candidate (dtr :423) was read and is a false positive: that facts line had no marker at HEAD and shares wording with CM :1016, which keeps its ⚠️.

## What this method could not have found

- **How DOPS works in practice.** Whether a boarding major without a game misconduct triggers the ban. Whether Appendix J or C.1 governs an under-16 player. Whether IHUK's rules reach Elite League fixtures. Whether "any fight" includes an unwilling combatant. The document's "Annex 1" is not on disk.
- **Other pages.** Sibling pages may still assume "no British ban" in words the sweeps did not search: team_play_and_culture, mental_game, goaltender, getting_started and the other position pages. This is a plan row.
- **Other acts.** Other acts priced by DOPS C.2 (slew-footing, cross-checking) where a page implies that the IIHF major is the whole British cost.
- **Untouched layers.** Units the waves did not touch that were built on the removed ladder text.
