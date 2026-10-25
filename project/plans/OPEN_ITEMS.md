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

(none)
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
   round of feedback (recorded in getting_better_plan.md §6). The private preview is republished.
   - **Waiting on the owner:** a drill-by-drill review. Seven readings are flagged to confirm: the sharp-C
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

- **NotebookLM batch 7 is ready for you (23 Oct):** `.podcast_queue/notebooklm/remake_2026-10-20/batch7/`, built from the corrected pages: 10 Winger, 17 Forechecking Systems, 28 Body Contact and Battles. Same instructions and focus files as batch 6. The published episodes voice cues since corrected: Winger "hip into them"; Body Contact "leaning legal almost everywhere" and "seal with your body"; Forechecking "seal with body position… a human barricade". **The pack was rebuilt again at 20:22 on 25 Oct from the committed pages at 595ce4a** (it includes SG75–SG81). The UK Rules NotebookLM episode was re-transcribed on 25 Oct and makes no post-game discipline claim, so the DOPS changes do not require a regenerate. Optional extras are owner's call: 07 UK Rules and 12 Goaltender ("severe neck pain"), and the four low-priority episodes. Generate when convenient; then I'll transcribe, review, cut and publish as before.

- **body_contact EIHL (owner):** after the 72→54 trim, should the Sources trailer's 14 EIHL mentions be trimmed? Should the nine-line EIHL fighting facts block be cut further (each line is a different penalty)?
- **Wave 34 leftovers:** USA Hockey Level 1 wording; caption trim policy; the centre-fly label; delete
  the unused `creaseThePuckDecides` diagram spec in center.mjs, or keep it?
- **Research scope:** does the UK concussion guidance reach Scotland and Northern Ireland? Does IIHF
  202.3 reach British U19 play? What is the British U10/U12 tariff for a hit in non-checking play?

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
- **breakouts, Hockey Canada 7.3 (non-checking divisions; owner decides whether it belongs):** the partner and wheel material never mentions HC 7.3, so a reader in non-checking HC hockey is not told that leaving their skating lane to make contact (the sliding pick) is penalised: minor, discretionary major plus game misconduct, mandatory on injury, or a match (hc.txt:6002-6040). CARHA 52(a) charging also reaches the sliding pick and is uncited in the section. The Wheel block is now at HARD_MAX 14/14, so this needs a body edit.

- **Repetition pass:** the core_principles pilot (SG42) cut 137 of 6,152 prose words, about 2%, with no limb lost. Most repetition on that page is deliberate: safety limbs, disclosures, and the coaching-choice ask. Gains will be modest per page, so pick the longest pages next. Pilot side findings: the core_principles overview says "these ideas hold whatever system, position or league you play in", which sits uneasily with §1–2; §3's "ninety-six percent" approximates the cited 3.3–4.2%. Read both.
- **Restated rule ladders (the bigger length win, from the SG45 breakouts pass):** repetition passes cut only about 2% a page. The real length is the same rule ladder restated in several sections. Example: breakouts carries the no-change/time-out and shorthanded-icing ladder in §1, §3 and §6. Reducing all but one to a short pointer needs a per-limb layer test (check the facts blocks still carry each locally) and a rules-verifier. Do one page as a pilot first.
- **Spoken "Important." runs:**
  - body_contact was measured on 23 Oct and has only one run of four or more: KT8–11. These are four distinct hazards and none is voiced next door, so the run stays unless the owner rewords it.
  - rules_primer, measured in SG34: no run of four strictly consecutive. One looser run of five in §Broken sticks became four after a merge.
- **Style B body_contact script line 201 "If" restored in the local script (23 Oct).** It still needs to reach the audio in the next Detailed remake: the published episode carries the unconditional wording (tactical, not a rule).
- **Basics wing script** omits the weak-side winger collapsing to the slot, which winger.md relies on. Fix
  in the next Basics remake.

## Diagrams and site

