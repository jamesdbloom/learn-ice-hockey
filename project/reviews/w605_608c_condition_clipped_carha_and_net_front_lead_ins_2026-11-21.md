# W605: USA Hockey 608(c)'s condition, a clipped CARHA line, and two net-front lead-ins (21 November 2026)

## Edits (one agent: goaltender, on_ice_communication, defender)

**W576(2): 608(c)'s condition.** Outside DZC, five sites priced the USA Hockey match as "a match if reckless with excessive force (608)" without the rule's condition. They now read "…on a vulnerable or defenceless player (608)":
- goaltender :1310 and :1662
- on_ice :621
- defender :945 and Common Mistakes :1027

The source is `usah.txt:3727-3730`: "in all instances when a player recklessly endangers an opponent from behind with excessive force while the opponent is in a vulnerable or defenseless position". A sweep of the four files found every other 608 match clause already carrying, or scoped by, the condition. The old wording erred harsh.

**W571(4): clipped CARHA line.** defender :828, a Rule facts line at 300/300, was restructured to end "…CARHA 53(a) may for any intentional hit from behind".
- **CARHA:** 53(a) reaches an intentional hit from behind, and "A Match penalty could also be assessed" (`carha_2026.txt:2605-2612`).
- **Hockey Canada:** the head limb now stands apart from the boards/net limb, under "if defenceless". It matches 7.6(c) and 7.7(c) in `hc.txt` (:6276, :6333); both require a player "unable to protect or defend themselves", or intent to injure.

switching_positions :246 could not be fixed under its cap without dropping a limb or making CARHA's discretionary match mandatory. It was left (filed), and it errs harsh.

**W595(2): net-front lead-ins.** A safety-reviewer ruled first. It rendered md_to_speech: the net-front-walk-out-direction caption is voiced in the same chunk, straight after each lead-in, opening "Important.", and it is amber on the page. The lead-ins carry no ⚠️, and both hosts keep "move nobody" in their own prose. The repeated goal-frame clause was trimmed at defender :268 and goaltender :1396.

**Condition, recorded in the plan:** these hosts now rely on that caption for the goal-frame limb.

## Review

**safety-reviewer: OK, with one Minor.**
- All five 608(c) sites match the rule.
- defender :828 keeps every limb and scopes each correctly against current hc.txt.
- Both trims lose nothing.
- **Minor, repaired:** "CARHA 53(a): any intentional hit from behind" read as mandatory after a run of mandatory matches. It now reads "may for any".

## Rows

**Closed:** W576(2) and W595(2).

**Partly closed:** W571(4). switching_positions :246 remains.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w605.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on all 3 files.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **A USA Hockey match clause written without "608" or "excessive".**
- **Audio.** "may for any" was not re-rendered to hear it alone.
