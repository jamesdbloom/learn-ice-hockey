# W397: a continuation paragraph now reads as part of its list item; the slot's "highest-danger" label gives way to the owner's wording; "the bail-out", "the house" and the carrier `C` are glossed; and the penalty-kill box's high forwards stand in the lanes everywhere (17 November 2026)

**Files:**
- site/src/styles/global.css
- content/positions/defender.md
- content/hockey-iq/risk_management.md
- content/systems/game_management.md
- content/reading-diagrams/reading_ice_hockey_diagrams.md
- content/systems/special_teams.md
- content/positions/center.md
- content/positions/winger.md
- site/src/diagrams/special_teams.mjs (comment only; no caption or describe changed, so diagrams.json did not change)
- project/plans/OPEN_ITEMS.md
- this record

## Source
These plan rows were each briefed as a hypothesis (scratchpad/w397/brief.md):
- From W396 (2): loose-list spacing.
- From W394 (2): the "highest-danger" superlative.
- From W394 (3): census items.
- From W394 (11) and (13): pk-box framing.

## What changed

### Loose-list continuation spacing (CSS)
`.prose li > p:not(:last-child) { margin-bottom: 0.4rem; }` was added after `.prose li`.

**Before.** `.prose p` gave 17.6px both inside an item and between items, so only the missing bullet marked a continuation as belonging to its item. The site-reviewer flagged this in W392 and W396.

**How the rule works.** It shrinks only a paragraph that has a sibling after it. The last paragraph keeps 1.1rem, which collapses through the `<li>`, so the gap between items is unchanged.
- **Matched:** 142 `p`→`p` cases inside `.prose` lists.
- **Unaffected:**
  - single-paragraph loose items;
  - tight lists;
  - facts `dl`/`dd`;
  - `.callout p`;
  - `warn-inline`.
- **Three `p`→`aside.callout` cases** still render at 24px, because the callout margin wins.
- **One other rendering change:** in rules_primer, "Checking from behind (Rule 43)" now sits 6.4px above its own nested list. The site-reviewer judged this correct.
- **No `:has()`,** so older browsers get no fallback risk.

**Measured** by the author and again by the site-reviewer, at 400 and 1440 px, light and dark:

| Item | Inside item | Between items |
|---|---|---|
| defending_the_rush "Angle them wide" | 17.6 → 6 | 18 |
| game_management "Chasing the extra body check" | 17.6 → 6 | 18 |
| body_contact Common Mistakes | 17.6 → 6 | 18 |
| rules_primer Rule 43 nest | 6, then 8 | 18 |

### "Highest-danger" replaced with the owner's wording
rink_map :363 says the slot "is where most goals are scored from". :381 and :732 rank no single location by measured conversion rate.

| Site | Now reads |
|---|---|
| defender :117 (facts) | "Never: Carry through the slot under pressure — it is where most goals are scored from, so a turnover there is a direct scoring chance against" |
| risk_management :182 | "…travels across the ice most goals are scored from, in front of the net," |
| risk_management :277 | "…you are where most goals are scored from, and…" |
| risk_management :281 (facts) | "Risk: Head down and surrounded in your own slot, where most goals are scored from — …" (it now names the slot; voiced alone, it had named no area) |

Every "Never" and "Why not" instruction is unchanged.

### Glosses
- **"The bail-out"** (risk_management, hierarchy item 2, "Up"). The term appeared only as a label on the hosted breakout-up diagram (breakouts.mjs :172). Text now added:
  > "In a swing breakout your centre stays low in the middle as **the bail-out**: when the wall is sealed, the low centre is what keeps the breakout alive. If your team sends the centre up the middle early instead, someone else must be under the puck."
  - Content-reviewer Major M1: the author's first gloss stated the low centre as a law. The owner, breakouts :28, scopes it to a swing breakout and names the centre-fly alternative. The fix carries both.
  - The author used "sends the centre up the middle early" for "flies the centre", from breakouts :660, because this page never explains "fly". The content-reviewer upheld this.
