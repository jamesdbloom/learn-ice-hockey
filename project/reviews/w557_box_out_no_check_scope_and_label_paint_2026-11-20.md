# W556–W557: box-out, seal and hold grants get the no-check scope; one label moved; two label-checker blind spots closed (20 November 2026)

## W556

### Diagram: corner-escape-routes

The auto-placed "takes the middle away" label sat across the bottom arc of a faceoff circle. Adding `labelHint: [0, -17]` on D (body_contact_and_battles.mjs) moves it into the open slot band at (61, 1), the middle the label names.

The "two ways out" label (A1's) sits on the faceoff dot and runs 0.92 ft past the arc. It could not be fixed with a hint: the agent tried 736 hint positions through the real placer, and its ownership rule rejects every slot that clears both. It is filed with three options.

### Tool: scripts/check_label_paint.py (coordinator)

The agent found two blind spots. The coordinator closed both:
- `INSET` (8% of the width) trimmed 1.5 ft off each end of a 12-character label, which hid "two ways out". It is now capped at half a character per end (`INSET_MAX_CHARS`).
- Filled painted circles of radius ≤ 4 ft (faceoff spots and the centre dot) were never tested. They now report as "dot".

The result went from 446 to 467 hits, 12 of them dots. "two ways out" now reports as "circle and dot". The white halo is still not counted. The tool is a worklist and has no strict mode.

### Census (read-only rules-verifier, W553(3))

It swept about 40 contact-act wordings across all 39 files: hold or stand ground, box out, seal, lean, pin, bump, push, take the contact, work from the side, and others. It found 4 defects and 2 optional sites.

The key source is Hockey Canada 7.3 **Interpretation 1** (hc.txt :6018–6054). A player may close off the boards or ice "without actually touching or body-checking them… as long as either player does not use their body to intentionally body-check, bump, push, or shove." So a held position without contact is legal under 7.3, and the defect is a hold with no "no lean, no push".

CARHA rules used:
- **49(a)** (carha_2026.txt :2496–2501): the duty to "avert body contact".
- **49(c):** accidental contact is no penalty.
- **66(a) Note 2:** a defender may "stand their ground".

## W557 edits (four agents, disjoint files)

**defensive_zone_coverage:**
- Facts :104 now reads "Box out … inside shoulder ahead, no lean or push" (200/200).
- New Rule line :105 (282/300): "A box-out is a held spot, never a push — Hockey Canada 7.3(a) gives a minor for a bump, shove or push where checking is barred (Interpretation 1 allows closing off ice without contact); CARHA 49(a) penalises not averting body contact, though accidental contact is no penalty (49(c))".
- Item 6 :136: "hold it, no lean and no push; under CARHA, avert contact rather than take it".
- Convention :159 and table cell :173: "no lean, no push".

**defending_the_rush:** facts :732 now reads "challenge the carrier with your stick and position".

**goaltender:** facts :1373 now reads "…held, no lean, never used to hit them; under CARHA, no body contact. Never walk them off their spot: that can be interference anywhere" (199/200).

**winger:**
- :869 now reads "…work them from the side where your league allows contact — where it does not, hold your spot and lean on nobody".
- :104 (Rule) and :124 now read "never lean or drive your hip in". This closes W553(2).

**body_contact_and_battles:** facts ~:1239 now reads "…pin the puck, not the player; where checking is barred, no lean or push, and under CARHA avert contact. Go for the puck" (185/200).

## Review

**safety-reviewer, with rules check: OK, nothing newly permissive.** It checked each site:
- **dzc Rule line:** accurate.
- **"No lean or push":** errs harsh in the safe direction; it does not overstate Hockey Canada.
- **dzc :104:** needs no CARHA limb of its own, because the next facts line carries it.
- **goaltender "no body contact":** stricter than 49(c) and 66(a) Note 2, but in the safe direction, so acceptable.
- **goaltender :1388's no-check price:** need not reach the facts layer, because the facts line already says "never".
- **winger :869:** OK without a named CARHA duty. An optional sketch is filed.

## Rows

**Closed:**
- W553(2) and W553(3).
- The corner-escape "takes the middle away" label.
- The check_label_paint inset and dot blind spots.

**New:**
- W553(4): grants with no contact verb, and diagram captions.
- W553(5): optional winger and goaltender limbs.
- The "two ways out" label.

**Owner decision pending:** W521(2).

## Gates on the final tree

- `check_counts --update`: exit 0.
- Exit 0: `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets`, `check_caption_pairs`, `check_tables`, `check_zones`, `check_caption_negations`.
- Full `npm run build` with the v22.23.4 binary: exit 0, after every edit (`scratchpad/build_w557.log`).
- check-arrivals: 0 hard.
- `check_callout_flow --bare`: 0.
- `check_marker_pairs`: 5 files, 0 lost.
- `check_label_paint`: 467 (a worklist).

## Dimension coverage

| Dimension | Status |
|---|---|
| D1–D3 | Covered: Hockey Canada 7.3 and Interpretation 1; CARHA 49 and 66(a) Note 2 |
| D9 | Covered: facts, body, convention and table changed together in dzc |
| D11 | Covered by the safety-reviewer |
| D13 | Covered: the label move was checked in the PNG |
| Others | Not engaged |

## What this method could not have found

- **How referees treat a held box-out that an attacker drives into.** Neither book addresses it.
- **Grants worded without a contact verb, and diagram captions.** Filed as W553(4).
- **The dzc :104/:105 adjacency in the audio.** It was read from block order, not rendered.
