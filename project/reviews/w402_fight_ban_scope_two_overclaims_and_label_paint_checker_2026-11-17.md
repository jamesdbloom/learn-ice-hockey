# W402: British fight bans no longer promise a mandatory game for an ordinary fight, two overclaims removed, and a new worklist finds diagram labels drawn over rink paint (17 November 2026)

**Files:**
- content/off-the-ice/team_play_and_culture.md
- content/systems/special_teams.md
- content/technique/passing_and_receiving.md
- scripts/check_label_paint.py (new)
- CLAUDE.md (tool list)
- project/plans/OPEN_ITEMS.md
- this record

No diagram changed.

## Source
- From W401 (2)–(5).
- From W395 (6): team_play :285 claims an any-fight one-game ban.
- From W398 (2): no tool tests label text against paint.

Each was briefed as a hypothesis.

## Content

### team_play_and_culture :285: the fight ban, scoped to the source (penalty claim)
**Before:** "At a club in England or Wales, plan on at least a one-game ban on top; in the Elite League, Scotland or Northern Ireland, plan on the same."

**After:** "At a club in England or Wales, a fight at the end of the game, in the last five minutes or in overtime brings at least a one-game ban, and any other fight can bring one, longer if your opponent was down; any ban also costs you a game in every other league or age group you are registered in. In the Elite League, Scotland or Northern Ireland, plan on that late-fight ban too."

**Sources**, all from sources/eih_dops_2026-27_layout.txt unless noted:
- **Tariffs are not floors.** C.1 :408 says they are "a starting maximum for first-time offences".
- **Mandatory bans.** C.1 :411 lists "Mandatory IIHF one-game bans (… fighting in last 5 min)". C.2 "Fighting – Expanded" (:462-469) has one mandatory row: "Last 5 minutes, OT & or End of game — Mandatory 1 game plus any other penalties".
- **Ordinary fights.** In the same table, "Willing combatant(s) Up to 1" and "Downed opponent Up to 3".
- **Cross-league.** C.1 :414 and §11 :176-177 tie the extra game to a suspension.
- **How an ordinary fight reaches DOPS.** A mid-game NIHL/SNL/BUIHA fight is "a 5-minute Major Penalty" (eiha_inhouse_2026-27.txt :383-389). It reaches the tariff only if it is triggered or flagged (App G :639-640; App H :734).
- **Elite League** (eihl_casebook Fines and Suspensions (1)(a)). The late-fight ban there applies to the instigator or aggressor and is reviewable. "Plan on that late-fight ban" is the owner's cautious default (uk_rules :300).

**Rounds.** Each draft was replaced by a reviewer's text, plus the author's "longer if your opponent was down" check.
1. **Author.** Scoped the floor to the late fight.
2. **Safety Minor 1.** The ban was unsized, but a downed opponent starts at "Up to 3". **Safety Minor 2.** The cross-league clause was missing, as at its siblings :362, special_teams :437, goaltender :1180 and bcb :1930.
3. **Rules-verifier: WRONG twice.**
   - "Plan on a ban … for any fight" overstates. "Up to 1" can be zero, and a mid-game NIHL fight is a major only.
   - "Either way" applied the cross-league game to every fight.
4. **Safety final read: CLEAR.** One Minor on the audio. "And a fight at the end of the game" was heard as a third item under "can bring", so the mandatory floor was moved to the front. No claim changed.

**CM :656 left as it is** (both reviewers). It covers the handshake line, which is an end-of-game fight, so the mandatory game applies.

### special_teams :582
"it protects the dangerous ice in front of the net absolutely" became "it keeps three players on the dangerous ice in front of the net". No shape protects ice "absolutely". The section (:561, :578) supports a three-player triangle.

### passing_and_receiving :717
"…is a turnover in the most dangerous place to have one at the other end" became "…hands them the puck in the middle, ready to go the other way".
- It is an offensive-zone turnover, so it ranks no rink_map region.
- "Most dangerous … at the other end" was confusing aloud. The new text names the cost.

### Left as they are (hypotheses refuted)
- **game_management :85**, "a screen makes even a point shot hard to stop". Plain coaching craft with no figure, so it reads as craft (CLAUDE.md: a tactic needs no citation).
- **faceoffs :91**, "often through a screen". It is about the opponent's set play, and no alternative alignment the page names makes it false. "Often" already hedges it.

## scripts/check_label_paint.py (new worklist; coordinator)
**What it does.** It reads the built SVGs. For each haloed label `<text paint-order="stroke">`, it tests the estimated text box against:
- red or blue `fill=none` circles with r > 4;
- red or blue lines longer than 3 ft (hash marks excluded);
- red or blue paths (crease and trapezoid; the crease arc is taken as its chord).

