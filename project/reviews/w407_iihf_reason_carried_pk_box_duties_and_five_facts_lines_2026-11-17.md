# W407: the IIHF exception now carries its reason, the box diagram teaches who does what, and five facts lines read true voiced alone (17 November 2026)

**Files:**
- content/systems/defending_the_rush.md
- content/systems/offensive_zone_play.md
- content/technique/shooting.md
- content/positions/switching_positions.md
- content/foundation/uk_rules.md
- site/src/diagrams/special_teams.mjs (pk-box)
- site/src/data/diagrams.json (the build product of that caption)
- project/plans/OPEN_ITEMS.md
- this record

## Source
There were seven agents, briefed with scratchpad/w407/brief.md. Each plan row was given as a hypothesis.

| Agent | Scope | Plan rows |
|---|---|---|
| A | defending_the_rush | From W406 (1), (2) |
| B | offensive_zone_play | From W393 (10), (11); From W387 (4) |
| C | shooting | From W389 (3), (7) |
| D | switching_positions | From W384 (1) |
| E | uk_rules | From W394 (12) |
| F | special_teams.mjs pk-box | From W394 (6); From W406 (7) |
| G | read-only region-ranking census | From W401 (1) |

## What changed

### defending_the_rush: "every book but the IIHF" now says what the IIHF does
**What changed.** Every unit stating that a hit from behind meant to injure "is a match in every book but the IIHF" now adds "which has no match penalty — plan on ejection there". A British listener no longer hears only that their book is the exception. The units are:
- facts :320, now 295/300;
- facts :638;
- body :653 and :954;
- the CM bullet "Hounding a carrier…".

**Sources.**
- "match penalt" scores 0 in every IIHF file on disk.
- IIHF 43.2: "no option to award a minor penalty".
- IIHF 43.3: discretionary major plus automatic game misconduct for reckless endangerment.

**Body :954.** Three consecutive "Under USA Hockey" openings became two, in the content reviewer's text: "Under USA Hockey, plan on the match for a reckless one too, with a likely multi-game suspension (602(a)), and careless contact with their head or neck is a mandatory major plus a game misconduct (620(b))."

**CM "Hounding…".** This bullet was at the 1,200 cap and is now 1,173.
- The 608(c) sentence was merged into the reckless clause.
- "Either way" was cut. Rules confirmed that 602(a) "shall" covers both reckless endangerment and an attempt to injure, so the cut changes nothing.
- The final word order is "plan on a match, mandatory with excessive force on a vulnerable or defenceless player, boards or not (608(c)), and a likely multi-game ban". Both final reads caught that the merged draft attached "mandatory" to the ban.
- The first draft's "which has none" was replaced, because it could be heard as "the IIHF has nothing for it" (content M2, safety m2).

**Left unchanged.**
- :934, because the IIHF answer is in the same unit (41.4).
- facts :968, the charging line at 299/300. IIHF 42.4 is a discretionary "may", which needs different wording. Carried to the plan.

### offensive_zone_play facts :1171/:1172
- **:1172.** "goal frame (CARHA: net)" became "goal". Hockey Canada 7.5(c) says "goal frame" and CARHA 53(b) says "goal net"; "goal" covers both and matches :813.
- **:1171.** The author's "on the head there or in the IIHF" was reverted. Content M1 found that "there" had no antecedent a listener could find, and safety and rules found that "minor, misconduct" could be heard as "or". The line now matches its sibling :950 again ("IIHF or head hits: plan on it; USA Hockey: a minor and misconduct at least"). The only change against HEAD is "under the NHL" → "in the NHL". Universal "head hits" is the conservative reading (W393 (11)).

### shooting facts :287
- **Now reads:** "Rule: Hitting a goalie's back is checking from behind — plan on ejection in all books but USA Hockey (Hockey Canada: on the head too; a match if defenceless); USA Hockey: at least a minor and misconduct (608), ejecting if forceful at the boards, head first, reckless, or careless contact with head or neck" (299/300).
- **Changes.**
  - "(608)" is added to the 608(a) floor only. 620(b) is the head and neck limb.
  - The repeated "plan on it" was removed.
  - The ungrammatical "careless to head or neck" was fixed.
- **608(c) not added here.** The next facts line, :288, carries it in the same chunk (016).
- **USA Hockey 607 is not dearer.** 607(e) is a discretionary "may" match; 608(c) is "shall".

