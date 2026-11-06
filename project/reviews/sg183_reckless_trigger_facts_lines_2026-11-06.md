# SG183: three facts lines give USA Hockey's reckless trigger beside head-first, and a CARHA goalie line names its penalty (6 November 2026)

**Files:**
- content/positions/goaltender.md
- content/technique/shooting.md
- content/systems/offensive_zone_play.md
- content/foundation/rules_primer.md
- project/plans/OPEN_ITEMS.md

## Source
A read-only rules-verifier census (SG183) of all `content/` and the diagram modules for three claims: single-book Hockey Canada/CARHA "ends your game" wordings (0 hard cases; 1 soft), USA Hockey checking from behind priced on head-first alone (3 facts lines, all at the cap), and "plan on a match" lines citing 602(a) where the act has its own match clause (consistency only, in the plan).

## What changed
- **goaltender facts :1375 (299/300):** "…USA Hockey 608(b) (or reckless), Hockey Canada 7.5, CARHA 53, NHL, PWHL 43 eject, … (608(c): likely a multi-game ban)".
- **shooting facts :535 (297/300):** "…no book has a bare minor for the hit (Hockey Canada: off the head); driving a helpless one into the net is a mandatory match (Hockey Canada 7.5(c), CARHA 53(b)); head first into the frame or reckless, at least a USA Hockey major and game misconduct (608(b))". The author's first wording ("reckless or head first into the frame, a mandatory … major") was caught by both reviewers — it capped a reckless hit below 602(a)/608(c)'s match and read as "reckless into the frame".
- **offensive_zone_play facts :784 (300/300):** "head first or reckless, at least a USA Hockey major and game misconduct (608(b))".
- **rules_primer :814:** CARHA charging or hurting a goalie "is a major and game misconduct, and any deliberate contact with one can be (66(b))" (owner 5 Nov "name the penalty").

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier census (read-only) | As above; consistency worklist and the 640(h) correction in the plan |
| rules-verifier | 3 PASS; FIX shooting :535 (cheaper: reckless capped at a major; contradicts :577's match) |
| safety-reviewer, also standing in for content (all four rendered) | All SHIP; optional shooting reorder ("…into the frame or reckless") |

### C11
- One authoring agent made every edit; the coordinator wrote the briefs, the plan and this record.
- The one post-review edit combines both reviewers' wording on shooting :535 (stricter: "at least").

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_secrets, check_tables: exit 0.
- check_marker_pairs: 0 LOST and 0 SPLIT HALF in all four files.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier ×2 (census and review) |
| D2 Exceptions | 608(b)/(c), 602(a); CARHA 30(a) |
| D3 Divergence | Checking from behind across six books |
| D4 Citation integrity | 608(b)/(c), SDP Level 2; CARHA 52(b)/66(b)/66(e) |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "no book has a bare minor" re-checked in all six |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | "likely a multi-game ban" per owner ruling |
| D9 Summary layer | Body carriers of 608(b) in the four files already carry reckless |
| D10 Key-facts layer | Three facts lines at the cap compared limb by limb |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | All four rendered |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes inside existing runs. No site-reviewer (declared) |

## What this method could not have found
- A USA Hockey checking-from-behind price that never says "head first" (e.g. forceful-at-the-boards only).
- How "(or reckless)" sounds in the synthesised voice.
