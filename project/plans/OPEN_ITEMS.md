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

- **ElevenLabs credits ran out (23 Oct 14:05):** 2,028 left. Corrected re-recordings are pending for Switching Positions (4 of 5 chunks done), Skating, OZP, Puck Handling, Centre and Basics "Carrying the Puck"; about 90k credits needed (upper bound). The published versions of those six still voice the uncorrected cues (ungated spin and cutback; Switching Positions "hip into the checker"). Top up and I'll finish and republish. Winger is already republished.

- **NotebookLM batch 7 is ready for you (23 Oct):** `.podcast_queue/notebooklm/remake_2026-10-20/batch7/`, built from the corrected pages: 10 Winger, 17 Forechecking Systems, 28 Body Contact and Battles. Same instructions and focus files as batch 6. The published episodes voice cues since corrected: Winger "hip into them"; Body Contact "leaning legal almost everywhere" and "seal with your body"; Forechecking "seal with body position… a human barricade". Generate when convenient; I'll transcribe, review, cut and publish as before.

- **body_contact EIHL (owner):** after the 72→54 trim, should the Sources trailer's 14 EIHL mentions be trimmed? Should the nine-line EIHL fighting facts block be cut further (each line is a different penalty)?
- **Wave 34 leftovers:** USA Hockey Level 1 wording; caption trim policy; the centre-fly label; delete
  the unused `creaseThePuckDecides` diagram spec in center.mjs, or keep it?
- **Research scope:** does the UK concussion guidance reach Scotland and Northern Ireland? Does IIHF
  202.3 reach British U19 play? What is the British U10/U12 tariff for a hit in non-checking play?

## Content: rules accuracy (each needs a rules-verifier)


## Content: safety, readability and wording

- **Out-of-play goalie scope, follow-ons (minor, SG52 gate):**
  - breakouts Sources lacks Rule 5.1;
  - goaltender :1638 states HC flatly where its :752 says HC intent is unsettled;
  - special_teams :990 "goalies included" only resolves at the "but" clause;
  - about 15 other files cite 10.1(v)/55(a) and have not been swept for goalie scope.

- **Turn-back moves (low, from SG50):** winger, defender, breakouts and forechecking were swept clean, with no ungated wall cutback, curl or spin. Still unswept wordings: "open up to the middle", "roll off", "peel off", "swing away"; also diagram captions (breakout-wheel, breakout-reverse, winger-dz-reverse).

- **USAH contact-with-puck, remaining (minor):** pages not yet swept for "seal", "ride" or "pin" wordings that permit the same act under USA Hockey.
- **Restated ladders: approach exhausted on breakouts (SG51).** The second pilot saved only 20 words, because §1 was already in compressed form and the nearby facts blocks don't carry the tiers. Total across both pilots: about 250 words. Not worth repeating page by page; revisit only if a page shows a full ladder restated three or more times.
- **breakouts, Hockey Canada 7.3 (non-checking divisions; owner decides whether it belongs):** the partner and wheel material never mentions HC 7.3, so a reader in non-checking HC hockey is not told that leaving their skating lane to make contact (the sliding pick) is penalised: minor, discretionary major plus game misconduct, mandatory on injury, or a match (hc.txt:6002-6040). CARHA 52(a) charging also reaches the sliding pick and is uncited in the section. The Wheel block is now at HARD_MAX 14/14, so this needs a body edit.
- **Echoes found by the SG30 site review (wording):**
  - Cosmetic: `"[k]` can break between the quote mark and the bracket at 400px.

- **on_ice_communication KT13 and Common Mistakes (optional):** neither mentions the NHL 81.6 / PWHL 83.6 empty-box major case, where icing is called while still short; the body carries it. The SG34 agent left it out on purpose: KT13 is already 62 words, and neither sentence is false or permissive. Shortest form if wanted: "…and under the NHL and PWHL, an empty box when a major expires loses it too."
- **Repetition pass:** the core_principles pilot (SG42) cut 137 of 6,152 prose words, about 2%, with no limb lost. Most repetition on that page is deliberate: safety limbs, disclosures, and the coaching-choice ask. Gains will be modest per page, so pick the longest pages next. Pilot side findings: the core_principles overview says "these ideas hold whatever system, position or league you play in", which sits uneasily with §1–2; §3's "ninety-six percent" approximates the cited 3.3–4.2%. Read both.
- **Restated rule ladders (the bigger length win, from the SG45 breakouts pass):** repetition passes cut only about 2% a page. The real length is the same rule ladder restated in several sections. Example: breakouts carries the no-change/time-out and shorthanded-icing ladder in §1, §3 and §6. Reducing all but one to a short pointer needs a per-limb layer test (check the facts blocks still carry each locally) and a rules-verifier. Do one page as a pilot first.
- **Spoken "Important." runs:**
  - body_contact was measured on 23 Oct and has only one run of four or more: KT8–11. These are four distinct hazards and none is voiced next door, so the run stays unless the owner rewords it.
  - rules_primer, measured in SG34: no run of four strictly consecutive. One looser run of five in §Broken sticks became four after a merge.
