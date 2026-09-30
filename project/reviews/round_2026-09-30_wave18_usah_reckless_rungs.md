# Round 30 September 2026, wave 18: USA Hockey's mandatory reckless-endangerment penalty on every other contact foul

**Scope.** For most contact fouls, USA Hockey writes a discretionary ladder (a minor, a minor plus a misconduct, or a major plus a game misconduct) and then a separate **mandatory** tier: *"A major penalty plus game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of <act>"*. Many sentences priced a USA Hockey foul through the discretionary rungs only ("no bare minor", "a minor or a major", "603(a) … 603(c) is a match"). That told a reader a reckless act might cost less than it does.

Waves 16 and 17 fixed this for charging (607(b)). The lead that opened this wave came from `body_contact_and_battles`: its boarding facts line left out 603(b) and gave 603(c)'s discretionary "may" as "is". The wave ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". Brief: Appendix A.

**Files (23):**
- **Foundation:** `language_and_glossary`, `on_ice_communication`, `rules_primer`.
- **Hockey IQ:** `playing_without_the_puck`, `risk_management`.
- **Off the ice:** `team_play_and_culture`.
- **Positions:** `center`, `defender`, `goaltender`, `switching_positions`, `winger`.
- **Systems:** `breakouts`, `defending_the_rush`, `defensive_zone_coverage`, `faceoffs`, `forechecking_systems`, `game_management`, `neutral_zone_systems`, `offensive_zone_play`, `special_teams`, `zone_entries`.
- **Technique:** `body_contact_and_battles`, `shooting`.

## Coordinator errors in this wave

**Brief error #7: four rule numbers in the brief's starting list were wrong for this edition.**
- **What was wrong:**
  - Elbowing is **611**. The brief said 610, which is Delaying the Game.
  - Kicking is **627**, not 628.
  - Kneeing is **628**, not 629.
  - Slashing is **634**, not 636, which is Start of Game and Time of Game.
- **How it happened:** I took the line numbers of the "recklessly endangers" hits in `usah.txt` and assigned rule numbers without reading the rule headings. The index is at `usah.txt:2935-2953`, and the headings are, for example, `:3823` Rule 611 Elbowing and `:4818` Rule 634 Slashing.
- **Who caught it:** the `defender` author, who verified the numbers rather than copying them. Every other author caught it independently too, or was sent the correction mid-run.
- **Effect:** no cite in the corpus was written from the wrong list. Every reader checked every new citation against its heading.

**Sketch error #8: a sketch that contradicted the document it was for.** I suggested "none of these five stick fouls…" for the Key Takeaway in `rules_primer`. That wording, and the original "no stick foul…", called a trip a stick foul, but `rules_primer` says at :38, :433 and :524 that tripping *"sits in no book's stick-foul category"*. The author refused the sketch and named the five acts instead.

## Method

1. **Twelve authors in parallel**, one per file or file group.
2. **Four readers in parallel:** three `rules-verifier` and one `safety-reviewer`. None blocked, but they raised fixes in lane.
3. **Six fix agents.**
4. **Two final readers:** a `rules-verifier` and a `safety-reviewer`. Each **blocked once**:
   - `breakouts` :274, on the careless limb.
   - `offensive_zone_play` :859, where adult men were scoped out of 640(g).
5. **Repairs and one more layer test** (`breakouts` :286).
6. **A last `safety-reviewer` line read:** no block.
7. **Build**, then a headless-Chrome `site-reviewer`.

## What the rungs are (verified by the authors and readers against `sources/usah.txt`)

