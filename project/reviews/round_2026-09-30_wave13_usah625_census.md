# Round 30 September 2026, wave 13: the USA Hockey 625 / 607 claim census, and the last two amber panels

**Scope.** This wave ran under the owner's `/loop` instruction "keep working on P1 and P2 with as much parallelism as possible". It had four parts.

**1. The claim census.**
- USA Hockey Rule 625 (interference) is minor-only. That is true of the rule, but false when it is presented as the whole price of the ACT: hitting, walking out or impeding a player who does not have the puck.
- The neighbouring claim: under 625(a)(8), accidental contact with a goaltender is interference. But 607(d) Note 1 reads *"Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging"*.

**2. Carried along the way.** The same readers found a Hockey Canada "writes nothing lateral" claim in `forechecking_systems` and `offensive_zone_play`, and WNIHL collisions in `defending_the_rush`.

**3. P2.** The last two amber panels on the site were moved inline: in `conditioning_and_recovery` (the header note) and `mental_game` (a Sources-trailer note). **After this wave there are 0 amber panels site-wide.**

**4. Two pre-existing site defects** found by the `site-reviewer`:
- **Header-note warning runs rendered in body colour, not amber** (`site/src/styles/global.css`).
- **A 1,546-character concussion paragraph rendered as a setext `<h2>`**, because a `---` line followed it with no blank line.

**Files.**
- **Content:** `center`, `defending_the_rush`, `forechecking_systems`, `time_and_space`, `scanning_and_anticipation`, `offensive_zone_play`, `conditioning_and_recovery`, `mental_game`.
- **Site:** `site/src/styles/global.css`.

The shared brief is in Appendix A.

## The settled rule (a `rules-verifier` settled it before any author wrote)

**Rule 625 is minor-only.** Appendix I lists 625(a), 625(a.8) and 625(a.9) as Minor, and Casebook 625 Situations 1–15 never escalate.

**Where the act goes higher.** For a player **not in control of the puck** — the wording of the Declaration of Player Safety (`usah.txt:318-319`, and its Body Checking Category sentence at :404-406), the Standard of Play (:610) and the Glossary (:5999) — the act can be:
- **Roughing under 640.** It reaches 640(g) (major plus game misconduct) and 640(h) (match) only through sub-sections (b)–(f).
  - (d) needs *"no effort to gain possession of the puck and the blade of the player's stick is above the knees"*.
  - (b) excepts Adult Male and is written for a player "no longer in control".
- **Cross-checking with the shaft**, under 609(b)/(c).
- **Checking from behind**, under 608.
- **An illegal check where checking is barred**, under 604(c)–(e).
- **A match penalty for recklessly endangering by any act**, under 602(a).

Adult Male via 640(b)→(g) is **unsettled** and is written only as "can".

**The summary-layer sentence:** *"Under USA Hockey the interference rule itself stops at two minutes, but the same play can be called under other rules that reach an ejection or a match penalty — so it is never only a two-minute risk."* The full ladder lives in ONE body place per document.

## Permissive, penalty-bearing (fixed in every layer)

**Rule 625 presented as the whole price of the act**
- **`center`:** facts :653 was split into a new Rule line; CM :722; ONE body ladder at :665.
- **`defending_the_rush`:** facts :310; ONE body ladder at :318, which quotes the Declaration hook verbatim.
- **`forechecking_systems`:** CM :928 said the hit is "caught by an interference clause rather than a checking one". It now reads "not only by the checking rules" and adds the summary sentence. Facts :581 (300/300).
- **`offensive_zone_play`:** body :887 and CM :1126. The census found these; they were not briefed.

**Deliberate goalie contact routed to interference (607(d) Note 1; 607(a)/(c) with no bare minor; 607(e) match)**
- **`center`:** :462 and :466.
- **`time_and_space`:** body :287/:481 and CM :576.
- **`scanning_and_anticipation`:** facts :354 (297/300), and body :368/:370.
- Both of the last two files had no "607" at all before this wave.

