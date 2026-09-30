# Round 30 September 2026, wave 14: the census remainder on `on_ice_communication` and `winger`, and an implied cap for the NHL, IIHF and PWHL

**Scope.** This wave covers the two wave-13 census sites that sat in files wave 12 held. They could only start after wave 12 committed. It ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". The brief was wave 13's census brief (Appendix A); the rule it relies on was settled in `round_2026-09-30_wave13_usah625_census.md`.

**Files:** `content/foundation/on_ice_communication.md` and `content/positions/winger.md`.

## Method

1. Two authors, one per file.
2. A `rules-verifier` read both files.
3. Scoping fixes.
4. A `safety-reviewer` read both files.
5. A fix for the implied-cap major.
6. A `rules-verifier` line read found a blocking error introduced by a cap-fitting trim.
7. A fix.
8. A final `rules-verifier` line read: NOT BLOCKING.
9. A `site-reviewer` in headless Chrome over CDP.

## What was wrong, and the fixes

**`winger`: deliberate goalie contact routed to interference (CONTRADICTED, permissive)**

The problem, at body :479 and CM :686: "Hockey Canada and USA Hockey reach the same act through interference … USA Hockey 625(a)(8) is a minor".

The fix:
- **USA Hockey** now "splits the act by intent". 607(d) Note 1 is quoted: *"Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging"*. 607(a) and (c) have no bare minor, and 607(e) is a match.
- **Hockey Canada** now carries 8.5(b) in full: a major plus game misconduct on the degree of violence, **mandatory** for a player who charges the goaltender *or* who injures them with an interference that would otherwise be a minor (`hc.txt:7004-7017`). 8.5(c) is a match.
- **Also fixed:** the blockquote at :487 gained the deliberate limb, and the trailer at :790 was extended.

**`on_ice_communication`: 625 presented as the whole price of walking out a screener (permissive)**

- **Body :281** now holds ONE full USA Hockey ladder: the Declaration hook "not in control of the puck"; 640(d)/(g)/(h); 608(a); 609 (cross-reference to :285); 602(a).
- **Facts :267:** "never only a two-minute risk".
- **Common Mistakes :569:** the summary sentence.

**`on_ice_communication`: an implied cap for the NHL, IIHF and PWHL (major, pre-existing, made sharper by this wave)**

- **The problem:** facts :265 and :266 priced NHL/IIHF 56.2(i) and PWHL 57.2(i) as "a minor". The line after them then said "never only a two-minute risk **under USA Hockey**". Heard in sequence, that told NHL, IIHF and PWHL readers — which includes every British reader — that their book stops at two minutes.
- **What the books say:** NHL 56.4 (discretionary major) and 56.5 (game misconduct on an injury major); IIHF 56.4 and 56.5; PWHL 57.4 and 57.5.
- **The fix:**
  - :265 now reads "a minor at 56.2(i), a major at 56.4".
  - :266 now reads "57.4 a discretionary major".
  - :267 now opens "In no book is walking a screener out only a two-minute risk".
  - Body :281 now carries 56.4/56.5/57.x.
  - CM :569 now reads "In no book … NHL and IIHF 56.4 (PWHL 57.4), Hockey Canada 8.3(b) and CARHA 66(a) reach a major".

**Scoping fixes (harsher direction, flagged by the `rules-verifier`)**
- :267 no longer says "in any game … roughing". In Adult Male, 640(b) excepts the act, and a stick-down walk-out meets no 640 limb. 602(a) keeps "never only two minutes" true in every game.
- `winger` :479 gained 8.5(b)'s injury limb.

**Blocking error created by a length trim, caught and fixed**
- **What happened:** to fit the 300-character cap, `winger` facts :472 changed "is its in-game ceiling" (where "its" meant the IIHF) to "caps it in-game". That made "it" mean charging in every book. False: NHL and PWHL 42.4 are match penalties, and so is USA Hockey 607(e).
- **The fix:** the line now reads "…and the IIHF (no minor from behind, 43.2; no match penalty): 42.4's major plus game misconduct is its in-game ceiling…".
- **Verified:** `matchpenalt` scores 0 across every IIHF text on disk. "Four of six" is right: Hockey Canada 8.5(b) and CARHA 52(b) are the two books that make the ejection mandatory.
- **Lesson:** a qualifier can change jobs through a trim as easily as through a move.

## Markers

`check_marker_pairs` found 0 LOST: `on_ice_communication` 26→26 and `winger` 40→40.

## Gates and build

- **Checkers:** `check_links`, `check_facts`, `check_absolutes` and `check_counts` all exit 0.
- **URLs:** no URL added (per-file counts against HEAD).
- **Build:** 06:49–06:51, absolute npm, exit 0, full chain to `check:links` (54 pages, all links resolve). The newest wave-14 edit was 06:27:49, before it.
- **After the build:** `--panels` 0 and `--bare` 0 on both pages.

## Rendered site (`site-reviewer`, headless Chrome 154 over CDP)

**CLEAR.** 2 pages, each at 1440, 400 and 320 px in light and dark.

- 0 panels, bare glyphs and untreated glyphs.
- No literal `**` and no raw facts `pre`.
- The 14-line facts block renders as `dl.facts`.
- The amber runs sit on the hazard text.
- No overflow, console clean, no off-origin requests.