- **Longest voiced captions after SG40:** the four longest were cut, to 966, ~1,220, ~1,230 and ~1,390. Each remaining limb is safety or rule content that no host voices next to the caption. Next longest: run a fresh render.
- **Captions over 800 characters (25 Oct):** 23 of the longest have been trimmed (SG62–SG74). The rest run about 1,250 characters or less, so returns are diminishing. Re-measure diagrams.json before the next batch. Check how 🇬🇧 renders on Windows (often "GB").
- **Fragile caption dependency (guarded, SG74):** forecheck-212-stacked, and forecheck-122 in how_to_watch_hockey, rely on forecheck-212 being embedded immediately before them. scripts/check_caption_pairs.py now reports any break (run it after reordering a host). forecheck-131's source comment copies forecheck-122's adjacency claim, but 131 is not in how_to_watch_hockey; that stale comment is a nit.
- **Faceoff/81.4 follow-ons (low, SG64):** not yet checked: IIHF Situation Handbook rulings on 82.1, the broken-skate sites in winger, goaltender and defender in voiced context, and how HC, CARHA and USAH treat a non-taker's stick-on-stick contact (the books don't define it).
- **PINCH_CAVEATS** (risk_management.mjs, ~870 chars, voiced in four hosts via pinch-centre-high/below) keeps both pinch captions near 1,400; trimming it needs a four-host trace.
- **Leader lines over the token's letter (owner decision, SG59 measurement):** the fix is a small z-order change in rink.mjs (emit leaders before glyphs), but it shortens the visible leader by the token radius. Measured over 612 leaders in 185 diagrams: 60 vanish entirely and 314 show under 2 units if drawn under the halos; drawing between halos and bodies, none vanish and 297 show under 2. That is the visible outcome the owner already rejected once, so it needs longer leaders (LEADER_MIN) or acceptance of strike-through. Owner's call.
- **Labels crossing the blue line (worklist, SG59):** there is no checker. A census estimated 194 player labels in 99 diagrams overlapping a blue-line stroke, many legitimately on point players standing on the line. The placer (`placeLabels`) does not reserve painted lines for play diagrams. dz-walk-down-man's two labels were fixed with `labelHint` in SG59. Systemic options: reserve blue-line strokes (moves up to 99 diagrams) or a thicker LABEL_HALO. Owner's call; per-diagram hints otherwise.
- **🇬🇧 shown as "GB" mid-prose on Windows (owner decision, SG73 site review):** 187 flags in <main>, 101 of them not at the start of a block across 19 pages, with no text fallback. On Windows they render as the letters GB glued to the next word, e.g. "…next game. GB The IIHF writes…". Options: (a) keep the flag only where it opens a block or note; (b) wrap it in <span role="img" aria-label="UK">, which fixes screen readers but not the visible GB; (c) replace mid-prose flags with "In Britain" wording. Conditioning's Key focus flag was dropped in SG73 because it repeated "In the UK".

## Podcasts

- **Basics listenability (owner, 25 Oct):** the Basics episodes are harder to listen to than NotebookLM; "here is why" is overused and the facts are too dense. **Owner's direction, 25 Oct:**
  - **25 Oct evening: the owner APPROVED Pilot B** (two voices; COACH = L0Dsvb3SLTyegXwtm47J, PLAYER = b5Ggo9o15QPFEkYe1Mui). Remake all 13 Basics in this format. Add a **panic-passing** point (passing without looking): a dedicated idea in passing-and-catching, and a brief nod elsewhere where natural. Pipeline per episode: write → content-review → synthesise with --dialogue → transcript check → publish.
  - **Basics v2 progress (25 Oct, 20:40):**
    - **Live:** passing-and-catching, teamwork, playing-wing and carrying-the-puck (uploaded).
    - **Encoded but NOT uploaded:** shooting. The AWS SSO login expired mid-run. ⚠️ Do NOT commit site/src/data/podcast-basics.json until shooting is uploaded.
    - **Reviewed SHIP, still to record:** playing-without-the-puck, playing-centre, how-a-game-works, gear, skating, defending, playing-defence and playing-goal.
    - Scripts: podcast_style_b/basics/v2/. Recording: scratchpad basics_v2/make.sh <slug>.
  - **NEXT, after all Basics v2 are published (owner, 25 Oct):** apply the same two-voice treatment to the Principles (Style B detailed) episodes. First pilot ONE episode with PLAYER = QngvLQR8bsLR5bzoa6Vv (COACH = L0Dsvb3SLTyegXwtm47J). The owner hears it before the rest are remade.
  - Two voices: COACH = L0Dsvb3SLTyegXwtm47J, PLAYER = b5Ggo9o15QPFEkYe1Mui.
  - Keep EVERY point per episode.
  - Apply all the other changes: scenes, terms defined in context, a varied "why", analogies, "what would you do?" moments and a short recap.
  - Pilot A (single voice, 5 ideas) was sent to the owner.
  - Pilot B v2 (7 ideas) was reviewed (FIX applied), recorded with --dialogue (14m14s, 6,330 credits; dialogue bills about half as much), checked by transcript at 0.992, and sent to the owner on 25 Oct. Which voice speaks each line was not machine-checked; that needs the owner's ear. Waiting on the owner's choice between A and B.
  - After approval, remake all 13. Hold the playing-wing re-record until then.