**Mandatory ("shall") major plus game misconduct for reckless endangerment:**
- 603(b) boarding, 604(d) body checking in a Competitive Contact category, 607(b) charging.
- **608(b)** checking from behind. It also covers a hit that *"causes them to go head first into the boards or goal frame"*.
- 609(b) cross-checking, 611(b) elbowing.
- **620(b)** head contact. It also covers a player *"who intentionally or carelessly contacts an opponent in the head, face or neck"*.
- 621(b) high sticks, 623(b) hooking, 628(b) kneeing, 634(b) slashing.
- 639(b) tripping, clipping and leg checking. Slew footing has a minimum of major plus game misconduct.
- **640(g)** roughing. It reaches only *"any actions falling under Rule 640(b, c, d, e or f)"*, and 640(b) is *"(except Adult Male Classifications)"*.

**Match-penalty limbs:** most read *"may also be assessed"*. **608(c)** (excessive force on a vulnerable player) and **627(b)** read "shall".

**No reckless tier:** 625 interference and 622(a) holding. The only escalation in 622 is for the facemask.

**Standard of Play, the "Declaration" (`usah.txt:318-331`):** a check on a vulnerable or defenceless player that is *"dangerous, careless or reckless"* with *"no effort to play the puck"* means *"the major plus game misconduct or match penalty provisions of these rules must be assessed"*.

**602(a):** the wave-16 ruling stands. The rule-specific major plus game misconduct is the mandatory floor, and 602(a)'s match is never written as mandatory.

## What was fixed (summary; full per-site tables are in OPEN_ITEMS.md)

- **`body_contact_and_battles` (12 sites, the carried lead included):**
  - Boarding facts line split in two; the new line carries 603(a), (b) and (c), with (c) as "allows".
  - Kneeing (628(b)) and head contact (620(b)), including careless contact.
  - Tripping and clipping in a new facts line; the "What gets called" table's Kneeing cell.
  - Common Mistakes for boarding and kneeing, Key Takeaway 6, and clipping from behind (608(b)) at :544.
- **`rules_primer`:**
  - 609(b), 628(b), 621(b) and 607(b) added in the body and Common Mistakes.
  - Key Takeaway 8 now reads *"a hook, slash, trip, cross-check or high stick stops being two minutes once it is reckless … (623(b), 634(b), 639(b), 609(b), 621(b))"*.
- **`defender`:** 607(b) in two facts lines, 603(b), 604(c) at "at least a minor", and 604(d) and 603(b) in the body; Common Mistakes 608(b).
- **`goaltender`:** 608(b)'s reckless trigger added in the body and Common Mistakes. Before, only the head-first limb was given.
- **`forechecking_systems` (10 sites):**
  - 608's reckless trigger at :547, :578, :661 and :717, and in Key Takeaway 9. The worst site was :578, whose facts line priced a pinch from behind at a minor plus misconduct alone.
  - 640(e) with 640(g) at :574, :596, :927 and Key Takeaway 6; 603(b) in the trailer.
- **`defending_the_rush` (9 sites plus a correction):**
  - 603(b) in the facts, body and Common Mistakes; 604(d); 639(b) in the facts, body, Common Mistakes and Key Takeaway 5.
  - Facts :420: the pre-existing *"three put a game misconduct on any major"* was **false**. Only Hockey Canada 7.2(e) and USA Hockey 603(a) do; NHL and PWHL 41.5 do only on a face or head injury, and IIHF 41.3 allows a major alone. It now names the two.
- **`special_teams`:** a new 608(b) facts line; the body at :644, :828 and :1115; Common Mistakes :1181.
  - Key Takeaway 8 now reads *"in the sixth, USA Hockey, a reckless one does, and so does one that sends them head first…"*. Before, it said five of six books end your night.
- **`offensive_zone_play`:** 640(e) and 640(g) in facts :853 and :859, the body at :865 and blockquote :915; Common Mistakes :1127, 608(b) *"and must"*.
  - The adult-men scope was repaired twice (see the final reads). :975 keeps *"the book does not say, and this document does not know"*, and now adds Casebook 640 Situation 1 as evidence that doesn't settle it either.
