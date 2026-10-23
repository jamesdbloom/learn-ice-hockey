# SG34: PWHL icing and faceoff parity, citation precision, the rules_primer table check, and small wording fixes (23 October 2026)

## What changed

- **PWHL 83.6 shorthanded icing** (identical to NHL 81.6, including the empty-box major carve-out) is now credited at:
  - language_and_glossary :441;
  - game_management :217;
  - zone_entries :754, :773;
  - puck_support_and_spacing :446;
  - defender facts :742, :744, :788, :790, :791 and body :802;
  - center facts :651, :652 and body :668;
  - winger facts :665 and body :683;
  - goaltender :1083, now "All six books ask…", with the CARHA 65(d) count taken "at the instant the puck is shot".
  - on_ice_communication and special_teams already carried it (b4c1322), so those plan rows were stale.
- **faceoffs :719, :720, :733:** PWHL 78.7(iv) is named beside NHL/IIHF 76.7(iv).
  - Hockey Canada Figure 7 was rendered from the PDF (page 161). It confirms that 6.2(a)'s "restraining lines" are the L-lines, so :733 was already right.
- **Hockey Canada 10.1 → 10.1(i)** (the "being checked" exception) at breakouts :653, :659 and dzc :178, :204.
- **dzc :947 trailer:** "fourteen numbered clauses" and "Interpretations 1 to 12" (hc.txt).
- **dzc CARHA 32(d):**
  - :596 now reads "at least a one-game suspension on any but an accidental high stick". It keeps the wide scope so the hooking and high cross-check majors stay priced.
  - :209 adds the accidental-high-stick exception.
- **dzc USA Hockey 404(b) deduplicated** to once in facts (:184) and once in the summary (:209), per the owner's 21 Oct ruling. The duplicate facts line in "The cycle" and a repeat clause at :596 were removed.
- **zone_entries:**
  - The goal-contact facts :349, :393, :434 now cite one range, "NHL and IIHF 69.2–69.4; PWHL 71.2–71.4".
  - The 66(b) major at :376 now "ejects you and bans you a game or more (30(a), 32(d))".
- **rules_primer:**
  - The dropped 23-row table was checked row by row against the voiced prose. Four gaps were filled:
    - CARHA has no dislodged-net change bar beyond 19(d);
    - the NHL/PWHL 43.4 match for an attempt to injure;
    - USA Hockey 613(d), HC 6.2(d) and CARHA 57(a) eject the taker too;
    - the USA Hockey visitor goes first at centre ice (613(a)).
  - The page's "voiced elsewhere" claim now includes Common Mistakes.
  - Two goalie broken-stick bullets stating one hazard were merged. Both markers were kept; the spoken "Important." count went 178 → 177.
  - The :591 ⚠️ moved off a scope note onto the In-House "you may not carry it anywhere" instruction.
- **getting_started:**
  - :291 Train-Only now matches EIH's wording (older or less-confident starters; training without the pressure of matches).
  - KT8 now reads "under England Ice Hockey's last published rules a registered player in an unrecognised competition faces suspension and fines" (R&R 14.5, "will face").
- **finding_more_ice :79, :153:** "faces suspension and fines". The Common Mistakes line no longer hangs an EIH rule on "In Britain" or on camps.
- **puck_handling.mjs `puck-on-the-far-side`:** the caption opens with the instruction instead of drawing-meta.
- **rule69_clauses.mjs:** comments now name the real importers (only oz-net-front-screen); two constants are marked as having no importer.
- **sources/README.md:** the five EIH web pages are registered by name.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules + safety: everything except rules_primer | rules-verifier (safety eye) | CLEAR. Every citation was verified against nhl_rules, iihf (both editions), pwhl, usah, hc, carha_2026, eih_rr and eih_web_play. "All six books" is verified. Three optional minors came out of it: "where they grant it"; the KT8 scope, now applied; and Interpretations 1-12, now applied. A dzc :596 unchanged-text question and the faceoffs :721 PWHL 78.7(v) note are plan rows. |
| Rules + safety: rules_primer | rules-verifier | CLEAR. 19(d) is a true negative by act; 43.4, 613(d), 6.2(d), 57(a) and 613(a) are verified. Two stricter-direction inaccuracies in the merged goalie broken-stick bullet (CARHA 51(e)/USAH 605(c) "during a stoppage"; USAH Casebook 605 Sit. 12 allows a slide) are now a plan row. |
| Safety (D11) | safety-reviewer, on the staged bytes | Run after the first commit-gate blocked on C6. CLEAR on every penalty-bearing hunk:
- dzc :209 and :596, including the lead-in and the deleted facts line in "The cycle" (no unit reads cheaper; 404(b) is kept at :184 and :209);
- zone_entries :349, :393, :434, :376, :754, :773;
- rules_primer :591, :596, :946, :950;
- the PWHL 83.6 lines;
- goaltender :1083;
- the EIH 14.5 wording.
One minor, rules_primer :465 (the 43.4 match is discretionary, stated flat, harsher direction), is a plan row. |
| body_contact (no edit) | worker | Both premises were refuted. The lost "If" is in the untracked Style B script, not the page; it is a plan row for the next Detailed remake. Only one "Important." run of four exists (KT8-11, four distinct hazards) and it stays. |
| Mechanical | coordinator | Run after the last edit: check_facts, check_links, check_absolutes (408 caption units), check_geometry and check_secrets all exit 0. check_marker_pairs over all 14 changed content files: 0 lost. check_callout_flow --bare: 0. check_counts: no drift. npm build exited 0, including check-links. The feed is byte-identical to production. |

## Dimensions

| Dim | Status |
|---|---|
| D1 rules accuracy, D2 exceptions, D3 divergence | Checked by the two rules-verifiers |
| D4 citation integrity, D5 provenance | Checked: EIH Play page quotations (eih_web_play, on disk); HC Figure 7 rendered from the PDF |
| D6 negative existence | Checked: the CARHA dislodged-net change bar (true negative by act); no current IHUK equivalent of R&R 14.5 (flattened sweep) |
| D7 cardinal rule | Out of scope: no coaching claim changed |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: layer tests in each worker report (PWHL 83.6 across facts, body and KTs; 14.5 across body, CM and KT; 404(b) dedupe) |
| D10 key-facts layer | Checked: changed facts lines verified by the rules-verifier; caps pass |
| D11 reader safety | Checked by the safety-reviewer on the staged bytes. Nothing reads cheaper; the 404(b) dedupe kept a next-game statement in facts and summary |
| D12 read-aloud | Checked: the rules_primer runs were rendered and counted; marker moves and the merge kept every hazard's escalation; KT8 is self-contained voiced alone |
| D13 folklore | Out of scope |
| D14 structure, style, links | Checked: check_links passes |
| D15 rendered site | Build and check-links pass and check_callout_flow --bare is 0. All changes are wording inside existing units plus one caption, so no browser pass was run (Chrome blocks localhost this session). |

## Plan file

- The first commit-gate also caught a live plan row deleted by mistake: on_ice_communication KT13/CM omit the empty-box major case. It is restored, with the SG34 agent's reason for leaving it.
- The rules_primer :465 row was re-filed to its correct line.

## What this method could not have found

- Other documents with a bare "Hockey Canada 10.1" or a wrong clause count.
- A shorthanded-icing omission phrased without naming books or citing 81.6.
- The audio chunk placement of the longer goaltender :1083 sentence.
- Any IHUK rule bulletin superseding R&R 14.5; bulletins are not on disk.
