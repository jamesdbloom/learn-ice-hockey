# W459: Passing and Receiving states the wall warning itself, How to Watch Hockey stops putting the outlet winger below the hash marks, eight captions trimmed, and the screening caption gets 69.1's second limb (18 November 2026)

**Files changed**
- Content: technique/passing_and_receiving.md and off-the-ice/how_to_watch_hockey.md
- Diagrams: site/src/diagrams/body_contact_and_battles.mjs and playing_without_the_puck.mjs, plus site/src/data/diagrams.json (rebuilt)
- Also: project/plans/OPEN_ITEMS.md and this record

## Source
- **Plan rows:** From W458 items (4), (5) and (8).
- **Authors:** three agents.
  - A: passing_and_receiving
  - B: how_to_watch_hockey
  - C: diagrams, in two passes

## What changed

### passing_and_receiving :213, :215 (voiced, chunk 009)
- **:213 before:** "⚠️ **So does the wall-contact warning both captions carry**", a pointer to the captions.
- **:213 now:** "⚠️ **So does the wall warning: never turn your back to anyone coming at you, and never duck** — Body Contact and Battles owns it."
- **:215:** adds "Turning your back and ducking are two different injuries: a hit from behind you cannot brace for, and a chin tucked to your chest, which needs no speed."
- **Safety ruling:** this is now an adequate host carrier for dropping winger-dz-reverse's wall limb in *this* host only. winger.md needs its own layer test. A reader looking only at the diagram loses the limb either way; that is acceptable for the reverse and not for the rim.

### how_to_watch_hockey :230 (voiced)
- **Before:** "…between the hash marks and the goal line — *below* the hash marks, not level with them."
- **Now:** "…— at or just below the faceoff dot."
- **Why:** the owner, breakouts :64, defines the band as "at or just below the dot line". rink_map :268 says the hash marks are "roughly level with the dot". winger :31, :69 and :203, the caption and the picture (WALL_SWING) all agree.

### Captions
| id | words: HEAD → now | amber at 400 |
|---|---|---|
| corner-escape-routes | 181 → 130 | 16% |
| angle-into-the-corner | 190 → 189 | 17% |
| inside-lane-longer-route | 170 → 162 | 11% |
| shot-block-get-close | 163 → 159 | 37% |
| screen-the-goalie-sightline | 185 → 180 | 10% |
| drive-the-net-before | 178 → 140 | 26% |
| drive-the-net-after | 170 → 113 | 0 |
| legal-route-through-traffic | 159 → 153 | 19% |

**What was cut and what was kept**
- **Cut:** restatement and tactical asides the host carries beside the marker.
- **Kept:** every posture, onus, find-out, coaching-choice and provenance limb.
- **Amber:** in five captions the glyph moved onto the instruction.
- **Negation seams:** seven were closed with full stops.

