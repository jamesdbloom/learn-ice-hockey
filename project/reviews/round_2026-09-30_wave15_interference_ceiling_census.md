# Round 30 September 2026, wave 15: the interference-ceiling census, and a summary sentence that tied ejection to injury

**Scope.** A claim census for NHL/IIHF 56.2 and PWHL 57.2 interference priced as "a minor". That is true of the clause and false as the whole price of the act, because each book has a major tier. It ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". It also carried the priority row left by wave 14: `winger` :472 "four of six leave charging a goalie to the referee", which left out mandatory tiers. Brief: Appendix A. Correction brief: Appendix B.

**Files (8):** `content/technique/body_contact_and_battles.md`, `content/technique/shooting.md`, `content/systems/special_teams.md`, `content/hockey-iq/playing_without_the_puck.md`, `content/hockey-iq/scanning_and_anticipation.md`, `content/foundation/rink_map.md`, `content/foundation/rules_primer.md`, `content/positions/winger.md`.

## Method

1. **Authors, one per file-set, in parallel:** `body_contact`; `shooting` + `special_teams`; `playing_without_the_puck`; `scanning` + `rink_map` + `rules_primer`; `winger`.
2. **First reads, in parallel:** `rules-verifier` A (`body_contact`, `shooting`, `special_teams`) and `safety-reviewer` B (`playing_without_the_puck`, `scanning`, `rink_map`, `rules_primer`).
3. **Sentence and floor fixes** on every file (Appendix B).
4. **Second reads, in parallel:** `rules-verifier` A (`body_contact`, `shooting`, `special_teams`, `winger`) and `safety-reviewer` B (the other four). Each found non-blocking points; B found one blocking point, which was fixed.
5. **Third read:** a `safety-reviewer` line read of the last fixes. It found one more blocking point on `scanning` :352, which was fixed.
6. **Fourth read:** a `rules-verifier` line read of that fix. NOT BLOCKING.
7. **Build**, then a headless-Chrome `site-reviewer`.

## What was wrong, and the fixes

**The claim: interference priced at the minor with no tier above it (permissive, penalty-bearing).** There were three shapes:
- **(a)** a 56.2/57.2 minor with no higher tier in the same spoken unit;
- **(b)** a ladder that climbs for some books and leaves NHL/IIHF/PWHL at the minor, which is an implied cap by contrast;
- **(c)** a closed count, such as `special_teams` :1080 "a minor in each of those four".

**The books** (each fixer checked them in the flattened text):
- **NHL** 56.4 is a discretionary major (`nhl_rules.txt:6354-6356`); 56.5 adds a game misconduct on an injury major (:6371-6373).
- **IIHF** 56.4 is a major for reckless endangerment (`iihf_rules_2026-27.txt:4864-4866`); 56.5 is a discretionary major plus game misconduct with **no injury condition** (:4873-4877).
- **PWHL** 57.4 and 57.5 follow the NHL (`pwhl_rules.txt:5365-5371`).
- **Hockey Canada** 8.3(b) and 8.3(e) (`hc.txt:6839-6853`).
- **CARHA** 66(a) and 66(e) (`carha.txt:3107-3112`, :3201-3202), and 30(a).

**The fix** was one ladder in the body of each document at most (`body_contact` :1520, `rink_map` :210, `scanning` :370), plus a book-neutral sentence in the summary layers.

**Brief error #6 (the coordinator's): the approved summary sentence tied EJECTION to INJURY.**
- **The wording:** Appendix A's sentence was "…if the play is violent or reckless it can cost a major, and if it hurts someone it can end your game".
- **Why it was wrong:** it implies a violent hit with nobody hurt costs a major and the player stays in. That is true only for the NHL and PWHL. It is false for Hockey Canada 8.3(b)+(e), CARHA 66(a)/30(a) and IIHF 56.5, and the IIHF is the British reader's book.
- **Who found it:** `rules-verifier` A, blocking. It was at 7+ sites.
- **The corrected sentence:** "Interference is usually two minutes, but that is not the ceiling: a violent or reckless play can cost a major, in some books with an ejection, and one that hurts someone can end your game."
- **Where it was fixed:** every file, including the facts line `body_contact` :207 (300/300) and the Key Takeaway `playing_without_the_puck` KT7 :955.
- **The lesson:** in a book-neutral sentence with two conditional rungs, the second rung's condition reads as gating the first rung's consequence. That is an implied cap built into the sentence structure.

