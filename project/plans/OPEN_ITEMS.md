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

- **SG21 (22 Oct):** rules rows on files outside SG20: body_contact (interference facts 21.1, "Important." runs, lost "If"); center + winger (faceoff line/stick scope); zone_entries + glossary (6.11(d)(i), CARHA 32(d)); puck_handling.mjs captions (puck-decides, far-side). Uncommitted.

- **SG22 (22 Oct):** conditioning ice-bath claim scoped (uncommitted, needs review); source-verifier passes on equipment.md citations, the PWHL edition, and EIHL/IHUK documents (report only).

## New page: Getting Better on Your Own

The design and its reasoning are in [`../getting_better_plan.md`](../getting_better_plan.md). Nothing is
drafted yet, and nothing ships until the owner says it is ready.

1. **Owner decisions D1–D6** (section 6 of the design file): one page or two; step frames or animation;
   link existing videos or not; which locations get a "where to look" box; Off the Ice or Getting
   Started; podcast episodes.
2. **Sources on disk:** each governing body's club and programme finder, and a few rinks' public-session
   rules, saved as dated snapshots in `sources/` with `sources/README.md` entries.
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

- **Optional NotebookLM remakes:** Defenceman, Goalie, Faceoffs, Rules Primer, UK Rules, Game Management,
  Zone Entries.
- **"Contents" button below 480 px:** keep ☰, or use a text label?
- **USA Hockey 615(f):** does the three-game suspension stack with 404(b)'s next game? The book is
  silent; the pages say "a three-game suspension".
- **USA Hockey 608(c):** the Casebook 608 Situation 1 units say "plan on a match (602(a))" without naming
  608(c). Is 602(a) enough, or should each name 608(c)?
- **Wave 34 leftovers:** USA Hockey Level 1 wording; caption trim policy; the centre-fly label; delete
  the unused `creaseThePuckDecides` diagram spec in center.mjs, or keep it?
- **Research scope:** does the UK concussion guidance reach Scotland and Northern Ireland? Does IIHF
  202.3 reach British U19 play? What is the British U10/U12 tariff for a hit in non-checking play?
- **body_contact EIHL mentions (74):** no review question was ever written down. Is there something you
  want done about them?

## Content: rules accuracy (each needs a rules-verifier)

- **Faceoff line contact on other pages:** Hockey Canada and CARHA count a skate on the circle as
  encroachment, and they, plus USA Hockey, keep the stick out from between the hash marks. Check center,
  winger, faceoffs and the rest for unscoped "touching the line is allowed" or "stick may be inside".
- **body_contact interference facts line** ("Interference is not capped at a minor — NHL 56.4…"): no
  NHL/PWHL 21.1 limb, and it is at the 300-character cap, so it needs a split or substitution.
- **on_ice_communication shorthanded icing:** NHL and PWHL bar icing when a team is short-handed by a major
  with no player in the box to come out (nhl_rules.txt:8681). Add it to the body, not the Key Takeaway.
- **puck_handling caption `the-puck-decides-not-you`:** "Hockey Canada also counts where you are" reads HC
  10.2(a)(v) as player location; Interpretation 5 rules on puck location.
- **zone_entries:** "Hockey Canada 6.11(d)(i) can whistle a knowing play … but only once made" is narrower
  than the book ("plays or attempts to make a play"). Errs safe; low.
- **language_and_glossary CARHA high stick:** "with at least a one-game suspension (30(a), 32(d))"
  over-reaches for an injuring accidental high-stick major, which 32(d) excludes. Harsher; low.
- **Optional citation precision:** breakouts and defensive_zone_coverage cite "Hockey Canada 10.1" where
  10.1(i) is meant.

## Content: safety, readability and wording

- **faceoffs dzone caption** (faceoffs.mjs, `faceoff-dzone-alignment`): "keep your skates and your stick behind your own hash mark… satisfies every book" omits "and off the circle line" (HC/CARHA encroachment). Shared by center, winger, defender modules.
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

- **Captions over 800 characters:** 92 of 204; the press and pinch captions are about 2,900.
- **puck-on-the-far-side caption** still describes its own drawing ("a glyph here has no front…").
- **Leader lines** are drawn after the player glyphs and cross the token's letter (rink.mjs notes the
  fix).
- **No checker** for labels crossing painted lines.
- **dz-walk-down-man "goes with the carrier"** label appears to cross the blue line at every width;
  confirm in a browser.
- **Site look owed:** the 🇬🇧 mid-paragraph in conditioning's Key focus; the special_teams bold run.

## Renderer and podcast tooling

- **Lower-case sentence starts:** about 400 spoken sentences start lower case, nearly all list numerals
  and headings ("two on two.", "one. A pinch…"). Capitalise them in md_to_speech. Cosmetic.
- **Basics queue state:** build_podcast_audio.py reads `.podcast_queue/state-basics.json` to refuse blocked
  slugs, but nothing writes it. Add `--style basics` to podcast_queue.py, or drop the dead check.
- **upload_podcast_audio.sh comment** ("Deploy the site data first") contradicts the documented order in
  build_podcast_audio.py. Fix the comment only.
- **synthesize_style_b.py has no `--doc-id`:** only matters if production is tracked by doc id. Low.

## Checkers (scripts/ — change between waves, never during one)

- **Unknown flags:** 9 scripts ignore an unknown flag and exit 0 (absolutes, caption_negations,
  chunk_splits, chunk_tails, diagram_quotes, geometry, marker_pairs, plan_rows, secrets) and 3 crash with
  exit 1 (facts, leaders, quote_drift). Give them argparse so they exit 2. Several are gates.
- **check_facts --near:** no warning for blocks at HARD_MAX 14 (42 blocks today; only 4 are listed).
- **check_readability:** joins `> - ` list items inside a blockquote into one "sentence" (a false 70-word
  hit in breakouts).
- **check_callout_flow.classify():** files any `**`-opening line as "own paragraph" wherever its ⚠ sits.
- **check_quote_drift:** no pass that keeps whitespace ("website" vs "web site" scores clean).
- **check_pointers:** cannot see a pointer at another document's unvoiced layer.

## Sources

- **EIHL roster/registration and discipline (DOPS) documents** are not on disk: fetch them, or record
  them as unobtainable.
- **IHUK policy documents** (for example the Sex & Gender Participation Policy cited by
  team_play_and_culture) are not on disk: fetch them, or record them as unobtainable.
- **About 28 equipment.md citations** (HECC, ASTM, CSA, BNQ, ISO) have never been refetched:
  source-verifier pass.
- **PWHL edition:** eleven running headers in the 2025-26 book read "2024 – 2025"; source-verifier to
  confirm the file is the current edition.
