# Getting Better: "Practising on Your Own" published with its 51 skating drills (28 October 2026)

The owner approved all 51 skating drills as drawn on 28 October (preview v10) and deferred the stick-handling drills. This publishes the page and the drill pictures.

**Files:**
- **Page:** content/off-the-ice/practising_on_your_own.md (new).
- **One-line links:**
  - content/off-the-ice/finding_more_ice.md: Related line and the end of §2;
  - content/technique/skating.md: after Basic edge drills;
  - content/off-the-ice/practice_and_development.md: Related line;
  - content/getting-started/getting_started.md: Route 1 "After your first game" and Related.
- **Site:**
  - site/src/drills/ (lib/draw.mjs and 01–06, moved from project/getting_better_drafts);
  - site/scripts/build-drills.mjs and site/src/data/drills.json;
  - site/package.json (build:drills);
  - site/.gitignore (public/drills/);
  - site/src/plugins/remark-corpus.mjs: the `![](drill:<id>)` visitor inlines `figure.diagram.drill`;
  - site/src/styles/global.css: white drill ground;
  - site/src/data/structure.json: the page goes after Finding More Ice;
  - site/src/data/og.json.
- **Renderer:** scripts/md_to_speech.py.
  - `_drill_manifest` voices nothing for a drill.
  - New: the spoken intro drops "Written to NHL rules" on any page whose Rule set banner does not say so. That covers this page, finding_more_ice, uk_rules and reading diagrams. It was false on all four.
- **Tool:** scripts/check_callout_flow.py.
  - A page with no ⚠️ now reports "0 marker lines", exit 0. Before, it printed "no markdown matched", exit 1, and blocked `--bare` from running.
- **Drafts:**
  - project/getting_better_drafts/build.mjs and preview.mjs now read site/src/drills.
  - The duplicate draft modules are deleted.
  - 00_sample.mjs is repointed.
- **Plan and figures:** project/plans/OPEN_ITEMS.md; CLAUDE.md, docs/README.md and project/site_build_specification.md document counts 40 → 41 (check_counts --update).

## What changed in review

### Page text
Three safety rounds and one content round. Every sentence a reviewer touched was re-checked against its owner document.

**Safety**
- **Helmet** for all of this work, edges included: in §1, a Common Mistake and Key Takeaway 6.
- **How to fall:** side, hands in, chin tucked; feet or side to the boards, or arms out if you cannot; take a few seconds before you get up. The owner is skating.md.
- **Possible concussion:**
  - §1: stop for the day, tell someone, don't go home alone or drive yourself, and don't skate again until a medical professional clears you.
  - It is now also a Key Takeaway, which is voiced alone.
  - The owners are conditioning_and_recovery.md (:330–350, CRT6) and skating.md KT11.
- **Neck guard:** in Britain, wear one every time you skate, public sessions included.
  - This appears in the banner (not voiced), in §1 and in KT6.
  - Basis: EIH R&R 24.3, "all on ice activities" (eih_rr.txt:1144-1147). A rules check found its reach to public ice and stick-and-puck unsettled: 3.1, 8.3 and 21.2 point at club, competition and camp ice. Scotland and NI are unsettled as well (equipment.md).
  - The page tells readers to wear one anyway and never claims the rule requires it.
- **Look-behind and clear-patch cues:** every backward, jumping, hard-stop and fast-start drill carries its cue in the same spoken chunk as its steps. This was verified by rendering, and covers the two-foot jump, the parallel stop and the explosive crossover start, whose group intros fell in a different chunk.
- **Other cues:**
  - "where you have room" on every go-hard instruction;
  - "if the posted rules allow it";
  - "Assume no sticks or pucks unless the rules say so";
  - the outside-edge lean starts slow on wide arcs (skating.md:209).

**Content**
- **Easy laps:** if you go round, use crossovers, with more in your weaker direction. "Weak side" is gone from the page because the glossary uses it for a side of the ice. The ratio is stated once, as a rule of thumb.
- **Crossover vs step-over:**
  - A crossover is now defined as two pushes.
  - Drills that land the crossing foot on its outside edge are called step-overs.
  - Drill 7's "Trains" line now reads "the edge the inside foot pushes from in a backward crossover". This was confirmed against skating.md:523/:536.
- **Smaller fixes:**
  - side-by-side stop: the inside skate is "further forward, towards where you are facing";
  - the mohawk link wording;
  - the anchor forward reference;
  - Key Takeaways rewritten as situation kernels;
  - reasons restored for the off-ice bullets;
  - Sources trailer credits both Hockey Tutorial videos and the sibling pages, including Equipment;
  - "by coaching consensus" and "in coaches' experience" restore the owners' qualifiers.
- **Sixth stride:** the "sixth stride" claim could not be sourced, so it is now "after a few strides".

