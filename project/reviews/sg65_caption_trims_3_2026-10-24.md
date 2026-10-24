# SG65: forecheck-212 and angle-into-the-corner captions trimmed (24 October 2026)

## What changed

- **forecheck-212** (forechecking_systems.mjs; five hosts: forechecking_systems, how_to_watch_hockey, winger, center, game_management): 1,574 → 1,400. Wording only. Three hosts (center, game_management, how_to_watch_hockey) do not voice the USAH 604(a)/(b) and HC 7.3 scope next to the caption, so the rule sentence, the ⚠️ "going hard… does not mean going through them", "never finish into their back" and "per fixture" are kept character-identical.
- **angle-into-the-corner** (body_contact_and_battles.mjs; hosts: skating, body_contact_and_battles): 1,536 → 1,286.
  - **"decided several strides out":** cut, because both hosts voice it in the adjacent chunk (skating 005, bcb 081).
  - **"How you meet the wall… is not optional":** cut. Both hosts cover it in the same chunk (skating 006, bcb 082).
  - **Two angle measurements:** cut, as picture narrative that no host voices.
  - **USA Hockey angling-in claim:** reworded, and still matches `ibc.txt:1442-1444` ("greatly reduced… most of the impact").
  - **⚠️:** now opens "Never turn your back to anyone coming at you, and never duck…". The built skating page confirms the warn-inline span starts there. Cases 2 and 3 are kept.

## Reviews

| Dimension | Agent | Result |
|---|---|---|
| Safety (C6) | safety-reviewer, all seven hosts rendered | CLEAR. Safety blocks are character-identical or kept; cut limbs are voiced adjacent in both angle hosts; the USAH claim matches ibc.txt; the 604(a)/(b) and HC 7.3 wording was checked against the books; "Important." still opens every caption unit. Nit: "because" joins two source sentences, but the meaning is unchanged. |
| Rules (C4) | safety-reviewer quoted usah 604(a)/(b) and hc 7.3; no separate verifier | No rule sentence changed; the 604/7.3 sentence is byte-identical. |
| Rendered (C10) | coordinator | Full npm build exit 0; the skating page's warn-inline starts at "⚠️ Never turn your back". |
| Mechanical | coordinator | build-diagrams exit 0 (author). check_facts, check_absolutes, check_geometry, check_secrets, check_counts and check_links all exit 0. |

## Dimensions

- D1–D3: no rule claim changed.
- D4–D5: ibc.txt paraphrase checked.
- D6–D8, D13: out of scope.
- D9: adjacency checked per host.
- D10: no facts change.
- D11: safety-reviewer.
- D12: rendered.
- D14–D15: check_links and build.

## What this method could not have found

- A host relying on a removed phrase further than one chunk away.
- Whether "spread shape rather than the stacked variant" means anything to a listener in hosts without the stacked diagram.
- Whether the drawn route still matches the shorter caption (diagram-reviewer).
