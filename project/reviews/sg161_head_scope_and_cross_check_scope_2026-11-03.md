# SG161: checking from behind scoped to "off the head" where Hockey Canada head contact makes it cheaper, the Hockey Canada high cross-check scoped to a deliberate cross-checking action, and three single-line rule fixes (3 November 2026)

**Files:**
- content/positions/center.md
- content/systems/faceoffs.md
- content/systems/offensive_zone_play.md
- content/foundation/rules_primer.md
- content/off-the-ice/equipment.md
- content/positions/defender.md
- project/plans/OPEN_ITEMS.md

## Source
These OPEN_ITEMS rows:
- the SG159 reviews: center KT6, faceoffs :622, ozp KT8 and :794 were unscoped under the owner's HC 7.6 ruling;
- the SG160 reviews: the rules_primer CM cross-check scope and the equipment :129 615(c) attribution;
- the SG156 gate: defender :335 CARHA 63(a) "unclear";
- the SG153 gate: the defender :326 citation, and faceoffs :607's IIHF and unaware conditions.

Owner rulings applied:
- HC head contact via 7.6, 15 and 18 Oct. A head-first drive is priced at the harsher of 7.5 and 7.6.
- For a head-reaching hit, NHL, PWHL and IIHF take the harsher of Rules 43 and 48 (19 Oct).
- Readable beats defendable.

## What changed
- **Checking from behind is now scoped to "while it stays off the head" or "kept off the head".**
  - **Why:** under Hockey Canada 7.6 ("supersedes any other rules … any foul that results in contact to the head must be penalized as Head Contact"), an accidental head contact in minor or female hockey is a 7.6(a) minor. Under 7.7 (Junior/Senior), minimal violence can be a minor too. The old "never two minutes in any book" and "ejects in every book but USA Hockey" were therefore false for that case, in the harsh direction.
  - **center:** :775 (now "For a hit from behind that stays off the head, no book lets you count on two minutes…"), CM :812 and KT6.
  - **faceoffs:**
    - :607: the act is named unconditionally, and only the Hockey Canada price is scoped ("Hockey Canada 7.5(a) off the head"). The IIHF is now "plan on it" under 43.3's discretion.
    - :622: the IIHF is "plan on it"; Hockey Canada prices a head hit as head contact, a match if they could not protect themselves (7.6(c)/7.7(c)); a head-first drive takes the harsher of head contact and checking from behind; and "while it stays off the head, plan on being ejected in every book but USA Hockey".
  - **offensive_zone_play:** eight sites, more than the brief named:
    - facts :782 (Never), :783 and :919;
    - body :794 and :969;
    - CM :1151;
    - Check yourself Q6;
    - KT8.

    The :782 Never line now carries no scope: "off the head or on it, it can end your game in every book, and in most it does". It was checked against HC 7.6(b)/(c), 7.5, USA Hockey 608 and Rule 43. Stacked qualifiers at :794 and :1151 were cut to one. The chunk 063 double colon was fixed. In :919, the "and CARHA 53, a match into the boards" binding was restored.
- **The Hockey Canada high cross-check now reads "any deliberate cross-check that reaches the head or neck"** (or "a deliberate cross-checking action").
  - **Where:**
    - rules_primer :427, CM :1115 and KT8;
    - defender :316 (facts, restructured by division, now "head/neck", which the renderer voices as "head or neck") and :326;
    - offensive_zone_play :970.
  - **Why:** 7.6(b) Interpretation 2 targets "a deliberate cross-checking action and strike an opponent in the head or neck". 7.7(b) Junior/Senior and CARHA 54(b) stay unconditional. The first wording, "a deliberate one", was rejected by all three reviewers: in the ride-up bullet it could be heard as "a deliberately high one", which licenses the ride-up excuse.
- **equipment :129** (615(c)):
  - The first split, "your own *prior to*", was rejected by the rules-verifier and content-reviewer as cheaper. USA Hockey Casebook 615 Situation 13 says "A match penalty must be assessed to any player who deliberately removes their own, or their opponent's helmet prior to or during an altercation", and Situation 14 says the same.
  - The line now reads "your own or an opponent's *"prior to or during"* an altercation is a match penalty (615(c); Casebook 615, Situations 13 and 14)", so the quotation is attributed to the Casebook, which is its source.
