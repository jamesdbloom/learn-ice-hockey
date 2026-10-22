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

- **SG30 (22 Oct):** breakouts.md CARHA injuring-screen major is an ejection (30(a)); getting_started R&R 2024-25 policy quotations vs current EIH policies; captions entry-wide, screen-the-goalie-sightline, cross-ice-in-your-own-end, pinch-below. Reviewed (source, safety+rules, site CLEAR). Committing.
- **SG31 (22 Oct):** unisex context. uk_rules :373 adds the girls-on-junior-teams line and the UK sex and gender policy line; body_contact :154 adds "A girl on a junior team plays its format — checking from U14 — while the WNIHL's U16 is non-checking." Source review is CLEAR; needs a build, a site look and the gate. Uncommitted.

## New page: Getting Better on Your Own

The design and its reasoning are in [`getting_better_plan.md`](getting_better_plan.md). Draft drill
diagrams exist (row 2a); nothing ships until the owner says it is ready.

1. **Owner decisions:** all decided 22 Oct: two pages ("Finding More Ice", "Practising on Your Own") in Off the Ice; frames plus some animation; any good videos, vetted; boxes for the UK nations, USA, Canada and a fallback; NotebookLM and Detailed episodes once shipped. **Drill diagrams stay unpublished until the owner reviews each one** (many need tweaks). The pages' text can ship once reviewed. Waiting on the owner: drill-by-drill review of the skating diagrams, and their list of off-ice stick drills to diagram.
   Was: **Owner decisions D1–D6** (section 6 of the design file): one page or two; step frames or animation;
   link existing videos or not; which locations get a "where to look" box; Off the Ice or Getting
   Started; podcast episodes.
2. **Sources on disk:** each governing body's club and programme finder, and a few rinks' public-session
   rules, saved as dated snapshots in `sources/` with `sources/README.md` entries.
2a. **Drill diagram drafts (22 Oct):** all 39 public-skating drills drawn as top-down SVGs with cards in `project/getting_better_drafts/` (kit `lib/draw.mjs`; `build.mjs`, `preview.mjs`); a private preview was published for the owner (link in the 22 Oct session; rebuild with `preview.mjs`). **Owner to confirm** the drill readings in the amber boxes (lemons/"crossing under", soft drag, anchor, jam/punch turns, mohawk form, cross-over jump, "toe down first", one-foot stop in front, parallel vs side-by-side stop, backward stops). Then: content and safety review of the cards; fold the kit into site/scripts diagrams if the style is approved.
3. **Diagram groundwork:** a skate-track view (from above) and one shared stick-figure module for body
   position.
4. **Pilot:** the public-skating rules section and three drills with diagrams (one skating, one stick, one
   exercise), one of them animated. Content, safety, diagram and site review; then the owner reviews
   clarity and visual style.
5. **The rest of the page**, in parallel by section (more ice, stick-and-puck, off-ice stick, off-ice
   exercises, videos), then the full review set and the commit gate. Held back from the site behind a
   draft flag.
6. **Launch** when the owner says it is ready: nav, home-page ways in, Getting Started Route 1; NotebookLM
   and Detailed episodes, and perhaps a Basics episode.

## Owner decisions needed

- **Wave 34 leftovers:** USA Hockey Level 1 wording; caption trim policy; the centre-fly label; delete
  the unused `creaseThePuckDecides` diagram spec in center.mjs, or keep it?
- **Research scope:** does the UK concussion guidance reach Scotland and Northern Ireland? Does IIHF
  202.3 reach British U19 play? What is the British U10/U12 tariff for a hit in non-checking play?

## Content: rules accuracy (each needs a rules-verifier)

- **faceoffs taker's restraining lines:** render Hockey Canada Figure 7 ("Face-Off Restraining Lines", no text layer) to confirm "face-off restraining lines" in 6.2(a) means the L-lines, which faceoffs :733 assumes (errs safe either way). Optionally name PWHL 78.7(iv) beside the NHL/IIHF permission at :719/:733.
- **on_ice_communication KT13 and CM** name the NHL and IIHF for the shorthanded icing exemption but not the PWHL (83.6 has it). Omission; low.
- **breakouts.md Wheel section:** says CARHA's mandatory major on an injuring screen is "a major"; under CARHA 30(a) every major is also a game misconduct (ejection). Check body and facts there, and other pages pricing CARHA 66(e).
- **Optional citation precision:** breakouts and defensive_zone_coverage cite "Hockey Canada 10.1" where
  10.1(i) is meant.

## Content: safety, readability and wording

- **Rules-verifier SG30 notes (harsher direction, minor):**
  - breakouts :213 and :215 say "every CARHA major ends your game". 30(a) exempts an accidental high-stick major, so write "an interference major ends your game" there.
  - The entry-wide caption omits the 69.7 rebound exception, so it implies any rebound-scramble contact kills the goal. Consider "outside a rebound scramble".

- **breakouts Wheel facts block :321 (major, already there before SG30, found by the facts-reviewer 22 Oct):** the block flags the standing screen for NHL/PWHL/IIHF/USAH but says nothing about Hockey Canada or CARHA beyond the injury tier. That leaves out CARHA 49(a)'s duty to avert contact, which carries an ejecting major. The block is at 13/14, so one line fits. Sketch: "Rule: Hockey Canada 8.3 and CARHA 66(a) bar the side with the puck from running interference for the carrier, and CARHA 49(a) adds a minor or a major, which ejects, for not averting contact, so under CARHA give the forechecker the ice". Needs a rules-verifier. Also sweep usah.txt for any general injury-triggered tier.

- **getting_started links eiha.co.uk, which now carries gambling spam (found 22 Oct):** its find-your-local-club page links "UK casinos not on Gamstop", and the site looks abandoned (2019–20 news). England Ice Hockey's live site is englandicehockey.com. Replace the 2 eiha.co.uk Sources links and the "EIHA's club finder" mention (around :616); England has no live club finder (EIH /clubs/ finder section is a placeholder). Do this after the SG30 commit, because getting_started is staged. Needs source-verifier.
- **Getting Started §10 "Named starting points" overlaps Finding More Ice §7's location boxes:** when the new page ships, point the table there.

- **Echoes found by the SG30 site review (wording):**
  - The risk_management cross-ice caption repeats the "Coaching convention…" paragraph straight after it (check_caption_echo).
  - In breakouts, the new 30(a) clause in the CARHA paragraph repeats the next paragraph.
  - In getting_started's trailer, "the two credited below" means two documents but covers three quotations.
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

- **NotebookLM remakes (owner, 22 Oct: remake all seven):** Defenceman, Goalie, Faceoffs, Rules Primer, UK Rules, Game Management, Zone Entries. Generate from the current pages (notebooklm-episode skill / owner), then process and publish as before (build_podcast_audio, upload, podcast.json).

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