**Hockey Canada "writes nothing lateral at all"** (`forechecking_systems` CM :928; `offensive_zone_play` :887/:1126)
- The text told a Hockey Canada reader above U13 that contact on a winger without the puck is not priced as interference. It is: Rule 8.3 reads *"impedes the progress of an opponent, who is not in possession of the puck"*, with a minor, a major plus game misconduct (8.3(b), mandatory where it injures), and a match (8.3(c)).
- **"Three of the four books write it" was true of a CLAUSE and false of the ACT.**
- A later round found that the repair had itself put a **complete 8.3 ladder beside an incomplete 7.3 ladder**. A U13 or female-hockey listener then heard no mandatory ejection and no match, which was false against 7.3(b) *"must be assessed"* on injury and 7.3(c).
- `forechecking_systems` now states ONE shared ladder for both rules. `offensive_zone_play` and `center` state both branches with the same shape.

**WNIHL (`defending_the_rush` facts :395, body :402).** Both units now lead with "In the WNIHL, play it as no body checking" (`ihuk_wnihl_roc.txt:152-153`).

## Other fixes

- **`center` CM :723.** "Under CARHA … the interference rule itself goes higher" implied the NHL, IIHF and PWHL don't. It now reads "as it does in the NHL, IIHF, PWHL and Hockey Canada books".
- **`time_and_space` CM :576.** "Hockey Canada is stricter still" became a false comparison once wave 13 inserted the charging sentence. The coordinator's sketch, "stricter on the pushed-in case", was **REFUSED** by the agent. It is also false: HC Interpretation 2 to 8.5(a) penalises only contact made with no effort to avoid it, while USA Hockey 625(a)(8) penalises any contact. The text now reads "spells out the pushed-in case".
- **`time_and_space` facts :271.** "stopped a returning goalie" became "impeded", so it cannot be heard as a body check.

## Coordinator sketch errors in this wave

- "Stricter on the pushed-in case" was refused, as above.
- "Stricter still" as originally placed turned into a false comparison after insertion.

The census brief deliberately avoided wording sketches and specified the defect and the constraint instead.

## Markers

- `check_marker_pairs` found **0 LOST** in all eight files.
- `center` went from 51 to 52: a new ⚠️ on the body ladder.
- `conditioning_and_recovery` :9 and `mental_game` :749 were moved without word changes. Both units are unvoiced (the header note and the Sources trailer), so there is no audio effect.

## Gates and build

- **Checkers:** `check_links`, `check_facts`, `check_absolutes` and `check_counts` all exit 0, run without pipes.
- **URLs:** none added (per-file counts checked against HEAD).
- **Build 1:** 06:01–06:05, covering the content.
- **Build 2:** 06:23–06:24, after the CSS and setext fixes. Absolute npm, exit 0, full chain to `check:links`: 54 pages, all links resolve. Internal links went from 11,601 to 11,598, which matches the setext `<h2>` anchor and its contents entry disappearing.
- **Newest wave edits:** content 06:22:20 (the setext blank line) and CSS 06:22:26, both before build 2.
- **After the build:**
  - `--panels` 0 and `--bare` 0 on all eight pages.
  - **0 amber panels site-wide.**
  - The long-`<h2>` check on `conditioning_and_recovery` is False.
  - The direct-child CSS rule is present in the built stylesheet.

## Rendered site (`site-reviewer`, headless Chrome 154 over CDP)

**Pass 1 (build 1): (a)–(f) PASS on all eight pages.**
- 0 panels, bare glyphs, untreated glyphs and literal `**`.
- The conditioning header note is now a plain `doc-header-note` containing an amber run.
- The `mental_game` Edition note is inline.
- The changed rules paragraphs render cleanly.
- No overflow at 320 px, console clean, and the theme toggle persists.

The pass found the two pre-existing defects:
- **M1:** `.doc-header-note:not(.is-warning) strong:first-child { color: var(--text) }` also matched the `<strong>` inside a warn-inline run, on `conditioning_and_recovery`, `goaltender` and `faceoffs`. The fix is a direct-child selector (`> strong:first-child`). Checked in dist: the old selector matched 9 elements and the new one matches 6; the 3 it drops are exactly the warn-inline strongs, and the 6 labels are unchanged.
- **M2:** the setext `<h2>`. A blank line was added and no words changed. A corpus scan for setext underlines found 0; the scan was validated against HEAD, where it does flag the line. The SSML is byte-identical before and after.

