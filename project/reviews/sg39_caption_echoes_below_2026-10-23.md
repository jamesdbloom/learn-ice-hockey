# SG39: the 14 captions that repeated the paragraph below them (23 October 2026)

## What changed

`check_caption_echo` (extended in SG38) found 14 captions repeating the prose block **below** their diagram marker. Captions are voiced into every host page, so each repeat was heard twice. Every cut was made in the caption, not the prose, except for two one-clause host edits.

| Diagram | Module | Words (after: measured on the staged diagrams.json) | What went |
|---|---|---|---|
| dump-hard-rim | zone_entries.mjs | → 22 | The rim/reverse definition (the host's facts line and bullet, and the glossary, keep it) |
| dump-soft-area | zone_entries.mjs | 51 → 36 | The race narrative; now "only worth it if your chaser wins the race" |
| dump-cross-corner | zone_entries.mjs | 90 → 58 | "Awkward by design" **together with** its "coaching judgement" hedge (the owner page keeps both); the ⚠️ checking-from-behind limb is kept verbatim |
| dump-flip-over-trap | zone_entries.mjs | 178 → 60 | The icing sentence and the shorthanded scope. Both hosts voice the icing limit in the same chunk; the caption no longer makes a shorthanded claim to overstate. |
| breakout-d-to-d | breakouts.mjs | 142 → 109 | "Most punished" together with its hedge; it now names the high exchange as the alternative to behind-the-net |
| breakout-up | breakouts.mjs | 138 → 91 | "Fastest" together with its hedge; system names; "wall-sealer" now defined in place |
| breakout-stretch-pass | breakouts.mjs | 226 → 98 | The six-book offside split (both hosts carry it in full). It keeps "a skate blade on the ice, touching the line or behind it … keeps them onside in every book". |
| breakout-rim | breakouts.mjs | 241 → 169 | The definition, the release-valve clause, "forecheck most expects"; the ⚠️ wall limb is untouched |
| rush-trailer | defending_the_rush.mjs | 182 → 159 | The trade-off and the nobody-or-two line. The system name (2-1-2 low collapse) and the alternative are kept, because the winger and NZ hosts rely on the caption for them. |
| rush-3-on-2-default | defending_the_rush.mjs | 194 → 126 | Clauses repeating the bullets |
| rush-2-on-2 | defending_the_rush.mjs | 226 → 144 | The zone mechanism and "even numbers" (single host, prose carries both) |
| defender-two-on-one | positions.mjs | 212 → 90 | The slide detail, goalie agreement and backchecker caveat; it now names "a timed slide across the passing lane" as the alternative |
| nz-pressure | neutral_zone_systems.mjs | 156 → 80 | The phase note and the drift clause; "steps up hard" became "closes the gap fast" |
| goalie-fifty-fifty-puck | goaltender.mjs | 197 → 63 | All rule content (63.2(vi), Hockey Canada clauses ii and v). The facts block before it and the bullet after it carry this in full. |

Host edits:
- **`content/hockey-iq/risk_management.md` (Up, item 2):** "The fastest way out" became "The quickest way out when the lane is open". It had relied on the caption's hedge.
- **`content/positions/goaltender.md` (3-on-2s paragraph):** added "two defencemen playing different ones on the same rush is worse than either". This line lived only in the old caption.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Content (hosts, NN7, disclosures, drawing match) | content-reviewer | First pass: 1 major and 5 minors. **Major:** the rush-trailer caption said "where they have to stay", which contradicted the alternative, and it dropped the system name for two hosts. **Minors:** undefined "wall-sealer"; risk_management "fastest" lost its hedge; "which one" pointed at nothing; the soft-dump line was ambiguous aloud; D-to-D had no alternative. All were fixed. Re-check: CLEAR, with a grep for any layer built on the old trailer wording. The claim-plus-hedge cuts (cross-corner, up, D-to-D) were confirmed: each claim left the caption, and the owner page keeps claim and hedge together. |
| Safety and rules | safety-reviewer | CLEAR. "Onside in every book" was verified against NHL 83.1, IIHF 83.1, PWHL 85.1, USAH 630(a), HC 6.11 Note 1 and CARHA 72(c) Note 1 / 73(d), with no two-line pass in any book. Flip-over icing is voiced in the same chunk in both hosts. Cross-corner and rim ⚠️ limbs are kept (glyph count unchanged per caption). "Closes the gap fast" is safer. goalie-fifty-fifty rules are in chunks 050 and 051. Follow-up: naming the slide is CLEAR, because the tripping limb is voiced in defender chunks 060 and 062, either side of the caption in 061. The goaltender clause is CLEAR. |
| Mechanical | coordinator | Full npm build exited 0 after the last edit (check-links: 56 pages, all resolve). check_facts, check_absolutes (408 caption units), check_geometry, check_secrets, check_counts and check_links all exit 0. check_callout_flow --bare reports 0. check_marker_pairs on both content files: 0 lost. |

## Dimensions

| Dim | Status |
|---|---|
| D1–D3 rules | Checked by the safety-reviewer (offside in every book; no rule text was added elsewhere) |
| D4–D5 citations | Out of scope: no citation was added or changed |
| D6 negative existence | Checked: "no two-line offside pass in any book" was swept |
| D7 cardinal rule | Checked: every coaching choice still named, with its alternative (trailer, D-to-D, 2-on-1, 3-on-2, 2-on-2) |
| D8 numeric ownership | Out of scope: no owned figure |
| D9 summary layer | Checked: hosts' adjacent layers read; no layer built on the old trailer wording |
| D10 facts | Out of scope: no facts line changed |
| D11 safety | Checked by the safety-reviewer |
| D12 read-aloud | Checked by md_to_speech renders of 10 hosts (chunk placement of the flip-over icing limb, the slide tripping limb, goalie rules) |
| D13 folklore | Checked by the content-reviewer (hedges kept where claims remain) |
| D14 structure | Checked: check_links, absolutes, caption echo |
| D15 rendered site | Not visually reviewed; the build and check-links pass. These are caption text changes only; no layout changed. |

## Gate note

The commit-gate cleared the commit. Its notes were acted on:
- Word counts are now measured on the staged diagrams.json.
- The same-second mtime (10:21:46) on six files is the fix agent's single repair pass. Both re-reviews ran after it, against those bytes.
- goaltender.md is also a host of breakout-d-to-d. Its chunk placement there was inferred, not rendered.

## What this method could not have found

- Chunk placement was measured for defender, goaltender, zone_entries and winger. For the trailer caption in winger/NZ and the D-to-D caption in game_management, it was inferred from the markdown.
- A host paragraph outside the windows read that depended on a cut limb without echoing its words.
- Execution risk on the stretch pass (receiving at speed looking back) and on a timed slide; neither is a rules question.
- No visual browser review of the new captions.
