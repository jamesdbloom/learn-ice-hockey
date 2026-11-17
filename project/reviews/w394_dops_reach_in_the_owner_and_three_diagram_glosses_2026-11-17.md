# W394: uk_rules (the discipline owner) stops stating an Elite League exclusion its source does not make and gives every region a default; three diagram captions gain a gloss, a correct position or a correct colour (17 November 2026)

**Files:**
- content/foundation/uk_rules.md
- site/src/diagrams/breakouts.mjs (breakout-d-to-d)
- site/src/diagrams/special_teams.mjs (pk-box)
- site/src/diagrams/positions.mjs (defender-d-to-d-behind-the-net)
- site/src/data/diagrams.json (build product)
- project/plans/OPEN_ITEMS.md
- this record

## Source
Two rows from **From W393**, each briefed as a hypothesis:
- **(1)** "Outside the Elite League" is a working scope stated as fact. This wave repairs the owner first; siblings follow in W395 using the owner's form.
- **(15)** A census of diagram labels with no gloss on a host page.

## uk_rules: the IHUK DOPS reach
**The hypothesis held.** Sources:
- **sources/eih_dops_2026-27.txt §5** (:85-90) reaches *"IHUK-registered participants whose ice hockey club is based in England or Wales"*. Games in Scotland and Northern Ireland *"will be subject their own discipline policies"*.
- **The only Elite League mention** in the DOPS document is :1236, *"NIHL National will honour suspensions issued by IHUK/EIHL DOPS…"*. It is not an exclusion.
- **EIHL Casebook Rule 28** (:414-419) names the EIHL DOPS and Hockey Operations as the Proper Authorities.
- **The Casebook's FINES AND SUSPENSIONS section** (:601-662) suspends:
  - late instigators or aggressors;
  - instigators outside the periods;
  - 10th and later fighting majors;
  - leaving the bench (three games).
  
  It writes no ban for checking from behind, a head check or boarding. Rules 41 and 42 add only an in-game GM.

**The IIHF route is closed.** C.1 calls the bans "Mandatory IIHF one-game bans". The rules-verifier read iihf_disciplinary_regs_2026.txt in full. No IIHF document on disk imposes a mandatory one-game ban: Rules 46.10 and 46.15 are discretionary supplementary discipline. The label probably traces to the superseded 2022/23 Code, which is not on disk. So "plan on" is the right register for the Elite League, not "the ban applies".

**Each "outside the Elite League" in the file was ruled on:**

| Line | Scope | Outcome |
|---|---|---|
| :300 (late fight) | DOPS | Exclusion removed |
| :413 (one-game bans) | DOPS | Exclusion removed |
| :415/:417 (points) | DOPS | Exclusion removed; the points have no reach clause of their own |
| KT19 | DOPS | Exclusion removed |
| :342 | In-House Rule 84 overtime | Kept: the Casebook writes its own Rule 84 |

**Final text:**
- **:300.** The ban sentence is followed by: "…and you also miss a game in every other league or age group you are registered in. In the Elite League, plan on the same ban: IHUK's rules do not say whether they reach it. At a club in Scotland or Northern Ireland, whose own policies have not been read, plan on it too."
  - Support: C.1 ("enforced at all levels the player plays at"), the C.2 row ("Last 5 minutes, OT & or End of game — Mandatory 1 game"), and §11.
- **:411.** Now reads "On first-major ejection, the IIHF is stricter than the NHL."
  - It was moved from the end of the tariff paragraph, where "yours is the stricter book" had lost its referent (safety Minor 2), and now names the IIHF (rules, optional).
- **:413.** Split from one 1,172-char paragraph into two. The first carries:
  - the England-or-Wales ban with §11's extra game;
  - "**In the Elite League, plan on the same ban.**";
  - "IHUK's rules do not say whether they reach Elite League games, and the Elite League's Casebook writes suspensions for some fights and for leaving the bench but none for these acts";
  - "In Scotland and Northern Ireland, whose own discipline policies have not been read, plan on the same ban too" (safety Major 1).
  
  The old sentence "The Elite League's Casebook writes its own suspensions" implied the Casebook covered these acts. It did not.
