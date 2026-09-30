# Round 30 September 2026, wave 17: NHL/PWHL 42.5 and USA Hockey 607(b) in every list of which books make the ejection mandatory for charging a goalie

**Scope.** The wave-16 commit gate blocked because of a lead that wave 16 had half followed (C3/C8). The same closed lists that wave 16 had extended with USA Hockey 607(b) still left out NHL/PWHL 42.5 in three of its own staged files. Its record also placed the survivors only in files it did not own. Wave 17 therefore checked that claim in every file that prices charging a goaltender. It ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". **Waves 16 and 17 commit together**; the wave-16 record is `round_2026-09-30_wave16_usah607b_census.md`, amended to match. Brief: Appendix A.

**The claim.** Some sentences price charging a goaltender with a closed list of the books where the major and game misconduct are **mandatory**, or say the other books "leave it to the referee". Those sentences leave out one of these limbs:
- **NHL and PWHL 42.5** (`nhl_rules.txt:5458-5460`; `pwhl_rules.txt:4489-4491`): *"When a major penalty is imposed under this rule for an infraction resulting in an injury to the face or head of an opponent, a game misconduct shall be imposed."* Only the game misconduct is mandatory, and only once a major has been called.
- **USA Hockey 607(b)** (`usah.txt:3676-3678`): a reckless charge is a mandatory major plus game misconduct.
- **CARHA 52(b)'s injury limb** (`carha.txt:2559-2562`): *"…or who injures an opponent as a result of a charge"*. It has no crease condition.

This is permissive and penalty-bearing: a reader of the missing book hears the ejection as always the referee's choice.

**Files (12 edited in wave 17):**
- `shooting`, `zone_entries`, `offensive_zone_play`, `rink_map` (staged in wave 16, edited again)
- `body_contact_and_battles`, `forechecking_systems`, `goaltender`, `winger`, `special_teams`, `rules_primer`
- `language_and_glossary`, `defending_the_rush`

**Checked but not edited:**
- `time_and_space`: every site covers USA Hockey alone and already carries 607(b).
- `getting_started` and `defensive_zone_coverage`: nothing prices the act.

`center` and `playing_without_the_puck` were fixed in wave 16.

## Method

1. **Eleven authors in parallel,** one per file or file group. Each got the brief as a hypothesis and did a layer test across Key focus, Overview, body, facts, Common Mistakes, Key Takeaways and the trailer.
2. **One follow-up:** `winger` :463 and :565 priced deliberate goalie contact only through 69.2, silent on USA Hockey 607(d) Note 1.
3. **Three readers in parallel:**
   - `rules-verifier` A: `shooting`, `zone_entries`, `offensive_zone_play`, `rink_map`
   - `rules-verifier` B: `goaltender`, `rules_primer`, `special_teams`, `winger`
   - `safety-reviewer` C: `body_contact_and_battles`, `forechecking_systems`, `language_and_glossary`, `defending_the_rush`

   None found anything blocking. Some permissive-direction items were in lane.
4. **Four fix agents** worked on those in-lane items.
5. **Two final line reads,** a `rules-verifier` and a `safety-reviewer`. Neither found anything blocking.
6. **Build**, then a headless-Chrome `site-reviewer`.

## What was wrong, and the fixes (per file)

- **`shooting`:** 42.5 was missing at seven sites, and 607(b) at two. Fixes:
  - Facts :305 and :511 are now the same line (298/300). It covers all six books and ends "…USA Hockey 607(b) if reckless, NHL and PWHL 42.5 if a major injures face or head".
  - Body :319, :485 and :536, Common Mistakes :859, and Key Takeaway 6 :920 also fixed.
  - :485 and :859 now read "607(b) makes the major and game misconduct mandatory too". The earlier "removes the discretion too" came after "8.5(c) is a match penalty", so a listener could hear it as a mandatory match.
  - Left alone: :513 and :538 ("discretion" there means the two-minute option, which 42.5 does not remove).
- **`zone_entries`:** 42.5 was added at nine sites: body :316, :338, :387 and :735 (the main ladder, 42.5 quoted), Common Mistakes :1063 and :1069, Key Takeaways :1129 and :1130, and the trailer. CARHA 52(b)'s injury limb was added at :316, :338, :387 and facts :329 (297/300).
  - **After the commit gate blocked a second time (below),** four facts blocks were fixed. The middle-drive block (:322) gained a new line :331, carrying 607(b) and 42.5. The dump-in block (:700, at HARD_MAX 14) folded 607(b) into :711 and 42.5 into :713; to fit, the "(CARHA-affiliated adult leagues)" gloss was dropped from :713 (the body and :369 still carry it). The wide-drive block gained :305 (CARHA 52(b) and 42.5), and the drives block gained :370 (42.5, with "the major itself stays at the referee's discretion").
