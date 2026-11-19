# W505: on-head phrase aligned to the owner, the Hockey Canada time-out scope, CARHA in switching_positions, the forecheck captions (19 November 2026)

Four editing agents worked in non-overlapping files, all from the shared W504 brief, and one combined rules and safety reviewer read the whole diff afterwards. It found no critical or major issues and nothing that makes an act cheaper. Its findings, and two the agents reported, are now plan rows W505(1)–(9): the prose/caption echo (1, 2), the switching_positions PWHL omission (3), possible CARHA omissions in defender and rules_primer (4), the sibling on-head and time-out sites (5, 6), wording drift (7), the CARHA facts line voiced alone (8) and a renderer inconsistency (9). The commit gate then found W505(5) and (6) listed too few sites, and both now carry the full grep output. Because nothing needed repair after review, there was no repair round, and every edit in this commit is reviewed text.

## Rows closed

### W503(7): defending_the_rush, zone_entries

Three phrasings of one on-head Hockey Canada planning claim had coexisted. Ten sites now follow the owner, body_contact_and_battles: "plan on a game misconduct anyway, which head contact reaches on (the) violence". That is six sites in defending_the_rush and four in zone_entries.

- **The old zone_entries phrase was superseded wording.** "At least checking from behind's minor plus game misconduct" does not apply on the head, because Hockey Canada 7.6 supersedes every rule but fighting. The new floor (a game misconduct, which arrives with a major) is not cheaper.
- **zone_entries kept its "head contact's lowest rungs can keep you in the game" disclosure** at all four sites. The reviewer confirmed this. The brief had feared it was lost.
- **Unchanged:** every match limb (7.6(c), 7.7(c), and 7.5(c)/CARHA into the boards), every IIHF limb and every USA Hockey limb.

### W503(8) and (10): game_management, special_teams

**The no-change bar.** Hockey Canada 6.7(d)(iii)'s "may not change during it" applies only inside 6.7(d)'s categories: U18AAA, Junior, and Senior at the Member's option. The text had stated it flat, which was harsh in direction, and it is now scoped wherever it appears.

**"Where it has one."** This qualifier is now on every Hockey Canada time-out statement in these two files. The rule is 6.17(e) Note 3: in minor and female stop-time games there is a time-out only where the local Member approves one, and minor and female championships must use it.

**The match citation.** game_management :1233 now splits its match citation into "off the head (7.5(c)), on it (7.6(c), 7.7(c))".

### W503(4): switching_positions

The facts line and body now say USA Hockey **and CARHA** impose neither bar after an icing. CARHA Rule 65 has no change limb, and a flattened sweep of carha_2026.txt found no time-out at all. Remaining wording points are W505(3) (the PWHL omission) and W505(8) (how the CARHA line reads voiced alone).

### W501(9): rink_map, no change

The two "drag that trail skate, never lift it" sentences sit in "The blue lines" on the document that owns the lines. Under the owner's document-relative ruling this is the case where a technique point belongs.

The text is exact against all the offside rules:
- USA Hockey 630(a) and Hockey Canada 6.11 require ice contact.
- NHL, IIHF and PWHL use the plane rule.
- CARHA 72(c) leaves it unsettled.

"Never lift it" is cautious advice, and the three-way split follows immediately.

### W501(10): forecheck captions

forecheck-212 and forecheck-roles-rotate each had two "find out" sentences one sentence apart. The coaching-choice prompt now reads "ask which your team runs", which is forecheck-122's existing wording, and still satisfies non-negotiable 7. The safety prompt is unchanged byte for byte:
- "Find out first whether you may body check in this game … per fixture, not just per division"
- the ⚠️ instruction

check_caption_pairs confirms the required carried phrase is intact. The optional CARHA clause was not added, because "non-check adult leagues" already covers it and naming one book would partly undo the W471 summary.

## Gates on the final tree

- `check_counts --update`: no change.
- `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check-arrivals`: all exit 0.
- `build-diagrams`: exit 0, 204 diagrams.
- Full `npm run build` with the v22.23.4 binary: exit 0; 57 pages and 13,069 links resolve.
- `check_callout_flow --bare`: 0.
- No `<p>*` in dist.
- `check_marker_pairs`: 0 lost, and marked-unit counts unchanged in all five content files.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1 rules accuracy | Covered. The reviewer re-read HC 6.7(d), 6.17(e) Notes, 7.5–7.7 with interpretations, CARHA 65/19(g), and NHL/IIHF 87.1 and PWHL 89.1. Agents read the offside rules (USA Hockey 630(a), HC 6.11, NHL/IIHF 83.1, PWHL 85.1, CARHA 72(c)). |
| D2 exceptions | Covered: 6.7(d)'s category scope; 6.17(e) Note 3. |
| D3 cross-book divergence | Covered: the time-out and change bar by book; offside by book. |
| D4/D5 citations | Not engaged. No Sources entry or URL was added. |
| D6 negative existence | Covered: CARHA has no time-out (a true negative across several wordings, recorded as such; plan row W503(6) remains open). |
| D7 cardinal rule | Covered for the captions: the coaching-choice prompt kept as an instruction. |
| D8 numeric ownership | Not engaged. |
| D9 summary layers | Partly covered. Every layer of the five content files was checked for the touched claims. Sibling documents carrying the same claims are plan rows W505(5)–(6). Each now names the grep to run and every site it found on 19 Nov (more than 30 hits). |
| D10 facts layer | Covered: the reviewer checked every changed facts line for caps, traceability and voiced-alone meaning (one minor, W505(8)). |
| D11 reader safety | Covered: safety-reviewer, with every match, IIHF and USA Hockey limb traced. |
| D12 read-aloud integrity | Partly covered: game_management rendered (chunks 026, 051, 079). The other edits are within one sentence. No ear test. |
| D13 folklore | Out of scope. |
| D14 style and cross-links | Covered: check_links, check_caption_echo and check_caption_pairs. |
| D15 rendered site | Structural only (no Chrome; plan row W501(14)): 0 bare glyphs, 0 stray asterisks. |

## What this method could not have found

- **Paraphrases.** The sibling sweeps were phrase greps, so a paraphrase of the old framing or of an unscoped time-out would have passed.
- **CARHA league by-laws.** They are not on disk, so a league-level time-out or change bar would not show.
- **Render coverage.** Four of the five documents were not re-rendered, though the edits are within sentences.
- **Reviewer transcripts.** They are not on disk; this record summarises them.
