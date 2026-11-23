# Open items

**The list of work still to do, and nothing else.** How to do the work lives in
[`../working_guidance.md`](../working_guidance.md) (and CLAUDE.md above it). Finished work goes to a review
record in [`../reviews/`](../reviews/), and its row is deleted from here in the same edit. Older closed
rows are archived in
[`plan_open_rows_archive_2026-10-22.md`](../reviews/plan_open_rows_archive_2026-10-22.md) and the
`closed_plan_items_*` files in `../reviews/`.

**This plan was cut from about 470 items to the rows below on 23 November 2026, at the owner's instruction:**

> "I want to consider all items in the plan and ensure none of them are going to negatively impact readability, I also don't want to bother with plan items that are too low in importance, I mean really subtle low priority points should be dropped"

**The bar for a row now:** it stays only if it has one of these:
- a place where a reader is told an act is cheaper than the book, or could be hurt;
- a factual error;
- a real readability or teaching gain;
- an owner decision;
- source work that a gate depends on.

Rows that were harsh-direction-only, citation nits, consistency-only, cosmetic, optional, or speculative sweeps were dropped. **No fix may lengthen a summary layer** (Key focus, Overview, Key Takeaways, facts). Fix by substitution or reordering.

The per-item verdicts are in [`plan_triage_2026-11-23.tsv`](../reviews/plan_triage_2026-11-23.tsv), and the full pre-triage plan, with every row's evidence, is `../reviews/plan_snapshot_before_triage_2026-11-23.txt`. A dropped row can be reopened from there if it turns out to matter. **Apply the same bar before adding a new row.**

**Line numbers drift.** Find a line by its text, and re-test a row before acting on it. Short names: bcb = body_contact_and_battles, dzc = defensive_zone_coverage, ozp = offensive_zone_play, pwtp = playing_without_the_puck, dtr = defending_the_rush.

## In flight

- None. W628 shipped with record `w628_plan_groups_1_3_2026-11-23.md`. The plan triage shipped as 15b6d0cc. W626–W627 shipped as 25cf51b3, with record `w627_usah_match_reword_batch3_2026-11-23.md`. The owner's W521(2) USA Hockey match reword is complete (7df277f1, 161ba351, 25cf51b3).

## 1. Cheaper than the book, or a reader could be hurt

**Check every fix here with a safety-reviewer.** The rest of this section closed in W628.

- **mental_game, crisis box.** It has no youth line, and nothing on disk carries a verified youth helpline number. Fetch the numbers for Childline (UK), Kids Help Phone (Canada) and ISPCC Childline (Ireland) from each provider's own site, verify them, then add one plain line. (W522 (2))

## 2. Factual errors and contradictions

- None open. All four closed in W628.

## 3. Readability: heard aloud

- **"Hockey Canada minor or female hockey… a minor"** uses "minor" in two senses aloud. Reword at no added length. (SG142)
- **on_ice_communication ~:591, facts.** It reads oddly when voiced alone. Reword with no added length. (W349 (6))
- **About 13 "USA Hockey 608(c) must give…" facts lines** voice awkwardly. Reorder each, with no added length. (USA 608 (3))
- **The 293–300-character facts lines** voiced alone: shorten them, rather than only ear-testing. (USA hit-from-behind (h))
- **ozp's long facts lines.** There are 9 class-B splits, and about 70 lines run over 40 words. Shorten or split them without dropping or overstating a tariff. The table is `../reviews/w612_long_facts_rows_2026-11-21.tsv`. (W612 (1), W508 (5))
- **The pk-box caption** voices its letter key, which is noise to a listener. Cut it. (W394 (5))
- **The trapezoid caption's "whatever its standing" hedge** (diagram module). Verify the status, then state it plainly; that is shorter. (delayed-offside (a))
- **One renderer fix for how rule numbers and seasons are voiced.** "Twenty twenty-six to twenty twenty-seven" changes the meaning. This one fix absorbs W446 (1), W451 (2), W501 (7) and W505 (9). (W449 (3))

## 4. Readability: restatement and length

**Measure, then cut. Use a layer test, and keep the one copy a player meets in play.**

