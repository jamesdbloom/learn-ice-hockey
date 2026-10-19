# S3 (19 October 2026): "What it costs" placement, amber on citations, quotation drift

This round addressed four plan rows, three of them raised by the S2 browser pass:
- **(hh)** "What it costs" blocks were not one block at the end of each section;
- **(ii)** in 7 places the amber highlight sat on a citation instead of the instruction;
- **(jj)** body_contact paragraphs ran too long;
- **(aa)** quotation drift that predated R2 remained in the R2 documents.

The brief is in the session scratchpad at `s3/brief.md`. 7 author agents worked on disjoint files.

## Changes

| Document | Change |
|---|---|
| winger | Task A. Power Play: the main instruction now comes before the costs. Net-front: 13 cost/rule paragraphs merged into one list, with each qualifier nested under its item. Backchecking: diagrams moved before one end-of-section costs block. DZ carrying, Faceoffs, Contact before the drop and Icing each reduced to one block. The Icing lead is now scoped to NHL/IIHF/PWHL |
| body_contact_and_battles | Task A: costs blocks merged and labels normalised to "What it costs.". The USAH "rolling" exception moved ahead of the costs. Task B: 4 amber runs moved from citations to the hazard. 18 long paragraphs split. Paragraphs over 1,200 characters went from 19 to 1; the box-out paragraph is kept whole so both halves keep their markers |
| team_play_and_culture | Task A: the line-change and crease sections each end in one "What it costs." list; instructions were moved out of the costs. Task C: 3 quotations |
| rules_primer | Task B: 4 amber runs moved (614(c), two §10 table cells, the Scope note). Task C: 17 lowered capitals bracketed and 2 punctuation fixes. The 2 remaining tool flags are attribution artefacts; the cited NHL text matches |
| forechecking, goaltender, shooting, puck_handling, defender | Task C: 9 bracket/punctuation fixes |
| zone_entries, risk_management, special_teams, breakouts, defensive_zone_coverage, game_management | Task C: 45 lowered capitals bracketed, 1 terminal period moved |
| offensive_zone_play | Task C: 2 fixes. At :664 the quote now opens after "unless"; it fits the facts cap and matches CARHA/HC "Unless the puck…" |
| center, playing_without_the_puck, faceoffs, equipment | Task C: no drift (equipment's one flag is a false positive) |

No words changed in Task C. Task A moved text and changed only a handful of lead phrases, each listed in the review below.

## Review

A safety-reviewer read the full diffs of winger, body_contact and team_play, the rules_primer word-diff, and a sample of Task C. It rendered winger, body_contact and team_play with md_to_speech and checked every moved qualifier against HEAD.

**Verdict: CLEAR.** No tier, book, "shall"/"must" or scope limb was dropped, and each qualifier still attaches to what it qualified before. The new British sentence ("under the British book a low hit from behind cannot be written down to clipping's minor") is upheld against IIHF 43.1, 43.2 and 44.2 in both editions.

**Minors (all applied):**
- **M1, lost escalations.** Paragraph splits left 5 hazard halves without a spoken "Important." (body_contact :592, :664, :697, :1148 (the USAH pinning counterweight) and :1282). Markers were restored mid-paragraph. Three further halves the author identified were also marked: clipping 44.3, the NHL bench-leaving suspensions and IIHF 101.1 walk-out.
- **M2.** "Driving a player into the goal frame **from behind**" (USAH 608(b) is a from-behind rule).
- **M3.** "Under the IIHF, a *charge*…" (42.1's referral is IIHF-only; checked against nhl_rules).
- **M4.** The winger Icing lead is scoped.
- **M5.** The team_play "Where the books differ:" lead was dropped because it contradicted "in every book here".

**Commit-gate BLOCK and rulings.** The first gate rendered body_contact and found five more split halves voiced without "Important.". The safety-reviewer ruled on each:
- **:117 (CARHA 49(a) costs): LEAVE.** The HEAD paragraph had no ⚠️, and the instruction it prices is already escalated.
- **:244 ("Where the books draw that line"): LEAVE.** The HEAD paragraph had no ⚠️, and the escalation sits on the preceding instruction.
- **:1274 (IIHF charge → Rule 48): MARK, applied.** ⚠️ was added before "**The IIHF's ceiling, a major plus a game misconduct, is the whole game**". The new unit opens on the permissive "keeps a minor" and states the ejection.
- **:870 (locked-arm disclosure): LEAVE.** It is an honest disclosure of an unsourced warning, so escalating it would invent a warning.
- **:891 ("You may hold your ground instead"): LEAVE.** It is a permission, and HEAD's ⚠️ stayed on "Never turn into a closing opponent".

**forechecking :257 drift flag.** False. The tool matched the HC Glossary; the cited 7.4 item ii ends with its own full stop.

**Tool gap found (plan row ll).** check_marker_pairs cannot see a split that leaves the new half unmarked, because it keys on the opening.

## Dimensions

| Dimension | Coverage |
|---|---|
| D1 rules | No rule claim changed in Task A/B. Reworded leads were verified; M2 and M3 checked at source |
| D2 exceptions | The rolling exception and its 602(a) limit kept together; the push-in sentence nested under its books |
| D3 divergence | Each Net-front book now carries its own item |
| D4/D5 citations | Task C: about 80 quotation fixes against source. Each author read past the closing mark on flagged entries. The reviewer sampled about 6 |
| D6 negatives | No negative claims changed |
| D7 cardinal rule | Placement makes instructions lead (the owner's programme item 2) |
| D8 numeric ownership | No figures changed |
| D9 summary layer | Not touched beyond quotation brackets |
| D10 facts | Facts lines edited only for brackets (defender :276 is at 300/300; forechecking, breakouts and zone_entries within cap); check_facts passes |
| D11 safety | safety-reviewer CLEAR. M1–M5 applied |
| D12 read-aloud | winger, body_contact and team_play rendered by the reviewer |
| D13 folklore | Out of scope |
| D14 structure | No headings changed; check_links and the site check-links pass |
| D15 site | Full build after the final content edit: --panels 0 in every changed file, --bare 0 |

## Gates (after the final content edit, no pipes)

The final content edit was the :1274 marker. The site was rebuilt after it.


- check_facts, check_links --quiet, check_absolutes, check_secrets and check_counts all pass.
- check_marker_pairs shows 0 LOST in all 16 files. Note the row (ll) blind spot; M1 was checked by reading.
- Corpus paragraphs over 1,200 characters: 72 → 54.

## What this method could not have found

- **A moved qualifier with no lexical trace.** These are found only by reading. The reviewer read the three restructured files fully but sampled Task C.
- **Truncated quotations scoring clean.** check_quote_drift cannot see them, and only flagged entries were read past the closing mark.
- **Whether the owner finds a 13-item Net-front costs list "short".** It is one block now, but no rule content was cut.
- **Browser rendering of nested list items inside costs blocks.** The build shows no bare glyphs or panels, but no browser pass was run this round.
