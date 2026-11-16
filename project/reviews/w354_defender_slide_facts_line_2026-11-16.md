# W354: defender's slide-from-behind facts line no longer conditions the net/boards match on intent (16 November 2026)

**Files:**
- content/positions/defender.md (facts :819)
- project/plans/OPEN_ITEMS.md
- this record

## Source
The W353 commit gate (record `w353_net_scene_match_center_winger_defender_2026-11-16.md`) left two notes on defender :819, the "Defending the Rush — quick reference" block, which is at HARD_MAX 14.
1. Heard alone, "…on a defenceless carrier is a mandatory match (…); in Hockey Canada, anywhere if it hits the head or is meant to injure" was ambiguous. If "defenceless" carried over, the intent limb sounded conditioned on a defenceless carrier, which HC 7.5(c) ¶2 does not require. That is mildly permissive.
2. USA Hockey 620(b) had lost "at least" before "major and game misconduct", so the tier sounded like a ceiling. 620(c) allows a match.

## What changed
**Round 1 (author).** The intent limb was moved first: "In Hockey Canada, any slide from behind meant to injure is a mandatory match (7.5(c)); on a defenceless carrier, so is one into net or boards (and in CARHA, 53(b)) or to the head anywhere…", and "at least" was restored. The author judged the "so is one" ambiguity harsher. The coordinator judged it cheaper and sent it to review.

**Review (safety-reviewer).** Upheld the coordinator. Four findings on the round-1 line, two of them in the cheap direction:
- **MAJOR (borderline):** "so is one" can be heard as "a slide meant to injure", which makes HC 7.5(c) ¶1 and CARHA 53(b) sound intent-conditioned. Neither needs intent.
- **MINOR to MAJOR:** "carrier" narrows the rules. 7.5(c), 53(b) and 7.6(c)/7.7(c) say "player" / "opponent", and on a 2-on-1 the player hit can be the non-carrier.
- **MINOR:** the CARHA parenthetical could be heard as CARHA also matching a defenceless head hit. CARHA 50 matches head contact only for deliberate injury (harsh direction).
- **MINOR:** CARHA's own intent match, 48(a), was not voiced.

The reviewer supplied a measured replacement, which was applied verbatim (299/300):

> "Rule: Hockey Canada and CARHA: any slide from behind into net or boards on a defenceless player, or meant to injure, must be a match (7.5(c); 53(b), 48(a)); Hockey Canada adds one to their head (7.6(c), 7.7(c)); USA Hockey 620(b): careless or intentional head contact, at least a major and game misconduct"

Sources the reviewer re-read:
- HC 7.5(c) ¶1–¶2, 7.6(c) and 7.7(c) (`sources/hc.txt`);
- CARHA 53(b) and its Note, 48(a) and 50 (`carha_2026.txt`);
- USA Hockey 620(b)/(c) (`usah.txt`).

The author re-read CARHA 48(a) ("in any manner").

**Not done:** the reviewer's safer "adds one to their head anywhere" needs 8 more characters. No wording-only saving of that size exists without cutting a limb or citation.

**Residual risk, harsh direction:** "adds one to their head" carries no explicit "defenceless" condition when heard alone, which overstates 7.6(c)/7.7(c) slightly.

**Unchanged:** :818 still carries IIHF 43.2, USA Hockey 608, CARHA 53(a) and HC 7.5's floor, in the same chunk 052.

## After the first commit gate (BLOCK)
The gate blocked on C4 and author-is-not-reviewer. The staged text had been written by the safety-reviewer, so only its writer had checked it, and no rules-verifier had run. The gate also asked for a ruling on the dropped "anywhere".

**rules-verifier (independent).** Every limb was true, but two readings were permissive:
- dropping "anywhere" let HC's head match be heard as net/boards-only, though 7.6(c)/7.7(c) have no location condition;
- the trailing "or meant to injure" could be heard as needing the net or boards, though HC 7.5(c) ¶2 and CARHA 48(a) have none.

It supplied a 300-char replacement: intent first, "anywhere" restored, "head contact" → "head hits" to fit.

**safety-reviewer (independent; did not write any version).** Verified every limb against hc.txt 7.5/7.6/7.7, carha_2026.txt 48/50/53 and usah.txt 620. Upheld all of them except "head hits". USA Hockey 620's Note covers head contact "with any part of the player's body, equipment or stick", so "hits" understates a mandatory major + GM; a stick to the face could be heard as a high-sticking minor. Fix: restore HEAD's "head contact", and drop "in " before the second "Hockey Canada" to stay at 300.

**Shipped value (300/300):**

> "Rule: Hockey Canada and CARHA: a slide from behind meant to injure, or into net or boards on a defenceless player, must be a match (7.5(c); 48(a), 53(b)); Hockey Canada, also their head anywhere (7.6(c), 7.7(c)); USA Hockey 620(b): careless or intentional head contact, at least a major and game misconduct"

**Residual (harsh direction):** heard alone, "Hockey Canada, also their head anywhere" does not restate the defenceless/intent condition 7.6(c)/7.7(c) require.

### C11
The coordinator wrote no content. The shipped line is the rules-verifier's text with the independent safety-reviewer's two-word repair, which restores HEAD's own "head contact". Every limb of it was verified by a reviewer that did not write it.

## Checks after the last content edit
A full `npm run build` (absolute binary, exit 0, through check-links) started after the final edit. After it:
- check_links --quiet, check_facts (:819 at 300/300), check_absolutes, check_secrets and check_counts --update all passed (counts: no change);
- check_callout_flow --bare: 0;
- check_marker_pairs: 0 LOST, 0 SPLIT HALF.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier (independent) and an independent safety-reviewer, each re-reading HC 7.5–7.7, CARHA 48/50/53, USA Hockey 620 |
| D10 Key-facts layer | the one line, voiced alone, read in chunk 052 |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | rendered and de-tagged |
| D14 Links | check_links |
| Others | not engaged (a one-line facts change) |

## What this method could not have found
- **How a listener parses it.** Whether a real listener hears "Hockey Canada, also their head anywhere" as defenceless- or intent-conditioned. That is a parsing judgement, not a measurement.
- **The rest of defender.md.** Other layers may still say "carrier" where the rules say "player".
- **Other rules for the same act.** Rules that price a slide from behind in other words, such as tripping from behind or USA Hockey 639 combined with 608, were not swept.