- **"The house"** (game_management, 6-on-5). The page used it three times and never defined it.
  - Body :425: "(the high-danger ice from the posts out to the dots and up to the tops of the circles)". This matches glossary :338 and rink_map :393, and nearly word for word defensive_zone_coverage :68, which :425 links to.
  - Facts :415 (199/200): "feet in the house, the danger area by your net". To fit, "low on the shaft" was cut; body :426 keeps it.
  - Safety ruled the cut safe. The protective limb is "well below their bottom hand" (IIHF 55.1; Hockey Canada 8.2(a) Interp. 1).
  - Safety and content both proposed "lift their stick" for "lift sticks", which fixed whose stick. It was applied.
- **The carrier `C`** (reading_ice_hockey_diagrams :196ff). The notation owner said a circled C is "a centre here". Seven `id: 'C'` glyphs are carriers:
  - puck_support_and_spacing :105, :165, :357, :450
  - rules_primer.mjs :183
  - neutral_zone_systems.mjs :951, :1064
  
  A note now says so, and how to tell:
  > "…when it speaks of the player with the puck — *the carrier*, *carries it in*, *the attacker* being steered — read the `C` as that player, not the centre."
  
  Content-reviewer m2: the author's first test ("says *puck carrier* or *a carrier*") failed for nz-back-off. Option (b), the wording above, was applied. Modules were not touched.

### pk-box framing (W394 caption vs prose)
The W394 caption says the box's high forwards stand "one each side in the shooting lanes". The prose said "each responsible for one point" or "covering a point". All sites now share the caption's framing. Where there is room, they add "taking the point on your side when they run two", which keeps the umbrella and overload case true.

| File | Sites |
|---|---|
| special_teams | :504 body, :507 facts (now word for word with the caption) |
| center | :611 facts, :623 body |
| winger | :620 facts (not in the brief, found by claim search), :635 body |

- **special_teams :522** (cardinal rule, content m1):
  > "Whether you step out to pressure the point or hold your lane is your coach's call, so ask which they want."
