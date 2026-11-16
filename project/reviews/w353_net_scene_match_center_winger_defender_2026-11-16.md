# W353: net-ending hit-from-behind scenes get Hockey Canada and CARHA's match in center, winger and defender (16 November 2026)

**Files:**
- content/positions/center.md
- content/positions/winger.md
- content/positions/defender.md
- content/systems/defending_the_rush.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
W351–W352 leftover (1): breakaway, backcheck and net-drive scenes in documents outside W348–W352. These voiced only USA Hockey's match, or only Hockey Canada's head match, and so implied the head match was Hockey Canada's only one. They omitted the Hockey Canada 7.5(c) and CARHA 53(b) mandatory match for a hit from behind into the boards or goal frame/net on a player who cannot protect themselves.

Also included: plan item (4b), "(goal net)" at defending_the_rush :635/:320.

## Census
A read-only author rendered all 33 in-scope stems and found 11 units in 5 files. Two clusters were NOT dispatched, because rulings recorded in W349 stand:
- **language_and_glossary :430, CM :507, KT12 :540.** A push in a screener's back sends them away from the net, so it is not a net scene; W349's reviewers ruled only 608(c) applies.
- **goaltender :1277, :1700.** These are written from the goalie-being-hit perspective (W349: a match tier changes nothing a goalie does).

The census's borderlines were OK by chunk distance: shooting :535, zone_entries :1202, winger :899.

## What changed
Two authors worked disjoint files: X took center and winger; Y took defender, switching_positions and defending_the_rush.

**center**
- **Backchecking — the middle lane.** The driver arrives in the slot, so this is a net scene.
- **New facts Rule line after :686:** "A hit from behind into the net or boards on a player who cannot protect themselves is a mandatory match in Hockey Canada 7.5(c) and CARHA 53(b)". This is dtr :635's wording without its intent clause, because nothing in this section's body carries that clause.
- **New body sentence at :702:** "Hockey Canada and CARHA must make a hit from behind into the net or boards a match when the player cannot protect themselves."
- **Chunks:** 045 and 047, same as their units.

**winger**
- **Goalie bullet in "A hit from behind" (:866):** gained "and 7.5(c)'s match if you drive a goalie who cannot protect themselves into the goal frame or boards" (center :784's form).
- **The split:** the bullet was already over 1,200 chars, so it was split at the NHL/PWHL/IIHF limb. That limb became its own bullet, unchanged except for the opening words "On a goalie".
- **New ⚠️ before the added strong run:** this keeps the HC half's spoken "Important." (the original's only glyph moved with the NHL half). Marked units went 68 → 69.
- **Common Mistakes trailer bullet (:896):** gained the same reviewed sentence. :901's frame match was two chunks later.

**defender**
- **Facts :819 (the block is at HARD_MAX 14), replaced:**
  > "A slide from behind into net or boards on a defenceless carrier is a mandatory match (Hockey Canada 7.5(c), CARHA 53(b)); in Hockey Canada, anywhere if it hits the head or is meant to injure (7.5(c), 7.6(c), 7.7(c)); USA Hockey 620(b): careless or intentional head contact, major and game misconduct"
  
  It is 299/300.
  - "Plan on 7.5's minor and game misconduct anyway" survives at :818, in the same chunk 052.
  - The permissive 7.7 "unless violence is minimal" carve-out is dropped. That is the conservative direction, because 7.7(c)'s match has no violence condition.
- **Body :838 ("Never slide in from behind a carrier"):** now reads "…and must make a hit from behind into the net or boards a match when the player cannot protect themselves."
  - "Or you meant to injure them" was dropped from the head clause. The sentence before it carries the every-book intent match in the same chunk 054.
  - The pointer now goes to the in-page "A hit from behind", which carries 7.5(c)/53(b)/608(c) and links on to Body Contact. Common Mistakes :1014 keeps the Body Contact link.

**switching_positions:** no change, refuted.
- :259 and §"Fouling a breakaway from behind" (:589–593) are stick-only (hook, trip, hold, slash; penalty shot). They teach no body contact.
- The net/boards match is voiced at :244, :270, :607 and KT8 :674.

**defending_the_rush:** "(goal net)" was dropped at :320, :409 (the census missed this one) and :635. Each line still names the net ("boards or goal frame", "net or boards").

## Reviews
| Reviewer | Result |
|---|---|
| census (read-only author) | 11 units / 5 files; dispatch list; borderlines and Key focus / Overview listed separately |
| safety-reviewer (rules and safety) | No critical or major. Re-read HC 7.5 (both paragraphs), 7.6, 7.7, 8.5; CARHA 48(a), 53(a)/(b); USA Hockey 608, 620; NHL 21.1, 43; IIHF 43. Upheld center, winger (both halves of the split bullet voice "Important."; no panel; WARNING_NEAR_RE forms the wrapper), defender :838 (no limb lost), the dtr "(goal net)" drops and the switching_positions refutation. MINOR on defender :819: "on the head a Hockey Canada one" could be heard as boards-conditioned, though 7.6(c)/7.7(c) need no boards, and 620(b) had lost "or intentional". Supplied a replacement. |

### C11
The coordinator wrote no content. The one edit after review is defender :819: the reviewer's text with two wording trims ("on a defenceless carrier", "the head"), plus "7.5(c)" added to the intent limb's citation (7.5(c) ¶2, already verified by the reviewer).

The author flagged one remaining reading risk: "anywhere if it hits the head" may be heard without the "defenceless" condition. That would overstate 7.6(c), which is the harsher direction.

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final content edit. After it:
- check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets and check_counts --update all passed (counts unchanged);
- check-arrivals: 0 hard;
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST and 0 SPLIT HALF on all four content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | safety-reviewer re-read every cited rule |
| D4 Citations | rule text quoted from sources/ |
| D5–D8 | not engaged |
| D9 Summary layer | winger CM; defender facts and body together; center facts and body together |
| D10 Key-facts layer | center new Rule line; defender :819 replaced (reviewed) |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | every unit rendered; chunk positions recorded |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, build check-links; the new in-page anchor resolves |
| D15 Rendered site | build plus check_callout_flow --bare; no browser pass (text plus one inline marker) |

## What this method could not have found
- **Other wordings.** Scenes that place the net in a neighbouring paragraph or call it "the slot", "the post" or "the paint" were outside the census's net-word filter.
- **Other goalie rules.** CARHA 52(b) and 66(b), and Hockey Canada's other goalie-contact rules, were not checked against winger's goalie bullet.
- **Out-of-scope pages.** The goaltender and glossary units stay as ruled in W349.
- **Rendering and audio.** The site was not viewed in a browser, and there was no ear test.