### switching_positions facts :240 (CARHA)
- **Now reads:** "CARHA 49(a) puts seeking contact, or failing to 'avert body contact', at a minor or a major and game misconduct, mandatory if intentional contact injures; meant to injure, a match (48(a)); …" (300/300).
- **Why.** Voiced alone, the old line topped out at major plus game misconduct for injurious intentional contact. CARHA 48(a) makes deliberate injury or attempted injury a match.
- **"Seeking contact".** It replaces "standing in front of an opponent to make contact", which named only one of 49(a)'s four intentional limbs. Rules and safety both rated it fair and broader, in the cautious direction.
- **Why not split.** The block is at HARD_MAX 14.

### uk_rules :413
- **Before.** The sentence read as a complete list: "writes suspensions for some fights and for leaving the bench but none for these acts". It omitted the Casebook 5.6(1)/(2) warm-up "suspension and/or fine".
- **Now:** "IHUK's rules do not say whether they reach Elite League games, and the Elite League's Casebook writes no suspension for these acts." The author first added the warm-up to the list. The content reviewer (m6) cut the list, because it changes nothing a reader does, and listing it is what went stale.
- The sentence stays in the same chunk as "In the Elite League, plan on the same ban".

### pk-box diagram (special_teams.mjs)
- **The attacker drawn on the line was left alone.** The opposition P sits at `centre-point`, x = 25, with the describe text "just inside the blue line". That is deliberate and documented:
  - special_teams :119 calls the point "an area, not the line itself";
  - rink.json's point $comment says the marker is the blue-line end of the area;
  - `PP_131_OPP` is shared across four diagrams.
- **Caption.** "two defencemen low on the corners and the goalmouth" placed them on the corners, which is not what is drawn. It now reads "two defencemen low — the strong-side one on the puck when it comes low, the weak-side one on the goalmouth and the backdoor".
  - This is the content reviewer's split of duties from owner :510/:523.
  - The author added "when it comes low". The drawing has the puck on the half-wall with the strong-side D holding in front, and the owner limits the pressure to "below the goal line or in the low circle". Unqualified, the caption would send a D to the half-wall.
- **Label.** The weak-side D's label "goalmouth" became "weak side, low", mirroring "strong side, low". The glyph is 9 ft off the goal line, while the goalmouth is "within a stick's length of the goal line" (:119). `labelHint: [-1.5, -9.7]` clears the red goal line, previewed with no knock-on.
- **Hosts.** The caption is spoken in four hosts:
  - special_teams :516
  - defender :729
  - winger :639
  - how_to_watch_hockey :212

  Safety and content read it in each, and it is consistent with defender's "you and your partner low, owning the net front and the two low corners".

### Region-ranking census (G, read-only)
It found rankings worded outside W401's sweep. All are carried to the plan as From W407 (1).

## Reviews
| Reviewer | Result |
|---|---|
| rules-verifier | All five OK. "Either way" is redundant under 602(a); :954 is supported (Standardized Discipline Level 1, 6–10 games); ozp :1171/:1172, shooting :287 (607 not dearer), switching "seeking contact" and uk_rules :413 all hold. Optional "+": moot after the revert. |
| safety-reviewer | **First read:** no Critical or Major. Minors: ozp "minor, misconduct"; dtr CM "which has none". **Final read:** CLEAR, plus the Minor "mandatory" attaching to the ban, applied as content's word order. |
| content-reviewer | **First read:** M1 ozp "there"; M2 dtr "which has none"; Minors m1–m6, with texts applied for m2, m4, m5 and m6. **Final read:** CLEAR, except the CM word order, now applied. |
| site-reviewer | Nine pages at 400×812 DPR 2 light and dark, and 1440 light, on the 10:23:12 build. Every worst 400px window is unchanged and none is over 50%. 0 bare, 0 untreated strong runs, 0 panels, 0 console errors, no horizontal scroll. pk-box serves the new caption and label on all four hosts; "weak side, low" clears the goal line; "strong side, low" crosses it (Minor, pre-existing → plan). |

### C11
The coordinator wrote no content. Every post-review edit is one of:
- a reviewer's text;
- an author correction upheld in a final read ("when it comes low", the labelHint);
- the reviewers' own word order.

