# SG89: SDP ranges simplified, and USA Hockey's extended-knee rung (26 October 2026)

**Files:**
- content/off-the-ice/team_play_and_culture.md
- content/systems/special_teams.md
- content/technique/body_contact_and_battles.md
- content/positions/goaltender.md
- project/plans/OPEN_ITEMS.md

## What changed and why
1. **Simplified the suspension ranges (owner ruling, 26 October).** The owner chose: "Use 'likely multi-game suspension' everywhere… the exact ranges stay on the Rules Primer page." Six sites quoted USA Hockey Standardized Discipline Policy game ranges such as "three to five", "four to eight" and "six to ten":
   - team_play :285 and :290
   - special_teams :1121
   - body_contact :791 and :808
   - goaltender :1261

   All six now say "a likely multi-game suspension". Every citation and every hearing limb is kept. team_play :290 keeps "that the authorities may increase or send to a hearing" (usah.txt :1238–1241).
2. **Added the extended-knee rung, a gap carried over from before.** USA Hockey Casebook 628, Situation 1 (usah_casebook.txt :14941–14944): the major plus game misconduct *"should be assessed in all instances when the knee is extended for the purpose of delivering a check and when the contact is made to the knee of the opponent."* The kneeing lines priced USA Hockey only as a minor plus misconduct, or a major plus game misconduct if reckless. The rung is now added at:
   - body_contact :579 (facts): "wants a major and game misconduct in all instances for a knee extended into an opponent's knee"
   - :620 (body): "Never extend your knee into theirs", with the quotation
   - :1990 (Common Mistakes): "whenever you extend it into their knee", contrasted with "a mandatory one if reckless"

   The kneeing table cell is unchanged, because a longer cell would make the renderer drop the table.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Safety and rules, all four files | safety-reviewer (brief also covered rules) | **special_teams:** SHIP. **goaltender:** SHIP. **team_play :290:** FIX, because dropping "increase" made "or a hearing" sound like an alternative to a suspension. **bcb:** kneeing substance correct and the quotation verbatim; "should" rendered as "wants… in all instances" or "whenever" errs harsh, which is acceptable. **bcb :579:** FIX for an ambiguous "that pair" and "Sit." being voiced as "Sit". **404(b) once per page:** holds on all four pages. |
| Rules (commit gate 1 blocked on C4) | rules-verifier | Every claim CONFIRMED against usah.txt and the Casebook. The extended-knee rung is fairly rendered as "wants" or "whenever", both erring harsh. Every tier named is on the SDP list at 3+ games. INCOMPLETE: bcb :1663 omitted the rung. The verifier also noted 639 is a second, cheaper route for a knee that trips; the corpus's floor errs costlier, so that is not a defect. |
| Safety, :1663 | safety-reviewer | FIX: "slew footing starts at it" put "it" next to "a knee". Fixed to "the pair". |


### C11
The coordinator applied both FIX sketches; no reviewer has re-read them, so the commit gate reads them:
- team_play :290: "with a likely multi-game suspension that the authorities may increase or send to a hearing"
- bcb :579: "its Casebook (628, Situation 1) wants a major and game misconduct in all instances…" (298/300)
- bcb :1663: the verifier's sketch, "…and its Casebook wants that pair for a knee extended into a knee; slew footing starts at the pair…". "plus a game misconduct" was shortened to "plus game misconduct" to fit 300.

## Dimensions
| Dim | Status |
|---|---|
| D1–D3 rules | Casebook 628 Sit. 1 and Rule 628 (usah.txt :4586–4596) verified by the reviewer. The SDP policy Note on hearings (usah.txt :1165–1168, :1238–1241) verified. |
| D4–D5 citations | The quotation is verbatim and runs to the source's own full stop. |
| D6 negative existence | n/a |
| D7 cardinal rule | Not affected. |
| D8 numeric ownership | The SDP ranges are now owned by the Rules Primer only, per the owner's ruling. |
| D9 summary layers | body_contact Common Mistakes :1990 updated. KT :2105 gives no USA Hockey price (unchanged by design). |
| D10 facts layer | bcb :579 and :791. check_facts exits 0. |
| D11–D12 safety, read aloud | Renders of bcb chunks 046, 051, 072 and 182 were read. team_play, special_teams and goaltender were not rendered (declared). |
| D13 folklore | Out of scope. |
| D14 structure, links | check_links and site check-links pass. |
| D15 render | Site build with the absolute npm: exit 0. Prose only. |

### Mechanical checks
check_facts, check_links --quiet, check_absolutes, check_secrets and check_counts --update all exit 0. check_marker_pairs: 0 lost on all four files.

## What this method could not have found
- SDP ranges written another way, such as "3–5 games", in other documents. The grep covered the word forms only.
- Another USA Hockey rule that prices knee-on-knee contact, such as 639 leg checking.
