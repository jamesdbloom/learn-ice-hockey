# SG62: three long captions trimmed, and the caption plan row re-measured (24 October 2026)

## What changed

Owner rulings: readable beats defendable, and shorter is better. Captions are voiced into every host.
- **forecheck-2-3-lock (forechecking_systems.mjs): 1,218 → 844.**
  - **Cut:** the onus limb ("take the puck, take the ice, or angle them off it, and never finish into their back"). The only host carries it twice, word for word, in the same spoken chunk just before the caption: the facts `Never:` line and the ⚠️ paragraph at :503.
  - **Also cut:** narrative restatement.
  - **Kept:** the full USA Hockey 604 / Hockey Canada 7.3 checking scope, the 2-1-2 default-and-ask, the highest-winger alternative and the lane disclosure.
- **cross-ice-in-your-own-end (risk_management.mjs): 1,160 → 1,024.**
  - **Cut:** narrative only. The forecheck-slide point is voiced just before the caption.
  - **Kept:** the ⚠️ no-contact limb, never turn your back and never duck, WALL_POSTURE_SHORT (unchanged constant), and every picture disclosure.
- **the-puck-decides-not-you (puck_handling.mjs): 984 → 856.** Wording only. Every rule limb fails the adjacency test in one of its two hosts (puck_handling, center), so none was cut.
- **Plan row re-measured.** The row named captions "around 1,900" that earlier rounds had already cut. The real longest now run 1,536–1,749, and 85 of 204 are over 800.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, rendered (forechecking 85 chunks, risk_management 70, puck_handling 61, center 71) | CLEAR on all three. 2-3 lock: the cut onus limb is heard twice in the same chunk (032) as the caption, with nothing weakening it in between, and the caption no longer says "hard". Cross-ice: all kept limbs voiced in chunk 012. Puck-decides: intact in both hosts (puck_handling 020, center 044). The amber treatment comes from captionNodes (split at the first ⚠), and every ⚠ still opens its safety clause. |
| Rules (C4) | not dispatched | No rule claim added or changed; the kept clauses are byte-identical in substance. |
| Rendered (C10) | coordinator | After the reviewer noted a stale dist, a full npm build was run. The built forechecking page carries the new figcaption (844 chars in source; 854 once rendered, the extra being whitespace and entities) with warn-inline. |
| Mechanical | coordinator | build-diagrams exit 0 (author). npm build exit 0. check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. |

## Dimensions

D1–D8 and D13 out of scope (no claim changed); D9 caption-to-host layer test per host; D10 no facts change; D11 safety-reviewer; D12 rendered with chunk distance; D14–D15 check_links and build.

## What this method could not have found

- A reader opening the standalone 2-3 lock SVG without its host no longer gets the onus limb.
- The "In short" line "Two forwards forecheck hard" in the Essentials view sits without its onus, although Key focus carries it there. Pre-existing.
- Whether the drawn routes teach a dangerous arrival speed.
