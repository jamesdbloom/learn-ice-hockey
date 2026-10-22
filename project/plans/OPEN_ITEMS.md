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

- **SG33 (23 Oct):** the general "CARHA major" scope fixes passed review; committing.

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

- **Wave 34 leftovers:** USA Hockey Level 1 wording; caption trim policy; the centre-fly label; delete
  the unused `creaseThePuckDecides` diagram spec in center.mjs, or keep it?
- **Research scope:** does the UK concussion guidance reach Scotland and Northern Ireland? Does IIHF
  202.3 reach British U19 play? What is the British U10/U12 tariff for a hit in non-checking play?

## Content: rules accuracy (each needs a rules-verifier)

- **faceoffs taker's restraining lines:** render Hockey Canada Figure 7 ("Face-Off Restraining Lines", no text layer) to confirm "face-off restraining lines" in 6.2(a) means the L-lines, which faceoffs :733 assumes (errs safe either way). Optionally name PWHL 78.7(iv) beside the NHL/IIHF permission at :719/:733.
- **on_ice_communication KT13 and CM** name the NHL and IIHF for the shorthanded icing exemption but not the PWHL (83.6 has it). Omission; low.
- **Optional citation precision:** breakouts and defensive_zone_coverage cite "Hockey Canada 10.1" where
  10.1(i) is meant.

## Content: safety, readability and wording

- **defensive_zone_coverage :597 (minor, harsher direction):** "at least a one-game suspension on that (32(d))" also covers an injuring accidental high stick, which 32(d) exempts. Sketch: "…and a slashing major also brings at least a one-game suspension (32(d))".
- **breakouts, Hockey Canada 7.3 (non-checking divisions; owner decides whether it belongs):** the partner and wheel material never mentions HC 7.3, so a reader in non-checking HC hockey is not told that leaving their skating lane to make contact (the sliding pick) is penalised: minor, discretionary major plus game misconduct, mandatory on injury, or a match (hc.txt:6002-6040). CARHA 52(a) charging also reaches the sliding pick and is uncited in the section. The Wheel block is now at HARD_MAX 14/14, so this needs a body edit.
- **zone_entries facts citation consistency (minor):** :434's goal clause has no cite (298/300), and PWHL 71.3 is uncited on :349 and :393. Optional: add "and bans you a game or more (32(d))" to the 66(b) major at :376.
- **Echoes found by the SG30 site review (wording):**
  - The risk_management cross-ice caption repeats the "Coaching convention…" paragraph straight after it (check_caption_echo).
  - getting_started §3: "A child who starts later can train with a club team without playing matches" paraphrases EIH's Train-Only option, which the source does not tie to starting later (commit-gate minor).
  - Cosmetic: `"[k]` can break between the quote mark and the bracket at 400px.