- **:415.** The tariff paragraph. The amber now sits on the hazard: "For a first offence it runs ⚠️ **up to eleven games or more for boarding or checking from behind, and up to twenty for a check to the head**". The under-16 written warning (App J) is kept.
- **:417.** The points paragraph now ends "IHUK's rules do not say whether Elite League penalties count, so count them in to be safe; in Scotland and Northern Ireland, ask." "Play in" became "registered in", which is App D's wording.
- **KT19 (413 chars; safety's trimmed form).** "…means at least a one-game ban, in every league or age group you are registered in. Anywhere else, the Elite League included, plan on the same ban."

**Readability.** :411 carries one ⚠️, :413 one and :415 one. check_marker_pairs went from 80 → 81 marked units, with 0 LOST and 0 SPLIT. All paragraphs are under 1,200 chars.

### Template for W395 (sibling facts lines; both reviewers)
> "In the Elite League, or at a club in Scotland or Northern Ireland, plan on at least a one-game ban for checking from behind, a head check, a boarding major or a fight in the last five minutes or overtime, and ask your league."

- **"At least"** (both reviewers). Without it, the line voiced alone reads as a ceiling, but C.2 runs to "Up to 11+" and "Up to 20".
- **"A fight in the last five minutes or overtime"** (rules). It replaces "a late fight".
- **The label.** It is a default, not a rule, so do not label it `Rule:`. Its length is about 220 chars, so it needs a 300-cap label or a shorter form. Measure it in W395.
- **The body and KT form is the uk_rules :413 / KT19 wording.**

## Diagrams: three glosses, one position, one colour
**The census** (read-only, scratchpad/w394/B) covered 204 diagrams and 559 distinct drawn strings. It checked each against the glossary and rink_map and against every host's caption and nearby prose.
- **Two real gaps,** both never glossed (not trimmed): "the house" on breakout-d-to-d, and the P/H/N glyphs on pk-box.
- **"Dog, fox and hawk"** is the only gloss trim on record, and it was restored in dd66e5fd.

**The changes:**
- **breakout-d-to-d.** The caption gains "never through the shaded area — the house, or home plate, wider than the slot: across the tops of the two circles, down to the dots and in to the two posts." The total is 738 chars (612 at HEAD).
  - The shape wording is rink_map :16, verbatim. "Wider than the slot" is the glossary :338 wording.
  - **Why it mattered.** On risk_management :194 and goaltender :882, the prose says "slot" while the picture labels the larger home plate.
  - The first form ("the shaded area, the house or home plate") read as three regions (diagram review, Minor).
- **pk-box.** The caption gains "The 1-3-1's letters: P at the point, H on the half-walls, B the bumper, N at the net front." The total is 517 chars (407).
  - The **pre-existing** clause "two forwards high, one on each point" contradicted the picture: the killers stand high in the lanes, and the 1-3-1 has one point man. The new key made this visible (diagram review, Major). It is now "one each side in the shooting lanes", per special_teams.md :510 and :520 and the drawn "high, in the lane" labels.
- **defender-d-to-d-behind-the-net** (positions.mjs `dToD`; hosts defender :100 and on_ice_communication :151).
  - **Caption (diagram review, Minor).** "the highest-danger ice there is" outranked the owner, rink_map :381/:397/:732. The shaded 406 sq ft stops at the crease front. It is now rink_map :363's "where most goals are scored from".
  - **Notation (diagram review, Major).** The forbidden zone rendered in the target blue that means "stand here". `danger: true` is added, so it now matches breakout-d-to-d's red danger band.

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier (uk_rules) | **First read:** removal upheld, IIHF route closed. :300 "which apply it to all leagues" contradicted :413. "Some fights". **Final read:** all five items OK; the template needs "at least" and "a fight in the last five minutes or overtime". |
| safety-reviewer (uk_rules) | **First read:** no Critical. Major 1 (no Scotland/NI default), Major 2 (the author's facts template pointed at nothing). Minors 1–5. **Final read:** CLEAR, with Minors on :300 Scotland/NI, :417 and the template's "at least", all applied. |
| diagram-reviewer | **First read:** geometry and owner agreement confirmed. Minor: d-to-d three-region reading. Major: pk-box "each point". Minor: defender superlative. Major: defender zone colour. **Final read:** CLEAR, rebuilt PNG viewed. The missed host, on_ice_communication :151, says "slot" throughout and agrees. |
| census (read-only agent) | 2 gaps; 6 low-priority items (see plan). |

### C11
The coordinator wrote no content. Every post-review edit is a reviewer's own text, or an author verb or placement fix read by the reviewer in its final read:
- "it runs" in :415;
- the :411 placement after "the IIHF needs none".

## Checks after the last content edit
- **Build:** build-diagrams (absolute node binary), then a full `npm run build` (absolute binary), exited 0. `dist/index.html` is 17 Nov 03:36:02; no `content/` or `site/src/` file is newer.
- **Gates:** check_links --quiet, check_facts, check_absolutes (408 caption units), check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare reports 0.
- **Caption checks:** check_caption_pairs and check_zones are clean. check_caption_negations lists both "never … — <region>" appositives; read inverted, each only names the area.
- **check_marker_pairs** on uk_rules: 0 LOST, 0 SPLIT.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 Rules | rules-verifier, two reads. Sources: <br>• IHUK DOPS 2026-27 §2, §5, §10, §11, C.1, C.2, App D/E/G/H/J/K, :1236 (both extractions) <br>• EIHL Casebook Rule 28, Rules 41/42, Fines and Suspensions <br>• IIHF Disciplinary Regulations 2026 (read in full) <br>• IIHF 2026/27 and v1.1 Rules 23, 46 <br>• NHL 20.4 |
| D4 Citations | no new external citation; the DOPS and Casebook are on disk |
| D8 Counts | "some fights", "every other league or age group", "up to eleven … up to twenty", "anywhere else" |
| D9 Summary layer | KT19 read voiced alone by both reviewers |
| D10 Key-facts | uk_rules has no facts block; the sibling template was ruled on for W395 |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | uk_rules rendered three times by the author and twice by safety; caption hosts rendered (9 hosts) |
| Diagrams (no D-number) | diagram-reviewer, two reads, PNGs viewed; build-diagrams; check_geometry, check_zones and the caption checks |
| D13 Folklore / terminology | "the house" / "home plate" checked against glossary :338 and rink_map :16/:391; P/H/B/N against the glossary and the module's own key; the census sorted standard, owned and coined labels |
| D14 Links | check_links and the build |
| D15 Rendered site | site-reviewer on the 03:36:02 build (below) |
| D5–D7 | not engaged |

**D15:** site-reviewer, eight pages, Playwright Chromium at 400×812 DPR 2 and 1440×900, light and dark.

uk_rules windows at 400px:

| Unit | Window |
|---|---|
| :413/:415 | 25.3 |
| KT19 | 44.5 |
| :300 | 14.9 |
| page worst | 44.6 (first measured) |

- **defender-d-to-d.** The band is a pale red tint with a dashed red edge, identical in both themes because diagram colours are fixed. The "the slot" label has about 5.8:1 contrast on the band. The label stays blue, like every zone label (noted).
- **Caption windows at 400px.** breakout-d-to-d 5.8 / 0.0; pk-box 14.1 / 0.0.
- **Other pages unchanged.** defender 47.6, goaltender 46.7, on_ice 46.7, risk 43.8, game_management 39.2, breakouts 38.5, how_to_watch 23.9.
- **No 400px window is over 50%.**
- 0 bare glyphs, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll.

## Found, not fixed (plan rows)
1. **W395: propagate the owner form to the sibling DOPS sites.** They carry the DOPS facts line, a body or a KT:
   - risk_management :850/:918;
   - defender :291/:304;
   - winger :881/:886;
   - center :889;
   - goaltender :1180/:1371;
   - game_management :178;
   - special_teams :437;
   - offensive_zone_play :952;
   - body_contact_and_battles :827/:1929;
   - rules_primer :400;
   - defensive_zone_coverage :764;
   - playing_without_the_puck :825/:1019, whose W393 form now differs from the owner's.
   
   Do this as a per-claim layer test that reads each hit. Some "outside the Elite League" sites scope the In-House Rules and are correct: goaltender :1435/:1452, switching_positions :140, on_ice_communication :632, rink_map :302, body_contact :1927.
2. **The "highest-danger" superlative in prose.** It survives at defender.md :117 and risk_management :182/:277/:281, while rink_map :381/:732 ranks no single location.
3. **Census, low priority.**
   - pk-diamond and pk-wedge-plus-1 leave P/H/B/N unlabelled; pp-131 keys them earlier on every host.
   - The glyph "C" means carrier in the support-distance diagrams but centre in reading_ice_hockey_diagrams :190-194.
   - "The bail-out" is unglossed on risk_management :448.
   - game_management :413/:424 use "feet in the house" without a gloss.
4. **Zone labels stay blue on a red danger band.** rink.mjs draws every zone label in #0f5a8f; this is a renderer choice.
5. **pk-box's letter key is noise to a listener with no picture.** It is harmless, since the caption is the only visible legend.
6. **pk-box `describe` says P is "just inside the blue line"**, but it is drawn centred on the line.
7. **on_ice_communication :149 "Most teams go behind the net"** is an unsourced prevalence claim.
8. **uk_rules "six of its thirteen" NHL count** was not re-verified this wave.
9. **Whether Elite League players are "IHUK-registered participants" under §5** is not settled. The EIHL roster regulations are not on disk. If they are, "do not say" understates the reach.
10. **An English or Welsh club's game played in Scotland** falls under Scottish policy by §5. No layer addresses it.

11. **pk-box "one each side in the shooting lanes" vs the prose "each responsible for one point"** (special_teams.md facts :507 and body :504; center :611/:623; winger :635) — two framings of the same job heard back to back. Nothing is false: the caption describes the drawn 1-3-1, which has one point man. Reconcile across the owner and the position pages (commit gate).
12. **uk_rules :413's Casebook list** ("some fights and for leaving the bench") omits the warm-up suspension/fine (Casebook :250–256, :271), so it reads as complete. "None for these acts" is correct (commit gate).
13. **The special_teams.mjs comment near pk-box** still quotes "each responsible for one point" (commit gate).

## What this method could not have found
- The EIHL Gamebook DOPS section, which is not on disk and may price these acts.
- The SIHA and Northern Ireland discipline policies, which are not on disk.
- Real devices, and a screen reader.