**Pass 2 (build 2, 06:24): targeted visual confirm, ALL PASS.** Headless Chrome, `getComputedStyle` measured on `conditioning_and_recovery`, `goaltender` and `faceoffs`, in light and dark.

| | Light | Dark |
|---|---|---|
| Warn-inline `<strong>` inside the header note (all three pages) | rgb(154,74,6) | rgb(240,176,112) |
| The note's own leading label `<strong>` | rgb(27,28,30), body colour | rgb(230,232,234), body colour |

- **Concussion paragraph (`conditioning_and_recovery`):** it is now a `<p>`. No heading contains it, it has no contents entry and no id, and an `<hr>` follows it. Checked at 1440 and 400 px, both themes.
- **Console:** no errors, and no off-origin requests.

**Observation handed to content and safety review:** the concussion paragraph's ambulance-call instructions are bold prose with no amber. That matches the source.

## Dimension coverage

| # | Dimension | Checked? | By whom | Notes |
|---|---|---|---|---|
| D1 | Rules accuracy | Yes | `rules-verifier`: the census prep, plus two line reads; `safety-reviewer` ×2 with source checks; an OZP read | Greps with `sources/` line refs are in each reader's report, and the key refs are quoted above. |
| D2 | Exceptions | Yes | same | 640(b) Adult Male; 640(d) conditions; 625(b) pushed-in carve-out; 607 Casebook Situations 4/5 noted (not added to summaries). |
| D3 | Rule-set divergence | Yes | same | USA Hockey / HC 7.3 / HC 8.3 / NHL / IIHF / PWHL 56.1 / 57.1 lateral clause; CARHA 66(a). |
| D4 | Citation integrity | Yes | readers | The Declaration, 640(d), 607(d) Note 1, HC 8.3 and 7.3(b)/(c) all quoted verbatim. |
| D5 | Provenance | Partly | readers, coordinator | No URL added. Trailer additions (607, IIHF 69, HC 8.5 Goal Crease, CARHA 66(b), PWHL 57.1) cite on-disk texts. No `source-verifier`; **declared out of scope**. |
| D6 | Negative existence claims | Yes | readers | "No equivalent" for 625(b) refuted; "HC writes nothing lateral" refuted as a claim about the act; "no hands sentence" in the NHL and PWHL verified. |
| D7 | Cardinal rule | Yes | readers | Tactics are unchanged; the census touched tariffs only. |
| D8 | Numeric ownership | Partly | readers | No new figures; **declared out of scope**. |
| D9 | Summary layer | Yes | readers | The claim was traced in every layer ("brief a claim, not a line"); ONE ladder per document. |
| D10 | Key-facts layer | Yes | readers | Facts lines were read voiced alone; caps checked with `--near`. |
| D11 | Reader safety | Yes | `safety-reviewer` ×2 | |
| D12 | Read-aloud integrity | Yes | readers rendered `md_to_speech` | Chunk-boundary antecedents fixed (OZP chunk 118; `center` chunk 096). |
| D13 | Folklore | Partly | readers | None introduced; **declared out of scope**. |
| D14 | Structure, style, cross-links | Partly | `check_links`, `site-reviewer` | The setext heading was repaired, and one ToC anchor and three links went away as expected. Body prose outside the changed units was not reviewed; **declared out of scope**. |
| D15 | Rendered site | Yes | `site-reviewer` ×2 | |

## Carried (not blocking)