- **Published audio vs the SG44–49 safety corrections (SG50 audit, 23 Oct):**
  - **ElevenLabs:** 7 scripts were fixed and passed safety review (SHIP), and re-synthesis is in flight: Winger, Switching Positions, Skating, OZP, Puck Handling and Centre Detailed, plus Basics "Carrying the Puck". Each is published once it is checked.
  - **NotebookLM (whisper transcripts):** three need the owner to regenerate them; prepare a **batch 7** pack from the corrected pages after the content commit.
    - **REGENERATE, HIGH:** Winger 08:54 "put your back side and your hip into them" (no scope). Body Contact 02:11 "leaning… legal almost everywhere" (no HC/CARHA) and 14:21 "seal that lane with your body". Forechecking 27:26 "seal with body position… a human barricade" (no scope).
    - **Low:** Puck Handling, OZP, Team Play and Skating (scoped nearby).
    - **Clean:** Switching Positions and Centre.
    - **Also heard:** Body Contact 15:21 "fend off… with your free hand… flat palm to block their body" (unscoped).
    - Confirm each hit by ear before regenerating.

- **Feed guard follow-on (low):** SG40 froze the Basics season (8) and blocks a section-count change. Still unguarded: reordering sections, or moving a document between sections, would renumber the per-document seasons and episodes, and feed titles are not frozen. Only guids and dates are. Decide whether to freeze `itunes:season`/`itunes:episode` for live items.

- **"Severe neck pain" in NotebookLM 07 (UK Rules) and 12 (Goaltender):** the page and CRT6 say to treat any neck pain as an ambulance call. The word could not be cut cleanly and the episodes shipped (batch 6, 23 Oct). Owner's call whether to regenerate.

## Renderer and podcast tooling

- **synthesize_style_b.py has no `--doc-id`:** only matters if production is tracked by doc id. Low.

## Checkers (scripts/ — change between waves, never during one)

- None open.

## Sources

- **PWHL 2026-27 rulebook:** expected around mid-November 2026; re-check `thepwhl.com/en/rules` then and diff against the 2025-26 book on disk.
- **SIHA Discipline Policy:** unreachable from this network (local proxy); retry elsewhere.
- **Link baseline size measures (low, from the 23 Oct fix):** the checker now accepts a match against either the decoded or the on-wire size, so false 75–80% flags are gone. Residual gap: an untagged row can hide a real ~4x shrink or growth by coincidence. Refresh baselines with --write-baseline (rows are now tagged [bytes=decoded]) to close it.
- **HECC wording (nit, SG55):** body_contact :913 says "HECC's … page asks" while the trailer now says the reproduced brochure asks. Both are true. In :2139's trailer, "all three sources" sits near "those four".

