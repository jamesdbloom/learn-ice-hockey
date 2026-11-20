# W570–W571: CARHA 53(a)'s discretionary match for any hit from behind, and zone_entries' USA Hockey head-contact and charging tiers (20 November 2026)

## W570 censuses (read-only)

**zone_entries (safety-reviewer; the gap left by W569).**
- **One major.** KT10 :1272 named Hockey Canada as the only book where charging a goalie who has come out ejects automatically. It left out USA Hockey 607(b) (reckless) and 620(b) (careless head contact).
- **Two minor.**
  - CM :1203 gave the stride threshold only for Hockey Canada and CARHA. USA Hockey 607's Note reads "more than two strides or travels an excessive distance".
  - CM :1203 and :1211 omitted Casebook 620 Situation 4's match.

**CARHA 53(a) (rules-verifier; plan row W513(1)).**
- **The rule** (carha_2026.txt :2604–2624). 53(a) prices an intentional hit from behind "anywhere on the ice" at a minor or a major, each with a game misconduct; the major is mandatory on injury. It adds: "A Match penalty could also be assessed under this rule." This discretionary match has no location condition. 53(b) is the mandatory match into the boards or net on a defenceless player.
- **The premise "no site says so" was wrong.** Seven units and four Sources trailers already carried the discretionary match.
- **The defects:** 6 facts units, 1 Common Mistakes unit and 5 body units priced an intentional CARHA hit from behind below a match. Each gave the floor as the price, or offered the match only into the boards or net.

## W571 edits (eight agents, one per file; brief `scratchpad/w571_common.md`)

**zone_entries**
- **KT10:** "…automatically under Hockey Canada, under CARHA in the crease or if it injures them, and under USA Hockey if it is reckless or reaches the head, face or neck." CARHA 52(b) was re-read for the crease and injury limbs.
- **CM :1203:** adds the Situation 4 match ("with excessive force to intimidate or punish") and "past two under CARHA and USA Hockey — or over an excessive distance under USA Hockey".
- **CM :1211:** adds the Situation 4 match.
- **Body :1184:** gains the Situation 4 match, so the Common Mistakes layer has a body behind it.

**CARHA 53(a)'s discretionary match** was added where CARHA's match was offered only into the boards or net. Floors were turned into "at least". 53(b) is kept mandatory.

| File | Sites |
|---|---|
| game_management | facts :1196 ("from behind anywhere, a game misconduct or a match (53(a)), always a match into boards or net if defenceless (53(b))"); body :1221 ("chooses only the tier" was false, and is corrected to quote the match sentence); body :1182; CM :1294 and :187 |
| body_contact_and_battles | facts :788 (300/300); body :518 (quotes 53(a)); CM :2094 |
| defender | facts :289, :441, :825 ("at least a game misconduct"), :826; body :300, :466, :845, :963; CM :1029 |
| rules_primer | the body ladder :496; table :1125 (site-only); CM :1197 |
| center | facts :691 and :894 (:891 is full; its "never just two minutes" already reads as a floor); body :709, :792, :899; CM :918 and :929 |
| winger | CM :917 and :923; body :869; facts :512 and :708 |
| shooting | body :537 and :539; CM :955 |
| switching_positions | facts :246 ("CARHA may for any", 299/300); body :274; CM :612 |

**Left on purpose.** Short kernels and mandatory-match lists that state no CARHA ceiling were left as they are: winger's W563 kernels, and shooting :289, :307, :509, :920 and :956.

## Review

**safety-reviewer, with rules check.** It read CARHA 52 and 53, the USA Hockey 607 Note, and Casebook 620 Situation 4.

**One minor permissive finding.** defender facts :826 had lost "anywhere" from the Hockey Canada head-match limb. That limb sat right after "into net/boards", so it could be heard as needing the boards. 7.6(c) has no boards condition. It now reads "Hockey Canada, head hits too, boards or not" (300/300).

**Confirmed:**
- KT10 is still a kernel.
- Situation 4 keeps all three conditions.
- The stride limb is accurate.
- 53(b) is mandatory at every site.
- game_management's "a game misconduct or a match" is the true outcome set, since both end the game.
- "CARHA may for any" is clear in context.

**Notes (filed as W571(1)–(3)):**
- center now carries the clause in seven units: add no eighth.
- "Any hit from behind" is slightly broader than 53(a)'s intentional act; this errs harsh.

## Rows

**Closed:** W513(1), and the zone_entries gap in W569.

**New:** W571(1)–(3).

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w571.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 9 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: CARHA 52 and 53; USA Hockey 607, 620 and Casebook 620 Situation 4; Hockey Canada 7.6(c) and 8.5 |
| D8 | Noted: center's restatement density |
| D9 | Covered: each file's claim was swept in every layer |
| D11 | Covered by the safety-reviewer |
| Others | Not engaged |

## What this method could not have found

- **Units pricing CARHA without naming it.**
- **Other CARHA rules** that may carry their own discretionary match (48, 49, 52).
- **Audio** for the compressed facts lines.