- **The NHL/IIHF/PWHL interference major (56.4 / 57.4) census.** It is likely missing wherever 56.2(i) or 57.2(i) is priced as "a minor". This census was briefed as a USA Hockey claim, so it could not see it. It was found in `on_ice_communication` and is **being fixed in wave 14. That fix is NOT in this commit**, so at this commit `on_ice_communication` is at HEAD and still carries the gap. The rest of the corpus is untested.
- **`offensive_zone_play`:** :1126 "NHL and IIHF" omits PWHL 57.1. :887 says "the same four", but there are five books.
- **`center` :723:** optional USA Hockey 604(d) parity.
- **`time_and_space`:** facts :268 (borderline, carried); :271 "plus a minor" voiced alone.
- **`scanning_and_anticipation` :355** is at 290/300.
- **`defending_the_rush` facts :310** garden-paths ("…no longer in control of the puck interference, a minor…").
- Deliberate STICK interference on a goaltender is not body contact, so Note 1 does not route it to charging.

## What this method could not have found

- **The claim in words none of the sweeps used**, such as "a bump", "rub-out" or "a trip to the box".
- **A layer built on the old answer that leaves no lexical trace.**
- **Whether "can be roughing" matches how USA Hockey referees call a stick-low walk-out**, especially in Adult Male.
- **Real devices, and screen-reader voicing of the new amber runs.**

## Appendix A — the census brief, verbatim

Repository: /Users/uk45004860/Documents/personal/ice_hockey. Wave 13: a CLAIM census. You own EXCLUSIVELY the one file named in your task. Never touch project/, scripts/, site/, git. Other agents are editing other files.
READ FIRST: CLAUDE.md (non-negotiables; "READABLE BEATS DEFENDABLE"; "brief a claim, never a line"; the implied-cap-by-contrast warnings) and project/plans/OPEN_ITEMS.md section "WAVE 13" (the settled rule and the census).
THE CLAIM: USA Hockey Rule 625 (interference) is a minor and writes no higher tier — TRUE of the rule, FALSE if presented as the whole price of the ACT (hitting / walking out / impeding / checking a player not in control of the puck). USA Hockey can price the act as roughing under 640 (via (b)–(f) to 640(g) major+GM, 640(h) match; (d) needs no effort to play the puck AND stick above the knees), cross-checking 609(b)/(c) with the shaft, checking from behind 608, 604(c)/(d)/(e) where checking is barred, and 602(a) match for reckless endangerment by any act. Hook: "a player not in control of the puck" (Declaration / Standard of Play / Glossary) — do NOT cite 640(b)'s "no longer in control" for a player who never had the puck. Adult Male via 640(b)→(g) is unsettled — use "can", never state it as settled.
THE NEIGHBOURING CLAIM: 625(a)(8) makes accidental/unavoidable contact with a goalkeeper interference (a minor) — but 607(d) Note 1: "Any deliberate body contact or check that is delivered to the goalkeeper shall be penalized as charging" (607(c) minor+misconduct or major+GM; 607(e) match). Never route DELIBERATE goalie contact to interference.
TASK: find this claim wherever it appears in your file, in EVERY layer (KF, Overview, body, facts, CM, KT) — search for the ACT (walk out, screener, pinch, middle-lane, driver, forechecker, "two minutes", "a minor", "interference" near "USA Hockey"), not only "625". Fix each PERMISSIVE site (a reader would think the act costs at most a minor, or deliberate goalie contact costs interference). In SUMMARY layers use ONE plain sentence with no ladder, e.g. "Under USA Hockey the interference rule itself stops at two minutes, but the same play can be called under other rules that reach an ejection or a match penalty — so it is never only a two-minute risk." Put the full ladder in ONE body place only (verify each rule in sources/usah.txt, flattened). Never write a sentence enumerating several books' tariffs that names some ceilings and not others. Facts caps: `check_facts.py --near <file>` first (300 Rule/Convention, 200 else); fit by substitution, never trade a caveat.
GATES (no pipes): check_links.py --quiet; check_facts.py; check_absolutes.py; check_marker_pairs.py <file> (0 LOST). Render md_to_speech --only <stem> --out <SCRATCH>/w13_<stem> (SCRATCH = /private/tmp/claude-503/-Users-uk45004860-Documents-personal-ice-hockey/a5ac128f-4c16-4271-87c0-b0719b409a29/scratchpad); read changed units voiced alone.
REPORT: every site found (file:line, layer, PERMISSIVE/OK), old→new, sources quoted, and "what this method could not have found".

