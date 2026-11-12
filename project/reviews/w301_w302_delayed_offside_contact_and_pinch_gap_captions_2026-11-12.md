# W301–W302: a delayed-offside hit no longer priced only by the draw in rules_primer, and two more captions freed through their hosts (12 November 2026)

**Files:**
- **W301:**
  - content/foundation/rules_primer.md (:204 and :210)
  - content/systems/zone_entries.md (:278, one word)
- **W302:**
  - content/positions/defender.md
  - content/off-the-ice/how_to_watch_hockey.md
  - content/systems/defending_the_rush.md
  - content/hockey-iq/risk_management.md
  - content/systems/offensive_zone_play.md
  - site/src/diagrams/defending_the_rush.mjs
  - site/src/diagrams/risk_management.mjs
  - site/src/data/diagrams.json (build product; differs in two captions, rush-gap-and-angle and pinch-centre-high)
- **Coordinator:**
  - scripts/check_caption_pairs.py (the reason string of one dependency, no logic change)
  - project/plans/OPEN_ITEMS.md
  - this record

## W301: source
9d211a2b repaired zone_entries.md, where an offside player's contact or stick act during a delayed offside was priced only by the own-end faceoff. W301 swept the two sibling files most likely to repeat that claim, searching for the act ("delayed off", "tag up", "intentional off", "6.11", "offside player", "knowingly", "83.7", "83.24") in every layer.

**rules_primer.md :204 (body, chunk 016) carried the claim.** It said Hockey Canada makes a deliberate play *"against an opposing player"* while knowingly offside "an intentional offside — a faceoff in your own end, **not a penalty**". A listener heard the hit as free. The bullet at :210, in the same chunk, priced it the same way.

**body_contact_and_battles.md:** nothing to fix. Its only offside hits are the icing/offside-puck boarding clause (:729, :736, :741, :743, :1582, :1591).

## W301: what changed
**rules_primer.md :204.** The paragraph now reads:
> **Do not play the carrier while you know you are offside, in any book.** Hockey Canada answers the hit only afterwards: a deliberate play *"against an opposing player"* while you know you are offside can be called an intentional offside, with the faceoff in your own end and no protection for the man you hit (6.11(d)(i)).

It is followed by a new mid-paragraph ⚠️ (one strong run, inline amber, no panel):
> ⚠️ **That faceoff prices only the offside, never the hit or the swing: a check is at least a minor wherever your division bars body checking (7.3(a)), one from behind is at least a minor and a game misconduct at any level (7.5(a)), and a swing at the carrier is slashing even if it misses (9.3). Each becomes a major and a game misconduct if the carrier is hurt, and a hit from behind into the boards or goal frame on a player who cannot protect themselves is a match penalty (7.3(b), 7.5(b)–(c), 9.3(b)).**

The USA Hockey Casebook Situation 39 sentence, the Hockey Canada 6.11(b) note and the Zone Entries link that followed are unchanged. A coordinator edit briefly swallowed them; they were restored and checked against HEAD, and the paragraph's text after the new ⚠️ sentence is byte-identical (733 characters, checked by the commit gate).

**rules_primer.md :210 ("What to do" bullet).**
- "is an intentional offside" became "can be called an intentional offside" (hc.txt 6.11(d): "may be called").
- It adds: "That draw never prices the contact: in every book a swing at the carrier is slashing even if it misses, and a check is a penalty wherever hitting is barred."

**zone_entries.md :278.** In the ⚠️ sentence, "slashing in most books even if it misses" became "in every book". W301 found that Hockey Canada 9.3's rule text, not only its glossary, makes a missed swing slashing ("swings their stick at an opponent (whether out of range or not) without actually striking them"). The rules-verifier confirmed the sentence in all six books.

**Markers:**
- rules_primer 195→196: one ⚠️ added at :204, mid-paragraph. The paragraph opens with a bold instruction, so no panel forms.
- zone_entries 49→49.
- 0 LOST, 0 SPLIT HALF.

## W302: source
These two captions were next on the over-1,000 list in the W296–W298 plan row. Both host on defender.md, so one author took both. The method is HOST_BRIEF: voice any missing limb in the host first, then trim the caption.

## W302: what changed
| Caption | Before | After | Cut | Where each host voices it (caption chunk → limb chunk) |
|---|---|---|---|---|
| rush-gap-and-angle | 1065 | 927 | "already at full backward speed / a gap cannot be closed from a standstill" | defending_the_rush 012→012 (added); how_to_watch_hockey 015→015 (added); defender 028→028; body_contact_and_battles 024→024 (not edited) |
| pinch-centre-high | 1041 | 678 | the "am I right / still miss it" question; PINCH_COVER (who covers is a coaching choice); PINCH_SCOREBOARD | defender 032→033 (added); offensive_zone_play 064→064 (added); risk_management 038→038/039 (who-covers added at 039); game_management 015→015/016 (not edited) |

**PINCH_CONTACT (⚠️) is byte-identical**, and pinch-centre-high now ends on it. No constant was edited. PINCH_CAVEATS, PINCH_COVER and PINCH_SCOREBOARD are now used by no caption.

**pinch-centre-below-the-goal-line.** It had leaned on pinch-centre-high for the who-covers limb, which is now in host prose (risk_management chunk 039; game_management chunk 015). A ⚠️ note in risk_management.mjs says PINCH_COVER must return if either sentence goes. The check_caption_pairs.py reason string now says so too; the adjacency rule is kept.