### Drills
- **Labels:** all text was scaled 1.4×, from about 7 px to 10–14 px at a 388 px column. Right-foot text is #b2570e, 4.65:1 on the ice colour.
- **Moved labels:** labels were moved off collisions. Geometry is unchanged except one lane divider (turn-step-forwards-to-backwards) and one travel arrow (turn-step-360).
- **Diagram review (FIX → SHIP):**
  - the OUT boxes on both continuous crossovers had covered the push-under arrowheads, and now sit beside them;
  - drill 7's badges are renumbered 2, 3, 4 to match the page's steps;
  - the circle-pivot captions are separated;
  - "(stick-and-puck)" added on the punch turn;
  - titles aligned with the page (2 or 3 steps, full step-over, from a slow glide);
  - "left push" / "right push" labels, because the two text colours now have equal luminance.
- **Wording aligned with the page:**
  - "markers" for cones and pucks;
  - "after a few strides";
  - "2 or 3 times" in the backward-crossover labels. This is a wording change to the approved drawing, made so it matches the page. It is flagged to the owner.

## Reviews
| Dimension | Reviewer | Result |
|---|---|---|
| Safety (page) | safety-reviewer ×3 | FIX, FIX, then SHIP |
| Content (page and links) | content-reviewer | FIX on the page (applied); SHIP on the four link pages |
| Rules (neck guard) | rules-verifier | EIH 24.3 reach to public ice is unsettled; "wear one anyway" is the conservative instruction |
| Diagrams | diagram-reviewer ×2 | FIX, then SHIP |
| Sources (C5) | source-verifier | Both URLs return 200 with no redirect and are clean watch URLs. oEmbed confirms the titles and the channel ("Hockey Tutorial", @HockeyTutorialOfficial, the same channelId for both). The captions could not be fetched: timedtext returned empty, and the player-API workaround was refused. The video's chapter markers put the punch-turn T-stop drill at 1:12, before the cited 1:50, so the trailer range is now 1:12–3:43 ("T-stop drill" to "Figure eight turn drill"). The mohawk range 13:30–14:01 sits inside "Advanced drills and closing" (13:26). What each range teaches rests on the owner's ranges and the coordinator's earlier reading of the captions in a browser. |
| Site | site-reviewer | PASS. Nav, prev/next, og, sitemap and search are indexed. 51 figures with unique ids, no overflow from 320 to 1440 px, AA contrast, no console errors. Essentials view hides the drills but KT6 keeps the neck-guard line. |

### C11
- After the first commit gate, the coordinator made two more edits:
  - The punch-turn range in the trailer, to match the chapter markers (above). This is a citation only; no claim changed.
  - The sharp-C drill labels "left foot crosses / every new foot crosses over" became "left foot steps / every new foot steps over". This matches the page's step-over definition and the already-reviewed title. Both affected PNGs were looked at after the change: the forward sharp-C and backward free-front.
- The coordinator edited one drill description after the second diagram review: the sharp-C desc "crossing over every time" became "stepping over every time", which aligns it with its reviewed title.
- The coordinator also made the renderer intro change and the check_callout_flow fix. Both are tool changes, checked by `md_to_speech --self-test` (305 assertions, 0 failures) and by running four test cases.
- Every content edit came from an agent and was reviewed afterwards.

## Dimensions
| Dimension | Coverage |
|---|---|
| D1–D3 (rules) | The page teaches no contact and no rule except EIH 24.3, which was verified. |
| D4 (sources and citations) | source-verifier: titles, channel and URLs confirmed. Ranges checked against chapter markers; captions not fetchable. |
| D5 (provenance) | The trailer names both videos and the owner pages. |
| D6 (self-narration) | Checked by content-reviewer. |
| D7 (cardinal rule) | Drills are presented as coaching craft, not a tested programme, and the page says so. |
| D8 (numeric ownership) | Weak-side ratio, ten to fifteen minutes and lifting guidance all point to their owners. |
| D9 (summary layer) | Key focus, Overview, Common Mistakes and Key Takeaways read whole by content-reviewer and safety-reviewer. |
| D10 (facts) | Not applicable: this off-the-ice page has no facts block. |
| D11 (safety) | safety-reviewer, three rounds. |
| D12 (audio) | Rendered: 23 chunks, with cue placement checked chunk by chunk. |
| D13 (diagrams) | diagram-reviewer. |
| D14 (links) | check_links passes. |
| D15 (site) | site-reviewer, plus a full build after the last edit. |

## Open (carried to the plan)
- Drill labels are about 8.7 px at a 320 px viewport.
- The D6 episodes for this page (NotebookLM and Detailed).
- The owner questions:
  - Drill 20 "more backwards than forward";
  - the punch-jam card name, which differs from the only source found;
  - the "2 or 3 times" label.
- The unshipped card text in 05_turns_b.mjs still says "two pucks".

## What this method could not have found
- Whether a learner reads each drill picture as intended.
- Whether the drills are sound technique for a given skater, a judgement the owner made on 28 Oct.
- What the two videos teach beyond their titles and the card notes.
- Real-phone rendering in Safari or Firefox.
- What a given rink's stick-and-puck rules actually require.
