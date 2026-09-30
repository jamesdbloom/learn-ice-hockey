# Round 30 September 2026, wave 19: USA Hockey Casebook 608 Situation 1 — a forceful hit from behind at the boards is an ejection with no recklessness test

**Scope.** Wave 18's last safety read found a gap in `defender`: USA Hockey's price for **checking from behind** was stated through Rule 608 alone. The Casebook's Situation 1 was missing. It makes the major plus game misconduct, or a match, **mandatory with no reckless condition** for a forceful check on a player standing along the boards. Wave 18 fixed `defender` and `center` :686. Wave 19 ran the same claim census across every other page that prices USA Hockey checking from behind. It ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". Brief: Appendix A.

**The source** (`sources/usah_casebook.txt` ~:11747-11790, Rule 608 Situation 1; read whole by every author and reader):
- The minor plus misconduct *"must be assessed"* for:
  - (1) a push on an opponent *"skating ahead of them and not near the boards"*;
  - (2) *"minimal body contact"*, a *"pinch"*.
- *"The major plus a game misconduct penalty, or match penalty, must be called"*:
  - (1) *"In every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice)"*;
  - (2) *"thrust head first into the boards or goal frame"*;
  - (3) *"recklessly endangers … regardless of whether or not board contact is made"*.
- A match for excessive force on a vulnerable or defenceless opponent.

The minor-tier cases are *required*, not *exclusive*. Anything in neither list falls back to Rule 608(a)'s discretion (`sources/usah.txt` ~:3712-3731).

**Files (15):**
- `body_contact_and_battles`, `defending_the_rush`, `special_teams`, `zone_entries`, `playing_without_the_puck`
- `winger`, `rules_primer`, `shooting`, `switching_positions`, `offensive_zone_play`
- `risk_management`, `defensive_zone_coverage`, `passing_and_receiving`, `language_and_glossary`, `forechecking_systems`

Checked with no edit: `goaltender` (its ladder is scoped to "into your own net", which is the goal frame, head first) and `on_ice_communication` (a net-front screener, not the boards).

## Method

1. **Nine authors in parallel** (one per file or file pair), each briefed on the claim and asked for a layer test.
2. **Coordinator check.** Four authors asked whether boarding (603) has a Casebook counterpart. I read Casebook 603 Situations 1–3 (`usah_casebook.txt:11214-~11262`). Situation 2 says when a boarding penalty *"must be assessed"* and sets no tier. So the answer is no: a true negative on those Situations only.
3. **Five first reads, covering all 15 files for BOTH dimensions:** two `rules-verifier` and three `safety-reviewer`. None blocked. All fix items were batched after every reader had finished, so no fix raced a read.
4. **Four fix agents.** A coordinator sweep of the whole corpus for the "confines/holds … push/pinch" and "at speed" framings found three more sites (`rules_primer`, `defensive_zone_coverage`), which were fixed.
5. **Final reads:** a `rules-verifier` and a `safety-reviewer` on the fix-round units.
   - Both blocked `defending_the_rush` :525 (it omitted instance (1)).
   - The safety reader also blocked `offensive_zone_play` :854 (the NHL, IIHF and PWHL sounded lighter than USA Hockey).
   - Both were repaired.
6. **Last line read** (a `safety-reviewer`). It blocked `offensive_zone_play` :854 on the words *"reckless, that tier too"*, which read aloud as "a reckless one is also a minor". Repaired to *"an ejection"*.
   - That fix's citation, *"43.2–43.5"*, named an IIHF 43.5 that does not exist; the IIHF rule stops at 43.4 (`iihf_rules_2026-27.txt:4036-4062`, v1.1 :3977-4003). It is now *"Rule 43"*. No other IIHF 43.5 reference exists in the corpus.
7. **Build, then a headless-Chrome `site-reviewer`.**

## What was fixed (summary; per-site detail is in OPEN_ITEMS.md)