- **`offensive_zone_play`:** the file never cited 42.5.
  - Added to facts :561 (298/300), body :622 (quoted; now "makes the game misconduct mandatory"), Common Mistakes :1119 and :1125, and Key Takeaway 5 :1184.
  - Key Takeaway 5 also gained CARHA's injury limb.
- **`rink_map`:**
  - Common Mistakes :590 gained 42.5, and CARHA "mandatory inside it, and anywhere a charge injures".
  - Key Takeaway 15 :657 gained "A charge that injures costs more in some other books too…" ("some", because the IIHF has no injury limb).
- **`body_contact_and_battles`:**
  - Facts :593 (300/300) now reads "Charging is speed built to punish or a jump into a check; no book caps it at a minor — …", with 42.5, 607(b) and 607(e) "allows". A first trim had dropped the definition; it was restored.
  - Facts :1224 (295/300) gained "42.5 compels the misconduct on a major for a face or head injury". The 69.2 quotation became "a minor or a major".
  - Body :612-614, :1187 and :1231, and Common Mistakes :1792 and :1804 also gained the limbs.
  - Check-yourself Q11 :1882 "which book" became "which books … and what each one needs first".
- **`forechecking_systems`:** four spoken units priced USA Hockey charging through 607(a)/(c) and (e) with no 607(b). Fixes:
  - Facts :240 (294/300) and :762 (297/300) gained 607(b).
  - New facts line :242 reads "An NHL or PWHL charging major does not always come alone — …42.5…".
  - Facts :759 (300/300) gained 42.5.
  - Body :253 and :774, Common Mistakes :920 and :933, and Key Takeaway 8 :994 also fixed.
  - :253 now reads "the IIHF's own ladder is three discretionary rungs", so it cannot be heard as the IIHF sharing 42.5.
- **`goaltender`:** 607(b) was already in every layer; the gap was 42.5.
  - Facts :1119 (299/300) now reads "…From behind, NHL and IIHF 43.2 have no minor" (the NHL was missing).
  - Facts :1122 (297/300) and body :1141 also fixed.
  - :1106 "three books take the tier out of the referee's hands" was kept. The tier there is the major-plus-game-misconduct pair, and 42.5 leaves the major discretionary. Reader B agreed.
- **`winger`:**
  - Facts :471 "mandatory ejection outright in two books" (297/300). The conditional limbs follow in :472, in the same chunk (037).
  - Key Takeaway 8 :754 gained USA Hockey 607(b) and NHL/PWHL 42.5.
  - Follow-up, facts :463 (299/300): the 69.2 quotation became a paraphrase (kept verbatim in the body), and "USA Hockey 607(d) Note 1 makes it charging, never a bare minor" was added.
  - Follow-up, body :565: gained the USA Hockey charging sentence.
- **`special_teams`:**
  - Facts :1092: 42.5 was moved out of the discretionary run.
  - Facts :1093: "Three books make the ejection mandatory" became an open list with 42.5.
  - Body :1102 (607(b) now in the same chunk as 607(c)) and :1114, and Key Takeaway 10 :1245, also fixed.
- **`rules_primer`** (no facts blocks):
  - Body :704 gained 607(b) and CARHA 52(b) with both limbs ("or any charge that injures wherever it happens").
  - :708 and blockquote :718 gained 607(b); the ladder :723 gained 42.5 and 607(b) quoted.
  - Common Mistakes :1013 and Key Takeaway 9 :1100 also fixed.
- **`language_and_glossary`:**
  - Common Mistakes :441 gained 42.5.
  - "that mandatory ejection is a floor rather than a ceiling" now covers all five books named, and adds NHL/PWHL 42.4's match for a deliberate injury. The first rescope, "In USA Hockey, Hockey Canada and CARHA", had implied the game misconduct was the NHL's ceiling; reader C flagged it as borderline permissive.
  - Key Takeaway 11 :469 also fixed.
- **`defending_the_rush`:** Common Mistakes :900 gained 607(b).

**How the fixes were worded.**
- Every 42.5 limb makes only the game misconduct mandatory, and only once a major is called.
- No wording says an injury ejects.
- 607(e)'s match is always "may" or "allows".