- **defender :335:** CARHA 63(a) is now stated as printed ("allows a major for a hold but does not say whether a stick hold can reach it"), with the honest disclosure kept.
- **defender :326:** the citation is now "(7.5, 7.6, 7.7)" for the harsher-of statement.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | FIX, cheaper: equipment :129 own-helmet "during" (Casebook 615 Sits. 13/14). FIX: the "a deliberate one" ride-up reading; faceoffs :622 "the harsher of the two"; ozp :919 "sent head first". The rest PASS. Advisory: the off-the-head scope is needed only for Hockey Canada |
| safety-reviewer (all six rendered) | Five files SHIP, one FIX: rules_primer CM :1115 "a deliberate one". Minors: ozp :782 scope binding to "Never"; center :775 dangling; HC-only scope at faceoffs :607. Chunk distances measured. Both SPLIT HALF candidates confirmed false positives (unmarked in HEAD) |
| content-reviewer | Critical: equipment :129 (as above). Majors: faceoffs :607 scope on the act; defender :335 dropped disclosure; "a deliberate one"; defender :316 and ozp :970 propagation. Minors: chunk 063, center :775, :919 binding, stacked qualifiers, IIHF flat (plan), :622 tier (taken). All fixed except the IIHF-flat and corpus-wide scope rows (plan) |
| rules-verifier, narrow re-check of all repair text, also standing in for the safety direction | All seven items PASS on truth; nothing cheaper. Two wording fixes taken in its own words: rules_primer :427 "reaches the head or neck", defender :316 "head or neck" |

### C11
One authoring agent per file set made every content edit:
- center + faceoffs
- offensive_zone_play
- rules_primer + equipment + defender

The coordinator wrote only the plan and this record, and rendered defender to confirm how "head/neck" is voiced. The last two edits use the re-check reviewer's own wording, made in the stricter direction.

Checks after the last edit:
- The full `npm run build` with the absolute binary exited 0, including check:links.
- check_facts (exit 0, no pipe), check_links --quiet, check_absolutes, check_geometry and check_secrets: exit 0.
- check_marker_pairs: 0 LOST in all six files. The two SPLIT HALF candidates (center, ozp) were unmarked in HEAD.
- check_counts --update: all figures match.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier twice, against the primary text |
| D2 Exceptions | HC 7.6 supersession; 7.6(b) Interp. 2; 7.7(a) Interp. 2; USA Hockey Casebook 615; CARHA 53 Note (no substitution) |
| D3 Divergence | Six-book head-case comparison: only Hockey Canada drops below an ejection |
| D4 Citation integrity | Casebook 615 Situations 13/14 added; 7.5/7.6/7.7 citation |
| D5 Provenance | Quotations from `sources/` on disk |
| D6 Negative claims | "CARHA has no supersession clause"; "USA Hockey has no supersession clause" |
| D7 Cardinal rule | No tactic presented as a rule |
| D8 Numeric ownership | None |
| D9 Summary layer | Layer tests per claim in all six files; propagation fixes at defender :316 and ozp :970 |
| D10 Key-facts layer | Facts lines at faceoffs :607, ozp :782/:783/:919, defender :316/:335, all voiced alone and within caps |
| D11 Reader safety | safety-reviewer, plus the safety direction in the re-check; nothing cheaper |
| D12 Read-aloud | All six rendered by the safety-reviewer; ozp and center by the content-reviewer; defender by the coordinator for "head/neck" |
| D13 Folklore | None |
| D14 Structure, links | check_links and the build |
| D15 Rendered site | Text-only changes, no marker moved (0 LOST). No site-reviewer (declared) |

## What this method could not have found
- About 20 sites on other pages carry "kept off the head" for every book, and other pages carry "a deliberate one" and 615(c) wording (plan rows).
- IIHF 48's tier text was not read, so ozp :970's IIHF head limb is unverified against the harsher-of ruling (plan).
- Whether a listener hears "kept off the head" as reassurance; only listening can settle that.
- USA Hockey Casebook 615 situations beyond 9 and 12–16.
