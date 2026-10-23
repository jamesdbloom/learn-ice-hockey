# SG42: repetition pilot, pinch caveats, safeguarding and manager DBS quotations (23 October 2026)

## What changed

**`content/foundation/core_principles.md`: repetition pilot**
- **Result:** prose fell from 6,152 to 6,015 words through ten cuts of restated sentences and throat-clearing. No rule tier, safety limb, disclosure or coaching-choice ask was cut, and the ⚠ count is unchanged (14 marked units).
- **A contradiction removed:** §2 and §7 had each claimed to be "the one place" where asking your coach is the wrong answer.
  - §2 now reads "None: a coach cannot make a body check legal in a non-checking category."
  - §7 now reads "None. How you meet the boards is not a coaching preference, and no system changes it."
- **Repair found by review:** one cut had taken §4's full stop with it, so a listener heard "…when they had not Two limits…". It is restored.
- **Lesson:** most repetition on this page is deliberate, so a repetition pass gains about 2% per page. Do the longest pages next.

**`site/src/diagrams/risk_management.mjs`: PINCH_CAVEATS**
- **The split:** PINCH_CAVEATS is now four named sentences (PINCH_COUNT, PINCH_COVER, PINCH_SCOREBOARD, PINCH_CONTACT), so the two captions still cannot drift apart.
- **pinch-centre-high (four hosts):** 1,488 → 1,401 characters. It keeps every limb.
- **pinch-centre-below-the-goal-line (two hosts):** 1,370 → 1,104 characters. It drops the wingers sentence and the "Three things" header, because in both hosts (risk_management :587/589, game_management :249/251) it sits directly after the high caption, which voices them. A comment says to restore them if the deep diagram is ever embedded alone.
- **"Which forward stays high" became "Who covers the point":** the old text listed the weak-side defenceman as a forward.

**`content/getting-started/getting_started.md`: safeguarding and manager DBS**
- **:430:** the safeguarding duty was quoted in R&R 2024-25 wording and credited to the Code of Conduct, where that string does not appear. It now quotes the current Code of Conduct and Ethics (June 2026) s2: "[b]e aware of and abide by England Ice Hockey's safeguarding policies and procedures". It adds the duty to report concerns to the club's Designated Safeguarding Lead and to England Ice Hockey (safeguarding@englandicehockey.com), anti-doping, and the Social Media Code of Conduct.
- **:429:** "a manager must have a DBS clearance if working with U18s" (EIH Manage web page) understated the duty. The IHUK 2026-27 Club Committee, Team Managers, Bench Support & Off-Ice Officials Regulations require every team manager to "hold an Enhanced DBS check (with Children's Barred List)", with no U18 condition.
- **Trailer (:728, :732):** the Manage page entry now notes it is narrower than the regulation. The Code of Conduct entry is corrected, and a new entry is added for the club regulations.
- **Left unchanged:** R&R 9.8's club-DSL criterion. No current replacement was found in six documents.
- **Not affected:** no podcast script carried the old manager line.

**`sources/`**
- Added `ihuk_club_regs_2026-27.{pdf,txt}` and `_layout.txt`, with a README entry (12pp, created 26 Aug 2026, text-to-PDF ratio 5.0%).

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Sources (policy quotations) | source-verifier | **First pass:** 7 URLs fetched, all returning 200. All current documents are byte-identical to the 22 Oct copies. The :430 quotation needed moving to the Code of Conduct, and :429 understated the regulation. **Re-check after the edits: CLEAR.** All three new quotations are verbatim, the quote closes at a clause boundary, and the URLs and section citations (s1, s2, s5) are correct. |
| Content | content-reviewer | **First pass:** one blocking defect, the §4 full stop lost in a cut. Fixed. One nit, the §7 "This" antecedent, was applied. Every cut was traced to where its content still stands. The pinch split is **CLEAR**: the adjacency claim holds in both hosts, and "Who covers the point" matches game_management item 3. |
| Safety | safety-reviewer | **CLEAR** on all three. The manager DBS line is verbatim and stricter, the safe direction. §2's "a coach cannot make a body check legal in a non-checking category" is true in every book (USAH 604(a) only lets a local governing body prohibit; HC 7.3 only lets a Member add non-checking divisions; IHUK competitions are set by Rules of Competition). No safety limb was lost. **One older minor:** risk_management's pinch section has no "pinch for the puck, not the player" wording. Now a plan row. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check-podcast-guids: 93 items. check-links: 56 pages. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on both content files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the safety-reviewer (§2 claim against USAH 604(a) and HC 7.3) |
| D4–D5 citations | Checked by the source-verifier (live fetch and byte comparison) |
| D6 negative existence | Checked: no current club-DSL criterion in six documents (stated as a search, not a proof) |
| D7 cardinal rule | Checked: the pinch coaching-choice ask is kept in both captions; §2/§7 "None" rewordings |
| D8 numeric ownership | Checked: the 78.8/70.1 figures match their owner, scanning_and_anticipation |
| D9 summary layer | Checked: DBS appears in no other layer; core_principles' Key Takeaways and Common Mistakes are untouched |
| D10 facts | Out of scope: no facts line changed |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Checked: the §4 run-on was found in the rendered SSML (chunk 010) and fixed; pinch captions traced in risk_management and game_management renders |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links, check_absolutes |
| D15 rendered site | Build and check-links pass. No visual pass (text changes only). |

## Link baseline rows proposed (to add with the plan's link_baseline row)

R&R 2024-25 PDF (200, 1,139,400 bytes); Code of Conduct and Ethics (200, 328,705); EIH Social Media Policy (200, 262,191); EIH Safeguarding Children in Sport (200, 318,655); IHUK club regs 2026-27 (200, 511,454); englandicehockey.com/rules-and-regulations/ (200, 105,887). All fetched 23 Oct 2026.

## What this method could not have found

- An IHUK or EIH bulletin amending the club regulations or the Code after retrieval.
- Whether the shortened deep-pinch caption reaches a listener well when heard straight after the high one (needs a listen).
- Repetition across documents; the pilot read one page.