- **`shooting`:**
  - 608(b) in the body, Common Mistakes and Key Takeaway 6; the facts at :514 rewritten.
  - A new facts line :172 on 621(b), with Casebook 621 Situation 3's *"must"*.
  - Body :537 now notes that 608(b) and 620(b) reach further than recklessness.
  - The *"not searched"* disclosure in the body and the trailer is updated truthfully, with trailer citations corrected.
- **`center`:** facts :686 split, and a new line :687 carries 608(b) and Hockey Canada 7.5(b).
- **`playing_without_the_puck` and `game_management`:**
  - `playing_without_the_puck` facts :727: HEAD's *"USA Hockey's a ten-minute misconduct, not an ejection"* was false in the permissive direction, because 608(a) itself offers a major plus game misconduct. It now reads *"a reckless hit ejects (608(b))"*.
  - `game_management` :831 says *"in every other class, 640(g)…"* after 640(b)'s Adult Male exception; :837 says *"at least a minor"*.
- **`defensive_zone_coverage` and `switching_positions`:**
  - The claim "603(a) writes no bare minor" now carries 603(b) at six sites, one of them a new facts line in `switching_positions` (:214).
  - Common Mistakes on walking a screener out: 604(d), and 640(g)/609(b) mandatory once it is reckless.
  - `switching_positions` Key Takeaway 6: 603(b) and 608(b).
- **`on_ice_communication`, `risk_management` and `winger`:**
  - `on_ice_communication` body :281 gets 608(b); facts :267 rewritten.
  - `risk_management` Common Mistakes and Key Takeaway 9 get 639(b); facts :783 gets 608(b).
  - `winger` Common Mistakes :687 gets 609(b) and a full quotation of 608(b); new facts :650; body :663; Key Takeaway 10.
- **Thirteen small files:** six edited, seven clean.
  - `breakouts`: facts :159, :274 and :275, body :286.
  - `neutral_zone_systems`: 607(b) at four sites.
  - `team_play_and_culture`: 640(g). `language_and_glossary`: 609(b) at two sites. `faceoffs`: "at least a minor".
  - `zone_entries` :713: the *"(CARHA-affiliated adult leagues)"* gloss dropped in wave 17 is restored.

**How the rungs were written:** none is tied to injury, and none makes 602(a) mandatory. A "may" match was fixed to "may" where a line was already being edited; the remaining cases are carried as harsher-direction rows.

## The two final-read blocks and their repairs

1. **`breakouts` facts :274 (safety).**
   - **The problem:** *"and a careless one can be too"* understated two cases. 620(b) makes careless head contact mandatory. The Declaration says "must" for a careless check on a vulnerable player with no effort to play the puck, which is this play. The line also contradicted :159 in the permissive direction.
   - **The repair (299/300):** *"a reckless one under the first four, or a careless one to the head or on a defenceless player, must be at least a major plus game misconduct"*.
   - **The layer test** then added the Declaration's careless limb to body :286, in the same spoken chunk as the reckless-only roughing tier.
2. **`offensive_zone_play` facts :859 (rules).**
   - **The problem:** *"; adult men take roughing under Note 2"* came after both rungs, so it scoped adult men out of 640(g). 640(a) roughing is *"A minor or double minor"*, so the open question in :975 was settled in the cheaper direction: a qualifier changed job in a trim.
   - **The repair (288):** *"adult men: Note 2 roughing at least"*. The alternative, "the book does not say", was rejected because, voiced alone, it drops the Note 2 floor.
   - **Body :865** now says the book does not say whether 640(g) reaches adult men, and that 602(a)'s match *"carries no such limit"*.
   - **Note:** the safety final read had judged :859 non-blocking. The stricter reading was taken.

## Commit-gate block and repair

The first commit gate **blocked** for two reasons.