It reports counts or hits, with `--id`, `--summary` and `--severe`.

**Validated by the diagram-reviewer, not the coordinator:**
- **Geometry.** Correct.
- **Paint census.** All 204 SVGs carry explicit strokes. Line lengths are exactly 2 ft or 85 ft, so the 3 ft cutoff separates them cleanly.
- **Calibration.** `--id breakout-up` returns exactly the W398 three.
- **Sample.** 15 hits rendered at 1x and 3x: one false positive, about four harmful at 1x, the rest legible behind the halo.
- **Code changes (A–D), applied verbatim:**
  - (A) `--severe`: only same-colour paint, or paint running along the words;
  - (B) the placer's measured ink ascent and descent;
  - (C) paths tested;
  - (D) the docstring's harm classes.

**Output now:**
- 474 crossings, which is the worklist.
- 29 `--severe` crossings.
- The 1 ft line through a round letter still needs eyes.

**Gate status.** It is a worklist, not a gate, and is listed among the worklists in CLAUDE.md.

## Reviews
| Reviewer | Result |
|---|---|
| safety-reviewer | **First read:** no Critical or Major. Minors 1–2 on :285. special_teams :582 and passing :717 upheld. **Final read:** CLEAR, with the audio-order Minor applied. |
| rules-verifier | :285 WRONG ×2 (overstatement; "either way"), with replacement text. "Longer if down", the late-fight floor, the Elite League default and CM :656 all OK. |
| diagram-reviewer | check_label_paint: model sound, calibration reproduces; changes A–D supplied and applied. |

### C11
The coordinator wrote check_label_paint.py, and the diagram-reviewer validated it. The final code is the reviewer's own. Every content edit after review is reviewer text.

## Checks after the last edit
- **Build.** A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 05:27:45, and no content or site/src file is newer.
- **Gates.** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update reports no change. check_callout_flow --bare reports 0.
- **check_marker_pairs.** 0 LOST and 0 SPLIT on all three content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier: DOPS C.1, C.2, §11, App G, App H; In-House Section 6; EIHL Casebook Fines and Suspensions; IIHF v1.1 Rule 46 (no late-fight ban found there) |
| D4 Citation integrity | DOPS rows quoted from the layout extraction |
| D5, D6 | not engaged |
| D7 Cardinal rule | the wedge+1 and screen craft stated as tactics, not law |
| D8 Numeric ownership | "Up to 1" / "Up to 3" / "Mandatory 1 game" against C.2; uk_rules :300 as owner of the Elite League default |
| D9 Summary layer | team_play :362 and CM :656 agree with :285; no facts line or Key Takeaway carries the claim |
| D10 Key-facts | not engaged (no facts line changed) |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | :285 rendered four times; the audio order fixed |
| D13 Folklore / terminology | not engaged |
| D14 Structure, terminology, cross-links | check_links and the build |
| D15 Rendered site | site-reviewer, three pages, 400×812 DPR 2 (light and dark) and 1440 light, on the 05:27:45 build: worst windows unchanged (team_play 42.7, special_teams 48.4, passing 26.9); nothing over 50% at 400px; 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll |
| Diagrams (no D-number) | the new tool, validated by the diagram-reviewer |

## Found, not fixed (plan rows)
1. **29 `--severe` label/paint crossings**, from `python3 scripts/check_label_paint.py --severe`.
   - Same colour: defender-three-depths, faceoff-where-the-draw-goes ×2, offside-faceoff-location "if carried", rush-backcheck-lanes, the-three-zones.
   - Runs along: 22, including dz-collapse-high-slot "collapsed into the high slot" and breakout-up "gone behind".
   - Reviewer sample also found a 1 ft line through a round letter: nz-stand-up "feet stopped", dz-collapse-high-slot "holds their point".
   - Diagram work. Some crossings are intentional (rink-map-end-zone "goal line").
2. **check_label_paint uses CHAR_W 0.56**, the reservation maximum. Porting the placer's ADV_KEYS advance table would remove about 16 end-grazes (reviewer, change B, optional part).
3. **"Unwilling combatant(s)" (DOPS C.2)** does not say whether it prices the unwilling player or their opponent. It is left out of the corpus.
4. **C.1 calls the late-fight ban a "Mandatory IIHF" ban, but no IIHF book on disk has one.** The corpus rests the ban on DOPS.
5. **Whether IHUK DOPS reaches an English Elite League club** is still unresolved (W394). Scottish and NI policies are not on disk.

## What this method could not have found
- How DOPS panels use "Up to 1" in practice.
- Real DPR-1 screens; the 1x crops came from librsvg.
- Firefox and WebKit.