**Errors the authors caught themselves:**
- `language_and_glossary`: "all three books" had lost its antecedent.
- `shooting`: "removes it too" pointed at the match.
- `zone_entries`: the short form "a major injures" was rejected.
- `body_contact_and_battles`: a split made a block of 15 facts, over HARD_MAX; it was merged back.
- `offensive_zone_play`: "each book's" wording was corrected to "the NHL's reads".
- `rules_primer`: a broken `**` was fixed.

## Second commit-gate block and repair

The combined wave-16/17 re-gate **blocked** (C3/C4) on `zone_entries` facts :329. Wave 17 had edited that line, and it still named only Hockey Canada and CARHA as mandatory, with no 607(b) or 42.5 anywhere in its block. **This record and the final rules read had carried it as "pre-existing; no room left". That was false:** the line was full, but its block had room for a new line. The gate also found the same shape, unrecorded, in the dump-in block (:702-711). The fix agent's own sweep then found it in two more blocks. All four are fixed (see `zone_entries` above), and a `rules-verifier` read of the five lines found nothing blocking. **The lesson:** "no room" on a facts line is a claim about the LINE; the question is whether the BLOCK has room, and here it did.

## Markers

`check_marker_pairs` reports 0 LOST and 0 missing by key on all 15 files changed against HEAD (waves 16 and 17). HEAD=tree counts:
- `language_and_glossary` 25; `rink_map` 25; `rules_primer` 176
- `playing_without_the_puck` 35; `time_and_space` 16
- `center` 52; `goaltender` 110; `winger` 40
- `defending_the_rush` 43; `forechecking_systems` 55; `offensive_zone_play` 50
- `special_teams` 59; `zone_entries` 28
- `body_contact_and_battles` 142; `shooting` 54

## Gates and build

- **Checkers:** `check_links --quiet`, `check_facts`, `check_absolutes`, `check_geometry`, `check_secrets` and `check_counts` all exit 0. `check_counts` reports every live figure matches.
- **URLs:** no URL added. Per-file `https?://` counts against HEAD are unchanged on all 15 files.
- **Diff against HEAD (waves 16+17):** 103 insertions and 96 deletions across 15 files, after the second gate repair. Before that repair it was 98+/94−. Wave 17 alone, measured against the wave-16 index before that index was replaced: 63+/62− across 12 files; this can no longer be reproduced.
- **Build:** rebuilt after the second gate repair. The chain started 10:52:54 (the `diagrams.json` write) and the `zone_entries` page was written at 10:53:28, using the absolute npm. Exit 0, full chain to `check:links`: 54 pages, all links and anchors resolve. The last content edit (`zone_entries`) was at 10:49:47. The four new strings from :305, :331, :370 and :711 are each present once in the built page. `--panels` 0 and `--bare` 0.
- **Earlier build:** the first build (10:21:35–10:22) came after the 10:20 edit, and the site review below was run on it.
- **After the build:** `--panels` 0 and `--bare` 0 site-wide.

## Rendered site (`site-reviewer`, headless Chrome 154 over CDP)

**CLEAR** on the 10:22 build. 12 pages × 400/1440 × light/dark (48 loads). The five `zone_entries` facts lines from the second gate repair came after this review. They contain no ⚠ and no bold, and are checked only by the grep of the rebuilt page above. They were not seen in a browser.
- 101 rendered units carry "42.5" or "607(b)"; all 404 unit-checks pass.
- Of the 288 glyphs in those units, all are inside `span.warn-inline` with an NBSP after, and glyph counts match the source.
- 0 panels, 0 bare glyphs, 0 untreated glyphs, 0 literal `**`.
- No overflow, and the console is clean.

