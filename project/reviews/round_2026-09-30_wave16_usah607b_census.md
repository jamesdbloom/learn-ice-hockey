# Round 30 September 2026, wave 16: the USA Hockey 607(b) census, and the NHL/PWHL 42.5 limb left out of lists of books

**Scope.** This wave checked one claim across seven pages. Each page priced a USA Hockey charge, or deliberate contact with a goaltender, only through 607(a)/(c) ("a minor plus a misconduct or a major plus a game misconduct"). That makes the tier sound like the referee's choice. It is not: 607(b) makes a reckless charge a **mandatory** major plus game misconduct. The row was carried from wave 15. It ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". Brief: Appendix A.

**Files (7):**
- `content/technique/shooting.md`
- `content/foundation/rink_map.md`
- `content/hockey-iq/playing_without_the_puck.md`
- `content/hockey-iq/time_and_space.md`
- `content/positions/center.md`
- `content/systems/zone_entries.md`
- `content/systems/offensive_zone_play.md`

## Method

1. **Authors.** Seven, one per file, run in parallel through a workflow. The owner had not asked for a workflow; earlier waves used individual agents, and this was said at the time.
2. **First reads, in parallel.**
   - `rules-verifier` A read `shooting`, `playing_without_the_puck`, `center` and `offensive_zone_play`. It also ruled on the open 602(a) question.
   - `safety-reviewer` B read `rink_map`, `time_and_space` and `zone_entries`.
   - Both were NOT BLOCKING. Some permissive items were in lane and were fixed in steps 3–5.
3. **Fixes.** Three agents: `playing_without_the_puck` :646/:652/:599; `center` :731/:462 plus every layer; wording nits in `shooting`, `rink_map` and `zone_entries`.
4. **Line read** by a `rules-verifier`: NOT BLOCKING, with two small follow-ups.
5. **Follow-up fixes.** `playing_without_the_puck` :556 and `center` :441, then `playing_without_the_puck` :638. For :638 the coordinator decided to drop an NHL 42.1 quotation (evidence already spoken in the body) so the 42.5 limb would fit. The same pass fixed three more layers.
6. **Last line read** by a `safety-reviewer`: NOT BLOCKING.
7. **Build**, then a headless-Chrome `site-reviewer`.

## What was wrong, and the fixes

**The claim: a discretionary ladder with its mandatory rung missing (permissive, penalty-bearing).**
- **The book.** `usah.txt:3676-3678`, 607(b): *"A major penalty plus game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of charging."*
- **Why it reaches a goaltender.** 607(d) Note 1 (:3689-3693): *"Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging."* 607(e) (:3698-3699) adds that a match penalty *"may also be assessed"*.
- **The shape.** Every site gave USA Hockey only the 607(a)/(c) choice. Many then said Hockey Canada 8.5(b) and CARHA 52(b) "take the discretion away", which is an implied cap by contrast. A USA Hockey reader was told a reckless charge might cost a minor plus a misconduct and let him stay on.
- **The fix.** Each author added the 607(b) mandatory tier in the same spoken unit as the ladder it extends, across every layer that carried the claim: facts, body, Common Mistakes, Key Takeaways and trailers. Each confirmed this by rendering with `md_to_speech`.
- **Where.** Five sites in `shooting`, four in `rink_map`, five in `playing_without_the_puck`, four in `time_and_space`, six in `center`, ten spoken sites plus the trailer and verification notes in `zone_entries` (two facts lines split), and eight spoken sites plus a pointer and the trailer in `offensive_zone_play`. The authors' tables are summarised in the plan.

**The ruling on 602(a), raised by four authors on their own.** `rules-verifier` A decided it.
- **What 602(a) says.** `usah.txt:3496-3500`: *"A match penalty shall be assessed to any player or team official who recklessly endangers or attempts to injure any opposing player"*.
- **Why it is not settled as mandatory for a charge.** Five things point the other way:
  - 607(e) says the match "may also" be assessed.
  - The summary table (:5315/:5319) files 607(e) under "Match Penalty Option".
  - Casebook 607 Situation 4 says *"the major plus game misconduct, or match penalty option would be the proper call"*.
  - The Standard of Play (:326-331) reads *"the major plus game misconduct or match penalty provisions … must be assessed"*.
  - Where the Casebook means a match to be mandatory, it says so in terms (608 Situation 1).