**Deliberate goalie contact has its own floor under USA Hockey (permissive, blocking ×2).**
- **The problem:** "usually two minutes" is false for deliberate contact with the goaltender. 607(d) Note 1 makes it charging (`usah.txt:3689-3693`), which is at least a minor plus a misconduct under 607(a) (:3674-3675).
- **The sites:** `rules_primer` :708 and `scanning` facts :352/:354.
- **The fixes:** `rules_primer` :708 now reads "Under USA Hockey, any deliberate body contact with the goaltender is charging and never just two minutes: a minor plus a misconduct at the least". The same floor was added at `rules_primer` :718, `rink_map` :210 and CM :590, `shooting` :321 and CM :857, `special_teams` CM :1176, and `scanning` :352/:354/:370.

**`scanning` facts :352, a tail that changed books (permissive, blocking, found by the third read).**
- **The problem:** the line ended "…deliberate contact is charging (607), at least a minor plus misconduct; violent or reckless, a major, even your game". That tail was the other books' interference ceiling, but it followed the USA Hockey charging clause, so a listener heard it as USA Hockey's price.
- **What USA Hockey actually says:** 607(b) makes the major plus game misconduct **mandatory** for reckless charging (`usah.txt:3676-3678`).
- **The fix:** the line now ends "reckless, a major plus game misconduct" (292/300). The body at :368 gained the 607(b) mandatory tier and 607(e) match.
- **The census:** the coordinator searched the sentence family "violent or reckless … a major" across the corpus. It appears on 12 other lines, and every one follows an interference clause, not a USA Hockey charging clause.

**`winger` :472: the carried wave-14 priority (permissive by omission).**
- **Facts :472 (300/300)** now reads "Four of six leave charging a goalie to the referee, but NHL and PWHL 42.5 eject on a major hurting face or head, USA Hockey 607(b) on a reckless charge (Note 1: deliberate contact is charging, no bare minor); the IIHF caps it in-game at 42.4's major plus game misconduct, automatic from behind (43.3)".
- **Body :479/:495, CM :686 and the trailer :776** carry 607(b) and 42.5. The :495 disclosure was refreshed, not removed.
- **Verified by the reads:** "four of six" holds, because Hockey Canada 8.5(b) and CARHA 52(b) are the two mandatory books. "caps it" now clearly refers to the IIHF.

**Smaller fixes flagged by the reads:**
- `shooting` :321: the exception is now scoped "to that possession reasoning".
- `shooting` CM :857: "is not an offence".
- `special_teams` CM :1176: "a violent or reckless play".
- `body_contact` facts :1501: a dangling clause now names 602(a).
- `rink_map` :210: the demonstrative now has something to point at.
- `rules_primer` :708/:718: "body contact", because Note 1 does not reach the stick.
- `rules_primer` :458: the closed count "in three of the four books" was removed.
- `playing_without_the_puck` facts :488: "named in three books, a minor in two".

## Markers

`check_marker_pairs` reports 0 LOST and 0 missing by key on all 8 files. Counts HEAD→tree:
- `body_contact`: 142→142
- `shooting`: 54→54
- `special_teams`: 59→59
- `playing_without_the_puck`: 35→35
- `scanning`: 7→7
- `rink_map`: 25→25
- `rules_primer`: 176→176
- `winger`: 40→40

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts` all exit 0. `check_counts` reports that every live figure matches.
- **URLs:** no URL added. Per-file `https?://` counts against HEAD are unchanged in all 8 files.
- **Diff:** 30 insertions and 30 deletions, all in-line edits.
- **Build:** started 09:02 with the absolute npm, exit 0, full chain to `check:links` (54 pages, all links and anchors resolve). The last content edit (`scanning`, 09:00) came before it.
- **After the build:** `--panels` 0 and `--bare` 0 site-wide.

## Rendered site (`site-reviewer`, headless Chrome 154 over CDP)

