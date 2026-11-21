# W600: CARHA's slide relief excuses the trip only, at three more sites (21 November 2026)

## Edits (one agent)

W599(1) found three sites that stated CARHA's slide relief correctly but were silent that contact afterwards is still priced.
- **The rule:** the Note under 86(b) ignores only "the tripping" where the puck is knocked off the opponent's stick "prior to making actual body contact" (`carha_2026.txt:3640-3642`). 49(a) still reaches a player who "does not avert body contact" (`:2496-2501`).

**Sites changed:**
- **defending_the_rush :544** (Rule facts): now 281/300 after rewording. It reads "…its one excuse, for the trip only, is knocking the puck off their stick before any body contact (Note under 86(b)) — contact after can still be 49(a); no shot-block exception".
- **defending_the_rush :555** (body): "…excuses only the trip … contact after that can still be a body-contact penalty under 49(a)."
- **switching_positions :301:** "…and in CARHA contact after that can still be a 49(a) penalty."

No ⚠️ changes.

## Review

**safety-reviewer: OK.** All three are correct and nothing was lost. switching_positions' Hockey Canada wording ("knocks the puck off") is stricter than Hockey Canada's own "contacts the puck", which is on the safe side and can stand.

## Rows

**Closed:** W599(1).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after the edit (`scratchpad/build_w600.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost.
- `check_readability`: 0 long paragraphs.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Audio.** Not rendered.
