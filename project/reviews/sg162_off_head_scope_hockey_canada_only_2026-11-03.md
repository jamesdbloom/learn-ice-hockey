# SG162: the "off the head" scope on checking from behind now sits on the Hockey Canada price only, across sixteen pages (3 November 2026)

**Files:**
- content/systems/offensive_zone_play.md
- content/positions/center.md
- content/systems/faceoffs.md
- content/systems/defending_the_rush.md
- content/positions/goaltender.md
- content/systems/zone_entries.md
- content/systems/special_teams.md
- content/systems/forechecking_systems.md
- content/systems/defensive_zone_coverage.md
- content/positions/switching_positions.md
- content/technique/shooting.md
- content/hockey-iq/risk_management.md
- content/foundation/language_and_glossary.md
- content/technique/body_contact_and_battles.md
- content/hockey-iq/puck_support_and_spacing.md
- content/hockey-iq/playing_without_the_puck.md
- project/plans/OPEN_ITEMS.md

## Owner ruling (3 November, in session)
- The question asked: about 30 lines across the pages said a hit from behind ends your game "while it stays off the head". Only Hockey Canada actually makes a head hit cheaper, so how should these lines read?
- The owner chose **"Hockey Canada only"**. Put the scope on the Hockey Canada price only, e.g. "ejects in every book but USA Hockey (under Hockey Canada, while it stays off the head)".

## Why
- **Hockey Canada:** 7.6 "supersedes any other rules … any foul that results in contact to the head must be penalized as Head Contact". 7.6(a) makes accidental head contact a minor in minor and female hockey. Under 7.7 (Junior/Senior), minimal violence can also be a minor.
- **No other book gets cheaper on the head:**
  - CARHA 53's Note says "Referees are instructed not to substitute other penalties when a player is checked from behind in any manner".
  - NHL, PWHL and IIHF take the harsher of Rules 43 and 48 (owner, 19 Oct).
  - USA Hockey has no supersession clause ("supersede" scores 0 in usah and the Casebook).
- So a whole-sentence "kept off the head" or "a hit that stays on the back", voiced alone, implied a cheaper head case for five books.

## What changed
- **Converted, about 60 sites across 16 pages.** Each was decided per site, not swept.
  - Prose form: "(under Hockey Canada, while it stays off the head)".
  - Facts lines at their cap: "(Hockey Canada: off the head)".
  - Covered every layer that carried the claim: body, facts, Common Mistakes, Key Takeaways (center KT6, ozp KT8, dzc KT4, switching KT8, body_contact KT6), Key focus (body_contact :31) and Check yourself (ozp Q6).
  - The "a hit that stays on the back" wording was the same shape and was converted too: body_contact :31, :51 and KT6; glossary :499; forechecking :38; playing_without_the_puck :809, :835 and :1000.
- **Left alone, with the reason recorded by each author:**
  - Sites already about Hockey Canada only: defender throughout, faceoffs :607, game_management, rules_primer, winger :749.
  - Sites that price the head case explicitly, or where the phrase is a technique cue ("keep every hit off their head").
- **Where a sentence was already being edited and stated the IIHF as flatly ejecting:** the IIHF now reads "under the IIHF, plan on it" (43.3 is discretionary). Seen at ozp :783 and :919, zone_entries, special_teams :670, :1140 and :1201, and defending_the_rush :423.
- **Repairs after review:**
  - center KT6: "there too" had moved onto Hockey Canada and cut loose USA Hockey's ejection triggers. It now says "under USA Hockey too". This was a cheaper-direction finding from all three reviewers.
  - Trailing-dash scopes now sit in brackets: dtr :1020, goaltender :1272 and :1652, dtr :354.
  - switching :256: the USA Hockey limb now has a verb. The author refused "only if" because 608(a) allows a major plus game misconduct on any such hit.
  - ozp :919: the match penalty now names "CARHA and Hockey Canada", outside the scope. The line lost "defenceless", so it now overstates the match condition (7.5(c) and 53(b) need "unable to protect or defend themselves"). This errs harsh; the facts line above it and the body at :967 carry the condition. It is in the plan.
  - Other wording fixes: center :754 commas; zone_entries :824 "driving"; special_teams :1140 dash; forechecking :221 split; dtr :423 house form; playing_without_the_puck :809 scope moved onto "bare minor"; shooting :535 "from behind" restored.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (7 files) | MAJOR, cheaper: center KT6 "there too". Minors: center :754, goaltender :1272/:1652, special_teams :653/:1114 flat IIHF (plan), ozp :919, forechecking :221. Propagation: forechecking :38 old scope; forechecking :326 and others unscoped (plan) |
| rules-verifier (8 files) | PASS, no critical or major; all 7 reshaped facts lines kept every limb. Minors: dtr :1020, :354; shooting :535. Outside the diff: body_contact :31 and KT6 still in the old shape (fixed) |
| safety-reviewer (8 files rendered) | MAJOR: center KT6 (as above). Minors: switching :256, ozp :919, special_teams :1140, dtr :1020, goaltender :1272, center :754. 0 LOST markers in all 15 files; two SPLIT HALF candidates confirmed false positives. Outside: pwtp :809/:1000, forechecking :38, body_contact :31 (all fixed) |
| content-reviewer (5 files rendered) | Majors: center KT6; body_contact :31/KT6; forechecking :38. Minors: as above, plus zone_entries :824 grammar and sibling-form consistency. All fixed except plan rows |
| rules-verifier, narrow re-check of all repair text, also standing in for the safety direction | Every site PASS; nothing cheaper, no book dropped, no captured antecedent. Three minor wording fixes taken in its own wording: ozp :919 name the books, forechecking :221 "Under Hockey Canada,", pwtp :809 scope placement |

### C11
- One authoring agent per disjoint file set made every content edit. playing_without_the_puck was added to author E for the repair round, and no other agent held it.
- The coordinator wrote only the plan and this record.
- The last three edits use the re-check reviewer's own wording. Each is confined to its finding; ozp :919 moved in the harsh direction.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST in all 16 files. The two SPLIT HALF candidates (center :812, ozp :969) were unmarked in HEAD.
- Spoken "Important." counts were unchanged per file in the authors' renders.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×3, against NHL, PWHL, IIHF (both editions), EIHL Casebook, In-House, HC, CARHA, USA Hockey and its Casebook |
| D2 Exceptions | HC 7.6 supersession, 7.6(a), 7.7; CARHA 53 Note; IIHF 43.3 discretion; USA Hockey 608(a)–(c), Casebook 608 Sit. 1 |
| D3 Divergence | Six-book head-case comparison; only Hockey Canada is cheaper |
| D4 Citation integrity | No new citation; numbers dropped only where the body carries them (ozp :919 "7.5") |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "No other book has a supersession clause" (flattened "supersede" sweep) |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | Per-file layer tests by each author; three propagation misses found by reviewers and fixed |
| D10 Key-facts layer | 14 reshaped facts lines checked limb by limb against HEAD; caps pass |
| D11 Reader safety | safety-reviewer, plus the safety direction in the re-check |
| D12 Read-aloud | Every changed file rendered by its author; 8 by the safety-reviewer, 5 by the content-reviewer, 11 by the re-check |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs; no marker lost. No site-reviewer (declared) |

## What this method could not have found
- A whole-book head scope worded without "head", "on the back" or "bare minor".
- Whether listeners hear the bracketed scope as a qualifier or as the main claim. Only listening can settle that.
- The harsh-only leftovers are in the plan: lines with no scope at all, and the IIHF stated flatly.
