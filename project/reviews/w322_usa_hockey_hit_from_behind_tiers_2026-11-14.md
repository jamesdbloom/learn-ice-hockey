# W322: USA Hockey's ejecting tiers and head-contact limb for a hit from behind, in winger, offensive_zone_play and zone_entries (14 November 2026)

**Files:**
- content/positions/winger.md
- content/systems/offensive_zone_play.md
- content/systems/zone_entries.md
- project/plans/OPEN_ITEMS.md
- this record

## Source
The USA Hockey census row (W320, 13 November). About 153 units price a USA Hockey hit from behind and only 2 carried 620(b). Six units gave only 608(a)'s floor, "at least a minor plus a misconduct", with no ejecting tier, four of them in a Key Takeaway or Common Mistakes bullet voiced alone. Voiced alone, that understates a mandatory ejection.

## The ruling (rules-verifier, read-only, before the author wave)
- **608.**
  - (a) *"A minor plus a misconduct penalty, or a major plus a game misconduct penalty, shall be assessed for checking from behind."*
  - (b) major plus game misconduct "shall" for a player who *"recklessly endangers an opponent, or causes them to go head first into the boards or goal frame"*.
  - (c) a match *"in all instances"* for reckless excessive force on a vulnerable or defenceless player.
- **Casebook 608, Situation 1.**
  - Minimal or "pinch" contact *"must be assessed"* a minor plus misconduct.
  - A forceful check on a player *"standing along the boards"*, a player thrust head first, or a reckless check *"must be called"* a major plus game misconduct, or a match.
- **620(b).** *"intentionally or carelessly contacts an opponent in the head, face or neck"* brings a major plus game misconduct, "shall". Keep this apart from 608(b)'s "head first", which is the victim's head into the boards.
- **602(a).** A match "shall" for reckless endangerment, so "plan on a match".
- **The Declaration of Player Safety** binds officials to 608's existing upper tiers for a careless hit on a defenceless player who was not playing the puck. It creates no new price.
- **The canonical short form, as shipped after review:** "even a light one is at least a minor plus a misconduct; it ends your game if it is forceful at the boards, drives them head first into the boards or net, or is reckless, and so does careless contact with their head or neck."