- **The counter-reading.** 602(a) together with Casebook 602 Situation 1 ("must be assessed" for action taken "with little or no regard to the consequences"). The book never reconciles the two.
- **Ruling.** The major plus game misconduct under 607(b) is the mandatory **floor** for a reckless charge, and the match is an option. "A reckless charge is a major plus a game misconduct, mandatory under 607(b)" is correct as a floor. No site writes it as a ceiling.

**`playing_without_the_puck`: deliberate goalie contact priced only at 625 (permissive).**
- **What was wrong.** :652 read *"USA Hockey Rule 625(a) writes only a minor"*, and 602(a) was given as the only way past it. Note 1's deliberate-contact sentence did not appear anywhere in the body.
- **The fixes:**
  - :652 now says 625's minor is *"its price for accidental contact"*, and routes deliberate contact to charging (607(b)/(e)) as well as 602(a).
  - :646 gains *"That is the floor, not the ceiling"* with 607(b) and Note 1, in the same chunk as the 607(c) ladder. Before, the tier had been five chunks later.
  - :599 gains the deliberate carve-out, found by the author's layer test.
  - The trailer (:982) now quotes Note 1's deliberate sentence.

**The NHL/PWHL 42.5 limb left out of lists of books (slightly permissive).**
- **What was wrong.** `center` CM :731 said *"three books make that tier mandatory … otherwise … the referee's"*, leaving out NHL/PWHL 42.5: *"When a major penalty is imposed under this rule for an infraction resulting in an injury to the face or head of an opponent, a game misconduct shall be imposed"* (`nhl_rules.txt:5458-5460`; `pwhl_rules.txt:4489-4491`).
- **Fixed in `center`:** facts :441 (298/300), blockquote :474 (42.5 quoted), CM :731 ("five books"), KT8 :799 and notes :832.
- **Fixed in `playing_without_the_puck`:** facts :556 and :638, body :652, CM :886 and KT11 :960.
- **The wording** conditions on a major having been called ("if a major injures face or head"). It never says "an injury ejects", and CM :886 makes only the game misconduct mandatory.
- **A self-caught error.** The `center` author corrected its own first draft, "once the charge hurts someone's face or head", which dropped the requirement that a major had been called.