The `special_teams` "unwrapped strong" hit was the probe's own error: the glyph is wrapped inside a nested span.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×3, `safety-reviewer` ×2 | `nhl_rules.txt` 42.1–42.5 (:5419-5460), 43.2–43.5 (:5473-5483), 69.2 (:7168-7172), 69.4; `pwhl_rules.txt` 42 (:4462-4495), 71.2; `usah.txt` 607 (:3663-3699); `hc.txt` 8.5 (:6981-7033), 7.4 (:6053-6123, the charging-injury limb at :6087-6089); `carha.txt` 52 (:2550-2567), 48(a), 30(a); `iihf_rules_2026-27.txt` 42, 43, 69; `eihl_casebook.txt:522-524`. |
| D2 | Exceptions | Yes | same | 42.5 conditioned on a major; CARHA's two limbs; IIHF 43.1 turned-back carve-out noted. |
| D3 | Rule-set divergence | Yes | same | Six books on mandatory tiers for charging a goaltender. |
| D4 | Citation integrity | Yes | readers | 42.5, 607(b), 52(b), 42.4 and 43.2 quoted verbatim where quoted. |
| D5 | Provenance | Partly | coordinator | No URL added; trailers gained dated read notes. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "IIHF has no injury limb in Rule 42"; "IIHF writes no match penalty" (0 hits). |
| D7 | Cardinal rule | Yes | readers | Tariffs only. |
| D8 | Numeric ownership / restatement | Partly | reader A | `zone_entries` now voices the five-book list at 8 sites (no contradiction); the restatement is carried, below. **Numeric ownership declared out of scope.** |
| D9 | Summary layer | Yes | authors' layer tests, readers | Key Takeaways and Common Mistakes fixed in every file that carried the claim. |
| D10 | Key-facts layer | Yes | readers | Several lines at 297–300/300, fitted by substitution; one new line; one split reverted. |
| D11 | Reader safety | Yes | `safety-reviewer` ×2 | |
| D12 | Read-aloud integrity | Yes | authors and readers rendered `md_to_speech` | Every added limb sits in the same chunk as its list. |
| D13 | Folklore | Partly | | None introduced; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Prose outside the changed units not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Carried (not blocking)

- **W18: USA Hockey reckless limbs on other acts.** The boarding facts line in `body_contact_and_battles` §5 reads "USA Hockey 603(a) writes no bare minor … 603(c) is a match". It leaves out 603(b), a mandatory major plus game misconduct for reckless boarding, and states 603(c)'s "may" as "is". This is permissive. Other USA Hockey rules with a reckless limb (608, 609, 640) are likely to have the same gap.
- **Restatement in `zone_entries`:** the five-book list is now voiced at 8 sites. That is a readability cost and a propagation risk. It needs a per-layer demotion decision, not a sweep.
- **"A match" as shorthand for a match penalty** in several facts values (`goaltender`, `special_teams`, `offensive_zone_play`, `body_contact_and_battles`, `defending_the_rush`). Voiced alone, it can be heard as "a game".
- **`goaltender` :1576-1577:** two source notes with no blank line between them render as one paragraph of about 5,700 characters.
- **`goaltender` :1119:** "minor up" is clipped, and "have no minor" leaves out the mandatory ejection from behind.
- **`body_contact_and_battles`:**
  - :1224: the dash structure can make IIHF 42.4 read as compelled (harsher).
  - :593: 42.5 is not called mandatory (it says "a game misconduct on a major").
  - KT11 :1900 and CM :1792: "the two minor-hockey books price that shove above a bare minor" (Hockey Canada 8.5(a) is a bare minor; harsher).
- **`zone_entries` (rows from the second gate repair):** :369 "CARHA 52(b) is mandatory too" has a "too" that points at nothing when voiced alone. The "fair game" lists at :330 and :368 omit NHL 42.1 (line numbers after the second repair). :713 dropped the "(CARHA-affiliated adult leagues)" gloss; restore it by substitution. `shooting` :946 trailer still says "USA Hockey's separate reckless-endangerment provisions" were not searched, though the body now states 607(b). :713 could say "for a charge that injures the face or head". :711 could add CARHA's injury limb.
- **`goaltender` CM :1464:** "under two other books the top tier is not the referee's to choose either — Hockey Canada 8.5(b) and CARHA 52(b)" is literally true (the tier is the major-plus-game-misconduct pair, and 42.5 leaves the major discretionary), but it was written from the goaltender's side and no read covered it.
- **`forechecking_systems` :759:** "needless" for 69.4's "unnecessary", and "42.1 have a crease-only goalie clause" is literally incomplete. The net instruction is correct.
- **`offensive_zone_play`:**
  - "a major there is an ejection anyway" (IIHF) needs a check against the 20.4 tables (harsher direction).
  - :885 and :1125: CARHA 52(a)'s mandatory tier for a charge on a skater that injures is not stated.
- **`defending_the_rush`:**
  - Facts :750 "both add a match (607(e), 7.4(c))": 607(e) is "may", and 7.4(c) needs a player "unable to defend themselves".
  - :768: "607(e) a match".
- **`winger`:**
  - :463 omits Hockey Canada 8.5.
  - :565 "That crease test" has a looser antecedent now.
  - KT10 :756 "game misconduct at the floor in five of the six books" (checking from behind) is unverified.
- **`rules_primer`:**
  - :451 charging bullet "four books" omits CARHA 52.
  - Common Mistakes :1013 gives no NHL/IIHF price for goalie contact.