**C6: no safety read on 15 of the 23 files.** No `safety-reviewer` had read `body_contact_and_battles`, `rules_primer`, `defender`, `goaltender`, `winger`, `forechecking_systems`, `defending_the_rush`, `shooting`, `center`, `special_teams`, `neutral_zone_systems`, `team_play_and_culture`, `language_and_glossary`, `faceoffs` or `zone_entries`. The D11 row overstated the coverage.
- **Repair:** four `safety-reviewer`s read those files. Three read the staged bytes; `center` was read in the working tree after its fix.
- **Result:** 14 files NOT BLOCKING. `center` blocked once, on :686.

**`center` facts :95** said *"it is a minor on him (604(c), 7.3(a))"*. It was the twin of lines this wave had already repaired (`faceoffs` :915, `defender` :245, `game_management` :837), and it capped the price for a reckless check that is barred.
- **Repair:** *"at least a minor"* (298/300).
- **Also:** body :376 gained *"Neither minor is a ceiling: Hockey Canada 7.3(b) allows a major and game misconduct for a violent check and requires one if it injures, and USA Hockey 604(d) requires one if it recklessly endangers."*

**Repairs arising from the added safety reads:**
- **`center` facts :686** (blocking). This was a wave-18 split line whose major had moved to :687, so voiced alone *"the USA Hockey Casebook takes that minor off a forceful check on a player facing the boards"* read as "the hit loses its penalty". It now says the Casebook *"requires a major and game misconduct, or a match"*.
  - A check for the same pattern (`check_facts_antecedents`) across all 23 files found nothing else.
- **`defender` Common Mistakes :801 and body :422:** USA Hockey's list for checking from behind stopped at 608(b), right beside *"CARHA 53(b) makes a match penalty compulsory"*.
  - 608(c)'s compulsory match was added, and Hockey Canada 7.5(c), also compulsory, was named.
  - A later read found the Casebook 608 Situation 1 limb missing as well: a forceful check on a player standing along the boards *"must"* be called a major plus game misconduct or a match, with no reckless condition. It was added at facts :407 (195/200), body :422, Common Mistakes :801 and the trailer.
- **`body_contact_and_battles` :1566 and :1808:** 620(b) now reads *"intentional, careless or reckless"*.

**Reads of the repairs:** two `safety-reviewer` line reads of the `center`, `defender` and `body_contact_and_battles` repairs. NOT BLOCKING.

**The site review** ran on the 11:37 build, before these repairs. The repairs contain no new ⚠️. The final build's `--panels` 0 and `--bare` 0 are site-wide, and each new string is present on its built page, but the repaired units were not seen in a browser.

## Markers

`check_marker_pairs` shows 0 LOST and 0 missing by key on all 23 files. HEAD=tree:
- `language_and_glossary` 25, `on_ice_communication` 26, `rules_primer` 176, `playing_without_the_puck` 35, `risk_management` 32, `team_play_and_culture` 42.
- `center` 52, `defender` 39, `goaltender` 110, `switching_positions` 17, `winger` 40.
- `breakouts` 28, `defending_the_rush` 43, `defensive_zone_coverage` 33, `faceoffs` 90, `forechecking_systems` 55, `game_management` 51, `neutral_zone_systems` 14, `offensive_zone_play` 50, `special_teams` 59, `zone_entries` 28.
- `body_contact_and_battles` 142, `shooting` 54.

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts` all exit 0. `check_counts` reports that every live figure matches.
- **URLs:** no URL added. Per-file `https?://` counts against HEAD are unchanged on all 23 files.
- **Diff against HEAD:** 109 insertions and 101 deletions across 23 content files, after the commit-gate repair below. It was 103+/95− before that repair.
- **Build (final):** rebuilt after the commit-gate repair, using the absolute npm. The chain started at 12:12:45 (the `diagrams.json` write); `index.html` was written at 12:13:01 and `sw.js` at 12:13:40. Exit 0, and the full chain ran to `check:links`: 54 pages, all links and anchors resolve. The last content edit (`defender`) was at 12:11:54. The new strings from `center`, `defender` and `body_contact_and_battles` are on the built pages. `--panels` is 0 and `--bare` is 0.
- **Earlier build:** 11:37:45 to 11:38:37 (the last file written was `sw.js`; this record first said 11:37:59, which was wrong). The last content edit before it was at 11:37:04. The site review below ran on that build.

