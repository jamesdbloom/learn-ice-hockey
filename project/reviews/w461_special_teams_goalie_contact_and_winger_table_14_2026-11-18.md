# W461: Special Teams no longer limits goalie contact to deliberate contact, and its screen lines follow Rule 69's settled form; Winger's disclosure says what Table 14 prints (18 November 2026)

**Content files changed:**
- systems/special_teams.md
- positions/winger.md

**Also changed:** project/plans/OPEN_ITEMS.md and this record.

## Source
- **Plan row:** From W460 (1).
- **Commit-gate note:** winger :767, which is actually :770.
- **Authors:** two agents.

## What changed (voiced)

### special_teams
| Site | Before (HEAD) | After |
|---|---|---|
| facts :1059 (298/300) | "…let a goal come off **only** where an attacker's position or contact impairs the goalie's ability to move freely in the crease, or the attacker **deliberately contacts** the goalie in or out of the crease" | "…take a goal off where an attacker's position or contact stops the goalie moving freely in the crease, where the attacker screens from inside it, for any contact with a goalie in the crease (69.3/71.3) and for deliberate or non-incidental contact outside it (69.4/71.4)" |
| body :1075 | both 69.1 limbs with no location ("…move freely in their crease or defend their goal"), and "deliberate contact costs the goal" | "a screen from outside the crease that touches nobody keeps the goal, even one that blocks the goalie's view. A goal can come off… where an attacker… stops the goalie moving freely in their crease, or where they hold a screen inside the crease — and contact costs it too: any contact with a goalie in their crease, and anything beyond incidental contact outside it." |
| CM :1265 | "Under the NHL, IIHF and PWHL deliberate contact does" | "…any contact with a goalie in their crease does, and anything beyond incidental contact outside it" |

**Two defects, both already in HEAD, both permissive:**

1. **The defend limb had no location.** It contradicted Table 14 Situations 5C and 5E (W460).
2. **Contact was limited to deliberate.** In the NHL:
   - 69.3: *"initiates contact with a goalkeeper, incidental or otherwise, while the goalkeeper is in his goal crease… the goal will be disallowed"*.
   - 69.4: *"any contact… other than incidental contact, while the goalkeeper is outside his goal crease"*.

   IIHF 69.3/69.4 and PWHL 71.3/71.4 say the same. Heard alone, the "only… deliberately" facts line told a listener that incidental contact with a goalie in the crease keeps the goal.

### winger :770
- **Before:** "…how far 69.1 reaches outside the crease is a reading, not something either book prints."
- **After:** "…the tables settle it for a screen: one outside the crease that impairs it, moving (Situation 5 C) or planted (5 E), keeps the goal. No table row says whether a position outside the crease that stops the goalie moving freely within it, with no contact, costs the goal."
- **What this keeps:** the real remaining gap stays disclosed. The rules reviewer scanned NHL Table 14 :12048-12440 and found no such row.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **First read:**<br>• winger :770 OK.<br>• special_teams :1059 and :1075 WRONG (contact limbs; texts supplied, applied).<br>• "screens from inside it" fairly covers 5B and 5D. |
| safety-reviewer | **First read:** CLEAR.<br>**Confirmation of the contact fix:** CLEAR. Each line is stricter than HEAD.<br>**Harsh-only extras accepted:**<br>• "any contact" omits 69.3's "an attacking player initiates";<br>• the 69.7 rebound exception sits at :1064 and :1081, not in these lines. |
| site-reviewer | special_teams and winger at 400 light/dark and 1440 light on the 14:50:49 build. All new text is present. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. Worst windows unchanged. |

### C11
The coordinator wrote no content. The author added "71.3"/"71.4" to the reviewer's facts text so that the PWHL is cited at its own numbers.

## Checks after the last content edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 14:50:49; the newest content file is special_teams at 14:49:23.
- **Gates:** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass.
- **check_counts:** no change.
- **check_callout_flow:** --bare = 0; --panels --file = 0 on both files.
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.
- **Coordinator grep:** "deliberate contact costs the goal" and "only where an attacker" appear in no other content file.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 69.1, 69.3, 69.4, 69.7, Table 14 (5A–5E and a full scan); IIHF 2026/27 69.3/69.4; PWHL 71.3/71.4/71.7 |
| D2 Exceptions | 69.7 rebound exception (carried elsewhere in the file) |
| D3 Cross-book divergence | the NHL, IIHF and PWHL are identical on these rows |
| D4 Citation integrity | PWHL numbers added |
| D5 Provenance | not engaged |
| D6 Negative existence | "no table row" for an outside no-contact movement block (scanned) |
| D7 Cardinal rule | not engaged |
| D8 Numeric ownership | not engaged |
| D9 Summary layer | special_teams facts, body and CM together |
| D10 Key-facts | :1059 voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | renderer reads "69.3/71.3" acceptably |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links |
| D15 Rendered site | site-reviewer |

## Found, not fixed
- **Sibling documents** may carry a deliberate-only goalie-contact list in wording the grep missed: goaltender, winger, centre and rules_primer.
- **special_teams :1075** says "outside the crease" without a red-line instruction. This is unchanged from HEAD.

## What this method could not have found
- A contact list worded without "deliberate" or "only".
- Real synthesised audio.