- **`rink_map` :668:** the trailer's PWHL Rule 42 entry does not list 42.5.
- **`shooting` :319:** "The four-book comparison" now covers six books (a stale count).

## What this method could not have found

- **The claim in wording none of the searches used** ("running the goalie", "take out"), and diagram captions and table cells for the added limbs.
- **Other rules pricing the same act:** head-contact rules (NHL 48, IIHF illegal hit to the head, which IIHF 42.1 says supersedes charging), the IIHF 20.4 tables, CARHA 49(a)/54(c), and Hockey Canada 7.2.
- **Real devices, 320 px, and screen readers.**

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 17: a CLAIM census. You own EXCLUSIVELY the one file named in your task. Never touch project/, scripts/, site/, git. Other agents edit other files concurrently.
READ FIRST: CLAUDE.md (non-negotiables; READABLE BEATS DEFENDABLE; "brief a claim, never a line"; implied-cap-by-contrast; "a qualifier can change jobs through a move or a trim").
THE CLAIM (a hypothesis from a carried plan row — refute it for your file before acting): a sentence about the price of CHARGING A GOALTENDER (or goalie contact) that names the books where the major + game misconduct is MANDATORY as a closed list, or says the rest "leave it to the referee", and so omits one of these mandatory limbs. Verify every one yourself (flatten wraps; read past closing marks):
- NHL 42.5 and PWHL 42.5: "When a major penalty is imposed under this rule for an infraction resulting in an injury to the face or head of an opponent, a game misconduct shall be imposed." (nhl_rules.txt ~:5458-5460; pwhl_rules.txt ~:4489-4491). Only the GAME MISCONDUCT is mandatory, once a major is called — never write "an injury ejects".
- USA Hockey 607(b): "A major penalty plus game misconduct penalty shall be assessed to any player who recklessly endangers an opponent as a result of charging." (usah.txt ~:3676-3680). 607(d) Note 1: "Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging." 607(e) match "may also be assessed" — discretionary; never mandatory.
- Hockey Canada 8.5(b): "A Major penalty and Game Misconduct penalty will be assessed to any player who charges the goaltender." (hc.txt ~:7009-7010) — no location.
- CARHA 52(b): "…shall be assessed to any player who charges a goalkeeper while the goalkeeper is within the goal crease or who injures an opponent as a result of a charge." (carha.txt ~:2559-2562); CARHA 30(a) every major ejects.
- IIHF 42.4 is discretionary ("may assess a major penalty and a game misconduct penalty" for reckless endangerment, no injury needed); 43.3 (checking from behind) is automatic GM with its own recklessly-endangers condition. IIHF has no match penalty.
Settled in project/reviews/round_2026-09-30_wave16_usah607b_census.md — the form used there: "NHL and PWHL 42.5 if a major injures face or head", "USA Hockey 607(b) if reckless".
TASK: find the claim wherever it appears in your file, in EVERY layer (Key focus, Overview, body, facts, Common Mistakes, Key Takeaways, trailer) — search the ACT (charg, goalie/goaltender/goalkeeper, crease, mandatory, "referee's call", "leave it to the referee", discretion, 42.1, 42.5, 607, 8.5, 52(b), "two of", "three books", "four of six", "only"). For each site: PERMISSIVE (a book reads as never mandatory when it is, or a USA Hockey charge reads as possibly less than major+GM when reckless) → fix; OK → say why. Fix by adding the missing limb in the SAME spoken unit, in one plain clause in summary layers. Do not add a new ladder if the document already has one — extend it. Never trade a caveat; facts caps: run `python3 scripts/check_facts.py --near <file>` first (300 Rule/Convention, 200 else; block MIN 3, MAX_COACHING 8, HARD_MAX 14); fit by substitution; if a line cannot fit without dropping a caveat, report it — do not cut.
LANE: fix only permissive, penalty-bearing defects of THIS claim. Report anything else as a row with its direction.
GATES (no pipes): python3 scripts/check_links.py --quiet ; python3 scripts/check_facts.py ; python3 scripts/check_absolutes.py ; python3 scripts/check_marker_pairs.py <file> (0 LOST). Render: python3 scripts/md_to_speech.py --only <stem> --out <SCRATCH>/w17_<stem> (SCRATCH=/private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad); read changed units voiced alone (search words, not figures — the renderer spells numbers out).
REPORT: every site (file:line, layer, verdict), old→new with char counts for facts lines, sources quoted with file:line, the layer test, self-caught errors, and "what this method could not have found".
