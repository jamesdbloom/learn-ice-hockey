# SG70: shot-block advice made consistent across the corpus (24 October 2026)

## What changed

The settled advice:
- **Standing block:** padded surfaces square to the puck, head up and out of the lane, feet on the ice, hands behind your body with the backs of the gloves out.
- **On the ice:** hands tucked behind your shin pads.
- **Screening position:** never block from one; commit fully or get out applies only elsewhere.

A sweep (every "tuck", "block", "commit fully" and screening hit) fixed:
- **mental_game :453:** a standing block with "hands tucked" became "hands behind your body with the backs of the gloves out".
- **body_contact_and_battles :1601 (facts):** "When you are not screening your goalie, commit fully…". It replaces "Out of your goalie's eyeline", which could be heard as an instruction rather than a condition.
- **bcb :1592 (In short):** reordered to lead with the prohibitions: "Never block the shot on a 2-on-1 or from a screening position; otherwise, commit fully or get out of the lane."
- **"head out of the lane" added** where a block instruction lacked it: special_teams :577 and :1001, winger :175, plus the facts lines special_teams :562 and :989. The safety-reviewer found the two facts lines missed by the sweep; each is voiced alone just before a repaired body paragraph.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, rendered (mental_game, bcb, special_teams, winger) | All six original edits upheld. No standing "tucked" form remains anywhere in the corpus. Finding: special_teams :562/:989 facts lines lacked the head limb. Applied with the reviewer's sketches, as was the optional "otherwise" wording at :1592. check_marker_pairs: 0 lost. |
| Rules (C4) | not dispatched | No rule text changed; this is technique only. |
| Mechanical | coordinator | Full npm build exit 0 after the last edit. check_facts, check_absolutes, check_secrets, check_counts and check_links all exit 0. check_marker_pairs on 4 files: 0 lost. |

## Dimensions

- D1–D8, D13: out of scope (no rule or numeric change).
- D9: the claim was layer-tested across facts, In short, body and Common Mistakes.
- D10: :562 and :989 are within the 200 cap.
- D11: safety-reviewer.
- D12: rendered.
- D14–D15: check_links and the build.

## What this method could not have found

- Shot-block advice worded without the searched terms, including anything in goaltender and defending_the_rush.
- Whether the standing form is executed safely at speed.
- Captions carrying an old hand form. Check_caption_hosts was not run, although the two shot-block captions were fixed in SG69.