**Host sentences added.** All are coaching craft, taken from their owner pages, and none carries a rule:
- **defending_the_rush:** "Take that position already at full backward speed: a gap cannot be closed from a standstill."
- **how_to_watch_hockey:** "…watch whether that defender is already skating backwards at full speed, because a gap cannot be closed from a standstill."
- **defender:** a new paragraph after the pinch marker: "**Before you pinch, ask not only "am I right?" but "what happens if I am right and I still miss it?"** Who covers your point is a coaching choice — the centre, the highest forward, or your partner sliding across — so find out what your team plays, and let the scoreboard and the clock move how often you go."
- **offensive_zone_play** and **risk_management:** the who-covers coaching choice and the question.

**defender.md, safety WORDING.** The next paragraph's bold lead was "**A step-up has a second cost the tactical one does not.**" With the new pinch paragraph in the same chunk, a listener could hear "the tactical one" as the pinch, which would say a pinch carries no charging cost. It now reads "**A step-up has a second cost beyond the open ice behind you.**" That paragraph's ⚠️ sentences are unchanged.

**Markers:** 0 LOST, 0 SPLIT HALF on every changed W302 file. No ⚠️ was added or removed.

## Reviews
| Reviewer | Result |
|---|---|
| W301 author | Sweep and edits as above. It rendered rules_primer (129 chunks); both new limbs are in chunk 016 with the act. It corrected the brief: HC 9.3 rule text makes a missed swing slashing. |
| rules-verifier (W301) | 6.11(d)(i) and "may be called" CONFIRMED; 9.3 CONFIRMED from the rule text. The :210 "in every book … slashing even if it misses" CONFIRMED in NHL and IIHF 61.1 (both IIHF editions), PWHL 63.1, the USA Hockey 634 Note, CARHA 80(c) and HC 9.3. "A check is a penalty wherever hitting is barred" CONFIRMED (IIHF 101.1, PWHL 52.1, USA Hockey 604(c), CARHA 49(a), HC 7.3). **PARTIAL, cheaper:** "a minor" and "a minor and a game misconduct" were floors stated as the price. HC 7.3(b), 7.5(b) and 9.3(b) make a major and game misconduct mandatory on injury; 7.5(c) makes a hit from behind into the boards on a defenceless player a match penalty. Its replacement ⚠️ was applied verbatim. It also confirmed zone_entries "in every book". |
| safety-reviewer (W301) | First pass BLOCKED on the same from-behind tier. Its optional lead ("…in any book.") was applied verbatim. A narrow re-check of the merged text found every tier true and mandatory as stated, and "at any level" right (7.5 has no division scope). It gave WORDING, applied verbatim: "or goal frame" (7.5(c)); "the carrier" and "themselves" in place of "he" and "himself" (7.3(a) covers female hockey; the book says "themselves"); and the knowledge condition restored to the 6.11(d)(i) clause in place of a doubled "then". It confirmed one warn-inline span and no aside with its plugin harness, which the coordinator re-ran after the final edit: 1 span, 0 asides. |
| W302 author | Inventoried limbs per host, rendered every host after the build, and gave chunk numbers in the ✂️ comments. |
| safety-reviewer (W302) | Rendered all seven hosts and located each limb by character position. Every cut limb is voiced at the same tier or fuller in the caption's chunk or the next; PINCH_CONTACT is byte-identical and voiced in every pinch host; no safety limb was lost, including pinch-centre-below. **WORDING ×2**, applied verbatim: the "tactical one" antecedent, and the scoreboard phrasing ("move how often you go"), which brings it in line with the constant it replaced. |

### C11
The authors wrote the W301 edits and the W302 host sentences and trims. Every later change to their text is a reviewer wording applied verbatim: the rules-verifier's ⚠️, the safety-reviewer's lead, its four re-check wordings, and both W302 wordings. The coordinator wrote the zone_entries one-word change from the rules-verifier's confirmed "in every book" wording, the check_caption_pairs.py reason string, the plan row and this record.

### Checks after the last content edit
After a full `npm run build` (absolute binary) started after the final content edit:
- check_facts, check_links --quiet, check_absolutes, check_caption_pairs, check_geometry, check_secrets;
- check_marker_pairs on all seven changed content files;
- check_callout_flow --panels and --bare on each.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: HC 6.11, 7.3, 7.5, 9.3; slashing in all six books; non-checking penalties in IIHF 101.1, PWHL 52, USA Hockey 604, CARHA 49; British In-House, EIHL Casebook and IHUK RoC searched for slashing |
| D4 Citations | rules_primer :204 citations verified rule by rule |
| D5–D8 | D7 checked: the three new "who covers is a coaching choice… find out what your team plays" sentences name the choice as a choice; D5, D6, D8 not engaged |
| D9 Summary layer | rules_primer Common Mistakes :1120 and KT1 :1184 read: no faceoff pricing of contact |
| D10 Key-facts layer | not engaged: no facts line changed |
| D11 Reader safety | safety-reviewer ×3 (W301 twice, W302 once) |
| D12 Read-aloud | rules_primer chunk 016; every W302 host rendered, with chunk numbers above |
| D13 Folklore | not engaged |
| D14 Structure, links | check_links, check_caption_pairs |
| D15 Rendered site | build only, plus the plugin harness on the new ⚠️ paragraph |

## What this method could not have found
- Other Hockey Canada rules pricing the same from-behind hit (7.4 boarding, head contact). The ladder is verified for 7.3, 7.5 and 9.3 only.
- A unit that describes a forechecker hitting during a raised arm without any of the swept words, such as "the arm is up, finish your check".
- Whether the IIHF Situation Handbook 83.7 "may be called" should be added to rules_primer for an IIHF reader. Its absence costs the draw location, not the hit (safety-reviewer).
- What penalises a check in a British boys' U12 game: not on disk in any searched wording.
- How the new defender paragraph and the trimmed captions sound in place. That needs an ear test.
