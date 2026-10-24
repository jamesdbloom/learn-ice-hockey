# SG64: faceoff cost and the 81.4 broken-skate exception, swept corpus-wide (24 October 2026)

## What changed

Two claims from the SG63 rules-verifier were swept across 26 carriers by three agents, and the faceoff-dzone-alignment caption was updated.

**Faceoff cost.** Several lines said a teammate's encroachment, contact or offside always gets your centre thrown out. In fact:
- NHL 76.4, IIHF 2026/27 76.4, PWHL 78.4, HC 6.5(a) (Junior only) and the In-House rules give only a warning for a first violation after an icing, then penalise.
- USA Hockey 613(d) does not count a non-taker's contact.
- Where a line was unconditional, it now says "usually":
  - center (facts :536, KT7);
  - winger (facts, Common Mistakes, KT11);
  - switching_positions (facts :169, "warn first, then penalise"; Common Mistakes; KT6);
  - on_ice_communication :420;
  - rink_map :271;
  - rules_primer :942 and :944;
  - how_to_watch_hockey :272;
  - the caption ("it usually costs your centre the dot").
- rules_primer :946 and :1119 now name the after-icing warning for the NHL, IIHF 2026/27 and PWHL.
- "Keep your stick off theirs" was added to the hands-off instruction. NHL, IIHF and PWHL 76.7/78.7 (i)-(ii) allow a stick inside only with "no physical contact with … opponent's stick".
- switching_positions :184 now reads "keep your stick behind your hash mark". That is USA Hockey's Casebook 613 Situation 8, the strictest reading.
- **Brief correction (recorded):** the coordinator's brief said British readers get IIHF v1.1's warning. A sweep agent refuted it: In-House Rule 76 (`eiha_inhouse_2026-27.txt:416-418`) replaces the centre for all violations except after an icing. Every agent was told before writing.
- **WRONG, fixed (found outside the diff):** on_ice_communication :422 said IIHF 2025/26 ejects on the first violation. That edition never ejects; it only warns (v1.1 76.6).

**81.4 exceptions.** IIHF 81.4 adds "a Player with a broken skate", but IIHF 82.1 lists only three exceptions. The corpus's settled position is not to count on it.
- **Closed lists corrected:**
  - team_play_and_culture :129 adds the exception; its warning opens the next chunk;
  - rules_primer :325 drops "in the NHL's words";
  - breakouts :525 "include";
  - faceoffs :1151 "the NHL's three".
- **Interim defect caught by review (major):** the sweep first added the exception bare to special_teams :1013/:1032/:1040 and breakouts :105/:127/:818, which read as a plain permission. Under 82.2(V) a change is sent back and the team warned, then a bench minor. The fix:
  - the limb is removed from the facts lines at the cap (special_teams :1013, breakouts :105 and :818; same-block warnings at :1021 and :526 remain);
  - elsewhere it carries "do not count on it": special_teams :1032 and :1040 ("in one of two IIHF clauses, a broken skate — do not count on it") and breakouts :127.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules (C4) | rules-verifier | Every changed site VERIFIED against NHL 76.3/76.4/76.6/76.7/81.4, IIHF v1.1 and 2026/27, PWHL 78.x/83.4, HC 6.2/6.5/6.7(d), CARHA 57, USAH 613 and its Casebook, In-House Rule 76 and the EIHL Casebook (which has no Rule 76). "Usually" and "can" are accurate across the books, with no hedge resting on a single always-eject book. It found the WRONG on_ice :422 sentence; fixed. Stick position for USAH, HC and CARHA is noted; switching_positions :184 fixed. |
| Safety (C6) | safety-reviewer ×2, rendered (winger, switching_positions, special_teams, rules_primer, team_play_and_culture; recheck: special_teams, breakouts) | Pass 1: one MAJOR (the bare broken-skate exception) and five minors ("only warn" read as a free pass; "can" undersells; center "one" unclear; the caption's repeated "stick"; "opponents"). All fixed. A fix agent refuted the sketch "bench minor" (HC 6.5(b) is a minor) and wrote "penalise". Pass 2: CLEAR. Each warning is heard in the same unit as its exception. check_marker_pairs on 11 files: 0 lost. |
| Mechanical | coordinator | build-diagrams exit 0; full npm build exit 0 after the last edit. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. |

## Dimensions

D1–D3 rules-verifier; D4–D5 citation numbers checked; D6 "no such carve-out" claims tested; D7, D8, D13 out of scope; D9 layer-tested per file across facts, Common Mistakes, KT, In short and body; D10 caps checked with `--near`; D11 safety-reviewer; D12 rendered; D14–D15 check_links and build.

## What this method could not have found

- The rules_primer :1051 table cell (not voiced alone). Plan row.
- Broken-skate sites in winger, goaltender and defender: the sweep confirmed they carry warnings, but did not re-read them in voiced context.
- How HC, CARHA and USAH treat a non-taker's stick-on-stick contact; undefined in those books.
- Whether listeners hear "usually" as "almost always".