**CLEAR, 19 of 19 targets pass.** 8 pages, each at 400 and 1440 px in light and dark (32 loads).
- 0 `aside.callout-warning`, 0 glyphs outside `warn-inline`, 0 untreated glyphs inside strong runs, and 0 literal `**`.
- An NBSP follows every target glyph.
- No facts line overflows at 400 px, and there is no horizontal page scroll.
- The console is clean and there are no off-origin requests.
- Amber contrast is 6.04:1 in light and 9.62:1 in dark.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×3, `safety-reviewer` ×3 | Refs above. Also `usah.txt` 602(a) :3496-3500, 625(a)(8); `usah_casebook.txt` 607 Situations 1–6 (:11623-11740) and 625 Situation 9 (:14996-15008); `nhl_rules.txt`/`pwhl_rules.txt` 42.4/42.5; `iihf_rules_2026-27.txt` 42.1–42.5 and 43.3; `hc.txt` 8.5(b) :7004-7017. |
| D2 | Exceptions | Yes | same | All three 625(b) exceptions kept at `scanning` :354. Casebook 607 Situations 4 and 5 noted, not added to summaries. |
| D3 | Rule-set divergence | Yes | same | Six books on interference ceilings and on charging a goalie. |
| D4 | Citation integrity | Yes | readers | 607(b) and 607(d) Note 1 quoted verbatim. |
| D5 | Provenance | Partly | coordinator | No URL added. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "USA Hockey and the IIHF write none" (`winger` :495) was checked against 607 and IIHF 42. |
| D7 | Cardinal rule | Yes | readers | Tariffs only; no tactics changed. |
| D8 | Numeric ownership | Partly | | No new figures; **declared out of scope**. |
| D9 | Summary layer | Yes | readers | The claim was traced in every layer ("brief a claim"); Key Takeaways and Common Mistakes fixed. |
| D10 | Key-facts layer | Yes | readers | Facts lines read voiced alone. Several are at 300/300 and were fitted by substitution. |
| D11 | Reader safety | Yes | `safety-reviewer` ×3 | |
| D12 | Read-aloud integrity | Yes | readers rendered `md_to_speech` | `scanning` :352 is chunk 024 and :354 chunk 025, each voiced alone. |
| D13 | Folklore | Partly | | None introduced; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Prose outside the changed units was not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Carried (not blocking)

- **W16 candidate:** USA Hockey charging priced through 607(a)/(c) with no 607(b) mandatory tier, in `shooting`, `rink_map`, `playing_without_the_puck`, `time_and_space`, `center`, `zone_entries` and `offensive_zone_play`.
- **`scanning` :352:** the reckless tier leaves out the 607(e) / Casebook Situation 4 match option. The line already states an ejection, and adding it takes about 9 characters it doesn't have.
- **`body_contact` facts :1501:** the Hockey Canada 8.3(b) and CARHA 66(e) mandatory injury limbs are not stated. This is not a lower ceiling.
- **"Any deliberate contact … charging" against Casebook 607 Situation 5** (possession engagement): the corpus is harsher than the book here. `rink_map` :590 settles the split on the cautious side.
- **`body_contact` KT4:** no price for full-checking interference.
- **Length:** single paragraphs of 18,096 characters (`special_teams`, "each of those four"), 7,548 (`body_contact`) and 6,513 (`scanning` :368).
- **`scanning` :370 (commit gate):** the goalie-contact ceiling cites Hockey Canada 8.3(b)/(e); 8.5 (contact with the goaltender) is the closer rule, with the same tiers and a mandatory charging limb. Not understated ("can").
- **`winger` :472 (commit gate):** "automatic from behind (43.3)" leaves out 43.3's own "and who recklessly endangers" condition. That errs in the stricter direction.
- **`rules_primer`:** the other "three of the four books" closed counts (:36, :72, :471), about other acts.

## What this method could not have found

