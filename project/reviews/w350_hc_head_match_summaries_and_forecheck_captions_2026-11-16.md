# W350: Hockey Canada's head match in summary layers, and the forecheck wall captions' match (16 November 2026)

**Files:**
- content/technique/body_contact_and_battles.md
- content/systems/special_teams.md
- content/systems/game_management.md
- content/hockey-iq/playing_without_the_puck.md
- content/hockey-iq/risk_management.md
- site/src/diagrams/forechecking_systems.mjs (+ the built site/src/data/diagrams.json)
- project/plans/OPEN_ITEMS.md
- this record

## Source
Two leftovers from W349 (record `w349_scene_mandatory_match_fourteen_documents_2026-11-16.md`):
- **(1)** Several summary units gave Hockey Canada's hit-from-behind match only for the boards or net. Under Hockey Canada 7.6, which supersedes other rules for any contact to the head, 7.6(c) makes it a match for a hit to the head of a player unable to protect or defend themselves. 7.7(c) does the same for Junior/Senior. Neither has a boards condition, so a Hockey Canada reader heard no match for a head hit in open ice.
- **(3)** The forecheck-122 and forecheck-131 captions show a wall scene but priced it for the NHL and IIHF only.

The commit gate also left notes on game_management :185:
- it said the head limb twice;
- its next sentence's "it" could bind to head contact.

Five authors:
- **A:** body_contact_and_battles.
- **B:** special_teams.
- **C:** game_management.
- **D:** playing_without_the_puck, risk_management.
- **E:** forechecking_systems.mjs.

## What changed
**The HC head match.** It was added as one clause, kept inside each unit's "cannot protect themselves" condition, with CARHA never added (CARHA 50 has no helpless-head match):
- body_contact KT6;
- special_teams KT8, CM :1232, body :821, facts :815 and the CM continuation :1265 (chunk 082, voiced alone);
- game_management KT14, What it costs :1176 and CM :1284;
- playing_without_the_puck KT10;
- risk_management KT11.

**game_management :185** ("Chasing the extra body check"):
- the doubled head clause was cleaned up;
- the match sentence now names "a hit from behind";
- a separate HC head-match sentence was added;
- the every-book caution was restored as its own sentence: "In every book, plan on ejection if a hit from behind reaches their head anywhere."

The bullet is 1,199 chars.

**game_management KT14:** USA Hockey 620(b) careless head contact is now "must", plus the every-book "plan on ejection if a hit from behind reaches their head".

**Captions forecheck-122/-131.** The shared block gained "Hockey Canada and CARHA make a hit from behind into the boards or net a match when the player cannot protect themselves; USA Hockey does for a reckless one with excessive force on a vulnerable or defenceless player, boards or not (608(c))." It is voiced in each caption's own chunk at all three hosts (forechecking_systems ×2, how_to_watch_hockey). Captions are now 1,238 and 1,164 chars (were 998 and 924), so they are over the 1,000 line earlier trim waves worked to. Reviewers found no shorter true form.

**Left alone**, because the head match is already voiced in the same or next chunk:
- special_teams facts :657, :1108; body :1114; the goalie "Three books" paragraph (chunk 069);
- playing_without_the_puck CM :1047;
- body_contact CM :2055;
- game_management :1225, :1186/:1187.

**Facts lines at cap that keep the boards-only form**, each with the head match on the line before:
- playing_without_the_puck :822;
- risk_management :843.

## Key Takeaway lengths, HEAD → now (words)
| KT | HEAD → now |
|---|---|
| body_contact KT6 | 135 → 147 |
| special_teams KT8 | 114 → 128 |
| game_management KT14 | 117 → 143 |
| playing_without_the_puck KT10 | 118 → 133 |
| risk_management KT11 | 101 → 114 |

The figures are author-measured, with the HEAD baseline taken after W349. The head match adds a trigger, not a harsher price. A reviewer suggested the cheapest trim that keeps the limb: drop "(7.6(c), 7.7(c))" from the KTs, about 10 spoken words each, since every body cites them. That is left for the owner (plan row).

