# Open items

**The list of work still to do, and nothing else.** How to do the work lives in
[`../working_guidance.md`](../working_guidance.md) (and CLAUDE.md above it). Finished work goes to a review
record in [`../reviews/`](../reviews/), and its row is deleted from here in the same edit. Older closed
rows are archived in
[`plan_open_rows_archive_2026-10-22.md`](../reviews/plan_open_rows_archive_2026-10-22.md) and the
`closed_plan_items_*` files in `../reviews/`.

**Every row below was re-tested against the files on 22 October 2026** by three triage agents; the
verdicts and evidence are in [`plan_cleanup_2026-10-22.md`](../reviews/plan_cleanup_2026-10-22.md). Line
numbers drift, so find a line by its text, and re-test a row before acting on it.

## In flight

- **SG103 in flight (27 Oct, uncommitted):** A goaltender (:1427 "may be", :1411 citations, :789 antecedent); B defender and center (DOPS under-16 limb, "never for a whistle"); C risk_management (IIHF hooking/tripping majors eject in British women's/junior); D forechecking_systems.md (:617, :626, optional 602(a)); E dzc :177 three seconds and bcb :1150 whistle; F uk_rules DOPS C.1 boarding minor; G diagrams (forecheck-122 tag 2, labels over dots, relax warnings). CARHA "at least one game" sweep done: no match site carries it, so that row is closed.

- **SG95–SG100: DONE** (a6d7ff5, e6d0749, 899148b, 586a353, 4309ba0). Open carry-overs:
  - **Closed 27 Oct** (record: project/reviews/ihuk76_lateness_and_eihl_version_2026-10-27.md): In-House Rule 76 and lateness are researched and still unsettled by any British source, so faceoffs :799/:814 stay as written. The EIHL Casebook on disk is v1.1 (sources/README :2215); its footers are stale;
  - The IHUK referee site distributes "IIHF_Rule_Book_2026-27-compressed.pdf" to officials. The proxy blocked the fetch (403). Fetch it from an unfiltered network and check whether it is the 2026/27 book; that bears on the In-House edition contradiction in sources/README;
  - Glossary "sealing" is defined as "arriving second", while several diagrams and glossary lines use it for a single forechecker (commit-gate note, SG102). Nit: decide whether the definition should cover both;
  - diagrams (SG101 c5df861; SG102 fixed the three majors: cross-ice-in-your-own-end F1 now "seals D1" with no leader, dz-walk-down-man tag 2 and forecheck-212 tag 1 via badge `along`, which may now pass the midpoint, and "takes the weak side" next to F1). Open:
    - forecheck-122 tag 2 touches F2's glyph by about 0.67 ft (minor). Retry with `along` past the midpoint, off the far side of the bars;
    - 16 relax warnings remain; about 29 labels sit over faceoff dots;
    - cosmetic: the goal line runs through "seals D1", and the circle edge through "takes the weak side" (both broken by the halo);
    - dz-walk-down-man tag 2 sits about 1.2 ft above "goes with the carrier" (minor).
- **SG93 and SG94: DONE (ec6d1d6, fe91058).** Carry-overs:
  - DOPS C.1 lists "Boarding"; the corpus says "a boarding major" (uk_rules :413). Is a boarding minor also a C.1 trigger? C.1's triggers come from the owner page, not the C.1 text.
  - The DOPS carriers at defender :496, center :773 and defender :910 omit the under-16 written-warning limb that the owner page carries.
  - goaltender :1427 says "is reviewed" where the source says "may be" (errs harsh); goaltender facts :1411 is 300/300 and lost the USAH 636(c) and HC 2.2(i) citations.
  - goaltender :789 "those three books' rule" is a check_facts_antecedents hit with the antecedent in the same line.
- **SG91 and SG92: DONE and pushed** (86aec8e, 0d5b275, 97db549, dd29454; records sg91a–e, sg92). SG92 carry-overs:
  - risk_management :648, :664, :692: the IIHF hooking and tripping majors eject in British women's and junior hockey (the same shape as :318);
  - forechecking :1041, :1047, KT8, KT9 speak of ejection without the 602(a) match (incomplete, not false; optional);
  - dzc :177 says "more than three seconds", while the six SG92 sites say "a minor by three seconds" (both are Casebook wording; make them consistent if touched);
  - forechecking :617 voices "reckless" against both tiers (errs harsh); :626 "that pair" is a short pointer;
  - defender :214 and bcb :1150 "never for a whistle" is elliptical voiced alone.
- **Diagram labels, halo and feed freeze: DONE (9737b01, record sg93_diagram_leaders_and_feed_freeze).** Carry-overs: a live episode not yet in LIVE_NUMBERS is only NOTE-guarded (add each new episode to LIVE_NUMBERS in its publishing commit); no checker finds leaders hidden along painted lines or labels stacked into one block, and about 160 changed diagrams were checked by script only.
- **NotebookLM batch 9: DONE and published (8cd3142, record notebooklm_batch9).**
- **Practice from SG44:** C4 names rules-verifier, so any wave that adds or changes a rule claim dispatches a rules-verifier, not only a safety-reviewer. The process document is not loosened.

## Captions and small rules notes (23 Oct)

- **Optional: rush-trailer caption's middle sentence runs about 50 words aloud; it could split at "the first wave gets the net". Optional hardening for defender-two-on-one: "a slide that takes the carrier down can be called as tripping".**

## New page: Getting Better on Your Own


The design and its reasoning are in [`getting_better_plan.md`](getting_better_plan.md). Two pages, "Finding More
Ice" and "Practising on Your Own", go in Off the Ice. Owner decisions D1–D6 were all made on 22 Oct and are
recorded in that file's §6. **Drill diagrams stay unpublished until the owner has approved each one.** Page text
can ship once it has been reviewed.

1. **Finding More Ice: SHIPPED 22 Oct (0337d6a).** Optional: "faces suspension and fines" (R&R 14.5), changed together in getting_started KT8 and CM :654.
2. **Skating-drill diagrams:** 48 drafts in `project/getting_better_drafts/`, redrawn with the owner's first
   round of feedback (recorded in getting_better_plan.md §6). The private preview was republished on 26 Oct as a new artifact: https://claude.ai/artifact/51YTdiV8o8byV4nAZJMUaJ (the old link was deleted).
   - **Owner review round 2 (27 Oct), applied and republished (version 2):** Drills 1 and 5 are now alternating inside-edge arcs; 4 and 6 are alternating sharp outside-edge Cs with a crossover; 7 is backward outside-edge stepping along a blue line; the mohawks (19, 20) are curved, with a pivot on the leading foot; 22, the crossover start, was redrawn from the IIHF, Hockey Canada and Ice Hockey Systems coaching sources; 23 and 24 zig-zag diagonally between stops. Still to confirm: hand or boot (1, 5); which side of the line each foot lands (7); inside or outside edges in the mohawk (19); whether the stepping mohawk pivots (20); the lead toe opening (22); the backward stop (24).
   - **Owner review round 3 (27 Oct), applied:** Drill 30 is placed one foot at a time; the anchor (33) is a heel drag, toe up and ankle collapsed; the soft drags (32, 34) are toe drags, heel up. The owner said drills 35+ look correct.
   - **Web check of all 48 (27 Oct, owner request), republished as version 3.** Fixed: Drill 7's glide curl (outside edge), Drill 14's lifted-foot side, Drill 21's V-start strides (Hockey Canada Coach 1). Differences from the owner's rulings, noted in the cards and not changed: Drill 6 (figure skating crosses behind); Drill 22 (Hockey Canada pushes off the far leg first and lands the cross at about 90°); Drill 33 (the owner's example page describes an inside-edge pivot); punch jam (a fake and cut) and punch turn (a half stop). Open: Drills 29 versus 30 (two or three placements per half turn); Drill 12 (no source); Drills 27–28 (no source names crossing-under lemons).
   - **Waiting on the owner:** the rest of the drill-by-drill review. Seven readings are flagged to confirm: the sharp-C
     outside edge, step-overs alternating, backward outside-edge C-cuts, the backward crossover-and-stop shape,
     scissor stop foot order, which foot stops on the outside-edge one-foot stop, and "(toe down first)".
   - Once the owner approves a diagram: fold the kit into the site's diagrams.
3. **Off-ice stick-drill diagrams:** waiting on the owner's list.
4. **Practising on Your Own (text):** first draft written 23 Oct at `project/getting_better_drafts/practising_on_your_own.md`. It runs about 6,580 words: 46 drill entries taken from the cards, etiquette, using the session, off-ice principles, and a pointer to conditioning. It holds HTML-comment placeholders for the stick list and the videos; remove both before the move, because md_to_speech may voice them.
   - **Held for the owner's drill review,** since the text inherits the cards. Open questions:
     - mohawk meaning;
     - jam, punch-jam and punch turns;
     - which stops end the backward drills;
     - "touch the ice" or "touch the boot";
     - the step-turn reading;
     - drill order (the drafts' order is not easiest-first);
     - two card edits: "an imaginary point" instead of cones, and "head pointing" instead of "head and stick".
   - **Then:** content review (duplication with Skating and Practice and Development), safety review (jumps, hard stops, helmet advice), cut for length, and move to content/ like Finding More Ice.
5. **Diagram groundwork:** a skate-track view (from above) and one shared stick-figure module for body position.
   Animated SVGs only where motion is the point.
6. **Launch:** nav, home-page ways in, Getting Started Route 1. Then NotebookLM and Detailed episodes for each
   page; no Basics episode.

## Owner decisions needed

- **ElevenLabs re-recordings: DONE 24 Oct.** All six corrected episodes are published: Switching Positions, Basics carrying-the-puck, Skating, Puck Handling, Centre and Offensive Zone Play. Transcripts match the script bodies, HEAD returns 200 and range returns 206. The Body Contact Detailed script's missing "If" is restored locally but not re-recorded; that is a low-priority row.


## Content: rules accuracy (each needs a rules-verifier)


## Content: safety, readability and wording

- **Out-of-play follow-ons (minor, SG53):**
  - **IIHF citation case, remaining (cosmetic, SG55):** the corpus mixes "NHL and IIHF 63.2(x)" with "NHL 63.2(x), IIHF 63.2(X)". Lowercase IIHF limbs remain in goaltender (~12), risk_management, puck_handling, faceoffs :930, time_and_space :542, special_teams :775/:902/:1277, playing_without_the_puck :350/:353, game_management :1184/:1194 (39.4(II)) and defender :79/:215. The defender sites stay joint on purpose, because the slash form reads aloud as "clause two or clause two". Low value; do it only alongside other edits.
  - **game_management :143.** HC 6.4(a) Interpretation 1 limits the rule to a puck last touched in the end zone; the line does not carry that (harmless).

- **Contact wording, remaining (SG56):** all 31 pages carrying seal, ride, pin or lean wording, and the turn-back wordings, are now swept (SG56).
  - **Attacker's "body on the player" (SG58):** body_contact :1264 (facts) and :1277 tell the screener "eyes on the puck, body on the player". The defender's cue is now "beside", and the next In short says "touching nobody". Under CARHA 49(a), "stands in front of an opponent for the purpose of making contact" reaches an attacker leaning on a defender. A reader needs to decide whether this means the attacker's own contact.
  - **Steering verbs, remaining (low, SG61):** defending_the_rush :249 "A carrier pushed to the wall" and :415 "they are pushed wide" are passive, and :249 carries its own limbs. Sweep "force them", "drive them into" and "run them to" if touched.
  - **Late-hit follow-ons (SG57):** USA Hockey allows a check only on a player in *control* of the puck, while the corpus says "has the puck". This is left for readability.
  - **Not swept:** cues outside the vocabulary, such as "finish", "take the man after the poke", "use your size", "tie them up".
- **Restated ladders: approach exhausted on breakouts (SG51).** The second pilot saved only 20 words, because §1 was already in compressed form and the nearby facts blocks don't carry the tiers. Total across both pilots: about 250 words. Not worth repeating page by page; revisit only if a page shows a full ladder restated three or more times.

- **Repetition pass:** the core_principles pilot (SG42) cut 137 of 6,152 prose words, about 2%, with no limb lost. Most repetition on that page is deliberate: safety limbs, disclosures, and the coaching-choice ask. Gains will be modest per page, so pick the longest pages next. Pilot side findings: the core_principles overview says "these ideas hold whatever system, position or league you play in", which sits uneasily with §1–2; §3's "ninety-six percent" approximates the cited 3.3–4.2%. Read both.
- **Restated rule ladders (the bigger length win, from the SG45 breakouts pass):** repetition passes cut only about 2% a page. The real length is the same rule ladder restated in several sections. Example: breakouts carries the no-change/time-out and shorthanded-icing ladder in §1, §3 and §6. Reducing all but one to a short pointer needs a per-limb layer test (check the facts blocks still carry each locally) and a rules-verifier. Do one page as a pilot first.
- **Spoken "Important." runs:**
  - body_contact was measured on 23 Oct and has only one run of four or more: KT8–11. These are four distinct hazards and none is voiced next door, so the run stays unless the owner rewords it.
  - rules_primer, measured in SG34: no run of four strictly consecutive. One looser run of five in §Broken sticks became four after a merge.

## Diagrams and site

- **Longest voiced captions after SG40:** the four longest were cut, to 966, ~1,220, ~1,230 and ~1,390. Each remaining limb is safety or rule content that no host voices next to the caption. Next longest: run a fresh render.
- **Captions over 800 characters (25 Oct):** 23 of the longest have been trimmed (SG62–SG74). The rest run about 1,250 characters or less, so returns are diminishing. Re-measure diagrams.json before the next batch. Check how 🇬🇧 renders on Windows (often "GB").
- **Fragile caption dependency (guarded, SG74):** forecheck-212-stacked, and forecheck-122 in how_to_watch_hockey, rely on forecheck-212 being embedded immediately before them. scripts/check_caption_pairs.py now reports any break (run it after reordering a host). forecheck-131's source comment copies forecheck-122's adjacency claim, but 131 is not in how_to_watch_hockey; that stale comment is a nit.
- **Faceoff/81.4 follow-ons (low, SG64):** not yet checked: IIHF Situation Handbook rulings on 82.1, the broken-skate sites in winger, goaltender and defender in voiced context, and how HC, CARHA and USAH treat a non-taker's stick-on-stick contact (the books don't define it).
- **Labels crossing the blue line (worklist, SG59):** there is no checker. A census estimated 194 player labels in 99 diagrams overlapping a blue-line stroke, many legitimately on point players standing on the line. The placer (`placeLabels`) does not reserve painted lines for play diagrams. dz-walk-down-man's two labels were fixed with `labelHint` in SG59. OWNER RULED 26 Oct: a thicker LABEL_HALO (in progress, with the leader fix).
- **🇬🇧 flag wave: DONE (SG84, 25 Oct; follow-ons SG93, SG95).**

## Podcasts

- **Podcasts: all published.** Basics (13, two-voice, new PLAYER voice 26 Oct), Principles (39, two-voice), and NotebookLM (all 39; batches 7–9 regenerated). Open: an ear test of a sample of the two-voice episodes (owner); add each new episode to LIVE_NUMBERS in its publishing commit.




## Renderer and podcast tooling

- **synthesize_style_b.py has no `--doc-id`:** only matters if production is tracked by doc id. Low.

## Checkers (scripts/ — change between waves, never during one)

- None open.

## Sources

- **PWHL 2026-27 rulebook:** expected around mid-November 2026; re-check `thepwhl.com/en/rules` then and diff against the 2025-26 book on disk.
- **SIHA Discipline Policy:** unreachable from this network (local proxy); retry elsewhere.
- **Link baseline size measures (low, from the 23 Oct fix):** the checker now accepts a match against either the decoded or the on-wire size, so false 75–80% flags are gone. Residual gap: an untagged row can hide a real ~4x shrink or growth by coincidence. Refresh baselines with --write-baseline (rows are now tagged [bytes=decoded]) to close it.
- **HECC wording (nit, SG55):** body_contact :913 says "HECC's … page asks" while the trailer now says the reproduced brochure asks. Both are true. In :2139's trailer, "all three sources" sits near "those four".

- **602(a) suspension rollout: DONE (SG81–SG83, SG88 on 26 Oct).** The cap-blocked facts lines were restructured (record: project/reviews/sg88_602a_cap_blocked_2026-10-26.md). Left by design: OZP :646, which no rewrite fits (:645 and the body carry the clause), and the bcb kneeing table cell (the clause would make the renderer drop the table). Still open:
- **Cross-document ladders (from SG75):** checking from behind is restated on five pages, each pointing to body_contact_and_battles as owner. Not yet measured; this is probably the larger saving. Also sweep for other rules pricing a hit from behind (boarding, IIHF 21) before any cut.
- **Cross-document ladder demotion: DONE (SG76–SG78, 25 Oct), about 12,200 words.** Leftovers:
  - winger's two facts blocks at 14/14 need a ruling on moving limbs between layers;
  - untagged single-book ladder bullets remain in dzc's base shape and in defender's net-front and gap-control sections;
- **DOPS follow-ons (SG76 landed the core):**
  - The DOPS points ladder (App D/E: 10 points means a ban) is stated nowhere.
  - The superseded 2022 IIHF Disciplinary Code is not on disk.
- **HC 7.5 "ejects at every tier" simplification:** Interpretation 3 (a low-speed pin from behind is permitted) and Interpretation 1 (a stationary cross-check from behind is 9.2) are unvoiced. This is not unsafe; just note it if any line claims more.
- **DOPS wave 2: DONE (SG79, 25 Oct).** Fixed the slur sites on mental_game and team_play, added one body sentence and one facts line per page, and added penalty points to uk_rules. Still open:
  - **Optional:** add the Appendix J under-16 limb wherever a page addresses juniors.
  - Deliberately left low (all discretionary "up to" bands, add only if a page is edited anyway):
  - winger :555 (cross-check), :556/:746/:793
  - glossary :291
  - puck_handling :321 (kicking)
  - zone_entries :253/:839
  - defending_the_rush :727/:716
  - shooting :175/:245
  - team_play :287 (third man in, up to 1) and :485 (leaving the bench, up to 1)