- **body_contact EIHL repetition (owner 22 Oct: trim where it's repetition):** keep each distinct EIHL rule once and cut repeated restatements of it. Do this as part of the repetition pass, with a layer test.

- **special_teams and siblings:** check for the shorthanded icing exemption stated for "NHL and IIHF" without the PWHL (83.6 has it).
- **Repetition pass:** the readability waves only split and shortened what check_readability flagged. No
  page has had a pass for repetition and throat-clearing.
- **Spoken "Important." runs of four:** six in body_contact (two new in SG19: kneeing/clipping and
  holding/facemask) and four in rules_primer. Break them where the hazard is voiced next door.
- **Spoken units over 2,500 characters:** 12 corpus-wide (3 in forechecking_systems; most others are
  captions).
- **rules_primer dropped table** (6 columns, 23 rows): the page says every row is set out in words
  earlier; nobody has checked that row by row.
- **body_contact:** "neither can they: you are outnumbered, or tangled up…" lost its "If".
- **Pull-up wording:** "see the numbers on their back" in practice_and_development and
  scanning_and_anticipation, vs "see their numbers" elsewhere. Cosmetic.
- **Basics wing script** omits the weak-side winger collapsing to the slot, which winger.md relies on. Fix
  in the next Basics remake.

## Diagrams and site

- **Captions over 800 characters:** about 82 of 204 after SG27–SG29 (13 of the longest cut). Next longest are around 1,900: entry-wide, screen-the-goalie-sightline, the-puck-decides-not-you, cross-ice-in-your-own-end, forecheck-2-3-lock. Check how 🇬🇧 renders on Windows (often "GB").
- **puck-on-the-far-side caption** still describes its own drawing ("a glyph here has no front…").
- **rule69_clauses.mjs comments** still list entry-wide and winger-offensive-zone-patches as users of CREASE_LINE_IS_THE_CREASE / REFEREE_JUDGEMENT / TABLES_ALLOW_OUTSIDE; update the header comments.
- **PINCH_CAVEATS** (risk_management.mjs, ~870 chars, voiced in four hosts via pinch-centre-high/below) keeps both pinch captions near 1,400; trimming it needs a four-host trace.
- **Leader lines** are drawn after the player glyphs and cross the token's letter (rink.mjs notes the
  fix).
- **No checker** for labels crossing painted lines.
- **dz-walk-down-man "goes with the carrier"** label appears to cross the blue line at every width;
  confirm in a browser.
- **Site look owed:** the 🇬🇧 mid-paragraph in conditioning's Key focus; the special_teams bold run.

## Podcasts

- **Owner sign-off before Finding More Ice gets episodes:** the feed is numbered in site order, so publishing its episodes renumbers 6 live titles ("Off the Ice N ·" for mental_game, team_play_and_culture and how_to_watch_hockey, in both formats). It also shifts the itunes:episode and itunes:order of every later item, including the 13 Basics episodes. pubDates and guids stay frozen (podcast-feed.ts DATED_DOC_IDS). Ask the owner before publishing those episodes.
- **Feed guard gap:** adding a new structure.json *section* would renumber the Basics season (BASICS_SEASON = layers.length + 1) with no guard.

- **NotebookLM remakes (owner, 22 Oct: remake all seven; owner 22 Oct: do them as a BATCH 6 folder, `.podcast_queue/notebooklm/remake_2026-10-20/batch6/`, AFTER the final content edits to those pages land):** Defenceman, Goalie, Faceoffs, Rules Primer, UK Rules, Game Management, Zone Entries. Generate from the current pages (notebooklm-episode skill / owner), then process and publish as before (build_podcast_audio, upload, podcast.json).

## Renderer and podcast tooling

- **md_to_speech `_rule_number_opens_sentence`** treats a possessive "IIHF's." as the letter "s.", so a rule number after a possessive is not capitalised (fixed only inside the new capitals pass).
- **on_ice_communication KT13/CM** omit the NHL/PWHL major-penalty icing exception (body carries it); optional one clause in KT13.
- **synthesize_style_b.py has no `--doc-id`:** only matters if production is tracked by doc id. Low.

## Checkers (scripts/ — change between waves, never during one)

- **check_quote_drift:** no pass that keeps whitespace ("website" vs "web site" scores clean).
- **check_pointers:** cannot see a pointer at another document's unvoiced layer.

## Sources

- **PWHL 2026-27 rulebook:** expected around mid-November 2026; re-check `thepwhl.com/en/rules` then and diff against the 2025-26 book on disk.
- **SIHA Discipline Policy:** unreachable from this network (local proxy); retry elsewhere.
- **getting_started's other R&R 2024-25 quotations** (Safeguarding, Code of Conduct, Social Media): current versions were fetched 22 Oct (scratchpad sg22c/files/policies); compare and move the quotations to them if they changed.
- **link_baseline.tsv:** add the 33 refetched equipment rows and the 5 new source rows (proposed rows saved in scratchpad sg22b and the sg22c report).