- **Casebook instance (1) added** in the same spoken unit as the 608 ladder, in every layer that priced it:
  - `switching_positions`: new facts :216, body, Common Mistakes, Key Takeaway 6, trailer.
  - `body_contact_and_battles`: facts :528 and :1108, body :544 and :1323, Key Takeaway 6.
  - `defensive_zone_coverage`: body :177; the correction had been one spoken chunk too late.
  - `passing_and_receiving`: :215.
  - `special_teams`: facts :637, body :644 and :828, Common Mistakes, Key Takeaway 8, trailer.
  - `zone_entries`: Key focus.
  - `language_and_glossary`: the glossary entry.
  - `forechecking_systems`: :594.
  - `playing_without_the_puck`: Key focus, facts :727 plus a new ⚠️ facts line, Common Mistakes.
  - `winger`: facts :650, body :662, Key Takeaway 10.
  - `defending_the_rush`: facts :308, :310, :387; body :400, :433, :525; Common Mistakes; trailer.
  - `offensive_zone_play`: split facts :726, body :737, facts :854, blockquote, Common Mistakes :1131, Key Takeaway 10.
  - `risk_management`: facts :782–785, body :792.
- **608(b)'s head-first limb** added where only "reckless" was given: `rules_primer` Common Mistakes and Key Takeaway 7; `shooting` new facts :515, Common Mistakes, Key Takeaway 6.
- **Harsher-direction errors corrected along the way:**
  - Qualifier fixes:
    - *"regardless of whether or not board contact is made"* was attached to the wrong instance (`playing_without_the_puck` :20 and :899; `defending_the_rush` :390 and :525; `switching_positions` :216, where it happened in this wave's own reorder).
    - *"at speed"* has no Casebook basis (`risk_management` facts, Common Mistakes and Key Takeaway; `defending_the_rush` :390 and Key Takeaway 9).
  - Exclusivity fixes: *"confines / holds that tier to"* overstated the Casebook as exclusive (`rules_primer` ×7, `defensive_zone_coverage` :177, `risk_management` ×5).
  - Citation and wording fixes:
    - *"defenceless (NHL 41.1)"*: 41.1 puts the onus on the checker; it does not define the posture.
    - *"CARHA's 53 Note bars substitution"* → *"bars substitute calls"*.
    - `shooting` 608(c) → *"vulnerable or defenceless"*.
    - `playing_without_the_puck` :727 *"USA Hockey's a ten-minute misconduct"* → *"USA Hockey adds…"*.
- **Three permissive repairs found by readers:**
  - `offensive_zone_play` Key Takeaway 10 had dropped *"which no book prices as a bare two minutes"*; both claims are now kept.
  - `offensive_zone_play` :854: the NHL, IIHF and PWHL are now *"a major and game misconduct, no minor"* (NHL and PWHL 43.5; IIHF 43.3).
  - `defending_the_rush` :525 now carries instance (1).
- **Kept everywhere:** *"forceful"* (the light pinch stays at minor plus misconduct). No ejection is tied to injury.

## Markers

`check_marker_pairs` reports 0 LOST and 0 missing by key on all 15 files. HEAD→tree:
- `language_and_glossary` 25→25; `rules_primer` 176→176; **`playing_without_the_puck` 35→36** (a new ⚠️ facts line — *"USA Hockey's Casebook ejects at the wall without recklessness"* — on the hazard clause, one new spoken "Important."; readers judged it sensible).
- `risk_management` 32→32; `switching_positions` 17→17; `winger` 40→40; `defending_the_rush` 43→43; `defensive_zone_coverage` 33→33.
- `forechecking_systems` 55→55; `offensive_zone_play` 50→50; `special_teams` 59→59; `zone_entries` 28→28.
- `body_contact_and_battles` 142→142; `passing_and_receiving` 22→22; `shooting` 54→54.

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts` all exit 0.
- **URLs:** no URL added. Per-file `https?://` counts against HEAD are unchanged on all 15 files.
- **Diff against HEAD:** 72 insertions and 65 deletions across 15 content files.
- **Build (final):** the chain started 13:57:09; `sw.js` was written 13:58:25. Absolute npm, exit 0, full chain to `check:links` (54 pages, all links and anchors resolve). The last content edit was `offensive_zone_play` at 13:56:38. `--panels` 0 and `--bare` 0.

## Rendered site (`site-reviewer`, headless Chrome 154 over CDP)

**CLEAR.** 15 pages × 400/1440 × light/dark.
- 298 target units (every p, li, dd or td carrying "Situation 1", "along the boards", "608(b)" or "head first into the", plus the two new lines). All pass.
- 605 glyphs in those units, every one wrapped with an NBSP after; per-unit glyph counts equal the source.
- 0 panels, 0 bare, 0 untreated, 0 literal `**`; no page scroll; console clean; no off-origin requests.
- The two new amber runs render correctly in both themes.

**The last rebuild overlapped the review.** The final rebuild (13:57–13:58) ran during the review's first pass. The three pages whose probes overlapped it were re-run against the finished build. The other 12 pages were probed after 13:58:25, so the final `offensive_zone_play` :854 wording is covered.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×3, `safety-reviewer` ×5 | `usah_casebook.txt` 608 Situation 1 (read whole each time), 603 Situations 1–3, 609 Situation 2; `usah.txt` 608, 640, 404(a) Note; `nhl_rules.txt` 41.1, 43; `pwhl_rules.txt` 43; IIHF 43 in both editions (no 43.5); `hc.txt` 7.5 with Interpretations; `carha.txt` 53; EIHL Casebook / In-House (no British departure on Rule 43). |
| D2 | Exceptions | Yes | same | Minor-tier cases kept as required, not exclusive; "forceful" and "standing along the boards" kept; the reckless instance's board-contact clause attached only to it. |
| D3 | Rule-set divergence | Yes | same | Six books' checking-from-behind floors checked for "ends your game in every book" and "no book prices as a bare two minutes". |
| D4 | Citation integrity | Yes | readers | Casebook quotes verbatim; a false 41.1 attribution and a non-existent IIHF 43.5 citation both removed. |
| D5 | Provenance | Partly | coordinator | No URL added; trailers gained Casebook entries with read-dates. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | coordinator, readers | "No Casebook 603 counterpart" (Situations read); "no IIHF 43.5". |
| D7 | Cardinal rule | Yes | readers | Tariffs only; `body_contact_and_battles` :1323 now leads with the instruction. |
| D8 | Numeric ownership / restatement | Partly | | The Casebook rung is now restated in many units (propagation risk, carried). Numeric ownership **declared out of scope**. |
| D9 | Summary layer | Yes | authors' layer tests, readers | Key focus, Common Mistakes and Key Takeaways fixed wherever they carried the claim. |
| D10 | Key-facts layer | Yes | readers | Several lines at 296–300/300, fitted by substitution; two splits; two blocks now at HARD_MAX (`switching_positions`, `shooting`). |
| D11 | Reader safety | Yes | `safety-reviewer`: three first reads (all 15 files), a final read and a last line read | Every file had a safety read. |
| D12 | Read-aloud integrity | Yes | authors and readers rendered `md_to_speech` | Chunk placement fixed (`defensive_zone_coverage` :177); "that tier too" antecedent fixed (`offensive_zone_play` :854). |
| D13 | Folklore | Partly | | None introduced; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Prose outside the changed units not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Carried (not blocking)

- **Unvoiced Sources trailers** still say the Casebook's minor plus misconduct is *"must be assessed" **only** for a push*: `center` :817, `defensive_zone_coverage` :837, `zone_entries` :1141. Harsher exclusivity in provenance notes.
- **`goaltender` at the end boards:** a goalie in a corner facing the boards is never priced under USA Hockey. Possibly permissive; unconfirmed; a reader's call.
- **Restatement:** the Casebook rung now appears in many units (propagation risk).
- **Tactics-layer weight:** `playing_without_the_puck` Key focus :20 is now heavier on rules. A re-aim candidate.
- **Very long bullet:** `offensive_zone_play` Common Mistakes "Pinching to hit a winger…" is about 3,780 px tall at 400 px (six amber runs, about nine tiers). A readability candidate.
- **IIHF 43.3** requires reckless endangerment and is discretionary. The corpus reads the major as the IIHF floor for a check from behind (43.2 has no minor); that reading is not attacked.
- **Casebook "danger zone"** (about 10 ft out from the boards) may widen "standing along the boards"; not decided.
- **Nits:**
  - `defending_the_rush` :308 "at the boards" shorthand; :400/:913 "this hit" for a carrier still skating; Key Takeaway 9 opener.
  - `winger` Key Takeaway 10 and `playing_without_the_puck` :728 omit the head-first limb.
  - `zone_entries` :222 reckless-only (its neighbour carries the limb).
  - `forechecking_systems` :660 (:661 carries it).
  - `rules_primer` Key focus :25 / :22 contrasts.
  - `playing_without_the_puck` :727 "10-minute" (404(a) Note allows 6 or 8 minutes for youth).
  - `offensive_zone_play` :1131 "only minimal body contact".
  - `shooting` :515 "keeps a minor plus misconduct" (608(a) also offers major plus game misconduct).
- **Site:** diagram-caption `warn-inline` runs have an ordinary space after the glyph, not an NBSP. Pre-existing and already carried.

## What this method could not have found

- The claim worded without any of the searched terms ("from behind", "608", "boards", "pinch", "back to", "Situation 1").
- Other rules that price the same act: boarding (603) routes beyond the Casebook Situations read, 604 in non-checking play, and head contact.
- How a USA Hockey referee applies "forcefully" (the book does not define it) or the danger zone.
- Real devices, 320 px, and screen readers.

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 19: a CLAIM census. You own EXCLUSIVELY the file(s) named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently.
READ FIRST: CLAUDE.md (non-negotiables; READABLE BEATS DEFENDABLE; "brief a claim, never a line"; implied-cap-by-contrast; "a qualifier can change jobs through a move or a trim"; "a sketch in a brief is a claim"; "no room" is a question about the BLOCK, not the line).
THE CLAIM (a hypothesis — refute it for your file before acting): USA Hockey's price for CHECKING FROM BEHIND is stated through Rule 608 only — 608(a) "A minor plus a misconduct penalty, or a major plus a game misconduct penalty", 608(b) mandatory major+GM where the player "recklessly endangers an opponent, or causes them to go head first into the boards or goal frame", 608(c) a "shall" match for excessive force on a vulnerable/defenceless opponent — WITHOUT the USA Hockey Casebook's Rule 608 Situation 1, which makes the major+GM or a match MANDATORY with NO reckless condition: "The major plus a game misconduct penalty, or match penalty, must be called in the following instances: (1) In every instance where a player forcefully checks an opponent who is standing along the boards (back toward the middle of the ice). …" (read the WHOLE Situation yourself in sources/usah_casebook.txt ~:11747-11785: its other must-be-called instances, and the two minor-plus-misconduct cases — a push on a skater "not near the boards", and "minimal body contact" / a "pinch"). Where a page teaches or prices a hit from behind on a player AT THE BOARDS and gives USA Hockey's price as 608(a)'s minor+misconduct floor or only the reckless 608(b) trigger, a forceful-but-not-reckless hit at the boards sounds cheaper than it is (a mandatory ejection). Permissive, penalty-bearing.
Already done (do not re-do): content/positions/defender.md, content/positions/center.md :686; forechecking_systems :680/:931 already carry it.
TASK: find the claim wherever it appears in your file, in EVERY layer (Key focus, Overview, body, facts, Common Mistakes, Key Takeaways, trailer) — search the ACT (from behind, back to, numbers, boards, pinch, 608, "minor plus a misconduct"), not only "608". For each site: PERMISSIVE (the along-the-boards forceful hit reads as possibly only a minor+misconduct, or as ejecting only if reckless) → add the Casebook limb in the SAME spoken unit, one plain clause (sketch: "…and USA Hockey's Casebook makes a forceful check on a player standing along the boards, back toward the middle of the ice, a major and game misconduct or a match — no recklessness needed (608, Situation 1)"). Keep "forceful" — the Casebook keeps a light pinch at minor+misconduct. OK → say why (e.g. the unit is about open ice, or already carries it). Never tie the ejection to injury. Facts caps: run `python3 scripts/check_facts.py --near <file>` first (300 Rule/Convention, 200 else; block MIN 3, MAX_COACHING 8, HARD_MAX 14); substitution only, never drop a caveat.
LANE: fix only permissive, penalty-bearing defects of THIS claim. Report anything else as a row with its direction.
GATES (no pipes): python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py ; python3 scripts/check_marker_pairs.py <file> (0 LOST). Render: python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/w19_<stem> (SCRATCH=/private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad); read changed units voiced alone (search words, not figures).
REPORT: every site (file:line, layer, verdict), old→new with char counts for facts lines, sources quoted with file:line, the layer test, self-caught errors, and "what this method could not have found".
