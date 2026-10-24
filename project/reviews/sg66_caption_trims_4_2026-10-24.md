# SG66: three more long captions trimmed (24 October 2026)

## What changed

- **forecheck-212-stacked** (forechecking_systems.mjs; hosts: forechecking_systems, winger): 1,521 → 819.
  - **Cut:** the USAH 604(a)/(b) and HC 7.3 list, and the picture disclosure.
  - **Why it is safe to cut:** in both hosts this caption directly follows the forecheck-212 caption, which voices both of those word for word in the preceding chunk (023→024, 027→028).
  - **Kept:** the ⚠️ "not a licence to go through the player… never finish into their back", and "find out first… per fixture".
  - **Fragile dependency:** the cut relies on that ordering. A source comment and a plan row record it.
- **the-last-player-back** (puck_handling.mjs; host: puck_handling): 1,507 → 916.
  - **Cut:** the coaching-choice paragraph, with its ⚠️. That ⚠️ marked a disclosure, not a hazard. Chunk 048's prose voices the same paragraph in full, and the facts chunk 047 carries it as Convention lines.
  - **Kept:** the odd-man-rush rule, and the wall-posture ⚠️ with WALL_POSTURE_SHORT.
- **oz-net-front-screen** (offensive_zone_play.mjs; hosts: center, offensive_zone_play): 1,496 → about 1,480.
  - **Wording only:** every limb fails adjacency in at least one host.
  - **Post-review change:** the coordinator added "nearer eight", following the reviewer's minor. The new imperative "stand… six to eight feet out" has its low end on the crease line itself, as the document's own body notes.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, five hosts rendered | CLEAR on all three. The sibling adjacency holds in both hosts, and the dependency is judged fragile but conservative ("find out first" licenses nothing). The-last-player-back adjacency holds, and no safety limb is lost. The net-front wording does not conflict with the SG58/SG59 cue; CARHA 66(b) was re-verified. One optional minor ("nearer eight") was applied. |
| Rules (C4) | not dispatched | No rule sentence was changed. Cut rule lists are voiced verbatim in the adjacent sibling caption, and the reviewer quoted CARHA 66(b). |
| Rendered (C10) | coordinator | build-diagrams exit 0; "nearer eight" is in diagrams.json; full npm build exit 0. |
| Mechanical | coordinator | check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. |

## Dimensions

D1–D3 no rule change; D4–D8 and D13 out of scope; D9 per-host adjacency checked; D10 no facts change; D11 safety-reviewer; D12 rendered; D14–D15 check_links and build.

## What this method could not have found

- A listener who pauses at the 023→024 chunk boundary hears the stacked caption without the rule list.
- On a phone, the two figures may sit a scroll apart.
- Whether the shorter captions still match the pictures (diagram-reviewer).
