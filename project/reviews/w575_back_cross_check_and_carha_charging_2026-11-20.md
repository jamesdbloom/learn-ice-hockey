# W574–W575: a cross-check into the back can be checking from behind, and CARHA's charging injury limb (20 November 2026)

## W574 (rules-verifier, read-only)

**(1) DZC :783 "The cross-check in the back."** The unit priced the act only as cross-checking: "No book here caps it at two minutes". Read aloud, that implies a minor is possible. In fact the act can be checking from behind in every book:

| Book | Rule | What it means here |
|---|---|---|
| NHL and PWHL | 43.3: "cross-checks, pushes or charges an opponent from behind who is unable to protect or defend himself" | Major; 43.2 has no minor; 43.5 game misconduct mandatory |
| IIHF | 43.1–43.3 | No minor |
| USA Hockey | A forceful one is 608 (Casebook 609 Situation 2) | 608(c): match |
| Hockey Canada | 7.5 Interpretation 1: stationary → 9.2; moving, or into the boards or goal → checking from behind | 7.5(a): a game misconduct at the floor; 7.5(c): match into the frame if defenceless |
| CARHA | 53(b) names "cross-checked"; the 53 Note bars substituting another penalty | 53 governs it |

**(2) The CARHA charging subset.**
- No unit states a CARHA ceiling below 52(b) or 48(a).
- Every stride threshold is correct ("more than two").
- Two units dropped 52(b)'s injury limb: center KT9 :999 and game_management :350.

## W575 edits

**defensive_zone_coverage** (one agent; the sources read by the editor):
- **Body :783.** It now adds: "⚠️ **Into the back it can be called checking from behind instead** — under USA Hockey once it is forceful (608): no minor under the NHL, PWHL and IIHF, a game misconduct even at the lowest rung under CARHA, which bars calling it anything else (53, Note), and for a moving Hockey Canada defender, and a mandatory match under Hockey Canada and CARHA if it drives a player who cannot protect themselves into the net — and under USA Hockey, net or not, if it is reckless with excessive force on a vulnerable or defenceless player (608(c)). [A hit from behind](../../content/systems/defensive_zone_coverage.md#a-hit-from-behind) has the rest."
  - The injury citation became "(9.2(b) or 7.5(b); 53(a))".
- **Common Mistakes :871:** the same clause.
- **KT5 :933:** "…and into their back it can be called checking from behind, which ends your game in most books."
- **Layer test.** The facts lines at :104 and :542 do not price a back cross-check, so no facts edit was needed.

**center KT9 :999:** "…and under CARHA in the crease or if it injures."

**game_management :350:** "charging a goalie in their crease, or any charge that injures, is a mandatory major and game misconduct (52(b))."

## Review

**safety-reviewer, with rules check.**
- **Confirmed:**
  - "Can be called" fits NHL, PWHL and IIHF 43, which carry an awareness condition.
  - "Once it is forceful" fits USA Hockey Casebook 609 Situation 2.
  - "Moving Hockey Canada defender" fits Interpretation 1.
  - "Most books" is five of six.
  - KT5 is still a kernel.
  - The center and game_management edits match 52(b).
- **Finding A (minor, permissive).** For CARHA, "can be called" understated the book, because the 53 Note bars any other call. Repaired: "which bars calling it anything else (53, Note)". This is the Note's own instruction.
- **Finding B (minor, permissive; the W563 shape).** The net-match list omitted USA Hockey 608(c). Repaired with "net or not", because 608(c) is not net-bound.
- **Citation suggestion C ("54(c) or 53(a)") was not applied.** The editor reasoned that once the bullet says CARHA bars any other call, citing the cross-checking injury rule beside it would contradict the sentence. Both rules mandate the major and game misconduct on injury, so no price is lost. 54(c) remains at CM :871, which covers cross-checks generally. The coordinator accepted this reasoning.

## Rows

**Closed:** W572(1) and W572(3).

**New:** W572(4) borderline goaltender :1713 and pwtp :720; W572(5) the net-front cross-check in other documents.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0, without pipes: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w575.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 3 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: NHL, PWHL and IIHF 43; USA Hockey 608, 609 and Casebook 609 Situation 2; Hockey Canada 7.5 Interpretation 1 and 9.2; CARHA 52, 53 with its Note, and 54 |
| D9 | Covered: DZC body, Common Mistakes and KT changed together; layer test done |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **Whether a CARHA casebook narrows the 53 Note.**
- **Audio.** The two long DZC units were not rendered.
- **Other documents' net-front cross-check pricing.** Filed as W572(5).
