# W489: three quotations stop splicing a heading or table cell onto its neighbour with an invented dash (18 November 2026)

**Files changed**
- **Content:** hockey-iq/risk_management.md, positions/goaltender.md, technique/passing_and_receiving.md
- **Verification:** project/verification/link_baseline.tsv (two rows refetched)
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
W488's commit-gate flagged that the PWHL 71.5 shape (a heading and its body joined into one quoted string by an em dash the book does not print) could exist elsewhere. **check_quote_drift cannot see it, because it matches alphanumerics only.**

The coordinator listed every `*"…—…"*` quotation in content/ (32 hits). A read-only source-verifier checked the non-myth, non-FAQ ones against their sources. One agent repaired the splices.

## Census result (source-verifier)
| Site | Verdict |
|---|---|
| "walking speed" (16 copies across 15 files) | OK. One continuous sentence in `huh.txt:228-229`; the em dash is in the source (byte-checked) |
| uk_rules :383/:674 (U12 note) | OK. The unspaced em dash is the book's own (`ihuk_junior_roc.txt:149-150`) |
| passing_and_receiving :86 (Hamre item 6) | OK on the dashes (refetched PDF). Case drift fixed: "[p]ass" |
| body_contact_and_battles :944 | NOT A QUOTE. Corpus-voiced rink-side folklore that the document rebuts |
| "Heads Up — Don't Duck!" (bcb :2223, ozp :533) | OK. huh.txt:230-231 prints an em dash, ibc.txt:1389 an en dash, and Look Up Line both; bcb's typographic note is exact |
| time_and_space :374 (RinkHive) | OK. Continuous in one `<p>` (refetched) |
| **risk_management :708** | **SPLICE.** *"Control of the puck — awarded goals … 25.1, 57.4."* joins an index heading to its sub-entry (`nhl_rules.txt:13239-13240`) |
| **goaltender :1805** (2 strings) | **SPLICE.** NHL Table 11 Description cells joined to Rule cells with an invented "— Rule 63" / "— Rule 51" (`nhl_rules_layout.txt:8420-8448`) |
| special_teams :8/:47 | NOT A QUOTE. The document's own section heading, quoted as a cross-reference |

## What changed (voiced)
| Site | Now |
|---|---|
| risk_management :708 | "…and the index prints both numbers together, under *"Control of the puck"*, sub-entry *"awarded goals"*: 25.1, 57.4." |
| goaltender :1805 | "its eighth row, *"Deliberately shoots or bats puck out of play"* (Rule 63), and its thirteenth row, *"Using blocking glove to punch an opponent in the head or face"* (Rule 51)" |
| passing_and_receiving :86 | *"[p]ass the puck from the middle or heel of the blade — …"* |

No claim changed. Only the quotation framing changed.

## Reviews
| Reviewer | Result |
|---|---|
| source-verifier | Census as above, then **CLEAR** on confirmation. All three edits match their sources. The Table 11 row (xiii) quotation is one cell wrapped across two lines, so it is continuous. |

No rules or safety review was needed: no claim, rule or limb changed.

### C11
The coordinator wrote no content. The coordinator updated link_baseline.tsv:
- Hamre PDF: 856,191 → 891,396 bytes, quotation intact
- RinkHive: 41,436 → 173,185 bytes, same final URL, quotations present

### D15
No marker changed. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist is at 22:34:36; the content edits were at 22:33:13.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts made no change.
- **check_marker_pairs:** 0 lost.
- **check_quote_drift:** no new flags on any of the three files.

## Found, not fixed (plan row From W489)
1. **The splice shape is not confined to em dashes.**
   - A colon, comma or no punctuation can join a heading, cell or index line to a body just as invisibly.
   - Next candidates: every corpus quotation of an NHL index entry or Reference Table row.
2. **`sources/pass.txt` (the Hamre article) is named in the style guide but is not on disk.** check_quote_drift therefore cannot check passing_and_receiving's Hamre quotations. Coordinator task: add it from the refetched PDF, with a README entry.

## What this method could not have found
- Splices joined by punctuation other than an em dash.
- A dash the PDF draws as a vector rule rather than a glyph.
