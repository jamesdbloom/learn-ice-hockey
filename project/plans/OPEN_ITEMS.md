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

- None. W626–W627 shipped as 25cf51b3, with record `w627_usah_match_reword_batch3_2026-11-23.md`. The owner's W521(2) USA Hockey match reword is complete (7df277f1, 161ba351, 25cf51b3).

## 1. Cheaper than the book, or a reader could be hurt

**Check every fix here with a safety-reviewer.**

- **pwtp ~:524, facts.** "CARHA 32(d)… bar an accidental high stick" drops the Note to CARHA 62(b): an accidental high stick that injures still draws a game misconduct (carha.txt ~:2989). Run `check_facts --near` first. (SG172 (1))
- **bcb ~:2130, Common Mistakes.** It says the facemask's "other books run from a minor to a match", but the PWHL's floor is a major plus a game misconduct. Verify, then fix by substitution. (W358 (5))
- **team_play Key focus ~:38.** It says arguing "can be a penalty in itself in every book", where five books say "shall". "Is" is shorter. (SG197 (12))
- **getting_started KT14 ~:721.** "Leave the helmet on; move the player only to clear their airway" is plain text after an amber list. Bold it; this adds no words. (W396 (4))
- **passing_and_receiving ~:227.** It cites only CARHA 53(b), the defenceless-into-boards match. A CARHA reader is never told that every check from behind is a minor plus a game misconduct (53(a)). (readability leftovers (3))
- **forechecking, late-hit timing facts lines.** Heard alone, they imply a timed check is available in games where checking is barred. Reword the lead without lengthening. (SG212 (1))
- **rules_primer ~:443, bold lead.** It says a stick to the head becomes head contact only "once it is more than minimal violence". Under Interpretation 1, a raised stick never goes that low. Reword the lead without lengthening. (readability leftovers (1))
- **shooting, forechecking.** The Hockey Canada off-head permission ends its sentence before the head counterweight, so a listener hears the permission alone. Use the same-sentence form. (mandatory-match (7))
- **dtr, closed list.** The closed list of USA Hockey hits that eject omits the 620(b) head limb. The line is at its cap, so substitute. (USA 608 (b))
- **rules_primer.** It may be missing the deliberate-injury match tier, and NHL/PWHL readers may hear the 41.1 price two chunks late. Route it to rules-verifier, and do not lengthen the summary layer. (delayed-offside (e))
- **Ejection limbs carried nowhere.** These are the misconduct or game misconduct for refusing to go to the bench, and a goalie leaving the crease. Verify the premise against the books first, then place each where a player meets it, not in a summary layer. (W521 (3))
- **mental_game, crisis box.** It has no youth line, so a young reader at risk has no route. Source and verify a number first, then add one plain line. (W522 (2))
- **practising_on_your_own §4.** It never says to wear shoes, not socks, on a tiled floor. That is a slip hazard; add one body clause. (off-ice cards (2))

## 2. Factual errors and contradictions

- **game_management ~:1289 vs goaltender.** Game management says to pull the goalie "at once" on a delayed penalty; goaltender says to wait until your team has the puck. Reconcile them. (coaching (2))
- **Offside "as the puck crosses".** Four sites say this without "completely". Add the one word. (W480 (3))
- **special_teams KT8 ~:1342.** "If the carrier is between you and the puck" contradicts itself, since the carrier has the puck. One-word fix. (W373 (5))
- **faceoffs ~:586, facts.** "Where checking is allowed at all, take the puck…" ties taking the puck to checking games. Delete the clause, which shortens the line. (W351–W352 (3))

## 3. Readability: heard aloud

- **switching_positions ~:293.** "No line change bar injury" mishears aloud. Change it to "except for an injury". (W506 (3))
- **"Ejected from the draw"** (switching_positions) can be heard as a game ejection. Use "waved out". (amber placement (2))
- **"Hockey Canada minor or female hockey… a minor"** uses "minor" in two senses aloud. Reword at no added length. (SG142)
- **game_management ~:651.** "Hockey Canada writes this only…" is an ambiguous pointer. Name "the no-change rule" instead. (W355 (2b))
- **on_ice_communication ~:591, facts.** It reads oddly when voiced alone. Reword with no added length. (W349 (6))
- **About 13 "USA Hockey 608(c) must give…" facts lines** voice awkwardly. Reorder each, with no added length. (USA 608 (3))
- **The 293–300-character facts lines** voiced alone: shorten them, rather than only ear-testing. (USA hit-from-behind (h))
- **ozp's long facts lines.** There are 9 class-B splits, and about 70 lines run over 40 words. Shorten or split them without dropping or overstating a tariff. The table is `../reviews/w612_long_facts_rows_2026-11-21.tsv`. (W612 (1), W508 (5))
- **The pk-box caption** voices its letter key, which is noise to a listener. Cut it. (W394 (5))
- **The trapezoid caption's "whatever its standing" hedge** (diagram module). Verify the status, then state it plainly; that is shorter. (delayed-offside (a))
- **practising_on_your_own ~:909.** "Dangle there" gives no direction; only the SVG description says side to side. Two-word fix. (off-ice cards (3))
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
