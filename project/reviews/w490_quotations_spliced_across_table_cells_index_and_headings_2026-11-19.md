# W490: eleven quotations stop running a rulebook table's cells, an infographic's heading and key, or a situation and its result together as one string (19 November 2026)

**Files changed**
- **Content:**
  - foundation/language_and_glossary.md
  - foundation/rink_map.md
  - foundation/rules_primer.md
  - positions/goaltender.md
  - systems/forechecking_systems.md
  - systems/offensive_zone_play.md
  - systems/special_teams.md
  - technique/shooting.md
- **Also:** project/plans/OPEN_ITEMS.md and this record

## Source
This follows up From W489 (1). The splice shape (separate source structure quoted as one continuous string) is not limited to em dashes. check_quote_drift cannot see it whatever joins the pieces.

## Census (read-only source-verifier)
**Coverage**
- **Automated pass:** every `*"…"*` in content/, 9,612 quotations, of which 7,858 were located. Each match was tested for column gaps, leader dots, form feeds and short-line joins.
- **Second pass:** split-and-relocate on the 764 segments not found.
- **Targeted passes:** a keyword pass (Table/index/Summary/Appendix/Situation) and a row-shape regex.
- **Hand checks:** about 180 candidates.
- **Renders:** IIHF v1.1 pp. 222–223 rendered with pdftoppm.

**Results**
| Shape | Sites | Source |
|---|---|---|
| Heading + key line, arrow moved and recased | glossary :568, rink_map :722 (*"Player´s Changing Zone ➔ Rule 74"*) | IIHF App. VI p.223 (`iihf_rules_v1.1.txt:10692-10693`; same in v1.0 and 2026/27) |
| Situation cell + Result cell, bridged by an ellipsis | shooting :1041 (PWHL Table 14 5E) | `pwhl_rules_layout.txt:8323-8326` |
| Rule-number cell + description cell, no punctuation | rules_primer :1245 (×2), goaltender :1805 (×4), special_teams :1345, FS :1186, ozp :1331 | USA Hockey Summary of Penalties / Face-Off Locations / Discipline Policy (`usah.txt:1217, :5185-5186, :5212, :5277, :5291, :5338, :5434`) |
| Dash drift (en dash for the book's hyphen-minus) | shooting :1041, "(Rule 71 - Interference on the Goalkeeper)" | `pwhl_rules_layout.txt:749-750, :8206` |

**Cleared:** about 20 structure-relevant quotations were verified OK, including:
- NHL Tables 10, 11 and 14;
- IIHF Tables 5, 6 and 13;
- PWHL Tables 5 and 13;
- the NHL index entries;
- the Casebook headings.

**Left as they are:** four list joins (bullets quoted as one string; uk_rules :355, rules_primer :1245 U10, getting_started :405, switching_positions :688). Adding separators inside the quote marks would invent text.

## What changed
Every repair changes quotation framing only. No claim changed.
- glossary :568, rink_map :722: the **Appendix VI** infographic headed *"PLAYER´S CHANGING ZONE"*, keyed *"RULE 74"*.
- shooting :1041: *"plants herself on the crease line or outside the goal crease"*, with the result *"Goal is allowed."*; and "(Rule 71 - Interference on the Goalkeeper)" with the book's hyphen.
- The USA Hockey rows now read *"description"* (rule number), each under its correct heading:
  - *"Leaving crease area during altercation"* (615(e))
  - *"Players not going to bench after warning during altercation"* (615(e))
  - *"Goalkeeper delivering body check"* (640(f,g)) and (640(h))
  - *"Goal crease violation"* (625(b))
  - *"Charging"* (Rule 607(e)), ×2
  - *"Push off opponent with skate"* (627(a)), ×2

All the repaired sites except shooting :1041's Table 14 sentence and the glossary/rink_map App. VI references sit in Sources trailers, which are not voiced.

## Census leads tested
- **"builds up speed by taking multiple strides"** (IIHF charging, four documents) was reported as absent from every extraction. It is a **FALSE NEGATIVE**: the sentence is present at `iihf_rules_v1.1.txt:3928` and `iihf_rules_2026-27.txt:3986`, but page furniture is spliced mid-sentence in the extraction. The census agent withdrew it.
- **Three other "not found" fragments** are filed below, not acted on.

## Reviews
| Reviewer | Result |
|---|---|
| source-verifier (census author) | **CLEAR** on all ten repaired sites, against the source extractions and page renders: 8 files, 8 lines, one hunk each. |

No rules or safety review was needed, because no claim, rule or limb changed.

### C11
The coordinator wrote no content.

### D15
No marker changed. `--bare` = 0. Checked mechanically only.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist is 00:35:23; the newest content edit is 00:33:52.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts: no change. check_marker_pairs: 0 lost.

## Found, not fixed (plan row From W490)
1. **Three quotation fragments absent from every extraction.** They need a rules-verifier with a flattened read that strips page furniture, because they may be furniture or wrap artefacts like the false negative above:
   - USA Hockey *"The determination is made at the time the penalty expires…"*, first clause, at 6 sites (glossary :566, on_ice_communication :778, defender :1117, faceoffs :1422, special_teams :1345, zone_entries :1279);
   - IIHF *"…('Fighting', without a game misconduct penalty)"* (rules_primer :1271, uk_rules :140, bcb :1929);
   - time_and_space :290 *"moves into an opponent's path… thereby taking him out of the play."*: its halves match different books (IIHF and NHL), so this is a possible cross-book attribution.
2. **The census method cannot see** a splice whose joined form matches a continuous copy elsewhere in the same book (for example the PWHL table title, continuous in the table of contents), or splices inside unrendered infographics.

## What this method could not have found
- Quotations of sources not on disk.
- Quotations not in `*"…"*` form.
