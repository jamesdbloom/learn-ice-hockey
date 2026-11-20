# W525: third-man count and Handbook clause, Hockey Canada draw spots, and the DOPS tariff (20 November 2026)

## Scope

| Agent | Files | Work |
|---|---|---|
| A | goaltender, faceoffs, rules_primer, special_teams | W524(1), (2), (3) and (5) |
| B (source-verifier) | none | Rendered pages 9–10 of the IHUK DOPS PDF with `pdftoppm` (W524(4)) |
| C | uk_rules | B's findings |

Review: one safety-reviewer with a rules check (C4/C6) over the whole diff.

## The DOPS tariff (B, then C)

B refetched the PDF: HTTP 200, a benign same-host redirect, and a sha256 matching `sources/eih_dops_2026-27.pdf`.

On the rendered page 10, "3rd Man-in" is one merged cell, "Up to 1", spanning all five tariff bands. The next row is "Last 5 minutes, OT & or End of game — Mandatory 1 game plus any other penalties", and it names no subject. C.1 (page 9) reads: "Tariff bands provide a starting maximum for first-time offences; panels adjust up / down…".

**The unit is inferred, not printed.** The surrounding prose and the worked examples all count in games.

uk_rules :308 now reads, as three sentences after the reviewer's readability split:

> "…lists third man in at up to one game for a first offence, and a panel can raise it. In the last five minutes, in overtime or at the end of the game, plan on the mandatory one-game ban the same table sets. In the Elite League, IHUK's rules do not say whether the tariff applies."

"Plan on" is the cautious reading, because the table's silence on who the late-game row covers is not a grant.

## Agent A

**Refuted premises (no edit):**
- faceoffs :189 NHL 85.5 is correct. 85.5 is *Face-Off Location* and carries the quoted text; 85.2 only stops play.
- faceoffs :195 must not name CARHA. CARHA 57(j) catches the point men and the bench, not "any attacking player", so adding it would have made the line false.

**Edits:**

| Site | Change | Notes |
|---|---|---|
| goaltender :1695 (Common Mistakes) | The half-repaired sentence is now consistent with itself. The reviewer had it revert from "four" to "three". | "Three" matches the body :1188, facts :1170 and KT10 :1794. The IIHF rule text is discretionary, and 2026/27 46.14 carries the very waiver a peacemaker would rely on. The Handbook point stays: "the IIHF's Situation Handbook says the third player into a plain fight is ejected — plan on it". |
| goaltender :1198 | Trailing "so plan on it" trimmed | Repetition |
| rules_primer :554, :948; special_teams :1108 and Sources :1372 | IIHF Situation Handbook clause added (Situations 46.1, 46.11) | Where the IIHF third man had been given only as the referee's discretion |
| faceoffs facts :156 (299/300) | "attacking point men, bench or any non-offender past the circle top, NHL and IIHF 76.2, PWHL 78.2; attacking point men, bench or penalty bench past the circle top, CARHA 57(j)" | Replaces "either bench", which could be heard as both teams', and the ambiguous "edge" |
| rules_primer :958 (Hockey Canada) | First pass: "places every draw at one of the marked spots (6.3)" | Reviewer MAJOR: false. HC 6.8(a)/(b) (`hc.txt` :5260–5267) put the draw "where the stoppage took place", the same form as the CARHA 76(a) the sentence cites. The agent's phrase sweep had missed "the face-off will be where…". Now: "6.3 puts its draws on the marked spots, though, like CARHA, it puts the draw after spectator interference or a thrown object 'where the stoppage took place' (6.8)". |

## Review

| Reviewer | Critical | Major | Minor | Outcome |
|---|---|---|---|---|
| safety-reviewer with rules check | none | 1 (HC 6.8) | 4: the three-count; special_teams body; "circle top"; uk_rules split | All repaired |

The reviewer verified each rule and quotation against `sources/`:
- the IIHF Situation Handbook, both editions;
- IIHF 46.7 and 46.14;
- USA Hockey 615(d) and 612(d);
- Hockey Canada 6.3, 6.8 and 7.10(e);
- NHL and IIHF 76.2, and PWHL 78.2;
- CARHA 57(f), 57(j), 67 and 76(a);
- the EIHL Casebook (no third-man rule);
- the DOPS rendered pages.

**C11.** No reviewer re-read the final repairs. Each is confined to its finding and taken from the reviewer's sketch.

## Rows

- **Closed:** W524(1), (2), (3), (4) and (5).
- **New, From W525:**
  1. Re-sweep rules_primer's negatives for the act, not one wording.
  2. faceoffs :156 at 299/300, not yet rendered.
- **Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: no change.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every agent finished.
- `check_callout_flow --bare`: 0.
- No `<p>*`.
- `check_marker_pairs`: 5 files, 0 lost, 0 split.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered: agent checks plus the reviewer's rules pass |
| D2 exceptions | Covered: the 46.14 waiver; HC 6.8; CARHA 57(f)/76(a) |
| D3 cross-book divergence | Covered: scrum lines by book; draw spots by book |
| D4/D5 citations | Covered: DOPS refetched and its hash matched; NHL 85.5 confirmed |
| D6 negative existence | Covered: Hockey Canada's "no nine-spots sentence" corrected by HC 6.8; EIHL Casebook has no third-man rule |
| D7 cardinal rule | Not engaged |
| D8 numeric ownership | Not engaged |
| D9 summary layers | Covered: the third-man count aligned across body, facts, Common Mistakes and KT10 |
| D10 facts layer | Covered: faceoffs :156 within cap |
| D11 reader safety | Covered by the safety-reviewer |
| D12 read-aloud integrity | Judged by reading. The uk_rules sentence was split for the ear. Nothing rendered. |
| D13 folklore | Out of scope |
| D14 style and cross-links | Covered: `check_links` |
| D15 rendered site | Structural only; Chrome not connected |

## What this method could not have found

- **Draw placements in words no sweep used,** in any of the six books.
- **Whether the DOPS's late-game row binds a non-fighting third man.**
- **How the new sentences sound aloud.**
- **Reviewer transcripts.** They are not on disk; this record summarises them.
