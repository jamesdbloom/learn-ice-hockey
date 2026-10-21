# SG7 last bits: On-Ice Communication boards line; remaining "-man" coinages (21 October 2026)

**Origin.** sg7rS left three rows open after ac39f6d:
- `on_ice_communication :108` still said "Never turn your back to the checker". It was the last boards line in `content/` that the owner's 21 Oct ruling had not reached.
- `neutral_zone_systems`, `forechecking_systems` and `on_ice_communication :229` still had "-man" coinages: three-man line or wall, four-man wall, two-man pressure, rush or attack, and one-man.

One agent, sg7z, owned all three files.

## Changes

| File | Change |
|---|---|
| on_ice_communication.md | **:108** now reads "⚠️ **Never turn your back to anyone coming at you, whether they are after the puck or after you, and never duck.**" The glyph still leads the bold run. The other layers already used this wording (facts :91 and :141, body :154, KT2). **:229** now reads "two-player attack, not a one-player one". |
| neutral_zone_systems.md | Seven coinage swaps. **:192** was reworded to "The trap's four-player wall held in practice as well as on the whiteboard." |
| forechecking_systems.md | Eight coinage swaps: "three-player wall" and "two-player pressure". |

The agent left established terms alone under the owner's terms ruling: late man, last man, third man back, second man in, stretch man, and "Odd man". "Late man" is a shared glossary term and an anchor in other documents.

## Reviews

- **sg7zS (safety-reviewer, fresh): CLEAR.**
  - It compared every changed line against HEAD and found no limb lost. The new :108 wording covers at least as much as the old.
  - Every ⚠️ still leads its strong run.
  - :192 keeps its meaning.
  - No quotation was changed.

## Gates (after the final content edit, no pipe)

- `check_facts`, `check_links`, `check_absolutes` all pass.
- `check_marker_pairs`: 3 files, 0 LOST, 0 SPLIT.
- `check_counts --update`: no change.
- `npm run build` exited 0, after the last edit.

## Dimensions

| Dim | Status |
|---|---|
| D1–D6, D8, D13 | Out of scope: no rule, citation, number or existence claim changed. |
| D7 | ✓ This is a wording change only. |
| D9 / D10 | ✓ The boards line now matches in every OIC layer. No facts line was near its cap. |
| D11 | ✓ sg7zS: CLEAR. |
| D12 | ✓ The ⚠️ lead and the spoken "Important." are unchanged (marker counts match HEAD). |
| D14 | ✓ The terms ruling is applied, and the kept terms are untouched. |
| D15 | The build passed. The change is prose only and adds no new layout or callout. A browser pass is not needed beyond the passing build. |

## What this method could not have found

- A boards-line wording that uses none of the searched words.
- How the page sounds when listened to. No audio was rendered.
