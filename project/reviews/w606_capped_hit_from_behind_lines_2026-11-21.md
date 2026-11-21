# W606: two at-cap hit-from-behind facts lines made whole, and CARHA 53(a) "intentional" at seven sites (21 November 2026)

## Edits (one agent: defender, switching_positions)

**defender :828** (Rule facts, 300/300). The W605 gate warned that "Hockey Canada on the head" could merge with the "into net/boards" item before it. It now reads: "Slide from behind: a match if meant to injure (all but IIHF); if defenceless: Hockey Canada, CARHA into net/boards (7.5(c), 53(b)); Hockey Canada on the head, anywhere (7.6(c), 7.7(c)); USA Hockey anywhere if reckless with excessive force (608(c)); CARHA 53(a) may for any intentional hit from behind".

**switching_positions :246** (Rule facts, was 299/300) ended clipped: "CARHA may for any … USA Hockey if reckless, excessive". It became two complete Rule lines:
- **:246:** the ejection limb, the meant-to-injure match, and "CARHA 53(a) may give one for any intentional hit from behind".
- **:247:** the defenceless matches by book, each with its condition.

The block was at HARD_MAX 14, so a slot was freed by merging its Position and Risk lines into one Risk line. Both halves were kept.

**"for any hit from behind" → "for any intentional hit from behind"** for CARHA 53(a) at defender :300, :468, :845, :966, :1032 and switching :274, :614.

**Sources:**
- CARHA 53(a): "intentionally pushes, body checks, or hits an opposing player from behind, anywhere on the ice … A Match penalty could also be assessed" (`carha_2026.txt:2605-2612`).
- USA Hockey 608(c) (`usah.txt:3727-3730`).
- Hockey Canada 7.5(c), 7.6(c) and 7.7(c) (`hc.txt` :6177, :6276, :6333).

No ⚠️ changes.

## Review

**safety-reviewer: OK, nothing to fix.**
- defender :828 is clear voiced alone, and each match limb carries its own book and condition.
- The switching lines are each true alone. :247 is a closed list after a colon, so it does not read as universal.
- The merged Risk line loses nothing.
- "Intentional" is the book's scope, and every site keeps the discretionary may or can.

## Rows

**Closed:** W571(4).

**Still open, W571(2):** a coordinator sweep after this wave found 14 more CARHA "any hit from behind" sites without "intentional" in shooting, rules_primer, winger, game_management, center and special_teams. They err harsh. Next wave.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w606.log`).
- Exit 0, without pipes: `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 0 lost on both files.
- `check_links --quiet`: run after this record was written.

## What this method could not have found

- **Audio.** Not rendered.
- **CARHA 53(a) claims worded without "any hit from behind".**
