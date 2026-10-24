# SG69: icing, 1-3-1 and wedge captions trimmed; shot-blocking wording made consistent (24 October 2026)

## What changed

**Caption trims**
- **icing-the-race-and-the-dot** (rules_primer.mjs; hosts: rules_primer, goaltender): 1,375 → 1,236.
  - Cut the goalie wave-off sentence. goaltender voices it in the same chunk (052). rules_primer gives its scope in the next chunk (024) and the full item in 025.
  - The ⚠️ automatic-icing scope limb, the boarding limb (USAH 624(d), IIHF 41.1, PWHL, HC 7.2) and the posture are unchanged.
- **breakout-against-1-3-1** (breakouts.mjs; host: breakouts): 1,352 → 859. Every cut limb is voiced in the same chunk (048).
- **pk-wedge-plus-1** (special_teams.mjs; hosts: special_teams, how_to_watch_hockey): 1,347 → about 1,000.
  - Cut the alternative +1 routes (voiced at special_teams 030 and how_to_watch 012).
  - Cut the NHL-popularity claim together with its "unverified" disclosure.
  - The shot-block limbs are reordered so the ⚠️ opens the safety block.

**Shot-blocking fixes (found by the safety review)**
- **Major, pre-existing: the wedge caption said "hands tucked"** next to "on your feet". Tucking is the form for a block taken on the ice. Done standing, it folds the head down into the shot lane, as body_contact :1570 and special_teams :803/:808 already say. The caption now reads "hands behind your body with the backs of the gloves out". A source comment that wrongly called "hands tucked" the owner's wording is corrected.
- **Screening blocks.** Every layer says never block from a screening position, but four places offered "commit fully and take the shot" for that case:
  - The shot-block-get-close caption now reads "from in front of your own goalie, do not block… get out of the lane and let them see it. Anywhere else, commit fully or get out".
  - bcb :1613 (body) has its "commit fully" clause cut.
  - bcb :1601 (facts) is scoped: "Out of your goalie's eyeline, commit fully…".
  - bcb :2009 (Common Mistakes) now reads "Don't block from there: get out of the lane…". An interim "Don't: get out…" could invert when read aloud; the reviewer caught it.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer ×3, rendered (rules_primer, goaltender, breakouts, special_teams, how_to_watch_hockey, body_contact_and_battles, defender) | **Pass 1:** all three trims CLEAR. Judgement calls upheld: keeping "a technique, not an act of courage" and cutting the 1-3-1 disambiguation. It found the pre-existing major ("hands tucked") and the SG67 screening outlier. **Pass 2:** both caption fixes CLEAR. Two majors remained: the :2009 inversion and the unfixed :1613 body bullet. One minor: the unscoped :1601 facts line. **Pass 3:** CLEAR. No "commit fully" is attached to the screening case anywhere in bcb, defender or special_teams. |
| Rules (C4) | not dispatched | No rule sentence changed. The icing boarding citations were verified by the safety-reviewer. |
| Mechanical | coordinator | build-diagrams exit 0, then a full npm build exit 0 after the last edit. check_facts, check_absolutes (after the rebuild), check_geometry, check_secrets, check_counts and check_links all exit 0. check_marker_pairs on bcb: 0 lost. |

## Dimensions

- D1–D3: no rule change.
- D4–D8, D13: out of scope.
- D9: the screening claim was layer-tested across caption, In short, facts, body and Common Mistakes.
- D10: :1601 is within its cap.
- D11: safety-reviewer ×3.
- D12: rendered, which is how the inversion was found.
- D14–D15: check_links and the build.

## What this method could not have found

- Blocking advice in defending_the_rush or goaltender worded without "commit" or "screen".
- How a speech engine voices the colon at :2009.
- Whether the drawn wedge positions put crease-edge defencemen in a screening position (diagram and content question).
