# SG202: USA Hockey's goalie test as "interfering" on goaltender, CARHA's fouled-attacker and crease-standing limbs on shooting, and the IIHF head-butt price at the rule text (8 November 2026)

**Files:**
- content/positions/goaltender.md
- content/technique/shooting.md
- content/systems/special_teams.md
- content/systems/faceoffs.md
- content/positions/center.md
- project/plans/OPEN_ITEMS.md (SG202 closures, the SG202d ruling, new leads)

## Source
Leads recorded by SG199–SG201. Three authoring agents worked on disjoint file sets (SG202a–c). A read-only rules ruling (SG202d) on USA Hockey no-contact interference fed the next wave.

## What changed
- **goaltender :544.** "Under USA Hockey an attacker interfering with you does [cost them the goal]". USA Hockey 617(c)(4) is "interfering with the goalkeeper" (usah.txt:4197-4201). The Casebook 607 Situation 5 caution stays with USA Hockey. CARHA keeps "contact that interferes" (66(b), "has physically interfered").
- **shooting :557.** CARHA 66(b)'s two fouled-attacker limbs, as written (carha_2026.txt:3116-3123):
  - your team has the puck and a defender interfered with you: failing to try to avoid the goalie is a minor, and any goal is disallowed;
  - you are not carrying the puck and were tripped or caused to fall: the same failure is a minor, wherever the goalie is.

  The previous text gave a minor for any foul (harsher).
- **shooting facts :314 and special_teams facts :1075.** USA Hockey 617(c)(4) is "for interfering with the goalie" and CARHA 66(b) "for contact that does". Both lines had given CARHA the interfering wording (harsher, and inconsistent with their own bodies). shooting :314 also gains CARHA's crease-standing limb ("may not stand in the goal crease … the goal shall not be allowed", carha_2026.txt:3102-3105), which was cheaper by omission when voiced alone.
- **faceoffs, IIHF head-butt (facts :834–:836, body :848).**
  - Facts :834: the IIHF is removed from the flat-major list.
  - Facts :835 (new) and the body: an attempted head-butt is a double minor (47.2); one that recklessly endangers an opponent can be a major and game misconduct (47.3), injury or not (Situation 47.1); a forced helmet push is one of the EIHL Casebook's double-minor examples (eihl_casebook.txt:668-672).
  - Facts :836: Hockey Canada 7.1(c) also makes a head-butt "with force" a match (hc.txt:5915). This was pre-existing and cheaper by omission.
- **faceoffs, USA Hockey 620.** Facts :831 reads "a major and game misconduct if reckless, intentional or careless, and a match can be added (620)", and the body cites "(620(a)–(c))". The previous text stated the match flatly, citing 620(c), whose own wording is "may also be assessed".
- **center CM :817.** The same IIHF and EIHL wording, and USA Hockey "a match can be added".
- **Sources trailers.** faceoffs and center now record IIHF 47.1–47.3, Situation 47.1, EIHL Casebook Rule 47, and USA Hockey 619/620; faceoffs also records Hockey Canada 7.1(c)(i).

## Wrong premises and defects found by review
1. **The coordinator's SG201/SG202 brief.** Following a safety reviewer, I briefed the IIHF Situation Handbook 47.1 answer ("a major plus game misconduct is assessed to any player who head-butts an opponent") as the IIHF's flat price. The rules-verifier ruled that harsher than the book:
   - Situation 47.1 answers only "can a major be assessed with no apparent injury", and it cites the discretionary 47.3.
   - 47.2 makes an attempt a double minor.
   - The EIHL Casebook lists a forced helmet push as a double minor, so for an Elite League centre the flat major was wrong.

   The rule text ships, plus the handbook's "injury or not". A second safety reviewer repeated the flat-wording suggestion; it was not taken, and the plan records why.
2. **The 47.3 qualifier.** "One that endangers an opponent" dropped "recklessly". The coordinator applied the final rules-verifier's wording, "one that recklessly endangers", at faceoffs facts :835 and body :848.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (wave) | goaltender :544, shooting :557/:314 and special_teams :1075 CORRECT. FIX-harsher: the IIHF flat major (faceoffs :834/:847, center :817). WORDING: the 620 citations. Pre-existing FIX-cheaper: HC 7.1(c) "with force"; shooting :314 CARHA crease-standing |
| safety-reviewer (wave) | No blockers. goaltender :544: "In all three, a screen out there without contact does not cost the goal" follows in the same chunk. RECOMMENDED: the IIHF handbook versus rule; 620 citation completeness |
| rules-verifier (follow-ups) | All CORRECT. WORDING: "recklessly" (applied by the coordinator) |
| safety-reviewer (follow-ups) | CLEAR. The helmet-push line does not read as a cap |
| rules-verifier (SG202d ruling, read-only) | A USA Hockey sight-only screen: the book is silent. Blocking a returning goalie with no contact named: goal off plus an interference minor (Casebook 625 Sit. 9). Eight FIX sites recorded in the plan for SG203. offensive_zone_play :639 CONFIRMED for USA Hockey |

### C11
- The authoring agents made every edit except the "recklessly" insertion at faceoffs :835 and :848, which the coordinator applied in the final rules-verifier's own wording.
- The coordinator wrote the briefs, the plan entries and this record.

### Checks after the last content edit
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry, check_secrets and check_tables all exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF across the five files; marked units are unchanged from HEAD.
- check_counts --update: all figures match.
- Full `npm run build` with the absolute binary, started after the last content edit: exit 0, including check:links (all internal links and anchors resolve).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3 |
| D2 Exceptions | Casebook 607 Sit. 5; CARHA 66(b) two limbs; IIHF 47.2 attempt; EIHL Casebook double-minor examples |
| D3 Divergence | IIHF rule versus handbook versus EIHL Casebook; USA Hockey versus CARHA goal tests |
| D4 Citation integrity | 617(c)(4), 66(b), 620(a)–(c), 619, 47.1–47.3, Situation 47.1, 7.1(c)(i); Sources trailers updated |
| D5 Provenance | Quotations from `sources/` on disk; check_quote_drift run on faceoffs and center, 0 flagged |
| D6 Negative claims | "Every book but the IIHF can make a head-butt a match" (0 "match" hits in the IIHF 2026/27 book outside match-fixing) |
| D7 Cardinal rule | Units lead with the instruction (never lead with your helmet; keep off the goalie) |
| D8 Numeric ownership | The IIHF head-butt price now agrees with its owner, body_contact_and_battles :1975/:1981/:1990 |
| D9 Summary layer | faceoffs CM :1245 and KT3 :1320 still agree; center CM :817 changed with the body |
| D10 Key-facts layer | faceoffs block (13 lines, 2 coaching), shooting :314 (296/300), special_teams :1075 (295/300) |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | All five rendered; changed units read de-tagged |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes with markers unchanged; no site-reviewer (declared) |

## What this method could not have found
- **The eight USA Hockey "contact" framing sites from the SG202d ruling.** These are in the plan as SG203.
- **special_teams CM :1198 and :1090.** They imply a foul relief that CARHA's push-in sentence may not write. This is in the plan.
- **Whether the EIHL Casebook on disk is current**, given its three disagreeing version stamps.
- **Other pages pricing the IIHF head-butt or USA Hockey 620** in other words.