**Content observations passed on (not rendering defects):**
- The on_ice ladder paragraph is about 4,850 characters, which raises the "length is a defect" question.
- One `winger` amber run sits on a pointer sentence.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier` ×3 (a full read and two line reads), `safety-reviewer` | Greps quoted in the reports. Key refs: `usah.txt` :318-319, :404-406, :3498-3500, :3675-3700, :4490-4492, :5114-5147; `hc.txt` :6839-6853, :7004-7021; `nhl_rules.txt` :5419-5455, :6354-6373; `iihf_rules_2026-27.txt` :3983-4031, :4864-4879; `pwhl_rules.txt` :4466-4489, :5365-5371; `carha.txt` :2390, :2559-2562, :3106-3112. |
| D2 | Exceptions | Yes | same | 640(b) Adult Male; 607 Casebook Situations 4/5 noted, NOT added to summaries. |
| D3 | Rule-set divergence | Yes | same | Six books on charging a goalie and on interference ceilings. |
| D4 | Citation integrity | Yes | readers | 607(d) Note 1 and HC 8.5(b) quoted verbatim. |
| D5 | Provenance | Partly | coordinator | No URL added. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | `rules-verifier` | "No match penalty" in the IIHF verified (0 hits across all IIHF texts). |
| D7 | Cardinal rule | Yes | readers | Tariffs only; no tactics changed. |
| D8 | Numeric ownership | Partly | | No new figures; **declared out of scope**. |
| D9 | Summary layer | Yes | readers | The claim was traced in every layer. |
| D10 | Key-facts layer | Yes | readers | Facts lines read voiced alone; the block is at HARD_MAX, so in-line edits only. |
| D11 | Reader safety | Yes | `safety-reviewer` | |
| D12 | Read-aloud integrity | Yes | readers rendered `md_to_speech` | |
| D13 | Folklore | Partly | | None introduced; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | Body prose outside the changed units not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` | CLEAR. |

## Carried (not blocking)

- **The corpus-wide NHL/IIHF/PWHL 56.4/57.4 census.** This is the wave-15 prep, already running.
- **`winger` :472 incompletes:** NHL/PWHL 42.5 (mandatory game misconduct on a face or head-injury major); USA Hockey 607(b); IIHF 43.3 "automatic game misconduct" not voiced.
- **On_ice :281** cites 640(d), not 640(b), as the natural limb.
- **Winger :686** "only accidental contact to interference" misses deliberate stick interference.
- **Length:** the on_ice ladder paragraph is about 4,850 characters.

## What this method could not have found

- **The claim in words none of the sweeps used.**
- **Whether "can be roughing" matches how USA Hockey referees call a stick-low walk-out.**
- **Other rules pricing an act against a goaltender** (head contact, boarding) beyond Rules 42/43/607/8.5.
- **Real devices and screen readers.**

## Appendix A — the census brief (the wave-13 brief, reused), verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 13: a CLAIM census. You own EXCLUSIVELY the one file named in your task. Never touch project/, scripts/, site/, git. Other agents are editing other files.
READ FIRST: CLAUDE.md (non-negotiables; "READABLE BEATS DEFENDABLE"; "brief a claim, never a line"; the implied-cap-by-contrast warnings) and project/plans/OPEN_ITEMS.md section "WAVE 13" (the settled rule and the census).
THE CLAIM: USA Hockey Rule 625 (interference) is a minor and writes no higher tier — TRUE of the rule, FALSE if presented as the whole price of the ACT (hitting / walking out / impeding / checking a player not in control of the puck). USA Hockey can price the act as roughing under 640 (via (b)–(f) to 640(g) major+GM, 640(h) match; (d) needs no effort to play the puck AND stick above the knees), cross-checking 609(b)/(c) with the shaft, checking from behind 608, 604(c)/(d)/(e) where checking is barred, and 602(a) match for reckless endangerment by any act. Hook: "a player not in control of the puck" (Declaration / Standard of Play / Glossary) — do NOT cite 640(b)'s "no longer in control" for a player who never had the puck. Adult Male via 640(b)→(g) is unsettled — use "can", never state it as settled.
THE NEIGHBOURING CLAIM: 625(a)(8) makes accidental/unavoidable contact with a goalkeeper interference (a minor) — but 607(d) Note 1: "Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging" (607(c) minor+misconduct or major+GM; 607(e) match). Never route DELIBERATE goalie contact to interference.
TASK: find this claim wherever it appears in your file, in EVERY layer (KF, Overview, body, facts, CM, KT) — search for the ACT (walk out, screener, pinch, middle-lane, driver, forechecker, "two minutes", "a minor", "interference" near "USA Hockey"), not only "625". Fix each PERMISSIVE site (a reader would think the act costs at most a minor, or deliberate goalie contact costs interference). In SUMMARY layers use ONE plain sentence with no ladder, e.g. "Under USA Hockey the interference rule itself stops at two minutes, but the same play can be called under other rules that reach an ejection or a match penalty — so it is never only a two-minute risk." Put the full ladder in ONE body place only (verify each rule in sources/usah.txt, flattened). Never write a sentence enumerating several books' tariffs that names some ceilings and not others. Facts caps: `check_facts.py --near <file>` first (300 Rule/Convention, 200 else); fit by substitution, never trade a caveat.
GATES (no pipes): check_links.py --quiet; check_facts.py; check_absolutes.py; check_marker_pairs.py <file> (0 LOST). Render md_to_speech --only <stem> --out <SCRATCH>/w13_<stem> (SCRATCH = /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad); read changed units voiced alone.
REPORT: every site found (file:line, layer, PERMISSIVE/OK), old→new, sources quoted, and "what this method could not have found".

