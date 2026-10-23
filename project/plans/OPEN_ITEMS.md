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

- **body_contact EIHL (owner):** after the 72→54 trim, should the Sources trailer's 14 EIHL mentions be trimmed? Should the nine-line EIHL fighting facts block be cut further (each line is a different penalty)?
- **Wave 34 leftovers:** USA Hockey Level 1 wording; caption trim policy; the centre-fly label; delete
  the unused `creaseThePuckDecides` diagram spec in center.mjs, or keep it?
- **Research scope:** does the UK concussion guidance reach Scotland and Northern Ireland? Does IIHF
  202.3 reach British U19 play? What is the British U10/U12 tariff for a hit in non-checking play?

## Content: rules accuracy (each needs a rules-verifier)


## Content: safety, readability and wording

- **breakouts, Hockey Canada 7.3 (non-checking divisions; owner decides whether it belongs):** the partner and wheel material never mentions HC 7.3, so a reader in non-checking HC hockey is not told that leaving their skating lane to make contact (the sliding pick) is penalised: minor, discretionary major plus game misconduct, mandatory on injury, or a match (hc.txt:6002-6040). CARHA 52(a) charging also reaches the sliding pick and is uncited in the section. The Wheel block is now at HARD_MAX 14/14, so this needs a body edit.
- **Echoes found by the SG30 site review (wording):**
  - Cosmetic: `"[k]` can break between the quote mark and the bracket at 400px.

- **on_ice_communication KT13 and Common Mistakes (optional):** neither mentions the NHL 81.6 / PWHL 83.6 empty-box major case, where icing is called while still short; the body carries it. The SG34 agent left it out on purpose: KT13 is already 62 words, and neither sentence is false or permissive. Shortest form if wanted: "…and under the NHL and PWHL, an empty box when a major expires loses it too."
- **Repetition pass:** the readability waves only split and shortened what check_readability flagged. No
  page has had a pass for repetition and throat-clearing.
- **Spoken "Important." runs:**
  - body_contact was measured on 23 Oct and has only one run of four or more: KT8–11. These are four distinct hazards and none is voiced next door, so the run stays unless the owner rewords it.
  - rules_primer, measured in SG34: no run of four strictly consecutive. One looser run of five in §Broken sticks became four after a merge.
- **Spoken units over 2,500 characters:** 12 corpus-wide (3 in forechecking_systems; most others are
  captions).
- **faceoffs :721 (optional):** if the PWHL is added for stick toe in the white, cite 78.7(v).
- **Style B body_contact script line 201 lost its "If"** (`podcast_style_b/` detailed .md/.txt and the script): "You are outnumbered, or tangled…" states as fact what the page gives as a condition. Fix it in the next Detailed remake: "If you are outnumbered, or tangled with someone just as stuck, or losing it here would give them a chance at your net, pin the puck…". The published audio carries it, but it is tactical wording, not a rule.
- **Table rows lose their spoken escalation:** md_to_speech voices table rows without "Important." even when a cell has a ⚠️. Example: the body_contact :1672-1677 "What actually gets called" rows. Check whether each row's hazard is voiced with a marker in prose nearby.
- **Basics wing script** omits the weak-side winger collapsing to the slot, which winger.md relies on. Fix
  in the next Basics remake.

## Diagrams and site

- **Captions over 800 characters:** about 82 of 204 after SG27–SG29 (13 of the longest cut). Next longest are around 1,900: entry-wide, screen-the-goalie-sightline, the-puck-decides-not-you, cross-ice-in-your-own-end, forecheck-2-3-lock. Check how 🇬🇧 renders on Windows (often "GB").
- **PINCH_CAVEATS** (risk_management.mjs, ~870 chars, voiced in four hosts via pinch-centre-high/below) keeps both pinch captions near 1,400; trimming it needs a four-host trace.
- **Leader lines** are drawn after the player glyphs and cross the token's letter (rink.mjs notes the
  fix).
- **No checker** for labels crossing painted lines.
- **check_caption_echo only compares a caption with the block ABOVE it.** A caption that repeats the paragraph below it is invisible to it, as the risk_management cross-ice case showed. `--show` takes an integer, not a diagram id. Extend it to compare the following block too (change between waves).
- **dz-walk-down-man "goes with the carrier"** label appears to cross the blue line at every width;
  confirm in a browser.
- **Site look owed:** the 🇬🇧 mid-paragraph in conditioning's Key focus; the special_teams bold run.

## Podcasts

- **Feed guard gap:** adding a new structure.json *section* would renumber the Basics season (BASICS_SEASON = layers.length + 1) with no guard.

- **"Severe neck pain" in NotebookLM 07 (UK Rules) and 12 (Goaltender):** the page and CRT6 say to treat any neck pain as an ambulance call. The word could not be cut cleanly and the episodes shipped (batch 6, 23 Oct). Owner's call whether to regenerate.

## Renderer and podcast tooling

- **md_to_speech `_rule_number_opens_sentence`** treats a possessive "IIHF's." as the letter "s.", so a rule number after a possessive is not capitalised (fixed only inside the new capitals pass).
- **synthesize_style_b.py has no `--doc-id`:** only matters if production is tracked by doc id. Low.

## Checkers (scripts/ — change between waves, never during one)

- **check_quote_drift:** no pass that keeps whitespace ("website" vs "web site" scores clean).
- **check_pointers:** cannot see a pointer at another document's unvoiced layer.

## Sources

- **PWHL 2026-27 rulebook:** expected around mid-November 2026; re-check `thepwhl.com/en/rules` then and diff against the 2025-26 book on disk.
- **SIHA Discipline Policy:** unreachable from this network (local proxy); retry elsewhere.
- **getting_started's other R&R 2024-25 quotations** (Safeguarding, Code of Conduct, Social Media): current versions were fetched 22 Oct (scratchpad sg22c/files/policies); compare and move the quotations to them if they changed.
- **link_baseline.tsv:** add the 33 refetched equipment rows and the 5 new source rows (proposed rows saved in scratchpad sg22b and the sg22c report).
