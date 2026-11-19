# W494: the 186-quotation attribution worklist was matcher noise; two attribution phrasings are tightened and a PWHL extraction trap is recorded (19 November 2026)

**Files changed:**
- **Content:** technique/body_contact_and_battles.md, hockey-iq/risk_management.md
- **Coordinator:** sources/README.md (PWHL row)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan row:** From W493 (1).
- **Triage:** a read-only source-verifier triage, then one author.

## Triage result (read-only)
`attr.py` reproduced 186 flags, and the agent read every row in context. **All 186 are OK.** The class split comes from a script run after the reading, so it is approximate.

| Class | n |
|---|---|
| Present in a USA Hockey guide (`ibc.txt` / `huh.txt`), which the matcher's book map left out | 66 |
| Multi-book sentence where the quotation is from a named book; the matcher picked the last-named one | 93 |
| Present; the matcher picked up a book name inside the quoted text | 27 |
| MISATTRIBUTED | **0** |

**Inverse population.** These are quotations of 30+ characters, credited to a book within 160 characters, and found in no source. There are 80:
- 13 are present once table and furniture interleaving is read past;
- 5 are noise;
- 5 are present in other on-disk files;
- **57 cite web pages or studies not on disk** and cannot be checked here.

**None is a rulebook paraphrase in quotes.**

## What changed
| Site | Before | Now |
|---|---|---|
| bcb :865 (facts, heard alone; 173/200) | "USA Hockey's Rule One is to keep it up…" | "USA Hockey's **Heads Up Hockey** Rule One is to keep it up…". Heard alone, the old wording could pass for rulebook Rule 1. |
| risk_management :736 | "NHL 63.6 (the IIHF's **in the same terms**)" | "(the IIHF's **to the same effect**)". IIHF 63.6 has the same substance in different words. |
| sources/README.md, PWHL row | — | Records that the extraction drops the "ff" ligature: "off-side" comes out as "of-side" at :3257 and :4435. A literal search for "off-side" is a false negative. |

## Reviews
| Reviewer | Result |
|---|---|
| source-verifier | Triage as above. Six provenance points spot-read and confirmed: ibc 5. Checking From Behind; IHUK U12 freezing; EIHL 9.5 item 3; EIH R&R 22.3; HC Glossary crease line; IIHF 76.7. |

The two content edits are attribution wording only, so no rules or safety review was needed. Each was checked by its author against both sources.

### C11
The coordinator wrote no content. The coordinator edited sources/README.md.

### D15
No marker changed. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing, and the build is newer than both content edits.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets: pass.
- **Corpus checks:** check_counts made no change; check_marker_pairs found 0 lost.

## Found, not fixed (plan row From W494)
1. **"In the same terms" claims are untested.** About a dozen claims say a second book states a rule "in the same terms" (for example equipment :440 PWHL 10.3; game_management :651 PWHL 65.8; zone_entries :213 IIHF 83.3; pwtp :739; bcb :1985; breakouts :904). The matcher never tests whether the second-named book actually says it.
2. **57 web-sourced quotations** (Hockey Canada and USA Hockey programme pages, Lignell, Tulsky, NHL.com, the IIHF 2021 announcement, Bruyere, Schwab, Marcoux) can only be checked by refetching.
3. **Quotations with no book named within 160 characters** are dropped untested by attr.py.
4. **Wrong rule number or edition inside the right book** is not tested.

## What this method could not have found
- Whether the sources on disk are the current editions.
- Whether the cited studies are sound.