- **faceoffs :721 (optional):** if the PWHL is added for stick toe in the white, cite 78.7(v).
- **Style B body_contact script line 201 lost its "If"** (`podcast_style_b/` detailed .md/.txt and the script): "You are outnumbered, or tangled…" states as fact what the page gives as a condition. Fix it in the next Detailed remake: "If you are outnumbered, or tangled with someone just as stuck, or losing it here would give them a chance at your net, pin the puck…". The published audio carries it, but it is tactical wording, not a rule.
- **Table rows lose their spoken escalation:** md_to_speech voices table rows without "Important." even when a cell has a ⚠️. Example: the body_contact :1672-1677 "What actually gets called" rows. Check whether each row's hazard is voiced with a marker in prose nearby.
- **Basics wing script** omits the weak-side winger collapsing to the slot, which winger.md relies on. Fix
  in the next Basics remake.

## Diagrams and site

- **Longest voiced captions after SG40:** the four longest were cut, to 966, ~1,220, ~1,230 and ~1,390. Each remaining limb is safety or rule content that no host voices next to the caption. Next longest: run a fresh render.
- **Captions over 800 characters:** about 82 of 204 after SG27–SG29 (13 of the longest cut). Next longest are around 1,900: entry-wide, screen-the-goalie-sightline, the-puck-decides-not-you, cross-ice-in-your-own-end, forecheck-2-3-lock. Check how 🇬🇧 renders on Windows (often "GB").
- **PINCH_CAVEATS** (risk_management.mjs, ~870 chars, voiced in four hosts via pinch-centre-high/below) keeps both pinch captions near 1,400; trimming it needs a four-host trace.
- **Leader lines** are drawn after the player glyphs and cross the token's letter (rink.mjs notes the
  fix).
- **No checker** for labels crossing painted lines.
- **dz-walk-down-man "goes with the carrier"** label appears to cross the blue line at every width;
  confirm in a browser.
- **Site look owed:** the 🇬🇧 mid-paragraph in conditioning's Key focus; the special_teams bold run.

## Podcasts

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

- **md_to_speech "U.S." is not treated as an abbreviation**, despite the `_NON_TERMINAL_ABBREVIATIONS` comment: a rule number after "U.S." would be capitalised. Low priority; no corpus instance is known.
- **synthesize_style_b.py has no `--doc-id`:** only matters if production is tracked by doc id. Low.

## Checkers (scripts/ — change between waves, never during one)

- **check_quote_drift header splices (low):** a quotation whose source sentence is split by a page header containing letters matches the wrong book. The HC 6.2(a) quotation in winger and switching_positions was checked by hand against hc.txt:4587-4594 and is verbatim, so only the tool was wrong. A survey for other quotations that span a header is still owed.


## Sources

- **PWHL 2026-27 rulebook:** expected around mid-November 2026; re-check `thepwhl.com/en/rules` then and diff against the 2025-26 book on disk.
- **SIHA Discipline Policy:** unreachable from this network (local proxy); retry elsewhere.
- **Link baseline size measures (low, from the 23 Oct fix):** the checker now accepts a match against either the decoded or the on-wire size, so false 75–80% flags are gone. Residual gap: an untagged row can hide a real ~4x shrink or growth by coincidence. Refresh baselines with --write-baseline (rows are now tagged [bytes=decoded]) to close it.
- **HECC attribution (minor):** the Heads Up, Don't Duck page is a reproduced brochure credited to Alan B. Ashare MD and the Massachusetts Medical Society. skating :1046 "HECC asks a player" and body_contact :2139 "all three bodies" credit HECC as author; :913 "HECC's page asks" is fine. Also body_contact :881 "begun in 1995 by Dr Alan Ashare": the 1995 date is not on that page, so find its source.
