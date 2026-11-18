# W447: the "Playing in Britain?" header no longer says every IIHF rule on the page is yours (18 November 2026)

**Summary.** Every British reader is now told the IIHF rule is their base, amended by the Elite League's Casebook or the In-House Rules and by their league's own regulations. The same claim was rescoped where it was voiced: UK Rules, Getting Started, Rules Primer and Goaltender.

**Content files changed:** 38.
- 37 headers: every page carrying the "Playing in Britain?" or "Playing in the UK?" Rule set sentence. Run `git show --stat` for the list.
- foundation/uk_rules.md, for :25 and KT1.

**Also changed:**
- project/plans/OPEN_ITEMS.md. This includes the owner's rulings of 18 Nov: drop the dump-and-the-trapezoid and nz-left-wing-lock labels; keep "triangle"; re-cut all 31 podcast episodes.
- This record.

## Source
- **Plan row.** From W446 (1). The header read: "Wherever this page gives the IIHF rule, it is yours — every level of UK hockey runs the IIHF book, amended locally."
  - For an Elite League reader that is false wherever the EIHL Casebook supersedes the IIHF. Example: Casebook 42 makes the charging game misconduct mandatory on a face or head injury, where IIHF 42.4 says "may".
  - For an In-House reader it is false wherever the In-House Rules or the Rules of Competition amend it.
  - game_management's header had already been changed in W445.
- **Authors.** One agent, because the edit is an identical set.

## What changed
- **Headers.** All 37 now read: "**Playing in Britain? The IIHF rule this page gives is your base** — every level of UK hockey runs the IIHF book, amended by the Elite League's Casebook or the In-House Rules and by your league's own regulations; see UK and England Rules" (with a link).
  - The rules review added "and by your league's own regulations". The IHUK Rules of Competition state the precedence IIHF → In-House → RoC (ihuk_nihl_roc.txt:27). They set non-checking at U10 and U12, no icing calls at U12, and full-face protection for juniors.
  - faceoffs gained the full middle clause it lacked.
  - equipment keeps its tail ("and the local amendments bite hardest on equipment").
  - conditioning keeps "Playing in the UK?". The rules review ruled this accurate, because the In-House reach includes Northern Ireland.
  - **The header is not voiced.** md_to_speech replaces the Rule set block, so this change is site-only.
- **Voiced copies of the claim:**
  - uk_rules :25: "that is your starting point; the Elite League's Casebook or the In-House Rules, and then your league's own regulations, change some of those rules."
  - uk_rules KT1: "Treat a page's IIHF rule as your base…".
  - getting_started KT9: "treat the IIHF rule a page gives as your base".
  - rules_primer :45: heading renamed "If you play in Britain, the IIHF column is your base", with its anchors at :15 and getting_started :133 updated.
  - rules_primer :47 "In short" adds league regulations.
  - rules_primer :55: "two layers of local amendment… then your league's own Rules of Competition". HEAD said "one thin layer", which contradicted the headers.
  - rules_primer :893: "a place where even the IIHF rule plus its British amendments does not settle it". HEAD said "the one place", which was false.
  - goaltender facts :1211 and body :1234: "every 69 citation here is your base in Britain". HEAD said "is yours". The facts line now says the Elite League adds its own goaltender-interference criteria and keeps video review and the coach's challenge.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read.** The template was incomplete: it omitted the league regulations (Rules of Competition). faceoffs OK. equipment OK. conditioning's "UK" OK. It also found the old claim at uk_rules :25.<br>**Second read.** Headers OK. uk_rules :25 WRONG (an "and" list applied the In-House Rules to Elite League readers). rules_primer :55 WRONG ("one thin layer"). :47 should change. Replacement texts were applied.<br>**Final read.** All nine sites OK. |
| safety-reviewer | **First read.** One MAJOR introduced by this wave: goaltender facts :1211 quoted Casebook 69 "Contact in the blue paint area calls for disallowing a goal" voiced alone. That is criterion 3 of a three-part test. Without criterion 2 (who initiated), it told the defending side that any contact voids a goal; IIHF 69.1 says a defender shoving an attacker into the goalie does not. Fixed with safety's text. Minor: goaltender :1234 shortened. The rules-verifier had rated :1211 OK; the safety finding was applied.<br>**Confirmation.** CLEAR. "Important." counts are equal. |
| site-reviewer | Ten sampled pages at 400×812 DPR 2 light/dark and at 1440 light, on the 11:08:31 build. Every worst window unchanged. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD on all 38 files. The header renders as one doc-header-ruleset paragraph on every sampled page, rewrapped ones included. The renamed anchor lands on its H3 from both links, below the sticky header. |

### C11
The coordinator wrote no content. Every edit is either the identical-set template (game_management's W445 wording, extended with the rules-verifier's clause) or reviewer text.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 11:08:31. The newest content file is rules_primer.md at 11:06:58.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
  - check_counts --update made no change.
  - check_callout_flow --bare reports 0, and `--panels --file` reports 0 on all 38 files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT on 38 files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | EIHL Casebook Preamble, 37.2/37.3, 38.5, 69; In-House introduction, 5.4, 37, 38, 69.1; IHUK RoC precedence (NIHL, Junior, WNIHL); Junior RoC checking table; IIHF 69.1/69.3/69.7, v1.1 rink width |
| D2 Exceptions | 69.7 scramble allowance kept with the Casebook 69 criteria |
| D3 Cross-book divergence | EIHL vs In-House vs RoC layers |
| D4 Citation integrity | heading anchor renamed with both references |
| D5 Provenance | not engaged |
| D6 Negative existence | "the one place" (false exclusivity) removed |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | uk_rules KT1, getting_started KT9 |
| D10 Key-facts | goaltender :1211 voiced alone |
| D11 Reader safety | safety-reviewer, two reads (one Major fixed) |
| D12 Read-aloud | headers confirmed unvoiced; renamed heading voiced alone |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links; anchor click test |
| D15 Rendered site | site-reviewer |

## Found, not fixed
These are in the plan row From W447:
- rules_primer :15 omits the league-regulations layer.
- :57 "the IIHF cell is your rule".
- "Playing in the UK?" vs "in Britain".
- The EIHL's own regulations are not on disk.
- Which layer wins in a conflict is unstated.
- Other wordings of the claim.

Also from the site-reviewer: rules_primer's and bcb's headers quote the shorter section name "If you play in Britain", not the renamed heading. These are not links, so nothing breaks.

## What this method could not have found
- External links or bookmarks to the old anchor slug.
- The 27 header-only pages that were not opened in a browser.
- Real synthesised audio.