- **ozp.** The hit-from-behind tariff is stated about 4 times (:831/:832, :971, :1194–:1196). Needs a safety-reviewer. (W612 (3))
- **goaltender.** The net-front Convention is stated 3 times, and USA Hockey Casebook 607 Note 1 plus Situation 5 are restated in four consecutive units, one of which parses oddly. Merge them. (W612 (4), SG193b–SG195)
- **forechecking.** The turned-back tariff is stated 3 times. (W612 (4))
- **center.** Drop the body copies of CARHA 53(a) at ~:709/:792; the facts line carries it. (W571 (1))
- **bcb.** The charging/head facts block states the IIHF's off-ice discipline 3 times, and the third-man item puts its only ⚠️ on the discretionary limb rather than the mandatory game misconducts. Move the marker. (W411 (4), W438 (3))
- **dtr.** It has two identical 608(c) facts lines plus a third copy, and "meant to injure is a match" is restated at many body sites. Demote the extra copies. (W349 (8), W407 (4))
- **zone_entries.** 608(c) is stated at 8 places. (W347)
- **special_teams.** The Hockey Canada on-the-head ladder is restated in three adjacent paragraphs. (W357 (2))
- **winger.** The net-front ladder is still dense, and the charging/goalie paragraph is heavy. Cut both; add nothing. (W436 (2), SG117)
- **goaltender, risk_management, dtr: What it costs subsections.** These are restated openings and oversized subsections. (page structure (1), (2), (6))
- **Checking from behind across documents.** It is restated on five pages that point to bcb. Measure, then cut. (SG75–SG78)
- **Seven units carry two ⚠️ glyphs**, so removing one is free: the spoken "Important." stays. (W560 (2))
- **Amber on the discretionary clause.** At zone_entries and ozp, the ⚠️ sits on the discretionary clause over the mandatory one. Move it. (amber placement (1))
- **rink_map ~:459.** It leads with "can be legally checked". Reorder it so "play the puck with your stick, never your body" comes first. (W414 (7))

## 5. Diagrams

- **Drill card `site/src/drills/07_off_ice_stick.mjs` ~:482** still says "dangle there". The page now says "dangle there side to side"; match the card. (W628 A)
- **`entry-middle-drive`.** The carrier is drawn with no puck dot, so a reader cannot see who has the puck. (SG95–SG100/SG157)
- **`the-last-player-back`.** "Pressure" sits between two forecheckers with no leader, so it is ambiguous who presses. (SG165)
- **pk-box.** The "uncovered" label may attach to the wrong player at phone width. Use a labelHint. (W409 (4))
- **Practising on Your Own drill labels.** These are 8.7 px at 320 px, which is unreadable on a phone. (drill labels)
- **One browser pass on the ten pages changed in W501–W521:** both themes, plus a 400 px iframe. This absorbs W521 (5) and W507 (7). (W501 (14))
- **Cosmetic, carry only if a module is edited anyway:** in `cross-ice-in-your-own-end`, F3's curve hugs the circle line. (W623)

## 6. Sources and tooling

- **PWHL 2026-27 rulebook.** It was due mid-November. Re-check `thepwhl.com/en/rules` and diff it against the 2025-26 book on disk.
- **EIHL Casebook.** Check whether the copy on disk has been superseded; many Elite League claims rest on it. (W445 (5))
- **Hockey Canada PDF.** Put it on disk, and note in `sources/README.md` that `hc.txt` scrambles Appendix D. (W385 (8))
- **The IHUK-distributed compressed IIHF PDF.** It bears on the In-House edition contradiction. It needs an unfiltered network, so the owner must fetch it.

## Owner decisions needed

**Worth answering:**
- **W405 (1).** Three diagram labels are drawn near the wrong player ("boards-side D", "nearest body", "retrieving"), at faceoffs.mjs ~:245, ~:402 and ~:564. A label naming the wrong player teaches the wrong role.
- **Decision F's reach.** Should the per-book price lists also come out of the Overviews of rules_primer, bcb, uk_rules and special_teams? Price lists in an Overview work against tactics-first.
- **bcb Key focus.** Should it gain "never contact the head"? That is a safety point, and it is something a player does.
- **Decision D.** Accept the multi-sentence per-book passage as shipped ("Keep your skates off a player who is down…"): yes or no.
- **Phone legibility of full-rink diagram labels.** At 400 px they are 7–10 px tall. This is a format call.
- **IIHF 2025/26 URL.** A dead link is cited 49 times. Choose one: keep and label it, re-point it, or rely on the copy on disk. Never delete it. (W431 (1))

**Likely to drop. Say so and they go:**
- **W398 (3).** The C-as-carrier exception to the label convention. This is notation bookkeeping.
- **W391 (3).** USA Hockey's "must" tier in Key focus. It would add rules to Key focus.
- **W396 (1).** Where the DOPS facts lines live. This is structural.
- **Decision B.** "Head or neck" against "head, face or neck". W442 already shipped the wider form.
- **W377 (6).** A lower amber and length ceiling for the getting_started concussion Key Takeaways.
- **SG181.** The faceoffs awareness split, which was previously reverted, and stating USA Hockey 615(a).
- **SG165.** Relaxing a leader that runs over paint.

**Owner-only actions:**
- **Podcasts.** An ear test of a sample of the two-voice episodes.
- **Screen reader.** A real screen-reader pass of the site. (W472 (2))