## Checks after the last edit
- **Build.** A full `npm run build` (absolute binary) exited 0. dist/index.html is 17 Nov 10:23:12, and no content or site/src file is newer.
- **Diagrams.** build-diagrams exited 0. check_geometry, check_absolutes (408 caption units) and check-arrivals (0 hard) pass. check_label_paint `--severe` is 14, unchanged.
- **Gates.** check_links --quiet, check_facts, check_absolutes, check_geometry and check_secrets pass. check_counts --update made no change. check_callout_flow --bare is 0.
- **Markers.** check_marker_pairs shows 0 LOST and 0 SPLIT on all five content files.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1 Rules accuracy | rules-verifier: IIHF 42.4, 43.2, 43.3; USAH 602(a), 607, 608(a)–(c), 620(b), Casebook 608 Sit. 1; HC 7.5(c); CARHA 30(a), 48(a), 49(a), 53(a)/(b); NHL/PWHL 21.1, 43.2, 43.5; EIHL Casebook 5.6, Fines and Suspensions, 41/42 |
| D2 Exceptions | IIHF has no match penalty; 607(e) "may" vs 608(c) "shall" |
| D3 Cross-book divergence | the IIHF exception given its own answer at every voiced site |
| D4 Citation integrity | shooting "(608)" attached to the 608(a) limb only |
| D5 Provenance | not engaged |
| D6 Negative existence | "match penalt" 0 in all IIHF files; the Casebook writes no suspension for these acts |
| D7 Cardinal rule | pk-box duties stated as the owner's box, not law |
| D8 Numeric ownership | not engaged (no figure changed) |
| D9 Summary layer | layer tests per file; ozp :1171 and :950 agree again; dtr carriers listed above |
| D10 Key-facts | dtr :320/:638, ozp :1171/:1172, shooting :287 and switching :240 read voiced alone |
| D11 Reader safety | safety-reviewer, two reads |
| D12 Read-aloud | every changed unit rendered by authors and reviewers |
| D13 Folklore | not engaged |
| D14 Structure, terminology, cross-links | check_links; pk-box caption against owner :504/:510/:523 |
| D15 Rendered site | site-reviewer (above) |

## Found, not fixed (plan rows)
1. **Region rankings outside W401's vocabulary** (census G):
   - risk_management :117/:128 give the whole slot the low-slot superlative.
   - bcb :1294 "densest scoring area on the ice".
   - center :470 "most effective place to score from".
   - "the most valuable ice there is" for two places: puck_support :325 and time_and_space :163. dzc :235/:242 "most valuable".
   - "the dangerous ice" for the middle: dtr :231/:241 (plus the defending_the_rush.mjs comment) and puck_handling :762/:794/:804.
   - zone_entries :436 "prime scoring area".
   - switching :391/:403 "prime mid-ice".
   - Turnover-cost rankings against the risk-map owner: neutral_zone :79/:94 "costliest/most expensive kind"; center :19/:48/:94/:120/:901; faceoffs :369/:379; risk_management :205.
   - Soft: scanning :390; goaltender :896 "tap-in from the slot".
   - Note the owner also ranks the half-wall (rink_map :416).
2. **dtr facts :968** (charging, 299/300) gives "every book but the IIHF" with no answer. IIHF 42.4 is a discretionary "may", so it needs its own wording.
3. **"Every book but the IIHF" is bare at about 31 sites in 13 other files.** This needs a corpus-level decision, not a file sweep.
4. **dtr states "a hit meant to injure is a match" at eight sites** (:320, :411, :638, :653, :934, :954, :968, CM). This needs a per-limb layer test; demote body :653 first.
5. **pk-box "strong side, low"** crosses the red goal line by about 6 CSS px at 400px (pre-existing). The same labelHint treatment applies.
6. **ozp :950** (300/300) keeps "IIHF or head hits" unscoped. This is conservative.
7. **switching :257** three-book frame does not carry the intent-to-injure match (author candidate; other books not verified).
8. **NHL/PWHL 43.4 "may assess a match" vs 21.1 "shall"** for intent to injure. Check whether any unit quotes 43.4 as the whole answer.
9. **dtr CM "Hounding…" amber run** is about 230 characters (8 lines at 400px). The Hockey Canada head-contact parenthetical is the natural candidate to move out.
10. **special_teams :119** "the half-wall is the boards level with the faceoff dot, well below it" reads self-contradictory aloud. **winger :634** calls the box "the standard" (the owner says "the shape almost everyone is taught first").

## What this method could not have found
- Copies of these claims in other documents worded without the searched phrases.
- The EIHL "Gamebook section: EIHL DOPS", which is not on disk.
- Real devices and screen readers.
