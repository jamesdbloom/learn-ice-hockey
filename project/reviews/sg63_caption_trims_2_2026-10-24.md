# SG63: three more long captions trimmed (24 October 2026)

## What changed

- **practice-small-area-in-one-zone** (practice_and_development.mjs, only host: practice_and_development): 1,749 → 1,123. Cut the research hedge and "ask what the rules are… the constraint is the teaching". Chunk 017, which follows the caption chunk 016, voices both (the hedge word for word). The ⚠️ contact and level limb and every disclosure are kept.
- **five-on-six-clear-three-outcomes** (game_management.mjs, only host: game_management): 1,605 → about 1,230. Narrative cut; every rule limb kept. The review found two problems in the reworded rule sentences, both corrected by the coordinator using the rules-verifier's wording:
  - **81.3:** "keeps an icing called while their goalie is heading to the bench" overstated the rule. The rule says the icing is not nullified *merely because* the goalie goes to the bench, and only if the goalie makes no attempt to play the puck. It now reads "does not cancel an icing just because their goalie is heading to the bench".
  - **81.4:** "lets you change only for an injured player or a penalty" became a false closed list for the IIHF, which also excepts a broken skate (`iihf_rules_2026-27.txt:6786-6787`). It now reads "only to replace an injured player (or, under the IIHF, one with a broken skate) or for a penalty that changes the strength".
- **faceoff-dzone-alignment** (faceoffs.mjs, 7 hosts): 1,591 → about 1,345. Wording only; every limb kept.
  - The trim had softened USA Hockey's Casebook from "requires" to "wants". Both reviewers flagged it, and it is restored to "requires" (Casebook 613(b) Situation 8: "must be completely behind").
  - A comma after "CARHA Rule 57(a)" now stops "clause a a" running together when read aloud.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Rules (C4) | rules-verifier | Every limb checked against NHL, IIHF v1.1 and 2026/27, PWHL, USAH rules and Casebook, HC 2026-28, CARHA 2026, the EIHL Casebook and In-House. Three findings came from the rewording (the 81.3 condition dropped, the 81.4 list falsely closed, "wants"); all three are fixed as worded above. Two problems that predate this round ("your centre pays" is unconditional; contact with the opponent's stick is not mentioned) are now plan rows. |
| Safety (C6) | safety-reviewer, rendered (practice, game_management, faceoffs, defender, center, winger) | CLEAR. Each caption keeps one ⚠ that opens its safety clause, and every host voices it with "Important.". The cut limbs are confirmed in the adjacent chunk. Minor: "wants"; now fixed. Not rendered: rink_map and how_to_watch_hockey (same caption text). |
| Mechanical | coordinator | build-diagrams exit 0 after the fixes; the new strings are in diagrams.json. Full npm build exit 0. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. |

## Dimensions

- D1–D3: rules-verifier.
- D4–D8 and D13: out of scope.
- D9: caption-to-host adjacency, checked by render.
- D10: no facts change.
- D11: safety-reviewer.
- D12: rendered.
- D14–D15: check_links and the build.

## What this method could not have found

- Whether the hosts relied on the dropped phrase "whichever one your game is played under".
- Other corpus sites listing the 81.4 exceptions without the broken skate (plan row).
- The four post-review fixes are the coordinator's, applied with the reviewers' own sketches. The commit gate then checked 81.3, 81.4 and the Casebook against the primary text.