- **The claim in wording none of the searches used**, and the same sentence family following a USA Hockey clause in some paraphrase other than "violent or reckless".
- **Other rules pricing contact with a goaltender** (head contact, boarding), beyond 42/43/56/57/607/625/8.3/8.5/66.
- **Rule 604's age and class limits** on which USA Hockey tier a youth reader actually meets.
- **Real devices, 375 and 320 px, and screen readers.**

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 15: a CLAIM census. You own EXCLUSIVELY the one file named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently; a commit gate may be running on on_ice_communication.md and winger.md (not yours).
READ FIRST: CLAUDE.md (non-negotiables; READABLE BEATS DEFENDABLE; "brief a claim, never a line"; the implied-cap-by-contrast warnings).
THE CLAIM: NHL/IIHF 56.2(i)/(iii) and PWHL 57.2(i)/(iii) interference priced as "a minor" — true of 56.2/57.2, FALSE as the whole price of the ACT. Verified this session (read them yourself, flattened, reading past closing marks):
- NHL 56.2(i) "A minor penalty for interference can be imposed" (nhl_rules.txt:6319-6321); 56.4 discretionary major "based on the degree of violence" (:6354-6356); 56.5 GM "shall be imposed" when the major is for an injury (:6371-6373). NOTE: with nobody hurt an NHL major carries NO GM.
- IIHF (2026/27 and v1.1 identical): 56.2(I) minor "shall be assessed" (iihf_rules_2026-27.txt:4820-4822); 56.4 discretionary major where the player recklessly endangers (:4864-4866); 56.5 discretionary major + GM for reckless endangerment, NO injury condition (:4873-4877).
- PWHL 57.2(i) "can be imposed" (pwhl_rules.txt:5322-5324); 57.4 discretionary major (:5365-5368); 57.5 GM "must" on an injury major (:5369-5371).
- For comparison: HC 8.3(b) discretionary major+GM on violence AND mandatory major+GM where it injures (hc.txt:6839-6847); 8.3(c) match; CARHA 66(a) minor or discretionary major+GM (carha.txt:3107-3112), 66(e) mandatory major on injury (:3201-3202), 30(a) every major ejects; USA Hockey 625 minor-only but the act reaches 640/602/609/608/604 (settled in project/reviews/round_2026-09-30_wave13_usah625_census.md).
SUMMARY-LAYER SENTENCE (no book, no count, only for CONTACT — a no-contact screen has no "violence" to price): "Interference is usually two minutes, but that is not the ceiling: if the play is violent or reckless it can cost a major, and if it hurts someone it can end your game." Do NOT write "a major and an ejection" as one tier (an NHL/PWHL major with nobody hurt carries no GM).
THE SHAPE TO FIX: (a) a 56.2/57.2 minor with no higher tier in the same spoken unit, where the act can involve contact; (b) an enumeration that ladders some books (USAH 604, HC 7.3/8.3, CARHA 66(a), IIHF 101.1) and leaves NHL/IIHF/PWHL 56/57 at the minor — an implied cap by contrast; (c) a closed count ("in each of those four", "three of the four books") that is false for the act. Fix by ONE of: adding the tier in the same unit, making the sentence book-neutral, or removing the count. Full ladder in ONE body place per document at most. Never trade away a caveat; facts caps: run `python3 scripts/check_facts.py --near <file>` first (300 Rule/Convention, 200 else; block MAX_COACHING 8, HARD_MAX 14).
Search the ACT in every layer (interfer, impede, path, walk out, screener, minor, two minutes), not only "56.2". A tariff for a no-contact screen/route is OK if it prices only the no-contact act — judge it.
GATES (no pipes): check_links.py --quiet; check_facts.py; check_absolutes.py; check_marker_pairs.py <file> (0 LOST). Render md_to_speech --only <stem> --out <SCRATCH>/w15_<stem> (SCRATCH=/private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad) and read changed units voiced alone.
REPORT: every site (file:line, layer, verdict), old→new, sources quoted, and "what this method could not have found".

## Appendix B — the correction brief (brief error #6), verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. W15 correction. Edit ONLY your named files; never touch git/project/scripts/site. Read /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad/w15_brief.md for rules and gates.
BLOCKING (rules-verifier), a COORDINATOR BRIEF ERROR: the approved summary sentence "…if the play is violent or reckless it can cost a major, and if it hurts someone it can end your game" (and variants) ties EJECTION to INJURY. That implies a violent hit with nobody hurt costs a major and you stay in — true only for NHL/PWHL (56.5/57.5 GM only on an injury major). FALSE for: Hockey Canada 8.3(b)+(e) (every interference major carries a GM; discretionary on violence with nobody hurt; mandatory on injury) (hc.txt ~:6837-6851); CARHA 66(a) (major+GM pair) and 30(a) (every major ejects) (carha.txt ~:3106-3109, :1417-1426); IIHF 56.5 (discretionary major+GM on reckless endangerment, NO injury term) (iihf_rules_2026-27.txt ~:4873-4877) — the British reader's book. Verify.
REPLACE every instance in your files with a sentence that does not tie ejection to injury — sketch (check against the prose at each site; adapt tense/subject): "Interference is usually two minutes, but that is not the ceiling: a violent or reckless play can cost a major — in some books an ejection with it — and one that hurts someone can end your game." Keep it book-neutral. Where a facts line is at its cap, fit by substitution (never drop a caveat). Where the site prices DELIBERATE GOALIE CONTACT, the sentence must not imply "usually two minutes" under USA Hockey (607(d) Note 1 + 607(a): charging, minor+misconduct at the least) — scope it or add the USAH floor.
Also fix these readability nits where they are in your files: shooting :321 "USA Hockey is the exception" → "the exception to that reasoning" (or move the ceiling sentence after the USAH passage) so it can't be heard as USAH being an exception to "not the ceiling"; shooting CM :857 the ceiling sentence now sits before "Holding ice you already occupy is not" → make it "is not an offence"; special_teams CM :1176 "a violent or reckless one" (grammatically the penalty) → "a violent or reckless play"; body_contact facts :1501 last clause "USA Hockey's is outside 625, at 602(a)" dangles → name it ("USA Hockey's major tier is outside 625: 602(a), a mandatory match for reckless endangerment") if it fits 300.
Gates without pipes: check_links --quiet; check_facts; check_absolutes; check_marker_pairs per file (0 LOST). Render each stem to <scratchpad>/w15fix_<stem> and read the changed units voiced alone. Report every site old→new.