## Reviews
| Round | Reviewer | Result |
|---|---|---|
| 1 | rules-verifier | Nothing cheaper. "any hit to their head" (body_contact KT6, game_management KT14) overstated: HC 7.6(a) Interp. 1 treats an accidental slide-up as a minor, and 7.7's minimal-violence preamble applies. Removing "plan on being thrown out if it reaches their head" from game_management :185 cost HC (a head hit on a player who can protect themselves can be a 7.6(a) minor) and PWHL (48.2/48.5: any illegal head check is a major plus mandatory GM) readers a caution; restore it. "anywhere" never drops the condition. Captions accurate. |
| 1 | safety-reviewer | No critical/major. body_contact KT6's head clause sat about 40 words after its condition, so reorder (sibling form). special_teams facts :815's USA Hockey clause was a match only by ellipsis, so give it a verb (300/300 text). special_teams CM :1265 opened chunk 082 with a boards-only list, so add the head match. special_teams KT8 "one" bound to a boards hit. Caption sentence opened as a fragment, so lead with the verb. Upheld the caption as needed in forechecking_systems; how_to_watch's cost accepted (the constant is shared). Differed from the rules-verifier on :185: the coordinator took the rules-verifier's harsher side. |
| 2 | safety-reviewer (rules and safety, all round-2 text) | No critical/major; every unit accurate against HC 7.5–7.7 (incl. Interpretations), CARHA 50/53, USA Hockey 608/620/640, PWHL/NHL/IIHF 43/48. "In every book, plan on ejection" upheld as a cautious planning stance. Minors applied verbatim: :185's "one" → "a hit from behind"; the "Full prices:" fragment → a full sentence; KT14 had lost the every-book head-ejection advice, now restored. |

**Caption author.** E did not use the reviewer's "one" sketch. In both captions "one" would bind to "a hit the referee judges reckless" and narrow HC/CARHA's match to reckless hits. E wrote "a hit from behind" instead (+14 chars); the round-2 reviewer upheld it.

### C11
The coordinator wrote no content. The last edits after the round-2 review were the reviewer's exact texts, plus three wording trims in :185 that drop no limb:
- "if they have passed or shot";
- "A checking-from-behind call ejects you";
- "NHL, PWHL".

KT14's "if a hit from behind reaches their head" names the subject the reviewer's "it" left ambiguous.

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final content edit; diagrams.json was rebuilt at 10:08 after the .mjs edit at 10:03. After it:
- check_links --quiet, check_facts, check_absolutes (captions certified), check_geometry, check_secrets, check_counts --update (no change);
- check_caption_pairs: 0 violations;
- check-arrivals: 0 hard;
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST and 0 SPLIT HALF on all five content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier round 1; round-2 reviewer re-read every rule cited |
| D4 Citations | rule text quoted from sources/ |
| D5–D8 | not engaged (D8: the "any" overstatement fixed) |
| D9 Summary layer | every changed KT/CM read twice; game_management KT14 and :185 aligned with special_teams KT8 |
| D10 Key-facts layer | special_teams facts :815 reviewed twice; pwtp :822 and risk :843 left at cap (plan row) |
| D11 Reader safety | safety-reviewer, two rounds |
| D12 Read-aloud | every unit rendered and read in its chunk; antecedents checked aloud |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, build check-links |
| D15 Rendered site | build and check_callout_flow --bare; captions certified; no browser pass of the longer captions |

## What this method could not have found
- **Other documents.** Summary units outside these five files may still give HC's match as boards-only. The census for W349 searched for the boards-or-net shape, not for missing head limbs.
- **Hockey Canada's own tension.** 7.7(a) Interpretation 1 prices head hits on a vulnerable player from a minor plus misconduct, while 7.7(c) reads as a mandatory match for a player unable to protect themselves. No ruling on disk settles it; the corpus treats them as different conditions.
- **"Forceful at the boards".** This USA Hockey wording comes from Casebook 608 Sit. 1, not 608(b)'s text (pre-existing; cautious direction).
- **Captions.** Their minimum penalties for HC/CARHA/USA Hockey are still unvoiced, and the longer amber captions were not viewed at phone width.
- **Audio.** No ear test of the longer KTs.