- **602(a) suspension rollout (SG81, 25 Oct): about 130 sites done.** Still to do:
  - Cap-blocked facts lines: bcb :577/:578/:675, forechecking :625/:626, OZP :646/:926/:931, winger :518–520/:748, game_management :900. Restructure each with a verifier, or rely on the page-level statement.
  - "Plan on one/it (602(a))" sites the census missed: about 15 in the rules_primer body-fouls section, plus special_teams :1121, goaltender :1396, rules_primer :1110/:1112, center :425, bcb :670/:676/:729/:733/:1716/:1740/:1965, equipment :813, conditioning :608 and reading_diagrams :301.
  - forechecking :862: restore "or one meant to injure" if room.
- **rules-verifier.md source inventory:** it names 48 of 60 `sources/*.txt` files. The 12 missing are eih_code_of_conduct_2026, eih_dops_2026-27 (+layout), five eih_web_* pages, ihuk_club_regs_2026-27 (+layout) and ihuk_sex_gender_policy (+layout).
- **Cross-document ladders (from SG75):** checking from behind is restated on five pages, each pointing to body_contact_and_battles as owner. Not yet measured; this is probably the larger saving. Also sweep for other rules pricing a hit from behind (boarding, IIHF 21) before any cut.
- **Cross-document ladder demotion: DONE (SG76–SG78, 25 Oct), about 12,200 words.** Leftovers:
  - glossary :287 (stick reach from behind) and :425 (a six-book cross-check ladder);
  - winger's two facts blocks at 14/14 need a ruling on moving limbs between layers;
  - untagged single-book ladder bullets remain in dzc's base shape and in defender's net-front and gap-control sections;
  - risk_management :298 and :325 charging lines, and :751–777 slew-foot from-behind limbs;
  - special_teams :1103 lost "for checking or charging one" in a trim. If the line is edited again, restore the point that body-checking a goalie in the crease or privileged area is never a bare minor (USAH 607(c)).
- **DOPS follow-ons (SG76 landed the core):**
  - Sweep the sibling pages for the old "no British ban / discretionary / Rule 28" premise: team_play_and_culture, mental_game, goaltender, getting_started and the position pages.
  - Check the other C.2-priced acts (slew-foot :1786 and cross-check :1459 in bcb) for an implied "the IIHF major is the whole cost".
  - The DOPS points ladder (App D/E: 10 points means a ban) is stated nowhere.
  - rules-verifier.md's source table omits eih_dops.
  - The superseded 2022 IIHF Disciplinary Code is not on disk.
- **HC 7.5 "ejects at every tier" simplification:** Interpretation 3 (a low-speed pin from behind is permitted) and Interpretation 1 (a stationary cross-check from behind is 9.2) are unvoiced. This is not unsafe; just note it if any line claims more.
- **Owner decision: should a CARHA match carry the 32(d) next-game ban? (raised 25 Oct)**
  - **Your 19 Oct ruling:** add "at least a one-game suspension" wherever a CARHA major, match or game misconduct is priced.
  - **The rule text:** 32(d) covers only "A Game Misconduct assessed to a player for receiving a Major penalty". A match falls under 34(a) instead: "will not be permitted to take part in any further games until their case has been dealt with by the Chairman".
  - **What the pages say now:** match sites cite 34(a). Should they also say "at least one game"?
- **DOPS wave 2: DONE (SG79, 25 Oct).** Fixed the slur sites on mental_game and team_play, added one body sentence and one facts line per page, and added penalty points to uk_rules. Still open:
  - winger, risk_management and game_management were done in SG80. Winger's two from-behind facts blocks are at 14/14, so the ban is in its body only. Follow-up: add the facts line to another winger block that has room, as game_management did.
  - **Optional:** add the Appendix J under-16 limb wherever a page addresses juniors.
  - Deliberately left low (all discretionary "up to" bands, add only if a page is edited anyway):
  - winger :555 (cross-check), :556/:746/:793
  - glossary :291
  - puck_handling :321 (kicking)
  - zone_entries :253/:839
  - defending_the_rush :727/:716
  - shooting :175/:245
  - team_play :287 (third man in, up to 1) and :485 (leaving the bench, up to 1)
