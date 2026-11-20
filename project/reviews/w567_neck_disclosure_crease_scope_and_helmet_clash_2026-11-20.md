# W566–W567: the Hockey Canada neck reading disclosed, charging's ejection no longer crease-scoped for the IIHF and USA Hockey, and a helmet clash priced in every book where a page gave only the IIHF's price (20 November 2026)

## W566 (read-only safety-reviewer): no defect

- **Diagram captions:** none states a boards or defenceless match with only Hockey Canada and CARHA.
  - The three hit-from-behind captions (dz-collapse-corner, forecheck-122, forecheck-131) carry USA Hockey's Casebook 608 Situation 1 limb.
  - The 7.5(c) and 53(b) text exists only in source comments.
- **ozp :1259:** its head and continuation are voiced in one chunk (089), adjacent with no break.

## W567 edits

**body_contact_and_battles (W542(3), W537(3))**
- **:813, one plain disclosure sentence:** "Both rules ban contact to the neck too, but both supersession clauses name only the head, so a hit from behind on the neck is read here as checking from behind, with its game misconduct; a referee may call it head contact instead."
  - Source: hc.txt, the Section 7 preamble ("head, face, or neck"); 7.6 and 7.7 supersession ("contact to the head").
- **Table cell :1751:** "Arm block: all but USA Hockey and CARHA; where Hockey Canada 7.3 bars checking…"
  - It now names the books that bar it, and "7.3" names its book.
  - The rule numbers were dropped for the 200 cap; the body carries them at :1265 and :1782.

**shooting :507 (W533(4))**
- Was "can eject in the crease (NHL, PWHL 42.1, IIHF 42.4, USA Hockey 607(c))". That was wrong for:
  - **IIHF 42.4:** reckless charging, no crease condition.
  - **USA Hockey:** 607(a) applies anywhere, and 607(c) is the crease *or privileged area*.
- **Now:** "can eject anywhere (IIHF 42.4, USA Hockey 607(a)) or in crease (NHL, PWHL 42.1)". NHL and PWHL 42.1's major and game misconduct option really is crease-scoped.
- The "must" half was then re-ordered after the safety-reviewer finding: "USA Hockey if reckless (607(b)) or careless to the head (620(b))". 607(b) has no head condition. The line is at 300/300.
- The body at :924 already carried the correct scope.

**W538(2) helmet-clash census (read-only safety-reviewer)**
- faceoffs, center, winger and body_contact price helmet contact correctly in every layer.
- The other wordings ("butt heads", "bump helmets", "head-to-head", "heads together") appear nowhere.
- It found three defects, all now repaired:
  - **switching_positions (Major, permissive).** Every layer priced a pre-drop helmet clash only in IIHF terms ("a minor the referee can give"), and the file never mentioned USA Hockey 620, Hockey Canada, CARHA or head-butting. Six sites are fixed:
    - facts :137 Never;
    - a new Never line on head-butting ("ends your game in most books", per faceoffs :1147–1149);
    - a new Rule line: pre-drop contact is a mandatory minor under USA Hockey 613(e), Hockey Canada 6.2(c) and CARHA 57(b); a helmet clash can be called head contact; under USA Hockey, at least a minor plus a misconduct, and a major and game misconduct if careless (620);
    - "In short" :149;
    - body :550, with inline amber;
    - Common Mistakes :607 and KT5 :677. KT5 stays a kernel and leads with the instruction.
  - **special_teams :1023 (Minor).**
    - "Plan on … an automatic minor" understated USA Hockey 620. It now adds USA Hockey's price, with a pointer to Faceoffs for the other books. The reviewer accepted the pointer, because the unit already carries the mandatory minor and the dearest price.
    - "Since 2026/27" was wrong, because the IIHF 2025/26 book already listed helmet contact with a first warning. It is corrected to "the 2025/26 book gave a first warning for it, the 2026/27 book does not".
  - **center facts :517 (Minor):** adds CARHA (50) to "can be Head Contact" (199/200).

## Review

| Reviewer | Findings | Result |
|---|---|---|
| safety-reviewer (W566) | None | Rows closed |
| safety-reviewer (W538(2) census) | One major, two minor | All repaired |
| safety-reviewer (W567 edits) | One minor permissive: the shooting :507 607(b)/620(b) parse. All other items OK; the special_teams pointer is acceptable | Repaired to the sketch |

## Rows

**Closed:** W533(4), W542(3), W537(3), W538(2), W565(2) captions, W565(3).

**Still open:** W533(3), W542(4), W565(1)/(2) remainder, W553(4)/(5), W539/W560 remainders, W535(1), W529 and earlier rows.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w567.log`).
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 5 files, 0 lost.

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: Hockey Canada 6.2(c), 7.1, 7.6/7.7; USA Hockey 607, 613(e), 619, 620; CARHA 50, 52, 57(b); NHL/PWHL 42, 47, 76.7; IIHF 42.4 and 76.7(III) in both editions; EIHL 42 |
| D4 | Covered: the neck-reading disclosure |
| D9 | Covered: switching_positions changed in six layers together |
| D11 | Covered by the safety-reviewer |
| D13 | Covered: captions checked (W566) |
| Others | Not engaged |

## What this method could not have found

- **PWHL 78.7's replacement clause.** Not read.
- **Audio for the new lines.** Not rendered.
- **Helmet-contact wordings outside the census vocabulary.**
