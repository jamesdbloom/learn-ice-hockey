# SG41: icing note sweep, cross-document pointers, the next four long captions (23 October 2026)

## What changed

**CARHA blue-line icing note, swept across the remaining pages.** CARHA Rule 65 lets some leagues divide the ice at the blue lines; 65(b)/(c) say "the defensive teams blue line" without making clear which team that is. The note was added where a player acts on the line:
- **`content/systems/game_management.md` :220** ("Rec and youth leagues vary"): "Some CARHA leagues measure icing from the blue lines instead of the red." It also changes "over the red line" to "over the line".
- **`content/technique/passing_and_receiving.md` :296**: placed after the CARHA 73(d) quote "It will still be in effect for icing". It reads "Some CARHA leagues use the blue lines for icing instead (Rule 65), so ask yours."
- **No note needed elsewhere.** Every other icing statement in the corpus was read, and each is scoped to a named book, names no dividing line, or is icing under either division. The agent's table covers every file. The pages already carrying the note were confirmed: winger, zone_entries, rink_map, rules_primer, center, breakouts, neutral_zone_systems and time_and_space.

**Cross-document pointers** (check_pointers' new pass, 18 hits plus 1 same-document hit, all read)
- **`getting_started.md` :285**: "— see the note below" pointed a listener at a verification blockquote that is not voiced, so they never heard the warning. It now reads "— thefirstshift.ca does not reach the programme." The note is unchanged.
- **The other 18 hits are correct, so nothing else changed.** Each pointer's substance is voiced in place, or the target voices it in its body (not only its trailer), or the pointer is a disclosure naming a source. getting_started's pointer to the DZC "Comparison Table" is covered by that page's voiced "short version".

**Captions** (`site/src/diagrams/`, rebuilt)

| Caption | Characters | Notes |
|---|---|---|
| goalie-rim-stop-or-clear | 1,686 → 1,134 | Cut: IIHF Handbook detail and NHL reading disclosure (voiced in the same chunk, 044); book-by-book trapezoid list (chunk 043); HC/USAH freeze detail; Elite League clause (chunk 037). |
| faceoff-where-the-draw-goes | 1,577 → ~1,410 | Wording only. Every rule limb kept, because rules_primer does not voice them nearby. |
| the-trapezoid | 1,342 → ~1,220 | PWHL and EIH rule numbers, and the Elite League clause (voiced in goaltender 35 and how_to_watch 29). |
| rush-gap-and-angle | 1,414 → 1,127 | How the band's edges were chosen. The "cut short here only so the shading has an edge" disclosure is kept after review. |

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety and rules | safety-reviewer | **CLEAR.** It verified IIHF 63.2(VI)/(VII)/(VIII) and Situations 27.6/27.7/27.9; PWHL 1.8, 27.8 and 65.2; USAH 612(a)–(g), 614(c) and 624(a); NHL 63.8 and 81.2; HC 6.4(a)/(b); CARHA 58(b) and 65; EIH 22.2/22.3. It checked that every cut limb is still voiced next to its caption in every host, and that every changed antecedent is correct. It raised 3 minor wording points, all applied. |
| Content | content-reviewer | First pass **NOT CLEAR**, with one major and five minors:<br>• **Major:** rush-gap "a lane running the length of the rink" contradicted the drawn rectangle and dropped the shading-edge disclosure (NN4). The zones comment depended on that disclosure.<br>• **Minors:** two stale comments; trapezoid "suspension of it" attached to "the minor" and lost "reach"; the rim caption's double negative; "no choice" lost "of dot"; a bare "(65)".<br>All were fixed, and the re-check was **CLEAR**. The icing notes and the First Shift sentence were CLEAR in the first pass. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check-podcast-guids: 93 items. check-links: 56 pages. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare: 0. check_marker_pairs on the 3 content files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the safety-reviewer (list above) |
| D4–D5 citations | Out of scope: no citation added. The First Shift claim repeats the page's own dated note (not refetched). |
| D6 negative existence | Checked: "no other page needs the icing note", swept by reading every icing statement |
| D7 cardinal rule | Checked: no coaching choice changed |
| D8 numeric ownership | Out of scope |
| D9 summary layer | Checked: facts, Common Mistakes and Key Takeaways in game_management and passing_and_receiving contain no flat red-line rule for every book |
| D10 facts | Out of scope: no facts line changed |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Checked: renders of all 9 caption hosts plus the 3 content pages; the pointer fix verified in getting_started chunk 019 |
| D13 folklore | Out of scope |
| D14 structure | Checked: check_links, check_absolutes, check_caption_echo |
| D15 rendered site | Build and check-links pass. No visual browser pass (caption text only). |

## What this method could not have found

- Icing instructions that imply the red line without naming it ("carry it in before you dump"), and diagram captions about dumping. The sweep needed an icing word and a line word together.
- Which blue line CARHA means.
- Pointers worded outside check_pointers' window ("see the chart in…").
- An ear test of the shortened captions, and how they look in a browser.
