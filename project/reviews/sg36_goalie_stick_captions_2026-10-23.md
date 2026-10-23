# SG36: goalie replacement stick and bench trip, 43.4 discretion, two captions, diagram comments (23 October 2026)

## What changed

- **rules_primer :465:** NHL and PWHL 43.4 is now "the referee can make it a match for an attempt to injure or a deliberate injury". The old wording stated a discretionary match as fixed and dropped the deliberate-injury limb.
- **rules_primer :596, goalie replacement stick:**
  - **Lead:** "Hand the replacement over — never throw, shoot or slide it". A teammate's minor is cited to NHL and IIHF 10.4 (the NHL index files a sliding stick there) and Hockey Canada 10.5(a), with a penalty shot.
  - **Two slide carve-outs:**
    - the IIHF, for an intact dropped stick, near the goalie, with no interference;
    - USA Hockey Casebook 605 Situation 12.
  - **⚠️ Hockey Canada and CARHA:** a goalie who picks up a slid or thrown stick takes a minor.
  - **Bench trip:** barred "at any time" under NHL, IIHF and PWHL 10.4, and "during a stoppage" under CARHA 51(e) and USA Hockey 605(c). Hockey Canada Interpretation 11 is "at a stoppage".
  - **Interim wording:** an earlier version read "never throw or shoot it", which dropped "slide". The safety review caught it as a major (see below).
- **rules_primer :598:** "As a goalie, stay in your net". The old "the answer does not vary by book" was false for USA Hockey and CARHA mid-play.
- **goaltender:**
  - :1083 now reads "All six books, where they grant it", and CARHA 65(a) Note 2 joins Hockey Canada in counting the released player back in.
  - :1513 (facts) and :1529 carry the same bench-bar scope. They add the PWHL and CARHA and stop calling the NHL/IIHF/PWHL penalty "delay of game".
- **risk_management.mjs `cross-ice-in-your-own-end`:** the caption sentences that repeated the host paragraphs on either side were cut. The coaching-convention disclosure is still voiced twice on the host.
- **skating.mjs `skating-pivot-toward-the-boards`:** the caption opens with what the reader sees, not drawing-meta.
- **Comments only:** positions.mjs, offensive_zone_play.mjs and zone_entries.mjs now state the real rule69_clauses importers.
- **dzc :596:** checked, and no change was needed. All six books reach a major plus game misconduct for a slash with nobody injured.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety + rules (D1–D3, D11) | safety-reviewer ×2, reading nhl, pwhl, iihf 2026-27, usah, usah_casebook, hc 2026-08 print, carha_2026 | First pass found one MAJOR: rules_primer :596's "never throw or shoot it" dropped "slide" next to two slide permissions. An NHL, Hockey Canada or CARHA teammate would slide it and take a minor, and in Hockey Canada and CARHA the goalie would take a minor for picking it up; the sibling goaltender :1416/:1423 already had this right. Fixed, and the re-check was CLEAR. Every other hunk was CLEAR, including both caption cuts (no safety limb lost; hosts voice the cut material) and the comment-only files. |
| Mechanical | coordinator | Run after the last edit: check_facts, check_links, check_absolutes, check_geometry and check_secrets all exit 0. check_marker_pairs: 0 lost. check_callout_flow --bare: 0. check_counts: no drift. npm build exited 0 after the last edit. The feed is byte-identical to production. |

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy, D2 exceptions, D3 divergence | Checked by the safety-reviewer, which read the rule texts |
| D4 citation integrity, D5 provenance | Out of scope: no external citation added |
| D6 negative existence | Checked: no PWHL teammate-minor claimed (PWHL 10.4 has no throw clause) |
| D7 cardinal rule | Checked: "stay in your net" is framed as a tactic |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: goaltender facts :1513 propagated; rules_primer Common Mistakes :1125 is consistent |
| D10 key-facts layer | Checked: goaltender :1513 reads correctly voiced alone (leads "Never go to the bench") |
| D11 reader safety | Checked by the safety-reviewer ×2 |
| D12 read-aloud | Checked by reading |
| D13 folklore | Out of scope |
| D14 structure, style, links | Checked: check_links passes |
| D15 rendered site | The build passes. The changes are wording within existing units plus two caption strings, so no browser pass (Chrome blocks localhost this session). |

## Open, minor, harsher direction (plan rows)

- rules_primer :596 "with a penalty shot": Hockey Canada says it "may be awarded", so "possibly".
- goaltender :1416: "A goalie may not go to the bench for one" is unscoped (too strict for USA Hockey and CARHA mid-play).

## What this method could not have found

- Other documents or podcast scripts that carry "never throw or shoot it" in the weakened form.
- PWHL's full pricing of a thrown stick.
- Audio chunking, since nothing was rendered.