- **special_teams.mjs pk-box comment** now quotes the new body text.
- **No "each responsible for one point" remains in content/** (content-reviewer census).

### Refuted: keys on pk-diamond and pk-wedge-plus-1
pp-131 labels P, H, B and N in the picture itself, earlier on every host (special_teams :121, how_to_watch :198, winger :609, center :598). pk-box's caption key also sits directly before pk-diamond on three hosts. A further key would be noise to a listener.

## Reviews
| Reviewer | Result |
|---|---|
| content-reviewer | **First read:** no Critical. M1 (bail-out law). m1 (:522 shape), m2 (C test), m3 ("lift their stick"), m4 (stale module comment), m5 (corpus "most dangerous ice" inconsistency). Upheld: "most goals" true as used, "the house" is home plate as in its linked owner, box framing is true in general with no clash on host pages. **Final read:** CLEAR. |
| safety-reviewer | No Critical or Major. The game_management :415 cut is safe (IIHF 55.1, HC 8.2(a) Interp. 1, USAH 623 Note). The "most goals" units read as stronger instructions, not weaker. Optional "lift their stick" applied. |

The rules-verifier was not dispatched: no rule claim changed. The one rule-adjacent line (:415) was read by safety against three books.

### C11
The coordinator wrote no content. Each post-review edit is one of:
- a reviewer's own text (:522, the C note, "lift their stick");
- the content reviewer's M1 text with an owner-sourced phrase swap that the reviewer upheld in its final read.

## Checks after the last content edit
- **Build.** A full `npm run build` (absolute binary) exited 0. `dist/index.html` is 17 Nov 04:27:10, and no content or site/src file is newer.
- **Gates.** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **check_marker_pairs.** 0 LOST and 0 SPLIT on all seven content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | No rule claim changed. Safety read IIHF 55.1, HC 8.2(a) Interp. 1 and USAH 623 Note for the stick-lift line. |
| D4 Citations | none |
| D7 Cardinal rule | content-reviewer: bail-out (M1, a system choice stated as law) and the special_teams :522 coach's call |
| D8 Counts | "where most goals are scored from" against rink_map :363 and :381 |
| D9 Summary layer | content layer-searched each claim; no CM or KT carried the superlative or the point framing |
| D10 Key-facts | defender :117, risk :281, game_management :415, special_teams :507, center :611, winger :620 read voiced alone |
| D11 Reader safety | safety-reviewer |
| D12 Read-aloud | each author rendered; safety rendered three documents |
| D13 Folklore / terminology | "the house", "the bail-out", carrier `C` and the "point" framing checked against glossary :338, rink_map :393, breakouts :28/:652/:660 and the reading-diagrams owner |
| D14 Structure, terminology, cross-links | check_links and the build; the new bail-out, house and C glosses link-checked |
| D15 Rendered site | site-reviewer on the 04:27:10 build (below) |
| D5 Provenance, D6 Negative existence | not engaged: no citation or "no X exists" claim changed |

**D15:** site-reviewer, eight pages, Playwright Chromium at 400×812 DPR 2 (light and dark) and 1440×900 light.
- **CSS.** The rule ships in the built stylesheet. Continuations read as part of their item and are not cramped.
- **Bail-out.** The gloss's bold "the bail-out" matches the diagram's label.
- **C note.** It renders as the natural next qualification in item 1.
- **Page windows.** All under 50% at 400px: defender 47.7, risk 43.8, center 36.6, winger 44.2, special_teams 48.4, game_management 39.2, reading_ice_hockey_diagrams 8.3 (first measured), dtr 39.1.
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.
- The 1440 windows over 50% are the known full-width-SVG artefact.

## Found, not fixed (plan rows)
1. **"Most dangerous ice" is given to different regions** (content m5). This needs one owner-led decision, not a sweep.
   - breakouts :52 gives it to the house; special_teams :119 to the slot; defensive_zone_coverage :215 to the inner slot.
   - Also: special_teams :582; game_management :77/:85/:645/:1278; goaltender :896; offensive_zone_play :845; faceoffs :81/:91; shooting :374; defending_the_rush :73.
   - Note: rink_map :381 does say the scoring evidence points to the low slot "more than anywhere else", so W394's "ranks no single location" premise was partly wrong.
2. **A glossary entry for "bail-out"** in language_and_glossary. The corpus uses two senses: the breakout low centre (breakouts :28/:652) and a generic plan B (scanning_and_anticipation :11/:234/:245/:563/:613; offensive_zone_play :459/:468). The content-reviewer supplied a draft.
3. **game_management.mjs :518 comment** says "Every one of the 39 other `id: 'C'` glyphs … is a centre role". It is stale: 56 sites, 7 of them carriers. The content-reviewer supplied replacement text.
4. **Carrier `C` glyphs.** Consider relabelling (`F`, or a label saying "carrier") at rules_primer.mjs :183 and neutral_zone_systems.mjs :951/:1064, where "the attacker" alone cannot separate them from a centre. Also check defending_the_rush.mjs :704 ("the third attacker").
5. **"the bail-out" breaks across lines** as "the bail-" / "out" at 400px. Use a non-breaking hyphen (U+2011) in the source, and check the screen-reader effect.
6. **breakout-up "gone behind" label overlaps the faceoff-circle line** (pre-existing).
7. **The 6.4px break inside an item is subtle with a 28.9px line height.** A continuation opening with plain text after a full-width last line could read as a wrap. Every case checked reads correctly.
8. **defender :715 facts "two of you just off the crease edges" vs :726 "the net front and the two low corners"** (pre-existing; unverified).
9. **The CSS was checked only in Chromium,** with no PDF build:pdf output inspected.

## What this method could not have found
- A restatement of the old "point" or "highest-danger" claim worded with none of the searched phrases.
- Firefox, WebKit, real devices, and a screen reader.