**Review fixes**
- **screen-the-goalie-sightline (rules WRONG, permissive; pre-existing).** The caption had "a position that stops the goalie moving freely in their crease". It now adds "**or defending their goal**", per NHL 69.1 (nhl_rules.txt:7137-7139) and IIHF 2026/27 69.1(I).
- **shot-block-get-close (diagram, older Major).** "⚠️ From in front of your own goalie, do not block" became "⚠️ **Where you would be screening your own goalie**, do not block". The old line was broader than the owner (bcb :1623, :1651, :1659 and :1672 all say "screening") and contradicted defender :785.
- **angle-into-the-corner (diagram WORSE).** "Arriving on that angle" pointed at nothing, so Case 1 was never stated. It now reads "It arrives on an angle and finishes running along the boards, and that is the first and best of three cases".
- **inside-lane-longer-route.** Now reads "Hockey Canada and CARHA give you no right to lengthen their route. Impeding an opponent without the puck is interference there…". This is split from the reviewer's sketch to keep the negation from carrying on.
- **drive-the-net-after.** Now reads "Of the defence, only the pulled defender is drawn".

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | **HTW:** OK (breakouts :64; NHL 1.9). **P&R:** no rule claim, and it matches USA Hockey's IBC coaching material. **Captions:** inside-lane OK (USAH 625(a)(4); HC 8.3(i); CARHA 66(a)(1) and Note 1; omitting the dump-in limb makes it stricter). angle provenance OK (ibc.txt). screen WRONG (fixed). |
| safety-reviewer | **First read:** CLEAR. P&R carrier ruling as above. CARHA dump-in omission acceptable (never in HEAD; not the drawn case; host carries it in four layers, including KT12). **Confirmation of the five fixes:** CLEAR. The narrowed shot-block instruction matches the owner in all four layers. |
| diagram-reviewer | 5 BETTER, 2 NO WORSE, angle WORSE (fixed), plus an older shot-block Major (fixed). The author's chunk claims were checked and hold. |
| site-reviewer | Four pages at 400×812 DPR 2 light/dark and 1440 light, on the 14:28:26 build. The P&R :213 amber run forms. Nothing reaches 50% at 400. 0 bare, 0 untreated, 0 panels, 0 console errors. ⚠️ counts equal HEAD. pwtp's 1440 window rose from 58.5 (W454) to 75.0 in Drive the net; not inspected. |

### C11
The coordinator wrote no content or caption text. Where an author departed from a reviewer sketch, the departure was confirmed:
- inside-lane is split in two;
- angle Case 1 is checked against bcb :924.

## Checks after the last edit
- **Build:** `npm run build` (absolute binary) exited 0, ending with check-links passing. dist/index.html is 14:28:26; the newest source is pwtp.mjs at 14:27:08.
- **Gates:**
  - check_links --quiet, check_facts, check_absolutes, check_geometry, check_secrets: pass
  - check_counts: no change
  - check_caption_pairs: 0
  - check_label_paint --severe: 2
  - check_callout_flow --bare: 0
  - `--panels --file`: 0 on both content files
- **Marker pairs:** check_marker_pairs reports 0 LOST and 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | NHL 1.9, 69.1; IIHF 69.1(I); USAH 625(a)(4); HC 8.3(i); CARHA 66(a)(1) and Note 1; USA Hockey IBC (coaching material) |
| D2 Exceptions | CARHA last-touch possession note |
| D3 Cross-book divergence | interference scope across USAH, HC and CARHA |
| D4 Citation integrity | brief line numbers drifted; corrected by the author |
| D5 Provenance | angle-into-the-corner provenance disclosure kept |
| D6 Negative existence | not engaged |
| D7 Cardinal rule | the shot-block coaching choice; caption no longer contradicts defender |
| D8 Numeric ownership | hash-mark and dot geometry against owners |
| D9 Summary layer | caption vs host layer test, per chunk |
| D10 Key-facts | not engaged |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | seven negation seams closed |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links; P&R pointer removed |
| D15 Rendered site | site-reviewer |
| Diagrams | diagram-reviewer |

## Found, not fixed (plan row From W459)
1. **69.1 "or defend their goal" missing corpus-wide (permissive).** The coordinator found about 24 content sites in 14 documents with the narrowed form, "moving freely in their crease" alone: shooting, body_contact_and_battles, playing_without_the_puck, time_and_space, scanning_and_anticipation, center, winger, goaltender, offensive_zone_play, zone_entries, faceoffs, core_principles and others. This is wave W460: one agent per document, briefing the claim rather than the line.
2. **skating.md** should voice chip, rim or reverse decided before you arrive.
3. **corner-escape-routes** says "Your defenceman is standing in it", while the prose says "your body is where it would be".
4. **P&R "When to use it"** carries a third copy of the prohibition without amber.
5. **pwtp 1440 Drive the net** at 75.0, not inspected.

## What this method could not have found
- Whether the shorter captions teach faster.
- Real synthesised audio.
- The skating, defender and rules_primer hosts in a browser.