## Rendered site (`site-reviewer`, headless Chrome 154 over CDP)

**CLEAR.** 23 pages × 400/1440 × light/dark, 92 page-cells.
- **Units:** 346 target units, meaning every p, li, dd or td carrying one of the twelve rung citations or "recklessly endangers". All 1,384 unit-cell checks passed.
- **Unit counts match the source** on every page.
- **Glyphs:** all 846 glyphs in the units are wrapped, with an NBSP after.
- **Page-wide:** 0 panels, 0 bare glyphs, 0 untreated glyphs, 0 literal `**`; no overflow; tables scroll inside their wrappers; console clean; no off-origin requests.
- **`neutral_zone_systems`:** its four changed units carry "607(b)", which the key strings don't match, so they were probed separately. They pass.
- **One probe false positive:** the `special_teams` trailer, where the glyph is wrapped in a nested span.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×5, `safety-reviewer` ×3 | `usah.txt` 602–640 read rule by rule, Declaration :318-331, the summary tables; `usah_casebook.txt` 608 Situation 1, 620 Situation 3, 621 Situation 3, 640 Situations 1–8; `nhl_rules.txt` 41, 43, 48, 50; `pwhl_rules.txt` 41, 43; IIHF 41, 43 and 50 in both editions; `hc.txt` 7.2, 7.5, 7.8; `carha.txt` 52, 53. |
| D2 | Exceptions | Yes | same | 640(b) Adult Male; 640(g)'s (b)–(f) reach; 608(b)'s head-first limb; 620(b)'s careless limb; the 625/622 no-rung carve-outs. |
| D3 | Rule-set divergence | Yes | same | USA Hockey rungs against the other five books where lines compared them; the DTR :420 count corrected. |
| D4 | Citation integrity | Yes | readers | Every new cite checked against its heading (brief error #7). Quotations verbatim; the 608(b) and 603(b) quotes end where the source sentence does. |
| D5 | Provenance | Partly | coordinator | No URL added; trailer line references corrected in `shooting`. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "625 has no reckless rung" (grep of :4448-4518); "622(a) has none"; `shooting`'s "not searched" disclosure made accurate. |
| D7 | Cardinal rule | Yes | readers | Tariffs only. |
| D8 | Numeric ownership | Partly | | Book counts only ("two (7.2(e), 603)", "five of six"); **declared out of scope**. |
| D9 | Summary layer | Yes | authors' layer tests, readers | Key Takeaways and Common Mistakes fixed wherever they carried the claim. |
| D10 | Key-facts layer | Yes | readers | Several lines at 297–300/300 fitted by substitution. New facts lines added where a block had room ("no room" is a block question). |
| D11 | Reader safety | Yes | `safety-reviewer`: 8 files in the first round; then, after the gate's C6 block, all 15 remaining files on the staged bytes (four reviewers), plus two line reads of the repairs | Every one of the 23 files has now had a safety read. Blocks repaired: `breakouts` :274, `offensive_zone_play` :859 and `center` :686. The first version of this row said "×3" and implied full coverage; it covered only 8 files. |
| D12 | Read-aloud integrity | Yes | authors and readers rendered `md_to_speech` | Each rung is in the same chunk as its ladder; voiced-alone checks on the facts lines and summary layers. |
| D13 | Folklore | Partly | | None introduced; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Prose outside the changed units not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Carried (not blocking)

- **640(g) in adult men's hockey is still unresolved.** The primary texts don't settle it: Casebook 640 Situation 1 leans flat, Situation 3 leans youth. A reader suggested the Declaration together with 640(b)'s defenceless definition may be a route. `on_ice_communication` :267 ("as roughing (640(g))") and `defensive_zone_coverage` :757 lean harsher for adult men.
- **USA Hockey progressive suspensions** for the 603–640 "aggressive infractions" (`usah.txt:2920-2953`): at the fourth major an additional five-game suspension, at the fifth, suspension pending a hearing. They are mentioned nowhere in the corpus. This is a new lead.
- **Harsher-direction "may" matches stated as "is" or "a match":**
  - `passing_and_receiving` :796, which also says "621 runs the same ladder" as 620.
  - `faceoffs` :916, `breakouts` :286, `forechecking_systems` :583.
  - `defender` :247, :259 and the trailer (604(e) read as reachable without recklessness), and :296.
  - `playing_without_the_puck` :202 and :879, `game_management` :868, `defensive_zone_coverage` :510, `on_ice_communication` :281 and `center` :666 (602(a) "is a match").
  - `rules_primer` :436 and :451, `body_contact_and_battles` :1555, `defending_the_rush` :750 and :768.
- **Harsher-direction paraphrases:**
  - `playing_without_the_puck` Key focus :20 and Common Mistakes :898: the Casebook 608 paraphrase drops "where the player recklessly endangers".
  - `risk_management` :832: "clipping … climbs higher again".
  - `offensive_zone_play` :859/:865: "adult men" framing (resolved as "at least"; the question stays open).
- **Gaps and omissions (not permissive):**
  - `goaltender` Common Mistakes :1459 (slashing leaves USA Hockey 634 open) and :1133.
  - `defensive_zone_coverage` has no 608(b) anywhere (:463 and :751 teach a boards play the Casebook covers).
  - `shooting` :514 lacks the head-first limb.
  - `forechecking_systems` :581 "that minor" has no antecedent.
  - `rules_primer` Key focus :25: "each of them is two minutes" implies two minutes everywhere else. It is in the tactics layer; the owner should decide.
  - `rules_primer` Key Takeaway 8: silent on USA Hockey 620 for a cross-check above the shoulders.
  - `body_contact_and_battles` :218, :1895 and Key Takeaway 1: 604 ladders paired with "Hockey Canada 7.3 the same shape".
  - `offensive_zone_play` :855: "no limb of 607 writes a bare minor" without 607(b).
  - `defending_the_rush` :420: the line doesn't name NHL/PWHL 41.5.
- **Wording:**
  - `breakouts` :274 drops the Declaration's "no effort to play the puck" condition.
  - `breakouts` :159 drops "dangerous".
  - `winger` :687: "Three of those escalations".
- **Site:** 109 diagram-caption `warn-inline` wrappers have an ordinary space after the glyph instead of an NBSP. This is the caption render path; it is pre-existing and already carried.

- **W19: the Casebook 608 Situation 1 forceful-at-the-boards rung** (major plus game misconduct or match *"must be called"*, with no reckless condition) is missing from most of the roughly 11 other files that list USA Hockey 608. Only `center` :686, `forechecking_systems` :680/:931 and now `defender` carry it.
- **`defender` facts :407** no longer mentions the light-pinch minor plus misconduct. It leads with "Never", so it is not permissive.

## What this method could not have found

- A USA Hockey foul priced without naming the book or a rule number: "a two-minute shove", "the American book". The searches keyed on rule numbers, "USA Hockey" and ladder words. Some such sites were found only by reading.
- Other routes to the same act that the searches did not sweep: 615 (where roughing majors go), 606 butt-ending, 619 head-butting and 635 spearing as base majors, and Casebook Situations for 603, 607, 623, 628, 634 and 639.
- How a USA Hockey referee classes a screener walk-out or a late hit on an adult man.
- Real devices, 320 px, and screen readers.

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 18: a CLAIM census. You own EXCLUSIVELY the file(s) named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently.
READ FIRST: CLAUDE.md (non-negotiables; READABLE BEATS DEFENDABLE; "brief a claim, never a line"; implied-cap-by-contrast; "a qualifier can change jobs through a move or a trim"; "a sketch in a brief is a claim").
THE CLAIM FAMILY (a hypothesis — refute it for your file before acting): USA Hockey writes, for most contact fouls, a discretionary ladder AND a separate MANDATORY rung: "A major penalty plus game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of <act>", then a match penalty that "may also be assessed". A sentence that prices a USA Hockey foul through the discretionary rung(s) only — "a minor or a major", "no bare minor", "603(a) … 603(c) is a match" — with no mention that a reckless version is a MANDATORY major + game misconduct, tells a reader the reckless act might cost less. Permissive, penalty-bearing. Wave 16/17 fixed this for charging (607(b)); the carried find that opened this wave: body_contact_and_battles' boarding facts line "USA Hockey 603(a) writes no bare minor at all and 603(c) is a match penalty" omits 603(b) and states 603(c)'s "may" as "is".
Reckless-endangerment limbs found in sources/usah.txt by the coordinator (a starting list, NOT authoritative — read each rule yourself, flattened, reading past closing marks; the letter of the mandatory rung differs by rule; confirm each is "shall" and what the match limb says):
  603 boarding (~:3530-3540), 604 body checking / Competitive Contact (~:3590-3600), 607 charging (done in W16/17), 608 checking from behind (~:3720-3732; also "or causes them to go head first into the boards or goal frame"), 609 cross-checking (~:3736-3742), 610 elbowing (~:3827-3833), 620 head contact (~:4296-4302; also "or who intentionally or carelessly contacts an opponent in the head, face or neck"), 621 high sticking (~:4310-4316), 623 hooking (~:4385-4391), 628 kicking (~:4550-4556), 629 kneeing (~:4589-4595), 636 slashing (~:4821-4827), 639 tripping/clipping/leg checking/slew footing (~:5062-5068; slew footing has its own minimum), 640 roughing (~:5140-5146; (g) mandatory major+GM for (b)–(f), (h) match "may"), 602(a) match for reckless endangerment generally (~:3496-3500; wave-16 ruling: the rule-specific major+GM is the mandatory FLOOR, the match is an OPTION — never write the match as mandatory from 602(a)).
TASK: find every place your file prices a USA Hockey contact foul (search the ACT and the rule numbers: 603, 604, 608, 609, 610, 620, 621, 623, 628, 629, 636, 639, 640; "no bare minor", "a minor or a major", "match penalty", "USA Hockey", in EVERY layer — Key focus, Overview, body, facts, Common Mistakes, Key Takeaways, trailer). For each site: PERMISSIVE (the reckless version reads as possibly below a mandatory major + GM, or a "may" match stated as "is"/mandatory — the latter is HARSHER, fix only if it's in a line you're already editing) → fix by adding the mandatory reckless rung in the SAME spoken unit, one plain clause in summary layers (e.g. "…and a reckless one is a mandatory major plus a game misconduct (603(b))" — a sketch). OK → say why (e.g. the unit already carries it, or doesn't price USA Hockey at all). Do not add a new ladder if the document already has one — extend it. Never tie the ejection to injury (these rungs turn on reckless endangerment, not injury). Never trade a caveat; facts caps: run `python3 scripts/check_facts.py --near <file>` first (300 Rule/Convention, 200 else; block MIN 3, MAX_COACHING 8, HARD_MAX 14). "No room" is a question about the BLOCK, not the line — if a line is full, check whether the block can take a new Rule: line before reporting "no room".
LANE: fix only permissive, penalty-bearing defects of THIS claim family. Report anything else as a row with its direction. Readability matters (the owner: readable beats defendable) — one plain clause, not a paragraph.
GATES (no pipes): python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py ; python3 scripts/check_marker_pairs.py <file> (0 LOST). Render: python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/w18_<stem> (SCRATCH=/private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad); read changed units voiced alone (search words, not figures).
REPORT: every site (file:line, layer, rule, verdict), old→new with char counts for facts lines, sources quoted with file:line, the layer test, self-caught errors, and "what this method could not have found".
