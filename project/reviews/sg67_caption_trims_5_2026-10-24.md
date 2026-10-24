# SG67: shot-block, draw-location and high-pinch captions trimmed (24 October 2026)

## What changed

- **shot-block-get-close** (body_contact_and_battles.mjs; hosts: body_contact_and_battles, defender): 1,487 → 1,136.
  - **Cut:** picture notes, and the "safer is coaching craft" disclosure. The caption no longer claims "safer", and both hosts voice the disclosure next to the caption (bcb 134; defender 055/057).
  - **Kept word for word:** the ⚠️ technique sentence and posture list, the two-on-one, the screen case, and "commit fully… or get out of the lane… eyes closed".
  - **Coaching-choice line:** restored in short form after the author found the first cut shifted the host's chunking. Lesson: re-render after cutting, not only before.
- **faceoff-where-the-draw-goes** (faceoffs.mjs; hosts: faceoffs, rules_primer): 1,410 → 1,274. Picture notes and wording only. Every rule limb is kept, because rules_primer voices only part of the scope.
- **pinch-centre-high** (risk_management.mjs; four hosts): 1,401 → 1,121.
  - **Cut:** the pinch gloss. Every host defines "pinch" in the same or the preceding chunk (game_management 016, risk_management 036, defender 038, offensive_zone_play 061).
  - **PINCH_CAVEATS constant:** loses PINCH_COUNT and a header. It now equals the old PINCH_CAVEATS_AFTER_HIGH.
  - **pinch-centre-below-the-goal-line:** byte-identical to HEAD.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, seven hosts rendered after the edit | CLEAR on all three. Every safety limb is kept word for word, and cut limbs are voiced in adjacent chunks per host. The ⚠️ opens its clause in shot-block and pinch; the draw caption has no ⚠️ and never had one. Body-position advice is complete; the never-list and the equipment line sit in the host chunks, as before this edit. |
| Rules (C4) | not dispatched | No rule sentence changed in meaning; draw-location rule limbs are all kept. |
| Mechanical | coordinator | build-diagrams exit 0 (author); full npm build exit 0. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. |

## Dimensions

D1–D3: no rule change. D4–D8 and D13: out of scope. D9: per-host adjacency checked after the edit. D10: no facts change. D11: safety-reviewer. D12: rendered. D14–D15: check_links and build.

## What this method could not have found

- On the site, the restated host text may sit a scroll away from the figure.
- Stale source comments remain in body_contact_and_battles.mjs (~:1395–1416, "qualifies 'far safer'") and risk_management.mjs (23 Oct block, "carries all four"). They reach no reader.
- rules_primer chunk 098's unscoped dot-choice prose predates this change and is now a plan row.