**Smaller fixes flagged by reviewers:**
- `center` :462 now quotes the whole 607(e) sentence, restoring "for reckless endangerment".
- `shooting` :305 "where" → "anywhere a charge injures" (CARHA 52(b)'s injury limb has no location).
- `shooting` :536 "short of" → "except for".
- `rink_map` KT15 :657 gains a comma, and the same claim at :424 and :590 gets the same comma.
- `zone_entries` :304 "the major" → "a major plus a game misconduct", fixing a split line that lost its antecedent.
- `center` :441 "even in the privileged area" → "in the crease or privileged area".

## Markers

`check_marker_pairs` reports 0 LOST and 0 missing by key on all 7 files. HEAD→tree:
- `shooting`: 54→54
- `rink_map`: 25→25
- `playing_without_the_puck`: 35→35
- `time_and_space`: 16→16
- `center`: 52→52
- `zone_entries`: 28→28
- `offensive_zone_play`: 50→50

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts` all exit 0. `check_counts` reports that every live figure matches.
- **URLs:** no URL added. Per-file `https?://` counts against HEAD are unchanged in all 7 files.
- **Diff:** 53 insertions and 50 deletions.
- **Build:** started by 09:45:19 (the `diagrams.json` write; page HTML 09:46:56, PDFs and search index to 09:47:40) with the absolute npm, exit 0, full chain to `check:links` (54 pages, all links and anchors resolve). The last content edit (`playing_without_the_puck`, 09:44) came before it.
- **After the build:** `--panels` 0 and `--bare` 0 site-wide.

## Rendered site (`site-reviewer`, headless Chrome over CDP)

**CLEAR, 27 of 27 targets pass.** 7 pages, each at 400 and 1440 px in light and dark (28 loads).
- 0 `aside.callout-warning`, 0 bare glyphs, 0 untreated glyphs inside strong runs, and 0 literal `**`.
- Glyph counts per unit match the source.
- No facts line overflows at 400 px, and there is no horizontal page scroll.
- The console is clean and there are no off-origin requests.
- The new `offensive_zone_play` :623 run renders as `span.warn-inline` with an NBSP after the glyph.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×2, `safety-reviewer` ×2 | Also `usah.txt` 602(a) :3496-3504, 625(a)(8) :4486-4488, the summary tables :5281/:5315/:5339; `usah_casebook.txt` 602 Situations 1–4 (:11145-11197), 607 Situations 1–6 (:11623-11740), 608 Situation 1; `nhl_rules.txt` 42.1–42.5 (:5419-5460); `pwhl_rules.txt` 42 (:4466-4495); `iihf_rules_2026-27.txt` 42.1–42.4; `hc.txt` 8.5 (:6981-7070), 7.4 (:6053-6123); `carha.txt` 52 (:2550-2567), 48(a), 30(a). |
| D2 | Exceptions | Yes | same | Casebook 607 Situation 5 (possession engagement) noted, not added; 625(a)(8) stick contact kept apart from Note 1. |
| D3 | Rule-set divergence | Yes | same | Six books on the mandatory ejection for charging a goaltender. |
| D4 | Citation integrity | Yes | readers | 607(b), 607(e), Note 1 and 42.5 quoted verbatim; `center` :462 truncation fixed. |
| D5 | Provenance | Partly | coordinator | No URL added. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "Only the IIHF has no match penalty": `match penalt` scores 0 in every IIHF text on disk. |
| D7 | Cardinal rule | Yes | readers | Tariffs only; no tactics changed. |
| D8 | Numeric ownership | Partly | | Only book counts ("five books"); **declared out of scope**. |
| D9 | Summary layer | Yes | authors' layer tests, readers | KTs and CMs fixed in every file that carried the claim. |
| D10 | Key-facts layer | Yes | readers | Facts lines read voiced alone; three lines split and several fitted at 297–300/300 by substitution. |
| D11 | Reader safety | Yes | `safety-reviewer` ×2 | |
| D12 | Read-aloud integrity | Yes | authors and readers rendered `md_to_speech` | 607(b) in the same chunk as its ladder at every site. |
| D13 | Folklore | Partly | | None introduced; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Prose outside the changed units was not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Carried (not blocking)

- **The same "only N books mandatory" charging claim without NHL/PWHL 42.5.** The commit gate found it surviving in this wave's own staged files (`shooting`, `zone_entries`, `offensive_zone_play`), in lines this wave wrote, and blocked. It was taken up with every other file that prices charging a goaltender in wave 17 (`round_2026-09-30_wave17_nhl425_census.md`), and waves 16 and 17 commit together.
- **`playing_without_the_puck` :638:** "607(b)" loses its USA Hockey label by about twelve spoken words. Mishearing it as CARHA's would be harmless, because 52(b) is already mandatory. 3 characters are left on the line.
- **"A major injures"** is loose wording (the charge injures, not the penalty), and KT11 could be heard as making the major mandatory. Both lean harsher.
- **`center` :474:** the parenthetical calls Hockey Canada 8.5(b)'s interference-injury limb "Hockey Canada's" injury limb; the charging-injury limb is 7.4(b) (`hc.txt:6087-6089`). Also, Hockey Canada's own 8.5(b) Note 1 cross-reference, "7.4(b)(Interpretation 2)", is stale in the 2026-28 book (Interpretation 3, `hc.txt:6119-6123`).
- **`playing_without_the_puck` :652** (unchanged from HEAD): "not two minutes in any book" overstates in the harsher direction. The same paragraph's "the same sentence the EIHL Casebook carries" is loose ("foul" against "infraction").
- **`zone_entries` :366:** the "fair game" list leaves out USA Hockey 607(d). This predates the wave; :329 and :708 carry it.
- **`shooting`:** 607(d) Note 1 is not stated anywhere in the file. **`time_and_space`:** :287 and :481 are identical sentences.
- **602(a) against 607(b)/(e)** is unreconciled in the book. A single body-site note may be worth adding; do not put it in summary layers.
- **The closed "must" list** may still be short of the EIHL, which is a competition layer.

## What this method could not have found

- **The claim in wording none of the searches used** ("run the goalie", "take out"), and any USA Hockey rule beyond 602, 607 and 625 that prices contact with a goaltender (640, 608, 604 in non-checking classifications).
- **How a USA Hockey referee actually applies 602(a) against 607(b)/(e).** No officiating bulletin is on disk.
- **Real devices, 320 px, and screen readers.**

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 16: a CLAIM census. You own EXCLUSIVELY the one file named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently.
READ FIRST: CLAUDE.md (non-negotiables; READABLE BEATS DEFENDABLE; "brief a claim, never a line"; implied-cap-by-contrast; "a qualifier can change jobs through a move or a trim").
THE CLAIM (a hypothesis from a carried plan row — refute it for your file before acting): USA Hockey charging, or deliberate contact with a goaltender, is priced through 607(a)/(c) — "a minor plus a misconduct or a major plus a game misconduct" — with the tier presented as the referee's choice, and NO mention that 607(b) makes it MANDATORY: "A major penalty plus game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of charging." Verify yourself in sources/usah.txt Rule 607 (~:3663-3699; flatten wraps; read past closing marks): 607(a), (b), (c), (d) Note 1 ("Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging"), (e) match "may also be assessed". Also 602(a) (~:3496-3500) and usah_casebook.txt 607 Situations 1–6 (~:11623-11740; Sit. 4 says the major+GM or match "would be the proper call" where the player recklessly endangers the goalkeeper).
WHY IT MATTERS: a discretionary ladder with the mandatory rung missing tells a reader a reckless charge might cost a minor plus misconduct and he stays in. Permissive, penalty-bearing.
TASK: find the claim wherever it appears in your file, in EVERY layer (Key focus, Overview, body, facts, Common Mistakes, Key Takeaways, trailer) — search the ACT (charg, 607, goalie/goaltender/goalkeeper contact, crease, "minor plus a misconduct", "major plus a game misconduct", run/finish/hit the goalie), not only "607". For each site: PERMISSIVE (a reckless charge reads as possibly less than major+GM) → fix; OK → say why. Fix by adding the 607(b) mandatory tier in the SAME spoken unit (e.g. "…and a reckless charge is a major plus a game misconduct, mandatory under 607(b)") — a sketch, adapt to the prose. In summary layers keep it one plain clause. Do not add a new ladder if the document already has one — extend it. Never trade a caveat; facts caps: run `python3 scripts/check_facts.py --near <file>` first (300 Rule/Convention, 200 else; block MIN 3, MAX_COACHING 8, HARD_MAX 14); fit by substitution. Do NOT tie the ejection to injury. Do NOT state 607(e)'s match as mandatory (it is "may").
LANE: fix only permissive, penalty-bearing defects of THIS claim. Report anything else as a row with its direction.
GATES (no pipes): python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py ; python3 scripts/check_marker_pairs.py <file> (0 LOST). Render: python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/w16_<stem> (SCRATCH=/private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad); read changed units voiced alone (search words, not figures — the renderer spells numbers out).
REPORT: every site (file:line, layer, verdict), old→new with char counts for facts lines, sources quoted with file:line, the layer test, and "what this method could not have found".