## What changed
- **Floor-only units, now carrying the ejecting tiers and the head limb:**
  - winger: Common Mistakes :893 and :897 (the goalie's back), KT10 :969;
  - offensive_zone_play: :1165 (the ⚠️ lead of "A hit from behind", inside the amber run), KT8 :1291;
  - zone_entries: KT4 :1261, and Common Mistakes :1200, which priced five books and had no USA Hockey price at all.
- **zone_entries KT4.** "a match penalty in several books if they go into the boards or goal frame" named no book. It now reads "Under Hockey Canada and CARHA it is a mandatory match if they go into the boards or goal frame unable to protect themselves, and under USA Hockey for a reckless one with excessive force, boards or not."
- **The 620(b) head limb** was added where a Hockey Canada head limb already sits beside a USA Hockey price:
  - offensive_zone_play :822, :993, :1224 and :1177 (at the paragraph end);
  - zone_entries :254, :862, :1168;
  - winger :863 (the body bullet behind the summary layers).
- **Key Takeaway lengths:**

  | Key Takeaway | Before | After |
  |---|---|---|
  | winger KT10 | 114 | 140 |
  | offensive_zone_play KT8 | 111 | 141 |
  | zone_entries KT4 | 96 | 138 |

  Every added word carries a mandatory tier in a unit voiced alone. The safety-reviewer's ear test found each sentence can be followed. Plan row.

## After review (author applied reviewer wordings verbatim, then the coordinator applied the narrow re-check's)
- **offensive_zone_play :1177 (rules-verifier and safety-reviewer).** The USA Hockey sentence sat before "Head contact's lowest rungs … 7.5 …", which then read as USA Hockey's advice. That is false for USA Hockey, whose 620(a) and 608(a) floors are the same. The sentence was moved to the paragraph's end.
- **winger :897.** "even a light one" could be heard as "a charge". It became "even a light hit on a goalie's back".
- **The elliptical clause.** "forceful along the boards, head first into the boards or frame, or reckless, it ends your game" made the listener rebuild the "if", and "frame" is not heard as the goal frame. It became the conditional form above.
- **The three KTs** were rebuilt with the safety-reviewer's text, using the ladder "It ends your game under the NHL, PWHL, CARHA and Hockey Canada; under the IIHF, or on the head under Hockey Canada, plan on it". offensive_zone_play KT8 keeps Hockey Canada's on-head match. Neither of the other two KTs carried it at HEAD.
- **Narrow re-check, applied by the coordinator:**
  - winger :863 now reads "a careless or intentional one is a mandatory major and game misconduct (620(b)), and for a reckless one plan on a match (602(a))". A bare "reckless … major and game misconduct" could be heard as the ceiling.
  - winger :893: "; it ends your game if" became ", and it ends your game if", so the condition stays with USA Hockey.
  - zone_entries KT4 gained ", boards or not", because 608(c) has no place condition.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (ruling) | As above. Also found 619 head-butting, and that two of the six named sites differed from the census row's description. winger :897 was an extra floor-only site. |
| author | Brief premises verified in usah.txt, usah_casebook.txt, hc.txt and carha.txt. Harness run on every changed ⚠️ unit. Renders: each new clause is whole in its chunk. |
| rules-verifier (diff) | Nothing blocking. 608, Casebook 608 Situation 1, 620, 602(a), 403(b), 404(b), HC 7.5–7.7 and 8.5, CARHA 32(d) and 53, NHL/PWHL 43.4 and IIHF 43 all re-read. "Ends your game" is right for 608(b) and 620(b). KT4's list was checked: NHL/PWHL 43.4 is discretionary with no boards trigger, and the IIHF has no match tier. WORDING at :1177 and KT4, applied. |
| safety-reviewer (diff and ear test) | Nothing blocking. 0 LOST; harness 1 warn-inline per glyph and 0 asides. Five WORDING items, applied. The three KTs were rendered (winger 074, offensive_zone_play 088, zone_entries 072) and each sentence can be followed. |
| safety-reviewer (narrow re-check) | No item blocking. The new ladder loses no Hockey Canada on-head match limb that stood at HEAD. "Costs a minor plus a misconduct" is the Casebook's required price for a light hit, not a ceiling, and the tiers follow in the same chunk. WORDING at winger :863, :893 and KT4, applied. |

### C11
The W322 author wrote the wave and applied the first reviewers' wordings verbatim on instruction. The coordinator applied the narrow re-check's three wordings verbatim and wrote the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary, exit 0) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes (captions included), check_secrets, check_counts;
- check_marker_pairs on all three files (0 LOST, 0 SPLIT HALF; 68/68, 70/70, 50/50);
- check_callout_flow --panels --file on each (0 panels) and --bare (0).

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier ×2, as above |
| D4 Citations | rule numbers added (608(b), 620(b), 602(a)) were verified in the book |
| D5–D8 | not engaged |
| D9 Summary layer | KTs and Common Mistakes in all three files |
| D10 Key-facts layer | not changed. The facts lines lacking a 620(b) limb are a plan row. |
| D11 Reader safety | safety-reviewer ×2 |
| D12 Read-aloud | every changed file rendered by the author and both safety passes |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links |
| D15 Rendered site | build, plus the harness on every changed marked unit; no site-reviewer (text only, no rendering change) |

## What this method could not have found
- **Other documents.** The floor-only USA Hockey shape survives elsewhere: game_management :1176 and special_teams Common Mistakes :1261 are known, and others may exist. A unit that prices the act without naming USA Hockey or 608 was found only by reading. Plan row.
- **Concurrent assessment.** Whether 608 and 620 are assessed together, or the referee picks one, is not settled on disk.
- **Careless vs reckless.** 620(b)'s "carelessly" is broader than Casebook 620 Situation 3's "intentional or reckless". The corpus follows the rule text.
- **Long KTs.** Whether 140-word Key Takeaways hold a real listener needs the owner's listening pass.
- **Boarding overlap.** A light hit from behind into the boards called as 603 boarding instead was not checked.
